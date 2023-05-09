# Accounts

### Available Operations

* [AdsenseAccountsAdclientsGetAdCode](#adsenseaccountsadclientsgetadcode) - Get Auto ad code for a given ad client.
* [AdsenseAccountsAdclientsList](#adsenseaccountsadclientslist) - List all ad clients in the specified account.
* [AdsenseAccountsAdunitsCustomchannelsList](#adsenseaccountsadunitscustomchannelslist) - List all custom channels which the specified ad unit belongs to.
* [AdsenseAccountsAdunitsGet](#adsenseaccountsadunitsget) - Gets the specified ad unit in the specified ad client for the specified account.
* [AdsenseAccountsAdunitsGetAdCode](#adsenseaccountsadunitsgetadcode) - Get ad code for the specified ad unit.
* [AdsenseAccountsAdunitsList](#adsenseaccountsadunitslist) - List all ad units in the specified ad client for the specified account.
* [AdsenseAccountsAlertsDelete](#adsenseaccountsalertsdelete) - Dismiss (delete) the specified alert from the specified publisher AdSense account.
* [AdsenseAccountsAlertsList](#adsenseaccountsalertslist) - List the alerts for the specified AdSense account.
* [AdsenseAccountsCustomchannelsAdunitsList](#adsenseaccountscustomchannelsadunitslist) - List all ad units in the specified custom channel.
* [AdsenseAccountsCustomchannelsGet](#adsenseaccountscustomchannelsget) - Get the specified custom channel from the specified ad client for the specified account.
* [AdsenseAccountsCustomchannelsList](#adsenseaccountscustomchannelslist) - List all custom channels in the specified ad client for the specified account.
* [AdsenseAccountsGet](#adsenseaccountsget) - Get information about the selected AdSense account.
* [AdsenseAccountsList](#adsenseaccountslist) - List all accounts available to this AdSense account.
* [AdsenseAccountsPaymentsList](#adsenseaccountspaymentslist) - List the payments for the specified AdSense account.
* [AdsenseAccountsReportsGenerate](#adsenseaccountsreportsgenerate) - Generate an AdSense report based on the report request sent in the query parameters. Returns the result as JSON; to retrieve output in CSV format specify "alt=csv" as a query parameter.
* [AdsenseAccountsReportsSavedGenerate](#adsenseaccountsreportssavedgenerate) - Generate an AdSense report based on the saved report ID sent in the query parameters.
* [AdsenseAccountsReportsSavedList](#adsenseaccountsreportssavedlist) - List all saved reports in the specified AdSense account.
* [AdsenseAccountsSavedadstylesGet](#adsenseaccountssavedadstylesget) - List a specific saved ad style for the specified account.
* [AdsenseAccountsSavedadstylesList](#adsenseaccountssavedadstyleslist) - List all saved ad styles in the specified account.
* [AdsenseAccountsUrlchannelsList](#adsenseaccountsurlchannelslist) - List all URL channels in the specified ad client for the specified account.

## AdsenseAccountsAdclientsGetAdCode

Get Auto ad code for a given ad client.

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
    res, err := s.Accounts.AdsenseAccountsAdclientsGetAdCode(ctx, operations.AdsenseAccountsAdclientsGetAdCodeRequest{
        AccountID: "error",
        AdClientID: "deserunt",
        Alt: shared.AltEnumCsv.ToPointer(),
        Fields: sdk.String("iure"),
        Key: sdk.String("magnam"),
        OauthToken: sdk.String("debitis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ipsa"),
        TagPartner: sdk.String("delectus"),
        UserIP: sdk.String("tempora"),
    }, operations.AdsenseAccountsAdclientsGetAdCodeSecurity{
        Option1: &operations.AdsenseAccountsAdclientsGetAdCodeSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AdCode != nil {
        // handle response
    }
}
```

## AdsenseAccountsAdclientsList

List all ad clients in the specified account.

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
    res, err := s.Accounts.AdsenseAccountsAdclientsList(ctx, operations.AdsenseAccountsAdclientsListRequest{
        AccountID: "suscipit",
        Alt: shared.AltEnumCsv.ToPointer(),
        Fields: sdk.String("minus"),
        Key: sdk.String("placeat"),
        MaxResults: sdk.Int64(528895),
        OauthToken: sdk.String("iusto"),
        PageToken: sdk.String("excepturi"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("nisi"),
        UserIP: sdk.String("recusandae"),
    }, operations.AdsenseAccountsAdclientsListSecurity{
        Option1: &operations.AdsenseAccountsAdclientsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AdClients != nil {
        // handle response
    }
}
```

## AdsenseAccountsAdunitsCustomchannelsList

List all custom channels which the specified ad unit belongs to.

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
    res, err := s.Accounts.AdsenseAccountsAdunitsCustomchannelsList(ctx, operations.AdsenseAccountsAdunitsCustomchannelsListRequest{
        AccountID: "temporibus",
        AdClientID: "ab",
        AdUnitID: "quis",
        Alt: shared.AltEnumCsv.ToPointer(),
        Fields: sdk.String("deserunt"),
        Key: sdk.String("perferendis"),
        MaxResults: sdk.Int64(368241),
        OauthToken: sdk.String("repellendus"),
        PageToken: sdk.String("sapiente"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quo"),
        UserIP: sdk.String("odit"),
    }, operations.AdsenseAccountsAdunitsCustomchannelsListSecurity{
        Option1: &operations.AdsenseAccountsAdunitsCustomchannelsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CustomChannels != nil {
        // handle response
    }
}
```

## AdsenseAccountsAdunitsGet

Gets the specified ad unit in the specified ad client for the specified account.

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
    res, err := s.Accounts.AdsenseAccountsAdunitsGet(ctx, operations.AdsenseAccountsAdunitsGetRequest{
        AccountID: "at",
        AdClientID: "at",
        AdUnitID: "maiores",
        Alt: shared.AltEnumCsv.ToPointer(),
        Fields: sdk.String("quod"),
        Key: sdk.String("quod"),
        OauthToken: sdk.String("esse"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("totam"),
        UserIP: sdk.String("porro"),
    }, operations.AdsenseAccountsAdunitsGetSecurity{
        Option1: &operations.AdsenseAccountsAdunitsGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AdUnit != nil {
        // handle response
    }
}
```

## AdsenseAccountsAdunitsGetAdCode

Get ad code for the specified ad unit.

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
    res, err := s.Accounts.AdsenseAccountsAdunitsGetAdCode(ctx, operations.AdsenseAccountsAdunitsGetAdCodeRequest{
        AccountID: "dolorum",
        AdClientID: "dicta",
        AdUnitID: "nam",
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("occaecati"),
        Key: sdk.String("fugit"),
        OauthToken: sdk.String("deleniti"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("hic"),
        UserIP: sdk.String("optio"),
    }, operations.AdsenseAccountsAdunitsGetAdCodeSecurity{
        Option1: &operations.AdsenseAccountsAdunitsGetAdCodeSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AdCode != nil {
        // handle response
    }
}
```

## AdsenseAccountsAdunitsList

List all ad units in the specified ad client for the specified account.

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
    res, err := s.Accounts.AdsenseAccountsAdunitsList(ctx, operations.AdsenseAccountsAdunitsListRequest{
        AccountID: "totam",
        AdClientID: "beatae",
        Alt: shared.AltEnumCsv.ToPointer(),
        Fields: sdk.String("molestiae"),
        IncludeInactive: sdk.Bool(false),
        Key: sdk.String("modi"),
        MaxResults: sdk.Int64(186332),
        OauthToken: sdk.String("impedit"),
        PageToken: sdk.String("cum"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("esse"),
        UserIP: sdk.String("ipsum"),
    }, operations.AdsenseAccountsAdunitsListSecurity{
        Option1: &operations.AdsenseAccountsAdunitsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AdUnits != nil {
        // handle response
    }
}
```

## AdsenseAccountsAlertsDelete

Dismiss (delete) the specified alert from the specified publisher AdSense account.

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
    res, err := s.Accounts.AdsenseAccountsAlertsDelete(ctx, operations.AdsenseAccountsAlertsDeleteRequest{
        AccountID: "excepturi",
        AlertID: "aspernatur",
        Alt: shared.AltEnumCsv.ToPointer(),
        Fields: sdk.String("ad"),
        Key: sdk.String("natus"),
        OauthToken: sdk.String("sed"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("iste"),
        UserIP: sdk.String("dolor"),
    }, operations.AdsenseAccountsAlertsDeleteSecurity{
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

## AdsenseAccountsAlertsList

List the alerts for the specified AdSense account.

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
    res, err := s.Accounts.AdsenseAccountsAlertsList(ctx, operations.AdsenseAccountsAlertsListRequest{
        AccountID: "natus",
        Alt: shared.AltEnumCsv.ToPointer(),
        Fields: sdk.String("hic"),
        Key: sdk.String("saepe"),
        Locale: sdk.String("fuga"),
        OauthToken: sdk.String("in"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("corporis"),
        UserIP: sdk.String("iste"),
    }, operations.AdsenseAccountsAlertsListSecurity{
        Option1: &operations.AdsenseAccountsAlertsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Alerts != nil {
        // handle response
    }
}
```

## AdsenseAccountsCustomchannelsAdunitsList

List all ad units in the specified custom channel.

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
    res, err := s.Accounts.AdsenseAccountsCustomchannelsAdunitsList(ctx, operations.AdsenseAccountsCustomchannelsAdunitsListRequest{
        AccountID: "iure",
        AdClientID: "saepe",
        Alt: shared.AltEnumJSON.ToPointer(),
        CustomChannelID: "architecto",
        Fields: sdk.String("ipsa"),
        IncludeInactive: sdk.Bool(false),
        Key: sdk.String("reiciendis"),
        MaxResults: sdk.Int64(666767),
        OauthToken: sdk.String("mollitia"),
        PageToken: sdk.String("laborum"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dolores"),
        UserIP: sdk.String("dolorem"),
    }, operations.AdsenseAccountsCustomchannelsAdunitsListSecurity{
        Option1: &operations.AdsenseAccountsCustomchannelsAdunitsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AdUnits != nil {
        // handle response
    }
}
```

## AdsenseAccountsCustomchannelsGet

Get the specified custom channel from the specified ad client for the specified account.

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
    res, err := s.Accounts.AdsenseAccountsCustomchannelsGet(ctx, operations.AdsenseAccountsCustomchannelsGetRequest{
        AccountID: "corporis",
        AdClientID: "explicabo",
        Alt: shared.AltEnumJSON.ToPointer(),
        CustomChannelID: "enim",
        Fields: sdk.String("omnis"),
        Key: sdk.String("nemo"),
        OauthToken: sdk.String("minima"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("excepturi"),
        UserIP: sdk.String("accusantium"),
    }, operations.AdsenseAccountsCustomchannelsGetSecurity{
        Option1: &operations.AdsenseAccountsCustomchannelsGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CustomChannel != nil {
        // handle response
    }
}
```

## AdsenseAccountsCustomchannelsList

List all custom channels in the specified ad client for the specified account.

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
    res, err := s.Accounts.AdsenseAccountsCustomchannelsList(ctx, operations.AdsenseAccountsCustomchannelsListRequest{
        AccountID: "iure",
        AdClientID: "culpa",
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("sapiente"),
        Key: sdk.String("architecto"),
        MaxResults: sdk.Int64(652790),
        OauthToken: sdk.String("dolorem"),
        PageToken: sdk.String("culpa"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("consequuntur"),
        UserIP: sdk.String("repellat"),
    }, operations.AdsenseAccountsCustomchannelsListSecurity{
        Option1: &operations.AdsenseAccountsCustomchannelsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CustomChannels != nil {
        // handle response
    }
}
```

## AdsenseAccountsGet

Get information about the selected AdSense account.

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
    res, err := s.Accounts.AdsenseAccountsGet(ctx, operations.AdsenseAccountsGetRequest{
        AccountID: "mollitia",
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("numquam"),
        Key: sdk.String("commodi"),
        OauthToken: sdk.String("quam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("molestiae"),
        Tree: sdk.Bool(false),
        UserIP: sdk.String("velit"),
    }, operations.AdsenseAccountsGetSecurity{
        Option1: &operations.AdsenseAccountsGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Account != nil {
        // handle response
    }
}
```

## AdsenseAccountsList

List all accounts available to this AdSense account.

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
    res, err := s.Accounts.AdsenseAccountsList(ctx, operations.AdsenseAccountsListRequest{
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("quia"),
        Key: sdk.String("quis"),
        MaxResults: sdk.Int64(110375),
        OauthToken: sdk.String("laborum"),
        PageToken: sdk.String("animi"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("enim"),
        UserIP: sdk.String("odit"),
    }, operations.AdsenseAccountsListSecurity{
        Option1: &operations.AdsenseAccountsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Accounts != nil {
        // handle response
    }
}
```

## AdsenseAccountsPaymentsList

List the payments for the specified AdSense account.

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
    res, err := s.Accounts.AdsenseAccountsPaymentsList(ctx, operations.AdsenseAccountsPaymentsListRequest{
        AccountID: "quo",
        Alt: shared.AltEnumCsv.ToPointer(),
        Fields: sdk.String("tenetur"),
        Key: sdk.String("ipsam"),
        OauthToken: sdk.String("id"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("possimus"),
        UserIP: sdk.String("aut"),
    }, operations.AdsenseAccountsPaymentsListSecurity{
        Option1: &operations.AdsenseAccountsPaymentsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Payments != nil {
        // handle response
    }
}
```

## AdsenseAccountsReportsGenerate

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
    res, err := s.Accounts.AdsenseAccountsReportsGenerate(ctx, operations.AdsenseAccountsReportsGenerateRequest{
        AccountID: "quasi",
        Alt: shared.AltEnumJSON.ToPointer(),
        Currency: sdk.String("temporibus"),
        Dimension: []string{
            "quasi",
            "reiciendis",
            "voluptatibus",
        },
        EndDate: "vero",
        Fields: sdk.String("nihil"),
        Filter: []string{
            "voluptatibus",
            "ipsa",
            "omnis",
        },
        Key: sdk.String("voluptate"),
        Locale: sdk.String("cum"),
        MaxResults: sdk.Int64(19987),
        Metric: []string{
            "reprehenderit",
        },
        OauthToken: sdk.String("ut"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("maiores"),
        Sort: []string{
            "corporis",
        },
        StartDate: "dolore",
        StartIndex: sdk.Int64(480894),
        UseTimezoneReporting: sdk.Bool(false),
        UserIP: sdk.String("dicta"),
    }, operations.AdsenseAccountsReportsGenerateSecurity{
        Option1: &operations.AdsenseAccountsReportsGenerateSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AdsenseReportsGenerateResponse != nil {
        // handle response
    }
}
```

## AdsenseAccountsReportsSavedGenerate

Generate an AdSense report based on the saved report ID sent in the query parameters.

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
    res, err := s.Accounts.AdsenseAccountsReportsSavedGenerate(ctx, operations.AdsenseAccountsReportsSavedGenerateRequest{
        AccountID: "harum",
        Alt: shared.AltEnumCsv.ToPointer(),
        Fields: sdk.String("accusamus"),
        Key: sdk.String("commodi"),
        Locale: sdk.String("repudiandae"),
        MaxResults: sdk.Int64(64147),
        OauthToken: sdk.String("ipsum"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quidem"),
        SavedReportID: "molestias",
        StartIndex: sdk.Int64(566602),
        UserIP: sdk.String("pariatur"),
    }, operations.AdsenseAccountsReportsSavedGenerateSecurity{
        Option1: &operations.AdsenseAccountsReportsSavedGenerateSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AdsenseReportsGenerateResponse != nil {
        // handle response
    }
}
```

## AdsenseAccountsReportsSavedList

List all saved reports in the specified AdSense account.

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
    res, err := s.Accounts.AdsenseAccountsReportsSavedList(ctx, operations.AdsenseAccountsReportsSavedListRequest{
        AccountID: "modi",
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("rem"),
        Key: sdk.String("voluptates"),
        MaxResults: sdk.Int64(93940),
        OauthToken: sdk.String("repudiandae"),
        PageToken: sdk.String("sint"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("veritatis"),
        UserIP: sdk.String("itaque"),
    }, operations.AdsenseAccountsReportsSavedListSecurity{
        Option1: &operations.AdsenseAccountsReportsSavedListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SavedReports != nil {
        // handle response
    }
}
```

## AdsenseAccountsSavedadstylesGet

List a specific saved ad style for the specified account.

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
    res, err := s.Accounts.AdsenseAccountsSavedadstylesGet(ctx, operations.AdsenseAccountsSavedadstylesGetRequest{
        AccountID: "incidunt",
        Alt: shared.AltEnumCsv.ToPointer(),
        Fields: sdk.String("consequatur"),
        Key: sdk.String("est"),
        OauthToken: sdk.String("quibusdam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("explicabo"),
        SavedAdStyleID: "deserunt",
        UserIP: sdk.String("distinctio"),
    }, operations.AdsenseAccountsSavedadstylesGetSecurity{
        Option1: &operations.AdsenseAccountsSavedadstylesGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SavedAdStyle != nil {
        // handle response
    }
}
```

## AdsenseAccountsSavedadstylesList

List all saved ad styles in the specified account.

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
    res, err := s.Accounts.AdsenseAccountsSavedadstylesList(ctx, operations.AdsenseAccountsSavedadstylesListRequest{
        AccountID: "quibusdam",
        Alt: shared.AltEnumCsv.ToPointer(),
        Fields: sdk.String("modi"),
        Key: sdk.String("qui"),
        MaxResults: sdk.Int64(397821),
        OauthToken: sdk.String("cupiditate"),
        PageToken: sdk.String("quos"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("perferendis"),
        UserIP: sdk.String("magni"),
    }, operations.AdsenseAccountsSavedadstylesListSecurity{
        Option1: &operations.AdsenseAccountsSavedadstylesListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SavedAdStyles != nil {
        // handle response
    }
}
```

## AdsenseAccountsUrlchannelsList

List all URL channels in the specified ad client for the specified account.

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
    res, err := s.Accounts.AdsenseAccountsUrlchannelsList(ctx, operations.AdsenseAccountsUrlchannelsListRequest{
        AccountID: "assumenda",
        AdClientID: "ipsam",
        Alt: shared.AltEnumCsv.ToPointer(),
        Fields: sdk.String("fugit"),
        Key: sdk.String("dolorum"),
        MaxResults: sdk.Int64(569618),
        OauthToken: sdk.String("tempora"),
        PageToken: sdk.String("facilis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("tempore"),
        UserIP: sdk.String("labore"),
    }, operations.AdsenseAccountsUrlchannelsListSecurity{
        Option1: &operations.AdsenseAccountsUrlchannelsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.URLChannels != nil {
        // handle response
    }
}
```
