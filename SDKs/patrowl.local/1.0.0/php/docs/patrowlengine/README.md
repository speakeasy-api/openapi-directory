# patrowlEngine

## Overview

SSLScan API documentation

Find out more
<https://github.com/Patrowl/PatrowlDocs>
### Available Operations

* [cleanScanPage](#cleanscanpage) - Clean scan
* [cleanScansPage](#cleanscanspage) - Clean all scans
* [getFindingPage](#getfindingpage) - Get findings on finished scans
* [startScanPage](#startscanpage) - Start a new scan
* [statusScanPage](#statusscanpage) - Status of a scan
* [statusScansPage](#statusscanspage) - Status on all scans
* [stopScanPage](#stopscanpage) - Stop a scan
* [stopScansPage](#stopscanspage) - Stop all scans
* [getDefaultPage](#getdefaultpage) - Index page
* [getInfoPage](#getinfopage) - Engine info page
* [getLivenessPage](#getlivenesspage) - Liveness page
* [getReadinessPage](#getreadinesspage) - Readiness page
* [getTestPage](#gettestpage) - Test page
* [reloadConfigurationPage](#reloadconfigurationpage) - Configuration reloading page

## cleanScanPage

Clean scan identified by id.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CleanScanPageRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CleanScanPageRequest();
    $request->scanId = 592845;

    $response = $sdk->patrowlEngine->cleanScanPage($request);

    if ($response->apiResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cleanScansPage

Clean all current scans.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->patrowlEngine->cleanScansPage();

    if ($response->apiResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getFindingPage

Get findings on finished scans.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetFindingPageRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetFindingPageRequest();
    $request->scanId = 715190;

    $response = $sdk->patrowlEngine->getFindingPage($request);

    if ($response->findings !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## startScanPage

Start a new scan.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\ScanDefinition;
use \OpenAPI\OpenAPI\Models\Shared\ScanDefinitionAssets;
use \OpenAPI\OpenAPI\Models\Shared\ScanDefinitionAssetsCriticityEnum;
use \OpenAPI\OpenAPI\Models\Shared\ScanDefinitionAssetsDatatypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ScanDefinition();
    $request->assets = [
        new ScanDefinitionAssets(),
        new ScanDefinitionAssets(),
        new ScanDefinitionAssets(),
        new ScanDefinitionAssets(),
    ];
    $request->options = [
        'nulla' => 'corrupti',
        'illum' => 'vel',
        'error' => 'deserunt',
    ];
    $request->scanId = 1;

    $response = $sdk->patrowlEngine->startScanPage($request);

    if ($response->apiResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## statusScanPage

Status of a scan identified by id.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\StatusScanPageRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StatusScanPageRequest();
    $request->scanId = 384382;

    $response = $sdk->patrowlEngine->statusScanPage($request);

    if ($response->apiResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## statusScansPage

Status all current scans.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->patrowlEngine->statusScansPage();

    if ($response->apiResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## stopScanPage

Stop a scan identified by id.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\StopScanPageRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StopScanPageRequest();
    $request->scanId = 437587;

    $response = $sdk->patrowlEngine->stopScanPage($request);

    if ($response->apiResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## stopScansPage

Stop all current scans.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->patrowlEngine->stopScansPage();

    if ($response->apiResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDefaultPage

Return index page

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->patrowlEngine->getDefaultPage();

    if ($response->apiResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getInfoPage

Return information on engine.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->patrowlEngine->getInfoPage();

    if ($response->apiResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getLivenessPage

Return liveness page

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->patrowlEngine->getLivenessPage();

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getReadinessPage

Return liveness page

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->patrowlEngine->getReadinessPage();

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTestPage

Return test page

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->patrowlEngine->getTestPage();

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reloadConfigurationPage

Reload the configuration file.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->patrowlEngine->reloadConfigurationPage();

    if ($response->apiResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
