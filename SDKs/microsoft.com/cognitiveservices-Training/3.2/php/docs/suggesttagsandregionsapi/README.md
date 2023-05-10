# suggestTagsAndRegionsApi

### Available Operations

* [suggestTagsAndRegions](#suggesttagsandregions) - Suggest tags and regions for an array/batch of untagged images. Returns empty array if no tags are found.

## suggestTagsAndRegions

This API will get suggested tags and regions for an array/batch of untagged images along with confidences for the tags. It returns an empty array if no tags are found.
There is a limit of 64 images in the batch.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\SuggestTagsAndRegionsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SuggestTagsAndRegionsRequest();
    $request->imageIds = [
        '69f7ac2f-72f8-4850-8904-911608207888',
        'ec66183b-fe96-459e-b40e-c16faf75b0b5',
        '32a4da37-cbaa-4f44-92c4-842c9b2ad32d',
    ];
    $request->iterationId = 'afe81a88-f444-4457-bfec-d47353f63c82';
    $request->projectId = '09379aa6-9cd5-4fbc-b79d-a18a7822bf95';

    $response = $sdk->suggestTagsAndRegionsApi->suggestTagsAndRegions($request);

    if ($response->suggestedTagAndRegions !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
