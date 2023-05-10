# accounts

### Available Operations

* [manufacturersAccountsLanguagesProductCertificationsDelete](#manufacturersaccountslanguagesproductcertificationsdelete) - Deletes a product certification by its name. This method can only be called by certification bodies.
* [manufacturersAccountsLanguagesProductCertificationsGet](#manufacturersaccountslanguagesproductcertificationsget) - Gets a product certification by its name. This method can only be called by certification bodies.
* [manufacturersAccountsLanguagesProductCertificationsList](#manufacturersaccountslanguagesproductcertificationslist) - Lists product certifications from a specified certification body. This method can only be called by certification bodies.
* [manufacturersAccountsLanguagesProductCertificationsPatch](#manufacturersaccountslanguagesproductcertificationspatch) - Updates (or creates if allow_missing = true) a product certification which links certifications with products. This method can only be called by certification bodies.
* [manufacturersAccountsProductsDelete](#manufacturersaccountsproductsdelete) - Deletes the product from a Manufacturer Center account.
* [manufacturersAccountsProductsGet](#manufacturersaccountsproductsget) - Gets the product from a Manufacturer Center account, including product issues. A recently updated product takes around 15 minutes to process. Changes are only visible after it has been processed. While some issues may be available once the product has been processed, other issues may take days to appear.
* [manufacturersAccountsProductsList](#manufacturersaccountsproductslist) - Lists all the products in a Manufacturer Center account.
* [manufacturersAccountsProductsUpdate](#manufacturersaccountsproductsupdate) - Inserts or updates the attributes of the product in a Manufacturer Center account. Creates a product with the provided attributes. If the product already exists, then all attributes are replaced with the new ones. The checks at upload time are minimal. All required attributes need to be present for a product to be valid. Issues may show up later after the API has accepted a new upload for a product and it is possible to overwrite an existing valid product with an invalid product. To detect this, you should retrieve the product and check it for issues once the new version is available. Uploaded attributes first need to be processed before they can be retrieved. Until then, new products will be unavailable, and retrieval of previously uploaded products will return the original state of the product.

## manufacturersAccountsLanguagesProductCertificationsDelete

Deletes a product certification by its name. This method can only be called by certification bodies.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ManufacturersAccountsLanguagesProductCertificationsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ManufacturersAccountsLanguagesProductCertificationsDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ManufacturersAccountsLanguagesProductCertificationsDeleteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'delectus';
    $request->alt = AltEnum::JSON;
    $request->callback = 'suscipit';
    $request->fields = 'molestiae';
    $request->key = 'minus';
    $request->name = 'Ken Kshlerin';
    $request->oauthToken = 'recusandae';
    $request->prettyPrint = false;
    $request->quotaUser = 'temporibus';
    $request->uploadType = 'ab';
    $request->uploadProtocol = 'quis';

    $requestSecurity = new ManufacturersAccountsLanguagesProductCertificationsDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->manufacturersAccountsLanguagesProductCertificationsDelete($request, $requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## manufacturersAccountsLanguagesProductCertificationsGet

Gets a product certification by its name. This method can only be called by certification bodies.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ManufacturersAccountsLanguagesProductCertificationsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ManufacturersAccountsLanguagesProductCertificationsGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ManufacturersAccountsLanguagesProductCertificationsGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'deserunt';
    $request->alt = AltEnum::JSON;
    $request->callback = 'ipsam';
    $request->fields = 'repellendus';
    $request->key = 'sapiente';
    $request->name = 'Fred Strosin';
    $request->oauthToken = 'molestiae';
    $request->prettyPrint = false;
    $request->quotaUser = 'quod';
    $request->uploadType = 'quod';
    $request->uploadProtocol = 'esse';

    $requestSecurity = new ManufacturersAccountsLanguagesProductCertificationsGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->manufacturersAccountsLanguagesProductCertificationsGet($request, $requestSecurity);

    if ($response->productCertification !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## manufacturersAccountsLanguagesProductCertificationsList

Lists product certifications from a specified certification body. This method can only be called by certification bodies.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ManufacturersAccountsLanguagesProductCertificationsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ManufacturersAccountsLanguagesProductCertificationsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ManufacturersAccountsLanguagesProductCertificationsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'porro';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'dicta';
    $request->fields = 'nam';
    $request->key = 'officia';
    $request->oauthToken = 'occaecati';
    $request->pageSize = 143353;
    $request->pageToken = 'deleniti';
    $request->parent = 'hic';
    $request->prettyPrint = false;
    $request->quotaUser = 'optio';
    $request->uploadType = 'totam';
    $request->uploadProtocol = 'beatae';

    $requestSecurity = new ManufacturersAccountsLanguagesProductCertificationsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->manufacturersAccountsLanguagesProductCertificationsList($request, $requestSecurity);

    if ($response->listProductCertificationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## manufacturersAccountsLanguagesProductCertificationsPatch

Updates (or creates if allow_missing = true) a product certification which links certifications with products. This method can only be called by certification bodies.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ManufacturersAccountsLanguagesProductCertificationsPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ProductCertificationInput;
use \OpenAPI\OpenAPI\Models\Shared\Certification;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ManufacturersAccountsLanguagesProductCertificationsPatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ManufacturersAccountsLanguagesProductCertificationsPatchRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->productCertificationInput = new ProductCertificationInput();
    $request->productCertificationInput->brand = 'molestiae';
    $request->productCertificationInput->certification = [
        new Certification(),
        new Certification(),
    ];
    $request->productCertificationInput->countryCode = [
        'impedit',
    ];
    $request->productCertificationInput->mpn = [
        'esse',
        'ipsum',
        'excepturi',
    ];
    $request->productCertificationInput->name = 'Dorothy Hane';
    $request->productCertificationInput->productCode = [
        'dolor',
        'natus',
        'laboriosam',
    ];
    $request->productCertificationInput->productType = [
        'saepe',
        'fuga',
        'in',
        'corporis',
    ];
    $request->productCertificationInput->title = 'Miss';
    $request->accessToken = 'iure';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quidem';
    $request->fields = 'architecto';
    $request->key = 'ipsa';
    $request->name = 'Carlton O'Hara';
    $request->oauthToken = 'dolorem';
    $request->prettyPrint = false;
    $request->quotaUser = 'corporis';
    $request->updateMask = 'explicabo';
    $request->uploadType = 'nobis';
    $request->uploadProtocol = 'enim';

    $requestSecurity = new ManufacturersAccountsLanguagesProductCertificationsPatchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->manufacturersAccountsLanguagesProductCertificationsPatch($request, $requestSecurity);

    if ($response->productCertification !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## manufacturersAccountsProductsDelete

Deletes the product from a Manufacturer Center account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ManufacturersAccountsProductsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ManufacturersAccountsProductsDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ManufacturersAccountsProductsDeleteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'nemo';
    $request->alt = AltEnum::JSON;
    $request->callback = 'excepturi';
    $request->fields = 'accusantium';
    $request->key = 'iure';
    $request->name = 'Miss Aubrey Williamson';
    $request->oauthToken = 'culpa';
    $request->parent = 'consequuntur';
    $request->prettyPrint = false;
    $request->quotaUser = 'repellat';
    $request->uploadType = 'mollitia';
    $request->uploadProtocol = 'occaecati';

    $requestSecurity = new ManufacturersAccountsProductsDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->manufacturersAccountsProductsDelete($request, $requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## manufacturersAccountsProductsGet

Gets the product from a Manufacturer Center account, including product issues. A recently updated product takes around 15 minutes to process. Changes are only visible after it has been processed. While some issues may be available once the product has been processed, other issues may take days to appear.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ManufacturersAccountsProductsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ManufacturersAccountsProductsGetIncludeEnum;
use \OpenAPI\OpenAPI\Models\Operations\ManufacturersAccountsProductsGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ManufacturersAccountsProductsGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'commodi';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'molestiae';
    $request->fields = 'velit';
    $request->include = [
        ManufacturersAccountsProductsGetIncludeEnum::UNKNOWN,
        ManufacturersAccountsProductsGetIncludeEnum::ATTRIBUTES,
        ManufacturersAccountsProductsGetIncludeEnum::UNKNOWN,
    ];
    $request->key = 'laborum';
    $request->name = 'Bill Conn';
    $request->oauthToken = 'tenetur';
    $request->parent = 'ipsam';
    $request->prettyPrint = false;
    $request->quotaUser = 'id';
    $request->uploadType = 'possimus';
    $request->uploadProtocol = 'aut';

    $requestSecurity = new ManufacturersAccountsProductsGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->manufacturersAccountsProductsGet($request, $requestSecurity);

    if ($response->product !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## manufacturersAccountsProductsList

Lists all the products in a Manufacturer Center account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ManufacturersAccountsProductsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ManufacturersAccountsProductsListIncludeEnum;
use \OpenAPI\OpenAPI\Models\Operations\ManufacturersAccountsProductsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ManufacturersAccountsProductsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'error';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'laborum';
    $request->fields = 'quasi';
    $request->include = [
        ManufacturersAccountsProductsListIncludeEnum::DESTINATION_STATUSES,
        ManufacturersAccountsProductsListIncludeEnum::DESTINATION_STATUSES,
        ManufacturersAccountsProductsListIncludeEnum::ATTRIBUTES,
        ManufacturersAccountsProductsListIncludeEnum::ISSUES,
    ];
    $request->key = 'voluptatibus';
    $request->oauthToken = 'ipsa';
    $request->pageSize = 604846;
    $request->pageToken = 'voluptate';
    $request->parent = 'cum';
    $request->prettyPrint = false;
    $request->quotaUser = 'perferendis';
    $request->uploadType = 'doloremque';
    $request->uploadProtocol = 'reprehenderit';

    $requestSecurity = new ManufacturersAccountsProductsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->manufacturersAccountsProductsList($request, $requestSecurity);

    if ($response->listProductsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## manufacturersAccountsProductsUpdate

Inserts or updates the attributes of the product in a Manufacturer Center account. Creates a product with the provided attributes. If the product already exists, then all attributes are replaced with the new ones. The checks at upload time are minimal. All required attributes need to be present for a product to be valid. Issues may show up later after the API has accepted a new upload for a product and it is possible to overwrite an existing valid product with an invalid product. To detect this, you should retrieve the product and check it for issues once the new version is available. Uploaded attributes first need to be processed before they can be retrieved. Until then, new products will be unavailable, and retrieval of previously uploaded products will return the original state of the product.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ManufacturersAccountsProductsUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Attributes;
use \OpenAPI\OpenAPI\Models\Shared\Image;
use \OpenAPI\OpenAPI\Models\Shared\ImageStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\ImageTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Capacity;
use \OpenAPI\OpenAPI\Models\Shared\Count;
use \OpenAPI\OpenAPI\Models\Shared\FeatureDescription;
use \OpenAPI\OpenAPI\Models\Shared\Grocery;
use \OpenAPI\OpenAPI\Models\Shared\Nutrition;
use \OpenAPI\OpenAPI\Models\Shared\FloatUnit;
use \OpenAPI\OpenAPI\Models\Shared\VoluntaryNutritionFact;
use \OpenAPI\OpenAPI\Models\Shared\ProductDetail;
use \OpenAPI\OpenAPI\Models\Shared\Price;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ManufacturersAccountsProductsUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ManufacturersAccountsProductsUpdateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->attributes = new Attributes();
    $request->attributes->additionalImageLink = [
        new Image(),
        new Image(),
        new Image(),
        new Image(),
    ];
    $request->attributes->ageGroup = 'dicta';
    $request->attributes->brand = 'corporis';
    $request->attributes->capacity = new Capacity();
    $request->attributes->capacity->unit = 'dolore';
    $request->attributes->capacity->value = 'iusto';
    $request->attributes->color = 'dicta';
    $request->attributes->count = new Count();
    $request->attributes->count->unit = 'harum';
    $request->attributes->count->value = 'enim';
    $request->attributes->description = 'accusamus';
    $request->attributes->disclosureDate = 'commodi';
    $request->attributes->excludedDestination = [
        'quae',
        'ipsum',
        'quidem',
        'molestias',
    ];
    $request->attributes->featureDescription = [
        new FeatureDescription(),
        new FeatureDescription(),
        new FeatureDescription(),
    ];
    $request->attributes->flavor = 'pariatur';
    $request->attributes->format = 'modi';
    $request->attributes->gender = 'male';
    $request->attributes->grocery = new Grocery();
    $request->attributes->grocery->activeIngredients = 'rem';
    $request->attributes->grocery->alcoholByVolume = 9167.23;
    $request->attributes->grocery->allergens = 'quasi';
    $request->attributes->grocery->derivedNutritionClaim = [
        'sint',
        'veritatis',
        'itaque',
        'incidunt',
    ];
    $request->attributes->grocery->directions = 'enim';
    $request->attributes->grocery->indications = 'consequatur';
    $request->attributes->grocery->ingredients = 'est';
    $request->attributes->grocery->nutritionClaim = [
        'explicabo',
        'deserunt',
        'distinctio',
        'quibusdam',
    ];
    $request->attributes->grocery->storageInstructions = 'labore';
    $request->attributes->gtin = [
        'qui',
        'aliquid',
    ];
    $request->attributes->imageLink = new Image();
    $request->attributes->imageLink->imageUrl = 'cupiditate';
    $request->attributes->imageLink->status = ImageStatusEnum::PROCESSING_ERROR;
    $request->attributes->imageLink->type = ImageTypeEnum::TYPE_UNSPECIFIED;
    $request->attributes->includedDestination = [
        'assumenda',
    ];
    $request->attributes->itemGroupId = 'ipsam';
    $request->attributes->material = 'alias';
    $request->attributes->mpn = 'fugit';
    $request->attributes->nutrition = new Nutrition();
    $request->attributes->nutrition->addedSugars = new FloatUnit();
    $request->attributes->nutrition->addedSugars->amount = 6778.17;
    $request->attributes->nutrition->addedSugars->unit = 'excepturi';
    $request->attributes->nutrition->addedSugarsDailyPercentage = 2700.08;
    $request->attributes->nutrition->calcium = new FloatUnit();
    $request->attributes->nutrition->calcium->amount = 7037.37;
    $request->attributes->nutrition->calcium->unit = 'tempore';
    $request->attributes->nutrition->calciumDailyPercentage = 2884.76;
    $request->attributes->nutrition->cholesterol = new FloatUnit();
    $request->attributes->nutrition->cholesterol->amount = 9621.89;
    $request->attributes->nutrition->cholesterol->unit = 'eum';
    $request->attributes->nutrition->cholesterolDailyPercentage = 2487.53;
    $request->attributes->nutrition->dietaryFiber = new FloatUnit();
    $request->attributes->nutrition->dietaryFiber->amount = 7561.07;
    $request->attributes->nutrition->dietaryFiber->unit = 'sint';
    $request->attributes->nutrition->dietaryFiberDailyPercentage = 3960.98;
    $request->attributes->nutrition->energy = new FloatUnit();
    $request->attributes->nutrition->energy->amount = 5920.42;
    $request->attributes->nutrition->energy->unit = 'necessitatibus';
    $request->attributes->nutrition->energyFromFat = new FloatUnit();
    $request->attributes->nutrition->energyFromFat->amount = 5722.52;
    $request->attributes->nutrition->energyFromFat->unit = 'officia';
    $request->attributes->nutrition->folateDailyPercentage = 2230.81;
    $request->attributes->nutrition->folateFolicAcid = new FloatUnit();
    $request->attributes->nutrition->folateFolicAcid->amount = 8915.55;
    $request->attributes->nutrition->folateFolicAcid->unit = 'a';
    $request->attributes->nutrition->folateMcgDfe = 6800.56;
    $request->attributes->nutrition->iron = new FloatUnit();
    $request->attributes->nutrition->iron->amount = 4471.25;
    $request->attributes->nutrition->iron->unit = 'in';
    $request->attributes->nutrition->ironDailyPercentage = 8464.09;
    $request->attributes->nutrition->monounsaturatedFat = new FloatUnit();
    $request->attributes->nutrition->monounsaturatedFat->amount = 9785.71;
    $request->attributes->nutrition->monounsaturatedFat->unit = 'rerum';
    $request->attributes->nutrition->nutritionFactMeasure = 'dicta';
    $request->attributes->nutrition->polyols = new FloatUnit();
    $request->attributes->nutrition->polyols->amount = 2974.37;
    $request->attributes->nutrition->polyols->unit = 'cumque';
    $request->attributes->nutrition->polyunsaturatedFat = new FloatUnit();
    $request->attributes->nutrition->polyunsaturatedFat->amount = 8137.98;
    $request->attributes->nutrition->polyunsaturatedFat->unit = 'ea';
    $request->attributes->nutrition->potassium = new FloatUnit();
    $request->attributes->nutrition->potassium->amount = 3965.06;
    $request->attributes->nutrition->potassium->unit = 'laborum';
    $request->attributes->nutrition->potassiumDailyPercentage = 8811.04;
    $request->attributes->nutrition->preparedSizeDescription = 'non';
    $request->attributes->nutrition->protein = new FloatUnit();
    $request->attributes->nutrition->protein->amount = 5812.73;
    $request->attributes->nutrition->protein->unit = 'enim';
    $request->attributes->nutrition->proteinDailyPercentage = 8817.36;
    $request->attributes->nutrition->saturatedFat = new FloatUnit();
    $request->attributes->nutrition->saturatedFat->amount = 9654.17;
    $request->attributes->nutrition->saturatedFat->unit = 'quidem';
    $request->attributes->nutrition->saturatedFatDailyPercentage = 5884.65;
    $request->attributes->nutrition->servingSizeDescription = 'nam';
    $request->attributes->nutrition->servingSizeMeasure = new FloatUnit();
    $request->attributes->nutrition->servingSizeMeasure->amount = 6596.69;
    $request->attributes->nutrition->servingSizeMeasure->unit = 'blanditiis';
    $request->attributes->nutrition->servingsPerContainer = 'deleniti';
    $request->attributes->nutrition->sodium = new FloatUnit();
    $request->attributes->nutrition->sodium->amount = 9560.84;
    $request->attributes->nutrition->sodium->unit = 'amet';
    $request->attributes->nutrition->sodiumDailyPercentage = 6439.9;
    $request->attributes->nutrition->starch = new FloatUnit();
    $request->attributes->nutrition->starch->amount = 3948.69;
    $request->attributes->nutrition->starch->unit = 'vel';
    $request->attributes->nutrition->totalCarbohydrate = new FloatUnit();
    $request->attributes->nutrition->totalCarbohydrate->amount = 6188.09;
    $request->attributes->nutrition->totalCarbohydrate->unit = 'omnis';
    $request->attributes->nutrition->totalCarbohydrateDailyPercentage = 4748.67;
    $request->attributes->nutrition->totalFat = new FloatUnit();
    $request->attributes->nutrition->totalFat->amount = 191.93;
    $request->attributes->nutrition->totalFat->unit = 'nihil';
    $request->attributes->nutrition->totalFatDailyPercentage = 3015.75;
    $request->attributes->nutrition->totalSugars = new FloatUnit();
    $request->attributes->nutrition->totalSugars->amount = 7160.75;
    $request->attributes->nutrition->totalSugars->unit = 'id';
    $request->attributes->nutrition->totalSugarsDailyPercentage = 2879.91;
    $request->attributes->nutrition->transFat = new FloatUnit();
    $request->attributes->nutrition->transFat->amount = 2900.77;
    $request->attributes->nutrition->transFat->unit = 'suscipit';
    $request->attributes->nutrition->transFatDailyPercentage = 6180.16;
    $request->attributes->nutrition->vitaminD = new FloatUnit();
    $request->attributes->nutrition->vitaminD->amount = 7491.7;
    $request->attributes->nutrition->vitaminD->unit = 'eum';
    $request->attributes->nutrition->vitaminDDailyPercentage = 8784.53;
    $request->attributes->nutrition->voluntaryNutritionFact = [
        new VoluntaryNutritionFact(),
    ];
    $request->attributes->pattern = 'architecto';
    $request->attributes->productDetail = [
        new ProductDetail(),
        new ProductDetail(),
    ];
    $request->attributes->productHighlight = [
        'excepturi',
    ];
    $request->attributes->productLine = 'ullam';
    $request->attributes->productName = 'provident';
    $request->attributes->productPageUrl = 'quos';
    $request->attributes->productType = [
        'accusantium',
        'mollitia',
        'reiciendis',
    ];
    $request->attributes->releaseDate = 'mollitia';
    $request->attributes->richProductContent = [
        'eum',
        'dolor',
    ];
    $request->attributes->scent = 'necessitatibus';
    $request->attributes->size = 'odit';
    $request->attributes->sizeSystem = 'nemo';
    $request->attributes->sizeType = [
        'iure',
    ];
    $request->attributes->suggestedRetailPrice = new Price();
    $request->attributes->suggestedRetailPrice->amount = 'doloribus';
    $request->attributes->suggestedRetailPrice->currency = 'debitis';
    $request->attributes->targetClientId = 'eius';
    $request->attributes->theme = 'maxime';
    $request->attributes->title = 'Ms.';
    $request->attributes->videoLink = [
        'in',
        'architecto',
        'architecto',
    ];
    $request->accessToken = 'repudiandae';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'expedita';
    $request->fields = 'nihil';
    $request->key = 'repellat';
    $request->name = 'Louis Turner Sr.';
    $request->oauthToken = 'praesentium';
    $request->parent = 'natus';
    $request->prettyPrint = false;
    $request->quotaUser = 'magni';
    $request->uploadType = 'sunt';
    $request->uploadProtocol = 'quo';

    $requestSecurity = new ManufacturersAccountsProductsUpdateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->manufacturersAccountsProductsUpdate($request, $requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
