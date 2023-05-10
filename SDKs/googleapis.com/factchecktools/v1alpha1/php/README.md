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
use \OpenAPI\OpenAPI\Models\Operations\FactchecktoolsClaimsSearchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FactchecktoolsClaimsSearchRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'provident';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quibusdam';
    $request->fields = 'unde';
    $request->key = 'nulla';
    $request->languageCode = 'corrupti';
    $request->maxAgeDays = 847252;
    $request->oauthToken = 'vel';
    $request->offset = 623564;
    $request->pageSize = 645894;
    $request->pageToken = 'suscipit';
    $request->prettyPrint = false;
    $request->query = 'iure';
    $request->quotaUser = 'magnam';
    $request->reviewPublisherSiteFilter = 'debitis';
    $request->uploadType = 'ipsa';
    $request->uploadProtocol = 'delectus';

    $response = $sdk->claims->factchecktoolsClaimsSearch($request);

    if ($response->googleFactcheckingFactchecktoolsV1alpha1FactCheckedClaimSearchResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [claims](docs/claims/README.md)

* [factchecktoolsClaimsSearch](docs/claims/README.md#factchecktoolsclaimssearch) - Search through fact-checked claims.

### [pages](docs/pages/README.md)

* [factchecktoolsPagesCreate](docs/pages/README.md#factchecktoolspagescreate) - Create `ClaimReview` markup on a page.
* [factchecktoolsPagesDelete](docs/pages/README.md#factchecktoolspagesdelete) - Delete all `ClaimReview` markup on a page.
* [factchecktoolsPagesGet](docs/pages/README.md#factchecktoolspagesget) - Get all `ClaimReview` markup on a page.
* [factchecktoolsPagesList](docs/pages/README.md#factchecktoolspageslist) - List the `ClaimReview` markup pages for a specific URL or for an organization.
* [factchecktoolsPagesUpdate](docs/pages/README.md#factchecktoolspagesupdate) - Update for all `ClaimReview` markup on a page Note that this is a full update. To retain the existing `ClaimReview` markup on a page, first perform a Get operation, then modify the returned markup, and finally call Update with the entire `ClaimReview` markup as the body.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
