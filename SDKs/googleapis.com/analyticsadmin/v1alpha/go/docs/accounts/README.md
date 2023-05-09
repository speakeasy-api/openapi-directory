# Accounts

### Available Operations

* [AnalyticsadminAccountsList](#analyticsadminaccountslist) - Returns all accounts accessible by the caller. Note that these accounts might not currently have GA4 properties. Soft-deleted (ie: "trashed") accounts are excluded by default. Returns an empty list if no relevant accounts are found.
* [AnalyticsadminAccountsProvisionAccountTicket](#analyticsadminaccountsprovisionaccountticket) - Requests a ticket for creating an account.
* [AnalyticsadminAccountsSearchChangeHistoryEvents](#analyticsadminaccountssearchchangehistoryevents) - Searches through all changes to an account or its children given the specified set of filters.

## AnalyticsadminAccountsList

Returns all accounts accessible by the caller. Note that these accounts might not currently have GA4 properties. Soft-deleted (ie: "trashed") accounts are excluded by default. Returns an empty list if no relevant accounts are found.

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
    res, err := s.Accounts.AnalyticsadminAccountsList(ctx, operations.AnalyticsadminAccountsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("nisi"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("temporibus"),
        Fields: sdk.String("ab"),
        Key: sdk.String("quis"),
        OauthToken: sdk.String("veritatis"),
        PageSize: sdk.Int64(648172),
        PageToken: sdk.String("perferendis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ipsam"),
        ShowDeleted: sdk.Bool(false),
        UploadType: sdk.String("repellendus"),
        UploadProtocol: sdk.String("sapiente"),
    }, operations.AnalyticsadminAccountsListSecurity{
        Option1: &operations.AnalyticsadminAccountsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleAnalyticsAdminV1alphaListAccountsResponse != nil {
        // handle response
    }
}
```

## AnalyticsadminAccountsProvisionAccountTicket

Requests a ticket for creating an account.

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
    res, err := s.Accounts.AnalyticsadminAccountsProvisionAccountTicket(ctx, operations.AnalyticsadminAccountsProvisionAccountTicketRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleAnalyticsAdminV1alphaProvisionAccountTicketRequestInput: &shared.GoogleAnalyticsAdminV1alphaProvisionAccountTicketRequestInput{
            Account: &shared.GoogleAnalyticsAdminV1alphaAccountInput{
                DisplayName: sdk.String("odit"),
                RegionCode: sdk.String("at"),
            },
            RedirectURI: sdk.String("at"),
        },
        AccessToken: sdk.String("maiores"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("quod"),
        Fields: sdk.String("quod"),
        Key: sdk.String("esse"),
        OauthToken: sdk.String("totam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("porro"),
        UploadType: sdk.String("dolorum"),
        UploadProtocol: sdk.String("dicta"),
    }, operations.AnalyticsadminAccountsProvisionAccountTicketSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleAnalyticsAdminV1alphaProvisionAccountTicketResponse != nil {
        // handle response
    }
}
```

## AnalyticsadminAccountsSearchChangeHistoryEvents

Searches through all changes to an account or its children given the specified set of filters.

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
    res, err := s.Accounts.AnalyticsadminAccountsSearchChangeHistoryEvents(ctx, operations.AnalyticsadminAccountsSearchChangeHistoryEventsRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleAnalyticsAdminV1alphaSearchChangeHistoryEventsRequest: &shared.GoogleAnalyticsAdminV1alphaSearchChangeHistoryEventsRequest{
            Action: []shared.GoogleAnalyticsAdminV1alphaSearchChangeHistoryEventsRequestActionEnum{
                shared.GoogleAnalyticsAdminV1alphaSearchChangeHistoryEventsRequestActionEnumUpdated,
                shared.GoogleAnalyticsAdminV1alphaSearchChangeHistoryEventsRequestActionEnumActionTypeUnspecified,
                shared.GoogleAnalyticsAdminV1alphaSearchChangeHistoryEventsRequestActionEnumUpdated,
            },
            ActorEmail: []string{
                "optio",
                "totam",
                "beatae",
                "commodi",
            },
            EarliestChangeTime: sdk.String("molestiae"),
            LatestChangeTime: sdk.String("modi"),
            PageSize: sdk.Int(186332),
            PageToken: sdk.String("impedit"),
            Property: sdk.String("cum"),
            ResourceType: []shared.GoogleAnalyticsAdminV1alphaSearchChangeHistoryEventsRequestResourceTypeEnum{
                shared.GoogleAnalyticsAdminV1alphaSearchChangeHistoryEventsRequestResourceTypeEnumGoogleAdsLink,
                shared.GoogleAnalyticsAdminV1alphaSearchChangeHistoryEventsRequestResourceTypeEnumDisplayVideo360AdvertiserLink,
            },
        },
        AccessToken: sdk.String("aspernatur"),
        Account: "perferendis",
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("natus"),
        Fields: sdk.String("sed"),
        Key: sdk.String("iste"),
        OauthToken: sdk.String("dolor"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("natus"),
        UploadType: sdk.String("laboriosam"),
        UploadProtocol: sdk.String("hic"),
    }, operations.AnalyticsadminAccountsSearchChangeHistoryEventsSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleAnalyticsAdminV1alphaSearchChangeHistoryEventsResponse != nil {
        // handle response
    }
}
```
