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
            DollarXgafv: "1",
            AccessToken: "ut",
            Alt: "json",
            Callback: "dolore",
            Fields: "nihil",
            Ids: []string{
                "saepe",
                "illum",
            },
            Indent: false,
            Key: "atque",
            Languages: []string{
                "ipsum",
                "ut",
                "et",
            },
            Limit: 8686164055761658444,
            OauthToken: "assumenda",
            Prefix: true,
            PrettyPrint: false,
            Query: "sed",
            QuotaUser: "ducimus",
            Types: []string{
                "id",
            },
            UploadType: "enim",
            UploadProtocol: "quia",
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