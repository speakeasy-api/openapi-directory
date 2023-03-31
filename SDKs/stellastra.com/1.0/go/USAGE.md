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
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    req := operations.PostPostReviewRequest{
        RequestBody: operations.PostPostReviewRequestBody{
            Rating: 5,
            UserEmail: "johnsmith@usercompanyxyz.com",
            UserName: "John",
        },
        Rating: "3",
        UserEmail: "provident",
        UserName: "Micheal_Sporer",
    }

    ctx := context.Background()
    res, err := s.PostPostReview(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.PostPostReview200ApplicationJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->