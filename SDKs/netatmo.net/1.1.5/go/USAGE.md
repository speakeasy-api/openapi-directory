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
        Security: operations.DevicelistSecurity{
            CodeOauth: &shared.SchemeCodeOauth{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        QueryParams: operations.DevicelistQueryParams{
            AppType: "app_station",
            DeviceID: "deserunt",
            GetFavorites: false,
        },
    }

    ctx := context.Background()
    res, err := s.Deprecated.Devicelist(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.NADeviceListResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->