# TestEnvironmentCatalog

### Available Operations

* [TestingTestEnvironmentCatalogGet](#testingtestenvironmentcatalogget) - Gets the catalog of supported test environments. May return any of the following canonical error codes: - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the environment type does not exist - INTERNAL - if an internal error occurred

## TestingTestEnvironmentCatalogGet

Gets the catalog of supported test environments. May return any of the following canonical error codes: - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the environment type does not exist - INTERNAL - if an internal error occurred

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
    res, err := s.TestEnvironmentCatalog.TestingTestEnvironmentCatalogGet(ctx, operations.TestingTestEnvironmentCatalogGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("atque"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("recusandae"),
        EnvironmentType: operations.TestingTestEnvironmentCatalogGetEnvironmentTypeEnumProvidedSoftware,
        Fields: sdk.String("repellendus"),
        Key: sdk.String("labore"),
        OauthToken: sdk.String("reiciendis"),
        PrettyPrint: sdk.Bool(false),
        ProjectID: sdk.String("doloremque"),
        QuotaUser: sdk.String("repudiandae"),
        UploadType: sdk.String("dicta"),
        UploadProtocol: sdk.String("accusantium"),
    }, operations.TestingTestEnvironmentCatalogGetSecurity{
        Option1: &operations.TestingTestEnvironmentCatalogGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TestEnvironmentCatalog != nil {
        // handle response
    }
}
```
