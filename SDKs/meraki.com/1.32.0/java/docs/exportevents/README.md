# exportEvents

### Available Operations

* [createOrganizationInventoryOnboardingCloudMonitoringExportEvent](#createorganizationinventoryonboardingcloudmonitoringexportevent) - Imports event logs related to the onboarding app into elastisearch

## createOrganizationInventoryOnboardingCloudMonitoringExportEvent

Imports event logs related to the onboarding app into elastisearch

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateOrganizationInventoryOnboardingCloudMonitoringExportEventRequest;
import org.openapis.openapi.models.operations.CreateOrganizationInventoryOnboardingCloudMonitoringExportEventRequestBody;
import org.openapis.openapi.models.operations.CreateOrganizationInventoryOnboardingCloudMonitoringExportEventResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quaerat") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateOrganizationInventoryOnboardingCloudMonitoringExportEventRequest req = new CreateOrganizationInventoryOnboardingCloudMonitoringExportEventRequest(                new CreateOrganizationInventoryOnboardingCloudMonitoringExportEventRequestBody("iusto", 879306L) {{
                                request = "cumque";
                                targetOS = "nisi";
                            }};, "laborum");            

            CreateOrganizationInventoryOnboardingCloudMonitoringExportEventResponse res = sdk.exportEvents.createOrganizationInventoryOnboardingCloudMonitoringExportEvent(req);

            if (res.createOrganizationInventoryOnboardingCloudMonitoringExportEvent202ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
