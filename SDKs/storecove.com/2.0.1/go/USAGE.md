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
                Bearer: shared.SchemeBearer{
                    APIKey: "YOUR_API_KEY_HERE",
                },
            }
        ),
    }

    s := sdk.New(opts...)
    
    req := operations.CreateAdministrationRequest{
        PathParams: operations.CreateAdministrationPathParams{
            LegalEntityID: 1447709226612322949,
        },
        Request: "nihil",
    }
    
    res, err := s.Administrations.CreateAdministration(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Administration != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->