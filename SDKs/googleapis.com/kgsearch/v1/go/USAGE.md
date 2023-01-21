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
            AccessToken: "voluptas",
            Alt: "media",
            Callback: "expedita",
            Fields: "consequuntur",
            Ids: []string{
                "expedita",
                "voluptas",
            },
            Indent: true,
            Key: "et",
            Languages: []string{
                "rerum",
            },
            Limit: 7837839688282259259,
            OauthToken: "debitis",
            Prefix: true,
            PrettyPrint: false,
            Query: "ut",
            QuotaUser: "dolorem",
            Types: []string{
                "voluptate",
                "iste",
            },
            UploadType: "vitae",
            UploadProtocol: "totam",
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