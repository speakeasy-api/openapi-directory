# targetVpnGateways

### Available Operations

* [computeTargetVpnGatewaysAggregatedList](#computetargetvpngatewaysaggregatedlist) - Retrieves an aggregated list of target VPN gateways.
* [computeTargetVpnGatewaysDelete](#computetargetvpngatewaysdelete) - Deletes the specified target VPN gateway.
* [computeTargetVpnGatewaysGet](#computetargetvpngatewaysget) - Returns the specified target VPN gateway.
* [computeTargetVpnGatewaysInsert](#computetargetvpngatewaysinsert) - Creates a target VPN gateway in the specified project and region using the data included in the request.
* [computeTargetVpnGatewaysList](#computetargetvpngatewayslist) - Retrieves a list of target VPN gateways available to the specified project and region.
* [computeTargetVpnGatewaysSetLabels](#computetargetvpngatewayssetlabels) - Sets the labels on a TargetVpnGateway. To learn more about labels, read the Labeling Resources documentation.

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

            ComputeTargetVpnGatewaysAggregatedListRequest req = new ComputeTargetVpnGatewaysAggregatedListRequest("distinctio") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "ipsa";
                alt = AltEnum.MEDIA;
                callback = "perferendis";
                fields = "possimus";
                filter = "itaque";
                includeAllScopes = false;
                key = "animi";
                maxResults = 527154L;
                oauthToken = "tempore";
                orderBy = "repellendus";
                pageToken = "eum";
                prettyPrint = false;
                quotaUser = "culpa";
                returnPartialSuccess = false;
                uploadType = "totam";
                uploadProtocol = "iure";
                userIp = "ducimus";
            }};            

            ComputeTargetVpnGatewaysAggregatedListResponse res = sdk.targetVpnGateways.computeTargetVpnGatewaysAggregatedList(req, new ComputeTargetVpnGatewaysAggregatedListSecurity() {{
                option1 = new ComputeTargetVpnGatewaysAggregatedListSecurityOption1("quisquam", "libero") {{
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

            ComputeTargetVpnGatewaysDeleteRequest req = new ComputeTargetVpnGatewaysDeleteRequest("unde", "nulla", "cupiditate") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "cupiditate";
                alt = AltEnum.JSON;
                callback = "cum";
                fields = "officiis";
                key = "facere";
                oauthToken = "veritatis";
                prettyPrint = false;
                quotaUser = "id";
                requestId = "itaque";
                uploadType = "porro";
                uploadProtocol = "odio";
                userIp = "ad";
            }};            

            ComputeTargetVpnGatewaysDeleteResponse res = sdk.targetVpnGateways.computeTargetVpnGatewaysDelete(req, new ComputeTargetVpnGatewaysDeleteSecurity() {{
                option1 = new ComputeTargetVpnGatewaysDeleteSecurityOption1("natus", "similique") {{
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

            ComputeTargetVpnGatewaysGetRequest req = new ComputeTargetVpnGatewaysGetRequest("amet", "nisi", "doloremque") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "dolore";
                alt = AltEnum.PROTO;
                callback = "atque";
                fields = "excepturi";
                key = "sint";
                oauthToken = "nulla";
                prettyPrint = false;
                quotaUser = "vel";
                uploadType = "qui";
                uploadProtocol = "dolorem";
                userIp = "nihil";
            }};            

            ComputeTargetVpnGatewaysGetResponse res = sdk.targetVpnGateways.computeTargetVpnGatewaysGet(req, new ComputeTargetVpnGatewaysGetSecurity() {{
                option1 = new ComputeTargetVpnGatewaysGetSecurityOption1("occaecati", "cumque") {{
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

            ComputeTargetVpnGatewaysInsertRequest req = new ComputeTargetVpnGatewaysInsertRequest("explicabo", "id") {{
                dollarXgafv = XgafvEnum.TWO;
                targetVpnGateway = new TargetVpnGateway() {{
                    creationTimestamp = "officia";
                    description = "eveniet";
                    forwardingRules = new String[]{{
                        add("et"),
                        add("ipsam"),
                    }};
                    id = "sint";
                    kind = "architecto";
                    labelFingerprint = "quis";
                    labels = new java.util.HashMap<String, String>() {{
                        put("molestiae", "a");
                    }};
                    name = "Wilbur Stoltenberg";
                    network = "dicta";
                    region = "sit";
                    selfLink = "alias";
                    status = TargetVpnGatewayStatusEnum.FAILED;
                    tunnels = new String[]{{
                        add("ut"),
                        add("optio"),
                    }};
                }};;
                accessToken = "est";
                alt = AltEnum.MEDIA;
                callback = "perspiciatis";
                fields = "sit";
                key = "beatae";
                oauthToken = "dolor";
                prettyPrint = false;
                quotaUser = "et";
                requestId = "error";
                uploadType = "sequi";
                uploadProtocol = "dolore";
                userIp = "incidunt";
            }};            

            ComputeTargetVpnGatewaysInsertResponse res = sdk.targetVpnGateways.computeTargetVpnGatewaysInsert(req, new ComputeTargetVpnGatewaysInsertSecurity() {{
                option1 = new ComputeTargetVpnGatewaysInsertSecurityOption1("dignissimos", "doloremque") {{
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

            ComputeTargetVpnGatewaysListRequest req = new ComputeTargetVpnGatewaysListRequest("eius", "rem") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "et";
                alt = AltEnum.PROTO;
                callback = "impedit";
                fields = "fugiat";
                filter = "repellendus";
                key = "adipisci";
                maxResults = 732150L;
                oauthToken = "neque";
                orderBy = "excepturi";
                pageToken = "totam";
                prettyPrint = false;
                quotaUser = "magni";
                returnPartialSuccess = false;
                uploadType = "eos";
                uploadProtocol = "pariatur";
                userIp = "culpa";
            }};            

            ComputeTargetVpnGatewaysListResponse res = sdk.targetVpnGateways.computeTargetVpnGatewaysList(req, new ComputeTargetVpnGatewaysListSecurity() {{
                option1 = new ComputeTargetVpnGatewaysListSecurityOption1("provident", "unde") {{
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

            ComputeTargetVpnGatewaysSetLabelsRequest req = new ComputeTargetVpnGatewaysSetLabelsRequest("cum", "rerum", "aliquid") {{
                dollarXgafv = XgafvEnum.TWO;
                regionSetLabelsRequest = new RegionSetLabelsRequest() {{
                    labelFingerprint = "rerum";
                    labels = new java.util.HashMap<String, String>() {{
                        put("voluptas", "nulla");
                        put("cupiditate", "labore");
                    }};
                }};;
                accessToken = "nemo";
                alt = AltEnum.JSON;
                callback = "aperiam";
                fields = "delectus";
                key = "minus";
                oauthToken = "nemo";
                prettyPrint = false;
                quotaUser = "suscipit";
                requestId = "amet";
                uploadType = "quam";
                uploadProtocol = "mollitia";
                userIp = "fugit";
            }};            

            ComputeTargetVpnGatewaysSetLabelsResponse res = sdk.targetVpnGateways.computeTargetVpnGatewaysSetLabels(req, new ComputeTargetVpnGatewaysSetLabelsSecurity() {{
                option1 = new ComputeTargetVpnGatewaysSetLabelsSecurityOption1("repudiandae", "omnis") {{
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
