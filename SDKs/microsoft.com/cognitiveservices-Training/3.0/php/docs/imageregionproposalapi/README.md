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
    $request->trainingKey = 'consectetur';
    $request->imageId = '34ec1b78-1b36-4a08-888d-100efada200e';
    $request->projectId = 'f0422eb2-164c-4f9a-b836-6c723ffda9e0';

    $response = $sdk->imageRegionProposalApi->getImageRegionProposals($request);

    if ($response->imageRegionProposal !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
