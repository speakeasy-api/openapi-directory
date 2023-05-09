# regionNetworkEndpointGroups

### Available Operations

* [computeRegionNetworkEndpointGroupsDelete](#computeregionnetworkendpointgroupsdelete) - Deletes the specified network endpoint group. Note that the NEG cannot be deleted if it is configured as a backend of a backend service.
* [computeRegionNetworkEndpointGroupsGet](#computeregionnetworkendpointgroupsget) - Returns the specified network endpoint group.
* [computeRegionNetworkEndpointGroupsInsert](#computeregionnetworkendpointgroupsinsert) - Creates a network endpoint group in the specified project using the parameters that are included in the request.
* [computeRegionNetworkEndpointGroupsList](#computeregionnetworkendpointgroupslist) - Retrieves the list of regional network endpoint groups available to the specified project in the given region.

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

            ComputeRegionNetworkEndpointGroupsDeleteRequest req = new ComputeRegionNetworkEndpointGroupsDeleteRequest("adipisci", "hic", "velit") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "earum";
                alt = AltEnum.PROTO;
                callback = "est";
                fields = "qui";
                key = "consectetur";
                oauthToken = "quaerat";
                prettyPrint = false;
                quotaUser = "magni";
                requestId = "expedita";
                uploadType = "aperiam";
                uploadProtocol = "consequatur";
                userIp = "ut";
            }};            

            ComputeRegionNetworkEndpointGroupsDeleteResponse res = sdk.regionNetworkEndpointGroups.computeRegionNetworkEndpointGroupsDelete(req, new ComputeRegionNetworkEndpointGroupsDeleteSecurity() {{
                option1 = new ComputeRegionNetworkEndpointGroupsDeleteSecurityOption1("sint", "quis") {{
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

            ComputeRegionNetworkEndpointGroupsGetRequest req = new ComputeRegionNetworkEndpointGroupsGetRequest("eos", "ut", "temporibus") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "similique";
                alt = AltEnum.MEDIA;
                callback = "culpa";
                fields = "architecto";
                key = "voluptate";
                oauthToken = "mollitia";
                prettyPrint = false;
                quotaUser = "blanditiis";
                uploadType = "quaerat";
                uploadProtocol = "reiciendis";
                userIp = "cum";
            }};            

            ComputeRegionNetworkEndpointGroupsGetResponse res = sdk.regionNetworkEndpointGroups.computeRegionNetworkEndpointGroupsGet(req, new ComputeRegionNetworkEndpointGroupsGetSecurity() {{
                option1 = new ComputeRegionNetworkEndpointGroupsGetSecurityOption1("expedita", "odio") {{
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
import org.openapis.openapi.models.shared.NetworkEndpointGroupNetworkEndpointTypeEnum;
import org.openapis.openapi.models.shared.NetworkEndpointGroupPscData;
import org.openapis.openapi.models.shared.NetworkEndpointGroupPscDataPscConnectionStatusEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeRegionNetworkEndpointGroupsInsertRequest req = new ComputeRegionNetworkEndpointGroupsInsertRequest("unde", "odit") {{
                dollarXgafv = XgafvEnum.TWO;
                networkEndpointGroup = new NetworkEndpointGroup() {{
                    annotations = new java.util.HashMap<String, String>() {{
                        put("libero", "quos");
                    }};
                    appEngine = new NetworkEndpointGroupAppEngine() {{
                        service = "vitae";
                        urlMask = "ut";
                        version = "doloribus";
                    }};;
                    cloudFunction = new NetworkEndpointGroupCloudFunction() {{
                        function = "suscipit";
                        urlMask = "dicta";
                    }};;
                    cloudRun = new NetworkEndpointGroupCloudRun() {{
                        service = "porro";
                        tag = "cumque";
                        urlMask = "quas";
                    }};;
                    creationTimestamp = "fugiat";
                    defaultPort = 877261;
                    description = "totam";
                    id = "harum";
                    kind = "doloremque";
                    name = "Karla Bradtke";
                    network = "beatae";
                    networkEndpointType = NetworkEndpointGroupNetworkEndpointTypeEnum.INTERNET_IP_PORT;
                    pscData = new NetworkEndpointGroupPscData() {{
                        consumerPscAddress = "corporis";
                        pscConnectionId = "tempore";
                        pscConnectionStatus = NetworkEndpointGroupPscDataPscConnectionStatusEnum.REJECTED;
                    }};;
                    pscTargetService = "quos";
                    region = "tempore";
                    selfLink = "doloribus";
                    size = 951393;
                    subnetwork = "maiores";
                    zone = "aliquam";
                }};;
                accessToken = "tempora";
                alt = AltEnum.PROTO;
                callback = "minus";
                fields = "rem";
                key = "cumque";
                oauthToken = "aliquam";
                prettyPrint = false;
                quotaUser = "temporibus";
                requestId = "sapiente";
                uploadType = "autem";
                uploadProtocol = "et";
                userIp = "recusandae";
            }};            

            ComputeRegionNetworkEndpointGroupsInsertResponse res = sdk.regionNetworkEndpointGroups.computeRegionNetworkEndpointGroupsInsert(req, new ComputeRegionNetworkEndpointGroupsInsertSecurity() {{
                option1 = new ComputeRegionNetworkEndpointGroupsInsertSecurityOption1("error", "voluptas") {{
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

            ComputeRegionNetworkEndpointGroupsListRequest req = new ComputeRegionNetworkEndpointGroupsListRequest("aut", "expedita") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "unde";
                alt = AltEnum.PROTO;
                callback = "nemo";
                fields = "accusamus";
                filter = "amet";
                key = "veritatis";
                maxResults = 685354L;
                oauthToken = "veritatis";
                orderBy = "saepe";
                pageToken = "adipisci";
                prettyPrint = false;
                quotaUser = "aliquid";
                returnPartialSuccess = false;
                uploadType = "eaque";
                uploadProtocol = "quasi";
                userIp = "deserunt";
            }};            

            ComputeRegionNetworkEndpointGroupsListResponse res = sdk.regionNetworkEndpointGroups.computeRegionNetworkEndpointGroupsList(req, new ComputeRegionNetworkEndpointGroupsListSecurity() {{
                option1 = new ComputeRegionNetworkEndpointGroupsListSecurityOption1("ut", "pariatur") {{
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
