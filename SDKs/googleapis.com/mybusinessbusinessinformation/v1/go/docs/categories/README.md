# Categories

### Available Operations

* [MybusinessbusinessinformationCategoriesBatchGet](#mybusinessbusinessinformationcategoriesbatchget) - Returns a list of business categories for the provided language and GConcept ids.
* [MybusinessbusinessinformationCategoriesList](#mybusinessbusinessinformationcategorieslist) - Returns a list of business categories. Search will match the category name but not the category ID. Search only matches the front of a category name (that is, 'food' may return 'Food Court' but not 'Fast Food Restaurant').

## MybusinessbusinessinformationCategoriesBatchGet

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
    res, err := s.Categories.MybusinessbusinessinformationCategoriesBatchGet(ctx, operations.MybusinessbusinessinformationCategoriesBatchGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("dignissimos"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("distinctio"),
        Fields: sdk.String("quod"),
        Key: sdk.String("odio"),
        LanguageCode: sdk.String("similique"),
        Names: []string{
            "vero",
            "ducimus",
            "dolore",
        },
        OauthToken: sdk.String("quibusdam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("illum"),
        RegionCode: sdk.String("sequi"),
        UploadType: sdk.String("natus"),
        UploadProtocol: sdk.String("impedit"),
        View: operations.MybusinessbusinessinformationCategoriesBatchGetViewEnumCategoryViewUnspecified.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchGetCategoriesResponse != nil {
        // handle response
    }
}
```

## MybusinessbusinessinformationCategoriesList

Returns a list of business categories. Search will match the category name but not the category ID. Search only matches the front of a category name (that is, 'food' may return 'Food Court' but not 'Fast Food Restaurant').

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
    res, err := s.Categories.MybusinessbusinessinformationCategoriesList(ctx, operations.MybusinessbusinessinformationCategoriesListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("exercitationem"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("fugit"),
        Fields: sdk.String("porro"),
        Filter: sdk.String("maiores"),
        Key: sdk.String("doloribus"),
        LanguageCode: sdk.String("iusto"),
        OauthToken: sdk.String("eligendi"),
        PageSize: sdk.Int64(497391),
        PageToken: sdk.String("alias"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("officia"),
        RegionCode: sdk.String("tempora"),
        UploadType: sdk.String("ipsam"),
        UploadProtocol: sdk.String("ea"),
        View: operations.MybusinessbusinessinformationCategoriesListViewEnumCategoryViewUnspecified.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListCategoriesResponse != nil {
        // handle response
    }
}
```
