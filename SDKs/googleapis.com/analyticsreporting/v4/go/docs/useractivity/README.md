# UserActivity

### Available Operations

* [AnalyticsreportingUserActivitySearch](#analyticsreportinguseractivitysearch) - Returns User Activity data.

## AnalyticsreportingUserActivitySearch

Returns User Activity data.

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
    res, err := s.UserActivity.AnalyticsreportingUserActivitySearch(ctx, operations.AnalyticsreportingUserActivitySearchRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        SearchUserActivityRequest: &shared.SearchUserActivityRequest{
            ActivityTypes: []shared.SearchUserActivityRequestActivityTypesEnum{
                shared.SearchUserActivityRequestActivityTypesEnumEvent,
                shared.SearchUserActivityRequestActivityTypesEnumActivityTypeUnspecified,
                shared.SearchUserActivityRequestActivityTypesEnumEvent,
                shared.SearchUserActivityRequestActivityTypesEnumEvent,
            },
            DateRange: &shared.DateRange{
                EndDate: sdk.String("nisi"),
                StartDate: sdk.String("voluptatum"),
            },
            PageSize: sdk.Int(937466),
            PageToken: sdk.String("mollitia"),
            User: &shared.User{
                Type: shared.UserTypeEnumClientID.ToPointer(),
                UserID: sdk.String("repellendus"),
            },
            ViewID: sdk.String("facilis"),
        },
        AccessToken: sdk.String("consequuntur"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("necessitatibus"),
        Fields: sdk.String("quam"),
        Key: sdk.String("consequatur"),
        OauthToken: sdk.String("expedita"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("itaque"),
        UploadType: sdk.String("alias"),
        UploadProtocol: sdk.String("ea"),
    }, operations.AnalyticsreportingUserActivitySearchSecurity{
        Option1: &operations.AnalyticsreportingUserActivitySearchSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SearchUserActivityResponse != nil {
        // handle response
    }
}
```
