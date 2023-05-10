# chains

### Available Operations

* [mybusinessChainsGet](#mybusinesschainsget) - Gets the specified chain. Returns `NOT_FOUND` if the chain does not exist.
* [mybusinessChainsSearch](#mybusinesschainssearch) - Searches the chain based on chain name.

## mybusinessChainsGet

Gets the specified chain. Returns `NOT_FOUND` if the chain does not exist.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MybusinessChainsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MybusinessChainsGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'magnam';
    $request->alt = AltEnum::JSON;
    $request->callback = 'esse';
    $request->fields = 'ipsam';
    $request->key = 'sit';
    $request->name = 'Willard Walker IV';
    $request->oauthToken = 'ex';
    $request->prettyPrint = false;
    $request->quotaUser = 'sed';
    $request->uploadType = 'sit';
    $request->uploadProtocol = 'vel';

    $response = $sdk->chains->mybusinessChainsGet($request);

    if ($response->chain !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## mybusinessChainsSearch

Searches the chain based on chain name.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MybusinessChainsSearchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MybusinessChainsSearchRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'saepe';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'consequatur';
    $request->chainDisplayName = 'incidunt';
    $request->fields = 'reiciendis';
    $request->key = 'dolorem';
    $request->oauthToken = 'harum';
    $request->prettyPrint = false;
    $request->quotaUser = 'dicta';
    $request->resultCount = 99416;
    $request->uploadType = 'occaecati';
    $request->uploadProtocol = 'labore';

    $response = $sdk->chains->mybusinessChainsSearch($request);

    if ($response->searchChainsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
