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
            Parent: "nesciunt",
        },
        QueryParams: operations.WebsecurityscannerProjectsScanConfigsCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "rerum",
            Alt: "media",
            Callback: "quo",
            Fields: "et",
            Key: "aut",
            OauthToken: "laboriosam",
            PrettyPrint: true,
            QuotaUser: "voluptatem",
            UploadType: "quia",
            UploadProtocol: "eos",
        },
        Request: &shared.ScanConfig{
            Authentication: &shared.Authentication{
                CustomAccount: &shared.CustomAccount{
                    LoginURL: "dolorem",
                    Password: "quibusdam",
                    Username: "qui",
                },
                GoogleAccount: &shared.GoogleAccount{
                    Password: "enim",
                    Username: "dolores",
                },
            },
            BlacklistPatterns: []string{
                "earum",
            },
            DisplayName: "qui",
            LatestRun: &shared.ScanRun{
                EndTime: "ab",
                ExecutionState: "QUEUED",
                HasVulnerabilities: false,
                Name: "voluptas",
                ProgressPercent: 8073592271542201319,
                ResultState: "RESULT_STATE_UNSPECIFIED",
                StartTime: "voluptatem",
                UrlsCrawledCount: "optio",
                UrlsTestedCount: "reiciendis",
            },
            MaxQPS: 1508960573531668363,
            Name: "inventore",
            Schedule: &shared.Schedule{
                IntervalDurationDays: 1097738351481424118,
                ScheduleTime: "veritatis",
            },
            StartingUrls: []string{
                "quis",
            },
            TargetPlatforms: []shared.ScanConfigTargetPlatformsEnum{
                "COMPUTE",
                "TARGET_PLATFORM_UNSPECIFIED",
                "APP_ENGINE",
            },
            UserAgent: "SAFARI_IPHONE",
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