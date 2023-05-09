# projects

### Available Operations

* [vmmigrationProjectsLocationsGroupsAddGroupMigration](#vmmigrationprojectslocationsgroupsaddgroupmigration) - Adds a MigratingVm to a Group.
* [vmmigrationProjectsLocationsGroupsCreate](#vmmigrationprojectslocationsgroupscreate) - Creates a new Group in a given project and location.
* [vmmigrationProjectsLocationsGroupsList](#vmmigrationprojectslocationsgroupslist) - Lists Groups in a given project and location.
* [vmmigrationProjectsLocationsGroupsRemoveGroupMigration](#vmmigrationprojectslocationsgroupsremovegroupmigration) - Removes a MigratingVm from a Group.
* [vmmigrationProjectsLocationsList](#vmmigrationprojectslocationslist) - Lists information about the supported locations for this service.
* [vmmigrationProjectsLocationsOperationsList](#vmmigrationprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* [vmmigrationProjectsLocationsSourcesCreate](#vmmigrationprojectslocationssourcescreate) - Creates a new Source in a given project and location.
* [vmmigrationProjectsLocationsSourcesDatacenterConnectorsCreate](#vmmigrationprojectslocationssourcesdatacenterconnectorscreate) - Creates a new DatacenterConnector in a given Source.
* [vmmigrationProjectsLocationsSourcesDatacenterConnectorsList](#vmmigrationprojectslocationssourcesdatacenterconnectorslist) - Lists DatacenterConnectors in a given Source.
* [vmmigrationProjectsLocationsSourcesDatacenterConnectorsUpgradeAppliance](#vmmigrationprojectslocationssourcesdatacenterconnectorsupgradeappliance) - Upgrades the appliance relate to this DatacenterConnector to the in-place updateable version.
* [vmmigrationProjectsLocationsSourcesFetchInventory](#vmmigrationprojectslocationssourcesfetchinventory) - List remote source's inventory of VMs. The remote source is the onprem vCenter (remote in the sense it's not in Compute Engine). The inventory describes the list of existing VMs in that source. Note that this operation lists the VMs on the remote source, as opposed to listing the MigratingVms resources in the vmmigration service.
* [vmmigrationProjectsLocationsSourcesList](#vmmigrationprojectslocationssourceslist) - Lists Sources in a given project and location.
* [vmmigrationProjectsLocationsSourcesMigratingVmsCloneJobsCreate](#vmmigrationprojectslocationssourcesmigratingvmsclonejobscreate) - Initiates a Clone of a specific migrating VM.
* [vmmigrationProjectsLocationsSourcesMigratingVmsCloneJobsList](#vmmigrationprojectslocationssourcesmigratingvmsclonejobslist) - Lists CloneJobs of a given migrating VM.
* [vmmigrationProjectsLocationsSourcesMigratingVmsCreate](#vmmigrationprojectslocationssourcesmigratingvmscreate) - Creates a new MigratingVm in a given Source.
* [vmmigrationProjectsLocationsSourcesMigratingVmsCutoverJobsCancel](#vmmigrationprojectslocationssourcesmigratingvmscutoverjobscancel) - Initiates the cancellation of a running cutover job.
* [vmmigrationProjectsLocationsSourcesMigratingVmsCutoverJobsCreate](#vmmigrationprojectslocationssourcesmigratingvmscutoverjobscreate) - Initiates a Cutover of a specific migrating VM. The returned LRO is completed when the cutover job resource is created and the job is initiated.
* [vmmigrationProjectsLocationsSourcesMigratingVmsCutoverJobsList](#vmmigrationprojectslocationssourcesmigratingvmscutoverjobslist) - Lists CutoverJobs of a given migrating VM.
* [vmmigrationProjectsLocationsSourcesMigratingVmsFinalizeMigration](#vmmigrationprojectslocationssourcesmigratingvmsfinalizemigration) - Marks a migration as completed, deleting migration resources that are no longer being used. Only applicable after cutover is done.
* [vmmigrationProjectsLocationsSourcesMigratingVmsList](#vmmigrationprojectslocationssourcesmigratingvmslist) - Lists MigratingVms in a given Source.
* [vmmigrationProjectsLocationsSourcesMigratingVmsPauseMigration](#vmmigrationprojectslocationssourcesmigratingvmspausemigration) - Pauses a migration for a VM. If cycle tasks are running they will be cancelled, preserving source task data. Further replication cycles will not be triggered while the VM is paused.
* [vmmigrationProjectsLocationsSourcesMigratingVmsReplicationCyclesList](#vmmigrationprojectslocationssourcesmigratingvmsreplicationcycleslist) - Lists ReplicationCycles in a given MigratingVM.
* [vmmigrationProjectsLocationsSourcesMigratingVmsResumeMigration](#vmmigrationprojectslocationssourcesmigratingvmsresumemigration) - Resumes a migration for a VM. When called on a paused migration, will start the process of uploading data and creating snapshots; when called on a completed cut-over migration, will update the migration to active state and start the process of uploading data and creating snapshots.
* [vmmigrationProjectsLocationsSourcesMigratingVmsStartMigration](#vmmigrationprojectslocationssourcesmigratingvmsstartmigration) - Starts migration for a VM. Starts the process of uploading data and creating snapshots, in replication cycles scheduled by the policy.
* [vmmigrationProjectsLocationsSourcesUtilizationReportsCreate](#vmmigrationprojectslocationssourcesutilizationreportscreate) - Creates a new UtilizationReport.
* [vmmigrationProjectsLocationsSourcesUtilizationReportsList](#vmmigrationprojectslocationssourcesutilizationreportslist) - Lists Utilization Reports of the given Source.
* [vmmigrationProjectsLocationsTargetProjectsCreate](#vmmigrationprojectslocationstargetprojectscreate) - Creates a new TargetProject in a given project. NOTE: TargetProject is a global resource; hence the only supported value for location is `global`.
* [vmmigrationProjectsLocationsTargetProjectsDelete](#vmmigrationprojectslocationstargetprojectsdelete) - Deletes a single TargetProject. NOTE: TargetProject is a global resource; hence the only supported value for location is `global`.
* [vmmigrationProjectsLocationsTargetProjectsGet](#vmmigrationprojectslocationstargetprojectsget) - Gets details of a single TargetProject. NOTE: TargetProject is a global resource; hence the only supported value for location is `global`.
* [vmmigrationProjectsLocationsTargetProjectsList](#vmmigrationprojectslocationstargetprojectslist) - Lists TargetProjects in a given project. NOTE: TargetProject is a global resource; hence the only supported value for location is `global`.
* [vmmigrationProjectsLocationsTargetProjectsPatch](#vmmigrationprojectslocationstargetprojectspatch) - Updates the parameters of a single TargetProject. NOTE: TargetProject is a global resource; hence the only supported value for location is `global`.

## vmmigrationProjectsLocationsGroupsAddGroupMigration

Adds a MigratingVm to a Group.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.VmmigrationProjectsLocationsGroupsAddGroupMigrationRequest;
import org.openapis.openapi.models.operations.VmmigrationProjectsLocationsGroupsAddGroupMigrationResponse;
import org.openapis.openapi.models.operations.VmmigrationProjectsLocationsGroupsAddGroupMigrationSecurity;
import org.openapis.openapi.models.shared.AddGroupMigrationRequest;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            VmmigrationProjectsLocationsGroupsAddGroupMigrationRequest req = new VmmigrationProjectsLocationsGroupsAddGroupMigrationRequest("debitis") {{
                dollarXgafv = XgafvEnum.ONE;
                addGroupMigrationRequest = new AddGroupMigrationRequest() {{
                    migratingVm = "delectus";
                }};;
                accessToken = "tempora";
                alt = AltEnum.MEDIA;
                callback = "molestiae";
                fields = "minus";
                key = "placeat";
                oauthToken = "voluptatum";
                prettyPrint = false;
                quotaUser = "iusto";
                uploadType = "excepturi";
                uploadProtocol = "nisi";
            }};            

            VmmigrationProjectsLocationsGroupsAddGroupMigrationResponse res = sdk.projects.vmmigrationProjectsLocationsGroupsAddGroupMigration(req, new VmmigrationProjectsLocationsGroupsAddGroupMigrationSecurity("recusandae", "temporibus") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
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

## vmmigrationProjectsLocationsGroupsCreate

Creates a new Group in a given project and location.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.VmmigrationProjectsLocationsGroupsCreateRequest;
import org.openapis.openapi.models.operations.VmmigrationProjectsLocationsGroupsCreateResponse;
import org.openapis.openapi.models.operations.VmmigrationProjectsLocationsGroupsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GroupInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            VmmigrationProjectsLocationsGroupsCreateRequest req = new VmmigrationProjectsLocationsGroupsCreateRequest("ab") {{
                dollarXgafv = XgafvEnum.ONE;
                groupInput = new GroupInput() {{
                    description = "veritatis";
                    displayName = "deserunt";
                }};;
                accessToken = "perferendis";
                alt = AltEnum.MEDIA;
                callback = "repellendus";
                fields = "sapiente";
                groupId = "quo";
                key = "odit";
                oauthToken = "at";
                prettyPrint = false;
                quotaUser = "at";
                requestId = "maiores";
                uploadType = "molestiae";
                uploadProtocol = "quod";
            }};            

            VmmigrationProjectsLocationsGroupsCreateResponse res = sdk.projects.vmmigrationProjectsLocationsGroupsCreate(req, new VmmigrationProjectsLocationsGroupsCreateSecurity("quod", "esse") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
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

## vmmigrationProjectsLocationsGroupsList

Lists Groups in a given project and location.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.VmmigrationProjectsLocationsGroupsListRequest;
import org.openapis.openapi.models.operations.VmmigrationProjectsLocationsGroupsListResponse;
import org.openapis.openapi.models.operations.VmmigrationProjectsLocationsGroupsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            VmmigrationProjectsLocationsGroupsListRequest req = new VmmigrationProjectsLocationsGroupsListRequest("totam") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "dolorum";
                alt = AltEnum.JSON;
                callback = "nam";
                fields = "officia";
                filter = "occaecati";
                key = "fugit";
                oauthToken = "deleniti";
                orderBy = "hic";
                pageSize = 758616L;
                pageToken = "totam";
                prettyPrint = false;
                quotaUser = "beatae";
                uploadType = "commodi";
                uploadProtocol = "molestiae";
            }};            

            VmmigrationProjectsLocationsGroupsListResponse res = sdk.projects.vmmigrationProjectsLocationsGroupsList(req, new VmmigrationProjectsLocationsGroupsListSecurity("modi", "qui") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listGroupsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## vmmigrationProjectsLocationsGroupsRemoveGroupMigration

Removes a MigratingVm from a Group.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.VmmigrationProjectsLocationsGroupsRemoveGroupMigrationRequest;
import org.openapis.openapi.models.operations.VmmigrationProjectsLocationsGroupsRemoveGroupMigrationResponse;
import org.openapis.openapi.models.operations.VmmigrationProjectsLocationsGroupsRemoveGroupMigrationSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.RemoveGroupMigrationRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            VmmigrationProjectsLocationsGroupsRemoveGroupMigrationRequest req = new VmmigrationProjectsLocationsGroupsRemoveGroupMigrationRequest("impedit") {{
                dollarXgafv = XgafvEnum.TWO;
                removeGroupMigrationRequest = new RemoveGroupMigrationRequest() {{
                    migratingVm = "esse";
                }};;
                accessToken = "ipsum";
                alt = AltEnum.MEDIA;
                callback = "aspernatur";
                fields = "perferendis";
                key = "ad";
                oauthToken = "natus";
                prettyPrint = false;
                quotaUser = "sed";
                uploadType = "iste";
                uploadProtocol = "dolor";
            }};            

            VmmigrationProjectsLocationsGroupsRemoveGroupMigrationResponse res = sdk.projects.vmmigrationProjectsLocationsGroupsRemoveGroupMigration(req, new VmmigrationProjectsLocationsGroupsRemoveGroupMigrationSecurity("natus", "laboriosam") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
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

## vmmigrationProjectsLocationsList

Lists information about the supported locations for this service.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.VmmigrationProjectsLocationsListRequest;
import org.openapis.openapi.models.operations.VmmigrationProjectsLocationsListResponse;
import org.openapis.openapi.models.operations.VmmigrationProjectsLocationsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            VmmigrationProjectsLocationsListRequest req = new VmmigrationProjectsLocationsListRequest("hic") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "fuga";
                alt = AltEnum.MEDIA;
                callback = "corporis";
                fields = "iste";
                filter = "iure";
                key = "saepe";
                oauthToken = "quidem";
                pageSize = 99280L;
                pageToken = "ipsa";
                prettyPrint = false;
                quotaUser = "reiciendis";
                uploadType = "est";
                uploadProtocol = "mollitia";
            }};            

            VmmigrationProjectsLocationsListResponse res = sdk.projects.vmmigrationProjectsLocationsList(req, new VmmigrationProjectsLocationsListSecurity("laborum", "dolores") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listLocationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## vmmigrationProjectsLocationsOperationsList

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.VmmigrationProjectsLocationsOperationsListRequest;
import org.openapis.openapi.models.operations.VmmigrationProjectsLocationsOperationsListResponse;
import org.openapis.openapi.models.operations.VmmigrationProjectsLocationsOperationsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            VmmigrationProjectsLocationsOperationsListRequest req = new VmmigrationProjectsLocationsOperationsListRequest("dolorem") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "explicabo";
                alt = AltEnum.PROTO;
                callback = "enim";
                fields = "omnis";
                filter = "nemo";
                key = "minima";
                oauthToken = "excepturi";
                pageSize = 38425L;
                pageToken = "iure";
                prettyPrint = false;
                quotaUser = "culpa";
                uploadType = "doloribus";
                uploadProtocol = "sapiente";
            }};            

            VmmigrationProjectsLocationsOperationsListResponse res = sdk.projects.vmmigrationProjectsLocationsOperationsList(req, new VmmigrationProjectsLocationsOperationsListSecurity("architecto", "mollitia") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listOperationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## vmmigrationProjectsLocationsSourcesCreate

Creates a new Source in a given project and location.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.VmmigrationProjectsLocationsSourcesCreateRequest;
import org.openapis.openapi.models.operations.VmmigrationProjectsLocationsSourcesCreateResponse;
import org.openapis.openapi.models.operations.VmmigrationProjectsLocationsSourcesCreateSecurity;
import org.openapis.openapi.models.shared.AccessKeyCredentials;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.AwsSourceDetailsInput;
import org.openapis.openapi.models.shared.SourceInput;
import org.openapis.openapi.models.shared.Status;
import org.openapis.openapi.models.shared.Tag;
import org.openapis.openapi.models.shared.VmwareSourceDetails;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            VmmigrationProjectsLocationsSourcesCreateRequest req = new VmmigrationProjectsLocationsSourcesCreateRequest("dolorem") {{
                dollarXgafv = XgafvEnum.TWO;
                sourceInput = new SourceInput() {{
                    aws = new AwsSourceDetailsInput() {{
                        accessKeyCreds = new AccessKeyCredentials() {{
                            accessKeyId = "consequuntur";
                            secretAccessKey = "repellat";
                            sessionToken = "mollitia";
                        }};;
                        awsRegion = "occaecati";
                        error = new Status() {{
                            code = 253291;
                            details = new java.util.HashMap<String, Object>[]{{
                                add(new java.util.HashMap<String, Object>() {{
                                    put("molestiae", "velit");
                                    put("error", "quia");
                                }}),
                                add(new java.util.HashMap<String, Object>() {{
                                    put("vitae", "laborum");
                                    put("animi", "enim");
                                }}),
                            }};
                            message = "odit";
                        }};;
                        inventorySecurityGroupNames = new String[]{{
                            add("sequi"),
                            add("tenetur"),
                            add("ipsam"),
                            add("id"),
                        }};
                        inventoryTagList = new org.openapis.openapi.models.shared.Tag[]{{
                            add(new Tag() {{
                                key = "aut";
                                value = "quasi";
                            }}),
                            add(new Tag() {{
                                key = "error";
                                value = "temporibus";
                            }}),
                            add(new Tag() {{
                                key = "laborum";
                                value = "quasi";
                            }}),
                            add(new Tag() {{
                                key = "reiciendis";
                                value = "voluptatibus";
                            }}),
                        }};
                        migrationResourcesUserTags = new java.util.HashMap<String, String>() {{
                            put("nihil", "praesentium");
                            put("voluptatibus", "ipsa");
                            put("omnis", "voluptate");
                            put("cum", "perferendis");
                        }};
                    }};;
                    description = "doloremque";
                    error = new Status() {{
                        code = 441711;
                        details = new java.util.HashMap<String, Object>[]{{
                            add(new java.util.HashMap<String, Object>() {{
                                put("dicta", "corporis");
                                put("dolore", "iusto");
                                put("dicta", "harum");
                                put("enim", "accusamus");
                            }}),
                            add(new java.util.HashMap<String, Object>() {{
                                put("repudiandae", "quae");
                                put("ipsum", "quidem");
                            }}),
                        }};
                        message = "molestias";
                    }};;
                    labels = new java.util.HashMap<String, String>() {{
                        put("pariatur", "modi");
                        put("praesentium", "rem");
                        put("voluptates", "quasi");
                    }};
                    vmware = new VmwareSourceDetails() {{
                        password = "repudiandae";
                        thumbprint = "sint";
                        username = "Arnoldo31";
                        vcenterIp = "consequatur";
                    }};;
                }};;
                accessToken = "est";
                alt = AltEnum.PROTO;
                callback = "explicabo";
                fields = "deserunt";
                key = "distinctio";
                oauthToken = "quibusdam";
                prettyPrint = false;
                quotaUser = "labore";
                requestId = "modi";
                sourceId = "qui";
                uploadType = "aliquid";
                uploadProtocol = "cupiditate";
            }};            

            VmmigrationProjectsLocationsSourcesCreateResponse res = sdk.projects.vmmigrationProjectsLocationsSourcesCreate(req, new VmmigrationProjectsLocationsSourcesCreateSecurity("quos", "perferendis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
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

## vmmigrationProjectsLocationsSourcesDatacenterConnectorsCreate

Creates a new DatacenterConnector in a given Source.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.VmmigrationProjectsLocationsSourcesDatacenterConnectorsCreateRequest;
import org.openapis.openapi.models.operations.VmmigrationProjectsLocationsSourcesDatacenterConnectorsCreateResponse;
import org.openapis.openapi.models.operations.VmmigrationProjectsLocationsSourcesDatacenterConnectorsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ApplianceVersion;
import org.openapis.openapi.models.shared.AvailableUpdates;
import org.openapis.openapi.models.shared.DatacenterConnectorInput;
import org.openapis.openapi.models.shared.Status;
import org.openapis.openapi.models.shared.UpgradeStatus;
import org.openapis.openapi.models.shared.UpgradeStatusStateEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            VmmigrationProjectsLocationsSourcesDatacenterConnectorsCreateRequest req = new VmmigrationProjectsLocationsSourcesDatacenterConnectorsCreateRequest("magni") {{
                dollarXgafv = XgafvEnum.TWO;
                datacenterConnectorInput = new DatacenterConnectorInput() {{
                    availableVersions = new AvailableUpdates() {{
                        inPlaceUpdate = new ApplianceVersion() {{
                            critical = false;
                            releaseNotesUri = "ipsam";
                            uri = "http://costly-poncho.name";
                            version = "tempora";
                        }};;
                        newDeployableAppliance = new ApplianceVersion() {{
                            critical = false;
                            releaseNotesUri = "facilis";
                            uri = "https://flashy-void.info";
                            version = "non";
                        }};;
                    }};;
                    error = new Status() {{
                        code = 756107;
                        details = new java.util.HashMap<String, Object>[]{{
                            add(new java.util.HashMap<String, Object>() {{
                                put("provident", "necessitatibus");
                                put("sint", "officia");
                            }}),
                            add(new java.util.HashMap<String, Object>() {{
                                put("debitis", "a");
                            }}),
                            add(new java.util.HashMap<String, Object>() {{
                                put("in", "in");
                                put("illum", "maiores");
                                put("rerum", "dicta");
                            }}),
                        }};
                        message = "magnam";
                    }};;
                    registrationId = "cumque";
                    serviceAccount = "facere";
                    upgradeStatus = new UpgradeStatus() {{
                        error = new Status() {{
                            code = 411820;
                            details = new java.util.HashMap<String, Object>[]{{
                                add(new java.util.HashMap<String, Object>() {{
                                    put("accusamus", "non");
                                    put("occaecati", "enim");
                                    put("accusamus", "delectus");
                                }}),
                                add(new java.util.HashMap<String, Object>() {{
                                    put("provident", "nam");
                                    put("id", "blanditiis");
                                    put("deleniti", "sapiente");
                                }}),
                            }};
                            message = "amet";
                        }};;
                        previousVersion = "deserunt";
                        startTime = "nisi";
                        state = UpgradeStatusStateEnum.RUNNING;
                        version = "natus";
                    }};;
                    version = "omnis";
                }};;
                accessToken = "molestiae";
                alt = AltEnum.JSON;
                callback = "nihil";
                datacenterConnectorId = "magnam";
                fields = "distinctio";
                key = "id";
                oauthToken = "labore";
                prettyPrint = false;
                quotaUser = "labore";
                requestId = "suscipit";
                uploadType = "natus";
                uploadProtocol = "nobis";
            }};            

            VmmigrationProjectsLocationsSourcesDatacenterConnectorsCreateResponse res = sdk.projects.vmmigrationProjectsLocationsSourcesDatacenterConnectorsCreate(req, new VmmigrationProjectsLocationsSourcesDatacenterConnectorsCreateSecurity("eum", "vero") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
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

## vmmigrationProjectsLocationsSourcesDatacenterConnectorsList

Lists DatacenterConnectors in a given Source.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.VmmigrationProjectsLocationsSourcesDatacenterConnectorsListRequest;
import org.openapis.openapi.models.operations.VmmigrationProjectsLocationsSourcesDatacenterConnectorsListResponse;
import org.openapis.openapi.models.operations.VmmigrationProjectsLocationsSourcesDatacenterConnectorsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            VmmigrationProjectsLocationsSourcesDatacenterConnectorsListRequest req = new VmmigrationProjectsLocationsSourcesDatacenterConnectorsListRequest("aspernatur") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "magnam";
                alt = AltEnum.JSON;
                callback = "excepturi";
                fields = "ullam";
                filter = "provident";
                key = "quos";
                oauthToken = "sint";
                orderBy = "accusantium";
                pageSize = 653201L;
                pageToken = "reiciendis";
                prettyPrint = false;
                quotaUser = "mollitia";
                uploadType = "ad";
                uploadProtocol = "eum";
            }};            

            VmmigrationProjectsLocationsSourcesDatacenterConnectorsListResponse res = sdk.projects.vmmigrationProjectsLocationsSourcesDatacenterConnectorsList(req, new VmmigrationProjectsLocationsSourcesDatacenterConnectorsListSecurity("dolor", "necessitatibus") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listDatacenterConnectorsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## vmmigrationProjectsLocationsSourcesDatacenterConnectorsUpgradeAppliance

Upgrades the appliance relate to this DatacenterConnector to the in-place updateable version.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.VmmigrationProjectsLocationsSourcesDatacenterConnectorsUpgradeApplianceRequest;
import org.openapis.openapi.models.operations.VmmigrationProjectsLocationsSourcesDatacenterConnectorsUpgradeApplianceResponse;
import org.openapis.openapi.models.operations.VmmigrationProjectsLocationsSourcesDatacenterConnectorsUpgradeApplianceSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.UpgradeApplianceRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            VmmigrationProjectsLocationsSourcesDatacenterConnectorsUpgradeApplianceRequest req = new VmmigrationProjectsLocationsSourcesDatacenterConnectorsUpgradeApplianceRequest("odit") {{
                dollarXgafv = XgafvEnum.ONE;
                upgradeApplianceRequest = new UpgradeApplianceRequest() {{
                    requestId = "quasi";
                }};;
                accessToken = "iure";
                alt = AltEnum.PROTO;
                callback = "debitis";
                fields = "eius";
                key = "maxime";
                oauthToken = "deleniti";
                prettyPrint = false;
                quotaUser = "facilis";
                uploadType = "in";
                uploadProtocol = "architecto";
            }};            

            VmmigrationProjectsLocationsSourcesDatacenterConnectorsUpgradeApplianceResponse res = sdk.projects.vmmigrationProjectsLocationsSourcesDatacenterConnectorsUpgradeAppliance(req, new VmmigrationProjectsLocationsSourcesDatacenterConnectorsUpgradeApplianceSecurity("architecto", "repudiandae") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
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

## vmmigrationProjectsLocationsSourcesFetchInventory

List remote source's inventory of VMs. The remote source is the onprem vCenter (remote in the sense it's not in Compute Engine). The inventory describes the list of existing VMs in that source. Note that this operation lists the VMs on the remote source, as opposed to listing the MigratingVms resources in the vmmigration service.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.VmmigrationProjectsLocationsSourcesFetchInventoryRequest;
import org.openapis.openapi.models.operations.VmmigrationProjectsLocationsSourcesFetchInventoryResponse;
import org.openapis.openapi.models.operations.VmmigrationProjectsLocationsSourcesFetchInventorySecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            VmmigrationProjectsLocationsSourcesFetchInventoryRequest req = new VmmigrationProjectsLocationsSourcesFetchInventoryRequest("ullam") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "nihil";
                alt = AltEnum.PROTO;
                callback = "quibusdam";
                fields = "sed";
                forceRefresh = false;
                key = "saepe";
                oauthToken = "pariatur";
                pageSize = 37559L;
                pageToken = "consequuntur";
                prettyPrint = false;
                quotaUser = "praesentium";
                uploadType = "natus";
                uploadProtocol = "magni";
            }};            

            VmmigrationProjectsLocationsSourcesFetchInventoryResponse res = sdk.projects.vmmigrationProjectsLocationsSourcesFetchInventory(req, new VmmigrationProjectsLocationsSourcesFetchInventorySecurity("sunt", "quo") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.fetchInventoryResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## vmmigrationProjectsLocationsSourcesList

Lists Sources in a given project and location.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.VmmigrationProjectsLocationsSourcesListRequest;
import org.openapis.openapi.models.operations.VmmigrationProjectsLocationsSourcesListResponse;
import org.openapis.openapi.models.operations.VmmigrationProjectsLocationsSourcesListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            VmmigrationProjectsLocationsSourcesListRequest req = new VmmigrationProjectsLocationsSourcesListRequest("illum") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "maxime";
                alt = AltEnum.MEDIA;
                callback = "excepturi";
                fields = "odit";
                filter = "ea";
                key = "accusantium";
                oauthToken = "ab";
                orderBy = "maiores";
                pageSize = 697429L;
                pageToken = "ipsam";
                prettyPrint = false;
                quotaUser = "voluptate";
                uploadType = "autem";
                uploadProtocol = "nam";
            }};            

            VmmigrationProjectsLocationsSourcesListResponse res = sdk.projects.vmmigrationProjectsLocationsSourcesList(req, new VmmigrationProjectsLocationsSourcesListSecurity("eaque", "pariatur") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listSourcesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## vmmigrationProjectsLocationsSourcesMigratingVmsCloneJobsCreate

Initiates a Clone of a specific migrating VM.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.VmmigrationProjectsLocationsSourcesMigratingVmsCloneJobsCreateRequest;
import org.openapis.openapi.models.operations.VmmigrationProjectsLocationsSourcesMigratingVmsCloneJobsCreateResponse;
import org.openapis.openapi.models.operations.VmmigrationProjectsLocationsSourcesMigratingVmsCloneJobsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.AppliedLicense;
import org.openapis.openapi.models.shared.AppliedLicenseTypeEnum;
import org.openapis.openapi.models.shared.CloneJobInput;
import org.openapis.openapi.models.shared.ComputeEngineTargetDetails;
import org.openapis.openapi.models.shared.ComputeEngineTargetDetailsBootOptionEnum;
import org.openapis.openapi.models.shared.ComputeEngineTargetDetailsDiskTypeEnum;
import org.openapis.openapi.models.shared.ComputeEngineTargetDetailsLicenseTypeEnum;
import org.openapis.openapi.models.shared.ComputeScheduling;
import org.openapis.openapi.models.shared.ComputeSchedulingOnHostMaintenanceEnum;
import org.openapis.openapi.models.shared.ComputeSchedulingRestartTypeEnum;
import org.openapis.openapi.models.shared.NetworkInterface;
import org.openapis.openapi.models.shared.SchedulingNodeAffinity;
import org.openapis.openapi.models.shared.SchedulingNodeAffinityOperatorEnum;
import org.openapis.openapi.models.shared.Status;
import org.openapis.openapi.models.shared.TargetVMDetailsDiskTypeEnum;
import org.openapis.openapi.models.shared.TargetVMDetailsInput;
import org.openapis.openapi.models.shared.TargetVMDetailsLicenseTypeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            VmmigrationProjectsLocationsSourcesMigratingVmsCloneJobsCreateRequest req = new VmmigrationProjectsLocationsSourcesMigratingVmsCloneJobsCreateRequest("nemo") {{
                dollarXgafv = XgafvEnum.TWO;
                cloneJobInput = new CloneJobInput() {{
                    computeEngineTargetDetails = new ComputeEngineTargetDetails() {{
                        additionalLicenses = new String[]{{
                            add("fugiat"),
                        }};
                        appliedLicense = new AppliedLicense() {{
                            osLicense = "amet";
                            type = AppliedLicenseTypeEnum.TYPE_UNSPECIFIED;
                        }};;
                        bootOption = ComputeEngineTargetDetailsBootOptionEnum.COMPUTE_ENGINE_BOOT_OPTION_BIOS;
                        computeScheduling = new ComputeScheduling() {{
                            automaticRestart = false;
                            minNodeCpus = 359978;
                            nodeAffinities = new org.openapis.openapi.models.shared.SchedulingNodeAffinity[]{{
                                add(new SchedulingNodeAffinity() {{
                                    key = "libero";
                                    operator = SchedulingNodeAffinityOperatorEnum.NOT_IN;
                                    values = new String[]{{
                                        add("quis"),
                                    }};
                                }}),
                                add(new SchedulingNodeAffinity() {{
                                    key = "totam";
                                    operator = SchedulingNodeAffinityOperatorEnum.IN;
                                    values = new String[]{{
                                        add("quis"),
                                    }};
                                }}),
                                add(new SchedulingNodeAffinity() {{
                                    key = "nesciunt";
                                    operator = SchedulingNodeAffinityOperatorEnum.OPERATOR_UNSPECIFIED;
                                    values = new String[]{{
                                        add("dolores"),
                                    }};
                                }}),
                                add(new SchedulingNodeAffinity() {{
                                    key = "minus";
                                    operator = SchedulingNodeAffinityOperatorEnum.IN;
                                    values = new String[]{{
                                        add("vero"),
                                    }};
                                }}),
                            }};
                            onHostMaintenance = ComputeSchedulingOnHostMaintenanceEnum.TERMINATE;
                            restartType = ComputeSchedulingRestartTypeEnum.NO_AUTOMATIC_RESTART;
                        }};;
                        diskType = ComputeEngineTargetDetailsDiskTypeEnum.COMPUTE_ENGINE_DISK_TYPE_BALANCED;
                        hostname = "pale-psychoanalyst.name";
                        labels = new java.util.HashMap<String, String>() {{
                            put("porro", "consequuntur");
                        }};
                        licenseType = ComputeEngineTargetDetailsLicenseTypeEnum.COMPUTE_ENGINE_LICENSE_TYPE_PAYG;
                        machineType = "error";
                        machineTypeSeries = "eaque";
                        metadata = new java.util.HashMap<String, String>() {{
                            put("rerum", "adipisci");
                            put("asperiores", "earum");
                            put("modi", "iste");
                        }};
                        networkInterfaces = new org.openapis.openapi.models.shared.NetworkInterface[]{{
                            add(new NetworkInterface() {{
                                externalIp = "deleniti";
                                internalIp = "pariatur";
                                network = "provident";
                                subnetwork = "nobis";
                            }}),
                            add(new NetworkInterface() {{
                                externalIp = "libero";
                                internalIp = "delectus";
                                network = "quaerat";
                                subnetwork = "quos";
                            }}),
                            add(new NetworkInterface() {{
                                externalIp = "aliquid";
                                internalIp = "dolorem";
                                network = "dolorem";
                                subnetwork = "dolor";
                            }}),
                        }};
                        networkTags = new String[]{{
                            add("ipsum"),
                        }};
                        project = "hic";
                        secureBoot = false;
                        serviceAccount = "excepturi";
                        vmName = "cum";
                        zone = "voluptate";
                    }};;
                    computeEngineVmDetails = new TargetVMDetailsInput() {{
                        appliedLicense = new AppliedLicense() {{
                            osLicense = "dignissimos";
                            type = AppliedLicenseTypeEnum.BYOL;
                        }};;
                        computeScheduling = new ComputeScheduling() {{
                            automaticRestart = false;
                            minNodeCpus = 227414;
                            nodeAffinities = new org.openapis.openapi.models.shared.SchedulingNodeAffinity[]{{
                                add(new SchedulingNodeAffinity() {{
                                    key = "numquam";
                                    operator = SchedulingNodeAffinityOperatorEnum.OPERATOR_UNSPECIFIED;
                                    values = new String[]{{
                                        add("ipsa"),
                                    }};
                                }}),
                                add(new SchedulingNodeAffinity() {{
                                    key = "iure";
                                    operator = SchedulingNodeAffinityOperatorEnum.IN;
                                    values = new String[]{{
                                        add("accusamus"),
                                        add("quidem"),
                                    }};
                                }}),
                                add(new SchedulingNodeAffinity() {{
                                    key = "voluptatibus";
                                    operator = SchedulingNodeAffinityOperatorEnum.IN;
                                    values = new String[]{{
                                        add("eos"),
                                        add("atque"),
                                        add("sit"),
                                    }};
                                }}),
                            }};
                            onHostMaintenance = ComputeSchedulingOnHostMaintenanceEnum.MIGRATE;
                            restartType = ComputeSchedulingRestartTypeEnum.RESTART_TYPE_UNSPECIFIED;
                        }};;
                        diskType = TargetVMDetailsDiskTypeEnum.BALANCED;
                        externalIp = "dolorum";
                        internalIp = "iusto";
                        labels = new java.util.HashMap<String, String>() {{
                            put("dolorum", "deleniti");
                            put("omnis", "necessitatibus");
                        }};
                        licenseType = TargetVMDetailsLicenseTypeEnum.BYOL;
                        machineType = "asperiores";
                        machineTypeSeries = "nihil";
                        metadata = new java.util.HashMap<String, String>() {{
                            put("voluptate", "id");
                        }};
                        name = "Mrs. Ray Collins";
                        network = "accusamus";
                        networkInterfaces = new org.openapis.openapi.models.shared.NetworkInterface[]{{
                            add(new NetworkInterface() {{
                                externalIp = "saepe";
                                internalIp = "suscipit";
                                network = "deserunt";
                                subnetwork = "provident";
                            }}),
                            add(new NetworkInterface() {{
                                externalIp = "minima";
                                internalIp = "repellendus";
                                network = "totam";
                                subnetwork = "similique";
                            }}),
                        }};
                        networkTags = new String[]{{
                            add("at"),
                        }};
                        secureBoot = false;
                        serviceAccount = "quaerat";
                        subnetwork = "tempora";
                        targetProject = "vel";
                        zone = "quod";
                    }};;
                    error = new Status() {{
                        code = 885338;
                        details = new java.util.HashMap<String, Object>[]{{
                            add(new java.util.HashMap<String, Object>() {{
                                put("a", "esse");
                                put("harum", "iusto");
                                put("ipsum", "quisquam");
                            }}),
                        }};
                        message = "tenetur";
                    }};;
                    targetDetails = new TargetVMDetailsInput() {{
                        appliedLicense = new AppliedLicense() {{
                            osLicense = "amet";
                            type = AppliedLicenseTypeEnum.PAYG;
                        }};;
                        computeScheduling = new ComputeScheduling() {{
                            automaticRestart = false;
                            minNodeCpus = 880298;
                            nodeAffinities = new org.openapis.openapi.models.shared.SchedulingNodeAffinity[]{{
                                add(new SchedulingNodeAffinity() {{
                                    key = "enim";
                                    operator = SchedulingNodeAffinityOperatorEnum.OPERATOR_UNSPECIFIED;
                                    values = new String[]{{
                                        add("totam"),
                                        add("nihil"),
                                        add("sit"),
                                        add("expedita"),
                                    }};
                                }}),
                                add(new SchedulingNodeAffinity() {{
                                    key = "neque";
                                    operator = SchedulingNodeAffinityOperatorEnum.OPERATOR_UNSPECIFIED;
                                    values = new String[]{{
                                        add("libero"),
                                        add("voluptas"),
                                    }};
                                }}),
                            }};
                            onHostMaintenance = ComputeSchedulingOnHostMaintenanceEnum.TERMINATE;
                            restartType = ComputeSchedulingRestartTypeEnum.AUTOMATIC_RESTART;
                        }};;
                        diskType = TargetVMDetailsDiskTypeEnum.DISK_TYPE_UNSPECIFIED;
                        externalIp = "incidunt";
                        internalIp = "qui";
                        labels = new java.util.HashMap<String, String>() {{
                            put("maxime", "pariatur");
                            put("soluta", "dicta");
                            put("laborum", "totam");
                        }};
                        licenseType = TargetVMDetailsLicenseTypeEnum.DEFAULT_;
                        machineType = "aspernatur";
                        machineTypeSeries = "dolores";
                        metadata = new java.util.HashMap<String, String>() {{
                            put("facilis", "aliquid");
                            put("quam", "molestias");
                            put("temporibus", "qui");
                        }};
                        name = "Beverly Cummerata II";
                        network = "nam";
                        networkInterfaces = new org.openapis.openapi.models.shared.NetworkInterface[]{{
                            add(new NetworkInterface() {{
                                externalIp = "voluptatem";
                                internalIp = "cumque";
                                network = "soluta";
                                subnetwork = "nobis";
                            }}),
                            add(new NetworkInterface() {{
                                externalIp = "et";
                                internalIp = "saepe";
                                network = "ipsum";
                                subnetwork = "veritatis";
                            }}),
                            add(new NetworkInterface() {{
                                externalIp = "nobis";
                                internalIp = "quos";
                                network = "tempore";
                                subnetwork = "cupiditate";
                            }}),
                            add(new NetworkInterface() {{
                                externalIp = "aperiam";
                                internalIp = "delectus";
                                network = "dolorem";
                                subnetwork = "dolore";
                            }}),
                        }};
                        networkTags = new String[]{{
                            add("adipisci"),
                            add("dolorum"),
                        }};
                        secureBoot = false;
                        serviceAccount = "architecto";
                        subnetwork = "quae";
                        targetProject = "aut";
                        zone = "quas";
                    }};;
                }};;
                accessToken = "itaque";
                alt = AltEnum.JSON;
                callback = "est";
                cloneJobId = "repellendus";
                fields = "porro";
                key = "doloribus";
                oauthToken = "ut";
                prettyPrint = false;
                quotaUser = "facilis";
                requestId = "cupiditate";
                uploadType = "qui";
                uploadProtocol = "quae";
            }};            

            VmmigrationProjectsLocationsSourcesMigratingVmsCloneJobsCreateResponse res = sdk.projects.vmmigrationProjectsLocationsSourcesMigratingVmsCloneJobsCreate(req, new VmmigrationProjectsLocationsSourcesMigratingVmsCloneJobsCreateSecurity("laudantium", "odio") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
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

## vmmigrationProjectsLocationsSourcesMigratingVmsCloneJobsList

Lists CloneJobs of a given migrating VM.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.VmmigrationProjectsLocationsSourcesMigratingVmsCloneJobsListRequest;
import org.openapis.openapi.models.operations.VmmigrationProjectsLocationsSourcesMigratingVmsCloneJobsListResponse;
import org.openapis.openapi.models.operations.VmmigrationProjectsLocationsSourcesMigratingVmsCloneJobsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            VmmigrationProjectsLocationsSourcesMigratingVmsCloneJobsListRequest req = new VmmigrationProjectsLocationsSourcesMigratingVmsCloneJobsListRequest("occaecati") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "quisquam";
                alt = AltEnum.PROTO;
                callback = "omnis";
                fields = "quis";
                filter = "ipsum";
                key = "delectus";
                oauthToken = "voluptate";
                orderBy = "consectetur";
                pageSize = 878870L;
                pageToken = "tenetur";
                prettyPrint = false;
                quotaUser = "dignissimos";
                uploadType = "hic";
                uploadProtocol = "distinctio";
            }};            

            VmmigrationProjectsLocationsSourcesMigratingVmsCloneJobsListResponse res = sdk.projects.vmmigrationProjectsLocationsSourcesMigratingVmsCloneJobsList(req, new VmmigrationProjectsLocationsSourcesMigratingVmsCloneJobsListSecurity("quod", "odio") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listCloneJobsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## vmmigrationProjectsLocationsSourcesMigratingVmsCreate

Creates a new MigratingVm in a given Source.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.VmmigrationProjectsLocationsSourcesMigratingVmsCreateRequest;
import org.openapis.openapi.models.operations.VmmigrationProjectsLocationsSourcesMigratingVmsCreateResponse;
import org.openapis.openapi.models.operations.VmmigrationProjectsLocationsSourcesMigratingVmsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.AppliedLicense;
import org.openapis.openapi.models.shared.AppliedLicenseTypeEnum;
import org.openapis.openapi.models.shared.AwsSourceVmDetails;
import org.openapis.openapi.models.shared.AwsSourceVmDetailsFirmwareEnum;
import org.openapis.openapi.models.shared.ComputeEngineTargetDefaultsDiskTypeEnum;
import org.openapis.openapi.models.shared.ComputeEngineTargetDefaultsInput;
import org.openapis.openapi.models.shared.ComputeEngineTargetDefaultsLicenseTypeEnum;
import org.openapis.openapi.models.shared.ComputeScheduling;
import org.openapis.openapi.models.shared.ComputeSchedulingOnHostMaintenanceEnum;
import org.openapis.openapi.models.shared.ComputeSchedulingRestartTypeEnum;
import org.openapis.openapi.models.shared.CycleStep;
import org.openapis.openapi.models.shared.MigratingVmInput;
import org.openapis.openapi.models.shared.NetworkInterface;
import org.openapis.openapi.models.shared.ReplicatingStep;
import org.openapis.openapi.models.shared.ReplicationCycleInput;
import org.openapis.openapi.models.shared.ReplicationCycleStateEnum;
import org.openapis.openapi.models.shared.ReplicationSync;
import org.openapis.openapi.models.shared.SchedulePolicy;
import org.openapis.openapi.models.shared.SchedulingNodeAffinity;
import org.openapis.openapi.models.shared.SchedulingNodeAffinityOperatorEnum;
import org.openapis.openapi.models.shared.Status;
import org.openapis.openapi.models.shared.TargetVMDetailsDiskTypeEnum;
import org.openapis.openapi.models.shared.TargetVMDetailsInput;
import org.openapis.openapi.models.shared.TargetVMDetailsLicenseTypeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            VmmigrationProjectsLocationsSourcesMigratingVmsCreateRequest req = new VmmigrationProjectsLocationsSourcesMigratingVmsCreateRequest("similique") {{
                dollarXgafv = XgafvEnum.TWO;
                migratingVmInput = new MigratingVmInput() {{
                    awsSourceVmDetails = new AwsSourceVmDetails() {{
                        committedStorageBytes = "vero";
                        firmware = AwsSourceVmDetailsFirmwareEnum.EFI;
                    }};;
                    computeEngineTargetDefaults = new ComputeEngineTargetDefaultsInput() {{
                        additionalLicenses = new String[]{{
                            add("quibusdam"),
                            add("illum"),
                        }};
                        appliedLicense = new AppliedLicense() {{
                            osLicense = "sequi";
                            type = AppliedLicenseTypeEnum.PAYG;
                        }};;
                        computeScheduling = new ComputeScheduling() {{
                            automaticRestart = false;
                            minNodeCpus = 773326;
                            nodeAffinities = new org.openapis.openapi.models.shared.SchedulingNodeAffinity[]{{
                                add(new SchedulingNodeAffinity() {{
                                    key = "voluptatibus";
                                    operator = SchedulingNodeAffinityOperatorEnum.IN;
                                    values = new String[]{{
                                        add("fugit"),
                                        add("porro"),
                                        add("maiores"),
                                        add("doloribus"),
                                    }};
                                }}),
                            }};
                            onHostMaintenance = ComputeSchedulingOnHostMaintenanceEnum.TERMINATE;
                            restartType = ComputeSchedulingRestartTypeEnum.NO_AUTOMATIC_RESTART;
                        }};;
                        diskType = ComputeEngineTargetDefaultsDiskTypeEnum.COMPUTE_ENGINE_DISK_TYPE_STANDARD;
                        hostname = "academic-path.biz";
                        labels = new java.util.HashMap<String, String>() {{
                            put("ea", "aspernatur");
                            put("vel", "possimus");
                        }};
                        licenseType = ComputeEngineTargetDefaultsLicenseTypeEnum.COMPUTE_ENGINE_LICENSE_TYPE_DEFAULT;
                        machineType = "ratione";
                        machineTypeSeries = "ex";
                        metadata = new java.util.HashMap<String, String>() {{
                            put("dicta", "dolor");
                            put("maiores", "quasi");
                            put("ex", "nulla");
                        }};
                        networkInterfaces = new org.openapis.openapi.models.shared.NetworkInterface[]{{
                            add(new NetworkInterface() {{
                                externalIp = "voluptatibus";
                                internalIp = "nostrum";
                                network = "sapiente";
                                subnetwork = "quisquam";
                            }}),
                            add(new NetworkInterface() {{
                                externalIp = "saepe";
                                internalIp = "ea";
                                network = "impedit";
                                subnetwork = "corporis";
                            }}),
                            add(new NetworkInterface() {{
                                externalIp = "veniam";
                                internalIp = "aliquid";
                                network = "inventore";
                                subnetwork = "magnam";
                            }}),
                        }};
                        networkTags = new String[]{{
                            add("quo"),
                            add("consectetur"),
                        }};
                        secureBoot = false;
                        serviceAccount = "recusandae";
                        targetProject = "aspernatur";
                        vmName = "minima";
                        zone = "eaque";
                    }};;
                    computeEngineVmDefaults = new TargetVMDetailsInput() {{
                        appliedLicense = new AppliedLicense() {{
                            osLicense = "a";
                            type = AppliedLicenseTypeEnum.PAYG;
                        }};;
                        computeScheduling = new ComputeScheduling() {{
                            automaticRestart = false;
                            minNodeCpus = 13948;
                            nodeAffinities = new org.openapis.openapi.models.shared.SchedulingNodeAffinity[]{{
                                add(new SchedulingNodeAffinity() {{
                                    key = "deleniti";
                                    operator = SchedulingNodeAffinityOperatorEnum.NOT_IN;
                                    values = new String[]{{
                                        add("fugit"),
                                        add("accusamus"),
                                    }};
                                }}),
                            }};
                            onHostMaintenance = ComputeSchedulingOnHostMaintenanceEnum.ON_HOST_MAINTENANCE_UNSPECIFIED;
                            restartType = ComputeSchedulingRestartTypeEnum.RESTART_TYPE_UNSPECIFIED;
                        }};;
                        diskType = TargetVMDetailsDiskTypeEnum.DISK_TYPE_UNSPECIFIED;
                        externalIp = "dolorum";
                        internalIp = "laborum";
                        labels = new java.util.HashMap<String, String>() {{
                            put("velit", "eum");
                            put("autem", "nobis");
                            put("quas", "assumenda");
                            put("nulla", "voluptas");
                        }};
                        licenseType = TargetVMDetailsLicenseTypeEnum.BYOL;
                        machineType = "quasi";
                        machineTypeSeries = "tempora";
                        metadata = new java.util.HashMap<String, String>() {{
                            put("explicabo", "provident");
                            put("ipsa", "molestiae");
                        }};
                        name = "Viola Gibson";
                        network = "rem";
                        networkInterfaces = new org.openapis.openapi.models.shared.NetworkInterface[]{{
                            add(new NetworkInterface() {{
                                externalIp = "reprehenderit";
                                internalIp = "quidem";
                                network = "fugiat";
                                subnetwork = "ut";
                            }}),
                            add(new NetworkInterface() {{
                                externalIp = "eum";
                                internalIp = "suscipit";
                                network = "assumenda";
                                subnetwork = "eos";
                            }}),
                            add(new NetworkInterface() {{
                                externalIp = "praesentium";
                                internalIp = "quisquam";
                                network = "veritatis";
                                subnetwork = "ipsa";
                            }}),
                        }};
                        networkTags = new String[]{{
                            add("quidem"),
                            add("neque"),
                            add("quo"),
                        }};
                        secureBoot = false;
                        serviceAccount = "illum";
                        subnetwork = "quo";
                        targetProject = "fuga";
                        zone = "eius";
                    }};;
                    currentSyncInfo = new ReplicationCycleInput() {{
                        cycleNumber = 178367;
                        endTime = "voluptas";
                        error = new Status() {{
                            code = 69859;
                            details = new java.util.HashMap<String, Object>[]{{
                                add(new java.util.HashMap<String, Object>() {{
                                    put("tempora", "debitis");
                                }}),
                                add(new java.util.HashMap<String, Object>() {{
                                    put("aspernatur", "sequi");
                                    put("quo", "esse");
                                }}),
                                add(new java.util.HashMap<String, Object>() {{
                                    put("aperiam", "distinctio");
                                    put("quod", "dignissimos");
                                    put("inventore", "nihil");
                                    put("totam", "accusamus");
                                }}),
                            }};
                            message = "aliquam";
                        }};;
                        name = "Violet Johns";
                        progress = 645570;
                        progressPercent = 475289;
                        startTime = "accusantium";
                        state = ReplicationCycleStateEnum.FAILED;
                        steps = new org.openapis.openapi.models.shared.CycleStep[]{{
                            add(new CycleStep() {{
                                endTime = "quas";
                                initializingReplication = new java.util.HashMap<String, Object>() {{
                                    put("consequuntur", "deleniti");
                                    put("fugit", "fuga");
                                    put("mollitia", "incidunt");
                                }};
                                postProcessing = new java.util.HashMap<String, Object>() {{
                                    put("explicabo", "minima");
                                    put("nisi", "fugit");
                                    put("sapiente", "consequuntur");
                                }};
                                replicating = new ReplicatingStep() {{
                                    lastThirtyMinutesAverageBytesPerSecond = "ratione";
                                    lastTwoMinutesAverageBytesPerSecond = "explicabo";
                                    replicatedBytes = "saepe";
                                    totalBytes = "occaecati";
                                }};
                                startTime = "atque";
                            }}),
                            add(new CycleStep() {{
                                endTime = "et";
                                initializingReplication = new java.util.HashMap<String, Object>() {{
                                    put("eveniet", "accusamus");
                                    put("veritatis", "esse");
                                }};
                                postProcessing = new java.util.HashMap<String, Object>() {{
                                    put("nam", "vero");
                                    put("aliquid", "quasi");
                                    put("saepe", "vel");
                                    put("harum", "molestiae");
                                }};
                                replicating = new ReplicatingStep() {{
                                    lastThirtyMinutesAverageBytesPerSecond = "rerum";
                                    lastTwoMinutesAverageBytesPerSecond = "occaecati";
                                    replicatedBytes = "minima";
                                    totalBytes = "distinctio";
                                }};
                                startTime = "eligendi";
                            }}),
                        }};
                        totalPauseDuration = "sit";
                    }};;
                    description = "culpa";
                    displayName = "tempore";
                    error = new Status() {{
                        code = 240020;
                        details = new java.util.HashMap<String, Object>[]{{
                            add(new java.util.HashMap<String, Object>() {{
                                put("consequatur", "minus");
                            }}),
                            add(new java.util.HashMap<String, Object>() {{
                                put("sapiente", "consectetur");
                                put("esse", "blanditiis");
                            }}),
                            add(new java.util.HashMap<String, Object>() {{
                                put("a", "nulla");
                                put("quas", "esse");
                                put("quasi", "a");
                            }}),
                            add(new java.util.HashMap<String, Object>() {{
                                put("sint", "pariatur");
                                put("possimus", "quia");
                                put("eveniet", "asperiores");
                            }}),
                        }};
                        message = "facere";
                    }};;
                    labels = new java.util.HashMap<String, String>() {{
                        put("consequuntur", "quasi");
                    }};
                    lastReplicationCycle = new ReplicationCycleInput() {{
                        cycleNumber = 628899;
                        endTime = "culpa";
                        error = new Status() {{
                            code = 398434;
                            details = new java.util.HashMap<String, Object>[]{{
                                add(new java.util.HashMap<String, Object>() {{
                                    put("earum", "vel");
                                }}),
                                add(new java.util.HashMap<String, Object>() {{
                                    put("eius", "libero");
                                    put("illum", "soluta");
                                }}),
                                add(new java.util.HashMap<String, Object>() {{
                                    put("aliquam", "sapiente");
                                }}),
                                add(new java.util.HashMap<String, Object>() {{
                                    put("ullam", "reprehenderit");
                                }}),
                            }};
                            message = "ullam";
                        }};;
                        name = "Margaret Lemke";
                        progress = 401259;
                        progressPercent = 536275;
                        startTime = "itaque";
                        state = ReplicationCycleStateEnum.FAILED;
                        steps = new org.openapis.openapi.models.shared.CycleStep[]{{
                            add(new CycleStep() {{
                                endTime = "omnis";
                                initializingReplication = new java.util.HashMap<String, Object>() {{
                                    put("quasi", "at");
                                    put("et", "voluptate");
                                    put("ipsa", "minima");
                                    put("veritatis", "consectetur");
                                }};
                                postProcessing = new java.util.HashMap<String, Object>() {{
                                    put("iste", "temporibus");
                                }};
                                replicating = new ReplicatingStep() {{
                                    lastThirtyMinutesAverageBytesPerSecond = "accusantium";
                                    lastTwoMinutesAverageBytesPerSecond = "rem";
                                    replicatedBytes = "aut";
                                    totalBytes = "laudantium";
                                }};
                                startTime = "eum";
                            }}),
                        }};
                        totalPauseDuration = "mollitia";
                    }};;
                    lastSync = new ReplicationSync() {{
                        lastSyncTime = "ab";
                    }};;
                    policy = new SchedulePolicy() {{
                        idleDuration = "corrupti";
                        skipOsAdaptation = false;
                    }};;
                    sourceVmId = "non";
                    targetDefaults = new TargetVMDetailsInput() {{
                        appliedLicense = new AppliedLicense() {{
                            osLicense = "voluptatem";
                            type = AppliedLicenseTypeEnum.TYPE_UNSPECIFIED;
                        }};;
                        computeScheduling = new ComputeScheduling() {{
                            automaticRestart = false;
                            minNodeCpus = 580152;
                            nodeAffinities = new org.openapis.openapi.models.shared.SchedulingNodeAffinity[]{{
                                add(new SchedulingNodeAffinity() {{
                                    key = "impedit";
                                    operator = SchedulingNodeAffinityOperatorEnum.OPERATOR_UNSPECIFIED;
                                    values = new String[]{{
                                        add("aut"),
                                        add("dignissimos"),
                                    }};
                                }}),
                                add(new SchedulingNodeAffinity() {{
                                    key = "dicta";
                                    operator = SchedulingNodeAffinityOperatorEnum.NOT_IN;
                                    values = new String[]{{
                                        add("velit"),
                                        add("voluptatibus"),
                                        add("voluptas"),
                                    }};
                                }}),
                            }};
                            onHostMaintenance = ComputeSchedulingOnHostMaintenanceEnum.MIGRATE;
                            restartType = ComputeSchedulingRestartTypeEnum.RESTART_TYPE_UNSPECIFIED;
                        }};;
                        diskType = TargetVMDetailsDiskTypeEnum.STANDARD;
                        externalIp = "quaerat";
                        internalIp = "consequuntur";
                        labels = new java.util.HashMap<String, String>() {{
                            put("officia", "maxime");
                            put("dignissimos", "officia");
                            put("asperiores", "nemo");
                            put("quae", "quaerat");
                        }};
                        licenseType = TargetVMDetailsLicenseTypeEnum.BYOL;
                        machineType = "quod";
                        machineTypeSeries = "labore";
                        metadata = new java.util.HashMap<String, String>() {{
                            put("adipisci", "fuga");
                        }};
                        name = "Ricardo Franecki";
                        network = "recusandae";
                        networkInterfaces = new org.openapis.openapi.models.shared.NetworkInterface[]{{
                            add(new NetworkInterface() {{
                                externalIp = "fugiat";
                                internalIp = "vel";
                                network = "ducimus";
                                subnetwork = "quos";
                            }}),
                            add(new NetworkInterface() {{
                                externalIp = "vel";
                                internalIp = "labore";
                                network = "possimus";
                                subnetwork = "facilis";
                            }}),
                            add(new NetworkInterface() {{
                                externalIp = "cum";
                                internalIp = "commodi";
                                network = "in";
                                subnetwork = "corporis";
                            }}),
                        }};
                        networkTags = new String[]{{
                            add("assumenda"),
                            add("nemo"),
                            add("recusandae"),
                            add("aliquid"),
                        }};
                        secureBoot = false;
                        serviceAccount = "aperiam";
                        subnetwork = "cum";
                        targetProject = "consectetur";
                        zone = "in";
                    }};;
                }};;
                accessToken = "exercitationem";
                alt = AltEnum.PROTO;
                callback = "facere";
                fields = "numquam";
                key = "doloribus";
                migratingVmId = "suscipit";
                oauthToken = "reiciendis";
                prettyPrint = false;
                quotaUser = "quidem";
                requestId = "saepe";
                uploadType = "necessitatibus";
                uploadProtocol = "dolore";
            }};            

            VmmigrationProjectsLocationsSourcesMigratingVmsCreateResponse res = sdk.projects.vmmigrationProjectsLocationsSourcesMigratingVmsCreate(req, new VmmigrationProjectsLocationsSourcesMigratingVmsCreateSecurity("sunt", "asperiores") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
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

## vmmigrationProjectsLocationsSourcesMigratingVmsCutoverJobsCancel

Initiates the cancellation of a running cutover job.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.VmmigrationProjectsLocationsSourcesMigratingVmsCutoverJobsCancelRequest;
import org.openapis.openapi.models.operations.VmmigrationProjectsLocationsSourcesMigratingVmsCutoverJobsCancelResponse;
import org.openapis.openapi.models.operations.VmmigrationProjectsLocationsSourcesMigratingVmsCutoverJobsCancelSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            VmmigrationProjectsLocationsSourcesMigratingVmsCutoverJobsCancelRequest req = new VmmigrationProjectsLocationsSourcesMigratingVmsCutoverJobsCancelRequest("adipisci") {{
                dollarXgafv = XgafvEnum.ONE;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("beatae", "dignissimos");
                }};
                accessToken = "a";
                alt = AltEnum.PROTO;
                callback = "consectetur";
                fields = "corporis";
                key = "harum";
                oauthToken = "laboriosam";
                prettyPrint = false;
                quotaUser = "ipsa";
                uploadType = "voluptates";
                uploadProtocol = "libero";
            }};            

            VmmigrationProjectsLocationsSourcesMigratingVmsCutoverJobsCancelResponse res = sdk.projects.vmmigrationProjectsLocationsSourcesMigratingVmsCutoverJobsCancel(req, new VmmigrationProjectsLocationsSourcesMigratingVmsCutoverJobsCancelSecurity("vitae", "accusamus") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
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

## vmmigrationProjectsLocationsSourcesMigratingVmsCutoverJobsCreate

Initiates a Cutover of a specific migrating VM. The returned LRO is completed when the cutover job resource is created and the job is initiated.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.VmmigrationProjectsLocationsSourcesMigratingVmsCutoverJobsCreateRequest;
import org.openapis.openapi.models.operations.VmmigrationProjectsLocationsSourcesMigratingVmsCutoverJobsCreateResponse;
import org.openapis.openapi.models.operations.VmmigrationProjectsLocationsSourcesMigratingVmsCutoverJobsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.AppliedLicense;
import org.openapis.openapi.models.shared.AppliedLicenseTypeEnum;
import org.openapis.openapi.models.shared.ComputeEngineTargetDetails;
import org.openapis.openapi.models.shared.ComputeEngineTargetDetailsBootOptionEnum;
import org.openapis.openapi.models.shared.ComputeEngineTargetDetailsDiskTypeEnum;
import org.openapis.openapi.models.shared.ComputeEngineTargetDetailsLicenseTypeEnum;
import org.openapis.openapi.models.shared.ComputeScheduling;
import org.openapis.openapi.models.shared.ComputeSchedulingOnHostMaintenanceEnum;
import org.openapis.openapi.models.shared.ComputeSchedulingRestartTypeEnum;
import org.openapis.openapi.models.shared.CutoverJobInput;
import org.openapis.openapi.models.shared.NetworkInterface;
import org.openapis.openapi.models.shared.SchedulingNodeAffinity;
import org.openapis.openapi.models.shared.SchedulingNodeAffinityOperatorEnum;
import org.openapis.openapi.models.shared.Status;
import org.openapis.openapi.models.shared.TargetVMDetailsDiskTypeEnum;
import org.openapis.openapi.models.shared.TargetVMDetailsInput;
import org.openapis.openapi.models.shared.TargetVMDetailsLicenseTypeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            VmmigrationProjectsLocationsSourcesMigratingVmsCutoverJobsCreateRequest req = new VmmigrationProjectsLocationsSourcesMigratingVmsCutoverJobsCreateRequest("similique") {{
                dollarXgafv = XgafvEnum.ONE;
                cutoverJobInput = new CutoverJobInput() {{
                    computeEngineTargetDetails = new ComputeEngineTargetDetails() {{
                        additionalLicenses = new String[]{{
                            add("voluptas"),
                        }};
                        appliedLicense = new AppliedLicense() {{
                            osLicense = "voluptas";
                            type = AppliedLicenseTypeEnum.NONE;
                        }};;
                        bootOption = ComputeEngineTargetDetailsBootOptionEnum.COMPUTE_ENGINE_BOOT_OPTION_UNSPECIFIED;
                        computeScheduling = new ComputeScheduling() {{
                            automaticRestart = false;
                            minNodeCpus = 748789;
                            nodeAffinities = new org.openapis.openapi.models.shared.SchedulingNodeAffinity[]{{
                                add(new SchedulingNodeAffinity() {{
                                    key = "adipisci";
                                    operator = SchedulingNodeAffinityOperatorEnum.NOT_IN;
                                    values = new String[]{{
                                        add("blanditiis"),
                                    }};
                                }}),
                                add(new SchedulingNodeAffinity() {{
                                    key = "in";
                                    operator = SchedulingNodeAffinityOperatorEnum.OPERATOR_UNSPECIFIED;
                                    values = new String[]{{
                                        add("officiis"),
                                        add("temporibus"),
                                    }};
                                }}),
                                add(new SchedulingNodeAffinity() {{
                                    key = "ullam";
                                    operator = SchedulingNodeAffinityOperatorEnum.OPERATOR_UNSPECIFIED;
                                    values = new String[]{{
                                        add("blanditiis"),
                                        add("quas"),
                                        add("hic"),
                                    }};
                                }}),
                            }};
                            onHostMaintenance = ComputeSchedulingOnHostMaintenanceEnum.ON_HOST_MAINTENANCE_UNSPECIFIED;
                            restartType = ComputeSchedulingRestartTypeEnum.AUTOMATIC_RESTART;
                        }};;
                        diskType = ComputeEngineTargetDetailsDiskTypeEnum.COMPUTE_ENGINE_DISK_TYPE_SSD;
                        hostname = "trained-load.org";
                        labels = new java.util.HashMap<String, String>() {{
                            put("nobis", "sit");
                            put("rerum", "sed");
                        }};
                        licenseType = ComputeEngineTargetDetailsLicenseTypeEnum.COMPUTE_ENGINE_LICENSE_TYPE_BYOL;
                        machineType = "explicabo";
                        machineTypeSeries = "asperiores";
                        metadata = new java.util.HashMap<String, String>() {{
                            put("voluptate", "expedita");
                            put("ab", "iste");
                            put("dolore", "laborum");
                        }};
                        networkInterfaces = new org.openapis.openapi.models.shared.NetworkInterface[]{{
                            add(new NetworkInterface() {{
                                externalIp = "in";
                                internalIp = "commodi";
                                network = "quidem";
                                subnetwork = "explicabo";
                            }}),
                        }};
                        networkTags = new String[]{{
                            add("unde"),
                            add("architecto"),
                        }};
                        project = "suscipit";
                        secureBoot = false;
                        serviceAccount = "sapiente";
                        vmName = "debitis";
                        zone = "illo";
                    }};;
                    computeEngineVmDetails = new TargetVMDetailsInput() {{
                        appliedLicense = new AppliedLicense() {{
                            osLicense = "reiciendis";
                            type = AppliedLicenseTypeEnum.TYPE_UNSPECIFIED;
                        }};;
                        computeScheduling = new ComputeScheduling() {{
                            automaticRestart = false;
                            minNodeCpus = 546885;
                            nodeAffinities = new org.openapis.openapi.models.shared.SchedulingNodeAffinity[]{{
                                add(new SchedulingNodeAffinity() {{
                                    key = "incidunt";
                                    operator = SchedulingNodeAffinityOperatorEnum.OPERATOR_UNSPECIFIED;
                                    values = new String[]{{
                                        add("eius"),
                                        add("necessitatibus"),
                                        add("ipsum"),
                                    }};
                                }}),
                                add(new SchedulingNodeAffinity() {{
                                    key = "ea";
                                    operator = SchedulingNodeAffinityOperatorEnum.IN;
                                    values = new String[]{{
                                        add("voluptatibus"),
                                        add("tempora"),
                                        add("tempora"),
                                    }};
                                }}),
                                add(new SchedulingNodeAffinity() {{
                                    key = "voluptate";
                                    operator = SchedulingNodeAffinityOperatorEnum.NOT_IN;
                                    values = new String[]{{
                                        add("sit"),
                                        add("non"),
                                    }};
                                }}),
                                add(new SchedulingNodeAffinity() {{
                                    key = "officiis";
                                    operator = SchedulingNodeAffinityOperatorEnum.IN;
                                    values = new String[]{{
                                        add("quaerat"),
                                        add("incidunt"),
                                        add("ipsam"),
                                    }};
                                }}),
                            }};
                            onHostMaintenance = ComputeSchedulingOnHostMaintenanceEnum.MIGRATE;
                            restartType = ComputeSchedulingRestartTypeEnum.AUTOMATIC_RESTART;
                        }};;
                        diskType = TargetVMDetailsDiskTypeEnum.DISK_TYPE_UNSPECIFIED;
                        externalIp = "nobis";
                        internalIp = "error";
                        labels = new java.util.HashMap<String, String>() {{
                            put("minima", "recusandae");
                            put("reiciendis", "nulla");
                        }};
                        licenseType = TargetVMDetailsLicenseTypeEnum.DEFAULT_;
                        machineType = "aperiam";
                        machineTypeSeries = "saepe";
                        metadata = new java.util.HashMap<String, String>() {{
                            put("veniam", "in");
                            put("officiis", "beatae");
                        }};
                        name = "Jorge Langosh";
                        network = "dolorum";
                        networkInterfaces = new org.openapis.openapi.models.shared.NetworkInterface[]{{
                            add(new NetworkInterface() {{
                                externalIp = "error";
                                internalIp = "hic";
                                network = "expedita";
                                subnetwork = "debitis";
                            }}),
                            add(new NetworkInterface() {{
                                externalIp = "neque";
                                internalIp = "dolorum";
                                network = "nostrum";
                                subnetwork = "officia";
                            }}),
                            add(new NetworkInterface() {{
                                externalIp = "dolorum";
                                internalIp = "corrupti";
                                network = "accusamus";
                                subnetwork = "tempora";
                            }}),
                        }};
                        networkTags = new String[]{{
                            add("fugit"),
                            add("ut"),
                            add("fugiat"),
                        }};
                        secureBoot = false;
                        serviceAccount = "voluptatem";
                        subnetwork = "culpa";
                        targetProject = "expedita";
                        zone = "magnam";
                    }};;
                    error = new Status() {{
                        code = 7884;
                        details = new java.util.HashMap<String, Object>[]{{
                            add(new java.util.HashMap<String, Object>() {{
                                put("sit", "voluptatum");
                                put("quas", "repudiandae");
                            }}),
                            add(new java.util.HashMap<String, Object>() {{
                                put("et", "blanditiis");
                                put("ex", "sed");
                            }}),
                        }};
                        message = "sit";
                    }};;
                    targetDetails = new TargetVMDetailsInput() {{
                        appliedLicense = new AppliedLicense() {{
                            osLicense = "vel";
                            type = AppliedLicenseTypeEnum.NONE;
                        }};;
                        computeScheduling = new ComputeScheduling() {{
                            automaticRestart = false;
                            minNodeCpus = 906172;
                            nodeAffinities = new org.openapis.openapi.models.shared.SchedulingNodeAffinity[]{{
                                add(new SchedulingNodeAffinity() {{
                                    key = "consequatur";
                                    operator = SchedulingNodeAffinityOperatorEnum.OPERATOR_UNSPECIFIED;
                                    values = new String[]{{
                                        add("dolorem"),
                                        add("harum"),
                                        add("dicta"),
                                        add("architecto"),
                                    }};
                                }}),
                                add(new SchedulingNodeAffinity() {{
                                    key = "occaecati";
                                    operator = SchedulingNodeAffinityOperatorEnum.OPERATOR_UNSPECIFIED;
                                    values = new String[]{{
                                        add("atque"),
                                        add("laborum"),
                                        add("nam"),
                                    }};
                                }}),
                                add(new SchedulingNodeAffinity() {{
                                    key = "tenetur";
                                    operator = SchedulingNodeAffinityOperatorEnum.IN;
                                    values = new String[]{{
                                        add("amet"),
                                    }};
                                }}),
                            }};
                            onHostMaintenance = ComputeSchedulingOnHostMaintenanceEnum.TERMINATE;
                            restartType = ComputeSchedulingRestartTypeEnum.AUTOMATIC_RESTART;
                        }};;
                        diskType = TargetVMDetailsDiskTypeEnum.BALANCED;
                        externalIp = "reiciendis";
                        internalIp = "provident";
                        labels = new java.util.HashMap<String, String>() {{
                            put("delectus", "voluptates");
                            put("perferendis", "est");
                            put("quidem", "reprehenderit");
                            put("facere", "fuga");
                        }};
                        licenseType = TargetVMDetailsLicenseTypeEnum.PAYG;
                        machineType = "mollitia";
                        machineTypeSeries = "veniam";
                        metadata = new java.util.HashMap<String, String>() {{
                            put("quisquam", "repudiandae");
                        }};
                        name = "Kay Kihn";
                        network = "suscipit";
                        networkInterfaces = new org.openapis.openapi.models.shared.NetworkInterface[]{{
                            add(new NetworkInterface() {{
                                externalIp = "maxime";
                                internalIp = "et";
                                network = "esse";
                                subnetwork = "amet";
                            }}),
                            add(new NetworkInterface() {{
                                externalIp = "assumenda";
                                internalIp = "ea";
                                network = "atque";
                                subnetwork = "error";
                            }}),
                            add(new NetworkInterface() {{
                                externalIp = "officiis";
                                internalIp = "officiis";
                                network = "accusamus";
                                subnetwork = "natus";
                            }}),
                        }};
                        networkTags = new String[]{{
                            add("aspernatur"),
                            add("ex"),
                        }};
                        secureBoot = false;
                        serviceAccount = "maiores";
                        subnetwork = "corrupti";
                        targetProject = "at";
                        zone = "error";
                    }};;
                }};;
                accessToken = "blanditiis";
                alt = AltEnum.MEDIA;
                callback = "repudiandae";
                cutoverJobId = "atque";
                fields = "atque";
                key = "sunt";
                oauthToken = "recusandae";
                prettyPrint = false;
                quotaUser = "dolorum";
                requestId = "repellendus";
                uploadType = "labore";
                uploadProtocol = "reiciendis";
            }};            

            VmmigrationProjectsLocationsSourcesMigratingVmsCutoverJobsCreateResponse res = sdk.projects.vmmigrationProjectsLocationsSourcesMigratingVmsCutoverJobsCreate(req, new VmmigrationProjectsLocationsSourcesMigratingVmsCutoverJobsCreateSecurity("doloremque", "repudiandae") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
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

## vmmigrationProjectsLocationsSourcesMigratingVmsCutoverJobsList

Lists CutoverJobs of a given migrating VM.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.VmmigrationProjectsLocationsSourcesMigratingVmsCutoverJobsListRequest;
import org.openapis.openapi.models.operations.VmmigrationProjectsLocationsSourcesMigratingVmsCutoverJobsListResponse;
import org.openapis.openapi.models.operations.VmmigrationProjectsLocationsSourcesMigratingVmsCutoverJobsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            VmmigrationProjectsLocationsSourcesMigratingVmsCutoverJobsListRequest req = new VmmigrationProjectsLocationsSourcesMigratingVmsCutoverJobsListRequest("dicta") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "beatae";
                alt = AltEnum.JSON;
                callback = "enim";
                fields = "laboriosam";
                filter = "velit";
                key = "a";
                oauthToken = "molestias";
                orderBy = "magnam";
                pageSize = 906355L;
                pageToken = "consequuntur";
                prettyPrint = false;
                quotaUser = "occaecati";
                uploadType = "officiis";
                uploadProtocol = "perspiciatis";
            }};            

            VmmigrationProjectsLocationsSourcesMigratingVmsCutoverJobsListResponse res = sdk.projects.vmmigrationProjectsLocationsSourcesMigratingVmsCutoverJobsList(req, new VmmigrationProjectsLocationsSourcesMigratingVmsCutoverJobsListSecurity("in", "adipisci") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listCutoverJobsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## vmmigrationProjectsLocationsSourcesMigratingVmsFinalizeMigration

Marks a migration as completed, deleting migration resources that are no longer being used. Only applicable after cutover is done.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.VmmigrationProjectsLocationsSourcesMigratingVmsFinalizeMigrationRequest;
import org.openapis.openapi.models.operations.VmmigrationProjectsLocationsSourcesMigratingVmsFinalizeMigrationResponse;
import org.openapis.openapi.models.operations.VmmigrationProjectsLocationsSourcesMigratingVmsFinalizeMigrationSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            VmmigrationProjectsLocationsSourcesMigratingVmsFinalizeMigrationRequest req = new VmmigrationProjectsLocationsSourcesMigratingVmsFinalizeMigrationRequest("eveniet") {{
                dollarXgafv = XgafvEnum.TWO;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("fugit", "id");
                }};
                accessToken = "quis";
                alt = AltEnum.MEDIA;
                callback = "error";
                fields = "illo";
                key = "corporis";
                oauthToken = "quidem";
                prettyPrint = false;
                quotaUser = "eveniet";
                uploadType = "non";
                uploadProtocol = "vero";
            }};            

            VmmigrationProjectsLocationsSourcesMigratingVmsFinalizeMigrationResponse res = sdk.projects.vmmigrationProjectsLocationsSourcesMigratingVmsFinalizeMigration(req, new VmmigrationProjectsLocationsSourcesMigratingVmsFinalizeMigrationSecurity("doloremque", "iure") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
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

## vmmigrationProjectsLocationsSourcesMigratingVmsList

Lists MigratingVms in a given Source.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.VmmigrationProjectsLocationsSourcesMigratingVmsListRequest;
import org.openapis.openapi.models.operations.VmmigrationProjectsLocationsSourcesMigratingVmsListResponse;
import org.openapis.openapi.models.operations.VmmigrationProjectsLocationsSourcesMigratingVmsListSecurity;
import org.openapis.openapi.models.operations.VmmigrationProjectsLocationsSourcesMigratingVmsListViewEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            VmmigrationProjectsLocationsSourcesMigratingVmsListRequest req = new VmmigrationProjectsLocationsSourcesMigratingVmsListRequest("ipsa") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "quae";
                alt = AltEnum.MEDIA;
                callback = "eveniet";
                fields = "qui";
                filter = "cum";
                key = "iure";
                oauthToken = "necessitatibus";
                orderBy = "ratione";
                pageSize = 672582L;
                pageToken = "distinctio";
                prettyPrint = false;
                quotaUser = "voluptatum";
                uploadType = "rem";
                uploadProtocol = "aliquam";
                view = VmmigrationProjectsLocationsSourcesMigratingVmsListViewEnum.MIGRATING_VM_VIEW_UNSPECIFIED;
            }};            

            VmmigrationProjectsLocationsSourcesMigratingVmsListResponse res = sdk.projects.vmmigrationProjectsLocationsSourcesMigratingVmsList(req, new VmmigrationProjectsLocationsSourcesMigratingVmsListSecurity("repellat", "alias") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listMigratingVmsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## vmmigrationProjectsLocationsSourcesMigratingVmsPauseMigration

Pauses a migration for a VM. If cycle tasks are running they will be cancelled, preserving source task data. Further replication cycles will not be triggered while the VM is paused.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.VmmigrationProjectsLocationsSourcesMigratingVmsPauseMigrationRequest;
import org.openapis.openapi.models.operations.VmmigrationProjectsLocationsSourcesMigratingVmsPauseMigrationResponse;
import org.openapis.openapi.models.operations.VmmigrationProjectsLocationsSourcesMigratingVmsPauseMigrationSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            VmmigrationProjectsLocationsSourcesMigratingVmsPauseMigrationRequest req = new VmmigrationProjectsLocationsSourcesMigratingVmsPauseMigrationRequest("corporis") {{
                dollarXgafv = XgafvEnum.TWO;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("mollitia", "voluptas");
                    put("alias", "maiores");
                }};
                accessToken = "reiciendis";
                alt = AltEnum.JSON;
                callback = "id";
                fields = "minima";
                key = "dolore";
                oauthToken = "dolorum";
                prettyPrint = false;
                quotaUser = "nesciunt";
                uploadType = "quae";
                uploadProtocol = "recusandae";
            }};            

            VmmigrationProjectsLocationsSourcesMigratingVmsPauseMigrationResponse res = sdk.projects.vmmigrationProjectsLocationsSourcesMigratingVmsPauseMigration(req, new VmmigrationProjectsLocationsSourcesMigratingVmsPauseMigrationSecurity("omnis", "quaerat") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
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

## vmmigrationProjectsLocationsSourcesMigratingVmsReplicationCyclesList

Lists ReplicationCycles in a given MigratingVM.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.VmmigrationProjectsLocationsSourcesMigratingVmsReplicationCyclesListRequest;
import org.openapis.openapi.models.operations.VmmigrationProjectsLocationsSourcesMigratingVmsReplicationCyclesListResponse;
import org.openapis.openapi.models.operations.VmmigrationProjectsLocationsSourcesMigratingVmsReplicationCyclesListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            VmmigrationProjectsLocationsSourcesMigratingVmsReplicationCyclesListRequest req = new VmmigrationProjectsLocationsSourcesMigratingVmsReplicationCyclesListRequest("molestiae") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "ut";
                alt = AltEnum.MEDIA;
                callback = "adipisci";
                fields = "debitis";
                filter = "laudantium";
                key = "eum";
                oauthToken = "nemo";
                orderBy = "recusandae";
                pageSize = 456520L;
                pageToken = "provident";
                prettyPrint = false;
                quotaUser = "quis";
                uploadType = "eum";
                uploadProtocol = "reiciendis";
            }};            

            VmmigrationProjectsLocationsSourcesMigratingVmsReplicationCyclesListResponse res = sdk.projects.vmmigrationProjectsLocationsSourcesMigratingVmsReplicationCyclesList(req, new VmmigrationProjectsLocationsSourcesMigratingVmsReplicationCyclesListSecurity("provident", "aspernatur") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listReplicationCyclesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## vmmigrationProjectsLocationsSourcesMigratingVmsResumeMigration

Resumes a migration for a VM. When called on a paused migration, will start the process of uploading data and creating snapshots; when called on a completed cut-over migration, will update the migration to active state and start the process of uploading data and creating snapshots.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.VmmigrationProjectsLocationsSourcesMigratingVmsResumeMigrationRequest;
import org.openapis.openapi.models.operations.VmmigrationProjectsLocationsSourcesMigratingVmsResumeMigrationResponse;
import org.openapis.openapi.models.operations.VmmigrationProjectsLocationsSourcesMigratingVmsResumeMigrationSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            VmmigrationProjectsLocationsSourcesMigratingVmsResumeMigrationRequest req = new VmmigrationProjectsLocationsSourcesMigratingVmsResumeMigrationRequest("ullam") {{
                dollarXgafv = XgafvEnum.ONE;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("nostrum", "mollitia");
                    put("provident", "possimus");
                    put("animi", "ex");
                }};
                accessToken = "aliquid";
                alt = AltEnum.JSON;
                callback = "repellat";
                fields = "doloribus";
                key = "ullam";
                oauthToken = "in";
                prettyPrint = false;
                quotaUser = "nam";
                uploadType = "earum";
                uploadProtocol = "officia";
            }};            

            VmmigrationProjectsLocationsSourcesMigratingVmsResumeMigrationResponse res = sdk.projects.vmmigrationProjectsLocationsSourcesMigratingVmsResumeMigration(req, new VmmigrationProjectsLocationsSourcesMigratingVmsResumeMigrationSecurity("laborum", "placeat") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
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

## vmmigrationProjectsLocationsSourcesMigratingVmsStartMigration

Starts migration for a VM. Starts the process of uploading data and creating snapshots, in replication cycles scheduled by the policy.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.VmmigrationProjectsLocationsSourcesMigratingVmsStartMigrationRequest;
import org.openapis.openapi.models.operations.VmmigrationProjectsLocationsSourcesMigratingVmsStartMigrationResponse;
import org.openapis.openapi.models.operations.VmmigrationProjectsLocationsSourcesMigratingVmsStartMigrationSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            VmmigrationProjectsLocationsSourcesMigratingVmsStartMigrationRequest req = new VmmigrationProjectsLocationsSourcesMigratingVmsStartMigrationRequest("modi") {{
                dollarXgafv = XgafvEnum.TWO;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("officiis", "sapiente");
                    put("cumque", "vitae");
                    put("rerum", "tempora");
                }};
                accessToken = "quis";
                alt = AltEnum.JSON;
                callback = "fugit";
                fields = "cumque";
                key = "quae";
                oauthToken = "perferendis";
                prettyPrint = false;
                quotaUser = "velit";
                uploadType = "aspernatur";
                uploadProtocol = "eum";
            }};            

            VmmigrationProjectsLocationsSourcesMigratingVmsStartMigrationResponse res = sdk.projects.vmmigrationProjectsLocationsSourcesMigratingVmsStartMigration(req, new VmmigrationProjectsLocationsSourcesMigratingVmsStartMigrationSecurity("eius", "rem") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
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

## vmmigrationProjectsLocationsSourcesUtilizationReportsCreate

Creates a new UtilizationReport.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.VmmigrationProjectsLocationsSourcesUtilizationReportsCreateRequest;
import org.openapis.openapi.models.operations.VmmigrationProjectsLocationsSourcesUtilizationReportsCreateResponse;
import org.openapis.openapi.models.operations.VmmigrationProjectsLocationsSourcesUtilizationReportsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Status;
import org.openapis.openapi.models.shared.UtilizationReportInput;
import org.openapis.openapi.models.shared.UtilizationReportTimeFrameEnum;
import org.openapis.openapi.models.shared.VmUtilizationInfoInput;
import org.openapis.openapi.models.shared.VmUtilizationMetrics;
import org.openapis.openapi.models.shared.VmwareVmDetailsInput;
import org.openapis.openapi.models.shared.VmwareVmDetailsPowerStateEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            VmmigrationProjectsLocationsSourcesUtilizationReportsCreateRequest req = new VmmigrationProjectsLocationsSourcesUtilizationReportsCreateRequest("at") {{
                dollarXgafv = XgafvEnum.TWO;
                utilizationReportInput = new UtilizationReportInput() {{
                    displayName = "eos";
                    error = new Status() {{
                        code = 958741;
                        details = new java.util.HashMap<String, Object>[]{{
                            add(new java.util.HashMap<String, Object>() {{
                                put("minima", "beatae");
                            }}),
                            add(new java.util.HashMap<String, Object>() {{
                                put("provident", "earum");
                                put("soluta", "hic");
                                put("illum", "eaque");
                            }}),
                        }};
                        message = "earum";
                    }};;
                    timeFrame = UtilizationReportTimeFrameEnum.MONTH;
                    vms = new org.openapis.openapi.models.shared.VmUtilizationInfoInput[]{{
                        add(new VmUtilizationInfoInput() {{
                            utilization = new VmUtilizationMetrics() {{
                                cpuAverage = 891801;
                                cpuAveragePercent = 399802;
                                cpuMax = 780931;
                                cpuMaxPercent = 380335;
                                diskIoRateAverage = "dolorem";
                                diskIoRateAverageKbps = "fugit";
                                diskIoRateMax = "cumque";
                                diskIoRateMaxKbps = "fuga";
                                memoryAverage = 189062;
                                memoryAveragePercent = 656762;
                                memoryMax = 898760;
                                memoryMaxPercent = 862063;
                                networkThroughputAverage = "consequatur";
                                networkThroughputAverageKbps = "quasi";
                                networkThroughputMax = "et";
                                networkThroughputMaxKbps = "ducimus";
                            }};
                            vmId = "natus";
                            vmwareVmDetails = new VmwareVmDetailsInput() {{
                                committedStorage = "occaecati";
                                committedStorageMb = "suscipit";
                                cpuCount = 241557;
                                datacenterDescription = "quasi";
                                datacenterId = "magni";
                                diskCount = 984934;
                                displayName = "nulla";
                                guestDescription = "necessitatibus";
                                memoryMb = 58534;
                                powerState = VmwareVmDetailsPowerStateEnum.ON;
                                uuid = "771778ff-61d0-4174-b636-0a15db6a6606";
                                vmId = "voluptas";
                            }};
                        }}),
                        add(new VmUtilizationInfoInput() {{
                            utilization = new VmUtilizationMetrics() {{
                                cpuAverage = 614528;
                                cpuAveragePercent = 661607;
                                cpuMax = 70042;
                                cpuMaxPercent = 625358;
                                diskIoRateAverage = "possimus";
                                diskIoRateAverageKbps = "voluptates";
                                diskIoRateMax = "mollitia";
                                diskIoRateMaxKbps = "laborum";
                                memoryAverage = 726343;
                                memoryAveragePercent = 324083;
                                memoryMax = 536923;
                                memoryMaxPercent = 316220;
                                networkThroughputAverage = "vitae";
                                networkThroughputAverageKbps = "repellendus";
                                networkThroughputMax = "ex";
                                networkThroughputMaxKbps = "quo";
                            }};
                            vmId = "ex";
                            vmwareVmDetails = new VmwareVmDetailsInput() {{
                                committedStorage = "ut";
                                committedStorageMb = "ad";
                                cpuCount = 713927;
                                datacenterDescription = "voluptatem";
                                datacenterId = "molestias";
                                diskCount = 737254;
                                displayName = "aliquid";
                                guestDescription = "beatae";
                                memoryMb = 530860;
                                powerState = VmwareVmDetailsPowerStateEnum.OFF;
                                uuid = "1baa0fe1-ade0-408e-af8c-5f350d8cdb5a";
                                vmId = "dolor";
                            }};
                        }}),
                        add(new VmUtilizationInfoInput() {{
                            utilization = new VmUtilizationMetrics() {{
                                cpuAverage = 307376;
                                cpuAveragePercent = 80532;
                                cpuMax = 537279;
                                cpuMaxPercent = 85311;
                                diskIoRateAverage = "tempora";
                                diskIoRateAverageKbps = "dolor";
                                diskIoRateMax = "consequatur";
                                diskIoRateMaxKbps = "architecto";
                                memoryAverage = 24944;
                                memoryAveragePercent = 265039;
                                memoryMax = 144286;
                                memoryMaxPercent = 66149;
                                networkThroughputAverage = "laudantium";
                                networkThroughputAverageKbps = "quae";
                                networkThroughputMax = "dolor";
                                networkThroughputMaxKbps = "fugiat";
                            }};
                            vmId = "ipsam";
                            vmwareVmDetails = new VmwareVmDetailsInput() {{
                                committedStorage = "consequuntur";
                                committedStorageMb = "ipsa";
                                cpuCount = 559682;
                                datacenterDescription = "eveniet";
                                datacenterId = "impedit";
                                diskCount = 884952;
                                displayName = "esse";
                                guestDescription = "necessitatibus";
                                memoryMb = 153369;
                                powerState = VmwareVmDetailsPowerStateEnum.ON;
                                uuid = "3b668451-c6c6-4e20-9e16-deab3fec9578";
                                vmId = "officia";
                            }};
                        }}),
                        add(new VmUtilizationInfoInput() {{
                            utilization = new VmUtilizationMetrics() {{
                                cpuAverage = 376389;
                                cpuAveragePercent = 254025;
                                cpuMax = 364912;
                                cpuMaxPercent = 551079;
                                diskIoRateAverage = "eius";
                                diskIoRateAverageKbps = "aspernatur";
                                diskIoRateMax = "ducimus";
                                diskIoRateMaxKbps = "nesciunt";
                                memoryAverage = 681740;
                                memoryAveragePercent = 514054;
                                memoryMax = 277340;
                                memoryMaxPercent = 97493;
                                networkThroughputAverage = "rem";
                                networkThroughputAverageKbps = "fugiat";
                                networkThroughputMax = "dicta";
                                networkThroughputMaxKbps = "nisi";
                            }};
                            vmId = "consequuntur";
                            vmwareVmDetails = new VmwareVmDetailsInput() {{
                                committedStorage = "consectetur";
                                committedStorageMb = "aperiam";
                                cpuCount = 585432;
                                datacenterDescription = "reiciendis";
                                datacenterId = "soluta";
                                diskCount = 3860;
                                displayName = "omnis";
                                guestDescription = "eos";
                                memoryMb = 579011;
                                powerState = VmwareVmDetailsPowerStateEnum.OFF;
                                uuid = "21aefb9f-58c4-4d86-a68e-4be056013f59";
                                vmId = "nulla";
                            }};
                        }}),
                    }};
                }};;
                accessToken = "deserunt";
                alt = AltEnum.MEDIA;
                callback = "nemo";
                fields = "reprehenderit";
                key = "est";
                oauthToken = "quis";
                prettyPrint = false;
                quotaUser = "sint";
                requestId = "accusamus";
                uploadType = "impedit";
                uploadProtocol = "hic";
                utilizationReportId = "necessitatibus";
            }};            

            VmmigrationProjectsLocationsSourcesUtilizationReportsCreateResponse res = sdk.projects.vmmigrationProjectsLocationsSourcesUtilizationReportsCreate(req, new VmmigrationProjectsLocationsSourcesUtilizationReportsCreateSecurity("asperiores", "ex") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
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

## vmmigrationProjectsLocationsSourcesUtilizationReportsList

Lists Utilization Reports of the given Source.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.VmmigrationProjectsLocationsSourcesUtilizationReportsListRequest;
import org.openapis.openapi.models.operations.VmmigrationProjectsLocationsSourcesUtilizationReportsListResponse;
import org.openapis.openapi.models.operations.VmmigrationProjectsLocationsSourcesUtilizationReportsListSecurity;
import org.openapis.openapi.models.operations.VmmigrationProjectsLocationsSourcesUtilizationReportsListViewEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            VmmigrationProjectsLocationsSourcesUtilizationReportsListRequest req = new VmmigrationProjectsLocationsSourcesUtilizationReportsListRequest("voluptas") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "delectus";
                alt = AltEnum.JSON;
                callback = "minus";
                fields = "fuga";
                filter = "laborum";
                key = "consectetur";
                oauthToken = "velit";
                orderBy = "atque";
                pageSize = 216457L;
                pageToken = "impedit";
                prettyPrint = false;
                quotaUser = "magni";
                uploadType = "soluta";
                uploadProtocol = "repudiandae";
                view = VmmigrationProjectsLocationsSourcesUtilizationReportsListViewEnum.FULL;
            }};            

            VmmigrationProjectsLocationsSourcesUtilizationReportsListResponse res = sdk.projects.vmmigrationProjectsLocationsSourcesUtilizationReportsList(req, new VmmigrationProjectsLocationsSourcesUtilizationReportsListSecurity("dolore", "iusto") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listUtilizationReportsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## vmmigrationProjectsLocationsTargetProjectsCreate

Creates a new TargetProject in a given project. NOTE: TargetProject is a global resource; hence the only supported value for location is `global`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.VmmigrationProjectsLocationsTargetProjectsCreateRequest;
import org.openapis.openapi.models.operations.VmmigrationProjectsLocationsTargetProjectsCreateResponse;
import org.openapis.openapi.models.operations.VmmigrationProjectsLocationsTargetProjectsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.TargetProjectInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            VmmigrationProjectsLocationsTargetProjectsCreateRequest req = new VmmigrationProjectsLocationsTargetProjectsCreateRequest("voluptate") {{
                dollarXgafv = XgafvEnum.ONE;
                targetProjectInput = new TargetProjectInput() {{
                    description = "dignissimos";
                    project = "neque";
                }};;
                accessToken = "quo";
                alt = AltEnum.MEDIA;
                callback = "quibusdam";
                fields = "iure";
                key = "odit";
                oauthToken = "voluptatibus";
                prettyPrint = false;
                quotaUser = "vel";
                requestId = "magnam";
                targetProjectId = "quibusdam";
                uploadType = "inventore";
                uploadProtocol = "facere";
            }};            

            VmmigrationProjectsLocationsTargetProjectsCreateResponse res = sdk.projects.vmmigrationProjectsLocationsTargetProjectsCreate(req, new VmmigrationProjectsLocationsTargetProjectsCreateSecurity("libero", "architecto") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
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

## vmmigrationProjectsLocationsTargetProjectsDelete

Deletes a single TargetProject. NOTE: TargetProject is a global resource; hence the only supported value for location is `global`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.VmmigrationProjectsLocationsTargetProjectsDeleteRequest;
import org.openapis.openapi.models.operations.VmmigrationProjectsLocationsTargetProjectsDeleteResponse;
import org.openapis.openapi.models.operations.VmmigrationProjectsLocationsTargetProjectsDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            VmmigrationProjectsLocationsTargetProjectsDeleteRequest req = new VmmigrationProjectsLocationsTargetProjectsDeleteRequest("voluptatibus") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "porro";
                alt = AltEnum.JSON;
                callback = "velit";
                fields = "illo";
                key = "accusantium";
                oauthToken = "vel";
                prettyPrint = false;
                quotaUser = "ea";
                requestId = "beatae";
                uploadType = "vero";
                uploadProtocol = "excepturi";
            }};            

            VmmigrationProjectsLocationsTargetProjectsDeleteResponse res = sdk.projects.vmmigrationProjectsLocationsTargetProjectsDelete(req, new VmmigrationProjectsLocationsTargetProjectsDeleteSecurity("eum", "velit") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
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

## vmmigrationProjectsLocationsTargetProjectsGet

Gets details of a single TargetProject. NOTE: TargetProject is a global resource; hence the only supported value for location is `global`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.VmmigrationProjectsLocationsTargetProjectsGetRequest;
import org.openapis.openapi.models.operations.VmmigrationProjectsLocationsTargetProjectsGetResponse;
import org.openapis.openapi.models.operations.VmmigrationProjectsLocationsTargetProjectsGetSecurity;
import org.openapis.openapi.models.operations.VmmigrationProjectsLocationsTargetProjectsGetViewEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            VmmigrationProjectsLocationsTargetProjectsGetRequest req = new VmmigrationProjectsLocationsTargetProjectsGetRequest("ut") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "earum";
                alt = AltEnum.JSON;
                callback = "impedit";
                fields = "voluptatibus";
                key = "iste";
                oauthToken = "itaque";
                prettyPrint = false;
                quotaUser = "alias";
                uploadType = "nisi";
                uploadProtocol = "itaque";
                view = VmmigrationProjectsLocationsTargetProjectsGetViewEnum.UTILIZATION_REPORT_VIEW_UNSPECIFIED;
            }};            

            VmmigrationProjectsLocationsTargetProjectsGetResponse res = sdk.projects.vmmigrationProjectsLocationsTargetProjectsGet(req, new VmmigrationProjectsLocationsTargetProjectsGetSecurity("laborum", "non") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.targetProject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## vmmigrationProjectsLocationsTargetProjectsList

Lists TargetProjects in a given project. NOTE: TargetProject is a global resource; hence the only supported value for location is `global`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.VmmigrationProjectsLocationsTargetProjectsListRequest;
import org.openapis.openapi.models.operations.VmmigrationProjectsLocationsTargetProjectsListResponse;
import org.openapis.openapi.models.operations.VmmigrationProjectsLocationsTargetProjectsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            VmmigrationProjectsLocationsTargetProjectsListRequest req = new VmmigrationProjectsLocationsTargetProjectsListRequest("dolor") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "sit";
                alt = AltEnum.JSON;
                callback = "consequatur";
                fields = "officia";
                filter = "recusandae";
                key = "ea";
                oauthToken = "quidem";
                orderBy = "voluptas";
                pageSize = 705148L;
                pageToken = "placeat";
                prettyPrint = false;
                quotaUser = "perspiciatis";
                uploadType = "expedita";
                uploadProtocol = "deleniti";
            }};            

            VmmigrationProjectsLocationsTargetProjectsListResponse res = sdk.projects.vmmigrationProjectsLocationsTargetProjectsList(req, new VmmigrationProjectsLocationsTargetProjectsListSecurity("a", "voluptate") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listTargetProjectsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## vmmigrationProjectsLocationsTargetProjectsPatch

Updates the parameters of a single TargetProject. NOTE: TargetProject is a global resource; hence the only supported value for location is `global`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.VmmigrationProjectsLocationsTargetProjectsPatchRequest;
import org.openapis.openapi.models.operations.VmmigrationProjectsLocationsTargetProjectsPatchResponse;
import org.openapis.openapi.models.operations.VmmigrationProjectsLocationsTargetProjectsPatchSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.TargetProjectInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            VmmigrationProjectsLocationsTargetProjectsPatchRequest req = new VmmigrationProjectsLocationsTargetProjectsPatchRequest("ullam") {{
                dollarXgafv = XgafvEnum.TWO;
                targetProjectInput = new TargetProjectInput() {{
                    description = "necessitatibus";
                    project = "animi";
                }};;
                accessToken = "impedit";
                alt = AltEnum.MEDIA;
                callback = "corporis";
                fields = "est";
                key = "error";
                oauthToken = "esse";
                prettyPrint = false;
                quotaUser = "labore";
                requestId = "veritatis";
                updateMask = "vero";
                uploadType = "consectetur";
                uploadProtocol = "vitae";
            }};            

            VmmigrationProjectsLocationsTargetProjectsPatchResponse res = sdk.projects.vmmigrationProjectsLocationsTargetProjectsPatch(req, new VmmigrationProjectsLocationsTargetProjectsPatchSecurity("inventore", "dolorem") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
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
