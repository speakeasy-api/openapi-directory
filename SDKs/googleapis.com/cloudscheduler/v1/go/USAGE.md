<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.CloudschedulerProjectsLocationsJobsCreate(ctx, operations.CloudschedulerProjectsLocationsJobsCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        Job: &shared.Job{
            AppEngineHTTPTarget: &shared.AppEngineHTTPTarget{
                AppEngineRouting: &shared.AppEngineRouting{
                    Host: sdk.String("provident"),
                    Instance: sdk.String("distinctio"),
                    Service: sdk.String("quibusdam"),
                    Version: sdk.String("unde"),
                },
                Body: sdk.String("nulla"),
                Headers: map[string]string{
                    "illum": "vel",
                    "error": "deserunt",
                    "suscipit": "iure",
                },
                HTTPMethod: shared.AppEngineHTTPTargetHTTPMethodEnumGet.ToPointer(),
                RelativeURI: sdk.String("debitis"),
            },
            AttemptDeadline: sdk.String("ipsa"),
            Description: sdk.String("delectus"),
            HTTPTarget: &shared.HTTPTarget{
                Body: sdk.String("tempora"),
                Headers: map[string]string{
                    "molestiae": "minus",
                    "placeat": "voluptatum",
                },
                HTTPMethod: shared.HTTPTargetHTTPMethodEnumHead.ToPointer(),
                OauthToken: &shared.OAuthToken{
                    Scope: sdk.String("excepturi"),
                    ServiceAccountEmail: sdk.String("nisi"),
                },
                OidcToken: &shared.OidcToken{
                    Audience: sdk.String("recusandae"),
                    ServiceAccountEmail: sdk.String("temporibus"),
                },
                URI: sdk.String("http://gloomy-blanket.name"),
            },
            LastAttemptTime: sdk.String("perferendis"),
            Name: sdk.String("Estelle Will"),
            PubsubTarget: &shared.PubsubTarget{
                Attributes: map[string]string{
                    "at": "maiores",
                    "molestiae": "quod",
                    "quod": "esse",
                    "totam": "porro",
                },
                Data: sdk.String("dolorum"),
                TopicName: sdk.String("dicta"),
            },
            RetryConfig: &shared.RetryConfig{
                MaxBackoffDuration: sdk.String("nam"),
                MaxDoublings: sdk.Int(639921),
                MaxRetryDuration: sdk.String("occaecati"),
                MinBackoffDuration: sdk.String("fugit"),
                RetryCount: sdk.Int(537373),
            },
            Schedule: sdk.String("hic"),
            ScheduleTime: sdk.String("optio"),
            State: shared.JobStateEnumPaused.ToPointer(),
            Status: &shared.Status{
                Code: sdk.Int(105907),
                Details: []map[string]interface{}{
                    map[string]interface{}{
                        "modi": "qui",
                        "impedit": "cum",
                    },
                    map[string]interface{}{
                        "ipsum": "excepturi",
                        "aspernatur": "perferendis",
                    },
                },
                Message: sdk.String("ad"),
            },
            TimeZone: sdk.String("natus"),
            UserUpdateTime: sdk.String("sed"),
        },
        AccessToken: sdk.String("iste"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("natus"),
        Fields: sdk.String("laboriosam"),
        Key: sdk.String("hic"),
        OauthToken: sdk.String("saepe"),
        Parent: "fuga",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("in"),
        UploadType: sdk.String("corporis"),
        UploadProtocol: sdk.String("iste"),
    }, operations.CloudschedulerProjectsLocationsJobsCreateSecurity{
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