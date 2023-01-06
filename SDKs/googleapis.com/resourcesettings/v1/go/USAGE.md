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
            Name: "eos",
        },
        QueryParams: operations.ResourcesettingsProjectsSettingsGetQueryParams{
            DollarXgafv: "2",
            AccessToken: "ratione",
            Alt: "media",
            Callback: "voluptatem",
            Fields: "quo",
            Key: "molestiae",
            OauthToken: "quos",
            PrettyPrint: false,
            QuotaUser: "et",
            UploadType: "doloremque",
            UploadProtocol: "voluptatem",
            View: "SETTING_VIEW_EFFECTIVE_VALUE",
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