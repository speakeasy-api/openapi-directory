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
    
    req := operations.CurrentSeasonRequest{
        PathParams: operations.CurrentSeasonPathParams{
            Format: "XML",
        },
    }
    
    res, err := s.CurrentSeason(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Season != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->