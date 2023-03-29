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
            Parent: "unde",
        },
        QueryParams: operations.CloudschedulerProjectsLocationsJobsCreateQueryParams{
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
        Request: &shared.Job{
            AppEngineHTTPTarget: &shared.AppEngineHTTPTarget{
                AppEngineRouting: &shared.AppEngineRouting{
                    Host: "eum",
                    Instance: "iusto",
                    Service: "ullam",
                    Version: "saepe",
                },
                Body: "inventore",
                Headers: map[string]string{
                    "enim": "eum",
                    "voluptatum": "autem",
                    "vel": "non",
                    "deleniti": "similique",
                },
                HTTPMethod: "HEAD",
                RelativeURI: "molestiae",
            },
            AttemptDeadline: "quo",
            Description: "quasi",
            HTTPTarget: &shared.HTTPTarget{
                Body: "laboriosam",
                Headers: map[string]string{
                    "est": "voluptatem",
                },
                HTTPMethod: "GET",
                OauthToken: &shared.OAuthToken{
                    Scope: "fugiat",
                    ServiceAccountEmail: "a",
                },
                OidcToken: &shared.OidcToken{
                    Audience: "omnis",
                    ServiceAccountEmail: "eos",
                },
                URI: "https://sarah.org",
            },
            LastAttemptTime: "rem",
            LegacyAppEngineCron: false,
            Name: "quibusdam",
            PubsubTarget: &shared.PubsubTarget{
                Attributes: map[string]string{
                    "praesentium": "occaecati",
                    "dolor": "soluta",
                    "sed": "quisquam",
                    "rerum": "culpa",
                },
                Data: "qui",
                TopicName: "sed",
            },
            RetryConfig: &shared.RetryConfig{
                MaxBackoffDuration: "rerum",
                MaxDoublings: 758616,
                MaxRetryDuration: "occaecati",
                MinBackoffDuration: "odit",
                RetryCount: 414662,
            },
            Schedule: "rem",
            ScheduleTime: "voluptatem",
            State: "STATE_UNSPECIFIED",
            Status: &shared.Status{
                Code: 774234,
                Details: []map[string]interface{}{
                    map[string]interface{}{
                        "numquam": "similique",
                        "dolores": "sit",
                    },
                    map[string]interface{}{
                        "et": "voluptatem",
                        "laborum": "modi",
                    },
                    map[string]interface{}{
                        "iure": "earum",
                        "ut": "soluta",
                        "qui": "ea",
                    },
                },
                Message: "laborum",
            },
            TimeZone: "iusto",
            UserUpdateTime: "ut",
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