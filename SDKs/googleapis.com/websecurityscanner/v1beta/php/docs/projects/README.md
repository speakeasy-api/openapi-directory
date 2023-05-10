# projects

### Available Operations

* [websecurityscannerProjectsScanConfigsCreate](#websecurityscannerprojectsscanconfigscreate) - Creates a new ScanConfig.
* [websecurityscannerProjectsScanConfigsDelete](#websecurityscannerprojectsscanconfigsdelete) - Deletes an existing ScanConfig and its child resources.
* [websecurityscannerProjectsScanConfigsList](#websecurityscannerprojectsscanconfigslist) - Lists ScanConfigs under a given project.
* [websecurityscannerProjectsScanConfigsPatch](#websecurityscannerprojectsscanconfigspatch) - Updates a ScanConfig. This method support partial update of a ScanConfig.
* [websecurityscannerProjectsScanConfigsScanRunsCrawledUrlsList](#websecurityscannerprojectsscanconfigsscanrunscrawledurlslist) - List CrawledUrls under a given ScanRun.
* [websecurityscannerProjectsScanConfigsScanRunsFindingTypeStatsList](#websecurityscannerprojectsscanconfigsscanrunsfindingtypestatslist) - List all FindingTypeStats under a given ScanRun.
* [websecurityscannerProjectsScanConfigsScanRunsFindingsGet](#websecurityscannerprojectsscanconfigsscanrunsfindingsget) - Gets a Finding.
* [websecurityscannerProjectsScanConfigsScanRunsFindingsList](#websecurityscannerprojectsscanconfigsscanrunsfindingslist) - List Findings under a given ScanRun.
* [websecurityscannerProjectsScanConfigsScanRunsList](#websecurityscannerprojectsscanconfigsscanrunslist) - Lists ScanRuns under a given ScanConfig, in descending order of ScanRun stop time.
* [websecurityscannerProjectsScanConfigsScanRunsStop](#websecurityscannerprojectsscanconfigsscanrunsstop) - Stops a ScanRun. The stopped ScanRun is returned.
* [websecurityscannerProjectsScanConfigsStart](#websecurityscannerprojectsscanconfigsstart) - Start a ScanRun according to the given ScanConfig.

## websecurityscannerProjectsScanConfigsCreate

Creates a new ScanConfig.

### Example Usage

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
use \OpenAPI\OpenAPI\Models\Shared\ScanRun;
use \OpenAPI\OpenAPI\Models\Shared\ScanRunErrorTrace;
use \OpenAPI\OpenAPI\Models\Shared\ScanRunErrorTraceCodeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ScanConfigError;
use \OpenAPI\OpenAPI\Models\Shared\ScanConfigErrorCodeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ScanRunExecutionStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\ScanRunResultStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\ScanRunWarningTrace;
use \OpenAPI\OpenAPI\Models\Shared\ScanRunWarningTraceCodeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ScanConfigRiskLevelEnum;
use \OpenAPI\OpenAPI\Models\Shared\Schedule;
use \OpenAPI\OpenAPI\Models\Shared\ScanConfigTargetPlatformsEnum;
use \OpenAPI\OpenAPI\Models\Shared\ScanConfigUserAgentEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\WebsecurityscannerProjectsScanConfigsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new WebsecurityscannerProjectsScanConfigsCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->scanConfig = new ScanConfig();
    $request->scanConfig->authentication = new Authentication();
    $request->scanConfig->authentication->customAccount = new CustomAccount();
    $request->scanConfig->authentication->customAccount->loginUrl = 'ad';
    $request->scanConfig->authentication->customAccount->password = 'natus';
    $request->scanConfig->authentication->customAccount->username = 'Camden61';
    $request->scanConfig->authentication->googleAccount = new GoogleAccount();
    $request->scanConfig->authentication->googleAccount->password = 'laboriosam';
    $request->scanConfig->authentication->googleAccount->username = 'Tyra.Turcotte35';
    $request->scanConfig->authentication->iapCredential = new IapCredential();
    $request->scanConfig->authentication->iapCredential->iapTestServiceAccountInfo = new IapTestServiceAccountInfo();
    $request->scanConfig->authentication->iapCredential->iapTestServiceAccountInfo->targetAudienceClientId = 'iste';
    $request->scanConfig->blacklistPatterns = [
        'saepe',
        'quidem',
    ];
    $request->scanConfig->displayName = 'architecto';
    $request->scanConfig->exportToSecurityCommandCenter = ScanConfigExportToSecurityCommandCenterEnum::EXPORT_TO_SECURITY_COMMAND_CENTER_UNSPECIFIED;
    $request->scanConfig->ignoreHttpStatusErrors = false;
    $request->scanConfig->latestRun = new ScanRun();
    $request->scanConfig->latestRun->endTime = 'reiciendis';
    $request->scanConfig->latestRun->errorTrace = new ScanRunErrorTrace();
    $request->scanConfig->latestRun->errorTrace->code = ScanRunErrorTraceCodeEnum::TOO_MANY_REDIRECTS;
    $request->scanConfig->latestRun->errorTrace->mostCommonHttpErrorCode = 653140;
    $request->scanConfig->latestRun->errorTrace->scanConfigError = new ScanConfigError();
    $request->scanConfig->latestRun->errorTrace->scanConfigError->code = ScanConfigErrorCodeEnum::SCAN_NOT_RUNNING;
    $request->scanConfig->latestRun->errorTrace->scanConfigError->fieldName = 'dolores';
    $request->scanConfig->latestRun->executionState = ScanRunExecutionStateEnum::EXECUTION_STATE_UNSPECIFIED;
    $request->scanConfig->latestRun->hasVulnerabilities = false;
    $request->scanConfig->latestRun->name = 'Rose Rolfson';
    $request->scanConfig->latestRun->progressPercent = 363711;
    $request->scanConfig->latestRun->resultState = ScanRunResultStateEnum::SUCCESS;
    $request->scanConfig->latestRun->startTime = 'excepturi';
    $request->scanConfig->latestRun->urlsCrawledCount = 'accusantium';
    $request->scanConfig->latestRun->urlsTestedCount = 'iure';
    $request->scanConfig->latestRun->warningTraces = [
        new ScanRunWarningTrace(),
        new ScanRunWarningTrace(),
        new ScanRunWarningTrace(),
    ];
    $request->scanConfig->managedScan = false;
    $request->scanConfig->maxQps = 988374;
    $request->scanConfig->name = 'Juan O'Hara';
    $request->scanConfig->riskLevel = ScanConfigRiskLevelEnum::RISK_LEVEL_UNSPECIFIED;
    $request->scanConfig->schedule = new Schedule();
    $request->scanConfig->schedule->intervalDurationDays = 995300;
    $request->scanConfig->schedule->scheduleTime = 'mollitia';
    $request->scanConfig->startingUrls = [
        'numquam',
        'commodi',
        'quam',
    ];
    $request->scanConfig->staticIpScan = false;
    $request->scanConfig->targetPlatforms = [
        ScanConfigTargetPlatformsEnum::APP_ENGINE,
        ScanConfigTargetPlatformsEnum::CLOUD_RUN,
    ];
    $request->scanConfig->userAgent = ScanConfigUserAgentEnum::USER_AGENT_UNSPECIFIED;
    $request->accessToken = 'quis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'laborum';
    $request->fields = 'animi';
    $request->key = 'enim';
    $request->oauthToken = 'odit';
    $request->parent = 'quo';
    $request->prettyPrint = false;
    $request->quotaUser = 'sequi';
    $request->uploadType = 'tenetur';
    $request->uploadProtocol = 'ipsam';

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

## websecurityscannerProjectsScanConfigsDelete

Deletes an existing ScanConfig and its child resources.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\WebsecurityscannerProjectsScanConfigsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\WebsecurityscannerProjectsScanConfigsDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new WebsecurityscannerProjectsScanConfigsDeleteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'possimus';
    $request->alt = AltEnum::JSON;
    $request->callback = 'quasi';
    $request->fields = 'error';
    $request->key = 'temporibus';
    $request->name = 'Ryan Witting';
    $request->oauthToken = 'nihil';
    $request->prettyPrint = false;
    $request->quotaUser = 'praesentium';
    $request->uploadType = 'voluptatibus';
    $request->uploadProtocol = 'ipsa';

    $requestSecurity = new WebsecurityscannerProjectsScanConfigsDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->websecurityscannerProjectsScanConfigsDelete($request, $requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## websecurityscannerProjectsScanConfigsList

Lists ScanConfigs under a given project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\WebsecurityscannerProjectsScanConfigsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\WebsecurityscannerProjectsScanConfigsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new WebsecurityscannerProjectsScanConfigsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'voluptate';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'perferendis';
    $request->fields = 'doloremque';
    $request->key = 'reprehenderit';
    $request->oauthToken = 'ut';
    $request->pageSize = 979587;
    $request->pageToken = 'dicta';
    $request->parent = 'corporis';
    $request->prettyPrint = false;
    $request->quotaUser = 'dolore';
    $request->uploadType = 'iusto';
    $request->uploadProtocol = 'dicta';

    $requestSecurity = new WebsecurityscannerProjectsScanConfigsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->websecurityscannerProjectsScanConfigsList($request, $requestSecurity);

    if ($response->listScanConfigsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## websecurityscannerProjectsScanConfigsPatch

Updates a ScanConfig. This method support partial update of a ScanConfig.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\WebsecurityscannerProjectsScanConfigsPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ScanConfig;
use \OpenAPI\OpenAPI\Models\Shared\Authentication;
use \OpenAPI\OpenAPI\Models\Shared\CustomAccount;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAccount;
use \OpenAPI\OpenAPI\Models\Shared\IapCredential;
use \OpenAPI\OpenAPI\Models\Shared\IapTestServiceAccountInfo;
use \OpenAPI\OpenAPI\Models\Shared\ScanConfigExportToSecurityCommandCenterEnum;
use \OpenAPI\OpenAPI\Models\Shared\ScanRun;
use \OpenAPI\OpenAPI\Models\Shared\ScanRunErrorTrace;
use \OpenAPI\OpenAPI\Models\Shared\ScanRunErrorTraceCodeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ScanConfigError;
use \OpenAPI\OpenAPI\Models\Shared\ScanConfigErrorCodeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ScanRunExecutionStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\ScanRunResultStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\ScanRunWarningTrace;
use \OpenAPI\OpenAPI\Models\Shared\ScanRunWarningTraceCodeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ScanConfigRiskLevelEnum;
use \OpenAPI\OpenAPI\Models\Shared\Schedule;
use \OpenAPI\OpenAPI\Models\Shared\ScanConfigTargetPlatformsEnum;
use \OpenAPI\OpenAPI\Models\Shared\ScanConfigUserAgentEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\WebsecurityscannerProjectsScanConfigsPatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new WebsecurityscannerProjectsScanConfigsPatchRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->scanConfig = new ScanConfig();
    $request->scanConfig->authentication = new Authentication();
    $request->scanConfig->authentication->customAccount = new CustomAccount();
    $request->scanConfig->authentication->customAccount->loginUrl = 'enim';
    $request->scanConfig->authentication->customAccount->password = 'accusamus';
    $request->scanConfig->authentication->customAccount->username = 'Harry21';
    $request->scanConfig->authentication->googleAccount = new GoogleAccount();
    $request->scanConfig->authentication->googleAccount->password = 'quidem';
    $request->scanConfig->authentication->googleAccount->username = 'Kennedi.Mante50';
    $request->scanConfig->authentication->iapCredential = new IapCredential();
    $request->scanConfig->authentication->iapCredential->iapTestServiceAccountInfo = new IapTestServiceAccountInfo();
    $request->scanConfig->authentication->iapCredential->iapTestServiceAccountInfo->targetAudienceClientId = 'rem';
    $request->scanConfig->blacklistPatterns = [
        'quasi',
        'repudiandae',
        'sint',
        'veritatis',
    ];
    $request->scanConfig->displayName = 'itaque';
    $request->scanConfig->exportToSecurityCommandCenter = ScanConfigExportToSecurityCommandCenterEnum::EXPORT_TO_SECURITY_COMMAND_CENTER_UNSPECIFIED;
    $request->scanConfig->ignoreHttpStatusErrors = false;
    $request->scanConfig->latestRun = new ScanRun();
    $request->scanConfig->latestRun->endTime = 'enim';
    $request->scanConfig->latestRun->errorTrace = new ScanRunErrorTrace();
    $request->scanConfig->latestRun->errorTrace->code = ScanRunErrorTraceCodeEnum::CODE_UNSPECIFIED;
    $request->scanConfig->latestRun->errorTrace->mostCommonHttpErrorCode = 667411;
    $request->scanConfig->latestRun->errorTrace->scanConfigError = new ScanConfigError();
    $request->scanConfig->latestRun->errorTrace->scanConfigError->code = ScanConfigErrorCodeEnum::SERVICE_ACCOUNT_NOT_CONFIGURED;
    $request->scanConfig->latestRun->errorTrace->scanConfigError->fieldName = 'explicabo';
    $request->scanConfig->latestRun->executionState = ScanRunExecutionStateEnum::SCANNING;
    $request->scanConfig->latestRun->hasVulnerabilities = false;
    $request->scanConfig->latestRun->name = 'Marty Green';
    $request->scanConfig->latestRun->progressPercent = 397821;
    $request->scanConfig->latestRun->resultState = ScanRunResultStateEnum::ERROR;
    $request->scanConfig->latestRun->startTime = 'quos';
    $request->scanConfig->latestRun->urlsCrawledCount = 'perferendis';
    $request->scanConfig->latestRun->urlsTestedCount = 'magni';
    $request->scanConfig->latestRun->warningTraces = [
        new ScanRunWarningTrace(),
        new ScanRunWarningTrace(),
        new ScanRunWarningTrace(),
        new ScanRunWarningTrace(),
    ];
    $request->scanConfig->managedScan = false;
    $request->scanConfig->maxQps = 369808;
    $request->scanConfig->name = 'Denise Pagac';
    $request->scanConfig->riskLevel = ScanConfigRiskLevelEnum::LOW;
    $request->scanConfig->schedule = new Schedule();
    $request->scanConfig->schedule->intervalDurationDays = 735194;
    $request->scanConfig->schedule->scheduleTime = 'labore';
    $request->scanConfig->startingUrls = [
        'eum',
        'non',
        'eligendi',
        'sint',
    ];
    $request->scanConfig->staticIpScan = false;
    $request->scanConfig->targetPlatforms = [
        ScanConfigTargetPlatformsEnum::COMPUTE,
        ScanConfigTargetPlatformsEnum::CLOUD_FUNCTIONS,
    ];
    $request->scanConfig->userAgent = ScanConfigUserAgentEnum::CHROME_ANDROID;
    $request->accessToken = 'officia';
    $request->alt = AltEnum::JSON;
    $request->callback = 'debitis';
    $request->fields = 'a';
    $request->key = 'dolorum';
    $request->name = 'Arlene Stamm';
    $request->oauthToken = 'dicta';
    $request->prettyPrint = false;
    $request->quotaUser = 'magnam';
    $request->updateMask = 'cumque';
    $request->uploadType = 'facere';
    $request->uploadProtocol = 'ea';

    $requestSecurity = new WebsecurityscannerProjectsScanConfigsPatchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->websecurityscannerProjectsScanConfigsPatch($request, $requestSecurity);

    if ($response->scanConfig !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## websecurityscannerProjectsScanConfigsScanRunsCrawledUrlsList

List CrawledUrls under a given ScanRun.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\WebsecurityscannerProjectsScanConfigsScanRunsCrawledUrlsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\WebsecurityscannerProjectsScanConfigsScanRunsCrawledUrlsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new WebsecurityscannerProjectsScanConfigsScanRunsCrawledUrlsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'laborum';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'non';
    $request->fields = 'occaecati';
    $request->key = 'enim';
    $request->oauthToken = 'accusamus';
    $request->pageSize = 965417;
    $request->pageToken = 'quidem';
    $request->parent = 'provident';
    $request->prettyPrint = false;
    $request->quotaUser = 'nam';
    $request->uploadType = 'id';
    $request->uploadProtocol = 'blanditiis';

    $requestSecurity = new WebsecurityscannerProjectsScanConfigsScanRunsCrawledUrlsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->websecurityscannerProjectsScanConfigsScanRunsCrawledUrlsList($request, $requestSecurity);

    if ($response->listCrawledUrlsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## websecurityscannerProjectsScanConfigsScanRunsFindingTypeStatsList

List all FindingTypeStats under a given ScanRun.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\WebsecurityscannerProjectsScanConfigsScanRunsFindingTypeStatsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\WebsecurityscannerProjectsScanConfigsScanRunsFindingTypeStatsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new WebsecurityscannerProjectsScanConfigsScanRunsFindingTypeStatsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'sapiente';
    $request->alt = AltEnum::JSON;
    $request->callback = 'deserunt';
    $request->fields = 'nisi';
    $request->key = 'vel';
    $request->oauthToken = 'natus';
    $request->parent = 'omnis';
    $request->prettyPrint = false;
    $request->quotaUser = 'molestiae';
    $request->uploadType = 'perferendis';
    $request->uploadProtocol = 'nihil';

    $requestSecurity = new WebsecurityscannerProjectsScanConfigsScanRunsFindingTypeStatsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->websecurityscannerProjectsScanConfigsScanRunsFindingTypeStatsList($request, $requestSecurity);

    if ($response->listFindingTypeStatsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## websecurityscannerProjectsScanConfigsScanRunsFindingsGet

Gets a Finding.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\WebsecurityscannerProjectsScanConfigsScanRunsFindingsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\WebsecurityscannerProjectsScanConfigsScanRunsFindingsGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new WebsecurityscannerProjectsScanConfigsScanRunsFindingsGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'distinctio';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'labore';
    $request->fields = 'labore';
    $request->key = 'suscipit';
    $request->name = 'Robin Keebler';
    $request->oauthToken = 'architecto';
    $request->prettyPrint = false;
    $request->quotaUser = 'magnam';
    $request->uploadType = 'et';
    $request->uploadProtocol = 'excepturi';

    $requestSecurity = new WebsecurityscannerProjectsScanConfigsScanRunsFindingsGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->websecurityscannerProjectsScanConfigsScanRunsFindingsGet($request, $requestSecurity);

    if ($response->finding !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## websecurityscannerProjectsScanConfigsScanRunsFindingsList

List Findings under a given ScanRun.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\WebsecurityscannerProjectsScanConfigsScanRunsFindingsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\WebsecurityscannerProjectsScanConfigsScanRunsFindingsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new WebsecurityscannerProjectsScanConfigsScanRunsFindingsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'provident';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'sint';
    $request->fields = 'accusantium';
    $request->filter = 'mollitia';
    $request->key = 'reiciendis';
    $request->oauthToken = 'mollitia';
    $request->pageSize = 320997;
    $request->pageToken = 'eum';
    $request->parent = 'dolor';
    $request->prettyPrint = false;
    $request->quotaUser = 'necessitatibus';
    $request->uploadType = 'odit';
    $request->uploadProtocol = 'nemo';

    $requestSecurity = new WebsecurityscannerProjectsScanConfigsScanRunsFindingsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->websecurityscannerProjectsScanConfigsScanRunsFindingsList($request, $requestSecurity);

    if ($response->listFindingsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## websecurityscannerProjectsScanConfigsScanRunsList

Lists ScanRuns under a given ScanConfig, in descending order of ScanRun stop time.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\WebsecurityscannerProjectsScanConfigsScanRunsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\WebsecurityscannerProjectsScanConfigsScanRunsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new WebsecurityscannerProjectsScanConfigsScanRunsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'iure';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'debitis';
    $request->fields = 'eius';
    $request->key = 'maxime';
    $request->oauthToken = 'deleniti';
    $request->pageSize = 703889;
    $request->pageToken = 'in';
    $request->parent = 'architecto';
    $request->prettyPrint = false;
    $request->quotaUser = 'architecto';
    $request->uploadType = 'repudiandae';
    $request->uploadProtocol = 'ullam';

    $requestSecurity = new WebsecurityscannerProjectsScanConfigsScanRunsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->websecurityscannerProjectsScanConfigsScanRunsList($request, $requestSecurity);

    if ($response->listScanRunsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## websecurityscannerProjectsScanConfigsScanRunsStop

Stops a ScanRun. The stopped ScanRun is returned.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\WebsecurityscannerProjectsScanConfigsScanRunsStopRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\WebsecurityscannerProjectsScanConfigsScanRunsStopSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new WebsecurityscannerProjectsScanConfigsScanRunsStopRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->requestBody = [
        'repellat' => 'quibusdam',
        'sed' => 'saepe',
    ];
    $request->accessToken = 'pariatur';
    $request->alt = AltEnum::JSON;
    $request->callback = 'consequuntur';
    $request->fields = 'praesentium';
    $request->key = 'natus';
    $request->name = 'Joan Satterfield';
    $request->oauthToken = 'maxime';
    $request->prettyPrint = false;
    $request->quotaUser = 'ea';
    $request->uploadType = 'excepturi';
    $request->uploadProtocol = 'odit';

    $requestSecurity = new WebsecurityscannerProjectsScanConfigsScanRunsStopSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->websecurityscannerProjectsScanConfigsScanRunsStop($request, $requestSecurity);

    if ($response->scanRun !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## websecurityscannerProjectsScanConfigsStart

Start a ScanRun according to the given ScanConfig.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\WebsecurityscannerProjectsScanConfigsStartRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\WebsecurityscannerProjectsScanConfigsStartSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new WebsecurityscannerProjectsScanConfigsStartRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->requestBody = [
        'ab' => 'maiores',
    ];
    $request->accessToken = 'quidem';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'voluptate';
    $request->fields = 'autem';
    $request->key = 'nam';
    $request->name = 'Meredith Hickle PhD';
    $request->oauthToken = 'amet';
    $request->prettyPrint = false;
    $request->quotaUser = 'aut';
    $request->uploadType = 'cumque';
    $request->uploadProtocol = 'corporis';

    $requestSecurity = new WebsecurityscannerProjectsScanConfigsStartSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->websecurityscannerProjectsScanConfigsStart($request, $requestSecurity);

    if ($response->scanRun !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
