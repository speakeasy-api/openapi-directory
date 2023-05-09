# Entity

### Available Operations

* [DomainsrdapEntityGet](#domainsrdapentityget) - The RDAP API recognizes this command from the RDAP specification but does not support it. The response is a formatted 501 error.

## DomainsrdapEntityGet

The RDAP API recognizes this command from the RDAP specification but does not support it. The response is a formatted 501 error.

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
    res, err := s.Entity.DomainsrdapEntityGet(ctx, operations.DomainsrdapEntityGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("repellendus"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("quo"),
        EntityID: "odit",
        Fields: sdk.String("at"),
        Key: sdk.String("at"),
        OauthToken: sdk.String("maiores"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("molestiae"),
        UploadType: sdk.String("quod"),
        UploadProtocol: sdk.String("quod"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RdapResponse != nil {
        // handle response
    }
}
```
