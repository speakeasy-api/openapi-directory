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
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetImageRegionProposalsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetImageRegionProposalsRequest();
    $request->imageId = '10873e42-b006-4d67-8878-ba8581a58208';
    $request->projectId = 'c54fefa9-c95f-42ea-8556-5d307cfee812';

    $response = $sdk->imageRegionProposalApi->getImageRegionProposals($request);

    if ($response->imageRegionProposal !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
