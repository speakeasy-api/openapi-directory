# externalEmails

## Overview

External Emails

### Available Operations

* [postV2ExternalEmailsJson](#postv2externalemailsjson) - Create an External Email

## postV2ExternalEmailsJson

Creates an external email object.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostV2ExternalEmailsJsonRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostV2ExternalEmailsJsonRequestBody();
    $request->mailbox = 'sit';
    $request->raw = 'modi';

    $response = $sdk->externalEmails->postV2ExternalEmailsJson($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
