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

    req := operations.IdeahubIdeasListRequest{
        QueryParams: operations.IdeahubIdeasListQueryParams{
            DollarXgafv: "2",
            AccessToken: "deserunt",
            Alt: "proto",
            Callback: "nulla",
            Fields: "id",
            Filter: "vero",
            Key: "perspiciatis",
            OauthToken: "nulla",
            OrderBy: "nihil",
            PageSize: 623564,
            PageToken: "facilis",
            Parent: "eum",
            PrettyPrint: false,
            QuotaUser: "iusto",
            UploadType: "ullam",
            UploadProtocol: "saepe",
        },
    }

    ctx := context.Background()
    res, err := s.Ideas.IdeahubIdeasList(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleSearchIdeahubV1alphaListIdeasResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->