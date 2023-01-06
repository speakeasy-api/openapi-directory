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
            ProjectID: "et",
        },
        QueryParams: operations.ToolresultsProjectsGetSettingsQueryParams{
            DollarXgafv: "1",
            AccessToken: "expedita",
            Alt: "proto",
            Callback: "officiis",
            Fields: "ipsam",
            Key: "voluptatem",
            OauthToken: "voluptatem",
            PrettyPrint: false,
            QuotaUser: "sit",
            UploadType: "explicabo",
            UploadProtocol: "aliquam",
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