# regionInstanceGroups

### Available Operations

* [computeRegionInstanceGroupsGet](#computeregioninstancegroupsget) - Returns the specified instance group resource.
* [computeRegionInstanceGroupsList](#computeregioninstancegroupslist) - Retrieves the list of instance group resources contained within the specified region.
* [computeRegionInstanceGroupsListInstances](#computeregioninstancegroupslistinstances) - Lists the instances in the specified instance group and displays information about the named ports. Depending on the specified options, this method can list all instances or only the instances that are running. The orderBy query parameter is not supported.
* [computeRegionInstanceGroupsSetNamedPorts](#computeregioninstancegroupssetnamedports) - Sets the named ports for the specified regional instance group.
* [computeRegionInstanceGroupsTestIamPermissions](#computeregioninstancegroupstestiampermissions) - Returns permissions that a caller has on the specified resource.

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

            ComputeRegionInstanceGroupsGetRequest req = new ComputeRegionInstanceGroupsGetRequest("rerum", "sed", "voluptate") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "eius";
                alt = AltEnum.JSON;
                callback = "dignissimos";
                fields = "et";
                key = "tenetur";
                oauthToken = "tempora";
                prettyPrint = false;
                quotaUser = "nihil";
                uploadType = "reprehenderit";
                uploadProtocol = "odit";
                userIp = "neque";
            }};            

            ComputeRegionInstanceGroupsGetResponse res = sdk.regionInstanceGroups.computeRegionInstanceGroupsGet(req, new ComputeRegionInstanceGroupsGetSecurity() {{
                option1 = new ComputeRegionInstanceGroupsGetSecurityOption1("possimus", "quisquam") {{
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

            ComputeRegionInstanceGroupsListRequest req = new ComputeRegionInstanceGroupsListRequest("voluptates", "quo") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "velit";
                alt = AltEnum.JSON;
                callback = "eligendi";
                fields = "maxime";
                filter = "quis";
                key = "minima";
                maxResults = 641066L;
                oauthToken = "corrupti";
                orderBy = "quas";
                pageToken = "porro";
                prettyPrint = false;
                quotaUser = "quos";
                returnPartialSuccess = false;
                uploadType = "molestiae";
                uploadProtocol = "sequi";
                userIp = "dolore";
            }};            

            ComputeRegionInstanceGroupsListResponse res = sdk.regionInstanceGroups.computeRegionInstanceGroupsList(req, new ComputeRegionInstanceGroupsListSecurity() {{
                option1 = new ComputeRegionInstanceGroupsListSecurityOption1("consequuntur", "fugiat") {{
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

            ComputeRegionInstanceGroupsListInstancesRequest req = new ComputeRegionInstanceGroupsListInstancesRequest("odio", "recusandae", "debitis") {{
                dollarXgafv = XgafvEnum.TWO;
                regionInstanceGroupsListInstancesRequest = new RegionInstanceGroupsListInstancesRequest() {{
                    instanceState = RegionInstanceGroupsListInstancesRequestInstanceStateEnum.ALL;
                    portName = "aut";
                }};;
                accessToken = "molestias";
                alt = AltEnum.JSON;
                callback = "accusantium";
                fields = "occaecati";
                filter = "sed";
                key = "quo";
                maxResults = 173484L;
                oauthToken = "odit";
                orderBy = "blanditiis";
                pageToken = "saepe";
                prettyPrint = false;
                quotaUser = "sapiente";
                returnPartialSuccess = false;
                uploadType = "voluptates";
                uploadProtocol = "occaecati";
                userIp = "minus";
            }};            

            ComputeRegionInstanceGroupsListInstancesResponse res = sdk.regionInstanceGroups.computeRegionInstanceGroupsListInstances(req, new ComputeRegionInstanceGroupsListInstancesSecurity() {{
                option1 = new ComputeRegionInstanceGroupsListInstancesSecurityOption1("tenetur", "mollitia") {{
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

            ComputeRegionInstanceGroupsSetNamedPortsRequest req = new ComputeRegionInstanceGroupsSetNamedPortsRequest("nesciunt", "nemo", "consectetur") {{
                dollarXgafv = XgafvEnum.ONE;
                regionInstanceGroupsSetNamedPortsRequest = new RegionInstanceGroupsSetNamedPortsRequest() {{
                    fingerprint = "eum";
                    namedPorts = new org.openapis.openapi.models.shared.NamedPort[]{{
                        add(new NamedPort() {{
                            name = "Leslie Weissnat";
                            port = 948029;
                        }}),
                        add(new NamedPort() {{
                            name = "Freddie Kertzmann PhD";
                            port = 54286;
                        }}),
                        add(new NamedPort() {{
                            name = "Ellen O'Reilly";
                            port = 69948;
                        }}),
                        add(new NamedPort() {{
                            name = "Jenny Littel";
                            port = 554912;
                        }}),
                    }};
                }};;
                accessToken = "quae";
                alt = AltEnum.JSON;
                callback = "eos";
                fields = "cumque";
                key = "corrupti";
                oauthToken = "quod";
                prettyPrint = false;
                quotaUser = "doloremque";
                requestId = "corporis";
                uploadType = "placeat";
                uploadProtocol = "harum";
                userIp = "nisi";
            }};            

            ComputeRegionInstanceGroupsSetNamedPortsResponse res = sdk.regionInstanceGroups.computeRegionInstanceGroupsSetNamedPorts(req, new ComputeRegionInstanceGroupsSetNamedPortsSecurity() {{
                option1 = new ComputeRegionInstanceGroupsSetNamedPortsSecurityOption1("optio", "illo") {{
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

## computeRegionInstanceGroupsTestIamPermissions

Returns permissions that a caller has on the specified resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeRegionInstanceGroupsTestIamPermissionsRequest;
import org.openapis.openapi.models.operations.ComputeRegionInstanceGroupsTestIamPermissionsResponse;
import org.openapis.openapi.models.operations.ComputeRegionInstanceGroupsTestIamPermissionsSecurity;
import org.openapis.openapi.models.operations.ComputeRegionInstanceGroupsTestIamPermissionsSecurityOption1;
import org.openapis.openapi.models.operations.ComputeRegionInstanceGroupsTestIamPermissionsSecurityOption2;
import org.openapis.openapi.models.operations.ComputeRegionInstanceGroupsTestIamPermissionsSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.TestPermissionsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeRegionInstanceGroupsTestIamPermissionsRequest req = new ComputeRegionInstanceGroupsTestIamPermissionsRequest("amet", "quibusdam", "aspernatur") {{
                dollarXgafv = XgafvEnum.ONE;
                testPermissionsRequest = new TestPermissionsRequest() {{
                    permissions = new String[]{{
                        add("magni"),
                        add("blanditiis"),
                        add("cumque"),
                        add("porro"),
                    }};
                }};;
                accessToken = "itaque";
                alt = AltEnum.MEDIA;
                callback = "accusantium";
                fields = "repudiandae";
                key = "quae";
                oauthToken = "culpa";
                prettyPrint = false;
                quotaUser = "iusto";
                uploadType = "reiciendis";
                uploadProtocol = "autem";
                userIp = "ipsum";
            }};            

            ComputeRegionInstanceGroupsTestIamPermissionsResponse res = sdk.regionInstanceGroups.computeRegionInstanceGroupsTestIamPermissions(req, new ComputeRegionInstanceGroupsTestIamPermissionsSecurity() {{
                option1 = new ComputeRegionInstanceGroupsTestIamPermissionsSecurityOption1("delectus", "deleniti") {{
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
