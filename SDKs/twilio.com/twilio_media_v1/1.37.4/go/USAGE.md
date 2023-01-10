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
    
    req := operations.CreateMediaProcessorRequest{
        Security: operations.CreateMediaProcessorSecurity{
            AccountSidAuthToken: shared.SchemeAccountSidAuthToken{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        },
        Request: &operations.CreateMediaProcessorCreateMediaProcessorRequest{
            Extension: "repudiandae",
            ExtensionContext: "placeat",
            ExtensionEnvironment: "non",
            MaxDuration: 7670321804354313239,
            StatusCallback: "autem",
            StatusCallbackMethod: "PUT",
        },
    }
    
    res, err := s.CreateMediaProcessor(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.MediaV1MediaProcessor != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->