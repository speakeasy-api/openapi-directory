# projects

### Available Operations

* [dnsProjectsGet](#dnsprojectsget) - Fetches the representation of an existing Project.

## dnsProjectsGet

Fetches the representation of an existing Project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DnsProjectsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DnsProjectsGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DnsProjectsGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DnsProjectsGetSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\DnsProjectsGetSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\DnsProjectsGetSecurityOption4;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DnsProjectsGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'facilis';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'qui';
    $request->clientOperationId = 'quae';
    $request->fields = 'laudantium';
    $request->key = 'odio';
    $request->oauthToken = 'occaecati';
    $request->prettyPrint = false;
    $request->project = 'voluptatibus';
    $request->quotaUser = 'quisquam';
    $request->uploadType = 'vero';
    $request->uploadProtocol = 'omnis';

    $requestSecurity = new DnsProjectsGetSecurity();
    $requestSecurity->option1 = new DnsProjectsGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dnsProjectsGet($request, $requestSecurity);

    if ($response->project !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
