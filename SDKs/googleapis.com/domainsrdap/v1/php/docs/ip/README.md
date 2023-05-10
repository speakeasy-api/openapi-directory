# ip

### Available Operations

* [domainsrdapIpGet](#domainsrdapipget) - The RDAP API recognizes this command from the RDAP specification but does not support it. The response is a formatted 501 error.

## domainsrdapIpGet

The RDAP API recognizes this command from the RDAP specification but does not support it. The response is a formatted 501 error.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DomainsrdapIpGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DomainsrdapIpGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'totam';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'dolorum';
    $request->fields = 'dicta';
    $request->ipId = 'nam';
    $request->ipId1 = 'officia';
    $request->key = 'occaecati';
    $request->oauthToken = 'fugit';
    $request->prettyPrint = false;
    $request->quotaUser = 'deleniti';
    $request->uploadType = 'hic';
    $request->uploadProtocol = 'optio';

    $response = $sdk->ip->domainsrdapIpGet($request);

    if ($response->rdapResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
