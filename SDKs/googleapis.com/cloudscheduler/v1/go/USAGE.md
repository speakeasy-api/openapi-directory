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

    req := operations.CloudschedulerProjectsLocationsJobsCreateRequest{
        Security: operations.CloudschedulerProjectsLocationsJobsCreateSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.CloudschedulerProjectsLocationsJobsCreatePathParams{
            Parent: "corrupti",
        },
        QueryParams: operations.CloudschedulerProjectsLocationsJobsCreateQueryParams{
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
        Request: &shared.Job{
            AppEngineHTTPTarget: &shared.AppEngineHTTPTarget{
                AppEngineRouting: &shared.AppEngineRouting{
                    Host: "suscipit",
                    Instance: "iure",
                    Service: "magnam",
                    Version: "debitis",
                },
                Body: "ipsa",
                Headers: map[string]string{
                    "tempora": "suscipit",
                    "molestiae": "minus",
                    "placeat": "voluptatum",
                    "iusto": "excepturi",
                },
                HTTPMethod: "HEAD",
                RelativeURI: "recusandae",
            },
            AttemptDeadline: "temporibus",
            Description: "ab",
            HTTPTarget: &shared.HTTPTarget{
                Body: "quis",
                Headers: map[string]string{
                    "deserunt": "perferendis",
                },
                HTTPMethod: "GET",
                OauthToken: &shared.OAuthToken{
                    Scope: "repellendus",
                    ServiceAccountEmail: "sapiente",
                },
                OidcToken: &shared.OidcToken{
                    Audience: "quo",
                    ServiceAccountEmail: "odit",
                },
                URI: "https://trim-wheat.info",
            },
            LastAttemptTime: "quod",
            Name: "quod",
            PubsubTarget: &shared.PubsubTarget{
                Attributes: map[string]string{
                    "totam": "porro",
                    "dolorum": "dicta",
                },
                Data: "nam",
                TopicName: "officia",
            },
            RetryConfig: &shared.RetryConfig{
                MaxBackoffDuration: "occaecati",
                MaxDoublings: 143353,
                MaxRetryDuration: "deleniti",
                MinBackoffDuration: "hic",
                RetryCount: 758616,
            },
            Schedule: "totam",
            ScheduleTime: "beatae",
            State: "PAUSED",
            Status: &shared.Status{
                Code: 473600,
                Details: []map[string]interface{}{
                    map[string]interface{}{
                        "impedit": "cum",
                    },
                    map[string]interface{}{
                        "ipsum": "excepturi",
                        "aspernatur": "perferendis",
                    },
                },
                Message: "ad",
            },
            TimeZone: "natus",
            UserUpdateTime: "sed",
        },
    }

    ctx := context.Background()
    res, err := s.Projects.CloudschedulerProjectsLocationsJobsCreate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Job != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->