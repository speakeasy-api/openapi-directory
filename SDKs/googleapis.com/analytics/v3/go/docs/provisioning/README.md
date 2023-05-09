# Provisioning

### Available Operations

* [AnalyticsProvisioningCreateAccountTicket](#analyticsprovisioningcreateaccountticket) - Creates an account ticket.
* [AnalyticsProvisioningCreateAccountTree](#analyticsprovisioningcreateaccounttree) - Provision account.

## AnalyticsProvisioningCreateAccountTicket

Creates an account ticket.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Provisioning.AnalyticsProvisioningCreateAccountTicket(ctx, operations.AnalyticsProvisioningCreateAccountTicketRequest{
        AccountTicketInput: &shared.AccountTicketInput{
            Account: &shared.AccountInput{
                ChildLink: &shared.AccountChildLink{
                    Href: sdk.String("laudantium"),
                    Type: sdk.String("cumque"),
                },
                Created: types.MustTimeFromString("2022-12-01T15:28:34.899Z"),
                ID: sdk.String("bf407ee4-fcf0-4c42-b78f-15626398a0dc"),
                Kind: sdk.String("ducimus"),
                Name: sdk.String("Sue Fadel"),
                SelfLink: sdk.String("maxime"),
                Starred: sdk.Bool(false),
                Updated: types.MustTimeFromString("2020-11-10T20:37:32.116Z"),
            },
            ID: sdk.String("06c8ca12-d025-4292-b0b8-d5722dd895b8"),
            Kind: sdk.String("facilis"),
            Profile: &shared.ProfileInput{
                AccountID: sdk.String("placeat"),
                BotFilteringEnabled: sdk.Bool(false),
                ChildLink: &shared.ProfileChildLink{
                    Href: sdk.String("reiciendis"),
                    Type: sdk.String("dolores"),
                },
                Currency: sdk.String("dolore"),
                DefaultPage: sdk.String("pariatur"),
                ECommerceTracking: sdk.Bool(false),
                EnhancedECommerceTracking: sdk.Bool(false),
                ExcludeQueryParameters: sdk.String("facilis"),
                ID: sdk.String("95969335-2f74-4533-994d-78de3b6e9389"),
                Name: sdk.String("Derrick Parisian"),
                ParentLink: &shared.ProfileParentLink{
                    Href: sdk.String("in"),
                    Type: sdk.String("delectus"),
                },
                SiteSearchCategoryParameters: sdk.String("commodi"),
                SiteSearchQueryParameters: sdk.String("commodi"),
                Starred: sdk.Bool(false),
                StripSiteSearchCategoryParameters: sdk.Bool(false),
                StripSiteSearchQueryParameters: sdk.Bool(false),
                Timezone: sdk.String("fugit"),
                Type: sdk.String("ullam"),
                WebsiteURL: sdk.String("ullam"),
            },
            RedirectURI: sdk.String("doloremque"),
            Webproperty: &shared.WebpropertyInput{
                AccountID: sdk.String("est"),
                ChildLink: &shared.WebpropertyChildLink{
                    Href: sdk.String("qui"),
                    Type: sdk.String("praesentium"),
                },
                DataRetentionResetOnNewActivity: sdk.Bool(false),
                DataRetentionTTL: sdk.String("adipisci"),
                DefaultProfileID: sdk.String("totam"),
                ID: sdk.String("2ac483af-d231-45bb-a650-164e06f5bf6a"),
                IndustryVertical: sdk.String("repudiandae"),
                Name: sdk.String("Felicia Brakus"),
                ParentLink: &shared.WebpropertyParentLink{
                    Href: sdk.String("praesentium"),
                    Type: sdk.String("facilis"),
                },
                Starred: sdk.Bool(false),
                WebsiteURL: sdk.String("assumenda"),
            },
        },
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("repudiandae"),
        Key: sdk.String("maiores"),
        OauthToken: sdk.String("ipsum"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("commodi"),
        UserIP: sdk.String("vitae"),
    }, operations.AnalyticsProvisioningCreateAccountTicketSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AccountTicket != nil {
        // handle response
    }
}
```

## AnalyticsProvisioningCreateAccountTree

Provision account.

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
    res, err := s.Provisioning.AnalyticsProvisioningCreateAccountTree(ctx, operations.AnalyticsProvisioningCreateAccountTreeRequest{
        AccountTreeRequest: &shared.AccountTreeRequest{
            AccountName: sdk.String("fugit"),
            Kind: sdk.String("nam"),
            ProfileName: sdk.String("ex"),
            Timezone: sdk.String("neque"),
            WebpropertyName: sdk.String("quod"),
            WebsiteURL: sdk.String("eos"),
        },
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("alias"),
        Key: sdk.String("ad"),
        OauthToken: sdk.String("a"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("facere"),
        UserIP: sdk.String("id"),
    }, operations.AnalyticsProvisioningCreateAccountTreeSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AccountTreeResponse != nil {
        // handle response
    }
}
```
