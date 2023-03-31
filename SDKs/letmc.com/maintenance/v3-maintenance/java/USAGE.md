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