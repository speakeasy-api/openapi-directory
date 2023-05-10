# glossary

### Available Operations

* [createGlossaryJson](#createglossaryjson) - Upload a glossary file
* [createGlossaryMultipart](#createglossarymultipart) - Upload a glossary file
* [deleteGlossary](#deleteglossary) - Delete a glossary
* [downloadGlobalGlossary](#downloadglobalglossary) - Download account glossary.
* [downloadGlossary](#downloadglossary) - Download a glossary
* [getGlossaries](#getglossaries) - View glossaries
* [getGlossary](#getglossary) - View a glossary
* [updateGlobalGlossaryJson](#updateglobalglossaryjson) - Create or update the account glossary
* [updateGlobalGlossaryMultipart](#updateglobalglossarymultipart) - Create or update the account glossary
* [updateGlossaryJson](#updateglossaryjson) - Update a glossary
* [updateGlossaryMultipart](#updateglossarymultipart) - Update a glossary

## createGlossaryJson

Upload a new glossary file to your project to be used during translation. Glossaries can be CSV or TBX files.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateGlossaryJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\GlossaryUploadRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateGlossaryJsonRequest();
    $request->glossaryUploadRequest = new GlossaryUploadRequest();
    $request->glossaryUploadRequest->glossaries = 'saepe';
    $request->projectId = 263322;

    $response = $sdk->glossary->createGlossaryJson($request);

    if ($response->glossary !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createGlossaryMultipart

Upload a new glossary file to your project to be used during translation. Glossaries can be CSV or TBX files.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateGlossaryMultipartRequest;
use \OpenAPI\OpenAPI\Models\Shared\GlossaryUploadRequest1;
use \OpenAPI\OpenAPI\Models\Shared\GlossaryUploadRequestGlossaries;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateGlossaryMultipartRequest();
    $request->glossaryUploadRequest1 = new GlossaryUploadRequest1();
    $request->glossaryUploadRequest1->glossaries = new GlossaryUploadRequestGlossaries();
    $request->glossaryUploadRequest1->glossaries->content = 'aspernatur';
    $request->glossaryUploadRequest1->glossaries->glossaries = 'perferendis';
    $request->projectId = 229219;

    $response = $sdk->glossary->createGlossaryMultipart($request);

    if ($response->glossary !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteGlossary

Delete the existing glossary from the project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteGlossaryRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteGlossaryRequest();
    $request->glossaryId = 758379;
    $request->projectId = 881586;

    $response = $sdk->glossary->deleteGlossary($request);

    if ($response->operationStatus !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## downloadGlobalGlossary

Download your corporate account's global glossary. This endpoint is available only for corporate account customers. This glossary will be automatically attached to each new project under your account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->glossary->downloadGlobalGlossary();

    if ($response->downloadGlobalGlossary200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## downloadGlossary

Download a previously uploaded glossary file.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DownloadGlossaryRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DownloadGlossaryRequest();
    $request->glossaryId = 320017;
    $request->projectId = 904425;

    $response = $sdk->glossary->downloadGlossary($request);

    if ($response->downloadGlossary200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getGlossaries

View a list of glossaries previously uploaded to the project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetGlossariesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetGlossariesRequest();
    $request->projectId = 383464;

    $response = $sdk->glossary->getGlossaries($request);

    if ($response->glossaryList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getGlossary

View the details of a glossary file uploaded to a project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetGlossaryRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetGlossaryRequest();
    $request->glossaryId = 645785;
    $request->projectId = 588317;

    $response = $sdk->glossary->getGlossary($request);

    if ($response->glossary !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateGlobalGlossaryJson

Update your corporate account's global glossary. This endpoint is available only for corporate account customers. This glossary will be automatically attached to each new project under your account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\AccountGlossaryUploadRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AccountGlossaryUploadRequest();
    $request->glossary = 'minima';

    $response = $sdk->glossary->updateGlobalGlossaryJson($request);

    if ($response->operationStatus !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateGlobalGlossaryMultipart

Update your corporate account's global glossary. This endpoint is available only for corporate account customers. This glossary will be automatically attached to each new project under your account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\AccountGlossaryUploadRequest1;
use \OpenAPI\OpenAPI\Models\Shared\AccountGlossaryUploadRequestGlossary;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AccountGlossaryUploadRequest1();
    $request->glossary = new AccountGlossaryUploadRequestGlossary();
    $request->glossary->content = 'repellendus';
    $request->glossary->glossary = 'totam';

    $response = $sdk->glossary->updateGlobalGlossaryMultipart($request);

    if ($response->operationStatus !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateGlossaryJson

Update the existing glossary file in the project. Public users are allowed to have only 1 glossary per project and file name and contents will replaced with the new glossary file that you are uploading via this endpoint.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateGlossaryJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\GlossaryUploadRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateGlossaryJsonRequest();
    $request->glossaryUploadRequest = new GlossaryUploadRequest();
    $request->glossaryUploadRequest->glossaries = 'similique';
    $request->glossaryId = 55;
    $request->projectId = 872651;

    $response = $sdk->glossary->updateGlossaryJson($request);

    if ($response->glossary !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateGlossaryMultipart

Update the existing glossary file in the project. Public users are allowed to have only 1 glossary per project and file name and contents will replaced with the new glossary file that you are uploading via this endpoint.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateGlossaryMultipartRequest;
use \OpenAPI\OpenAPI\Models\Shared\GlossaryUploadRequest1;
use \OpenAPI\OpenAPI\Models\Shared\GlossaryUploadRequestGlossaries;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateGlossaryMultipartRequest();
    $request->glossaryUploadRequest1 = new GlossaryUploadRequest1();
    $request->glossaryUploadRequest1->glossaries = new GlossaryUploadRequestGlossaries();
    $request->glossaryUploadRequest1->glossaries->content = 'quaerat';
    $request->glossaryUploadRequest1->glossaries->glossaries = 'tempora';
    $request->glossaryId = 425451;
    $request->projectId = 798047;

    $response = $sdk->glossary->updateGlossaryMultipart($request);

    if ($response->glossary !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
