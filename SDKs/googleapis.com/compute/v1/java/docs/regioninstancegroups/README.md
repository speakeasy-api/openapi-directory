# regionInstanceGroups

### Available Operations

* [computeRegionInstanceGroupsGet](#computeregioninstancegroupsget) - Returns the specified instance group resource.
* [computeRegionInstanceGroupsList](#computeregioninstancegroupslist) - Retrieves the list of instance group resources contained within the specified region.
* [computeRegionInstanceGroupsListInstances](#computeregioninstancegroupslistinstances) - Lists the instances in the specified instance group and displays information about the named ports. Depending on the specified options, this method can list all instances or only the instances that are running. The orderBy query parameter is not supported.
* [computeRegionInstanceGroupsSetNamedPorts](#computeregioninstancegroupssetnamedports) - Sets the named ports for the specified regional instance group.

## computeRegionInstanceGroupsGet

Returns the specified instance group resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeRegionInstanceGroupsGetRequest;
import org.openapis.openapi.models.operations.ComputeRegionInstanceGroupsGetResponse;
import org.openapis.openapi.models.operations.ComputeRegionInstanceGroupsGetSecurity;
import org.openapis.openapi.models.operations.ComputeRegionInstanceGroupsGetSecurityOption1;
import org.openapis.openapi.models.operations.ComputeRegionInstanceGroupsGetSecurityOption2;
import org.openapis.openapi.models.operations.ComputeRegionInstanceGroupsGetSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeRegionInstanceGroupsGetRequest req = new ComputeRegionInstanceGroupsGetRequest("velit", "nihil", "delectus") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "accusantium";
                alt = AltEnum.JSON;
                callback = "quos";
                fields = "est";
                key = "culpa";
                oauthToken = "delectus";
                prettyPrint = false;
                quotaUser = "veniam";
                uploadType = "magni";
                uploadProtocol = "velit";
                userIp = "alias";
            }};            

            ComputeRegionInstanceGroupsGetResponse res = sdk.regionInstanceGroups.computeRegionInstanceGroupsGet(req, new ComputeRegionInstanceGroupsGetSecurity() {{
                option1 = new ComputeRegionInstanceGroupsGetSecurityOption1("minus", "ut") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.instanceGroup != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeRegionInstanceGroupsList

Retrieves the list of instance group resources contained within the specified region.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeRegionInstanceGroupsListRequest;
import org.openapis.openapi.models.operations.ComputeRegionInstanceGroupsListResponse;
import org.openapis.openapi.models.operations.ComputeRegionInstanceGroupsListSecurity;
import org.openapis.openapi.models.operations.ComputeRegionInstanceGroupsListSecurityOption1;
import org.openapis.openapi.models.operations.ComputeRegionInstanceGroupsListSecurityOption2;
import org.openapis.openapi.models.operations.ComputeRegionInstanceGroupsListSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeRegionInstanceGroupsListRequest req = new ComputeRegionInstanceGroupsListRequest("dolores", "esse") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "sequi";
                alt = AltEnum.PROTO;
                callback = "impedit";
                fields = "temporibus";
                filter = "non";
                key = "vel";
                maxResults = 152924L;
                oauthToken = "fuga";
                orderBy = "at";
                pageToken = "provident";
                prettyPrint = false;
                quotaUser = "eius";
                returnPartialSuccess = false;
                uploadType = "mollitia";
                uploadProtocol = "a";
                userIp = "quaerat";
            }};            

            ComputeRegionInstanceGroupsListResponse res = sdk.regionInstanceGroups.computeRegionInstanceGroupsList(req, new ComputeRegionInstanceGroupsListSecurity() {{
                option1 = new ComputeRegionInstanceGroupsListSecurityOption1("incidunt", "blanditiis") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.regionInstanceGroupList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeRegionInstanceGroupsListInstances

Lists the instances in the specified instance group and displays information about the named ports. Depending on the specified options, this method can list all instances or only the instances that are running. The orderBy query parameter is not supported.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeRegionInstanceGroupsListInstancesRequest;
import org.openapis.openapi.models.operations.ComputeRegionInstanceGroupsListInstancesResponse;
import org.openapis.openapi.models.operations.ComputeRegionInstanceGroupsListInstancesSecurity;
import org.openapis.openapi.models.operations.ComputeRegionInstanceGroupsListInstancesSecurityOption1;
import org.openapis.openapi.models.operations.ComputeRegionInstanceGroupsListInstancesSecurityOption2;
import org.openapis.openapi.models.operations.ComputeRegionInstanceGroupsListInstancesSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.RegionInstanceGroupsListInstancesRequest;
import org.openapis.openapi.models.shared.RegionInstanceGroupsListInstancesRequestInstanceStateEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeRegionInstanceGroupsListInstancesRequest req = new ComputeRegionInstanceGroupsListInstancesRequest("beatae", "illo", "atque") {{
                dollarXgafv = XgafvEnum.ONE;
                regionInstanceGroupsListInstancesRequest = new RegionInstanceGroupsListInstancesRequest() {{
                    instanceState = RegionInstanceGroupsListInstancesRequestInstanceStateEnum.ALL;
                    portName = "aliquid";
                }};;
                accessToken = "corporis";
                alt = AltEnum.JSON;
                callback = "eum";
                fields = "consequuntur";
                filter = "optio";
                key = "eos";
                maxResults = 822417L;
                oauthToken = "quos";
                orderBy = "vitae";
                pageToken = "voluptate";
                prettyPrint = false;
                quotaUser = "nemo";
                returnPartialSuccess = false;
                uploadType = "error";
                uploadProtocol = "animi";
                userIp = "maiores";
            }};            

            ComputeRegionInstanceGroupsListInstancesResponse res = sdk.regionInstanceGroups.computeRegionInstanceGroupsListInstances(req, new ComputeRegionInstanceGroupsListInstancesSecurity() {{
                option1 = new ComputeRegionInstanceGroupsListInstancesSecurityOption1("aut", "omnis") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.regionInstanceGroupsListInstances != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeRegionInstanceGroupsSetNamedPorts

Sets the named ports for the specified regional instance group.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeRegionInstanceGroupsSetNamedPortsRequest;
import org.openapis.openapi.models.operations.ComputeRegionInstanceGroupsSetNamedPortsResponse;
import org.openapis.openapi.models.operations.ComputeRegionInstanceGroupsSetNamedPortsSecurity;
import org.openapis.openapi.models.operations.ComputeRegionInstanceGroupsSetNamedPortsSecurityOption1;
import org.openapis.openapi.models.operations.ComputeRegionInstanceGroupsSetNamedPortsSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.NamedPort;
import org.openapis.openapi.models.shared.RegionInstanceGroupsSetNamedPortsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeRegionInstanceGroupsSetNamedPortsRequest req = new ComputeRegionInstanceGroupsSetNamedPortsRequest("occaecati", "dolor", "neque") {{
                dollarXgafv = XgafvEnum.ONE;
                regionInstanceGroupsSetNamedPortsRequest = new RegionInstanceGroupsSetNamedPortsRequest() {{
                    fingerprint = "ducimus";
                    namedPorts = new org.openapis.openapi.models.shared.NamedPort[]{{
                        add(new NamedPort() {{
                            name = "Salvatore Rau";
                            port = 113597;
                        }}),
                    }};
                }};;
                accessToken = "veritatis";
                alt = AltEnum.PROTO;
                callback = "sed";
                fields = "aliquid";
                key = "ex";
                oauthToken = "omnis";
                prettyPrint = false;
                quotaUser = "sapiente";
                requestId = "voluptatibus";
                uploadType = "mollitia";
                uploadProtocol = "cupiditate";
                userIp = "minus";
            }};            

            ComputeRegionInstanceGroupsSetNamedPortsResponse res = sdk.regionInstanceGroups.computeRegionInstanceGroupsSetNamedPorts(req, new ComputeRegionInstanceGroupsSetNamedPortsSecurity() {{
                option1 = new ComputeRegionInstanceGroupsSetNamedPortsSecurityOption1("praesentium", "asperiores") {{
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
