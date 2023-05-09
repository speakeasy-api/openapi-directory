# prefixes

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
                .setSecurity(new Security("iste") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateNetworkAppliancePrefixesDelegatedStaticRequest req = new CreateNetworkAppliancePrefixesDelegatedStaticRequest(                new CreateNetworkAppliancePrefixesDelegatedStaticRequestBody(                new CreateNetworkAppliancePrefixesDelegatedStaticRequestBodyOrigin() {{
                                                interfaces = new String[]{{
                                                    add("doloremque"),
                                                }};
                                                type = CreateNetworkAppliancePrefixesDelegatedStaticRequestBodyOriginTypeEnum.INTERNET;
                                            }};, "esse") {{
                                description = "facere";
                            }};, "laborum");            

            CreateNetworkAppliancePrefixesDelegatedStaticResponse res = sdk.prefixes.createNetworkAppliancePrefixesDelegatedStatic(req);

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
                .setSecurity(new Security("ipsam") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteNetworkAppliancePrefixesDelegatedStaticRequest req = new DeleteNetworkAppliancePrefixesDelegatedStaticRequest("quaerat", "error");            

            DeleteNetworkAppliancePrefixesDelegatedStaticResponse res = sdk.prefixes.deleteNetworkAppliancePrefixesDelegatedStatic(req);

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
                .setSecurity(new Security("tempore") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDeviceAppliancePrefixesDelegatedRequest req = new GetDeviceAppliancePrefixesDelegatedRequest("molestiae");            

            GetDeviceAppliancePrefixesDelegatedResponse res = sdk.prefixes.getDeviceAppliancePrefixesDelegated(req);

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
                .setSecurity(new Security("earum") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDeviceAppliancePrefixesDelegatedVlanAssignmentsRequest req = new GetDeviceAppliancePrefixesDelegatedVlanAssignmentsRequest("cumque");            

            GetDeviceAppliancePrefixesDelegatedVlanAssignmentsResponse res = sdk.prefixes.getDeviceAppliancePrefixesDelegatedVlanAssignments(req);

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
                .setSecurity(new Security("tempora") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkAppliancePrefixesDelegatedStaticRequest req = new GetNetworkAppliancePrefixesDelegatedStaticRequest("aut", "cupiditate");            

            GetNetworkAppliancePrefixesDelegatedStaticResponse res = sdk.prefixes.getNetworkAppliancePrefixesDelegatedStatic(req);

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
                .setSecurity(new Security("eaque") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkAppliancePrefixesDelegatedStaticsRequest req = new GetNetworkAppliancePrefixesDelegatedStaticsRequest("aut");            

            GetNetworkAppliancePrefixesDelegatedStaticsResponse res = sdk.prefixes.getNetworkAppliancePrefixesDelegatedStatics(req);

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
                .setSecurity(new Security("molestiae") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkAppliancePrefixesDelegatedStaticRequest req = new UpdateNetworkAppliancePrefixesDelegatedStaticRequest("culpa", "culpa") {{
                requestBody = new UpdateNetworkAppliancePrefixesDelegatedStaticRequestBody() {{
                    description = "laudantium";
                    origin = new UpdateNetworkAppliancePrefixesDelegatedStaticRequestBodyOrigin() {{
                        interfaces = new String[]{{
                            add("suscipit"),
                        }};
                        type = UpdateNetworkAppliancePrefixesDelegatedStaticRequestBodyOriginTypeEnum.INTERNET;
                    }};;
                    prefix = "saepe";
                }};;
            }};            

            UpdateNetworkAppliancePrefixesDelegatedStaticResponse res = sdk.prefixes.updateNetworkAppliancePrefixesDelegatedStatic(req);

            if (res.updateNetworkAppliancePrefixesDelegatedStatic200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
