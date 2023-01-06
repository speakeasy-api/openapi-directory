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
            Parent: "ratione",
        },
        QueryParams: operations.WebsecurityscannerProjectsScanConfigsCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "harum",
            Alt: "media",
            Callback: "voluptatem",
            Fields: "distinctio",
            Key: "quia",
            OauthToken: "dolor",
            PrettyPrint: false,
            QuotaUser: "libero",
            UploadType: "cumque",
            UploadProtocol: "qui",
        },
        Request: &shared.ScanConfig{
            Authentication: &shared.Authentication{
                CustomAccount: &shared.CustomAccount{
                    LoginURL: "perspiciatis",
                    Password: "ducimus",
                    Username: "fugit",
                },
                GoogleAccount: &shared.GoogleAccount{
                    Password: "accusantium",
                    Username: "nihil",
                },
            },
            BlacklistPatterns: []string{
                "id",
            },
            DisplayName: "eveniet",
            LatestRun: &shared.ScanRun{
                EndTime: "molestias",
                ExecutionState: "FINISHED",
                HasVulnerabilities: true,
                Name: "saepe",
                ProgressPercent: 8706989857372772240,
                ResultState: "SUCCESS",
                StartTime: "earum",
                UrlsCrawledCount: "neque",
                UrlsTestedCount: "est",
            },
            MaxQPS: 8873741180605172723,
            Name: "praesentium",
            Schedule: &shared.Schedule{
                IntervalDurationDays: 3800582984447144673,
                ScheduleTime: "cum",
            },
            StartingUrls: []string{
                "praesentium",
                "molestias",
            },
            TargetPlatforms: []shared.ScanConfigTargetPlatformsEnum{
                "APP_ENGINE",
                "COMPUTE",
                "CLOUD_RUN",
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