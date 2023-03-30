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

    req := operations.DeleteJsappsCodeJSONRequest{
        PathParams: operations.DeleteJsappsCodeJSONPathParams{
            Code: "corrupti",
        },
        QueryParams: operations.DeleteJsappsCodeJSONQueryParams{
            Authtoken: "provident",
            Login: "distinctio",
        },
    }

    ctx := context.Background()
    res, err := s.Apps.DeleteJsappsCodeJSON(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteJsappsCodeJSON200ApplicationJSONString != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->