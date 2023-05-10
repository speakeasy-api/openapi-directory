# imageRegionProposalApi

### Available Operations

* [getImageRegionProposals](#getimageregionproposals) - Get region proposals for an image. Returns empty array if no proposals are found.

## getImageRegionProposals

This API will get region proposals for an image along with confidences for the region. It returns an empty array if no proposals are found.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetImageRegionProposalsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetImageRegionProposalsRequest();
    $request->trainingKey = 'vero';
    $request->imageId = '056013f5-9da7-457a-99ec-fef66ef1caa3';
    $request->projectId = '383c2beb-4773-473c-8d72-f64d1db1f2c4';

    $response = $sdk->imageRegionProposalApi->getImageRegionProposals($request);

    if ($response->imageRegionProposal !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
