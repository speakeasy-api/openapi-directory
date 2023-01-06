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
                APIKeyHeader: &shared.SchemeAPIKeyHeader{
                    APIKey: "YOUR_API_KEY_HERE",
                },
            }
        ),
    }

    s := sdk.New(opts...)
    
    req := operations.RotoballerArticlesRequest{
        PathParams: operations.RotoballerArticlesPathParams{
            Format: "xml",
        },
    }
    
    res, err := s.RotoballerArticles(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Articles != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->