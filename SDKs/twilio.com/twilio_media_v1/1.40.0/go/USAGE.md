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

    req := operations.CreateMediaProcessorCreateMediaProcessorRequest{
        Extension: "corrupti",
        ExtensionContext: "provident",
        ExtensionEnvironment: "distinctio",
        MaxDuration: 844266,
        StatusCallback: "https://tidy-mascara.org",
        StatusCallbackMethod: "POST",
    }

    ctx := context.Background()
    res, err := s.CreateMediaProcessor(ctx, req, operations.CreateMediaProcessorSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MediaV1MediaProcessor != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->