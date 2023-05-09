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
    res, err := s.Projects.RuntimeconfigProjectsConfigsCreate(ctx, operations.RuntimeconfigProjectsConfigsCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        RuntimeConfig: &shared.RuntimeConfig{
            Description: sdk.String("provident"),
            Name: sdk.String("Ellis Mitchell"),
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
        RequestID: sdk.String("ipsa"),
        UploadType: sdk.String("delectus"),
        UploadProtocol: sdk.String("tempora"),
    }, operations.RuntimeconfigProjectsConfigsCreateSecurity{
        Option1: &operations.RuntimeconfigProjectsConfigsCreateSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RuntimeConfig != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->