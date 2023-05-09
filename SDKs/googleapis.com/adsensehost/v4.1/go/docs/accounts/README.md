# Accounts

### Available Operations

* [AdsensehostAccountsAdclientsGet](#adsensehostaccountsadclientsget) - Get information about one of the ad clients in the specified publisher's AdSense account.
* [AdsensehostAccountsAdclientsList](#adsensehostaccountsadclientslist) - List all hosted ad clients in the specified hosted account.
* [AdsensehostAccountsAdunitsDelete](#adsensehostaccountsadunitsdelete) - Delete the specified ad unit from the specified publisher AdSense account.
* [AdsensehostAccountsAdunitsGet](#adsensehostaccountsadunitsget) - Get the specified host ad unit in this AdSense account.
* [AdsensehostAccountsAdunitsGetAdCode](#adsensehostaccountsadunitsgetadcode) - Get ad code for the specified ad unit, attaching the specified host custom channels.
* [AdsensehostAccountsAdunitsInsert](#adsensehostaccountsadunitsinsert) - Insert the supplied ad unit into the specified publisher AdSense account.
* [AdsensehostAccountsAdunitsList](#adsensehostaccountsadunitslist) - List all ad units in the specified publisher's AdSense account.
* [AdsensehostAccountsAdunitsPatch](#adsensehostaccountsadunitspatch) - Update the supplied ad unit in the specified publisher AdSense account. This method supports patch semantics.
* [AdsensehostAccountsAdunitsUpdate](#adsensehostaccountsadunitsupdate) - Update the supplied ad unit in the specified publisher AdSense account.
* [AdsensehostAccountsGet](#adsensehostaccountsget) - Get information about the selected associated AdSense account.
* [AdsensehostAccountsList](#adsensehostaccountslist) - List hosted accounts associated with this AdSense account by ad client id.
* [AdsensehostAccountsReportsGenerate](#adsensehostaccountsreportsgenerate) - Generate an AdSense report based on the report request sent in the query parameters. Returns the result as JSON; to retrieve output in CSV format specify "alt=csv" as a query parameter.

## AdsensehostAccountsAdclientsGet

Get information about one of the ad clients in the specified publisher's AdSense account.

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
    res, err := s.Accounts.AdsensehostAccountsAdclientsGet(ctx, operations.AdsensehostAccountsAdclientsGetRequest{
        AccountID: "vel",
        AdClientID: "error",
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("suscipit"),
        Key: sdk.String("iure"),
        OauthToken: sdk.String("magnam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("debitis"),
        UserIP: sdk.String("ipsa"),
    }, operations.AdsensehostAccountsAdclientsGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AdClient != nil {
        // handle response
    }
}
```

## AdsensehostAccountsAdclientsList

List all hosted ad clients in the specified hosted account.

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
    res, err := s.Accounts.AdsensehostAccountsAdclientsList(ctx, operations.AdsensehostAccountsAdclientsListRequest{
        AccountID: "delectus",
        Alt: shared.AltEnumCsv.ToPointer(),
        Fields: sdk.String("suscipit"),
        Key: sdk.String("molestiae"),
        MaxResults: sdk.Int64(791725),
        OauthToken: sdk.String("placeat"),
        PageToken: sdk.String("voluptatum"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("iusto"),
        UserIP: sdk.String("excepturi"),
    }, operations.AdsensehostAccountsAdclientsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AdClients != nil {
        // handle response
    }
}
```

## AdsensehostAccountsAdunitsDelete

Delete the specified ad unit from the specified publisher AdSense account.

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
    res, err := s.Accounts.AdsensehostAccountsAdunitsDelete(ctx, operations.AdsensehostAccountsAdunitsDeleteRequest{
        AccountID: "nisi",
        AdClientID: "recusandae",
        AdUnitID: "temporibus",
        Alt: shared.AltEnumCsv.ToPointer(),
        Fields: sdk.String("quis"),
        Key: sdk.String("veritatis"),
        OauthToken: sdk.String("deserunt"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("perferendis"),
        UserIP: sdk.String("ipsam"),
    }, operations.AdsensehostAccountsAdunitsDeleteSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AdUnit != nil {
        // handle response
    }
}
```

## AdsensehostAccountsAdunitsGet

Get the specified host ad unit in this AdSense account.

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
    res, err := s.Accounts.AdsensehostAccountsAdunitsGet(ctx, operations.AdsensehostAccountsAdunitsGetRequest{
        AccountID: "repellendus",
        AdClientID: "sapiente",
        AdUnitID: "quo",
        Alt: shared.AltEnumCsv.ToPointer(),
        Fields: sdk.String("at"),
        Key: sdk.String("at"),
        OauthToken: sdk.String("maiores"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("molestiae"),
        UserIP: sdk.String("quod"),
    }, operations.AdsensehostAccountsAdunitsGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AdUnit != nil {
        // handle response
    }
}
```

## AdsensehostAccountsAdunitsGetAdCode

Get ad code for the specified ad unit, attaching the specified host custom channels.

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
    res, err := s.Accounts.AdsensehostAccountsAdunitsGetAdCode(ctx, operations.AdsensehostAccountsAdunitsGetAdCodeRequest{
        AccountID: "quod",
        AdClientID: "esse",
        AdUnitID: "totam",
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("dolorum"),
        HostCustomChannelID: []string{
            "nam",
        },
        Key: sdk.String("officia"),
        OauthToken: sdk.String("occaecati"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("fugit"),
        UserIP: sdk.String("deleniti"),
    }, operations.AdsensehostAccountsAdunitsGetAdCodeSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AdCode != nil {
        // handle response
    }
}
```

## AdsensehostAccountsAdunitsInsert

Insert the supplied ad unit into the specified publisher AdSense account.

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
    res, err := s.Accounts.AdsensehostAccountsAdunitsInsert(ctx, operations.AdsensehostAccountsAdunitsInsertRequest{
        AdUnit: &shared.AdUnit{
            Code: sdk.String("hic"),
            ContentAdsSettings: &shared.AdUnitContentAdsSettings{
                BackupOption: &shared.AdUnitContentAdsSettingsBackupOption{
                    Color: sdk.String("optio"),
                    Type: sdk.String("totam"),
                    URL: sdk.String("beatae"),
                },
                Size: sdk.String("commodi"),
                Type: sdk.String("molestiae"),
            },
            CustomStyle: &shared.AdStyle{
                Colors: &shared.AdStyleColors{
                    Background: sdk.String("modi"),
                    Border: sdk.String("qui"),
                    Text: sdk.String("impedit"),
                    Title: sdk.String("Miss"),
                    URL: sdk.String("esse"),
                },
                Corners: sdk.String("ipsum"),
                Font: &shared.AdStyleFont{
                    Family: sdk.String("excepturi"),
                    Size: sdk.String("aspernatur"),
                },
                Kind: sdk.String("perferendis"),
            },
            ID: sdk.String("5929396f-ea75-496e-b10f-aaa2352c5955"),
            Kind: sdk.String("excepturi"),
            MobileContentAdsSettings: &shared.AdUnitMobileContentAdsSettings{
                MarkupLanguage: sdk.String("accusantium"),
                ScriptingLanguage: sdk.String("iure"),
                Size: sdk.String("culpa"),
                Type: sdk.String("doloribus"),
            },
            Name: sdk.String("Juan O'Hara"),
            Status: sdk.String("consequuntur"),
        },
        AccountID: "repellat",
        AdClientID: "mollitia",
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("numquam"),
        Key: sdk.String("commodi"),
        OauthToken: sdk.String("quam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("molestiae"),
        UserIP: sdk.String("velit"),
    }, operations.AdsensehostAccountsAdunitsInsertSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AdUnit != nil {
        // handle response
    }
}
```

## AdsensehostAccountsAdunitsList

List all ad units in the specified publisher's AdSense account.

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
    res, err := s.Accounts.AdsensehostAccountsAdunitsList(ctx, operations.AdsensehostAccountsAdunitsListRequest{
        AccountID: "error",
        AdClientID: "quia",
        Alt: shared.AltEnumCsv.ToPointer(),
        Fields: sdk.String("vitae"),
        IncludeInactive: sdk.Bool(false),
        Key: sdk.String("laborum"),
        MaxResults: sdk.Int64(656330),
        OauthToken: sdk.String("enim"),
        PageToken: sdk.String("odit"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quo"),
        UserIP: sdk.String("sequi"),
    }, operations.AdsensehostAccountsAdunitsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AdUnits != nil {
        // handle response
    }
}
```

## AdsensehostAccountsAdunitsPatch

Update the supplied ad unit in the specified publisher AdSense account. This method supports patch semantics.

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
    res, err := s.Accounts.AdsensehostAccountsAdunitsPatch(ctx, operations.AdsensehostAccountsAdunitsPatchRequest{
        AdUnit: &shared.AdUnit{
            Code: sdk.String("tenetur"),
            ContentAdsSettings: &shared.AdUnitContentAdsSettings{
                BackupOption: &shared.AdUnitContentAdsSettingsBackupOption{
                    Color: sdk.String("ipsam"),
                    Type: sdk.String("id"),
                    URL: sdk.String("possimus"),
                },
                Size: sdk.String("aut"),
                Type: sdk.String("quasi"),
            },
            CustomStyle: &shared.AdStyle{
                Colors: &shared.AdStyleColors{
                    Background: sdk.String("error"),
                    Border: sdk.String("temporibus"),
                    Text: sdk.String("laborum"),
                    Title: sdk.String("Mr."),
                    URL: sdk.String("reiciendis"),
                },
                Corners: sdk.String("voluptatibus"),
                Font: &shared.AdStyleFont{
                    Family: sdk.String("vero"),
                    Size: sdk.String("nihil"),
                },
                Kind: sdk.String("praesentium"),
            },
            ID: sdk.String("f097b007-4f15-4471-b5e6-e13b99d488e1"),
            Kind: sdk.String("repudiandae"),
            MobileContentAdsSettings: &shared.AdUnitMobileContentAdsSettings{
                MarkupLanguage: sdk.String("sint"),
                ScriptingLanguage: sdk.String("veritatis"),
                Size: sdk.String("itaque"),
                Type: sdk.String("incidunt"),
            },
            Name: sdk.String("Elizabeth Orn"),
            Status: sdk.String("deserunt"),
        },
        AccountID: "distinctio",
        AdClientID: "quibusdam",
        AdUnitID: "labore",
        Alt: shared.AltEnumCsv.ToPointer(),
        Fields: sdk.String("qui"),
        Key: sdk.String("aliquid"),
        OauthToken: sdk.String("cupiditate"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quos"),
        UserIP: sdk.String("perferendis"),
    }, operations.AdsensehostAccountsAdunitsPatchSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AdUnit != nil {
        // handle response
    }
}
```

## AdsensehostAccountsAdunitsUpdate

Update the supplied ad unit in the specified publisher AdSense account.

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
    res, err := s.Accounts.AdsensehostAccountsAdunitsUpdate(ctx, operations.AdsensehostAccountsAdunitsUpdateRequest{
        AdUnit: &shared.AdUnit{
            Code: sdk.String("magni"),
            ContentAdsSettings: &shared.AdUnitContentAdsSettings{
                BackupOption: &shared.AdUnitContentAdsSettingsBackupOption{
                    Color: sdk.String("assumenda"),
                    Type: sdk.String("ipsam"),
                    URL: sdk.String("alias"),
                },
                Size: sdk.String("fugit"),
                Type: sdk.String("dolorum"),
            },
            CustomStyle: &shared.AdStyle{
                Colors: &shared.AdStyleColors{
                    Background: sdk.String("excepturi"),
                    Border: sdk.String("tempora"),
                    Text: sdk.String("facilis"),
                    Title: sdk.String("Miss"),
                    URL: sdk.String("labore"),
                },
                Corners: sdk.String("delectus"),
                Font: &shared.AdStyleFont{
                    Family: sdk.String("eum"),
                    Size: sdk.String("non"),
                },
                Kind: sdk.String("eligendi"),
            },
            ID: sdk.String("969e9a3e-fa77-4dfb-94cd-66ae395efb9b"),
            Kind: sdk.String("id"),
            MobileContentAdsSettings: &shared.AdUnitMobileContentAdsSettings{
                MarkupLanguage: sdk.String("blanditiis"),
                ScriptingLanguage: sdk.String("deleniti"),
                Size: sdk.String("sapiente"),
                Type: sdk.String("amet"),
            },
            Name: sdk.String("Tyler Kassulke"),
            Status: sdk.String("molestiae"),
        },
        AccountID: "perferendis",
        AdClientID: "nihil",
        Alt: shared.AltEnumCsv.ToPointer(),
        Fields: sdk.String("distinctio"),
        Key: sdk.String("id"),
        OauthToken: sdk.String("labore"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("labore"),
        UserIP: sdk.String("suscipit"),
    }, operations.AdsensehostAccountsAdunitsUpdateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AdUnit != nil {
        // handle response
    }
}
```

## AdsensehostAccountsGet

Get information about the selected associated AdSense account.

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
    res, err := s.Accounts.AdsensehostAccountsGet(ctx, operations.AdsensehostAccountsGetRequest{
        AccountID: "natus",
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("eum"),
        Key: sdk.String("vero"),
        OauthToken: sdk.String("aspernatur"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("architecto"),
        UserIP: sdk.String("magnam"),
    }, operations.AdsensehostAccountsGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Account != nil {
        // handle response
    }
}
```

## AdsensehostAccountsList

List hosted accounts associated with this AdSense account by ad client id.

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
    res, err := s.Accounts.AdsensehostAccountsList(ctx, operations.AdsensehostAccountsListRequest{
        Alt: shared.AltEnumCsv.ToPointer(),
        Fields: sdk.String("excepturi"),
        FilterAdClientID: []string{
            "provident",
            "quos",
        },
        Key: sdk.String("sint"),
        OauthToken: sdk.String("accusantium"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("mollitia"),
        UserIP: sdk.String("reiciendis"),
    }, operations.AdsensehostAccountsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Accounts != nil {
        // handle response
    }
}
```

## AdsensehostAccountsReportsGenerate

Generate an AdSense report based on the report request sent in the query parameters. Returns the result as JSON; to retrieve output in CSV format specify "alt=csv" as a query parameter.

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
    res, err := s.Accounts.AdsensehostAccountsReportsGenerate(ctx, operations.AdsensehostAccountsReportsGenerateRequest{
        AccountID: "mollitia",
        Alt: shared.AltEnumCsv.ToPointer(),
        Dimension: []string{
            "dolor",
            "necessitatibus",
        },
        EndDate: "odit",
        Fields: sdk.String("nemo"),
        Filter: []string{
            "iure",
        },
        Key: sdk.String("doloribus"),
        Locale: sdk.String("debitis"),
        MaxResults: sdk.Int64(260341),
        Metric: []string{
            "deleniti",
            "facilis",
            "in",
            "architecto",
        },
        OauthToken: sdk.String("architecto"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("repudiandae"),
        Sort: []string{
            "expedita",
            "nihil",
        },
        StartDate: "repellat",
        StartIndex: sdk.Int64(841140),
        UserIP: sdk.String("sed"),
    }, operations.AdsensehostAccountsReportsGenerateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Report != nil {
        // handle response
    }
}
```
