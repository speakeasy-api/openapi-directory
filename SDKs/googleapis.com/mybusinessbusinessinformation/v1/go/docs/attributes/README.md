# Attributes

### Available Operations

* [MybusinessbusinessinformationAttributesList](#mybusinessbusinessinformationattributeslist) - Returns the list of attributes that would be available for a location with the given primary category and country.

## MybusinessbusinessinformationAttributesList

Returns the list of attributes that would be available for a location with the given primary category and country.

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
    res, err := s.Attributes.MybusinessbusinessinformationAttributesList(ctx, operations.MybusinessbusinessinformationAttributesListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("qui"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("laudantium"),
        CategoryName: sdk.String("odio"),
        Fields: sdk.String("occaecati"),
        Key: sdk.String("voluptatibus"),
        LanguageCode: sdk.String("quisquam"),
        OauthToken: sdk.String("vero"),
        PageSize: sdk.Int64(606476),
        PageToken: sdk.String("quis"),
        Parent: sdk.String("ipsum"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("delectus"),
        RegionCode: sdk.String("voluptate"),
        ShowAll: sdk.Bool(false),
        UploadType: sdk.String("consectetur"),
        UploadProtocol: sdk.String("vero"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListAttributeMetadataResponse != nil {
        // handle response
    }
}
```
