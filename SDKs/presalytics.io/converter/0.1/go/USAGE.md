<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Svgconvert(ctx, operations.SvgconvertFileToConvert{
        File: &operations.SvgconvertFileToConvertFile{
            Content: []byte("corrupti"),
            File: "provident",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FileURL != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->