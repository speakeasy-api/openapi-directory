# externalVpnGateways

### Available Operations

* [computeExternalVpnGatewaysDelete](#computeexternalvpngatewaysdelete) - Deletes the specified externalVpnGateway.
* [computeExternalVpnGatewaysGet](#computeexternalvpngatewaysget) - Returns the specified externalVpnGateway. Get a list of available externalVpnGateways by making a list() request.
* [computeExternalVpnGatewaysInsert](#computeexternalvpngatewaysinsert) - Creates a ExternalVpnGateway in the specified project using the data included in the request.
* [computeExternalVpnGatewaysList](#computeexternalvpngatewayslist) - Retrieves the list of ExternalVpnGateway available to the specified project.
* [computeExternalVpnGatewaysSetLabels](#computeexternalvpngatewayssetlabels) - Sets the labels on an ExternalVpnGateway. To learn more about labels, read the Labeling Resources documentation.
* [computeExternalVpnGatewaysTestIamPermissions](#computeexternalvpngatewaystestiampermissions) - Returns permissions that a caller has on the specified resource.

## computeExternalVpnGatewaysDelete

Deletes the specified externalVpnGateway.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeExternalVpnGatewaysDeleteRequest;
import org.openapis.openapi.models.operations.ComputeExternalVpnGatewaysDeleteResponse;
import org.openapis.openapi.models.operations.ComputeExternalVpnGatewaysDeleteSecurity;
import org.openapis.openapi.models.operations.ComputeExternalVpnGatewaysDeleteSecurityOption1;
import org.openapis.openapi.models.operations.ComputeExternalVpnGatewaysDeleteSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeExternalVpnGatewaysDeleteRequest req = new ComputeExternalVpnGatewaysDeleteRequest("eos", "aliquam") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "hic";
                alt = AltEnum.PROTO;
                callback = "asperiores";
                fields = "autem";
                key = "nesciunt";
                oauthToken = "cupiditate";
                prettyPrint = false;
                quotaUser = "animi";
                requestId = "provident";
                uploadType = "beatae";
                uploadProtocol = "ipsa";
                userIp = "mollitia";
            }};            

            ComputeExternalVpnGatewaysDeleteResponse res = sdk.externalVpnGateways.computeExternalVpnGatewaysDelete(req, new ComputeExternalVpnGatewaysDeleteSecurity() {{
                option1 = new ComputeExternalVpnGatewaysDeleteSecurityOption1("nam", "assumenda") {{
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

## computeExternalVpnGatewaysGet

Returns the specified externalVpnGateway. Get a list of available externalVpnGateways by making a list() request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeExternalVpnGatewaysGetRequest;
import org.openapis.openapi.models.operations.ComputeExternalVpnGatewaysGetResponse;
import org.openapis.openapi.models.operations.ComputeExternalVpnGatewaysGetSecurity;
import org.openapis.openapi.models.operations.ComputeExternalVpnGatewaysGetSecurityOption1;
import org.openapis.openapi.models.operations.ComputeExternalVpnGatewaysGetSecurityOption2;
import org.openapis.openapi.models.operations.ComputeExternalVpnGatewaysGetSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeExternalVpnGatewaysGetRequest req = new ComputeExternalVpnGatewaysGetRequest("quo", "fuga") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "commodi";
                alt = AltEnum.JSON;
                callback = "suscipit";
                fields = "voluptate";
                key = "nisi";
                oauthToken = "aliquid";
                prettyPrint = false;
                quotaUser = "provident";
                uploadType = "laboriosam";
                uploadProtocol = "accusamus";
                userIp = "ab";
            }};            

            ComputeExternalVpnGatewaysGetResponse res = sdk.externalVpnGateways.computeExternalVpnGatewaysGet(req, new ComputeExternalVpnGatewaysGetSecurity() {{
                option1 = new ComputeExternalVpnGatewaysGetSecurityOption1("itaque", "quisquam") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.externalVpnGateway != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeExternalVpnGatewaysInsert

Creates a ExternalVpnGateway in the specified project using the data included in the request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeExternalVpnGatewaysInsertRequest;
import org.openapis.openapi.models.operations.ComputeExternalVpnGatewaysInsertResponse;
import org.openapis.openapi.models.operations.ComputeExternalVpnGatewaysInsertSecurity;
import org.openapis.openapi.models.operations.ComputeExternalVpnGatewaysInsertSecurityOption1;
import org.openapis.openapi.models.operations.ComputeExternalVpnGatewaysInsertSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ExternalVpnGateway;
import org.openapis.openapi.models.shared.ExternalVpnGatewayInterface;
import org.openapis.openapi.models.shared.ExternalVpnGatewayRedundancyTypeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeExternalVpnGatewaysInsertRequest req = new ComputeExternalVpnGatewaysInsertRequest("eaque") {{
                dollarXgafv = XgafvEnum.ONE;
                externalVpnGateway = new ExternalVpnGateway() {{
                    creationTimestamp = "qui";
                    description = "consequuntur";
                    id = "vitae";
                    interfaces = new org.openapis.openapi.models.shared.ExternalVpnGatewayInterface[]{{
                        add(new ExternalVpnGatewayInterface() {{
                            id = 193334L;
                            ipAddress = "amet";
                            ipv6Address = "exercitationem";
                        }}),
                        add(new ExternalVpnGatewayInterface() {{
                            id = 847018L;
                            ipAddress = "praesentium";
                            ipv6Address = "unde";
                        }}),
                        add(new ExternalVpnGatewayInterface() {{
                            id = 629461L;
                            ipAddress = "eligendi";
                            ipv6Address = "tempore";
                        }}),
                    }};
                    kind = "amet";
                    labelFingerprint = "debitis";
                    labels = new java.util.HashMap<String, String>() {{
                        put("asperiores", "temporibus");
                        put("id", "atque");
                        put("quibusdam", "sit");
                        put("quo", "veniam");
                    }};
                    name = "Ramona Terry I";
                    redundancyType = ExternalVpnGatewayRedundancyTypeEnum.FOUR_IPS_REDUNDANCY;
                    selfLink = "doloremque";
                }};;
                accessToken = "tempora";
                alt = AltEnum.MEDIA;
                callback = "quam";
                fields = "atque";
                key = "officia";
                oauthToken = "ex";
                prettyPrint = false;
                quotaUser = "architecto";
                requestId = "a";
                uploadType = "laborum";
                uploadProtocol = "veritatis";
                userIp = "quod";
            }};            

            ComputeExternalVpnGatewaysInsertResponse res = sdk.externalVpnGateways.computeExternalVpnGatewaysInsert(req, new ComputeExternalVpnGatewaysInsertSecurity() {{
                option1 = new ComputeExternalVpnGatewaysInsertSecurityOption1("a", "qui") {{
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

## computeExternalVpnGatewaysList

Retrieves the list of ExternalVpnGateway available to the specified project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeExternalVpnGatewaysListRequest;
import org.openapis.openapi.models.operations.ComputeExternalVpnGatewaysListResponse;
import org.openapis.openapi.models.operations.ComputeExternalVpnGatewaysListSecurity;
import org.openapis.openapi.models.operations.ComputeExternalVpnGatewaysListSecurityOption1;
import org.openapis.openapi.models.operations.ComputeExternalVpnGatewaysListSecurityOption2;
import org.openapis.openapi.models.operations.ComputeExternalVpnGatewaysListSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeExternalVpnGatewaysListRequest req = new ComputeExternalVpnGatewaysListRequest("accusantium") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "atque";
                alt = AltEnum.MEDIA;
                callback = "tenetur";
                fields = "voluptate";
                filter = "quam";
                key = "quod";
                maxResults = 110247L;
                oauthToken = "sapiente";
                orderBy = "reiciendis";
                pageToken = "quod";
                prettyPrint = false;
                quotaUser = "voluptate";
                returnPartialSuccess = false;
                uploadType = "inventore";
                uploadProtocol = "facere";
                userIp = "maxime";
            }};            

            ComputeExternalVpnGatewaysListResponse res = sdk.externalVpnGateways.computeExternalVpnGatewaysList(req, new ComputeExternalVpnGatewaysListSecurity() {{
                option1 = new ComputeExternalVpnGatewaysListSecurityOption1("fuga", "ab") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.externalVpnGatewayList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeExternalVpnGatewaysSetLabels

Sets the labels on an ExternalVpnGateway. To learn more about labels, read the Labeling Resources documentation.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeExternalVpnGatewaysSetLabelsRequest;
import org.openapis.openapi.models.operations.ComputeExternalVpnGatewaysSetLabelsResponse;
import org.openapis.openapi.models.operations.ComputeExternalVpnGatewaysSetLabelsSecurity;
import org.openapis.openapi.models.operations.ComputeExternalVpnGatewaysSetLabelsSecurityOption1;
import org.openapis.openapi.models.operations.ComputeExternalVpnGatewaysSetLabelsSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GlobalSetLabelsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeExternalVpnGatewaysSetLabelsRequest req = new ComputeExternalVpnGatewaysSetLabelsRequest("ex", "consectetur") {{
                dollarXgafv = XgafvEnum.TWO;
                globalSetLabelsRequest = new GlobalSetLabelsRequest() {{
                    labelFingerprint = "sed";
                    labels = new java.util.HashMap<String, String>() {{
                        put("sequi", "eligendi");
                        put("voluptatum", "perferendis");
                        put("laborum", "omnis");
                    }};
                }};;
                accessToken = "nihil";
                alt = AltEnum.PROTO;
                callback = "sapiente";
                fields = "velit";
                key = "adipisci";
                oauthToken = "non";
                prettyPrint = false;
                quotaUser = "optio";
                uploadType = "illum";
                uploadProtocol = "at";
                userIp = "tenetur";
            }};            

            ComputeExternalVpnGatewaysSetLabelsResponse res = sdk.externalVpnGateways.computeExternalVpnGatewaysSetLabels(req, new ComputeExternalVpnGatewaysSetLabelsSecurity() {{
                option1 = new ComputeExternalVpnGatewaysSetLabelsSecurityOption1("molestias", "ipsam") {{
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

## computeExternalVpnGatewaysTestIamPermissions

Returns permissions that a caller has on the specified resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeExternalVpnGatewaysTestIamPermissionsRequest;
import org.openapis.openapi.models.operations.ComputeExternalVpnGatewaysTestIamPermissionsResponse;
import org.openapis.openapi.models.operations.ComputeExternalVpnGatewaysTestIamPermissionsSecurity;
import org.openapis.openapi.models.operations.ComputeExternalVpnGatewaysTestIamPermissionsSecurityOption1;
import org.openapis.openapi.models.operations.ComputeExternalVpnGatewaysTestIamPermissionsSecurityOption2;
import org.openapis.openapi.models.operations.ComputeExternalVpnGatewaysTestIamPermissionsSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.TestPermissionsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeExternalVpnGatewaysTestIamPermissionsRequest req = new ComputeExternalVpnGatewaysTestIamPermissionsRequest("esse", "laborum") {{
                dollarXgafv = XgafvEnum.TWO;
                testPermissionsRequest = new TestPermissionsRequest() {{
                    permissions = new String[]{{
                        add("eum"),
                        add("quasi"),
                        add("quas"),
                        add("odio"),
                    }};
                }};;
                accessToken = "commodi";
                alt = AltEnum.PROTO;
                callback = "aliquid";
                fields = "mollitia";
                key = "quidem";
                oauthToken = "explicabo";
                prettyPrint = false;
                quotaUser = "et";
                uploadType = "nulla";
                uploadProtocol = "magni";
                userIp = "natus";
            }};            

            ComputeExternalVpnGatewaysTestIamPermissionsResponse res = sdk.externalVpnGateways.computeExternalVpnGatewaysTestIamPermissions(req, new ComputeExternalVpnGatewaysTestIamPermissionsSecurity() {{
                option1 = new ComputeExternalVpnGatewaysTestIamPermissionsSecurityOption1("illum", "a") {{
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
