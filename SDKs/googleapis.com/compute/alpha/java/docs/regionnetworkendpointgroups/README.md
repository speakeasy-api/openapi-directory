# regionNetworkEndpointGroups

### Available Operations

* [computeRegionNetworkEndpointGroupsAttachNetworkEndpoints](#computeregionnetworkendpointgroupsattachnetworkendpoints) - Attach a list of network endpoints to the specified network endpoint group.
* [computeRegionNetworkEndpointGroupsDelete](#computeregionnetworkendpointgroupsdelete) - Deletes the specified network endpoint group. Note that the NEG cannot be deleted if it is configured as a backend of a backend service.
* [computeRegionNetworkEndpointGroupsDetachNetworkEndpoints](#computeregionnetworkendpointgroupsdetachnetworkendpoints) - Detach the network endpoint from the specified network endpoint group.
* [computeRegionNetworkEndpointGroupsGet](#computeregionnetworkendpointgroupsget) - Returns the specified network endpoint group.
* [computeRegionNetworkEndpointGroupsInsert](#computeregionnetworkendpointgroupsinsert) - Creates a network endpoint group in the specified project using the parameters that are included in the request.
* [computeRegionNetworkEndpointGroupsList](#computeregionnetworkendpointgroupslist) - Retrieves the list of regional network endpoint groups available to the specified project in the given region.
* [computeRegionNetworkEndpointGroupsListNetworkEndpoints](#computeregionnetworkendpointgroupslistnetworkendpoints) - Lists the network endpoints in the specified network endpoint group.

## computeRegionNetworkEndpointGroupsAttachNetworkEndpoints

Attach a list of network endpoints to the specified network endpoint group.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeRegionNetworkEndpointGroupsAttachNetworkEndpointsRequest;
import org.openapis.openapi.models.operations.ComputeRegionNetworkEndpointGroupsAttachNetworkEndpointsResponse;
import org.openapis.openapi.models.operations.ComputeRegionNetworkEndpointGroupsAttachNetworkEndpointsSecurity;
import org.openapis.openapi.models.operations.ComputeRegionNetworkEndpointGroupsAttachNetworkEndpointsSecurityOption1;
import org.openapis.openapi.models.operations.ComputeRegionNetworkEndpointGroupsAttachNetworkEndpointsSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.NetworkEndpoint;
import org.openapis.openapi.models.shared.RegionNetworkEndpointGroupsAttachEndpointsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeRegionNetworkEndpointGroupsAttachNetworkEndpointsRequest req = new ComputeRegionNetworkEndpointGroupsAttachNetworkEndpointsRequest("id", "nemo", "vero") {{
                dollarXgafv = XgafvEnum.TWO;
                regionNetworkEndpointGroupsAttachEndpointsRequest = new RegionNetworkEndpointGroupsAttachEndpointsRequest() {{
                    networkEndpoints = new org.openapis.openapi.models.shared.NetworkEndpoint[]{{
                        add(new NetworkEndpoint() {{
                            annotations = new java.util.HashMap<String, String>() {{
                                put("sint", "doloribus");
                                put("illo", "amet");
                            }};
                            fqdn = "officia";
                            instance = "a";
                            ipAddress = "possimus";
                            ipv6Address = "deserunt";
                            port = 910820;
                        }}),
                        add(new NetworkEndpoint() {{
                            annotations = new java.util.HashMap<String, String>() {{
                                put("corrupti", "velit");
                                put("numquam", "expedita");
                                put("tempore", "officia");
                                put("iste", "nemo");
                            }};
                            fqdn = "molestias";
                            instance = "nostrum";
                            ipAddress = "voluptatum";
                            ipv6Address = "aperiam";
                            port = 921153;
                        }}),
                    }};
                }};;
                accessToken = "dolor";
                alt = AltEnum.MEDIA;
                callback = "saepe";
                fields = "vero";
                key = "ullam";
                oauthToken = "eius";
                prettyPrint = false;
                quotaUser = "culpa";
                requestId = "excepturi";
                uploadType = "ex";
                uploadProtocol = "accusamus";
                userIp = "iste";
            }};            

            ComputeRegionNetworkEndpointGroupsAttachNetworkEndpointsResponse res = sdk.regionNetworkEndpointGroups.computeRegionNetworkEndpointGroupsAttachNetworkEndpoints(req, new ComputeRegionNetworkEndpointGroupsAttachNetworkEndpointsSecurity() {{
                option1 = new ComputeRegionNetworkEndpointGroupsAttachNetworkEndpointsSecurityOption1("praesentium", "eveniet") {{
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

## computeRegionNetworkEndpointGroupsDelete

Deletes the specified network endpoint group. Note that the NEG cannot be deleted if it is configured as a backend of a backend service.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeRegionNetworkEndpointGroupsDeleteRequest;
import org.openapis.openapi.models.operations.ComputeRegionNetworkEndpointGroupsDeleteResponse;
import org.openapis.openapi.models.operations.ComputeRegionNetworkEndpointGroupsDeleteSecurity;
import org.openapis.openapi.models.operations.ComputeRegionNetworkEndpointGroupsDeleteSecurityOption1;
import org.openapis.openapi.models.operations.ComputeRegionNetworkEndpointGroupsDeleteSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeRegionNetworkEndpointGroupsDeleteRequest req = new ComputeRegionNetworkEndpointGroupsDeleteRequest("possimus", "unde", "est") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "saepe";
                alt = AltEnum.JSON;
                callback = "optio";
                fields = "quaerat";
                key = "ad";
                oauthToken = "doloribus";
                prettyPrint = false;
                quotaUser = "soluta";
                requestId = "unde";
                uploadType = "libero";
                uploadProtocol = "dolore";
                userIp = "unde";
            }};            

            ComputeRegionNetworkEndpointGroupsDeleteResponse res = sdk.regionNetworkEndpointGroups.computeRegionNetworkEndpointGroupsDelete(req, new ComputeRegionNetworkEndpointGroupsDeleteSecurity() {{
                option1 = new ComputeRegionNetworkEndpointGroupsDeleteSecurityOption1("quo", "deleniti") {{
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

## computeRegionNetworkEndpointGroupsDetachNetworkEndpoints

Detach the network endpoint from the specified network endpoint group.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeRegionNetworkEndpointGroupsDetachNetworkEndpointsRequest;
import org.openapis.openapi.models.operations.ComputeRegionNetworkEndpointGroupsDetachNetworkEndpointsResponse;
import org.openapis.openapi.models.operations.ComputeRegionNetworkEndpointGroupsDetachNetworkEndpointsSecurity;
import org.openapis.openapi.models.operations.ComputeRegionNetworkEndpointGroupsDetachNetworkEndpointsSecurityOption1;
import org.openapis.openapi.models.operations.ComputeRegionNetworkEndpointGroupsDetachNetworkEndpointsSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.NetworkEndpoint;
import org.openapis.openapi.models.shared.RegionNetworkEndpointGroupsDetachEndpointsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeRegionNetworkEndpointGroupsDetachNetworkEndpointsRequest req = new ComputeRegionNetworkEndpointGroupsDetachNetworkEndpointsRequest("nam", "aliquid", "hic") {{
                dollarXgafv = XgafvEnum.TWO;
                regionNetworkEndpointGroupsDetachEndpointsRequest = new RegionNetworkEndpointGroupsDetachEndpointsRequest() {{
                    networkEndpoints = new org.openapis.openapi.models.shared.NetworkEndpoint[]{{
                        add(new NetworkEndpoint() {{
                            annotations = new java.util.HashMap<String, String>() {{
                                put("eligendi", "amet");
                            }};
                            fqdn = "accusantium";
                            instance = "a";
                            ipAddress = "sit";
                            ipv6Address = "consequatur";
                            port = 845395;
                        }}),
                        add(new NetworkEndpoint() {{
                            annotations = new java.util.HashMap<String, String>() {{
                                put("placeat", "iusto");
                                put("repellat", "amet");
                                put("corrupti", "expedita");
                            }};
                            fqdn = "sunt";
                            instance = "magni";
                            ipAddress = "doloremque";
                            ipv6Address = "odio";
                            port = 542805;
                        }}),
                        add(new NetworkEndpoint() {{
                            annotations = new java.util.HashMap<String, String>() {{
                                put("et", "nisi");
                                put("recusandae", "pariatur");
                                put("sequi", "suscipit");
                            }};
                            fqdn = "cum";
                            instance = "ab";
                            ipAddress = "soluta";
                            ipv6Address = "quo";
                            port = 175005;
                        }}),
                        add(new NetworkEndpoint() {{
                            annotations = new java.util.HashMap<String, String>() {{
                                put("dolorum", "aperiam");
                            }};
                            fqdn = "adipisci";
                            instance = "velit";
                            ipAddress = "eum";
                            ipv6Address = "laboriosam";
                            port = 645772;
                        }}),
                    }};
                }};;
                accessToken = "maxime";
                alt = AltEnum.PROTO;
                callback = "cupiditate";
                fields = "ab";
                key = "nostrum";
                oauthToken = "perferendis";
                prettyPrint = false;
                quotaUser = "porro";
                requestId = "nostrum";
                uploadType = "vitae";
                uploadProtocol = "libero";
                userIp = "nesciunt";
            }};            

            ComputeRegionNetworkEndpointGroupsDetachNetworkEndpointsResponse res = sdk.regionNetworkEndpointGroups.computeRegionNetworkEndpointGroupsDetachNetworkEndpoints(req, new ComputeRegionNetworkEndpointGroupsDetachNetworkEndpointsSecurity() {{
                option1 = new ComputeRegionNetworkEndpointGroupsDetachNetworkEndpointsSecurityOption1("consectetur", "dolore") {{
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

## computeRegionNetworkEndpointGroupsGet

Returns the specified network endpoint group.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeRegionNetworkEndpointGroupsGetRequest;
import org.openapis.openapi.models.operations.ComputeRegionNetworkEndpointGroupsGetResponse;
import org.openapis.openapi.models.operations.ComputeRegionNetworkEndpointGroupsGetSecurity;
import org.openapis.openapi.models.operations.ComputeRegionNetworkEndpointGroupsGetSecurityOption1;
import org.openapis.openapi.models.operations.ComputeRegionNetworkEndpointGroupsGetSecurityOption2;
import org.openapis.openapi.models.operations.ComputeRegionNetworkEndpointGroupsGetSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeRegionNetworkEndpointGroupsGetRequest req = new ComputeRegionNetworkEndpointGroupsGetRequest("ducimus", "voluptatum", "ab") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "quod";
                alt = AltEnum.PROTO;
                callback = "est";
                fields = "sequi";
                key = "necessitatibus";
                oauthToken = "dolorum";
                prettyPrint = false;
                quotaUser = "saepe";
                uploadType = "magnam";
                uploadProtocol = "tempore";
                userIp = "ullam";
            }};            

            ComputeRegionNetworkEndpointGroupsGetResponse res = sdk.regionNetworkEndpointGroups.computeRegionNetworkEndpointGroupsGet(req, new ComputeRegionNetworkEndpointGroupsGetSecurity() {{
                option1 = new ComputeRegionNetworkEndpointGroupsGetSecurityOption1("blanditiis", "provident") {{
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

## computeRegionNetworkEndpointGroupsInsert

Creates a network endpoint group in the specified project using the parameters that are included in the request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeRegionNetworkEndpointGroupsInsertRequest;
import org.openapis.openapi.models.operations.ComputeRegionNetworkEndpointGroupsInsertResponse;
import org.openapis.openapi.models.operations.ComputeRegionNetworkEndpointGroupsInsertSecurity;
import org.openapis.openapi.models.operations.ComputeRegionNetworkEndpointGroupsInsertSecurityOption1;
import org.openapis.openapi.models.operations.ComputeRegionNetworkEndpointGroupsInsertSecurityOption2;
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

            ComputeRegionNetworkEndpointGroupsInsertRequest req = new ComputeRegionNetworkEndpointGroupsInsertRequest("repellat", "accusamus") {{
                dollarXgafv = XgafvEnum.TWO;
                networkEndpointGroup = new NetworkEndpointGroup() {{
                    annotations = new java.util.HashMap<String, String>() {{
                        put("eum", "dolores");
                        put("et", "accusamus");
                        put("praesentium", "perferendis");
                        put("provident", "neque");
                    }};
                    appEngine = new NetworkEndpointGroupAppEngine() {{
                        service = "repellat";
                        urlMask = "eius";
                        version = "placeat";
                    }};;
                    cloudFunction = new NetworkEndpointGroupCloudFunction() {{
                        function = "repellat";
                        urlMask = "consequuntur";
                    }};;
                    cloudRun = new NetworkEndpointGroupCloudRun() {{
                        service = "autem";
                        tag = "hic";
                        urlMask = "ad";
                    }};;
                    creationTimestamp = "enim";
                    defaultPort = 112134;
                    description = "recusandae";
                    id = "ut";
                    kind = "cupiditate";
                    loadBalancer = new NetworkEndpointGroupLbNetworkEndpointGroup() {{
                        defaultPort = 640139;
                        network = "omnis";
                        subnetwork = "quae";
                        zone = "pariatur";
                    }};;
                    name = "Bethany Crona";
                    network = "nobis";
                    networkEndpointType = NetworkEndpointGroupNetworkEndpointTypeEnum.INTERNET_IP_PORT;
                    pscData = new NetworkEndpointGroupPscData() {{
                        consumerPscAddress = "quas";
                        pscConnectionId = "recusandae";
                        pscConnectionStatus = NetworkEndpointGroupPscDataPscConnectionStatusEnum.ACCEPTED;
                    }};;
                    pscTargetService = "molestias";
                    region = "error";
                    selfLink = "explicabo";
                    selfLinkWithId = "quisquam";
                    serverlessDeployment = new NetworkEndpointGroupServerlessDeployment() {{
                        platform = "laboriosam";
                        resource = "vitae";
                        urlMask = "iusto";
                        version = "nulla";
                    }};;
                    size = 279529;
                    subnetwork = "alias";
                    type = NetworkEndpointGroupTypeEnum.LOAD_BALANCING;
                    zone = "ratione";
                }};;
                accessToken = "minima";
                alt = AltEnum.JSON;
                callback = "praesentium";
                fields = "incidunt";
                key = "optio";
                oauthToken = "ipsam";
                prettyPrint = false;
                quotaUser = "labore";
                requestId = "laboriosam";
                uploadType = "quia";
                uploadProtocol = "hic";
                userIp = "voluptatem";
            }};            

            ComputeRegionNetworkEndpointGroupsInsertResponse res = sdk.regionNetworkEndpointGroups.computeRegionNetworkEndpointGroupsInsert(req, new ComputeRegionNetworkEndpointGroupsInsertSecurity() {{
                option1 = new ComputeRegionNetworkEndpointGroupsInsertSecurityOption1("corporis", "molestias") {{
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

## computeRegionNetworkEndpointGroupsList

Retrieves the list of regional network endpoint groups available to the specified project in the given region.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeRegionNetworkEndpointGroupsListRequest;
import org.openapis.openapi.models.operations.ComputeRegionNetworkEndpointGroupsListResponse;
import org.openapis.openapi.models.operations.ComputeRegionNetworkEndpointGroupsListSecurity;
import org.openapis.openapi.models.operations.ComputeRegionNetworkEndpointGroupsListSecurityOption1;
import org.openapis.openapi.models.operations.ComputeRegionNetworkEndpointGroupsListSecurityOption2;
import org.openapis.openapi.models.operations.ComputeRegionNetworkEndpointGroupsListSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeRegionNetworkEndpointGroupsListRequest req = new ComputeRegionNetworkEndpointGroupsListRequest("facere", "illo") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "totam";
                alt = AltEnum.PROTO;
                callback = "repudiandae";
                fields = "rerum";
                filter = "tempora";
                key = "iure";
                maxResults = 576407L;
                oauthToken = "amet";
                orderBy = "consequatur";
                pageToken = "omnis";
                prettyPrint = false;
                quotaUser = "possimus";
                returnPartialSuccess = false;
                uploadType = "natus";
                uploadProtocol = "debitis";
                userIp = "molestiae";
            }};            

            ComputeRegionNetworkEndpointGroupsListResponse res = sdk.regionNetworkEndpointGroups.computeRegionNetworkEndpointGroupsList(req, new ComputeRegionNetworkEndpointGroupsListSecurity() {{
                option1 = new ComputeRegionNetworkEndpointGroupsListSecurityOption1("quisquam", "voluptate") {{
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

## computeRegionNetworkEndpointGroupsListNetworkEndpoints

Lists the network endpoints in the specified network endpoint group.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeRegionNetworkEndpointGroupsListNetworkEndpointsRequest;
import org.openapis.openapi.models.operations.ComputeRegionNetworkEndpointGroupsListNetworkEndpointsResponse;
import org.openapis.openapi.models.operations.ComputeRegionNetworkEndpointGroupsListNetworkEndpointsSecurity;
import org.openapis.openapi.models.operations.ComputeRegionNetworkEndpointGroupsListNetworkEndpointsSecurityOption1;
import org.openapis.openapi.models.operations.ComputeRegionNetworkEndpointGroupsListNetworkEndpointsSecurityOption2;
import org.openapis.openapi.models.operations.ComputeRegionNetworkEndpointGroupsListNetworkEndpointsSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeRegionNetworkEndpointGroupsListNetworkEndpointsRequest req = new ComputeRegionNetworkEndpointGroupsListNetworkEndpointsRequest("voluptates", "eos", "iure") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "ad";
                alt = AltEnum.JSON;
                callback = "perferendis";
                fields = "reiciendis";
                filter = "qui";
                key = "adipisci";
                maxResults = 596184L;
                oauthToken = "dicta";
                orderBy = "placeat";
                pageToken = "itaque";
                prettyPrint = false;
                quotaUser = "libero";
                returnPartialSuccess = false;
                uploadType = "non";
                uploadProtocol = "tempora";
                userIp = "temporibus";
            }};            

            ComputeRegionNetworkEndpointGroupsListNetworkEndpointsResponse res = sdk.regionNetworkEndpointGroups.computeRegionNetworkEndpointGroupsListNetworkEndpoints(req, new ComputeRegionNetworkEndpointGroupsListNetworkEndpointsSecurity() {{
                option1 = new ComputeRegionNetworkEndpointGroupsListNetworkEndpointsSecurityOption1("adipisci", "accusantium") {{
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
