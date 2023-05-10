# nodes

### Available Operations

* [prodTtSasportalNodesDevicesSignDevice](#prodttsasportalnodesdevicessigndevice) - Signs a device.
* [prodTtSasportalNodesDevicesUpdateSigned](#prodttsasportalnodesdevicesupdatesigned) - Updates a signed device.
* [prodTtSasportalNodesNodesDelete](#prodttsasportalnodesnodesdelete) - Deletes a node.
* [prodTtSasportalNodesNodesDeploymentsCreate](#prodttsasportalnodesnodesdeploymentscreate) - Creates a new deployment.
* [prodTtSasportalNodesNodesDeploymentsList](#prodttsasportalnodesnodesdeploymentslist) - Lists deployments.
* [prodTtSasportalNodesNodesDevicesCreate](#prodttsasportalnodesnodesdevicescreate) - Creates a device under a node or customer.
* [prodTtSasportalNodesNodesDevicesCreateSigned](#prodttsasportalnodesnodesdevicescreatesigned) - Creates a signed device under a node or customer.
* [prodTtSasportalNodesNodesDevicesList](#prodttsasportalnodesnodesdeviceslist) - Lists devices under a node or customer.
* [prodTtSasportalNodesNodesGet](#prodttsasportalnodesnodesget) - Returns a requested node.
* [prodTtSasportalNodesNodesMove](#prodttsasportalnodesnodesmove) - Moves a node under another node or customer.
* [prodTtSasportalNodesNodesNodesCreate](#prodttsasportalnodesnodesnodescreate) - Creates a new node.
* [prodTtSasportalNodesNodesNodesList](#prodttsasportalnodesnodesnodeslist) - Lists nodes.
* [prodTtSasportalNodesNodesPatch](#prodttsasportalnodesnodespatch) - Updates an existing node.

## prodTtSasportalNodesDevicesSignDevice

Signs a device.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ProdTtSasportalNodesDevicesSignDeviceRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\SasPortalSignDeviceRequestInput;
use \OpenAPI\OpenAPI\Models\Shared\SasPortalDeviceInput;
use \OpenAPI\OpenAPI\Models\Shared\SasPortalDeviceConfig;
use \OpenAPI\OpenAPI\Models\Shared\SasPortalDeviceAirInterface;
use \OpenAPI\OpenAPI\Models\Shared\SasPortalDeviceAirInterfaceRadioTechnologyEnum;
use \OpenAPI\OpenAPI\Models\Shared\SasPortalDeviceConfigCategoryEnum;
use \OpenAPI\OpenAPI\Models\Shared\SasPortalInstallationParams;
use \OpenAPI\OpenAPI\Models\Shared\SasPortalInstallationParamsHeightTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SasPortalDeviceConfigMeasurementCapabilitiesEnum;
use \OpenAPI\OpenAPI\Models\Shared\SasPortalDeviceModel;
use \OpenAPI\OpenAPI\Models\Shared\SasPortalDeviceConfigStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\SasPortalDeviceMetadataInput;
use \OpenAPI\OpenAPI\Models\Shared\SasPortalNrqzValidation;
use \OpenAPI\OpenAPI\Models\Shared\SasPortalNrqzValidationStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\SasPortalFrequencyRange;
use \OpenAPI\OpenAPI\Models\Shared\SasPortalDeviceGrant;
use \OpenAPI\OpenAPI\Models\Shared\SasPortalDeviceGrantChannelTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SasPortalDpaMoveList;
use \OpenAPI\OpenAPI\Models\Shared\SasPortalDeviceGrantStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\SasPortalDeviceStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ProdTtSasportalNodesDevicesSignDeviceSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ProdTtSasportalNodesDevicesSignDeviceSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ProdTtSasportalNodesDevicesSignDeviceSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProdTtSasportalNodesDevicesSignDeviceRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->sasPortalSignDeviceRequestInput = new SasPortalSignDeviceRequestInput();
    $request->sasPortalSignDeviceRequestInput->device = new SasPortalDeviceInput();
    $request->sasPortalSignDeviceRequestInput->device->activeConfig = new SasPortalDeviceConfig();
    $request->sasPortalSignDeviceRequestInput->device->activeConfig->airInterface = new SasPortalDeviceAirInterface();
    $request->sasPortalSignDeviceRequestInput->device->activeConfig->airInterface->radioTechnology = SasPortalDeviceAirInterfaceRadioTechnologyEnum::CW;
    $request->sasPortalSignDeviceRequestInput->device->activeConfig->airInterface->supportedSpec = 'esse';
    $request->sasPortalSignDeviceRequestInput->device->activeConfig->callSign = 'ipsum';
    $request->sasPortalSignDeviceRequestInput->device->activeConfig->category = SasPortalDeviceConfigCategoryEnum::DEVICE_CATEGORY_A;
    $request->sasPortalSignDeviceRequestInput->device->activeConfig->installationParams = new SasPortalInstallationParams();
    $request->sasPortalSignDeviceRequestInput->device->activeConfig->installationParams->antennaAzimuth = 135218;
    $request->sasPortalSignDeviceRequestInput->device->activeConfig->installationParams->antennaBeamwidth = 18789;
    $request->sasPortalSignDeviceRequestInput->device->activeConfig->installationParams->antennaDowntilt = 324141;
    $request->sasPortalSignDeviceRequestInput->device->activeConfig->installationParams->antennaGain = 617636;
    $request->sasPortalSignDeviceRequestInput->device->activeConfig->installationParams->antennaGainNewField = 1496.75;
    $request->sasPortalSignDeviceRequestInput->device->activeConfig->installationParams->antennaModel = 'iste';
    $request->sasPortalSignDeviceRequestInput->device->activeConfig->installationParams->cpeCbsdIndication = false;
    $request->sasPortalSignDeviceRequestInput->device->activeConfig->installationParams->eirpCapability = 222321;
    $request->sasPortalSignDeviceRequestInput->device->activeConfig->installationParams->eirpCapabilityNewField = 6169.34;
    $request->sasPortalSignDeviceRequestInput->device->activeConfig->installationParams->height = 3864.89;
    $request->sasPortalSignDeviceRequestInput->device->activeConfig->installationParams->heightType = SasPortalInstallationParamsHeightTypeEnum::HEIGHT_TYPE_AMSL;
    $request->sasPortalSignDeviceRequestInput->device->activeConfig->installationParams->horizontalAccuracy = 9025.99;
    $request->sasPortalSignDeviceRequestInput->device->activeConfig->installationParams->indoorDeployment = false;
    $request->sasPortalSignDeviceRequestInput->device->activeConfig->installationParams->latitude = 6818.2;
    $request->sasPortalSignDeviceRequestInput->device->activeConfig->installationParams->longitude = 4499.5;
    $request->sasPortalSignDeviceRequestInput->device->activeConfig->installationParams->verticalAccuracy = 3595.08;
    $request->sasPortalSignDeviceRequestInput->device->activeConfig->isSigned = false;
    $request->sasPortalSignDeviceRequestInput->device->activeConfig->measurementCapabilities = [
        SasPortalDeviceConfigMeasurementCapabilitiesEnum::MEASUREMENT_CAPABILITY_RECEIVED_POWER_WITH_GRANT,
        SasPortalDeviceConfigMeasurementCapabilitiesEnum::MEASUREMENT_CAPABILITY_RECEIVED_POWER_WITHOUT_GRANT,
        SasPortalDeviceConfigMeasurementCapabilitiesEnum::MEASUREMENT_CAPABILITY_RECEIVED_POWER_WITHOUT_GRANT,
    ];
    $request->sasPortalSignDeviceRequestInput->device->activeConfig->model = new SasPortalDeviceModel();
    $request->sasPortalSignDeviceRequestInput->device->activeConfig->model->firmwareVersion = 'architecto';
    $request->sasPortalSignDeviceRequestInput->device->activeConfig->model->hardwareVersion = 'ipsa';
    $request->sasPortalSignDeviceRequestInput->device->activeConfig->model->name = 'Carlton O'Hara';
    $request->sasPortalSignDeviceRequestInput->device->activeConfig->model->softwareVersion = 'dolorem';
    $request->sasPortalSignDeviceRequestInput->device->activeConfig->model->vendor = 'corporis';
    $request->sasPortalSignDeviceRequestInput->device->activeConfig->state = SasPortalDeviceConfigStateEnum::DEVICE_CONFIG_STATE_UNSPECIFIED;
    $request->sasPortalSignDeviceRequestInput->device->activeConfig->updateTime = 'nobis';
    $request->sasPortalSignDeviceRequestInput->device->activeConfig->userId = 'enim';
    $request->sasPortalSignDeviceRequestInput->device->deviceMetadata = new SasPortalDeviceMetadataInput();
    $request->sasPortalSignDeviceRequestInput->device->deviceMetadata->antennaModel = 'omnis';
    $request->sasPortalSignDeviceRequestInput->device->deviceMetadata->commonChannelGroup = 'nemo';
    $request->sasPortalSignDeviceRequestInput->device->deviceMetadata->interferenceCoordinationGroup = 'minima';
    $request->sasPortalSignDeviceRequestInput->device->deviceMetadata->nrqzValidation = new SasPortalNrqzValidation();
    $request->sasPortalSignDeviceRequestInput->device->deviceMetadata->nrqzValidation->caseId = 'excepturi';
    $request->sasPortalSignDeviceRequestInput->device->deviceMetadata->nrqzValidation->cpiId = 'accusantium';
    $request->sasPortalSignDeviceRequestInput->device->deviceMetadata->nrqzValidation->latitude = 4386.01;
    $request->sasPortalSignDeviceRequestInput->device->deviceMetadata->nrqzValidation->longitude = 6342.74;
    $request->sasPortalSignDeviceRequestInput->device->deviceMetadata->nrqzValidation->state = SasPortalNrqzValidationStateEnum::FINAL;
    $request->sasPortalSignDeviceRequestInput->device->displayName = 'sapiente';
    $request->sasPortalSignDeviceRequestInput->device->fccId = 'architecto';
    $request->sasPortalSignDeviceRequestInput->device->grantRangeAllowlists = [
        new SasPortalFrequencyRange(),
        new SasPortalFrequencyRange(),
        new SasPortalFrequencyRange(),
    ];
    $request->sasPortalSignDeviceRequestInput->device->grants = [
        new SasPortalDeviceGrant(),
    ];
    $request->sasPortalSignDeviceRequestInput->device->name = 'Carlos Ziemann';
    $request->sasPortalSignDeviceRequestInput->device->preloadedConfig = new SasPortalDeviceConfig();
    $request->sasPortalSignDeviceRequestInput->device->preloadedConfig->airInterface = new SasPortalDeviceAirInterface();
    $request->sasPortalSignDeviceRequestInput->device->preloadedConfig->airInterface->radioTechnology = SasPortalDeviceAirInterfaceRadioTechnologyEnum::CAMBIUM_NETWORKS;
    $request->sasPortalSignDeviceRequestInput->device->preloadedConfig->airInterface->supportedSpec = 'commodi';
    $request->sasPortalSignDeviceRequestInput->device->preloadedConfig->callSign = 'quam';
    $request->sasPortalSignDeviceRequestInput->device->preloadedConfig->category = SasPortalDeviceConfigCategoryEnum::DEVICE_CATEGORY_A;
    $request->sasPortalSignDeviceRequestInput->device->preloadedConfig->installationParams = new SasPortalInstallationParams();
    $request->sasPortalSignDeviceRequestInput->device->preloadedConfig->installationParams->antennaAzimuth = 244425;
    $request->sasPortalSignDeviceRequestInput->device->preloadedConfig->installationParams->antennaBeamwidth = 623510;
    $request->sasPortalSignDeviceRequestInput->device->preloadedConfig->installationParams->antennaDowntilt = 158969;
    $request->sasPortalSignDeviceRequestInput->device->preloadedConfig->installationParams->antennaGain = 338007;
    $request->sasPortalSignDeviceRequestInput->device->preloadedConfig->installationParams->antennaGainNewField = 1103.75;
    $request->sasPortalSignDeviceRequestInput->device->preloadedConfig->installationParams->antennaModel = 'laborum';
    $request->sasPortalSignDeviceRequestInput->device->preloadedConfig->installationParams->cpeCbsdIndication = false;
    $request->sasPortalSignDeviceRequestInput->device->preloadedConfig->installationParams->eirpCapability = 656330;
    $request->sasPortalSignDeviceRequestInput->device->preloadedConfig->installationParams->eirpCapabilityNewField = 3172.02;
    $request->sasPortalSignDeviceRequestInput->device->preloadedConfig->installationParams->height = 1381.83;
    $request->sasPortalSignDeviceRequestInput->device->preloadedConfig->installationParams->heightType = SasPortalInstallationParamsHeightTypeEnum::HEIGHT_TYPE_AMSL;
    $request->sasPortalSignDeviceRequestInput->device->preloadedConfig->installationParams->horizontalAccuracy = 1965.82;
    $request->sasPortalSignDeviceRequestInput->device->preloadedConfig->installationParams->indoorDeployment = false;
    $request->sasPortalSignDeviceRequestInput->device->preloadedConfig->installationParams->latitude = 9495.72;
    $request->sasPortalSignDeviceRequestInput->device->preloadedConfig->installationParams->longitude = 3687.25;
    $request->sasPortalSignDeviceRequestInput->device->preloadedConfig->installationParams->verticalAccuracy = 6625.27;
    $request->sasPortalSignDeviceRequestInput->device->preloadedConfig->isSigned = false;
    $request->sasPortalSignDeviceRequestInput->device->preloadedConfig->measurementCapabilities = [
        SasPortalDeviceConfigMeasurementCapabilitiesEnum::MEASUREMENT_CAPABILITY_UNSPECIFIED,
        SasPortalDeviceConfigMeasurementCapabilitiesEnum::MEASUREMENT_CAPABILITY_UNSPECIFIED,
        SasPortalDeviceConfigMeasurementCapabilitiesEnum::MEASUREMENT_CAPABILITY_RECEIVED_POWER_WITH_GRANT,
        SasPortalDeviceConfigMeasurementCapabilitiesEnum::MEASUREMENT_CAPABILITY_RECEIVED_POWER_WITHOUT_GRANT,
    ];
    $request->sasPortalSignDeviceRequestInput->device->preloadedConfig->model = new SasPortalDeviceModel();
    $request->sasPortalSignDeviceRequestInput->device->preloadedConfig->model->firmwareVersion = 'laborum';
    $request->sasPortalSignDeviceRequestInput->device->preloadedConfig->model->hardwareVersion = 'quasi';
    $request->sasPortalSignDeviceRequestInput->device->preloadedConfig->model->name = 'Jan Thiel';
    $request->sasPortalSignDeviceRequestInput->device->preloadedConfig->model->softwareVersion = 'voluptatibus';
    $request->sasPortalSignDeviceRequestInput->device->preloadedConfig->model->vendor = 'ipsa';
    $request->sasPortalSignDeviceRequestInput->device->preloadedConfig->state = SasPortalDeviceConfigStateEnum::DRAFT;
    $request->sasPortalSignDeviceRequestInput->device->preloadedConfig->updateTime = 'voluptate';
    $request->sasPortalSignDeviceRequestInput->device->preloadedConfig->userId = 'cum';
    $request->sasPortalSignDeviceRequestInput->device->serialNumber = 'perferendis';
    $request->sasPortalSignDeviceRequestInput->device->state = SasPortalDeviceStateEnum::DEVICE_STATE_UNSPECIFIED;
    $request->accessToken = 'reprehenderit';
    $request->alt = AltEnum::JSON;
    $request->callback = 'maiores';
    $request->fields = 'dicta';
    $request->key = 'corporis';
    $request->name = 'Heidi Carter';
    $request->oauthToken = 'accusamus';
    $request->prettyPrint = false;
    $request->quotaUser = 'commodi';
    $request->uploadType = 'repudiandae';
    $request->uploadProtocol = 'quae';

    $requestSecurity = new ProdTtSasportalNodesDevicesSignDeviceSecurity();
    $requestSecurity->option1 = new ProdTtSasportalNodesDevicesSignDeviceSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->nodes->prodTtSasportalNodesDevicesSignDevice($request, $requestSecurity);

    if ($response->sasPortalEmpty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## prodTtSasportalNodesDevicesUpdateSigned

Updates a signed device.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ProdTtSasportalNodesDevicesUpdateSignedRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\SasPortalUpdateSignedDeviceRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ProdTtSasportalNodesDevicesUpdateSignedSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ProdTtSasportalNodesDevicesUpdateSignedSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ProdTtSasportalNodesDevicesUpdateSignedSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProdTtSasportalNodesDevicesUpdateSignedRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->sasPortalUpdateSignedDeviceRequest = new SasPortalUpdateSignedDeviceRequest();
    $request->sasPortalUpdateSignedDeviceRequest->encodedDevice = 'quidem';
    $request->sasPortalUpdateSignedDeviceRequest->installerId = 'molestias';
    $request->accessToken = 'excepturi';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'modi';
    $request->fields = 'praesentium';
    $request->key = 'rem';
    $request->name = 'Carl Waelchi DVM';
    $request->oauthToken = 'incidunt';
    $request->prettyPrint = false;
    $request->quotaUser = 'enim';
    $request->uploadType = 'consequatur';
    $request->uploadProtocol = 'est';

    $requestSecurity = new ProdTtSasportalNodesDevicesUpdateSignedSecurity();
    $requestSecurity->option1 = new ProdTtSasportalNodesDevicesUpdateSignedSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->nodes->prodTtSasportalNodesDevicesUpdateSigned($request, $requestSecurity);

    if ($response->sasPortalDevice !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## prodTtSasportalNodesNodesDelete

Deletes a node.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ProdTtSasportalNodesNodesDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ProdTtSasportalNodesNodesDeleteSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ProdTtSasportalNodesNodesDeleteSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ProdTtSasportalNodesNodesDeleteSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProdTtSasportalNodesNodesDeleteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'explicabo';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'distinctio';
    $request->fields = 'quibusdam';
    $request->key = 'labore';
    $request->name = 'Tina Jacobi';
    $request->oauthToken = 'perferendis';
    $request->prettyPrint = false;
    $request->quotaUser = 'magni';
    $request->uploadType = 'assumenda';
    $request->uploadProtocol = 'ipsam';

    $requestSecurity = new ProdTtSasportalNodesNodesDeleteSecurity();
    $requestSecurity->option1 = new ProdTtSasportalNodesNodesDeleteSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->nodes->prodTtSasportalNodesNodesDelete($request, $requestSecurity);

    if ($response->sasPortalEmpty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## prodTtSasportalNodesNodesDeploymentsCreate

Creates a new deployment.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ProdTtSasportalNodesNodesDeploymentsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\SasPortalDeploymentInput;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ProdTtSasportalNodesNodesDeploymentsCreateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ProdTtSasportalNodesNodesDeploymentsCreateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ProdTtSasportalNodesNodesDeploymentsCreateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProdTtSasportalNodesNodesDeploymentsCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->sasPortalDeploymentInput = new SasPortalDeploymentInput();
    $request->sasPortalDeploymentInput->displayName = 'fugit';
    $request->sasPortalDeploymentInput->sasUserIds = [
        'excepturi',
        'tempora',
        'facilis',
    ];
    $request->accessToken = 'tempore';
    $request->alt = AltEnum::JSON;
    $request->callback = 'delectus';
    $request->fields = 'eum';
    $request->key = 'non';
    $request->oauthToken = 'eligendi';
    $request->parent = 'sint';
    $request->prettyPrint = false;
    $request->quotaUser = 'aliquid';
    $request->uploadType = 'provident';
    $request->uploadProtocol = 'necessitatibus';

    $requestSecurity = new ProdTtSasportalNodesNodesDeploymentsCreateSecurity();
    $requestSecurity->option1 = new ProdTtSasportalNodesNodesDeploymentsCreateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->nodes->prodTtSasportalNodesNodesDeploymentsCreate($request, $requestSecurity);

    if ($response->sasPortalDeployment !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## prodTtSasportalNodesNodesDeploymentsList

Lists deployments.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ProdTtSasportalNodesNodesDeploymentsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ProdTtSasportalNodesNodesDeploymentsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ProdTtSasportalNodesNodesDeploymentsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ProdTtSasportalNodesNodesDeploymentsListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProdTtSasportalNodesNodesDeploymentsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'officia';
    $request->alt = AltEnum::JSON;
    $request->callback = 'debitis';
    $request->fields = 'a';
    $request->filter = 'dolorum';
    $request->key = 'in';
    $request->oauthToken = 'in';
    $request->pageSize = 846409;
    $request->pageToken = 'maiores';
    $request->parent = 'rerum';
    $request->prettyPrint = false;
    $request->quotaUser = 'dicta';
    $request->uploadType = 'magnam';
    $request->uploadProtocol = 'cumque';

    $requestSecurity = new ProdTtSasportalNodesNodesDeploymentsListSecurity();
    $requestSecurity->option1 = new ProdTtSasportalNodesNodesDeploymentsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->nodes->prodTtSasportalNodesNodesDeploymentsList($request, $requestSecurity);

    if ($response->sasPortalListDeploymentsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## prodTtSasportalNodesNodesDevicesCreate

Creates a device under a node or customer.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ProdTtSasportalNodesNodesDevicesCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\SasPortalDeviceInput;
use \OpenAPI\OpenAPI\Models\Shared\SasPortalDeviceConfig;
use \OpenAPI\OpenAPI\Models\Shared\SasPortalDeviceAirInterface;
use \OpenAPI\OpenAPI\Models\Shared\SasPortalDeviceAirInterfaceRadioTechnologyEnum;
use \OpenAPI\OpenAPI\Models\Shared\SasPortalDeviceConfigCategoryEnum;
use \OpenAPI\OpenAPI\Models\Shared\SasPortalInstallationParams;
use \OpenAPI\OpenAPI\Models\Shared\SasPortalInstallationParamsHeightTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SasPortalDeviceConfigMeasurementCapabilitiesEnum;
use \OpenAPI\OpenAPI\Models\Shared\SasPortalDeviceModel;
use \OpenAPI\OpenAPI\Models\Shared\SasPortalDeviceConfigStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\SasPortalDeviceMetadataInput;
use \OpenAPI\OpenAPI\Models\Shared\SasPortalNrqzValidation;
use \OpenAPI\OpenAPI\Models\Shared\SasPortalNrqzValidationStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\SasPortalFrequencyRange;
use \OpenAPI\OpenAPI\Models\Shared\SasPortalDeviceGrant;
use \OpenAPI\OpenAPI\Models\Shared\SasPortalDeviceGrantChannelTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SasPortalDpaMoveList;
use \OpenAPI\OpenAPI\Models\Shared\SasPortalDeviceGrantStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\SasPortalDeviceStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ProdTtSasportalNodesNodesDevicesCreateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ProdTtSasportalNodesNodesDevicesCreateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ProdTtSasportalNodesNodesDevicesCreateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProdTtSasportalNodesNodesDevicesCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->sasPortalDeviceInput = new SasPortalDeviceInput();
    $request->sasPortalDeviceInput->activeConfig = new SasPortalDeviceConfig();
    $request->sasPortalDeviceInput->activeConfig->airInterface = new SasPortalDeviceAirInterface();
    $request->sasPortalDeviceInput->activeConfig->airInterface->radioTechnology = SasPortalDeviceAirInterfaceRadioTechnologyEnum::FOUR_G_BBW_SAA1;
    $request->sasPortalDeviceInput->activeConfig->airInterface->supportedSpec = 'aliquid';
    $request->sasPortalDeviceInput->activeConfig->callSign = 'laborum';
    $request->sasPortalDeviceInput->activeConfig->category = SasPortalDeviceConfigCategoryEnum::DEVICE_CATEGORY_B;
    $request->sasPortalDeviceInput->activeConfig->installationParams = new SasPortalInstallationParams();
    $request->sasPortalDeviceInput->activeConfig->installationParams->antennaAzimuth = 249796;
    $request->sasPortalDeviceInput->activeConfig->installationParams->antennaBeamwidth = 581273;
    $request->sasPortalDeviceInput->activeConfig->installationParams->antennaDowntilt = 313218;
    $request->sasPortalDeviceInput->activeConfig->installationParams->antennaGain = 881736;
    $request->sasPortalDeviceInput->activeConfig->installationParams->antennaGainNewField = 9654.17;
    $request->sasPortalDeviceInput->activeConfig->installationParams->antennaModel = 'quidem';
    $request->sasPortalDeviceInput->activeConfig->installationParams->cpeCbsdIndication = false;
    $request->sasPortalDeviceInput->activeConfig->installationParams->eirpCapability = 588465;
    $request->sasPortalDeviceInput->activeConfig->installationParams->eirpCapabilityNewField = 7252.55;
    $request->sasPortalDeviceInput->activeConfig->installationParams->height = 6596.69;
    $request->sasPortalDeviceInput->activeConfig->installationParams->heightType = SasPortalInstallationParamsHeightTypeEnum::HEIGHT_TYPE_AGL;
    $request->sasPortalDeviceInput->activeConfig->installationParams->horizontalAccuracy = 5332.06;
    $request->sasPortalDeviceInput->activeConfig->installationParams->indoorDeployment = false;
    $request->sasPortalDeviceInput->activeConfig->installationParams->latitude = 9560.84;
    $request->sasPortalDeviceInput->activeConfig->installationParams->longitude = 2305.33;
    $request->sasPortalDeviceInput->activeConfig->installationParams->verticalAccuracy = 6439.9;
    $request->sasPortalDeviceInput->activeConfig->isSigned = false;
    $request->sasPortalDeviceInput->activeConfig->measurementCapabilities = [
        SasPortalDeviceConfigMeasurementCapabilitiesEnum::MEASUREMENT_CAPABILITY_RECEIVED_POWER_WITH_GRANT,
        SasPortalDeviceConfigMeasurementCapabilitiesEnum::MEASUREMENT_CAPABILITY_RECEIVED_POWER_WITH_GRANT,
    ];
    $request->sasPortalDeviceInput->activeConfig->model = new SasPortalDeviceModel();
    $request->sasPortalDeviceInput->activeConfig->model->firmwareVersion = 'omnis';
    $request->sasPortalDeviceInput->activeConfig->model->hardwareVersion = 'molestiae';
    $request->sasPortalDeviceInput->activeConfig->model->name = 'Marcia Gutkowski';
    $request->sasPortalDeviceInput->activeConfig->model->softwareVersion = 'labore';
    $request->sasPortalDeviceInput->activeConfig->model->vendor = 'labore';
    $request->sasPortalDeviceInput->activeConfig->state = SasPortalDeviceConfigStateEnum::DRAFT;
    $request->sasPortalDeviceInput->activeConfig->updateTime = 'natus';
    $request->sasPortalDeviceInput->activeConfig->userId = 'nobis';
    $request->sasPortalDeviceInput->deviceMetadata = new SasPortalDeviceMetadataInput();
    $request->sasPortalDeviceInput->deviceMetadata->antennaModel = 'eum';
    $request->sasPortalDeviceInput->deviceMetadata->commonChannelGroup = 'vero';
    $request->sasPortalDeviceInput->deviceMetadata->interferenceCoordinationGroup = 'aspernatur';
    $request->sasPortalDeviceInput->deviceMetadata->nrqzValidation = new SasPortalNrqzValidation();
    $request->sasPortalDeviceInput->deviceMetadata->nrqzValidation->caseId = 'architecto';
    $request->sasPortalDeviceInput->deviceMetadata->nrqzValidation->cpiId = 'magnam';
    $request->sasPortalDeviceInput->deviceMetadata->nrqzValidation->latitude = 923.73;
    $request->sasPortalDeviceInput->deviceMetadata->nrqzValidation->longitude = 5699.65;
    $request->sasPortalDeviceInput->deviceMetadata->nrqzValidation->state = SasPortalNrqzValidationStateEnum::DRAFT;
    $request->sasPortalDeviceInput->displayName = 'provident';
    $request->sasPortalDeviceInput->fccId = 'quos';
    $request->sasPortalDeviceInput->grantRangeAllowlists = [
        new SasPortalFrequencyRange(),
        new SasPortalFrequencyRange(),
        new SasPortalFrequencyRange(),
    ];
    $request->sasPortalDeviceInput->grants = [
        new SasPortalDeviceGrant(),
    ];
    $request->sasPortalDeviceInput->name = 'Abel O'Hara';
    $request->sasPortalDeviceInput->preloadedConfig = new SasPortalDeviceConfig();
    $request->sasPortalDeviceInput->preloadedConfig->airInterface = new SasPortalDeviceAirInterface();
    $request->sasPortalDeviceInput->preloadedConfig->airInterface->radioTechnology = SasPortalDeviceAirInterfaceRadioTechnologyEnum::E_UTRA;
    $request->sasPortalDeviceInput->preloadedConfig->airInterface->supportedSpec = 'necessitatibus';
    $request->sasPortalDeviceInput->preloadedConfig->callSign = 'odit';
    $request->sasPortalDeviceInput->preloadedConfig->category = SasPortalDeviceConfigCategoryEnum::DEVICE_CATEGORY_A;
    $request->sasPortalDeviceInput->preloadedConfig->installationParams = new SasPortalInstallationParams();
    $request->sasPortalDeviceInput->preloadedConfig->installationParams->antennaAzimuth = 97260;
    $request->sasPortalDeviceInput->preloadedConfig->installationParams->antennaBeamwidth = 435865;
    $request->sasPortalDeviceInput->preloadedConfig->installationParams->antennaDowntilt = 984043;
    $request->sasPortalDeviceInput->preloadedConfig->installationParams->antennaGain = 891924;
    $request->sasPortalDeviceInput->preloadedConfig->installationParams->antennaGainNewField = 2603.41;
    $request->sasPortalDeviceInput->preloadedConfig->installationParams->antennaModel = 'maxime';
    $request->sasPortalDeviceInput->preloadedConfig->installationParams->cpeCbsdIndication = false;
    $request->sasPortalDeviceInput->preloadedConfig->installationParams->eirpCapability = 537023;
    $request->sasPortalDeviceInput->preloadedConfig->installationParams->eirpCapabilityNewField = 7038.89;
    $request->sasPortalDeviceInput->preloadedConfig->installationParams->height = 4479.26;
    $request->sasPortalDeviceInput->preloadedConfig->installationParams->heightType = SasPortalInstallationParamsHeightTypeEnum::HEIGHT_TYPE_UNSPECIFIED;
    $request->sasPortalDeviceInput->preloadedConfig->installationParams->horizontalAccuracy = 995.69;
    $request->sasPortalDeviceInput->preloadedConfig->installationParams->indoorDeployment = false;
    $request->sasPortalDeviceInput->preloadedConfig->installationParams->latitude = 9194.83;
    $request->sasPortalDeviceInput->preloadedConfig->installationParams->longitude = 3523.12;
    $request->sasPortalDeviceInput->preloadedConfig->installationParams->verticalAccuracy = 7142.42;
    $request->sasPortalDeviceInput->preloadedConfig->isSigned = false;
    $request->sasPortalDeviceInput->preloadedConfig->measurementCapabilities = [
        SasPortalDeviceConfigMeasurementCapabilitiesEnum::MEASUREMENT_CAPABILITY_RECEIVED_POWER_WITHOUT_GRANT,
        SasPortalDeviceConfigMeasurementCapabilitiesEnum::MEASUREMENT_CAPABILITY_RECEIVED_POWER_WITHOUT_GRANT,
    ];
    $request->sasPortalDeviceInput->preloadedConfig->model = new SasPortalDeviceModel();
    $request->sasPortalDeviceInput->preloadedConfig->model->firmwareVersion = 'sed';
    $request->sasPortalDeviceInput->preloadedConfig->model->hardwareVersion = 'saepe';
    $request->sasPortalDeviceInput->preloadedConfig->model->name = 'Edward Crooks';
    $request->sasPortalDeviceInput->preloadedConfig->model->softwareVersion = 'magni';
    $request->sasPortalDeviceInput->preloadedConfig->model->vendor = 'sunt';
    $request->sasPortalDeviceInput->preloadedConfig->state = SasPortalDeviceConfigStateEnum::FINAL;
    $request->sasPortalDeviceInput->preloadedConfig->updateTime = 'illum';
    $request->sasPortalDeviceInput->preloadedConfig->userId = 'pariatur';
    $request->sasPortalDeviceInput->serialNumber = 'maxime';
    $request->sasPortalDeviceInput->state = SasPortalDeviceStateEnum::RESERVED;
    $request->accessToken = 'excepturi';
    $request->alt = AltEnum::JSON;
    $request->callback = 'ea';
    $request->fields = 'accusantium';
    $request->key = 'ab';
    $request->oauthToken = 'maiores';
    $request->parent = 'quidem';
    $request->prettyPrint = false;
    $request->quotaUser = 'ipsam';
    $request->uploadType = 'voluptate';
    $request->uploadProtocol = 'autem';

    $requestSecurity = new ProdTtSasportalNodesNodesDevicesCreateSecurity();
    $requestSecurity->option1 = new ProdTtSasportalNodesNodesDevicesCreateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->nodes->prodTtSasportalNodesNodesDevicesCreate($request, $requestSecurity);

    if ($response->sasPortalDevice !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## prodTtSasportalNodesNodesDevicesCreateSigned

Creates a signed device under a node or customer.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ProdTtSasportalNodesNodesDevicesCreateSignedRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\SasPortalCreateSignedDeviceRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ProdTtSasportalNodesNodesDevicesCreateSignedSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ProdTtSasportalNodesNodesDevicesCreateSignedSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ProdTtSasportalNodesNodesDevicesCreateSignedSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProdTtSasportalNodesNodesDevicesCreateSignedRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->sasPortalCreateSignedDeviceRequest = new SasPortalCreateSignedDeviceRequest();
    $request->sasPortalCreateSignedDeviceRequest->encodedDevice = 'eaque';
    $request->sasPortalCreateSignedDeviceRequest->installerId = 'pariatur';
    $request->accessToken = 'nemo';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'perferendis';
    $request->fields = 'fugiat';
    $request->key = 'amet';
    $request->oauthToken = 'aut';
    $request->parent = 'cumque';
    $request->prettyPrint = false;
    $request->quotaUser = 'corporis';
    $request->uploadType = 'hic';
    $request->uploadProtocol = 'libero';

    $requestSecurity = new ProdTtSasportalNodesNodesDevicesCreateSignedSecurity();
    $requestSecurity->option1 = new ProdTtSasportalNodesNodesDevicesCreateSignedSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->nodes->prodTtSasportalNodesNodesDevicesCreateSigned($request, $requestSecurity);

    if ($response->sasPortalDevice !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## prodTtSasportalNodesNodesDevicesList

Lists devices under a node or customer.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ProdTtSasportalNodesNodesDevicesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ProdTtSasportalNodesNodesDevicesListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ProdTtSasportalNodesNodesDevicesListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ProdTtSasportalNodesNodesDevicesListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProdTtSasportalNodesNodesDevicesListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'dolores';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'totam';
    $request->fields = 'dignissimos';
    $request->filter = 'eaque';
    $request->key = 'quis';
    $request->oauthToken = 'nesciunt';
    $request->pageSize = 179490;
    $request->pageToken = 'perferendis';
    $request->parent = 'dolores';
    $request->prettyPrint = false;
    $request->quotaUser = 'minus';
    $request->uploadType = 'quam';
    $request->uploadProtocol = 'dolor';

    $requestSecurity = new ProdTtSasportalNodesNodesDevicesListSecurity();
    $requestSecurity->option1 = new ProdTtSasportalNodesNodesDevicesListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->nodes->prodTtSasportalNodesNodesDevicesList($request, $requestSecurity);

    if ($response->sasPortalListDevicesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## prodTtSasportalNodesNodesGet

Returns a requested node.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ProdTtSasportalNodesNodesGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ProdTtSasportalNodesNodesGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ProdTtSasportalNodesNodesGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ProdTtSasportalNodesNodesGetSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProdTtSasportalNodesNodesGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'nostrum';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'recusandae';
    $request->fields = 'omnis';
    $request->key = 'facilis';
    $request->name = 'George Sawayn';
    $request->oauthToken = 'error';
    $request->prettyPrint = false;
    $request->quotaUser = 'eaque';
    $request->uploadType = 'occaecati';
    $request->uploadProtocol = 'rerum';

    $requestSecurity = new ProdTtSasportalNodesNodesGetSecurity();
    $requestSecurity->option1 = new ProdTtSasportalNodesNodesGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->nodes->prodTtSasportalNodesNodesGet($request, $requestSecurity);

    if ($response->sasPortalNode !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## prodTtSasportalNodesNodesMove

Moves a node under another node or customer.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ProdTtSasportalNodesNodesMoveRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\SasPortalMoveNodeRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ProdTtSasportalNodesNodesMoveSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ProdTtSasportalNodesNodesMoveSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ProdTtSasportalNodesNodesMoveSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProdTtSasportalNodesNodesMoveRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->sasPortalMoveNodeRequest = new SasPortalMoveNodeRequest();
    $request->sasPortalMoveNodeRequest->destination = 'asperiores';
    $request->accessToken = 'earum';
    $request->alt = AltEnum::JSON;
    $request->callback = 'iste';
    $request->fields = 'dolorum';
    $request->key = 'deleniti';
    $request->name = 'Rene Rolfson';
    $request->oauthToken = 'quaerat';
    $request->prettyPrint = false;
    $request->quotaUser = 'quos';
    $request->uploadType = 'aliquid';
    $request->uploadProtocol = 'dolorem';

    $requestSecurity = new ProdTtSasportalNodesNodesMoveSecurity();
    $requestSecurity->option1 = new ProdTtSasportalNodesNodesMoveSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->nodes->prodTtSasportalNodesNodesMove($request, $requestSecurity);

    if ($response->sasPortalOperation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## prodTtSasportalNodesNodesNodesCreate

Creates a new node.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ProdTtSasportalNodesNodesNodesCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\SasPortalNode;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ProdTtSasportalNodesNodesNodesCreateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ProdTtSasportalNodesNodesNodesCreateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ProdTtSasportalNodesNodesNodesCreateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProdTtSasportalNodesNodesNodesCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->sasPortalNode = new SasPortalNode();
    $request->sasPortalNode->displayName = 'dolor';
    $request->sasPortalNode->name = 'Tiffany Welch';
    $request->sasPortalNode->sasUserIds = [
        'dignissimos',
        'reiciendis',
    ];
    $request->accessToken = 'amet';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'numquam';
    $request->fields = 'veritatis';
    $request->key = 'ipsa';
    $request->oauthToken = 'ipsa';
    $request->parent = 'iure';
    $request->prettyPrint = false;
    $request->quotaUser = 'odio';
    $request->uploadType = 'quaerat';
    $request->uploadProtocol = 'accusamus';

    $requestSecurity = new ProdTtSasportalNodesNodesNodesCreateSecurity();
    $requestSecurity->option1 = new ProdTtSasportalNodesNodesNodesCreateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->nodes->prodTtSasportalNodesNodesNodesCreate($request, $requestSecurity);

    if ($response->sasPortalNode !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## prodTtSasportalNodesNodesNodesList

Lists nodes.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ProdTtSasportalNodesNodesNodesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ProdTtSasportalNodesNodesNodesListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ProdTtSasportalNodesNodesNodesListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ProdTtSasportalNodesNodesNodesListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProdTtSasportalNodesNodesNodesListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'voluptatibus';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'natus';
    $request->fields = 'eos';
    $request->filter = 'atque';
    $request->key = 'sit';
    $request->oauthToken = 'fugiat';
    $request->pageSize = 67249;
    $request->pageToken = 'soluta';
    $request->parent = 'dolorum';
    $request->prettyPrint = false;
    $request->quotaUser = 'iusto';
    $request->uploadType = 'voluptate';
    $request->uploadProtocol = 'dolorum';

    $requestSecurity = new ProdTtSasportalNodesNodesNodesListSecurity();
    $requestSecurity->option1 = new ProdTtSasportalNodesNodesNodesListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->nodes->prodTtSasportalNodesNodesNodesList($request, $requestSecurity);

    if ($response->sasPortalListNodesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## prodTtSasportalNodesNodesPatch

Updates an existing node.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ProdTtSasportalNodesNodesPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\SasPortalNode;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ProdTtSasportalNodesNodesPatchSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ProdTtSasportalNodesNodesPatchSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ProdTtSasportalNodesNodesPatchSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProdTtSasportalNodesNodesPatchRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->sasPortalNode = new SasPortalNode();
    $request->sasPortalNode->displayName = 'omnis';
    $request->sasPortalNode->name = 'Kelvin Zboncak';
    $request->sasPortalNode->sasUserIds = [
        'id',
        'saepe',
    ];
    $request->accessToken = 'eius';
    $request->alt = AltEnum::JSON;
    $request->callback = 'perferendis';
    $request->fields = 'amet';
    $request->key = 'optio';
    $request->name = 'Tommy Turner';
    $request->oauthToken = 'provident';
    $request->prettyPrint = false;
    $request->quotaUser = 'minima';
    $request->updateMask = 'repellendus';
    $request->uploadType = 'totam';
    $request->uploadProtocol = 'similique';

    $requestSecurity = new ProdTtSasportalNodesNodesPatchSecurity();
    $requestSecurity->option1 = new ProdTtSasportalNodesNodesPatchSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->nodes->prodTtSasportalNodesNodesPatch($request, $requestSecurity);

    if ($response->sasPortalNode !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
