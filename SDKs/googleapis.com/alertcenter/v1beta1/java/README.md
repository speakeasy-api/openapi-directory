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

import org.openapis.openapi.models.operations.AlertcenterAlertsBatchDeleteSecurity;
import org.openapis.openapi.models.operations.AlertcenterAlertsBatchDeleteQueryParams;
import org.openapis.openapi.models.operations.AlertcenterAlertsBatchDeleteRequest;
import org.openapis.openapi.models.operations.AlertcenterAlertsBatchDeleteResponse;
import org.openapis.openapi.models.shared.BatchDeleteAlertsRequest;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AlertcenterAlertsBatchDeleteRequest req = new AlertcenterAlertsBatchDeleteRequest() {{
                security = new AlertcenterAlertsBatchDeleteSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                queryParams = new AlertcenterAlertsBatchDeleteQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "provident";
                    alt = "proto";
                    callback = "quibusdam";
                    fields = "unde";
                    key = "nulla";
                    oauthToken = "corrupti";
                    prettyPrint = false;
                    quotaUser = "illum";
                    uploadType = "vel";
                    uploadProtocol = "error";
                }};
                request = new BatchDeleteAlertsRequest() {{
                    alertId = new String[]{{
                        add("suscipit"),
                        add("iure"),
                        add("magnam"),
                    }};
                    customerId = "debitis";
                }};
            }};            

            AlertcenterAlertsBatchDeleteResponse res = sdk.alerts.alertcenterAlertsBatchDelete(req);

            if (res.batchDeleteAlertsResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### alerts

* `alertcenterAlertsBatchDelete` - Performs batch delete operation on alerts.
* `alertcenterAlertsBatchUndelete` - Performs batch undelete operation on alerts.
* `alertcenterAlertsDelete` - Marks the specified alert for deletion. An alert that has been marked for deletion is removed from Alert Center after 30 days. Marking an alert for deletion has no effect on an alert which has already been marked for deletion. Attempting to mark a nonexistent alert for deletion results in a `NOT_FOUND` error.
* `alertcenterAlertsFeedbackCreate` - Creates new feedback for an alert. Attempting to create a feedback for a non-existent alert returns `NOT_FOUND` error. Attempting to create a feedback for an alert that is marked for deletion returns `FAILED_PRECONDITION' error.
* `alertcenterAlertsFeedbackList` - Lists all the feedback for an alert. Attempting to list feedbacks for a non-existent alert returns `NOT_FOUND` error.
* `alertcenterAlertsGet` - Gets the specified alert. Attempting to get a nonexistent alert returns `NOT_FOUND` error.
* `alertcenterAlertsGetMetadata` - Returns the metadata of an alert. Attempting to get metadata for a non-existent alert returns `NOT_FOUND` error.
* `alertcenterAlertsList` - Lists the alerts.
* `alertcenterAlertsUndelete` - Restores, or "undeletes", an alert that was marked for deletion within the past 30 days. Attempting to undelete an alert which was marked for deletion over 30 days ago (which has been removed from the Alert Center database) or a nonexistent alert returns a `NOT_FOUND` error. Attempting to undelete an alert which has not been marked for deletion has no effect.

### v1beta1

* `alertcenterGetSettings` - Returns customer-level settings.
* `alertcenterUpdateSettings` - Updates the customer-level settings.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
