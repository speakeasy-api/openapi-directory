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
            Name: "aspernatur",
        },
        QueryParams: operations.DrivelabelsLabelsGetQueryParams{
            DollarXgafv: "1",
            AccessToken: "dolor",
            Alt: "media",
            Callback: "et",
            Fields: "a",
            Key: "quo",
            LanguageCode: "vero",
            OauthToken: "dolorem",
            PrettyPrint: true,
            QuotaUser: "placeat",
            UploadType: "hic",
            UploadProtocol: "et",
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