# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/intellifi.nl/2.23.2+0.gfbc3926.dirty/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            CookieSid: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.Authinfo.GetAuthinfo(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.GetAuthinfo200ApplicationJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### Authinfo

* `GetAuthinfo` - Authentication information

### Blobs

* `AddBlob` - Create binary large object (blob) metadata
* `DeleteBlob` - Delete binary large object (blob)
* `GetBlobByID` - Download a binary large object (blob)
* `GetBlobMetadataByID` - Get binary large object (blob)
* `GetBlobs` - Get all binary large objects (blob)
* `UploadBlobByID` - Create binary large object (blob)

### Events

* `GetEventByID` - Get event
* `GetEvents` - Get all events

### Items

* `AddItem` - Create item
* `DeleteItem` - Delete item
* `GetItemByID` - Get item
* `GetItems` - Get all items
* `UpdateItem` - Update existing item

### Keys

* `AddKey` - Create key
* `DeleteKey` - Delete key
* `GetKeyByID` - Get key
* `GetKeys` - Get all keys
* `UpdateKey` - Update existing key

### Kvpairs

* `AddKvPairs` - Create key-value pair
* `DeleteKvPair` - Delete key-value pair
* `GetKvPairs` - Get all key-value pairs
* `GetKvPairsByID` - Get key-value pair
* `UpdateKvPair` - Update existing Key-value pair

### Locationrules

* `AddLocationRule` - Create location rule
* `DeleteLocationRule` - Delete location rule
* `GetLocationRuleByID` - Get location rule
* `GetLocationRules` - Get all location rules
* `UpdateLocationRule` - Update existing location rule

### Locations

* `AddLocation` - Create location
* `DeleteLocation` - Delete location
* `GetLocationByID` - Get location
* `GetLocations` - Get all locations
* `UpdateLocation` - Update existing location

### Presences

* `GetPresenceByID` - Get presence
* `GetPresences` - Get all presences

### Services

* `GetServiceByID` - Get service
* `GetServices` - Get all services
* `UpdateService` - Update existing service

### Sets

* `AddItemIdsList` - Add items to an existing list
* `AddItemIdsSpotList` - Add spots to an existing list
* `AddItemList` - Create item list
* `AddSpotList` - Create spot list
* `DeleteItemIDFromItemList` - Delete item from list
* `DeleteItemIDFromSpotList` - Delete spot from list
* `DeleteItemSet` - Delete item list
* `DeleteSpotList` - Delete spot list
* `GetItemListByID` - Get item list
* `GetItemListIdsByID` - Get item ids for this list
* `GetItemLists` - Get all item lists
* `GetSpotListByID` - Info for a specific spot list
* `GetSpotListIdsByID` - Get spot ids for this list
* `GetSpotLists` - Get all spot lists
* `UpdateItemList` - Update existing item list
* `UpdateSpotList` - Update existing spot list

### Spots

* `AddSpotSet` - Create spotset
* `GetSpotByID` - Get spot
* `GetSpotSetByID` - Get spotset
* `GetSpotSetsByID` - Get spotsets
* `GetSpots` - Get all spots
* `UpdateSpot` - Update existing spot
* `UpdateSpotSet` - Update existing spotset

### Spotsets

* `GetSpotsets` - Get spotsets
* `GetSpotsetsID` - Get spotset
* `PostSpotsets` - Create spotset
* `PutSpotsetsID` - Update existing spotset

### Subscriptions

* `AddSubscription` - Create subscription
* `DeleteSubscription` - Delete subscription
* `GetEventsForSubscriptionByID` - Get subscription events
* `GetSubscriptionByID` - Get subscription
* `GetSubscriptions` - Get all subscriptions
* `UpdateSubscription` - Update existing subscription

### Users

* `AddUser` - Create user
* `DeleteUser` - Delete user
* `GetUserByID` - Get user
* `GetUsers` - Get all users
* `UpdateUser` - Update existing user
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
