# stats

### Available Operations

* [getCommissionStats](#getcommissionstats) - Returns the total commissions stats.
* [getCommissionStatsByFilter](#getcommissionstatsbyfilter) - Returns the total commissions stats by report filter.
* [getPopularPairs](#getpopularpairs) - View your popular language pairs
* [getProjectStats](#getprojectstats) - View your project statistics
* [getStringStats](#getstringstats) - View your translation statistics

## getCommissionStats

Returns the total commissions stats.

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
    $response = $sdk->stats->getCommissionStats();

    if ($response->commissionStats !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCommissionStatsByFilter

Returns the total commissions stats by report filter.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\ReportFilter;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReportFilter();
    $request->budgetCode = 'minima';
    $request->dateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-11-08T08:09:29.073Z');
    $request->dateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-09T22:36:51.892Z');
    $request->sourceLanguages = [
        'explicabo',
    ];
    $request->targetLanguages = [
        'occaecati',
        'atque',
        'et',
        'esse',
    ];
    $request->users = [
        882042,
        82971,
        458604,
        800379,
    ];

    $response = $sdk->stats->getCommissionStatsByFilter($request);

    if ($response->commissionStats !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPopularPairs

View your popular language pairs

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
    $response = $sdk->stats->getPopularPairs();

    if ($response->popularLanguagePairs !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getProjectStats

View your project statistics

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
    $response = $sdk->stats->getProjectStats();

    if ($response->clientProjectStats !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getStringStats

View your translation statistics

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
    $response = $sdk->stats->getStringStats();

    if ($response->clientStringStats !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
