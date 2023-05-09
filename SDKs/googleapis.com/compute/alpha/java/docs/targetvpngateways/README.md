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

            ComputeTargetVpnGatewaysAggregatedListRequest req = new ComputeTargetVpnGatewaysAggregatedListRequest("nostrum") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "doloremque";
                alt = AltEnum.PROTO;
                callback = "sapiente";
                fields = "magnam";
                filter = "velit";
                includeAllScopes = false;
                key = "aliquam";
                maxResults = 879541L;
                oauthToken = "natus";
                orderBy = "cupiditate";
                pageToken = "temporibus";
                prettyPrint = false;
                quotaUser = "a";
                returnPartialSuccess = false;
                uploadType = "maiores";
                uploadProtocol = "repellendus";
                userIp = "sequi";
            }};            

            ComputeTargetVpnGatewaysAggregatedListResponse res = sdk.targetVpnGateways.computeTargetVpnGatewaysAggregatedList(req, new ComputeTargetVpnGatewaysAggregatedListSecurity() {{
                option1 = new ComputeTargetVpnGatewaysAggregatedListSecurityOption1("natus", "aut") {{
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

            ComputeTargetVpnGatewaysDeleteRequest req = new ComputeTargetVpnGatewaysDeleteRequest("incidunt", "laudantium", "voluptatibus") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "mollitia";
                alt = AltEnum.MEDIA;
                callback = "sed";
                fields = "adipisci";
                key = "dolorem";
                oauthToken = "tenetur";
                prettyPrint = false;
                quotaUser = "nostrum";
                requestId = "reprehenderit";
                uploadType = "ducimus";
                uploadProtocol = "magnam";
                userIp = "aliquam";
            }};            

            ComputeTargetVpnGatewaysDeleteResponse res = sdk.targetVpnGateways.computeTargetVpnGatewaysDelete(req, new ComputeTargetVpnGatewaysDeleteSecurity() {{
                option1 = new ComputeTargetVpnGatewaysDeleteSecurityOption1("totam", "quia") {{
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

            ComputeTargetVpnGatewaysGetRequest req = new ComputeTargetVpnGatewaysGetRequest("ullam", "soluta", "nesciunt") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "recusandae";
                alt = AltEnum.JSON;
                callback = "cum";
                fields = "esse";
                key = "laborum";
                oauthToken = "incidunt";
                prettyPrint = false;
                quotaUser = "expedita";
                uploadType = "vero";
                uploadProtocol = "cum";
                userIp = "corrupti";
            }};            

            ComputeTargetVpnGatewaysGetResponse res = sdk.targetVpnGateways.computeTargetVpnGatewaysGet(req, new ComputeTargetVpnGatewaysGetSecurity() {{
                option1 = new ComputeTargetVpnGatewaysGetSecurityOption1("maiores", "voluptatibus") {{
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

            ComputeTargetVpnGatewaysInsertRequest req = new ComputeTargetVpnGatewaysInsertRequest("sit", "optio") {{
                dollarXgafv = XgafvEnum.ONE;
                targetVpnGateway = new TargetVpnGateway() {{
                    creationTimestamp = "veritatis";
                    description = "magnam";
                    forwardingRules = new String[]{{
                        add("quis"),
                    }};
                    id = "nihil";
                    kind = "accusamus";
                    labelFingerprint = "odit";
                    labels = new java.util.HashMap<String, String>() {{
                        put("iusto", "magni");
                        put("veniam", "vitae");
                        put("ex", "beatae");
                    }};
                    name = "Dianne Bayer";
                    network = "quae";
                    region = "doloribus";
                    selfLink = "atque";
                    status = TargetVpnGatewayStatusEnum.DELETING;
                    tunnels = new String[]{{
                        add("consectetur"),
                        add("aut"),
                        add("quia"),
                    }};
                }};;
                accessToken = "accusantium";
                alt = AltEnum.PROTO;
                callback = "esse";
                fields = "doloribus";
                key = "suscipit";
                oauthToken = "ut";
                prettyPrint = false;
                quotaUser = "perspiciatis";
                requestId = "exercitationem";
                uploadType = "cum";
                uploadProtocol = "sit";
                userIp = "ab";
            }};            

            ComputeTargetVpnGatewaysInsertResponse res = sdk.targetVpnGateways.computeTargetVpnGatewaysInsert(req, new ComputeTargetVpnGatewaysInsertSecurity() {{
                option1 = new ComputeTargetVpnGatewaysInsertSecurityOption1("asperiores", "harum") {{
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

            ComputeTargetVpnGatewaysListRequest req = new ComputeTargetVpnGatewaysListRequest("iure", "porro") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "libero";
                alt = AltEnum.JSON;
                callback = "neque";
                fields = "quibusdam";
                filter = "in";
                key = "beatae";
                maxResults = 173171L;
                oauthToken = "nemo";
                orderBy = "pariatur";
                pageToken = "exercitationem";
                prettyPrint = false;
                quotaUser = "est";
                returnPartialSuccess = false;
                uploadType = "ex";
                uploadProtocol = "maxime";
                userIp = "suscipit";
            }};            

            ComputeTargetVpnGatewaysListResponse res = sdk.targetVpnGateways.computeTargetVpnGatewaysList(req, new ComputeTargetVpnGatewaysListSecurity() {{
                option1 = new ComputeTargetVpnGatewaysListSecurityOption1("cupiditate", "omnis") {{
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

            ComputeTargetVpnGatewaysSetLabelsRequest req = new ComputeTargetVpnGatewaysSetLabelsRequest("quidem", "adipisci", "quidem") {{
                dollarXgafv = XgafvEnum.TWO;
                regionSetLabelsRequest = new RegionSetLabelsRequest() {{
                    labelFingerprint = "veniam";
                    labels = new java.util.HashMap<String, String>() {{
                        put("velit", "similique");
                    }};
                }};;
                accessToken = "at";
                alt = AltEnum.MEDIA;
                callback = "temporibus";
                fields = "fuga";
                key = "nobis";
                oauthToken = "deleniti";
                prettyPrint = false;
                quotaUser = "nobis";
                requestId = "ratione";
                uploadType = "sit";
                uploadProtocol = "ab";
                userIp = "quam";
            }};            

            ComputeTargetVpnGatewaysSetLabelsResponse res = sdk.targetVpnGateways.computeTargetVpnGatewaysSetLabels(req, new ComputeTargetVpnGatewaysSetLabelsSecurity() {{
                option1 = new ComputeTargetVpnGatewaysSetLabelsSecurityOption1("odit", "excepturi") {{
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

            ComputeTargetVpnGatewaysTestIamPermissionsRequest req = new ComputeTargetVpnGatewaysTestIamPermissionsRequest("dolore", "esse", "molestiae") {{
                dollarXgafv = XgafvEnum.ONE;
                testPermissionsRequest = new TestPermissionsRequest() {{
                    permissions = new String[]{{
                        add("fuga"),
                        add("reprehenderit"),
                        add("cumque"),
                        add("sed"),
                    }};
                }};;
                accessToken = "fuga";
                alt = AltEnum.JSON;
                callback = "sequi";
                fields = "enim";
                key = "ipsum";
                oauthToken = "ipsam";
                prettyPrint = false;
                quotaUser = "voluptate";
                uploadType = "magni";
                uploadProtocol = "nam";
                userIp = "repellat";
            }};            

            ComputeTargetVpnGatewaysTestIamPermissionsResponse res = sdk.targetVpnGateways.computeTargetVpnGatewaysTestIamPermissions(req, new ComputeTargetVpnGatewaysTestIamPermissionsSecurity() {{
                option1 = new ComputeTargetVpnGatewaysTestIamPermissionsSecurityOption1("omnis", "fugiat") {{
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
