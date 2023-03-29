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

    req := operations.GetBasicUserInformationRequest{
        PathParams: operations.GetBasicUserInformationPathParams{
            Token: "unde",
        },
    }

    ctx := context.Background()
    res, err := s.AuthController.GetBasicUserInformation(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->