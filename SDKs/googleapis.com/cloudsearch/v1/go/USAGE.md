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
    res, err := s.Debug.CloudsearchDebugDatasourcesItemsCheckAccess(ctx, operations.CloudsearchDebugDatasourcesItemsCheckAccessRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        Principal: &shared.Principal{
            GroupResourceName: sdk.String("provident"),
            GsuitePrincipal: &shared.GSuitePrincipal{
                GsuiteDomain: sdk.Bool(false),
                GsuiteGroupEmail: sdk.String("distinctio"),
                GsuiteUserEmail: sdk.String("quibusdam"),
            },
            UserResourceName: sdk.String("unde"),
        },
        AccessToken: sdk.String("nulla"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("illum"),
        DebugOptionsEnableDebugging: sdk.Bool(false),
        Fields: sdk.String("vel"),
        Key: sdk.String("error"),
        Name: "Rick Kertzmann",
        OauthToken: sdk.String("ipsa"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("delectus"),
        UploadType: sdk.String("tempora"),
        UploadProtocol: sdk.String("suscipit"),
    }, operations.CloudsearchDebugDatasourcesItemsCheckAccessSecurity{
        Option1: &operations.CloudsearchDebugDatasourcesItemsCheckAccessSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CheckAccessResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->