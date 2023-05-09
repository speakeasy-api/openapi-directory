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
    res, err := s.Projects.JobsProjectsTenantsClientEventsCreate(ctx, operations.JobsProjectsTenantsClientEventsCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        ClientEvent: &shared.ClientEvent{
            CreateTime: sdk.String("provident"),
            EventID: sdk.String("distinctio"),
            EventNotes: sdk.String("quibusdam"),
            JobEvent: &shared.JobEvent{
                Jobs: []string{
                    "nulla",
                    "corrupti",
                    "illum",
                },
                Type: shared.JobEventTypeEnumApplicationQuickSubmission.ToPointer(),
            },
            RequestID: sdk.String("error"),
        },
        AccessToken: sdk.String("deserunt"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("iure"),
        Fields: sdk.String("magnam"),
        Key: sdk.String("debitis"),
        OauthToken: sdk.String("ipsa"),
        Parent: "delectus",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("tempora"),
        UploadType: sdk.String("suscipit"),
        UploadProtocol: sdk.String("molestiae"),
    }, operations.JobsProjectsTenantsClientEventsCreateSecurity{
        Option1: &operations.JobsProjectsTenantsClientEventsCreateSecurityOption1{
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