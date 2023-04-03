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
                maintenanceIssueModel = new MaintenanceIssueModel() {{
                    documents = new org.openapis.openapi.models.shared.MaintenanceDocumentModel[]{{
                        add(new MaintenanceDocumentModel() {{
                            mimeType = "provident";
                            url = "distinctio";
                        }}),
                        add(new MaintenanceDocumentModel() {{
                            mimeType = "quibusdam";
                            url = "unde";
                        }}),
                        add(new MaintenanceDocumentModel() {{
                            mimeType = "nulla";
                            url = "corrupti";
                        }}),
                    }};
                    externalID = "illum";
                    issueFault = "vel";
                    issueNotes = "error";
                    issuePriority = "Medium";
                    issueTitle = "suscipit";
                    propertyAddress1 = "iure";
                    propertyAddress2 = "magnam";
                    propertyAddress3 = "debitis";
                    propertyAddress4 = "ipsa";
                    propertyCountry = "delectus";
                    propertyPostcode = "tempora";
                    reportedAt = "2022-07-10T15:39:12.517Z";
                    tenantEMailAddress = "minus";
                    tenantForename = "placeat";
                    tenantPhonePrimary = "voluptatum";
                    tenantPhoneSecondary = "iusto";
                    tenantPresenceRequested = false;
                    tenantSurname = "excepturi";
                    tenantTitle = "nisi";
                }};
                branchID = "recusandae";
                shortName = "temporibus";
            }}            

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
## Available Resources and Operations


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
