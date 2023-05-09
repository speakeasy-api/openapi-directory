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

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.FirebasedatabaseProjectsLocationsInstancesCreate(ctx, operations.FirebasedatabaseProjectsLocationsInstancesCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        DatabaseInstanceInput: &shared.DatabaseInstanceInput{
            Name: sdk.String("Kelvin Sporer"),
            Type: shared.DatabaseInstanceTypeEnumDefaultDatabase.ToPointer(),
        },
        AccessToken: sdk.String("illum"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("error"),
        DatabaseID: sdk.String("deserunt"),
        Fields: sdk.String("suscipit"),
        Key: sdk.String("iure"),
        OauthToken: sdk.String("magnam"),
        Parent: "debitis",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ipsa"),
        UploadType: sdk.String("delectus"),
        UploadProtocol: sdk.String("tempora"),
        ValidateOnly: sdk.Bool(false),
    }, operations.FirebasedatabaseProjectsLocationsInstancesCreateSecurity{
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


### [Projects](docs/projects/README.md)

* [FirebasedatabaseProjectsLocationsInstancesCreate](docs/projects/README.md#firebasedatabaseprojectslocationsinstancescreate) - Requests that a new DatabaseInstance be created. The state of a successfully created DatabaseInstance is ACTIVE. Only available for projects on the Blaze plan. Projects can be upgraded using the Cloud Billing API https://cloud.google.com/billing/reference/rest/v1/projects/updateBillingInfo. Note that it might take a few minutes for billing enablement state to propagate to Firebase systems.
* [FirebasedatabaseProjectsLocationsInstancesDelete](docs/projects/README.md#firebasedatabaseprojectslocationsinstancesdelete) - Marks a DatabaseInstance to be deleted. The DatabaseInstance will be set to the DELETED state for 20 days, and will be purged within 30 days. The default database cannot be deleted. IDs for deleted database instances may never be recovered or re-used. The Database may only be deleted if it is already in a DISABLED state.
* [FirebasedatabaseProjectsLocationsInstancesDisable](docs/projects/README.md#firebasedatabaseprojectslocationsinstancesdisable) - Disables a DatabaseInstance. The database can be re-enabled later using ReenableDatabaseInstance. When a database is disabled, all reads and writes are denied, including view access in the Firebase console.
* [FirebasedatabaseProjectsLocationsInstancesGet](docs/projects/README.md#firebasedatabaseprojectslocationsinstancesget) - Gets the DatabaseInstance identified by the specified resource name.
* [FirebasedatabaseProjectsLocationsInstancesList](docs/projects/README.md#firebasedatabaseprojectslocationsinstanceslist) - Lists each DatabaseInstance associated with the specified parent project. The list items are returned in no particular order, but will be a consistent view of the database instances when additional requests are made with a `pageToken`. The resulting list contains instances in any STATE. The list results may be stale by a few seconds. Use GetDatabaseInstance for consistent reads.
* [FirebasedatabaseProjectsLocationsInstancesReenable](docs/projects/README.md#firebasedatabaseprojectslocationsinstancesreenable) - Enables a DatabaseInstance. The database must have been disabled previously using DisableDatabaseInstance. The state of a successfully reenabled DatabaseInstance is ACTIVE.
* [FirebasedatabaseProjectsLocationsInstancesUndelete](docs/projects/README.md#firebasedatabaseprojectslocationsinstancesundelete) - Restores a DatabaseInstance that was previously marked to be deleted. After the delete method is used, DatabaseInstances are set to the DELETED state for 20 days, and will be purged within 30 days. Databases in the DELETED state can be undeleted without losing any data. This method may only be used on a DatabaseInstance in the DELETED state. Purged DatabaseInstances may not be recovered.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
