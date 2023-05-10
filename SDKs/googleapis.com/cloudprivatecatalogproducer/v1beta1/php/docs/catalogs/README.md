# catalogs

### Available Operations

* [cloudprivatecatalogproducerCatalogsAssociationsCreate](#cloudprivatecatalogproducercatalogsassociationscreate) - Creates an Association instance under a given Catalog.
* [cloudprivatecatalogproducerCatalogsAssociationsList](#cloudprivatecatalogproducercatalogsassociationslist) - Lists all Association resources under a catalog.
* [cloudprivatecatalogproducerCatalogsCreate](#cloudprivatecatalogproducercatalogscreate) - Creates a new Catalog resource.
* [cloudprivatecatalogproducerCatalogsGetIamPolicy](#cloudprivatecatalogproducercatalogsgetiampolicy) - Gets IAM policy for the specified Catalog.
* [cloudprivatecatalogproducerCatalogsList](#cloudprivatecatalogproducercatalogslist) - Lists Catalog resources that the producer has access to, within the
scope of the parent resource.
* [cloudprivatecatalogproducerCatalogsProductsCopy](#cloudprivatecatalogproducercatalogsproductscopy) - Copies a Product under another Catalog.
* [cloudprivatecatalogproducerCatalogsProductsCreate](#cloudprivatecatalogproducercatalogsproductscreate) - Creates a Product instance under a given Catalog.
* [cloudprivatecatalogproducerCatalogsProductsIconsUpload](#cloudprivatecatalogproducercatalogsproductsiconsupload) - Creates an Icon instance under a given Product.
If Product only has a default icon, a new Icon
instance is created and associated with the given Product.
If Product already has a non-default icon, the action creates
a new Icon instance, associates the newly created
Icon with the given Product and deletes the old icon.
* [cloudprivatecatalogproducerCatalogsProductsList](#cloudprivatecatalogproducercatalogsproductslist) - Lists Product resources that the producer has access to, within the
scope of the parent catalog.
* [cloudprivatecatalogproducerCatalogsProductsVersionsCreate](#cloudprivatecatalogproducercatalogsproductsversionscreate) - Creates a Version instance under a given Product.
* [cloudprivatecatalogproducerCatalogsProductsVersionsDelete](#cloudprivatecatalogproducercatalogsproductsversionsdelete) - Hard deletes a Version.
* [cloudprivatecatalogproducerCatalogsProductsVersionsGet](#cloudprivatecatalogproducercatalogsproductsversionsget) - Returns the requested Version resource.
* [cloudprivatecatalogproducerCatalogsProductsVersionsList](#cloudprivatecatalogproducercatalogsproductsversionslist) - Lists Version resources that the producer has access to, within the
scope of the parent Product.
* [cloudprivatecatalogproducerCatalogsProductsVersionsPatch](#cloudprivatecatalogproducercatalogsproductsversionspatch) - Updates a specific Version resource.
* [cloudprivatecatalogproducerCatalogsSetIamPolicy](#cloudprivatecatalogproducercatalogssetiampolicy) - Sets the IAM policy for the specified Catalog.
* [cloudprivatecatalogproducerCatalogsTestIamPermissions](#cloudprivatecatalogproducercatalogstestiampermissions) - Tests the IAM permissions for the specified Catalog.
* [cloudprivatecatalogproducerCatalogsUndelete](#cloudprivatecatalogproducercatalogsundelete) - Undeletes a deleted Catalog and all resources under it.

## cloudprivatecatalogproducerCatalogsAssociationsCreate

Creates an Association instance under a given Catalog.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudprivatecatalogproducerCatalogsAssociationsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudPrivatecatalogproducerV1beta1CreateAssociationRequest;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudPrivatecatalogproducerV1beta1Association;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudprivatecatalogproducerCatalogsAssociationsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudprivatecatalogproducerCatalogsAssociationsCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleCloudPrivatecatalogproducerV1beta1CreateAssociationRequest = new GoogleCloudPrivatecatalogproducerV1beta1CreateAssociationRequest();
    $request->googleCloudPrivatecatalogproducerV1beta1CreateAssociationRequest->association = new GoogleCloudPrivatecatalogproducerV1beta1Association();
    $request->googleCloudPrivatecatalogproducerV1beta1CreateAssociationRequest->association->createTime = 'molestiae';
    $request->googleCloudPrivatecatalogproducerV1beta1CreateAssociationRequest->association->name = 'Irving Lehner';
    $request->googleCloudPrivatecatalogproducerV1beta1CreateAssociationRequest->association->resource = 'nisi';
    $request->accessToken = 'recusandae';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'ab';
    $request->fields = 'quis';
    $request->key = 'veritatis';
    $request->oauthToken = 'deserunt';
    $request->parent = 'perferendis';
    $request->prettyPrint = false;
    $request->quotaUser = 'ipsam';
    $request->uploadType = 'repellendus';
    $request->uploadProtocol = 'sapiente';

    $requestSecurity = new CloudprivatecatalogproducerCatalogsAssociationsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->catalogs->cloudprivatecatalogproducerCatalogsAssociationsCreate($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudprivatecatalogproducerCatalogsAssociationsList

Lists all Association resources under a catalog.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudprivatecatalogproducerCatalogsAssociationsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudprivatecatalogproducerCatalogsAssociationsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudprivatecatalogproducerCatalogsAssociationsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'odit';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'at';
    $request->fields = 'maiores';
    $request->key = 'molestiae';
    $request->oauthToken = 'quod';
    $request->pageSize = 800911;
    $request->pageToken = 'esse';
    $request->parent = 'totam';
    $request->prettyPrint = false;
    $request->quotaUser = 'porro';
    $request->uploadType = 'dolorum';
    $request->uploadProtocol = 'dicta';

    $requestSecurity = new CloudprivatecatalogproducerCatalogsAssociationsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->catalogs->cloudprivatecatalogproducerCatalogsAssociationsList($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudprivatecatalogproducerCatalogsCreate

Creates a new Catalog resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudprivatecatalogproducerCatalogsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudPrivatecatalogproducerV1beta1Catalog;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudprivatecatalogproducerCatalogsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudprivatecatalogproducerCatalogsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudPrivatecatalogproducerV1beta1Catalog = new GoogleCloudPrivatecatalogproducerV1beta1Catalog();
    $request->googleCloudPrivatecatalogproducerV1beta1Catalog->createTime = 'officia';
    $request->googleCloudPrivatecatalogproducerV1beta1Catalog->description = 'occaecati';
    $request->googleCloudPrivatecatalogproducerV1beta1Catalog->displayName = 'fugit';
    $request->googleCloudPrivatecatalogproducerV1beta1Catalog->name = 'Irvin Rosenbaum III';
    $request->googleCloudPrivatecatalogproducerV1beta1Catalog->parent = 'molestiae';
    $request->googleCloudPrivatecatalogproducerV1beta1Catalog->updateTime = 'modi';
    $request->accessToken = 'qui';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'cum';
    $request->fields = 'esse';
    $request->key = 'ipsum';
    $request->oauthToken = 'excepturi';
    $request->prettyPrint = false;
    $request->quotaUser = 'aspernatur';
    $request->uploadType = 'perferendis';
    $request->uploadProtocol = 'ad';

    $requestSecurity = new CloudprivatecatalogproducerCatalogsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->catalogs->cloudprivatecatalogproducerCatalogsCreate($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudprivatecatalogproducerCatalogsGetIamPolicy

Gets IAM policy for the specified Catalog.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudprivatecatalogproducerCatalogsGetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudprivatecatalogproducerCatalogsGetIamPolicySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudprivatecatalogproducerCatalogsGetIamPolicyRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'sed';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'dolor';
    $request->fields = 'natus';
    $request->key = 'laboriosam';
    $request->oauthToken = 'hic';
    $request->optionsRequestedPolicyVersion = 902599;
    $request->prettyPrint = false;
    $request->quotaUser = 'fuga';
    $request->resource = 'in';
    $request->uploadType = 'corporis';
    $request->uploadProtocol = 'iste';

    $requestSecurity = new CloudprivatecatalogproducerCatalogsGetIamPolicySecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->catalogs->cloudprivatecatalogproducerCatalogsGetIamPolicy($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudprivatecatalogproducerCatalogsList

Lists Catalog resources that the producer has access to, within the
scope of the parent resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudprivatecatalogproducerCatalogsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudprivatecatalogproducerCatalogsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudprivatecatalogproducerCatalogsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'saepe';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'architecto';
    $request->fields = 'ipsa';
    $request->key = 'reiciendis';
    $request->oauthToken = 'est';
    $request->pageSize = 653140;
    $request->pageToken = 'laborum';
    $request->parent = 'dolores';
    $request->prettyPrint = false;
    $request->quotaUser = 'dolorem';
    $request->uploadType = 'corporis';
    $request->uploadProtocol = 'explicabo';

    $requestSecurity = new CloudprivatecatalogproducerCatalogsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->catalogs->cloudprivatecatalogproducerCatalogsList($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudprivatecatalogproducerCatalogsProductsCopy

Copies a Product under another Catalog.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudprivatecatalogproducerCatalogsProductsCopyRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudPrivatecatalogproducerV1beta1CopyProductRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudprivatecatalogproducerCatalogsProductsCopySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudprivatecatalogproducerCatalogsProductsCopyRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudPrivatecatalogproducerV1beta1CopyProductRequest = new GoogleCloudPrivatecatalogproducerV1beta1CopyProductRequest();
    $request->googleCloudPrivatecatalogproducerV1beta1CopyProductRequest->destinationProductName = 'enim';
    $request->accessToken = 'omnis';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'minima';
    $request->fields = 'excepturi';
    $request->key = 'accusantium';
    $request->name = 'Cecilia Yundt MD';
    $request->oauthToken = 'dolorem';
    $request->prettyPrint = false;
    $request->quotaUser = 'culpa';
    $request->uploadType = 'consequuntur';
    $request->uploadProtocol = 'repellat';

    $requestSecurity = new CloudprivatecatalogproducerCatalogsProductsCopySecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->catalogs->cloudprivatecatalogproducerCatalogsProductsCopy($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudprivatecatalogproducerCatalogsProductsCreate

Creates a Product instance under a given Catalog.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudprivatecatalogproducerCatalogsProductsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudPrivatecatalogproducerV1beta1Product;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudprivatecatalogproducerCatalogsProductsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudprivatecatalogproducerCatalogsProductsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudPrivatecatalogproducerV1beta1Product = new GoogleCloudPrivatecatalogproducerV1beta1Product();
    $request->googleCloudPrivatecatalogproducerV1beta1Product->assetType = 'occaecati';
    $request->googleCloudPrivatecatalogproducerV1beta1Product->createTime = 'numquam';
    $request->googleCloudPrivatecatalogproducerV1beta1Product->displayMetadata = [
        'quam' => 'molestiae',
        'velit' => 'error',
    ];
    $request->googleCloudPrivatecatalogproducerV1beta1Product->iconUri = 'quia';
    $request->googleCloudPrivatecatalogproducerV1beta1Product->name = 'Gloria Padberg';
    $request->googleCloudPrivatecatalogproducerV1beta1Product->updateTime = 'odit';
    $request->accessToken = 'quo';
    $request->alt = AltEnum::JSON;
    $request->callback = 'tenetur';
    $request->fields = 'ipsam';
    $request->key = 'id';
    $request->oauthToken = 'possimus';
    $request->parent = 'aut';
    $request->prettyPrint = false;
    $request->quotaUser = 'quasi';
    $request->uploadType = 'error';
    $request->uploadProtocol = 'temporibus';

    $requestSecurity = new CloudprivatecatalogproducerCatalogsProductsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->catalogs->cloudprivatecatalogproducerCatalogsProductsCreate($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudprivatecatalogproducerCatalogsProductsIconsUpload

Creates an Icon instance under a given Product.
If Product only has a default icon, a new Icon
instance is created and associated with the given Product.
If Product already has a non-default icon, the action creates
a new Icon instance, associates the newly created
Icon with the given Product and deletes the old icon.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudprivatecatalogproducerCatalogsProductsIconsUploadRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudPrivatecatalogproducerV1beta1UploadIconRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudprivatecatalogproducerCatalogsProductsIconsUploadSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudprivatecatalogproducerCatalogsProductsIconsUploadRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudPrivatecatalogproducerV1beta1UploadIconRequest = new GoogleCloudPrivatecatalogproducerV1beta1UploadIconRequest();
    $request->googleCloudPrivatecatalogproducerV1beta1UploadIconRequest->icon = 'quasi';
    $request->accessToken = 'reiciendis';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'vero';
    $request->fields = 'nihil';
    $request->key = 'praesentium';
    $request->oauthToken = 'voluptatibus';
    $request->prettyPrint = false;
    $request->product = 'ipsa';
    $request->quotaUser = 'omnis';
    $request->uploadType = 'voluptate';
    $request->uploadProtocol = 'cum';

    $requestSecurity = new CloudprivatecatalogproducerCatalogsProductsIconsUploadSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->catalogs->cloudprivatecatalogproducerCatalogsProductsIconsUpload($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudprivatecatalogproducerCatalogsProductsList

Lists Product resources that the producer has access to, within the
scope of the parent catalog.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudprivatecatalogproducerCatalogsProductsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudprivatecatalogproducerCatalogsProductsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudprivatecatalogproducerCatalogsProductsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'doloremque';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'ut';
    $request->fields = 'maiores';
    $request->filter = 'dicta';
    $request->key = 'corporis';
    $request->oauthToken = 'dolore';
    $request->pageSize = 480894;
    $request->pageToken = 'dicta';
    $request->parent = 'harum';
    $request->prettyPrint = false;
    $request->quotaUser = 'enim';
    $request->uploadType = 'accusamus';
    $request->uploadProtocol = 'commodi';

    $requestSecurity = new CloudprivatecatalogproducerCatalogsProductsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->catalogs->cloudprivatecatalogproducerCatalogsProductsList($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudprivatecatalogproducerCatalogsProductsVersionsCreate

Creates a Version instance under a given Product.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudprivatecatalogproducerCatalogsProductsVersionsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudPrivatecatalogproducerV1beta1Version;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudprivatecatalogproducerCatalogsProductsVersionsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudprivatecatalogproducerCatalogsProductsVersionsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudPrivatecatalogproducerV1beta1Version = new GoogleCloudPrivatecatalogproducerV1beta1Version();
    $request->googleCloudPrivatecatalogproducerV1beta1Version->asset = [
        'ipsum' => 'quidem',
    ];
    $request->googleCloudPrivatecatalogproducerV1beta1Version->createTime = 'molestias';
    $request->googleCloudPrivatecatalogproducerV1beta1Version->description = 'excepturi';
    $request->googleCloudPrivatecatalogproducerV1beta1Version->name = 'Joel Lang';
    $request->googleCloudPrivatecatalogproducerV1beta1Version->originalAsset = [
        'repudiandae' => 'sint',
    ];
    $request->googleCloudPrivatecatalogproducerV1beta1Version->updateTime = 'veritatis';
    $request->accessToken = 'itaque';
    $request->alt = AltEnum::JSON;
    $request->callback = 'enim';
    $request->fields = 'consequatur';
    $request->key = 'est';
    $request->oauthToken = 'quibusdam';
    $request->parent = 'explicabo';
    $request->prettyPrint = false;
    $request->quotaUser = 'deserunt';
    $request->uploadType = 'distinctio';
    $request->uploadProtocol = 'quibusdam';

    $requestSecurity = new CloudprivatecatalogproducerCatalogsProductsVersionsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->catalogs->cloudprivatecatalogproducerCatalogsProductsVersionsCreate($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudprivatecatalogproducerCatalogsProductsVersionsDelete

Hard deletes a Version.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudprivatecatalogproducerCatalogsProductsVersionsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudprivatecatalogproducerCatalogsProductsVersionsDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudprivatecatalogproducerCatalogsProductsVersionsDeleteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'modi';
    $request->alt = AltEnum::JSON;
    $request->callback = 'aliquid';
    $request->fields = 'cupiditate';
    $request->force = false;
    $request->key = 'quos';
    $request->name = 'Louise Simonis Sr.';
    $request->oauthToken = 'dolorum';
    $request->prettyPrint = false;
    $request->quotaUser = 'excepturi';
    $request->uploadType = 'tempora';
    $request->uploadProtocol = 'facilis';

    $requestSecurity = new CloudprivatecatalogproducerCatalogsProductsVersionsDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->catalogs->cloudprivatecatalogproducerCatalogsProductsVersionsDelete($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudprivatecatalogproducerCatalogsProductsVersionsGet

Returns the requested Version resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudprivatecatalogproducerCatalogsProductsVersionsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudprivatecatalogproducerCatalogsProductsVersionsGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudprivatecatalogproducerCatalogsProductsVersionsGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'labore';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'eum';
    $request->fields = 'non';
    $request->key = 'eligendi';
    $request->name = 'Gilbert Medhurst';
    $request->oauthToken = 'officia';
    $request->prettyPrint = false;
    $request->quotaUser = 'dolor';
    $request->uploadType = 'debitis';
    $request->uploadProtocol = 'a';

    $requestSecurity = new CloudprivatecatalogproducerCatalogsProductsVersionsGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->catalogs->cloudprivatecatalogproducerCatalogsProductsVersionsGet($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudprivatecatalogproducerCatalogsProductsVersionsList

Lists Version resources that the producer has access to, within the
scope of the parent Product.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudprivatecatalogproducerCatalogsProductsVersionsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudprivatecatalogproducerCatalogsProductsVersionsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudprivatecatalogproducerCatalogsProductsVersionsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'in';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'illum';
    $request->fields = 'maiores';
    $request->key = 'rerum';
    $request->oauthToken = 'dicta';
    $request->pageSize = 297437;
    $request->pageToken = 'cumque';
    $request->parent = 'facere';
    $request->prettyPrint = false;
    $request->quotaUser = 'ea';
    $request->uploadType = 'aliquid';
    $request->uploadProtocol = 'laborum';

    $requestSecurity = new CloudprivatecatalogproducerCatalogsProductsVersionsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->catalogs->cloudprivatecatalogproducerCatalogsProductsVersionsList($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudprivatecatalogproducerCatalogsProductsVersionsPatch

Updates a specific Version resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudprivatecatalogproducerCatalogsProductsVersionsPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudPrivatecatalogproducerV1beta1Version;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudprivatecatalogproducerCatalogsProductsVersionsPatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudprivatecatalogproducerCatalogsProductsVersionsPatchRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudPrivatecatalogproducerV1beta1Version = new GoogleCloudPrivatecatalogproducerV1beta1Version();
    $request->googleCloudPrivatecatalogproducerV1beta1Version->asset = [
        'occaecati' => 'enim',
    ];
    $request->googleCloudPrivatecatalogproducerV1beta1Version->createTime = 'accusamus';
    $request->googleCloudPrivatecatalogproducerV1beta1Version->description = 'delectus';
    $request->googleCloudPrivatecatalogproducerV1beta1Version->name = 'Rene Reinger';
    $request->googleCloudPrivatecatalogproducerV1beta1Version->originalAsset = [
        'sapiente' => 'amet',
        'deserunt' => 'nisi',
        'vel' => 'natus',
    ];
    $request->googleCloudPrivatecatalogproducerV1beta1Version->updateTime = 'omnis';
    $request->accessToken = 'molestiae';
    $request->alt = AltEnum::JSON;
    $request->callback = 'nihil';
    $request->fields = 'magnam';
    $request->key = 'distinctio';
    $request->name = 'Leroy Greenfelder';
    $request->oauthToken = 'nobis';
    $request->prettyPrint = false;
    $request->quotaUser = 'eum';
    $request->updateMask = 'vero';
    $request->uploadType = 'aspernatur';
    $request->uploadProtocol = 'architecto';

    $requestSecurity = new CloudprivatecatalogproducerCatalogsProductsVersionsPatchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->catalogs->cloudprivatecatalogproducerCatalogsProductsVersionsPatch($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudprivatecatalogproducerCatalogsSetIamPolicy

Sets the IAM policy for the specified Catalog.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudprivatecatalogproducerCatalogsSetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleIamV1SetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\GoogleIamV1Policy;
use \OpenAPI\OpenAPI\Models\Shared\GoogleIamV1AuditConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleIamV1AuditLogConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleIamV1AuditLogConfigLogTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleIamV1Binding;
use \OpenAPI\OpenAPI\Models\Shared\GoogleTypeExpr;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudprivatecatalogproducerCatalogsSetIamPolicySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudprivatecatalogproducerCatalogsSetIamPolicyRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleIamV1SetIamPolicyRequest = new GoogleIamV1SetIamPolicyRequest();
    $request->googleIamV1SetIamPolicyRequest->policy = new GoogleIamV1Policy();
    $request->googleIamV1SetIamPolicyRequest->policy->auditConfigs = [
        new GoogleIamV1AuditConfig(),
    ];
    $request->googleIamV1SetIamPolicyRequest->policy->bindings = [
        new GoogleIamV1Binding(),
        new GoogleIamV1Binding(),
        new GoogleIamV1Binding(),
    ];
    $request->googleIamV1SetIamPolicyRequest->policy->etag = 'ullam';
    $request->googleIamV1SetIamPolicyRequest->policy->version = 590873;
    $request->googleIamV1SetIamPolicyRequest->updateMask = 'quos';
    $request->accessToken = 'sint';
    $request->alt = AltEnum::JSON;
    $request->callback = 'mollitia';
    $request->fields = 'reiciendis';
    $request->key = 'mollitia';
    $request->oauthToken = 'ad';
    $request->prettyPrint = false;
    $request->quotaUser = 'eum';
    $request->resource = 'dolor';
    $request->uploadType = 'necessitatibus';
    $request->uploadProtocol = 'odit';

    $requestSecurity = new CloudprivatecatalogproducerCatalogsSetIamPolicySecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->catalogs->cloudprivatecatalogproducerCatalogsSetIamPolicy($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudprivatecatalogproducerCatalogsTestIamPermissions

Tests the IAM permissions for the specified Catalog.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudprivatecatalogproducerCatalogsTestIamPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleIamV1TestIamPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudprivatecatalogproducerCatalogsTestIamPermissionsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudprivatecatalogproducerCatalogsTestIamPermissionsRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleIamV1TestIamPermissionsRequest = new GoogleIamV1TestIamPermissionsRequest();
    $request->googleIamV1TestIamPermissionsRequest->permissions = [
        'iure',
    ];
    $request->accessToken = 'doloribus';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'eius';
    $request->fields = 'maxime';
    $request->key = 'deleniti';
    $request->oauthToken = 'facilis';
    $request->prettyPrint = false;
    $request->quotaUser = 'in';
    $request->resource = 'architecto';
    $request->uploadType = 'architecto';
    $request->uploadProtocol = 'repudiandae';

    $requestSecurity = new CloudprivatecatalogproducerCatalogsTestIamPermissionsSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->catalogs->cloudprivatecatalogproducerCatalogsTestIamPermissions($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudprivatecatalogproducerCatalogsUndelete

Undeletes a deleted Catalog and all resources under it.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudprivatecatalogproducerCatalogsUndeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudprivatecatalogproducerCatalogsUndeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudprivatecatalogproducerCatalogsUndeleteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->requestBody = [
        'nihil' => 'repellat',
        'quibusdam' => 'sed',
        'saepe' => 'pariatur',
    ];
    $request->accessToken = 'accusantium';
    $request->alt = AltEnum::JSON;
    $request->callback = 'praesentium';
    $request->fields = 'natus';
    $request->key = 'magni';
    $request->name = 'Angelica Stanton';
    $request->oauthToken = 'ea';
    $request->prettyPrint = false;
    $request->quotaUser = 'excepturi';
    $request->uploadType = 'odit';
    $request->uploadProtocol = 'ea';

    $requestSecurity = new CloudprivatecatalogproducerCatalogsUndeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->catalogs->cloudprivatecatalogproducerCatalogsUndelete($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
