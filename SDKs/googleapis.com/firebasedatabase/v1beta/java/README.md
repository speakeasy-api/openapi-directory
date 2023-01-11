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

            FirebasedatabaseProjectsLocationsInstancesCreateRequest req = new FirebasedatabaseProjectsLocationsInstancesCreateRequest() {{
                security = new FirebasedatabaseProjectsLocationsInstancesCreateSecurity() {{
                    option1 = new FirebasedatabaseProjectsLocationsInstancesCreateSecurityOption1() {{
                        oauth2 = new SchemeOauth2() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                        oauth2c = new SchemeOauth2c() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                    }};
                }};
                pathParams = new FirebasedatabaseProjectsLocationsInstancesCreatePathParams() {{
                    parent = "sit";
                }};
                queryParams = new FirebasedatabaseProjectsLocationsInstancesCreateQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "culpa";
                    alt = "media";
                    callback = "consequuntur";
                    databaseId = "dolor";
                    fields = "expedita";
                    key = "voluptas";
                    oauthToken = "fugit";
                    prettyPrint = false;
                    quotaUser = "nihil";
                    uploadType = "rerum";
                    uploadProtocol = "dicta";
                    validateOnly = true;
                }};
                request = new DatabaseInstanceInput() {{
                    name = "voluptatum";
                    type = "DATABASE_INSTANCE_TYPE_UNSPECIFIED";
                }};
            }};

            FirebasedatabaseProjectsLocationsInstancesCreateResponse res = sdk.projects.firebasedatabaseProjectsLocationsInstancesCreate(req);

            if (res.databaseInstance.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### projects

* `firebasedatabaseProjectsLocationsInstancesCreate` - Requests that a new DatabaseInstance be created. The state of a successfully created DatabaseInstance is ACTIVE. Only available for projects on the Blaze plan. Projects can be upgraded using the Cloud Billing API https://cloud.google.com/billing/reference/rest/v1/projects/updateBillingInfo. Note that it might take a few minutes for billing enablement state to propagate to Firebase systems.
* `firebasedatabaseProjectsLocationsInstancesDelete` - Marks a DatabaseInstance to be deleted. The DatabaseInstance will be set to the DELETED state for 20 days, and will be purged within 30 days. The default database cannot be deleted. IDs for deleted database instances may never be recovered or re-used. The Database may only be deleted if it is already in a DISABLED state.
* `firebasedatabaseProjectsLocationsInstancesDisable` - Disables a DatabaseInstance. The database can be re-enabled later using ReenableDatabaseInstance. When a database is disabled, all reads and writes are denied, including view access in the Firebase console.
* `firebasedatabaseProjectsLocationsInstancesGet` - Gets the DatabaseInstance identified by the specified resource name.
* `firebasedatabaseProjectsLocationsInstancesList` - Lists each DatabaseInstance associated with the specified parent project. The list items are returned in no particular order, but will be a consistent view of the database instances when additional requests are made with a `pageToken`. The resulting list contains instances in any STATE. The list results may be stale by a few seconds. Use GetDatabaseInstance for consistent reads.
* `firebasedatabaseProjectsLocationsInstancesReenable` - Enables a DatabaseInstance. The database must have been disabled previously using DisableDatabaseInstance. The state of a successfully reenabled DatabaseInstance is ACTIVE.
* `firebasedatabaseProjectsLocationsInstancesUndelete` - Restores a DatabaseInstance that was previously marked to be deleted. After the delete method is used, DatabaseInstances are set to the DELETED state for 20 days, and will be purged within 30 days. Databases in the DELETED state can be undeleted without losing any data. This method may only be used on a DatabaseInstance in the DELETED state. Purged DatabaseInstances may not be recovered.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
