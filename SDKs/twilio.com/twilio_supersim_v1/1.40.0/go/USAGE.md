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

    req := operations.CreateEsimProfileRequest{
        Security: operations.CreateEsimProfileSecurity{
            AccountSidAuthToken: shared.SchemeAccountSidAuthToken{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        },
        Request: &operations.CreateEsimProfileCreateEsimProfileRequest{
            CallbackMethod: "PATCH",
            CallbackURL: "provident",
            Eid: "distinctio",
            GenerateMatchingID: false,
        },
    }

    ctx := context.Background()
    res, err := s.CreateEsimProfile(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.SupersimV1EsimProfile != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->