# organizations

### Available Operations

* [cloudprivatecatalogOrganizationsCatalogsSearch](#cloudprivatecatalogorganizationscatalogssearch) - Search Catalog resources that consumers have access to, within the
scope of the consumer cloud resource hierarchy context.
* [cloudprivatecatalogOrganizationsProductsSearch](#cloudprivatecatalogorganizationsproductssearch) - Search Product resources that consumers have access to, within the
scope of the consumer cloud resource hierarchy context.
* [cloudprivatecatalogOrganizationsVersionsSearch](#cloudprivatecatalogorganizationsversionssearch) - Search Version resources that consumers have access to, within the
scope of the consumer cloud resource hierarchy context.

## cloudprivatecatalogOrganizationsCatalogsSearch

Search Catalog resources that consumers have access to, within the
scope of the consumer cloud resource hierarchy context.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudprivatecatalogOrganizationsCatalogsSearchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudprivatecatalogOrganizationsCatalogsSearchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudprivatecatalogOrganizationsCatalogsSearchRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'ipsa';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'tempora';
    $request->fields = 'suscipit';
    $request->key = 'molestiae';
    $request->oauthToken = 'minus';
    $request->pageSize = 812169;
    $request->pageToken = 'voluptatum';
    $request->prettyPrint = false;
    $request->query = 'iusto';
    $request->quotaUser = 'excepturi';
    $request->resource = 'nisi';
    $request->uploadType = 'recusandae';
    $request->uploadProtocol = 'temporibus';

    $requestSecurity = new CloudprivatecatalogOrganizationsCatalogsSearchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->organizations->cloudprivatecatalogOrganizationsCatalogsSearch($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudprivatecatalogOrganizationsProductsSearch

Search Product resources that consumers have access to, within the
scope of the consumer cloud resource hierarchy context.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudprivatecatalogOrganizationsProductsSearchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudprivatecatalogOrganizationsProductsSearchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudprivatecatalogOrganizationsProductsSearchRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'quis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'deserunt';
    $request->fields = 'perferendis';
    $request->key = 'ipsam';
    $request->oauthToken = 'repellendus';
    $request->pageSize = 957156;
    $request->pageToken = 'quo';
    $request->prettyPrint = false;
    $request->query = 'odit';
    $request->quotaUser = 'at';
    $request->resource = 'at';
    $request->uploadType = 'maiores';
    $request->uploadProtocol = 'molestiae';

    $requestSecurity = new CloudprivatecatalogOrganizationsProductsSearchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->organizations->cloudprivatecatalogOrganizationsProductsSearch($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudprivatecatalogOrganizationsVersionsSearch

Search Version resources that consumers have access to, within the
scope of the consumer cloud resource hierarchy context.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudprivatecatalogOrganizationsVersionsSearchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudprivatecatalogOrganizationsVersionsSearchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudprivatecatalogOrganizationsVersionsSearchRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'quod';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'totam';
    $request->fields = 'porro';
    $request->key = 'dolorum';
    $request->oauthToken = 'dicta';
    $request->pageSize = 720633;
    $request->pageToken = 'officia';
    $request->prettyPrint = false;
    $request->query = 'occaecati';
    $request->quotaUser = 'fugit';
    $request->resource = 'deleniti';
    $request->uploadType = 'hic';
    $request->uploadProtocol = 'optio';

    $requestSecurity = new CloudprivatecatalogOrganizationsVersionsSearchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->organizations->cloudprivatecatalogOrganizationsVersionsSearch($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
