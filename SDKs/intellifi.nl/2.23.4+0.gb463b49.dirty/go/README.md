# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/intellifi.nl/2.23.4+0.gb463b49.dirty/go
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


### [Authinfo](docs/authinfo/README.md)

* [GetAuthinfo](docs/authinfo/README.md#getauthinfo) - Authentication information

### [Blobs](docs/blobs/README.md)

* [AddBlob](docs/blobs/README.md#addblob) - Create binary large object (blob) metadata
* [DeleteBlob](docs/blobs/README.md#deleteblob) - Delete binary large object (blob)
* [GetBlobByID](docs/blobs/README.md#getblobbyid) - Download a binary large object (blob)
* [GetBlobMetadataByID](docs/blobs/README.md#getblobmetadatabyid) - Get binary large object (blob)
* [GetBlobs](docs/blobs/README.md#getblobs) - Get all binary large objects (blob)
* [UploadBlobByID](docs/blobs/README.md#uploadblobbyid) - Create binary large object (blob)

### [Events](docs/events/README.md)

* [GetEventByID](docs/events/README.md#geteventbyid) - Get event
* [GetEvents](docs/events/README.md#getevents) - Get all events

### [Items](docs/items/README.md)

* [AddItem](docs/items/README.md#additem) - Create item
* [DeleteItem](docs/items/README.md#deleteitem) - Delete item
* [GetItemByID](docs/items/README.md#getitembyid) - Get item
* [GetItems](docs/items/README.md#getitems) - Get all items
* [UpdateItem](docs/items/README.md#updateitem) - Update existing item

### [Keys](docs/keys/README.md)

* [AddKey](docs/keys/README.md#addkey) - Create key
* [DeleteKey](docs/keys/README.md#deletekey) - Delete key
* [GetKeyByID](docs/keys/README.md#getkeybyid) - Get key
* [GetKeys](docs/keys/README.md#getkeys) - Get all keys
* [UpdateKey](docs/keys/README.md#updatekey) - Update existing key

### [Kvpairs](docs/kvpairs/README.md)

* [AddKvPairs](docs/kvpairs/README.md#addkvpairs) - Create key-value pair
* [DeleteKvPair](docs/kvpairs/README.md#deletekvpair) - Delete key-value pair
* [GetKvPairs](docs/kvpairs/README.md#getkvpairs) - Get all key-value pairs
* [GetKvPairsByID](docs/kvpairs/README.md#getkvpairsbyid) - Get key-value pair
* [UpdateKvPair](docs/kvpairs/README.md#updatekvpair) - Update existing Key-value pair

### [Locationrules](docs/locationrules/README.md)

* [AddLocationRule](docs/locationrules/README.md#addlocationrule) - Create location rule
* [DeleteLocationRule](docs/locationrules/README.md#deletelocationrule) - Delete location rule
* [GetLocationRuleByID](docs/locationrules/README.md#getlocationrulebyid) - Get location rule
* [GetLocationRules](docs/locationrules/README.md#getlocationrules) - Get all location rules
* [UpdateLocationRule](docs/locationrules/README.md#updatelocationrule) - Update existing location rule

### [Locations](docs/locations/README.md)

* [AddLocation](docs/locations/README.md#addlocation) - Create location
* [DeleteLocation](docs/locations/README.md#deletelocation) - Delete location
* [GetLocationByID](docs/locations/README.md#getlocationbyid) - Get location
* [GetLocations](docs/locations/README.md#getlocations) - Get all locations
* [UpdateLocation](docs/locations/README.md#updatelocation) - Update existing location

### [Presences](docs/presences/README.md)

* [GetPresenceByID](docs/presences/README.md#getpresencebyid) - Get presence
* [GetPresences](docs/presences/README.md#getpresences) - Get all presences

### [Services](docs/services/README.md)

* [GetServiceByID](docs/services/README.md#getservicebyid) - Get service
* [GetServices](docs/services/README.md#getservices) - Get all services
* [UpdateService](docs/services/README.md#updateservice) - Update existing service

### [Sets](docs/sets/README.md)

* [AddItemIdsList](docs/sets/README.md#additemidslist) - Add items to an existing list
* [AddItemIdsSpotList](docs/sets/README.md#additemidsspotlist) - Add spots to an existing list
* [AddItemList](docs/sets/README.md#additemlist) - Create item list
* [AddSpotList](docs/sets/README.md#addspotlist) - Create spot list
* [DeleteItemIDFromItemList](docs/sets/README.md#deleteitemidfromitemlist) - Delete item from list
* [DeleteItemIDFromSpotList](docs/sets/README.md#deleteitemidfromspotlist) - Delete spot from list
* [DeleteItemSet](docs/sets/README.md#deleteitemset) - Delete item list
* [DeleteSpotList](docs/sets/README.md#deletespotlist) - Delete spot list
* [GetItemListByID](docs/sets/README.md#getitemlistbyid) - Get item list
* [GetItemListIdsByID](docs/sets/README.md#getitemlistidsbyid) - Get item ids for this list
* [GetItemLists](docs/sets/README.md#getitemlists) - Get all item lists
* [GetSpotListByID](docs/sets/README.md#getspotlistbyid) - Info for a specific spot list
* [GetSpotListIdsByID](docs/sets/README.md#getspotlistidsbyid) - Get spot ids for this list
* [GetSpotLists](docs/sets/README.md#getspotlists) - Get all spot lists
* [UpdateItemList](docs/sets/README.md#updateitemlist) - Update existing item list
* [UpdateSpotList](docs/sets/README.md#updatespotlist) - Update existing spot list

### [Spots](docs/spots/README.md)

* [AddSpotSet](docs/spots/README.md#addspotset) - Create spotset
* [GetSpotByID](docs/spots/README.md#getspotbyid) - Get spot
* [GetSpotSetByID](docs/spots/README.md#getspotsetbyid) - Get spotset
* [GetSpotSetsByID](docs/spots/README.md#getspotsetsbyid) - Get spotsets
* [GetSpots](docs/spots/README.md#getspots) - Get all spots
* [UpdateSpot](docs/spots/README.md#updatespot) - Update existing spot
* [UpdateSpotSet](docs/spots/README.md#updatespotset) - Update existing spotset

### [Spotsets](docs/spotsets/README.md)

* [GetSpotsets](docs/spotsets/README.md#getspotsets) - Get spotsets
* [GetSpotsetsID](docs/spotsets/README.md#getspotsetsid) - Get spotset
* [PostSpotsets](docs/spotsets/README.md#postspotsets) - Create spotset
* [PutSpotsetsID](docs/spotsets/README.md#putspotsetsid) - Update existing spotset

### [Subscriptions](docs/subscriptions/README.md)

* [AddSubscription](docs/subscriptions/README.md#addsubscription) - Create subscription
* [DeleteSubscription](docs/subscriptions/README.md#deletesubscription) - Delete subscription
* [GetEventsForSubscriptionByID](docs/subscriptions/README.md#geteventsforsubscriptionbyid) - Get subscription events
* [GetSubscriptionByID](docs/subscriptions/README.md#getsubscriptionbyid) - Get subscription
* [GetSubscriptions](docs/subscriptions/README.md#getsubscriptions) - Get all subscriptions
* [UpdateSubscription](docs/subscriptions/README.md#updatesubscription) - Update existing subscription

### [Users](docs/users/README.md)

* [AddUser](docs/users/README.md#adduser) - Create user
* [DeleteUser](docs/users/README.md#deleteuser) - Delete user
* [GetUserByID](docs/users/README.md#getuserbyid) - Get user
* [GetUsers](docs/users/README.md#getusers) - Get all users
* [UpdateUser](docs/users/README.md#updateuser) - Update existing user
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
