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
use \OpenAPI\OpenAPI\Models\Shared\ScanRun;
use \OpenAPI\OpenAPI\Models\Shared\ScanRunExecutionStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\ScanRunResultStateEnum;
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
    $request->scanConfig->blacklistPatterns = [
        'debitis',
        'ipsa',
    ];
    $request->scanConfig->displayName = 'delectus';
    $request->scanConfig->latestRun = new ScanRun();
    $request->scanConfig->latestRun->endTime = 'tempora';
    $request->scanConfig->latestRun->executionState = ScanRunExecutionStateEnum::QUEUED;
    $request->scanConfig->latestRun->hasVulnerabilities = false;
    $request->scanConfig->latestRun->name = 'Alexandra Schulist';
    $request->scanConfig->latestRun->progressPercent = 568045;
    $request->scanConfig->latestRun->resultState = ScanRunResultStateEnum::SUCCESS;
    $request->scanConfig->latestRun->startTime = 'recusandae';
    $request->scanConfig->latestRun->urlsCrawledCount = 'temporibus';
    $request->scanConfig->latestRun->urlsTestedCount = 'ab';
    $request->scanConfig->maxQps = 337396;
    $request->scanConfig->name = 'Iris Aufderhar';
    $request->scanConfig->schedule = new Schedule();
    $request->scanConfig->schedule->intervalDurationDays = 957156;
    $request->scanConfig->schedule->scheduleTime = 'quo';
    $request->scanConfig->startingUrls = [
        'at',
    ];
    $request->scanConfig->targetPlatforms = [
        ScanConfigTargetPlatformsEnum::CLOUD_FUNCTIONS,
        ScanConfigTargetPlatformsEnum::COMPUTE,
        ScanConfigTargetPlatformsEnum::CLOUD_RUN,
        ScanConfigTargetPlatformsEnum::CLOUD_FUNCTIONS,
    ];
    $request->scanConfig->userAgent = ScanConfigUserAgentEnum::CHROME_LINUX;
    $request->accessToken = 'totam';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'dolorum';
    $request->fields = 'dicta';
    $request->key = 'nam';
    $request->oauthToken = 'officia';
    $request->parent = 'occaecati';
    $request->prettyPrint = false;
    $request->quotaUser = 'fugit';
    $request->uploadType = 'deleniti';
    $request->uploadProtocol = 'hic';

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