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

    req := operations.DiscoveryApisGetRestRequest{
        PathParams: operations.DiscoveryApisGetRestPathParams{
            API: "corrupti",
            Version: "provident",
        },
        QueryParams: operations.DiscoveryApisGetRestQueryParams{
            Alt: "json",
            Fields: "distinctio",
            Key: "quibusdam",
            OauthToken: "unde",
            PrettyPrint: false,
            QuotaUser: "nulla",
            UserIP: "corrupti",
        },
    }

    ctx := context.Background()
    res, err := s.Apis.DiscoveryApisGetRest(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.RestDescription != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->