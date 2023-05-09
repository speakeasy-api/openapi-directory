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

            ComputeVpnGatewaysAggregatedListRequest req = new ComputeVpnGatewaysAggregatedListRequest("occaecati") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "corrupti";
                alt = AltEnum.PROTO;
                callback = "aspernatur";
                fields = "reprehenderit";
                filter = "alias";
                includeAllScopes = false;
                key = "neque";
                maxResults = 893382L;
                oauthToken = "reiciendis";
                orderBy = "assumenda";
                pageToken = "sint";
                prettyPrint = false;
                quotaUser = "tempore";
                returnPartialSuccess = false;
                uploadType = "harum";
                uploadProtocol = "magni";
                userIp = "voluptas";
            }};            

            ComputeVpnGatewaysAggregatedListResponse res = sdk.vpnGateways.computeVpnGatewaysAggregatedList(req, new ComputeVpnGatewaysAggregatedListSecurity() {{
                option1 = new ComputeVpnGatewaysAggregatedListSecurityOption1("occaecati", "animi") {{
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

            ComputeVpnGatewaysDeleteRequest req = new ComputeVpnGatewaysDeleteRequest("quos", "quis", "tempora") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "tempore";
                alt = AltEnum.MEDIA;
                callback = "exercitationem";
                fields = "ad";
                key = "sequi";
                oauthToken = "architecto";
                prettyPrint = false;
                quotaUser = "soluta";
                requestId = "quibusdam";
                uploadType = "corporis";
                uploadProtocol = "repudiandae";
                userIp = "aliquid";
            }};            

            ComputeVpnGatewaysDeleteResponse res = sdk.vpnGateways.computeVpnGatewaysDelete(req, new ComputeVpnGatewaysDeleteSecurity() {{
                option1 = new ComputeVpnGatewaysDeleteSecurityOption1("vitae", "inventore") {{
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

            ComputeVpnGatewaysGetRequest req = new ComputeVpnGatewaysGetRequest("porro", "in", "beatae") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "pariatur";
                alt = AltEnum.JSON;
                callback = "quos";
                fields = "praesentium";
                key = "consequatur";
                oauthToken = "reiciendis";
                prettyPrint = false;
                quotaUser = "magni";
                uploadType = "nobis";
                uploadProtocol = "quo";
                userIp = "pariatur";
            }};            

            ComputeVpnGatewaysGetResponse res = sdk.vpnGateways.computeVpnGatewaysGet(req, new ComputeVpnGatewaysGetSecurity() {{
                option1 = new ComputeVpnGatewaysGetSecurityOption1("consequuntur", "inventore") {{
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

            ComputeVpnGatewaysGetStatusRequest req = new ComputeVpnGatewaysGetStatusRequest("adipisci", "earum", "odio") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "dolor";
                alt = AltEnum.PROTO;
                callback = "ut";
                fields = "modi";
                key = "ullam";
                oauthToken = "veritatis";
                prettyPrint = false;
                quotaUser = "alias";
                uploadType = "ex";
                uploadProtocol = "alias";
                userIp = "eveniet";
            }};            

            ComputeVpnGatewaysGetStatusResponse res = sdk.vpnGateways.computeVpnGatewaysGetStatus(req, new ComputeVpnGatewaysGetStatusSecurity() {{
                option1 = new ComputeVpnGatewaysGetStatusSecurityOption1("mollitia", "temporibus") {{
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
import org.openapis.openapi.models.shared.VpnGatewayGatewayIpVersionEnum;
import org.openapis.openapi.models.shared.VpnGatewayStackTypeEnum;
import org.openapis.openapi.models.shared.VpnGatewayVpnGatewayInterface;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeVpnGatewaysInsertRequest req = new ComputeVpnGatewaysInsertRequest("fugiat", "occaecati") {{
                dollarXgafv = XgafvEnum.ONE;
                vpnGateway = new VpnGateway() {{
                    creationTimestamp = "quos";
                    description = "mollitia";
                    gatewayIpVersion = VpnGatewayGatewayIpVersionEnum.IPV4;
                    id = "et";
                    kind = "sapiente";
                    labelFingerprint = "earum";
                    labels = new java.util.HashMap<String, String>() {{
                        put("ipsa", "alias");
                        put("quae", "fugiat");
                        put("ullam", "nisi");
                        put("cum", "est");
                    }};
                    name = "Jean O'Kon";
                    network = "tempore";
                    region = "nihil";
                    selfLink = "sapiente";
                    stackType = VpnGatewayStackTypeEnum.IPV4_ONLY;
                    vpnInterfaces = new org.openapis.openapi.models.shared.VpnGatewayVpnGatewayInterface[]{{
                        add(new VpnGatewayVpnGatewayInterface() {{
                            id = 798496L;
                            interconnectAttachment = "magni";
                            ipAddress = "expedita";
                            ipv6Address = "cum";
                        }}),
                    }};
                }};;
                accessToken = "eveniet";
                alt = AltEnum.JSON;
                callback = "culpa";
                fields = "inventore";
                key = "recusandae";
                oauthToken = "quam";
                prettyPrint = false;
                quotaUser = "soluta";
                requestId = "pariatur";
                uploadType = "quae";
                uploadProtocol = "soluta";
                userIp = "optio";
            }};            

            ComputeVpnGatewaysInsertResponse res = sdk.vpnGateways.computeVpnGatewaysInsert(req, new ComputeVpnGatewaysInsertSecurity() {{
                option1 = new ComputeVpnGatewaysInsertSecurityOption1("quia", "tempore") {{
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

            ComputeVpnGatewaysListRequest req = new ComputeVpnGatewaysListRequest("qui", "eligendi") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "explicabo";
                alt = AltEnum.PROTO;
                callback = "animi";
                fields = "odit";
                filter = "officia";
                key = "ut";
                maxResults = 230417L;
                oauthToken = "pariatur";
                orderBy = "ea";
                pageToken = "quae";
                prettyPrint = false;
                quotaUser = "rerum";
                returnPartialSuccess = false;
                uploadType = "quas";
                uploadProtocol = "assumenda";
                userIp = "modi";
            }};            

            ComputeVpnGatewaysListResponse res = sdk.vpnGateways.computeVpnGatewaysList(req, new ComputeVpnGatewaysListSecurity() {{
                option1 = new ComputeVpnGatewaysListSecurityOption1("eum", "sed") {{
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

            ComputeVpnGatewaysSetLabelsRequest req = new ComputeVpnGatewaysSetLabelsRequest("iste", "autem", "inventore") {{
                dollarXgafv = XgafvEnum.ONE;
                regionSetLabelsRequest = new RegionSetLabelsRequest() {{
                    labelFingerprint = "ullam";
                    labels = new java.util.HashMap<String, String>() {{
                        put("ipsa", "velit");
                        put("quos", "consequatur");
                    }};
                }};;
                accessToken = "voluptatem";
                alt = AltEnum.MEDIA;
                callback = "deserunt";
                fields = "molestias";
                key = "impedit";
                oauthToken = "magnam";
                prettyPrint = false;
                quotaUser = "non";
                requestId = "sunt";
                uploadType = "esse";
                uploadProtocol = "laudantium";
                userIp = "aliquam";
            }};            

            ComputeVpnGatewaysSetLabelsResponse res = sdk.vpnGateways.computeVpnGatewaysSetLabels(req, new ComputeVpnGatewaysSetLabelsSecurity() {{
                option1 = new ComputeVpnGatewaysSetLabelsSecurityOption1("esse", "aspernatur") {{
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

            ComputeVpnGatewaysTestIamPermissionsRequest req = new ComputeVpnGatewaysTestIamPermissionsRequest("dignissimos", "fuga", "unde") {{
                dollarXgafv = XgafvEnum.TWO;
                testPermissionsRequest = new TestPermissionsRequest() {{
                    permissions = new String[]{{
                        add("velit"),
                        add("distinctio"),
                        add("accusamus"),
                    }};
                }};;
                accessToken = "vel";
                alt = AltEnum.JSON;
                callback = "dolorem";
                fields = "fugiat";
                key = "temporibus";
                oauthToken = "architecto";
                prettyPrint = false;
                quotaUser = "tempore";
                uploadType = "id";
                uploadProtocol = "asperiores";
                userIp = "vel";
            }};            

            ComputeVpnGatewaysTestIamPermissionsResponse res = sdk.vpnGateways.computeVpnGatewaysTestIamPermissions(req, new ComputeVpnGatewaysTestIamPermissionsSecurity() {{
                option1 = new ComputeVpnGatewaysTestIamPermissionsSecurityOption1("quisquam", "sit") {{
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
