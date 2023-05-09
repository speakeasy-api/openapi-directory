# Regions

### Available Operations

* [DfareportingRegionsList](#dfareportingregionslist) - Retrieves a list of regions.

## DfareportingRegionsList

Retrieves a list of regions.

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
    res, err := s.Regions.DfareportingRegionsList(ctx, operations.DfareportingRegionsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("iusto"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("beatae"),
        Fields: sdk.String("ducimus"),
        Key: sdk.String("autem"),
        OauthToken: sdk.String("ut"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "occaecati",
        QuotaUser: sdk.String("aspernatur"),
        UploadType: sdk.String("eum"),
        UploadProtocol: sdk.String("facilis"),
    }, operations.DfareportingRegionsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RegionsListResponse != nil {
        // handle response
    }
}
```
