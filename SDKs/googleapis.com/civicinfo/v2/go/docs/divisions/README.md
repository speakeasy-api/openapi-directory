# Divisions

### Available Operations

* [CivicinfoDivisionsSearch](#civicinfodivisionssearch) - Searches for political divisions by their natural name or OCD ID.

## CivicinfoDivisionsSearch

Searches for political divisions by their natural name or OCD ID.

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
    res, err := s.Divisions.CivicinfoDivisionsSearch(ctx, operations.CivicinfoDivisionsSearchRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("iure"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("debitis"),
        Fields: sdk.String("ipsa"),
        Key: sdk.String("delectus"),
        OauthToken: sdk.String("tempora"),
        PrettyPrint: sdk.Bool(false),
        Query: sdk.String("suscipit"),
        QuotaUser: sdk.String("molestiae"),
        UploadType: sdk.String("minus"),
        UploadProtocol: sdk.String("placeat"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DivisionSearchResponse != nil {
        // handle response
    }
}
```
