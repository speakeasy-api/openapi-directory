# Webfonts

### Available Operations

* [WebfontsWebfontsList](#webfontswebfontslist) - Retrieves the list of fonts currently served by the Google Fonts Developer API.

## WebfontsWebfontsList

Retrieves the list of fonts currently served by the Google Fonts Developer API.

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
    res, err := s.Webfonts.WebfontsWebfontsList(ctx, operations.WebfontsWebfontsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("minus"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("voluptatum"),
        Capability: []WebfontsWebfontsListCapabilityEnum{
            operations.WebfontsWebfontsListCapabilityEnumWoff2,
            operations.WebfontsWebfontsListCapabilityEnumWoff2,
        },
        Family: []string{
            "temporibus",
            "ab",
            "quis",
            "veritatis",
        },
        Fields: sdk.String("deserunt"),
        Key: sdk.String("perferendis"),
        OauthToken: sdk.String("ipsam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("repellendus"),
        Sort: operations.WebfontsWebfontsListSortEnumTrending.ToPointer(),
        Subset: sdk.String("quo"),
        UploadType: sdk.String("odit"),
        UploadProtocol: sdk.String("at"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.WebfontList != nil {
        // handle response
    }
}
```
