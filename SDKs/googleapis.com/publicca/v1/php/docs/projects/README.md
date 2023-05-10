# projects

### Available Operations

* [publiccaProjectsLocationsExternalAccountKeysCreate](#publiccaprojectslocationsexternalaccountkeyscreate) - Creates a new ExternalAccountKey bound to the project.

## publiccaProjectsLocationsExternalAccountKeysCreate

Creates a new ExternalAccountKey bound to the project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PubliccaProjectsLocationsExternalAccountKeysCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\PubliccaProjectsLocationsExternalAccountKeysCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PubliccaProjectsLocationsExternalAccountKeysCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'iure';
    $request->alt = AltEnum::JSON;
    $request->callback = 'debitis';
    $request->fields = 'ipsa';
    $request->key = 'delectus';
    $request->oauthToken = 'tempora';
    $request->parent = 'suscipit';
    $request->prettyPrint = false;
    $request->quotaUser = 'molestiae';
    $request->uploadType = 'minus';
    $request->uploadProtocol = 'placeat';

    $requestSecurity = new PubliccaProjectsLocationsExternalAccountKeysCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->publiccaProjectsLocationsExternalAccountKeysCreate($request, $requestSecurity);

    if ($response->externalAccountKey !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
