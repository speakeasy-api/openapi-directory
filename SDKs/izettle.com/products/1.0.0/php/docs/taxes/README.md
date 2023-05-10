# taxes

### Available Operations

* [createTaxRates](#createtaxrates) - Create new tax rates
* [deleteTaxRate](#deletetaxrate) - Delete a single tax rate
* [getProductCountForAllTaxes](#getproductcountforalltaxes) - Get all tax rates and a count of products associated with each
* [getTaxRate](#gettaxrate) - Get a single tax rate
* [getTaxRates](#gettaxrates) - Get all available tax rates
* [getTaxSettings](#gettaxsettings) - Get the organization tax settings 
* [setTaxationMode](#settaxationmode) - Update the organization tax settings
* [updateTaxRate](#updatetaxrate) - Update a single tax rate

## createTaxRates

Create new tax rates

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\TaxRatesCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\TaxRate;
use \OpenAPI\OpenAPI\Models\Operations\CreateTaxRatesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TaxRatesCreateRequest();
    $request->taxRates = [
        new TaxRate(),
    ];

    $requestSecurity = new CreateTaxRatesSecurity();
    $requestSecurity->zettleOauth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->taxes->createTaxRates($request, $requestSecurity);

    if ($response->taxRatesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteTaxRate

Delete a single tax rate

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteTaxRateRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteTaxRateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteTaxRateRequest();
    $request->taxRateUuid = '97f92443-da7c-4e52-b895-c537c6454efb';

    $requestSecurity = new DeleteTaxRateSecurity();
    $requestSecurity->zettleOauth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->taxes->deleteTaxRate($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getProductCountForAllTaxes

Get all tax rates and a count of products associated with each

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetProductCountForAllTaxesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new GetProductCountForAllTaxesSecurity();
    $requestSecurity->zettleOauth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->taxes->getProductCountForAllTaxes($requestSecurity);

    if ($response->taxRateProductCountResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTaxRate

Get a single tax rate

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetTaxRateRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetTaxRateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTaxRateRequest();
    $request->taxRateUuid = '0b34896c-3ca5-4acf-be2f-d57075779291';

    $requestSecurity = new GetTaxRateSecurity();
    $requestSecurity->zettleOauth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->taxes->getTaxRate($request, $requestSecurity);

    if ($response->taxRate !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTaxRates

Get all available tax rates

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetTaxRatesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new GetTaxRatesSecurity();
    $requestSecurity->zettleOauth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->taxes->getTaxRates($requestSecurity);

    if ($response->taxRatesResponses !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTaxSettings

Get the organization tax settings 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetTaxSettingsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new GetTaxSettingsSecurity();
    $requestSecurity->zettleOauth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->taxes->getTaxSettings($requestSecurity);

    if ($response->taxSettingsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## setTaxationMode

Update the organization tax settings

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\TaxSettingsUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\TaxSettingsUpdateRequestTaxationModeEnum;
use \OpenAPI\OpenAPI\Models\Operations\SetTaxationModeSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TaxSettingsUpdateRequest();
    $request->taxationMode = TaxSettingsUpdateRequestTaxationModeEnum::EXCLUSIVE;

    $requestSecurity = new SetTaxationModeSecurity();
    $requestSecurity->zettleOauth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->taxes->setTaxationMode($request, $requestSecurity);

    if ($response->taxSettingsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateTaxRate

Update a single tax rate

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateTaxRateRequest;
use \OpenAPI\OpenAPI\Models\Shared\TaxRateUpdateRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateTaxRateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateTaxRateRequest();
    $request->taxRateUpdateRequest = new TaxRateUpdateRequest();
    $request->taxRateUpdateRequest->default = false;
    $request->taxRateUpdateRequest->label = 'voluptate';
    $request->taxRateUpdateRequest->percentage = 8667.89;
    $request->taxRateUuid = 'eac646ec-b573-4409-a3eb-1e5a2b12eb07';

    $requestSecurity = new UpdateTaxRateSecurity();
    $requestSecurity->zettleOauth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->taxes->updateTaxRate($request, $requestSecurity);

    if ($response->taxRate !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
