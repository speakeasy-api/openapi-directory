<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.PostPostReview(ctx, operations.PostPostReviewRequest{
        RequestBody: operations.PostPostReviewRequestBody{
            Rating: 5,
            UserEmail: "johnsmith@usercompanyxyz.com",
            UserName: sdk.String("John"),
        },
        Rating: operations.PostPostReviewRatingEnumThree,
        UserEmail: "provident",
        UserName: sdk.String("Micheal_Sporer"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostPostReview200ApplicationJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->