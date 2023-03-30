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
            Parent: "corrupti",
        },
        QueryParams: operations.WebsecurityscannerProjectsScanConfigsCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "distinctio",
            Alt: "proto",
            Callback: "unde",
            Fields: "nulla",
            Key: "corrupti",
            OauthToken: "illum",
            PrettyPrint: false,
            QuotaUser: "vel",
            UploadType: "error",
            UploadProtocol: "deserunt",
        },
        Request: &shared.ScanConfig{
            Authentication: &shared.Authentication{
                CustomAccount: &shared.CustomAccount{
                    LoginURL: "suscipit",
                    Password: "iure",
                    Username: "Eli96",
                },
                GoogleAccount: &shared.GoogleAccount{
                    Password: "tempora",
                    Username: "Geraldine_Kreiger52",
                },
                IapCredential: &shared.IapCredential{
                    IapTestServiceAccountInfo: &shared.IapTestServiceAccountInfo{
                        TargetAudienceClientID: "iusto",
                    },
                },
            },
            BlacklistPatterns: []string{
                "nisi",
                "recusandae",
                "temporibus",
            },
            DisplayName: "ab",
            ExportToSecurityCommandCenter: "ENABLED",
            IgnoreHTTPStatusErrors: false,
            LatestRun: &shared.ScanRun{
                EndTime: "veritatis",
                ErrorTrace: &shared.ScanRunErrorTrace{
                    Code: "TOO_MANY_REDIRECTS",
                    MostCommonHTTPErrorCode: 20218,
                    ScanConfigError: &shared.ScanConfigError{
                        Code: "CUSTOM_LOGIN_URL_HAS_UNRESERVED_IP_ADDRESS",
                        FieldName: "repellendus",
                    },
                },
                ExecutionState: "FINISHED",
                HasVulnerabilities: false,
                Name: "quo",
                ProgressPercent: 140350,
                ResultState: "KILLED",
                StartTime: "at",
                UrlsCrawledCount: "maiores",
                UrlsTestedCount: "molestiae",
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
            Name: "dicta",
            RiskLevel: "LOW",
            Schedule: &shared.Schedule{
                IntervalDurationDays: 639921,
                ScheduleTime: "occaecati",
            },
            StartingUrls: []string{
                "deleniti",
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