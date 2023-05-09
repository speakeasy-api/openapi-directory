# V2

### Available Operations

* [GetDiscoveryV2Suggest](#getdiscoveryv2suggest) - Find Suggest

## GetDiscoveryV2Suggest

Find search suggestions and filter your suggestions by location, source, etc.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.V2.GetDiscoveryV2Suggest(ctx, operations.GetDiscoveryV2SuggestRequest{
        ClientVisibility: sdk.String("quae"),
        CountryCode: sdk.String("AI"),
        GeoPoint: sdk.String("quas"),
        IncludeFuzzy: operations.GetDiscoveryV2SuggestIncludeFuzzyEnumNo.ToPointer(),
        IncludeLicensedContent: operations.GetDiscoveryV2SuggestIncludeLicensedContentEnumYes.ToPointer(),
        IncludeSpellcheck: operations.GetDiscoveryV2SuggestIncludeSpellcheckEnumNo.ToPointer(),
        IncludeTBA: operations.GetDiscoveryV2SuggestIncludeTbaEnumOnly.ToPointer(),
        IncludeTBD: operations.GetDiscoveryV2SuggestIncludeTbdEnumOnly.ToPointer(),
        Keyword: sdk.String("doloribus"),
        Latlong: sdk.String("ut"),
        Locale: sdk.String("facilis"),
        Radius: sdk.String("cupiditate"),
        SegmentID: sdk.String("qui"),
        Size: sdk.String("quae"),
        Source: operations.GetDiscoveryV2SuggestSourceEnumFrontgate.ToPointer(),
        Unit: operations.GetDiscoveryV2SuggestUnitEnumMiles.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDiscoveryV2Suggest200ApplicationHalPlusJSONString != nil {
        // handle response
    }
}
```
