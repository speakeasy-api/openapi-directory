# ntp1

### Available Operations

* [broadcastTx](#broadcasttx) - Broadcasts a signed raw transaction to the network
* [burnToken](#burntoken) - Builds a transaction that burns an NTP1 Token
* [getAddressInfo](#getaddressinfo) - Information On a Neblio Address
* [getTokenHolders](#gettokenholders) - Get Addresses Holding a Token
* [getTokenId](#gettokenid) - Returns the tokenId representing a token
* [getTokenMetadata](#gettokenmetadata) - Get Metadata of Token
* [getTokenMetadataOfUtxo](#gettokenmetadataofutxo) - Get UTXO Metadata of Token
* [getTransactionInfo](#gettransactioninfo) - Information On an NTP1 Transaction
* [issueToken](#issuetoken) - Builds a transaction that issues a new NTP1 Token
* [sendToken](#sendtoken) - Builds a transaction that sends an NTP1 Token

## broadcastTx

Broadcasts a signed raw transaction to the network. If successful returns the txid of the broadcast trasnaction.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\BroadcastTxRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BroadcastTxRequest();
    $request->txHex = 'iste';

    $response = $sdk->ntp1->broadcastTx($request);

    if ($response->broadcastTxResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## burnToken

Builds an unsigned raw transaction that burns an NTP1 token on the Neblio blockchain.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\BurnTokenRequest;
use \OpenAPI\OpenAPI\Models\Shared\BurnTokenRequestBurn;
use \OpenAPI\OpenAPI\Models\Shared\BurnTokenRequestTransfer;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BurnTokenRequest();
    $request->burn = [
        new BurnTokenRequestBurn(),
    ];
    $request->fee = 6169.34;
    $request->from = [
        'hic',
        'saepe',
    ];
    $request->transfer = [
        new BurnTokenRequestTransfer(),
        new BurnTokenRequestTransfer(),
        new BurnTokenRequestTransfer(),
    ];

    $response = $sdk->ntp1->burnToken($request);

    if ($response->burnTokenResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAddressInfo

Returns both NEBL and NTP1 token UTXOs held at the given address.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetAddressInfoRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAddressInfoRequest();
    $request->address = '3649 Boyle Cape';

    $response = $sdk->ntp1->getAddressInfo($request);

    if ($response->getAddressInfoResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTokenHolders

Returns the the the addresses holding a token and how many tokens are held


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetTokenHoldersRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTokenHoldersRequest();
    $request->tokenid = 'reiciendis';

    $response = $sdk->ntp1->getTokenHolders($request);

    if ($response->getTokenHoldersResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTokenId

Translates a token symbol to a tokenId if a token exists with that symbol on the network


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetTokenIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTokenIdRequest();
    $request->tokensymbol = 'est';

    $response = $sdk->ntp1->getTokenId($request);

    if ($response->getTokenIdResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTokenMetadata

Returns the metadata associated with a token.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetTokenMetadataRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTokenMetadataRequest();
    $request->tokenid = 'mollitia';
    $request->verbosity = 6706.38;

    $response = $sdk->ntp1->getTokenMetadata($request);

    if ($response->getTokenMetadataResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTokenMetadataOfUtxo

Returns the metadata associated with a token for that specific utxo instead of the issuance transaction.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetTokenMetadataOfUtxoRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTokenMetadataOfUtxoRequest();
    $request->tokenid = 'dolores';
    $request->utxo = 'dolorem';
    $request->verbosity = 3581.52;

    $response = $sdk->ntp1->getTokenMetadataOfUtxo($request);

    if ($response->getTokenMetadataResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTransactionInfo

Returns detailed information regarding an NTP1 transaction.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetTransactionInfoRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTransactionInfoRequest();
    $request->txid = 'explicabo';

    $response = $sdk->ntp1->getTransactionInfo($request);

    if ($response->getTransactionInfoResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## issueToken

Builds an unsigned raw transaction that issues a new NTP1 token on the Neblio blockchain.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\IssueTokenRequest;
use \OpenAPI\OpenAPI\Models\Shared\IssueTokenRequestFlags;
use \OpenAPI\OpenAPI\Models\Shared\IssueTokenRequestMetadata;
use \OpenAPI\OpenAPI\Models\Shared\IssueTokenRequestMetadataEncryptions;
use \OpenAPI\OpenAPI\Models\Shared\IssueTokenRequestMetadataRules;
use \OpenAPI\OpenAPI\Models\Shared\IssueTokenRequestMetadataRulesExpiration;
use \OpenAPI\OpenAPI\Models\Shared\IssueTokenRequestMetadataRulesFees;
use \OpenAPI\OpenAPI\Models\Shared\IssueTokenRequestMetadataRulesFeesItems;
use \OpenAPI\OpenAPI\Models\Shared\IssueTokenRequestMetadataRulesHolders;
use \OpenAPI\OpenAPI\Models\Shared\IssueTokenRequestMetadataUrls;
use \OpenAPI\OpenAPI\Models\Shared\IssueTokenRequestMetadataUserData;
use \OpenAPI\OpenAPI\Models\Shared\IssueTokenRequestMetadataUserDataMeta;
use \OpenAPI\OpenAPI\Models\Shared\IssueTokenRequestTransfer;

$sdk = SDK::builder()
    ->build();

try {
    $request = new IssueTokenRequest();
    $request->amount = 7506.86;
    $request->divisibility = 3154.28;
    $request->fee = 6078.31;
    $request->flags = new IssueTokenRequestFlags();
    $request->flags->splitChange = false;
    $request->issueAddress = 'nemo';
    $request->metadata = new IssueTokenRequestMetadata();
    $request->metadata->description = 'minima';
    $request->metadata->encryptions = [
        new IssueTokenRequestMetadataEncryptions(),
        new IssueTokenRequestMetadataEncryptions(),
        new IssueTokenRequestMetadataEncryptions(),
    ];
    $request->metadata->issuer = 'accusantium';
    $request->metadata->rules = new IssueTokenRequestMetadataRules();
    $request->metadata->rules->expiration = new IssueTokenRequestMetadataRulesExpiration();
    $request->metadata->rules->expiration->locked = false;
    $request->metadata->rules->expiration->validUntil = 4386.01;
    $request->metadata->rules->fees = new IssueTokenRequestMetadataRulesFees();
    $request->metadata->rules->fees->items = [
        new IssueTokenRequestMetadataRulesFeesItems(),
        new IssueTokenRequestMetadataRulesFeesItems(),
        new IssueTokenRequestMetadataRulesFeesItems(),
    ];
    $request->metadata->rules->fees->locked = false;
    $request->metadata->rules->holders = [
        new IssueTokenRequestMetadataRulesHolders(),
        new IssueTokenRequestMetadataRulesHolders(),
        new IssueTokenRequestMetadataRulesHolders(),
        new IssueTokenRequestMetadataRulesHolders(),
    ];
    $request->metadata->tokenName = 'sapiente';
    $request->metadata->urls = [
        new IssueTokenRequestMetadataUrls(),
    ];
    $request->metadata->userData = new IssueTokenRequestMetadataUserData();
    $request->metadata->userData->meta = [
        new IssueTokenRequestMetadataUserDataMeta(),
        new IssueTokenRequestMetadataUserDataMeta(),
        new IssueTokenRequestMetadataUserDataMeta(),
    ];
    $request->reissuable = false;
    $request->transfer = [
        new IssueTokenRequestTransfer(),
    ];

    $response = $sdk->ntp1->issueToken($request);

    if ($response->issueTokenResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## sendToken

Builds an unsigned raw transaction that sends an NTP1 token on the Neblio blockchain.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\SendTokenRequest;
use \OpenAPI\OpenAPI\Models\Shared\SendTokenRequestFlags;
use \OpenAPI\OpenAPI\Models\Shared\SendTokenRequestMetadata;
use \OpenAPI\OpenAPI\Models\Shared\SendTokenRequestMetadataEncryptions;
use \OpenAPI\OpenAPI\Models\Shared\SendTokenRequestMetadataRules;
use \OpenAPI\OpenAPI\Models\Shared\SendTokenRequestMetadataRulesExpiration;
use \OpenAPI\OpenAPI\Models\Shared\SendTokenRequestMetadataRulesFees;
use \OpenAPI\OpenAPI\Models\Shared\SendTokenRequestMetadataRulesFeesItems;
use \OpenAPI\OpenAPI\Models\Shared\SendTokenRequestMetadataRulesHolders;
use \OpenAPI\OpenAPI\Models\Shared\SendTokenRequestMetadataUrls;
use \OpenAPI\OpenAPI\Models\Shared\SendTokenRequestMetadataUserData;
use \OpenAPI\OpenAPI\Models\Shared\SendTokenRequestMetadataUserDataMeta;
use \OpenAPI\OpenAPI\Models\Shared\SendTokenRequestTo;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SendTokenRequest();
    $request->fee = 6350.59;
    $request->flags = new SendTokenRequestFlags();
    $request->flags->splitChange = false;
    $request->from = [
        'repellat',
    ];
    $request->metadata = new SendTokenRequestMetadata();
    $request->metadata->description = 'mollitia';
    $request->metadata->encryptions = [
        new SendTokenRequestMetadataEncryptions(),
        new SendTokenRequestMetadataEncryptions(),
        new SendTokenRequestMetadataEncryptions(),
    ];
    $request->metadata->issuer = 'numquam';
    $request->metadata->rules = new SendTokenRequestMetadataRules();
    $request->metadata->rules->expiration = new SendTokenRequestMetadataRulesExpiration();
    $request->metadata->rules->expiration->locked = false;
    $request->metadata->rules->expiration->validUntil = 4143.69;
    $request->metadata->rules->fees = new SendTokenRequestMetadataRulesFees();
    $request->metadata->rules->fees->items = [
        new SendTokenRequestMetadataRulesFeesItems(),
        new SendTokenRequestMetadataRulesFeesItems(),
    ];
    $request->metadata->rules->fees->locked = false;
    $request->metadata->rules->holders = [
        new SendTokenRequestMetadataRulesHolders(),
        new SendTokenRequestMetadataRulesHolders(),
    ];
    $request->metadata->tokenName = 'velit';
    $request->metadata->urls = [
        new SendTokenRequestMetadataUrls(),
        new SendTokenRequestMetadataUrls(),
        new SendTokenRequestMetadataUrls(),
    ];
    $request->metadata->userData = new SendTokenRequestMetadataUserData();
    $request->metadata->userData->meta = [
        new SendTokenRequestMetadataUserDataMeta(),
    ];
    $request->sendutxo = [
        'vitae',
        'laborum',
    ];
    $request->to = [
        new SendTokenRequestTo(),
        new SendTokenRequestTo(),
        new SendTokenRequestTo(),
    ];

    $response = $sdk->ntp1->sendToken($request);

    if ($response->sendTokenResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
