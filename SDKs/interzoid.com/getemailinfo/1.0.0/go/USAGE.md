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

    req := operations.GetemailinfoRequest{
        QueryParams: operations.GetemailinfoQueryParams{
            Email: "Larue_Rau85@yahoo.com",
            License: "corrupti",
        },
    }

    ctx := context.Background()
    res, err := s.EmailAddressInformation.Getemailinfo(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Getemailinfo200ApplicationJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->