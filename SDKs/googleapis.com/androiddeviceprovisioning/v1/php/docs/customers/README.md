# customers

### Available Operations

* [androiddeviceprovisioningCustomersConfigurationsCreate](#androiddeviceprovisioningcustomersconfigurationscreate) - Creates a new configuration. Once created, a customer can apply the configuration to devices.
* [androiddeviceprovisioningCustomersConfigurationsDelete](#androiddeviceprovisioningcustomersconfigurationsdelete) - Deletes an unused configuration. The API call fails if the customer has devices with the configuration applied.
* [androiddeviceprovisioningCustomersConfigurationsList](#androiddeviceprovisioningcustomersconfigurationslist) - Lists a customer's configurations.
* [androiddeviceprovisioningCustomersConfigurationsPatch](#androiddeviceprovisioningcustomersconfigurationspatch) - Updates a configuration's field values.
* [androiddeviceprovisioningCustomersDevicesApplyConfiguration](#androiddeviceprovisioningcustomersdevicesapplyconfiguration) - Applies a Configuration to the device to register the device for zero-touch enrollment. After applying a configuration to a device, the device automatically provisions itself on first boot, or next factory reset.
* [androiddeviceprovisioningCustomersDevicesList](#androiddeviceprovisioningcustomersdeviceslist) - Lists a customer's devices.
* [androiddeviceprovisioningCustomersDevicesRemoveConfiguration](#androiddeviceprovisioningcustomersdevicesremoveconfiguration) - Removes a configuration from device.
* [androiddeviceprovisioningCustomersDevicesUnclaim](#androiddeviceprovisioningcustomersdevicesunclaim) - Unclaims a device from a customer and removes it from zero-touch enrollment. After removing a device, a customer must contact their reseller to register the device into zero-touch enrollment again.
* [androiddeviceprovisioningCustomersDpcsList](#androiddeviceprovisioningcustomersdpcslist) - Lists the DPCs (device policy controllers) that support zero-touch enrollment.
* [androiddeviceprovisioningCustomersList](#androiddeviceprovisioningcustomerslist) - Lists the user's customer accounts.

## androiddeviceprovisioningCustomersConfigurationsCreate

Creates a new configuration. Once created, a customer can apply the configuration to devices.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroiddeviceprovisioningCustomersConfigurationsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ConfigurationInput;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroiddeviceprovisioningCustomersConfigurationsCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->configurationInput = new ConfigurationInput();
    $request->configurationInput->companyName = 'molestiae';
    $request->configurationInput->configurationName = 'minus';
    $request->configurationInput->contactEmail = 'placeat';
    $request->configurationInput->contactPhone = 'voluptatum';
    $request->configurationInput->customMessage = 'iusto';
    $request->configurationInput->dpcExtras = 'excepturi';
    $request->configurationInput->dpcResourcePath = 'nisi';
    $request->configurationInput->isDefault = false;
    $request->accessToken = 'recusandae';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'ab';
    $request->fields = 'quis';
    $request->key = 'veritatis';
    $request->oauthToken = 'deserunt';
    $request->parent = 'perferendis';
    $request->prettyPrint = false;
    $request->quotaUser = 'ipsam';
    $request->uploadType = 'repellendus';
    $request->uploadProtocol = 'sapiente';

    $response = $sdk->customers->androiddeviceprovisioningCustomersConfigurationsCreate($request);

    if ($response->configuration !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## androiddeviceprovisioningCustomersConfigurationsDelete

Deletes an unused configuration. The API call fails if the customer has devices with the configuration applied.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroiddeviceprovisioningCustomersConfigurationsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroiddeviceprovisioningCustomersConfigurationsDeleteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'odit';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'at';
    $request->fields = 'maiores';
    $request->key = 'molestiae';
    $request->name = 'Forrest Koepp';
    $request->oauthToken = 'dolorum';
    $request->prettyPrint = false;
    $request->quotaUser = 'dicta';
    $request->uploadType = 'nam';
    $request->uploadProtocol = 'officia';

    $response = $sdk->customers->androiddeviceprovisioningCustomersConfigurationsDelete($request);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## androiddeviceprovisioningCustomersConfigurationsList

Lists a customer's configurations.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroiddeviceprovisioningCustomersConfigurationsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroiddeviceprovisioningCustomersConfigurationsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'fugit';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'hic';
    $request->fields = 'optio';
    $request->key = 'totam';
    $request->oauthToken = 'beatae';
    $request->parent = 'commodi';
    $request->prettyPrint = false;
    $request->quotaUser = 'molestiae';
    $request->uploadType = 'modi';
    $request->uploadProtocol = 'qui';

    $response = $sdk->customers->androiddeviceprovisioningCustomersConfigurationsList($request);

    if ($response->customerListConfigurationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## androiddeviceprovisioningCustomersConfigurationsPatch

Updates a configuration's field values.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroiddeviceprovisioningCustomersConfigurationsPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ConfigurationInput;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroiddeviceprovisioningCustomersConfigurationsPatchRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->configurationInput = new ConfigurationInput();
    $request->configurationInput->companyName = 'cum';
    $request->configurationInput->configurationName = 'esse';
    $request->configurationInput->contactEmail = 'ipsum';
    $request->configurationInput->contactPhone = 'excepturi';
    $request->configurationInput->customMessage = 'aspernatur';
    $request->configurationInput->dpcExtras = 'perferendis';
    $request->configurationInput->dpcResourcePath = 'ad';
    $request->configurationInput->isDefault = false;
    $request->accessToken = 'natus';
    $request->alt = AltEnum::JSON;
    $request->callback = 'iste';
    $request->fields = 'dolor';
    $request->key = 'natus';
    $request->name = 'May Turcotte';
    $request->oauthToken = 'corporis';
    $request->prettyPrint = false;
    $request->quotaUser = 'iste';
    $request->updateMask = 'iure';
    $request->uploadType = 'saepe';
    $request->uploadProtocol = 'quidem';

    $response = $sdk->customers->androiddeviceprovisioningCustomersConfigurationsPatch($request);

    if ($response->configuration !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## androiddeviceprovisioningCustomersDevicesApplyConfiguration

Applies a Configuration to the device to register the device for zero-touch enrollment. After applying a configuration to a device, the device automatically provisions itself on first boot, or next factory reset.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroiddeviceprovisioningCustomersDevicesApplyConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\CustomerApplyConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeviceReference;
use \OpenAPI\OpenAPI\Models\Shared\DeviceIdentifier;
use \OpenAPI\OpenAPI\Models\Shared\DeviceIdentifierDeviceTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroiddeviceprovisioningCustomersDevicesApplyConfigurationRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->customerApplyConfigurationRequest = new CustomerApplyConfigurationRequest();
    $request->customerApplyConfigurationRequest->configuration = 'ipsa';
    $request->customerApplyConfigurationRequest->device = new DeviceReference();
    $request->customerApplyConfigurationRequest->device->deviceId = 'reiciendis';
    $request->customerApplyConfigurationRequest->device->deviceIdentifier = new DeviceIdentifier();
    $request->customerApplyConfigurationRequest->device->deviceIdentifier->chromeOsAttestedDeviceId = 'est';
    $request->customerApplyConfigurationRequest->device->deviceIdentifier->deviceType = DeviceIdentifierDeviceTypeEnum::DEVICE_TYPE_ANDROID;
    $request->customerApplyConfigurationRequest->device->deviceIdentifier->imei = 'laborum';
    $request->customerApplyConfigurationRequest->device->deviceIdentifier->manufacturer = 'dolores';
    $request->customerApplyConfigurationRequest->device->deviceIdentifier->meid = 'dolorem';
    $request->customerApplyConfigurationRequest->device->deviceIdentifier->model = 'corporis';
    $request->customerApplyConfigurationRequest->device->deviceIdentifier->serialNumber = 'explicabo';
    $request->accessToken = 'nobis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'omnis';
    $request->fields = 'nemo';
    $request->key = 'minima';
    $request->oauthToken = 'excepturi';
    $request->parent = 'accusantium';
    $request->prettyPrint = false;
    $request->quotaUser = 'iure';
    $request->uploadType = 'culpa';
    $request->uploadProtocol = 'doloribus';

    $response = $sdk->customers->androiddeviceprovisioningCustomersDevicesApplyConfiguration($request);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## androiddeviceprovisioningCustomersDevicesList

Lists a customer's devices.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroiddeviceprovisioningCustomersDevicesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroiddeviceprovisioningCustomersDevicesListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'architecto';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'dolorem';
    $request->fields = 'culpa';
    $request->key = 'consequuntur';
    $request->oauthToken = 'repellat';
    $request->pageSize = 'mollitia';
    $request->pageToken = 'occaecati';
    $request->parent = 'numquam';
    $request->prettyPrint = false;
    $request->quotaUser = 'commodi';
    $request->uploadType = 'quam';
    $request->uploadProtocol = 'molestiae';

    $response = $sdk->customers->androiddeviceprovisioningCustomersDevicesList($request);

    if ($response->customerListDevicesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## androiddeviceprovisioningCustomersDevicesRemoveConfiguration

Removes a configuration from device.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroiddeviceprovisioningCustomersDevicesRemoveConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\CustomerRemoveConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeviceReference;
use \OpenAPI\OpenAPI\Models\Shared\DeviceIdentifier;
use \OpenAPI\OpenAPI\Models\Shared\DeviceIdentifierDeviceTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroiddeviceprovisioningCustomersDevicesRemoveConfigurationRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->customerRemoveConfigurationRequest = new CustomerRemoveConfigurationRequest();
    $request->customerRemoveConfigurationRequest->device = new DeviceReference();
    $request->customerRemoveConfigurationRequest->device->deviceId = 'error';
    $request->customerRemoveConfigurationRequest->device->deviceIdentifier = new DeviceIdentifier();
    $request->customerRemoveConfigurationRequest->device->deviceIdentifier->chromeOsAttestedDeviceId = 'quia';
    $request->customerRemoveConfigurationRequest->device->deviceIdentifier->deviceType = DeviceIdentifierDeviceTypeEnum::DEVICE_TYPE_ANDROID;
    $request->customerRemoveConfigurationRequest->device->deviceIdentifier->imei = 'vitae';
    $request->customerRemoveConfigurationRequest->device->deviceIdentifier->manufacturer = 'laborum';
    $request->customerRemoveConfigurationRequest->device->deviceIdentifier->meid = 'animi';
    $request->customerRemoveConfigurationRequest->device->deviceIdentifier->model = 'enim';
    $request->customerRemoveConfigurationRequest->device->deviceIdentifier->serialNumber = 'odit';
    $request->accessToken = 'quo';
    $request->alt = AltEnum::JSON;
    $request->callback = 'tenetur';
    $request->fields = 'ipsam';
    $request->key = 'id';
    $request->oauthToken = 'possimus';
    $request->parent = 'aut';
    $request->prettyPrint = false;
    $request->quotaUser = 'quasi';
    $request->uploadType = 'error';
    $request->uploadProtocol = 'temporibus';

    $response = $sdk->customers->androiddeviceprovisioningCustomersDevicesRemoveConfiguration($request);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## androiddeviceprovisioningCustomersDevicesUnclaim

Unclaims a device from a customer and removes it from zero-touch enrollment. After removing a device, a customer must contact their reseller to register the device into zero-touch enrollment again.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroiddeviceprovisioningCustomersDevicesUnclaimRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\CustomerUnclaimDeviceRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeviceReference;
use \OpenAPI\OpenAPI\Models\Shared\DeviceIdentifier;
use \OpenAPI\OpenAPI\Models\Shared\DeviceIdentifierDeviceTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroiddeviceprovisioningCustomersDevicesUnclaimRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->customerUnclaimDeviceRequest = new CustomerUnclaimDeviceRequest();
    $request->customerUnclaimDeviceRequest->device = new DeviceReference();
    $request->customerUnclaimDeviceRequest->device->deviceId = 'quasi';
    $request->customerUnclaimDeviceRequest->device->deviceIdentifier = new DeviceIdentifier();
    $request->customerUnclaimDeviceRequest->device->deviceIdentifier->chromeOsAttestedDeviceId = 'reiciendis';
    $request->customerUnclaimDeviceRequest->device->deviceIdentifier->deviceType = DeviceIdentifierDeviceTypeEnum::DEVICE_TYPE_CHROME_OS;
    $request->customerUnclaimDeviceRequest->device->deviceIdentifier->imei = 'vero';
    $request->customerUnclaimDeviceRequest->device->deviceIdentifier->manufacturer = 'nihil';
    $request->customerUnclaimDeviceRequest->device->deviceIdentifier->meid = 'praesentium';
    $request->customerUnclaimDeviceRequest->device->deviceIdentifier->model = 'voluptatibus';
    $request->customerUnclaimDeviceRequest->device->deviceIdentifier->serialNumber = 'ipsa';
    $request->accessToken = 'omnis';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'cum';
    $request->fields = 'perferendis';
    $request->key = 'doloremque';
    $request->oauthToken = 'reprehenderit';
    $request->parent = 'ut';
    $request->prettyPrint = false;
    $request->quotaUser = 'maiores';
    $request->uploadType = 'dicta';
    $request->uploadProtocol = 'corporis';

    $response = $sdk->customers->androiddeviceprovisioningCustomersDevicesUnclaim($request);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## androiddeviceprovisioningCustomersDpcsList

Lists the DPCs (device policy controllers) that support zero-touch enrollment.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroiddeviceprovisioningCustomersDpcsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroiddeviceprovisioningCustomersDpcsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'iusto';
    $request->alt = AltEnum::JSON;
    $request->callback = 'harum';
    $request->fields = 'enim';
    $request->key = 'accusamus';
    $request->oauthToken = 'commodi';
    $request->parent = 'repudiandae';
    $request->prettyPrint = false;
    $request->quotaUser = 'quae';
    $request->uploadType = 'ipsum';
    $request->uploadProtocol = 'quidem';

    $response = $sdk->customers->androiddeviceprovisioningCustomersDpcsList($request);

    if ($response->customerListDpcsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## androiddeviceprovisioningCustomersList

Lists the user's customer accounts.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroiddeviceprovisioningCustomersListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroiddeviceprovisioningCustomersListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'excepturi';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'modi';
    $request->fields = 'praesentium';
    $request->key = 'rem';
    $request->oauthToken = 'voluptates';
    $request->pageSize = 93940;
    $request->pageToken = 'repudiandae';
    $request->prettyPrint = false;
    $request->quotaUser = 'sint';
    $request->uploadType = 'veritatis';
    $request->uploadProtocol = 'itaque';

    $response = $sdk->customers->androiddeviceprovisioningCustomersList($request);

    if ($response->customerListCustomersResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
