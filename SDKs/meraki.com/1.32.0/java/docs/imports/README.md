# imports

### Available Operations

* [createOrganizationInventoryOnboardingCloudMonitoringImport](#createorganizationinventoryonboardingcloudmonitoringimport) - Commits the import operation to complete the onboarding of a device into Dashboard for monitoring.
* [getOrganizationInventoryOnboardingCloudMonitoringImports](#getorganizationinventoryonboardingcloudmonitoringimports) - Check the status of a committed Import operation

## createOrganizationInventoryOnboardingCloudMonitoringImport

Commits the import operation to complete the onboarding of a device into Dashboard for monitoring.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateOrganizationInventoryOnboardingCloudMonitoringImportRequest;
import org.openapis.openapi.models.operations.CreateOrganizationInventoryOnboardingCloudMonitoringImportRequestBody;
import org.openapis.openapi.models.operations.CreateOrganizationInventoryOnboardingCloudMonitoringImportRequestBodyDevices;
import org.openapis.openapi.models.operations.CreateOrganizationInventoryOnboardingCloudMonitoringImportResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("numquam") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateOrganizationInventoryOnboardingCloudMonitoringImportRequest req = new CreateOrganizationInventoryOnboardingCloudMonitoringImportRequest(                new CreateOrganizationInventoryOnboardingCloudMonitoringImportRequestBody(                new org.openapis.openapi.models.operations.CreateOrganizationInventoryOnboardingCloudMonitoringImportRequestBodyDevices[]{{
                                                add(new CreateOrganizationInventoryOnboardingCloudMonitoringImportRequestBodyDevices("a", "dignissimos", "ratione") {{
                                                    deviceId = "illo";
                                                    networkId = "dolores";
                                                    udi = "magni";
                                                }}),
                                                add(new CreateOrganizationInventoryOnboardingCloudMonitoringImportRequestBodyDevices("corporis", "odio", "iure") {{
                                                    deviceId = "ex";
                                                    networkId = "explicabo";
                                                    udi = "consectetur";
                                                }}),
                                                add(new CreateOrganizationInventoryOnboardingCloudMonitoringImportRequestBodyDevices("quos", "officia", "maxime") {{
                                                    deviceId = "amet";
                                                    networkId = "voluptatibus";
                                                    udi = "eos";
                                                }}),
                                            }});, "est");            

            CreateOrganizationInventoryOnboardingCloudMonitoringImportResponse res = sdk.imports.createOrganizationInventoryOnboardingCloudMonitoringImport(req);

            if (res.createOrganizationInventoryOnboardingCloudMonitoringImport201ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOrganizationInventoryOnboardingCloudMonitoringImports

Check the status of a committed Import operation

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganizationInventoryOnboardingCloudMonitoringImportsRequest;
import org.openapis.openapi.models.operations.GetOrganizationInventoryOnboardingCloudMonitoringImportsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("cumque") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationInventoryOnboardingCloudMonitoringImportsRequest req = new GetOrganizationInventoryOnboardingCloudMonitoringImportsRequest(                new String[]{{
                                add("ex"),
                            }}, "ab");            

            GetOrganizationInventoryOnboardingCloudMonitoringImportsResponse res = sdk.imports.getOrganizationInventoryOnboardingCloudMonitoringImports(req);

            if (res.getOrganizationInventoryOnboardingCloudMonitoringImports200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
