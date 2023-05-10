<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Container;
use \OpenAPI\OpenAPI\Models\Shared\ContainerEnabledBuiltInVariableEnum;
use \OpenAPI\OpenAPI\Models\Shared\ContainerUsageContextEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TagmanagerAccountsContainersCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->container = new Container();
    $request->container->accountId = 'provident';
    $request->container->containerId = 'distinctio';
    $request->container->domainName = [
        'unde',
        'nulla',
        'corrupti',
        'illum',
    ];
    $request->container->enabledBuiltInVariable = [
        ContainerEnabledBuiltInVariableEnum::AMP_GTM_EVENT,
        ContainerEnabledBuiltInVariableEnum::FIREBASE_EVENT_PARAMETER_CAMPAIGN,
    ];
    $request->container->fingerprint = 'suscipit';
    $request->container->name = 'Dr. Valerie Toy';
    $request->container->notes = 'suscipit';
    $request->container->publicId = 'molestiae';
    $request->container->timeZoneCountryId = 'minus';
    $request->container->timeZoneId = 'placeat';
    $request->container->usageContext = [
        ContainerUsageContextEnum::IOS,
        ContainerUsageContextEnum::ANDROID_SDK5,
        ContainerUsageContextEnum::IOS,
    ];
    $request->accessToken = 'recusandae';
    $request->accountId = 'temporibus';
    $request->alt = AltEnum::JSON;
    $request->callback = 'quis';
    $request->fields = 'veritatis';
    $request->key = 'deserunt';
    $request->oauthToken = 'perferendis';
    $request->prettyPrint = false;
    $request->quotaUser = 'ipsam';
    $request->uploadType = 'repellendus';
    $request->uploadProtocol = 'sapiente';

    $requestSecurity = new TagmanagerAccountsContainersCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->tagmanagerAccountsContainersCreate($request, $requestSecurity);

    if ($response->container !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->