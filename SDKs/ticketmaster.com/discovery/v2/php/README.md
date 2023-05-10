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
use \OpenAPI\OpenAPI\Models\Operations\FindRequest;
use \OpenAPI\OpenAPI\Models\Operations\FindIncludeLicensedContentEnum;
use \OpenAPI\OpenAPI\Models\Operations\FindIncludeSpellcheckEnum;
use \OpenAPI\OpenAPI\Models\Operations\FindIncludeTestEnum;
use \OpenAPI\OpenAPI\Models\Operations\FindSourceEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FindRequest();
    $request->classificationId = [
        'provident',
        'distinctio',
        'quibusdam',
    ];
    $request->classificationName = [
        'nulla',
        'corrupti',
        'illum',
    ];
    $request->id = '69a674e0-f467-4cc8-b96e-d151a05dfc2d';
    $request->includeLicensedContent = FindIncludeLicensedContentEnum::NO;
    $request->includeSpellcheck = FindIncludeSpellcheckEnum::NO;
    $request->includeTest = FindIncludeTestEnum::NO;
    $request->keyword = 'quod';
    $request->locale = 'quod';
    $request->page = 'esse';
    $request->size = 'totam';
    $request->sort = 'porro';
    $request->source = FindSourceEnum::FRONTGATE;

    $response = $sdk->find($request);

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

* [find](docs/sdk/README.md#find) - Attraction Search
* [get](docs/sdk/README.md#get) - Get Attraction Details
* [getGenre](docs/sdk/README.md#getgenre) - Get Genre Details
* [getImages](docs/sdk/README.md#getimages) - Get Event Images
* [getSegment](docs/sdk/README.md#getsegment) - Get Segment Details
* [getSubgenre](docs/sdk/README.md#getsubgenre) - Get Sub-Genre Details
* [getDiscoveryV2Classifications](docs/sdk/README.md#getdiscoveryv2classifications) - Classification Search
* [getDiscoveryV2ClassificationsId](docs/sdk/README.md#getdiscoveryv2classificationsid) - Get Classification Details
* [getDiscoveryV2Events](docs/sdk/README.md#getdiscoveryv2events) - Event Search
* [getDiscoveryV2EventsId](docs/sdk/README.md#getdiscoveryv2eventsid) - Get Event Details
* [getDiscoveryV2Venues](docs/sdk/README.md#getdiscoveryv2venues) - Venue Search
* [getDiscoveryV2VenuesId](docs/sdk/README.md#getdiscoveryv2venuesid) - Get Venue Details

### [v2](docs/v2/README.md)

* [getDiscoveryV2Suggest](docs/v2/README.md#getdiscoveryv2suggest) - Find Suggest
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
