# Entries

### Available Operations

* [DatacatalogEntriesLookup](#datacatalogentrieslookup) - Get an entry by target resource name. This method allows clients to use the resource name from the source Google Cloud Platform service to get the Data Catalog Entry.

## DatacatalogEntriesLookup

Get an entry by target resource name. This method allows clients to use the resource name from the source Google Cloud Platform service to get the Data Catalog Entry.

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
        Key: sdk.String("commodi"),
        LinkedResource: sdk.String("molestiae"),
        OauthToken: sdk.String("modi"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("qui"),
        SQLResource: sdk.String("impedit"),
        UploadType: sdk.String("cum"),
        UploadProtocol: sdk.String("esse"),
    }, operations.DatacatalogEntriesLookupSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudDatacatalogV1beta1Entry != nil {
        // handle response
    }
}
```
