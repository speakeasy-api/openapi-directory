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
            Parent: "fuga",
        },
        QueryParams: operations.CloudschedulerProjectsLocationsJobsCreateQueryParams{
            DollarXgafv: "1",
            AccessToken: "minima",
            Alt: "media",
            Callback: "omnis",
            Fields: "et",
            Key: "tempora",
            OauthToken: "aliquam",
            PrettyPrint: true,
            QuotaUser: "odio",
            UploadType: "minima",
            UploadProtocol: "maxime",
        },
        Request: &shared.Job{
            AppEngineHTTPTarget: &shared.AppEngineHTTPTarget{
                AppEngineRouting: &shared.AppEngineRouting{
                    Host: "eum",
                    Instance: "et",
                    Service: "provident",
                    Version: "totam",
                },
                Body: "dolorum",
                Headers: map[string]string{
                    "voluptatem": "velit",
                },
                HTTPMethod: "OPTIONS",
                RelativeURI: "repudiandae",
            },
            AttemptDeadline: "tenetur",
            Description: "itaque",
            HTTPTarget: &shared.HTTPTarget{
                Body: "nam",
                Headers: map[string]string{
                    "illum": "est",
                    "officia": "est",
                },
                HTTPMethod: "HEAD",
                OauthToken: &shared.OAuthToken{
                    Scope: "cumque",
                    ServiceAccountEmail: "et",
                },
                OidcToken: &shared.OidcToken{
                    Audience: "ut",
                    ServiceAccountEmail: "ut",
                },
                URI: "laboriosam",
            },
            LastAttemptTime: "cumque",
            Name: "quo",
            PubsubTarget: &shared.PubsubTarget{
                Attributes: map[string]string{
                    "animi": "repellendus",
                },
                Data: "quos",
                TopicName: "animi",
            },
            RetryConfig: &shared.RetryConfig{
                MaxBackoffDuration: "autem",
                MaxDoublings: 7633145660682776125,
                MaxRetryDuration: "laboriosam",
                MinBackoffDuration: "omnis",
                RetryCount: 8843799916100303719,
            },
            Schedule: "error",
            ScheduleTime: "minus",
            State: "UPDATE_FAILED",
            Status: &shared.Status{
                Code: 5976770832042142405,
                Details: []map[string]interface{}{
                    map[string]interface{}{
                        "aut": "officiis",
                        "perspiciatis": "omnis",
                    },
                    map[string]interface{}{
                        "soluta": "et",
                        "amet": "rerum",
                    },
                    map[string]interface{}{
                        "repellendus": "saepe",
                        "omnis": "qui",
                        "eaque": "recusandae",
                    },
                },
                Message: "optio",
            },
            TimeZone: "dolores",
            UserUpdateTime: "sunt",
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