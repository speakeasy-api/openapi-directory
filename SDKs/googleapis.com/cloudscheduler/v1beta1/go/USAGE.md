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
            Parent: "sit",
        },
        QueryParams: operations.CloudschedulerProjectsLocationsJobsCreateQueryParams{
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
        Request: &shared.Job{
            AppEngineHTTPTarget: &shared.AppEngineHTTPTarget{
                AppEngineRouting: &shared.AppEngineRouting{
                    Host: "dicta",
                    Instance: "debitis",
                    Service: "voluptatum",
                    Version: "et",
                },
                Body: "ut",
                Headers: map[string]string{
                    "et": "voluptate",
                    "iste": "vitae",
                    "totam": "dolores",
                },
                HTTPMethod: "POST",
                RelativeURI: "debitis",
            },
            AttemptDeadline: "vel",
            Description: "odio",
            HTTPTarget: &shared.HTTPTarget{
                Body: "dolore",
                Headers: map[string]string{
                    "aspernatur": "accusantium",
                    "totam": "commodi",
                },
                HTTPMethod: "PATCH",
                OauthToken: &shared.OAuthToken{
                    Scope: "est",
                    ServiceAccountEmail: "aut",
                },
                OidcToken: &shared.OidcToken{
                    Audience: "odit",
                    ServiceAccountEmail: "non",
                },
                URI: "voluptas",
            },
            LastAttemptTime: "omnis",
            LegacyAppEngineCron: false,
            Name: "illo",
            PubsubTarget: &shared.PubsubTarget{
                Attributes: map[string]string{
                    "officiis": "autem",
                    "consectetur": "nobis",
                    "odio": "qui",
                },
                Data: "recusandae",
                TopicName: "at",
            },
            RetryConfig: &shared.RetryConfig{
                MaxBackoffDuration: "ipsum",
                MaxDoublings: 8902041070398994519,
                MaxRetryDuration: "modi",
                MinBackoffDuration: "sint",
                RetryCount: 5392504858645185670,
            },
            Schedule: "ut",
            ScheduleTime: "exercitationem",
            State: "UPDATE_FAILED",
            Status: &shared.Status{
                Code: 5837486892148644279,
                Details: []map[string]interface{}{
                    map[string]interface{}{
                        "incidunt": "dolor",
                    },
                    map[string]interface{}{
                        "veritatis": "in",
                        "et": "omnis",
                        "ipsum": "ex",
                    },
                    map[string]interface{}{
                        "placeat": "vel",
                        "rerum": "mollitia",
                        "voluptas": "quam",
                    },
                },
                Message: "reprehenderit",
            },
            TimeZone: "qui",
            UserUpdateTime: "qui",
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