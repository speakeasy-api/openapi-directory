# Monetization

### Available Operations

* [AndroidpublisherMonetizationConvertRegionPrices](#androidpublishermonetizationconvertregionprices) - Calculates the region prices, using today's exchange rate and country-specific pricing patterns, based on the price in the request for a set of regions.
* [AndroidpublisherMonetizationSubscriptionsArchive](#androidpublishermonetizationsubscriptionsarchive) - Archives a subscription. Can only be done if at least one base plan was active in the past, and no base plan is available for new or existing subscribers currently. This action is irreversible, and the subscription ID will remain reserved.
* [AndroidpublisherMonetizationSubscriptionsBasePlansActivate](#androidpublishermonetizationsubscriptionsbaseplansactivate) - Activates a base plan. Once activated, base plans will be available to new subscribers.
* [AndroidpublisherMonetizationSubscriptionsBasePlansDeactivate](#androidpublishermonetizationsubscriptionsbaseplansdeactivate) - Deactivates a base plan. Once deactivated, the base plan will become unavailable to new subscribers, but existing subscribers will maintain their subscription
* [AndroidpublisherMonetizationSubscriptionsBasePlansDelete](#androidpublishermonetizationsubscriptionsbaseplansdelete) - Deletes a base plan. Can only be done for draft base plans. This action is irreversible.
* [AndroidpublisherMonetizationSubscriptionsBasePlansMigratePrices](#androidpublishermonetizationsubscriptionsbaseplansmigrateprices) - Migrates subscribers who are receiving an historical subscription price to the currently-offered price for the specified region. Requests will cause price change notifications to be sent to users who are currently receiving an historical price older than the supplied timestamp. Subscribers who do not agree to the new price will have their subscription ended at the next renewal.
* [AndroidpublisherMonetizationSubscriptionsBasePlansOffersActivate](#androidpublishermonetizationsubscriptionsbaseplansoffersactivate) - Activates a subscription offer. Once activated, subscription offers will be available to new subscribers.
* [AndroidpublisherMonetizationSubscriptionsBasePlansOffersCreate](#androidpublishermonetizationsubscriptionsbaseplansofferscreate) - Creates a new subscription offer. Only auto-renewing base plans can have subscription offers. The offer state will be DRAFT until it is activated.
* [AndroidpublisherMonetizationSubscriptionsBasePlansOffersDeactivate](#androidpublishermonetizationsubscriptionsbaseplansoffersdeactivate) - Deactivates a subscription offer. Once deactivated, existing subscribers will maintain their subscription, but the offer will become unavailable to new subscribers.
* [AndroidpublisherMonetizationSubscriptionsBasePlansOffersDelete](#androidpublishermonetizationsubscriptionsbaseplansoffersdelete) - Deletes a subscription offer. Can only be done for draft offers. This action is irreversible.
* [AndroidpublisherMonetizationSubscriptionsBasePlansOffersGet](#androidpublishermonetizationsubscriptionsbaseplansoffersget) - Reads a single offer
* [AndroidpublisherMonetizationSubscriptionsBasePlansOffersList](#androidpublishermonetizationsubscriptionsbaseplansofferslist) - Lists all offers under a given subscription.
* [AndroidpublisherMonetizationSubscriptionsBasePlansOffersPatch](#androidpublishermonetizationsubscriptionsbaseplansofferspatch) - Updates an existing subscription offer.
* [AndroidpublisherMonetizationSubscriptionsCreate](#androidpublishermonetizationsubscriptionscreate) - Creates a new subscription. Newly added base plans will remain in draft state until activated.
* [AndroidpublisherMonetizationSubscriptionsDelete](#androidpublishermonetizationsubscriptionsdelete) - Deletes a subscription. A subscription can only be deleted if it has never had a base plan published.
* [AndroidpublisherMonetizationSubscriptionsGet](#androidpublishermonetizationsubscriptionsget) - Reads a single subscription.
* [AndroidpublisherMonetizationSubscriptionsList](#androidpublishermonetizationsubscriptionslist) - Lists all subscriptions under a given app.
* [AndroidpublisherMonetizationSubscriptionsPatch](#androidpublishermonetizationsubscriptionspatch) - Updates an existing subscription.

## AndroidpublisherMonetizationConvertRegionPrices

Calculates the region prices, using today's exchange rate and country-specific pricing patterns, based on the price in the request for a set of regions.

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
    res, err := s.Monetization.AndroidpublisherMonetizationConvertRegionPrices(ctx, operations.AndroidpublisherMonetizationConvertRegionPricesRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        ConvertRegionPricesRequest: &shared.ConvertRegionPricesRequest{
            Price: &shared.Money{
                CurrencyCode: sdk.String("placeat"),
                Nanos: sdk.Int(316542),
                Units: sdk.String("neque"),
            },
        },
        AccessToken: sdk.String("in"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("eum"),
        Fields: sdk.String("modi"),
        Key: sdk.String("corporis"),
        OauthToken: sdk.String("magnam"),
        PackageName: "voluptates",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("maiores"),
        UploadType: sdk.String("tempore"),
        UploadProtocol: sdk.String("aperiam"),
    }, operations.AndroidpublisherMonetizationConvertRegionPricesSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ConvertRegionPricesResponse != nil {
        // handle response
    }
}
```

## AndroidpublisherMonetizationSubscriptionsArchive

Archives a subscription. Can only be done if at least one base plan was active in the past, and no base plan is available for new or existing subscribers currently. This action is irreversible, and the subscription ID will remain reserved.

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
    res, err := s.Monetization.AndroidpublisherMonetizationSubscriptionsArchive(ctx, operations.AndroidpublisherMonetizationSubscriptionsArchiveRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        RequestBody: map[string]interface{}{
            "labore": "totam",
        },
        AccessToken: sdk.String("occaecati"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("quo"),
        Fields: sdk.String("velit"),
        Key: sdk.String("minus"),
        OauthToken: sdk.String("fuga"),
        PackageName: "nostrum",
        PrettyPrint: sdk.Bool(false),
        ProductID: "est",
        QuotaUser: sdk.String("impedit"),
        UploadType: sdk.String("delectus"),
        UploadProtocol: sdk.String("tempore"),
    }, operations.AndroidpublisherMonetizationSubscriptionsArchiveSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Subscription != nil {
        // handle response
    }
}
```

## AndroidpublisherMonetizationSubscriptionsBasePlansActivate

Activates a base plan. Once activated, base plans will be available to new subscribers.

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
    res, err := s.Monetization.AndroidpublisherMonetizationSubscriptionsBasePlansActivate(ctx, operations.AndroidpublisherMonetizationSubscriptionsBasePlansActivateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        RequestBody: map[string]interface{}{
            "repellat": "pariatur",
        },
        AccessToken: sdk.String("nemo"),
        Alt: shared.AltEnumMedia.ToPointer(),
        BasePlanID: "aperiam",
        Callback: sdk.String("odio"),
        Fields: sdk.String("minima"),
        Key: sdk.String("in"),
        OauthToken: sdk.String("ducimus"),
        PackageName: "excepturi",
        PrettyPrint: sdk.Bool(false),
        ProductID: "dolores",
        QuotaUser: sdk.String("error"),
        UploadType: sdk.String("veritatis"),
        UploadProtocol: sdk.String("ducimus"),
    }, operations.AndroidpublisherMonetizationSubscriptionsBasePlansActivateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Subscription != nil {
        // handle response
    }
}
```

## AndroidpublisherMonetizationSubscriptionsBasePlansDeactivate

Deactivates a base plan. Once deactivated, the base plan will become unavailable to new subscribers, but existing subscribers will maintain their subscription

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
    res, err := s.Monetization.AndroidpublisherMonetizationSubscriptionsBasePlansDeactivate(ctx, operations.AndroidpublisherMonetizationSubscriptionsBasePlansDeactivateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        RequestBody: map[string]interface{}{
            "itaque": "similique",
            "optio": "ex",
            "quaerat": "commodi",
            "officiis": "placeat",
        },
        AccessToken: sdk.String("quidem"),
        Alt: shared.AltEnumMedia.ToPointer(),
        BasePlanID: "quam",
        Callback: sdk.String("dolorem"),
        Fields: sdk.String("modi"),
        Key: sdk.String("ipsa"),
        OauthToken: sdk.String("sint"),
        PackageName: "vero",
        PrettyPrint: sdk.Bool(false),
        ProductID: "sequi",
        QuotaUser: sdk.String("repudiandae"),
        UploadType: sdk.String("cum"),
        UploadProtocol: sdk.String("dicta"),
    }, operations.AndroidpublisherMonetizationSubscriptionsBasePlansDeactivateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Subscription != nil {
        // handle response
    }
}
```

## AndroidpublisherMonetizationSubscriptionsBasePlansDelete

Deletes a base plan. Can only be done for draft base plans. This action is irreversible.

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
    res, err := s.Monetization.AndroidpublisherMonetizationSubscriptionsBasePlansDelete(ctx, operations.AndroidpublisherMonetizationSubscriptionsBasePlansDeleteRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("veniam"),
        Alt: shared.AltEnumMedia.ToPointer(),
        BasePlanID: "dolores",
        Callback: sdk.String("nam"),
        Fields: sdk.String("dicta"),
        Key: sdk.String("consequuntur"),
        OauthToken: sdk.String("necessitatibus"),
        PackageName: "nobis",
        PrettyPrint: sdk.Bool(false),
        ProductID: "ipsa",
        QuotaUser: sdk.String("ducimus"),
        UploadType: sdk.String("maiores"),
        UploadProtocol: sdk.String("veritatis"),
    }, operations.AndroidpublisherMonetizationSubscriptionsBasePlansDeleteSecurity{
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

## AndroidpublisherMonetizationSubscriptionsBasePlansMigratePrices

Migrates subscribers who are receiving an historical subscription price to the currently-offered price for the specified region. Requests will cause price change notifications to be sent to users who are currently receiving an historical price older than the supplied timestamp. Subscribers who do not agree to the new price will have their subscription ended at the next renewal.

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
    res, err := s.Monetization.AndroidpublisherMonetizationSubscriptionsBasePlansMigratePrices(ctx, operations.AndroidpublisherMonetizationSubscriptionsBasePlansMigratePricesRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        MigrateBasePlanPricesRequest: &shared.MigrateBasePlanPricesRequest{
            RegionalPriceMigrations: []shared.RegionalPriceMigrationConfig{
                shared.RegionalPriceMigrationConfig{
                    OldestAllowedPriceVersionTime: sdk.String("pariatur"),
                    RegionCode: sdk.String("libero"),
                },
                shared.RegionalPriceMigrationConfig{
                    OldestAllowedPriceVersionTime: sdk.String("excepturi"),
                    RegionCode: sdk.String("occaecati"),
                },
            },
            RegionsVersion: &shared.RegionsVersion{
                Version: sdk.String("nemo"),
            },
        },
        AccessToken: sdk.String("aliquam"),
        Alt: shared.AltEnumMedia.ToPointer(),
        BasePlanID: "doloribus",
        Callback: sdk.String("eligendi"),
        Fields: sdk.String("sint"),
        Key: sdk.String("enim"),
        OauthToken: sdk.String("hic"),
        PackageName: "animi",
        PrettyPrint: sdk.Bool(false),
        ProductID: "quas",
        QuotaUser: sdk.String("totam"),
        UploadType: sdk.String("molestias"),
        UploadProtocol: sdk.String("odio"),
    }, operations.AndroidpublisherMonetizationSubscriptionsBasePlansMigratePricesSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MigrateBasePlanPricesResponse != nil {
        // handle response
    }
}
```

## AndroidpublisherMonetizationSubscriptionsBasePlansOffersActivate

Activates a subscription offer. Once activated, subscription offers will be available to new subscribers.

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
    res, err := s.Monetization.AndroidpublisherMonetizationSubscriptionsBasePlansOffersActivate(ctx, operations.AndroidpublisherMonetizationSubscriptionsBasePlansOffersActivateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        RequestBody: map[string]interface{}{
            "architecto": "quos",
            "iste": "assumenda",
            "tempore": "libero",
            "velit": "doloremque",
        },
        AccessToken: sdk.String("delectus"),
        Alt: shared.AltEnumProto.ToPointer(),
        BasePlanID: "cum",
        Callback: sdk.String("ipsum"),
        Fields: sdk.String("adipisci"),
        Key: sdk.String("saepe"),
        OauthToken: sdk.String("deserunt"),
        OfferID: "doloremque",
        PackageName: "quis",
        PrettyPrint: sdk.Bool(false),
        ProductID: "veniam",
        QuotaUser: sdk.String("libero"),
        UploadType: sdk.String("architecto"),
        UploadProtocol: sdk.String("cupiditate"),
    }, operations.AndroidpublisherMonetizationSubscriptionsBasePlansOffersActivateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SubscriptionOffer != nil {
        // handle response
    }
}
```

## AndroidpublisherMonetizationSubscriptionsBasePlansOffersCreate

Creates a new subscription offer. Only auto-renewing base plans can have subscription offers. The offer state will be DRAFT until it is activated.

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
    res, err := s.Monetization.AndroidpublisherMonetizationSubscriptionsBasePlansOffersCreate(ctx, operations.AndroidpublisherMonetizationSubscriptionsBasePlansOffersCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        SubscriptionOfferInput: &shared.SubscriptionOfferInput{
            BasePlanID: sdk.String("eligendi"),
            OfferID: sdk.String("possimus"),
            OfferTags: []shared.OfferTag{
                shared.OfferTag{
                    Tag: sdk.String("magnam"),
                },
                shared.OfferTag{
                    Tag: sdk.String("itaque"),
                },
            },
            OtherRegionsConfig: &shared.OtherRegionsSubscriptionOfferConfig{
                OtherRegionsNewSubscriberAvailability: sdk.Bool(false),
            },
            PackageName: sdk.String("sed"),
            Phases: []shared.SubscriptionOfferPhase{
                shared.SubscriptionOfferPhase{
                    Duration: sdk.String("veniam"),
                    OtherRegionsConfig: &shared.OtherRegionsSubscriptionOfferPhaseConfig{
                        AbsoluteDiscounts: &shared.OtherRegionsSubscriptionOfferPhasePrices{
                            EurPrice: &shared.Money{
                                CurrencyCode: sdk.String("consequuntur"),
                                Nanos: sdk.Int(813880),
                                Units: sdk.String("laudantium"),
                            },
                            UsdPrice: &shared.Money{
                                CurrencyCode: sdk.String("odit"),
                                Nanos: sdk.Int(863477),
                                Units: sdk.String("amet"),
                            },
                        },
                        OtherRegionsPrices: &shared.OtherRegionsSubscriptionOfferPhasePrices{
                            EurPrice: &shared.Money{
                                CurrencyCode: sdk.String("exercitationem"),
                                Nanos: sdk.Int(68852),
                                Units: sdk.String("velit"),
                            },
                            UsdPrice: &shared.Money{
                                CurrencyCode: sdk.String("facilis"),
                                Nanos: sdk.Int(731065),
                                Units: sdk.String("nisi"),
                            },
                        },
                        RelativeDiscount: sdk.Float64(9775.18),
                    },
                    RecurrenceCount: sdk.Int(310840),
                    RegionalConfigs: []shared.RegionalSubscriptionOfferPhaseConfig{
                        shared.RegionalSubscriptionOfferPhaseConfig{
                            AbsoluteDiscount: &shared.Money{
                                CurrencyCode: sdk.String("distinctio"),
                                Nanos: sdk.Int(392430),
                                Units: sdk.String("quis"),
                            },
                            Price: &shared.Money{
                                CurrencyCode: sdk.String("nisi"),
                                Nanos: sdk.Int(727771),
                                Units: sdk.String("minus"),
                            },
                            RegionCode: sdk.String("facere"),
                            RelativeDiscount: sdk.Float64(7060.61),
                        },
                        shared.RegionalSubscriptionOfferPhaseConfig{
                            AbsoluteDiscount: &shared.Money{
                                CurrencyCode: sdk.String("ipsum"),
                                Nanos: sdk.Int(318917),
                                Units: sdk.String("voluptatibus"),
                            },
                            Price: &shared.Money{
                                CurrencyCode: sdk.String("voluptatibus"),
                                Nanos: sdk.Int(162358),
                                Units: sdk.String("debitis"),
                            },
                            RegionCode: sdk.String("labore"),
                            RelativeDiscount: sdk.Float64(7009.28),
                        },
                        shared.RegionalSubscriptionOfferPhaseConfig{
                            AbsoluteDiscount: &shared.Money{
                                CurrencyCode: sdk.String("eos"),
                                Nanos: sdk.Int(440777),
                                Units: sdk.String("nostrum"),
                            },
                            Price: &shared.Money{
                                CurrencyCode: sdk.String("neque"),
                                Nanos: sdk.Int(480061),
                                Units: sdk.String("est"),
                            },
                            RegionCode: sdk.String("rem"),
                            RelativeDiscount: sdk.Float64(7538.9),
                        },
                    },
                },
                shared.SubscriptionOfferPhase{
                    Duration: sdk.String("fugiat"),
                    OtherRegionsConfig: &shared.OtherRegionsSubscriptionOfferPhaseConfig{
                        AbsoluteDiscounts: &shared.OtherRegionsSubscriptionOfferPhasePrices{
                            EurPrice: &shared.Money{
                                CurrencyCode: sdk.String("unde"),
                                Nanos: sdk.Int(889448),
                                Units: sdk.String("ducimus"),
                            },
                            UsdPrice: &shared.Money{
                                CurrencyCode: sdk.String("dolor"),
                                Nanos: sdk.Int(118041),
                                Units: sdk.String("error"),
                            },
                        },
                        OtherRegionsPrices: &shared.OtherRegionsSubscriptionOfferPhasePrices{
                            EurPrice: &shared.Money{
                                CurrencyCode: sdk.String("porro"),
                                Nanos: sdk.Int(111496),
                                Units: sdk.String("dignissimos"),
                            },
                            UsdPrice: &shared.Money{
                                CurrencyCode: sdk.String("esse"),
                                Nanos: sdk.Int(854115),
                                Units: sdk.String("ad"),
                            },
                        },
                        RelativeDiscount: sdk.Float64(1348.18),
                    },
                    RecurrenceCount: sdk.Int(316501),
                    RegionalConfigs: []shared.RegionalSubscriptionOfferPhaseConfig{
                        shared.RegionalSubscriptionOfferPhaseConfig{
                            AbsoluteDiscount: &shared.Money{
                                CurrencyCode: sdk.String("iusto"),
                                Nanos: sdk.Int(491201),
                                Units: sdk.String("libero"),
                            },
                            Price: &shared.Money{
                                CurrencyCode: sdk.String("illo"),
                                Nanos: sdk.Int(69182),
                                Units: sdk.String("incidunt"),
                            },
                            RegionCode: sdk.String("accusamus"),
                            RelativeDiscount: sdk.Float64(9025.81),
                        },
                        shared.RegionalSubscriptionOfferPhaseConfig{
                            AbsoluteDiscount: &shared.Money{
                                CurrencyCode: sdk.String("tempore"),
                                Nanos: sdk.Int(334018),
                                Units: sdk.String("eos"),
                            },
                            Price: &shared.Money{
                                CurrencyCode: sdk.String("reiciendis"),
                                Nanos: sdk.Int(939161),
                                Units: sdk.String("reprehenderit"),
                            },
                            RegionCode: sdk.String("praesentium"),
                            RelativeDiscount: sdk.Float64(3670.46),
                        },
                        shared.RegionalSubscriptionOfferPhaseConfig{
                            AbsoluteDiscount: &shared.Money{
                                CurrencyCode: sdk.String("repellat"),
                                Nanos: sdk.Int(789770),
                                Units: sdk.String("sequi"),
                            },
                            Price: &shared.Money{
                                CurrencyCode: sdk.String("nihil"),
                                Nanos: sdk.Int(534908),
                                Units: sdk.String("illo"),
                            },
                            RegionCode: sdk.String("labore"),
                            RelativeDiscount: sdk.Float64(8288.41),
                        },
                        shared.RegionalSubscriptionOfferPhaseConfig{
                            AbsoluteDiscount: &shared.Money{
                                CurrencyCode: sdk.String("aliquam"),
                                Nanos: sdk.Int(790463),
                                Units: sdk.String("provident"),
                            },
                            Price: &shared.Money{
                                CurrencyCode: sdk.String("laudantium"),
                                Nanos: sdk.Int(921719),
                                Units: sdk.String("consequatur"),
                            },
                            RegionCode: sdk.String("maxime"),
                            RelativeDiscount: sdk.Float64(1363.57),
                        },
                    },
                },
                shared.SubscriptionOfferPhase{
                    Duration: sdk.String("nam"),
                    OtherRegionsConfig: &shared.OtherRegionsSubscriptionOfferPhaseConfig{
                        AbsoluteDiscounts: &shared.OtherRegionsSubscriptionOfferPhasePrices{
                            EurPrice: &shared.Money{
                                CurrencyCode: sdk.String("expedita"),
                                Nanos: sdk.Int(559174),
                                Units: sdk.String("provident"),
                            },
                            UsdPrice: &shared.Money{
                                CurrencyCode: sdk.String("repudiandae"),
                                Nanos: sdk.Int(700045),
                                Units: sdk.String("dignissimos"),
                            },
                        },
                        OtherRegionsPrices: &shared.OtherRegionsSubscriptionOfferPhasePrices{
                            EurPrice: &shared.Money{
                                CurrencyCode: sdk.String("corporis"),
                                Nanos: sdk.Int(873833),
                                Units: sdk.String("similique"),
                            },
                            UsdPrice: &shared.Money{
                                CurrencyCode: sdk.String("repellendus"),
                                Nanos: sdk.Int(434827),
                                Units: sdk.String("dolorem"),
                            },
                        },
                        RelativeDiscount: sdk.Float64(4138.01),
                    },
                    RecurrenceCount: sdk.Int(771226),
                    RegionalConfigs: []shared.RegionalSubscriptionOfferPhaseConfig{
                        shared.RegionalSubscriptionOfferPhaseConfig{
                            AbsoluteDiscount: &shared.Money{
                                CurrencyCode: sdk.String("aut"),
                                Nanos: sdk.Int(32055),
                                Units: sdk.String("ad"),
                            },
                            Price: &shared.Money{
                                CurrencyCode: sdk.String("quae"),
                                Nanos: sdk.Int(229567),
                                Units: sdk.String("illum"),
                            },
                            RegionCode: sdk.String("praesentium"),
                            RelativeDiscount: sdk.Float64(6955.26),
                        },
                        shared.RegionalSubscriptionOfferPhaseConfig{
                            AbsoluteDiscount: &shared.Money{
                                CurrencyCode: sdk.String("cum"),
                                Nanos: sdk.Int(230411),
                                Units: sdk.String("quasi"),
                            },
                            Price: &shared.Money{
                                CurrencyCode: sdk.String("dicta"),
                                Nanos: sdk.Int(514922),
                                Units: sdk.String("doloremque"),
                            },
                            RegionCode: sdk.String("earum"),
                            RelativeDiscount: sdk.Float64(4797.07),
                        },
                    },
                },
                shared.SubscriptionOfferPhase{
                    Duration: sdk.String("amet"),
                    OtherRegionsConfig: &shared.OtherRegionsSubscriptionOfferPhaseConfig{
                        AbsoluteDiscounts: &shared.OtherRegionsSubscriptionOfferPhasePrices{
                            EurPrice: &shared.Money{
                                CurrencyCode: sdk.String("provident"),
                                Nanos: sdk.Int(677141),
                                Units: sdk.String("necessitatibus"),
                            },
                            UsdPrice: &shared.Money{
                                CurrencyCode: sdk.String("provident"),
                                Nanos: sdk.Int(920272),
                                Units: sdk.String("consequatur"),
                            },
                        },
                        OtherRegionsPrices: &shared.OtherRegionsSubscriptionOfferPhasePrices{
                            EurPrice: &shared.Money{
                                CurrencyCode: sdk.String("nemo"),
                                Nanos: sdk.Int(475826),
                                Units: sdk.String("itaque"),
                            },
                            UsdPrice: &shared.Money{
                                CurrencyCode: sdk.String("facilis"),
                                Nanos: sdk.Int(545779),
                                Units: sdk.String("aperiam"),
                            },
                        },
                        RelativeDiscount: sdk.Float64(5740.92),
                    },
                    RecurrenceCount: sdk.Int(879522),
                    RegionalConfigs: []shared.RegionalSubscriptionOfferPhaseConfig{
                        shared.RegionalSubscriptionOfferPhaseConfig{
                            AbsoluteDiscount: &shared.Money{
                                CurrencyCode: sdk.String("totam"),
                                Nanos: sdk.Int(115861),
                                Units: sdk.String("voluptatem"),
                            },
                            Price: &shared.Money{
                                CurrencyCode: sdk.String("velit"),
                                Nanos: sdk.Int(224413),
                                Units: sdk.String("sunt"),
                            },
                            RegionCode: sdk.String("a"),
                            RelativeDiscount: sdk.Float64(2232.91),
                        },
                    },
                },
            },
            ProductID: sdk.String("occaecati"),
            RegionalConfigs: []shared.RegionalSubscriptionOfferConfig{
                shared.RegionalSubscriptionOfferConfig{
                    NewSubscriberAvailability: sdk.Bool(false),
                    RegionCode: sdk.String("beatae"),
                },
                shared.RegionalSubscriptionOfferConfig{
                    NewSubscriberAvailability: sdk.Bool(false),
                    RegionCode: sdk.String("at"),
                },
                shared.RegionalSubscriptionOfferConfig{
                    NewSubscriberAvailability: sdk.Bool(false),
                    RegionCode: sdk.String("labore"),
                },
            },
            Targeting: &shared.SubscriptionOfferTargeting{
                AcquisitionRule: &shared.AcquisitionTargetingRule{
                    Scope: &shared.TargetingRuleScope{
                        SpecificSubscriptionInApp: sdk.String("minus"),
                    },
                },
                UpgradeRule: &shared.UpgradeTargetingRule{
                    BillingPeriodDuration: sdk.String("esse"),
                    OncePerUser: sdk.Bool(false),
                    Scope: &shared.TargetingRuleScope{
                        SpecificSubscriptionInApp: sdk.String("voluptatem"),
                    },
                },
            },
        },
        AccessToken: sdk.String("perferendis"),
        Alt: shared.AltEnumProto.ToPointer(),
        BasePlanID: "ea",
        Callback: sdk.String("aperiam"),
        Fields: sdk.String("dignissimos"),
        Key: sdk.String("repellat"),
        OauthToken: sdk.String("velit"),
        OfferID: sdk.String("porro"),
        PackageName: "provident",
        PrettyPrint: sdk.Bool(false),
        ProductID: "consectetur",
        QuotaUser: sdk.String("eligendi"),
        RegionsVersionVersion: sdk.String("dignissimos"),
        UploadType: sdk.String("consectetur"),
        UploadProtocol: sdk.String("soluta"),
    }, operations.AndroidpublisherMonetizationSubscriptionsBasePlansOffersCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SubscriptionOffer != nil {
        // handle response
    }
}
```

## AndroidpublisherMonetizationSubscriptionsBasePlansOffersDeactivate

Deactivates a subscription offer. Once deactivated, existing subscribers will maintain their subscription, but the offer will become unavailable to new subscribers.

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
    res, err := s.Monetization.AndroidpublisherMonetizationSubscriptionsBasePlansOffersDeactivate(ctx, operations.AndroidpublisherMonetizationSubscriptionsBasePlansOffersDeactivateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        RequestBody: map[string]interface{}{
            "officia": "amet",
            "tenetur": "aspernatur",
            "quo": "itaque",
            "illum": "laborum",
        },
        AccessToken: sdk.String("dignissimos"),
        Alt: shared.AltEnumProto.ToPointer(),
        BasePlanID: "qui",
        Callback: sdk.String("consectetur"),
        Fields: sdk.String("repellat"),
        Key: sdk.String("explicabo"),
        OauthToken: sdk.String("explicabo"),
        OfferID: "exercitationem",
        PackageName: "nihil",
        PrettyPrint: sdk.Bool(false),
        ProductID: "non",
        QuotaUser: sdk.String("ab"),
        UploadType: sdk.String("illo"),
        UploadProtocol: sdk.String("hic"),
    }, operations.AndroidpublisherMonetizationSubscriptionsBasePlansOffersDeactivateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SubscriptionOffer != nil {
        // handle response
    }
}
```

## AndroidpublisherMonetizationSubscriptionsBasePlansOffersDelete

Deletes a subscription offer. Can only be done for draft offers. This action is irreversible.

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
    res, err := s.Monetization.AndroidpublisherMonetizationSubscriptionsBasePlansOffersDelete(ctx, operations.AndroidpublisherMonetizationSubscriptionsBasePlansOffersDeleteRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("delectus"),
        Alt: shared.AltEnumJSON.ToPointer(),
        BasePlanID: "distinctio",
        Callback: sdk.String("in"),
        Fields: sdk.String("exercitationem"),
        Key: sdk.String("labore"),
        OauthToken: sdk.String("numquam"),
        OfferID: "repudiandae",
        PackageName: "modi",
        PrettyPrint: sdk.Bool(false),
        ProductID: "in",
        QuotaUser: sdk.String("explicabo"),
        UploadType: sdk.String("accusamus"),
        UploadProtocol: sdk.String("rem"),
    }, operations.AndroidpublisherMonetizationSubscriptionsBasePlansOffersDeleteSecurity{
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

## AndroidpublisherMonetizationSubscriptionsBasePlansOffersGet

Reads a single offer

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
    res, err := s.Monetization.AndroidpublisherMonetizationSubscriptionsBasePlansOffersGet(ctx, operations.AndroidpublisherMonetizationSubscriptionsBasePlansOffersGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("odit"),
        Alt: shared.AltEnumMedia.ToPointer(),
        BasePlanID: "enim",
        Callback: sdk.String("voluptate"),
        Fields: sdk.String("similique"),
        Key: sdk.String("minima"),
        OauthToken: sdk.String("libero"),
        OfferID: "magnam",
        PackageName: "sit",
        PrettyPrint: sdk.Bool(false),
        ProductID: "modi",
        QuotaUser: sdk.String("eum"),
        UploadType: sdk.String("nesciunt"),
        UploadProtocol: sdk.String("mollitia"),
    }, operations.AndroidpublisherMonetizationSubscriptionsBasePlansOffersGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SubscriptionOffer != nil {
        // handle response
    }
}
```

## AndroidpublisherMonetizationSubscriptionsBasePlansOffersList

Lists all offers under a given subscription.

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
    res, err := s.Monetization.AndroidpublisherMonetizationSubscriptionsBasePlansOffersList(ctx, operations.AndroidpublisherMonetizationSubscriptionsBasePlansOffersListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("fugiat"),
        Alt: shared.AltEnumMedia.ToPointer(),
        BasePlanID: "molestiae",
        Callback: sdk.String("veniam"),
        Fields: sdk.String("reiciendis"),
        Key: sdk.String("ab"),
        OauthToken: sdk.String("modi"),
        PackageName: "aut",
        PageSize: sdk.Int64(13508),
        PageToken: sdk.String("eveniet"),
        PrettyPrint: sdk.Bool(false),
        ProductID: "odio",
        QuotaUser: sdk.String("commodi"),
        UploadType: sdk.String("numquam"),
        UploadProtocol: sdk.String("dolorum"),
    }, operations.AndroidpublisherMonetizationSubscriptionsBasePlansOffersListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListSubscriptionOffersResponse != nil {
        // handle response
    }
}
```

## AndroidpublisherMonetizationSubscriptionsBasePlansOffersPatch

Updates an existing subscription offer.

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
    res, err := s.Monetization.AndroidpublisherMonetizationSubscriptionsBasePlansOffersPatch(ctx, operations.AndroidpublisherMonetizationSubscriptionsBasePlansOffersPatchRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        SubscriptionOfferInput: &shared.SubscriptionOfferInput{
            BasePlanID: sdk.String("voluptate"),
            OfferID: sdk.String("consectetur"),
            OfferTags: []shared.OfferTag{
                shared.OfferTag{
                    Tag: sdk.String("quaerat"),
                },
            },
            OtherRegionsConfig: &shared.OtherRegionsSubscriptionOfferConfig{
                OtherRegionsNewSubscriberAvailability: sdk.Bool(false),
            },
            PackageName: sdk.String("itaque"),
            Phases: []shared.SubscriptionOfferPhase{
                shared.SubscriptionOfferPhase{
                    Duration: sdk.String("sunt"),
                    OtherRegionsConfig: &shared.OtherRegionsSubscriptionOfferPhaseConfig{
                        AbsoluteDiscounts: &shared.OtherRegionsSubscriptionOfferPhasePrices{
                            EurPrice: &shared.Money{
                                CurrencyCode: sdk.String("distinctio"),
                                Nanos: sdk.Int(481375),
                                Units: sdk.String("quas"),
                            },
                            UsdPrice: &shared.Money{
                                CurrencyCode: sdk.String("et"),
                                Nanos: sdk.Int(704948),
                                Units: sdk.String("amet"),
                            },
                        },
                        OtherRegionsPrices: &shared.OtherRegionsSubscriptionOfferPhasePrices{
                            EurPrice: &shared.Money{
                                CurrencyCode: sdk.String("autem"),
                                Nanos: sdk.Int(685415),
                                Units: sdk.String("alias"),
                            },
                            UsdPrice: &shared.Money{
                                CurrencyCode: sdk.String("rem"),
                                Nanos: sdk.Int(11355),
                                Units: sdk.String("quos"),
                            },
                        },
                        RelativeDiscount: sdk.Float64(5112.22),
                    },
                    RecurrenceCount: sdk.Int(832239),
                    RegionalConfigs: []shared.RegionalSubscriptionOfferPhaseConfig{
                        shared.RegionalSubscriptionOfferPhaseConfig{
                            AbsoluteDiscount: &shared.Money{
                                CurrencyCode: sdk.String("quae"),
                                Nanos: sdk.Int(51075),
                                Units: sdk.String("saepe"),
                            },
                            Price: &shared.Money{
                                CurrencyCode: sdk.String("delectus"),
                                Nanos: sdk.Int(651228),
                                Units: sdk.String("nulla"),
                            },
                            RegionCode: sdk.String("officia"),
                            RelativeDiscount: sdk.Float64(1520.27),
                        },
                    },
                },
                shared.SubscriptionOfferPhase{
                    Duration: sdk.String("voluptatem"),
                    OtherRegionsConfig: &shared.OtherRegionsSubscriptionOfferPhaseConfig{
                        AbsoluteDiscounts: &shared.OtherRegionsSubscriptionOfferPhasePrices{
                            EurPrice: &shared.Money{
                                CurrencyCode: sdk.String("alias"),
                                Nanos: sdk.Int(910073),
                                Units: sdk.String("hic"),
                            },
                            UsdPrice: &shared.Money{
                                CurrencyCode: sdk.String("voluptatem"),
                                Nanos: sdk.Int(278325),
                                Units: sdk.String("qui"),
                            },
                        },
                        OtherRegionsPrices: &shared.OtherRegionsSubscriptionOfferPhasePrices{
                            EurPrice: &shared.Money{
                                CurrencyCode: sdk.String("qui"),
                                Nanos: sdk.Int(895912),
                                Units: sdk.String("harum"),
                            },
                            UsdPrice: &shared.Money{
                                CurrencyCode: sdk.String("explicabo"),
                                Nanos: sdk.Int(108903),
                                Units: sdk.String("aliquid"),
                            },
                        },
                        RelativeDiscount: sdk.Float64(2646.49),
                    },
                    RecurrenceCount: sdk.Int(760049),
                    RegionalConfigs: []shared.RegionalSubscriptionOfferPhaseConfig{
                        shared.RegionalSubscriptionOfferPhaseConfig{
                            AbsoluteDiscount: &shared.Money{
                                CurrencyCode: sdk.String("molestias"),
                                Nanos: sdk.Int(639463),
                                Units: sdk.String("libero"),
                            },
                            Price: &shared.Money{
                                CurrencyCode: sdk.String("totam"),
                                Nanos: sdk.Int(192846),
                                Units: sdk.String("aliquid"),
                            },
                            RegionCode: sdk.String("ea"),
                            RelativeDiscount: sdk.Float64(7745.01),
                        },
                        shared.RegionalSubscriptionOfferPhaseConfig{
                            AbsoluteDiscount: &shared.Money{
                                CurrencyCode: sdk.String("ducimus"),
                                Nanos: sdk.Int(140957),
                                Units: sdk.String("velit"),
                            },
                            Price: &shared.Money{
                                CurrencyCode: sdk.String("reiciendis"),
                                Nanos: sdk.Int(997918),
                                Units: sdk.String("nulla"),
                            },
                            RegionCode: sdk.String("laborum"),
                            RelativeDiscount: sdk.Float64(6176.57),
                        },
                        shared.RegionalSubscriptionOfferPhaseConfig{
                            AbsoluteDiscount: &shared.Money{
                                CurrencyCode: sdk.String("accusamus"),
                                Nanos: sdk.Int(42906),
                                Units: sdk.String("nisi"),
                            },
                            Price: &shared.Money{
                                CurrencyCode: sdk.String("rerum"),
                                Nanos: sdk.Int(924840),
                                Units: sdk.String("voluptates"),
                            },
                            RegionCode: sdk.String("non"),
                            RelativeDiscount: sdk.Float64(5245.77),
                        },
                        shared.RegionalSubscriptionOfferPhaseConfig{
                            AbsoluteDiscount: &shared.Money{
                                CurrencyCode: sdk.String("quia"),
                                Nanos: sdk.Int(354225),
                                Units: sdk.String("quisquam"),
                            },
                            Price: &shared.Money{
                                CurrencyCode: sdk.String("dicta"),
                                Nanos: sdk.Int(973017),
                                Units: sdk.String("eligendi"),
                            },
                            RegionCode: sdk.String("quae"),
                            RelativeDiscount: sdk.Float64(8850.22),
                        },
                    },
                },
                shared.SubscriptionOfferPhase{
                    Duration: sdk.String("architecto"),
                    OtherRegionsConfig: &shared.OtherRegionsSubscriptionOfferPhaseConfig{
                        AbsoluteDiscounts: &shared.OtherRegionsSubscriptionOfferPhasePrices{
                            EurPrice: &shared.Money{
                                CurrencyCode: sdk.String("architecto"),
                                Nanos: sdk.Int(317898),
                                Units: sdk.String("optio"),
                            },
                            UsdPrice: &shared.Money{
                                CurrencyCode: sdk.String("rem"),
                                Nanos: sdk.Int(17060),
                                Units: sdk.String("facilis"),
                            },
                        },
                        OtherRegionsPrices: &shared.OtherRegionsSubscriptionOfferPhasePrices{
                            EurPrice: &shared.Money{
                                CurrencyCode: sdk.String("reiciendis"),
                                Nanos: sdk.Int(955551),
                                Units: sdk.String("iste"),
                            },
                            UsdPrice: &shared.Money{
                                CurrencyCode: sdk.String("dicta"),
                                Nanos: sdk.Int(552439),
                                Units: sdk.String("ullam"),
                            },
                        },
                        RelativeDiscount: sdk.Float64(2959.5),
                    },
                    RecurrenceCount: sdk.Int(266284),
                    RegionalConfigs: []shared.RegionalSubscriptionOfferPhaseConfig{
                        shared.RegionalSubscriptionOfferPhaseConfig{
                            AbsoluteDiscount: &shared.Money{
                                CurrencyCode: sdk.String("maxime"),
                                Nanos: sdk.Int(265905),
                                Units: sdk.String("consequuntur"),
                            },
                            Price: &shared.Money{
                                CurrencyCode: sdk.String("assumenda"),
                                Nanos: sdk.Int(876840),
                                Units: sdk.String("doloribus"),
                            },
                            RegionCode: sdk.String("impedit"),
                            RelativeDiscount: sdk.Float64(7833.97),
                        },
                        shared.RegionalSubscriptionOfferPhaseConfig{
                            AbsoluteDiscount: &shared.Money{
                                CurrencyCode: sdk.String("accusamus"),
                                Nanos: sdk.Int(518990),
                                Units: sdk.String("reiciendis"),
                            },
                            Price: &shared.Money{
                                CurrencyCode: sdk.String("ab"),
                                Nanos: sdk.Int(573444),
                                Units: sdk.String("nihil"),
                            },
                            RegionCode: sdk.String("esse"),
                            RelativeDiscount: sdk.Float64(4382.56),
                        },
                        shared.RegionalSubscriptionOfferPhaseConfig{
                            AbsoluteDiscount: &shared.Money{
                                CurrencyCode: sdk.String("odio"),
                                Nanos: sdk.Int(202796),
                                Units: sdk.String("debitis"),
                            },
                            Price: &shared.Money{
                                CurrencyCode: sdk.String("vel"),
                                Nanos: sdk.Int(208683),
                                Units: sdk.String("corporis"),
                            },
                            RegionCode: sdk.String("voluptas"),
                            RelativeDiscount: sdk.Float64(1636.84),
                        },
                        shared.RegionalSubscriptionOfferPhaseConfig{
                            AbsoluteDiscount: &shared.Money{
                                CurrencyCode: sdk.String("officia"),
                                Nanos: sdk.Int(441374),
                                Units: sdk.String("distinctio"),
                            },
                            Price: &shared.Money{
                                CurrencyCode: sdk.String("eius"),
                                Nanos: sdk.Int(56372),
                                Units: sdk.String("rem"),
                            },
                            RegionCode: sdk.String("maiores"),
                            RelativeDiscount: sdk.Float64(351.6),
                        },
                    },
                },
                shared.SubscriptionOfferPhase{
                    Duration: sdk.String("veniam"),
                    OtherRegionsConfig: &shared.OtherRegionsSubscriptionOfferPhaseConfig{
                        AbsoluteDiscounts: &shared.OtherRegionsSubscriptionOfferPhasePrices{
                            EurPrice: &shared.Money{
                                CurrencyCode: sdk.String("saepe"),
                                Nanos: sdk.Int(206063),
                                Units: sdk.String("facere"),
                            },
                            UsdPrice: &shared.Money{
                                CurrencyCode: sdk.String("aliquam"),
                                Nanos: sdk.Int(552581),
                                Units: sdk.String("doloribus"),
                            },
                        },
                        OtherRegionsPrices: &shared.OtherRegionsSubscriptionOfferPhasePrices{
                            EurPrice: &shared.Money{
                                CurrencyCode: sdk.String("fugiat"),
                                Nanos: sdk.Int(668577),
                                Units: sdk.String("delectus"),
                            },
                            UsdPrice: &shared.Money{
                                CurrencyCode: sdk.String("velit"),
                                Nanos: sdk.Int(110522),
                                Units: sdk.String("nesciunt"),
                            },
                        },
                        RelativeDiscount: sdk.Float64(6308.32),
                    },
                    RecurrenceCount: sdk.Int(74895),
                    RegionalConfigs: []shared.RegionalSubscriptionOfferPhaseConfig{
                        shared.RegionalSubscriptionOfferPhaseConfig{
                            AbsoluteDiscount: &shared.Money{
                                CurrencyCode: sdk.String("nemo"),
                                Nanos: sdk.Int(987890),
                                Units: sdk.String("possimus"),
                            },
                            Price: &shared.Money{
                                CurrencyCode: sdk.String("unde"),
                                Nanos: sdk.Int(275425),
                                Units: sdk.String("explicabo"),
                            },
                            RegionCode: sdk.String("ipsam"),
                            RelativeDiscount: sdk.Float64(5831.93),
                        },
                        shared.RegionalSubscriptionOfferPhaseConfig{
                            AbsoluteDiscount: &shared.Money{
                                CurrencyCode: sdk.String("optio"),
                                Nanos: sdk.Int(2064),
                                Units: sdk.String("quidem"),
                            },
                            Price: &shared.Money{
                                CurrencyCode: sdk.String("nesciunt"),
                                Nanos: sdk.Int(412433),
                                Units: sdk.String("sapiente"),
                            },
                            RegionCode: sdk.String("consequuntur"),
                            RelativeDiscount: sdk.Float64(3304.4),
                        },
                        shared.RegionalSubscriptionOfferPhaseConfig{
                            AbsoluteDiscount: &shared.Money{
                                CurrencyCode: sdk.String("debitis"),
                                Nanos: sdk.Int(638390),
                                Units: sdk.String("sint"),
                            },
                            Price: &shared.Money{
                                CurrencyCode: sdk.String("ut"),
                                Nanos: sdk.Int(256768),
                                Units: sdk.String("tenetur"),
                            },
                            RegionCode: sdk.String("adipisci"),
                            RelativeDiscount: sdk.Float64(7285.59),
                        },
                        shared.RegionalSubscriptionOfferPhaseConfig{
                            AbsoluteDiscount: &shared.Money{
                                CurrencyCode: sdk.String("in"),
                                Nanos: sdk.Int(329651),
                                Units: sdk.String("ex"),
                            },
                            Price: &shared.Money{
                                CurrencyCode: sdk.String("minus"),
                                Nanos: sdk.Int(68880),
                                Units: sdk.String("beatae"),
                            },
                            RegionCode: sdk.String("hic"),
                            RelativeDiscount: sdk.Float64(3923.19),
                        },
                    },
                },
            },
            ProductID: sdk.String("quisquam"),
            RegionalConfigs: []shared.RegionalSubscriptionOfferConfig{
                shared.RegionalSubscriptionOfferConfig{
                    NewSubscriberAvailability: sdk.Bool(false),
                    RegionCode: sdk.String("ducimus"),
                },
            },
            Targeting: &shared.SubscriptionOfferTargeting{
                AcquisitionRule: &shared.AcquisitionTargetingRule{
                    Scope: &shared.TargetingRuleScope{
                        SpecificSubscriptionInApp: sdk.String("fuga"),
                    },
                },
                UpgradeRule: &shared.UpgradeTargetingRule{
                    BillingPeriodDuration: sdk.String("minima"),
                    OncePerUser: sdk.Bool(false),
                    Scope: &shared.TargetingRuleScope{
                        SpecificSubscriptionInApp: sdk.String("architecto"),
                    },
                },
            },
        },
        AccessToken: sdk.String("qui"),
        Alt: shared.AltEnumMedia.ToPointer(),
        BasePlanID: "magni",
        Callback: sdk.String("incidunt"),
        Fields: sdk.String("adipisci"),
        Key: sdk.String("praesentium"),
        OauthToken: sdk.String("dolor"),
        OfferID: "exercitationem",
        PackageName: "expedita",
        PrettyPrint: sdk.Bool(false),
        ProductID: "facilis",
        QuotaUser: sdk.String("impedit"),
        RegionsVersionVersion: sdk.String("sit"),
        UpdateMask: sdk.String("nemo"),
        UploadType: sdk.String("culpa"),
        UploadProtocol: sdk.String("consequuntur"),
    }, operations.AndroidpublisherMonetizationSubscriptionsBasePlansOffersPatchSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SubscriptionOffer != nil {
        // handle response
    }
}
```

## AndroidpublisherMonetizationSubscriptionsCreate

Creates a new subscription. Newly added base plans will remain in draft state until activated.

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
    res, err := s.Monetization.AndroidpublisherMonetizationSubscriptionsCreate(ctx, operations.AndroidpublisherMonetizationSubscriptionsCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        SubscriptionInput: &shared.SubscriptionInput{
            BasePlans: []shared.BasePlanInput{
                shared.BasePlanInput{
                    AutoRenewingBasePlanType: &shared.AutoRenewingBasePlanType{
                        BillingPeriodDuration: sdk.String("modi"),
                        GracePeriodDuration: sdk.String("veniam"),
                        LegacyCompatible: sdk.Bool(false),
                        LegacyCompatibleSubscriptionOfferID: sdk.String("quod"),
                        ProrationMode: shared.AutoRenewingBasePlanTypeProrationModeEnumSubscriptionProrationModeChargeFullPriceImmediately.ToPointer(),
                        ResubscribeState: shared.AutoRenewingBasePlanTypeResubscribeStateEnumResubscribeStateInactive.ToPointer(),
                    },
                    BasePlanID: sdk.String("quisquam"),
                    OfferTags: []shared.OfferTag{
                        shared.OfferTag{
                            Tag: sdk.String("doloribus"),
                        },
                        shared.OfferTag{
                            Tag: sdk.String("assumenda"),
                        },
                    },
                    OtherRegionsConfig: &shared.OtherRegionsBasePlanConfig{
                        EurPrice: &shared.Money{
                            CurrencyCode: sdk.String("officiis"),
                            Nanos: sdk.Int(103990),
                            Units: sdk.String("alias"),
                        },
                        NewSubscriberAvailability: sdk.Bool(false),
                        UsdPrice: &shared.Money{
                            CurrencyCode: sdk.String("culpa"),
                            Nanos: sdk.Int(60335),
                            Units: sdk.String("nobis"),
                        },
                    },
                    PrepaidBasePlanType: &shared.PrepaidBasePlanType{
                        BillingPeriodDuration: sdk.String("necessitatibus"),
                        TimeExtension: shared.PrepaidBasePlanTypeTimeExtensionEnumTimeExtensionUnspecified.ToPointer(),
                    },
                    RegionalConfigs: []shared.RegionalBasePlanConfig{
                        shared.RegionalBasePlanConfig{
                            NewSubscriberAvailability: sdk.Bool(false),
                            Price: &shared.Money{
                                CurrencyCode: sdk.String("vel"),
                                Nanos: sdk.Int(595584),
                                Units: sdk.String("debitis"),
                            },
                            RegionCode: sdk.String("ullam"),
                        },
                    },
                },
                shared.BasePlanInput{
                    AutoRenewingBasePlanType: &shared.AutoRenewingBasePlanType{
                        BillingPeriodDuration: sdk.String("architecto"),
                        GracePeriodDuration: sdk.String("accusantium"),
                        LegacyCompatible: sdk.Bool(false),
                        LegacyCompatibleSubscriptionOfferID: sdk.String("perferendis"),
                        ProrationMode: shared.AutoRenewingBasePlanTypeProrationModeEnumSubscriptionProrationModeUnspecified.ToPointer(),
                        ResubscribeState: shared.AutoRenewingBasePlanTypeResubscribeStateEnumResubscribeStateActive.ToPointer(),
                    },
                    BasePlanID: sdk.String("cumque"),
                    OfferTags: []shared.OfferTag{
                        shared.OfferTag{
                            Tag: sdk.String("quibusdam"),
                        },
                        shared.OfferTag{
                            Tag: sdk.String("quod"),
                        },
                    },
                    OtherRegionsConfig: &shared.OtherRegionsBasePlanConfig{
                        EurPrice: &shared.Money{
                            CurrencyCode: sdk.String("nemo"),
                            Nanos: sdk.Int(923456),
                            Units: sdk.String("velit"),
                        },
                        NewSubscriberAvailability: sdk.Bool(false),
                        UsdPrice: &shared.Money{
                            CurrencyCode: sdk.String("magnam"),
                            Nanos: sdk.Int(493591),
                            Units: sdk.String("laboriosam"),
                        },
                    },
                    PrepaidBasePlanType: &shared.PrepaidBasePlanType{
                        BillingPeriodDuration: sdk.String("sed"),
                        TimeExtension: shared.PrepaidBasePlanTypeTimeExtensionEnumTimeExtensionActive.ToPointer(),
                    },
                    RegionalConfigs: []shared.RegionalBasePlanConfig{
                        shared.RegionalBasePlanConfig{
                            NewSubscriberAvailability: sdk.Bool(false),
                            Price: &shared.Money{
                                CurrencyCode: sdk.String("provident"),
                                Nanos: sdk.Int(739508),
                                Units: sdk.String("doloribus"),
                            },
                            RegionCode: sdk.String("facilis"),
                        },
                        shared.RegionalBasePlanConfig{
                            NewSubscriberAvailability: sdk.Bool(false),
                            Price: &shared.Money{
                                CurrencyCode: sdk.String("quidem"),
                                Nanos: sdk.Int(932080),
                                Units: sdk.String("laboriosam"),
                            },
                            RegionCode: sdk.String("unde"),
                        },
                        shared.RegionalBasePlanConfig{
                            NewSubscriberAvailability: sdk.Bool(false),
                            Price: &shared.Money{
                                CurrencyCode: sdk.String("modi"),
                                Nanos: sdk.Int(595198),
                                Units: sdk.String("hic"),
                            },
                            RegionCode: sdk.String("cum"),
                        },
                    },
                },
                shared.BasePlanInput{
                    AutoRenewingBasePlanType: &shared.AutoRenewingBasePlanType{
                        BillingPeriodDuration: sdk.String("aspernatur"),
                        GracePeriodDuration: sdk.String("libero"),
                        LegacyCompatible: sdk.Bool(false),
                        LegacyCompatibleSubscriptionOfferID: sdk.String("nam"),
                        ProrationMode: shared.AutoRenewingBasePlanTypeProrationModeEnumSubscriptionProrationModeUnspecified.ToPointer(),
                        ResubscribeState: shared.AutoRenewingBasePlanTypeResubscribeStateEnumResubscribeStateInactive.ToPointer(),
                    },
                    BasePlanID: sdk.String("quod"),
                    OfferTags: []shared.OfferTag{
                        shared.OfferTag{
                            Tag: sdk.String("saepe"),
                        },
                        shared.OfferTag{
                            Tag: sdk.String("autem"),
                        },
                        shared.OfferTag{
                            Tag: sdk.String("quo"),
                        },
                    },
                    OtherRegionsConfig: &shared.OtherRegionsBasePlanConfig{
                        EurPrice: &shared.Money{
                            CurrencyCode: sdk.String("nesciunt"),
                            Nanos: sdk.Int(849383),
                            Units: sdk.String("nemo"),
                        },
                        NewSubscriberAvailability: sdk.Bool(false),
                        UsdPrice: &shared.Money{
                            CurrencyCode: sdk.String("illum"),
                            Nanos: sdk.Int(706872),
                            Units: sdk.String("non"),
                        },
                    },
                    PrepaidBasePlanType: &shared.PrepaidBasePlanType{
                        BillingPeriodDuration: sdk.String("mollitia"),
                        TimeExtension: shared.PrepaidBasePlanTypeTimeExtensionEnumTimeExtensionInactive.ToPointer(),
                    },
                    RegionalConfigs: []shared.RegionalBasePlanConfig{
                        shared.RegionalBasePlanConfig{
                            NewSubscriberAvailability: sdk.Bool(false),
                            Price: &shared.Money{
                                CurrencyCode: sdk.String("distinctio"),
                                Nanos: sdk.Int(866861),
                                Units: sdk.String("ad"),
                            },
                            RegionCode: sdk.String("facere"),
                        },
                        shared.RegionalBasePlanConfig{
                            NewSubscriberAvailability: sdk.Bool(false),
                            Price: &shared.Money{
                                CurrencyCode: sdk.String("laborum"),
                                Nanos: sdk.Int(911451),
                                Units: sdk.String("laborum"),
                            },
                            RegionCode: sdk.String("incidunt"),
                        },
                        shared.RegionalBasePlanConfig{
                            NewSubscriberAvailability: sdk.Bool(false),
                            Price: &shared.Money{
                                CurrencyCode: sdk.String("maxime"),
                                Nanos: sdk.Int(369523),
                                Units: sdk.String("alias"),
                            },
                            RegionCode: sdk.String("suscipit"),
                        },
                        shared.RegionalBasePlanConfig{
                            NewSubscriberAvailability: sdk.Bool(false),
                            Price: &shared.Money{
                                CurrencyCode: sdk.String("deserunt"),
                                Nanos: sdk.Int(560451),
                                Units: sdk.String("laborum"),
                            },
                            RegionCode: sdk.String("est"),
                        },
                    },
                },
            },
            Listings: []shared.SubscriptionListing{
                shared.SubscriptionListing{
                    Benefits: []string{
                        "quo",
                        "perferendis",
                    },
                    Description: sdk.String("fugit"),
                    LanguageCode: sdk.String("aliquid"),
                    Title: sdk.String("Mrs."),
                },
                shared.SubscriptionListing{
                    Benefits: []string{
                        "eligendi",
                        "hic",
                    },
                    Description: sdk.String("nostrum"),
                    LanguageCode: sdk.String("officiis"),
                    Title: sdk.String("Miss"),
                },
                shared.SubscriptionListing{
                    Benefits: []string{
                        "error",
                        "mollitia",
                        "magnam",
                        "nostrum",
                    },
                    Description: sdk.String("esse"),
                    LanguageCode: sdk.String("corrupti"),
                    Title: sdk.String("Miss"),
                },
            },
            PackageName: sdk.String("facere"),
            ProductID: sdk.String("impedit"),
            TaxAndComplianceSettings: &shared.SubscriptionTaxAndComplianceSettings{
                EeaWithdrawalRightType: shared.SubscriptionTaxAndComplianceSettingsEeaWithdrawalRightTypeEnumWithdrawalRightTypeUnspecified.ToPointer(),
                TaxRateInfoByRegionCode: map[string]shared.RegionalTaxRateInfo{
                    "quod": shared.RegionalTaxRateInfo{
                        EligibleForStreamingServiceTaxRate: sdk.Bool(false),
                        StreamingTaxType: shared.RegionalTaxRateInfoStreamingTaxTypeEnumStreamingTaxTypeTelcoVideoSales.ToPointer(),
                        TaxTier: shared.RegionalTaxRateInfoTaxTierEnumTaxTierUnspecified.ToPointer(),
                    },
                    "voluptatem": shared.RegionalTaxRateInfo{
                        EligibleForStreamingServiceTaxRate: sdk.Bool(false),
                        StreamingTaxType: shared.RegionalTaxRateInfoStreamingTaxTypeEnumStreamingTaxTypeTelcoAudioSales.ToPointer(),
                        TaxTier: shared.RegionalTaxRateInfoTaxTierEnumTaxTierLiveOrBroadcast1.ToPointer(),
                    },
                    "maxime": shared.RegionalTaxRateInfo{
                        EligibleForStreamingServiceTaxRate: sdk.Bool(false),
                        StreamingTaxType: shared.RegionalTaxRateInfoStreamingTaxTypeEnumStreamingTaxTypeUnspecified.ToPointer(),
                        TaxTier: shared.RegionalTaxRateInfoTaxTierEnumTaxTierUnspecified.ToPointer(),
                    },
                },
            },
        },
        AccessToken: sdk.String("architecto"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("porro"),
        Fields: sdk.String("blanditiis"),
        Key: sdk.String("quae"),
        OauthToken: sdk.String("magni"),
        PackageName: "officiis",
        PrettyPrint: sdk.Bool(false),
        ProductID: sdk.String("sed"),
        QuotaUser: sdk.String("necessitatibus"),
        RegionsVersionVersion: sdk.String("impedit"),
        UploadType: sdk.String("ipsa"),
        UploadProtocol: sdk.String("excepturi"),
    }, operations.AndroidpublisherMonetizationSubscriptionsCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Subscription != nil {
        // handle response
    }
}
```

## AndroidpublisherMonetizationSubscriptionsDelete

Deletes a subscription. A subscription can only be deleted if it has never had a base plan published.

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
    res, err := s.Monetization.AndroidpublisherMonetizationSubscriptionsDelete(ctx, operations.AndroidpublisherMonetizationSubscriptionsDeleteRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("maiores"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("maiores"),
        Fields: sdk.String("alias"),
        Key: sdk.String("asperiores"),
        OauthToken: sdk.String("rem"),
        PackageName: "dicta",
        PrettyPrint: sdk.Bool(false),
        ProductID: "suscipit",
        QuotaUser: sdk.String("earum"),
        UploadType: sdk.String("doloribus"),
        UploadProtocol: sdk.String("velit"),
    }, operations.AndroidpublisherMonetizationSubscriptionsDeleteSecurity{
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

## AndroidpublisherMonetizationSubscriptionsGet

Reads a single subscription.

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
    res, err := s.Monetization.AndroidpublisherMonetizationSubscriptionsGet(ctx, operations.AndroidpublisherMonetizationSubscriptionsGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("esse"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("eligendi"),
        Fields: sdk.String("quasi"),
        Key: sdk.String("neque"),
        OauthToken: sdk.String("vero"),
        PackageName: "excepturi",
        PrettyPrint: sdk.Bool(false),
        ProductID: "accusantium",
        QuotaUser: sdk.String("qui"),
        UploadType: sdk.String("impedit"),
        UploadProtocol: sdk.String("beatae"),
    }, operations.AndroidpublisherMonetizationSubscriptionsGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Subscription != nil {
        // handle response
    }
}
```

## AndroidpublisherMonetizationSubscriptionsList

Lists all subscriptions under a given app.

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
    res, err := s.Monetization.AndroidpublisherMonetizationSubscriptionsList(ctx, operations.AndroidpublisherMonetizationSubscriptionsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("dicta"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("corporis"),
        Fields: sdk.String("rerum"),
        Key: sdk.String("alias"),
        OauthToken: sdk.String("error"),
        PackageName: "vel",
        PageSize: sdk.Int64(35581),
        PageToken: sdk.String("id"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("laboriosam"),
        ShowArchived: sdk.Bool(false),
        UploadType: sdk.String("ex"),
        UploadProtocol: sdk.String("quas"),
    }, operations.AndroidpublisherMonetizationSubscriptionsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListSubscriptionsResponse != nil {
        // handle response
    }
}
```

## AndroidpublisherMonetizationSubscriptionsPatch

Updates an existing subscription.

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
    res, err := s.Monetization.AndroidpublisherMonetizationSubscriptionsPatch(ctx, operations.AndroidpublisherMonetizationSubscriptionsPatchRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        SubscriptionInput: &shared.SubscriptionInput{
            BasePlans: []shared.BasePlanInput{
                shared.BasePlanInput{
                    AutoRenewingBasePlanType: &shared.AutoRenewingBasePlanType{
                        BillingPeriodDuration: sdk.String("quae"),
                        GracePeriodDuration: sdk.String("similique"),
                        LegacyCompatible: sdk.Bool(false),
                        LegacyCompatibleSubscriptionOfferID: sdk.String("incidunt"),
                        ProrationMode: shared.AutoRenewingBasePlanTypeProrationModeEnumSubscriptionProrationModeChargeOnNextBillingDate.ToPointer(),
                        ResubscribeState: shared.AutoRenewingBasePlanTypeResubscribeStateEnumResubscribeStateUnspecified.ToPointer(),
                    },
                    BasePlanID: sdk.String("deserunt"),
                    OfferTags: []shared.OfferTag{
                        shared.OfferTag{
                            Tag: sdk.String("omnis"),
                        },
                        shared.OfferTag{
                            Tag: sdk.String("sed"),
                        },
                        shared.OfferTag{
                            Tag: sdk.String("nesciunt"),
                        },
                        shared.OfferTag{
                            Tag: sdk.String("maxime"),
                        },
                    },
                    OtherRegionsConfig: &shared.OtherRegionsBasePlanConfig{
                        EurPrice: &shared.Money{
                            CurrencyCode: sdk.String("quis"),
                            Nanos: sdk.Int(586108),
                            Units: sdk.String("aliquam"),
                        },
                        NewSubscriberAvailability: sdk.Bool(false),
                        UsdPrice: &shared.Money{
                            CurrencyCode: sdk.String("excepturi"),
                            Nanos: sdk.Int(980410),
                            Units: sdk.String("laudantium"),
                        },
                    },
                    PrepaidBasePlanType: &shared.PrepaidBasePlanType{
                        BillingPeriodDuration: sdk.String("velit"),
                        TimeExtension: shared.PrepaidBasePlanTypeTimeExtensionEnumTimeExtensionInactive.ToPointer(),
                    },
                    RegionalConfigs: []shared.RegionalBasePlanConfig{
                        shared.RegionalBasePlanConfig{
                            NewSubscriberAvailability: sdk.Bool(false),
                            Price: &shared.Money{
                                CurrencyCode: sdk.String("nemo"),
                                Nanos: sdk.Int(57470),
                                Units: sdk.String("quisquam"),
                            },
                            RegionCode: sdk.String("tenetur"),
                        },
                    },
                },
                shared.BasePlanInput{
                    AutoRenewingBasePlanType: &shared.AutoRenewingBasePlanType{
                        BillingPeriodDuration: sdk.String("quas"),
                        GracePeriodDuration: sdk.String("molestiae"),
                        LegacyCompatible: sdk.Bool(false),
                        LegacyCompatibleSubscriptionOfferID: sdk.String("aliquid"),
                        ProrationMode: shared.AutoRenewingBasePlanTypeProrationModeEnumSubscriptionProrationModeChargeFullPriceImmediately.ToPointer(),
                        ResubscribeState: shared.AutoRenewingBasePlanTypeResubscribeStateEnumResubscribeStateInactive.ToPointer(),
                    },
                    BasePlanID: sdk.String("nobis"),
                    OfferTags: []shared.OfferTag{
                        shared.OfferTag{
                            Tag: sdk.String("accusantium"),
                        },
                        shared.OfferTag{
                            Tag: sdk.String("dicta"),
                        },
                        shared.OfferTag{
                            Tag: sdk.String("minus"),
                        },
                    },
                    OtherRegionsConfig: &shared.OtherRegionsBasePlanConfig{
                        EurPrice: &shared.Money{
                            CurrencyCode: sdk.String("commodi"),
                            Nanos: sdk.Int(908734),
                            Units: sdk.String("porro"),
                        },
                        NewSubscriberAvailability: sdk.Bool(false),
                        UsdPrice: &shared.Money{
                            CurrencyCode: sdk.String("tempore"),
                            Nanos: sdk.Int(693747),
                            Units: sdk.String("modi"),
                        },
                    },
                    PrepaidBasePlanType: &shared.PrepaidBasePlanType{
                        BillingPeriodDuration: sdk.String("voluptates"),
                        TimeExtension: shared.PrepaidBasePlanTypeTimeExtensionEnumTimeExtensionUnspecified.ToPointer(),
                    },
                    RegionalConfigs: []shared.RegionalBasePlanConfig{
                        shared.RegionalBasePlanConfig{
                            NewSubscriberAvailability: sdk.Bool(false),
                            Price: &shared.Money{
                                CurrencyCode: sdk.String("sequi"),
                                Nanos: sdk.Int(758194),
                                Units: sdk.String("asperiores"),
                            },
                            RegionCode: sdk.String("esse"),
                        },
                        shared.RegionalBasePlanConfig{
                            NewSubscriberAvailability: sdk.Bool(false),
                            Price: &shared.Money{
                                CurrencyCode: sdk.String("blanditiis"),
                                Nanos: sdk.Int(573610),
                                Units: sdk.String("repellat"),
                            },
                            RegionCode: sdk.String("a"),
                        },
                    },
                },
            },
            Listings: []shared.SubscriptionListing{
                shared.SubscriptionListing{
                    Benefits: []string{
                        "itaque",
                        "nulla",
                        "deserunt",
                        "corporis",
                    },
                    Description: sdk.String("velit"),
                    LanguageCode: sdk.String("officiis"),
                    Title: sdk.String("Mrs."),
                },
                shared.SubscriptionListing{
                    Benefits: []string{
                        "saepe",
                        "eum",
                        "repudiandae",
                    },
                    Description: sdk.String("accusantium"),
                    LanguageCode: sdk.String("officia"),
                    Title: sdk.String("Miss"),
                },
                shared.SubscriptionListing{
                    Benefits: []string{
                        "blanditiis",
                    },
                    Description: sdk.String("eius"),
                    LanguageCode: sdk.String("quisquam"),
                    Title: sdk.String("Mr."),
                },
            },
            PackageName: sdk.String("nobis"),
            ProductID: sdk.String("natus"),
            TaxAndComplianceSettings: &shared.SubscriptionTaxAndComplianceSettings{
                EeaWithdrawalRightType: shared.SubscriptionTaxAndComplianceSettingsEeaWithdrawalRightTypeEnumWithdrawalRightService.ToPointer(),
                TaxRateInfoByRegionCode: map[string]shared.RegionalTaxRateInfo{
                    "magnam": shared.RegionalTaxRateInfo{
                        EligibleForStreamingServiceTaxRate: sdk.Bool(false),
                        StreamingTaxType: shared.RegionalTaxRateInfoStreamingTaxTypeEnumStreamingTaxTypeTelcoVideoMultiChannel.ToPointer(),
                        TaxTier: shared.RegionalTaxRateInfoTaxTierEnumTaxTierMusicOrAudio1.ToPointer(),
                    },
                },
            },
        },
        AccessToken: sdk.String("quos"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("amet"),
        Fields: sdk.String("molestiae"),
        Key: sdk.String("amet"),
        OauthToken: sdk.String("laborum"),
        PackageName: "modi",
        PrettyPrint: sdk.Bool(false),
        ProductID: "perferendis",
        QuotaUser: sdk.String("necessitatibus"),
        RegionsVersionVersion: sdk.String("architecto"),
        UpdateMask: sdk.String("molestias"),
        UploadType: sdk.String("dolore"),
        UploadProtocol: sdk.String("sunt"),
    }, operations.AndroidpublisherMonetizationSubscriptionsPatchSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Subscription != nil {
        // handle response
    }
}
```
