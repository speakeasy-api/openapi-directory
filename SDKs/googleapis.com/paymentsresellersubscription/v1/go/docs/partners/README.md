# Partners

### Available Operations

* [PaymentsresellersubscriptionPartnersProductsList](#paymentsresellersubscriptionpartnersproductslist) - To retrieve the products that can be resold by the partner. It should be autenticated with a service account.
* [PaymentsresellersubscriptionPartnersPromotionsFindEligible](#paymentsresellersubscriptionpartnerspromotionsfindeligible) - To find eligible promotions for the current user. The API requires user authorization via OAuth. The user is inferred from the authenticated OAuth credential.
* [PaymentsresellersubscriptionPartnersPromotionsList](#paymentsresellersubscriptionpartnerspromotionslist) - To retrieve the promotions, such as free trial, that can be used by the partner. It should be autenticated with a service account.
* [PaymentsresellersubscriptionPartnersSubscriptionsCancel](#paymentsresellersubscriptionpartnerssubscriptionscancel) - Used by partners to cancel a subscription service either immediately or by the end of the current billing cycle for their customers. It should be called directly by the partner using service accounts.
* [PaymentsresellersubscriptionPartnersSubscriptionsCreate](#paymentsresellersubscriptionpartnerssubscriptionscreate) - Used by partners to create a subscription for their customers. The created subscription is associated with the end user inferred from the end user credentials. This API must be authorized by the end user using OAuth.
* [PaymentsresellersubscriptionPartnersSubscriptionsEntitle](#paymentsresellersubscriptionpartnerssubscriptionsentitle) - Used by partners to entitle a previously provisioned subscription to the current end user. The end user identity is inferred from the authorized credential of the request. This API must be authorized by the end user using OAuth.
* [PaymentsresellersubscriptionPartnersSubscriptionsExtend](#paymentsresellersubscriptionpartnerssubscriptionsextend) - [Opt-in only] Most partners should be on auto-extend by default. Used by partners to extend a subscription service for their customers on an ongoing basis for the subscription to remain active and renewable. It should be called directly by the partner using service accounts.
* [PaymentsresellersubscriptionPartnersSubscriptionsGet](#paymentsresellersubscriptionpartnerssubscriptionsget) - Used by partners to get a subscription by id. It should be called directly by the partner using service accounts.
* [PaymentsresellersubscriptionPartnersSubscriptionsProvision](#paymentsresellersubscriptionpartnerssubscriptionsprovision) - Used by partners to provision a subscription for their customers. This creates a subscription without associating it with the end user account. EntitleSubscription must be called separately using OAuth in order for the end user account to be associated with the subscription. It should be called directly by the partner using service accounts.
* [PaymentsresellersubscriptionPartnersSubscriptionsUndoCancel](#paymentsresellersubscriptionpartnerssubscriptionsundocancel) - Used by partners to revoke the pending cancellation of a subscription, which is currently in `STATE_CANCEL_AT_END_OF_CYCLE` state. If the subscription is already cancelled, the request will fail. It should be called directly by the partner using service accounts.

## PaymentsresellersubscriptionPartnersProductsList

To retrieve the products that can be resold by the partner. It should be autenticated with a service account.

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
    res, err := s.Partners.PaymentsresellersubscriptionPartnersProductsList(ctx, operations.PaymentsresellersubscriptionPartnersProductsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("ipsa"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("tempora"),
        Fields: sdk.String("suscipit"),
        Filter: sdk.String("molestiae"),
        Key: sdk.String("minus"),
        OauthToken: sdk.String("placeat"),
        PageSize: sdk.Int64(528895),
        PageToken: sdk.String("iusto"),
        Parent: "excepturi",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("nisi"),
        UploadType: sdk.String("recusandae"),
        UploadProtocol: sdk.String("temporibus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudPaymentsResellerSubscriptionV1ListProductsResponse != nil {
        // handle response
    }
}
```

## PaymentsresellersubscriptionPartnersPromotionsFindEligible

To find eligible promotions for the current user. The API requires user authorization via OAuth. The user is inferred from the authenticated OAuth credential.

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
    res, err := s.Partners.PaymentsresellersubscriptionPartnersPromotionsFindEligible(ctx, operations.PaymentsresellersubscriptionPartnersPromotionsFindEligibleRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleCloudPaymentsResellerSubscriptionV1FindEligiblePromotionsRequest: &shared.GoogleCloudPaymentsResellerSubscriptionV1FindEligiblePromotionsRequest{
            Filter: sdk.String("quis"),
            PageSize: sdk.Int(87129),
            PageToken: sdk.String("deserunt"),
        },
        AccessToken: sdk.String("perferendis"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("repellendus"),
        Fields: sdk.String("sapiente"),
        Key: sdk.String("quo"),
        OauthToken: sdk.String("odit"),
        Parent: "at",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("at"),
        UploadType: sdk.String("maiores"),
        UploadProtocol: sdk.String("molestiae"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudPaymentsResellerSubscriptionV1FindEligiblePromotionsResponse != nil {
        // handle response
    }
}
```

## PaymentsresellersubscriptionPartnersPromotionsList

To retrieve the promotions, such as free trial, that can be used by the partner. It should be autenticated with a service account.

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
    res, err := s.Partners.PaymentsresellersubscriptionPartnersPromotionsList(ctx, operations.PaymentsresellersubscriptionPartnersPromotionsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("quod"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("totam"),
        Fields: sdk.String("porro"),
        Filter: sdk.String("dolorum"),
        Key: sdk.String("dicta"),
        OauthToken: sdk.String("nam"),
        PageSize: sdk.Int64(639921),
        PageToken: sdk.String("occaecati"),
        Parent: "fugit",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("deleniti"),
        UploadType: sdk.String("hic"),
        UploadProtocol: sdk.String("optio"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudPaymentsResellerSubscriptionV1ListPromotionsResponse != nil {
        // handle response
    }
}
```

## PaymentsresellersubscriptionPartnersSubscriptionsCancel

Used by partners to cancel a subscription service either immediately or by the end of the current billing cycle for their customers. It should be called directly by the partner using service accounts.

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
    res, err := s.Partners.PaymentsresellersubscriptionPartnersSubscriptionsCancel(ctx, operations.PaymentsresellersubscriptionPartnersSubscriptionsCancelRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleCloudPaymentsResellerSubscriptionV1CancelSubscriptionRequest: &shared.GoogleCloudPaymentsResellerSubscriptionV1CancelSubscriptionRequest{
            CancelImmediately: sdk.Bool(false),
            CancellationReason: shared.GoogleCloudPaymentsResellerSubscriptionV1CancelSubscriptionRequestCancellationReasonEnumCancellationReasonFraud.ToPointer(),
        },
        AccessToken: sdk.String("commodi"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("modi"),
        Fields: sdk.String("qui"),
        Key: sdk.String("impedit"),
        Name: "Cory Emmerich",
        OauthToken: sdk.String("perferendis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ad"),
        UploadType: sdk.String("natus"),
        UploadProtocol: sdk.String("sed"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudPaymentsResellerSubscriptionV1CancelSubscriptionResponse != nil {
        // handle response
    }
}
```

## PaymentsresellersubscriptionPartnersSubscriptionsCreate

Used by partners to create a subscription for their customers. The created subscription is associated with the end user inferred from the end user credentials. This API must be authorized by the end user using OAuth.

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
    res, err := s.Partners.PaymentsresellersubscriptionPartnersSubscriptionsCreate(ctx, operations.PaymentsresellersubscriptionPartnersSubscriptionsCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleCloudPaymentsResellerSubscriptionV1SubscriptionInput: &shared.GoogleCloudPaymentsResellerSubscriptionV1SubscriptionInput{
            CancellationDetails: &shared.GoogleCloudPaymentsResellerSubscriptionV1SubscriptionCancellationDetails{
                Reason: shared.GoogleCloudPaymentsResellerSubscriptionV1SubscriptionCancellationDetailsReasonEnumCancellationReasonRemorse.ToPointer(),
            },
            LineItems: []shared.GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItemInput{
                shared.GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItemInput{
                    Amount: &shared.GoogleCloudPaymentsResellerSubscriptionV1Amount{
                        AmountMicros: sdk.String("laboriosam"),
                        CurrencyCode: sdk.String("hic"),
                    },
                    LineItemPromotionSpecs: []shared.GoogleCloudPaymentsResellerSubscriptionV1SubscriptionPromotionSpecInput{
                        shared.GoogleCloudPaymentsResellerSubscriptionV1SubscriptionPromotionSpecInput{
                            FreeTrialDuration: &shared.GoogleCloudPaymentsResellerSubscriptionV1Duration{
                                Count: sdk.Int(681820),
                                Unit: shared.GoogleCloudPaymentsResellerSubscriptionV1DurationUnitEnumMonth.ToPointer(),
                            },
                            IntroductoryPricingDetails: &shared.GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsInput{
                                IntroductoryPricingSpecs: []shared.GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpecInput{
                                    shared.GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpecInput{
                                        DiscountAmount: &shared.GoogleCloudPaymentsResellerSubscriptionV1Amount{
                                            AmountMicros: sdk.String("iste"),
                                            CurrencyCode: sdk.String("iure"),
                                        },
                                    },
                                    shared.GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpecInput{
                                        DiscountAmount: &shared.GoogleCloudPaymentsResellerSubscriptionV1Amount{
                                            AmountMicros: sdk.String("saepe"),
                                            CurrencyCode: sdk.String("quidem"),
                                        },
                                    },
                                },
                            },
                            Promotion: sdk.String("architecto"),
                        },
                        shared.GoogleCloudPaymentsResellerSubscriptionV1SubscriptionPromotionSpecInput{
                            FreeTrialDuration: &shared.GoogleCloudPaymentsResellerSubscriptionV1Duration{
                                Count: sdk.Int(60225),
                                Unit: shared.GoogleCloudPaymentsResellerSubscriptionV1DurationUnitEnumDay.ToPointer(),
                            },
                            IntroductoryPricingDetails: &shared.GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsInput{
                                IntroductoryPricingSpecs: []shared.GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpecInput{
                                    shared.GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpecInput{
                                        DiscountAmount: &shared.GoogleCloudPaymentsResellerSubscriptionV1Amount{
                                            AmountMicros: sdk.String("mollitia"),
                                            CurrencyCode: sdk.String("laborum"),
                                        },
                                    },
                                    shared.GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpecInput{
                                        DiscountAmount: &shared.GoogleCloudPaymentsResellerSubscriptionV1Amount{
                                            AmountMicros: sdk.String("dolores"),
                                            CurrencyCode: sdk.String("dolorem"),
                                        },
                                    },
                                    shared.GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpecInput{
                                        DiscountAmount: &shared.GoogleCloudPaymentsResellerSubscriptionV1Amount{
                                            AmountMicros: sdk.String("corporis"),
                                            CurrencyCode: sdk.String("explicabo"),
                                        },
                                    },
                                },
                            },
                            Promotion: sdk.String("nobis"),
                        },
                        shared.GoogleCloudPaymentsResellerSubscriptionV1SubscriptionPromotionSpecInput{
                            FreeTrialDuration: &shared.GoogleCloudPaymentsResellerSubscriptionV1Duration{
                                Count: sdk.Int(315428),
                                Unit: shared.GoogleCloudPaymentsResellerSubscriptionV1DurationUnitEnumMonth.ToPointer(),
                            },
                            IntroductoryPricingDetails: &shared.GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsInput{
                                IntroductoryPricingSpecs: []shared.GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpecInput{
                                    shared.GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpecInput{
                                        DiscountAmount: &shared.GoogleCloudPaymentsResellerSubscriptionV1Amount{
                                            AmountMicros: sdk.String("minima"),
                                            CurrencyCode: sdk.String("excepturi"),
                                        },
                                    },
                                    shared.GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpecInput{
                                        DiscountAmount: &shared.GoogleCloudPaymentsResellerSubscriptionV1Amount{
                                            AmountMicros: sdk.String("accusantium"),
                                            CurrencyCode: sdk.String("iure"),
                                        },
                                    },
                                },
                            },
                            Promotion: sdk.String("culpa"),
                        },
                        shared.GoogleCloudPaymentsResellerSubscriptionV1SubscriptionPromotionSpecInput{
                            FreeTrialDuration: &shared.GoogleCloudPaymentsResellerSubscriptionV1Duration{
                                Count: sdk.Int(988374),
                                Unit: shared.GoogleCloudPaymentsResellerSubscriptionV1DurationUnitEnumDay.ToPointer(),
                            },
                            IntroductoryPricingDetails: &shared.GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsInput{
                                IntroductoryPricingSpecs: []shared.GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpecInput{
                                    shared.GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpecInput{
                                        DiscountAmount: &shared.GoogleCloudPaymentsResellerSubscriptionV1Amount{
                                            AmountMicros: sdk.String("mollitia"),
                                            CurrencyCode: sdk.String("dolorem"),
                                        },
                                    },
                                },
                            },
                            Promotion: sdk.String("culpa"),
                        },
                    },
                    OneTimeRecurrenceDetails: &shared.GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItemOneTimeRecurrenceDetails{
                        ServicePeriod: &shared.GoogleCloudPaymentsResellerSubscriptionV1ServicePeriod{
                            EndTime: sdk.String("consequuntur"),
                            StartTime: sdk.String("repellat"),
                        },
                    },
                    Product: sdk.String("mollitia"),
                    ProductPayload: &shared.GoogleCloudPaymentsResellerSubscriptionV1ProductPayload{
                        GoogleOnePayload: &shared.GoogleCloudPaymentsResellerSubscriptionV1GoogleOnePayload{
                            Campaigns: []string{
                                "numquam",
                                "commodi",
                                "quam",
                            },
                            Offering: shared.GoogleCloudPaymentsResellerSubscriptionV1GoogleOnePayloadOfferingEnumOfferingVasStandalone.ToPointer(),
                            SalesChannel: shared.GoogleCloudPaymentsResellerSubscriptionV1GoogleOnePayloadSalesChannelEnumChannelRetail.ToPointer(),
                            StoreID: sdk.String("error"),
                        },
                        YoutubePayload: &shared.GoogleCloudPaymentsResellerSubscriptionV1YoutubePayload{
                            PartnerEligibilityIds: []string{
                                "quis",
                            },
                        },
                    },
                },
                shared.GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItemInput{
                    Amount: &shared.GoogleCloudPaymentsResellerSubscriptionV1Amount{
                        AmountMicros: sdk.String("vitae"),
                        CurrencyCode: sdk.String("laborum"),
                    },
                    LineItemPromotionSpecs: []shared.GoogleCloudPaymentsResellerSubscriptionV1SubscriptionPromotionSpecInput{
                        shared.GoogleCloudPaymentsResellerSubscriptionV1SubscriptionPromotionSpecInput{
                            FreeTrialDuration: &shared.GoogleCloudPaymentsResellerSubscriptionV1Duration{
                                Count: sdk.Int(317202),
                                Unit: shared.GoogleCloudPaymentsResellerSubscriptionV1DurationUnitEnumUnitUnspecified.ToPointer(),
                            },
                            IntroductoryPricingDetails: &shared.GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsInput{
                                IntroductoryPricingSpecs: []shared.GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpecInput{
                                    shared.GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpecInput{
                                        DiscountAmount: &shared.GoogleCloudPaymentsResellerSubscriptionV1Amount{
                                            AmountMicros: sdk.String("sequi"),
                                            CurrencyCode: sdk.String("tenetur"),
                                        },
                                    },
                                    shared.GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpecInput{
                                        DiscountAmount: &shared.GoogleCloudPaymentsResellerSubscriptionV1Amount{
                                            AmountMicros: sdk.String("ipsam"),
                                            CurrencyCode: sdk.String("id"),
                                        },
                                    },
                                    shared.GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpecInput{
                                        DiscountAmount: &shared.GoogleCloudPaymentsResellerSubscriptionV1Amount{
                                            AmountMicros: sdk.String("possimus"),
                                            CurrencyCode: sdk.String("aut"),
                                        },
                                    },
                                    shared.GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpecInput{
                                        DiscountAmount: &shared.GoogleCloudPaymentsResellerSubscriptionV1Amount{
                                            AmountMicros: sdk.String("quasi"),
                                            CurrencyCode: sdk.String("error"),
                                        },
                                    },
                                },
                            },
                            Promotion: sdk.String("temporibus"),
                        },
                        shared.GoogleCloudPaymentsResellerSubscriptionV1SubscriptionPromotionSpecInput{
                            FreeTrialDuration: &shared.GoogleCloudPaymentsResellerSubscriptionV1Duration{
                                Count: sdk.Int(673660),
                                Unit: shared.GoogleCloudPaymentsResellerSubscriptionV1DurationUnitEnumUnitUnspecified.ToPointer(),
                            },
                            IntroductoryPricingDetails: &shared.GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsInput{
                                IntroductoryPricingSpecs: []shared.GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpecInput{
                                    shared.GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpecInput{
                                        DiscountAmount: &shared.GoogleCloudPaymentsResellerSubscriptionV1Amount{
                                            AmountMicros: sdk.String("voluptatibus"),
                                            CurrencyCode: sdk.String("vero"),
                                        },
                                    },
                                    shared.GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpecInput{
                                        DiscountAmount: &shared.GoogleCloudPaymentsResellerSubscriptionV1Amount{
                                            AmountMicros: sdk.String("nihil"),
                                            CurrencyCode: sdk.String("praesentium"),
                                        },
                                    },
                                    shared.GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpecInput{
                                        DiscountAmount: &shared.GoogleCloudPaymentsResellerSubscriptionV1Amount{
                                            AmountMicros: sdk.String("voluptatibus"),
                                            CurrencyCode: sdk.String("ipsa"),
                                        },
                                    },
                                    shared.GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpecInput{
                                        DiscountAmount: &shared.GoogleCloudPaymentsResellerSubscriptionV1Amount{
                                            AmountMicros: sdk.String("omnis"),
                                            CurrencyCode: sdk.String("voluptate"),
                                        },
                                    },
                                },
                            },
                            Promotion: sdk.String("cum"),
                        },
                        shared.GoogleCloudPaymentsResellerSubscriptionV1SubscriptionPromotionSpecInput{
                            FreeTrialDuration: &shared.GoogleCloudPaymentsResellerSubscriptionV1Duration{
                                Count: sdk.Int(19987),
                                Unit: shared.GoogleCloudPaymentsResellerSubscriptionV1DurationUnitEnumUnitUnspecified.ToPointer(),
                            },
                            IntroductoryPricingDetails: &shared.GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsInput{
                                IntroductoryPricingSpecs: []shared.GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpecInput{
                                    shared.GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpecInput{
                                        DiscountAmount: &shared.GoogleCloudPaymentsResellerSubscriptionV1Amount{
                                            AmountMicros: sdk.String("ut"),
                                            CurrencyCode: sdk.String("maiores"),
                                        },
                                    },
                                    shared.GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpecInput{
                                        DiscountAmount: &shared.GoogleCloudPaymentsResellerSubscriptionV1Amount{
                                            AmountMicros: sdk.String("dicta"),
                                            CurrencyCode: sdk.String("corporis"),
                                        },
                                    },
                                },
                            },
                            Promotion: sdk.String("dolore"),
                        },
                    },
                    OneTimeRecurrenceDetails: &shared.GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItemOneTimeRecurrenceDetails{
                        ServicePeriod: &shared.GoogleCloudPaymentsResellerSubscriptionV1ServicePeriod{
                            EndTime: sdk.String("iusto"),
                            StartTime: sdk.String("dicta"),
                        },
                    },
                    Product: sdk.String("harum"),
                    ProductPayload: &shared.GoogleCloudPaymentsResellerSubscriptionV1ProductPayload{
                        GoogleOnePayload: &shared.GoogleCloudPaymentsResellerSubscriptionV1GoogleOnePayload{
                            Campaigns: []string{
                                "accusamus",
                                "commodi",
                            },
                            Offering: shared.GoogleCloudPaymentsResellerSubscriptionV1GoogleOnePayloadOfferingEnumOfferingSoftBundle.ToPointer(),
                            SalesChannel: shared.GoogleCloudPaymentsResellerSubscriptionV1GoogleOnePayloadSalesChannelEnumChannelUnspecified.ToPointer(),
                            StoreID: sdk.String("ipsum"),
                        },
                        YoutubePayload: &shared.GoogleCloudPaymentsResellerSubscriptionV1YoutubePayload{
                            PartnerEligibilityIds: []string{
                                "molestias",
                                "excepturi",
                                "pariatur",
                            },
                        },
                    },
                },
                shared.GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItemInput{
                    Amount: &shared.GoogleCloudPaymentsResellerSubscriptionV1Amount{
                        AmountMicros: sdk.String("modi"),
                        CurrencyCode: sdk.String("praesentium"),
                    },
                    LineItemPromotionSpecs: []shared.GoogleCloudPaymentsResellerSubscriptionV1SubscriptionPromotionSpecInput{
                        shared.GoogleCloudPaymentsResellerSubscriptionV1SubscriptionPromotionSpecInput{
                            FreeTrialDuration: &shared.GoogleCloudPaymentsResellerSubscriptionV1Duration{
                                Count: sdk.Int(916723),
                                Unit: shared.GoogleCloudPaymentsResellerSubscriptionV1DurationUnitEnumUnitUnspecified.ToPointer(),
                            },
                            IntroductoryPricingDetails: &shared.GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsInput{
                                IntroductoryPricingSpecs: []shared.GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpecInput{
                                    shared.GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpecInput{
                                        DiscountAmount: &shared.GoogleCloudPaymentsResellerSubscriptionV1Amount{
                                            AmountMicros: sdk.String("sint"),
                                            CurrencyCode: sdk.String("veritatis"),
                                        },
                                    },
                                    shared.GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpecInput{
                                        DiscountAmount: &shared.GoogleCloudPaymentsResellerSubscriptionV1Amount{
                                            AmountMicros: sdk.String("itaque"),
                                            CurrencyCode: sdk.String("incidunt"),
                                        },
                                    },
                                    shared.GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpecInput{
                                        DiscountAmount: &shared.GoogleCloudPaymentsResellerSubscriptionV1Amount{
                                            AmountMicros: sdk.String("enim"),
                                            CurrencyCode: sdk.String("consequatur"),
                                        },
                                    },
                                    shared.GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpecInput{
                                        DiscountAmount: &shared.GoogleCloudPaymentsResellerSubscriptionV1Amount{
                                            AmountMicros: sdk.String("est"),
                                            CurrencyCode: sdk.String("quibusdam"),
                                        },
                                    },
                                },
                            },
                            Promotion: sdk.String("explicabo"),
                        },
                        shared.GoogleCloudPaymentsResellerSubscriptionV1SubscriptionPromotionSpecInput{
                            FreeTrialDuration: &shared.GoogleCloudPaymentsResellerSubscriptionV1Duration{
                                Count: sdk.Int(647174),
                                Unit: shared.GoogleCloudPaymentsResellerSubscriptionV1DurationUnitEnumDay.ToPointer(),
                            },
                            IntroductoryPricingDetails: &shared.GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsInput{
                                IntroductoryPricingSpecs: []shared.GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpecInput{
                                    shared.GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpecInput{
                                        DiscountAmount: &shared.GoogleCloudPaymentsResellerSubscriptionV1Amount{
                                            AmountMicros: sdk.String("labore"),
                                            CurrencyCode: sdk.String("modi"),
                                        },
                                    },
                                    shared.GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpecInput{
                                        DiscountAmount: &shared.GoogleCloudPaymentsResellerSubscriptionV1Amount{
                                            AmountMicros: sdk.String("qui"),
                                            CurrencyCode: sdk.String("aliquid"),
                                        },
                                    },
                                    shared.GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpecInput{
                                        DiscountAmount: &shared.GoogleCloudPaymentsResellerSubscriptionV1Amount{
                                            AmountMicros: sdk.String("cupiditate"),
                                            CurrencyCode: sdk.String("quos"),
                                        },
                                    },
                                    shared.GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpecInput{
                                        DiscountAmount: &shared.GoogleCloudPaymentsResellerSubscriptionV1Amount{
                                            AmountMicros: sdk.String("perferendis"),
                                            CurrencyCode: sdk.String("magni"),
                                        },
                                    },
                                },
                            },
                            Promotion: sdk.String("assumenda"),
                        },
                        shared.GoogleCloudPaymentsResellerSubscriptionV1SubscriptionPromotionSpecInput{
                            FreeTrialDuration: &shared.GoogleCloudPaymentsResellerSubscriptionV1Duration{
                                Count: sdk.Int(369808),
                                Unit: shared.GoogleCloudPaymentsResellerSubscriptionV1DurationUnitEnumUnitUnspecified.ToPointer(),
                            },
                            IntroductoryPricingDetails: &shared.GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsInput{
                                IntroductoryPricingSpecs: []shared.GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpecInput{
                                    shared.GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpecInput{
                                        DiscountAmount: &shared.GoogleCloudPaymentsResellerSubscriptionV1Amount{
                                            AmountMicros: sdk.String("dolorum"),
                                            CurrencyCode: sdk.String("excepturi"),
                                        },
                                    },
                                },
                            },
                            Promotion: sdk.String("tempora"),
                        },
                    },
                    OneTimeRecurrenceDetails: &shared.GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItemOneTimeRecurrenceDetails{
                        ServicePeriod: &shared.GoogleCloudPaymentsResellerSubscriptionV1ServicePeriod{
                            EndTime: sdk.String("facilis"),
                            StartTime: sdk.String("tempore"),
                        },
                    },
                    Product: sdk.String("labore"),
                    ProductPayload: &shared.GoogleCloudPaymentsResellerSubscriptionV1ProductPayload{
                        GoogleOnePayload: &shared.GoogleCloudPaymentsResellerSubscriptionV1GoogleOnePayload{
                            Campaigns: []string{
                                "eum",
                                "non",
                                "eligendi",
                                "sint",
                            },
                            Offering: shared.GoogleCloudPaymentsResellerSubscriptionV1GoogleOnePayloadOfferingEnumOfferingVasBundle.ToPointer(),
                            SalesChannel: shared.GoogleCloudPaymentsResellerSubscriptionV1GoogleOnePayloadSalesChannelEnumChannelOnlineWeb.ToPointer(),
                            StoreID: sdk.String("necessitatibus"),
                        },
                        YoutubePayload: &shared.GoogleCloudPaymentsResellerSubscriptionV1YoutubePayload{
                            PartnerEligibilityIds: []string{
                                "officia",
                                "dolor",
                                "debitis",
                            },
                        },
                    },
                },
            },
            Name: sdk.String("Wilbur King"),
            PartnerUserToken: sdk.String("maiores"),
            Products: []string{
                "dicta",
                "magnam",
                "cumque",
            },
            PromotionSpecs: []shared.GoogleCloudPaymentsResellerSubscriptionV1SubscriptionPromotionSpecInput{
                shared.GoogleCloudPaymentsResellerSubscriptionV1SubscriptionPromotionSpecInput{
                    FreeTrialDuration: &shared.GoogleCloudPaymentsResellerSubscriptionV1Duration{
                        Count: sdk.Int(411820),
                        Unit: shared.GoogleCloudPaymentsResellerSubscriptionV1DurationUnitEnumMonth.ToPointer(),
                    },
                    IntroductoryPricingDetails: &shared.GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsInput{
                        IntroductoryPricingSpecs: []shared.GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpecInput{
                            shared.GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpecInput{
                                DiscountAmount: &shared.GoogleCloudPaymentsResellerSubscriptionV1Amount{
                                    AmountMicros: sdk.String("accusamus"),
                                    CurrencyCode: sdk.String("non"),
                                },
                            },
                            shared.GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpecInput{
                                DiscountAmount: &shared.GoogleCloudPaymentsResellerSubscriptionV1Amount{
                                    AmountMicros: sdk.String("occaecati"),
                                    CurrencyCode: sdk.String("enim"),
                                },
                            },
                            shared.GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpecInput{
                                DiscountAmount: &shared.GoogleCloudPaymentsResellerSubscriptionV1Amount{
                                    AmountMicros: sdk.String("accusamus"),
                                    CurrencyCode: sdk.String("delectus"),
                                },
                            },
                        },
                    },
                    Promotion: sdk.String("quidem"),
                },
                shared.GoogleCloudPaymentsResellerSubscriptionV1SubscriptionPromotionSpecInput{
                    FreeTrialDuration: &shared.GoogleCloudPaymentsResellerSubscriptionV1Duration{
                        Count: sdk.Int(588465),
                        Unit: shared.GoogleCloudPaymentsResellerSubscriptionV1DurationUnitEnumDay.ToPointer(),
                    },
                    IntroductoryPricingDetails: &shared.GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsInput{
                        IntroductoryPricingSpecs: []shared.GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpecInput{
                            shared.GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpecInput{
                                DiscountAmount: &shared.GoogleCloudPaymentsResellerSubscriptionV1Amount{
                                    AmountMicros: sdk.String("blanditiis"),
                                    CurrencyCode: sdk.String("deleniti"),
                                },
                            },
                            shared.GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpecInput{
                                DiscountAmount: &shared.GoogleCloudPaymentsResellerSubscriptionV1Amount{
                                    AmountMicros: sdk.String("sapiente"),
                                    CurrencyCode: sdk.String("amet"),
                                },
                            },
                            shared.GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpecInput{
                                DiscountAmount: &shared.GoogleCloudPaymentsResellerSubscriptionV1Amount{
                                    AmountMicros: sdk.String("deserunt"),
                                    CurrencyCode: sdk.String("nisi"),
                                },
                            },
                        },
                    },
                    Promotion: sdk.String("vel"),
                },
                shared.GoogleCloudPaymentsResellerSubscriptionV1SubscriptionPromotionSpecInput{
                    FreeTrialDuration: &shared.GoogleCloudPaymentsResellerSubscriptionV1Duration{
                        Count: sdk.Int(618809),
                        Unit: shared.GoogleCloudPaymentsResellerSubscriptionV1DurationUnitEnumMonth.ToPointer(),
                    },
                    IntroductoryPricingDetails: &shared.GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsInput{
                        IntroductoryPricingSpecs: []shared.GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpecInput{
                            shared.GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpecInput{
                                DiscountAmount: &shared.GoogleCloudPaymentsResellerSubscriptionV1Amount{
                                    AmountMicros: sdk.String("perferendis"),
                                    CurrencyCode: sdk.String("nihil"),
                                },
                            },
                            shared.GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpecInput{
                                DiscountAmount: &shared.GoogleCloudPaymentsResellerSubscriptionV1Amount{
                                    AmountMicros: sdk.String("magnam"),
                                    CurrencyCode: sdk.String("distinctio"),
                                },
                            },
                        },
                    },
                    Promotion: sdk.String("id"),
                },
                shared.GoogleCloudPaymentsResellerSubscriptionV1SubscriptionPromotionSpecInput{
                    FreeTrialDuration: &shared.GoogleCloudPaymentsResellerSubscriptionV1Duration{
                        Count: sdk.Int(287991),
                        Unit: shared.GoogleCloudPaymentsResellerSubscriptionV1DurationUnitEnumUnitUnspecified.ToPointer(),
                    },
                    IntroductoryPricingDetails: &shared.GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsInput{
                        IntroductoryPricingSpecs: []shared.GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpecInput{
                            shared.GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpecInput{
                                DiscountAmount: &shared.GoogleCloudPaymentsResellerSubscriptionV1Amount{
                                    AmountMicros: sdk.String("natus"),
                                    CurrencyCode: sdk.String("nobis"),
                                },
                            },
                            shared.GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpecInput{
                                DiscountAmount: &shared.GoogleCloudPaymentsResellerSubscriptionV1Amount{
                                    AmountMicros: sdk.String("eum"),
                                    CurrencyCode: sdk.String("vero"),
                                },
                            },
                        },
                    },
                    Promotion: sdk.String("aspernatur"),
                },
            },
            Promotions: []string{
                "magnam",
            },
            ServiceLocation: &shared.GoogleCloudPaymentsResellerSubscriptionV1Location{
                PostalCode: sdk.String("53555"),
                RegionCode: sdk.String("accusantium"),
            },
            UpgradeDowngradeDetails: &shared.GoogleCloudPaymentsResellerSubscriptionV1SubscriptionUpgradeDowngradeDetails{
                BillingCycleSpec: shared.GoogleCloudPaymentsResellerSubscriptionV1SubscriptionUpgradeDowngradeDetailsBillingCycleSpecEnumBillingCycleSpecAlignWithPreviousSubscription.ToPointer(),
                PreviousSubscriptionID: sdk.String("reiciendis"),
            },
        },
        AccessToken: sdk.String("mollitia"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("eum"),
        Fields: sdk.String("dolor"),
        Key: sdk.String("necessitatibus"),
        OauthToken: sdk.String("odit"),
        Parent: "nemo",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quasi"),
        SubscriptionID: sdk.String("iure"),
        UploadType: sdk.String("doloribus"),
        UploadProtocol: sdk.String("debitis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudPaymentsResellerSubscriptionV1Subscription != nil {
        // handle response
    }
}
```

## PaymentsresellersubscriptionPartnersSubscriptionsEntitle

Used by partners to entitle a previously provisioned subscription to the current end user. The end user identity is inferred from the authorized credential of the request. This API must be authorized by the end user using OAuth.

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
    res, err := s.Partners.PaymentsresellersubscriptionPartnersSubscriptionsEntitle(ctx, operations.PaymentsresellersubscriptionPartnersSubscriptionsEntitleRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        RequestBody: map[string]interface{}{
            "deleniti": "facilis",
            "in": "architecto",
            "architecto": "repudiandae",
            "ullam": "expedita",
        },
        AccessToken: sdk.String("nihil"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("quibusdam"),
        Fields: sdk.String("sed"),
        Key: sdk.String("saepe"),
        Name: "Edward Crooks",
        OauthToken: sdk.String("magni"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("sunt"),
        UploadType: sdk.String("quo"),
        UploadProtocol: sdk.String("illum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudPaymentsResellerSubscriptionV1EntitleSubscriptionResponse != nil {
        // handle response
    }
}
```

## PaymentsresellersubscriptionPartnersSubscriptionsExtend

[Opt-in only] Most partners should be on auto-extend by default. Used by partners to extend a subscription service for their customers on an ongoing basis for the subscription to remain active and renewable. It should be called directly by the partner using service accounts.

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
    res, err := s.Partners.PaymentsresellersubscriptionPartnersSubscriptionsExtend(ctx, operations.PaymentsresellersubscriptionPartnersSubscriptionsExtendRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleCloudPaymentsResellerSubscriptionV1ExtendSubscriptionRequest: &shared.GoogleCloudPaymentsResellerSubscriptionV1ExtendSubscriptionRequest{
            Extension: &shared.GoogleCloudPaymentsResellerSubscriptionV1Extension{
                Duration: &shared.GoogleCloudPaymentsResellerSubscriptionV1Duration{
                    Count: sdk.Int(807319),
                    Unit: shared.GoogleCloudPaymentsResellerSubscriptionV1DurationUnitEnumMonth.ToPointer(),
                },
                PartnerUserToken: sdk.String("excepturi"),
            },
            RequestID: sdk.String("odit"),
        },
        AccessToken: sdk.String("ea"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("ab"),
        Fields: sdk.String("maiores"),
        Key: sdk.String("quidem"),
        Name: "Colleen Johnston PhD",
        OauthToken: sdk.String("nemo"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("voluptatibus"),
        UploadType: sdk.String("perferendis"),
        UploadProtocol: sdk.String("fugiat"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudPaymentsResellerSubscriptionV1ExtendSubscriptionResponse != nil {
        // handle response
    }
}
```

## PaymentsresellersubscriptionPartnersSubscriptionsGet

Used by partners to get a subscription by id. It should be called directly by the partner using service accounts.

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
    res, err := s.Partners.PaymentsresellersubscriptionPartnersSubscriptionsGet(ctx, operations.PaymentsresellersubscriptionPartnersSubscriptionsGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("aut"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("corporis"),
        Fields: sdk.String("hic"),
        Key: sdk.String("libero"),
        Name: "Ernest Hayes",
        OauthToken: sdk.String("eaque"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quis"),
        UploadType: sdk.String("nesciunt"),
        UploadProtocol: sdk.String("eos"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudPaymentsResellerSubscriptionV1Subscription != nil {
        // handle response
    }
}
```

## PaymentsresellersubscriptionPartnersSubscriptionsProvision

Used by partners to provision a subscription for their customers. This creates a subscription without associating it with the end user account. EntitleSubscription must be called separately using OAuth in order for the end user account to be associated with the subscription. It should be called directly by the partner using service accounts.

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
    res, err := s.Partners.PaymentsresellersubscriptionPartnersSubscriptionsProvision(ctx, operations.PaymentsresellersubscriptionPartnersSubscriptionsProvisionRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleCloudPaymentsResellerSubscriptionV1SubscriptionInput: &shared.GoogleCloudPaymentsResellerSubscriptionV1SubscriptionInput{
            CancellationDetails: &shared.GoogleCloudPaymentsResellerSubscriptionV1SubscriptionCancellationDetails{
                Reason: shared.GoogleCloudPaymentsResellerSubscriptionV1SubscriptionCancellationDetailsReasonEnumCancellationReasonFraud.ToPointer(),
            },
            LineItems: []shared.GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItemInput{
                shared.GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItemInput{
                    Amount: &shared.GoogleCloudPaymentsResellerSubscriptionV1Amount{
                        AmountMicros: sdk.String("quam"),
                        CurrencyCode: sdk.String("dolor"),
                    },
                    LineItemPromotionSpecs: []shared.GoogleCloudPaymentsResellerSubscriptionV1SubscriptionPromotionSpecInput{
                        shared.GoogleCloudPaymentsResellerSubscriptionV1SubscriptionPromotionSpecInput{
                            FreeTrialDuration: &shared.GoogleCloudPaymentsResellerSubscriptionV1Duration{
                                Count: sdk.Int(345352),
                                Unit: shared.GoogleCloudPaymentsResellerSubscriptionV1DurationUnitEnumDay.ToPointer(),
                            },
                            IntroductoryPricingDetails: &shared.GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsInput{
                                IntroductoryPricingSpecs: []shared.GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpecInput{
                                    shared.GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpecInput{
                                        DiscountAmount: &shared.GoogleCloudPaymentsResellerSubscriptionV1Amount{
                                            AmountMicros: sdk.String("omnis"),
                                            CurrencyCode: sdk.String("facilis"),
                                        },
                                    },
                                    shared.GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpecInput{
                                        DiscountAmount: &shared.GoogleCloudPaymentsResellerSubscriptionV1Amount{
                                            AmountMicros: sdk.String("perspiciatis"),
                                            CurrencyCode: sdk.String("voluptatem"),
                                        },
                                    },
                                    shared.GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpecInput{
                                        DiscountAmount: &shared.GoogleCloudPaymentsResellerSubscriptionV1Amount{
                                            AmountMicros: sdk.String("porro"),
                                            CurrencyCode: sdk.String("consequuntur"),
                                        },
                                    },
                                    shared.GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpecInput{
                                        DiscountAmount: &shared.GoogleCloudPaymentsResellerSubscriptionV1Amount{
                                            AmountMicros: sdk.String("blanditiis"),
                                            CurrencyCode: sdk.String("error"),
                                        },
                                    },
                                },
                            },
                            Promotion: sdk.String("eaque"),
                        },
                        shared.GoogleCloudPaymentsResellerSubscriptionV1SubscriptionPromotionSpecInput{
                            FreeTrialDuration: &shared.GoogleCloudPaymentsResellerSubscriptionV1Duration{
                                Count: sdk.Int(577229),
                                Unit: shared.GoogleCloudPaymentsResellerSubscriptionV1DurationUnitEnumDay.ToPointer(),
                            },
                            IntroductoryPricingDetails: &shared.GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsInput{
                                IntroductoryPricingSpecs: []shared.GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpecInput{
                                    shared.GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpecInput{
                                        DiscountAmount: &shared.GoogleCloudPaymentsResellerSubscriptionV1Amount{
                                            AmountMicros: sdk.String("asperiores"),
                                            CurrencyCode: sdk.String("earum"),
                                        },
                                    },
                                },
                            },
                            Promotion: sdk.String("modi"),
                        },
                        shared.GoogleCloudPaymentsResellerSubscriptionV1SubscriptionPromotionSpecInput{
                            FreeTrialDuration: &shared.GoogleCloudPaymentsResellerSubscriptionV1Duration{
                                Count: sdk.Int(613966),
                                Unit: shared.GoogleCloudPaymentsResellerSubscriptionV1DurationUnitEnumDay.ToPointer(),
                            },
                            IntroductoryPricingDetails: &shared.GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsInput{
                                IntroductoryPricingSpecs: []shared.GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpecInput{
                                    shared.GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpecInput{
                                        DiscountAmount: &shared.GoogleCloudPaymentsResellerSubscriptionV1Amount{
                                            AmountMicros: sdk.String("pariatur"),
                                            CurrencyCode: sdk.String("provident"),
                                        },
                                    },
                                    shared.GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpecInput{
                                        DiscountAmount: &shared.GoogleCloudPaymentsResellerSubscriptionV1Amount{
                                            AmountMicros: sdk.String("nobis"),
                                            CurrencyCode: sdk.String("libero"),
                                        },
                                    },
                                    shared.GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpecInput{
                                        DiscountAmount: &shared.GoogleCloudPaymentsResellerSubscriptionV1Amount{
                                            AmountMicros: sdk.String("delectus"),
                                            CurrencyCode: sdk.String("quaerat"),
                                        },
                                    },
                                },
                            },
                            Promotion: sdk.String("quos"),
                        },
                        shared.GoogleCloudPaymentsResellerSubscriptionV1SubscriptionPromotionSpecInput{
                            FreeTrialDuration: &shared.GoogleCloudPaymentsResellerSubscriptionV1Duration{
                                Count: sdk.Int(398221),
                                Unit: shared.GoogleCloudPaymentsResellerSubscriptionV1DurationUnitEnumUnitUnspecified.ToPointer(),
                            },
                            IntroductoryPricingDetails: &shared.GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsInput{
                                IntroductoryPricingSpecs: []shared.GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpecInput{
                                    shared.GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpecInput{
                                        DiscountAmount: &shared.GoogleCloudPaymentsResellerSubscriptionV1Amount{
                                            AmountMicros: sdk.String("dolor"),
                                            CurrencyCode: sdk.String("qui"),
                                        },
                                    },
                                },
                            },
                            Promotion: sdk.String("ipsum"),
                        },
                    },
                    OneTimeRecurrenceDetails: &shared.GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItemOneTimeRecurrenceDetails{
                        ServicePeriod: &shared.GoogleCloudPaymentsResellerSubscriptionV1ServicePeriod{
                            EndTime: sdk.String("hic"),
                            StartTime: sdk.String("excepturi"),
                        },
                    },
                    Product: sdk.String("cum"),
                    ProductPayload: &shared.GoogleCloudPaymentsResellerSubscriptionV1ProductPayload{
                        GoogleOnePayload: &shared.GoogleCloudPaymentsResellerSubscriptionV1GoogleOnePayload{
                            Campaigns: []string{
                                "dignissimos",
                                "reiciendis",
                            },
                            Offering: shared.GoogleCloudPaymentsResellerSubscriptionV1GoogleOnePayloadOfferingEnumOfferingVasBundle.ToPointer(),
                            SalesChannel: shared.GoogleCloudPaymentsResellerSubscriptionV1GoogleOnePayloadSalesChannelEnumChannelOnlineAndroidApp.ToPointer(),
                            StoreID: sdk.String("numquam"),
                        },
                        YoutubePayload: &shared.GoogleCloudPaymentsResellerSubscriptionV1YoutubePayload{
                            PartnerEligibilityIds: []string{
                                "ipsa",
                            },
                        },
                    },
                },
                shared.GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItemInput{
                    Amount: &shared.GoogleCloudPaymentsResellerSubscriptionV1Amount{
                        AmountMicros: sdk.String("ipsa"),
                        CurrencyCode: sdk.String("iure"),
                    },
                    LineItemPromotionSpecs: []shared.GoogleCloudPaymentsResellerSubscriptionV1SubscriptionPromotionSpecInput{
                        shared.GoogleCloudPaymentsResellerSubscriptionV1SubscriptionPromotionSpecInput{
                            FreeTrialDuration: &shared.GoogleCloudPaymentsResellerSubscriptionV1Duration{
                                Count: sdk.Int(311796),
                                Unit: shared.GoogleCloudPaymentsResellerSubscriptionV1DurationUnitEnumDay.ToPointer(),
                            },
                            IntroductoryPricingDetails: &shared.GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsInput{
                                IntroductoryPricingSpecs: []shared.GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpecInput{
                                    shared.GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpecInput{
                                        DiscountAmount: &shared.GoogleCloudPaymentsResellerSubscriptionV1Amount{
                                            AmountMicros: sdk.String("voluptatibus"),
                                            CurrencyCode: sdk.String("voluptas"),
                                        },
                                    },
                                    shared.GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpecInput{
                                        DiscountAmount: &shared.GoogleCloudPaymentsResellerSubscriptionV1Amount{
                                            AmountMicros: sdk.String("natus"),
                                            CurrencyCode: sdk.String("eos"),
                                        },
                                    },
                                    shared.GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpecInput{
                                        DiscountAmount: &shared.GoogleCloudPaymentsResellerSubscriptionV1Amount{
                                            AmountMicros: sdk.String("atque"),
                                            CurrencyCode: sdk.String("sit"),
                                        },
                                    },
                                },
                            },
                            Promotion: sdk.String("fugiat"),
                        },
                        shared.GoogleCloudPaymentsResellerSubscriptionV1SubscriptionPromotionSpecInput{
                            FreeTrialDuration: &shared.GoogleCloudPaymentsResellerSubscriptionV1Duration{
                                Count: sdk.Int(67249),
                                Unit: shared.GoogleCloudPaymentsResellerSubscriptionV1DurationUnitEnumDay.ToPointer(),
                            },
                            IntroductoryPricingDetails: &shared.GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsInput{
                                IntroductoryPricingSpecs: []shared.GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpecInput{
                                    shared.GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpecInput{
                                        DiscountAmount: &shared.GoogleCloudPaymentsResellerSubscriptionV1Amount{
                                            AmountMicros: sdk.String("iusto"),
                                            CurrencyCode: sdk.String("voluptate"),
                                        },
                                    },
                                    shared.GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpecInput{
                                        DiscountAmount: &shared.GoogleCloudPaymentsResellerSubscriptionV1Amount{
                                            AmountMicros: sdk.String("dolorum"),
                                            CurrencyCode: sdk.String("deleniti"),
                                        },
                                    },
                                    shared.GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpecInput{
                                        DiscountAmount: &shared.GoogleCloudPaymentsResellerSubscriptionV1Amount{
                                            AmountMicros: sdk.String("omnis"),
                                            CurrencyCode: sdk.String("necessitatibus"),
                                        },
                                    },
                                },
                            },
                            Promotion: sdk.String("distinctio"),
                        },
                    },
                    OneTimeRecurrenceDetails: &shared.GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItemOneTimeRecurrenceDetails{
                        ServicePeriod: &shared.GoogleCloudPaymentsResellerSubscriptionV1ServicePeriod{
                            EndTime: sdk.String("asperiores"),
                            StartTime: sdk.String("nihil"),
                        },
                    },
                    Product: sdk.String("ipsum"),
                    ProductPayload: &shared.GoogleCloudPaymentsResellerSubscriptionV1ProductPayload{
                        GoogleOnePayload: &shared.GoogleCloudPaymentsResellerSubscriptionV1GoogleOnePayload{
                            Campaigns: []string{
                                "id",
                                "saepe",
                            },
                            Offering: shared.GoogleCloudPaymentsResellerSubscriptionV1GoogleOnePayloadOfferingEnumOfferingVasBundle.ToPointer(),
                            SalesChannel: shared.GoogleCloudPaymentsResellerSubscriptionV1GoogleOnePayloadSalesChannelEnumChannelUnspecified.ToPointer(),
                            StoreID: sdk.String("perferendis"),
                        },
                        YoutubePayload: &shared.GoogleCloudPaymentsResellerSubscriptionV1YoutubePayload{
                            PartnerEligibilityIds: []string{
                                "optio",
                            },
                        },
                    },
                },
                shared.GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItemInput{
                    Amount: &shared.GoogleCloudPaymentsResellerSubscriptionV1Amount{
                        AmountMicros: sdk.String("accusamus"),
                        CurrencyCode: sdk.String("ad"),
                    },
                    LineItemPromotionSpecs: []shared.GoogleCloudPaymentsResellerSubscriptionV1SubscriptionPromotionSpecInput{
                        shared.GoogleCloudPaymentsResellerSubscriptionV1SubscriptionPromotionSpecInput{
                            FreeTrialDuration: &shared.GoogleCloudPaymentsResellerSubscriptionV1Duration{
                                Count: sdk.Int(383464),
                                Unit: shared.GoogleCloudPaymentsResellerSubscriptionV1DurationUnitEnumMonth.ToPointer(),
                            },
                            IntroductoryPricingDetails: &shared.GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsInput{
                                IntroductoryPricingSpecs: []shared.GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpecInput{
                                    shared.GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpecInput{
                                        DiscountAmount: &shared.GoogleCloudPaymentsResellerSubscriptionV1Amount{
                                            AmountMicros: sdk.String("minima"),
                                            CurrencyCode: sdk.String("repellendus"),
                                        },
                                    },
                                    shared.GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpecInput{
                                        DiscountAmount: &shared.GoogleCloudPaymentsResellerSubscriptionV1Amount{
                                            AmountMicros: sdk.String("totam"),
                                            CurrencyCode: sdk.String("similique"),
                                        },
                                    },
                                    shared.GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpecInput{
                                        DiscountAmount: &shared.GoogleCloudPaymentsResellerSubscriptionV1Amount{
                                            AmountMicros: sdk.String("alias"),
                                            CurrencyCode: sdk.String("at"),
                                        },
                                    },
                                },
                            },
                            Promotion: sdk.String("quaerat"),
                        },
                        shared.GoogleCloudPaymentsResellerSubscriptionV1SubscriptionPromotionSpecInput{
                            FreeTrialDuration: &shared.GoogleCloudPaymentsResellerSubscriptionV1Duration{
                                Count: sdk.Int(273542),
                                Unit: shared.GoogleCloudPaymentsResellerSubscriptionV1DurationUnitEnumMonth.ToPointer(),
                            },
                            IntroductoryPricingDetails: &shared.GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsInput{
                                IntroductoryPricingSpecs: []shared.GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpecInput{
                                    shared.GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpecInput{
                                        DiscountAmount: &shared.GoogleCloudPaymentsResellerSubscriptionV1Amount{
                                            AmountMicros: sdk.String("officiis"),
                                            CurrencyCode: sdk.String("qui"),
                                        },
                                    },
                                    shared.GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpecInput{
                                        DiscountAmount: &shared.GoogleCloudPaymentsResellerSubscriptionV1Amount{
                                            AmountMicros: sdk.String("dolorum"),
                                            CurrencyCode: sdk.String("a"),
                                        },
                                    },
                                    shared.GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpecInput{
                                        DiscountAmount: &shared.GoogleCloudPaymentsResellerSubscriptionV1Amount{
                                            AmountMicros: sdk.String("esse"),
                                            CurrencyCode: sdk.String("harum"),
                                        },
                                    },
                                    shared.GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpecInput{
                                        DiscountAmount: &shared.GoogleCloudPaymentsResellerSubscriptionV1Amount{
                                            AmountMicros: sdk.String("iusto"),
                                            CurrencyCode: sdk.String("ipsum"),
                                        },
                                    },
                                },
                            },
                            Promotion: sdk.String("quisquam"),
                        },
                        shared.GoogleCloudPaymentsResellerSubscriptionV1SubscriptionPromotionSpecInput{
                            FreeTrialDuration: &shared.GoogleCloudPaymentsResellerSubscriptionV1Duration{
                                Count: sdk.Int(947371),
                                Unit: shared.GoogleCloudPaymentsResellerSubscriptionV1DurationUnitEnumUnitUnspecified.ToPointer(),
                            },
                            IntroductoryPricingDetails: &shared.GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsInput{
                                IntroductoryPricingSpecs: []shared.GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpecInput{
                                    shared.GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpecInput{
                                        DiscountAmount: &shared.GoogleCloudPaymentsResellerSubscriptionV1Amount{
                                            AmountMicros: sdk.String("accusamus"),
                                            CurrencyCode: sdk.String("numquam"),
                                        },
                                    },
                                    shared.GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpecInput{
                                        DiscountAmount: &shared.GoogleCloudPaymentsResellerSubscriptionV1Amount{
                                            AmountMicros: sdk.String("enim"),
                                            CurrencyCode: sdk.String("dolorem"),
                                        },
                                    },
                                    shared.GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpecInput{
                                        DiscountAmount: &shared.GoogleCloudPaymentsResellerSubscriptionV1Amount{
                                            AmountMicros: sdk.String("sapiente"),
                                            CurrencyCode: sdk.String("totam"),
                                        },
                                    },
                                },
                            },
                            Promotion: sdk.String("nihil"),
                        },
                        shared.GoogleCloudPaymentsResellerSubscriptionV1SubscriptionPromotionSpecInput{
                            FreeTrialDuration: &shared.GoogleCloudPaymentsResellerSubscriptionV1Duration{
                                Count: sdk.Int(25662),
                                Unit: shared.GoogleCloudPaymentsResellerSubscriptionV1DurationUnitEnumDay.ToPointer(),
                            },
                            IntroductoryPricingDetails: &shared.GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsInput{
                                IntroductoryPricingSpecs: []shared.GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpecInput{
                                    shared.GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpecInput{
                                        DiscountAmount: &shared.GoogleCloudPaymentsResellerSubscriptionV1Amount{
                                            AmountMicros: sdk.String("sed"),
                                            CurrencyCode: sdk.String("vel"),
                                        },
                                    },
                                },
                            },
                            Promotion: sdk.String("libero"),
                        },
                    },
                    OneTimeRecurrenceDetails: &shared.GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItemOneTimeRecurrenceDetails{
                        ServicePeriod: &shared.GoogleCloudPaymentsResellerSubscriptionV1ServicePeriod{
                            EndTime: sdk.String("voluptas"),
                            StartTime: sdk.String("deserunt"),
                        },
                    },
                    Product: sdk.String("quam"),
                    ProductPayload: &shared.GoogleCloudPaymentsResellerSubscriptionV1ProductPayload{
                        GoogleOnePayload: &shared.GoogleCloudPaymentsResellerSubscriptionV1GoogleOnePayload{
                            Campaigns: []string{
                                "incidunt",
                            },
                            Offering: shared.GoogleCloudPaymentsResellerSubscriptionV1GoogleOnePayloadOfferingEnumOfferingUnspecified.ToPointer(),
                            SalesChannel: shared.GoogleCloudPaymentsResellerSubscriptionV1GoogleOnePayloadSalesChannelEnumChannelOnlineWeb.ToPointer(),
                            StoreID: sdk.String("maxime"),
                        },
                        YoutubePayload: &shared.GoogleCloudPaymentsResellerSubscriptionV1YoutubePayload{
                            PartnerEligibilityIds: []string{
                                "soluta",
                                "dicta",
                                "laborum",
                                "totam",
                            },
                        },
                    },
                },
                shared.GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItemInput{
                    Amount: &shared.GoogleCloudPaymentsResellerSubscriptionV1Amount{
                        AmountMicros: sdk.String("incidunt"),
                        CurrencyCode: sdk.String("aspernatur"),
                    },
                    LineItemPromotionSpecs: []shared.GoogleCloudPaymentsResellerSubscriptionV1SubscriptionPromotionSpecInput{
                        shared.GoogleCloudPaymentsResellerSubscriptionV1SubscriptionPromotionSpecInput{
                            FreeTrialDuration: &shared.GoogleCloudPaymentsResellerSubscriptionV1Duration{
                                Count: sdk.Int(716860),
                                Unit: shared.GoogleCloudPaymentsResellerSubscriptionV1DurationUnitEnumDay.ToPointer(),
                            },
                            IntroductoryPricingDetails: &shared.GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsInput{
                                IntroductoryPricingSpecs: []shared.GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpecInput{
                                    shared.GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpecInput{
                                        DiscountAmount: &shared.GoogleCloudPaymentsResellerSubscriptionV1Amount{
                                            AmountMicros: sdk.String("quam"),
                                            CurrencyCode: sdk.String("molestias"),
                                        },
                                    },
                                    shared.GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpecInput{
                                        DiscountAmount: &shared.GoogleCloudPaymentsResellerSubscriptionV1Amount{
                                            AmountMicros: sdk.String("temporibus"),
                                            CurrencyCode: sdk.String("qui"),
                                        },
                                    },
                                },
                            },
                            Promotion: sdk.String("neque"),
                        },
                    },
                    OneTimeRecurrenceDetails: &shared.GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItemOneTimeRecurrenceDetails{
                        ServicePeriod: &shared.GoogleCloudPaymentsResellerSubscriptionV1ServicePeriod{
                            EndTime: sdk.String("fugit"),
                            StartTime: sdk.String("magni"),
                        },
                    },
                    Product: sdk.String("odio"),
                    ProductPayload: &shared.GoogleCloudPaymentsResellerSubscriptionV1ProductPayload{
                        GoogleOnePayload: &shared.GoogleCloudPaymentsResellerSubscriptionV1GoogleOnePayload{
                            Campaigns: []string{
                                "ullam",
                            },
                            Offering: shared.GoogleCloudPaymentsResellerSubscriptionV1GoogleOnePayloadOfferingEnumOfferingHardBundle.ToPointer(),
                            SalesChannel: shared.GoogleCloudPaymentsResellerSubscriptionV1GoogleOnePayloadSalesChannelEnumChannelOnlineIosApp.ToPointer(),
                            StoreID: sdk.String("voluptatem"),
                        },
                        YoutubePayload: &shared.GoogleCloudPaymentsResellerSubscriptionV1YoutubePayload{
                            PartnerEligibilityIds: []string{
                                "soluta",
                                "nobis",
                                "et",
                                "saepe",
                            },
                        },
                    },
                },
            },
            Name: sdk.String("Carolyn Rohan"),
            PartnerUserToken: sdk.String("cupiditate"),
            Products: []string{
                "delectus",
            },
            PromotionSpecs: []shared.GoogleCloudPaymentsResellerSubscriptionV1SubscriptionPromotionSpecInput{
                shared.GoogleCloudPaymentsResellerSubscriptionV1SubscriptionPromotionSpecInput{
                    FreeTrialDuration: &shared.GoogleCloudPaymentsResellerSubscriptionV1Duration{
                        Count: sdk.Int(292147),
                        Unit: shared.GoogleCloudPaymentsResellerSubscriptionV1DurationUnitEnumUnitUnspecified.ToPointer(),
                    },
                    IntroductoryPricingDetails: &shared.GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsInput{
                        IntroductoryPricingSpecs: []shared.GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpecInput{
                            shared.GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpecInput{
                                DiscountAmount: &shared.GoogleCloudPaymentsResellerSubscriptionV1Amount{
                                    AmountMicros: sdk.String("dolorum"),
                                    CurrencyCode: sdk.String("architecto"),
                                },
                            },
                        },
                    },
                    Promotion: sdk.String("quae"),
                },
            },
            Promotions: []string{
                "quas",
            },
            ServiceLocation: &shared.GoogleCloudPaymentsResellerSubscriptionV1Location{
                PostalCode: sdk.String("06879-2751"),
                RegionCode: sdk.String("quae"),
            },
            UpgradeDowngradeDetails: &shared.GoogleCloudPaymentsResellerSubscriptionV1SubscriptionUpgradeDowngradeDetails{
                BillingCycleSpec: shared.GoogleCloudPaymentsResellerSubscriptionV1SubscriptionUpgradeDowngradeDetailsBillingCycleSpecEnumBillingCycleSpecAlignWithPreviousSubscription.ToPointer(),
                PreviousSubscriptionID: sdk.String("odio"),
            },
        },
        AccessToken: sdk.String("occaecati"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("quisquam"),
        Fields: sdk.String("vero"),
        Key: sdk.String("omnis"),
        OauthToken: sdk.String("quis"),
        Parent: "ipsum",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("delectus"),
        SubscriptionID: sdk.String("voluptate"),
        UploadType: sdk.String("consectetur"),
        UploadProtocol: sdk.String("vero"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudPaymentsResellerSubscriptionV1Subscription != nil {
        // handle response
    }
}
```

## PaymentsresellersubscriptionPartnersSubscriptionsUndoCancel

Used by partners to revoke the pending cancellation of a subscription, which is currently in `STATE_CANCEL_AT_END_OF_CYCLE` state. If the subscription is already cancelled, the request will fail. It should be called directly by the partner using service accounts.

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
    res, err := s.Partners.PaymentsresellersubscriptionPartnersSubscriptionsUndoCancel(ctx, operations.PaymentsresellersubscriptionPartnersSubscriptionsUndoCancelRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        RequestBody: map[string]interface{}{
            "hic": "distinctio",
            "quod": "odio",
        },
        AccessToken: sdk.String("similique"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("vero"),
        Fields: sdk.String("ducimus"),
        Key: sdk.String("dolore"),
        Name: "Gilberto Dickinson",
        OauthToken: sdk.String("aut"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("voluptatibus"),
        UploadType: sdk.String("exercitationem"),
        UploadProtocol: sdk.String("nulla"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudPaymentsResellerSubscriptionV1UndoCancelSubscriptionResponse != nil {
        // handle response
    }
}
```
