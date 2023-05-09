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
                    labels = new java.util.HashMap<String, String>() {{
                        put("ut", "maiores");
                        put("dicta", "corporis");
                    }};
                    vmware = new VmwareSourceDetails() {{
                        password = "dolore";
                        thumbprint = "iusto";
                        username = "Birdie88";
                        vcenterIp = "commodi";
                    }};;
                }};;
                accessToken = "repudiandae";
                alt = AltEnum.JSON;
                callback = "ipsum";
                fields = "quidem";
                key = "molestias";
                oauthToken = "excepturi";
                prettyPrint = false;
                quotaUser = "pariatur";
                requestId = "modi";
                sourceId = "praesentium";
                uploadType = "rem";
                uploadProtocol = "voluptates";
            }};            

            VmmigrationProjectsLocationsSourcesCreateResponse res = sdk.projects.vmmigrationProjectsLocationsSourcesCreate(req, new VmmigrationProjectsLocationsSourcesCreateSecurity("quasi", "repudiandae") {{
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

            VmmigrationProjectsLocationsSourcesDatacenterConnectorsCreateRequest req = new VmmigrationProjectsLocationsSourcesDatacenterConnectorsCreateRequest("sint") {{
                dollarXgafv = XgafvEnum.ONE;
                datacenterConnectorInput = new DatacenterConnectorInput() {{
                    availableVersions = new AvailableUpdates() {{
                        inPlaceUpdate = new ApplianceVersion() {{
                            critical = false;
                            releaseNotesUri = "itaque";
                            uri = "http://fruitful-adjective.net";
                            version = "quibusdam";
                        }};;
                        newDeployableAppliance = new ApplianceVersion() {{
                            critical = false;
                            releaseNotesUri = "explicabo";
                            uri = "https://sandy-spruce.biz";
                            version = "modi";
                        }};;
                    }};;
                    error = new Status() {{
                        code = 183191;
                        details = new java.util.HashMap<String, Object>[]{{
                            add(new java.util.HashMap<String, Object>() {{
                                put("quos", "perferendis");
                                put("magni", "assumenda");
                                put("ipsam", "alias");
                            }}),
                            add(new java.util.HashMap<String, Object>() {{
                                put("dolorum", "excepturi");
                            }}),
                        }};
                        message = "tempora";
                    }};;
                    registrationId = "facilis";
                    serviceAccount = "tempore";
                    upgradeStatus = new UpgradeStatus() {{
                        error = new Status() {{
                            code = 288476;
                            details = new java.util.HashMap<String, Object>[]{{
                                add(new java.util.HashMap<String, Object>() {{
                                    put("non", "eligendi");
                                    put("sint", "aliquid");
                                }}),
                                add(new java.util.HashMap<String, Object>() {{
                                    put("necessitatibus", "sint");
                                    put("officia", "dolor");
                                    put("debitis", "a");
                                }}),
                                add(new java.util.HashMap<String, Object>() {{
                                    put("in", "in");
                                    put("illum", "maiores");
                                    put("rerum", "dicta");
                                }}),
                                add(new java.util.HashMap<String, Object>() {{
                                    put("cumque", "facere");
                                    put("ea", "aliquid");
                                }}),
                            }};
                            message = "laborum";
                        }};;
                        previousVersion = "accusamus";
                        startTime = "non";
                        state = UpgradeStatusStateEnum.FAILED;
                        version = "enim";
                    }};;
                    version = "accusamus";
                }};;
                accessToken = "delectus";
                alt = AltEnum.PROTO;
                callback = "provident";
                datacenterConnectorId = "nam";
                fields = "id";
                key = "blanditiis";
                oauthToken = "deleniti";
                prettyPrint = false;
                quotaUser = "sapiente";
                requestId = "amet";
                uploadType = "deserunt";
                uploadProtocol = "nisi";
            }};            

            VmmigrationProjectsLocationsSourcesDatacenterConnectorsCreateResponse res = sdk.projects.vmmigrationProjectsLocationsSourcesDatacenterConnectorsCreate(req, new VmmigrationProjectsLocationsSourcesDatacenterConnectorsCreateSecurity("vel", "natus") {{
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

            VmmigrationProjectsLocationsSourcesDatacenterConnectorsListRequest req = new VmmigrationProjectsLocationsSourcesDatacenterConnectorsListRequest("omnis") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "perferendis";
                alt = AltEnum.MEDIA;
                callback = "magnam";
                fields = "distinctio";
                filter = "id";
                key = "labore";
                oauthToken = "labore";
                orderBy = "suscipit";
                pageSize = 618016L;
                pageToken = "nobis";
                prettyPrint = false;
                quotaUser = "eum";
                uploadType = "vero";
                uploadProtocol = "aspernatur";
            }};            

            VmmigrationProjectsLocationsSourcesDatacenterConnectorsListResponse res = sdk.projects.vmmigrationProjectsLocationsSourcesDatacenterConnectorsList(req, new VmmigrationProjectsLocationsSourcesDatacenterConnectorsListSecurity("architecto", "magnam") {{
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

            VmmigrationProjectsLocationsSourcesDatacenterConnectorsUpgradeApplianceRequest req = new VmmigrationProjectsLocationsSourcesDatacenterConnectorsUpgradeApplianceRequest("et") {{
                dollarXgafv = XgafvEnum.TWO;
                upgradeApplianceRequest = new UpgradeApplianceRequest() {{
                    requestId = "ullam";
                }};;
                accessToken = "provident";
                alt = AltEnum.MEDIA;
                callback = "sint";
                fields = "accusantium";
                key = "mollitia";
                oauthToken = "reiciendis";
                prettyPrint = false;
                quotaUser = "mollitia";
                uploadType = "ad";
                uploadProtocol = "eum";
            }};            

            VmmigrationProjectsLocationsSourcesDatacenterConnectorsUpgradeApplianceResponse res = sdk.projects.vmmigrationProjectsLocationsSourcesDatacenterConnectorsUpgradeAppliance(req, new VmmigrationProjectsLocationsSourcesDatacenterConnectorsUpgradeApplianceSecurity("dolor", "necessitatibus") {{
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

            VmmigrationProjectsLocationsSourcesFetchInventoryRequest req = new VmmigrationProjectsLocationsSourcesFetchInventoryRequest("odit") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "quasi";
                alt = AltEnum.MEDIA;
                callback = "doloribus";
                fields = "debitis";
                forceRefresh = false;
                key = "eius";
                oauthToken = "maxime";
                pageSize = 537023L;
                pageToken = "facilis";
                prettyPrint = false;
                quotaUser = "in";
                uploadType = "architecto";
                uploadProtocol = "architecto";
            }};            

            VmmigrationProjectsLocationsSourcesFetchInventoryResponse res = sdk.projects.vmmigrationProjectsLocationsSourcesFetchInventory(req, new VmmigrationProjectsLocationsSourcesFetchInventorySecurity("repudiandae", "ullam") {{
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

            VmmigrationProjectsLocationsSourcesListRequest req = new VmmigrationProjectsLocationsSourcesListRequest("expedita") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "repellat";
                alt = AltEnum.PROTO;
                callback = "sed";
                fields = "saepe";
                filter = "pariatur";
                key = "accusantium";
                oauthToken = "consequuntur";
                orderBy = "praesentium";
                pageSize = 615560L;
                pageToken = "magni";
                prettyPrint = false;
                quotaUser = "sunt";
                uploadType = "quo";
                uploadProtocol = "illum";
            }};            

            VmmigrationProjectsLocationsSourcesListResponse res = sdk.projects.vmmigrationProjectsLocationsSourcesList(req, new VmmigrationProjectsLocationsSourcesListSecurity("pariatur", "maxime") {{
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
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            VmmigrationProjectsLocationsSourcesMigratingVmsCloneJobsCreateRequest req = new VmmigrationProjectsLocationsSourcesMigratingVmsCloneJobsCreateRequest("ea") {{
                dollarXgafv = XgafvEnum.TWO;
                cloneJobInput = new CloneJobInput() {{
                    computeEngineTargetDetails = new ComputeEngineTargetDetails() {{
                        additionalLicenses = new String[]{{
                            add("ea"),
                        }};
                        appliedLicense = new AppliedLicense() {{
                            osLicense = "accusantium";
                            type = AppliedLicenseTypeEnum.TYPE_UNSPECIFIED;
                        }};;
                        bootOption = ComputeEngineTargetDetailsBootOptionEnum.COMPUTE_ENGINE_BOOT_OPTION_BIOS;
                        computeScheduling = new ComputeScheduling() {{
                            minNodeCpus = 697429;
                            nodeAffinities = new org.openapis.openapi.models.shared.SchedulingNodeAffinity[]{{
                                add(new SchedulingNodeAffinity() {{
                                    key = "voluptate";
                                    operator = SchedulingNodeAffinityOperatorEnum.IN;
                                    values = new String[]{{
                                        add("eaque"),
                                        add("pariatur"),
                                        add("nemo"),
                                    }};
                                }}),
                                add(new SchedulingNodeAffinity() {{
                                    key = "voluptatibus";
                                    operator = SchedulingNodeAffinityOperatorEnum.OPERATOR_UNSPECIFIED;
                                    values = new String[]{{
                                        add("amet"),
                                        add("aut"),
                                        add("cumque"),
                                        add("corporis"),
                                    }};
                                }}),
                            }};
                            onHostMaintenance = ComputeSchedulingOnHostMaintenanceEnum.MIGRATE;
                            restartType = ComputeSchedulingRestartTypeEnum.NO_AUTOMATIC_RESTART;
                        }};;
                        diskType = ComputeEngineTargetDetailsDiskTypeEnum.COMPUTE_ENGINE_DISK_TYPE_SSD;
                        hostname = "deafening-feel.name";
                        labels = new java.util.HashMap<String, String>() {{
                            put("eaque", "quis");
                            put("nesciunt", "eos");
                        }};
                        licenseType = ComputeEngineTargetDetailsLicenseTypeEnum.COMPUTE_ENGINE_LICENSE_TYPE_DEFAULT;
                        machineType = "dolores";
                        machineTypeSeries = "minus";
                        metadata = new java.util.HashMap<String, String>() {{
                            put("dolor", "vero");
                            put("nostrum", "hic");
                        }};
                        networkInterfaces = new org.openapis.openapi.models.shared.NetworkInterface[]{{
                            add(new NetworkInterface() {{
                                externalIp = "omnis";
                                internalIp = "facilis";
                                network = "perspiciatis";
                                subnetwork = "voluptatem";
                            }}),
                            add(new NetworkInterface() {{
                                externalIp = "porro";
                                internalIp = "consequuntur";
                                network = "blanditiis";
                                subnetwork = "error";
                            }}),
                            add(new NetworkInterface() {{
                                externalIp = "eaque";
                                internalIp = "occaecati";
                                network = "rerum";
                                subnetwork = "adipisci";
                            }}),
                            add(new NetworkInterface() {{
                                externalIp = "asperiores";
                                internalIp = "earum";
                                network = "modi";
                                subnetwork = "iste";
                            }}),
                        }};
                        networkTags = new String[]{{
                            add("deleniti"),
                            add("pariatur"),
                            add("provident"),
                        }};
                        project = "nobis";
                        secureBoot = false;
                        serviceAccount = "libero";
                        vmName = "delectus";
                        zone = "quaerat";
                    }};;
                    error = new Status() {{
                        code = 554242;
                        details = new java.util.HashMap<String, Object>[]{{
                            add(new java.util.HashMap<String, Object>() {{
                                put("dolorem", "dolor");
                            }}),
                            add(new java.util.HashMap<String, Object>() {{
                                put("ipsum", "hic");
                            }}),
                        }};
                        message = "excepturi";
                    }};;
                }};;
                accessToken = "cum";
                alt = AltEnum.MEDIA;
                callback = "dignissimos";
                cloneJobId = "reiciendis";
                fields = "amet";
                key = "dolorum";
                oauthToken = "numquam";
                prettyPrint = false;
                quotaUser = "veritatis";
                requestId = "ipsa";
                uploadType = "ipsa";
                uploadProtocol = "iure";
            }};            

            VmmigrationProjectsLocationsSourcesMigratingVmsCloneJobsCreateResponse res = sdk.projects.vmmigrationProjectsLocationsSourcesMigratingVmsCloneJobsCreate(req, new VmmigrationProjectsLocationsSourcesMigratingVmsCloneJobsCreateSecurity("odio", "quaerat") {{
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

            VmmigrationProjectsLocationsSourcesMigratingVmsCloneJobsListRequest req = new VmmigrationProjectsLocationsSourcesMigratingVmsCloneJobsListRequest("accusamus") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "voluptatibus";
                alt = AltEnum.MEDIA;
                callback = "natus";
                fields = "eos";
                filter = "atque";
                key = "sit";
                oauthToken = "fugiat";
                orderBy = "ab";
                pageSize = 743835L;
                pageToken = "dolorum";
                prettyPrint = false;
                quotaUser = "iusto";
                uploadType = "voluptate";
                uploadProtocol = "dolorum";
            }};            

            VmmigrationProjectsLocationsSourcesMigratingVmsCloneJobsListResponse res = sdk.projects.vmmigrationProjectsLocationsSourcesMigratingVmsCloneJobsList(req, new VmmigrationProjectsLocationsSourcesMigratingVmsCloneJobsListSecurity("deleniti", "omnis") {{
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
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            VmmigrationProjectsLocationsSourcesMigratingVmsCreateRequest req = new VmmigrationProjectsLocationsSourcesMigratingVmsCreateRequest("necessitatibus") {{
                dollarXgafv = XgafvEnum.TWO;
                migratingVmInput = new MigratingVmInput() {{
                    awsSourceVmDetails = new AwsSourceVmDetails() {{
                        committedStorageBytes = "asperiores";
                        firmware = AwsSourceVmDetailsFirmwareEnum.EFI;
                    }};;
                    computeEngineTargetDefaults = new ComputeEngineTargetDefaultsInput() {{
                        additionalLicenses = new String[]{{
                            add("voluptate"),
                        }};
                        appliedLicense = new AppliedLicense() {{
                            osLicense = "id";
                            type = AppliedLicenseTypeEnum.BYOL;
                        }};;
                        computeScheduling = new ComputeScheduling() {{
                            minNodeCpus = 263322;
                            nodeAffinities = new org.openapis.openapi.models.shared.SchedulingNodeAffinity[]{{
                                add(new SchedulingNodeAffinity() {{
                                    key = "perferendis";
                                    operator = SchedulingNodeAffinityOperatorEnum.OPERATOR_UNSPECIFIED;
                                    values = new String[]{{
                                        add("accusamus"),
                                        add("ad"),
                                        add("saepe"),
                                        add("suscipit"),
                                    }};
                                }}),
                            }};
                            onHostMaintenance = ComputeSchedulingOnHostMaintenanceEnum.TERMINATE;
                            restartType = ComputeSchedulingRestartTypeEnum.AUTOMATIC_RESTART;
                        }};;
                        diskType = ComputeEngineTargetDefaultsDiskTypeEnum.COMPUTE_ENGINE_DISK_TYPE_STANDARD;
                        hostname = "sweltering-load.name";
                        labels = new java.util.HashMap<String, String>() {{
                            put("at", "quaerat");
                        }};
                        licenseType = ComputeEngineTargetDefaultsLicenseTypeEnum.COMPUTE_ENGINE_LICENSE_TYPE_DEFAULT;
                        machineType = "vel";
                        machineTypeSeries = "quod";
                        metadata = new java.util.HashMap<String, String>() {{
                            put("qui", "dolorum");
                            put("a", "esse");
                            put("harum", "iusto");
                            put("ipsum", "quisquam");
                        }};
                        networkInterfaces = new org.openapis.openapi.models.shared.NetworkInterface[]{{
                            add(new NetworkInterface() {{
                                externalIp = "amet";
                                internalIp = "tempore";
                                network = "accusamus";
                                subnetwork = "numquam";
                            }}),
                            add(new NetworkInterface() {{
                                externalIp = "enim";
                                internalIp = "dolorem";
                                network = "sapiente";
                                subnetwork = "totam";
                            }}),
                            add(new NetworkInterface() {{
                                externalIp = "nihil";
                                internalIp = "sit";
                                network = "expedita";
                                subnetwork = "neque";
                            }}),
                            add(new NetworkInterface() {{
                                externalIp = "sed";
                                internalIp = "vel";
                                network = "libero";
                                subnetwork = "voluptas";
                            }}),
                        }};
                        networkTags = new String[]{{
                            add("quam"),
                            add("ipsum"),
                            add("incidunt"),
                        }};
                        secureBoot = false;
                        serviceAccount = "qui";
                        targetProject = "cupiditate";
                        vmName = "maxime";
                        zone = "pariatur";
                    }};;
                    currentSyncInfo = new ReplicationCycleInput() {{
                        cycleNumber = 747080;
                        endTime = "dicta";
                        error = new Status() {{
                            code = 674848;
                            details = new java.util.HashMap<String, Object>[]{{
                                add(new java.util.HashMap<String, Object>() {{
                                    put("aspernatur", "dolores");
                                    put("distinctio", "facilis");
                                }}),
                                add(new java.util.HashMap<String, Object>() {{
                                    put("quam", "molestias");
                                    put("temporibus", "qui");
                                }}),
                                add(new java.util.HashMap<String, Object>() {{
                                    put("fugit", "magni");
                                }}),
                            }};
                            message = "odio";
                        }};;
                        name = "Marion Reichert DDS";
                        progressPercent = 746994;
                        startTime = "nobis";
                        state = ReplicationCycleStateEnum.STATE_UNSPECIFIED;
                        steps = new org.openapis.openapi.models.shared.CycleStep[]{{
                            add(new CycleStep() {{
                                endTime = "ipsum";
                                initializingReplication = new java.util.HashMap<String, Object>() {{
                                    put("nobis", "quos");
                                }};
                                postProcessing = new java.util.HashMap<String, Object>() {{
                                    put("cupiditate", "aperiam");
                                    put("delectus", "dolorem");
                                    put("dolore", "labore");
                                }};
                                replicating = new ReplicatingStep() {{
                                    lastThirtyMinutesAverageBytesPerSecond = "adipisci";
                                    lastTwoMinutesAverageBytesPerSecond = "dolorum";
                                    replicatedBytes = "architecto";
                                    totalBytes = "quae";
                                }};
                                startTime = "aut";
                            }}),
                            add(new CycleStep() {{
                                endTime = "quas";
                                initializingReplication = new java.util.HashMap<String, Object>() {{
                                    put("consequatur", "est");
                                    put("repellendus", "porro");
                                    put("doloribus", "ut");
                                    put("facilis", "cupiditate");
                                }};
                                postProcessing = new java.util.HashMap<String, Object>() {{
                                    put("quae", "laudantium");
                                }};
                                replicating = new ReplicatingStep() {{
                                    lastThirtyMinutesAverageBytesPerSecond = "odio";
                                    lastTwoMinutesAverageBytesPerSecond = "occaecati";
                                    replicatedBytes = "voluptatibus";
                                    totalBytes = "quisquam";
                                }};
                                startTime = "vero";
                            }}),
                            add(new CycleStep() {{
                                endTime = "omnis";
                                initializingReplication = new java.util.HashMap<String, Object>() {{
                                    put("ipsum", "delectus");
                                    put("voluptate", "consectetur");
                                }};
                                postProcessing = new java.util.HashMap<String, Object>() {{
                                    put("tenetur", "dignissimos");
                                    put("hic", "distinctio");
                                    put("quod", "odio");
                                    put("similique", "facilis");
                                }};
                                replicating = new ReplicatingStep() {{
                                    lastThirtyMinutesAverageBytesPerSecond = "vero";
                                    lastTwoMinutesAverageBytesPerSecond = "ducimus";
                                    replicatedBytes = "dolore";
                                    totalBytes = "quibusdam";
                                }};
                                startTime = "illum";
                            }}),
                            add(new CycleStep() {{
                                endTime = "sequi";
                                initializingReplication = new java.util.HashMap<String, Object>() {{
                                    put("impedit", "aut");
                                    put("voluptatibus", "exercitationem");
                                    put("nulla", "fugit");
                                }};
                                postProcessing = new java.util.HashMap<String, Object>() {{
                                    put("maiores", "doloribus");
                                    put("iusto", "eligendi");
                                    put("ducimus", "alias");
                                    put("officia", "tempora");
                                }};
                                replicating = new ReplicatingStep() {{
                                    lastThirtyMinutesAverageBytesPerSecond = "ipsam";
                                    lastTwoMinutesAverageBytesPerSecond = "ea";
                                    replicatedBytes = "aspernatur";
                                    totalBytes = "vel";
                                }};
                                startTime = "possimus";
                            }}),
                        }};
                        totalPauseDuration = "magnam";
                    }};;
                    description = "ratione";
                    displayName = "ex";
                    error = new Status() {{
                        code = 511319;
                        details = new java.util.HashMap<String, Object>[]{{
                            add(new java.util.HashMap<String, Object>() {{
                                put("maiores", "quasi");
                            }}),
                        }};
                        message = "ex";
                    }};;
                    labels = new java.util.HashMap<String, String>() {{
                        put("excepturi", "voluptatibus");
                        put("nostrum", "sapiente");
                        put("quisquam", "saepe");
                        put("ea", "impedit");
                    }};
                    lastReplicationCycle = new ReplicationCycleInput() {{
                        cycleNumber = 359271;
                        endTime = "veniam";
                        error = new Status() {{
                            code = 399499;
                            details = new java.util.HashMap<String, Object>[]{{
                                add(new java.util.HashMap<String, Object>() {{
                                    put("ea", "quo");
                                    put("consectetur", "recusandae");
                                }}),
                            }};
                            message = "aspernatur";
                        }};;
                        name = "Shirley Wilderman Jr.";
                        progressPercent = 533466;
                        startTime = "impedit";
                        state = ReplicationCycleStateEnum.RUNNING;
                        steps = new org.openapis.openapi.models.shared.CycleStep[]{{
                            add(new CycleStep() {{
                                endTime = "accusamus";
                                initializingReplication = new java.util.HashMap<String, Object>() {{
                                    put("non", "et");
                                }};
                                postProcessing = new java.util.HashMap<String, Object>() {{
                                    put("laborum", "placeat");
                                    put("velit", "eum");
                                    put("autem", "nobis");
                                }};
                                replicating = new ReplicatingStep() {{
                                    lastThirtyMinutesAverageBytesPerSecond = "quas";
                                    lastTwoMinutesAverageBytesPerSecond = "assumenda";
                                    replicatedBytes = "nulla";
                                    totalBytes = "voluptas";
                                }};
                                startTime = "libero";
                            }}),
                        }};
                        totalPauseDuration = "quasi";
                    }};;
                    lastSync = new ReplicationSync() {{
                        lastSyncTime = "tempora";
                    }};;
                    policy = new SchedulePolicy() {{
                        idleDuration = "numquam";
                        skipOsAdaptation = false;
                    }};;
                    sourceVmId = "explicabo";
                }};;
                accessToken = "provident";
                alt = AltEnum.JSON;
                callback = "molestiae";
                fields = "magnam";
                key = "odio";
                migratingVmId = "eius";
                oauthToken = "esse";
                prettyPrint = false;
                quotaUser = "esse";
                requestId = "rem";
                uploadType = "fuga";
                uploadProtocol = "reprehenderit";
            }};            

            VmmigrationProjectsLocationsSourcesMigratingVmsCreateResponse res = sdk.projects.vmmigrationProjectsLocationsSourcesMigratingVmsCreate(req, new VmmigrationProjectsLocationsSourcesMigratingVmsCreateSecurity("quidem", "fugiat") {{
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

            VmmigrationProjectsLocationsSourcesMigratingVmsCutoverJobsCancelRequest req = new VmmigrationProjectsLocationsSourcesMigratingVmsCutoverJobsCancelRequest("ut") {{
                dollarXgafv = XgafvEnum.ONE;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("assumenda", "eos");
                    put("praesentium", "quisquam");
                }};
                accessToken = "veritatis";
                alt = AltEnum.JSON;
                callback = "id";
                fields = "quidem";
                key = "neque";
                oauthToken = "quo";
                prettyPrint = false;
                quotaUser = "illum";
                uploadType = "quo";
                uploadProtocol = "fuga";
            }};            

            VmmigrationProjectsLocationsSourcesMigratingVmsCutoverJobsCancelResponse res = sdk.projects.vmmigrationProjectsLocationsSourcesMigratingVmsCutoverJobsCancel(req, new VmmigrationProjectsLocationsSourcesMigratingVmsCutoverJobsCancelSecurity("eius", "eos") {{
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
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            VmmigrationProjectsLocationsSourcesMigratingVmsCutoverJobsCreateRequest req = new VmmigrationProjectsLocationsSourcesMigratingVmsCutoverJobsCreateRequest("voluptas") {{
                dollarXgafv = XgafvEnum.ONE;
                cutoverJobInput = new CutoverJobInput() {{
                    computeEngineTargetDetails = new ComputeEngineTargetDetails() {{
                        additionalLicenses = new String[]{{
                            add("consequatur"),
                            add("tempora"),
                            add("debitis"),
                        }};
                        appliedLicense = new AppliedLicense() {{
                            osLicense = "ipsam";
                            type = AppliedLicenseTypeEnum.TYPE_UNSPECIFIED;
                        }};;
                        bootOption = ComputeEngineTargetDetailsBootOptionEnum.COMPUTE_ENGINE_BOOT_OPTION_UNSPECIFIED;
                        computeScheduling = new ComputeScheduling() {{
                            minNodeCpus = 779192;
                            nodeAffinities = new org.openapis.openapi.models.shared.SchedulingNodeAffinity[]{{
                                add(new SchedulingNodeAffinity() {{
                                    key = "recusandae";
                                    operator = SchedulingNodeAffinityOperatorEnum.OPERATOR_UNSPECIFIED;
                                    values = new String[]{{
                                        add("quod"),
                                        add("dignissimos"),
                                        add("inventore"),
                                    }};
                                }}),
                                add(new SchedulingNodeAffinity() {{
                                    key = "nihil";
                                    operator = SchedulingNodeAffinityOperatorEnum.IN;
                                    values = new String[]{{
                                        add("aliquam"),
                                        add("odio"),
                                        add("occaecati"),
                                        add("commodi"),
                                    }};
                                }}),
                            }};
                            onHostMaintenance = ComputeSchedulingOnHostMaintenanceEnum.MIGRATE;
                            restartType = ComputeSchedulingRestartTypeEnum.RESTART_TYPE_UNSPECIFIED;
                        }};;
                        diskType = ComputeEngineTargetDetailsDiskTypeEnum.COMPUTE_ENGINE_DISK_TYPE_SSD;
                        hostname = "lanky-apparel.net";
                        labels = new java.util.HashMap<String, String>() {{
                            put("quas", "praesentium");
                            put("consequuntur", "deleniti");
                        }};
                        licenseType = ComputeEngineTargetDetailsLicenseTypeEnum.COMPUTE_ENGINE_LICENSE_TYPE_DEFAULT;
                        machineType = "fuga";
                        machineTypeSeries = "mollitia";
                        metadata = new java.util.HashMap<String, String>() {{
                            put("atque", "explicabo");
                            put("minima", "nisi");
                        }};
                        networkInterfaces = new org.openapis.openapi.models.shared.NetworkInterface[]{{
                            add(new NetworkInterface() {{
                                externalIp = "sapiente";
                                internalIp = "consequuntur";
                                network = "ratione";
                                subnetwork = "explicabo";
                            }}),
                        }};
                        networkTags = new String[]{{
                            add("occaecati"),
                            add("atque"),
                            add("et"),
                            add("esse"),
                        }};
                        project = "eveniet";
                        secureBoot = false;
                        serviceAccount = "accusamus";
                        vmName = "veritatis";
                        zone = "esse";
                    }};;
                    error = new Status() {{
                        code = 800379;
                        details = new java.util.HashMap<String, Object>[]{{
                            add(new java.util.HashMap<String, Object>() {{
                                put("aliquid", "quasi");
                                put("saepe", "vel");
                                put("harum", "molestiae");
                                put("rerum", "occaecati");
                            }}),
                            add(new java.util.HashMap<String, Object>() {{
                                put("distinctio", "eligendi");
                                put("sit", "culpa");
                            }}),
                            add(new java.util.HashMap<String, Object>() {{
                                put("adipisci", "cumque");
                                put("consequuntur", "consequatur");
                                put("minus", "quaerat");
                            }}),
                        }};
                        message = "sapiente";
                    }};;
                }};;
                accessToken = "consectetur";
                alt = AltEnum.MEDIA;
                callback = "blanditiis";
                cutoverJobId = "provident";
                fields = "a";
                key = "nulla";
                oauthToken = "quas";
                prettyPrint = false;
                quotaUser = "esse";
                requestId = "quasi";
                uploadType = "a";
                uploadProtocol = "error";
            }};            

            VmmigrationProjectsLocationsSourcesMigratingVmsCutoverJobsCreateResponse res = sdk.projects.vmmigrationProjectsLocationsSourcesMigratingVmsCutoverJobsCreate(req, new VmmigrationProjectsLocationsSourcesMigratingVmsCutoverJobsCreateSecurity("sint", "pariatur") {{
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

            VmmigrationProjectsLocationsSourcesMigratingVmsCutoverJobsListRequest req = new VmmigrationProjectsLocationsSourcesMigratingVmsCutoverJobsListRequest("possimus") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "eveniet";
                alt = AltEnum.PROTO;
                callback = "facere";
                fields = "veritatis";
                filter = "consequuntur";
                key = "quasi";
                oauthToken = "similique";
                orderBy = "culpa";
                pageSize = 398434L;
                pageToken = "tenetur";
                prettyPrint = false;
                quotaUser = "quae";
                uploadType = "earum";
                uploadProtocol = "vel";
            }};            

            VmmigrationProjectsLocationsSourcesMigratingVmsCutoverJobsListResponse res = sdk.projects.vmmigrationProjectsLocationsSourcesMigratingVmsCutoverJobsList(req, new VmmigrationProjectsLocationsSourcesMigratingVmsCutoverJobsListSecurity("in", "eius") {{
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

            VmmigrationProjectsLocationsSourcesMigratingVmsFinalizeMigrationRequest req = new VmmigrationProjectsLocationsSourcesMigratingVmsFinalizeMigrationRequest("libero") {{
                dollarXgafv = XgafvEnum.TWO;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("accusantium", "aliquam");
                    put("sapiente", "dicta");
                    put("ullam", "reprehenderit");
                }};
                accessToken = "ullam";
                alt = AltEnum.MEDIA;
                callback = "aut";
                fields = "voluptatum";
                key = "qui";
                oauthToken = "quibusdam";
                prettyPrint = false;
                quotaUser = "ex";
                uploadType = "deleniti";
                uploadProtocol = "itaque";
            }};            

            VmmigrationProjectsLocationsSourcesMigratingVmsFinalizeMigrationResponse res = sdk.projects.vmmigrationProjectsLocationsSourcesMigratingVmsFinalizeMigration(req, new VmmigrationProjectsLocationsSourcesMigratingVmsFinalizeMigrationSecurity("dolorum", "architecto") {{
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

            VmmigrationProjectsLocationsSourcesMigratingVmsListRequest req = new VmmigrationProjectsLocationsSourcesMigratingVmsListRequest("omnis") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "quasi";
                alt = AltEnum.PROTO;
                callback = "et";
                fields = "voluptate";
                filter = "ipsa";
                key = "minima";
                oauthToken = "veritatis";
                orderBy = "consectetur";
                pageSize = 237173L;
                pageToken = "iste";
                prettyPrint = false;
                quotaUser = "temporibus";
                uploadType = "accusantium";
                uploadProtocol = "rem";
                view = VmmigrationProjectsLocationsSourcesMigratingVmsListViewEnum.MIGRATING_VM_VIEW_UNSPECIFIED;
            }};            

            VmmigrationProjectsLocationsSourcesMigratingVmsListResponse res = sdk.projects.vmmigrationProjectsLocationsSourcesMigratingVmsList(req, new VmmigrationProjectsLocationsSourcesMigratingVmsListSecurity("laudantium", "eum") {{
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

            VmmigrationProjectsLocationsSourcesMigratingVmsPauseMigrationRequest req = new VmmigrationProjectsLocationsSourcesMigratingVmsPauseMigrationRequest("mollitia") {{
                dollarXgafv = XgafvEnum.ONE;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("non", "voluptatem");
                    put("dolor", "occaecati");
                    put("numquam", "impedit");
                }};
                accessToken = "explicabo";
                alt = AltEnum.MEDIA;
                callback = "aut";
                fields = "dignissimos";
                key = "dicta";
                oauthToken = "maiores";
                prettyPrint = false;
                quotaUser = "natus";
                uploadType = "velit";
                uploadProtocol = "voluptatibus";
            }};            

            VmmigrationProjectsLocationsSourcesMigratingVmsPauseMigrationResponse res = sdk.projects.vmmigrationProjectsLocationsSourcesMigratingVmsPauseMigration(req, new VmmigrationProjectsLocationsSourcesMigratingVmsPauseMigrationSecurity("voluptas", "asperiores") {{
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

            VmmigrationProjectsLocationsSourcesMigratingVmsReplicationCyclesListRequest req = new VmmigrationProjectsLocationsSourcesMigratingVmsReplicationCyclesListRequest("aperiam") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "quaerat";
                alt = AltEnum.JSON;
                callback = "repellendus";
                fields = "officia";
                filter = "maxime";
                key = "dignissimos";
                oauthToken = "officia";
                orderBy = "asperiores";
                pageSize = 368102L;
                pageToken = "quae";
                prettyPrint = false;
                quotaUser = "quaerat";
                uploadType = "porro";
                uploadProtocol = "quod";
            }};            

            VmmigrationProjectsLocationsSourcesMigratingVmsReplicationCyclesListResponse res = sdk.projects.vmmigrationProjectsLocationsSourcesMigratingVmsReplicationCyclesList(req, new VmmigrationProjectsLocationsSourcesMigratingVmsReplicationCyclesListSecurity("labore", "ab") {{
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

            VmmigrationProjectsLocationsSourcesMigratingVmsResumeMigrationRequest req = new VmmigrationProjectsLocationsSourcesMigratingVmsResumeMigrationRequest("adipisci") {{
                dollarXgafv = XgafvEnum.TWO;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("suscipit", "velit");
                    put("culpa", "est");
                    put("recusandae", "totam");
                }};
                accessToken = "fugiat";
                alt = AltEnum.MEDIA;
                callback = "ducimus";
                fields = "quos";
                key = "vel";
                oauthToken = "labore";
                prettyPrint = false;
                quotaUser = "possimus";
                uploadType = "facilis";
                uploadProtocol = "cum";
            }};            

            VmmigrationProjectsLocationsSourcesMigratingVmsResumeMigrationResponse res = sdk.projects.vmmigrationProjectsLocationsSourcesMigratingVmsResumeMigration(req, new VmmigrationProjectsLocationsSourcesMigratingVmsResumeMigrationSecurity("commodi", "in") {{
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

            VmmigrationProjectsLocationsSourcesMigratingVmsStartMigrationRequest req = new VmmigrationProjectsLocationsSourcesMigratingVmsStartMigrationRequest("corporis") {{
                dollarXgafv = XgafvEnum.TWO;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("nemo", "recusandae");
                    put("aliquid", "aperiam");
                    put("cum", "consectetur");
                    put("in", "exercitationem");
                }};
                accessToken = "earum";
                alt = AltEnum.PROTO;
                callback = "numquam";
                fields = "doloribus";
                key = "suscipit";
                oauthToken = "reiciendis";
                prettyPrint = false;
                quotaUser = "quidem";
                uploadType = "saepe";
                uploadProtocol = "necessitatibus";
            }};            

            VmmigrationProjectsLocationsSourcesMigratingVmsStartMigrationResponse res = sdk.projects.vmmigrationProjectsLocationsSourcesMigratingVmsStartMigration(req, new VmmigrationProjectsLocationsSourcesMigratingVmsStartMigrationSecurity("dolore", "sunt") {{
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

            VmmigrationProjectsLocationsSourcesUtilizationReportsCreateRequest req = new VmmigrationProjectsLocationsSourcesUtilizationReportsCreateRequest("asperiores") {{
                dollarXgafv = XgafvEnum.ONE;
                utilizationReportInput = new UtilizationReportInput() {{
                    displayName = "non";
                    error = new Status() {{
                        code = 228263;
                        details = new java.util.HashMap<String, Object>[]{{
                            add(new java.util.HashMap<String, Object>() {{
                                put("a", "debitis");
                                put("consectetur", "corporis");
                            }}),
                        }};
                        message = "harum";
                    }};;
                    timeFrame = UtilizationReportTimeFrameEnum.WEEK;
                    vms = new org.openapis.openapi.models.shared.VmUtilizationInfoInput[]{{
                        add(new VmUtilizationInfoInput() {{
                            utilization = new VmUtilizationMetrics() {{
                                cpuAveragePercent = 916727;
                                cpuMaxPercent = 730709;
                                diskIoRateAverageKbps = "vitae";
                                diskIoRateMaxKbps = "accusamus";
                                memoryAveragePercent = 631126;
                                memoryMaxPercent = 272437;
                                networkThroughputAverageKbps = "aspernatur";
                                networkThroughputMaxKbps = "voluptas";
                            }};
                            vmId = "voluptas";
                            vmwareVmDetails = new VmwareVmDetailsInput() {{
                                committedStorageMb = "voluptas";
                                cpuCount = 324405;
                                datacenterDescription = "nobis";
                                datacenterId = "dolorum";
                                diskCount = 237807;
                                displayName = "minus";
                                guestDescription = "dolores";
                                memoryMb = 503934;
                                powerState = VmwareVmDetailsPowerStateEnum.ON;
                                uuid = "44ed53b8-8f3a-48d8-b5c0-b2f2fb7b194a";
                                vmId = "sed";
                            }};
                        }}),
                    }};
                }};;
                accessToken = "in";
                alt = AltEnum.MEDIA;
                callback = "quidem";
                fields = "explicabo";
                key = "voluptas";
                oauthToken = "unde";
                prettyPrint = false;
                quotaUser = "architecto";
                requestId = "suscipit";
                uploadType = "sapiente";
                uploadProtocol = "debitis";
                utilizationReportId = "illo";
            }};            

            VmmigrationProjectsLocationsSourcesUtilizationReportsCreateResponse res = sdk.projects.vmmigrationProjectsLocationsSourcesUtilizationReportsCreate(req, new VmmigrationProjectsLocationsSourcesUtilizationReportsCreateSecurity("reiciendis", "perferendis") {{
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

            VmmigrationProjectsLocationsSourcesUtilizationReportsListRequest req = new VmmigrationProjectsLocationsSourcesUtilizationReportsListRequest("corrupti") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "incidunt";
                alt = AltEnum.JSON;
                callback = "provident";
                fields = "eius";
                filter = "necessitatibus";
                key = "ipsum";
                oauthToken = "ea";
                orderBy = "occaecati";
                pageSize = 552078L;
                pageToken = "voluptatibus";
                prettyPrint = false;
                quotaUser = "tempora";
                uploadType = "tempora";
                uploadProtocol = "voluptate";
                view = VmmigrationProjectsLocationsSourcesUtilizationReportsListViewEnum.FULL;
            }};            

            VmmigrationProjectsLocationsSourcesUtilizationReportsListResponse res = sdk.projects.vmmigrationProjectsLocationsSourcesUtilizationReportsList(req, new VmmigrationProjectsLocationsSourcesUtilizationReportsListSecurity("ex", "sit") {{
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

            VmmigrationProjectsLocationsTargetProjectsCreateRequest req = new VmmigrationProjectsLocationsTargetProjectsCreateRequest("non") {{
                dollarXgafv = XgafvEnum.TWO;
                targetProjectInput = new TargetProjectInput() {{
                    description = "praesentium";
                    project = "facilis";
                }};;
                accessToken = "quaerat";
                alt = AltEnum.JSON;
                callback = "ipsam";
                fields = "debitis";
                key = "rem";
                oauthToken = "sit";
                prettyPrint = false;
                quotaUser = "nobis";
                requestId = "error";
                targetProjectId = "veniam";
                uploadType = "minima";
                uploadProtocol = "recusandae";
            }};            

            VmmigrationProjectsLocationsTargetProjectsCreateResponse res = sdk.projects.vmmigrationProjectsLocationsTargetProjectsCreate(req, new VmmigrationProjectsLocationsTargetProjectsCreateSecurity("reiciendis", "nulla") {{
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

            VmmigrationProjectsLocationsTargetProjectsDeleteRequest req = new VmmigrationProjectsLocationsTargetProjectsDeleteRequest("magni") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "saepe";
                alt = AltEnum.JSON;
                callback = "veniam";
                fields = "in";
                key = "officiis";
                oauthToken = "beatae";
                prettyPrint = false;
                quotaUser = "laudantium";
                requestId = "exercitationem";
                uploadType = "praesentium";
                uploadProtocol = "cum";
            }};            

            VmmigrationProjectsLocationsTargetProjectsDeleteResponse res = sdk.projects.vmmigrationProjectsLocationsTargetProjectsDelete(req, new VmmigrationProjectsLocationsTargetProjectsDeleteSecurity("laboriosam", "dolorum") {{
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

            VmmigrationProjectsLocationsTargetProjectsGetRequest req = new VmmigrationProjectsLocationsTargetProjectsGetRequest("voluptatum") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "hic";
                alt = AltEnum.PROTO;
                callback = "debitis";
                fields = "neque";
                key = "dolorum";
                oauthToken = "nostrum";
                prettyPrint = false;
                quotaUser = "officia";
                uploadType = "dolorum";
                uploadProtocol = "corrupti";
                view = VmmigrationProjectsLocationsTargetProjectsGetViewEnum.FULL;
            }};            

            VmmigrationProjectsLocationsTargetProjectsGetResponse res = sdk.projects.vmmigrationProjectsLocationsTargetProjectsGet(req, new VmmigrationProjectsLocationsTargetProjectsGetSecurity("tempora", "atque") {{
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

            VmmigrationProjectsLocationsTargetProjectsListRequest req = new VmmigrationProjectsLocationsTargetProjectsListRequest("fugit") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "fugiat";
                alt = AltEnum.JSON;
                callback = "culpa";
                fields = "expedita";
                filter = "magnam";
                key = "consequatur";
                oauthToken = "esse";
                orderBy = "ipsam";
                pageSize = 24527L;
                pageToken = "voluptatum";
                prettyPrint = false;
                quotaUser = "quas";
                uploadType = "repudiandae";
                uploadProtocol = "corporis";
            }};            

            VmmigrationProjectsLocationsTargetProjectsListResponse res = sdk.projects.vmmigrationProjectsLocationsTargetProjectsList(req, new VmmigrationProjectsLocationsTargetProjectsListSecurity("et", "blanditiis") {{
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

            VmmigrationProjectsLocationsTargetProjectsPatchRequest req = new VmmigrationProjectsLocationsTargetProjectsPatchRequest("ex") {{
                dollarXgafv = XgafvEnum.ONE;
                targetProjectInput = new TargetProjectInput() {{
                    description = "sit";
                    project = "vel";
                }};;
                accessToken = "nostrum";
                alt = AltEnum.PROTO;
                callback = "error";
                fields = "consequatur";
                key = "incidunt";
                oauthToken = "reiciendis";
                prettyPrint = false;
                quotaUser = "dolorem";
                requestId = "harum";
                updateMask = "dicta";
                uploadType = "architecto";
                uploadProtocol = "occaecati";
            }};            

            VmmigrationProjectsLocationsTargetProjectsPatchResponse res = sdk.projects.vmmigrationProjectsLocationsTargetProjectsPatch(req, new VmmigrationProjectsLocationsTargetProjectsPatchSecurity("labore", "quidem") {{
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
