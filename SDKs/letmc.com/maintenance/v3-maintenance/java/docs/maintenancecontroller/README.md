# maintenanceController

### Available Operations

* [maintenanceControllerCreateMaintenanceJobForm](#maintenancecontrollercreatemaintenancejobform) - Create a maintenance job for a specific branch
* [maintenanceControllerCreateMaintenanceJobJson](#maintenancecontrollercreatemaintenancejobjson) - Create a maintenance job for a specific branch
* [maintenanceControllerCreateMaintenanceJobRaw](#maintenancecontrollercreatemaintenancejobraw) - Create a maintenance job for a specific branch

## maintenanceControllerCreateMaintenanceJobForm

Create a maintenance job for a specific branch

### Example Usage

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
                                        mimeType = "quis";
                                        url = "veritatis";
                                    }}),
                                }};
                                externalID = "deserunt";
                                issueFault = "perferendis";
                                issueNotes = "ipsam";
                                issuePriority = MaintenanceIssueModelIssuePriorityEnum.HIGH;
                                issueTitle = "sapiente";
                                propertyAddress1 = "quo";
                                propertyAddress2 = "odit";
                                propertyAddress3 = "at";
                                propertyAddress4 = "at";
                                propertyCountry = "maiores";
                                propertyPostcode = "molestiae";
                                reportedAt = OffsetDateTime.parse("2020-08-07T00:03:55.328Z");
                                tenantEMailAddress = "esse";
                                tenantForename = "totam";
                                tenantPhonePrimary = "porro";
                                tenantPhoneSecondary = "dolorum";
                                tenantPresenceRequested = false;
                                tenantSurname = "dicta";
                                tenantTitle = "nam";
                            }};, "officia", "occaecati");            

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

## maintenanceControllerCreateMaintenanceJobJson

Create a maintenance job for a specific branch

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MaintenanceControllerCreateMaintenanceJobJsonRequest;
import org.openapis.openapi.models.operations.MaintenanceControllerCreateMaintenanceJobJsonResponse;
import org.openapis.openapi.models.shared.MaintenanceDocumentModel;
import org.openapis.openapi.models.shared.MaintenanceIssueModel;
import org.openapis.openapi.models.shared.MaintenanceIssueModelIssuePriorityEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MaintenanceControllerCreateMaintenanceJobJsonRequest req = new MaintenanceControllerCreateMaintenanceJobJsonRequest(                new MaintenanceIssueModel() {{
                                documents = new org.openapis.openapi.models.shared.MaintenanceDocumentModel[]{{
                                    add(new MaintenanceDocumentModel() {{
                                        mimeType = "deleniti";
                                        url = "hic";
                                    }}),
                                }};
                                externalID = "optio";
                                issueFault = "totam";
                                issueNotes = "beatae";
                                issuePriority = MaintenanceIssueModelIssuePriorityEnum.MEDIUM;
                                issueTitle = "molestiae";
                                propertyAddress1 = "modi";
                                propertyAddress2 = "qui";
                                propertyAddress3 = "impedit";
                                propertyAddress4 = "cum";
                                propertyCountry = "esse";
                                propertyPostcode = "ipsum";
                                reportedAt = OffsetDateTime.parse("2022-09-24T06:58:38.511Z");
                                tenantEMailAddress = "perferendis";
                                tenantForename = "ad";
                                tenantPhonePrimary = "natus";
                                tenantPhoneSecondary = "sed";
                                tenantPresenceRequested = false;
                                tenantSurname = "iste";
                                tenantTitle = "dolor";
                            }};, "natus", "laboriosam");            

            MaintenanceControllerCreateMaintenanceJobJsonResponse res = sdk.maintenanceController.maintenanceControllerCreateMaintenanceJobJson(req);

            if (res.object != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## maintenanceControllerCreateMaintenanceJobRaw

Create a maintenance job for a specific branch

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MaintenanceControllerCreateMaintenanceJobRawRequest;
import org.openapis.openapi.models.operations.MaintenanceControllerCreateMaintenanceJobRawResponse;
import org.openapis.openapi.models.shared.MaintenanceDocumentModel;
import org.openapis.openapi.models.shared.MaintenanceIssueModel;
import org.openapis.openapi.models.shared.MaintenanceIssueModelIssuePriorityEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MaintenanceControllerCreateMaintenanceJobRawRequest req = new MaintenanceControllerCreateMaintenanceJobRawRequest("hic".getBytes(), "saepe", "fuga");            

            MaintenanceControllerCreateMaintenanceJobRawResponse res = sdk.maintenanceController.maintenanceControllerCreateMaintenanceJobRaw(req);

            if (res.object != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
