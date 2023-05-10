# projects

### Available Operations

* [securitycenterProjectsLocationsClustersGetContainerThreatDetectionSettings](#securitycenterprojectslocationsclustersgetcontainerthreatdetectionsettings) - Get the ContainerThreatDetectionSettings resource. In the returned settings response, a missing field only indicates that it was not explicitly set, so no assumption should be made about these fields. In other words, GetContainerThreatDetectionSettings does not calculate the effective service settings for the resource, which accounts for inherited settings and defaults. Instead, use CalculateContainerThreatDetectionSettings for this purpose.
* [securitycenterProjectsLocationsClustersUpdateContainerThreatDetectionSettings](#securitycenterprojectslocationsclustersupdatecontainerthreatdetectionsettings) - Update the ContainerThreatDetectionSettings resource.
* [securitycenterProjectsWebSecurityScannerSettingsCalculate](#securitycenterprojectswebsecurityscannersettingscalculate) - Calculates the effective WebSecurityScannerSettings based on its level in the resource hierarchy and its settings. Settings provided closer to the target resource take precedence over those further away (e.g. folder will override organization level settings). The default SCC setting for the detector service defaults can be overridden at organization, folder and project levels. No assumptions should be made about the SCC defaults as it is considered an internal implementation detail.

## securitycenterProjectsLocationsClustersGetContainerThreatDetectionSettings

Get the ContainerThreatDetectionSettings resource. In the returned settings response, a missing field only indicates that it was not explicitly set, so no assumption should be made about these fields. In other words, GetContainerThreatDetectionSettings does not calculate the effective service settings for the resource, which accounts for inherited settings and defaults. Instead, use CalculateContainerThreatDetectionSettings for this purpose.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SecuritycenterProjectsLocationsClustersGetContainerThreatDetectionSettingsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\SecuritycenterProjectsLocationsClustersGetContainerThreatDetectionSettingsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SecuritycenterProjectsLocationsClustersGetContainerThreatDetectionSettingsRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'delectus';
    $request->alt = AltEnum::JSON;
    $request->callback = 'suscipit';
    $request->fields = 'molestiae';
    $request->key = 'minus';
    $request->name = 'Ken Kshlerin';
    $request->oauthToken = 'recusandae';
    $request->prettyPrint = false;
    $request->quotaUser = 'temporibus';
    $request->uploadType = 'ab';
    $request->uploadProtocol = 'quis';

    $requestSecurity = new SecuritycenterProjectsLocationsClustersGetContainerThreatDetectionSettingsSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->securitycenterProjectsLocationsClustersGetContainerThreatDetectionSettings($request, $requestSecurity);

    if ($response->containerThreatDetectionSettings !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## securitycenterProjectsLocationsClustersUpdateContainerThreatDetectionSettings

Update the ContainerThreatDetectionSettings resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SecuritycenterProjectsLocationsClustersUpdateContainerThreatDetectionSettingsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ContainerThreatDetectionSettingsInput;
use \OpenAPI\OpenAPI\Models\Shared\Config;
use \OpenAPI\OpenAPI\Models\Shared\ConfigModuleEnablementStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\ContainerThreatDetectionSettingsServiceEnablementStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\SecuritycenterProjectsLocationsClustersUpdateContainerThreatDetectionSettingsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SecuritycenterProjectsLocationsClustersUpdateContainerThreatDetectionSettingsRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->containerThreatDetectionSettingsInput = new ContainerThreatDetectionSettingsInput();
    $request->containerThreatDetectionSettingsInput->modules = [
        'perferendis' => new Config(),
        'ipsam' => new Config(),
        'repellendus' => new Config(),
    ];
    $request->containerThreatDetectionSettingsInput->name = 'Cedric Connelly';
    $request->containerThreatDetectionSettingsInput->serviceEnablementState = ContainerThreatDetectionSettingsServiceEnablementStateEnum::DISABLED;
    $request->accessToken = 'molestiae';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quod';
    $request->fields = 'esse';
    $request->key = 'totam';
    $request->name = 'Omar Carroll';
    $request->oauthToken = 'occaecati';
    $request->prettyPrint = false;
    $request->quotaUser = 'fugit';
    $request->updateMask = 'deleniti';
    $request->uploadType = 'hic';
    $request->uploadProtocol = 'optio';

    $requestSecurity = new SecuritycenterProjectsLocationsClustersUpdateContainerThreatDetectionSettingsSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->securitycenterProjectsLocationsClustersUpdateContainerThreatDetectionSettings($request, $requestSecurity);

    if ($response->containerThreatDetectionSettings !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## securitycenterProjectsWebSecurityScannerSettingsCalculate

Calculates the effective WebSecurityScannerSettings based on its level in the resource hierarchy and its settings. Settings provided closer to the target resource take precedence over those further away (e.g. folder will override organization level settings). The default SCC setting for the detector service defaults can be overridden at organization, folder and project levels. No assumptions should be made about the SCC defaults as it is considered an internal implementation detail.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SecuritycenterProjectsWebSecurityScannerSettingsCalculateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\SecuritycenterProjectsWebSecurityScannerSettingsCalculateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SecuritycenterProjectsWebSecurityScannerSettingsCalculateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'beatae';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'molestiae';
    $request->fields = 'modi';
    $request->key = 'qui';
    $request->name = 'Jonathon Klocko';
    $request->oauthToken = 'aspernatur';
    $request->prettyPrint = false;
    $request->quotaUser = 'perferendis';
    $request->uploadType = 'ad';
    $request->uploadProtocol = 'natus';

    $requestSecurity = new SecuritycenterProjectsWebSecurityScannerSettingsCalculateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->securitycenterProjectsWebSecurityScannerSettingsCalculate($request, $requestSecurity);

    if ($response->webSecurityScannerSettings !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
