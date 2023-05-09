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
    res, err := s.Projects.NotebooksProjectsLocationsEnvironmentsCreate(ctx, operations.NotebooksProjectsLocationsEnvironmentsCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        EnvironmentInput: &shared.EnvironmentInput{
            ContainerImage: &shared.ContainerImage{
                Repository: sdk.String("provident"),
                Tag: sdk.String("distinctio"),
            },
            Description: sdk.String("quibusdam"),
            DisplayName: sdk.String("unde"),
            PostStartupScript: sdk.String("nulla"),
            VMImage: &shared.VMImage{
                ImageFamily: sdk.String("corrupti"),
                ImageName: sdk.String("illum"),
                Project: sdk.String("vel"),
            },
        },
        AccessToken: sdk.String("error"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("suscipit"),
        EnvironmentID: sdk.String("iure"),
        Fields: sdk.String("magnam"),
        Key: sdk.String("debitis"),
        OauthToken: sdk.String("ipsa"),
        Parent: "delectus",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("tempora"),
        UploadType: sdk.String("suscipit"),
        UploadProtocol: sdk.String("molestiae"),
    }, operations.NotebooksProjectsLocationsEnvironmentsCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->