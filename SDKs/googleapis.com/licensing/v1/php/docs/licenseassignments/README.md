# licenseAssignments

### Available Operations

* [licensingLicenseAssignmentsDelete](#licensinglicenseassignmentsdelete) - Revoke a license.
* [licensingLicenseAssignmentsGet](#licensinglicenseassignmentsget) - Get a specific user's license by product SKU.
* [licensingLicenseAssignmentsInsert](#licensinglicenseassignmentsinsert) - Assign a license.
* [licensingLicenseAssignmentsListForProduct](#licensinglicenseassignmentslistforproduct) - List all users assigned licenses for a specific product SKU.
* [licensingLicenseAssignmentsListForProductAndSku](#licensinglicenseassignmentslistforproductandsku) - List all users assigned licenses for a specific product SKU.
* [licensingLicenseAssignmentsPatch](#licensinglicenseassignmentspatch) - Reassign a user's product SKU with a different SKU in the same product. This method supports patch semantics.
* [licensingLicenseAssignmentsUpdate](#licensinglicenseassignmentsupdate) - Reassign a user's product SKU with a different SKU in the same product.

## licensingLicenseAssignmentsDelete

Revoke a license.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\LicensingLicenseAssignmentsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\LicensingLicenseAssignmentsDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new LicensingLicenseAssignmentsDeleteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'debitis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'delectus';
    $request->fields = 'tempora';
    $request->key = 'suscipit';
    $request->oauthToken = 'molestiae';
    $request->prettyPrint = false;
    $request->productId = 'minus';
    $request->quotaUser = 'placeat';
    $request->skuId = 'voluptatum';
    $request->uploadType = 'iusto';
    $request->uploadProtocol = 'excepturi';
    $request->userId = 'nisi';

    $requestSecurity = new LicensingLicenseAssignmentsDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->licenseAssignments->licensingLicenseAssignmentsDelete($request, $requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## licensingLicenseAssignmentsGet

Get a specific user's license by product SKU.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\LicensingLicenseAssignmentsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\LicensingLicenseAssignmentsGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new LicensingLicenseAssignmentsGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'temporibus';
    $request->alt = AltEnum::JSON;
    $request->callback = 'quis';
    $request->fields = 'veritatis';
    $request->key = 'deserunt';
    $request->oauthToken = 'perferendis';
    $request->prettyPrint = false;
    $request->productId = 'ipsam';
    $request->quotaUser = 'repellendus';
    $request->skuId = 'sapiente';
    $request->uploadType = 'quo';
    $request->uploadProtocol = 'odit';
    $request->userId = 'at';

    $requestSecurity = new LicensingLicenseAssignmentsGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->licenseAssignments->licensingLicenseAssignmentsGet($request, $requestSecurity);

    if ($response->licenseAssignment !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## licensingLicenseAssignmentsInsert

Assign a license.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\LicensingLicenseAssignmentsInsertRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\LicenseAssignmentInsert;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\LicensingLicenseAssignmentsInsertSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new LicensingLicenseAssignmentsInsertRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->licenseAssignmentInsert = new LicenseAssignmentInsert();
    $request->licenseAssignmentInsert->userId = 'maiores';
    $request->accessToken = 'molestiae';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quod';
    $request->fields = 'esse';
    $request->key = 'totam';
    $request->oauthToken = 'porro';
    $request->prettyPrint = false;
    $request->productId = 'dolorum';
    $request->quotaUser = 'dicta';
    $request->skuId = 'nam';
    $request->uploadType = 'officia';
    $request->uploadProtocol = 'occaecati';

    $requestSecurity = new LicensingLicenseAssignmentsInsertSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->licenseAssignments->licensingLicenseAssignmentsInsert($request, $requestSecurity);

    if ($response->licenseAssignment !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## licensingLicenseAssignmentsListForProduct

List all users assigned licenses for a specific product SKU.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\LicensingLicenseAssignmentsListForProductRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\LicensingLicenseAssignmentsListForProductSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new LicensingLicenseAssignmentsListForProductRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'deleniti';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'optio';
    $request->customerId = 'totam';
    $request->fields = 'beatae';
    $request->key = 'commodi';
    $request->maxResults = 473600;
    $request->oauthToken = 'modi';
    $request->pageToken = 'qui';
    $request->prettyPrint = false;
    $request->productId = 'impedit';
    $request->quotaUser = 'cum';
    $request->uploadType = 'esse';
    $request->uploadProtocol = 'ipsum';

    $requestSecurity = new LicensingLicenseAssignmentsListForProductSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->licenseAssignments->licensingLicenseAssignmentsListForProduct($request, $requestSecurity);

    if ($response->licenseAssignmentList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## licensingLicenseAssignmentsListForProductAndSku

List all users assigned licenses for a specific product SKU.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\LicensingLicenseAssignmentsListForProductAndSkuRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\LicensingLicenseAssignmentsListForProductAndSkuSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new LicensingLicenseAssignmentsListForProductAndSkuRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'aspernatur';
    $request->alt = AltEnum::JSON;
    $request->callback = 'ad';
    $request->customerId = 'natus';
    $request->fields = 'sed';
    $request->key = 'iste';
    $request->maxResults = 222321;
    $request->oauthToken = 'natus';
    $request->pageToken = 'laboriosam';
    $request->prettyPrint = false;
    $request->productId = 'hic';
    $request->quotaUser = 'saepe';
    $request->skuId = 'fuga';
    $request->uploadType = 'in';
    $request->uploadProtocol = 'corporis';

    $requestSecurity = new LicensingLicenseAssignmentsListForProductAndSkuSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->licenseAssignments->licensingLicenseAssignmentsListForProductAndSku($request, $requestSecurity);

    if ($response->licenseAssignmentList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## licensingLicenseAssignmentsPatch

Reassign a user's product SKU with a different SKU in the same product. This method supports patch semantics.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\LicensingLicenseAssignmentsPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\LicenseAssignment;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\LicensingLicenseAssignmentsPatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new LicensingLicenseAssignmentsPatchRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->licenseAssignment = new LicenseAssignment();
    $request->licenseAssignment->etags = 'iure';
    $request->licenseAssignment->kind = 'saepe';
    $request->licenseAssignment->productId = 'quidem';
    $request->licenseAssignment->productName = 'architecto';
    $request->licenseAssignment->selfLink = 'ipsa';
    $request->licenseAssignment->skuId = 'reiciendis';
    $request->licenseAssignment->skuName = 'est';
    $request->licenseAssignment->userId = 'mollitia';
    $request->accessToken = 'laborum';
    $request->alt = AltEnum::JSON;
    $request->callback = 'dolorem';
    $request->fields = 'corporis';
    $request->key = 'explicabo';
    $request->oauthToken = 'nobis';
    $request->prettyPrint = false;
    $request->productId = 'enim';
    $request->quotaUser = 'omnis';
    $request->skuId = 'nemo';
    $request->uploadType = 'minima';
    $request->uploadProtocol = 'excepturi';
    $request->userId = 'accusantium';

    $requestSecurity = new LicensingLicenseAssignmentsPatchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->licenseAssignments->licensingLicenseAssignmentsPatch($request, $requestSecurity);

    if ($response->licenseAssignment !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## licensingLicenseAssignmentsUpdate

Reassign a user's product SKU with a different SKU in the same product.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\LicensingLicenseAssignmentsUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\LicenseAssignment;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\LicensingLicenseAssignmentsUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new LicensingLicenseAssignmentsUpdateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->licenseAssignment = new LicenseAssignment();
    $request->licenseAssignment->etags = 'culpa';
    $request->licenseAssignment->kind = 'doloribus';
    $request->licenseAssignment->productId = 'sapiente';
    $request->licenseAssignment->productName = 'architecto';
    $request->licenseAssignment->selfLink = 'mollitia';
    $request->licenseAssignment->skuId = 'dolorem';
    $request->licenseAssignment->skuName = 'culpa';
    $request->licenseAssignment->userId = 'consequuntur';
    $request->accessToken = 'repellat';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'occaecati';
    $request->fields = 'numquam';
    $request->key = 'commodi';
    $request->oauthToken = 'quam';
    $request->prettyPrint = false;
    $request->productId = 'molestiae';
    $request->quotaUser = 'velit';
    $request->skuId = 'error';
    $request->uploadType = 'quia';
    $request->uploadProtocol = 'quis';
    $request->userId = 'vitae';

    $requestSecurity = new LicensingLicenseAssignmentsUpdateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->licenseAssignments->licensingLicenseAssignmentsUpdate($request, $requestSecurity);

    if ($response->licenseAssignment !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
