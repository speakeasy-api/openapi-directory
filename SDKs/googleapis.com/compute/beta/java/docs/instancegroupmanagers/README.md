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
* [computeInstanceGroupManagersResizeAdvanced](#computeinstancegroupmanagersresizeadvanced) - Resizes the managed instance group with advanced configuration options like disabling creation retries. This is an extended version of the resize method. If you increase the size of the instance group, the group creates new instances using the current instance template. If you decrease the size, the group deletes instances. The resize operation is marked DONE when the resize actions are scheduled even if the group has not yet added or deleted any instances. You must separately verify the status of the creating, creatingWithoutRetries, or deleting actions with the get or listmanagedinstances method. If the group is part of a backend service that has enabled connection draining, it can take up to 60 seconds after the connection draining duration has elapsed before the VM instance is removed or deleted.
* [computeInstanceGroupManagersSetAutoHealingPolicies](#computeinstancegroupmanagerssetautohealingpolicies) - Motifies the autohealing policy for the instances in this managed instance group. [Deprecated] This method is deprecated. Use instanceGroupManagers.patch instead.
* [computeInstanceGroupManagersSetInstanceTemplate](#computeinstancegroupmanagerssetinstancetemplate) - Specifies the instance template to use when creating new instances in this group. The templates for existing instances in the group do not change unless you run recreateInstances, run applyUpdatesToInstances, or set the group's updatePolicy.type to PROACTIVE.
* [computeInstanceGroupManagersSetTargetPools](#computeinstancegroupmanagerssettargetpools) - Modifies the target pools to which all instances in this managed instance group are assigned. The target pools automatically apply to all of the instances in the managed instance group. This operation is marked DONE when you make the request even if the instances have not yet been added to their target pools. The change might take some time to apply to all of the instances in the group depending on the size of the group.
* [computeInstanceGroupManagersTestIamPermissions](#computeinstancegroupmanagerstestiampermissions) - Returns permissions that a caller has on the specified resource.
* [computeInstanceGroupManagersUpdate](#computeinstancegroupmanagersupdate) - Updates a managed instance group using the information that you specify in the request. This operation is marked as DONE when the group is updated even if the instances in the group have not yet been updated. You must separately verify the status of the individual instances with the listManagedInstances method. If you update your group to specify a new template or instance configuration, it's possible that your intended specification for each VM in the group is different from the current state of that VM. To learn how to apply an updated configuration to the VMs in a MIG, see Updating instances in a MIG.
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

            ComputeInstanceGroupManagersAbandonInstancesRequest req = new ComputeInstanceGroupManagersAbandonInstancesRequest("error", "animi", "ducimus") {{
                dollarXgafv = XgafvEnum.ONE;
                instanceGroupManagersAbandonInstancesRequest = new InstanceGroupManagersAbandonInstancesRequest() {{
                    instances = new String[]{{
                        add("reiciendis"),
                        add("quibusdam"),
                        add("veniam"),
                        add("pariatur"),
                    }};
                }};;
                accessToken = "commodi";
                alt = AltEnum.MEDIA;
                callback = "corrupti";
                fields = "iste";
                key = "distinctio";
                oauthToken = "in";
                prettyPrint = false;
                quotaUser = "consequuntur";
                requestId = "voluptatem";
                uploadType = "voluptas";
                uploadProtocol = "magnam";
                userIp = "ad";
            }};            

            ComputeInstanceGroupManagersAbandonInstancesResponse res = sdk.instanceGroupManagers.computeInstanceGroupManagersAbandonInstances(req, new ComputeInstanceGroupManagersAbandonInstancesSecurity() {{
                option1 = new ComputeInstanceGroupManagersAbandonInstancesSecurityOption1("quae", "ipsa") {{
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

            ComputeInstanceGroupManagersAggregatedListRequest req = new ComputeInstanceGroupManagersAggregatedListRequest("iure") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "illum";
                alt = AltEnum.JSON;
                callback = "perspiciatis";
                fields = "accusamus";
                filter = "laborum";
                includeAllScopes = false;
                key = "voluptatum";
                maxResults = 188008L;
                oauthToken = "facere";
                orderBy = "eius";
                pageToken = "perspiciatis";
                prettyPrint = false;
                quotaUser = "consequuntur";
                returnPartialSuccess = false;
                uploadType = "earum";
                uploadProtocol = "quibusdam";
                userIp = "inventore";
            }};            

            ComputeInstanceGroupManagersAggregatedListResponse res = sdk.instanceGroupManagers.computeInstanceGroupManagersAggregatedList(req, new ComputeInstanceGroupManagersAggregatedListSecurity() {{
                option1 = new ComputeInstanceGroupManagersAggregatedListSecurityOption1("ut", "tempore") {{
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

            ComputeInstanceGroupManagersApplyUpdatesToInstancesRequest req = new ComputeInstanceGroupManagersApplyUpdatesToInstancesRequest("molestias", "fuga", "odit") {{
                dollarXgafv = XgafvEnum.TWO;
                instanceGroupManagersApplyUpdatesRequest = new InstanceGroupManagersApplyUpdatesRequest() {{
                    allInstances = false;
                    instances = new String[]{{
                        add("sint"),
                    }};
                    minimalAction = InstanceGroupManagersApplyUpdatesRequestMinimalActionEnum.REFRESH;
                    mostDisruptiveAllowedAction = InstanceGroupManagersApplyUpdatesRequestMostDisruptiveAllowedActionEnum.REFRESH;
                }};;
                accessToken = "veniam";
                alt = AltEnum.JSON;
                callback = "minima";
                fields = "officiis";
                key = "unde";
                oauthToken = "ullam";
                prettyPrint = false;
                quotaUser = "enim";
                uploadType = "facere";
                uploadProtocol = "cumque";
                userIp = "cumque";
            }};            

            ComputeInstanceGroupManagersApplyUpdatesToInstancesResponse res = sdk.instanceGroupManagers.computeInstanceGroupManagersApplyUpdatesToInstances(req, new ComputeInstanceGroupManagersApplyUpdatesToInstancesSecurity() {{
                option1 = new ComputeInstanceGroupManagersApplyUpdatesToInstancesSecurityOption1("et", "praesentium") {{
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
import org.openapis.openapi.models.shared.PreservedStatePreservedNetworkIp;
import org.openapis.openapi.models.shared.PreservedStatePreservedNetworkIpAutoDeleteEnum;
import org.openapis.openapi.models.shared.PreservedStatePreservedNetworkIpIpAddress;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeInstanceGroupManagersCreateInstancesRequest req = new ComputeInstanceGroupManagersCreateInstancesRequest("minima", "eveniet", "est") {{
                dollarXgafv = XgafvEnum.ONE;
                instanceGroupManagersCreateInstancesRequest = new InstanceGroupManagersCreateInstancesRequest() {{
                    instances = new org.openapis.openapi.models.shared.PerInstanceConfig[]{{
                        add(new PerInstanceConfig() {{
                            fingerprint = "consequatur";
                            name = "Sheri Kessler";
                            preservedState = new PreservedState() {{
                                disks = new java.util.HashMap<String, org.openapis.openapi.models.shared.PreservedStatePreservedDisk>() {{
                                    put("culpa", new PreservedStatePreservedDisk() {{
                                        autoDelete = PreservedStatePreservedDiskAutoDeleteEnum.ON_PERMANENT_INSTANCE_DELETION;
                                        mode = PreservedStatePreservedDiskModeEnum.READ_ONLY;
                                        source = "nulla";
                                    }});
                                }};
                                externalIPs = new java.util.HashMap<String, org.openapis.openapi.models.shared.PreservedStatePreservedNetworkIp>() {{
                                    put("animi", new PreservedStatePreservedNetworkIp() {{
                                        autoDelete = PreservedStatePreservedNetworkIpAutoDeleteEnum.NEVER;
                                        ipAddress = new PreservedStatePreservedNetworkIpIpAddress() {{
                                            address = "2676 Rosina Crescent";
                                            literal = "amet";
                                        }};
                                    }});
                                    put("aut", new PreservedStatePreservedNetworkIp() {{
                                        autoDelete = PreservedStatePreservedNetworkIpAutoDeleteEnum.ON_PERMANENT_INSTANCE_DELETION;
                                        ipAddress = new PreservedStatePreservedNetworkIpIpAddress() {{
                                            address = "942 Braun Corners";
                                            literal = "laborum";
                                        }};
                                    }});
                                    put("beatae", new PreservedStatePreservedNetworkIp() {{
                                        autoDelete = PreservedStatePreservedNetworkIpAutoDeleteEnum.NEVER;
                                        ipAddress = new PreservedStatePreservedNetworkIpIpAddress() {{
                                            address = "2517 Kutch Unions";
                                            literal = "repellendus";
                                        }};
                                    }});
                                }};
                                internalIPs = new java.util.HashMap<String, org.openapis.openapi.models.shared.PreservedStatePreservedNetworkIp>() {{
                                    put("voluptas", new PreservedStatePreservedNetworkIp() {{
                                        autoDelete = PreservedStatePreservedNetworkIpAutoDeleteEnum.NEVER;
                                        ipAddress = new PreservedStatePreservedNetworkIpIpAddress() {{
                                            address = "44107 Kaci Ways";
                                            literal = "magnam";
                                        }};
                                    }});
                                    put("nulla", new PreservedStatePreservedNetworkIp() {{
                                        autoDelete = PreservedStatePreservedNetworkIpAutoDeleteEnum.NEVER;
                                        ipAddress = new PreservedStatePreservedNetworkIpIpAddress() {{
                                            address = "53342 Corkery Burg";
                                            literal = "fuga";
                                        }};
                                    }});
                                }};
                                metadata = new java.util.HashMap<String, String>() {{
                                    put("reprehenderit", "dicta");
                                }};
                            }};
                            status = PerInstanceConfigStatusEnum.APPLYING;
                        }}),
                        add(new PerInstanceConfig() {{
                            fingerprint = "similique";
                            name = "Leslie Carroll";
                            preservedState = new PreservedState() {{
                                disks = new java.util.HashMap<String, org.openapis.openapi.models.shared.PreservedStatePreservedDisk>() {{
                                    put("deserunt", new PreservedStatePreservedDisk() {{
                                        autoDelete = PreservedStatePreservedDiskAutoDeleteEnum.NEVER;
                                        mode = PreservedStatePreservedDiskModeEnum.READ_WRITE;
                                        source = "facilis";
                                    }});
                                    put("libero", new PreservedStatePreservedDisk() {{
                                        autoDelete = PreservedStatePreservedDiskAutoDeleteEnum.ON_PERMANENT_INSTANCE_DELETION;
                                        mode = PreservedStatePreservedDiskModeEnum.READ_WRITE;
                                        source = "enim";
                                    }});
                                }};
                                externalIPs = new java.util.HashMap<String, org.openapis.openapi.models.shared.PreservedStatePreservedNetworkIp>() {{
                                    put("sed", new PreservedStatePreservedNetworkIp() {{
                                        autoDelete = PreservedStatePreservedNetworkIpAutoDeleteEnum.ON_PERMANENT_INSTANCE_DELETION;
                                        ipAddress = new PreservedStatePreservedNetworkIpIpAddress() {{
                                            address = "5179 Kamren Court";
                                            literal = "dolores";
                                        }};
                                    }});
                                }};
                                internalIPs = new java.util.HashMap<String, org.openapis.openapi.models.shared.PreservedStatePreservedNetworkIp>() {{
                                    put("nam", new PreservedStatePreservedNetworkIp() {{
                                        autoDelete = PreservedStatePreservedNetworkIpAutoDeleteEnum.NEVER;
                                        ipAddress = new PreservedStatePreservedNetworkIpIpAddress() {{
                                            address = "17545 Devin Burgs";
                                            literal = "nobis";
                                        }};
                                    }});
                                    put("asperiores", new PreservedStatePreservedNetworkIp() {{
                                        autoDelete = PreservedStatePreservedNetworkIpAutoDeleteEnum.NEVER;
                                        ipAddress = new PreservedStatePreservedNetworkIpIpAddress() {{
                                            address = "59559 Wuckert Cliff";
                                            literal = "harum";
                                        }};
                                    }});
                                    put("a", new PreservedStatePreservedNetworkIp() {{
                                        autoDelete = PreservedStatePreservedNetworkIpAutoDeleteEnum.NEVER;
                                        ipAddress = new PreservedStatePreservedNetworkIpIpAddress() {{
                                            address = "858 Willis Dale";
                                            literal = "perferendis";
                                        }};
                                    }});
                                    put("eum", new PreservedStatePreservedNetworkIp() {{
                                        autoDelete = PreservedStatePreservedNetworkIpAutoDeleteEnum.ON_PERMANENT_INSTANCE_DELETION;
                                        ipAddress = new PreservedStatePreservedNetworkIpIpAddress() {{
                                            address = "8510 Bauch Camp";
                                            literal = "laudantium";
                                        }};
                                    }});
                                }};
                                metadata = new java.util.HashMap<String, String>() {{
                                    put("voluptatem", "provident");
                                }};
                            }};
                            status = PerInstanceConfigStatusEnum.APPLYING;
                        }}),
                        add(new PerInstanceConfig() {{
                            fingerprint = "delectus";
                            name = "Marcia Berge";
                            preservedState = new PreservedState() {{
                                disks = new java.util.HashMap<String, org.openapis.openapi.models.shared.PreservedStatePreservedDisk>() {{
                                    put("adipisci", new PreservedStatePreservedDisk() {{
                                        autoDelete = PreservedStatePreservedDiskAutoDeleteEnum.ON_PERMANENT_INSTANCE_DELETION;
                                        mode = PreservedStatePreservedDiskModeEnum.READ_ONLY;
                                        source = "id";
                                    }});
                                    put("ex", new PreservedStatePreservedDisk() {{
                                        autoDelete = PreservedStatePreservedDiskAutoDeleteEnum.ON_PERMANENT_INSTANCE_DELETION;
                                        mode = PreservedStatePreservedDiskModeEnum.READ_ONLY;
                                        source = "minus";
                                    }});
                                }};
                                externalIPs = new java.util.HashMap<String, org.openapis.openapi.models.shared.PreservedStatePreservedNetworkIp>() {{
                                    put("molestiae", new PreservedStatePreservedNetworkIp() {{
                                        autoDelete = PreservedStatePreservedNetworkIpAutoDeleteEnum.NEVER;
                                        ipAddress = new PreservedStatePreservedNetworkIpIpAddress() {{
                                            address = "8794 Braxton Forks";
                                            literal = "accusantium";
                                        }};
                                    }});
                                    put("excepturi", new PreservedStatePreservedNetworkIp() {{
                                        autoDelete = PreservedStatePreservedNetworkIpAutoDeleteEnum.ON_PERMANENT_INSTANCE_DELETION;
                                        ipAddress = new PreservedStatePreservedNetworkIpIpAddress() {{
                                            address = "13805 Adrienne Corners";
                                            literal = "tempora";
                                        }};
                                    }});
                                }};
                                internalIPs = new java.util.HashMap<String, org.openapis.openapi.models.shared.PreservedStatePreservedNetworkIp>() {{
                                    put("cupiditate", new PreservedStatePreservedNetworkIp() {{
                                        autoDelete = PreservedStatePreservedNetworkIpAutoDeleteEnum.ON_PERMANENT_INSTANCE_DELETION;
                                        ipAddress = new PreservedStatePreservedNetworkIpIpAddress() {{
                                            address = "93182 White Fields";
                                            literal = "pariatur";
                                        }};
                                    }});
                                    put("vero", new PreservedStatePreservedNetworkIp() {{
                                        autoDelete = PreservedStatePreservedNetworkIpAutoDeleteEnum.ON_PERMANENT_INSTANCE_DELETION;
                                        ipAddress = new PreservedStatePreservedNetworkIpIpAddress() {{
                                            address = "862 Scottie Spurs";
                                            literal = "pariatur";
                                        }};
                                    }});
                                    put("vel", new PreservedStatePreservedNetworkIp() {{
                                        autoDelete = PreservedStatePreservedNetworkIpAutoDeleteEnum.NEVER;
                                        ipAddress = new PreservedStatePreservedNetworkIpIpAddress() {{
                                            address = "52926 Magnolia Pass";
                                            literal = "quas";
                                        }};
                                    }});
                                }};
                                metadata = new java.util.HashMap<String, String>() {{
                                    put("modi", "assumenda");
                                    put("maiores", "neque");
                                    put("in", "debitis");
                                    put("quaerat", "nostrum");
                                }};
                            }};
                            status = PerInstanceConfigStatusEnum.UNAPPLIED;
                        }}),
                    }};
                }};;
                accessToken = "totam";
                alt = AltEnum.MEDIA;
                callback = "veniam";
                fields = "nostrum";
                key = "facere";
                oauthToken = "aliquam";
                prettyPrint = false;
                quotaUser = "vitae";
                requestId = "ipsum";
                uploadType = "recusandae";
                uploadProtocol = "inventore";
                userIp = "ipsum";
            }};            

            ComputeInstanceGroupManagersCreateInstancesResponse res = sdk.instanceGroupManagers.computeInstanceGroupManagersCreateInstances(req, new ComputeInstanceGroupManagersCreateInstancesSecurity() {{
                option1 = new ComputeInstanceGroupManagersCreateInstancesSecurityOption1("error", "numquam") {{
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

            ComputeInstanceGroupManagersDeleteRequest req = new ComputeInstanceGroupManagersDeleteRequest("praesentium", "dolores", "consectetur") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "ipsa";
                alt = AltEnum.MEDIA;
                callback = "perferendis";
                fields = "iure";
                key = "cum";
                oauthToken = "facere";
                prettyPrint = false;
                quotaUser = "ratione";
                requestId = "quis";
                uploadType = "modi";
                uploadProtocol = "quo";
                userIp = "aut";
            }};            

            ComputeInstanceGroupManagersDeleteResponse res = sdk.instanceGroupManagers.computeInstanceGroupManagersDelete(req, new ComputeInstanceGroupManagersDeleteSecurity() {{
                option1 = new ComputeInstanceGroupManagersDeleteSecurityOption1("cupiditate", "sed") {{
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

            ComputeInstanceGroupManagersDeleteInstancesRequest req = new ComputeInstanceGroupManagersDeleteInstancesRequest("harum", "vero", "nihil") {{
                dollarXgafv = XgafvEnum.ONE;
                instanceGroupManagersDeleteInstancesRequest = new InstanceGroupManagersDeleteInstancesRequest() {{
                    instances = new String[]{{
                        add("a"),
                        add("consequatur"),
                    }};
                    skipInstancesOnValidationError = false;
                }};;
                accessToken = "consequuntur";
                alt = AltEnum.JSON;
                callback = "numquam";
                fields = "excepturi";
                key = "pariatur";
                oauthToken = "voluptatum";
                prettyPrint = false;
                quotaUser = "vel";
                requestId = "delectus";
                uploadType = "modi";
                uploadProtocol = "expedita";
                userIp = "quidem";
            }};            

            ComputeInstanceGroupManagersDeleteInstancesResponse res = sdk.instanceGroupManagers.computeInstanceGroupManagersDeleteInstances(req, new ComputeInstanceGroupManagersDeleteInstancesSecurity() {{
                option1 = new ComputeInstanceGroupManagersDeleteInstancesSecurityOption1("consequuntur", "eaque") {{
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

            ComputeInstanceGroupManagersDeletePerInstanceConfigsRequest req = new ComputeInstanceGroupManagersDeletePerInstanceConfigsRequest("asperiores", "debitis", "nostrum") {{
                dollarXgafv = XgafvEnum.TWO;
                instanceGroupManagersDeletePerInstanceConfigsReq = new InstanceGroupManagersDeletePerInstanceConfigsReq() {{
                    names = new String[]{{
                        add("veritatis"),
                        add("sunt"),
                        add("quod"),
                    }};
                }};;
                accessToken = "expedita";
                alt = AltEnum.PROTO;
                callback = "itaque";
                fields = "dignissimos";
                key = "magnam";
                oauthToken = "excepturi";
                prettyPrint = false;
                quotaUser = "placeat";
                uploadType = "dolorum";
                uploadProtocol = "voluptatibus";
                userIp = "modi";
            }};            

            ComputeInstanceGroupManagersDeletePerInstanceConfigsResponse res = sdk.instanceGroupManagers.computeInstanceGroupManagersDeletePerInstanceConfigs(req, new ComputeInstanceGroupManagersDeletePerInstanceConfigsSecurity() {{
                option1 = new ComputeInstanceGroupManagersDeletePerInstanceConfigsSecurityOption1("enim", "mollitia") {{
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

            ComputeInstanceGroupManagersGetRequest req = new ComputeInstanceGroupManagersGetRequest("sed", "molestiae", "delectus") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "error";
                alt = AltEnum.PROTO;
                callback = "consequuntur";
                fields = "quod";
                key = "occaecati";
                oauthToken = "earum";
                prettyPrint = false;
                quotaUser = "eum";
                uploadType = "temporibus";
                uploadProtocol = "quae";
                userIp = "doloremque";
            }};            

            ComputeInstanceGroupManagersGetResponse res = sdk.instanceGroupManagers.computeInstanceGroupManagersGet(req, new ComputeInstanceGroupManagersGetSecurity() {{
                option1 = new ComputeInstanceGroupManagersGetSecurityOption1("debitis", "omnis") {{
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
import org.openapis.openapi.models.shared.InstanceGroupManagerAllInstancesConfig;
import org.openapis.openapi.models.shared.InstanceGroupManagerAutoHealingPolicy;
import org.openapis.openapi.models.shared.InstanceGroupManagerFailoverActionEnum;
import org.openapis.openapi.models.shared.InstanceGroupManagerInstanceLifecyclePolicy;
import org.openapis.openapi.models.shared.InstanceGroupManagerInstanceLifecyclePolicyForceUpdateOnRepairEnum;
import org.openapis.openapi.models.shared.InstanceGroupManagerListManagedInstancesResultsEnum;
import org.openapis.openapi.models.shared.InstanceGroupManagerStatus;
import org.openapis.openapi.models.shared.InstanceGroupManagerStatusAllInstancesConfig;
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
import org.openapis.openapi.models.shared.InstancePropertiesPatch;
import org.openapis.openapi.models.shared.NamedPort;
import org.openapis.openapi.models.shared.StatefulPolicy;
import org.openapis.openapi.models.shared.StatefulPolicyPreservedState;
import org.openapis.openapi.models.shared.StatefulPolicyPreservedStateDiskDevice;
import org.openapis.openapi.models.shared.StatefulPolicyPreservedStateDiskDeviceAutoDeleteEnum;
import org.openapis.openapi.models.shared.StatefulPolicyPreservedStateNetworkIp;
import org.openapis.openapi.models.shared.StatefulPolicyPreservedStateNetworkIpAutoDeleteEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeInstanceGroupManagersInsertRequest req = new ComputeInstanceGroupManagersInsertRequest("temporibus", "quidem") {{
                dollarXgafv = XgafvEnum.ONE;
                instanceGroupManager = new InstanceGroupManager() {{
                    allInstancesConfig = new InstanceGroupManagerAllInstancesConfig() {{
                        properties = new InstancePropertiesPatch() {{
                            labels = new java.util.HashMap<String, String>() {{
                                put("repellendus", "tempora");
                                put("quisquam", "vel");
                                put("cum", "doloremque");
                            }};
                            metadata = new java.util.HashMap<String, String>() {{
                                put("quasi", "accusantium");
                            }};
                        }};;
                    }};;
                    autoHealingPolicies = new org.openapis.openapi.models.shared.InstanceGroupManagerAutoHealingPolicy[]{{
                        add(new InstanceGroupManagerAutoHealingPolicy() {{
                            healthCheck = "facere";
                            initialDelaySec = 582412;
                        }}),
                        add(new InstanceGroupManagerAutoHealingPolicy() {{
                            healthCheck = "quisquam";
                            initialDelaySec = 201229;
                        }}),
                        add(new InstanceGroupManagerAutoHealingPolicy() {{
                            healthCheck = "sequi";
                            initialDelaySec = 448203;
                        }}),
                    }};
                    baseInstanceName = "modi";
                    creationTimestamp = "nihil";
                    currentActions = new InstanceGroupManagerActionsSummary() {{
                        abandoning = 243931;
                        creating = 11336;
                        creatingWithoutRetries = 523613;
                        deleting = 142520;
                        none = 727641;
                        recreating = 624300;
                        refreshing = 278751;
                        restarting = 992821;
                        resuming = 181311;
                        starting = 650392;
                        stopping = 718112;
                        suspending = 120216;
                        verifying = 937687;
                    }};;
                    description = "possimus";
                    distributionPolicy = new DistributionPolicy() {{
                        targetShape = DistributionPolicyTargetShapeEnum.ANY_SINGLE_ZONE;
                        zones = new org.openapis.openapi.models.shared.DistributionPolicyZoneConfiguration[]{{
                            add(new DistributionPolicyZoneConfiguration() {{
                                zone = "iusto";
                            }}),
                            add(new DistributionPolicyZoneConfiguration() {{
                                zone = "veritatis";
                            }}),
                        }};
                    }};;
                    failoverAction = InstanceGroupManagerFailoverActionEnum.UNKNOWN;
                    fingerprint = "unde";
                    id = "impedit";
                    instanceGroup = "amet";
                    instanceLifecyclePolicy = new InstanceGroupManagerInstanceLifecyclePolicy() {{
                        forceUpdateOnRepair = InstanceGroupManagerInstanceLifecyclePolicyForceUpdateOnRepairEnum.NO;
                    }};;
                    instanceTemplate = "commodi";
                    kind = "neque";
                    listManagedInstancesResults = InstanceGroupManagerListManagedInstancesResultsEnum.PAGELESS;
                    name = "Sandy Glover";
                    namedPorts = new org.openapis.openapi.models.shared.NamedPort[]{{
                        add(new NamedPort() {{
                            name = "Tracy Kovacek";
                            port = 789185;
                        }}),
                    }};
                    region = "itaque";
                    selfLink = "consequatur";
                    serviceAccount = "recusandae";
                    statefulPolicy = new StatefulPolicy() {{
                        preservedState = new StatefulPolicyPreservedState() {{
                            disks = new java.util.HashMap<String, org.openapis.openapi.models.shared.StatefulPolicyPreservedStateDiskDevice>() {{
                                put("error", new StatefulPolicyPreservedStateDiskDevice() {{
                                    autoDelete = StatefulPolicyPreservedStateDiskDeviceAutoDeleteEnum.NEVER;
                                }});
                                put("nemo", new StatefulPolicyPreservedStateDiskDevice() {{
                                    autoDelete = StatefulPolicyPreservedStateDiskDeviceAutoDeleteEnum.ON_PERMANENT_INSTANCE_DELETION;
                                }});
                                put("numquam", new StatefulPolicyPreservedStateDiskDevice() {{
                                    autoDelete = StatefulPolicyPreservedStateDiskDeviceAutoDeleteEnum.ON_PERMANENT_INSTANCE_DELETION;
                                }});
                            }};
                            externalIPs = new java.util.HashMap<String, org.openapis.openapi.models.shared.StatefulPolicyPreservedStateNetworkIp>() {{
                                put("amet", new StatefulPolicyPreservedStateNetworkIp() {{
                                    autoDelete = StatefulPolicyPreservedStateNetworkIpAutoDeleteEnum.ON_PERMANENT_INSTANCE_DELETION;
                                }});
                                put("ducimus", new StatefulPolicyPreservedStateNetworkIp() {{
                                    autoDelete = StatefulPolicyPreservedStateNetworkIpAutoDeleteEnum.NEVER;
                                }});
                                put("impedit", new StatefulPolicyPreservedStateNetworkIp() {{
                                    autoDelete = StatefulPolicyPreservedStateNetworkIpAutoDeleteEnum.NEVER;
                                }});
                            }};
                            internalIPs = new java.util.HashMap<String, org.openapis.openapi.models.shared.StatefulPolicyPreservedStateNetworkIp>() {{
                                put("ullam", new StatefulPolicyPreservedStateNetworkIp() {{
                                    autoDelete = StatefulPolicyPreservedStateNetworkIpAutoDeleteEnum.NEVER;
                                }});
                            }};
                        }};;
                    }};;
                    status = new InstanceGroupManagerStatus() {{
                        allInstancesConfig = new InstanceGroupManagerStatusAllInstancesConfig() {{
                            currentRevision = "a";
                            effective = false;
                        }};;
                        autoscaler = "saepe";
                        isStable = false;
                        stateful = new InstanceGroupManagerStatusStateful() {{
                            hasStatefulConfig = false;
                            isStateful = false;
                            perInstanceConfigs = new InstanceGroupManagerStatusStatefulPerInstanceConfigs() {{
                                allEffective = false;
                            }};;
                        }};;
                        versionTarget = new InstanceGroupManagerStatusVersionTarget() {{
                            isReached = false;
                        }};;
                    }};;
                    targetPools = new String[]{{
                        add("quidem"),
                    }};
                    targetSize = 310212;
                    updatePolicy = new InstanceGroupManagerUpdatePolicy() {{
                        instanceRedistributionType = InstanceGroupManagerUpdatePolicyInstanceRedistributionTypeEnum.PROACTIVE;
                        maxSurge = new FixedOrPercent() {{
                            calculated = 292846;
                            fixed = 843969;
                            percent = 701366;
                        }};;
                        maxUnavailable = new FixedOrPercent() {{
                            calculated = 539426;
                            fixed = 735012;
                            percent = 488405;
                        }};;
                        minReadySec = 444318;
                        minimalAction = InstanceGroupManagerUpdatePolicyMinimalActionEnum.REPLACE;
                        mostDisruptiveAllowedAction = InstanceGroupManagerUpdatePolicyMostDisruptiveAllowedActionEnum.RESTART;
                        replacementMethod = InstanceGroupManagerUpdatePolicyReplacementMethodEnum.SUBSTITUTE;
                        type = InstanceGroupManagerUpdatePolicyTypeEnum.PROACTIVE;
                    }};;
                    versions = new org.openapis.openapi.models.shared.InstanceGroupManagerVersion[]{{
                        add(new InstanceGroupManagerVersion() {{
                            instanceTemplate = "officiis";
                            name = "Hope Collins";
                            targetSize = new FixedOrPercent() {{
                                calculated = 320931;
                                fixed = 51717;
                                percent = 136851;
                            }};
                        }}),
                        add(new InstanceGroupManagerVersion() {{
                            instanceTemplate = "expedita";
                            name = "Moses Prohaska";
                            targetSize = new FixedOrPercent() {{
                                calculated = 722265;
                                fixed = 810640;
                                percent = 302456;
                            }};
                        }}),
                    }};
                    zone = "aliquid";
                }};;
                accessToken = "adipisci";
                alt = AltEnum.MEDIA;
                callback = "fugiat";
                fields = "enim";
                key = "eveniet";
                oauthToken = "eum";
                prettyPrint = false;
                quotaUser = "exercitationem";
                requestId = "at";
                uploadType = "culpa";
                uploadProtocol = "alias";
                userIp = "eos";
            }};            

            ComputeInstanceGroupManagersInsertResponse res = sdk.instanceGroupManagers.computeInstanceGroupManagersInsert(req, new ComputeInstanceGroupManagersInsertSecurity() {{
                option1 = new ComputeInstanceGroupManagersInsertSecurityOption1("quos", "quisquam") {{
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

            ComputeInstanceGroupManagersListRequest req = new ComputeInstanceGroupManagersListRequest("dolor", "accusamus") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "enim";
                alt = AltEnum.JSON;
                callback = "mollitia";
                fields = "veritatis";
                filter = "vero";
                key = "ratione";
                maxResults = 15374L;
                oauthToken = "doloribus";
                orderBy = "fugiat";
                pageToken = "deserunt";
                prettyPrint = false;
                quotaUser = "sint";
                returnPartialSuccess = false;
                uploadType = "eum";
                uploadProtocol = "commodi";
                userIp = "magnam";
            }};            

            ComputeInstanceGroupManagersListResponse res = sdk.instanceGroupManagers.computeInstanceGroupManagersList(req, new ComputeInstanceGroupManagersListSecurity() {{
                option1 = new ComputeInstanceGroupManagersListSecurityOption1("rem", "occaecati") {{
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

            ComputeInstanceGroupManagersListErrorsRequest req = new ComputeInstanceGroupManagersListErrorsRequest("possimus", "voluptate", "nam") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "blanditiis";
                alt = AltEnum.MEDIA;
                callback = "odio";
                fields = "adipisci";
                filter = "necessitatibus";
                key = "veritatis";
                maxResults = 232342L;
                oauthToken = "fuga";
                orderBy = "quasi";
                pageToken = "eos";
                prettyPrint = false;
                quotaUser = "dolorum";
                returnPartialSuccess = false;
                uploadType = "vel";
                uploadProtocol = "rerum";
                userIp = "cupiditate";
            }};            

            ComputeInstanceGroupManagersListErrorsResponse res = sdk.instanceGroupManagers.computeInstanceGroupManagersListErrors(req, new ComputeInstanceGroupManagersListErrorsSecurity() {{
                option1 = new ComputeInstanceGroupManagersListErrorsSecurityOption1("excepturi", "fugit") {{
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

            ComputeInstanceGroupManagersListManagedInstancesRequest req = new ComputeInstanceGroupManagersListManagedInstancesRequest("eius", "perspiciatis", "dolore") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "natus";
                alt = AltEnum.JSON;
                callback = "tempora";
                fields = "corrupti";
                filter = "ducimus";
                key = "asperiores";
                maxResults = 332074L;
                oauthToken = "cumque";
                orderBy = "praesentium";
                pageToken = "ut";
                prettyPrint = false;
                quotaUser = "amet";
                returnPartialSuccess = false;
                uploadType = "blanditiis";
                uploadProtocol = "nesciunt";
                userIp = "ex";
            }};            

            ComputeInstanceGroupManagersListManagedInstancesResponse res = sdk.instanceGroupManagers.computeInstanceGroupManagersListManagedInstances(req, new ComputeInstanceGroupManagersListManagedInstancesSecurity() {{
                option1 = new ComputeInstanceGroupManagersListManagedInstancesSecurityOption1("tempore", "rem") {{
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

            ComputeInstanceGroupManagersListPerInstanceConfigsRequest req = new ComputeInstanceGroupManagersListPerInstanceConfigsRequest("laboriosam", "harum", "consectetur") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "nulla";
                alt = AltEnum.PROTO;
                callback = "ex";
                fields = "dolore";
                filter = "dicta";
                key = "minima";
                maxResults = 708048L;
                oauthToken = "sit";
                orderBy = "incidunt";
                pageToken = "magnam";
                prettyPrint = false;
                quotaUser = "molestias";
                returnPartialSuccess = false;
                uploadType = "hic";
                uploadProtocol = "error";
                userIp = "repellendus";
            }};            

            ComputeInstanceGroupManagersListPerInstanceConfigsResponse res = sdk.instanceGroupManagers.computeInstanceGroupManagersListPerInstanceConfigs(req, new ComputeInstanceGroupManagersListPerInstanceConfigsSecurity() {{
                option1 = new ComputeInstanceGroupManagersListPerInstanceConfigsSecurityOption1("delectus", "dicta") {{
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
import org.openapis.openapi.models.shared.InstanceGroupManagerAllInstancesConfig;
import org.openapis.openapi.models.shared.InstanceGroupManagerAutoHealingPolicy;
import org.openapis.openapi.models.shared.InstanceGroupManagerFailoverActionEnum;
import org.openapis.openapi.models.shared.InstanceGroupManagerInstanceLifecyclePolicy;
import org.openapis.openapi.models.shared.InstanceGroupManagerInstanceLifecyclePolicyForceUpdateOnRepairEnum;
import org.openapis.openapi.models.shared.InstanceGroupManagerListManagedInstancesResultsEnum;
import org.openapis.openapi.models.shared.InstanceGroupManagerStatus;
import org.openapis.openapi.models.shared.InstanceGroupManagerStatusAllInstancesConfig;
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
import org.openapis.openapi.models.shared.InstancePropertiesPatch;
import org.openapis.openapi.models.shared.NamedPort;
import org.openapis.openapi.models.shared.StatefulPolicy;
import org.openapis.openapi.models.shared.StatefulPolicyPreservedState;
import org.openapis.openapi.models.shared.StatefulPolicyPreservedStateDiskDevice;
import org.openapis.openapi.models.shared.StatefulPolicyPreservedStateDiskDeviceAutoDeleteEnum;
import org.openapis.openapi.models.shared.StatefulPolicyPreservedStateNetworkIp;
import org.openapis.openapi.models.shared.StatefulPolicyPreservedStateNetworkIpAutoDeleteEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeInstanceGroupManagersPatchRequest req = new ComputeInstanceGroupManagersPatchRequest("ratione", "delectus", "ut") {{
                dollarXgafv = XgafvEnum.TWO;
                instanceGroupManager1 = new InstanceGroupManager() {{
                    allInstancesConfig = new InstanceGroupManagerAllInstancesConfig() {{
                        properties = new InstancePropertiesPatch() {{
                            labels = new java.util.HashMap<String, String>() {{
                                put("nulla", "distinctio");
                                put("recusandae", "in");
                                put("deleniti", "tempore");
                                put("reiciendis", "commodi");
                            }};
                            metadata = new java.util.HashMap<String, String>() {{
                                put("ea", "molestias");
                            }};
                        }};;
                    }};;
                    autoHealingPolicies = new org.openapis.openapi.models.shared.InstanceGroupManagerAutoHealingPolicy[]{{
                        add(new InstanceGroupManagerAutoHealingPolicy() {{
                            healthCheck = "ipsam";
                            initialDelaySec = 522048;
                        }}),
                    }};
                    baseInstanceName = "molestias";
                    creationTimestamp = "eius";
                    currentActions = new InstanceGroupManagerActionsSummary() {{
                        abandoning = 898366;
                        creating = 633594;
                        creatingWithoutRetries = 449365;
                        deleting = 398606;
                        none = 227452;
                        recreating = 853721;
                        refreshing = 358740;
                        restarting = 771363;
                        resuming = 445732;
                        starting = 147933;
                        stopping = 454934;
                        suspending = 591092;
                        verifying = 337833;
                    }};;
                    description = "expedita";
                    distributionPolicy = new DistributionPolicy() {{
                        targetShape = DistributionPolicyTargetShapeEnum.ANY_SINGLE_ZONE;
                        zones = new org.openapis.openapi.models.shared.DistributionPolicyZoneConfiguration[]{{
                            add(new DistributionPolicyZoneConfiguration() {{
                                zone = "exercitationem";
                            }}),
                            add(new DistributionPolicyZoneConfiguration() {{
                                zone = "vitae";
                            }}),
                            add(new DistributionPolicyZoneConfiguration() {{
                                zone = "magnam";
                            }}),
                        }};
                    }};;
                    failoverAction = InstanceGroupManagerFailoverActionEnum.UNKNOWN;
                    fingerprint = "nulla";
                    id = "eum";
                    instanceGroup = "quibusdam";
                    instanceLifecyclePolicy = new InstanceGroupManagerInstanceLifecyclePolicy() {{
                        forceUpdateOnRepair = InstanceGroupManagerInstanceLifecyclePolicyForceUpdateOnRepairEnum.NO;
                    }};;
                    instanceTemplate = "ut";
                    kind = "cupiditate";
                    listManagedInstancesResults = InstanceGroupManagerListManagedInstancesResultsEnum.PAGINATED;
                    name = "Wilma Feil";
                    namedPorts = new org.openapis.openapi.models.shared.NamedPort[]{{
                        add(new NamedPort() {{
                            name = "Dr. Mamie Schneider";
                            port = 441239;
                        }}),
                    }};
                    region = "voluptatem";
                    selfLink = "placeat";
                    serviceAccount = "dolore";
                    statefulPolicy = new StatefulPolicy() {{
                        preservedState = new StatefulPolicyPreservedState() {{
                            disks = new java.util.HashMap<String, org.openapis.openapi.models.shared.StatefulPolicyPreservedStateDiskDevice>() {{
                                put("voluptatibus", new StatefulPolicyPreservedStateDiskDevice() {{
                                    autoDelete = StatefulPolicyPreservedStateDiskDeviceAutoDeleteEnum.ON_PERMANENT_INSTANCE_DELETION;
                                }});
                            }};
                            externalIPs = new java.util.HashMap<String, org.openapis.openapi.models.shared.StatefulPolicyPreservedStateNetworkIp>() {{
                                put("delectus", new StatefulPolicyPreservedStateNetworkIp() {{
                                    autoDelete = StatefulPolicyPreservedStateNetworkIpAutoDeleteEnum.NEVER;
                                }});
                                put("totam", new StatefulPolicyPreservedStateNetworkIp() {{
                                    autoDelete = StatefulPolicyPreservedStateNetworkIpAutoDeleteEnum.NEVER;
                                }});
                                put("numquam", new StatefulPolicyPreservedStateNetworkIp() {{
                                    autoDelete = StatefulPolicyPreservedStateNetworkIpAutoDeleteEnum.NEVER;
                                }});
                            }};
                            internalIPs = new java.util.HashMap<String, org.openapis.openapi.models.shared.StatefulPolicyPreservedStateNetworkIp>() {{
                                put("veniam", new StatefulPolicyPreservedStateNetworkIp() {{
                                    autoDelete = StatefulPolicyPreservedStateNetworkIpAutoDeleteEnum.ON_PERMANENT_INSTANCE_DELETION;
                                }});
                            }};
                        }};;
                    }};;
                    status = new InstanceGroupManagerStatus() {{
                        allInstancesConfig = new InstanceGroupManagerStatusAllInstancesConfig() {{
                            currentRevision = "in";
                            effective = false;
                        }};;
                        autoscaler = "minima";
                        isStable = false;
                        stateful = new InstanceGroupManagerStatusStateful() {{
                            hasStatefulConfig = false;
                            isStateful = false;
                            perInstanceConfigs = new InstanceGroupManagerStatusStatefulPerInstanceConfigs() {{
                                allEffective = false;
                            }};;
                        }};;
                        versionTarget = new InstanceGroupManagerStatusVersionTarget() {{
                            isReached = false;
                        }};;
                    }};;
                    targetPools = new String[]{{
                        add("ducimus"),
                        add("excepturi"),
                        add("eum"),
                    }};
                    targetSize = 41800;
                    updatePolicy = new InstanceGroupManagerUpdatePolicy() {{
                        instanceRedistributionType = InstanceGroupManagerUpdatePolicyInstanceRedistributionTypeEnum.NONE;
                        maxSurge = new FixedOrPercent() {{
                            calculated = 345990;
                            fixed = 765259;
                            percent = 50998;
                        }};;
                        maxUnavailable = new FixedOrPercent() {{
                            calculated = 935159;
                            fixed = 938762;
                            percent = 636775;
                        }};;
                        minReadySec = 425484;
                        minimalAction = InstanceGroupManagerUpdatePolicyMinimalActionEnum.RESTART;
                        mostDisruptiveAllowedAction = InstanceGroupManagerUpdatePolicyMostDisruptiveAllowedActionEnum.REPLACE;
                        replacementMethod = InstanceGroupManagerUpdatePolicyReplacementMethodEnum.RECREATE;
                        type = InstanceGroupManagerUpdatePolicyTypeEnum.PROACTIVE;
                    }};;
                    versions = new org.openapis.openapi.models.shared.InstanceGroupManagerVersion[]{{
                        add(new InstanceGroupManagerVersion() {{
                            instanceTemplate = "alias";
                            name = "Jack Rau";
                            targetSize = new FixedOrPercent() {{
                                calculated = 601194;
                                fixed = 333150;
                                percent = 724307;
                            }};
                        }}),
                        add(new InstanceGroupManagerVersion() {{
                            instanceTemplate = "accusamus";
                            name = "Janice Hermiston";
                            targetSize = new FixedOrPercent() {{
                                calculated = 468714;
                                fixed = 239185;
                                percent = 591998;
                            }};
                        }}),
                        add(new InstanceGroupManagerVersion() {{
                            instanceTemplate = "reiciendis";
                            name = "Camille Upton";
                            targetSize = new FixedOrPercent() {{
                                calculated = 130289;
                                fixed = 100337;
                                percent = 18584;
                            }};
                        }}),
                    }};
                    zone = "possimus";
                }};;
                accessToken = "dicta";
                alt = AltEnum.PROTO;
                callback = "voluptas";
                fields = "exercitationem";
                key = "quis";
                oauthToken = "quos";
                prettyPrint = false;
                quotaUser = "impedit";
                requestId = "cupiditate";
                uploadType = "excepturi";
                uploadProtocol = "quod";
                userIp = "iure";
            }};            

            ComputeInstanceGroupManagersPatchResponse res = sdk.instanceGroupManagers.computeInstanceGroupManagersPatch(req, new ComputeInstanceGroupManagersPatchSecurity() {{
                option1 = new ComputeInstanceGroupManagersPatchSecurityOption1("sed", "odit") {{
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
import org.openapis.openapi.models.shared.PreservedStatePreservedNetworkIp;
import org.openapis.openapi.models.shared.PreservedStatePreservedNetworkIpAutoDeleteEnum;
import org.openapis.openapi.models.shared.PreservedStatePreservedNetworkIpIpAddress;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeInstanceGroupManagersPatchPerInstanceConfigsRequest req = new ComputeInstanceGroupManagersPatchPerInstanceConfigsRequest("quibusdam", "fugit", "nam") {{
                dollarXgafv = XgafvEnum.TWO;
                instanceGroupManagersPatchPerInstanceConfigsReq = new InstanceGroupManagersPatchPerInstanceConfigsReq() {{
                    perInstanceConfigs = new org.openapis.openapi.models.shared.PerInstanceConfig[]{{
                        add(new PerInstanceConfig() {{
                            fingerprint = "earum";
                            name = "Jesus Barrows";
                            preservedState = new PreservedState() {{
                                disks = new java.util.HashMap<String, org.openapis.openapi.models.shared.PreservedStatePreservedDisk>() {{
                                    put("unde", new PreservedStatePreservedDisk() {{
                                        autoDelete = PreservedStatePreservedDiskAutoDeleteEnum.ON_PERMANENT_INSTANCE_DELETION;
                                        mode = PreservedStatePreservedDiskModeEnum.READ_WRITE;
                                        source = "deserunt";
                                    }});
                                    put("recusandae", new PreservedStatePreservedDisk() {{
                                        autoDelete = PreservedStatePreservedDiskAutoDeleteEnum.NEVER;
                                        mode = PreservedStatePreservedDiskModeEnum.READ_ONLY;
                                        source = "quia";
                                    }});
                                    put("quibusdam", new PreservedStatePreservedDisk() {{
                                        autoDelete = PreservedStatePreservedDiskAutoDeleteEnum.ON_PERMANENT_INSTANCE_DELETION;
                                        mode = PreservedStatePreservedDiskModeEnum.READ_ONLY;
                                        source = "placeat";
                                    }});
                                    put("est", new PreservedStatePreservedDisk() {{
                                        autoDelete = PreservedStatePreservedDiskAutoDeleteEnum.ON_PERMANENT_INSTANCE_DELETION;
                                        mode = PreservedStatePreservedDiskModeEnum.READ_WRITE;
                                        source = "occaecati";
                                    }});
                                }};
                                externalIPs = new java.util.HashMap<String, org.openapis.openapi.models.shared.PreservedStatePreservedNetworkIp>() {{
                                    put("modi", new PreservedStatePreservedNetworkIp() {{
                                        autoDelete = PreservedStatePreservedNetworkIpAutoDeleteEnum.ON_PERMANENT_INSTANCE_DELETION;
                                        ipAddress = new PreservedStatePreservedNetworkIpIpAddress() {{
                                            address = "6189 Marvin Union";
                                            literal = "illo";
                                        }};
                                    }});
                                    put("minima", new PreservedStatePreservedNetworkIp() {{
                                        autoDelete = PreservedStatePreservedNetworkIpAutoDeleteEnum.ON_PERMANENT_INSTANCE_DELETION;
                                        ipAddress = new PreservedStatePreservedNetworkIpIpAddress() {{
                                            address = "502 Bayer Locks";
                                            literal = "doloribus";
                                        }};
                                    }});
                                    put("amet", new PreservedStatePreservedNetworkIp() {{
                                        autoDelete = PreservedStatePreservedNetworkIpAutoDeleteEnum.NEVER;
                                        ipAddress = new PreservedStatePreservedNetworkIpIpAddress() {{
                                            address = "2055 Rubye Ford";
                                            literal = "odit";
                                        }};
                                    }});
                                }};
                                internalIPs = new java.util.HashMap<String, org.openapis.openapi.models.shared.PreservedStatePreservedNetworkIp>() {{
                                    put("minima", new PreservedStatePreservedNetworkIp() {{
                                        autoDelete = PreservedStatePreservedNetworkIpAutoDeleteEnum.NEVER;
                                        ipAddress = new PreservedStatePreservedNetworkIpIpAddress() {{
                                            address = "5324 Eula Overpass";
                                            literal = "iusto";
                                        }};
                                    }});
                                    put("optio", new PreservedStatePreservedNetworkIp() {{
                                        autoDelete = PreservedStatePreservedNetworkIpAutoDeleteEnum.NEVER;
                                        ipAddress = new PreservedStatePreservedNetworkIpIpAddress() {{
                                            address = "12180 Jan Corner";
                                            literal = "quibusdam";
                                        }};
                                    }});
                                    put("veniam", new PreservedStatePreservedNetworkIp() {{
                                        autoDelete = PreservedStatePreservedNetworkIpAutoDeleteEnum.NEVER;
                                        ipAddress = new PreservedStatePreservedNetworkIpIpAddress() {{
                                            address = "664 Swaniawski Views";
                                            literal = "nemo";
                                        }};
                                    }});
                                    put("laborum", new PreservedStatePreservedNetworkIp() {{
                                        autoDelete = PreservedStatePreservedNetworkIpAutoDeleteEnum.ON_PERMANENT_INSTANCE_DELETION;
                                        ipAddress = new PreservedStatePreservedNetworkIpIpAddress() {{
                                            address = "325 Opal Gardens";
                                            literal = "reiciendis";
                                        }};
                                    }});
                                }};
                                metadata = new java.util.HashMap<String, String>() {{
                                    put("aspernatur", "nobis");
                                    put("voluptatum", "ex");
                                    put("aspernatur", "est");
                                    put("voluptatem", "aut");
                                }};
                            }};
                            status = PerInstanceConfigStatusEnum.UNAPPLIED;
                        }}),
                    }};
                }};;
                accessToken = "saepe";
                alt = AltEnum.PROTO;
                callback = "autem";
                fields = "perspiciatis";
                key = "saepe";
                oauthToken = "illo";
                prettyPrint = false;
                quotaUser = "aperiam";
                requestId = "quae";
                uploadType = "veritatis";
                uploadProtocol = "enim";
                userIp = "ducimus";
            }};            

            ComputeInstanceGroupManagersPatchPerInstanceConfigsResponse res = sdk.instanceGroupManagers.computeInstanceGroupManagersPatchPerInstanceConfigs(req, new ComputeInstanceGroupManagersPatchPerInstanceConfigsSecurity() {{
                option1 = new ComputeInstanceGroupManagersPatchPerInstanceConfigsSecurityOption1("suscipit", "dolor") {{
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

            ComputeInstanceGroupManagersRecreateInstancesRequest req = new ComputeInstanceGroupManagersRecreateInstancesRequest("alias", "libero", "quibusdam") {{
                dollarXgafv = XgafvEnum.TWO;
                instanceGroupManagersRecreateInstancesRequest = new InstanceGroupManagersRecreateInstancesRequest() {{
                    instances = new String[]{{
                        add("similique"),
                        add("repellat"),
                    }};
                }};;
                accessToken = "quibusdam";
                alt = AltEnum.PROTO;
                callback = "illum";
                fields = "blanditiis";
                key = "tempora";
                oauthToken = "similique";
                prettyPrint = false;
                quotaUser = "dolor";
                requestId = "enim";
                uploadType = "dolorum";
                uploadProtocol = "aliquam";
                userIp = "beatae";
            }};            

            ComputeInstanceGroupManagersRecreateInstancesResponse res = sdk.instanceGroupManagers.computeInstanceGroupManagersRecreateInstances(req, new ComputeInstanceGroupManagersRecreateInstancesSecurity() {{
                option1 = new ComputeInstanceGroupManagersRecreateInstancesSecurityOption1("explicabo", "nesciunt") {{
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

            ComputeInstanceGroupManagersResizeRequest req = new ComputeInstanceGroupManagersResizeRequest("corrupti", "officiis", 81671L, "officia") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "sequi";
                alt = AltEnum.JSON;
                callback = "fuga";
                fields = "quisquam";
                key = "qui";
                oauthToken = "suscipit";
                prettyPrint = false;
                quotaUser = "officia";
                requestId = "saepe";
                uploadType = "ipsum";
                uploadProtocol = "ratione";
                userIp = "expedita";
            }};            

            ComputeInstanceGroupManagersResizeResponse res = sdk.instanceGroupManagers.computeInstanceGroupManagersResize(req, new ComputeInstanceGroupManagersResizeSecurity() {{
                option1 = new ComputeInstanceGroupManagersResizeSecurityOption1("itaque", "maiores") {{
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

## computeInstanceGroupManagersResizeAdvanced

Resizes the managed instance group with advanced configuration options like disabling creation retries. This is an extended version of the resize method. If you increase the size of the instance group, the group creates new instances using the current instance template. If you decrease the size, the group deletes instances. The resize operation is marked DONE when the resize actions are scheduled even if the group has not yet added or deleted any instances. You must separately verify the status of the creating, creatingWithoutRetries, or deleting actions with the get or listmanagedinstances method. If the group is part of a backend service that has enabled connection draining, it can take up to 60 seconds after the connection draining duration has elapsed before the VM instance is removed or deleted.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeInstanceGroupManagersResizeAdvancedRequest;
import org.openapis.openapi.models.operations.ComputeInstanceGroupManagersResizeAdvancedResponse;
import org.openapis.openapi.models.operations.ComputeInstanceGroupManagersResizeAdvancedSecurity;
import org.openapis.openapi.models.operations.ComputeInstanceGroupManagersResizeAdvancedSecurityOption1;
import org.openapis.openapi.models.operations.ComputeInstanceGroupManagersResizeAdvancedSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.InstanceGroupManagersResizeAdvancedRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeInstanceGroupManagersResizeAdvancedRequest req = new ComputeInstanceGroupManagersResizeAdvancedRequest("provident", "dignissimos", "dicta") {{
                dollarXgafv = XgafvEnum.TWO;
                instanceGroupManagersResizeAdvancedRequest = new InstanceGroupManagersResizeAdvancedRequest() {{
                    noCreationRetries = false;
                    targetSize = 502150;
                }};;
                accessToken = "repellat";
                alt = AltEnum.JSON;
                callback = "ex";
                fields = "nobis";
                key = "placeat";
                oauthToken = "mollitia";
                prettyPrint = false;
                quotaUser = "architecto";
                requestId = "quae";
                uploadType = "aut";
                uploadProtocol = "commodi";
                userIp = "delectus";
            }};            

            ComputeInstanceGroupManagersResizeAdvancedResponse res = sdk.instanceGroupManagers.computeInstanceGroupManagersResizeAdvanced(req, new ComputeInstanceGroupManagersResizeAdvancedSecurity() {{
                option1 = new ComputeInstanceGroupManagersResizeAdvancedSecurityOption1("officiis", "omnis") {{
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

## computeInstanceGroupManagersSetAutoHealingPolicies

Motifies the autohealing policy for the instances in this managed instance group. [Deprecated] This method is deprecated. Use instanceGroupManagers.patch instead.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeInstanceGroupManagersSetAutoHealingPoliciesRequest;
import org.openapis.openapi.models.operations.ComputeInstanceGroupManagersSetAutoHealingPoliciesResponse;
import org.openapis.openapi.models.operations.ComputeInstanceGroupManagersSetAutoHealingPoliciesSecurity;
import org.openapis.openapi.models.operations.ComputeInstanceGroupManagersSetAutoHealingPoliciesSecurityOption1;
import org.openapis.openapi.models.operations.ComputeInstanceGroupManagersSetAutoHealingPoliciesSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.InstanceGroupManagerAutoHealingPolicy;
import org.openapis.openapi.models.shared.InstanceGroupManagersSetAutoHealingRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeInstanceGroupManagersSetAutoHealingPoliciesRequest req = new ComputeInstanceGroupManagersSetAutoHealingPoliciesRequest("ea", "ipsam", "soluta") {{
                dollarXgafv = XgafvEnum.ONE;
                instanceGroupManagersSetAutoHealingRequest = new InstanceGroupManagersSetAutoHealingRequest() {{
                    autoHealingPolicies = new org.openapis.openapi.models.shared.InstanceGroupManagerAutoHealingPolicy[]{{
                        add(new InstanceGroupManagerAutoHealingPolicy() {{
                            healthCheck = "beatae";
                            initialDelaySec = 866917;
                        }}),
                    }};
                }};;
                accessToken = "voluptatem";
                alt = AltEnum.MEDIA;
                callback = "eligendi";
                fields = "tenetur";
                key = "deleniti";
                oauthToken = "deleniti";
                prettyPrint = false;
                quotaUser = "necessitatibus";
                requestId = "cumque";
                uploadType = "iste";
                uploadProtocol = "reiciendis";
                userIp = "nihil";
            }};            

            ComputeInstanceGroupManagersSetAutoHealingPoliciesResponse res = sdk.instanceGroupManagers.computeInstanceGroupManagersSetAutoHealingPolicies(req, new ComputeInstanceGroupManagersSetAutoHealingPoliciesSecurity() {{
                option1 = new ComputeInstanceGroupManagersSetAutoHealingPoliciesSecurityOption1("libero", "perspiciatis") {{
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

            ComputeInstanceGroupManagersSetInstanceTemplateRequest req = new ComputeInstanceGroupManagersSetInstanceTemplateRequest("occaecati", "officia", "nemo") {{
                dollarXgafv = XgafvEnum.ONE;
                instanceGroupManagersSetInstanceTemplateRequest = new InstanceGroupManagersSetInstanceTemplateRequest() {{
                    instanceTemplate = "doloremque";
                }};;
                accessToken = "similique";
                alt = AltEnum.MEDIA;
                callback = "quis";
                fields = "commodi";
                key = "eveniet";
                oauthToken = "possimus";
                prettyPrint = false;
                quotaUser = "dolor";
                requestId = "ratione";
                uploadType = "velit";
                uploadProtocol = "soluta";
                userIp = "cum";
            }};            

            ComputeInstanceGroupManagersSetInstanceTemplateResponse res = sdk.instanceGroupManagers.computeInstanceGroupManagersSetInstanceTemplate(req, new ComputeInstanceGroupManagersSetInstanceTemplateSecurity() {{
                option1 = new ComputeInstanceGroupManagersSetInstanceTemplateSecurityOption1("accusantium", "quo") {{
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

            ComputeInstanceGroupManagersSetTargetPoolsRequest req = new ComputeInstanceGroupManagersSetTargetPoolsRequest("officiis", "laudantium", "est") {{
                dollarXgafv = XgafvEnum.TWO;
                instanceGroupManagersSetTargetPoolsRequest = new InstanceGroupManagersSetTargetPoolsRequest() {{
                    fingerprint = "autem";
                    targetPools = new String[]{{
                        add("modi"),
                        add("consectetur"),
                    }};
                }};;
                accessToken = "qui";
                alt = AltEnum.MEDIA;
                callback = "cupiditate";
                fields = "rem";
                key = "ea";
                oauthToken = "debitis";
                prettyPrint = false;
                quotaUser = "soluta";
                requestId = "odio";
                uploadType = "eveniet";
                uploadProtocol = "beatae";
                userIp = "dolore";
            }};            

            ComputeInstanceGroupManagersSetTargetPoolsResponse res = sdk.instanceGroupManagers.computeInstanceGroupManagersSetTargetPools(req, new ComputeInstanceGroupManagersSetTargetPoolsSecurity() {{
                option1 = new ComputeInstanceGroupManagersSetTargetPoolsSecurityOption1("quisquam", "mollitia") {{
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

## computeInstanceGroupManagersTestIamPermissions

Returns permissions that a caller has on the specified resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeInstanceGroupManagersTestIamPermissionsRequest;
import org.openapis.openapi.models.operations.ComputeInstanceGroupManagersTestIamPermissionsResponse;
import org.openapis.openapi.models.operations.ComputeInstanceGroupManagersTestIamPermissionsSecurity;
import org.openapis.openapi.models.operations.ComputeInstanceGroupManagersTestIamPermissionsSecurityOption1;
import org.openapis.openapi.models.operations.ComputeInstanceGroupManagersTestIamPermissionsSecurityOption2;
import org.openapis.openapi.models.operations.ComputeInstanceGroupManagersTestIamPermissionsSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.TestPermissionsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeInstanceGroupManagersTestIamPermissionsRequest req = new ComputeInstanceGroupManagersTestIamPermissionsRequest("ipsam", "autem", "non") {{
                dollarXgafv = XgafvEnum.ONE;
                testPermissionsRequest = new TestPermissionsRequest() {{
                    permissions = new String[]{{
                        add("natus"),
                        add("beatae"),
                        add("nemo"),
                    }};
                }};;
                accessToken = "eaque";
                alt = AltEnum.JSON;
                callback = "natus";
                fields = "nihil";
                key = "accusantium";
                oauthToken = "et";
                prettyPrint = false;
                quotaUser = "unde";
                uploadType = "similique";
                uploadProtocol = "eius";
                userIp = "rem";
            }};            

            ComputeInstanceGroupManagersTestIamPermissionsResponse res = sdk.instanceGroupManagers.computeInstanceGroupManagersTestIamPermissions(req, new ComputeInstanceGroupManagersTestIamPermissionsSecurity() {{
                option1 = new ComputeInstanceGroupManagersTestIamPermissionsSecurityOption1("delectus", "blanditiis") {{
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

## computeInstanceGroupManagersUpdate

Updates a managed instance group using the information that you specify in the request. This operation is marked as DONE when the group is updated even if the instances in the group have not yet been updated. You must separately verify the status of the individual instances with the listManagedInstances method. If you update your group to specify a new template or instance configuration, it's possible that your intended specification for each VM in the group is different from the current state of that VM. To learn how to apply an updated configuration to the VMs in a MIG, see Updating instances in a MIG.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeInstanceGroupManagersUpdateRequest;
import org.openapis.openapi.models.operations.ComputeInstanceGroupManagersUpdateResponse;
import org.openapis.openapi.models.operations.ComputeInstanceGroupManagersUpdateSecurity;
import org.openapis.openapi.models.operations.ComputeInstanceGroupManagersUpdateSecurityOption1;
import org.openapis.openapi.models.operations.ComputeInstanceGroupManagersUpdateSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.DistributionPolicy;
import org.openapis.openapi.models.shared.DistributionPolicyTargetShapeEnum;
import org.openapis.openapi.models.shared.DistributionPolicyZoneConfiguration;
import org.openapis.openapi.models.shared.FixedOrPercent;
import org.openapis.openapi.models.shared.InstanceGroupManager;
import org.openapis.openapi.models.shared.InstanceGroupManagerActionsSummary;
import org.openapis.openapi.models.shared.InstanceGroupManagerAllInstancesConfig;
import org.openapis.openapi.models.shared.InstanceGroupManagerAutoHealingPolicy;
import org.openapis.openapi.models.shared.InstanceGroupManagerFailoverActionEnum;
import org.openapis.openapi.models.shared.InstanceGroupManagerInstanceLifecyclePolicy;
import org.openapis.openapi.models.shared.InstanceGroupManagerInstanceLifecyclePolicyForceUpdateOnRepairEnum;
import org.openapis.openapi.models.shared.InstanceGroupManagerListManagedInstancesResultsEnum;
import org.openapis.openapi.models.shared.InstanceGroupManagerStatus;
import org.openapis.openapi.models.shared.InstanceGroupManagerStatusAllInstancesConfig;
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
import org.openapis.openapi.models.shared.InstancePropertiesPatch;
import org.openapis.openapi.models.shared.NamedPort;
import org.openapis.openapi.models.shared.StatefulPolicy;
import org.openapis.openapi.models.shared.StatefulPolicyPreservedState;
import org.openapis.openapi.models.shared.StatefulPolicyPreservedStateDiskDevice;
import org.openapis.openapi.models.shared.StatefulPolicyPreservedStateDiskDeviceAutoDeleteEnum;
import org.openapis.openapi.models.shared.StatefulPolicyPreservedStateNetworkIp;
import org.openapis.openapi.models.shared.StatefulPolicyPreservedStateNetworkIpAutoDeleteEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeInstanceGroupManagersUpdateRequest req = new ComputeInstanceGroupManagersUpdateRequest("laudantium", "earum", "impedit") {{
                dollarXgafv = XgafvEnum.TWO;
                instanceGroupManager1 = new InstanceGroupManager() {{
                    allInstancesConfig = new InstanceGroupManagerAllInstancesConfig() {{
                        properties = new InstancePropertiesPatch() {{
                            labels = new java.util.HashMap<String, String>() {{
                                put("expedita", "hic");
                                put("occaecati", "perferendis");
                            }};
                            metadata = new java.util.HashMap<String, String>() {{
                                put("saepe", "consequatur");
                                put("architecto", "dicta");
                            }};
                        }};;
                    }};;
                    autoHealingPolicies = new org.openapis.openapi.models.shared.InstanceGroupManagerAutoHealingPolicy[]{{
                        add(new InstanceGroupManagerAutoHealingPolicy() {{
                            healthCheck = "ad";
                            initialDelaySec = 837080;
                        }}),
                    }};
                    baseInstanceName = "sequi";
                    creationTimestamp = "laudantium";
                    currentActions = new InstanceGroupManagerActionsSummary() {{
                        abandoning = 570004;
                        creating = 4431;
                        creatingWithoutRetries = 534950;
                        deleting = 98172;
                        none = 389791;
                        recreating = 133790;
                        refreshing = 800545;
                        restarting = 379552;
                        resuming = 731157;
                        starting = 927171;
                        stopping = 687883;
                        suspending = 394435;
                        verifying = 502675;
                    }};;
                    description = "culpa";
                    distributionPolicy = new DistributionPolicy() {{
                        targetShape = DistributionPolicyTargetShapeEnum.ANY;
                        zones = new org.openapis.openapi.models.shared.DistributionPolicyZoneConfiguration[]{{
                            add(new DistributionPolicyZoneConfiguration() {{
                                zone = "vel";
                            }}),
                            add(new DistributionPolicyZoneConfiguration() {{
                                zone = "enim";
                            }}),
                            add(new DistributionPolicyZoneConfiguration() {{
                                zone = "ducimus";
                            }}),
                            add(new DistributionPolicyZoneConfiguration() {{
                                zone = "quidem";
                            }}),
                        }};
                    }};;
                    failoverAction = InstanceGroupManagerFailoverActionEnum.NO_FAILOVER;
                    fingerprint = "at";
                    id = "alias";
                    instanceGroup = "consectetur";
                    instanceLifecyclePolicy = new InstanceGroupManagerInstanceLifecyclePolicy() {{
                        forceUpdateOnRepair = InstanceGroupManagerInstanceLifecyclePolicyForceUpdateOnRepairEnum.YES;
                    }};;
                    instanceTemplate = "beatae";
                    kind = "numquam";
                    listManagedInstancesResults = InstanceGroupManagerListManagedInstancesResultsEnum.PAGINATED;
                    name = "Darla Labadie";
                    namedPorts = new org.openapis.openapi.models.shared.NamedPort[]{{
                        add(new NamedPort() {{
                            name = "Mindy Ankunding";
                            port = 855063;
                        }}),
                    }};
                    region = "atque";
                    selfLink = "beatae";
                    serviceAccount = "aut";
                    statefulPolicy = new StatefulPolicy() {{
                        preservedState = new StatefulPolicyPreservedState() {{
                            disks = new java.util.HashMap<String, org.openapis.openapi.models.shared.StatefulPolicyPreservedStateDiskDevice>() {{
                                put("architecto", new StatefulPolicyPreservedStateDiskDevice() {{
                                    autoDelete = StatefulPolicyPreservedStateDiskDeviceAutoDeleteEnum.ON_PERMANENT_INSTANCE_DELETION;
                                }});
                                put("temporibus", new StatefulPolicyPreservedStateDiskDevice() {{
                                    autoDelete = StatefulPolicyPreservedStateDiskDeviceAutoDeleteEnum.ON_PERMANENT_INSTANCE_DELETION;
                                }});
                            }};
                            externalIPs = new java.util.HashMap<String, org.openapis.openapi.models.shared.StatefulPolicyPreservedStateNetworkIp>() {{
                                put("debitis", new StatefulPolicyPreservedStateNetworkIp() {{
                                    autoDelete = StatefulPolicyPreservedStateNetworkIpAutoDeleteEnum.NEVER;
                                }});
                                put("ad", new StatefulPolicyPreservedStateNetworkIp() {{
                                    autoDelete = StatefulPolicyPreservedStateNetworkIpAutoDeleteEnum.NEVER;
                                }});
                            }};
                            internalIPs = new java.util.HashMap<String, org.openapis.openapi.models.shared.StatefulPolicyPreservedStateNetworkIp>() {{
                                put("iste", new StatefulPolicyPreservedStateNetworkIp() {{
                                    autoDelete = StatefulPolicyPreservedStateNetworkIpAutoDeleteEnum.NEVER;
                                }});
                            }};
                        }};;
                    }};;
                    status = new InstanceGroupManagerStatus() {{
                        allInstancesConfig = new InstanceGroupManagerStatusAllInstancesConfig() {{
                            currentRevision = "minima";
                            effective = false;
                        }};;
                        autoscaler = "et";
                        isStable = false;
                        stateful = new InstanceGroupManagerStatusStateful() {{
                            hasStatefulConfig = false;
                            isStateful = false;
                            perInstanceConfigs = new InstanceGroupManagerStatusStatefulPerInstanceConfigs() {{
                                allEffective = false;
                            }};;
                        }};;
                        versionTarget = new InstanceGroupManagerStatusVersionTarget() {{
                            isReached = false;
                        }};;
                    }};;
                    targetPools = new String[]{{
                        add("quibusdam"),
                    }};
                    targetSize = 636019;
                    updatePolicy = new InstanceGroupManagerUpdatePolicy() {{
                        instanceRedistributionType = InstanceGroupManagerUpdatePolicyInstanceRedistributionTypeEnum.PROACTIVE;
                        maxSurge = new FixedOrPercent() {{
                            calculated = 32352;
                            fixed = 228977;
                            percent = 110280;
                        }};;
                        maxUnavailable = new FixedOrPercent() {{
                            calculated = 130672;
                            fixed = 158768;
                            percent = 591082;
                        }};;
                        minReadySec = 143278;
                        minimalAction = InstanceGroupManagerUpdatePolicyMinimalActionEnum.RESTART;
                        mostDisruptiveAllowedAction = InstanceGroupManagerUpdatePolicyMostDisruptiveAllowedActionEnum.RESTART;
                        replacementMethod = InstanceGroupManagerUpdatePolicyReplacementMethodEnum.RECREATE;
                        type = InstanceGroupManagerUpdatePolicyTypeEnum.OPPORTUNISTIC;
                    }};;
                    versions = new org.openapis.openapi.models.shared.InstanceGroupManagerVersion[]{{
                        add(new InstanceGroupManagerVersion() {{
                            instanceTemplate = "sed";
                            name = "Arnold Beatty";
                            targetSize = new FixedOrPercent() {{
                                calculated = 746936;
                                fixed = 574752;
                                percent = 487746;
                            }};
                        }}),
                        add(new InstanceGroupManagerVersion() {{
                            instanceTemplate = "repudiandae";
                            name = "Carl Batz";
                            targetSize = new FixedOrPercent() {{
                                calculated = 664312;
                                fixed = 153811;
                                percent = 853351;
                            }};
                        }}),
                        add(new InstanceGroupManagerVersion() {{
                            instanceTemplate = "recusandae";
                            name = "Joann White";
                            targetSize = new FixedOrPercent() {{
                                calculated = 23694;
                                fixed = 98871;
                                percent = 729139;
                            }};
                        }}),
                        add(new InstanceGroupManagerVersion() {{
                            instanceTemplate = "tenetur";
                            name = "Josephine Von";
                            targetSize = new FixedOrPercent() {{
                                calculated = 695002;
                                fixed = 283619;
                                percent = 330468;
                            }};
                        }}),
                    }};
                    zone = "eius";
                }};;
                accessToken = "quae";
                alt = AltEnum.JSON;
                callback = "dolorum";
                fields = "quod";
                key = "sunt";
                oauthToken = "iure";
                prettyPrint = false;
                quotaUser = "voluptatem";
                requestId = "incidunt";
                uploadType = "soluta";
                uploadProtocol = "a";
                userIp = "vitae";
            }};            

            ComputeInstanceGroupManagersUpdateResponse res = sdk.instanceGroupManagers.computeInstanceGroupManagersUpdate(req, new ComputeInstanceGroupManagersUpdateSecurity() {{
                option1 = new ComputeInstanceGroupManagersUpdateSecurityOption1("maxime", "placeat") {{
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
import org.openapis.openapi.models.shared.PreservedStatePreservedNetworkIp;
import org.openapis.openapi.models.shared.PreservedStatePreservedNetworkIpAutoDeleteEnum;
import org.openapis.openapi.models.shared.PreservedStatePreservedNetworkIpIpAddress;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeInstanceGroupManagersUpdatePerInstanceConfigsRequest req = new ComputeInstanceGroupManagersUpdatePerInstanceConfigsRequest("cupiditate", "asperiores", "maxime") {{
                dollarXgafv = XgafvEnum.ONE;
                instanceGroupManagersUpdatePerInstanceConfigsReq = new InstanceGroupManagersUpdatePerInstanceConfigsReq() {{
                    perInstanceConfigs = new org.openapis.openapi.models.shared.PerInstanceConfig[]{{
                        add(new PerInstanceConfig() {{
                            fingerprint = "deserunt";
                            name = "Percy Hane";
                            preservedState = new PreservedState() {{
                                disks = new java.util.HashMap<String, org.openapis.openapi.models.shared.PreservedStatePreservedDisk>() {{
                                    put("delectus", new PreservedStatePreservedDisk() {{
                                        autoDelete = PreservedStatePreservedDiskAutoDeleteEnum.NEVER;
                                        mode = PreservedStatePreservedDiskModeEnum.READ_WRITE;
                                        source = "labore";
                                    }});
                                    put("molestias", new PreservedStatePreservedDisk() {{
                                        autoDelete = PreservedStatePreservedDiskAutoDeleteEnum.NEVER;
                                        mode = PreservedStatePreservedDiskModeEnum.READ_WRITE;
                                        source = "ullam";
                                    }});
                                }};
                                externalIPs = new java.util.HashMap<String, org.openapis.openapi.models.shared.PreservedStatePreservedNetworkIp>() {{
                                    put("ut", new PreservedStatePreservedNetworkIp() {{
                                        autoDelete = PreservedStatePreservedNetworkIpAutoDeleteEnum.NEVER;
                                        ipAddress = new PreservedStatePreservedNetworkIpIpAddress() {{
                                            address = "056 Brycen Hills";
                                            literal = "esse";
                                        }};
                                    }});
                                    put("est", new PreservedStatePreservedNetworkIp() {{
                                        autoDelete = PreservedStatePreservedNetworkIpAutoDeleteEnum.ON_PERMANENT_INSTANCE_DELETION;
                                        ipAddress = new PreservedStatePreservedNetworkIpIpAddress() {{
                                            address = "846 Emmerich Spring";
                                            literal = "molestiae";
                                        }};
                                    }});
                                }};
                                internalIPs = new java.util.HashMap<String, org.openapis.openapi.models.shared.PreservedStatePreservedNetworkIp>() {{
                                    put("est", new PreservedStatePreservedNetworkIp() {{
                                        autoDelete = PreservedStatePreservedNetworkIpAutoDeleteEnum.ON_PERMANENT_INSTANCE_DELETION;
                                        ipAddress = new PreservedStatePreservedNetworkIpIpAddress() {{
                                            address = "07977 Feest Terrace";
                                            literal = "magni";
                                        }};
                                    }});
                                }};
                                metadata = new java.util.HashMap<String, String>() {{
                                    put("esse", "deleniti");
                                }};
                            }};
                            status = PerInstanceConfigStatusEnum.NONE;
                        }}),
                    }};
                }};;
                accessToken = "debitis";
                alt = AltEnum.JSON;
                callback = "facilis";
                fields = "sapiente";
                key = "maxime";
                oauthToken = "sed";
                prettyPrint = false;
                quotaUser = "dolor";
                requestId = "nulla";
                uploadType = "sint";
                uploadProtocol = "eius";
                userIp = "ad";
            }};            

            ComputeInstanceGroupManagersUpdatePerInstanceConfigsResponse res = sdk.instanceGroupManagers.computeInstanceGroupManagersUpdatePerInstanceConfigs(req, new ComputeInstanceGroupManagersUpdatePerInstanceConfigsSecurity() {{
                option1 = new ComputeInstanceGroupManagersUpdatePerInstanceConfigsSecurityOption1("aperiam", "animi") {{
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
