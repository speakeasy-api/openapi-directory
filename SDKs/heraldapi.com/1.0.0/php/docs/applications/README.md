# applications

### Available Operations

* [getApplicationsApplicationId](#getapplicationsapplicationid) - /applications/{application_id}
* [postApplications](#postapplications) - /applications
* [putApplicationsApplicationId](#putapplicationsapplicationid) - /applications/{application_id}

## getApplicationsApplicationId

### Get an application

Get the latest details for a specific [application](https://www.heraldapi.com/docs/dynamic-application-steps).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetApplicationsApplicationIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetApplicationsApplicationIdRequest();
    $request->applicationId = 'a05dfc2d-df7c-4c78-8a1b-a928fc816742';

    $response = $sdk->applications->getApplicationsApplicationId($request);

    if ($response->getApplicationsApplicationId200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postApplications

### Create an application

Create an [application](https://www.heraldapi.com/docs/dynamic-application) for a product or set of products. An application contains the set of information a carrier requires to get a quote for the product(s). Submitting only `products` will create a blank application. Including values when creating the application is optional. 

Read our step-by-step guide to [building a Dynamic Application](https://www.heraldapi.com/docs/dynamic-application-steps).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\ApplicationWriteV1;
use \OpenAPI\OpenAPI\Models\Shared\CoverageValueWriteV1;
use \OpenAPI\OpenAPI\Models\Shared\RiskValueWriteV1;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ApplicationWriteV1();
    $request->coverageValues = [
        new CoverageValueWriteV1(),
        new CoverageValueWriteV1(),
        new CoverageValueWriteV1(),
        new CoverageValueWriteV1(),
    ];
    $request->products = [
        'prd_mc4r_herald_general_liability',
        'prd_mc4r_herald_general_liability',
        'prd_mc4r_herald_general_liability',
    ];
    $request->riskValues = [
        new RiskValueWriteV1(),
        new RiskValueWriteV1(),
    ];

    $response = $sdk->applications->postApplications($request);

    if ($response->postApplications200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putApplicationsApplicationId

<h3>Update an application</h3>

Submit values for a specific application. In order to submit an application for a quote, you need to continue to update the application until the status is `complete`.

Read our step-by-step guide to [building a Dynamic Application](https://www.heraldapi.com/docs/dynamic-application-steps).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutApplicationsApplicationIdRequest;
use \OpenAPI\OpenAPI\Models\Shared\ApplicationWriteV1;
use \OpenAPI\OpenAPI\Models\Shared\CoverageValueWriteV1;
use \OpenAPI\OpenAPI\Models\Shared\RiskValueWriteV1;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutApplicationsApplicationIdRequest();
    $request->applicationWriteV1 = new ApplicationWriteV1();
    $request->applicationWriteV1->coverageValues = [
        new CoverageValueWriteV1(),
    ];
    $request->applicationWriteV1->products = [
        'prd_mc4r_herald_general_liability',
        'prd_mc4r_herald_general_liability',
        'prd_mc4r_herald_general_liability',
    ];
    $request->applicationWriteV1->riskValues = [
        new RiskValueWriteV1(),
    ];
    $request->applicationId = '05929396-fea7-4596-ab10-faaa2352c595';

    $response = $sdk->applications->putApplicationsApplicationId($request);

    if ($response->putApplicationsApplicationId200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
