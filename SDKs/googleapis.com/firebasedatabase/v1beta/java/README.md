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
import org.openapis.openapi.models.operations.FirebasedatabaseProjectsLocationsInstancesCreateRequest;
import org.openapis.openapi.models.operations.FirebasedatabaseProjectsLocationsInstancesCreateResponse;
import org.openapis.openapi.models.operations.FirebasedatabaseProjectsLocationsInstancesCreateSecurity;
import org.openapis.openapi.models.operations.FirebasedatabaseProjectsLocationsInstancesCreateSecurityOption1;
import org.openapis.openapi.models.operations.FirebasedatabaseProjectsLocationsInstancesCreateSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.DatabaseInstanceInput;
import org.openapis.openapi.models.shared.DatabaseInstanceTypeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FirebasedatabaseProjectsLocationsInstancesCreateRequest req = new FirebasedatabaseProjectsLocationsInstancesCreateRequest("corrupti") {{
                dollarXgafv = XgafvEnum.TWO;
                databaseInstanceInput = new DatabaseInstanceInput() {{
                    name = "Ellis Mitchell";
                    type = DatabaseInstanceTypeEnum.USER_DATABASE;
                }};;
                accessToken = "vel";
                alt = AltEnum.MEDIA;
                callback = "deserunt";
                databaseId = "suscipit";
                fields = "iure";
                key = "magnam";
                oauthToken = "debitis";
                prettyPrint = false;
                quotaUser = "ipsa";
                uploadType = "delectus";
                uploadProtocol = "tempora";
                validateOnly = false;
            }};            

            FirebasedatabaseProjectsLocationsInstancesCreateResponse res = sdk.projects.firebasedatabaseProjectsLocationsInstancesCreate(req, new FirebasedatabaseProjectsLocationsInstancesCreateSecurity() {{
                option1 = new FirebasedatabaseProjectsLocationsInstancesCreateSecurityOption1("suscipit", "molestiae") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.databaseInstance != null) {
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


### [projects](docs/projects/README.md)

* [firebasedatabaseProjectsLocationsInstancesCreate](docs/projects/README.md#firebasedatabaseprojectslocationsinstancescreate) - Requests that a new DatabaseInstance be created. The state of a successfully created DatabaseInstance is ACTIVE. Only available for projects on the Blaze plan. Projects can be upgraded using the Cloud Billing API https://cloud.google.com/billing/reference/rest/v1/projects/updateBillingInfo. Note that it might take a few minutes for billing enablement state to propagate to Firebase systems.
* [firebasedatabaseProjectsLocationsInstancesDelete](docs/projects/README.md#firebasedatabaseprojectslocationsinstancesdelete) - Marks a DatabaseInstance to be deleted. The DatabaseInstance will be set to the DELETED state for 20 days, and will be purged within 30 days. The default database cannot be deleted. IDs for deleted database instances may never be recovered or re-used. The Database may only be deleted if it is already in a DISABLED state.
* [firebasedatabaseProjectsLocationsInstancesDisable](docs/projects/README.md#firebasedatabaseprojectslocationsinstancesdisable) - Disables a DatabaseInstance. The database can be re-enabled later using ReenableDatabaseInstance. When a database is disabled, all reads and writes are denied, including view access in the Firebase console.
* [firebasedatabaseProjectsLocationsInstancesGet](docs/projects/README.md#firebasedatabaseprojectslocationsinstancesget) - Gets the DatabaseInstance identified by the specified resource name.
* [firebasedatabaseProjectsLocationsInstancesList](docs/projects/README.md#firebasedatabaseprojectslocationsinstanceslist) - Lists each DatabaseInstance associated with the specified parent project. The list items are returned in no particular order, but will be a consistent view of the database instances when additional requests are made with a `pageToken`. The resulting list contains instances in any STATE. The list results may be stale by a few seconds. Use GetDatabaseInstance for consistent reads.
* [firebasedatabaseProjectsLocationsInstancesReenable](docs/projects/README.md#firebasedatabaseprojectslocationsinstancesreenable) - Enables a DatabaseInstance. The database must have been disabled previously using DisableDatabaseInstance. The state of a successfully reenabled DatabaseInstance is ACTIVE.
* [firebasedatabaseProjectsLocationsInstancesUndelete](docs/projects/README.md#firebasedatabaseprojectslocationsinstancesundelete) - Restores a DatabaseInstance that was previously marked to be deleted. After the delete method is used, DatabaseInstances are set to the DELETED state for 20 days, and will be purged within 30 days. Databases in the DELETED state can be undeleted without losing any data. This method may only be used on a DatabaseInstance in the DELETED state. Purged DatabaseInstances may not be recovered.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
