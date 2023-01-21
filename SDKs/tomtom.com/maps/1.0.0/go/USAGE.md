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
            }
        ),
    }

    s := sdk.New(opts...)
    
    req := operations.GetMapVersionNumberCopyrightsFormatRequest{
        PathParams: operations.GetMapVersionNumberCopyrightsFormatPathParams{
            Format: "json",
            VersionNumber: 2259404117704393152,
        },
        QueryParams: operations.GetMapVersionNumberCopyrightsFormatQueryParams{
            Callback: "culpa",
        },
    }
    
    res, err := s.Copyrights.GetMapVersionNumberCopyrightsFormat(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
```
<!-- End SDK Example Usage -->