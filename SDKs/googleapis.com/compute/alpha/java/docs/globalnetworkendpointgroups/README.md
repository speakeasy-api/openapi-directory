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

            ComputeGlobalNetworkEndpointGroupsAttachNetworkEndpointsRequest req = new ComputeGlobalNetworkEndpointGroupsAttachNetworkEndpointsRequest("perferendis", "eum") {{
                dollarXgafv = XgafvEnum.TWO;
                globalNetworkEndpointGroupsAttachEndpointsRequest = new GlobalNetworkEndpointGroupsAttachEndpointsRequest() {{
                    networkEndpoints = new org.openapis.openapi.models.shared.NetworkEndpoint[]{{
                        add(new NetworkEndpoint() {{
                            annotations = new java.util.HashMap<String, String>() {{
                                put("quas", "sequi");
                                put("illo", "temporibus");
                                put("doloremque", "aperiam");
                                put("laudantium", "ab");
                            }};
                            fqdn = "voluptatem";
                            instance = "provident";
                            ipAddress = "ipsa";
                            ipv6Address = "delectus";
                            port = 376341;
                        }}),
                        add(new NetworkEndpoint() {{
                            annotations = new java.util.HashMap<String, String>() {{
                                put("quae", "voluptas");
                                put("laboriosam", "ducimus");
                            }};
                            fqdn = "adipisci";
                            instance = "doloribus";
                            ipAddress = "ratione";
                            ipv6Address = "id";
                            port = 404680;
                        }}),
                    }};
                }};;
                accessToken = "quos";
                alt = AltEnum.JSON;
                callback = "minus";
                fields = "exercitationem";
                key = "molestiae";
                oauthToken = "iure";
                prettyPrint = false;
                quotaUser = "blanditiis";
                requestId = "repellendus";
                uploadType = "impedit";
                uploadProtocol = "itaque";
                userIp = "molestiae";
            }};            

            ComputeGlobalNetworkEndpointGroupsAttachNetworkEndpointsResponse res = sdk.globalNetworkEndpointGroups.computeGlobalNetworkEndpointGroupsAttachNetworkEndpoints(req, new ComputeGlobalNetworkEndpointGroupsAttachNetworkEndpointsSecurity() {{
                option1 = new ComputeGlobalNetworkEndpointGroupsAttachNetworkEndpointsSecurityOption1("quaerat", "explicabo") {{
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

            ComputeGlobalNetworkEndpointGroupsDeleteRequest req = new ComputeGlobalNetworkEndpointGroupsDeleteRequest("dolore", "accusantium") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "deserunt";
                alt = AltEnum.JSON;
                callback = "beatae";
                fields = "exercitationem";
                key = "officiis";
                oauthToken = "eaque";
                prettyPrint = false;
                quotaUser = "blanditiis";
                requestId = "voluptas";
                uploadType = "aut";
                uploadProtocol = "vitae";
                userIp = "tempora";
            }};            

            ComputeGlobalNetworkEndpointGroupsDeleteResponse res = sdk.globalNetworkEndpointGroups.computeGlobalNetworkEndpointGroupsDelete(req, new ComputeGlobalNetworkEndpointGroupsDeleteSecurity() {{
                option1 = new ComputeGlobalNetworkEndpointGroupsDeleteSecurityOption1("molestias", "cupiditate") {{
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

            ComputeGlobalNetworkEndpointGroupsDetachNetworkEndpointsRequest req = new ComputeGlobalNetworkEndpointGroupsDetachNetworkEndpointsRequest("officia", "minima") {{
                dollarXgafv = XgafvEnum.TWO;
                globalNetworkEndpointGroupsDetachEndpointsRequest = new GlobalNetworkEndpointGroupsDetachEndpointsRequest() {{
                    networkEndpoints = new org.openapis.openapi.models.shared.NetworkEndpoint[]{{
                        add(new NetworkEndpoint() {{
                            annotations = new java.util.HashMap<String, String>() {{
                                put("debitis", "neque");
                            }};
                            fqdn = "mollitia";
                            instance = "tenetur";
                            ipAddress = "non";
                            ipv6Address = "pariatur";
                            port = 873690;
                        }}),
                        add(new NetworkEndpoint() {{
                            annotations = new java.util.HashMap<String, String>() {{
                                put("quibusdam", "quibusdam");
                                put("officia", "dolorem");
                                put("velit", "vero");
                            }};
                            fqdn = "placeat";
                            instance = "pariatur";
                            ipAddress = "vel";
                            ipv6Address = "non";
                            port = 279965;
                        }}),
                    }};
                }};;
                accessToken = "praesentium";
                alt = AltEnum.JSON;
                callback = "itaque";
                fields = "non";
                key = "dolorum";
                oauthToken = "esse";
                prettyPrint = false;
                quotaUser = "id";
                requestId = "natus";
                uploadType = "quas";
                uploadProtocol = "saepe";
                userIp = "modi";
            }};            

            ComputeGlobalNetworkEndpointGroupsDetachNetworkEndpointsResponse res = sdk.globalNetworkEndpointGroups.computeGlobalNetworkEndpointGroupsDetachNetworkEndpoints(req, new ComputeGlobalNetworkEndpointGroupsDetachNetworkEndpointsSecurity() {{
                option1 = new ComputeGlobalNetworkEndpointGroupsDetachNetworkEndpointsSecurityOption1("assumenda", "maiores") {{
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

            ComputeGlobalNetworkEndpointGroupsGetRequest req = new ComputeGlobalNetworkEndpointGroupsGetRequest("neque", "in") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "quaerat";
                alt = AltEnum.MEDIA;
                callback = "libero";
                fields = "totam";
                key = "omnis";
                oauthToken = "veniam";
                prettyPrint = false;
                quotaUser = "nostrum";
                uploadType = "facere";
                uploadProtocol = "aliquam";
                userIp = "vitae";
            }};            

            ComputeGlobalNetworkEndpointGroupsGetResponse res = sdk.globalNetworkEndpointGroups.computeGlobalNetworkEndpointGroupsGet(req, new ComputeGlobalNetworkEndpointGroupsGetSecurity() {{
                option1 = new ComputeGlobalNetworkEndpointGroupsGetSecurityOption1("ipsum", "recusandae") {{
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
import org.openapis.openapi.models.shared.NetworkEndpointGroupTypeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeGlobalNetworkEndpointGroupsInsertRequest req = new ComputeGlobalNetworkEndpointGroupsInsertRequest("inventore") {{
                dollarXgafv = XgafvEnum.ONE;
                networkEndpointGroup = new NetworkEndpointGroup() {{
                    annotations = new java.util.HashMap<String, String>() {{
                        put("numquam", "praesentium");
                        put("dolores", "consectetur");
                        put("dicta", "ipsa");
                    }};
                    appEngine = new NetworkEndpointGroupAppEngine() {{
                        service = "occaecati";
                        urlMask = "perferendis";
                        version = "iure";
                    }};;
                    cloudFunction = new NetworkEndpointGroupCloudFunction() {{
                        function = "cum";
                        urlMask = "facere";
                    }};;
                    cloudRun = new NetworkEndpointGroupCloudRun() {{
                        service = "ratione";
                        tag = "quis";
                        urlMask = "modi";
                    }};;
                    creationTimestamp = "quo";
                    defaultPort = 14112;
                    description = "cupiditate";
                    id = "sed";
                    kind = "harum";
                    loadBalancer = new NetworkEndpointGroupLbNetworkEndpointGroup() {{
                        defaultPort = 874446;
                        network = "nihil";
                        subnetwork = "velit";
                        zone = "incidunt";
                    }};;
                    name = "Michael Cruickshank";
                    network = "excepturi";
                    networkEndpointType = NetworkEndpointGroupNetworkEndpointTypeEnum.PRIVATE_SERVICE_CONNECT;
                    pscData = new NetworkEndpointGroupPscData() {{
                        consumerPscAddress = "voluptatum";
                        pscConnectionId = "vel";
                        pscConnectionStatus = NetworkEndpointGroupPscDataPscConnectionStatusEnum.STATUS_UNSPECIFIED;
                    }};;
                    pscTargetService = "modi";
                    region = "expedita";
                    selfLink = "quidem";
                    selfLinkWithId = "consequuntur";
                    serverlessDeployment = new NetworkEndpointGroupServerlessDeployment() {{
                        platform = "eaque";
                        resource = "asperiores";
                        urlMask = "debitis";
                        version = "nostrum";
                    }};;
                    size = 841562;
                    subnetwork = "provident";
                    type = NetworkEndpointGroupTypeEnum.LOAD_BALANCING;
                    zone = "veritatis";
                }};;
                accessToken = "sunt";
                alt = AltEnum.PROTO;
                callback = "expedita";
                fields = "sapiente";
                key = "itaque";
                oauthToken = "dignissimos";
                prettyPrint = false;
                quotaUser = "magnam";
                requestId = "excepturi";
                uploadType = "placeat";
                uploadProtocol = "dolorum";
                userIp = "voluptatibus";
            }};            

            ComputeGlobalNetworkEndpointGroupsInsertResponse res = sdk.globalNetworkEndpointGroups.computeGlobalNetworkEndpointGroupsInsert(req, new ComputeGlobalNetworkEndpointGroupsInsertSecurity() {{
                option1 = new ComputeGlobalNetworkEndpointGroupsInsertSecurityOption1("modi", "enim") {{
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

            ComputeGlobalNetworkEndpointGroupsListRequest req = new ComputeGlobalNetworkEndpointGroupsListRequest("mollitia") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "molestiae";
                alt = AltEnum.PROTO;
                callback = "ex";
                fields = "error";
                filter = "saepe";
                key = "consequuntur";
                maxResults = 797903L;
                oauthToken = "occaecati";
                orderBy = "earum";
                pageToken = "eum";
                prettyPrint = false;
                quotaUser = "temporibus";
                returnPartialSuccess = false;
                uploadType = "quae";
                uploadProtocol = "doloremque";
                userIp = "debitis";
            }};            

            ComputeGlobalNetworkEndpointGroupsListResponse res = sdk.globalNetworkEndpointGroups.computeGlobalNetworkEndpointGroupsList(req, new ComputeGlobalNetworkEndpointGroupsListSecurity() {{
                option1 = new ComputeGlobalNetworkEndpointGroupsListSecurityOption1("omnis", "temporibus") {{
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

            ComputeGlobalNetworkEndpointGroupsListNetworkEndpointsRequest req = new ComputeGlobalNetworkEndpointGroupsListNetworkEndpointsRequest("quidem", "neque") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "repellendus";
                alt = AltEnum.JSON;
                callback = "quisquam";
                fields = "vel";
                filter = "cum";
                key = "doloremque";
                maxResults = 239378L;
                oauthToken = "quasi";
                orderBy = "accusantium";
                pageToken = "molestias";
                prettyPrint = false;
                quotaUser = "facere";
                returnPartialSuccess = false;
                uploadType = "occaecati";
                uploadProtocol = "quisquam";
                userIp = "nesciunt";
            }};            

            ComputeGlobalNetworkEndpointGroupsListNetworkEndpointsResponse res = sdk.globalNetworkEndpointGroups.computeGlobalNetworkEndpointGroupsListNetworkEndpoints(req, new ComputeGlobalNetworkEndpointGroupsListNetworkEndpointsSecurity() {{
                option1 = new ComputeGlobalNetworkEndpointGroupsListNetworkEndpointsSecurityOption1("sequi", "in") {{
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
