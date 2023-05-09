# Categories

### Available Operations

* [MybusinessCategoriesBatchGet](#mybusinesscategoriesbatchget) - Returns a list of business categories for the provided language and GConcept ids.
* [MybusinessCategoriesList](#mybusinesscategorieslist) - Returns a list of business categories. Search will match the category name but not the category ID. *Note:* Search only matches the front of a category name (that is, 'food' may return 'Food Court' but not 'Fast Food Restaurant').

## MybusinessCategoriesBatchGet

Returns a list of business categories for the provided language and GConcept ids.

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
    res, err := s.Categories.MybusinessCategoriesBatchGet(ctx, operations.MybusinessCategoriesBatchGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("nisi"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("velit"),
        CategoryIds: []string{
            "non",
            "dolor",
            "iusto",
        },
        Fields: sdk.String("sit"),
        Key: sdk.String("doloremque"),
        LanguageCode: sdk.String("consequatur"),
        OauthToken: sdk.String("officia"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("recusandae"),
        RegionCode: sdk.String("ea"),
        UploadType: sdk.String("quidem"),
        UploadProtocol: sdk.String("voluptas"),
        View: operations.MybusinessCategoriesBatchGetViewEnumFull.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchGetBusinessCategoriesResponse != nil {
        // handle response
    }
}
```

## MybusinessCategoriesList

Returns a list of business categories. Search will match the category name but not the category ID. *Note:* Search only matches the front of a category name (that is, 'food' may return 'Food Court' but not 'Fast Food Restaurant').

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
    res, err := s.Categories.MybusinessCategoriesList(ctx, operations.MybusinessCategoriesListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("perspiciatis"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("deleniti"),
        Fields: sdk.String("a"),
        Key: sdk.String("voluptate"),
        LanguageCode: sdk.String("ullam"),
        OauthToken: sdk.String("unde"),
        PageSize: sdk.Int64(897543),
        PageToken: sdk.String("animi"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("impedit"),
        RegionCode: sdk.String("ipsam"),
        SearchTerm: sdk.String("corporis"),
        UploadType: sdk.String("est"),
        UploadProtocol: sdk.String("error"),
        View: operations.MybusinessCategoriesListViewEnumBasic.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListBusinessCategoriesResponse != nil {
        // handle response
    }
}
```
