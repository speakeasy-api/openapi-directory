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
    
    req := operations.CivicinfoDivisionsSearchRequest{
        QueryParams: operations.CivicinfoDivisionsSearchQueryParams{
            DollarXgafv: "1",
            AccessToken: "voluptas",
            Alt: "media",
            Callback: "expedita",
            Fields: "consequuntur",
            Key: "dolor",
            OauthToken: "expedita",
            PrettyPrint: true,
            Query: "fugit",
            QuotaUser: "et",
            UploadType: "nihil",
            UploadProtocol: "rerum",
        },
    }
    
    res, err := s.Divisions.CivicinfoDivisionsSearch(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.DivisionSearchResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->