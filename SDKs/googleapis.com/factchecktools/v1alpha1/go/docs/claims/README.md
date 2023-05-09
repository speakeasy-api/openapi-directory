# Claims

### Available Operations

* [FactchecktoolsClaimsSearch](#factchecktoolsclaimssearch) - Search through fact-checked claims.

## FactchecktoolsClaimsSearch

Search through fact-checked claims.

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
    res, err := s.Claims.FactchecktoolsClaimsSearch(ctx, operations.FactchecktoolsClaimsSearchRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("suscipit"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("minus"),
        Fields: sdk.String("placeat"),
        Key: sdk.String("voluptatum"),
        LanguageCode: sdk.String("iusto"),
        MaxAgeDays: sdk.Int64(568045),
        OauthToken: sdk.String("nisi"),
        Offset: sdk.Int64(925597),
        PageSize: sdk.Int64(836079),
        PageToken: sdk.String("ab"),
        PrettyPrint: sdk.Bool(false),
        Query: sdk.String("quis"),
        QuotaUser: sdk.String("veritatis"),
        ReviewPublisherSiteFilter: sdk.String("deserunt"),
        UploadType: sdk.String("perferendis"),
        UploadProtocol: sdk.String("ipsam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleFactcheckingFactchecktoolsV1alpha1FactCheckedClaimSearchResponse != nil {
        // handle response
    }
}
```
