# products

### Available Operations

* [androidenterpriseProductsApprove](#androidenterpriseproductsapprove) -  Approves the specified product and the relevant app permissions, if any. The maximum number of products that you can approve per enterprise customer is 1,000. To learn how to use managed Google Play to design and create a store layout to display approved products to your users, see Store Layout Design. **Note:** This item has been deprecated. New integrations cannot use this method and can refer to our new recommendations. 
* [androidenterpriseProductsGenerateApprovalUrl](#androidenterpriseproductsgenerateapprovalurl) - Generates a URL that can be rendered in an iframe to display the permissions (if any) of a product. An enterprise admin must view these permissions and accept them on behalf of their organization in order to approve that product. Admins should accept the displayed permissions by interacting with a separate UI element in the EMM console, which in turn should trigger the use of this URL as the approvalUrlInfo.approvalUrl property in a Products.approve call to approve the product. This URL can only be used to display permissions for up to 1 day. **Note:** This item has been deprecated. New integrations cannot use this method and can refer to our new recommendations. 
* [androidenterpriseProductsGet](#androidenterpriseproductsget) - Retrieves details of a product for display to an enterprise admin.
* [androidenterpriseProductsGetAppRestrictionsSchema](#androidenterpriseproductsgetapprestrictionsschema) - Retrieves the schema that defines the configurable properties for this product. All products have a schema, but this schema may be empty if no managed configurations have been defined. This schema can be used to populate a UI that allows an admin to configure the product. To apply a managed configuration based on the schema obtained using this API, see Managed Configurations through Play.
* [androidenterpriseProductsGetPermissions](#androidenterpriseproductsgetpermissions) - Retrieves the Android app permissions required by this app.
* [androidenterpriseProductsList](#androidenterpriseproductslist) - Finds approved products that match a query, or all approved products if there is no query. **Note:** This item has been deprecated. New integrations cannot use this method and can refer to our new recommendations. 
* [androidenterpriseProductsUnapprove](#androidenterpriseproductsunapprove) - Unapproves the specified product (and the relevant app permissions, if any) **Note:** This item has been deprecated. New integrations cannot use this method and can refer to our new recommendations.

## androidenterpriseProductsApprove

 Approves the specified product and the relevant app permissions, if any. The maximum number of products that you can approve per enterprise customer is 1,000. To learn how to use managed Google Play to design and create a store layout to display approved products to your users, see Store Layout Design. **Note:** This item has been deprecated. New integrations cannot use this method and can refer to our new recommendations. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseProductsApproveRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ProductsApproveRequest;
use \OpenAPI\OpenAPI\Models\Shared\ApprovalUrlInfo;
use \OpenAPI\OpenAPI\Models\Shared\ProductsApproveRequestApprovedPermissionsEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseProductsApproveSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidenterpriseProductsApproveRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->productsApproveRequest = new ProductsApproveRequest();
    $request->productsApproveRequest->approvalUrlInfo = new ApprovalUrlInfo();
    $request->productsApproveRequest->approvalUrlInfo->approvalUrl = 'minima';
    $request->productsApproveRequest->approvedPermissions = ProductsApproveRequestApprovedPermissionsEnum::CURRENT_PERMISSIONS_ONLY;
    $request->accessToken = 'a';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'aut';
    $request->enterpriseId = 'aut';
    $request->fields = 'deleniti';
    $request->key = 'impedit';
    $request->oauthToken = 'aliquam';
    $request->prettyPrint = false;
    $request->productId = 'fugit';
    $request->quotaUser = 'accusamus';
    $request->uploadType = 'inventore';
    $request->uploadProtocol = 'non';

    $requestSecurity = new AndroidenterpriseProductsApproveSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->products->androidenterpriseProductsApprove($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## androidenterpriseProductsGenerateApprovalUrl

Generates a URL that can be rendered in an iframe to display the permissions (if any) of a product. An enterprise admin must view these permissions and accept them on behalf of their organization in order to approve that product. Admins should accept the displayed permissions by interacting with a separate UI element in the EMM console, which in turn should trigger the use of this URL as the approvalUrlInfo.approvalUrl property in a Products.approve call to approve the product. This URL can only be used to display permissions for up to 1 day. **Note:** This item has been deprecated. New integrations cannot use this method and can refer to our new recommendations. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseProductsGenerateApprovalUrlRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseProductsGenerateApprovalUrlSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidenterpriseProductsGenerateApprovalUrlRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'dolorum';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'placeat';
    $request->enterpriseId = 'velit';
    $request->fields = 'eum';
    $request->key = 'autem';
    $request->languageCode = 'nobis';
    $request->oauthToken = 'quas';
    $request->prettyPrint = false;
    $request->productId = 'assumenda';
    $request->quotaUser = 'nulla';
    $request->uploadType = 'voluptas';
    $request->uploadProtocol = 'libero';

    $requestSecurity = new AndroidenterpriseProductsGenerateApprovalUrlSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->products->androidenterpriseProductsGenerateApprovalUrl($request, $requestSecurity);

    if ($response->productsGenerateApprovalUrlResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## androidenterpriseProductsGet

Retrieves details of a product for display to an enterprise admin.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseProductsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseProductsGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidenterpriseProductsGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'tempora';
    $request->alt = AltEnum::JSON;
    $request->callback = 'explicabo';
    $request->enterpriseId = 'provident';
    $request->fields = 'ipsa';
    $request->key = 'molestiae';
    $request->language = 'magnam';
    $request->oauthToken = 'odio';
    $request->prettyPrint = false;
    $request->productId = 'eius';
    $request->quotaUser = 'esse';
    $request->uploadType = 'esse';
    $request->uploadProtocol = 'rem';

    $requestSecurity = new AndroidenterpriseProductsGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->products->androidenterpriseProductsGet($request, $requestSecurity);

    if ($response->product !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## androidenterpriseProductsGetAppRestrictionsSchema

Retrieves the schema that defines the configurable properties for this product. All products have a schema, but this schema may be empty if no managed configurations have been defined. This schema can be used to populate a UI that allows an admin to configure the product. To apply a managed configuration based on the schema obtained using this API, see Managed Configurations through Play.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseProductsGetAppRestrictionsSchemaRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseProductsGetAppRestrictionsSchemaSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidenterpriseProductsGetAppRestrictionsSchemaRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'reprehenderit';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'fugiat';
    $request->enterpriseId = 'ut';
    $request->fields = 'eum';
    $request->key = 'suscipit';
    $request->language = 'assumenda';
    $request->oauthToken = 'eos';
    $request->prettyPrint = false;
    $request->productId = 'praesentium';
    $request->quotaUser = 'quisquam';
    $request->uploadType = 'veritatis';
    $request->uploadProtocol = 'ipsa';

    $requestSecurity = new AndroidenterpriseProductsGetAppRestrictionsSchemaSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->products->androidenterpriseProductsGetAppRestrictionsSchema($request, $requestSecurity);

    if ($response->appRestrictionsSchema !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## androidenterpriseProductsGetPermissions

Retrieves the Android app permissions required by this app.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseProductsGetPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseProductsGetPermissionsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidenterpriseProductsGetPermissionsRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'quidem';
    $request->alt = AltEnum::JSON;
    $request->callback = 'quo';
    $request->enterpriseId = 'illum';
    $request->fields = 'quo';
    $request->key = 'fuga';
    $request->oauthToken = 'eius';
    $request->prettyPrint = false;
    $request->productId = 'eos';
    $request->quotaUser = 'voluptas';
    $request->uploadType = 'ab';
    $request->uploadProtocol = 'cupiditate';

    $requestSecurity = new AndroidenterpriseProductsGetPermissionsSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->products->androidenterpriseProductsGetPermissions($request, $requestSecurity);

    if ($response->productPermissions !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## androidenterpriseProductsList

Finds approved products that match a query, or all approved products if there is no query. **Note:** This item has been deprecated. New integrations cannot use this method and can refer to our new recommendations. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseProductsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseProductsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidenterpriseProductsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'tempora';
    $request->alt = AltEnum::PROTO;
    $request->approved = false;
    $request->callback = 'ipsam';
    $request->enterpriseId = 'aspernatur';
    $request->fields = 'sequi';
    $request->key = 'quo';
    $request->language = 'esse';
    $request->maxResults = 925164;
    $request->oauthToken = 'aperiam';
    $request->prettyPrint = false;
    $request->query = 'distinctio';
    $request->quotaUser = 'quod';
    $request->token = 'dignissimos';
    $request->uploadType = 'inventore';
    $request->uploadProtocol = 'nihil';

    $requestSecurity = new AndroidenterpriseProductsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->products->androidenterpriseProductsList($request, $requestSecurity);

    if ($response->productsListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## androidenterpriseProductsUnapprove

Unapproves the specified product (and the relevant app permissions, if any) **Note:** This item has been deprecated. New integrations cannot use this method and can refer to our new recommendations.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseProductsUnapproveRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseProductsUnapproveSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidenterpriseProductsUnapproveRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'accusamus';
    $request->alt = AltEnum::JSON;
    $request->callback = 'odio';
    $request->enterpriseId = 'occaecati';
    $request->fields = 'commodi';
    $request->key = 'sapiente';
    $request->oauthToken = 'dolores';
    $request->prettyPrint = false;
    $request->productId = 'deserunt';
    $request->quotaUser = 'molestiae';
    $request->uploadType = 'accusantium';
    $request->uploadProtocol = 'porro';

    $requestSecurity = new AndroidenterpriseProductsUnapproveSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->products->androidenterpriseProductsUnapprove($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
