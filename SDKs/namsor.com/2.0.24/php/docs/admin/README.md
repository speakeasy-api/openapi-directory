# admin

## Overview

Administrative, system management.

### Available Operations

* [anonymize](#anonymize) - Activate/deactivate anonymization for a source.
* [apiKeyInfo](#apikeyinfo) - Read API Key info.
* [apiStatus](#apistatus) - Prints the current status of the classifiers. A classifier name in apiStatus corresponds to a service name in apiServices.
* [apiUsage](#apiusage) - Print current API usage.
* [apiUsageHistory](#apiusagehistory) - Print historical API usage.
* [apiUsageHistoryAggregate](#apiusagehistoryaggregate) - Print historical API usage (in an aggregated view, by service, by day/hour/min).
* [availableServices](#availableservices) - List of classification services and usage cost in Units per classification (default is 1=ONE Unit). Some API endpoints (ex. Corridor) combine multiple classifiers.
* [learnable](#learnable) - Activate/deactivate learning from a source.
* [regions](#regions) - Print basic source statistics.
* [softwareVersion](#softwareversion) - Get the current software version
* [taxonomyClasses](#taxonomyclasses) - Print the taxonomy classes valid for the given classifier.

## anonymize

Activate/deactivate anonymization for a source.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AnonymizeRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AnonymizeRequest();
    $request->anonymized = false;
    $request->source = 'distinctio';
    $request->token = 'quibusdam';

    $response = $sdk->admin->anonymize($request);

    if ($response->apiKeyOut !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## apiKeyInfo

Read API Key info.

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
    $response = $sdk->admin->apiKeyInfo();

    if ($response->apiKeyOut !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## apiStatus

Prints the current status of the classifiers. A classifier name in apiStatus corresponds to a service name in apiServices.

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
    $response = $sdk->admin->apiStatus();

    if ($response->apiClassifiersStatusOut !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## apiUsage

Print current API usage.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ApiUsageSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new ApiUsageSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->admin->apiUsage($requestSecurity);

    if ($response->apiPeriodUsageOut !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## apiUsageHistory

Print historical API usage.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ApiUsageHistorySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new ApiUsageHistorySecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->admin->apiUsageHistory($requestSecurity);

    if ($response->apiUsageHistoryOut !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## apiUsageHistoryAggregate

Print historical API usage (in an aggregated view, by service, by day/hour/min).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ApiUsageHistoryAggregateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new ApiUsageHistoryAggregateSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->admin->apiUsageHistoryAggregate($requestSecurity);

    if ($response->apiUsageAggregatedOut !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## availableServices

List of classification services and usage cost in Units per classification (default is 1=ONE Unit). Some API endpoints (ex. Corridor) combine multiple classifiers.

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
    $response = $sdk->admin->availableServices();

    if ($response->apiServicesOut !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## learnable

Activate/deactivate learning from a source.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\LearnableRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new LearnableRequest();
    $request->learnable = false;
    $request->source = 'unde';
    $request->token = 'nulla';

    $response = $sdk->admin->learnable($request);

    if ($response->apiKeyOut !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## regions

Print basic source statistics.

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
    $response = $sdk->admin->regions();

    if ($response->regionOut !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## softwareVersion

Get the current software version

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
    $response = $sdk->admin->softwareVersion();

    if ($response->softwareVersionOut !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## taxonomyClasses

Print the taxonomy classes valid for the given classifier.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\TaxonomyClassesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TaxonomyClassesRequest();
    $request->classifierName = 'corrupti';

    $response = $sdk->admin->taxonomyClasses($request);

    if ($response->apiClassifierTaxonomyOut !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
