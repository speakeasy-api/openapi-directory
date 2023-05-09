# regionInstanceGroupManagers

### Available Operations

* [computeRegionInstanceGroupManagersAbandonInstances](#computeregioninstancegroupmanagersabandoninstances) - Flags the specified instances to be immediately removed from the managed instance group. Abandoning an instance does not delete the instance, but it does remove the instance from any target pools that are applied by the managed instance group. This method reduces the targetSize of the managed instance group by the number of instances that you abandon. This operation is marked as DONE when the action is scheduled even if the instances have not yet been removed from the group. You must separately verify the status of the abandoning action with the listmanagedinstances method. If the group is part of a backend service that has enabled connection draining, it can take up to 60 seconds after the connection draining duration has elapsed before the VM instance is removed or deleted. You can specify a maximum of 1000 instances with this method per request.
* [computeRegionInstanceGroupManagersApplyUpdatesToInstances](#computeregioninstancegroupmanagersapplyupdatestoinstances) - Apply updates to selected instances the managed instance group.
* [computeRegionInstanceGroupManagersCreateInstances](#computeregioninstancegroupmanagerscreateinstances) - Creates instances with per-instance configurations in this regional managed instance group. Instances are created using the current instance template. The create instances operation is marked DONE if the createInstances request is successful. The underlying actions take additional time. You must separately verify the status of the creating or actions with the listmanagedinstances method.
* [computeRegionInstanceGroupManagersDelete](#computeregioninstancegroupmanagersdelete) - Deletes the specified managed instance group and all of the instances in that group.
* [computeRegionInstanceGroupManagersDeleteInstances](#computeregioninstancegroupmanagersdeleteinstances) - Flags the specified instances in the managed instance group to be immediately deleted. The instances are also removed from any target pools of which they were a member. This method reduces the targetSize of the managed instance group by the number of instances that you delete. The deleteInstances operation is marked DONE if the deleteInstances request is successful. The underlying actions take additional time. You must separately verify the status of the deleting action with the listmanagedinstances method. If the group is part of a backend service that has enabled connection draining, it can take up to 60 seconds after the connection draining duration has elapsed before the VM instance is removed or deleted. You can specify a maximum of 1000 instances with this method per request.
* [computeRegionInstanceGroupManagersDeletePerInstanceConfigs](#computeregioninstancegroupmanagersdeleteperinstanceconfigs) - Deletes selected per-instance configurations for the managed instance group.
* [computeRegionInstanceGroupManagersGet](#computeregioninstancegroupmanagersget) - Returns all of the details about the specified managed instance group.
* [computeRegionInstanceGroupManagersInsert](#computeregioninstancegroupmanagersinsert) - Creates a managed instance group using the information that you specify in the request. After the group is created, instances in the group are created using the specified instance template. This operation is marked as DONE when the group is created even if the instances in the group have not yet been created. You must separately verify the status of the individual instances with the listmanagedinstances method. A regional managed instance group can contain up to 2000 instances.
* [computeRegionInstanceGroupManagersList](#computeregioninstancegroupmanagerslist) - Retrieves the list of managed instance groups that are contained within the specified region.
* [computeRegionInstanceGroupManagersListErrors](#computeregioninstancegroupmanagerslisterrors) - Lists all errors thrown by actions on instances for a given regional managed instance group. The filter and orderBy query parameters are not supported.
* [computeRegionInstanceGroupManagersListManagedInstances](#computeregioninstancegroupmanagerslistmanagedinstances) - Lists the instances in the managed instance group and instances that are scheduled to be created. The list includes any current actions that the group has scheduled for its instances. The orderBy query parameter is not supported. The `pageToken` query parameter is supported only in the alpha and beta API and only if the group's `listManagedInstancesResults` field is set to `PAGINATED`.
* [computeRegionInstanceGroupManagersListPerInstanceConfigs](#computeregioninstancegroupmanagerslistperinstanceconfigs) - Lists all of the per-instance configurations defined for the managed instance group. The orderBy query parameter is not supported.
* [computeRegionInstanceGroupManagersPatch](#computeregioninstancegroupmanagerspatch) - Updates a managed instance group using the information that you specify in the request. This operation is marked as DONE when the group is patched even if the instances in the group are still in the process of being patched. You must separately verify the status of the individual instances with the listmanagedinstances method. This method supports PATCH semantics and uses the JSON merge patch format and processing rules. If you update your group to specify a new template or instance configuration, it's possible that your intended specification for each VM in the group is different from the current state of that VM. To learn how to apply an updated configuration to the VMs in a MIG, see Updating instances in a MIG.
* [computeRegionInstanceGroupManagersPatchPerInstanceConfigs](#computeregioninstancegroupmanagerspatchperinstanceconfigs) - Inserts or patches per-instance configurations for the managed instance group. perInstanceConfig.name serves as a key used to distinguish whether to perform insert or patch.
* [computeRegionInstanceGroupManagersRecreateInstances](#computeregioninstancegroupmanagersrecreateinstances) - Flags the specified VM instances in the managed instance group to be immediately recreated. Each instance is recreated using the group's current configuration. This operation is marked as DONE when the flag is set even if the instances have not yet been recreated. You must separately verify the status of each instance by checking its currentAction field; for more information, see Checking the status of managed instances. If the group is part of a backend service that has enabled connection draining, it can take up to 60 seconds after the connection draining duration has elapsed before the VM instance is removed or deleted. You can specify a maximum of 1000 instances with this method per request.
* [computeRegionInstanceGroupManagersResize](#computeregioninstancegroupmanagersresize) - Changes the intended size of the managed instance group. If you increase the size, the group creates new instances using the current instance template. If you decrease the size, the group deletes one or more instances. The resize operation is marked DONE if the resize request is successful. The underlying actions take additional time. You must separately verify the status of the creating or deleting actions with the listmanagedinstances method. If the group is part of a backend service that has enabled connection draining, it can take up to 60 seconds after the connection draining duration has elapsed before the VM instance is removed or deleted.
* [computeRegionInstanceGroupManagersResizeAdvanced](#computeregioninstancegroupmanagersresizeadvanced) - Resizes the regional managed instance group with advanced configuration options like disabling creation retries. This is an extended version of the resize method. If you increase the size, the group creates new instances using the current instance template. If you decrease the size, the group deletes one or more instances. The resize operation is marked DONE if the resize request is successful. The underlying actions take additional time. You must separately verify the status of the creating or deleting actions with the get or listmanagedinstances method. If the group is part of a backend service that has enabled connection draining, it can take up to 60 seconds after the connection draining duration has elapsed before the VM instance is removed or deleted.
* [computeRegionInstanceGroupManagersResumeInstances](#computeregioninstancegroupmanagersresumeinstances) - Flags the specified instances in the managed instance group to be resumed. This method increases the targetSize and decreases the targetSuspendedSize of the managed instance group by the number of instances that you resume. The resumeInstances operation is marked DONE if the resumeInstances request is successful. The underlying actions take additional time. You must separately verify the status of the RESUMING action with the listmanagedinstances method. In this request, you can only specify instances that are suspended. For example, if an instance was previously suspended using the suspendInstances method, it can be resumed using the resumeInstances method. If a health check is attached to the managed instance group, the specified instances will be verified as healthy after they are resumed. You can specify a maximum of 1000 instances with this method per request.
* [computeRegionInstanceGroupManagersSetAutoHealingPolicies](#computeregioninstancegroupmanagerssetautohealingpolicies) - Modifies the autohealing policy for the instances in this managed instance group. [Deprecated] This method is deprecated. Use regionInstanceGroupManagers.patch instead.
* [computeRegionInstanceGroupManagersSetInstanceTemplate](#computeregioninstancegroupmanagerssetinstancetemplate) - Sets the instance template to use when creating new instances or recreating instances in this group. Existing instances are not affected.
* [computeRegionInstanceGroupManagersSetTargetPools](#computeregioninstancegroupmanagerssettargetpools) - Modifies the target pools to which all new instances in this group are assigned. Existing instances in the group are not affected.
* [computeRegionInstanceGroupManagersStartInstances](#computeregioninstancegroupmanagersstartinstances) - Flags the specified instances in the managed instance group to be started. This method increases the targetSize and decreases the targetStoppedSize of the managed instance group by the number of instances that you start. The startInstances operation is marked DONE if the startInstances request is successful. The underlying actions take additional time. You must separately verify the status of the STARTING action with the listmanagedinstances method. In this request, you can only specify instances that are stopped. For example, if an instance was previously stopped using the stopInstances method, it can be started using the startInstances method. If a health check is attached to the managed instance group, the specified instances will be verified as healthy after they are started. You can specify a maximum of 1000 instances with this method per request.
* [computeRegionInstanceGroupManagersStopInstances](#computeregioninstancegroupmanagersstopinstances) - Flags the specified instances in the managed instance group to be immediately stopped. You can only specify instances that are running in this request. This method reduces the targetSize and increases the targetStoppedSize of the managed instance group by the number of instances that you stop. The stopInstances operation is marked DONE if the stopInstances request is successful. The underlying actions take additional time. You must separately verify the status of the STOPPING action with the listmanagedinstances method. If the standbyPolicy.initialDelaySec field is set, the group delays stopping the instances until initialDelaySec have passed from instance.creationTimestamp (that is, when the instance was created). This delay gives your application time to set itself up and initialize on the instance. If more than initialDelaySec seconds have passed since instance.creationTimestamp when this method is called, there will be zero delay. If the group is part of a backend service that has enabled connection draining, it can take up to 60 seconds after the connection draining duration has elapsed before the VM instance is stopped. Stopped instances can be started using the startInstances method. You can specify a maximum of 1000 instances with this method per request.
* [computeRegionInstanceGroupManagersSuspendInstances](#computeregioninstancegroupmanagerssuspendinstances) - Flags the specified instances in the managed instance group to be immediately suspended. You can only specify instances that are running in this request. This method reduces the targetSize and increases the targetSuspendedSize of the managed instance group by the number of instances that you suspend. The suspendInstances operation is marked DONE if the suspendInstances request is successful. The underlying actions take additional time. You must separately verify the status of the SUSPENDING action with the listmanagedinstances method. If the standbyPolicy.initialDelaySec field is set, the group delays suspension of the instances until initialDelaySec have passed from instance.creationTimestamp (that is, when the instance was created). This delay gives your application time to set itself up and initialize on the instance. If more than initialDelaySec seconds have passed since instance.creationTimestamp when this method is called, there will be zero delay. If the group is part of a backend service that has enabled connection draining, it can take up to 60 seconds after the connection draining duration has elapsed before the VM instance is suspended. Suspended instances can be resumed using the resumeInstances method. You can specify a maximum of 1000 instances with this method per request.
* [computeRegionInstanceGroupManagersTestIamPermissions](#computeregioninstancegroupmanagerstestiampermissions) - Returns permissions that a caller has on the specified resource.
* [computeRegionInstanceGroupManagersUpdate](#computeregioninstancegroupmanagersupdate) - Updates a managed instance group using the information that you specify in the request. This operation is marked as DONE when the group is updated even if the instances in the group have not yet been updated. You must separately verify the status of the individual instances with the listmanagedinstances method. If you update your group to specify a new template or instance configuration, it's possible that your intended specification for each VM in the group is different from the current state of that VM. To learn how to apply an updated configuration to the VMs in a MIG, see Updating instances in a MIG.
* [computeRegionInstanceGroupManagersUpdatePerInstanceConfigs](#computeregioninstancegroupmanagersupdateperinstanceconfigs) - Inserts or updates per-instance configurations for the managed instance group. perInstanceConfig.name serves as a key used to distinguish whether to perform insert or patch.

## computeRegionInstanceGroupManagersAbandonInstances

Flags the specified instances to be immediately removed from the managed instance group. Abandoning an instance does not delete the instance, but it does remove the instance from any target pools that are applied by the managed instance group. This method reduces the targetSize of the managed instance group by the number of instances that you abandon. This operation is marked as DONE when the action is scheduled even if the instances have not yet been removed from the group. You must separately verify the status of the abandoning action with the listmanagedinstances method. If the group is part of a backend service that has enabled connection draining, it can take up to 60 seconds after the connection draining duration has elapsed before the VM instance is removed or deleted. You can specify a maximum of 1000 instances with this method per request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeRegionInstanceGroupManagersAbandonInstancesRequest;
import org.openapis.openapi.models.operations.ComputeRegionInstanceGroupManagersAbandonInstancesResponse;
import org.openapis.openapi.models.operations.ComputeRegionInstanceGroupManagersAbandonInstancesSecurity;
import org.openapis.openapi.models.operations.ComputeRegionInstanceGroupManagersAbandonInstancesSecurityOption1;
import org.openapis.openapi.models.operations.ComputeRegionInstanceGroupManagersAbandonInstancesSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.RegionInstanceGroupManagersAbandonInstancesRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeRegionInstanceGroupManagersAbandonInstancesRequest req = new ComputeRegionInstanceGroupManagersAbandonInstancesRequest("occaecati", "doloribus", "cumque") {{
                dollarXgafv = XgafvEnum.TWO;
                regionInstanceGroupManagersAbandonInstancesRequest = new RegionInstanceGroupManagersAbandonInstancesRequest() {{
                    instances = new String[]{{
                        add("eligendi"),
                        add("debitis"),
                    }};
                }};;
                accessToken = "aperiam";
                alt = AltEnum.MEDIA;
                callback = "earum";
                fields = "odio";
                key = "sequi";
                oauthToken = "doloribus";
                prettyPrint = false;
                quotaUser = "voluptas";
                requestId = "dicta";
                uploadType = "fugiat";
                uploadProtocol = "corrupti";
                userIp = "quidem";
            }};            

            ComputeRegionInstanceGroupManagersAbandonInstancesResponse res = sdk.regionInstanceGroupManagers.computeRegionInstanceGroupManagersAbandonInstances(req, new ComputeRegionInstanceGroupManagersAbandonInstancesSecurity() {{
                option1 = new ComputeRegionInstanceGroupManagersAbandonInstancesSecurityOption1("facere", "cumque") {{
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

## computeRegionInstanceGroupManagersApplyUpdatesToInstances

Apply updates to selected instances the managed instance group.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeRegionInstanceGroupManagersApplyUpdatesToInstancesRequest;
import org.openapis.openapi.models.operations.ComputeRegionInstanceGroupManagersApplyUpdatesToInstancesResponse;
import org.openapis.openapi.models.operations.ComputeRegionInstanceGroupManagersApplyUpdatesToInstancesSecurity;
import org.openapis.openapi.models.operations.ComputeRegionInstanceGroupManagersApplyUpdatesToInstancesSecurityOption1;
import org.openapis.openapi.models.operations.ComputeRegionInstanceGroupManagersApplyUpdatesToInstancesSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.RegionInstanceGroupManagersApplyUpdatesRequest;
import org.openapis.openapi.models.shared.RegionInstanceGroupManagersApplyUpdatesRequestMaximalActionEnum;
import org.openapis.openapi.models.shared.RegionInstanceGroupManagersApplyUpdatesRequestMinimalActionEnum;
import org.openapis.openapi.models.shared.RegionInstanceGroupManagersApplyUpdatesRequestMostDisruptiveAllowedActionEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeRegionInstanceGroupManagersApplyUpdatesToInstancesRequest req = new ComputeRegionInstanceGroupManagersApplyUpdatesToInstancesRequest("laudantium", "cupiditate", "magnam") {{
                dollarXgafv = XgafvEnum.ONE;
                regionInstanceGroupManagersApplyUpdatesRequest = new RegionInstanceGroupManagersApplyUpdatesRequest() {{
                    allInstances = false;
                    instances = new String[]{{
                        add("earum"),
                        add("asperiores"),
                        add("dolorem"),
                    }};
                    maximalAction = RegionInstanceGroupManagersApplyUpdatesRequestMaximalActionEnum.REFRESH;
                    minimalAction = RegionInstanceGroupManagersApplyUpdatesRequestMinimalActionEnum.NONE;
                    mostDisruptiveAllowedAction = RegionInstanceGroupManagersApplyUpdatesRequestMostDisruptiveAllowedActionEnum.NONE;
                }};;
                accessToken = "aut";
                alt = AltEnum.JSON;
                callback = "quia";
                fields = "esse";
                key = "libero";
                oauthToken = "et";
                prettyPrint = false;
                quotaUser = "eaque";
                uploadType = "magni";
                uploadProtocol = "quae";
                userIp = "quas";
            }};            

            ComputeRegionInstanceGroupManagersApplyUpdatesToInstancesResponse res = sdk.regionInstanceGroupManagers.computeRegionInstanceGroupManagersApplyUpdatesToInstances(req, new ComputeRegionInstanceGroupManagersApplyUpdatesToInstancesSecurity() {{
                option1 = new ComputeRegionInstanceGroupManagersApplyUpdatesToInstancesSecurityOption1("ratione", "maiores") {{
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

## computeRegionInstanceGroupManagersCreateInstances

Creates instances with per-instance configurations in this regional managed instance group. Instances are created using the current instance template. The create instances operation is marked DONE if the createInstances request is successful. The underlying actions take additional time. You must separately verify the status of the creating or actions with the listmanagedinstances method.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeRegionInstanceGroupManagersCreateInstancesRequest;
import org.openapis.openapi.models.operations.ComputeRegionInstanceGroupManagersCreateInstancesResponse;
import org.openapis.openapi.models.operations.ComputeRegionInstanceGroupManagersCreateInstancesSecurity;
import org.openapis.openapi.models.operations.ComputeRegionInstanceGroupManagersCreateInstancesSecurityOption1;
import org.openapis.openapi.models.operations.ComputeRegionInstanceGroupManagersCreateInstancesSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.PerInstanceConfig;
import org.openapis.openapi.models.shared.PerInstanceConfigStatusEnum;
import org.openapis.openapi.models.shared.PreservedState;
import org.openapis.openapi.models.shared.PreservedStatePreservedDisk;
import org.openapis.openapi.models.shared.PreservedStatePreservedDiskAutoDeleteEnum;
import org.openapis.openapi.models.shared.PreservedStatePreservedDiskModeEnum;
import org.openapis.openapi.models.shared.PreservedStatePreservedNetworkIp;
import org.openapis.openapi.models.shared.PreservedStatePreservedNetworkIpAutoDeleteEnum;
import org.openapis.openapi.models.shared.PreservedStatePreservedNetworkIpIpAddress;
import org.openapis.openapi.models.shared.RegionInstanceGroupManagersCreateInstancesRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeRegionInstanceGroupManagersCreateInstancesRequest req = new ComputeRegionInstanceGroupManagersCreateInstancesRequest("quidem", "veniam", "debitis") {{
                dollarXgafv = XgafvEnum.TWO;
                regionInstanceGroupManagersCreateInstancesRequest = new RegionInstanceGroupManagersCreateInstancesRequest() {{
                    instances = new org.openapis.openapi.models.shared.PerInstanceConfig[]{{
                        add(new PerInstanceConfig() {{
                            fingerprint = "modi";
                            name = "Ms. Stephen Walker";
                            preservedState = new PreservedState() {{
                                disks = new java.util.HashMap<String, org.openapis.openapi.models.shared.PreservedStatePreservedDisk>() {{
                                    put("iure", new PreservedStatePreservedDisk() {{
                                        autoDelete = PreservedStatePreservedDiskAutoDeleteEnum.ON_PERMANENT_INSTANCE_DELETION;
                                        mode = PreservedStatePreservedDiskModeEnum.READ_WRITE;
                                        source = "aliquam";
                                    }});
                                    put("magnam", new PreservedStatePreservedDisk() {{
                                        autoDelete = PreservedStatePreservedDiskAutoDeleteEnum.NEVER;
                                        mode = PreservedStatePreservedDiskModeEnum.READ_ONLY;
                                        source = "sint";
                                    }});
                                    put("quam", new PreservedStatePreservedDisk() {{
                                        autoDelete = PreservedStatePreservedDiskAutoDeleteEnum.NEVER;
                                        mode = PreservedStatePreservedDiskModeEnum.READ_WRITE;
                                        source = "odio";
                                    }});
                                }};
                                externalIPs = new java.util.HashMap<String, org.openapis.openapi.models.shared.PreservedStatePreservedNetworkIp>() {{
                                    put("aliquam", new PreservedStatePreservedNetworkIp() {{
                                        autoDelete = PreservedStatePreservedNetworkIpAutoDeleteEnum.ON_PERMANENT_INSTANCE_DELETION;
                                        ipAddress = new PreservedStatePreservedNetworkIpIpAddress() {{
                                            address = "72191 Carroll Prairie";
                                            literal = "ipsam";
                                        }};
                                    }});
                                }};
                                internalIPs = new java.util.HashMap<String, org.openapis.openapi.models.shared.PreservedStatePreservedNetworkIp>() {{
                                    put("maiores", new PreservedStatePreservedNetworkIp() {{
                                        autoDelete = PreservedStatePreservedNetworkIpAutoDeleteEnum.ON_PERMANENT_INSTANCE_DELETION;
                                        ipAddress = new PreservedStatePreservedNetworkIpIpAddress() {{
                                            address = "87083 Trantow Road";
                                            literal = "vel";
                                        }};
                                    }});
                                    put("ut", new PreservedStatePreservedNetworkIp() {{
                                        autoDelete = PreservedStatePreservedNetworkIpAutoDeleteEnum.ON_PERMANENT_INSTANCE_DELETION;
                                        ipAddress = new PreservedStatePreservedNetworkIpIpAddress() {{
                                            address = "130 Wilderman Brook";
                                            literal = "dolorem";
                                        }};
                                    }});
                                }};
                                metadata = new java.util.HashMap<String, String>() {{
                                    put("aspernatur", "reiciendis");
                                    put("quisquam", "quod");
                                }};
                            }};
                            status = PerInstanceConfigStatusEnum.APPLYING;
                        }}),
                        add(new PerInstanceConfig() {{
                            fingerprint = "debitis";
                            name = "Suzanne Steuber";
                            preservedState = new PreservedState() {{
                                disks = new java.util.HashMap<String, org.openapis.openapi.models.shared.PreservedStatePreservedDisk>() {{
                                    put("mollitia", new PreservedStatePreservedDisk() {{
                                        autoDelete = PreservedStatePreservedDiskAutoDeleteEnum.ON_PERMANENT_INSTANCE_DELETION;
                                        mode = PreservedStatePreservedDiskModeEnum.READ_WRITE;
                                        source = "unde";
                                    }});
                                    put("consequuntur", new PreservedStatePreservedDisk() {{
                                        autoDelete = PreservedStatePreservedDiskAutoDeleteEnum.NEVER;
                                        mode = PreservedStatePreservedDiskModeEnum.READ_ONLY;
                                        source = "itaque";
                                    }});
                                }};
                                externalIPs = new java.util.HashMap<String, org.openapis.openapi.models.shared.PreservedStatePreservedNetworkIp>() {{
                                    put("reiciendis", new PreservedStatePreservedNetworkIp() {{
                                        autoDelete = PreservedStatePreservedNetworkIpAutoDeleteEnum.ON_PERMANENT_INSTANCE_DELETION;
                                        ipAddress = new PreservedStatePreservedNetworkIpIpAddress() {{
                                            address = "17181 Runte Court";
                                            literal = "maxime";
                                        }};
                                    }});
                                    put("animi", new PreservedStatePreservedNetworkIp() {{
                                        autoDelete = PreservedStatePreservedNetworkIpAutoDeleteEnum.ON_PERMANENT_INSTANCE_DELETION;
                                        ipAddress = new PreservedStatePreservedNetworkIpIpAddress() {{
                                            address = "6461 Stanton Harbors";
                                            literal = "harum";
                                        }};
                                    }});
                                    put("quo", new PreservedStatePreservedNetworkIp() {{
                                        autoDelete = PreservedStatePreservedNetworkIpAutoDeleteEnum.NEVER;
                                        ipAddress = new PreservedStatePreservedNetworkIpIpAddress() {{
                                            address = "24889 Vada Well";
                                            literal = "deserunt";
                                        }};
                                    }});
                                }};
                                internalIPs = new java.util.HashMap<String, org.openapis.openapi.models.shared.PreservedStatePreservedNetworkIp>() {{
                                    put("veniam", new PreservedStatePreservedNetworkIp() {{
                                        autoDelete = PreservedStatePreservedNetworkIpAutoDeleteEnum.ON_PERMANENT_INSTANCE_DELETION;
                                        ipAddress = new PreservedStatePreservedNetworkIpIpAddress() {{
                                            address = "6233 King Overpass";
                                            literal = "aliquam";
                                        }};
                                    }});
                                    put("recusandae", new PreservedStatePreservedNetworkIp() {{
                                        autoDelete = PreservedStatePreservedNetworkIpAutoDeleteEnum.NEVER;
                                        ipAddress = new PreservedStatePreservedNetworkIpIpAddress() {{
                                            address = "170 Hoeger Knoll";
                                            literal = "temporibus";
                                        }};
                                    }});
                                }};
                                metadata = new java.util.HashMap<String, String>() {{
                                    put("harum", "laborum");
                                }};
                            }};
                            status = PerInstanceConfigStatusEnum.NONE;
                        }}),
                        add(new PerInstanceConfig() {{
                            fingerprint = "aliquid";
                            name = "Maggie McLaughlin";
                            preservedState = new PreservedState() {{
                                disks = new java.util.HashMap<String, org.openapis.openapi.models.shared.PreservedStatePreservedDisk>() {{
                                    put("laboriosam", new PreservedStatePreservedDisk() {{
                                        autoDelete = PreservedStatePreservedDiskAutoDeleteEnum.ON_PERMANENT_INSTANCE_DELETION;
                                        mode = PreservedStatePreservedDiskModeEnum.READ_ONLY;
                                        source = "et";
                                    }});
                                    put("tempore", new PreservedStatePreservedDisk() {{
                                        autoDelete = PreservedStatePreservedDiskAutoDeleteEnum.ON_PERMANENT_INSTANCE_DELETION;
                                        mode = PreservedStatePreservedDiskModeEnum.READ_WRITE;
                                        source = "pariatur";
                                    }});
                                }};
                                externalIPs = new java.util.HashMap<String, org.openapis.openapi.models.shared.PreservedStatePreservedNetworkIp>() {{
                                    put("neque", new PreservedStatePreservedNetworkIp() {{
                                        autoDelete = PreservedStatePreservedNetworkIpAutoDeleteEnum.ON_PERMANENT_INSTANCE_DELETION;
                                        ipAddress = new PreservedStatePreservedNetworkIpIpAddress() {{
                                            address = "94335 Schinner Groves";
                                            literal = "consequuntur";
                                        }};
                                    }});
                                    put("doloribus", new PreservedStatePreservedNetworkIp() {{
                                        autoDelete = PreservedStatePreservedNetworkIpAutoDeleteEnum.NEVER;
                                        ipAddress = new PreservedStatePreservedNetworkIpIpAddress() {{
                                            address = "0340 Harris Common";
                                            literal = "inventore";
                                        }};
                                    }});
                                    put("eum", new PreservedStatePreservedNetworkIp() {{
                                        autoDelete = PreservedStatePreservedNetworkIpAutoDeleteEnum.NEVER;
                                        ipAddress = new PreservedStatePreservedNetworkIpIpAddress() {{
                                            address = "11693 Sylvester Well";
                                            literal = "quaerat";
                                        }};
                                    }});
                                    put("placeat", new PreservedStatePreservedNetworkIp() {{
                                        autoDelete = PreservedStatePreservedNetworkIpAutoDeleteEnum.NEVER;
                                        ipAddress = new PreservedStatePreservedNetworkIpIpAddress() {{
                                            address = "27951 Columbus Route";
                                            literal = "provident";
                                        }};
                                    }});
                                }};
                                internalIPs = new java.util.HashMap<String, org.openapis.openapi.models.shared.PreservedStatePreservedNetworkIp>() {{
                                    put("voluptates", new PreservedStatePreservedNetworkIp() {{
                                        autoDelete = PreservedStatePreservedNetworkIpAutoDeleteEnum.ON_PERMANENT_INSTANCE_DELETION;
                                        ipAddress = new PreservedStatePreservedNetworkIpIpAddress() {{
                                            address = "3899 Ryan Pass";
                                            literal = "atque";
                                        }};
                                    }});
                                    put("culpa", new PreservedStatePreservedNetworkIp() {{
                                        autoDelete = PreservedStatePreservedNetworkIpAutoDeleteEnum.ON_PERMANENT_INSTANCE_DELETION;
                                        ipAddress = new PreservedStatePreservedNetworkIpIpAddress() {{
                                            address = "99921 Marquis Place";
                                            literal = "non";
                                        }};
                                    }});
                                    put("illum", new PreservedStatePreservedNetworkIp() {{
                                        autoDelete = PreservedStatePreservedNetworkIpAutoDeleteEnum.ON_PERMANENT_INSTANCE_DELETION;
                                        ipAddress = new PreservedStatePreservedNetworkIpIpAddress() {{
                                            address = "04151 Fabiola Corner";
                                            literal = "voluptate";
                                        }};
                                    }});
                                }};
                                metadata = new java.util.HashMap<String, String>() {{
                                    put("eligendi", "doloribus");
                                    put("saepe", "maiores");
                                    put("culpa", "deleniti");
                                    put("enim", "nam");
                                }};
                            }};
                            status = PerInstanceConfigStatusEnum.EFFECTIVE;
                        }}),
                        add(new PerInstanceConfig() {{
                            fingerprint = "recusandae";
                            name = "Genevieve McLaughlin";
                            preservedState = new PreservedState() {{
                                disks = new java.util.HashMap<String, org.openapis.openapi.models.shared.PreservedStatePreservedDisk>() {{
                                    put("minus", new PreservedStatePreservedDisk() {{
                                        autoDelete = PreservedStatePreservedDiskAutoDeleteEnum.NEVER;
                                        mode = PreservedStatePreservedDiskModeEnum.READ_ONLY;
                                        source = "amet";
                                    }});
                                    put("eos", new PreservedStatePreservedDisk() {{
                                        autoDelete = PreservedStatePreservedDiskAutoDeleteEnum.ON_PERMANENT_INSTANCE_DELETION;
                                        mode = PreservedStatePreservedDiskModeEnum.READ_WRITE;
                                        source = "quae";
                                    }});
                                    put("veritatis", new PreservedStatePreservedDisk() {{
                                        autoDelete = PreservedStatePreservedDiskAutoDeleteEnum.NEVER;
                                        mode = PreservedStatePreservedDiskModeEnum.READ_ONLY;
                                        source = "ullam";
                                    }});
                                    put("maiores", new PreservedStatePreservedDisk() {{
                                        autoDelete = PreservedStatePreservedDiskAutoDeleteEnum.ON_PERMANENT_INSTANCE_DELETION;
                                        mode = PreservedStatePreservedDiskModeEnum.READ_WRITE;
                                        source = "sequi";
                                    }});
                                }};
                                externalIPs = new java.util.HashMap<String, org.openapis.openapi.models.shared.PreservedStatePreservedNetworkIp>() {{
                                    put("fuga", new PreservedStatePreservedNetworkIp() {{
                                        autoDelete = PreservedStatePreservedNetworkIpAutoDeleteEnum.NEVER;
                                        ipAddress = new PreservedStatePreservedNetworkIpIpAddress() {{
                                            address = "6822 Filomena Mountains";
                                            literal = "facere";
                                        }};
                                    }});
                                }};
                                internalIPs = new java.util.HashMap<String, org.openapis.openapi.models.shared.PreservedStatePreservedNetworkIp>() {{
                                    put("quisquam", new PreservedStatePreservedNetworkIp() {{
                                        autoDelete = PreservedStatePreservedNetworkIpAutoDeleteEnum.NEVER;
                                        ipAddress = new PreservedStatePreservedNetworkIpIpAddress() {{
                                            address = "65965 Gerhold Shore";
                                            literal = "in";
                                        }};
                                    }});
                                    put("consectetur", new PreservedStatePreservedNetworkIp() {{
                                        autoDelete = PreservedStatePreservedNetworkIpAutoDeleteEnum.NEVER;
                                        ipAddress = new PreservedStatePreservedNetworkIpIpAddress() {{
                                            address = "24757 D'Amore Wells";
                                            literal = "rerum";
                                        }};
                                    }});
                                    put("corporis", new PreservedStatePreservedNetworkIp() {{
                                        autoDelete = PreservedStatePreservedNetworkIpAutoDeleteEnum.ON_PERMANENT_INSTANCE_DELETION;
                                        ipAddress = new PreservedStatePreservedNetworkIpIpAddress() {{
                                            address = "2290 Kris Oval";
                                            literal = "quis";
                                        }};
                                    }});
                                }};
                                metadata = new java.util.HashMap<String, String>() {{
                                    put("exercitationem", "libero");
                                    put("labore", "perspiciatis");
                                    put("at", "laborum");
                                    put("ab", "perspiciatis");
                                }};
                            }};
                            status = PerInstanceConfigStatusEnum.DELETING;
                        }}),
                    }};
                }};;
                accessToken = "pariatur";
                alt = AltEnum.MEDIA;
                callback = "et";
                fields = "explicabo";
                key = "veritatis";
                oauthToken = "consequuntur";
                prettyPrint = false;
                quotaUser = "dolore";
                requestId = "autem";
                uploadType = "odio";
                uploadProtocol = "cum";
                userIp = "pariatur";
            }};            

            ComputeRegionInstanceGroupManagersCreateInstancesResponse res = sdk.regionInstanceGroupManagers.computeRegionInstanceGroupManagersCreateInstances(req, new ComputeRegionInstanceGroupManagersCreateInstancesSecurity() {{
                option1 = new ComputeRegionInstanceGroupManagersCreateInstancesSecurityOption1("doloremque", "error") {{
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

## computeRegionInstanceGroupManagersDelete

Deletes the specified managed instance group and all of the instances in that group.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeRegionInstanceGroupManagersDeleteRequest;
import org.openapis.openapi.models.operations.ComputeRegionInstanceGroupManagersDeleteResponse;
import org.openapis.openapi.models.operations.ComputeRegionInstanceGroupManagersDeleteSecurity;
import org.openapis.openapi.models.operations.ComputeRegionInstanceGroupManagersDeleteSecurityOption1;
import org.openapis.openapi.models.operations.ComputeRegionInstanceGroupManagersDeleteSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeRegionInstanceGroupManagersDeleteRequest req = new ComputeRegionInstanceGroupManagersDeleteRequest("impedit", "odio", "perferendis") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "dicta";
                alt = AltEnum.MEDIA;
                callback = "beatae";
                fields = "fugit";
                key = "iusto";
                oauthToken = "ipsam";
                prettyPrint = false;
                quotaUser = "quibusdam";
                requestId = "commodi";
                uploadType = "voluptatibus";
                uploadProtocol = "eos";
                userIp = "delectus";
            }};            

            ComputeRegionInstanceGroupManagersDeleteResponse res = sdk.regionInstanceGroupManagers.computeRegionInstanceGroupManagersDelete(req, new ComputeRegionInstanceGroupManagersDeleteSecurity() {{
                option1 = new ComputeRegionInstanceGroupManagersDeleteSecurityOption1("recusandae", "doloremque") {{
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

## computeRegionInstanceGroupManagersDeleteInstances

Flags the specified instances in the managed instance group to be immediately deleted. The instances are also removed from any target pools of which they were a member. This method reduces the targetSize of the managed instance group by the number of instances that you delete. The deleteInstances operation is marked DONE if the deleteInstances request is successful. The underlying actions take additional time. You must separately verify the status of the deleting action with the listmanagedinstances method. If the group is part of a backend service that has enabled connection draining, it can take up to 60 seconds after the connection draining duration has elapsed before the VM instance is removed or deleted. You can specify a maximum of 1000 instances with this method per request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeRegionInstanceGroupManagersDeleteInstancesRequest;
import org.openapis.openapi.models.operations.ComputeRegionInstanceGroupManagersDeleteInstancesResponse;
import org.openapis.openapi.models.operations.ComputeRegionInstanceGroupManagersDeleteInstancesSecurity;
import org.openapis.openapi.models.operations.ComputeRegionInstanceGroupManagersDeleteInstancesSecurityOption1;
import org.openapis.openapi.models.operations.ComputeRegionInstanceGroupManagersDeleteInstancesSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.RegionInstanceGroupManagersDeleteInstancesRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeRegionInstanceGroupManagersDeleteInstancesRequest req = new ComputeRegionInstanceGroupManagersDeleteInstancesRequest("ullam", "eum", "aliquid") {{
                dollarXgafv = XgafvEnum.ONE;
                regionInstanceGroupManagersDeleteInstancesRequest = new RegionInstanceGroupManagersDeleteInstancesRequest() {{
                    instances = new String[]{{
                        add("reiciendis"),
                        add("quas"),
                        add("perferendis"),
                    }};
                    skipInapplicableInstances = false;
                    skipInstancesOnValidationError = false;
                }};;
                accessToken = "modi";
                alt = AltEnum.JSON;
                callback = "nihil";
                fields = "alias";
                key = "eius";
                oauthToken = "nesciunt";
                prettyPrint = false;
                quotaUser = "ex";
                requestId = "magnam";
                uploadType = "illo";
                uploadProtocol = "aliquid";
                userIp = "repudiandae";
            }};            

            ComputeRegionInstanceGroupManagersDeleteInstancesResponse res = sdk.regionInstanceGroupManagers.computeRegionInstanceGroupManagersDeleteInstances(req, new ComputeRegionInstanceGroupManagersDeleteInstancesSecurity() {{
                option1 = new ComputeRegionInstanceGroupManagersDeleteInstancesSecurityOption1("error", "itaque") {{
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

## computeRegionInstanceGroupManagersDeletePerInstanceConfigs

Deletes selected per-instance configurations for the managed instance group.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeRegionInstanceGroupManagersDeletePerInstanceConfigsRequest;
import org.openapis.openapi.models.operations.ComputeRegionInstanceGroupManagersDeletePerInstanceConfigsResponse;
import org.openapis.openapi.models.operations.ComputeRegionInstanceGroupManagersDeletePerInstanceConfigsSecurity;
import org.openapis.openapi.models.operations.ComputeRegionInstanceGroupManagersDeletePerInstanceConfigsSecurityOption1;
import org.openapis.openapi.models.operations.ComputeRegionInstanceGroupManagersDeletePerInstanceConfigsSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.RegionInstanceGroupManagerDeleteInstanceConfigReq;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeRegionInstanceGroupManagersDeletePerInstanceConfigsRequest req = new ComputeRegionInstanceGroupManagersDeletePerInstanceConfigsRequest("voluptate", "neque", "voluptates") {{
                dollarXgafv = XgafvEnum.TWO;
                regionInstanceGroupManagerDeleteInstanceConfigReq = new RegionInstanceGroupManagerDeleteInstanceConfigReq() {{
                    names = new String[]{{
                        add("laudantium"),
                        add("error"),
                        add("sit"),
                    }};
                }};;
                accessToken = "impedit";
                alt = AltEnum.JSON;
                callback = "labore";
                fields = "natus";
                key = "aliquam";
                oauthToken = "praesentium";
                prettyPrint = false;
                quotaUser = "odio";
                uploadType = "vel";
                uploadProtocol = "debitis";
                userIp = "ut";
            }};            

            ComputeRegionInstanceGroupManagersDeletePerInstanceConfigsResponse res = sdk.regionInstanceGroupManagers.computeRegionInstanceGroupManagersDeletePerInstanceConfigs(req, new ComputeRegionInstanceGroupManagersDeletePerInstanceConfigsSecurity() {{
                option1 = new ComputeRegionInstanceGroupManagersDeletePerInstanceConfigsSecurityOption1("eaque", "eveniet") {{
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

## computeRegionInstanceGroupManagersGet

Returns all of the details about the specified managed instance group.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeRegionInstanceGroupManagersGetRequest;
import org.openapis.openapi.models.operations.ComputeRegionInstanceGroupManagersGetResponse;
import org.openapis.openapi.models.operations.ComputeRegionInstanceGroupManagersGetSecurity;
import org.openapis.openapi.models.operations.ComputeRegionInstanceGroupManagersGetSecurityOption1;
import org.openapis.openapi.models.operations.ComputeRegionInstanceGroupManagersGetSecurityOption2;
import org.openapis.openapi.models.operations.ComputeRegionInstanceGroupManagersGetSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeRegionInstanceGroupManagersGetRequest req = new ComputeRegionInstanceGroupManagersGetRequest("temporibus", "ad", "dicta") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "nam";
                alt = AltEnum.MEDIA;
                callback = "aspernatur";
                fields = "molestias";
                key = "ut";
                oauthToken = "possimus";
                prettyPrint = false;
                quotaUser = "consequatur";
                uploadType = "earum";
                uploadProtocol = "quis";
                userIp = "tenetur";
            }};            

            ComputeRegionInstanceGroupManagersGetResponse res = sdk.regionInstanceGroupManagers.computeRegionInstanceGroupManagersGet(req, new ComputeRegionInstanceGroupManagersGetSecurity() {{
                option1 = new ComputeRegionInstanceGroupManagersGetSecurityOption1("magnam", "fuga") {{
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

## computeRegionInstanceGroupManagersInsert

Creates a managed instance group using the information that you specify in the request. After the group is created, instances in the group are created using the specified instance template. This operation is marked as DONE when the group is created even if the instances in the group have not yet been created. You must separately verify the status of the individual instances with the listmanagedinstances method. A regional managed instance group can contain up to 2000 instances.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeRegionInstanceGroupManagersInsertRequest;
import org.openapis.openapi.models.operations.ComputeRegionInstanceGroupManagersInsertResponse;
import org.openapis.openapi.models.operations.ComputeRegionInstanceGroupManagersInsertSecurity;
import org.openapis.openapi.models.operations.ComputeRegionInstanceGroupManagersInsertSecurityOption1;
import org.openapis.openapi.models.operations.ComputeRegionInstanceGroupManagersInsertSecurityOption2;
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

            ComputeRegionInstanceGroupManagersInsertRequest req = new ComputeRegionInstanceGroupManagersInsertRequest("illum", "architecto") {{
                dollarXgafv = XgafvEnum.TWO;
                instanceGroupManager = new InstanceGroupManager() {{
                    allInstancesConfig = new InstanceGroupManagerAllInstancesConfig() {{
                        properties = new InstancePropertiesPatch() {{
                            labels = new java.util.HashMap<String, String>() {{
                                put("earum", "ipsam");
                            }};
                            metadata = new java.util.HashMap<String, String>() {{
                                put("possimus", "esse");
                            }};
                        }};;
                    }};;
                    autoHealingPolicies = new org.openapis.openapi.models.shared.InstanceGroupManagerAutoHealingPolicy[]{{
                        add(new InstanceGroupManagerAutoHealingPolicy() {{
                            autoHealingTriggers = new InstanceGroupManagerAutoHealingPolicyAutoHealingTriggers() {{
                                onHealthCheck = InstanceGroupManagerAutoHealingPolicyAutoHealingTriggersOnHealthCheckEnum.OFF;
                            }};
                            healthCheck = "nemo";
                            initialDelaySec = 388551;
                            maxUnavailable = new FixedOrPercent() {{
                                calculated = 895556;
                                fixed = 906636;
                                percent = 61334;
                            }};
                        }}),
                        add(new InstanceGroupManagerAutoHealingPolicy() {{
                            autoHealingTriggers = new InstanceGroupManagerAutoHealingPolicyAutoHealingTriggers() {{
                                onHealthCheck = InstanceGroupManagerAutoHealingPolicyAutoHealingTriggersOnHealthCheckEnum.OFF;
                            }};
                            healthCheck = "ipsum";
                            initialDelaySec = 815268;
                            maxUnavailable = new FixedOrPercent() {{
                                calculated = 514042;
                                fixed = 38907;
                                percent = 169349;
                            }};
                        }}),
                        add(new InstanceGroupManagerAutoHealingPolicy() {{
                            autoHealingTriggers = new InstanceGroupManagerAutoHealingPolicyAutoHealingTriggers() {{
                                onHealthCheck = InstanceGroupManagerAutoHealingPolicyAutoHealingTriggersOnHealthCheckEnum.OFF;
                            }};
                            healthCheck = "molestiae";
                            initialDelaySec = 64468;
                            maxUnavailable = new FixedOrPercent() {{
                                calculated = 834612;
                                fixed = 853474;
                                percent = 143710;
                            }};
                        }}),
                    }};
                    baseInstanceName = "molestias";
                    creationTimestamp = "repellendus";
                    currentActions = new InstanceGroupManagerActionsSummary() {{
                        abandoning = 700130;
                        creating = 858040;
                        creatingAtomically = 7839;
                        creatingWithoutRetries = 669864;
                        deleting = 311055;
                        none = 68686;
                        queuing = 695458;
                        recreating = 84250;
                        refreshing = 622062;
                        restarting = 363439;
                        resuming = 503440;
                        starting = 420006;
                        stopping = 769578;
                        suspending = 161668;
                        verifying = 871382;
                    }};;
                    description = "iste";
                    distributionPolicy = new DistributionPolicy() {{
                        targetShape = DistributionPolicyTargetShapeEnum.EVEN;
                        zones = new org.openapis.openapi.models.shared.DistributionPolicyZoneConfiguration[]{{
                            add(new DistributionPolicyZoneConfiguration() {{
                                zone = "vel";
                            }}),
                            add(new DistributionPolicyZoneConfiguration() {{
                                zone = "dolorum";
                            }}),
                        }};
                    }};;
                    failoverAction = InstanceGroupManagerFailoverActionEnum.UNKNOWN;
                    fingerprint = "enim";
                    id = "odit";
                    instanceFlexibilityPolicy = new InstanceGroupManagerInstanceFlexibilityPolicy() {{
                        instanceSelectionLists = new java.util.HashMap<String, org.openapis.openapi.models.shared.InstanceGroupManagerInstanceFlexibilityPolicyInstanceSelection>() {{
                            put("magnam", new InstanceGroupManagerInstanceFlexibilityPolicyInstanceSelection() {{
                                machineTypes = new String[]{{
                                    add("voluptatum"),
                                }};
                                rank = 907012;
                            }});
                            put("consequuntur", new InstanceGroupManagerInstanceFlexibilityPolicyInstanceSelection() {{
                                machineTypes = new String[]{{
                                    add("consequatur"),
                                    add("maxime"),
                                }};
                                rank = 524807;
                            }});
                            put("ipsa", new InstanceGroupManagerInstanceFlexibilityPolicyInstanceSelection() {{
                                machineTypes = new String[]{{
                                    add("illum"),
                                    add("reiciendis"),
                                }};
                                rank = 39258;
                            }});
                        }};
                    }};;
                    instanceGroup = "distinctio";
                    instanceLifecyclePolicy = new InstanceGroupManagerInstanceLifecyclePolicy() {{
                        defaultActionOnFailure = InstanceGroupManagerInstanceLifecyclePolicyDefaultActionOnFailureEnum.REPAIR;
                        forceUpdateOnRepair = InstanceGroupManagerInstanceLifecyclePolicyForceUpdateOnRepairEnum.YES;
                        metadataBasedReadinessSignal = new InstanceGroupManagerInstanceLifecyclePolicyMetadataBasedReadinessSignal() {{
                            timeoutSec = 177912;
                        }};;
                    }};;
                    instanceTemplate = "in";
                    kind = "praesentium";
                    listManagedInstancesResults = InstanceGroupManagerListManagedInstancesResultsEnum.PAGELESS;
                    name = "Angelica Corwin";
                    namedPorts = new org.openapis.openapi.models.shared.NamedPort[]{{
                        add(new NamedPort() {{
                            name = "Marion Klein";
                            port = 235578;
                        }}),
                        add(new NamedPort() {{
                            name = "Melba Mraz";
                            port = 217609;
                        }}),
                        add(new NamedPort() {{
                            name = "Karen Spencer";
                            port = 817026;
                        }}),
                        add(new NamedPort() {{
                            name = "Jordan Daugherty MD";
                            port = 906324;
                        }}),
                    }};
                    region = "temporibus";
                    selfLink = "saepe";
                    selfLinkWithId = "cum";
                    serviceAccount = "ipsum";
                    standbyPolicy = new InstanceGroupManagerStandbyPolicy() {{
                        initialDelaySec = 511330;
                    }};;
                    statefulPolicy = new StatefulPolicy() {{
                        preservedState = new StatefulPolicyPreservedState() {{
                            disks = new java.util.HashMap<String, org.openapis.openapi.models.shared.StatefulPolicyPreservedStateDiskDevice>() {{
                                put("tempora", new StatefulPolicyPreservedStateDiskDevice() {{
                                    autoDelete = StatefulPolicyPreservedStateDiskDeviceAutoDeleteEnum.NEVER;
                                }});
                                put("maiores", new StatefulPolicyPreservedStateDiskDevice() {{
                                    autoDelete = StatefulPolicyPreservedStateDiskDeviceAutoDeleteEnum.ON_PERMANENT_INSTANCE_DELETION;
                                }});
                            }};
                            externalIPs = new java.util.HashMap<String, org.openapis.openapi.models.shared.StatefulPolicyPreservedStateNetworkIp>() {{
                                put("incidunt", new StatefulPolicyPreservedStateNetworkIp() {{
                                    autoDelete = StatefulPolicyPreservedStateNetworkIpAutoDeleteEnum.ON_PERMANENT_INSTANCE_DELETION;
                                }});
                                put("quis", new StatefulPolicyPreservedStateNetworkIp() {{
                                    autoDelete = StatefulPolicyPreservedStateNetworkIpAutoDeleteEnum.NEVER;
                                }});
                            }};
                            internalIPs = new java.util.HashMap<String, org.openapis.openapi.models.shared.StatefulPolicyPreservedStateNetworkIp>() {{
                                put("quasi", new StatefulPolicyPreservedStateNetworkIp() {{
                                    autoDelete = StatefulPolicyPreservedStateNetworkIpAutoDeleteEnum.NEVER;
                                }});
                                put("neque", new StatefulPolicyPreservedStateNetworkIp() {{
                                    autoDelete = StatefulPolicyPreservedStateNetworkIpAutoDeleteEnum.ON_PERMANENT_INSTANCE_DELETION;
                                }});
                            }};
                        }};;
                    }};;
                    status = new InstanceGroupManagerStatus() {{
                        allInstancesConfig = new InstanceGroupManagerStatusAllInstancesConfig() {{
                            currentRevision = "incidunt";
                            effective = false;
                        }};;
                        autoscaler = "ad";
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
                        add("id"),
                        add("deleniti"),
                        add("assumenda"),
                        add("impedit"),
                    }};
                    targetSize = 878990;
                    targetSizeUnit = InstanceGroupManagerTargetSizeUnitEnum.VM;
                    targetStoppedSize = 711913;
                    targetSuspendedSize = 357460;
                    updatePolicy = new InstanceGroupManagerUpdatePolicy() {{
                        instanceRedistributionType = InstanceGroupManagerUpdatePolicyInstanceRedistributionTypeEnum.NONE;
                        maxSurge = new FixedOrPercent() {{
                            calculated = 901513;
                            fixed = 242401;
                            percent = 590586;
                        }};;
                        maxUnavailable = new FixedOrPercent() {{
                            calculated = 678917;
                            fixed = 673545;
                            percent = 492609;
                        }};;
                        minReadySec = 375278;
                        minimalAction = InstanceGroupManagerUpdatePolicyMinimalActionEnum.REPLACE;
                        mostDisruptiveAllowedAction = InstanceGroupManagerUpdatePolicyMostDisruptiveAllowedActionEnum.REPLACE;
                        replacementMethod = InstanceGroupManagerUpdatePolicyReplacementMethodEnum.RECREATE;
                        type = InstanceGroupManagerUpdatePolicyTypeEnum.OPPORTUNISTIC;
                    }};;
                    versions = new org.openapis.openapi.models.shared.InstanceGroupManagerVersion[]{{
                        add(new InstanceGroupManagerVersion() {{
                            instanceTemplate = "id";
                            name = "Ms. Leo Considine";
                            tag = "aliquam";
                            targetSize = new FixedOrPercent() {{
                                calculated = 9269;
                                fixed = 866287;
                                percent = 7118;
                            }};
                        }}),
                    }};
                    zone = "voluptate";
                }};;
                accessToken = "tempore";
                alt = AltEnum.PROTO;
                callback = "fugiat";
                fields = "maiores";
                key = "optio";
                oauthToken = "quasi";
                prettyPrint = false;
                quotaUser = "maiores";
                requestId = "dicta";
                uploadType = "iure";
                uploadProtocol = "labore";
                userIp = "ipsam";
            }};            

            ComputeRegionInstanceGroupManagersInsertResponse res = sdk.regionInstanceGroupManagers.computeRegionInstanceGroupManagersInsert(req, new ComputeRegionInstanceGroupManagersInsertSecurity() {{
                option1 = new ComputeRegionInstanceGroupManagersInsertSecurityOption1("doloremque", "delectus") {{
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

## computeRegionInstanceGroupManagersList

Retrieves the list of managed instance groups that are contained within the specified region.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeRegionInstanceGroupManagersListRequest;
import org.openapis.openapi.models.operations.ComputeRegionInstanceGroupManagersListResponse;
import org.openapis.openapi.models.operations.ComputeRegionInstanceGroupManagersListSecurity;
import org.openapis.openapi.models.operations.ComputeRegionInstanceGroupManagersListSecurityOption1;
import org.openapis.openapi.models.operations.ComputeRegionInstanceGroupManagersListSecurityOption2;
import org.openapis.openapi.models.operations.ComputeRegionInstanceGroupManagersListSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeRegionInstanceGroupManagersListRequest req = new ComputeRegionInstanceGroupManagersListRequest("non", "labore") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "soluta";
                alt = AltEnum.PROTO;
                callback = "enim";
                fields = "sequi";
                filter = "minus";
                key = "ratione";
                maxResults = 41522L;
                oauthToken = "veniam";
                orderBy = "ipsam";
                pageToken = "animi";
                prettyPrint = false;
                quotaUser = "error";
                returnPartialSuccess = false;
                uploadType = "rerum";
                uploadProtocol = "consequuntur";
                userIp = "doloribus";
            }};            

            ComputeRegionInstanceGroupManagersListResponse res = sdk.regionInstanceGroupManagers.computeRegionInstanceGroupManagersList(req, new ComputeRegionInstanceGroupManagersListSecurity() {{
                option1 = new ComputeRegionInstanceGroupManagersListSecurityOption1("blanditiis", "reprehenderit") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.regionInstanceGroupManagerList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeRegionInstanceGroupManagersListErrors

Lists all errors thrown by actions on instances for a given regional managed instance group. The filter and orderBy query parameters are not supported.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeRegionInstanceGroupManagersListErrorsRequest;
import org.openapis.openapi.models.operations.ComputeRegionInstanceGroupManagersListErrorsResponse;
import org.openapis.openapi.models.operations.ComputeRegionInstanceGroupManagersListErrorsSecurity;
import org.openapis.openapi.models.operations.ComputeRegionInstanceGroupManagersListErrorsSecurityOption1;
import org.openapis.openapi.models.operations.ComputeRegionInstanceGroupManagersListErrorsSecurityOption2;
import org.openapis.openapi.models.operations.ComputeRegionInstanceGroupManagersListErrorsSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeRegionInstanceGroupManagersListErrorsRequest req = new ComputeRegionInstanceGroupManagersListErrorsRequest("odio", "recusandae", "incidunt") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "consequuntur";
                alt = AltEnum.JSON;
                callback = "quo";
                fields = "possimus";
                filter = "maxime";
                key = "error";
                maxResults = 993762L;
                oauthToken = "quae";
                orderBy = "in";
                pageToken = "nisi";
                prettyPrint = false;
                quotaUser = "recusandae";
                returnPartialSuccess = false;
                uploadType = "maxime";
                uploadProtocol = "atque";
                userIp = "quaerat";
            }};            

            ComputeRegionInstanceGroupManagersListErrorsResponse res = sdk.regionInstanceGroupManagers.computeRegionInstanceGroupManagersListErrors(req, new ComputeRegionInstanceGroupManagersListErrorsSecurity() {{
                option1 = new ComputeRegionInstanceGroupManagersListErrorsSecurityOption1("perspiciatis", "delectus") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.regionInstanceGroupManagersListErrorsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeRegionInstanceGroupManagersListManagedInstances

Lists the instances in the managed instance group and instances that are scheduled to be created. The list includes any current actions that the group has scheduled for its instances. The orderBy query parameter is not supported. The `pageToken` query parameter is supported only in the alpha and beta API and only if the group's `listManagedInstancesResults` field is set to `PAGINATED`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeRegionInstanceGroupManagersListManagedInstancesRequest;
import org.openapis.openapi.models.operations.ComputeRegionInstanceGroupManagersListManagedInstancesResponse;
import org.openapis.openapi.models.operations.ComputeRegionInstanceGroupManagersListManagedInstancesSecurity;
import org.openapis.openapi.models.operations.ComputeRegionInstanceGroupManagersListManagedInstancesSecurityOption1;
import org.openapis.openapi.models.operations.ComputeRegionInstanceGroupManagersListManagedInstancesSecurityOption2;
import org.openapis.openapi.models.operations.ComputeRegionInstanceGroupManagersListManagedInstancesSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeRegionInstanceGroupManagersListManagedInstancesRequest req = new ComputeRegionInstanceGroupManagersListManagedInstancesRequest("quis", "fuga", "culpa") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "amet";
                alt = AltEnum.PROTO;
                callback = "quibusdam";
                fields = "optio";
                filter = "vero";
                key = "dolorum";
                maxResults = 476059L;
                oauthToken = "officia";
                orderBy = "labore";
                pageToken = "fugiat";
                prettyPrint = false;
                quotaUser = "tempore";
                returnPartialSuccess = false;
                uploadType = "animi";
                uploadProtocol = "fugit";
                userIp = "consequatur";
            }};            

            ComputeRegionInstanceGroupManagersListManagedInstancesResponse res = sdk.regionInstanceGroupManagers.computeRegionInstanceGroupManagersListManagedInstances(req, new ComputeRegionInstanceGroupManagersListManagedInstancesSecurity() {{
                option1 = new ComputeRegionInstanceGroupManagersListManagedInstancesSecurityOption1("aliquam", "fuga") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.regionInstanceGroupManagersListInstancesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeRegionInstanceGroupManagersListPerInstanceConfigs

Lists all of the per-instance configurations defined for the managed instance group. The orderBy query parameter is not supported.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeRegionInstanceGroupManagersListPerInstanceConfigsRequest;
import org.openapis.openapi.models.operations.ComputeRegionInstanceGroupManagersListPerInstanceConfigsResponse;
import org.openapis.openapi.models.operations.ComputeRegionInstanceGroupManagersListPerInstanceConfigsSecurity;
import org.openapis.openapi.models.operations.ComputeRegionInstanceGroupManagersListPerInstanceConfigsSecurityOption1;
import org.openapis.openapi.models.operations.ComputeRegionInstanceGroupManagersListPerInstanceConfigsSecurityOption2;
import org.openapis.openapi.models.operations.ComputeRegionInstanceGroupManagersListPerInstanceConfigsSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeRegionInstanceGroupManagersListPerInstanceConfigsRequest req = new ComputeRegionInstanceGroupManagersListPerInstanceConfigsRequest("voluptate", "molestiae", "ipsa") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "explicabo";
                alt = AltEnum.MEDIA;
                callback = "minus";
                fields = "sit";
                filter = "velit";
                key = "accusamus";
                maxResults = 697960L;
                oauthToken = "voluptates";
                orderBy = "occaecati";
                pageToken = "quam";
                prettyPrint = false;
                quotaUser = "voluptatem";
                returnPartialSuccess = false;
                uploadType = "accusamus";
                uploadProtocol = "officia";
                userIp = "necessitatibus";
            }};            

            ComputeRegionInstanceGroupManagersListPerInstanceConfigsResponse res = sdk.regionInstanceGroupManagers.computeRegionInstanceGroupManagersListPerInstanceConfigs(req, new ComputeRegionInstanceGroupManagersListPerInstanceConfigsSecurity() {{
                option1 = new ComputeRegionInstanceGroupManagersListPerInstanceConfigsSecurityOption1("esse", "maxime") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.regionInstanceGroupManagersListInstanceConfigsResp != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeRegionInstanceGroupManagersPatch

Updates a managed instance group using the information that you specify in the request. This operation is marked as DONE when the group is patched even if the instances in the group are still in the process of being patched. You must separately verify the status of the individual instances with the listmanagedinstances method. This method supports PATCH semantics and uses the JSON merge patch format and processing rules. If you update your group to specify a new template or instance configuration, it's possible that your intended specification for each VM in the group is different from the current state of that VM. To learn how to apply an updated configuration to the VMs in a MIG, see Updating instances in a MIG.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeRegionInstanceGroupManagersPatchRequest;
import org.openapis.openapi.models.operations.ComputeRegionInstanceGroupManagersPatchResponse;
import org.openapis.openapi.models.operations.ComputeRegionInstanceGroupManagersPatchSecurity;
import org.openapis.openapi.models.operations.ComputeRegionInstanceGroupManagersPatchSecurityOption1;
import org.openapis.openapi.models.operations.ComputeRegionInstanceGroupManagersPatchSecurityOption2;
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

            ComputeRegionInstanceGroupManagersPatchRequest req = new ComputeRegionInstanceGroupManagersPatchRequest("architecto", "doloribus", "nostrum") {{
                dollarXgafv = XgafvEnum.ONE;
                instanceGroupManager1 = new InstanceGroupManager() {{
                    allInstancesConfig = new InstanceGroupManagerAllInstancesConfig() {{
                        properties = new InstancePropertiesPatch() {{
                            labels = new java.util.HashMap<String, String>() {{
                                put("iure", "consequatur");
                                put("ea", "ipsam");
                                put("voluptates", "rerum");
                            }};
                            metadata = new java.util.HashMap<String, String>() {{
                                put("nisi", "impedit");
                            }};
                        }};;
                    }};;
                    autoHealingPolicies = new org.openapis.openapi.models.shared.InstanceGroupManagerAutoHealingPolicy[]{{
                        add(new InstanceGroupManagerAutoHealingPolicy() {{
                            autoHealingTriggers = new InstanceGroupManagerAutoHealingPolicyAutoHealingTriggers() {{
                                onHealthCheck = InstanceGroupManagerAutoHealingPolicyAutoHealingTriggersOnHealthCheckEnum.OFF;
                            }};
                            healthCheck = "beatae";
                            initialDelaySec = 748974;
                            maxUnavailable = new FixedOrPercent() {{
                                calculated = 829915;
                                fixed = 727298;
                                percent = 981978;
                            }};
                        }}),
                        add(new InstanceGroupManagerAutoHealingPolicy() {{
                            autoHealingTriggers = new InstanceGroupManagerAutoHealingPolicyAutoHealingTriggers() {{
                                onHealthCheck = InstanceGroupManagerAutoHealingPolicyAutoHealingTriggersOnHealthCheckEnum.ON;
                            }};
                            healthCheck = "excepturi";
                            initialDelaySec = 253477;
                            maxUnavailable = new FixedOrPercent() {{
                                calculated = 784428;
                                fixed = 779448;
                                percent = 801291;
                            }};
                        }}),
                    }};
                    baseInstanceName = "at";
                    creationTimestamp = "dignissimos";
                    currentActions = new InstanceGroupManagerActionsSummary() {{
                        abandoning = 29715;
                        creating = 98394;
                        creatingAtomically = 799327;
                        creatingWithoutRetries = 48461;
                        deleting = 414510;
                        none = 394322;
                        queuing = 509282;
                        recreating = 703937;
                        refreshing = 31733;
                        restarting = 82006;
                        resuming = 93520;
                        starting = 175687;
                        stopping = 300704;
                        suspending = 188322;
                        verifying = 562582;
                    }};;
                    description = "fugit";
                    distributionPolicy = new DistributionPolicy() {{
                        targetShape = DistributionPolicyTargetShapeEnum.EVEN;
                        zones = new org.openapis.openapi.models.shared.DistributionPolicyZoneConfiguration[]{{
                            add(new DistributionPolicyZoneConfiguration() {{
                                zone = "pariatur";
                            }}),
                            add(new DistributionPolicyZoneConfiguration() {{
                                zone = "pariatur";
                            }}),
                            add(new DistributionPolicyZoneConfiguration() {{
                                zone = "sapiente";
                            }}),
                            add(new DistributionPolicyZoneConfiguration() {{
                                zone = "minima";
                            }}),
                        }};
                    }};;
                    failoverAction = InstanceGroupManagerFailoverActionEnum.NO_FAILOVER;
                    fingerprint = "ratione";
                    id = "commodi";
                    instanceFlexibilityPolicy = new InstanceGroupManagerInstanceFlexibilityPolicy() {{
                        instanceSelectionLists = new java.util.HashMap<String, org.openapis.openapi.models.shared.InstanceGroupManagerInstanceFlexibilityPolicyInstanceSelection>() {{
                            put("asperiores", new InstanceGroupManagerInstanceFlexibilityPolicyInstanceSelection() {{
                                machineTypes = new String[]{{
                                    add("deleniti"),
                                    add("tempora"),
                                    add("quaerat"),
                                    add("nobis"),
                                }};
                                rank = 817206;
                            }});
                        }};
                    }};;
                    instanceGroup = "quos";
                    instanceLifecyclePolicy = new InstanceGroupManagerInstanceLifecyclePolicy() {{
                        defaultActionOnFailure = InstanceGroupManagerInstanceLifecyclePolicyDefaultActionOnFailureEnum.DO_NOTHING;
                        forceUpdateOnRepair = InstanceGroupManagerInstanceLifecyclePolicyForceUpdateOnRepairEnum.YES;
                        metadataBasedReadinessSignal = new InstanceGroupManagerInstanceLifecyclePolicyMetadataBasedReadinessSignal() {{
                            timeoutSec = 453995;
                        }};;
                    }};;
                    instanceTemplate = "alias";
                    kind = "quidem";
                    listManagedInstancesResults = InstanceGroupManagerListManagedInstancesResultsEnum.PAGINATED;
                    name = "Jessica Howe";
                    namedPorts = new org.openapis.openapi.models.shared.NamedPort[]{{
                        add(new NamedPort() {{
                            name = "Theodore Barton Sr.";
                            port = 247217;
                        }}),
                    }};
                    region = "rerum";
                    selfLink = "iusto";
                    selfLinkWithId = "totam";
                    serviceAccount = "rem";
                    standbyPolicy = new InstanceGroupManagerStandbyPolicy() {{
                        initialDelaySec = 864202;
                    }};;
                    statefulPolicy = new StatefulPolicy() {{
                        preservedState = new StatefulPolicyPreservedState() {{
                            disks = new java.util.HashMap<String, org.openapis.openapi.models.shared.StatefulPolicyPreservedStateDiskDevice>() {{
                                put("quod", new StatefulPolicyPreservedStateDiskDevice() {{
                                    autoDelete = StatefulPolicyPreservedStateDiskDeviceAutoDeleteEnum.NEVER;
                                }});
                                put("adipisci", new StatefulPolicyPreservedStateDiskDevice() {{
                                    autoDelete = StatefulPolicyPreservedStateDiskDeviceAutoDeleteEnum.ON_PERMANENT_INSTANCE_DELETION;
                                }});
                            }};
                            externalIPs = new java.util.HashMap<String, org.openapis.openapi.models.shared.StatefulPolicyPreservedStateNetworkIp>() {{
                                put("ipsa", new StatefulPolicyPreservedStateNetworkIp() {{
                                    autoDelete = StatefulPolicyPreservedStateNetworkIpAutoDeleteEnum.ON_PERMANENT_INSTANCE_DELETION;
                                }});
                            }};
                            internalIPs = new java.util.HashMap<String, org.openapis.openapi.models.shared.StatefulPolicyPreservedStateNetworkIp>() {{
                                put("commodi", new StatefulPolicyPreservedStateNetworkIp() {{
                                    autoDelete = StatefulPolicyPreservedStateNetworkIpAutoDeleteEnum.ON_PERMANENT_INSTANCE_DELETION;
                                }});
                                put("esse", new StatefulPolicyPreservedStateNetworkIp() {{
                                    autoDelete = StatefulPolicyPreservedStateNetworkIpAutoDeleteEnum.NEVER;
                                }});
                            }};
                        }};;
                    }};;
                    status = new InstanceGroupManagerStatus() {{
                        allInstancesConfig = new InstanceGroupManagerStatusAllInstancesConfig() {{
                            currentRevision = "voluptatibus";
                            effective = false;
                        }};;
                        autoscaler = "inventore";
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
                        add("deleniti"),
                        add("dicta"),
                        add("sed"),
                        add("quae"),
                    }};
                    targetSize = 916674;
                    targetSizeUnit = InstanceGroupManagerTargetSizeUnitEnum.VM;
                    targetStoppedSize = 305555;
                    targetSuspendedSize = 737334;
                    updatePolicy = new InstanceGroupManagerUpdatePolicy() {{
                        instanceRedistributionType = InstanceGroupManagerUpdatePolicyInstanceRedistributionTypeEnum.NONE;
                        maxSurge = new FixedOrPercent() {{
                            calculated = 373918;
                            fixed = 606694;
                            percent = 274444;
                        }};;
                        maxUnavailable = new FixedOrPercent() {{
                            calculated = 588913;
                            fixed = 670932;
                            percent = 996677;
                        }};;
                        minReadySec = 166358;
                        minimalAction = InstanceGroupManagerUpdatePolicyMinimalActionEnum.NONE;
                        mostDisruptiveAllowedAction = InstanceGroupManagerUpdatePolicyMostDisruptiveAllowedActionEnum.REPLACE;
                        replacementMethod = InstanceGroupManagerUpdatePolicyReplacementMethodEnum.RECREATE;
                        type = InstanceGroupManagerUpdatePolicyTypeEnum.PROACTIVE;
                    }};;
                    versions = new org.openapis.openapi.models.shared.InstanceGroupManagerVersion[]{{
                        add(new InstanceGroupManagerVersion() {{
                            instanceTemplate = "corrupti";
                            name = "Seth Wisoky";
                            tag = "nihil";
                            targetSize = new FixedOrPercent() {{
                                calculated = 617958;
                                fixed = 453761;
                                percent = 135442;
                            }};
                        }}),
                    }};
                    zone = "beatae";
                }};;
                accessToken = "accusamus";
                alt = AltEnum.PROTO;
                callback = "eum";
                fields = "alias";
                key = "totam";
                oauthToken = "libero";
                prettyPrint = false;
                quotaUser = "fugit";
                requestId = "maiores";
                uploadType = "nulla";
                uploadProtocol = "nam";
                userIp = "corrupti";
            }};            

            ComputeRegionInstanceGroupManagersPatchResponse res = sdk.regionInstanceGroupManagers.computeRegionInstanceGroupManagersPatch(req, new ComputeRegionInstanceGroupManagersPatchSecurity() {{
                option1 = new ComputeRegionInstanceGroupManagersPatchSecurityOption1("voluptatibus", "cum") {{
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

## computeRegionInstanceGroupManagersPatchPerInstanceConfigs

Inserts or patches per-instance configurations for the managed instance group. perInstanceConfig.name serves as a key used to distinguish whether to perform insert or patch.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeRegionInstanceGroupManagersPatchPerInstanceConfigsRequest;
import org.openapis.openapi.models.operations.ComputeRegionInstanceGroupManagersPatchPerInstanceConfigsResponse;
import org.openapis.openapi.models.operations.ComputeRegionInstanceGroupManagersPatchPerInstanceConfigsSecurity;
import org.openapis.openapi.models.operations.ComputeRegionInstanceGroupManagersPatchPerInstanceConfigsSecurityOption1;
import org.openapis.openapi.models.operations.ComputeRegionInstanceGroupManagersPatchPerInstanceConfigsSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.PerInstanceConfig;
import org.openapis.openapi.models.shared.PerInstanceConfigStatusEnum;
import org.openapis.openapi.models.shared.PreservedState;
import org.openapis.openapi.models.shared.PreservedStatePreservedDisk;
import org.openapis.openapi.models.shared.PreservedStatePreservedDiskAutoDeleteEnum;
import org.openapis.openapi.models.shared.PreservedStatePreservedDiskModeEnum;
import org.openapis.openapi.models.shared.PreservedStatePreservedNetworkIp;
import org.openapis.openapi.models.shared.PreservedStatePreservedNetworkIpAutoDeleteEnum;
import org.openapis.openapi.models.shared.PreservedStatePreservedNetworkIpIpAddress;
import org.openapis.openapi.models.shared.RegionInstanceGroupManagerPatchInstanceConfigReq;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeRegionInstanceGroupManagersPatchPerInstanceConfigsRequest req = new ComputeRegionInstanceGroupManagersPatchPerInstanceConfigsRequest("ab", "eum", "voluptatum") {{
                dollarXgafv = XgafvEnum.TWO;
                regionInstanceGroupManagerPatchInstanceConfigReq = new RegionInstanceGroupManagerPatchInstanceConfigReq() {{
                    perInstanceConfigs = new org.openapis.openapi.models.shared.PerInstanceConfig[]{{
                        add(new PerInstanceConfig() {{
                            fingerprint = "veritatis";
                            name = "Dianne DuBuque";
                            preservedState = new PreservedState() {{
                                disks = new java.util.HashMap<String, org.openapis.openapi.models.shared.PreservedStatePreservedDisk>() {{
                                    put("corrupti", new PreservedStatePreservedDisk() {{
                                        autoDelete = PreservedStatePreservedDiskAutoDeleteEnum.ON_PERMANENT_INSTANCE_DELETION;
                                        mode = PreservedStatePreservedDiskModeEnum.READ_WRITE;
                                        source = "tempora";
                                    }});
                                    put("ad", new PreservedStatePreservedDisk() {{
                                        autoDelete = PreservedStatePreservedDiskAutoDeleteEnum.NEVER;
                                        mode = PreservedStatePreservedDiskModeEnum.READ_ONLY;
                                        source = "harum";
                                    }});
                                    put("quidem", new PreservedStatePreservedDisk() {{
                                        autoDelete = PreservedStatePreservedDiskAutoDeleteEnum.ON_PERMANENT_INSTANCE_DELETION;
                                        mode = PreservedStatePreservedDiskModeEnum.READ_WRITE;
                                        source = "magnam";
                                    }});
                                    put("odio", new PreservedStatePreservedDisk() {{
                                        autoDelete = PreservedStatePreservedDiskAutoDeleteEnum.ON_PERMANENT_INSTANCE_DELETION;
                                        mode = PreservedStatePreservedDiskModeEnum.READ_ONLY;
                                        source = "doloribus";
                                    }});
                                }};
                                externalIPs = new java.util.HashMap<String, org.openapis.openapi.models.shared.PreservedStatePreservedNetworkIp>() {{
                                    put("nihil", new PreservedStatePreservedNetworkIp() {{
                                        autoDelete = PreservedStatePreservedNetworkIpAutoDeleteEnum.NEVER;
                                        ipAddress = new PreservedStatePreservedNetworkIpIpAddress() {{
                                            address = "73307 Bashirian Greens";
                                            literal = "ea";
                                        }};
                                    }});
                                    put("porro", new PreservedStatePreservedNetworkIp() {{
                                        autoDelete = PreservedStatePreservedNetworkIpAutoDeleteEnum.NEVER;
                                        ipAddress = new PreservedStatePreservedNetworkIpIpAddress() {{
                                            address = "986 Hailie Burg";
                                            literal = "vel";
                                        }};
                                    }});
                                    put("eveniet", new PreservedStatePreservedNetworkIp() {{
                                        autoDelete = PreservedStatePreservedNetworkIpAutoDeleteEnum.ON_PERMANENT_INSTANCE_DELETION;
                                        ipAddress = new PreservedStatePreservedNetworkIpIpAddress() {{
                                            address = "2809 Ashley Groves";
                                            literal = "quod";
                                        }};
                                    }});
                                }};
                                internalIPs = new java.util.HashMap<String, org.openapis.openapi.models.shared.PreservedStatePreservedNetworkIp>() {{
                                    put("reprehenderit", new PreservedStatePreservedNetworkIp() {{
                                        autoDelete = PreservedStatePreservedNetworkIpAutoDeleteEnum.NEVER;
                                        ipAddress = new PreservedStatePreservedNetworkIpIpAddress() {{
                                            address = "47885 Janie Trail";
                                            literal = "nesciunt";
                                        }};
                                    }});
                                }};
                                metadata = new java.util.HashMap<String, String>() {{
                                    put("recusandae", "minima");
                                    put("assumenda", "perferendis");
                                }};
                            }};
                            status = PerInstanceConfigStatusEnum.NONE;
                        }}),
                        add(new PerInstanceConfig() {{
                            fingerprint = "adipisci";
                            name = "Mrs. Naomi Wunsch";
                            preservedState = new PreservedState() {{
                                disks = new java.util.HashMap<String, org.openapis.openapi.models.shared.PreservedStatePreservedDisk>() {{
                                    put("nisi", new PreservedStatePreservedDisk() {{
                                        autoDelete = PreservedStatePreservedDiskAutoDeleteEnum.ON_PERMANENT_INSTANCE_DELETION;
                                        mode = PreservedStatePreservedDiskModeEnum.READ_ONLY;
                                        source = "est";
                                    }});
                                }};
                                externalIPs = new java.util.HashMap<String, org.openapis.openapi.models.shared.PreservedStatePreservedNetworkIp>() {{
                                    put("accusantium", new PreservedStatePreservedNetworkIp() {{
                                        autoDelete = PreservedStatePreservedNetworkIpAutoDeleteEnum.ON_PERMANENT_INSTANCE_DELETION;
                                        ipAddress = new PreservedStatePreservedNetworkIpIpAddress() {{
                                            address = "10064 Jenkins Trace";
                                            literal = "incidunt";
                                        }};
                                    }});
                                    put("deleniti", new PreservedStatePreservedNetworkIp() {{
                                        autoDelete = PreservedStatePreservedNetworkIpAutoDeleteEnum.ON_PERMANENT_INSTANCE_DELETION;
                                        ipAddress = new PreservedStatePreservedNetworkIpIpAddress() {{
                                            address = "100 Torp Light";
                                            literal = "beatae";
                                        }};
                                    }});
                                }};
                                internalIPs = new java.util.HashMap<String, org.openapis.openapi.models.shared.PreservedStatePreservedNetworkIp>() {{
                                    put("dicta", new PreservedStatePreservedNetworkIp() {{
                                        autoDelete = PreservedStatePreservedNetworkIpAutoDeleteEnum.ON_PERMANENT_INSTANCE_DELETION;
                                        ipAddress = new PreservedStatePreservedNetworkIpIpAddress() {{
                                            address = "59954 Rubye Flats";
                                            literal = "quasi";
                                        }};
                                    }});
                                    put("mollitia", new PreservedStatePreservedNetworkIp() {{
                                        autoDelete = PreservedStatePreservedNetworkIpAutoDeleteEnum.NEVER;
                                        ipAddress = new PreservedStatePreservedNetworkIpIpAddress() {{
                                            address = "3361 Cruickshank Meadow";
                                            literal = "dignissimos";
                                        }};
                                    }});
                                    put("deleniti", new PreservedStatePreservedNetworkIp() {{
                                        autoDelete = PreservedStatePreservedNetworkIpAutoDeleteEnum.ON_PERMANENT_INSTANCE_DELETION;
                                        ipAddress = new PreservedStatePreservedNetworkIpIpAddress() {{
                                            address = "99410 Davis Loop";
                                            literal = "nemo";
                                        }};
                                    }});
                                }};
                                metadata = new java.util.HashMap<String, String>() {{
                                    put("adipisci", "eum");
                                    put("dolore", "maxime");
                                    put("praesentium", "quaerat");
                                    put("maxime", "dignissimos");
                                }};
                            }};
                            status = PerInstanceConfigStatusEnum.APPLYING;
                        }}),
                        add(new PerInstanceConfig() {{
                            fingerprint = "ullam";
                            name = "Adrian Kutch DVM";
                            preservedState = new PreservedState() {{
                                disks = new java.util.HashMap<String, org.openapis.openapi.models.shared.PreservedStatePreservedDisk>() {{
                                    put("voluptatem", new PreservedStatePreservedDisk() {{
                                        autoDelete = PreservedStatePreservedDiskAutoDeleteEnum.ON_PERMANENT_INSTANCE_DELETION;
                                        mode = PreservedStatePreservedDiskModeEnum.READ_WRITE;
                                        source = "debitis";
                                    }});
                                }};
                                externalIPs = new java.util.HashMap<String, org.openapis.openapi.models.shared.PreservedStatePreservedNetworkIp>() {{
                                    put("saepe", new PreservedStatePreservedNetworkIp() {{
                                        autoDelete = PreservedStatePreservedNetworkIpAutoDeleteEnum.ON_PERMANENT_INSTANCE_DELETION;
                                        ipAddress = new PreservedStatePreservedNetworkIpIpAddress() {{
                                            address = "9534 Kemmer Freeway";
                                            literal = "eos";
                                        }};
                                    }});
                                    put("libero", new PreservedStatePreservedNetworkIp() {{
                                        autoDelete = PreservedStatePreservedNetworkIpAutoDeleteEnum.ON_PERMANENT_INSTANCE_DELETION;
                                        ipAddress = new PreservedStatePreservedNetworkIpIpAddress() {{
                                            address = "20789 Goyette Squares";
                                            literal = "voluptatum";
                                        }};
                                    }});
                                    put("tempore", new PreservedStatePreservedNetworkIp() {{
                                        autoDelete = PreservedStatePreservedNetworkIpAutoDeleteEnum.ON_PERMANENT_INSTANCE_DELETION;
                                        ipAddress = new PreservedStatePreservedNetworkIpIpAddress() {{
                                            address = "74682 Kayley Brooks";
                                            literal = "distinctio";
                                        }};
                                    }});
                                }};
                                internalIPs = new java.util.HashMap<String, org.openapis.openapi.models.shared.PreservedStatePreservedNetworkIp>() {{
                                    put("ducimus", new PreservedStatePreservedNetworkIp() {{
                                        autoDelete = PreservedStatePreservedNetworkIpAutoDeleteEnum.ON_PERMANENT_INSTANCE_DELETION;
                                        ipAddress = new PreservedStatePreservedNetworkIpIpAddress() {{
                                            address = "478 Gutkowski Mountain";
                                            literal = "esse";
                                        }};
                                    }});
                                    put("illo", new PreservedStatePreservedNetworkIp() {{
                                        autoDelete = PreservedStatePreservedNetworkIpAutoDeleteEnum.ON_PERMANENT_INSTANCE_DELETION;
                                        ipAddress = new PreservedStatePreservedNetworkIpIpAddress() {{
                                            address = "281 Van Fall";
                                            literal = "unde";
                                        }};
                                    }});
                                }};
                                metadata = new java.util.HashMap<String, String>() {{
                                    put("doloribus", "eaque");
                                    put("praesentium", "dicta");
                                    put("similique", "nostrum");
                                }};
                            }};
                            status = PerInstanceConfigStatusEnum.UNAPPLIED_DELETION;
                        }}),
                        add(new PerInstanceConfig() {{
                            fingerprint = "voluptatum";
                            name = "Saul O'Hara Jr.";
                            preservedState = new PreservedState() {{
                                disks = new java.util.HashMap<String, org.openapis.openapi.models.shared.PreservedStatePreservedDisk>() {{
                                    put("perspiciatis", new PreservedStatePreservedDisk() {{
                                        autoDelete = PreservedStatePreservedDiskAutoDeleteEnum.ON_PERMANENT_INSTANCE_DELETION;
                                        mode = PreservedStatePreservedDiskModeEnum.READ_WRITE;
                                        source = "nostrum";
                                    }});
                                }};
                                externalIPs = new java.util.HashMap<String, org.openapis.openapi.models.shared.PreservedStatePreservedNetworkIp>() {{
                                    put("dignissimos", new PreservedStatePreservedNetworkIp() {{
                                        autoDelete = PreservedStatePreservedNetworkIpAutoDeleteEnum.NEVER;
                                        ipAddress = new PreservedStatePreservedNetworkIpIpAddress() {{
                                            address = "53271 Mireille Point";
                                            literal = "tempore";
                                        }};
                                    }});
                                    put("qui", new PreservedStatePreservedNetworkIp() {{
                                        autoDelete = PreservedStatePreservedNetworkIpAutoDeleteEnum.ON_PERMANENT_INSTANCE_DELETION;
                                        ipAddress = new PreservedStatePreservedNetworkIpIpAddress() {{
                                            address = "27514 Rubye Viaduct";
                                            literal = "iste";
                                        }};
                                    }});
                                    put("ea", new PreservedStatePreservedNetworkIp() {{
                                        autoDelete = PreservedStatePreservedNetworkIpAutoDeleteEnum.NEVER;
                                        ipAddress = new PreservedStatePreservedNetworkIpIpAddress() {{
                                            address = "915 River Oval";
                                            literal = "fugit";
                                        }};
                                    }});
                                    put("praesentium", new PreservedStatePreservedNetworkIp() {{
                                        autoDelete = PreservedStatePreservedNetworkIpAutoDeleteEnum.NEVER;
                                        ipAddress = new PreservedStatePreservedNetworkIpIpAddress() {{
                                            address = "755 Wiza Run";
                                            literal = "ab";
                                        }};
                                    }});
                                }};
                                internalIPs = new java.util.HashMap<String, org.openapis.openapi.models.shared.PreservedStatePreservedNetworkIp>() {{
                                    put("consequatur", new PreservedStatePreservedNetworkIp() {{
                                        autoDelete = PreservedStatePreservedNetworkIpAutoDeleteEnum.NEVER;
                                        ipAddress = new PreservedStatePreservedNetworkIpIpAddress() {{
                                            address = "439 Susanna Course";
                                            literal = "tenetur";
                                        }};
                                    }});
                                }};
                                metadata = new java.util.HashMap<String, String>() {{
                                    put("cupiditate", "reprehenderit");
                                    put("totam", "magnam");
                                    put("sapiente", "exercitationem");
                                    put("atque", "fugiat");
                                }};
                            }};
                            status = PerInstanceConfigStatusEnum.EFFECTIVE;
                        }}),
                    }};
                }};;
                accessToken = "iure";
                alt = AltEnum.JSON;
                callback = "voluptate";
                fields = "omnis";
                key = "accusantium";
                oauthToken = "molestiae";
                prettyPrint = false;
                quotaUser = "ut";
                requestId = "repellat";
                uploadType = "labore";
                uploadProtocol = "voluptate";
                userIp = "mollitia";
            }};            

            ComputeRegionInstanceGroupManagersPatchPerInstanceConfigsResponse res = sdk.regionInstanceGroupManagers.computeRegionInstanceGroupManagersPatchPerInstanceConfigs(req, new ComputeRegionInstanceGroupManagersPatchPerInstanceConfigsSecurity() {{
                option1 = new ComputeRegionInstanceGroupManagersPatchPerInstanceConfigsSecurityOption1("at", "recusandae") {{
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

## computeRegionInstanceGroupManagersRecreateInstances

Flags the specified VM instances in the managed instance group to be immediately recreated. Each instance is recreated using the group's current configuration. This operation is marked as DONE when the flag is set even if the instances have not yet been recreated. You must separately verify the status of each instance by checking its currentAction field; for more information, see Checking the status of managed instances. If the group is part of a backend service that has enabled connection draining, it can take up to 60 seconds after the connection draining duration has elapsed before the VM instance is removed or deleted. You can specify a maximum of 1000 instances with this method per request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeRegionInstanceGroupManagersRecreateInstancesRequest;
import org.openapis.openapi.models.operations.ComputeRegionInstanceGroupManagersRecreateInstancesResponse;
import org.openapis.openapi.models.operations.ComputeRegionInstanceGroupManagersRecreateInstancesSecurity;
import org.openapis.openapi.models.operations.ComputeRegionInstanceGroupManagersRecreateInstancesSecurityOption1;
import org.openapis.openapi.models.operations.ComputeRegionInstanceGroupManagersRecreateInstancesSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.RegionInstanceGroupManagersRecreateRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeRegionInstanceGroupManagersRecreateInstancesRequest req = new ComputeRegionInstanceGroupManagersRecreateInstancesRequest("quis", "tempore", "nobis") {{
                dollarXgafv = XgafvEnum.TWO;
                regionInstanceGroupManagersRecreateRequest = new RegionInstanceGroupManagersRecreateRequest() {{
                    instances = new String[]{{
                        add("autem"),
                    }};
                }};;
                accessToken = "beatae";
                alt = AltEnum.JSON;
                callback = "debitis";
                fields = "modi";
                key = "ex";
                oauthToken = "magnam";
                prettyPrint = false;
                quotaUser = "rerum";
                requestId = "optio";
                uploadType = "consequatur";
                uploadProtocol = "commodi";
                userIp = "explicabo";
            }};            

            ComputeRegionInstanceGroupManagersRecreateInstancesResponse res = sdk.regionInstanceGroupManagers.computeRegionInstanceGroupManagersRecreateInstances(req, new ComputeRegionInstanceGroupManagersRecreateInstancesSecurity() {{
                option1 = new ComputeRegionInstanceGroupManagersRecreateInstancesSecurityOption1("quas", "necessitatibus") {{
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

## computeRegionInstanceGroupManagersResize

Changes the intended size of the managed instance group. If you increase the size, the group creates new instances using the current instance template. If you decrease the size, the group deletes one or more instances. The resize operation is marked DONE if the resize request is successful. The underlying actions take additional time. You must separately verify the status of the creating or deleting actions with the listmanagedinstances method. If the group is part of a backend service that has enabled connection draining, it can take up to 60 seconds after the connection draining duration has elapsed before the VM instance is removed or deleted.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeRegionInstanceGroupManagersResizeRequest;
import org.openapis.openapi.models.operations.ComputeRegionInstanceGroupManagersResizeResponse;
import org.openapis.openapi.models.operations.ComputeRegionInstanceGroupManagersResizeSecurity;
import org.openapis.openapi.models.operations.ComputeRegionInstanceGroupManagersResizeSecurityOption1;
import org.openapis.openapi.models.operations.ComputeRegionInstanceGroupManagersResizeSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeRegionInstanceGroupManagersResizeRequest req = new ComputeRegionInstanceGroupManagersResizeRequest("debitis", "quae", "labore", 12655L) {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "at";
                alt = AltEnum.PROTO;
                callback = "voluptate";
                fields = "eum";
                key = "ad";
                oauthToken = "quasi";
                prettyPrint = false;
                quotaUser = "ducimus";
                requestId = "blanditiis";
                uploadType = "porro";
                uploadProtocol = "eum";
                userIp = "maiores";
            }};            

            ComputeRegionInstanceGroupManagersResizeResponse res = sdk.regionInstanceGroupManagers.computeRegionInstanceGroupManagersResize(req, new ComputeRegionInstanceGroupManagersResizeSecurity() {{
                option1 = new ComputeRegionInstanceGroupManagersResizeSecurityOption1("iure", "dolor") {{
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

## computeRegionInstanceGroupManagersResizeAdvanced

Resizes the regional managed instance group with advanced configuration options like disabling creation retries. This is an extended version of the resize method. If you increase the size, the group creates new instances using the current instance template. If you decrease the size, the group deletes one or more instances. The resize operation is marked DONE if the resize request is successful. The underlying actions take additional time. You must separately verify the status of the creating or deleting actions with the get or listmanagedinstances method. If the group is part of a backend service that has enabled connection draining, it can take up to 60 seconds after the connection draining duration has elapsed before the VM instance is removed or deleted.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeRegionInstanceGroupManagersResizeAdvancedRequest;
import org.openapis.openapi.models.operations.ComputeRegionInstanceGroupManagersResizeAdvancedResponse;
import org.openapis.openapi.models.operations.ComputeRegionInstanceGroupManagersResizeAdvancedSecurity;
import org.openapis.openapi.models.operations.ComputeRegionInstanceGroupManagersResizeAdvancedSecurityOption1;
import org.openapis.openapi.models.operations.ComputeRegionInstanceGroupManagersResizeAdvancedSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.RegionInstanceGroupManagersResizeAdvancedRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeRegionInstanceGroupManagersResizeAdvancedRequest req = new ComputeRegionInstanceGroupManagersResizeAdvancedRequest("quasi", "nulla", "porro") {{
                dollarXgafv = XgafvEnum.TWO;
                regionInstanceGroupManagersResizeAdvancedRequest = new RegionInstanceGroupManagersResizeAdvancedRequest() {{
                    noCreationRetries = false;
                    targetSize = 753055;
                }};;
                accessToken = "nesciunt";
                alt = AltEnum.MEDIA;
                callback = "laboriosam";
                fields = "aperiam";
                key = "ducimus";
                oauthToken = "nihil";
                prettyPrint = false;
                quotaUser = "cumque";
                requestId = "consequatur";
                uploadType = "iste";
                uploadProtocol = "ipsum";
                userIp = "commodi";
            }};            

            ComputeRegionInstanceGroupManagersResizeAdvancedResponse res = sdk.regionInstanceGroupManagers.computeRegionInstanceGroupManagersResizeAdvanced(req, new ComputeRegionInstanceGroupManagersResizeAdvancedSecurity() {{
                option1 = new ComputeRegionInstanceGroupManagersResizeAdvancedSecurityOption1("libero", "vitae") {{
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

## computeRegionInstanceGroupManagersResumeInstances

Flags the specified instances in the managed instance group to be resumed. This method increases the targetSize and decreases the targetSuspendedSize of the managed instance group by the number of instances that you resume. The resumeInstances operation is marked DONE if the resumeInstances request is successful. The underlying actions take additional time. You must separately verify the status of the RESUMING action with the listmanagedinstances method. In this request, you can only specify instances that are suspended. For example, if an instance was previously suspended using the suspendInstances method, it can be resumed using the resumeInstances method. If a health check is attached to the managed instance group, the specified instances will be verified as healthy after they are resumed. You can specify a maximum of 1000 instances with this method per request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeRegionInstanceGroupManagersResumeInstancesRequest;
import org.openapis.openapi.models.operations.ComputeRegionInstanceGroupManagersResumeInstancesResponse;
import org.openapis.openapi.models.operations.ComputeRegionInstanceGroupManagersResumeInstancesSecurity;
import org.openapis.openapi.models.operations.ComputeRegionInstanceGroupManagersResumeInstancesSecurityOption1;
import org.openapis.openapi.models.operations.ComputeRegionInstanceGroupManagersResumeInstancesSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.RegionInstanceGroupManagersResumeInstancesRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeRegionInstanceGroupManagersResumeInstancesRequest req = new ComputeRegionInstanceGroupManagersResumeInstancesRequest("laudantium", "sed", "repudiandae") {{
                dollarXgafv = XgafvEnum.ONE;
                regionInstanceGroupManagersResumeInstancesRequest = new RegionInstanceGroupManagersResumeInstancesRequest() {{
                    instances = new String[]{{
                        add("aperiam"),
                    }};
                }};;
                accessToken = "blanditiis";
                alt = AltEnum.PROTO;
                callback = "nulla";
                fields = "distinctio";
                key = "earum";
                oauthToken = "quas";
                prettyPrint = false;
                quotaUser = "ab";
                requestId = "cumque";
                uploadType = "repellendus";
                uploadProtocol = "libero";
                userIp = "error";
            }};            

            ComputeRegionInstanceGroupManagersResumeInstancesResponse res = sdk.regionInstanceGroupManagers.computeRegionInstanceGroupManagersResumeInstances(req, new ComputeRegionInstanceGroupManagersResumeInstancesSecurity() {{
                option1 = new ComputeRegionInstanceGroupManagersResumeInstancesSecurityOption1("repudiandae", "quaerat") {{
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

## computeRegionInstanceGroupManagersSetAutoHealingPolicies

Modifies the autohealing policy for the instances in this managed instance group. [Deprecated] This method is deprecated. Use regionInstanceGroupManagers.patch instead.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeRegionInstanceGroupManagersSetAutoHealingPoliciesRequest;
import org.openapis.openapi.models.operations.ComputeRegionInstanceGroupManagersSetAutoHealingPoliciesResponse;
import org.openapis.openapi.models.operations.ComputeRegionInstanceGroupManagersSetAutoHealingPoliciesSecurity;
import org.openapis.openapi.models.operations.ComputeRegionInstanceGroupManagersSetAutoHealingPoliciesSecurityOption1;
import org.openapis.openapi.models.operations.ComputeRegionInstanceGroupManagersSetAutoHealingPoliciesSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.FixedOrPercent;
import org.openapis.openapi.models.shared.InstanceGroupManagerAutoHealingPolicy;
import org.openapis.openapi.models.shared.InstanceGroupManagerAutoHealingPolicyAutoHealingTriggers;
import org.openapis.openapi.models.shared.InstanceGroupManagerAutoHealingPolicyAutoHealingTriggersOnHealthCheckEnum;
import org.openapis.openapi.models.shared.RegionInstanceGroupManagersSetAutoHealingRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeRegionInstanceGroupManagersSetAutoHealingPoliciesRequest req = new ComputeRegionInstanceGroupManagersSetAutoHealingPoliciesRequest("fugiat", "accusantium", "nulla") {{
                dollarXgafv = XgafvEnum.TWO;
                regionInstanceGroupManagersSetAutoHealingRequest = new RegionInstanceGroupManagersSetAutoHealingRequest() {{
                    autoHealingPolicies = new org.openapis.openapi.models.shared.InstanceGroupManagerAutoHealingPolicy[]{{
                        add(new InstanceGroupManagerAutoHealingPolicy() {{
                            autoHealingTriggers = new InstanceGroupManagerAutoHealingPolicyAutoHealingTriggers() {{
                                onHealthCheck = InstanceGroupManagerAutoHealingPolicyAutoHealingTriggersOnHealthCheckEnum.OFF;
                            }};
                            healthCheck = "totam";
                            initialDelaySec = 656885;
                            maxUnavailable = new FixedOrPercent() {{
                                calculated = 193408;
                                fixed = 882526;
                                percent = 843894;
                            }};
                        }}),
                    }};
                }};;
                accessToken = "repellat";
                alt = AltEnum.MEDIA;
                callback = "beatae";
                fields = "dolore";
                key = "quaerat";
                oauthToken = "et";
                prettyPrint = false;
                quotaUser = "fugiat";
                requestId = "distinctio";
                uploadType = "at";
                uploadProtocol = "corporis";
                userIp = "dolore";
            }};            

            ComputeRegionInstanceGroupManagersSetAutoHealingPoliciesResponse res = sdk.regionInstanceGroupManagers.computeRegionInstanceGroupManagersSetAutoHealingPolicies(req, new ComputeRegionInstanceGroupManagersSetAutoHealingPoliciesSecurity() {{
                option1 = new ComputeRegionInstanceGroupManagersSetAutoHealingPoliciesSecurityOption1("qui", "quisquam") {{
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

## computeRegionInstanceGroupManagersSetInstanceTemplate

Sets the instance template to use when creating new instances or recreating instances in this group. Existing instances are not affected.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeRegionInstanceGroupManagersSetInstanceTemplateRequest;
import org.openapis.openapi.models.operations.ComputeRegionInstanceGroupManagersSetInstanceTemplateResponse;
import org.openapis.openapi.models.operations.ComputeRegionInstanceGroupManagersSetInstanceTemplateSecurity;
import org.openapis.openapi.models.operations.ComputeRegionInstanceGroupManagersSetInstanceTemplateSecurityOption1;
import org.openapis.openapi.models.operations.ComputeRegionInstanceGroupManagersSetInstanceTemplateSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.RegionInstanceGroupManagersSetTemplateRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeRegionInstanceGroupManagersSetInstanceTemplateRequest req = new ComputeRegionInstanceGroupManagersSetInstanceTemplateRequest("voluptate", "similique", "culpa") {{
                dollarXgafv = XgafvEnum.ONE;
                regionInstanceGroupManagersSetTemplateRequest = new RegionInstanceGroupManagersSetTemplateRequest() {{
                    instanceTemplate = "id";
                }};;
                accessToken = "ut";
                alt = AltEnum.JSON;
                callback = "dolor";
                fields = "sint";
                key = "provident";
                oauthToken = "reiciendis";
                prettyPrint = false;
                quotaUser = "consectetur";
                requestId = "voluptatum";
                uploadType = "atque";
                uploadProtocol = "culpa";
                userIp = "accusantium";
            }};            

            ComputeRegionInstanceGroupManagersSetInstanceTemplateResponse res = sdk.regionInstanceGroupManagers.computeRegionInstanceGroupManagersSetInstanceTemplate(req, new ComputeRegionInstanceGroupManagersSetInstanceTemplateSecurity() {{
                option1 = new ComputeRegionInstanceGroupManagersSetInstanceTemplateSecurityOption1("vel", "reiciendis") {{
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

## computeRegionInstanceGroupManagersSetTargetPools

Modifies the target pools to which all new instances in this group are assigned. Existing instances in the group are not affected.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeRegionInstanceGroupManagersSetTargetPoolsRequest;
import org.openapis.openapi.models.operations.ComputeRegionInstanceGroupManagersSetTargetPoolsResponse;
import org.openapis.openapi.models.operations.ComputeRegionInstanceGroupManagersSetTargetPoolsSecurity;
import org.openapis.openapi.models.operations.ComputeRegionInstanceGroupManagersSetTargetPoolsSecurityOption1;
import org.openapis.openapi.models.operations.ComputeRegionInstanceGroupManagersSetTargetPoolsSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.RegionInstanceGroupManagersSetTargetPoolsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeRegionInstanceGroupManagersSetTargetPoolsRequest req = new ComputeRegionInstanceGroupManagersSetTargetPoolsRequest("repudiandae", "alias", "ipsum") {{
                dollarXgafv = XgafvEnum.ONE;
                regionInstanceGroupManagersSetTargetPoolsRequest = new RegionInstanceGroupManagersSetTargetPoolsRequest() {{
                    fingerprint = "ea";
                    targetPools = new String[]{{
                        add("voluptatem"),
                        add("fugiat"),
                        add("earum"),
                        add("deleniti"),
                    }};
                }};;
                accessToken = "recusandae";
                alt = AltEnum.MEDIA;
                callback = "modi";
                fields = "repudiandae";
                key = "facere";
                oauthToken = "assumenda";
                prettyPrint = false;
                quotaUser = "in";
                requestId = "iste";
                uploadType = "enim";
                uploadProtocol = "beatae";
                userIp = "cumque";
            }};            

            ComputeRegionInstanceGroupManagersSetTargetPoolsResponse res = sdk.regionInstanceGroupManagers.computeRegionInstanceGroupManagersSetTargetPools(req, new ComputeRegionInstanceGroupManagersSetTargetPoolsSecurity() {{
                option1 = new ComputeRegionInstanceGroupManagersSetTargetPoolsSecurityOption1("recusandae", "explicabo") {{
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

## computeRegionInstanceGroupManagersStartInstances

Flags the specified instances in the managed instance group to be started. This method increases the targetSize and decreases the targetStoppedSize of the managed instance group by the number of instances that you start. The startInstances operation is marked DONE if the startInstances request is successful. The underlying actions take additional time. You must separately verify the status of the STARTING action with the listmanagedinstances method. In this request, you can only specify instances that are stopped. For example, if an instance was previously stopped using the stopInstances method, it can be started using the startInstances method. If a health check is attached to the managed instance group, the specified instances will be verified as healthy after they are started. You can specify a maximum of 1000 instances with this method per request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeRegionInstanceGroupManagersStartInstancesRequest;
import org.openapis.openapi.models.operations.ComputeRegionInstanceGroupManagersStartInstancesResponse;
import org.openapis.openapi.models.operations.ComputeRegionInstanceGroupManagersStartInstancesSecurity;
import org.openapis.openapi.models.operations.ComputeRegionInstanceGroupManagersStartInstancesSecurityOption1;
import org.openapis.openapi.models.operations.ComputeRegionInstanceGroupManagersStartInstancesSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.RegionInstanceGroupManagersStartInstancesRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeRegionInstanceGroupManagersStartInstancesRequest req = new ComputeRegionInstanceGroupManagersStartInstancesRequest("dicta", "repudiandae", "consequuntur") {{
                dollarXgafv = XgafvEnum.ONE;
                regionInstanceGroupManagersStartInstancesRequest = new RegionInstanceGroupManagersStartInstancesRequest() {{
                    instances = new String[]{{
                        add("eius"),
                        add("consequatur"),
                    }};
                }};;
                accessToken = "culpa";
                alt = AltEnum.MEDIA;
                callback = "veniam";
                fields = "quia";
                key = "ratione";
                oauthToken = "natus";
                prettyPrint = false;
                quotaUser = "neque";
                requestId = "corrupti";
                uploadType = "nemo";
                uploadProtocol = "numquam";
                userIp = "quidem";
            }};            

            ComputeRegionInstanceGroupManagersStartInstancesResponse res = sdk.regionInstanceGroupManagers.computeRegionInstanceGroupManagersStartInstances(req, new ComputeRegionInstanceGroupManagersStartInstancesSecurity() {{
                option1 = new ComputeRegionInstanceGroupManagersStartInstancesSecurityOption1("explicabo", "tenetur") {{
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

## computeRegionInstanceGroupManagersStopInstances

Flags the specified instances in the managed instance group to be immediately stopped. You can only specify instances that are running in this request. This method reduces the targetSize and increases the targetStoppedSize of the managed instance group by the number of instances that you stop. The stopInstances operation is marked DONE if the stopInstances request is successful. The underlying actions take additional time. You must separately verify the status of the STOPPING action with the listmanagedinstances method. If the standbyPolicy.initialDelaySec field is set, the group delays stopping the instances until initialDelaySec have passed from instance.creationTimestamp (that is, when the instance was created). This delay gives your application time to set itself up and initialize on the instance. If more than initialDelaySec seconds have passed since instance.creationTimestamp when this method is called, there will be zero delay. If the group is part of a backend service that has enabled connection draining, it can take up to 60 seconds after the connection draining duration has elapsed before the VM instance is stopped. Stopped instances can be started using the startInstances method. You can specify a maximum of 1000 instances with this method per request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeRegionInstanceGroupManagersStopInstancesRequest;
import org.openapis.openapi.models.operations.ComputeRegionInstanceGroupManagersStopInstancesResponse;
import org.openapis.openapi.models.operations.ComputeRegionInstanceGroupManagersStopInstancesSecurity;
import org.openapis.openapi.models.operations.ComputeRegionInstanceGroupManagersStopInstancesSecurityOption1;
import org.openapis.openapi.models.operations.ComputeRegionInstanceGroupManagersStopInstancesSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.RegionInstanceGroupManagersStopInstancesRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeRegionInstanceGroupManagersStopInstancesRequest req = new ComputeRegionInstanceGroupManagersStopInstancesRequest("placeat", "est", "suscipit") {{
                dollarXgafv = XgafvEnum.TWO;
                regionInstanceGroupManagersStopInstancesRequest = new RegionInstanceGroupManagersStopInstancesRequest() {{
                    forceStop = false;
                    instances = new String[]{{
                        add("sit"),
                    }};
                }};;
                accessToken = "animi";
                alt = AltEnum.PROTO;
                callback = "molestias";
                fields = "explicabo";
                key = "aliquid";
                oauthToken = "mollitia";
                prettyPrint = false;
                quotaUser = "at";
                requestId = "quae";
                uploadType = "distinctio";
                uploadProtocol = "assumenda";
                userIp = "magnam";
            }};            

            ComputeRegionInstanceGroupManagersStopInstancesResponse res = sdk.regionInstanceGroupManagers.computeRegionInstanceGroupManagersStopInstances(req, new ComputeRegionInstanceGroupManagersStopInstancesSecurity() {{
                option1 = new ComputeRegionInstanceGroupManagersStopInstancesSecurityOption1("quae", "magni") {{
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

## computeRegionInstanceGroupManagersSuspendInstances

Flags the specified instances in the managed instance group to be immediately suspended. You can only specify instances that are running in this request. This method reduces the targetSize and increases the targetSuspendedSize of the managed instance group by the number of instances that you suspend. The suspendInstances operation is marked DONE if the suspendInstances request is successful. The underlying actions take additional time. You must separately verify the status of the SUSPENDING action with the listmanagedinstances method. If the standbyPolicy.initialDelaySec field is set, the group delays suspension of the instances until initialDelaySec have passed from instance.creationTimestamp (that is, when the instance was created). This delay gives your application time to set itself up and initialize on the instance. If more than initialDelaySec seconds have passed since instance.creationTimestamp when this method is called, there will be zero delay. If the group is part of a backend service that has enabled connection draining, it can take up to 60 seconds after the connection draining duration has elapsed before the VM instance is suspended. Suspended instances can be resumed using the resumeInstances method. You can specify a maximum of 1000 instances with this method per request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeRegionInstanceGroupManagersSuspendInstancesRequest;
import org.openapis.openapi.models.operations.ComputeRegionInstanceGroupManagersSuspendInstancesResponse;
import org.openapis.openapi.models.operations.ComputeRegionInstanceGroupManagersSuspendInstancesSecurity;
import org.openapis.openapi.models.operations.ComputeRegionInstanceGroupManagersSuspendInstancesSecurityOption1;
import org.openapis.openapi.models.operations.ComputeRegionInstanceGroupManagersSuspendInstancesSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.RegionInstanceGroupManagersSuspendInstancesRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeRegionInstanceGroupManagersSuspendInstancesRequest req = new ComputeRegionInstanceGroupManagersSuspendInstancesRequest("molestias", "occaecati", "voluptates") {{
                dollarXgafv = XgafvEnum.ONE;
                regionInstanceGroupManagersSuspendInstancesRequest = new RegionInstanceGroupManagersSuspendInstancesRequest() {{
                    forceSuspend = false;
                    instances = new String[]{{
                        add("voluptates"),
                        add("error"),
                    }};
                }};;
                accessToken = "eligendi";
                alt = AltEnum.MEDIA;
                callback = "asperiores";
                fields = "blanditiis";
                key = "sint";
                oauthToken = "a";
                prettyPrint = false;
                quotaUser = "fugit";
                requestId = "sunt";
                uploadType = "laborum";
                uploadProtocol = "magni";
                userIp = "suscipit";
            }};            

            ComputeRegionInstanceGroupManagersSuspendInstancesResponse res = sdk.regionInstanceGroupManagers.computeRegionInstanceGroupManagersSuspendInstances(req, new ComputeRegionInstanceGroupManagersSuspendInstancesSecurity() {{
                option1 = new ComputeRegionInstanceGroupManagersSuspendInstancesSecurityOption1("quidem", "occaecati") {{
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

## computeRegionInstanceGroupManagersTestIamPermissions

Returns permissions that a caller has on the specified resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeRegionInstanceGroupManagersTestIamPermissionsRequest;
import org.openapis.openapi.models.operations.ComputeRegionInstanceGroupManagersTestIamPermissionsResponse;
import org.openapis.openapi.models.operations.ComputeRegionInstanceGroupManagersTestIamPermissionsSecurity;
import org.openapis.openapi.models.operations.ComputeRegionInstanceGroupManagersTestIamPermissionsSecurityOption1;
import org.openapis.openapi.models.operations.ComputeRegionInstanceGroupManagersTestIamPermissionsSecurityOption2;
import org.openapis.openapi.models.operations.ComputeRegionInstanceGroupManagersTestIamPermissionsSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.TestPermissionsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeRegionInstanceGroupManagersTestIamPermissionsRequest req = new ComputeRegionInstanceGroupManagersTestIamPermissionsRequest("minima", "occaecati", "laborum") {{
                dollarXgafv = XgafvEnum.ONE;
                testPermissionsRequest = new TestPermissionsRequest() {{
                    permissions = new String[]{{
                        add("impedit"),
                        add("sint"),
                        add("fugiat"),
                    }};
                }};;
                accessToken = "in";
                alt = AltEnum.PROTO;
                callback = "distinctio";
                fields = "incidunt";
                key = "laboriosam";
                oauthToken = "iste";
                prettyPrint = false;
                quotaUser = "officiis";
                uploadType = "vel";
                uploadProtocol = "beatae";
                userIp = "repudiandae";
            }};            

            ComputeRegionInstanceGroupManagersTestIamPermissionsResponse res = sdk.regionInstanceGroupManagers.computeRegionInstanceGroupManagersTestIamPermissions(req, new ComputeRegionInstanceGroupManagersTestIamPermissionsSecurity() {{
                option1 = new ComputeRegionInstanceGroupManagersTestIamPermissionsSecurityOption1("reiciendis", "assumenda") {{
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

## computeRegionInstanceGroupManagersUpdate

Updates a managed instance group using the information that you specify in the request. This operation is marked as DONE when the group is updated even if the instances in the group have not yet been updated. You must separately verify the status of the individual instances with the listmanagedinstances method. If you update your group to specify a new template or instance configuration, it's possible that your intended specification for each VM in the group is different from the current state of that VM. To learn how to apply an updated configuration to the VMs in a MIG, see Updating instances in a MIG.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeRegionInstanceGroupManagersUpdateRequest;
import org.openapis.openapi.models.operations.ComputeRegionInstanceGroupManagersUpdateResponse;
import org.openapis.openapi.models.operations.ComputeRegionInstanceGroupManagersUpdateSecurity;
import org.openapis.openapi.models.operations.ComputeRegionInstanceGroupManagersUpdateSecurityOption1;
import org.openapis.openapi.models.operations.ComputeRegionInstanceGroupManagersUpdateSecurityOption2;
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

            ComputeRegionInstanceGroupManagersUpdateRequest req = new ComputeRegionInstanceGroupManagersUpdateRequest("odit", "quos", "neque") {{
                dollarXgafv = XgafvEnum.TWO;
                instanceGroupManager1 = new InstanceGroupManager() {{
                    allInstancesConfig = new InstanceGroupManagerAllInstancesConfig() {{
                        properties = new InstancePropertiesPatch() {{
                            labels = new java.util.HashMap<String, String>() {{
                                put("neque", "veritatis");
                            }};
                            metadata = new java.util.HashMap<String, String>() {{
                                put("corporis", "nihil");
                                put("nobis", "consequuntur");
                            }};
                        }};;
                    }};;
                    autoHealingPolicies = new org.openapis.openapi.models.shared.InstanceGroupManagerAutoHealingPolicy[]{{
                        add(new InstanceGroupManagerAutoHealingPolicy() {{
                            autoHealingTriggers = new InstanceGroupManagerAutoHealingPolicyAutoHealingTriggers() {{
                                onHealthCheck = InstanceGroupManagerAutoHealingPolicyAutoHealingTriggersOnHealthCheckEnum.OFF;
                            }};
                            healthCheck = "exercitationem";
                            initialDelaySec = 469309;
                            maxUnavailable = new FixedOrPercent() {{
                                calculated = 439137;
                                fixed = 963091;
                                percent = 445791;
                            }};
                        }}),
                        add(new InstanceGroupManagerAutoHealingPolicy() {{
                            autoHealingTriggers = new InstanceGroupManagerAutoHealingPolicyAutoHealingTriggers() {{
                                onHealthCheck = InstanceGroupManagerAutoHealingPolicyAutoHealingTriggersOnHealthCheckEnum.OFF;
                            }};
                            healthCheck = "dolores";
                            initialDelaySec = 986208;
                            maxUnavailable = new FixedOrPercent() {{
                                calculated = 430678;
                                fixed = 622928;
                                percent = 74657;
                            }};
                        }}),
                        add(new InstanceGroupManagerAutoHealingPolicy() {{
                            autoHealingTriggers = new InstanceGroupManagerAutoHealingPolicyAutoHealingTriggers() {{
                                onHealthCheck = InstanceGroupManagerAutoHealingPolicyAutoHealingTriggersOnHealthCheckEnum.ON;
                            }};
                            healthCheck = "natus";
                            initialDelaySec = 843318;
                            maxUnavailable = new FixedOrPercent() {{
                                calculated = 526343;
                                fixed = 559064;
                                percent = 143684;
                            }};
                        }}),
                        add(new InstanceGroupManagerAutoHealingPolicy() {{
                            autoHealingTriggers = new InstanceGroupManagerAutoHealingPolicyAutoHealingTriggers() {{
                                onHealthCheck = InstanceGroupManagerAutoHealingPolicyAutoHealingTriggersOnHealthCheckEnum.OFF;
                            }};
                            healthCheck = "eos";
                            initialDelaySec = 600889;
                            maxUnavailable = new FixedOrPercent() {{
                                calculated = 183255;
                                fixed = 146357;
                                percent = 102937;
                            }};
                        }}),
                    }};
                    baseInstanceName = "explicabo";
                    creationTimestamp = "tenetur";
                    currentActions = new InstanceGroupManagerActionsSummary() {{
                        abandoning = 646772;
                        creating = 918882;
                        creatingAtomically = 160780;
                        creatingWithoutRetries = 695425;
                        deleting = 162746;
                        none = 363763;
                        queuing = 563564;
                        recreating = 632690;
                        refreshing = 237732;
                        restarting = 546492;
                        resuming = 62526;
                        starting = 993144;
                        stopping = 909633;
                        suspending = 666372;
                        verifying = 548446;
                    }};;
                    description = "perferendis";
                    distributionPolicy = new DistributionPolicy() {{
                        targetShape = DistributionPolicyTargetShapeEnum.ANY_SINGLE_ZONE;
                        zones = new org.openapis.openapi.models.shared.DistributionPolicyZoneConfiguration[]{{
                            add(new DistributionPolicyZoneConfiguration() {{
                                zone = "sit";
                            }}),
                            add(new DistributionPolicyZoneConfiguration() {{
                                zone = "laboriosam";
                            }}),
                        }};
                    }};;
                    failoverAction = InstanceGroupManagerFailoverActionEnum.UNKNOWN;
                    fingerprint = "dicta";
                    id = "accusamus";
                    instanceFlexibilityPolicy = new InstanceGroupManagerInstanceFlexibilityPolicy() {{
                        instanceSelectionLists = new java.util.HashMap<String, org.openapis.openapi.models.shared.InstanceGroupManagerInstanceFlexibilityPolicyInstanceSelection>() {{
                            put("similique", new InstanceGroupManagerInstanceFlexibilityPolicyInstanceSelection() {{
                                machineTypes = new String[]{{
                                    add("nemo"),
                                    add("ab"),
                                }};
                                rank = 542120;
                            }});
                            put("laboriosam", new InstanceGroupManagerInstanceFlexibilityPolicyInstanceSelection() {{
                                machineTypes = new String[]{{
                                    add("eum"),
                                }};
                                rank = 522687;
                            }});
                            put("repudiandae", new InstanceGroupManagerInstanceFlexibilityPolicyInstanceSelection() {{
                                machineTypes = new String[]{{
                                    add("incidunt"),
                                }};
                                rank = 3366;
                            }});
                            put("itaque", new InstanceGroupManagerInstanceFlexibilityPolicyInstanceSelection() {{
                                machineTypes = new String[]{{
                                    add("ipsum"),
                                    add("esse"),
                                    add("corrupti"),
                                }};
                                rank = 220067;
                            }});
                        }};
                    }};;
                    instanceGroup = "excepturi";
                    instanceLifecyclePolicy = new InstanceGroupManagerInstanceLifecyclePolicy() {{
                        defaultActionOnFailure = InstanceGroupManagerInstanceLifecyclePolicyDefaultActionOnFailureEnum.REPAIR;
                        forceUpdateOnRepair = InstanceGroupManagerInstanceLifecyclePolicyForceUpdateOnRepairEnum.YES;
                        metadataBasedReadinessSignal = new InstanceGroupManagerInstanceLifecyclePolicyMetadataBasedReadinessSignal() {{
                            timeoutSec = 477740;
                        }};;
                    }};;
                    instanceTemplate = "illo";
                    kind = "fuga";
                    listManagedInstancesResults = InstanceGroupManagerListManagedInstancesResultsEnum.PAGELESS;
                    name = "April Gusikowski PhD";
                    namedPorts = new org.openapis.openapi.models.shared.NamedPort[]{{
                        add(new NamedPort() {{
                            name = "Sergio Raynor DVM";
                            port = 216003;
                        }}),
                        add(new NamedPort() {{
                            name = "Jerald Dickens";
                            port = 976320;
                        }}),
                    }};
                    region = "necessitatibus";
                    selfLink = "autem";
                    selfLinkWithId = "voluptates";
                    serviceAccount = "nemo";
                    standbyPolicy = new InstanceGroupManagerStandbyPolicy() {{
                        initialDelaySec = 532824;
                    }};;
                    statefulPolicy = new StatefulPolicy() {{
                        preservedState = new StatefulPolicyPreservedState() {{
                            disks = new java.util.HashMap<String, org.openapis.openapi.models.shared.StatefulPolicyPreservedStateDiskDevice>() {{
                                put("sapiente", new StatefulPolicyPreservedStateDiskDevice() {{
                                    autoDelete = StatefulPolicyPreservedStateDiskDeviceAutoDeleteEnum.ON_PERMANENT_INSTANCE_DELETION;
                                }});
                                put("esse", new StatefulPolicyPreservedStateDiskDevice() {{
                                    autoDelete = StatefulPolicyPreservedStateDiskDeviceAutoDeleteEnum.NEVER;
                                }});
                            }};
                            externalIPs = new java.util.HashMap<String, org.openapis.openapi.models.shared.StatefulPolicyPreservedStateNetworkIp>() {{
                                put("mollitia", new StatefulPolicyPreservedStateNetworkIp() {{
                                    autoDelete = StatefulPolicyPreservedStateNetworkIpAutoDeleteEnum.ON_PERMANENT_INSTANCE_DELETION;
                                }});
                                put("maiores", new StatefulPolicyPreservedStateNetworkIp() {{
                                    autoDelete = StatefulPolicyPreservedStateNetworkIpAutoDeleteEnum.NEVER;
                                }});
                                put("atque", new StatefulPolicyPreservedStateNetworkIp() {{
                                    autoDelete = StatefulPolicyPreservedStateNetworkIpAutoDeleteEnum.NEVER;
                                }});
                                put("rem", new StatefulPolicyPreservedStateNetworkIp() {{
                                    autoDelete = StatefulPolicyPreservedStateNetworkIpAutoDeleteEnum.NEVER;
                                }});
                            }};
                            internalIPs = new java.util.HashMap<String, org.openapis.openapi.models.shared.StatefulPolicyPreservedStateNetworkIp>() {{
                                put("aliquid", new StatefulPolicyPreservedStateNetworkIp() {{
                                    autoDelete = StatefulPolicyPreservedStateNetworkIpAutoDeleteEnum.NEVER;
                                }});
                                put("laboriosam", new StatefulPolicyPreservedStateNetworkIp() {{
                                    autoDelete = StatefulPolicyPreservedStateNetworkIpAutoDeleteEnum.NEVER;
                                }});
                            }};
                        }};;
                    }};;
                    status = new InstanceGroupManagerStatus() {{
                        allInstancesConfig = new InstanceGroupManagerStatusAllInstancesConfig() {{
                            currentRevision = "laborum";
                            effective = false;
                        }};;
                        autoscaler = "culpa";
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
                        add("eligendi"),
                        add("enim"),
                    }};
                    targetSize = 594529;
                    targetSizeUnit = InstanceGroupManagerTargetSizeUnitEnum.VCPU;
                    targetStoppedSize = 787735;
                    targetSuspendedSize = 904460;
                    updatePolicy = new InstanceGroupManagerUpdatePolicy() {{
                        instanceRedistributionType = InstanceGroupManagerUpdatePolicyInstanceRedistributionTypeEnum.PROACTIVE;
                        maxSurge = new FixedOrPercent() {{
                            calculated = 364819;
                            fixed = 829699;
                            percent = 178064;
                        }};;
                        maxUnavailable = new FixedOrPercent() {{
                            calculated = 256513;
                            fixed = 541914;
                            percent = 915396;
                        }};;
                        minReadySec = 226813;
                        minimalAction = InstanceGroupManagerUpdatePolicyMinimalActionEnum.RESTART;
                        mostDisruptiveAllowedAction = InstanceGroupManagerUpdatePolicyMostDisruptiveAllowedActionEnum.RESTART;
                        replacementMethod = InstanceGroupManagerUpdatePolicyReplacementMethodEnum.RECREATE;
                        type = InstanceGroupManagerUpdatePolicyTypeEnum.OPPORTUNISTIC;
                    }};;
                    versions = new org.openapis.openapi.models.shared.InstanceGroupManagerVersion[]{{
                        add(new InstanceGroupManagerVersion() {{
                            instanceTemplate = "blanditiis";
                            name = "Perry Carroll";
                            tag = "nam";
                            targetSize = new FixedOrPercent() {{
                                calculated = 833105;
                                fixed = 930888;
                                percent = 965809;
                            }};
                        }}),
                        add(new InstanceGroupManagerVersion() {{
                            instanceTemplate = "eius";
                            name = "Seth Kuhic V";
                            tag = "voluptates";
                            targetSize = new FixedOrPercent() {{
                                calculated = 696837;
                                fixed = 33674;
                                percent = 8200;
                            }};
                        }}),
                        add(new InstanceGroupManagerVersion() {{
                            instanceTemplate = "nesciunt";
                            name = "Tara Kris";
                            tag = "dolor";
                            targetSize = new FixedOrPercent() {{
                                calculated = 731511;
                                fixed = 304502;
                                percent = 131285;
                            }};
                        }}),
                        add(new InstanceGroupManagerVersion() {{
                            instanceTemplate = "optio";
                            name = "Mr. Tasha Mraz";
                            tag = "placeat";
                            targetSize = new FixedOrPercent() {{
                                calculated = 516228;
                                fixed = 938627;
                                percent = 478413;
                            }};
                        }}),
                    }};
                    zone = "optio";
                }};;
                accessToken = "omnis";
                alt = AltEnum.MEDIA;
                callback = "in";
                fields = "culpa";
                key = "voluptate";
                oauthToken = "facere";
                prettyPrint = false;
                quotaUser = "soluta";
                requestId = "dolorem";
                uploadType = "voluptas";
                uploadProtocol = "nobis";
                userIp = "suscipit";
            }};            

            ComputeRegionInstanceGroupManagersUpdateResponse res = sdk.regionInstanceGroupManagers.computeRegionInstanceGroupManagersUpdate(req, new ComputeRegionInstanceGroupManagersUpdateSecurity() {{
                option1 = new ComputeRegionInstanceGroupManagersUpdateSecurityOption1("nemo", "maxime") {{
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

## computeRegionInstanceGroupManagersUpdatePerInstanceConfigs

Inserts or updates per-instance configurations for the managed instance group. perInstanceConfig.name serves as a key used to distinguish whether to perform insert or patch.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeRegionInstanceGroupManagersUpdatePerInstanceConfigsRequest;
import org.openapis.openapi.models.operations.ComputeRegionInstanceGroupManagersUpdatePerInstanceConfigsResponse;
import org.openapis.openapi.models.operations.ComputeRegionInstanceGroupManagersUpdatePerInstanceConfigsSecurity;
import org.openapis.openapi.models.operations.ComputeRegionInstanceGroupManagersUpdatePerInstanceConfigsSecurityOption1;
import org.openapis.openapi.models.operations.ComputeRegionInstanceGroupManagersUpdatePerInstanceConfigsSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.PerInstanceConfig;
import org.openapis.openapi.models.shared.PerInstanceConfigStatusEnum;
import org.openapis.openapi.models.shared.PreservedState;
import org.openapis.openapi.models.shared.PreservedStatePreservedDisk;
import org.openapis.openapi.models.shared.PreservedStatePreservedDiskAutoDeleteEnum;
import org.openapis.openapi.models.shared.PreservedStatePreservedDiskModeEnum;
import org.openapis.openapi.models.shared.PreservedStatePreservedNetworkIp;
import org.openapis.openapi.models.shared.PreservedStatePreservedNetworkIpAutoDeleteEnum;
import org.openapis.openapi.models.shared.PreservedStatePreservedNetworkIpIpAddress;
import org.openapis.openapi.models.shared.RegionInstanceGroupManagerUpdateInstanceConfigReq;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeRegionInstanceGroupManagersUpdatePerInstanceConfigsRequest req = new ComputeRegionInstanceGroupManagersUpdatePerInstanceConfigsRequest("quaerat", "asperiores", "provident") {{
                dollarXgafv = XgafvEnum.TWO;
                regionInstanceGroupManagerUpdateInstanceConfigReq = new RegionInstanceGroupManagerUpdateInstanceConfigReq() {{
                    perInstanceConfigs = new org.openapis.openapi.models.shared.PerInstanceConfig[]{{
                        add(new PerInstanceConfig() {{
                            fingerprint = "voluptas";
                            name = "Candace Hammes";
                            preservedState = new PreservedState() {{
                                disks = new java.util.HashMap<String, org.openapis.openapi.models.shared.PreservedStatePreservedDisk>() {{
                                    put("ab", new PreservedStatePreservedDisk() {{
                                        autoDelete = PreservedStatePreservedDiskAutoDeleteEnum.ON_PERMANENT_INSTANCE_DELETION;
                                        mode = PreservedStatePreservedDiskModeEnum.READ_ONLY;
                                        source = "fugit";
                                    }});
                                    put("maiores", new PreservedStatePreservedDisk() {{
                                        autoDelete = PreservedStatePreservedDiskAutoDeleteEnum.NEVER;
                                        mode = PreservedStatePreservedDiskModeEnum.READ_ONLY;
                                        source = "quisquam";
                                    }});
                                }};
                                externalIPs = new java.util.HashMap<String, org.openapis.openapi.models.shared.PreservedStatePreservedNetworkIp>() {{
                                    put("ut", new PreservedStatePreservedNetworkIp() {{
                                        autoDelete = PreservedStatePreservedNetworkIpAutoDeleteEnum.ON_PERMANENT_INSTANCE_DELETION;
                                        ipAddress = new PreservedStatePreservedNetworkIpIpAddress() {{
                                            address = "2335 Jakubowski Court";
                                            literal = "earum";
                                        }};
                                    }});
                                }};
                                internalIPs = new java.util.HashMap<String, org.openapis.openapi.models.shared.PreservedStatePreservedNetworkIp>() {{
                                    put("nobis", new PreservedStatePreservedNetworkIp() {{
                                        autoDelete = PreservedStatePreservedNetworkIpAutoDeleteEnum.NEVER;
                                        ipAddress = new PreservedStatePreservedNetworkIpIpAddress() {{
                                            address = "617 Jerrod Landing";
                                            literal = "fugiat";
                                        }};
                                    }});
                                    put("minima", new PreservedStatePreservedNetworkIp() {{
                                        autoDelete = PreservedStatePreservedNetworkIpAutoDeleteEnum.NEVER;
                                        ipAddress = new PreservedStatePreservedNetworkIpIpAddress() {{
                                            address = "504 Elmer Avenue";
                                            literal = "quis";
                                        }};
                                    }});
                                }};
                                metadata = new java.util.HashMap<String, String>() {{
                                    put("labore", "dicta");
                                }};
                            }};
                            status = PerInstanceConfigStatusEnum.DELETING;
                        }}),
                        add(new PerInstanceConfig() {{
                            fingerprint = "delectus";
                            name = "Willie Heaney";
                            preservedState = new PreservedState() {{
                                disks = new java.util.HashMap<String, org.openapis.openapi.models.shared.PreservedStatePreservedDisk>() {{
                                    put("natus", new PreservedStatePreservedDisk() {{
                                        autoDelete = PreservedStatePreservedDiskAutoDeleteEnum.ON_PERMANENT_INSTANCE_DELETION;
                                        mode = PreservedStatePreservedDiskModeEnum.READ_ONLY;
                                        source = "nemo";
                                    }});
                                }};
                                externalIPs = new java.util.HashMap<String, org.openapis.openapi.models.shared.PreservedStatePreservedNetworkIp>() {{
                                    put("iure", new PreservedStatePreservedNetworkIp() {{
                                        autoDelete = PreservedStatePreservedNetworkIpAutoDeleteEnum.ON_PERMANENT_INSTANCE_DELETION;
                                        ipAddress = new PreservedStatePreservedNetworkIpIpAddress() {{
                                            address = "79385 Rylee Springs";
                                            literal = "officiis";
                                        }};
                                    }});
                                }};
                                internalIPs = new java.util.HashMap<String, org.openapis.openapi.models.shared.PreservedStatePreservedNetworkIp>() {{
                                    put("dolor", new PreservedStatePreservedNetworkIp() {{
                                        autoDelete = PreservedStatePreservedNetworkIpAutoDeleteEnum.ON_PERMANENT_INSTANCE_DELETION;
                                        ipAddress = new PreservedStatePreservedNetworkIpIpAddress() {{
                                            address = "35979 Rafael Alley";
                                            literal = "velit";
                                        }};
                                    }});
                                    put("ipsum", new PreservedStatePreservedNetworkIp() {{
                                        autoDelete = PreservedStatePreservedNetworkIpAutoDeleteEnum.ON_PERMANENT_INSTANCE_DELETION;
                                        ipAddress = new PreservedStatePreservedNetworkIpIpAddress() {{
                                            address = "741 Swift Villages";
                                            literal = "veritatis";
                                        }};
                                    }});
                                }};
                                metadata = new java.util.HashMap<String, String>() {{
                                    put("et", "quae");
                                    put("architecto", "aspernatur");
                                    put("accusantium", "ipsam");
                                }};
                            }};
                            status = PerInstanceConfigStatusEnum.UNAPPLIED_DELETION;
                        }}),
                        add(new PerInstanceConfig() {{
                            fingerprint = "cumque";
                            name = "Mrs. Adrian Weissnat";
                            preservedState = new PreservedState() {{
                                disks = new java.util.HashMap<String, org.openapis.openapi.models.shared.PreservedStatePreservedDisk>() {{
                                    put("aut", new PreservedStatePreservedDisk() {{
                                        autoDelete = PreservedStatePreservedDiskAutoDeleteEnum.NEVER;
                                        mode = PreservedStatePreservedDiskModeEnum.READ_WRITE;
                                        source = "eaque";
                                    }});
                                    put("laborum", new PreservedStatePreservedDisk() {{
                                        autoDelete = PreservedStatePreservedDiskAutoDeleteEnum.ON_PERMANENT_INSTANCE_DELETION;
                                        mode = PreservedStatePreservedDiskModeEnum.READ_WRITE;
                                        source = "cupiditate";
                                    }});
                                }};
                                externalIPs = new java.util.HashMap<String, org.openapis.openapi.models.shared.PreservedStatePreservedNetworkIp>() {{
                                    put("dignissimos", new PreservedStatePreservedNetworkIp() {{
                                        autoDelete = PreservedStatePreservedNetworkIpAutoDeleteEnum.NEVER;
                                        ipAddress = new PreservedStatePreservedNetworkIpIpAddress() {{
                                            address = "7946 Daugherty Road";
                                            literal = "doloremque";
                                        }};
                                    }});
                                    put("et", new PreservedStatePreservedNetworkIp() {{
                                        autoDelete = PreservedStatePreservedNetworkIpAutoDeleteEnum.ON_PERMANENT_INSTANCE_DELETION;
                                        ipAddress = new PreservedStatePreservedNetworkIpIpAddress() {{
                                            address = "484 Adelbert Bypass";
                                            literal = "error";
                                        }};
                                    }});
                                    put("explicabo", new PreservedStatePreservedNetworkIp() {{
                                        autoDelete = PreservedStatePreservedNetworkIpAutoDeleteEnum.ON_PERMANENT_INSTANCE_DELETION;
                                        ipAddress = new PreservedStatePreservedNetworkIpIpAddress() {{
                                            address = "091 Murray Ridge";
                                            literal = "illum";
                                        }};
                                    }});
                                }};
                                internalIPs = new java.util.HashMap<String, org.openapis.openapi.models.shared.PreservedStatePreservedNetworkIp>() {{
                                    put("culpa", new PreservedStatePreservedNetworkIp() {{
                                        autoDelete = PreservedStatePreservedNetworkIpAutoDeleteEnum.ON_PERMANENT_INSTANCE_DELETION;
                                        ipAddress = new PreservedStatePreservedNetworkIpIpAddress() {{
                                            address = "24583 Frederick Throughway";
                                            literal = "architecto";
                                        }};
                                    }});
                                    put("ex", new PreservedStatePreservedNetworkIp() {{
                                        autoDelete = PreservedStatePreservedNetworkIpAutoDeleteEnum.NEVER;
                                        ipAddress = new PreservedStatePreservedNetworkIpIpAddress() {{
                                            address = "255 Hahn Gateway";
                                            literal = "qui";
                                        }};
                                    }});
                                }};
                                metadata = new java.util.HashMap<String, String>() {{
                                    put("maxime", "ab");
                                }};
                            }};
                            status = PerInstanceConfigStatusEnum.UNAPPLIED;
                        }}),
                        add(new PerInstanceConfig() {{
                            fingerprint = "incidunt";
                            name = "Tyrone Monahan";
                            preservedState = new PreservedState() {{
                                disks = new java.util.HashMap<String, org.openapis.openapi.models.shared.PreservedStatePreservedDisk>() {{
                                    put("iure", new PreservedStatePreservedDisk() {{
                                        autoDelete = PreservedStatePreservedDiskAutoDeleteEnum.NEVER;
                                        mode = PreservedStatePreservedDiskModeEnum.READ_WRITE;
                                        source = "laudantium";
                                    }});
                                    put("voluptatibus", new PreservedStatePreservedDisk() {{
                                        autoDelete = PreservedStatePreservedDiskAutoDeleteEnum.NEVER;
                                        mode = PreservedStatePreservedDiskModeEnum.READ_WRITE;
                                        source = "praesentium";
                                    }});
                                    put("fugit", new PreservedStatePreservedDisk() {{
                                        autoDelete = PreservedStatePreservedDiskAutoDeleteEnum.ON_PERMANENT_INSTANCE_DELETION;
                                        mode = PreservedStatePreservedDiskModeEnum.READ_WRITE;
                                        source = "aliquid";
                                    }});
                                    put("doloribus", new PreservedStatePreservedDisk() {{
                                        autoDelete = PreservedStatePreservedDiskAutoDeleteEnum.ON_PERMANENT_INSTANCE_DELETION;
                                        mode = PreservedStatePreservedDiskModeEnum.READ_WRITE;
                                        source = "blanditiis";
                                    }});
                                }};
                                externalIPs = new java.util.HashMap<String, org.openapis.openapi.models.shared.PreservedStatePreservedNetworkIp>() {{
                                    put("quas", new PreservedStatePreservedNetworkIp() {{
                                        autoDelete = PreservedStatePreservedNetworkIpAutoDeleteEnum.ON_PERMANENT_INSTANCE_DELETION;
                                        ipAddress = new PreservedStatePreservedNetworkIpIpAddress() {{
                                            address = "7770 Boehm Cliff";
                                            literal = "maiores";
                                        }};
                                    }});
                                    put("quidem", new PreservedStatePreservedNetworkIp() {{
                                        autoDelete = PreservedStatePreservedNetworkIpAutoDeleteEnum.NEVER;
                                        ipAddress = new PreservedStatePreservedNetworkIpIpAddress() {{
                                            address = "985 Lennie Gateway";
                                            literal = "dolorum";
                                        }};
                                    }});
                                    put("praesentium", new PreservedStatePreservedNetworkIp() {{
                                        autoDelete = PreservedStatePreservedNetworkIpAutoDeleteEnum.NEVER;
                                        ipAddress = new PreservedStatePreservedNetworkIpIpAddress() {{
                                            address = "32588 Hills Underpass";
                                            literal = "unde";
                                        }};
                                    }});
                                }};
                                internalIPs = new java.util.HashMap<String, org.openapis.openapi.models.shared.PreservedStatePreservedNetworkIp>() {{
                                    put("fugiat", new PreservedStatePreservedNetworkIp() {{
                                        autoDelete = PreservedStatePreservedNetworkIpAutoDeleteEnum.NEVER;
                                        ipAddress = new PreservedStatePreservedNetworkIpIpAddress() {{
                                            address = "8789 Dawson Mountain";
                                            literal = "doloremque";
                                        }};
                                    }});
                                    put("earum", new PreservedStatePreservedNetworkIp() {{
                                        autoDelete = PreservedStatePreservedNetworkIpAutoDeleteEnum.NEVER;
                                        ipAddress = new PreservedStatePreservedNetworkIpIpAddress() {{
                                            address = "30006 Blanche Street";
                                            literal = "atque";
                                        }};
                                    }});
                                    put("esse", new PreservedStatePreservedNetworkIp() {{
                                        autoDelete = PreservedStatePreservedNetworkIpAutoDeleteEnum.ON_PERMANENT_INSTANCE_DELETION;
                                        ipAddress = new PreservedStatePreservedNetworkIpIpAddress() {{
                                            address = "37163 Leda Club";
                                            literal = "alias";
                                        }};
                                    }});
                                }};
                                metadata = new java.util.HashMap<String, String>() {{
                                    put("maiores", "repellendus");
                                    put("ratione", "tenetur");
                                }};
                            }};
                            status = PerInstanceConfigStatusEnum.UNAPPLIED;
                        }}),
                    }};
                }};;
                accessToken = "laudantium";
                alt = AltEnum.JSON;
                callback = "sequi";
                fields = "ipsam";
                key = "molestias";
                oauthToken = "autem";
                prettyPrint = false;
                quotaUser = "voluptatem";
                requestId = "illo";
                uploadType = "cupiditate";
                uploadProtocol = "nesciunt";
                userIp = "exercitationem";
            }};            

            ComputeRegionInstanceGroupManagersUpdatePerInstanceConfigsResponse res = sdk.regionInstanceGroupManagers.computeRegionInstanceGroupManagersUpdatePerInstanceConfigs(req, new ComputeRegionInstanceGroupManagersUpdatePerInstanceConfigsSecurity() {{
                option1 = new ComputeRegionInstanceGroupManagersUpdatePerInstanceConfigsSecurityOption1("pariatur", "voluptatum") {{
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
