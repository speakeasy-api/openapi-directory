# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/websecurityscanner/v1/go
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
                IapCredential: &shared.IapCredential{
                    IapTestServiceAccountInfo: &shared.IapTestServiceAccountInfo{
                        TargetAudienceClientID: "magnam",
                    },
                },
            },
            BlacklistPatterns: []string{
                "ipsa",
                "delectus",
                "tempora",
                "suscipit",
            },
            DisplayName: "molestiae",
            ExportToSecurityCommandCenter: "DISABLED",
            IgnoreHTTPStatusErrors: false,
            ManagedScan: false,
            MaxQPS: 812169,
            Name: "voluptatum",
            RiskLevel: "NORMAL",
            Schedule: &shared.Schedule{
                IntervalDurationDays: 568045,
                ScheduleTime: "nisi",
            },
            StartingUrls: []string{
                "temporibus",
                "ab",
                "quis",
                "veritatis",
            },
            StaticIPScan: false,
            UserAgent: "CHROME_ANDROID",
        },
        AccessToken: "perferendis",
        Alt: "media",
        Callback: "repellendus",
        Fields: "sapiente",
        Key: "quo",
        OauthToken: "odit",
        Parent: "at",
        PrettyPrint: false,
        QuotaUser: "at",
        UploadType: "maiores",
        UploadProtocol: "molestiae",
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
