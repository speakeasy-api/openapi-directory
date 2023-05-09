# Projects

### Available Operations

* [WebsecurityscannerProjectsScanConfigsCreate](#websecurityscannerprojectsscanconfigscreate) - Creates a new ScanConfig.
* [WebsecurityscannerProjectsScanConfigsDelete](#websecurityscannerprojectsscanconfigsdelete) - Deletes an existing ScanConfig and its child resources.
* [WebsecurityscannerProjectsScanConfigsList](#websecurityscannerprojectsscanconfigslist) - Lists ScanConfigs under a given project.
* [WebsecurityscannerProjectsScanConfigsPatch](#websecurityscannerprojectsscanconfigspatch) - Updates a ScanConfig. This method support partial update of a ScanConfig.
* [WebsecurityscannerProjectsScanConfigsScanRunsCrawledUrlsList](#websecurityscannerprojectsscanconfigsscanrunscrawledurlslist) - List CrawledUrls under a given ScanRun.
* [WebsecurityscannerProjectsScanConfigsScanRunsFindingTypeStatsList](#websecurityscannerprojectsscanconfigsscanrunsfindingtypestatslist) - List all FindingTypeStats under a given ScanRun.
* [WebsecurityscannerProjectsScanConfigsScanRunsFindingsGet](#websecurityscannerprojectsscanconfigsscanrunsfindingsget) - Gets a Finding.
* [WebsecurityscannerProjectsScanConfigsScanRunsFindingsList](#websecurityscannerprojectsscanconfigsscanrunsfindingslist) - List Findings under a given ScanRun.
* [WebsecurityscannerProjectsScanConfigsScanRunsList](#websecurityscannerprojectsscanconfigsscanrunslist) - Lists ScanRuns under a given ScanConfig, in descending order of ScanRun stop time.
* [WebsecurityscannerProjectsScanConfigsScanRunsStop](#websecurityscannerprojectsscanconfigsscanrunsstop) - Stops a ScanRun. The stopped ScanRun is returned.
* [WebsecurityscannerProjectsScanConfigsStart](#websecurityscannerprojectsscanconfigsstart) - Start a ScanRun according to the given ScanConfig.

## WebsecurityscannerProjectsScanConfigsCreate

Creates a new ScanConfig.

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
    res, err := s.Projects.WebsecurityscannerProjectsScanConfigsCreate(ctx, operations.WebsecurityscannerProjectsScanConfigsCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        ScanConfig: &shared.ScanConfig{
            Authentication: &shared.Authentication{
                CustomAccount: &shared.CustomAccount{
                    LoginURL: sdk.String("esse"),
                    Password: sdk.String("totam"),
                    Username: sdk.String("Osborne72"),
                },
                GoogleAccount: &shared.GoogleAccount{
                    Password: sdk.String("officia"),
                    Username: sdk.String("Kristina_Conroy"),
                },
                IapCredential: &shared.IapCredential{
                    IapTestServiceAccountInfo: &shared.IapTestServiceAccountInfo{
                        TargetAudienceClientID: sdk.String("optio"),
                    },
                },
            },
            BlacklistPatterns: []string{
                "beatae",
                "commodi",
                "molestiae",
            },
            DisplayName: sdk.String("modi"),
            ExportToSecurityCommandCenter: shared.ScanConfigExportToSecurityCommandCenterEnumExportToSecurityCommandCenterUnspecified.ToPointer(),
            IgnoreHTTPStatusErrors: sdk.Bool(false),
            ManagedScan: sdk.Bool(false),
            MaxQPS: sdk.Int(774234),
            Name: sdk.String("Cory Emmerich"),
            RiskLevel: shared.ScanConfigRiskLevelEnumRiskLevelUnspecified.ToPointer(),
            Schedule: &shared.Schedule{
                IntervalDurationDays: sdk.Int(324141),
                ScheduleTime: sdk.String("natus"),
            },
            StartingUrls: []string{
                "iste",
            },
            StaticIPScan: sdk.Bool(false),
            UserAgent: shared.ScanConfigUserAgentEnumUserAgentUnspecified.ToPointer(),
        },
        AccessToken: sdk.String("natus"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("hic"),
        Fields: sdk.String("saepe"),
        Key: sdk.String("fuga"),
        OauthToken: sdk.String("in"),
        Parent: "corporis",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("iste"),
        UploadType: sdk.String("iure"),
        UploadProtocol: sdk.String("saepe"),
    }, operations.WebsecurityscannerProjectsScanConfigsCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ScanConfig != nil {
        // handle response
    }
}
```

## WebsecurityscannerProjectsScanConfigsDelete

Deletes an existing ScanConfig and its child resources.

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
    res, err := s.Projects.WebsecurityscannerProjectsScanConfigsDelete(ctx, operations.WebsecurityscannerProjectsScanConfigsDeleteRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("architecto"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("reiciendis"),
        Fields: sdk.String("est"),
        Key: sdk.String("mollitia"),
        Name: "Ernest Ebert",
        OauthToken: sdk.String("nobis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("enim"),
        UploadType: sdk.String("omnis"),
        UploadProtocol: sdk.String("nemo"),
    }, operations.WebsecurityscannerProjectsScanConfigsDeleteSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
}
```

## WebsecurityscannerProjectsScanConfigsList

Lists ScanConfigs under a given project.

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
    res, err := s.Projects.WebsecurityscannerProjectsScanConfigsList(ctx, operations.WebsecurityscannerProjectsScanConfigsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("excepturi"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("iure"),
        Fields: sdk.String("culpa"),
        Key: sdk.String("doloribus"),
        OauthToken: sdk.String("sapiente"),
        PageSize: sdk.Int64(102044),
        PageToken: sdk.String("mollitia"),
        Parent: "dolorem",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("culpa"),
        UploadType: sdk.String("consequuntur"),
        UploadProtocol: sdk.String("repellat"),
    }, operations.WebsecurityscannerProjectsScanConfigsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListScanConfigsResponse != nil {
        // handle response
    }
}
```

## WebsecurityscannerProjectsScanConfigsPatch

Updates a ScanConfig. This method support partial update of a ScanConfig.

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
    res, err := s.Projects.WebsecurityscannerProjectsScanConfigsPatch(ctx, operations.WebsecurityscannerProjectsScanConfigsPatchRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        ScanConfig: &shared.ScanConfig{
            Authentication: &shared.Authentication{
                CustomAccount: &shared.CustomAccount{
                    LoginURL: sdk.String("occaecati"),
                    Password: sdk.String("numquam"),
                    Username: sdk.String("Harvey.Konopelski"),
                },
                GoogleAccount: &shared.GoogleAccount{
                    Password: sdk.String("error"),
                    Username: sdk.String("Carmelo67"),
                },
                IapCredential: &shared.IapCredential{
                    IapTestServiceAccountInfo: &shared.IapTestServiceAccountInfo{
                        TargetAudienceClientID: sdk.String("animi"),
                    },
                },
            },
            BlacklistPatterns: []string{
                "odit",
                "quo",
            },
            DisplayName: sdk.String("sequi"),
            ExportToSecurityCommandCenter: shared.ScanConfigExportToSecurityCommandCenterEnumDisabled.ToPointer(),
            IgnoreHTTPStatusErrors: sdk.Bool(false),
            ManagedScan: sdk.Bool(false),
            MaxQPS: sdk.Int(368725),
            Name: sdk.String("Miss Rufus Ankunding"),
            RiskLevel: shared.ScanConfigRiskLevelEnumLow.ToPointer(),
            Schedule: &shared.Schedule{
                IntervalDurationDays: sdk.Int(96098),
                ScheduleTime: sdk.String("reiciendis"),
            },
            StartingUrls: []string{
                "vero",
                "nihil",
                "praesentium",
                "voluptatibus",
            },
            StaticIPScan: sdk.Bool(false),
            UserAgent: shared.ScanConfigUserAgentEnumUserAgentUnspecified.ToPointer(),
        },
        AccessToken: sdk.String("omnis"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("cum"),
        Fields: sdk.String("perferendis"),
        Key: sdk.String("doloremque"),
        Name: "Mrs. April Wuckert",
        OauthToken: sdk.String("iusto"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dicta"),
        UpdateMask: sdk.String("harum"),
        UploadType: sdk.String("enim"),
        UploadProtocol: sdk.String("accusamus"),
    }, operations.WebsecurityscannerProjectsScanConfigsPatchSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ScanConfig != nil {
        // handle response
    }
}
```

## WebsecurityscannerProjectsScanConfigsScanRunsCrawledUrlsList

List CrawledUrls under a given ScanRun.

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
    res, err := s.Projects.WebsecurityscannerProjectsScanConfigsScanRunsCrawledUrlsList(ctx, operations.WebsecurityscannerProjectsScanConfigsScanRunsCrawledUrlsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("repudiandae"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("ipsum"),
        Fields: sdk.String("quidem"),
        Key: sdk.String("molestias"),
        OauthToken: sdk.String("excepturi"),
        PageSize: sdk.Int64(865103),
        PageToken: sdk.String("modi"),
        Parent: "praesentium",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("rem"),
        UploadType: sdk.String("voluptates"),
        UploadProtocol: sdk.String("quasi"),
    }, operations.WebsecurityscannerProjectsScanConfigsScanRunsCrawledUrlsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListCrawledUrlsResponse != nil {
        // handle response
    }
}
```

## WebsecurityscannerProjectsScanConfigsScanRunsFindingTypeStatsList

List all FindingTypeStats under a given ScanRun.

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
    res, err := s.Projects.WebsecurityscannerProjectsScanConfigsScanRunsFindingTypeStatsList(ctx, operations.WebsecurityscannerProjectsScanConfigsScanRunsFindingTypeStatsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("sint"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("itaque"),
        Fields: sdk.String("incidunt"),
        Key: sdk.String("enim"),
        OauthToken: sdk.String("consequatur"),
        Parent: "est",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quibusdam"),
        UploadType: sdk.String("explicabo"),
        UploadProtocol: sdk.String("deserunt"),
    }, operations.WebsecurityscannerProjectsScanConfigsScanRunsFindingTypeStatsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListFindingTypeStatsResponse != nil {
        // handle response
    }
}
```

## WebsecurityscannerProjectsScanConfigsScanRunsFindingsGet

Gets a Finding.

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
    res, err := s.Projects.WebsecurityscannerProjectsScanConfigsScanRunsFindingsGet(ctx, operations.WebsecurityscannerProjectsScanConfigsScanRunsFindingsGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("quibusdam"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("modi"),
        Fields: sdk.String("qui"),
        Key: sdk.String("aliquid"),
        Name: "Isaac Aufderhar",
        OauthToken: sdk.String("ipsam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("alias"),
        UploadType: sdk.String("fugit"),
        UploadProtocol: sdk.String("dolorum"),
    }, operations.WebsecurityscannerProjectsScanConfigsScanRunsFindingsGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Finding != nil {
        // handle response
    }
}
```

## WebsecurityscannerProjectsScanConfigsScanRunsFindingsList

List Findings under a given ScanRun.

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
    res, err := s.Projects.WebsecurityscannerProjectsScanConfigsScanRunsFindingsList(ctx, operations.WebsecurityscannerProjectsScanConfigsScanRunsFindingsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("tempora"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("tempore"),
        Fields: sdk.String("labore"),
        Filter: sdk.String("delectus"),
        Key: sdk.String("eum"),
        OauthToken: sdk.String("non"),
        PageSize: sdk.Int64(756107),
        PageToken: sdk.String("sint"),
        Parent: "aliquid",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("provident"),
        UploadType: sdk.String("necessitatibus"),
        UploadProtocol: sdk.String("sint"),
    }, operations.WebsecurityscannerProjectsScanConfigsScanRunsFindingsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListFindingsResponse != nil {
        // handle response
    }
}
```

## WebsecurityscannerProjectsScanConfigsScanRunsList

Lists ScanRuns under a given ScanConfig, in descending order of ScanRun stop time.

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
    res, err := s.Projects.WebsecurityscannerProjectsScanConfigsScanRunsList(ctx, operations.WebsecurityscannerProjectsScanConfigsScanRunsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("dolor"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("a"),
        Fields: sdk.String("dolorum"),
        Key: sdk.String("in"),
        OauthToken: sdk.String("in"),
        PageSize: sdk.Int64(846409),
        PageToken: sdk.String("maiores"),
        Parent: "rerum",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dicta"),
        UploadType: sdk.String("magnam"),
        UploadProtocol: sdk.String("cumque"),
    }, operations.WebsecurityscannerProjectsScanConfigsScanRunsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListScanRunsResponse != nil {
        // handle response
    }
}
```

## WebsecurityscannerProjectsScanConfigsScanRunsStop

Stops a ScanRun. The stopped ScanRun is returned.

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
    res, err := s.Projects.WebsecurityscannerProjectsScanConfigsScanRunsStop(ctx, operations.WebsecurityscannerProjectsScanConfigsScanRunsStopRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        RequestBody: map[string]interface{}{
            "aliquid": "laborum",
            "accusamus": "non",
        },
        AccessToken: sdk.String("occaecati"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("accusamus"),
        Fields: sdk.String("delectus"),
        Key: sdk.String("quidem"),
        Name: "Marco Olson",
        OauthToken: sdk.String("sapiente"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("amet"),
        UploadType: sdk.String("deserunt"),
        UploadProtocol: sdk.String("nisi"),
    }, operations.WebsecurityscannerProjectsScanConfigsScanRunsStopSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ScanRun != nil {
        // handle response
    }
}
```

## WebsecurityscannerProjectsScanConfigsStart

Start a ScanRun according to the given ScanConfig.

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
    res, err := s.Projects.WebsecurityscannerProjectsScanConfigsStart(ctx, operations.WebsecurityscannerProjectsScanConfigsStartRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        RequestBody: map[string]interface{}{
            "omnis": "molestiae",
            "perferendis": "nihil",
            "magnam": "distinctio",
        },
        AccessToken: sdk.String("id"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("labore"),
        Fields: sdk.String("suscipit"),
        Key: sdk.String("natus"),
        Name: "Duane Thiel II",
        OauthToken: sdk.String("et"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("excepturi"),
        UploadType: sdk.String("ullam"),
        UploadProtocol: sdk.String("provident"),
    }, operations.WebsecurityscannerProjectsScanConfigsStartSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ScanRun != nil {
        // handle response
    }
}
```
