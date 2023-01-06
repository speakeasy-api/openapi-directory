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
            Filename: "laboriosam",
            Source: "ab",
            Validate: "on",
        },
    }
    
    res, err := s.Conversion.Convert(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Convert200ApplicationJSONAny != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->