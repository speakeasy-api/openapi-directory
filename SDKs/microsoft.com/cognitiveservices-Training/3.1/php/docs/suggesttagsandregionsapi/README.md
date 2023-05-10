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
use \OpenAPI\OpenAPI\Models\Operations\SuggestTagsAndRegionsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SuggestTagsAndRegionsRequest();
    $request->trainingKey = 'fugit';
    $request->imageIds = [
        'ced8f9fd-b941-40f6-bbbf-817837b01afd',
        'd7886241-89eb-4448-b3f5-033f19dbf125',
    ];
    $request->iterationId = 'ce4152ea-b9cd-47e5-a24a-6a0e123b7847';
    $request->projectId = 'ec59e1f6-7f3c-44cc-a4b6-d7696ff3c574';

    $response = $sdk->suggestTagsAndRegionsApi->suggestTagsAndRegions($request);

    if ($response->suggestedTagAndRegions !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
