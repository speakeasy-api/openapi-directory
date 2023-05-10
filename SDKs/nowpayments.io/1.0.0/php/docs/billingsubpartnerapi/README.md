# billingSubPartnerAPI

## Overview

NOWPayments allows you to create sub-partner accounts for your users, enabling full-fledged crypto billing solution.

### Available Operations

* [getAllTransfers](#getalltransfers) - Get all transfers
* [getSubPartnerBalance](#getsubpartnerbalance) - Get sub-partner balance
* [getSubPartners](#getsubpartners) - Get sub-partners
* [getTransfer](#gettransfer) - Get transfer

## getAllTransfers

Returns the entire list of transfers created by your sub-partners.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetAllTransfersRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAllTransfersRequest();
    $request->id = '111';
    $request->limit = '10';
    $request->offset = '0';
    $request->order = 'ASC';
    $request->status = 'CREATED';

    $response = $sdk->billingSubPartnerAPI->getAllTransfers($request);

    if ($response->getAllTransfers200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSubPartnerBalance

This request can be made only from a whitelisted IP.  
If IP whitelisting is disabled, this request can be made by any user that has an API key.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetSubPartnerBalanceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSubPartnerBalanceRequest();
    $request->id = '89bd9d8d-69a6-474e-8f46-7cc8796ed151';
    $request->xApiKey = '{{your_api_key}}';

    $response = $sdk->billingSubPartnerAPI->getSubPartnerBalance($request);

    if ($response->getSubPartnerBalance200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSubPartners

This method returns the entire list of your sub-partners.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetSubPartnersRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSubPartnersRequest();
    $request->id = '111';
    $request->limit = '10';
    $request->offset = '0';
    $request->order = 'DESC';

    $response = $sdk->billingSubPartnerAPI->getSubPartners($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTransfer

Get the actual information about the transfer. You need to provide the transfer ID in the request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetTransferRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTransferRequest();
    $request->id = 'a05dfc2d-df7c-4c78-8a1b-a928fc816742';

    $response = $sdk->billingSubPartnerAPI->getTransfer($request);

    if ($response->getTransfer200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
