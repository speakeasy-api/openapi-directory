# Revisions

### Available Operations

* [GamesRevisionsCheck](#gamesrevisionscheck) - Checks whether the games client is out of date.

## GamesRevisionsCheck

Checks whether the games client is out of date.

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
    res, err := s.Revisions.GamesRevisionsCheck(ctx, operations.GamesRevisionsCheckRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("dolores"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("quam"),
        ClientRevision: "dolor",
        Fields: sdk.String("vero"),
        Key: sdk.String("nostrum"),
        OauthToken: sdk.String("hic"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("recusandae"),
        UploadType: sdk.String("omnis"),
        UploadProtocol: sdk.String("facilis"),
    }, operations.GamesRevisionsCheckSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RevisionCheckResponse != nil {
        // handle response
    }
}
```
