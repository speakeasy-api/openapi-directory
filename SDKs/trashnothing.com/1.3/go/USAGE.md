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
            Oauth2Code: &shared.SchemeOauth2Code{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        }),
    )

    req := operations.ContactModeratorsRequest{
        PathParams: operations.ContactModeratorsPathParams{
            GroupID: "corrupti",
        },
        Request: operations.ContactModeratorsRequestBody{
            Message: "provident",
            Subject: "distinctio",
        },
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