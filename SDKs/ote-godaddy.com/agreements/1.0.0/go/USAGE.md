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
    res, err := s.V1.Get(ctx, operations.GetRequest{
        XMarketID: sdk.String("corrupti"),
        XPrivateLabelID: sdk.Int64(592845),
        Keys: []string{
            "quibusdam",
            "unde",
            "nulla",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->