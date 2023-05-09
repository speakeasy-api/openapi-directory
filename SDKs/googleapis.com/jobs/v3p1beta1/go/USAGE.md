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
    res, err := s.Projects.JobsProjectsClientEventsCreate(ctx, operations.JobsProjectsClientEventsCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        CreateClientEventRequest: &shared.CreateClientEventRequest{
            ClientEvent: &shared.ClientEvent{
                CreateTime: sdk.String("provident"),
                EventID: sdk.String("distinctio"),
                ExtraInfo: map[string]string{
                    "unde": "nulla",
                    "corrupti": "illum",
                    "vel": "error",
                    "deserunt": "suscipit",
                },
                JobEvent: &shared.JobEvent{
                    Jobs: []string{
                        "magnam",
                        "debitis",
                    },
                    Type: shared.JobEventTypeEnumJobEventTypeUnspecified.ToPointer(),
                },
                ParentEventID: sdk.String("delectus"),
                RequestID: sdk.String("tempora"),
            },
        },
        AccessToken: sdk.String("suscipit"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("minus"),
        Fields: sdk.String("placeat"),
        Key: sdk.String("voluptatum"),
        OauthToken: sdk.String("iusto"),
        Parent: "excepturi",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("nisi"),
        UploadType: sdk.String("recusandae"),
        UploadProtocol: sdk.String("temporibus"),
    }, operations.JobsProjectsClientEventsCreateSecurity{
        Option1: &operations.JobsProjectsClientEventsCreateSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ClientEvent != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->