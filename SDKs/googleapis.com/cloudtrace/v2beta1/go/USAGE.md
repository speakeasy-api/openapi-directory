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
    res, err := s.Projects.CloudtraceProjectsTraceSinksCreate(ctx, operations.CloudtraceProjectsTraceSinksCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        TraceSinkInput: &shared.TraceSinkInput{
            Name: sdk.String("Kelvin Sporer"),
            OutputConfig: &shared.OutputConfig{
                Destination: sdk.String("corrupti"),
            },
        },
        AccessToken: sdk.String("illum"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("error"),
        Fields: sdk.String("deserunt"),
        Key: sdk.String("suscipit"),
        OauthToken: sdk.String("iure"),
        Parent: "magnam",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("debitis"),
        UploadType: sdk.String("ipsa"),
        UploadProtocol: sdk.String("delectus"),
    }, operations.CloudtraceProjectsTraceSinksCreateSecurity{
        Option1: &operations.CloudtraceProjectsTraceSinksCreateSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TraceSink != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->