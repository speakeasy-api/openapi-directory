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
            DollarXgafv: "2",
            AccessToken: "sed",
            Alt: "json",
            Callback: "mollitia",
            Fields: "nulla",
            Filter: "voluptatem",
            Key: "dolor",
            OauthToken: "labore",
            OrderBy: "voluptatem",
            PageSize: 2574732703467464352,
            PageToken: "animi",
            Parent: "possimus",
            PrettyPrint: false,
            QuotaUser: "maiores",
            UploadType: "nobis",
            UploadProtocol: "id",
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