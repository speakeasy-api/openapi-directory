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

    req := operations.CreateEsimProfileCreateEsimProfileRequest{
        CallbackMethod: "PATCH",
        CallbackURL: "provident",
        Eid: "distinctio",
        GenerateMatchingID: false,
    }

    ctx := context.Background()
    res, err := s.CreateEsimProfile(ctx, req, operations.CreateEsimProfileSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SupersimV1EsimProfile != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->