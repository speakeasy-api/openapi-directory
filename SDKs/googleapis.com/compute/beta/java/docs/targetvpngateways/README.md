# targetVpnGateways

### Available Operations

* [computeTargetVpnGatewaysAggregatedList](#computetargetvpngatewaysaggregatedlist) - Retrieves an aggregated list of target VPN gateways.
* [computeTargetVpnGatewaysDelete](#computetargetvpngatewaysdelete) - Deletes the specified target VPN gateway.
* [computeTargetVpnGatewaysGet](#computetargetvpngatewaysget) - Returns the specified target VPN gateway.
* [computeTargetVpnGatewaysInsert](#computetargetvpngatewaysinsert) - Creates a target VPN gateway in the specified project and region using the data included in the request.
* [computeTargetVpnGatewaysList](#computetargetvpngatewayslist) - Retrieves a list of target VPN gateways available to the specified project and region.
* [computeTargetVpnGatewaysSetLabels](#computetargetvpngatewayssetlabels) - Sets the labels on a TargetVpnGateway. To learn more about labels, read the Labeling Resources documentation.
* [computeTargetVpnGatewaysTestIamPermissions](#computetargetvpngatewaystestiampermissions) - Returns permissions that a caller has on the specified resource.

## computeTargetVpnGatewaysAggregatedList

Retrieves an aggregated list of target VPN gateways.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeTargetVpnGatewaysAggregatedListRequest;
import org.openapis.openapi.models.operations.ComputeTargetVpnGatewaysAggregatedListResponse;
import org.openapis.openapi.models.operations.ComputeTargetVpnGatewaysAggregatedListSecurity;
import org.openapis.openapi.models.operations.ComputeTargetVpnGatewaysAggregatedListSecurityOption1;
import org.openapis.openapi.models.operations.ComputeTargetVpnGatewaysAggregatedListSecurityOption2;
import org.openapis.openapi.models.operations.ComputeTargetVpnGatewaysAggregatedListSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeTargetVpnGatewaysAggregatedListRequest req = new ComputeTargetVpnGatewaysAggregatedListRequest("magni") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "aliquam";
                alt = AltEnum.JSON;
                callback = "voluptates";
                fields = "animi";
                filter = "non";
                includeAllScopes = false;
                key = "reiciendis";
                maxResults = 582465L;
                oauthToken = "magni";
                orderBy = "natus";
                pageToken = "assumenda";
                prettyPrint = false;
                quotaUser = "eveniet";
                returnPartialSuccess = false;
                uploadType = "modi";
                uploadProtocol = "libero";
                userIp = "ullam";
            }};            

            ComputeTargetVpnGatewaysAggregatedListResponse res = sdk.targetVpnGateways.computeTargetVpnGatewaysAggregatedList(req, new ComputeTargetVpnGatewaysAggregatedListSecurity() {{
                option1 = new ComputeTargetVpnGatewaysAggregatedListSecurityOption1("nulla", "cumque") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.targetVpnGatewayAggregatedList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeTargetVpnGatewaysDelete

Deletes the specified target VPN gateway.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeTargetVpnGatewaysDeleteRequest;
import org.openapis.openapi.models.operations.ComputeTargetVpnGatewaysDeleteResponse;
import org.openapis.openapi.models.operations.ComputeTargetVpnGatewaysDeleteSecurity;
import org.openapis.openapi.models.operations.ComputeTargetVpnGatewaysDeleteSecurityOption1;
import org.openapis.openapi.models.operations.ComputeTargetVpnGatewaysDeleteSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeTargetVpnGatewaysDeleteRequest req = new ComputeTargetVpnGatewaysDeleteRequest("nam", "sit", "beatae") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "sit";
                alt = AltEnum.PROTO;
                callback = "distinctio";
                fields = "repudiandae";
                key = "modi";
                oauthToken = "vel";
                prettyPrint = false;
                quotaUser = "assumenda";
                requestId = "repellat";
                uploadType = "excepturi";
                uploadProtocol = "corrupti";
                userIp = "repellat";
            }};            

            ComputeTargetVpnGatewaysDeleteResponse res = sdk.targetVpnGateways.computeTargetVpnGatewaysDelete(req, new ComputeTargetVpnGatewaysDeleteSecurity() {{
                option1 = new ComputeTargetVpnGatewaysDeleteSecurityOption1("harum", "consequuntur") {{
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

## computeTargetVpnGatewaysGet

Returns the specified target VPN gateway.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeTargetVpnGatewaysGetRequest;
import org.openapis.openapi.models.operations.ComputeTargetVpnGatewaysGetResponse;
import org.openapis.openapi.models.operations.ComputeTargetVpnGatewaysGetSecurity;
import org.openapis.openapi.models.operations.ComputeTargetVpnGatewaysGetSecurityOption1;
import org.openapis.openapi.models.operations.ComputeTargetVpnGatewaysGetSecurityOption2;
import org.openapis.openapi.models.operations.ComputeTargetVpnGatewaysGetSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeTargetVpnGatewaysGetRequest req = new ComputeTargetVpnGatewaysGetRequest("occaecati", "tempore", "quisquam") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "animi";
                alt = AltEnum.JSON;
                callback = "debitis";
                fields = "quam";
                key = "cupiditate";
                oauthToken = "possimus";
                prettyPrint = false;
                quotaUser = "reiciendis";
                uploadType = "asperiores";
                uploadProtocol = "doloribus";
                userIp = "dolores";
            }};            

            ComputeTargetVpnGatewaysGetResponse res = sdk.targetVpnGateways.computeTargetVpnGatewaysGet(req, new ComputeTargetVpnGatewaysGetSecurity() {{
                option1 = new ComputeTargetVpnGatewaysGetSecurityOption1("libero", "aspernatur") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.targetVpnGateway != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeTargetVpnGatewaysInsert

Creates a target VPN gateway in the specified project and region using the data included in the request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeTargetVpnGatewaysInsertRequest;
import org.openapis.openapi.models.operations.ComputeTargetVpnGatewaysInsertResponse;
import org.openapis.openapi.models.operations.ComputeTargetVpnGatewaysInsertSecurity;
import org.openapis.openapi.models.operations.ComputeTargetVpnGatewaysInsertSecurityOption1;
import org.openapis.openapi.models.operations.ComputeTargetVpnGatewaysInsertSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.TargetVpnGateway;
import org.openapis.openapi.models.shared.TargetVpnGatewayStatusEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeTargetVpnGatewaysInsertRequest req = new ComputeTargetVpnGatewaysInsertRequest("maxime", "aspernatur") {{
                dollarXgafv = XgafvEnum.TWO;
                targetVpnGateway = new TargetVpnGateway() {{
                    creationTimestamp = "quisquam";
                    description = "ratione";
                    forwardingRules = new String[]{{
                        add("soluta"),
                        add("facere"),
                        add("fugit"),
                        add("maxime"),
                    }};
                    id = "earum";
                    kind = "provident";
                    labelFingerprint = "doloremque";
                    labels = new java.util.HashMap<String, String>() {{
                        put("corporis", "corrupti");
                        put("aliquid", "odit");
                        put("culpa", "explicabo");
                    }};
                    name = "Miss Yolanda Hand Jr.";
                    network = "ipsa";
                    region = "vitae";
                    selfLink = "nisi";
                    status = TargetVpnGatewayStatusEnum.READY;
                    tunnels = new String[]{{
                        add("sapiente"),
                        add("libero"),
                        add("magni"),
                        add("ut"),
                    }};
                }};;
                accessToken = "modi";
                alt = AltEnum.JSON;
                callback = "repellat";
                fields = "eligendi";
                key = "dignissimos";
                oauthToken = "architecto";
                prettyPrint = false;
                quotaUser = "deserunt";
                requestId = "ad";
                uploadType = "odit";
                uploadProtocol = "ex";
                userIp = "minima";
            }};            

            ComputeTargetVpnGatewaysInsertResponse res = sdk.targetVpnGateways.computeTargetVpnGatewaysInsert(req, new ComputeTargetVpnGatewaysInsertSecurity() {{
                option1 = new ComputeTargetVpnGatewaysInsertSecurityOption1("iusto", "dolor") {{
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

## computeTargetVpnGatewaysList

Retrieves a list of target VPN gateways available to the specified project and region.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeTargetVpnGatewaysListRequest;
import org.openapis.openapi.models.operations.ComputeTargetVpnGatewaysListResponse;
import org.openapis.openapi.models.operations.ComputeTargetVpnGatewaysListSecurity;
import org.openapis.openapi.models.operations.ComputeTargetVpnGatewaysListSecurityOption1;
import org.openapis.openapi.models.operations.ComputeTargetVpnGatewaysListSecurityOption2;
import org.openapis.openapi.models.operations.ComputeTargetVpnGatewaysListSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeTargetVpnGatewaysListRequest req = new ComputeTargetVpnGatewaysListRequest("doloremque", "itaque") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "ducimus";
                alt = AltEnum.JSON;
                callback = "cumque";
                fields = "ut";
                filter = "asperiores";
                key = "nisi";
                maxResults = 876376L;
                oauthToken = "doloremque";
                orderBy = "eum";
                pageToken = "quam";
                prettyPrint = false;
                quotaUser = "voluptates";
                returnPartialSuccess = false;
                uploadType = "molestias";
                uploadProtocol = "rerum";
                userIp = "praesentium";
            }};            

            ComputeTargetVpnGatewaysListResponse res = sdk.targetVpnGateways.computeTargetVpnGatewaysList(req, new ComputeTargetVpnGatewaysListSecurity() {{
                option1 = new ComputeTargetVpnGatewaysListSecurityOption1("dolorum", "id") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.targetVpnGatewayList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeTargetVpnGatewaysSetLabels

Sets the labels on a TargetVpnGateway. To learn more about labels, read the Labeling Resources documentation.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeTargetVpnGatewaysSetLabelsRequest;
import org.openapis.openapi.models.operations.ComputeTargetVpnGatewaysSetLabelsResponse;
import org.openapis.openapi.models.operations.ComputeTargetVpnGatewaysSetLabelsSecurity;
import org.openapis.openapi.models.operations.ComputeTargetVpnGatewaysSetLabelsSecurityOption1;
import org.openapis.openapi.models.operations.ComputeTargetVpnGatewaysSetLabelsSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.RegionSetLabelsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeTargetVpnGatewaysSetLabelsRequest req = new ComputeTargetVpnGatewaysSetLabelsRequest("quos", "nesciunt", "aut") {{
                dollarXgafv = XgafvEnum.TWO;
                regionSetLabelsRequest = new RegionSetLabelsRequest() {{
                    labelFingerprint = "facere";
                    labels = new java.util.HashMap<String, String>() {{
                        put("sed", "veritatis");
                        put("nulla", "deserunt");
                        put("rerum", "quasi");
                        put("nobis", "quidem");
                    }};
                }};;
                accessToken = "iste";
                alt = AltEnum.JSON;
                callback = "pariatur";
                fields = "numquam";
                key = "sunt";
                oauthToken = "officia";
                prettyPrint = false;
                quotaUser = "impedit";
                requestId = "explicabo";
                uploadType = "ab";
                uploadProtocol = "eum";
                userIp = "quos";
            }};            

            ComputeTargetVpnGatewaysSetLabelsResponse res = sdk.targetVpnGateways.computeTargetVpnGatewaysSetLabels(req, new ComputeTargetVpnGatewaysSetLabelsSecurity() {{
                option1 = new ComputeTargetVpnGatewaysSetLabelsSecurityOption1("consequatur", "quas") {{
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

## computeTargetVpnGatewaysTestIamPermissions

Returns permissions that a caller has on the specified resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeTargetVpnGatewaysTestIamPermissionsRequest;
import org.openapis.openapi.models.operations.ComputeTargetVpnGatewaysTestIamPermissionsResponse;
import org.openapis.openapi.models.operations.ComputeTargetVpnGatewaysTestIamPermissionsSecurity;
import org.openapis.openapi.models.operations.ComputeTargetVpnGatewaysTestIamPermissionsSecurityOption1;
import org.openapis.openapi.models.operations.ComputeTargetVpnGatewaysTestIamPermissionsSecurityOption2;
import org.openapis.openapi.models.operations.ComputeTargetVpnGatewaysTestIamPermissionsSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.TestPermissionsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeTargetVpnGatewaysTestIamPermissionsRequest req = new ComputeTargetVpnGatewaysTestIamPermissionsRequest("unde", "porro", "nulla") {{
                dollarXgafv = XgafvEnum.ONE;
                testPermissionsRequest = new TestPermissionsRequest() {{
                    permissions = new String[]{{
                        add("iure"),
                        add("quo"),
                    }};
                }};;
                accessToken = "voluptas";
                alt = AltEnum.MEDIA;
                callback = "aliquam";
                fields = "voluptatem";
                key = "animi";
                oauthToken = "aspernatur";
                prettyPrint = false;
                quotaUser = "laborum";
                uploadType = "error";
                uploadProtocol = "assumenda";
                userIp = "quisquam";
            }};            

            ComputeTargetVpnGatewaysTestIamPermissionsResponse res = sdk.targetVpnGateways.computeTargetVpnGatewaysTestIamPermissions(req, new ComputeTargetVpnGatewaysTestIamPermissionsSecurity() {{
                option1 = new ComputeTargetVpnGatewaysTestIamPermissionsSecurityOption1("inventore", "porro") {{
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
