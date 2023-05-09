<!-- Start SDK Example Usage -->
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
    res, err := s.Groups.GetGroup(ctx, operations.GetGroupRequest{
        GroupID: "corrupti",
    }, operations.GetGroupSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Group != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->