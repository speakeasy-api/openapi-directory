# Projects

### Available Operations

* [GkebackupProjectsLocationsBackupPlansBackupsCreate](#gkebackupprojectslocationsbackupplansbackupscreate) - Creates a Backup for the given BackupPlan.
* [GkebackupProjectsLocationsBackupPlansBackupsList](#gkebackupprojectslocationsbackupplansbackupslist) - Lists the Backups for a given BackupPlan.
* [GkebackupProjectsLocationsBackupPlansBackupsVolumeBackupsList](#gkebackupprojectslocationsbackupplansbackupsvolumebackupslist) - Lists the VolumeBackups for a given Backup.
* [GkebackupProjectsLocationsBackupPlansCreate](#gkebackupprojectslocationsbackupplanscreate) - Creates a new BackupPlan in a given location.
* [GkebackupProjectsLocationsBackupPlansList](#gkebackupprojectslocationsbackupplanslist) - Lists BackupPlans in a given location.
* [GkebackupProjectsLocationsDeleteOperations](#gkebackupprojectslocationsdeleteoperations) - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* [GkebackupProjectsLocationsList](#gkebackupprojectslocationslist) - Lists information about the supported locations for this service.
* [GkebackupProjectsLocationsOperationsCancel](#gkebackupprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [GkebackupProjectsLocationsOperationsList](#gkebackupprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* [GkebackupProjectsLocationsRestorePlansCreate](#gkebackupprojectslocationsrestoreplanscreate) - Creates a new RestorePlan in a given location.
* [GkebackupProjectsLocationsRestorePlansList](#gkebackupprojectslocationsrestoreplanslist) - Lists RestorePlans in a given location.
* [GkebackupProjectsLocationsRestorePlansRestoresCreate](#gkebackupprojectslocationsrestoreplansrestorescreate) - Creates a new Restore for the given RestorePlan.
* [GkebackupProjectsLocationsRestorePlansRestoresDelete](#gkebackupprojectslocationsrestoreplansrestoresdelete) - Deletes an existing Restore.
* [GkebackupProjectsLocationsRestorePlansRestoresList](#gkebackupprojectslocationsrestoreplansrestoreslist) - Lists the Restores for a given RestorePlan.
* [GkebackupProjectsLocationsRestorePlansRestoresPatch](#gkebackupprojectslocationsrestoreplansrestorespatch) - Update a Restore.
* [GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresGet](#gkebackupprojectslocationsrestoreplansrestoresvolumerestoresget) - Retrieve the details of a single VolumeRestore.
* [GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresGetIamPolicy](#gkebackupprojectslocationsrestoreplansrestoresvolumerestoresgetiampolicy) - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* [GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresList](#gkebackupprojectslocationsrestoreplansrestoresvolumerestoreslist) - Lists the VolumeRestores for a given Restore.
* [GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresSetIamPolicy](#gkebackupprojectslocationsrestoreplansrestoresvolumerestoressetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* [GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresTestIamPermissions](#gkebackupprojectslocationsrestoreplansrestoresvolumerestorestestiampermissions) - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

## GkebackupProjectsLocationsBackupPlansBackupsCreate

Creates a Backup for the given BackupPlan.

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
    res, err := s.Projects.GkebackupProjectsLocationsBackupPlansBackupsCreate(ctx, operations.GkebackupProjectsLocationsBackupPlansBackupsCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        BackupInput: &shared.BackupInput{
            ClusterMetadata: &shared.ClusterMetadata{
                AnthosVersion: sdk.String("dicta"),
                BackupCrdVersions: map[string]string{
                    "officia": "occaecati",
                    "fugit": "deleniti",
                    "hic": "optio",
                },
                Cluster: sdk.String("totam"),
                GkeVersion: sdk.String("beatae"),
                K8sVersion: sdk.String("commodi"),
            },
            DeleteLockDays: sdk.Int(473600),
            Description: sdk.String("modi"),
            EncryptionKey: &shared.EncryptionKey{
                GcpKmsEncryptionKey: sdk.String("qui"),
            },
            Labels: map[string]string{
                "cum": "esse",
                "ipsum": "excepturi",
                "aspernatur": "perferendis",
                "ad": "natus",
            },
            RetainDays: sdk.Int(149675),
            SelectedApplications: &shared.NamespacedNames{
                NamespacedNames: []shared.NamespacedName{
                    shared.NamespacedName{
                        Name: sdk.String("Faye Howe"),
                        Namespace: sdk.String("fuga"),
                    },
                    shared.NamespacedName{
                        Name: sdk.String("Stacy Moore"),
                        Namespace: sdk.String("quidem"),
                    },
                    shared.NamespacedName{
                        Name: sdk.String("Brenda Wisozk"),
                        Namespace: sdk.String("laborum"),
                    },
                },
            },
            SelectedNamespaces: &shared.Namespaces{
                Namespaces: []string{
                    "dolorem",
                },
            },
        },
        AccessToken: sdk.String("corporis"),
        Alt: shared.AltEnumJSON.ToPointer(),
        BackupID: sdk.String("nobis"),
        Callback: sdk.String("enim"),
        Fields: sdk.String("omnis"),
        Key: sdk.String("nemo"),
        OauthToken: sdk.String("minima"),
        Parent: "excepturi",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("accusantium"),
        UploadType: sdk.String("iure"),
        UploadProtocol: sdk.String("culpa"),
    }, operations.GkebackupProjectsLocationsBackupPlansBackupsCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleLongrunningOperation != nil {
        // handle response
    }
}
```

## GkebackupProjectsLocationsBackupPlansBackupsList

Lists the Backups for a given BackupPlan.

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
    res, err := s.Projects.GkebackupProjectsLocationsBackupPlansBackupsList(ctx, operations.GkebackupProjectsLocationsBackupPlansBackupsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("sapiente"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("mollitia"),
        Fields: sdk.String("dolorem"),
        Filter: sdk.String("culpa"),
        Key: sdk.String("consequuntur"),
        OauthToken: sdk.String("repellat"),
        OrderBy: sdk.String("mollitia"),
        PageSize: sdk.Int64(581850),
        PageToken: sdk.String("numquam"),
        Parent: "commodi",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quam"),
        UploadType: sdk.String("molestiae"),
        UploadProtocol: sdk.String("velit"),
    }, operations.GkebackupProjectsLocationsBackupPlansBackupsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListBackupsResponse != nil {
        // handle response
    }
}
```

## GkebackupProjectsLocationsBackupPlansBackupsVolumeBackupsList

Lists the VolumeBackups for a given Backup.

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
    res, err := s.Projects.GkebackupProjectsLocationsBackupPlansBackupsVolumeBackupsList(ctx, operations.GkebackupProjectsLocationsBackupPlansBackupsVolumeBackupsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("quia"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("vitae"),
        Fields: sdk.String("laborum"),
        Filter: sdk.String("animi"),
        Key: sdk.String("enim"),
        OauthToken: sdk.String("odit"),
        OrderBy: sdk.String("quo"),
        PageSize: sdk.Int64(196582),
        PageToken: sdk.String("tenetur"),
        Parent: "ipsam",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("id"),
        UploadType: sdk.String("possimus"),
        UploadProtocol: sdk.String("aut"),
    }, operations.GkebackupProjectsLocationsBackupPlansBackupsVolumeBackupsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListVolumeBackupsResponse != nil {
        // handle response
    }
}
```

## GkebackupProjectsLocationsBackupPlansCreate

Creates a new BackupPlan in a given location.

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
    res, err := s.Projects.GkebackupProjectsLocationsBackupPlansCreate(ctx, operations.GkebackupProjectsLocationsBackupPlansCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        BackupPlanInput: &shared.BackupPlanInput{
            BackupConfig: &shared.BackupConfig{
                AllNamespaces: sdk.Bool(false),
                EncryptionKey: &shared.EncryptionKey{
                    GcpKmsEncryptionKey: sdk.String("error"),
                },
                IncludeSecrets: sdk.Bool(false),
                IncludeVolumeData: sdk.Bool(false),
                SelectedApplications: &shared.NamespacedNames{
                    NamespacedNames: []shared.NamespacedName{
                        shared.NamespacedName{
                            Name: sdk.String("Ryan Witting"),
                            Namespace: sdk.String("nihil"),
                        },
                        shared.NamespacedName{
                            Name: sdk.String("Jan Bednar"),
                            Namespace: sdk.String("cum"),
                        },
                        shared.NamespacedName{
                            Name: sdk.String("Sharon Kiehn"),
                            Namespace: sdk.String("dicta"),
                        },
                        shared.NamespacedName{
                            Name: sdk.String("Miss Valerie Kshlerin"),
                            Namespace: sdk.String("accusamus"),
                        },
                    },
                },
                SelectedNamespaces: &shared.Namespaces{
                    Namespaces: []string{
                        "repudiandae",
                        "quae",
                    },
                },
            },
            BackupSchedule: &shared.Schedule{
                CronSchedule: sdk.String("ipsum"),
                Paused: sdk.Bool(false),
            },
            Cluster: sdk.String("quidem"),
            Deactivated: sdk.Bool(false),
            Description: sdk.String("molestias"),
            Labels: map[string]string{
                "pariatur": "modi",
                "praesentium": "rem",
                "voluptates": "quasi",
            },
            RetentionPolicy: &shared.RetentionPolicy{
                BackupDeleteLockDays: sdk.Int(921158),
                BackupRetainDays: sdk.Int(575947),
                Locked: sdk.Bool(false),
            },
        },
        AccessToken: sdk.String("veritatis"),
        Alt: shared.AltEnumProto.ToPointer(),
        BackupPlanID: sdk.String("incidunt"),
        Callback: sdk.String("enim"),
        Fields: sdk.String("consequatur"),
        Key: sdk.String("est"),
        OauthToken: sdk.String("quibusdam"),
        Parent: "explicabo",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("deserunt"),
        UploadType: sdk.String("distinctio"),
        UploadProtocol: sdk.String("quibusdam"),
    }, operations.GkebackupProjectsLocationsBackupPlansCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleLongrunningOperation != nil {
        // handle response
    }
}
```

## GkebackupProjectsLocationsBackupPlansList

Lists BackupPlans in a given location.

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
    res, err := s.Projects.GkebackupProjectsLocationsBackupPlansList(ctx, operations.GkebackupProjectsLocationsBackupPlansListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("modi"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("aliquid"),
        Fields: sdk.String("cupiditate"),
        Filter: sdk.String("quos"),
        Key: sdk.String("perferendis"),
        OauthToken: sdk.String("magni"),
        OrderBy: sdk.String("assumenda"),
        PageSize: sdk.Int64(369808),
        PageToken: sdk.String("alias"),
        Parent: "fugit",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dolorum"),
        UploadType: sdk.String("excepturi"),
        UploadProtocol: sdk.String("tempora"),
    }, operations.GkebackupProjectsLocationsBackupPlansListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListBackupPlansResponse != nil {
        // handle response
    }
}
```

## GkebackupProjectsLocationsDeleteOperations

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.

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
    res, err := s.Projects.GkebackupProjectsLocationsDeleteOperations(ctx, operations.GkebackupProjectsLocationsDeleteOperationsRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("tempore"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("delectus"),
        Fields: sdk.String("eum"),
        Key: sdk.String("non"),
        Name: "Sergio Hyatt",
        OauthToken: sdk.String("sint"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("officia"),
        UploadType: sdk.String("dolor"),
        UploadProtocol: sdk.String("debitis"),
    }, operations.GkebackupProjectsLocationsDeleteOperationsSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
}
```

## GkebackupProjectsLocationsList

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
    res, err := s.Projects.GkebackupProjectsLocationsList(ctx, operations.GkebackupProjectsLocationsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("dolorum"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("in"),
        Fields: sdk.String("illum"),
        Filter: sdk.String("maiores"),
        Key: sdk.String("rerum"),
        Name: "Valerie Runolfsson",
        OauthToken: sdk.String("aliquid"),
        PageSize: sdk.Int64(675439),
        PageToken: sdk.String("accusamus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("non"),
        UploadType: sdk.String("occaecati"),
        UploadProtocol: sdk.String("enim"),
    }, operations.GkebackupProjectsLocationsListSecurity{
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

## GkebackupProjectsLocationsOperationsCancel

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.

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
    res, err := s.Projects.GkebackupProjectsLocationsOperationsCancel(ctx, operations.GkebackupProjectsLocationsOperationsCancelRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        RequestBody: map[string]interface{}{
            "quidem": "provident",
            "nam": "id",
            "blanditiis": "deleniti",
            "sapiente": "amet",
        },
        AccessToken: sdk.String("deserunt"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("vel"),
        Fields: sdk.String("natus"),
        Key: sdk.String("omnis"),
        Name: "Dorothy Kovacek",
        OauthToken: sdk.String("id"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("labore"),
        UploadType: sdk.String("labore"),
        UploadProtocol: sdk.String("suscipit"),
    }, operations.GkebackupProjectsLocationsOperationsCancelSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
}
```

## GkebackupProjectsLocationsOperationsList

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
    res, err := s.Projects.GkebackupProjectsLocationsOperationsList(ctx, operations.GkebackupProjectsLocationsOperationsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("nobis"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("vero"),
        Fields: sdk.String("aspernatur"),
        Filter: sdk.String("architecto"),
        Key: sdk.String("magnam"),
        Name: "Miriam Hermann",
        OauthToken: sdk.String("sint"),
        PageSize: sdk.Int64(33625),
        PageToken: sdk.String("mollitia"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("reiciendis"),
        UploadType: sdk.String("mollitia"),
        UploadProtocol: sdk.String("ad"),
    }, operations.GkebackupProjectsLocationsOperationsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleLongrunningListOperationsResponse != nil {
        // handle response
    }
}
```

## GkebackupProjectsLocationsRestorePlansCreate

Creates a new RestorePlan in a given location.

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
    res, err := s.Projects.GkebackupProjectsLocationsRestorePlansCreate(ctx, operations.GkebackupProjectsLocationsRestorePlansCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        RestorePlanInput: &shared.RestorePlanInput{
            BackupPlan: sdk.String("dolor"),
            Cluster: sdk.String("necessitatibus"),
            Description: sdk.String("odit"),
            Labels: map[string]string{
                "quasi": "iure",
                "doloribus": "debitis",
            },
            RestoreConfig: &shared.RestoreConfig{
                AllNamespaces: sdk.Bool(false),
                ClusterResourceConflictPolicy: shared.RestoreConfigClusterResourceConflictPolicyEnumClusterResourceConflictPolicyUnspecified.ToPointer(),
                ClusterResourceRestoreScope: &shared.ClusterResourceRestoreScope{
                    SelectedGroupKinds: []shared.GroupKind{
                        shared.GroupKind{
                            ResourceGroup: sdk.String("deleniti"),
                            ResourceKind: sdk.String("facilis"),
                        },
                        shared.GroupKind{
                            ResourceGroup: sdk.String("in"),
                            ResourceKind: sdk.String("architecto"),
                        },
                        shared.GroupKind{
                            ResourceGroup: sdk.String("architecto"),
                            ResourceKind: sdk.String("repudiandae"),
                        },
                        shared.GroupKind{
                            ResourceGroup: sdk.String("ullam"),
                            ResourceKind: sdk.String("expedita"),
                        },
                    },
                },
                NamespacedResourceRestoreMode: shared.RestoreConfigNamespacedResourceRestoreModeEnumDeleteAndRestore.ToPointer(),
                SelectedApplications: &shared.NamespacedNames{
                    NamespacedNames: []shared.NamespacedName{
                        shared.NamespacedName{
                            Name: sdk.String("Louis Turner Sr."),
                            Namespace: sdk.String("praesentium"),
                        },
                        shared.NamespacedName{
                            Name: sdk.String("Victor Casper"),
                            Namespace: sdk.String("pariatur"),
                        },
                        shared.NamespacedName{
                            Name: sdk.String("Nathaniel Marks"),
                            Namespace: sdk.String("accusantium"),
                        },
                        shared.NamespacedName{
                            Name: sdk.String("Ebony Predovic"),
                            Namespace: sdk.String("autem"),
                        },
                    },
                },
                SelectedNamespaces: &shared.Namespaces{
                    Namespaces: []string{
                        "eaque",
                        "pariatur",
                        "nemo",
                    },
                },
                SubstitutionRules: []shared.SubstitutionRule{
                    shared.SubstitutionRule{
                        NewValue: sdk.String("perferendis"),
                        OriginalValuePattern: sdk.String("fugiat"),
                        TargetGroupKinds: []shared.GroupKind{
                            shared.GroupKind{
                                ResourceGroup: sdk.String("aut"),
                                ResourceKind: sdk.String("cumque"),
                            },
                        },
                        TargetJSONPath: sdk.String("corporis"),
                        TargetNamespaces: []string{
                            "libero",
                            "nobis",
                            "dolores",
                            "quis",
                        },
                    },
                    shared.SubstitutionRule{
                        NewValue: sdk.String("totam"),
                        OriginalValuePattern: sdk.String("dignissimos"),
                        TargetGroupKinds: []shared.GroupKind{
                            shared.GroupKind{
                                ResourceGroup: sdk.String("quis"),
                                ResourceKind: sdk.String("nesciunt"),
                            },
                        },
                        TargetJSONPath: sdk.String("eos"),
                        TargetNamespaces: []string{
                            "dolores",
                        },
                    },
                    shared.SubstitutionRule{
                        NewValue: sdk.String("minus"),
                        OriginalValuePattern: sdk.String("quam"),
                        TargetGroupKinds: []shared.GroupKind{
                            shared.GroupKind{
                                ResourceGroup: sdk.String("vero"),
                                ResourceKind: sdk.String("nostrum"),
                            },
                        },
                        TargetJSONPath: sdk.String("hic"),
                        TargetNamespaces: []string{
                            "omnis",
                            "facilis",
                            "perspiciatis",
                            "voluptatem",
                        },
                    },
                    shared.SubstitutionRule{
                        NewValue: sdk.String("porro"),
                        OriginalValuePattern: sdk.String("consequuntur"),
                        TargetGroupKinds: []shared.GroupKind{
                            shared.GroupKind{
                                ResourceGroup: sdk.String("error"),
                                ResourceKind: sdk.String("eaque"),
                            },
                            shared.GroupKind{
                                ResourceGroup: sdk.String("occaecati"),
                                ResourceKind: sdk.String("rerum"),
                            },
                            shared.GroupKind{
                                ResourceGroup: sdk.String("adipisci"),
                                ResourceKind: sdk.String("asperiores"),
                            },
                        },
                        TargetJSONPath: sdk.String("earum"),
                        TargetNamespaces: []string{
                            "iste",
                            "dolorum",
                        },
                    },
                },
                VolumeDataRestorePolicy: shared.RestoreConfigVolumeDataRestorePolicyEnumReuseVolumeHandleFromBackup.ToPointer(),
            },
        },
        AccessToken: sdk.String("pariatur"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("nobis"),
        Fields: sdk.String("libero"),
        Key: sdk.String("delectus"),
        OauthToken: sdk.String("quaerat"),
        Parent: "quos",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("aliquid"),
        RestorePlanID: sdk.String("dolorem"),
        UploadType: sdk.String("dolorem"),
        UploadProtocol: sdk.String("dolor"),
    }, operations.GkebackupProjectsLocationsRestorePlansCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleLongrunningOperation != nil {
        // handle response
    }
}
```

## GkebackupProjectsLocationsRestorePlansList

Lists RestorePlans in a given location.

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
    res, err := s.Projects.GkebackupProjectsLocationsRestorePlansList(ctx, operations.GkebackupProjectsLocationsRestorePlansListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("ipsum"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("excepturi"),
        Fields: sdk.String("cum"),
        Filter: sdk.String("voluptate"),
        Key: sdk.String("dignissimos"),
        OauthToken: sdk.String("reiciendis"),
        OrderBy: sdk.String("amet"),
        PageSize: sdk.Int64(680545),
        PageToken: sdk.String("numquam"),
        Parent: "veritatis",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ipsa"),
        UploadType: sdk.String("ipsa"),
        UploadProtocol: sdk.String("iure"),
    }, operations.GkebackupProjectsLocationsRestorePlansListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListRestorePlansResponse != nil {
        // handle response
    }
}
```

## GkebackupProjectsLocationsRestorePlansRestoresCreate

Creates a new Restore for the given RestorePlan.

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
    res, err := s.Projects.GkebackupProjectsLocationsRestorePlansRestoresCreate(ctx, operations.GkebackupProjectsLocationsRestorePlansRestoresCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        RestoreInput: &shared.RestoreInput{
            Backup: sdk.String("quaerat"),
            Description: sdk.String("accusamus"),
            Labels: map[string]string{
                "voluptatibus": "voluptas",
                "natus": "eos",
                "atque": "sit",
            },
            RestoreConfig: &shared.RestoreConfig{
                AllNamespaces: sdk.Bool(false),
                ClusterResourceConflictPolicy: shared.RestoreConfigClusterResourceConflictPolicyEnumUseBackupVersion.ToPointer(),
                ClusterResourceRestoreScope: &shared.ClusterResourceRestoreScope{
                    SelectedGroupKinds: []shared.GroupKind{
                        shared.GroupKind{
                            ResourceGroup: sdk.String("soluta"),
                            ResourceKind: sdk.String("dolorum"),
                        },
                    },
                },
                NamespacedResourceRestoreMode: shared.RestoreConfigNamespacedResourceRestoreModeEnumDeleteAndRestore.ToPointer(),
                SelectedApplications: &shared.NamespacedNames{
                    NamespacedNames: []shared.NamespacedName{
                        shared.NamespacedName{
                            Name: sdk.String("Alfredo Mohr"),
                            Namespace: sdk.String("asperiores"),
                        },
                        shared.NamespacedName{
                            Name: sdk.String("Edna Klocko"),
                            Namespace: sdk.String("eius"),
                        },
                    },
                },
                SelectedNamespaces: &shared.Namespaces{
                    Namespaces: []string{
                        "perferendis",
                    },
                },
                SubstitutionRules: []shared.SubstitutionRule{
                    shared.SubstitutionRule{
                        NewValue: sdk.String("optio"),
                        OriginalValuePattern: sdk.String("accusamus"),
                        TargetGroupKinds: []shared.GroupKind{
                            shared.GroupKind{
                                ResourceGroup: sdk.String("saepe"),
                                ResourceKind: sdk.String("suscipit"),
                            },
                            shared.GroupKind{
                                ResourceGroup: sdk.String("deserunt"),
                                ResourceKind: sdk.String("provident"),
                            },
                        },
                        TargetJSONPath: sdk.String("minima"),
                        TargetNamespaces: []string{
                            "totam",
                            "similique",
                            "alias",
                            "at",
                        },
                    },
                },
                VolumeDataRestorePolicy: shared.RestoreConfigVolumeDataRestorePolicyEnumRestoreVolumeDataFromBackup.ToPointer(),
            },
        },
        AccessToken: sdk.String("tempora"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("quod"),
        Fields: sdk.String("officiis"),
        Key: sdk.String("qui"),
        OauthToken: sdk.String("dolorum"),
        Parent: "a",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("esse"),
        RestoreID: sdk.String("harum"),
        UploadType: sdk.String("iusto"),
        UploadProtocol: sdk.String("ipsum"),
    }, operations.GkebackupProjectsLocationsRestorePlansRestoresCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleLongrunningOperation != nil {
        // handle response
    }
}
```

## GkebackupProjectsLocationsRestorePlansRestoresDelete

Deletes an existing Restore.

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
    res, err := s.Projects.GkebackupProjectsLocationsRestorePlansRestoresDelete(ctx, operations.GkebackupProjectsLocationsRestorePlansRestoresDeleteRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("tenetur"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("tempore"),
        Etag: sdk.String("accusamus"),
        Fields: sdk.String("numquam"),
        Force: sdk.Bool(false),
        Key: sdk.String("enim"),
        Name: "Jeannie Leannon MD",
        OauthToken: sdk.String("neque"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("sed"),
        UploadType: sdk.String("vel"),
        UploadProtocol: sdk.String("libero"),
    }, operations.GkebackupProjectsLocationsRestorePlansRestoresDeleteSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleLongrunningOperation != nil {
        // handle response
    }
}
```

## GkebackupProjectsLocationsRestorePlansRestoresList

Lists the Restores for a given RestorePlan.

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
    res, err := s.Projects.GkebackupProjectsLocationsRestorePlansRestoresList(ctx, operations.GkebackupProjectsLocationsRestorePlansRestoresListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("deserunt"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("ipsum"),
        Fields: sdk.String("incidunt"),
        Filter: sdk.String("qui"),
        Key: sdk.String("cupiditate"),
        OauthToken: sdk.String("maxime"),
        OrderBy: sdk.String("pariatur"),
        PageSize: sdk.Int64(747080),
        PageToken: sdk.String("dicta"),
        Parent: "laborum",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("totam"),
        UploadType: sdk.String("incidunt"),
        UploadProtocol: sdk.String("aspernatur"),
    }, operations.GkebackupProjectsLocationsRestorePlansRestoresListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListRestoresResponse != nil {
        // handle response
    }
}
```

## GkebackupProjectsLocationsRestorePlansRestoresPatch

Update a Restore.

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
    res, err := s.Projects.GkebackupProjectsLocationsRestorePlansRestoresPatch(ctx, operations.GkebackupProjectsLocationsRestorePlansRestoresPatchRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        RestoreInput: &shared.RestoreInput{
            Backup: sdk.String("distinctio"),
            Description: sdk.String("facilis"),
            Labels: map[string]string{
                "quam": "molestias",
                "temporibus": "qui",
            },
            RestoreConfig: &shared.RestoreConfig{
                AllNamespaces: sdk.Bool(false),
                ClusterResourceConflictPolicy: shared.RestoreConfigClusterResourceConflictPolicyEnumClusterResourceConflictPolicyUnspecified.ToPointer(),
                ClusterResourceRestoreScope: &shared.ClusterResourceRestoreScope{
                    SelectedGroupKinds: []shared.GroupKind{
                        shared.GroupKind{
                            ResourceGroup: sdk.String("magni"),
                            ResourceKind: sdk.String("odio"),
                        },
                    },
                },
                NamespacedResourceRestoreMode: shared.RestoreConfigNamespacedResourceRestoreModeEnumNamespacedResourceRestoreModeUnspecified.ToPointer(),
                SelectedApplications: &shared.NamespacedNames{
                    NamespacedNames: []shared.NamespacedName{
                        shared.NamespacedName{
                            Name: sdk.String("Terrell Bartell"),
                            Namespace: sdk.String("nobis"),
                        },
                        shared.NamespacedName{
                            Name: sdk.String("Miss Kerry Emmerich"),
                            Namespace: sdk.String("tempore"),
                        },
                    },
                },
                SelectedNamespaces: &shared.Namespaces{
                    Namespaces: []string{
                        "aperiam",
                        "delectus",
                        "dolorem",
                    },
                },
                SubstitutionRules: []shared.SubstitutionRule{
                    shared.SubstitutionRule{
                        NewValue: sdk.String("labore"),
                        OriginalValuePattern: sdk.String("adipisci"),
                        TargetGroupKinds: []shared.GroupKind{
                            shared.GroupKind{
                                ResourceGroup: sdk.String("architecto"),
                                ResourceKind: sdk.String("quae"),
                            },
                            shared.GroupKind{
                                ResourceGroup: sdk.String("aut"),
                                ResourceKind: sdk.String("quas"),
                            },
                            shared.GroupKind{
                                ResourceGroup: sdk.String("itaque"),
                                ResourceKind: sdk.String("consequatur"),
                            },
                        },
                        TargetJSONPath: sdk.String("est"),
                        TargetNamespaces: []string{
                            "porro",
                            "doloribus",
                            "ut",
                            "facilis",
                        },
                    },
                    shared.SubstitutionRule{
                        NewValue: sdk.String("cupiditate"),
                        OriginalValuePattern: sdk.String("qui"),
                        TargetGroupKinds: []shared.GroupKind{
                            shared.GroupKind{
                                ResourceGroup: sdk.String("laudantium"),
                                ResourceKind: sdk.String("odio"),
                            },
                        },
                        TargetJSONPath: sdk.String("occaecati"),
                        TargetNamespaces: []string{
                            "quisquam",
                            "vero",
                            "omnis",
                            "quis",
                        },
                    },
                },
                VolumeDataRestorePolicy: shared.RestoreConfigVolumeDataRestorePolicyEnumVolumeDataRestorePolicyUnspecified.ToPointer(),
            },
        },
        AccessToken: sdk.String("delectus"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("consectetur"),
        Fields: sdk.String("vero"),
        Key: sdk.String("tenetur"),
        Name: "Darla Rau",
        OauthToken: sdk.String("similique"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("facilis"),
        UpdateMask: sdk.String("vero"),
        UploadType: sdk.String("ducimus"),
        UploadProtocol: sdk.String("dolore"),
    }, operations.GkebackupProjectsLocationsRestorePlansRestoresPatchSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleLongrunningOperation != nil {
        // handle response
    }
}
```

## GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresGet

Retrieve the details of a single VolumeRestore.

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
    res, err := s.Projects.GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresGet(ctx, operations.GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("illum"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("natus"),
        Fields: sdk.String("impedit"),
        Key: sdk.String("aut"),
        Name: "Greg Stoltenberg",
        OauthToken: sdk.String("maiores"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("doloribus"),
        UploadType: sdk.String("iusto"),
        UploadProtocol: sdk.String("eligendi"),
    }, operations.GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.VolumeRestore != nil {
        // handle response
    }
}
```

## GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresGetIamPolicy

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

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
    res, err := s.Projects.GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresGetIamPolicy(ctx, operations.GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresGetIamPolicyRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("alias"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("tempora"),
        Fields: sdk.String("ipsam"),
        Key: sdk.String("ea"),
        OauthToken: sdk.String("aspernatur"),
        OptionsRequestedPolicyVersion: sdk.Int64(428224),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("possimus"),
        Resource: "magnam",
        UploadType: sdk.String("ratione"),
        UploadProtocol: sdk.String("ex"),
    }, operations.GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresGetIamPolicySecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Policy != nil {
        // handle response
    }
}
```

## GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresList

Lists the VolumeRestores for a given Restore.

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
    res, err := s.Projects.GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresList(ctx, operations.GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("dicta"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("maiores"),
        Fields: sdk.String("quasi"),
        Filter: sdk.String("ex"),
        Key: sdk.String("nulla"),
        OauthToken: sdk.String("excepturi"),
        OrderBy: sdk.String("voluptatibus"),
        PageSize: sdk.Int64(343605),
        PageToken: sdk.String("sapiente"),
        Parent: "quisquam",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("saepe"),
        UploadType: sdk.String("ea"),
        UploadProtocol: sdk.String("impedit"),
    }, operations.GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListVolumeRestoresResponse != nil {
        // handle response
    }
}
```

## GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresSetIamPolicy

Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.

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
    res, err := s.Projects.GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresSetIamPolicy(ctx, operations.GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresSetIamPolicyRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        SetIamPolicyRequest: &shared.SetIamPolicyRequest{
            Policy: &shared.Policy{
                AuditConfigs: []shared.AuditConfig{
                    shared.AuditConfig{
                        AuditLogConfigs: []shared.AuditLogConfig{
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "magnam",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumAdminRead.ToPointer(),
                            },
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "consectetur",
                                    "recusandae",
                                    "aspernatur",
                                    "minima",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumLogTypeUnspecified.ToPointer(),
                            },
                        },
                        Service: sdk.String("a"),
                    },
                    shared.AuditConfig{
                        AuditLogConfigs: []shared.AuditLogConfig{
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "aut",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumDataWrite.ToPointer(),
                            },
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "aliquam",
                                    "fugit",
                                    "accusamus",
                                    "inventore",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumAdminRead.ToPointer(),
                            },
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "dolorum",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumDataWrite.ToPointer(),
                            },
                        },
                        Service: sdk.String("placeat"),
                    },
                },
                Bindings: []shared.Binding{
                    shared.Binding{
                        Condition: &shared.Expr{
                            Description: sdk.String("eum"),
                            Expression: sdk.String("autem"),
                            Location: sdk.String("nobis"),
                            Title: sdk.String("Ms."),
                        },
                        Members: []string{
                            "nulla",
                            "voluptas",
                            "libero",
                            "quasi",
                        },
                        Role: sdk.String("tempora"),
                    },
                },
                Etag: sdk.String("numquam"),
                Version: sdk.Int(131482),
            },
            UpdateMask: sdk.String("provident"),
        },
        AccessToken: sdk.String("ipsa"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("magnam"),
        Fields: sdk.String("odio"),
        Key: sdk.String("eius"),
        OauthToken: sdk.String("esse"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("esse"),
        Resource: "rem",
        UploadType: sdk.String("fuga"),
        UploadProtocol: sdk.String("reprehenderit"),
    }, operations.GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresSetIamPolicySecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Policy != nil {
        // handle response
    }
}
```

## GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresTestIamPermissions

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

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
    res, err := s.Projects.GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresTestIamPermissions(ctx, operations.GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresTestIamPermissionsRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        TestIamPermissionsRequest: &shared.TestIamPermissionsRequest{
            Permissions: []string{
                "ut",
                "eum",
                "suscipit",
                "assumenda",
            },
        },
        AccessToken: sdk.String("eos"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("quisquam"),
        Fields: sdk.String("veritatis"),
        Key: sdk.String("ipsa"),
        OauthToken: sdk.String("id"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quidem"),
        Resource: "neque",
        UploadType: sdk.String("quo"),
        UploadProtocol: sdk.String("illum"),
    }, operations.GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresTestIamPermissionsSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TestIamPermissionsResponse != nil {
        // handle response
    }
}
```
