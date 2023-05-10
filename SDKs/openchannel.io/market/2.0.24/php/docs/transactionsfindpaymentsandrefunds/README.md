# transactionsFindPaymentsAndRefunds

### Available Operations

* [deleteTransactionsTransactionId](#deletetransactionstransactionid) - Deleted a transaction
* [getTransactions](#gettransactions) - Returns a paginated list of transactions
* [getTransactionsTransactionId](#gettransactionstransactionid) - Returns a transaction
* [postTransactionsTransactionId](#posttransactionstransactionid) - Updates a transaction

## deleteTransactionsTransactionId

- Results are returned for the market provided within the basic authentication credentials


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteTransactionsTransactionIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteTransactionsTransactionIdRequest();
    $request->transactionId = 'ad';

    $response = $sdk->transactionsFindPaymentsAndRefunds->deleteTransactionsTransactionId($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTransactions

- Results are paginated and the default is value is 100 if no limit is provided


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetTransactionsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTransactionsRequest();
    $request->limit = 431418;
    $request->pageNumber = 221262;
    $request->query = 'necessitatibus';
    $request->sort = 'odit';

    $response = $sdk->transactionsFindPaymentsAndRefunds->getTransactions($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTransactionsTransactionId

- Results are returned for the market provided within the basic authentication credentials


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetTransactionsTransactionIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTransactionsTransactionIdRequest();
    $request->transactionId = 'nemo';

    $response = $sdk->transactionsFindPaymentsAndRefunds->getTransactionsTransactionId($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postTransactionsTransactionId

- Results are returned for the market provided within the basic authentication credentials


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostTransactionsTransactionIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostTransactionsTransactionIdRequest();
    $request->customData = 'quasi';
    $request->transactionId = 'iure';

    $response = $sdk->transactionsFindPaymentsAndRefunds->postTransactionsTransactionId($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
