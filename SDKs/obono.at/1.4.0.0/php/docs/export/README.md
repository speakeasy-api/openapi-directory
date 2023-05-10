# export

### Available Operations

* [getExportCsvRegistrierkassenRegistrierkasseUuidBelege](#getexportcsvregistrierkassenregistrierkasseuuidbelege)
* [getExportDep131RegistrierkassenRegistrierkasseUuidBelege](#getexportdep131registrierkassenregistrierkasseuuidbelege)
* [getExportDep7RegistrierkassenRegistrierkasseUuidBelege](#getexportdep7registrierkassenregistrierkasseuuidbelege)
* [getExportGobdRegistrierkassenRegistrierkasseUuid](#getexportgobdregistrierkassenregistrierkasseuuid)
* [getExportHtmlBelegeBelegUuid](#getexporthtmlbelegebeleguuid)
* [getExportPdfBelegeBelegUuid](#getexportpdfbelegebeleguuid)
* [getExportQrBelegeBelegUuid](#getexportqrbelegebeleguuid)
* [getExportThermalPrintBelegeBelegUuid](#getexportthermalprintbelegebeleguuid)
* [getExportXlsRegistrierkassenRegistrierkasseUuidBelege](#getexportxlsregistrierkassenregistrierkasseuuidbelege)

## getExportCsvRegistrierkassenRegistrierkasseUuidBelege

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetExportCsvRegistrierkassenRegistrierkasseUuidBelegeRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetExportCsvRegistrierkassenRegistrierkasseUuidBelegeRequest();
    $request->after = 'ad';
    $request->before = 'natus';
    $request->posten = false;
    $request->registrierkasseUuid = 'sed';

    $response = $sdk->export->getExportCsvRegistrierkassenRegistrierkasseUuidBelege($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getExportDep131RegistrierkassenRegistrierkasseUuidBelege

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetExportDep131RegistrierkassenRegistrierkasseUuidBelegeRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetExportDep131RegistrierkassenRegistrierkasseUuidBelegeRequest();
    $request->after = 'iste';
    $request->before = 'dolor';
    $request->registrierkasseUuid = 'natus';

    $response = $sdk->export->getExportDep131RegistrierkassenRegistrierkasseUuidBelege($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getExportDep7RegistrierkassenRegistrierkasseUuidBelege

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetExportDep7RegistrierkassenRegistrierkasseUuidBelegeRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetExportDep7RegistrierkassenRegistrierkasseUuidBelegeRequest();
    $request->after = 'laboriosam';
    $request->before = 'hic';
    $request->registrierkasseUuid = 'saepe';

    $response = $sdk->export->getExportDep7RegistrierkassenRegistrierkasseUuidBelege($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getExportGobdRegistrierkassenRegistrierkasseUuid

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetExportGobdRegistrierkassenRegistrierkasseUuidRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetExportGobdRegistrierkassenRegistrierkasseUuidRequest();
    $request->after = 'fuga';
    $request->before = 'in';
    $request->registrierkasseUuid = 'corporis';

    $response = $sdk->export->getExportGobdRegistrierkassenRegistrierkasseUuid($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getExportHtmlBelegeBelegUuid

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetExportHtmlBelegeBelegUuidRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetExportHtmlBelegeBelegUuidRequest();
    $request->belegUuid = 'iste';

    $response = $sdk->export->getExportHtmlBelegeBelegUuid($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getExportPdfBelegeBelegUuid

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetExportPdfBelegeBelegUuidRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetExportPdfBelegeBelegUuidRequest();
    $request->belegUuid = 'iure';

    $response = $sdk->export->getExportPdfBelegeBelegUuid($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getExportQrBelegeBelegUuid

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetExportQrBelegeBelegUuidRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetExportQrBelegeBelegUuidRequest();
    $request->belegUuid = 'saepe';

    $response = $sdk->export->getExportQrBelegeBelegUuid($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getExportThermalPrintBelegeBelegUuid

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetExportThermalPrintBelegeBelegUuidRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetExportThermalPrintBelegeBelegUuidDialectEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetExportThermalPrintBelegeBelegUuidEncodingEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetExportThermalPrintBelegeBelegUuidRequest();
    $request->belegUuid = 'quidem';
    $request->dialect = GetExportThermalPrintBelegeBelegUuidDialectEnum::ESCPOS;
    $request->encoding = GetExportThermalPrintBelegeBelegUuidEncodingEnum::RAW;
    $request->qr = false;
    $request->width = 969810;

    $response = $sdk->export->getExportThermalPrintBelegeBelegUuid($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getExportXlsRegistrierkassenRegistrierkasseUuidBelege

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetExportXlsRegistrierkassenRegistrierkasseUuidBelegeRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetExportXlsRegistrierkassenRegistrierkasseUuidBelegeRequest();
    $request->after = 'est';
    $request->before = 'mollitia';
    $request->registrierkasseUuid = 'laborum';

    $response = $sdk->export->getExportXlsRegistrierkassenRegistrierkasseUuidBelege($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
