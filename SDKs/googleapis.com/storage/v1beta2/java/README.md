# openapisdk

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'openapisdk:openapisdk:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            SDK sdk = builder.build();

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
                    bucket = "molestias";
                    entity = "excepturi";
                }};
                queryParams = new StorageBucketAccessControlsDeleteQueryParams() {{
                    alt = "json";
                    fields = "quis";
                    key = "blanditiis";
                    oauthToken = "eius";
                    prettyPrint = true;
                    quotaUser = "accusamus";
                    userIp = "dicta";
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

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
