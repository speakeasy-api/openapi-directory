# networkEndpointGroups

### Available Operations

* [computeNetworkEndpointGroupsAggregatedList](#computenetworkendpointgroupsaggregatedlist) - Retrieves the list of network endpoint groups and sorts them by zone.
* [computeNetworkEndpointGroupsAttachNetworkEndpoints](#computenetworkendpointgroupsattachnetworkendpoints) - Attach a list of network endpoints to the specified network endpoint group.
* [computeNetworkEndpointGroupsDelete](#computenetworkendpointgroupsdelete) - Deletes the specified network endpoint group. The network endpoints in the NEG and the VM instances they belong to are not terminated when the NEG is deleted. Note that the NEG cannot be deleted if there are backend services referencing it.
* [computeNetworkEndpointGroupsDetachNetworkEndpoints](#computenetworkendpointgroupsdetachnetworkendpoints) - Detach a list of network endpoints from the specified network endpoint group.
* [computeNetworkEndpointGroupsGet](#computenetworkendpointgroupsget) - Returns the specified network endpoint group.
* [computeNetworkEndpointGroupsInsert](#computenetworkendpointgroupsinsert) - Creates a network endpoint group in the specified project using the parameters that are included in the request.
* [computeNetworkEndpointGroupsList](#computenetworkendpointgroupslist) - Retrieves the list of network endpoint groups that are located in the specified project and zone.
* [computeNetworkEndpointGroupsListNetworkEndpoints](#computenetworkendpointgroupslistnetworkendpoints) - Lists the network endpoints in the specified network endpoint group.
* [computeNetworkEndpointGroupsTestIamPermissions](#computenetworkendpointgroupstestiampermissions) - Returns permissions that a caller has on the specified resource.

## computeNetworkEndpointGroupsAggregatedList

Retrieves the list of network endpoint groups and sorts them by zone.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeNetworkEndpointGroupsAggregatedListRequest;
import org.openapis.openapi.models.operations.ComputeNetworkEndpointGroupsAggregatedListResponse;
import org.openapis.openapi.models.operations.ComputeNetworkEndpointGroupsAggregatedListSecurity;
import org.openapis.openapi.models.operations.ComputeNetworkEndpointGroupsAggregatedListSecurityOption1;
import org.openapis.openapi.models.operations.ComputeNetworkEndpointGroupsAggregatedListSecurityOption2;
import org.openapis.openapi.models.operations.ComputeNetworkEndpointGroupsAggregatedListSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeNetworkEndpointGroupsAggregatedListRequest req = new ComputeNetworkEndpointGroupsAggregatedListRequest("unde") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "accusantium";
                alt = AltEnum.PROTO;
                callback = "quisquam";
                fields = "perspiciatis";
                filter = "nisi";
                includeAllScopes = false;
                key = "ratione";
                maxResults = 314113L;
                oauthToken = "ut";
                orderBy = "laudantium";
                pageToken = "assumenda";
                prettyPrint = false;
                quotaUser = "laborum";
                returnPartialSuccess = false;
                uploadType = "itaque";
                uploadProtocol = "recusandae";
                userIp = "occaecati";
            }};            

            ComputeNetworkEndpointGroupsAggregatedListResponse res = sdk.networkEndpointGroups.computeNetworkEndpointGroupsAggregatedList(req, new ComputeNetworkEndpointGroupsAggregatedListSecurity() {{
                option1 = new ComputeNetworkEndpointGroupsAggregatedListSecurityOption1("sit", "nisi") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.networkEndpointGroupAggregatedList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeNetworkEndpointGroupsAttachNetworkEndpoints

Attach a list of network endpoints to the specified network endpoint group.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeNetworkEndpointGroupsAttachNetworkEndpointsRequest;
import org.openapis.openapi.models.operations.ComputeNetworkEndpointGroupsAttachNetworkEndpointsResponse;
import org.openapis.openapi.models.operations.ComputeNetworkEndpointGroupsAttachNetworkEndpointsSecurity;
import org.openapis.openapi.models.operations.ComputeNetworkEndpointGroupsAttachNetworkEndpointsSecurityOption1;
import org.openapis.openapi.models.operations.ComputeNetworkEndpointGroupsAttachNetworkEndpointsSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.NetworkEndpoint;
import org.openapis.openapi.models.shared.NetworkEndpointGroupsAttachEndpointsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeNetworkEndpointGroupsAttachNetworkEndpointsRequest req = new ComputeNetworkEndpointGroupsAttachNetworkEndpointsRequest("aliquam", "culpa", "doloremque") {{
                dollarXgafv = XgafvEnum.TWO;
                networkEndpointGroupsAttachEndpointsRequest = new NetworkEndpointGroupsAttachEndpointsRequest() {{
                    networkEndpoints = new org.openapis.openapi.models.shared.NetworkEndpoint[]{{
                        add(new NetworkEndpoint() {{
                            annotations = new java.util.HashMap<String, String>() {{
                                put("facilis", "aliquam");
                                put("tempora", "delectus");
                                put("impedit", "perferendis");
                                put("culpa", "laborum");
                            }};
                            fqdn = "id";
                            instance = "quas";
                            ipAddress = "nobis";
                            ipv6Address = "odit";
                            port = 160977;
                        }}),
                        add(new NetworkEndpoint() {{
                            annotations = new java.util.HashMap<String, String>() {{
                                put("unde", "alias");
                                put("totam", "quia");
                                put("quis", "ea");
                            }};
                            fqdn = "libero";
                            instance = "veritatis";
                            ipAddress = "iure";
                            ipv6Address = "recusandae";
                            port = 470068;
                        }}),
                        add(new NetworkEndpoint() {{
                            annotations = new java.util.HashMap<String, String>() {{
                                put("dolorem", "eveniet");
                            }};
                            fqdn = "cum";
                            instance = "ea";
                            ipAddress = "consequatur";
                            ipv6Address = "suscipit";
                            port = 497233;
                        }}),
                        add(new NetworkEndpoint() {{
                            annotations = new java.util.HashMap<String, String>() {{
                                put("deleniti", "accusamus");
                            }};
                            fqdn = "modi";
                            instance = "ipsam";
                            ipAddress = "magni";
                            ipv6Address = "molestiae";
                            port = 347961;
                        }}),
                    }};
                }};;
                accessToken = "delectus";
                alt = AltEnum.JSON;
                callback = "eaque";
                fields = "nam";
                key = "expedita";
                oauthToken = "occaecati";
                prettyPrint = false;
                quotaUser = "aliquid";
                requestId = "doloremque";
                uploadType = "recusandae";
                uploadProtocol = "a";
                userIp = "a";
            }};            

            ComputeNetworkEndpointGroupsAttachNetworkEndpointsResponse res = sdk.networkEndpointGroups.computeNetworkEndpointGroupsAttachNetworkEndpoints(req, new ComputeNetworkEndpointGroupsAttachNetworkEndpointsSecurity() {{
                option1 = new ComputeNetworkEndpointGroupsAttachNetworkEndpointsSecurityOption1("impedit", "necessitatibus") {{
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

## computeNetworkEndpointGroupsDelete

Deletes the specified network endpoint group. The network endpoints in the NEG and the VM instances they belong to are not terminated when the NEG is deleted. Note that the NEG cannot be deleted if there are backend services referencing it.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeNetworkEndpointGroupsDeleteRequest;
import org.openapis.openapi.models.operations.ComputeNetworkEndpointGroupsDeleteResponse;
import org.openapis.openapi.models.operations.ComputeNetworkEndpointGroupsDeleteSecurity;
import org.openapis.openapi.models.operations.ComputeNetworkEndpointGroupsDeleteSecurityOption1;
import org.openapis.openapi.models.operations.ComputeNetworkEndpointGroupsDeleteSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeNetworkEndpointGroupsDeleteRequest req = new ComputeNetworkEndpointGroupsDeleteRequest("voluptatibus", "quasi", "officia") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "hic";
                alt = AltEnum.JSON;
                callback = "maxime";
                fields = "accusantium";
                key = "quaerat";
                oauthToken = "autem";
                prettyPrint = false;
                quotaUser = "eligendi";
                requestId = "consequatur";
                uploadType = "sunt";
                uploadProtocol = "commodi";
                userIp = "praesentium";
            }};            

            ComputeNetworkEndpointGroupsDeleteResponse res = sdk.networkEndpointGroups.computeNetworkEndpointGroupsDelete(req, new ComputeNetworkEndpointGroupsDeleteSecurity() {{
                option1 = new ComputeNetworkEndpointGroupsDeleteSecurityOption1("qui", "eveniet") {{
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

## computeNetworkEndpointGroupsDetachNetworkEndpoints

Detach a list of network endpoints from the specified network endpoint group.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeNetworkEndpointGroupsDetachNetworkEndpointsRequest;
import org.openapis.openapi.models.operations.ComputeNetworkEndpointGroupsDetachNetworkEndpointsResponse;
import org.openapis.openapi.models.operations.ComputeNetworkEndpointGroupsDetachNetworkEndpointsSecurity;
import org.openapis.openapi.models.operations.ComputeNetworkEndpointGroupsDetachNetworkEndpointsSecurityOption1;
import org.openapis.openapi.models.operations.ComputeNetworkEndpointGroupsDetachNetworkEndpointsSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.NetworkEndpoint;
import org.openapis.openapi.models.shared.NetworkEndpointGroupsDetachEndpointsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeNetworkEndpointGroupsDetachNetworkEndpointsRequest req = new ComputeNetworkEndpointGroupsDetachNetworkEndpointsRequest("quod", "rem", "fugiat") {{
                dollarXgafv = XgafvEnum.TWO;
                networkEndpointGroupsDetachEndpointsRequest = new NetworkEndpointGroupsDetachEndpointsRequest() {{
                    networkEndpoints = new org.openapis.openapi.models.shared.NetworkEndpoint[]{{
                        add(new NetworkEndpoint() {{
                            annotations = new java.util.HashMap<String, String>() {{
                                put("modi", "rem");
                                put("aut", "excepturi");
                            }};
                            fqdn = "nemo";
                            instance = "sapiente";
                            ipAddress = "repellendus";
                            ipv6Address = "facilis";
                            port = 823149;
                        }}),
                    }};
                }};;
                accessToken = "perspiciatis";
                alt = AltEnum.MEDIA;
                callback = "quae";
                fields = "voluptatem";
                key = "dolor";
                oauthToken = "exercitationem";
                prettyPrint = false;
                quotaUser = "sunt";
                requestId = "nulla";
                uploadType = "laudantium";
                uploadProtocol = "aspernatur";
                userIp = "asperiores";
            }};            

            ComputeNetworkEndpointGroupsDetachNetworkEndpointsResponse res = sdk.networkEndpointGroups.computeNetworkEndpointGroupsDetachNetworkEndpoints(req, new ComputeNetworkEndpointGroupsDetachNetworkEndpointsSecurity() {{
                option1 = new ComputeNetworkEndpointGroupsDetachNetworkEndpointsSecurityOption1("cum", "temporibus") {{
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

## computeNetworkEndpointGroupsGet

Returns the specified network endpoint group.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeNetworkEndpointGroupsGetRequest;
import org.openapis.openapi.models.operations.ComputeNetworkEndpointGroupsGetResponse;
import org.openapis.openapi.models.operations.ComputeNetworkEndpointGroupsGetSecurity;
import org.openapis.openapi.models.operations.ComputeNetworkEndpointGroupsGetSecurityOption1;
import org.openapis.openapi.models.operations.ComputeNetworkEndpointGroupsGetSecurityOption2;
import org.openapis.openapi.models.operations.ComputeNetworkEndpointGroupsGetSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeNetworkEndpointGroupsGetRequest req = new ComputeNetworkEndpointGroupsGetRequest("amet", "odio", "accusamus") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "ad";
                alt = AltEnum.JSON;
                callback = "officiis";
                fields = "temporibus";
                key = "quos";
                oauthToken = "suscipit";
                prettyPrint = false;
                quotaUser = "nam";
                uploadType = "voluptatem";
                uploadProtocol = "illum";
                userIp = "recusandae";
            }};            

            ComputeNetworkEndpointGroupsGetResponse res = sdk.networkEndpointGroups.computeNetworkEndpointGroupsGet(req, new ComputeNetworkEndpointGroupsGetSecurity() {{
                option1 = new ComputeNetworkEndpointGroupsGetSecurityOption1("tenetur", "reprehenderit") {{
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

## computeNetworkEndpointGroupsInsert

Creates a network endpoint group in the specified project using the parameters that are included in the request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeNetworkEndpointGroupsInsertRequest;
import org.openapis.openapi.models.operations.ComputeNetworkEndpointGroupsInsertResponse;
import org.openapis.openapi.models.operations.ComputeNetworkEndpointGroupsInsertSecurity;
import org.openapis.openapi.models.operations.ComputeNetworkEndpointGroupsInsertSecurityOption1;
import org.openapis.openapi.models.operations.ComputeNetworkEndpointGroupsInsertSecurityOption2;
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

            ComputeNetworkEndpointGroupsInsertRequest req = new ComputeNetworkEndpointGroupsInsertRequest("non", "laborum") {{
                dollarXgafv = XgafvEnum.ONE;
                networkEndpointGroup = new NetworkEndpointGroup() {{
                    annotations = new java.util.HashMap<String, String>() {{
                        put("veniam", "quisquam");
                        put("saepe", "delectus");
                        put("sapiente", "error");
                    }};
                    appEngine = new NetworkEndpointGroupAppEngine() {{
                        service = "nulla";
                        urlMask = "dicta";
                        version = "voluptatem";
                    }};;
                    cloudFunction = new NetworkEndpointGroupCloudFunction() {{
                        function = "provident";
                        urlMask = "quod";
                    }};;
                    cloudRun = new NetworkEndpointGroupCloudRun() {{
                        service = "voluptatem";
                        tag = "culpa";
                        urlMask = "nostrum";
                    }};;
                    creationTimestamp = "est";
                    defaultPort = 73988;
                    description = "dignissimos";
                    id = "ut";
                    kind = "explicabo";
                    loadBalancer = new NetworkEndpointGroupLbNetworkEndpointGroup() {{
                        defaultPort = 898729;
                        network = "velit";
                        subnetwork = "dolorem";
                        zone = "quisquam";
                    }};;
                    name = "Oliver Hyatt";
                    network = "delectus";
                    networkEndpointType = NetworkEndpointGroupNetworkEndpointTypeEnum.PRIVATE_SERVICE_CONNECT;
                    pscData = new NetworkEndpointGroupPscData() {{
                        consumerPscAddress = "veniam";
                        pscConnectionId = "commodi";
                        pscConnectionStatus = NetworkEndpointGroupPscDataPscConnectionStatusEnum.ACCEPTED;
                    }};;
                    pscTargetService = "maiores";
                    region = "provident";
                    selfLink = "nesciunt";
                    selfLinkWithId = "nihil";
                    serverlessDeployment = new NetworkEndpointGroupServerlessDeployment() {{
                        platform = "accusamus";
                        resource = "dolores";
                        urlMask = "tempora";
                        version = "quibusdam";
                    }};;
                    size = 555315;
                    subnetwork = "iure";
                    type = NetworkEndpointGroupTypeEnum.LOAD_BALANCING;
                    zone = "dicta";
                }};;
                accessToken = "amet";
                alt = AltEnum.JSON;
                callback = "magnam";
                fields = "ipsam";
                key = "quibusdam";
                oauthToken = "eos";
                prettyPrint = false;
                quotaUser = "delectus";
                requestId = "odio";
                uploadType = "quasi";
                uploadProtocol = "velit";
                userIp = "vero";
            }};            

            ComputeNetworkEndpointGroupsInsertResponse res = sdk.networkEndpointGroups.computeNetworkEndpointGroupsInsert(req, new ComputeNetworkEndpointGroupsInsertSecurity() {{
                option1 = new ComputeNetworkEndpointGroupsInsertSecurityOption1("doloremque", "ullam") {{
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

## computeNetworkEndpointGroupsList

Retrieves the list of network endpoint groups that are located in the specified project and zone.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeNetworkEndpointGroupsListRequest;
import org.openapis.openapi.models.operations.ComputeNetworkEndpointGroupsListResponse;
import org.openapis.openapi.models.operations.ComputeNetworkEndpointGroupsListSecurity;
import org.openapis.openapi.models.operations.ComputeNetworkEndpointGroupsListSecurityOption1;
import org.openapis.openapi.models.operations.ComputeNetworkEndpointGroupsListSecurityOption2;
import org.openapis.openapi.models.operations.ComputeNetworkEndpointGroupsListSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeNetworkEndpointGroupsListRequest req = new ComputeNetworkEndpointGroupsListRequest("distinctio", "nemo") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "unde";
                alt = AltEnum.JSON;
                callback = "distinctio";
                fields = "tenetur";
                filter = "quo";
                key = "odio";
                maxResults = 201356L;
                oauthToken = "molestias";
                orderBy = "enim";
                pageToken = "delectus";
                prettyPrint = false;
                quotaUser = "iusto";
                returnPartialSuccess = false;
                uploadType = "dicta";
                uploadProtocol = "eos";
                userIp = "qui";
            }};            

            ComputeNetworkEndpointGroupsListResponse res = sdk.networkEndpointGroups.computeNetworkEndpointGroupsList(req, new ComputeNetworkEndpointGroupsListSecurity() {{
                option1 = new ComputeNetworkEndpointGroupsListSecurityOption1("ipsum", "expedita") {{
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

## computeNetworkEndpointGroupsListNetworkEndpoints

Lists the network endpoints in the specified network endpoint group.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeNetworkEndpointGroupsListNetworkEndpointsRequest;
import org.openapis.openapi.models.operations.ComputeNetworkEndpointGroupsListNetworkEndpointsResponse;
import org.openapis.openapi.models.operations.ComputeNetworkEndpointGroupsListNetworkEndpointsSecurity;
import org.openapis.openapi.models.operations.ComputeNetworkEndpointGroupsListNetworkEndpointsSecurityOption1;
import org.openapis.openapi.models.operations.ComputeNetworkEndpointGroupsListNetworkEndpointsSecurityOption2;
import org.openapis.openapi.models.operations.ComputeNetworkEndpointGroupsListNetworkEndpointsSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.NetworkEndpoint;
import org.openapis.openapi.models.shared.NetworkEndpointGroupsListEndpointsRequest;
import org.openapis.openapi.models.shared.NetworkEndpointGroupsListEndpointsRequestHealthStatusEnum;
import org.openapis.openapi.models.shared.NetworkEndpointGroupsListEndpointsRequestNetworkEndpointFilter;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeNetworkEndpointGroupsListNetworkEndpointsRequest req = new ComputeNetworkEndpointGroupsListNetworkEndpointsRequest("corporis", "molestias", "magnam") {{
                dollarXgafv = XgafvEnum.ONE;
                networkEndpointGroupsListEndpointsRequest = new NetworkEndpointGroupsListEndpointsRequest() {{
                    endpointFilters = new org.openapis.openapi.models.shared.NetworkEndpointGroupsListEndpointsRequestNetworkEndpointFilter[]{{
                        add(new NetworkEndpointGroupsListEndpointsRequestNetworkEndpointFilter() {{
                            networkEndpoint = new NetworkEndpoint() {{
                                annotations = new java.util.HashMap<String, String>() {{
                                    put("tempore", "cupiditate");
                                }};
                                fqdn = "quisquam";
                                instance = "reprehenderit";
                                ipAddress = "commodi";
                                ipv6Address = "laborum";
                                port = 118102;
                            }};
                        }}),
                        add(new NetworkEndpointGroupsListEndpointsRequestNetworkEndpointFilter() {{
                            networkEndpoint = new NetworkEndpoint() {{
                                annotations = new java.util.HashMap<String, String>() {{
                                    put("earum", "ex");
                                    put("nostrum", "quaerat");
                                }};
                                fqdn = "accusantium";
                                instance = "nesciunt";
                                ipAddress = "ea";
                                ipv6Address = "praesentium";
                                port = 915011;
                            }};
                        }}),
                        add(new NetworkEndpointGroupsListEndpointsRequestNetworkEndpointFilter() {{
                            networkEndpoint = new NetworkEndpoint() {{
                                annotations = new java.util.HashMap<String, String>() {{
                                    put("velit", "accusantium");
                                    put("tenetur", "odio");
                                    put("culpa", "nobis");
                                    put("recusandae", "culpa");
                                }};
                                fqdn = "soluta";
                                instance = "asperiores";
                                ipAddress = "quas";
                                ipv6Address = "ipsa";
                                port = 113948;
                            }};
                        }}),
                    }};
                    healthStatus = NetworkEndpointGroupsListEndpointsRequestHealthStatusEnum.SHOW;
                }};;
                accessToken = "modi";
                alt = AltEnum.JSON;
                callback = "perspiciatis";
                fields = "consequatur";
                filter = "aliquam";
                key = "totam";
                maxResults = 953857L;
                oauthToken = "officia";
                orderBy = "suscipit";
                pageToken = "autem";
                prettyPrint = false;
                quotaUser = "dignissimos";
                returnPartialSuccess = false;
                uploadType = "commodi";
                uploadProtocol = "iure";
                userIp = "vero";
            }};            

            ComputeNetworkEndpointGroupsListNetworkEndpointsResponse res = sdk.networkEndpointGroups.computeNetworkEndpointGroupsListNetworkEndpoints(req, new ComputeNetworkEndpointGroupsListNetworkEndpointsSecurity() {{
                option1 = new ComputeNetworkEndpointGroupsListNetworkEndpointsSecurityOption1("dolores", "iste") {{
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

## computeNetworkEndpointGroupsTestIamPermissions

Returns permissions that a caller has on the specified resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeNetworkEndpointGroupsTestIamPermissionsRequest;
import org.openapis.openapi.models.operations.ComputeNetworkEndpointGroupsTestIamPermissionsResponse;
import org.openapis.openapi.models.operations.ComputeNetworkEndpointGroupsTestIamPermissionsSecurity;
import org.openapis.openapi.models.operations.ComputeNetworkEndpointGroupsTestIamPermissionsSecurityOption1;
import org.openapis.openapi.models.operations.ComputeNetworkEndpointGroupsTestIamPermissionsSecurityOption2;
import org.openapis.openapi.models.operations.ComputeNetworkEndpointGroupsTestIamPermissionsSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.TestPermissionsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeNetworkEndpointGroupsTestIamPermissionsRequest req = new ComputeNetworkEndpointGroupsTestIamPermissionsRequest("repellendus", "eius", "vero") {{
                dollarXgafv = XgafvEnum.ONE;
                testPermissionsRequest = new TestPermissionsRequest() {{
                    permissions = new String[]{{
                        add("nesciunt"),
                        add("quod"),
                    }};
                }};;
                accessToken = "modi";
                alt = AltEnum.PROTO;
                callback = "est";
                fields = "ad";
                key = "officia";
                oauthToken = "debitis";
                prettyPrint = false;
                quotaUser = "eius";
                uploadType = "necessitatibus";
                uploadProtocol = "atque";
                userIp = "expedita";
            }};            

            ComputeNetworkEndpointGroupsTestIamPermissionsResponse res = sdk.networkEndpointGroups.computeNetworkEndpointGroupsTestIamPermissions(req, new ComputeNetworkEndpointGroupsTestIamPermissionsSecurity() {{
                option1 = new ComputeNetworkEndpointGroupsTestIamPermissionsSecurityOption1("nulla", "nobis") {{
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
