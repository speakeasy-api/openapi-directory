# projects

### Available Operations

* [cloudiotProjectsLocationsRegistriesBindDeviceToGateway](#cloudiotprojectslocationsregistriesbinddevicetogateway) - Associates the device with the gateway.
* [cloudiotProjectsLocationsRegistriesCreate](#cloudiotprojectslocationsregistriescreate) - Creates a device registry that contains devices.
* [cloudiotProjectsLocationsRegistriesDevicesConfigVersionsList](#cloudiotprojectslocationsregistriesdevicesconfigversionslist) - Lists the last few versions of the device configuration in descending order (i.e.: newest first).
* [cloudiotProjectsLocationsRegistriesDevicesCreate](#cloudiotprojectslocationsregistriesdevicescreate) - Creates a device in a device registry.
* [cloudiotProjectsLocationsRegistriesDevicesDelete](#cloudiotprojectslocationsregistriesdevicesdelete) - Deletes a device.
* [cloudiotProjectsLocationsRegistriesDevicesGet](#cloudiotprojectslocationsregistriesdevicesget) - Gets details about a device.
* [cloudiotProjectsLocationsRegistriesDevicesModifyCloudToDeviceConfig](#cloudiotprojectslocationsregistriesdevicesmodifycloudtodeviceconfig) - Modifies the configuration for the device, which is eventually sent from the Cloud IoT Core servers. Returns the modified configuration version and its metadata.
* [cloudiotProjectsLocationsRegistriesDevicesPatch](#cloudiotprojectslocationsregistriesdevicespatch) - Updates a device.
* [cloudiotProjectsLocationsRegistriesDevicesSendCommandToDevice](#cloudiotprojectslocationsregistriesdevicessendcommandtodevice) - Sends a command to the specified device. In order for a device to be able to receive commands, it must: 1) be connected to Cloud IoT Core using the MQTT protocol, and 2) be subscribed to the group of MQTT topics specified by /devices/{device-id}/commands/#. This subscription will receive commands at the top-level topic /devices/{device-id}/commands as well as commands for subfolders, like /devices/{device-id}/commands/subfolder. Note that subscribing to specific subfolders is not supported. If the command could not be delivered to the device, this method will return an error; in particular, if the device is not subscribed, this method will return FAILED_PRECONDITION. Otherwise, this method will return OK. If the subscription is QoS 1, at least once delivery will be guaranteed; for QoS 0, no acknowledgment will be expected from the device.
* [cloudiotProjectsLocationsRegistriesDevicesStatesList](#cloudiotprojectslocationsregistriesdevicesstateslist) - Lists the last few versions of the device state in descending order (i.e.: newest first).
* [cloudiotProjectsLocationsRegistriesGroupsDevicesList](#cloudiotprojectslocationsregistriesgroupsdeviceslist) - List devices in a device registry.
* [cloudiotProjectsLocationsRegistriesGroupsGetIamPolicy](#cloudiotprojectslocationsregistriesgroupsgetiampolicy) - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* [cloudiotProjectsLocationsRegistriesGroupsSetIamPolicy](#cloudiotprojectslocationsregistriesgroupssetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy.
* [cloudiotProjectsLocationsRegistriesGroupsTestIamPermissions](#cloudiotprojectslocationsregistriesgroupstestiampermissions) - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.
* [cloudiotProjectsLocationsRegistriesList](#cloudiotprojectslocationsregistrieslist) - Lists device registries.
* [cloudiotProjectsLocationsRegistriesUnbindDeviceFromGateway](#cloudiotprojectslocationsregistriesunbinddevicefromgateway) - Deletes the association between the device and the gateway.

## cloudiotProjectsLocationsRegistriesBindDeviceToGateway

Associates the device with the gateway.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudiotProjectsLocationsRegistriesBindDeviceToGatewayRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\BindDeviceToGatewayRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudiotProjectsLocationsRegistriesBindDeviceToGatewaySecurity;
use \OpenAPI\OpenAPI\Models\Operations\CloudiotProjectsLocationsRegistriesBindDeviceToGatewaySecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\CloudiotProjectsLocationsRegistriesBindDeviceToGatewaySecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudiotProjectsLocationsRegistriesBindDeviceToGatewayRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->bindDeviceToGatewayRequest = new BindDeviceToGatewayRequest();
    $request->bindDeviceToGatewayRequest->deviceId = 'debitis';
    $request->bindDeviceToGatewayRequest->gatewayId = 'ipsa';
    $request->accessToken = 'delectus';
    $request->alt = AltEnum::JSON;
    $request->callback = 'suscipit';
    $request->fields = 'molestiae';
    $request->key = 'minus';
    $request->oauthToken = 'placeat';
    $request->parent = 'voluptatum';
    $request->prettyPrint = false;
    $request->quotaUser = 'iusto';
    $request->uploadType = 'excepturi';
    $request->uploadProtocol = 'nisi';

    $requestSecurity = new CloudiotProjectsLocationsRegistriesBindDeviceToGatewaySecurity();
    $requestSecurity->option1 = new CloudiotProjectsLocationsRegistriesBindDeviceToGatewaySecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->cloudiotProjectsLocationsRegistriesBindDeviceToGateway($request, $requestSecurity);

    if ($response->bindDeviceToGatewayResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudiotProjectsLocationsRegistriesCreate

Creates a device registry that contains devices.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudiotProjectsLocationsRegistriesCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\DeviceRegistry;
use \OpenAPI\OpenAPI\Models\Shared\RegistryCredential;
use \OpenAPI\OpenAPI\Models\Shared\PublicKeyCertificate;
use \OpenAPI\OpenAPI\Models\Shared\PublicKeyCertificateFormatEnum;
use \OpenAPI\OpenAPI\Models\Shared\X509CertificateDetails;
use \OpenAPI\OpenAPI\Models\Shared\EventNotificationConfig;
use \OpenAPI\OpenAPI\Models\Shared\HttpConfig;
use \OpenAPI\OpenAPI\Models\Shared\HttpConfigHttpEnabledStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\DeviceRegistryLogLevelEnum;
use \OpenAPI\OpenAPI\Models\Shared\MqttConfig;
use \OpenAPI\OpenAPI\Models\Shared\MqttConfigMqttEnabledStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\StateNotificationConfig;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudiotProjectsLocationsRegistriesCreateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\CloudiotProjectsLocationsRegistriesCreateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\CloudiotProjectsLocationsRegistriesCreateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudiotProjectsLocationsRegistriesCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->deviceRegistry = new DeviceRegistry();
    $request->deviceRegistry->credentials = [
        new RegistryCredential(),
        new RegistryCredential(),
        new RegistryCredential(),
        new RegistryCredential(),
    ];
    $request->deviceRegistry->eventNotificationConfigs = [
        new EventNotificationConfig(),
    ];
    $request->deviceRegistry->httpConfig = new HttpConfig();
    $request->deviceRegistry->httpConfig->httpEnabledState = HttpConfigHttpEnabledStateEnum::HTTP_ENABLED;
    $request->deviceRegistry->id = '1a05dfc2-ddf7-4cc7-8ca1-ba928fc81674';
    $request->deviceRegistry->logLevel = DeviceRegistryLogLevelEnum::LOG_LEVEL_UNSPECIFIED;
    $request->deviceRegistry->mqttConfig = new MqttConfig();
    $request->deviceRegistry->mqttConfig->mqttEnabledState = MqttConfigMqttEnabledStateEnum::MQTT_DISABLED;
    $request->deviceRegistry->name = 'Cory Emmerich';
    $request->deviceRegistry->stateNotificationConfig = new StateNotificationConfig();
    $request->deviceRegistry->stateNotificationConfig->pubsubTopicName = 'perferendis';
    $request->accessToken = 'ad';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'sed';
    $request->fields = 'iste';
    $request->key = 'dolor';
    $request->oauthToken = 'natus';
    $request->parent = 'laboriosam';
    $request->prettyPrint = false;
    $request->quotaUser = 'hic';
    $request->uploadType = 'saepe';
    $request->uploadProtocol = 'fuga';

    $requestSecurity = new CloudiotProjectsLocationsRegistriesCreateSecurity();
    $requestSecurity->option1 = new CloudiotProjectsLocationsRegistriesCreateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->cloudiotProjectsLocationsRegistriesCreate($request, $requestSecurity);

    if ($response->deviceRegistry !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudiotProjectsLocationsRegistriesDevicesConfigVersionsList

Lists the last few versions of the device configuration in descending order (i.e.: newest first).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudiotProjectsLocationsRegistriesDevicesConfigVersionsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudiotProjectsLocationsRegistriesDevicesConfigVersionsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\CloudiotProjectsLocationsRegistriesDevicesConfigVersionsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\CloudiotProjectsLocationsRegistriesDevicesConfigVersionsListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudiotProjectsLocationsRegistriesDevicesConfigVersionsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'corporis';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'iure';
    $request->fields = 'saepe';
    $request->key = 'quidem';
    $request->name = 'Brenda Wisozk';
    $request->numVersions = 670638;
    $request->oauthToken = 'dolores';
    $request->prettyPrint = false;
    $request->quotaUser = 'dolorem';
    $request->uploadType = 'corporis';
    $request->uploadProtocol = 'explicabo';

    $requestSecurity = new CloudiotProjectsLocationsRegistriesDevicesConfigVersionsListSecurity();
    $requestSecurity->option1 = new CloudiotProjectsLocationsRegistriesDevicesConfigVersionsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->cloudiotProjectsLocationsRegistriesDevicesConfigVersionsList($request, $requestSecurity);

    if ($response->listDeviceConfigVersionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudiotProjectsLocationsRegistriesDevicesCreate

Creates a device in a device registry.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudiotProjectsLocationsRegistriesDevicesCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Device;
use \OpenAPI\OpenAPI\Models\Shared\DeviceConfig;
use \OpenAPI\OpenAPI\Models\Shared\DeviceCredential;
use \OpenAPI\OpenAPI\Models\Shared\PublicKeyCredential;
use \OpenAPI\OpenAPI\Models\Shared\PublicKeyCredentialFormatEnum;
use \OpenAPI\OpenAPI\Models\Shared\GatewayConfig;
use \OpenAPI\OpenAPI\Models\Shared\GatewayConfigGatewayAuthMethodEnum;
use \OpenAPI\OpenAPI\Models\Shared\GatewayConfigGatewayTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Status;
use \OpenAPI\OpenAPI\Models\Shared\DeviceLogLevelEnum;
use \OpenAPI\OpenAPI\Models\Shared\DeviceState;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudiotProjectsLocationsRegistriesDevicesCreateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\CloudiotProjectsLocationsRegistriesDevicesCreateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\CloudiotProjectsLocationsRegistriesDevicesCreateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudiotProjectsLocationsRegistriesDevicesCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->device = new Device();
    $request->device->blocked = false;
    $request->device->config = new DeviceConfig();
    $request->device->config->binaryData = 'enim';
    $request->device->config->cloudUpdateTime = 'omnis';
    $request->device->config->deviceAckTime = 'nemo';
    $request->device->config->version = 'minima';
    $request->device->credentials = [
        new DeviceCredential(),
        new DeviceCredential(),
        new DeviceCredential(),
    ];
    $request->device->gatewayConfig = new GatewayConfig();
    $request->device->gatewayConfig->gatewayAuthMethod = GatewayConfigGatewayAuthMethodEnum::GATEWAY_AUTH_METHOD_UNSPECIFIED;
    $request->device->gatewayConfig->gatewayType = GatewayConfigGatewayTypeEnum::GATEWAY;
    $request->device->gatewayConfig->lastAccessedGatewayId = 'culpa';
    $request->device->gatewayConfig->lastAccessedGatewayTime = 'doloribus';
    $request->device->id = 'f1a3a2fa-9467-4739-a51a-a52c3f5ad019';
    $request->device->lastConfigAckTime = 'temporibus';
    $request->device->lastConfigSendTime = 'laborum';
    $request->device->lastErrorStatus = new Status();
    $request->device->lastErrorStatus->code = 96098;
    $request->device->lastErrorStatus->details = [
        [
            'vero' => 'nihil',
            'praesentium' => 'voluptatibus',
            'ipsa' => 'omnis',
            'voluptate' => 'cum',
        ],
        [
            'doloremque' => 'reprehenderit',
        ],
        [
            'maiores' => 'dicta',
            'corporis' => 'dolore',
        ],
        [
            'dicta' => 'harum',
            'enim' => 'accusamus',
        ],
    ];
    $request->device->lastErrorStatus->message = 'commodi';
    $request->device->lastErrorTime = 'repudiandae';
    $request->device->lastEventTime = 'quae';
    $request->device->lastHeartbeatTime = 'ipsum';
    $request->device->lastStateTime = 'quidem';
    $request->device->logLevel = DeviceLogLevelEnum::ERROR;
    $request->device->metadata = [
        'pariatur' => 'modi',
        'praesentium' => 'rem',
        'voluptates' => 'quasi',
    ];
    $request->device->name = 'Kirk Boehm';
    $request->device->numId = 'enim';
    $request->device->state = new DeviceState();
    $request->device->state->binaryData = 'consequatur';
    $request->device->state->updateTime = 'est';
    $request->accessToken = 'quibusdam';
    $request->alt = AltEnum::JSON;
    $request->callback = 'deserunt';
    $request->fields = 'distinctio';
    $request->key = 'quibusdam';
    $request->oauthToken = 'labore';
    $request->parent = 'modi';
    $request->prettyPrint = false;
    $request->quotaUser = 'qui';
    $request->uploadType = 'aliquid';
    $request->uploadProtocol = 'cupiditate';

    $requestSecurity = new CloudiotProjectsLocationsRegistriesDevicesCreateSecurity();
    $requestSecurity->option1 = new CloudiotProjectsLocationsRegistriesDevicesCreateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->cloudiotProjectsLocationsRegistriesDevicesCreate($request, $requestSecurity);

    if ($response->device !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudiotProjectsLocationsRegistriesDevicesDelete

Deletes a device.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudiotProjectsLocationsRegistriesDevicesDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudiotProjectsLocationsRegistriesDevicesDeleteSecurity;
use \OpenAPI\OpenAPI\Models\Operations\CloudiotProjectsLocationsRegistriesDevicesDeleteSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\CloudiotProjectsLocationsRegistriesDevicesDeleteSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudiotProjectsLocationsRegistriesDevicesDeleteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'perferendis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'assumenda';
    $request->fields = 'ipsam';
    $request->key = 'alias';
    $request->name = 'Sonya Marks';
    $request->oauthToken = 'tempore';
    $request->prettyPrint = false;
    $request->quotaUser = 'labore';
    $request->uploadType = 'delectus';
    $request->uploadProtocol = 'eum';

    $requestSecurity = new CloudiotProjectsLocationsRegistriesDevicesDeleteSecurity();
    $requestSecurity->option1 = new CloudiotProjectsLocationsRegistriesDevicesDeleteSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->cloudiotProjectsLocationsRegistriesDevicesDelete($request, $requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudiotProjectsLocationsRegistriesDevicesGet

Gets details about a device.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudiotProjectsLocationsRegistriesDevicesGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudiotProjectsLocationsRegistriesDevicesGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\CloudiotProjectsLocationsRegistriesDevicesGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\CloudiotProjectsLocationsRegistriesDevicesGetSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudiotProjectsLocationsRegistriesDevicesGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'eligendi';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'aliquid';
    $request->fieldMask = 'provident';
    $request->fields = 'necessitatibus';
    $request->key = 'sint';
    $request->name = 'Curtis Toy';
    $request->oauthToken = 'in';
    $request->prettyPrint = false;
    $request->quotaUser = 'in';
    $request->uploadType = 'illum';
    $request->uploadProtocol = 'maiores';

    $requestSecurity = new CloudiotProjectsLocationsRegistriesDevicesGetSecurity();
    $requestSecurity->option1 = new CloudiotProjectsLocationsRegistriesDevicesGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->cloudiotProjectsLocationsRegistriesDevicesGet($request, $requestSecurity);

    if ($response->device !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudiotProjectsLocationsRegistriesDevicesModifyCloudToDeviceConfig

Modifies the configuration for the device, which is eventually sent from the Cloud IoT Core servers. Returns the modified configuration version and its metadata.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudiotProjectsLocationsRegistriesDevicesModifyCloudToDeviceConfigRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ModifyCloudToDeviceConfigRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudiotProjectsLocationsRegistriesDevicesModifyCloudToDeviceConfigSecurity;
use \OpenAPI\OpenAPI\Models\Operations\CloudiotProjectsLocationsRegistriesDevicesModifyCloudToDeviceConfigSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\CloudiotProjectsLocationsRegistriesDevicesModifyCloudToDeviceConfigSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudiotProjectsLocationsRegistriesDevicesModifyCloudToDeviceConfigRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->modifyCloudToDeviceConfigRequest = new ModifyCloudToDeviceConfigRequest();
    $request->modifyCloudToDeviceConfigRequest->binaryData = 'dicta';
    $request->modifyCloudToDeviceConfigRequest->versionToUpdate = 'magnam';
    $request->accessToken = 'cumque';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'ea';
    $request->fields = 'aliquid';
    $request->key = 'laborum';
    $request->name = 'Alfred McClure';
    $request->oauthToken = 'delectus';
    $request->prettyPrint = false;
    $request->quotaUser = 'quidem';
    $request->uploadType = 'provident';
    $request->uploadProtocol = 'nam';

    $requestSecurity = new CloudiotProjectsLocationsRegistriesDevicesModifyCloudToDeviceConfigSecurity();
    $requestSecurity->option1 = new CloudiotProjectsLocationsRegistriesDevicesModifyCloudToDeviceConfigSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->cloudiotProjectsLocationsRegistriesDevicesModifyCloudToDeviceConfig($request, $requestSecurity);

    if ($response->deviceConfig !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudiotProjectsLocationsRegistriesDevicesPatch

Updates a device.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudiotProjectsLocationsRegistriesDevicesPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Device;
use \OpenAPI\OpenAPI\Models\Shared\DeviceConfig;
use \OpenAPI\OpenAPI\Models\Shared\DeviceCredential;
use \OpenAPI\OpenAPI\Models\Shared\PublicKeyCredential;
use \OpenAPI\OpenAPI\Models\Shared\PublicKeyCredentialFormatEnum;
use \OpenAPI\OpenAPI\Models\Shared\GatewayConfig;
use \OpenAPI\OpenAPI\Models\Shared\GatewayConfigGatewayAuthMethodEnum;
use \OpenAPI\OpenAPI\Models\Shared\GatewayConfigGatewayTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Status;
use \OpenAPI\OpenAPI\Models\Shared\DeviceLogLevelEnum;
use \OpenAPI\OpenAPI\Models\Shared\DeviceState;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudiotProjectsLocationsRegistriesDevicesPatchSecurity;
use \OpenAPI\OpenAPI\Models\Operations\CloudiotProjectsLocationsRegistriesDevicesPatchSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\CloudiotProjectsLocationsRegistriesDevicesPatchSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudiotProjectsLocationsRegistriesDevicesPatchRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->device = new Device();
    $request->device->blocked = false;
    $request->device->config = new DeviceConfig();
    $request->device->config->binaryData = 'blanditiis';
    $request->device->config->cloudUpdateTime = 'deleniti';
    $request->device->config->deviceAckTime = 'sapiente';
    $request->device->config->version = 'amet';
    $request->device->credentials = [
        new DeviceCredential(),
        new DeviceCredential(),
        new DeviceCredential(),
    ];
    $request->device->gatewayConfig = new GatewayConfig();
    $request->device->gatewayConfig->gatewayAuthMethod = GatewayConfigGatewayAuthMethodEnum::ASSOCIATION_ONLY;
    $request->device->gatewayConfig->gatewayType = GatewayConfigGatewayTypeEnum::GATEWAY;
    $request->device->gatewayConfig->lastAccessedGatewayId = 'natus';
    $request->device->gatewayConfig->lastAccessedGatewayTime = 'omnis';
    $request->device->id = '7074ba44-69b6-4e21-8195-9890afa563e2';
    $request->device->lastConfigAckTime = 'nemo';
    $request->device->lastConfigSendTime = 'quasi';
    $request->device->lastErrorStatus = new Status();
    $request->device->lastErrorStatus->code = 435865;
    $request->device->lastErrorStatus->details = [
        [
            'eius' => 'maxime',
            'deleniti' => 'facilis',
            'in' => 'architecto',
            'architecto' => 'repudiandae',
        ],
        [
            'expedita' => 'nihil',
            'repellat' => 'quibusdam',
        ],
        [
            'saepe' => 'pariatur',
        ],
        [
            'consequuntur' => 'praesentium',
        ],
    ];
    $request->device->lastErrorStatus->message = 'natus';
    $request->device->lastErrorTime = 'magni';
    $request->device->lastEventTime = 'sunt';
    $request->device->lastHeartbeatTime = 'quo';
    $request->device->lastStateTime = 'illum';
    $request->device->logLevel = DeviceLogLevelEnum::DEBUG;
    $request->device->metadata = [
        'ea' => 'excepturi',
        'odit' => 'ea',
        'accusantium' => 'ab',
        'maiores' => 'quidem',
    ];
    $request->device->name = 'Colleen Johnston PhD';
    $request->device->numId = 'nemo';
    $request->device->state = new DeviceState();
    $request->device->state->binaryData = 'voluptatibus';
    $request->device->state->updateTime = 'perferendis';
    $request->accessToken = 'fugiat';
    $request->alt = AltEnum::JSON;
    $request->callback = 'aut';
    $request->fields = 'cumque';
    $request->key = 'corporis';
    $request->name = 'Pete Rohan';
    $request->oauthToken = 'totam';
    $request->prettyPrint = false;
    $request->quotaUser = 'dignissimos';
    $request->updateMask = 'eaque';
    $request->uploadType = 'quis';
    $request->uploadProtocol = 'nesciunt';

    $requestSecurity = new CloudiotProjectsLocationsRegistriesDevicesPatchSecurity();
    $requestSecurity->option1 = new CloudiotProjectsLocationsRegistriesDevicesPatchSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->cloudiotProjectsLocationsRegistriesDevicesPatch($request, $requestSecurity);

    if ($response->device !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudiotProjectsLocationsRegistriesDevicesSendCommandToDevice

Sends a command to the specified device. In order for a device to be able to receive commands, it must: 1) be connected to Cloud IoT Core using the MQTT protocol, and 2) be subscribed to the group of MQTT topics specified by /devices/{device-id}/commands/#. This subscription will receive commands at the top-level topic /devices/{device-id}/commands as well as commands for subfolders, like /devices/{device-id}/commands/subfolder. Note that subscribing to specific subfolders is not supported. If the command could not be delivered to the device, this method will return an error; in particular, if the device is not subscribed, this method will return FAILED_PRECONDITION. Otherwise, this method will return OK. If the subscription is QoS 1, at least once delivery will be guaranteed; for QoS 0, no acknowledgment will be expected from the device.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudiotProjectsLocationsRegistriesDevicesSendCommandToDeviceRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\SendCommandToDeviceRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudiotProjectsLocationsRegistriesDevicesSendCommandToDeviceSecurity;
use \OpenAPI\OpenAPI\Models\Operations\CloudiotProjectsLocationsRegistriesDevicesSendCommandToDeviceSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\CloudiotProjectsLocationsRegistriesDevicesSendCommandToDeviceSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudiotProjectsLocationsRegistriesDevicesSendCommandToDeviceRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->sendCommandToDeviceRequest = new SendCommandToDeviceRequest();
    $request->sendCommandToDeviceRequest->binaryData = 'perferendis';
    $request->sendCommandToDeviceRequest->subfolder = 'dolores';
    $request->accessToken = 'minus';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'dolor';
    $request->fields = 'vero';
    $request->key = 'nostrum';
    $request->name = 'Percy Mohr';
    $request->oauthToken = 'voluptatem';
    $request->prettyPrint = false;
    $request->quotaUser = 'porro';
    $request->uploadType = 'consequuntur';
    $request->uploadProtocol = 'blanditiis';

    $requestSecurity = new CloudiotProjectsLocationsRegistriesDevicesSendCommandToDeviceSecurity();
    $requestSecurity->option1 = new CloudiotProjectsLocationsRegistriesDevicesSendCommandToDeviceSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->cloudiotProjectsLocationsRegistriesDevicesSendCommandToDevice($request, $requestSecurity);

    if ($response->sendCommandToDeviceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudiotProjectsLocationsRegistriesDevicesStatesList

Lists the last few versions of the device state in descending order (i.e.: newest first).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudiotProjectsLocationsRegistriesDevicesStatesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudiotProjectsLocationsRegistriesDevicesStatesListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\CloudiotProjectsLocationsRegistriesDevicesStatesListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\CloudiotProjectsLocationsRegistriesDevicesStatesListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudiotProjectsLocationsRegistriesDevicesStatesListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'eaque';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'rerum';
    $request->fields = 'adipisci';
    $request->key = 'asperiores';
    $request->name = 'Edwin Morar';
    $request->numStates = 864282;
    $request->oauthToken = 'provident';
    $request->prettyPrint = false;
    $request->quotaUser = 'nobis';
    $request->uploadType = 'libero';
    $request->uploadProtocol = 'delectus';

    $requestSecurity = new CloudiotProjectsLocationsRegistriesDevicesStatesListSecurity();
    $requestSecurity->option1 = new CloudiotProjectsLocationsRegistriesDevicesStatesListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->cloudiotProjectsLocationsRegistriesDevicesStatesList($request, $requestSecurity);

    if ($response->listDeviceStatesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudiotProjectsLocationsRegistriesGroupsDevicesList

List devices in a device registry.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudiotProjectsLocationsRegistriesGroupsDevicesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudiotProjectsLocationsRegistriesGroupsDevicesListGatewayListOptionsGatewayTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudiotProjectsLocationsRegistriesGroupsDevicesListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\CloudiotProjectsLocationsRegistriesGroupsDevicesListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\CloudiotProjectsLocationsRegistriesGroupsDevicesListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudiotProjectsLocationsRegistriesGroupsDevicesListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'quos';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'dolorem';
    $request->deviceIds = [
        'dolor',
    ];
    $request->deviceNumIds = [
        'ipsum',
    ];
    $request->fieldMask = 'hic';
    $request->fields = 'excepturi';
    $request->gatewayListOptionsAssociationsDeviceId = 'cum';
    $request->gatewayListOptionsAssociationsGatewayId = 'voluptate';
    $request->gatewayListOptionsGatewayType = CloudiotProjectsLocationsRegistriesGroupsDevicesListGatewayListOptionsGatewayTypeEnum::GATEWAY;
    $request->key = 'reiciendis';
    $request->oauthToken = 'amet';
    $request->pageSize = 680545;
    $request->pageToken = 'numquam';
    $request->parent = 'veritatis';
    $request->prettyPrint = false;
    $request->quotaUser = 'ipsa';
    $request->uploadType = 'ipsa';
    $request->uploadProtocol = 'iure';

    $requestSecurity = new CloudiotProjectsLocationsRegistriesGroupsDevicesListSecurity();
    $requestSecurity->option1 = new CloudiotProjectsLocationsRegistriesGroupsDevicesListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->cloudiotProjectsLocationsRegistriesGroupsDevicesList($request, $requestSecurity);

    if ($response->listDevicesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudiotProjectsLocationsRegistriesGroupsGetIamPolicy

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudiotProjectsLocationsRegistriesGroupsGetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetPolicyOptions;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudiotProjectsLocationsRegistriesGroupsGetIamPolicySecurity;
use \OpenAPI\OpenAPI\Models\Operations\CloudiotProjectsLocationsRegistriesGroupsGetIamPolicySecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\CloudiotProjectsLocationsRegistriesGroupsGetIamPolicySecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudiotProjectsLocationsRegistriesGroupsGetIamPolicyRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->getIamPolicyRequest = new GetIamPolicyRequest();
    $request->getIamPolicyRequest->options = new GetPolicyOptions();
    $request->getIamPolicyRequest->options->requestedPolicyVersion = 311796;
    $request->accessToken = 'accusamus';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'voluptatibus';
    $request->fields = 'voluptas';
    $request->key = 'natus';
    $request->oauthToken = 'eos';
    $request->prettyPrint = false;
    $request->quotaUser = 'atque';
    $request->resource = 'sit';
    $request->uploadType = 'fugiat';
    $request->uploadProtocol = 'ab';

    $requestSecurity = new CloudiotProjectsLocationsRegistriesGroupsGetIamPolicySecurity();
    $requestSecurity->option1 = new CloudiotProjectsLocationsRegistriesGroupsGetIamPolicySecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->cloudiotProjectsLocationsRegistriesGroupsGetIamPolicy($request, $requestSecurity);

    if ($response->policy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudiotProjectsLocationsRegistriesGroupsSetIamPolicy

Sets the access control policy on the specified resource. Replaces any existing policy.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudiotProjectsLocationsRegistriesGroupsSetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\SetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\Policy;
use \OpenAPI\OpenAPI\Models\Shared\Binding;
use \OpenAPI\OpenAPI\Models\Shared\Expr;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudiotProjectsLocationsRegistriesGroupsSetIamPolicySecurity;
use \OpenAPI\OpenAPI\Models\Operations\CloudiotProjectsLocationsRegistriesGroupsSetIamPolicySecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\CloudiotProjectsLocationsRegistriesGroupsSetIamPolicySecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudiotProjectsLocationsRegistriesGroupsSetIamPolicyRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->setIamPolicyRequest = new SetIamPolicyRequest();
    $request->setIamPolicyRequest->policy = new Policy();
    $request->setIamPolicyRequest->policy->bindings = [
        new Binding(),
        new Binding(),
        new Binding(),
    ];
    $request->setIamPolicyRequest->policy->etag = 'iusto';
    $request->setIamPolicyRequest->policy->version = 453697;
    $request->accessToken = 'dolorum';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'omnis';
    $request->fields = 'necessitatibus';
    $request->key = 'distinctio';
    $request->oauthToken = 'asperiores';
    $request->prettyPrint = false;
    $request->quotaUser = 'nihil';
    $request->resource = 'ipsum';
    $request->uploadType = 'voluptate';
    $request->uploadProtocol = 'id';

    $requestSecurity = new CloudiotProjectsLocationsRegistriesGroupsSetIamPolicySecurity();
    $requestSecurity->option1 = new CloudiotProjectsLocationsRegistriesGroupsSetIamPolicySecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->cloudiotProjectsLocationsRegistriesGroupsSetIamPolicy($request, $requestSecurity);

    if ($response->policy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudiotProjectsLocationsRegistriesGroupsTestIamPermissions

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudiotProjectsLocationsRegistriesGroupsTestIamPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\TestIamPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudiotProjectsLocationsRegistriesGroupsTestIamPermissionsSecurity;
use \OpenAPI\OpenAPI\Models\Operations\CloudiotProjectsLocationsRegistriesGroupsTestIamPermissionsSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\CloudiotProjectsLocationsRegistriesGroupsTestIamPermissionsSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudiotProjectsLocationsRegistriesGroupsTestIamPermissionsRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->testIamPermissionsRequest = new TestIamPermissionsRequest();
    $request->testIamPermissionsRequest->permissions = [
        'aspernatur',
        'perferendis',
    ];
    $request->accessToken = 'amet';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'accusamus';
    $request->fields = 'ad';
    $request->key = 'saepe';
    $request->oauthToken = 'suscipit';
    $request->prettyPrint = false;
    $request->quotaUser = 'deserunt';
    $request->resource = 'provident';
    $request->uploadType = 'minima';
    $request->uploadProtocol = 'repellendus';

    $requestSecurity = new CloudiotProjectsLocationsRegistriesGroupsTestIamPermissionsSecurity();
    $requestSecurity->option1 = new CloudiotProjectsLocationsRegistriesGroupsTestIamPermissionsSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->cloudiotProjectsLocationsRegistriesGroupsTestIamPermissions($request, $requestSecurity);

    if ($response->testIamPermissionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudiotProjectsLocationsRegistriesList

Lists device registries.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudiotProjectsLocationsRegistriesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudiotProjectsLocationsRegistriesListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\CloudiotProjectsLocationsRegistriesListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\CloudiotProjectsLocationsRegistriesListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudiotProjectsLocationsRegistriesListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'similique';
    $request->alt = AltEnum::JSON;
    $request->callback = 'at';
    $request->fields = 'quaerat';
    $request->key = 'tempora';
    $request->oauthToken = 'vel';
    $request->pageSize = 798047;
    $request->pageToken = 'officiis';
    $request->parent = 'qui';
    $request->prettyPrint = false;
    $request->quotaUser = 'dolorum';
    $request->uploadType = 'a';
    $request->uploadProtocol = 'esse';

    $requestSecurity = new CloudiotProjectsLocationsRegistriesListSecurity();
    $requestSecurity->option1 = new CloudiotProjectsLocationsRegistriesListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->cloudiotProjectsLocationsRegistriesList($request, $requestSecurity);

    if ($response->listDeviceRegistriesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudiotProjectsLocationsRegistriesUnbindDeviceFromGateway

Deletes the association between the device and the gateway.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudiotProjectsLocationsRegistriesUnbindDeviceFromGatewayRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\UnbindDeviceFromGatewayRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudiotProjectsLocationsRegistriesUnbindDeviceFromGatewaySecurity;
use \OpenAPI\OpenAPI\Models\Operations\CloudiotProjectsLocationsRegistriesUnbindDeviceFromGatewaySecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\CloudiotProjectsLocationsRegistriesUnbindDeviceFromGatewaySecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudiotProjectsLocationsRegistriesUnbindDeviceFromGatewayRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->unbindDeviceFromGatewayRequest = new UnbindDeviceFromGatewayRequest();
    $request->unbindDeviceFromGatewayRequest->deviceId = 'iusto';
    $request->unbindDeviceFromGatewayRequest->gatewayId = 'ipsum';
    $request->accessToken = 'quisquam';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'amet';
    $request->fields = 'tempore';
    $request->key = 'accusamus';
    $request->oauthToken = 'numquam';
    $request->parent = 'enim';
    $request->prettyPrint = false;
    $request->quotaUser = 'dolorem';
    $request->uploadType = 'sapiente';
    $request->uploadProtocol = 'totam';

    $requestSecurity = new CloudiotProjectsLocationsRegistriesUnbindDeviceFromGatewaySecurity();
    $requestSecurity->option1 = new CloudiotProjectsLocationsRegistriesUnbindDeviceFromGatewaySecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->cloudiotProjectsLocationsRegistriesUnbindDeviceFromGateway($request, $requestSecurity);

    if ($response->unbindDeviceFromGatewayResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
