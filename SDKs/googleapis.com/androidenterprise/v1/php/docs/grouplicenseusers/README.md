# grouplicenseusers

### Available Operations

* [androidenterpriseGrouplicenseusersList](#androidenterprisegrouplicenseuserslist) - Retrieves the IDs of the users who have been granted entitlements under the license. **Note:** This item has been deprecated. New integrations cannot use this method and can refer to our new recommendations.

## androidenterpriseGrouplicenseusersList

Retrieves the IDs of the users who have been granted entitlements under the license. **Note:** This item has been deprecated. New integrations cannot use this method and can refer to our new recommendations.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseGrouplicenseusersListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseGrouplicenseusersListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidenterpriseGrouplicenseusersListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'voluptatibus';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'natus';
    $request->enterpriseId = 'eos';
    $request->fields = 'atque';
    $request->groupLicenseId = 'sit';
    $request->key = 'fugiat';
    $request->oauthToken = 'ab';
    $request->prettyPrint = false;
    $request->quotaUser = 'soluta';
    $request->uploadType = 'dolorum';
    $request->uploadProtocol = 'iusto';

    $requestSecurity = new AndroidenterpriseGrouplicenseusersListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->grouplicenseusers->androidenterpriseGrouplicenseusersList($request, $requestSecurity);

    if ($response->groupLicenseUsersListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
