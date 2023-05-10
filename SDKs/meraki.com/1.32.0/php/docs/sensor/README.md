# sensor

### Available Operations

* [createNetworkSensorAlertsProfile](#createnetworksensoralertsprofile) - Creates a sensor alert profile for a network.
* [deleteNetworkSensorAlertsProfile](#deletenetworksensoralertsprofile) - Deletes a sensor alert profile from a network.
* [getDeviceSensorRelationships](#getdevicesensorrelationships) - List the sensor roles for a given sensor or camera device.
* [getNetworkSensorAlertsCurrentOverviewByMetric](#getnetworksensoralertscurrentoverviewbymetric) - Return an overview of currently alerting sensors by metric
* [getNetworkSensorAlertsOverviewByMetric](#getnetworksensoralertsoverviewbymetric) - Return an overview of alert occurrences over a timespan, by metric
* [getNetworkSensorAlertsProfile](#getnetworksensoralertsprofile) - Show details of a sensor alert profile for a network.
* [getNetworkSensorAlertsProfiles](#getnetworksensoralertsprofiles) - Lists all sensor alert profiles for a network.
* [getNetworkSensorRelationships](#getnetworksensorrelationships) - List the sensor roles for devices in a given network
* [getOrganizationSensorReadingsHistory](#getorganizationsensorreadingshistory) - Return all reported readings from sensors in a given timespan, sorted by timestamp
* [getOrganizationSensorReadingsLatest](#getorganizationsensorreadingslatest) - Return the latest available reading for each metric from each sensor, sorted by sensor serial
* [updateDeviceSensorRelationships](#updatedevicesensorrelationships) - Assign one or more sensor roles to a given sensor or camera device.
* [updateNetworkSensorAlertsProfile](#updatenetworksensoralertsprofile) - Updates a sensor alert profile for a network.

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
    $request->requestBody->name = 'Ms. Sam Goyette DVM';
    $request->requestBody->recipients = new CreateNetworkSensorAlertsProfileRequestBodyRecipients();
    $request->requestBody->recipients->emails = [
        'sunt',
        'corporis',
        'quae',
    ];
    $request->requestBody->recipients->httpServerIds = [
        'ratione',
    ];
    $request->requestBody->recipients->smsNumbers = [
        'amet',
    ];
    $request->requestBody->schedule = new CreateNetworkSensorAlertsProfileRequestBodySchedule();
    $request->requestBody->schedule->id = 'b2c09b92-4771-4f56-a9e5-b7ec7626649d';
    $request->requestBody->serials = [
        'aliquam',
        'necessitatibus',
        'tempore',
    ];
    $request->networkId = 'provident';

    $response = $sdk->sensor->createNetworkSensorAlertsProfile($request);

    if ($response->createNetworkSensorAlertsProfile200ApplicationJSONObject !== null) {
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
    $request->id = 'e4cfd227-6e0b-488f-b87d-6fa5b6e8dbf8';
    $request->networkId = 'dicta';

    $response = $sdk->sensor->deleteNetworkSensorAlertsProfile($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeviceSensorRelationships

List the sensor roles for a given sensor or camera device.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDeviceSensorRelationshipsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDeviceSensorRelationshipsRequest();
    $request->serial = 'qui';

    $response = $sdk->sensor->getDeviceSensorRelationships($request);

    if ($response->getDeviceSensorRelationships200ApplicationJSONObjects !== null) {
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
    $request->networkId = 'asperiores';

    $response = $sdk->sensor->getNetworkSensorAlertsCurrentOverviewByMetric($request);

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
    $request->interval = 502275;
    $request->networkId = 'nesciunt';
    $request->t0 = 'nam';
    $request->t1 = 'inventore';
    $request->timespan = 7530.97;

    $response = $sdk->sensor->getNetworkSensorAlertsOverviewByMetric($request);

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
    $request->id = 'a6a9ffc5-6192-49cc-a956-0a1395918da1';
    $request->networkId = 'fugiat';

    $response = $sdk->sensor->getNetworkSensorAlertsProfile($request);

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
    $request->networkId = 'magnam';

    $response = $sdk->sensor->getNetworkSensorAlertsProfiles($request);

    if ($response->getNetworkSensorAlertsProfiles200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkSensorRelationships

List the sensor roles for devices in a given network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkSensorRelationshipsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkSensorRelationshipsRequest();
    $request->networkId = 'atque';

    $response = $sdk->sensor->getNetworkSensorRelationships($request);

    if ($response->getNetworkSensorRelationships200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganizationSensorReadingsHistory

Return all reported readings from sensors in a given timespan, sorted by timestamp

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationSensorReadingsHistoryRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationSensorReadingsHistoryRequest();
    $request->endingBefore = 'recusandae';
    $request->metrics = [
        'quas',
        'officiis',
    ];
    $request->networkIds = [
        'quisquam',
    ];
    $request->organizationId = 'asperiores';
    $request->perPage = 508834;
    $request->serials = [
        'inventore',
        'ab',
        'dolore',
        'amet',
    ];
    $request->startingAfter = 'nulla';
    $request->t0 = 'officia';
    $request->t1 = 'natus';
    $request->timespan = 1988.03;

    $response = $sdk->sensor->getOrganizationSensorReadingsHistory($request);

    if ($response->getOrganizationSensorReadingsHistory200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganizationSensorReadingsLatest

Return the latest available reading for each metric from each sensor, sorted by sensor serial

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationSensorReadingsLatestRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationSensorReadingsLatestRequest();
    $request->endingBefore = 'eaque';
    $request->metrics = [
        'nobis',
        'magni',
        'nihil',
    ];
    $request->networkIds = [
        'aut',
        'voluptatum',
        'animi',
    ];
    $request->organizationId = 'reiciendis';
    $request->perPage = 185961;
    $request->serials = [
        'et',
    ];
    $request->startingAfter = 'voluptatum';

    $response = $sdk->sensor->getOrganizationSensorReadingsLatest($request);

    if ($response->getOrganizationSensorReadingsLatest200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateDeviceSensorRelationships

Assign one or more sensor roles to a given sensor or camera device.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceSensorRelationshipsRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceSensorRelationshipsRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceSensorRelationshipsRequestBodyLivestream;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceSensorRelationshipsRequestBodyLivestreamRelatedDevices;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateDeviceSensorRelationshipsRequest();
    $request->requestBody = new UpdateDeviceSensorRelationshipsRequestBody();
    $request->requestBody->livestream = new UpdateDeviceSensorRelationshipsRequestBodyLivestream();
    $request->requestBody->livestream->relatedDevices = [
        new UpdateDeviceSensorRelationshipsRequestBodyLivestreamRelatedDevices(),
        new UpdateDeviceSensorRelationshipsRequestBodyLivestreamRelatedDevices(),
    ];
    $request->serial = 'quaerat';

    $response = $sdk->sensor->updateDeviceSensorRelationships($request);

    if ($response->updateDeviceSensorRelationships200ApplicationJSONObject !== null) {
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
    ];
    $request->requestBody->name = 'Pete Doyle';
    $request->requestBody->recipients = new UpdateNetworkSensorAlertsProfileRequestBodyRecipients();
    $request->requestBody->recipients->emails = [
        'iure',
        'quis',
        'eum',
    ];
    $request->requestBody->recipients->httpServerIds = [
        'quisquam',
        'optio',
        'eveniet',
        'incidunt',
    ];
    $request->requestBody->recipients->smsNumbers = [
        'accusantium',
        'impedit',
    ];
    $request->requestBody->schedule = new UpdateNetworkSensorAlertsProfileRequestBodySchedule();
    $request->requestBody->schedule->id = 'd2147b6e-6152-4cf0-9d0d-8c3a4b9a5bf9';
    $request->requestBody->serials = [
        'veniam',
    ];
    $request->id = 'dfe974fa-4b1e-49c0-97ed-a623442e1a92';
    $request->networkId = 'ratione';

    $response = $sdk->sensor->updateNetworkSensorAlertsProfile($request);

    if ($response->updateNetworkSensorAlertsProfile200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
