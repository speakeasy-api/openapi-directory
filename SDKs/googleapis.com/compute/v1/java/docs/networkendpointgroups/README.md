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

            ComputeNetworkEndpointGroupsAggregatedListRequest req = new ComputeNetworkEndpointGroupsAggregatedListRequest("odit") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "voluptatem";
                alt = AltEnum.JSON;
                callback = "consequuntur";
                fields = "iure";
                filter = "dolor";
                includeAllScopes = false;
                key = "quia";
                maxResults = 690703L;
                oauthToken = "sequi";
                orderBy = "quae";
                pageToken = "porro";
                prettyPrint = false;
                quotaUser = "harum";
                returnPartialSuccess = false;
                uploadType = "at";
                uploadProtocol = "ex";
                userIp = "unde";
            }};            

            ComputeNetworkEndpointGroupsAggregatedListResponse res = sdk.networkEndpointGroups.computeNetworkEndpointGroupsAggregatedList(req, new ComputeNetworkEndpointGroupsAggregatedListSecurity() {{
                option1 = new ComputeNetworkEndpointGroupsAggregatedListSecurityOption1("fugit", "a") {{
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

            ComputeNetworkEndpointGroupsAttachNetworkEndpointsRequest req = new ComputeNetworkEndpointGroupsAttachNetworkEndpointsRequest("maiores", "quisquam", "blanditiis") {{
                dollarXgafv = XgafvEnum.ONE;
                networkEndpointGroupsAttachEndpointsRequest = new NetworkEndpointGroupsAttachEndpointsRequest() {{
                    networkEndpoints = new org.openapis.openapi.models.shared.NetworkEndpoint[]{{
                        add(new NetworkEndpoint() {{
                            annotations = new java.util.HashMap<String, String>() {{
                                put("ipsa", "alias");
                                put("enim", "itaque");
                            }};
                            fqdn = "iste";
                            instance = "pariatur";
                            ipAddress = "velit";
                            port = 837491;
                        }}),
                        add(new NetworkEndpoint() {{
                            annotations = new java.util.HashMap<String, String>() {{
                                put("consectetur", "incidunt");
                                put("vero", "aperiam");
                                put("non", "commodi");
                            }};
                            fqdn = "sapiente";
                            instance = "ullam";
                            ipAddress = "quo";
                            port = 245890;
                        }}),
                    }};
                }};;
                accessToken = "quas";
                alt = AltEnum.MEDIA;
                callback = "ea";
                fields = "laboriosam";
                key = "numquam";
                oauthToken = "tenetur";
                prettyPrint = false;
                quotaUser = "ea";
                requestId = "error";
                uploadType = "laudantium";
                uploadProtocol = "corporis";
                userIp = "quis";
            }};            

            ComputeNetworkEndpointGroupsAttachNetworkEndpointsResponse res = sdk.networkEndpointGroups.computeNetworkEndpointGroupsAttachNetworkEndpoints(req, new ComputeNetworkEndpointGroupsAttachNetworkEndpointsSecurity() {{
                option1 = new ComputeNetworkEndpointGroupsAttachNetworkEndpointsSecurityOption1("ipsum", "perferendis") {{
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

            ComputeNetworkEndpointGroupsDeleteRequest req = new ComputeNetworkEndpointGroupsDeleteRequest("est", "fugit", "repudiandae") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "similique";
                alt = AltEnum.PROTO;
                callback = "assumenda";
                fields = "vel";
                key = "fuga";
                oauthToken = "est";
                prettyPrint = false;
                quotaUser = "tenetur";
                requestId = "atque";
                uploadType = "ea";
                uploadProtocol = "nesciunt";
                userIp = "impedit";
            }};            

            ComputeNetworkEndpointGroupsDeleteResponse res = sdk.networkEndpointGroups.computeNetworkEndpointGroupsDelete(req, new ComputeNetworkEndpointGroupsDeleteSecurity() {{
                option1 = new ComputeNetworkEndpointGroupsDeleteSecurityOption1("eos", "praesentium") {{
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

            ComputeNetworkEndpointGroupsDetachNetworkEndpointsRequest req = new ComputeNetworkEndpointGroupsDetachNetworkEndpointsRequest("illum", "eaque", "incidunt") {{
                dollarXgafv = XgafvEnum.ONE;
                networkEndpointGroupsDetachEndpointsRequest = new NetworkEndpointGroupsDetachEndpointsRequest() {{
                    networkEndpoints = new org.openapis.openapi.models.shared.NetworkEndpoint[]{{
                        add(new NetworkEndpoint() {{
                            annotations = new java.util.HashMap<String, String>() {{
                                put("perspiciatis", "id");
                                put("amet", "pariatur");
                            }};
                            fqdn = "iste";
                            instance = "voluptatem";
                            ipAddress = "voluptas";
                            port = 941845;
                        }}),
                        add(new NetworkEndpoint() {{
                            annotations = new java.util.HashMap<String, String>() {{
                                put("officiis", "soluta");
                                put("at", "nostrum");
                            }};
                            fqdn = "officia";
                            instance = "fugiat";
                            ipAddress = "quam";
                            port = 878940;
                        }}),
                        add(new NetworkEndpoint() {{
                            annotations = new java.util.HashMap<String, String>() {{
                                put("dignissimos", "neque");
                                put("provident", "dolore");
                                put("reiciendis", "dolores");
                                put("corporis", "repellat");
                            }};
                            fqdn = "ex";
                            instance = "ratione";
                            ipAddress = "tempora";
                            port = 700751;
                        }}),
                        add(new NetworkEndpoint() {{
                            annotations = new java.util.HashMap<String, String>() {{
                                put("quam", "dolorem");
                            }};
                            fqdn = "accusantium";
                            instance = "ducimus";
                            ipAddress = "inventore";
                            port = 256849;
                        }}),
                    }};
                }};;
                accessToken = "itaque";
                alt = AltEnum.MEDIA;
                callback = "soluta";
                fields = "recusandae";
                key = "corrupti";
                oauthToken = "minus";
                prettyPrint = false;
                quotaUser = "dolorem";
                requestId = "debitis";
                uploadType = "consequatur";
                uploadProtocol = "perspiciatis";
                userIp = "impedit";
            }};            

            ComputeNetworkEndpointGroupsDetachNetworkEndpointsResponse res = sdk.networkEndpointGroups.computeNetworkEndpointGroupsDetachNetworkEndpoints(req, new ComputeNetworkEndpointGroupsDetachNetworkEndpointsSecurity() {{
                option1 = new ComputeNetworkEndpointGroupsDetachNetworkEndpointsSecurityOption1("vel", "quaerat") {{
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

            ComputeNetworkEndpointGroupsGetRequest req = new ComputeNetworkEndpointGroupsGetRequest("quibusdam", "dolorem", "aliquam") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "dolorum";
                alt = AltEnum.PROTO;
                callback = "eos";
                fields = "natus";
                key = "provident";
                oauthToken = "officia";
                prettyPrint = false;
                quotaUser = "aliquid";
                uploadType = "recusandae";
                uploadProtocol = "voluptas";
                userIp = "debitis";
            }};            

            ComputeNetworkEndpointGroupsGetResponse res = sdk.networkEndpointGroups.computeNetworkEndpointGroupsGet(req, new ComputeNetworkEndpointGroupsGetSecurity() {{
                option1 = new ComputeNetworkEndpointGroupsGetSecurityOption1("quam", "dolorum") {{
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
import org.openapis.openapi.models.shared.NetworkEndpointGroupNetworkEndpointTypeEnum;
import org.openapis.openapi.models.shared.NetworkEndpointGroupPscData;
import org.openapis.openapi.models.shared.NetworkEndpointGroupPscDataPscConnectionStatusEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeNetworkEndpointGroupsInsertRequest req = new ComputeNetworkEndpointGroupsInsertRequest("earum", "sapiente") {{
                dollarXgafv = XgafvEnum.ONE;
                networkEndpointGroup = new NetworkEndpointGroup() {{
                    annotations = new java.util.HashMap<String, String>() {{
                        put("quaerat", "perferendis");
                    }};
                    appEngine = new NetworkEndpointGroupAppEngine() {{
                        service = "qui";
                        urlMask = "repudiandae";
                        version = "natus";
                    }};;
                    cloudFunction = new NetworkEndpointGroupCloudFunction() {{
                        function = "modi";
                        urlMask = "ullam";
                    }};;
                    cloudRun = new NetworkEndpointGroupCloudRun() {{
                        service = "voluptatibus";
                        tag = "nemo";
                        urlMask = "dolor";
                    }};;
                    creationTimestamp = "quam";
                    defaultPort = 278459;
                    description = "consectetur";
                    id = "eveniet";
                    kind = "hic";
                    name = "Ms. Lamar Boyle";
                    network = "quia";
                    networkEndpointType = NetworkEndpointGroupNetworkEndpointTypeEnum.GCE_VM_IP_PORT;
                    pscData = new NetworkEndpointGroupPscData() {{
                        consumerPscAddress = "illo";
                        pscConnectionId = "repellat";
                        pscConnectionStatus = NetworkEndpointGroupPscDataPscConnectionStatusEnum.PENDING;
                    }};;
                    pscTargetService = "libero";
                    region = "inventore";
                    selfLink = "tenetur";
                    size = 471895;
                    subnetwork = "fugiat";
                    zone = "iste";
                }};;
                accessToken = "deserunt";
                alt = AltEnum.PROTO;
                callback = "a";
                fields = "repudiandae";
                key = "eum";
                oauthToken = "omnis";
                prettyPrint = false;
                quotaUser = "aliquid";
                requestId = "blanditiis";
                uploadType = "sed";
                uploadProtocol = "mollitia";
                userIp = "minus";
            }};            

            ComputeNetworkEndpointGroupsInsertResponse res = sdk.networkEndpointGroups.computeNetworkEndpointGroupsInsert(req, new ComputeNetworkEndpointGroupsInsertSecurity() {{
                option1 = new ComputeNetworkEndpointGroupsInsertSecurityOption1("recusandae", "recusandae") {{
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

            ComputeNetworkEndpointGroupsListRequest req = new ComputeNetworkEndpointGroupsListRequest("asperiores", "cum") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "magnam";
                alt = AltEnum.PROTO;
                callback = "voluptatum";
                fields = "maxime";
                filter = "ad";
                key = "illo";
                maxResults = 187265L;
                oauthToken = "quod";
                orderBy = "animi";
                pageToken = "id";
                prettyPrint = false;
                quotaUser = "nam";
                returnPartialSuccess = false;
                uploadType = "saepe";
                uploadProtocol = "mollitia";
                userIp = "esse";
            }};            

            ComputeNetworkEndpointGroupsListResponse res = sdk.networkEndpointGroups.computeNetworkEndpointGroupsList(req, new ComputeNetworkEndpointGroupsListSecurity() {{
                option1 = new ComputeNetworkEndpointGroupsListSecurityOption1("voluptatem", "blanditiis") {{
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
import org.openapis.openapi.models.shared.NetworkEndpointGroupsListEndpointsRequest;
import org.openapis.openapi.models.shared.NetworkEndpointGroupsListEndpointsRequestHealthStatusEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeNetworkEndpointGroupsListNetworkEndpointsRequest req = new ComputeNetworkEndpointGroupsListNetworkEndpointsRequest("voluptates", "temporibus", "corporis") {{
                dollarXgafv = XgafvEnum.ONE;
                networkEndpointGroupsListEndpointsRequest = new NetworkEndpointGroupsListEndpointsRequest() {{
                    healthStatus = NetworkEndpointGroupsListEndpointsRequestHealthStatusEnum.SKIP;
                }};;
                accessToken = "rem";
                alt = AltEnum.PROTO;
                callback = "velit";
                fields = "quas";
                filter = "veniam";
                key = "illum";
                maxResults = 287648L;
                oauthToken = "ea";
                orderBy = "aperiam";
                pageToken = "ullam";
                prettyPrint = false;
                quotaUser = "cupiditate";
                returnPartialSuccess = false;
                uploadType = "omnis";
                uploadProtocol = "quibusdam";
                userIp = "nostrum";
            }};            

            ComputeNetworkEndpointGroupsListNetworkEndpointsResponse res = sdk.networkEndpointGroups.computeNetworkEndpointGroupsListNetworkEndpoints(req, new ComputeNetworkEndpointGroupsListNetworkEndpointsSecurity() {{
                option1 = new ComputeNetworkEndpointGroupsListNetworkEndpointsSecurityOption1("impedit", "nesciunt") {{
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

            ComputeNetworkEndpointGroupsTestIamPermissionsRequest req = new ComputeNetworkEndpointGroupsTestIamPermissionsRequest("velit", "magnam", "cupiditate") {{
                dollarXgafv = XgafvEnum.ONE;
                testPermissionsRequest = new TestPermissionsRequest() {{
                    permissions = new String[]{{
                        add("eum"),
                        add("facere"),
                    }};
                }};;
                accessToken = "minima";
                alt = AltEnum.MEDIA;
                callback = "dolores";
                fields = "accusantium";
                key = "error";
                oauthToken = "officiis";
                prettyPrint = false;
                quotaUser = "perspiciatis";
                uploadType = "est";
                uploadProtocol = "eos";
                userIp = "qui";
            }};            

            ComputeNetworkEndpointGroupsTestIamPermissionsResponse res = sdk.networkEndpointGroups.computeNetworkEndpointGroupsTestIamPermissions(req, new ComputeNetworkEndpointGroupsTestIamPermissionsSecurity() {{
                option1 = new ComputeNetworkEndpointGroupsTestIamPermissionsSecurityOption1("corporis", "neque") {{
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
