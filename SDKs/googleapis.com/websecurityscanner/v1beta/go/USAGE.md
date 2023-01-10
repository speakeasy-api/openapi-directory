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
            Parent: "aut",
        },
        QueryParams: operations.WebsecurityscannerProjectsScanConfigsCreateQueryParams{
            DollarXgafv: "1",
            AccessToken: "quidem",
            Alt: "media",
            Callback: "provident",
            Fields: "amet",
            Key: "repellendus",
            OauthToken: "dolorem",
            PrettyPrint: false,
            QuotaUser: "amet",
            UploadType: "tempore",
            UploadProtocol: "et",
        },
        Request: &shared.ScanConfig{
            Authentication: &shared.Authentication{
                CustomAccount: &shared.CustomAccount{
                    LoginURL: "consectetur",
                    Password: "dolores",
                    Username: "ut",
                },
                GoogleAccount: &shared.GoogleAccount{
                    Password: "nobis",
                    Username: "eum",
                },
                IapCredential: &shared.IapCredential{
                    IapTestServiceAccountInfo: &shared.IapTestServiceAccountInfo{
                        TargetAudienceClientID: "voluptatem",
                    },
                },
            },
            BlacklistPatterns: []string{
                "et",
                "quidem",
                "incidunt",
            },
            DisplayName: "vel",
            ExportToSecurityCommandCenter: "ENABLED",
            IgnoreHTTPStatusErrors: true,
            LatestRun: &shared.ScanRun{
                EndTime: "voluptatem",
                ErrorTrace: &shared.ScanRunErrorTrace{
                    Code: "SCAN_CONFIG_ISSUE",
                    MostCommonHTTPErrorCode: 8831363343638379985,
                    ScanConfigError: &shared.ScanConfigError{
                        Code: "CUSTOM_LOGIN_URL_MALFORMED",
                        FieldName: "quisquam",
                    },
                },
                ExecutionState: "QUEUED",
                HasVulnerabilities: false,
                Name: "inventore",
                ProgressPercent: 3405258711522167072,
                ResultState: "RESULT_STATE_UNSPECIFIED",
                StartTime: "eos",
                UrlsCrawledCount: "ut",
                UrlsTestedCount: "voluptates",
                WarningTraces: []shared.ScanRunWarningTrace{
                    shared.ScanRunWarningTrace{
                        Code: "TOO_MANY_FUZZ_TASKS",
                    },
                    shared.ScanRunWarningTrace{
                        Code: "INSUFFICIENT_CRAWL_RESULTS",
                    },
                    shared.ScanRunWarningTrace{
                        Code: "TOO_MANY_FUZZ_TASKS",
                    },
                },
            },
            ManagedScan: true,
            MaxQPS: 1770746881013234414,
            Name: "dolorem",
            RiskLevel: "NORMAL",
            Schedule: &shared.Schedule{
                IntervalDurationDays: 5951960727538493913,
                ScheduleTime: "mollitia",
            },
            StartingUrls: []string{
                "voluptas",
                "est",
                "quibusdam",
            },
            StaticIPScan: false,
            TargetPlatforms: []shared.ScanConfigTargetPlatformsEnum{
                "APP_ENGINE",
            },
            UserAgent: "CHROME_LINUX",
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