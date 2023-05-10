# overview

### Available Operations

* [getDeviceCameraAnalyticsOverview](#getdevicecameraanalyticsoverview) - Returns an overview of aggregate analytics data for a timespan
* [getNetworkClientsOverview](#getnetworkclientsoverview) - Return overview statistics for network clients
* [getNetworkSensorAlertsCurrentOverviewByMetric](#getnetworksensoralertscurrentoverviewbymetric) - Return an overview of currently alerting sensors by metric
* [getNetworkSensorAlertsOverviewByMetric](#getnetworksensoralertsoverviewbymetric) - Return an overview of alert occurrences over a timespan, by metric
* [getOrganizationAdaptivePolicyOverview](#getorganizationadaptivepolicyoverview) - Returns adaptive policy aggregate statistics for an organization
* [getOrganizationApiRequestsOverview](#getorganizationapirequestsoverview) - Return an aggregated overview of API requests data
* [getOrganizationApiRequestsOverviewResponseCodesByInterval](#getorganizationapirequestsoverviewresponsecodesbyinterval) - Tracks organizations' API requests by response code across a given time period
* [getOrganizationClientsOverview](#getorganizationclientsoverview) - Return summary information around client data usage (in mb) across the given organization.
* [getOrganizationDevicesStatusesOverview](#getorganizationdevicesstatusesoverview) - Return an overview of current device statuses
* [getOrganizationLicensesOverview](#getorganizationlicensesoverview) - Return an overview of the license state for an organization

## getDeviceCameraAnalyticsOverview

Returns an overview of aggregate analytics data for a timespan

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDeviceCameraAnalyticsOverviewRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetDeviceCameraAnalyticsOverviewObjectTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDeviceCameraAnalyticsOverviewRequest();
    $request->objectType = GetDeviceCameraAnalyticsOverviewObjectTypeEnum::VEHICLE;
    $request->serial = 'quisquam';
    $request->t0 = 'minus';
    $request->t1 = 'corporis';
    $request->timespan = 9627.44;

    $response = $sdk->overview->getDeviceCameraAnalyticsOverview($request);

    if ($response->getDeviceCameraAnalyticsOverview200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkClientsOverview

Return overview statistics for network clients

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkClientsOverviewRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkClientsOverviewRequest();
    $request->networkId = 'nulla';
    $request->resolution = 800975;
    $request->t0 = 'saepe';
    $request->t1 = 'animi';
    $request->timespan = 5383;

    $response = $sdk->overview->getNetworkClientsOverview($request);

    if ($response->getNetworkClientsOverview200ApplicationJSONObject !== null) {
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
    $request->networkId = 'eveniet';

    $response = $sdk->overview->getNetworkSensorAlertsCurrentOverviewByMetric($request);

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
    $request->interval = 476192;
    $request->networkId = 'laborum';
    $request->t0 = 'voluptatum';
    $request->t1 = 'blanditiis';
    $request->timespan = 2381.22;

    $response = $sdk->overview->getNetworkSensorAlertsOverviewByMetric($request);

    if ($response->getNetworkSensorAlertsOverviewByMetric200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganizationAdaptivePolicyOverview

Returns adaptive policy aggregate statistics for an organization

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationAdaptivePolicyOverviewRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationAdaptivePolicyOverviewRequest();
    $request->organizationId = 'et';

    $response = $sdk->overview->getOrganizationAdaptivePolicyOverview($request);

    if ($response->getOrganizationAdaptivePolicyOverview200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganizationApiRequestsOverview

Return an aggregated overview of API requests data

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationApiRequestsOverviewRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationApiRequestsOverviewRequest();
    $request->organizationId = 'et';
    $request->t0 = 'commodi';
    $request->t1 = 'laboriosam';
    $request->timespan = 1872.67;

    $response = $sdk->overview->getOrganizationApiRequestsOverview($request);

    if ($response->getOrganizationApiRequestsOverview200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganizationApiRequestsOverviewResponseCodesByInterval

Tracks organizations' API requests by response code across a given time period

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationApiRequestsOverviewResponseCodesByIntervalRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationApiRequestsOverviewResponseCodesByIntervalVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationApiRequestsOverviewResponseCodesByIntervalRequest();
    $request->adminIds = [
        'at',
        'fuga',
        'vel',
        'quibusdam',
    ];
    $request->interval = 480421;
    $request->operationIds = [
        'cumque',
        'sunt',
    ];
    $request->organizationId = 'fugiat';
    $request->sourceIps = [
        'laboriosam',
        'doloremque',
        'nisi',
    ];
    $request->t0 = 'eum';
    $request->t1 = 'odit';
    $request->timespan = 2014.17;
    $request->userAgent = 'esse';
    $request->version = GetOrganizationApiRequestsOverviewResponseCodesByIntervalVersionEnum::ONE;

    $response = $sdk->overview->getOrganizationApiRequestsOverviewResponseCodesByInterval($request);

    if ($response->getOrganizationApiRequestsOverviewResponseCodesByInterval200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganizationClientsOverview

Return summary information around client data usage (in mb) across the given organization.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationClientsOverviewRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationClientsOverviewRequest();
    $request->organizationId = 'tempora';
    $request->t0 = 'explicabo';
    $request->t1 = 'magni';
    $request->timespan = 4746.37;

    $response = $sdk->overview->getOrganizationClientsOverview($request);

    if ($response->getOrganizationClientsOverview200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganizationDevicesStatusesOverview

Return an overview of current device statuses

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationDevicesStatusesOverviewRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationDevicesStatusesOverviewProductTypesEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationDevicesStatusesOverviewRequest();
    $request->networkIds = [
        'laboriosam',
        'aliquid',
        'quibusdam',
    ];
    $request->organizationId = 'quidem';
    $request->productTypes = [
        GetOrganizationDevicesStatusesOverviewProductTypesEnum::SWITCH,
        GetOrganizationDevicesStatusesOverviewProductTypesEnum::SENSOR,
        GetOrganizationDevicesStatusesOverviewProductTypesEnum::CELLULAR_GATEWAY,
    ];

    $response = $sdk->overview->getOrganizationDevicesStatusesOverview($request);

    if ($response->getOrganizationDevicesStatusesOverview200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganizationLicensesOverview

Return an overview of the license state for an organization

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationLicensesOverviewRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationLicensesOverviewRequest();
    $request->organizationId = 'perspiciatis';

    $response = $sdk->overview->getOrganizationLicensesOverview($request);

    if ($response->getOrganizationLicensesOverview200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
