# openapi/openapi

<!-- Start SDK Installation -->
## SDK Installation

### Composer

To install the SDK first add the below to your `composer.json` file:

```json
{
    "repositories": [
        {
            "type": "github",
            "url": "<UNSET>.git"
        }
    ],
    "require": {
        "openapi/openapi": "*"
    }
}
```

Then run the following command:

```bash
composer update
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [patchAttraction](docs/sdk/README.md#patchattraction) - Publish a patch on an attraction
* [patchEvent](docs/sdk/README.md#patchevent) - Publish a patch on an event
* [patchVenue](docs/sdk/README.md#patchvenue) - Publish a patch on a venue
* [publishAttraction](docs/sdk/README.md#publishattraction) - Publish an attractions
* [publishAttractionVideos](docs/sdk/README.md#publishattractionvideos) - Publish a video on an attraction
* [publishEntitlements](docs/sdk/README.md#publishentitlements) - Publish entitlements on an entity
* [publishEvent](docs/sdk/README.md#publishevent) - Publish an event
* [publishEventVideos](docs/sdk/README.md#publisheventvideos) - Publish a video on an event
* [publishExtension](docs/sdk/README.md#publishextension) - Publish extension on an entity
* [publishVenue](docs/sdk/README.md#publishvenue) - Publish a venue
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
