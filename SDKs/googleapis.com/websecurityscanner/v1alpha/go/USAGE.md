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
            },
            BlacklistPatterns: []string{
                "et",
                "voluptate",
                "iste",
            },
            DisplayName: "vitae",
            LatestRun: &shared.ScanRun{
                EndTime: "totam",
                ExecutionState: "EXECUTION_STATE_UNSPECIFIED",
                HasVulnerabilities: false,
                Name: "debitis",
                ProgressPercent: 3706853784096366226,
                ResultState: "RESULT_STATE_UNSPECIFIED",
                StartTime: "dolore",
                UrlsCrawledCount: "id",
                UrlsTestedCount: "aspernatur",
            },
            MaxQPS: 2914295034816259174,
            Name: "totam",
            Schedule: &shared.Schedule{
                IntervalDurationDays: 6745438398739480977,
                ScheduleTime: "quis",
            },
            StartingUrls: []string{
                "aut",
                "odit",
            },
            TargetPlatforms: []shared.ScanConfigTargetPlatformsEnum{
                "CLOUD_FUNCTIONS",
                "COMPUTE",
                "CLOUD_FUNCTIONS",
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