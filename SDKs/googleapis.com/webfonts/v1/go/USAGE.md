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
    
    req := operations.WebfontsWebfontsListRequest{
        QueryParams: operations.WebfontsWebfontsListQueryParams{
            DollarXgafv: "1",
            AccessToken: "voluptas",
            Alt: "media",
            Callback: "expedita",
            Fields: "consequuntur",
            Key: "dolor",
            OauthToken: "expedita",
            PrettyPrint: true,
            QuotaUser: "fugit",
            Sort: "SORT_UNDEFINED",
            UploadType: "nihil",
            UploadProtocol: "rerum",
        },
    }
    
    res, err := s.Webfonts.WebfontsWebfontsList(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.WebfontList != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->