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
        Security: operations.TpuProjectsLocationsAcceleratorTypesListSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.TpuProjectsLocationsAcceleratorTypesListPathParams{
            Parent: "unde",
        },
        QueryParams: operations.TpuProjectsLocationsAcceleratorTypesListQueryParams{
            DollarXgafv: "2",
            AccessToken: "porro",
            Alt: "proto",
            Callback: "id",
            Fields: "vero",
            Filter: "perspiciatis",
            Key: "nulla",
            OauthToken: "nihil",
            OrderBy: "fuga",
            PageSize: 645894,
            PageToken: "eum",
            PrettyPrint: false,
            QuotaUser: "iusto",
            UploadType: "ullam",
            UploadProtocol: "saepe",
        },
    }

    ctx := context.Background()
    res, err := s.Projects.TpuProjectsLocationsAcceleratorTypesList(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.ListAcceleratorTypesResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->