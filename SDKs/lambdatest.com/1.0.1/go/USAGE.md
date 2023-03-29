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

    req := operations.DevicesRequest{
        Security: operations.DevicesSecurity{
            BasicAuth: shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        },
        QueryParams: operations.DevicesQueryParams{
            Os: "unde",
        },
    }

    ctx := context.Background()
    res, err := s.GetDevices.Devices(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.OsDevices != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->