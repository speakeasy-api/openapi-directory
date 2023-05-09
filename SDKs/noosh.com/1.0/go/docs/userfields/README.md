# UserFields

### Available Operations

* [GetProjectHomeUserFieldListOfClient](#getprojecthomeuserfieldlistofclient) - List projec home user fields of client workgroup
* [GetProjectHomeUserFieldsList](#getprojecthomeuserfieldslist) - List projec home user fields

## GetProjectHomeUserFieldListOfClient

List projec home user fields of client workgroup

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
    res, err := s.UserFields.GetProjectHomeUserFieldListOfClient(ctx, operations.GetProjectHomeUserFieldListOfClientRequest{
        ClientWorkgroupID: "odio",
        WorkgroupID: "similique",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetProjectHomeUserFieldsList

List projec home user fields

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
    res, err := s.UserFields.GetProjectHomeUserFieldsList(ctx, operations.GetProjectHomeUserFieldsListRequest{
        WorkgroupID: "facilis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
