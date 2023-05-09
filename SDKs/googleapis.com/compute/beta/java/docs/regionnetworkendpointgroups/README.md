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

            ComputeRegionNetworkEndpointGroupsDeleteRequest req = new ComputeRegionNetworkEndpointGroupsDeleteRequest("alias", "minus", "cum") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "dolorem";
                alt = AltEnum.MEDIA;
                callback = "beatae";
                fields = "id";
                key = "ullam";
                oauthToken = "pariatur";
                prettyPrint = false;
                quotaUser = "corporis";
                requestId = "fuga";
                uploadType = "cum";
                uploadProtocol = "amet";
                userIp = "ipsum";
            }};            

            ComputeRegionNetworkEndpointGroupsDeleteResponse res = sdk.regionNetworkEndpointGroups.computeRegionNetworkEndpointGroupsDelete(req, new ComputeRegionNetworkEndpointGroupsDeleteSecurity() {{
                option1 = new ComputeRegionNetworkEndpointGroupsDeleteSecurityOption1("nemo", "ad") {{
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

            ComputeRegionNetworkEndpointGroupsGetRequest req = new ComputeRegionNetworkEndpointGroupsGetRequest("adipisci", "molestias", "esse") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "accusantium";
                alt = AltEnum.MEDIA;
                callback = "voluptate";
                fields = "rerum";
                key = "beatae";
                oauthToken = "culpa";
                prettyPrint = false;
                quotaUser = "omnis";
                uploadType = "harum";
                uploadProtocol = "facere";
                userIp = "doloremque";
            }};            

            ComputeRegionNetworkEndpointGroupsGetResponse res = sdk.regionNetworkEndpointGroups.computeRegionNetworkEndpointGroupsGet(req, new ComputeRegionNetworkEndpointGroupsGetSecurity() {{
                option1 = new ComputeRegionNetworkEndpointGroupsGetSecurityOption1("pariatur", "culpa") {{
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
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeRegionNetworkEndpointGroupsInsertRequest req = new ComputeRegionNetworkEndpointGroupsInsertRequest("earum", "libero") {{
                dollarXgafv = XgafvEnum.TWO;
                networkEndpointGroup = new NetworkEndpointGroup() {{
                    annotations = new java.util.HashMap<String, String>() {{
                        put("aperiam", "quos");
                        put("saepe", "consequatur");
                    }};
                    appEngine = new NetworkEndpointGroupAppEngine() {{
                        service = "atque";
                        urlMask = "accusantium";
                        version = "placeat";
                    }};;
                    cloudFunction = new NetworkEndpointGroupCloudFunction() {{
                        function = "culpa";
                        urlMask = "vel";
                    }};;
                    cloudRun = new NetworkEndpointGroupCloudRun() {{
                        service = "laborum";
                        tag = "vitae";
                        urlMask = "quidem";
                    }};;
                    creationTimestamp = "laudantium";
                    defaultPort = 487283;
                    description = "rem";
                    id = "perspiciatis";
                    kind = "iure";
                    loadBalancer = new NetworkEndpointGroupLbNetworkEndpointGroup() {{
                        defaultPort = 143911;
                        network = "sunt";
                        subnetwork = "minima";
                        zone = "accusantium";
                    }};;
                    name = "Mrs. Edward Cassin Sr.";
                    network = "harum";
                    networkEndpointType = NetworkEndpointGroupNetworkEndpointTypeEnum.SERVERLESS;
                    pscData = new NetworkEndpointGroupPscData() {{
                        consumerPscAddress = "earum";
                        pscConnectionId = "repellendus";
                        pscConnectionStatus = NetworkEndpointGroupPscDataPscConnectionStatusEnum.CLOSED;
                    }};;
                    pscTargetService = "nesciunt";
                    region = "vero";
                    selfLink = "debitis";
                    serverlessDeployment = new NetworkEndpointGroupServerlessDeployment() {{
                        platform = "rem";
                        resource = "atque";
                        urlMask = "illo";
                        version = "architecto";
                    }};;
                    size = 873477;
                    subnetwork = "quod";
                    zone = "nihil";
                }};;
                accessToken = "iste";
                alt = AltEnum.PROTO;
                callback = "quas";
                fields = "consequatur";
                key = "temporibus";
                oauthToken = "quis";
                prettyPrint = false;
                quotaUser = "quae";
                requestId = "neque";
                uploadType = "quod";
                uploadProtocol = "perferendis";
                userIp = "odit";
            }};            

            ComputeRegionNetworkEndpointGroupsInsertResponse res = sdk.regionNetworkEndpointGroups.computeRegionNetworkEndpointGroupsInsert(req, new ComputeRegionNetworkEndpointGroupsInsertSecurity() {{
                option1 = new ComputeRegionNetworkEndpointGroupsInsertSecurityOption1("quis", "eos") {{
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

            ComputeRegionNetworkEndpointGroupsListRequest req = new ComputeRegionNetworkEndpointGroupsListRequest("ducimus", "deleniti") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "vero";
                alt = AltEnum.PROTO;
                callback = "ut";
                fields = "ad";
                filter = "quisquam";
                key = "aperiam";
                maxResults = 415704L;
                oauthToken = "officia";
                orderBy = "aliquid";
                pageToken = "eveniet";
                prettyPrint = false;
                quotaUser = "architecto";
                returnPartialSuccess = false;
                uploadType = "cupiditate";
                uploadProtocol = "quibusdam";
                userIp = "adipisci";
            }};            

            ComputeRegionNetworkEndpointGroupsListResponse res = sdk.regionNetworkEndpointGroups.computeRegionNetworkEndpointGroupsList(req, new ComputeRegionNetworkEndpointGroupsListSecurity() {{
                option1 = new ComputeRegionNetworkEndpointGroupsListSecurityOption1("corrupti", "modi") {{
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
