# optIns

### Available Operations

* [createOrganizationEarlyAccessFeaturesOptIn](#createorganizationearlyaccessfeaturesoptin) - Create a new early access feature opt-in for an organization
* [deleteOrganizationEarlyAccessFeaturesOptIn](#deleteorganizationearlyaccessfeaturesoptin) - Delete an early access feature opt-in
* [getOrganizationEarlyAccessFeaturesOptIn](#getorganizationearlyaccessfeaturesoptin) - Show an early access feature opt-in for an organization
* [getOrganizationEarlyAccessFeaturesOptIns](#getorganizationearlyaccessfeaturesoptins) - List the early access feature opt-ins for an organization
* [updateOrganizationEarlyAccessFeaturesOptIn](#updateorganizationearlyaccessfeaturesoptin) - Update an early access feature opt-in for an organization

## createOrganizationEarlyAccessFeaturesOptIn

Create a new early access feature opt-in for an organization

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateOrganizationEarlyAccessFeaturesOptInRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateOrganizationEarlyAccessFeaturesOptInRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateOrganizationEarlyAccessFeaturesOptInRequest();
    $request->requestBody = new CreateOrganizationEarlyAccessFeaturesOptInRequestBody();
    $request->requestBody->limitScopeToNetworks = [
        'dolor',
        'eum',
        'culpa',
    ];
    $request->requestBody->shortName = 'iure';
    $request->organizationId = 'harum';

    $response = $sdk->optIns->createOrganizationEarlyAccessFeaturesOptIn($request);

    if ($response->createOrganizationEarlyAccessFeaturesOptIn200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteOrganizationEarlyAccessFeaturesOptIn

Delete an early access feature opt-in

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteOrganizationEarlyAccessFeaturesOptInRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteOrganizationEarlyAccessFeaturesOptInRequest();
    $request->optInId = 'sunt';
    $request->organizationId = 'facere';

    $response = $sdk->optIns->deleteOrganizationEarlyAccessFeaturesOptIn($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganizationEarlyAccessFeaturesOptIn

Show an early access feature opt-in for an organization

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationEarlyAccessFeaturesOptInRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationEarlyAccessFeaturesOptInRequest();
    $request->optInId = 'dolores';
    $request->organizationId = 'in';

    $response = $sdk->optIns->getOrganizationEarlyAccessFeaturesOptIn($request);

    if ($response->getOrganizationEarlyAccessFeaturesOptIn200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganizationEarlyAccessFeaturesOptIns

List the early access feature opt-ins for an organization

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationEarlyAccessFeaturesOptInsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationEarlyAccessFeaturesOptInsRequest();
    $request->organizationId = 'repudiandae';

    $response = $sdk->optIns->getOrganizationEarlyAccessFeaturesOptIns($request);

    if ($response->getOrganizationEarlyAccessFeaturesOptIns200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateOrganizationEarlyAccessFeaturesOptIn

Update an early access feature opt-in for an organization

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationEarlyAccessFeaturesOptInRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationEarlyAccessFeaturesOptInRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateOrganizationEarlyAccessFeaturesOptInRequest();
    $request->requestBody = new UpdateOrganizationEarlyAccessFeaturesOptInRequestBody();
    $request->requestBody->limitScopeToNetworks = [
        'esse',
        'accusantium',
        'nihil',
    ];
    $request->optInId = 'similique';
    $request->organizationId = 'est';

    $response = $sdk->optIns->updateOrganizationEarlyAccessFeaturesOptIn($request);

    if ($response->updateOrganizationEarlyAccessFeaturesOptIn200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
