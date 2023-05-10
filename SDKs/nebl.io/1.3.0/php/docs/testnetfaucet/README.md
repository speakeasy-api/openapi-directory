# testnetFaucet

### Available Operations

* [testnetGetFaucet](#testnetgetfaucet) - Withdraws testnet NEBL to the specified address

## testnetGetFaucet

Withdraw testnet NEBL to your Neblio Testnet address. By default amount is 1500000000 or 15 NEBL and has a max of 50 NEBL. Only 2 withdrawals allowed per 24 hour period.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TestnetGetFaucetRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TestnetGetFaucetRequest();
    $request->address = '17193 Schuster Branch';
    $request->amount = 971.01;

    $response = $sdk->testnetFaucet->testnetGetFaucet($request);

    if ($response->getFaucetResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
