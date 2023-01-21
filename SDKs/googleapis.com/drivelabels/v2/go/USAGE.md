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
            Name: "sit",
        },
        QueryParams: operations.DrivelabelsLabelsGetQueryParams{
            DollarXgafv: "1",
            AccessToken: "culpa",
            Alt: "media",
            Callback: "consequuntur",
            Fields: "dolor",
            Key: "expedita",
            LanguageCode: "voluptas",
            OauthToken: "fugit",
            PrettyPrint: false,
            QuotaUser: "nihil",
            UploadType: "rerum",
            UploadProtocol: "dicta",
            UseAdminAccess: true,
            View: "LABEL_VIEW_BASIC",
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