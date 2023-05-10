# openapi/openapi

<!-- Start SDK Installation -->
## SDK Installation

### Composer

To install the SDK first add the below to your `composer.json` file:

```json
{
    "repositories": [
        {
            "type": "github",
            "url": "<UNSET>.git"
        }
    ],
    "require": {
        "openapi/openapi": "*"
    }
}
```

Then run the following command:

```bash
composer update
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->authinfo->getAuthinfo();

    if ($response->getAuthinfo200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [authinfo](docs/authinfo/README.md)

* [getAuthinfo](docs/authinfo/README.md#getauthinfo) - Authentication information

### [blobs](docs/blobs/README.md)

* [addBlob](docs/blobs/README.md#addblob) - Create binary large object (blob) metadata
* [deleteBlob](docs/blobs/README.md#deleteblob) - Delete binary large object (blob)
* [getBlobById](docs/blobs/README.md#getblobbyid) - Download a binary large object (blob)
* [getBlobMetadataById](docs/blobs/README.md#getblobmetadatabyid) - Get binary large object (blob)
* [getBlobs](docs/blobs/README.md#getblobs) - Get all binary large objects (blob)
* [uploadBlobById](docs/blobs/README.md#uploadblobbyid) - Create binary large object (blob)

### [events](docs/events/README.md)

* [getEventById](docs/events/README.md#geteventbyid) - Get event
* [getEvents](docs/events/README.md#getevents) - Get all events

### [items](docs/items/README.md)

* [addItem](docs/items/README.md#additem) - Create item
* [deleteItem](docs/items/README.md#deleteitem) - Delete item
* [getItemById](docs/items/README.md#getitembyid) - Get item
* [getItems](docs/items/README.md#getitems) - Get all items
* [updateItem](docs/items/README.md#updateitem) - Update existing item

### [keys](docs/keys/README.md)

* [addKey](docs/keys/README.md#addkey) - Create key
* [deleteKey](docs/keys/README.md#deletekey) - Delete key
* [getKeyById](docs/keys/README.md#getkeybyid) - Get key
* [getKeys](docs/keys/README.md#getkeys) - Get all keys
* [updateKey](docs/keys/README.md#updatekey) - Update existing key

### [kvpairs](docs/kvpairs/README.md)

* [addKvPairs](docs/kvpairs/README.md#addkvpairs) - Create key-value pair
* [deleteKvPair](docs/kvpairs/README.md#deletekvpair) - Delete key-value pair
* [getKvPairs](docs/kvpairs/README.md#getkvpairs) - Get all key-value pairs
* [getKvPairsById](docs/kvpairs/README.md#getkvpairsbyid) - Get key-value pair
* [updateKvPair](docs/kvpairs/README.md#updatekvpair) - Update existing Key-value pair

### [locationrules](docs/locationrules/README.md)

* [addLocationRule](docs/locationrules/README.md#addlocationrule) - Create location rule
* [deleteLocationRule](docs/locationrules/README.md#deletelocationrule) - Delete location rule
* [getLocationRuleById](docs/locationrules/README.md#getlocationrulebyid) - Get location rule
* [getLocationRules](docs/locationrules/README.md#getlocationrules) - Get all location rules
* [updateLocationRule](docs/locationrules/README.md#updatelocationrule) - Update existing location rule

### [locations](docs/locations/README.md)

* [addLocation](docs/locations/README.md#addlocation) - Create location
* [deleteLocation](docs/locations/README.md#deletelocation) - Delete location
* [getLocationById](docs/locations/README.md#getlocationbyid) - Get location
* [getLocations](docs/locations/README.md#getlocations) - Get all locations
* [updateLocation](docs/locations/README.md#updatelocation) - Update existing location

### [presences](docs/presences/README.md)

* [getPresenceById](docs/presences/README.md#getpresencebyid) - Get presence
* [getPresences](docs/presences/README.md#getpresences) - Get all presences

### [services](docs/services/README.md)

* [getServiceById](docs/services/README.md#getservicebyid) - Get service
* [getServices](docs/services/README.md#getservices) - Get all services
* [updateService](docs/services/README.md#updateservice) - Update existing service

### [sets](docs/sets/README.md)

* [addItemIdsList](docs/sets/README.md#additemidslist) - Add items to an existing list
* [addItemIdsSpotList](docs/sets/README.md#additemidsspotlist) - Add spots to an existing list
* [addItemList](docs/sets/README.md#additemlist) - Create item list
* [addSpotList](docs/sets/README.md#addspotlist) - Create spot list
* [deleteItemIdFromItemList](docs/sets/README.md#deleteitemidfromitemlist) - Delete item from list
* [deleteItemIdFromSpotList](docs/sets/README.md#deleteitemidfromspotlist) - Delete spot from list
* [deleteItemSet](docs/sets/README.md#deleteitemset) - Delete item list
* [deleteSpotList](docs/sets/README.md#deletespotlist) - Delete spot list
* [getItemListById](docs/sets/README.md#getitemlistbyid) - Get item list
* [getItemListIdsById](docs/sets/README.md#getitemlistidsbyid) - Get item ids for this list
* [getItemLists](docs/sets/README.md#getitemlists) - Get all item lists
* [getSpotListById](docs/sets/README.md#getspotlistbyid) - Info for a specific spot list
* [getSpotListIdsById](docs/sets/README.md#getspotlistidsbyid) - Get spot ids for this list
* [getSpotLists](docs/sets/README.md#getspotlists) - Get all spot lists
* [updateItemList](docs/sets/README.md#updateitemlist) - Update existing item list
* [updateSpotList](docs/sets/README.md#updatespotlist) - Update existing spot list

### [spots](docs/spots/README.md)

* [addSpotSet](docs/spots/README.md#addspotset) - Create spotset
* [getSpotById](docs/spots/README.md#getspotbyid) - Get spot
* [getSpotSetById](docs/spots/README.md#getspotsetbyid) - Get spotset
* [getSpotSetsById](docs/spots/README.md#getspotsetsbyid) - Get spotsets
* [getSpots](docs/spots/README.md#getspots) - Get all spots
* [updateSpot](docs/spots/README.md#updatespot) - Update existing spot
* [updateSpotSet](docs/spots/README.md#updatespotset) - Update existing spotset

### [spotsets](docs/spotsets/README.md)

* [getSpotsets](docs/spotsets/README.md#getspotsets) - Get spotsets
* [getSpotsetsId](docs/spotsets/README.md#getspotsetsid) - Get spotset
* [postSpotsets](docs/spotsets/README.md#postspotsets) - Create spotset
* [putSpotsetsId](docs/spotsets/README.md#putspotsetsid) - Update existing spotset

### [subscriptions](docs/subscriptions/README.md)

* [addSubscription](docs/subscriptions/README.md#addsubscription) - Create subscription
* [deleteSubscription](docs/subscriptions/README.md#deletesubscription) - Delete subscription
* [getEventsForSubscriptionById](docs/subscriptions/README.md#geteventsforsubscriptionbyid) - Get subscription events
* [getSubscriptionById](docs/subscriptions/README.md#getsubscriptionbyid) - Get subscription
* [getSubscriptions](docs/subscriptions/README.md#getsubscriptions) - Get all subscriptions
* [updateSubscription](docs/subscriptions/README.md#updatesubscription) - Update existing subscription

### [users](docs/users/README.md)

* [addUser](docs/users/README.md#adduser) - Create user
* [deleteUser](docs/users/README.md#deleteuser) - Delete user
* [getUserById](docs/users/README.md#getuserbyid) - Get user
* [getUsers](docs/users/README.md#getusers) - Get all users
* [updateUser](docs/users/README.md#updateuser) - Update existing user
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
