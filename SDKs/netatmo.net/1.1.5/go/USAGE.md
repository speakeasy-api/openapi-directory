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

    req := operations.DevicelistRequest{
        AppType: "app_station",
        DeviceID: "provident",
        GetFavorites: false,
    }

    ctx := context.Background()
    res, err := s.Deprecated.Devicelist(ctx, req, operations.DevicelistSecurity{
        CodeOauth: sdk.String("Bearer YOUR_ACCESS_TOKEN_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.NADeviceListResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->