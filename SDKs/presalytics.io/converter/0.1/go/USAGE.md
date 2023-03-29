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

    req := operations.SvgconvertRequest{
        Request: operations.SvgconvertFileToConvert{
            File: &operations.SvgconvertFileToConvertFile{
                Content: []byte("unde"),
                File: "deserunt",
            },
        },
    }

    ctx := context.Background()
    res, err := s.Svgconvert(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.FileURL != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->