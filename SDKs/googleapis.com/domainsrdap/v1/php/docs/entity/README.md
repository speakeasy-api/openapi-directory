# entity

### Available Operations

* [domainsrdapEntityGet](#domainsrdapentityget) - The RDAP API recognizes this command from the RDAP specification but does not support it. The response is a formatted 501 error.

## domainsrdapEntityGet

The RDAP API recognizes this command from the RDAP specification but does not support it. The response is a formatted 501 error.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DomainsrdapEntityGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DomainsrdapEntityGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'repellendus';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quo';
    $request->entityId = 'odit';
    $request->fields = 'at';
    $request->key = 'at';
    $request->oauthToken = 'maiores';
    $request->prettyPrint = false;
    $request->quotaUser = 'molestiae';
    $request->uploadType = 'quod';
    $request->uploadProtocol = 'quod';

    $response = $sdk->entity->domainsrdapEntityGet($request);

    if ($response->rdapResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
