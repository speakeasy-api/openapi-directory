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

import org.openapis.openapi.models.operations.FirebaseappdistributionMediaUploadSecurity;
import org.openapis.openapi.models.operations.FirebaseappdistributionMediaUploadRequest;
import org.openapis.openapi.models.operations.FirebaseappdistributionMediaUploadResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleFirebaseAppdistroV1UploadReleaseRequest;
import org.openapis.openapi.models.shared.GdataMediaReferenceTypeEnum;
import org.openapis.openapi.models.shared.GdataMedia;
import org.openapis.openapi.models.shared.GdataObjectId;
import org.openapis.openapi.models.shared.GdataDownloadParameters;
import org.openapis.openapi.models.shared.GdataDiffVersionResponse;
import org.openapis.openapi.models.shared.GdataDiffUploadResponse;
import org.openapis.openapi.models.shared.GdataCompositeMediaReferenceTypeEnum;
import org.openapis.openapi.models.shared.GdataCompositeMedia;
import org.openapis.openapi.models.shared.GdataBlobstore2Info;
import org.openapis.openapi.models.shared.GdataDiffUploadRequest;
import org.openapis.openapi.models.shared.GdataDiffDownloadResponse;
import org.openapis.openapi.models.shared.GdataDiffChecksumsResponse;
import org.openapis.openapi.models.shared.GdataContentTypeInfo;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FirebaseappdistributionMediaUploadRequest req = new FirebaseappdistributionMediaUploadRequest() {{
                dollarXgafv = "2";
                requestBody = "provident".getBytes();
                accessToken = "distinctio";
                alt = "proto";
                app = "unde";
                callback = "nulla";
                fields = "corrupti";
                key = "illum";
                oauthToken = "vel";
                prettyPrint = false;
                quotaUser = "error";
                uploadType = "deserunt";
                uploadProtocol = "suscipit";
            }}            

            FirebaseappdistributionMediaUploadResponse res = sdk.media.firebaseappdistributionMediaUpload(req, new FirebaseappdistributionMediaUploadSecurity() {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleLongrunningOperation.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### media

* `firebaseappdistributionMediaUpload` - Uploads a binary. Uploading a binary can result in a new release being created, an update to an existing release, or a no-op if a release with the same binary already exists.

### projects

* `firebaseappdistributionProjectsAppsReleasesBatchDelete` - Deletes releases. A maximum of 100 releases can be deleted per request.
* `firebaseappdistributionProjectsAppsReleasesDistribute` - Distributes a release to testers. This call does the following: 1. Creates testers for the specified emails, if none exist. 2. Adds the testers and groups to the release. 3. Sends new testers an invitation email. 4. Sends existing testers a new release email. The request will fail with a `INVALID_ARGUMENT` if it contains a group that doesn't exist.
* `firebaseappdistributionProjectsAppsReleasesFeedbackReportsList` - Lists feedback reports. By default, sorts by `createTime` in descending order.
* `firebaseappdistributionProjectsAppsReleasesList` - Lists releases. By default, sorts by `createTime` in descending order.
* `firebaseappdistributionProjectsAppsReleasesOperationsCancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `firebaseappdistributionProjectsAppsReleasesOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* `firebaseappdistributionProjectsAppsReleasesOperationsWait` - Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state. If the operation is already done, the latest state is immediately returned. If the timeout specified is greater than the default HTTP/RPC timeout, the HTTP/RPC timeout is used. If the server does not support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Note that this method is on a best-effort basis. It may return the latest state before the specified timeout (including immediately), meaning even an immediate response is no guarantee that the operation is done.
* `firebaseappdistributionProjectsGroupsBatchJoin` - Batch adds members to a group. The testers will gain access to all releases that the groups have access to.
* `firebaseappdistributionProjectsGroupsBatchLeave` - Batch removed members from a group. The testers will lose access to all releases that the groups have access to.
* `firebaseappdistributionProjectsGroupsCreate` - Create a group.
* `firebaseappdistributionProjectsGroupsDelete` - Delete a group.
* `firebaseappdistributionProjectsGroupsGet` - Get a group.
* `firebaseappdistributionProjectsGroupsList` - List groups.
* `firebaseappdistributionProjectsTestersBatchAdd` - Batch adds testers. This call adds testers for the specified emails if they don't already exist. Returns all testers specified in the request, including newly created and previously existing testers. This action is idempotent.
* `firebaseappdistributionProjectsTestersBatchRemove` - Batch removes testers. If found, this call deletes testers for the specified emails. Returns all deleted testers.
* `firebaseappdistributionProjectsTestersList` - Lists testers and their resource ids.
* `firebaseappdistributionProjectsTestersPatch` - Update a tester. If the testers joins a group they gain access to all releases that the group has access to.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
