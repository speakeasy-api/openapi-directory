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
use \OpenAPI\OpenAPI\Models\Operations\TransportationIncentivesLawsAllRequest;
use \OpenAPI\OpenAPI\Models\Operations\TransportationIncentivesLawsAllOutputFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TransportationIncentivesLawsAllRequest();
    $request->apiKey = 'corrupti';
    $request->expired = false;
    $request->incentiveType = 'provident';
    $request->jurisdiction = 'distinctio';
    $request->keyword = 'quibusdam';
    $request->lawType = 'unde';
    $request->limit = 857946;
    $request->local = false;
    $request->outputFormat = TransportationIncentivesLawsAllOutputFormatEnum::XML;
    $request->poc = false;
    $request->recent = false;
    $request->regulationType = 'illum';
    $request->technology = 'vel';
    $request->userType = 'error';

    $response = $sdk->transportationIncentivesLawsAll($request);

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

* [transportationIncentivesLawsAll](docs/sdk/README.md#transportationincentiveslawsall) - Return a full list of laws and incentives that match your query.
* [transportationIncentivesLawsCategories](docs/sdk/README.md#transportationincentiveslawscategories) - Return the law categories for a given category type.
* [transportationIncentivesLawsId](docs/sdk/README.md#transportationincentiveslawsid) - Fetch the details of a specific law given the law's ID.
* [transportationIncentivesLawsPocs](docs/sdk/README.md#transportationincentiveslawspocs) - Get the points of contact for a given jurisdiction.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
