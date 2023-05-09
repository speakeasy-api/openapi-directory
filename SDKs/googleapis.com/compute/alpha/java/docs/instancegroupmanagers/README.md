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
* [computeInstanceGroupManagersResumeInstances](#computeinstancegroupmanagersresumeinstances) - Flags the specified instances in the managed instance group to be resumed. This method increases the targetSize and decreases the targetSuspendedSize of the managed instance group by the number of instances that you resume. The resumeInstances operation is marked DONE if the resumeInstances request is successful. The underlying actions take additional time. You must separately verify the status of the RESUMING action with the listmanagedinstances method. In this request, you can only specify instances that are suspended. For example, if an instance was previously suspended using the suspendInstances method, it can be resumed using the resumeInstances method. If a health check is attached to the managed instance group, the specified instances will be verified as healthy after they are resumed. You can specify a maximum of 1000 instances with this method per request.
* [computeInstanceGroupManagersSetAutoHealingPolicies](#computeinstancegroupmanagerssetautohealingpolicies) - Motifies the autohealing policy for the instances in this managed instance group. [Deprecated] This method is deprecated. Use instanceGroupManagers.patch instead.
* [computeInstanceGroupManagersSetInstanceTemplate](#computeinstancegroupmanagerssetinstancetemplate) - Specifies the instance template to use when creating new instances in this group. The templates for existing instances in the group do not change unless you run recreateInstances, run applyUpdatesToInstances, or set the group's updatePolicy.type to PROACTIVE.
* [computeInstanceGroupManagersSetTargetPools](#computeinstancegroupmanagerssettargetpools) - Modifies the target pools to which all instances in this managed instance group are assigned. The target pools automatically apply to all of the instances in the managed instance group. This operation is marked DONE when you make the request even if the instances have not yet been added to their target pools. The change might take some time to apply to all of the instances in the group depending on the size of the group.
* [computeInstanceGroupManagersStartInstances](#computeinstancegroupmanagersstartinstances) - Flags the specified instances in the managed instance group to be started. This method increases the targetSize and decreases the targetStoppedSize of the managed instance group by the number of instances that you start. The startInstances operation is marked DONE if the startInstances request is successful. The underlying actions take additional time. You must separately verify the status of the STARTING action with the listmanagedinstances method. In this request, you can only specify instances that are stopped. For example, if an instance was previously stopped using the stopInstances method, it can be started using the startInstances method. If a health check is attached to the managed instance group, the specified instances will be verified as healthy after they are started. You can specify a maximum of 1000 instances with this method per request.
* [computeInstanceGroupManagersStopInstances](#computeinstancegroupmanagersstopinstances) - Flags the specified instances in the managed instance group to be immediately stopped. You can only specify instances that are running in this request. This method reduces the targetSize and increases the targetStoppedSize of the managed instance group by the number of instances that you stop. The stopInstances operation is marked DONE if the stopInstances request is successful. The underlying actions take additional time. You must separately verify the status of the STOPPING action with the listmanagedinstances method. If the standbyPolicy.initialDelaySec field is set, the group delays stopping the instances until initialDelaySec have passed from instance.creationTimestamp (that is, when the instance was created). This delay gives your application time to set itself up and initialize on the instance. If more than initialDelaySec seconds have passed since instance.creationTimestamp when this method is called, there will be zero delay. If the group is part of a backend service that has enabled connection draining, it can take up to 60 seconds after the connection draining duration has elapsed before the VM instance is stopped. Stopped instances can be started using the startInstances method. You can specify a maximum of 1000 instances with this method per request.
* [computeInstanceGroupManagersSuspendInstances](#computeinstancegroupmanagerssuspendinstances) - Flags the specified instances in the managed instance group to be immediately suspended. You can only specify instances that are running in this request. This method reduces the targetSize and increases the targetSuspendedSize of the managed instance group by the number of instances that you suspend. The suspendInstances operation is marked DONE if the suspendInstances request is successful. The underlying actions take additional time. You must separately verify the status of the SUSPENDING action with the listmanagedinstances method. If the standbyPolicy.initialDelaySec field is set, the group delays suspension of the instances until initialDelaySec have passed from instance.creationTimestamp (that is, when the instance was created). This delay gives your application time to set itself up and initialize on the instance. If more than initialDelaySec seconds have passed since instance.creationTimestamp when this method is called, there will be zero delay. If the group is part of a backend service that has enabled connection draining, it can take up to 60 seconds after the connection draining duration has elapsed before the VM instance is suspended. Suspended instances can be resumed using the resumeInstances method. You can specify a maximum of 1000 instances with this method per request.
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

            ComputeInstanceGroupManagersAbandonInstancesRequest req = new ComputeInstanceGroupManagersAbandonInstancesRequest("at", "incidunt", "autem") {{
                dollarXgafv = XgafvEnum.ONE;
                instanceGroupManagersAbandonInstancesRequest = new InstanceGroupManagersAbandonInstancesRequest() {{
                    instances = new String[]{{
                        add("iusto"),
                        add("dignissimos"),
                        add("debitis"),
                    }};
                }};;
                accessToken = "quo";
                alt = AltEnum.PROTO;
                callback = "tempore";
                fields = "sunt";
                key = "nisi";
                oauthToken = "nulla";
                prettyPrint = false;
                quotaUser = "architecto";
                requestId = "accusantium";
                uploadType = "a";
                uploadProtocol = "et";
                userIp = "repudiandae";
            }};            

            ComputeInstanceGroupManagersAbandonInstancesResponse res = sdk.instanceGroupManagers.computeInstanceGroupManagersAbandonInstances(req, new ComputeInstanceGroupManagersAbandonInstancesSecurity() {{
                option1 = new ComputeInstanceGroupManagersAbandonInstancesSecurityOption1("delectus", "qui") {{
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

            ComputeInstanceGroupManagersAggregatedListRequest req = new ComputeInstanceGroupManagersAggregatedListRequest("laboriosam") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "ab";
                alt = AltEnum.PROTO;
                callback = "nihil";
                fields = "quisquam";
                filter = "aperiam";
                includeAllScopes = false;
                key = "delectus";
                maxResults = 16370L;
                oauthToken = "repellat";
                orderBy = "molestias";
                pageToken = "ducimus";
                prettyPrint = false;
                quotaUser = "dolorem";
                returnPartialSuccess = false;
                uploadType = "sapiente";
                uploadProtocol = "error";
                userIp = "facere";
            }};            

            ComputeInstanceGroupManagersAggregatedListResponse res = sdk.instanceGroupManagers.computeInstanceGroupManagersAggregatedList(req, new ComputeInstanceGroupManagersAggregatedListSecurity() {{
                option1 = new ComputeInstanceGroupManagersAggregatedListSecurityOption1("veniam", "eligendi") {{
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
import org.openapis.openapi.models.shared.InstanceGroupManagersApplyUpdatesRequestMaximalActionEnum;
import org.openapis.openapi.models.shared.InstanceGroupManagersApplyUpdatesRequestMinimalActionEnum;
import org.openapis.openapi.models.shared.InstanceGroupManagersApplyUpdatesRequestMostDisruptiveAllowedActionEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeInstanceGroupManagersApplyUpdatesToInstancesRequest req = new ComputeInstanceGroupManagersApplyUpdatesToInstancesRequest("aspernatur", "nemo", "doloribus") {{
                dollarXgafv = XgafvEnum.TWO;
                instanceGroupManagersApplyUpdatesRequest = new InstanceGroupManagersApplyUpdatesRequest() {{
                    allInstances = false;
                    instances = new String[]{{
                        add("repudiandae"),
                    }};
                    maximalAction = InstanceGroupManagersApplyUpdatesRequestMaximalActionEnum.NONE;
                    minimalAction = InstanceGroupManagersApplyUpdatesRequestMinimalActionEnum.REPLACE;
                    mostDisruptiveAllowedAction = InstanceGroupManagersApplyUpdatesRequestMostDisruptiveAllowedActionEnum.REFRESH;
                }};;
                accessToken = "deserunt";
                alt = AltEnum.JSON;
                callback = "officia";
                fields = "magnam";
                key = "quia";
                oauthToken = "ullam";
                prettyPrint = false;
                quotaUser = "dolor";
                uploadType = "maxime";
                uploadProtocol = "amet";
                userIp = "ipsa";
            }};            

            ComputeInstanceGroupManagersApplyUpdatesToInstancesResponse res = sdk.instanceGroupManagers.computeInstanceGroupManagersApplyUpdatesToInstances(req, new ComputeInstanceGroupManagersApplyUpdatesToInstancesSecurity() {{
                option1 = new ComputeInstanceGroupManagersApplyUpdatesToInstancesSecurityOption1("consequuntur", "ullam") {{
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

            ComputeInstanceGroupManagersCreateInstancesRequest req = new ComputeInstanceGroupManagersCreateInstancesRequest("molestiae", "architecto", "ab") {{
                dollarXgafv = XgafvEnum.TWO;
                instanceGroupManagersCreateInstancesRequest = new InstanceGroupManagersCreateInstancesRequest() {{
                    instances = new org.openapis.openapi.models.shared.PerInstanceConfig[]{{
                        add(new PerInstanceConfig() {{
                            fingerprint = "fugit";
                            name = "Ted Walsh";
                            preservedState = new PreservedState() {{
                                disks = new java.util.HashMap<String, org.openapis.openapi.models.shared.PreservedStatePreservedDisk>() {{
                                    put("enim", new PreservedStatePreservedDisk() {{
                                        autoDelete = PreservedStatePreservedDiskAutoDeleteEnum.NEVER;
                                        mode = PreservedStatePreservedDiskModeEnum.READ_WRITE;
                                        source = "cum";
                                    }});
                                    put("itaque", new PreservedStatePreservedDisk() {{
                                        autoDelete = PreservedStatePreservedDiskAutoDeleteEnum.NEVER;
                                        mode = PreservedStatePreservedDiskModeEnum.READ_WRITE;
                                        source = "recusandae";
                                    }});
                                    put("numquam", new PreservedStatePreservedDisk() {{
                                        autoDelete = PreservedStatePreservedDiskAutoDeleteEnum.NEVER;
                                        mode = PreservedStatePreservedDiskModeEnum.READ_WRITE;
                                        source = "iusto";
                                    }});
                                    put("culpa", new PreservedStatePreservedDisk() {{
                                        autoDelete = PreservedStatePreservedDiskAutoDeleteEnum.NEVER;
                                        mode = PreservedStatePreservedDiskModeEnum.READ_ONLY;
                                        source = "ipsam";
                                    }});
                                }};
                                externalIPs = new java.util.HashMap<String, org.openapis.openapi.models.shared.PreservedStatePreservedNetworkIp>() {{
                                    put("officia", new PreservedStatePreservedNetworkIp() {{
                                        autoDelete = PreservedStatePreservedNetworkIpAutoDeleteEnum.NEVER;
                                        ipAddress = new PreservedStatePreservedNetworkIpIpAddress() {{
                                            address = "62665 Hintz Overpass";
                                            literal = "omnis";
                                        }};
                                    }});
                                    put("rem", new PreservedStatePreservedNetworkIp() {{
                                        autoDelete = PreservedStatePreservedNetworkIpAutoDeleteEnum.ON_PERMANENT_INSTANCE_DELETION;
                                        ipAddress = new PreservedStatePreservedNetworkIpIpAddress() {{
                                            address = "51898 Nikki Loaf";
                                            literal = "iusto";
                                        }};
                                    }});
                                    put("eligendi", new PreservedStatePreservedNetworkIp() {{
                                        autoDelete = PreservedStatePreservedNetworkIpAutoDeleteEnum.NEVER;
                                        ipAddress = new PreservedStatePreservedNetworkIpIpAddress() {{
                                            address = "84848 Shaylee Trafficway";
                                            literal = "nisi";
                                        }};
                                    }});
                                    put("recusandae", new PreservedStatePreservedNetworkIp() {{
                                        autoDelete = PreservedStatePreservedNetworkIpAutoDeleteEnum.ON_PERMANENT_INSTANCE_DELETION;
                                        ipAddress = new PreservedStatePreservedNetworkIpIpAddress() {{
                                            address = "507 Sauer Falls";
                                            literal = "molestias";
                                        }};
                                    }});
                                }};
                                internalIPs = new java.util.HashMap<String, org.openapis.openapi.models.shared.PreservedStatePreservedNetworkIp>() {{
                                    put("saepe", new PreservedStatePreservedNetworkIp() {{
                                        autoDelete = PreservedStatePreservedNetworkIpAutoDeleteEnum.NEVER;
                                        ipAddress = new PreservedStatePreservedNetworkIpIpAddress() {{
                                            address = "54401 Watsica Springs";
                                            literal = "adipisci";
                                        }};
                                    }});
                                    put("sunt", new PreservedStatePreservedNetworkIp() {{
                                        autoDelete = PreservedStatePreservedNetworkIpAutoDeleteEnum.ON_PERMANENT_INSTANCE_DELETION;
                                        ipAddress = new PreservedStatePreservedNetworkIpIpAddress() {{
                                            address = "0512 Carroll Mews";
                                            literal = "perspiciatis";
                                        }};
                                    }});
                                }};
                                metadata = new java.util.HashMap<String, String>() {{
                                    put("dolor", "eum");
                                    put("culpa", "iure");
                                    put("harum", "sunt");
                                }};
                            }};
                            status = PerInstanceConfigStatusEnum.UNAPPLIED;
                        }}),
                        add(new PerInstanceConfig() {{
                            fingerprint = "dolores";
                            name = "Elvira Price IV";
                            preservedState = new PreservedState() {{
                                disks = new java.util.HashMap<String, org.openapis.openapi.models.shared.PreservedStatePreservedDisk>() {{
                                    put("est", new PreservedStatePreservedDisk() {{
                                        autoDelete = PreservedStatePreservedDiskAutoDeleteEnum.NEVER;
                                        mode = PreservedStatePreservedDiskModeEnum.READ_ONLY;
                                        source = "placeat";
                                    }});
                                    put("voluptatum", new PreservedStatePreservedDisk() {{
                                        autoDelete = PreservedStatePreservedDiskAutoDeleteEnum.ON_PERMANENT_INSTANCE_DELETION;
                                        mode = PreservedStatePreservedDiskModeEnum.READ_WRITE;
                                        source = "dolore";
                                    }});
                                    put("commodi", new PreservedStatePreservedDisk() {{
                                        autoDelete = PreservedStatePreservedDiskAutoDeleteEnum.ON_PERMANENT_INSTANCE_DELETION;
                                        mode = PreservedStatePreservedDiskModeEnum.READ_ONLY;
                                        source = "beatae";
                                    }});
                                }};
                                externalIPs = new java.util.HashMap<String, org.openapis.openapi.models.shared.PreservedStatePreservedNetworkIp>() {{
                                    put("voluptate", new PreservedStatePreservedNetworkIp() {{
                                        autoDelete = PreservedStatePreservedNetworkIpAutoDeleteEnum.ON_PERMANENT_INSTANCE_DELETION;
                                        ipAddress = new PreservedStatePreservedNetworkIpIpAddress() {{
                                            address = "687 Miles Locks";
                                            literal = "eaque";
                                        }};
                                    }});
                                    put("voluptatibus", new PreservedStatePreservedNetworkIp() {{
                                        autoDelete = PreservedStatePreservedNetworkIpAutoDeleteEnum.ON_PERMANENT_INSTANCE_DELETION;
                                        ipAddress = new PreservedStatePreservedNetworkIpIpAddress() {{
                                            address = "735 Alvera Valleys";
                                            literal = "repudiandae";
                                        }};
                                    }});
                                }};
                                internalIPs = new java.util.HashMap<String, org.openapis.openapi.models.shared.PreservedStatePreservedNetworkIp>() {{
                                    put("nihil", new PreservedStatePreservedNetworkIp() {{
                                        autoDelete = PreservedStatePreservedNetworkIpAutoDeleteEnum.NEVER;
                                        ipAddress = new PreservedStatePreservedNetworkIpIpAddress() {{
                                            address = "240 Kshlerin Turnpike";
                                            literal = "voluptatibus";
                                        }};
                                    }});
                                    put("esse", new PreservedStatePreservedNetworkIp() {{
                                        autoDelete = PreservedStatePreservedNetworkIpAutoDeleteEnum.ON_PERMANENT_INSTANCE_DELETION;
                                        ipAddress = new PreservedStatePreservedNetworkIpIpAddress() {{
                                            address = "04931 Bahringer Stream";
                                            literal = "dolorem";
                                        }};
                                    }});
                                }};
                                metadata = new java.util.HashMap<String, String>() {{
                                    put("blanditiis", "ducimus");
                                }};
                            }};
                            status = PerInstanceConfigStatusEnum.APPLYING;
                        }}),
                    }};
                }};;
                accessToken = "modi";
                alt = AltEnum.PROTO;
                callback = "consequuntur";
                fields = "perferendis";
                key = "est";
                oauthToken = "ipsum";
                prettyPrint = false;
                quotaUser = "temporibus";
                requestId = "perspiciatis";
                uploadType = "corrupti";
                uploadProtocol = "ea";
                userIp = "sequi";
            }};            

            ComputeInstanceGroupManagersCreateInstancesResponse res = sdk.instanceGroupManagers.computeInstanceGroupManagersCreateInstances(req, new ComputeInstanceGroupManagersCreateInstancesSecurity() {{
                option1 = new ComputeInstanceGroupManagersCreateInstancesSecurityOption1("esse", "nobis") {{
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

            ComputeInstanceGroupManagersDeleteRequest req = new ComputeInstanceGroupManagersDeleteRequest("est", "totam", "corporis") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "adipisci";
                alt = AltEnum.PROTO;
                callback = "repudiandae";
                fields = "autem";
                key = "nostrum";
                oauthToken = "ad";
                prettyPrint = false;
                quotaUser = "molestiae";
                requestId = "ut";
                uploadType = "possimus";
                uploadProtocol = "harum";
                userIp = "culpa";
            }};            

            ComputeInstanceGroupManagersDeleteResponse res = sdk.instanceGroupManagers.computeInstanceGroupManagersDelete(req, new ComputeInstanceGroupManagersDeleteSecurity() {{
                option1 = new ComputeInstanceGroupManagersDeleteSecurityOption1("reiciendis", "natus") {{
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

            ComputeInstanceGroupManagersDeleteInstancesRequest req = new ComputeInstanceGroupManagersDeleteInstancesRequest("labore", "officia", "quam") {{
                dollarXgafv = XgafvEnum.TWO;
                instanceGroupManagersDeleteInstancesRequest = new InstanceGroupManagersDeleteInstancesRequest() {{
                    instances = new String[]{{
                        add("rem"),
                        add("a"),
                        add("illo"),
                    }};
                    skipInstancesOnValidationError = false;
                }};;
                accessToken = "velit";
                alt = AltEnum.MEDIA;
                callback = "delectus";
                fields = "magni";
                key = "rem";
                oauthToken = "assumenda";
                prettyPrint = false;
                quotaUser = "libero";
                requestId = "quia";
                uploadType = "porro";
                uploadProtocol = "sapiente";
                userIp = "consequuntur";
            }};            

            ComputeInstanceGroupManagersDeleteInstancesResponse res = sdk.instanceGroupManagers.computeInstanceGroupManagersDeleteInstances(req, new ComputeInstanceGroupManagersDeleteInstancesSecurity() {{
                option1 = new ComputeInstanceGroupManagersDeleteInstancesSecurityOption1("expedita", "voluptatibus") {{
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

            ComputeInstanceGroupManagersDeletePerInstanceConfigsRequest req = new ComputeInstanceGroupManagersDeletePerInstanceConfigsRequest("eius", "voluptatibus", "neque") {{
                dollarXgafv = XgafvEnum.TWO;
                instanceGroupManagersDeletePerInstanceConfigsReq = new InstanceGroupManagersDeletePerInstanceConfigsReq() {{
                    names = new String[]{{
                        add("quibusdam"),
                        add("amet"),
                        add("minima"),
                        add("ea"),
                    }};
                }};;
                accessToken = "fugiat";
                alt = AltEnum.MEDIA;
                callback = "officiis";
                fields = "sunt";
                key = "modi";
                oauthToken = "tempore";
                prettyPrint = false;
                quotaUser = "dolores";
                uploadType = "beatae";
                uploadProtocol = "eligendi";
                userIp = "fugiat";
            }};            

            ComputeInstanceGroupManagersDeletePerInstanceConfigsResponse res = sdk.instanceGroupManagers.computeInstanceGroupManagersDeletePerInstanceConfigs(req, new ComputeInstanceGroupManagersDeletePerInstanceConfigsSecurity() {{
                option1 = new ComputeInstanceGroupManagersDeletePerInstanceConfigsSecurityOption1("occaecati", "voluptatum") {{
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

            ComputeInstanceGroupManagersGetRequest req = new ComputeInstanceGroupManagersGetRequest("beatae", "natus", "aliquid") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "veniam";
                alt = AltEnum.MEDIA;
                callback = "id";
                fields = "delectus";
                key = "autem";
                oauthToken = "iste";
                prettyPrint = false;
                quotaUser = "mollitia";
                uploadType = "sunt";
                uploadProtocol = "quod";
                userIp = "labore";
            }};            

            ComputeInstanceGroupManagersGetResponse res = sdk.instanceGroupManagers.computeInstanceGroupManagersGet(req, new ComputeInstanceGroupManagersGetSecurity() {{
                option1 = new ComputeInstanceGroupManagersGetSecurityOption1("facilis", "ducimus") {{
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
import org.openapis.openapi.models.shared.InstanceGroupManagerAutoHealingPolicyAutoHealingTriggers;
import org.openapis.openapi.models.shared.InstanceGroupManagerAutoHealingPolicyAutoHealingTriggersOnHealthCheckEnum;
import org.openapis.openapi.models.shared.InstanceGroupManagerFailoverActionEnum;
import org.openapis.openapi.models.shared.InstanceGroupManagerInstanceFlexibilityPolicy;
import org.openapis.openapi.models.shared.InstanceGroupManagerInstanceFlexibilityPolicyInstanceSelection;
import org.openapis.openapi.models.shared.InstanceGroupManagerInstanceLifecyclePolicy;
import org.openapis.openapi.models.shared.InstanceGroupManagerInstanceLifecyclePolicyDefaultActionOnFailureEnum;
import org.openapis.openapi.models.shared.InstanceGroupManagerInstanceLifecyclePolicyForceUpdateOnRepairEnum;
import org.openapis.openapi.models.shared.InstanceGroupManagerInstanceLifecyclePolicyMetadataBasedReadinessSignal;
import org.openapis.openapi.models.shared.InstanceGroupManagerListManagedInstancesResultsEnum;
import org.openapis.openapi.models.shared.InstanceGroupManagerStandbyPolicy;
import org.openapis.openapi.models.shared.InstanceGroupManagerStatus;
import org.openapis.openapi.models.shared.InstanceGroupManagerStatusAllInstancesConfig;
import org.openapis.openapi.models.shared.InstanceGroupManagerStatusStateful;
import org.openapis.openapi.models.shared.InstanceGroupManagerStatusStatefulPerInstanceConfigs;
import org.openapis.openapi.models.shared.InstanceGroupManagerStatusVersionTarget;
import org.openapis.openapi.models.shared.InstanceGroupManagerTargetSizeUnitEnum;
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

            ComputeInstanceGroupManagersInsertRequest req = new ComputeInstanceGroupManagersInsertRequest("natus", "fuga") {{
                dollarXgafv = XgafvEnum.TWO;
                instanceGroupManager = new InstanceGroupManager() {{
                    allInstancesConfig = new InstanceGroupManagerAllInstancesConfig() {{
                        properties = new InstancePropertiesPatch() {{
                            labels = new java.util.HashMap<String, String>() {{
                                put("non", "vel");
                            }};
                            metadata = new java.util.HashMap<String, String>() {{
                                put("beatae", "eligendi");
                                put("eos", "dolor");
                                put("eligendi", "dolorem");
                            }};
                        }};;
                    }};;
                    autoHealingPolicies = new org.openapis.openapi.models.shared.InstanceGroupManagerAutoHealingPolicy[]{{
                        add(new InstanceGroupManagerAutoHealingPolicy() {{
                            autoHealingTriggers = new InstanceGroupManagerAutoHealingPolicyAutoHealingTriggers() {{
                                onHealthCheck = InstanceGroupManagerAutoHealingPolicyAutoHealingTriggersOnHealthCheckEnum.ON;
                            }};
                            healthCheck = "voluptate";
                            initialDelaySec = 780639;
                            maxUnavailable = new FixedOrPercent() {{
                                calculated = 7135;
                                fixed = 886365;
                                percent = 66129;
                            }};
                        }}),
                        add(new InstanceGroupManagerAutoHealingPolicy() {{
                            autoHealingTriggers = new InstanceGroupManagerAutoHealingPolicyAutoHealingTriggers() {{
                                onHealthCheck = InstanceGroupManagerAutoHealingPolicyAutoHealingTriggersOnHealthCheckEnum.OFF;
                            }};
                            healthCheck = "optio";
                            initialDelaySec = 716296;
                            maxUnavailable = new FixedOrPercent() {{
                                calculated = 93838;
                                fixed = 170949;
                                percent = 771042;
                            }};
                        }}),
                        add(new InstanceGroupManagerAutoHealingPolicy() {{
                            autoHealingTriggers = new InstanceGroupManagerAutoHealingPolicyAutoHealingTriggers() {{
                                onHealthCheck = InstanceGroupManagerAutoHealingPolicyAutoHealingTriggersOnHealthCheckEnum.OFF;
                            }};
                            healthCheck = "nam";
                            initialDelaySec = 632121;
                            maxUnavailable = new FixedOrPercent() {{
                                calculated = 513734;
                                fixed = 147883;
                                percent = 358882;
                            }};
                        }}),
                    }};
                    baseInstanceName = "a";
                    creationTimestamp = "necessitatibus";
                    currentActions = new InstanceGroupManagerActionsSummary() {{
                        abandoning = 127857;
                        creating = 176583;
                        creatingAtomically = 776764;
                        creatingWithoutRetries = 855029;
                        deleting = 318614;
                        none = 763476;
                        queuing = 732906;
                        recreating = 667735;
                        refreshing = 404758;
                        restarting = 942371;
                        resuming = 747629;
                        starting = 996128;
                        stopping = 900339;
                        suspending = 789235;
                        verifying = 596143;
                    }};;
                    description = "amet";
                    distributionPolicy = new DistributionPolicy() {{
                        targetShape = DistributionPolicyTargetShapeEnum.ANY;
                        zones = new org.openapis.openapi.models.shared.DistributionPolicyZoneConfiguration[]{{
                            add(new DistributionPolicyZoneConfiguration() {{
                                zone = "a";
                            }}),
                            add(new DistributionPolicyZoneConfiguration() {{
                                zone = "aliquid";
                            }}),
                            add(new DistributionPolicyZoneConfiguration() {{
                                zone = "voluptatum";
                            }}),
                        }};
                    }};;
                    failoverAction = InstanceGroupManagerFailoverActionEnum.NO_FAILOVER;
                    fingerprint = "adipisci";
                    id = "illum";
                    instanceFlexibilityPolicy = new InstanceGroupManagerInstanceFlexibilityPolicy() {{
                        instanceSelectionLists = new java.util.HashMap<String, org.openapis.openapi.models.shared.InstanceGroupManagerInstanceFlexibilityPolicyInstanceSelection>() {{
                            put("veniam", new InstanceGroupManagerInstanceFlexibilityPolicyInstanceSelection() {{
                                machineTypes = new String[]{{
                                    add("delectus"),
                                    add("earum"),
                                    add("placeat"),
                                }};
                                rank = 906587;
                            }});
                            put("quod", new InstanceGroupManagerInstanceFlexibilityPolicyInstanceSelection() {{
                                machineTypes = new String[]{{
                                    add("assumenda"),
                                }};
                                rank = 871790;
                            }});
                        }};
                    }};;
                    instanceGroup = "ea";
                    instanceLifecyclePolicy = new InstanceGroupManagerInstanceLifecyclePolicy() {{
                        defaultActionOnFailure = InstanceGroupManagerInstanceLifecyclePolicyDefaultActionOnFailureEnum.REPAIR;
                        forceUpdateOnRepair = InstanceGroupManagerInstanceLifecyclePolicyForceUpdateOnRepairEnum.NO;
                        metadataBasedReadinessSignal = new InstanceGroupManagerInstanceLifecyclePolicyMetadataBasedReadinessSignal() {{
                            timeoutSec = 409679;
                        }};;
                    }};;
                    instanceTemplate = "repellat";
                    kind = "quam";
                    listManagedInstancesResults = InstanceGroupManagerListManagedInstancesResultsEnum.PAGINATED;
                    name = "Neil Sporer";
                    namedPorts = new org.openapis.openapi.models.shared.NamedPort[]{{
                        add(new NamedPort() {{
                            name = "Kate Schowalter PhD";
                            port = 387768;
                        }}),
                        add(new NamedPort() {{
                            name = "Melinda Heaney";
                            port = 255953;
                        }}),
                    }};
                    region = "fugiat";
                    selfLink = "autem";
                    selfLinkWithId = "et";
                    serviceAccount = "quisquam";
                    standbyPolicy = new InstanceGroupManagerStandbyPolicy() {{
                        initialDelaySec = 74669;
                    }};;
                    statefulPolicy = new StatefulPolicy() {{
                        preservedState = new StatefulPolicyPreservedState() {{
                            disks = new java.util.HashMap<String, org.openapis.openapi.models.shared.StatefulPolicyPreservedStateDiskDevice>() {{
                                put("quisquam", new StatefulPolicyPreservedStateDiskDevice() {{
                                    autoDelete = StatefulPolicyPreservedStateDiskDeviceAutoDeleteEnum.ON_PERMANENT_INSTANCE_DELETION;
                                }});
                                put("excepturi", new StatefulPolicyPreservedStateDiskDevice() {{
                                    autoDelete = StatefulPolicyPreservedStateDiskDeviceAutoDeleteEnum.NEVER;
                                }});
                            }};
                            externalIPs = new java.util.HashMap<String, org.openapis.openapi.models.shared.StatefulPolicyPreservedStateNetworkIp>() {{
                                put("odit", new StatefulPolicyPreservedStateNetworkIp() {{
                                    autoDelete = StatefulPolicyPreservedStateNetworkIpAutoDeleteEnum.NEVER;
                                }});
                            }};
                            internalIPs = new java.util.HashMap<String, org.openapis.openapi.models.shared.StatefulPolicyPreservedStateNetworkIp>() {{
                                put("neque", new StatefulPolicyPreservedStateNetworkIp() {{
                                    autoDelete = StatefulPolicyPreservedStateNetworkIpAutoDeleteEnum.NEVER;
                                }});
                                put("nobis", new StatefulPolicyPreservedStateNetworkIp() {{
                                    autoDelete = StatefulPolicyPreservedStateNetworkIpAutoDeleteEnum.NEVER;
                                }});
                                put("facere", new StatefulPolicyPreservedStateNetworkIp() {{
                                    autoDelete = StatefulPolicyPreservedStateNetworkIpAutoDeleteEnum.ON_PERMANENT_INSTANCE_DELETION;
                                }});
                                put("reprehenderit", new StatefulPolicyPreservedStateNetworkIp() {{
                                    autoDelete = StatefulPolicyPreservedStateNetworkIpAutoDeleteEnum.NEVER;
                                }});
                            }};
                        }};;
                    }};;
                    status = new InstanceGroupManagerStatus() {{
                        allInstancesConfig = new InstanceGroupManagerStatusAllInstancesConfig() {{
                            currentRevision = "reiciendis";
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
                        add("exercitationem"),
                        add("eius"),
                        add("iste"),
                    }};
                    targetSize = 65930;
                    targetSizeUnit = InstanceGroupManagerTargetSizeUnitEnum.VM;
                    targetStoppedSize = 697314;
                    targetSuspendedSize = 886903;
                    updatePolicy = new InstanceGroupManagerUpdatePolicy() {{
                        instanceRedistributionType = InstanceGroupManagerUpdatePolicyInstanceRedistributionTypeEnum.PROACTIVE;
                        maxSurge = new FixedOrPercent() {{
                            calculated = 492506;
                            fixed = 343163;
                            percent = 104737;
                        }};;
                        maxUnavailable = new FixedOrPercent() {{
                            calculated = 738504;
                            fixed = 113553;
                            percent = 38735;
                        }};;
                        minReadySec = 416803;
                        minimalAction = InstanceGroupManagerUpdatePolicyMinimalActionEnum.RESTART;
                        mostDisruptiveAllowedAction = InstanceGroupManagerUpdatePolicyMostDisruptiveAllowedActionEnum.NONE;
                        replacementMethod = InstanceGroupManagerUpdatePolicyReplacementMethodEnum.RECREATE;
                        type = InstanceGroupManagerUpdatePolicyTypeEnum.PROACTIVE;
                    }};;
                    versions = new org.openapis.openapi.models.shared.InstanceGroupManagerVersion[]{{
                        add(new InstanceGroupManagerVersion() {{
                            instanceTemplate = "dolorem";
                            name = "Hector Mosciski II";
                            tag = "similique";
                            targetSize = new FixedOrPercent() {{
                                calculated = 664596;
                                fixed = 889034;
                                percent = 605256;
                            }};
                        }}),
                    }};
                    zone = "cupiditate";
                }};;
                accessToken = "earum";
                alt = AltEnum.PROTO;
                callback = "repellendus";
                fields = "necessitatibus";
                key = "unde";
                oauthToken = "voluptates";
                prettyPrint = false;
                quotaUser = "in";
                requestId = "odit";
                uploadType = "iste";
                uploadProtocol = "eligendi";
                userIp = "error";
            }};            

            ComputeInstanceGroupManagersInsertResponse res = sdk.instanceGroupManagers.computeInstanceGroupManagersInsert(req, new ComputeInstanceGroupManagersInsertSecurity() {{
                option1 = new ComputeInstanceGroupManagersInsertSecurityOption1("nulla", "tempora") {{
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

            ComputeInstanceGroupManagersListRequest req = new ComputeInstanceGroupManagersListRequest("maiores", "eos") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "totam";
                alt = AltEnum.PROTO;
                callback = "aliquam";
                fields = "tempora";
                filter = "laboriosam";
                key = "quaerat";
                maxResults = 1663L;
                oauthToken = "quisquam";
                orderBy = "fuga";
                pageToken = "commodi";
                prettyPrint = false;
                quotaUser = "ipsa";
                returnPartialSuccess = false;
                uploadType = "illum";
                uploadProtocol = "tempore";
                userIp = "nihil";
            }};            

            ComputeInstanceGroupManagersListResponse res = sdk.instanceGroupManagers.computeInstanceGroupManagersList(req, new ComputeInstanceGroupManagersListSecurity() {{
                option1 = new ComputeInstanceGroupManagersListSecurityOption1("neque", "est") {{
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

            ComputeInstanceGroupManagersListErrorsRequest req = new ComputeInstanceGroupManagersListErrorsRequest("consequuntur", "a", "unde") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "maiores";
                alt = AltEnum.JSON;
                callback = "autem";
                fields = "in";
                filter = "at";
                key = "quisquam";
                maxResults = 61840L;
                oauthToken = "possimus";
                orderBy = "praesentium";
                pageToken = "facere";
                prettyPrint = false;
                quotaUser = "fuga";
                returnPartialSuccess = false;
                uploadType = "minima";
                uploadProtocol = "voluptas";
                userIp = "et";
            }};            

            ComputeInstanceGroupManagersListErrorsResponse res = sdk.instanceGroupManagers.computeInstanceGroupManagersListErrors(req, new ComputeInstanceGroupManagersListErrorsSecurity() {{
                option1 = new ComputeInstanceGroupManagersListErrorsSecurityOption1("explicabo", "sed") {{
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

            ComputeInstanceGroupManagersListManagedInstancesRequest req = new ComputeInstanceGroupManagersListManagedInstancesRequest("aut", "quia", "laboriosam") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "soluta";
                alt = AltEnum.MEDIA;
                callback = "asperiores";
                fields = "eos";
                filter = "quam";
                key = "voluptate";
                maxResults = 294917L;
                oauthToken = "praesentium";
                orderBy = "exercitationem";
                pageToken = "quo";
                prettyPrint = false;
                quotaUser = "et";
                returnPartialSuccess = false;
                uploadType = "cupiditate";
                uploadProtocol = "in";
                userIp = "voluptas";
            }};            

            ComputeInstanceGroupManagersListManagedInstancesResponse res = sdk.instanceGroupManagers.computeInstanceGroupManagersListManagedInstances(req, new ComputeInstanceGroupManagersListManagedInstancesSecurity() {{
                option1 = new ComputeInstanceGroupManagersListManagedInstancesSecurityOption1("similique", "tenetur") {{
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

            ComputeInstanceGroupManagersListPerInstanceConfigsRequest req = new ComputeInstanceGroupManagersListPerInstanceConfigsRequest("error", "blanditiis", "aut") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "culpa";
                alt = AltEnum.MEDIA;
                callback = "est";
                fields = "aut";
                filter = "blanditiis";
                key = "unde";
                maxResults = 944880L;
                oauthToken = "maxime";
                orderBy = "numquam";
                pageToken = "ut";
                prettyPrint = false;
                quotaUser = "fugiat";
                returnPartialSuccess = false;
                uploadType = "facilis";
                uploadProtocol = "dolores";
                userIp = "quam";
            }};            

            ComputeInstanceGroupManagersListPerInstanceConfigsResponse res = sdk.instanceGroupManagers.computeInstanceGroupManagersListPerInstanceConfigs(req, new ComputeInstanceGroupManagersListPerInstanceConfigsSecurity() {{
                option1 = new ComputeInstanceGroupManagersListPerInstanceConfigsSecurityOption1("eius", "ullam") {{
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
import org.openapis.openapi.models.shared.InstanceGroupManagerAutoHealingPolicyAutoHealingTriggers;
import org.openapis.openapi.models.shared.InstanceGroupManagerAutoHealingPolicyAutoHealingTriggersOnHealthCheckEnum;
import org.openapis.openapi.models.shared.InstanceGroupManagerFailoverActionEnum;
import org.openapis.openapi.models.shared.InstanceGroupManagerInstanceFlexibilityPolicy;
import org.openapis.openapi.models.shared.InstanceGroupManagerInstanceFlexibilityPolicyInstanceSelection;
import org.openapis.openapi.models.shared.InstanceGroupManagerInstanceLifecyclePolicy;
import org.openapis.openapi.models.shared.InstanceGroupManagerInstanceLifecyclePolicyDefaultActionOnFailureEnum;
import org.openapis.openapi.models.shared.InstanceGroupManagerInstanceLifecyclePolicyForceUpdateOnRepairEnum;
import org.openapis.openapi.models.shared.InstanceGroupManagerInstanceLifecyclePolicyMetadataBasedReadinessSignal;
import org.openapis.openapi.models.shared.InstanceGroupManagerListManagedInstancesResultsEnum;
import org.openapis.openapi.models.shared.InstanceGroupManagerStandbyPolicy;
import org.openapis.openapi.models.shared.InstanceGroupManagerStatus;
import org.openapis.openapi.models.shared.InstanceGroupManagerStatusAllInstancesConfig;
import org.openapis.openapi.models.shared.InstanceGroupManagerStatusStateful;
import org.openapis.openapi.models.shared.InstanceGroupManagerStatusStatefulPerInstanceConfigs;
import org.openapis.openapi.models.shared.InstanceGroupManagerStatusVersionTarget;
import org.openapis.openapi.models.shared.InstanceGroupManagerTargetSizeUnitEnum;
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

            ComputeInstanceGroupManagersPatchRequest req = new ComputeInstanceGroupManagersPatchRequest("neque", "ipsa", "officiis") {{
                dollarXgafv = XgafvEnum.ONE;
                instanceGroupManager1 = new InstanceGroupManager() {{
                    allInstancesConfig = new InstanceGroupManagerAllInstancesConfig() {{
                        properties = new InstancePropertiesPatch() {{
                            labels = new java.util.HashMap<String, String>() {{
                                put("placeat", "in");
                                put("minus", "voluptas");
                                put("quibusdam", "aut");
                                put("quod", "rerum");
                            }};
                            metadata = new java.util.HashMap<String, String>() {{
                                put("delectus", "repellendus");
                                put("quo", "possimus");
                                put("consectetur", "dolor");
                                put("modi", "facilis");
                            }};
                        }};;
                    }};;
                    autoHealingPolicies = new org.openapis.openapi.models.shared.InstanceGroupManagerAutoHealingPolicy[]{{
                        add(new InstanceGroupManagerAutoHealingPolicy() {{
                            autoHealingTriggers = new InstanceGroupManagerAutoHealingPolicyAutoHealingTriggers() {{
                                onHealthCheck = InstanceGroupManagerAutoHealingPolicyAutoHealingTriggersOnHealthCheckEnum.ON;
                            }};
                            healthCheck = "ea";
                            initialDelaySec = 145105;
                            maxUnavailable = new FixedOrPercent() {{
                                calculated = 232337;
                                fixed = 735433;
                                percent = 791618;
                            }};
                        }}),
                        add(new InstanceGroupManagerAutoHealingPolicy() {{
                            autoHealingTriggers = new InstanceGroupManagerAutoHealingPolicyAutoHealingTriggers() {{
                                onHealthCheck = InstanceGroupManagerAutoHealingPolicyAutoHealingTriggersOnHealthCheckEnum.ON;
                            }};
                            healthCheck = "quisquam";
                            initialDelaySec = 651742;
                            maxUnavailable = new FixedOrPercent() {{
                                calculated = 706471;
                                fixed = 342007;
                                percent = 4960;
                            }};
                        }}),
                    }};
                    baseInstanceName = "laborum";
                    creationTimestamp = "voluptates";
                    currentActions = new InstanceGroupManagerActionsSummary() {{
                        abandoning = 927773;
                        creating = 337558;
                        creatingAtomically = 935339;
                        creatingWithoutRetries = 28818;
                        deleting = 866285;
                        none = 637419;
                        queuing = 556517;
                        recreating = 737600;
                        refreshing = 571834;
                        restarting = 670961;
                        resuming = 959477;
                        starting = 390916;
                        stopping = 662335;
                        suspending = 861166;
                        verifying = 20223;
                    }};;
                    description = "ullam";
                    distributionPolicy = new DistributionPolicy() {{
                        targetShape = DistributionPolicyTargetShapeEnum.ANY_SINGLE_ZONE;
                        zones = new org.openapis.openapi.models.shared.DistributionPolicyZoneConfiguration[]{{
                            add(new DistributionPolicyZoneConfiguration() {{
                                zone = "nisi";
                            }}),
                            add(new DistributionPolicyZoneConfiguration() {{
                                zone = "repudiandae";
                            }}),
                            add(new DistributionPolicyZoneConfiguration() {{
                                zone = "odio";
                            }}),
                        }};
                    }};;
                    failoverAction = InstanceGroupManagerFailoverActionEnum.UNKNOWN;
                    fingerprint = "aliquam";
                    id = "quasi";
                    instanceFlexibilityPolicy = new InstanceGroupManagerInstanceFlexibilityPolicy() {{
                        instanceSelectionLists = new java.util.HashMap<String, org.openapis.openapi.models.shared.InstanceGroupManagerInstanceFlexibilityPolicyInstanceSelection>() {{
                            put("quo", new InstanceGroupManagerInstanceFlexibilityPolicyInstanceSelection() {{
                                machineTypes = new String[]{{
                                    add("saepe"),
                                    add("magni"),
                                    add("assumenda"),
                                }};
                                rank = 91092;
                            }});
                        }};
                    }};;
                    instanceGroup = "molestiae";
                    instanceLifecyclePolicy = new InstanceGroupManagerInstanceLifecyclePolicy() {{
                        defaultActionOnFailure = InstanceGroupManagerInstanceLifecyclePolicyDefaultActionOnFailureEnum.DO_NOTHING;
                        forceUpdateOnRepair = InstanceGroupManagerInstanceLifecyclePolicyForceUpdateOnRepairEnum.YES;
                        metadataBasedReadinessSignal = new InstanceGroupManagerInstanceLifecyclePolicyMetadataBasedReadinessSignal() {{
                            timeoutSec = 810526;
                        }};;
                    }};;
                    instanceTemplate = "illo";
                    kind = "optio";
                    listManagedInstancesResults = InstanceGroupManagerListManagedInstancesResultsEnum.PAGELESS;
                    name = "Dr. Meredith Gleichner";
                    namedPorts = new org.openapis.openapi.models.shared.NamedPort[]{{
                        add(new NamedPort() {{
                            name = "Mr. Dennis Kilback";
                            port = 459112;
                        }}),
                    }};
                    region = "cumque";
                    selfLink = "tempore";
                    selfLinkWithId = "debitis";
                    serviceAccount = "enim";
                    standbyPolicy = new InstanceGroupManagerStandbyPolicy() {{
                        initialDelaySec = 932415;
                    }};;
                    statefulPolicy = new StatefulPolicy() {{
                        preservedState = new StatefulPolicyPreservedState() {{
                            disks = new java.util.HashMap<String, org.openapis.openapi.models.shared.StatefulPolicyPreservedStateDiskDevice>() {{
                                put("non", new StatefulPolicyPreservedStateDiskDevice() {{
                                    autoDelete = StatefulPolicyPreservedStateDiskDeviceAutoDeleteEnum.ON_PERMANENT_INSTANCE_DELETION;
                                }});
                                put("esse", new StatefulPolicyPreservedStateDiskDevice() {{
                                    autoDelete = StatefulPolicyPreservedStateDiskDeviceAutoDeleteEnum.NEVER;
                                }});
                                put("quasi", new StatefulPolicyPreservedStateDiskDevice() {{
                                    autoDelete = StatefulPolicyPreservedStateDiskDeviceAutoDeleteEnum.NEVER;
                                }});
                                put("quas", new StatefulPolicyPreservedStateDiskDevice() {{
                                    autoDelete = StatefulPolicyPreservedStateDiskDeviceAutoDeleteEnum.NEVER;
                                }});
                            }};
                            externalIPs = new java.util.HashMap<String, org.openapis.openapi.models.shared.StatefulPolicyPreservedStateNetworkIp>() {{
                                put("nihil", new StatefulPolicyPreservedStateNetworkIp() {{
                                    autoDelete = StatefulPolicyPreservedStateNetworkIpAutoDeleteEnum.NEVER;
                                }});
                            }};
                            internalIPs = new java.util.HashMap<String, org.openapis.openapi.models.shared.StatefulPolicyPreservedStateNetworkIp>() {{
                                put("maiores", new StatefulPolicyPreservedStateNetworkIp() {{
                                    autoDelete = StatefulPolicyPreservedStateNetworkIpAutoDeleteEnum.NEVER;
                                }});
                            }};
                        }};;
                    }};;
                    status = new InstanceGroupManagerStatus() {{
                        allInstancesConfig = new InstanceGroupManagerStatusAllInstancesConfig() {{
                            currentRevision = "odit";
                            effective = false;
                        }};;
                        autoscaler = "itaque";
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
                        add("distinctio"),
                    }};
                    targetSize = 277644;
                    targetSizeUnit = InstanceGroupManagerTargetSizeUnitEnum.VM;
                    targetStoppedSize = 866789;
                    targetSuspendedSize = 707956;
                    updatePolicy = new InstanceGroupManagerUpdatePolicy() {{
                        instanceRedistributionType = InstanceGroupManagerUpdatePolicyInstanceRedistributionTypeEnum.PROACTIVE;
                        maxSurge = new FixedOrPercent() {{
                            calculated = 2725;
                            fixed = 945281;
                            percent = 145521;
                        }};;
                        maxUnavailable = new FixedOrPercent() {{
                            calculated = 248406;
                            fixed = 691750;
                            percent = 453494;
                        }};;
                        minReadySec = 714969;
                        minimalAction = InstanceGroupManagerUpdatePolicyMinimalActionEnum.REFRESH;
                        mostDisruptiveAllowedAction = InstanceGroupManagerUpdatePolicyMostDisruptiveAllowedActionEnum.RESTART;
                        replacementMethod = InstanceGroupManagerUpdatePolicyReplacementMethodEnum.SUBSTITUTE;
                        type = InstanceGroupManagerUpdatePolicyTypeEnum.PROACTIVE;
                    }};;
                    versions = new org.openapis.openapi.models.shared.InstanceGroupManagerVersion[]{{
                        add(new InstanceGroupManagerVersion() {{
                            instanceTemplate = "quas";
                            name = "Gilbert Ullrich";
                            tag = "fugiat";
                            targetSize = new FixedOrPercent() {{
                                calculated = 263183;
                                fixed = 451593;
                                percent = 484489;
                            }};
                        }}),
                        add(new InstanceGroupManagerVersion() {{
                            instanceTemplate = "voluptas";
                            name = "Gary Wisozk";
                            tag = "laborum";
                            targetSize = new FixedOrPercent() {{
                                calculated = 69825;
                                fixed = 439202;
                                percent = 643400;
                            }};
                        }}),
                    }};
                    zone = "blanditiis";
                }};;
                accessToken = "dolores";
                alt = AltEnum.PROTO;
                callback = "nemo";
                fields = "vero";
                key = "totam";
                oauthToken = "eos";
                prettyPrint = false;
                quotaUser = "delectus";
                requestId = "illum";
                uploadType = "consequuntur";
                uploadProtocol = "praesentium";
                userIp = "fugiat";
            }};            

            ComputeInstanceGroupManagersPatchResponse res = sdk.instanceGroupManagers.computeInstanceGroupManagersPatch(req, new ComputeInstanceGroupManagersPatchSecurity() {{
                option1 = new ComputeInstanceGroupManagersPatchSecurityOption1("beatae", "perferendis") {{
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

            ComputeInstanceGroupManagersPatchPerInstanceConfigsRequest req = new ComputeInstanceGroupManagersPatchPerInstanceConfigsRequest("quaerat", "aperiam", "harum") {{
                dollarXgafv = XgafvEnum.ONE;
                instanceGroupManagersPatchPerInstanceConfigsReq = new InstanceGroupManagersPatchPerInstanceConfigsReq() {{
                    perInstanceConfigs = new org.openapis.openapi.models.shared.PerInstanceConfig[]{{
                        add(new PerInstanceConfig() {{
                            fingerprint = "sint";
                            name = "Paula Monahan";
                            preservedState = new PreservedState() {{
                                disks = new java.util.HashMap<String, org.openapis.openapi.models.shared.PreservedStatePreservedDisk>() {{
                                    put("incidunt", new PreservedStatePreservedDisk() {{
                                        autoDelete = PreservedStatePreservedDiskAutoDeleteEnum.NEVER;
                                        mode = PreservedStatePreservedDiskModeEnum.READ_WRITE;
                                        source = "expedita";
                                    }});
                                    put("architecto", new PreservedStatePreservedDisk() {{
                                        autoDelete = PreservedStatePreservedDiskAutoDeleteEnum.ON_PERMANENT_INSTANCE_DELETION;
                                        mode = PreservedStatePreservedDiskModeEnum.READ_ONLY;
                                        source = "nemo";
                                    }});
                                    put("alias", new PreservedStatePreservedDisk() {{
                                        autoDelete = PreservedStatePreservedDiskAutoDeleteEnum.NEVER;
                                        mode = PreservedStatePreservedDiskModeEnum.READ_WRITE;
                                        source = "reiciendis";
                                    }});
                                }};
                                externalIPs = new java.util.HashMap<String, org.openapis.openapi.models.shared.PreservedStatePreservedNetworkIp>() {{
                                    put("suscipit", new PreservedStatePreservedNetworkIp() {{
                                        autoDelete = PreservedStatePreservedNetworkIpAutoDeleteEnum.NEVER;
                                        ipAddress = new PreservedStatePreservedNetworkIpIpAddress() {{
                                            address = "831 Mante Centers";
                                            literal = "tempora";
                                        }};
                                    }});
                                    put("ut", new PreservedStatePreservedNetworkIp() {{
                                        autoDelete = PreservedStatePreservedNetworkIpAutoDeleteEnum.ON_PERMANENT_INSTANCE_DELETION;
                                        ipAddress = new PreservedStatePreservedNetworkIpIpAddress() {{
                                            address = "6676 Giuseppe Camp";
                                            literal = "similique";
                                        }};
                                    }});
                                }};
                                internalIPs = new java.util.HashMap<String, org.openapis.openapi.models.shared.PreservedStatePreservedNetworkIp>() {{
                                    put("pariatur", new PreservedStatePreservedNetworkIp() {{
                                        autoDelete = PreservedStatePreservedNetworkIpAutoDeleteEnum.ON_PERMANENT_INSTANCE_DELETION;
                                        ipAddress = new PreservedStatePreservedNetworkIpIpAddress() {{
                                            address = "820 Ozella Ferry";
                                            literal = "odio";
                                        }};
                                    }});
                                    put("possimus", new PreservedStatePreservedNetworkIp() {{
                                        autoDelete = PreservedStatePreservedNetworkIpAutoDeleteEnum.ON_PERMANENT_INSTANCE_DELETION;
                                        ipAddress = new PreservedStatePreservedNetworkIpIpAddress() {{
                                            address = "6151 Gleason Pass";
                                            literal = "fugiat";
                                        }};
                                    }});
                                    put("sint", new PreservedStatePreservedNetworkIp() {{
                                        autoDelete = PreservedStatePreservedNetworkIpAutoDeleteEnum.NEVER;
                                        ipAddress = new PreservedStatePreservedNetworkIpIpAddress() {{
                                            address = "38276 Wisoky Skyway";
                                            literal = "inventore";
                                        }};
                                    }});
                                    put("cupiditate", new PreservedStatePreservedNetworkIp() {{
                                        autoDelete = PreservedStatePreservedNetworkIpAutoDeleteEnum.ON_PERMANENT_INSTANCE_DELETION;
                                        ipAddress = new PreservedStatePreservedNetworkIpIpAddress() {{
                                            address = "962 Eulah Dale";
                                            literal = "dignissimos";
                                        }};
                                    }});
                                }};
                                metadata = new java.util.HashMap<String, String>() {{
                                    put("odit", "tempore");
                                    put("maxime", "possimus");
                                    put("non", "ut");
                                }};
                            }};
                            status = PerInstanceConfigStatusEnum.APPLYING;
                        }}),
                        add(new PerInstanceConfig() {{
                            fingerprint = "saepe";
                            name = "Sergio Little";
                            preservedState = new PreservedState() {{
                                disks = new java.util.HashMap<String, org.openapis.openapi.models.shared.PreservedStatePreservedDisk>() {{
                                    put("porro", new PreservedStatePreservedDisk() {{
                                        autoDelete = PreservedStatePreservedDiskAutoDeleteEnum.ON_PERMANENT_INSTANCE_DELETION;
                                        mode = PreservedStatePreservedDiskModeEnum.READ_ONLY;
                                        source = "labore";
                                    }});
                                    put("voluptatum", new PreservedStatePreservedDisk() {{
                                        autoDelete = PreservedStatePreservedDiskAutoDeleteEnum.NEVER;
                                        mode = PreservedStatePreservedDiskModeEnum.READ_WRITE;
                                        source = "necessitatibus";
                                    }});
                                    put("perferendis", new PreservedStatePreservedDisk() {{
                                        autoDelete = PreservedStatePreservedDiskAutoDeleteEnum.ON_PERMANENT_INSTANCE_DELETION;
                                        mode = PreservedStatePreservedDiskModeEnum.READ_ONLY;
                                        source = "aliquid";
                                    }});
                                    put("repellendus", new PreservedStatePreservedDisk() {{
                                        autoDelete = PreservedStatePreservedDiskAutoDeleteEnum.NEVER;
                                        mode = PreservedStatePreservedDiskModeEnum.READ_ONLY;
                                        source = "distinctio";
                                    }});
                                }};
                                externalIPs = new java.util.HashMap<String, org.openapis.openapi.models.shared.PreservedStatePreservedNetworkIp>() {{
                                    put("quae", new PreservedStatePreservedNetworkIp() {{
                                        autoDelete = PreservedStatePreservedNetworkIpAutoDeleteEnum.NEVER;
                                        ipAddress = new PreservedStatePreservedNetworkIpIpAddress() {{
                                            address = "0295 Rutherford Junctions";
                                            literal = "explicabo";
                                        }};
                                    }});
                                }};
                                internalIPs = new java.util.HashMap<String, org.openapis.openapi.models.shared.PreservedStatePreservedNetworkIp>() {{
                                    put("doloribus", new PreservedStatePreservedNetworkIp() {{
                                        autoDelete = PreservedStatePreservedNetworkIpAutoDeleteEnum.ON_PERMANENT_INSTANCE_DELETION;
                                        ipAddress = new PreservedStatePreservedNetworkIpIpAddress() {{
                                            address = "4743 Jefferey Gardens";
                                            literal = "delectus";
                                        }};
                                    }});
                                    put("nostrum", new PreservedStatePreservedNetworkIp() {{
                                        autoDelete = PreservedStatePreservedNetworkIpAutoDeleteEnum.ON_PERMANENT_INSTANCE_DELETION;
                                        ipAddress = new PreservedStatePreservedNetworkIpIpAddress() {{
                                            address = "0928 Norbert Ville";
                                            literal = "porro";
                                        }};
                                    }});
                                }};
                                metadata = new java.util.HashMap<String, String>() {{
                                    put("vel", "dolorum");
                                    put("cupiditate", "ab");
                                    put("necessitatibus", "maxime");
                                    put("veniam", "qui");
                                }};
                            }};
                            status = PerInstanceConfigStatusEnum.EFFECTIVE;
                        }}),
                        add(new PerInstanceConfig() {{
                            fingerprint = "sed";
                            name = "Mr. Lynette Bayer I";
                            preservedState = new PreservedState() {{
                                disks = new java.util.HashMap<String, org.openapis.openapi.models.shared.PreservedStatePreservedDisk>() {{
                                    put("hic", new PreservedStatePreservedDisk() {{
                                        autoDelete = PreservedStatePreservedDiskAutoDeleteEnum.NEVER;
                                        mode = PreservedStatePreservedDiskModeEnum.READ_ONLY;
                                        source = "impedit";
                                    }});
                                    put("officiis", new PreservedStatePreservedDisk() {{
                                        autoDelete = PreservedStatePreservedDiskAutoDeleteEnum.ON_PERMANENT_INSTANCE_DELETION;
                                        mode = PreservedStatePreservedDiskModeEnum.READ_ONLY;
                                        source = "vitae";
                                    }});
                                    put("laborum", new PreservedStatePreservedDisk() {{
                                        autoDelete = PreservedStatePreservedDiskAutoDeleteEnum.ON_PERMANENT_INSTANCE_DELETION;
                                        mode = PreservedStatePreservedDiskModeEnum.READ_ONLY;
                                        source = "neque";
                                    }});
                                    put("debitis", new PreservedStatePreservedDisk() {{
                                        autoDelete = PreservedStatePreservedDiskAutoDeleteEnum.ON_PERMANENT_INSTANCE_DELETION;
                                        mode = PreservedStatePreservedDiskModeEnum.READ_WRITE;
                                        source = "suscipit";
                                    }});
                                }};
                                externalIPs = new java.util.HashMap<String, org.openapis.openapi.models.shared.PreservedStatePreservedNetworkIp>() {{
                                    put("corrupti", new PreservedStatePreservedNetworkIp() {{
                                        autoDelete = PreservedStatePreservedNetworkIpAutoDeleteEnum.NEVER;
                                        ipAddress = new PreservedStatePreservedNetworkIpIpAddress() {{
                                            address = "220 Aniya Forks";
                                            literal = "placeat";
                                        }};
                                    }});
                                    put("ipsam", new PreservedStatePreservedNetworkIp() {{
                                        autoDelete = PreservedStatePreservedNetworkIpAutoDeleteEnum.ON_PERMANENT_INSTANCE_DELETION;
                                        ipAddress = new PreservedStatePreservedNetworkIpIpAddress() {{
                                            address = "6898 Angelica Bridge";
                                            literal = "mollitia";
                                        }};
                                    }});
                                }};
                                internalIPs = new java.util.HashMap<String, org.openapis.openapi.models.shared.PreservedStatePreservedNetworkIp>() {{
                                    put("provident", new PreservedStatePreservedNetworkIp() {{
                                        autoDelete = PreservedStatePreservedNetworkIpAutoDeleteEnum.ON_PERMANENT_INSTANCE_DELETION;
                                        ipAddress = new PreservedStatePreservedNetworkIpIpAddress() {{
                                            address = "1769 Nelda Canyon";
                                            literal = "dolores";
                                        }};
                                    }});
                                    put("nemo", new PreservedStatePreservedNetworkIp() {{
                                        autoDelete = PreservedStatePreservedNetworkIpAutoDeleteEnum.ON_PERMANENT_INSTANCE_DELETION;
                                        ipAddress = new PreservedStatePreservedNetworkIpIpAddress() {{
                                            address = "81241 Schoen Hollow";
                                            literal = "voluptatibus";
                                        }};
                                    }});
                                    put("est", new PreservedStatePreservedNetworkIp() {{
                                        autoDelete = PreservedStatePreservedNetworkIpAutoDeleteEnum.NEVER;
                                        ipAddress = new PreservedStatePreservedNetworkIpIpAddress() {{
                                            address = "680 Barton Junction";
                                            literal = "porro";
                                        }};
                                    }});
                                    put("veniam", new PreservedStatePreservedNetworkIp() {{
                                        autoDelete = PreservedStatePreservedNetworkIpAutoDeleteEnum.ON_PERMANENT_INSTANCE_DELETION;
                                        ipAddress = new PreservedStatePreservedNetworkIpIpAddress() {{
                                            address = "3341 Stroman Terrace";
                                            literal = "dicta";
                                        }};
                                    }});
                                }};
                                metadata = new java.util.HashMap<String, String>() {{
                                    put("doloribus", "porro");
                                    put("eius", "nesciunt");
                                }};
                            }};
                            status = PerInstanceConfigStatusEnum.UNAPPLIED;
                        }}),
                        add(new PerInstanceConfig() {{
                            fingerprint = "in";
                            name = "Beulah Schmitt";
                            preservedState = new PreservedState() {{
                                disks = new java.util.HashMap<String, org.openapis.openapi.models.shared.PreservedStatePreservedDisk>() {{
                                    put("reiciendis", new PreservedStatePreservedDisk() {{
                                        autoDelete = PreservedStatePreservedDiskAutoDeleteEnum.ON_PERMANENT_INSTANCE_DELETION;
                                        mode = PreservedStatePreservedDiskModeEnum.READ_ONLY;
                                        source = "eaque";
                                    }});
                                    put("quo", new PreservedStatePreservedDisk() {{
                                        autoDelete = PreservedStatePreservedDiskAutoDeleteEnum.NEVER;
                                        mode = PreservedStatePreservedDiskModeEnum.READ_ONLY;
                                        source = "ipsum";
                                    }});
                                    put("exercitationem", new PreservedStatePreservedDisk() {{
                                        autoDelete = PreservedStatePreservedDiskAutoDeleteEnum.NEVER;
                                        mode = PreservedStatePreservedDiskModeEnum.READ_WRITE;
                                        source = "neque";
                                    }});
                                }};
                                externalIPs = new java.util.HashMap<String, org.openapis.openapi.models.shared.PreservedStatePreservedNetworkIp>() {{
                                    put("nulla", new PreservedStatePreservedNetworkIp() {{
                                        autoDelete = PreservedStatePreservedNetworkIpAutoDeleteEnum.NEVER;
                                        ipAddress = new PreservedStatePreservedNetworkIpIpAddress() {{
                                            address = "659 Ulices Landing";
                                            literal = "nemo";
                                        }};
                                    }});
                                    put("sapiente", new PreservedStatePreservedNetworkIp() {{
                                        autoDelete = PreservedStatePreservedNetworkIpAutoDeleteEnum.NEVER;
                                        ipAddress = new PreservedStatePreservedNetworkIpIpAddress() {{
                                            address = "129 Odessa Canyon";
                                            literal = "error";
                                        }};
                                    }});
                                    put("corporis", new PreservedStatePreservedNetworkIp() {{
                                        autoDelete = PreservedStatePreservedNetworkIpAutoDeleteEnum.ON_PERMANENT_INSTANCE_DELETION;
                                        ipAddress = new PreservedStatePreservedNetworkIpIpAddress() {{
                                            address = "8269 Rodger Knolls";
                                            literal = "soluta";
                                        }};
                                    }});
                                    put("voluptas", new PreservedStatePreservedNetworkIp() {{
                                        autoDelete = PreservedStatePreservedNetworkIpAutoDeleteEnum.NEVER;
                                        ipAddress = new PreservedStatePreservedNetworkIpIpAddress() {{
                                            address = "899 Shirley Causeway";
                                            literal = "eius";
                                        }};
                                    }});
                                }};
                                internalIPs = new java.util.HashMap<String, org.openapis.openapi.models.shared.PreservedStatePreservedNetworkIp>() {{
                                    put("pariatur", new PreservedStatePreservedNetworkIp() {{
                                        autoDelete = PreservedStatePreservedNetworkIpAutoDeleteEnum.ON_PERMANENT_INSTANCE_DELETION;
                                        ipAddress = new PreservedStatePreservedNetworkIpIpAddress() {{
                                            address = "7187 Schowalter View";
                                            literal = "doloribus";
                                        }};
                                    }});
                                }};
                                metadata = new java.util.HashMap<String, String>() {{
                                    put("iusto", "quo");
                                    put("non", "tempore");
                                    put("quae", "quis");
                                    put("commodi", "itaque");
                                }};
                            }};
                            status = PerInstanceConfigStatusEnum.NONE;
                        }}),
                    }};
                }};;
                accessToken = "odit";
                alt = AltEnum.MEDIA;
                callback = "corrupti";
                fields = "consequuntur";
                key = "voluptate";
                oauthToken = "ipsam";
                prettyPrint = false;
                quotaUser = "debitis";
                requestId = "repudiandae";
                uploadType = "officia";
                uploadProtocol = "esse";
                userIp = "laboriosam";
            }};            

            ComputeInstanceGroupManagersPatchPerInstanceConfigsResponse res = sdk.instanceGroupManagers.computeInstanceGroupManagersPatchPerInstanceConfigs(req, new ComputeInstanceGroupManagersPatchPerInstanceConfigsSecurity() {{
                option1 = new ComputeInstanceGroupManagersPatchPerInstanceConfigsSecurityOption1("laudantium", "quasi") {{
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

            ComputeInstanceGroupManagersRecreateInstancesRequest req = new ComputeInstanceGroupManagersRecreateInstancesRequest("nihil", "labore", "laboriosam") {{
                dollarXgafv = XgafvEnum.TWO;
                instanceGroupManagersRecreateInstancesRequest = new InstanceGroupManagersRecreateInstancesRequest() {{
                    instances = new String[]{{
                        add("nisi"),
                    }};
                }};;
                accessToken = "amet";
                alt = AltEnum.PROTO;
                callback = "ducimus";
                fields = "perspiciatis";
                key = "cupiditate";
                oauthToken = "facilis";
                prettyPrint = false;
                quotaUser = "iusto";
                requestId = "perspiciatis";
                uploadType = "nemo";
                uploadProtocol = "ex";
                userIp = "maxime";
            }};            

            ComputeInstanceGroupManagersRecreateInstancesResponse res = sdk.instanceGroupManagers.computeInstanceGroupManagersRecreateInstances(req, new ComputeInstanceGroupManagersRecreateInstancesSecurity() {{
                option1 = new ComputeInstanceGroupManagersRecreateInstancesSecurityOption1("quae", "quidem") {{
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

            ComputeInstanceGroupManagersResizeRequest req = new ComputeInstanceGroupManagersResizeRequest("voluptatem", "tenetur", 653744L, "voluptatem") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "soluta";
                alt = AltEnum.JSON;
                callback = "quae";
                fields = "culpa";
                key = "labore";
                oauthToken = "consequatur";
                prettyPrint = false;
                quotaUser = "voluptates";
                requestId = "reprehenderit";
                uploadType = "quo";
                uploadProtocol = "incidunt";
                userIp = "id";
            }};            

            ComputeInstanceGroupManagersResizeResponse res = sdk.instanceGroupManagers.computeInstanceGroupManagersResize(req, new ComputeInstanceGroupManagersResizeSecurity() {{
                option1 = new ComputeInstanceGroupManagersResizeSecurityOption1("accusamus", "aliquid") {{
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

            ComputeInstanceGroupManagersResizeAdvancedRequest req = new ComputeInstanceGroupManagersResizeAdvancedRequest("quaerat", "eaque", "nisi") {{
                dollarXgafv = XgafvEnum.ONE;
                instanceGroupManagersResizeAdvancedRequest = new InstanceGroupManagersResizeAdvancedRequest() {{
                    noCreationRetries = false;
                    targetSize = 159997;
                }};;
                accessToken = "iusto";
                alt = AltEnum.JSON;
                callback = "autem";
                fields = "nostrum";
                key = "esse";
                oauthToken = "nobis";
                prettyPrint = false;
                quotaUser = "voluptatem";
                requestId = "ab";
                uploadType = "culpa";
                uploadProtocol = "ipsa";
                userIp = "voluptate";
            }};            

            ComputeInstanceGroupManagersResizeAdvancedResponse res = sdk.instanceGroupManagers.computeInstanceGroupManagersResizeAdvanced(req, new ComputeInstanceGroupManagersResizeAdvancedSecurity() {{
                option1 = new ComputeInstanceGroupManagersResizeAdvancedSecurityOption1("placeat", "perferendis") {{
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

## computeInstanceGroupManagersResumeInstances

Flags the specified instances in the managed instance group to be resumed. This method increases the targetSize and decreases the targetSuspendedSize of the managed instance group by the number of instances that you resume. The resumeInstances operation is marked DONE if the resumeInstances request is successful. The underlying actions take additional time. You must separately verify the status of the RESUMING action with the listmanagedinstances method. In this request, you can only specify instances that are suspended. For example, if an instance was previously suspended using the suspendInstances method, it can be resumed using the resumeInstances method. If a health check is attached to the managed instance group, the specified instances will be verified as healthy after they are resumed. You can specify a maximum of 1000 instances with this method per request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeInstanceGroupManagersResumeInstancesRequest;
import org.openapis.openapi.models.operations.ComputeInstanceGroupManagersResumeInstancesResponse;
import org.openapis.openapi.models.operations.ComputeInstanceGroupManagersResumeInstancesSecurity;
import org.openapis.openapi.models.operations.ComputeInstanceGroupManagersResumeInstancesSecurityOption1;
import org.openapis.openapi.models.operations.ComputeInstanceGroupManagersResumeInstancesSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.InstanceGroupManagersResumeInstancesRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeInstanceGroupManagersResumeInstancesRequest req = new ComputeInstanceGroupManagersResumeInstancesRequest("rem", "earum", "nulla") {{
                dollarXgafv = XgafvEnum.ONE;
                instanceGroupManagersResumeInstancesRequest = new InstanceGroupManagersResumeInstancesRequest() {{
                    instances = new String[]{{
                        add("magni"),
                        add("inventore"),
                        add("eligendi"),
                    }};
                }};;
                accessToken = "dolores";
                alt = AltEnum.MEDIA;
                callback = "reprehenderit";
                fields = "iste";
                key = "ratione";
                oauthToken = "consequatur";
                prettyPrint = false;
                quotaUser = "pariatur";
                requestId = "eum";
                uploadType = "maiores";
                uploadProtocol = "sit";
                userIp = "natus";
            }};            

            ComputeInstanceGroupManagersResumeInstancesResponse res = sdk.instanceGroupManagers.computeInstanceGroupManagersResumeInstances(req, new ComputeInstanceGroupManagersResumeInstancesSecurity() {{
                option1 = new ComputeInstanceGroupManagersResumeInstancesSecurityOption1("dolorem", "mollitia") {{
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
import org.openapis.openapi.models.shared.FixedOrPercent;
import org.openapis.openapi.models.shared.InstanceGroupManagerAutoHealingPolicy;
import org.openapis.openapi.models.shared.InstanceGroupManagerAutoHealingPolicyAutoHealingTriggers;
import org.openapis.openapi.models.shared.InstanceGroupManagerAutoHealingPolicyAutoHealingTriggersOnHealthCheckEnum;
import org.openapis.openapi.models.shared.InstanceGroupManagersSetAutoHealingRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeInstanceGroupManagersSetAutoHealingPoliciesRequest req = new ComputeInstanceGroupManagersSetAutoHealingPoliciesRequest("sequi", "officiis", "reiciendis") {{
                dollarXgafv = XgafvEnum.TWO;
                instanceGroupManagersSetAutoHealingRequest = new InstanceGroupManagersSetAutoHealingRequest() {{
                    autoHealingPolicies = new org.openapis.openapi.models.shared.InstanceGroupManagerAutoHealingPolicy[]{{
                        add(new InstanceGroupManagerAutoHealingPolicy() {{
                            autoHealingTriggers = new InstanceGroupManagerAutoHealingPolicyAutoHealingTriggers() {{
                                onHealthCheck = InstanceGroupManagerAutoHealingPolicyAutoHealingTriggersOnHealthCheckEnum.OFF;
                            }};
                            healthCheck = "temporibus";
                            initialDelaySec = 239836;
                            maxUnavailable = new FixedOrPercent() {{
                                calculated = 420757;
                                fixed = 409341;
                                percent = 862130;
                            }};
                        }}),
                        add(new InstanceGroupManagerAutoHealingPolicy() {{
                            autoHealingTriggers = new InstanceGroupManagerAutoHealingPolicyAutoHealingTriggers() {{
                                onHealthCheck = InstanceGroupManagerAutoHealingPolicyAutoHealingTriggersOnHealthCheckEnum.ON;
                            }};
                            healthCheck = "id";
                            initialDelaySec = 80268;
                            maxUnavailable = new FixedOrPercent() {{
                                calculated = 7092;
                                fixed = 102939;
                                percent = 111600;
                            }};
                        }}),
                    }};
                }};;
                accessToken = "id";
                alt = AltEnum.JSON;
                callback = "unde";
                fields = "et";
                key = "cum";
                oauthToken = "dolor";
                prettyPrint = false;
                quotaUser = "necessitatibus";
                requestId = "porro";
                uploadType = "laudantium";
                uploadProtocol = "tempore";
                userIp = "exercitationem";
            }};            

            ComputeInstanceGroupManagersSetAutoHealingPoliciesResponse res = sdk.instanceGroupManagers.computeInstanceGroupManagersSetAutoHealingPolicies(req, new ComputeInstanceGroupManagersSetAutoHealingPoliciesSecurity() {{
                option1 = new ComputeInstanceGroupManagersSetAutoHealingPoliciesSecurityOption1("velit", "totam") {{
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

            ComputeInstanceGroupManagersSetInstanceTemplateRequest req = new ComputeInstanceGroupManagersSetInstanceTemplateRequest("nisi", "dolores", "nulla") {{
                dollarXgafv = XgafvEnum.TWO;
                instanceGroupManagersSetInstanceTemplateRequest = new InstanceGroupManagersSetInstanceTemplateRequest() {{
                    instanceTemplate = "illo";
                }};;
                accessToken = "fuga";
                alt = AltEnum.MEDIA;
                callback = "at";
                fields = "vitae";
                key = "aliquam";
                oauthToken = "asperiores";
                prettyPrint = false;
                quotaUser = "debitis";
                requestId = "reprehenderit";
                uploadType = "sed";
                uploadProtocol = "voluptates";
                userIp = "ipsam";
            }};            

            ComputeInstanceGroupManagersSetInstanceTemplateResponse res = sdk.instanceGroupManagers.computeInstanceGroupManagersSetInstanceTemplate(req, new ComputeInstanceGroupManagersSetInstanceTemplateSecurity() {{
                option1 = new ComputeInstanceGroupManagersSetInstanceTemplateSecurityOption1("sed", "illo") {{
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

            ComputeInstanceGroupManagersSetTargetPoolsRequest req = new ComputeInstanceGroupManagersSetTargetPoolsRequest("asperiores", "iste", "ipsa") {{
                dollarXgafv = XgafvEnum.ONE;
                instanceGroupManagersSetTargetPoolsRequest = new InstanceGroupManagersSetTargetPoolsRequest() {{
                    fingerprint = "ipsa";
                    targetPools = new String[]{{
                        add("possimus"),
                    }};
                }};;
                accessToken = "asperiores";
                alt = AltEnum.PROTO;
                callback = "adipisci";
                fields = "non";
                key = "laudantium";
                oauthToken = "velit";
                prettyPrint = false;
                quotaUser = "natus";
                requestId = "molestiae";
                uploadType = "reiciendis";
                uploadProtocol = "hic";
                userIp = "hic";
            }};            

            ComputeInstanceGroupManagersSetTargetPoolsResponse res = sdk.instanceGroupManagers.computeInstanceGroupManagersSetTargetPools(req, new ComputeInstanceGroupManagersSetTargetPoolsSecurity() {{
                option1 = new ComputeInstanceGroupManagersSetTargetPoolsSecurityOption1("error", "ea") {{
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

## computeInstanceGroupManagersStartInstances

Flags the specified instances in the managed instance group to be started. This method increases the targetSize and decreases the targetStoppedSize of the managed instance group by the number of instances that you start. The startInstances operation is marked DONE if the startInstances request is successful. The underlying actions take additional time. You must separately verify the status of the STARTING action with the listmanagedinstances method. In this request, you can only specify instances that are stopped. For example, if an instance was previously stopped using the stopInstances method, it can be started using the startInstances method. If a health check is attached to the managed instance group, the specified instances will be verified as healthy after they are started. You can specify a maximum of 1000 instances with this method per request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeInstanceGroupManagersStartInstancesRequest;
import org.openapis.openapi.models.operations.ComputeInstanceGroupManagersStartInstancesResponse;
import org.openapis.openapi.models.operations.ComputeInstanceGroupManagersStartInstancesSecurity;
import org.openapis.openapi.models.operations.ComputeInstanceGroupManagersStartInstancesSecurityOption1;
import org.openapis.openapi.models.operations.ComputeInstanceGroupManagersStartInstancesSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.InstanceGroupManagersStartInstancesRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeInstanceGroupManagersStartInstancesRequest req = new ComputeInstanceGroupManagersStartInstancesRequest("repellendus", "vitae", "pariatur") {{
                dollarXgafv = XgafvEnum.ONE;
                instanceGroupManagersStartInstancesRequest = new InstanceGroupManagersStartInstancesRequest() {{
                    instances = new String[]{{
                        add("consequatur"),
                    }};
                }};;
                accessToken = "occaecati";
                alt = AltEnum.JSON;
                callback = "doloribus";
                fields = "quo";
                key = "quasi";
                oauthToken = "ullam";
                prettyPrint = false;
                quotaUser = "reprehenderit";
                requestId = "mollitia";
                uploadType = "cumque";
                uploadProtocol = "molestias";
                userIp = "asperiores";
            }};            

            ComputeInstanceGroupManagersStartInstancesResponse res = sdk.instanceGroupManagers.computeInstanceGroupManagersStartInstances(req, new ComputeInstanceGroupManagersStartInstancesSecurity() {{
                option1 = new ComputeInstanceGroupManagersStartInstancesSecurityOption1("accusamus", "dicta") {{
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

## computeInstanceGroupManagersStopInstances

Flags the specified instances in the managed instance group to be immediately stopped. You can only specify instances that are running in this request. This method reduces the targetSize and increases the targetStoppedSize of the managed instance group by the number of instances that you stop. The stopInstances operation is marked DONE if the stopInstances request is successful. The underlying actions take additional time. You must separately verify the status of the STOPPING action with the listmanagedinstances method. If the standbyPolicy.initialDelaySec field is set, the group delays stopping the instances until initialDelaySec have passed from instance.creationTimestamp (that is, when the instance was created). This delay gives your application time to set itself up and initialize on the instance. If more than initialDelaySec seconds have passed since instance.creationTimestamp when this method is called, there will be zero delay. If the group is part of a backend service that has enabled connection draining, it can take up to 60 seconds after the connection draining duration has elapsed before the VM instance is stopped. Stopped instances can be started using the startInstances method. You can specify a maximum of 1000 instances with this method per request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeInstanceGroupManagersStopInstancesRequest;
import org.openapis.openapi.models.operations.ComputeInstanceGroupManagersStopInstancesResponse;
import org.openapis.openapi.models.operations.ComputeInstanceGroupManagersStopInstancesSecurity;
import org.openapis.openapi.models.operations.ComputeInstanceGroupManagersStopInstancesSecurityOption1;
import org.openapis.openapi.models.operations.ComputeInstanceGroupManagersStopInstancesSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.InstanceGroupManagersStopInstancesRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeInstanceGroupManagersStopInstancesRequest req = new ComputeInstanceGroupManagersStopInstancesRequest("sint", "ex", "vitae") {{
                dollarXgafv = XgafvEnum.TWO;
                instanceGroupManagersStopInstancesRequest = new InstanceGroupManagersStopInstancesRequest() {{
                    forceStop = false;
                    instances = new String[]{{
                        add("perspiciatis"),
                        add("nam"),
                        add("vero"),
                        add("aliquam"),
                    }};
                }};;
                accessToken = "architecto";
                alt = AltEnum.PROTO;
                callback = "atque";
                fields = "nisi";
                key = "omnis";
                oauthToken = "nulla";
                prettyPrint = false;
                quotaUser = "facere";
                requestId = "ducimus";
                uploadType = "quibusdam";
                uploadProtocol = "omnis";
                userIp = "molestiae";
            }};            

            ComputeInstanceGroupManagersStopInstancesResponse res = sdk.instanceGroupManagers.computeInstanceGroupManagersStopInstances(req, new ComputeInstanceGroupManagersStopInstancesSecurity() {{
                option1 = new ComputeInstanceGroupManagersStopInstancesSecurityOption1("illo", "unde") {{
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

## computeInstanceGroupManagersSuspendInstances

Flags the specified instances in the managed instance group to be immediately suspended. You can only specify instances that are running in this request. This method reduces the targetSize and increases the targetSuspendedSize of the managed instance group by the number of instances that you suspend. The suspendInstances operation is marked DONE if the suspendInstances request is successful. The underlying actions take additional time. You must separately verify the status of the SUSPENDING action with the listmanagedinstances method. If the standbyPolicy.initialDelaySec field is set, the group delays suspension of the instances until initialDelaySec have passed from instance.creationTimestamp (that is, when the instance was created). This delay gives your application time to set itself up and initialize on the instance. If more than initialDelaySec seconds have passed since instance.creationTimestamp when this method is called, there will be zero delay. If the group is part of a backend service that has enabled connection draining, it can take up to 60 seconds after the connection draining duration has elapsed before the VM instance is suspended. Suspended instances can be resumed using the resumeInstances method. You can specify a maximum of 1000 instances with this method per request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeInstanceGroupManagersSuspendInstancesRequest;
import org.openapis.openapi.models.operations.ComputeInstanceGroupManagersSuspendInstancesResponse;
import org.openapis.openapi.models.operations.ComputeInstanceGroupManagersSuspendInstancesSecurity;
import org.openapis.openapi.models.operations.ComputeInstanceGroupManagersSuspendInstancesSecurityOption1;
import org.openapis.openapi.models.operations.ComputeInstanceGroupManagersSuspendInstancesSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.InstanceGroupManagersSuspendInstancesRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeInstanceGroupManagersSuspendInstancesRequest req = new ComputeInstanceGroupManagersSuspendInstancesRequest("repellendus", "consequatur", "dignissimos") {{
                dollarXgafv = XgafvEnum.TWO;
                instanceGroupManagersSuspendInstancesRequest = new InstanceGroupManagersSuspendInstancesRequest() {{
                    forceSuspend = false;
                    instances = new String[]{{
                        add("aut"),
                    }};
                }};;
                accessToken = "eaque";
                alt = AltEnum.MEDIA;
                callback = "corporis";
                fields = "praesentium";
                key = "delectus";
                oauthToken = "a";
                prettyPrint = false;
                quotaUser = "temporibus";
                requestId = "consequuntur";
                uploadType = "iste";
                uploadProtocol = "suscipit";
                userIp = "iusto";
            }};            

            ComputeInstanceGroupManagersSuspendInstancesResponse res = sdk.instanceGroupManagers.computeInstanceGroupManagersSuspendInstances(req, new ComputeInstanceGroupManagersSuspendInstancesSecurity() {{
                option1 = new ComputeInstanceGroupManagersSuspendInstancesSecurityOption1("nulla", "delectus") {{
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

            ComputeInstanceGroupManagersTestIamPermissionsRequest req = new ComputeInstanceGroupManagersTestIamPermissionsRequest("laudantium", "sapiente", "facere") {{
                dollarXgafv = XgafvEnum.TWO;
                testPermissionsRequest = new TestPermissionsRequest() {{
                    permissions = new String[]{{
                        add("sed"),
                        add("fuga"),
                        add("deleniti"),
                    }};
                }};;
                accessToken = "accusamus";
                alt = AltEnum.MEDIA;
                callback = "eaque";
                fields = "tempore";
                key = "accusamus";
                oauthToken = "commodi";
                prettyPrint = false;
                quotaUser = "eos";
                uploadType = "perferendis";
                uploadProtocol = "eligendi";
                userIp = "facere";
            }};            

            ComputeInstanceGroupManagersTestIamPermissionsResponse res = sdk.instanceGroupManagers.computeInstanceGroupManagersTestIamPermissions(req, new ComputeInstanceGroupManagersTestIamPermissionsSecurity() {{
                option1 = new ComputeInstanceGroupManagersTestIamPermissionsSecurityOption1("molestias", "quisquam") {{
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
import org.openapis.openapi.models.shared.InstanceGroupManagerAutoHealingPolicyAutoHealingTriggers;
import org.openapis.openapi.models.shared.InstanceGroupManagerAutoHealingPolicyAutoHealingTriggersOnHealthCheckEnum;
import org.openapis.openapi.models.shared.InstanceGroupManagerFailoverActionEnum;
import org.openapis.openapi.models.shared.InstanceGroupManagerInstanceFlexibilityPolicy;
import org.openapis.openapi.models.shared.InstanceGroupManagerInstanceFlexibilityPolicyInstanceSelection;
import org.openapis.openapi.models.shared.InstanceGroupManagerInstanceLifecyclePolicy;
import org.openapis.openapi.models.shared.InstanceGroupManagerInstanceLifecyclePolicyDefaultActionOnFailureEnum;
import org.openapis.openapi.models.shared.InstanceGroupManagerInstanceLifecyclePolicyForceUpdateOnRepairEnum;
import org.openapis.openapi.models.shared.InstanceGroupManagerInstanceLifecyclePolicyMetadataBasedReadinessSignal;
import org.openapis.openapi.models.shared.InstanceGroupManagerListManagedInstancesResultsEnum;
import org.openapis.openapi.models.shared.InstanceGroupManagerStandbyPolicy;
import org.openapis.openapi.models.shared.InstanceGroupManagerStatus;
import org.openapis.openapi.models.shared.InstanceGroupManagerStatusAllInstancesConfig;
import org.openapis.openapi.models.shared.InstanceGroupManagerStatusStateful;
import org.openapis.openapi.models.shared.InstanceGroupManagerStatusStatefulPerInstanceConfigs;
import org.openapis.openapi.models.shared.InstanceGroupManagerStatusVersionTarget;
import org.openapis.openapi.models.shared.InstanceGroupManagerTargetSizeUnitEnum;
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

            ComputeInstanceGroupManagersUpdateRequest req = new ComputeInstanceGroupManagersUpdateRequest("veniam", "officia", "sapiente") {{
                dollarXgafv = XgafvEnum.TWO;
                instanceGroupManager1 = new InstanceGroupManager() {{
                    allInstancesConfig = new InstanceGroupManagerAllInstancesConfig() {{
                        properties = new InstancePropertiesPatch() {{
                            labels = new java.util.HashMap<String, String>() {{
                                put("doloremque", "ut");
                                put("eligendi", "nesciunt");
                                put("voluptate", "corporis");
                                put("aspernatur", "veniam");
                            }};
                            metadata = new java.util.HashMap<String, String>() {{
                                put("consequuntur", "harum");
                            }};
                        }};;
                    }};;
                    autoHealingPolicies = new org.openapis.openapi.models.shared.InstanceGroupManagerAutoHealingPolicy[]{{
                        add(new InstanceGroupManagerAutoHealingPolicy() {{
                            autoHealingTriggers = new InstanceGroupManagerAutoHealingPolicyAutoHealingTriggers() {{
                                onHealthCheck = InstanceGroupManagerAutoHealingPolicyAutoHealingTriggersOnHealthCheckEnum.ON;
                            }};
                            healthCheck = "officiis";
                            initialDelaySec = 97192;
                            maxUnavailable = new FixedOrPercent() {{
                                calculated = 874845;
                                fixed = 543144;
                                percent = 455711;
                            }};
                        }}),
                        add(new InstanceGroupManagerAutoHealingPolicy() {{
                            autoHealingTriggers = new InstanceGroupManagerAutoHealingPolicyAutoHealingTriggers() {{
                                onHealthCheck = InstanceGroupManagerAutoHealingPolicyAutoHealingTriggersOnHealthCheckEnum.ON;
                            }};
                            healthCheck = "quisquam";
                            initialDelaySec = 795800;
                            maxUnavailable = new FixedOrPercent() {{
                                calculated = 360358;
                                fixed = 962744;
                                percent = 860599;
                            }};
                        }}),
                        add(new InstanceGroupManagerAutoHealingPolicy() {{
                            autoHealingTriggers = new InstanceGroupManagerAutoHealingPolicyAutoHealingTriggers() {{
                                onHealthCheck = InstanceGroupManagerAutoHealingPolicyAutoHealingTriggersOnHealthCheckEnum.ON;
                            }};
                            healthCheck = "saepe";
                            initialDelaySec = 655102;
                            maxUnavailable = new FixedOrPercent() {{
                                calculated = 538300;
                                fixed = 911761;
                                percent = 476192;
                            }};
                        }}),
                        add(new InstanceGroupManagerAutoHealingPolicy() {{
                            autoHealingTriggers = new InstanceGroupManagerAutoHealingPolicyAutoHealingTriggers() {{
                                onHealthCheck = InstanceGroupManagerAutoHealingPolicyAutoHealingTriggersOnHealthCheckEnum.ON;
                            }};
                            healthCheck = "voluptatum";
                            initialDelaySec = 500248;
                            maxUnavailable = new FixedOrPercent() {{
                                calculated = 238122;
                                fixed = 92166;
                                percent = 91858;
                            }};
                        }}),
                    }};
                    baseInstanceName = "commodi";
                    creationTimestamp = "laboriosam";
                    currentActions = new InstanceGroupManagerActionsSummary() {{
                        abandoning = 187267;
                        creating = 784075;
                        creatingAtomically = 872691;
                        creatingWithoutRetries = 681752;
                        deleting = 428284;
                        none = 840873;
                        queuing = 480421;
                        recreating = 451468;
                        refreshing = 763768;
                        restarting = 124272;
                        resuming = 856105;
                        starting = 522625;
                        stopping = 387848;
                        suspending = 39490;
                        verifying = 392009;
                    }};;
                    description = "eum";
                    distributionPolicy = new DistributionPolicy() {{
                        targetShape = DistributionPolicyTargetShapeEnum.ANY;
                        zones = new org.openapis.openapi.models.shared.DistributionPolicyZoneConfiguration[]{{
                            add(new DistributionPolicyZoneConfiguration() {{
                                zone = "esse";
                            }}),
                        }};
                    }};;
                    failoverAction = InstanceGroupManagerFailoverActionEnum.UNKNOWN;
                    fingerprint = "tempora";
                    id = "explicabo";
                    instanceFlexibilityPolicy = new InstanceGroupManagerInstanceFlexibilityPolicy() {{
                        instanceSelectionLists = new java.util.HashMap<String, org.openapis.openapi.models.shared.InstanceGroupManagerInstanceFlexibilityPolicyInstanceSelection>() {{
                            put("molestiae", new InstanceGroupManagerInstanceFlexibilityPolicyInstanceSelection() {{
                                machineTypes = new String[]{{
                                    add("laboriosam"),
                                    add("aliquid"),
                                    add("quibusdam"),
                                }};
                                rank = 695616;
                            }});
                        }};
                    }};;
                    instanceGroup = "molestias";
                    instanceLifecyclePolicy = new InstanceGroupManagerInstanceLifecyclePolicy() {{
                        defaultActionOnFailure = InstanceGroupManagerInstanceLifecyclePolicyDefaultActionOnFailureEnum.REPAIR;
                        forceUpdateOnRepair = InstanceGroupManagerInstanceLifecyclePolicyForceUpdateOnRepairEnum.NO;
                        metadataBasedReadinessSignal = new InstanceGroupManagerInstanceLifecyclePolicyMetadataBasedReadinessSignal() {{
                            timeoutSec = 287246;
                        }};;
                    }};;
                    instanceTemplate = "perspiciatis";
                    kind = "officiis";
                    listManagedInstancesResults = InstanceGroupManagerListManagedInstancesResultsEnum.PAGELESS;
                    name = "Everett Gottlieb Sr.";
                    namedPorts = new org.openapis.openapi.models.shared.NamedPort[]{{
                        add(new NamedPort() {{
                            name = "Arnold Hessel";
                            port = 991181;
                        }}),
                        add(new NamedPort() {{
                            name = "Mrs. Lynne Bashirian";
                            port = 329530;
                        }}),
                        add(new NamedPort() {{
                            name = "Jean Krajcik";
                            port = 796525;
                        }}),
                        add(new NamedPort() {{
                            name = "Terrance Goodwin";
                            port = 157397;
                        }}),
                    }};
                    region = "delectus";
                    selfLink = "alias";
                    selfLinkWithId = "consequatur";
                    serviceAccount = "suscipit";
                    standbyPolicy = new InstanceGroupManagerStandbyPolicy() {{
                        initialDelaySec = 577102;
                    }};;
                    statefulPolicy = new StatefulPolicy() {{
                        preservedState = new StatefulPolicyPreservedState() {{
                            disks = new java.util.HashMap<String, org.openapis.openapi.models.shared.StatefulPolicyPreservedStateDiskDevice>() {{
                                put("rem", new StatefulPolicyPreservedStateDiskDevice() {{
                                    autoDelete = StatefulPolicyPreservedStateDiskDeviceAutoDeleteEnum.NEVER;
                                }});
                                put("a", new StatefulPolicyPreservedStateDiskDevice() {{
                                    autoDelete = StatefulPolicyPreservedStateDiskDeviceAutoDeleteEnum.ON_PERMANENT_INSTANCE_DELETION;
                                }});
                            }};
                            externalIPs = new java.util.HashMap<String, org.openapis.openapi.models.shared.StatefulPolicyPreservedStateNetworkIp>() {{
                                put("quasi", new StatefulPolicyPreservedStateNetworkIp() {{
                                    autoDelete = StatefulPolicyPreservedStateNetworkIpAutoDeleteEnum.ON_PERMANENT_INSTANCE_DELETION;
                                }});
                                put("vitae", new StatefulPolicyPreservedStateNetworkIp() {{
                                    autoDelete = StatefulPolicyPreservedStateNetworkIpAutoDeleteEnum.NEVER;
                                }});
                                put("consectetur", new StatefulPolicyPreservedStateNetworkIp() {{
                                    autoDelete = StatefulPolicyPreservedStateNetworkIpAutoDeleteEnum.ON_PERMANENT_INSTANCE_DELETION;
                                }});
                                put("laudantium", new StatefulPolicyPreservedStateNetworkIp() {{
                                    autoDelete = StatefulPolicyPreservedStateNetworkIpAutoDeleteEnum.NEVER;
                                }});
                            }};
                            internalIPs = new java.util.HashMap<String, org.openapis.openapi.models.shared.StatefulPolicyPreservedStateNetworkIp>() {{
                                put("cum", new StatefulPolicyPreservedStateNetworkIp() {{
                                    autoDelete = StatefulPolicyPreservedStateNetworkIpAutoDeleteEnum.ON_PERMANENT_INSTANCE_DELETION;
                                }});
                                put("odit", new StatefulPolicyPreservedStateNetworkIp() {{
                                    autoDelete = StatefulPolicyPreservedStateNetworkIpAutoDeleteEnum.NEVER;
                                }});
                                put("tenetur", new StatefulPolicyPreservedStateNetworkIp() {{
                                    autoDelete = StatefulPolicyPreservedStateNetworkIpAutoDeleteEnum.NEVER;
                                }});
                            }};
                        }};;
                    }};;
                    status = new InstanceGroupManagerStatus() {{
                        allInstancesConfig = new InstanceGroupManagerStatusAllInstancesConfig() {{
                            currentRevision = "error";
                            effective = false;
                        }};;
                        autoscaler = "praesentium";
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
                        add("magnam"),
                    }};
                    targetSize = 648495;
                    targetSizeUnit = InstanceGroupManagerTargetSizeUnitEnum.VM;
                    targetStoppedSize = 689133;
                    targetSuspendedSize = 39842;
                    updatePolicy = new InstanceGroupManagerUpdatePolicy() {{
                        instanceRedistributionType = InstanceGroupManagerUpdatePolicyInstanceRedistributionTypeEnum.NONE;
                        maxSurge = new FixedOrPercent() {{
                            calculated = 190895;
                            fixed = 362598;
                            percent = 753559;
                        }};;
                        maxUnavailable = new FixedOrPercent() {{
                            calculated = 710453;
                            fixed = 386377;
                            percent = 169991;
                        }};;
                        minReadySec = 562238;
                        minimalAction = InstanceGroupManagerUpdatePolicyMinimalActionEnum.REFRESH;
                        mostDisruptiveAllowedAction = InstanceGroupManagerUpdatePolicyMostDisruptiveAllowedActionEnum.RESTART;
                        replacementMethod = InstanceGroupManagerUpdatePolicyReplacementMethodEnum.RECREATE;
                        type = InstanceGroupManagerUpdatePolicyTypeEnum.PROACTIVE;
                    }};;
                    versions = new org.openapis.openapi.models.shared.InstanceGroupManagerVersion[]{{
                        add(new InstanceGroupManagerVersion() {{
                            instanceTemplate = "unde";
                            name = "Dr. Wilbur Orn III";
                            tag = "omnis";
                            targetSize = new FixedOrPercent() {{
                                calculated = 86605;
                                fixed = 367844;
                                percent = 391409;
                            }};
                        }}),
                    }};
                    zone = "repellat";
                }};;
                accessToken = "voluptate";
                alt = AltEnum.PROTO;
                callback = "aspernatur";
                fields = "recusandae";
                key = "repudiandae";
                oauthToken = "eos";
                prettyPrint = false;
                quotaUser = "perferendis";
                requestId = "error";
                uploadType = "ullam";
                uploadProtocol = "voluptatem";
                userIp = "corporis";
            }};            

            ComputeInstanceGroupManagersUpdateResponse res = sdk.instanceGroupManagers.computeInstanceGroupManagersUpdate(req, new ComputeInstanceGroupManagersUpdateSecurity() {{
                option1 = new ComputeInstanceGroupManagersUpdateSecurityOption1("tempore", "maiores") {{
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

            ComputeInstanceGroupManagersUpdatePerInstanceConfigsRequest req = new ComputeInstanceGroupManagersUpdatePerInstanceConfigsRequest("doloremque", "consectetur", "laborum") {{
                dollarXgafv = XgafvEnum.TWO;
                instanceGroupManagersUpdatePerInstanceConfigsReq = new InstanceGroupManagersUpdatePerInstanceConfigsReq() {{
                    perInstanceConfigs = new org.openapis.openapi.models.shared.PerInstanceConfig[]{{
                        add(new PerInstanceConfig() {{
                            fingerprint = "repudiandae";
                            name = "Barry Gorczany DDS";
                            preservedState = new PreservedState() {{
                                disks = new java.util.HashMap<String, org.openapis.openapi.models.shared.PreservedStatePreservedDisk>() {{
                                    put("ratione", new PreservedStatePreservedDisk() {{
                                        autoDelete = PreservedStatePreservedDiskAutoDeleteEnum.NEVER;
                                        mode = PreservedStatePreservedDiskModeEnum.READ_WRITE;
                                        source = "nam";
                                    }});
                                    put("ab", new PreservedStatePreservedDisk() {{
                                        autoDelete = PreservedStatePreservedDiskAutoDeleteEnum.NEVER;
                                        mode = PreservedStatePreservedDiskModeEnum.READ_ONLY;
                                        source = "voluptatum";
                                    }});
                                    put("natus", new PreservedStatePreservedDisk() {{
                                        autoDelete = PreservedStatePreservedDiskAutoDeleteEnum.NEVER;
                                        mode = PreservedStatePreservedDiskModeEnum.READ_ONLY;
                                        source = "fugit";
                                    }});
                                }};
                                externalIPs = new java.util.HashMap<String, org.openapis.openapi.models.shared.PreservedStatePreservedNetworkIp>() {{
                                    put("porro", new PreservedStatePreservedNetworkIp() {{
                                        autoDelete = PreservedStatePreservedNetworkIpAutoDeleteEnum.NEVER;
                                        ipAddress = new PreservedStatePreservedNetworkIpIpAddress() {{
                                            address = "10419 Reynold Street";
                                            literal = "nihil";
                                        }};
                                    }});
                                    put("provident", new PreservedStatePreservedNetworkIp() {{
                                        autoDelete = PreservedStatePreservedNetworkIpAutoDeleteEnum.ON_PERMANENT_INSTANCE_DELETION;
                                        ipAddress = new PreservedStatePreservedNetworkIpIpAddress() {{
                                            address = "427 Kuhlman Underpass";
                                            literal = "corrupti";
                                        }};
                                    }});
                                    put("deleniti", new PreservedStatePreservedNetworkIp() {{
                                        autoDelete = PreservedStatePreservedNetworkIpAutoDeleteEnum.ON_PERMANENT_INSTANCE_DELETION;
                                        ipAddress = new PreservedStatePreservedNetworkIpIpAddress() {{
                                            address = "724 Schuppe Circle";
                                            literal = "eligendi";
                                        }};
                                    }});
                                }};
                                internalIPs = new java.util.HashMap<String, org.openapis.openapi.models.shared.PreservedStatePreservedNetworkIp>() {{
                                    put("maxime", new PreservedStatePreservedNetworkIp() {{
                                        autoDelete = PreservedStatePreservedNetworkIpAutoDeleteEnum.NEVER;
                                        ipAddress = new PreservedStatePreservedNetworkIpIpAddress() {{
                                            address = "17543 Dameon Fort";
                                            literal = "iure";
                                        }};
                                    }});
                                    put("eius", new PreservedStatePreservedNetworkIp() {{
                                        autoDelete = PreservedStatePreservedNetworkIpAutoDeleteEnum.ON_PERMANENT_INSTANCE_DELETION;
                                        ipAddress = new PreservedStatePreservedNetworkIpIpAddress() {{
                                            address = "64209 Goyette Pines";
                                            literal = "distinctio";
                                        }};
                                    }});
                                    put("magnam", new PreservedStatePreservedNetworkIp() {{
                                        autoDelete = PreservedStatePreservedNetworkIpAutoDeleteEnum.NEVER;
                                        ipAddress = new PreservedStatePreservedNetworkIpIpAddress() {{
                                            address = "72605 Koelpin Isle";
                                            literal = "velit";
                                        }};
                                    }});
                                    put("perspiciatis", new PreservedStatePreservedNetworkIp() {{
                                        autoDelete = PreservedStatePreservedNetworkIpAutoDeleteEnum.ON_PERMANENT_INSTANCE_DELETION;
                                        ipAddress = new PreservedStatePreservedNetworkIpIpAddress() {{
                                            address = "85057 Thompson Loaf";
                                            literal = "natus";
                                        }};
                                    }});
                                }};
                                metadata = new java.util.HashMap<String, String>() {{
                                    put("eius", "minima");
                                    put("exercitationem", "recusandae");
                                }};
                            }};
                            status = PerInstanceConfigStatusEnum.UNAPPLIED;
                        }}),
                    }};
                }};;
                accessToken = "quo";
                alt = AltEnum.MEDIA;
                callback = "minima";
                fields = "consequatur";
                key = "est";
                oauthToken = "beatae";
                prettyPrint = false;
                quotaUser = "impedit";
                requestId = "ut";
                uploadType = "qui";
                uploadProtocol = "nisi";
                userIp = "rerum";
            }};            

            ComputeInstanceGroupManagersUpdatePerInstanceConfigsResponse res = sdk.instanceGroupManagers.computeInstanceGroupManagersUpdatePerInstanceConfigs(req, new ComputeInstanceGroupManagersUpdatePerInstanceConfigsSecurity() {{
                option1 = new ComputeInstanceGroupManagersUpdatePerInstanceConfigsSecurityOption1("nemo", "cupiditate") {{
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
