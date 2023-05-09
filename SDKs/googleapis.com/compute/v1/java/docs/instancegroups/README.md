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

            ComputeInstanceGroupsAddInstancesRequest req = new ComputeInstanceGroupsAddInstancesRequest("voluptas", "quos", "esse") {{
                dollarXgafv = XgafvEnum.ONE;
                instanceGroupsAddInstancesRequest = new InstanceGroupsAddInstancesRequest() {{
                    instances = new org.openapis.openapi.models.shared.InstanceReference[]{{
                        add(new InstanceReference() {{
                            instance = "assumenda";
                        }}),
                    }};
                }};;
                accessToken = "expedita";
                alt = AltEnum.MEDIA;
                callback = "autem";
                fields = "aliquam";
                key = "maxime";
                oauthToken = "nostrum";
                prettyPrint = false;
                quotaUser = "occaecati";
                requestId = "asperiores";
                uploadType = "doloremque";
                uploadProtocol = "id";
                userIp = "veniam";
            }};            

            ComputeInstanceGroupsAddInstancesResponse res = sdk.instanceGroups.computeInstanceGroupsAddInstances(req, new ComputeInstanceGroupsAddInstancesSecurity() {{
                option1 = new ComputeInstanceGroupsAddInstancesSecurityOption1("ea", "placeat") {{
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

            ComputeInstanceGroupsAggregatedListRequest req = new ComputeInstanceGroupsAggregatedListRequest("necessitatibus") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "cumque";
                alt = AltEnum.MEDIA;
                callback = "pariatur";
                fields = "laborum";
                filter = "consequuntur";
                includeAllScopes = false;
                key = "omnis";
                maxResults = 802418L;
                oauthToken = "officia";
                orderBy = "iusto";
                pageToken = "natus";
                prettyPrint = false;
                quotaUser = "ab";
                returnPartialSuccess = false;
                uploadType = "deleniti";
                uploadProtocol = "et";
                userIp = "eligendi";
            }};            

            ComputeInstanceGroupsAggregatedListResponse res = sdk.instanceGroups.computeInstanceGroupsAggregatedList(req, new ComputeInstanceGroupsAggregatedListSecurity() {{
                option1 = new ComputeInstanceGroupsAggregatedListSecurityOption1("sint", "ipsam") {{
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

            ComputeInstanceGroupsDeleteRequest req = new ComputeInstanceGroupsDeleteRequest("laboriosam", "molestiae", "ab") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "iure";
                alt = AltEnum.JSON;
                callback = "minus";
                fields = "ad";
                key = "ipsum";
                oauthToken = "ipsa";
                prettyPrint = false;
                quotaUser = "nam";
                requestId = "minima";
                uploadType = "vel";
                uploadProtocol = "nisi";
                userIp = "minima";
            }};            

            ComputeInstanceGroupsDeleteResponse res = sdk.instanceGroups.computeInstanceGroupsDelete(req, new ComputeInstanceGroupsDeleteSecurity() {{
                option1 = new ComputeInstanceGroupsDeleteSecurityOption1("et", "autem") {{
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

            ComputeInstanceGroupsGetRequest req = new ComputeInstanceGroupsGetRequest("dolor", "culpa", "non") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "amet";
                alt = AltEnum.MEDIA;
                callback = "exercitationem";
                fields = "illo";
                key = "fugit";
                oauthToken = "id";
                prettyPrint = false;
                quotaUser = "tempore";
                uploadType = "fugit";
                uploadProtocol = "nostrum";
                userIp = "magni";
            }};            

            ComputeInstanceGroupsGetResponse res = sdk.instanceGroups.computeInstanceGroupsGet(req, new ComputeInstanceGroupsGetSecurity() {{
                option1 = new ComputeInstanceGroupsGetSecurityOption1("sunt", "quidem") {{
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

            ComputeInstanceGroupsInsertRequest req = new ComputeInstanceGroupsInsertRequest("perspiciatis", "asperiores") {{
                dollarXgafv = XgafvEnum.ONE;
                instanceGroup = new InstanceGroup() {{
                    creationTimestamp = "saepe";
                    description = "ipsa";
                    fingerprint = "esse";
                    id = "consequuntur";
                    kind = "aliquam";
                    name = "Melinda Powlowski";
                    namedPorts = new org.openapis.openapi.models.shared.NamedPort[]{{
                        add(new NamedPort() {{
                            name = "Mrs. Antoinette Schimmel";
                            port = 679716;
                        }}),
                        add(new NamedPort() {{
                            name = "Kenneth Swaniawski";
                            port = 19610;
                        }}),
                    }};
                    network = "itaque";
                    region = "facere";
                    selfLink = "asperiores";
                    size = 186967;
                    subnetwork = "eos";
                    zone = "laborum";
                }};;
                accessToken = "sint";
                alt = AltEnum.JSON;
                callback = "pariatur";
                fields = "aspernatur";
                key = "aperiam";
                oauthToken = "itaque";
                prettyPrint = false;
                quotaUser = "quo";
                requestId = "perspiciatis";
                uploadType = "accusantium";
                uploadProtocol = "debitis";
                userIp = "animi";
            }};            

            ComputeInstanceGroupsInsertResponse res = sdk.instanceGroups.computeInstanceGroupsInsert(req, new ComputeInstanceGroupsInsertSecurity() {{
                option1 = new ComputeInstanceGroupsInsertSecurityOption1("aliquam", "quasi") {{
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

            ComputeInstanceGroupsListRequest req = new ComputeInstanceGroupsListRequest("repellendus", "architecto") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "labore";
                alt = AltEnum.MEDIA;
                callback = "voluptas";
                fields = "saepe";
                filter = "praesentium";
                key = "veniam";
                maxResults = 67582L;
                oauthToken = "minima";
                orderBy = "nisi";
                pageToken = "repellat";
                prettyPrint = false;
                quotaUser = "sapiente";
                returnPartialSuccess = false;
                uploadType = "a";
                uploadProtocol = "molestiae";
                userIp = "amet";
            }};            

            ComputeInstanceGroupsListResponse res = sdk.instanceGroups.computeInstanceGroupsList(req, new ComputeInstanceGroupsListSecurity() {{
                option1 = new ComputeInstanceGroupsListSecurityOption1("voluptatibus", "temporibus") {{
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

            ComputeInstanceGroupsListInstancesRequest req = new ComputeInstanceGroupsListInstancesRequest("tenetur", "nostrum", "tempora") {{
                dollarXgafv = XgafvEnum.TWO;
                instanceGroupsListInstancesRequest = new InstanceGroupsListInstancesRequest() {{
                    instanceState = InstanceGroupsListInstancesRequestInstanceStateEnum.RUNNING;
                }};;
                accessToken = "illum";
                alt = AltEnum.MEDIA;
                callback = "saepe";
                fields = "deserunt";
                filter = "sint";
                key = "minima";
                maxResults = 294151L;
                oauthToken = "sequi";
                orderBy = "sequi";
                pageToken = "occaecati";
                prettyPrint = false;
                quotaUser = "voluptatum";
                returnPartialSuccess = false;
                uploadType = "illum";
                uploadProtocol = "laborum";
                userIp = "sapiente";
            }};            

            ComputeInstanceGroupsListInstancesResponse res = sdk.instanceGroups.computeInstanceGroupsListInstances(req, new ComputeInstanceGroupsListInstancesSecurity() {{
                option1 = new ComputeInstanceGroupsListInstancesSecurityOption1("soluta", "eius") {{
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

            ComputeInstanceGroupsRemoveInstancesRequest req = new ComputeInstanceGroupsRemoveInstancesRequest("dolores", "dolorum", "deleniti") {{
                dollarXgafv = XgafvEnum.TWO;
                instanceGroupsRemoveInstancesRequest = new InstanceGroupsRemoveInstancesRequest() {{
                    instances = new org.openapis.openapi.models.shared.InstanceReference[]{{
                        add(new InstanceReference() {{
                            instance = "dolorem";
                        }}),
                        add(new InstanceReference() {{
                            instance = "neque";
                        }}),
                    }};
                }};;
                accessToken = "laudantium";
                alt = AltEnum.MEDIA;
                callback = "saepe";
                fields = "incidunt";
                key = "pariatur";
                oauthToken = "deleniti";
                prettyPrint = false;
                quotaUser = "aut";
                requestId = "nesciunt";
                uploadType = "error";
                uploadProtocol = "necessitatibus";
                userIp = "culpa";
            }};            

            ComputeInstanceGroupsRemoveInstancesResponse res = sdk.instanceGroups.computeInstanceGroupsRemoveInstances(req, new ComputeInstanceGroupsRemoveInstancesSecurity() {{
                option1 = new ComputeInstanceGroupsRemoveInstancesSecurityOption1("quis", "asperiores") {{
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

            ComputeInstanceGroupsSetNamedPortsRequest req = new ComputeInstanceGroupsSetNamedPortsRequest("iste", "harum", "sunt") {{
                dollarXgafv = XgafvEnum.TWO;
                instanceGroupsSetNamedPortsRequest = new InstanceGroupsSetNamedPortsRequest() {{
                    fingerprint = "similique";
                    namedPorts = new org.openapis.openapi.models.shared.NamedPort[]{{
                        add(new NamedPort() {{
                            name = "Pauline Will";
                            port = 69575;
                        }}),
                    }};
                }};;
                accessToken = "omnis";
                alt = AltEnum.JSON;
                callback = "ipsum";
                fields = "iste";
                key = "nulla";
                oauthToken = "dolorum";
                prettyPrint = false;
                quotaUser = "maxime";
                requestId = "assumenda";
                uploadType = "velit";
                uploadProtocol = "voluptatum";
                userIp = "eveniet";
            }};            

            ComputeInstanceGroupsSetNamedPortsResponse res = sdk.instanceGroups.computeInstanceGroupsSetNamedPorts(req, new ComputeInstanceGroupsSetNamedPortsSecurity() {{
                option1 = new ComputeInstanceGroupsSetNamedPortsSecurityOption1("quibusdam", "doloremque") {{
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
