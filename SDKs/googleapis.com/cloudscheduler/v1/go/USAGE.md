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
        DollarXgafv: "2",
        Job: &shared.Job{
            AppEngineHTTPTarget: &shared.AppEngineHTTPTarget{
                AppEngineRouting: &shared.AppEngineRouting{
                    Host: "provident",
                    Instance: "distinctio",
                    Service: "quibusdam",
                    Version: "unde",
                },
                Body: "nulla",
                Headers: map[string]string{
                    "illum": "vel",
                    "error": "deserunt",
                    "suscipit": "iure",
                },
                HTTPMethod: "GET",
                RelativeURI: "debitis",
            },
            AttemptDeadline: "ipsa",
            Description: "delectus",
            HTTPTarget: &shared.HTTPTarget{
                Body: "tempora",
                Headers: map[string]string{
                    "molestiae": "minus",
                    "placeat": "voluptatum",
                },
                HTTPMethod: "HEAD",
                OauthToken: &shared.OAuthToken{
                    Scope: "excepturi",
                    ServiceAccountEmail: "nisi",
                },
                OidcToken: &shared.OidcToken{
                    Audience: "recusandae",
                    ServiceAccountEmail: "temporibus",
                },
                URI: "http://gloomy-blanket.name",
            },
            LastAttemptTime: "perferendis",
            Name: "ipsam",
            PubsubTarget: &shared.PubsubTarget{
                Attributes: map[string]string{
                    "sapiente": "quo",
                    "odit": "at",
                    "at": "maiores",
                    "molestiae": "quod",
                },
                Data: "quod",
                TopicName: "esse",
            },
            RetryConfig: &shared.RetryConfig{
                MaxBackoffDuration: "totam",
                MaxDoublings: 780529,
                MaxRetryDuration: "dolorum",
                MinBackoffDuration: "dicta",
                RetryCount: 720633,
            },
            Schedule: "officia",
            ScheduleTime: "occaecati",
            State: "STATE_UNSPECIFIED",
            Status: &shared.Status{
                Code: 537373,
                Details: []map[string]interface{}{
                    map[string]interface{}{
                        "totam": "beatae",
                        "commodi": "molestiae",
                        "modi": "qui",
                        "impedit": "cum",
                    },
                    map[string]interface{}{
                        "ipsum": "excepturi",
                        "aspernatur": "perferendis",
                    },
                    map[string]interface{}{
                        "natus": "sed",
                        "iste": "dolor",
                    },
                    map[string]interface{}{
                        "laboriosam": "hic",
                        "saepe": "fuga",
                        "in": "corporis",
                    },
                },
                Message: "iste",
            },
            TimeZone: "iure",
            UserUpdateTime: "saepe",
        },
        AccessToken: "quidem",
        Alt: "json",
        Callback: "ipsa",
        Fields: "reiciendis",
        Key: "est",
        OauthToken: "mollitia",
        Parent: "laborum",
        PrettyPrint: false,
        QuotaUser: "dolores",
        UploadType: "dolorem",
        UploadProtocol: "corporis",
    }

    ctx := context.Background()
    res, err := s.Projects.CloudschedulerProjectsLocationsJobsCreate(ctx, req, operations.CloudschedulerProjectsLocationsJobsCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Job != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->