<!-- Start SDK Example Usage -->
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
    res, err := s.Activities.AppsactivityActivitiesList(ctx, operations.AppsactivityActivitiesListRequest{
        Alt: shared.AltEnumJSON.ToPointer(),
        DriveAncestorID: sdk.String("corrupti"),
        DriveFileID: sdk.String("provident"),
        Fields: sdk.String("distinctio"),
        GroupingStrategy: operations.AppsactivityActivitiesListGroupingStrategyEnumNone.ToPointer(),
        Key: sdk.String("unde"),
        OauthToken: sdk.String("nulla"),
        PageSize: sdk.Int64(544883),
        PageToken: sdk.String("illum"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("vel"),
        Source: sdk.String("error"),
        UserID: sdk.String("deserunt"),
        UserIP: sdk.String("suscipit"),
    }, operations.AppsactivityActivitiesListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListActivitiesResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->