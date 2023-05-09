# Freelistingsprogram

### Available Operations

* [ContentFreelistingsprogramGet](#contentfreelistingsprogramget) - Retrieves the status and review eligibility for the free listing program. Returns errors and warnings if they require action to resolve, will become disapprovals, or impact impressions. Use `accountstatuses` to view all issues for an account.
* [ContentFreelistingsprogramRequestreview](#contentfreelistingsprogramrequestreview) - Requests a review of free listings in a specific region. This method is only available to selected merchants.

## ContentFreelistingsprogramGet

Retrieves the status and review eligibility for the free listing program. Returns errors and warnings if they require action to resolve, will become disapprovals, or impact impressions. Use `accountstatuses` to view all issues for an account.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Freelistingsprogram.ContentFreelistingsprogramGet(ctx, operations.ContentFreelistingsprogramGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("sequi"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("neque"),
        Fields: sdk.String("quo"),
        Key: sdk.String("deleniti"),
        MerchantID: "quibusdam",
        OauthToken: sdk.String("iure"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("odit"),
        UploadType: sdk.String("voluptatibus"),
        UploadProtocol: sdk.String("vel"),
    }, operations.ContentFreelistingsprogramGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FreeListingsProgramStatus != nil {
        // handle response
    }
}
```

## ContentFreelistingsprogramRequestreview

Requests a review of free listings in a specific region. This method is only available to selected merchants.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Freelistingsprogram.ContentFreelistingsprogramRequestreview(ctx, operations.ContentFreelistingsprogramRequestreviewRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        RequestReviewFreeListingsRequest: &shared.RequestReviewFreeListingsRequest{
            RegionCode: sdk.String("quibusdam"),
        },
        AccessToken: sdk.String("inventore"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("libero"),
        Fields: sdk.String("architecto"),
        Key: sdk.String("voluptatibus"),
        MerchantID: "quia",
        OauthToken: sdk.String("porro"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("aliquam"),
        UploadType: sdk.String("velit"),
        UploadProtocol: sdk.String("illo"),
    }, operations.ContentFreelistingsprogramRequestreviewSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
