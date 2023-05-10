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
use \OpenAPI\OpenAPI\Models\Operations\WebsecurityscannerProjectsScanConfigsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ScanConfig;
use \OpenAPI\OpenAPI\Models\Shared\Authentication;
use \OpenAPI\OpenAPI\Models\Shared\CustomAccount;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAccount;
use \OpenAPI\OpenAPI\Models\Shared\IapCredential;
use \OpenAPI\OpenAPI\Models\Shared\IapTestServiceAccountInfo;
use \OpenAPI\OpenAPI\Models\Shared\ScanConfigExportToSecurityCommandCenterEnum;
use \OpenAPI\OpenAPI\Models\Shared\ScanConfigRiskLevelEnum;
use \OpenAPI\OpenAPI\Models\Shared\Schedule;
use \OpenAPI\OpenAPI\Models\Shared\ScanConfigUserAgentEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\WebsecurityscannerProjectsScanConfigsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new WebsecurityscannerProjectsScanConfigsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->scanConfig = new ScanConfig();
    $request->scanConfig->authentication = new Authentication();
    $request->scanConfig->authentication->customAccount = new CustomAccount();
    $request->scanConfig->authentication->customAccount->loginUrl = 'provident';
    $request->scanConfig->authentication->customAccount->password = 'distinctio';
    $request->scanConfig->authentication->customAccount->username = 'Rosalinda_Mitchell84';
    $request->scanConfig->authentication->googleAccount = new GoogleAccount();
    $request->scanConfig->authentication->googleAccount->password = 'vel';
    $request->scanConfig->authentication->googleAccount->username = 'Linda.Oberbrunner';
    $request->scanConfig->authentication->iapCredential = new IapCredential();
    $request->scanConfig->authentication->iapCredential->iapTestServiceAccountInfo = new IapTestServiceAccountInfo();
    $request->scanConfig->authentication->iapCredential->iapTestServiceAccountInfo->targetAudienceClientId = 'magnam';
    $request->scanConfig->blacklistPatterns = [
        'ipsa',
        'delectus',
        'tempora',
        'suscipit',
    ];
    $request->scanConfig->displayName = 'molestiae';
    $request->scanConfig->exportToSecurityCommandCenter = ScanConfigExportToSecurityCommandCenterEnum::DISABLED;
    $request->scanConfig->ignoreHttpStatusErrors = false;
    $request->scanConfig->managedScan = false;
    $request->scanConfig->maxQps = 812169;
    $request->scanConfig->name = 'Ted Mante';
    $request->scanConfig->riskLevel = ScanConfigRiskLevelEnum::LOW;
    $request->scanConfig->schedule = new Schedule();
    $request->scanConfig->schedule->intervalDurationDays = 71036;
    $request->scanConfig->schedule->scheduleTime = 'quis';
    $request->scanConfig->startingUrls = [
        'deserunt',
    ];
    $request->scanConfig->staticIpScan = false;
    $request->scanConfig->userAgent = ScanConfigUserAgentEnum::USER_AGENT_UNSPECIFIED;
    $request->accessToken = 'ipsam';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'sapiente';
    $request->fields = 'quo';
    $request->key = 'odit';
    $request->oauthToken = 'at';
    $request->parent = 'at';
    $request->prettyPrint = false;
    $request->quotaUser = 'maiores';
    $request->uploadType = 'molestiae';
    $request->uploadProtocol = 'quod';

    $requestSecurity = new WebsecurityscannerProjectsScanConfigsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->websecurityscannerProjectsScanConfigsCreate($request, $requestSecurity);

    if ($response->scanConfig !== null) {
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

* [websecurityscannerProjectsScanConfigsCreate](docs/projects/README.md#websecurityscannerprojectsscanconfigscreate) - Creates a new ScanConfig.
* [websecurityscannerProjectsScanConfigsDelete](docs/projects/README.md#websecurityscannerprojectsscanconfigsdelete) - Deletes an existing ScanConfig and its child resources.
* [websecurityscannerProjectsScanConfigsList](docs/projects/README.md#websecurityscannerprojectsscanconfigslist) - Lists ScanConfigs under a given project.
* [websecurityscannerProjectsScanConfigsPatch](docs/projects/README.md#websecurityscannerprojectsscanconfigspatch) - Updates a ScanConfig. This method support partial update of a ScanConfig.
* [websecurityscannerProjectsScanConfigsScanRunsCrawledUrlsList](docs/projects/README.md#websecurityscannerprojectsscanconfigsscanrunscrawledurlslist) - List CrawledUrls under a given ScanRun.
* [websecurityscannerProjectsScanConfigsScanRunsFindingTypeStatsList](docs/projects/README.md#websecurityscannerprojectsscanconfigsscanrunsfindingtypestatslist) - List all FindingTypeStats under a given ScanRun.
* [websecurityscannerProjectsScanConfigsScanRunsFindingsGet](docs/projects/README.md#websecurityscannerprojectsscanconfigsscanrunsfindingsget) - Gets a Finding.
* [websecurityscannerProjectsScanConfigsScanRunsFindingsList](docs/projects/README.md#websecurityscannerprojectsscanconfigsscanrunsfindingslist) - List Findings under a given ScanRun.
* [websecurityscannerProjectsScanConfigsScanRunsList](docs/projects/README.md#websecurityscannerprojectsscanconfigsscanrunslist) - Lists ScanRuns under a given ScanConfig, in descending order of ScanRun stop time.
* [websecurityscannerProjectsScanConfigsScanRunsStop](docs/projects/README.md#websecurityscannerprojectsscanconfigsscanrunsstop) - Stops a ScanRun. The stopped ScanRun is returned.
* [websecurityscannerProjectsScanConfigsStart](docs/projects/README.md#websecurityscannerprojectsscanconfigsstart) - Start a ScanRun according to the given ScanConfig.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
