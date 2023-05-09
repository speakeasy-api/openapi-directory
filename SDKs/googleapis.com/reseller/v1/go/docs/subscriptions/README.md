# Subscriptions

### Available Operations

* [ResellerSubscriptionsActivate](#resellersubscriptionsactivate) - Activates a subscription previously suspended by the reseller. If you did not suspend the customer subscription and it is suspended for any other reason, such as for abuse or a pending ToS acceptance, this call will not reactivate the customer subscription.
* [ResellerSubscriptionsChangePlan](#resellersubscriptionschangeplan) - Updates a subscription plan. Use this method to update a plan for a 30-day trial or a flexible plan subscription to an annual commitment plan with monthly or yearly payments. How a plan is updated differs depending on the plan and the products. For more information, see the description in [manage subscriptions](/admin-sdk/reseller/v1/how-tos/manage_subscriptions#update_subscription_plan).
* [ResellerSubscriptionsChangeRenewalSettings](#resellersubscriptionschangerenewalsettings) - Updates a user license's renewal settings. This is applicable for accounts with annual commitment plans only. For more information, see the description in [manage subscriptions](/admin-sdk/reseller/v1/how-tos/manage_subscriptions#update_renewal).
* [ResellerSubscriptionsChangeSeats](#resellersubscriptionschangeseats) - Updates a subscription's user license settings. For more information about updating an annual commitment plan or a flexible plan subscription’s licenses, see [Manage Subscriptions](/admin-sdk/reseller/v1/how-tos/manage_subscriptions#update_subscription_seat).
* [ResellerSubscriptionsDelete](#resellersubscriptionsdelete) - Cancels, suspends, or transfers a subscription to direct.
* [ResellerSubscriptionsGet](#resellersubscriptionsget) - Gets a specific subscription. The `subscriptionId` can be found using the [Retrieve all reseller subscriptions](/admin-sdk/reseller/v1/how-tos/manage_subscriptions#get_all_subscriptions) method. For more information about retrieving a specific subscription, see the information descrived in [manage subscriptions](/admin-sdk/reseller/v1/how-tos/manage_subscriptions#get_subscription).
* [ResellerSubscriptionsInsert](#resellersubscriptionsinsert) - Creates or transfer a subscription. Create a subscription for a customer's account that you ordered using the [Order a new customer account](/admin-sdk/reseller/v1/reference/customers/insert.html) method. For more information about creating a subscription for different payment plans, see [manage subscriptions](/admin-sdk/reseller/v1/how-tos/manage_subscriptions#create_subscription).\ If you did not order the customer's account using the customer insert method, use the customer's `customerAuthToken` when creating a subscription for that customer. If transferring a G Suite subscription with an associated Google Drive or Google Vault subscription, use the [batch operation](/admin-sdk/reseller/v1/how-tos/batch.html) to transfer all of these subscriptions. For more information, see how to [transfer subscriptions](/admin-sdk/reseller/v1/how-tos/manage_subscriptions#transfer_a_subscription).
* [ResellerSubscriptionsList](#resellersubscriptionslist) - Lists of subscriptions managed by the reseller. The list can be all subscriptions, all of a customer's subscriptions, or all of a customer's transferable subscriptions. Optionally, this method can filter the response by a `customerNamePrefix`. For more information, see [manage subscriptions](/admin-sdk/reseller/v1/how-tos/manage_subscriptions).
* [ResellerSubscriptionsStartPaidService](#resellersubscriptionsstartpaidservice) - Immediately move a 30-day free trial subscription to a paid service subscription. This method is only applicable if a payment plan has already been set up for the 30-day trial subscription. For more information, see [manage subscriptions](/admin-sdk/reseller/v1/how-tos/manage_subscriptions#paid_service).
* [ResellerSubscriptionsSuspend](#resellersubscriptionssuspend) - Suspends an active subscription. You can use this method to suspend a paid subscription that is currently in the `ACTIVE` state. * For `FLEXIBLE` subscriptions, billing is paused. * For `ANNUAL_MONTHLY_PAY` or `ANNUAL_YEARLY_PAY` subscriptions: * Suspending the subscription does not change the renewal date that was originally committed to. * A suspended subscription does not renew. If you activate the subscription after the original renewal date, a new annual subscription will be created, starting on the day of activation. We strongly encourage you to suspend subscriptions only for short periods of time as suspensions over 60 days may result in the subscription being cancelled.

## ResellerSubscriptionsActivate

Activates a subscription previously suspended by the reseller. If you did not suspend the customer subscription and it is suspended for any other reason, such as for abuse or a pending ToS acceptance, this call will not reactivate the customer subscription.

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
    res, err := s.Subscriptions.ResellerSubscriptionsActivate(ctx, operations.ResellerSubscriptionsActivateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("accusamus"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("repudiandae"),
        CustomerID: "quae",
        Fields: sdk.String("ipsum"),
        Key: sdk.String("quidem"),
        OauthToken: sdk.String("molestias"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("excepturi"),
        SubscriptionID: "pariatur",
        UploadType: sdk.String("modi"),
        UploadProtocol: sdk.String("praesentium"),
    }, operations.ResellerSubscriptionsActivateSecurity{
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

## ResellerSubscriptionsChangePlan

Updates a subscription plan. Use this method to update a plan for a 30-day trial or a flexible plan subscription to an annual commitment plan with monthly or yearly payments. How a plan is updated differs depending on the plan and the products. For more information, see the description in [manage subscriptions](/admin-sdk/reseller/v1/how-tos/manage_subscriptions#update_subscription_plan).

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
    res, err := s.Subscriptions.ResellerSubscriptionsChangePlan(ctx, operations.ResellerSubscriptionsChangePlanRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        ChangePlanRequest: &shared.ChangePlanRequest{
            DealCode: sdk.String("voluptates"),
            Kind: sdk.String("quasi"),
            PlanName: sdk.String("repudiandae"),
            PurchaseOrderID: sdk.String("sint"),
            Seats: &shared.Seats{
                Kind: sdk.String("veritatis"),
                LicensedNumberOfSeats: sdk.Int(929297),
                MaximumNumberOfSeats: sdk.Int(277718),
                NumberOfSeats: sdk.Int(318569),
            },
        },
        AccessToken: sdk.String("consequatur"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("quibusdam"),
        CustomerID: "explicabo",
        Fields: sdk.String("deserunt"),
        Key: sdk.String("distinctio"),
        OauthToken: sdk.String("quibusdam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("labore"),
        SubscriptionID: "modi",
        UploadType: sdk.String("qui"),
        UploadProtocol: sdk.String("aliquid"),
    }, operations.ResellerSubscriptionsChangePlanSecurity{
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

## ResellerSubscriptionsChangeRenewalSettings

Updates a user license's renewal settings. This is applicable for accounts with annual commitment plans only. For more information, see the description in [manage subscriptions](/admin-sdk/reseller/v1/how-tos/manage_subscriptions#update_renewal).

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
    res, err := s.Subscriptions.ResellerSubscriptionsChangeRenewalSettings(ctx, operations.ResellerSubscriptionsChangeRenewalSettingsRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        RenewalSettings: &shared.RenewalSettings{
            Kind: sdk.String("quos"),
            RenewalType: sdk.String("perferendis"),
        },
        AccessToken: sdk.String("magni"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("ipsam"),
        CustomerID: "alias",
        Fields: sdk.String("fugit"),
        Key: sdk.String("dolorum"),
        OauthToken: sdk.String("excepturi"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("tempora"),
        SubscriptionID: "facilis",
        UploadType: sdk.String("tempore"),
        UploadProtocol: sdk.String("labore"),
    }, operations.ResellerSubscriptionsChangeRenewalSettingsSecurity{
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

## ResellerSubscriptionsChangeSeats

Updates a subscription's user license settings. For more information about updating an annual commitment plan or a flexible plan subscription’s licenses, see [Manage Subscriptions](/admin-sdk/reseller/v1/how-tos/manage_subscriptions#update_subscription_seat).

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
    res, err := s.Subscriptions.ResellerSubscriptionsChangeSeats(ctx, operations.ResellerSubscriptionsChangeSeatsRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        Seats: &shared.Seats{
            Kind: sdk.String("eum"),
            LicensedNumberOfSeats: sdk.Int(248753),
            MaximumNumberOfSeats: sdk.Int(756107),
            NumberOfSeats: sdk.Int(576157),
        },
        AccessToken: sdk.String("aliquid"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("necessitatibus"),
        CustomerID: "sint",
        Fields: sdk.String("officia"),
        Key: sdk.String("dolor"),
        OauthToken: sdk.String("debitis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("a"),
        SubscriptionID: "dolorum",
        UploadType: sdk.String("in"),
        UploadProtocol: sdk.String("in"),
    }, operations.ResellerSubscriptionsChangeSeatsSecurity{
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

## ResellerSubscriptionsDelete

Cancels, suspends, or transfers a subscription to direct.

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
    res, err := s.Subscriptions.ResellerSubscriptionsDelete(ctx, operations.ResellerSubscriptionsDeleteRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("maiores"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("dicta"),
        CustomerID: "magnam",
        DeletionType: operations.ResellerSubscriptionsDeleteDeletionTypeEnumTransferToDirect,
        Fields: sdk.String("facere"),
        Key: sdk.String("ea"),
        OauthToken: sdk.String("aliquid"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("laborum"),
        SubscriptionID: "accusamus",
        UploadType: sdk.String("non"),
        UploadProtocol: sdk.String("occaecati"),
    }, operations.ResellerSubscriptionsDeleteSecurity{
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

## ResellerSubscriptionsGet

Gets a specific subscription. The `subscriptionId` can be found using the [Retrieve all reseller subscriptions](/admin-sdk/reseller/v1/how-tos/manage_subscriptions#get_all_subscriptions) method. For more information about retrieving a specific subscription, see the information descrived in [manage subscriptions](/admin-sdk/reseller/v1/how-tos/manage_subscriptions#get_subscription).

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
    res, err := s.Subscriptions.ResellerSubscriptionsGet(ctx, operations.ResellerSubscriptionsGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("accusamus"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("quidem"),
        CustomerID: "provident",
        Fields: sdk.String("nam"),
        Key: sdk.String("id"),
        OauthToken: sdk.String("blanditiis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("deleniti"),
        SubscriptionID: "sapiente",
        UploadType: sdk.String("amet"),
        UploadProtocol: sdk.String("deserunt"),
    }, operations.ResellerSubscriptionsGetSecurity{
        Option1: &operations.ResellerSubscriptionsGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Subscription != nil {
        // handle response
    }
}
```

## ResellerSubscriptionsInsert

Creates or transfer a subscription. Create a subscription for a customer's account that you ordered using the [Order a new customer account](/admin-sdk/reseller/v1/reference/customers/insert.html) method. For more information about creating a subscription for different payment plans, see [manage subscriptions](/admin-sdk/reseller/v1/how-tos/manage_subscriptions#create_subscription).\ If you did not order the customer's account using the customer insert method, use the customer's `customerAuthToken` when creating a subscription for that customer. If transferring a G Suite subscription with an associated Google Drive or Google Vault subscription, use the [batch operation](/admin-sdk/reseller/v1/how-tos/batch.html) to transfer all of these subscriptions. For more information, see how to [transfer subscriptions](/admin-sdk/reseller/v1/how-tos/manage_subscriptions#transfer_a_subscription).

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
    res, err := s.Subscriptions.ResellerSubscriptionsInsert(ctx, operations.ResellerSubscriptionsInsertRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        Subscription: &shared.Subscription{
            BillingMethod: sdk.String("vel"),
            CreationTime: sdk.String("natus"),
            CustomerDomain: sdk.String("omnis"),
            CustomerID: sdk.String("molestiae"),
            DealCode: sdk.String("perferendis"),
            Kind: sdk.String("nihil"),
            Plan: &shared.SubscriptionPlan{
                CommitmentInterval: &shared.SubscriptionPlanCommitmentInterval{
                    EndTime: sdk.String("magnam"),
                    StartTime: sdk.String("distinctio"),
                },
                IsCommitmentPlan: sdk.Bool(false),
                PlanName: sdk.String("id"),
            },
            PurchaseOrderID: sdk.String("labore"),
            RenewalSettings: &shared.RenewalSettings{
                Kind: sdk.String("labore"),
                RenewalType: sdk.String("suscipit"),
            },
            ResourceUIURL: sdk.String("natus"),
            Seats: &shared.Seats{
                Kind: sdk.String("nobis"),
                LicensedNumberOfSeats: sdk.Int(428769),
                MaximumNumberOfSeats: sdk.Int(878453),
                NumberOfSeats: sdk.Int(135474),
            },
            SkuID: sdk.String("architecto"),
            SkuName: sdk.String("magnam"),
            Status: sdk.String("et"),
            SubscriptionID: sdk.String("excepturi"),
            SuspensionReasons: []string{
                "provident",
                "quos",
            },
            TransferInfo: &shared.SubscriptionTransferInfo{
                CurrentLegacySkuID: sdk.String("sint"),
                MinimumTransferableSeats: sdk.Int(33625),
                TransferabilityExpirationTime: sdk.String("mollitia"),
            },
            TrialSettings: &shared.SubscriptionTrialSettings{
                IsInTrial: sdk.Bool(false),
                TrialEndTime: sdk.String("reiciendis"),
            },
        },
        AccessToken: sdk.String("mollitia"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("eum"),
        CustomerAuthToken: sdk.String("dolor"),
        CustomerID: "necessitatibus",
        Fields: sdk.String("odit"),
        Key: sdk.String("nemo"),
        OauthToken: sdk.String("quasi"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("iure"),
        UploadType: sdk.String("doloribus"),
        UploadProtocol: sdk.String("debitis"),
    }, operations.ResellerSubscriptionsInsertSecurity{
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

## ResellerSubscriptionsList

Lists of subscriptions managed by the reseller. The list can be all subscriptions, all of a customer's subscriptions, or all of a customer's transferable subscriptions. Optionally, this method can filter the response by a `customerNamePrefix`. For more information, see [manage subscriptions](/admin-sdk/reseller/v1/how-tos/manage_subscriptions).

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
    res, err := s.Subscriptions.ResellerSubscriptionsList(ctx, operations.ResellerSubscriptionsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("maxime"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("facilis"),
        CustomerAuthToken: sdk.String("in"),
        CustomerID: sdk.String("architecto"),
        CustomerNamePrefix: sdk.String("architecto"),
        Fields: sdk.String("repudiandae"),
        Key: sdk.String("ullam"),
        MaxResults: sdk.Int64(714242),
        OauthToken: sdk.String("nihil"),
        PageToken: sdk.String("repellat"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quibusdam"),
        UploadType: sdk.String("sed"),
        UploadProtocol: sdk.String("saepe"),
    }, operations.ResellerSubscriptionsListSecurity{
        Option1: &operations.ResellerSubscriptionsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Subscriptions != nil {
        // handle response
    }
}
```

## ResellerSubscriptionsStartPaidService

Immediately move a 30-day free trial subscription to a paid service subscription. This method is only applicable if a payment plan has already been set up for the 30-day trial subscription. For more information, see [manage subscriptions](/admin-sdk/reseller/v1/how-tos/manage_subscriptions#paid_service).

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
    res, err := s.Subscriptions.ResellerSubscriptionsStartPaidService(ctx, operations.ResellerSubscriptionsStartPaidServiceRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("accusantium"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("praesentium"),
        CustomerID: "natus",
        Fields: sdk.String("magni"),
        Key: sdk.String("sunt"),
        OauthToken: sdk.String("quo"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("illum"),
        SubscriptionID: "pariatur",
        UploadType: sdk.String("maxime"),
        UploadProtocol: sdk.String("ea"),
    }, operations.ResellerSubscriptionsStartPaidServiceSecurity{
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

## ResellerSubscriptionsSuspend

Suspends an active subscription. You can use this method to suspend a paid subscription that is currently in the `ACTIVE` state. * For `FLEXIBLE` subscriptions, billing is paused. * For `ANNUAL_MONTHLY_PAY` or `ANNUAL_YEARLY_PAY` subscriptions: * Suspending the subscription does not change the renewal date that was originally committed to. * A suspended subscription does not renew. If you activate the subscription after the original renewal date, a new annual subscription will be created, starting on the day of activation. We strongly encourage you to suspend subscriptions only for short periods of time as suspensions over 60 days may result in the subscription being cancelled.

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
    res, err := s.Subscriptions.ResellerSubscriptionsSuspend(ctx, operations.ResellerSubscriptionsSuspendRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("odit"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("accusantium"),
        CustomerID: "ab",
        Fields: sdk.String("maiores"),
        Key: sdk.String("quidem"),
        OauthToken: sdk.String("ipsam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("voluptate"),
        SubscriptionID: "autem",
        UploadType: sdk.String("nam"),
        UploadProtocol: sdk.String("eaque"),
    }, operations.ResellerSubscriptionsSuspendSecurity{
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
