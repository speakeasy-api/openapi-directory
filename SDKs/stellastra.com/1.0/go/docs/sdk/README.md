# SDK

## Overview

Stellastra makes it easy to get reviews for your cybersecurity solution in real-time with its platform-agnostic REST API.

Stellastra is a simple API which allows you to easily generate star ratings and reviews for your cybersecurity solution.
<https://stellastra.com/docs/api>
### Available Operations

* [PostPostReview](#postpostreview) - Posts the user's review to Stellastra

## PostPostReview

Posts the user's review to Stellastra

<https://stellastra.com/docs/api>

### Example Usage

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
    res, err := s.SDK.PostPostReview(ctx, operations.PostPostReviewRequest{
        RequestBody: operations.PostPostReviewRequestBody{
            Rating: 5,
            UserEmail: "johnsmith@usercompanyxyz.com",
            UserName: sdk.String("John"),
        },
        Rating: operations.PostPostReviewRatingEnumThree,
        UserEmail: "illum",
        UserName: sdk.String("Henry.Mueller"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostPostReview200ApplicationJSONObject != nil {
        // handle response
    }
}
```
