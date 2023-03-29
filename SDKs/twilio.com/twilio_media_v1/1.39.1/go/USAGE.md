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

    req := operations.CreateMediaProcessorRequest{
        Security: operations.CreateMediaProcessorSecurity{
            AccountSidAuthToken: shared.SchemeAccountSidAuthToken{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        },
        Request: &operations.CreateMediaProcessorCreateMediaProcessorRequest{
            Extension: "unde",
            ExtensionContext: "deserunt",
            ExtensionEnvironment: "porro",
            MaxDuration: 844266,
            StatusCallback: "https://ruthie.name",
            StatusCallbackMethod: "DELETE",
        },
    }

    ctx := context.Background()
    res, err := s.CreateMediaProcessor(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.MediaV1MediaProcessor != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->