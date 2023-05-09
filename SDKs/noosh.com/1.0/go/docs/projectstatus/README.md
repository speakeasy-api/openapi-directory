# ProjectStatus

### Available Operations

* [GetProjectStatus](#getprojectstatus) - List the project status
* [GetProjectStatusOfClient](#getprojectstatusofclient) - List the project status of client

## GetProjectStatus

List the project status

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
    res, err := s.ProjectStatus.GetProjectStatus(ctx, operations.GetProjectStatusRequest{
        WorkgroupID: "magni",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetProjectStatusOfClient

List the project status of client

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
    res, err := s.ProjectStatus.GetProjectStatusOfClient(ctx, operations.GetProjectStatusOfClientRequest{
        ClientWorkgroupID: "sunt",
        WorkgroupID: "quo",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
