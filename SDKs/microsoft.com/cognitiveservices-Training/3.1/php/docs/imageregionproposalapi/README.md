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
    $request->trainingKey = 'laudantium';
    $request->imageId = '73e42b00-6d67-4887-8ba8-581a58208c54';
    $request->projectId = 'fefa9c95-f2ea-4c55-a5d3-07cfee81206e';

    $response = $sdk->imageRegionProposalApi->getImageRegionProposals($request);

    if ($response->imageRegionProposal !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
