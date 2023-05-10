# alerts

### Available Operations

* [createNetworkSensorAlertsProfile](#createnetworksensoralertsprofile) - Creates a sensor alert profile for a network.
* [createOrganizationAlertsProfile](#createorganizationalertsprofile) - Create an organization-wide alert configuration
* [deleteNetworkSensorAlertsProfile](#deletenetworksensoralertsprofile) - Deletes a sensor alert profile from a network.
* [deleteOrganizationAlertsProfile](#deleteorganizationalertsprofile) - Removes an organization-wide alert config
* [getNetworkAlertsHistory](#getnetworkalertshistory) - Return the alert history for this network
* [getNetworkAlertsSettings](#getnetworkalertssettings) - Return the alert configuration for this network
* [getNetworkHealthAlerts](#getnetworkhealthalerts) - Return all global alerts on this network
* [getNetworkSensorAlertsCurrentOverviewByMetric](#getnetworksensoralertscurrentoverviewbymetric) - Return an overview of currently alerting sensors by metric
* [getNetworkSensorAlertsOverviewByMetric](#getnetworksensoralertsoverviewbymetric) - Return an overview of alert occurrences over a timespan, by metric
* [getNetworkSensorAlertsProfile](#getnetworksensoralertsprofile) - Show details of a sensor alert profile for a network.
* [getNetworkSensorAlertsProfiles](#getnetworksensoralertsprofiles) - Lists all sensor alert profiles for a network.
* [getOrganizationAlertsProfiles](#getorganizationalertsprofiles) - List all organization-wide alert configurations
* [updateNetworkAlertsSettings](#updatenetworkalertssettings) - Update the alert configuration for this network
* [updateNetworkSensorAlertsProfile](#updatenetworksensoralertsprofile) - Updates a sensor alert profile for a network.
* [updateOrganizationAlertsProfile](#updateorganizationalertsprofile) - Update an organization-wide alert config

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
        new CreateNetworkSensorAlertsProfileRequestBodyConditions(),
    ];
    $request->requestBody->name = 'Toni Wolff';
    $request->requestBody->recipients = new CreateNetworkSensorAlertsProfileRequestBodyRecipients();
    $request->requestBody->recipients->emails = [
        'quis',
        'ipsum',
        'delectus',
    ];
    $request->requestBody->recipients->httpServerIds = [
        'consectetur',
        'vero',
    ];
    $request->requestBody->recipients->smsNumbers = [
        'dignissimos',
        'hic',
        'distinctio',
        'quod',
    ];
    $request->requestBody->schedule = new CreateNetworkSensorAlertsProfileRequestBodySchedule();
    $request->requestBody->schedule->id = '7abd74dd-39c0-4f5d-acff-7c70a45626d4';
    $request->requestBody->serials = [
        'ex',
    ];
    $request->networkId = 'laudantium';

    $response = $sdk->alerts->createNetworkSensorAlertsProfile($request);

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
    $request->requestBody->alertCondition->bitRateBps = 120657;
    $request->requestBody->alertCondition->duration = 224317;
    $request->requestBody->alertCondition->interface = CreateOrganizationAlertsProfileRequestBodyAlertConditionInterfaceEnum::WAN2;
    $request->requestBody->alertCondition->jitterMs = 97844;
    $request->requestBody->alertCondition->latencyMs = 406120;
    $request->requestBody->alertCondition->lossRatio = 8621.92;
    $request->requestBody->alertCondition->mos = 5692.11;
    $request->requestBody->alertCondition->window = 972920;
    $request->requestBody->description = 'nostrum';
    $request->requestBody->networkTags = [
        'quisquam',
        'saepe',
        'ea',
        'impedit',
    ];
    $request->requestBody->recipients = new CreateOrganizationAlertsProfileRequestBodyRecipients();
    $request->requestBody->recipients->emails = [
        'veniam',
        'aliquid',
    ];
    $request->requestBody->recipients->httpServerIds = [
        'magnam',
    ];
    $request->requestBody->type = CreateOrganizationAlertsProfileRequestBodyTypeEnum::VOIP_PACKET_LOSS;
    $request->organizationId = 'quo';

    $response = $sdk->alerts->createOrganizationAlertsProfile($request);

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
    $request->id = '3e250fb0-08c4-42e1-81aa-c366c8dd6b14';
    $request->networkId = 'numquam';

    $response = $sdk->alerts->deleteNetworkSensorAlertsProfile($request);

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
    $request->alertConfigId = 'explicabo';
    $request->organizationId = 'provident';

    $response = $sdk->alerts->deleteOrganizationAlertsProfile($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkAlertsHistory

Return the alert history for this network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkAlertsHistoryRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkAlertsHistoryRequest();
    $request->endingBefore = 'ipsa';
    $request->networkId = 'molestiae';
    $request->perPage = 301598;
    $request->startingAfter = 'odio';

    $response = $sdk->alerts->getNetworkAlertsHistory($request);

    if ($response->getNetworkAlertsHistory200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkAlertsSettings

Return the alert configuration for this network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkAlertsSettingsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkAlertsSettingsRequest();
    $request->networkId = 'eius';

    $response = $sdk->alerts->getNetworkAlertsSettings($request);

    if ($response->getNetworkAlertsSettings200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkHealthAlerts

Return all global alerts on this network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkHealthAlertsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkHealthAlertsRequest();
    $request->networkId = 'esse';

    $response = $sdk->alerts->getNetworkHealthAlerts($request);

    if ($response->getNetworkHealthAlerts200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkSensorAlertsCurrentOverviewByMetric

Return an overview of currently alerting sensors by metric

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkSensorAlertsCurrentOverviewByMetricRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkSensorAlertsCurrentOverviewByMetricRequest();
    $request->networkId = 'esse';

    $response = $sdk->alerts->getNetworkSensorAlertsCurrentOverviewByMetric($request);

    if ($response->getNetworkSensorAlertsCurrentOverviewByMetric200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkSensorAlertsOverviewByMetric

Return an overview of alert occurrences over a timespan, by metric

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkSensorAlertsOverviewByMetricRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkSensorAlertsOverviewByMetricRequest();
    $request->interval = 524593;
    $request->networkId = 'fuga';
    $request->t0 = 'reprehenderit';
    $request->t1 = 'quidem';
    $request->timespan = 8526.35;

    $response = $sdk->alerts->getNetworkSensorAlertsOverviewByMetric($request);

    if ($response->getNetworkSensorAlertsOverviewByMetric200ApplicationJSONObjects !== null) {
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
    $request->id = '466d28c1-0ab3-4cdc-a425-1904e523c7e0';
    $request->networkId = 'distinctio';

    $response = $sdk->alerts->getNetworkSensorAlertsProfile($request);

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
    $request->networkId = 'quod';

    $response = $sdk->alerts->getNetworkSensorAlertsProfiles($request);

    if ($response->getNetworkSensorAlertsProfiles200ApplicationJSONObjects !== null) {
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
    $request->organizationId = 'dignissimos';

    $response = $sdk->alerts->getOrganizationAlertsProfiles($request);

    if ($response->getOrganizationAlertsProfiles200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkAlertsSettings

Update the alert configuration for this network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkAlertsSettingsRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkAlertsSettingsRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkAlertsSettingsRequestBodyAlerts;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkAlertsSettingsRequestBodyAlertsAlertDestinations;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkAlertsSettingsRequestBodyDefaultDestinations;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkAlertsSettingsRequest();
    $request->requestBody = new UpdateNetworkAlertsSettingsRequestBody();
    $request->requestBody->alerts = [
        new UpdateNetworkAlertsSettingsRequestBodyAlerts(),
    ];
    $request->requestBody->defaultDestinations = new UpdateNetworkAlertsSettingsRequestBodyDefaultDestinations();
    $request->requestBody->defaultDestinations->allAdmins = false;
    $request->requestBody->defaultDestinations->emails = [
        'totam',
        'accusamus',
    ];
    $request->requestBody->defaultDestinations->httpServerIds = [
        'odio',
        'occaecati',
    ];
    $request->requestBody->defaultDestinations->snmp = false;
    $request->networkId = 'commodi';

    $response = $sdk->alerts->updateNetworkAlertsSettings($request);

    if ($response->updateNetworkAlertsSettings200ApplicationJSONObject !== null) {
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
        new UpdateNetworkSensorAlertsProfileRequestBodyConditions(),
    ];
    $request->requestBody->name = 'Miss Rosie Krajcik';
    $request->requestBody->recipients = new UpdateNetworkSensorAlertsProfileRequestBodyRecipients();
    $request->requestBody->recipients->emails = [
        'praesentium',
        'consequuntur',
        'deleniti',
    ];
    $request->requestBody->recipients->httpServerIds = [
        'fuga',
    ];
    $request->requestBody->recipients->smsNumbers = [
        'incidunt',
        'atque',
        'explicabo',
    ];
    $request->requestBody->schedule = new UpdateNetworkSensorAlertsProfileRequestBodySchedule();
    $request->requestBody->schedule->id = '562f222e-9817-4ee1-bcbe-61e6b7b95bc0';
    $request->requestBody->serials = [
        'tempore',
        'adipisci',
        'cumque',
    ];
    $request->id = '20c4f378-9fd8-471f-99dd-2efd121aa6f1';
    $request->networkId = 'earum';

    $response = $sdk->alerts->updateNetworkSensorAlertsProfile($request);

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
    $request->requestBody->alertCondition->bitRateBps = 424032;
    $request->requestBody->alertCondition->duration = 447378;
    $request->requestBody->alertCondition->interface = UpdateOrganizationAlertsProfileRequestBodyAlertConditionInterfaceEnum::CELLULAR;
    $request->requestBody->alertCondition->jitterMs = 727697;
    $request->requestBody->alertCondition->latencyMs = 849039;
    $request->requestBody->alertCondition->lossRatio = 7422.38;
    $request->requestBody->alertCondition->mos = 333.04;
    $request->requestBody->alertCondition->window = 306986;
    $request->requestBody->description = 'sapiente';
    $request->requestBody->enabled = false;
    $request->requestBody->networkTags = [
        'ullam',
    ];
    $request->requestBody->recipients = new UpdateOrganizationAlertsProfileRequestBodyRecipients();
    $request->requestBody->recipients->emails = [
        'ullam',
        'nisi',
    ];
    $request->requestBody->recipients->httpServerIds = [
        'voluptatum',
    ];
    $request->requestBody->type = UpdateOrganizationAlertsProfileRequestBodyTypeEnum::VOIP_JITTER;
    $request->alertConfigId = 'quibusdam';
    $request->organizationId = 'ex';

    $response = $sdk->alerts->updateOrganizationAlertsProfile($request);

    if ($response->updateOrganizationAlertsProfile200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
