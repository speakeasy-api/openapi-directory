# accounts

### Available Operations

* [retrieveAccountBalancesV2](#retrieveaccountbalancesv2) - Access account balances.

Balances will be returned in Berlin Group PSD2 format.
* [retrieveAccountDetailsV2](#retrieveaccountdetailsv2) - Access account details.

Account details will be returned in Berlin Group PSD2 format.
* [retrieveAccountMetadata](#retrieveaccountmetadata) - Access account metadata.

Information about the account record, such as the processing status and IBAN.

Account status is recalculated based on the error count in the latest req.
* [retrieveAccountTransactionsV22](#retrieveaccounttransactionsv22) - Access account transactions.

Transactions will be returned in Berlin Group PSD2 format.

## retrieveAccountBalancesV2

Access account balances.

Balances will be returned in Berlin Group PSD2 format.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RetrieveAccountBalancesV2Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RetrieveAccountBalancesV2Request();
    $request->id = 'a05dfc2d-df7c-4c78-8a1b-a928fc816742';

    $response = $sdk->accounts->retrieveAccountBalancesV2($request);

    if ($response->retrieveAccountBalancesV2200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## retrieveAccountDetailsV2

Access account details.

Account details will be returned in Berlin Group PSD2 format.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RetrieveAccountDetailsV2Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RetrieveAccountDetailsV2Request();
    $request->id = 'cb739205-9293-496f-aa75-96eb10faaa23';

    $response = $sdk->accounts->retrieveAccountDetailsV2($request);

    if ($response->retrieveAccountDetailsV2200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## retrieveAccountMetadata

Access account metadata.

Information about the account record, such as the processing status and IBAN.

Account status is recalculated based on the error count in the latest req.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RetrieveAccountMetadataRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RetrieveAccountMetadataRequest();
    $request->id = '52c59559-07af-4f1a-ba2f-a9467739251a';

    $response = $sdk->accounts->retrieveAccountMetadata($request);

    if ($response->account !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## retrieveAccountTransactionsV22

Access account transactions.

Transactions will be returned in Berlin Group PSD2 format.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RetrieveAccountTransactionsV22Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RetrieveAccountTransactionsV22Request();
    $request->dateFrom = DateTime::createFromFormat('Y-m-d', '2022-05-14');
    $request->dateTo = DateTime::createFromFormat('Y-m-d', '2022-03-22');
    $request->id = '3f5ad019-da1f-4fe7-8f09-7b0074f15471';

    $response = $sdk->accounts->retrieveAccountTransactionsV22($request);

    if ($response->retrieveAccountTransactionsV22200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
