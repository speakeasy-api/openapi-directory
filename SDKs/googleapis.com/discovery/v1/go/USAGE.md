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
    
    req := operations.DiscoveryApisGetRestRequest{
        PathParams: operations.DiscoveryApisGetRestPathParams{
            API: "sit",
            Version: "voluptas",
        },
        QueryParams: operations.DiscoveryApisGetRestQueryParams{
            Alt: "json",
            Fields: "expedita",
            Key: "consequuntur",
            OauthToken: "dolor",
            PrettyPrint: true,
            QuotaUser: "voluptas",
            UserIP: "fugit",
        },
    }
    
    res, err := s.Apis.DiscoveryApisGetRest(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.RestDescription != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->