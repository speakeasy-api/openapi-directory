# Templates

### Available Operations

* [GetTemplateModel](#gettemplatemodel) - Get the object template
* [GetTemplates](#gettemplates) - Get a list of all available data object tempaltes

## GetTemplateModel

Returns a template instance of the specified data type

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
    res, err := s.Templates.GetTemplateModel(ctx, operations.GetTemplateModelRequest{
        APIVersion: "ipsum",
        Authorization: "alias",
        DtoDataType: "doloremque",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetTemplateModel200ApplicationJSONBinaryString != nil {
        // handle response
    }
}
```

## GetTemplates

Returns a collection of links to all the available data object templates

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
    res, err := s.Templates.GetTemplates(ctx, operations.GetTemplatesRequest{
        APIVersion: "tempora",
        Authorization: "perspiciatis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LinkCollection != nil {
        // handle response
    }
}
```
