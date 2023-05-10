# profiles

### Available Operations

* [createNetworkSensorAlertsProfile](#createnetworksensoralertsprofile) - Creates a sensor alert profile for a network.
* [createOrganizationAlertsProfile](#createorganizationalertsprofile) - Create an organization-wide alert configuration
* [deleteNetworkSensorAlertsProfile](#deletenetworksensoralertsprofile) - Deletes a sensor alert profile from a network.
* [deleteOrganizationAlertsProfile](#deleteorganizationalertsprofile) - Removes an organization-wide alert config
* [getNetworkSensorAlertsProfile](#getnetworksensoralertsprofile) - Show details of a sensor alert profile for a network.
* [getNetworkSensorAlertsProfiles](#getnetworksensoralertsprofiles) - Lists all sensor alert profiles for a network.
* [getNetworkSmProfiles](#getnetworksmprofiles) - List all profiles in a network
* [getOrganizationAlertsProfiles](#getorganizationalertsprofiles) - List all organization-wide alert configurations
* [getOrganizationConfigTemplateSwitchProfilePort](#getorganizationconfigtemplateswitchprofileport) - Return a switch profile port
* [getOrganizationConfigTemplateSwitchProfilePorts](#getorganizationconfigtemplateswitchprofileports) - Return all the ports of a switch profile
* [getOrganizationConfigTemplateSwitchProfiles](#getorganizationconfigtemplateswitchprofiles) - List the switch profiles for your switch template configuration
* [updateNetworkSensorAlertsProfile](#updatenetworksensoralertsprofile) - Updates a sensor alert profile for a network.
* [updateOrganizationAlertsProfile](#updateorganizationalertsprofile) - Update an organization-wide alert config
* [updateOrganizationConfigTemplateSwitchProfilePort](#updateorganizationconfigtemplateswitchprofileport) - Update a switch profile port

## createNetworkSensorAlertsProfile

Creates a sensor alert profile for a network.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkSensorAlertsProfileRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkSensorAlertsProfileRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkSensorAlertsProfileRequestBodyConditions;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkSensorAlertsProfileRequestBodyConditionsDirectionEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkSensorAlertsProfileRequestBodyConditionsDurationEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkSensorAlertsProfileRequestBodyConditionsThreshold;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdDoor;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdHumidity;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdHumidityQualityEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdIndoorAirQuality;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdIndoorAirQualityQualityEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdNoise;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdNoiseAmbient;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdNoiseAmbientQualityEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdPm25;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdPm25QualityEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdTemperature;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdTemperatureQualityEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdTvoc;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdTvocQualityEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdWater;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkSensorAlertsProfileRequestBodyRecipients;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkSensorAlertsProfileRequestBodySchedule;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateNetworkSensorAlertsProfileRequest();
    $request->requestBody = new CreateNetworkSensorAlertsProfileRequestBody();
    $request->requestBody->conditions = [
        new CreateNetworkSensorAlertsProfileRequestBodyConditions(),
        new CreateNetworkSensorAlertsProfileRequestBodyConditions(),
    ];
    $request->requestBody->name = 'Melba Stiedemann';
    $request->requestBody->recipients = new CreateNetworkSensorAlertsProfileRequestBodyRecipients();
    $request->requestBody->recipients->emails = [
        'animi',
    ];
    $request->requestBody->recipients->httpServerIds = [
        'voluptatem',
    ];
    $request->requestBody->recipients->smsNumbers = [
        'ea',
        'placeat',
        'odit',
        'natus',
    ];
    $request->requestBody->schedule = new CreateNetworkSensorAlertsProfileRequestBodySchedule();
    $request->requestBody->schedule->id = '78ec256a-5b09-4227-bcc4-7996c977bbc5';
    $request->requestBody->serials = [
        'sapiente',
        'ratione',
    ];
    $request->networkId = 'praesentium';

    $response = $sdk->profiles->createNetworkSensorAlertsProfile($request);

    if ($response->createNetworkSensorAlertsProfile200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createOrganizationAlertsProfile

Create an organization-wide alert configuration

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateOrganizationAlertsProfileRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateOrganizationAlertsProfileRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateOrganizationAlertsProfileRequestBodyAlertCondition;
use \OpenAPI\OpenAPI\Models\Operations\CreateOrganizationAlertsProfileRequestBodyAlertConditionInterfaceEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateOrganizationAlertsProfileRequestBodyRecipients;
use \OpenAPI\OpenAPI\Models\Operations\CreateOrganizationAlertsProfileRequestBodyTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateOrganizationAlertsProfileRequest();
    $request->requestBody = new CreateOrganizationAlertsProfileRequestBody();
    $request->requestBody->alertCondition = new CreateOrganizationAlertsProfileRequestBodyAlertCondition();
    $request->requestBody->alertCondition->bitRateBps = 597767;
    $request->requestBody->alertCondition->duration = 177137;
    $request->requestBody->alertCondition->interface = CreateOrganizationAlertsProfileRequestBodyAlertConditionInterfaceEnum::WAN1;
    $request->requestBody->alertCondition->jitterMs = 665056;
    $request->requestBody->alertCondition->latencyMs = 500494;
    $request->requestBody->alertCondition->lossRatio = 3890.14;
    $request->requestBody->alertCondition->mos = 585.82;
    $request->requestBody->alertCondition->window = 52016;
    $request->requestBody->description = 'quo';
    $request->requestBody->networkTags = [
        'atque',
        'illum',
    ];
    $request->requestBody->recipients = new CreateOrganizationAlertsProfileRequestBodyRecipients();
    $request->requestBody->recipients->emails = [
        'iusto',
        'facere',
    ];
    $request->requestBody->recipients->httpServerIds = [
        'sequi',
        'voluptates',
    ];
    $request->requestBody->type = CreateOrganizationAlertsProfileRequestBodyTypeEnum::VOIP_MOS;
    $request->organizationId = 'similique';

    $response = $sdk->profiles->createOrganizationAlertsProfile($request);

    if ($response->createOrganizationAlertsProfile201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteNetworkSensorAlertsProfile

Deletes a sensor alert profile from a network.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteNetworkSensorAlertsProfileRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteNetworkSensorAlertsProfileRequest();
    $request->id = 'a5684645-79cf-4c6c-8e50-3f56831f1d8e';
    $request->networkId = 'at';

    $response = $sdk->profiles->deleteNetworkSensorAlertsProfile($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteOrganizationAlertsProfile

Removes an organization-wide alert config

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteOrganizationAlertsProfileRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteOrganizationAlertsProfileRequest();
    $request->alertConfigId = 'rem';
    $request->organizationId = 'quam';

    $response = $sdk->profiles->deleteOrganizationAlertsProfile($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkSensorAlertsProfile

Show details of a sensor alert profile for a network.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkSensorAlertsProfileRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkSensorAlertsProfileRequest();
    $request->id = 'b28e8afa-bc98-46e2-81e4-3b2342417d13';
    $request->networkId = 'debitis';

    $response = $sdk->profiles->getNetworkSensorAlertsProfile($request);

    if ($response->getNetworkSensorAlertsProfile200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkSensorAlertsProfiles

Lists all sensor alert profiles for a network.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkSensorAlertsProfilesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkSensorAlertsProfilesRequest();
    $request->networkId = 'nesciunt';

    $response = $sdk->profiles->getNetworkSensorAlertsProfiles($request);

    if ($response->getNetworkSensorAlertsProfiles200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkSmProfiles

List all profiles in a network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkSmProfilesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkSmProfilesRequest();
    $request->networkId = 'sapiente';

    $response = $sdk->profiles->getNetworkSmProfiles($request);

    if ($response->getNetworkSmProfiles200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganizationAlertsProfiles

List all organization-wide alert configurations

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationAlertsProfilesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationAlertsProfilesRequest();
    $request->organizationId = 'nisi';

    $response = $sdk->profiles->getOrganizationAlertsProfiles($request);

    if ($response->getOrganizationAlertsProfiles200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganizationConfigTemplateSwitchProfilePort

Return a switch profile port

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationConfigTemplateSwitchProfilePortRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationConfigTemplateSwitchProfilePortRequest();
    $request->configTemplateId = 'explicabo';
    $request->organizationId = 'similique';
    $request->portId = 'culpa';
    $request->profileId = 'cupiditate';

    $response = $sdk->profiles->getOrganizationConfigTemplateSwitchProfilePort($request);

    if ($response->getOrganizationConfigTemplateSwitchProfilePort200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganizationConfigTemplateSwitchProfilePorts

Return all the ports of a switch profile

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationConfigTemplateSwitchProfilePortsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationConfigTemplateSwitchProfilePortsRequest();
    $request->configTemplateId = 'culpa';
    $request->organizationId = 'recusandae';
    $request->profileId = 'labore';

    $response = $sdk->profiles->getOrganizationConfigTemplateSwitchProfilePorts($request);

    if ($response->getOrganizationConfigTemplateSwitchProfilePorts200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganizationConfigTemplateSwitchProfiles

List the switch profiles for your switch template configuration

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationConfigTemplateSwitchProfilesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationConfigTemplateSwitchProfilesRequest();
    $request->configTemplateId = 'fuga';
    $request->organizationId = 'necessitatibus';

    $response = $sdk->profiles->getOrganizationConfigTemplateSwitchProfiles($request);

    if ($response->getOrganizationConfigTemplateSwitchProfiles200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkSensorAlertsProfile

Updates a sensor alert profile for a network.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSensorAlertsProfileRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSensorAlertsProfileRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSensorAlertsProfileRequestBodyConditions;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSensorAlertsProfileRequestBodyConditionsDirectionEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSensorAlertsProfileRequestBodyConditionsDurationEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSensorAlertsProfileRequestBodyConditionsThreshold;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdDoor;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdHumidity;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdHumidityQualityEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdIndoorAirQuality;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdIndoorAirQualityQualityEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdNoise;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdNoiseAmbient;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdNoiseAmbientQualityEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdPm25;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdPm25QualityEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdTemperature;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdTemperatureQualityEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdTvoc;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdTvocQualityEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdWater;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSensorAlertsProfileRequestBodyRecipients;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSensorAlertsProfileRequestBodySchedule;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkSensorAlertsProfileRequest();
    $request->requestBody = new UpdateNetworkSensorAlertsProfileRequestBody();
    $request->requestBody->conditions = [
        new UpdateNetworkSensorAlertsProfileRequestBodyConditions(),
        new UpdateNetworkSensorAlertsProfileRequestBodyConditions(),
        new UpdateNetworkSensorAlertsProfileRequestBodyConditions(),
    ];
    $request->requestBody->name = 'Rudolph Funk';
    $request->requestBody->recipients = new UpdateNetworkSensorAlertsProfileRequestBodyRecipients();
    $request->requestBody->recipients->emails = [
        'dolore',
        'sint',
        'quia',
        'maxime',
    ];
    $request->requestBody->recipients->httpServerIds = [
        'necessitatibus',
        'deleniti',
    ];
    $request->requestBody->recipients->smsNumbers = [
        'mollitia',
        'corporis',
        'repellendus',
    ];
    $request->requestBody->schedule = new UpdateNetworkSensorAlertsProfileRequestBodySchedule();
    $request->requestBody->schedule->id = '4aa4a508-bd38-40c2-9aa8-dd71bddaa30b';
    $request->requestBody->serials = [
        'cum',
        'perspiciatis',
    ];
    $request->id = '1449ae69-c088-4d41-8bb7-1804f423d543';
    $request->networkId = 'sint';

    $response = $sdk->profiles->updateNetworkSensorAlertsProfile($request);

    if ($response->updateNetworkSensorAlertsProfile200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateOrganizationAlertsProfile

Update an organization-wide alert config

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationAlertsProfileRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationAlertsProfileRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationAlertsProfileRequestBodyAlertCondition;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationAlertsProfileRequestBodyAlertConditionInterfaceEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationAlertsProfileRequestBodyRecipients;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationAlertsProfileRequestBodyTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateOrganizationAlertsProfileRequest();
    $request->requestBody = new UpdateOrganizationAlertsProfileRequestBody();
    $request->requestBody->alertCondition = new UpdateOrganizationAlertsProfileRequestBodyAlertCondition();
    $request->requestBody->alertCondition->bitRateBps = 189728;
    $request->requestBody->alertCondition->duration = 338614;
    $request->requestBody->alertCondition->interface = UpdateOrganizationAlertsProfileRequestBodyAlertConditionInterfaceEnum::WAN2;
    $request->requestBody->alertCondition->jitterMs = 189662;
    $request->requestBody->alertCondition->latencyMs = 447414;
    $request->requestBody->alertCondition->lossRatio = 4695.73;
    $request->requestBody->alertCondition->mos = 6781.23;
    $request->requestBody->alertCondition->window = 789394;
    $request->requestBody->description = 'voluptas';
    $request->requestBody->enabled = false;
    $request->requestBody->networkTags = [
        'excepturi',
        'nam',
        'ducimus',
        'officiis',
    ];
    $request->requestBody->recipients = new UpdateOrganizationAlertsProfileRequestBodyRecipients();
    $request->requestBody->recipients->emails = [
        'velit',
        'nam',
        'suscipit',
    ];
    $request->requestBody->recipients->httpServerIds = [
        'sequi',
        'optio',
        'minima',
    ];
    $request->requestBody->type = UpdateOrganizationAlertsProfileRequestBodyTypeEnum::VOIP_JITTER;
    $request->alertConfigId = 'amet';
    $request->organizationId = 'quasi';

    $response = $sdk->profiles->updateOrganizationAlertsProfile($request);

    if ($response->updateOrganizationAlertsProfile200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateOrganizationConfigTemplateSwitchProfilePort

Update a switch profile port

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationConfigTemplateSwitchProfilePortRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationConfigTemplateSwitchProfilePortRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyAccessPolicyTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyProfile;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyStpGuardEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyUdldEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateOrganizationConfigTemplateSwitchProfilePortRequest();
    $request->requestBody = new UpdateOrganizationConfigTemplateSwitchProfilePortRequestBody();
    $request->requestBody->accessPolicyNumber = 39634;
    $request->requestBody->accessPolicyType = UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyAccessPolicyTypeEnum::MAC_ALLOW_LIST;
    $request->requestBody->allowedVlans = 'recusandae';
    $request->requestBody->daiTrusted = false;
    $request->requestBody->enabled = false;
    $request->requestBody->flexibleStackingEnabled = false;
    $request->requestBody->isolationEnabled = false;
    $request->requestBody->linkNegotiation = 'iusto';
    $request->requestBody->macAllowList = [
        'dolor',
        'quaerat',
        'impedit',
        'deserunt',
    ];
    $request->requestBody->name = 'John Volkman';
    $request->requestBody->poeEnabled = false;
    $request->requestBody->portScheduleId = 'voluptatum';
    $request->requestBody->profile = new UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyProfile();
    $request->requestBody->profile->enabled = false;
    $request->requestBody->profile->id = '12a66148-944a-48e9-8850-75bc25382533';
    $request->requestBody->profile->iname = 'tempora';
    $request->requestBody->rstpEnabled = false;
    $request->requestBody->stickyMacAllowList = [
        'asperiores',
    ];
    $request->requestBody->stickyMacAllowListLimit = 748860;
    $request->requestBody->stormControlEnabled = false;
    $request->requestBody->stpGuard = UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyStpGuardEnum::BPDU_GUARD;
    $request->requestBody->tags = [
        'modi',
        'itaque',
        'autem',
    ];
    $request->requestBody->type = UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyTypeEnum::ACCESS;
    $request->requestBody->udld = UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyUdldEnum::ENFORCE;
    $request->requestBody->vlan = 636567;
    $request->requestBody->voiceVlan = 272167;
    $request->configTemplateId = 'nihil';
    $request->organizationId = 'exercitationem';
    $request->portId = 'molestiae';
    $request->profileId = 'praesentium';

    $response = $sdk->profiles->updateOrganizationConfigTemplateSwitchProfilePort($request);

    if ($response->updateOrganizationConfigTemplateSwitchProfilePort200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
