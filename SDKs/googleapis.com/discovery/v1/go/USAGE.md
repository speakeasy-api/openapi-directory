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
        Alt: "json",
        API: "corrupti",
        Fields: "provident",
        Key: "distinctio",
        OauthToken: "quibusdam",
        PrettyPrint: false,
        QuotaUser: "unde",
        UserIP: "nulla",
        Version: "corrupti",
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