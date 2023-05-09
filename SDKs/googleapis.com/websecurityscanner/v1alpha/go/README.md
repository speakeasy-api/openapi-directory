# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/websecurityscanner/v1alpha/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
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
                    LoginURL: sdk.String("provident"),
                    Password: sdk.String("distinctio"),
                    Username: sdk.String("Rosalinda_Mitchell84"),
                },
                GoogleAccount: &shared.GoogleAccount{
                    Password: sdk.String("vel"),
                    Username: sdk.String("Linda.Oberbrunner"),
                },
            },
            BlacklistPatterns: []string{
                "debitis",
                "ipsa",
            },
            DisplayName: sdk.String("delectus"),
            LatestRun: &shared.ScanRun{
                EndTime: sdk.String("tempora"),
                ExecutionState: shared.ScanRunExecutionStateEnumQueued.ToPointer(),
                HasVulnerabilities: sdk.Bool(false),
                Name: sdk.String("Alexandra Schulist"),
                ProgressPercent: sdk.Int(568045),
                ResultState: shared.ScanRunResultStateEnumSuccess.ToPointer(),
                StartTime: sdk.String("recusandae"),
                UrlsCrawledCount: sdk.String("temporibus"),
                UrlsTestedCount: sdk.String("ab"),
            },
            MaxQPS: sdk.Int(337396),
            Name: sdk.String("Iris Aufderhar"),
            Schedule: &shared.Schedule{
                IntervalDurationDays: sdk.Int(957156),
                ScheduleTime: sdk.String("quo"),
            },
            StartingUrls: []string{
                "at",
            },
            TargetPlatforms: []shared.ScanConfigTargetPlatformsEnum{
                shared.ScanConfigTargetPlatformsEnumCloudFunctions,
                shared.ScanConfigTargetPlatformsEnumCompute,
                shared.ScanConfigTargetPlatformsEnumCloudRun,
                shared.ScanConfigTargetPlatformsEnumCloudFunctions,
            },
            UserAgent: shared.ScanConfigUserAgentEnumChromeLinux.ToPointer(),
        },
        AccessToken: sdk.String("totam"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("dolorum"),
        Fields: sdk.String("dicta"),
        Key: sdk.String("nam"),
        OauthToken: sdk.String("officia"),
        Parent: "occaecati",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("fugit"),
        UploadType: sdk.String("deleniti"),
        UploadProtocol: sdk.String("hic"),
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
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Projects](docs/projects/README.md)

* [WebsecurityscannerProjectsScanConfigsCreate](docs/projects/README.md#websecurityscannerprojectsscanconfigscreate) - Creates a new ScanConfig.
* [WebsecurityscannerProjectsScanConfigsDelete](docs/projects/README.md#websecurityscannerprojectsscanconfigsdelete) - Deletes an existing ScanConfig and its child resources.
* [WebsecurityscannerProjectsScanConfigsList](docs/projects/README.md#websecurityscannerprojectsscanconfigslist) - Lists ScanConfigs under a given project.
* [WebsecurityscannerProjectsScanConfigsPatch](docs/projects/README.md#websecurityscannerprojectsscanconfigspatch) - Updates a ScanConfig. This method support partial update of a ScanConfig.
* [WebsecurityscannerProjectsScanConfigsScanRunsCrawledUrlsList](docs/projects/README.md#websecurityscannerprojectsscanconfigsscanrunscrawledurlslist) - List CrawledUrls under a given ScanRun.
* [WebsecurityscannerProjectsScanConfigsScanRunsFindingTypeStatsList](docs/projects/README.md#websecurityscannerprojectsscanconfigsscanrunsfindingtypestatslist) - List all FindingTypeStats under a given ScanRun.
* [WebsecurityscannerProjectsScanConfigsScanRunsFindingsGet](docs/projects/README.md#websecurityscannerprojectsscanconfigsscanrunsfindingsget) - Gets a Finding.
* [WebsecurityscannerProjectsScanConfigsScanRunsFindingsList](docs/projects/README.md#websecurityscannerprojectsscanconfigsscanrunsfindingslist) - List Findings under a given ScanRun.
* [WebsecurityscannerProjectsScanConfigsScanRunsList](docs/projects/README.md#websecurityscannerprojectsscanconfigsscanrunslist) - Lists ScanRuns under a given ScanConfig, in descending order of ScanRun stop time.
* [WebsecurityscannerProjectsScanConfigsScanRunsStop](docs/projects/README.md#websecurityscannerprojectsscanconfigsscanrunsstop) - Stops a ScanRun. The stopped ScanRun is returned.
* [WebsecurityscannerProjectsScanConfigsStart](docs/projects/README.md#websecurityscannerprojectsscanconfigsstart) - Start a ScanRun according to the given ScanConfig.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
