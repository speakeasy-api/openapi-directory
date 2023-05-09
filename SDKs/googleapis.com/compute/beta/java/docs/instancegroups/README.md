# instanceGroups

### Available Operations

* [computeInstanceGroupsAddInstances](#computeinstancegroupsaddinstances) - Adds a list of instances to the specified instance group. All of the instances in the instance group must be in the same network/subnetwork. Read Adding instances for more information.
* [computeInstanceGroupsAggregatedList](#computeinstancegroupsaggregatedlist) - Retrieves the list of instance groups and sorts them by zone.
* [computeInstanceGroupsDelete](#computeinstancegroupsdelete) - Deletes the specified instance group. The instances in the group are not deleted. Note that instance group must not belong to a backend service. Read Deleting an instance group for more information.
* [computeInstanceGroupsGet](#computeinstancegroupsget) - Returns the specified zonal instance group. Get a list of available zonal instance groups by making a list() request. For managed instance groups, use the instanceGroupManagers or regionInstanceGroupManagers methods instead.
* [computeInstanceGroupsInsert](#computeinstancegroupsinsert) - Creates an instance group in the specified project using the parameters that are included in the request.
* [computeInstanceGroupsList](#computeinstancegroupslist) - Retrieves the list of zonal instance group resources contained within the specified zone. For managed instance groups, use the instanceGroupManagers or regionInstanceGroupManagers methods instead.
* [computeInstanceGroupsListInstances](#computeinstancegroupslistinstances) - Lists the instances in the specified instance group. The orderBy query parameter is not supported. The filter query parameter is supported, but only for expressions that use `eq` (equal) or `ne` (not equal) operators.
* [computeInstanceGroupsRemoveInstances](#computeinstancegroupsremoveinstances) - Removes one or more instances from the specified instance group, but does not delete those instances. If the group is part of a backend service that has enabled connection draining, it can take up to 60 seconds after the connection draining duration before the VM instance is removed or deleted.
* [computeInstanceGroupsSetNamedPorts](#computeinstancegroupssetnamedports) - Sets the named ports for the specified instance group.
* [computeInstanceGroupsTestIamPermissions](#computeinstancegroupstestiampermissions) - Returns permissions that a caller has on the specified resource.

## computeInstanceGroupsAddInstances

Adds a list of instances to the specified instance group. All of the instances in the instance group must be in the same network/subnetwork. Read Adding instances for more information.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeInstanceGroupsAddInstancesRequest;
import org.openapis.openapi.models.operations.ComputeInstanceGroupsAddInstancesResponse;
import org.openapis.openapi.models.operations.ComputeInstanceGroupsAddInstancesSecurity;
import org.openapis.openapi.models.operations.ComputeInstanceGroupsAddInstancesSecurityOption1;
import org.openapis.openapi.models.operations.ComputeInstanceGroupsAddInstancesSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.InstanceGroupsAddInstancesRequest;
import org.openapis.openapi.models.shared.InstanceReference;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeInstanceGroupsAddInstancesRequest req = new ComputeInstanceGroupsAddInstancesRequest("unde", "rem", "iure") {{
                dollarXgafv = XgafvEnum.TWO;
                instanceGroupsAddInstancesRequest = new InstanceGroupsAddInstancesRequest() {{
                    instances = new org.openapis.openapi.models.shared.InstanceReference[]{{
                        add(new InstanceReference() {{
                            instance = "natus";
                        }}),
                        add(new InstanceReference() {{
                            instance = "ad";
                        }}),
                    }};
                }};;
                accessToken = "cum";
                alt = AltEnum.PROTO;
                callback = "quod";
                fields = "nihil";
                key = "quae";
                oauthToken = "ducimus";
                prettyPrint = false;
                quotaUser = "tenetur";
                requestId = "eaque";
                uploadType = "ex";
                uploadProtocol = "rerum";
                userIp = "magni";
            }};            

            ComputeInstanceGroupsAddInstancesResponse res = sdk.instanceGroups.computeInstanceGroupsAddInstances(req, new ComputeInstanceGroupsAddInstancesSecurity() {{
                option1 = new ComputeInstanceGroupsAddInstancesSecurityOption1("laudantium", "repudiandae") {{
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

## computeInstanceGroupsAggregatedList

Retrieves the list of instance groups and sorts them by zone.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeInstanceGroupsAggregatedListRequest;
import org.openapis.openapi.models.operations.ComputeInstanceGroupsAggregatedListResponse;
import org.openapis.openapi.models.operations.ComputeInstanceGroupsAggregatedListSecurity;
import org.openapis.openapi.models.operations.ComputeInstanceGroupsAggregatedListSecurityOption1;
import org.openapis.openapi.models.operations.ComputeInstanceGroupsAggregatedListSecurityOption2;
import org.openapis.openapi.models.operations.ComputeInstanceGroupsAggregatedListSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeInstanceGroupsAggregatedListRequest req = new ComputeInstanceGroupsAggregatedListRequest("minus") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "atque";
                alt = AltEnum.MEDIA;
                callback = "eius";
                fields = "unde";
                filter = "sunt";
                includeAllScopes = false;
                key = "amet";
                maxResults = 511879L;
                oauthToken = "commodi";
                orderBy = "a";
                pageToken = "aliquid";
                prettyPrint = false;
                quotaUser = "qui";
                returnPartialSuccess = false;
                uploadType = "eligendi";
                uploadProtocol = "perspiciatis";
                userIp = "eum";
            }};            

            ComputeInstanceGroupsAggregatedListResponse res = sdk.instanceGroups.computeInstanceGroupsAggregatedList(req, new ComputeInstanceGroupsAggregatedListSecurity() {{
                option1 = new ComputeInstanceGroupsAggregatedListSecurityOption1("sint", "eligendi") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.instanceGroupAggregatedList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeInstanceGroupsDelete

Deletes the specified instance group. The instances in the group are not deleted. Note that instance group must not belong to a backend service. Read Deleting an instance group for more information.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeInstanceGroupsDeleteRequest;
import org.openapis.openapi.models.operations.ComputeInstanceGroupsDeleteResponse;
import org.openapis.openapi.models.operations.ComputeInstanceGroupsDeleteSecurity;
import org.openapis.openapi.models.operations.ComputeInstanceGroupsDeleteSecurityOption1;
import org.openapis.openapi.models.operations.ComputeInstanceGroupsDeleteSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeInstanceGroupsDeleteRequest req = new ComputeInstanceGroupsDeleteRequest("incidunt", "quisquam", "quod") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "quidem";
                alt = AltEnum.MEDIA;
                callback = "praesentium";
                fields = "totam";
                key = "error";
                oauthToken = "alias";
                prettyPrint = false;
                quotaUser = "deserunt";
                requestId = "sequi";
                uploadType = "sapiente";
                uploadProtocol = "illum";
                userIp = "nesciunt";
            }};            

            ComputeInstanceGroupsDeleteResponse res = sdk.instanceGroups.computeInstanceGroupsDelete(req, new ComputeInstanceGroupsDeleteSecurity() {{
                option1 = new ComputeInstanceGroupsDeleteSecurityOption1("optio", "corrupti") {{
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

## computeInstanceGroupsGet

Returns the specified zonal instance group. Get a list of available zonal instance groups by making a list() request. For managed instance groups, use the instanceGroupManagers or regionInstanceGroupManagers methods instead.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeInstanceGroupsGetRequest;
import org.openapis.openapi.models.operations.ComputeInstanceGroupsGetResponse;
import org.openapis.openapi.models.operations.ComputeInstanceGroupsGetSecurity;
import org.openapis.openapi.models.operations.ComputeInstanceGroupsGetSecurityOption1;
import org.openapis.openapi.models.operations.ComputeInstanceGroupsGetSecurityOption2;
import org.openapis.openapi.models.operations.ComputeInstanceGroupsGetSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeInstanceGroupsGetRequest req = new ComputeInstanceGroupsGetRequest("inventore", "quibusdam", "culpa") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "perferendis";
                alt = AltEnum.PROTO;
                callback = "deleniti";
                fields = "optio";
                key = "consequuntur";
                oauthToken = "non";
                prettyPrint = false;
                quotaUser = "fugiat";
                uploadType = "voluptatibus";
                uploadProtocol = "iste";
                userIp = "amet";
            }};            

            ComputeInstanceGroupsGetResponse res = sdk.instanceGroups.computeInstanceGroupsGet(req, new ComputeInstanceGroupsGetSecurity() {{
                option1 = new ComputeInstanceGroupsGetSecurityOption1("quae", "pariatur") {{
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

## computeInstanceGroupsInsert

Creates an instance group in the specified project using the parameters that are included in the request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeInstanceGroupsInsertRequest;
import org.openapis.openapi.models.operations.ComputeInstanceGroupsInsertResponse;
import org.openapis.openapi.models.operations.ComputeInstanceGroupsInsertSecurity;
import org.openapis.openapi.models.operations.ComputeInstanceGroupsInsertSecurityOption1;
import org.openapis.openapi.models.operations.ComputeInstanceGroupsInsertSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.InstanceGroup;
import org.openapis.openapi.models.shared.NamedPort;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeInstanceGroupsInsertRequest req = new ComputeInstanceGroupsInsertRequest("officia", "velit") {{
                dollarXgafv = XgafvEnum.TWO;
                instanceGroup = new InstanceGroup() {{
                    creationTimestamp = "facere";
                    description = "tempore";
                    fingerprint = "minima";
                    id = "vitae";
                    kind = "repellat";
                    name = "Carroll Monahan";
                    namedPorts = new org.openapis.openapi.models.shared.NamedPort[]{{
                        add(new NamedPort() {{
                            name = "Perry Gutmann";
                            port = 115879;
                        }}),
                        add(new NamedPort() {{
                            name = "Melinda Koch";
                            port = 842162;
                        }}),
                        add(new NamedPort() {{
                            name = "Geraldine Flatley MD";
                            port = 554508;
                        }}),
                        add(new NamedPort() {{
                            name = "Norma Pfannerstill";
                            port = 817054;
                        }}),
                    }};
                    network = "laboriosam";
                    region = "sint";
                    selfLink = "architecto";
                    size = 519583;
                    subnetwork = "alias";
                    zone = "hic";
                }};;
                accessToken = "tenetur";
                alt = AltEnum.MEDIA;
                callback = "consequatur";
                fields = "accusamus";
                key = "cum";
                oauthToken = "occaecati";
                prettyPrint = false;
                quotaUser = "fuga";
                requestId = "ex";
                uploadType = "autem";
                uploadProtocol = "nostrum";
                userIp = "atque";
            }};            

            ComputeInstanceGroupsInsertResponse res = sdk.instanceGroups.computeInstanceGroupsInsert(req, new ComputeInstanceGroupsInsertSecurity() {{
                option1 = new ComputeInstanceGroupsInsertSecurityOption1("saepe", "eum") {{
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

## computeInstanceGroupsList

Retrieves the list of zonal instance group resources contained within the specified zone. For managed instance groups, use the instanceGroupManagers or regionInstanceGroupManagers methods instead.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeInstanceGroupsListRequest;
import org.openapis.openapi.models.operations.ComputeInstanceGroupsListResponse;
import org.openapis.openapi.models.operations.ComputeInstanceGroupsListSecurity;
import org.openapis.openapi.models.operations.ComputeInstanceGroupsListSecurityOption1;
import org.openapis.openapi.models.operations.ComputeInstanceGroupsListSecurityOption2;
import org.openapis.openapi.models.operations.ComputeInstanceGroupsListSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeInstanceGroupsListRequest req = new ComputeInstanceGroupsListRequest("molestias", "fuga") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "nam";
                alt = AltEnum.MEDIA;
                callback = "ut";
                fields = "non";
                filter = "illum";
                key = "adipisci";
                maxResults = 519799L;
                oauthToken = "explicabo";
                orderBy = "quibusdam";
                pageToken = "harum";
                prettyPrint = false;
                quotaUser = "itaque";
                returnPartialSuccess = false;
                uploadType = "porro";
                uploadProtocol = "ducimus";
                userIp = "ad";
            }};            

            ComputeInstanceGroupsListResponse res = sdk.instanceGroups.computeInstanceGroupsList(req, new ComputeInstanceGroupsListSecurity() {{
                option1 = new ComputeInstanceGroupsListSecurityOption1("optio", "ea") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.instanceGroupList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeInstanceGroupsListInstances

Lists the instances in the specified instance group. The orderBy query parameter is not supported. The filter query parameter is supported, but only for expressions that use `eq` (equal) or `ne` (not equal) operators.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeInstanceGroupsListInstancesRequest;
import org.openapis.openapi.models.operations.ComputeInstanceGroupsListInstancesResponse;
import org.openapis.openapi.models.operations.ComputeInstanceGroupsListInstancesSecurity;
import org.openapis.openapi.models.operations.ComputeInstanceGroupsListInstancesSecurityOption1;
import org.openapis.openapi.models.operations.ComputeInstanceGroupsListInstancesSecurityOption2;
import org.openapis.openapi.models.operations.ComputeInstanceGroupsListInstancesSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.InstanceGroupsListInstancesRequest;
import org.openapis.openapi.models.shared.InstanceGroupsListInstancesRequestInstanceStateEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeInstanceGroupsListInstancesRequest req = new ComputeInstanceGroupsListInstancesRequest("corrupti", "minus", "autem") {{
                dollarXgafv = XgafvEnum.ONE;
                instanceGroupsListInstancesRequest = new InstanceGroupsListInstancesRequest() {{
                    instanceState = InstanceGroupsListInstancesRequestInstanceStateEnum.ALL;
                }};;
                accessToken = "veniam";
                alt = AltEnum.MEDIA;
                callback = "aliquam";
                fields = "suscipit";
                filter = "atque";
                key = "minus";
                maxResults = 894870L;
                oauthToken = "neque";
                orderBy = "doloremque";
                pageToken = "tempora";
                prettyPrint = false;
                quotaUser = "quibusdam";
                returnPartialSuccess = false;
                uploadType = "deleniti";
                uploadProtocol = "quas";
                userIp = "magnam";
            }};            

            ComputeInstanceGroupsListInstancesResponse res = sdk.instanceGroups.computeInstanceGroupsListInstances(req, new ComputeInstanceGroupsListInstancesSecurity() {{
                option1 = new ComputeInstanceGroupsListInstancesSecurityOption1("cupiditate", "expedita") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.instanceGroupsListInstances != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeInstanceGroupsRemoveInstances

Removes one or more instances from the specified instance group, but does not delete those instances. If the group is part of a backend service that has enabled connection draining, it can take up to 60 seconds after the connection draining duration before the VM instance is removed or deleted.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeInstanceGroupsRemoveInstancesRequest;
import org.openapis.openapi.models.operations.ComputeInstanceGroupsRemoveInstancesResponse;
import org.openapis.openapi.models.operations.ComputeInstanceGroupsRemoveInstancesSecurity;
import org.openapis.openapi.models.operations.ComputeInstanceGroupsRemoveInstancesSecurityOption1;
import org.openapis.openapi.models.operations.ComputeInstanceGroupsRemoveInstancesSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.InstanceGroupsRemoveInstancesRequest;
import org.openapis.openapi.models.shared.InstanceReference;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeInstanceGroupsRemoveInstancesRequest req = new ComputeInstanceGroupsRemoveInstancesRequest("sapiente", "deleniti", "explicabo") {{
                dollarXgafv = XgafvEnum.ONE;
                instanceGroupsRemoveInstancesRequest = new InstanceGroupsRemoveInstancesRequest() {{
                    instances = new org.openapis.openapi.models.shared.InstanceReference[]{{
                        add(new InstanceReference() {{
                            instance = "eligendi";
                        }}),
                        add(new InstanceReference() {{
                            instance = "amet";
                        }}),
                    }};
                }};;
                accessToken = "ipsum";
                alt = AltEnum.MEDIA;
                callback = "hic";
                fields = "occaecati";
                key = "iure";
                oauthToken = "libero";
                prettyPrint = false;
                quotaUser = "cum";
                requestId = "eaque";
                uploadType = "porro";
                uploadProtocol = "vel";
                userIp = "omnis";
            }};            

            ComputeInstanceGroupsRemoveInstancesResponse res = sdk.instanceGroups.computeInstanceGroupsRemoveInstances(req, new ComputeInstanceGroupsRemoveInstancesSecurity() {{
                option1 = new ComputeInstanceGroupsRemoveInstancesSecurityOption1("recusandae", "adipisci") {{
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

## computeInstanceGroupsSetNamedPorts

Sets the named ports for the specified instance group.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeInstanceGroupsSetNamedPortsRequest;
import org.openapis.openapi.models.operations.ComputeInstanceGroupsSetNamedPortsResponse;
import org.openapis.openapi.models.operations.ComputeInstanceGroupsSetNamedPortsSecurity;
import org.openapis.openapi.models.operations.ComputeInstanceGroupsSetNamedPortsSecurityOption1;
import org.openapis.openapi.models.operations.ComputeInstanceGroupsSetNamedPortsSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.InstanceGroupsSetNamedPortsRequest;
import org.openapis.openapi.models.shared.NamedPort;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeInstanceGroupsSetNamedPortsRequest req = new ComputeInstanceGroupsSetNamedPortsRequest("quam", "fugit", "facere") {{
                dollarXgafv = XgafvEnum.TWO;
                instanceGroupsSetNamedPortsRequest = new InstanceGroupsSetNamedPortsRequest() {{
                    fingerprint = "vitae";
                    namedPorts = new org.openapis.openapi.models.shared.NamedPort[]{{
                        add(new NamedPort() {{
                            name = "Amber Rice";
                            port = 985654;
                        }}),
                    }};
                }};;
                accessToken = "reprehenderit";
                alt = AltEnum.MEDIA;
                callback = "est";
                fields = "quis";
                key = "impedit";
                oauthToken = "accusantium";
                prettyPrint = false;
                quotaUser = "necessitatibus";
                requestId = "facere";
                uploadType = "reprehenderit";
                uploadProtocol = "laborum";
                userIp = "officia";
            }};            

            ComputeInstanceGroupsSetNamedPortsResponse res = sdk.instanceGroups.computeInstanceGroupsSetNamedPorts(req, new ComputeInstanceGroupsSetNamedPortsSecurity() {{
                option1 = new ComputeInstanceGroupsSetNamedPortsSecurityOption1("soluta", "suscipit") {{
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

## computeInstanceGroupsTestIamPermissions

Returns permissions that a caller has on the specified resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeInstanceGroupsTestIamPermissionsRequest;
import org.openapis.openapi.models.operations.ComputeInstanceGroupsTestIamPermissionsResponse;
import org.openapis.openapi.models.operations.ComputeInstanceGroupsTestIamPermissionsSecurity;
import org.openapis.openapi.models.operations.ComputeInstanceGroupsTestIamPermissionsSecurityOption1;
import org.openapis.openapi.models.operations.ComputeInstanceGroupsTestIamPermissionsSecurityOption2;
import org.openapis.openapi.models.operations.ComputeInstanceGroupsTestIamPermissionsSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.TestPermissionsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeInstanceGroupsTestIamPermissionsRequest req = new ComputeInstanceGroupsTestIamPermissionsRequest("explicabo", "recusandae", "unde") {{
                dollarXgafv = XgafvEnum.ONE;
                testPermissionsRequest = new TestPermissionsRequest() {{
                    permissions = new String[]{{
                        add("ea"),
                    }};
                }};;
                accessToken = "architecto";
                alt = AltEnum.PROTO;
                callback = "cum";
                fields = "alias";
                key = "quod";
                oauthToken = "veniam";
                prettyPrint = false;
                quotaUser = "corrupti";
                uploadType = "temporibus";
                uploadProtocol = "odit";
                userIp = "voluptate";
            }};            

            ComputeInstanceGroupsTestIamPermissionsResponse res = sdk.instanceGroups.computeInstanceGroupsTestIamPermissions(req, new ComputeInstanceGroupsTestIamPermissionsSecurity() {{
                option1 = new ComputeInstanceGroupsTestIamPermissionsSecurityOption1("nobis", "exercitationem") {{
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
