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
    res, err := s.Atm.GetAtms(ctx, operations.GetAtmsRequest{
        IfModifiedSince: sdk.String("corrupti"),
        IfNoneMatch: sdk.String("provident"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->