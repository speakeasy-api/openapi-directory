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
* [computeRegionInstanceGroupManagersSetInstanceTemplate](#computeregioninstancegroupmanagerssetinstancetemplate) - Sets the instance template to use when creating new instances or recreating instances in this group. Existing instances are not affected.
* [computeRegionInstanceGroupManagersSetTargetPools](#computeregioninstancegroupmanagerssettargetpools) - Modifies the target pools to which all new instances in this group are assigned. Existing instances in the group are not affected.
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

            ComputeRegionInstanceGroupManagersAbandonInstancesRequest req = new ComputeRegionInstanceGroupManagersAbandonInstancesRequest("voluptas", "iusto", "nulla") {{
                dollarXgafv = XgafvEnum.ONE;
                regionInstanceGroupManagersAbandonInstancesRequest = new RegionInstanceGroupManagersAbandonInstancesRequest() {{
                    instances = new String[]{{
                        add("architecto"),
                        add("aliquid"),
                        add("totam"),
                        add("cupiditate"),
                    }};
                }};;
                accessToken = "rerum";
                alt = AltEnum.MEDIA;
                callback = "quasi";
                fields = "rem";
                key = "libero";
                oauthToken = "non";
                prettyPrint = false;
                quotaUser = "sit";
                requestId = "quidem";
                uploadType = "rerum";
                uploadProtocol = "iusto";
                userIp = "a";
            }};            

            ComputeRegionInstanceGroupManagersAbandonInstancesResponse res = sdk.regionInstanceGroupManagers.computeRegionInstanceGroupManagersAbandonInstances(req, new ComputeRegionInstanceGroupManagersAbandonInstancesSecurity() {{
                option1 = new ComputeRegionInstanceGroupManagersAbandonInstancesSecurityOption1("blanditiis", "esse") {{
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

            ComputeRegionInstanceGroupManagersApplyUpdatesToInstancesRequest req = new ComputeRegionInstanceGroupManagersApplyUpdatesToInstancesRequest("eius", "quae", "nobis") {{
                dollarXgafv = XgafvEnum.ONE;
                regionInstanceGroupManagersApplyUpdatesRequest = new RegionInstanceGroupManagersApplyUpdatesRequest() {{
                    allInstances = false;
                    instances = new String[]{{
                        add("fugit"),
                        add("at"),
                        add("blanditiis"),
                    }};
                    minimalAction = RegionInstanceGroupManagersApplyUpdatesRequestMinimalActionEnum.RESTART;
                    mostDisruptiveAllowedAction = RegionInstanceGroupManagersApplyUpdatesRequestMostDisruptiveAllowedActionEnum.NONE;
                }};;
                accessToken = "eveniet";
                alt = AltEnum.PROTO;
                callback = "nobis";
                fields = "autem";
                key = "reiciendis";
                oauthToken = "laboriosam";
                prettyPrint = false;
                quotaUser = "ab";
                uploadType = "quae";
                uploadProtocol = "recusandae";
                userIp = "perspiciatis";
            }};            

            ComputeRegionInstanceGroupManagersApplyUpdatesToInstancesResponse res = sdk.regionInstanceGroupManagers.computeRegionInstanceGroupManagersApplyUpdatesToInstances(req, new ComputeRegionInstanceGroupManagersApplyUpdatesToInstancesSecurity() {{
                option1 = new ComputeRegionInstanceGroupManagersApplyUpdatesToInstancesSecurityOption1("veritatis", "sunt") {{
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
import org.openapis.openapi.models.shared.RegionInstanceGroupManagersCreateInstancesRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeRegionInstanceGroupManagersCreateInstancesRequest req = new ComputeRegionInstanceGroupManagersCreateInstancesRequest("corrupti", "eius", "quisquam") {{
                dollarXgafv = XgafvEnum.ONE;
                regionInstanceGroupManagersCreateInstancesRequest = new RegionInstanceGroupManagersCreateInstancesRequest() {{
                    instances = new org.openapis.openapi.models.shared.PerInstanceConfig[]{{
                        add(new PerInstanceConfig() {{
                            fingerprint = "quasi";
                            name = "Miss Levi Nitzsche";
                            preservedState = new PreservedState() {{
                                disks = new java.util.HashMap<String, org.openapis.openapi.models.shared.PreservedStatePreservedDisk>() {{
                                    put("labore", new PreservedStatePreservedDisk() {{
                                        autoDelete = PreservedStatePreservedDiskAutoDeleteEnum.ON_PERMANENT_INSTANCE_DELETION;
                                        mode = PreservedStatePreservedDiskModeEnum.READ_ONLY;
                                        source = "ratione";
                                    }});
                                    put("dolor", new PreservedStatePreservedDisk() {{
                                        autoDelete = PreservedStatePreservedDiskAutoDeleteEnum.NEVER;
                                        mode = PreservedStatePreservedDiskModeEnum.READ_WRITE;
                                        source = "iste";
                                    }});
                                    put("minus", new PreservedStatePreservedDisk() {{
                                        autoDelete = PreservedStatePreservedDiskAutoDeleteEnum.ON_PERMANENT_INSTANCE_DELETION;
                                        mode = PreservedStatePreservedDiskModeEnum.READ_ONLY;
                                        source = "saepe";
                                    }});
                                    put("enim", new PreservedStatePreservedDisk() {{
                                        autoDelete = PreservedStatePreservedDiskAutoDeleteEnum.NEVER;
                                        mode = PreservedStatePreservedDiskModeEnum.READ_WRITE;
                                        source = "repellendus";
                                    }});
                                }};
                                metadata = new java.util.HashMap<String, String>() {{
                                    put("occaecati", "at");
                                    put("quidem", "dolore");
                                }};
                            }};
                            status = PerInstanceConfigStatusEnum.DELETING;
                        }}),
                        add(new PerInstanceConfig() {{
                            fingerprint = "eaque";
                            name = "Christian Mueller";
                            preservedState = new PreservedState() {{
                                disks = new java.util.HashMap<String, org.openapis.openapi.models.shared.PreservedStatePreservedDisk>() {{
                                    put("laboriosam", new PreservedStatePreservedDisk() {{
                                        autoDelete = PreservedStatePreservedDiskAutoDeleteEnum.NEVER;
                                        mode = PreservedStatePreservedDiskModeEnum.READ_ONLY;
                                        source = "doloribus";
                                    }});
                                    put("ipsa", new PreservedStatePreservedDisk() {{
                                        autoDelete = PreservedStatePreservedDiskAutoDeleteEnum.ON_PERMANENT_INSTANCE_DELETION;
                                        mode = PreservedStatePreservedDiskModeEnum.READ_ONLY;
                                        source = "natus";
                                    }});
                                }};
                                metadata = new java.util.HashMap<String, String>() {{
                                    put("saepe", "adipisci");
                                    put("quaerat", "exercitationem");
                                }};
                            }};
                            status = PerInstanceConfigStatusEnum.UNAPPLIED;
                        }}),
                    }};
                }};;
                accessToken = "doloremque";
                alt = AltEnum.PROTO;
                callback = "omnis";
                fields = "ullam";
                key = "soluta";
                oauthToken = "nam";
                prettyPrint = false;
                quotaUser = "iusto";
                requestId = "quasi";
                uploadType = "suscipit";
                uploadProtocol = "consectetur";
                userIp = "voluptas";
            }};            

            ComputeRegionInstanceGroupManagersCreateInstancesResponse res = sdk.regionInstanceGroupManagers.computeRegionInstanceGroupManagersCreateInstances(req, new ComputeRegionInstanceGroupManagersCreateInstancesSecurity() {{
                option1 = new ComputeRegionInstanceGroupManagersCreateInstancesSecurityOption1("dolorem", "distinctio") {{
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

            ComputeRegionInstanceGroupManagersDeleteRequest req = new ComputeRegionInstanceGroupManagersDeleteRequest("error", "consectetur", "nesciunt") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "ut";
                alt = AltEnum.JSON;
                callback = "tempora";
                fields = "sint";
                key = "hic";
                oauthToken = "eius";
                prettyPrint = false;
                quotaUser = "tenetur";
                requestId = "vel";
                uploadType = "repellendus";
                uploadProtocol = "omnis";
                userIp = "voluptate";
            }};            

            ComputeRegionInstanceGroupManagersDeleteResponse res = sdk.regionInstanceGroupManagers.computeRegionInstanceGroupManagersDelete(req, new ComputeRegionInstanceGroupManagersDeleteSecurity() {{
                option1 = new ComputeRegionInstanceGroupManagersDeleteSecurityOption1("saepe", "dignissimos") {{
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

            ComputeRegionInstanceGroupManagersDeleteInstancesRequest req = new ComputeRegionInstanceGroupManagersDeleteInstancesRequest("rerum", "voluptas", "similique") {{
                dollarXgafv = XgafvEnum.ONE;
                regionInstanceGroupManagersDeleteInstancesRequest = new RegionInstanceGroupManagersDeleteInstancesRequest() {{
                    instances = new String[]{{
                        add("odit"),
                        add("magni"),
                        add("tempora"),
                    }};
                    skipInstancesOnValidationError = false;
                }};;
                accessToken = "officiis";
                alt = AltEnum.JSON;
                callback = "minus";
                fields = "accusamus";
                key = "eligendi";
                oauthToken = "harum";
                prettyPrint = false;
                quotaUser = "quam";
                requestId = "aspernatur";
                uploadType = "eius";
                uploadProtocol = "eum";
                userIp = "voluptatem";
            }};            

            ComputeRegionInstanceGroupManagersDeleteInstancesResponse res = sdk.regionInstanceGroupManagers.computeRegionInstanceGroupManagersDeleteInstances(req, new ComputeRegionInstanceGroupManagersDeleteInstancesSecurity() {{
                option1 = new ComputeRegionInstanceGroupManagersDeleteInstancesSecurityOption1("minima", "quaerat") {{
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

            ComputeRegionInstanceGroupManagersDeletePerInstanceConfigsRequest req = new ComputeRegionInstanceGroupManagersDeletePerInstanceConfigsRequest("aut", "modi", "cum") {{
                dollarXgafv = XgafvEnum.TWO;
                regionInstanceGroupManagerDeleteInstanceConfigReq = new RegionInstanceGroupManagerDeleteInstanceConfigReq() {{
                    names = new String[]{{
                        add("nemo"),
                        add("corporis"),
                    }};
                }};;
                accessToken = "possimus";
                alt = AltEnum.JSON;
                callback = "perferendis";
                fields = "odio";
                key = "maiores";
                oauthToken = "tempora";
                prettyPrint = false;
                quotaUser = "quaerat";
                uploadType = "praesentium";
                uploadProtocol = "minima";
                userIp = "non";
            }};            

            ComputeRegionInstanceGroupManagersDeletePerInstanceConfigsResponse res = sdk.regionInstanceGroupManagers.computeRegionInstanceGroupManagersDeletePerInstanceConfigs(req, new ComputeRegionInstanceGroupManagersDeletePerInstanceConfigsSecurity() {{
                option1 = new ComputeRegionInstanceGroupManagersDeletePerInstanceConfigsSecurityOption1("voluptatum", "dolore") {{
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

            ComputeRegionInstanceGroupManagersGetRequest req = new ComputeRegionInstanceGroupManagersGetRequest("laudantium", "vel", "eaque") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "corporis";
                alt = AltEnum.PROTO;
                callback = "et";
                fields = "incidunt";
                key = "incidunt";
                oauthToken = "minima";
                prettyPrint = false;
                quotaUser = "eos";
                uploadType = "deserunt";
                uploadProtocol = "voluptatem";
                userIp = "repellat";
            }};            

            ComputeRegionInstanceGroupManagersGetResponse res = sdk.regionInstanceGroupManagers.computeRegionInstanceGroupManagersGet(req, new ComputeRegionInstanceGroupManagersGetSecurity() {{
                option1 = new ComputeRegionInstanceGroupManagersGetSecurityOption1("eligendi", "amet") {{
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

            ComputeRegionInstanceGroupManagersInsertRequest req = new ComputeRegionInstanceGroupManagersInsertRequest("animi", "dolor") {{
                dollarXgafv = XgafvEnum.TWO;
                instanceGroupManager = new InstanceGroupManager() {{
                    autoHealingPolicies = new org.openapis.openapi.models.shared.InstanceGroupManagerAutoHealingPolicy[]{{
                        add(new InstanceGroupManagerAutoHealingPolicy() {{
                            healthCheck = "possimus";
                            initialDelaySec = 798070;
                        }}),
                        add(new InstanceGroupManagerAutoHealingPolicy() {{
                            healthCheck = "repellendus";
                            initialDelaySec = 329012;
                        }}),
                        add(new InstanceGroupManagerAutoHealingPolicy() {{
                            healthCheck = "expedita";
                            initialDelaySec = 14750;
                        }}),
                        add(new InstanceGroupManagerAutoHealingPolicy() {{
                            healthCheck = "voluptatem";
                            initialDelaySec = 429518;
                        }}),
                    }};
                    baseInstanceName = "molestias";
                    creationTimestamp = "atque";
                    currentActions = new InstanceGroupManagerActionsSummary() {{
                        abandoning = 757896;
                        creating = 760155;
                        creatingWithoutRetries = 612221;
                        deleting = 660947;
                        none = 361459;
                        recreating = 672127;
                        refreshing = 182294;
                        restarting = 803381;
                        resuming = 886764;
                        starting = 774872;
                        stopping = 402648;
                        suspending = 473254;
                        verifying = 223426;
                    }};;
                    description = "beatae";
                    distributionPolicy = new DistributionPolicy() {{
                        targetShape = DistributionPolicyTargetShapeEnum.EVEN;
                        zones = new org.openapis.openapi.models.shared.DistributionPolicyZoneConfiguration[]{{
                            add(new DistributionPolicyZoneConfiguration() {{
                                zone = "beatae";
                            }}),
                            add(new DistributionPolicyZoneConfiguration() {{
                                zone = "unde";
                            }}),
                            add(new DistributionPolicyZoneConfiguration() {{
                                zone = "eaque";
                            }}),
                            add(new DistributionPolicyZoneConfiguration() {{
                                zone = "accusantium";
                            }}),
                        }};
                    }};;
                    fingerprint = "pariatur";
                    id = "quisquam";
                    instanceGroup = "perspiciatis";
                    instanceTemplate = "nisi";
                    kind = "ratione";
                    listManagedInstancesResults = InstanceGroupManagerListManagedInstancesResultsEnum.PAGELESS;
                    name = "Myrtle Simonis";
                    namedPorts = new org.openapis.openapi.models.shared.NamedPort[]{{
                        add(new NamedPort() {{
                            name = "Mark Hudson";
                            port = 40444;
                        }}),
                        add(new NamedPort() {{
                            name = "Taylor Treutel";
                            port = 270570;
                        }}),
                        add(new NamedPort() {{
                            name = "Rodolfo Armstrong";
                            port = 660131;
                        }}),
                        add(new NamedPort() {{
                            name = "Loren Conn";
                            port = 600460;
                        }}),
                    }};
                    region = "alias";
                    selfLink = "totam";
                    statefulPolicy = new StatefulPolicy() {{
                        preservedState = new StatefulPolicyPreservedState() {{
                            disks = new java.util.HashMap<String, org.openapis.openapi.models.shared.StatefulPolicyPreservedStateDiskDevice>() {{
                                put("quis", new StatefulPolicyPreservedStateDiskDevice() {{
                                    autoDelete = StatefulPolicyPreservedStateDiskDeviceAutoDeleteEnum.NEVER;
                                }});
                            }};
                        }};;
                    }};;
                    status = new InstanceGroupManagerStatus() {{
                        autoscaler = "libero";
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
                        add("iure"),
                    }};
                    targetSize = 923604;
                    updatePolicy = new InstanceGroupManagerUpdatePolicy() {{
                        instanceRedistributionType = InstanceGroupManagerUpdatePolicyInstanceRedistributionTypeEnum.NONE;
                        maxSurge = new FixedOrPercent() {{
                            calculated = 18689;
                            fixed = 209234;
                            percent = 910670;
                        }};;
                        maxUnavailable = new FixedOrPercent() {{
                            calculated = 738954;
                            fixed = 411953;
                            percent = 10600;
                        }};;
                        minimalAction = InstanceGroupManagerUpdatePolicyMinimalActionEnum.REFRESH;
                        mostDisruptiveAllowedAction = InstanceGroupManagerUpdatePolicyMostDisruptiveAllowedActionEnum.REFRESH;
                        replacementMethod = InstanceGroupManagerUpdatePolicyReplacementMethodEnum.RECREATE;
                        type = InstanceGroupManagerUpdatePolicyTypeEnum.PROACTIVE;
                    }};;
                    versions = new org.openapis.openapi.models.shared.InstanceGroupManagerVersion[]{{
                        add(new InstanceGroupManagerVersion() {{
                            instanceTemplate = "modi";
                            name = "Anne Kozey";
                            targetSize = new FixedOrPercent() {{
                                calculated = 105868;
                                fixed = 51742;
                                percent = 721183;
                            }};
                        }}),
                        add(new InstanceGroupManagerVersion() {{
                            instanceTemplate = "expedita";
                            name = "Gene Bauch";
                            targetSize = new FixedOrPercent() {{
                                calculated = 952017;
                                fixed = 771762;
                                percent = 896172;
                            }};
                        }}),
                        add(new InstanceGroupManagerVersion() {{
                            instanceTemplate = "voluptatibus";
                            name = "Sandy Legros DDS";
                            targetSize = new FixedOrPercent() {{
                                calculated = 33057;
                                fixed = 308664;
                                percent = 422498;
                            }};
                        }}),
                        add(new InstanceGroupManagerVersion() {{
                            instanceTemplate = "eligendi";
                            name = "Katherine Jerde";
                            targetSize = new FixedOrPercent() {{
                                calculated = 908773;
                                fixed = 797434;
                                percent = 524620;
                            }};
                        }}),
                    }};
                    zone = "fugiat";
                }};;
                accessToken = "tenetur";
                alt = AltEnum.JSON;
                callback = "suscipit";
                fields = "modi";
                key = "rem";
                oauthToken = "aut";
                prettyPrint = false;
                quotaUser = "excepturi";
                requestId = "nemo";
                uploadType = "sapiente";
                uploadProtocol = "repellendus";
                userIp = "facilis";
            }};            

            ComputeRegionInstanceGroupManagersInsertResponse res = sdk.regionInstanceGroupManagers.computeRegionInstanceGroupManagersInsert(req, new ComputeRegionInstanceGroupManagersInsertSecurity() {{
                option1 = new ComputeRegionInstanceGroupManagersInsertSecurityOption1("possimus", "perspiciatis") {{
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

            ComputeRegionInstanceGroupManagersListRequest req = new ComputeRegionInstanceGroupManagersListRequest("corporis", "quae") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "dolor";
                alt = AltEnum.MEDIA;
                callback = "sunt";
                fields = "nulla";
                filter = "laudantium";
                key = "aspernatur";
                maxResults = 990818L;
                oauthToken = "cum";
                orderBy = "temporibus";
                pageToken = "amet";
                prettyPrint = false;
                quotaUser = "odio";
                returnPartialSuccess = false;
                uploadType = "accusamus";
                uploadProtocol = "laudantium";
                userIp = "ad";
            }};            

            ComputeRegionInstanceGroupManagersListResponse res = sdk.regionInstanceGroupManagers.computeRegionInstanceGroupManagersList(req, new ComputeRegionInstanceGroupManagersListSecurity() {{
                option1 = new ComputeRegionInstanceGroupManagersListSecurityOption1("doloremque", "officiis") {{
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

            ComputeRegionInstanceGroupManagersListErrorsRequest req = new ComputeRegionInstanceGroupManagersListErrorsRequest("temporibus", "quos", "suscipit") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "voluptatem";
                alt = AltEnum.PROTO;
                callback = "recusandae";
                fields = "tenetur";
                filter = "reprehenderit";
                key = "non";
                maxResults = 674572L;
                oauthToken = "doloremque";
                orderBy = "atque";
                pageToken = "veniam";
                prettyPrint = false;
                quotaUser = "quisquam";
                returnPartialSuccess = false;
                uploadType = "saepe";
                uploadProtocol = "delectus";
                userIp = "sapiente";
            }};            

            ComputeRegionInstanceGroupManagersListErrorsResponse res = sdk.regionInstanceGroupManagers.computeRegionInstanceGroupManagersListErrors(req, new ComputeRegionInstanceGroupManagersListErrorsSecurity() {{
                option1 = new ComputeRegionInstanceGroupManagersListErrorsSecurityOption1("error", "nulla") {{
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

            ComputeRegionInstanceGroupManagersListManagedInstancesRequest req = new ComputeRegionInstanceGroupManagersListManagedInstancesRequest("dicta", "voluptatem", "provident") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "voluptatem";
                alt = AltEnum.MEDIA;
                callback = "nostrum";
                fields = "est";
                filter = "illo";
                key = "dignissimos";
                maxResults = 285710L;
                oauthToken = "explicabo";
                orderBy = "necessitatibus";
                pageToken = "velit";
                prettyPrint = false;
                quotaUser = "dolorem";
                returnPartialSuccess = false;
                uploadType = "quisquam";
                uploadProtocol = "porro";
                userIp = "culpa";
            }};            

            ComputeRegionInstanceGroupManagersListManagedInstancesResponse res = sdk.regionInstanceGroupManagers.computeRegionInstanceGroupManagersListManagedInstances(req, new ComputeRegionInstanceGroupManagersListManagedInstancesSecurity() {{
                option1 = new ComputeRegionInstanceGroupManagersListManagedInstancesSecurityOption1("aliquid", "excepturi") {{
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

            ComputeRegionInstanceGroupManagersListPerInstanceConfigsRequest req = new ComputeRegionInstanceGroupManagersListPerInstanceConfigsRequest("ipsam", "delectus", "quibusdam") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "commodi";
                alt = AltEnum.JSON;
                callback = "maiores";
                fields = "provident";
                filter = "nesciunt";
                key = "nihil";
                maxResults = 879491L;
                oauthToken = "dolores";
                orderBy = "tempora";
                pageToken = "quibusdam";
                prettyPrint = false;
                quotaUser = "quas";
                returnPartialSuccess = false;
                uploadType = "iure";
                uploadProtocol = "dicta";
                userIp = "amet";
            }};            

            ComputeRegionInstanceGroupManagersListPerInstanceConfigsResponse res = sdk.regionInstanceGroupManagers.computeRegionInstanceGroupManagersListPerInstanceConfigs(req, new ComputeRegionInstanceGroupManagersListPerInstanceConfigsSecurity() {{
                option1 = new ComputeRegionInstanceGroupManagersListPerInstanceConfigsSecurityOption1("aperiam", "magnam") {{
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

            ComputeRegionInstanceGroupManagersPatchRequest req = new ComputeRegionInstanceGroupManagersPatchRequest("ipsam", "quibusdam", "eos") {{
                dollarXgafv = XgafvEnum.TWO;
                instanceGroupManager1 = new InstanceGroupManager() {{
                    autoHealingPolicies = new org.openapis.openapi.models.shared.InstanceGroupManagerAutoHealingPolicy[]{{
                        add(new InstanceGroupManagerAutoHealingPolicy() {{
                            healthCheck = "quasi";
                            initialDelaySec = 242992;
                        }}),
                        add(new InstanceGroupManagerAutoHealingPolicy() {{
                            healthCheck = "vero";
                            initialDelaySec = 38873;
                        }}),
                    }};
                    baseInstanceName = "ullam";
                    creationTimestamp = "distinctio";
                    currentActions = new InstanceGroupManagerActionsSummary() {{
                        abandoning = 367343;
                        creating = 333800;
                        creatingWithoutRetries = 600316;
                        deleting = 172302;
                        none = 717816;
                        recreating = 947974;
                        refreshing = 777775;
                        restarting = 488559;
                        resuming = 201356;
                        starting = 562959;
                        stopping = 313651;
                        suspending = 962224;
                        verifying = 479526;
                    }};;
                    description = "dicta";
                    distributionPolicy = new DistributionPolicy() {{
                        targetShape = DistributionPolicyTargetShapeEnum.ANY;
                        zones = new org.openapis.openapi.models.shared.DistributionPolicyZoneConfiguration[]{{
                            add(new DistributionPolicyZoneConfiguration() {{
                                zone = "ipsum";
                            }}),
                        }};
                    }};;
                    fingerprint = "expedita";
                    id = "corporis";
                    instanceGroup = "molestias";
                    instanceTemplate = "magnam";
                    kind = "commodi";
                    listManagedInstancesResults = InstanceGroupManagerListManagedInstancesResultsEnum.PAGINATED;
                    name = "Hannah McDermott";
                    namedPorts = new org.openapis.openapi.models.shared.NamedPort[]{{
                        add(new NamedPort() {{
                            name = "Samuel Gutkowski";
                            port = 343145;
                        }}),
                        add(new NamedPort() {{
                            name = "Carol Douglas";
                            port = 915011;
                        }}),
                    }};
                    region = "assumenda";
                    selfLink = "velit";
                    statefulPolicy = new StatefulPolicy() {{
                        preservedState = new StatefulPolicyPreservedState() {{
                            disks = new java.util.HashMap<String, org.openapis.openapi.models.shared.StatefulPolicyPreservedStateDiskDevice>() {{
                                put("tenetur", new StatefulPolicyPreservedStateDiskDevice() {{
                                    autoDelete = StatefulPolicyPreservedStateDiskDeviceAutoDeleteEnum.NEVER;
                                }});
                            }};
                        }};;
                    }};;
                    status = new InstanceGroupManagerStatus() {{
                        autoscaler = "culpa";
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
                        add("recusandae"),
                        add("culpa"),
                        add("soluta"),
                        add("asperiores"),
                    }};
                    targetSize = 557208;
                    updatePolicy = new InstanceGroupManagerUpdatePolicy() {{
                        instanceRedistributionType = InstanceGroupManagerUpdatePolicyInstanceRedistributionTypeEnum.NONE;
                        maxSurge = new FixedOrPercent() {{
                            calculated = 113948;
                            fixed = 161742;
                            percent = 265094;
                        }};;
                        maxUnavailable = new FixedOrPercent() {{
                            calculated = 319680;
                            fixed = 597637;
                            percent = 6227;
                        }};;
                        minimalAction = InstanceGroupManagerUpdatePolicyMinimalActionEnum.REFRESH;
                        mostDisruptiveAllowedAction = InstanceGroupManagerUpdatePolicyMostDisruptiveAllowedActionEnum.REPLACE;
                        replacementMethod = InstanceGroupManagerUpdatePolicyReplacementMethodEnum.SUBSTITUTE;
                        type = InstanceGroupManagerUpdatePolicyTypeEnum.PROACTIVE;
                    }};;
                    versions = new org.openapis.openapi.models.shared.InstanceGroupManagerVersion[]{{
                        add(new InstanceGroupManagerVersion() {{
                            instanceTemplate = "autem";
                            name = "Tonya Kessler";
                            targetSize = new FixedOrPercent() {{
                                calculated = 611902;
                                fixed = 831301;
                                percent = 263502;
                            }};
                        }}),
                        add(new InstanceGroupManagerVersion() {{
                            instanceTemplate = "vero";
                            name = "Emma Dooley";
                            targetSize = new FixedOrPercent() {{
                                calculated = 846880;
                                fixed = 670162;
                                percent = 320758;
                            }};
                        }}),
                    }};
                    zone = "officia";
                }};;
                accessToken = "debitis";
                alt = AltEnum.JSON;
                callback = "necessitatibus";
                fields = "atque";
                key = "expedita";
                oauthToken = "nulla";
                prettyPrint = false;
                quotaUser = "nobis";
                requestId = "modi";
                uploadType = "voluptate";
                uploadProtocol = "sit";
                userIp = "atque";
            }};            

            ComputeRegionInstanceGroupManagersPatchResponse res = sdk.regionInstanceGroupManagers.computeRegionInstanceGroupManagersPatch(req, new ComputeRegionInstanceGroupManagersPatchSecurity() {{
                option1 = new ComputeRegionInstanceGroupManagersPatchSecurityOption1("incidunt", "nesciunt") {{
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
import org.openapis.openapi.models.shared.RegionInstanceGroupManagerPatchInstanceConfigReq;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeRegionInstanceGroupManagersPatchPerInstanceConfigsRequest req = new ComputeRegionInstanceGroupManagersPatchPerInstanceConfigsRequest("hic", "saepe", "perferendis") {{
                dollarXgafv = XgafvEnum.TWO;
                regionInstanceGroupManagerPatchInstanceConfigReq = new RegionInstanceGroupManagerPatchInstanceConfigReq() {{
                    perInstanceConfigs = new org.openapis.openapi.models.shared.PerInstanceConfig[]{{
                        add(new PerInstanceConfig() {{
                            fingerprint = "deserunt";
                            name = "Ollie Quigley";
                            preservedState = new PreservedState() {{
                                disks = new java.util.HashMap<String, org.openapis.openapi.models.shared.PreservedStatePreservedDisk>() {{
                                    put("provident", new PreservedStatePreservedDisk() {{
                                        autoDelete = PreservedStatePreservedDiskAutoDeleteEnum.NEVER;
                                        mode = PreservedStatePreservedDiskModeEnum.READ_ONLY;
                                        source = "laborum";
                                    }});
                                    put("esse", new PreservedStatePreservedDisk() {{
                                        autoDelete = PreservedStatePreservedDiskAutoDeleteEnum.ON_PERMANENT_INSTANCE_DELETION;
                                        mode = PreservedStatePreservedDiskModeEnum.READ_WRITE;
                                        source = "incidunt";
                                    }});
                                    put("eos", new PreservedStatePreservedDisk() {{
                                        autoDelete = PreservedStatePreservedDiskAutoDeleteEnum.NEVER;
                                        mode = PreservedStatePreservedDiskModeEnum.READ_ONLY;
                                        source = "maxime";
                                    }});
                                    put("est", new PreservedStatePreservedDisk() {{
                                        autoDelete = PreservedStatePreservedDiskAutoDeleteEnum.ON_PERMANENT_INSTANCE_DELETION;
                                        mode = PreservedStatePreservedDiskModeEnum.READ_ONLY;
                                        source = "veritatis";
                                    }});
                                }};
                                metadata = new java.util.HashMap<String, String>() {{
                                    put("aspernatur", "minus");
                                    put("alias", "repellendus");
                                    put("ipsa", "quos");
                                }};
                            }};
                            status = PerInstanceConfigStatusEnum.UNAPPLIED;
                        }}),
                    }};
                }};;
                accessToken = "voluptas";
                alt = AltEnum.PROTO;
                callback = "natus";
                fields = "sequi";
                key = "qui";
                oauthToken = "sit";
                prettyPrint = false;
                quotaUser = "neque";
                requestId = "minus";
                uploadType = "possimus";
                uploadProtocol = "magnam";
                userIp = "facere";
            }};            

            ComputeRegionInstanceGroupManagersPatchPerInstanceConfigsResponse res = sdk.regionInstanceGroupManagers.computeRegionInstanceGroupManagersPatchPerInstanceConfigs(req, new ComputeRegionInstanceGroupManagersPatchPerInstanceConfigsSecurity() {{
                option1 = new ComputeRegionInstanceGroupManagersPatchPerInstanceConfigsSecurityOption1("in", "ea") {{
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

            ComputeRegionInstanceGroupManagersRecreateInstancesRequest req = new ComputeRegionInstanceGroupManagersRecreateInstancesRequest("odit", "nihil", "vitae") {{
                dollarXgafv = XgafvEnum.ONE;
                regionInstanceGroupManagersRecreateRequest = new RegionInstanceGroupManagersRecreateRequest() {{
                    instances = new String[]{{
                        add("voluptate"),
                        add("eius"),
                    }};
                }};;
                accessToken = "amet";
                alt = AltEnum.MEDIA;
                callback = "ipsum";
                fields = "in";
                key = "repellendus";
                oauthToken = "ab";
                prettyPrint = false;
                quotaUser = "est";
                requestId = "mollitia";
                uploadType = "voluptatibus";
                uploadProtocol = "earum";
                userIp = "consequuntur";
            }};            

            ComputeRegionInstanceGroupManagersRecreateInstancesResponse res = sdk.regionInstanceGroupManagers.computeRegionInstanceGroupManagersRecreateInstances(req, new ComputeRegionInstanceGroupManagersRecreateInstancesSecurity() {{
                option1 = new ComputeRegionInstanceGroupManagersRecreateInstancesSecurityOption1("facilis", "recusandae") {{
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

            ComputeRegionInstanceGroupManagersResizeRequest req = new ComputeRegionInstanceGroupManagersResizeRequest("quisquam", "cumque", "amet", 527575L) {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "mollitia";
                alt = AltEnum.PROTO;
                callback = "temporibus";
                fields = "labore";
                key = "voluptatum";
                oauthToken = "vitae";
                prettyPrint = false;
                quotaUser = "deserunt";
                requestId = "distinctio";
                uploadType = "voluptatibus";
                uploadProtocol = "quod";
                userIp = "nam";
            }};            

            ComputeRegionInstanceGroupManagersResizeResponse res = sdk.regionInstanceGroupManagers.computeRegionInstanceGroupManagersResize(req, new ComputeRegionInstanceGroupManagersResizeSecurity() {{
                option1 = new ComputeRegionInstanceGroupManagersResizeSecurityOption1("suscipit", "inventore") {{
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

            ComputeRegionInstanceGroupManagersSetInstanceTemplateRequest req = new ComputeRegionInstanceGroupManagersSetInstanceTemplateRequest("optio", "distinctio", "magni") {{
                dollarXgafv = XgafvEnum.TWO;
                regionInstanceGroupManagersSetTemplateRequest = new RegionInstanceGroupManagersSetTemplateRequest() {{
                    instanceTemplate = "quam";
                }};;
                accessToken = "nisi";
                alt = AltEnum.MEDIA;
                callback = "doloremque";
                fields = "quasi";
                key = "libero";
                oauthToken = "occaecati";
                prettyPrint = false;
                quotaUser = "quaerat";
                requestId = "velit";
                uploadType = "repudiandae";
                uploadProtocol = "hic";
                userIp = "qui";
            }};            

            ComputeRegionInstanceGroupManagersSetInstanceTemplateResponse res = sdk.regionInstanceGroupManagers.computeRegionInstanceGroupManagersSetInstanceTemplate(req, new ComputeRegionInstanceGroupManagersSetInstanceTemplateSecurity() {{
                option1 = new ComputeRegionInstanceGroupManagersSetInstanceTemplateSecurityOption1("est", "voluptas") {{
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

            ComputeRegionInstanceGroupManagersSetTargetPoolsRequest req = new ComputeRegionInstanceGroupManagersSetTargetPoolsRequest("explicabo", "sit", "facilis") {{
                dollarXgafv = XgafvEnum.ONE;
                regionInstanceGroupManagersSetTargetPoolsRequest = new RegionInstanceGroupManagersSetTargetPoolsRequest() {{
                    fingerprint = "placeat";
                    targetPools = new String[]{{
                        add("vitae"),
                    }};
                }};;
                accessToken = "perspiciatis";
                alt = AltEnum.JSON;
                callback = "soluta";
                fields = "veritatis";
                key = "incidunt";
                oauthToken = "quaerat";
                prettyPrint = false;
                quotaUser = "aspernatur";
                requestId = "quaerat";
                uploadType = "dicta";
                uploadProtocol = "cum";
                userIp = "numquam";
            }};            

            ComputeRegionInstanceGroupManagersSetTargetPoolsResponse res = sdk.regionInstanceGroupManagers.computeRegionInstanceGroupManagersSetTargetPools(req, new ComputeRegionInstanceGroupManagersSetTargetPoolsSecurity() {{
                option1 = new ComputeRegionInstanceGroupManagersSetTargetPoolsSecurityOption1("in", "assumenda") {{
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
import org.openapis.openapi.models.shared.RegionInstanceGroupManagerUpdateInstanceConfigReq;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeRegionInstanceGroupManagersUpdatePerInstanceConfigsRequest req = new ComputeRegionInstanceGroupManagersUpdatePerInstanceConfigsRequest("consequatur", "eum", "esse") {{
                dollarXgafv = XgafvEnum.ONE;
                regionInstanceGroupManagerUpdateInstanceConfigReq = new RegionInstanceGroupManagerUpdateInstanceConfigReq() {{
                    perInstanceConfigs = new org.openapis.openapi.models.shared.PerInstanceConfig[]{{
                        add(new PerInstanceConfig() {{
                            fingerprint = "ut";
                            name = "Annette Lesch";
                            preservedState = new PreservedState() {{
                                disks = new java.util.HashMap<String, org.openapis.openapi.models.shared.PreservedStatePreservedDisk>() {{
                                    put("labore", new PreservedStatePreservedDisk() {{
                                        autoDelete = PreservedStatePreservedDiskAutoDeleteEnum.ON_PERMANENT_INSTANCE_DELETION;
                                        mode = PreservedStatePreservedDiskModeEnum.READ_ONLY;
                                        source = "quo";
                                    }});
                                    put("dolore", new PreservedStatePreservedDisk() {{
                                        autoDelete = PreservedStatePreservedDiskAutoDeleteEnum.ON_PERMANENT_INSTANCE_DELETION;
                                        mode = PreservedStatePreservedDiskModeEnum.READ_ONLY;
                                        source = "velit";
                                    }});
                                    put("porro", new PreservedStatePreservedDisk() {{
                                        autoDelete = PreservedStatePreservedDiskAutoDeleteEnum.NEVER;
                                        mode = PreservedStatePreservedDiskModeEnum.READ_ONLY;
                                        source = "saepe";
                                    }});
                                }};
                                metadata = new java.util.HashMap<String, String>() {{
                                    put("assumenda", "temporibus");
                                    put("consequatur", "necessitatibus");
                                }};
                            }};
                            status = PerInstanceConfigStatusEnum.APPLYING;
                        }}),
                        add(new PerInstanceConfig() {{
                            fingerprint = "dolore";
                            name = "Ann Smitham";
                            preservedState = new PreservedState() {{
                                disks = new java.util.HashMap<String, org.openapis.openapi.models.shared.PreservedStatePreservedDisk>() {{
                                    put("sequi", new PreservedStatePreservedDisk() {{
                                        autoDelete = PreservedStatePreservedDiskAutoDeleteEnum.ON_PERMANENT_INSTANCE_DELETION;
                                        mode = PreservedStatePreservedDiskModeEnum.READ_WRITE;
                                        source = "voluptates";
                                    }});
                                }};
                                metadata = new java.util.HashMap<String, String>() {{
                                    put("sint", "mollitia");
                                    put("illo", "enim");
                                }};
                            }};
                            status = PerInstanceConfigStatusEnum.UNAPPLIED_DELETION;
                        }}),
                        add(new PerInstanceConfig() {{
                            fingerprint = "sunt";
                            name = "Shelley Frami";
                            preservedState = new PreservedState() {{
                                disks = new java.util.HashMap<String, org.openapis.openapi.models.shared.PreservedStatePreservedDisk>() {{
                                    put("qui", new PreservedStatePreservedDisk() {{
                                        autoDelete = PreservedStatePreservedDiskAutoDeleteEnum.ON_PERMANENT_INSTANCE_DELETION;
                                        mode = PreservedStatePreservedDiskModeEnum.READ_WRITE;
                                        source = "eum";
                                    }});
                                }};
                                metadata = new java.util.HashMap<String, String>() {{
                                    put("architecto", "earum");
                                }};
                            }};
                            status = PerInstanceConfigStatusEnum.UNAPPLIED;
                        }}),
                    }};
                }};;
                accessToken = "deleniti";
                alt = AltEnum.PROTO;
                callback = "soluta";
                fields = "magnam";
                key = "corrupti";
                oauthToken = "fuga";
                prettyPrint = false;
                quotaUser = "pariatur";
                requestId = "dicta";
                uploadType = "dicta";
                uploadProtocol = "laboriosam";
                userIp = "est";
            }};            

            ComputeRegionInstanceGroupManagersUpdatePerInstanceConfigsResponse res = sdk.regionInstanceGroupManagers.computeRegionInstanceGroupManagersUpdatePerInstanceConfigs(req, new ComputeRegionInstanceGroupManagersUpdatePerInstanceConfigsSecurity() {{
                option1 = new ComputeRegionInstanceGroupManagersUpdatePerInstanceConfigsSecurityOption1("dolor", "doloribus") {{
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
