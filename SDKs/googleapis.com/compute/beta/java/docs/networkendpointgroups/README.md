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

            ComputeNetworkEndpointGroupsAggregatedListRequest req = new ComputeNetworkEndpointGroupsAggregatedListRequest("dolorum") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "perspiciatis";
                alt = AltEnum.PROTO;
                callback = "modi";
                fields = "ex";
                filter = "nisi";
                includeAllScopes = false;
                key = "ipsam";
                maxResults = 705496L;
                oauthToken = "laborum";
                orderBy = "omnis";
                pageToken = "reprehenderit";
                prettyPrint = false;
                quotaUser = "qui";
                returnPartialSuccess = false;
                uploadType = "ipsam";
                uploadProtocol = "perspiciatis";
                userIp = "molestias";
            }};            

            ComputeNetworkEndpointGroupsAggregatedListResponse res = sdk.networkEndpointGroups.computeNetworkEndpointGroupsAggregatedList(req, new ComputeNetworkEndpointGroupsAggregatedListSecurity() {{
                option1 = new ComputeNetworkEndpointGroupsAggregatedListSecurityOption1("reprehenderit", "corporis") {{
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

            ComputeNetworkEndpointGroupsAttachNetworkEndpointsRequest req = new ComputeNetworkEndpointGroupsAttachNetworkEndpointsRequest("at", "eligendi", "consequatur") {{
                dollarXgafv = XgafvEnum.TWO;
                networkEndpointGroupsAttachEndpointsRequest = new NetworkEndpointGroupsAttachEndpointsRequest() {{
                    networkEndpoints = new org.openapis.openapi.models.shared.NetworkEndpoint[]{{
                        add(new NetworkEndpoint() {{
                            annotations = new java.util.HashMap<String, String>() {{
                                put("facilis", "quisquam");
                                put("in", "atque");
                                put("libero", "possimus");
                                put("fugit", "modi");
                            }};
                            fqdn = "rem";
                            instance = "voluptates";
                            ipAddress = "cumque";
                            port = 402036;
                        }}),
                        add(new NetworkEndpoint() {{
                            annotations = new java.util.HashMap<String, String>() {{
                                put("voluptatum", "distinctio");
                                put("magni", "aliquam");
                                put("accusantium", "distinctio");
                                put("et", "quo");
                            }};
                            fqdn = "alias";
                            instance = "eum";
                            ipAddress = "impedit";
                            port = 593535;
                        }}),
                        add(new NetworkEndpoint() {{
                            annotations = new java.util.HashMap<String, String>() {{
                                put("consequatur", "commodi");
                                put("modi", "omnis");
                                put("nulla", "sed");
                                put("distinctio", "quibusdam");
                            }};
                            fqdn = "fugiat";
                            instance = "error";
                            ipAddress = "necessitatibus";
                            port = 352366;
                        }}),
                        add(new NetworkEndpoint() {{
                            annotations = new java.util.HashMap<String, String>() {{
                                put("fugiat", "temporibus");
                                put("expedita", "et");
                                put("autem", "voluptas");
                            }};
                            fqdn = "nemo";
                            instance = "optio";
                            ipAddress = "nesciunt";
                            port = 73149;
                        }}),
                    }};
                }};;
                accessToken = "dolores";
                alt = AltEnum.PROTO;
                callback = "voluptate";
                fields = "delectus";
                key = "ipsam";
                oauthToken = "ullam";
                prettyPrint = false;
                quotaUser = "quae";
                requestId = "at";
                uploadType = "quaerat";
                uploadProtocol = "iusto";
                userIp = "aspernatur";
            }};            

            ComputeNetworkEndpointGroupsAttachNetworkEndpointsResponse res = sdk.networkEndpointGroups.computeNetworkEndpointGroupsAttachNetworkEndpoints(req, new ComputeNetworkEndpointGroupsAttachNetworkEndpointsSecurity() {{
                option1 = new ComputeNetworkEndpointGroupsAttachNetworkEndpointsSecurityOption1("sunt", "quod") {{
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

            ComputeNetworkEndpointGroupsDeleteRequest req = new ComputeNetworkEndpointGroupsDeleteRequest("veritatis", "iusto", "aliquid") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "error";
                alt = AltEnum.JSON;
                callback = "nulla";
                fields = "facere";
                key = "voluptate";
                oauthToken = "quas";
                prettyPrint = false;
                quotaUser = "molestiae";
                requestId = "blanditiis";
                uploadType = "necessitatibus";
                uploadProtocol = "in";
                userIp = "dicta";
            }};            

            ComputeNetworkEndpointGroupsDeleteResponse res = sdk.networkEndpointGroups.computeNetworkEndpointGroupsDelete(req, new ComputeNetworkEndpointGroupsDeleteSecurity() {{
                option1 = new ComputeNetworkEndpointGroupsDeleteSecurityOption1("soluta", "delectus") {{
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

            ComputeNetworkEndpointGroupsDetachNetworkEndpointsRequest req = new ComputeNetworkEndpointGroupsDetachNetworkEndpointsRequest("quos", "quo", "dicta") {{
                dollarXgafv = XgafvEnum.ONE;
                networkEndpointGroupsDetachEndpointsRequest = new NetworkEndpointGroupsDetachEndpointsRequest() {{
                    networkEndpoints = new org.openapis.openapi.models.shared.NetworkEndpoint[]{{
                        add(new NetworkEndpoint() {{
                            annotations = new java.util.HashMap<String, String>() {{
                                put("modi", "vitae");
                                put("voluptatibus", "officiis");
                                put("inventore", "a");
                            }};
                            fqdn = "deleniti";
                            instance = "voluptate";
                            ipAddress = "repudiandae";
                            port = 662482;
                        }}),
                    }};
                }};;
                accessToken = "illo";
                alt = AltEnum.JSON;
                callback = "ratione";
                fields = "deserunt";
                key = "error";
                oauthToken = "voluptatum";
                prettyPrint = false;
                quotaUser = "aut";
                requestId = "laboriosam";
                uploadType = "recusandae";
                uploadProtocol = "laborum";
                userIp = "beatae";
            }};            

            ComputeNetworkEndpointGroupsDetachNetworkEndpointsResponse res = sdk.networkEndpointGroups.computeNetworkEndpointGroupsDetachNetworkEndpoints(req, new ComputeNetworkEndpointGroupsDetachNetworkEndpointsSecurity() {{
                option1 = new ComputeNetworkEndpointGroupsDetachNetworkEndpointsSecurityOption1("commodi", "ipsa") {{
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

            ComputeNetworkEndpointGroupsGetRequest req = new ComputeNetworkEndpointGroupsGetRequest("suscipit", "ratione", "cupiditate") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "accusamus";
                alt = AltEnum.PROTO;
                callback = "beatae";
                fields = "iusto";
                key = "cum";
                oauthToken = "deleniti";
                prettyPrint = false;
                quotaUser = "sunt";
                uploadType = "reprehenderit";
                uploadProtocol = "ullam";
                userIp = "deleniti";
            }};            

            ComputeNetworkEndpointGroupsGetResponse res = sdk.networkEndpointGroups.computeNetworkEndpointGroupsGet(req, new ComputeNetworkEndpointGroupsGetSecurity() {{
                option1 = new ComputeNetworkEndpointGroupsGetSecurityOption1("repellendus", "tempora") {{
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
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeNetworkEndpointGroupsInsertRequest req = new ComputeNetworkEndpointGroupsInsertRequest("laborum", "quidem") {{
                dollarXgafv = XgafvEnum.ONE;
                networkEndpointGroup = new NetworkEndpointGroup() {{
                    annotations = new java.util.HashMap<String, String>() {{
                        put("impedit", "totam");
                        put("alias", "nulla");
                        put("accusamus", "id");
                    }};
                    appEngine = new NetworkEndpointGroupAppEngine() {{
                        service = "reprehenderit";
                        urlMask = "dignissimos";
                        version = "doloribus";
                    }};;
                    cloudFunction = new NetworkEndpointGroupCloudFunction() {{
                        function = "quibusdam";
                        urlMask = "omnis";
                    }};;
                    cloudRun = new NetworkEndpointGroupCloudRun() {{
                        service = "cupiditate";
                        tag = "dolor";
                        urlMask = "illo";
                    }};;
                    creationTimestamp = "debitis";
                    defaultPort = 802608;
                    description = "molestias";
                    id = "quibusdam";
                    kind = "quasi";
                    loadBalancer = new NetworkEndpointGroupLbNetworkEndpointGroup() {{
                        defaultPort = 48076;
                        network = "aliquid";
                        subnetwork = "impedit";
                        zone = "tenetur";
                    }};;
                    name = "Bobby Schiller";
                    network = "culpa";
                    networkEndpointType = NetworkEndpointGroupNetworkEndpointTypeEnum.PRIVATE_SERVICE_CONNECT;
                    pscData = new NetworkEndpointGroupPscData() {{
                        consumerPscAddress = "corrupti";
                        pscConnectionId = "dolore";
                        pscConnectionStatus = NetworkEndpointGroupPscDataPscConnectionStatusEnum.ACCEPTED;
                    }};;
                    pscTargetService = "animi";
                    region = "quia";
                    selfLink = "totam";
                    serverlessDeployment = new NetworkEndpointGroupServerlessDeployment() {{
                        platform = "repudiandae";
                        resource = "id";
                        urlMask = "aperiam";
                        version = "commodi";
                    }};;
                    size = 495641;
                    subnetwork = "quia";
                    zone = "quibusdam";
                }};;
                accessToken = "autem";
                alt = AltEnum.PROTO;
                callback = "molestiae";
                fields = "neque";
                key = "dolorum";
                oauthToken = "sequi";
                prettyPrint = false;
                quotaUser = "ut";
                requestId = "maxime";
                uploadType = "deserunt";
                uploadProtocol = "labore";
                userIp = "consectetur";
            }};            

            ComputeNetworkEndpointGroupsInsertResponse res = sdk.networkEndpointGroups.computeNetworkEndpointGroupsInsert(req, new ComputeNetworkEndpointGroupsInsertSecurity() {{
                option1 = new ComputeNetworkEndpointGroupsInsertSecurityOption1("incidunt", "cumque") {{
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

            ComputeNetworkEndpointGroupsListRequest req = new ComputeNetworkEndpointGroupsListRequest("quibusdam", "nam") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "dicta";
                alt = AltEnum.JSON;
                callback = "provident";
                fields = "fuga";
                filter = "et";
                key = "molestias";
                maxResults = 969125L;
                oauthToken = "qui";
                orderBy = "quis";
                pageToken = "sed";
                prettyPrint = false;
                quotaUser = "perferendis";
                returnPartialSuccess = false;
                uploadType = "nihil";
                uploadProtocol = "blanditiis";
                userIp = "similique";
            }};            

            ComputeNetworkEndpointGroupsListResponse res = sdk.networkEndpointGroups.computeNetworkEndpointGroupsList(req, new ComputeNetworkEndpointGroupsListSecurity() {{
                option1 = new ComputeNetworkEndpointGroupsListSecurityOption1("sunt", "praesentium") {{
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

            ComputeNetworkEndpointGroupsListNetworkEndpointsRequest req = new ComputeNetworkEndpointGroupsListNetworkEndpointsRequest("mollitia", "magnam", "tempore") {{
                dollarXgafv = XgafvEnum.ONE;
                networkEndpointGroupsListEndpointsRequest = new NetworkEndpointGroupsListEndpointsRequest() {{
                    endpointFilters = new org.openapis.openapi.models.shared.NetworkEndpointGroupsListEndpointsRequestNetworkEndpointFilter[]{{
                        add(new NetworkEndpointGroupsListEndpointsRequestNetworkEndpointFilter() {{
                            networkEndpoint = new NetworkEndpoint() {{
                                annotations = new java.util.HashMap<String, String>() {{
                                    put("officiis", "repellendus");
                                    put("quaerat", "quidem");
                                    put("corporis", "placeat");
                                }};
                                fqdn = "voluptatibus";
                                instance = "consequatur";
                                ipAddress = "eum";
                                port = 121219;
                            }};
                        }}),
                        add(new NetworkEndpointGroupsListEndpointsRequestNetworkEndpointFilter() {{
                            networkEndpoint = new NetworkEndpoint() {{
                                annotations = new java.util.HashMap<String, String>() {{
                                    put("accusamus", "recusandae");
                                    put("perspiciatis", "ratione");
                                }};
                                fqdn = "quia";
                                instance = "molestiae";
                                ipAddress = "ullam";
                                port = 485426;
                            }};
                        }}),
                        add(new NetworkEndpointGroupsListEndpointsRequestNetworkEndpointFilter() {{
                            networkEndpoint = new NetworkEndpoint() {{
                                annotations = new java.util.HashMap<String, String>() {{
                                    put("soluta", "nulla");
                                    put("iure", "doloremque");
                                }};
                                fqdn = "pariatur";
                                instance = "officia";
                                ipAddress = "est";
                                port = 31927;
                            }};
                        }}),
                        add(new NetworkEndpointGroupsListEndpointsRequestNetworkEndpointFilter() {{
                            networkEndpoint = new NetworkEndpoint() {{
                                annotations = new java.util.HashMap<String, String>() {{
                                    put("quae", "eius");
                                    put("unde", "placeat");
                                    put("pariatur", "dicta");
                                    put("quod", "quod");
                                }};
                                fqdn = "assumenda";
                                instance = "illum";
                                ipAddress = "ipsum";
                                port = 406596;
                            }};
                        }}),
                    }};
                    healthStatus = NetworkEndpointGroupsListEndpointsRequestHealthStatusEnum.SHOW;
                }};;
                accessToken = "rerum";
                alt = AltEnum.PROTO;
                callback = "reiciendis";
                fields = "sint";
                filter = "qui";
                key = "amet";
                maxResults = 618141L;
                oauthToken = "alias";
                orderBy = "aperiam";
                pageToken = "illo";
                prettyPrint = false;
                quotaUser = "quis";
                returnPartialSuccess = false;
                uploadType = "a";
                uploadProtocol = "odit";
                userIp = "laboriosam";
            }};            

            ComputeNetworkEndpointGroupsListNetworkEndpointsResponse res = sdk.networkEndpointGroups.computeNetworkEndpointGroupsListNetworkEndpoints(req, new ComputeNetworkEndpointGroupsListNetworkEndpointsSecurity() {{
                option1 = new ComputeNetworkEndpointGroupsListNetworkEndpointsSecurityOption1("deleniti", "excepturi") {{
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

            ComputeNetworkEndpointGroupsTestIamPermissionsRequest req = new ComputeNetworkEndpointGroupsTestIamPermissionsRequest("unde", "optio", "asperiores") {{
                dollarXgafv = XgafvEnum.ONE;
                testPermissionsRequest = new TestPermissionsRequest() {{
                    permissions = new String[]{{
                        add("delectus"),
                        add("accusamus"),
                        add("cum"),
                        add("excepturi"),
                    }};
                }};;
                accessToken = "expedita";
                alt = AltEnum.PROTO;
                callback = "impedit";
                fields = "ullam";
                key = "aperiam";
                oauthToken = "nesciunt";
                prettyPrint = false;
                quotaUser = "beatae";
                uploadType = "rem";
                uploadProtocol = "laborum";
                userIp = "voluptatum";
            }};            

            ComputeNetworkEndpointGroupsTestIamPermissionsResponse res = sdk.networkEndpointGroups.computeNetworkEndpointGroupsTestIamPermissions(req, new ComputeNetworkEndpointGroupsTestIamPermissionsSecurity() {{
                option1 = new ComputeNetworkEndpointGroupsTestIamPermissionsSecurityOption1("vitae", "eveniet") {{
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
