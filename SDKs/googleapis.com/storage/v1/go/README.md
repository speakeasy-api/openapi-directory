# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/storage/v1/go
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
        UploadType: sdk.String("corrupti"),
        UserIP: sdk.String("illum"),
        UserProject: sdk.String("vel"),
    }, operations.StorageBucketAccessControlsDeleteSecurity{
        Option1: &operations.StorageBucketAccessControlsDeleteSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
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
* [StorageBucketAccessControlsPatch](docs/bucketaccesscontrols/README.md#storagebucketaccesscontrolspatch) - Patches an ACL entry on the specified bucket.
* [StorageBucketAccessControlsUpdate](docs/bucketaccesscontrols/README.md#storagebucketaccesscontrolsupdate) - Updates an ACL entry on the specified bucket.

### [Buckets](docs/buckets/README.md)

* [StorageBucketsDelete](docs/buckets/README.md#storagebucketsdelete) - Permanently deletes an empty bucket.
* [StorageBucketsGet](docs/buckets/README.md#storagebucketsget) - Returns metadata for the specified bucket.
* [StorageBucketsGetIamPolicy](docs/buckets/README.md#storagebucketsgetiampolicy) - Returns an IAM policy for the specified bucket.
* [StorageBucketsInsert](docs/buckets/README.md#storagebucketsinsert) - Creates a new bucket.
* [StorageBucketsList](docs/buckets/README.md#storagebucketslist) - Retrieves a list of buckets for a given project.
* [StorageBucketsLockRetentionPolicy](docs/buckets/README.md#storagebucketslockretentionpolicy) - Locks retention policy on a bucket.
* [StorageBucketsPatch](docs/buckets/README.md#storagebucketspatch) - Patches a bucket. Changes to the bucket will be readable immediately after writing, but configuration changes may take time to propagate.
* [StorageBucketsSetIamPolicy](docs/buckets/README.md#storagebucketssetiampolicy) - Updates an IAM policy for the specified bucket.
* [StorageBucketsTestIamPermissions](docs/buckets/README.md#storagebucketstestiampermissions) - Tests a set of permissions on the given bucket to see which, if any, are held by the caller.
* [StorageBucketsUpdate](docs/buckets/README.md#storagebucketsupdate) - Updates a bucket. Changes to the bucket will be readable immediately after writing, but configuration changes may take time to propagate.

### [Channels](docs/channels/README.md)

* [StorageChannelsStop](docs/channels/README.md#storagechannelsstop) - Stop watching resources through this channel

### [DefaultObjectAccessControls](docs/defaultobjectaccesscontrols/README.md)

* [StorageDefaultObjectAccessControlsDelete](docs/defaultobjectaccesscontrols/README.md#storagedefaultobjectaccesscontrolsdelete) - Permanently deletes the default object ACL entry for the specified entity on the specified bucket.
* [StorageDefaultObjectAccessControlsGet](docs/defaultobjectaccesscontrols/README.md#storagedefaultobjectaccesscontrolsget) - Returns the default object ACL entry for the specified entity on the specified bucket.
* [StorageDefaultObjectAccessControlsInsert](docs/defaultobjectaccesscontrols/README.md#storagedefaultobjectaccesscontrolsinsert) - Creates a new default object ACL entry on the specified bucket.
* [StorageDefaultObjectAccessControlsList](docs/defaultobjectaccesscontrols/README.md#storagedefaultobjectaccesscontrolslist) - Retrieves default object ACL entries on the specified bucket.
* [StorageDefaultObjectAccessControlsPatch](docs/defaultobjectaccesscontrols/README.md#storagedefaultobjectaccesscontrolspatch) - Patches a default object ACL entry on the specified bucket.
* [StorageDefaultObjectAccessControlsUpdate](docs/defaultobjectaccesscontrols/README.md#storagedefaultobjectaccesscontrolsupdate) - Updates a default object ACL entry on the specified bucket.

### [Notifications](docs/notifications/README.md)

* [StorageNotificationsDelete](docs/notifications/README.md#storagenotificationsdelete) - Permanently deletes a notification subscription.
* [StorageNotificationsGet](docs/notifications/README.md#storagenotificationsget) - View a notification configuration.
* [StorageNotificationsInsert](docs/notifications/README.md#storagenotificationsinsert) - Creates a notification subscription for a given bucket.
* [StorageNotificationsList](docs/notifications/README.md#storagenotificationslist) - Retrieves a list of notification subscriptions for a given bucket.

### [ObjectAccessControls](docs/objectaccesscontrols/README.md)

* [StorageObjectAccessControlsDelete](docs/objectaccesscontrols/README.md#storageobjectaccesscontrolsdelete) - Permanently deletes the ACL entry for the specified entity on the specified object.
* [StorageObjectAccessControlsGet](docs/objectaccesscontrols/README.md#storageobjectaccesscontrolsget) - Returns the ACL entry for the specified entity on the specified object.
* [StorageObjectAccessControlsInsert](docs/objectaccesscontrols/README.md#storageobjectaccesscontrolsinsert) - Creates a new ACL entry on the specified object.
* [StorageObjectAccessControlsList](docs/objectaccesscontrols/README.md#storageobjectaccesscontrolslist) - Retrieves ACL entries on the specified object.
* [StorageObjectAccessControlsPatch](docs/objectaccesscontrols/README.md#storageobjectaccesscontrolspatch) - Patches an ACL entry on the specified object.
* [StorageObjectAccessControlsUpdate](docs/objectaccesscontrols/README.md#storageobjectaccesscontrolsupdate) - Updates an ACL entry on the specified object.

### [Objects](docs/objects/README.md)

* [StorageObjectsCompose](docs/objects/README.md#storageobjectscompose) - Concatenates a list of existing objects into a new object in the same bucket.
* [StorageObjectsCopy](docs/objects/README.md#storageobjectscopy) - Copies a source object to a destination object. Optionally overrides metadata.
* [StorageObjectsDelete](docs/objects/README.md#storageobjectsdelete) - Deletes an object and its metadata. Deletions are permanent if versioning is not enabled for the bucket, or if the generation parameter is used.
* [StorageObjectsGet](docs/objects/README.md#storageobjectsget) - Retrieves an object or its metadata.
* [StorageObjectsGetIamPolicy](docs/objects/README.md#storageobjectsgetiampolicy) - Returns an IAM policy for the specified object.
* [StorageObjectsInsert](docs/objects/README.md#storageobjectsinsert) - Stores a new object and metadata.
* [StorageObjectsList](docs/objects/README.md#storageobjectslist) - Retrieves a list of objects matching the criteria.
* [StorageObjectsPatch](docs/objects/README.md#storageobjectspatch) - Patches an object's metadata.
* [StorageObjectsRewrite](docs/objects/README.md#storageobjectsrewrite) - Rewrites a source object to a destination object. Optionally overrides metadata.
* [StorageObjectsSetIamPolicy](docs/objects/README.md#storageobjectssetiampolicy) - Updates an IAM policy for the specified object.
* [StorageObjectsTestIamPermissions](docs/objects/README.md#storageobjectstestiampermissions) - Tests a set of permissions on the given object to see which, if any, are held by the caller.
* [StorageObjectsUpdate](docs/objects/README.md#storageobjectsupdate) - Updates an object's metadata.
* [StorageObjectsWatchAll](docs/objects/README.md#storageobjectswatchall) - Watch for changes on all objects in a bucket.

### [Projects](docs/projects/README.md)

* [StorageProjectsHmacKeysCreate](docs/projects/README.md#storageprojectshmackeyscreate) - Creates a new HMAC key for the specified service account.
* [StorageProjectsHmacKeysDelete](docs/projects/README.md#storageprojectshmackeysdelete) - Deletes an HMAC key.
* [StorageProjectsHmacKeysGet](docs/projects/README.md#storageprojectshmackeysget) - Retrieves an HMAC key's metadata
* [StorageProjectsHmacKeysList](docs/projects/README.md#storageprojectshmackeyslist) - Retrieves a list of HMAC keys matching the criteria.
* [StorageProjectsHmacKeysUpdate](docs/projects/README.md#storageprojectshmackeysupdate) - Updates the state of an HMAC key. See the HMAC Key resource descriptor for valid states.
* [StorageProjectsServiceAccountGet](docs/projects/README.md#storageprojectsserviceaccountget) - Get the email address of this project's Google Cloud Storage service account.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
