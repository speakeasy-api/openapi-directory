# countries

### Available Operations

* [~~listPaymentChannelRulesV1~~](#listpaymentchannelrulesv1) - List Payment Channel Country Rules :warning: **Deprecated**
* [~~listSupportedCountriesV1~~](#listsupportedcountriesv1) - List Supported Countries :warning: **Deprecated**
* [~~listSupportedCountriesV2~~](#listsupportedcountriesv2) - List Supported Countries :warning: **Deprecated**

## ~~listPaymentChannelRulesV1~~

List the country specific payment channel rules.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

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
    $response = $sdk->countries->listPaymentChannelRulesV1();

    if ($response->paymentChannelRulesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~listSupportedCountriesV1~~

<p>List the supported countries.</p>
<p>This version will be retired in March 2020. Use /v2/supportedCountries</p>


> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

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
    $response = $sdk->countries->listSupportedCountriesV1();

    if ($response->supportedCountriesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~listSupportedCountriesV2~~

List the supported countries.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

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
    $response = $sdk->countries->listSupportedCountriesV2();

    if ($response->supportedCountriesResponseV2 !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
