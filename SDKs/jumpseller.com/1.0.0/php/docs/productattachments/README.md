# productAttachments

### Available Operations

* [deleteProductsIdAttachmentsAttachmentIdJson](#deleteproductsidattachmentsattachmentidjson) - Delete a Product Attachment.
* [getProductsIdAttachmentsJson](#getproductsidattachmentsjson) - Retrieve all Product Attachments.
* [getProductsIdAttachmentsCountJson](#getproductsidattachmentscountjson) - Count all Product Attachments.
* [getProductsIdAttachmentsAttachmentIdJson](#getproductsidattachmentsattachmentidjson) - Retrieve a single Product Attachment.
* [postProductsIdAttachmentsJson](#postproductsidattachmentsjson) - Create a new Product Attachment.

## deleteProductsIdAttachmentsAttachmentIdJson

Delete a Product Attachment.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteProductsIdAttachmentsAttachmentIdJsonRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteProductsIdAttachmentsAttachmentIdJsonRequest();
    $request->attachmentId = 630448;
    $request->authtoken = 'facilis';
    $request->id = 874288;
    $request->login = 'ducimus';

    $response = $sdk->productAttachments->deleteProductsIdAttachmentsAttachmentIdJson($request);

    if ($response->deleteProductsIdAttachmentsAttachmentIdJSON200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getProductsIdAttachmentsJson

Retrieve all Product Attachments.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetProductsIdAttachmentsJsonRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetProductsIdAttachmentsJsonRequest();
    $request->authtoken = 'dolore';
    $request->id = 844550;
    $request->login = 'illum';

    $response = $sdk->productAttachments->getProductsIdAttachmentsJson($request);

    if ($response->attachments !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getProductsIdAttachmentsCountJson

Count all Product Attachments.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetProductsIdAttachmentsCountJsonRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetProductsIdAttachmentsCountJsonRequest();
    $request->authtoken = 'sequi';
    $request->id = 617877;
    $request->login = 'impedit';

    $response = $sdk->productAttachments->getProductsIdAttachmentsCountJson($request);

    if ($response->count !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getProductsIdAttachmentsAttachmentIdJson

Retrieve a single Product Attachment.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetProductsIdAttachmentsAttachmentIdJsonRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetProductsIdAttachmentsAttachmentIdJsonRequest();
    $request->attachmentId = 13236;
    $request->authtoken = 'voluptatibus';
    $request->id = 347233;
    $request->login = 'nulla';

    $response = $sdk->productAttachments->getProductsIdAttachmentsAttachmentIdJson($request);

    if ($response->attachment !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postProductsIdAttachmentsJson

Create a new Product Attachment.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostProductsIdAttachmentsJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\AttachmentEdit;
use \OpenAPI\OpenAPI\Models\Shared\AttachmentEditFields;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostProductsIdAttachmentsJsonRequest();
    $request->attachmentEdit = new AttachmentEdit();
    $request->attachmentEdit->attachment = new AttachmentEditFields();
    $request->attachmentEdit->attachment->filename = 'fugit';
    $request->attachmentEdit->attachment->url = 'porro';
    $request->authtoken = 'maiores';
    $request->id = 985033;
    $request->login = 'iusto';

    $response = $sdk->productAttachments->postProductsIdAttachmentsJson($request);

    if ($response->attachment !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
