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

import org.openapis.openapi.models.operations.StorageBucketAccessControlsDeleteSecurity;
import org.openapis.openapi.models.operations.StorageBucketAccessControlsDeletePathParams;
import org.openapis.openapi.models.operations.StorageBucketAccessControlsDeleteQueryParams;
import org.openapis.openapi.models.operations.StorageBucketAccessControlsDeleteRequest;
import org.openapis.openapi.models.operations.StorageBucketAccessControlsDeleteResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            StorageBucketAccessControlsDeleteRequest req = new StorageBucketAccessControlsDeleteRequest() {{
                security = new StorageBucketAccessControlsDeleteSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new StorageBucketAccessControlsDeletePathParams() {{
                    bucket = "corrupti";
                    entity = "provident";
                }};
                queryParams = new StorageBucketAccessControlsDeleteQueryParams() {{
                    alt = "json";
                    fields = "distinctio";
                    key = "quibusdam";
                    oauthToken = "unde";
                    prettyPrint = false;
                    quotaUser = "nulla";
                    userIp = "corrupti";
                }};
            }};            

            StorageBucketAccessControlsDeleteResponse res = sdk.bucketAccessControls.storageBucketAccessControlsDelete(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### bucketAccessControls

* `storageBucketAccessControlsDelete` - Permanently deletes the ACL entry for the specified entity on the specified bucket.
* `storageBucketAccessControlsGet` - Returns the ACL entry for the specified entity on the specified bucket.
* `storageBucketAccessControlsInsert` - Creates a new ACL entry on the specified bucket.
* `storageBucketAccessControlsList` - Retrieves ACL entries on the specified bucket.
* `storageBucketAccessControlsPatch` - Updates an ACL entry on the specified bucket. This method supports patch semantics.
* `storageBucketAccessControlsUpdate` - Updates an ACL entry on the specified bucket.

### buckets

* `storageBucketsDelete` - Permanently deletes an empty bucket.
* `storageBucketsGet` - Returns metadata for the specified bucket.
* `storageBucketsInsert` - Creates a new bucket.
* `storageBucketsList` - Retrieves a list of buckets for a given project.
* `storageBucketsPatch` - Updates a bucket. This method supports patch semantics.
* `storageBucketsUpdate` - Updates a bucket.

### channels

* `storageChannelsStop` - Stop watching resources through this channel

### defaultObjectAccessControls

* `storageDefaultObjectAccessControlsDelete` - Permanently deletes the default object ACL entry for the specified entity on the specified bucket.
* `storageDefaultObjectAccessControlsGet` - Returns the default object ACL entry for the specified entity on the specified bucket.
* `storageDefaultObjectAccessControlsInsert` - Creates a new default object ACL entry on the specified bucket.
* `storageDefaultObjectAccessControlsList` - Retrieves default object ACL entries on the specified bucket.
* `storageDefaultObjectAccessControlsPatch` - Updates a default object ACL entry on the specified bucket. This method supports patch semantics.
* `storageDefaultObjectAccessControlsUpdate` - Updates a default object ACL entry on the specified bucket.

### objectAccessControls

* `storageObjectAccessControlsDelete` - Permanently deletes the ACL entry for the specified entity on the specified object.
* `storageObjectAccessControlsGet` - Returns the ACL entry for the specified entity on the specified object.
* `storageObjectAccessControlsInsert` - Creates a new ACL entry on the specified object.
* `storageObjectAccessControlsList` - Retrieves ACL entries on the specified object.
* `storageObjectAccessControlsPatch` - Updates an ACL entry on the specified object. This method supports patch semantics.
* `storageObjectAccessControlsUpdate` - Updates an ACL entry on the specified object.

### objects

* `storageObjectsCompose` - Concatenates a list of existing objects into a new object in the same bucket.
* `storageObjectsCopy` - Copies an object to a destination in the same location. Optionally overrides metadata.
* `storageObjectsDelete` - Deletes data blobs and associated metadata. Deletions are permanent if versioning is not enabled for the bucket, or if the generation parameter is used.
* `storageObjectsGet` - Retrieves objects or their associated metadata.
* `storageObjectsInsert` - Stores new data blobs and associated metadata.
* `storageObjectsList` - Retrieves a list of objects matching the criteria.
* `storageObjectsPatch` - Updates a data blob's associated metadata. This method supports patch semantics.
* `storageObjectsUpdate` - Updates a data blob's associated metadata.
* `storageObjectsWatchAll` - Watch for changes on all objects in a bucket.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
