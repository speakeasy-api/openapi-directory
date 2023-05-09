# Inappproducts

### Available Operations

* [AndroidpublisherInappproductsDelete](#androidpublisherinappproductsdelete) - Deletes an in-app product (i.e. a managed product or a subscription).
* [AndroidpublisherInappproductsGet](#androidpublisherinappproductsget) - Gets an in-app product, which can be a managed product or a subscription.
* [AndroidpublisherInappproductsInsert](#androidpublisherinappproductsinsert) - Creates an in-app product (i.e. a managed product or a subscription).
* [AndroidpublisherInappproductsList](#androidpublisherinappproductslist) - Lists all in-app products - both managed products and subscriptions. If an app has a large number of in-app products, the response may be paginated. In this case the response field `tokenPagination.nextPageToken` will be set and the caller should provide its value as a `token` request parameter to retrieve the next page.
* [AndroidpublisherInappproductsPatch](#androidpublisherinappproductspatch) - Patches an in-app product (i.e. a managed product or a subscription).
* [AndroidpublisherInappproductsUpdate](#androidpublisherinappproductsupdate) - Updates an in-app product (i.e. a managed product or a subscription).

## AndroidpublisherInappproductsDelete

Deletes an in-app product (i.e. a managed product or a subscription).

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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("itaque"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("totam"),
        Fields: sdk.String("earum"),
        Key: sdk.String("modi"),
        OauthToken: sdk.String("nam"),
        PackageName: "vero",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("voluptatem"),
        Sku: "ipsam",
        UploadType: sdk.String("vel"),
        UploadProtocol: sdk.String("alias"),
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

Gets an in-app product, which can be a managed product or a subscription.

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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("non"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("enim"),
        Fields: sdk.String("sint"),
        Key: sdk.String("nulla"),
        OauthToken: sdk.String("deserunt"),
        PackageName: "esse",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("nemo"),
        Sku: "reprehenderit",
        UploadType: sdk.String("est"),
        UploadProtocol: sdk.String("quis"),
    }, operations.AndroidpublisherInappproductsGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.InAppProduct != nil {
        // handle response
    }
}
```

## AndroidpublisherInappproductsInsert

Creates an in-app product (i.e. a managed product or a subscription).

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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        InAppProduct: &shared.InAppProduct{
            DefaultLanguage: sdk.String("accusamus"),
            DefaultPrice: &shared.Price{
                Currency: sdk.String("impedit"),
                PriceMicros: sdk.String("hic"),
            },
            GracePeriod: sdk.String("necessitatibus"),
            Listings: map[string]shared.InAppProductListing{
                "ex": shared.InAppProductListing{
                    Benefits: []string{
                        "debitis",
                        "delectus",
                    },
                    Description: sdk.String("quae"),
                    Title: sdk.String("Miss"),
                },
                "fuga": shared.InAppProductListing{
                    Benefits: []string{
                        "consectetur",
                        "velit",
                        "atque",
                    },
                    Description: sdk.String("ipsum"),
                    Title: sdk.String("Miss"),
                },
                "magni": shared.InAppProductListing{
                    Benefits: []string{
                        "repudiandae",
                        "nam",
                        "dolore",
                    },
                    Description: sdk.String("iusto"),
                    Title: sdk.String("Ms."),
                },
                "sequi": shared.InAppProductListing{
                    Benefits: []string{
                        "neque",
                        "quo",
                    },
                    Description: sdk.String("deleniti"),
                    Title: sdk.String("Dr."),
                },
            },
            ManagedProductTaxesAndComplianceSettings: &shared.ManagedProductTaxAndComplianceSettings{
                EeaWithdrawalRightType: shared.ManagedProductTaxAndComplianceSettingsEeaWithdrawalRightTypeEnumWithdrawalRightDigitalContent.ToPointer(),
                TaxRateInfoByRegionCode: map[string]shared.RegionalTaxRateInfo{
                    "voluptatibus": shared.RegionalTaxRateInfo{
                        EligibleForStreamingServiceTaxRate: sdk.Bool(false),
                        StreamingTaxType: shared.RegionalTaxRateInfoStreamingTaxTypeEnumStreamingTaxTypeTelcoVideoSales.ToPointer(),
                        TaxTier: shared.RegionalTaxRateInfoTaxTierEnumTaxTierBooks1.ToPointer(),
                    },
                },
            },
            PackageName: sdk.String("quibusdam"),
            Prices: map[string]shared.Price{
                "facere": shared.Price{
                    Currency: sdk.String("libero"),
                    PriceMicros: sdk.String("architecto"),
                },
            },
            PurchaseType: shared.InAppProductPurchaseTypeEnumSubscription.ToPointer(),
            Sku: sdk.String("quia"),
            Status: shared.InAppProductStatusEnumInactive.ToPointer(),
            SubscriptionPeriod: sdk.String("aliquam"),
            SubscriptionTaxesAndComplianceSettings: &shared.SubscriptionTaxAndComplianceSettings{
                EeaWithdrawalRightType: shared.SubscriptionTaxAndComplianceSettingsEeaWithdrawalRightTypeEnumWithdrawalRightTypeUnspecified.ToPointer(),
                TaxRateInfoByRegionCode: map[string]shared.RegionalTaxRateInfo{
                    "accusantium": shared.RegionalTaxRateInfo{
                        EligibleForStreamingServiceTaxRate: sdk.Bool(false),
                        StreamingTaxType: shared.RegionalTaxRateInfoStreamingTaxTypeEnumStreamingTaxTypeTelcoVideoSales.ToPointer(),
                        TaxTier: shared.RegionalTaxRateInfoTaxTierEnumTaxTierNews1.ToPointer(),
                    },
                },
            },
            TrialPeriod: sdk.String("beatae"),
        },
        AccessToken: sdk.String("vero"),
        Alt: shared.AltEnumMedia.ToPointer(),
        AutoConvertMissingPrices: sdk.Bool(false),
        Callback: sdk.String("eum"),
        Fields: sdk.String("velit"),
        Key: sdk.String("ut"),
        OauthToken: sdk.String("perspiciatis"),
        PackageName: "earum",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dicta"),
        UploadType: sdk.String("impedit"),
        UploadProtocol: sdk.String("voluptatibus"),
    }, operations.AndroidpublisherInappproductsInsertSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.InAppProduct != nil {
        // handle response
    }
}
```

## AndroidpublisherInappproductsList

Lists all in-app products - both managed products and subscriptions. If an app has a large number of in-app products, the response may be paginated. In this case the response field `tokenPagination.nextPageToken` will be set and the caller should provide its value as a `token` request parameter to retrieve the next page.

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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("itaque"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("nisi"),
        Fields: sdk.String("itaque"),
        Key: sdk.String("velit"),
        MaxResults: sdk.Int64(673838),
        OauthToken: sdk.String("non"),
        PackageName: "dolor",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("iusto"),
        StartIndex: sdk.Int64(24753),
        Token: sdk.String("doloremque"),
        UploadType: sdk.String("consequatur"),
        UploadProtocol: sdk.String("officia"),
    }, operations.AndroidpublisherInappproductsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.InappproductsListResponse != nil {
        // handle response
    }
}
```

## AndroidpublisherInappproductsPatch

Patches an in-app product (i.e. a managed product or a subscription).

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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        InAppProduct: &shared.InAppProduct{
            DefaultLanguage: sdk.String("ea"),
            DefaultPrice: &shared.Price{
                Currency: sdk.String("quidem"),
                PriceMicros: sdk.String("voluptas"),
            },
            GracePeriod: sdk.String("facilis"),
            Listings: map[string]shared.InAppProductListing{
                "perspiciatis": shared.InAppProductListing{
                    Benefits: []string{
                        "deleniti",
                        "a",
                        "voluptate",
                    },
                    Description: sdk.String("ullam"),
                    Title: sdk.String("Miss"),
                },
                "necessitatibus": shared.InAppProductListing{
                    Benefits: []string{
                        "impedit",
                        "ipsam",
                        "corporis",
                    },
                    Description: sdk.String("est"),
                    Title: sdk.String("Miss"),
                },
                "esse": shared.InAppProductListing{
                    Benefits: []string{
                        "veritatis",
                        "vero",
                    },
                    Description: sdk.String("consectetur"),
                    Title: sdk.String("Mr."),
                },
                "inventore": shared.InAppProductListing{
                    Benefits: []string{
                        "ad",
                    },
                    Description: sdk.String("qui"),
                    Title: sdk.String("Miss"),
                },
            },
            ManagedProductTaxesAndComplianceSettings: &shared.ManagedProductTaxAndComplianceSettings{
                EeaWithdrawalRightType: shared.ManagedProductTaxAndComplianceSettingsEeaWithdrawalRightTypeEnumWithdrawalRightDigitalContent.ToPointer(),
                TaxRateInfoByRegionCode: map[string]shared.RegionalTaxRateInfo{
                    "soluta": shared.RegionalTaxRateInfo{
                        EligibleForStreamingServiceTaxRate: sdk.Bool(false),
                        StreamingTaxType: shared.RegionalTaxRateInfoStreamingTaxTypeEnumStreamingTaxTypeTelcoAudioSales.ToPointer(),
                        TaxTier: shared.RegionalTaxRateInfoTaxTierEnumTaxTierNews2.ToPointer(),
                    },
                    "dolorum": shared.RegionalTaxRateInfo{
                        EligibleForStreamingServiceTaxRate: sdk.Bool(false),
                        StreamingTaxType: shared.RegionalTaxRateInfoStreamingTaxTypeEnumStreamingTaxTypeTelcoVideoMultiChannel.ToPointer(),
                        TaxTier: shared.RegionalTaxRateInfoTaxTierEnumTaxTierUnspecified.ToPointer(),
                    },
                },
            },
            PackageName: sdk.String("alias"),
            Prices: map[string]shared.Price{
                "vel": shared.Price{
                    Currency: sdk.String("quae"),
                    PriceMicros: sdk.String("quae"),
                },
            },
            PurchaseType: shared.InAppProductPurchaseTypeEnumPurchaseTypeUnspecified.ToPointer(),
            Sku: sdk.String("neque"),
            Status: shared.InAppProductStatusEnumActive.ToPointer(),
            SubscriptionPeriod: sdk.String("itaque"),
            SubscriptionTaxesAndComplianceSettings: &shared.SubscriptionTaxAndComplianceSettings{
                EeaWithdrawalRightType: shared.SubscriptionTaxAndComplianceSettingsEeaWithdrawalRightTypeEnumWithdrawalRightTypeUnspecified.ToPointer(),
                TaxRateInfoByRegionCode: map[string]shared.RegionalTaxRateInfo{
                    "unde": shared.RegionalTaxRateInfo{
                        EligibleForStreamingServiceTaxRate: sdk.Bool(false),
                        StreamingTaxType: shared.RegionalTaxRateInfoStreamingTaxTypeEnumStreamingTaxTypeTelcoAudioMultiChannel.ToPointer(),
                        TaxTier: shared.RegionalTaxRateInfoTaxTierEnumTaxTierMusicOrAudio1.ToPointer(),
                    },
                },
            },
            TrialPeriod: sdk.String("maxime"),
        },
        AccessToken: sdk.String("quia"),
        Alt: shared.AltEnumJSON.ToPointer(),
        AutoConvertMissingPrices: sdk.Bool(false),
        Callback: sdk.String("nostrum"),
        Fields: sdk.String("omnis"),
        Key: sdk.String("libero"),
        OauthToken: sdk.String("dicta"),
        PackageName: "id",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("libero"),
        Sku: "fugiat",
        UploadType: sdk.String("officia"),
        UploadProtocol: sdk.String("quos"),
    }, operations.AndroidpublisherInappproductsPatchSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.InAppProduct != nil {
        // handle response
    }
}
```

## AndroidpublisherInappproductsUpdate

Updates an in-app product (i.e. a managed product or a subscription).

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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        InAppProduct: &shared.InAppProduct{
            DefaultLanguage: sdk.String("sit"),
            DefaultPrice: &shared.Price{
                Currency: sdk.String("iusto"),
                PriceMicros: sdk.String("ipsa"),
            },
            GracePeriod: sdk.String("voluptates"),
            Listings: map[string]shared.InAppProductListing{
                "aperiam": shared.InAppProductListing{
                    Benefits: []string{
                        "dolore",
                        "eligendi",
                        "distinctio",
                    },
                    Description: sdk.String("voluptatem"),
                    Title: sdk.String("Ms."),
                },
            },
            ManagedProductTaxesAndComplianceSettings: &shared.ManagedProductTaxAndComplianceSettings{
                EeaWithdrawalRightType: shared.ManagedProductTaxAndComplianceSettingsEeaWithdrawalRightTypeEnumWithdrawalRightDigitalContent.ToPointer(),
                TaxRateInfoByRegionCode: map[string]shared.RegionalTaxRateInfo{
                    "assumenda": shared.RegionalTaxRateInfo{
                        EligibleForStreamingServiceTaxRate: sdk.Bool(false),
                        StreamingTaxType: shared.RegionalTaxRateInfoStreamingTaxTypeEnumStreamingTaxTypeUnspecified.ToPointer(),
                        TaxTier: shared.RegionalTaxRateInfoTaxTierEnumTaxTierMusicOrAudio1.ToPointer(),
                    },
                },
            },
            PackageName: sdk.String("facere"),
            Prices: map[string]shared.Price{
                "molestiae": shared.Price{
                    Currency: sdk.String("provident"),
                    PriceMicros: sdk.String("accusamus"),
                },
                "necessitatibus": shared.Price{
                    Currency: sdk.String("tempore"),
                    PriceMicros: sdk.String("sint"),
                },
                "ea": shared.Price{
                    Currency: sdk.String("autem"),
                    PriceMicros: sdk.String("ipsam"),
                },
            },
            PurchaseType: shared.InAppProductPurchaseTypeEnumSubscription.ToPointer(),
            Sku: sdk.String("laudantium"),
            Status: shared.InAppProductStatusEnumActive.ToPointer(),
            SubscriptionPeriod: sdk.String("officiis"),
            SubscriptionTaxesAndComplianceSettings: &shared.SubscriptionTaxAndComplianceSettings{
                EeaWithdrawalRightType: shared.SubscriptionTaxAndComplianceSettingsEeaWithdrawalRightTypeEnumWithdrawalRightService.ToPointer(),
                TaxRateInfoByRegionCode: map[string]shared.RegionalTaxRateInfo{
                    "at": shared.RegionalTaxRateInfo{
                        EligibleForStreamingServiceTaxRate: sdk.Bool(false),
                        StreamingTaxType: shared.RegionalTaxRateInfoStreamingTaxTypeEnumStreamingTaxTypeUnspecified.ToPointer(),
                        TaxTier: shared.RegionalTaxRateInfoTaxTierEnumTaxTierUnspecified.ToPointer(),
                    },
                    "quidem": shared.RegionalTaxRateInfo{
                        EligibleForStreamingServiceTaxRate: sdk.Bool(false),
                        StreamingTaxType: shared.RegionalTaxRateInfoStreamingTaxTypeEnumStreamingTaxTypeTelcoAudioRental.ToPointer(),
                        TaxTier: shared.RegionalTaxRateInfoTaxTierEnumTaxTierLiveOrBroadcast1.ToPointer(),
                    },
                    "accusantium": shared.RegionalTaxRateInfo{
                        EligibleForStreamingServiceTaxRate: sdk.Bool(false),
                        StreamingTaxType: shared.RegionalTaxRateInfoStreamingTaxTypeEnumStreamingTaxTypeTelcoAudioRental.ToPointer(),
                        TaxTier: shared.RegionalTaxRateInfoTaxTierEnumTaxTierLiveOrBroadcast1.ToPointer(),
                    },
                },
            },
            TrialPeriod: sdk.String("eos"),
        },
        AccessToken: sdk.String("quibusdam"),
        AllowMissing: sdk.Bool(false),
        Alt: shared.AltEnumMedia.ToPointer(),
        AutoConvertMissingPrices: sdk.Bool(false),
        Callback: sdk.String("praesentium"),
        Fields: sdk.String("odit"),
        Key: sdk.String("explicabo"),
        OauthToken: sdk.String("corporis"),
        PackageName: "error",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("earum"),
        Sku: "adipisci",
        UploadType: sdk.String("recusandae"),
        UploadProtocol: sdk.String("similique"),
    }, operations.AndroidpublisherInappproductsUpdateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.InAppProduct != nil {
        // handle response
    }
}
```
