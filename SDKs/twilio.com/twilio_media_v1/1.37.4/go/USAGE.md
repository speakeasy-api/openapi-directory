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
            Extension: "sit",
            ExtensionContext: "voluptas",
            ExtensionEnvironment: "culpa",
            MaxDuration: 501233450539197794,
            StatusCallback: "consequuntur",
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