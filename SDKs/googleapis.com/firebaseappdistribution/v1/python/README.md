# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/googleapis.com/firebaseappdistribution/v1/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.FirebaseappdistributionMediaUploadRequest(
    dollar_xgafv="2",
    request_body="provident".encode(),
    access_token="distinctio",
    alt="proto",
    app="unde",
    callback="nulla",
    fields_="corrupti",
    key="illum",
    oauth_token="vel",
    pretty_print=False,
    quota_user="error",
    upload_type="deserunt",
    upload_protocol="suscipit",
)
    
res = s.media.firebaseappdistribution_media_upload(req, operations.FirebaseappdistributionMediaUploadSecurity(
    oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
    oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
))

if res.google_longrunning_operation is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### media

* `firebaseappdistribution_media_upload` - Uploads a binary. Uploading a binary can result in a new release being created, an update to an existing release, or a no-op if a release with the same binary already exists.

### projects

* `firebaseappdistribution_projects_apps_releases_batch_delete` - Deletes releases. A maximum of 100 releases can be deleted per request.
* `firebaseappdistribution_projects_apps_releases_distribute` - Distributes a release to testers. This call does the following: 1. Creates testers for the specified emails, if none exist. 2. Adds the testers and groups to the release. 3. Sends new testers an invitation email. 4. Sends existing testers a new release email. The request will fail with a `INVALID_ARGUMENT` if it contains a group that doesn't exist.
* `firebaseappdistribution_projects_apps_releases_feedback_reports_list` - Lists feedback reports. By default, sorts by `createTime` in descending order.
* `firebaseappdistribution_projects_apps_releases_list` - Lists releases. By default, sorts by `createTime` in descending order.
* `firebaseappdistribution_projects_apps_releases_operations_cancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `firebaseappdistribution_projects_apps_releases_operations_list` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* `firebaseappdistribution_projects_apps_releases_operations_wait` - Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state. If the operation is already done, the latest state is immediately returned. If the timeout specified is greater than the default HTTP/RPC timeout, the HTTP/RPC timeout is used. If the server does not support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Note that this method is on a best-effort basis. It may return the latest state before the specified timeout (including immediately), meaning even an immediate response is no guarantee that the operation is done.
* `firebaseappdistribution_projects_groups_batch_join` - Batch adds members to a group. The testers will gain access to all releases that the groups have access to.
* `firebaseappdistribution_projects_groups_batch_leave` - Batch removed members from a group. The testers will lose access to all releases that the groups have access to.
* `firebaseappdistribution_projects_groups_create` - Create a group.
* `firebaseappdistribution_projects_groups_delete` - Delete a group.
* `firebaseappdistribution_projects_groups_get` - Get a group.
* `firebaseappdistribution_projects_groups_list` - List groups.
* `firebaseappdistribution_projects_testers_batch_add` - Batch adds testers. This call adds testers for the specified emails if they don't already exist. Returns all testers specified in the request, including newly created and previously existing testers. This action is idempotent.
* `firebaseappdistribution_projects_testers_batch_remove` - Batch removes testers. If found, this call deletes testers for the specified emails. Returns all deleted testers.
* `firebaseappdistribution_projects_testers_list` - Lists testers and their resource ids.
* `firebaseappdistribution_projects_testers_patch` - Update a tester. If the testers joins a group they gain access to all releases that the group has access to.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
