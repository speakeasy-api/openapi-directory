# testnetNtp1

### Available Operations

* [testnetBroadcastTx](#testnetbroadcasttx) - Broadcasts a signed raw transaction to the network
* [testnetBurnToken](#testnetburntoken) - Builds a transaction that burns an NTP1 Token
* [testnetGetAddressInfo](#testnetgetaddressinfo) - Information On a Neblio Address
* [testnetGetTokenHolders](#testnetgettokenholders) - Get Addresses Holding a Token
* [testnetGetTokenId](#testnetgettokenid) - Returns the tokenId representing a token
* [testnetGetTokenMetadata](#testnetgettokenmetadata) - Get Metadata of Token
* [testnetGetTokenMetadataOfUtxo](#testnetgettokenmetadataofutxo) - Get UTXO Metadata of Token
* [testnetGetTransactionInfo](#testnetgettransactioninfo) - Information On an NTP1 Transaction
* [testnetIssueToken](#testnetissuetoken) - Builds a transaction that issues a new NTP1 Token
* [testnetSendToken](#testnetsendtoken) - Builds a transaction that sends an NTP1 Token

## testnetBroadcastTx

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
    $request->txHex = 'assumenda';

    $response = $sdk->testnetNtp1->testnetBroadcastTx($request);

    if ($response->broadcastTxResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## testnetBurnToken

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
        new BurnTokenRequestBurn(),
    ];
    $request->fee = 46.95;
    $request->from = [
        'dolorum',
    ];
    $request->transfer = [
        new BurnTokenRequestTransfer(),
        new BurnTokenRequestTransfer(),
        new BurnTokenRequestTransfer(),
    ];

    $response = $sdk->testnetNtp1->testnetBurnToken($request);

    if ($response->burnTokenResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## testnetGetAddressInfo

Returns both NEBL and NTP1 token UTXOs held at the given address.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TestnetGetAddressInfoRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TestnetGetAddressInfoRequest();
    $request->address = '77294 Nigel Neck';

    $response = $sdk->testnetNtp1->testnetGetAddressInfo($request);

    if ($response->getAddressInfoResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## testnetGetTokenHolders

Returns the the the addresses holding a token and how many tokens are held


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TestnetGetTokenHoldersRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TestnetGetTokenHoldersRequest();
    $request->tokenid = 'aliquid';

    $response = $sdk->testnetNtp1->testnetGetTokenHolders($request);

    if ($response->getTokenHoldersResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## testnetGetTokenId

Translates a token symbol to a tokenId if a token exists with that symbol on the network


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TestnetGetTokenIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TestnetGetTokenIdRequest();
    $request->tokensymbol = 'provident';

    $response = $sdk->testnetNtp1->testnetGetTokenId($request);

    if ($response->getTokenIdResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## testnetGetTokenMetadata

Returns the metadata associated with a token.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TestnetGetTokenMetadataRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TestnetGetTokenMetadataRequest();
    $request->tokenid = 'necessitatibus';
    $request->verbosity = 5722.52;

    $response = $sdk->testnetNtp1->testnetGetTokenMetadata($request);

    if ($response->getTokenMetadataResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## testnetGetTokenMetadataOfUtxo

Returns the metadata associated with a token for that specific utxo instead of the issuance transaction.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TestnetGetTokenMetadataOfUtxoRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TestnetGetTokenMetadataOfUtxoRequest();
    $request->tokenid = 'officia';
    $request->utxo = 'dolor';
    $request->verbosity = 8915.55;

    $response = $sdk->testnetNtp1->testnetGetTokenMetadataOfUtxo($request);

    if ($response->getTokenMetadataResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## testnetGetTransactionInfo

Returns detailed information regarding an NTP1 transaction.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TestnetGetTransactionInfoRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TestnetGetTransactionInfoRequest();
    $request->txid = 'a';

    $response = $sdk->testnetNtp1->testnetGetTransactionInfo($request);

    if ($response->getTransactionInfoResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## testnetIssueToken

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
    $request->amount = 6800.56;
    $request->divisibility = 4471.25;
    $request->fee = 4491.98;
    $request->flags = new IssueTokenRequestFlags();
    $request->flags->splitChange = false;
    $request->issueAddress = 'illum';
    $request->metadata = new IssueTokenRequestMetadata();
    $request->metadata->description = 'maiores';
    $request->metadata->encryptions = [
        new IssueTokenRequestMetadataEncryptions(),
        new IssueTokenRequestMetadataEncryptions(),
        new IssueTokenRequestMetadataEncryptions(),
    ];
    $request->metadata->issuer = 'dicta';
    $request->metadata->rules = new IssueTokenRequestMetadataRules();
    $request->metadata->rules->expiration = new IssueTokenRequestMetadataRulesExpiration();
    $request->metadata->rules->expiration->locked = false;
    $request->metadata->rules->expiration->validUntil = 2974.37;
    $request->metadata->rules->fees = new IssueTokenRequestMetadataRulesFees();
    $request->metadata->rules->fees->items = [
        new IssueTokenRequestMetadataRulesFeesItems(),
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
    $request->metadata->tokenName = 'ea';
    $request->metadata->urls = [
        new IssueTokenRequestMetadataUrls(),
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
        new IssueTokenRequestTransfer(),
        new IssueTokenRequestTransfer(),
        new IssueTokenRequestTransfer(),
    ];

    $response = $sdk->testnetNtp1->testnetIssueToken($request);

    if ($response->issueTokenResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## testnetSendToken

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
    $request->fee = 2497.96;
    $request->flags = new SendTokenRequestFlags();
    $request->flags->splitChange = false;
    $request->from = [
        'enim',
        'accusamus',
        'delectus',
    ];
    $request->metadata = new SendTokenRequestMetadata();
    $request->metadata->description = 'quidem';
    $request->metadata->encryptions = [
        new SendTokenRequestMetadataEncryptions(),
        new SendTokenRequestMetadataEncryptions(),
        new SendTokenRequestMetadataEncryptions(),
    ];
    $request->metadata->issuer = 'nam';
    $request->metadata->rules = new SendTokenRequestMetadataRules();
    $request->metadata->rules->expiration = new SendTokenRequestMetadataRulesExpiration();
    $request->metadata->rules->expiration->locked = false;
    $request->metadata->rules->expiration->validUntil = 6596.69;
    $request->metadata->rules->fees = new SendTokenRequestMetadataRulesFees();
    $request->metadata->rules->fees->items = [
        new SendTokenRequestMetadataRulesFeesItems(),
        new SendTokenRequestMetadataRulesFeesItems(),
        new SendTokenRequestMetadataRulesFeesItems(),
    ];
    $request->metadata->rules->fees->locked = false;
    $request->metadata->rules->holders = [
        new SendTokenRequestMetadataRulesHolders(),
        new SendTokenRequestMetadataRulesHolders(),
        new SendTokenRequestMetadataRulesHolders(),
    ];
    $request->metadata->tokenName = 'sapiente';
    $request->metadata->urls = [
        new SendTokenRequestMetadataUrls(),
    ];
    $request->metadata->userData = new SendTokenRequestMetadataUserData();
    $request->metadata->userData->meta = [
        new SendTokenRequestMetadataUserDataMeta(),
        new SendTokenRequestMetadataUserDataMeta(),
        new SendTokenRequestMetadataUserDataMeta(),
    ];
    $request->sendutxo = [
        'vel',
        'natus',
    ];
    $request->to = [
        new SendTokenRequestTo(),
        new SendTokenRequestTo(),
        new SendTokenRequestTo(),
    ];

    $response = $sdk->testnetNtp1->testnetSendToken($request);

    if ($response->sendTokenResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
