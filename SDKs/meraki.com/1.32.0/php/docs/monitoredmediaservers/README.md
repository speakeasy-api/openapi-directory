# monitoredMediaServers

### Available Operations

* [createOrganizationInsightMonitoredMediaServer](#createorganizationinsightmonitoredmediaserver) - Add a media server to be monitored for this organization
* [deleteOrganizationInsightMonitoredMediaServer](#deleteorganizationinsightmonitoredmediaserver) - Delete a monitored media server from this organization
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
    $request->requestBody->address = '748 Alvis Track';
    $request->requestBody->bestEffortMonitoringEnabled = false;
    $request->requestBody->name = 'Dr. Maggie Bergnaum';
    $request->organizationId = 'modi';

    $response = $sdk->monitoredMediaServers->createOrganizationInsightMonitoredMediaServer($request);

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
    $request->monitoredMediaServerId = 'nesciunt';
    $request->organizationId = 'autem';

    $response = $sdk->monitoredMediaServers->deleteOrganizationInsightMonitoredMediaServer($request);

    if ($response->statusCode === 200) {
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
    $request->monitoredMediaServerId = 'repudiandae';
    $request->organizationId = 'commodi';

    $response = $sdk->monitoredMediaServers->getOrganizationInsightMonitoredMediaServer($request);

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
    $request->organizationId = 'sed';

    $response = $sdk->monitoredMediaServers->getOrganizationInsightMonitoredMediaServers($request);

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
    $request->requestBody->address = '6122 Mosciski Glen';
    $request->requestBody->bestEffortMonitoringEnabled = false;
    $request->requestBody->name = 'Rene Spinka';
    $request->monitoredMediaServerId = 'iusto';
    $request->organizationId = 'ratione';

    $response = $sdk->monitoredMediaServers->updateOrganizationInsightMonitoredMediaServer($request);

    if ($response->updateOrganizationInsightMonitoredMediaServer200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
