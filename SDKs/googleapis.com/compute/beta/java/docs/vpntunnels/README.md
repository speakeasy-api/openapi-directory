# vpnTunnels

### Available Operations

* [computeVpnTunnelsAggregatedList](#computevpntunnelsaggregatedlist) - Retrieves an aggregated list of VPN tunnels.
* [computeVpnTunnelsDelete](#computevpntunnelsdelete) - Deletes the specified VpnTunnel resource.
* [computeVpnTunnelsGet](#computevpntunnelsget) - Returns the specified VpnTunnel resource.
* [computeVpnTunnelsInsert](#computevpntunnelsinsert) - Creates a VpnTunnel resource in the specified project and region using the data included in the request.
* [computeVpnTunnelsList](#computevpntunnelslist) - Retrieves a list of VpnTunnel resources contained in the specified project and region.
* [computeVpnTunnelsSetLabels](#computevpntunnelssetlabels) - Sets the labels on a VpnTunnel. To learn more about labels, read the Labeling Resources documentation.
* [computeVpnTunnelsTestIamPermissions](#computevpntunnelstestiampermissions) - Returns permissions that a caller has on the specified resource.

## computeVpnTunnelsAggregatedList

Retrieves an aggregated list of VPN tunnels.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeVpnTunnelsAggregatedListRequest;
import org.openapis.openapi.models.operations.ComputeVpnTunnelsAggregatedListResponse;
import org.openapis.openapi.models.operations.ComputeVpnTunnelsAggregatedListSecurity;
import org.openapis.openapi.models.operations.ComputeVpnTunnelsAggregatedListSecurityOption1;
import org.openapis.openapi.models.operations.ComputeVpnTunnelsAggregatedListSecurityOption2;
import org.openapis.openapi.models.operations.ComputeVpnTunnelsAggregatedListSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeVpnTunnelsAggregatedListRequest req = new ComputeVpnTunnelsAggregatedListRequest("magni") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "odit";
                alt = AltEnum.JSON;
                callback = "dolorum";
                fields = "iste";
                filter = "molestias";
                includeAllScopes = false;
                key = "id";
                maxResults = 352557L;
                oauthToken = "aperiam";
                orderBy = "fugiat";
                pageToken = "voluptate";
                prettyPrint = false;
                quotaUser = "quo";
                returnPartialSuccess = false;
                uploadType = "laborum";
                uploadProtocol = "blanditiis";
                userIp = "ducimus";
            }};            

            ComputeVpnTunnelsAggregatedListResponse res = sdk.vpnTunnels.computeVpnTunnelsAggregatedList(req, new ComputeVpnTunnelsAggregatedListSecurity() {{
                option1 = new ComputeVpnTunnelsAggregatedListSecurityOption1("rerum", "dolores") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.vpnTunnelAggregatedList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeVpnTunnelsDelete

Deletes the specified VpnTunnel resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeVpnTunnelsDeleteRequest;
import org.openapis.openapi.models.operations.ComputeVpnTunnelsDeleteResponse;
import org.openapis.openapi.models.operations.ComputeVpnTunnelsDeleteSecurity;
import org.openapis.openapi.models.operations.ComputeVpnTunnelsDeleteSecurityOption1;
import org.openapis.openapi.models.operations.ComputeVpnTunnelsDeleteSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeVpnTunnelsDeleteRequest req = new ComputeVpnTunnelsDeleteRequest("velit", "labore", "sed") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "doloribus";
                alt = AltEnum.JSON;
                callback = "officiis";
                fields = "laudantium";
                key = "distinctio";
                oauthToken = "ad";
                prettyPrint = false;
                quotaUser = "quo";
                requestId = "possimus";
                uploadType = "officiis";
                uploadProtocol = "sequi";
                userIp = "magni";
            }};            

            ComputeVpnTunnelsDeleteResponse res = sdk.vpnTunnels.computeVpnTunnelsDelete(req, new ComputeVpnTunnelsDeleteSecurity() {{
                option1 = new ComputeVpnTunnelsDeleteSecurityOption1("ab", "ea") {{
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

## computeVpnTunnelsGet

Returns the specified VpnTunnel resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeVpnTunnelsGetRequest;
import org.openapis.openapi.models.operations.ComputeVpnTunnelsGetResponse;
import org.openapis.openapi.models.operations.ComputeVpnTunnelsGetSecurity;
import org.openapis.openapi.models.operations.ComputeVpnTunnelsGetSecurityOption1;
import org.openapis.openapi.models.operations.ComputeVpnTunnelsGetSecurityOption2;
import org.openapis.openapi.models.operations.ComputeVpnTunnelsGetSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeVpnTunnelsGetRequest req = new ComputeVpnTunnelsGetRequest("illum", "esse", "nostrum") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "porro";
                alt = AltEnum.JSON;
                callback = "distinctio";
                fields = "id";
                key = "ab";
                oauthToken = "magnam";
                prettyPrint = false;
                quotaUser = "iure";
                uploadType = "nesciunt";
                uploadProtocol = "harum";
                userIp = "illo";
            }};            

            ComputeVpnTunnelsGetResponse res = sdk.vpnTunnels.computeVpnTunnelsGet(req, new ComputeVpnTunnelsGetSecurity() {{
                option1 = new ComputeVpnTunnelsGetSecurityOption1("suscipit", "distinctio") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.vpnTunnel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeVpnTunnelsInsert

Creates a VpnTunnel resource in the specified project and region using the data included in the request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeVpnTunnelsInsertRequest;
import org.openapis.openapi.models.operations.ComputeVpnTunnelsInsertResponse;
import org.openapis.openapi.models.operations.ComputeVpnTunnelsInsertSecurity;
import org.openapis.openapi.models.operations.ComputeVpnTunnelsInsertSecurityOption1;
import org.openapis.openapi.models.operations.ComputeVpnTunnelsInsertSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.VpnTunnel;
import org.openapis.openapi.models.shared.VpnTunnelStatusEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeVpnTunnelsInsertRequest req = new ComputeVpnTunnelsInsertRequest("placeat", "incidunt") {{
                dollarXgafv = XgafvEnum.ONE;
                vpnTunnel = new VpnTunnel() {{
                    creationTimestamp = "voluptatum";
                    description = "animi";
                    detailedStatus = "alias";
                    id = "non";
                    ikeVersion = 315052;
                    kind = "quos";
                    labelFingerprint = "architecto";
                    labels = new java.util.HashMap<String, String>() {{
                        put("voluptates", "magni");
                    }};
                    localTrafficSelector = new String[]{{
                        add("fuga"),
                        add("expedita"),
                    }};
                    name = "Gilbert Rosenbaum V";
                    peerExternalGateway = "fugiat";
                    peerExternalGatewayInterface = 217522;
                    peerGcpGateway = "sunt";
                    peerIp = "earum";
                    region = "repellendus";
                    remoteTrafficSelector = new String[]{{
                        add("labore"),
                        add("illo"),
                        add("nesciunt"),
                    }};
                    router = "repudiandae";
                    selfLink = "illo";
                    sharedSecret = "perspiciatis";
                    sharedSecretHash = "fugiat";
                    status = VpnTunnelStatusEnum.REJECTED;
                    targetVpnGateway = "reiciendis";
                    vpnGateway = "dolorum";
                    vpnGatewayInterface = 610199;
                }};;
                accessToken = "ipsa";
                alt = AltEnum.PROTO;
                callback = "aut";
                fields = "a";
                key = "laborum";
                oauthToken = "quo";
                prettyPrint = false;
                quotaUser = "distinctio";
                requestId = "excepturi";
                uploadType = "perspiciatis";
                uploadProtocol = "omnis";
                userIp = "ullam";
            }};            

            ComputeVpnTunnelsInsertResponse res = sdk.vpnTunnels.computeVpnTunnelsInsert(req, new ComputeVpnTunnelsInsertSecurity() {{
                option1 = new ComputeVpnTunnelsInsertSecurityOption1("animi", "ipsum") {{
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

## computeVpnTunnelsList

Retrieves a list of VpnTunnel resources contained in the specified project and region.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeVpnTunnelsListRequest;
import org.openapis.openapi.models.operations.ComputeVpnTunnelsListResponse;
import org.openapis.openapi.models.operations.ComputeVpnTunnelsListSecurity;
import org.openapis.openapi.models.operations.ComputeVpnTunnelsListSecurityOption1;
import org.openapis.openapi.models.operations.ComputeVpnTunnelsListSecurityOption2;
import org.openapis.openapi.models.operations.ComputeVpnTunnelsListSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeVpnTunnelsListRequest req = new ComputeVpnTunnelsListRequest("laudantium", "quod") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "iure";
                alt = AltEnum.JSON;
                callback = "necessitatibus";
                fields = "ex";
                filter = "aliquid";
                key = "veniam";
                maxResults = 68989L;
                oauthToken = "quam";
                orderBy = "error";
                pageToken = "nobis";
                prettyPrint = false;
                quotaUser = "perspiciatis";
                returnPartialSuccess = false;
                uploadType = "quasi";
                uploadProtocol = "officiis";
                userIp = "libero";
            }};            

            ComputeVpnTunnelsListResponse res = sdk.vpnTunnels.computeVpnTunnelsList(req, new ComputeVpnTunnelsListSecurity() {{
                option1 = new ComputeVpnTunnelsListSecurityOption1("sint", "sequi") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.vpnTunnelList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeVpnTunnelsSetLabels

Sets the labels on a VpnTunnel. To learn more about labels, read the Labeling Resources documentation.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeVpnTunnelsSetLabelsRequest;
import org.openapis.openapi.models.operations.ComputeVpnTunnelsSetLabelsResponse;
import org.openapis.openapi.models.operations.ComputeVpnTunnelsSetLabelsSecurity;
import org.openapis.openapi.models.operations.ComputeVpnTunnelsSetLabelsSecurityOption1;
import org.openapis.openapi.models.operations.ComputeVpnTunnelsSetLabelsSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.RegionSetLabelsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeVpnTunnelsSetLabelsRequest req = new ComputeVpnTunnelsSetLabelsRequest("a", "nobis", "adipisci") {{
                dollarXgafv = XgafvEnum.ONE;
                regionSetLabelsRequest = new RegionSetLabelsRequest() {{
                    labelFingerprint = "exercitationem";
                    labels = new java.util.HashMap<String, String>() {{
                        put("magnam", "doloribus");
                        put("esse", "natus");
                    }};
                }};;
                accessToken = "consequatur";
                alt = AltEnum.JSON;
                callback = "voluptas";
                fields = "quia";
                key = "nihil";
                oauthToken = "architecto";
                prettyPrint = false;
                quotaUser = "incidunt";
                requestId = "excepturi";
                uploadType = "officiis";
                uploadProtocol = "illum";
                userIp = "dolores";
            }};            

            ComputeVpnTunnelsSetLabelsResponse res = sdk.vpnTunnels.computeVpnTunnelsSetLabels(req, new ComputeVpnTunnelsSetLabelsSecurity() {{
                option1 = new ComputeVpnTunnelsSetLabelsSecurityOption1("nostrum", "magni") {{
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

## computeVpnTunnelsTestIamPermissions

Returns permissions that a caller has on the specified resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeVpnTunnelsTestIamPermissionsRequest;
import org.openapis.openapi.models.operations.ComputeVpnTunnelsTestIamPermissionsResponse;
import org.openapis.openapi.models.operations.ComputeVpnTunnelsTestIamPermissionsSecurity;
import org.openapis.openapi.models.operations.ComputeVpnTunnelsTestIamPermissionsSecurityOption1;
import org.openapis.openapi.models.operations.ComputeVpnTunnelsTestIamPermissionsSecurityOption2;
import org.openapis.openapi.models.operations.ComputeVpnTunnelsTestIamPermissionsSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.TestPermissionsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeVpnTunnelsTestIamPermissionsRequest req = new ComputeVpnTunnelsTestIamPermissionsRequest("perferendis", "voluptatibus", "recusandae") {{
                dollarXgafv = XgafvEnum.ONE;
                testPermissionsRequest = new TestPermissionsRequest() {{
                    permissions = new String[]{{
                        add("modi"),
                        add("voluptates"),
                    }};
                }};;
                accessToken = "eaque";
                alt = AltEnum.JSON;
                callback = "exercitationem";
                fields = "quae";
                key = "adipisci";
                oauthToken = "voluptates";
                prettyPrint = false;
                quotaUser = "ratione";
                uploadType = "reprehenderit";
                uploadProtocol = "fuga";
                userIp = "iure";
            }};            

            ComputeVpnTunnelsTestIamPermissionsResponse res = sdk.vpnTunnels.computeVpnTunnelsTestIamPermissions(req, new ComputeVpnTunnelsTestIamPermissionsSecurity() {{
                option1 = new ComputeVpnTunnelsTestIamPermissionsSecurityOption1("debitis", "odit") {{
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
