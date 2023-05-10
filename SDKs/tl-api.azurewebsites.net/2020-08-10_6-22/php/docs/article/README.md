# article

### Available Operations

* [articleAddMeasureUnit](#articleaddmeasureunit) - Add measure unit
* [articleDelete](#articledelete) - Delete article from the system
            
* [articleGetAddons](#articlegetaddons)
* [articleGetMeasureUnits](#articlegetmeasureunits) - Get mesure units
* [articleGetRevenueAccounts](#articlegetrevenueaccounts) - Get Revenue Accounts 
* [articleGymArticleDetails](#articlegymarticledetails) - Get Gym specific properties for article
            
* [articlePost](#articlepost) - Add new article
            
* [articlePut](#articleput) - update existing article
            
* [articleSearch](#articlesearch) - Search articles
It will only return basic information of article
            
* [articleUpdateArticleGymDetails](#articleupdatearticlegymdetails) - Add article details that associate with a Gym
            
* [articleUpdateStatus](#articleupdatestatus) - Deactivate existing article 
* [articleGet](#articleget) - Get article details
This will return all properties related to article entity
            

## articleAddMeasureUnit

Add measure unit

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\MeasureUnitDTO;

$sdk = SDK::builder()
    ->build();

try {
    $request = [
        new MeasureUnitDTO(),
        new MeasureUnitDTO(),
        new MeasureUnitDTO(),
    ]

    $response = $sdk->article->articleAddMeasureUnit($request);

    if ($response->defaultResponseDTOOfStatusDTO !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## articleDelete

Delete article from the system
            

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ArticleDeleteRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ArticleDeleteRequest();
    $request->articleId = 715190;

    $response = $sdk->article->articleDelete($request);

    if ($response->defaultResponseDTOOfInteger !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## articleGetAddons

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ArticleGetAddonsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ArticleGetAddonsRequest();
    $request->gymIds = 'quibusdam';
    $request->limit = 602763;
    $request->offset = 857946;
    $request->searchText = 'corrupti';
    $request->type = 'illum';

    $response = $sdk->article->articleGetAddons($request);

    if ($response->defaultResponseDTOOfListOfArticleSearchDTO !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## articleGetMeasureUnits

Get mesure units

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ArticleGetMeasureUnitsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ArticleGetMeasureUnitsRequest();
    $request->type = 'vel';

    $response = $sdk->article->articleGetMeasureUnits($request);

    if ($response->defaultResponseDTOOfStatusDTO !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## articleGetRevenueAccounts

Get Revenue Accounts 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->article->articleGetRevenueAccounts();

    if ($response->defaultResponseDTOOfStatusDTO !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## articleGymArticleDetails

Get Gym specific properties for article
            

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ArticleGymArticleDetailsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ArticleGymArticleDetailsRequest();
    $request->articleId = 623564;
    $request->gymId = 645894;

    $response = $sdk->article->articleGymArticleDetails($request);

    if ($response->gymArticleDetailsDTO !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## articlePost

Add new article
            

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\ArticleDTO;
use \OpenAPI\OpenAPI\Models\Shared\GymDTO;
use \OpenAPI\OpenAPI\Models\Shared\GymArticleDetailsDTO;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ArticleDTO();
    $request->activeStatus = false;
    $request->applyForAllGyms = false;
    $request->articleId = 384382;
    $request->availableGyms = [
        new GymDTO(),
        new GymDTO(),
    ];
    $request->availableQty = 2975.34;
    $request->barcode = 'debitis';
    $request->createdDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-01-14T06:18:51.036Z');
    $request->createdUser = 'tempora';
    $request->cronExpression = 'suscipit';
    $request->description = 'molestiae';
    $request->discount = 7917.25;
    $request->employeeDiscount = 8121.69;
    $request->employeePrice = 5288.95;
    $request->gymArticles = [
        new GymArticleDetailsDTO(),
        new GymArticleDetailsDTO(),
    ];
    $request->isAddOn = false;
    $request->isInventoryItem = false;
    $request->isObsolete = false;
    $request->measureUnit = 'excepturi';
    $request->modifiedDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-01-28T03:46:24.500Z');
    $request->modifiedUser = 'temporibus';
    $request->name = 'Erica Bogisich III';
    $request->number = 832620;
    $request->price = 9571.56;
    $request->reorderLevel = 7781.57;
    $request->revenueAccountId = 140350;
    $request->sellingPrice = 8700.13;
    $request->tags = 'at';
    $request->type = 'maiores';
    $request->vat = 4736.08;
    $request->vatApplicable = false;

    $response = $sdk->article->articlePost($request);

    if ($response->defaultResponseDTOOfStatusDTO !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## articlePut

update existing article
            

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\ArticleDTO;
use \OpenAPI\OpenAPI\Models\Shared\GymDTO;
use \OpenAPI\OpenAPI\Models\Shared\GymArticleDetailsDTO;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ArticleDTO();
    $request->activeStatus = false;
    $request->applyForAllGyms = false;
    $request->articleId = 799159;
    $request->availableGyms = [
        new GymDTO(),
        new GymDTO(),
        new GymDTO(),
        new GymDTO(),
    ];
    $request->availableQty = 4614.79;
    $request->barcode = 'totam';
    $request->createdDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-12-18T15:02:44.758Z');
    $request->createdUser = 'dicta';
    $request->cronExpression = 'nam';
    $request->description = 'officia';
    $request->discount = 5820.2;
    $request->employeeDiscount = 1433.53;
    $request->employeePrice = 5373.73;
    $request->gymArticles = [
        new GymArticleDetailsDTO(),
        new GymArticleDetailsDTO(),
        new GymArticleDetailsDTO(),
        new GymArticleDetailsDTO(),
    ];
    $request->isAddOn = false;
    $request->isInventoryItem = false;
    $request->isObsolete = false;
    $request->measureUnit = 'optio';
    $request->modifiedDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-15T16:29:54.554Z');
    $request->modifiedUser = 'commodi';
    $request->name = 'Pauline Dibbert';
    $request->number = 456150;
    $request->price = 2165.5;
    $request->reorderLevel = 5684.34;
    $request->revenueAccountId = 135218;
    $request->sellingPrice = 187.89;
    $request->tags = 'ad';
    $request->type = 'natus';
    $request->vat = 1496.75;
    $request->vatApplicable = false;

    $response = $sdk->article->articlePut($request);

    if ($response->defaultResponseDTOOfStatusDTO !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## articleSearch

Search articles
It will only return basic information of article
            

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ArticleSearchRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ArticleSearchRequest();
    $request->activeStatus = 612096;
    $request->gymId = 222321;
    $request->limit = 616934;
    $request->offset = 386489;
    $request->orderBy = 'hic';
    $request->searchText = 'saepe';
    $request->type = 'fuga';

    $response = $sdk->article->articleSearch($request);

    if ($response->defaultResponseDTOOfListOfArticleSearchDTO !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## articleUpdateArticleGymDetails

Add article details that associate with a Gym
            

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\GymArticleDetailsDTO;

$sdk = SDK::builder()
    ->build();

try {
    $request = [
        new GymArticleDetailsDTO(),
        new GymArticleDetailsDTO(),
    ]

    $response = $sdk->article->articleUpdateArticleGymDetails($request);

    if ($response->defaultResponseDTOOfStatusDTO !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## articleUpdateStatus

Deactivate existing article 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ArticleUpdateStatusRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ArticleUpdateStatusRequest();
    $request->articleId = 359508;
    $request->status = 613064;
    $request->userName = 'Humberto.Turcotte6';

    $response = $sdk->article->articleUpdateStatus($request);

    if ($response->defaultResponseDTOOfInteger !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## articleGet

Get article details
This will return all properties related to article entity
            

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ArticleGetRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ArticleGetRequest();
    $request->articleID = 969810;

    $response = $sdk->article->articleGet($request);

    if ($response->defaultResponseDTOOfArticleDTO !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
