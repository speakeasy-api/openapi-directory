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
                APIKey: shared.SchemeAPIKey{
                    APIKey: "YOUR_API_KEY_HERE",
                },
                UserID: shared.SchemeUserID{
                    APIKey: "YOUR_API_KEY_HERE",
                },
            }
        ),
    }

    s := sdk.New(opts...)
    
    req := operations.BadWordFilterRequest{
        Request: &operations.BadWordFilterRequestBody{
            Catalog: "quisquam",
            CensorCharacter: "quasi",
            Content: "delectus",
            OutputCase: "camel",
        },
    }
    
    res, err := s.DataTools.BadWordFilter(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.BadWordFilterResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->