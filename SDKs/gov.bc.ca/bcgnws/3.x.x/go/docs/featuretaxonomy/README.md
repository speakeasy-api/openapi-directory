# FeatureTaxonomy

### Available Operations

* [GetFeatureCategories](#getfeaturecategories) - Get all feature categories
* [GetFeatureClasses](#getfeatureclasses) - Get all feature classes
* [GetFeatureTypes](#getfeaturetypes) - Get all feature types

## GetFeatureCategories

Gets a list of all feature categories used by the BC Geographical Names Information System (BCGNIS).  Note: there are three levels of classification in the BCGNIS feature taxonomy: classes, categories and types.  A type is a subset of a category, and a category is a subset of a class.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.FeatureTaxonomy.GetFeatureCategories(ctx, operations.GetFeatureCategoriesRequest{
        OutputFormat: operations.GetFeatureCategoriesOutputFormatEnumXML,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetFeatureClasses

Gets a list of all feature classes used by the BC Geographical Names Information System (BCGNIS).  Note: there are three levels of classification in the BCGNIS feature taxonomy: classes, categories and types.  A type is a subset of a category, and a category is a subset of a class.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.FeatureTaxonomy.GetFeatureClasses(ctx, operations.GetFeatureClassesRequest{
        OutputFormat: operations.GetFeatureClassesOutputFormatEnumXML,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetFeatureTypes

Gets a list of all feature types used by the BC Geographical Names Information System (BCGNIS).  Note: there are three levels of classification in the BCGNIS feature taxonomy: classes, categories and types.  A type is a subset of a category, and a category is a subset of a class.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.FeatureTaxonomy.GetFeatureTypes(ctx, operations.GetFeatureTypesRequest{
        OutputFormat: operations.GetFeatureTypesOutputFormatEnumXML,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
