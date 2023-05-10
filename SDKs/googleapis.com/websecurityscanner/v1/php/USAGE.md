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