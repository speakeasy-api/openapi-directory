# productModule

## Overview

Product Module operations

Product Module Services
<https://netlicensing.io/wiki/product-module-services>
### Available Operations

* [createProductModule](#createproductmodule) - Create Product Module
* [deleteProductModule](#deleteproductmodule) - Delete Product Module
* [getProductModule](#getproductmodule) - Get Product Module
* [listProductModules](#listproductmodules) - List Product Modules
* [updateProductModule](#updateproductmodule) - Update Product Module

## createProductModule

Creates a new Product Module

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateProductModuleRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateProductModuleRequestBodyLicenseTemplateEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateProductModuleRequestBodyNodeSecretModeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateProductModuleSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateProductModuleRequestBody();
    $request->active = false;
    $request->licenseTemplate = [
        CreateProductModuleRequestBodyLicenseTemplateEnum::FEATURE,
        CreateProductModuleRequestBodyLicenseTemplateEnum::FEATURE,
        CreateProductModuleRequestBodyLicenseTemplateEnum::TIMEVOLUME,
    ];
    $request->licensingModel = 'reiciendis';
    $request->maxCheckoutValidity = 976460;
    $request->name = 'Jessie Langosh V';
    $request->nodeSecretMode = [
        CreateProductModuleRequestBodyNodeSecretModeEnum::CLIENT,
        CreateProductModuleRequestBodyNodeSecretModeEnum::PREDEFINED,
    ];
    $request->number = 'doloremque';
    $request->productNumber = 'reprehenderit';
    $request->redThreshold = 282807;
    $request->yellowThreshold = 979587;

    $requestSecurity = new CreateProductModuleSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->productModule->createProductModule($request, $requestSecurity);

    if ($response->netlicensing !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteProductModule

Delete a Product Module by 'number'

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteProductModuleRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteProductModuleSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteProductModuleRequest();
    $request->forceCascade = false;
    $request->productModuleNumber = 'dicta';

    $requestSecurity = new DeleteProductModuleSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->productModule->deleteProductModule($request, $requestSecurity);

    if ($response->netlicensing !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getProductModule

Return a Product Module by 'productModuleNumber'

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetProductModuleRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetProductModuleSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetProductModuleRequest();
    $request->productModuleNumber = 'corporis';

    $requestSecurity = new GetProductModuleSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->productModule->getProductModule($request, $requestSecurity);

    if ($response->netlicensing !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listProductModules

Return a list of all Product Modules for the current Vendor

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListProductModulesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new ListProductModulesSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->productModule->listProductModules($requestSecurity);

    if ($response->netlicensings !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateProductModule

Sets the provided properties to a Product Module. Return an updated Product Module

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateProductModuleRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateProductModuleRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateProductModuleRequestBodyLicenseTemplateEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateProductModuleRequestBodyNodeSecretModeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateProductModuleSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateProductModuleRequest();
    $request->requestBody = new UpdateProductModuleRequestBody();
    $request->requestBody->active = false;
    $request->requestBody->licenseTemplate = [
        UpdateProductModuleRequestBodyLicenseTemplateEnum::TIMEVOLUME,
        UpdateProductModuleRequestBodyLicenseTemplateEnum::TIMEVOLUME,
    ];
    $request->requestBody->licensingModel = 'harum';
    $request->requestBody->maxCheckoutValidity = 317983;
    $request->requestBody->name = 'Mrs. Leslie VonRueden';
    $request->requestBody->nodeSecretMode = [
        UpdateProductModuleRequestBodyNodeSecretModeEnum::CLIENT,
        UpdateProductModuleRequestBodyNodeSecretModeEnum::CLIENT,
        UpdateProductModuleRequestBodyNodeSecretModeEnum::PREDEFINED,
    ];
    $request->requestBody->number = 'praesentium';
    $request->requestBody->redThreshold = 523248;
    $request->requestBody->yellowThreshold = 916723;
    $request->productModuleNumber = 'quasi';

    $requestSecurity = new UpdateProductModuleSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->productModule->updateProductModule($request, $requestSecurity);

    if ($response->netlicensing !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
