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
            Parent: "non",
        },
        QueryParams: operations.WebsecurityscannerProjectsScanConfigsCreateQueryParams{
            DollarXgafv: "1",
            AccessToken: "qui",
            Alt: "media",
            Callback: "molestiae",
            Fields: "dolor",
            Key: "et",
            OauthToken: "voluptatum",
            PrettyPrint: false,
            QuotaUser: "enim",
            UploadType: "commodi",
            UploadProtocol: "placeat",
        },
        Request: &shared.ScanConfig{
            Authentication: &shared.Authentication{
                CustomAccount: &shared.CustomAccount{
                    LoginURL: "enim",
                    Password: "sint",
                    Username: "explicabo",
                },
                GoogleAccount: &shared.GoogleAccount{
                    Password: "dolorem",
                    Username: "et",
                },
                IapCredential: &shared.IapCredential{
                    IapTestServiceAccountInfo: &shared.IapTestServiceAccountInfo{
                        TargetAudienceClientID: "officia",
                    },
                },
            },
            BlacklistPatterns: []string{
                "qui",
                "blanditiis",
                "et",
            },
            DisplayName: "possimus",
            ExportToSecurityCommandCenter: "DISABLED",
            IgnoreHTTPStatusErrors: true,
            LatestRun: &shared.ScanRun{
                EndTime: "ut",
                ErrorTrace: &shared.ScanRunErrorTrace{
                    Code: "CODE_UNSPECIFIED",
                    MostCommonHTTPErrorCode: 5525768098525541651,
                    ScanConfigError: &shared.ScanConfigError{
                        Code: "SCAN_ALREADY_RUNNING",
                        FieldName: "beatae",
                    },
                },
                ExecutionState: "EXECUTION_STATE_UNSPECIFIED",
                HasVulnerabilities: false,
                Name: "qui",
                ProgressPercent: 1048624465529040988,
                ResultState: "KILLED",
                StartTime: "et",
                UrlsCrawledCount: "exercitationem",
                UrlsTestedCount: "omnis",
                WarningTraces: []shared.ScanRunWarningTrace{
                    shared.ScanRunWarningTrace{
                        Code: "TOO_MANY_CRAWL_RESULTS",
                    },
                    shared.ScanRunWarningTrace{
                        Code: "TOO_MANY_FUZZ_TASKS",
                    },
                },
            },
            ManagedScan: true,
            MaxQPS: 6824474744739544969,
            Name: "molestiae",
            RiskLevel: "LOW",
            Schedule: &shared.Schedule{
                IntervalDurationDays: 478584291849094551,
                ScheduleTime: "nesciunt",
            },
            StartingUrls: []string{
                "consequatur",
            },
            StaticIPScan: false,
            TargetPlatforms: []shared.ScanConfigTargetPlatformsEnum{
                "APP_ENGINE",
                "COMPUTE",
            },
            UserAgent: "CHROME_ANDROID",
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