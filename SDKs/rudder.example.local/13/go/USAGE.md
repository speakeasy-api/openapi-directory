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
                APITokens: shared.SchemeAPITokens{
                    APIKey: "YOUR_API_KEY_HERE",
                },
            }
        ),
    }

    s := sdk.New(opts...)
    
    res, err := s.APIInfo.APIGeneralInformations(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.APIGeneralInformations200ApplicationJSONObject != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->