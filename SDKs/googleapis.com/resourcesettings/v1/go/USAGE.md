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
    
    req := operations.ResourcesettingsProjectsSettingsGetRequest{
        Security: operations.ResourcesettingsProjectsSettingsGetSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.ResourcesettingsProjectsSettingsGetPathParams{
            Name: "recusandae",
        },
        QueryParams: operations.ResourcesettingsProjectsSettingsGetQueryParams{
            DollarXgafv: "1",
            AccessToken: "excepturi",
            Alt: "proto",
            Callback: "autem",
            Fields: "fugiat",
            Key: "doloremque",
            OauthToken: "beatae",
            PrettyPrint: false,
            QuotaUser: "accusantium",
            UploadType: "eveniet",
            UploadProtocol: "labore",
            View: "SETTING_VIEW_LOCAL_VALUE",
        },
    }
    
    res, err := s.Projects.ResourcesettingsProjectsSettingsGet(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudResourcesettingsV1Setting != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->