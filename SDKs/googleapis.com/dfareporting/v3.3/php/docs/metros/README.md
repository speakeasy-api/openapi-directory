# metros

### Available Operations

* [dfareportingMetrosList](#dfareportingmetroslist) - Retrieves a list of metros.

## dfareportingMetrosList

Retrieves a list of metros.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingMetrosListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingMetrosListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DfareportingMetrosListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'necessitatibus';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'incidunt';
    $request->fields = 'provident';
    $request->key = 'dolores';
    $request->oauthToken = 'illo';
    $request->prettyPrint = false;
    $request->profileId = 'recusandae';
    $request->quotaUser = 'quod';
    $request->uploadType = 'magni';
    $request->uploadProtocol = 'sit';

    $requestSecurity = new DfareportingMetrosListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->metros->dfareportingMetrosList($request, $requestSecurity);

    if ($response->metrosListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
