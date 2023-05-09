# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/storage/v1beta2/go
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
    res, err := s.BucketAccessControls.StorageBucketAccessControlsDelete(ctx, operations.StorageBucketAccessControlsDeleteRequest{
        Alt: shared.AltEnumJSON.ToPointer(),
        Bucket: "corrupti",
        Entity: "provident",
        Fields: sdk.String("distinctio"),
        Key: sdk.String("quibusdam"),
        OauthToken: sdk.String("unde"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("nulla"),
        UserIP: sdk.String("corrupti"),
    }, operations.StorageBucketAccessControlsDeleteSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [BucketAccessControls](docs/bucketaccesscontrols/README.md)

* [StorageBucketAccessControlsDelete](docs/bucketaccesscontrols/README.md#storagebucketaccesscontrolsdelete) - Permanently deletes the ACL entry for the specified entity on the specified bucket.
* [StorageBucketAccessControlsGet](docs/bucketaccesscontrols/README.md#storagebucketaccesscontrolsget) - Returns the ACL entry for the specified entity on the specified bucket.
* [StorageBucketAccessControlsInsert](docs/bucketaccesscontrols/README.md#storagebucketaccesscontrolsinsert) - Creates a new ACL entry on the specified bucket.
* [StorageBucketAccessControlsList](docs/bucketaccesscontrols/README.md#storagebucketaccesscontrolslist) - Retrieves ACL entries on the specified bucket.
* [StorageBucketAccessControlsPatch](docs/bucketaccesscontrols/README.md#storagebucketaccesscontrolspatch) - Updates an ACL entry on the specified bucket. This method supports patch semantics.
* [StorageBucketAccessControlsUpdate](docs/bucketaccesscontrols/README.md#storagebucketaccesscontrolsupdate) - Updates an ACL entry on the specified bucket.

### [Buckets](docs/buckets/README.md)

* [StorageBucketsDelete](docs/buckets/README.md#storagebucketsdelete) - Permanently deletes an empty bucket.
* [StorageBucketsGet](docs/buckets/README.md#storagebucketsget) - Returns metadata for the specified bucket.
* [StorageBucketsInsert](docs/buckets/README.md#storagebucketsinsert) - Creates a new bucket.
* [StorageBucketsList](docs/buckets/README.md#storagebucketslist) - Retrieves a list of buckets for a given project.
* [StorageBucketsPatch](docs/buckets/README.md#storagebucketspatch) - Updates a bucket. This method supports patch semantics.
* [StorageBucketsUpdate](docs/buckets/README.md#storagebucketsupdate) - Updates a bucket.

### [Channels](docs/channels/README.md)

* [StorageChannelsStop](docs/channels/README.md#storagechannelsstop) - Stop watching resources through this channel

### [DefaultObjectAccessControls](docs/defaultobjectaccesscontrols/README.md)

* [StorageDefaultObjectAccessControlsDelete](docs/defaultobjectaccesscontrols/README.md#storagedefaultobjectaccesscontrolsdelete) - Permanently deletes the default object ACL entry for the specified entity on the specified bucket.
* [StorageDefaultObjectAccessControlsGet](docs/defaultobjectaccesscontrols/README.md#storagedefaultobjectaccesscontrolsget) - Returns the default object ACL entry for the specified entity on the specified bucket.
* [StorageDefaultObjectAccessControlsInsert](docs/defaultobjectaccesscontrols/README.md#storagedefaultobjectaccesscontrolsinsert) - Creates a new default object ACL entry on the specified bucket.
* [StorageDefaultObjectAccessControlsList](docs/defaultobjectaccesscontrols/README.md#storagedefaultobjectaccesscontrolslist) - Retrieves default object ACL entries on the specified bucket.
* [StorageDefaultObjectAccessControlsPatch](docs/defaultobjectaccesscontrols/README.md#storagedefaultobjectaccesscontrolspatch) - Updates a default object ACL entry on the specified bucket. This method supports patch semantics.
* [StorageDefaultObjectAccessControlsUpdate](docs/defaultobjectaccesscontrols/README.md#storagedefaultobjectaccesscontrolsupdate) - Updates a default object ACL entry on the specified bucket.

### [ObjectAccessControls](docs/objectaccesscontrols/README.md)

* [StorageObjectAccessControlsDelete](docs/objectaccesscontrols/README.md#storageobjectaccesscontrolsdelete) - Permanently deletes the ACL entry for the specified entity on the specified object.
* [StorageObjectAccessControlsGet](docs/objectaccesscontrols/README.md#storageobjectaccesscontrolsget) - Returns the ACL entry for the specified entity on the specified object.
* [StorageObjectAccessControlsInsert](docs/objectaccesscontrols/README.md#storageobjectaccesscontrolsinsert) - Creates a new ACL entry on the specified object.
* [StorageObjectAccessControlsList](docs/objectaccesscontrols/README.md#storageobjectaccesscontrolslist) - Retrieves ACL entries on the specified object.
* [StorageObjectAccessControlsPatch](docs/objectaccesscontrols/README.md#storageobjectaccesscontrolspatch) - Updates an ACL entry on the specified object. This method supports patch semantics.
* [StorageObjectAccessControlsUpdate](docs/objectaccesscontrols/README.md#storageobjectaccesscontrolsupdate) - Updates an ACL entry on the specified object.

### [Objects](docs/objects/README.md)

* [StorageObjectsCompose](docs/objects/README.md#storageobjectscompose) - Concatenates a list of existing objects into a new object in the same bucket.
* [StorageObjectsCopy](docs/objects/README.md#storageobjectscopy) - Copies an object to a destination in the same location. Optionally overrides metadata.
* [StorageObjectsDelete](docs/objects/README.md#storageobjectsdelete) - Deletes data blobs and associated metadata. Deletions are permanent if versioning is not enabled for the bucket, or if the generation parameter is used.
* [StorageObjectsGet](docs/objects/README.md#storageobjectsget) - Retrieves objects or their associated metadata.
* [StorageObjectsInsert](docs/objects/README.md#storageobjectsinsert) - Stores new data blobs and associated metadata.
* [StorageObjectsList](docs/objects/README.md#storageobjectslist) - Retrieves a list of objects matching the criteria.
* [StorageObjectsPatch](docs/objects/README.md#storageobjectspatch) - Updates a data blob's associated metadata. This method supports patch semantics.
* [StorageObjectsUpdate](docs/objects/README.md#storageobjectsupdate) - Updates a data blob's associated metadata.
* [StorageObjectsWatchAll](docs/objects/README.md#storageobjectswatchall) - Watch for changes on all objects in a bucket.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
