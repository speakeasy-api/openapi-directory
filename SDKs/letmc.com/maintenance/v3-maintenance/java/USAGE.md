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