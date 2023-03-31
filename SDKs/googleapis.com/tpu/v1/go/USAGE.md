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

    req := operations.TpuProjectsLocationsAcceleratorTypesListRequest{
        DollarXgafv: "2",
        AccessToken: "provident",
        Alt: "proto",
        Callback: "quibusdam",
        Fields: "unde",
        Filter: "nulla",
        Key: "corrupti",
        OauthToken: "illum",
        OrderBy: "vel",
        PageSize: 623564,
        PageToken: "deserunt",
        Parent: "suscipit",
        PrettyPrint: false,
        QuotaUser: "iure",
        UploadType: "magnam",
        UploadProtocol: "debitis",
    }

    ctx := context.Background()
    res, err := s.Projects.TpuProjectsLocationsAcceleratorTypesList(ctx, req, operations.TpuProjectsLocationsAcceleratorTypesListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListAcceleratorTypesResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->