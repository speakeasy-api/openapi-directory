# teamTemplateAttachments

## Overview

Team Template Attachments

### Available Operations

* [getV2TeamTemplateAttachmentsJson](#getv2teamtemplateattachmentsjson) - List team template attachments

## getV2TeamTemplateAttachmentsJson

Fetches multiple team template attachment records. The records can be filtered and paged according to
the respective parameters.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetV2TeamTemplateAttachmentsJsonRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetV2TeamTemplateAttachmentsJsonRequest();
    $request->ids = [
        147400,
        866292,
        756287,
    ];
    $request->includePagingCounts = false;
    $request->limitPagingCounts = false;
    $request->page = 927490;
    $request->perPage = 83791;
    $request->teamTemplateId = [
        516124,
    ];

    $response = $sdk->teamTemplateAttachments->getV2TeamTemplateAttachmentsJson($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
