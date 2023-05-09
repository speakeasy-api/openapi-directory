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

            ComputeGlobalNetworkEndpointGroupsAttachNetworkEndpointsRequest req = new ComputeGlobalNetworkEndpointGroupsAttachNetworkEndpointsRequest("aspernatur", "sapiente") {{
                dollarXgafv = XgafvEnum.ONE;
                globalNetworkEndpointGroupsAttachEndpointsRequest = new GlobalNetworkEndpointGroupsAttachEndpointsRequest() {{
                    networkEndpoints = new org.openapis.openapi.models.shared.NetworkEndpoint[]{{
                        add(new NetworkEndpoint() {{
                            annotations = new java.util.HashMap<String, String>() {{
                                put("quidem", "iusto");
                                put("culpa", "reiciendis");
                                put("a", "consequatur");
                            }};
                            fqdn = "voluptates";
                            instance = "dolorum";
                            ipAddress = "fugit";
                            port = 178085;
                        }}),
                        add(new NetworkEndpoint() {{
                            annotations = new java.util.HashMap<String, String>() {{
                                put("vel", "placeat");
                            }};
                            fqdn = "libero";
                            instance = "saepe";
                            ipAddress = "ipsa";
                            port = 492974;
                        }}),
                    }};
                }};;
                accessToken = "veritatis";
                alt = AltEnum.PROTO;
                callback = "cumque";
                fields = "ab";
                key = "ex";
                oauthToken = "dolor";
                prettyPrint = false;
                quotaUser = "officiis";
                requestId = "sed";
                uploadType = "quam";
                uploadProtocol = "unde";
                userIp = "harum";
            }};            

            ComputeGlobalNetworkEndpointGroupsAttachNetworkEndpointsResponse res = sdk.globalNetworkEndpointGroups.computeGlobalNetworkEndpointGroupsAttachNetworkEndpoints(req, new ComputeGlobalNetworkEndpointGroupsAttachNetworkEndpointsSecurity() {{
                option1 = new ComputeGlobalNetworkEndpointGroupsAttachNetworkEndpointsSecurityOption1("sequi", "libero") {{
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

            ComputeGlobalNetworkEndpointGroupsDeleteRequest req = new ComputeGlobalNetworkEndpointGroupsDeleteRequest("ipsa", "blanditiis") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "vero";
                alt = AltEnum.PROTO;
                callback = "omnis";
                fields = "occaecati";
                key = "consequuntur";
                oauthToken = "veniam";
                prettyPrint = false;
                quotaUser = "quam";
                requestId = "repellendus";
                uploadType = "eaque";
                uploadProtocol = "incidunt";
                userIp = "asperiores";
            }};            

            ComputeGlobalNetworkEndpointGroupsDeleteResponse res = sdk.globalNetworkEndpointGroups.computeGlobalNetworkEndpointGroupsDelete(req, new ComputeGlobalNetworkEndpointGroupsDeleteSecurity() {{
                option1 = new ComputeGlobalNetworkEndpointGroupsDeleteSecurityOption1("eius", "ipsa") {{
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

            ComputeGlobalNetworkEndpointGroupsDetachNetworkEndpointsRequest req = new ComputeGlobalNetworkEndpointGroupsDetachNetworkEndpointsRequest("quas", "incidunt") {{
                dollarXgafv = XgafvEnum.ONE;
                globalNetworkEndpointGroupsDetachEndpointsRequest = new GlobalNetworkEndpointGroupsDetachEndpointsRequest() {{
                    networkEndpoints = new org.openapis.openapi.models.shared.NetworkEndpoint[]{{
                        add(new NetworkEndpoint() {{
                            annotations = new java.util.HashMap<String, String>() {{
                                put("numquam", "quia");
                                put("repellendus", "blanditiis");
                            }};
                            fqdn = "ut";
                            instance = "eius";
                            ipAddress = "cupiditate";
                            port = 392180;
                        }}),
                        add(new NetworkEndpoint() {{
                            annotations = new java.util.HashMap<String, String>() {{
                                put("tempore", "facere");
                                put("earum", "debitis");
                                put("impedit", "reiciendis");
                                put("ex", "tempore");
                            }};
                            fqdn = "provident";
                            instance = "provident";
                            ipAddress = "soluta";
                            port = 803800;
                        }}),
                        add(new NetworkEndpoint() {{
                            annotations = new java.util.HashMap<String, String>() {{
                                put("consectetur", "corporis");
                                put("nisi", "aspernatur");
                            }};
                            fqdn = "eveniet";
                            instance = "tempore";
                            ipAddress = "asperiores";
                            port = 838509;
                        }}),
                    }};
                }};;
                accessToken = "delectus";
                alt = AltEnum.JSON;
                callback = "ipsam";
                fields = "porro";
                key = "dolores";
                oauthToken = "iste";
                prettyPrint = false;
                quotaUser = "labore";
                requestId = "porro";
                uploadType = "eaque";
                uploadProtocol = "ea";
                userIp = "consequatur";
            }};            

            ComputeGlobalNetworkEndpointGroupsDetachNetworkEndpointsResponse res = sdk.globalNetworkEndpointGroups.computeGlobalNetworkEndpointGroupsDetachNetworkEndpoints(req, new ComputeGlobalNetworkEndpointGroupsDetachNetworkEndpointsSecurity() {{
                option1 = new ComputeGlobalNetworkEndpointGroupsDetachNetworkEndpointsSecurityOption1("nobis", "accusantium") {{
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

            ComputeGlobalNetworkEndpointGroupsGetRequest req = new ComputeGlobalNetworkEndpointGroupsGetRequest("ea", "laborum") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "fugit";
                alt = AltEnum.MEDIA;
                callback = "molestiae";
                fields = "voluptate";
                key = "autem";
                oauthToken = "numquam";
                prettyPrint = false;
                quotaUser = "voluptates";
                uploadType = "debitis";
                uploadProtocol = "earum";
                userIp = "suscipit";
            }};            

            ComputeGlobalNetworkEndpointGroupsGetResponse res = sdk.globalNetworkEndpointGroups.computeGlobalNetworkEndpointGroupsGet(req, new ComputeGlobalNetworkEndpointGroupsGetSecurity() {{
                option1 = new ComputeGlobalNetworkEndpointGroupsGetSecurityOption1("assumenda", "doloremque") {{
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
import org.openapis.openapi.models.shared.NetworkEndpointGroupLbNetworkEndpointGroup;
import org.openapis.openapi.models.shared.NetworkEndpointGroupNetworkEndpointTypeEnum;
import org.openapis.openapi.models.shared.NetworkEndpointGroupPscData;
import org.openapis.openapi.models.shared.NetworkEndpointGroupPscDataPscConnectionStatusEnum;
import org.openapis.openapi.models.shared.NetworkEndpointGroupServerlessDeployment;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeGlobalNetworkEndpointGroupsInsertRequest req = new ComputeGlobalNetworkEndpointGroupsInsertRequest("porro") {{
                dollarXgafv = XgafvEnum.ONE;
                networkEndpointGroup = new NetworkEndpointGroup() {{
                    annotations = new java.util.HashMap<String, String>() {{
                        put("vel", "itaque");
                        put("nulla", "excepturi");
                        put("quod", "in");
                        put("nesciunt", "temporibus");
                    }};
                    appEngine = new NetworkEndpointGroupAppEngine() {{
                        service = "temporibus";
                        urlMask = "eum";
                        version = "non";
                    }};;
                    cloudFunction = new NetworkEndpointGroupCloudFunction() {{
                        function = "ut";
                        urlMask = "nostrum";
                    }};;
                    cloudRun = new NetworkEndpointGroupCloudRun() {{
                        service = "dignissimos";
                        tag = "illo";
                        urlMask = "corporis";
                    }};;
                    creationTimestamp = "ipsa";
                    defaultPort = 579351;
                    description = "dolorum";
                    id = "blanditiis";
                    kind = "recusandae";
                    loadBalancer = new NetworkEndpointGroupLbNetworkEndpointGroup() {{
                        defaultPort = 533563;
                        network = "dignissimos";
                        subnetwork = "doloremque";
                        zone = "quibusdam";
                    }};;
                    name = "Brooke Harris DVM";
                    network = "perspiciatis";
                    networkEndpointType = NetworkEndpointGroupNetworkEndpointTypeEnum.PRIVATE_SERVICE_CONNECT;
                    pscData = new NetworkEndpointGroupPscData() {{
                        consumerPscAddress = "magni";
                        pscConnectionId = "incidunt";
                        pscConnectionStatus = NetworkEndpointGroupPscDataPscConnectionStatusEnum.ACCEPTED;
                    }};;
                    pscTargetService = "quisquam";
                    region = "odio";
                    selfLink = "quidem";
                    serverlessDeployment = new NetworkEndpointGroupServerlessDeployment() {{
                        platform = "iure";
                        resource = "aliquid";
                        urlMask = "culpa";
                        version = "illo";
                    }};;
                    size = 970032;
                    subnetwork = "ipsum";
                    zone = "doloremque";
                }};;
                accessToken = "quod";
                alt = AltEnum.MEDIA;
                callback = "non";
                fields = "facere";
                key = "repellat";
                oauthToken = "exercitationem";
                prettyPrint = false;
                quotaUser = "quidem";
                requestId = "ea";
                uploadType = "molestiae";
                uploadProtocol = "vitae";
                userIp = "excepturi";
            }};            

            ComputeGlobalNetworkEndpointGroupsInsertResponse res = sdk.globalNetworkEndpointGroups.computeGlobalNetworkEndpointGroupsInsert(req, new ComputeGlobalNetworkEndpointGroupsInsertSecurity() {{
                option1 = new ComputeGlobalNetworkEndpointGroupsInsertSecurityOption1("voluptatum", "iste") {{
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

            ComputeGlobalNetworkEndpointGroupsListRequest req = new ComputeGlobalNetworkEndpointGroupsListRequest("eaque") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "magnam";
                alt = AltEnum.JSON;
                callback = "est";
                fields = "tempora";
                filter = "nobis";
                key = "expedita";
                maxResults = 267839L;
                oauthToken = "adipisci";
                orderBy = "atque";
                pageToken = "at";
                prettyPrint = false;
                quotaUser = "rem";
                returnPartialSuccess = false;
                uploadType = "exercitationem";
                uploadProtocol = "tempore";
                userIp = "eos";
            }};            

            ComputeGlobalNetworkEndpointGroupsListResponse res = sdk.globalNetworkEndpointGroups.computeGlobalNetworkEndpointGroupsList(req, new ComputeGlobalNetworkEndpointGroupsListSecurity() {{
                option1 = new ComputeGlobalNetworkEndpointGroupsListSecurityOption1("laboriosam", "aperiam") {{
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

            ComputeGlobalNetworkEndpointGroupsListNetworkEndpointsRequest req = new ComputeGlobalNetworkEndpointGroupsListNetworkEndpointsRequest("minima", "perspiciatis") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "assumenda";
                alt = AltEnum.MEDIA;
                callback = "tempora";
                fields = "ad";
                filter = "voluptates";
                key = "sequi";
                maxResults = 757735L;
                oauthToken = "consequuntur";
                orderBy = "quae";
                pageToken = "veniam";
                prettyPrint = false;
                quotaUser = "sint";
                returnPartialSuccess = false;
                uploadType = "minus";
                uploadProtocol = "excepturi";
                userIp = "porro";
            }};            

            ComputeGlobalNetworkEndpointGroupsListNetworkEndpointsResponse res = sdk.globalNetworkEndpointGroups.computeGlobalNetworkEndpointGroupsListNetworkEndpoints(req, new ComputeGlobalNetworkEndpointGroupsListNetworkEndpointsSecurity() {{
                option1 = new ComputeGlobalNetworkEndpointGroupsListNetworkEndpointsSecurityOption1("nesciunt", "maiores") {{
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
