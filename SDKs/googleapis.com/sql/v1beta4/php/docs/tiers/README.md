# tiers

### Available Operations

* [sqlTiersList](#sqltierslist) - Lists all available machine types (tiers) for Cloud SQL, for example, `db-custom-1-3840`. For related information, see [Pricing](/sql/pricing).

## sqlTiersList

Lists all available machine types (tiers) for Cloud SQL, for example, `db-custom-1-3840`. For related information, see [Pricing](/sql/pricing).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SqlTiersListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\SqlTiersListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\SqlTiersListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\SqlTiersListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SqlTiersListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'eius';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'at';
    $request->fields = 'impedit';
    $request->key = 'eos';
    $request->oauthToken = 'sapiente';
    $request->prettyPrint = false;
    $request->project = 'eum';
    $request->quotaUser = 'dicta';
    $request->uploadType = 'minima';
    $request->uploadProtocol = 'beatae';

    $requestSecurity = new SqlTiersListSecurity();
    $requestSecurity->option1 = new SqlTiersListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->tiers->sqlTiersList($request, $requestSecurity);

    if ($response->tiersListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
