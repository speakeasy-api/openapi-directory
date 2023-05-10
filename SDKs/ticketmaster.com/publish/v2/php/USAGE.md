<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PatchAttractionRequest;
use \OpenAPI\OpenAPI\Models\Shared\AugmentationData;
use \OpenAPI\OpenAPI\Models\Shared\Change;
use \OpenAPI\OpenAPI\Models\Shared\ChangeOpEnum;
use \OpenAPI\OpenAPI\Models\Shared\AugmentationDataRelatedEntityTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PatchAttractionRequest();
    $request->augmentationData = new AugmentationData();
    $request->augmentationData->changes = [
        new Change(),
        new Change(),
        new Change(),
    ];
    $request->augmentationData->relatedEntityId = 'provident';
    $request->augmentationData->relatedEntityType = AugmentationDataRelatedEntityTypeEnum::VENUE;
    $request->augmentationData->score = 8442.66;
    $request->augmentationData->source = 'unde';
    $request->augmentationData->versionNumber = 857946;
    $request->tmpsCorrelationId = 'corrupti';
    $request->id = 'd69a674e-0f46-47cc-8796-ed151a05dfc2';

    $response = $sdk->patchAttraction($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->