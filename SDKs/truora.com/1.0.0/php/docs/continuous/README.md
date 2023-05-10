# continuous

## Overview

Allows creating recurring checks with customizable frequency that notify whenever there are changes in check scores.

### Available Operations

* [getContinuousCheck](#getcontinuouscheck) - Lists history associated with a Check. It can be paginated
* [listContinuousChecks](#listcontinuouschecks) - Lists all continuous checks
* [updateContinuousCheck](#updatecontinuouscheck) - Updates a continuous check
* [createContinuousCheck](#createcontinuouscheck) - Creates a continuous check that will run background checks recurrently according to the frequency provided.
* [getV1ContinuousChecksContinuousCheckIdHistory](#getv1continuouscheckscontinuouscheckidhistory) - Lists background check logs. It can be paginated


## getContinuousCheck

Lists history associated with a Check. It can be paginated

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetContinuousCheckRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetContinuousCheckSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetContinuousCheckRequest();
    $request->continuousCheckId = 3864.89;

    $requestSecurity = new GetContinuousCheckSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->continuous->getContinuousCheck($request, $requestSecurity);

    if ($response->continuousCheck !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listContinuousChecks

Lists all continuous checks

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->continuous->listContinuousChecks();

    if ($response->listContinuousChecksOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateContinuousCheck

Updates a continuous check

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateContinuousCheckRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateContinuousCheckInput;
use \OpenAPI\OpenAPI\Models\Shared\UpdateContinuousCheckInputStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateContinuousCheckSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateContinuousCheckRequest();
    $request->updateContinuousCheckInput = new UpdateContinuousCheckInput();
    $request->updateContinuousCheckInput->frequency = 'hic';
    $request->updateContinuousCheckInput->status = UpdateContinuousCheckInputStatusEnum::DISABLED;
    $request->continuousCheckId = 6818.2;

    $requestSecurity = new UpdateContinuousCheckSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->continuous->updateContinuousCheck($request, $requestSecurity);

    if ($response->continuousCheck !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createContinuousCheck

Creates a continuous check that will run background checks recurrently according to the frequency provided.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\CreateContinuousCheckInput;
use \OpenAPI\OpenAPI\Models\Operations\CreateContinuousCheckSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateContinuousCheckInput();
    $request->checkId = 'in';
    $request->frequency = 'corporis';
    $request->status = 'iste';

    $requestSecurity = new CreateContinuousCheckSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->continuous->createContinuousCheck($request, $requestSecurity);

    if ($response->continuousCheck !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getV1ContinuousChecksContinuousCheckIdHistory

Lists background check logs. It can be paginated


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetV1ContinuousChecksContinuousCheckIdHistoryRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetV1ContinuousChecksContinuousCheckIdHistorySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetV1ContinuousChecksContinuousCheckIdHistoryRequest();
    $request->continuousCheckId = 'iure';

    $requestSecurity = new GetV1ContinuousChecksContinuousCheckIdHistorySecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->continuous->getV1ContinuousChecksContinuousCheckIdHistory($request, $requestSecurity);

    if ($response->getContiuousCheckHistoryOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
