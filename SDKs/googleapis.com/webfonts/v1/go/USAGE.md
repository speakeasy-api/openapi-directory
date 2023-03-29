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

    req := operations.WebfontsWebfontsListRequest{
        QueryParams: operations.WebfontsWebfontsListQueryParams{
            DollarXgafv: "2",
            AccessToken: "deserunt",
            Alt: "proto",
            Callback: "nulla",
            Fields: "id",
            Key: "vero",
            OauthToken: "perspiciatis",
            PrettyPrint: false,
            QuotaUser: "nulla",
            Sort: "DATE",
            UploadType: "fuga",
            UploadProtocol: "facilis",
        },
    }

    ctx := context.Background()
    res, err := s.Webfonts.WebfontsWebfontsList(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.WebfontList != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->