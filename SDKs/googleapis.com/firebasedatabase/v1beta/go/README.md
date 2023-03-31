# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/firebasedatabase/v1beta/go
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

    req := operations.FirebasedatabaseProjectsLocationsInstancesCreateRequest{
        DollarXgafv: "2",
        DatabaseInstanceInput: &shared.DatabaseInstanceInput{
            Name: "provident",
            Type: "USER_DATABASE",
        },
        AccessToken: "quibusdam",
        Alt: "media",
        Callback: "nulla",
        DatabaseID: "corrupti",
        Fields: "illum",
        Key: "vel",
        OauthToken: "error",
        Parent: "deserunt",
        PrettyPrint: false,
        QuotaUser: "suscipit",
        UploadType: "iure",
        UploadProtocol: "magnam",
        ValidateOnly: false,
    }

    ctx := context.Background()
    res, err := s.Projects.FirebasedatabaseProjectsLocationsInstancesCreate(ctx, req, operations.FirebasedatabaseProjectsLocationsInstancesCreateSecurity{
        Option1: &operations.FirebasedatabaseProjectsLocationsInstancesCreateSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DatabaseInstance != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### Projects

* `FirebasedatabaseProjectsLocationsInstancesCreate` - Requests that a new DatabaseInstance be created. The state of a successfully created DatabaseInstance is ACTIVE. Only available for projects on the Blaze plan. Projects can be upgraded using the Cloud Billing API https://cloud.google.com/billing/reference/rest/v1/projects/updateBillingInfo. Note that it might take a few minutes for billing enablement state to propagate to Firebase systems.
* `FirebasedatabaseProjectsLocationsInstancesDelete` - Marks a DatabaseInstance to be deleted. The DatabaseInstance will be set to the DELETED state for 20 days, and will be purged within 30 days. The default database cannot be deleted. IDs for deleted database instances may never be recovered or re-used. The Database may only be deleted if it is already in a DISABLED state.
* `FirebasedatabaseProjectsLocationsInstancesDisable` - Disables a DatabaseInstance. The database can be re-enabled later using ReenableDatabaseInstance. When a database is disabled, all reads and writes are denied, including view access in the Firebase console.
* `FirebasedatabaseProjectsLocationsInstancesGet` - Gets the DatabaseInstance identified by the specified resource name.
* `FirebasedatabaseProjectsLocationsInstancesList` - Lists each DatabaseInstance associated with the specified parent project. The list items are returned in no particular order, but will be a consistent view of the database instances when additional requests are made with a `pageToken`. The resulting list contains instances in any STATE. The list results may be stale by a few seconds. Use GetDatabaseInstance for consistent reads.
* `FirebasedatabaseProjectsLocationsInstancesReenable` - Enables a DatabaseInstance. The database must have been disabled previously using DisableDatabaseInstance. The state of a successfully reenabled DatabaseInstance is ACTIVE.
* `FirebasedatabaseProjectsLocationsInstancesUndelete` - Restores a DatabaseInstance that was previously marked to be deleted. After the delete method is used, DatabaseInstances are set to the DELETED state for 20 days, and will be purged within 30 days. Databases in the DELETED state can be undeleted without losing any data. This method may only be used on a DatabaseInstance in the DELETED state. Purged DatabaseInstances may not be recovered.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
