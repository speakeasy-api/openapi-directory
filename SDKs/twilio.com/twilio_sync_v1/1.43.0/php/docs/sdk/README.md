# SDK

## Overview

This is the public Twilio REST API.

### Available Operations

* [createDocument](#createdocument)
* [createService](#createservice)
* [createStreamMessage](#createstreammessage) - Create a new Stream Message.
* [createSyncList](#createsynclist)
* [createSyncListItem](#createsynclistitem)
* [createSyncMap](#createsyncmap)
* [createSyncMapItem](#createsyncmapitem)
* [createSyncStream](#createsyncstream) - Create a new Stream.
* [deleteDocument](#deletedocument)
* [deleteDocumentPermission](#deletedocumentpermission) - Delete a specific Sync Document Permission.
* [deleteService](#deleteservice)
* [deleteSyncList](#deletesynclist)
* [deleteSyncListItem](#deletesynclistitem)
* [deleteSyncListPermission](#deletesynclistpermission) - Delete a specific Sync List Permission.
* [deleteSyncMap](#deletesyncmap)
* [deleteSyncMapItem](#deletesyncmapitem)
* [deleteSyncMapPermission](#deletesyncmappermission) - Delete a specific Sync Map Permission.
* [deleteSyncStream](#deletesyncstream) - Delete a specific Stream.
* [fetchDocument](#fetchdocument)
* [fetchDocumentPermission](#fetchdocumentpermission) - Fetch a specific Sync Document Permission.
* [fetchService](#fetchservice)
* [fetchSyncList](#fetchsynclist)
* [fetchSyncListItem](#fetchsynclistitem)
* [fetchSyncListPermission](#fetchsynclistpermission) - Fetch a specific Sync List Permission.
* [fetchSyncMap](#fetchsyncmap)
* [fetchSyncMapItem](#fetchsyncmapitem)
* [fetchSyncMapPermission](#fetchsyncmappermission) - Fetch a specific Sync Map Permission.
* [fetchSyncStream](#fetchsyncstream) - Fetch a specific Stream.
* [listDocument](#listdocument)
* [listDocumentPermission](#listdocumentpermission) - Retrieve a list of all Permissions applying to a Sync Document.
* [listService](#listservice)
* [listSyncList](#listsynclist)
* [listSyncListItem](#listsynclistitem)
* [listSyncListPermission](#listsynclistpermission) - Retrieve a list of all Permissions applying to a Sync List.
* [listSyncMap](#listsyncmap)
* [listSyncMapItem](#listsyncmapitem)
* [listSyncMapPermission](#listsyncmappermission) - Retrieve a list of all Permissions applying to a Sync Map.
* [listSyncStream](#listsyncstream) - Retrieve a list of all Streams in a Service Instance.
* [updateDocument](#updatedocument)
* [updateDocumentPermission](#updatedocumentpermission) - Update an identity's access to a specific Sync Document.
* [updateService](#updateservice)
* [updateSyncList](#updatesynclist)
* [updateSyncListItem](#updatesynclistitem)
* [updateSyncListPermission](#updatesynclistpermission) - Update an identity's access to a specific Sync List.
* [updateSyncMap](#updatesyncmap)
* [updateSyncMapItem](#updatesyncmapitem)
* [updateSyncMapPermission](#updatesyncmappermission) - Update an identity's access to a specific Sync Map.
* [updateSyncStream](#updatesyncstream) - Update a specific Stream.

## createDocument

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateDocumentRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateDocumentCreateDocumentRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateDocumentSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateDocumentRequest();
    $request->requestBody = new CreateDocumentCreateDocumentRequest();
    $request->requestBody->data = 'unde';
    $request->requestBody->ttl = 857946;
    $request->requestBody->uniqueName = 'corrupti';
    $request->serviceSid = 'illum';

    $requestSecurity = new CreateDocumentSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->createDocument($request, $requestSecurity);

    if ($response->syncV1ServiceDocument !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createService

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateServiceCreateServiceRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateServiceSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateServiceCreateServiceRequest();
    $request->aclEnabled = false;
    $request->friendlyName = 'vel';
    $request->reachabilityDebouncingEnabled = false;
    $request->reachabilityDebouncingWindow = 623564;
    $request->reachabilityWebhooksEnabled = false;
    $request->webhookUrl = 'https://high-hound.biz';
    $request->webhooksFromRestEnabled = false;

    $requestSecurity = new CreateServiceSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->createService($request, $requestSecurity);

    if ($response->syncV1Service !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createStreamMessage

Create a new Stream Message.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateStreamMessageRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateStreamMessageCreateStreamMessageRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateStreamMessageSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateStreamMessageRequest();
    $request->requestBody = new CreateStreamMessageCreateStreamMessageRequest();
    $request->requestBody->data = 'debitis';
    $request->serviceSid = 'ipsa';
    $request->streamSid = 'delectus';

    $requestSecurity = new CreateStreamMessageSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->createStreamMessage($request, $requestSecurity);

    if ($response->syncV1ServiceSyncStreamStreamMessage !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createSyncList

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateSyncListRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateSyncListCreateSyncListRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateSyncListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateSyncListRequest();
    $request->requestBody = new CreateSyncListCreateSyncListRequest();
    $request->requestBody->collectionTtl = 272656;
    $request->requestBody->ttl = 383441;
    $request->requestBody->uniqueName = 'molestiae';
    $request->serviceSid = 'minus';

    $requestSecurity = new CreateSyncListSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->createSyncList($request, $requestSecurity);

    if ($response->syncV1ServiceSyncList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createSyncListItem

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateSyncListItemRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateSyncListItemCreateSyncListItemRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateSyncListItemSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateSyncListItemRequest();
    $request->listSid = 'placeat';
    $request->requestBody = new CreateSyncListItemCreateSyncListItemRequest();
    $request->requestBody->collectionTtl = 528895;
    $request->requestBody->data = 'iusto';
    $request->requestBody->itemTtl = 568045;
    $request->requestBody->ttl = 392785;
    $request->serviceSid = 'recusandae';

    $requestSecurity = new CreateSyncListItemSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->createSyncListItem($request, $requestSecurity);

    if ($response->syncV1ServiceSyncListSyncListItem !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createSyncMap

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateSyncMapRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateSyncMapCreateSyncMapRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateSyncMapSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateSyncMapRequest();
    $request->requestBody = new CreateSyncMapCreateSyncMapRequest();
    $request->requestBody->collectionTtl = 836079;
    $request->requestBody->ttl = 71036;
    $request->requestBody->uniqueName = 'quis';
    $request->serviceSid = 'veritatis';

    $requestSecurity = new CreateSyncMapSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->createSyncMap($request, $requestSecurity);

    if ($response->syncV1ServiceSyncMap !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createSyncMapItem

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateSyncMapItemRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateSyncMapItemCreateSyncMapItemRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateSyncMapItemSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateSyncMapItemRequest();
    $request->mapSid = 'deserunt';
    $request->requestBody = new CreateSyncMapItemCreateSyncMapItemRequest();
    $request->requestBody->collectionTtl = 20218;
    $request->requestBody->data = 'ipsam';
    $request->requestBody->itemTtl = 832620;
    $request->requestBody->key = 'sapiente';
    $request->requestBody->ttl = 778157;
    $request->serviceSid = 'odit';

    $requestSecurity = new CreateSyncMapItemSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->createSyncMapItem($request, $requestSecurity);

    if ($response->syncV1ServiceSyncMapSyncMapItem !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createSyncStream

Create a new Stream.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateSyncStreamRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateSyncStreamCreateSyncStreamRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateSyncStreamSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateSyncStreamRequest();
    $request->requestBody = new CreateSyncStreamCreateSyncStreamRequest();
    $request->requestBody->ttl = 870013;
    $request->requestBody->uniqueName = 'at';
    $request->serviceSid = 'maiores';

    $requestSecurity = new CreateSyncStreamSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->createSyncStream($request, $requestSecurity);

    if ($response->syncV1ServiceSyncStream !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteDocument

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteDocumentRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteDocumentSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteDocumentRequest();
    $request->serviceSid = 'molestiae';
    $request->sid = 'quod';

    $requestSecurity = new DeleteDocumentSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->deleteDocument($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteDocumentPermission

Delete a specific Sync Document Permission.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteDocumentPermissionRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteDocumentPermissionSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteDocumentPermissionRequest();
    $request->documentSid = 'quod';
    $request->identity = 'esse';
    $request->serviceSid = 'totam';

    $requestSecurity = new DeleteDocumentPermissionSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->deleteDocumentPermission($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteService

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteServiceRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteServiceSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteServiceRequest();
    $request->sid = 'porro';

    $requestSecurity = new DeleteServiceSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->deleteService($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteSyncList

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSyncListRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSyncListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteSyncListRequest();
    $request->serviceSid = 'dolorum';
    $request->sid = 'dicta';

    $requestSecurity = new DeleteSyncListSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->deleteSyncList($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteSyncListItem

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSyncListItemRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSyncListItemSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteSyncListItemRequest();
    $request->ifMatch = 'nam';
    $request->index = 639921;
    $request->listSid = 'occaecati';
    $request->serviceSid = 'fugit';

    $requestSecurity = new DeleteSyncListItemSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->deleteSyncListItem($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteSyncListPermission

Delete a specific Sync List Permission.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSyncListPermissionRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSyncListPermissionSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteSyncListPermissionRequest();
    $request->identity = 'deleniti';
    $request->listSid = 'hic';
    $request->serviceSid = 'optio';

    $requestSecurity = new DeleteSyncListPermissionSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->deleteSyncListPermission($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteSyncMap

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSyncMapRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSyncMapSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteSyncMapRequest();
    $request->serviceSid = 'totam';
    $request->sid = 'beatae';

    $requestSecurity = new DeleteSyncMapSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->deleteSyncMap($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteSyncMapItem

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSyncMapItemRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSyncMapItemSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteSyncMapItemRequest();
    $request->ifMatch = 'commodi';
    $request->key = 'molestiae';
    $request->mapSid = 'modi';
    $request->serviceSid = 'qui';

    $requestSecurity = new DeleteSyncMapItemSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->deleteSyncMapItem($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteSyncMapPermission

Delete a specific Sync Map Permission.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSyncMapPermissionRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSyncMapPermissionSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteSyncMapPermissionRequest();
    $request->identity = 'impedit';
    $request->mapSid = 'cum';
    $request->serviceSid = 'esse';

    $requestSecurity = new DeleteSyncMapPermissionSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->deleteSyncMapPermission($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteSyncStream

Delete a specific Stream.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSyncStreamRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSyncStreamSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteSyncStreamRequest();
    $request->serviceSid = 'ipsum';
    $request->sid = 'excepturi';

    $requestSecurity = new DeleteSyncStreamSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->deleteSyncStream($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchDocument

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchDocumentRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchDocumentSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchDocumentRequest();
    $request->serviceSid = 'aspernatur';
    $request->sid = 'perferendis';

    $requestSecurity = new FetchDocumentSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchDocument($request, $requestSecurity);

    if ($response->syncV1ServiceDocument !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchDocumentPermission

Fetch a specific Sync Document Permission.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchDocumentPermissionRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchDocumentPermissionSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchDocumentPermissionRequest();
    $request->documentSid = 'ad';
    $request->identity = 'natus';
    $request->serviceSid = 'sed';

    $requestSecurity = new FetchDocumentPermissionSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchDocumentPermission($request, $requestSecurity);

    if ($response->syncV1ServiceDocumentDocumentPermission !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchService

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchServiceRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchServiceSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchServiceRequest();
    $request->sid = 'iste';

    $requestSecurity = new FetchServiceSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchService($request, $requestSecurity);

    if ($response->syncV1Service !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchSyncList

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchSyncListRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchSyncListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchSyncListRequest();
    $request->serviceSid = 'dolor';
    $request->sid = 'natus';

    $requestSecurity = new FetchSyncListSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchSyncList($request, $requestSecurity);

    if ($response->syncV1ServiceSyncList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchSyncListItem

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchSyncListItemRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchSyncListItemSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchSyncListItemRequest();
    $request->index = 386489;
    $request->listSid = 'hic';
    $request->serviceSid = 'saepe';

    $requestSecurity = new FetchSyncListItemSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchSyncListItem($request, $requestSecurity);

    if ($response->syncV1ServiceSyncListSyncListItem !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchSyncListPermission

Fetch a specific Sync List Permission.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchSyncListPermissionRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchSyncListPermissionSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchSyncListPermissionRequest();
    $request->identity = 'fuga';
    $request->listSid = 'in';
    $request->serviceSid = 'corporis';

    $requestSecurity = new FetchSyncListPermissionSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchSyncListPermission($request, $requestSecurity);

    if ($response->syncV1ServiceSyncListSyncListPermission !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchSyncMap

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchSyncMapRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchSyncMapSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchSyncMapRequest();
    $request->serviceSid = 'iste';
    $request->sid = 'iure';

    $requestSecurity = new FetchSyncMapSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchSyncMap($request, $requestSecurity);

    if ($response->syncV1ServiceSyncMap !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchSyncMapItem

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchSyncMapItemRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchSyncMapItemSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchSyncMapItemRequest();
    $request->key = 'saepe';
    $request->mapSid = 'quidem';
    $request->serviceSid = 'architecto';

    $requestSecurity = new FetchSyncMapItemSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchSyncMapItem($request, $requestSecurity);

    if ($response->syncV1ServiceSyncMapSyncMapItem !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchSyncMapPermission

Fetch a specific Sync Map Permission.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchSyncMapPermissionRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchSyncMapPermissionSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchSyncMapPermissionRequest();
    $request->identity = 'ipsa';
    $request->mapSid = 'reiciendis';
    $request->serviceSid = 'est';

    $requestSecurity = new FetchSyncMapPermissionSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchSyncMapPermission($request, $requestSecurity);

    if ($response->syncV1ServiceSyncMapSyncMapPermission !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchSyncStream

Fetch a specific Stream.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchSyncStreamRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchSyncStreamSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchSyncStreamRequest();
    $request->serviceSid = 'mollitia';
    $request->sid = 'laborum';

    $requestSecurity = new FetchSyncStreamSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchSyncStream($request, $requestSecurity);

    if ($response->syncV1ServiceSyncStream !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listDocument

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListDocumentRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListDocumentSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListDocumentRequest();
    $request->page = 170909;
    $request->pageSize = 210382;
    $request->pageToken = 'corporis';
    $request->serviceSid = 'explicabo';

    $requestSecurity = new ListDocumentSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listDocument($request, $requestSecurity);

    if ($response->listDocumentResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listDocumentPermission

Retrieve a list of all Permissions applying to a Sync Document.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListDocumentPermissionRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListDocumentPermissionSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListDocumentPermissionRequest();
    $request->documentSid = 'nobis';
    $request->page = 315428;
    $request->pageSize = 607831;
    $request->pageToken = 'nemo';
    $request->serviceSid = 'minima';

    $requestSecurity = new ListDocumentPermissionSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listDocumentPermission($request, $requestSecurity);

    if ($response->listDocumentPermissionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listService

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListServiceRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListServiceSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListServiceRequest();
    $request->page = 570197;
    $request->pageSize = 38425;
    $request->pageToken = 'iure';

    $requestSecurity = new ListServiceSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listService($request, $requestSecurity);

    if ($response->listServiceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listSyncList

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListSyncListRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListSyncListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListSyncListRequest();
    $request->page = 634274;
    $request->pageSize = 988374;
    $request->pageToken = 'sapiente';
    $request->serviceSid = 'architecto';

    $requestSecurity = new ListSyncListSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listSyncList($request, $requestSecurity);

    if ($response->listSyncListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listSyncListItem

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListSyncListItemRequest;
use \OpenAPI\OpenAPI\Models\Shared\SyncListItemEnumQueryFromBoundTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SyncListItemEnumQueryResultOrderEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListSyncListItemSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListSyncListItemRequest();
    $request->bounds = SyncListItemEnumQueryFromBoundTypeEnum::EXCLUSIVE;
    $request->from = 'dolorem';
    $request->listSid = 'culpa';
    $request->order = SyncListItemEnumQueryResultOrderEnum::ASC;
    $request->page = 995300;
    $request->pageSize = 653108;
    $request->pageToken = 'occaecati';
    $request->serviceSid = 'numquam';

    $requestSecurity = new ListSyncListItemSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listSyncListItem($request, $requestSecurity);

    if ($response->listSyncListItemResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listSyncListPermission

Retrieve a list of all Permissions applying to a Sync List.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListSyncListPermissionRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListSyncListPermissionSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListSyncListPermissionRequest();
    $request->listSid = 'commodi';
    $request->page = 466311;
    $request->pageSize = 474697;
    $request->pageToken = 'velit';
    $request->serviceSid = 'error';

    $requestSecurity = new ListSyncListPermissionSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listSyncListPermission($request, $requestSecurity);

    if ($response->listSyncListPermissionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listSyncMap

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListSyncMapRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListSyncMapSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListSyncMapRequest();
    $request->page = 158969;
    $request->pageSize = 338007;
    $request->pageToken = 'vitae';
    $request->serviceSid = 'laborum';

    $requestSecurity = new ListSyncMapSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listSyncMap($request, $requestSecurity);

    if ($response->listSyncMapResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listSyncMapItem

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListSyncMapItemRequest;
use \OpenAPI\OpenAPI\Models\Shared\SyncMapItemEnumQueryFromBoundTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SyncMapItemEnumQueryResultOrderEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListSyncMapItemSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListSyncMapItemRequest();
    $request->bounds = SyncMapItemEnumQueryFromBoundTypeEnum::EXCLUSIVE;
    $request->from = 'enim';
    $request->mapSid = 'odit';
    $request->order = SyncMapItemEnumQueryResultOrderEnum::DESC;
    $request->page = 196582;
    $request->pageSize = 949572;
    $request->pageToken = 'ipsam';
    $request->serviceSid = 'id';

    $requestSecurity = new ListSyncMapItemSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listSyncMapItem($request, $requestSecurity);

    if ($response->listSyncMapItemResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listSyncMapPermission

Retrieve a list of all Permissions applying to a Sync Map.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListSyncMapPermissionRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListSyncMapPermissionSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListSyncMapPermissionRequest();
    $request->mapSid = 'possimus';
    $request->page = 13571;
    $request->pageSize = 97101;
    $request->pageToken = 'error';
    $request->serviceSid = 'temporibus';

    $requestSecurity = new ListSyncMapPermissionSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listSyncMapPermission($request, $requestSecurity);

    if ($response->listSyncMapPermissionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listSyncStream

Retrieve a list of all Streams in a Service Instance.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListSyncStreamRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListSyncStreamSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListSyncStreamRequest();
    $request->page = 673660;
    $request->pageSize = 96098;
    $request->pageToken = 'reiciendis';
    $request->serviceSid = 'voluptatibus';

    $requestSecurity = new ListSyncStreamSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listSyncStream($request, $requestSecurity);

    if ($response->listSyncStreamResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateDocument

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDocumentRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDocumentUpdateDocumentRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDocumentSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateDocumentRequest();
    $request->ifMatch = 'vero';
    $request->requestBody = new UpdateDocumentUpdateDocumentRequest();
    $request->requestBody->data = 'nihil';
    $request->requestBody->ttl = 509624;
    $request->serviceSid = 'voluptatibus';
    $request->sid = 'ipsa';

    $requestSecurity = new UpdateDocumentSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->updateDocument($request, $requestSecurity);

    if ($response->syncV1ServiceDocument !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateDocumentPermission

Update an identity's access to a specific Sync Document.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDocumentPermissionRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDocumentPermissionUpdateDocumentPermissionRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDocumentPermissionSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateDocumentPermissionRequest();
    $request->documentSid = 'omnis';
    $request->identity = 'voluptate';
    $request->requestBody = new UpdateDocumentPermissionUpdateDocumentPermissionRequest();
    $request->requestBody->manage = false;
    $request->requestBody->read = false;
    $request->requestBody->write = false;
    $request->serviceSid = 'cum';

    $requestSecurity = new UpdateDocumentPermissionSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->updateDocumentPermission($request, $requestSecurity);

    if ($response->syncV1ServiceDocumentDocumentPermission !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateService

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateServiceRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateServiceUpdateServiceRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateServiceSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateServiceRequest();
    $request->requestBody = new UpdateServiceUpdateServiceRequest();
    $request->requestBody->aclEnabled = false;
    $request->requestBody->friendlyName = 'perferendis';
    $request->requestBody->reachabilityDebouncingEnabled = false;
    $request->requestBody->reachabilityDebouncingWindow = 39187;
    $request->requestBody->reachabilityWebhooksEnabled = false;
    $request->requestBody->webhookUrl = 'http://finished-whisker.com';
    $request->requestBody->webhooksFromRestEnabled = false;
    $request->sid = 'corporis';

    $requestSecurity = new UpdateServiceSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->updateService($request, $requestSecurity);

    if ($response->syncV1Service !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateSyncList

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSyncListRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSyncListUpdateSyncListRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSyncListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateSyncListRequest();
    $request->requestBody = new UpdateSyncListUpdateSyncListRequest();
    $request->requestBody->collectionTtl = 296140;
    $request->requestBody->ttl = 480894;
    $request->serviceSid = 'dicta';
    $request->sid = 'harum';

    $requestSecurity = new UpdateSyncListSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->updateSyncList($request, $requestSecurity);

    if ($response->syncV1ServiceSyncList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateSyncListItem

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSyncListItemRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSyncListItemUpdateSyncListItemRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSyncListItemSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateSyncListItemRequest();
    $request->ifMatch = 'enim';
    $request->index = 880476;
    $request->listSid = 'commodi';
    $request->requestBody = new UpdateSyncListItemUpdateSyncListItemRequest();
    $request->requestBody->collectionTtl = 918236;
    $request->requestBody->data = 'quae';
    $request->requestBody->itemTtl = 216822;
    $request->requestBody->ttl = 692472;
    $request->serviceSid = 'molestias';

    $requestSecurity = new UpdateSyncListItemSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->updateSyncListItem($request, $requestSecurity);

    if ($response->syncV1ServiceSyncListSyncListItem !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateSyncListPermission

Update an identity's access to a specific Sync List.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSyncListPermissionRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSyncListPermissionUpdateSyncListPermissionRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSyncListPermissionSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateSyncListPermissionRequest();
    $request->identity = 'excepturi';
    $request->listSid = 'pariatur';
    $request->requestBody = new UpdateSyncListPermissionUpdateSyncListPermissionRequest();
    $request->requestBody->manage = false;
    $request->requestBody->read = false;
    $request->requestBody->write = false;
    $request->serviceSid = 'modi';

    $requestSecurity = new UpdateSyncListPermissionSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->updateSyncListPermission($request, $requestSecurity);

    if ($response->syncV1ServiceSyncListSyncListPermission !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateSyncMap

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSyncMapRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSyncMapUpdateSyncMapRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSyncMapSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateSyncMapRequest();
    $request->requestBody = new UpdateSyncMapUpdateSyncMapRequest();
    $request->requestBody->collectionTtl = 508969;
    $request->requestBody->ttl = 523248;
    $request->serviceSid = 'voluptates';
    $request->sid = 'quasi';

    $requestSecurity = new UpdateSyncMapSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->updateSyncMap($request, $requestSecurity);

    if ($response->syncV1ServiceSyncMap !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateSyncMapItem

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSyncMapItemRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSyncMapItemUpdateSyncMapItemRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSyncMapItemSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateSyncMapItemRequest();
    $request->ifMatch = 'repudiandae';
    $request->key = 'sint';
    $request->mapSid = 'veritatis';
    $request->requestBody = new UpdateSyncMapItemUpdateSyncMapItemRequest();
    $request->requestBody->collectionTtl = 929297;
    $request->requestBody->data = 'incidunt';
    $request->requestBody->itemTtl = 318569;
    $request->requestBody->ttl = 9356;
    $request->serviceSid = 'est';

    $requestSecurity = new UpdateSyncMapItemSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->updateSyncMapItem($request, $requestSecurity);

    if ($response->syncV1ServiceSyncMapSyncMapItem !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateSyncMapPermission

Update an identity's access to a specific Sync Map.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSyncMapPermissionRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSyncMapPermissionUpdateSyncMapPermissionRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSyncMapPermissionSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateSyncMapPermissionRequest();
    $request->identity = 'quibusdam';
    $request->mapSid = 'explicabo';
    $request->requestBody = new UpdateSyncMapPermissionUpdateSyncMapPermissionRequest();
    $request->requestBody->manage = false;
    $request->requestBody->read = false;
    $request->requestBody->write = false;
    $request->serviceSid = 'deserunt';

    $requestSecurity = new UpdateSyncMapPermissionSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->updateSyncMapPermission($request, $requestSecurity);

    if ($response->syncV1ServiceSyncMapSyncMapPermission !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateSyncStream

Update a specific Stream.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSyncStreamRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSyncStreamUpdateSyncStreamRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSyncStreamSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateSyncStreamRequest();
    $request->requestBody = new UpdateSyncStreamUpdateSyncStreamRequest();
    $request->requestBody->ttl = 716327;
    $request->serviceSid = 'quibusdam';
    $request->sid = 'labore';

    $requestSecurity = new UpdateSyncStreamSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->updateSyncStream($request, $requestSecurity);

    if ($response->syncV1ServiceSyncStream !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
