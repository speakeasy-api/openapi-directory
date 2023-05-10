<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DatafusionProjectsLocationsInstancesCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\InstanceInput;
use \OpenAPI\OpenAPI\Models\Shared\CryptoKeyConfig;
use \OpenAPI\OpenAPI\Models\Shared\EventPublishConfig;
use \OpenAPI\OpenAPI\Models\Shared\NetworkConfig;
use \OpenAPI\OpenAPI\Models\Shared\InstanceTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DatafusionProjectsLocationsInstancesCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DatafusionProjectsLocationsInstancesCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->instanceInput = new InstanceInput();
    $request->instanceInput->cryptoKeyConfig = new CryptoKeyConfig();
    $request->instanceInput->cryptoKeyConfig->keyReference = 'provident';
    $request->instanceInput->dataprocServiceAccount = 'distinctio';
    $request->instanceInput->description = 'quibusdam';
    $request->instanceInput->displayName = 'unde';
    $request->instanceInput->enableRbac = false;
    $request->instanceInput->enableStackdriverLogging = false;
    $request->instanceInput->enableStackdriverMonitoring = false;
    $request->instanceInput->enableZoneSeparation = false;
    $request->instanceInput->eventPublishConfig = new EventPublishConfig();
    $request->instanceInput->eventPublishConfig->enabled = false;
    $request->instanceInput->eventPublishConfig->topic = 'nulla';
    $request->instanceInput->labels = [
        'illum' => 'vel',
        'error' => 'deserunt',
        'suscipit' => 'iure',
    ];
    $request->instanceInput->networkConfig = new NetworkConfig();
    $request->instanceInput->networkConfig->ipAllocation = 'magnam';
    $request->instanceInput->networkConfig->network = 'debitis';
    $request->instanceInput->options = [
        'delectus' => 'tempora',
    ];
    $request->instanceInput->privateInstance = false;
    $request->instanceInput->type = InstanceTypeEnum::BASIC;
    $request->instanceInput->version = 'molestiae';
    $request->instanceInput->zone = 'minus';
    $request->accessToken = 'placeat';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'iusto';
    $request->fields = 'excepturi';
    $request->instanceId = 'nisi';
    $request->key = 'recusandae';
    $request->oauthToken = 'temporibus';
    $request->parent = 'ab';
    $request->prettyPrint = false;
    $request->quotaUser = 'quis';
    $request->uploadType = 'veritatis';
    $request->uploadProtocol = 'deserunt';

    $requestSecurity = new DatafusionProjectsLocationsInstancesCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->datafusionProjectsLocationsInstancesCreate($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->