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

import org.openapis.openapi.models.operations.MaintenanceControllerCreateMaintenanceJobFormPathParams;
import org.openapis.openapi.models.operations.MaintenanceControllerCreateMaintenanceJobFormRequest;
import org.openapis.openapi.models.operations.MaintenanceControllerCreateMaintenanceJobFormResponse;
import org.openapis.openapi.models.shared.MaintenanceIssueModelIssuePriorityEnum;
import org.openapis.openapi.models.shared.MaintenanceIssueModel;
import org.openapis.openapi.models.shared.MaintenanceDocumentModel;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MaintenanceControllerCreateMaintenanceJobFormRequest req = new MaintenanceControllerCreateMaintenanceJobFormRequest() {{
                pathParams = new MaintenanceControllerCreateMaintenanceJobFormPathParams() {{
                    branchID = "corrupti";
                    shortName = "provident";
                }};
                request = new MaintenanceIssueModel() {{
                    documents = new org.openapis.openapi.models.shared.MaintenanceDocumentModel[]{{
                        add(new MaintenanceDocumentModel() {{
                            mimeType = "quibusdam";
                            url = "unde";
                        }}),
                        add(new MaintenanceDocumentModel() {{
                            mimeType = "nulla";
                            url = "corrupti";
                        }}),
                        add(new MaintenanceDocumentModel() {{
                            mimeType = "illum";
                            url = "vel";
                        }}),
                    }};
                    externalID = "error";
                    issueFault = "deserunt";
                    issueNotes = "suscipit";
                    issuePriority = "Medium";
                    issueTitle = "magnam";
                    propertyAddress1 = "debitis";
                    propertyAddress2 = "ipsa";
                    propertyAddress3 = "delectus";
                    propertyAddress4 = "tempora";
                    propertyCountry = "suscipit";
                    propertyPostcode = "molestiae";
                    reportedAt = "2020-07-25T16:12:20.938Z";
                    tenantEMailAddress = "voluptatum";
                    tenantForename = "iusto";
                    tenantPhonePrimary = "excepturi";
                    tenantPhoneSecondary = "nisi";
                    tenantPresenceRequested = false;
                    tenantSurname = "recusandae";
                    tenantTitle = "temporibus";
                }};
            }};            

            MaintenanceControllerCreateMaintenanceJobFormResponse res = sdk.maintenanceController.maintenanceControllerCreateMaintenanceJobForm(req);

            if (res.object.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### maintenanceController

* `maintenanceControllerCreateMaintenanceJobForm` - Create a maintenance job for a specific branch
* `maintenanceControllerCreateMaintenanceJobJson` - Create a maintenance job for a specific branch
* `maintenanceControllerCreateMaintenanceJobRaw` - Create a maintenance job for a specific branch
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
