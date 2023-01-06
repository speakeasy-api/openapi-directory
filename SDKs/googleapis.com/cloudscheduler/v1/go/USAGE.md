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
            Parent: "est",
        },
        QueryParams: operations.CloudschedulerProjectsLocationsJobsCreateQueryParams{
            DollarXgafv: "1",
            AccessToken: "repellat",
            Alt: "json",
            Callback: "in",
            Fields: "ut",
            Key: "hic",
            OauthToken: "laboriosam",
            PrettyPrint: false,
            QuotaUser: "aperiam",
            UploadType: "veniam",
            UploadProtocol: "in",
        },
        Request: &shared.Job{
            AppEngineHTTPTarget: &shared.AppEngineHTTPTarget{
                AppEngineRouting: &shared.AppEngineRouting{
                    Host: "voluptatem",
                    Instance: "ut",
                    Service: "debitis",
                    Version: "id",
                },
                Body: "vel",
                Headers: map[string]string{
                    "fuga": "velit",
                    "ullam": "iusto",
                    "suscipit": "molestiae",
                },
                HTTPMethod: "HEAD",
                RelativeURI: "ut",
            },
            AttemptDeadline: "id",
            Description: "repellendus",
            HTTPTarget: &shared.HTTPTarget{
                Body: "a",
                Headers: map[string]string{
                    "nesciunt": "similique",
                    "perspiciatis": "nihil",
                    "enim": "quis",
                },
                HTTPMethod: "PUT",
                OauthToken: &shared.OAuthToken{
                    Scope: "voluptates",
                    ServiceAccountEmail: "quia",
                },
                OidcToken: &shared.OidcToken{
                    Audience: "tenetur",
                    ServiceAccountEmail: "minus",
                },
                URI: "et",
            },
            LastAttemptTime: "sequi",
            Name: "ut",
            PubsubTarget: &shared.PubsubTarget{
                Attributes: map[string]string{
                    "ea": "adipisci",
                },
                Data: "sit",
                TopicName: "sunt",
            },
            RetryConfig: &shared.RetryConfig{
                MaxBackoffDuration: "numquam",
                MaxDoublings: 2083709215893123628,
                MaxRetryDuration: "et",
                MinBackoffDuration: "consequatur",
                RetryCount: 8141291568195754812,
            },
            Schedule: "delectus",
            ScheduleTime: "vel",
            State: "UPDATE_FAILED",
            Status: &shared.Status{
                Code: 2325660539912004481,
                Details: []map[string]interface{}{
                    map[string]interface{}{
                        "quis": "dolores",
                    },
                    map[string]interface{}{
                        "quos": "quidem",
                        "reiciendis": "velit",
                        "ut": "cumque",
                    },
                },
                Message: "dolor",
            },
            TimeZone: "magni",
            UserUpdateTime: "dolor",
        },
    }
    
    res, err := s.Projects.CloudschedulerProjectsLocationsJobsCreate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Job != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->