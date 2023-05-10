# chains

### Available Operations

* [mybusinessbusinessinformationChainsSearch](#mybusinessbusinessinformationchainssearch) - Searches the chain based on chain name.

## mybusinessbusinessinformationChainsSearch

Searches the chain based on chain name.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MybusinessbusinessinformationChainsSearchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MybusinessbusinessinformationChainsSearchRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'debitis';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'dolorum';
    $request->chainName = 'in';
    $request->fields = 'in';
    $request->key = 'illum';
    $request->oauthToken = 'maiores';
    $request->pageSize = 699479;
    $request->prettyPrint = false;
    $request->quotaUser = 'dicta';
    $request->uploadType = 'magnam';
    $request->uploadProtocol = 'cumque';

    $response = $sdk->chains->mybusinessbusinessinformationChainsSearch($request);

    if ($response->searchChainsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
