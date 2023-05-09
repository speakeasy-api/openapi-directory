# PageViews

### Available Operations

* [BloggerPageViewsGet](#bloggerpageviewsget) - Gets page views by blog id.

## BloggerPageViewsGet

Gets page views by blog id.

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
    res, err := s.PageViews.BloggerPageViewsGet(ctx, operations.BloggerPageViewsGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("quasi"),
        Alt: shared.AltEnumProto.ToPointer(),
        BlogID: "sint",
        Callback: sdk.String("veritatis"),
        Fields: sdk.String("itaque"),
        Key: sdk.String("incidunt"),
        OauthToken: sdk.String("enim"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("consequatur"),
        Range: []BloggerPageViewsGetRangeEnum{
            operations.BloggerPageViewsGetRangeEnumSevenDays,
            operations.BloggerPageViewsGetRangeEnumAll,
            operations.BloggerPageViewsGetRangeEnumThirtyDays,
        },
        UploadType: sdk.String("distinctio"),
        UploadProtocol: sdk.String("quibusdam"),
    }, operations.BloggerPageViewsGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Pageviews != nil {
        // handle response
    }
}
```
