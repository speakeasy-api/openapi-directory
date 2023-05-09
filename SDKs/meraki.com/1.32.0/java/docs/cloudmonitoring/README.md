# cloudMonitoring

### Available Operations

* [createOrganizationInventoryOnboardingCloudMonitoringExportEvent](#createorganizationinventoryonboardingcloudmonitoringexportevent) - Imports event logs related to the onboarding app into elastisearch
* [createOrganizationInventoryOnboardingCloudMonitoringImport](#createorganizationinventoryonboardingcloudmonitoringimport) - Commits the import operation to complete the onboarding of a device into Dashboard for monitoring.
* [createOrganizationInventoryOnboardingCloudMonitoringPrepare](#createorganizationinventoryonboardingcloudmonitoringprepare) - Initiates or updates an import session
* [getOrganizationInventoryOnboardingCloudMonitoringImports](#getorganizationinventoryonboardingcloudmonitoringimports) - Check the status of a committed Import operation
* [getOrganizationInventoryOnboardingCloudMonitoringNetworks](#getorganizationinventoryonboardingcloudmonitoringnetworks) - Returns list of networks eligible for adding cloud monitored device

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
                .setSecurity(new Security("cupiditate") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateOrganizationInventoryOnboardingCloudMonitoringExportEventRequest req = new CreateOrganizationInventoryOnboardingCloudMonitoringExportEventRequest(                new CreateOrganizationInventoryOnboardingCloudMonitoringExportEventRequestBody("nisi", 812431L) {{
                                request = "tempore";
                                targetOS = "facere";
                            }};, "earum");            

            CreateOrganizationInventoryOnboardingCloudMonitoringExportEventResponse res = sdk.cloudMonitoring.createOrganizationInventoryOnboardingCloudMonitoringExportEvent(req);

            if (res.createOrganizationInventoryOnboardingCloudMonitoringExportEvent202ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

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
                .setSecurity(new Security("debitis") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateOrganizationInventoryOnboardingCloudMonitoringImportRequest req = new CreateOrganizationInventoryOnboardingCloudMonitoringImportRequest(                new CreateOrganizationInventoryOnboardingCloudMonitoringImportRequestBody(                new org.openapis.openapi.models.operations.CreateOrganizationInventoryOnboardingCloudMonitoringImportRequestBodyDevices[]{{
                                                add(new CreateOrganizationInventoryOnboardingCloudMonitoringImportRequestBodyDevices("provident", "provident", "soluta") {{
                                                    deviceId = "reiciendis";
                                                    networkId = "ex";
                                                    udi = "tempore";
                                                }}),
                                                add(new CreateOrganizationInventoryOnboardingCloudMonitoringImportRequestBodyDevices("corporis", "nisi", "aspernatur") {{
                                                    deviceId = "maxime";
                                                    networkId = "commodi";
                                                    udi = "consectetur";
                                                }}),
                                                add(new CreateOrganizationInventoryOnboardingCloudMonitoringImportRequestBodyDevices("temporibus", "delectus", "enim") {{
                                                    deviceId = "eveniet";
                                                    networkId = "tempore";
                                                    udi = "asperiores";
                                                }}),
                                                add(new CreateOrganizationInventoryOnboardingCloudMonitoringImportRequestBodyDevices("iste", "labore", "porro") {{
                                                    deviceId = "ipsam";
                                                    networkId = "porro";
                                                    udi = "dolores";
                                                }}),
                                            }});, "eaque");            

            CreateOrganizationInventoryOnboardingCloudMonitoringImportResponse res = sdk.cloudMonitoring.createOrganizationInventoryOnboardingCloudMonitoringImport(req);

            if (res.createOrganizationInventoryOnboardingCloudMonitoringImport201ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createOrganizationInventoryOnboardingCloudMonitoringPrepare

Initiates or updates an import session. An import ID will be generated and used when you are ready to commit the import.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequest;
import org.openapis.openapi.models.operations.CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBody;
import org.openapis.openapi.models.operations.CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevices;
import org.openapis.openapi.models.operations.CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesTunnel;
import org.openapis.openapi.models.operations.CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesUser;
import org.openapis.openapi.models.operations.CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesVty;
import org.openapis.openapi.models.operations.CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesVtyAccessList;
import org.openapis.openapi.models.operations.CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesVtyAccessListVtyIn;
import org.openapis.openapi.models.operations.CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesVtyAccessListVtyOut;
import org.openapis.openapi.models.operations.CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesVtyAuthentication;
import org.openapis.openapi.models.operations.CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesVtyAuthenticationGroup;
import org.openapis.openapi.models.operations.CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesVtyAuthorization;
import org.openapis.openapi.models.operations.CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesVtyAuthorizationGroup;
import org.openapis.openapi.models.operations.CreateOrganizationInventoryOnboardingCloudMonitoringPrepareResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ea") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequest req = new CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequest(                new CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBody(                new org.openapis.openapi.models.operations.CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevices[]{{
                                                add(new CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevices("occaecati") {{
                                                    sudi = "nobis";
                                                    tunnel = new CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesTunnel() {{
                                                        certificateName = "accusantium";
                                                        localInterface = 408509L;
                                                        loopbackNumber = 671504L;
                                                        name = "Beverly Lubowitz";
                                                    }};
                                                    user = new CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesUser() {{
                                                        username = "Helene_Fritsch93";
                                                    }};
                                                    vty = new CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesVty() {{
                                                        accessList = new CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesVtyAccessList() {{
                                                            vtyIn = new CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesVtyAccessListVtyIn() {{
                                                                name = "Angelina Batz";
                                                            }};
                                                            vtyOut = new CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesVtyAccessListVtyOut() {{
                                                                name = "Chester Ward";
                                                            }};
                                                        }};
                                                        authentication = new CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesVtyAuthentication() {{
                                                            group = new CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesVtyAuthenticationGroup() {{
                                                                name = "Arnold Dooley";
                                                            }};
                                                        }};
                                                        authorization = new CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesVtyAuthorization() {{
                                                            group = new CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesVtyAuthorizationGroup() {{
                                                                name = "Sheila Grant";
                                                            }};
                                                        }};
                                                        endLineNumber = 76818L;
                                                        rotaryNumber = 361331L;
                                                        startLineNumber = 55356L;
                                                    }};
                                                }}),
                                            }});, "dolorum");            

            CreateOrganizationInventoryOnboardingCloudMonitoringPrepareResponse res = sdk.cloudMonitoring.createOrganizationInventoryOnboardingCloudMonitoringPrepare(req);

            if (res.createOrganizationInventoryOnboardingCloudMonitoringPrepare201ApplicationJSONObjects != null) {
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
                .setSecurity(new Security("blanditiis") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationInventoryOnboardingCloudMonitoringImportsRequest req = new GetOrganizationInventoryOnboardingCloudMonitoringImportsRequest(                new String[]{{
                                add("deleniti"),
                                add("dignissimos"),
                                add("doloremque"),
                                add("quibusdam"),
                            }}, "adipisci");            

            GetOrganizationInventoryOnboardingCloudMonitoringImportsResponse res = sdk.cloudMonitoring.getOrganizationInventoryOnboardingCloudMonitoringImports(req);

            if (res.getOrganizationInventoryOnboardingCloudMonitoringImports200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOrganizationInventoryOnboardingCloudMonitoringNetworks

Returns list of networks eligible for adding cloud monitored device

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganizationInventoryOnboardingCloudMonitoringNetworksDeviceTypeEnum;
import org.openapis.openapi.models.operations.GetOrganizationInventoryOnboardingCloudMonitoringNetworksRequest;
import org.openapis.openapi.models.operations.GetOrganizationInventoryOnboardingCloudMonitoringNetworksResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("minus") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationInventoryOnboardingCloudMonitoringNetworksRequest req = new GetOrganizationInventoryOnboardingCloudMonitoringNetworksRequest(GetOrganizationInventoryOnboardingCloudMonitoringNetworksDeviceTypeEnum.SWITCH_, "id") {{
                endingBefore = "architecto";
                perPage = 978229L;
                startingAfter = "perspiciatis";
            }};            

            GetOrganizationInventoryOnboardingCloudMonitoringNetworksResponse res = sdk.cloudMonitoring.getOrganizationInventoryOnboardingCloudMonitoringNetworks(req);

            if (res.getOrganizationInventoryOnboardingCloudMonitoringNetworks202ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
