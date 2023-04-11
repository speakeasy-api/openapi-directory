# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/intellifi.nl/2.23.2+0.gfbc3926.dirty/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/intellifi.nl/2.23.2+0.gfbc3926.dirty/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  GetAuthinfoResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    cookieSid: "YOUR_API_KEY_HERE",
  },
});

sdk.authinfo.getAuthinfo().then((res: GetAuthinfoResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### authinfo

* `getAuthinfo` - Authentication information

### blobs

* `addBlob` - Create binary large object (blob) metadata
* `deleteBlob` - Delete binary large object (blob)
* `getBlobById` - Download a binary large object (blob)
* `getBlobMetadataById` - Get binary large object (blob)
* `getBlobs` - Get all binary large objects (blob)
* `uploadBlobById` - Create binary large object (blob)

### events

* `getEventById` - Get event
* `getEvents` - Get all events

### items

* `addItem` - Create item
* `deleteItem` - Delete item
* `getItemById` - Get item
* `getItems` - Get all items
* `updateItem` - Update existing item

### keys

* `addKey` - Create key
* `deleteKey` - Delete key
* `getKeyById` - Get key
* `getKeys` - Get all keys
* `updateKey` - Update existing key

### kvpairs

* `addKvPairs` - Create key-value pair
* `deleteKvPair` - Delete key-value pair
* `getKvPairs` - Get all key-value pairs
* `getKvPairsById` - Get key-value pair
* `updateKvPair` - Update existing Key-value pair

### locationrules

* `addLocationRule` - Create location rule
* `deleteLocationRule` - Delete location rule
* `getLocationRuleById` - Get location rule
* `getLocationRules` - Get all location rules
* `updateLocationRule` - Update existing location rule

### locations

* `addLocation` - Create location
* `deleteLocation` - Delete location
* `getLocationById` - Get location
* `getLocations` - Get all locations
* `updateLocation` - Update existing location

### presences

* `getPresenceById` - Get presence
* `getPresences` - Get all presences

### services

* `getServiceById` - Get service
* `getServices` - Get all services
* `updateService` - Update existing service

### sets

* `addItemIdsList` - Add items to an existing list
* `addItemIdsSpotList` - Add spots to an existing list
* `addItemList` - Create item list
* `addSpotList` - Create spot list
* `deleteItemIdFromItemList` - Delete item from list
* `deleteItemIdFromSpotList` - Delete spot from list
* `deleteItemSet` - Delete item list
* `deleteSpotList` - Delete spot list
* `getItemListById` - Get item list
* `getItemListIdsById` - Get item ids for this list
* `getItemLists` - Get all item lists
* `getSpotListById` - Info for a specific spot list
* `getSpotListIdsById` - Get spot ids for this list
* `getSpotLists` - Get all spot lists
* `updateItemList` - Update existing item list
* `updateSpotList` - Update existing spot list

### spots

* `addSpotSet` - Create spotset
* `getSpotById` - Get spot
* `getSpotSetById` - Get spotset
* `getSpotSetsById` - Get spotsets
* `getSpots` - Get all spots
* `updateSpot` - Update existing spot
* `updateSpotSet` - Update existing spotset

### spotsets

* `getSpotsets` - Get spotsets
* `getSpotsetsId` - Get spotset
* `postSpotsets` - Create spotset
* `putSpotsetsId` - Update existing spotset

### subscriptions

* `addSubscription` - Create subscription
* `deleteSubscription` - Delete subscription
* `getEventsForSubscriptionById` - Get subscription events
* `getSubscriptionById` - Get subscription
* `getSubscriptions` - Get all subscriptions
* `updateSubscription` - Update existing subscription

### users

* `addUser` - Create user
* `deleteUser` - Delete user
* `getUserById` - Get user
* `getUsers` - Get all users
* `updateUser` - Update existing user
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

