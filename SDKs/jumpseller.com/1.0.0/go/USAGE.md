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
    res, err := s.Apps.DeleteJsappsCodeJSON(ctx, operations.DeleteJsappsCodeJSONRequest{
        Authtoken: "corrupti",
        Code: "provident",
        Login: "distinctio",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteJsappsCodeJSON200ApplicationJSONString != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->