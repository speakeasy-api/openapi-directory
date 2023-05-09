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

            ComputeInstanceGroupsAddInstancesRequest req = new ComputeInstanceGroupsAddInstancesRequest("maxime", "voluptatum", "dolor") {{
                dollarXgafv = XgafvEnum.ONE;
                instanceGroupsAddInstancesRequest = new InstanceGroupsAddInstancesRequest() {{
                    instances = new org.openapis.openapi.models.shared.InstanceReference[]{{
                        add(new InstanceReference() {{
                            instance = "asperiores";
                        }}),
                        add(new InstanceReference() {{
                            instance = "facere";
                        }}),
                    }};
                }};;
                accessToken = "maxime";
                alt = AltEnum.PROTO;
                callback = "architecto";
                fields = "neque";
                key = "veniam";
                oauthToken = "nemo";
                prettyPrint = false;
                quotaUser = "voluptatum";
                requestId = "quia";
                uploadType = "quisquam";
                uploadProtocol = "et";
                userIp = "expedita";
            }};            

            ComputeInstanceGroupsAddInstancesResponse res = sdk.instanceGroups.computeInstanceGroupsAddInstances(req, new ComputeInstanceGroupsAddInstancesSecurity() {{
                option1 = new ComputeInstanceGroupsAddInstancesSecurityOption1("quos", "veniam") {{
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

            ComputeInstanceGroupsAggregatedListRequest req = new ComputeInstanceGroupsAggregatedListRequest("ad") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "laudantium";
                alt = AltEnum.MEDIA;
                callback = "cupiditate";
                fields = "fugiat";
                filter = "omnis";
                includeAllScopes = false;
                key = "officiis";
                maxResults = 940766L;
                oauthToken = "error";
                orderBy = "consectetur";
                pageToken = "fugit";
                prettyPrint = false;
                quotaUser = "necessitatibus";
                returnPartialSuccess = false;
                uploadType = "omnis";
                uploadProtocol = "eaque";
                userIp = "perferendis";
            }};            

            ComputeInstanceGroupsAggregatedListResponse res = sdk.instanceGroups.computeInstanceGroupsAggregatedList(req, new ComputeInstanceGroupsAggregatedListSecurity() {{
                option1 = new ComputeInstanceGroupsAggregatedListSecurityOption1("voluptatem", "culpa") {{
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

            ComputeInstanceGroupsDeleteRequest req = new ComputeInstanceGroupsDeleteRequest("beatae", "nesciunt", "deserunt") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "voluptatum";
                alt = AltEnum.JSON;
                callback = "consequuntur";
                fields = "dolore";
                key = "fugit";
                oauthToken = "alias";
                prettyPrint = false;
                quotaUser = "voluptatum";
                requestId = "voluptates";
                uploadType = "sapiente";
                uploadProtocol = "at";
                userIp = "qui";
            }};            

            ComputeInstanceGroupsDeleteResponse res = sdk.instanceGroups.computeInstanceGroupsDelete(req, new ComputeInstanceGroupsDeleteSecurity() {{
                option1 = new ComputeInstanceGroupsDeleteSecurityOption1("consectetur", "eius") {{
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

            ComputeInstanceGroupsGetRequest req = new ComputeInstanceGroupsGetRequest("dicta", "dicta", "deleniti") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "rem";
                alt = AltEnum.PROTO;
                callback = "quam";
                fields = "adipisci";
                key = "praesentium";
                oauthToken = "nihil";
                prettyPrint = false;
                quotaUser = "unde";
                uploadType = "eveniet";
                uploadProtocol = "tenetur";
                userIp = "facilis";
            }};            

            ComputeInstanceGroupsGetResponse res = sdk.instanceGroups.computeInstanceGroupsGet(req, new ComputeInstanceGroupsGetSecurity() {{
                option1 = new ComputeInstanceGroupsGetSecurityOption1("eveniet", "voluptatum") {{
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

            ComputeInstanceGroupsInsertRequest req = new ComputeInstanceGroupsInsertRequest("rerum", "officia") {{
                dollarXgafv = XgafvEnum.TWO;
                instanceGroup = new InstanceGroup() {{
                    creationTimestamp = "tempore";
                    description = "mollitia";
                    fingerprint = "libero";
                    id = "tempore";
                    kind = "odio";
                    name = "Alexander Hirthe";
                    namedPorts = new org.openapis.openapi.models.shared.NamedPort[]{{
                        add(new NamedPort() {{
                            name = "Jeffrey Frami MD";
                            port = 696544;
                        }}),
                        add(new NamedPort() {{
                            name = "Lonnie Kemmer III";
                            port = 139528;
                        }}),
                        add(new NamedPort() {{
                            name = "Melody Kreiger";
                            port = 339551;
                        }}),
                        add(new NamedPort() {{
                            name = "Glen Ebert";
                            port = 683057;
                        }}),
                    }};
                    network = "odio";
                    region = "unde";
                    selfLink = "sapiente";
                    selfLinkWithId = "ab";
                    size = 370867;
                    subnetwork = "quia";
                    zone = "voluptate";
                }};;
                accessToken = "ab";
                alt = AltEnum.PROTO;
                callback = "accusantium";
                fields = "et";
                key = "quo";
                oauthToken = "alias";
                prettyPrint = false;
                quotaUser = "illum";
                requestId = "neque";
                uploadType = "commodi";
                uploadProtocol = "veritatis";
                userIp = "reiciendis";
            }};            

            ComputeInstanceGroupsInsertResponse res = sdk.instanceGroups.computeInstanceGroupsInsert(req, new ComputeInstanceGroupsInsertSecurity() {{
                option1 = new ComputeInstanceGroupsInsertSecurityOption1("debitis", "pariatur") {{
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

            ComputeInstanceGroupsListRequest req = new ComputeInstanceGroupsListRequest("blanditiis", "nulla") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "nemo";
                alt = AltEnum.PROTO;
                callback = "a";
                fields = "a";
                filter = "nobis";
                key = "quaerat";
                maxResults = 353692L;
                oauthToken = "velit";
                orderBy = "officiis";
                pageToken = "perspiciatis";
                prettyPrint = false;
                quotaUser = "alias";
                returnPartialSuccess = false;
                uploadType = "quas";
                uploadProtocol = "sint";
                userIp = "necessitatibus";
            }};            

            ComputeInstanceGroupsListResponse res = sdk.instanceGroups.computeInstanceGroupsList(req, new ComputeInstanceGroupsListSecurity() {{
                option1 = new ComputeInstanceGroupsListSecurityOption1("totam", "reprehenderit") {{
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

            ComputeInstanceGroupsListInstancesRequest req = new ComputeInstanceGroupsListInstancesRequest("inventore", "asperiores", "nulla") {{
                dollarXgafv = XgafvEnum.TWO;
                instanceGroupsListInstancesRequest = new InstanceGroupsListInstancesRequest() {{
                    instanceState = InstanceGroupsListInstancesRequestInstanceStateEnum.ALL;
                }};;
                accessToken = "at";
                alt = AltEnum.MEDIA;
                callback = "perspiciatis";
                fields = "molestiae";
                filter = "tempore";
                key = "facere";
                maxResults = 870071L;
                oauthToken = "perspiciatis";
                orderBy = "quisquam";
                pageToken = "molestias";
                prettyPrint = false;
                quotaUser = "corrupti";
                returnPartialSuccess = false;
                uploadType = "corporis";
                uploadProtocol = "repudiandae";
                userIp = "incidunt";
            }};            

            ComputeInstanceGroupsListInstancesResponse res = sdk.instanceGroups.computeInstanceGroupsListInstances(req, new ComputeInstanceGroupsListInstancesSecurity() {{
                option1 = new ComputeInstanceGroupsListInstancesSecurityOption1("neque", "iusto") {{
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

            ComputeInstanceGroupsRemoveInstancesRequest req = new ComputeInstanceGroupsRemoveInstancesRequest("adipisci", "numquam", "officia") {{
                dollarXgafv = XgafvEnum.ONE;
                instanceGroupsRemoveInstancesRequest = new InstanceGroupsRemoveInstancesRequest() {{
                    instances = new org.openapis.openapi.models.shared.InstanceReference[]{{
                        add(new InstanceReference() {{
                            instance = "reprehenderit";
                        }}),
                        add(new InstanceReference() {{
                            instance = "odit";
                        }}),
                        add(new InstanceReference() {{
                            instance = "quibusdam";
                        }}),
                        add(new InstanceReference() {{
                            instance = "cupiditate";
                        }}),
                    }};
                }};;
                accessToken = "itaque";
                alt = AltEnum.PROTO;
                callback = "repellendus";
                fields = "in";
                key = "rem";
                oauthToken = "nostrum";
                prettyPrint = false;
                quotaUser = "expedita";
                requestId = "vero";
                uploadType = "quis";
                uploadProtocol = "earum";
                userIp = "esse";
            }};            

            ComputeInstanceGroupsRemoveInstancesResponse res = sdk.instanceGroups.computeInstanceGroupsRemoveInstances(req, new ComputeInstanceGroupsRemoveInstancesSecurity() {{
                option1 = new ComputeInstanceGroupsRemoveInstancesSecurityOption1("mollitia", "hic") {{
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

            ComputeInstanceGroupsSetNamedPortsRequest req = new ComputeInstanceGroupsSetNamedPortsRequest("accusamus", "ullam", "minima") {{
                dollarXgafv = XgafvEnum.ONE;
                instanceGroupsSetNamedPortsRequest = new InstanceGroupsSetNamedPortsRequest() {{
                    fingerprint = "occaecati";
                    namedPorts = new org.openapis.openapi.models.shared.NamedPort[]{{
                        add(new NamedPort() {{
                            name = "Ms. Shaun Howe DVM";
                            port = 303695;
                        }}),
                        add(new NamedPort() {{
                            name = "Tricia Ebert";
                            port = 221934;
                        }}),
                    }};
                }};;
                accessToken = "consectetur";
                alt = AltEnum.MEDIA;
                callback = "eius";
                fields = "id";
                key = "eum";
                oauthToken = "rem";
                prettyPrint = false;
                quotaUser = "eligendi";
                requestId = "optio";
                uploadType = "deleniti";
                uploadProtocol = "sit";
                userIp = "illum";
            }};            

            ComputeInstanceGroupsSetNamedPortsResponse res = sdk.instanceGroups.computeInstanceGroupsSetNamedPorts(req, new ComputeInstanceGroupsSetNamedPortsSecurity() {{
                option1 = new ComputeInstanceGroupsSetNamedPortsSecurityOption1("ratione", "alias") {{
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

            ComputeInstanceGroupsTestIamPermissionsRequest req = new ComputeInstanceGroupsTestIamPermissionsRequest("delectus", "hic", "ducimus") {{
                dollarXgafv = XgafvEnum.ONE;
                testPermissionsRequest = new TestPermissionsRequest() {{
                    permissions = new String[]{{
                        add("aliquid"),
                    }};
                }};;
                accessToken = "quaerat";
                alt = AltEnum.PROTO;
                callback = "alias";
                fields = "deserunt";
                key = "occaecati";
                oauthToken = "dicta";
                prettyPrint = false;
                quotaUser = "repellat";
                uploadType = "voluptates";
                uploadProtocol = "provident";
                userIp = "illum";
            }};            

            ComputeInstanceGroupsTestIamPermissionsResponse res = sdk.instanceGroups.computeInstanceGroupsTestIamPermissions(req, new ComputeInstanceGroupsTestIamPermissionsSecurity() {{
                option1 = new ComputeInstanceGroupsTestIamPermissionsSecurityOption1("iste", "autem") {{
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
