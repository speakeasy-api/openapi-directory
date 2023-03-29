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

    req := operations.GetFamilyDetailsRequest{
        QueryParams: operations.GetFamilyDetailsQueryParams{
            ID: "{family_id}",
        },
    }

    ctx := context.Background()
    res, err := s.LanguageModelDirectAccess.GetFamilyDetails(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GetFamilyDetails200ApplicationJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->