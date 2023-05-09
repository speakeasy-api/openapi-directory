# vpnGateways

### Available Operations

* [computeVpnGatewaysAggregatedList](#computevpngatewaysaggregatedlist) - Retrieves an aggregated list of VPN gateways.
* [computeVpnGatewaysDelete](#computevpngatewaysdelete) - Deletes the specified VPN gateway.
* [computeVpnGatewaysGet](#computevpngatewaysget) - Returns the specified VPN gateway.
* [computeVpnGatewaysGetStatus](#computevpngatewaysgetstatus) - Returns the status for the specified VPN gateway.
* [computeVpnGatewaysInsert](#computevpngatewaysinsert) - Creates a VPN gateway in the specified project and region using the data included in the request.
* [computeVpnGatewaysList](#computevpngatewayslist) - Retrieves a list of VPN gateways available to the specified project and region.
* [computeVpnGatewaysSetLabels](#computevpngatewayssetlabels) - Sets the labels on a VpnGateway. To learn more about labels, read the Labeling Resources documentation.
* [computeVpnGatewaysTestIamPermissions](#computevpngatewaystestiampermissions) - Returns permissions that a caller has on the specified resource.

## computeVpnGatewaysAggregatedList

Retrieves an aggregated list of VPN gateways.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeVpnGatewaysAggregatedListRequest;
import org.openapis.openapi.models.operations.ComputeVpnGatewaysAggregatedListResponse;
import org.openapis.openapi.models.operations.ComputeVpnGatewaysAggregatedListSecurity;
import org.openapis.openapi.models.operations.ComputeVpnGatewaysAggregatedListSecurityOption1;
import org.openapis.openapi.models.operations.ComputeVpnGatewaysAggregatedListSecurityOption2;
import org.openapis.openapi.models.operations.ComputeVpnGatewaysAggregatedListSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeVpnGatewaysAggregatedListRequest req = new ComputeVpnGatewaysAggregatedListRequest("alias") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "veritatis";
                alt = AltEnum.PROTO;
                callback = "in";
                fields = "aliquid";
                filter = "itaque";
                includeAllScopes = false;
                key = "eos";
                maxResults = 914847L;
                oauthToken = "porro";
                orderBy = "molestias";
                pageToken = "iste";
                prettyPrint = false;
                quotaUser = "ab";
                returnPartialSuccess = false;
                uploadType = "sit";
                uploadProtocol = "vel";
                userIp = "debitis";
            }};            

            ComputeVpnGatewaysAggregatedListResponse res = sdk.vpnGateways.computeVpnGatewaysAggregatedList(req, new ComputeVpnGatewaysAggregatedListSecurity() {{
                option1 = new ComputeVpnGatewaysAggregatedListSecurityOption1("alias", "officia") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.vpnGatewayAggregatedList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeVpnGatewaysDelete

Deletes the specified VPN gateway.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeVpnGatewaysDeleteRequest;
import org.openapis.openapi.models.operations.ComputeVpnGatewaysDeleteResponse;
import org.openapis.openapi.models.operations.ComputeVpnGatewaysDeleteSecurity;
import org.openapis.openapi.models.operations.ComputeVpnGatewaysDeleteSecurityOption1;
import org.openapis.openapi.models.operations.ComputeVpnGatewaysDeleteSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeVpnGatewaysDeleteRequest req = new ComputeVpnGatewaysDeleteRequest("officiis", "quibusdam", "neque") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "accusamus";
                alt = AltEnum.PROTO;
                callback = "beatae";
                fields = "consectetur";
                key = "a";
                oauthToken = "quos";
                prettyPrint = false;
                quotaUser = "quidem";
                requestId = "occaecati";
                uploadType = "nostrum";
                uploadProtocol = "perspiciatis";
                userIp = "quisquam";
            }};            

            ComputeVpnGatewaysDeleteResponse res = sdk.vpnGateways.computeVpnGatewaysDelete(req, new ComputeVpnGatewaysDeleteSecurity() {{
                option1 = new ComputeVpnGatewaysDeleteSecurityOption1("aliquam", "repellendus") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.operation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeVpnGatewaysGet

Returns the specified VPN gateway.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeVpnGatewaysGetRequest;
import org.openapis.openapi.models.operations.ComputeVpnGatewaysGetResponse;
import org.openapis.openapi.models.operations.ComputeVpnGatewaysGetSecurity;
import org.openapis.openapi.models.operations.ComputeVpnGatewaysGetSecurityOption1;
import org.openapis.openapi.models.operations.ComputeVpnGatewaysGetSecurityOption2;
import org.openapis.openapi.models.operations.ComputeVpnGatewaysGetSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeVpnGatewaysGetRequest req = new ComputeVpnGatewaysGetRequest("beatae", "rerum", "corporis") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "iste";
                alt = AltEnum.PROTO;
                callback = "eum";
                fields = "unde";
                key = "unde";
                oauthToken = "quaerat";
                prettyPrint = false;
                quotaUser = "reiciendis";
                uploadType = "ducimus";
                uploadProtocol = "esse";
                userIp = "inventore";
            }};            

            ComputeVpnGatewaysGetResponse res = sdk.vpnGateways.computeVpnGatewaysGet(req, new ComputeVpnGatewaysGetSecurity() {{
                option1 = new ComputeVpnGatewaysGetSecurityOption1("nisi", "voluptatum") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.vpnGateway != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeVpnGatewaysGetStatus

Returns the status for the specified VPN gateway.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeVpnGatewaysGetStatusRequest;
import org.openapis.openapi.models.operations.ComputeVpnGatewaysGetStatusResponse;
import org.openapis.openapi.models.operations.ComputeVpnGatewaysGetStatusSecurity;
import org.openapis.openapi.models.operations.ComputeVpnGatewaysGetStatusSecurityOption1;
import org.openapis.openapi.models.operations.ComputeVpnGatewaysGetStatusSecurityOption2;
import org.openapis.openapi.models.operations.ComputeVpnGatewaysGetStatusSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeVpnGatewaysGetStatusRequest req = new ComputeVpnGatewaysGetStatusRequest("unde", "et", "tempora") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "maxime";
                alt = AltEnum.JSON;
                callback = "neque";
                fields = "aliquam";
                key = "quo";
                oauthToken = "libero";
                prettyPrint = false;
                quotaUser = "asperiores";
                uploadType = "a";
                uploadProtocol = "consectetur";
                userIp = "similique";
            }};            

            ComputeVpnGatewaysGetStatusResponse res = sdk.vpnGateways.computeVpnGatewaysGetStatus(req, new ComputeVpnGatewaysGetStatusSecurity() {{
                option1 = new ComputeVpnGatewaysGetStatusSecurityOption1("ratione", "provident") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.vpnGatewaysGetStatusResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeVpnGatewaysInsert

Creates a VPN gateway in the specified project and region using the data included in the request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeVpnGatewaysInsertRequest;
import org.openapis.openapi.models.operations.ComputeVpnGatewaysInsertResponse;
import org.openapis.openapi.models.operations.ComputeVpnGatewaysInsertSecurity;
import org.openapis.openapi.models.operations.ComputeVpnGatewaysInsertSecurityOption1;
import org.openapis.openapi.models.operations.ComputeVpnGatewaysInsertSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.VpnGateway;
import org.openapis.openapi.models.shared.VpnGatewayStackTypeEnum;
import org.openapis.openapi.models.shared.VpnGatewayVpnGatewayInterface;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeVpnGatewaysInsertRequest req = new ComputeVpnGatewaysInsertRequest("voluptate", "illum") {{
                dollarXgafv = XgafvEnum.ONE;
                vpnGateway = new VpnGateway() {{
                    creationTimestamp = "at";
                    description = "impedit";
                    id = "laudantium";
                    kind = "occaecati";
                    labelFingerprint = "sint";
                    labels = new java.util.HashMap<String, String>() {{
                        put("molestias", "neque");
                    }};
                    name = "Alexandra Reinger";
                    network = "quos";
                    region = "odio";
                    selfLink = "quidem";
                    stackType = VpnGatewayStackTypeEnum.IPV4_IPV6;
                    vpnInterfaces = new org.openapis.openapi.models.shared.VpnGatewayVpnGatewayInterface[]{{
                        add(new VpnGatewayVpnGatewayInterface() {{
                            id = 797056L;
                            interconnectAttachment = "quo";
                            ipAddress = "magnam";
                        }}),
                        add(new VpnGatewayVpnGatewayInterface() {{
                            id = 620460L;
                            interconnectAttachment = "corrupti";
                            ipAddress = "eaque";
                        }}),
                    }};
                }};;
                accessToken = "sapiente";
                alt = AltEnum.JSON;
                callback = "doloremque";
                fields = "provident";
                key = "et";
                oauthToken = "perferendis";
                prettyPrint = false;
                quotaUser = "illum";
                requestId = "sit";
                uploadType = "omnis";
                uploadProtocol = "occaecati";
                userIp = "iure";
            }};            

            ComputeVpnGatewaysInsertResponse res = sdk.vpnGateways.computeVpnGatewaysInsert(req, new ComputeVpnGatewaysInsertSecurity() {{
                option1 = new ComputeVpnGatewaysInsertSecurityOption1("eligendi", "dolores") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.operation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeVpnGatewaysList

Retrieves a list of VPN gateways available to the specified project and region.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeVpnGatewaysListRequest;
import org.openapis.openapi.models.operations.ComputeVpnGatewaysListResponse;
import org.openapis.openapi.models.operations.ComputeVpnGatewaysListSecurity;
import org.openapis.openapi.models.operations.ComputeVpnGatewaysListSecurityOption1;
import org.openapis.openapi.models.operations.ComputeVpnGatewaysListSecurityOption2;
import org.openapis.openapi.models.operations.ComputeVpnGatewaysListSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeVpnGatewaysListRequest req = new ComputeVpnGatewaysListRequest("in", "voluptates") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "necessitatibus";
                alt = AltEnum.PROTO;
                callback = "ratione";
                fields = "dolorum";
                filter = "reprehenderit";
                key = "nesciunt";
                maxResults = 903363L;
                oauthToken = "eius";
                orderBy = "beatae";
                pageToken = "ad";
                prettyPrint = false;
                quotaUser = "fuga";
                returnPartialSuccess = false;
                uploadType = "aspernatur";
                uploadProtocol = "possimus";
                userIp = "necessitatibus";
            }};            

            ComputeVpnGatewaysListResponse res = sdk.vpnGateways.computeVpnGatewaysList(req, new ComputeVpnGatewaysListSecurity() {{
                option1 = new ComputeVpnGatewaysListSecurityOption1("et", "inventore") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.vpnGatewayList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeVpnGatewaysSetLabels

Sets the labels on a VpnGateway. To learn more about labels, read the Labeling Resources documentation.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeVpnGatewaysSetLabelsRequest;
import org.openapis.openapi.models.operations.ComputeVpnGatewaysSetLabelsResponse;
import org.openapis.openapi.models.operations.ComputeVpnGatewaysSetLabelsSecurity;
import org.openapis.openapi.models.operations.ComputeVpnGatewaysSetLabelsSecurityOption1;
import org.openapis.openapi.models.operations.ComputeVpnGatewaysSetLabelsSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.RegionSetLabelsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeVpnGatewaysSetLabelsRequest req = new ComputeVpnGatewaysSetLabelsRequest("ea", "tempore", "voluptas") {{
                dollarXgafv = XgafvEnum.ONE;
                regionSetLabelsRequest = new RegionSetLabelsRequest() {{
                    labelFingerprint = "cupiditate";
                    labels = new java.util.HashMap<String, String>() {{
                        put("neque", "in");
                    }};
                }};;
                accessToken = "iusto";
                alt = AltEnum.JSON;
                callback = "perspiciatis";
                fields = "eos";
                key = "doloribus";
                oauthToken = "quos";
                prettyPrint = false;
                quotaUser = "amet";
                requestId = "distinctio";
                uploadType = "magnam";
                uploadProtocol = "optio";
                userIp = "dolor";
            }};            

            ComputeVpnGatewaysSetLabelsResponse res = sdk.vpnGateways.computeVpnGatewaysSetLabels(req, new ComputeVpnGatewaysSetLabelsSecurity() {{
                option1 = new ComputeVpnGatewaysSetLabelsSecurityOption1("nihil", "facilis") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.operation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeVpnGatewaysTestIamPermissions

Returns permissions that a caller has on the specified resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeVpnGatewaysTestIamPermissionsRequest;
import org.openapis.openapi.models.operations.ComputeVpnGatewaysTestIamPermissionsResponse;
import org.openapis.openapi.models.operations.ComputeVpnGatewaysTestIamPermissionsSecurity;
import org.openapis.openapi.models.operations.ComputeVpnGatewaysTestIamPermissionsSecurityOption1;
import org.openapis.openapi.models.operations.ComputeVpnGatewaysTestIamPermissionsSecurityOption2;
import org.openapis.openapi.models.operations.ComputeVpnGatewaysTestIamPermissionsSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.TestPermissionsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeVpnGatewaysTestIamPermissionsRequest req = new ComputeVpnGatewaysTestIamPermissionsRequest("provident", "est", "aliquid") {{
                dollarXgafv = XgafvEnum.TWO;
                testPermissionsRequest = new TestPermissionsRequest() {{
                    permissions = new String[]{{
                        add("magnam"),
                        add("voluptate"),
                        add("animi"),
                    }};
                }};;
                accessToken = "suscipit";
                alt = AltEnum.MEDIA;
                callback = "distinctio";
                fields = "tempore";
                key = "at";
                oauthToken = "at";
                prettyPrint = false;
                quotaUser = "non";
                uploadType = "quibusdam";
                uploadProtocol = "vero";
                userIp = "nemo";
            }};            

            ComputeVpnGatewaysTestIamPermissionsResponse res = sdk.vpnGateways.computeVpnGatewaysTestIamPermissions(req, new ComputeVpnGatewaysTestIamPermissionsSecurity() {{
                option1 = new ComputeVpnGatewaysTestIamPermissionsSecurityOption1("quidem", "suscipit") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.testPermissionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
