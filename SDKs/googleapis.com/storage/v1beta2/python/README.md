# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/googleapis.com/storage/v1beta2/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.StorageBucketAccessControlsDeleteRequest(
    alt="json",
    bucket="corrupti",
    entity="provident",
    fields_="distinctio",
    key="quibusdam",
    oauth_token="unde",
    pretty_print=False,
    quota_user="nulla",
    user_ip="corrupti",
)
    
res = s.bucket_access_controls.storage_bucket_access_controls_delete(req, operations.StorageBucketAccessControlsDeleteSecurity(
    oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
    oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
))

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### bucket_access_controls

* `storage_bucket_access_controls_delete` - Permanently deletes the ACL entry for the specified entity on the specified bucket.
* `storage_bucket_access_controls_get` - Returns the ACL entry for the specified entity on the specified bucket.
* `storage_bucket_access_controls_insert` - Creates a new ACL entry on the specified bucket.
* `storage_bucket_access_controls_list` - Retrieves ACL entries on the specified bucket.
* `storage_bucket_access_controls_patch` - Updates an ACL entry on the specified bucket. This method supports patch semantics.
* `storage_bucket_access_controls_update` - Updates an ACL entry on the specified bucket.

### buckets

* `storage_buckets_delete` - Permanently deletes an empty bucket.
* `storage_buckets_get` - Returns metadata for the specified bucket.
* `storage_buckets_insert` - Creates a new bucket.
* `storage_buckets_list` - Retrieves a list of buckets for a given project.
* `storage_buckets_patch` - Updates a bucket. This method supports patch semantics.
* `storage_buckets_update` - Updates a bucket.

### channels

* `storage_channels_stop` - Stop watching resources through this channel

### default_object_access_controls

* `storage_default_object_access_controls_delete` - Permanently deletes the default object ACL entry for the specified entity on the specified bucket.
* `storage_default_object_access_controls_get` - Returns the default object ACL entry for the specified entity on the specified bucket.
* `storage_default_object_access_controls_insert` - Creates a new default object ACL entry on the specified bucket.
* `storage_default_object_access_controls_list` - Retrieves default object ACL entries on the specified bucket.
* `storage_default_object_access_controls_patch` - Updates a default object ACL entry on the specified bucket. This method supports patch semantics.
* `storage_default_object_access_controls_update` - Updates a default object ACL entry on the specified bucket.

### object_access_controls

* `storage_object_access_controls_delete` - Permanently deletes the ACL entry for the specified entity on the specified object.
* `storage_object_access_controls_get` - Returns the ACL entry for the specified entity on the specified object.
* `storage_object_access_controls_insert` - Creates a new ACL entry on the specified object.
* `storage_object_access_controls_list` - Retrieves ACL entries on the specified object.
* `storage_object_access_controls_patch` - Updates an ACL entry on the specified object. This method supports patch semantics.
* `storage_object_access_controls_update` - Updates an ACL entry on the specified object.

### objects

* `storage_objects_compose` - Concatenates a list of existing objects into a new object in the same bucket.
* `storage_objects_copy` - Copies an object to a destination in the same location. Optionally overrides metadata.
* `storage_objects_delete` - Deletes data blobs and associated metadata. Deletions are permanent if versioning is not enabled for the bucket, or if the generation parameter is used.
* `storage_objects_get` - Retrieves objects or their associated metadata.
* `storage_objects_insert` - Stores new data blobs and associated metadata.
* `storage_objects_list` - Retrieves a list of objects matching the criteria.
* `storage_objects_patch` - Updates a data blob's associated metadata. This method supports patch semantics.
* `storage_objects_update` - Updates a data blob's associated metadata.
* `storage_objects_watch_all` - Watch for changes on all objects in a bucket.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
