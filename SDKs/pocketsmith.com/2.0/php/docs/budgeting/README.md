# budgeting

### Available Operations

* [deleteUsersIdForecastCache](#deleteusersidforecastcache) - Delete forecast cache for user
* [getUsersIdBudget](#getusersidbudget) - List budget for user
* [getUsersIdBudgetSummary](#getusersidbudgetsummary) - Get budget summary for user
* [getUsersIdTrendAnalysis](#getusersidtrendanalysis) - Get trend analysis for user

## deleteUsersIdForecastCache

Delete the user's cached forecast by recalculating the forecast.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteUsersIdForecastCacheRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteUsersIdForecastCacheRequest();
    $request->id = 791725;

    $response = $sdk->budgeting->deleteUsersIdForecastCache($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUsersIdBudget

Lists the user's budget, consisting of one or more budget analysis packages, one per category. Akin to the list on the Budget page in PocketSmith.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetUsersIdBudgetRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUsersIdBudgetRequest();
    $request->id = 812169;
    $request->rollUp = false;

    $response = $sdk->budgeting->getUsersIdBudget($request);

    if ($response->budgetAnalysisPackages !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUsersIdBudgetSummary

Get the user's budget summary, containing an expense and income analysis for all categories (excluding transfer categories) for the given period and date range. Akin to the overall budget shown on the Budget page in PocketSmith.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetUsersIdBudgetSummaryRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetUsersIdBudgetSummaryPeriodEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUsersIdBudgetSummaryRequest();
    $request->endDate = 'voluptatum';
    $request->id = 479977;
    $request->interval = 568045;
    $request->period = GetUsersIdBudgetSummaryPeriodEnum::MONTHS;
    $request->startDate = 'recusandae';

    $response = $sdk->budgeting->getUsersIdBudgetSummary($request);

    if ($response->budgetAnalysisPackages !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUsersIdTrendAnalysis

Get an income and/or expense budget analysis for the given date range and period across any number of categories and scenarios. Akin to the Trends page in PocketSmith.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetUsersIdTrendAnalysisRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetUsersIdTrendAnalysisPeriodEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUsersIdTrendAnalysisRequest();
    $request->categories = 'temporibus';
    $request->endDate = 'ab';
    $request->id = 337396;
    $request->interval = 87129;
    $request->period = GetUsersIdTrendAnalysisPeriodEnum::YEARS;
    $request->scenarios = 'perferendis';
    $request->startDate = 'ipsam';

    $response = $sdk->budgeting->getUsersIdTrendAnalysis($request);

    if ($response->budgetAnalysisPackages !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
