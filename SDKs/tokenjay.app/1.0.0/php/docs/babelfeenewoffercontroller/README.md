# babelFeeNewOfferController

### Available Operations

* [doCreateBabelBox](#docreatebabelbox)
* [ergoPayCreateBabelBox](#ergopaycreatebabelbox)
* [getBabelFeeNewOffer](#getbabelfeenewoffer)
* [replaceTokenAmountInputFields](#replacetokenamountinputfields)

## doCreateBabelBox

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
        'temporibus' => [
            'quis' => 'veritatis',
        ],
        'deserunt' => [
            'ipsam' => 'repellendus',
        ],
        'sapiente' => [
            'odit' => 'at',
            'at' => 'maiores',
            'molestiae' => 'quod',
            'quod' => 'esse',
        ],
        'totam' => [
            'dolorum' => 'dicta',
            'nam' => 'officia',
            'occaecati' => 'fugit',
            'deleniti' => 'hic',
        ],
    ]

    $response = $sdk->babelFeeNewOfferController->doCreateBabelBox($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ergoPayCreateBabelBox

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ErgoPayCreateBabelBoxRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ErgoPayCreateBabelBoxRequest();
    $request->address = '514 Diego Divide';
    $request->ergAmount = 774234;
    $request->tokenAmount = 736918;
    $request->tokenId = 'esse';

    $response = $sdk->babelFeeNewOfferController->ergoPayCreateBabelBox($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getBabelFeeNewOffer

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->babelFeeNewOfferController->getBabelFeeNewOffer();

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## replaceTokenAmountInputFields

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
        'excepturi' => [
            'perferendis' => 'ad',
        ],
    ]

    $response = $sdk->babelFeeNewOfferController->replaceTokenAmountInputFields($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
