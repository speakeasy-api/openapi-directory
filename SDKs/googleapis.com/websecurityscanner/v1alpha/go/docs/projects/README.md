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
                    LoginURL: sdk.String("totam"),
                    Password: sdk.String("beatae"),
                    Username: sdk.String("Haskell18"),
                },
                GoogleAccount: &shared.GoogleAccount{
                    Password: sdk.String("impedit"),
                    Username: sdk.String("Myra56"),
                },
            },
            BlacklistPatterns: []string{
                "perferendis",
            },
            DisplayName: sdk.String("ad"),
            LatestRun: &shared.ScanRun{
                EndTime: sdk.String("natus"),
                ExecutionState: shared.ScanRunExecutionStateEnumExecutionStateUnspecified.ToPointer(),
                HasVulnerabilities: sdk.Bool(false),
                Name: sdk.String("Curtis Morissette"),
                ProgressPercent: sdk.Int(902599),
                ResultState: shared.ScanRunResultStateEnumError.ToPointer(),
                StartTime: sdk.String("in"),
                UrlsCrawledCount: sdk.String("corporis"),
                UrlsTestedCount: sdk.String("iste"),
            },
            MaxQPS: sdk.Int(437032),
            Name: sdk.String("Dr. Rickey Boyle"),
            Schedule: &shared.Schedule{
                IntervalDurationDays: sdk.Int(653140),
                ScheduleTime: sdk.String("laborum"),
            },
            StartingUrls: []string{
                "dolorem",
            },
            TargetPlatforms: []shared.ScanConfigTargetPlatformsEnum{
                shared.ScanConfigTargetPlatformsEnumTargetPlatformUnspecified,
                shared.ScanConfigTargetPlatformsEnumCloudRun,
            },
            UserAgent: shared.ScanConfigUserAgentEnumChromeLinux.ToPointer(),
        },
        AccessToken: sdk.String("omnis"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("minima"),
        Fields: sdk.String("excepturi"),
        Key: sdk.String("accusantium"),
        OauthToken: sdk.String("iure"),
        Parent: "culpa",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("doloribus"),
        UploadType: sdk.String("sapiente"),
        UploadProtocol: sdk.String("architecto"),
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
        AccessToken: sdk.String("dolorem"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("consequuntur"),
        Fields: sdk.String("repellat"),
        Key: sdk.String("mollitia"),
        Name: "Francis Jerde",
        OauthToken: sdk.String("velit"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("error"),
        UploadType: sdk.String("quia"),
        UploadProtocol: sdk.String("quis"),
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
        AccessToken: sdk.String("laborum"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("enim"),
        Fields: sdk.String("odit"),
        Key: sdk.String("quo"),
        OauthToken: sdk.String("sequi"),
        PageSize: sdk.Int64(949572),
        PageToken: sdk.String("ipsam"),
        Parent: "id",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("possimus"),
        UploadType: sdk.String("aut"),
        UploadProtocol: sdk.String("quasi"),
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
                    LoginURL: sdk.String("temporibus"),
                    Password: sdk.String("laborum"),
                    Username: sdk.String("Austyn_Witting46"),
                },
                GoogleAccount: &shared.GoogleAccount{
                    Password: sdk.String("praesentium"),
                    Username: sdk.String("Whitney.Bednar"),
                },
            },
            BlacklistPatterns: []string{
                "perferendis",
                "doloremque",
                "reprehenderit",
            },
            DisplayName: sdk.String("ut"),
            LatestRun: &shared.ScanRun{
                EndTime: sdk.String("maiores"),
                ExecutionState: shared.ScanRunExecutionStateEnumExecutionStateUnspecified.ToPointer(),
                HasVulnerabilities: sdk.Bool(false),
                Name: sdk.String("Miss Valerie Kshlerin"),
                ProgressPercent: sdk.Int(880476),
                ResultState: shared.ScanRunResultStateEnumSuccess.ToPointer(),
                StartTime: sdk.String("repudiandae"),
                UrlsCrawledCount: sdk.String("quae"),
                UrlsTestedCount: sdk.String("ipsum"),
            },
            MaxQPS: sdk.Int(692472),
            Name: sdk.String("Andy Streich"),
            Schedule: &shared.Schedule{
                IntervalDurationDays: sdk.Int(523248),
                ScheduleTime: sdk.String("voluptates"),
            },
            StartingUrls: []string{
                "repudiandae",
            },
            TargetPlatforms: []shared.ScanConfigTargetPlatformsEnum{
                shared.ScanConfigTargetPlatformsEnumTargetPlatformUnspecified,
                shared.ScanConfigTargetPlatformsEnumCloudFunctions,
                shared.ScanConfigTargetPlatformsEnumAppEngine,
            },
            UserAgent: shared.ScanConfigUserAgentEnumChromeLinux.ToPointer(),
        },
        AccessToken: sdk.String("consequatur"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("quibusdam"),
        Fields: sdk.String("explicabo"),
        Key: sdk.String("deserunt"),
        Name: "Marty Green",
        OauthToken: sdk.String("aliquid"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("cupiditate"),
        UpdateMask: sdk.String("quos"),
        UploadType: sdk.String("perferendis"),
        UploadProtocol: sdk.String("magni"),
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
        AccessToken: sdk.String("ipsam"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("fugit"),
        Fields: sdk.String("dolorum"),
        Key: sdk.String("excepturi"),
        OauthToken: sdk.String("tempora"),
        PageSize: sdk.Int64(703737),
        PageToken: sdk.String("tempore"),
        Parent: "labore",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("delectus"),
        UploadType: sdk.String("eum"),
        UploadProtocol: sdk.String("non"),
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
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("provident"),
        Fields: sdk.String("necessitatibus"),
        Key: sdk.String("sint"),
        OauthToken: sdk.String("officia"),
        Parent: "dolor",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("debitis"),
        UploadType: sdk.String("a"),
        UploadProtocol: sdk.String("dolorum"),
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
        AccessToken: sdk.String("in"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("maiores"),
        Fields: sdk.String("rerum"),
        Key: sdk.String("dicta"),
        Name: "Blanca Schulist",
        OauthToken: sdk.String("laborum"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("accusamus"),
        UploadType: sdk.String("non"),
        UploadProtocol: sdk.String("occaecati"),
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
        AccessToken: sdk.String("accusamus"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("quidem"),
        Fields: sdk.String("provident"),
        Filter: sdk.String("nam"),
        Key: sdk.String("id"),
        OauthToken: sdk.String("blanditiis"),
        PageSize: sdk.Int64(533206),
        PageToken: sdk.String("sapiente"),
        Parent: "amet",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("deserunt"),
        UploadType: sdk.String("nisi"),
        UploadProtocol: sdk.String("vel"),
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
        AccessToken: sdk.String("omnis"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("perferendis"),
        Fields: sdk.String("nihil"),
        Key: sdk.String("magnam"),
        OauthToken: sdk.String("distinctio"),
        PageSize: sdk.Int64(660174),
        PageToken: sdk.String("labore"),
        Parent: "labore",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("suscipit"),
        UploadType: sdk.String("natus"),
        UploadProtocol: sdk.String("nobis"),
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        RequestBody: map[string]interface{}{
            "aspernatur": "architecto",
            "magnam": "et",
            "excepturi": "ullam",
            "provident": "quos",
        },
        AccessToken: sdk.String("sint"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("mollitia"),
        Fields: sdk.String("reiciendis"),
        Key: sdk.String("mollitia"),
        Name: "Natalie Ernser",
        OauthToken: sdk.String("nemo"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quasi"),
        UploadType: sdk.String("iure"),
        UploadProtocol: sdk.String("doloribus"),
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
            "maxime": "deleniti",
            "facilis": "in",
        },
        AccessToken: sdk.String("architecto"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("repudiandae"),
        Fields: sdk.String("ullam"),
        Key: sdk.String("expedita"),
        Name: "Kristie Spencer",
        OauthToken: sdk.String("pariatur"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("accusantium"),
        UploadType: sdk.String("consequuntur"),
        UploadProtocol: sdk.String("praesentium"),
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
