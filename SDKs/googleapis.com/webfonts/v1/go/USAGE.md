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
            AccessToken: "soluta",
            Alt: "proto",
            Callback: "hic",
            Fields: "recusandae",
            Key: "earum",
            OauthToken: "quidem",
            PrettyPrint: false,
            QuotaUser: "perspiciatis",
            Sort: "DATE",
            UploadType: "eveniet",
            UploadProtocol: "iure",
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