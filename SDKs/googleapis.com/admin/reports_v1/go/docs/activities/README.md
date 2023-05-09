# Activities

### Available Operations

* [ReportsActivitiesList](#reportsactivitieslist) - Retrieves a list of activities for a specific customer's account and application such as the Admin console application or the Google Drive application. For more information, see the guides for administrator and Google Drive activity reports. For more information about the activity report's parameters, see the activity parameters reference guides. 
* [ReportsActivitiesWatch](#reportsactivitieswatch) - Start receiving notifications for account activities. For more information, see Receiving Push Notifications.

## ReportsActivitiesList

Retrieves a list of activities for a specific customer's account and application such as the Admin console application or the Google Drive application. For more information, see the guides for administrator and Google Drive activity reports. For more information about the activity report's parameters, see the activity parameters reference guides. 

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
    res, err := s.Activities.ReportsActivitiesList(ctx, operations.ReportsActivitiesListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("iusto"),
        ActorIPAddress: sdk.String("excepturi"),
        Alt: shared.AltEnumMedia.ToPointer(),
        ApplicationName: operations.ReportsActivitiesListApplicationNameEnumDataStudio,
        Callback: sdk.String("temporibus"),
        CustomerID: sdk.String("ab"),
        EndTime: sdk.String("quis"),
        EventName: sdk.String("veritatis"),
        Fields: sdk.String("deserunt"),
        Filters: sdk.String("perferendis"),
        GroupIDFilter: sdk.String("ipsam"),
        Key: sdk.String("repellendus"),
        MaxResults: sdk.Int64(957156),
        OauthToken: sdk.String("quo"),
        OrgUnitID: sdk.String("odit"),
        PageToken: sdk.String("at"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("at"),
        StartTime: sdk.String("maiores"),
        UploadType: sdk.String("molestiae"),
        UploadProtocol: sdk.String("quod"),
        UserKey: "quod",
    }, operations.ReportsActivitiesListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Activities != nil {
        // handle response
    }
}
```

## ReportsActivitiesWatch

Start receiving notifications for account activities. For more information, see Receiving Push Notifications.

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
    res, err := s.Activities.ReportsActivitiesWatch(ctx, operations.ReportsActivitiesWatchRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        Channel: &shared.Channel{
            Address: sdk.String("7617 McCullough Coves"),
            Expiration: sdk.String("deleniti"),
            ID: sdk.String("fc816742-cb73-4920-9929-396fea7596eb"),
            Kind: sdk.String("architecto"),
            Params: map[string]string{
                "reiciendis": "est",
            },
            Payload: sdk.Bool(false),
            ResourceID: sdk.String("mollitia"),
            ResourceURI: sdk.String("laborum"),
            Token: sdk.String("dolores"),
            Type: sdk.String("dolorem"),
        },
        AccessToken: sdk.String("corporis"),
        ActorIPAddress: sdk.String("explicabo"),
        Alt: shared.AltEnumProto.ToPointer(),
        ApplicationName: operations.ReportsActivitiesWatchApplicationNameEnumGplus,
        Callback: sdk.String("omnis"),
        CustomerID: sdk.String("nemo"),
        EndTime: sdk.String("minima"),
        EventName: sdk.String("excepturi"),
        Fields: sdk.String("accusantium"),
        Filters: sdk.String("iure"),
        GroupIDFilter: sdk.String("culpa"),
        Key: sdk.String("doloribus"),
        MaxResults: sdk.Int64(958950),
        OauthToken: sdk.String("architecto"),
        OrgUnitID: sdk.String("mollitia"),
        PageToken: sdk.String("dolorem"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("culpa"),
        StartTime: sdk.String("consequuntur"),
        UploadType: sdk.String("repellat"),
        UploadProtocol: sdk.String("mollitia"),
        UserKey: "occaecati",
    }, operations.ReportsActivitiesWatchSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Channel != nil {
        // handle response
    }
}
```
