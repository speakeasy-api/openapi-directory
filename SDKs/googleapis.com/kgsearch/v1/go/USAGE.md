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

    req := operations.KgsearchEntitiesSearchRequest{
        QueryParams: operations.KgsearchEntitiesSearchQueryParams{
            DollarXgafv: "2",
            AccessToken: "deserunt",
            Alt: "proto",
            Callback: "nulla",
            Fields: "id",
            Ids: []string{
                "perspiciatis",
                "nulla",
                "nihil",
                "fuga",
            },
            Indent: false,
            Key: "facilis",
            Languages: []string{
                "iusto",
                "ullam",
            },
            Limit: 891773,
            OauthToken: "inventore",
            Prefix: false,
            PrettyPrint: false,
            Query: "sapiente",
            QuotaUser: "enim",
            Types: []string{
                "voluptatum",
                "autem",
            },
            UploadType: "vel",
            UploadProtocol: "non",
        },
    }

    ctx := context.Background()
    res, err := s.Entities.KgsearchEntitiesSearch(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.SearchResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->