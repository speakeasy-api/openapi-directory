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
            Labels: map[string]string{
                "possimus": "aut",
                "quasi": "error",
                "temporibus": "laborum",
            },
            Vmware: &shared.VmwareSourceDetails{
                Password: sdk.String("quasi"),
                Thumbprint: sdk.String("reiciendis"),
                Username: sdk.String("Weston_Thiel"),
                VcenterIP: sdk.String("voluptatibus"),
            },
        },
        AccessToken: sdk.String("ipsa"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("voluptate"),
        Fields: sdk.String("cum"),
        Key: sdk.String("perferendis"),
        OauthToken: sdk.String("doloremque"),
        Parent: "reprehenderit",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ut"),
        RequestID: sdk.String("maiores"),
        SourceID: sdk.String("dicta"),
        UploadType: sdk.String("corporis"),
        UploadProtocol: sdk.String("dolore"),
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
                    ReleaseNotesURI: sdk.String("dicta"),
                    URI: sdk.String("https://frugal-sympathy.info"),
                    Version: sdk.String("repudiandae"),
                },
                NewDeployableAppliance: &shared.ApplianceVersion{
                    Critical: sdk.Bool(false),
                    ReleaseNotesURI: sdk.String("quae"),
                    URI: sdk.String("http://repentant-minnow.name"),
                    Version: sdk.String("pariatur"),
                },
            },
            Error: &shared.Status{
                Code: sdk.Int(265389),
                Details: []map[string]interface{}{
                    map[string]interface{}{
                        "voluptates": "quasi",
                        "repudiandae": "sint",
                        "veritatis": "itaque",
                    },
                    map[string]interface{}{
                        "enim": "consequatur",
                        "est": "quibusdam",
                    },
                    map[string]interface{}{
                        "deserunt": "distinctio",
                    },
                },
                Message: sdk.String("quibusdam"),
            },
            RegistrationID: sdk.String("labore"),
            ServiceAccount: sdk.String("modi"),
            UpgradeStatus: &shared.UpgradeStatus{
                Error: &shared.Status{
                    Code: sdk.Int(183191),
                    Details: []map[string]interface{}{
                        map[string]interface{}{
                            "quos": "perferendis",
                            "magni": "assumenda",
                            "ipsam": "alias",
                        },
                        map[string]interface{}{
                            "dolorum": "excepturi",
                        },
                    },
                    Message: sdk.String("tempora"),
                },
                PreviousVersion: sdk.String("facilis"),
                StartTime: sdk.String("tempore"),
                State: shared.UpgradeStatusStateEnumRunning.ToPointer(),
                Version: sdk.String("delectus"),
            },
            Version: sdk.String("eum"),
        },
        AccessToken: sdk.String("non"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("sint"),
        DatacenterConnectorID: sdk.String("aliquid"),
        Fields: sdk.String("provident"),
        Key: sdk.String("necessitatibus"),
        OauthToken: sdk.String("sint"),
        Parent: "officia",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dolor"),
        RequestID: sdk.String("debitis"),
        UploadType: sdk.String("a"),
        UploadProtocol: sdk.String("dolorum"),
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
        AccessToken: sdk.String("in"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("maiores"),
        Fields: sdk.String("rerum"),
        Filter: sdk.String("dicta"),
        Key: sdk.String("magnam"),
        OauthToken: sdk.String("cumque"),
        OrderBy: sdk.String("facere"),
        PageSize: sdk.Int64(411820),
        PageToken: sdk.String("aliquid"),
        Parent: "laborum",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("accusamus"),
        UploadType: sdk.String("non"),
        UploadProtocol: sdk.String("occaecati"),
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        UpgradeApplianceRequest: &shared.UpgradeApplianceRequest{
            RequestID: sdk.String("accusamus"),
        },
        AccessToken: sdk.String("delectus"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("provident"),
        DatacenterConnector: "nam",
        Fields: sdk.String("id"),
        Key: sdk.String("blanditiis"),
        OauthToken: sdk.String("deleniti"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("sapiente"),
        UploadType: sdk.String("amet"),
        UploadProtocol: sdk.String("deserunt"),
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
        AccessToken: sdk.String("vel"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("omnis"),
        Fields: sdk.String("molestiae"),
        ForceRefresh: sdk.Bool(false),
        Key: sdk.String("perferendis"),
        OauthToken: sdk.String("nihil"),
        PageSize: sdk.Int64(301575),
        PageToken: sdk.String("distinctio"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("id"),
        Source: "labore",
        UploadType: sdk.String("labore"),
        UploadProtocol: sdk.String("suscipit"),
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
        AccessToken: sdk.String("nobis"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("vero"),
        Fields: sdk.String("aspernatur"),
        Filter: sdk.String("architecto"),
        Key: sdk.String("magnam"),
        OauthToken: sdk.String("et"),
        OrderBy: sdk.String("excepturi"),
        PageSize: sdk.Int64(354047),
        PageToken: sdk.String("provident"),
        Parent: "quos",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("sint"),
        UploadType: sdk.String("accusantium"),
        UploadProtocol: sdk.String("mollitia"),
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
                    "ad",
                    "eum",
                    "dolor",
                },
                AppliedLicense: &shared.AppliedLicense{
                    OsLicense: sdk.String("necessitatibus"),
                    Type: shared.AppliedLicenseTypeEnumTypeUnspecified.ToPointer(),
                },
                BootOption: shared.ComputeEngineTargetDetailsBootOptionEnumComputeEngineBootOptionEfi.ToPointer(),
                ComputeScheduling: &shared.ComputeScheduling{
                    MinNodeCpus: sdk.Int(97260),
                    NodeAffinities: []shared.SchedulingNodeAffinity{
                        shared.SchedulingNodeAffinity{
                            Key: sdk.String("doloribus"),
                            Operator: shared.SchedulingNodeAffinityOperatorEnumNotIn.ToPointer(),
                            Values: []string{
                                "maxime",
                                "deleniti",
                            },
                        },
                        shared.SchedulingNodeAffinity{
                            Key: sdk.String("facilis"),
                            Operator: shared.SchedulingNodeAffinityOperatorEnumIn.ToPointer(),
                            Values: []string{
                                "architecto",
                            },
                        },
                    },
                    OnHostMaintenance: shared.ComputeSchedulingOnHostMaintenanceEnumMigrate.ToPointer(),
                    RestartType: shared.ComputeSchedulingRestartTypeEnumAutomaticRestart.ToPointer(),
                },
                DiskType: shared.ComputeEngineTargetDetailsDiskTypeEnumComputeEngineDiskTypeSsd.ToPointer(),
                Hostname: sdk.String("knobby-zither.org"),
                Labels: map[string]string{
                    "saepe": "pariatur",
                },
                LicenseType: shared.ComputeEngineTargetDetailsLicenseTypeEnumComputeEngineLicenseTypeDefault.ToPointer(),
                MachineType: sdk.String("consequuntur"),
                MachineTypeSeries: sdk.String("praesentium"),
                Metadata: map[string]string{
                    "magni": "sunt",
                    "quo": "illum",
                    "pariatur": "maxime",
                },
                NetworkInterfaces: []shared.NetworkInterface{
                    shared.NetworkInterface{
                        ExternalIP: sdk.String("excepturi"),
                        InternalIP: sdk.String("odit"),
                        Network: sdk.String("ea"),
                        Subnetwork: sdk.String("accusantium"),
                    },
                    shared.NetworkInterface{
                        ExternalIP: sdk.String("ab"),
                        InternalIP: sdk.String("maiores"),
                        Network: sdk.String("quidem"),
                        Subnetwork: sdk.String("ipsam"),
                    },
                },
                NetworkTags: []string{
                    "autem",
                    "nam",
                },
                Project: sdk.String("eaque"),
                SecureBoot: sdk.Bool(false),
                ServiceAccount: sdk.String("pariatur"),
                VMName: sdk.String("nemo"),
                Zone: sdk.String("voluptatibus"),
            },
            Error: &shared.Status{
                Code: sdk.Int(16627),
                Details: []map[string]interface{}{
                    map[string]interface{}{
                        "aut": "cumque",
                    },
                    map[string]interface{}{
                        "hic": "libero",
                        "nobis": "dolores",
                    },
                    map[string]interface{}{
                        "totam": "dignissimos",
                        "eaque": "quis",
                    },
                    map[string]interface{}{
                        "eos": "perferendis",
                    },
                },
                Message: sdk.String("dolores"),
            },
        },
        AccessToken: sdk.String("minus"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("dolor"),
        CloneJobID: sdk.String("vero"),
        Fields: sdk.String("nostrum"),
        Key: sdk.String("hic"),
        OauthToken: sdk.String("recusandae"),
        Parent: "omnis",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("facilis"),
        RequestID: sdk.String("perspiciatis"),
        UploadType: sdk.String("voluptatem"),
        UploadProtocol: sdk.String("porro"),
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
        AccessToken: sdk.String("blanditiis"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("eaque"),
        Fields: sdk.String("occaecati"),
        Filter: sdk.String("rerum"),
        Key: sdk.String("adipisci"),
        OauthToken: sdk.String("asperiores"),
        OrderBy: sdk.String("earum"),
        PageSize: sdk.Int64(267262),
        PageToken: sdk.String("iste"),
        Parent: "dolorum",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("deleniti"),
        UploadType: sdk.String("pariatur"),
        UploadProtocol: sdk.String("provident"),
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
                CommittedStorageBytes: sdk.String("libero"),
                Firmware: shared.AwsSourceVMDetailsFirmwareEnumBios.ToPointer(),
            },
            ComputeEngineTargetDefaults: &shared.ComputeEngineTargetDefaultsInput{
                AdditionalLicenses: []string{
                    "quos",
                    "aliquid",
                },
                AppliedLicense: &shared.AppliedLicense{
                    OsLicense: sdk.String("dolorem"),
                    Type: shared.AppliedLicenseTypeEnumTypeUnspecified.ToPointer(),
                },
                ComputeScheduling: &shared.ComputeScheduling{
                    MinNodeCpus: sdk.Int(222443),
                    NodeAffinities: []shared.SchedulingNodeAffinity{
                        shared.SchedulingNodeAffinity{
                            Key: sdk.String("ipsum"),
                            Operator: shared.SchedulingNodeAffinityOperatorEnumNotIn.ToPointer(),
                            Values: []string{
                                "cum",
                                "voluptate",
                                "dignissimos",
                            },
                        },
                    },
                    OnHostMaintenance: shared.ComputeSchedulingOnHostMaintenanceEnumMigrate.ToPointer(),
                    RestartType: shared.ComputeSchedulingRestartTypeEnumRestartTypeUnspecified.ToPointer(),
                },
                DiskType: shared.ComputeEngineTargetDefaultsDiskTypeEnumComputeEngineDiskTypeSsd.ToPointer(),
                Hostname: sdk.String("expensive-bite.com"),
                Labels: map[string]string{
                    "iure": "odio",
                },
                LicenseType: shared.ComputeEngineTargetDefaultsLicenseTypeEnumComputeEngineLicenseTypeDefault.ToPointer(),
                MachineType: sdk.String("accusamus"),
                MachineTypeSeries: sdk.String("quidem"),
                Metadata: map[string]string{
                    "voluptas": "natus",
                    "eos": "atque",
                    "sit": "fugiat",
                    "ab": "soluta",
                },
                NetworkInterfaces: []shared.NetworkInterface{
                    shared.NetworkInterface{
                        ExternalIP: sdk.String("iusto"),
                        InternalIP: sdk.String("voluptate"),
                        Network: sdk.String("dolorum"),
                        Subnetwork: sdk.String("deleniti"),
                    },
                    shared.NetworkInterface{
                        ExternalIP: sdk.String("omnis"),
                        InternalIP: sdk.String("necessitatibus"),
                        Network: sdk.String("distinctio"),
                        Subnetwork: sdk.String("asperiores"),
                    },
                    shared.NetworkInterface{
                        ExternalIP: sdk.String("nihil"),
                        InternalIP: sdk.String("ipsum"),
                        Network: sdk.String("voluptate"),
                        Subnetwork: sdk.String("id"),
                    },
                },
                NetworkTags: []string{
                    "eius",
                    "aspernatur",
                    "perferendis",
                    "amet",
                },
                SecureBoot: sdk.Bool(false),
                ServiceAccount: sdk.String("optio"),
                TargetProject: sdk.String("accusamus"),
                VMName: sdk.String("ad"),
                Zone: sdk.String("saepe"),
            },
            CurrentSyncInfo: &shared.ReplicationCycleInput{
                CycleNumber: sdk.Int(383464),
                EndTime: sdk.String("deserunt"),
                Error: &shared.Status{
                    Code: sdk.Int(588317),
                    Details: []map[string]interface{}{
                        map[string]interface{}{
                            "totam": "similique",
                            "alias": "at",
                            "quaerat": "tempora",
                            "vel": "quod",
                        },
                        map[string]interface{}{
                            "qui": "dolorum",
                            "a": "esse",
                            "harum": "iusto",
                            "ipsum": "quisquam",
                        },
                    },
                    Message: sdk.String("tenetur"),
                },
                Name: sdk.String("Kelli Thompson"),
                ProgressPercent: sdk.Int(213312),
                StartTime: sdk.String("sapiente"),
                State: shared.ReplicationCycleStateEnumPaused.ToPointer(),
                Steps: []shared.CycleStep{
                    shared.CycleStep{
                        EndTime: sdk.String("sit"),
                        InitializingReplication: map[string]interface{}{
                            "neque": "sed",
                            "vel": "libero",
                            "voluptas": "deserunt",
                        },
                        PostProcessing: map[string]interface{}{
                            "ipsum": "incidunt",
                            "qui": "cupiditate",
                        },
                        Replicating: &shared.ReplicatingStep{
                            LastThirtyMinutesAverageBytesPerSecond: sdk.String("maxime"),
                            LastTwoMinutesAverageBytesPerSecond: sdk.String("pariatur"),
                            ReplicatedBytes: sdk.String("soluta"),
                            TotalBytes: sdk.String("dicta"),
                        },
                        StartTime: sdk.String("laborum"),
                    },
                    shared.CycleStep{
                        EndTime: sdk.String("totam"),
                        InitializingReplication: map[string]interface{}{
                            "aspernatur": "dolores",
                            "distinctio": "facilis",
                        },
                        PostProcessing: map[string]interface{}{
                            "quam": "molestias",
                            "temporibus": "qui",
                        },
                        Replicating: &shared.ReplicatingStep{
                            LastThirtyMinutesAverageBytesPerSecond: sdk.String("neque"),
                            LastTwoMinutesAverageBytesPerSecond: sdk.String("fugit"),
                            ReplicatedBytes: sdk.String("magni"),
                            TotalBytes: sdk.String("odio"),
                        },
                        StartTime: sdk.String("sunt"),
                    },
                },
                TotalPauseDuration: sdk.String("ullam"),
            },
            Description: sdk.String("nam"),
            DisplayName: sdk.String("hic"),
            Error: &shared.Status{
                Code: sdk.Int(30452),
                Details: []map[string]interface{}{
                    map[string]interface{}{
                        "nobis": "et",
                        "saepe": "ipsum",
                        "veritatis": "nobis",
                    },
                    map[string]interface{}{
                        "tempore": "cupiditate",
                        "aperiam": "delectus",
                        "dolorem": "dolore",
                    },
                    map[string]interface{}{
                        "adipisci": "dolorum",
                        "architecto": "quae",
                    },
                    map[string]interface{}{
                        "quas": "itaque",
                    },
                },
                Message: sdk.String("consequatur"),
            },
            Labels: map[string]string{
                "repellendus": "porro",
                "doloribus": "ut",
                "facilis": "cupiditate",
            },
            LastReplicationCycle: &shared.ReplicationCycleInput{
                CycleNumber: sdk.Int(181631),
                EndTime: sdk.String("quae"),
                Error: &shared.Status{
                    Code: sdk.Int(512393),
                    Details: []map[string]interface{}{
                        map[string]interface{}{
                            "voluptatibus": "quisquam",
                            "vero": "omnis",
                            "quis": "ipsum",
                        },
                        map[string]interface{}{
                            "voluptate": "consectetur",
                            "vero": "tenetur",
                            "dignissimos": "hic",
                            "distinctio": "quod",
                        },
                    },
                    Message: sdk.String("odio"),
                },
                Name: sdk.String("Malcolm Swift"),
                ProgressPercent: sdk.Int(844550),
                StartTime: sdk.String("illum"),
                State: shared.ReplicationCycleStateEnumStateUnspecified.ToPointer(),
                Steps: []shared.CycleStep{
                    shared.CycleStep{
                        EndTime: sdk.String("impedit"),
                        InitializingReplication: map[string]interface{}{
                            "voluptatibus": "exercitationem",
                        },
                        PostProcessing: map[string]interface{}{
                            "fugit": "porro",
                            "maiores": "doloribus",
                            "iusto": "eligendi",
                            "ducimus": "alias",
                        },
                        Replicating: &shared.ReplicatingStep{
                            LastThirtyMinutesAverageBytesPerSecond: sdk.String("officia"),
                            LastTwoMinutesAverageBytesPerSecond: sdk.String("tempora"),
                            ReplicatedBytes: sdk.String("ipsam"),
                            TotalBytes: sdk.String("ea"),
                        },
                        StartTime: sdk.String("aspernatur"),
                    },
                    shared.CycleStep{
                        EndTime: sdk.String("vel"),
                        InitializingReplication: map[string]interface{}{
                            "magnam": "ratione",
                            "ex": "laudantium",
                            "dicta": "dolor",
                            "maiores": "quasi",
                        },
                        PostProcessing: map[string]interface{}{
                            "nulla": "excepturi",
                            "voluptatibus": "nostrum",
                        },
                        Replicating: &shared.ReplicatingStep{
                            LastThirtyMinutesAverageBytesPerSecond: sdk.String("sapiente"),
                            LastTwoMinutesAverageBytesPerSecond: sdk.String("quisquam"),
                            ReplicatedBytes: sdk.String("saepe"),
                            TotalBytes: sdk.String("ea"),
                        },
                        StartTime: sdk.String("impedit"),
                    },
                    shared.CycleStep{
                        EndTime: sdk.String("corporis"),
                        InitializingReplication: map[string]interface{}{
                            "aliquid": "inventore",
                            "magnam": "ea",
                        },
                        PostProcessing: map[string]interface{}{
                            "consectetur": "recusandae",
                            "aspernatur": "minima",
                            "eaque": "a",
                            "libero": "aut",
                        },
                        Replicating: &shared.ReplicatingStep{
                            LastThirtyMinutesAverageBytesPerSecond: sdk.String("aut"),
                            LastTwoMinutesAverageBytesPerSecond: sdk.String("deleniti"),
                            ReplicatedBytes: sdk.String("impedit"),
                            TotalBytes: sdk.String("aliquam"),
                        },
                        StartTime: sdk.String("fugit"),
                    },
                },
                TotalPauseDuration: sdk.String("accusamus"),
            },
            LastSync: &shared.ReplicationSync{
                LastSyncTime: sdk.String("inventore"),
            },
            Policy: &shared.SchedulePolicy{
                IdleDuration: sdk.String("non"),
                SkipOsAdaptation: sdk.Bool(false),
            },
            SourceVMID: sdk.String("et"),
        },
        AccessToken: sdk.String("dolorum"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("placeat"),
        Fields: sdk.String("velit"),
        Key: sdk.String("eum"),
        MigratingVMID: sdk.String("autem"),
        OauthToken: sdk.String("nobis"),
        Parent: "quas",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("assumenda"),
        RequestID: sdk.String("nulla"),
        UploadType: sdk.String("voluptas"),
        UploadProtocol: sdk.String("libero"),
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        RequestBody: map[string]interface{}{
            "numquam": "explicabo",
            "provident": "ipsa",
        },
        AccessToken: sdk.String("molestiae"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("odio"),
        Fields: sdk.String("eius"),
        Key: sdk.String("esse"),
        Name: "Hilda Paucek",
        OauthToken: sdk.String("fugiat"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ut"),
        UploadType: sdk.String("eum"),
        UploadProtocol: sdk.String("suscipit"),
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
                    "praesentium",
                },
                AppliedLicense: &shared.AppliedLicense{
                    OsLicense: sdk.String("quisquam"),
                    Type: shared.AppliedLicenseTypeEnumTypeUnspecified.ToPointer(),
                },
                BootOption: shared.ComputeEngineTargetDetailsBootOptionEnumComputeEngineBootOptionUnspecified.ToPointer(),
                ComputeScheduling: &shared.ComputeScheduling{
                    MinNodeCpus: sdk.Int(660040),
                    NodeAffinities: []shared.SchedulingNodeAffinity{
                        shared.SchedulingNodeAffinity{
                            Key: sdk.String("neque"),
                            Operator: shared.SchedulingNodeAffinityOperatorEnumNotIn.ToPointer(),
                            Values: []string{
                                "quo",
                                "fuga",
                                "eius",
                                "eos",
                            },
                        },
                        shared.SchedulingNodeAffinity{
                            Key: sdk.String("voluptas"),
                            Operator: shared.SchedulingNodeAffinityOperatorEnumOperatorUnspecified.ToPointer(),
                            Values: []string{
                                "consequatur",
                                "tempora",
                                "debitis",
                            },
                        },
                        shared.SchedulingNodeAffinity{
                            Key: sdk.String("ipsam"),
                            Operator: shared.SchedulingNodeAffinityOperatorEnumOperatorUnspecified.ToPointer(),
                            Values: []string{
                                "quo",
                            },
                        },
                    },
                    OnHostMaintenance: shared.ComputeSchedulingOnHostMaintenanceEnumTerminate.ToPointer(),
                    RestartType: shared.ComputeSchedulingRestartTypeEnumNoAutomaticRestart.ToPointer(),
                },
                DiskType: shared.ComputeEngineTargetDetailsDiskTypeEnumComputeEngineDiskTypeUnspecified.ToPointer(),
                Hostname: sdk.String("salty-shop.info"),
                Labels: map[string]string{
                    "nihil": "totam",
                },
                LicenseType: shared.ComputeEngineTargetDetailsLicenseTypeEnumComputeEngineLicenseTypeByol.ToPointer(),
                MachineType: sdk.String("aliquam"),
                MachineTypeSeries: sdk.String("odio"),
                Metadata: map[string]string{
                    "commodi": "sapiente",
                    "dolores": "deserunt",
                    "molestiae": "accusantium",
                },
                NetworkInterfaces: []shared.NetworkInterface{
                    shared.NetworkInterface{
                        ExternalIP: sdk.String("eum"),
                        InternalIP: sdk.String("quas"),
                        Network: sdk.String("praesentium"),
                        Subnetwork: sdk.String("consequuntur"),
                    },
                    shared.NetworkInterface{
                        ExternalIP: sdk.String("deleniti"),
                        InternalIP: sdk.String("fugit"),
                        Network: sdk.String("fuga"),
                        Subnetwork: sdk.String("mollitia"),
                    },
                    shared.NetworkInterface{
                        ExternalIP: sdk.String("incidunt"),
                        InternalIP: sdk.String("atque"),
                        Network: sdk.String("explicabo"),
                        Subnetwork: sdk.String("minima"),
                    },
                    shared.NetworkInterface{
                        ExternalIP: sdk.String("nisi"),
                        InternalIP: sdk.String("fugit"),
                        Network: sdk.String("sapiente"),
                        Subnetwork: sdk.String("consequuntur"),
                    },
                },
                NetworkTags: []string{
                    "explicabo",
                },
                Project: sdk.String("saepe"),
                SecureBoot: sdk.Bool(false),
                ServiceAccount: sdk.String("occaecati"),
                VMName: sdk.String("atque"),
                Zone: sdk.String("et"),
            },
            Error: &shared.Status{
                Code: sdk.Int(456911),
                Details: []map[string]interface{}{
                    map[string]interface{}{
                        "veritatis": "esse",
                        "quod": "nam",
                        "vero": "aliquid",
                        "quasi": "saepe",
                    },
                    map[string]interface{}{
                        "harum": "molestiae",
                        "rerum": "occaecati",
                    },
                    map[string]interface{}{
                        "distinctio": "eligendi",
                        "sit": "culpa",
                    },
                    map[string]interface{}{
                        "adipisci": "cumque",
                        "consequuntur": "consequatur",
                        "minus": "quaerat",
                    },
                },
                Message: sdk.String("sapiente"),
            },
        },
        AccessToken: sdk.String("consectetur"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("blanditiis"),
        CutoverJobID: sdk.String("provident"),
        Fields: sdk.String("a"),
        Key: sdk.String("nulla"),
        OauthToken: sdk.String("quas"),
        Parent: "esse",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quasi"),
        RequestID: sdk.String("a"),
        UploadType: sdk.String("error"),
        UploadProtocol: sdk.String("sint"),
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
        AccessToken: sdk.String("possimus"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("eveniet"),
        Fields: sdk.String("asperiores"),
        Filter: sdk.String("facere"),
        Key: sdk.String("veritatis"),
        OauthToken: sdk.String("consequuntur"),
        OrderBy: sdk.String("quasi"),
        PageSize: sdk.Int64(628899),
        PageToken: sdk.String("culpa"),
        Parent: "aliquid",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("tenetur"),
        UploadType: sdk.String("quae"),
        UploadProtocol: sdk.String("earum"),
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        RequestBody: map[string]interface{}{
            "eius": "libero",
            "illum": "soluta",
        },
        AccessToken: sdk.String("accusantium"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("sapiente"),
        Fields: sdk.String("dicta"),
        Key: sdk.String("ullam"),
        MigratingVM: "reprehenderit",
        OauthToken: sdk.String("ullam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("nisi"),
        UploadType: sdk.String("aut"),
        UploadProtocol: sdk.String("voluptatum"),
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("quibusdam"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("deleniti"),
        Fields: sdk.String("itaque"),
        Filter: sdk.String("dolorum"),
        Key: sdk.String("architecto"),
        OauthToken: sdk.String("omnis"),
        OrderBy: sdk.String("tenetur"),
        PageSize: sdk.Int64(98478),
        PageToken: sdk.String("at"),
        Parent: "et",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("voluptate"),
        UploadType: sdk.String("ipsa"),
        UploadProtocol: sdk.String("minima"),
        View: operations.VmmigrationProjectsLocationsSourcesMigratingVmsListViewEnumMigratingVMViewUnspecified.ToPointer(),
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        RequestBody: map[string]interface{}{
            "iste": "temporibus",
        },
        AccessToken: sdk.String("accusantium"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("aut"),
        Fields: sdk.String("laudantium"),
        Key: sdk.String("eum"),
        MigratingVM: "mollitia",
        OauthToken: sdk.String("ab"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("corrupti"),
        UploadType: sdk.String("non"),
        UploadProtocol: sdk.String("voluptatem"),
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("occaecati"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("impedit"),
        Fields: sdk.String("explicabo"),
        Filter: sdk.String("voluptas"),
        Key: sdk.String("aut"),
        OauthToken: sdk.String("dignissimos"),
        OrderBy: sdk.String("dicta"),
        PageSize: sdk.Int64(981640),
        PageToken: sdk.String("natus"),
        Parent: "velit",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("voluptatibus"),
        UploadType: sdk.String("voluptas"),
        UploadProtocol: sdk.String("asperiores"),
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
            "quaerat": "consequuntur",
            "repellendus": "officia",
        },
        AccessToken: sdk.String("maxime"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("officia"),
        Fields: sdk.String("asperiores"),
        Key: sdk.String("nemo"),
        MigratingVM: "quae",
        OauthToken: sdk.String("quaerat"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("porro"),
        UploadType: sdk.String("quod"),
        UploadProtocol: sdk.String("labore"),
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        RequestBody: map[string]interface{}{
            "fuga": "id",
        },
        AccessToken: sdk.String("suscipit"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("culpa"),
        Fields: sdk.String("est"),
        Key: sdk.String("recusandae"),
        MigratingVM: "totam",
        OauthToken: sdk.String("fugiat"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("vel"),
        UploadType: sdk.String("ducimus"),
        UploadProtocol: sdk.String("quos"),
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        UtilizationReportInput: &shared.UtilizationReportInput{
            DisplayName: sdk.String("labore"),
            Error: &shared.Status{
                Code: sdk.Int(822560),
                Details: []map[string]interface{}{
                    map[string]interface{}{
                        "commodi": "in",
                        "corporis": "reiciendis",
                        "assumenda": "nemo",
                    },
                    map[string]interface{}{
                        "aliquid": "aperiam",
                        "cum": "consectetur",
                        "in": "exercitationem",
                        "earum": "facere",
                    },
                    map[string]interface{}{
                        "doloribus": "suscipit",
                        "reiciendis": "quidem",
                    },
                },
                Message: sdk.String("saepe"),
            },
            TimeFrame: shared.UtilizationReportTimeFrameEnumYear.ToPointer(),
            Vms: []shared.VMUtilizationInfoInput{
                shared.VMUtilizationInfoInput{
                    Utilization: &shared.VMUtilizationMetrics{
                        CPUAveragePercent: sdk.Int(121059),
                        CPUMaxPercent: sdk.Int(992012),
                        DiskIoRateAverageKbps: sdk.String("adipisci"),
                        DiskIoRateMaxKbps: sdk.String("non"),
                        MemoryAveragePercent: sdk.Int(228263),
                        MemoryMaxPercent: sdk.Int(105906),
                        NetworkThroughputAverageKbps: sdk.String("dignissimos"),
                        NetworkThroughputMaxKbps: sdk.String("a"),
                    },
                    VMID: sdk.String("debitis"),
                    VmwareVMDetails: &shared.VmwareVMDetailsInput{
                        CommittedStorageMb: sdk.String("consectetur"),
                        CPUCount: sdk.Int(358107),
                        DatacenterDescription: sdk.String("harum"),
                        DatacenterID: sdk.String("laboriosam"),
                        DiskCount: sdk.Int(58356),
                        DisplayName: sdk.String("voluptates"),
                        GuestDescription: sdk.String("libero"),
                        MemoryMb: sdk.Int(113816),
                        PowerState: shared.VmwareVMDetailsPowerStateEnumSuspended.ToPointer(),
                        UUID: sdk.String("a426555b-a3c2-4874-8ed5-3b88f3a8d8f5"),
                        VMID: sdk.String("nobis"),
                    },
                },
                shared.VMUtilizationInfoInput{
                    Utilization: &shared.VMUtilizationMetrics{
                        CPUAveragePercent: sdk.Int(24619),
                        CPUMaxPercent: sdk.Int(699575),
                        DiskIoRateAverageKbps: sdk.String("sed"),
                        DiskIoRateMaxKbps: sdk.String("reiciendis"),
                        MemoryAveragePercent: sdk.Int(131852),
                        MemoryMaxPercent: sdk.Int(994401),
                        NetworkThroughputAverageKbps: sdk.String("facilis"),
                        NetworkThroughputMaxKbps: sdk.String("voluptate"),
                    },
                    VMID: sdk.String("expedita"),
                    VmwareVMDetails: &shared.VmwareVMDetailsInput{
                        CommittedStorageMb: sdk.String("ab"),
                        CPUCount: sdk.Int(611749),
                        DatacenterDescription: sdk.String("dolore"),
                        DatacenterID: sdk.String("laborum"),
                        DiskCount: sdk.Int(152354),
                        DisplayName: sdk.String("in"),
                        GuestDescription: sdk.String("commodi"),
                        MemoryMb: sdk.Int(696077),
                        PowerState: shared.VmwareVMDetailsPowerStateEnumPowerStateUnspecified.ToPointer(),
                        UUID: sdk.String("6916fe1f-08f4-4294-a369-8f447f603e8b"),
                        VMID: sdk.String("quaerat"),
                    },
                },
            },
        },
        AccessToken: sdk.String("incidunt"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("debitis"),
        Fields: sdk.String("rem"),
        Key: sdk.String("sit"),
        OauthToken: sdk.String("nobis"),
        Parent: "error",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("veniam"),
        RequestID: sdk.String("minima"),
        UploadType: sdk.String("recusandae"),
        UploadProtocol: sdk.String("reiciendis"),
        UtilizationReportID: sdk.String("nulla"),
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("aperiam"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("numquam"),
        Fields: sdk.String("veniam"),
        Filter: sdk.String("in"),
        Key: sdk.String("officiis"),
        OauthToken: sdk.String("beatae"),
        OrderBy: sdk.String("laudantium"),
        PageSize: sdk.Int64(348476),
        PageToken: sdk.String("praesentium"),
        Parent: "cum",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("laboriosam"),
        UploadType: sdk.String("dolorum"),
        UploadProtocol: sdk.String("voluptatum"),
        View: operations.VmmigrationProjectsLocationsSourcesUtilizationReportsListViewEnumBasic.ToPointer(),
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
            Description: sdk.String("expedita"),
            Project: sdk.String("debitis"),
        },
        AccessToken: sdk.String("neque"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("nostrum"),
        Fields: sdk.String("officia"),
        Key: sdk.String("dolorum"),
        OauthToken: sdk.String("corrupti"),
        Parent: "accusamus",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("tempora"),
        RequestID: sdk.String("atque"),
        TargetProjectID: sdk.String("fugit"),
        UploadType: sdk.String("ut"),
        UploadProtocol: sdk.String("fugiat"),
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("culpa"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("magnam"),
        Fields: sdk.String("consequatur"),
        Key: sdk.String("esse"),
        Name: "Karen Lehner",
        OauthToken: sdk.String("corporis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("et"),
        RequestID: sdk.String("blanditiis"),
        UploadType: sdk.String("ex"),
        UploadProtocol: sdk.String("sed"),
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("vel"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("saepe"),
        Fields: sdk.String("error"),
        Key: sdk.String("consequatur"),
        Name: "Lela Ebert Sr.",
        OauthToken: sdk.String("occaecati"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("labore"),
        UploadType: sdk.String("quidem"),
        UploadProtocol: sdk.String("atque"),
        View: operations.VmmigrationProjectsLocationsTargetProjectsGetViewEnumFull.ToPointer(),
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
        AccessToken: sdk.String("tenetur"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("alias"),
        Fields: sdk.String("amet"),
        Filter: sdk.String("deserunt"),
        Key: sdk.String("voluptate"),
        OauthToken: sdk.String("unde"),
        OrderBy: sdk.String("reiciendis"),
        PageSize: sdk.Int64(588740),
        PageToken: sdk.String("repellendus"),
        Parent: "delectus",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("voluptates"),
        UploadType: sdk.String("perferendis"),
        UploadProtocol: sdk.String("est"),
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        TargetProjectInput: &shared.TargetProjectInput{
            Description: sdk.String("reprehenderit"),
            Project: sdk.String("facere"),
        },
        AccessToken: sdk.String("fuga"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("mollitia"),
        Fields: sdk.String("veniam"),
        Key: sdk.String("voluptatem"),
        Name: "Phil Boyer",
        OauthToken: sdk.String("asperiores"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("totam"),
        RequestID: sdk.String("suscipit"),
        UpdateMask: sdk.String("quidem"),
        UploadType: sdk.String("maxime"),
        UploadProtocol: sdk.String("et"),
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
