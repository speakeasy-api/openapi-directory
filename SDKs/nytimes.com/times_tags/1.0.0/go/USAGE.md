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
                Apikey: shared.SchemeApikey{
                    APIKey: "YOUR_API_KEY_HERE",
                },
            }
        ),
    }

    s := sdk.New(opts...)
    
    req := operations.GetTimestagsRequest{
        QueryParams: operations.GetTimestagsQueryParams{
            Filter: "Per",
            Max: 540949453915600111,
            Query: "ex",
        },
    }
    
    res, err := s.GetTimestags(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GetTimestags200ApplicationJSONArrays != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->