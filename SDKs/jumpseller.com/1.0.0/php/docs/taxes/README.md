# taxes

### Available Operations

* [getTaxesJson](#gettaxesjson) - Retrieve all Taxes.
* [getTaxesIdJson](#gettaxesidjson) - Retrieve a single Tax information.
* [postTaxesJson](#posttaxesjson) - Create a new Tax.

## getTaxesJson

Retrieve all Taxes.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetTaxesJsonRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTaxesJsonRequest();
    $request->authtoken = 'ullam';
    $request->login = 'adipisci';

    $response = $sdk->taxes->getTaxesJson($request);

    if ($response->taxes !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTaxesIdJson

Retrieve a single Tax information.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetTaxesIdJsonRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTaxesIdJsonRequest();
    $request->authtoken = 'cum';
    $request->id = 502389;
    $request->login = 'quas';

    $response = $sdk->taxes->getTaxesIdJson($request);

    if ($response->tax !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postTaxesJson

Create a new Tax.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostTaxesJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\TaxEdit;
use \OpenAPI\OpenAPI\Models\Shared\TaxEditFields;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostTaxesJsonRequest();
    $request->taxEdit = new TaxEdit();
    $request->taxEdit->tax = new TaxEditFields();
    $request->taxEdit->tax->categoryId = 942584;
    $request->taxEdit->tax->country = 'Cook Islands';
    $request->taxEdit->tax->fixed = false;
    $request->taxEdit->tax->name = 'Byron Stroman';
    $request->taxEdit->tax->region = 'exercitationem';
    $request->taxEdit->tax->shipping = false;
    $request->taxEdit->tax->tax = 7507.65;
    $request->authtoken = 'sit';
    $request->login = 'rerum';

    $response = $sdk->taxes->postTaxesJson($request);

    if ($response->tax !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
