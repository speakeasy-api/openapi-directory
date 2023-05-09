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

            ComputeExternalVpnGatewaysDeleteRequest req = new ComputeExternalVpnGatewaysDeleteRequest("ipsam", "nobis") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "labore";
                alt = AltEnum.MEDIA;
                callback = "ducimus";
                fields = "qui";
                key = "qui";
                oauthToken = "consectetur";
                prettyPrint = false;
                quotaUser = "ratione";
                requestId = "saepe";
                uploadType = "iure";
                uploadProtocol = "aliquid";
                userIp = "cum";
            }};            

            ComputeExternalVpnGatewaysDeleteResponse res = sdk.externalVpnGateways.computeExternalVpnGatewaysDelete(req, new ComputeExternalVpnGatewaysDeleteSecurity() {{
                option1 = new ComputeExternalVpnGatewaysDeleteSecurityOption1("fugiat", "rem") {{
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

            ComputeExternalVpnGatewaysGetRequest req = new ComputeExternalVpnGatewaysGetRequest("voluptatibus", "officiis") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "repellendus";
                alt = AltEnum.JSON;
                callback = "voluptatem";
                fields = "libero";
                key = "excepturi";
                oauthToken = "odio";
                prettyPrint = false;
                quotaUser = "omnis";
                uploadType = "officiis";
                uploadProtocol = "delectus";
                userIp = "magni";
            }};            

            ComputeExternalVpnGatewaysGetResponse res = sdk.externalVpnGateways.computeExternalVpnGatewaysGet(req, new ComputeExternalVpnGatewaysGetSecurity() {{
                option1 = new ComputeExternalVpnGatewaysGetSecurityOption1("sit", "velit") {{
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

            ComputeExternalVpnGatewaysInsertRequest req = new ComputeExternalVpnGatewaysInsertRequest("voluptatum") {{
                dollarXgafv = XgafvEnum.ONE;
                externalVpnGateway = new ExternalVpnGateway() {{
                    creationTimestamp = "neque";
                    description = "aspernatur";
                    id = "eaque";
                    interfaces = new org.openapis.openapi.models.shared.ExternalVpnGatewayInterface[]{{
                        add(new ExternalVpnGatewayInterface() {{
                            id = 587489L;
                            ipAddress = "aut";
                            ipv6Address = "impedit";
                        }}),
                        add(new ExternalVpnGatewayInterface() {{
                            id = 801781L;
                            ipAddress = "quo";
                            ipv6Address = "architecto";
                        }}),
                    }};
                    kind = "voluptatem";
                    labelFingerprint = "perspiciatis";
                    labels = new java.util.HashMap<String, String>() {{
                        put("eius", "aperiam");
                        put("voluptatem", "non");
                    }};
                    name = "Annie Price";
                    redundancyType = ExternalVpnGatewayRedundancyTypeEnum.SINGLE_IP_INTERNALLY_REDUNDANT;
                    selfLink = "eaque";
                }};;
                accessToken = "incidunt";
                alt = AltEnum.JSON;
                callback = "delectus";
                fields = "aliquid";
                key = "ullam";
                oauthToken = "maiores";
                prettyPrint = false;
                quotaUser = "debitis";
                requestId = "reprehenderit";
                uploadType = "eos";
                uploadProtocol = "assumenda";
                userIp = "cumque";
            }};            

            ComputeExternalVpnGatewaysInsertResponse res = sdk.externalVpnGateways.computeExternalVpnGatewaysInsert(req, new ComputeExternalVpnGatewaysInsertSecurity() {{
                option1 = new ComputeExternalVpnGatewaysInsertSecurityOption1("ut", "quae") {{
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

            ComputeExternalVpnGatewaysListRequest req = new ComputeExternalVpnGatewaysListRequest("nihil") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "assumenda";
                alt = AltEnum.JSON;
                callback = "cumque";
                fields = "placeat";
                filter = "adipisci";
                key = "tenetur";
                maxResults = 252717L;
                oauthToken = "accusantium";
                orderBy = "corrupti";
                pageToken = "itaque";
                prettyPrint = false;
                quotaUser = "earum";
                returnPartialSuccess = false;
                uploadType = "impedit";
                uploadProtocol = "dicta";
                userIp = "corporis";
            }};            

            ComputeExternalVpnGatewaysListResponse res = sdk.externalVpnGateways.computeExternalVpnGatewaysList(req, new ComputeExternalVpnGatewaysListSecurity() {{
                option1 = new ComputeExternalVpnGatewaysListSecurityOption1("impedit", "eveniet") {{
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

            ComputeExternalVpnGatewaysSetLabelsRequest req = new ComputeExternalVpnGatewaysSetLabelsRequest("cum", "dolore") {{
                dollarXgafv = XgafvEnum.TWO;
                globalSetLabelsRequest = new GlobalSetLabelsRequest() {{
                    labelFingerprint = "ea";
                    labels = new java.util.HashMap<String, String>() {{
                        put("quasi", "accusamus");
                        put("animi", "necessitatibus");
                        put("voluptatem", "maiores");
                        put("odio", "veniam");
                    }};
                }};;
                accessToken = "fuga";
                alt = AltEnum.PROTO;
                callback = "possimus";
                fields = "tenetur";
                key = "sed";
                oauthToken = "deserunt";
                prettyPrint = false;
                quotaUser = "eligendi";
                uploadType = "id";
                uploadProtocol = "distinctio";
                userIp = "corporis";
            }};            

            ComputeExternalVpnGatewaysSetLabelsResponse res = sdk.externalVpnGateways.computeExternalVpnGatewaysSetLabels(req, new ComputeExternalVpnGatewaysSetLabelsSecurity() {{
                option1 = new ComputeExternalVpnGatewaysSetLabelsSecurityOption1("quas", "soluta") {{
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

            ComputeExternalVpnGatewaysTestIamPermissionsRequest req = new ComputeExternalVpnGatewaysTestIamPermissionsRequest("cupiditate", "unde") {{
                dollarXgafv = XgafvEnum.ONE;
                testPermissionsRequest = new TestPermissionsRequest() {{
                    permissions = new String[]{{
                        add("unde"),
                        add("sed"),
                        add("suscipit"),
                        add("facere"),
                    }};
                }};;
                accessToken = "pariatur";
                alt = AltEnum.PROTO;
                callback = "quaerat";
                fields = "corrupti";
                key = "sint";
                oauthToken = "eius";
                prettyPrint = false;
                quotaUser = "vel";
                uploadType = "quasi";
                uploadProtocol = "vero";
                userIp = "odio";
            }};            

            ComputeExternalVpnGatewaysTestIamPermissionsResponse res = sdk.externalVpnGateways.computeExternalVpnGatewaysTestIamPermissions(req, new ComputeExternalVpnGatewaysTestIamPermissionsSecurity() {{
                option1 = new ComputeExternalVpnGatewaysTestIamPermissionsSecurityOption1("numquam", "fugit") {{
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
