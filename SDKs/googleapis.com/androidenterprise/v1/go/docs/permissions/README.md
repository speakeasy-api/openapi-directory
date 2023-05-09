# Permissions

### Available Operations

* [AndroidenterprisePermissionsGet](#androidenterprisepermissionsget) - Retrieves details of an Android app permission for display to an enterprise admin.

## AndroidenterprisePermissionsGet

Retrieves details of an Android app permission for display to an enterprise admin.

### Example Usage

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
    res, err := s.Permissions.AndroidenterprisePermissionsGet(ctx, operations.AndroidenterprisePermissionsGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("voluptas"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("voluptas"),
        Fields: sdk.String("minima"),
        Key: sdk.String("nobis"),
        Language: sdk.String("dolorum"),
        OauthToken: sdk.String("adipisci"),
        PermissionID: "minus",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dolores"),
        UploadType: sdk.String("blanditiis"),
        UploadProtocol: sdk.String("in"),
    }, operations.AndroidenterprisePermissionsGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Permission != nil {
        // handle response
    }
}
```
