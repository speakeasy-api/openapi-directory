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

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.WebsecurityscannerProjectsScanConfigsCreateRequest{
        DollarXgafv: "2",
        ScanConfig: &shared.ScanConfig{
            Authentication: &shared.Authentication{
                CustomAccount: &shared.CustomAccount{
                    LoginURL: "provident",
                    Password: "distinctio",
                    Username: "Rosalinda_Mitchell84",
                },
                GoogleAccount: &shared.GoogleAccount{
                    Password: "vel",
                    Username: "Linda.Oberbrunner",
                },
            },
            BlacklistPatterns: []string{
                "debitis",
                "ipsa",
            },
            DisplayName: "delectus",
            LatestRun: &shared.ScanRun{
                EndTime: "tempora",
                ExecutionState: "QUEUED",
                HasVulnerabilities: false,
                Name: "molestiae",
                ProgressPercent: 791725,
                ResultState: "KILLED",
                StartTime: "voluptatum",
                UrlsCrawledCount: "iusto",
                UrlsTestedCount: "excepturi",
            },
            MaxQPS: 392785,
            Name: "recusandae",
            Schedule: &shared.Schedule{
                IntervalDurationDays: 836079,
                ScheduleTime: "ab",
            },
            StartingUrls: []string{
                "veritatis",
                "deserunt",
            },
            TargetPlatforms: []shared.ScanConfigTargetPlatformsEnum{
                "APP_ENGINE",
            },
            UserAgent: "SAFARI_IPHONE",
        },
        AccessToken: "sapiente",
        Alt: "proto",
        Callback: "odit",
        Fields: "at",
        Key: "at",
        OauthToken: "maiores",
        Parent: "molestiae",
        PrettyPrint: false,
        QuotaUser: "quod",
        UploadType: "quod",
        UploadProtocol: "esse",
    }

    ctx := context.Background()
    res, err := s.Projects.WebsecurityscannerProjectsScanConfigsCreate(ctx, req, operations.WebsecurityscannerProjectsScanConfigsCreateSecurity{
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


### Projects

* `WebsecurityscannerProjectsScanConfigsCreate` - Creates a new ScanConfig.
* `WebsecurityscannerProjectsScanConfigsDelete` - Deletes an existing ScanConfig and its child resources.
* `WebsecurityscannerProjectsScanConfigsList` - Lists ScanConfigs under a given project.
* `WebsecurityscannerProjectsScanConfigsPatch` - Updates a ScanConfig. This method support partial update of a ScanConfig.
* `WebsecurityscannerProjectsScanConfigsScanRunsCrawledUrlsList` - List CrawledUrls under a given ScanRun.
* `WebsecurityscannerProjectsScanConfigsScanRunsFindingTypeStatsList` - List all FindingTypeStats under a given ScanRun.
* `WebsecurityscannerProjectsScanConfigsScanRunsFindingsGet` - Gets a Finding.
* `WebsecurityscannerProjectsScanConfigsScanRunsFindingsList` - List Findings under a given ScanRun.
* `WebsecurityscannerProjectsScanConfigsScanRunsList` - Lists ScanRuns under a given ScanConfig, in descending order of ScanRun stop time.
* `WebsecurityscannerProjectsScanConfigsScanRunsStop` - Stops a ScanRun. The stopped ScanRun is returned.
* `WebsecurityscannerProjectsScanConfigsStart` - Start a ScanRun according to the given ScanConfig.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
