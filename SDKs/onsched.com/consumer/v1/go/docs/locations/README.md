# Locations

### Available Operations

* [GetConsumerV1Locations](#getconsumerv1locations) - List Locations
* [GetConsumerV1LocationsID](#getconsumerv1locationsid) - Get Location

## GetConsumerV1Locations

<p>Use this endpoint to return a <b>List of Business Locations</b>. The results are returned in pages. Use the offset and limit parameters to control the page start and size. Default offset is 0, and limit is 20 and maximum is 100. Use the other query parameters to filter the results further. </p>
<p>
  <b>IMPORTANT DEPRECATION NOTICE</b>: The following online settings parameters were intended for internal use in our Portal application only. They will be deprecated on <b>OCTOBER 15, 2022</b>. These fields are currently part of the <b>SETTINGS</b> object in all location endpoints: <b>businessId, enabled, familyMembersEnabled, serviceLabel, resourceLabel, resourceAnyLabel, resourceSelection, liveMode, formFlow, availabilityForm, showServiceGroups, showOnSchedLogo, showBusinessLogo, disableAuthorization, hideNavBar, hideLocationNav, hideServiceGroupsNav, hideServicesNav, hideContinueBooking, returnToService, returnToAvailability, hideBreadCrumbNav.</b> If you are using these fields, please adjust your code to handle the deprecation or let us know by submitting a ticket to: <b><i>support@onsched.com</i></b> as we do not want to interrupt your existing workflows.</p>

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
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Locations.GetConsumerV1Locations(ctx, operations.GetConsumerV1LocationsRequest{
        FriendlyID: sdk.String("quasi"),
        IgnorePrimary: sdk.Bool(false),
        Limit: sdk.Int(951875),
        Name: sdk.String("Kirk Stracke"),
        NearestTo: sdk.String("eveniet"),
        Offset: sdk.Int(992430),
        Proximity: sdk.Int(815524),
        RegionID: sdk.String("veritatis"),
        ServiceID: sdk.String("consequuntur"),
        Units: sdk.String("quasi"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LocationListViewModel != nil {
        // handle response
    }
}
```

## GetConsumerV1LocationsID

<p>Use this endpoint to return a <b>Location</b> object. A valid business <b>location id</b> is required. Find all location id's by using the <i>GET /consumer/v1/locations</i> endpoint.</p>
<p>
  <b>IMPORTANT DEPRECATION NOTICE</b>: The following online settings parameters were intended for internal use in our Portal application only. They will be deprecated on <b>OCTOBER 15, 2022</b>. These fields are currently part of the <b>SETTINGS</b> object in all location endpoints: <b>businessId, enabled, familyMembersEnabled, serviceLabel, resourceLabel, resourceAnyLabel, resourceSelection, liveMode, formFlow, availabilityForm, showServiceGroups, showOnSchedLogo, showBusinessLogo, disableAuthorization, hideNavBar, hideLocationNav, hideServiceGroupsNav, hideServicesNav, hideContinueBooking, returnToService, returnToAvailability, hideBreadCrumbNav.</b> If you are using these fields, please adjust your code to handle the deprecation or let us know by submitting a ticket to: <b><i>support@onsched.com</i></b> as we do not want to interrupt your existing workflows.</p>

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
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Locations.GetConsumerV1LocationsID(ctx, operations.GetConsumerV1LocationsIDRequest{
        ID: "aa6f1e67-4bdb-404f-9575-6082d68ea19f",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LocationViewModel != nil {
        // handle response
    }
}
```
