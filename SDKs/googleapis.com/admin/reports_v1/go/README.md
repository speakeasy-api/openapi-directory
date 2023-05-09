# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/admin/reports_v1/go
```
<!-- End SDK Installation -->

## SDK Example Usage
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
    res, err := s.Activities.ReportsActivitiesList(ctx, operations.ReportsActivitiesListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("provident"),
        ActorIPAddress: sdk.String("distinctio"),
        Alt: shared.AltEnumProto.ToPointer(),
        ApplicationName: operations.ReportsActivitiesListApplicationNameEnumMobile,
        Callback: sdk.String("nulla"),
        CustomerID: sdk.String("corrupti"),
        EndTime: sdk.String("illum"),
        EventName: sdk.String("vel"),
        Fields: sdk.String("error"),
        Filters: sdk.String("deserunt"),
        GroupIDFilter: sdk.String("suscipit"),
        Key: sdk.String("iure"),
        MaxResults: sdk.Int64(297534),
        OauthToken: sdk.String("debitis"),
        OrgUnitID: sdk.String("ipsa"),
        PageToken: sdk.String("delectus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("tempora"),
        StartTime: sdk.String("suscipit"),
        UploadType: sdk.String("molestiae"),
        UploadProtocol: sdk.String("minus"),
        UserKey: "placeat",
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
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Activities](docs/activities/README.md)

* [ReportsActivitiesList](docs/activities/README.md#reportsactivitieslist) - Retrieves a list of activities for a specific customer's account and application such as the Admin console application or the Google Drive application. For more information, see the guides for administrator and Google Drive activity reports. For more information about the activity report's parameters, see the activity parameters reference guides. 
* [ReportsActivitiesWatch](docs/activities/README.md#reportsactivitieswatch) - Start receiving notifications for account activities. For more information, see Receiving Push Notifications.

### [Channels](docs/channels/README.md)

* [AdminChannelsStop](docs/channels/README.md#adminchannelsstop) - Stop watching resources through this channel.

### [CustomerUsageReports](docs/customerusagereports/README.md)

* [ReportsCustomerUsageReportsGet](docs/customerusagereports/README.md#reportscustomerusagereportsget) - Retrieves a report which is a collection of properties and statistics for a specific customer's account. For more information, see the Customers Usage Report guide. For more information about the customer report's parameters, see the Customers Usage parameters reference guides. 

### [EntityUsageReports](docs/entityusagereports/README.md)

* [ReportsEntityUsageReportsGet](docs/entityusagereports/README.md#reportsentityusagereportsget) - Retrieves a report which is a collection of properties and statistics for entities used by users within the account. For more information, see the Entities Usage Report guide. For more information about the entities report's parameters, see the Entities Usage parameters reference guides.

### [UserUsageReport](docs/userusagereport/README.md)

* [ReportsUserUsageReportGet](docs/userusagereport/README.md#reportsuserusagereportget) - Retrieves a report which is a collection of properties and statistics for a set of users with the account. For more information, see the User Usage Report guide. For more information about the user report's parameters, see the Users Usage parameters reference guides.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
