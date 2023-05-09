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
    res, err := s.Deprecated.Devicelist(ctx, operations.DevicelistRequest{
        AppType: operations.DevicelistAppTypeEnumAppStation.ToPointer(),
        DeviceID: sdk.String("provident"),
        GetFavorites: sdk.Bool(false),
    }, operations.DevicelistSecurity{
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