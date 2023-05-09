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

            ComputeVpnTunnelsAggregatedListRequest req = new ComputeVpnTunnelsAggregatedListRequest("ab") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "nobis";
                alt = AltEnum.JSON;
                callback = "laboriosam";
                fields = "assumenda";
                filter = "porro";
                includeAllScopes = false;
                key = "impedit";
                maxResults = 602248L;
                oauthToken = "debitis";
                orderBy = "temporibus";
                pageToken = "a";
                prettyPrint = false;
                quotaUser = "rem";
                returnPartialSuccess = false;
                uploadType = "nesciunt";
                uploadProtocol = "vel";
                userIp = "officia";
            }};            

            ComputeVpnTunnelsAggregatedListResponse res = sdk.vpnTunnels.computeVpnTunnelsAggregatedList(req, new ComputeVpnTunnelsAggregatedListSecurity() {{
                option1 = new ComputeVpnTunnelsAggregatedListSecurityOption1("hic", "minima") {{
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

            ComputeVpnTunnelsDeleteRequest req = new ComputeVpnTunnelsDeleteRequest("distinctio", "optio", "odit") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "voluptatem";
                alt = AltEnum.JSON;
                callback = "nihil";
                fields = "qui";
                key = "maxime";
                oauthToken = "repudiandae";
                prettyPrint = false;
                quotaUser = "quia";
                requestId = "quasi";
                uploadType = "dolorem";
                uploadProtocol = "modi";
                userIp = "quos";
            }};            

            ComputeVpnTunnelsDeleteResponse res = sdk.vpnTunnels.computeVpnTunnelsDelete(req, new ComputeVpnTunnelsDeleteSecurity() {{
                option1 = new ComputeVpnTunnelsDeleteSecurityOption1("architecto", "quas") {{
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

            ComputeVpnTunnelsGetRequest req = new ComputeVpnTunnelsGetRequest("neque", "corrupti", "nihil") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "tempora";
                alt = AltEnum.JSON;
                callback = "enim";
                fields = "a";
                key = "ab";
                oauthToken = "nostrum";
                prettyPrint = false;
                quotaUser = "autem";
                uploadType = "repellat";
                uploadProtocol = "officiis";
                userIp = "fugiat";
            }};            

            ComputeVpnTunnelsGetResponse res = sdk.vpnTunnels.computeVpnTunnelsGet(req, new ComputeVpnTunnelsGetSecurity() {{
                option1 = new ComputeVpnTunnelsGetSecurityOption1("repudiandae", "nobis") {{
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

            ComputeVpnTunnelsInsertRequest req = new ComputeVpnTunnelsInsertRequest("quia", "natus") {{
                dollarXgafv = XgafvEnum.ONE;
                vpnTunnel = new VpnTunnel() {{
                    creationTimestamp = "nostrum";
                    description = "cum";
                    detailedStatus = "porro";
                    id = "blanditiis";
                    ikeVersion = 364344;
                    kind = "dolores";
                    labelFingerprint = "culpa";
                    labels = new java.util.HashMap<String, String>() {{
                        put("rerum", "expedita");
                        put("sit", "sapiente");
                        put("optio", "facilis");
                        put("et", "natus");
                    }};
                    localTrafficSelector = new String[]{{
                        add("animi"),
                        add("veritatis"),
                    }};
                    name = "Luis Rogahn";
                    peerExternalGateway = "enim";
                    peerExternalGatewayInterface = 454943;
                    peerGcpGateway = "reprehenderit";
                    peerIp = "quibusdam";
                    region = "suscipit";
                    remoteTrafficSelector = new String[]{{
                        add("deserunt"),
                        add("distinctio"),
                        add("animi"),
                        add("possimus"),
                    }};
                    router = "mollitia";
                    selfLink = "hic";
                    sharedSecret = "reprehenderit";
                    sharedSecretHash = "dolorum";
                    status = VpnTunnelStatusEnum.NEGOTIATION_FAILURE;
                    targetVpnGateway = "quibusdam";
                    vpnGateway = "consequatur";
                    vpnGatewayInterface = 322167;
                }};;
                accessToken = "reiciendis";
                alt = AltEnum.JSON;
                callback = "est";
                fields = "eligendi";
                key = "placeat";
                oauthToken = "modi";
                prettyPrint = false;
                quotaUser = "alias";
                requestId = "occaecati";
                uploadType = "quod";
                uploadProtocol = "nobis";
                userIp = "aperiam";
            }};            

            ComputeVpnTunnelsInsertResponse res = sdk.vpnTunnels.computeVpnTunnelsInsert(req, new ComputeVpnTunnelsInsertSecurity() {{
                option1 = new ComputeVpnTunnelsInsertSecurityOption1("id", "exercitationem") {{
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

            ComputeVpnTunnelsListRequest req = new ComputeVpnTunnelsListRequest("iusto", "exercitationem") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "ad";
                alt = AltEnum.MEDIA;
                callback = "esse";
                fields = "autem";
                filter = "odit";
                key = "veritatis";
                maxResults = 68592L;
                oauthToken = "voluptates";
                orderBy = "ad";
                pageToken = "velit";
                prettyPrint = false;
                quotaUser = "voluptas";
                returnPartialSuccess = false;
                uploadType = "perferendis";
                uploadProtocol = "odit";
                userIp = "voluptates";
            }};            

            ComputeVpnTunnelsListResponse res = sdk.vpnTunnels.computeVpnTunnelsList(req, new ComputeVpnTunnelsListSecurity() {{
                option1 = new ComputeVpnTunnelsListSecurityOption1("voluptas", "ratione") {{
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

            ComputeVpnTunnelsSetLabelsRequest req = new ComputeVpnTunnelsSetLabelsRequest("rerum", "vitae", "nesciunt") {{
                dollarXgafv = XgafvEnum.TWO;
                regionSetLabelsRequest = new RegionSetLabelsRequest() {{
                    labelFingerprint = "accusantium";
                    labels = new java.util.HashMap<String, String>() {{
                        put("consectetur", "pariatur");
                    }};
                }};;
                accessToken = "ullam";
                alt = AltEnum.MEDIA;
                callback = "distinctio";
                fields = "at";
                key = "totam";
                oauthToken = "expedita";
                prettyPrint = false;
                quotaUser = "eos";
                requestId = "autem";
                uploadType = "aspernatur";
                uploadProtocol = "corrupti";
                userIp = "laudantium";
            }};            

            ComputeVpnTunnelsSetLabelsResponse res = sdk.vpnTunnels.computeVpnTunnelsSetLabels(req, new ComputeVpnTunnelsSetLabelsSecurity() {{
                option1 = new ComputeVpnTunnelsSetLabelsSecurityOption1("cupiditate", "commodi") {{
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

            ComputeVpnTunnelsTestIamPermissionsRequest req = new ComputeVpnTunnelsTestIamPermissionsRequest("ad", "molestias", "nostrum") {{
                dollarXgafv = XgafvEnum.TWO;
                testPermissionsRequest = new TestPermissionsRequest() {{
                    permissions = new String[]{{
                        add("facilis"),
                        add("rem"),
                        add("nostrum"),
                        add("rem"),
                    }};
                }};;
                accessToken = "nihil";
                alt = AltEnum.MEDIA;
                callback = "nisi";
                fields = "quam";
                key = "eligendi";
                oauthToken = "quos";
                prettyPrint = false;
                quotaUser = "quia";
                uploadType = "saepe";
                uploadProtocol = "saepe";
                userIp = "nostrum";
            }};            

            ComputeVpnTunnelsTestIamPermissionsResponse res = sdk.vpnTunnels.computeVpnTunnelsTestIamPermissions(req, new ComputeVpnTunnelsTestIamPermissionsSecurity() {{
                option1 = new ComputeVpnTunnelsTestIamPermissionsSecurityOption1("facilis", "nulla") {{
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
