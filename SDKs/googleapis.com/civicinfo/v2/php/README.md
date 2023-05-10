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
use \OpenAPI\OpenAPI\Models\Operations\CivicinfoDivisionsSearchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CivicinfoDivisionsSearchRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'provident';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quibusdam';
    $request->fields = 'unde';
    $request->key = 'nulla';
    $request->oauthToken = 'corrupti';
    $request->prettyPrint = false;
    $request->query = 'illum';
    $request->quotaUser = 'vel';
    $request->uploadType = 'error';
    $request->uploadProtocol = 'deserunt';

    $response = $sdk->divisions->civicinfoDivisionsSearch($request);

    if ($response->divisionSearchResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [divisions](docs/divisions/README.md)

* [civicinfoDivisionsSearch](docs/divisions/README.md#civicinfodivisionssearch) - Searches for political divisions by their natural name or OCD ID.

### [elections](docs/elections/README.md)

* [civicinfoElectionsElectionQuery](docs/elections/README.md#civicinfoelectionselectionquery) - List of available elections to query.
* [civicinfoElectionsVoterInfoQuery](docs/elections/README.md#civicinfoelectionsvoterinfoquery) - Looks up information relevant to a voter based on the voter's registered address.

### [representatives](docs/representatives/README.md)

* [civicinfoRepresentativesRepresentativeInfoByAddress](docs/representatives/README.md#civicinforepresentativesrepresentativeinfobyaddress) - Looks up political geography and representative information for a single address.
* [civicinfoRepresentativesRepresentativeInfoByDivision](docs/representatives/README.md#civicinforepresentativesrepresentativeinfobydivision) - Looks up representative information for a single geographic division.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
