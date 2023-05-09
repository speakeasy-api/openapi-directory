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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("fuga"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("exercitationem"),
        Fields: sdk.String("ullam"),
        Key: sdk.String("inventore"),
        OauthToken: sdk.String("eius"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "voluptatem",
        QuotaUser: sdk.String("accusamus"),
        UploadType: sdk.String("voluptate"),
        UploadProtocol: sdk.String("corporis"),
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
