# SpecTemplate

### Available Operations

* [GetSpecTemplate](#getspectemplate) - Get a specific Spec Template
* [GetSpecTemplateList](#getspectemplatelist) - List Spec Templates of Workgroup Level 

## GetSpecTemplate

Get a specific Spec Template

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
    res, err := s.SpecTemplate.GetSpecTemplate(ctx, operations.GetSpecTemplateRequest{
        SpecTemplateID: "ullam",
        WorkgroupID: "nam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetSpecTemplateList

List Spec Templates of Workgroup Level 

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
    res, err := s.SpecTemplate.GetSpecTemplateList(ctx, operations.GetSpecTemplateListRequest{
        WorkgroupID: "hic",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
