# Operations

### Available Operations

* [AccesscontextmanagerOperationsGet](#accesscontextmanageroperationsget) - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

## AccesscontextmanagerOperationsGet

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

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
    res, err := s.Operations.AccesscontextmanagerOperationsGet(ctx, operations.AccesscontextmanagerOperationsGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessLevelFormat: operations.AccesscontextmanagerOperationsGetAccessLevelFormatEnumAsDefined.ToPointer(),
        AccessToken: sdk.String("eaque"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("nesciunt"),
        Fields: sdk.String("eos"),
        Key: sdk.String("perferendis"),
        Name: "Brooke Kohler",
        OauthToken: sdk.String("nostrum"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("hic"),
        UploadType: sdk.String("recusandae"),
        UploadProtocol: sdk.String("omnis"),
    }, operations.AccesscontextmanagerOperationsGetSecurity{
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
