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
            Name: "sit",
        },
        QueryParams: operations.ResourcesettingsProjectsSettingsGetQueryParams{
            DollarXgafv: "1",
            AccessToken: "culpa",
            Alt: "media",
            Callback: "consequuntur",
            Fields: "dolor",
            Key: "expedita",
            OauthToken: "voluptas",
            PrettyPrint: true,
            QuotaUser: "et",
            UploadType: "nihil",
            UploadProtocol: "rerum",
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