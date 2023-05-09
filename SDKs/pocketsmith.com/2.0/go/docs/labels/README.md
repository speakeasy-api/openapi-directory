# Labels

### Available Operations

* [GetUsersIDLabels](#getusersidlabels) - List labels in user

## GetUsersIDLabels

Lists labels belonging to a user by their ID.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            DeveloperKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Labels.GetUsersIDLabels(ctx, operations.GetUsersIDLabelsRequest{
        ID: 680056,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetUsersIDLabels200ApplicationJSONStrings != nil {
        // handle response
    }
}
```
