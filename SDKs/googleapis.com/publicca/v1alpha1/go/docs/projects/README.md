# Projects

### Available Operations

* [PubliccaProjectsLocationsExternalAccountKeysCreate](#publiccaprojectslocationsexternalaccountkeyscreate) - Creates a new ExternalAccountKey bound to the project.

## PubliccaProjectsLocationsExternalAccountKeysCreate

Creates a new ExternalAccountKey bound to the project.

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
    res, err := s.Projects.PubliccaProjectsLocationsExternalAccountKeysCreate(ctx, operations.PubliccaProjectsLocationsExternalAccountKeysCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("iure"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("debitis"),
        Fields: sdk.String("ipsa"),
        Key: sdk.String("delectus"),
        OauthToken: sdk.String("tempora"),
        Parent: "suscipit",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("molestiae"),
        UploadType: sdk.String("minus"),
        UploadProtocol: sdk.String("placeat"),
    }, operations.PubliccaProjectsLocationsExternalAccountKeysCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ExternalAccountKey != nil {
        // handle response
    }
}
```
