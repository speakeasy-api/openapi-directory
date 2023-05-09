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

            ComputeVpnGatewaysAggregatedListRequest req = new ComputeVpnGatewaysAggregatedListRequest("perspiciatis") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "occaecati";
                alt = AltEnum.PROTO;
                callback = "dolor";
                fields = "veritatis";
                filter = "aliquam";
                includeAllScopes = false;
                key = "harum";
                maxResults = 526720L;
                oauthToken = "accusamus";
                orderBy = "laudantium";
                pageToken = "recusandae";
                prettyPrint = false;
                quotaUser = "ad";
                returnPartialSuccess = false;
                uploadType = "voluptates";
                uploadProtocol = "ipsum";
                userIp = "alias";
            }};            

            ComputeVpnGatewaysAggregatedListResponse res = sdk.vpnGateways.computeVpnGatewaysAggregatedList(req, new ComputeVpnGatewaysAggregatedListSecurity() {{
                option1 = new ComputeVpnGatewaysAggregatedListSecurityOption1("voluptates", "doloremque") {{
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

            ComputeVpnGatewaysDeleteRequest req = new ComputeVpnGatewaysDeleteRequest("autem", "consectetur", "vitae") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "molestiae";
                alt = AltEnum.MEDIA;
                callback = "nihil";
                fields = "occaecati";
                key = "tempora";
                oauthToken = "nesciunt";
                prettyPrint = false;
                quotaUser = "odio";
                requestId = "amet";
                uploadType = "provident";
                uploadProtocol = "at";
                userIp = "itaque";
            }};            

            ComputeVpnGatewaysDeleteResponse res = sdk.vpnGateways.computeVpnGatewaysDelete(req, new ComputeVpnGatewaysDeleteSecurity() {{
                option1 = new ComputeVpnGatewaysDeleteSecurityOption1("adipisci", "aut") {{
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

            ComputeVpnGatewaysGetRequest req = new ComputeVpnGatewaysGetRequest("dicta", "recusandae", "magni") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "vitae";
                alt = AltEnum.MEDIA;
                callback = "distinctio";
                fields = "aliquam";
                key = "perferendis";
                oauthToken = "facere";
                prettyPrint = false;
                quotaUser = "itaque";
                uploadType = "odit";
                uploadProtocol = "nihil";
                userIp = "aut";
            }};            

            ComputeVpnGatewaysGetResponse res = sdk.vpnGateways.computeVpnGatewaysGet(req, new ComputeVpnGatewaysGetSecurity() {{
                option1 = new ComputeVpnGatewaysGetSecurityOption1("recusandae", "iure") {{
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

            ComputeVpnGatewaysGetStatusRequest req = new ComputeVpnGatewaysGetStatusRequest("nihil", "ipsa", "est") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "assumenda";
                alt = AltEnum.MEDIA;
                callback = "aliquam";
                fields = "consectetur";
                key = "maxime";
                oauthToken = "dolor";
                prettyPrint = false;
                quotaUser = "dolorum";
                uploadType = "at";
                uploadProtocol = "voluptates";
                userIp = "quasi";
            }};            

            ComputeVpnGatewaysGetStatusResponse res = sdk.vpnGateways.computeVpnGatewaysGetStatus(req, new ComputeVpnGatewaysGetStatusSecurity() {{
                option1 = new ComputeVpnGatewaysGetStatusSecurityOption1("quasi", "similique") {{
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

            ComputeVpnGatewaysInsertRequest req = new ComputeVpnGatewaysInsertRequest("natus", "dicta") {{
                dollarXgafv = XgafvEnum.TWO;
                vpnGateway = new VpnGateway() {{
                    creationTimestamp = "illum";
                    description = "fuga";
                    gatewayIpVersion = VpnGatewayGatewayIpVersionEnum.IPV4;
                    id = "maiores";
                    kind = "repudiandae";
                    labelFingerprint = "quae";
                    labels = new java.util.HashMap<String, String>() {{
                        put("quod", "vitae");
                    }};
                    name = "Maureen Rutherford";
                    network = "ex";
                    region = "molestiae";
                    selfLink = "alias";
                    stackType = VpnGatewayStackTypeEnum.IPV4_IPV6;
                    vpnInterfaces = new org.openapis.openapi.models.shared.VpnGatewayVpnGatewayInterface[]{{
                        add(new VpnGatewayVpnGatewayInterface() {{
                            id = 230813L;
                            interconnectAttachment = "eveniet";
                            ipAddress = "nulla";
                            ipv6Address = "temporibus";
                        }}),
                        add(new VpnGatewayVpnGatewayInterface() {{
                            id = 296756L;
                            interconnectAttachment = "veniam";
                            ipAddress = "quos";
                            ipv6Address = "voluptatem";
                        }}),
                        add(new VpnGatewayVpnGatewayInterface() {{
                            id = 639262L;
                            interconnectAttachment = "cumque";
                            ipAddress = "totam";
                            ipv6Address = "repellat";
                        }}),
                    }};
                }};;
                accessToken = "reprehenderit";
                alt = AltEnum.MEDIA;
                callback = "blanditiis";
                fields = "voluptatum";
                key = "voluptas";
                oauthToken = "fugit";
                prettyPrint = false;
                quotaUser = "nisi";
                requestId = "molestias";
                uploadType = "dicta";
                uploadProtocol = "ullam";
                userIp = "architecto";
            }};            

            ComputeVpnGatewaysInsertResponse res = sdk.vpnGateways.computeVpnGatewaysInsert(req, new ComputeVpnGatewaysInsertSecurity() {{
                option1 = new ComputeVpnGatewaysInsertSecurityOption1("ullam", "aliquam") {{
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

            ComputeVpnGatewaysListRequest req = new ComputeVpnGatewaysListRequest("commodi", "numquam") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "ad";
                alt = AltEnum.PROTO;
                callback = "officia";
                fields = "aut";
                filter = "fugiat";
                key = "dolore";
                maxResults = 910321L;
                oauthToken = "iste";
                orderBy = "doloribus";
                pageToken = "impedit";
                prettyPrint = false;
                quotaUser = "eos";
                returnPartialSuccess = false;
                uploadType = "quas";
                uploadProtocol = "expedita";
                userIp = "nesciunt";
            }};            

            ComputeVpnGatewaysListResponse res = sdk.vpnGateways.computeVpnGatewaysList(req, new ComputeVpnGatewaysListSecurity() {{
                option1 = new ComputeVpnGatewaysListSecurityOption1("nihil", "non") {{
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

            ComputeVpnGatewaysSetLabelsRequest req = new ComputeVpnGatewaysSetLabelsRequest("odio", "maiores", "delectus") {{
                dollarXgafv = XgafvEnum.TWO;
                regionSetLabelsRequest = new RegionSetLabelsRequest() {{
                    labelFingerprint = "enim";
                    labels = new java.util.HashMap<String, String>() {{
                        put("laboriosam", "ab");
                        put("inventore", "fuga");
                        put("doloremque", "distinctio");
                        put("id", "dolor");
                    }};
                }};;
                accessToken = "quasi";
                alt = AltEnum.JSON;
                callback = "beatae";
                fields = "ipsa";
                key = "rem";
                oauthToken = "dicta";
                prettyPrint = false;
                quotaUser = "earum";
                requestId = "sapiente";
                uploadType = "porro";
                uploadProtocol = "blanditiis";
                userIp = "facilis";
            }};            

            ComputeVpnGatewaysSetLabelsResponse res = sdk.vpnGateways.computeVpnGatewaysSetLabels(req, new ComputeVpnGatewaysSetLabelsSecurity() {{
                option1 = new ComputeVpnGatewaysSetLabelsSecurityOption1("facere", "ut") {{
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

            ComputeVpnGatewaysTestIamPermissionsRequest req = new ComputeVpnGatewaysTestIamPermissionsRequest("unde", "aliquid", "reiciendis") {{
                dollarXgafv = XgafvEnum.ONE;
                testPermissionsRequest = new TestPermissionsRequest() {{
                    permissions = new String[]{{
                        add("porro"),
                        add("exercitationem"),
                    }};
                }};;
                accessToken = "fugit";
                alt = AltEnum.JSON;
                callback = "impedit";
                fields = "dolorum";
                key = "expedita";
                oauthToken = "veniam";
                prettyPrint = false;
                quotaUser = "officia";
                uploadType = "atque";
                uploadProtocol = "aspernatur";
                userIp = "blanditiis";
            }};            

            ComputeVpnGatewaysTestIamPermissionsResponse res = sdk.vpnGateways.computeVpnGatewaysTestIamPermissions(req, new ComputeVpnGatewaysTestIamPermissionsSecurity() {{
                option1 = new ComputeVpnGatewaysTestIamPermissionsSecurityOption1("quibusdam", "temporibus") {{
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
