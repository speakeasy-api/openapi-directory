<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.GetareacodefromnumberRequest{
        QueryParams: operations.GetareacodefromnumberQueryParams{
            License: "corrupti",
            Number: "provident",
        },
    }

    ctx := context.Background()
    res, err := s.AreaCodeInformation.Getareacodefromnumber(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Getareacodefromnumber200ApplicationJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->