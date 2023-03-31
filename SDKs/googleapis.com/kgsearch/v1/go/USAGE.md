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
        DollarXgafv: "2",
        AccessToken: "provident",
        Alt: "proto",
        Callback: "quibusdam",
        Fields: "unde",
        Ids: []string{
            "corrupti",
            "illum",
            "vel",
            "error",
        },
        Indent: false,
        Key: "deserunt",
        Languages: []string{
            "iure",
            "magnam",
        },
        Limit: 891773,
        OauthToken: "ipsa",
        Prefix: false,
        PrettyPrint: false,
        Query: "delectus",
        QuotaUser: "tempora",
        Types: []string{
            "molestiae",
            "minus",
        },
        UploadType: "placeat",
        UploadProtocol: "voluptatum",
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