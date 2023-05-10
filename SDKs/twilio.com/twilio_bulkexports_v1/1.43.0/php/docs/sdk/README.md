# SDK

## Overview

This is the public Twilio REST API.

### Available Operations

* [createExportCustomJob](#createexportcustomjob)
* [deleteJob](#deletejob)
* [fetchDay](#fetchday) - Fetch a specific Day.
* [fetchExport](#fetchexport) - Fetch a specific Export.
* [fetchExportConfiguration](#fetchexportconfiguration) - Fetch a specific Export Configuration.
* [fetchJob](#fetchjob)
* [listDay](#listday) - Retrieve a list of all Days for a resource.
* [listExportCustomJob](#listexportcustomjob)
* [updateExportConfiguration](#updateexportconfiguration) - Update a specific Export Configuration.

## createExportCustomJob

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateExportCustomJobRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateExportCustomJobCreateExportCustomJobRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateExportCustomJobSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateExportCustomJobRequest();
    $request->requestBody = new CreateExportCustomJobCreateExportCustomJobRequest();
    $request->requestBody->email = 'Eli96@yahoo.com';
    $request->requestBody->endDay = 'tempora';
    $request->requestBody->friendlyName = 'suscipit';
    $request->requestBody->startDay = 'molestiae';
    $request->requestBody->webhookMethod = 'minus';
    $request->requestBody->webhookUrl = 'placeat';
    $request->resourceType = 'voluptatum';

    $requestSecurity = new CreateExportCustomJobSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->createExportCustomJob($request, $requestSecurity);

    if ($response->bulkexportsV1ExportExportCustomJob !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteJob

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteJobRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteJobSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteJobRequest();
    $request->jobSid = 'iusto';

    $requestSecurity = new DeleteJobSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->deleteJob($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchDay

Fetch a specific Day.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchDayRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchDaySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchDayRequest();
    $request->day = 'excepturi';
    $request->resourceType = 'nisi';

    $requestSecurity = new FetchDaySecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchDay($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchExport

Fetch a specific Export.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchExportRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchExportSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchExportRequest();
    $request->resourceType = 'recusandae';

    $requestSecurity = new FetchExportSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchExport($request, $requestSecurity);

    if ($response->bulkexportsV1Export !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchExportConfiguration

Fetch a specific Export Configuration.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchExportConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchExportConfigurationSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchExportConfigurationRequest();
    $request->resourceType = 'temporibus';

    $requestSecurity = new FetchExportConfigurationSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchExportConfiguration($request, $requestSecurity);

    if ($response->bulkexportsV1ExportConfiguration !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchJob

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchJobRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchJobSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchJobRequest();
    $request->jobSid = 'ab';

    $requestSecurity = new FetchJobSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchJob($request, $requestSecurity);

    if ($response->bulkexportsV1ExportJob !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listDay

Retrieve a list of all Days for a resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListDayRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListDaySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListDayRequest();
    $request->page = 337396;
    $request->pageSize = 87129;
    $request->pageToken = 'deserunt';
    $request->resourceType = 'perferendis';

    $requestSecurity = new ListDaySecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listDay($request, $requestSecurity);

    if ($response->listDayResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listExportCustomJob

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListExportCustomJobRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListExportCustomJobSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListExportCustomJobRequest();
    $request->page = 368241;
    $request->pageSize = 832620;
    $request->pageToken = 'sapiente';
    $request->resourceType = 'quo';

    $requestSecurity = new ListExportCustomJobSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listExportCustomJob($request, $requestSecurity);

    if ($response->listExportCustomJobResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateExportConfiguration

Update a specific Export Configuration.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateExportConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateExportConfigurationUpdateExportConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateExportConfigurationSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateExportConfigurationRequest();
    $request->requestBody = new UpdateExportConfigurationUpdateExportConfigurationRequest();
    $request->requestBody->enabled = false;
    $request->requestBody->webhookMethod = 'odit';
    $request->requestBody->webhookUrl = 'https://trim-wheat.info';
    $request->resourceType = 'quod';

    $requestSecurity = new UpdateExportConfigurationSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->updateExportConfiguration($request, $requestSecurity);

    if ($response->bulkexportsV1ExportConfiguration !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
