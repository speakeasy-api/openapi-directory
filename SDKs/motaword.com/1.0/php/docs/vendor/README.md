# vendor

### Available Operations

* [getAvailableVendors](#getavailablevendors) - Get a list of vendors available for the criteria given

## getAvailableVendors

Get a list of vendors available for the criteria given

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetAvailableVendorsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AvailableVendorsFilter;
use \OpenAPI\OpenAPI\Models\Shared\AvailableVendorsFilterTypesEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetAvailableVendorsWithEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAvailableVendorsRequest();
    $request->availableVendorsFilter = new AvailableVendorsFilter();
    $request->availableVendorsFilter->corporateId = 9920.74;
    $request->availableVendorsFilter->manualWorkPermission = false;
    $request->availableVendorsFilter->sourceLanguage = 'ratione';
    $request->availableVendorsFilter->targetLanguages = [
        'perferendis',
        'illum',
    ];
    $request->availableVendorsFilter->types = [
        AvailableVendorsFilterTypesEnum::BOTH,
        AvailableVendorsFilterTypesEnum::BOTH,
        AvailableVendorsFilterTypesEnum::BOTH,
    ];
    $request->with = [
        GetAvailableVendorsWithEnum::USER,
        GetAvailableVendorsWithEnum::USER,
    ];

    $response = $sdk->vendor->getAvailableVendors($request);

    if ($response->userList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
