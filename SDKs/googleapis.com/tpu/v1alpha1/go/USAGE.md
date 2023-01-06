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
            Parent: "consequatur",
        },
        QueryParams: operations.TpuProjectsLocationsAcceleratorTypesListQueryParams{
            DollarXgafv: "2",
            AccessToken: "minus",
            Alt: "media",
            Callback: "quas",
            Fields: "facere",
            Filter: "odio",
            Key: "qui",
            OauthToken: "sed",
            OrderBy: "quos",
            PageSize: 7597626731443246145,
            PageToken: "cupiditate",
            PrettyPrint: false,
            QuotaUser: "qui",
            UploadType: "enim",
            UploadProtocol: "quasi",
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