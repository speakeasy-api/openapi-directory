# vpnTunnels

### Available Operations

* [computeVpnTunnelsAggregatedList](#computevpntunnelsaggregatedlist) - Retrieves an aggregated list of VPN tunnels.
* [computeVpnTunnelsDelete](#computevpntunnelsdelete) - Deletes the specified VpnTunnel resource.
* [computeVpnTunnelsGet](#computevpntunnelsget) - Returns the specified VpnTunnel resource.
* [computeVpnTunnelsInsert](#computevpntunnelsinsert) - Creates a VpnTunnel resource in the specified project and region using the data included in the request.
* [computeVpnTunnelsList](#computevpntunnelslist) - Retrieves a list of VpnTunnel resources contained in the specified project and region.
* [computeVpnTunnelsSetLabels](#computevpntunnelssetlabels) - Sets the labels on a VpnTunnel. To learn more about labels, read the Labeling Resources documentation.

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

            ComputeVpnTunnelsAggregatedListRequest req = new ComputeVpnTunnelsAggregatedListRequest("itaque") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "animi";
                alt = AltEnum.JSON;
                callback = "enim";
                fields = "ab";
                filter = "officiis";
                includeAllScopes = false;
                key = "facilis";
                maxResults = 495084L;
                oauthToken = "quibusdam";
                orderBy = "velit";
                pageToken = "quod";
                prettyPrint = false;
                quotaUser = "a";
                returnPartialSuccess = false;
                uploadType = "enim";
                uploadProtocol = "excepturi";
                userIp = "quae";
            }};            

            ComputeVpnTunnelsAggregatedListResponse res = sdk.vpnTunnels.computeVpnTunnelsAggregatedList(req, new ComputeVpnTunnelsAggregatedListSecurity() {{
                option1 = new ComputeVpnTunnelsAggregatedListSecurityOption1("natus", "tenetur") {{
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

            ComputeVpnTunnelsDeleteRequest req = new ComputeVpnTunnelsDeleteRequest("distinctio", "illum", "dolore") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "dicta";
                alt = AltEnum.PROTO;
                callback = "maxime";
                fields = "minus";
                key = "iure";
                oauthToken = "quas";
                prettyPrint = false;
                quotaUser = "eos";
                requestId = "quam";
                uploadType = "nostrum";
                uploadProtocol = "provident";
                userIp = "harum";
            }};            

            ComputeVpnTunnelsDeleteResponse res = sdk.vpnTunnels.computeVpnTunnelsDelete(req, new ComputeVpnTunnelsDeleteSecurity() {{
                option1 = new ComputeVpnTunnelsDeleteSecurityOption1("error", "laborum") {{
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

            ComputeVpnTunnelsGetRequest req = new ComputeVpnTunnelsGetRequest("sunt", "ipsum", "debitis") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "voluptatem";
                alt = AltEnum.PROTO;
                callback = "expedita";
                fields = "autem";
                key = "est";
                oauthToken = "ipsam";
                prettyPrint = false;
                quotaUser = "odit";
                uploadType = "quisquam";
                uploadProtocol = "dolorum";
                userIp = "nihil";
            }};            

            ComputeVpnTunnelsGetResponse res = sdk.vpnTunnels.computeVpnTunnelsGet(req, new ComputeVpnTunnelsGetSecurity() {{
                option1 = new ComputeVpnTunnelsGetSecurityOption1("sequi", "quod") {{
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

            ComputeVpnTunnelsInsertRequest req = new ComputeVpnTunnelsInsertRequest("quod", "maiores") {{
                dollarXgafv = XgafvEnum.TWO;
                vpnTunnel = new VpnTunnel() {{
                    creationTimestamp = "debitis";
                    description = "voluptatibus";
                    detailedStatus = "alias";
                    id = "delectus";
                    ikeVersion = 758929;
                    kind = "similique";
                    labelFingerprint = "fugiat";
                    labels = new java.util.HashMap<String, String>() {{
                        put("labore", "asperiores");
                        put("in", "odio");
                        put("quos", "esse");
                        put("debitis", "perspiciatis");
                    }};
                    localTrafficSelector = new String[]{{
                        add("mollitia"),
                        add("iste"),
                        add("quaerat"),
                    }};
                    name = "Harriet Morissette";
                    peerExternalGateway = "veritatis";
                    peerExternalGatewayInterface = 833589;
                    peerGcpGateway = "fugit";
                    peerIp = "nesciunt";
                    region = "veritatis";
                    remoteTrafficSelector = new String[]{{
                        add("voluptatum"),
                        add("quasi"),
                    }};
                    router = "corporis";
                    selfLink = "quaerat";
                    sharedSecret = "provident";
                    sharedSecretHash = "tempore";
                    status = VpnTunnelStatusEnum.NEGOTIATION_FAILURE;
                    targetVpnGateway = "nihil";
                    vpnGateway = "architecto";
                    vpnGatewayInterface = 379710;
                }};;
                accessToken = "occaecati";
                alt = AltEnum.MEDIA;
                callback = "soluta";
                fields = "aperiam";
                key = "assumenda";
                oauthToken = "placeat";
                prettyPrint = false;
                quotaUser = "culpa";
                requestId = "et";
                uploadType = "debitis";
                uploadProtocol = "asperiores";
                userIp = "aliquid";
            }};            

            ComputeVpnTunnelsInsertResponse res = sdk.vpnTunnels.computeVpnTunnelsInsert(req, new ComputeVpnTunnelsInsertSecurity() {{
                option1 = new ComputeVpnTunnelsInsertSecurityOption1("quas", "dolorum") {{
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

            ComputeVpnTunnelsListRequest req = new ComputeVpnTunnelsListRequest("at", "dolorum") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "occaecati";
                alt = AltEnum.MEDIA;
                callback = "quam";
                fields = "vitae";
                filter = "molestiae";
                key = "repudiandae";
                maxResults = 533010L;
                oauthToken = "ipsam";
                orderBy = "blanditiis";
                pageToken = "ut";
                prettyPrint = false;
                quotaUser = "delectus";
                returnPartialSuccess = false;
                uploadType = "odit";
                uploadProtocol = "amet";
                userIp = "vitae";
            }};            

            ComputeVpnTunnelsListResponse res = sdk.vpnTunnels.computeVpnTunnelsList(req, new ComputeVpnTunnelsListSecurity() {{
                option1 = new ComputeVpnTunnelsListSecurityOption1("eos", "quibusdam") {{
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

            ComputeVpnTunnelsSetLabelsRequest req = new ComputeVpnTunnelsSetLabelsRequest("nostrum", "magni", "voluptatibus") {{
                dollarXgafv = XgafvEnum.ONE;
                regionSetLabelsRequest = new RegionSetLabelsRequest() {{
                    labelFingerprint = "deleniti";
                    labels = new java.util.HashMap<String, String>() {{
                        put("distinctio", "exercitationem");
                        put("deserunt", "dolor");
                        put("aspernatur", "cupiditate");
                        put("minus", "dignissimos");
                    }};
                }};;
                accessToken = "reprehenderit";
                alt = AltEnum.JSON;
                callback = "cupiditate";
                fields = "vero";
                key = "dignissimos";
                oauthToken = "quam";
                prettyPrint = false;
                quotaUser = "dolores";
                requestId = "tempore";
                uploadType = "quaerat";
                uploadProtocol = "aliquid";
                userIp = "sunt";
            }};            

            ComputeVpnTunnelsSetLabelsResponse res = sdk.vpnTunnels.computeVpnTunnelsSetLabels(req, new ComputeVpnTunnelsSetLabelsSecurity() {{
                option1 = new ComputeVpnTunnelsSetLabelsSecurityOption1("voluptas", "rem") {{
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
