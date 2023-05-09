# Promotions

### Available Operations

* [ContentPromotionsCreate](#contentpromotionscreate) - Inserts a promotion for your Merchant Center account. If the promotion already exists, then it updates the promotion instead. To [end or delete] (https://developers.google.com/shopping-content/guides/promotions#end_a_promotion) a promotion update the time period of the promotion to a time that has already passed.
* [ContentPromotionsGet](#contentpromotionsget) - Retrieves a promotion from your Merchant Center account.

## ContentPromotionsCreate

Inserts a promotion for your Merchant Center account. If the promotion already exists, then it updates the promotion instead. To [end or delete] (https://developers.google.com/shopping-content/guides/promotions#end_a_promotion) a promotion update the time period of the promotion to a time that has already passed.

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
    res, err := s.Promotions.ContentPromotionsCreate(ctx, operations.ContentPromotionsCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        PromotionInput: &shared.PromotionInput{
            Brand: []string{
                "quasi",
                "veritatis",
                "ex",
            },
            BrandExclusion: []string{
                "quas",
            },
            ContentLanguage: sdk.String("dolores"),
            CouponValueType: shared.PromotionCouponValueTypeEnumCouponValueTypeUnspecified.ToPointer(),
            FreeGiftDescription: sdk.String("esse"),
            FreeGiftItemID: sdk.String("quas"),
            FreeGiftValue: &shared.PriceAmount{
                Currency: sdk.String("blanditiis"),
                Value: sdk.String("laudantium"),
            },
            GenericRedemptionCode: sdk.String("voluptates"),
            GetThisQuantityDiscounted: sdk.Int(793909),
            ItemGroupID: []string{
                "vel",
                "beatae",
            },
            ItemGroupIDExclusion: []string{
                "consectetur",
                "soluta",
                "tenetur",
            },
            ItemID: []string{
                "perspiciatis",
                "suscipit",
                "ullam",
                "unde",
            },
            ItemIDExclusion: []string{
                "quidem",
                "magnam",
                "doloremque",
                "accusamus",
            },
            LimitQuantity: sdk.Int(800761),
            LimitValue: &shared.PriceAmount{
                Currency: sdk.String("sunt"),
                Value: sdk.String("voluptas"),
            },
            LongTitle: sdk.String("earum"),
            MinimumPurchaseAmount: &shared.PriceAmount{
                Currency: sdk.String("est"),
                Value: sdk.String("earum"),
            },
            MinimumPurchaseQuantity: sdk.Int(471664),
            MoneyBudget: &shared.PriceAmount{
                Currency: sdk.String("nostrum"),
                Value: sdk.String("rerum"),
            },
            MoneyOffAmount: &shared.PriceAmount{
                Currency: sdk.String("perferendis"),
                Value: sdk.String("nam"),
            },
            OfferType: shared.PromotionOfferTypeEnumNoCode.ToPointer(),
            OrderLimit: sdk.Int(191571),
            PercentOff: sdk.Int(180811),
            ProductApplicability: shared.PromotionProductApplicabilityEnumAllProducts.ToPointer(),
            ProductType: []string{
                "illum",
                "error",
            },
            ProductTypeExclusion: []string{
                "reprehenderit",
            },
            PromotionDestinationIds: []string{
                "cum",
                "culpa",
                "culpa",
                "a",
            },
            PromotionDisplayDates: sdk.String("magnam"),
            PromotionDisplayTimePeriod: &shared.TimePeriod{
                EndTime: sdk.String("eius"),
                StartTime: sdk.String("ad"),
            },
            PromotionEffectiveDates: sdk.String("quia"),
            PromotionEffectiveTimePeriod: &shared.TimePeriod{
                EndTime: sdk.String("quod"),
                StartTime: sdk.String("quaerat"),
            },
            PromotionID: sdk.String("voluptatum"),
            PromotionStatus: &shared.PromotionPromotionStatus{
                CreationDate: sdk.String("numquam"),
                DestinationStatuses: []shared.PromotionPromotionStatusDestinationStatus{
                    shared.PromotionPromotionStatusDestinationStatus{
                        Destination: sdk.String("eligendi"),
                        Status: shared.PromotionPromotionStatusDestinationStatusStatusEnumStopped.ToPointer(),
                    },
                },
                LastUpdateDate: sdk.String("tempore"),
                PromotionIssue: []shared.PromotionPromotionStatusPromotionIssue{
                    shared.PromotionPromotionStatusPromotionIssue{
                        Code: sdk.String("est"),
                        Detail: sdk.String("at"),
                    },
                },
            },
            PromotionURL: sdk.String("ipsum"),
            RedemptionChannel: []shared.PromotionRedemptionChannelEnum{
                shared.PromotionRedemptionChannelEnumOnline,
            },
            ShippingServiceNames: []string{
                "sapiente",
                "necessitatibus",
                "voluptatum",
            },
            StoreApplicability: shared.PromotionStoreApplicabilityEnumStoreApplicabilityUnspecified.ToPointer(),
            StoreCode: []string{
                "voluptatum",
                "blanditiis",
                "sapiente",
            },
            StoreCodeExclusion: []string{
                "incidunt",
                "labore",
            },
            TargetCountry: sdk.String("ut"),
        },
        AccessToken: sdk.String("enim"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("ratione"),
        Fields: sdk.String("tenetur"),
        Key: sdk.String("saepe"),
        MerchantID: "quod",
        OauthToken: sdk.String("nulla"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("tempora"),
        UploadType: sdk.String("quam"),
        UploadProtocol: sdk.String("consectetur"),
    }, operations.ContentPromotionsCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Promotion != nil {
        // handle response
    }
}
```

## ContentPromotionsGet

Retrieves a promotion from your Merchant Center account.

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
    res, err := s.Promotions.ContentPromotionsGet(ctx, operations.ContentPromotionsGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("nesciunt"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("eum"),
        Fields: sdk.String("dolor"),
        ID: "c8209379-aa69-4cd5-bbcf-79da18a7822b",
        Key: sdk.String("voluptatibus"),
        MerchantID: "omnis",
        OauthToken: sdk.String("quis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quos"),
        UploadType: sdk.String("natus"),
        UploadProtocol: sdk.String("aliquam"),
    }, operations.ContentPromotionsGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Promotion != nil {
        // handle response
    }
}
```
