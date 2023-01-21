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
            Name: "aut",
            PubsubTarget: &shared.PubsubTarget{
                Attributes: map[string]string{
                    "sed": "officiis",
                },
                Data: "autem",
                TopicName: "consectetur",
            },
            RetryConfig: &shared.RetryConfig{
                MaxBackoffDuration: "nobis",
                MaxDoublings: 4345851588384648695,
                MaxRetryDuration: "qui",
                MinBackoffDuration: "recusandae",
                RetryCount: 7561811714888168464,
            },
            Schedule: "ipsum",
            ScheduleTime: "eveniet",
            State: "UPDATE_FAILED",
            Status: &shared.Status{
                Code: 7338728586234333996,
                Details: []map[string]interface{}{
                    map[string]interface{}{
                        "exercitationem": "aut",
                        "reprehenderit": "tempore",
                        "maiores": "incidunt",
                    },
                },
                Message: "dolor",
            },
            TimeZone: "beatae",
            UserUpdateTime: "veritatis",
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