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
        AccessToken: sdk.String("voluptate"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("explicabo"),
        Fields: sdk.String("harum"),
        Key: sdk.String("eveniet"),
        OauthToken: sdk.String("quis"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "alias",
        QuotaUser: sdk.String("provident"),
        UploadType: sdk.String("optio"),
        UploadProtocol: sdk.String("exercitationem"),
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
