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
            Parent: "exercitationem",
        },
        QueryParams: operations.TpuProjectsLocationsAcceleratorTypesListQueryParams{
            DollarXgafv: "1",
            AccessToken: "cum",
            Alt: "media",
            Callback: "est",
            Fields: "et",
            Filter: "doloremque",
            Key: "tempora",
            OauthToken: "aliquid",
            OrderBy: "voluptas",
            PageSize: 6034910936920592936,
            PageToken: "ut",
            PrettyPrint: false,
            QuotaUser: "veritatis",
            UploadType: "eius",
            UploadProtocol: "voluptate",
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