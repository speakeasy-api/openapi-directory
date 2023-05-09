# Entries

### Available Operations

* [DatacatalogEntriesLookup](#datacatalogentrieslookup) - Gets an entry by its target resource name. The resource name comes from the source Google Cloud Platform service.

## DatacatalogEntriesLookup

Gets an entry by its target resource name. The resource name comes from the source Google Cloud Platform service.

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
    res, err := s.Entries.DatacatalogEntriesLookup(ctx, operations.DatacatalogEntriesLookupRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("hic"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("totam"),
        Fields: sdk.String("beatae"),
        FullyQualifiedName: sdk.String("commodi"),
        Key: sdk.String("molestiae"),
        LinkedResource: sdk.String("modi"),
        OauthToken: sdk.String("qui"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("impedit"),
        SQLResource: sdk.String("cum"),
        UploadType: sdk.String("esse"),
        UploadProtocol: sdk.String("ipsum"),
    }, operations.DatacatalogEntriesLookupSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudDatacatalogV1Entry != nil {
        // handle response
    }
}
```
