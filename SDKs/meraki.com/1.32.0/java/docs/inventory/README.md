# inventory

### Available Operations

* [claimIntoOrganizationInventory](#claimintoorganizationinventory) - Claim a list of devices, licenses, and/or orders into an organization inventory
* [createOrganizationInventoryOnboardingCloudMonitoringExportEvent](#createorganizationinventoryonboardingcloudmonitoringexportevent) - Imports event logs related to the onboarding app into elastisearch
* [createOrganizationInventoryOnboardingCloudMonitoringImport](#createorganizationinventoryonboardingcloudmonitoringimport) - Commits the import operation to complete the onboarding of a device into Dashboard for monitoring.
* [createOrganizationInventoryOnboardingCloudMonitoringPrepare](#createorganizationinventoryonboardingcloudmonitoringprepare) - Initiates or updates an import session
* [getOrganizationInventoryDevice](#getorganizationinventorydevice) - Return a single device from the inventory of an organization
* [getOrganizationInventoryDevices](#getorganizationinventorydevices) - Return the device inventory for an organization
* [getOrganizationInventoryOnboardingCloudMonitoringImports](#getorganizationinventoryonboardingcloudmonitoringimports) - Check the status of a committed Import operation
* [getOrganizationInventoryOnboardingCloudMonitoringNetworks](#getorganizationinventoryonboardingcloudmonitoringnetworks) - Returns list of networks eligible for adding cloud monitored device
* [releaseFromOrganizationInventory](#releasefromorganizationinventory) - Release a list of claimed devices from an organization.

## claimIntoOrganizationInventory

Claim a list of devices, licenses, and/or orders into an organization inventory. When claiming by order, all devices and licenses in the order will be claimed; licenses will be added to the organization and devices will be placed in the organization's inventory. Use /organizations/{organizationId}/inventory/release to release devices from an organization.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ClaimIntoOrganizationInventoryRequest;
import org.openapis.openapi.models.operations.ClaimIntoOrganizationInventoryRequestBody;
import org.openapis.openapi.models.operations.ClaimIntoOrganizationInventoryRequestBodyLicenses;
import org.openapis.openapi.models.operations.ClaimIntoOrganizationInventoryRequestBodyLicensesModeEnum;
import org.openapis.openapi.models.operations.ClaimIntoOrganizationInventoryResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("id") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            ClaimIntoOrganizationInventoryRequest req = new ClaimIntoOrganizationInventoryRequest("fugit") {{
                requestBody = new ClaimIntoOrganizationInventoryRequestBody() {{
                    licenses = new org.openapis.openapi.models.operations.ClaimIntoOrganizationInventoryRequestBodyLicenses[]{{
                        add(new ClaimIntoOrganizationInventoryRequestBodyLicenses("eos") {{
                            key = "blanditiis";
                            mode = ClaimIntoOrganizationInventoryRequestBodyLicensesModeEnum.RENEW;
                        }}),
                        add(new ClaimIntoOrganizationInventoryRequestBodyLicenses("nobis") {{
                            key = "eveniet";
                            mode = ClaimIntoOrganizationInventoryRequestBodyLicensesModeEnum.RENEW;
                        }}),
                        add(new ClaimIntoOrganizationInventoryRequestBodyLicenses("laboriosam") {{
                            key = "autem";
                            mode = ClaimIntoOrganizationInventoryRequestBodyLicensesModeEnum.RENEW;
                        }}),
                        add(new ClaimIntoOrganizationInventoryRequestBodyLicenses("recusandae") {{
                            key = "ab";
                            mode = ClaimIntoOrganizationInventoryRequestBodyLicensesModeEnum.ADD_DEVICES;
                        }}),
                    }};
                    orders = new String[]{{
                        add("veritatis"),
                        add("sunt"),
                        add("corrupti"),
                    }};
                    serials = new String[]{{
                        add("quisquam"),
                        add("magnam"),
                    }};
                }};;
            }};            

            ClaimIntoOrganizationInventoryResponse res = sdk.inventory.claimIntoOrganizationInventory(req);

            if (res.claimIntoOrganizationInventory200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

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
                .setSecurity(new Security("labore") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateOrganizationInventoryOnboardingCloudMonitoringExportEventRequest req = new CreateOrganizationInventoryOnboardingCloudMonitoringExportEventRequest(                new CreateOrganizationInventoryOnboardingCloudMonitoringExportEventRequestBody("quasi", 500943L) {{
                                request = "repellendus";
                                targetOS = "officia";
                            }};, "vitae");            

            CreateOrganizationInventoryOnboardingCloudMonitoringExportEventResponse res = sdk.inventory.createOrganizationInventoryOnboardingCloudMonitoringExportEvent(req);

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
                .setSecurity(new Security("laborum") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateOrganizationInventoryOnboardingCloudMonitoringImportRequest req = new CreateOrganizationInventoryOnboardingCloudMonitoringImportRequest(                new CreateOrganizationInventoryOnboardingCloudMonitoringImportRequestBody(                new org.openapis.openapi.models.operations.CreateOrganizationInventoryOnboardingCloudMonitoringImportRequestBodyDevices[]{{
                                                add(new CreateOrganizationInventoryOnboardingCloudMonitoringImportRequestBodyDevices("adipisci", "ratione", "dolor") {{
                                                    deviceId = "necessitatibus";
                                                    networkId = "labore";
                                                    udi = "quidem";
                                                }}),
                                                add(new CreateOrganizationInventoryOnboardingCloudMonitoringImportRequestBodyDevices("minus", "natus", "ea") {{
                                                    deviceId = "aperiam";
                                                    networkId = "est";
                                                    udi = "iste";
                                                }}),
                                            }});, "saepe");            

            CreateOrganizationInventoryOnboardingCloudMonitoringImportResponse res = sdk.inventory.createOrganizationInventoryOnboardingCloudMonitoringImport(req);

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
                .setSecurity(new Security("enim") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequest req = new CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequest(                new CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBody(                new org.openapis.openapi.models.operations.CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevices[]{{
                                                add(new CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevices("suscipit") {{
                                                    sudi = "tempore";
                                                    tunnel = new CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesTunnel() {{
                                                        certificateName = "repellendus";
                                                        localInterface = 269164L;
                                                        loopbackNumber = 581711L;
                                                        name = "Abraham Grimes V";
                                                    }};
                                                    user = new CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesUser() {{
                                                        username = "Janick66";
                                                    }};
                                                    vty = new CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesVty() {{
                                                        accessList = new CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesVtyAccessList() {{
                                                            vtyIn = new CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesVtyAccessListVtyIn() {{
                                                                name = "Katie Greenholt";
                                                            }};
                                                            vtyOut = new CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesVtyAccessListVtyOut() {{
                                                                name = "Camille Cole";
                                                            }};
                                                        }};
                                                        authentication = new CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesVtyAuthentication() {{
                                                            group = new CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesVtyAuthenticationGroup() {{
                                                                name = "Travis Haley";
                                                            }};
                                                        }};
                                                        authorization = new CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesVtyAuthorization() {{
                                                            group = new CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesVtyAuthorizationGroup() {{
                                                                name = "Erma Mohr";
                                                            }};
                                                        }};
                                                        endLineNumber = 721472L;
                                                        rotaryNumber = 478691L;
                                                        startLineNumber = 93617L;
                                                    }};
                                                }}),
                                            }});, "consectetur");            

            CreateOrganizationInventoryOnboardingCloudMonitoringPrepareResponse res = sdk.inventory.createOrganizationInventoryOnboardingCloudMonitoringPrepare(req);

            if (res.createOrganizationInventoryOnboardingCloudMonitoringPrepare201ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOrganizationInventoryDevice

Return a single device from the inventory of an organization

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganizationInventoryDeviceRequest;
import org.openapis.openapi.models.operations.GetOrganizationInventoryDeviceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptas") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationInventoryDeviceRequest req = new GetOrganizationInventoryDeviceRequest("dolorem", "distinctio");            

            GetOrganizationInventoryDeviceResponse res = sdk.inventory.getOrganizationInventoryDevice(req);

            if (res.getOrganizationInventoryDevice200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOrganizationInventoryDevices

Return the device inventory for an organization

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganizationInventoryDevicesProductTypesEnum;
import org.openapis.openapi.models.operations.GetOrganizationInventoryDevicesRequest;
import org.openapis.openapi.models.operations.GetOrganizationInventoryDevicesResponse;
import org.openapis.openapi.models.operations.GetOrganizationInventoryDevicesTagsFilterTypeEnum;
import org.openapis.openapi.models.operations.GetOrganizationInventoryDevicesUsedStateEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("error") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationInventoryDevicesRequest req = new GetOrganizationInventoryDevicesRequest("consectetur") {{
                endingBefore = "nesciunt";
                macs = new String[]{{
                    add("ut"),
                    add("consequuntur"),
                }};
                models = new String[]{{
                    add("sint"),
                    add("hic"),
                }};
                networkIds = new String[]{{
                    add("tenetur"),
                    add("vel"),
                }};
                orderNumbers = new String[]{{
                    add("omnis"),
                    add("voluptate"),
                    add("saepe"),
                    add("dignissimos"),
                }};
                perPage = 700177L;
                productTypes = new org.openapis.openapi.models.operations.GetOrganizationInventoryDevicesProductTypesEnum[]{{
                    add(GetOrganizationInventoryDevicesProductTypesEnum.SWITCH_),
                    add(GetOrganizationInventoryDevicesProductTypesEnum.SENSOR),
                }};
                search = "blanditiis";
                serials = new String[]{{
                    add("magni"),
                }};
                startingAfter = "tempora";
                tags = new String[]{{
                    add("qui"),
                    add("minus"),
                    add("accusamus"),
                    add("eligendi"),
                }};
                tagsFilterType = GetOrganizationInventoryDevicesTagsFilterTypeEnum.WITH_ANY_TAGS;
                usedState = GetOrganizationInventoryDevicesUsedStateEnum.UNUSED;
            }};            

            GetOrganizationInventoryDevicesResponse res = sdk.inventory.getOrganizationInventoryDevices(req);

            if (res.getOrganizationInventoryDevices200ApplicationJSONObjects != null) {
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
                .setSecurity(new Security("aspernatur") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationInventoryOnboardingCloudMonitoringImportsRequest req = new GetOrganizationInventoryOnboardingCloudMonitoringImportsRequest(                new String[]{{
                                add("eum"),
                                add("voluptatem"),
                            }}, "minima");            

            GetOrganizationInventoryOnboardingCloudMonitoringImportsResponse res = sdk.inventory.getOrganizationInventoryOnboardingCloudMonitoringImports(req);

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
                .setSecurity(new Security("quaerat") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationInventoryOnboardingCloudMonitoringNetworksRequest req = new GetOrganizationInventoryOnboardingCloudMonitoringNetworksRequest(GetOrganizationInventoryOnboardingCloudMonitoringNetworksDeviceTypeEnum.SWITCH_, "modi") {{
                endingBefore = "cum";
                perPage = 905295L;
                startingAfter = "reprehenderit";
            }};            

            GetOrganizationInventoryOnboardingCloudMonitoringNetworksResponse res = sdk.inventory.getOrganizationInventoryOnboardingCloudMonitoringNetworks(req);

            if (res.getOrganizationInventoryOnboardingCloudMonitoringNetworks202ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## releaseFromOrganizationInventory

Release a list of claimed devices from an organization.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReleaseFromOrganizationInventoryRequest;
import org.openapis.openapi.models.operations.ReleaseFromOrganizationInventoryRequestBody;
import org.openapis.openapi.models.operations.ReleaseFromOrganizationInventoryResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nemo") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            ReleaseFromOrganizationInventoryRequest req = new ReleaseFromOrganizationInventoryRequest("corporis") {{
                requestBody = new ReleaseFromOrganizationInventoryRequestBody() {{
                    serials = new String[]{{
                        add("qui"),
                        add("perferendis"),
                        add("odio"),
                        add("maiores"),
                    }};
                }};;
            }};            

            ReleaseFromOrganizationInventoryResponse res = sdk.inventory.releaseFromOrganizationInventory(req);

            if (res.releaseFromOrganizationInventory200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
