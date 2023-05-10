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
    $request->scanConfig->latestRun = new ScanRun();
    $request->scanConfig->latestRun->endTime = 'placeat';
    $request->scanConfig->latestRun->errorTrace = new ScanRunErrorTrace();
    $request->scanConfig->latestRun->errorTrace->code = ScanRunErrorTraceCodeEnum::TIMED_OUT_WHILE_SCANNING;
    $request->scanConfig->latestRun->errorTrace->mostCommonHttpErrorCode = 479977;
    $request->scanConfig->latestRun->errorTrace->scanConfigError = new ScanConfigError();
    $request->scanConfig->latestRun->errorTrace->scanConfigError->code = ScanConfigErrorCodeEnum::MALFORMED_RESOURCE_NAME;
    $request->scanConfig->latestRun->errorTrace->scanConfigError->fieldName = 'nisi';
    $request->scanConfig->latestRun->executionState = ScanRunExecutionStateEnum::FINISHED;
    $request->scanConfig->latestRun->hasVulnerabilities = false;
    $request->scanConfig->latestRun->name = 'Miss Raymond Hauck III';
    $request->scanConfig->latestRun->progressPercent = 832620;
    $request->scanConfig->latestRun->resultState = ScanRunResultStateEnum::KILLED;
    $request->scanConfig->latestRun->startTime = 'quo';
    $request->scanConfig->latestRun->urlsCrawledCount = 'odit';
    $request->scanConfig->latestRun->urlsTestedCount = 'at';
    $request->scanConfig->latestRun->warningTraces = [
        new ScanRunWarningTrace(),
        new ScanRunWarningTrace(),
        new ScanRunWarningTrace(),
        new ScanRunWarningTrace(),
    ];
    $request->scanConfig->managedScan = false;
    $request->scanConfig->maxQps = 978619;
    $request->scanConfig->name = 'Bernadette Schmidt';
    $request->scanConfig->riskLevel = ScanConfigRiskLevelEnum::LOW;
    $request->scanConfig->schedule = new Schedule();
    $request->scanConfig->schedule->intervalDurationDays = 678880;
    $request->scanConfig->schedule->scheduleTime = 'dicta';
    $request->scanConfig->startingUrls = [
        'officia',
        'occaecati',
        'fugit',
    ];
    $request->scanConfig->staticIpScan = false;
    $request->scanConfig->targetPlatforms = [
        ScanConfigTargetPlatformsEnum::CLOUD_FUNCTIONS,
        ScanConfigTargetPlatformsEnum::CLOUD_RUN,
        ScanConfigTargetPlatformsEnum::COMPUTE,
    ];
    $request->scanConfig->userAgent = ScanConfigUserAgentEnum::USER_AGENT_UNSPECIFIED;
    $request->accessToken = 'commodi';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'modi';
    $request->fields = 'qui';
    $request->key = 'impedit';
    $request->oauthToken = 'cum';
    $request->parent = 'esse';
    $request->prettyPrint = false;
    $request->quotaUser = 'ipsum';
    $request->uploadType = 'excepturi';
    $request->uploadProtocol = 'aspernatur';

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