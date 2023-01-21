<!-- Start SDK Example Usage -->
```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()
    
    req := operations.GetFeaturesFeatureIDRequest{
        PathParams: operations.GetFeaturesFeatureIDPathParams{
            FeatureID: 8717895732742165505,
        },
    }
    
    res, err := s.Feature.GetFeaturesFeatureID(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
```
<!-- End SDK Example Usage -->