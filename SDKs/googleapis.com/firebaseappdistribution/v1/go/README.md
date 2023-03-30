# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/firebaseappdistribution/v1/go
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

    req := operations.FirebaseappdistributionMediaUploadRequest{
        Security: operations.FirebaseappdistributionMediaUploadSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.FirebaseappdistributionMediaUploadPathParams{
            App: "corrupti",
        },
        QueryParams: operations.FirebaseappdistributionMediaUploadQueryParams{
            DollarXgafv: "2",
            AccessToken: "distinctio",
            Alt: "proto",
            Callback: "unde",
            Fields: "nulla",
            Key: "corrupti",
            OauthToken: "illum",
            PrettyPrint: false,
            QuotaUser: "vel",
            UploadType: "error",
            UploadProtocol: "deserunt",
        },
        Request: []byte("suscipit"),
    }

    ctx := context.Background()
    res, err := s.Media.FirebaseappdistributionMediaUpload(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleLongrunningOperation != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### Media

* `FirebaseappdistributionMediaUpload` - Uploads a binary. Uploading a binary can result in a new release being created, an update to an existing release, or a no-op if a release with the same binary already exists.

### Projects

* `FirebaseappdistributionProjectsAppsReleasesBatchDelete` - Deletes releases. A maximum of 100 releases can be deleted per request.
* `FirebaseappdistributionProjectsAppsReleasesDistribute` - Distributes a release to testers. This call does the following: 1. Creates testers for the specified emails, if none exist. 2. Adds the testers and groups to the release. 3. Sends new testers an invitation email. 4. Sends existing testers a new release email. The request will fail with a `INVALID_ARGUMENT` if it contains a group that doesn't exist.
* `FirebaseappdistributionProjectsAppsReleasesFeedbackReportsList` - Lists feedback reports. By default, sorts by `createTime` in descending order.
* `FirebaseappdistributionProjectsAppsReleasesList` - Lists releases. By default, sorts by `createTime` in descending order.
* `FirebaseappdistributionProjectsAppsReleasesOperationsCancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `FirebaseappdistributionProjectsAppsReleasesOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* `FirebaseappdistributionProjectsAppsReleasesOperationsWait` - Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state. If the operation is already done, the latest state is immediately returned. If the timeout specified is greater than the default HTTP/RPC timeout, the HTTP/RPC timeout is used. If the server does not support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Note that this method is on a best-effort basis. It may return the latest state before the specified timeout (including immediately), meaning even an immediate response is no guarantee that the operation is done.
* `FirebaseappdistributionProjectsGroupsBatchJoin` - Batch adds members to a group. The testers will gain access to all releases that the groups have access to.
* `FirebaseappdistributionProjectsGroupsBatchLeave` - Batch removed members from a group. The testers will lose access to all releases that the groups have access to.
* `FirebaseappdistributionProjectsGroupsCreate` - Create a group.
* `FirebaseappdistributionProjectsGroupsDelete` - Delete a group.
* `FirebaseappdistributionProjectsGroupsGet` - Get a group.
* `FirebaseappdistributionProjectsGroupsList` - List groups.
* `FirebaseappdistributionProjectsTestersBatchAdd` - Batch adds testers. This call adds testers for the specified emails if they don't already exist. Returns all testers specified in the request, including newly created and previously existing testers. This action is idempotent.
* `FirebaseappdistributionProjectsTestersBatchRemove` - Batch removes testers. If found, this call deletes testers for the specified emails. Returns all deleted testers.
* `FirebaseappdistributionProjectsTestersList` - Lists testers and their resource ids.
* `FirebaseappdistributionProjectsTestersPatch` - Update a tester. If the testers joins a group they gain access to all releases that the group has access to.
<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
