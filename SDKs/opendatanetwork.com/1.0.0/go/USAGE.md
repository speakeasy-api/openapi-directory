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
    res, err := s.CreateAMap(ctx, operations.CreateAMapRequest{
        XAppToken: sdk.String("corrupti"),
        AppToken: sdk.String("provident"),
        Constraint: sdk.String("distinctio"),
        EntityID: "quibusdam",
        Variable: "unde",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->