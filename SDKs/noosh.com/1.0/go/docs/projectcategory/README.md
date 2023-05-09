# ProjectCategory

### Available Operations

* [GetProjectCategoryList](#getprojectcategorylist) - List the project categories
* [GetProjectCategoryListOfClient](#getprojectcategorylistofclient) - List the project categories of client side

## GetProjectCategoryList

List the project categories

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
    res, err := s.ProjectCategory.GetProjectCategoryList(ctx, operations.GetProjectCategoryListRequest{
        WorkgroupID: "consequuntur",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetProjectCategoryListOfClient

List the project categories of client side

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
    res, err := s.ProjectCategory.GetProjectCategoryListOfClient(ctx, operations.GetProjectCategoryListOfClientRequest{
        ClientWorkgroupID: "praesentium",
        WorkgroupID: "natus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
