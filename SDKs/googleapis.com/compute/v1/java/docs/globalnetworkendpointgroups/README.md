# globalNetworkEndpointGroups

### Available Operations

* [computeGlobalNetworkEndpointGroupsAttachNetworkEndpoints](#computeglobalnetworkendpointgroupsattachnetworkendpoints) - Attach a network endpoint to the specified network endpoint group.
* [computeGlobalNetworkEndpointGroupsDelete](#computeglobalnetworkendpointgroupsdelete) - Deletes the specified network endpoint group.Note that the NEG cannot be deleted if there are backend services referencing it.
* [computeGlobalNetworkEndpointGroupsDetachNetworkEndpoints](#computeglobalnetworkendpointgroupsdetachnetworkendpoints) - Detach the network endpoint from the specified network endpoint group.
* [computeGlobalNetworkEndpointGroupsGet](#computeglobalnetworkendpointgroupsget) - Returns the specified network endpoint group.
* [computeGlobalNetworkEndpointGroupsInsert](#computeglobalnetworkendpointgroupsinsert) - Creates a network endpoint group in the specified project using the parameters that are included in the request.
* [computeGlobalNetworkEndpointGroupsList](#computeglobalnetworkendpointgroupslist) - Retrieves the list of network endpoint groups that are located in the specified project.
* [computeGlobalNetworkEndpointGroupsListNetworkEndpoints](#computeglobalnetworkendpointgroupslistnetworkendpoints) - Lists the network endpoints in the specified network endpoint group.

## computeGlobalNetworkEndpointGroupsAttachNetworkEndpoints

Attach a network endpoint to the specified network endpoint group.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeGlobalNetworkEndpointGroupsAttachNetworkEndpointsRequest;
import org.openapis.openapi.models.operations.ComputeGlobalNetworkEndpointGroupsAttachNetworkEndpointsResponse;
import org.openapis.openapi.models.operations.ComputeGlobalNetworkEndpointGroupsAttachNetworkEndpointsSecurity;
import org.openapis.openapi.models.operations.ComputeGlobalNetworkEndpointGroupsAttachNetworkEndpointsSecurityOption1;
import org.openapis.openapi.models.operations.ComputeGlobalNetworkEndpointGroupsAttachNetworkEndpointsSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GlobalNetworkEndpointGroupsAttachEndpointsRequest;
import org.openapis.openapi.models.shared.NetworkEndpoint;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeGlobalNetworkEndpointGroupsAttachNetworkEndpointsRequest req = new ComputeGlobalNetworkEndpointGroupsAttachNetworkEndpointsRequest("nesciunt", "earum") {{
                dollarXgafv = XgafvEnum.ONE;
                globalNetworkEndpointGroupsAttachEndpointsRequest = new GlobalNetworkEndpointGroupsAttachEndpointsRequest() {{
                    networkEndpoints = new org.openapis.openapi.models.shared.NetworkEndpoint[]{{
                        add(new NetworkEndpoint() {{
                            annotations = new java.util.HashMap<String, String>() {{
                                put("quos", "sed");
                                put("eaque", "natus");
                                put("ratione", "nihil");
                                put("unde", "deserunt");
                            }};
                            fqdn = "id";
                            instance = "ex";
                            ipAddress = "occaecati";
                            port = 759822;
                        }}),
                    }};
                }};;
                accessToken = "at";
                alt = AltEnum.JSON;
                callback = "asperiores";
                fields = "nam";
                key = "cumque";
                oauthToken = "sapiente";
                prettyPrint = false;
                quotaUser = "quam";
                requestId = "occaecati";
                uploadType = "repellendus";
                uploadProtocol = "culpa";
                userIp = "dicta";
            }};            

            ComputeGlobalNetworkEndpointGroupsAttachNetworkEndpointsResponse res = sdk.globalNetworkEndpointGroups.computeGlobalNetworkEndpointGroupsAttachNetworkEndpoints(req, new ComputeGlobalNetworkEndpointGroupsAttachNetworkEndpointsSecurity() {{
                option1 = new ComputeGlobalNetworkEndpointGroupsAttachNetworkEndpointsSecurityOption1("rem", "fuga") {{
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

## computeGlobalNetworkEndpointGroupsDelete

Deletes the specified network endpoint group.Note that the NEG cannot be deleted if there are backend services referencing it.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeGlobalNetworkEndpointGroupsDeleteRequest;
import org.openapis.openapi.models.operations.ComputeGlobalNetworkEndpointGroupsDeleteResponse;
import org.openapis.openapi.models.operations.ComputeGlobalNetworkEndpointGroupsDeleteSecurity;
import org.openapis.openapi.models.operations.ComputeGlobalNetworkEndpointGroupsDeleteSecurityOption1;
import org.openapis.openapi.models.operations.ComputeGlobalNetworkEndpointGroupsDeleteSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeGlobalNetworkEndpointGroupsDeleteRequest req = new ComputeGlobalNetworkEndpointGroupsDeleteRequest("odio", "totam") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "eos";
                alt = AltEnum.PROTO;
                callback = "voluptatibus";
                fields = "omnis";
                key = "quis";
                oauthToken = "quos";
                prettyPrint = false;
                quotaUser = "natus";
                requestId = "aliquam";
                uploadType = "vero";
                uploadProtocol = "nisi";
                userIp = "praesentium";
            }};            

            ComputeGlobalNetworkEndpointGroupsDeleteResponse res = sdk.globalNetworkEndpointGroups.computeGlobalNetworkEndpointGroupsDelete(req, new ComputeGlobalNetworkEndpointGroupsDeleteSecurity() {{
                option1 = new ComputeGlobalNetworkEndpointGroupsDeleteSecurityOption1("eum", "vitae") {{
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

## computeGlobalNetworkEndpointGroupsDetachNetworkEndpoints

Detach the network endpoint from the specified network endpoint group.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeGlobalNetworkEndpointGroupsDetachNetworkEndpointsRequest;
import org.openapis.openapi.models.operations.ComputeGlobalNetworkEndpointGroupsDetachNetworkEndpointsResponse;
import org.openapis.openapi.models.operations.ComputeGlobalNetworkEndpointGroupsDetachNetworkEndpointsSecurity;
import org.openapis.openapi.models.operations.ComputeGlobalNetworkEndpointGroupsDetachNetworkEndpointsSecurityOption1;
import org.openapis.openapi.models.operations.ComputeGlobalNetworkEndpointGroupsDetachNetworkEndpointsSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GlobalNetworkEndpointGroupsDetachEndpointsRequest;
import org.openapis.openapi.models.shared.NetworkEndpoint;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeGlobalNetworkEndpointGroupsDetachNetworkEndpointsRequest req = new ComputeGlobalNetworkEndpointGroupsDetachNetworkEndpointsRequest("animi", "possimus") {{
                dollarXgafv = XgafvEnum.TWO;
                globalNetworkEndpointGroupsDetachEndpointsRequest = new GlobalNetworkEndpointGroupsDetachEndpointsRequest() {{
                    networkEndpoints = new org.openapis.openapi.models.shared.NetworkEndpoint[]{{
                        add(new NetworkEndpoint() {{
                            annotations = new java.util.HashMap<String, String>() {{
                                put("maiores", "iste");
                                put("accusamus", "ipsam");
                            }};
                            fqdn = "fugiat";
                            instance = "odio";
                            ipAddress = "ullam";
                            port = 81917;
                        }}),
                        add(new NetworkEndpoint() {{
                            annotations = new java.util.HashMap<String, String>() {{
                                put("occaecati", "doloribus");
                                put("necessitatibus", "rem");
                                put("a", "nihil");
                                put("veniam", "aut");
                            }};
                            fqdn = "magni";
                            instance = "rerum";
                            ipAddress = "voluptatibus";
                            port = 858478;
                        }}),
                    }};
                }};;
                accessToken = "quod";
                alt = AltEnum.JSON;
                callback = "dolore";
                fields = "enim";
                key = "alias";
                oauthToken = "blanditiis";
                prettyPrint = false;
                quotaUser = "modi";
                requestId = "illo";
                uploadType = "a";
                uploadProtocol = "et";
                userIp = "molestiae";
            }};            

            ComputeGlobalNetworkEndpointGroupsDetachNetworkEndpointsResponse res = sdk.globalNetworkEndpointGroups.computeGlobalNetworkEndpointGroupsDetachNetworkEndpoints(req, new ComputeGlobalNetworkEndpointGroupsDetachNetworkEndpointsSecurity() {{
                option1 = new ComputeGlobalNetworkEndpointGroupsDetachNetworkEndpointsSecurityOption1("autem", "dolore") {{
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

## computeGlobalNetworkEndpointGroupsGet

Returns the specified network endpoint group.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeGlobalNetworkEndpointGroupsGetRequest;
import org.openapis.openapi.models.operations.ComputeGlobalNetworkEndpointGroupsGetResponse;
import org.openapis.openapi.models.operations.ComputeGlobalNetworkEndpointGroupsGetSecurity;
import org.openapis.openapi.models.operations.ComputeGlobalNetworkEndpointGroupsGetSecurityOption1;
import org.openapis.openapi.models.operations.ComputeGlobalNetworkEndpointGroupsGetSecurityOption2;
import org.openapis.openapi.models.operations.ComputeGlobalNetworkEndpointGroupsGetSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeGlobalNetworkEndpointGroupsGetRequest req = new ComputeGlobalNetworkEndpointGroupsGetRequest("eius", "nostrum") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "amet";
                alt = AltEnum.MEDIA;
                callback = "molestias";
                fields = "voluptatibus";
                key = "ipsum";
                oauthToken = "hic";
                prettyPrint = false;
                quotaUser = "quidem";
                uploadType = "odit";
                uploadProtocol = "molestiae";
                userIp = "accusamus";
            }};            

            ComputeGlobalNetworkEndpointGroupsGetResponse res = sdk.globalNetworkEndpointGroups.computeGlobalNetworkEndpointGroupsGet(req, new ComputeGlobalNetworkEndpointGroupsGetSecurity() {{
                option1 = new ComputeGlobalNetworkEndpointGroupsGetSecurityOption1("quia", "inventore") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.networkEndpointGroup != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeGlobalNetworkEndpointGroupsInsert

Creates a network endpoint group in the specified project using the parameters that are included in the request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeGlobalNetworkEndpointGroupsInsertRequest;
import org.openapis.openapi.models.operations.ComputeGlobalNetworkEndpointGroupsInsertResponse;
import org.openapis.openapi.models.operations.ComputeGlobalNetworkEndpointGroupsInsertSecurity;
import org.openapis.openapi.models.operations.ComputeGlobalNetworkEndpointGroupsInsertSecurityOption1;
import org.openapis.openapi.models.operations.ComputeGlobalNetworkEndpointGroupsInsertSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.NetworkEndpointGroup;
import org.openapis.openapi.models.shared.NetworkEndpointGroupAppEngine;
import org.openapis.openapi.models.shared.NetworkEndpointGroupCloudFunction;
import org.openapis.openapi.models.shared.NetworkEndpointGroupCloudRun;
import org.openapis.openapi.models.shared.NetworkEndpointGroupNetworkEndpointTypeEnum;
import org.openapis.openapi.models.shared.NetworkEndpointGroupPscData;
import org.openapis.openapi.models.shared.NetworkEndpointGroupPscDataPscConnectionStatusEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeGlobalNetworkEndpointGroupsInsertRequest req = new ComputeGlobalNetworkEndpointGroupsInsertRequest("doloribus") {{
                dollarXgafv = XgafvEnum.TWO;
                networkEndpointGroup = new NetworkEndpointGroup() {{
                    annotations = new java.util.HashMap<String, String>() {{
                        put("consequuntur", "laboriosam");
                        put("nemo", "reprehenderit");
                    }};
                    appEngine = new NetworkEndpointGroupAppEngine() {{
                        service = "soluta";
                        urlMask = "ipsum";
                        version = "vel";
                    }};;
                    cloudFunction = new NetworkEndpointGroupCloudFunction() {{
                        function = "delectus";
                        urlMask = "maxime";
                    }};;
                    cloudRun = new NetworkEndpointGroupCloudRun() {{
                        service = "vel";
                        tag = "distinctio";
                        urlMask = "cupiditate";
                    }};;
                    creationTimestamp = "hic";
                    defaultPort = 339221;
                    description = "deleniti";
                    id = "iusto";
                    kind = "quod";
                    name = "Leon Cummings";
                    network = "aliquid";
                    networkEndpointType = NetworkEndpointGroupNetworkEndpointTypeEnum.INTERNET_IP_PORT;
                    pscData = new NetworkEndpointGroupPscData() {{
                        consumerPscAddress = "ea";
                        pscConnectionId = "numquam";
                        pscConnectionStatus = NetworkEndpointGroupPscDataPscConnectionStatusEnum.ACCEPTED;
                    }};;
                    pscTargetService = "fuga";
                    region = "totam";
                    selfLink = "velit";
                    size = 96803;
                    subnetwork = "sed";
                    zone = "officiis";
                }};;
                accessToken = "veniam";
                alt = AltEnum.JSON;
                callback = "dolore";
                fields = "in";
                key = "libero";
                oauthToken = "ut";
                prettyPrint = false;
                quotaUser = "cumque";
                requestId = "quia";
                uploadType = "beatae";
                uploadProtocol = "porro";
                userIp = "cumque";
            }};            

            ComputeGlobalNetworkEndpointGroupsInsertResponse res = sdk.globalNetworkEndpointGroups.computeGlobalNetworkEndpointGroupsInsert(req, new ComputeGlobalNetworkEndpointGroupsInsertSecurity() {{
                option1 = new ComputeGlobalNetworkEndpointGroupsInsertSecurityOption1("distinctio", "numquam") {{
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

## computeGlobalNetworkEndpointGroupsList

Retrieves the list of network endpoint groups that are located in the specified project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeGlobalNetworkEndpointGroupsListRequest;
import org.openapis.openapi.models.operations.ComputeGlobalNetworkEndpointGroupsListResponse;
import org.openapis.openapi.models.operations.ComputeGlobalNetworkEndpointGroupsListSecurity;
import org.openapis.openapi.models.operations.ComputeGlobalNetworkEndpointGroupsListSecurityOption1;
import org.openapis.openapi.models.operations.ComputeGlobalNetworkEndpointGroupsListSecurityOption2;
import org.openapis.openapi.models.operations.ComputeGlobalNetworkEndpointGroupsListSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeGlobalNetworkEndpointGroupsListRequest req = new ComputeGlobalNetworkEndpointGroupsListRequest("fugit") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "culpa";
                alt = AltEnum.PROTO;
                callback = "minus";
                fields = "vero";
                filter = "impedit";
                key = "omnis";
                maxResults = 92279L;
                oauthToken = "earum";
                orderBy = "fuga";
                pageToken = "est";
                prettyPrint = false;
                quotaUser = "distinctio";
                returnPartialSuccess = false;
                uploadType = "fugiat";
                uploadProtocol = "nulla";
                userIp = "totam";
            }};            

            ComputeGlobalNetworkEndpointGroupsListResponse res = sdk.globalNetworkEndpointGroups.computeGlobalNetworkEndpointGroupsList(req, new ComputeGlobalNetworkEndpointGroupsListSecurity() {{
                option1 = new ComputeGlobalNetworkEndpointGroupsListSecurityOption1("praesentium", "officiis") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.networkEndpointGroupList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeGlobalNetworkEndpointGroupsListNetworkEndpoints

Lists the network endpoints in the specified network endpoint group.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeGlobalNetworkEndpointGroupsListNetworkEndpointsRequest;
import org.openapis.openapi.models.operations.ComputeGlobalNetworkEndpointGroupsListNetworkEndpointsResponse;
import org.openapis.openapi.models.operations.ComputeGlobalNetworkEndpointGroupsListNetworkEndpointsSecurity;
import org.openapis.openapi.models.operations.ComputeGlobalNetworkEndpointGroupsListNetworkEndpointsSecurityOption1;
import org.openapis.openapi.models.operations.ComputeGlobalNetworkEndpointGroupsListNetworkEndpointsSecurityOption2;
import org.openapis.openapi.models.operations.ComputeGlobalNetworkEndpointGroupsListNetworkEndpointsSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeGlobalNetworkEndpointGroupsListNetworkEndpointsRequest req = new ComputeGlobalNetworkEndpointGroupsListNetworkEndpointsRequest("esse", "vitae") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "laboriosam";
                alt = AltEnum.PROTO;
                callback = "labore";
                fields = "quas";
                filter = "sed";
                key = "veniam";
                maxResults = 149414L;
                oauthToken = "quibusdam";
                orderBy = "reprehenderit";
                pageToken = "voluptate";
                prettyPrint = false;
                quotaUser = "reprehenderit";
                returnPartialSuccess = false;
                uploadType = "et";
                uploadProtocol = "eveniet";
                userIp = "voluptate";
            }};            

            ComputeGlobalNetworkEndpointGroupsListNetworkEndpointsResponse res = sdk.globalNetworkEndpointGroups.computeGlobalNetworkEndpointGroupsListNetworkEndpoints(req, new ComputeGlobalNetworkEndpointGroupsListNetworkEndpointsSecurity() {{
                option1 = new ComputeGlobalNetworkEndpointGroupsListNetworkEndpointsSecurityOption1("hic", "at") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.networkEndpointGroupsListNetworkEndpoints != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
