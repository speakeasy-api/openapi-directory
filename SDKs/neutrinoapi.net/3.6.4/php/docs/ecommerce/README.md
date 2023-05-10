# eCommerce

### Available Operations

* [binListDownload](#binlistdownload) - BIN List Download
* [binLookup](#binlookup) - BIN Lookup
* [convert](#convert) - Convert

## binListDownload

Download our entire BIN database for direct use on your own systems

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\BINListDownloadRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BINListDownloadRequest();
    $request->include8digit = false;
    $request->includeIso3 = false;

    $response = $sdk->eCommerce->binListDownload($request);

    if ($response->binListDownload200ApplicationJSONBinaryString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## binLookup

Perform a BIN (Bank Identification Number) or IIN (Issuer Identification Number) lookup

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\BINLookupRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BINLookupRequest();
    $request->binNumber = 'placeat';
    $request->customerIp = 'voluptatum';

    $response = $sdk->eCommerce->binLookup($request);

    if ($response->binLookupResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## convert

A currency and unit conversion tool

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ConvertRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ConvertRequest();
    $request->fromType = 'iusto';
    $request->fromValue = 'excepturi';
    $request->toType = 'nisi';

    $response = $sdk->eCommerce->convert($request);

    if ($response->convertResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
