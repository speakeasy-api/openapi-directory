# report

### Available Operations

* [generateQAReport](#generateqareport) - Generate a QA report for given filter
* [getFilterContents](#getfiltercontents) - Returns available options for selected timeframe.
* [getLanguagePairsReport](#getlanguagepairsreport) - Language pairs report
* [getProjectsReport](#getprojectsreport) - Projects report
* [getUsersReport](#getusersreport) - Company users report

## generateQAReport

Generate a QA report for given filter

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\QaFilter;

$sdk = SDK::builder()
    ->build();

try {
    $request = new QaFilter();
    $request->budgetCodes = [
        'non',
    ];
    $request->categories = [
        'dolorum',
    ];
    $request->clients = [
        8104.24,
        2453.67,
        4321.48,
    ];
    $request->dateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-04-01T11:18:05.592Z');
    $request->dateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-05-05T09:22:07.208Z');
    $request->documents = [
        3790.34,
        7270.44,
        965.49,
        2703.28,
    ];
    $request->projects = [
        1314.82,
        5919.35,
    ];
    $request->severities = [
        'molestiae',
    ];
    $request->sourceLanguages = [
        'odio',
        'eius',
    ];
    $request->subjects = [
        'esse',
        'rem',
    ];
    $request->targetLanguages = [
        'reprehenderit',
        'quidem',
        'fugiat',
    ];
    $request->vendors = [
        4334.39,
        3799.27,
    ];

    $response = $sdk->report->generateQAReport($request);

    if ($response->qaWarnings !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getFilterContents

Returns available options for selected timeframe.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\FilterDates;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FilterDates();
    $request->dateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-06-16T15:21:08.890Z');
    $request->dateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-06-04T08:40:57.100Z');

    $response = $sdk->report->getFilterContents($request);

    if ($response->filterContents !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getLanguagePairsReport

View translation reports for each language pair with translations under your account. You can view company-wide language pairs if you have the user permission.

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
    $request->budgetCode = 'veritatis';
    $request->dateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-05-05T02:03:02.582Z');
    $request->dateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-03T04:27:44.236Z');
    $request->sourceLanguages = [
        'illum',
        'quo',
        'fuga',
        'eius',
    ];
    $request->targetLanguages = [
        'voluptas',
    ];
    $request->users = [
        587600,
    ];

    $response = $sdk->report->getLanguagePairsReport($request);

    if ($response->languagePairsReport !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getProjectsReport

View projects under your account, with advanced filtering. You can view company-wide projects if you have the user permission.

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
    $request->budgetCode = 'consequatur';
    $request->dateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-02-09T09:38:41.756Z');
    $request->dateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-11-13T06:50:40.250Z');
    $request->sourceLanguages = [
        'quo',
    ];
    $request->targetLanguages = [
        'recusandae',
        'aperiam',
    ];
    $request->users = [
        799796,
        490819,
        76956,
    ];

    $response = $sdk->report->getProjectsReport($request);

    if ($response->projectList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUsersReport

View translation reports for each user under your company account. You need the permission to view users in your company.

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
    $request->budgetCode = 'nihil';
    $request->dateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-03-27T14:55:59.726Z');
    $request->dateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-06T17:31:39.783Z');
    $request->sourceLanguages = [
        'commodi',
        'sapiente',
        'dolores',
    ];
    $request->targetLanguages = [
        'molestiae',
        'accusantium',
        'porro',
    ];
    $request->users = [
        556429,
        510017,
    ];

    $response = $sdk->report->getUsersReport($request);

    if ($response->usersReport !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
