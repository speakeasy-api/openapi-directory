# Inappproducts

### Available Operations

* [AndroidpublisherInappproductsDelete](#androidpublisherinappproductsdelete) - Delete an in-app product for an app.
* [AndroidpublisherInappproductsGet](#androidpublisherinappproductsget) - Returns information about the in-app product specified.
* [AndroidpublisherInappproductsInsert](#androidpublisherinappproductsinsert) - Creates a new in-app product for an app.
* [AndroidpublisherInappproductsList](#androidpublisherinappproductslist) - List all the in-app products for an Android app, both subscriptions and managed in-app products..
* [AndroidpublisherInappproductsPatch](#androidpublisherinappproductspatch) - Updates the details of an in-app product. This method supports patch semantics.
* [AndroidpublisherInappproductsUpdate](#androidpublisherinappproductsupdate) - Updates the details of an in-app product.

## AndroidpublisherInappproductsDelete

Delete an in-app product for an app.

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
    res, err := s.Inappproducts.AndroidpublisherInappproductsDelete(ctx, operations.AndroidpublisherInappproductsDeleteRequest{
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("harum"),
        Key: sdk.String("iusto"),
        OauthToken: sdk.String("ipsum"),
        PackageName: "quisquam",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("tenetur"),
        Sku: "amet",
        UserIP: sdk.String("tempore"),
    }, operations.AndroidpublisherInappproductsDeleteSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## AndroidpublisherInappproductsGet

Returns information about the in-app product specified.

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
    res, err := s.Inappproducts.AndroidpublisherInappproductsGet(ctx, operations.AndroidpublisherInappproductsGetRequest{
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("accusamus"),
        Key: sdk.String("numquam"),
        OauthToken: sdk.String("enim"),
        PackageName: "dolorem",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("sapiente"),
        Sku: "totam",
        UserIP: sdk.String("nihil"),
    }, operations.AndroidpublisherInappproductsGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## AndroidpublisherInappproductsInsert

Creates a new in-app product for an app.

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
    res, err := s.Inappproducts.AndroidpublisherInappproductsInsert(ctx, operations.AndroidpublisherInappproductsInsertRequest{
        InAppProduct: &shared.InAppProduct{
            DefaultLanguage: sdk.String("sit"),
            DefaultPrice: &shared.Price{
                Currency: sdk.String("expedita"),
                PriceMicros: sdk.String("neque"),
            },
            GracePeriod: sdk.String("sed"),
            Listings: map[string]shared.InAppProductListing{
                "libero": shared.InAppProductListing{
                    Description: sdk.String("voluptas"),
                    Title: sdk.String("Miss"),
                },
                "quam": shared.InAppProductListing{
                    Description: sdk.String("ipsum"),
                    Title: sdk.String("Mrs."),
                },
            },
            PackageName: sdk.String("qui"),
            Prices: map[string]shared.Price{
                "maxime": shared.Price{
                    Currency: sdk.String("pariatur"),
                    PriceMicros: sdk.String("soluta"),
                },
                "dicta": shared.Price{
                    Currency: sdk.String("laborum"),
                    PriceMicros: sdk.String("totam"),
                },
                "incidunt": shared.Price{
                    Currency: sdk.String("aspernatur"),
                    PriceMicros: sdk.String("dolores"),
                },
            },
            PurchaseType: sdk.String("distinctio"),
            Sku: sdk.String("facilis"),
            Status: sdk.String("aliquid"),
            SubscriptionPeriod: sdk.String("quam"),
            TrialPeriod: sdk.String("molestias"),
        },
        Alt: shared.AltEnumJSON.ToPointer(),
        AutoConvertMissingPrices: sdk.Bool(false),
        Fields: sdk.String("temporibus"),
        Key: sdk.String("qui"),
        OauthToken: sdk.String("neque"),
        PackageName: "fugit",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("magni"),
        UserIP: sdk.String("odio"),
    }, operations.AndroidpublisherInappproductsInsertSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## AndroidpublisherInappproductsList

List all the in-app products for an Android app, both subscriptions and managed in-app products..

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
    res, err := s.Inappproducts.AndroidpublisherInappproductsList(ctx, operations.AndroidpublisherInappproductsListRequest{
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("sunt"),
        Key: sdk.String("ullam"),
        MaxResults: sdk.Int64(722081),
        OauthToken: sdk.String("hic"),
        PackageName: "voluptatem",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("cumque"),
        StartIndex: sdk.Int64(746994),
        Token: sdk.String("nobis"),
        UserIP: sdk.String("et"),
    }, operations.AndroidpublisherInappproductsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## AndroidpublisherInappproductsPatch

Updates the details of an in-app product. This method supports patch semantics.

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
    res, err := s.Inappproducts.AndroidpublisherInappproductsPatch(ctx, operations.AndroidpublisherInappproductsPatchRequest{
        InAppProduct: &shared.InAppProduct{
            DefaultLanguage: sdk.String("saepe"),
            DefaultPrice: &shared.Price{
                Currency: sdk.String("ipsum"),
                PriceMicros: sdk.String("veritatis"),
            },
            GracePeriod: sdk.String("nobis"),
            Listings: map[string]shared.InAppProductListing{
                "tempore": shared.InAppProductListing{
                    Description: sdk.String("cupiditate"),
                    Title: sdk.String("Mr."),
                },
                "delectus": shared.InAppProductListing{
                    Description: sdk.String("dolorem"),
                    Title: sdk.String("Mrs."),
                },
                "labore": shared.InAppProductListing{
                    Description: sdk.String("adipisci"),
                    Title: sdk.String("Miss"),
                },
            },
            PackageName: sdk.String("architecto"),
            Prices: map[string]shared.Price{
                "aut": shared.Price{
                    Currency: sdk.String("quas"),
                    PriceMicros: sdk.String("itaque"),
                },
            },
            PurchaseType: sdk.String("consequatur"),
            Sku: sdk.String("est"),
            Status: sdk.String("repellendus"),
            SubscriptionPeriod: sdk.String("porro"),
            TrialPeriod: sdk.String("doloribus"),
        },
        Alt: shared.AltEnumJSON.ToPointer(),
        AutoConvertMissingPrices: sdk.Bool(false),
        Fields: sdk.String("ut"),
        Key: sdk.String("facilis"),
        OauthToken: sdk.String("cupiditate"),
        PackageName: "qui",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quae"),
        Sku: "laudantium",
        UserIP: sdk.String("odio"),
    }, operations.AndroidpublisherInappproductsPatchSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## AndroidpublisherInappproductsUpdate

Updates the details of an in-app product.

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
    res, err := s.Inappproducts.AndroidpublisherInappproductsUpdate(ctx, operations.AndroidpublisherInappproductsUpdateRequest{
        InAppProduct: &shared.InAppProduct{
            DefaultLanguage: sdk.String("occaecati"),
            DefaultPrice: &shared.Price{
                Currency: sdk.String("voluptatibus"),
                PriceMicros: sdk.String("quisquam"),
            },
            GracePeriod: sdk.String("vero"),
            Listings: map[string]shared.InAppProductListing{
                "quis": shared.InAppProductListing{
                    Description: sdk.String("ipsum"),
                    Title: sdk.String("Dr."),
                },
                "voluptate": shared.InAppProductListing{
                    Description: sdk.String("consectetur"),
                    Title: sdk.String("Dr."),
                },
                "tenetur": shared.InAppProductListing{
                    Description: sdk.String("dignissimos"),
                    Title: sdk.String("Dr."),
                },
            },
            PackageName: sdk.String("distinctio"),
            Prices: map[string]shared.Price{
                "odio": shared.Price{
                    Currency: sdk.String("similique"),
                    PriceMicros: sdk.String("facilis"),
                },
                "vero": shared.Price{
                    Currency: sdk.String("ducimus"),
                    PriceMicros: sdk.String("dolore"),
                },
                "quibusdam": shared.Price{
                    Currency: sdk.String("illum"),
                    PriceMicros: sdk.String("sequi"),
                },
                "natus": shared.Price{
                    Currency: sdk.String("impedit"),
                    PriceMicros: sdk.String("aut"),
                },
            },
            PurchaseType: sdk.String("voluptatibus"),
            Sku: sdk.String("exercitationem"),
            Status: sdk.String("nulla"),
            SubscriptionPeriod: sdk.String("fugit"),
            TrialPeriod: sdk.String("porro"),
        },
        Alt: shared.AltEnumJSON.ToPointer(),
        AutoConvertMissingPrices: sdk.Bool(false),
        Fields: sdk.String("maiores"),
        Key: sdk.String("doloribus"),
        OauthToken: sdk.String("iusto"),
        PackageName: "eligendi",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ducimus"),
        Sku: "alias",
        UserIP: sdk.String("officia"),
    }, operations.AndroidpublisherInappproductsUpdateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
