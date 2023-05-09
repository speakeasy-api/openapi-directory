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
    res, err := s.Actions.GetActions(ctx, operations.GetActionsRequest{
        ID: sdk.Int64(548814),
        Sort: operations.GetActionsSortParameterSortEnumProgressAsc.ToPointer(),
        Status: operations.GetActionsStatusParameterStatusEnumError.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ActionsResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->