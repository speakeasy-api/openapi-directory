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
    
    req := operations.AnimateImageRequest{
        QueryParams: operations.AnimateImageQueryParams{
            Type: "sit",
            URL: "voluptas",
        },
    }
    
    res, err := s.AnimateImage(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
```
<!-- End SDK Example Usage -->