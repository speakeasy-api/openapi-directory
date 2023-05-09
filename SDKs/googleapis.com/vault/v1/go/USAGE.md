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
    res, err := s.Matters.VaultMattersAddPermissions(ctx, operations.VaultMattersAddPermissionsRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AddMatterPermissionsRequest: &shared.AddMatterPermissionsRequest{
            CcMe: sdk.Bool(false),
            MatterPermission: &shared.MatterPermission{
                AccountID: sdk.String("provident"),
                Role: shared.MatterPermissionRoleEnumOwner.ToPointer(),
            },
            SendEmails: sdk.Bool(false),
        },
        AccessToken: sdk.String("quibusdam"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("nulla"),
        Fields: sdk.String("corrupti"),
        Key: sdk.String("illum"),
        MatterID: "vel",
        OauthToken: sdk.String("error"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("deserunt"),
        UploadType: sdk.String("suscipit"),
        UploadProtocol: sdk.String("iure"),
    }, operations.VaultMattersAddPermissionsSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MatterPermission != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->