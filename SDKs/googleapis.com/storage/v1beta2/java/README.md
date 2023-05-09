# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StorageBucketAccessControlsDeleteRequest;
import org.openapis.openapi.models.operations.StorageBucketAccessControlsDeleteResponse;
import org.openapis.openapi.models.operations.StorageBucketAccessControlsDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            StorageBucketAccessControlsDeleteRequest req = new StorageBucketAccessControlsDeleteRequest("corrupti", "provident") {{
                alt = AltEnum.JSON;
                fields = "distinctio";
                key = "quibusdam";
                oauthToken = "unde";
                prettyPrint = false;
                quotaUser = "nulla";
                userIp = "corrupti";
            }};            

            StorageBucketAccessControlsDeleteResponse res = sdk.bucketAccessControls.storageBucketAccessControlsDelete(req, new StorageBucketAccessControlsDeleteSecurity("illum", "vel") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [bucketAccessControls](docs/bucketaccesscontrols/README.md)

* [storageBucketAccessControlsDelete](docs/bucketaccesscontrols/README.md#storagebucketaccesscontrolsdelete) - Permanently deletes the ACL entry for the specified entity on the specified bucket.
* [storageBucketAccessControlsGet](docs/bucketaccesscontrols/README.md#storagebucketaccesscontrolsget) - Returns the ACL entry for the specified entity on the specified bucket.
* [storageBucketAccessControlsInsert](docs/bucketaccesscontrols/README.md#storagebucketaccesscontrolsinsert) - Creates a new ACL entry on the specified bucket.
* [storageBucketAccessControlsList](docs/bucketaccesscontrols/README.md#storagebucketaccesscontrolslist) - Retrieves ACL entries on the specified bucket.
* [storageBucketAccessControlsPatch](docs/bucketaccesscontrols/README.md#storagebucketaccesscontrolspatch) - Updates an ACL entry on the specified bucket. This method supports patch semantics.
* [storageBucketAccessControlsUpdate](docs/bucketaccesscontrols/README.md#storagebucketaccesscontrolsupdate) - Updates an ACL entry on the specified bucket.

### [buckets](docs/buckets/README.md)

* [storageBucketsDelete](docs/buckets/README.md#storagebucketsdelete) - Permanently deletes an empty bucket.
* [storageBucketsGet](docs/buckets/README.md#storagebucketsget) - Returns metadata for the specified bucket.
* [storageBucketsInsert](docs/buckets/README.md#storagebucketsinsert) - Creates a new bucket.
* [storageBucketsList](docs/buckets/README.md#storagebucketslist) - Retrieves a list of buckets for a given project.
* [storageBucketsPatch](docs/buckets/README.md#storagebucketspatch) - Updates a bucket. This method supports patch semantics.
* [storageBucketsUpdate](docs/buckets/README.md#storagebucketsupdate) - Updates a bucket.

### [channels](docs/channels/README.md)

* [storageChannelsStop](docs/channels/README.md#storagechannelsstop) - Stop watching resources through this channel

### [defaultObjectAccessControls](docs/defaultobjectaccesscontrols/README.md)

* [storageDefaultObjectAccessControlsDelete](docs/defaultobjectaccesscontrols/README.md#storagedefaultobjectaccesscontrolsdelete) - Permanently deletes the default object ACL entry for the specified entity on the specified bucket.
* [storageDefaultObjectAccessControlsGet](docs/defaultobjectaccesscontrols/README.md#storagedefaultobjectaccesscontrolsget) - Returns the default object ACL entry for the specified entity on the specified bucket.
* [storageDefaultObjectAccessControlsInsert](docs/defaultobjectaccesscontrols/README.md#storagedefaultobjectaccesscontrolsinsert) - Creates a new default object ACL entry on the specified bucket.
* [storageDefaultObjectAccessControlsList](docs/defaultobjectaccesscontrols/README.md#storagedefaultobjectaccesscontrolslist) - Retrieves default object ACL entries on the specified bucket.
* [storageDefaultObjectAccessControlsPatch](docs/defaultobjectaccesscontrols/README.md#storagedefaultobjectaccesscontrolspatch) - Updates a default object ACL entry on the specified bucket. This method supports patch semantics.
* [storageDefaultObjectAccessControlsUpdate](docs/defaultobjectaccesscontrols/README.md#storagedefaultobjectaccesscontrolsupdate) - Updates a default object ACL entry on the specified bucket.

### [objectAccessControls](docs/objectaccesscontrols/README.md)

* [storageObjectAccessControlsDelete](docs/objectaccesscontrols/README.md#storageobjectaccesscontrolsdelete) - Permanently deletes the ACL entry for the specified entity on the specified object.
* [storageObjectAccessControlsGet](docs/objectaccesscontrols/README.md#storageobjectaccesscontrolsget) - Returns the ACL entry for the specified entity on the specified object.
* [storageObjectAccessControlsInsert](docs/objectaccesscontrols/README.md#storageobjectaccesscontrolsinsert) - Creates a new ACL entry on the specified object.
* [storageObjectAccessControlsList](docs/objectaccesscontrols/README.md#storageobjectaccesscontrolslist) - Retrieves ACL entries on the specified object.
* [storageObjectAccessControlsPatch](docs/objectaccesscontrols/README.md#storageobjectaccesscontrolspatch) - Updates an ACL entry on the specified object. This method supports patch semantics.
* [storageObjectAccessControlsUpdate](docs/objectaccesscontrols/README.md#storageobjectaccesscontrolsupdate) - Updates an ACL entry on the specified object.

### [objects](docs/objects/README.md)

* [storageObjectsCompose](docs/objects/README.md#storageobjectscompose) - Concatenates a list of existing objects into a new object in the same bucket.
* [storageObjectsCopy](docs/objects/README.md#storageobjectscopy) - Copies an object to a destination in the same location. Optionally overrides metadata.
* [storageObjectsDelete](docs/objects/README.md#storageobjectsdelete) - Deletes data blobs and associated metadata. Deletions are permanent if versioning is not enabled for the bucket, or if the generation parameter is used.
* [storageObjectsGet](docs/objects/README.md#storageobjectsget) - Retrieves objects or their associated metadata.
* [storageObjectsInsert](docs/objects/README.md#storageobjectsinsert) - Stores new data blobs and associated metadata.
* [storageObjectsList](docs/objects/README.md#storageobjectslist) - Retrieves a list of objects matching the criteria.
* [storageObjectsPatch](docs/objects/README.md#storageobjectspatch) - Updates a data blob's associated metadata. This method supports patch semantics.
* [storageObjectsUpdate](docs/objects/README.md#storageobjectsupdate) - Updates a data blob's associated metadata.
* [storageObjectsWatchAll](docs/objects/README.md#storageobjectswatchall) - Watch for changes on all objects in a bucket.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
