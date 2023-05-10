# flags

### Available Operations

* [sqlFlagsList](#sqlflagslist) - Lists all available database flags for Cloud SQL instances.

## sqlFlagsList

Lists all available database flags for Cloud SQL instances.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SqlFlagsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\SqlFlagsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\SqlFlagsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\SqlFlagsListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SqlFlagsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'nam';
    $request->alt = AltEnum::JSON;
    $request->callback = 'pariatur';
    $request->databaseVersion = 'nemo';
    $request->fields = 'voluptatibus';
    $request->key = 'perferendis';
    $request->oauthToken = 'fugiat';
    $request->prettyPrint = false;
    $request->quotaUser = 'amet';
    $request->uploadType = 'aut';
    $request->uploadProtocol = 'cumque';

    $requestSecurity = new SqlFlagsListSecurity();
    $requestSecurity->option1 = new SqlFlagsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->flags->sqlFlagsList($request, $requestSecurity);

    if ($response->flagsListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
