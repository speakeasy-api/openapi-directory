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
    
    req := operations.BaremetalsolutionProjectsLocationsInstanceProvisioningSettingsFetchRequest{
        Security: operations.BaremetalsolutionProjectsLocationsInstanceProvisioningSettingsFetchSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.BaremetalsolutionProjectsLocationsInstanceProvisioningSettingsFetchPathParams{
            Location: "rerum",
        },
        QueryParams: operations.BaremetalsolutionProjectsLocationsInstanceProvisioningSettingsFetchQueryParams{
            DollarXgafv: "2",
            AccessToken: "molestiae",
            Alt: "media",
            Callback: "sed",
            Fields: "enim",
            Key: "natus",
            OauthToken: "laudantium",
            PrettyPrint: false,
            QuotaUser: "id",
            UploadType: "voluptates",
            UploadProtocol: "nihil",
        },
    }
    
    res, err := s.Projects.BaremetalsolutionProjectsLocationsInstanceProvisioningSettingsFetch(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.FetchInstanceProvisioningSettingsResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->