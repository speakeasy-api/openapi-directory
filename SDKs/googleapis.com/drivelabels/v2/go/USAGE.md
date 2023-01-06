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
    
    req := operations.DrivelabelsLabelsGetRequest{
        PathParams: operations.DrivelabelsLabelsGetPathParams{
            Name: "consequatur",
        },
        QueryParams: operations.DrivelabelsLabelsGetQueryParams{
            DollarXgafv: "1",
            AccessToken: "dolorem",
            Alt: "media",
            Callback: "pariatur",
            Fields: "consequuntur",
            Key: "provident",
            LanguageCode: "necessitatibus",
            OauthToken: "cum",
            PrettyPrint: true,
            QuotaUser: "et",
            UploadType: "quia",
            UploadProtocol: "magnam",
            UseAdminAccess: true,
            View: "LABEL_VIEW_FULL",
        },
    }
    
    res, err := s.Labels.DrivelabelsLabelsGet(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleAppsDriveLabelsV2Label != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->