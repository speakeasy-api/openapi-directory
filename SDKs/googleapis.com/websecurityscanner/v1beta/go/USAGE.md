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
            LatestRun: &shared.ScanRun{
                EndTime: "placeat",
                ErrorTrace: &shared.ScanRunErrorTrace{
                    Code: "TIMED_OUT_WHILE_SCANNING",
                    MostCommonHTTPErrorCode: 479977,
                    ScanConfigError: &shared.ScanConfigError{
                        Code: "MALFORMED_RESOURCE_NAME",
                        FieldName: "nisi",
                    },
                },
                ExecutionState: "FINISHED",
                HasVulnerabilities: false,
                Name: "temporibus",
                ProgressPercent: 71036,
                ResultState: "SUCCESS",
                StartTime: "veritatis",
                UrlsCrawledCount: "deserunt",
                UrlsTestedCount: "perferendis",
                WarningTraces: []shared.ScanRunWarningTrace{
                    shared.ScanRunWarningTrace{
                        Code: "BLOCKED_BY_IAP",
                    },
                    shared.ScanRunWarningTrace{
                        Code: "NO_STARTING_URL_FOUND_FOR_MANAGED_SCAN",
                    },
                },
            },
            ManagedScan: false,
            MaxQPS: 778157,
            Name: "odit",
            RiskLevel: "LOW",
            Schedule: &shared.Schedule{
                IntervalDurationDays: 870088,
                ScheduleTime: "maiores",
            },
            StartingUrls: []string{
                "quod",
                "quod",
            },
            StaticIPScan: false,
            TargetPlatforms: []shared.ScanConfigTargetPlatformsEnum{
                "COMPUTE",
                "CLOUD_RUN",
            },
            UserAgent: "CHROME_ANDROID",
        },
        AccessToken: "dicta",
        Alt: "proto",
        Callback: "officia",
        Fields: "occaecati",
        Key: "fugit",
        OauthToken: "deleniti",
        Parent: "hic",
        PrettyPrint: false,
        QuotaUser: "optio",
        UploadType: "totam",
        UploadProtocol: "beatae",
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