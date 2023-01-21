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
    
    req := operations.IdeahubIdeasListRequest{
        QueryParams: operations.IdeahubIdeasListQueryParams{
            DollarXgafv: "1",
            AccessToken: "voluptas",
            Alt: "media",
            Callback: "expedita",
            Fields: "consequuntur",
            Filter: "dolor",
            Key: "expedita",
            OauthToken: "voluptas",
            OrderBy: "fugit",
            PageSize: 1543572285742637646,
            PageToken: "nihil",
            Parent: "rerum",
            PrettyPrint: false,
            QuotaUser: "debitis",
            UploadType: "voluptatum",
            UploadProtocol: "et",
        },
    }
    
    res, err := s.Ideas.IdeahubIdeasList(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleSearchIdeahubV1alphaListIdeasResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->