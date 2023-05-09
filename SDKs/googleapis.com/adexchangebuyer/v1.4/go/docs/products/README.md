# Products

### Available Operations

* [AdexchangebuyerProductsGet](#adexchangebuyerproductsget) - Gets the requested product by id.
* [AdexchangebuyerProductsSearch](#adexchangebuyerproductssearch) - Gets the requested product.

## AdexchangebuyerProductsGet

Gets the requested product by id.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Products.AdexchangebuyerProductsGet(ctx, operations.AdexchangebuyerProductsGetRequest{
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("natus"),
        Key: sdk.String("voluptatem"),
        OauthToken: sdk.String("tempora"),
        PrettyPrint: sdk.Bool(false),
        ProductID: "occaecati",
        QuotaUser: sdk.String("quasi"),
        UserIP: sdk.String("veritatis"),
    }, operations.AdexchangebuyerProductsGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Product != nil {
        // handle response
    }
}
```

## AdexchangebuyerProductsSearch

Gets the requested product.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Products.AdexchangebuyerProductsSearch(ctx, operations.AdexchangebuyerProductsSearchRequest{
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("ex"),
        Key: sdk.String("doloremque"),
        OauthToken: sdk.String("quas"),
        PqlQuery: sdk.String("dolores"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("perferendis"),
        UserIP: sdk.String("esse"),
    }, operations.AdexchangebuyerProductsSearchSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOffersResponse != nil {
        // handle response
    }
}
```
