<!-- Start SDK Example Usage -->
```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MaintenanceControllerCreateMaintenanceJobFormRequest;
import org.openapis.openapi.models.operations.MaintenanceControllerCreateMaintenanceJobFormResponse;
import org.openapis.openapi.models.shared.MaintenanceDocumentModel;
import org.openapis.openapi.models.shared.MaintenanceIssueModel;
import org.openapis.openapi.models.shared.MaintenanceIssueModelIssuePriorityEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MaintenanceControllerCreateMaintenanceJobFormRequest req = new MaintenanceControllerCreateMaintenanceJobFormRequest(                new MaintenanceIssueModel() {{
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
                                issuePriority = MaintenanceIssueModelIssuePriorityEnum.MEDIUM;
                                issueTitle = "suscipit";
                                propertyAddress1 = "iure";
                                propertyAddress2 = "magnam";
                                propertyAddress3 = "debitis";
                                propertyAddress4 = "ipsa";
                                propertyCountry = "delectus";
                                propertyPostcode = "tempora";
                                reportedAt = OffsetDateTime.parse("2022-07-10T15:39:12.517Z");
                                tenantEMailAddress = "minus";
                                tenantForename = "placeat";
                                tenantPhonePrimary = "voluptatum";
                                tenantPhoneSecondary = "iusto";
                                tenantPresenceRequested = false;
                                tenantSurname = "excepturi";
                                tenantTitle = "nisi";
                            }};, "recusandae", "temporibus");            

            MaintenanceControllerCreateMaintenanceJobFormResponse res = sdk.maintenanceController.maintenanceControllerCreateMaintenanceJobForm(req);

            if (res.object != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->