# onboarding

### Available Operations

* [createOrganizationInventoryOnboardingCloudMonitoringExportEvent](#createorganizationinventoryonboardingcloudmonitoringexportevent) - Imports event logs related to the onboarding app into elastisearch
* [createOrganizationInventoryOnboardingCloudMonitoringImport](#createorganizationinventoryonboardingcloudmonitoringimport) - Commits the import operation to complete the onboarding of a device into Dashboard for monitoring.
* [createOrganizationInventoryOnboardingCloudMonitoringPrepare](#createorganizationinventoryonboardingcloudmonitoringprepare) - Initiates or updates an import session
* [getOrganizationCameraOnboardingStatuses](#getorganizationcameraonboardingstatuses) - Fetch onboarding status of cameras
* [getOrganizationInventoryOnboardingCloudMonitoringImports](#getorganizationinventoryonboardingcloudmonitoringimports) - Check the status of a committed Import operation
* [getOrganizationInventoryOnboardingCloudMonitoringNetworks](#getorganizationinventoryonboardingcloudmonitoringnetworks) - Returns list of networks eligible for adding cloud monitored device
* [updateOrganizationCameraOnboardingStatuses](#updateorganizationcameraonboardingstatuses) - Notify that credential handoff to camera has completed

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
                .setSecurity(new Security("magnam") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateOrganizationInventoryOnboardingCloudMonitoringExportEventRequest req = new CreateOrganizationInventoryOnboardingCloudMonitoringExportEventRequest(                new CreateOrganizationInventoryOnboardingCloudMonitoringExportEventRequestBody("quae", 845575L) {{
                                request = "amet";
                                targetOS = "beatae";
                            }};, "excepturi");            

            CreateOrganizationInventoryOnboardingCloudMonitoringExportEventResponse res = sdk.onboarding.createOrganizationInventoryOnboardingCloudMonitoringExportEvent(req);

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
                .setSecurity(new Security("ducimus") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateOrganizationInventoryOnboardingCloudMonitoringImportRequest req = new CreateOrganizationInventoryOnboardingCloudMonitoringImportRequest(                new CreateOrganizationInventoryOnboardingCloudMonitoringImportRequestBody(                new org.openapis.openapi.models.operations.CreateOrganizationInventoryOnboardingCloudMonitoringImportRequestBodyDevices[]{{
                                                add(new CreateOrganizationInventoryOnboardingCloudMonitoringImportRequestBodyDevices("et", "itaque", "dolorem") {{
                                                    deviceId = "illo";
                                                    networkId = "adipisci";
                                                    udi = "nulla";
                                                }}),
                                                add(new CreateOrganizationInventoryOnboardingCloudMonitoringImportRequestBodyDevices("suscipit", "quia", "dolore") {{
                                                    deviceId = "facilis";
                                                    networkId = "voluptatum";
                                                    udi = "pariatur";
                                                }}),
                                                add(new CreateOrganizationInventoryOnboardingCloudMonitoringImportRequestBodyDevices("eaque", "delectus", "placeat") {{
                                                    deviceId = "esse";
                                                    networkId = "aperiam";
                                                    udi = "occaecati";
                                                }}),
                                            }});, "provident");            

            CreateOrganizationInventoryOnboardingCloudMonitoringImportResponse res = sdk.onboarding.createOrganizationInventoryOnboardingCloudMonitoringImport(req);

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
                .setSecurity(new Security("quos") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequest req = new CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequest(                new CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBody(                new org.openapis.openapi.models.operations.CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevices[]{{
                                                add(new CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevices("sequi") {{
                                                    sudi = "itaque";
                                                    tunnel = new CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesTunnel() {{
                                                        certificateName = "repudiandae";
                                                        localInterface = 245712L;
                                                        loopbackNumber = 684043L;
                                                        name = "Ms. Delia Bartell V";
                                                    }};
                                                    user = new CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesUser() {{
                                                        username = "Ron.Emard13";
                                                    }};
                                                    vty = new CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesVty() {{
                                                        accessList = new CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesVtyAccessList() {{
                                                            vtyIn = new CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesVtyAccessListVtyIn() {{
                                                                name = "Leona Corkery";
                                                            }};
                                                            vtyOut = new CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesVtyAccessListVtyOut() {{
                                                                name = "Veronica Crist";
                                                            }};
                                                        }};
                                                        authentication = new CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesVtyAuthentication() {{
                                                            group = new CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesVtyAuthenticationGroup() {{
                                                                name = "Lionel Franecki V";
                                                            }};
                                                        }};
                                                        authorization = new CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesVtyAuthorization() {{
                                                            group = new CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesVtyAuthorizationGroup() {{
                                                                name = "Gertrude Swift";
                                                            }};
                                                        }};
                                                        endLineNumber = 148562L;
                                                        rotaryNumber = 918644L;
                                                        startLineNumber = 963273L;
                                                    }};
                                                }}),
                                                add(new CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevices("quibusdam") {{
                                                    sudi = "debitis";
                                                    tunnel = new CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesTunnel() {{
                                                        certificateName = "est";
                                                        localInterface = 958251L;
                                                        loopbackNumber = 492205L;
                                                        name = "Ray Yundt";
                                                    }};
                                                    user = new CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesUser() {{
                                                        username = "Leonel89";
                                                    }};
                                                    vty = new CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesVty() {{
                                                        accessList = new CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesVtyAccessList() {{
                                                            vtyIn = new CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesVtyAccessListVtyIn() {{
                                                                name = "Noel Vandervort";
                                                            }};
                                                            vtyOut = new CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesVtyAccessListVtyOut() {{
                                                                name = "Diane Schroeder";
                                                            }};
                                                        }};
                                                        authentication = new CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesVtyAuthentication() {{
                                                            group = new CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesVtyAuthenticationGroup() {{
                                                                name = "Neal Koepp";
                                                            }};
                                                        }};
                                                        authorization = new CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesVtyAuthorization() {{
                                                            group = new CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesVtyAuthorizationGroup() {{
                                                                name = "Kent Morar";
                                                            }};
                                                        }};
                                                        endLineNumber = 557090L;
                                                        rotaryNumber = 279372L;
                                                        startLineNumber = 782690L;
                                                    }};
                                                }}),
                                            }});, "laboriosam");            

            CreateOrganizationInventoryOnboardingCloudMonitoringPrepareResponse res = sdk.onboarding.createOrganizationInventoryOnboardingCloudMonitoringPrepare(req);

            if (res.createOrganizationInventoryOnboardingCloudMonitoringPrepare201ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOrganizationCameraOnboardingStatuses

Fetch onboarding status of cameras

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganizationCameraOnboardingStatusesRequest;
import org.openapis.openapi.models.operations.GetOrganizationCameraOnboardingStatusesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("a") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationCameraOnboardingStatusesRequest req = new GetOrganizationCameraOnboardingStatusesRequest("in") {{
                networkIds = new String[]{{
                    add("tempora"),
                    add("nemo"),
                }};
                serials = new String[]{{
                    add("corrupti"),
                    add("quos"),
                }};
            }};            

            GetOrganizationCameraOnboardingStatusesResponse res = sdk.onboarding.getOrganizationCameraOnboardingStatuses(req);

            if (res.getOrganizationCameraOnboardingStatuses200ApplicationJSONObjects != null) {
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
                .setSecurity(new Security("amet") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationInventoryOnboardingCloudMonitoringImportsRequest req = new GetOrganizationInventoryOnboardingCloudMonitoringImportsRequest(                new String[]{{
                                add("deserunt"),
                                add("accusantium"),
                                add("quia"),
                            }}, "doloremque");            

            GetOrganizationInventoryOnboardingCloudMonitoringImportsResponse res = sdk.onboarding.getOrganizationInventoryOnboardingCloudMonitoringImports(req);

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
                .setSecurity(new Security("sequi") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationInventoryOnboardingCloudMonitoringNetworksRequest req = new GetOrganizationInventoryOnboardingCloudMonitoringNetworksRequest(GetOrganizationInventoryOnboardingCloudMonitoringNetworksDeviceTypeEnum.SWITCH_, "optio") {{
                endingBefore = "deleniti";
                perPage = 157519L;
                startingAfter = "cupiditate";
            }};            

            GetOrganizationInventoryOnboardingCloudMonitoringNetworksResponse res = sdk.onboarding.getOrganizationInventoryOnboardingCloudMonitoringNetworks(req);

            if (res.getOrganizationInventoryOnboardingCloudMonitoringNetworks202ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateOrganizationCameraOnboardingStatuses

Notify that credential handoff to camera has completed

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateOrganizationCameraOnboardingStatusesRequest;
import org.openapis.openapi.models.operations.UpdateOrganizationCameraOnboardingStatusesRequestBody;
import org.openapis.openapi.models.operations.UpdateOrganizationCameraOnboardingStatusesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dignissimos") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateOrganizationCameraOnboardingStatusesRequest req = new UpdateOrganizationCameraOnboardingStatusesRequest("corrupti") {{
                requestBody = new UpdateOrganizationCameraOnboardingStatusesRequestBody() {{
                    serial = "quibusdam";
                    wirelessCredentialsSent = false;
                }};;
            }};            

            UpdateOrganizationCameraOnboardingStatusesResponse res = sdk.onboarding.updateOrganizationCameraOnboardingStatuses(req);

            if (res.updateOrganizationCameraOnboardingStatuses200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
