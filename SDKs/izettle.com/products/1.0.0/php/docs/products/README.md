# products

### Available Operations

* [countAllProducts](#countallproducts) - Retrieve the count of existing products
* [createProduct](#createproduct) - Create a new product
* [deleteProduct](#deleteproduct) - Delete a single product
* [deleteProducts](#deleteproducts) - Delete a list of products
* [getAllOptions](#getalloptions) - Retrieve an aggregate of active Options in the library
* [getAllProductsInPos](#getallproductsinpos) - Retrieve all products visible in POS
* [getAllProductsV2](#getallproductsv2) - Retrieve all products visible in POS – v2
* [getProduct](#getproduct) - Retrieve a single product
* [updateProduct](#updateproduct) - Update a single product

## countAllProducts

Retrieve the count of existing products

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CountAllProductsRequest;
use \OpenAPI\OpenAPI\Models\Operations\CountAllProductsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CountAllProductsRequest();
    $request->organizationUuid = '4bdb04f1-5756-4082-968e-a19f1d170513';

    $requestSecurity = new CountAllProductsSecurity();
    $requestSecurity->zettleOauth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->products->countAllProducts($request, $requestSecurity);

    if ($response->productCountResponses !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createProduct

Create a new product

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateProductRequest;
use \OpenAPI\OpenAPI\Models\Shared\ProductCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\CategoryDTO;
use \OpenAPI\OpenAPI\Models\Shared\MetadataDTO;
use \OpenAPI\OpenAPI\Models\Shared\SourceDTO;
use \OpenAPI\OpenAPI\Models\Shared\OnlineProperties;
use \OpenAPI\OpenAPI\Models\Shared\Presentation;
use \OpenAPI\OpenAPI\Models\Shared\SearchEngineOptimization;
use \OpenAPI\OpenAPI\Models\Shared\Shipping;
use \OpenAPI\OpenAPI\Models\Shared\ShippingShippingPricingModelEnum;
use \OpenAPI\OpenAPI\Models\Shared\Weight;
use \OpenAPI\OpenAPI\Models\Shared\WeightUnitEnum;
use \OpenAPI\OpenAPI\Models\Shared\OnlinePropertiesStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\PresentationDTO;
use \OpenAPI\OpenAPI\Models\Shared\VariantOptionDefinitions;
use \OpenAPI\OpenAPI\Models\Shared\VariantOptionDefinition;
use \OpenAPI\OpenAPI\Models\Shared\VariantOptionProperties;
use \OpenAPI\OpenAPI\Models\Shared\VariantDTO;
use \OpenAPI\OpenAPI\Models\Shared\Price;
use \OpenAPI\OpenAPI\Models\Shared\PriceCurrencyIdEnum;
use \OpenAPI\OpenAPI\Models\Shared\VariantOption;
use \OpenAPI\OpenAPI\Models\Operations\CreateProductSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateProductRequest();
    $request->productCreateRequest = new ProductCreateRequest();
    $request->productCreateRequest->categories = [
        'iste',
    ];
    $request->productCreateRequest->category = new CategoryDTO();
    $request->productCreateRequest->category->name = 'Ms. Kenneth Ledner';
    $request->productCreateRequest->category->uuid = 'a1840394-c260-471f-93f5-f0642dac7af5';
    $request->productCreateRequest->createWithDefaultTax = false;
    $request->productCreateRequest->description = 'quae';
    $request->productCreateRequest->externalReference = 'quaerat';
    $request->productCreateRequest->imageLookupKeys = [
        'quod',
        'labore',
        'ab',
        'adipisci',
    ];
    $request->productCreateRequest->metadata = new MetadataDTO();
    $request->productCreateRequest->metadata->inPos = false;
    $request->productCreateRequest->metadata->source = new SourceDTO();
    $request->productCreateRequest->metadata->source->external = false;
    $request->productCreateRequest->metadata->source->name = 'Orlando Homenick';
    $request->productCreateRequest->name = 'Clay Larson';
    $request->productCreateRequest->online = new OnlineProperties();
    $request->productCreateRequest->online->description = 'ducimus';
    $request->productCreateRequest->online->presentation = new Presentation();
    $request->productCreateRequest->online->presentation->additionalImageUrls = [
        'vel',
        'labore',
        'possimus',
    ];
    $request->productCreateRequest->online->presentation->displayImageUrl = 'facilis';
    $request->productCreateRequest->online->presentation->mediaUrls = [
        'commodi',
        'in',
        'corporis',
    ];
    $request->productCreateRequest->online->seo = new SearchEngineOptimization();
    $request->productCreateRequest->online->seo->metaDescription = 'reiciendis';
    $request->productCreateRequest->online->seo->slug = 'assumenda';
    $request->productCreateRequest->online->seo->title = 'Mrs.';
    $request->productCreateRequest->online->shipping = new Shipping();
    $request->productCreateRequest->online->shipping->shippingPricingModel = ShippingShippingPricingModelEnum::STANDARD;
    $request->productCreateRequest->online->shipping->weight = new Weight();
    $request->productCreateRequest->online->shipping->weight->unit = WeightUnitEnum::G;
    $request->productCreateRequest->online->shipping->weight->weight = 460.07;
    $request->productCreateRequest->online->shipping->weightInGrams = 738683;
    $request->productCreateRequest->online->status = OnlinePropertiesStatusEnum::ACTIVE;
    $request->productCreateRequest->online->title = 'Ms.';
    $request->productCreateRequest->presentation = new PresentationDTO();
    $request->productCreateRequest->presentation->backgroundColor = 'exercitationem';
    $request->productCreateRequest->presentation->imageUrl = 'earum';
    $request->productCreateRequest->presentation->textColor = 'facere';
    $request->productCreateRequest->taxCode = 'numquam';
    $request->productCreateRequest->taxExempt = false;
    $request->productCreateRequest->taxRates = [
        '6fbee41f-3331-47fe-b5b6-0eb1ea426555',
        'ba3c2874-4ed5-43b8-8f3a-8d8f5c0b2f2f',
        'b7b194a2-76b2-4691-afe1-f08f4294e369',
        '8f447f60-3e8b-4445-a80c-a55efd20e457',
    ];
    $request->productCreateRequest->unitName = 'officiis';
    $request->productCreateRequest->uuid = '1858b6a8-9fbe-43a5-aa8e-4824d0ab4075';
    $request->productCreateRequest->variantOptionDefinitions = new VariantOptionDefinitions();
    $request->productCreateRequest->variantOptionDefinitions->definitions = [
        new VariantOptionDefinition(),
    ];
    $request->productCreateRequest->variants = [
        new VariantDTO(),
        new VariantDTO(),
        new VariantDTO(),
    ];
    $request->productCreateRequest->vatPercentage = 5580.65;
    $request->organizationUuid = 'e5186206-5e90-44f3-b119-4b8abf603a79';
    $request->returnEntity = false;

    $requestSecurity = new CreateProductSecurity();
    $requestSecurity->zettleOauth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->products->createProduct($request, $requestSecurity);

    if ($response->productResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteProduct

Delete a single product

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteProductRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteProductSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteProductRequest();
    $request->organizationUuid = 'f9dfe0ab-7da8-4a50-8e18-7f86bc173d68';
    $request->productUuid = '9eee9526-f8d9-486e-881e-ad4f0e101256';

    $requestSecurity = new DeleteProductSecurity();
    $requestSecurity->zettleOauth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->products->deleteProduct($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteProducts

Delete a list of products

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteProductsRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteProductsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteProductsRequest();
    $request->organizationUuid = '3f94e29e-973e-4922-a57a-15be3e060807';
    $request->uuid = [
        '2b6e3ab8-845f-4059-ba60-ff2a54a31e94',
        '764a3e86-5e79-456f-9251-a5a9da660ff5',
        '7bfaad4f-9efc-41b4-912c-1032648dc2f6',
        '15199ebf-d0e9-4fe6-8632-ca3aed011799',
    ];

    $requestSecurity = new DeleteProductsSecurity();
    $requestSecurity->zettleOauth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->products->deleteProducts($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAllOptions

Retrieve an aggregate of active Options in the library

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetAllOptionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetAllOptionsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAllOptionsRequest();
    $request->organizationUuid = '6312fde0-4771-4778-bf61-d017476360a1';

    $requestSecurity = new GetAllOptionsSecurity();
    $requestSecurity->zettleOauth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->products->getAllOptions($request, $requestSecurity);

    if ($response->variantOptionsResponses !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAllProductsInPos

Retrieve all products visible in POS

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetAllProductsInPosRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetAllProductsInPosSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAllProductsInPosRequest();
    $request->organizationUuid = '5db6a660-659a-41ad-aaab-5851d6c645b0';

    $requestSecurity = new GetAllProductsInPosSecurity();
    $requestSecurity->zettleOauth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->products->getAllProductsInPos($request, $requestSecurity);

    if ($response->productResponses !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAllProductsV2

Retrieve all products visible in POS – v2

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetAllProductsV2Request;
use \OpenAPI\OpenAPI\Models\Operations\GetAllProductsV2Security;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAllProductsV2Request();
    $request->organizationUuid = '8b61891b-aa0f-4e1a-9e00-8e6f8c5f350d';
    $request->sort = false;

    $requestSecurity = new GetAllProductsV2Security();
    $requestSecurity->zettleOauth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->products->getAllProductsV2($request, $requestSecurity);

    if ($response->productResponses !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getProduct

Get the full product with the provided UUID. The method supports conditional GET through providing a HttpHeaders.IF_NONE_MATCH header. If the conditional prerequisite is fullfilled, the full product is returned, otherwise a 304 not modified will be returned with an empty body.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetProductRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetProductSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetProductRequest();
    $request->ifNoneMatch = 'totam';
    $request->organizationUuid = 'cdb5a341-8143-4010-8218-13d5208ece7e';
    $request->productUuid = '253b6684-51c6-4c6e-a05e-16deab3fec95';

    $requestSecurity = new GetProductSecurity();
    $requestSecurity->zettleOauth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->products->getProduct($request, $requestSecurity);

    if ($response->productResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateProduct

Updates a product entity using JSON merge patch (https://tools.ietf.org/html/rfc7386). This means that only included fields will be changed: null values removes the field on the target entity, and other values updates the field. Conditional updates are supported through the HttpHeaders.IF_MATCH header. If the conditional prerequisite is fullfilled, the product is updated: otherwise a 412 (precondition failed) will be returned with an empty body.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateProductRequest;
use \OpenAPI\OpenAPI\Models\Shared\FullProductUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\CategoryDTO;
use \OpenAPI\OpenAPI\Models\Shared\MetadataDTO;
use \OpenAPI\OpenAPI\Models\Shared\SourceDTO;
use \OpenAPI\OpenAPI\Models\Shared\OnlineProperties;
use \OpenAPI\OpenAPI\Models\Shared\Presentation;
use \OpenAPI\OpenAPI\Models\Shared\SearchEngineOptimization;
use \OpenAPI\OpenAPI\Models\Shared\Shipping;
use \OpenAPI\OpenAPI\Models\Shared\ShippingShippingPricingModelEnum;
use \OpenAPI\OpenAPI\Models\Shared\Weight;
use \OpenAPI\OpenAPI\Models\Shared\WeightUnitEnum;
use \OpenAPI\OpenAPI\Models\Shared\OnlinePropertiesStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\PresentationDTO;
use \OpenAPI\OpenAPI\Models\Shared\VariantOptionDefinitions;
use \OpenAPI\OpenAPI\Models\Shared\VariantOptionDefinition;
use \OpenAPI\OpenAPI\Models\Shared\VariantOptionProperties;
use \OpenAPI\OpenAPI\Models\Shared\VariantDTO;
use \OpenAPI\OpenAPI\Models\Shared\Price;
use \OpenAPI\OpenAPI\Models\Shared\PriceCurrencyIdEnum;
use \OpenAPI\OpenAPI\Models\Shared\VariantOption;
use \OpenAPI\OpenAPI\Models\Operations\UpdateProductSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateProductRequest();
    $request->fullProductUpdateRequest = new FullProductUpdateRequest();
    $request->fullProductUpdateRequest->categories = [
        'blanditiis',
        'officia',
    ];
    $request->fullProductUpdateRequest->category = new CategoryDTO();
    $request->fullProductUpdateRequest->category->name = 'Marjorie Hickle';
    $request->fullProductUpdateRequest->category->uuid = '273a8418-d162-4309-bb09-29921aefb9f5';
    $request->fullProductUpdateRequest->description = 'praesentium';
    $request->fullProductUpdateRequest->externalReference = 'maxime';
    $request->fullProductUpdateRequest->imageLookupKeys = [
        'temporibus',
        'quos',
    ];
    $request->fullProductUpdateRequest->metadata = new MetadataDTO();
    $request->fullProductUpdateRequest->metadata->inPos = false;
    $request->fullProductUpdateRequest->metadata->source = new SourceDTO();
    $request->fullProductUpdateRequest->metadata->source->external = false;
    $request->fullProductUpdateRequest->metadata->source->name = 'Lorena Johns';
    $request->fullProductUpdateRequest->name = 'Mrs. Candice Thiel';
    $request->fullProductUpdateRequest->online = new OnlineProperties();
    $request->fullProductUpdateRequest->online->description = 'alias';
    $request->fullProductUpdateRequest->online->presentation = new Presentation();
    $request->fullProductUpdateRequest->online->presentation->additionalImageUrls = [
        'non',
    ];
    $request->fullProductUpdateRequest->online->presentation->displayImageUrl = 'maiores';
    $request->fullProductUpdateRequest->online->presentation->mediaUrls = [
        'sint',
        'nulla',
    ];
    $request->fullProductUpdateRequest->online->seo = new SearchEngineOptimization();
    $request->fullProductUpdateRequest->online->seo->metaDescription = 'deserunt';
    $request->fullProductUpdateRequest->online->seo->slug = 'esse';
    $request->fullProductUpdateRequest->online->seo->title = 'Mrs.';
    $request->fullProductUpdateRequest->online->shipping = new Shipping();
    $request->fullProductUpdateRequest->online->shipping->shippingPricingModel = ShippingShippingPricingModelEnum::FREE;
    $request->fullProductUpdateRequest->online->shipping->weight = new Weight();
    $request->fullProductUpdateRequest->online->shipping->weight->unit = WeightUnitEnum::OZ;
    $request->fullProductUpdateRequest->online->shipping->weight->weight = 3361.02;
    $request->fullProductUpdateRequest->online->shipping->weightInGrams = 571844;
    $request->fullProductUpdateRequest->online->status = OnlinePropertiesStatusEnum::HIDDEN;
    $request->fullProductUpdateRequest->online->title = 'Miss';
    $request->fullProductUpdateRequest->presentation = new PresentationDTO();
    $request->fullProductUpdateRequest->presentation->backgroundColor = 'hic';
    $request->fullProductUpdateRequest->presentation->imageUrl = 'necessitatibus';
    $request->fullProductUpdateRequest->presentation->textColor = 'asperiores';
    $request->fullProductUpdateRequest->taxCode = 'ex';
    $request->fullProductUpdateRequest->taxExempt = false;
    $request->fullProductUpdateRequest->taxRates = [
        'ef1caa33-83c2-4beb-8773-73c8d72f64d1',
        'db1f2c43-1066-41e9-a349-e1cf9e06e3a4',
    ];
    $request->fullProductUpdateRequest->unitName = 'dolor';
    $request->fullProductUpdateRequest->uuid = '7000ae6b-6bc9-4b8f-b59e-ac55a9741d31';
    $request->fullProductUpdateRequest->variantOptionDefinitions = new VariantOptionDefinitions();
    $request->fullProductUpdateRequest->variantOptionDefinitions->definitions = [
        new VariantOptionDefinition(),
    ];
    $request->fullProductUpdateRequest->variants = [
        new VariantDTO(),
    ];
    $request->fullProductUpdateRequest->vatPercentage = 3220.17;
    $request->ifMatch = 'qui';
    $request->organizationUuid = '965bb8a7-2026-4114-b5e1-39dbc2259b1a';
    $request->productUuid = 'bda8c070-e108-44cb-8672-d1ad879eeb96';

    $requestSecurity = new UpdateProductSecurity();
    $requestSecurity->zettleOauth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->products->updateProduct($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
