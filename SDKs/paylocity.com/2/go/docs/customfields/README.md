# CustomFields

### Available Operations

* [GetAllCustomFieldsByCategory](#getallcustomfieldsbycategory) - Get All Custom Fields

## GetAllCustomFieldsByCategory

Get All Custom Fields for the selected company

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
    res, err := s.CustomFields.GetAllCustomFieldsByCategory(ctx, operations.GetAllCustomFieldsByCategoryRequest{
        Category: "ipsam",
        CompanyID: "repellendus",
    }, operations.GetAllCustomFieldsByCategorySecurity{
        PaylocityAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CustomFieldDefinitions != nil {
        // handle response
    }
}
```
