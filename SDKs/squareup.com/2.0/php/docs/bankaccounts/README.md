# bankAccounts

### Available Operations

* [getBankAccount](#getbankaccount) - GetBankAccount
* [getBankAccountByV1Id](#getbankaccountbyv1id) - GetBankAccountByV1Id
* [listBankAccounts](#listbankaccounts) - ListBankAccounts

## getBankAccount

Returns details of a [BankAccount](https://developer.squareup.com/reference/square_2021-08-18/objects/BankAccount)
linked to a Square account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetBankAccountRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetBankAccountSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetBankAccountRequest();
    $request->bankAccountId = 'distinctio';

    $requestSecurity = new GetBankAccountSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->bankAccounts->getBankAccount($request, $requestSecurity);

    if ($response->getBankAccountResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getBankAccountByV1Id

Returns details of a [BankAccount](https://developer.squareup.com/reference/square_2021-08-18/objects/BankAccount) identified by V1 bank account ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetBankAccountByV1IdRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetBankAccountByV1IdSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetBankAccountByV1IdRequest();
    $request->v1BankAccountId = 'quibusdam';

    $requestSecurity = new GetBankAccountByV1IdSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->bankAccounts->getBankAccountByV1Id($request, $requestSecurity);

    if ($response->getBankAccountByV1IdResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listBankAccounts

Returns a list of [BankAccount](https://developer.squareup.com/reference/square_2021-08-18/objects/BankAccount) objects linked to a Square account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListBankAccountsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListBankAccountsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListBankAccountsRequest();
    $request->cursor = 'unde';
    $request->limit = 857946;
    $request->locationId = 'corrupti';

    $requestSecurity = new ListBankAccountsSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->bankAccounts->listBankAccounts($request, $requestSecurity);

    if ($response->listBankAccountsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
