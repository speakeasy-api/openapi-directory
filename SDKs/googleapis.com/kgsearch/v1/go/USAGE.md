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
    
    req := operations.KgsearchEntitiesSearchRequest{
        QueryParams: operations.KgsearchEntitiesSearchQueryParams{
            DollarXgafv: "2",
            AccessToken: "possimus",
            Alt: "media",
            Callback: "nihil",
            Fields: "est",
            Ids: []string{
                "sint",
            },
            Indent: true,
            Key: "cupiditate",
            Languages: []string{
                "officia",
            },
            Limit: 6013747793344681092,
            OauthToken: "nihil",
            Prefix: false,
            PrettyPrint: false,
            Query: "facere",
            QuotaUser: "minima",
            Types: []string{
                "magnam",
                "aliquid",
                "in",
            },
            UploadType: "perspiciatis",
            UploadProtocol: "vitae",
        },
    }
    
    res, err := s.Entities.KgsearchEntitiesSearch(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.SearchResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->