# managedconfigurationsfordevice

### Available Operations

* [androidenterpriseManagedconfigurationsfordeviceDelete](#androidenterprisemanagedconfigurationsfordevicedelete) - Removes a per-device managed configuration for an app for the specified device.
* [androidenterpriseManagedconfigurationsfordeviceGet](#androidenterprisemanagedconfigurationsfordeviceget) - Retrieves details of a per-device managed configuration.
* [androidenterpriseManagedconfigurationsfordeviceList](#androidenterprisemanagedconfigurationsfordevicelist) - Lists all the per-device managed configurations for the specified device. Only the ID is set.
* [androidenterpriseManagedconfigurationsfordeviceUpdate](#androidenterprisemanagedconfigurationsfordeviceupdate) - Adds or updates a per-device managed configuration for an app for the specified device.

## androidenterpriseManagedconfigurationsfordeviceDelete

Removes a per-device managed configuration for an app for the specified device.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseManagedconfigurationsfordeviceDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseManagedconfigurationsfordeviceDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidenterpriseManagedconfigurationsfordeviceDeleteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'deserunt';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'ipsum';
    $request->deviceId = 'incidunt';
    $request->enterpriseId = 'qui';
    $request->fields = 'cupiditate';
    $request->key = 'maxime';
    $request->managedConfigurationForDeviceId = 'pariatur';
    $request->oauthToken = 'soluta';
    $request->prettyPrint = false;
    $request->quotaUser = 'dicta';
    $request->uploadType = 'laborum';
    $request->uploadProtocol = 'totam';
    $request->userId = 'incidunt';

    $requestSecurity = new AndroidenterpriseManagedconfigurationsfordeviceDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->managedconfigurationsfordevice->androidenterpriseManagedconfigurationsfordeviceDelete($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## androidenterpriseManagedconfigurationsfordeviceGet

Retrieves details of a per-device managed configuration.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseManagedconfigurationsfordeviceGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseManagedconfigurationsfordeviceGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidenterpriseManagedconfigurationsfordeviceGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'dolores';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'facilis';
    $request->deviceId = 'aliquid';
    $request->enterpriseId = 'quam';
    $request->fields = 'molestias';
    $request->key = 'temporibus';
    $request->managedConfigurationForDeviceId = 'qui';
    $request->oauthToken = 'neque';
    $request->prettyPrint = false;
    $request->quotaUser = 'fugit';
    $request->uploadType = 'magni';
    $request->uploadProtocol = 'odio';
    $request->userId = 'sunt';

    $requestSecurity = new AndroidenterpriseManagedconfigurationsfordeviceGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->managedconfigurationsfordevice->androidenterpriseManagedconfigurationsfordeviceGet($request, $requestSecurity);

    if ($response->managedConfiguration !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## androidenterpriseManagedconfigurationsfordeviceList

Lists all the per-device managed configurations for the specified device. Only the ID is set.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseManagedconfigurationsfordeviceListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseManagedconfigurationsfordeviceListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidenterpriseManagedconfigurationsfordeviceListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'nam';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'voluptatem';
    $request->deviceId = 'cumque';
    $request->enterpriseId = 'soluta';
    $request->fields = 'nobis';
    $request->key = 'et';
    $request->oauthToken = 'saepe';
    $request->prettyPrint = false;
    $request->quotaUser = 'ipsum';
    $request->uploadType = 'veritatis';
    $request->uploadProtocol = 'nobis';
    $request->userId = 'quos';

    $requestSecurity = new AndroidenterpriseManagedconfigurationsfordeviceListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->managedconfigurationsfordevice->androidenterpriseManagedconfigurationsfordeviceList($request, $requestSecurity);

    if ($response->managedConfigurationsForDeviceListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## androidenterpriseManagedconfigurationsfordeviceUpdate

Adds or updates a per-device managed configuration for an app for the specified device.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseManagedconfigurationsfordeviceUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ManagedConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\ConfigurationVariables;
use \OpenAPI\OpenAPI\Models\Shared\VariableSet;
use \OpenAPI\OpenAPI\Models\Shared\ManagedProperty;
use \OpenAPI\OpenAPI\Models\Shared\ManagedPropertyBundle;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseManagedconfigurationsfordeviceUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidenterpriseManagedconfigurationsfordeviceUpdateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->managedConfiguration = new ManagedConfiguration();
    $request->managedConfiguration->configurationVariables = new ConfigurationVariables();
    $request->managedConfiguration->configurationVariables->mcmId = 'cupiditate';
    $request->managedConfiguration->configurationVariables->variableSet = [
        new VariableSet(),
    ];
    $request->managedConfiguration->kind = 'delectus';
    $request->managedConfiguration->managedProperty = [
        new ManagedProperty(),
    ];
    $request->managedConfiguration->productId = 'dolore';
    $request->accessToken = 'labore';
    $request->alt = AltEnum::JSON;
    $request->callback = 'dolorum';
    $request->deviceId = 'architecto';
    $request->enterpriseId = 'quae';
    $request->fields = 'aut';
    $request->key = 'quas';
    $request->managedConfigurationForDeviceId = 'itaque';
    $request->oauthToken = 'consequatur';
    $request->prettyPrint = false;
    $request->quotaUser = 'est';
    $request->uploadType = 'repellendus';
    $request->uploadProtocol = 'porro';
    $request->userId = 'doloribus';

    $requestSecurity = new AndroidenterpriseManagedconfigurationsfordeviceUpdateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->managedconfigurationsfordevice->androidenterpriseManagedconfigurationsfordeviceUpdate($request, $requestSecurity);

    if ($response->managedConfiguration !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
