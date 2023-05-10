# insight

### Available Operations

* [getAddress](#getaddress) - Returns address object
* [getAddressBalance](#getaddressbalance) - Returns address balance in sats
* [getAddressTotalReceived](#getaddresstotalreceived) - Returns total received by address in sats
* [getAddressTotalSent](#getaddresstotalsent) - Returns total sent by address in sats
* [getAddressUnconfirmedBalance](#getaddressunconfirmedbalance) - Returns address unconfirmed balance in sats
* [getAddressUtxos](#getaddressutxos) - Returns all UTXOs at a given address
* [getBlock](#getblock) - Returns information regarding a Neblio block
* [getBlockIndex](#getblockindex) - Returns block hash of block
* [getRawTx](#getrawtx) - Returns raw transaction hex
* [getStatus](#getstatus) - Utility API for calling several blockchain node functions
* [getSync](#getsync) - Get node sync status
* [getTx](#gettx) - Returns transaction object
* [getTxs](#gettxs) - Get transactions by block or address
* [sendTx](#sendtx) - Broadcasts a signed raw transaction to the network (not NTP1 specific)

## getAddress

Returns NEBL address object containing information on a specific address

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetAddressRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAddressRequest();
    $request->address = '6634 Sim Cape';

    $response = $sdk->insight->getAddress($request);

    if ($response->getAddressResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAddressBalance

Returns NEBL address balance in satoshis

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetAddressBalanceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAddressBalanceRequest();
    $request->address = '234 Schulist Meadows';

    $response = $sdk->insight->getAddressBalance($request);

    if ($response->getAddressBalanceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAddressTotalReceived

Returns total NEBL received by address in satoshis

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetAddressTotalReceivedRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAddressTotalReceivedRequest();
    $request->address = '5398 Ettie Circles';

    $response = $sdk->insight->getAddressTotalReceived($request);

    if ($response->getAddressTotalReceivedResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAddressTotalSent

Returns total NEBL sent by address in satoshis

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetAddressTotalSentRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAddressTotalSentRequest();
    $request->address = '0389 Connelly Trace';

    $response = $sdk->insight->getAddressTotalSent($request);

    if ($response->getAddressTotalSentResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAddressUnconfirmedBalance

Returns NEBL address unconfirmed balance in satoshis

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetAddressUnconfirmedBalanceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAddressUnconfirmedBalanceRequest();
    $request->address = '947 Koepp Manors';

    $response = $sdk->insight->getAddressUnconfirmedBalance($request);

    if ($response->getAddressUnconfirmedBalanceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAddressUtxos

Returns information on each Unspent Transaction Output contained at an address

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetAddressUtxosRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAddressUtxosRequest();
    $request->address = '617 McCullough Coves';

    $response = $sdk->insight->getAddressUtxos($request);

    if ($response->getAddressUtxosResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getBlock

Returns blockchain data for a given block based upon the block hash

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetBlockRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetBlockRequest();
    $request->blockhash = 'deleniti';

    $response = $sdk->insight->getBlock($request);

    if ($response->getBlockResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getBlockIndex

Returns the block hash of a block at a given block index

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetBlockIndexRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetBlockIndexRequest();
    $request->blockindex = 9446.69;

    $response = $sdk->insight->getBlockIndex($request);

    if ($response->getBlockIndexResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRawTx

Returns raw transaction hex representing a NEBL transaction

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetRawTxRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRawTxRequest();
    $request->txid = 'optio';

    $response = $sdk->insight->getRawTx($request);

    if ($response->getRawTxResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getStatus

Utility API for calling several blockchain node functions - getInfo, getDifficulty, getBestBlockHash, getLastBlockHash

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetStatusRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetStatusRequest();
    $request->q = 'totam';

    $response = $sdk->insight->getStatus($request);

    if ($response->getStatusResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSync

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
    $response = $sdk->insight->getSync();

    if ($response->getSyncResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTx

Returns NEBL transaction object representing a NEBL transaction

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetTxRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTxRequest();
    $request->txid = 'beatae';

    $response = $sdk->insight->getTx($request);

    if ($response->getTxResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTxs

Returns all transactions by block or address

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetTxsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTxsRequest();
    $request->address = '4217 Klocko Extension';
    $request->block = 'excepturi';
    $request->pageNum = 1352.18;

    $response = $sdk->insight->getTxs($request);

    if ($response->getTxsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## sendTx

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
    $request->rawtx = 'perferendis';

    $response = $sdk->insight->sendTx($request);

    if ($response->broadcastTxResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
