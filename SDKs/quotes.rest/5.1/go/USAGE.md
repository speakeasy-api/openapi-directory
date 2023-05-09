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
    res, err := s.PrivateQOD.GetQod(ctx, operations.GetQodRequest{
        Category: sdk.String("corrupti"),
        ID: sdk.String("provident"),
        Language: sdk.String("distinctio"),
    }, operations.GetQodSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.QODResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->