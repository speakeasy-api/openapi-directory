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

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.StorageBucketAccessControlsDeleteRequest{
        Alt: "json",
        Bucket: "corrupti",
        Entity: "provident",
        Fields: "distinctio",
        Key: "quibusdam",
        OauthToken: "unde",
        PrettyPrint: false,
        QuotaUser: "nulla",
        UserIP: "corrupti",
    }

    ctx := context.Background()
    res, err := s.BucketAccessControls.StorageBucketAccessControlsDelete(ctx, req, operations.StorageBucketAccessControlsDeleteSecurity{
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


### BucketAccessControls

* `StorageBucketAccessControlsDelete` - Permanently deletes the ACL entry for the specified entity on the specified bucket.
* `StorageBucketAccessControlsGet` - Returns the ACL entry for the specified entity on the specified bucket.
* `StorageBucketAccessControlsInsert` - Creates a new ACL entry on the specified bucket.
* `StorageBucketAccessControlsList` - Retrieves ACL entries on the specified bucket.
* `StorageBucketAccessControlsPatch` - Updates an ACL entry on the specified bucket. This method supports patch semantics.
* `StorageBucketAccessControlsUpdate` - Updates an ACL entry on the specified bucket.

### Buckets

* `StorageBucketsDelete` - Permanently deletes an empty bucket.
* `StorageBucketsGet` - Returns metadata for the specified bucket.
* `StorageBucketsInsert` - Creates a new bucket.
* `StorageBucketsList` - Retrieves a list of buckets for a given project.
* `StorageBucketsPatch` - Updates a bucket. This method supports patch semantics.
* `StorageBucketsUpdate` - Updates a bucket.

### Channels

* `StorageChannelsStop` - Stop watching resources through this channel

### DefaultObjectAccessControls

* `StorageDefaultObjectAccessControlsDelete` - Permanently deletes the default object ACL entry for the specified entity on the specified bucket.
* `StorageDefaultObjectAccessControlsGet` - Returns the default object ACL entry for the specified entity on the specified bucket.
* `StorageDefaultObjectAccessControlsInsert` - Creates a new default object ACL entry on the specified bucket.
* `StorageDefaultObjectAccessControlsList` - Retrieves default object ACL entries on the specified bucket.
* `StorageDefaultObjectAccessControlsPatch` - Updates a default object ACL entry on the specified bucket. This method supports patch semantics.
* `StorageDefaultObjectAccessControlsUpdate` - Updates a default object ACL entry on the specified bucket.

### ObjectAccessControls

* `StorageObjectAccessControlsDelete` - Permanently deletes the ACL entry for the specified entity on the specified object.
* `StorageObjectAccessControlsGet` - Returns the ACL entry for the specified entity on the specified object.
* `StorageObjectAccessControlsInsert` - Creates a new ACL entry on the specified object.
* `StorageObjectAccessControlsList` - Retrieves ACL entries on the specified object.
* `StorageObjectAccessControlsPatch` - Updates an ACL entry on the specified object. This method supports patch semantics.
* `StorageObjectAccessControlsUpdate` - Updates an ACL entry on the specified object.

### Objects

* `StorageObjectsCompose` - Concatenates a list of existing objects into a new object in the same bucket.
* `StorageObjectsCopy` - Copies an object to a destination in the same location. Optionally overrides metadata.
* `StorageObjectsDelete` - Deletes data blobs and associated metadata. Deletions are permanent if versioning is not enabled for the bucket, or if the generation parameter is used.
* `StorageObjectsGet` - Retrieves objects or their associated metadata.
* `StorageObjectsInsert` - Stores new data blobs and associated metadata.
* `StorageObjectsList` - Retrieves a list of objects matching the criteria.
* `StorageObjectsPatch` - Updates a data blob's associated metadata. This method supports patch semantics.
* `StorageObjectsUpdate` - Updates a data blob's associated metadata.
* `StorageObjectsWatchAll` - Watch for changes on all objects in a bucket.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
