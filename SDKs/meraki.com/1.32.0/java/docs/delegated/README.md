# delegated

### Available Operations

* [createNetworkAppliancePrefixesDelegatedStatic](#createnetworkapplianceprefixesdelegatedstatic) - Add a static delegated prefix from a network
* [deleteNetworkAppliancePrefixesDelegatedStatic](#deletenetworkapplianceprefixesdelegatedstatic) - Delete a static delegated prefix from a network
* [getDeviceAppliancePrefixesDelegated](#getdeviceapplianceprefixesdelegated) - Return current delegated IPv6 prefixes on an appliance.
* [getDeviceAppliancePrefixesDelegatedVlanAssignments](#getdeviceapplianceprefixesdelegatedvlanassignments) - Return prefixes assigned to all IPv6 enabled VLANs on an appliance.
* [getNetworkAppliancePrefixesDelegatedStatic](#getnetworkapplianceprefixesdelegatedstatic) - Return a static delegated prefix from a network
* [getNetworkAppliancePrefixesDelegatedStatics](#getnetworkapplianceprefixesdelegatedstatics) - List static delegated prefixes for a network
* [updateNetworkAppliancePrefixesDelegatedStatic](#updatenetworkapplianceprefixesdelegatedstatic) - Update a static delegated prefix from a network

## createNetworkAppliancePrefixesDelegatedStatic

Add a static delegated prefix from a network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateNetworkAppliancePrefixesDelegatedStaticRequest;
import org.openapis.openapi.models.operations.CreateNetworkAppliancePrefixesDelegatedStaticRequestBody;
import org.openapis.openapi.models.operations.CreateNetworkAppliancePrefixesDelegatedStaticRequestBodyOrigin;
import org.openapis.openapi.models.operations.CreateNetworkAppliancePrefixesDelegatedStaticRequestBodyOriginTypeEnum;
import org.openapis.openapi.models.operations.CreateNetworkAppliancePrefixesDelegatedStaticResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eius") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateNetworkAppliancePrefixesDelegatedStaticRequest req = new CreateNetworkAppliancePrefixesDelegatedStaticRequest(                new CreateNetworkAppliancePrefixesDelegatedStaticRequestBody(                new CreateNetworkAppliancePrefixesDelegatedStaticRequestBodyOrigin() {{
                                                interfaces = new String[]{{
                                                    add("officia"),
                                                    add("deserunt"),
                                                    add("saepe"),
                                                    add("illum"),
                                                }};
                                                type = CreateNetworkAppliancePrefixesDelegatedStaticRequestBodyOriginTypeEnum.INDEPENDENT;
                                            }};, "saepe") {{
                                description = "dicta";
                            }};, "sequi");            

            CreateNetworkAppliancePrefixesDelegatedStaticResponse res = sdk.delegated.createNetworkAppliancePrefixesDelegatedStatic(req);

            if (res.createNetworkAppliancePrefixesDelegatedStatic201ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteNetworkAppliancePrefixesDelegatedStatic

Delete a static delegated prefix from a network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteNetworkAppliancePrefixesDelegatedStaticRequest;
import org.openapis.openapi.models.operations.DeleteNetworkAppliancePrefixesDelegatedStaticResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("mollitia") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteNetworkAppliancePrefixesDelegatedStaticRequest req = new DeleteNetworkAppliancePrefixesDelegatedStaticRequest("aliquid", "consequuntur");            

            DeleteNetworkAppliancePrefixesDelegatedStaticResponse res = sdk.delegated.deleteNetworkAppliancePrefixesDelegatedStatic(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDeviceAppliancePrefixesDelegated

Return current delegated IPv6 prefixes on an appliance.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDeviceAppliancePrefixesDelegatedRequest;
import org.openapis.openapi.models.operations.GetDeviceAppliancePrefixesDelegatedResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quae") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDeviceAppliancePrefixesDelegatedRequest req = new GetDeviceAppliancePrefixesDelegatedRequest("saepe");            

            GetDeviceAppliancePrefixesDelegatedResponse res = sdk.delegated.getDeviceAppliancePrefixesDelegated(req);

            if (res.getDeviceAppliancePrefixesDelegated200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDeviceAppliancePrefixesDelegatedVlanAssignments

Return prefixes assigned to all IPv6 enabled VLANs on an appliance.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDeviceAppliancePrefixesDelegatedVlanAssignmentsRequest;
import org.openapis.openapi.models.operations.GetDeviceAppliancePrefixesDelegatedVlanAssignmentsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("fugit") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDeviceAppliancePrefixesDelegatedVlanAssignmentsRequest req = new GetDeviceAppliancePrefixesDelegatedVlanAssignmentsRequest("accusamus");            

            GetDeviceAppliancePrefixesDelegatedVlanAssignmentsResponse res = sdk.delegated.getDeviceAppliancePrefixesDelegatedVlanAssignments(req);

            if (res.getDeviceAppliancePrefixesDelegatedVlanAssignments200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkAppliancePrefixesDelegatedStatic

Return a static delegated prefix from a network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkAppliancePrefixesDelegatedStaticRequest;
import org.openapis.openapi.models.operations.GetNetworkAppliancePrefixesDelegatedStaticResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("cupiditate") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkAppliancePrefixesDelegatedStaticRequest req = new GetNetworkAppliancePrefixesDelegatedStaticRequest("illo", "totam");            

            GetNetworkAppliancePrefixesDelegatedStaticResponse res = sdk.delegated.getNetworkAppliancePrefixesDelegatedStatic(req);

            if (res.getNetworkAppliancePrefixesDelegatedStatic200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkAppliancePrefixesDelegatedStatics

List static delegated prefixes for a network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkAppliancePrefixesDelegatedStaticsRequest;
import org.openapis.openapi.models.operations.GetNetworkAppliancePrefixesDelegatedStaticsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eligendi") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkAppliancePrefixesDelegatedStaticsRequest req = new GetNetworkAppliancePrefixesDelegatedStaticsRequest("iure");            

            GetNetworkAppliancePrefixesDelegatedStaticsResponse res = sdk.delegated.getNetworkAppliancePrefixesDelegatedStatics(req);

            if (res.getNetworkAppliancePrefixesDelegatedStatics200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkAppliancePrefixesDelegatedStatic

Update a static delegated prefix from a network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkAppliancePrefixesDelegatedStaticRequest;
import org.openapis.openapi.models.operations.UpdateNetworkAppliancePrefixesDelegatedStaticRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkAppliancePrefixesDelegatedStaticRequestBodyOrigin;
import org.openapis.openapi.models.operations.UpdateNetworkAppliancePrefixesDelegatedStaticRequestBodyOriginTypeEnum;
import org.openapis.openapi.models.operations.UpdateNetworkAppliancePrefixesDelegatedStaticResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quis") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkAppliancePrefixesDelegatedStaticRequest req = new UpdateNetworkAppliancePrefixesDelegatedStaticRequest("distinctio", "alias") {{
                requestBody = new UpdateNetworkAppliancePrefixesDelegatedStaticRequestBody() {{
                    description = "modi";
                    origin = new UpdateNetworkAppliancePrefixesDelegatedStaticRequestBodyOrigin() {{
                        interfaces = new String[]{{
                            add("commodi"),
                            add("minus"),
                            add("earum"),
                        }};
                        type = UpdateNetworkAppliancePrefixesDelegatedStaticRequestBodyOriginTypeEnum.INDEPENDENT;
                    }};;
                    prefix = "excepturi";
                }};;
            }};            

            UpdateNetworkAppliancePrefixesDelegatedStaticResponse res = sdk.delegated.updateNetworkAppliancePrefixesDelegatedStatic(req);

            if (res.updateNetworkAppliancePrefixesDelegatedStatic200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
