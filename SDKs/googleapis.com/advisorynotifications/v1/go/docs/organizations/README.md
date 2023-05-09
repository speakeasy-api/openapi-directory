# Organizations

### Available Operations

* [AdvisorynotificationsOrganizationsLocationsNotificationsGet](#advisorynotificationsorganizationslocationsnotificationsget) - Gets a notification.
* [AdvisorynotificationsOrganizationsLocationsNotificationsList](#advisorynotificationsorganizationslocationsnotificationslist) - Lists notifications under a given parent.

## AdvisorynotificationsOrganizationsLocationsNotificationsGet

Gets a notification.

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
    res, err := s.Organizations.AdvisorynotificationsOrganizationsLocationsNotificationsGet(ctx, operations.AdvisorynotificationsOrganizationsLocationsNotificationsGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("tempora"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("molestiae"),
        Fields: sdk.String("minus"),
        Key: sdk.String("placeat"),
        LanguageCode: sdk.String("voluptatum"),
        Name: "Miriam Huel",
        OauthToken: sdk.String("ab"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quis"),
        UploadType: sdk.String("veritatis"),
        UploadProtocol: sdk.String("deserunt"),
    }, operations.AdvisorynotificationsOrganizationsLocationsNotificationsGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudAdvisorynotificationsV1Notification != nil {
        // handle response
    }
}
```

## AdvisorynotificationsOrganizationsLocationsNotificationsList

Lists notifications under a given parent.

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
    res, err := s.Organizations.AdvisorynotificationsOrganizationsLocationsNotificationsList(ctx, operations.AdvisorynotificationsOrganizationsLocationsNotificationsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("ipsam"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("sapiente"),
        Fields: sdk.String("quo"),
        Key: sdk.String("odit"),
        LanguageCode: sdk.String("at"),
        OauthToken: sdk.String("at"),
        PageSize: sdk.Int64(978619),
        PageToken: sdk.String("molestiae"),
        Parent: "quod",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quod"),
        UploadType: sdk.String("esse"),
        UploadProtocol: sdk.String("totam"),
        View: operations.AdvisorynotificationsOrganizationsLocationsNotificationsListViewEnumFull.ToPointer(),
    }, operations.AdvisorynotificationsOrganizationsLocationsNotificationsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudAdvisorynotificationsV1ListNotificationsResponse != nil {
        // handle response
    }
}
```
