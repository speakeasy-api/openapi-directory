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
    res, err := s.Projects.FirebaserulesProjectsReleasesCreate(ctx, operations.FirebaserulesProjectsReleasesCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        ReleaseInput: &shared.ReleaseInput{
            Name: sdk.String("Kelvin Sporer"),
            RulesetName: sdk.String("corrupti"),
        },
        AccessToken: sdk.String("illum"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("error"),
        Fields: sdk.String("deserunt"),
        Key: sdk.String("suscipit"),
        Name: "Dr. Valerie Toy",
        OauthToken: sdk.String("suscipit"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("molestiae"),
        UploadType: sdk.String("minus"),
        UploadProtocol: sdk.String("placeat"),
    }, operations.FirebaserulesProjectsReleasesCreateSecurity{
        Option1: &operations.FirebaserulesProjectsReleasesCreateSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Release != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->