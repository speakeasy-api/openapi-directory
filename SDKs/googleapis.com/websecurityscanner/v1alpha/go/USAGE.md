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
            },
            BlacklistPatterns: []string{
                "similique",
                "reprehenderit",
            },
            DisplayName: "molestiae",
            LatestRun: &shared.ScanRun{
                EndTime: "quo",
                ExecutionState: "EXECUTION_STATE_UNSPECIFIED",
                HasVulnerabilities: false,
                Name: "laboriosam",
                ProgressPercent: 87129,
                ResultState: "ERROR",
                StartTime: "voluptatem",
                UrlsCrawledCount: "consequatur",
                UrlsTestedCount: "fugiat",
            },
            MaxQPS: 957156,
            Name: "omnis",
            Schedule: &shared.Schedule{
                IntervalDurationDays: 140350,
                ScheduleTime: "accusamus",
            },
            StartingUrls: []string{
                "reiciendis",
                "rem",
                "quibusdam",
                "et",
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