# WorkgroupMembers

### Available Operations

* [GetWorkgroupMemberInfo](#getworkgroupmemberinfo) - Workgroup Member Info
* [GetWorkgroupMemberList](#getworkgroupmemberlist) - List the workgroup members

## GetWorkgroupMemberInfo

Workgroup Member Info

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
    res, err := s.WorkgroupMembers.GetWorkgroupMemberInfo(ctx, operations.GetWorkgroupMemberInfoRequest{
        UserID: "officia",
        WorkgroupID: "tempora",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetWorkgroupMemberList

List the workgroup members

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
    res, err := s.WorkgroupMembers.GetWorkgroupMemberList(ctx, operations.GetWorkgroupMemberListRequest{
        WorkgroupID: "ipsam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
