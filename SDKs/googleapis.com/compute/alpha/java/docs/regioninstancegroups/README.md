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

            ComputeRegionInstanceGroupsGetRequest req = new ComputeRegionInstanceGroupsGetRequest("esse", "cum", "voluptatum") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "quaerat";
                alt = AltEnum.PROTO;
                callback = "veritatis";
                fields = "incidunt";
                key = "culpa";
                oauthToken = "omnis";
                prettyPrint = false;
                quotaUser = "nobis";
                uploadType = "sint";
                uploadProtocol = "autem";
                userIp = "ut";
            }};            

            ComputeRegionInstanceGroupsGetResponse res = sdk.regionInstanceGroups.computeRegionInstanceGroupsGet(req, new ComputeRegionInstanceGroupsGetSecurity() {{
                option1 = new ComputeRegionInstanceGroupsGetSecurityOption1("eum", "ab") {{
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

            ComputeRegionInstanceGroupsListRequest req = new ComputeRegionInstanceGroupsListRequest("architecto", "deserunt") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "voluptates";
                alt = AltEnum.PROTO;
                callback = "ullam";
                fields = "ab";
                filter = "occaecati";
                key = "labore";
                maxResults = 224360L;
                oauthToken = "soluta";
                orderBy = "molestias";
                pageToken = "distinctio";
                prettyPrint = false;
                quotaUser = "eius";
                returnPartialSuccess = false;
                uploadType = "ipsa";
                uploadProtocol = "delectus";
                userIp = "eos";
            }};            

            ComputeRegionInstanceGroupsListResponse res = sdk.regionInstanceGroups.computeRegionInstanceGroupsList(req, new ComputeRegionInstanceGroupsListSecurity() {{
                option1 = new ComputeRegionInstanceGroupsListSecurityOption1("quasi", "vero") {{
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

            ComputeRegionInstanceGroupsListInstancesRequest req = new ComputeRegionInstanceGroupsListInstancesRequest("nostrum", "alias", "eius") {{
                dollarXgafv = XgafvEnum.ONE;
                regionInstanceGroupsListInstancesRequest = new RegionInstanceGroupsListInstancesRequest() {{
                    instanceState = RegionInstanceGroupsListInstancesRequestInstanceStateEnum.ALL;
                    portName = "voluptatibus";
                }};;
                accessToken = "rem";
                alt = AltEnum.PROTO;
                callback = "autem";
                fields = "perspiciatis";
                filter = "animi";
                key = "fuga";
                maxResults = 789100L;
                oauthToken = "accusantium";
                orderBy = "eos";
                pageToken = "cumque";
                prettyPrint = false;
                quotaUser = "perferendis";
                returnPartialSuccess = false;
                uploadType = "facilis";
                uploadProtocol = "earum";
                userIp = "ipsum";
            }};            

            ComputeRegionInstanceGroupsListInstancesResponse res = sdk.regionInstanceGroups.computeRegionInstanceGroupsListInstances(req, new ComputeRegionInstanceGroupsListInstancesSecurity() {{
                option1 = new ComputeRegionInstanceGroupsListInstancesSecurityOption1("nemo", "assumenda") {{
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

            ComputeRegionInstanceGroupsSetNamedPortsRequest req = new ComputeRegionInstanceGroupsSetNamedPortsRequest("provident", "fugit", "quia") {{
                dollarXgafv = XgafvEnum.ONE;
                regionInstanceGroupsSetNamedPortsRequest = new RegionInstanceGroupsSetNamedPortsRequest() {{
                    fingerprint = "impedit";
                    namedPorts = new org.openapis.openapi.models.shared.NamedPort[]{{
                        add(new NamedPort() {{
                            name = "Lori Ortiz";
                            port = 700657;
                        }}),
                        add(new NamedPort() {{
                            name = "Homer Christiansen";
                            port = 664550;
                        }}),
                        add(new NamedPort() {{
                            name = "Christian Cruickshank";
                            port = 434923;
                        }}),
                        add(new NamedPort() {{
                            name = "Edwin Breitenberg DDS";
                            port = 190226;
                        }}),
                    }};
                }};;
                accessToken = "voluptates";
                alt = AltEnum.JSON;
                callback = "quos";
                fields = "excepturi";
                key = "illo";
                oauthToken = "fuga";
                prettyPrint = false;
                quotaUser = "modi";
                requestId = "consequatur";
                uploadType = "quia";
                uploadProtocol = "in";
                userIp = "occaecati";
            }};            

            ComputeRegionInstanceGroupsSetNamedPortsResponse res = sdk.regionInstanceGroups.computeRegionInstanceGroupsSetNamedPorts(req, new ComputeRegionInstanceGroupsSetNamedPortsSecurity() {{
                option1 = new ComputeRegionInstanceGroupsSetNamedPortsSecurityOption1("ipsam", "nulla") {{
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

            ComputeRegionInstanceGroupsTestIamPermissionsRequest req = new ComputeRegionInstanceGroupsTestIamPermissionsRequest("cumque", "nisi", "porro") {{
                dollarXgafv = XgafvEnum.TWO;
                testPermissionsRequest = new TestPermissionsRequest() {{
                    permissions = new String[]{{
                        add("dignissimos"),
                        add("alias"),
                        add("consectetur"),
                    }};
                }};;
                accessToken = "ratione";
                alt = AltEnum.PROTO;
                callback = "consequatur";
                fields = "eum";
                key = "asperiores";
                oauthToken = "dignissimos";
                prettyPrint = false;
                quotaUser = "earum";
                uploadType = "minima";
                uploadProtocol = "totam";
                userIp = "repudiandae";
            }};            

            ComputeRegionInstanceGroupsTestIamPermissionsResponse res = sdk.regionInstanceGroups.computeRegionInstanceGroupsTestIamPermissions(req, new ComputeRegionInstanceGroupsTestIamPermissionsSecurity() {{
                option1 = new ComputeRegionInstanceGroupsTestIamPermissionsSecurityOption1("dolor", "odio") {{
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
