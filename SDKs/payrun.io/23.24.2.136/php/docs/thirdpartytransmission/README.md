# thirdPartyTransmission

### Available Operations

* [deleteThirdPartyTransaction](#deletethirdpartytransaction) - Delete third party transaction
* [getThirdPartyTransaction](#getthirdpartytransaction) - Get a third party transaction
* [getThirdPartyTransactions](#getthirdpartytransactions) - Get all third party transaction links

## deleteThirdPartyTransaction

Deletes a third party transaction record from the given resource location

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteThirdPartyTransactionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteThirdPartyTransactionRequest();
    $request->apiVersion = 'iusto';
    $request->authorization = 'esse';
    $request->employerId = 'magnam';
    $request->thirdPartyTransactionId = 'odio';

    $response = $sdk->thirdPartyTransmission->deleteThirdPartyTransaction($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getThirdPartyTransaction

Get a third party transaction

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetThirdPartyTransactionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetThirdPartyTransactionRequest();
    $request->apiVersion = 'nulla';
    $request->authorization = 'impedit';
    $request->employerId = 'cupiditate';
    $request->thirdPartyTransactionId = 'illo';

    $response = $sdk->thirdPartyTransmission->getThirdPartyTransaction($request);

    if ($response->thirdPartyTransaction !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getThirdPartyTransactions

Get all third party transaction links

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetThirdPartyTransactionsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetThirdPartyTransactionsRequest();
    $request->apiVersion = 'exercitationem';
    $request->authorization = 'laborum';
    $request->employerId = 'illum';

    $response = $sdk->thirdPartyTransmission->getThirdPartyTransactions($request);

    if ($response->linkCollection !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
