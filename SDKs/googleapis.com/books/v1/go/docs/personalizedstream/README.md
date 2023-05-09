# Personalizedstream

### Available Operations

* [BooksPersonalizedstreamGet](#bookspersonalizedstreamget) - Returns a stream of personalized book clusters

## BooksPersonalizedstreamGet

Returns a stream of personalized book clusters

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
    res, err := s.Personalizedstream.BooksPersonalizedstreamGet(ctx, operations.BooksPersonalizedstreamGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("aliquid"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("saepe"),
        Fields: sdk.String("vel"),
        Key: sdk.String("harum"),
        Locale: sdk.String("molestiae"),
        MaxAllowedMaturityRating: operations.BooksPersonalizedstreamGetMaxAllowedMaturityRatingEnumNotMature.ToPointer(),
        OauthToken: sdk.String("occaecati"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("minima"),
        Source: sdk.String("distinctio"),
        UploadType: sdk.String("eligendi"),
        UploadProtocol: sdk.String("sit"),
    }, operations.BooksPersonalizedstreamGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Discoveryclusters != nil {
        // handle response
    }
}
```
