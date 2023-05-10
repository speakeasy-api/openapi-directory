# testnetInsight

### Available Operations

* [testnetGetAddress](#testnetgetaddress) - Returns address object
* [testnetGetAddressBalance](#testnetgetaddressbalance) - Returns address balance in sats
* [testnetGetAddressTotalReceived](#testnetgetaddresstotalreceived) - Returns total received by address in sats
* [testnetGetAddressTotalSent](#testnetgetaddresstotalsent) - Returns total sent by address in sats
* [testnetGetAddressUnconfirmedBalance](#testnetgetaddressunconfirmedbalance) - Returns address unconfirmed balance in sats
* [testnetGetAddressUtxos](#testnetgetaddressutxos) - Returns all UTXOs at a given address
* [testnetGetBlock](#testnetgetblock) - Returns information regarding a Neblio block
* [testnetGetBlockIndex](#testnetgetblockindex) - Returns block hash of block
* [testnetGetRawTx](#testnetgetrawtx) - Returns raw transaction hex
* [testnetGetStatus](#testnetgetstatus) - Utility API for calling several blockchain node functions
* [testnetGetSync](#testnetgetsync) - Get node sync status
* [testnetGetTx](#testnetgettx) - Returns transaction object
* [testnetGetTxs](#testnetgettxs) - Get transactions by block or address
* [testnetSendTx](#testnetsendtx) - Broadcasts a signed raw transaction to the network (not NTP1 specific)

## testnetGetAddress

Returns NEBL address object containing information on a specific address

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TestnetGetAddressRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TestnetGetAddressRequest();
    $request->address = '8609 Thiel Lane';

    $response = $sdk->testnetInsight->testnetGetAddress($request);

    if ($response->getAddressResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## testnetGetAddressBalance

Returns NEBL address balance in satoshis

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TestnetGetAddressBalanceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TestnetGetAddressBalanceRequest();
    $request->address = '9064 Aufderhar Burgs';

    $response = $sdk->testnetInsight->testnetGetAddressBalance($request);

    if ($response->getAddressBalanceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## testnetGetAddressTotalReceived

Returns total NEBL received by address in satoshis

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TestnetGetAddressTotalReceivedRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TestnetGetAddressTotalReceivedRequest();
    $request->address = '2913 Jayden Course';

    $response = $sdk->testnetInsight->testnetGetAddressTotalReceived($request);

    if ($response->getAddressTotalReceivedResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## testnetGetAddressTotalSent

Returns total NEBL sent by address in satoshis

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TestnetGetAddressTotalSentRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TestnetGetAddressTotalSentRequest();
    $request->address = '384 Bergnaum Extension';

    $response = $sdk->testnetInsight->testnetGetAddressTotalSent($request);

    if ($response->getAddressTotalSentResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## testnetGetAddressUnconfirmedBalance

Returns NEBL address unconfirmed balance in satoshis

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TestnetGetAddressUnconfirmedBalanceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TestnetGetAddressUnconfirmedBalanceRequest();
    $request->address = '558 Johanna Meadow';

    $response = $sdk->testnetInsight->testnetGetAddressUnconfirmedBalance($request);

    if ($response->getAddressUnconfirmedBalanceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## testnetGetAddressUtxos

Returns information on each Unspent Transaction Output contained at an address

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TestnetGetAddressUtxosRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TestnetGetAddressUtxosRequest();
    $request->address = '095 Tobin Forge';

    $response = $sdk->testnetInsight->testnetGetAddressUtxos($request);

    if ($response->getAddressUtxosResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## testnetGetBlock

Returns blockchain data for a given block based upon the block hash

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TestnetGetBlockRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TestnetGetBlockRequest();
    $request->blockhash = 'enim';

    $response = $sdk->testnetInsight->testnetGetBlock($request);

    if ($response->getBlockResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## testnetGetBlockIndex

Returns the block hash of a block at a given block index

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TestnetGetBlockIndexRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TestnetGetBlockIndexRequest();
    $request->blockindex = 93.56;

    $response = $sdk->testnetInsight->testnetGetBlockIndex($request);

    if ($response->getBlockIndexResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## testnetGetRawTx

Returns raw transaction hex representing a NEBL transaction

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TestnetGetRawTxRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TestnetGetRawTxRequest();
    $request->txid = 'est';

    $response = $sdk->testnetInsight->testnetGetRawTx($request);

    if ($response->getRawTxResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## testnetGetStatus

Utility API for calling several blockchain node functions - getInfo, getDifficulty, getBestBlockHash, getLastBlockHash

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TestnetGetStatusRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TestnetGetStatusRequest();
    $request->q = 'quibusdam';

    $response = $sdk->testnetInsight->testnetGetStatus($request);

    if ($response->getStatusResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## testnetGetSync

Returns information on the node's sync progress

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->testnetInsight->testnetGetSync();

    if ($response->getSyncResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## testnetGetTx

Returns NEBL transaction object representing a NEBL transaction

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TestnetGetTxRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TestnetGetTxRequest();
    $request->txid = 'explicabo';

    $response = $sdk->testnetInsight->testnetGetTx($request);

    if ($response->getTxResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## testnetGetTxs

Returns all transactions by block or address

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TestnetGetTxsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TestnetGetTxsRequest();
    $request->address = '7822 Grant Oval';
    $request->block = 'quos';
    $request->pageNum = 201.07;

    $response = $sdk->testnetInsight->testnetGetTxs($request);

    if ($response->getTxsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## testnetSendTx

Broadcasts a signed raw transaction to the network. If successful returns the txid of the broadcast trasnaction.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\SendTxRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SendTxRequest();
    $request->rawtx = 'magni';

    $response = $sdk->testnetInsight->testnetSendTx($request);

    if ($response->broadcastTxResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
