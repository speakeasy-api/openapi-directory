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