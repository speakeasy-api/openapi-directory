# Activities

### Available Operations

* [AppsactivityActivitiesList](#appsactivityactivitieslist) - Returns a list of activities visible to the current logged in user. Visible activities are determined by the visibility settings of the object that was acted on, e.g. Drive files a user can see. An activity is a record of past events. Multiple events may be merged if they are similar. A request is scoped to activities from a given Google service using the source parameter.

## AppsactivityActivitiesList

Returns a list of activities visible to the current logged in user. Visible activities are determined by the visibility settings of the object that was acted on, e.g. Drive files a user can see. An activity is a record of past events. Multiple events may be merged if they are similar. A request is scoped to activities from a given Google service using the source parameter.

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
    res, err := s.Activities.AppsactivityActivitiesList(ctx, operations.AppsactivityActivitiesListRequest{
        Alt: shared.AltEnumJSON.ToPointer(),
        DriveAncestorID: sdk.String("iure"),
        DriveFileID: sdk.String("magnam"),
        Fields: sdk.String("debitis"),
        GroupingStrategy: operations.AppsactivityActivitiesListGroupingStrategyEnumDriveUI.ToPointer(),
        Key: sdk.String("delectus"),
        OauthToken: sdk.String("tempora"),
        PageSize: sdk.Int64(383441),
        PageToken: sdk.String("molestiae"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("minus"),
        Source: sdk.String("placeat"),
        UserID: sdk.String("voluptatum"),
        UserIP: sdk.String("iusto"),
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
