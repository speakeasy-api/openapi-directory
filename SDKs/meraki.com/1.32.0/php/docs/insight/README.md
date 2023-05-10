# insight

### Available Operations

* [createOrganizationInsightMonitoredMediaServer](#createorganizationinsightmonitoredmediaserver) - Add a media server to be monitored for this organization
* [deleteOrganizationInsightMonitoredMediaServer](#deleteorganizationinsightmonitoredmediaserver) - Delete a monitored media server from this organization
* [getNetworkInsightApplicationHealthByTime](#getnetworkinsightapplicationhealthbytime) - Get application health by time
* [getOrganizationInsightApplications](#getorganizationinsightapplications) - List all Insight tracked applications
* [getOrganizationInsightMonitoredMediaServer](#getorganizationinsightmonitoredmediaserver) - Return a monitored media server for this organization
* [getOrganizationInsightMonitoredMediaServers](#getorganizationinsightmonitoredmediaservers) - List the monitored media servers for this organization
* [updateOrganizationInsightMonitoredMediaServer](#updateorganizationinsightmonitoredmediaserver) - Update a monitored media server for this organization

## createOrganizationInsightMonitoredMediaServer

Add a media server to be monitored for this organization. Only valid for organizations with Meraki Insight.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateOrganizationInsightMonitoredMediaServerRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateOrganizationInsightMonitoredMediaServerRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateOrganizationInsightMonitoredMediaServerRequest();
    $request->requestBody = new CreateOrganizationInsightMonitoredMediaServerRequestBody();
    $request->requestBody->address = '2290 Deontae Flat';
    $request->requestBody->bestEffortMonitoringEnabled = false;
    $request->requestBody->name = 'Dewey Lemke';
    $request->organizationId = 'modi';

    $response = $sdk->insight->createOrganizationInsightMonitoredMediaServer($request);

    if ($response->createOrganizationInsightMonitoredMediaServer201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteOrganizationInsightMonitoredMediaServer

Delete a monitored media server from this organization. Only valid for organizations with Meraki Insight.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteOrganizationInsightMonitoredMediaServerRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteOrganizationInsightMonitoredMediaServerRequest();
    $request->monitoredMediaServerId = 'expedita';
    $request->organizationId = 'quidem';

    $response = $sdk->insight->deleteOrganizationInsightMonitoredMediaServer($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkInsightApplicationHealthByTime

Get application health by time

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkInsightApplicationHealthByTimeRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkInsightApplicationHealthByTimeRequest();
    $request->applicationId = 'consequuntur';
    $request->networkId = 'eaque';
    $request->resolution = 991563;
    $request->t0 = 'debitis';
    $request->t1 = 'nostrum';
    $request->timespan = 8415.62;

    $response = $sdk->insight->getNetworkInsightApplicationHealthByTime($request);

    if ($response->getNetworkInsightApplicationHealthByTime200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganizationInsightApplications

List all Insight tracked applications

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationInsightApplicationsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationInsightApplicationsRequest();
    $request->organizationId = 'provident';

    $response = $sdk->insight->getOrganizationInsightApplications($request);

    if ($response->getOrganizationInsightApplications200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganizationInsightMonitoredMediaServer

Return a monitored media server for this organization. Only valid for organizations with Meraki Insight.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationInsightMonitoredMediaServerRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationInsightMonitoredMediaServerRequest();
    $request->monitoredMediaServerId = 'veritatis';
    $request->organizationId = 'sunt';

    $response = $sdk->insight->getOrganizationInsightMonitoredMediaServer($request);

    if ($response->getOrganizationInsightMonitoredMediaServer200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganizationInsightMonitoredMediaServers

List the monitored media servers for this organization. Only valid for organizations with Meraki Insight.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationInsightMonitoredMediaServersRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationInsightMonitoredMediaServersRequest();
    $request->organizationId = 'quod';

    $response = $sdk->insight->getOrganizationInsightMonitoredMediaServers($request);

    if ($response->getOrganizationInsightMonitoredMediaServers200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateOrganizationInsightMonitoredMediaServer

Update a monitored media server for this organization. Only valid for organizations with Meraki Insight.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationInsightMonitoredMediaServerRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationInsightMonitoredMediaServerRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateOrganizationInsightMonitoredMediaServerRequest();
    $request->requestBody = new UpdateOrganizationInsightMonitoredMediaServerRequestBody();
    $request->requestBody->address = '994 Keon Spur';
    $request->requestBody->bestEffortMonitoringEnabled = false;
    $request->requestBody->name = 'Courtney Gleichner';
    $request->monitoredMediaServerId = 'sed';
    $request->organizationId = 'molestiae';

    $response = $sdk->insight->updateOrganizationInsightMonitoredMediaServer($request);

    if ($response->updateOrganizationInsightMonitoredMediaServer200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
