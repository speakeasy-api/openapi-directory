# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/websecurityscanner/v1beta/go
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
        Security: operations.WebsecurityscannerProjectsScanConfigsCreateSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.WebsecurityscannerProjectsScanConfigsCreatePathParams{
            Parent: "unde",
        },
        QueryParams: operations.WebsecurityscannerProjectsScanConfigsCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "porro",
            Alt: "proto",
            Callback: "id",
            Fields: "vero",
            Key: "perspiciatis",
            OauthToken: "nulla",
            PrettyPrint: false,
            QuotaUser: "nihil",
            UploadType: "fuga",
            UploadProtocol: "facilis",
        },
        Request: &shared.ScanConfig{
            Authentication: &shared.Authentication{
                CustomAccount: &shared.CustomAccount{
                    LoginURL: "eum",
                    Password: "iusto",
                    Username: "Eli96",
                },
                GoogleAccount: &shared.GoogleAccount{
                    Password: "enim",
                    Username: "Gerald_Kreiger52",
                },
                IapCredential: &shared.IapCredential{
                    IapTestServiceAccountInfo: &shared.IapTestServiceAccountInfo{
                        TargetAudienceClientID: "deleniti",
                    },
                },
            },
            BlacklistPatterns: []string{
                "reprehenderit",
                "molestiae",
                "quo",
            },
            DisplayName: "quasi",
            ExportToSecurityCommandCenter: "ENABLED",
            IgnoreHTTPStatusErrors: false,
            LatestRun: &shared.ScanRun{
                EndTime: "dicta",
                ErrorTrace: &shared.ScanRunErrorTrace{
                    Code: "TOO_MANY_REDIRECTS",
                    MostCommonHTTPErrorCode: 20218,
                    ScanConfigError: &shared.ScanConfigError{
                        Code: "CUSTOM_LOGIN_URL_HAS_UNRESERVED_IP_ADDRESS",
                        FieldName: "fugiat",
                    },
                },
                ExecutionState: "FINISHED",
                HasVulnerabilities: false,
                Name: "omnis",
                ProgressPercent: 140350,
                ResultState: "KILLED",
                StartTime: "accusamus",
                UrlsCrawledCount: "reiciendis",
                UrlsTestedCount: "rem",
                WarningTraces: []shared.ScanRunWarningTrace{
                    shared.ScanRunWarningTrace{
                        Code: "BLOCKED_BY_IAP",
                    },
                    shared.ScanRunWarningTrace{
                        Code: "TOO_MANY_CRAWL_RESULTS",
                    },
                    shared.ScanRunWarningTrace{
                        Code: "TOO_MANY_FUZZ_TASKS",
                    },
                    shared.ScanRunWarningTrace{
                        Code: "BLOCKED_BY_IAP",
                    },
                },
            },
            ManagedScan: false,
            MaxQPS: 678880,
            Name: "sed",
            RiskLevel: "LOW",
            Schedule: &shared.Schedule{
                IntervalDurationDays: 639921,
                ScheduleTime: "culpa",
            },
            StartingUrls: []string{
                "sed",
            },
            StaticIPScan: false,
            TargetPlatforms: []shared.ScanConfigTargetPlatformsEnum{
                "CLOUD_RUN",
                "COMPUTE",
                "TARGET_PLATFORM_UNSPECIFIED",
                "COMPUTE",
            },
            UserAgent: "CHROME_LINUX",
        },
    }

    ctx := context.Background()
    res, err := s.Projects.WebsecurityscannerProjectsScanConfigsCreate(ctx, req)
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
## SDK Available Operations


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

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
