<!-- Start SDK Example Usage -->
```go
package main

import (
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
            Parent: "voluptatem",
        },
        QueryParams: operations.TpuProjectsLocationsAcceleratorTypesListQueryParams{
            DollarXgafv: "2",
            AccessToken: "quis",
            Alt: "media",
            Callback: "nobis",
            Fields: "et",
            Filter: "modi",
            Key: "excepturi",
            OauthToken: "id",
            OrderBy: "error",
            PageSize: 1014192855358704636,
            PageToken: "harum",
            PrettyPrint: true,
            QuotaUser: "et",
            UploadType: "architecto",
            UploadProtocol: "velit",
        },
    }
    
    res, err := s.Projects.TpuProjectsLocationsAcceleratorTypesList(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.ListAcceleratorTypesResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->