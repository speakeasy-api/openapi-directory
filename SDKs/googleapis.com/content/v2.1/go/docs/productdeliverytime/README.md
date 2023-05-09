# Productdeliverytime

### Available Operations

* [ContentProductdeliverytimeCreate](#contentproductdeliverytimecreate) - Creates or updates the delivery time of a product.
* [ContentProductdeliverytimeDelete](#contentproductdeliverytimedelete) - Deletes the delivery time of a product.
* [ContentProductdeliverytimeGet](#contentproductdeliverytimeget) - Gets `productDeliveryTime` by `productId`.

## ContentProductdeliverytimeCreate

Creates or updates the delivery time of a product.

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
    res, err := s.Productdeliverytime.ContentProductdeliverytimeCreate(ctx, operations.ContentProductdeliverytimeCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        ProductDeliveryTime: &shared.ProductDeliveryTime{
            AreaDeliveryTimes: []shared.ProductDeliveryTimeAreaDeliveryTime{
                shared.ProductDeliveryTimeAreaDeliveryTime{
                    DeliveryArea: &shared.DeliveryArea{
                        CountryCode: sdk.String("LA"),
                        PostalCodeRange: &shared.DeliveryAreaPostalCodeRange{
                            FirstPostalCode: sdk.String("quidem"),
                            LastPostalCode: sdk.String("illum"),
                        },
                        RegionCode: sdk.String("reiciendis"),
                    },
                    DeliveryTime: &shared.ProductDeliveryTimeAreaDeliveryTimeDeliveryTime{
                        MaxHandlingTimeDays: sdk.Int(809567),
                        MaxTransitTimeDays: sdk.Int(175275),
                        MinHandlingTimeDays: sdk.Int(9777),
                        MinTransitTimeDays: sdk.Int(201966),
                    },
                },
            },
            ProductID: &shared.ProductID{
                ProductID: sdk.String("quia"),
            },
        },
        AccessToken: sdk.String("quidem"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("quo"),
        Fields: sdk.String("laudantium"),
        Key: sdk.String("dignissimos"),
        MerchantID: "omnis",
        OauthToken: sdk.String("omnis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("fugit"),
        UploadType: sdk.String("dolorem"),
        UploadProtocol: sdk.String("quidem"),
    }, operations.ContentProductdeliverytimeCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProductDeliveryTime != nil {
        // handle response
    }
}
```

## ContentProductdeliverytimeDelete

Deletes the delivery time of a product.

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
    res, err := s.Productdeliverytime.ContentProductdeliverytimeDelete(ctx, operations.ContentProductdeliverytimeDeleteRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("debitis"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("dolor"),
        Fields: sdk.String("ad"),
        Key: sdk.String("atque"),
        MerchantID: "ut",
        OauthToken: sdk.String("asperiores"),
        PrettyPrint: sdk.Bool(false),
        ProductID: "reprehenderit",
        QuotaUser: sdk.String("deserunt"),
        UploadType: sdk.String("itaque"),
        UploadProtocol: sdk.String("et"),
    }, operations.ContentProductdeliverytimeDeleteSecurity{
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

## ContentProductdeliverytimeGet

Gets `productDeliveryTime` by `productId`.

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
    res, err := s.Productdeliverytime.ContentProductdeliverytimeGet(ctx, operations.ContentProductdeliverytimeGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("impedit"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("praesentium"),
        Fields: sdk.String("natus"),
        Key: sdk.String("vitae"),
        MerchantID: "tenetur",
        OauthToken: sdk.String("laudantium"),
        PrettyPrint: sdk.Bool(false),
        ProductID: "aspernatur",
        QuotaUser: sdk.String("eligendi"),
        UploadType: sdk.String("repudiandae"),
        UploadProtocol: sdk.String("dicta"),
    }, operations.ContentProductdeliverytimeGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProductDeliveryTime != nil {
        // handle response
    }
}
```
