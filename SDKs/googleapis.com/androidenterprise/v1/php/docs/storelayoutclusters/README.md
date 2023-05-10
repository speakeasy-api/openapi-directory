# storelayoutclusters

### Available Operations

* [androidenterpriseStorelayoutclustersDelete](#androidenterprisestorelayoutclustersdelete) - Deletes a cluster.
* [androidenterpriseStorelayoutclustersGet](#androidenterprisestorelayoutclustersget) - Retrieves details of a cluster.
* [androidenterpriseStorelayoutclustersInsert](#androidenterprisestorelayoutclustersinsert) - Inserts a new cluster in a page.
* [androidenterpriseStorelayoutclustersList](#androidenterprisestorelayoutclusterslist) - Retrieves the details of all clusters on the specified page.
* [androidenterpriseStorelayoutclustersUpdate](#androidenterprisestorelayoutclustersupdate) - Updates a cluster.

## androidenterpriseStorelayoutclustersDelete

Deletes a cluster.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseStorelayoutclustersDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseStorelayoutclustersDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidenterpriseStorelayoutclustersDeleteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'veritatis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'quasi';
    $request->clusterId = 'similique';
    $request->enterpriseId = 'culpa';
    $request->fields = 'aliquid';
    $request->key = 'tenetur';
    $request->oauthToken = 'quae';
    $request->pageId = 'earum';
    $request->prettyPrint = false;
    $request->quotaUser = 'vel';
    $request->uploadType = 'in';
    $request->uploadProtocol = 'eius';

    $requestSecurity = new AndroidenterpriseStorelayoutclustersDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->storelayoutclusters->androidenterpriseStorelayoutclustersDelete($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## androidenterpriseStorelayoutclustersGet

Retrieves details of a cluster.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseStorelayoutclustersGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseStorelayoutclustersGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidenterpriseStorelayoutclustersGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'illum';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'accusantium';
    $request->clusterId = 'aliquam';
    $request->enterpriseId = 'sapiente';
    $request->fields = 'dicta';
    $request->key = 'ullam';
    $request->oauthToken = 'reprehenderit';
    $request->pageId = 'ullam';
    $request->prettyPrint = false;
    $request->quotaUser = 'nisi';
    $request->uploadType = 'aut';
    $request->uploadProtocol = 'voluptatum';

    $requestSecurity = new AndroidenterpriseStorelayoutclustersGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->storelayoutclusters->androidenterpriseStorelayoutclustersGet($request, $requestSecurity);

    if ($response->storeCluster !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## androidenterpriseStorelayoutclustersInsert

Inserts a new cluster in a page.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseStorelayoutclustersInsertRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\StoreCluster;
use \OpenAPI\OpenAPI\Models\Shared\LocalizedText;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseStorelayoutclustersInsertSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidenterpriseStorelayoutclustersInsertRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->storeCluster = new StoreCluster();
    $request->storeCluster->id = 'd68ea19f-1d17-4051-b39d-08086a184039';
    $request->storeCluster->name = [
        new LocalizedText(),
        new LocalizedText(),
    ];
    $request->storeCluster->orderInPage = 'impedit';
    $request->storeCluster->productId = [
        'voluptas',
    ];
    $request->accessToken = 'aut';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'dicta';
    $request->enterpriseId = 'maiores';
    $request->fields = 'natus';
    $request->key = 'velit';
    $request->oauthToken = 'voluptatibus';
    $request->pageId = 'voluptas';
    $request->prettyPrint = false;
    $request->quotaUser = 'asperiores';
    $request->uploadType = 'aperiam';
    $request->uploadProtocol = 'ea';

    $requestSecurity = new AndroidenterpriseStorelayoutclustersInsertSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->storelayoutclusters->androidenterpriseStorelayoutclustersInsert($request, $requestSecurity);

    if ($response->storeCluster !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## androidenterpriseStorelayoutclustersList

Retrieves the details of all clusters on the specified page.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseStorelayoutclustersListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseStorelayoutclustersListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidenterpriseStorelayoutclustersListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'consequuntur';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'officia';
    $request->enterpriseId = 'maxime';
    $request->fields = 'dignissimos';
    $request->key = 'officia';
    $request->oauthToken = 'asperiores';
    $request->pageId = 'nemo';
    $request->prettyPrint = false;
    $request->quotaUser = 'quae';
    $request->uploadType = 'quaerat';
    $request->uploadProtocol = 'porro';

    $requestSecurity = new AndroidenterpriseStorelayoutclustersListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->storelayoutclusters->androidenterpriseStorelayoutclustersList($request, $requestSecurity);

    if ($response->storeLayoutClustersListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## androidenterpriseStorelayoutclustersUpdate

Updates a cluster.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseStorelayoutclustersUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\StoreCluster;
use \OpenAPI\OpenAPI\Models\Shared\LocalizedText;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseStorelayoutclustersUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidenterpriseStorelayoutclustersUpdateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->storeCluster = new StoreCluster();
    $request->storeCluster->id = '413aa63a-ae8d-4678-a4db-b675fd5e60b3';
    $request->storeCluster->name = [
        new LocalizedText(),
        new LocalizedText(),
    ];
    $request->storeCluster->orderInPage = 'exercitationem';
    $request->storeCluster->productId = [
        'facere',
        'numquam',
        'doloribus',
        'suscipit',
    ];
    $request->accessToken = 'reiciendis';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'saepe';
    $request->clusterId = 'necessitatibus';
    $request->enterpriseId = 'dolore';
    $request->fields = 'sunt';
    $request->key = 'asperiores';
    $request->oauthToken = 'adipisci';
    $request->pageId = 'non';
    $request->prettyPrint = false;
    $request->quotaUser = 'amet';
    $request->uploadType = 'beatae';
    $request->uploadProtocol = 'dignissimos';

    $requestSecurity = new AndroidenterpriseStorelayoutclustersUpdateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->storelayoutclusters->androidenterpriseStorelayoutclustersUpdate($request, $requestSecurity);

    if ($response->storeCluster !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
