# grouplicenses

### Available Operations

* [androidenterpriseGrouplicensesGet](#androidenterprisegrouplicensesget) - Retrieves details of an enterprise's group license for a product. **Note:** This item has been deprecated. New integrations cannot use this method and can refer to our new recommendations.
* [androidenterpriseGrouplicensesList](#androidenterprisegrouplicenseslist) - Retrieves IDs of all products for which the enterprise has a group license. **Note:** This item has been deprecated. New integrations cannot use this method and can refer to our new recommendations.

## androidenterpriseGrouplicensesGet

Retrieves details of an enterprise's group license for a product. **Note:** This item has been deprecated. New integrations cannot use this method and can refer to our new recommendations.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseGrouplicensesGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseGrouplicensesGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidenterpriseGrouplicensesGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'aliquid';
    $request->alt = AltEnum::JSON;
    $request->callback = 'dolorem';
    $request->enterpriseId = 'dolor';
    $request->fields = 'qui';
    $request->groupLicenseId = 'ipsum';
    $request->key = 'hic';
    $request->oauthToken = 'excepturi';
    $request->prettyPrint = false;
    $request->quotaUser = 'cum';
    $request->uploadType = 'voluptate';
    $request->uploadProtocol = 'dignissimos';

    $requestSecurity = new AndroidenterpriseGrouplicensesGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->grouplicenses->androidenterpriseGrouplicensesGet($request, $requestSecurity);

    if ($response->groupLicense !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## androidenterpriseGrouplicensesList

Retrieves IDs of all products for which the enterprise has a group license. **Note:** This item has been deprecated. New integrations cannot use this method and can refer to our new recommendations.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseGrouplicensesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseGrouplicensesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidenterpriseGrouplicensesListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'amet';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'numquam';
    $request->enterpriseId = 'veritatis';
    $request->fields = 'ipsa';
    $request->key = 'ipsa';
    $request->oauthToken = 'iure';
    $request->prettyPrint = false;
    $request->quotaUser = 'odio';
    $request->uploadType = 'quaerat';
    $request->uploadProtocol = 'accusamus';

    $requestSecurity = new AndroidenterpriseGrouplicensesListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->grouplicenses->androidenterpriseGrouplicensesList($request, $requestSecurity);

    if ($response->groupLicensesListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
