# snowmonkey

## Overview

Everything about Otoroshi Snow Monkey

### Available Operations

* [getSnowMonkeyConfig](#getsnowmonkeyconfig) - Get current Snow Monkey config
* [getSnowMonkeyOutages](#getsnowmonkeyoutages) - Get all current Snow Monkey ourages
* [patchSnowMonkey](#patchsnowmonkey) - Update current Snow Monkey config
* [resetSnowMonkey](#resetsnowmonkey) - Reset Snow Monkey Outages for the day
* [startSnowMonkey](#startsnowmonkey) - Start the Snow Monkey
* [stopSnowMonkey](#stopsnowmonkey) - Stop the Snow Monkey
* [updateSnowMonkey](#updatesnowmonkey) - Update current Snow Monkey config

## getSnowMonkeyConfig

Get current Snow Monkey config

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetSnowMonkeyConfigSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new GetSnowMonkeyConfigSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->snowmonkey->getSnowMonkeyConfig($requestSecurity);

    if ($response->snowMonkeyConfig !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSnowMonkeyOutages

Get all current Snow Monkey ourages

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetSnowMonkeyOutagesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new GetSnowMonkeyOutagesSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->snowmonkey->getSnowMonkeyOutages($requestSecurity);

    if ($response->outages !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## patchSnowMonkey

Update current Snow Monkey config

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Group;
use \OpenAPI\OpenAPI\Models\Operations\PatchSnowMonkeySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Group();
    $request->description = 'a string value';
    $request->id = 'a string value';
    $request->name = 'a string value';

    $requestSecurity = new PatchSnowMonkeySecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->snowmonkey->patchSnowMonkey($request, $requestSecurity);

    if ($response->snowMonkeyConfig !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## resetSnowMonkey

Reset Snow Monkey Outages for the day

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ResetSnowMonkeySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new ResetSnowMonkeySecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->snowmonkey->resetSnowMonkey($requestSecurity);

    if ($response->done !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## startSnowMonkey

Start the Snow Monkey

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\StartSnowMonkeySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new StartSnowMonkeySecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->snowmonkey->startSnowMonkey($requestSecurity);

    if ($response->done !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## stopSnowMonkey

Stop the Snow Monkey

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\StopSnowMonkeySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new StopSnowMonkeySecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->snowmonkey->stopSnowMonkey($requestSecurity);

    if ($response->done !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateSnowMonkey

Update current Snow Monkey config

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Group;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSnowMonkeySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Group();
    $request->description = 'a string value';
    $request->id = 'a string value';
    $request->name = 'a string value';

    $requestSecurity = new UpdateSnowMonkeySecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->snowmonkey->updateSnowMonkey($request, $requestSecurity);

    if ($response->snowMonkeyConfig !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
