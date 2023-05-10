# managedconfigurationssettings

### Available Operations

* [androidenterpriseManagedconfigurationssettingsList](#androidenterprisemanagedconfigurationssettingslist) - Lists all the managed configurations settings for the specified app.

## androidenterpriseManagedconfigurationssettingsList

Lists all the managed configurations settings for the specified app.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseManagedconfigurationssettingsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseManagedconfigurationssettingsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidenterpriseManagedconfigurationssettingsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'dicta';
    $request->alt = AltEnum::JSON;
    $request->callback = 'maiores';
    $request->enterpriseId = 'quasi';
    $request->fields = 'ex';
    $request->key = 'nulla';
    $request->oauthToken = 'excepturi';
    $request->prettyPrint = false;
    $request->productId = 'voluptatibus';
    $request->quotaUser = 'nostrum';
    $request->uploadType = 'sapiente';
    $request->uploadProtocol = 'quisquam';

    $requestSecurity = new AndroidenterpriseManagedconfigurationssettingsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->managedconfigurationssettings->androidenterpriseManagedconfigurationssettingsList($request, $requestSecurity);

    if ($response->managedConfigurationsSettingsListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
