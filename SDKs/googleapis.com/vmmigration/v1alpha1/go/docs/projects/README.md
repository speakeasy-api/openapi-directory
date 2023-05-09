# Projects

### Available Operations

* [VmmigrationProjectsLocationsGroupsAddGroupMigration](#vmmigrationprojectslocationsgroupsaddgroupmigration) - Adds a MigratingVm to a Group.
* [VmmigrationProjectsLocationsGroupsCreate](#vmmigrationprojectslocationsgroupscreate) - Creates a new Group in a given project and location.
* [VmmigrationProjectsLocationsGroupsList](#vmmigrationprojectslocationsgroupslist) - Lists Groups in a given project and location.
* [VmmigrationProjectsLocationsGroupsRemoveGroupMigration](#vmmigrationprojectslocationsgroupsremovegroupmigration) - Removes a MigratingVm from a Group.
* [VmmigrationProjectsLocationsList](#vmmigrationprojectslocationslist) - Lists information about the supported locations for this service.
* [VmmigrationProjectsLocationsOperationsList](#vmmigrationprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* [VmmigrationProjectsLocationsSourcesCreate](#vmmigrationprojectslocationssourcescreate) - Creates a new Source in a given project and location.
* [VmmigrationProjectsLocationsSourcesDatacenterConnectorsCreate](#vmmigrationprojectslocationssourcesdatacenterconnectorscreate) - Creates a new DatacenterConnector in a given Source.
* [VmmigrationProjectsLocationsSourcesDatacenterConnectorsList](#vmmigrationprojectslocationssourcesdatacenterconnectorslist) - Lists DatacenterConnectors in a given Source.
* [VmmigrationProjectsLocationsSourcesDatacenterConnectorsUpgradeAppliance](#vmmigrationprojectslocationssourcesdatacenterconnectorsupgradeappliance) - Upgrades the appliance relate to this DatacenterConnector to the in-place updateable version.
* [VmmigrationProjectsLocationsSourcesFetchInventory](#vmmigrationprojectslocationssourcesfetchinventory) - List remote source's inventory of VMs. The remote source is the onprem vCenter (remote in the sense it's not in Compute Engine). The inventory describes the list of existing VMs in that source. Note that this operation lists the VMs on the remote source, as opposed to listing the MigratingVms resources in the vmmigration service.
* [VmmigrationProjectsLocationsSourcesList](#vmmigrationprojectslocationssourceslist) - Lists Sources in a given project and location.
* [VmmigrationProjectsLocationsSourcesMigratingVmsCloneJobsCreate](#vmmigrationprojectslocationssourcesmigratingvmsclonejobscreate) - Initiates a Clone of a specific migrating VM.
* [VmmigrationProjectsLocationsSourcesMigratingVmsCloneJobsList](#vmmigrationprojectslocationssourcesmigratingvmsclonejobslist) - Lists CloneJobs of a given migrating VM.
* [VmmigrationProjectsLocationsSourcesMigratingVmsCreate](#vmmigrationprojectslocationssourcesmigratingvmscreate) - Creates a new MigratingVm in a given Source.
* [VmmigrationProjectsLocationsSourcesMigratingVmsCutoverJobsCancel](#vmmigrationprojectslocationssourcesmigratingvmscutoverjobscancel) - Initiates the cancellation of a running cutover job.
* [VmmigrationProjectsLocationsSourcesMigratingVmsCutoverJobsCreate](#vmmigrationprojectslocationssourcesmigratingvmscutoverjobscreate) - Initiates a Cutover of a specific migrating VM. The returned LRO is completed when the cutover job resource is created and the job is initiated.
* [VmmigrationProjectsLocationsSourcesMigratingVmsCutoverJobsList](#vmmigrationprojectslocationssourcesmigratingvmscutoverjobslist) - Lists CutoverJobs of a given migrating VM.
* [VmmigrationProjectsLocationsSourcesMigratingVmsFinalizeMigration](#vmmigrationprojectslocationssourcesmigratingvmsfinalizemigration) - Marks a migration as completed, deleting migration resources that are no longer being used. Only applicable after cutover is done.
* [VmmigrationProjectsLocationsSourcesMigratingVmsList](#vmmigrationprojectslocationssourcesmigratingvmslist) - Lists MigratingVms in a given Source.
* [VmmigrationProjectsLocationsSourcesMigratingVmsPauseMigration](#vmmigrationprojectslocationssourcesmigratingvmspausemigration) - Pauses a migration for a VM. If cycle tasks are running they will be cancelled, preserving source task data. Further replication cycles will not be triggered while the VM is paused.
* [VmmigrationProjectsLocationsSourcesMigratingVmsReplicationCyclesList](#vmmigrationprojectslocationssourcesmigratingvmsreplicationcycleslist) - Lists ReplicationCycles in a given MigratingVM.
* [VmmigrationProjectsLocationsSourcesMigratingVmsResumeMigration](#vmmigrationprojectslocationssourcesmigratingvmsresumemigration) - Resumes a migration for a VM. When called on a paused migration, will start the process of uploading data and creating snapshots; when called on a completed cut-over migration, will update the migration to active state and start the process of uploading data and creating snapshots.
* [VmmigrationProjectsLocationsSourcesMigratingVmsStartMigration](#vmmigrationprojectslocationssourcesmigratingvmsstartmigration) - Starts migration for a VM. Starts the process of uploading data and creating snapshots, in replication cycles scheduled by the policy.
* [VmmigrationProjectsLocationsSourcesUtilizationReportsCreate](#vmmigrationprojectslocationssourcesutilizationreportscreate) - Creates a new UtilizationReport.
* [VmmigrationProjectsLocationsSourcesUtilizationReportsList](#vmmigrationprojectslocationssourcesutilizationreportslist) - Lists Utilization Reports of the given Source.
* [VmmigrationProjectsLocationsTargetProjectsCreate](#vmmigrationprojectslocationstargetprojectscreate) - Creates a new TargetProject in a given project. NOTE: TargetProject is a global resource; hence the only supported value for location is `global`.
* [VmmigrationProjectsLocationsTargetProjectsDelete](#vmmigrationprojectslocationstargetprojectsdelete) - Deletes a single TargetProject. NOTE: TargetProject is a global resource; hence the only supported value for location is `global`.
* [VmmigrationProjectsLocationsTargetProjectsGet](#vmmigrationprojectslocationstargetprojectsget) - Gets details of a single TargetProject. NOTE: TargetProject is a global resource; hence the only supported value for location is `global`.
* [VmmigrationProjectsLocationsTargetProjectsList](#vmmigrationprojectslocationstargetprojectslist) - Lists TargetProjects in a given project. NOTE: TargetProject is a global resource; hence the only supported value for location is `global`.
* [VmmigrationProjectsLocationsTargetProjectsPatch](#vmmigrationprojectslocationstargetprojectspatch) - Updates the parameters of a single TargetProject. NOTE: TargetProject is a global resource; hence the only supported value for location is `global`.

## VmmigrationProjectsLocationsGroupsAddGroupMigration

Adds a MigratingVm to a Group.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.VmmigrationProjectsLocationsGroupsAddGroupMigration(ctx, operations.VmmigrationProjectsLocationsGroupsAddGroupMigrationRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AddGroupMigrationRequest: &shared.AddGroupMigrationRequest{
            MigratingVM: sdk.String("magnam"),
        },
        AccessToken: sdk.String("debitis"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("delectus"),
        Fields: sdk.String("tempora"),
        Group: "suscipit",
        Key: sdk.String("molestiae"),
        OauthToken: sdk.String("minus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("placeat"),
        UploadType: sdk.String("voluptatum"),
        UploadProtocol: sdk.String("iusto"),
    }, operations.VmmigrationProjectsLocationsGroupsAddGroupMigrationSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```

## VmmigrationProjectsLocationsGroupsCreate

Creates a new Group in a given project and location.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.VmmigrationProjectsLocationsGroupsCreate(ctx, operations.VmmigrationProjectsLocationsGroupsCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GroupInput: &shared.GroupInput{
            Description: sdk.String("nisi"),
            DisplayName: sdk.String("recusandae"),
        },
        AccessToken: sdk.String("temporibus"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("quis"),
        Fields: sdk.String("veritatis"),
        GroupID: sdk.String("deserunt"),
        Key: sdk.String("perferendis"),
        OauthToken: sdk.String("ipsam"),
        Parent: "repellendus",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("sapiente"),
        RequestID: sdk.String("quo"),
        UploadType: sdk.String("odit"),
        UploadProtocol: sdk.String("at"),
    }, operations.VmmigrationProjectsLocationsGroupsCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```

## VmmigrationProjectsLocationsGroupsList

Lists Groups in a given project and location.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.VmmigrationProjectsLocationsGroupsList(ctx, operations.VmmigrationProjectsLocationsGroupsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("maiores"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("quod"),
        Fields: sdk.String("quod"),
        Filter: sdk.String("esse"),
        Key: sdk.String("totam"),
        OauthToken: sdk.String("porro"),
        OrderBy: sdk.String("dolorum"),
        PageSize: sdk.Int64(118274),
        PageToken: sdk.String("nam"),
        Parent: "officia",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("occaecati"),
        UploadType: sdk.String("fugit"),
        UploadProtocol: sdk.String("deleniti"),
    }, operations.VmmigrationProjectsLocationsGroupsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListGroupsResponse != nil {
        // handle response
    }
}
```

## VmmigrationProjectsLocationsGroupsRemoveGroupMigration

Removes a MigratingVm from a Group.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.VmmigrationProjectsLocationsGroupsRemoveGroupMigration(ctx, operations.VmmigrationProjectsLocationsGroupsRemoveGroupMigrationRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        RemoveGroupMigrationRequest: &shared.RemoveGroupMigrationRequest{
            MigratingVM: sdk.String("optio"),
        },
        AccessToken: sdk.String("totam"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("commodi"),
        Fields: sdk.String("molestiae"),
        Group: "modi",
        Key: sdk.String("qui"),
        OauthToken: sdk.String("impedit"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("cum"),
        UploadType: sdk.String("esse"),
        UploadProtocol: sdk.String("ipsum"),
    }, operations.VmmigrationProjectsLocationsGroupsRemoveGroupMigrationSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```

## VmmigrationProjectsLocationsList

Lists information about the supported locations for this service.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.VmmigrationProjectsLocationsList(ctx, operations.VmmigrationProjectsLocationsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("aspernatur"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("ad"),
        Fields: sdk.String("natus"),
        Filter: sdk.String("sed"),
        Key: sdk.String("iste"),
        Name: "Faye Howe",
        OauthToken: sdk.String("fuga"),
        PageSize: sdk.Int64(449950),
        PageToken: sdk.String("corporis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("iste"),
        UploadType: sdk.String("iure"),
        UploadProtocol: sdk.String("saepe"),
    }, operations.VmmigrationProjectsLocationsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListLocationsResponse != nil {
        // handle response
    }
}
```

## VmmigrationProjectsLocationsOperationsList

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.VmmigrationProjectsLocationsOperationsList(ctx, operations.VmmigrationProjectsLocationsOperationsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("architecto"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("reiciendis"),
        Fields: sdk.String("est"),
        Filter: sdk.String("mollitia"),
        Key: sdk.String("laborum"),
        Name: "Connie Herzog",
        OauthToken: sdk.String("enim"),
        PageSize: sdk.Int64(607831),
        PageToken: sdk.String("nemo"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("minima"),
        UploadType: sdk.String("excepturi"),
        UploadProtocol: sdk.String("accusantium"),
    }, operations.VmmigrationProjectsLocationsOperationsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListOperationsResponse != nil {
        // handle response
    }
}
```

## VmmigrationProjectsLocationsSourcesCreate

Creates a new Source in a given project and location.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.VmmigrationProjectsLocationsSourcesCreate(ctx, operations.VmmigrationProjectsLocationsSourcesCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        SourceInput: &shared.SourceInput{
            Aws: &shared.AwsSourceDetailsInput{
                AccessKeyCreds: &shared.AccessKeyCredentials{
                    AccessKeyID: sdk.String("culpa"),
                    SecretAccessKey: sdk.String("doloribus"),
                    SessionToken: sdk.String("sapiente"),
                },
                AwsRegion: sdk.String("architecto"),
                Error: &shared.Status{
                    Code: sdk.Int(652790),
                    Details: []map[string]interface{}{
                        map[string]interface{}{
                            "consequuntur": "repellat",
                            "mollitia": "occaecati",
                            "numquam": "commodi",
                        },
                    },
                    Message: sdk.String("quam"),
                },
                InventorySecurityGroupNames: []string{
                    "velit",
                    "error",
                },
                InventoryTagList: []shared.Tag{
                    shared.Tag{
                        Key: sdk.String("quis"),
                        Value: sdk.String("vitae"),
                    },
                },
                MigrationResourcesUserTags: map[string]string{
                    "animi": "enim",
                    "odit": "quo",
                    "sequi": "tenetur",
                },
            },
            Description: sdk.String("ipsam"),
            Error: &shared.Status{
                Code: sdk.Int(662527),
                Details: []map[string]interface{}{
                    map[string]interface{}{
                        "quasi": "error",
                    },
                    map[string]interface{}{
                        "laborum": "quasi",
                        "reiciendis": "voluptatibus",
                        "vero": "nihil",
                        "praesentium": "voluptatibus",
                    },
                    map[string]interface{}{
                        "omnis": "voluptate",
                    },
                    map[string]interface{}{
                        "perferendis": "doloremque",
                        "reprehenderit": "ut",
                        "maiores": "dicta",
                    },
                },
                Message: sdk.String("corporis"),
            },
            Labels: map[string]string{
                "iusto": "dicta",
                "harum": "enim",
            },
            Vmware: &shared.VmwareSourceDetails{
                Password: sdk.String("accusamus"),
                Thumbprint: sdk.String("commodi"),
                Username: sdk.String("Terrill69"),
                VcenterIP: sdk.String("molestias"),
            },
        },
        AccessToken: sdk.String("excepturi"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("modi"),
        Fields: sdk.String("praesentium"),
        Key: sdk.String("rem"),
        OauthToken: sdk.String("voluptates"),
        Parent: "quasi",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("repudiandae"),
        RequestID: sdk.String("sint"),
        SourceID: sdk.String("veritatis"),
        UploadType: sdk.String("itaque"),
        UploadProtocol: sdk.String("incidunt"),
    }, operations.VmmigrationProjectsLocationsSourcesCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```

## VmmigrationProjectsLocationsSourcesDatacenterConnectorsCreate

Creates a new DatacenterConnector in a given Source.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.VmmigrationProjectsLocationsSourcesDatacenterConnectorsCreate(ctx, operations.VmmigrationProjectsLocationsSourcesDatacenterConnectorsCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        DatacenterConnectorInput: &shared.DatacenterConnectorInput{
            AvailableVersions: &shared.AvailableUpdates{
                InPlaceUpdate: &shared.ApplianceVersion{
                    Critical: sdk.Bool(false),
                    ReleaseNotesURI: sdk.String("consequatur"),
                    URI: sdk.String("https://tender-carload.name"),
                    Version: sdk.String("distinctio"),
                },
                NewDeployableAppliance: &shared.ApplianceVersion{
                    Critical: sdk.Bool(false),
                    ReleaseNotesURI: sdk.String("quibusdam"),
                    URI: sdk.String("http://familiar-combination.info"),
                    Version: sdk.String("cupiditate"),
                },
            },
            Error: &shared.Status{
                Code: sdk.Int(552822),
                Details: []map[string]interface{}{
                    map[string]interface{}{
                        "assumenda": "ipsam",
                    },
                },
                Message: sdk.String("alias"),
            },
            RegistrationID: sdk.String("fugit"),
            ServiceAccount: sdk.String("dolorum"),
            UpgradeStatus: &shared.UpgradeStatus{
                Error: &shared.Status{
                    Code: sdk.Int(569618),
                    Details: []map[string]interface{}{
                        map[string]interface{}{
                            "tempore": "labore",
                            "delectus": "eum",
                            "non": "eligendi",
                        },
                        map[string]interface{}{
                            "aliquid": "provident",
                            "necessitatibus": "sint",
                            "officia": "dolor",
                        },
                    },
                    Message: sdk.String("debitis"),
                },
                PreviousVersion: sdk.String("a"),
                StartTime: sdk.String("dolorum"),
                State: shared.UpgradeStatusStateEnumRunning.ToPointer(),
                Version: sdk.String("in"),
            },
            Version: sdk.String("illum"),
        },
        AccessToken: sdk.String("maiores"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("dicta"),
        DatacenterConnectorID: sdk.String("magnam"),
        Fields: sdk.String("cumque"),
        Key: sdk.String("facere"),
        OauthToken: sdk.String("ea"),
        Parent: "aliquid",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("laborum"),
        RequestID: sdk.String("accusamus"),
        UploadType: sdk.String("non"),
        UploadProtocol: sdk.String("occaecati"),
    }, operations.VmmigrationProjectsLocationsSourcesDatacenterConnectorsCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```

## VmmigrationProjectsLocationsSourcesDatacenterConnectorsList

Lists DatacenterConnectors in a given Source.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.VmmigrationProjectsLocationsSourcesDatacenterConnectorsList(ctx, operations.VmmigrationProjectsLocationsSourcesDatacenterConnectorsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("accusamus"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("quidem"),
        Fields: sdk.String("provident"),
        Filter: sdk.String("nam"),
        Key: sdk.String("id"),
        OauthToken: sdk.String("blanditiis"),
        OrderBy: sdk.String("deleniti"),
        PageSize: sdk.Int64(956084),
        PageToken: sdk.String("amet"),
        Parent: "deserunt",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("nisi"),
        UploadType: sdk.String("vel"),
        UploadProtocol: sdk.String("natus"),
    }, operations.VmmigrationProjectsLocationsSourcesDatacenterConnectorsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListDatacenterConnectorsResponse != nil {
        // handle response
    }
}
```

## VmmigrationProjectsLocationsSourcesDatacenterConnectorsUpgradeAppliance

Upgrades the appliance relate to this DatacenterConnector to the in-place updateable version.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.VmmigrationProjectsLocationsSourcesDatacenterConnectorsUpgradeAppliance(ctx, operations.VmmigrationProjectsLocationsSourcesDatacenterConnectorsUpgradeApplianceRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        UpgradeApplianceRequest: &shared.UpgradeApplianceRequest{
            RequestID: sdk.String("molestiae"),
        },
        AccessToken: sdk.String("perferendis"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("magnam"),
        DatacenterConnector: "distinctio",
        Fields: sdk.String("id"),
        Key: sdk.String("labore"),
        OauthToken: sdk.String("labore"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("suscipit"),
        UploadType: sdk.String("natus"),
        UploadProtocol: sdk.String("nobis"),
    }, operations.VmmigrationProjectsLocationsSourcesDatacenterConnectorsUpgradeApplianceSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```

## VmmigrationProjectsLocationsSourcesFetchInventory

List remote source's inventory of VMs. The remote source is the onprem vCenter (remote in the sense it's not in Compute Engine). The inventory describes the list of existing VMs in that source. Note that this operation lists the VMs on the remote source, as opposed to listing the MigratingVms resources in the vmmigration service.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.VmmigrationProjectsLocationsSourcesFetchInventory(ctx, operations.VmmigrationProjectsLocationsSourcesFetchInventoryRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("vero"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("architecto"),
        Fields: sdk.String("magnam"),
        ForceRefresh: sdk.Bool(false),
        Key: sdk.String("et"),
        OauthToken: sdk.String("excepturi"),
        PageSize: sdk.Int64(354047),
        PageToken: sdk.String("provident"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quos"),
        Source: "sint",
        UploadType: sdk.String("accusantium"),
        UploadProtocol: sdk.String("mollitia"),
    }, operations.VmmigrationProjectsLocationsSourcesFetchInventorySecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FetchInventoryResponse != nil {
        // handle response
    }
}
```

## VmmigrationProjectsLocationsSourcesList

Lists Sources in a given project and location.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.VmmigrationProjectsLocationsSourcesList(ctx, operations.VmmigrationProjectsLocationsSourcesListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("mollitia"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("eum"),
        Fields: sdk.String("dolor"),
        Filter: sdk.String("necessitatibus"),
        Key: sdk.String("odit"),
        OauthToken: sdk.String("nemo"),
        OrderBy: sdk.String("quasi"),
        PageSize: sdk.Int64(435865),
        PageToken: sdk.String("doloribus"),
        Parent: "debitis",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("eius"),
        UploadType: sdk.String("maxime"),
        UploadProtocol: sdk.String("deleniti"),
    }, operations.VmmigrationProjectsLocationsSourcesListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListSourcesResponse != nil {
        // handle response
    }
}
```

## VmmigrationProjectsLocationsSourcesMigratingVmsCloneJobsCreate

Initiates a Clone of a specific migrating VM.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.VmmigrationProjectsLocationsSourcesMigratingVmsCloneJobsCreate(ctx, operations.VmmigrationProjectsLocationsSourcesMigratingVmsCloneJobsCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        CloneJobInput: &shared.CloneJobInput{
            ComputeEngineTargetDetails: &shared.ComputeEngineTargetDetails{
                AdditionalLicenses: []string{
                    "architecto",
                    "architecto",
                },
                AppliedLicense: &shared.AppliedLicense{
                    OsLicense: sdk.String("repudiandae"),
                    Type: shared.AppliedLicenseTypeEnumNone.ToPointer(),
                },
                BootOption: shared.ComputeEngineTargetDetailsBootOptionEnumComputeEngineBootOptionBios.ToPointer(),
                ComputeScheduling: &shared.ComputeScheduling{
                    AutomaticRestart: sdk.Bool(false),
                    MinNodeCpus: sdk.Int(469249),
                    NodeAffinities: []shared.SchedulingNodeAffinity{
                        shared.SchedulingNodeAffinity{
                            Key: sdk.String("quibusdam"),
                            Operator: shared.SchedulingNodeAffinityOperatorEnumOperatorUnspecified.ToPointer(),
                            Values: []string{
                                "pariatur",
                                "accusantium",
                                "consequuntur",
                                "praesentium",
                            },
                        },
                        shared.SchedulingNodeAffinity{
                            Key: sdk.String("natus"),
                            Operator: shared.SchedulingNodeAffinityOperatorEnumOperatorUnspecified.ToPointer(),
                            Values: []string{
                                "quo",
                            },
                        },
                        shared.SchedulingNodeAffinity{
                            Key: sdk.String("illum"),
                            Operator: shared.SchedulingNodeAffinityOperatorEnumNotIn.ToPointer(),
                            Values: []string{
                                "ea",
                                "excepturi",
                                "odit",
                                "ea",
                            },
                        },
                        shared.SchedulingNodeAffinity{
                            Key: sdk.String("accusantium"),
                            Operator: shared.SchedulingNodeAffinityOperatorEnumOperatorUnspecified.ToPointer(),
                            Values: []string{
                                "quidem",
                                "ipsam",
                                "voluptate",
                                "autem",
                            },
                        },
                    },
                    OnHostMaintenance: shared.ComputeSchedulingOnHostMaintenanceEnumMigrate.ToPointer(),
                    RestartType: shared.ComputeSchedulingRestartTypeEnumRestartTypeUnspecified.ToPointer(),
                },
                DiskType: shared.ComputeEngineTargetDetailsDiskTypeEnumComputeEngineDiskTypeBalanced.ToPointer(),
                Hostname: sdk.String("half-wedge.com"),
                Labels: map[string]string{
                    "amet": "aut",
                    "cumque": "corporis",
                    "hic": "libero",
                    "nobis": "dolores",
                },
                LicenseType: shared.ComputeEngineTargetDetailsLicenseTypeEnumComputeEngineLicenseTypePayg.ToPointer(),
                MachineType: sdk.String("totam"),
                MachineTypeSeries: sdk.String("dignissimos"),
                Metadata: map[string]string{
                    "quis": "nesciunt",
                },
                NetworkInterfaces: []shared.NetworkInterface{
                    shared.NetworkInterface{
                        ExternalIP: sdk.String("perferendis"),
                        InternalIP: sdk.String("dolores"),
                        Network: sdk.String("minus"),
                        Subnetwork: sdk.String("quam"),
                    },
                },
                NetworkTags: []string{
                    "vero",
                },
                Project: sdk.String("nostrum"),
                SecureBoot: sdk.Bool(false),
                ServiceAccount: sdk.String("hic"),
                VMName: sdk.String("recusandae"),
                Zone: sdk.String("omnis"),
            },
            ComputeEngineVMDetails: &shared.TargetVMDetailsInput{
                AppliedLicense: &shared.AppliedLicense{
                    OsLicense: sdk.String("facilis"),
                    Type: shared.AppliedLicenseTypeEnumPayg.ToPointer(),
                },
                ComputeScheduling: &shared.ComputeScheduling{
                    AutomaticRestart: sdk.Bool(false),
                    MinNodeCpus: sdk.Int(31838),
                    NodeAffinities: []shared.SchedulingNodeAffinity{
                        shared.SchedulingNodeAffinity{
                            Key: sdk.String("consequuntur"),
                            Operator: shared.SchedulingNodeAffinityOperatorEnumIn.ToPointer(),
                            Values: []string{
                                "eaque",
                                "occaecati",
                                "rerum",
                            },
                        },
                        shared.SchedulingNodeAffinity{
                            Key: sdk.String("adipisci"),
                            Operator: shared.SchedulingNodeAffinityOperatorEnumNotIn.ToPointer(),
                            Values: []string{
                                "modi",
                                "iste",
                                "dolorum",
                                "deleniti",
                            },
                        },
                        shared.SchedulingNodeAffinity{
                            Key: sdk.String("pariatur"),
                            Operator: shared.SchedulingNodeAffinityOperatorEnumIn.ToPointer(),
                            Values: []string{
                                "libero",
                                "delectus",
                                "quaerat",
                                "quos",
                            },
                        },
                        shared.SchedulingNodeAffinity{
                            Key: sdk.String("aliquid"),
                            Operator: shared.SchedulingNodeAffinityOperatorEnumOperatorUnspecified.ToPointer(),
                            Values: []string{
                                "dolor",
                            },
                        },
                    },
                    OnHostMaintenance: shared.ComputeSchedulingOnHostMaintenanceEnumOnHostMaintenanceUnspecified.ToPointer(),
                    RestartType: shared.ComputeSchedulingRestartTypeEnumRestartTypeUnspecified.ToPointer(),
                },
                DiskType: shared.TargetVMDetailsDiskTypeEnumSsd.ToPointer(),
                ExternalIP: sdk.String("excepturi"),
                InternalIP: sdk.String("cum"),
                Labels: map[string]string{
                    "dignissimos": "reiciendis",
                    "amet": "dolorum",
                },
                LicenseType: shared.TargetVMDetailsLicenseTypeEnumDefault.ToPointer(),
                MachineType: sdk.String("veritatis"),
                MachineTypeSeries: sdk.String("ipsa"),
                Metadata: map[string]string{
                    "iure": "odio",
                },
                Name: sdk.String("Sophia Predovic"),
                Network: sdk.String("natus"),
                NetworkInterfaces: []shared.NetworkInterface{
                    shared.NetworkInterface{
                        ExternalIP: sdk.String("atque"),
                        InternalIP: sdk.String("sit"),
                        Network: sdk.String("fugiat"),
                        Subnetwork: sdk.String("ab"),
                    },
                },
                NetworkTags: []string{
                    "dolorum",
                    "iusto",
                    "voluptate",
                },
                SecureBoot: sdk.Bool(false),
                ServiceAccount: sdk.String("dolorum"),
                Subnetwork: sdk.String("deleniti"),
                TargetProject: sdk.String("omnis"),
                Zone: sdk.String("necessitatibus"),
            },
            Error: &shared.Status{
                Code: sdk.Int(714697),
                Details: []map[string]interface{}{
                    map[string]interface{}{
                        "ipsum": "voluptate",
                        "id": "saepe",
                    },
                    map[string]interface{}{
                        "aspernatur": "perferendis",
                        "amet": "optio",
                    },
                    map[string]interface{}{
                        "ad": "saepe",
                        "suscipit": "deserunt",
                        "provident": "minima",
                        "repellendus": "totam",
                    },
                    map[string]interface{}{
                        "alias": "at",
                        "quaerat": "tempora",
                        "vel": "quod",
                    },
                },
                Message: sdk.String("officiis"),
            },
            TargetDetails: &shared.TargetVMDetailsInput{
                AppliedLicense: &shared.AppliedLicense{
                    OsLicense: sdk.String("qui"),
                    Type: shared.AppliedLicenseTypeEnumPayg.ToPointer(),
                },
                ComputeScheduling: &shared.ComputeScheduling{
                    AutomaticRestart: sdk.Bool(false),
                    MinNodeCpus: sdk.Int(952792),
                    NodeAffinities: []shared.SchedulingNodeAffinity{
                        shared.SchedulingNodeAffinity{
                            Key: sdk.String("harum"),
                            Operator: shared.SchedulingNodeAffinityOperatorEnumIn.ToPointer(),
                            Values: []string{
                                "quisquam",
                            },
                        },
                        shared.SchedulingNodeAffinity{
                            Key: sdk.String("tenetur"),
                            Operator: shared.SchedulingNodeAffinityOperatorEnumOperatorUnspecified.ToPointer(),
                            Values: []string{
                                "accusamus",
                                "numquam",
                                "enim",
                            },
                        },
                    },
                    OnHostMaintenance: shared.ComputeSchedulingOnHostMaintenanceEnumOnHostMaintenanceUnspecified.ToPointer(),
                    RestartType: shared.ComputeSchedulingRestartTypeEnumNoAutomaticRestart.ToPointer(),
                },
                DiskType: shared.TargetVMDetailsDiskTypeEnumBalanced.ToPointer(),
                ExternalIP: sdk.String("nihil"),
                InternalIP: sdk.String("sit"),
                Labels: map[string]string{
                    "neque": "sed",
                    "vel": "libero",
                    "voluptas": "deserunt",
                },
                LicenseType: shared.TargetVMDetailsLicenseTypeEnumPayg.ToPointer(),
                MachineType: sdk.String("ipsum"),
                MachineTypeSeries: sdk.String("incidunt"),
                Metadata: map[string]string{
                    "cupiditate": "maxime",
                },
                Name: sdk.String("Dominic Carroll"),
                Network: sdk.String("incidunt"),
                NetworkInterfaces: []shared.NetworkInterface{
                    shared.NetworkInterface{
                        ExternalIP: sdk.String("dolores"),
                        InternalIP: sdk.String("distinctio"),
                        Network: sdk.String("facilis"),
                        Subnetwork: sdk.String("aliquid"),
                    },
                },
                NetworkTags: []string{
                    "molestias",
                    "temporibus",
                },
                SecureBoot: sdk.Bool(false),
                ServiceAccount: sdk.String("qui"),
                Subnetwork: sdk.String("neque"),
                TargetProject: sdk.String("fugit"),
                Zone: sdk.String("magni"),
            },
        },
        AccessToken: sdk.String("odio"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("ullam"),
        CloneJobID: sdk.String("nam"),
        Fields: sdk.String("hic"),
        Key: sdk.String("voluptatem"),
        OauthToken: sdk.String("cumque"),
        Parent: "soluta",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("nobis"),
        RequestID: sdk.String("et"),
        UploadType: sdk.String("saepe"),
        UploadProtocol: sdk.String("ipsum"),
    }, operations.VmmigrationProjectsLocationsSourcesMigratingVmsCloneJobsCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```

## VmmigrationProjectsLocationsSourcesMigratingVmsCloneJobsList

Lists CloneJobs of a given migrating VM.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.VmmigrationProjectsLocationsSourcesMigratingVmsCloneJobsList(ctx, operations.VmmigrationProjectsLocationsSourcesMigratingVmsCloneJobsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("nobis"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("tempore"),
        Fields: sdk.String("cupiditate"),
        Filter: sdk.String("aperiam"),
        Key: sdk.String("delectus"),
        OauthToken: sdk.String("dolorem"),
        OrderBy: sdk.String("dolore"),
        PageSize: sdk.Int64(286915),
        PageToken: sdk.String("adipisci"),
        Parent: "dolorum",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("architecto"),
        UploadType: sdk.String("quae"),
        UploadProtocol: sdk.String("aut"),
    }, operations.VmmigrationProjectsLocationsSourcesMigratingVmsCloneJobsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListCloneJobsResponse != nil {
        // handle response
    }
}
```

## VmmigrationProjectsLocationsSourcesMigratingVmsCreate

Creates a new MigratingVm in a given Source.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.VmmigrationProjectsLocationsSourcesMigratingVmsCreate(ctx, operations.VmmigrationProjectsLocationsSourcesMigratingVmsCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        MigratingVMInput: &shared.MigratingVMInput{
            AwsSourceVMDetails: &shared.AwsSourceVMDetails{
                CommittedStorageBytes: sdk.String("itaque"),
                Firmware: shared.AwsSourceVMDetailsFirmwareEnumFirmwareUnspecified.ToPointer(),
            },
            ComputeEngineTargetDefaults: &shared.ComputeEngineTargetDefaultsInput{
                AdditionalLicenses: []string{
                    "repellendus",
                    "porro",
                    "doloribus",
                },
                AppliedLicense: &shared.AppliedLicense{
                    OsLicense: sdk.String("ut"),
                    Type: shared.AppliedLicenseTypeEnumPayg.ToPointer(),
                },
                ComputeScheduling: &shared.ComputeScheduling{
                    AutomaticRestart: sdk.Bool(false),
                    MinNodeCpus: sdk.Int(586410),
                    NodeAffinities: []shared.SchedulingNodeAffinity{
                        shared.SchedulingNodeAffinity{
                            Key: sdk.String("quae"),
                            Operator: shared.SchedulingNodeAffinityOperatorEnumIn.ToPointer(),
                            Values: []string{
                                "occaecati",
                                "voluptatibus",
                            },
                        },
                    },
                    OnHostMaintenance: shared.ComputeSchedulingOnHostMaintenanceEnumMigrate.ToPointer(),
                    RestartType: shared.ComputeSchedulingRestartTypeEnumNoAutomaticRestart.ToPointer(),
                },
                DiskType: shared.ComputeEngineTargetDefaultsDiskTypeEnumComputeEngineDiskTypeSsd.ToPointer(),
                Hostname: sdk.String("glorious-crash.org"),
                Labels: map[string]string{
                    "consectetur": "vero",
                    "tenetur": "dignissimos",
                },
                LicenseType: shared.ComputeEngineTargetDefaultsLicenseTypeEnumComputeEngineLicenseTypeByol.ToPointer(),
                MachineType: sdk.String("distinctio"),
                MachineTypeSeries: sdk.String("quod"),
                Metadata: map[string]string{
                    "similique": "facilis",
                    "vero": "ducimus",
                },
                NetworkInterfaces: []shared.NetworkInterface{
                    shared.NetworkInterface{
                        ExternalIP: sdk.String("quibusdam"),
                        InternalIP: sdk.String("illum"),
                        Network: sdk.String("sequi"),
                        Subnetwork: sdk.String("natus"),
                    },
                    shared.NetworkInterface{
                        ExternalIP: sdk.String("impedit"),
                        InternalIP: sdk.String("aut"),
                        Network: sdk.String("voluptatibus"),
                        Subnetwork: sdk.String("exercitationem"),
                    },
                },
                NetworkTags: []string{
                    "fugit",
                    "porro",
                    "maiores",
                    "doloribus",
                },
                SecureBoot: sdk.Bool(false),
                ServiceAccount: sdk.String("iusto"),
                TargetProject: sdk.String("eligendi"),
                VMName: sdk.String("ducimus"),
                Zone: sdk.String("alias"),
            },
            ComputeEngineVMDefaults: &shared.TargetVMDetailsInput{
                AppliedLicense: &shared.AppliedLicense{
                    OsLicense: sdk.String("officia"),
                    Type: shared.AppliedLicenseTypeEnumNone.ToPointer(),
                },
                ComputeScheduling: &shared.ComputeScheduling{
                    AutomaticRestart: sdk.Bool(false),
                    MinNodeCpus: sdk.Int(368584),
                    NodeAffinities: []shared.SchedulingNodeAffinity{
                        shared.SchedulingNodeAffinity{
                            Key: sdk.String("aspernatur"),
                            Operator: shared.SchedulingNodeAffinityOperatorEnumIn.ToPointer(),
                            Values: []string{
                                "magnam",
                                "ratione",
                                "ex",
                                "laudantium",
                            },
                        },
                        shared.SchedulingNodeAffinity{
                            Key: sdk.String("dicta"),
                            Operator: shared.SchedulingNodeAffinityOperatorEnumOperatorUnspecified.ToPointer(),
                            Values: []string{
                                "quasi",
                                "ex",
                                "nulla",
                                "excepturi",
                            },
                        },
                    },
                    OnHostMaintenance: shared.ComputeSchedulingOnHostMaintenanceEnumMigrate.ToPointer(),
                    RestartType: shared.ComputeSchedulingRestartTypeEnumAutomaticRestart.ToPointer(),
                },
                DiskType: shared.TargetVMDetailsDiskTypeEnumSsd.ToPointer(),
                ExternalIP: sdk.String("quisquam"),
                InternalIP: sdk.String("saepe"),
                Labels: map[string]string{
                    "impedit": "corporis",
                    "veniam": "aliquid",
                },
                LicenseType: shared.TargetVMDetailsLicenseTypeEnumDefault.ToPointer(),
                MachineType: sdk.String("magnam"),
                MachineTypeSeries: sdk.String("ea"),
                Metadata: map[string]string{
                    "consectetur": "recusandae",
                    "aspernatur": "minima",
                    "eaque": "a",
                    "libero": "aut",
                },
                Name: sdk.String("Margie Russel"),
                Network: sdk.String("accusamus"),
                NetworkInterfaces: []shared.NetworkInterface{
                    shared.NetworkInterface{
                        ExternalIP: sdk.String("non"),
                        InternalIP: sdk.String("et"),
                        Network: sdk.String("dolorum"),
                        Subnetwork: sdk.String("laborum"),
                    },
                },
                NetworkTags: []string{
                    "velit",
                    "eum",
                    "autem",
                    "nobis",
                },
                SecureBoot: sdk.Bool(false),
                ServiceAccount: sdk.String("quas"),
                Subnetwork: sdk.String("assumenda"),
                TargetProject: sdk.String("nulla"),
                Zone: sdk.String("voluptas"),
            },
            CurrentSyncInfo: &shared.ReplicationCycleInput{
                CycleNumber: sdk.Int(727044),
                EndTime: sdk.String("quasi"),
                Error: &shared.Status{
                    Code: sdk.Int(270328),
                    Details: []map[string]interface{}{
                        map[string]interface{}{
                            "provident": "ipsa",
                        },
                        map[string]interface{}{
                            "magnam": "odio",
                            "eius": "esse",
                        },
                    },
                    Message: sdk.String("esse"),
                },
                Name: sdk.String("Blake Kihn"),
                Progress: sdk.Int(283519),
                ProgressPercent: sdk.Int(433439),
                StartTime: sdk.String("suscipit"),
                State: shared.ReplicationCycleStateEnumSucceeded.ToPointer(),
                Steps: []shared.CycleStep{
                    shared.CycleStep{
                        EndTime: sdk.String("praesentium"),
                        InitializingReplication: map[string]interface{}{
                            "veritatis": "ipsa",
                            "id": "quidem",
                            "neque": "quo",
                            "illum": "quo",
                        },
                        PostProcessing: map[string]interface{}{
                            "eius": "eos",
                            "voluptas": "ab",
                            "cupiditate": "consequatur",
                        },
                        Replicating: &shared.ReplicatingStep{
                            LastThirtyMinutesAverageBytesPerSecond: sdk.String("tempora"),
                            LastTwoMinutesAverageBytesPerSecond: sdk.String("debitis"),
                            ReplicatedBytes: sdk.String("ipsam"),
                            TotalBytes: sdk.String("aspernatur"),
                        },
                        StartTime: sdk.String("sequi"),
                    },
                },
                TotalPauseDuration: sdk.String("quo"),
            },
            Description: sdk.String("esse"),
            DisplayName: sdk.String("recusandae"),
            Error: &shared.Status{
                Code: sdk.Int(44612),
                Details: []map[string]interface{}{
                    map[string]interface{}{
                        "dignissimos": "inventore",
                        "nihil": "totam",
                        "accusamus": "aliquam",
                        "odio": "occaecati",
                    },
                    map[string]interface{}{
                        "sapiente": "dolores",
                        "deserunt": "molestiae",
                    },
                    map[string]interface{}{
                        "porro": "eum",
                    },
                },
                Message: sdk.String("quas"),
            },
            Labels: map[string]string{
                "consequuntur": "deleniti",
                "fugit": "fuga",
                "mollitia": "incidunt",
            },
            LastReplicationCycle: &shared.ReplicationCycleInput{
                CycleNumber: sdk.Int(539224),
                EndTime: sdk.String("explicabo"),
                Error: &shared.Status{
                    Code: sdk.Int(325685),
                    Details: []map[string]interface{}{
                        map[string]interface{}{
                            "sapiente": "consequuntur",
                        },
                        map[string]interface{}{
                            "explicabo": "saepe",
                        },
                    },
                    Message: sdk.String("occaecati"),
                },
                Name: sdk.String("Carl Koch"),
                Progress: sdk.Int(82971),
                ProgressPercent: sdk.Int(458604),
                StartTime: sdk.String("quod"),
                State: shared.ReplicationCycleStateEnumFailed.ToPointer(),
                Steps: []shared.CycleStep{
                    shared.CycleStep{
                        EndTime: sdk.String("aliquid"),
                        InitializingReplication: map[string]interface{}{
                            "saepe": "vel",
                        },
                        PostProcessing: map[string]interface{}{
                            "molestiae": "rerum",
                            "occaecati": "minima",
                            "distinctio": "eligendi",
                        },
                        Replicating: &shared.ReplicatingStep{
                            LastThirtyMinutesAverageBytesPerSecond: sdk.String("sit"),
                            LastTwoMinutesAverageBytesPerSecond: sdk.String("culpa"),
                            ReplicatedBytes: sdk.String("tempore"),
                            TotalBytes: sdk.String("adipisci"),
                        },
                        StartTime: sdk.String("cumque"),
                    },
                    shared.CycleStep{
                        EndTime: sdk.String("consequuntur"),
                        InitializingReplication: map[string]interface{}{
                            "minus": "quaerat",
                        },
                        PostProcessing: map[string]interface{}{
                            "consectetur": "esse",
                            "blanditiis": "provident",
                            "a": "nulla",
                            "quas": "esse",
                        },
                        Replicating: &shared.ReplicatingStep{
                            LastThirtyMinutesAverageBytesPerSecond: sdk.String("quasi"),
                            LastTwoMinutesAverageBytesPerSecond: sdk.String("a"),
                            ReplicatedBytes: sdk.String("error"),
                            TotalBytes: sdk.String("sint"),
                        },
                        StartTime: sdk.String("pariatur"),
                    },
                    shared.CycleStep{
                        EndTime: sdk.String("possimus"),
                        InitializingReplication: map[string]interface{}{
                            "eveniet": "asperiores",
                        },
                        PostProcessing: map[string]interface{}{
                            "veritatis": "consequuntur",
                            "quasi": "similique",
                            "culpa": "aliquid",
                            "tenetur": "quae",
                        },
                        Replicating: &shared.ReplicatingStep{
                            LastThirtyMinutesAverageBytesPerSecond: sdk.String("earum"),
                            LastTwoMinutesAverageBytesPerSecond: sdk.String("vel"),
                            ReplicatedBytes: sdk.String("in"),
                            TotalBytes: sdk.String("eius"),
                        },
                        StartTime: sdk.String("libero"),
                    },
                    shared.CycleStep{
                        EndTime: sdk.String("illum"),
                        InitializingReplication: map[string]interface{}{
                            "accusantium": "aliquam",
                            "sapiente": "dicta",
                            "ullam": "reprehenderit",
                        },
                        PostProcessing: map[string]interface{}{
                            "nisi": "aut",
                            "voluptatum": "qui",
                        },
                        Replicating: &shared.ReplicatingStep{
                            LastThirtyMinutesAverageBytesPerSecond: sdk.String("quibusdam"),
                            LastTwoMinutesAverageBytesPerSecond: sdk.String("ex"),
                            ReplicatedBytes: sdk.String("deleniti"),
                            TotalBytes: sdk.String("itaque"),
                        },
                        StartTime: sdk.String("dolorum"),
                    },
                },
                TotalPauseDuration: sdk.String("architecto"),
            },
            LastSync: &shared.ReplicationSync{
                LastSyncTime: sdk.String("omnis"),
            },
            Policy: &shared.SchedulePolicy{
                IdleDuration: sdk.String("tenetur"),
                SkipOsAdaptation: sdk.Bool(false),
            },
            SourceVMID: sdk.String("quasi"),
            TargetDefaults: &shared.TargetVMDetailsInput{
                AppliedLicense: &shared.AppliedLicense{
                    OsLicense: sdk.String("at"),
                    Type: shared.AppliedLicenseTypeEnumTypeUnspecified.ToPointer(),
                },
                ComputeScheduling: &shared.ComputeScheduling{
                    AutomaticRestart: sdk.Bool(false),
                    MinNodeCpus: sdk.Int(454162),
                    NodeAffinities: []shared.SchedulingNodeAffinity{
                        shared.SchedulingNodeAffinity{
                            Key: sdk.String("minima"),
                            Operator: shared.SchedulingNodeAffinityOperatorEnumOperatorUnspecified.ToPointer(),
                            Values: []string{
                                "adipisci",
                            },
                        },
                    },
                    OnHostMaintenance: shared.ComputeSchedulingOnHostMaintenanceEnumTerminate.ToPointer(),
                    RestartType: shared.ComputeSchedulingRestartTypeEnumNoAutomaticRestart.ToPointer(),
                },
                DiskType: shared.TargetVMDetailsDiskTypeEnumDiskTypeUnspecified.ToPointer(),
                ExternalIP: sdk.String("rem"),
                InternalIP: sdk.String("aut"),
                Labels: map[string]string{
                    "eum": "mollitia",
                    "ab": "corrupti",
                    "non": "voluptatem",
                },
                LicenseType: shared.TargetVMDetailsLicenseTypeEnumDefault.ToPointer(),
                MachineType: sdk.String("occaecati"),
                MachineTypeSeries: sdk.String("numquam"),
                Metadata: map[string]string{
                    "explicabo": "voluptas",
                    "aut": "dignissimos",
                    "dicta": "maiores",
                    "natus": "velit",
                },
                Name: sdk.String("Ms. Glen Zboncak"),
                Network: sdk.String("consequuntur"),
                NetworkInterfaces: []shared.NetworkInterface{
                    shared.NetworkInterface{
                        ExternalIP: sdk.String("officia"),
                        InternalIP: sdk.String("maxime"),
                        Network: sdk.String("dignissimos"),
                        Subnetwork: sdk.String("officia"),
                    },
                    shared.NetworkInterface{
                        ExternalIP: sdk.String("asperiores"),
                        InternalIP: sdk.String("nemo"),
                        Network: sdk.String("quae"),
                        Subnetwork: sdk.String("quaerat"),
                    },
                    shared.NetworkInterface{
                        ExternalIP: sdk.String("porro"),
                        InternalIP: sdk.String("quod"),
                        Network: sdk.String("labore"),
                        Subnetwork: sdk.String("ab"),
                    },
                    shared.NetworkInterface{
                        ExternalIP: sdk.String("adipisci"),
                        InternalIP: sdk.String("fuga"),
                        Network: sdk.String("id"),
                        Subnetwork: sdk.String("suscipit"),
                    },
                },
                NetworkTags: []string{
                    "culpa",
                },
                SecureBoot: sdk.Bool(false),
                ServiceAccount: sdk.String("est"),
                Subnetwork: sdk.String("recusandae"),
                TargetProject: sdk.String("totam"),
                Zone: sdk.String("fugiat"),
            },
        },
        AccessToken: sdk.String("vel"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("quos"),
        Fields: sdk.String("vel"),
        Key: sdk.String("labore"),
        MigratingVMID: sdk.String("possimus"),
        OauthToken: sdk.String("facilis"),
        Parent: "cum",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("commodi"),
        RequestID: sdk.String("in"),
        UploadType: sdk.String("corporis"),
        UploadProtocol: sdk.String("reiciendis"),
    }, operations.VmmigrationProjectsLocationsSourcesMigratingVmsCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```

## VmmigrationProjectsLocationsSourcesMigratingVmsCutoverJobsCancel

Initiates the cancellation of a running cutover job.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.VmmigrationProjectsLocationsSourcesMigratingVmsCutoverJobsCancel(ctx, operations.VmmigrationProjectsLocationsSourcesMigratingVmsCutoverJobsCancelRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        RequestBody: map[string]interface{}{
            "recusandae": "aliquid",
            "aperiam": "cum",
        },
        AccessToken: sdk.String("consectetur"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("exercitationem"),
        Fields: sdk.String("earum"),
        Key: sdk.String("facere"),
        Name: "Melba Homenick",
        OauthToken: sdk.String("saepe"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("necessitatibus"),
        UploadType: sdk.String("dolore"),
        UploadProtocol: sdk.String("sunt"),
    }, operations.VmmigrationProjectsLocationsSourcesMigratingVmsCutoverJobsCancelSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```

## VmmigrationProjectsLocationsSourcesMigratingVmsCutoverJobsCreate

Initiates a Cutover of a specific migrating VM. The returned LRO is completed when the cutover job resource is created and the job is initiated.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.VmmigrationProjectsLocationsSourcesMigratingVmsCutoverJobsCreate(ctx, operations.VmmigrationProjectsLocationsSourcesMigratingVmsCutoverJobsCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        CutoverJobInput: &shared.CutoverJobInput{
            ComputeEngineTargetDetails: &shared.ComputeEngineTargetDetails{
                AdditionalLicenses: []string{
                    "non",
                },
                AppliedLicense: &shared.AppliedLicense{
                    OsLicense: sdk.String("amet"),
                    Type: shared.AppliedLicenseTypeEnumTypeUnspecified.ToPointer(),
                },
                BootOption: shared.ComputeEngineTargetDetailsBootOptionEnumComputeEngineBootOptionEfi.ToPointer(),
                ComputeScheduling: &shared.ComputeScheduling{
                    AutomaticRestart: sdk.Bool(false),
                    MinNodeCpus: sdk.Int(950953),
                    NodeAffinities: []shared.SchedulingNodeAffinity{
                        shared.SchedulingNodeAffinity{
                            Key: sdk.String("consectetur"),
                            Operator: shared.SchedulingNodeAffinityOperatorEnumIn.ToPointer(),
                            Values: []string{
                                "laboriosam",
                                "ipsa",
                                "voluptates",
                            },
                        },
                        shared.SchedulingNodeAffinity{
                            Key: sdk.String("libero"),
                            Operator: shared.SchedulingNodeAffinityOperatorEnumOperatorUnspecified.ToPointer(),
                            Values: []string{
                                "similique",
                                "tempora",
                                "aspernatur",
                                "voluptas",
                            },
                        },
                        shared.SchedulingNodeAffinity{
                            Key: sdk.String("voluptas"),
                            Operator: shared.SchedulingNodeAffinityOperatorEnumIn.ToPointer(),
                            Values: []string{
                                "nobis",
                                "dolorum",
                            },
                        },
                        shared.SchedulingNodeAffinity{
                            Key: sdk.String("adipisci"),
                            Operator: shared.SchedulingNodeAffinityOperatorEnumNotIn.ToPointer(),
                            Values: []string{
                                "blanditiis",
                            },
                        },
                    },
                    OnHostMaintenance: shared.ComputeSchedulingOnHostMaintenanceEnumTerminate.ToPointer(),
                    RestartType: shared.ComputeSchedulingRestartTypeEnumRestartTypeUnspecified.ToPointer(),
                },
                DiskType: shared.ComputeEngineTargetDetailsDiskTypeEnumComputeEngineDiskTypeStandard.ToPointer(),
                Hostname: sdk.String("unfinished-sport.info"),
                Labels: map[string]string{
                    "cum": "blanditiis",
                },
                LicenseType: shared.ComputeEngineTargetDetailsLicenseTypeEnumComputeEngineLicenseTypePayg.ToPointer(),
                MachineType: sdk.String("hic"),
                MachineTypeSeries: sdk.String("nesciunt"),
                Metadata: map[string]string{
                    "corrupti": "pariatur",
                    "totam": "hic",
                    "exercitationem": "nobis",
                },
                NetworkInterfaces: []shared.NetworkInterface{
                    shared.NetworkInterface{
                        ExternalIP: sdk.String("rerum"),
                        InternalIP: sdk.String("sed"),
                        Network: sdk.String("reiciendis"),
                        Subnetwork: sdk.String("explicabo"),
                    },
                },
                NetworkTags: []string{
                    "facilis",
                    "voluptate",
                    "expedita",
                    "ab",
                },
                Project: sdk.String("iste"),
                SecureBoot: sdk.Bool(false),
                ServiceAccount: sdk.String("dolore"),
                VMName: sdk.String("laborum"),
                Zone: sdk.String("sed"),
            },
            ComputeEngineVMDetails: &shared.TargetVMDetailsInput{
                AppliedLicense: &shared.AppliedLicense{
                    OsLicense: sdk.String("in"),
                    Type: shared.AppliedLicenseTypeEnumNone.ToPointer(),
                },
                ComputeScheduling: &shared.ComputeScheduling{
                    AutomaticRestart: sdk.Bool(false),
                    MinNodeCpus: sdk.Int(696077),
                    NodeAffinities: []shared.SchedulingNodeAffinity{
                        shared.SchedulingNodeAffinity{
                            Key: sdk.String("voluptas"),
                            Operator: shared.SchedulingNodeAffinityOperatorEnumIn.ToPointer(),
                            Values: []string{
                                "suscipit",
                            },
                        },
                    },
                    OnHostMaintenance: shared.ComputeSchedulingOnHostMaintenanceEnumMigrate.ToPointer(),
                    RestartType: shared.ComputeSchedulingRestartTypeEnumNoAutomaticRestart.ToPointer(),
                },
                DiskType: shared.TargetVMDetailsDiskTypeEnumDiskTypeUnspecified.ToPointer(),
                ExternalIP: sdk.String("reiciendis"),
                InternalIP: sdk.String("perferendis"),
                Labels: map[string]string{
                    "maiores": "incidunt",
                    "sed": "provident",
                    "eius": "necessitatibus",
                },
                LicenseType: shared.TargetVMDetailsLicenseTypeEnumDefault.ToPointer(),
                MachineType: sdk.String("ea"),
                MachineTypeSeries: sdk.String("occaecati"),
                Metadata: map[string]string{
                    "voluptatibus": "tempora",
                    "tempora": "voluptate",
                    "reiciendis": "ex",
                },
                Name: sdk.String("Ethel Towne"),
                Network: sdk.String("quaerat"),
                NetworkInterfaces: []shared.NetworkInterface{
                    shared.NetworkInterface{
                        ExternalIP: sdk.String("ipsam"),
                        InternalIP: sdk.String("debitis"),
                        Network: sdk.String("rem"),
                        Subnetwork: sdk.String("sit"),
                    },
                    shared.NetworkInterface{
                        ExternalIP: sdk.String("nobis"),
                        InternalIP: sdk.String("error"),
                        Network: sdk.String("veniam"),
                        Subnetwork: sdk.String("minima"),
                    },
                },
                NetworkTags: []string{
                    "reiciendis",
                    "nulla",
                    "magni",
                    "aperiam",
                },
                SecureBoot: sdk.Bool(false),
                ServiceAccount: sdk.String("saepe"),
                Subnetwork: sdk.String("numquam"),
                TargetProject: sdk.String("veniam"),
                Zone: sdk.String("in"),
            },
            Error: &shared.Status{
                Code: sdk.Int(889234),
                Details: []map[string]interface{}{
                    map[string]interface{}{
                        "exercitationem": "praesentium",
                        "cum": "laboriosam",
                        "dolorum": "voluptatum",
                    },
                },
                Message: sdk.String("error"),
            },
            TargetDetails: &shared.TargetVMDetailsInput{
                AppliedLicense: &shared.AppliedLicense{
                    OsLicense: sdk.String("hic"),
                    Type: shared.AppliedLicenseTypeEnumPayg.ToPointer(),
                },
                ComputeScheduling: &shared.ComputeScheduling{
                    AutomaticRestart: sdk.Bool(false),
                    MinNodeCpus: sdk.Int(892863),
                    NodeAffinities: []shared.SchedulingNodeAffinity{
                        shared.SchedulingNodeAffinity{
                            Key: sdk.String("dolorum"),
                            Operator: shared.SchedulingNodeAffinityOperatorEnumIn.ToPointer(),
                            Values: []string{
                                "dolorum",
                                "corrupti",
                                "accusamus",
                            },
                        },
                    },
                    OnHostMaintenance: shared.ComputeSchedulingOnHostMaintenanceEnumOnHostMaintenanceUnspecified.ToPointer(),
                    RestartType: shared.ComputeSchedulingRestartTypeEnumAutomaticRestart.ToPointer(),
                },
                DiskType: shared.TargetVMDetailsDiskTypeEnumDiskTypeUnspecified.ToPointer(),
                ExternalIP: sdk.String("ut"),
                InternalIP: sdk.String("fugiat"),
                Labels: map[string]string{
                    "culpa": "expedita",
                },
                LicenseType: shared.TargetVMDetailsLicenseTypeEnumDefault.ToPointer(),
                MachineType: sdk.String("consequatur"),
                MachineTypeSeries: sdk.String("esse"),
                Metadata: map[string]string{
                    "sit": "voluptatum",
                    "quas": "repudiandae",
                },
                Name: sdk.String("Janet Kuvalis"),
                Network: sdk.String("sit"),
                NetworkInterfaces: []shared.NetworkInterface{
                    shared.NetworkInterface{
                        ExternalIP: sdk.String("nostrum"),
                        InternalIP: sdk.String("saepe"),
                        Network: sdk.String("error"),
                        Subnetwork: sdk.String("consequatur"),
                    },
                    shared.NetworkInterface{
                        ExternalIP: sdk.String("incidunt"),
                        InternalIP: sdk.String("reiciendis"),
                        Network: sdk.String("dolorem"),
                        Subnetwork: sdk.String("harum"),
                    },
                },
                NetworkTags: []string{
                    "architecto",
                },
                SecureBoot: sdk.Bool(false),
                ServiceAccount: sdk.String("occaecati"),
                Subnetwork: sdk.String("labore"),
                TargetProject: sdk.String("quidem"),
                Zone: sdk.String("atque"),
            },
        },
        AccessToken: sdk.String("laborum"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("tenetur"),
        CutoverJobID: sdk.String("laboriosam"),
        Fields: sdk.String("alias"),
        Key: sdk.String("amet"),
        OauthToken: sdk.String("deserunt"),
        Parent: "voluptate",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("unde"),
        RequestID: sdk.String("reiciendis"),
        UploadType: sdk.String("provident"),
        UploadProtocol: sdk.String("repellendus"),
    }, operations.VmmigrationProjectsLocationsSourcesMigratingVmsCutoverJobsCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```

## VmmigrationProjectsLocationsSourcesMigratingVmsCutoverJobsList

Lists CutoverJobs of a given migrating VM.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.VmmigrationProjectsLocationsSourcesMigratingVmsCutoverJobsList(ctx, operations.VmmigrationProjectsLocationsSourcesMigratingVmsCutoverJobsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("voluptates"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("est"),
        Fields: sdk.String("quidem"),
        Filter: sdk.String("reprehenderit"),
        Key: sdk.String("facere"),
        OauthToken: sdk.String("fuga"),
        OrderBy: sdk.String("praesentium"),
        PageSize: sdk.Int64(648598),
        PageToken: sdk.String("veniam"),
        Parent: "voluptatem",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quisquam"),
        UploadType: sdk.String("repudiandae"),
        UploadProtocol: sdk.String("quasi"),
    }, operations.VmmigrationProjectsLocationsSourcesMigratingVmsCutoverJobsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListCutoverJobsResponse != nil {
        // handle response
    }
}
```

## VmmigrationProjectsLocationsSourcesMigratingVmsFinalizeMigration

Marks a migration as completed, deleting migration resources that are no longer being used. Only applicable after cutover is done.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.VmmigrationProjectsLocationsSourcesMigratingVmsFinalizeMigration(ctx, operations.VmmigrationProjectsLocationsSourcesMigratingVmsFinalizeMigrationRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        RequestBody: map[string]interface{}{
            "asperiores": "totam",
            "suscipit": "quidem",
        },
        AccessToken: sdk.String("maxime"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("esse"),
        Fields: sdk.String("amet"),
        Key: sdk.String("assumenda"),
        MigratingVM: "ea",
        OauthToken: sdk.String("atque"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("error"),
        UploadType: sdk.String("officiis"),
        UploadProtocol: sdk.String("officiis"),
    }, operations.VmmigrationProjectsLocationsSourcesMigratingVmsFinalizeMigrationSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```

## VmmigrationProjectsLocationsSourcesMigratingVmsList

Lists MigratingVms in a given Source.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.VmmigrationProjectsLocationsSourcesMigratingVmsList(ctx, operations.VmmigrationProjectsLocationsSourcesMigratingVmsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("natus"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("aspernatur"),
        Fields: sdk.String("ex"),
        Filter: sdk.String("maiores"),
        Key: sdk.String("corrupti"),
        OauthToken: sdk.String("at"),
        OrderBy: sdk.String("error"),
        PageSize: sdk.Int64(502721),
        PageToken: sdk.String("suscipit"),
        Parent: "repudiandae",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("atque"),
        UploadType: sdk.String("atque"),
        UploadProtocol: sdk.String("sunt"),
        View: operations.VmmigrationProjectsLocationsSourcesMigratingVmsListViewEnumMigratingVMViewFull.ToPointer(),
    }, operations.VmmigrationProjectsLocationsSourcesMigratingVmsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListMigratingVmsResponse != nil {
        // handle response
    }
}
```

## VmmigrationProjectsLocationsSourcesMigratingVmsPauseMigration

Pauses a migration for a VM. If cycle tasks are running they will be cancelled, preserving source task data. Further replication cycles will not be triggered while the VM is paused.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.VmmigrationProjectsLocationsSourcesMigratingVmsPauseMigration(ctx, operations.VmmigrationProjectsLocationsSourcesMigratingVmsPauseMigrationRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        RequestBody: map[string]interface{}{
            "labore": "reiciendis",
            "doloremque": "repudiandae",
            "dicta": "accusantium",
            "beatae": "dolores",
        },
        AccessToken: sdk.String("enim"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("velit"),
        Fields: sdk.String("a"),
        Key: sdk.String("molestias"),
        MigratingVM: "magnam",
        OauthToken: sdk.String("saepe"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("consequuntur"),
        UploadType: sdk.String("occaecati"),
        UploadProtocol: sdk.String("officiis"),
    }, operations.VmmigrationProjectsLocationsSourcesMigratingVmsPauseMigrationSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```

## VmmigrationProjectsLocationsSourcesMigratingVmsReplicationCyclesList

Lists ReplicationCycles in a given MigratingVM.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.VmmigrationProjectsLocationsSourcesMigratingVmsReplicationCyclesList(ctx, operations.VmmigrationProjectsLocationsSourcesMigratingVmsReplicationCyclesListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("in"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("eveniet"),
        Fields: sdk.String("occaecati"),
        Filter: sdk.String("consequuntur"),
        Key: sdk.String("fugit"),
        OauthToken: sdk.String("id"),
        OrderBy: sdk.String("quis"),
        PageSize: sdk.Int64(440264),
        PageToken: sdk.String("error"),
        Parent: "illo",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("corporis"),
        UploadType: sdk.String("quidem"),
        UploadProtocol: sdk.String("eveniet"),
    }, operations.VmmigrationProjectsLocationsSourcesMigratingVmsReplicationCyclesListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListReplicationCyclesResponse != nil {
        // handle response
    }
}
```

## VmmigrationProjectsLocationsSourcesMigratingVmsResumeMigration

Resumes a migration for a VM. When called on a paused migration, will start the process of uploading data and creating snapshots; when called on a completed cut-over migration, will update the migration to active state and start the process of uploading data and creating snapshots.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.VmmigrationProjectsLocationsSourcesMigratingVmsResumeMigration(ctx, operations.VmmigrationProjectsLocationsSourcesMigratingVmsResumeMigrationRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        RequestBody: map[string]interface{}{
            "doloremque": "iure",
            "ipsa": "totam",
            "quae": "molestiae",
            "eveniet": "qui",
        },
        AccessToken: sdk.String("cum"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("necessitatibus"),
        Fields: sdk.String("ratione"),
        Key: sdk.String("laborum"),
        MigratingVM: "distinctio",
        OauthToken: sdk.String("voluptatum"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("rem"),
        UploadType: sdk.String("aliquam"),
        UploadProtocol: sdk.String("ad"),
    }, operations.VmmigrationProjectsLocationsSourcesMigratingVmsResumeMigrationSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```

## VmmigrationProjectsLocationsSourcesMigratingVmsStartMigration

Starts migration for a VM. Starts the process of uploading data and creating snapshots, in replication cycles scheduled by the policy.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.VmmigrationProjectsLocationsSourcesMigratingVmsStartMigration(ctx, operations.VmmigrationProjectsLocationsSourcesMigratingVmsStartMigrationRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        RequestBody: map[string]interface{}{
            "corporis": "perspiciatis",
        },
        AccessToken: sdk.String("nihil"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("voluptas"),
        Fields: sdk.String("alias"),
        Key: sdk.String("maiores"),
        MigratingVM: "reiciendis",
        OauthToken: sdk.String("dolores"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("id"),
        UploadType: sdk.String("minima"),
        UploadProtocol: sdk.String("dolore"),
    }, operations.VmmigrationProjectsLocationsSourcesMigratingVmsStartMigrationSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```

## VmmigrationProjectsLocationsSourcesUtilizationReportsCreate

Creates a new UtilizationReport.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.VmmigrationProjectsLocationsSourcesUtilizationReportsCreate(ctx, operations.VmmigrationProjectsLocationsSourcesUtilizationReportsCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        UtilizationReportInput: &shared.UtilizationReportInput{
            DisplayName: sdk.String("nesciunt"),
            Error: &shared.Status{
                Code: sdk.Int(63207),
                Details: []map[string]interface{}{
                    map[string]interface{}{
                        "quaerat": "molestiae",
                        "ex": "ut",
                        "culpa": "adipisci",
                    },
                    map[string]interface{}{
                        "laudantium": "eum",
                        "nemo": "recusandae",
                        "esse": "provident",
                        "quis": "eum",
                    },
                    map[string]interface{}{
                        "provident": "aspernatur",
                        "ullam": "quasi",
                        "animi": "nostrum",
                        "mollitia": "provident",
                    },
                    map[string]interface{}{
                        "animi": "ex",
                        "aliquid": "accusantium",
                        "repellat": "doloribus",
                        "ullam": "in",
                    },
                },
                Message: sdk.String("nam"),
            },
            TimeFrame: shared.UtilizationReportTimeFrameEnumYear.ToPointer(),
            Vms: []shared.VMUtilizationInfoInput{
                shared.VMUtilizationInfoInput{
                    Utilization: &shared.VMUtilizationMetrics{
                        CPUAverage: sdk.Int(672041),
                        CPUAveragePercent: sdk.Int(813054),
                        CPUMax: sdk.Int(266697),
                        CPUMaxPercent: sdk.Int(976226),
                        DiskIoRateAverage: sdk.String("molestias"),
                        DiskIoRateAverageKbps: sdk.String("officiis"),
                        DiskIoRateMax: sdk.String("sapiente"),
                        DiskIoRateMaxKbps: sdk.String("cumque"),
                        MemoryAverage: sdk.Int(113486),
                        MemoryAveragePercent: sdk.Int(698249),
                        MemoryMax: sdk.Int(272229),
                        MemoryMaxPercent: sdk.Int(335498),
                        NetworkThroughputAverage: sdk.String("inventore"),
                        NetworkThroughputAverageKbps: sdk.String("fugit"),
                        NetworkThroughputMax: sdk.String("cumque"),
                        NetworkThroughputMaxKbps: sdk.String("quae"),
                    },
                    VMID: sdk.String("perferendis"),
                    VmwareVMDetails: &shared.VmwareVMDetailsInput{
                        CommittedStorage: sdk.String("velit"),
                        CommittedStorageMb: sdk.String("aspernatur"),
                        CPUCount: sdk.Int(432281),
                        DatacenterDescription: sdk.String("eius"),
                        DatacenterID: sdk.String("rem"),
                        DiskCount: sdk.Int(871083),
                        DisplayName: sdk.String("impedit"),
                        GuestDescription: sdk.String("eos"),
                        MemoryMb: sdk.Int(958741),
                        PowerState: shared.VmwareVMDetailsPowerStateEnumOn.ToPointer(),
                        UUID: sdk.String("15199ebf-d0e9-4fe6-8632-ca3aed011799"),
                        VMID: sdk.String("suscipit"),
                    },
                },
                shared.VMUtilizationInfoInput{
                    Utilization: &shared.VMUtilizationMetrics{
                        CPUAverage: sdk.Int(241557),
                        CPUAveragePercent: sdk.Int(96562),
                        CPUMax: sdk.Int(169025),
                        CPUMaxPercent: sdk.Int(984934),
                        DiskIoRateAverage: sdk.String("nulla"),
                        DiskIoRateAverageKbps: sdk.String("necessitatibus"),
                        DiskIoRateMax: sdk.String("ipsa"),
                        DiskIoRateMaxKbps: sdk.String("tempora"),
                        MemoryAverage: sdk.Int(470621),
                        MemoryAveragePercent: sdk.Int(473190),
                        MemoryMax: sdk.Int(115834),
                        MemoryMaxPercent: sdk.Int(479754),
                        NetworkThroughputAverage: sdk.String("esse"),
                        NetworkThroughputAverageKbps: sdk.String("praesentium"),
                        NetworkThroughputMax: sdk.String("maiores"),
                        NetworkThroughputMaxKbps: sdk.String("reiciendis"),
                    },
                    VMID: sdk.String("vel"),
                    VmwareVMDetails: &shared.VmwareVMDetailsInput{
                        CommittedStorage: sdk.String("architecto"),
                        CommittedStorageMb: sdk.String("fugiat"),
                        CPUCount: sdk.Int(39650),
                        DatacenterDescription: sdk.String("dicta"),
                        DatacenterID: sdk.String("odio"),
                        DiskCount: sdk.Int(271252),
                        DisplayName: sdk.String("esse"),
                        GuestDescription: sdk.String("ex"),
                        MemoryMb: sdk.Int(235263),
                        PowerState: shared.VmwareVMDetailsPowerStateEnumOn.ToPointer(),
                        UUID: sdk.String("0a15db6a-6606-459a-9ade-aab5851d6c64"),
                        VMID: sdk.String("ad"),
                    },
                },
                shared.VMUtilizationInfoInput{
                    Utilization: &shared.VMUtilizationMetrics{
                        CPUAverage: sdk.Int(713927),
                        CPUAveragePercent: sdk.Int(29950),
                        CPUMax: sdk.Int(561577),
                        CPUMaxPercent: sdk.Int(737254),
                        DiskIoRateAverage: sdk.String("aliquid"),
                        DiskIoRateAverageKbps: sdk.String("beatae"),
                        DiskIoRateMax: sdk.String("voluptatum"),
                        DiskIoRateMaxKbps: sdk.String("omnis"),
                        MemoryAverage: sdk.Int(85233),
                        MemoryAveragePercent: sdk.Int(703218),
                        MemoryMax: sdk.Int(665678),
                        MemoryMaxPercent: sdk.Int(634786),
                        NetworkThroughputAverage: sdk.String("voluptatem"),
                        NetworkThroughputAverageKbps: sdk.String("sapiente"),
                        NetworkThroughputMax: sdk.String("officiis"),
                        NetworkThroughputMaxKbps: sdk.String("architecto"),
                    },
                    VMID: sdk.String("fuga"),
                    VmwareVMDetails: &shared.VmwareVMDetailsInput{
                        CommittedStorage: sdk.String("pariatur"),
                        CommittedStorageMb: sdk.String("debitis"),
                        CPUCount: sdk.Int(29190),
                        DatacenterDescription: sdk.String("alias"),
                        DatacenterID: sdk.String("deleniti"),
                        DiskCount: sdk.Int(937219),
                        DisplayName: sdk.String("ex"),
                        GuestDescription: sdk.String("sapiente"),
                        MemoryMb: sdk.Int(524184),
                        PowerState: shared.VmwareVMDetailsPowerStateEnumSuspended.ToPointer(),
                        UUID: sdk.String("5f350d8c-db5a-4341-8143-010421813d52"),
                        VMID: sdk.String("ipsa"),
                    },
                },
            },
        },
        AccessToken: sdk.String("quas"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("impedit"),
        Fields: sdk.String("officiis"),
        Key: sdk.String("esse"),
        OauthToken: sdk.String("necessitatibus"),
        Parent: "sed",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("veniam"),
        RequestID: sdk.String("nesciunt"),
        UploadType: sdk.String("expedita"),
        UploadProtocol: sdk.String("eum"),
        UtilizationReportID: sdk.String("vel"),
    }, operations.VmmigrationProjectsLocationsSourcesUtilizationReportsCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```

## VmmigrationProjectsLocationsSourcesUtilizationReportsList

Lists Utilization Reports of the given Source.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.VmmigrationProjectsLocationsSourcesUtilizationReportsList(ctx, operations.VmmigrationProjectsLocationsSourcesUtilizationReportsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("magnam"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("ab"),
        Fields: sdk.String("porro"),
        Filter: sdk.String("autem"),
        Key: sdk.String("nobis"),
        OauthToken: sdk.String("laboriosam"),
        OrderBy: sdk.String("recusandae"),
        PageSize: sdk.Int64(160393),
        PageToken: sdk.String("voluptatem"),
        Parent: "exercitationem",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("necessitatibus"),
        UploadType: sdk.String("quasi"),
        UploadProtocol: sdk.String("nisi"),
        View: operations.VmmigrationProjectsLocationsSourcesUtilizationReportsListViewEnumFull.ToPointer(),
    }, operations.VmmigrationProjectsLocationsSourcesUtilizationReportsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListUtilizationReportsResponse != nil {
        // handle response
    }
}
```

## VmmigrationProjectsLocationsTargetProjectsCreate

Creates a new TargetProject in a given project. NOTE: TargetProject is a global resource; hence the only supported value for location is `global`.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.VmmigrationProjectsLocationsTargetProjectsCreate(ctx, operations.VmmigrationProjectsLocationsTargetProjectsCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        TargetProjectInput: &shared.TargetProjectInput{
            Description: sdk.String("est"),
            Project: sdk.String("harum"),
        },
        AccessToken: sdk.String("sequi"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("repudiandae"),
        Fields: sdk.String("optio"),
        Key: sdk.String("occaecati"),
        OauthToken: sdk.String("nemo"),
        Parent: "voluptate",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("blanditiis"),
        RequestID: sdk.String("officia"),
        TargetProjectID: sdk.String("voluptas"),
        UploadType: sdk.String("numquam"),
        UploadProtocol: sdk.String("nemo"),
    }, operations.VmmigrationProjectsLocationsTargetProjectsCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```

## VmmigrationProjectsLocationsTargetProjectsDelete

Deletes a single TargetProject. NOTE: TargetProject is a global resource; hence the only supported value for location is `global`.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.VmmigrationProjectsLocationsTargetProjectsDelete(ctx, operations.VmmigrationProjectsLocationsTargetProjectsDeleteRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("eius"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("ducimus"),
        Fields: sdk.String("nesciunt"),
        Key: sdk.String("fuga"),
        Name: "Randall Boyle",
        OauthToken: sdk.String("dicta"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("nisi"),
        RequestID: sdk.String("consequuntur"),
        UploadType: sdk.String("consectetur"),
        UploadProtocol: sdk.String("aperiam"),
    }, operations.VmmigrationProjectsLocationsTargetProjectsDeleteSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```

## VmmigrationProjectsLocationsTargetProjectsGet

Gets details of a single TargetProject. NOTE: TargetProject is a global resource; hence the only supported value for location is `global`.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.VmmigrationProjectsLocationsTargetProjectsGet(ctx, operations.VmmigrationProjectsLocationsTargetProjectsGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("reiciendis"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("alias"),
        Fields: sdk.String("omnis"),
        Key: sdk.String("eos"),
        Name: "Miss Joey Dach",
        OauthToken: sdk.String("voluptatibus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("distinctio"),
        UploadType: sdk.String("omnis"),
        UploadProtocol: sdk.String("delectus"),
        View: operations.VmmigrationProjectsLocationsTargetProjectsGetViewEnumUtilizationReportViewUnspecified.ToPointer(),
    }, operations.VmmigrationProjectsLocationsTargetProjectsGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TargetProject != nil {
        // handle response
    }
}
```

## VmmigrationProjectsLocationsTargetProjectsList

Lists TargetProjects in a given project. NOTE: TargetProject is a global resource; hence the only supported value for location is `global`.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.VmmigrationProjectsLocationsTargetProjectsList(ctx, operations.VmmigrationProjectsLocationsTargetProjectsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("maxime"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("temporibus"),
        Fields: sdk.String("quos"),
        Filter: sdk.String("commodi"),
        Key: sdk.String("itaque"),
        OauthToken: sdk.String("commodi"),
        OrderBy: sdk.String("totam"),
        PageSize: sdk.Int64(936618),
        PageToken: sdk.String("modi"),
        Parent: "nam",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("vero"),
        UploadType: sdk.String("voluptatem"),
        UploadProtocol: sdk.String("ipsam"),
    }, operations.VmmigrationProjectsLocationsTargetProjectsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTargetProjectsResponse != nil {
        // handle response
    }
}
```

## VmmigrationProjectsLocationsTargetProjectsPatch

Updates the parameters of a single TargetProject. NOTE: TargetProject is a global resource; hence the only supported value for location is `global`.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.VmmigrationProjectsLocationsTargetProjectsPatch(ctx, operations.VmmigrationProjectsLocationsTargetProjectsPatchRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        TargetProjectInput: &shared.TargetProjectInput{
            Description: sdk.String("alias"),
            Project: sdk.String("quasi"),
        },
        AccessToken: sdk.String("non"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("enim"),
        Fields: sdk.String("sint"),
        Key: sdk.String("nulla"),
        Name: "Claude Hickle",
        OauthToken: sdk.String("quis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("sint"),
        RequestID: sdk.String("accusamus"),
        UpdateMask: sdk.String("impedit"),
        UploadType: sdk.String("hic"),
        UploadProtocol: sdk.String("necessitatibus"),
    }, operations.VmmigrationProjectsLocationsTargetProjectsPatchSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```
