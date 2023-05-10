# mme

## Overview

Match patients with similar diseases and non-human genes based on their phenotypes

### Available Operations

* [postDiseaseMme](#postdiseasemme) - Match a patient to diseases based on their phenotypes
* [postFlyMme](#postflymme) - Match a patient to fruit fly genes based on similar phenotypes
* [postMouseMme](#postmousemme) - Match a patient to mouse genes based on similar phenotypes
* [postNematodeMme](#postnematodemme) - Match a patient to nematode genes based on similar phenotypes
* [postZebrafishMme](#postzebrafishmme) - Match a patient to zebrafish genes based on similar phenotypes

## postDiseaseMme

Match a patient to diseases based on their phenotypes

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $request = [
        'dolor' => 'est',
        'reiciendis' => 'possimus',
        'odit' => 'consectetur',
    ]

    $response = $sdk->mme->postDiseaseMme($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postFlyMme

Match a patient to fruit fly genes based on similar phenotypes

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $request = [
        'minima' => 'facilis',
    ]

    $response = $sdk->mme->postFlyMme($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postMouseMme

Match a patient to mouse genes based on similar phenotypes

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $request = [
        'deserunt' => 'nisi',
        'ipsam' => 'voluptatem',
        'illo' => 'iure',
    ]

    $response = $sdk->mme->postMouseMme($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postNematodeMme

Match a patient to nematode genes based on similar phenotypes

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $request = [
        'eveniet' => 'quae',
        'ea' => 'asperiores',
    ]

    $response = $sdk->mme->postNematodeMme($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postZebrafishMme

Match a patient to zebrafish genes based on similar phenotypes

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $request = [
        'quidem' => 'asperiores',
        'eum' => 'deserunt',
    ]

    $response = $sdk->mme->postZebrafishMme($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
