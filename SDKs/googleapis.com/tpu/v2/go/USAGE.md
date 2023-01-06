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
            Parent: "suscipit",
        },
        QueryParams: operations.TpuProjectsLocationsAcceleratorTypesListQueryParams{
            DollarXgafv: "2",
            AccessToken: "veritatis",
            Alt: "media",
            Callback: "minus",
            Fields: "esse",
            Filter: "consequatur",
            Key: "omnis",
            OauthToken: "deserunt",
            OrderBy: "ut",
            PageSize: 6222659268980253218,
            PageToken: "nesciunt",
            PrettyPrint: true,
            QuotaUser: "et",
            UploadType: "quis",
            UploadProtocol: "accusamus",
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