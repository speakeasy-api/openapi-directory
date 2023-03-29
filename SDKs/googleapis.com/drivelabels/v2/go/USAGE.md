<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.DrivelabelsLabelsGetRequest{
        PathParams: operations.DrivelabelsLabelsGetPathParams{
            Name: "unde",
        },
        QueryParams: operations.DrivelabelsLabelsGetQueryParams{
            DollarXgafv: "2",
            AccessToken: "porro",
            Alt: "proto",
            Callback: "id",
            Fields: "vero",
            Key: "perspiciatis",
            LanguageCode: "nulla",
            OauthToken: "nihil",
            PrettyPrint: false,
            QuotaUser: "fuga",
            UploadType: "facilis",
            UploadProtocol: "eum",
            UseAdminAccess: false,
            View: "LABEL_VIEW_BASIC",
        },
    }

    ctx := context.Background()
    res, err := s.Labels.DrivelabelsLabelsGet(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleAppsDriveLabelsV2Label != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->