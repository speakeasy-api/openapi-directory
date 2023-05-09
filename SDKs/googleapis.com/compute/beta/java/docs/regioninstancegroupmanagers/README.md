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
* [computeRegionInstanceGroupManagersSetAutoHealingPolicies](#computeregioninstancegroupmanagerssetautohealingpolicies) - Modifies the autohealing policy for the instances in this managed instance group. [Deprecated] This method is deprecated. Use regionInstanceGroupManagers.patch instead.
* [computeRegionInstanceGroupManagersSetInstanceTemplate](#computeregioninstancegroupmanagerssetinstancetemplate) - Sets the instance template to use when creating new instances or recreating instances in this group. Existing instances are not affected.
* [computeRegionInstanceGroupManagersSetTargetPools](#computeregioninstancegroupmanagerssettargetpools) - Modifies the target pools to which all new instances in this group are assigned. Existing instances in the group are not affected.
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

            ComputeRegionInstanceGroupManagersAbandonInstancesRequest req = new ComputeRegionInstanceGroupManagersAbandonInstancesRequest("totam", "nam", "ratione") {{
                dollarXgafv = XgafvEnum.ONE;
                regionInstanceGroupManagersAbandonInstancesRequest = new RegionInstanceGroupManagersAbandonInstancesRequest() {{
                    instances = new String[]{{
                        add("magnam"),
                        add("reprehenderit"),
                        add("repellendus"),
                        add("dignissimos"),
                    }};
                }};;
                accessToken = "et";
                alt = AltEnum.JSON;
                callback = "cupiditate";
                fields = "velit";
                key = "officiis";
                oauthToken = "minus";
                prettyPrint = false;
                quotaUser = "inventore";
                requestId = "odio";
                uploadType = "magni";
                uploadProtocol = "numquam";
                userIp = "architecto";
            }};            

            ComputeRegionInstanceGroupManagersAbandonInstancesResponse res = sdk.regionInstanceGroupManagers.computeRegionInstanceGroupManagersAbandonInstances(req, new ComputeRegionInstanceGroupManagersAbandonInstancesSecurity() {{
                option1 = new ComputeRegionInstanceGroupManagersAbandonInstancesSecurityOption1("veritatis", "beatae") {{
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
import org.openapis.openapi.models.shared.RegionInstanceGroupManagersApplyUpdatesRequestMinimalActionEnum;
import org.openapis.openapi.models.shared.RegionInstanceGroupManagersApplyUpdatesRequestMostDisruptiveAllowedActionEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeRegionInstanceGroupManagersApplyUpdatesToInstancesRequest req = new ComputeRegionInstanceGroupManagersApplyUpdatesToInstancesRequest("repellendus", "maxime", "facere") {{
                dollarXgafv = XgafvEnum.TWO;
                regionInstanceGroupManagersApplyUpdatesRequest = new RegionInstanceGroupManagersApplyUpdatesRequest() {{
                    allInstances = false;
                    instances = new String[]{{
                        add("dolor"),
                        add("eos"),
                    }};
                    minimalAction = RegionInstanceGroupManagersApplyUpdatesRequestMinimalActionEnum.REFRESH;
                    mostDisruptiveAllowedAction = RegionInstanceGroupManagersApplyUpdatesRequestMostDisruptiveAllowedActionEnum.REFRESH;
                }};;
                accessToken = "sint";
                alt = AltEnum.JSON;
                callback = "rerum";
                fields = "praesentium";
                key = "corporis";
                oauthToken = "autem";
                prettyPrint = false;
                quotaUser = "corporis";
                uploadType = "quos";
                uploadProtocol = "nisi";
                userIp = "deserunt";
            }};            

            ComputeRegionInstanceGroupManagersApplyUpdatesToInstancesResponse res = sdk.regionInstanceGroupManagers.computeRegionInstanceGroupManagersApplyUpdatesToInstances(req, new ComputeRegionInstanceGroupManagersApplyUpdatesToInstancesSecurity() {{
                option1 = new ComputeRegionInstanceGroupManagersApplyUpdatesToInstancesSecurityOption1("consequuntur", "non") {{
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

            ComputeRegionInstanceGroupManagersCreateInstancesRequest req = new ComputeRegionInstanceGroupManagersCreateInstancesRequest("doloremque", "iure", "natus") {{
                dollarXgafv = XgafvEnum.TWO;
                regionInstanceGroupManagersCreateInstancesRequest = new RegionInstanceGroupManagersCreateInstancesRequest() {{
                    instances = new org.openapis.openapi.models.shared.PerInstanceConfig[]{{
                        add(new PerInstanceConfig() {{
                            fingerprint = "quia";
                            name = "Delores Kirlin DDS";
                            preservedState = new PreservedState() {{
                                disks = new java.util.HashMap<String, org.openapis.openapi.models.shared.PreservedStatePreservedDisk>() {{
                                    put("nemo", new PreservedStatePreservedDisk() {{
                                        autoDelete = PreservedStatePreservedDiskAutoDeleteEnum.ON_PERMANENT_INSTANCE_DELETION;
                                        mode = PreservedStatePreservedDiskModeEnum.READ_ONLY;
                                        source = "itaque";
                                    }});
                                    put("ipsum", new PreservedStatePreservedDisk() {{
                                        autoDelete = PreservedStatePreservedDiskAutoDeleteEnum.NEVER;
                                        mode = PreservedStatePreservedDiskModeEnum.READ_ONLY;
                                        source = "velit";
                                    }});
                                }};
                                externalIPs = new java.util.HashMap<String, org.openapis.openapi.models.shared.PreservedStatePreservedNetworkIp>() {{
                                    put("reprehenderit", new PreservedStatePreservedNetworkIp() {{
                                        autoDelete = PreservedStatePreservedNetworkIpAutoDeleteEnum.ON_PERMANENT_INSTANCE_DELETION;
                                        ipAddress = new PreservedStatePreservedNetworkIpIpAddress() {{
                                            address = "49794 Brenda Roads";
                                            literal = "fugit";
                                        }};
                                    }});
                                    put("iure", new PreservedStatePreservedNetworkIp() {{
                                        autoDelete = PreservedStatePreservedNetworkIpAutoDeleteEnum.ON_PERMANENT_INSTANCE_DELETION;
                                        ipAddress = new PreservedStatePreservedNetworkIpIpAddress() {{
                                            address = "656 Clifton Brook";
                                            literal = "vel";
                                        }};
                                    }});
                                    put("accusamus", new PreservedStatePreservedNetworkIp() {{
                                        autoDelete = PreservedStatePreservedNetworkIpAutoDeleteEnum.NEVER;
                                        ipAddress = new PreservedStatePreservedNetworkIpIpAddress() {{
                                            address = "3221 Kaylah Lights";
                                            literal = "rerum";
                                        }};
                                    }});
                                }};
                                internalIPs = new java.util.HashMap<String, org.openapis.openapi.models.shared.PreservedStatePreservedNetworkIp>() {{
                                    put("error", new PreservedStatePreservedNetworkIp() {{
                                        autoDelete = PreservedStatePreservedNetworkIpAutoDeleteEnum.NEVER;
                                        ipAddress = new PreservedStatePreservedNetworkIpIpAddress() {{
                                            address = "08445 Dylan Rapid";
                                            literal = "delectus";
                                        }};
                                    }});
                                    put("nihil", new PreservedStatePreservedNetworkIp() {{
                                        autoDelete = PreservedStatePreservedNetworkIpAutoDeleteEnum.NEVER;
                                        ipAddress = new PreservedStatePreservedNetworkIpIpAddress() {{
                                            address = "1523 Ferry Mall";
                                            literal = "eveniet";
                                        }};
                                    }});
                                }};
                                metadata = new java.util.HashMap<String, String>() {{
                                    put("maxime", "maiores");
                                    put("veniam", "blanditiis");
                                    put("labore", "culpa");
                                    put("eligendi", "ullam");
                                }};
                            }};
                            status = PerInstanceConfigStatusEnum.UNAPPLIED;
                        }}),
                        add(new PerInstanceConfig() {{
                            fingerprint = "porro";
                            name = "Mattie Stark";
                            preservedState = new PreservedState() {{
                                disks = new java.util.HashMap<String, org.openapis.openapi.models.shared.PreservedStatePreservedDisk>() {{
                                    put("quasi", new PreservedStatePreservedDisk() {{
                                        autoDelete = PreservedStatePreservedDiskAutoDeleteEnum.ON_PERMANENT_INSTANCE_DELETION;
                                        mode = PreservedStatePreservedDiskModeEnum.READ_WRITE;
                                        source = "minima";
                                    }});
                                    put("ad", new PreservedStatePreservedDisk() {{
                                        autoDelete = PreservedStatePreservedDiskAutoDeleteEnum.NEVER;
                                        mode = PreservedStatePreservedDiskModeEnum.READ_WRITE;
                                        source = "dolores";
                                    }});
                                    put("maxime", new PreservedStatePreservedDisk() {{
                                        autoDelete = PreservedStatePreservedDiskAutoDeleteEnum.ON_PERMANENT_INSTANCE_DELETION;
                                        mode = PreservedStatePreservedDiskModeEnum.READ_ONLY;
                                        source = "dolores";
                                    }});
                                }};
                                externalIPs = new java.util.HashMap<String, org.openapis.openapi.models.shared.PreservedStatePreservedNetworkIp>() {{
                                    put("iusto", new PreservedStatePreservedNetworkIp() {{
                                        autoDelete = PreservedStatePreservedNetworkIpAutoDeleteEnum.NEVER;
                                        ipAddress = new PreservedStatePreservedNetworkIpIpAddress() {{
                                            address = "23921 Nathan Landing";
                                            literal = "soluta";
                                        }};
                                    }});
                                    put("amet", new PreservedStatePreservedNetworkIp() {{
                                        autoDelete = PreservedStatePreservedNetworkIpAutoDeleteEnum.NEVER;
                                        ipAddress = new PreservedStatePreservedNetworkIpIpAddress() {{
                                            address = "890 Raynor Mountains";
                                            literal = "alias";
                                        }};
                                    }});
                                    put("quisquam", new PreservedStatePreservedNetworkIp() {{
                                        autoDelete = PreservedStatePreservedNetworkIpAutoDeleteEnum.ON_PERMANENT_INSTANCE_DELETION;
                                        ipAddress = new PreservedStatePreservedNetworkIpIpAddress() {{
                                            address = "64336 Orn Ramp";
                                            literal = "iste";
                                        }};
                                    }});
                                    put("facilis", new PreservedStatePreservedNetworkIp() {{
                                        autoDelete = PreservedStatePreservedNetworkIpAutoDeleteEnum.NEVER;
                                        ipAddress = new PreservedStatePreservedNetworkIpIpAddress() {{
                                            address = "3883 Baumbach Green";
                                            literal = "veniam";
                                        }};
                                    }});
                                }};
                                internalIPs = new java.util.HashMap<String, org.openapis.openapi.models.shared.PreservedStatePreservedNetworkIp>() {{
                                    put("ullam", new PreservedStatePreservedNetworkIp() {{
                                        autoDelete = PreservedStatePreservedNetworkIpAutoDeleteEnum.ON_PERMANENT_INSTANCE_DELETION;
                                        ipAddress = new PreservedStatePreservedNetworkIpIpAddress() {{
                                            address = "782 Feeney Curve";
                                            literal = "molestiae";
                                        }};
                                    }});
                                    put("perferendis", new PreservedStatePreservedNetworkIp() {{
                                        autoDelete = PreservedStatePreservedNetworkIpAutoDeleteEnum.NEVER;
                                        ipAddress = new PreservedStatePreservedNetworkIpIpAddress() {{
                                            address = "854 Hermiston Port";
                                            literal = "voluptate";
                                        }};
                                    }});
                                    put("ad", new PreservedStatePreservedNetworkIp() {{
                                        autoDelete = PreservedStatePreservedNetworkIpAutoDeleteEnum.ON_PERMANENT_INSTANCE_DELETION;
                                        ipAddress = new PreservedStatePreservedNetworkIpIpAddress() {{
                                            address = "912 Katharina Spur";
                                            literal = "eum";
                                        }};
                                    }});
                                    put("facere", new PreservedStatePreservedNetworkIp() {{
                                        autoDelete = PreservedStatePreservedNetworkIpAutoDeleteEnum.NEVER;
                                        ipAddress = new PreservedStatePreservedNetworkIpIpAddress() {{
                                            address = "56767 Muriel Island";
                                            literal = "neque";
                                        }};
                                    }});
                                }};
                                metadata = new java.util.HashMap<String, String>() {{
                                    put("illo", "illo");
                                    put("magni", "quas");
                                    put("consequatur", "reprehenderit");
                                }};
                            }};
                            status = PerInstanceConfigStatusEnum.UNAPPLIED;
                        }}),
                    }};
                }};;
                accessToken = "voluptas";
                alt = AltEnum.JSON;
                callback = "tempora";
                fields = "iure";
                key = "eligendi";
                oauthToken = "et";
                prettyPrint = false;
                quotaUser = "deserunt";
                requestId = "deleniti";
                uploadType = "cupiditate";
                uploadProtocol = "ea";
                userIp = "optio";
            }};            

            ComputeRegionInstanceGroupManagersCreateInstancesResponse res = sdk.regionInstanceGroupManagers.computeRegionInstanceGroupManagersCreateInstances(req, new ComputeRegionInstanceGroupManagersCreateInstancesSecurity() {{
                option1 = new ComputeRegionInstanceGroupManagersCreateInstancesSecurityOption1("tempora", "quae") {{
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

            ComputeRegionInstanceGroupManagersDeleteRequest req = new ComputeRegionInstanceGroupManagersDeleteRequest("tenetur", "amet", "quaerat") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "est";
                alt = AltEnum.MEDIA;
                callback = "delectus";
                fields = "quos";
                key = "rerum";
                oauthToken = "laudantium";
                prettyPrint = false;
                quotaUser = "harum";
                requestId = "voluptas";
                uploadType = "porro";
                uploadProtocol = "doloremque";
                userIp = "mollitia";
            }};            

            ComputeRegionInstanceGroupManagersDeleteResponse res = sdk.regionInstanceGroupManagers.computeRegionInstanceGroupManagersDelete(req, new ComputeRegionInstanceGroupManagersDeleteSecurity() {{
                option1 = new ComputeRegionInstanceGroupManagersDeleteSecurityOption1("pariatur", "ea") {{
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

            ComputeRegionInstanceGroupManagersDeleteInstancesRequest req = new ComputeRegionInstanceGroupManagersDeleteInstancesRequest("exercitationem", "consectetur", "iste") {{
                dollarXgafv = XgafvEnum.TWO;
                regionInstanceGroupManagersDeleteInstancesRequest = new RegionInstanceGroupManagersDeleteInstancesRequest() {{
                    instances = new String[]{{
                        add("deserunt"),
                        add("facilis"),
                        add("consequatur"),
                    }};
                    skipInstancesOnValidationError = false;
                }};;
                accessToken = "cupiditate";
                alt = AltEnum.MEDIA;
                callback = "rerum";
                fields = "doloremque";
                key = "vero";
                oauthToken = "nulla";
                prettyPrint = false;
                quotaUser = "maiores";
                requestId = "dolor";
                uploadType = "eligendi";
                uploadProtocol = "atque";
                userIp = "nobis";
            }};            

            ComputeRegionInstanceGroupManagersDeleteInstancesResponse res = sdk.regionInstanceGroupManagers.computeRegionInstanceGroupManagersDeleteInstances(req, new ComputeRegionInstanceGroupManagersDeleteInstancesSecurity() {{
                option1 = new ComputeRegionInstanceGroupManagersDeleteInstancesSecurityOption1("nesciunt", "debitis") {{
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

            ComputeRegionInstanceGroupManagersDeletePerInstanceConfigsRequest req = new ComputeRegionInstanceGroupManagersDeletePerInstanceConfigsRequest("officia", "molestias", "mollitia") {{
                dollarXgafv = XgafvEnum.TWO;
                regionInstanceGroupManagerDeleteInstanceConfigReq = new RegionInstanceGroupManagerDeleteInstanceConfigReq() {{
                    names = new String[]{{
                        add("nam"),
                        add("rem"),
                        add("officia"),
                        add("repellendus"),
                    }};
                }};;
                accessToken = "voluptatibus";
                alt = AltEnum.PROTO;
                callback = "alias";
                fields = "totam";
                key = "laudantium";
                oauthToken = "fugiat";
                prettyPrint = false;
                quotaUser = "quas";
                uploadType = "sunt";
                uploadProtocol = "nesciunt";
                userIp = "odit";
            }};            

            ComputeRegionInstanceGroupManagersDeletePerInstanceConfigsResponse res = sdk.regionInstanceGroupManagers.computeRegionInstanceGroupManagersDeletePerInstanceConfigs(req, new ComputeRegionInstanceGroupManagersDeletePerInstanceConfigsSecurity() {{
                option1 = new ComputeRegionInstanceGroupManagersDeletePerInstanceConfigsSecurityOption1("unde", "asperiores") {{
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

            ComputeRegionInstanceGroupManagersGetRequest req = new ComputeRegionInstanceGroupManagersGetRequest("amet", "explicabo", "dolore") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "reiciendis";
                alt = AltEnum.MEDIA;
                callback = "blanditiis";
                fields = "laboriosam";
                key = "sunt";
                oauthToken = "iure";
                prettyPrint = false;
                quotaUser = "placeat";
                uploadType = "totam";
                uploadProtocol = "veritatis";
                userIp = "molestiae";
            }};            

            ComputeRegionInstanceGroupManagersGetResponse res = sdk.regionInstanceGroupManagers.computeRegionInstanceGroupManagersGet(req, new ComputeRegionInstanceGroupManagersGetSecurity() {{
                option1 = new ComputeRegionInstanceGroupManagersGetSecurityOption1("cum", "similique") {{
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

            ComputeRegionInstanceGroupManagersInsertRequest req = new ComputeRegionInstanceGroupManagersInsertRequest("magnam", "quae") {{
                dollarXgafv = XgafvEnum.TWO;
                instanceGroupManager = new InstanceGroupManager() {{
                    allInstancesConfig = new InstanceGroupManagerAllInstancesConfig() {{
                        properties = new InstancePropertiesPatch() {{
                            labels = new java.util.HashMap<String, String>() {{
                                put("beatae", "excepturi");
                            }};
                            metadata = new java.util.HashMap<String, String>() {{
                                put("molestias", "illo");
                                put("adipisci", "nulla");
                            }};
                        }};;
                    }};;
                    autoHealingPolicies = new org.openapis.openapi.models.shared.InstanceGroupManagerAutoHealingPolicy[]{{
                        add(new InstanceGroupManagerAutoHealingPolicy() {{
                            healthCheck = "itaque";
                            initialDelaySec = 209551;
                        }}),
                    }};
                    baseInstanceName = "facilis";
                    creationTimestamp = "voluptatum";
                    currentActions = new InstanceGroupManagerActionsSummary() {{
                        abandoning = 865327;
                        creating = 382113;
                        creatingWithoutRetries = 158272;
                        deleting = 295816;
                        none = 456280;
                        recreating = 48431;
                        refreshing = 578663;
                        restarting = 52636;
                        resuming = 963693;
                        starting = 812673;
                        stopping = 590716;
                        suspending = 549795;
                        verifying = 445929;
                    }};;
                    description = "itaque";
                    distributionPolicy = new DistributionPolicy() {{
                        targetShape = DistributionPolicyTargetShapeEnum.EVEN;
                        zones = new org.openapis.openapi.models.shared.DistributionPolicyZoneConfiguration[]{{
                            add(new DistributionPolicyZoneConfiguration() {{
                                zone = "fuga";
                            }}),
                        }};
                    }};;
                    failoverAction = InstanceGroupManagerFailoverActionEnum.NO_FAILOVER;
                    fingerprint = "recusandae";
                    id = "voluptatem";
                    instanceGroup = "ab";
                    instanceLifecyclePolicy = new InstanceGroupManagerInstanceLifecyclePolicy() {{
                        forceUpdateOnRepair = InstanceGroupManagerInstanceLifecyclePolicyForceUpdateOnRepairEnum.YES;
                    }};;
                    instanceTemplate = "inventore";
                    kind = "perspiciatis";
                    listManagedInstancesResults = InstanceGroupManagerListManagedInstancesResultsEnum.PAGINATED;
                    name = "Angelina Jast V";
                    namedPorts = new org.openapis.openapi.models.shared.NamedPort[]{{
                        add(new NamedPort() {{
                            name = "Harriet Grimes";
                            port = 302200;
                        }}),
                    }};
                    region = "exercitationem";
                    selfLink = "unde";
                    serviceAccount = "temporibus";
                    statefulPolicy = new StatefulPolicy() {{
                        preservedState = new StatefulPolicyPreservedState() {{
                            disks = new java.util.HashMap<String, org.openapis.openapi.models.shared.StatefulPolicyPreservedStateDiskDevice>() {{
                                put("vero", new StatefulPolicyPreservedStateDiskDevice() {{
                                    autoDelete = StatefulPolicyPreservedStateDiskDeviceAutoDeleteEnum.NEVER;
                                }});
                            }};
                            externalIPs = new java.util.HashMap<String, org.openapis.openapi.models.shared.StatefulPolicyPreservedStateNetworkIp>() {{
                                put("aliquam", new StatefulPolicyPreservedStateNetworkIp() {{
                                    autoDelete = StatefulPolicyPreservedStateNetworkIpAutoDeleteEnum.NEVER;
                                }});
                                put("vero", new StatefulPolicyPreservedStateNetworkIp() {{
                                    autoDelete = StatefulPolicyPreservedStateNetworkIpAutoDeleteEnum.NEVER;
                                }});
                                put("vero", new StatefulPolicyPreservedStateNetworkIp() {{
                                    autoDelete = StatefulPolicyPreservedStateNetworkIpAutoDeleteEnum.NEVER;
                                }});
                            }};
                            internalIPs = new java.util.HashMap<String, org.openapis.openapi.models.shared.StatefulPolicyPreservedStateNetworkIp>() {{
                                put("delectus", new StatefulPolicyPreservedStateNetworkIp() {{
                                    autoDelete = StatefulPolicyPreservedStateNetworkIpAutoDeleteEnum.NEVER;
                                }});
                                put("debitis", new StatefulPolicyPreservedStateNetworkIp() {{
                                    autoDelete = StatefulPolicyPreservedStateNetworkIpAutoDeleteEnum.ON_PERMANENT_INSTANCE_DELETION;
                                }});
                                put("sapiente", new StatefulPolicyPreservedStateNetworkIp() {{
                                    autoDelete = StatefulPolicyPreservedStateNetworkIpAutoDeleteEnum.NEVER;
                                }});
                                put("atque", new StatefulPolicyPreservedStateNetworkIp() {{
                                    autoDelete = StatefulPolicyPreservedStateNetworkIpAutoDeleteEnum.NEVER;
                                }});
                            }};
                        }};;
                    }};;
                    status = new InstanceGroupManagerStatus() {{
                        allInstancesConfig = new InstanceGroupManagerStatusAllInstancesConfig() {{
                            currentRevision = "doloribus";
                            effective = false;
                        }};;
                        autoscaler = "deserunt";
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
                        add("iste"),
                        add("expedita"),
                        add("fugit"),
                    }};
                    targetSize = 893989;
                    updatePolicy = new InstanceGroupManagerUpdatePolicy() {{
                        instanceRedistributionType = InstanceGroupManagerUpdatePolicyInstanceRedistributionTypeEnum.PROACTIVE;
                        maxSurge = new FixedOrPercent() {{
                            calculated = 764085;
                            fixed = 910642;
                            percent = 741281;
                        }};;
                        maxUnavailable = new FixedOrPercent() {{
                            calculated = 308988;
                            fixed = 66016;
                            percent = 99171;
                        }};;
                        minReadySec = 810436;
                        minimalAction = InstanceGroupManagerUpdatePolicyMinimalActionEnum.REFRESH;
                        mostDisruptiveAllowedAction = InstanceGroupManagerUpdatePolicyMostDisruptiveAllowedActionEnum.NONE;
                        replacementMethod = InstanceGroupManagerUpdatePolicyReplacementMethodEnum.SUBSTITUTE;
                        type = InstanceGroupManagerUpdatePolicyTypeEnum.PROACTIVE;
                    }};;
                    versions = new org.openapis.openapi.models.shared.InstanceGroupManagerVersion[]{{
                        add(new InstanceGroupManagerVersion() {{
                            instanceTemplate = "delectus";
                            name = "Garry McDermott";
                            targetSize = new FixedOrPercent() {{
                                calculated = 152396;
                                fixed = 557090;
                                percent = 279372;
                            }};
                        }}),
                        add(new InstanceGroupManagerVersion() {{
                            instanceTemplate = "porro";
                            name = "Rick Wilkinson";
                            targetSize = new FixedOrPercent() {{
                                calculated = 270279;
                                fixed = 364473;
                                percent = 253656;
                            }};
                        }}),
                    }};
                    zone = "corrupti";
                }};;
                accessToken = "quos";
                alt = AltEnum.JSON;
                callback = "laborum";
                fields = "deserunt";
                key = "accusantium";
                oauthToken = "quia";
                prettyPrint = false;
                quotaUser = "doloremque";
                requestId = "sequi";
                uploadType = "voluptatem";
                uploadProtocol = "optio";
                userIp = "deleniti";
            }};            

            ComputeRegionInstanceGroupManagersInsertResponse res = sdk.regionInstanceGroupManagers.computeRegionInstanceGroupManagersInsert(req, new ComputeRegionInstanceGroupManagersInsertSecurity() {{
                option1 = new ComputeRegionInstanceGroupManagersInsertSecurityOption1("quia", "cupiditate") {{
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

            ComputeRegionInstanceGroupManagersListRequest req = new ComputeRegionInstanceGroupManagersListRequest("dignissimos", "corrupti") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "odio";
                alt = AltEnum.MEDIA;
                callback = "molestias";
                fields = "sit";
                filter = "magnam";
                key = "odit";
                maxResults = 914385L;
                oauthToken = "quaerat";
                orderBy = "illum";
                pageToken = "autem";
                prettyPrint = false;
                quotaUser = "blanditiis";
                returnPartialSuccess = false;
                uploadType = "sit";
                uploadProtocol = "iste";
                userIp = "repellat";
            }};            

            ComputeRegionInstanceGroupManagersListResponse res = sdk.regionInstanceGroupManagers.computeRegionInstanceGroupManagersList(req, new ComputeRegionInstanceGroupManagersListSecurity() {{
                option1 = new ComputeRegionInstanceGroupManagersListSecurityOption1("omnis", "vero") {{
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

            ComputeRegionInstanceGroupManagersListErrorsRequest req = new ComputeRegionInstanceGroupManagersListErrorsRequest("adipisci", "tempora", "consequuntur") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "officiis";
                alt = AltEnum.PROTO;
                callback = "nisi";
                fields = "dolorem";
                filter = "eveniet";
                key = "nam";
                maxResults = 693429L;
                oauthToken = "aliquam";
                orderBy = "tempore";
                pageToken = "rem";
                prettyPrint = false;
                quotaUser = "qui";
                returnPartialSuccess = false;
                uploadType = "repudiandae";
                uploadProtocol = "officiis";
                userIp = "odit";
            }};            

            ComputeRegionInstanceGroupManagersListErrorsResponse res = sdk.regionInstanceGroupManagers.computeRegionInstanceGroupManagersListErrors(req, new ComputeRegionInstanceGroupManagersListErrorsSecurity() {{
                option1 = new ComputeRegionInstanceGroupManagersListErrorsSecurityOption1("minus", "totam") {{
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

            ComputeRegionInstanceGroupManagersListManagedInstancesRequest req = new ComputeRegionInstanceGroupManagersListManagedInstancesRequest("ipsa", "assumenda", "necessitatibus") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "corrupti";
                alt = AltEnum.PROTO;
                callback = "quidem";
                fields = "assumenda";
                filter = "assumenda";
                key = "quas";
                maxResults = 230328L;
                oauthToken = "esse";
                orderBy = "nostrum";
                pageToken = "maxime";
                prettyPrint = false;
                quotaUser = "maxime";
                returnPartialSuccess = false;
                uploadType = "omnis";
                uploadProtocol = "ipsam";
                userIp = "atque";
            }};            

            ComputeRegionInstanceGroupManagersListManagedInstancesResponse res = sdk.regionInstanceGroupManagers.computeRegionInstanceGroupManagersListManagedInstances(req, new ComputeRegionInstanceGroupManagersListManagedInstancesSecurity() {{
                option1 = new ComputeRegionInstanceGroupManagersListManagedInstancesSecurityOption1("animi", "molestiae") {{
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

            ComputeRegionInstanceGroupManagersListPerInstanceConfigsRequest req = new ComputeRegionInstanceGroupManagersListPerInstanceConfigsRequest("possimus", "porro", "quo") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "omnis";
                alt = AltEnum.JSON;
                callback = "recusandae";
                fields = "error";
                filter = "magnam";
                key = "accusantium";
                maxResults = 428593L;
                oauthToken = "magnam";
                orderBy = "impedit";
                pageToken = "aspernatur";
                prettyPrint = false;
                quotaUser = "optio";
                returnPartialSuccess = false;
                uploadType = "eos";
                uploadProtocol = "id";
                userIp = "ducimus";
            }};            

            ComputeRegionInstanceGroupManagersListPerInstanceConfigsResponse res = sdk.regionInstanceGroupManagers.computeRegionInstanceGroupManagersListPerInstanceConfigs(req, new ComputeRegionInstanceGroupManagersListPerInstanceConfigsSecurity() {{
                option1 = new ComputeRegionInstanceGroupManagersListPerInstanceConfigsSecurityOption1("sunt", "qui") {{
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

            ComputeRegionInstanceGroupManagersPatchRequest req = new ComputeRegionInstanceGroupManagersPatchRequest("occaecati", "cupiditate", "delectus") {{
                dollarXgafv = XgafvEnum.ONE;
                instanceGroupManager1 = new InstanceGroupManager() {{
                    allInstancesConfig = new InstanceGroupManagerAllInstancesConfig() {{
                        properties = new InstancePropertiesPatch() {{
                            labels = new java.util.HashMap<String, String>() {{
                                put("doloribus", "ab");
                                put("perspiciatis", "aut");
                            }};
                            metadata = new java.util.HashMap<String, String>() {{
                                put("unde", "reprehenderit");
                                put("eaque", "iure");
                                put("recusandae", "dolorum");
                            }};
                        }};;
                    }};;
                    autoHealingPolicies = new org.openapis.openapi.models.shared.InstanceGroupManagerAutoHealingPolicy[]{{
                        add(new InstanceGroupManagerAutoHealingPolicy() {{
                            healthCheck = "ab";
                            initialDelaySec = 901209;
                        }}),
                        add(new InstanceGroupManagerAutoHealingPolicy() {{
                            healthCheck = "ea";
                            initialDelaySec = 648245;
                        }}),
                        add(new InstanceGroupManagerAutoHealingPolicy() {{
                            healthCheck = "ducimus";
                            initialDelaySec = 31026;
                        }}),
                        add(new InstanceGroupManagerAutoHealingPolicy() {{
                            healthCheck = "ipsam";
                            initialDelaySec = 561844;
                        }}),
                    }};
                    baseInstanceName = "nulla";
                    creationTimestamp = "inventore";
                    currentActions = new InstanceGroupManagerActionsSummary() {{
                        abandoning = 451818;
                        creating = 82141;
                        creatingWithoutRetries = 877529;
                        deleting = 55687;
                        none = 864570;
                        recreating = 121444;
                        refreshing = 736823;
                        restarting = 528836;
                        resuming = 138398;
                        starting = 566874;
                        stopping = 34798;
                        suspending = 776876;
                        verifying = 301959;
                    }};;
                    description = "porro";
                    distributionPolicy = new DistributionPolicy() {{
                        targetShape = DistributionPolicyTargetShapeEnum.BALANCED;
                        zones = new org.openapis.openapi.models.shared.DistributionPolicyZoneConfiguration[]{{
                            add(new DistributionPolicyZoneConfiguration() {{
                                zone = "rerum";
                            }}),
                            add(new DistributionPolicyZoneConfiguration() {{
                                zone = "reprehenderit";
                            }}),
                        }};
                    }};;
                    failoverAction = InstanceGroupManagerFailoverActionEnum.NO_FAILOVER;
                    fingerprint = "praesentium";
                    id = "pariatur";
                    instanceGroup = "alias";
                    instanceLifecyclePolicy = new InstanceGroupManagerInstanceLifecyclePolicy() {{
                        forceUpdateOnRepair = InstanceGroupManagerInstanceLifecyclePolicyForceUpdateOnRepairEnum.NO;
                    }};;
                    instanceTemplate = "vero";
                    kind = "sequi";
                    listManagedInstancesResults = InstanceGroupManagerListManagedInstancesResultsEnum.PAGELESS;
                    name = "Kristina Raynor";
                    namedPorts = new org.openapis.openapi.models.shared.NamedPort[]{{
                        add(new NamedPort() {{
                            name = "Zachary Kunze";
                            port = 515813;
                        }}),
                        add(new NamedPort() {{
                            name = "Ellis Flatley";
                            port = 843616;
                        }}),
                        add(new NamedPort() {{
                            name = "Darrell Strosin";
                            port = 708477;
                        }}),
                        add(new NamedPort() {{
                            name = "Dr. Opal Beier";
                            port = 765080;
                        }}),
                    }};
                    region = "explicabo";
                    selfLink = "aliquid";
                    serviceAccount = "consectetur";
                    statefulPolicy = new StatefulPolicy() {{
                        preservedState = new StatefulPolicyPreservedState() {{
                            disks = new java.util.HashMap<String, org.openapis.openapi.models.shared.StatefulPolicyPreservedStateDiskDevice>() {{
                                put("ipsam", new StatefulPolicyPreservedStateDiskDevice() {{
                                    autoDelete = StatefulPolicyPreservedStateDiskDeviceAutoDeleteEnum.NEVER;
                                }});
                                put("maiores", new StatefulPolicyPreservedStateDiskDevice() {{
                                    autoDelete = StatefulPolicyPreservedStateDiskDeviceAutoDeleteEnum.ON_PERMANENT_INSTANCE_DELETION;
                                }});
                            }};
                            externalIPs = new java.util.HashMap<String, org.openapis.openapi.models.shared.StatefulPolicyPreservedStateNetworkIp>() {{
                                put("cupiditate", new StatefulPolicyPreservedStateNetworkIp() {{
                                    autoDelete = StatefulPolicyPreservedStateNetworkIpAutoDeleteEnum.NEVER;
                                }});
                                put("occaecati", new StatefulPolicyPreservedStateNetworkIp() {{
                                    autoDelete = StatefulPolicyPreservedStateNetworkIpAutoDeleteEnum.NEVER;
                                }});
                            }};
                            internalIPs = new java.util.HashMap<String, org.openapis.openapi.models.shared.StatefulPolicyPreservedStateNetworkIp>() {{
                                put("ipsam", new StatefulPolicyPreservedStateNetworkIp() {{
                                    autoDelete = StatefulPolicyPreservedStateNetworkIpAutoDeleteEnum.ON_PERMANENT_INSTANCE_DELETION;
                                }});
                                put("aliquam", new StatefulPolicyPreservedStateNetworkIp() {{
                                    autoDelete = StatefulPolicyPreservedStateNetworkIpAutoDeleteEnum.NEVER;
                                }});
                                put("nemo", new StatefulPolicyPreservedStateNetworkIp() {{
                                    autoDelete = StatefulPolicyPreservedStateNetworkIpAutoDeleteEnum.NEVER;
                                }});
                            }};
                        }};;
                    }};;
                    status = new InstanceGroupManagerStatus() {{
                        allInstancesConfig = new InstanceGroupManagerStatusAllInstancesConfig() {{
                            currentRevision = "dicta";
                            effective = false;
                        }};;
                        autoscaler = "excepturi";
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
                        add("laboriosam"),
                        add("inventore"),
                        add("eos"),
                    }};
                    targetSize = 696257;
                    updatePolicy = new InstanceGroupManagerUpdatePolicy() {{
                        instanceRedistributionType = InstanceGroupManagerUpdatePolicyInstanceRedistributionTypeEnum.PROACTIVE;
                        maxSurge = new FixedOrPercent() {{
                            calculated = 235939;
                            fixed = 955964;
                            percent = 696828;
                        }};;
                        maxUnavailable = new FixedOrPercent() {{
                            calculated = 157144;
                            fixed = 448505;
                            percent = 852937;
                        }};;
                        minReadySec = 960433;
                        minimalAction = InstanceGroupManagerUpdatePolicyMinimalActionEnum.NONE;
                        mostDisruptiveAllowedAction = InstanceGroupManagerUpdatePolicyMostDisruptiveAllowedActionEnum.REFRESH;
                        replacementMethod = InstanceGroupManagerUpdatePolicyReplacementMethodEnum.SUBSTITUTE;
                        type = InstanceGroupManagerUpdatePolicyTypeEnum.PROACTIVE;
                    }};;
                    versions = new org.openapis.openapi.models.shared.InstanceGroupManagerVersion[]{{
                        add(new InstanceGroupManagerVersion() {{
                            instanceTemplate = "earum";
                            name = "Edward Purdy";
                            targetSize = new FixedOrPercent() {{
                                calculated = 259862;
                                fixed = 662368;
                                percent = 234235;
                            }};
                        }}),
                        add(new InstanceGroupManagerVersion() {{
                            instanceTemplate = "deserunt";
                            name = "Francis Weimann DDS";
                            targetSize = new FixedOrPercent() {{
                                calculated = 959137;
                                fixed = 952887;
                                percent = 806593;
                            }};
                        }}),
                        add(new InstanceGroupManagerVersion() {{
                            instanceTemplate = "tempora";
                            name = "Colin Beatty";
                            targetSize = new FixedOrPercent() {{
                                calculated = 989939;
                                fixed = 122227;
                                percent = 422202;
                            }};
                        }}),
                        add(new InstanceGroupManagerVersion() {{
                            instanceTemplate = "ex";
                            name = "Ms. Phillip Ernser";
                            targetSize = new FixedOrPercent() {{
                                calculated = 750533;
                                fixed = 533996;
                                percent = 751399;
                            }};
                        }}),
                    }};
                    zone = "accusamus";
                }};;
                accessToken = "rerum";
                alt = AltEnum.JSON;
                callback = "enim";
                fields = "exercitationem";
                key = "iure";
                oauthToken = "cupiditate";
                prettyPrint = false;
                quotaUser = "explicabo";
                requestId = "inventore";
                uploadType = "quos";
                uploadProtocol = "debitis";
                userIp = "commodi";
            }};            

            ComputeRegionInstanceGroupManagersPatchResponse res = sdk.regionInstanceGroupManagers.computeRegionInstanceGroupManagersPatch(req, new ComputeRegionInstanceGroupManagersPatchSecurity() {{
                option1 = new ComputeRegionInstanceGroupManagersPatchSecurityOption1("delectus", "voluptatem") {{
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

            ComputeRegionInstanceGroupManagersPatchPerInstanceConfigsRequest req = new ComputeRegionInstanceGroupManagersPatchPerInstanceConfigsRequest("deleniti", "dolorem", "assumenda") {{
                dollarXgafv = XgafvEnum.ONE;
                regionInstanceGroupManagerPatchInstanceConfigReq = new RegionInstanceGroupManagerPatchInstanceConfigReq() {{
                    perInstanceConfigs = new org.openapis.openapi.models.shared.PerInstanceConfig[]{{
                        add(new PerInstanceConfig() {{
                            fingerprint = "veritatis";
                            name = "Ruth Jacobson";
                            preservedState = new PreservedState() {{
                                disks = new java.util.HashMap<String, org.openapis.openapi.models.shared.PreservedStatePreservedDisk>() {{
                                    put("tempore", new PreservedStatePreservedDisk() {{
                                        autoDelete = PreservedStatePreservedDiskAutoDeleteEnum.ON_PERMANENT_INSTANCE_DELETION;
                                        mode = PreservedStatePreservedDiskModeEnum.READ_ONLY;
                                        source = "doloremque";
                                    }});
                                    put("reprehenderit", new PreservedStatePreservedDisk() {{
                                        autoDelete = PreservedStatePreservedDiskAutoDeleteEnum.NEVER;
                                        mode = PreservedStatePreservedDiskModeEnum.READ_WRITE;
                                        source = "vitae";
                                    }});
                                    put("culpa", new PreservedStatePreservedDisk() {{
                                        autoDelete = PreservedStatePreservedDiskAutoDeleteEnum.NEVER;
                                        mode = PreservedStatePreservedDiskModeEnum.READ_ONLY;
                                        source = "labore";
                                    }});
                                    put("quis", new PreservedStatePreservedDisk() {{
                                        autoDelete = PreservedStatePreservedDiskAutoDeleteEnum.NEVER;
                                        mode = PreservedStatePreservedDiskModeEnum.READ_ONLY;
                                        source = "rerum";
                                    }});
                                }};
                                externalIPs = new java.util.HashMap<String, org.openapis.openapi.models.shared.PreservedStatePreservedNetworkIp>() {{
                                    put("aliquid", new PreservedStatePreservedNetworkIp() {{
                                        autoDelete = PreservedStatePreservedNetworkIpAutoDeleteEnum.NEVER;
                                        ipAddress = new PreservedStatePreservedNetworkIpIpAddress() {{
                                            address = "44588 Orion Hill";
                                            literal = "ducimus";
                                        }};
                                    }});
                                }};
                                internalIPs = new java.util.HashMap<String, org.openapis.openapi.models.shared.PreservedStatePreservedNetworkIp>() {{
                                    put("quaerat", new PreservedStatePreservedNetworkIp() {{
                                        autoDelete = PreservedStatePreservedNetworkIpAutoDeleteEnum.NEVER;
                                        ipAddress = new PreservedStatePreservedNetworkIpIpAddress() {{
                                            address = "88045 Beatty Radial";
                                            literal = "sapiente";
                                        }};
                                    }});
                                }};
                                metadata = new java.util.HashMap<String, String>() {{
                                    put("odit", "possimus");
                                    put("beatae", "dignissimos");
                                    put("officiis", "eum");
                                }};
                            }};
                            status = PerInstanceConfigStatusEnum.DELETING;
                        }}),
                        add(new PerInstanceConfig() {{
                            fingerprint = "eligendi";
                            name = "Ms. Ana Schroeder";
                            preservedState = new PreservedState() {{
                                disks = new java.util.HashMap<String, org.openapis.openapi.models.shared.PreservedStatePreservedDisk>() {{
                                    put("mollitia", new PreservedStatePreservedDisk() {{
                                        autoDelete = PreservedStatePreservedDiskAutoDeleteEnum.ON_PERMANENT_INSTANCE_DELETION;
                                        mode = PreservedStatePreservedDiskModeEnum.READ_ONLY;
                                        source = "quisquam";
                                    }});
                                    put("maiores", new PreservedStatePreservedDisk() {{
                                        autoDelete = PreservedStatePreservedDiskAutoDeleteEnum.NEVER;
                                        mode = PreservedStatePreservedDiskModeEnum.READ_WRITE;
                                        source = "dolorum";
                                    }});
                                }};
                                externalIPs = new java.util.HashMap<String, org.openapis.openapi.models.shared.PreservedStatePreservedNetworkIp>() {{
                                    put("delectus", new PreservedStatePreservedNetworkIp() {{
                                        autoDelete = PreservedStatePreservedNetworkIpAutoDeleteEnum.NEVER;
                                        ipAddress = new PreservedStatePreservedNetworkIpIpAddress() {{
                                            address = "547 Royal Lane";
                                            literal = "provident";
                                        }};
                                    }});
                                }};
                                internalIPs = new java.util.HashMap<String, org.openapis.openapi.models.shared.PreservedStatePreservedNetworkIp>() {{
                                    put("inventore", new PreservedStatePreservedNetworkIp() {{
                                        autoDelete = PreservedStatePreservedNetworkIpAutoDeleteEnum.NEVER;
                                        ipAddress = new PreservedStatePreservedNetworkIpIpAddress() {{
                                            address = "0398 Candida Circles";
                                            literal = "eius";
                                        }};
                                    }});
                                    put("voluptatum", new PreservedStatePreservedNetworkIp() {{
                                        autoDelete = PreservedStatePreservedNetworkIpAutoDeleteEnum.NEVER;
                                        ipAddress = new PreservedStatePreservedNetworkIpIpAddress() {{
                                            address = "4813 Gleichner Keys";
                                            literal = "nobis";
                                        }};
                                    }});
                                    put("saepe", new PreservedStatePreservedNetworkIp() {{
                                        autoDelete = PreservedStatePreservedNetworkIpAutoDeleteEnum.NEVER;
                                        ipAddress = new PreservedStatePreservedNetworkIpIpAddress() {{
                                            address = "85878 Schulist Plaza";
                                            literal = "harum";
                                        }};
                                    }});
                                }};
                                metadata = new java.util.HashMap<String, String>() {{
                                    put("quasi", "distinctio");
                                    put("iure", "iste");
                                    put("dolores", "vero");
                                    put("mollitia", "distinctio");
                                }};
                            }};
                            status = PerInstanceConfigStatusEnum.DELETING;
                        }}),
                    }};
                }};;
                accessToken = "explicabo";
                alt = AltEnum.PROTO;
                callback = "cumque";
                fields = "voluptates";
                key = "sed";
                oauthToken = "tempora";
                prettyPrint = false;
                quotaUser = "sed";
                requestId = "dicta";
                uploadType = "labore";
                uploadProtocol = "quod";
                userIp = "soluta";
            }};            

            ComputeRegionInstanceGroupManagersPatchPerInstanceConfigsResponse res = sdk.regionInstanceGroupManagers.computeRegionInstanceGroupManagersPatchPerInstanceConfigs(req, new ComputeRegionInstanceGroupManagersPatchPerInstanceConfigsSecurity() {{
                option1 = new ComputeRegionInstanceGroupManagersPatchPerInstanceConfigsSecurityOption1("ducimus", "cupiditate") {{
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

            ComputeRegionInstanceGroupManagersRecreateInstancesRequest req = new ComputeRegionInstanceGroupManagersRecreateInstancesRequest("voluptates", "nostrum", "voluptatibus") {{
                dollarXgafv = XgafvEnum.TWO;
                regionInstanceGroupManagersRecreateRequest = new RegionInstanceGroupManagersRecreateRequest() {{
                    instances = new String[]{{
                        add("quasi"),
                        add("hic"),
                        add("magnam"),
                    }};
                }};;
                accessToken = "reiciendis";
                alt = AltEnum.PROTO;
                callback = "reiciendis";
                fields = "corporis";
                key = "aut";
                oauthToken = "minima";
                prettyPrint = false;
                quotaUser = "beatae";
                requestId = "deleniti";
                uploadType = "aut";
                uploadProtocol = "eveniet";
                userIp = "veniam";
            }};            

            ComputeRegionInstanceGroupManagersRecreateInstancesResponse res = sdk.regionInstanceGroupManagers.computeRegionInstanceGroupManagersRecreateInstances(req, new ComputeRegionInstanceGroupManagersRecreateInstancesSecurity() {{
                option1 = new ComputeRegionInstanceGroupManagersRecreateInstancesSecurityOption1("delectus", "veniam") {{
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

            ComputeRegionInstanceGroupManagersResizeRequest req = new ComputeRegionInstanceGroupManagersResizeRequest("inventore", "molestias", "tenetur", 962065L) {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "harum";
                alt = AltEnum.MEDIA;
                callback = "eum";
                fields = "perferendis";
                key = "blanditiis";
                oauthToken = "ullam";
                prettyPrint = false;
                quotaUser = "beatae";
                requestId = "impedit";
                uploadType = "porro";
                uploadProtocol = "sunt";
                userIp = "culpa";
            }};            

            ComputeRegionInstanceGroupManagersResizeResponse res = sdk.regionInstanceGroupManagers.computeRegionInstanceGroupManagersResize(req, new ComputeRegionInstanceGroupManagersResizeSecurity() {{
                option1 = new ComputeRegionInstanceGroupManagersResizeSecurityOption1("velit", "ipsam") {{
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

            ComputeRegionInstanceGroupManagersResizeAdvancedRequest req = new ComputeRegionInstanceGroupManagersResizeAdvancedRequest("dicta", "iste", "accusantium") {{
                dollarXgafv = XgafvEnum.TWO;
                regionInstanceGroupManagersResizeAdvancedRequest = new RegionInstanceGroupManagersResizeAdvancedRequest() {{
                    noCreationRetries = false;
                    targetSize = 837651;
                }};;
                accessToken = "quaerat";
                alt = AltEnum.MEDIA;
                callback = "a";
                fields = "vero";
                key = "dolor";
                oauthToken = "sunt";
                prettyPrint = false;
                quotaUser = "natus";
                requestId = "dolorum";
                uploadType = "cupiditate";
                uploadProtocol = "sint";
                userIp = "quas";
            }};            

            ComputeRegionInstanceGroupManagersResizeAdvancedResponse res = sdk.regionInstanceGroupManagers.computeRegionInstanceGroupManagersResizeAdvanced(req, new ComputeRegionInstanceGroupManagersResizeAdvancedSecurity() {{
                option1 = new ComputeRegionInstanceGroupManagersResizeAdvancedSecurityOption1("temporibus", "voluptas") {{
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
import org.openapis.openapi.models.shared.InstanceGroupManagerAutoHealingPolicy;
import org.openapis.openapi.models.shared.RegionInstanceGroupManagersSetAutoHealingRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeRegionInstanceGroupManagersSetAutoHealingPoliciesRequest req = new ComputeRegionInstanceGroupManagersSetAutoHealingPoliciesRequest("iusto", "accusantium", "labore") {{
                dollarXgafv = XgafvEnum.ONE;
                regionInstanceGroupManagersSetAutoHealingRequest = new RegionInstanceGroupManagersSetAutoHealingRequest() {{
                    autoHealingPolicies = new org.openapis.openapi.models.shared.InstanceGroupManagerAutoHealingPolicy[]{{
                        add(new InstanceGroupManagerAutoHealingPolicy() {{
                            healthCheck = "nihil";
                            initialDelaySec = 477176;
                        }}),
                        add(new InstanceGroupManagerAutoHealingPolicy() {{
                            healthCheck = "odit";
                            initialDelaySec = 686124;
                        }}),
                        add(new InstanceGroupManagerAutoHealingPolicy() {{
                            healthCheck = "laborum";
                            initialDelaySec = 944158;
                        }}),
                    }};
                }};;
                accessToken = "aliquid";
                alt = AltEnum.MEDIA;
                callback = "maxime";
                fields = "excepturi";
                key = "nulla";
                oauthToken = "ullam";
                prettyPrint = false;
                quotaUser = "dolore";
                requestId = "quas";
                uploadType = "neque";
                uploadProtocol = "voluptates";
                userIp = "soluta";
            }};            

            ComputeRegionInstanceGroupManagersSetAutoHealingPoliciesResponse res = sdk.regionInstanceGroupManagers.computeRegionInstanceGroupManagersSetAutoHealingPolicies(req, new ComputeRegionInstanceGroupManagersSetAutoHealingPoliciesSecurity() {{
                option1 = new ComputeRegionInstanceGroupManagersSetAutoHealingPoliciesSecurityOption1("minima", "itaque") {{
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

            ComputeRegionInstanceGroupManagersSetInstanceTemplateRequest req = new ComputeRegionInstanceGroupManagersSetInstanceTemplateRequest("itaque", "aliquid", "cumque") {{
                dollarXgafv = XgafvEnum.ONE;
                regionInstanceGroupManagersSetTemplateRequest = new RegionInstanceGroupManagersSetTemplateRequest() {{
                    instanceTemplate = "libero";
                }};;
                accessToken = "incidunt";
                alt = AltEnum.PROTO;
                callback = "minima";
                fields = "atque";
                key = "qui";
                oauthToken = "neque";
                prettyPrint = false;
                quotaUser = "iure";
                requestId = "asperiores";
                uploadType = "magni";
                uploadProtocol = "ut";
                userIp = "libero";
            }};            

            ComputeRegionInstanceGroupManagersSetInstanceTemplateResponse res = sdk.regionInstanceGroupManagers.computeRegionInstanceGroupManagersSetInstanceTemplate(req, new ComputeRegionInstanceGroupManagersSetInstanceTemplateSecurity() {{
                option1 = new ComputeRegionInstanceGroupManagersSetInstanceTemplateSecurityOption1("ut", "sed") {{
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

            ComputeRegionInstanceGroupManagersSetTargetPoolsRequest req = new ComputeRegionInstanceGroupManagersSetTargetPoolsRequest("voluptatum", "soluta", "ea") {{
                dollarXgafv = XgafvEnum.ONE;
                regionInstanceGroupManagersSetTargetPoolsRequest = new RegionInstanceGroupManagersSetTargetPoolsRequest() {{
                    fingerprint = "veritatis";
                    targetPools = new String[]{{
                        add("esse"),
                    }};
                }};;
                accessToken = "ipsam";
                alt = AltEnum.MEDIA;
                callback = "nulla";
                fields = "voluptates";
                key = "autem";
                oauthToken = "debitis";
                prettyPrint = false;
                quotaUser = "doloremque";
                requestId = "omnis";
                uploadType = "cupiditate";
                uploadProtocol = "expedita";
                userIp = "illum";
            }};            

            ComputeRegionInstanceGroupManagersSetTargetPoolsResponse res = sdk.regionInstanceGroupManagers.computeRegionInstanceGroupManagersSetTargetPools(req, new ComputeRegionInstanceGroupManagersSetTargetPoolsSecurity() {{
                option1 = new ComputeRegionInstanceGroupManagersSetTargetPoolsSecurityOption1("provident", "quo") {{
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

            ComputeRegionInstanceGroupManagersTestIamPermissionsRequest req = new ComputeRegionInstanceGroupManagersTestIamPermissionsRequest("consectetur", "ullam", "eligendi") {{
                dollarXgafv = XgafvEnum.ONE;
                testPermissionsRequest = new TestPermissionsRequest() {{
                    permissions = new String[]{{
                        add("a"),
                        add("nemo"),
                    }};
                }};;
                accessToken = "iste";
                alt = AltEnum.PROTO;
                callback = "magnam";
                fields = "nemo";
                key = "laboriosam";
                oauthToken = "aperiam";
                prettyPrint = false;
                quotaUser = "aperiam";
                uploadType = "sit";
                uploadProtocol = "quasi";
                userIp = "tempore";
            }};            

            ComputeRegionInstanceGroupManagersTestIamPermissionsResponse res = sdk.regionInstanceGroupManagers.computeRegionInstanceGroupManagersTestIamPermissions(req, new ComputeRegionInstanceGroupManagersTestIamPermissionsSecurity() {{
                option1 = new ComputeRegionInstanceGroupManagersTestIamPermissionsSecurityOption1("perferendis", "aperiam") {{
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

            ComputeRegionInstanceGroupManagersUpdateRequest req = new ComputeRegionInstanceGroupManagersUpdateRequest("nesciunt", "repellat", "quasi") {{
                dollarXgafv = XgafvEnum.TWO;
                instanceGroupManager1 = new InstanceGroupManager() {{
                    allInstancesConfig = new InstanceGroupManagerAllInstancesConfig() {{
                        properties = new InstancePropertiesPatch() {{
                            labels = new java.util.HashMap<String, String>() {{
                                put("autem", "id");
                            }};
                            metadata = new java.util.HashMap<String, String>() {{
                                put("iste", "maxime");
                            }};
                        }};;
                    }};;
                    autoHealingPolicies = new org.openapis.openapi.models.shared.InstanceGroupManagerAutoHealingPolicy[]{{
                        add(new InstanceGroupManagerAutoHealingPolicy() {{
                            healthCheck = "libero";
                            initialDelaySec = 938718;
                        }}),
                        add(new InstanceGroupManagerAutoHealingPolicy() {{
                            healthCheck = "hic";
                            initialDelaySec = 914102;
                        }}),
                    }};
                    baseInstanceName = "ipsum";
                    creationTimestamp = "rem";
                    currentActions = new InstanceGroupManagerActionsSummary() {{
                        abandoning = 947734;
                        creating = 774110;
                        creatingWithoutRetries = 598582;
                        deleting = 99075;
                        none = 552784;
                        recreating = 466377;
                        refreshing = 624289;
                        restarting = 662924;
                        resuming = 270976;
                        starting = 896995;
                        stopping = 370975;
                        suspending = 43932;
                        verifying = 884367;
                    }};;
                    description = "sed";
                    distributionPolicy = new DistributionPolicy() {{
                        targetShape = DistributionPolicyTargetShapeEnum.BALANCED;
                        zones = new org.openapis.openapi.models.shared.DistributionPolicyZoneConfiguration[]{{
                            add(new DistributionPolicyZoneConfiguration() {{
                                zone = "pariatur";
                            }}),
                            add(new DistributionPolicyZoneConfiguration() {{
                                zone = "asperiores";
                            }}),
                            add(new DistributionPolicyZoneConfiguration() {{
                                zone = "labore";
                            }}),
                            add(new DistributionPolicyZoneConfiguration() {{
                                zone = "laboriosam";
                            }}),
                        }};
                    }};;
                    failoverAction = InstanceGroupManagerFailoverActionEnum.NO_FAILOVER;
                    fingerprint = "repellendus";
                    id = "aspernatur";
                    instanceGroup = "earum";
                    instanceLifecyclePolicy = new InstanceGroupManagerInstanceLifecyclePolicy() {{
                        forceUpdateOnRepair = InstanceGroupManagerInstanceLifecyclePolicyForceUpdateOnRepairEnum.NO;
                    }};;
                    instanceTemplate = "placeat";
                    kind = "dignissimos";
                    listManagedInstancesResults = InstanceGroupManagerListManagedInstancesResultsEnum.PAGINATED;
                    name = "Gretchen Pagac";
                    namedPorts = new org.openapis.openapi.models.shared.NamedPort[]{{
                        add(new NamedPort() {{
                            name = "Matthew Rempel";
                            port = 520931;
                        }}),
                        add(new NamedPort() {{
                            name = "Jessie Torp";
                            port = 910258;
                        }}),
                        add(new NamedPort() {{
                            name = "Neil Macejkovic";
                            port = 637234;
                        }}),
                    }};
                    region = "molestiae";
                    selfLink = "repudiandae";
                    serviceAccount = "quos";
                    statefulPolicy = new StatefulPolicy() {{
                        preservedState = new StatefulPolicyPreservedState() {{
                            disks = new java.util.HashMap<String, org.openapis.openapi.models.shared.StatefulPolicyPreservedStateDiskDevice>() {{
                                put("eligendi", new StatefulPolicyPreservedStateDiskDevice() {{
                                    autoDelete = StatefulPolicyPreservedStateDiskDeviceAutoDeleteEnum.ON_PERMANENT_INSTANCE_DELETION;
                                }});
                                put("repellat", new StatefulPolicyPreservedStateDiskDevice() {{
                                    autoDelete = StatefulPolicyPreservedStateDiskDeviceAutoDeleteEnum.NEVER;
                                }});
                            }};
                            externalIPs = new java.util.HashMap<String, org.openapis.openapi.models.shared.StatefulPolicyPreservedStateNetworkIp>() {{
                                put("fugit", new StatefulPolicyPreservedStateNetworkIp() {{
                                    autoDelete = StatefulPolicyPreservedStateNetworkIpAutoDeleteEnum.ON_PERMANENT_INSTANCE_DELETION;
                                }});
                            }};
                            internalIPs = new java.util.HashMap<String, org.openapis.openapi.models.shared.StatefulPolicyPreservedStateNetworkIp>() {{
                                put("ea", new StatefulPolicyPreservedStateNetworkIp() {{
                                    autoDelete = StatefulPolicyPreservedStateNetworkIpAutoDeleteEnum.NEVER;
                                }});
                                put("itaque", new StatefulPolicyPreservedStateNetworkIp() {{
                                    autoDelete = StatefulPolicyPreservedStateNetworkIpAutoDeleteEnum.NEVER;
                                }});
                                put("quia", new StatefulPolicyPreservedStateNetworkIp() {{
                                    autoDelete = StatefulPolicyPreservedStateNetworkIpAutoDeleteEnum.ON_PERMANENT_INSTANCE_DELETION;
                                }});
                                put("possimus", new StatefulPolicyPreservedStateNetworkIp() {{
                                    autoDelete = StatefulPolicyPreservedStateNetworkIpAutoDeleteEnum.NEVER;
                                }});
                            }};
                        }};;
                    }};;
                    status = new InstanceGroupManagerStatus() {{
                        allInstancesConfig = new InstanceGroupManagerStatusAllInstancesConfig() {{
                            currentRevision = "explicabo";
                            effective = false;
                        }};;
                        autoscaler = "asperiores";
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
                        add("debitis"),
                        add("debitis"),
                        add("rerum"),
                        add("soluta"),
                    }};
                    targetSize = 606674;
                    updatePolicy = new InstanceGroupManagerUpdatePolicy() {{
                        instanceRedistributionType = InstanceGroupManagerUpdatePolicyInstanceRedistributionTypeEnum.PROACTIVE;
                        maxSurge = new FixedOrPercent() {{
                            calculated = 249920;
                            fixed = 600315;
                            percent = 223815;
                        }};;
                        maxUnavailable = new FixedOrPercent() {{
                            calculated = 280963;
                            fixed = 327107;
                            percent = 867425;
                        }};;
                        minReadySec = 176861;
                        minimalAction = InstanceGroupManagerUpdatePolicyMinimalActionEnum.REPLACE;
                        mostDisruptiveAllowedAction = InstanceGroupManagerUpdatePolicyMostDisruptiveAllowedActionEnum.RESTART;
                        replacementMethod = InstanceGroupManagerUpdatePolicyReplacementMethodEnum.SUBSTITUTE;
                        type = InstanceGroupManagerUpdatePolicyTypeEnum.OPPORTUNISTIC;
                    }};;
                    versions = new org.openapis.openapi.models.shared.InstanceGroupManagerVersion[]{{
                        add(new InstanceGroupManagerVersion() {{
                            instanceTemplate = "mollitia";
                            name = "Darrel Buckridge";
                            targetSize = new FixedOrPercent() {{
                                calculated = 485279;
                                fixed = 225921;
                                percent = 767326;
                            }};
                        }}),
                        add(new InstanceGroupManagerVersion() {{
                            instanceTemplate = "porro";
                            name = "James DuBuque";
                            targetSize = new FixedOrPercent() {{
                                calculated = 951610;
                                fixed = 508517;
                                percent = 936132;
                            }};
                        }}),
                        add(new InstanceGroupManagerVersion() {{
                            instanceTemplate = "fuga";
                            name = "Cornelius Dare Sr.";
                            targetSize = new FixedOrPercent() {{
                                calculated = 622254;
                                fixed = 649365;
                                percent = 533400;
                            }};
                        }}),
                    }};
                    zone = "cupiditate";
                }};;
                accessToken = "nihil";
                alt = AltEnum.MEDIA;
                callback = "architecto";
                fields = "deleniti";
                key = "vero";
                oauthToken = "atque";
                prettyPrint = false;
                quotaUser = "libero";
                requestId = "quisquam";
                uploadType = "vero";
                uploadProtocol = "aliquam";
                userIp = "nisi";
            }};            

            ComputeRegionInstanceGroupManagersUpdateResponse res = sdk.regionInstanceGroupManagers.computeRegionInstanceGroupManagersUpdate(req, new ComputeRegionInstanceGroupManagersUpdateSecurity() {{
                option1 = new ComputeRegionInstanceGroupManagersUpdateSecurityOption1("officia", "natus") {{
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

            ComputeRegionInstanceGroupManagersUpdatePerInstanceConfigsRequest req = new ComputeRegionInstanceGroupManagersUpdatePerInstanceConfigsRequest("rem", "iusto", "quia") {{
                dollarXgafv = XgafvEnum.TWO;
                regionInstanceGroupManagerUpdateInstanceConfigReq = new RegionInstanceGroupManagerUpdateInstanceConfigReq() {{
                    perInstanceConfigs = new org.openapis.openapi.models.shared.PerInstanceConfig[]{{
                        add(new PerInstanceConfig() {{
                            fingerprint = "laboriosam";
                            name = "Carroll Hayes";
                            preservedState = new PreservedState() {{
                                disks = new java.util.HashMap<String, org.openapis.openapi.models.shared.PreservedStatePreservedDisk>() {{
                                    put("quia", new PreservedStatePreservedDisk() {{
                                        autoDelete = PreservedStatePreservedDiskAutoDeleteEnum.NEVER;
                                        mode = PreservedStatePreservedDiskModeEnum.READ_WRITE;
                                        source = "ullam";
                                    }});
                                    put("asperiores", new PreservedStatePreservedDisk() {{
                                        autoDelete = PreservedStatePreservedDiskAutoDeleteEnum.ON_PERMANENT_INSTANCE_DELETION;
                                        mode = PreservedStatePreservedDiskModeEnum.READ_WRITE;
                                        source = "est";
                                    }});
                                }};
                                externalIPs = new java.util.HashMap<String, org.openapis.openapi.models.shared.PreservedStatePreservedNetworkIp>() {{
                                    put("dicta", new PreservedStatePreservedNetworkIp() {{
                                        autoDelete = PreservedStatePreservedNetworkIpAutoDeleteEnum.ON_PERMANENT_INSTANCE_DELETION;
                                        ipAddress = new PreservedStatePreservedNetworkIpIpAddress() {{
                                            address = "146 Green Heights";
                                            literal = "amet";
                                        }};
                                    }});
                                    put("explicabo", new PreservedStatePreservedNetworkIp() {{
                                        autoDelete = PreservedStatePreservedNetworkIpAutoDeleteEnum.ON_PERMANENT_INSTANCE_DELETION;
                                        ipAddress = new PreservedStatePreservedNetworkIpIpAddress() {{
                                            address = "31049 Hegmann Well";
                                            literal = "excepturi";
                                        }};
                                    }});
                                }};
                                internalIPs = new java.util.HashMap<String, org.openapis.openapi.models.shared.PreservedStatePreservedNetworkIp>() {{
                                    put("asperiores", new PreservedStatePreservedNetworkIp() {{
                                        autoDelete = PreservedStatePreservedNetworkIpAutoDeleteEnum.ON_PERMANENT_INSTANCE_DELETION;
                                        ipAddress = new PreservedStatePreservedNetworkIpIpAddress() {{
                                            address = "36103 Little Fields";
                                            literal = "eos";
                                        }};
                                    }});
                                    put("vero", new PreservedStatePreservedNetworkIp() {{
                                        autoDelete = PreservedStatePreservedNetworkIpAutoDeleteEnum.ON_PERMANENT_INSTANCE_DELETION;
                                        ipAddress = new PreservedStatePreservedNetworkIpIpAddress() {{
                                            address = "62407 Brian Forge";
                                            literal = "temporibus";
                                        }};
                                    }});
                                    put("cum", new PreservedStatePreservedNetworkIp() {{
                                        autoDelete = PreservedStatePreservedNetworkIpAutoDeleteEnum.NEVER;
                                        ipAddress = new PreservedStatePreservedNetworkIpIpAddress() {{
                                            address = "345 Cummings Park";
                                            literal = "est";
                                        }};
                                    }});
                                    put("esse", new PreservedStatePreservedNetworkIp() {{
                                        autoDelete = PreservedStatePreservedNetworkIpAutoDeleteEnum.ON_PERMANENT_INSTANCE_DELETION;
                                        ipAddress = new PreservedStatePreservedNetworkIpIpAddress() {{
                                            address = "010 Mellie Cove";
                                            literal = "minus";
                                        }};
                                    }});
                                }};
                                metadata = new java.util.HashMap<String, String>() {{
                                    put("commodi", "aliquid");
                                    put("nostrum", "deserunt");
                                }};
                            }};
                            status = PerInstanceConfigStatusEnum.EFFECTIVE;
                        }}),
                        add(new PerInstanceConfig() {{
                            fingerprint = "rerum";
                            name = "Miss Sherman Beer";
                            preservedState = new PreservedState() {{
                                disks = new java.util.HashMap<String, org.openapis.openapi.models.shared.PreservedStatePreservedDisk>() {{
                                    put("error", new PreservedStatePreservedDisk() {{
                                        autoDelete = PreservedStatePreservedDiskAutoDeleteEnum.ON_PERMANENT_INSTANCE_DELETION;
                                        mode = PreservedStatePreservedDiskModeEnum.READ_ONLY;
                                        source = "atque";
                                    }});
                                }};
                                externalIPs = new java.util.HashMap<String, org.openapis.openapi.models.shared.PreservedStatePreservedNetworkIp>() {{
                                    put("temporibus", new PreservedStatePreservedNetworkIp() {{
                                        autoDelete = PreservedStatePreservedNetworkIpAutoDeleteEnum.NEVER;
                                        ipAddress = new PreservedStatePreservedNetworkIpIpAddress() {{
                                            address = "31921 Dickens Knolls";
                                            literal = "aut";
                                        }};
                                    }});
                                    put("eius", new PreservedStatePreservedNetworkIp() {{
                                        autoDelete = PreservedStatePreservedNetworkIpAutoDeleteEnum.NEVER;
                                        ipAddress = new PreservedStatePreservedNetworkIpIpAddress() {{
                                            address = "17702 Torp Hollow";
                                            literal = "fuga";
                                        }};
                                    }});
                                    put("eligendi", new PreservedStatePreservedNetworkIp() {{
                                        autoDelete = PreservedStatePreservedNetworkIpAutoDeleteEnum.NEVER;
                                        ipAddress = new PreservedStatePreservedNetworkIpIpAddress() {{
                                            address = "77427 Kiera Shoals";
                                            literal = "commodi";
                                        }};
                                    }});
                                }};
                                internalIPs = new java.util.HashMap<String, org.openapis.openapi.models.shared.PreservedStatePreservedNetworkIp>() {{
                                    put("aut", new PreservedStatePreservedNetworkIp() {{
                                        autoDelete = PreservedStatePreservedNetworkIpAutoDeleteEnum.ON_PERMANENT_INSTANCE_DELETION;
                                        ipAddress = new PreservedStatePreservedNetworkIpIpAddress() {{
                                            address = "57203 Adam Crescent";
                                            literal = "eveniet";
                                        }};
                                    }});
                                    put("reprehenderit", new PreservedStatePreservedNetworkIp() {{
                                        autoDelete = PreservedStatePreservedNetworkIpAutoDeleteEnum.NEVER;
                                        ipAddress = new PreservedStatePreservedNetworkIpIpAddress() {{
                                            address = "100 Schaden Club";
                                            literal = "nostrum";
                                        }};
                                    }});
                                    put("soluta", new PreservedStatePreservedNetworkIp() {{
                                        autoDelete = PreservedStatePreservedNetworkIpAutoDeleteEnum.NEVER;
                                        ipAddress = new PreservedStatePreservedNetworkIpIpAddress() {{
                                            address = "524 Libby Neck";
                                            literal = "alias";
                                        }};
                                    }});
                                }};
                                metadata = new java.util.HashMap<String, String>() {{
                                    put("nemo", "quibusdam");
                                    put("voluptatibus", "consequuntur");
                                }};
                            }};
                            status = PerInstanceConfigStatusEnum.DELETING;
                        }}),
                    }};
                }};;
                accessToken = "ipsa";
                alt = AltEnum.JSON;
                callback = "est";
                fields = "vitae";
                key = "sequi";
                oauthToken = "blanditiis";
                prettyPrint = false;
                quotaUser = "aspernatur";
                requestId = "aliquid";
                uploadType = "quidem";
                uploadProtocol = "ex";
                userIp = "pariatur";
            }};            

            ComputeRegionInstanceGroupManagersUpdatePerInstanceConfigsResponse res = sdk.regionInstanceGroupManagers.computeRegionInstanceGroupManagersUpdatePerInstanceConfigs(req, new ComputeRegionInstanceGroupManagersUpdatePerInstanceConfigsSecurity() {{
                option1 = new ComputeRegionInstanceGroupManagersUpdatePerInstanceConfigsSecurityOption1("autem", "impedit") {{
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
