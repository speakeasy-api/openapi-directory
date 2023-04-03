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

<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `createDocument`
* `createService`
* `createStreamMessage` - Create a new Stream Message.
* `createSyncList`
* `createSyncListItem`
* `createSyncMap`
* `createSyncMapItem`
* `createSyncStream` - Create a new Stream.
* `deleteDocument`
* `deleteDocumentPermission` - Delete a specific Sync Document Permission.
* `deleteService`
* `deleteSyncList`
* `deleteSyncListItem`
* `deleteSyncListPermission` - Delete a specific Sync List Permission.
* `deleteSyncMap`
* `deleteSyncMapItem`
* `deleteSyncMapPermission` - Delete a specific Sync Map Permission.
* `deleteSyncStream` - Delete a specific Stream.
* `fetchDocument`
* `fetchDocumentPermission` - Fetch a specific Sync Document Permission.
* `fetchService`
* `fetchSyncList`
* `fetchSyncListItem`
* `fetchSyncListPermission` - Fetch a specific Sync List Permission.
* `fetchSyncMap`
* `fetchSyncMapItem`
* `fetchSyncMapPermission` - Fetch a specific Sync Map Permission.
* `fetchSyncStream` - Fetch a specific Stream.
* `listDocument`
* `listDocumentPermission` - Retrieve a list of all Permissions applying to a Sync Document.
* `listService`
* `listSyncList`
* `listSyncListItem`
* `listSyncListPermission` - Retrieve a list of all Permissions applying to a Sync List.
* `listSyncMap`
* `listSyncMapItem`
* `listSyncMapPermission` - Retrieve a list of all Permissions applying to a Sync Map.
* `listSyncStream` - Retrieve a list of all Streams in a Service Instance.
* `updateDocument`
* `updateDocumentPermission` - Update an identity's access to a specific Sync Document.
* `updateService`
* `updateSyncList`
* `updateSyncListItem`
* `updateSyncListPermission` - Update an identity's access to a specific Sync List.
* `updateSyncMap`
* `updateSyncMapItem`
* `updateSyncMapPermission` - Update an identity's access to a specific Sync Map.
* `updateSyncStream` - Update a specific Stream.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
