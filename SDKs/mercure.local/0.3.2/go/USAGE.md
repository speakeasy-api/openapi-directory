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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Bearer: sdk.String("Bearer YOUR_BEARER_TOKEN_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.GetWellKnownMercure(ctx, operations.GetWellKnownMercureRequest{
        LastEventID: sdk.String("corrupti"),
        LastEventIDQueryParameter: sdk.String("provident"),
        Topic: []string{
            "quibusdam",
            "unde",
            "nulla",
        },
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