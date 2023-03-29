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
            API: "unde",
            Version: "deserunt",
        },
        QueryParams: operations.DiscoveryApisGetRestQueryParams{
            Alt: "json",
            Fields: "nulla",
            Key: "id",
            OauthToken: "vero",
            PrettyPrint: false,
            QuotaUser: "perspiciatis",
            UserIP: "nulla",
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