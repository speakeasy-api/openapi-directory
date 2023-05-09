# instanceGroupManagers

### Available Operations

* [computeInstanceGroupManagersAbandonInstances](#computeinstancegroupmanagersabandoninstances) - Flags the specified instances to be removed from the managed instance group. Abandoning an instance does not delete the instance, but it does remove the instance from any target pools that are applied by the managed instance group. This method reduces the targetSize of the managed instance group by the number of instances that you abandon. This operation is marked as DONE when the action is scheduled even if the instances have not yet been removed from the group. You must separately verify the status of the abandoning action with the listmanagedinstances method. If the group is part of a backend service that has enabled connection draining, it can take up to 60 seconds after the connection draining duration has elapsed before the VM instance is removed or deleted. You can specify a maximum of 1000 instances with this method per request.
* [computeInstanceGroupManagersAggregatedList](#computeinstancegroupmanagersaggregatedlist) - Retrieves the list of managed instance groups and groups them by zone.
* [computeInstanceGroupManagersApplyUpdatesToInstances](#computeinstancegroupmanagersapplyupdatestoinstances) - Applies changes to selected instances on the managed instance group. This method can be used to apply new overrides and/or new versions.
* [computeInstanceGroupManagersCreateInstances](#computeinstancegroupmanagerscreateinstances) - Creates instances with per-instance configurations in this managed instance group. Instances are created using the current instance template. The create instances operation is marked DONE if the createInstances request is successful. The underlying actions take additional time. You must separately verify the status of the creating or actions with the listmanagedinstances method.
* [computeInstanceGroupManagersDelete](#computeinstancegroupmanagersdelete) - Deletes the specified managed instance group and all of the instances in that group. Note that the instance group must not belong to a backend service. Read Deleting an instance group for more information.
* [computeInstanceGroupManagersDeleteInstances](#computeinstancegroupmanagersdeleteinstances) - Flags the specified instances in the managed instance group for immediate deletion. The instances are also removed from any target pools of which they were a member. This method reduces the targetSize of the managed instance group by the number of instances that you delete. This operation is marked as DONE when the action is scheduled even if the instances are still being deleted. You must separately verify the status of the deleting action with the listmanagedinstances method. If the group is part of a backend service that has enabled connection draining, it can take up to 60 seconds after the connection draining duration has elapsed before the VM instance is removed or deleted. You can specify a maximum of 1000 instances with this method per request.
* [computeInstanceGroupManagersDeletePerInstanceConfigs](#computeinstancegroupmanagersdeleteperinstanceconfigs) - Deletes selected per-instance configurations for the managed instance group.
* [computeInstanceGroupManagersGet](#computeinstancegroupmanagersget) - Returns all of the details about the specified managed instance group.
* [computeInstanceGroupManagersInsert](#computeinstancegroupmanagersinsert) - Creates a managed instance group using the information that you specify in the request. After the group is created, instances in the group are created using the specified instance template. This operation is marked as DONE when the group is created even if the instances in the group have not yet been created. You must separately verify the status of the individual instances with the listmanagedinstances method. A managed instance group can have up to 1000 VM instances per group. Please contact Cloud Support if you need an increase in this limit.
* [computeInstanceGroupManagersList](#computeinstancegroupmanagerslist) - Retrieves a list of managed instance groups that are contained within the specified project and zone.
* [computeInstanceGroupManagersListErrors](#computeinstancegroupmanagerslisterrors) - Lists all errors thrown by actions on instances for a given managed instance group. The filter and orderBy query parameters are not supported.
* [computeInstanceGroupManagersListManagedInstances](#computeinstancegroupmanagerslistmanagedinstances) - Lists all of the instances in the managed instance group. Each instance in the list has a currentAction, which indicates the action that the managed instance group is performing on the instance. For example, if the group is still creating an instance, the currentAction is CREATING. If a previous action failed, the list displays the errors for that failed action. The orderBy query parameter is not supported. The `pageToken` query parameter is supported only in the alpha and beta API and only if the group's `listManagedInstancesResults` field is set to `PAGINATED`.
* [computeInstanceGroupManagersListPerInstanceConfigs](#computeinstancegroupmanagerslistperinstanceconfigs) - Lists all of the per-instance configurations defined for the managed instance group. The orderBy query parameter is not supported.
* [computeInstanceGroupManagersPatch](#computeinstancegroupmanagerspatch) - Updates a managed instance group using the information that you specify in the request. This operation is marked as DONE when the group is patched even if the instances in the group are still in the process of being patched. You must separately verify the status of the individual instances with the listManagedInstances method. This method supports PATCH semantics and uses the JSON merge patch format and processing rules. If you update your group to specify a new template or instance configuration, it's possible that your intended specification for each VM in the group is different from the current state of that VM. To learn how to apply an updated configuration to the VMs in a MIG, see Updating instances in a MIG.
* [computeInstanceGroupManagersPatchPerInstanceConfigs](#computeinstancegroupmanagerspatchperinstanceconfigs) - Inserts or patches per-instance configurations for the managed instance group. perInstanceConfig.name serves as a key used to distinguish whether to perform insert or patch.
* [computeInstanceGroupManagersRecreateInstances](#computeinstancegroupmanagersrecreateinstances) - Flags the specified VM instances in the managed instance group to be immediately recreated. Each instance is recreated using the group's current configuration. This operation is marked as DONE when the flag is set even if the instances have not yet been recreated. You must separately verify the status of each instance by checking its currentAction field; for more information, see Checking the status of managed instances. If the group is part of a backend service that has enabled connection draining, it can take up to 60 seconds after the connection draining duration has elapsed before the VM instance is removed or deleted. You can specify a maximum of 1000 instances with this method per request.
* [computeInstanceGroupManagersResize](#computeinstancegroupmanagersresize) - Resizes the managed instance group. If you increase the size, the group creates new instances using the current instance template. If you decrease the size, the group deletes instances. The resize operation is marked DONE when the resize actions are scheduled even if the group has not yet added or deleted any instances. You must separately verify the status of the creating or deleting actions with the listmanagedinstances method. When resizing down, the instance group arbitrarily chooses the order in which VMs are deleted. The group takes into account some VM attributes when making the selection including: + The status of the VM instance. + The health of the VM instance. + The instance template version the VM is based on. + For regional managed instance groups, the location of the VM instance. This list is subject to change. If the group is part of a backend service that has enabled connection draining, it can take up to 60 seconds after the connection draining duration has elapsed before the VM instance is removed or deleted.
* [computeInstanceGroupManagersSetInstanceTemplate](#computeinstancegroupmanagerssetinstancetemplate) - Specifies the instance template to use when creating new instances in this group. The templates for existing instances in the group do not change unless you run recreateInstances, run applyUpdatesToInstances, or set the group's updatePolicy.type to PROACTIVE.
* [computeInstanceGroupManagersSetTargetPools](#computeinstancegroupmanagerssettargetpools) - Modifies the target pools to which all instances in this managed instance group are assigned. The target pools automatically apply to all of the instances in the managed instance group. This operation is marked DONE when you make the request even if the instances have not yet been added to their target pools. The change might take some time to apply to all of the instances in the group depending on the size of the group.
* [computeInstanceGroupManagersUpdatePerInstanceConfigs](#computeinstancegroupmanagersupdateperinstanceconfigs) - Inserts or updates per-instance configurations for the managed instance group. perInstanceConfig.name serves as a key used to distinguish whether to perform insert or patch.

## computeInstanceGroupManagersAbandonInstances

Flags the specified instances to be removed from the managed instance group. Abandoning an instance does not delete the instance, but it does remove the instance from any target pools that are applied by the managed instance group. This method reduces the targetSize of the managed instance group by the number of instances that you abandon. This operation is marked as DONE when the action is scheduled even if the instances have not yet been removed from the group. You must separately verify the status of the abandoning action with the listmanagedinstances method. If the group is part of a backend service that has enabled connection draining, it can take up to 60 seconds after the connection draining duration has elapsed before the VM instance is removed or deleted. You can specify a maximum of 1000 instances with this method per request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeInstanceGroupManagersAbandonInstancesRequest;
import org.openapis.openapi.models.operations.ComputeInstanceGroupManagersAbandonInstancesResponse;
import org.openapis.openapi.models.operations.ComputeInstanceGroupManagersAbandonInstancesSecurity;
import org.openapis.openapi.models.operations.ComputeInstanceGroupManagersAbandonInstancesSecurityOption1;
import org.openapis.openapi.models.operations.ComputeInstanceGroupManagersAbandonInstancesSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.InstanceGroupManagersAbandonInstancesRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeInstanceGroupManagersAbandonInstancesRequest req = new ComputeInstanceGroupManagersAbandonInstancesRequest("quis", "eum", "et") {{
                dollarXgafv = XgafvEnum.TWO;
                instanceGroupManagersAbandonInstancesRequest = new InstanceGroupManagersAbandonInstancesRequest() {{
                    instances = new String[]{{
                        add("culpa"),
                        add("architecto"),
                        add("iure"),
                        add("eveniet"),
                    }};
                }};;
                accessToken = "doloribus";
                alt = AltEnum.MEDIA;
                callback = "iste";
                fields = "tempora";
                key = "ad";
                oauthToken = "ab";
                prettyPrint = false;
                quotaUser = "harum";
                requestId = "facere";
                uploadType = "ducimus";
                uploadProtocol = "nisi";
                userIp = "accusamus";
            }};            

            ComputeInstanceGroupManagersAbandonInstancesResponse res = sdk.instanceGroupManagers.computeInstanceGroupManagersAbandonInstances(req, new ComputeInstanceGroupManagersAbandonInstancesSecurity() {{
                option1 = new ComputeInstanceGroupManagersAbandonInstancesSecurityOption1("officiis", "necessitatibus") {{
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

## computeInstanceGroupManagersAggregatedList

Retrieves the list of managed instance groups and groups them by zone.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeInstanceGroupManagersAggregatedListRequest;
import org.openapis.openapi.models.operations.ComputeInstanceGroupManagersAggregatedListResponse;
import org.openapis.openapi.models.operations.ComputeInstanceGroupManagersAggregatedListSecurity;
import org.openapis.openapi.models.operations.ComputeInstanceGroupManagersAggregatedListSecurityOption1;
import org.openapis.openapi.models.operations.ComputeInstanceGroupManagersAggregatedListSecurityOption2;
import org.openapis.openapi.models.operations.ComputeInstanceGroupManagersAggregatedListSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeInstanceGroupManagersAggregatedListRequest req = new ComputeInstanceGroupManagersAggregatedListRequest("nam") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "veritatis";
                alt = AltEnum.MEDIA;
                callback = "impedit";
                fields = "modi";
                filter = "possimus";
                includeAllScopes = false;
                key = "similique";
                maxResults = 100185L;
                oauthToken = "asperiores";
                orderBy = "est";
                pageToken = "repellendus";
                prettyPrint = false;
                quotaUser = "dolor";
                returnPartialSuccess = false;
                uploadType = "nemo";
                uploadProtocol = "quis";
                userIp = "quasi";
            }};            

            ComputeInstanceGroupManagersAggregatedListResponse res = sdk.instanceGroupManagers.computeInstanceGroupManagersAggregatedList(req, new ComputeInstanceGroupManagersAggregatedListSecurity() {{
                option1 = new ComputeInstanceGroupManagersAggregatedListSecurityOption1("odit", "delectus") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.instanceGroupManagerAggregatedList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeInstanceGroupManagersApplyUpdatesToInstances

Applies changes to selected instances on the managed instance group. This method can be used to apply new overrides and/or new versions.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeInstanceGroupManagersApplyUpdatesToInstancesRequest;
import org.openapis.openapi.models.operations.ComputeInstanceGroupManagersApplyUpdatesToInstancesResponse;
import org.openapis.openapi.models.operations.ComputeInstanceGroupManagersApplyUpdatesToInstancesSecurity;
import org.openapis.openapi.models.operations.ComputeInstanceGroupManagersApplyUpdatesToInstancesSecurityOption1;
import org.openapis.openapi.models.operations.ComputeInstanceGroupManagersApplyUpdatesToInstancesSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.InstanceGroupManagersApplyUpdatesRequest;
import org.openapis.openapi.models.shared.InstanceGroupManagersApplyUpdatesRequestMinimalActionEnum;
import org.openapis.openapi.models.shared.InstanceGroupManagersApplyUpdatesRequestMostDisruptiveAllowedActionEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeInstanceGroupManagersApplyUpdatesToInstancesRequest req = new ComputeInstanceGroupManagersApplyUpdatesToInstancesRequest("doloremque", "laboriosam", "nulla") {{
                dollarXgafv = XgafvEnum.ONE;
                instanceGroupManagersApplyUpdatesRequest = new InstanceGroupManagersApplyUpdatesRequest() {{
                    allInstances = false;
                    instances = new String[]{{
                        add("enim"),
                        add("nam"),
                        add("dignissimos"),
                        add("consequuntur"),
                    }};
                    minimalAction = InstanceGroupManagersApplyUpdatesRequestMinimalActionEnum.RESTART;
                    mostDisruptiveAllowedAction = InstanceGroupManagersApplyUpdatesRequestMostDisruptiveAllowedActionEnum.NONE;
                }};;
                accessToken = "doloribus";
                alt = AltEnum.MEDIA;
                callback = "dolore";
                fields = "corrupti";
                key = "exercitationem";
                oauthToken = "commodi";
                prettyPrint = false;
                quotaUser = "laudantium";
                uploadType = "est";
                uploadProtocol = "consequatur";
                userIp = "incidunt";
            }};            

            ComputeInstanceGroupManagersApplyUpdatesToInstancesResponse res = sdk.instanceGroupManagers.computeInstanceGroupManagersApplyUpdatesToInstances(req, new ComputeInstanceGroupManagersApplyUpdatesToInstancesSecurity() {{
                option1 = new ComputeInstanceGroupManagersApplyUpdatesToInstancesSecurityOption1("dolores", "labore") {{
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

## computeInstanceGroupManagersCreateInstances

Creates instances with per-instance configurations in this managed instance group. Instances are created using the current instance template. The create instances operation is marked DONE if the createInstances request is successful. The underlying actions take additional time. You must separately verify the status of the creating or actions with the listmanagedinstances method.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeInstanceGroupManagersCreateInstancesRequest;
import org.openapis.openapi.models.operations.ComputeInstanceGroupManagersCreateInstancesResponse;
import org.openapis.openapi.models.operations.ComputeInstanceGroupManagersCreateInstancesSecurity;
import org.openapis.openapi.models.operations.ComputeInstanceGroupManagersCreateInstancesSecurityOption1;
import org.openapis.openapi.models.operations.ComputeInstanceGroupManagersCreateInstancesSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.InstanceGroupManagersCreateInstancesRequest;
import org.openapis.openapi.models.shared.PerInstanceConfig;
import org.openapis.openapi.models.shared.PerInstanceConfigStatusEnum;
import org.openapis.openapi.models.shared.PreservedState;
import org.openapis.openapi.models.shared.PreservedStatePreservedDisk;
import org.openapis.openapi.models.shared.PreservedStatePreservedDiskAutoDeleteEnum;
import org.openapis.openapi.models.shared.PreservedStatePreservedDiskModeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeInstanceGroupManagersCreateInstancesRequest req = new ComputeInstanceGroupManagersCreateInstancesRequest("earum", "consequatur", "voluptatem") {{
                dollarXgafv = XgafvEnum.TWO;
                instanceGroupManagersCreateInstancesRequest = new InstanceGroupManagersCreateInstancesRequest() {{
                    instances = new org.openapis.openapi.models.shared.PerInstanceConfig[]{{
                        add(new PerInstanceConfig() {{
                            fingerprint = "quibusdam";
                            name = "Silvia Renner";
                            preservedState = new PreservedState() {{
                                disks = new java.util.HashMap<String, org.openapis.openapi.models.shared.PreservedStatePreservedDisk>() {{
                                    put("aliquam", new PreservedStatePreservedDisk() {{
                                        autoDelete = PreservedStatePreservedDiskAutoDeleteEnum.NEVER;
                                        mode = PreservedStatePreservedDiskModeEnum.READ_ONLY;
                                        source = "corporis";
                                    }});
                                }};
                                metadata = new java.util.HashMap<String, String>() {{
                                    put("ipsa", "amet");
                                    put("aut", "molestias");
                                    put("quaerat", "repellat");
                                    put("expedita", "libero");
                                }};
                            }};
                            status = PerInstanceConfigStatusEnum.NONE;
                        }}),
                    }};
                }};;
                accessToken = "quis";
                alt = AltEnum.PROTO;
                callback = "cumque";
                fields = "vero";
                key = "a";
                oauthToken = "tenetur";
                prettyPrint = false;
                quotaUser = "ipsam";
                requestId = "quod";
                uploadType = "facilis";
                uploadProtocol = "doloremque";
                userIp = "illo";
            }};            

            ComputeInstanceGroupManagersCreateInstancesResponse res = sdk.instanceGroupManagers.computeInstanceGroupManagersCreateInstances(req, new ComputeInstanceGroupManagersCreateInstancesSecurity() {{
                option1 = new ComputeInstanceGroupManagersCreateInstancesSecurityOption1("reiciendis", "debitis") {{
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

## computeInstanceGroupManagersDelete

Deletes the specified managed instance group and all of the instances in that group. Note that the instance group must not belong to a backend service. Read Deleting an instance group for more information.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeInstanceGroupManagersDeleteRequest;
import org.openapis.openapi.models.operations.ComputeInstanceGroupManagersDeleteResponse;
import org.openapis.openapi.models.operations.ComputeInstanceGroupManagersDeleteSecurity;
import org.openapis.openapi.models.operations.ComputeInstanceGroupManagersDeleteSecurityOption1;
import org.openapis.openapi.models.operations.ComputeInstanceGroupManagersDeleteSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeInstanceGroupManagersDeleteRequest req = new ComputeInstanceGroupManagersDeleteRequest("enim", "quasi", "accusamus") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "aspernatur";
                alt = AltEnum.MEDIA;
                callback = "animi";
                fields = "eius";
                key = "ad";
                oauthToken = "mollitia";
                prettyPrint = false;
                quotaUser = "minus";
                requestId = "quos";
                uploadType = "explicabo";
                uploadProtocol = "distinctio";
                userIp = "praesentium";
            }};            

            ComputeInstanceGroupManagersDeleteResponse res = sdk.instanceGroupManagers.computeInstanceGroupManagersDelete(req, new ComputeInstanceGroupManagersDeleteSecurity() {{
                option1 = new ComputeInstanceGroupManagersDeleteSecurityOption1("ullam", "maiores") {{
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

## computeInstanceGroupManagersDeleteInstances

Flags the specified instances in the managed instance group for immediate deletion. The instances are also removed from any target pools of which they were a member. This method reduces the targetSize of the managed instance group by the number of instances that you delete. This operation is marked as DONE when the action is scheduled even if the instances are still being deleted. You must separately verify the status of the deleting action with the listmanagedinstances method. If the group is part of a backend service that has enabled connection draining, it can take up to 60 seconds after the connection draining duration has elapsed before the VM instance is removed or deleted. You can specify a maximum of 1000 instances with this method per request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeInstanceGroupManagersDeleteInstancesRequest;
import org.openapis.openapi.models.operations.ComputeInstanceGroupManagersDeleteInstancesResponse;
import org.openapis.openapi.models.operations.ComputeInstanceGroupManagersDeleteInstancesSecurity;
import org.openapis.openapi.models.operations.ComputeInstanceGroupManagersDeleteInstancesSecurityOption1;
import org.openapis.openapi.models.operations.ComputeInstanceGroupManagersDeleteInstancesSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.InstanceGroupManagersDeleteInstancesRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeInstanceGroupManagersDeleteInstancesRequest req = new ComputeInstanceGroupManagersDeleteInstancesRequest("corrupti", "libero", "placeat") {{
                dollarXgafv = XgafvEnum.ONE;
                instanceGroupManagersDeleteInstancesRequest = new InstanceGroupManagersDeleteInstancesRequest() {{
                    instances = new String[]{{
                        add("animi"),
                        add("expedita"),
                        add("laborum"),
                        add("atque"),
                    }};
                    skipInstancesOnValidationError = false;
                }};;
                accessToken = "assumenda";
                alt = AltEnum.PROTO;
                callback = "magnam";
                fields = "veritatis";
                key = "fugit";
                oauthToken = "nihil";
                prettyPrint = false;
                quotaUser = "illum";
                requestId = "nulla";
                uploadType = "nemo";
                uploadProtocol = "omnis";
                userIp = "iure";
            }};            

            ComputeInstanceGroupManagersDeleteInstancesResponse res = sdk.instanceGroupManagers.computeInstanceGroupManagersDeleteInstances(req, new ComputeInstanceGroupManagersDeleteInstancesSecurity() {{
                option1 = new ComputeInstanceGroupManagersDeleteInstancesSecurityOption1("hic", "sapiente") {{
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

## computeInstanceGroupManagersDeletePerInstanceConfigs

Deletes selected per-instance configurations for the managed instance group.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeInstanceGroupManagersDeletePerInstanceConfigsRequest;
import org.openapis.openapi.models.operations.ComputeInstanceGroupManagersDeletePerInstanceConfigsResponse;
import org.openapis.openapi.models.operations.ComputeInstanceGroupManagersDeletePerInstanceConfigsSecurity;
import org.openapis.openapi.models.operations.ComputeInstanceGroupManagersDeletePerInstanceConfigsSecurityOption1;
import org.openapis.openapi.models.operations.ComputeInstanceGroupManagersDeletePerInstanceConfigsSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.InstanceGroupManagersDeletePerInstanceConfigsReq;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeInstanceGroupManagersDeletePerInstanceConfigsRequest req = new ComputeInstanceGroupManagersDeletePerInstanceConfigsRequest("eius", "esse", "quasi") {{
                dollarXgafv = XgafvEnum.ONE;
                instanceGroupManagersDeletePerInstanceConfigsReq = new InstanceGroupManagersDeletePerInstanceConfigsReq() {{
                    names = new String[]{{
                        add("id"),
                        add("et"),
                        add("distinctio"),
                    }};
                }};;
                accessToken = "porro";
                alt = AltEnum.MEDIA;
                callback = "numquam";
                fields = "rerum";
                key = "atque";
                oauthToken = "aliquid";
                prettyPrint = false;
                quotaUser = "placeat";
                uploadType = "necessitatibus";
                uploadProtocol = "quisquam";
                userIp = "impedit";
            }};            

            ComputeInstanceGroupManagersDeletePerInstanceConfigsResponse res = sdk.instanceGroupManagers.computeInstanceGroupManagersDeletePerInstanceConfigs(req, new ComputeInstanceGroupManagersDeletePerInstanceConfigsSecurity() {{
                option1 = new ComputeInstanceGroupManagersDeletePerInstanceConfigsSecurityOption1("ducimus", "incidunt") {{
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

## computeInstanceGroupManagersGet

Returns all of the details about the specified managed instance group.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeInstanceGroupManagersGetRequest;
import org.openapis.openapi.models.operations.ComputeInstanceGroupManagersGetResponse;
import org.openapis.openapi.models.operations.ComputeInstanceGroupManagersGetSecurity;
import org.openapis.openapi.models.operations.ComputeInstanceGroupManagersGetSecurityOption1;
import org.openapis.openapi.models.operations.ComputeInstanceGroupManagersGetSecurityOption2;
import org.openapis.openapi.models.operations.ComputeInstanceGroupManagersGetSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeInstanceGroupManagersGetRequest req = new ComputeInstanceGroupManagersGetRequest("voluptatibus", "nihil", "ducimus") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "incidunt";
                alt = AltEnum.MEDIA;
                callback = "aliquam";
                fields = "totam";
                key = "soluta";
                oauthToken = "quibusdam";
                prettyPrint = false;
                quotaUser = "iure";
                uploadType = "mollitia";
                uploadProtocol = "autem";
                userIp = "hic";
            }};            

            ComputeInstanceGroupManagersGetResponse res = sdk.instanceGroupManagers.computeInstanceGroupManagersGet(req, new ComputeInstanceGroupManagersGetSecurity() {{
                option1 = new ComputeInstanceGroupManagersGetSecurityOption1("perferendis", "tempora") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.instanceGroupManager != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeInstanceGroupManagersInsert

Creates a managed instance group using the information that you specify in the request. After the group is created, instances in the group are created using the specified instance template. This operation is marked as DONE when the group is created even if the instances in the group have not yet been created. You must separately verify the status of the individual instances with the listmanagedinstances method. A managed instance group can have up to 1000 VM instances per group. Please contact Cloud Support if you need an increase in this limit.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeInstanceGroupManagersInsertRequest;
import org.openapis.openapi.models.operations.ComputeInstanceGroupManagersInsertResponse;
import org.openapis.openapi.models.operations.ComputeInstanceGroupManagersInsertSecurity;
import org.openapis.openapi.models.operations.ComputeInstanceGroupManagersInsertSecurityOption1;
import org.openapis.openapi.models.operations.ComputeInstanceGroupManagersInsertSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.DistributionPolicy;
import org.openapis.openapi.models.shared.DistributionPolicyTargetShapeEnum;
import org.openapis.openapi.models.shared.DistributionPolicyZoneConfiguration;
import org.openapis.openapi.models.shared.FixedOrPercent;
import org.openapis.openapi.models.shared.InstanceGroupManager;
import org.openapis.openapi.models.shared.InstanceGroupManagerActionsSummary;
import org.openapis.openapi.models.shared.InstanceGroupManagerAutoHealingPolicy;
import org.openapis.openapi.models.shared.InstanceGroupManagerListManagedInstancesResultsEnum;
import org.openapis.openapi.models.shared.InstanceGroupManagerStatus;
import org.openapis.openapi.models.shared.InstanceGroupManagerStatusStateful;
import org.openapis.openapi.models.shared.InstanceGroupManagerStatusStatefulPerInstanceConfigs;
import org.openapis.openapi.models.shared.InstanceGroupManagerStatusVersionTarget;
import org.openapis.openapi.models.shared.InstanceGroupManagerUpdatePolicy;
import org.openapis.openapi.models.shared.InstanceGroupManagerUpdatePolicyInstanceRedistributionTypeEnum;
import org.openapis.openapi.models.shared.InstanceGroupManagerUpdatePolicyMinimalActionEnum;
import org.openapis.openapi.models.shared.InstanceGroupManagerUpdatePolicyMostDisruptiveAllowedActionEnum;
import org.openapis.openapi.models.shared.InstanceGroupManagerUpdatePolicyReplacementMethodEnum;
import org.openapis.openapi.models.shared.InstanceGroupManagerUpdatePolicyTypeEnum;
import org.openapis.openapi.models.shared.InstanceGroupManagerVersion;
import org.openapis.openapi.models.shared.NamedPort;
import org.openapis.openapi.models.shared.StatefulPolicy;
import org.openapis.openapi.models.shared.StatefulPolicyPreservedState;
import org.openapis.openapi.models.shared.StatefulPolicyPreservedStateDiskDevice;
import org.openapis.openapi.models.shared.StatefulPolicyPreservedStateDiskDeviceAutoDeleteEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeInstanceGroupManagersInsertRequest req = new ComputeInstanceGroupManagersInsertRequest("aliquam", "architecto") {{
                dollarXgafv = XgafvEnum.TWO;
                instanceGroupManager = new InstanceGroupManager() {{
                    autoHealingPolicies = new org.openapis.openapi.models.shared.InstanceGroupManagerAutoHealingPolicy[]{{
                        add(new InstanceGroupManagerAutoHealingPolicy() {{
                            healthCheck = "maxime";
                            initialDelaySec = 189827;
                        }}),
                    }};
                    baseInstanceName = "soluta";
                    creationTimestamp = "quos";
                    currentActions = new InstanceGroupManagerActionsSummary() {{
                        abandoning = 23128;
                        creating = 511921;
                        creatingWithoutRetries = 26990;
                        deleting = 594020;
                        none = 311465;
                        recreating = 201056;
                        refreshing = 474453;
                        restarting = 239283;
                        resuming = 909742;
                        starting = 56956;
                        stopping = 384630;
                        suspending = 25321;
                        verifying = 288525;
                    }};;
                    description = "ullam";
                    distributionPolicy = new DistributionPolicy() {{
                        targetShape = DistributionPolicyTargetShapeEnum.BALANCED;
                        zones = new org.openapis.openapi.models.shared.DistributionPolicyZoneConfiguration[]{{
                            add(new DistributionPolicyZoneConfiguration() {{
                                zone = "voluptates";
                            }}),
                            add(new DistributionPolicyZoneConfiguration() {{
                                zone = "rerum";
                            }}),
                            add(new DistributionPolicyZoneConfiguration() {{
                                zone = "cum";
                            }}),
                        }};
                    }};;
                    fingerprint = "est";
                    id = "fugiat";
                    instanceGroup = "perferendis";
                    instanceTemplate = "qui";
                    kind = "tenetur";
                    listManagedInstancesResults = InstanceGroupManagerListManagedInstancesResultsEnum.PAGELESS;
                    name = "Priscilla Kerluke";
                    namedPorts = new org.openapis.openapi.models.shared.NamedPort[]{{
                        add(new NamedPort() {{
                            name = "Holly Dare";
                            port = 515854;
                        }}),
                        add(new NamedPort() {{
                            name = "Grant Pfannerstill";
                            port = 723031;
                        }}),
                        add(new NamedPort() {{
                            name = "Ricardo Sawayn I";
                            port = 450290;
                        }}),
                        add(new NamedPort() {{
                            name = "Gina Rutherford";
                            port = 281753;
                        }}),
                    }};
                    region = "est";
                    selfLink = "fuga";
                    statefulPolicy = new StatefulPolicy() {{
                        preservedState = new StatefulPolicyPreservedState() {{
                            disks = new java.util.HashMap<String, org.openapis.openapi.models.shared.StatefulPolicyPreservedStateDiskDevice>() {{
                                put("adipisci", new StatefulPolicyPreservedStateDiskDevice() {{
                                    autoDelete = StatefulPolicyPreservedStateDiskDeviceAutoDeleteEnum.NEVER;
                                }});
                                put("cum", new StatefulPolicyPreservedStateDiskDevice() {{
                                    autoDelete = StatefulPolicyPreservedStateDiskDeviceAutoDeleteEnum.NEVER;
                                }});
                            }};
                        }};;
                    }};;
                    status = new InstanceGroupManagerStatus() {{
                        autoscaler = "nihil";
                        isStable = false;
                        stateful = new InstanceGroupManagerStatusStateful() {{
                            hasStatefulConfig = false;
                            perInstanceConfigs = new InstanceGroupManagerStatusStatefulPerInstanceConfigs() {{
                                allEffective = false;
                            }};;
                        }};;
                        versionTarget = new InstanceGroupManagerStatusVersionTarget() {{
                            isReached = false;
                        }};;
                    }};;
                    targetPools = new String[]{{
                        add("inventore"),
                        add("esse"),
                        add("ex"),
                        add("amet"),
                    }};
                    targetSize = 791516;
                    updatePolicy = new InstanceGroupManagerUpdatePolicy() {{
                        instanceRedistributionType = InstanceGroupManagerUpdatePolicyInstanceRedistributionTypeEnum.NONE;
                        maxSurge = new FixedOrPercent() {{
                            calculated = 129257;
                            fixed = 2770;
                            percent = 502686;
                        }};;
                        maxUnavailable = new FixedOrPercent() {{
                            calculated = 755809;
                            fixed = 186318;
                            percent = 225677;
                        }};;
                        minimalAction = InstanceGroupManagerUpdatePolicyMinimalActionEnum.RESTART;
                        mostDisruptiveAllowedAction = InstanceGroupManagerUpdatePolicyMostDisruptiveAllowedActionEnum.REPLACE;
                        replacementMethod = InstanceGroupManagerUpdatePolicyReplacementMethodEnum.SUBSTITUTE;
                        type = InstanceGroupManagerUpdatePolicyTypeEnum.OPPORTUNISTIC;
                    }};;
                    versions = new org.openapis.openapi.models.shared.InstanceGroupManagerVersion[]{{
                        add(new InstanceGroupManagerVersion() {{
                            instanceTemplate = "repellendus";
                            name = "Dr. Sean Williamson";
                            targetSize = new FixedOrPercent() {{
                                calculated = 340107;
                                fixed = 920488;
                                percent = 743605;
                            }};
                        }}),
                    }};
                    zone = "eius";
                }};;
                accessToken = "fuga";
                alt = AltEnum.MEDIA;
                callback = "nobis";
                fields = "ea";
                key = "iusto";
                oauthToken = "dolore";
                prettyPrint = false;
                quotaUser = "repudiandae";
                requestId = "recusandae";
                uploadType = "ipsam";
                uploadProtocol = "quisquam";
                userIp = "delectus";
            }};            

            ComputeInstanceGroupManagersInsertResponse res = sdk.instanceGroupManagers.computeInstanceGroupManagersInsert(req, new ComputeInstanceGroupManagersInsertSecurity() {{
                option1 = new ComputeInstanceGroupManagersInsertSecurityOption1("optio", "sunt") {{
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

## computeInstanceGroupManagersList

Retrieves a list of managed instance groups that are contained within the specified project and zone.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeInstanceGroupManagersListRequest;
import org.openapis.openapi.models.operations.ComputeInstanceGroupManagersListResponse;
import org.openapis.openapi.models.operations.ComputeInstanceGroupManagersListSecurity;
import org.openapis.openapi.models.operations.ComputeInstanceGroupManagersListSecurityOption1;
import org.openapis.openapi.models.operations.ComputeInstanceGroupManagersListSecurityOption2;
import org.openapis.openapi.models.operations.ComputeInstanceGroupManagersListSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeInstanceGroupManagersListRequest req = new ComputeInstanceGroupManagersListRequest("rem", "itaque") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "optio";
                alt = AltEnum.MEDIA;
                callback = "a";
                fields = "quam";
                filter = "quos";
                key = "dignissimos";
                maxResults = 936683L;
                oauthToken = "adipisci";
                orderBy = "magni";
                pageToken = "recusandae";
                prettyPrint = false;
                quotaUser = "voluptatem";
                returnPartialSuccess = false;
                uploadType = "eius";
                uploadProtocol = "rerum";
                userIp = "nesciunt";
            }};            

            ComputeInstanceGroupManagersListResponse res = sdk.instanceGroupManagers.computeInstanceGroupManagersList(req, new ComputeInstanceGroupManagersListSecurity() {{
                option1 = new ComputeInstanceGroupManagersListSecurityOption1("pariatur", "velit") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.instanceGroupManagerList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeInstanceGroupManagersListErrors

Lists all errors thrown by actions on instances for a given managed instance group. The filter and orderBy query parameters are not supported.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeInstanceGroupManagersListErrorsRequest;
import org.openapis.openapi.models.operations.ComputeInstanceGroupManagersListErrorsResponse;
import org.openapis.openapi.models.operations.ComputeInstanceGroupManagersListErrorsSecurity;
import org.openapis.openapi.models.operations.ComputeInstanceGroupManagersListErrorsSecurityOption1;
import org.openapis.openapi.models.operations.ComputeInstanceGroupManagersListErrorsSecurityOption2;
import org.openapis.openapi.models.operations.ComputeInstanceGroupManagersListErrorsSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeInstanceGroupManagersListErrorsRequest req = new ComputeInstanceGroupManagersListErrorsRequest("necessitatibus", "facere", "quae") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "ullam";
                alt = AltEnum.MEDIA;
                callback = "reprehenderit";
                fields = "aut";
                filter = "recusandae";
                key = "voluptatibus";
                maxResults = 292938L;
                oauthToken = "aspernatur";
                orderBy = "harum";
                pageToken = "illum";
                prettyPrint = false;
                quotaUser = "dolor";
                returnPartialSuccess = false;
                uploadType = "porro";
                uploadProtocol = "iste";
                userIp = "earum";
            }};            

            ComputeInstanceGroupManagersListErrorsResponse res = sdk.instanceGroupManagers.computeInstanceGroupManagersListErrors(req, new ComputeInstanceGroupManagersListErrorsSecurity() {{
                option1 = new ComputeInstanceGroupManagersListErrorsSecurityOption1("vitae", "impedit") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.instanceGroupManagersListErrorsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeInstanceGroupManagersListManagedInstances

Lists all of the instances in the managed instance group. Each instance in the list has a currentAction, which indicates the action that the managed instance group is performing on the instance. For example, if the group is still creating an instance, the currentAction is CREATING. If a previous action failed, the list displays the errors for that failed action. The orderBy query parameter is not supported. The `pageToken` query parameter is supported only in the alpha and beta API and only if the group's `listManagedInstancesResults` field is set to `PAGINATED`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeInstanceGroupManagersListManagedInstancesRequest;
import org.openapis.openapi.models.operations.ComputeInstanceGroupManagersListManagedInstancesResponse;
import org.openapis.openapi.models.operations.ComputeInstanceGroupManagersListManagedInstancesSecurity;
import org.openapis.openapi.models.operations.ComputeInstanceGroupManagersListManagedInstancesSecurityOption1;
import org.openapis.openapi.models.operations.ComputeInstanceGroupManagersListManagedInstancesSecurityOption2;
import org.openapis.openapi.models.operations.ComputeInstanceGroupManagersListManagedInstancesSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeInstanceGroupManagersListManagedInstancesRequest req = new ComputeInstanceGroupManagersListManagedInstancesRequest("eligendi", "veniam", "aperiam") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "repellat";
                alt = AltEnum.MEDIA;
                callback = "quod";
                fields = "nesciunt";
                filter = "iste";
                key = "distinctio";
                maxResults = 768501L;
                oauthToken = "assumenda";
                orderBy = "alias";
                pageToken = "deserunt";
                prettyPrint = false;
                quotaUser = "vel";
                returnPartialSuccess = false;
                uploadType = "qui";
                uploadProtocol = "perspiciatis";
                userIp = "accusantium";
            }};            

            ComputeInstanceGroupManagersListManagedInstancesResponse res = sdk.instanceGroupManagers.computeInstanceGroupManagersListManagedInstances(req, new ComputeInstanceGroupManagersListManagedInstancesSecurity() {{
                option1 = new ComputeInstanceGroupManagersListManagedInstancesSecurityOption1("voluptatibus", "occaecati") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.instanceGroupManagersListManagedInstancesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeInstanceGroupManagersListPerInstanceConfigs

Lists all of the per-instance configurations defined for the managed instance group. The orderBy query parameter is not supported.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeInstanceGroupManagersListPerInstanceConfigsRequest;
import org.openapis.openapi.models.operations.ComputeInstanceGroupManagersListPerInstanceConfigsResponse;
import org.openapis.openapi.models.operations.ComputeInstanceGroupManagersListPerInstanceConfigsSecurity;
import org.openapis.openapi.models.operations.ComputeInstanceGroupManagersListPerInstanceConfigsSecurityOption1;
import org.openapis.openapi.models.operations.ComputeInstanceGroupManagersListPerInstanceConfigsSecurityOption2;
import org.openapis.openapi.models.operations.ComputeInstanceGroupManagersListPerInstanceConfigsSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeInstanceGroupManagersListPerInstanceConfigsRequest req = new ComputeInstanceGroupManagersListPerInstanceConfigsRequest("nemo", "quam", "reiciendis") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "laudantium";
                alt = AltEnum.MEDIA;
                callback = "ab";
                fields = "atque";
                filter = "natus";
                key = "culpa";
                maxResults = 822084L;
                oauthToken = "molestiae";
                orderBy = "officiis";
                pageToken = "reiciendis";
                prettyPrint = false;
                quotaUser = "voluptatum";
                returnPartialSuccess = false;
                uploadType = "aperiam";
                uploadProtocol = "reprehenderit";
                userIp = "animi";
            }};            

            ComputeInstanceGroupManagersListPerInstanceConfigsResponse res = sdk.instanceGroupManagers.computeInstanceGroupManagersListPerInstanceConfigs(req, new ComputeInstanceGroupManagersListPerInstanceConfigsSecurity() {{
                option1 = new ComputeInstanceGroupManagersListPerInstanceConfigsSecurityOption1("officia", "eveniet") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.instanceGroupManagersListPerInstanceConfigsResp != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeInstanceGroupManagersPatch

Updates a managed instance group using the information that you specify in the request. This operation is marked as DONE when the group is patched even if the instances in the group are still in the process of being patched. You must separately verify the status of the individual instances with the listManagedInstances method. This method supports PATCH semantics and uses the JSON merge patch format and processing rules. If you update your group to specify a new template or instance configuration, it's possible that your intended specification for each VM in the group is different from the current state of that VM. To learn how to apply an updated configuration to the VMs in a MIG, see Updating instances in a MIG.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeInstanceGroupManagersPatchRequest;
import org.openapis.openapi.models.operations.ComputeInstanceGroupManagersPatchResponse;
import org.openapis.openapi.models.operations.ComputeInstanceGroupManagersPatchSecurity;
import org.openapis.openapi.models.operations.ComputeInstanceGroupManagersPatchSecurityOption1;
import org.openapis.openapi.models.operations.ComputeInstanceGroupManagersPatchSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.DistributionPolicy;
import org.openapis.openapi.models.shared.DistributionPolicyTargetShapeEnum;
import org.openapis.openapi.models.shared.DistributionPolicyZoneConfiguration;
import org.openapis.openapi.models.shared.FixedOrPercent;
import org.openapis.openapi.models.shared.InstanceGroupManager;
import org.openapis.openapi.models.shared.InstanceGroupManagerActionsSummary;
import org.openapis.openapi.models.shared.InstanceGroupManagerAutoHealingPolicy;
import org.openapis.openapi.models.shared.InstanceGroupManagerListManagedInstancesResultsEnum;
import org.openapis.openapi.models.shared.InstanceGroupManagerStatus;
import org.openapis.openapi.models.shared.InstanceGroupManagerStatusStateful;
import org.openapis.openapi.models.shared.InstanceGroupManagerStatusStatefulPerInstanceConfigs;
import org.openapis.openapi.models.shared.InstanceGroupManagerStatusVersionTarget;
import org.openapis.openapi.models.shared.InstanceGroupManagerUpdatePolicy;
import org.openapis.openapi.models.shared.InstanceGroupManagerUpdatePolicyInstanceRedistributionTypeEnum;
import org.openapis.openapi.models.shared.InstanceGroupManagerUpdatePolicyMinimalActionEnum;
import org.openapis.openapi.models.shared.InstanceGroupManagerUpdatePolicyMostDisruptiveAllowedActionEnum;
import org.openapis.openapi.models.shared.InstanceGroupManagerUpdatePolicyReplacementMethodEnum;
import org.openapis.openapi.models.shared.InstanceGroupManagerUpdatePolicyTypeEnum;
import org.openapis.openapi.models.shared.InstanceGroupManagerVersion;
import org.openapis.openapi.models.shared.NamedPort;
import org.openapis.openapi.models.shared.StatefulPolicy;
import org.openapis.openapi.models.shared.StatefulPolicyPreservedState;
import org.openapis.openapi.models.shared.StatefulPolicyPreservedStateDiskDevice;
import org.openapis.openapi.models.shared.StatefulPolicyPreservedStateDiskDeviceAutoDeleteEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeInstanceGroupManagersPatchRequest req = new ComputeInstanceGroupManagersPatchRequest("quae", "adipisci", "hic") {{
                dollarXgafv = XgafvEnum.ONE;
                instanceGroupManager1 = new InstanceGroupManager() {{
                    autoHealingPolicies = new org.openapis.openapi.models.shared.InstanceGroupManagerAutoHealingPolicy[]{{
                        add(new InstanceGroupManagerAutoHealingPolicy() {{
                            healthCheck = "optio";
                            initialDelaySec = 627374;
                        }}),
                    }};
                    baseInstanceName = "odio";
                    creationTimestamp = "unde";
                    currentActions = new InstanceGroupManagerActionsSummary() {{
                        abandoning = 992178;
                        creating = 721695;
                        creatingWithoutRetries = 589124;
                        deleting = 853532;
                        none = 923442;
                        recreating = 252685;
                        refreshing = 12210;
                        restarting = 206924;
                        resuming = 154539;
                        starting = 746232;
                        stopping = 684419;
                        suspending = 186488;
                        verifying = 416466;
                    }};;
                    description = "a";
                    distributionPolicy = new DistributionPolicy() {{
                        targetShape = DistributionPolicyTargetShapeEnum.EVEN;
                        zones = new org.openapis.openapi.models.shared.DistributionPolicyZoneConfiguration[]{{
                            add(new DistributionPolicyZoneConfiguration() {{
                                zone = "eum";
                            }}),
                        }};
                    }};;
                    fingerprint = "rem";
                    id = "expedita";
                    instanceGroup = "animi";
                    instanceTemplate = "excepturi";
                    kind = "dolores";
                    listManagedInstancesResults = InstanceGroupManagerListManagedInstancesResultsEnum.PAGELESS;
                    name = "Verna Satterfield";
                    namedPorts = new org.openapis.openapi.models.shared.NamedPort[]{{
                        add(new NamedPort() {{
                            name = "Leona Doyle";
                            port = 458850;
                        }}),
                    }};
                    region = "adipisci";
                    selfLink = "autem";
                    statefulPolicy = new StatefulPolicy() {{
                        preservedState = new StatefulPolicyPreservedState() {{
                            disks = new java.util.HashMap<String, org.openapis.openapi.models.shared.StatefulPolicyPreservedStateDiskDevice>() {{
                                put("beatae", new StatefulPolicyPreservedStateDiskDevice() {{
                                    autoDelete = StatefulPolicyPreservedStateDiskDeviceAutoDeleteEnum.NEVER;
                                }});
                                put("quia", new StatefulPolicyPreservedStateDiskDevice() {{
                                    autoDelete = StatefulPolicyPreservedStateDiskDeviceAutoDeleteEnum.NEVER;
                                }});
                            }};
                        }};;
                    }};;
                    status = new InstanceGroupManagerStatus() {{
                        autoscaler = "veritatis";
                        isStable = false;
                        stateful = new InstanceGroupManagerStatusStateful() {{
                            hasStatefulConfig = false;
                            perInstanceConfigs = new InstanceGroupManagerStatusStatefulPerInstanceConfigs() {{
                                allEffective = false;
                            }};;
                        }};;
                        versionTarget = new InstanceGroupManagerStatusVersionTarget() {{
                            isReached = false;
                        }};;
                    }};;
                    targetPools = new String[]{{
                        add("sequi"),
                    }};
                    targetSize = 926229;
                    updatePolicy = new InstanceGroupManagerUpdatePolicy() {{
                        instanceRedistributionType = InstanceGroupManagerUpdatePolicyInstanceRedistributionTypeEnum.PROACTIVE;
                        maxSurge = new FixedOrPercent() {{
                            calculated = 802082;
                            fixed = 24522;
                            percent = 268612;
                        }};;
                        maxUnavailable = new FixedOrPercent() {{
                            calculated = 431617;
                            fixed = 699109;
                            percent = 800937;
                        }};;
                        minimalAction = InstanceGroupManagerUpdatePolicyMinimalActionEnum.REFRESH;
                        mostDisruptiveAllowedAction = InstanceGroupManagerUpdatePolicyMostDisruptiveAllowedActionEnum.NONE;
                        replacementMethod = InstanceGroupManagerUpdatePolicyReplacementMethodEnum.RECREATE;
                        type = InstanceGroupManagerUpdatePolicyTypeEnum.OPPORTUNISTIC;
                    }};;
                    versions = new org.openapis.openapi.models.shared.InstanceGroupManagerVersion[]{{
                        add(new InstanceGroupManagerVersion() {{
                            instanceTemplate = "libero";
                            name = "Kenny Gislason";
                            targetSize = new FixedOrPercent() {{
                                calculated = 171640;
                                fixed = 439899;
                                percent = 794531;
                            }};
                        }}),
                        add(new InstanceGroupManagerVersion() {{
                            instanceTemplate = "non";
                            name = "Jody Collier";
                            targetSize = new FixedOrPercent() {{
                                calculated = 326775;
                                fixed = 369223;
                                percent = 193199;
                            }};
                        }}),
                        add(new InstanceGroupManagerVersion() {{
                            instanceTemplate = "quaerat";
                            name = "Eva McDermott";
                            targetSize = new FixedOrPercent() {{
                                calculated = 340587;
                                fixed = 817729;
                                percent = 696368;
                            }};
                        }}),
                    }};
                    zone = "harum";
                }};;
                accessToken = "adipisci";
                alt = AltEnum.PROTO;
                callback = "minima";
                fields = "reprehenderit";
                key = "quo";
                oauthToken = "vitae";
                prettyPrint = false;
                quotaUser = "voluptates";
                requestId = "tempora";
                uploadType = "iste";
                uploadProtocol = "molestias";
                userIp = "beatae";
            }};            

            ComputeInstanceGroupManagersPatchResponse res = sdk.instanceGroupManagers.computeInstanceGroupManagersPatch(req, new ComputeInstanceGroupManagersPatchSecurity() {{
                option1 = new ComputeInstanceGroupManagersPatchSecurityOption1("itaque", "atque") {{
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

## computeInstanceGroupManagersPatchPerInstanceConfigs

Inserts or patches per-instance configurations for the managed instance group. perInstanceConfig.name serves as a key used to distinguish whether to perform insert or patch.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeInstanceGroupManagersPatchPerInstanceConfigsRequest;
import org.openapis.openapi.models.operations.ComputeInstanceGroupManagersPatchPerInstanceConfigsResponse;
import org.openapis.openapi.models.operations.ComputeInstanceGroupManagersPatchPerInstanceConfigsSecurity;
import org.openapis.openapi.models.operations.ComputeInstanceGroupManagersPatchPerInstanceConfigsSecurityOption1;
import org.openapis.openapi.models.operations.ComputeInstanceGroupManagersPatchPerInstanceConfigsSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.InstanceGroupManagersPatchPerInstanceConfigsReq;
import org.openapis.openapi.models.shared.PerInstanceConfig;
import org.openapis.openapi.models.shared.PerInstanceConfigStatusEnum;
import org.openapis.openapi.models.shared.PreservedState;
import org.openapis.openapi.models.shared.PreservedStatePreservedDisk;
import org.openapis.openapi.models.shared.PreservedStatePreservedDiskAutoDeleteEnum;
import org.openapis.openapi.models.shared.PreservedStatePreservedDiskModeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeInstanceGroupManagersPatchPerInstanceConfigsRequest req = new ComputeInstanceGroupManagersPatchPerInstanceConfigsRequest("dolorum", "similique", "qui") {{
                dollarXgafv = XgafvEnum.ONE;
                instanceGroupManagersPatchPerInstanceConfigsReq = new InstanceGroupManagersPatchPerInstanceConfigsReq() {{
                    perInstanceConfigs = new org.openapis.openapi.models.shared.PerInstanceConfig[]{{
                        add(new PerInstanceConfig() {{
                            fingerprint = "assumenda";
                            name = "Gregg Boyer Sr.";
                            preservedState = new PreservedState() {{
                                disks = new java.util.HashMap<String, org.openapis.openapi.models.shared.PreservedStatePreservedDisk>() {{
                                    put("quidem", new PreservedStatePreservedDisk() {{
                                        autoDelete = PreservedStatePreservedDiskAutoDeleteEnum.ON_PERMANENT_INSTANCE_DELETION;
                                        mode = PreservedStatePreservedDiskModeEnum.READ_WRITE;
                                        source = "eum";
                                    }});
                                    put("non", new PreservedStatePreservedDisk() {{
                                        autoDelete = PreservedStatePreservedDiskAutoDeleteEnum.ON_PERMANENT_INSTANCE_DELETION;
                                        mode = PreservedStatePreservedDiskModeEnum.READ_WRITE;
                                        source = "porro";
                                    }});
                                    put("impedit", new PreservedStatePreservedDisk() {{
                                        autoDelete = PreservedStatePreservedDiskAutoDeleteEnum.NEVER;
                                        mode = PreservedStatePreservedDiskModeEnum.READ_ONLY;
                                        source = "iure";
                                    }});
                                    put("natus", new PreservedStatePreservedDisk() {{
                                        autoDelete = PreservedStatePreservedDiskAutoDeleteEnum.ON_PERMANENT_INSTANCE_DELETION;
                                        mode = PreservedStatePreservedDiskModeEnum.READ_ONLY;
                                        source = "aut";
                                    }});
                                }};
                                metadata = new java.util.HashMap<String, String>() {{
                                    put("quis", "possimus");
                                }};
                            }};
                            status = PerInstanceConfigStatusEnum.UNAPPLIED_DELETION;
                        }}),
                        add(new PerInstanceConfig() {{
                            fingerprint = "est";
                            name = "Cora Jakubowski III";
                            preservedState = new PreservedState() {{
                                disks = new java.util.HashMap<String, org.openapis.openapi.models.shared.PreservedStatePreservedDisk>() {{
                                    put("vero", new PreservedStatePreservedDisk() {{
                                        autoDelete = PreservedStatePreservedDiskAutoDeleteEnum.ON_PERMANENT_INSTANCE_DELETION;
                                        mode = PreservedStatePreservedDiskModeEnum.READ_ONLY;
                                        source = "quidem";
                                    }});
                                    put("aperiam", new PreservedStatePreservedDisk() {{
                                        autoDelete = PreservedStatePreservedDiskAutoDeleteEnum.ON_PERMANENT_INSTANCE_DELETION;
                                        mode = PreservedStatePreservedDiskModeEnum.READ_ONLY;
                                        source = "itaque";
                                    }});
                                    put("non", new PreservedStatePreservedDisk() {{
                                        autoDelete = PreservedStatePreservedDiskAutoDeleteEnum.NEVER;
                                        mode = PreservedStatePreservedDiskModeEnum.READ_WRITE;
                                        source = "architecto";
                                    }});
                                }};
                                metadata = new java.util.HashMap<String, String>() {{
                                    put("fuga", "perferendis");
                                    put("illo", "perferendis");
                                    put("eveniet", "excepturi");
                                }};
                            }};
                            status = PerInstanceConfigStatusEnum.UNAPPLIED;
                        }}),
                    }};
                }};;
                accessToken = "culpa";
                alt = AltEnum.PROTO;
                callback = "sunt";
                fields = "necessitatibus";
                key = "iste";
                oauthToken = "veritatis";
                prettyPrint = false;
                quotaUser = "adipisci";
                requestId = "quis";
                uploadType = "quis";
                uploadProtocol = "quos";
                userIp = "ea";
            }};            

            ComputeInstanceGroupManagersPatchPerInstanceConfigsResponse res = sdk.instanceGroupManagers.computeInstanceGroupManagersPatchPerInstanceConfigs(req, new ComputeInstanceGroupManagersPatchPerInstanceConfigsSecurity() {{
                option1 = new ComputeInstanceGroupManagersPatchPerInstanceConfigsSecurityOption1("fugiat", "dicta") {{
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

## computeInstanceGroupManagersRecreateInstances

Flags the specified VM instances in the managed instance group to be immediately recreated. Each instance is recreated using the group's current configuration. This operation is marked as DONE when the flag is set even if the instances have not yet been recreated. You must separately verify the status of each instance by checking its currentAction field; for more information, see Checking the status of managed instances. If the group is part of a backend service that has enabled connection draining, it can take up to 60 seconds after the connection draining duration has elapsed before the VM instance is removed or deleted. You can specify a maximum of 1000 instances with this method per request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeInstanceGroupManagersRecreateInstancesRequest;
import org.openapis.openapi.models.operations.ComputeInstanceGroupManagersRecreateInstancesResponse;
import org.openapis.openapi.models.operations.ComputeInstanceGroupManagersRecreateInstancesSecurity;
import org.openapis.openapi.models.operations.ComputeInstanceGroupManagersRecreateInstancesSecurityOption1;
import org.openapis.openapi.models.operations.ComputeInstanceGroupManagersRecreateInstancesSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.InstanceGroupManagersRecreateInstancesRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeInstanceGroupManagersRecreateInstancesRequest req = new ComputeInstanceGroupManagersRecreateInstancesRequest("quas", "delectus", "sint") {{
                dollarXgafv = XgafvEnum.TWO;
                instanceGroupManagersRecreateInstancesRequest = new InstanceGroupManagersRecreateInstancesRequest() {{
                    instances = new String[]{{
                        add("reprehenderit"),
                        add("est"),
                        add("numquam"),
                    }};
                }};;
                accessToken = "nam";
                alt = AltEnum.PROTO;
                callback = "fuga";
                fields = "facere";
                key = "odit";
                oauthToken = "nam";
                prettyPrint = false;
                quotaUser = "asperiores";
                requestId = "quam";
                uploadType = "fugiat";
                uploadProtocol = "ea";
                userIp = "molestiae";
            }};            

            ComputeInstanceGroupManagersRecreateInstancesResponse res = sdk.instanceGroupManagers.computeInstanceGroupManagersRecreateInstances(req, new ComputeInstanceGroupManagersRecreateInstancesSecurity() {{
                option1 = new ComputeInstanceGroupManagersRecreateInstancesSecurityOption1("quo", "deserunt") {{
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

## computeInstanceGroupManagersResize

Resizes the managed instance group. If you increase the size, the group creates new instances using the current instance template. If you decrease the size, the group deletes instances. The resize operation is marked DONE when the resize actions are scheduled even if the group has not yet added or deleted any instances. You must separately verify the status of the creating or deleting actions with the listmanagedinstances method. When resizing down, the instance group arbitrarily chooses the order in which VMs are deleted. The group takes into account some VM attributes when making the selection including: + The status of the VM instance. + The health of the VM instance. + The instance template version the VM is based on. + For regional managed instance groups, the location of the VM instance. This list is subject to change. If the group is part of a backend service that has enabled connection draining, it can take up to 60 seconds after the connection draining duration has elapsed before the VM instance is removed or deleted.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeInstanceGroupManagersResizeRequest;
import org.openapis.openapi.models.operations.ComputeInstanceGroupManagersResizeResponse;
import org.openapis.openapi.models.operations.ComputeInstanceGroupManagersResizeSecurity;
import org.openapis.openapi.models.operations.ComputeInstanceGroupManagersResizeSecurityOption1;
import org.openapis.openapi.models.operations.ComputeInstanceGroupManagersResizeSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeInstanceGroupManagersResizeRequest req = new ComputeInstanceGroupManagersResizeRequest("totam", "modi", 660582L, "repellendus") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "unde";
                alt = AltEnum.PROTO;
                callback = "eius";
                fields = "quasi";
                key = "quibusdam";
                oauthToken = "voluptas";
                prettyPrint = false;
                quotaUser = "quasi";
                requestId = "magni";
                uploadType = "numquam";
                uploadProtocol = "velit";
                userIp = "quis";
            }};            

            ComputeInstanceGroupManagersResizeResponse res = sdk.instanceGroupManagers.computeInstanceGroupManagersResize(req, new ComputeInstanceGroupManagersResizeSecurity() {{
                option1 = new ComputeInstanceGroupManagersResizeSecurityOption1("nesciunt", "sunt") {{
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

## computeInstanceGroupManagersSetInstanceTemplate

Specifies the instance template to use when creating new instances in this group. The templates for existing instances in the group do not change unless you run recreateInstances, run applyUpdatesToInstances, or set the group's updatePolicy.type to PROACTIVE.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeInstanceGroupManagersSetInstanceTemplateRequest;
import org.openapis.openapi.models.operations.ComputeInstanceGroupManagersSetInstanceTemplateResponse;
import org.openapis.openapi.models.operations.ComputeInstanceGroupManagersSetInstanceTemplateSecurity;
import org.openapis.openapi.models.operations.ComputeInstanceGroupManagersSetInstanceTemplateSecurityOption1;
import org.openapis.openapi.models.operations.ComputeInstanceGroupManagersSetInstanceTemplateSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.InstanceGroupManagersSetInstanceTemplateRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeInstanceGroupManagersSetInstanceTemplateRequest req = new ComputeInstanceGroupManagersSetInstanceTemplateRequest("blanditiis", "quam", "perferendis") {{
                dollarXgafv = XgafvEnum.TWO;
                instanceGroupManagersSetInstanceTemplateRequest = new InstanceGroupManagersSetInstanceTemplateRequest() {{
                    instanceTemplate = "delectus";
                }};;
                accessToken = "ea";
                alt = AltEnum.MEDIA;
                callback = "quidem";
                fields = "eaque";
                key = "sequi";
                oauthToken = "fuga";
                prettyPrint = false;
                quotaUser = "assumenda";
                requestId = "modi";
                uploadType = "dolores";
                uploadProtocol = "beatae";
                userIp = "rerum";
            }};            

            ComputeInstanceGroupManagersSetInstanceTemplateResponse res = sdk.instanceGroupManagers.computeInstanceGroupManagersSetInstanceTemplate(req, new ComputeInstanceGroupManagersSetInstanceTemplateSecurity() {{
                option1 = new ComputeInstanceGroupManagersSetInstanceTemplateSecurityOption1("repellendus", "ut") {{
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

## computeInstanceGroupManagersSetTargetPools

Modifies the target pools to which all instances in this managed instance group are assigned. The target pools automatically apply to all of the instances in the managed instance group. This operation is marked DONE when you make the request even if the instances have not yet been added to their target pools. The change might take some time to apply to all of the instances in the group depending on the size of the group.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeInstanceGroupManagersSetTargetPoolsRequest;
import org.openapis.openapi.models.operations.ComputeInstanceGroupManagersSetTargetPoolsResponse;
import org.openapis.openapi.models.operations.ComputeInstanceGroupManagersSetTargetPoolsSecurity;
import org.openapis.openapi.models.operations.ComputeInstanceGroupManagersSetTargetPoolsSecurityOption1;
import org.openapis.openapi.models.operations.ComputeInstanceGroupManagersSetTargetPoolsSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.InstanceGroupManagersSetTargetPoolsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeInstanceGroupManagersSetTargetPoolsRequest req = new ComputeInstanceGroupManagersSetTargetPoolsRequest("nesciunt", "facere", "beatae") {{
                dollarXgafv = XgafvEnum.TWO;
                instanceGroupManagersSetTargetPoolsRequest = new InstanceGroupManagersSetTargetPoolsRequest() {{
                    fingerprint = "ipsa";
                    targetPools = new String[]{{
                        add("libero"),
                        add("eaque"),
                        add("animi"),
                        add("doloremque"),
                    }};
                }};;
                accessToken = "consequatur";
                alt = AltEnum.JSON;
                callback = "dolor";
                fields = "earum";
                key = "facilis";
                oauthToken = "eos";
                prettyPrint = false;
                quotaUser = "sed";
                requestId = "fugiat";
                uploadType = "sint";
                uploadProtocol = "tempore";
                userIp = "dolorem";
            }};            

            ComputeInstanceGroupManagersSetTargetPoolsResponse res = sdk.instanceGroupManagers.computeInstanceGroupManagersSetTargetPools(req, new ComputeInstanceGroupManagersSetTargetPoolsSecurity() {{
                option1 = new ComputeInstanceGroupManagersSetTargetPoolsSecurityOption1("dolorum", "in") {{
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

## computeInstanceGroupManagersUpdatePerInstanceConfigs

Inserts or updates per-instance configurations for the managed instance group. perInstanceConfig.name serves as a key used to distinguish whether to perform insert or patch.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeInstanceGroupManagersUpdatePerInstanceConfigsRequest;
import org.openapis.openapi.models.operations.ComputeInstanceGroupManagersUpdatePerInstanceConfigsResponse;
import org.openapis.openapi.models.operations.ComputeInstanceGroupManagersUpdatePerInstanceConfigsSecurity;
import org.openapis.openapi.models.operations.ComputeInstanceGroupManagersUpdatePerInstanceConfigsSecurityOption1;
import org.openapis.openapi.models.operations.ComputeInstanceGroupManagersUpdatePerInstanceConfigsSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.InstanceGroupManagersUpdatePerInstanceConfigsReq;
import org.openapis.openapi.models.shared.PerInstanceConfig;
import org.openapis.openapi.models.shared.PerInstanceConfigStatusEnum;
import org.openapis.openapi.models.shared.PreservedState;
import org.openapis.openapi.models.shared.PreservedStatePreservedDisk;
import org.openapis.openapi.models.shared.PreservedStatePreservedDiskAutoDeleteEnum;
import org.openapis.openapi.models.shared.PreservedStatePreservedDiskModeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeInstanceGroupManagersUpdatePerInstanceConfigsRequest req = new ComputeInstanceGroupManagersUpdatePerInstanceConfigsRequest("aperiam", "pariatur", "excepturi") {{
                dollarXgafv = XgafvEnum.ONE;
                instanceGroupManagersUpdatePerInstanceConfigsReq = new InstanceGroupManagersUpdatePerInstanceConfigsReq() {{
                    perInstanceConfigs = new org.openapis.openapi.models.shared.PerInstanceConfig[]{{
                        add(new PerInstanceConfig() {{
                            fingerprint = "fuga";
                            name = "Miss Gabriel Green";
                            preservedState = new PreservedState() {{
                                disks = new java.util.HashMap<String, org.openapis.openapi.models.shared.PreservedStatePreservedDisk>() {{
                                    put("quibusdam", new PreservedStatePreservedDisk() {{
                                        autoDelete = PreservedStatePreservedDiskAutoDeleteEnum.NEVER;
                                        mode = PreservedStatePreservedDiskModeEnum.READ_WRITE;
                                        source = "vero";
                                    }});
                                    put("quibusdam", new PreservedStatePreservedDisk() {{
                                        autoDelete = PreservedStatePreservedDiskAutoDeleteEnum.ON_PERMANENT_INSTANCE_DELETION;
                                        mode = PreservedStatePreservedDiskModeEnum.READ_ONLY;
                                        source = "sit";
                                    }});
                                }};
                                metadata = new java.util.HashMap<String, String>() {{
                                    put("doloremque", "repellendus");
                                    put("ratione", "quos");
                                }};
                            }};
                            status = PerInstanceConfigStatusEnum.UNAPPLIED_DELETION;
                        }}),
                        add(new PerInstanceConfig() {{
                            fingerprint = "quo";
                            name = "Ms. Roxanne Waelchi";
                            preservedState = new PreservedState() {{
                                disks = new java.util.HashMap<String, org.openapis.openapi.models.shared.PreservedStatePreservedDisk>() {{
                                    put("iusto", new PreservedStatePreservedDisk() {{
                                        autoDelete = PreservedStatePreservedDiskAutoDeleteEnum.NEVER;
                                        mode = PreservedStatePreservedDiskModeEnum.READ_WRITE;
                                        source = "occaecati";
                                    }});
                                    put("necessitatibus", new PreservedStatePreservedDisk() {{
                                        autoDelete = PreservedStatePreservedDiskAutoDeleteEnum.ON_PERMANENT_INSTANCE_DELETION;
                                        mode = PreservedStatePreservedDiskModeEnum.READ_ONLY;
                                        source = "natus";
                                    }});
                                }};
                                metadata = new java.util.HashMap<String, String>() {{
                                    put("iure", "ex");
                                }};
                            }};
                            status = PerInstanceConfigStatusEnum.NONE;
                        }}),
                        add(new PerInstanceConfig() {{
                            fingerprint = "deleniti";
                            name = "Bert Fisher";
                            preservedState = new PreservedState() {{
                                disks = new java.util.HashMap<String, org.openapis.openapi.models.shared.PreservedStatePreservedDisk>() {{
                                    put("debitis", new PreservedStatePreservedDisk() {{
                                        autoDelete = PreservedStatePreservedDiskAutoDeleteEnum.ON_PERMANENT_INSTANCE_DELETION;
                                        mode = PreservedStatePreservedDiskModeEnum.READ_WRITE;
                                        source = "blanditiis";
                                    }});
                                    put("libero", new PreservedStatePreservedDisk() {{
                                        autoDelete = PreservedStatePreservedDiskAutoDeleteEnum.NEVER;
                                        mode = PreservedStatePreservedDiskModeEnum.READ_WRITE;
                                        source = "fugit";
                                    }});
                                }};
                                metadata = new java.util.HashMap<String, String>() {{
                                    put("dignissimos", "corporis");
                                    put("quo", "nisi");
                                    put("quo", "inventore");
                                }};
                            }};
                            status = PerInstanceConfigStatusEnum.UNAPPLIED_DELETION;
                        }}),
                        add(new PerInstanceConfig() {{
                            fingerprint = "officiis";
                            name = "Lisa Huel IV";
                            preservedState = new PreservedState() {{
                                disks = new java.util.HashMap<String, org.openapis.openapi.models.shared.PreservedStatePreservedDisk>() {{
                                    put("qui", new PreservedStatePreservedDisk() {{
                                        autoDelete = PreservedStatePreservedDiskAutoDeleteEnum.ON_PERMANENT_INSTANCE_DELETION;
                                        mode = PreservedStatePreservedDiskModeEnum.READ_WRITE;
                                        source = "impedit";
                                    }});
                                    put("laudantium", new PreservedStatePreservedDisk() {{
                                        autoDelete = PreservedStatePreservedDiskAutoDeleteEnum.NEVER;
                                        mode = PreservedStatePreservedDiskModeEnum.READ_WRITE;
                                        source = "repudiandae";
                                    }});
                                    put("nemo", new PreservedStatePreservedDisk() {{
                                        autoDelete = PreservedStatePreservedDiskAutoDeleteEnum.NEVER;
                                        mode = PreservedStatePreservedDiskModeEnum.READ_WRITE;
                                        source = "vitae";
                                    }});
                                    put("vel", new PreservedStatePreservedDisk() {{
                                        autoDelete = PreservedStatePreservedDiskAutoDeleteEnum.NEVER;
                                        mode = PreservedStatePreservedDiskModeEnum.READ_ONLY;
                                        source = "veritatis";
                                    }});
                                }};
                                metadata = new java.util.HashMap<String, String>() {{
                                    put("veritatis", "temporibus");
                                    put("excepturi", "veritatis");
                                    put("ipsum", "iure");
                                }};
                            }};
                            status = PerInstanceConfigStatusEnum.NONE;
                        }}),
                    }};
                }};;
                accessToken = "molestiae";
                alt = AltEnum.PROTO;
                callback = "voluptatum";
                fields = "possimus";
                key = "minima";
                oauthToken = "non";
                prettyPrint = false;
                quotaUser = "qui";
                requestId = "et";
                uploadType = "amet";
                uploadProtocol = "tenetur";
                userIp = "velit";
            }};            

            ComputeInstanceGroupManagersUpdatePerInstanceConfigsResponse res = sdk.instanceGroupManagers.computeInstanceGroupManagersUpdatePerInstanceConfigs(req, new ComputeInstanceGroupManagersUpdatePerInstanceConfigsSecurity() {{
                option1 = new ComputeInstanceGroupManagersUpdatePerInstanceConfigsSecurityOption1("asperiores", "commodi") {{
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
