# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get openapi
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import (
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
            Parent: "sit",
        },
        QueryParams: operations.WebsecurityscannerProjectsScanConfigsCreateQueryParams{
            DollarXgafv: "1",
            AccessToken: "culpa",
            Alt: "media",
            Callback: "consequuntur",
            Fields: "dolor",
            Key: "expedita",
            OauthToken: "voluptas",
            PrettyPrint: true,
            QuotaUser: "et",
            UploadType: "nihil",
            UploadProtocol: "rerum",
        },
        Request: &shared.ScanConfig{
            Authentication: &shared.Authentication{
                CustomAccount: &shared.CustomAccount{
                    LoginURL: "dicta",
                    Password: "debitis",
                    Username: "voluptatum",
                },
                GoogleAccount: &shared.GoogleAccount{
                    Password: "et",
                    Username: "ut",
                },
                IapCredential: &shared.IapCredential{
                    IapTestServiceAccountInfo: &shared.IapTestServiceAccountInfo{
                        TargetAudienceClientID: "dolorem",
                    },
                },
            },
            BlacklistPatterns: []string{
                "voluptate",
                "iste",
            },
            DisplayName: "vitae",
            ExportToSecurityCommandCenter: "DISABLED",
            IgnoreHTTPStatusErrors: true,
            LatestRun: &shared.ScanRun{
                EndTime: "illum",
                ErrorTrace: &shared.ScanRunErrorTrace{
                    Code: "SCAN_CONFIG_ISSUE",
                    MostCommonHTTPErrorCode: 3706853784096366226,
                    ScanConfigError: &shared.ScanConfigError{
                        Code: "CANNOT_USE_GOOGLE_COM_ACCOUNT",
                        FieldName: "dolore",
                    },
                },
                ExecutionState: "EXECUTION_STATE_UNSPECIFIED",
                HasVulnerabilities: true,
                Name: "accusantium",
                ProgressPercent: 1395437218309923052,
                ResultState: "RESULT_STATE_UNSPECIFIED",
                StartTime: "quis",
                UrlsCrawledCount: "est",
                UrlsTestedCount: "aut",
                WarningTraces: []shared.ScanRunWarningTrace{
                    shared.ScanRunWarningTrace{
                        Code: "NO_STARTING_URL_FOUND_FOR_MANAGED_SCAN",
                    },
                    shared.ScanRunWarningTrace{
                        Code: "CODE_UNSPECIFIED",
                    },
                },
            },
            ManagedScan: true,
            MaxQPS: 1059542851699319360,
            Name: "illo",
            RiskLevel: "LOW",
            Schedule: &shared.Schedule{
                IntervalDurationDays: 7845762441295307478,
                ScheduleTime: "autem",
            },
            StartingUrls: []string{
                "nobis",
            },
            StaticIPScan: false,
            TargetPlatforms: []shared.ScanConfigTargetPlatformsEnum{
                "TARGET_PLATFORM_UNSPECIFIED",
            },
            UserAgent: "USER_AGENT_UNSPECIFIED",
        },
    }
    
    res, err := s.Projects.WebsecurityscannerProjectsScanConfigsCreate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.ScanConfig != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### projects

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
