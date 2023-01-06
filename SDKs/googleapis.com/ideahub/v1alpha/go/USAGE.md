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
            AccessToken: "provident",
            Alt: "media",
            Callback: "quibusdam",
            Fields: "odio",
            Filter: "non",
            Key: "exercitationem",
            OauthToken: "exercitationem",
            OrderBy: "est",
            PageSize: 8108418015301964494,
            PageToken: "nobis",
            Parent: "sit",
            PrettyPrint: false,
            QuotaUser: "commodi",
            UploadType: "deserunt",
            UploadProtocol: "in",
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