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
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseappdistributionMediaUploadRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseappdistributionMediaUploadSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FirebaseappdistributionMediaUploadRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->requestBody = 'provident';
    $request->accessToken = 'distinctio';
    $request->alt = AltEnum::PROTO;
    $request->app = 'unde';
    $request->callback = 'nulla';
    $request->fields = 'corrupti';
    $request->key = 'illum';
    $request->oauthToken = 'vel';
    $request->prettyPrint = false;
    $request->quotaUser = 'error';
    $request->uploadType = 'deserunt';
    $request->uploadProtocol = 'suscipit';

    $requestSecurity = new FirebaseappdistributionMediaUploadSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->media->firebaseappdistributionMediaUpload($request, $requestSecurity);

    if ($response->googleLongrunningOperation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [media](docs/media/README.md)

* [firebaseappdistributionMediaUpload](docs/media/README.md#firebaseappdistributionmediaupload) - Uploads a binary. Uploading a binary can result in a new release being created, an update to an existing release, or a no-op if a release with the same binary already exists.

### [projects](docs/projects/README.md)

* [firebaseappdistributionProjectsAppsReleasesBatchDelete](docs/projects/README.md#firebaseappdistributionprojectsappsreleasesbatchdelete) - Deletes releases. A maximum of 100 releases can be deleted per request.
* [firebaseappdistributionProjectsAppsReleasesDistribute](docs/projects/README.md#firebaseappdistributionprojectsappsreleasesdistribute) - Distributes a release to testers. This call does the following: 1. Creates testers for the specified emails, if none exist. 2. Adds the testers and groups to the release. 3. Sends new testers an invitation email. 4. Sends existing testers a new release email. The request will fail with a `INVALID_ARGUMENT` if it contains a group that doesn't exist.
* [firebaseappdistributionProjectsAppsReleasesFeedbackReportsList](docs/projects/README.md#firebaseappdistributionprojectsappsreleasesfeedbackreportslist) - Lists feedback reports. By default, sorts by `createTime` in descending order.
* [firebaseappdistributionProjectsAppsReleasesList](docs/projects/README.md#firebaseappdistributionprojectsappsreleaseslist) - Lists releases. By default, sorts by `createTime` in descending order.
* [firebaseappdistributionProjectsAppsReleasesOperationsCancel](docs/projects/README.md#firebaseappdistributionprojectsappsreleasesoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [firebaseappdistributionProjectsAppsReleasesOperationsList](docs/projects/README.md#firebaseappdistributionprojectsappsreleasesoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* [firebaseappdistributionProjectsAppsReleasesOperationsWait](docs/projects/README.md#firebaseappdistributionprojectsappsreleasesoperationswait) - Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state. If the operation is already done, the latest state is immediately returned. If the timeout specified is greater than the default HTTP/RPC timeout, the HTTP/RPC timeout is used. If the server does not support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Note that this method is on a best-effort basis. It may return the latest state before the specified timeout (including immediately), meaning even an immediate response is no guarantee that the operation is done.
* [firebaseappdistributionProjectsGroupsBatchJoin](docs/projects/README.md#firebaseappdistributionprojectsgroupsbatchjoin) - Batch adds members to a group. The testers will gain access to all releases that the groups have access to.
* [firebaseappdistributionProjectsGroupsBatchLeave](docs/projects/README.md#firebaseappdistributionprojectsgroupsbatchleave) - Batch removed members from a group. The testers will lose access to all releases that the groups have access to.
* [firebaseappdistributionProjectsGroupsCreate](docs/projects/README.md#firebaseappdistributionprojectsgroupscreate) - Create a group.
* [firebaseappdistributionProjectsGroupsDelete](docs/projects/README.md#firebaseappdistributionprojectsgroupsdelete) - Delete a group.
* [firebaseappdistributionProjectsGroupsGet](docs/projects/README.md#firebaseappdistributionprojectsgroupsget) - Get a group.
* [firebaseappdistributionProjectsGroupsList](docs/projects/README.md#firebaseappdistributionprojectsgroupslist) - List groups.
* [firebaseappdistributionProjectsTestersBatchAdd](docs/projects/README.md#firebaseappdistributionprojectstestersbatchadd) - Batch adds testers. This call adds testers for the specified emails if they don't already exist. Returns all testers specified in the request, including newly created and previously existing testers. This action is idempotent.
* [firebaseappdistributionProjectsTestersBatchRemove](docs/projects/README.md#firebaseappdistributionprojectstestersbatchremove) - Batch removes testers. If found, this call deletes testers for the specified emails. Returns all deleted testers.
* [firebaseappdistributionProjectsTestersList](docs/projects/README.md#firebaseappdistributionprojectstesterslist) - Lists testers and their resource ids.
* [firebaseappdistributionProjectsTestersPatch](docs/projects/README.md#firebaseappdistributionprojectstesterspatch) - Update a tester. If the testers joins a group they gain access to all releases that the group has access to.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
