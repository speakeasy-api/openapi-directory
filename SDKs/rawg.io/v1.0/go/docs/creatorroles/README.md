# CreatorRoles

### Available Operations

* [CreatorRolesList](#creatorroleslist) - Get a list of creator positions (jobs).

## CreatorRolesList

Get a list of creator positions (jobs).

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
    res, err := s.CreatorRoles.CreatorRolesList(ctx, operations.CreatorRolesListRequest{
        Page: sdk.Int64(715190),
        PageSize: sdk.Int64(844266),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreatorRolesList200ApplicationJSONObject != nil {
        // handle response
    }
}
```
