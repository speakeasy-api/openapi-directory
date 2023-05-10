# import

### Available Operations

* [getLatestImportStatus](#getlatestimportstatus) - Get status for latest import
* [getStatusByUuid](#getstatusbyuuid) - Get status for an import
* [importLibraryV2](#importlibraryv2) - Import library items

## getLatestImportStatus

Get status for latest import

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetLatestImportStatusRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetLatestImportStatusSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetLatestImportStatusRequest();
    $request->organizationUuid = '9f5fce6c-5561-446c-be25-0fb008c42e14';

    $requestSecurity = new GetLatestImportStatusSecurity();
    $requestSecurity->zettleOauth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->import->getLatestImportStatus($request, $requestSecurity);

    if ($response->importResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getStatusByUuid

Get status for an import

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetStatusByUuidRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetStatusByUuidSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetStatusByUuidRequest();
    $request->importUuid = '1aac366c-8dd6-4b14-8290-7474778a7bd4';
    $request->organizationUuid = '66d28c10-ab3c-4dca-8251-904e523c7e0b';

    $requestSecurity = new GetStatusByUuidSecurity();
    $requestSecurity->zettleOauth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->import->getStatusByUuid($request, $requestSecurity);

    if ($response->importResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## importLibraryV2

Import library items

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ImportLibraryV2Request;
use \OpenAPI\OpenAPI\Models\Shared\BulkImportRequest;
use \OpenAPI\OpenAPI\Models\Shared\FullProductUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\CategoryDTO;
use \OpenAPI\OpenAPI\Models\Shared\MetadataDTO;
use \OpenAPI\OpenAPI\Models\Shared\SourceDTO;
use \OpenAPI\OpenAPI\Models\Shared\OnlineProperties;
use \OpenAPI\OpenAPI\Models\Shared\Presentation;
use \OpenAPI\OpenAPI\Models\Shared\SearchEngineOptimization;
use \OpenAPI\OpenAPI\Models\Shared\Shipping;
use \OpenAPI\OpenAPI\Models\Shared\ShippingShippingPricingModelEnum;
use \OpenAPI\OpenAPI\Models\Shared\Weight;
use \OpenAPI\OpenAPI\Models\Shared\WeightUnitEnum;
use \OpenAPI\OpenAPI\Models\Shared\OnlinePropertiesStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\PresentationDTO;
use \OpenAPI\OpenAPI\Models\Shared\VariantOptionDefinitions;
use \OpenAPI\OpenAPI\Models\Shared\VariantOptionDefinition;
use \OpenAPI\OpenAPI\Models\Shared\VariantOptionProperties;
use \OpenAPI\OpenAPI\Models\Shared\VariantDTO;
use \OpenAPI\OpenAPI\Models\Shared\Price;
use \OpenAPI\OpenAPI\Models\Shared\PriceCurrencyIdEnum;
use \OpenAPI\OpenAPI\Models\Shared\VariantOption;
use \OpenAPI\OpenAPI\Models\Operations\ImportLibraryV2Security;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ImportLibraryV2Request();
    $request->bulkImportRequest = new BulkImportRequest();
    $request->bulkImportRequest->products = [
        new FullProductUpdateRequest(),
        new FullProductUpdateRequest(),
        new FullProductUpdateRequest(),
        new FullProductUpdateRequest(),
    ];
    $request->organizationUuid = '7178e479-6f2a-470c-a882-82aa482562f2';

    $requestSecurity = new ImportLibraryV2Security();
    $requestSecurity->zettleOauth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->import->importLibraryV2($request, $requestSecurity);

    if ($response->importResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
