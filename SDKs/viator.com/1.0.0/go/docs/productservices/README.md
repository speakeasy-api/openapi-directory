# ProductServices

## Overview

Product services

### Available Operations

* [AvailableProducts](#availableproducts) - /available/products
* [Product](#product) - /product
* [ProductPhotos](#productphotos) - /product/photos
* [ProductReviews](#productreviews) - /product/reviews
* [SearchFreetext](#searchfreetext) - /search/freetext
* [SearchProducts](#searchproducts) - /search/products
* [SearchProductsCodes](#searchproductscodes) - /search/products/codes

## AvailableProducts

Find products that are available

 This endpoint returns available products filtered by product code, date range or number of adult travelers


 - **Note**: Availability data is limited to a period of **12 months** into the future from the present time on the production server and **6 months** on the sandbox server. 
 


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.ProductServices.AvailableProducts(ctx, operations.AvailableProductsRequest{
        AcceptLanguage: "en-US",
        RequestBody: &operations.AvailableProductsRequestBody{
            CurrencyCode: sdk.String("sint"),
            EndDate: sdk.String("aliquid"),
            NumAdults: sdk.Int64(592042),
            ProductCodes: []string{
                "sint",
                "officia",
                "dolor",
                "debitis",
            },
            StartDate: sdk.String("a"),
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AvailableProducts200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## Product

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

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.ProductServices.Product(ctx, operations.ProductRequest{
        AcceptLanguage: "en-US",
        Code: sdk.String("dolorum"),
        CurrencyCode: sdk.String("in"),
        ExcludeTourGradeAvailability: sdk.Bool(false),
        ShowUnavailable: sdk.Bool(false),
        SortOrder: shared.SortOrderREVIEWEnumReviewRatingD.ToPointer(),
        VoucherOption: operations.ProductVoucherOptionEnumVoucherE.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Product200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ProductPhotos

Get photos of a product submitted by users

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.ProductServices.ProductPhotos(ctx, operations.ProductPhotosRequest{
        AcceptLanguage: "en-US",
        Code: sdk.String("maiores"),
        ShowUnavailable: sdk.Bool(false),
        TopX: sdk.String("rerum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProductPhotos200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ProductReviews

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

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.ProductServices.ProductReviews(ctx, operations.ProductReviewsRequest{
        AcceptLanguage: "en-US",
        Code: sdk.String("dicta"),
        ShowUnavailable: sdk.Bool(false),
        SortOrder: shared.SortOrderREVIEWEnumReviewRatingA.ToPointer(),
        TopX: sdk.String("cumque"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProductReviews200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## SearchFreetext

Free text search
- This service provides a **free text search across all products and destinations**
- The `text` parameter is required
- **Note:** results include a type indicator (`type`) that you can use to display each result appropriately based on its content


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.ProductServices.SearchFreetext(ctx, operations.SearchFreetextRequest{
        AcceptLanguage: "en-US",
        RequestBody: &operations.SearchFreetextRequestBody{
            CurrencyCode: sdk.String("facere"),
            DestID: sdk.Int64(411820),
            SearchTypes: []SearchFreetextRequestBodySearchTypesEnum{
                operations.SearchFreetextRequestBodySearchTypesEnumAttraction,
                operations.SearchFreetextRequestBodySearchTypesEnumRecommendation,
            },
            SortOrder: shared.SortOrderEnumReviewAvgRatingA.ToPointer(),
            Text: sdk.String("occaecati"),
            TopX: sdk.String("enim"),
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SearchFreetext200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## SearchProducts

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

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.ProductServices.SearchProducts(ctx, operations.SearchProductsRequest{
        AcceptLanguage: "en-US",
        RequestBody: &operations.SearchProductsRequestBody{
            CatID: sdk.Int64(881736),
            CurrencyCode: sdk.String("delectus"),
            DestID: sdk.Int64(692532),
            EndDate: sdk.String("provident"),
            SeoID: sdk.String("nam"),
            SortOrder: operations.SearchProductsRequestBodySortOrderEnumPriceFromA.ToPointer(),
            StartDate: sdk.String("blanditiis"),
            SubCatID: sdk.Int64(533206),
            TopX: sdk.String("sapiente"),
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SearchProducts200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## SearchProductsCodes

Search by product code
- This service returns an array of products given an array of product identifiers that is useful for wishlist / shopping cart / user account display 
- **Note**: requesting an inactive or non-existent product code will return `0`, `null` and blank values (as per the 'invalid_product' example).


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.ProductServices.SearchProductsCodes(ctx, operations.SearchProductsCodesRequest{
        AcceptLanguage: "en-US",
        RequestBody: &operations.SearchProductsCodesRequestBody{
            CurrencyCode: sdk.String("amet"),
            ProductCodes: []string{
                "nisi",
                "vel",
                "natus",
            },
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SearchProductsCodes200ApplicationJSONObject != nil {
        // handle response
    }
}
```
