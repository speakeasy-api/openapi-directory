# emailTemplateAttachments

## Overview

Email Template Attachments

### Available Operations

* [getV2EmailTemplateAttachmentsJson](#getv2emailtemplateattachmentsjson) - List email template attachments

## getV2EmailTemplateAttachmentsJson

Fetches multiple email template attachment records. The records can be filtered and paged according to
the respective parameters.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetV2EmailTemplateAttachmentsJsonRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetV2EmailTemplateAttachmentsJsonRequest();
    $request->emailTemplateId = [
        179410,
        958741,
        433279,
        117320,
    ];
    $request->ids = [
        107004,
        583404,
    ];
    $request->includePagingCounts = false;
    $request->limitPagingCounts = false;
    $request->page = 589695;
    $request->perPage = 936469;

    $response = $sdk->emailTemplateAttachments->getV2EmailTemplateAttachmentsJson($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
