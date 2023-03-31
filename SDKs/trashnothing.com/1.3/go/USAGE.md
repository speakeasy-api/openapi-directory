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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2Code: sdk.String("Bearer YOUR_ACCESS_TOKEN_HERE"),
        }),
    )

    req := operations.ContactModeratorsRequest{
        RequestBody: operations.ContactModeratorsRequestBody{
            Message: "corrupti",
            Subject: "provident",
        },
        GroupID: "distinctio",
    }

    ctx := context.Background()
    res, err := s.Groups.ContactModerators(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->