<!-- Start SDK Example Usage -->
```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    opts := []sdk.SDKOption{
        sdk.WithSecurity(
            shared.Security{
                MwoAuth: shared.SchemeMwoAuth{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                },
            }
        ),
    }

    s := sdk.New(opts...)
    
    req := operations.DeleteCacheRequest{
        PathParams: operations.DeleteCachePathParams{
            Key: "sit",
        },
    }
    
    res, err := s.DeleteCache(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.OperationStatus != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->