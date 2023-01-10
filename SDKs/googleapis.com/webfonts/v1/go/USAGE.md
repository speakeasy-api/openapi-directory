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
            DollarXgafv: "2",
            AccessToken: "consequatur",
            Alt: "json",
            Callback: "at",
            Fields: "omnis",
            Key: "dolores",
            OauthToken: "perferendis",
            PrettyPrint: false,
            QuotaUser: "debitis",
            Sort: "STYLE",
            UploadType: "doloribus",
            UploadProtocol: "fugiat",
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