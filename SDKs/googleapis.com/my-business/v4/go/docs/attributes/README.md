# Attributes

### Available Operations

* [MybusinessAttributesList](#mybusinessattributeslist) - Returns the list of available attributes that would be available for a location with the given primary category and country.

## MybusinessAttributesList

Returns the list of available attributes that would be available for a location with the given primary category and country.

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
    res, err := s.Attributes.MybusinessAttributesList(ctx, operations.MybusinessAttributesListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("aliquam"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("illo"),
        CategoryID: sdk.String("accusantium"),
        Country: sdk.String("Isle of Man"),
        Fields: sdk.String("ea"),
        Key: sdk.String("beatae"),
        LanguageCode: sdk.String("vero"),
        Name: sdk.String("Franklin Franecki"),
        OauthToken: sdk.String("earum"),
        PageSize: sdk.Int64(117525),
        PageToken: sdk.String("impedit"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("voluptatibus"),
        UploadType: sdk.String("iste"),
        UploadProtocol: sdk.String("itaque"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListAttributeMetadataResponse != nil {
        // handle response
    }
}
```
