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
    
    req := operations.ToolresultsProjectsGetSettingsRequest{
        Security: operations.ToolresultsProjectsGetSettingsSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.ToolresultsProjectsGetSettingsPathParams{
            ProjectID: "est",
        },
        QueryParams: operations.ToolresultsProjectsGetSettingsQueryParams{
            DollarXgafv: "2",
            AccessToken: "molestiae",
            Alt: "media",
            Callback: "est",
            Fields: "blanditiis",
            Key: "quisquam",
            OauthToken: "doloremque",
            PrettyPrint: false,
            QuotaUser: "est",
            UploadType: "quas",
            UploadProtocol: "rerum",
        },
    }
    
    res, err := s.Projects.ToolresultsProjectsGetSettings(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.ProjectSettings != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->