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
    
    req := operations.ConvertRequest{
        Request: &operations.ConvertRequestBody{
            HundredsForm: "sit",
            TheNumber: "voluptas",
            Unit: "culpa",
        },
    }
    
    res, err := s.Convert(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
```
<!-- End SDK Example Usage -->