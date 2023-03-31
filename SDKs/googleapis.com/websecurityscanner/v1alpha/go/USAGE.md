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