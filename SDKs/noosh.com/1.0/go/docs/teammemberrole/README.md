# TeamMemberRole

### Available Operations

* [GetMemberRoles](#getmemberroles) - List all the role options for the user

## GetMemberRoles

List all the role options for the user

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
    res, err := s.TeamMemberRole.GetMemberRoles(ctx, operations.GetMemberRolesRequest{
        ProjectID: "delectus",
        UserID: "voluptate",
        WorkgroupID: "consectetur",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
