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
            BasicAuth: shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    req := operations.PostPostReviewRequest{
        QueryParams: operations.PostPostReviewQueryParams{
            Rating: "3",
            UserEmail: "deserunt",
            UserName: "Michale_Sporer",
        },
        Request: operations.PostPostReviewRequestBody{
            Rating: 5,
            UserEmail: "johnsmith@usercompanyxyz.com",
            UserName: "John",
        },
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