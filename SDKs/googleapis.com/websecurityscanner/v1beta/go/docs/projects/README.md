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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        ScanConfig: &shared.ScanConfig{
            Authentication: &shared.Authentication{
                CustomAccount: &shared.CustomAccount{
                    LoginURL: sdk.String("natus"),
                    Password: sdk.String("laboriosam"),
                    Username: sdk.String("Tyra.Turcotte35"),
                },
                GoogleAccount: &shared.GoogleAccount{
                    Password: sdk.String("iste"),
                    Username: sdk.String("Humberto.Turcotte6"),
                },
                IapCredential: &shared.IapCredential{
                    IapTestServiceAccountInfo: &shared.IapTestServiceAccountInfo{
                        TargetAudienceClientID: sdk.String("reiciendis"),
                    },
                },
            },
            BlacklistPatterns: []string{
                "mollitia",
                "laborum",
                "dolores",
            },
            DisplayName: sdk.String("dolorem"),
            ExportToSecurityCommandCenter: shared.ScanConfigExportToSecurityCommandCenterEnumEnabled.ToPointer(),
            IgnoreHTTPStatusErrors: sdk.Bool(false),
            LatestRun: &shared.ScanRun{
                EndTime: sdk.String("explicabo"),
                ErrorTrace: &shared.ScanRunErrorTrace{
                    Code: shared.ScanRunErrorTraceCodeEnumTooManyHTTPErrors.ToPointer(),
                    MostCommonHTTPErrorCode: sdk.Int(315428),
                    ScanConfigError: &shared.ScanConfigError{
                        Code: shared.ScanConfigErrorCodeEnumRequiredField.ToPointer(),
                        FieldName: sdk.String("nemo"),
                    },
                },
                ExecutionState: shared.ScanRunExecutionStateEnumQueued.ToPointer(),
                HasVulnerabilities: sdk.Bool(false),
                Name: sdk.String("Brian Kessler"),
                ProgressPercent: sdk.Int(958950),
                ResultState: shared.ScanRunResultStateEnumResultStateUnspecified.ToPointer(),
                StartTime: sdk.String("mollitia"),
                UrlsCrawledCount: sdk.String("dolorem"),
                UrlsTestedCount: sdk.String("culpa"),
                WarningTraces: []shared.ScanRunWarningTrace{
                    shared.ScanRunWarningTrace{
                        Code: shared.ScanRunWarningTraceCodeEnumNoStartingURLFoundForManagedScan.ToPointer(),
                    },
                },
            },
            ManagedScan: sdk.Bool(false),
            MaxQPS: sdk.Int(653108),
            Name: sdk.String("Francis Jerde"),
            RiskLevel: shared.ScanConfigRiskLevelEnumRiskLevelUnspecified.ToPointer(),
            Schedule: &shared.Schedule{
                IntervalDurationDays: sdk.Int(623510),
                ScheduleTime: sdk.String("quia"),
            },
            StartingUrls: []string{
                "vitae",
                "laborum",
            },
            StaticIPScan: sdk.Bool(false),
            TargetPlatforms: []shared.ScanConfigTargetPlatformsEnum{
                shared.ScanConfigTargetPlatformsEnumAppEngine,
                shared.ScanConfigTargetPlatformsEnumTargetPlatformUnspecified,
                shared.ScanConfigTargetPlatformsEnumCloudRun,
            },
            UserAgent: shared.ScanConfigUserAgentEnumUserAgentUnspecified.ToPointer(),
        },
        AccessToken: sdk.String("tenetur"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("id"),
        Fields: sdk.String("possimus"),
        Key: sdk.String("aut"),
        OauthToken: sdk.String("quasi"),
        Parent: "error",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("temporibus"),
        UploadType: sdk.String("laborum"),
        UploadProtocol: sdk.String("quasi"),
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
        AccessToken: sdk.String("voluptatibus"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("nihil"),
        Fields: sdk.String("praesentium"),
        Key: sdk.String("voluptatibus"),
        Name: "Geneva Klein Jr.",
        OauthToken: sdk.String("reprehenderit"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ut"),
        UploadType: sdk.String("maiores"),
        UploadProtocol: sdk.String("dicta"),
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
        AccessToken: sdk.String("dolore"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("dicta"),
        Fields: sdk.String("harum"),
        Key: sdk.String("enim"),
        OauthToken: sdk.String("accusamus"),
        PageSize: sdk.Int64(414263),
        PageToken: sdk.String("repudiandae"),
        Parent: "quae",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ipsum"),
        UploadType: sdk.String("quidem"),
        UploadProtocol: sdk.String("molestias"),
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
                    LoginURL: sdk.String("pariatur"),
                    Password: sdk.String("modi"),
                    Username: sdk.String("Johanna.Ledner92"),
                },
                GoogleAccount: &shared.GoogleAccount{
                    Password: sdk.String("sint"),
                    Username: sdk.String("Arnoldo31"),
                },
                IapCredential: &shared.IapCredential{
                    IapTestServiceAccountInfo: &shared.IapTestServiceAccountInfo{
                        TargetAudienceClientID: sdk.String("consequatur"),
                    },
                },
            },
            BlacklistPatterns: []string{
                "quibusdam",
                "explicabo",
                "deserunt",
            },
            DisplayName: sdk.String("distinctio"),
            ExportToSecurityCommandCenter: shared.ScanConfigExportToSecurityCommandCenterEnumDisabled.ToPointer(),
            IgnoreHTTPStatusErrors: sdk.Bool(false),
            LatestRun: &shared.ScanRun{
                EndTime: sdk.String("labore"),
                ErrorTrace: &shared.ScanRunErrorTrace{
                    Code: shared.ScanRunErrorTraceCodeEnumScanConfigIssue.ToPointer(),
                    MostCommonHTTPErrorCode: sdk.Int(183191),
                    ScanConfigError: &shared.ScanConfigError{
                        Code: shared.ScanConfigErrorCodeEnumDuplicateScanName.ToPointer(),
                        FieldName: sdk.String("cupiditate"),
                    },
                },
                ExecutionState: shared.ScanRunExecutionStateEnumScanning.ToPointer(),
                HasVulnerabilities: sdk.Bool(false),
                Name: sdk.String("Louise Simonis Sr."),
                ProgressPercent: sdk.Int(677817),
                ResultState: shared.ScanRunResultStateEnumError.ToPointer(),
                StartTime: sdk.String("tempora"),
                UrlsCrawledCount: sdk.String("facilis"),
                UrlsTestedCount: sdk.String("tempore"),
                WarningTraces: []shared.ScanRunWarningTrace{
                    shared.ScanRunWarningTrace{
                        Code: shared.ScanRunWarningTraceCodeEnumNoStartingURLFoundForManagedScan.ToPointer(),
                    },
                    shared.ScanRunWarningTrace{
                        Code: shared.ScanRunWarningTraceCodeEnumTooManyCrawlResults.ToPointer(),
                    },
                },
            },
            ManagedScan: sdk.Bool(false),
            MaxQPS: sdk.Int(248753),
            Name: sdk.String("Sergio Hyatt"),
            RiskLevel: shared.ScanConfigRiskLevelEnumNormal.ToPointer(),
            Schedule: &shared.Schedule{
                IntervalDurationDays: sdk.Int(638921),
                ScheduleTime: sdk.String("dolor"),
            },
            StartingUrls: []string{
                "a",
                "dolorum",
                "in",
                "in",
            },
            StaticIPScan: sdk.Bool(false),
            TargetPlatforms: []shared.ScanConfigTargetPlatformsEnum{
                shared.ScanConfigTargetPlatformsEnumCloudFunctions,
                shared.ScanConfigTargetPlatformsEnumCloudRun,
                shared.ScanConfigTargetPlatformsEnumTargetPlatformUnspecified,
                shared.ScanConfigTargetPlatformsEnumAppEngine,
            },
            UserAgent: shared.ScanConfigUserAgentEnumSafariIphone.ToPointer(),
        },
        AccessToken: sdk.String("facere"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("aliquid"),
        Fields: sdk.String("laborum"),
        Key: sdk.String("accusamus"),
        Name: "Toni Haley",
        OauthToken: sdk.String("quidem"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("provident"),
        UpdateMask: sdk.String("nam"),
        UploadType: sdk.String("id"),
        UploadProtocol: sdk.String("blanditiis"),
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("sapiente"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("deserunt"),
        Fields: sdk.String("nisi"),
        Key: sdk.String("vel"),
        OauthToken: sdk.String("natus"),
        PageSize: sdk.Int64(606393),
        PageToken: sdk.String("molestiae"),
        Parent: "perferendis",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("nihil"),
        UploadType: sdk.String("magnam"),
        UploadProtocol: sdk.String("distinctio"),
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
        AccessToken: sdk.String("labore"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("suscipit"),
        Fields: sdk.String("natus"),
        Key: sdk.String("nobis"),
        OauthToken: sdk.String("eum"),
        Parent: "vero",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("aspernatur"),
        UploadType: sdk.String("architecto"),
        UploadProtocol: sdk.String("magnam"),
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("excepturi"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("provident"),
        Fields: sdk.String("quos"),
        Key: sdk.String("sint"),
        Name: "Angie Wisozk",
        OauthToken: sdk.String("eum"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dolor"),
        UploadType: sdk.String("necessitatibus"),
        UploadProtocol: sdk.String("odit"),
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("quasi"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("doloribus"),
        Fields: sdk.String("debitis"),
        Filter: sdk.String("eius"),
        Key: sdk.String("maxime"),
        OauthToken: sdk.String("deleniti"),
        PageSize: sdk.Int64(703889),
        PageToken: sdk.String("in"),
        Parent: "architecto",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("architecto"),
        UploadType: sdk.String("repudiandae"),
        UploadProtocol: sdk.String("ullam"),
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
        AccessToken: sdk.String("nihil"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("quibusdam"),
        Fields: sdk.String("sed"),
        Key: sdk.String("saepe"),
        OauthToken: sdk.String("pariatur"),
        PageSize: sdk.Int64(37559),
        PageToken: sdk.String("consequuntur"),
        Parent: "praesentium",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("natus"),
        UploadType: sdk.String("magni"),
        UploadProtocol: sdk.String("sunt"),
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
            "pariatur": "maxime",
            "ea": "excepturi",
            "odit": "ea",
            "accusantium": "ab",
        },
        AccessToken: sdk.String("maiores"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("ipsam"),
        Fields: sdk.String("voluptate"),
        Key: sdk.String("autem"),
        Name: "Gary Streich",
        OauthToken: sdk.String("perferendis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("fugiat"),
        UploadType: sdk.String("amet"),
        UploadProtocol: sdk.String("aut"),
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        RequestBody: map[string]interface{}{
            "hic": "libero",
            "nobis": "dolores",
        },
        AccessToken: sdk.String("quis"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("dignissimos"),
        Fields: sdk.String("eaque"),
        Key: sdk.String("quis"),
        Name: "Ruby Auer",
        OauthToken: sdk.String("quam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dolor"),
        UploadType: sdk.String("vero"),
        UploadProtocol: sdk.String("nostrum"),
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
