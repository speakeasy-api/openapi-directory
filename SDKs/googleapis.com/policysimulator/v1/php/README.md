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
use \OpenAPI\OpenAPI\Models\Operations\PolicysimulatorProjectsLocationsReplaysCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudPolicysimulatorV1ReplayInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudPolicysimulatorV1ReplayConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudPolicysimulatorV1ReplayConfigLogSourceEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleIamV1Policy;
use \OpenAPI\OpenAPI\Models\Shared\GoogleIamV1AuditConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleIamV1AuditLogConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleIamV1AuditLogConfigLogTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleIamV1Binding;
use \OpenAPI\OpenAPI\Models\Shared\GoogleTypeExpr;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudPolicysimulatorV1ReplayResultsSummary;
use \OpenAPI\OpenAPI\Models\Shared\GoogleTypeDate;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\PolicysimulatorProjectsLocationsReplaysCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PolicysimulatorProjectsLocationsReplaysCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudPolicysimulatorV1ReplayInput = new GoogleCloudPolicysimulatorV1ReplayInput();
    $request->googleCloudPolicysimulatorV1ReplayInput->config = new GoogleCloudPolicysimulatorV1ReplayConfig();
    $request->googleCloudPolicysimulatorV1ReplayInput->config->logSource = GoogleCloudPolicysimulatorV1ReplayConfigLogSourceEnum::RECENT_ACCESSES;
    $request->googleCloudPolicysimulatorV1ReplayInput->config->policyOverlay = [
        'quibusdam' => new GoogleIamV1Policy(),
        'unde' => new GoogleIamV1Policy(),
        'nulla' => new GoogleIamV1Policy(),
    ];
    $request->googleCloudPolicysimulatorV1ReplayInput->resultsSummary = new GoogleCloudPolicysimulatorV1ReplayResultsSummary();
    $request->googleCloudPolicysimulatorV1ReplayInput->resultsSummary->differenceCount = 544883;
    $request->googleCloudPolicysimulatorV1ReplayInput->resultsSummary->errorCount = 847252;
    $request->googleCloudPolicysimulatorV1ReplayInput->resultsSummary->logCount = 423655;
    $request->googleCloudPolicysimulatorV1ReplayInput->resultsSummary->newestDate = new GoogleTypeDate();
    $request->googleCloudPolicysimulatorV1ReplayInput->resultsSummary->newestDate->day = 623564;
    $request->googleCloudPolicysimulatorV1ReplayInput->resultsSummary->newestDate->month = 645894;
    $request->googleCloudPolicysimulatorV1ReplayInput->resultsSummary->newestDate->year = 384382;
    $request->googleCloudPolicysimulatorV1ReplayInput->resultsSummary->oldestDate = new GoogleTypeDate();
    $request->googleCloudPolicysimulatorV1ReplayInput->resultsSummary->oldestDate->day = 437587;
    $request->googleCloudPolicysimulatorV1ReplayInput->resultsSummary->oldestDate->month = 297534;
    $request->googleCloudPolicysimulatorV1ReplayInput->resultsSummary->oldestDate->year = 891773;
    $request->googleCloudPolicysimulatorV1ReplayInput->resultsSummary->unchangedCount = 56713;
    $request->accessToken = 'delectus';
    $request->alt = AltEnum::JSON;
    $request->callback = 'suscipit';
    $request->fields = 'molestiae';
    $request->key = 'minus';
    $request->oauthToken = 'placeat';
    $request->parent = 'voluptatum';
    $request->prettyPrint = false;
    $request->quotaUser = 'iusto';
    $request->uploadType = 'excepturi';
    $request->uploadProtocol = 'nisi';

    $requestSecurity = new PolicysimulatorProjectsLocationsReplaysCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->policysimulatorProjectsLocationsReplaysCreate($request, $requestSecurity);

    if ($response->googleLongrunningOperation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [projects](docs/projects/README.md)

* [policysimulatorProjectsLocationsReplaysCreate](docs/projects/README.md#policysimulatorprojectslocationsreplayscreate) - Creates and starts a Replay using the given ReplayConfig.
* [policysimulatorProjectsLocationsReplaysOperationsList](docs/projects/README.md#policysimulatorprojectslocationsreplaysoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* [policysimulatorProjectsLocationsReplaysResultsList](docs/projects/README.md#policysimulatorprojectslocationsreplaysresultslist) - Lists the results of running a Replay.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
