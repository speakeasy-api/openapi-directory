# productServices

## Overview

Product services

### Available Operations

* [availableProducts](#availableproducts) - /available/products
* [product](#product) - /product
* [productPhotos](#productphotos) - /product/photos
* [productReviews](#productreviews) - /product/reviews
* [searchFreetext](#searchfreetext) - /search/freetext
* [searchProducts](#searchproducts) - /search/products
* [searchProductsCodes](#searchproductscodes) - /search/products/codes

## availableProducts

Find products that are available

 This endpoint returns available products filtered by product code, date range or number of adult travelers


 - **Note**: Availability data is limited to a period of **12 months** into the future from the present time on the production server and **6 months** on the sandbox server. 
 


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AvailableProductsRequest;
use \OpenAPI\OpenAPI\Models\Operations\AvailableProductsRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AvailableProductsRequest();
    $request->acceptLanguage = 'en-US';
    $request->requestBody = new AvailableProductsRequestBody();
    $request->requestBody->currencyCode = 'architecto';
    $request->requestBody->endDate = 'ipsa';
    $request->requestBody->numAdults = 969810;
    $request->requestBody->productCodes = [
        'mollitia',
        'laborum',
        'dolores',
    ];
    $request->requestBody->startDate = 'dolorem';

    $response = $sdk->productServices->availableProducts($request);

    if ($response->availableProducts200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## product

Get product information
This service provides all product details required for a product display page, as well as information required for price checks and booking, such as: 
- age bands
- tour grades
- language options 
- booking questions
- hotel pickup flags

**currencyCode (in query):** 
- use this parameter to specify the currency in which product pricing should be displayed
- the default currency is the currency of your account; or, if you have multi-currency enabled, US dollars
- "multi-currency" allows pricing and booking in various currencies - please speak to the business development team if you'd like this enabled
- **Note**: you will be billed in the currency in which the booking was made

**Product photos**

&lt;mark&gt;**&lt;u&gt;Update 13 Feb 2020&lt;/u&gt;**: All supplier-provided photos for the selected product are now available in the `productPhotos` array in this endpoint's response. Previously, only two supplier-provided photos were available – one in the `productPhotos` array and one in `thumbnailHiResURL`. &lt;/mark&gt;

**Videos**

- Videos are no longer provided via this API


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProductRequest;
use \OpenAPI\OpenAPI\Models\Shared\SortOrderREVIEWEnum;
use \OpenAPI\OpenAPI\Models\Operations\ProductVoucherOptionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProductRequest();
    $request->acceptLanguage = 'en-US';
    $request->code = 'corporis';
    $request->currencyCode = 'explicabo';
    $request->excludeTourGradeAvailability = false;
    $request->showUnavailable = false;
    $request->sortOrder = SortOrderREVIEWEnum::REVIEW_RATING_SUBMISSION_DATE_D;
    $request->voucherOption = ProductVoucherOptionEnum::VOUCHER_PAPER_ONLY;

    $response = $sdk->productServices->product($request);

    if ($response->product200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## productPhotos

Get photos of a product submitted by users

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProductPhotosRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProductPhotosRequest();
    $request->acceptLanguage = 'en-US';
    $request->code = 'omnis';
    $request->showUnavailable = false;
    $request->topX = 'nemo';

    $response = $sdk->productServices->productPhotos($request);

    if ($response->productPhotos200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## productReviews

Get user-submitted reviews of a product

**Note**: 
- The number of reviews that you can obtain via this service will depend on whether your account is limited in terms of the number of reviews you are entitled to receive. 
- The number of reviews available through this service is given in the `reviewCount` element in the response from [/product](#operation/product)
- Please speak to your account manager if you wish to receive more reviews. If your account is not limited, you will be able to receive all available reviews for this product.
- Only reviews in the language specified in the Accept-Language request header will be returned

**Example:** "Get the first three reviews for product `5010SYDNEY` sorted by rating in ascending order":

```javascript
https://viatorapi.sandbox.viator.com/service/product/reviews?sortOrder=REVIEW_RATING_A&amp;topX=1-3&amp;code=5010SYDNEY&amp;showUnavailable=false
```


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProductReviewsRequest;
use \OpenAPI\OpenAPI\Models\Shared\SortOrderREVIEWEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProductReviewsRequest();
    $request->acceptLanguage = 'en-US';
    $request->code = 'minima';
    $request->showUnavailable = false;
    $request->sortOrder = SortOrderREVIEWEnum::REVIEW_RATING_D;
    $request->topX = 'accusantium';

    $response = $sdk->productServices->productReviews($request);

    if ($response->productReviews200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## searchFreetext

Free text search
- This service provides a **free text search across all products and destinations**
- The `text` parameter is required
- **Note:** results include a type indicator (`type`) that you can use to display each result appropriately based on its content


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\SearchFreetextRequest;
use \OpenAPI\OpenAPI\Models\Operations\SearchFreetextRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\SearchFreetextRequestBodySearchTypesEnum;
use \OpenAPI\OpenAPI\Models\Shared\SortOrderEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchFreetextRequest();
    $request->acceptLanguage = 'en-US';
    $request->requestBody = new SearchFreetextRequestBody();
    $request->requestBody->currencyCode = 'iure';
    $request->requestBody->destId = 634274;
    $request->requestBody->searchTypes = [
        SearchFreetextRequestBodySearchTypesEnum::RECOMMENDATION,
        SearchFreetextRequestBodySearchTypesEnum::PRODUCT,
        SearchFreetextRequestBodySearchTypesEnum::ATTRACTION,
        SearchFreetextRequestBodySearchTypesEnum::PRODUCT,
    ];
    $request->requestBody->sortOrder = SortOrderEnum::PRICE_FROM_A;
    $request->requestBody->text = 'consequuntur';
    $request->requestBody->topX = 'repellat';

    $response = $sdk->productServices->searchFreetext($request);

    if ($response->searchFreetext200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## searchProducts

Search for products
This service is used to search for products based on various criteria; such as:
* the destination (locale) in which it operates
* its association with a tourist attraction
* its category and/or subcategory
* the time period during which it operates
The fields you include in the request body for this service determine the kind of search that will be performed.

**&lt;u&gt;Note&lt;/u&gt;**: 

* You can search **EITHER** by destination (`destId`) **OR** by attraction-link (`seoId`), but not both.
* The destination identifier (`destId`) can be retrieved from the [/taxonomy/destinations](#operation/taxonomyDestinations) service.
* The category (`catId`) and subcategory (`subCatId`) identifiers can be retrieved from the [/taxonomy/categories](#operation/taxonomyCategories) service.
* The attraction identifier (`seoId`) can be retrieved from the [/taxonomy/attractions](#operation/taxonomyAttractions) service.

**&lt;u&gt;Examples&lt;/u&gt;**:

**Search by destination**:

* E.g., "Top ten highest-rated yoga classes operating in Las Vegas:
```javascript
{
    "destId": 684,
    "subCatId": 26052,
    "sortOrder": "REVIEW_AVG_RATING_D",
    "topX": "1-3"
}
```

**Search by attraction-link**:

* E.g., "Products related to Everglades National Park operating 21-26 May 2019 in order of descending price":
```javascript
{
    "seoId": 1115,
    "sortOrder": "PRICE_FROM_D",
    "topX": "1-3"
}
```

**&lt;u&gt;'Freesale-only' merchants&lt;/u&gt;**:
- Merchants with a "freesale only" key *must* pass `startDate` and `endDate` to this service to retrieve a list of all available 'freesale' products (and 'freesale/on-request' products that are currently 'freesale') in the destination. 
- E.g., the following request body will result in 'freesale/on-request' products within their on-request period not appearing in the results from this service. 
```javascript
{
    "destId": 684,
    "startDate": "2020-02-21",
    "endDate": "2020-03-21",
    "sortOrder": "PRICE_FROM_D",
    "topX": "1-3"
}
```

- If `startDate` and `endDate` are omitted, 'freesale/on-request' products that are presently within their on-request period may appear to be available to customers, but won't be available at the time of booking.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\SearchProductsRequest;
use \OpenAPI\OpenAPI\Models\Operations\SearchProductsRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\SearchProductsRequestBodySortOrderEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchProductsRequest();
    $request->acceptLanguage = 'en-US';
    $request->requestBody = new SearchProductsRequestBody();
    $request->requestBody->catId = 653108;
    $request->requestBody->currencyCode = 'occaecati';
    $request->requestBody->destId = 253291;
    $request->requestBody->endDate = 'commodi';
    $request->requestBody->seoId = 'quam';
    $request->requestBody->sortOrder = SearchProductsRequestBodySortOrderEnum::REVIEW_AVG_RATING_D;
    $request->requestBody->startDate = 'velit';
    $request->requestBody->subCatId = 623510;
    $request->requestBody->topX = 'quia';

    $response = $sdk->productServices->searchProducts($request);

    if ($response->searchProducts200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## searchProductsCodes

Search by product code
- This service returns an array of products given an array of product identifiers that is useful for wishlist / shopping cart / user account display 
- **Note**: requesting an inactive or non-existent product code will return `0`, `null` and blank values (as per the 'invalid_product' example).


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\SearchProductsCodesRequest;
use \OpenAPI\OpenAPI\Models\Operations\SearchProductsCodesRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchProductsCodesRequest();
    $request->acceptLanguage = 'en-US';
    $request->requestBody = new SearchProductsCodesRequestBody();
    $request->requestBody->currencyCode = 'quis';
    $request->requestBody->productCodes = [
        'laborum',
    ];

    $response = $sdk->productServices->searchProductsCodes($request);

    if ($response->searchProductsCodes200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
