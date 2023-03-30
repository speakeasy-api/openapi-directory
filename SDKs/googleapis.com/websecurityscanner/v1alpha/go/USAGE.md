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
            },
            BlacklistPatterns: []string{
                "excepturi",
                "nisi",
            },
            DisplayName: "recusandae",
            LatestRun: &shared.ScanRun{
                EndTime: "temporibus",
                ExecutionState: "EXECUTION_STATE_UNSPECIFIED",
                HasVulnerabilities: false,
                Name: "quis",
                ProgressPercent: 87129,
                ResultState: "ERROR",
                StartTime: "perferendis",
                UrlsCrawledCount: "ipsam",
                UrlsTestedCount: "repellendus",
            },
            MaxQPS: 957156,
            Name: "quo",
            Schedule: &shared.Schedule{
                IntervalDurationDays: 140350,
                ScheduleTime: "at",
            },
            StartingUrls: []string{
                "maiores",
                "molestiae",
                "quod",
                "quod",
            },
            TargetPlatforms: []shared.ScanConfigTargetPlatformsEnum{
                "COMPUTE",
                "CLOUD_RUN",
            },
            UserAgent: "CHROME_ANDROID",
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