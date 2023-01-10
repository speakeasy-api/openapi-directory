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
            Parent: "perspiciatis",
        },
        QueryParams: operations.CloudschedulerProjectsLocationsJobsCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "aut",
            Alt: "proto",
            Callback: "autem",
            Fields: "id",
            Key: "praesentium",
            OauthToken: "voluptate",
            PrettyPrint: false,
            QuotaUser: "iure",
            UploadType: "quasi",
            UploadProtocol: "ut",
        },
        Request: &shared.Job{
            AppEngineHTTPTarget: &shared.AppEngineHTTPTarget{
                AppEngineRouting: &shared.AppEngineRouting{
                    Host: "culpa",
                    Instance: "et",
                    Service: "laudantium",
                    Version: "optio",
                },
                Body: "eos",
                Headers: map[string]string{
                    "vitae": "debitis",
                },
                HTTPMethod: "PATCH",
                RelativeURI: "dicta",
            },
            AttemptDeadline: "esse",
            Description: "saepe",
            HTTPTarget: &shared.HTTPTarget{
                Body: "deserunt",
                Headers: map[string]string{
                    "nulla": "iure",
                    "perferendis": "quaerat",
                    "quos": "atque",
                },
                HTTPMethod: "HEAD",
                OauthToken: &shared.OAuthToken{
                    Scope: "id",
                    ServiceAccountEmail: "quia",
                },
                OidcToken: &shared.OidcToken{
                    Audience: "molestiae",
                    ServiceAccountEmail: "et",
                },
                URI: "ab",
            },
            LastAttemptTime: "enim",
            LegacyAppEngineCron: false,
            Name: "et",
            PubsubTarget: &shared.PubsubTarget{
                Attributes: map[string]string{
                    "dolore": "voluptates",
                    "ea": "vel",
                },
                Data: "rerum",
                TopicName: "consequatur",
            },
            RetryConfig: &shared.RetryConfig{
                MaxBackoffDuration: "dolores",
                MaxDoublings: 5722449237938539973,
                MaxRetryDuration: "possimus",
                MinBackoffDuration: "placeat",
                RetryCount: 8677531646393043170,
            },
            Schedule: "non",
            ScheduleTime: "et",
            State: "STATE_UNSPECIFIED",
            Status: &shared.Status{
                Code: 1253198214448589061,
                Details: []map[string]interface{}{
                    map[string]interface{}{
                        "in": "sint",
                    },
                },
                Message: "in",
            },
            TimeZone: "soluta",
            UserUpdateTime: "ab",
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