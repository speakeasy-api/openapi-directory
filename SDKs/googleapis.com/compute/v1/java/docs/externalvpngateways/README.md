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

            ComputeExternalVpnGatewaysDeleteRequest req = new ComputeExternalVpnGatewaysDeleteRequest("iste", "illo") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "quos";
                alt = AltEnum.PROTO;
                callback = "sint";
                fields = "iusto";
                key = "enim";
                oauthToken = "accusamus";
                prettyPrint = false;
                quotaUser = "aperiam";
                requestId = "voluptates";
                uploadType = "laudantium";
                uploadProtocol = "tempora";
                userIp = "quae";
            }};            

            ComputeExternalVpnGatewaysDeleteResponse res = sdk.externalVpnGateways.computeExternalVpnGatewaysDelete(req, new ComputeExternalVpnGatewaysDeleteSecurity() {{
                option1 = new ComputeExternalVpnGatewaysDeleteSecurityOption1("omnis", "illum") {{
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

            ComputeExternalVpnGatewaysGetRequest req = new ComputeExternalVpnGatewaysGetRequest("rem", "tenetur") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "modi";
                alt = AltEnum.PROTO;
                callback = "architecto";
                fields = "aliquam";
                key = "labore";
                oauthToken = "maiores";
                prettyPrint = false;
                quotaUser = "sequi";
                uploadType = "saepe";
                uploadProtocol = "consequatur";
                userIp = "esse";
            }};            

            ComputeExternalVpnGatewaysGetResponse res = sdk.externalVpnGateways.computeExternalVpnGatewaysGet(req, new ComputeExternalVpnGatewaysGetSecurity() {{
                option1 = new ComputeExternalVpnGatewaysGetSecurityOption1("debitis", "facere") {{
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

            ComputeExternalVpnGatewaysInsertRequest req = new ComputeExternalVpnGatewaysInsertRequest("quisquam") {{
                dollarXgafv = XgafvEnum.TWO;
                externalVpnGateway = new ExternalVpnGateway() {{
                    creationTimestamp = "aliquam";
                    description = "dolorum";
                    id = "deserunt";
                    interfaces = new org.openapis.openapi.models.shared.ExternalVpnGatewayInterface[]{{
                        add(new ExternalVpnGatewayInterface() {{
                            id = 970411L;
                            ipAddress = "sequi";
                        }}),
                        add(new ExternalVpnGatewayInterface() {{
                            id = 785555L;
                            ipAddress = "laborum";
                        }}),
                    }};
                    kind = "nobis";
                    labelFingerprint = "quibusdam";
                    labels = new java.util.HashMap<String, String>() {{
                        put("aut", "ipsam");
                        put("officia", "cupiditate");
                        put("reprehenderit", "quia");
                    }};
                    name = "Edward Hand";
                    redundancyType = ExternalVpnGatewayRedundancyTypeEnum.FOUR_IPS_REDUNDANCY;
                    selfLink = "laudantium";
                }};;
                accessToken = "sed";
                alt = AltEnum.JSON;
                callback = "iusto";
                fields = "expedita";
                key = "eos";
                oauthToken = "repellendus";
                prettyPrint = false;
                quotaUser = "nesciunt";
                requestId = "ipsa";
                uploadType = "sint";
                uploadProtocol = "dolore";
                userIp = "esse";
            }};            

            ComputeExternalVpnGatewaysInsertResponse res = sdk.externalVpnGateways.computeExternalVpnGatewaysInsert(req, new ComputeExternalVpnGatewaysInsertSecurity() {{
                option1 = new ComputeExternalVpnGatewaysInsertSecurityOption1("accusantium", "distinctio") {{
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

            ComputeExternalVpnGatewaysListRequest req = new ComputeExternalVpnGatewaysListRequest("sapiente") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "est";
                alt = AltEnum.JSON;
                callback = "delectus";
                fields = "culpa";
                filter = "voluptatum";
                key = "iusto";
                maxResults = 802069L;
                oauthToken = "voluptatibus";
                orderBy = "voluptas";
                pageToken = "non";
                prettyPrint = false;
                quotaUser = "ullam";
                returnPartialSuccess = false;
                uploadType = "laborum";
                uploadProtocol = "voluptas";
                userIp = "doloribus";
            }};            

            ComputeExternalVpnGatewaysListResponse res = sdk.externalVpnGateways.computeExternalVpnGatewaysList(req, new ComputeExternalVpnGatewaysListSecurity() {{
                option1 = new ComputeExternalVpnGatewaysListSecurityOption1("animi", "recusandae") {{
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

            ComputeExternalVpnGatewaysSetLabelsRequest req = new ComputeExternalVpnGatewaysSetLabelsRequest("corporis", "non") {{
                dollarXgafv = XgafvEnum.TWO;
                globalSetLabelsRequest = new GlobalSetLabelsRequest() {{
                    labelFingerprint = "distinctio";
                    labels = new java.util.HashMap<String, String>() {{
                        put("laboriosam", "voluptatem");
                        put("optio", "sequi");
                        put("sunt", "vitae");
                        put("voluptatibus", "doloremque");
                    }};
                }};;
                accessToken = "sed";
                alt = AltEnum.JSON;
                callback = "rerum";
                fields = "in";
                key = "nostrum";
                oauthToken = "temporibus";
                prettyPrint = false;
                quotaUser = "ratione";
                uploadType = "dolor";
                uploadProtocol = "nisi";
                userIp = "dignissimos";
            }};            

            ComputeExternalVpnGatewaysSetLabelsResponse res = sdk.externalVpnGateways.computeExternalVpnGatewaysSetLabels(req, new ComputeExternalVpnGatewaysSetLabelsSecurity() {{
                option1 = new ComputeExternalVpnGatewaysSetLabelsSecurityOption1("reiciendis", "itaque") {{
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

            ComputeExternalVpnGatewaysTestIamPermissionsRequest req = new ComputeExternalVpnGatewaysTestIamPermissionsRequest("vitae", "est") {{
                dollarXgafv = XgafvEnum.ONE;
                testPermissionsRequest = new TestPermissionsRequest() {{
                    permissions = new String[]{{
                        add("minus"),
                        add("quos"),
                        add("possimus"),
                        add("maiores"),
                    }};
                }};;
                accessToken = "odio";
                alt = AltEnum.MEDIA;
                callback = "sapiente";
                fields = "aperiam";
                key = "similique";
                oauthToken = "nesciunt";
                prettyPrint = false;
                quotaUser = "provident";
                uploadType = "ex";
                uploadProtocol = "repellendus";
                userIp = "unde";
            }};            

            ComputeExternalVpnGatewaysTestIamPermissionsResponse res = sdk.externalVpnGateways.computeExternalVpnGatewaysTestIamPermissions(req, new ComputeExternalVpnGatewaysTestIamPermissionsSecurity() {{
                option1 = new ComputeExternalVpnGatewaysTestIamPermissionsSecurityOption1("alias", "impedit") {{
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
