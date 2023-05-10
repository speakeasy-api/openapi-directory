# attachments

### Available Operations

* [deleteAttachmentsId](#deleteattachmentsid) - Delete attachment
* [deleteTransactionsTransactionIdAttachmentsAttachmentId](#deletetransactionstransactionidattachmentsattachmentid) - Unassigns attachment in transaction
* [getAttachmentsId](#getattachmentsid) - Get attachment
* [getTransactionsIdAttachments](#gettransactionsidattachments) - List attachments in transaction
* [getUsersIdAttachments](#getusersidattachments) - Lists attachments in user
* [postTransactionsIdAttachments](#posttransactionsidattachments) - Assigns attachment to transaction
* [postUsersIdAttachments](#postusersidattachments) - Create attachment in user
* [putAttachmentsId](#putattachmentsid) - Update attachment

## deleteAttachmentsId

Deletes a particular attachment by its ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteAttachmentsIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteAttachmentsIdRequest();
    $request->id = 623564;

    $response = $sdk->attachments->deleteAttachmentsId($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteTransactionsTransactionIdAttachmentsAttachmentId

Unassigns a particular attachment by its ID from the transaction ID. This does not delete the attachment, it only removes its association from the transaction.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteTransactionsTransactionIdAttachmentsAttachmentIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteTransactionsTransactionIdAttachmentsAttachmentIdRequest();
    $request->attachmentId = 645894;
    $request->transactionId = 384382;

    $response = $sdk->attachments->deleteTransactionsTransactionIdAttachmentsAttachmentId($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAttachmentsId

Gets a particular attachment by its ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetAttachmentsIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAttachmentsIdRequest();
    $request->id = 437587;

    $response = $sdk->attachments->getAttachmentsId($request);

    if ($response->attachment !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTransactionsIdAttachments

Lists attachments belonging to a transaction by their ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetTransactionsIdAttachmentsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTransactionsIdAttachmentsRequest();
    $request->id = 297534;

    $response = $sdk->attachments->getTransactionsIdAttachments($request);

    if ($response->attachments !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUsersIdAttachments

Lists attachments belonging to a user by their ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetUsersIdAttachmentsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUsersIdAttachmentsRequest();
    $request->id = 891773;
    $request->unassigned = 56713;

    $response = $sdk->attachments->getUsersIdAttachments($request);

    if ($response->attachments !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postTransactionsIdAttachments

Assigns an attachment to the transaction by their ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostTransactionsIdAttachmentsRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostTransactionsIdAttachmentsRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostTransactionsIdAttachmentsRequest();
    $request->requestBody = new PostTransactionsIdAttachmentsRequestBody();
    $request->requestBody->attachmentId = 1438154;
    $request->id = 963663;

    $response = $sdk->attachments->postTransactionsIdAttachments($request);

    if ($response->attachment !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postUsersIdAttachments

Creates an attachment belonging to the user by their ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostUsersIdAttachmentsRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostUsersIdAttachmentsRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostUsersIdAttachmentsRequest();
    $request->requestBody = new PostUsersIdAttachmentsRequestBody();
    $request->requestBody->fileData = 'tempora';
    $request->requestBody->fileName = 'taxi.png';
    $request->requestBody->title = 'Invoice for taxi';
    $request->id = 383441;

    $response = $sdk->attachments->postUsersIdAttachments($request);

    if ($response->attachment !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putAttachmentsId

Updates the title of the attachment.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutAttachmentsIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\PutAttachmentsIdRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutAttachmentsIdRequest();
    $request->requestBody = new PutAttachmentsIdRequestBody();
    $request->requestBody->title = 'Invoice for taxi';
    $request->id = 477665;

    $response = $sdk->attachments->putAttachmentsId($request);

    if ($response->attachment !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
