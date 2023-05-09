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
    res, err := s.Liens.CloudresourcemanagerLiensCreate(ctx, operations.CloudresourcemanagerLiensCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        Lien: &shared.Lien{
            CreateTime: sdk.String("provident"),
            Name: sdk.String("Ellis Mitchell"),
            Origin: sdk.String("illum"),
            Parent: sdk.String("vel"),
            Reason: sdk.String("error"),
            Restrictions: []string{
                "suscipit",
                "iure",
                "magnam",
            },
        },
        AccessToken: sdk.String("debitis"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("delectus"),
        Fields: sdk.String("tempora"),
        Key: sdk.String("suscipit"),
        OauthToken: sdk.String("molestiae"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("minus"),
        UploadType: sdk.String("placeat"),
        UploadProtocol: sdk.String("voluptatum"),
    }, operations.CloudresourcemanagerLiensCreateSecurity{
        Option1: &operations.CloudresourcemanagerLiensCreateSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Lien != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->