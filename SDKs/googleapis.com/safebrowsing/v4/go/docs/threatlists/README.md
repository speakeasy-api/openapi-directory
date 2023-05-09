# ThreatLists

### Available Operations

* [SafebrowsingThreatListsList](#safebrowsingthreatlistslist) - Lists the Safe Browsing threat lists available for download.

## SafebrowsingThreatListsList

Lists the Safe Browsing threat lists available for download.

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
    res, err := s.ThreatLists.SafebrowsingThreatListsList(ctx, operations.SafebrowsingThreatListsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("perferendis"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("reprehenderit"),
        Fields: sdk.String("ut"),
        Key: sdk.String("maiores"),
        OauthToken: sdk.String("dicta"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("corporis"),
        UploadType: sdk.String("dolore"),
        UploadProtocol: sdk.String("iusto"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleSecuritySafebrowsingV4ListThreatListsResponse != nil {
        // handle response
    }
}
```
