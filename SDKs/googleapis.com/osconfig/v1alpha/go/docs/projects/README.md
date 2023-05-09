# Projects

### Available Operations

* [OsconfigProjectsLocationsInstanceOSPoliciesCompliancesList](#osconfigprojectslocationsinstanceospoliciescomplianceslist) - List OS policies compliance data for all Compute Engine VM instances in the specified zone.
* [OsconfigProjectsLocationsInstancesInventoriesList](#osconfigprojectslocationsinstancesinventorieslist) - List inventory data for all VM instances in the specified zone.
* [OsconfigProjectsLocationsInstancesOsPolicyAssignmentsReportsList](#osconfigprojectslocationsinstancesospolicyassignmentsreportslist) - List OS policy asssignment reports for all Compute Engine VM instances in the specified zone.
* [OsconfigProjectsLocationsInstancesVulnerabilityReportsList](#osconfigprojectslocationsinstancesvulnerabilityreportslist) - List vulnerability reports for all VM instances in the specified zone.
* [OsconfigProjectsLocationsOsPolicyAssignmentsCreate](#osconfigprojectslocationsospolicyassignmentscreate) - Create an OS policy assignment. This method also creates the first revision of the OS policy assignment. This method returns a long running operation (LRO) that contains the rollout details. The rollout can be cancelled by cancelling the LRO. For more information, see [Method: projects.locations.osPolicyAssignments.operations.cancel](https://cloud.google.com/compute/docs/osconfig/rest/v1alpha/projects.locations.osPolicyAssignments.operations/cancel).
* [OsconfigProjectsLocationsOsPolicyAssignmentsDelete](#osconfigprojectslocationsospolicyassignmentsdelete) - Delete the OS policy assignment. This method creates a new revision of the OS policy assignment. This method returns a long running operation (LRO) that contains the rollout details. The rollout can be cancelled by cancelling the LRO. If the LRO completes and is not cancelled, all revisions associated with the OS policy assignment are deleted. For more information, see [Method: projects.locations.osPolicyAssignments.operations.cancel](https://cloud.google.com/compute/docs/osconfig/rest/v1alpha/projects.locations.osPolicyAssignments.operations/cancel).
* [OsconfigProjectsLocationsOsPolicyAssignmentsList](#osconfigprojectslocationsospolicyassignmentslist) - List the OS policy assignments under the parent resource. For each OS policy assignment, the latest revision is returned.
* [OsconfigProjectsLocationsOsPolicyAssignmentsListRevisions](#osconfigprojectslocationsospolicyassignmentslistrevisions) - List the OS policy assignment revisions for a given OS policy assignment.
* [OsconfigProjectsLocationsOsPolicyAssignmentsOperationsCancel](#osconfigprojectslocationsospolicyassignmentsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [OsconfigProjectsLocationsOsPolicyAssignmentsOperationsGet](#osconfigprojectslocationsospolicyassignmentsoperationsget) - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* [OsconfigProjectsLocationsOsPolicyAssignmentsPatch](#osconfigprojectslocationsospolicyassignmentspatch) - Update an existing OS policy assignment. This method creates a new revision of the OS policy assignment. This method returns a long running operation (LRO) that contains the rollout details. The rollout can be cancelled by cancelling the LRO. For more information, see [Method: projects.locations.osPolicyAssignments.operations.cancel](https://cloud.google.com/compute/docs/osconfig/rest/v1alpha/projects.locations.osPolicyAssignments.operations/cancel).

## OsconfigProjectsLocationsInstanceOSPoliciesCompliancesList

List OS policies compliance data for all Compute Engine VM instances in the specified zone.

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
    res, err := s.Projects.OsconfigProjectsLocationsInstanceOSPoliciesCompliancesList(ctx, operations.OsconfigProjectsLocationsInstanceOSPoliciesCompliancesListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("ipsa"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("tempora"),
        Fields: sdk.String("suscipit"),
        Filter: sdk.String("molestiae"),
        Key: sdk.String("minus"),
        OauthToken: sdk.String("placeat"),
        PageSize: sdk.Int64(528895),
        PageToken: sdk.String("iusto"),
        Parent: "excepturi",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("nisi"),
        UploadType: sdk.String("recusandae"),
        UploadProtocol: sdk.String("temporibus"),
    }, operations.OsconfigProjectsLocationsInstanceOSPoliciesCompliancesListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListInstanceOSPoliciesCompliancesResponse != nil {
        // handle response
    }
}
```

## OsconfigProjectsLocationsInstancesInventoriesList

List inventory data for all VM instances in the specified zone.

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
    res, err := s.Projects.OsconfigProjectsLocationsInstancesInventoriesList(ctx, operations.OsconfigProjectsLocationsInstancesInventoriesListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("quis"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("deserunt"),
        Fields: sdk.String("perferendis"),
        Filter: sdk.String("ipsam"),
        Key: sdk.String("repellendus"),
        OauthToken: sdk.String("sapiente"),
        PageSize: sdk.Int64(778157),
        PageToken: sdk.String("odit"),
        Parent: "at",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("at"),
        UploadType: sdk.String("maiores"),
        UploadProtocol: sdk.String("molestiae"),
        View: operations.OsconfigProjectsLocationsInstancesInventoriesListViewEnumFull.ToPointer(),
    }, operations.OsconfigProjectsLocationsInstancesInventoriesListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListInventoriesResponse != nil {
        // handle response
    }
}
```

## OsconfigProjectsLocationsInstancesOsPolicyAssignmentsReportsList

List OS policy asssignment reports for all Compute Engine VM instances in the specified zone.

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
    res, err := s.Projects.OsconfigProjectsLocationsInstancesOsPolicyAssignmentsReportsList(ctx, operations.OsconfigProjectsLocationsInstancesOsPolicyAssignmentsReportsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("esse"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("porro"),
        Fields: sdk.String("dolorum"),
        Filter: sdk.String("dicta"),
        Key: sdk.String("nam"),
        OauthToken: sdk.String("officia"),
        PageSize: sdk.Int64(582020),
        PageToken: sdk.String("fugit"),
        Parent: "deleniti",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("hic"),
        UploadType: sdk.String("optio"),
        UploadProtocol: sdk.String("totam"),
    }, operations.OsconfigProjectsLocationsInstancesOsPolicyAssignmentsReportsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListOSPolicyAssignmentReportsResponse != nil {
        // handle response
    }
}
```

## OsconfigProjectsLocationsInstancesVulnerabilityReportsList

List vulnerability reports for all VM instances in the specified zone.

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
    res, err := s.Projects.OsconfigProjectsLocationsInstancesVulnerabilityReportsList(ctx, operations.OsconfigProjectsLocationsInstancesVulnerabilityReportsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("commodi"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("modi"),
        Fields: sdk.String("qui"),
        Filter: sdk.String("impedit"),
        Key: sdk.String("cum"),
        OauthToken: sdk.String("esse"),
        PageSize: sdk.Int64(216550),
        PageToken: sdk.String("excepturi"),
        Parent: "aspernatur",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("perferendis"),
        UploadType: sdk.String("ad"),
        UploadProtocol: sdk.String("natus"),
    }, operations.OsconfigProjectsLocationsInstancesVulnerabilityReportsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListVulnerabilityReportsResponse != nil {
        // handle response
    }
}
```

## OsconfigProjectsLocationsOsPolicyAssignmentsCreate

Create an OS policy assignment. This method also creates the first revision of the OS policy assignment. This method returns a long running operation (LRO) that contains the rollout details. The rollout can be cancelled by cancelling the LRO. For more information, see [Method: projects.locations.osPolicyAssignments.operations.cancel](https://cloud.google.com/compute/docs/osconfig/rest/v1alpha/projects.locations.osPolicyAssignments.operations/cancel).

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
    res, err := s.Projects.OsconfigProjectsLocationsOsPolicyAssignmentsCreate(ctx, operations.OsconfigProjectsLocationsOsPolicyAssignmentsCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        OSPolicyAssignmentInput: &shared.OSPolicyAssignmentInput{
            Description: sdk.String("iste"),
            Etag: sdk.String("dolor"),
            InstanceFilter: &shared.OSPolicyAssignmentInstanceFilter{
                All: sdk.Bool(false),
                ExclusionLabels: []shared.OSPolicyAssignmentLabelSet{
                    shared.OSPolicyAssignmentLabelSet{
                        Labels: map[string]string{
                            "hic": "saepe",
                            "fuga": "in",
                        },
                    },
                    shared.OSPolicyAssignmentLabelSet{
                        Labels: map[string]string{
                            "iste": "iure",
                            "saepe": "quidem",
                        },
                    },
                    shared.OSPolicyAssignmentLabelSet{
                        Labels: map[string]string{
                            "ipsa": "reiciendis",
                        },
                    },
                },
                InclusionLabels: []shared.OSPolicyAssignmentLabelSet{
                    shared.OSPolicyAssignmentLabelSet{
                        Labels: map[string]string{
                            "laborum": "dolores",
                            "dolorem": "corporis",
                            "explicabo": "nobis",
                        },
                    },
                    shared.OSPolicyAssignmentLabelSet{
                        Labels: map[string]string{
                            "omnis": "nemo",
                            "minima": "excepturi",
                        },
                    },
                    shared.OSPolicyAssignmentLabelSet{
                        Labels: map[string]string{
                            "iure": "culpa",
                        },
                    },
                },
                Inventories: []shared.OSPolicyAssignmentInstanceFilterInventory{
                    shared.OSPolicyAssignmentInstanceFilterInventory{
                        OsShortName: sdk.String("sapiente"),
                        OsVersion: sdk.String("architecto"),
                    },
                    shared.OSPolicyAssignmentInstanceFilterInventory{
                        OsShortName: sdk.String("mollitia"),
                        OsVersion: sdk.String("dolorem"),
                    },
                    shared.OSPolicyAssignmentInstanceFilterInventory{
                        OsShortName: sdk.String("culpa"),
                        OsVersion: sdk.String("consequuntur"),
                    },
                    shared.OSPolicyAssignmentInstanceFilterInventory{
                        OsShortName: sdk.String("repellat"),
                        OsVersion: sdk.String("mollitia"),
                    },
                },
                OsShortNames: []string{
                    "numquam",
                    "commodi",
                    "quam",
                },
            },
            Name: sdk.String("Shannon Mueller"),
            OsPolicies: []shared.OSPolicy{
                shared.OSPolicy{
                    AllowNoResourceGroupMatch: sdk.Bool(false),
                    Description: sdk.String("laborum"),
                    ID: sdk.String("a52c3f5a-d019-4da1-bfe7-8f097b0074f1"),
                    Mode: shared.OSPolicyModeEnumValidation.ToPointer(),
                    ResourceGroups: []shared.OSPolicyResourceGroup{
                        shared.OSPolicyResourceGroup{
                            InventoryFilters: []shared.OSPolicyInventoryFilter{
                                shared.OSPolicyInventoryFilter{
                                    OsShortName: sdk.String("dicta"),
                                    OsVersion: sdk.String("harum"),
                                },
                                shared.OSPolicyInventoryFilter{
                                    OsShortName: sdk.String("enim"),
                                    OsVersion: sdk.String("accusamus"),
                                },
                            },
                            OsFilter: &shared.OSPolicyOSFilter{
                                OsShortName: sdk.String("commodi"),
                                OsVersion: sdk.String("repudiandae"),
                            },
                            Resources: []shared.OSPolicyResource{
                                shared.OSPolicyResource{
                                    Exec: &shared.OSPolicyResourceExecResource{
                                        Enforce: &shared.OSPolicyResourceExecResourceExec{
                                            Args: []string{
                                                "quidem",
                                            },
                                            File: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("molestias"),
                                                    Generation: sdk.String("excepturi"),
                                                    Object: sdk.String("pariatur"),
                                                },
                                                LocalPath: sdk.String("modi"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("praesentium"),
                                                    URI: sdk.String("https://useful-bonnet.org"),
                                                },
                                            },
                                            Interpreter: shared.OSPolicyResourceExecResourceExecInterpreterEnumShell.ToPointer(),
                                            OutputFilePath: sdk.String("veritatis"),
                                            Script: sdk.String("itaque"),
                                        },
                                        Validate: &shared.OSPolicyResourceExecResourceExec{
                                            Args: []string{
                                                "enim",
                                                "consequatur",
                                            },
                                            File: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("est"),
                                                    Generation: sdk.String("quibusdam"),
                                                    Object: sdk.String("explicabo"),
                                                },
                                                LocalPath: sdk.String("deserunt"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("distinctio"),
                                                    URI: sdk.String("https://flat-directive.biz"),
                                                },
                                            },
                                            Interpreter: shared.OSPolicyResourceExecResourceExecInterpreterEnumNone.ToPointer(),
                                            OutputFilePath: sdk.String("cupiditate"),
                                            Script: sdk.String("quos"),
                                        },
                                    },
                                    File: &shared.OSPolicyResourceFileResource{
                                        Content: sdk.String("perferendis"),
                                        File: &shared.OSPolicyResourceFile{
                                            AllowInsecure: sdk.Bool(false),
                                            Gcs: &shared.OSPolicyResourceFileGcs{
                                                Bucket: sdk.String("magni"),
                                                Generation: sdk.String("assumenda"),
                                                Object: sdk.String("ipsam"),
                                            },
                                            LocalPath: sdk.String("alias"),
                                            Remote: &shared.OSPolicyResourceFileRemote{
                                                Sha256Checksum: sdk.String("fugit"),
                                                URI: sdk.String("https://nimble-displacement.net"),
                                            },
                                        },
                                        Path: sdk.String("tempore"),
                                        Permissions: sdk.String("labore"),
                                        State: shared.OSPolicyResourceFileResourceStateEnumContentsMatch.ToPointer(),
                                    },
                                    ID: sdk.String("63c969e9-a3ef-4a77-9fb1-4cd66ae395ef"),
                                    Pkg: &shared.OSPolicyResourcePackageResource{
                                        Apt: &shared.OSPolicyResourcePackageResourceAPT{
                                            Name: sdk.String("Rene Reinger"),
                                        },
                                        Deb: &shared.OSPolicyResourcePackageResourceDeb{
                                            PullDeps: sdk.Bool(false),
                                            Source: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("deleniti"),
                                                    Generation: sdk.String("sapiente"),
                                                    Object: sdk.String("amet"),
                                                },
                                                LocalPath: sdk.String("deserunt"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("nisi"),
                                                    URI: sdk.String("http://personal-occurrence.info"),
                                                },
                                            },
                                        },
                                        DesiredState: shared.OSPolicyResourcePackageResourceDesiredStateEnumDesiredStateUnspecified.ToPointer(),
                                        Googet: &shared.OSPolicyResourcePackageResourceGooGet{
                                            Name: sdk.String("Megan Rau"),
                                        },
                                        Msi: &shared.OSPolicyResourcePackageResourceMSI{
                                            Properties: []string{
                                                "suscipit",
                                                "natus",
                                            },
                                            Source: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("nobis"),
                                                    Generation: sdk.String("eum"),
                                                    Object: sdk.String("vero"),
                                                },
                                                LocalPath: sdk.String("aspernatur"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("architecto"),
                                                    URI: sdk.String("http://brisk-mobile.info"),
                                                },
                                            },
                                        },
                                        Rpm: &shared.OSPolicyResourcePackageResourceRPM{
                                            PullDeps: sdk.Bool(false),
                                            Source: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("provident"),
                                                    Generation: sdk.String("quos"),
                                                    Object: sdk.String("sint"),
                                                },
                                                LocalPath: sdk.String("accusantium"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("mollitia"),
                                                    URI: sdk.String("https://private-examiner.info"),
                                                },
                                            },
                                        },
                                        Yum: &shared.OSPolicyResourcePackageResourceYUM{
                                            Name: sdk.String("Jana Connelly III"),
                                        },
                                        Zypper: &shared.OSPolicyResourcePackageResourceZypper{
                                            Name: sdk.String("Doyle Gibson"),
                                        },
                                    },
                                    Repository: &shared.OSPolicyResourceRepositoryResource{
                                        Apt: &shared.OSPolicyResourceRepositoryResourceAptRepository{
                                            ArchiveType: shared.OSPolicyResourceRepositoryResourceAptRepositoryArchiveTypeEnumDebSrc.ToPointer(),
                                            Components: []string{
                                                "architecto",
                                                "architecto",
                                            },
                                            Distribution: sdk.String("repudiandae"),
                                            GpgKey: sdk.String("ullam"),
                                            URI: sdk.String("https://knobby-zither.org"),
                                        },
                                        Goo: &shared.OSPolicyResourceRepositoryResourceGooRepository{
                                            Name: sdk.String("Mr. Jenna Stroman"),
                                            URL: sdk.String("natus"),
                                        },
                                        Yum: &shared.OSPolicyResourceRepositoryResourceYumRepository{
                                            BaseURL: sdk.String("magni"),
                                            DisplayName: sdk.String("sunt"),
                                            GpgKeys: []string{
                                                "illum",
                                                "pariatur",
                                                "maxime",
                                                "ea",
                                            },
                                            ID: sdk.String("92601fb5-76b0-4d5f-8d30-c5fbb2587053"),
                                        },
                                        Zypper: &shared.OSPolicyResourceRepositoryResourceZypperRepository{
                                            BaseURL: sdk.String("eos"),
                                            DisplayName: sdk.String("perferendis"),
                                            GpgKeys: []string{
                                                "minus",
                                            },
                                            ID: sdk.String("73d5fe9b-90c2-4890-9b3f-e49a8d9cbf48"),
                                        },
                                    },
                                },
                            },
                        },
                        shared.OSPolicyResourceGroup{
                            InventoryFilters: []shared.OSPolicyInventoryFilter{
                                shared.OSPolicyInventoryFilter{
                                    OsShortName: sdk.String("dolorem"),
                                    OsVersion: sdk.String("dolorem"),
                                },
                                shared.OSPolicyInventoryFilter{
                                    OsShortName: sdk.String("dolor"),
                                    OsVersion: sdk.String("qui"),
                                },
                            },
                            OsFilter: &shared.OSPolicyOSFilter{
                                OsShortName: sdk.String("ipsum"),
                                OsVersion: sdk.String("hic"),
                            },
                            Resources: []shared.OSPolicyResource{
                                shared.OSPolicyResource{
                                    Exec: &shared.OSPolicyResourceExecResource{
                                        Enforce: &shared.OSPolicyResourceExecResourceExec{
                                            Args: []string{
                                                "voluptate",
                                                "dignissimos",
                                                "reiciendis",
                                            },
                                            File: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("amet"),
                                                    Generation: sdk.String("dolorum"),
                                                    Object: sdk.String("numquam"),
                                                },
                                                LocalPath: sdk.String("veritatis"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("ipsa"),
                                                    URI: sdk.String("http://infatuated-keyboarding.biz"),
                                                },
                                            },
                                            Interpreter: shared.OSPolicyResourceExecResourceExecInterpreterEnumPowershell.ToPointer(),
                                            OutputFilePath: sdk.String("quidem"),
                                            Script: sdk.String("voluptatibus"),
                                        },
                                        Validate: &shared.OSPolicyResourceExecResourceExec{
                                            Args: []string{
                                                "natus",
                                                "eos",
                                            },
                                            File: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("atque"),
                                                    Generation: sdk.String("sit"),
                                                    Object: sdk.String("fugiat"),
                                                },
                                                LocalPath: sdk.String("ab"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("soluta"),
                                                    URI: sdk.String("https://late-in-laws.net"),
                                                },
                                            },
                                            Interpreter: shared.OSPolicyResourceExecResourceExecInterpreterEnumShell.ToPointer(),
                                            OutputFilePath: sdk.String("omnis"),
                                            Script: sdk.String("necessitatibus"),
                                        },
                                    },
                                    File: &shared.OSPolicyResourceFileResource{
                                        Content: sdk.String("distinctio"),
                                        File: &shared.OSPolicyResourceFile{
                                            AllowInsecure: sdk.Bool(false),
                                            Gcs: &shared.OSPolicyResourceFileGcs{
                                                Bucket: sdk.String("asperiores"),
                                                Generation: sdk.String("nihil"),
                                                Object: sdk.String("ipsum"),
                                            },
                                            LocalPath: sdk.String("voluptate"),
                                            Remote: &shared.OSPolicyResourceFileRemote{
                                                Sha256Checksum: sdk.String("id"),
                                                URI: sdk.String("https://fake-cat.com"),
                                            },
                                        },
                                        Path: sdk.String("amet"),
                                        Permissions: sdk.String("optio"),
                                        State: shared.OSPolicyResourceFileResourceStateEnumContentsMatch.ToPointer(),
                                    },
                                    ID: sdk.String("5e6a95d8-a0d4-446c-a2af-7a73cf3be453"),
                                    Pkg: &shared.OSPolicyResourcePackageResource{
                                        Apt: &shared.OSPolicyResourcePackageResourceAPT{
                                            Name: sdk.String("Miss Jimmie Kozey"),
                                        },
                                        Deb: &shared.OSPolicyResourcePackageResourceDeb{
                                            PullDeps: sdk.Bool(false),
                                            Source: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("sed"),
                                                    Generation: sdk.String("vel"),
                                                    Object: sdk.String("libero"),
                                                },
                                                LocalPath: sdk.String("voluptas"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("deserunt"),
                                                    URI: sdk.String("http://dry-donor.biz"),
                                                },
                                            },
                                        },
                                        DesiredState: shared.OSPolicyResourcePackageResourceDesiredStateEnumInstalled.ToPointer(),
                                        Googet: &shared.OSPolicyResourcePackageResourceGooGet{
                                            Name: sdk.String("Miss Jody Rogahn"),
                                        },
                                        Msi: &shared.OSPolicyResourcePackageResourceMSI{
                                            Properties: []string{
                                                "aspernatur",
                                                "dolores",
                                            },
                                            Source: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("distinctio"),
                                                    Generation: sdk.String("facilis"),
                                                    Object: sdk.String("aliquid"),
                                                },
                                                LocalPath: sdk.String("quam"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("molestias"),
                                                    URI: sdk.String("https://delightful-cook.com"),
                                                },
                                            },
                                        },
                                        Rpm: &shared.OSPolicyResourcePackageResourceRPM{
                                            PullDeps: sdk.Bool(false),
                                            Source: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("magni"),
                                                    Generation: sdk.String("odio"),
                                                    Object: sdk.String("sunt"),
                                                },
                                                LocalPath: sdk.String("ullam"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("nam"),
                                                    URI: sdk.String("https://ample-sake.net"),
                                                },
                                            },
                                        },
                                        Yum: &shared.OSPolicyResourcePackageResourceYUM{
                                            Name: sdk.String("Carl Turner DDS"),
                                        },
                                        Zypper: &shared.OSPolicyResourcePackageResourceZypper{
                                            Name: sdk.String("Dr. Randolph McDermott"),
                                        },
                                    },
                                    Repository: &shared.OSPolicyResourceRepositoryResource{
                                        Apt: &shared.OSPolicyResourceRepositoryResourceAptRepository{
                                            ArchiveType: shared.OSPolicyResourceRepositoryResourceAptRepositoryArchiveTypeEnumArchiveTypeUnspecified.ToPointer(),
                                            Components: []string{
                                                "adipisci",
                                                "dolorum",
                                            },
                                            Distribution: sdk.String("architecto"),
                                            GpgKey: sdk.String("quae"),
                                            URI: sdk.String("http://narrow-tritone.com"),
                                        },
                                        Goo: &shared.OSPolicyResourceRepositoryResourceGooRepository{
                                            Name: sdk.String("Marcos Schaden"),
                                            URL: sdk.String("facilis"),
                                        },
                                        Yum: &shared.OSPolicyResourceRepositoryResourceYumRepository{
                                            BaseURL: sdk.String("cupiditate"),
                                            DisplayName: sdk.String("qui"),
                                            GpgKeys: []string{
                                                "laudantium",
                                            },
                                            ID: sdk.String("79fce953-f73e-4f7f-bc7a-bd74dd39c0f5"),
                                        },
                                        Zypper: &shared.OSPolicyResourceRepositoryResourceZypperRepository{
                                            BaseURL: sdk.String("nulla"),
                                            DisplayName: sdk.String("fugit"),
                                            GpgKeys: []string{
                                                "maiores",
                                                "doloribus",
                                                "iusto",
                                                "eligendi",
                                            },
                                            ID: sdk.String("70a45626-d436-4813-b16d-9f5fce6c5561"),
                                        },
                                    },
                                },
                                shared.OSPolicyResource{
                                    Exec: &shared.OSPolicyResourceExecResource{
                                        Enforce: &shared.OSPolicyResourceExecResourceExec{
                                            Args: []string{
                                                "ea",
                                                "quo",
                                            },
                                            File: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("consectetur"),
                                                    Generation: sdk.String("recusandae"),
                                                    Object: sdk.String("aspernatur"),
                                                },
                                                LocalPath: sdk.String("minima"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("eaque"),
                                                    URI: sdk.String("https://scornful-aftermath.com"),
                                                },
                                            },
                                            Interpreter: shared.OSPolicyResourceExecResourceExecInterpreterEnumShell.ToPointer(),
                                            OutputFilePath: sdk.String("impedit"),
                                            Script: sdk.String("aliquam"),
                                        },
                                        Validate: &shared.OSPolicyResourceExecResourceExec{
                                            Args: []string{
                                                "accusamus",
                                            },
                                            File: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("inventore"),
                                                    Generation: sdk.String("non"),
                                                    Object: sdk.String("et"),
                                                },
                                                LocalPath: sdk.String("dolorum"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("laborum"),
                                                    URI: sdk.String("https://evergreen-homogenate.info"),
                                                },
                                            },
                                            Interpreter: shared.OSPolicyResourceExecResourceExecInterpreterEnumPowershell.ToPointer(),
                                            OutputFilePath: sdk.String("quas"),
                                            Script: sdk.String("assumenda"),
                                        },
                                    },
                                    File: &shared.OSPolicyResourceFileResource{
                                        Content: sdk.String("nulla"),
                                        File: &shared.OSPolicyResourceFile{
                                            AllowInsecure: sdk.Bool(false),
                                            Gcs: &shared.OSPolicyResourceFileGcs{
                                                Bucket: sdk.String("voluptas"),
                                                Generation: sdk.String("libero"),
                                                Object: sdk.String("quasi"),
                                            },
                                            LocalPath: sdk.String("tempora"),
                                            Remote: &shared.OSPolicyResourceFileRemote{
                                                Sha256Checksum: sdk.String("numquam"),
                                                URI: sdk.String("http://optimistic-avenue.info"),
                                            },
                                        },
                                        Path: sdk.String("magnam"),
                                        Permissions: sdk.String("odio"),
                                        State: shared.OSPolicyResourceFileResourceStateEnumPresent.ToPointer(),
                                    },
                                    ID: sdk.String("778a7bd4-66d2-48c1-8ab3-cdca4251904e"),
                                    Pkg: &shared.OSPolicyResourcePackageResource{
                                        Apt: &shared.OSPolicyResourcePackageResourceAPT{
                                            Name: sdk.String("Kelly Donnelly"),
                                        },
                                        Deb: &shared.OSPolicyResourcePackageResourceDeb{
                                            PullDeps: sdk.Bool(false),
                                            Source: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("recusandae"),
                                                    Generation: sdk.String("aperiam"),
                                                    Object: sdk.String("distinctio"),
                                                },
                                                LocalPath: sdk.String("quod"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("dignissimos"),
                                                    URI: sdk.String("http://knobby-liver.org"),
                                                },
                                            },
                                        },
                                        DesiredState: shared.OSPolicyResourcePackageResourceDesiredStateEnumDesiredStateUnspecified.ToPointer(),
                                        Googet: &shared.OSPolicyResourcePackageResourceGooGet{
                                            Name: sdk.String("Violet Johns"),
                                        },
                                        Msi: &shared.OSPolicyResourcePackageResourceMSI{
                                            Properties: []string{
                                                "molestiae",
                                                "accusantium",
                                                "porro",
                                            },
                                            Source: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("eum"),
                                                    Generation: sdk.String("quas"),
                                                    Object: sdk.String("praesentium"),
                                                },
                                                LocalPath: sdk.String("consequuntur"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("deleniti"),
                                                    URI: sdk.String("http://reckless-perch.biz"),
                                                },
                                            },
                                        },
                                        Rpm: &shared.OSPolicyResourcePackageResourceRPM{
                                            PullDeps: sdk.Bool(false),
                                            Source: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("atque"),
                                                    Generation: sdk.String("explicabo"),
                                                    Object: sdk.String("minima"),
                                                },
                                                LocalPath: sdk.String("nisi"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("fugit"),
                                                    URI: sdk.String("https://cumbersome-community.com"),
                                                },
                                            },
                                        },
                                        Yum: &shared.OSPolicyResourcePackageResourceYUM{
                                            Name: sdk.String("Ms. Marion Little"),
                                        },
                                        Zypper: &shared.OSPolicyResourcePackageResourceZypper{
                                            Name: sdk.String("Patrick Koch"),
                                        },
                                    },
                                    Repository: &shared.OSPolicyResourceRepositoryResource{
                                        Apt: &shared.OSPolicyResourceRepositoryResourceAptRepository{
                                            ArchiveType: shared.OSPolicyResourceRepositoryResourceAptRepositoryArchiveTypeEnumDebSrc.ToPointer(),
                                            Components: []string{
                                                "quasi",
                                                "saepe",
                                            },
                                            Distribution: sdk.String("vel"),
                                            GpgKey: sdk.String("harum"),
                                            URI: sdk.String("http://right-mouse.biz"),
                                        },
                                        Goo: &shared.OSPolicyResourceRepositoryResourceGooRepository{
                                            Name: sdk.String("Guillermo Balistreri"),
                                            URL: sdk.String("adipisci"),
                                        },
                                        Yum: &shared.OSPolicyResourceRepositoryResourceYumRepository{
                                            BaseURL: sdk.String("cumque"),
                                            DisplayName: sdk.String("consequuntur"),
                                            GpgKeys: []string{
                                                "minus",
                                            },
                                            ID: sdk.String("4f3789fd-871f-499d-92ef-d121aa6f1e67"),
                                        },
                                        Zypper: &shared.OSPolicyResourceRepositoryResourceZypperRepository{
                                            BaseURL: sdk.String("eius"),
                                            DisplayName: sdk.String("libero"),
                                            GpgKeys: []string{
                                                "soluta",
                                                "accusantium",
                                                "aliquam",
                                                "sapiente",
                                            },
                                            ID: sdk.String("15756082-d68e-4a19-b1d1-7051339d0808"),
                                        },
                                    },
                                },
                                shared.OSPolicyResource{
                                    Exec: &shared.OSPolicyResourceExecResource{
                                        Enforce: &shared.OSPolicyResourceExecResourceExec{
                                            Args: []string{
                                                "mollitia",
                                                "ab",
                                            },
                                            File: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("corrupti"),
                                                    Generation: sdk.String("non"),
                                                    Object: sdk.String("voluptatem"),
                                                },
                                                LocalPath: sdk.String("dolor"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("occaecati"),
                                                    URI: sdk.String("http://sneaky-cardigan.info"),
                                                },
                                            },
                                            Interpreter: shared.OSPolicyResourceExecResourceExecInterpreterEnumInterpreterUnspecified.ToPointer(),
                                            OutputFilePath: sdk.String("dignissimos"),
                                            Script: sdk.String("dicta"),
                                        },
                                        Validate: &shared.OSPolicyResourceExecResourceExec{
                                            Args: []string{
                                                "natus",
                                                "velit",
                                                "voluptatibus",
                                                "voluptas",
                                            },
                                            File: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("asperiores"),
                                                    Generation: sdk.String("aperiam"),
                                                    Object: sdk.String("ea"),
                                                },
                                                LocalPath: sdk.String("quaerat"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("consequuntur"),
                                                    URI: sdk.String("https://portly-silver.info"),
                                                },
                                            },
                                            Interpreter: shared.OSPolicyResourceExecResourceExecInterpreterEnumShell.ToPointer(),
                                            OutputFilePath: sdk.String("asperiores"),
                                            Script: sdk.String("nemo"),
                                        },
                                    },
                                    File: &shared.OSPolicyResourceFileResource{
                                        Content: sdk.String("quae"),
                                        File: &shared.OSPolicyResourceFile{
                                            AllowInsecure: sdk.Bool(false),
                                            Gcs: &shared.OSPolicyResourceFileGcs{
                                                Bucket: sdk.String("quaerat"),
                                                Generation: sdk.String("porro"),
                                                Object: sdk.String("quod"),
                                            },
                                            LocalPath: sdk.String("labore"),
                                            Remote: &shared.OSPolicyResourceFileRemote{
                                                Sha256Checksum: sdk.String("ab"),
                                                URI: sdk.String("http://real-pink.info"),
                                            },
                                        },
                                        Path: sdk.String("velit"),
                                        Permissions: sdk.String("culpa"),
                                        State: shared.OSPolicyResourceFileResourceStateEnumAbsent.ToPointer(),
                                    },
                                    ID: sdk.String("e8d67864-dbb6-475f-95e6-0b375ed4f6fb"),
                                    Pkg: &shared.OSPolicyResourcePackageResource{
                                        Apt: &shared.OSPolicyResourcePackageResourceAPT{
                                            Name: sdk.String("Dr. Terence Gulgowski"),
                                        },
                                        Deb: &shared.OSPolicyResourcePackageResourceDeb{
                                            PullDeps: sdk.Bool(false),
                                            Source: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("non"),
                                                    Generation: sdk.String("amet"),
                                                    Object: sdk.String("beatae"),
                                                },
                                                LocalPath: sdk.String("dignissimos"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("a"),
                                                    URI: sdk.String("https://empty-foot.net"),
                                                },
                                            },
                                        },
                                        DesiredState: shared.OSPolicyResourcePackageResourceDesiredStateEnumInstalled.ToPointer(),
                                        Googet: &shared.OSPolicyResourcePackageResourceGooGet{
                                            Name: sdk.String("Dr. Silvia Renner"),
                                        },
                                        Msi: &shared.OSPolicyResourcePackageResourceMSI{
                                            Properties: []string{
                                                "aspernatur",
                                                "voluptas",
                                            },
                                            Source: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("voluptas"),
                                                    Generation: sdk.String("voluptas"),
                                                    Object: sdk.String("minima"),
                                                },
                                                LocalPath: sdk.String("nobis"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("dolorum"),
                                                    URI: sdk.String("http://stable-closing.name"),
                                                },
                                            },
                                        },
                                        Rpm: &shared.OSPolicyResourcePackageResourceRPM{
                                            PullDeps: sdk.Bool(false),
                                            Source: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("in"),
                                                    Generation: sdk.String("dolore"),
                                                    Object: sdk.String("aliquam"),
                                                },
                                                LocalPath: sdk.String("officiis"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("temporibus"),
                                                    URI: sdk.String("http://enraged-repayment.name"),
                                                },
                                            },
                                        },
                                        Yum: &shared.OSPolicyResourcePackageResourceYUM{
                                            Name: sdk.String("Moses Douglas"),
                                        },
                                        Zypper: &shared.OSPolicyResourcePackageResourceZypper{
                                            Name: sdk.String("Jimmie Weimann"),
                                        },
                                    },
                                    Repository: &shared.OSPolicyResourceRepositoryResource{
                                        Apt: &shared.OSPolicyResourceRepositoryResourceAptRepository{
                                            ArchiveType: shared.OSPolicyResourceRepositoryResourceAptRepositoryArchiveTypeEnumArchiveTypeUnspecified.ToPointer(),
                                            Components: []string{
                                                "sed",
                                                "reiciendis",
                                                "explicabo",
                                            },
                                            Distribution: sdk.String("asperiores"),
                                            GpgKey: sdk.String("facilis"),
                                            URI: sdk.String("http://rundown-bathrobe.name"),
                                        },
                                        Goo: &shared.OSPolicyResourceRepositoryResourceGooRepository{
                                            Name: sdk.String("Janie Cremin"),
                                            URL: sdk.String("quidem"),
                                        },
                                        Yum: &shared.OSPolicyResourceRepositoryResourceYumRepository{
                                            BaseURL: sdk.String("explicabo"),
                                            DisplayName: sdk.String("voluptas"),
                                            GpgKeys: []string{
                                                "architecto",
                                                "suscipit",
                                                "sapiente",
                                            },
                                            ID: sdk.String("e1f08f42-94e3-4698-b447-f603e8b445e8"),
                                        },
                                        Zypper: &shared.OSPolicyResourceRepositoryResourceZypperRepository{
                                            BaseURL: sdk.String("sit"),
                                            DisplayName: sdk.String("nobis"),
                                            GpgKeys: []string{
                                                "veniam",
                                                "minima",
                                                "recusandae",
                                            },
                                            ID: sdk.String("fd20e457-e185-48b6-a89f-be3a5aa8e482"),
                                        },
                                    },
                                },
                            },
                        },
                    },
                },
            },
            Rollout: &shared.OSPolicyAssignmentRollout{
                DisruptionBudget: &shared.FixedOrPercent{
                    Fixed: sdk.Int(282699),
                    Percent: sdk.Int(856303),
                },
                MinWaitDuration: sdk.String("voluptatem"),
            },
        },
        AccessToken: sdk.String("culpa"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("magnam"),
        Fields: sdk.String("consequatur"),
        Key: sdk.String("esse"),
        OauthToken: sdk.String("ipsam"),
        OsPolicyAssignmentID: sdk.String("sit"),
        Parent: "voluptatum",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quas"),
        UploadType: sdk.String("repudiandae"),
        UploadProtocol: sdk.String("corporis"),
    }, operations.OsconfigProjectsLocationsOsPolicyAssignmentsCreateSecurity{
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

## OsconfigProjectsLocationsOsPolicyAssignmentsDelete

Delete the OS policy assignment. This method creates a new revision of the OS policy assignment. This method returns a long running operation (LRO) that contains the rollout details. The rollout can be cancelled by cancelling the LRO. If the LRO completes and is not cancelled, all revisions associated with the OS policy assignment are deleted. For more information, see [Method: projects.locations.osPolicyAssignments.operations.cancel](https://cloud.google.com/compute/docs/osconfig/rest/v1alpha/projects.locations.osPolicyAssignments.operations/cancel).

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
    res, err := s.Projects.OsconfigProjectsLocationsOsPolicyAssignmentsDelete(ctx, operations.OsconfigProjectsLocationsOsPolicyAssignmentsDeleteRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("blanditiis"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("sed"),
        Fields: sdk.String("sit"),
        Key: sdk.String("vel"),
        Name: "Mrs. Tricia Mueller",
        OauthToken: sdk.String("dolorem"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("harum"),
        UploadType: sdk.String("dicta"),
        UploadProtocol: sdk.String("architecto"),
    }, operations.OsconfigProjectsLocationsOsPolicyAssignmentsDeleteSecurity{
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

## OsconfigProjectsLocationsOsPolicyAssignmentsList

List the OS policy assignments under the parent resource. For each OS policy assignment, the latest revision is returned.

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
    res, err := s.Projects.OsconfigProjectsLocationsOsPolicyAssignmentsList(ctx, operations.OsconfigProjectsLocationsOsPolicyAssignmentsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("labore"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("atque"),
        Fields: sdk.String("laborum"),
        Key: sdk.String("nam"),
        OauthToken: sdk.String("tenetur"),
        PageSize: sdk.Int64(388867),
        PageToken: sdk.String("alias"),
        Parent: "amet",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("deserunt"),
        UploadType: sdk.String("voluptate"),
        UploadProtocol: sdk.String("unde"),
    }, operations.OsconfigProjectsLocationsOsPolicyAssignmentsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListOSPolicyAssignmentsResponse != nil {
        // handle response
    }
}
```

## OsconfigProjectsLocationsOsPolicyAssignmentsListRevisions

List the OS policy assignment revisions for a given OS policy assignment.

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
    res, err := s.Projects.OsconfigProjectsLocationsOsPolicyAssignmentsListRevisions(ctx, operations.OsconfigProjectsLocationsOsPolicyAssignmentsListRevisionsRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("provident"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("delectus"),
        Fields: sdk.String("voluptates"),
        Key: sdk.String("perferendis"),
        Name: "Rickey Kiehn",
        OauthToken: sdk.String("praesentium"),
        PageSize: sdk.Int64(648598),
        PageToken: sdk.String("veniam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("voluptatem"),
        UploadType: sdk.String("quisquam"),
        UploadProtocol: sdk.String("repudiandae"),
    }, operations.OsconfigProjectsLocationsOsPolicyAssignmentsListRevisionsSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListOSPolicyAssignmentRevisionsResponse != nil {
        // handle response
    }
}
```

## OsconfigProjectsLocationsOsPolicyAssignmentsOperationsCancel

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
    res, err := s.Projects.OsconfigProjectsLocationsOsPolicyAssignmentsOperationsCancel(ctx, operations.OsconfigProjectsLocationsOsPolicyAssignmentsOperationsCancelRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        RequestBody: map[string]interface{}{
            "reprehenderit": "asperiores",
            "totam": "suscipit",
            "quidem": "maxime",
        },
        AccessToken: sdk.String("et"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("amet"),
        Fields: sdk.String("assumenda"),
        Key: sdk.String("ea"),
        Name: "Evan Torphy",
        OauthToken: sdk.String("natus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("minima"),
        UploadType: sdk.String("aspernatur"),
        UploadProtocol: sdk.String("ex"),
    }, operations.OsconfigProjectsLocationsOsPolicyAssignmentsOperationsCancelSecurity{
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

## OsconfigProjectsLocationsOsPolicyAssignmentsOperationsGet

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

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
    res, err := s.Projects.OsconfigProjectsLocationsOsPolicyAssignmentsOperationsGet(ctx, operations.OsconfigProjectsLocationsOsPolicyAssignmentsOperationsGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("corrupti"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("error"),
        Fields: sdk.String("blanditiis"),
        Key: sdk.String("suscipit"),
        Name: "Dr. Ivan Littel",
        OauthToken: sdk.String("repellendus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("labore"),
        UploadType: sdk.String("reiciendis"),
        UploadProtocol: sdk.String("doloremque"),
        View: operations.OsconfigProjectsLocationsOsPolicyAssignmentsOperationsGetViewEnumFull.ToPointer(),
    }, operations.OsconfigProjectsLocationsOsPolicyAssignmentsOperationsGetSecurity{
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

## OsconfigProjectsLocationsOsPolicyAssignmentsPatch

Update an existing OS policy assignment. This method creates a new revision of the OS policy assignment. This method returns a long running operation (LRO) that contains the rollout details. The rollout can be cancelled by cancelling the LRO. For more information, see [Method: projects.locations.osPolicyAssignments.operations.cancel](https://cloud.google.com/compute/docs/osconfig/rest/v1alpha/projects.locations.osPolicyAssignments.operations/cancel).

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
    res, err := s.Projects.OsconfigProjectsLocationsOsPolicyAssignmentsPatch(ctx, operations.OsconfigProjectsLocationsOsPolicyAssignmentsPatchRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        OSPolicyAssignmentInput: &shared.OSPolicyAssignmentInput{
            Description: sdk.String("accusantium"),
            Etag: sdk.String("beatae"),
            InstanceFilter: &shared.OSPolicyAssignmentInstanceFilter{
                All: sdk.Bool(false),
                ExclusionLabels: []shared.OSPolicyAssignmentLabelSet{
                    shared.OSPolicyAssignmentLabelSet{
                        Labels: map[string]string{
                            "laboriosam": "velit",
                            "a": "molestias",
                        },
                    },
                },
                InclusionLabels: []shared.OSPolicyAssignmentLabelSet{
                    shared.OSPolicyAssignmentLabelSet{
                        Labels: map[string]string{
                            "consequuntur": "occaecati",
                            "officiis": "perspiciatis",
                            "in": "adipisci",
                            "eveniet": "occaecati",
                        },
                    },
                    shared.OSPolicyAssignmentLabelSet{
                        Labels: map[string]string{
                            "fugit": "id",
                        },
                    },
                },
                Inventories: []shared.OSPolicyAssignmentInstanceFilterInventory{
                    shared.OSPolicyAssignmentInstanceFilterInventory{
                        OsShortName: sdk.String("reprehenderit"),
                        OsVersion: sdk.String("error"),
                    },
                    shared.OSPolicyAssignmentInstanceFilterInventory{
                        OsShortName: sdk.String("illo"),
                        OsVersion: sdk.String("corporis"),
                    },
                },
                OsShortNames: []string{
                    "eveniet",
                    "non",
                    "vero",
                },
            },
            Name: sdk.String("Vera Beier IV"),
            OsPolicies: []shared.OSPolicy{
                shared.OSPolicy{
                    AllowNoResourceGroupMatch: sdk.Bool(false),
                    Description: sdk.String("qui"),
                    ID: sdk.String("b6e3ab88-45f0-4597-a60f-f2a54a31e947"),
                    Mode: shared.OSPolicyModeEnumValidation.ToPointer(),
                    ResourceGroups: []shared.OSPolicyResourceGroup{
                        shared.OSPolicyResourceGroup{
                            InventoryFilters: []shared.OSPolicyInventoryFilter{
                                shared.OSPolicyInventoryFilter{
                                    OsShortName: sdk.String("adipisci"),
                                    OsVersion: sdk.String("debitis"),
                                },
                                shared.OSPolicyInventoryFilter{
                                    OsShortName: sdk.String("laudantium"),
                                    OsVersion: sdk.String("eum"),
                                },
                                shared.OSPolicyInventoryFilter{
                                    OsShortName: sdk.String("nemo"),
                                    OsVersion: sdk.String("recusandae"),
                                },
                            },
                            OsFilter: &shared.OSPolicyOSFilter{
                                OsShortName: sdk.String("esse"),
                                OsVersion: sdk.String("provident"),
                            },
                            Resources: []shared.OSPolicyResource{
                                shared.OSPolicyResource{
                                    Exec: &shared.OSPolicyResourceExecResource{
                                        Enforce: &shared.OSPolicyResourceExecResourceExec{
                                            Args: []string{
                                                "reiciendis",
                                                "provident",
                                            },
                                            File: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("aspernatur"),
                                                    Generation: sdk.String("ullam"),
                                                    Object: sdk.String("quasi"),
                                                },
                                                LocalPath: sdk.String("animi"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("nostrum"),
                                                    URI: sdk.String("https://optimal-society.name"),
                                                },
                                            },
                                            Interpreter: shared.OSPolicyResourceExecResourceExecInterpreterEnumNone.ToPointer(),
                                            OutputFilePath: sdk.String("aliquid"),
                                            Script: sdk.String("accusantium"),
                                        },
                                        Validate: &shared.OSPolicyResourceExecResourceExec{
                                            Args: []string{
                                                "doloribus",
                                                "ullam",
                                                "in",
                                                "nam",
                                            },
                                            File: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("earum"),
                                                    Generation: sdk.String("officia"),
                                                    Object: sdk.String("laborum"),
                                                },
                                                LocalPath: sdk.String("placeat"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("modi"),
                                                    URI: sdk.String("https://negligible-tea.org"),
                                                },
                                            },
                                            Interpreter: shared.OSPolicyResourceExecResourceExecInterpreterEnumPowershell.ToPointer(),
                                            OutputFilePath: sdk.String("vitae"),
                                            Script: sdk.String("rerum"),
                                        },
                                    },
                                    File: &shared.OSPolicyResourceFileResource{
                                        Content: sdk.String("tempora"),
                                        File: &shared.OSPolicyResourceFile{
                                            AllowInsecure: sdk.Bool(false),
                                            Gcs: &shared.OSPolicyResourceFileGcs{
                                                Bucket: sdk.String("quis"),
                                                Generation: sdk.String("inventore"),
                                                Object: sdk.String("fugit"),
                                            },
                                            LocalPath: sdk.String("cumque"),
                                            Remote: &shared.OSPolicyResourceFileRemote{
                                                Sha256Checksum: sdk.String("quae"),
                                                URI: sdk.String("http://essential-cat.info"),
                                            },
                                        },
                                        Path: sdk.String("eius"),
                                        Permissions: sdk.String("rem"),
                                        State: shared.OSPolicyResourceFileResourceStateEnumContentsMatch.ToPointer(),
                                    },
                                    ID: sdk.String("c2f61519-9ebf-4d0e-9fe6-c632ca3aed01"),
                                    Pkg: &shared.OSPolicyResourcePackageResource{
                                        Apt: &shared.OSPolicyResourcePackageResourceAPT{
                                            Name: sdk.String("Dora Mosciski"),
                                        },
                                        Deb: &shared.OSPolicyResourcePackageResourceDeb{
                                            PullDeps: sdk.Bool(false),
                                            Source: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("adipisci"),
                                                    Generation: sdk.String("quasi"),
                                                    Object: sdk.String("magni"),
                                                },
                                                LocalPath: sdk.String("doloribus"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("nulla"),
                                                    URI: sdk.String("https://babyish-dissemination.info"),
                                                },
                                            },
                                        },
                                        DesiredState: shared.OSPolicyResourcePackageResourceDesiredStateEnumInstalled.ToPointer(),
                                        Googet: &shared.OSPolicyResourcePackageResourceGooGet{
                                            Name: sdk.String("Marlene Koch"),
                                        },
                                        Msi: &shared.OSPolicyResourcePackageResourceMSI{
                                            Properties: []string{
                                                "vel",
                                                "architecto",
                                                "fugiat",
                                                "doloremque",
                                            },
                                            Source: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("dicta"),
                                                    Generation: sdk.String("odio"),
                                                    Object: sdk.String("tempora"),
                                                },
                                                LocalPath: sdk.String("esse"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("ex"),
                                                    URI: sdk.String("http://icky-badge.net"),
                                                },
                                            },
                                        },
                                        Rpm: &shared.OSPolicyResourcePackageResourceRPM{
                                            PullDeps: sdk.Bool(false),
                                            Source: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("sunt"),
                                                    Generation: sdk.String("nostrum"),
                                                    Object: sdk.String("fugiat"),
                                                },
                                                LocalPath: sdk.String("expedita"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("aliquid"),
                                                    URI: sdk.String("https://helpful-gravity.com"),
                                                },
                                            },
                                        },
                                        Yum: &shared.OSPolicyResourcePackageResourceYUM{
                                            Name: sdk.String("Melanie Morar V"),
                                        },
                                        Zypper: &shared.OSPolicyResourcePackageResourceZypper{
                                            Name: sdk.String("Pat O'Keefe"),
                                        },
                                    },
                                    Repository: &shared.OSPolicyResourceRepositoryResource{
                                        Apt: &shared.OSPolicyResourceRepositoryResourceAptRepository{
                                            ArchiveType: shared.OSPolicyResourceRepositoryResourceAptRepositoryArchiveTypeEnumArchiveTypeUnspecified.ToPointer(),
                                            Components: []string{
                                                "enim",
                                                "vitae",
                                                "repellendus",
                                            },
                                            Distribution: sdk.String("ex"),
                                            GpgKey: sdk.String("quo"),
                                            URI: sdk.String("http://filthy-examiner.net"),
                                        },
                                        Goo: &shared.OSPolicyResourceRepositoryResourceGooRepository{
                                            Name: sdk.String("Leona Rippin IV"),
                                            URL: sdk.String("omnis"),
                                        },
                                        Yum: &shared.OSPolicyResourceRepositoryResourceYumRepository{
                                            BaseURL: sdk.String("veritatis"),
                                            DisplayName: sdk.String("rerum"),
                                            GpgKeys: []string{
                                                "culpa",
                                                "voluptatem",
                                                "sapiente",
                                            },
                                            ID: sdk.String("e1ade008-e6f8-4c5f-b50d-8cdb5a341814"),
                                        },
                                        Zypper: &shared.OSPolicyResourceRepositoryResourceZypperRepository{
                                            BaseURL: sdk.String("dolor"),
                                            DisplayName: sdk.String("consequatur"),
                                            GpgKeys: []string{
                                                "sit",
                                            },
                                            ID: sdk.String("421813d5-208e-4ce7-a253-b668451c6c6e"),
                                        },
                                    },
                                },
                                shared.OSPolicyResource{
                                    Exec: &shared.OSPolicyResourceExecResource{
                                        Enforce: &shared.OSPolicyResourceExecResourceExec{
                                            Args: []string{
                                                "voluptatem",
                                            },
                                            File: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("exercitationem"),
                                                    Generation: sdk.String("necessitatibus"),
                                                    Object: sdk.String("quasi"),
                                                },
                                                LocalPath: sdk.String("nisi"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("at"),
                                                    URI: sdk.String("https://quarrelsome-pricing.biz"),
                                                },
                                            },
                                            Interpreter: shared.OSPolicyResourceExecResourceExecInterpreterEnumPowershell.ToPointer(),
                                            OutputFilePath: sdk.String("repudiandae"),
                                            Script: sdk.String("optio"),
                                        },
                                        Validate: &shared.OSPolicyResourceExecResourceExec{
                                            Args: []string{
                                                "nemo",
                                                "voluptate",
                                                "blanditiis",
                                            },
                                            File: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("officia"),
                                                    Generation: sdk.String("voluptas"),
                                                    Object: sdk.String("numquam"),
                                                },
                                                LocalPath: sdk.String("nemo"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("quos"),
                                                    URI: sdk.String("http://compassionate-ladder.biz"),
                                                },
                                            },
                                            Interpreter: shared.OSPolicyResourceExecResourceExecInterpreterEnumShell.ToPointer(),
                                            OutputFilePath: sdk.String("laudantium"),
                                            Script: sdk.String("incidunt"),
                                        },
                                    },
                                    File: &shared.OSPolicyResourceFileResource{
                                        Content: sdk.String("quasi"),
                                        File: &shared.OSPolicyResourceFile{
                                            AllowInsecure: sdk.Bool(false),
                                            Gcs: &shared.OSPolicyResourceFileGcs{
                                                Bucket: sdk.String("rem"),
                                                Generation: sdk.String("fugiat"),
                                                Object: sdk.String("dicta"),
                                            },
                                            LocalPath: sdk.String("nisi"),
                                            Remote: &shared.OSPolicyResourceFileRemote{
                                                Sha256Checksum: sdk.String("consequuntur"),
                                                URI: sdk.String("http://assured-mycoplasma.org"),
                                            },
                                        },
                                        Path: sdk.String("soluta"),
                                        Permissions: sdk.String("alias"),
                                        State: shared.OSPolicyResourceFileResourceStateEnumAbsent.ToPointer(),
                                    },
                                    ID: sdk.String("29921aef-b9f5-48c4-986e-68e4be056013"),
                                    Pkg: &shared.OSPolicyResourcePackageResource{
                                        Apt: &shared.OSPolicyResourcePackageResourceAPT{
                                            Name: sdk.String("Lloyd Mayer"),
                                        },
                                        Deb: &shared.OSPolicyResourcePackageResourceDeb{
                                            PullDeps: sdk.Bool(false),
                                            Source: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("esse"),
                                                    Generation: sdk.String("nemo"),
                                                    Object: sdk.String("reprehenderit"),
                                                },
                                                LocalPath: sdk.String("est"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("quis"),
                                                    URI: sdk.String("https://unaware-scheme.org"),
                                                },
                                            },
                                        },
                                        DesiredState: shared.OSPolicyResourcePackageResourceDesiredStateEnumRemoved.ToPointer(),
                                        Googet: &shared.OSPolicyResourcePackageResourceGooGet{
                                            Name: sdk.String("Ruben Hodkiewicz"),
                                        },
                                        Msi: &shared.OSPolicyResourcePackageResourceMSI{
                                            Properties: []string{
                                                "minus",
                                            },
                                            Source: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("fuga"),
                                                    Generation: sdk.String("laborum"),
                                                    Object: sdk.String("consectetur"),
                                                },
                                                LocalPath: sdk.String("velit"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("atque"),
                                                    URI: sdk.String("http://sociable-class.net"),
                                                },
                                            },
                                        },
                                        Rpm: &shared.OSPolicyResourcePackageResourceRPM{
                                            PullDeps: sdk.Bool(false),
                                            Source: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("repudiandae"),
                                                    Generation: sdk.String("nam"),
                                                    Object: sdk.String("dolore"),
                                                },
                                                LocalPath: sdk.String("iusto"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("voluptate"),
                                                    URI: sdk.String("http://live-cooperation.net"),
                                                },
                                            },
                                        },
                                        Yum: &shared.OSPolicyResourcePackageResourceYUM{
                                            Name: sdk.String("Ellis Kessler"),
                                        },
                                        Zypper: &shared.OSPolicyResourcePackageResourceZypper{
                                            Name: sdk.String("Dr. Megan Spinka"),
                                        },
                                    },
                                    Repository: &shared.OSPolicyResourceRepositoryResource{
                                        Apt: &shared.OSPolicyResourceRepositoryResourceAptRepository{
                                            ArchiveType: shared.OSPolicyResourceRepositoryResourceAptRepositoryArchiveTypeEnumArchiveTypeUnspecified.ToPointer(),
                                            Components: []string{
                                                "quia",
                                                "porro",
                                                "aliquam",
                                                "velit",
                                            },
                                            Distribution: sdk.String("illo"),
                                            GpgKey: sdk.String("accusantium"),
                                            URI: sdk.String("http://ill-broadcast.org"),
                                        },
                                        Goo: &shared.OSPolicyResourceRepositoryResourceGooRepository{
                                            Name: sdk.String("Franklin Franecki"),
                                            URL: sdk.String("earum"),
                                        },
                                        Yum: &shared.OSPolicyResourceRepositoryResourceYumRepository{
                                            BaseURL: sdk.String("dicta"),
                                            DisplayName: sdk.String("impedit"),
                                            GpgKeys: []string{
                                                "iste",
                                                "itaque",
                                                "alias",
                                                "nisi",
                                            },
                                            ID: sdk.String("e3a43700-0ae6-4b6b-89b8-f759eac55a97"),
                                        },
                                        Zypper: &shared.OSPolicyResourceRepositoryResourceZypperRepository{
                                            BaseURL: sdk.String("labore"),
                                            DisplayName: sdk.String("veritatis"),
                                            GpgKeys: []string{
                                                "consectetur",
                                                "vitae",
                                                "inventore",
                                                "dolorem",
                                            },
                                            ID: sdk.String("52965bb8-a720-4261-9435-e139dbc2259b"),
                                        },
                                    },
                                },
                            },
                        },
                        shared.OSPolicyResourceGroup{
                            InventoryFilters: []shared.OSPolicyInventoryFilter{
                                shared.OSPolicyInventoryFilter{
                                    OsShortName: sdk.String("id"),
                                    OsVersion: sdk.String("libero"),
                                },
                            },
                            OsFilter: &shared.OSPolicyOSFilter{
                                OsShortName: sdk.String("fugiat"),
                                OsVersion: sdk.String("officia"),
                            },
                            Resources: []shared.OSPolicyResource{
                                shared.OSPolicyResource{
                                    Exec: &shared.OSPolicyResourceExecResource{
                                        Enforce: &shared.OSPolicyResourceExecResourceExec{
                                            Args: []string{
                                                "sit",
                                                "iusto",
                                                "ipsa",
                                                "voluptates",
                                            },
                                            File: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("inventore"),
                                                    Generation: sdk.String("aperiam"),
                                                    Object: sdk.String("totam"),
                                                },
                                                LocalPath: sdk.String("dolore"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("eligendi"),
                                                    URI: sdk.String("https://anchored-hay.info"),
                                                },
                                            },
                                            Interpreter: shared.OSPolicyResourceExecResourceExecInterpreterEnumInterpreterUnspecified.ToPointer(),
                                            OutputFilePath: sdk.String("assumenda"),
                                            Script: sdk.String("beatae"),
                                        },
                                        Validate: &shared.OSPolicyResourceExecResourceExec{
                                            Args: []string{
                                                "facere",
                                                "corrupti",
                                                "molestiae",
                                            },
                                            File: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("provident"),
                                                    Generation: sdk.String("accusamus"),
                                                    Object: sdk.String("necessitatibus"),
                                                },
                                                LocalPath: sdk.String("tempore"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("sint"),
                                                    URI: sdk.String("http://impossible-gaffe.net"),
                                                },
                                            },
                                            Interpreter: shared.OSPolicyResourceExecResourceExecInterpreterEnumShell.ToPointer(),
                                            OutputFilePath: sdk.String("corporis"),
                                            Script: sdk.String("officiis"),
                                        },
                                    },
                                    File: &shared.OSPolicyResourceFileResource{
                                        Content: sdk.String("voluptatibus"),
                                        File: &shared.OSPolicyResourceFile{
                                            AllowInsecure: sdk.Bool(false),
                                            Gcs: &shared.OSPolicyResourceFileGcs{
                                                Bucket: sdk.String("cum"),
                                                Generation: sdk.String("at"),
                                                Object: sdk.String("alias"),
                                            },
                                            LocalPath: sdk.String("quia"),
                                            Remote: &shared.OSPolicyResourceFileRemote{
                                                Sha256Checksum: sdk.String("quidem"),
                                                URI: sdk.String("https://vacant-anyone.net"),
                                            },
                                        },
                                        Path: sdk.String("officiis"),
                                        Permissions: sdk.String("eos"),
                                        State: shared.OSPolicyResourceFileResourceStateEnumContentsMatch.ToPointer(),
                                    },
                                    ID: sdk.String("782259e3-ea4b-4519-bf92-443da7ce52b8"),
                                    Pkg: &shared.OSPolicyResourcePackageResource{
                                        Apt: &shared.OSPolicyResourcePackageResourceAPT{
                                            Name: sdk.String("Warren Schowalter"),
                                        },
                                        Deb: &shared.OSPolicyResourcePackageResourceDeb{
                                            PullDeps: sdk.Bool(false),
                                            Source: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("in"),
                                                    Generation: sdk.String("minus"),
                                                    Object: sdk.String("eum"),
                                                },
                                                LocalPath: sdk.String("modi"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("corporis"),
                                                    URI: sdk.String("http://usable-whack.net"),
                                                },
                                            },
                                        },
                                        DesiredState: shared.OSPolicyResourcePackageResourceDesiredStateEnumDesiredStateUnspecified.ToPointer(),
                                        Googet: &shared.OSPolicyResourcePackageResourceGooGet{
                                            Name: sdk.String("Philip Greenfelder"),
                                        },
                                        Msi: &shared.OSPolicyResourcePackageResourceMSI{
                                            Properties: []string{
                                                "quo",
                                                "velit",
                                            },
                                            Source: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("minus"),
                                                    Generation: sdk.String("fuga"),
                                                    Object: sdk.String("nostrum"),
                                                },
                                                LocalPath: sdk.String("est"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("impedit"),
                                                    URI: sdk.String("https://serpentine-swimsuit.com"),
                                                },
                                            },
                                        },
                                        Rpm: &shared.OSPolicyResourcePackageResourceRPM{
                                            PullDeps: sdk.Bool(false),
                                            Source: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("repellat"),
                                                    Generation: sdk.String("pariatur"),
                                                    Object: sdk.String("nemo"),
                                                },
                                                LocalPath: sdk.String("reprehenderit"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("aperiam"),
                                                    URI: sdk.String("http://general-idiom.info"),
                                                },
                                            },
                                        },
                                        Yum: &shared.OSPolicyResourcePackageResourceYUM{
                                            Name: sdk.String("Ms. Phillip Mraz"),
                                        },
                                        Zypper: &shared.OSPolicyResourcePackageResourceZypper{
                                            Name: sdk.String("Bradford Murazik"),
                                        },
                                    },
                                    Repository: &shared.OSPolicyResourceRepositoryResource{
                                        Apt: &shared.OSPolicyResourceRepositoryResourceAptRepository{
                                            ArchiveType: shared.OSPolicyResourceRepositoryResourceAptRepositoryArchiveTypeEnumArchiveTypeUnspecified.ToPointer(),
                                            Components: []string{
                                                "officiis",
                                                "placeat",
                                            },
                                            Distribution: sdk.String("quidem"),
                                            GpgKey: sdk.String("exercitationem"),
                                            URI: sdk.String("http://drab-direction.com"),
                                        },
                                        Goo: &shared.OSPolicyResourceRepositoryResourceGooRepository{
                                            Name: sdk.String("Ignacio Dietrich"),
                                            URL: sdk.String("dicta"),
                                        },
                                        Yum: &shared.OSPolicyResourceRepositoryResourceYumRepository{
                                            BaseURL: sdk.String("earum"),
                                            DisplayName: sdk.String("veniam"),
                                            GpgKeys: []string{
                                                "dolores",
                                                "nam",
                                                "dicta",
                                            },
                                            ID: sdk.String("2eb07f11-6db9-4954-9fc9-5fa88970e189"),
                                        },
                                        Zypper: &shared.OSPolicyResourceRepositoryResourceZypperRepository{
                                            BaseURL: sdk.String("assumenda"),
                                            DisplayName: sdk.String("tempore"),
                                            GpgKeys: []string{
                                                "velit",
                                                "doloremque",
                                                "delectus",
                                            },
                                            ID: sdk.String("cb33ea05-5b19-47cd-84e2-f52d82d3513b"),
                                        },
                                    },
                                },
                                shared.OSPolicyResource{
                                    Exec: &shared.OSPolicyResourceExecResource{
                                        Enforce: &shared.OSPolicyResourceExecResourceExec{
                                            Args: []string{
                                                "nisi",
                                                "voluptatibus",
                                                "quaerat",
                                            },
                                            File: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("blanditiis"),
                                                    Generation: sdk.String("distinctio"),
                                                    Object: sdk.String("nisi"),
                                                },
                                                LocalPath: sdk.String("quis"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("nisi"),
                                                    URI: sdk.String("https://squeaky-slip.net"),
                                                },
                                            },
                                            Interpreter: shared.OSPolicyResourceExecResourceExecInterpreterEnumInterpreterUnspecified.ToPointer(),
                                            OutputFilePath: sdk.String("ad"),
                                            Script: sdk.String("voluptatibus"),
                                        },
                                        Validate: &shared.OSPolicyResourceExecResourceExec{
                                            Args: []string{
                                                "consequuntur",
                                                "debitis",
                                                "labore",
                                                "rerum",
                                            },
                                            File: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("eos"),
                                                    Generation: sdk.String("reprehenderit"),
                                                    Object: sdk.String("nostrum"),
                                                },
                                                LocalPath: sdk.String("neque"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("iusto"),
                                                    URI: sdk.String("https://measly-rivulet.org"),
                                                },
                                            },
                                            Interpreter: shared.OSPolicyResourceExecResourceExecInterpreterEnumShell.ToPointer(),
                                            OutputFilePath: sdk.String("officiis"),
                                            Script: sdk.String("ducimus"),
                                        },
                                    },
                                    File: &shared.OSPolicyResourceFileResource{
                                        Content: sdk.String("dolor"),
                                        File: &shared.OSPolicyResourceFile{
                                            AllowInsecure: sdk.Bool(false),
                                            Gcs: &shared.OSPolicyResourceFileGcs{
                                                Bucket: sdk.String("dicta"),
                                                Generation: sdk.String("error"),
                                                Object: sdk.String("porro"),
                                            },
                                            LocalPath: sdk.String("vitae"),
                                            Remote: &shared.OSPolicyResourceFileRemote{
                                                Sha256Checksum: sdk.String("dignissimos"),
                                                URI: sdk.String("http://those-exclamation.com"),
                                            },
                                        },
                                        Path: sdk.String("enim"),
                                        Permissions: sdk.String("delectus"),
                                        State: shared.OSPolicyResourceFileResourceStateEnumPresent.ToPointer(),
                                    },
                                    ID: sdk.String("7b114eeb-52ff-4785-bc37-814d4c98e0c2"),
                                    Pkg: &shared.OSPolicyResourcePackageResource{
                                        Apt: &shared.OSPolicyResourcePackageResourceAPT{
                                            Name: sdk.String("Rudolph Macejkovic"),
                                        },
                                        Deb: &shared.OSPolicyResourcePackageResourceDeb{
                                            PullDeps: sdk.Bool(false),
                                            Source: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("rerum"),
                                                    Generation: sdk.String("dignissimos"),
                                                    Object: sdk.String("corporis"),
                                                },
                                                LocalPath: sdk.String("vero"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("similique"),
                                                    URI: sdk.String("https://inferior-countess.info"),
                                                },
                                            },
                                        },
                                        DesiredState: shared.OSPolicyResourcePackageResourceDesiredStateEnumRemoved.ToPointer(),
                                        Googet: &shared.OSPolicyResourcePackageResourceGooGet{
                                            Name: sdk.String("Maria Bartoletti I"),
                                        },
                                        Msi: &shared.OSPolicyResourcePackageResourceMSI{
                                            Properties: []string{
                                                "praesentium",
                                                "quidem",
                                                "cum",
                                                "amet",
                                            },
                                            Source: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("quasi"),
                                                    Generation: sdk.String("dicta"),
                                                    Object: sdk.String("laudantium"),
                                                },
                                                LocalPath: sdk.String("doloremque"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("earum"),
                                                    URI: sdk.String("http://elementary-necessity.net"),
                                                },
                                            },
                                        },
                                        Rpm: &shared.OSPolicyResourcePackageResourceRPM{
                                            PullDeps: sdk.Bool(false),
                                            Source: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("necessitatibus"),
                                                    Generation: sdk.String("provident"),
                                                    Object: sdk.String("repudiandae"),
                                                },
                                                LocalPath: sdk.String("consequatur"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("nemo"),
                                                    URI: sdk.String("http://vigilant-puppet.name"),
                                                },
                                            },
                                        },
                                        Yum: &shared.OSPolicyResourcePackageResourceYUM{
                                            Name: sdk.String("Bobbie Thompson"),
                                        },
                                        Zypper: &shared.OSPolicyResourcePackageResourceZypper{
                                            Name: sdk.String("Sandra Frami DVM"),
                                        },
                                    },
                                    Repository: &shared.OSPolicyResourceRepositoryResource{
                                        Apt: &shared.OSPolicyResourceRepositoryResourceAptRepository{
                                            ArchiveType: shared.OSPolicyResourceRepositoryResourceAptRepositoryArchiveTypeEnumArchiveTypeUnspecified.ToPointer(),
                                            Components: []string{
                                                "atque",
                                                "beatae",
                                                "at",
                                            },
                                            Distribution: sdk.String("labore"),
                                            GpgKey: sdk.String("minus"),
                                            URI: sdk.String("http://anchored-allergist.net"),
                                        },
                                        Goo: &shared.OSPolicyResourceRepositoryResourceGooRepository{
                                            Name: sdk.String("Kimberly Kuhn"),
                                            URL: sdk.String("porro"),
                                        },
                                        Yum: &shared.OSPolicyResourceRepositoryResourceYumRepository{
                                            BaseURL: sdk.String("provident"),
                                            DisplayName: sdk.String("consectetur"),
                                            GpgKeys: []string{
                                                "dignissimos",
                                                "consectetur",
                                                "soluta",
                                                "natus",
                                            },
                                            ID: sdk.String("da3f2ced-a7e2-43f2-a574-11faf4b7544e"),
                                        },
                                        Zypper: &shared.OSPolicyResourceRepositoryResourceZypperRepository{
                                            BaseURL: sdk.String("modi"),
                                            DisplayName: sdk.String("in"),
                                            GpgKeys: []string{
                                                "accusamus",
                                            },
                                            ID: sdk.String("802857a5-b404-463a-bd57-5f1400e764ad"),
                                        },
                                    },
                                },
                                shared.OSPolicyResource{
                                    Exec: &shared.OSPolicyResourceExecResource{
                                        Enforce: &shared.OSPolicyResourceExecResourceExec{
                                            Args: []string{
                                                "consectetur",
                                                "nesciunt",
                                            },
                                            File: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("quaerat"),
                                                    Generation: sdk.String("itaque"),
                                                    Object: sdk.String("minus"),
                                                },
                                                LocalPath: sdk.String("sunt"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("distinctio"),
                                                    URI: sdk.String("http://naughty-bob.net"),
                                                },
                                            },
                                            Interpreter: shared.OSPolicyResourceExecResourceExecInterpreterEnumInterpreterUnspecified.ToPointer(),
                                            OutputFilePath: sdk.String("autem"),
                                            Script: sdk.String("fuga"),
                                        },
                                        Validate: &shared.OSPolicyResourceExecResourceExec{
                                            Args: []string{
                                                "rem",
                                            },
                                            File: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("aut"),
                                                    Generation: sdk.String("quos"),
                                                    Object: sdk.String("laudantium"),
                                                },
                                                LocalPath: sdk.String("repellendus"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("veritatis"),
                                                    URI: sdk.String("http://austere-thug.org"),
                                                },
                                            },
                                            Interpreter: shared.OSPolicyResourceExecResourceExecInterpreterEnumShell.ToPointer(),
                                            OutputFilePath: sdk.String("nulla"),
                                            Script: sdk.String("officia"),
                                        },
                                    },
                                    File: &shared.OSPolicyResourceFileResource{
                                        Content: sdk.String("sed"),
                                        File: &shared.OSPolicyResourceFile{
                                            AllowInsecure: sdk.Bool(false),
                                            Gcs: &shared.OSPolicyResourceFileGcs{
                                                Bucket: sdk.String("voluptatem"),
                                                Generation: sdk.String("alias"),
                                                Object: sdk.String("eveniet"),
                                            },
                                            LocalPath: sdk.String("hic"),
                                            Remote: &shared.OSPolicyResourceFileRemote{
                                                Sha256Checksum: sdk.String("voluptatem"),
                                                URI: sdk.String("http://dense-commodity.org"),
                                            },
                                        },
                                        Path: sdk.String("harum"),
                                        Permissions: sdk.String("explicabo"),
                                        State: shared.OSPolicyResourceFileResourceStateEnumDesiredStateUnspecified.ToPointer(),
                                    },
                                    ID: sdk.String("64cf9ab8-366c-4723-bfda-9e06bee4825c"),
                                    Pkg: &shared.OSPolicyResourcePackageResource{
                                        Apt: &shared.OSPolicyResourcePackageResourceAPT{
                                            Name: sdk.String("Dr. Shari Roob Sr."),
                                        },
                                        Deb: &shared.OSPolicyResourcePackageResourceDeb{
                                            PullDeps: sdk.Bool(false),
                                            Source: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("enim"),
                                                    Generation: sdk.String("optio"),
                                                    Object: sdk.String("rem"),
                                                },
                                                LocalPath: sdk.String("perferendis"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("facilis"),
                                                    URI: sdk.String("https://well-documented-order.com"),
                                                },
                                            },
                                        },
                                        DesiredState: shared.OSPolicyResourcePackageResourceDesiredStateEnumInstalled.ToPointer(),
                                        Googet: &shared.OSPolicyResourcePackageResourceGooGet{
                                            Name: sdk.String("Eleanor Gleason"),
                                        },
                                        Msi: &shared.OSPolicyResourcePackageResourceMSI{
                                            Properties: []string{
                                                "consequuntur",
                                                "assumenda",
                                            },
                                            Source: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("vero"),
                                                    Generation: sdk.String("doloribus"),
                                                    Object: sdk.String("impedit"),
                                                },
                                                LocalPath: sdk.String("porro"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("accusamus"),
                                                    URI: sdk.String("https://wide-eyed-bargain.name"),
                                                },
                                            },
                                        },
                                        Rpm: &shared.OSPolicyResourcePackageResourceRPM{
                                            PullDeps: sdk.Bool(false),
                                            Source: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("nihil"),
                                                    Generation: sdk.String("esse"),
                                                    Object: sdk.String("iure"),
                                                },
                                                LocalPath: sdk.String("odio"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("nesciunt"),
                                                    URI: sdk.String("https://impressive-cornflakes.info"),
                                                },
                                            },
                                        },
                                        Yum: &shared.OSPolicyResourcePackageResourceYUM{
                                            Name: sdk.String("Kathryn Nitzsche"),
                                        },
                                        Zypper: &shared.OSPolicyResourcePackageResourceZypper{
                                            Name: sdk.String("Angela Lebsack II"),
                                        },
                                    },
                                    Repository: &shared.OSPolicyResourceRepositoryResource{
                                        Apt: &shared.OSPolicyResourceRepositoryResourceAptRepository{
                                            ArchiveType: shared.OSPolicyResourceRepositoryResourceAptRepositoryArchiveTypeEnumDebSrc.ToPointer(),
                                            Components: []string{
                                                "facere",
                                            },
                                            Distribution: sdk.String("aliquam"),
                                            GpgKey: sdk.String("quos"),
                                            URI: sdk.String("https://this-platform.org"),
                                        },
                                        Goo: &shared.OSPolicyResourceRepositoryResourceGooRepository{
                                            Name: sdk.String("Gloria Douglas DVM"),
                                            URL: sdk.String("nemo"),
                                        },
                                        Yum: &shared.OSPolicyResourceRepositoryResourceYumRepository{
                                            BaseURL: sdk.String("doloribus"),
                                            DisplayName: sdk.String("possimus"),
                                            GpgKeys: []string{
                                                "incidunt",
                                                "explicabo",
                                                "ipsam",
                                            },
                                            ID: sdk.String("9c0b36f2-5ea9-444f-bb75-6c11f6c37a51"),
                                        },
                                        Zypper: &shared.OSPolicyResourceRepositoryResourceZypperRepository{
                                            BaseURL: sdk.String("qui"),
                                            DisplayName: sdk.String("aliquid"),
                                            GpgKeys: []string{
                                                "incidunt",
                                            },
                                            ID: sdk.String("3835bbc0-5a23-4a45-8efc-5fde10a0ce21"),
                                        },
                                    },
                                },
                            },
                        },
                    },
                },
                shared.OSPolicy{
                    AllowNoResourceGroupMatch: sdk.Bool(false),
                    Description: sdk.String("vel"),
                    ID: sdk.String("9e510019-c6dc-45e3-8762-799bfbbe6949"),
                    Mode: shared.OSPolicyModeEnumEnforcement.ToPointer(),
                    ResourceGroups: []shared.OSPolicyResourceGroup{
                        shared.OSPolicyResourceGroup{
                            InventoryFilters: []shared.OSPolicyInventoryFilter{
                                shared.OSPolicyInventoryFilter{
                                    OsShortName: sdk.String("libero"),
                                    OsVersion: sdk.String("nam"),
                                },
                            },
                            OsFilter: &shared.OSPolicyOSFilter{
                                OsShortName: sdk.String("incidunt"),
                                OsVersion: sdk.String("recusandae"),
                            },
                            Resources: []shared.OSPolicyResource{
                                shared.OSPolicyResource{
                                    Exec: &shared.OSPolicyResourceExecResource{
                                        Enforce: &shared.OSPolicyResourceExecResourceExec{
                                            Args: []string{
                                                "saepe",
                                                "autem",
                                                "quo",
                                            },
                                            File: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("nesciunt"),
                                                    Generation: sdk.String("illum"),
                                                    Object: sdk.String("nemo"),
                                                },
                                                LocalPath: sdk.String("illum"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("facilis"),
                                                    URI: sdk.String("http://prickly-soprano.org"),
                                                },
                                            },
                                            Interpreter: shared.OSPolicyResourceExecResourceExecInterpreterEnumShell.ToPointer(),
                                            OutputFilePath: sdk.String("pariatur"),
                                            Script: sdk.String("ad"),
                                        },
                                        Validate: &shared.OSPolicyResourceExecResourceExec{
                                            Args: []string{
                                                "laborum",
                                                "eveniet",
                                                "laborum",
                                                "incidunt",
                                            },
                                            File: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("maxime"),
                                                    Generation: sdk.String("ipsam"),
                                                    Object: sdk.String("alias"),
                                                },
                                                LocalPath: sdk.String("suscipit"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("deserunt"),
                                                    URI: sdk.String("https://quiet-plate.name"),
                                                },
                                            },
                                            Interpreter: shared.OSPolicyResourceExecResourceExecInterpreterEnumNone.ToPointer(),
                                            OutputFilePath: sdk.String("quo"),
                                            Script: sdk.String("perferendis"),
                                        },
                                    },
                                    File: &shared.OSPolicyResourceFileResource{
                                        Content: sdk.String("fugit"),
                                        File: &shared.OSPolicyResourceFile{
                                            AllowInsecure: sdk.Bool(false),
                                            Gcs: &shared.OSPolicyResourceFileGcs{
                                                Bucket: sdk.String("aliquid"),
                                                Generation: sdk.String("magnam"),
                                                Object: sdk.String("quaerat"),
                                            },
                                            LocalPath: sdk.String("eligendi"),
                                            Remote: &shared.OSPolicyResourceFileRemote{
                                                Sha256Checksum: sdk.String("hic"),
                                                URI: sdk.String("http://unfortunate-oasis.org"),
                                            },
                                        },
                                        Path: sdk.String("error"),
                                        Permissions: sdk.String("mollitia"),
                                        State: shared.OSPolicyResourceFileResourceStateEnumPresent.ToPointer(),
                                    },
                                    ID: sdk.String("578adc1a-c600-4dec-801a-c802e2ec09ff"),
                                    Pkg: &shared.OSPolicyResourcePackageResource{
                                        Apt: &shared.OSPolicyResourcePackageResourceAPT{
                                            Name: sdk.String("Cary Abbott"),
                                        },
                                        Deb: &shared.OSPolicyResourcePackageResourceDeb{
                                            PullDeps: sdk.Bool(false),
                                            Source: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("dicta"),
                                                    Generation: sdk.String("suscipit"),
                                                    Object: sdk.String("earum"),
                                                },
                                                LocalPath: sdk.String("doloribus"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("velit"),
                                                    URI: sdk.String("http://joyous-iceberg.net"),
                                                },
                                            },
                                        },
                                        DesiredState: shared.OSPolicyResourcePackageResourceDesiredStateEnumDesiredStateUnspecified.ToPointer(),
                                        Googet: &shared.OSPolicyResourcePackageResourceGooGet{
                                            Name: sdk.String("Mr. Leigh Mann"),
                                        },
                                        Msi: &shared.OSPolicyResourcePackageResourceMSI{
                                            Properties: []string{
                                                "incidunt",
                                            },
                                            Source: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("dicta"),
                                                    Generation: sdk.String("odit"),
                                                    Object: sdk.String("corporis"),
                                                },
                                                LocalPath: sdk.String("rerum"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("alias"),
                                                    URI: sdk.String("https://improbable-appeal.name"),
                                                },
                                            },
                                        },
                                        Rpm: &shared.OSPolicyResourcePackageResourceRPM{
                                            PullDeps: sdk.Bool(false),
                                            Source: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("laboriosam"),
                                                    Generation: sdk.String("ex"),
                                                    Object: sdk.String("quas"),
                                                },
                                                LocalPath: sdk.String("veritatis"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("ullam"),
                                                    URI: sdk.String("http://plump-doorknob.info"),
                                                },
                                            },
                                        },
                                        Yum: &shared.OSPolicyResourcePackageResourceYUM{
                                            Name: sdk.String("Joanna Wintheiser"),
                                        },
                                        Zypper: &shared.OSPolicyResourcePackageResourceZypper{
                                            Name: sdk.String("Kendra Hauck"),
                                        },
                                    },
                                    Repository: &shared.OSPolicyResourceRepositoryResource{
                                        Apt: &shared.OSPolicyResourceRepositoryResourceAptRepository{
                                            ArchiveType: shared.OSPolicyResourceRepositoryResourceAptRepositoryArchiveTypeEnumDeb.ToPointer(),
                                            Components: []string{
                                                "laudantium",
                                                "velit",
                                                "reiciendis",
                                                "amet",
                                            },
                                            Distribution: sdk.String("nemo"),
                                            GpgKey: sdk.String("ipsa"),
                                            URI: sdk.String("https://wealthy-mercury.info"),
                                        },
                                        Goo: &shared.OSPolicyResourceRepositoryResourceGooRepository{
                                            Name: sdk.String("Nettie Wilkinson"),
                                            URL: sdk.String("accusantium"),
                                        },
                                        Yum: &shared.OSPolicyResourceRepositoryResourceYumRepository{
                                            BaseURL: sdk.String("dicta"),
                                            DisplayName: sdk.String("minus"),
                                            GpgKeys: []string{
                                                "eveniet",
                                                "porro",
                                            },
                                            ID: sdk.String("bb4e243c-f789-4ffa-beda-53e5ae6e0ac1"),
                                        },
                                        Zypper: &shared.OSPolicyResourceRepositoryResourceZypperRepository{
                                            BaseURL: sdk.String("blanditiis"),
                                            DisplayName: sdk.String("eius"),
                                            GpgKeys: []string{
                                                "eos",
                                                "nobis",
                                                "natus",
                                                "minus",
                                            },
                                            ID: sdk.String("247c8837-3a40-4e19-82f3-2e55055756f5"),
                                        },
                                    },
                                },
                                shared.OSPolicyResource{
                                    Exec: &shared.OSPolicyResourceExecResource{
                                        Enforce: &shared.OSPolicyResourceExecResourceExec{
                                            Args: []string{
                                                "nemo",
                                                "suscipit",
                                                "pariatur",
                                                "sit",
                                            },
                                            File: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("quidem"),
                                                    Generation: sdk.String("repellendus"),
                                                    Object: sdk.String("perferendis"),
                                                },
                                                LocalPath: sdk.String("id"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("sapiente"),
                                                    URI: sdk.String("http://superb-yoga.org"),
                                                },
                                            },
                                            Interpreter: shared.OSPolicyResourceExecResourceExecInterpreterEnumInterpreterUnspecified.ToPointer(),
                                            OutputFilePath: sdk.String("adipisci"),
                                            Script: sdk.String("pariatur"),
                                        },
                                        Validate: &shared.OSPolicyResourceExecResourceExec{
                                            Args: []string{
                                                "dolore",
                                                "voluptatibus",
                                                "iure",
                                            },
                                            File: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("explicabo"),
                                                    Generation: sdk.String("minus"),
                                                    Object: sdk.String("soluta"),
                                                },
                                                LocalPath: sdk.String("dolorum"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("velit"),
                                                    URI: sdk.String("https://lustrous-overcharge.biz"),
                                                },
                                            },
                                            Interpreter: shared.OSPolicyResourceExecResourceExecInterpreterEnumInterpreterUnspecified.ToPointer(),
                                            OutputFilePath: sdk.String("mollitia"),
                                            Script: sdk.String("accusamus"),
                                        },
                                    },
                                    File: &shared.OSPolicyResourceFileResource{
                                        Content: sdk.String("harum"),
                                        File: &shared.OSPolicyResourceFile{
                                            AllowInsecure: sdk.Bool(false),
                                            Gcs: &shared.OSPolicyResourceFileGcs{
                                                Bucket: sdk.String("cumque"),
                                                Generation: sdk.String("doloremque"),
                                                Object: sdk.String("expedita"),
                                            },
                                            LocalPath: sdk.String("corrupti"),
                                            Remote: &shared.OSPolicyResourceFileRemote{
                                                Sha256Checksum: sdk.String("eaque"),
                                                URI: sdk.String("https://humming-moccasins.biz"),
                                            },
                                        },
                                        Path: sdk.String("tempora"),
                                        Permissions: sdk.String("possimus"),
                                        State: shared.OSPolicyResourceFileResourceStateEnumDesiredStateUnspecified.ToPointer(),
                                    },
                                    ID: sdk.String("b2ecfcc8-f895-4010-b5dd-3d6fa1804e54"),
                                    Pkg: &shared.OSPolicyResourcePackageResource{
                                        Apt: &shared.OSPolicyResourcePackageResourceAPT{
                                            Name: sdk.String("Clifton Crooks III"),
                                        },
                                        Deb: &shared.OSPolicyResourcePackageResourceDeb{
                                            PullDeps: sdk.Bool(false),
                                            Source: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("laudantium"),
                                                    Generation: sdk.String("est"),
                                                    Object: sdk.String("dolor"),
                                                },
                                                LocalPath: sdk.String("aliquid"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("consectetur"),
                                                    URI: sdk.String("https://meek-lunge.info"),
                                                },
                                            },
                                        },
                                        DesiredState: shared.OSPolicyResourcePackageResourceDesiredStateEnumDesiredStateUnspecified.ToPointer(),
                                        Googet: &shared.OSPolicyResourcePackageResourceGooGet{
                                            Name: sdk.String("Eddie Labadie"),
                                        },
                                        Msi: &shared.OSPolicyResourcePackageResourceMSI{
                                            Properties: []string{
                                                "sit",
                                                "rerum",
                                                "veritatis",
                                            },
                                            Source: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("tenetur"),
                                                    Generation: sdk.String("autem"),
                                                    Object: sdk.String("quidem"),
                                                },
                                                LocalPath: sdk.String("totam"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("porro"),
                                                    URI: sdk.String("https://dazzling-intervention.info"),
                                                },
                                            },
                                        },
                                        Rpm: &shared.OSPolicyResourcePackageResourceRPM{
                                            PullDeps: sdk.Bool(false),
                                            Source: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("animi"),
                                                    Generation: sdk.String("commodi"),
                                                    Object: sdk.String("alias"),
                                                },
                                                LocalPath: sdk.String("fuga"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("aut"),
                                                    URI: sdk.String("http://sticky-embassy.name"),
                                                },
                                            },
                                        },
                                        Yum: &shared.OSPolicyResourcePackageResourceYUM{
                                            Name: sdk.String("Lynne Schroeder"),
                                        },
                                        Zypper: &shared.OSPolicyResourcePackageResourceZypper{
                                            Name: sdk.String("Miss Joshua Koss"),
                                        },
                                    },
                                    Repository: &shared.OSPolicyResourceRepositoryResource{
                                        Apt: &shared.OSPolicyResourceRepositoryResourceAptRepository{
                                            ArchiveType: shared.OSPolicyResourceRepositoryResourceAptRepositoryArchiveTypeEnumArchiveTypeUnspecified.ToPointer(),
                                            Components: []string{
                                                "dicta",
                                                "harum",
                                                "facere",
                                                "facilis",
                                            },
                                            Distribution: sdk.String("beatae"),
                                            GpgKey: sdk.String("cumque"),
                                            URI: sdk.String("https://flaky-quest.name"),
                                        },
                                        Goo: &shared.OSPolicyResourceRepositoryResourceGooRepository{
                                            Name: sdk.String("Ivan Torphy"),
                                            URL: sdk.String("sapiente"),
                                        },
                                        Yum: &shared.OSPolicyResourceRepositoryResourceYumRepository{
                                            BaseURL: sdk.String("quo"),
                                            DisplayName: sdk.String("incidunt"),
                                            GpgKeys: []string{
                                                "minus",
                                                "porro",
                                                "id",
                                                "excepturi",
                                            },
                                            ID: sdk.String("9bc7fc0b-2dce-4108-b3e4-2b006d678878"),
                                        },
                                        Zypper: &shared.OSPolicyResourceRepositoryResourceZypperRepository{
                                            BaseURL: sdk.String("rerum"),
                                            DisplayName: sdk.String("deserunt"),
                                            GpgKeys: []string{
                                                "nostrum",
                                                "atque",
                                                "architecto",
                                            },
                                            ID: sdk.String("a58208c5-4fef-4a9c-95f2-eac5565d307c"),
                                        },
                                    },
                                },
                                shared.OSPolicyResource{
                                    Exec: &shared.OSPolicyResourceExecResource{
                                        Enforce: &shared.OSPolicyResourceExecResourceExec{
                                            Args: []string{
                                                "recusandae",
                                                "voluptates",
                                                "praesentium",
                                                "dicta",
                                            },
                                            File: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("fugit"),
                                                    Generation: sdk.String("sit"),
                                                    Object: sdk.String("aliquid"),
                                                },
                                                LocalPath: sdk.String("necessitatibus"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("sed"),
                                                    URI: sdk.String("https://closed-consulting.org"),
                                                },
                                            },
                                            Interpreter: shared.OSPolicyResourceExecResourceExecInterpreterEnumShell.ToPointer(),
                                            OutputFilePath: sdk.String("aliquam"),
                                            Script: sdk.String("deserunt"),
                                        },
                                        Validate: &shared.OSPolicyResourceExecResourceExec{
                                            Args: []string{
                                                "sunt",
                                                "impedit",
                                            },
                                            File: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("eius"),
                                                    Generation: sdk.String("voluptatum"),
                                                    Object: sdk.String("ipsa"),
                                                },
                                                LocalPath: sdk.String("at"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("dolorem"),
                                                    URI: sdk.String("https://competent-bet.biz"),
                                                },
                                            },
                                            Interpreter: shared.OSPolicyResourceExecResourceExecInterpreterEnumInterpreterUnspecified.ToPointer(),
                                            OutputFilePath: sdk.String("fuga"),
                                            Script: sdk.String("hic"),
                                        },
                                    },
                                    File: &shared.OSPolicyResourceFileResource{
                                        Content: sdk.String("eaque"),
                                        File: &shared.OSPolicyResourceFile{
                                            AllowInsecure: sdk.Bool(false),
                                            Gcs: &shared.OSPolicyResourceFileGcs{
                                                Bucket: sdk.String("dolorem"),
                                                Generation: sdk.String("architecto"),
                                                Object: sdk.String("aperiam"),
                                            },
                                            LocalPath: sdk.String("aspernatur"),
                                            Remote: &shared.OSPolicyResourceFileRemote{
                                                Sha256Checksum: sdk.String("nulla"),
                                                URI: sdk.String("http://black-and-white-egghead.org"),
                                            },
                                        },
                                        Path: sdk.String("numquam"),
                                        Permissions: sdk.String("optio"),
                                        State: shared.OSPolicyResourceFileResourceStateEnumContentsMatch.ToPointer(),
                                    },
                                    ID: sdk.String("6f18bf96-21a6-4a4f-b7a8-7ee3e4be752c"),
                                    Pkg: &shared.OSPolicyResourcePackageResource{
                                        Apt: &shared.OSPolicyResourcePackageResourceAPT{
                                            Name: sdk.String("Beatrice Purdy"),
                                        },
                                        Deb: &shared.OSPolicyResourcePackageResourceDeb{
                                            PullDeps: sdk.Bool(false),
                                            Source: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("quaerat"),
                                                    Generation: sdk.String("architecto"),
                                                    Object: sdk.String("praesentium"),
                                                },
                                                LocalPath: sdk.String("eveniet"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("dolor"),
                                                    URI: sdk.String("https://secret-ordination.com"),
                                                },
                                            },
                                        },
                                        DesiredState: shared.OSPolicyResourcePackageResourceDesiredStateEnumRemoved.ToPointer(),
                                        Googet: &shared.OSPolicyResourcePackageResourceGooGet{
                                            Name: sdk.String("Gustavo Mayer"),
                                        },
                                        Msi: &shared.OSPolicyResourcePackageResourceMSI{
                                            Properties: []string{
                                                "aperiam",
                                                "voluptates",
                                                "laudantium",
                                                "tempora",
                                            },
                                            Source: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("quae"),
                                                    Generation: sdk.String("omnis"),
                                                    Object: sdk.String("illum"),
                                                },
                                                LocalPath: sdk.String("rem"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("tenetur"),
                                                    URI: sdk.String("https://familiar-twins.com"),
                                                },
                                            },
                                        },
                                        Rpm: &shared.OSPolicyResourcePackageResourceRPM{
                                            PullDeps: sdk.Bool(false),
                                            Source: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("aliquam"),
                                                    Generation: sdk.String("labore"),
                                                    Object: sdk.String("maiores"),
                                                },
                                                LocalPath: sdk.String("sequi"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("saepe"),
                                                    URI: sdk.String("http://jubilant-technologist.net"),
                                                },
                                            },
                                        },
                                        Yum: &shared.OSPolicyResourcePackageResourceYUM{
                                            Name: sdk.String("Rodolfo Gutmann"),
                                        },
                                        Zypper: &shared.OSPolicyResourcePackageResourceZypper{
                                            Name: sdk.String("Johanna Dietrich"),
                                        },
                                    },
                                    Repository: &shared.OSPolicyResourceRepositoryResource{
                                        Apt: &shared.OSPolicyResourceRepositoryResourceAptRepository{
                                            ArchiveType: shared.OSPolicyResourceRepositoryResourceAptRepositoryArchiveTypeEnumDebSrc.ToPointer(),
                                            Components: []string{
                                                "omnis",
                                                "aut",
                                                "ipsam",
                                                "officia",
                                            },
                                            Distribution: sdk.String("cupiditate"),
                                            GpgKey: sdk.String("reprehenderit"),
                                            URI: sdk.String("http://unpleasant-approach.biz"),
                                        },
                                        Goo: &shared.OSPolicyResourceRepositoryResourceGooRepository{
                                            Name: sdk.String("Nellie Cremin"),
                                            URL: sdk.String("odit"),
                                        },
                                        Yum: &shared.OSPolicyResourceRepositoryResourceYumRepository{
                                            BaseURL: sdk.String("iusto"),
                                            DisplayName: sdk.String("expedita"),
                                            GpgKeys: []string{
                                                "repellendus",
                                            },
                                            ID: sdk.String("309470bf-7a4f-4a87-8f53-5a6fae54ebf6"),
                                        },
                                        Zypper: &shared.OSPolicyResourceRepositoryResourceZypperRepository{
                                            BaseURL: sdk.String("voluptatem"),
                                            DisplayName: sdk.String("optio"),
                                            GpgKeys: []string{
                                                "sunt",
                                            },
                                            ID: sdk.String("1f023b75-d236-47fe-9a0c-c8df79f0a396"),
                                        },
                                    },
                                },
                                shared.OSPolicyResource{
                                    Exec: &shared.OSPolicyResourceExecResource{
                                        Enforce: &shared.OSPolicyResourceExecResourceExec{
                                            Args: []string{
                                                "unde",
                                                "alias",
                                                "impedit",
                                                "sequi",
                                            },
                                            File: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("commodi"),
                                                    Generation: sdk.String("labore"),
                                                    Object: sdk.String("expedita"),
                                                },
                                                LocalPath: sdk.String("in"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("quisquam"),
                                                    URI: sdk.String("http://frozen-stress.org"),
                                                },
                                            },
                                            Interpreter: shared.OSPolicyResourceExecResourceExecInterpreterEnumShell.ToPointer(),
                                            OutputFilePath: sdk.String("mollitia"),
                                            Script: sdk.String("impedit"),
                                        },
                                        Validate: &shared.OSPolicyResourceExecResourceExec{
                                            Args: []string{
                                                "et",
                                                "quas",
                                                "blanditiis",
                                                "cum",
                                            },
                                            File: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("dicta"),
                                                    Generation: sdk.String("impedit"),
                                                    Object: sdk.String("tempora"),
                                                },
                                                LocalPath: sdk.String("eveniet"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("repudiandae"),
                                                    URI: sdk.String("http://snoopy-metronome.net"),
                                                },
                                            },
                                            Interpreter: shared.OSPolicyResourceExecResourceExecInterpreterEnumNone.ToPointer(),
                                            OutputFilePath: sdk.String("eligendi"),
                                            Script: sdk.String("recusandae"),
                                        },
                                    },
                                    File: &shared.OSPolicyResourceFileResource{
                                        Content: sdk.String("ex"),
                                        File: &shared.OSPolicyResourceFile{
                                            AllowInsecure: sdk.Bool(false),
                                            Gcs: &shared.OSPolicyResourceFileGcs{
                                                Bucket: sdk.String("beatae"),
                                                Generation: sdk.String("veritatis"),
                                                Object: sdk.String("maiores"),
                                            },
                                            LocalPath: sdk.String("itaque"),
                                            Remote: &shared.OSPolicyResourceFileRemote{
                                                Sha256Checksum: sdk.String("vero"),
                                                URI: sdk.String("https://black-and-white-screamer.info"),
                                            },
                                        },
                                        Path: sdk.String("minus"),
                                        Permissions: sdk.String("distinctio"),
                                        State: shared.OSPolicyResourceFileResourceStateEnumContentsMatch.ToPointer(),
                                    },
                                    ID: sdk.String("b6eec743-78ba-4253-9774-7dc915ad2caf"),
                                    Pkg: &shared.OSPolicyResourcePackageResource{
                                        Apt: &shared.OSPolicyResourcePackageResourceAPT{
                                            Name: sdk.String("Angel Sporer"),
                                        },
                                        Deb: &shared.OSPolicyResourcePackageResourceDeb{
                                            PullDeps: sdk.Bool(false),
                                            Source: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("explicabo"),
                                                    Generation: sdk.String("consectetur"),
                                                    Object: sdk.String("temporibus"),
                                                },
                                                LocalPath: sdk.String("optio"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("ipsa"),
                                                    URI: sdk.String("https://green-park.org"),
                                                },
                                            },
                                        },
                                        DesiredState: shared.OSPolicyResourcePackageResourceDesiredStateEnumDesiredStateUnspecified.ToPointer(),
                                        Googet: &shared.OSPolicyResourcePackageResourceGooGet{
                                            Name: sdk.String("Tony Nikolaus"),
                                        },
                                        Msi: &shared.OSPolicyResourcePackageResourceMSI{
                                            Properties: []string{
                                                "doloremque",
                                                "perferendis",
                                            },
                                            Source: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("laudantium"),
                                                    Generation: sdk.String("iusto"),
                                                    Object: sdk.String("corrupti"),
                                                },
                                                LocalPath: sdk.String("molestiae"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("quis"),
                                                    URI: sdk.String("http://bewitched-engagement.biz"),
                                                },
                                            },
                                        },
                                        Rpm: &shared.OSPolicyResourcePackageResourceRPM{
                                            PullDeps: sdk.Bool(false),
                                            Source: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("sapiente"),
                                                    Generation: sdk.String("corporis"),
                                                    Object: sdk.String("est"),
                                                },
                                                LocalPath: sdk.String("iure"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("quisquam"),
                                                    URI: sdk.String("https://mammoth-ratepayer.info"),
                                                },
                                            },
                                        },
                                        Yum: &shared.OSPolicyResourcePackageResourceYUM{
                                            Name: sdk.String("Holly Harber V"),
                                        },
                                        Zypper: &shared.OSPolicyResourcePackageResourceZypper{
                                            Name: sdk.String("Miss Ginger Gerhold"),
                                        },
                                    },
                                    Repository: &shared.OSPolicyResourceRepositoryResource{
                                        Apt: &shared.OSPolicyResourceRepositoryResourceAptRepository{
                                            ArchiveType: shared.OSPolicyResourceRepositoryResourceAptRepositoryArchiveTypeEnumDeb.ToPointer(),
                                            Components: []string{
                                                "impedit",
                                                "nisi",
                                                "cumque",
                                                "soluta",
                                            },
                                            Distribution: sdk.String("fugiat"),
                                            GpgKey: sdk.String("laboriosam"),
                                            URI: sdk.String("https://front-whey.biz"),
                                        },
                                        Goo: &shared.OSPolicyResourceRepositoryResourceGooRepository{
                                            Name: sdk.String("Ms. Wilbert McGlynn"),
                                            URL: sdk.String("accusantium"),
                                        },
                                        Yum: &shared.OSPolicyResourceRepositoryResourceYumRepository{
                                            BaseURL: sdk.String("magnam"),
                                            DisplayName: sdk.String("repellat"),
                                            GpgKeys: []string{
                                                "explicabo",
                                                "vel",
                                                "cum",
                                            },
                                            ID: sdk.String("ad255381-9b47-44b0-ad20-e56248fff639"),
                                        },
                                        Zypper: &shared.OSPolicyResourceRepositoryResourceZypperRepository{
                                            BaseURL: sdk.String("animi"),
                                            DisplayName: sdk.String("provident"),
                                            GpgKeys: []string{
                                                "ipsa",
                                            },
                                            ID: sdk.String("abdcab62-6766-496e-9ec0-0221b335d89a"),
                                        },
                                    },
                                },
                            },
                        },
                        shared.OSPolicyResourceGroup{
                            InventoryFilters: []shared.OSPolicyInventoryFilter{
                                shared.OSPolicyInventoryFilter{
                                    OsShortName: sdk.String("tempore"),
                                    OsVersion: sdk.String("amet"),
                                },
                                shared.OSPolicyInventoryFilter{
                                    OsShortName: sdk.String("debitis"),
                                    OsVersion: sdk.String("nobis"),
                                },
                                shared.OSPolicyInventoryFilter{
                                    OsShortName: sdk.String("asperiores"),
                                    OsVersion: sdk.String("temporibus"),
                                },
                                shared.OSPolicyInventoryFilter{
                                    OsShortName: sdk.String("id"),
                                    OsVersion: sdk.String("atque"),
                                },
                            },
                            OsFilter: &shared.OSPolicyOSFilter{
                                OsShortName: sdk.String("quibusdam"),
                                OsVersion: sdk.String("sit"),
                            },
                            Resources: []shared.OSPolicyResource{
                                shared.OSPolicyResource{
                                    Exec: &shared.OSPolicyResourceExecResource{
                                        Enforce: &shared.OSPolicyResourceExecResourceExec{
                                            Args: []string{
                                                "aliquam",
                                                "provident",
                                            },
                                            File: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("vero"),
                                                    Generation: sdk.String("earum"),
                                                    Object: sdk.String("doloremque"),
                                                },
                                                LocalPath: sdk.String("ipsum"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("alias"),
                                                    URI: sdk.String("http://favorable-nitrogen.info"),
                                                },
                                            },
                                            Interpreter: shared.OSPolicyResourceExecResourceExecInterpreterEnumShell.ToPointer(),
                                            OutputFilePath: sdk.String("officia"),
                                            Script: sdk.String("ex"),
                                        },
                                        Validate: &shared.OSPolicyResourceExecResourceExec{
                                            Args: []string{
                                                "a",
                                            },
                                            File: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("laborum"),
                                                    Generation: sdk.String("veritatis"),
                                                    Object: sdk.String("quod"),
                                                },
                                                LocalPath: sdk.String("a"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("qui"),
                                                    URI: sdk.String("http://immense-mankind.name"),
                                                },
                                            },
                                            Interpreter: shared.OSPolicyResourceExecResourceExecInterpreterEnumPowershell.ToPointer(),
                                            OutputFilePath: sdk.String("voluptate"),
                                            Script: sdk.String("quam"),
                                        },
                                    },
                                    File: &shared.OSPolicyResourceFileResource{
                                        Content: sdk.String("quod"),
                                        File: &shared.OSPolicyResourceFile{
                                            AllowInsecure: sdk.Bool(false),
                                            Gcs: &shared.OSPolicyResourceFileGcs{
                                                Bucket: sdk.String("vitae"),
                                                Generation: sdk.String("sapiente"),
                                                Object: sdk.String("reiciendis"),
                                            },
                                            LocalPath: sdk.String("quod"),
                                            Remote: &shared.OSPolicyResourceFileRemote{
                                                Sha256Checksum: sdk.String("voluptate"),
                                                URI: sdk.String("http://stylish-signal.net"),
                                            },
                                        },
                                        Path: sdk.String("ab"),
                                        Permissions: sdk.String("ex"),
                                        State: shared.OSPolicyResourceFileResourceStateEnumDesiredStateUnspecified.ToPointer(),
                                    },
                                    ID: sdk.String("f2a3c80a-97ff-4334-8ddf-857a9e61876c"),
                                    Pkg: &shared.OSPolicyResourcePackageResource{
                                        Apt: &shared.OSPolicyResourcePackageResourceAPT{
                                            Name: sdk.String("Mr. Iris Powlowski"),
                                        },
                                        Deb: &shared.OSPolicyResourcePackageResourceDeb{
                                            PullDeps: sdk.Bool(false),
                                            Source: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("magni"),
                                                    Generation: sdk.String("natus"),
                                                    Object: sdk.String("illum"),
                                                },
                                                LocalPath: sdk.String("a"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("impedit"),
                                                    URI: sdk.String("https://filthy-sleuth.info"),
                                                },
                                            },
                                        },
                                        DesiredState: shared.OSPolicyResourcePackageResourceDesiredStateEnumRemoved.ToPointer(),
                                        Googet: &shared.OSPolicyResourcePackageResourceGooGet{
                                            Name: sdk.String("Wilson Schumm"),
                                        },
                                        Msi: &shared.OSPolicyResourcePackageResourceMSI{
                                            Properties: []string{
                                                "dolor",
                                                "sint",
                                                "aperiam",
                                            },
                                            Source: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("eaque"),
                                                    Generation: sdk.String("eum"),
                                                    Object: sdk.String("laboriosam"),
                                                },
                                                LocalPath: sdk.String("laborum"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("autem"),
                                                    URI: sdk.String("https://colossal-stepping-stone.com"),
                                                },
                                            },
                                        },
                                        Rpm: &shared.OSPolicyResourcePackageResourceRPM{
                                            PullDeps: sdk.Bool(false),
                                            Source: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("voluptatem"),
                                                    Generation: sdk.String("alias"),
                                                    Object: sdk.String("velit"),
                                                },
                                                LocalPath: sdk.String("ullam"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("quis"),
                                                    URI: sdk.String("http://descriptive-meridian.net"),
                                                },
                                            },
                                        },
                                        Yum: &shared.OSPolicyResourcePackageResourceYUM{
                                            Name: sdk.String("Spencer Batz"),
                                        },
                                        Zypper: &shared.OSPolicyResourcePackageResourceZypper{
                                            Name: sdk.String("Dr. Carlton Considine"),
                                        },
                                    },
                                    Repository: &shared.OSPolicyResourceRepositoryResource{
                                        Apt: &shared.OSPolicyResourceRepositoryResourceAptRepository{
                                            ArchiveType: shared.OSPolicyResourceRepositoryResourceAptRepositoryArchiveTypeEnumArchiveTypeUnspecified.ToPointer(),
                                            Components: []string{
                                                "consequuntur",
                                                "cumque",
                                            },
                                            Distribution: sdk.String("quidem"),
                                            GpgKey: sdk.String("non"),
                                            URI: sdk.String("http://cloudy-mint.com"),
                                        },
                                        Goo: &shared.OSPolicyResourceRepositoryResourceGooRepository{
                                            Name: sdk.String("Caroline Rempel"),
                                            URL: sdk.String("ipsum"),
                                        },
                                        Yum: &shared.OSPolicyResourceRepositoryResourceYumRepository{
                                            BaseURL: sdk.String("impedit"),
                                            DisplayName: sdk.String("quos"),
                                            GpgKeys: []string{
                                                "distinctio",
                                                "voluptatem",
                                                "non",
                                                "quaerat",
                                            },
                                            ID: sdk.String("08d6d364-ffd4-4559-86d1-263d48e935c2"),
                                        },
                                        Zypper: &shared.OSPolicyResourceRepositoryResourceZypperRepository{
                                            BaseURL: sdk.String("placeat"),
                                            DisplayName: sdk.String("excepturi"),
                                            GpgKeys: []string{
                                                "quos",
                                                "dicta",
                                                "sapiente",
                                                "ipsum",
                                            },
                                            ID: sdk.String("0be3e432-02d7-4216-9765-06641870d9d2"),
                                        },
                                    },
                                },
                                shared.OSPolicyResource{
                                    Exec: &shared.OSPolicyResourceExecResource{
                                        Enforce: &shared.OSPolicyResourceExecResourceExec{
                                            Args: []string{
                                                "voluptatibus",
                                            },
                                            File: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("unde"),
                                                    Generation: sdk.String("deserunt"),
                                                    Object: sdk.String("repellendus"),
                                                },
                                                LocalPath: sdk.String("consequatur"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("adipisci"),
                                                    URI: sdk.String("http://slim-dispatch.org"),
                                                },
                                            },
                                            Interpreter: shared.OSPolicyResourceExecResourceExecInterpreterEnumPowershell.ToPointer(),
                                            OutputFilePath: sdk.String("maxime"),
                                            Script: sdk.String("et"),
                                        },
                                        Validate: &shared.OSPolicyResourceExecResourceExec{
                                            Args: []string{
                                                "id",
                                            },
                                            File: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("consequatur"),
                                                    Generation: sdk.String("quos"),
                                                    Object: sdk.String("ratione"),
                                                },
                                                LocalPath: sdk.String("iure"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("tempora"),
                                                    URI: sdk.String("http://perfumed-anticipation.info"),
                                                },
                                            },
                                            Interpreter: shared.OSPolicyResourceExecResourceExecInterpreterEnumShell.ToPointer(),
                                            OutputFilePath: sdk.String("facilis"),
                                            Script: sdk.String("laudantium"),
                                        },
                                    },
                                    File: &shared.OSPolicyResourceFileResource{
                                        Content: sdk.String("ullam"),
                                        File: &shared.OSPolicyResourceFile{
                                            AllowInsecure: sdk.Bool(false),
                                            Gcs: &shared.OSPolicyResourceFileGcs{
                                                Bucket: sdk.String("aut"),
                                                Generation: sdk.String("quia"),
                                                Object: sdk.String("officia"),
                                            },
                                            LocalPath: sdk.String("quaerat"),
                                            Remote: &shared.OSPolicyResourceFileRemote{
                                                Sha256Checksum: sdk.String("corporis"),
                                                URI: sdk.String("https://leading-viola.info"),
                                            },
                                        },
                                        Path: sdk.String("neque"),
                                        Permissions: sdk.String("quidem"),
                                        State: shared.OSPolicyResourceFileResourceStateEnumContentsMatch.ToPointer(),
                                    },
                                    ID: sdk.String("845e320a-319f-44ba-9f94-7c9a867bc424"),
                                    Pkg: &shared.OSPolicyResourcePackageResource{
                                        Apt: &shared.OSPolicyResourcePackageResourceAPT{
                                            Name: sdk.String("Vicki Kemmer"),
                                        },
                                        Deb: &shared.OSPolicyResourcePackageResourceDeb{
                                            PullDeps: sdk.Bool(false),
                                            Source: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("quos"),
                                                    Generation: sdk.String("illo"),
                                                    Object: sdk.String("suscipit"),
                                                },
                                                LocalPath: sdk.String("quibusdam"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("fugiat"),
                                                    URI: sdk.String("https://polished-marmalade.org"),
                                                },
                                            },
                                        },
                                        DesiredState: shared.OSPolicyResourcePackageResourceDesiredStateEnumRemoved.ToPointer(),
                                        Googet: &shared.OSPolicyResourcePackageResourceGooGet{
                                            Name: sdk.String("Pamela Wyman"),
                                        },
                                        Msi: &shared.OSPolicyResourcePackageResourceMSI{
                                            Properties: []string{
                                                "cumque",
                                                "ipsam",
                                            },
                                            Source: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("occaecati"),
                                                    Generation: sdk.String("ipsum"),
                                                    Object: sdk.String("accusamus"),
                                                },
                                                LocalPath: sdk.String("quisquam"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("quasi"),
                                                    URI: sdk.String("http://sorrowful-sprag.name"),
                                                },
                                            },
                                        },
                                        Rpm: &shared.OSPolicyResourcePackageResourceRPM{
                                            PullDeps: sdk.Bool(false),
                                            Source: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("id"),
                                                    Generation: sdk.String("quibusdam"),
                                                    Object: sdk.String("ipsa"),
                                                },
                                                LocalPath: sdk.String("accusamus"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("placeat"),
                                                    URI: sdk.String("http://plastic-vol.org"),
                                                },
                                            },
                                        },
                                        Yum: &shared.OSPolicyResourcePackageResourceYUM{
                                            Name: sdk.String("Robin Strosin PhD"),
                                        },
                                        Zypper: &shared.OSPolicyResourcePackageResourceZypper{
                                            Name: sdk.String("Barry Funk"),
                                        },
                                    },
                                    Repository: &shared.OSPolicyResourceRepositoryResource{
                                        Apt: &shared.OSPolicyResourceRepositoryResourceAptRepository{
                                            ArchiveType: shared.OSPolicyResourceRepositoryResourceAptRepositoryArchiveTypeEnumArchiveTypeUnspecified.ToPointer(),
                                            Components: []string{
                                                "reiciendis",
                                                "iste",
                                            },
                                            Distribution: sdk.String("amet"),
                                            GpgKey: sdk.String("occaecati"),
                                            URI: sdk.String("http://sneaky-expert.name"),
                                        },
                                        Goo: &shared.OSPolicyResourceRepositoryResourceGooRepository{
                                            Name: sdk.String("Willard Barrows"),
                                            URL: sdk.String("ipsum"),
                                        },
                                        Yum: &shared.OSPolicyResourceRepositoryResourceYumRepository{
                                            BaseURL: sdk.String("vero"),
                                            DisplayName: sdk.String("fuga"),
                                            GpgKeys: []string{
                                                "maiores",
                                                "error",
                                                "recusandae",
                                            },
                                            ID: sdk.String("f3ffdd9f-7f07-49af-8d35-724cdb0f4d28"),
                                        },
                                        Zypper: &shared.OSPolicyResourceRepositoryResourceZypperRepository{
                                            BaseURL: sdk.String("quasi"),
                                            DisplayName: sdk.String("architecto"),
                                            GpgKeys: []string{
                                                "iusto",
                                                "fugiat",
                                                "enim",
                                            },
                                            ID: sdk.String("6844eded-85a9-4065-a628-bdfc2032b6c8"),
                                        },
                                    },
                                },
                                shared.OSPolicyResource{
                                    Exec: &shared.OSPolicyResourceExecResource{
                                        Enforce: &shared.OSPolicyResourceExecResourceExec{
                                            Args: []string{
                                                "omnis",
                                                "omnis",
                                            },
                                            File: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("fugit"),
                                                    Generation: sdk.String("dolorem"),
                                                    Object: sdk.String("quidem"),
                                                },
                                                LocalPath: sdk.String("molestiae"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("debitis"),
                                                    URI: sdk.String("http://educated-excellence.name"),
                                                },
                                            },
                                            Interpreter: shared.OSPolicyResourceExecResourceExecInterpreterEnumNone.ToPointer(),
                                            OutputFilePath: sdk.String("asperiores"),
                                            Script: sdk.String("reprehenderit"),
                                        },
                                        Validate: &shared.OSPolicyResourceExecResourceExec{
                                            Args: []string{
                                                "itaque",
                                                "et",
                                                "eos",
                                            },
                                            File: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("impedit"),
                                                    Generation: sdk.String("ex"),
                                                    Object: sdk.String("praesentium"),
                                                },
                                                LocalPath: sdk.String("natus"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("vitae"),
                                                    URI: sdk.String("https://male-carport.net"),
                                                },
                                            },
                                            Interpreter: shared.OSPolicyResourceExecResourceExecInterpreterEnumPowershell.ToPointer(),
                                            OutputFilePath: sdk.String("dicta"),
                                            Script: sdk.String("inventore"),
                                        },
                                    },
                                    File: &shared.OSPolicyResourceFileResource{
                                        Content: sdk.String("ullam"),
                                        File: &shared.OSPolicyResourceFile{
                                            AllowInsecure: sdk.Bool(false),
                                            Gcs: &shared.OSPolicyResourceFileGcs{
                                                Bucket: sdk.String("iusto"),
                                                Generation: sdk.String("inventore"),
                                                Object: sdk.String("voluptate"),
                                            },
                                            LocalPath: sdk.String("sed"),
                                            Remote: &shared.OSPolicyResourceFileRemote{
                                                Sha256Checksum: sdk.String("dolorem"),
                                                URI: sdk.String("http://grave-crotch.info"),
                                            },
                                        },
                                        Path: sdk.String("voluptate"),
                                        Permissions: sdk.String("pariatur"),
                                        State: shared.OSPolicyResourceFileResourceStateEnumContentsMatch.ToPointer(),
                                    },
                                    ID: sdk.String("fa89df97-5e35-4668-a092-e9c3ddc5f111"),
                                    Pkg: &shared.OSPolicyResourcePackageResource{
                                        Apt: &shared.OSPolicyResourcePackageResourceAPT{
                                            Name: sdk.String("Mr. Darin Osinski"),
                                        },
                                        Deb: &shared.OSPolicyResourcePackageResourceDeb{
                                            PullDeps: sdk.Bool(false),
                                            Source: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("aliquid"),
                                                    Generation: sdk.String("pariatur"),
                                                    Object: sdk.String("enim"),
                                                },
                                                LocalPath: sdk.String("numquam"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("architecto"),
                                                    URI: sdk.String("https://frequent-smith.com"),
                                                },
                                            },
                                        },
                                        DesiredState: shared.OSPolicyResourcePackageResourceDesiredStateEnumInstalled.ToPointer(),
                                        Googet: &shared.OSPolicyResourcePackageResourceGooGet{
                                            Name: sdk.String("Jeannie Torphy"),
                                        },
                                        Msi: &shared.OSPolicyResourcePackageResourceMSI{
                                            Properties: []string{
                                                "odio",
                                            },
                                            Source: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("quas"),
                                                    Generation: sdk.String("ipsa"),
                                                    Object: sdk.String("distinctio"),
                                                },
                                                LocalPath: sdk.String("placeat"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("quod"),
                                                    URI: sdk.String("https://alive-snowflake.net"),
                                                },
                                            },
                                        },
                                        Rpm: &shared.OSPolicyResourcePackageResourceRPM{
                                            PullDeps: sdk.Bool(false),
                                            Source: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("distinctio"),
                                                    Generation: sdk.String("assumenda"),
                                                    Object: sdk.String("illum"),
                                                },
                                                LocalPath: sdk.String("soluta"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("magnam"),
                                                    URI: sdk.String("https://fatherly-inevitable.com"),
                                                },
                                            },
                                        },
                                        Yum: &shared.OSPolicyResourcePackageResourceYUM{
                                            Name: sdk.String("Dominick Purdy"),
                                        },
                                        Zypper: &shared.OSPolicyResourcePackageResourceZypper{
                                            Name: sdk.String("Faye Bernhard"),
                                        },
                                    },
                                    Repository: &shared.OSPolicyResourceRepositoryResource{
                                        Apt: &shared.OSPolicyResourceRepositoryResourceAptRepository{
                                            ArchiveType: shared.OSPolicyResourceRepositoryResourceAptRepositoryArchiveTypeEnumDebSrc.ToPointer(),
                                            Components: []string{
                                                "ab",
                                                "ad",
                                                "blanditiis",
                                                "porro",
                                            },
                                            Distribution: sdk.String("labore"),
                                            GpgKey: sdk.String("impedit"),
                                            URI: sdk.String("http://visible-foam.biz"),
                                        },
                                        Goo: &shared.OSPolicyResourceRepositoryResourceGooRepository{
                                            Name: sdk.String("Mae Mayert"),
                                            URL: sdk.String("consectetur"),
                                        },
                                        Yum: &shared.OSPolicyResourceRepositoryResourceYumRepository{
                                            BaseURL: sdk.String("modi"),
                                            DisplayName: sdk.String("aspernatur"),
                                            GpgKeys: []string{
                                                "suscipit",
                                            },
                                            ID: sdk.String("0e9b200c-e78a-41bd-8fb7-a0a116ce723d"),
                                        },
                                        Zypper: &shared.OSPolicyResourceRepositoryResourceZypperRepository{
                                            BaseURL: sdk.String("quaerat"),
                                            DisplayName: sdk.String("aut"),
                                            GpgKeys: []string{
                                                "esse",
                                                "delectus",
                                                "deserunt",
                                            },
                                            ID: sdk.String("30e9af72-5b29-4122-830d-83f5aeb7799d"),
                                        },
                                    },
                                },
                                shared.OSPolicyResource{
                                    Exec: &shared.OSPolicyResourceExecResource{
                                        Enforce: &shared.OSPolicyResourceExecResourceExec{
                                            Args: []string{
                                                "odit",
                                            },
                                            File: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("vero"),
                                                    Generation: sdk.String("deleniti"),
                                                    Object: sdk.String("optio"),
                                                },
                                                LocalPath: sdk.String("quasi"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("repellat"),
                                                    URI: sdk.String("https://fond-nickname.biz"),
                                                },
                                            },
                                            Interpreter: shared.OSPolicyResourceExecResourceExecInterpreterEnumShell.ToPointer(),
                                            OutputFilePath: sdk.String("sunt"),
                                            Script: sdk.String("nemo"),
                                        },
                                        Validate: &shared.OSPolicyResourceExecResourceExec{
                                            Args: []string{
                                                "illum",
                                                "porro",
                                                "quaerat",
                                                "magni",
                                            },
                                            File: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("cumque"),
                                                    Generation: sdk.String("quos"),
                                                    Object: sdk.String("in"),
                                                },
                                                LocalPath: sdk.String("commodi"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("maxime"),
                                                    URI: sdk.String("http://spotless-cinnamon.net"),
                                                },
                                            },
                                            Interpreter: shared.OSPolicyResourceExecResourceExecInterpreterEnumPowershell.ToPointer(),
                                            OutputFilePath: sdk.String("harum"),
                                            Script: sdk.String("aliquam"),
                                        },
                                    },
                                    File: &shared.OSPolicyResourceFileResource{
                                        Content: sdk.String("eligendi"),
                                        File: &shared.OSPolicyResourceFile{
                                            AllowInsecure: sdk.Bool(false),
                                            Gcs: &shared.OSPolicyResourceFileGcs{
                                                Bucket: sdk.String("hic"),
                                                Generation: sdk.String("quo"),
                                                Object: sdk.String("illo"),
                                            },
                                            LocalPath: sdk.String("nobis"),
                                            Remote: &shared.OSPolicyResourceFileRemote{
                                                Sha256Checksum: sdk.String("esse"),
                                                URI: sdk.String("http://colossal-consent.com"),
                                            },
                                        },
                                        Path: sdk.String("reiciendis"),
                                        Permissions: sdk.String("quos"),
                                        State: shared.OSPolicyResourceFileResourceStateEnumPresent.ToPointer(),
                                    },
                                    ID: sdk.String("1fb1bd23-fdb1-44db-abe5-a685998e22ae"),
                                    Pkg: &shared.OSPolicyResourcePackageResource{
                                        Apt: &shared.OSPolicyResourcePackageResourceAPT{
                                            Name: sdk.String("Betty Smitham III"),
                                        },
                                        Deb: &shared.OSPolicyResourcePackageResourceDeb{
                                            PullDeps: sdk.Bool(false),
                                            Source: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("a"),
                                                    Generation: sdk.String("minus"),
                                                    Object: sdk.String("sed"),
                                                },
                                                LocalPath: sdk.String("nam"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("quia"),
                                                    URI: sdk.String("http://big-hearted-peacoat.com"),
                                                },
                                            },
                                        },
                                        DesiredState: shared.OSPolicyResourcePackageResourceDesiredStateEnumInstalled.ToPointer(),
                                        Googet: &shared.OSPolicyResourcePackageResourceGooGet{
                                            Name: sdk.String("Clark Hermiston"),
                                        },
                                        Msi: &shared.OSPolicyResourcePackageResourceMSI{
                                            Properties: []string{
                                                "nemo",
                                                "non",
                                                "recusandae",
                                            },
                                            Source: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("omnis"),
                                                    Generation: sdk.String("ipsa"),
                                                    Object: sdk.String("aliquam"),
                                                },
                                                LocalPath: sdk.String("dolor"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("occaecati"),
                                                    URI: sdk.String("https://dead-citron.com"),
                                                },
                                            },
                                        },
                                        Rpm: &shared.OSPolicyResourcePackageResourceRPM{
                                            PullDeps: sdk.Bool(false),
                                            Source: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("eius"),
                                                    Generation: sdk.String("commodi"),
                                                    Object: sdk.String("ipsam"),
                                                },
                                                LocalPath: sdk.String("vel"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("cupiditate"),
                                                    URI: sdk.String("http://hospitable-caribou.biz"),
                                                },
                                            },
                                        },
                                        Yum: &shared.OSPolicyResourcePackageResourceYUM{
                                            Name: sdk.String("Viola Bailey"),
                                        },
                                        Zypper: &shared.OSPolicyResourcePackageResourceZypper{
                                            Name: sdk.String("Erik Padberg"),
                                        },
                                    },
                                    Repository: &shared.OSPolicyResourceRepositoryResource{
                                        Apt: &shared.OSPolicyResourceRepositoryResourceAptRepository{
                                            ArchiveType: shared.OSPolicyResourceRepositoryResourceAptRepositoryArchiveTypeEnumDeb.ToPointer(),
                                            Components: []string{
                                                "saepe",
                                                "maiores",
                                                "accusantium",
                                                "sed",
                                            },
                                            Distribution: sdk.String("eos"),
                                            GpgKey: sdk.String("consequuntur"),
                                            URI: sdk.String("http://cheery-mortality.biz"),
                                        },
                                        Goo: &shared.OSPolicyResourceRepositoryResourceGooRepository{
                                            Name: sdk.String("Willis Heller"),
                                            URL: sdk.String("quasi"),
                                        },
                                        Yum: &shared.OSPolicyResourceRepositoryResourceYumRepository{
                                            BaseURL: sdk.String("quae"),
                                            DisplayName: sdk.String("similique"),
                                            GpgKeys: []string{
                                                "quo",
                                                "suscipit",
                                                "ex",
                                                "sint",
                                            },
                                            ID: sdk.String("af90a26c-7cdc-4981-b068-981d6bb33cfa"),
                                        },
                                        Zypper: &shared.OSPolicyResourceRepositoryResourceZypperRepository{
                                            BaseURL: sdk.String("fuga"),
                                            DisplayName: sdk.String("consectetur"),
                                            GpgKeys: []string{
                                                "laudantium",
                                                "cumque",
                                            },
                                            ID: sdk.String("31bf407e-e4fc-4f0c-82b7-8f15626398a0"),
                                        },
                                    },
                                },
                            },
                        },
                        shared.OSPolicyResourceGroup{
                            InventoryFilters: []shared.OSPolicyInventoryFilter{
                                shared.OSPolicyInventoryFilter{
                                    OsShortName: sdk.String("impedit"),
                                    OsVersion: sdk.String("ducimus"),
                                },
                                shared.OSPolicyInventoryFilter{
                                    OsShortName: sdk.String("nisi"),
                                    OsVersion: sdk.String("nisi"),
                                },
                                shared.OSPolicyInventoryFilter{
                                    OsShortName: sdk.String("dolor"),
                                    OsVersion: sdk.String("fugit"),
                                },
                                shared.OSPolicyInventoryFilter{
                                    OsShortName: sdk.String("dolore"),
                                    OsVersion: sdk.String("maxime"),
                                },
                            },
                            OsFilter: &shared.OSPolicyOSFilter{
                                OsShortName: sdk.String("maxime"),
                                OsVersion: sdk.String("expedita"),
                            },
                            Resources: []shared.OSPolicyResource{
                                shared.OSPolicyResource{
                                    Exec: &shared.OSPolicyResourceExecResource{
                                        Enforce: &shared.OSPolicyResourceExecResourceExec{
                                            Args: []string{
                                                "impedit",
                                                "totam",
                                            },
                                            File: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("optio"),
                                                    Generation: sdk.String("est"),
                                                    Object: sdk.String("inventore"),
                                                },
                                                LocalPath: sdk.String("consequuntur"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("repellendus"),
                                                    URI: sdk.String("http://dear-ethnicity.com"),
                                                },
                                            },
                                            Interpreter: shared.OSPolicyResourceExecResourceExecInterpreterEnumShell.ToPointer(),
                                            OutputFilePath: sdk.String("magni"),
                                            Script: sdk.String("odio"),
                                        },
                                        Validate: &shared.OSPolicyResourceExecResourceExec{
                                            Args: []string{
                                                "quidem",
                                            },
                                            File: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("deleniti"),
                                                    Generation: sdk.String("possimus"),
                                                    Object: sdk.String("ipsam"),
                                                },
                                                LocalPath: sdk.String("odio"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("fugit"),
                                                    URI: sdk.String("http://tricky-stencil.name"),
                                                },
                                            },
                                            Interpreter: shared.OSPolicyResourceExecResourceExecInterpreterEnumShell.ToPointer(),
                                            OutputFilePath: sdk.String("exercitationem"),
                                            Script: sdk.String("cum"),
                                        },
                                    },
                                    File: &shared.OSPolicyResourceFileResource{
                                        Content: sdk.String("voluptatum"),
                                        File: &shared.OSPolicyResourceFile{
                                            AllowInsecure: sdk.Bool(false),
                                            Gcs: &shared.OSPolicyResourceFileGcs{
                                                Bucket: sdk.String("facilis"),
                                                Generation: sdk.String("placeat"),
                                                Object: sdk.String("reiciendis"),
                                            },
                                            LocalPath: sdk.String("dolores"),
                                            Remote: &shared.OSPolicyResourceFileRemote{
                                                Sha256Checksum: sdk.String("dolore"),
                                                URI: sdk.String("https://rough-mycoplasma.info"),
                                            },
                                        },
                                        Path: sdk.String("natus"),
                                        Permissions: sdk.String("nisi"),
                                        State: shared.OSPolicyResourceFileResourceStateEnumAbsent.ToPointer(),
                                    },
                                    ID: sdk.String("3352f745-3399-44d7-8de3-b6e9389f5abb"),
                                    Pkg: &shared.OSPolicyResourcePackageResource{
                                        Apt: &shared.OSPolicyResourcePackageResourceAPT{
                                            Name: sdk.String("Faith Jenkins"),
                                        },
                                        Deb: &shared.OSPolicyResourcePackageResourceDeb{
                                            PullDeps: sdk.Bool(false),
                                            Source: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("ullam"),
                                                    Generation: sdk.String("ullam"),
                                                    Object: sdk.String("doloremque"),
                                                },
                                                LocalPath: sdk.String("est"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("qui"),
                                                    URI: sdk.String("https://enormous-living.biz"),
                                                },
                                            },
                                        },
                                        DesiredState: shared.OSPolicyResourcePackageResourceDesiredStateEnumInstalled.ToPointer(),
                                        Googet: &shared.OSPolicyResourcePackageResourceGooGet{
                                            Name: sdk.String("Troy Leuschke"),
                                        },
                                        Msi: &shared.OSPolicyResourcePackageResourceMSI{
                                            Properties: []string{
                                                "possimus",
                                                "odit",
                                                "consectetur",
                                                "inventore",
                                            },
                                            Source: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("minima"),
                                                    Generation: sdk.String("facilis"),
                                                    Object: sdk.String("facilis"),
                                                },
                                                LocalPath: sdk.String("deserunt"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("nisi"),
                                                    URI: sdk.String("http://ambitious-begonia.info"),
                                                },
                                            },
                                        },
                                        Rpm: &shared.OSPolicyResourcePackageResourceRPM{
                                            PullDeps: sdk.Bool(false),
                                            Source: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("incidunt"),
                                                    Generation: sdk.String("eveniet"),
                                                    Object: sdk.String("quae"),
                                                },
                                                LocalPath: sdk.String("ea"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("asperiores"),
                                                    URI: sdk.String("http://repulsive-workforce.info"),
                                                },
                                            },
                                        },
                                        Yum: &shared.OSPolicyResourcePackageResourceYUM{
                                            Name: sdk.String("Phil Hilll MD"),
                                        },
                                        Zypper: &shared.OSPolicyResourcePackageResourceZypper{
                                            Name: sdk.String("Hugh Quigley"),
                                        },
                                    },
                                    Repository: &shared.OSPolicyResourceRepositoryResource{
                                        Apt: &shared.OSPolicyResourceRepositoryResourceAptRepository{
                                            ArchiveType: shared.OSPolicyResourceRepositoryResourceAptRepositoryArchiveTypeEnumDebSrc.ToPointer(),
                                            Components: []string{
                                                "commodi",
                                            },
                                            Distribution: sdk.String("vitae"),
                                            GpgKey: sdk.String("fugit"),
                                            URI: sdk.String("https://idealistic-controller.net"),
                                        },
                                        Goo: &shared.OSPolicyResourceRepositoryResourceGooRepository{
                                            Name: sdk.String("Mary Hammes"),
                                            URL: sdk.String("id"),
                                        },
                                        Yum: &shared.OSPolicyResourceRepositoryResourceYumRepository{
                                            BaseURL: sdk.String("atque"),
                                            DisplayName: sdk.String("quaerat"),
                                            GpgKeys: []string{
                                                "dignissimos",
                                            },
                                            ID: sdk.String("74a68a9a-35d0-486b-af66-fef020e9f443"),
                                        },
                                        Zypper: &shared.OSPolicyResourceRepositoryResourceZypperRepository{
                                            BaseURL: sdk.String("cum"),
                                            DisplayName: sdk.String("incidunt"),
                                            GpgKeys: []string{
                                                "enim",
                                            },
                                            ID: sdk.String("7b992c8d-bda6-4a61-afa2-198258fd0a9e"),
                                        },
                                    },
                                },
                            },
                        },
                    },
                },
                shared.OSPolicy{
                    AllowNoResourceGroupMatch: sdk.Bool(false),
                    Description: sdk.String("nam"),
                    ID: sdk.String("a47f7d3e-f049-4640-96a1-831c87adf596"),
                    Mode: shared.OSPolicyModeEnumEnforcement.ToPointer(),
                    ResourceGroups: []shared.OSPolicyResourceGroup{
                        shared.OSPolicyResourceGroup{
                            InventoryFilters: []shared.OSPolicyInventoryFilter{
                                shared.OSPolicyInventoryFilter{
                                    OsShortName: sdk.String("ab"),
                                    OsVersion: sdk.String("mollitia"),
                                },
                                shared.OSPolicyInventoryFilter{
                                    OsShortName: sdk.String("possimus"),
                                    OsVersion: sdk.String("praesentium"),
                                },
                                shared.OSPolicyInventoryFilter{
                                    OsShortName: sdk.String("neque"),
                                    OsVersion: sdk.String("quam"),
                                },
                                shared.OSPolicyInventoryFilter{
                                    OsShortName: sdk.String("animi"),
                                    OsVersion: sdk.String("debitis"),
                                },
                            },
                            OsFilter: &shared.OSPolicyOSFilter{
                                OsShortName: sdk.String("voluptatum"),
                                OsVersion: sdk.String("voluptatem"),
                            },
                            Resources: []shared.OSPolicyResource{
                                shared.OSPolicyResource{
                                    Exec: &shared.OSPolicyResourceExecResource{
                                        Enforce: &shared.OSPolicyResourceExecResourceExec{
                                            Args: []string{
                                                "cumque",
                                            },
                                            File: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("architecto"),
                                                    Generation: sdk.String("sint"),
                                                    Object: sdk.String("eligendi"),
                                                },
                                                LocalPath: sdk.String("occaecati"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("quis"),
                                                    URI: sdk.String("https://popular-omnivore.name"),
                                                },
                                            },
                                            Interpreter: shared.OSPolicyResourceExecResourceExecInterpreterEnumShell.ToPointer(),
                                            OutputFilePath: sdk.String("laboriosam"),
                                            Script: sdk.String("ducimus"),
                                        },
                                        Validate: &shared.OSPolicyResourceExecResourceExec{
                                            Args: []string{
                                                "sapiente",
                                                "deserunt",
                                                "dolor",
                                            },
                                            File: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("hic"),
                                                    Generation: sdk.String("iure"),
                                                    Object: sdk.String("sint"),
                                                },
                                                LocalPath: sdk.String("autem"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("iste"),
                                                    URI: sdk.String("https://best-pound.org"),
                                                },
                                            },
                                            Interpreter: shared.OSPolicyResourceExecResourceExecInterpreterEnumInterpreterUnspecified.ToPointer(),
                                            OutputFilePath: sdk.String("voluptatum"),
                                            Script: sdk.String("molestias"),
                                        },
                                    },
                                    File: &shared.OSPolicyResourceFileResource{
                                        Content: sdk.String("quod"),
                                        File: &shared.OSPolicyResourceFile{
                                            AllowInsecure: sdk.Bool(false),
                                            Gcs: &shared.OSPolicyResourceFileGcs{
                                                Bucket: sdk.String("repudiandae"),
                                                Generation: sdk.String("eaque"),
                                                Object: sdk.String("consectetur"),
                                            },
                                            LocalPath: sdk.String("autem"),
                                            Remote: &shared.OSPolicyResourceFileRemote{
                                                Sha256Checksum: sdk.String("vitae"),
                                                URI: sdk.String("http://feminine-disco.name"),
                                            },
                                        },
                                        Path: sdk.String("minus"),
                                        Permissions: sdk.String("voluptate"),
                                        State: shared.OSPolicyResourceFileResourceStateEnumAbsent.ToPointer(),
                                    },
                                    ID: sdk.String("77a0ef2f-5360-428e-beef-934152ed7e25"),
                                    Pkg: &shared.OSPolicyResourcePackageResource{
                                        Apt: &shared.OSPolicyResourcePackageResourceAPT{
                                            Name: sdk.String("Lucia Gorczany II"),
                                        },
                                        Deb: &shared.OSPolicyResourcePackageResourceDeb{
                                            PullDeps: sdk.Bool(false),
                                            Source: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("quam"),
                                                    Generation: sdk.String("illum"),
                                                    Object: sdk.String("voluptates"),
                                                },
                                                LocalPath: sdk.String("officia"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("est"),
                                                    URI: sdk.String("http://black-implication.com"),
                                                },
                                            },
                                        },
                                        DesiredState: shared.OSPolicyResourcePackageResourceDesiredStateEnumRemoved.ToPointer(),
                                        Googet: &shared.OSPolicyResourcePackageResourceGooGet{
                                            Name: sdk.String("Joanne Hettinger"),
                                        },
                                        Msi: &shared.OSPolicyResourcePackageResourceMSI{
                                            Properties: []string{
                                                "delectus",
                                                "laboriosam",
                                                "laboriosam",
                                                "quam",
                                            },
                                            Source: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("fuga"),
                                                    Generation: sdk.String("officia"),
                                                    Object: sdk.String("repellat"),
                                                },
                                                LocalPath: sdk.String("cupiditate"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("soluta"),
                                                    URI: sdk.String("https://pointless-stomach.com"),
                                                },
                                            },
                                        },
                                        Rpm: &shared.OSPolicyResourcePackageResourceRPM{
                                            PullDeps: sdk.Bool(false),
                                            Source: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("atque"),
                                                    Generation: sdk.String("ad"),
                                                    Object: sdk.String("sapiente"),
                                                },
                                                LocalPath: sdk.String("voluptates"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("ut"),
                                                    URI: sdk.String("http://better-stack.info"),
                                                },
                                            },
                                        },
                                        Yum: &shared.OSPolicyResourcePackageResourceYUM{
                                            Name: sdk.String("Toby Hilll"),
                                        },
                                        Zypper: &shared.OSPolicyResourcePackageResourceZypper{
                                            Name: sdk.String("Kay Wuckert"),
                                        },
                                    },
                                    Repository: &shared.OSPolicyResourceRepositoryResource{
                                        Apt: &shared.OSPolicyResourceRepositoryResourceAptRepository{
                                            ArchiveType: shared.OSPolicyResourceRepositoryResourceAptRepositoryArchiveTypeEnumDeb.ToPointer(),
                                            Components: []string{
                                                "aspernatur",
                                                "eaque",
                                                "impedit",
                                                "nam",
                                            },
                                            Distribution: sdk.String("ex"),
                                            GpgKey: sdk.String("odio"),
                                            URI: sdk.String("https://squiggly-drawing.net"),
                                        },
                                        Goo: &shared.OSPolicyResourceRepositoryResourceGooRepository{
                                            Name: sdk.String("Julia Hartmann"),
                                            URL: sdk.String("occaecati"),
                                        },
                                        Yum: &shared.OSPolicyResourceRepositoryResourceYumRepository{
                                            BaseURL: sdk.String("debitis"),
                                            DisplayName: sdk.String("laboriosam"),
                                            GpgKeys: []string{
                                                "amet",
                                            },
                                            ID: sdk.String("4c9f7b79-dfeb-477a-9c38-d4baf91e506e"),
                                        },
                                        Zypper: &shared.OSPolicyResourceRepositoryResourceZypperRepository{
                                            BaseURL: sdk.String("delectus"),
                                            DisplayName: sdk.String("deleniti"),
                                            GpgKeys: []string{
                                                "aut",
                                                "dolorum",
                                                "nostrum",
                                            },
                                            ID: sdk.String("4b475f16-f56d-4385-a3c4-ac631b99e26c"),
                                        },
                                    },
                                },
                                shared.OSPolicyResource{
                                    Exec: &shared.OSPolicyResourceExecResource{
                                        Enforce: &shared.OSPolicyResourceExecResourceExec{
                                            Args: []string{
                                                "fugiat",
                                                "blanditiis",
                                                "a",
                                                "natus",
                                            },
                                            File: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("sapiente"),
                                                    Generation: sdk.String("repellendus"),
                                                    Object: sdk.String("facilis"),
                                                },
                                                LocalPath: sdk.String("molestias"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("dolore"),
                                                    URI: sdk.String("http://another-wick.info"),
                                                },
                                            },
                                            Interpreter: shared.OSPolicyResourceExecResourceExecInterpreterEnumInterpreterUnspecified.ToPointer(),
                                            OutputFilePath: sdk.String("tempore"),
                                            Script: sdk.String("expedita"),
                                        },
                                        Validate: &shared.OSPolicyResourceExecResourceExec{
                                            Args: []string{
                                                "blanditiis",
                                                "vitae",
                                                "iusto",
                                                "atque",
                                            },
                                            File: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("velit"),
                                                    Generation: sdk.String("molestiae"),
                                                    Object: sdk.String("nam"),
                                                },
                                                LocalPath: sdk.String("aperiam"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("vitae"),
                                                    URI: sdk.String("https://wrong-supplier.org"),
                                                },
                                            },
                                            Interpreter: shared.OSPolicyResourceExecResourceExecInterpreterEnumNone.ToPointer(),
                                            OutputFilePath: sdk.String("deleniti"),
                                            Script: sdk.String("rem"),
                                        },
                                    },
                                    File: &shared.OSPolicyResourceFileResource{
                                        Content: sdk.String("vel"),
                                        File: &shared.OSPolicyResourceFile{
                                            AllowInsecure: sdk.Bool(false),
                                            Gcs: &shared.OSPolicyResourceFileGcs{
                                                Bucket: sdk.String("eos"),
                                                Generation: sdk.String("labore"),
                                                Object: sdk.String("sunt"),
                                            },
                                            LocalPath: sdk.String("blanditiis"),
                                            Remote: &shared.OSPolicyResourceFileRemote{
                                                Sha256Checksum: sdk.String("iste"),
                                                URI: sdk.String("https://sandy-documentation.biz"),
                                            },
                                        },
                                        Path: sdk.String("blanditiis"),
                                        Permissions: sdk.String("ducimus"),
                                        State: shared.OSPolicyResourceFileResourceStateEnumDesiredStateUnspecified.ToPointer(),
                                    },
                                    ID: sdk.String("f5033f19-dbf1-425c-a415-2eab9cd7e522"),
                                    Pkg: &shared.OSPolicyResourcePackageResource{
                                        Apt: &shared.OSPolicyResourcePackageResourceAPT{
                                            Name: sdk.String("Isabel Keebler DVM"),
                                        },
                                        Deb: &shared.OSPolicyResourcePackageResourceDeb{
                                            PullDeps: sdk.Bool(false),
                                            Source: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("ab"),
                                                    Generation: sdk.String("sunt"),
                                                    Object: sdk.String("amet"),
                                                },
                                                LocalPath: sdk.String("cum"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("iusto"),
                                                    URI: sdk.String("https://excitable-industrialisation.org"),
                                                },
                                            },
                                        },
                                        DesiredState: shared.OSPolicyResourcePackageResourceDesiredStateEnumRemoved.ToPointer(),
                                        Googet: &shared.OSPolicyResourcePackageResourceGooGet{
                                            Name: sdk.String("Dr. Guadalupe Walsh"),
                                        },
                                        Msi: &shared.OSPolicyResourcePackageResourceMSI{
                                            Properties: []string{
                                                "repellat",
                                                "amet",
                                            },
                                            Source: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("cumque"),
                                                    Generation: sdk.String("dolore"),
                                                    Object: sdk.String("optio"),
                                                },
                                                LocalPath: sdk.String("quo"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("repudiandae"),
                                                    URI: sdk.String("http://second-hand-gemsbok.org"),
                                                },
                                            },
                                        },
                                        Rpm: &shared.OSPolicyResourcePackageResourceRPM{
                                            PullDeps: sdk.Bool(false),
                                            Source: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("iusto"),
                                                    Generation: sdk.String("aliquid"),
                                                    Object: sdk.String("sint"),
                                                },
                                                LocalPath: sdk.String("aliquid"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("repellat"),
                                                    URI: sdk.String("https://eminent-rope.info"),
                                                },
                                            },
                                        },
                                        Yum: &shared.OSPolicyResourcePackageResourceYUM{
                                            Name: sdk.String("Esther Kuhn Sr."),
                                        },
                                        Zypper: &shared.OSPolicyResourcePackageResourceZypper{
                                            Name: sdk.String("Stacy Kovacek"),
                                        },
                                    },
                                    Repository: &shared.OSPolicyResourceRepositoryResource{
                                        Apt: &shared.OSPolicyResourceRepositoryResourceAptRepository{
                                            ArchiveType: shared.OSPolicyResourceRepositoryResourceAptRepositoryArchiveTypeEnumArchiveTypeUnspecified.ToPointer(),
                                            Components: []string{
                                                "ipsam",
                                                "dicta",
                                                "hic",
                                                "praesentium",
                                            },
                                            Distribution: sdk.String("libero"),
                                            GpgKey: sdk.String("consequatur"),
                                            URI: sdk.String("https://fatal-scotch.biz"),
                                        },
                                        Goo: &shared.OSPolicyResourceRepositoryResourceGooRepository{
                                            Name: sdk.String("Geneva Kohler V"),
                                            URL: sdk.String("consectetur"),
                                        },
                                        Yum: &shared.OSPolicyResourceRepositoryResourceYumRepository{
                                            BaseURL: sdk.String("deserunt"),
                                            DisplayName: sdk.String("odit"),
                                            GpgKeys: []string{
                                                "corporis",
                                                "quaerat",
                                            },
                                            ID: sdk.String("67f94874-c2d5-4cc4-9722-33e66bd8fe5d"),
                                        },
                                        Zypper: &shared.OSPolicyResourceRepositoryResourceZypperRepository{
                                            BaseURL: sdk.String("aut"),
                                            DisplayName: sdk.String("voluptatem"),
                                            GpgKeys: []string{
                                                "excepturi",
                                                "odio",
                                                "omnis",
                                            },
                                            ID: sdk.String("ef203873-2059-40cc-8109-6400313b3e50"),
                                        },
                                    },
                                },
                                shared.OSPolicyResource{
                                    Exec: &shared.OSPolicyResourceExecResource{
                                        Enforce: &shared.OSPolicyResourceExecResourceExec{
                                            Args: []string{
                                                "ut",
                                                "delectus",
                                            },
                                            File: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("aliquid"),
                                                    Generation: sdk.String("ullam"),
                                                    Object: sdk.String("maiores"),
                                                },
                                                LocalPath: sdk.String("debitis"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("reprehenderit"),
                                                    URI: sdk.String("http://superior-safari.biz"),
                                                },
                                            },
                                            Interpreter: shared.OSPolicyResourceExecResourceExecInterpreterEnumInterpreterUnspecified.ToPointer(),
                                            OutputFilePath: sdk.String("nihil"),
                                            Script: sdk.String("quam"),
                                        },
                                        Validate: &shared.OSPolicyResourceExecResourceExec{
                                            Args: []string{
                                                "consequatur",
                                                "cumque",
                                                "placeat",
                                                "adipisci",
                                            },
                                            File: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("tenetur"),
                                                    Generation: sdk.String("non"),
                                                    Object: sdk.String("accusantium"),
                                                },
                                                LocalPath: sdk.String("corrupti"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("itaque"),
                                                    URI: sdk.String("https://soft-cabbage.info"),
                                                },
                                            },
                                            Interpreter: shared.OSPolicyResourceExecResourceExecInterpreterEnumPowershell.ToPointer(),
                                            OutputFilePath: sdk.String("eveniet"),
                                            Script: sdk.String("cum"),
                                        },
                                    },
                                    File: &shared.OSPolicyResourceFileResource{
                                        Content: sdk.String("dolore"),
                                        File: &shared.OSPolicyResourceFile{
                                            AllowInsecure: sdk.Bool(false),
                                            Gcs: &shared.OSPolicyResourceFileGcs{
                                                Bucket: sdk.String("illum"),
                                                Generation: sdk.String("ea"),
                                                Object: sdk.String("officiis"),
                                            },
                                            LocalPath: sdk.String("quasi"),
                                            Remote: &shared.OSPolicyResourceFileRemote{
                                                Sha256Checksum: sdk.String("accusamus"),
                                                URI: sdk.String("https://unselfish-angstrom.org"),
                                            },
                                        },
                                        Path: sdk.String("odio"),
                                        Permissions: sdk.String("veniam"),
                                        State: shared.OSPolicyResourceFileResourceStateEnumAbsent.ToPointer(),
                                    },
                                    ID: sdk.String("edf2acab-58b9-491c-926d-db589461e742"),
                                    Pkg: &shared.OSPolicyResourcePackageResource{
                                        Apt: &shared.OSPolicyResourcePackageResourceAPT{
                                            Name: sdk.String("Kara Rohan"),
                                        },
                                        Deb: &shared.OSPolicyResourcePackageResourceDeb{
                                            PullDeps: sdk.Bool(false),
                                            Source: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("possimus"),
                                                    Generation: sdk.String("provident"),
                                                    Object: sdk.String("veniam"),
                                                },
                                                LocalPath: sdk.String("sit"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("fugit"),
                                                    URI: sdk.String("https://aching-sweatshop.name"),
                                                },
                                            },
                                        },
                                        DesiredState: shared.OSPolicyResourcePackageResourceDesiredStateEnumInstalled.ToPointer(),
                                        Googet: &shared.OSPolicyResourcePackageResourceGooGet{
                                            Name: sdk.String("Margaret Rau"),
                                        },
                                        Msi: &shared.OSPolicyResourcePackageResourceMSI{
                                            Properties: []string{
                                                "nihil",
                                                "fuga",
                                                "cumque",
                                                "consequuntur",
                                            },
                                            Source: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("maiores"),
                                                    Generation: sdk.String("esse"),
                                                    Object: sdk.String("explicabo"),
                                                },
                                                LocalPath: sdk.String("delectus"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("quos"),
                                                    URI: sdk.String("https://frilly-ambassador.com"),
                                                },
                                            },
                                        },
                                        Rpm: &shared.OSPolicyResourcePackageResourceRPM{
                                            PullDeps: sdk.Bool(false),
                                            Source: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("natus"),
                                                    Generation: sdk.String("voluptatem"),
                                                    Object: sdk.String("tempora"),
                                                },
                                                LocalPath: sdk.String("occaecati"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("quasi"),
                                                    URI: sdk.String("http://identical-arthur.name"),
                                                },
                                            },
                                        },
                                        Yum: &shared.OSPolicyResourcePackageResourceYUM{
                                            Name: sdk.String("Margaret Koelpin"),
                                        },
                                        Zypper: &shared.OSPolicyResourcePackageResourceZypper{
                                            Name: sdk.String("Noah Schimmel"),
                                        },
                                    },
                                    Repository: &shared.OSPolicyResourceRepositoryResource{
                                        Apt: &shared.OSPolicyResourceRepositoryResourceAptRepository{
                                            ArchiveType: shared.OSPolicyResourceRepositoryResourceAptRepositoryArchiveTypeEnumArchiveTypeUnspecified.ToPointer(),
                                            Components: []string{
                                                "consectetur",
                                                "soluta",
                                                "tenetur",
                                            },
                                            Distribution: sdk.String("necessitatibus"),
                                            GpgKey: sdk.String("perspiciatis"),
                                            URI: sdk.String("http://gross-numismatist.org"),
                                        },
                                        Goo: &shared.OSPolicyResourceRepositoryResourceGooRepository{
                                            Name: sdk.String("Oscar Baumbach"),
                                            URL: sdk.String("sunt"),
                                        },
                                        Yum: &shared.OSPolicyResourceRepositoryResourceYumRepository{
                                            BaseURL: sdk.String("voluptas"),
                                            DisplayName: sdk.String("earum"),
                                            GpgKeys: []string{
                                                "earum",
                                                "nihil",
                                                "nostrum",
                                            },
                                            ID: sdk.String("b0b532a4-da37-4cba-af44-52c4842c9b2a"),
                                        },
                                        Zypper: &shared.OSPolicyResourceRepositoryResourceZypperRepository{
                                            BaseURL: sdk.String("at"),
                                            DisplayName: sdk.String("ipsum"),
                                            GpgKeys: []string{
                                                "nulla",
                                            },
                                            ID: sdk.String("afe81a88-f444-4457-bfec-d47353f63c82"),
                                        },
                                    },
                                },
                                shared.OSPolicyResource{
                                    Exec: &shared.OSPolicyResourceExecResource{
                                        Enforce: &shared.OSPolicyResourceExecResourceExec{
                                            Args: []string{
                                                "natus",
                                            },
                                            File: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("ratione"),
                                                    Generation: sdk.String("nihil"),
                                                    Object: sdk.String("unde"),
                                                },
                                                LocalPath: sdk.String("deserunt"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("id"),
                                                    URI: sdk.String("http://obese-rubric.org"),
                                                },
                                            },
                                            Interpreter: shared.OSPolicyResourceExecResourceExecInterpreterEnumNone.ToPointer(),
                                            OutputFilePath: sdk.String("asperiores"),
                                            Script: sdk.String("nam"),
                                        },
                                        Validate: &shared.OSPolicyResourceExecResourceExec{
                                            Args: []string{
                                                "sapiente",
                                                "quam",
                                                "occaecati",
                                                "repellendus",
                                            },
                                            File: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("culpa"),
                                                    Generation: sdk.String("dicta"),
                                                    Object: sdk.String("rem"),
                                                },
                                                LocalPath: sdk.String("fuga"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("odio"),
                                                    URI: sdk.String("https://dark-coin.net"),
                                                },
                                            },
                                            Interpreter: shared.OSPolicyResourceExecResourceExecInterpreterEnumPowershell.ToPointer(),
                                            OutputFilePath: sdk.String("omnis"),
                                            Script: sdk.String("quis"),
                                        },
                                    },
                                    File: &shared.OSPolicyResourceFileResource{
                                        Content: sdk.String("quos"),
                                        File: &shared.OSPolicyResourceFile{
                                            AllowInsecure: sdk.Bool(false),
                                            Gcs: &shared.OSPolicyResourceFileGcs{
                                                Bucket: sdk.String("natus"),
                                                Generation: sdk.String("aliquam"),
                                                Object: sdk.String("vero"),
                                            },
                                            LocalPath: sdk.String("nisi"),
                                            Remote: &shared.OSPolicyResourceFileRemote{
                                                Sha256Checksum: sdk.String("praesentium"),
                                                URI: sdk.String("http://chief-picket.net"),
                                            },
                                        },
                                        Path: sdk.String("libero"),
                                        Permissions: sdk.String("ullam"),
                                        State: shared.OSPolicyResourceFileResourceStateEnumPresent.ToPointer(),
                                    },
                                    ID: sdk.String("f9e5d751-c9fe-48f7-902b-fdc3450841f1"),
                                    Pkg: &shared.OSPolicyResourcePackageResource{
                                        Apt: &shared.OSPolicyResourcePackageResourceAPT{
                                            Name: sdk.String("Stacey Grimes"),
                                        },
                                        Deb: &shared.OSPolicyResourcePackageResourceDeb{
                                            PullDeps: sdk.Bool(false),
                                            Source: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("ex"),
                                                    Generation: sdk.String("amet"),
                                                    Object: sdk.String("voluptate"),
                                                },
                                                LocalPath: sdk.String("molestias"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("voluptatibus"),
                                                    URI: sdk.String("http://wasteful-product.com"),
                                                },
                                            },
                                        },
                                        DesiredState: shared.OSPolicyResourcePackageResourceDesiredStateEnumInstalled.ToPointer(),
                                        Googet: &shared.OSPolicyResourcePackageResourceGooGet{
                                            Name: sdk.String("Eugene Block"),
                                        },
                                        Msi: &shared.OSPolicyResourcePackageResourceMSI{
                                            Properties: []string{
                                                "consequuntur",
                                                "laboriosam",
                                            },
                                            Source: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("nemo"),
                                                    Generation: sdk.String("reprehenderit"),
                                                    Object: sdk.String("soluta"),
                                                },
                                                LocalPath: sdk.String("ipsum"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("vel"),
                                                    URI: sdk.String("https://strange-hemisphere.net"),
                                                },
                                            },
                                        },
                                        Rpm: &shared.OSPolicyResourcePackageResourceRPM{
                                            PullDeps: sdk.Bool(false),
                                            Source: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("cupiditate"),
                                                    Generation: sdk.String("hic"),
                                                    Object: sdk.String("quis"),
                                                },
                                                LocalPath: sdk.String("deleniti"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("iusto"),
                                                    URI: sdk.String("https://untidy-executive.biz"),
                                                },
                                            },
                                        },
                                        Yum: &shared.OSPolicyResourcePackageResourceYUM{
                                            Name: sdk.String("Brooke Jacobs"),
                                        },
                                        Zypper: &shared.OSPolicyResourcePackageResourceZypper{
                                            Name: sdk.String("Julie Pfannerstill"),
                                        },
                                    },
                                    Repository: &shared.OSPolicyResourceRepositoryResource{
                                        Apt: &shared.OSPolicyResourceRepositoryResourceAptRepository{
                                            ArchiveType: shared.OSPolicyResourceRepositoryResourceAptRepositoryArchiveTypeEnumArchiveTypeUnspecified.ToPointer(),
                                            Components: []string{
                                                "officiis",
                                            },
                                            Distribution: sdk.String("veniam"),
                                            GpgKey: sdk.String("quae"),
                                            URI: sdk.String("http://itchy-redesign.biz"),
                                        },
                                        Goo: &shared.OSPolicyResourceRepositoryResourceGooRepository{
                                            Name: sdk.String("Randy Breitenberg"),
                                            URL: sdk.String("distinctio"),
                                        },
                                        Yum: &shared.OSPolicyResourceRepositoryResourceYumRepository{
                                            BaseURL: sdk.String("numquam"),
                                            DisplayName: sdk.String("fugit"),
                                            GpgKeys: []string{
                                                "culpa",
                                            },
                                            ID: sdk.String("bcdc91fa-abdd-488e-b1f6-c48252d7771e"),
                                        },
                                        Zypper: &shared.OSPolicyResourceRepositoryResourceZypperRepository{
                                            BaseURL: sdk.String("voluptate"),
                                            DisplayName: sdk.String("hic"),
                                            GpgKeys: []string{
                                                "perferendis",
                                                "in",
                                                "eius",
                                                "aut",
                                            },
                                            ID: sdk.String("09ef8d29-de1d-4d70-97b5-da08c57fa6c7"),
                                        },
                                    },
                                },
                            },
                        },
                        shared.OSPolicyResourceGroup{
                            InventoryFilters: []shared.OSPolicyInventoryFilter{
                                shared.OSPolicyInventoryFilter{
                                    OsShortName: sdk.String("similique"),
                                    OsVersion: sdk.String("quia"),
                                },
                                shared.OSPolicyInventoryFilter{
                                    OsShortName: sdk.String("architecto"),
                                    OsVersion: sdk.String("ea"),
                                },
                                shared.OSPolicyInventoryFilter{
                                    OsShortName: sdk.String("accusamus"),
                                    OsVersion: sdk.String("illo"),
                                },
                            },
                            OsFilter: &shared.OSPolicyOSFilter{
                                OsShortName: sdk.String("excepturi"),
                                OsVersion: sdk.String("harum"),
                            },
                            Resources: []shared.OSPolicyResource{
                                shared.OSPolicyResource{
                                    Exec: &shared.OSPolicyResourceExecResource{
                                        Enforce: &shared.OSPolicyResourceExecResourceExec{
                                            Args: []string{
                                                "repudiandae",
                                                "minus",
                                                "officia",
                                                "laboriosam",
                                            },
                                            File: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("illo"),
                                                    Generation: sdk.String("cupiditate"),
                                                    Object: sdk.String("veritatis"),
                                                },
                                                LocalPath: sdk.String("aliquam"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("excepturi"),
                                                    URI: sdk.String("https://chubby-elephant.com"),
                                                },
                                            },
                                            Interpreter: shared.OSPolicyResourceExecResourceExecInterpreterEnumShell.ToPointer(),
                                            OutputFilePath: sdk.String("suscipit"),
                                            Script: sdk.String("eius"),
                                        },
                                        Validate: &shared.OSPolicyResourceExecResourceExec{
                                            Args: []string{
                                                "delectus",
                                                "quos",
                                                "id",
                                                "officiis",
                                            },
                                            File: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("ab"),
                                                    Generation: sdk.String("voluptate"),
                                                    Object: sdk.String("consequatur"),
                                                },
                                                LocalPath: sdk.String("itaque"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("repellat"),
                                                    URI: sdk.String("http://easy-raise.biz"),
                                                },
                                            },
                                            Interpreter: shared.OSPolicyResourceExecResourceExecInterpreterEnumPowershell.ToPointer(),
                                            OutputFilePath: sdk.String("neque"),
                                            Script: sdk.String("nihil"),
                                        },
                                    },
                                    File: &shared.OSPolicyResourceFileResource{
                                        Content: sdk.String("recusandae"),
                                        File: &shared.OSPolicyResourceFile{
                                            AllowInsecure: sdk.Bool(false),
                                            Gcs: &shared.OSPolicyResourceFileGcs{
                                                Bucket: sdk.String("numquam"),
                                                Generation: sdk.String("mollitia"),
                                                Object: sdk.String("mollitia"),
                                            },
                                            LocalPath: sdk.String("blanditiis"),
                                            Remote: &shared.OSPolicyResourceFileRemote{
                                                Sha256Checksum: sdk.String("suscipit"),
                                                URI: sdk.String("https://glossy-eurocentrism.info"),
                                            },
                                        },
                                        Path: sdk.String("iste"),
                                        Permissions: sdk.String("ea"),
                                        State: shared.OSPolicyResourceFileResourceStateEnumPresent.ToPointer(),
                                    },
                                    ID: sdk.String("732aa5dc-b668-42cb-b0f8-cfd5fb6e91b9"),
                                    Pkg: &shared.OSPolicyResourcePackageResource{
                                        Apt: &shared.OSPolicyResourcePackageResourceAPT{
                                            Name: sdk.String("Ross Wilderman"),
                                        },
                                        Deb: &shared.OSPolicyResourcePackageResourceDeb{
                                            PullDeps: sdk.Bool(false),
                                            Source: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("laudantium"),
                                                    Generation: sdk.String("dolore"),
                                                    Object: sdk.String("aliquid"),
                                                },
                                                LocalPath: sdk.String("repudiandae"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("aspernatur"),
                                                    URI: sdk.String("https://doting-controller.com"),
                                                },
                                            },
                                        },
                                        DesiredState: shared.OSPolicyResourcePackageResourceDesiredStateEnumInstalled.ToPointer(),
                                        Googet: &shared.OSPolicyResourcePackageResourceGooGet{
                                            Name: sdk.String("Ed Armstrong"),
                                        },
                                        Msi: &shared.OSPolicyResourcePackageResourceMSI{
                                            Properties: []string{
                                                "quibusdam",
                                                "sint",
                                            },
                                            Source: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("voluptates"),
                                                    Generation: sdk.String("nihil"),
                                                    Object: sdk.String("ad"),
                                                },
                                                LocalPath: sdk.String("eligendi"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("fuga"),
                                                    URI: sdk.String("http://alive-horizon.org"),
                                                },
                                            },
                                        },
                                        Rpm: &shared.OSPolicyResourcePackageResourceRPM{
                                            PullDeps: sdk.Bool(false),
                                            Source: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("quis"),
                                                    Generation: sdk.String("dolorem"),
                                                    Object: sdk.String("omnis"),
                                                },
                                                LocalPath: sdk.String("sed"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("quo"),
                                                    URI: sdk.String("http://blaring-platter.com"),
                                                },
                                            },
                                        },
                                        Yum: &shared.OSPolicyResourcePackageResourceYUM{
                                            Name: sdk.String("Genevieve Legros"),
                                        },
                                        Zypper: &shared.OSPolicyResourcePackageResourceZypper{
                                            Name: sdk.String("Lawrence Wunsch"),
                                        },
                                    },
                                    Repository: &shared.OSPolicyResourceRepositoryResource{
                                        Apt: &shared.OSPolicyResourceRepositoryResourceAptRepository{
                                            ArchiveType: shared.OSPolicyResourceRepositoryResourceAptRepositoryArchiveTypeEnumArchiveTypeUnspecified.ToPointer(),
                                            Components: []string{
                                                "molestias",
                                            },
                                            Distribution: sdk.String("fuga"),
                                            GpgKey: sdk.String("at"),
                                            URI: sdk.String("https://quintessential-neonate.org"),
                                        },
                                        Goo: &shared.OSPolicyResourceRepositoryResourceGooRepository{
                                            Name: sdk.String("Gerardo Weimann"),
                                            URL: sdk.String("odit"),
                                        },
                                        Yum: &shared.OSPolicyResourceRepositoryResourceYumRepository{
                                            BaseURL: sdk.String("illo"),
                                            DisplayName: sdk.String("architecto"),
                                            GpgKeys: []string{
                                                "ad",
                                            },
                                            ID: sdk.String("359d9838-7f7a-479c-972c-d2484da21729"),
                                        },
                                        Zypper: &shared.OSPolicyResourceRepositoryResourceZypperRepository{
                                            BaseURL: sdk.String("reiciendis"),
                                            DisplayName: sdk.String("qui"),
                                            GpgKeys: []string{
                                                "eligendi",
                                                "numquam",
                                                "inventore",
                                            },
                                            ID: sdk.String("ef5725f1-169a-4c1e-81d8-a23c23e34f2d"),
                                        },
                                    },
                                },
                                shared.OSPolicyResource{
                                    Exec: &shared.OSPolicyResourceExecResource{
                                        Enforce: &shared.OSPolicyResourceExecResourceExec{
                                            Args: []string{
                                                "mollitia",
                                                "quaerat",
                                                "officia",
                                                "sunt",
                                            },
                                            File: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("perspiciatis"),
                                                    Generation: sdk.String("quam"),
                                                    Object: sdk.String("a"),
                                                },
                                                LocalPath: sdk.String("iure"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("nulla"),
                                                    URI: sdk.String("https://parched-cartilage.com"),
                                                },
                                            },
                                            Interpreter: shared.OSPolicyResourceExecResourceExecInterpreterEnumInterpreterUnspecified.ToPointer(),
                                            OutputFilePath: sdk.String("ipsam"),
                                            Script: sdk.String("et"),
                                        },
                                        Validate: &shared.OSPolicyResourceExecResourceExec{
                                            Args: []string{
                                                "saepe",
                                                "sunt",
                                                "in",
                                                "architecto",
                                            },
                                            File: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("sed"),
                                                    Generation: sdk.String("voluptatem"),
                                                    Object: sdk.String("perspiciatis"),
                                                },
                                                LocalPath: sdk.String("error"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("deleniti"),
                                                    URI: sdk.String("http://disastrous-thistle.name"),
                                                },
                                            },
                                            Interpreter: shared.OSPolicyResourceExecResourceExecInterpreterEnumPowershell.ToPointer(),
                                            OutputFilePath: sdk.String("quis"),
                                            Script: sdk.String("modi"),
                                        },
                                    },
                                    File: &shared.OSPolicyResourceFileResource{
                                        Content: sdk.String("adipisci"),
                                        File: &shared.OSPolicyResourceFile{
                                            AllowInsecure: sdk.Bool(false),
                                            Gcs: &shared.OSPolicyResourceFileGcs{
                                                Bucket: sdk.String("pariatur"),
                                                Generation: sdk.String("praesentium"),
                                                Object: sdk.String("nemo"),
                                            },
                                            LocalPath: sdk.String("dolore"),
                                            Remote: &shared.OSPolicyResourceFileRemote{
                                                Sha256Checksum: sdk.String("numquam"),
                                                URI: sdk.String("http://ordinary-swordfight.org"),
                                            },
                                        },
                                        Path: sdk.String("quia"),
                                        Permissions: sdk.String("aspernatur"),
                                        State: shared.OSPolicyResourceFileResourceStateEnumPresent.ToPointer(),
                                    },
                                    ID: sdk.String("460443bc-1541-488c-af56-e85da7832eab"),
                                    Pkg: &shared.OSPolicyResourcePackageResource{
                                        Apt: &shared.OSPolicyResourcePackageResourceAPT{
                                            Name: sdk.String("Hector Botsford"),
                                        },
                                        Deb: &shared.OSPolicyResourcePackageResourceDeb{
                                            PullDeps: sdk.Bool(false),
                                            Source: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("nesciunt"),
                                                    Generation: sdk.String("harum"),
                                                    Object: sdk.String("aperiam"),
                                                },
                                                LocalPath: sdk.String("pariatur"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("ad"),
                                                    URI: sdk.String("http://political-employer.biz"),
                                                },
                                            },
                                        },
                                        DesiredState: shared.OSPolicyResourcePackageResourceDesiredStateEnumRemoved.ToPointer(),
                                        Googet: &shared.OSPolicyResourcePackageResourceGooGet{
                                            Name: sdk.String("Daniel Bradtke"),
                                        },
                                        Msi: &shared.OSPolicyResourcePackageResourceMSI{
                                            Properties: []string{
                                                "corrupti",
                                                "voluptate",
                                                "alias",
                                                "iure",
                                            },
                                            Source: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("temporibus"),
                                                    Generation: sdk.String("incidunt"),
                                                    Object: sdk.String("ea"),
                                                },
                                                LocalPath: sdk.String("alias"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("laudantium"),
                                                    URI: sdk.String("http://scornful-whisper.net"),
                                                },
                                            },
                                        },
                                        Rpm: &shared.OSPolicyResourcePackageResourceRPM{
                                            PullDeps: sdk.Bool(false),
                                            Source: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("pariatur"),
                                                    Generation: sdk.String("quod"),
                                                    Object: sdk.String("modi"),
                                                },
                                                LocalPath: sdk.String("vitae"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("delectus"),
                                                    URI: sdk.String("https://handy-sunday.biz"),
                                                },
                                            },
                                        },
                                        Yum: &shared.OSPolicyResourcePackageResourceYUM{
                                            Name: sdk.String("Aaron O'Conner"),
                                        },
                                        Zypper: &shared.OSPolicyResourcePackageResourceZypper{
                                            Name: sdk.String("Cesar Hansen"),
                                        },
                                    },
                                    Repository: &shared.OSPolicyResourceRepositoryResource{
                                        Apt: &shared.OSPolicyResourceRepositoryResourceAptRepository{
                                            ArchiveType: shared.OSPolicyResourceRepositoryResourceAptRepositoryArchiveTypeEnumArchiveTypeUnspecified.ToPointer(),
                                            Components: []string{
                                                "fugiat",
                                                "beatae",
                                            },
                                            Distribution: sdk.String("dignissimos"),
                                            GpgKey: sdk.String("nisi"),
                                            URI: sdk.String("http://murky-walker.com"),
                                        },
                                        Goo: &shared.OSPolicyResourceRepositoryResourceGooRepository{
                                            Name: sdk.String("Owen Rau"),
                                            URL: sdk.String("consectetur"),
                                        },
                                        Yum: &shared.OSPolicyResourceRepositoryResourceYumRepository{
                                            BaseURL: sdk.String("nemo"),
                                            DisplayName: sdk.String("provident"),
                                            GpgKeys: []string{
                                                "minus",
                                                "impedit",
                                                "minima",
                                                "cumque",
                                            },
                                            ID: sdk.String("b860f8cd-580b-4a73-810e-4fe4447297cd"),
                                        },
                                        Zypper: &shared.OSPolicyResourceRepositoryResourceZypperRepository{
                                            BaseURL: sdk.String("non"),
                                            DisplayName: sdk.String("rerum"),
                                            GpgKeys: []string{
                                                "illum",
                                            },
                                            ID: sdk.String("d3bbce24-7b76-484e-bf50-126d71cffbd0"),
                                        },
                                    },
                                },
                                shared.OSPolicyResource{
                                    Exec: &shared.OSPolicyResourceExecResource{
                                        Enforce: &shared.OSPolicyResourceExecResourceExec{
                                            Args: []string{
                                                "rerum",
                                                "molestiae",
                                                "quaerat",
                                                "distinctio",
                                            },
                                            File: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("blanditiis"),
                                                    Generation: sdk.String("quaerat"),
                                                    Object: sdk.String("odit"),
                                                },
                                                LocalPath: sdk.String("ab"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("unde"),
                                                    URI: sdk.String("http://dramatic-prohibition.biz"),
                                                },
                                            },
                                            Interpreter: shared.OSPolicyResourceExecResourceExecInterpreterEnumNone.ToPointer(),
                                            OutputFilePath: sdk.String("quidem"),
                                            Script: sdk.String("nulla"),
                                        },
                                        Validate: &shared.OSPolicyResourceExecResourceExec{
                                            Args: []string{
                                                "quisquam",
                                            },
                                            File: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("labore"),
                                                    Generation: sdk.String("sequi"),
                                                    Object: sdk.String("veritatis"),
                                                },
                                                LocalPath: sdk.String("veniam"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("unde"),
                                                    URI: sdk.String("https://equal-deck.org"),
                                                },
                                            },
                                            Interpreter: shared.OSPolicyResourceExecResourceExecInterpreterEnumNone.ToPointer(),
                                            OutputFilePath: sdk.String("provident"),
                                            Script: sdk.String("nostrum"),
                                        },
                                    },
                                    File: &shared.OSPolicyResourceFileResource{
                                        Content: sdk.String("dolor"),
                                        File: &shared.OSPolicyResourceFile{
                                            AllowInsecure: sdk.Bool(false),
                                            Gcs: &shared.OSPolicyResourceFileGcs{
                                                Bucket: sdk.String("quod"),
                                                Generation: sdk.String("consequatur"),
                                                Object: sdk.String("accusantium"),
                                            },
                                            LocalPath: sdk.String("dicta"),
                                            Remote: &shared.OSPolicyResourceFileRemote{
                                                Sha256Checksum: sdk.String("illo"),
                                                URI: sdk.String("http://nutritious-meeting.info"),
                                            },
                                        },
                                        Path: sdk.String("sequi"),
                                        Permissions: sdk.String("culpa"),
                                        State: shared.OSPolicyResourceFileResourceStateEnumAbsent.ToPointer(),
                                    },
                                    ID: sdk.String("41e6c31c-c2f1-4fcb-91c9-a41ffbe9cbd7"),
                                    Pkg: &shared.OSPolicyResourcePackageResource{
                                        Apt: &shared.OSPolicyResourcePackageResourceAPT{
                                            Name: sdk.String("Clyde Waelchi"),
                                        },
                                        Deb: &shared.OSPolicyResourcePackageResourceDeb{
                                            PullDeps: sdk.Bool(false),
                                            Source: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("veniam"),
                                                    Generation: sdk.String("debitis"),
                                                    Object: sdk.String("doloremque"),
                                                },
                                                LocalPath: sdk.String("esse"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("aliquid"),
                                                    URI: sdk.String("https://splendid-isolation.name"),
                                                },
                                            },
                                        },
                                        DesiredState: shared.OSPolicyResourcePackageResourceDesiredStateEnumRemoved.ToPointer(),
                                        Googet: &shared.OSPolicyResourcePackageResourceGooGet{
                                            Name: sdk.String("Andre Breitenberg"),
                                        },
                                        Msi: &shared.OSPolicyResourcePackageResourceMSI{
                                            Properties: []string{
                                                "ipsam",
                                                "porro",
                                                "molestiae",
                                            },
                                            Source: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("inventore"),
                                                    Generation: sdk.String("vel"),
                                                    Object: sdk.String("modi"),
                                                },
                                                LocalPath: sdk.String("dicta"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("provident"),
                                                    URI: sdk.String("http://flowery-reset.name"),
                                                },
                                            },
                                        },
                                        Rpm: &shared.OSPolicyResourcePackageResourceRPM{
                                            PullDeps: sdk.Bool(false),
                                            Source: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("sit"),
                                                    Generation: sdk.String("asperiores"),
                                                    Object: sdk.String("aspernatur"),
                                                },
                                                LocalPath: sdk.String("officiis"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("sit"),
                                                    URI: sdk.String("https://tidy-baseball.name"),
                                                },
                                            },
                                        },
                                        Yum: &shared.OSPolicyResourcePackageResourceYUM{
                                            Name: sdk.String("Martin Wilderman DVM"),
                                        },
                                        Zypper: &shared.OSPolicyResourcePackageResourceZypper{
                                            Name: sdk.String("Merle Cormier Jr."),
                                        },
                                    },
                                    Repository: &shared.OSPolicyResourceRepositoryResource{
                                        Apt: &shared.OSPolicyResourceRepositoryResourceAptRepository{
                                            ArchiveType: shared.OSPolicyResourceRepositoryResourceAptRepositoryArchiveTypeEnumDeb.ToPointer(),
                                            Components: []string{
                                                "numquam",
                                                "numquam",
                                                "tempore",
                                            },
                                            Distribution: sdk.String("molestias"),
                                            GpgKey: sdk.String("amet"),
                                            URI: sdk.String("http://thankful-cheque.biz"),
                                        },
                                        Goo: &shared.OSPolicyResourceRepositoryResourceGooRepository{
                                            Name: sdk.String("Madeline Kunze"),
                                            URL: sdk.String("occaecati"),
                                        },
                                        Yum: &shared.OSPolicyResourceRepositoryResourceYumRepository{
                                            BaseURL: sdk.String("doloremque"),
                                            DisplayName: sdk.String("blanditiis"),
                                            GpgKeys: []string{
                                                "excepturi",
                                                "fugiat",
                                            },
                                            ID: sdk.String("6aed4aec-b753-47cd-9222-c9ff57491aab"),
                                        },
                                        Zypper: &shared.OSPolicyResourceRepositoryResourceZypperRepository{
                                            BaseURL: sdk.String("sapiente"),
                                            DisplayName: sdk.String("laborum"),
                                            GpgKeys: []string{
                                                "vero",
                                            },
                                            ID: sdk.String("761f0ca4-d456-4ef1-831e-6899f0c2001e"),
                                        },
                                    },
                                },
                            },
                        },
                        shared.OSPolicyResourceGroup{
                            InventoryFilters: []shared.OSPolicyInventoryFilter{
                                shared.OSPolicyInventoryFilter{
                                    OsShortName: sdk.String("aspernatur"),
                                    OsVersion: sdk.String("minus"),
                                },
                            },
                            OsFilter: &shared.OSPolicyOSFilter{
                                OsShortName: sdk.String("illum"),
                                OsVersion: sdk.String("veniam"),
                            },
                            Resources: []shared.OSPolicyResource{
                                shared.OSPolicyResource{
                                    Exec: &shared.OSPolicyResourceExecResource{
                                        Enforce: &shared.OSPolicyResourceExecResourceExec{
                                            Args: []string{
                                                "quod",
                                                "alias",
                                                "nemo",
                                                "molestias",
                                            },
                                            File: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("modi"),
                                                    Generation: sdk.String("similique"),
                                                    Object: sdk.String("quasi"),
                                                },
                                                LocalPath: sdk.String("laudantium"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("ut"),
                                                    URI: sdk.String("https://knowing-gang.net"),
                                                },
                                            },
                                            Interpreter: shared.OSPolicyResourceExecResourceExecInterpreterEnumShell.ToPointer(),
                                            OutputFilePath: sdk.String("voluptate"),
                                            Script: sdk.String("vitae"),
                                        },
                                        Validate: &shared.OSPolicyResourceExecResourceExec{
                                            Args: []string{
                                                "cumque",
                                                "atque",
                                                "explicabo",
                                                "sit",
                                            },
                                            File: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("eligendi"),
                                                    Generation: sdk.String("commodi"),
                                                    Object: sdk.String("enim"),
                                                },
                                                LocalPath: sdk.String("harum"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("aut"),
                                                    URI: sdk.String("http://irritating-promise.net"),
                                                },
                                            },
                                            Interpreter: shared.OSPolicyResourceExecResourceExecInterpreterEnumShell.ToPointer(),
                                            OutputFilePath: sdk.String("saepe"),
                                            Script: sdk.String("sit"),
                                        },
                                    },
                                    File: &shared.OSPolicyResourceFileResource{
                                        Content: sdk.String("optio"),
                                        File: &shared.OSPolicyResourceFile{
                                            AllowInsecure: sdk.Bool(false),
                                            Gcs: &shared.OSPolicyResourceFileGcs{
                                                Bucket: sdk.String("impedit"),
                                                Generation: sdk.String("corrupti"),
                                                Object: sdk.String("quas"),
                                            },
                                            LocalPath: sdk.String("ullam"),
                                            Remote: &shared.OSPolicyResourceFileRemote{
                                                Sha256Checksum: sdk.String("veritatis"),
                                                URI: sdk.String("https://lanky-tale.biz"),
                                            },
                                        },
                                        Path: sdk.String("nulla"),
                                        Permissions: sdk.String("accusamus"),
                                        State: shared.OSPolicyResourceFileResourceStateEnumDesiredStateUnspecified.ToPointer(),
                                    },
                                    ID: sdk.String("4af28c5d-ddb4-46aa-9cfd-6d828da01319"),
                                    Pkg: &shared.OSPolicyResourcePackageResource{
                                        Apt: &shared.OSPolicyResourcePackageResourceAPT{
                                            Name: sdk.String("Jean Denesik"),
                                        },
                                        Deb: &shared.OSPolicyResourcePackageResourceDeb{
                                            PullDeps: sdk.Bool(false),
                                            Source: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("quaerat"),
                                                    Generation: sdk.String("aliquid"),
                                                    Object: sdk.String("eum"),
                                                },
                                                LocalPath: sdk.String("quaerat"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("enim"),
                                                    URI: sdk.String("https://big-hearted-stain.name"),
                                                },
                                            },
                                        },
                                        DesiredState: shared.OSPolicyResourcePackageResourceDesiredStateEnumDesiredStateUnspecified.ToPointer(),
                                        Googet: &shared.OSPolicyResourcePackageResourceGooGet{
                                            Name: sdk.String("Mrs. Roy Moore"),
                                        },
                                        Msi: &shared.OSPolicyResourcePackageResourceMSI{
                                            Properties: []string{
                                                "nemo",
                                                "laboriosam",
                                                "iste",
                                                "quidem",
                                            },
                                            Source: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("iusto"),
                                                    Generation: sdk.String("culpa"),
                                                    Object: sdk.String("reiciendis"),
                                                },
                                                LocalPath: sdk.String("a"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("consequatur"),
                                                    URI: sdk.String("https://rapid-chapel.biz"),
                                                },
                                            },
                                        },
                                        Rpm: &shared.OSPolicyResourcePackageResourceRPM{
                                            PullDeps: sdk.Bool(false),
                                            Source: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("veritatis"),
                                                    Generation: sdk.String("vel"),
                                                    Object: sdk.String("placeat"),
                                                },
                                                LocalPath: sdk.String("libero"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("saepe"),
                                                    URI: sdk.String("http://little-billboard.net"),
                                                },
                                            },
                                        },
                                        Yum: &shared.OSPolicyResourcePackageResourceYUM{
                                            Name: sdk.String("Andrew Jaskolski"),
                                        },
                                        Zypper: &shared.OSPolicyResourcePackageResourceZypper{
                                            Name: sdk.String("Lillie Mills"),
                                        },
                                    },
                                    Repository: &shared.OSPolicyResourceRepositoryResource{
                                        Apt: &shared.OSPolicyResourceRepositoryResourceAptRepository{
                                            ArchiveType: shared.OSPolicyResourceRepositoryResourceAptRepositoryArchiveTypeEnumDebSrc.ToPointer(),
                                            Components: []string{
                                                "blanditiis",
                                            },
                                            Distribution: sdk.String("aliquam"),
                                            GpgKey: sdk.String("vero"),
                                            URI: sdk.String("https://paltry-mosque.com"),
                                        },
                                        Goo: &shared.OSPolicyResourceRepositoryResourceGooRepository{
                                            Name: sdk.String("Mrs. Georgia Skiles"),
                                            URL: sdk.String("eius"),
                                        },
                                        Yum: &shared.OSPolicyResourceRepositoryResourceYumRepository{
                                            BaseURL: sdk.String("ipsa"),
                                            DisplayName: sdk.String("quas"),
                                            GpgKeys: []string{
                                                "iusto",
                                                "laborum",
                                            },
                                            ID: sdk.String("742d8449-6cbd-4eec-b6b9-9bc63562ebfd"),
                                        },
                                        Zypper: &shared.OSPolicyResourceRepositoryResourceZypperRepository{
                                            BaseURL: sdk.String("delectus"),
                                            DisplayName: sdk.String("enim"),
                                            GpgKeys: []string{
                                                "porro",
                                                "dolores",
                                            },
                                            ID: sdk.String("94c060b0-6a12-4877-a4ee-f6d0c6d6ed9c"),
                                        },
                                    },
                                },
                                shared.OSPolicyResource{
                                    Exec: &shared.OSPolicyResourceExecResource{
                                        Enforce: &shared.OSPolicyResourceExecResourceExec{
                                            Args: []string{
                                                "nesciunt",
                                                "temporibus",
                                            },
                                            File: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("temporibus"),
                                                    Generation: sdk.String("eum"),
                                                    Object: sdk.String("non"),
                                                },
                                                LocalPath: sdk.String("ut"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("nostrum"),
                                                    URI: sdk.String("http://bleak-forever.com"),
                                                },
                                            },
                                            Interpreter: shared.OSPolicyResourceExecResourceExecInterpreterEnumShell.ToPointer(),
                                            OutputFilePath: sdk.String("dolorum"),
                                            Script: sdk.String("blanditiis"),
                                        },
                                        Validate: &shared.OSPolicyResourceExecResourceExec{
                                            Args: []string{
                                                "deleniti",
                                                "dignissimos",
                                                "doloremque",
                                                "quibusdam",
                                            },
                                            File: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("adipisci"),
                                                    Generation: sdk.String("minus"),
                                                    Object: sdk.String("veniam"),
                                                },
                                                LocalPath: sdk.String("id"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("architecto"),
                                                    URI: sdk.String("https://other-shred.biz"),
                                                },
                                            },
                                            Interpreter: shared.OSPolicyResourceExecResourceExecInterpreterEnumNone.ToPointer(),
                                            OutputFilePath: sdk.String("fugit"),
                                            Script: sdk.String("quisquam"),
                                        },
                                    },
                                    File: &shared.OSPolicyResourceFileResource{
                                        Content: sdk.String("odio"),
                                        File: &shared.OSPolicyResourceFile{
                                            AllowInsecure: sdk.Bool(false),
                                            Gcs: &shared.OSPolicyResourceFileGcs{
                                                Bucket: sdk.String("quidem"),
                                                Generation: sdk.String("iure"),
                                                Object: sdk.String("aliquid"),
                                            },
                                            LocalPath: sdk.String("culpa"),
                                            Remote: &shared.OSPolicyResourceFileRemote{
                                                Sha256Checksum: sdk.String("illo"),
                                                URI: sdk.String("https://dry-arena.net"),
                                            },
                                        },
                                        Path: sdk.String("dignissimos"),
                                        Permissions: sdk.String("non"),
                                        State: shared.OSPolicyResourceFileResourceStateEnumContentsMatch.ToPointer(),
                                    },
                                    ID: sdk.String("f5b67198-90f4-42a4-bb43-8d85b260591d"),
                                    Pkg: &shared.OSPolicyResourcePackageResource{
                                        Apt: &shared.OSPolicyResourcePackageResourceAPT{
                                            Name: sdk.String("Rhonda Hammes"),
                                        },
                                        Deb: &shared.OSPolicyResourcePackageResourceDeb{
                                            PullDeps: sdk.Bool(false),
                                            Source: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("eligendi"),
                                                    Generation: sdk.String("consequuntur"),
                                                    Object: sdk.String("quae"),
                                                },
                                                LocalPath: sdk.String("veniam"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("sint"),
                                                    URI: sdk.String("https://next-selection.biz"),
                                                },
                                            },
                                        },
                                        DesiredState: shared.OSPolicyResourcePackageResourceDesiredStateEnumRemoved.ToPointer(),
                                        Googet: &shared.OSPolicyResourcePackageResourceGooGet{
                                            Name: sdk.String("Ella Koch DVM"),
                                        },
                                        Msi: &shared.OSPolicyResourcePackageResourceMSI{
                                            Properties: []string{
                                                "corporis",
                                            },
                                            Source: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("consequuntur"),
                                                    Generation: sdk.String("odio"),
                                                    Object: sdk.String("suscipit"),
                                                },
                                                LocalPath: sdk.String("quis"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("nobis"),
                                                    URI: sdk.String("http://swift-grocery.com"),
                                                },
                                            },
                                        },
                                        Rpm: &shared.OSPolicyResourcePackageResourceRPM{
                                            PullDeps: sdk.Bool(false),
                                            Source: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("delectus"),
                                                    Generation: sdk.String("nobis"),
                                                    Object: sdk.String("possimus"),
                                                },
                                                LocalPath: sdk.String("laborum"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("optio"),
                                                    URI: sdk.String("https://busy-warlord.com"),
                                                },
                                            },
                                        },
                                        Yum: &shared.OSPolicyResourcePackageResourceYUM{
                                            Name: sdk.String("Christina Bode"),
                                        },
                                        Zypper: &shared.OSPolicyResourcePackageResourceZypper{
                                            Name: sdk.String("Russell Collier"),
                                        },
                                    },
                                    Repository: &shared.OSPolicyResourceRepositoryResource{
                                        Apt: &shared.OSPolicyResourceRepositoryResourceAptRepository{
                                            ArchiveType: shared.OSPolicyResourceRepositoryResourceAptRepositoryArchiveTypeEnumDebSrc.ToPointer(),
                                            Components: []string{
                                                "earum",
                                                "consequuntur",
                                                "enim",
                                            },
                                            Distribution: sdk.String("minus"),
                                            GpgKey: sdk.String("quibusdam"),
                                            URI: sdk.String("http://timely-belly.name"),
                                        },
                                        Goo: &shared.OSPolicyResourceRepositoryResourceGooRepository{
                                            Name: sdk.String("Andy Hegmann"),
                                            URL: sdk.String("magnam"),
                                        },
                                        Yum: &shared.OSPolicyResourceRepositoryResourceYumRepository{
                                            BaseURL: sdk.String("adipisci"),
                                            DisplayName: sdk.String("natus"),
                                            GpgKeys: []string{
                                                "velit",
                                                "sint",
                                                "eos",
                                                "nisi",
                                            },
                                            ID: sdk.String("6cbd95f7-aa2b-4241-9369-5d1e6698fcc4"),
                                        },
                                        Zypper: &shared.OSPolicyResourceRepositoryResourceZypperRepository{
                                            BaseURL: sdk.String("veniam"),
                                            DisplayName: sdk.String("perspiciatis"),
                                            GpgKeys: []string{
                                                "dolores",
                                                "dicta",
                                            },
                                            ID: sdk.String("7c297767-6334-4254-838b-fb5971e98190"),
                                        },
                                    },
                                },
                            },
                        },
                        shared.OSPolicyResourceGroup{
                            InventoryFilters: []shared.OSPolicyInventoryFilter{
                                shared.OSPolicyInventoryFilter{
                                    OsShortName: sdk.String("ullam"),
                                    OsVersion: sdk.String("molestiae"),
                                },
                                shared.OSPolicyInventoryFilter{
                                    OsShortName: sdk.String("adipisci"),
                                    OsVersion: sdk.String("totam"),
                                },
                            },
                            OsFilter: &shared.OSPolicyOSFilter{
                                OsShortName: sdk.String("perspiciatis"),
                                OsVersion: sdk.String("optio"),
                            },
                            Resources: []shared.OSPolicyResource{
                                shared.OSPolicyResource{
                                    Exec: &shared.OSPolicyResourceExecResource{
                                        Enforce: &shared.OSPolicyResourceExecResourceExec{
                                            Args: []string{
                                                "nam",
                                                "id",
                                                "cumque",
                                                "in",
                                            },
                                            File: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("a"),
                                                    Generation: sdk.String("quibusdam"),
                                                    Object: sdk.String("culpa"),
                                                },
                                                LocalPath: sdk.String("dolor"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("occaecati"),
                                                    URI: sdk.String("http://outlandish-dumbwaiter.org"),
                                                },
                                            },
                                            Interpreter: shared.OSPolicyResourceExecResourceExecInterpreterEnumNone.ToPointer(),
                                            OutputFilePath: sdk.String("laboriosam"),
                                            Script: sdk.String("soluta"),
                                        },
                                        Validate: &shared.OSPolicyResourceExecResourceExec{
                                            Args: []string{
                                                "magni",
                                                "mollitia",
                                                "officiis",
                                                "aliquam",
                                            },
                                            File: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("quas"),
                                                    Generation: sdk.String("aut"),
                                                    Object: sdk.String("autem"),
                                                },
                                                LocalPath: sdk.String("dolorem"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("explicabo"),
                                                    URI: sdk.String("https://pastel-motorcar.biz"),
                                                },
                                            },
                                            Interpreter: shared.OSPolicyResourceExecResourceExecInterpreterEnumNone.ToPointer(),
                                            OutputFilePath: sdk.String("libero"),
                                            Script: sdk.String("iure"),
                                        },
                                    },
                                    File: &shared.OSPolicyResourceFileResource{
                                        Content: sdk.String("voluptatibus"),
                                        File: &shared.OSPolicyResourceFile{
                                            AllowInsecure: sdk.Bool(false),
                                            Gcs: &shared.OSPolicyResourceFileGcs{
                                                Bucket: sdk.String("id"),
                                                Generation: sdk.String("qui"),
                                                Object: sdk.String("explicabo"),
                                            },
                                            LocalPath: sdk.String("accusantium"),
                                            Remote: &shared.OSPolicyResourceFileRemote{
                                                Sha256Checksum: sdk.String("eum"),
                                                URI: sdk.String("http://impeccable-mining.name"),
                                            },
                                        },
                                        Path: sdk.String("explicabo"),
                                        Permissions: sdk.String("totam"),
                                        State: shared.OSPolicyResourceFileResourceStateEnumPresent.ToPointer(),
                                    },
                                    ID: sdk.String("53cb1000-6bef-4492-9ec2-053b749366ac"),
                                    Pkg: &shared.OSPolicyResourcePackageResource{
                                        Apt: &shared.OSPolicyResourcePackageResourceAPT{
                                            Name: sdk.String("Dr. Conrad Upton"),
                                        },
                                        Deb: &shared.OSPolicyResourcePackageResourceDeb{
                                            PullDeps: sdk.Bool(false),
                                            Source: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("libero"),
                                                    Generation: sdk.String("sapiente"),
                                                    Object: sdk.String("veritatis"),
                                                },
                                                LocalPath: sdk.String("provident"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("veniam"),
                                                    URI: sdk.String("https://mean-slaw.biz"),
                                                },
                                            },
                                        },
                                        DesiredState: shared.OSPolicyResourcePackageResourceDesiredStateEnumDesiredStateUnspecified.ToPointer(),
                                        Googet: &shared.OSPolicyResourcePackageResourceGooGet{
                                            Name: sdk.String("Richard Dietrich"),
                                        },
                                        Msi: &shared.OSPolicyResourcePackageResourceMSI{
                                            Properties: []string{
                                                "saepe",
                                                "nobis",
                                                "est",
                                                "quia",
                                            },
                                            Source: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("natus"),
                                                    Generation: sdk.String("molestiae"),
                                                    Object: sdk.String("facilis"),
                                                },
                                                LocalPath: sdk.String("earum"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("ipsum"),
                                                    URI: sdk.String("https://offensive-address.net"),
                                                },
                                            },
                                        },
                                        Rpm: &shared.OSPolicyResourcePackageResourceRPM{
                                            PullDeps: sdk.Bool(false),
                                            Source: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("nobis"),
                                                    Generation: sdk.String("numquam"),
                                                    Object: sdk.String("consequatur"),
                                                },
                                                LocalPath: sdk.String("temporibus"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("doloribus"),
                                                    URI: sdk.String("https://impartial-lawn.org"),
                                                },
                                            },
                                        },
                                        Yum: &shared.OSPolicyResourcePackageResourceYUM{
                                            Name: sdk.String("Maurice Dibbert II"),
                                        },
                                        Zypper: &shared.OSPolicyResourcePackageResourceZypper{
                                            Name: sdk.String("Randolph Ernser PhD"),
                                        },
                                    },
                                    Repository: &shared.OSPolicyResourceRepositoryResource{
                                        Apt: &shared.OSPolicyResourceRepositoryResourceAptRepository{
                                            ArchiveType: shared.OSPolicyResourceRepositoryResourceAptRepositoryArchiveTypeEnumArchiveTypeUnspecified.ToPointer(),
                                            Components: []string{
                                                "quia",
                                                "reiciendis",
                                                "modi",
                                            },
                                            Distribution: sdk.String("doloribus"),
                                            GpgKey: sdk.String("et"),
                                            URI: sdk.String("http://leading-vibraphone.net"),
                                        },
                                        Goo: &shared.OSPolicyResourceRepositoryResourceGooRepository{
                                            Name: sdk.String("Tricia Barrows"),
                                            URL: sdk.String("beatae"),
                                        },
                                        Yum: &shared.OSPolicyResourceRepositoryResourceYumRepository{
                                            BaseURL: sdk.String("delectus"),
                                            DisplayName: sdk.String("deleniti"),
                                            GpgKeys: []string{
                                                "inventore",
                                            },
                                            ID: sdk.String("7978d0ac-ca77-4aeb-bb70-21a52046b64e"),
                                        },
                                        Zypper: &shared.OSPolicyResourceRepositoryResourceZypperRepository{
                                            BaseURL: sdk.String("unde"),
                                            DisplayName: sdk.String("excepturi"),
                                            GpgKeys: []string{
                                                "facilis",
                                                "doloremque",
                                                "officiis",
                                                "nisi",
                                            },
                                            ID: sdk.String("7e094fdf-ed55-440e-b53a-34a1b8fe9973"),
                                        },
                                    },
                                },
                                shared.OSPolicyResource{
                                    Exec: &shared.OSPolicyResourceExecResource{
                                        Enforce: &shared.OSPolicyResourceExecResourceExec{
                                            Args: []string{
                                                "fuga",
                                            },
                                            File: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("nulla"),
                                                    Generation: sdk.String("cumque"),
                                                    Object: sdk.String("aperiam"),
                                                },
                                                LocalPath: sdk.String("ad"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("fugiat"),
                                                    URI: sdk.String("https://glittering-postage.org"),
                                                },
                                            },
                                            Interpreter: shared.OSPolicyResourceExecResourceExecInterpreterEnumInterpreterUnspecified.ToPointer(),
                                            OutputFilePath: sdk.String("illum"),
                                            Script: sdk.String("delectus"),
                                        },
                                        Validate: &shared.OSPolicyResourceExecResourceExec{
                                            Args: []string{
                                                "voluptate",
                                                "perferendis",
                                                "maiores",
                                            },
                                            File: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("harum"),
                                                    Generation: sdk.String("ratione"),
                                                    Object: sdk.String("molestias"),
                                                },
                                                LocalPath: sdk.String("odio"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("non"),
                                                    URI: sdk.String("http://noxious-admission.org"),
                                                },
                                            },
                                            Interpreter: shared.OSPolicyResourceExecResourceExecInterpreterEnumInterpreterUnspecified.ToPointer(),
                                            OutputFilePath: sdk.String("dolorem"),
                                            Script: sdk.String("ex"),
                                        },
                                    },
                                    File: &shared.OSPolicyResourceFileResource{
                                        Content: sdk.String("quis"),
                                        File: &shared.OSPolicyResourceFile{
                                            AllowInsecure: sdk.Bool(false),
                                            Gcs: &shared.OSPolicyResourceFileGcs{
                                                Bucket: sdk.String("eum"),
                                                Generation: sdk.String("et"),
                                                Object: sdk.String("officiis"),
                                            },
                                            LocalPath: sdk.String("quo"),
                                            Remote: &shared.OSPolicyResourceFileRemote{
                                                Sha256Checksum: sdk.String("culpa"),
                                                URI: sdk.String("http://infatuated-toilet.org"),
                                            },
                                        },
                                        Path: sdk.String("praesentium"),
                                        Permissions: sdk.String("iste"),
                                        State: shared.OSPolicyResourceFileResourceStateEnumPresent.ToPointer(),
                                    },
                                    ID: sdk.String("51bd76ee-eb51-48c4-9a1f-ad35512f06d4"),
                                    Pkg: &shared.OSPolicyResourcePackageResource{
                                        Apt: &shared.OSPolicyResourcePackageResourceAPT{
                                            Name: sdk.String("Bill Reichert"),
                                        },
                                        Deb: &shared.OSPolicyResourcePackageResourceDeb{
                                            PullDeps: sdk.Bool(false),
                                            Source: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("sapiente"),
                                                    Generation: sdk.String("alias"),
                                                    Object: sdk.String("doloribus"),
                                                },
                                                LocalPath: sdk.String("nemo"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("dolore"),
                                                    URI: sdk.String("https://gregarious-hatchling.name"),
                                                },
                                            },
                                        },
                                        DesiredState: shared.OSPolicyResourcePackageResourceDesiredStateEnumRemoved.ToPointer(),
                                        Googet: &shared.OSPolicyResourcePackageResourceGooGet{
                                            Name: sdk.String("Eva Daniel"),
                                        },
                                        Msi: &shared.OSPolicyResourcePackageResourceMSI{
                                            Properties: []string{
                                                "voluptatem",
                                            },
                                            Source: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("officia"),
                                                    Generation: sdk.String("architecto"),
                                                    Object: sdk.String("quibusdam"),
                                                },
                                                LocalPath: sdk.String("autem"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("voluptates"),
                                                    URI: sdk.String("https://official-disguise.biz"),
                                                },
                                            },
                                        },
                                        Rpm: &shared.OSPolicyResourcePackageResourceRPM{
                                            PullDeps: sdk.Bool(false),
                                            Source: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("aliquam"),
                                                    Generation: sdk.String("ea"),
                                                    Object: sdk.String("aliquam"),
                                                },
                                                LocalPath: sdk.String("corporis"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("at"),
                                                    URI: sdk.String("http://elated-afternoon.name"),
                                                },
                                            },
                                        },
                                        Yum: &shared.OSPolicyResourcePackageResourceYUM{
                                            Name: sdk.String("Kristie Quitzon"),
                                        },
                                        Zypper: &shared.OSPolicyResourcePackageResourceZypper{
                                            Name: sdk.String("Erma Runolfsson"),
                                        },
                                    },
                                    Repository: &shared.OSPolicyResourceRepositoryResource{
                                        Apt: &shared.OSPolicyResourceRepositoryResourceAptRepository{
                                            ArchiveType: shared.OSPolicyResourceRepositoryResourceAptRepositoryArchiveTypeEnumDebSrc.ToPointer(),
                                            Components: []string{
                                                "quod",
                                                "facilis",
                                            },
                                            Distribution: sdk.String("doloremque"),
                                            GpgKey: sdk.String("illo"),
                                            URI: sdk.String("https://unlawful-erection.com"),
                                        },
                                        Goo: &shared.OSPolicyResourceRepositoryResourceGooRepository{
                                            Name: sdk.String("Clyde Collier"),
                                            URL: sdk.String("eius"),
                                        },
                                        Yum: &shared.OSPolicyResourceRepositoryResourceYumRepository{
                                            BaseURL: sdk.String("ad"),
                                            DisplayName: sdk.String("mollitia"),
                                            GpgKeys: []string{
                                                "quos",
                                                "explicabo",
                                                "distinctio",
                                                "praesentium",
                                            },
                                            ID: sdk.String("5f8bc2ca-ba8d-4a41-a7dd-597ff4711aa1"),
                                        },
                                        Zypper: &shared.OSPolicyResourceRepositoryResourceZypperRepository{
                                            BaseURL: sdk.String("distinctio"),
                                            DisplayName: sdk.String("porro"),
                                            GpgKeys: []string{
                                                "numquam",
                                                "rerum",
                                            },
                                            ID: sdk.String("86cecc74-f77b-4484-8bd6-a6f0441d2c3b"),
                                        },
                                    },
                                },
                                shared.OSPolicyResource{
                                    Exec: &shared.OSPolicyResourceExecResource{
                                        Enforce: &shared.OSPolicyResourceExecResourceExec{
                                            Args: []string{
                                                "sit",
                                                "laudantium",
                                                "sit",
                                            },
                                            File: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("perspiciatis"),
                                                    Generation: sdk.String("quaerat"),
                                                    Object: sdk.String("nesciunt"),
                                                },
                                                LocalPath: sdk.String("molestiae"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("adipisci"),
                                                    URI: sdk.String("https://awful-ginger.com"),
                                                },
                                            },
                                            Interpreter: shared.OSPolicyResourceExecResourceExecInterpreterEnumNone.ToPointer(),
                                            OutputFilePath: sdk.String("ullam"),
                                            Script: sdk.String("excepturi"),
                                        },
                                        Validate: &shared.OSPolicyResourceExecResourceExec{
                                            Args: []string{
                                                "voluptates",
                                                "rerum",
                                                "cum",
                                            },
                                            File: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("est"),
                                                    Generation: sdk.String("fugiat"),
                                                    Object: sdk.String("perferendis"),
                                                },
                                                LocalPath: sdk.String("qui"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("tenetur"),
                                                    URI: sdk.String("http://golden-marriage.info"),
                                                },
                                            },
                                            Interpreter: shared.OSPolicyResourceExecResourceExecInterpreterEnumShell.ToPointer(),
                                            OutputFilePath: sdk.String("quod"),
                                            Script: sdk.String("a"),
                                        },
                                    },
                                    File: &shared.OSPolicyResourceFileResource{
                                        Content: sdk.String("et"),
                                        File: &shared.OSPolicyResourceFile{
                                            AllowInsecure: sdk.Bool(false),
                                            Gcs: &shared.OSPolicyResourceFileGcs{
                                                Bucket: sdk.String("ipsam"),
                                                Generation: sdk.String("eos"),
                                                Object: sdk.String("exercitationem"),
                                            },
                                            LocalPath: sdk.String("minima"),
                                            Remote: &shared.OSPolicyResourceFileRemote{
                                                Sha256Checksum: sdk.String("laudantium"),
                                                URI: sdk.String("https://reasonable-precision.name"),
                                            },
                                        },
                                        Path: sdk.String("corporis"),
                                        Permissions: sdk.String("nam"),
                                        State: shared.OSPolicyResourceFileResourceStateEnumContentsMatch.ToPointer(),
                                    },
                                    ID: sdk.String("6cd02756-c354-4aa4-b2b4-7e1763c5208c"),
                                    Pkg: &shared.OSPolicyResourcePackageResource{
                                        Apt: &shared.OSPolicyResourcePackageResourceAPT{
                                            Name: sdk.String("Cindy Walter"),
                                        },
                                        Deb: &shared.OSPolicyResourcePackageResourceDeb{
                                            PullDeps: sdk.Bool(false),
                                            Source: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("sit"),
                                                    Generation: sdk.String("magni"),
                                                    Object: sdk.String("repellendus"),
                                                },
                                                LocalPath: sdk.String("quas"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("ratione"),
                                                    URI: sdk.String("https://acceptable-soy.biz"),
                                                },
                                            },
                                        },
                                        DesiredState: shared.OSPolicyResourcePackageResourceDesiredStateEnumInstalled.ToPointer(),
                                        Googet: &shared.OSPolicyResourcePackageResourceGooGet{
                                            Name: sdk.String("Gerardo Gislason"),
                                        },
                                        Msi: &shared.OSPolicyResourcePackageResourceMSI{
                                            Properties: []string{
                                                "ea",
                                                "iusto",
                                                "dolore",
                                            },
                                            Source: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("repudiandae"),
                                                    Generation: sdk.String("recusandae"),
                                                    Object: sdk.String("ipsam"),
                                                },
                                                LocalPath: sdk.String("quisquam"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("delectus"),
                                                    URI: sdk.String("https://close-lox.org"),
                                                },
                                            },
                                        },
                                        Rpm: &shared.OSPolicyResourcePackageResourceRPM{
                                            PullDeps: sdk.Bool(false),
                                            Source: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("assumenda"),
                                                    Generation: sdk.String("optio"),
                                                    Object: sdk.String("esse"),
                                                },
                                                LocalPath: sdk.String("a"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("quam"),
                                                    URI: sdk.String("https://live-tutu.biz"),
                                                },
                                            },
                                        },
                                        Yum: &shared.OSPolicyResourcePackageResourceYUM{
                                            Name: sdk.String("Delia Bartell"),
                                        },
                                        Zypper: &shared.OSPolicyResourcePackageResourceZypper{
                                            Name: sdk.String("Freda Frami"),
                                        },
                                    },
                                    Repository: &shared.OSPolicyResourceRepositoryResource{
                                        Apt: &shared.OSPolicyResourceRepositoryResourceAptRepository{
                                            ArchiveType: shared.OSPolicyResourceRepositoryResourceAptRepositoryArchiveTypeEnumArchiveTypeUnspecified.ToPointer(),
                                            Components: []string{
                                                "ullam",
                                                "vel",
                                                "reprehenderit",
                                                "aut",
                                            },
                                            Distribution: sdk.String("recusandae"),
                                            GpgKey: sdk.String("voluptatibus"),
                                            URI: sdk.String("http://competent-preservation.org"),
                                        },
                                        Goo: &shared.OSPolicyResourceRepositoryResourceGooRepository{
                                            Name: sdk.String("Johnnie Moore DDS"),
                                            URL: sdk.String("eligendi"),
                                        },
                                        Yum: &shared.OSPolicyResourceRepositoryResourceYumRepository{
                                            BaseURL: sdk.String("veniam"),
                                            DisplayName: sdk.String("aperiam"),
                                            GpgKeys: []string{
                                                "repellat",
                                            },
                                            ID: sdk.String("6c39bcd0-a629-40f9-97f3-85189ad7ef80"),
                                        },
                                        Zypper: &shared.OSPolicyResourceRepositoryResourceZypperRepository{
                                            BaseURL: sdk.String("reprehenderit"),
                                            DisplayName: sdk.String("animi"),
                                            GpgKeys: []string{
                                                "eveniet",
                                                "quae",
                                                "adipisci",
                                            },
                                            ID: sdk.String("f33ca79f-b9de-4403-aba2-6fd368ba9216"),
                                        },
                                    },
                                },
                                shared.OSPolicyResource{
                                    Exec: &shared.OSPolicyResourceExecResource{
                                        Enforce: &shared.OSPolicyResourceExecResourceExec{
                                            Args: []string{
                                                "quo",
                                                "facilis",
                                                "magnam",
                                            },
                                            File: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("dicta"),
                                                    Generation: sdk.String("nostrum"),
                                                    Object: sdk.String("molestias"),
                                                },
                                                LocalPath: sdk.String("neque"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("quis"),
                                                    URI: sdk.String("https://jubilant-darn.info"),
                                                },
                                            },
                                            Interpreter: shared.OSPolicyResourceExecResourceExecInterpreterEnumNone.ToPointer(),
                                            OutputFilePath: sdk.String("beatae"),
                                            Script: sdk.String("dignissimos"),
                                        },
                                        Validate: &shared.OSPolicyResourceExecResourceExec{
                                            Args: []string{
                                                "ratione",
                                            },
                                            File: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("veritatis"),
                                                    Generation: sdk.String("amet"),
                                                    Object: sdk.String("sequi"),
                                                },
                                                LocalPath: sdk.String("recusandae"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("fugiat"),
                                                    URI: sdk.String("https://alarming-disembodiment.info"),
                                                },
                                            },
                                            Interpreter: shared.OSPolicyResourceExecResourceExecInterpreterEnumShell.ToPointer(),
                                            OutputFilePath: sdk.String("quod"),
                                            Script: sdk.String("nemo"),
                                        },
                                    },
                                    File: &shared.OSPolicyResourceFileResource{
                                        Content: sdk.String("architecto"),
                                        File: &shared.OSPolicyResourceFile{
                                            AllowInsecure: sdk.Bool(false),
                                            Gcs: &shared.OSPolicyResourceFileGcs{
                                                Bucket: sdk.String("vel"),
                                                Generation: sdk.String("amet"),
                                                Object: sdk.String("facilis"),
                                            },
                                            LocalPath: sdk.String("libero"),
                                            Remote: &shared.OSPolicyResourceFileRemote{
                                                Sha256Checksum: sdk.String("maxime"),
                                                URI: sdk.String("https://fake-min.biz"),
                                            },
                                        },
                                        Path: sdk.String("dolores"),
                                        Permissions: sdk.String("reprehenderit"),
                                        State: shared.OSPolicyResourceFileResourceStateEnumContentsMatch.ToPointer(),
                                    },
                                    ID: sdk.String("42c22c55-3504-495c-9dbb-3c57c1e4981e"),
                                    Pkg: &shared.OSPolicyResourcePackageResource{
                                        Apt: &shared.OSPolicyResourcePackageResourceAPT{
                                            Name: sdk.String("Omar Murazik"),
                                        },
                                        Deb: &shared.OSPolicyResourcePackageResourceDeb{
                                            PullDeps: sdk.Bool(false),
                                            Source: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("quam"),
                                                    Generation: sdk.String("assumenda"),
                                                    Object: sdk.String("temporibus"),
                                                },
                                                LocalPath: sdk.String("porro"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("quasi"),
                                                    URI: sdk.String("https://blond-chainstay.org"),
                                                },
                                            },
                                        },
                                        DesiredState: shared.OSPolicyResourcePackageResourceDesiredStateEnumRemoved.ToPointer(),
                                        Googet: &shared.OSPolicyResourcePackageResourceGooGet{
                                            Name: sdk.String("Rogelio Keebler"),
                                        },
                                        Msi: &shared.OSPolicyResourcePackageResourceMSI{
                                            Properties: []string{
                                                "porro",
                                                "impedit",
                                                "veniam",
                                                "magnam",
                                            },
                                            Source: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("iure"),
                                                    Generation: sdk.String("natus"),
                                                    Object: sdk.String("nulla"),
                                                },
                                                LocalPath: sdk.String("quaerat"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("aut"),
                                                    URI: sdk.String("http://glorious-solidity.org"),
                                                },
                                            },
                                        },
                                        Rpm: &shared.OSPolicyResourcePackageResourceRPM{
                                            PullDeps: sdk.Bool(false),
                                            Source: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("est"),
                                                    Generation: sdk.String("esse"),
                                                    Object: sdk.String("iste"),
                                                },
                                                LocalPath: sdk.String("ex"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("odit"),
                                                    URI: sdk.String("http://heartfelt-recommendation.org"),
                                                },
                                            },
                                        },
                                        Yum: &shared.OSPolicyResourcePackageResourceYUM{
                                            Name: sdk.String("Miss Russell Price"),
                                        },
                                        Zypper: &shared.OSPolicyResourcePackageResourceZypper{
                                            Name: sdk.String("Kyle Cremin MD"),
                                        },
                                    },
                                    Repository: &shared.OSPolicyResourceRepositoryResource{
                                        Apt: &shared.OSPolicyResourceRepositoryResourceAptRepository{
                                            ArchiveType: shared.OSPolicyResourceRepositoryResourceAptRepositoryArchiveTypeEnumDebSrc.ToPointer(),
                                            Components: []string{
                                                "illo",
                                            },
                                            Distribution: sdk.String("perferendis"),
                                            GpgKey: sdk.String("eveniet"),
                                            URI: sdk.String("https://reasonable-parent.net"),
                                        },
                                        Goo: &shared.OSPolicyResourceRepositoryResourceGooRepository{
                                            Name: sdk.String("Mrs. Jana Monahan"),
                                            URL: sdk.String("quis"),
                                        },
                                        Yum: &shared.OSPolicyResourceRepositoryResourceYumRepository{
                                            BaseURL: sdk.String("quos"),
                                            DisplayName: sdk.String("ea"),
                                            GpgKeys: []string{
                                                "dicta",
                                                "quas",
                                                "delectus",
                                                "sint",
                                            },
                                            ID: sdk.String("f97a4bfa-d2bf-47d6-bca8-4ad99b41d612"),
                                        },
                                        Zypper: &shared.OSPolicyResourceRepositoryResourceZypperRepository{
                                            BaseURL: sdk.String("numquam"),
                                            DisplayName: sdk.String("velit"),
                                            GpgKeys: []string{
                                                "nesciunt",
                                                "sunt",
                                            },
                                            ID: sdk.String("870cf68b-03ad-4421-bd43-d1f0cb0a0003"),
                                        },
                                    },
                                },
                            },
                        },
                    },
                },
                shared.OSPolicy{
                    AllowNoResourceGroupMatch: sdk.Bool(false),
                    Description: sdk.String("earum"),
                    ID: sdk.String("b22d9b3a-70d9-44fa-a741-c57d1fedc205"),
                    Mode: shared.OSPolicyModeEnumModeUnspecified.ToPointer(),
                    ResourceGroups: []shared.OSPolicyResourceGroup{
                        shared.OSPolicyResourceGroup{
                            InventoryFilters: []shared.OSPolicyInventoryFilter{
                                shared.OSPolicyInventoryFilter{
                                    OsShortName: sdk.String("quos"),
                                    OsVersion: sdk.String("pariatur"),
                                },
                            },
                            OsFilter: &shared.OSPolicyOSFilter{
                                OsShortName: sdk.String("quo"),
                                OsVersion: sdk.String("sequi"),
                            },
                            Resources: []shared.OSPolicyResource{
                                shared.OSPolicyResource{
                                    Exec: &shared.OSPolicyResourceExecResource{
                                        Enforce: &shared.OSPolicyResourceExecResourceExec{
                                            Args: []string{
                                                "ab",
                                                "praesentium",
                                                "nostrum",
                                                "labore",
                                            },
                                            File: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("iusto"),
                                                    Generation: sdk.String("sunt"),
                                                    Object: sdk.String("tenetur"),
                                                },
                                                LocalPath: sdk.String("occaecati"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("necessitatibus"),
                                                    URI: sdk.String("https://impressionable-outrun.com"),
                                                },
                                            },
                                            Interpreter: shared.OSPolicyResourceExecResourceExecInterpreterEnumNone.ToPointer(),
                                            OutputFilePath: sdk.String("ex"),
                                            Script: sdk.String("error"),
                                        },
                                        Validate: &shared.OSPolicyResourceExecResourceExec{
                                            Args: []string{
                                                "tempore",
                                                "saepe",
                                                "adipisci",
                                            },
                                            File: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("dolore"),
                                                    Generation: sdk.String("tempora"),
                                                    Object: sdk.String("quaerat"),
                                                },
                                                LocalPath: sdk.String("debitis"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("similique"),
                                                    URI: sdk.String("https://low-reboot.biz"),
                                                },
                                            },
                                            Interpreter: shared.OSPolicyResourceExecResourceExecInterpreterEnumShell.ToPointer(),
                                            OutputFilePath: sdk.String("fugit"),
                                            Script: sdk.String("totam"),
                                        },
                                    },
                                    File: &shared.OSPolicyResourceFileResource{
                                        Content: sdk.String("dignissimos"),
                                        File: &shared.OSPolicyResourceFile{
                                            AllowInsecure: sdk.Bool(false),
                                            Gcs: &shared.OSPolicyResourceFileGcs{
                                                Bucket: sdk.String("corporis"),
                                                Generation: sdk.String("quo"),
                                                Object: sdk.String("nisi"),
                                            },
                                            LocalPath: sdk.String("quo"),
                                            Remote: &shared.OSPolicyResourceFileRemote{
                                                Sha256Checksum: sdk.String("inventore"),
                                                URI: sdk.String("https://unfinished-geology.com"),
                                            },
                                        },
                                        Path: sdk.String("nisi"),
                                        Permissions: sdk.String("quibusdam"),
                                        State: shared.OSPolicyResourceFileResourceStateEnumDesiredStateUnspecified.ToPointer(),
                                    },
                                    ID: sdk.String("7d2a9c87-ae50-4c16-a61a-1d9136a7e8d5"),
                                    Pkg: &shared.OSPolicyResourcePackageResource{
                                        Apt: &shared.OSPolicyResourcePackageResourceAPT{
                                            Name: sdk.String("Tina Borer"),
                                        },
                                        Deb: &shared.OSPolicyResourcePackageResourceDeb{
                                            PullDeps: sdk.Bool(false),
                                            Source: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("velit"),
                                                    Generation: sdk.String("asperiores"),
                                                    Object: sdk.String("commodi"),
                                                },
                                                LocalPath: sdk.String("voluptas"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("quos"),
                                                    URI: sdk.String("http://glamorous-chairlift.net"),
                                                },
                                            },
                                        },
                                        DesiredState: shared.OSPolicyResourcePackageResourceDesiredStateEnumRemoved.ToPointer(),
                                        Googet: &shared.OSPolicyResourcePackageResourceGooGet{
                                            Name: sdk.String("Stacey Haag"),
                                        },
                                        Msi: &shared.OSPolicyResourcePackageResourceMSI{
                                            Properties: []string{
                                                "asperiores",
                                                "doloremque",
                                                "id",
                                            },
                                            Source: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("veniam"),
                                                    Generation: sdk.String("ea"),
                                                    Object: sdk.String("placeat"),
                                                },
                                                LocalPath: sdk.String("necessitatibus"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("harum"),
                                                    URI: sdk.String("https://plush-submarine.net"),
                                                },
                                            },
                                        },
                                        Rpm: &shared.OSPolicyResourcePackageResourceRPM{
                                            PullDeps: sdk.Bool(false),
                                            Source: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("consequuntur"),
                                                    Generation: sdk.String("omnis"),
                                                    Object: sdk.String("maxime"),
                                                },
                                                LocalPath: sdk.String("officia"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("iusto"),
                                                    URI: sdk.String("https://bewitched-mainland.com"),
                                                },
                                            },
                                        },
                                        Yum: &shared.OSPolicyResourcePackageResourceYUM{
                                            Name: sdk.String("Perry Hills"),
                                        },
                                        Zypper: &shared.OSPolicyResourcePackageResourceZypper{
                                            Name: sdk.String("Vicki Kertzmann"),
                                        },
                                    },
                                    Repository: &shared.OSPolicyResourceRepositoryResource{
                                        Apt: &shared.OSPolicyResourceRepositoryResourceAptRepository{
                                            ArchiveType: shared.OSPolicyResourceRepositoryResourceAptRepositoryArchiveTypeEnumArchiveTypeUnspecified.ToPointer(),
                                            Components: []string{
                                                "ipsa",
                                            },
                                            Distribution: sdk.String("nam"),
                                            GpgKey: sdk.String("minima"),
                                            URI: sdk.String("http://honored-eyeball.com"),
                                        },
                                        Goo: &shared.OSPolicyResourceRepositoryResourceGooRepository{
                                            Name: sdk.String("Carmen Nicolas"),
                                            URL: sdk.String("amet"),
                                        },
                                        Yum: &shared.OSPolicyResourceRepositoryResourceYumRepository{
                                            BaseURL: sdk.String("deleniti"),
                                            DisplayName: sdk.String("exercitationem"),
                                            GpgKeys: []string{
                                                "fugit",
                                            },
                                            ID: sdk.String("ab2521b9-f2e0-4724-a7b8-a40bc05fab0d"),
                                        },
                                        Zypper: &shared.OSPolicyResourceRepositoryResourceZypperRepository{
                                            BaseURL: sdk.String("nisi"),
                                            DisplayName: sdk.String("quis"),
                                            GpgKeys: []string{
                                                "itaque",
                                            },
                                            ID: sdk.String("df22a94d-20ec-490e-a41d-1f465e85156f"),
                                        },
                                    },
                                },
                                shared.OSPolicyResource{
                                    Exec: &shared.OSPolicyResourceExecResource{
                                        Enforce: &shared.OSPolicyResourceExecResourceExec{
                                            Args: []string{
                                                "a",
                                                "molestiae",
                                                "amet",
                                                "voluptatibus",
                                            },
                                            File: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("temporibus"),
                                                    Generation: sdk.String("tenetur"),
                                                    Object: sdk.String("nostrum"),
                                                },
                                                LocalPath: sdk.String("tempora"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("maiores"),
                                                    URI: sdk.String("https://thin-finer.org"),
                                                },
                                            },
                                            Interpreter: shared.OSPolicyResourceExecResourceExecInterpreterEnumShell.ToPointer(),
                                            OutputFilePath: sdk.String("sint"),
                                            Script: sdk.String("minima"),
                                        },
                                        Validate: &shared.OSPolicyResourceExecResourceExec{
                                            Args: []string{
                                                "sequi",
                                                "sequi",
                                            },
                                            File: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("occaecati"),
                                                    Generation: sdk.String("voluptatum"),
                                                    Object: sdk.String("illum"),
                                                },
                                                LocalPath: sdk.String("laborum"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("sapiente"),
                                                    URI: sdk.String("https://faithful-clipper.net"),
                                                },
                                            },
                                            Interpreter: shared.OSPolicyResourceExecResourceExecInterpreterEnumShell.ToPointer(),
                                            OutputFilePath: sdk.String("assumenda"),
                                            Script: sdk.String("iure"),
                                        },
                                    },
                                    File: &shared.OSPolicyResourceFileResource{
                                        Content: sdk.String("dolorem"),
                                        File: &shared.OSPolicyResourceFile{
                                            AllowInsecure: sdk.Bool(false),
                                            Gcs: &shared.OSPolicyResourceFileGcs{
                                                Bucket: sdk.String("neque"),
                                                Generation: sdk.String("laudantium"),
                                                Object: sdk.String("quos"),
                                            },
                                            LocalPath: sdk.String("saepe"),
                                            Remote: &shared.OSPolicyResourceFileRemote{
                                                Sha256Checksum: sdk.String("incidunt"),
                                                URI: sdk.String("https://minor-advance.biz"),
                                            },
                                        },
                                        Path: sdk.String("error"),
                                        Permissions: sdk.String("necessitatibus"),
                                        State: shared.OSPolicyResourceFileResourceStateEnumAbsent.ToPointer(),
                                    },
                                    ID: sdk.String("5f9b18a2-44fd-4619-839d-acd38ed0dc67"),
                                    Pkg: &shared.OSPolicyResourcePackageResource{
                                        Apt: &shared.OSPolicyResourcePackageResourceAPT{
                                            Name: sdk.String("Dianna Ruecker"),
                                        },
                                        Deb: &shared.OSPolicyResourcePackageResourceDeb{
                                            PullDeps: sdk.Bool(false),
                                            Source: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("quae"),
                                                    Generation: sdk.String("vero"),
                                                    Object: sdk.String("amet"),
                                                },
                                                LocalPath: sdk.String("culpa"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("asperiores"),
                                                    URI: sdk.String("http://gleaming-neurobiologist.com"),
                                                },
                                            },
                                        },
                                        DesiredState: shared.OSPolicyResourcePackageResourceDesiredStateEnumDesiredStateUnspecified.ToPointer(),
                                        Googet: &shared.OSPolicyResourcePackageResourceGooGet{
                                            Name: sdk.String("Eduardo Bayer DDS"),
                                        },
                                        Msi: &shared.OSPolicyResourcePackageResourceMSI{
                                            Properties: []string{
                                                "natus",
                                                "aperiam",
                                            },
                                            Source: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("dicta"),
                                                    Generation: sdk.String("repellat"),
                                                    Object: sdk.String("dolores"),
                                                },
                                                LocalPath: sdk.String("harum"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("quibusdam"),
                                                    URI: sdk.String("https://optimal-signature.name"),
                                                },
                                            },
                                        },
                                        Rpm: &shared.OSPolicyResourcePackageResourceRPM{
                                            PullDeps: sdk.Bool(false),
                                            Source: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("id"),
                                                    Generation: sdk.String("neque"),
                                                    Object: sdk.String("dolores"),
                                                },
                                                LocalPath: sdk.String("vel"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("ipsum"),
                                                    URI: sdk.String("https://trained-pancreas.info"),
                                                },
                                            },
                                        },
                                        Yum: &shared.OSPolicyResourcePackageResourceYUM{
                                            Name: sdk.String("Arnold Rogahn"),
                                        },
                                        Zypper: &shared.OSPolicyResourcePackageResourceZypper{
                                            Name: sdk.String("Lori Purdy"),
                                        },
                                    },
                                    Repository: &shared.OSPolicyResourceRepositoryResource{
                                        Apt: &shared.OSPolicyResourceRepositoryResourceAptRepository{
                                            ArchiveType: shared.OSPolicyResourceRepositoryResourceAptRepositoryArchiveTypeEnumArchiveTypeUnspecified.ToPointer(),
                                            Components: []string{
                                                "provident",
                                                "incidunt",
                                                "maiores",
                                            },
                                            Distribution: sdk.String("ea"),
                                            GpgKey: sdk.String("modi"),
                                            URI: sdk.String("http://horrible-health.biz"),
                                        },
                                        Goo: &shared.OSPolicyResourceRepositoryResourceGooRepository{
                                            Name: sdk.String("Miss Willard Welch"),
                                            URL: sdk.String("rem"),
                                        },
                                        Yum: &shared.OSPolicyResourceRepositoryResourceYumRepository{
                                            BaseURL: sdk.String("quod"),
                                            DisplayName: sdk.String("commodi"),
                                            GpgKeys: []string{
                                                "beatae",
                                                "placeat",
                                                "molestiae",
                                            },
                                            ID: sdk.String("32d9fbaf-9476-4a2a-a8dc-c50c8a3512c7"),
                                        },
                                        Zypper: &shared.OSPolicyResourceRepositoryResourceZypperRepository{
                                            BaseURL: sdk.String("dolorem"),
                                            DisplayName: sdk.String("voluptate"),
                                            GpgKeys: []string{
                                                "dolore",
                                                "rem",
                                                "provident",
                                            },
                                            ID: sdk.String("30750a00-e966-4ec7-b6d4-3194398c783c"),
                                        },
                                    },
                                },
                                shared.OSPolicyResource{
                                    Exec: &shared.OSPolicyResourceExecResource{
                                        Enforce: &shared.OSPolicyResourceExecResourceExec{
                                            Args: []string{
                                                "quia",
                                                "dolor",
                                                "cupiditate",
                                            },
                                            File: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("praesentium"),
                                                    Generation: sdk.String("accusamus"),
                                                    Object: sdk.String("fugiat"),
                                                },
                                                LocalPath: sdk.String("ipsum"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("pariatur"),
                                                    URI: sdk.String("http://pretty-reverse.info"),
                                                },
                                            },
                                            Interpreter: shared.OSPolicyResourceExecResourceExecInterpreterEnumPowershell.ToPointer(),
                                            OutputFilePath: sdk.String("est"),
                                            Script: sdk.String("non"),
                                        },
                                        Validate: &shared.OSPolicyResourceExecResourceExec{
                                            Args: []string{
                                                "veniam",
                                                "minus",
                                                "similique",
                                                "corrupti",
                                            },
                                            File: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("aliquid"),
                                                    Generation: sdk.String("aliquam"),
                                                    Object: sdk.String("error"),
                                                },
                                                LocalPath: sdk.String("animi"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("ducimus"),
                                                    URI: sdk.String("http://sociable-warlord.org"),
                                                },
                                            },
                                            Interpreter: shared.OSPolicyResourceExecResourceExecInterpreterEnumNone.ToPointer(),
                                            OutputFilePath: sdk.String("pariatur"),
                                            Script: sdk.String("commodi"),
                                        },
                                    },
                                    File: &shared.OSPolicyResourceFileResource{
                                        Content: sdk.String("iste"),
                                        File: &shared.OSPolicyResourceFile{
                                            AllowInsecure: sdk.Bool(false),
                                            Gcs: &shared.OSPolicyResourceFileGcs{
                                                Bucket: sdk.String("corrupti"),
                                                Generation: sdk.String("iste"),
                                                Object: sdk.String("distinctio"),
                                            },
                                            LocalPath: sdk.String("in"),
                                            Remote: &shared.OSPolicyResourceFileRemote{
                                                Sha256Checksum: sdk.String("consequuntur"),
                                                URI: sdk.String("http://haunting-ego.biz"),
                                            },
                                        },
                                        Path: sdk.String("quae"),
                                        Permissions: sdk.String("ipsa"),
                                        State: shared.OSPolicyResourceFileResourceStateEnumPresent.ToPointer(),
                                    },
                                    ID: sdk.String("7d19ea83-d492-4ed1-8b8a-2c1954545e95"),
                                    Pkg: &shared.OSPolicyResourcePackageResource{
                                        Apt: &shared.OSPolicyResourcePackageResourceAPT{
                                            Name: sdk.String("Mable Runte IV"),
                                        },
                                        Deb: &shared.OSPolicyResourcePackageResourceDeb{
                                            PullDeps: sdk.Bool(false),
                                            Source: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("minima"),
                                                    Generation: sdk.String("eveniet"),
                                                    Object: sdk.String("est"),
                                                },
                                                LocalPath: sdk.String("magnam"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("unde"),
                                                    URI: sdk.String("http://clear-rosemary.info"),
                                                },
                                            },
                                        },
                                        DesiredState: shared.OSPolicyResourcePackageResourceDesiredStateEnumRemoved.ToPointer(),
                                        Googet: &shared.OSPolicyResourcePackageResourceGooGet{
                                            Name: sdk.String("Lillian Murray"),
                                        },
                                        Msi: &shared.OSPolicyResourcePackageResourceMSI{
                                            Properties: []string{
                                                "laborum",
                                                "animi",
                                                "quam",
                                                "totam",
                                            },
                                            Source: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("incidunt"),
                                                    Generation: sdk.String("similique"),
                                                    Object: sdk.String("nobis"),
                                                },
                                                LocalPath: sdk.String("culpa"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("ratione"),
                                                    URI: sdk.String("https://creepy-cuff-link.com"),
                                                },
                                            },
                                        },
                                        Rpm: &shared.OSPolicyResourcePackageResourceRPM{
                                            PullDeps: sdk.Bool(false),
                                            Source: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("voluptates"),
                                                    Generation: sdk.String("nulla"),
                                                    Object: sdk.String("tenetur"),
                                                },
                                                LocalPath: sdk.String("dignissimos"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("dolor"),
                                                    URI: sdk.String("https://candid-bun.net"),
                                                },
                                            },
                                        },
                                        Yum: &shared.OSPolicyResourcePackageResourceYUM{
                                            Name: sdk.String("Evelyn Hartmann"),
                                        },
                                        Zypper: &shared.OSPolicyResourcePackageResourceZypper{
                                            Name: sdk.String("Susie Stiedemann"),
                                        },
                                    },
                                    Repository: &shared.OSPolicyResourceRepositoryResource{
                                        Apt: &shared.OSPolicyResourceRepositoryResourceAptRepository{
                                            ArchiveType: shared.OSPolicyResourceRepositoryResourceAptRepositoryArchiveTypeEnumDebSrc.ToPointer(),
                                            Components: []string{
                                                "voluptas",
                                                "veniam",
                                            },
                                            Distribution: sdk.String("voluptatem"),
                                            GpgKey: sdk.String("quam"),
                                            URI: sdk.String("http://concerned-biscuit.net"),
                                        },
                                        Goo: &shared.OSPolicyResourceRepositoryResourceGooRepository{
                                            Name: sdk.String("Margie Wyman"),
                                            URL: sdk.String("iusto"),
                                        },
                                        Yum: &shared.OSPolicyResourceRepositoryResourceYumRepository{
                                            BaseURL: sdk.String("adipisci"),
                                            DisplayName: sdk.String("provident"),
                                            GpgKeys: []string{
                                                "nostrum",
                                                "eum",
                                            },
                                            ID: sdk.String("4c20a071-1a96-41d2-8a7d-bb8f532d892c"),
                                        },
                                        Zypper: &shared.OSPolicyResourceRepositoryResourceZypperRepository{
                                            BaseURL: sdk.String("earum"),
                                            DisplayName: sdk.String("iusto"),
                                            GpgKeys: []string{
                                                "sunt",
                                                "dolores",
                                                "placeat",
                                            },
                                            ID: sdk.String("b512c878-240b-4f54-8f88-f8f1bf0bc8e1"),
                                        },
                                    },
                                },
                                shared.OSPolicyResource{
                                    Exec: &shared.OSPolicyResourceExecResource{
                                        Enforce: &shared.OSPolicyResourceExecResourceExec{
                                            Args: []string{
                                                "dolores",
                                                "perferendis",
                                                "eum",
                                                "nulla",
                                            },
                                            File: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("corporis"),
                                                    Generation: sdk.String("pariatur"),
                                                    Object: sdk.String("quas"),
                                                },
                                                LocalPath: sdk.String("sequi"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("illo"),
                                                    URI: sdk.String("https://apprehensive-assault.name"),
                                                },
                                            },
                                            Interpreter: shared.OSPolicyResourceExecResourceExecInterpreterEnumInterpreterUnspecified.ToPointer(),
                                            OutputFilePath: sdk.String("voluptatem"),
                                            Script: sdk.String("provident"),
                                        },
                                        Validate: &shared.OSPolicyResourceExecResourceExec{
                                            Args: []string{
                                                "delectus",
                                            },
                                            File: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("voluptas"),
                                                    Generation: sdk.String("nihil"),
                                                    Object: sdk.String("quae"),
                                                },
                                                LocalPath: sdk.String("voluptas"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("laboriosam"),
                                                    URI: sdk.String("http://essential-woodshed.biz"),
                                                },
                                            },
                                            Interpreter: shared.OSPolicyResourceExecResourceExecInterpreterEnumShell.ToPointer(),
                                            OutputFilePath: sdk.String("ex"),
                                            Script: sdk.String("quos"),
                                        },
                                    },
                                    File: &shared.OSPolicyResourceFileResource{
                                        Content: sdk.String("dicta"),
                                        File: &shared.OSPolicyResourceFile{
                                            AllowInsecure: sdk.Bool(false),
                                            Gcs: &shared.OSPolicyResourceFileGcs{
                                                Bucket: sdk.String("minus"),
                                                Generation: sdk.String("exercitationem"),
                                                Object: sdk.String("molestiae"),
                                            },
                                            LocalPath: sdk.String("iure"),
                                            Remote: &shared.OSPolicyResourceFileRemote{
                                                Sha256Checksum: sdk.String("blanditiis"),
                                                URI: sdk.String("https://soft-tube.info"),
                                            },
                                        },
                                        Path: sdk.String("quaerat"),
                                        Permissions: sdk.String("explicabo"),
                                        State: shared.OSPolicyResourceFileResourceStateEnumPresent.ToPointer(),
                                    },
                                    ID: sdk.String("09a215e0-8601-4489-a5f6-3e3af3dd9dda"),
                                    Pkg: &shared.OSPolicyResourcePackageResource{
                                        Apt: &shared.OSPolicyResourcePackageResourceAPT{
                                            Name: sdk.String("Thelma Swift"),
                                        },
                                        Deb: &shared.OSPolicyResourcePackageResourceDeb{
                                            PullDeps: sdk.Bool(false),
                                            Source: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("vel"),
                                                    Generation: sdk.String("non"),
                                                    Object: sdk.String("incidunt"),
                                                },
                                                LocalPath: sdk.String("praesentium"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("ipsum"),
                                                    URI: sdk.String("https://excited-popularity.info"),
                                                },
                                            },
                                        },
                                        DesiredState: shared.OSPolicyResourcePackageResourceDesiredStateEnumInstalled.ToPointer(),
                                        Googet: &shared.OSPolicyResourcePackageResourceGooGet{
                                            Name: sdk.String("Willard Turcotte"),
                                        },
                                        Msi: &shared.OSPolicyResourcePackageResourceMSI{
                                            Properties: []string{
                                                "neque",
                                                "in",
                                                "debitis",
                                                "quaerat",
                                            },
                                            Source: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("nostrum"),
                                                    Generation: sdk.String("libero"),
                                                    Object: sdk.String("totam"),
                                                },
                                                LocalPath: sdk.String("omnis"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("veniam"),
                                                    URI: sdk.String("http://sturdy-embryo.com"),
                                                },
                                            },
                                        },
                                        Rpm: &shared.OSPolicyResourcePackageResourceRPM{
                                            PullDeps: sdk.Bool(false),
                                            Source: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("ipsum"),
                                                    Generation: sdk.String("recusandae"),
                                                    Object: sdk.String("inventore"),
                                                },
                                                LocalPath: sdk.String("ipsum"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("error"),
                                                    URI: sdk.String("http://loyal-cocktail.biz"),
                                                },
                                            },
                                        },
                                        Yum: &shared.OSPolicyResourcePackageResourceYUM{
                                            Name: sdk.String("Ms. Cynthia McClure"),
                                        },
                                        Zypper: &shared.OSPolicyResourcePackageResourceZypper{
                                            Name: sdk.String("Philip Hauck"),
                                        },
                                    },
                                    Repository: &shared.OSPolicyResourceRepositoryResource{
                                        Apt: &shared.OSPolicyResourceRepositoryResourceAptRepository{
                                            ArchiveType: shared.OSPolicyResourceRepositoryResourceAptRepositoryArchiveTypeEnumArchiveTypeUnspecified.ToPointer(),
                                            Components: []string{
                                                "sed",
                                                "harum",
                                                "vero",
                                            },
                                            Distribution: sdk.String("nihil"),
                                            GpgKey: sdk.String("velit"),
                                            URI: sdk.String("http://weird-action.com"),
                                        },
                                        Goo: &shared.OSPolicyResourceRepositoryResourceGooRepository{
                                            Name: sdk.String("Elaine Marquardt"),
                                            URL: sdk.String("vel"),
                                        },
                                        Yum: &shared.OSPolicyResourceRepositoryResourceYumRepository{
                                            BaseURL: sdk.String("delectus"),
                                            DisplayName: sdk.String("modi"),
                                            GpgKeys: []string{
                                                "quidem",
                                                "consequuntur",
                                                "eaque",
                                            },
                                            ID: sdk.String("fe5d911c-bfe7-449c-af45-a27f69e2c9e6"),
                                        },
                                        Zypper: &shared.OSPolicyResourceRepositoryResourceZypperRepository{
                                            BaseURL: sdk.String("temporibus"),
                                            DisplayName: sdk.String("quae"),
                                            GpgKeys: []string{
                                                "debitis",
                                            },
                                            ID: sdk.String("9db3ad4c-6b03-4108-99c3-37473082b94f"),
                                        },
                                    },
                                },
                            },
                        },
                        shared.OSPolicyResourceGroup{
                            InventoryFilters: []shared.OSPolicyInventoryFilter{
                                shared.OSPolicyInventoryFilter{
                                    OsShortName: sdk.String("mollitia"),
                                    OsVersion: sdk.String("distinctio"),
                                },
                            },
                            OsFilter: &shared.OSPolicyOSFilter{
                                OsShortName: sdk.String("dicta"),
                                OsVersion: sdk.String("earum"),
                            },
                            Resources: []shared.OSPolicyResource{
                                shared.OSPolicyResource{
                                    Exec: &shared.OSPolicyResourceExecResource{
                                        Enforce: &shared.OSPolicyResourceExecResourceExec{
                                            Args: []string{
                                                "eum",
                                                "iusto",
                                            },
                                            File: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("veritatis"),
                                                    Generation: sdk.String("voluptates"),
                                                    Object: sdk.String("unde"),
                                                },
                                                LocalPath: sdk.String("impedit"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("amet"),
                                                    URI: sdk.String("http://impartial-cookie.biz"),
                                                },
                                            },
                                            Interpreter: shared.OSPolicyResourceExecResourceExecInterpreterEnumInterpreterUnspecified.ToPointer(),
                                            OutputFilePath: sdk.String("officia"),
                                            Script: sdk.String("tempora"),
                                        },
                                        Validate: &shared.OSPolicyResourceExecResourceExec{
                                            Args: []string{
                                                "molestiae",
                                                "architecto",
                                            },
                                            File: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("aliquam"),
                                                    Generation: sdk.String("ipsum"),
                                                    Object: sdk.String("nihil"),
                                                },
                                                LocalPath: sdk.String("blanditiis"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("natus"),
                                                    URI: sdk.String("https://vigilant-administration.org"),
                                                },
                                            },
                                            Interpreter: shared.OSPolicyResourceExecResourceExecInterpreterEnumShell.ToPointer(),
                                            OutputFilePath: sdk.String("error"),
                                            Script: sdk.String("dicta"),
                                        },
                                    },
                                    File: &shared.OSPolicyResourceFileResource{
                                        Content: sdk.String("nemo"),
                                        File: &shared.OSPolicyResourceFile{
                                            AllowInsecure: sdk.Bool(false),
                                            Gcs: &shared.OSPolicyResourceFileGcs{
                                                Bucket: sdk.String("unde"),
                                                Generation: sdk.String("numquam"),
                                                Object: sdk.String("temporibus"),
                                            },
                                            LocalPath: sdk.String("omnis"),
                                            Remote: &shared.OSPolicyResourceFileRemote{
                                                Sha256Checksum: sdk.String("amet"),
                                                URI: sdk.String("https://livid-discrimination.net"),
                                            },
                                        },
                                        Path: sdk.String("ipsa"),
                                        Permissions: sdk.String("dolores"),
                                        State: shared.OSPolicyResourceFileResourceStateEnumPresent.ToPointer(),
                                    },
                                    ID: sdk.String("2fe3b4b4-db8b-4778-abb6-e1d2cf502baf"),
                                    Pkg: &shared.OSPolicyResourcePackageResource{
                                        Apt: &shared.OSPolicyResourcePackageResourceAPT{
                                            Name: sdk.String("Roy Romaguera"),
                                        },
                                        Deb: &shared.OSPolicyResourcePackageResourceDeb{
                                            PullDeps: sdk.Bool(false),
                                            Source: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("aliquam"),
                                                    Generation: sdk.String("aliquid"),
                                                    Object: sdk.String("adipisci"),
                                                },
                                                LocalPath: sdk.String("ipsam"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("fugiat"),
                                                    URI: sdk.String("http://unwieldy-honeydew.info"),
                                                },
                                            },
                                        },
                                        DesiredState: shared.OSPolicyResourcePackageResourceDesiredStateEnumRemoved.ToPointer(),
                                        Googet: &shared.OSPolicyResourcePackageResourceGooGet{
                                            Name: sdk.String("James Dare"),
                                        },
                                        Msi: &shared.OSPolicyResourcePackageResourceMSI{
                                            Properties: []string{
                                                "accusamus",
                                            },
                                            Source: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("sint"),
                                                    Generation: sdk.String("enim"),
                                                    Object: sdk.String("veritatis"),
                                                },
                                                LocalPath: sdk.String("mollitia"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("veritatis"),
                                                    URI: sdk.String("https://detailed-aggression.org"),
                                                },
                                            },
                                        },
                                        Rpm: &shared.OSPolicyResourcePackageResourceRPM{
                                            PullDeps: sdk.Bool(false),
                                            Source: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("fugiat"),
                                                    Generation: sdk.String("deserunt"),
                                                    Object: sdk.String("sint"),
                                                },
                                                LocalPath: sdk.String("eum"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("commodi"),
                                                    URI: sdk.String("http://measly-mouth.net"),
                                                },
                                            },
                                        },
                                        Yum: &shared.OSPolicyResourcePackageResourceYUM{
                                            Name: sdk.String("Candice Koepp"),
                                        },
                                        Zypper: &shared.OSPolicyResourcePackageResourceZypper{
                                            Name: sdk.String("Mrs. Josephine Tromp"),
                                        },
                                    },
                                    Repository: &shared.OSPolicyResourceRepositoryResource{
                                        Apt: &shared.OSPolicyResourceRepositoryResourceAptRepository{
                                            ArchiveType: shared.OSPolicyResourceRepositoryResourceAptRepositoryArchiveTypeEnumArchiveTypeUnspecified.ToPointer(),
                                            Components: []string{
                                                "dolorum",
                                            },
                                            Distribution: sdk.String("vel"),
                                            GpgKey: sdk.String("rerum"),
                                            URI: sdk.String("https://nifty-championship.biz"),
                                        },
                                        Goo: &shared.OSPolicyResourceRepositoryResourceGooRepository{
                                            Name: sdk.String("Theodore Hettinger"),
                                            URL: sdk.String("tempora"),
                                        },
                                        Yum: &shared.OSPolicyResourceRepositoryResourceYumRepository{
                                            BaseURL: sdk.String("corrupti"),
                                            DisplayName: sdk.String("ducimus"),
                                            GpgKeys: []string{
                                                "veniam",
                                                "cumque",
                                                "praesentium",
                                                "ut",
                                            },
                                            ID: sdk.String("3836b86b-3cdf-4641-9b04-49f9df13f4ee"),
                                        },
                                        Zypper: &shared.OSPolicyResourceRepositoryResourceZypperRepository{
                                            BaseURL: sdk.String("nulla"),
                                            DisplayName: sdk.String("distinctio"),
                                            GpgKeys: []string{
                                                "in",
                                                "deleniti",
                                                "tempore",
                                                "reiciendis",
                                            },
                                            ID: sdk.String("60682589-4ea7-463d-9c72-795b785148d6"),
                                        },
                                    },
                                },
                                shared.OSPolicyResource{
                                    Exec: &shared.OSPolicyResourceExecResource{
                                        Enforce: &shared.OSPolicyResourceExecResourceExec{
                                            Args: []string{
                                                "minima",
                                                "ut",
                                                "cupiditate",
                                                "debitis",
                                            },
                                            File: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("minima"),
                                                    Generation: sdk.String("vel"),
                                                    Object: sdk.String("consectetur"),
                                                },
                                                LocalPath: sdk.String("nostrum"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("tempore"),
                                                    URI: sdk.String("http://dramatic-pyridine.net"),
                                                },
                                            },
                                            Interpreter: shared.OSPolicyResourceExecResourceExecInterpreterEnumInterpreterUnspecified.ToPointer(),
                                            OutputFilePath: sdk.String("maiores"),
                                            Script: sdk.String("unde"),
                                        },
                                        Validate: &shared.OSPolicyResourceExecResourceExec{
                                            Args: []string{
                                                "voluptatem",
                                                "placeat",
                                            },
                                            File: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("dolore"),
                                                    Generation: sdk.String("magni"),
                                                    Object: sdk.String("voluptatibus"),
                                                },
                                                LocalPath: sdk.String("quod"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("provident"),
                                                    URI: sdk.String("https://flippant-lipstick.biz"),
                                                },
                                            },
                                            Interpreter: shared.OSPolicyResourceExecResourceExecInterpreterEnumNone.ToPointer(),
                                            OutputFilePath: sdk.String("sunt"),
                                            Script: sdk.String("consequuntur"),
                                        },
                                    },
                                    File: &shared.OSPolicyResourceFileResource{
                                        Content: sdk.String("veniam"),
                                        File: &shared.OSPolicyResourceFile{
                                            AllowInsecure: sdk.Bool(false),
                                            Gcs: &shared.OSPolicyResourceFileGcs{
                                                Bucket: sdk.String("voluptates"),
                                                Generation: sdk.String("in"),
                                                Object: sdk.String("minima"),
                                            },
                                            LocalPath: sdk.String("expedita"),
                                            Remote: &shared.OSPolicyResourceFileRemote{
                                                Sha256Checksum: sdk.String("ducimus"),
                                                URI: sdk.String("https://infantile-armoire.info"),
                                            },
                                        },
                                        Path: sdk.String("nostrum"),
                                        Permissions: sdk.String("cumque"),
                                        State: shared.OSPolicyResourceFileResourceStateEnumDesiredStateUnspecified.ToPointer(),
                                    },
                                    ID: sdk.String("efa6f93b-90a1-4b8c-95be-1254b739f4fe"),
                                    Pkg: &shared.OSPolicyResourcePackageResource{
                                        Apt: &shared.OSPolicyResourcePackageResourceAPT{
                                            Name: sdk.String("Mr. Maureen Christiansen"),
                                        },
                                        Deb: &shared.OSPolicyResourcePackageResourceDeb{
                                            PullDeps: sdk.Bool(false),
                                            Source: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("dicta"),
                                                    Generation: sdk.String("delectus"),
                                                    Object: sdk.String("voluptas"),
                                                },
                                                LocalPath: sdk.String("exercitationem"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("quis"),
                                                    URI: sdk.String("https://snoopy-muscatel.name"),
                                                },
                                            },
                                        },
                                        DesiredState: shared.OSPolicyResourcePackageResourceDesiredStateEnumRemoved.ToPointer(),
                                        Googet: &shared.OSPolicyResourcePackageResourceGooGet{
                                            Name: sdk.String("Irene Connelly"),
                                        },
                                        Msi: &shared.OSPolicyResourcePackageResourceMSI{
                                            Properties: []string{
                                                "optio",
                                                "accusantium",
                                                "earum",
                                            },
                                            Source: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("excepturi"),
                                                    Generation: sdk.String("numquam"),
                                                    Object: sdk.String("voluptatem"),
                                                },
                                                LocalPath: sdk.String("voluptatum"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("ducimus"),
                                                    URI: sdk.String("https://our-silo.name"),
                                                },
                                            },
                                        },
                                        Rpm: &shared.OSPolicyResourcePackageResourceRPM{
                                            PullDeps: sdk.Bool(false),
                                            Source: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("deserunt"),
                                                    Generation: sdk.String("recusandae"),
                                                    Object: sdk.String("doloremque"),
                                                },
                                                LocalPath: sdk.String("magnam"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("quia"),
                                                    URI: sdk.String("https://teeming-importance.net"),
                                                },
                                            },
                                        },
                                        Yum: &shared.OSPolicyResourcePackageResourceYUM{
                                            Name: sdk.String("Carlton Schowalter"),
                                        },
                                        Zypper: &shared.OSPolicyResourcePackageResourceZypper{
                                            Name: sdk.String("Bethany Ondricka DDS"),
                                        },
                                    },
                                    Repository: &shared.OSPolicyResourceRepositoryResource{
                                        Apt: &shared.OSPolicyResourceRepositoryResourceAptRepository{
                                            ArchiveType: shared.OSPolicyResourceRepositoryResourceAptRepositoryArchiveTypeEnumDebSrc.ToPointer(),
                                            Components: []string{
                                                "sint",
                                                "saepe",
                                                "illo",
                                                "minima",
                                            },
                                            Distribution: sdk.String("nulla"),
                                            GpgKey: sdk.String("reiciendis"),
                                            URI: sdk.String("https://awkward-cross.name"),
                                        },
                                        Goo: &shared.OSPolicyResourceRepositoryResourceGooRepository{
                                            Name: sdk.String("Caroline Wyman"),
                                            URL: sdk.String("deleniti"),
                                        },
                                        Yum: &shared.OSPolicyResourceRepositoryResourceYumRepository{
                                            BaseURL: sdk.String("dolor"),
                                            DisplayName: sdk.String("ab"),
                                            GpgKeys: []string{
                                                "quos",
                                                "sequi",
                                                "fugiat",
                                            },
                                            ID: sdk.String("42e54a85-4665-497c-9023-3c1471d51aaa"),
                                        },
                                        Zypper: &shared.OSPolicyResourceRepositoryResourceZypperRepository{
                                            BaseURL: sdk.String("autem"),
                                            DisplayName: sdk.String("illum"),
                                            GpgKeys: []string{
                                                "hic",
                                                "nemo",
                                                "laborum",
                                                "quidem",
                                            },
                                            ID: sdk.String("d6487c5f-c2b8-462a-80be-f69e10015763"),
                                        },
                                    },
                                },
                                shared.OSPolicyResource{
                                    Exec: &shared.OSPolicyResourceExecResource{
                                        Enforce: &shared.OSPolicyResourceExecResourceExec{
                                            Args: []string{
                                                "libero",
                                            },
                                            File: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("quibusdam"),
                                                    Generation: sdk.String("fuga"),
                                                    Object: sdk.String("nihil"),
                                                },
                                                LocalPath: sdk.String("similique"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("repellat"),
                                                    URI: sdk.String("https://understated-standardization.name"),
                                                },
                                            },
                                            Interpreter: shared.OSPolicyResourceExecResourceExecInterpreterEnumNone.ToPointer(),
                                            OutputFilePath: sdk.String("similique"),
                                            Script: sdk.String("dolor"),
                                        },
                                        Validate: &shared.OSPolicyResourceExecResourceExec{
                                            Args: []string{
                                                "dolorum",
                                                "aliquam",
                                            },
                                            File: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("beatae"),
                                                    Generation: sdk.String("explicabo"),
                                                    Object: sdk.String("nesciunt"),
                                                },
                                                LocalPath: sdk.String("corrupti"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("officiis"),
                                                    URI: sdk.String("http://powerful-icecream.biz"),
                                                },
                                            },
                                            Interpreter: shared.OSPolicyResourceExecResourceExecInterpreterEnumNone.ToPointer(),
                                            OutputFilePath: sdk.String("fuga"),
                                            Script: sdk.String("quisquam"),
                                        },
                                    },
                                    File: &shared.OSPolicyResourceFileResource{
                                        Content: sdk.String("qui"),
                                        File: &shared.OSPolicyResourceFile{
                                            AllowInsecure: sdk.Bool(false),
                                            Gcs: &shared.OSPolicyResourceFileGcs{
                                                Bucket: sdk.String("suscipit"),
                                                Generation: sdk.String("officia"),
                                                Object: sdk.String("saepe"),
                                            },
                                            LocalPath: sdk.String("ipsum"),
                                            Remote: &shared.OSPolicyResourceFileRemote{
                                                Sha256Checksum: sdk.String("ratione"),
                                                URI: sdk.String("https://vigilant-wildlife.name"),
                                            },
                                        },
                                        Path: sdk.String("dignissimos"),
                                        Permissions: sdk.String("dicta"),
                                        State: shared.OSPolicyResourceFileResourceStateEnumAbsent.ToPointer(),
                                    },
                                    ID: sdk.String("8f46bca1-106f-4e96-9b71-1d08cf88ec9f"),
                                    Pkg: &shared.OSPolicyResourcePackageResource{
                                        Apt: &shared.OSPolicyResourcePackageResourceAPT{
                                            Name: sdk.String("Pam Metz"),
                                        },
                                        Deb: &shared.OSPolicyResourcePackageResourceDeb{
                                            PullDeps: sdk.Bool(false),
                                            Source: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("nemo"),
                                                    Generation: sdk.String("quis"),
                                                    Object: sdk.String("doloremque"),
                                                },
                                                LocalPath: sdk.String("similique"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("eum"),
                                                    URI: sdk.String("http://immaculate-timber.net"),
                                                },
                                            },
                                        },
                                        DesiredState: shared.OSPolicyResourcePackageResourceDesiredStateEnumDesiredStateUnspecified.ToPointer(),
                                        Googet: &shared.OSPolicyResourcePackageResourceGooGet{
                                            Name: sdk.String("Thelma Roberts DDS"),
                                        },
                                        Msi: &shared.OSPolicyResourcePackageResourceMSI{
                                            Properties: []string{
                                                "laudantium",
                                                "est",
                                                "fuga",
                                                "autem",
                                            },
                                            Source: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("quis"),
                                                    Generation: sdk.String("modi"),
                                                    Object: sdk.String("consectetur"),
                                                },
                                                LocalPath: sdk.String("qui"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("officia"),
                                                    URI: sdk.String("https://medium-hammer.org"),
                                                },
                                            },
                                        },
                                        Rpm: &shared.OSPolicyResourcePackageResourceRPM{
                                            PullDeps: sdk.Bool(false),
                                            Source: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("soluta"),
                                                    Generation: sdk.String("odio"),
                                                    Object: sdk.String("eveniet"),
                                                },
                                                LocalPath: sdk.String("beatae"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("dolore"),
                                                    URI: sdk.String("https://primary-frustration.info"),
                                                },
                                            },
                                        },
                                        Yum: &shared.OSPolicyResourcePackageResourceYUM{
                                            Name: sdk.String("Laura Lindgren III"),
                                        },
                                        Zypper: &shared.OSPolicyResourcePackageResourceZypper{
                                            Name: sdk.String("Maria Mosciski Sr."),
                                        },
                                    },
                                    Repository: &shared.OSPolicyResourceRepositoryResource{
                                        Apt: &shared.OSPolicyResourceRepositoryResourceAptRepository{
                                            ArchiveType: shared.OSPolicyResourceRepositoryResourceAptRepositoryArchiveTypeEnumDeb.ToPointer(),
                                            Components: []string{
                                                "eius",
                                                "rem",
                                                "delectus",
                                            },
                                            Distribution: sdk.String("blanditiis"),
                                            GpgKey: sdk.String("laudantium"),
                                            URI: sdk.String("https://soft-sympathy.info"),
                                        },
                                        Goo: &shared.OSPolicyResourceRepositoryResourceGooRepository{
                                            Name: sdk.String("Mrs. Terrell Mayert"),
                                            URL: sdk.String("consequatur"),
                                        },
                                        Yum: &shared.OSPolicyResourceRepositoryResourceYumRepository{
                                            BaseURL: sdk.String("architecto"),
                                            DisplayName: sdk.String("dicta"),
                                            GpgKeys: []string{
                                                "ad",
                                            },
                                            ID: sdk.String("d3890816-2c6b-4eb6-8a0f-657b7d03a148"),
                                        },
                                        Zypper: &shared.OSPolicyResourceRepositoryResourceZypperRepository{
                                            BaseURL: sdk.String("aperiam"),
                                            DisplayName: sdk.String("hic"),
                                            GpgKeys: []string{
                                                "at",
                                                "repudiandae",
                                                "ipsum",
                                            },
                                            ID: sdk.String("0f069d81-0618-4d97-a152-297510da8031"),
                                        },
                                    },
                                },
                                shared.OSPolicyResource{
                                    Exec: &shared.OSPolicyResourceExecResource{
                                        Enforce: &shared.OSPolicyResourceExecResourceExec{
                                            Args: []string{
                                                "quia",
                                            },
                                            File: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("provident"),
                                                    Generation: sdk.String("fugit"),
                                                    Object: sdk.String("nobis"),
                                                },
                                                LocalPath: sdk.String("optio"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("laboriosam"),
                                                    URI: sdk.String("http://soulful-characterization.net"),
                                                },
                                            },
                                            Interpreter: shared.OSPolicyResourceExecResourceExecInterpreterEnumNone.ToPointer(),
                                            OutputFilePath: sdk.String("eaque"),
                                            Script: sdk.String("odit"),
                                        },
                                        Validate: &shared.OSPolicyResourceExecResourceExec{
                                            Args: []string{
                                                "soluta",
                                                "sint",
                                                "odio",
                                            },
                                            File: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("repudiandae"),
                                                    Generation: sdk.String("accusamus"),
                                                    Object: sdk.String("quasi"),
                                                },
                                                LocalPath: sdk.String("accusantium"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("dolores"),
                                                    URI: sdk.String("https://puzzled-cherry.org"),
                                                },
                                            },
                                            Interpreter: shared.OSPolicyResourceExecResourceExecInterpreterEnumPowershell.ToPointer(),
                                            OutputFilePath: sdk.String("neque"),
                                            Script: sdk.String("minima"),
                                        },
                                    },
                                    File: &shared.OSPolicyResourceFileResource{
                                        Content: sdk.String("tenetur"),
                                        File: &shared.OSPolicyResourceFile{
                                            AllowInsecure: sdk.Bool(false),
                                            Gcs: &shared.OSPolicyResourceFileGcs{
                                                Bucket: sdk.String("praesentium"),
                                                Generation: sdk.String("officiis"),
                                                Object: sdk.String("sit"),
                                            },
                                            LocalPath: sdk.String("quasi"),
                                            Remote: &shared.OSPolicyResourceFileRemote{
                                                Sha256Checksum: sdk.String("libero"),
                                                URI: sdk.String("https://droopy-deadline.org"),
                                            },
                                        },
                                        Path: sdk.String("similique"),
                                        Permissions: sdk.String("id"),
                                        State: shared.OSPolicyResourceFileResourceStateEnumAbsent.ToPointer(),
                                    },
                                    ID: sdk.String("45402ac1-704b-4f1c-89fc-61aae5eb5f0c"),
                                    Pkg: &shared.OSPolicyResourcePackageResource{
                                        Apt: &shared.OSPolicyResourcePackageResourceAPT{
                                            Name: sdk.String("Felicia Denesik"),
                                        },
                                        Deb: &shared.OSPolicyResourcePackageResourceDeb{
                                            PullDeps: sdk.Bool(false),
                                            Source: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("nihil"),
                                                    Generation: sdk.String("ut"),
                                                    Object: sdk.String("incidunt"),
                                                },
                                                LocalPath: sdk.String("quibusdam"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("doloremque"),
                                                    URI: sdk.String("https://ragged-caption.com"),
                                                },
                                            },
                                        },
                                        DesiredState: shared.OSPolicyResourcePackageResourceDesiredStateEnumInstalled.ToPointer(),
                                        Googet: &shared.OSPolicyResourcePackageResourceGooGet{
                                            Name: sdk.String("Genevieve Orn"),
                                        },
                                        Msi: &shared.OSPolicyResourcePackageResourceMSI{
                                            Properties: []string{
                                                "omnis",
                                                "repudiandae",
                                            },
                                            Source: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("ipsum"),
                                                    Generation: sdk.String("minus"),
                                                    Object: sdk.String("molestiae"),
                                                },
                                                LocalPath: sdk.String("illo"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("est"),
                                                    URI: sdk.String("https://dim-boatload.net"),
                                                },
                                            },
                                        },
                                        Rpm: &shared.OSPolicyResourcePackageResourceRPM{
                                            PullDeps: sdk.Bool(false),
                                            Source: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("voluptates"),
                                                    Generation: sdk.String("cumque"),
                                                    Object: sdk.String("distinctio"),
                                                },
                                                LocalPath: sdk.String("rem"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("consectetur"),
                                                    URI: sdk.String("https://dazzling-criticism.info"),
                                                },
                                            },
                                        },
                                        Yum: &shared.OSPolicyResourcePackageResourceYUM{
                                            Name: sdk.String("Hubert Trantow"),
                                        },
                                        Zypper: &shared.OSPolicyResourcePackageResourceZypper{
                                            Name: sdk.String("Simon Cormier"),
                                        },
                                    },
                                    Repository: &shared.OSPolicyResourceRepositoryResource{
                                        Apt: &shared.OSPolicyResourceRepositoryResourceAptRepository{
                                            ArchiveType: shared.OSPolicyResourceRepositoryResourceAptRepositoryArchiveTypeEnumDeb.ToPointer(),
                                            Components: []string{
                                                "ad",
                                                "aperiam",
                                            },
                                            Distribution: sdk.String("animi"),
                                            GpgKey: sdk.String("unde"),
                                            URI: sdk.String("https://infinite-paddock.biz"),
                                        },
                                        Goo: &shared.OSPolicyResourceRepositoryResourceGooRepository{
                                            Name: sdk.String("Tommy Rippin"),
                                            URL: sdk.String("nihil"),
                                        },
                                        Yum: &shared.OSPolicyResourceRepositoryResourceYumRepository{
                                            BaseURL: sdk.String("quae"),
                                            DisplayName: sdk.String("ducimus"),
                                            GpgKeys: []string{
                                                "eaque",
                                                "ex",
                                                "rerum",
                                                "magni",
                                            },
                                            ID: sdk.String("8ecc8649-2386-4f62-8969-c4cc6b78890a"),
                                        },
                                        Zypper: &shared.OSPolicyResourceRepositoryResourceZypperRepository{
                                            BaseURL: sdk.String("sequi"),
                                            DisplayName: sdk.String("sapiente"),
                                            GpgKeys: []string{
                                                "nesciunt",
                                                "optio",
                                                "corrupti",
                                                "inventore",
                                            },
                                            ID: sdk.String("da10f8c2-3df9-431d-a3ed-b51fad94acc9"),
                                        },
                                    },
                                },
                            },
                        },
                        shared.OSPolicyResourceGroup{
                            InventoryFilters: []shared.OSPolicyInventoryFilter{
                                shared.OSPolicyInventoryFilter{
                                    OsShortName: sdk.String("consectetur"),
                                    OsVersion: sdk.String("ullam"),
                                },
                                shared.OSPolicyInventoryFilter{
                                    OsShortName: sdk.String("dicta"),
                                    OsVersion: sdk.String("nesciunt"),
                                },
                            },
                            OsFilter: &shared.OSPolicyOSFilter{
                                OsShortName: sdk.String("reprehenderit"),
                                OsVersion: sdk.String("esse"),
                            },
                            Resources: []shared.OSPolicyResource{
                                shared.OSPolicyResource{
                                    Exec: &shared.OSPolicyResourceExecResource{
                                        Enforce: &shared.OSPolicyResourceExecResourceExec{
                                            Args: []string{
                                                "quibusdam",
                                                "veritatis",
                                            },
                                            File: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("ad"),
                                                    Generation: sdk.String("velit"),
                                                    Object: sdk.String("quia"),
                                                },
                                                LocalPath: sdk.String("dicta"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("nam"),
                                                    URI: sdk.String("https://ethical-commuter.net"),
                                                },
                                            },
                                            Interpreter: shared.OSPolicyResourceExecResourceExecInterpreterEnumNone.ToPointer(),
                                            OutputFilePath: sdk.String("aliquid"),
                                            Script: sdk.String("facere"),
                                        },
                                        Validate: &shared.OSPolicyResourceExecResourceExec{
                                            Args: []string{
                                                "sint",
                                                "architecto",
                                            },
                                            File: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("totam"),
                                                    Generation: sdk.String("alias"),
                                                    Object: sdk.String("hic"),
                                                },
                                                LocalPath: sdk.String("tenetur"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("iure"),
                                                    URI: sdk.String("http://understated-researcher.name"),
                                                },
                                            },
                                            Interpreter: shared.OSPolicyResourceExecResourceExecInterpreterEnumShell.ToPointer(),
                                            OutputFilePath: sdk.String("ex"),
                                            Script: sdk.String("autem"),
                                        },
                                    },
                                    File: &shared.OSPolicyResourceFileResource{
                                        Content: sdk.String("nostrum"),
                                        File: &shared.OSPolicyResourceFile{
                                            AllowInsecure: sdk.Bool(false),
                                            Gcs: &shared.OSPolicyResourceFileGcs{
                                                Bucket: sdk.String("atque"),
                                                Generation: sdk.String("saepe"),
                                                Object: sdk.String("eum"),
                                            },
                                            LocalPath: sdk.String("molestias"),
                                            Remote: &shared.OSPolicyResourceFileRemote{
                                                Sha256Checksum: sdk.String("fuga"),
                                                URI: sdk.String("http://scarce-llama.biz"),
                                            },
                                        },
                                        Path: sdk.String("non"),
                                        Permissions: sdk.String("illum"),
                                        State: shared.OSPolicyResourceFileResourceStateEnumDesiredStateUnspecified.ToPointer(),
                                    },
                                    ID: sdk.String("82dbec75-c68c-4606-9946-8ce304d8849b"),
                                    Pkg: &shared.OSPolicyResourcePackageResource{
                                        Apt: &shared.OSPolicyResourcePackageResourceAPT{
                                            Name: sdk.String("Mrs. Jaime Champlin"),
                                        },
                                        Deb: &shared.OSPolicyResourcePackageResourceDeb{
                                            PullDeps: sdk.Bool(false),
                                            Source: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("amet"),
                                                    Generation: sdk.String("ipsum"),
                                                    Object: sdk.String("nihil"),
                                                },
                                                LocalPath: sdk.String("hic"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("occaecati"),
                                                    URI: sdk.String("http://second-report.com"),
                                                },
                                            },
                                        },
                                        DesiredState: shared.OSPolicyResourcePackageResourceDesiredStateEnumRemoved.ToPointer(),
                                        Googet: &shared.OSPolicyResourcePackageResourceGooGet{
                                            Name: sdk.String("Belinda Walsh"),
                                        },
                                        Msi: &shared.OSPolicyResourcePackageResourceMSI{
                                            Properties: []string{
                                                "facere",
                                            },
                                            Source: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("libero"),
                                                    Generation: sdk.String("vitae"),
                                                    Object: sdk.String("non"),
                                                },
                                                LocalPath: sdk.String("labore"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("incidunt"),
                                                    URI: sdk.String("https://precious-overclocking.org"),
                                                },
                                            },
                                        },
                                        Rpm: &shared.OSPolicyResourcePackageResourceRPM{
                                            PullDeps: sdk.Bool(false),
                                            Source: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("reprehenderit"),
                                                    Generation: sdk.String("rem"),
                                                    Object: sdk.String("est"),
                                                },
                                                LocalPath: sdk.String("quis"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("impedit"),
                                                    URI: sdk.String("http://unnatural-smell.info"),
                                                },
                                            },
                                        },
                                        Yum: &shared.OSPolicyResourcePackageResourceYUM{
                                            Name: sdk.String("Gerard Roberts DVM"),
                                        },
                                        Zypper: &shared.OSPolicyResourcePackageResourceZypper{
                                            Name: sdk.String("Mathew Cole DVM"),
                                        },
                                    },
                                    Repository: &shared.OSPolicyResourceRepositoryResource{
                                        Apt: &shared.OSPolicyResourceRepositoryResourceAptRepository{
                                            ArchiveType: shared.OSPolicyResourceRepositoryResourceAptRepositoryArchiveTypeEnumDebSrc.ToPointer(),
                                            Components: []string{
                                                "quod",
                                            },
                                            Distribution: sdk.String("veniam"),
                                            GpgKey: sdk.String("corrupti"),
                                            URI: sdk.String("https://content-impediment.net"),
                                        },
                                        Goo: &shared.OSPolicyResourceRepositoryResourceGooRepository{
                                            Name: sdk.String("Teresa McKenzie"),
                                            URL: sdk.String("tempore"),
                                        },
                                        Yum: &shared.OSPolicyResourceRepositoryResourceYumRepository{
                                            BaseURL: sdk.String("minima"),
                                            DisplayName: sdk.String("expedita"),
                                            GpgKeys: []string{
                                                "expedita",
                                                "quaerat",
                                            },
                                            ID: sdk.String("0eef712b-7a7a-4b03-84b1-710688deebef"),
                                        },
                                        Zypper: &shared.OSPolicyResourceRepositoryResourceZypperRepository{
                                            BaseURL: sdk.String("rem"),
                                            DisplayName: sdk.String("perspiciatis"),
                                            GpgKeys: []string{
                                                "earum",
                                                "velit",
                                            },
                                            ID: sdk.String("dd0ccd33-f11b-43e4-a080-aa104186ec75"),
                                        },
                                    },
                                },
                            },
                        },
                        shared.OSPolicyResourceGroup{
                            InventoryFilters: []shared.OSPolicyInventoryFilter{
                                shared.OSPolicyInventoryFilter{
                                    OsShortName: sdk.String("officiis"),
                                    OsVersion: sdk.String("ipsa"),
                                },
                                shared.OSPolicyInventoryFilter{
                                    OsShortName: sdk.String("eos"),
                                    OsVersion: sdk.String("delectus"),
                                },
                                shared.OSPolicyInventoryFilter{
                                    OsShortName: sdk.String("dolor"),
                                    OsVersion: sdk.String("dignissimos"),
                                },
                            },
                            OsFilter: &shared.OSPolicyOSFilter{
                                OsShortName: sdk.String("doloremque"),
                                OsVersion: sdk.String("consequuntur"),
                            },
                            Resources: []shared.OSPolicyResource{
                                shared.OSPolicyResource{
                                    Exec: &shared.OSPolicyResourceExecResource{
                                        Enforce: &shared.OSPolicyResourceExecResourceExec{
                                            Args: []string{
                                                "cumque",
                                                "laudantium",
                                            },
                                            File: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("recusandae"),
                                                    Generation: sdk.String("odit"),
                                                    Object: sdk.String("fugiat"),
                                                },
                                                LocalPath: sdk.String("sequi"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("consequatur"),
                                                    URI: sdk.String("https://political-supplement.biz"),
                                                },
                                            },
                                            Interpreter: shared.OSPolicyResourceExecResourceExecInterpreterEnumInterpreterUnspecified.ToPointer(),
                                            OutputFilePath: sdk.String("ipsa"),
                                            Script: sdk.String("incidunt"),
                                        },
                                        Validate: &shared.OSPolicyResourceExecResourceExec{
                                            Args: []string{
                                                "culpa",
                                                "dolore",
                                                "eius",
                                                "iure",
                                            },
                                            File: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("alias"),
                                                    Generation: sdk.String("molestiae"),
                                                    Object: sdk.String("rerum"),
                                                },
                                                LocalPath: sdk.String("voluptatibus"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("sequi"),
                                                    URI: sdk.String("http://general-reasoning.biz"),
                                                },
                                            },
                                            Interpreter: shared.OSPolicyResourceExecResourceExecInterpreterEnumNone.ToPointer(),
                                            OutputFilePath: sdk.String("sed"),
                                            Script: sdk.String("quas"),
                                        },
                                    },
                                    File: &shared.OSPolicyResourceFileResource{
                                        Content: sdk.String("aspernatur"),
                                        File: &shared.OSPolicyResourceFile{
                                            AllowInsecure: sdk.Bool(false),
                                            Gcs: &shared.OSPolicyResourceFileGcs{
                                                Bucket: sdk.String("laudantium"),
                                                Generation: sdk.String("fugit"),
                                                Object: sdk.String("et"),
                                            },
                                            LocalPath: sdk.String("reiciendis"),
                                            Remote: &shared.OSPolicyResourceFileRemote{
                                                Sha256Checksum: sdk.String("nulla"),
                                                URI: sdk.String("https://crisp-underground.info"),
                                            },
                                        },
                                        Path: sdk.String("sint"),
                                        Permissions: sdk.String("eveniet"),
                                        State: shared.OSPolicyResourceFileResourceStateEnumPresent.ToPointer(),
                                    },
                                    ID: sdk.String("9267c71c-c8d3-4cd4-a58d-0358a82c808f"),
                                    Pkg: &shared.OSPolicyResourcePackageResource{
                                        Apt: &shared.OSPolicyResourcePackageResourceAPT{
                                            Name: sdk.String("Fred Konopelski MD"),
                                        },
                                        Deb: &shared.OSPolicyResourcePackageResourceDeb{
                                            PullDeps: sdk.Bool(false),
                                            Source: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("fugit"),
                                                    Generation: sdk.String("perferendis"),
                                                    Object: sdk.String("incidunt"),
                                                },
                                                LocalPath: sdk.String("ducimus"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("quod"),
                                                    URI: sdk.String("http://experienced-destruction.name"),
                                                },
                                            },
                                        },
                                        DesiredState: shared.OSPolicyResourcePackageResourceDesiredStateEnumRemoved.ToPointer(),
                                        Googet: &shared.OSPolicyResourcePackageResourceGooGet{
                                            Name: sdk.String("Gail Douglas"),
                                        },
                                        Msi: &shared.OSPolicyResourcePackageResourceMSI{
                                            Properties: []string{
                                                "quasi",
                                                "excepturi",
                                            },
                                            Source: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("distinctio"),
                                                    Generation: sdk.String("cum"),
                                                    Object: sdk.String("in"),
                                                },
                                                LocalPath: sdk.String("repellendus"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("incidunt"),
                                                    URI: sdk.String("http://trustworthy-food.net"),
                                                },
                                            },
                                        },
                                        Rpm: &shared.OSPolicyResourcePackageResourceRPM{
                                            PullDeps: sdk.Bool(false),
                                            Source: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("quae"),
                                                    Generation: sdk.String("quae"),
                                                    Object: sdk.String("voluptatibus"),
                                                },
                                                LocalPath: sdk.String("est"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("modi"),
                                                    URI: sdk.String("http://imperfect-trade.info"),
                                                },
                                            },
                                        },
                                        Yum: &shared.OSPolicyResourcePackageResourceYUM{
                                            Name: sdk.String("Mrs. Yvonne Morissette"),
                                        },
                                        Zypper: &shared.OSPolicyResourcePackageResourceZypper{
                                            Name: sdk.String("Luther Hane"),
                                        },
                                    },
                                    Repository: &shared.OSPolicyResourceRepositoryResource{
                                        Apt: &shared.OSPolicyResourceRepositoryResourceAptRepository{
                                            ArchiveType: shared.OSPolicyResourceRepositoryResourceAptRepositoryArchiveTypeEnumDebSrc.ToPointer(),
                                            Components: []string{
                                                "adipisci",
                                            },
                                            Distribution: sdk.String("iusto"),
                                            GpgKey: sdk.String("ratione"),
                                            URI: sdk.String("https://junior-sausage.info"),
                                        },
                                        Goo: &shared.OSPolicyResourceRepositoryResourceGooRepository{
                                            Name: sdk.String("Herman Prosacco"),
                                            URL: sdk.String("tempore"),
                                        },
                                        Yum: &shared.OSPolicyResourceRepositoryResourceYumRepository{
                                            BaseURL: sdk.String("magnam"),
                                            DisplayName: sdk.String("maiores"),
                                            GpgKeys: []string{
                                                "aut",
                                                "voluptatem",
                                            },
                                            ID: sdk.String("183febdf-676b-4720-adab-750052a5647e"),
                                        },
                                        Zypper: &shared.OSPolicyResourceRepositoryResourceZypperRepository{
                                            BaseURL: sdk.String("fugiat"),
                                            DisplayName: sdk.String("minus"),
                                            GpgKeys: []string{
                                                "sequi",
                                                "natus",
                                            },
                                            ID: sdk.String("ed8c4320-f412-440d-8487-ac693b94c3b9"),
                                        },
                                    },
                                },
                                shared.OSPolicyResource{
                                    Exec: &shared.OSPolicyResourceExecResource{
                                        Enforce: &shared.OSPolicyResourceExecResourceExec{
                                            Args: []string{
                                                "magni",
                                                "modi",
                                                "atque",
                                                "blanditiis",
                                            },
                                            File: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("quibusdam"),
                                                    Generation: sdk.String("odio"),
                                                    Object: sdk.String("unde"),
                                                },
                                                LocalPath: sdk.String("ad"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("officia"),
                                                    URI: sdk.String("https://fearless-cartilage.org"),
                                                },
                                            },
                                            Interpreter: shared.OSPolicyResourceExecResourceExecInterpreterEnumPowershell.ToPointer(),
                                            OutputFilePath: sdk.String("dolore"),
                                            Script: sdk.String("accusantium"),
                                        },
                                        Validate: &shared.OSPolicyResourceExecResourceExec{
                                            Args: []string{
                                                "laboriosam",
                                                "laboriosam",
                                            },
                                            File: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("omnis"),
                                                    Generation: sdk.String("tenetur"),
                                                    Object: sdk.String("vel"),
                                                },
                                                LocalPath: sdk.String("iste"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("animi"),
                                                    URI: sdk.String("http://antique-gator.org"),
                                                },
                                            },
                                            Interpreter: shared.OSPolicyResourceExecResourceExecInterpreterEnumInterpreterUnspecified.ToPointer(),
                                            OutputFilePath: sdk.String("inventore"),
                                            Script: sdk.String("odit"),
                                        },
                                    },
                                    File: &shared.OSPolicyResourceFileResource{
                                        Content: sdk.String("labore"),
                                        File: &shared.OSPolicyResourceFile{
                                            AllowInsecure: sdk.Bool(false),
                                            Gcs: &shared.OSPolicyResourceFileGcs{
                                                Bucket: sdk.String("perspiciatis"),
                                                Generation: sdk.String("dolore"),
                                                Object: sdk.String("ullam"),
                                            },
                                            LocalPath: sdk.String("aut"),
                                            Remote: &shared.OSPolicyResourceFileRemote{
                                                Sha256Checksum: sdk.String("atque"),
                                                URI: sdk.String("http://pessimistic-step-sister.info"),
                                            },
                                        },
                                        Path: sdk.String("quo"),
                                        Permissions: sdk.String("ipsum"),
                                        State: shared.OSPolicyResourceFileResourceStateEnumAbsent.ToPointer(),
                                    },
                                    ID: sdk.String("1b418440-60e0-4031-8d02-3dc901f5afd2"),
                                    Pkg: &shared.OSPolicyResourcePackageResource{
                                        Apt: &shared.OSPolicyResourcePackageResourceAPT{
                                            Name: sdk.String("Rafael Sanford"),
                                        },
                                        Deb: &shared.OSPolicyResourcePackageResourceDeb{
                                            PullDeps: sdk.Bool(false),
                                            Source: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("praesentium"),
                                                    Generation: sdk.String("numquam"),
                                                    Object: sdk.String("iure"),
                                                },
                                                LocalPath: sdk.String("id"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("itaque"),
                                                    URI: sdk.String("https://sure-footed-left.name"),
                                                },
                                            },
                                        },
                                        DesiredState: shared.OSPolicyResourcePackageResourceDesiredStateEnumDesiredStateUnspecified.ToPointer(),
                                        Googet: &shared.OSPolicyResourcePackageResourceGooGet{
                                            Name: sdk.String("Victoria Rolfson"),
                                        },
                                        Msi: &shared.OSPolicyResourcePackageResourceMSI{
                                            Properties: []string{
                                                "consequuntur",
                                                "delectus",
                                            },
                                            Source: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("quaerat"),
                                                    Generation: sdk.String("quos"),
                                                    Object: sdk.String("excepturi"),
                                                },
                                                LocalPath: sdk.String("eum"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("rerum"),
                                                    URI: sdk.String("https://functional-boatyard.org"),
                                                },
                                            },
                                        },
                                        Rpm: &shared.OSPolicyResourcePackageResourceRPM{
                                            PullDeps: sdk.Bool(false),
                                            Source: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("tempora"),
                                                    Generation: sdk.String("ea"),
                                                    Object: sdk.String("exercitationem"),
                                                },
                                                LocalPath: sdk.String("sed"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("fugiat"),
                                                    URI: sdk.String("http://smart-consonant.biz"),
                                                },
                                            },
                                        },
                                        Yum: &shared.OSPolicyResourcePackageResourceYUM{
                                            Name: sdk.String("Ms. Cristina Hoppe"),
                                        },
                                        Zypper: &shared.OSPolicyResourcePackageResourceZypper{
                                            Name: sdk.String("Lyle Wehner"),
                                        },
                                    },
                                    Repository: &shared.OSPolicyResourceRepositoryResource{
                                        Apt: &shared.OSPolicyResourceRepositoryResourceAptRepository{
                                            ArchiveType: shared.OSPolicyResourceRepositoryResourceAptRepositoryArchiveTypeEnumArchiveTypeUnspecified.ToPointer(),
                                            Components: []string{
                                                "numquam",
                                            },
                                            Distribution: sdk.String("voluptate"),
                                            GpgKey: sdk.String("odio"),
                                            URI: sdk.String("http://frugal-toe.info"),
                                        },
                                        Goo: &shared.OSPolicyResourceRepositoryResourceGooRepository{
                                            Name: sdk.String("Ms. Frances Monahan"),
                                            URL: sdk.String("error"),
                                        },
                                        Yum: &shared.OSPolicyResourceRepositoryResourceYumRepository{
                                            BaseURL: sdk.String("inventore"),
                                            DisplayName: sdk.String("ipsa"),
                                            GpgKeys: []string{
                                                "labore",
                                                "id",
                                            },
                                            ID: sdk.String("5de59ac7-7066-470c-b1cf-5932605251e6"),
                                        },
                                        Zypper: &shared.OSPolicyResourceRepositoryResourceZypperRepository{
                                            BaseURL: sdk.String("ex"),
                                            DisplayName: sdk.String("harum"),
                                            GpgKeys: []string{
                                                "non",
                                                "quia",
                                                "laboriosam",
                                            },
                                            ID: sdk.String("897d99a2-d335-4670-a93e-e6cf59f358aa"),
                                        },
                                    },
                                },
                                shared.OSPolicyResource{
                                    Exec: &shared.OSPolicyResourceExecResource{
                                        Enforce: &shared.OSPolicyResourceExecResourceExec{
                                            Args: []string{
                                                "est",
                                                "quisquam",
                                                "officia",
                                                "officiis",
                                            },
                                            File: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("ratione"),
                                                    Generation: sdk.String("consequuntur"),
                                                    Object: sdk.String("neque"),
                                                },
                                                LocalPath: sdk.String("deserunt"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("adipisci"),
                                                    URI: sdk.String("http://sentimental-whisper.info"),
                                                },
                                            },
                                            Interpreter: shared.OSPolicyResourceExecResourceExecInterpreterEnumShell.ToPointer(),
                                            OutputFilePath: sdk.String("laborum"),
                                            Script: sdk.String("architecto"),
                                        },
                                        Validate: &shared.OSPolicyResourceExecResourceExec{
                                            Args: []string{
                                                "minus",
                                                "molestias",
                                                "quam",
                                                "nihil",
                                            },
                                            File: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("inventore"),
                                                    Generation: sdk.String("ex"),
                                                    Object: sdk.String("maxime"),
                                                },
                                                LocalPath: sdk.String("deleniti"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("accusantium"),
                                                    URI: sdk.String("http://squiggly-seminar.name"),
                                                },
                                            },
                                            Interpreter: shared.OSPolicyResourceExecResourceExecInterpreterEnumPowershell.ToPointer(),
                                            OutputFilePath: sdk.String("alias"),
                                            Script: sdk.String("placeat"),
                                        },
                                    },
                                    File: &shared.OSPolicyResourceFileResource{
                                        Content: sdk.String("in"),
                                        File: &shared.OSPolicyResourceFile{
                                            AllowInsecure: sdk.Bool(false),
                                            Gcs: &shared.OSPolicyResourceFileGcs{
                                                Bucket: sdk.String("possimus"),
                                                Generation: sdk.String("iste"),
                                                Object: sdk.String("assumenda"),
                                            },
                                            LocalPath: sdk.String("neque"),
                                            Remote: &shared.OSPolicyResourceFileRemote{
                                                Sha256Checksum: sdk.String("dolores"),
                                                URI: sdk.String("http://youthful-bankruptcy.name"),
                                            },
                                        },
                                        Path: sdk.String("est"),
                                        Permissions: sdk.String("autem"),
                                        State: shared.OSPolicyResourceFileResourceStateEnumDesiredStateUnspecified.ToPointer(),
                                    },
                                    ID: sdk.String("ed9cf1c8-56bc-4ba5-9ef2-454a47facf11"),
                                    Pkg: &shared.OSPolicyResourcePackageResource{
                                        Apt: &shared.OSPolicyResourcePackageResourceAPT{
                                            Name: sdk.String("Marianne Steuber"),
                                        },
                                        Deb: &shared.OSPolicyResourcePackageResourceDeb{
                                            PullDeps: sdk.Bool(false),
                                            Source: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("ut"),
                                                    Generation: sdk.String("dolore"),
                                                    Object: sdk.String("numquam"),
                                                },
                                                LocalPath: sdk.String("officia"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("reprehenderit"),
                                                    URI: sdk.String("http://huge-cilantro.name"),
                                                },
                                            },
                                        },
                                        DesiredState: shared.OSPolicyResourcePackageResourceDesiredStateEnumInstalled.ToPointer(),
                                        Googet: &shared.OSPolicyResourcePackageResourceGooGet{
                                            Name: sdk.String("Rachael Kunde"),
                                        },
                                        Msi: &shared.OSPolicyResourcePackageResourceMSI{
                                            Properties: []string{
                                                "accusamus",
                                                "repellat",
                                                "est",
                                            },
                                            Source: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("doloribus"),
                                                    Generation: sdk.String("labore"),
                                                    Object: sdk.String("adipisci"),
                                                },
                                                LocalPath: sdk.String("at"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("impedit"),
                                                    URI: sdk.String("http://delirious-currant.info"),
                                                },
                                            },
                                        },
                                        Rpm: &shared.OSPolicyResourcePackageResourceRPM{
                                            PullDeps: sdk.Bool(false),
                                            Source: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("aspernatur"),
                                                    Generation: sdk.String("consequatur"),
                                                    Object: sdk.String("delectus"),
                                                },
                                                LocalPath: sdk.String("nesciunt"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("et"),
                                                    URI: sdk.String("http://merry-wood.biz"),
                                                },
                                            },
                                        },
                                        Yum: &shared.OSPolicyResourcePackageResourceYUM{
                                            Name: sdk.String("Lynette West"),
                                        },
                                        Zypper: &shared.OSPolicyResourcePackageResourceZypper{
                                            Name: sdk.String("Daniel Cummerata"),
                                        },
                                    },
                                    Repository: &shared.OSPolicyResourceRepositoryResource{
                                        Apt: &shared.OSPolicyResourceRepositoryResourceAptRepository{
                                            ArchiveType: shared.OSPolicyResourceRepositoryResourceAptRepositoryArchiveTypeEnumDeb.ToPointer(),
                                            Components: []string{
                                                "exercitationem",
                                                "commodi",
                                                "nostrum",
                                            },
                                            Distribution: sdk.String("delectus"),
                                            GpgKey: sdk.String("quidem"),
                                            URI: sdk.String("https://yellowish-gig.biz"),
                                        },
                                        Goo: &shared.OSPolicyResourceRepositoryResourceGooRepository{
                                            Name: sdk.String("Delia Reichert"),
                                            URL: sdk.String("illum"),
                                        },
                                        Yum: &shared.OSPolicyResourceRepositoryResourceYumRepository{
                                            BaseURL: sdk.String("dolor"),
                                            DisplayName: sdk.String("praesentium"),
                                            GpgKeys: []string{
                                                "deleniti",
                                            },
                                            ID: sdk.String("38790243-b293-4dab-b0e9-17f50fda04c8"),
                                        },
                                        Zypper: &shared.OSPolicyResourceRepositoryResourceZypperRepository{
                                            BaseURL: sdk.String("libero"),
                                            DisplayName: sdk.String("quasi"),
                                            GpgKeys: []string{
                                                "soluta",
                                                "exercitationem",
                                                "exercitationem",
                                            },
                                            ID: sdk.String("a292b0bc-3bb7-4446-a4eb-1d03388b0d1b"),
                                        },
                                    },
                                },
                                shared.OSPolicyResource{
                                    Exec: &shared.OSPolicyResourceExecResource{
                                        Enforce: &shared.OSPolicyResourceExecResourceExec{
                                            Args: []string{
                                                "architecto",
                                                "in",
                                                "fuga",
                                            },
                                            File: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("tenetur"),
                                                    Generation: sdk.String("saepe"),
                                                    Object: sdk.String("eveniet"),
                                                },
                                                LocalPath: sdk.String("reprehenderit"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("incidunt"),
                                                    URI: sdk.String("https://heartfelt-vogue.org"),
                                                },
                                            },
                                            Interpreter: shared.OSPolicyResourceExecResourceExecInterpreterEnumShell.ToPointer(),
                                            OutputFilePath: sdk.String("occaecati"),
                                            Script: sdk.String("labore"),
                                        },
                                        Validate: &shared.OSPolicyResourceExecResourceExec{
                                            Args: []string{
                                                "voluptate",
                                                "quod",
                                            },
                                            File: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("nihil"),
                                                    Generation: sdk.String("recusandae"),
                                                    Object: sdk.String("illum"),
                                                },
                                                LocalPath: sdk.String("laborum"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("reiciendis"),
                                                    URI: sdk.String("http://orange-snob.com"),
                                                },
                                            },
                                            Interpreter: shared.OSPolicyResourceExecResourceExecInterpreterEnumNone.ToPointer(),
                                            OutputFilePath: sdk.String("tenetur"),
                                            Script: sdk.String("rerum"),
                                        },
                                    },
                                    File: &shared.OSPolicyResourceFileResource{
                                        Content: sdk.String("asperiores"),
                                        File: &shared.OSPolicyResourceFile{
                                            AllowInsecure: sdk.Bool(false),
                                            Gcs: &shared.OSPolicyResourceFileGcs{
                                                Bucket: sdk.String("odio"),
                                                Generation: sdk.String("nisi"),
                                                Object: sdk.String("hic"),
                                            },
                                            LocalPath: sdk.String("assumenda"),
                                            Remote: &shared.OSPolicyResourceFileRemote{
                                                Sha256Checksum: sdk.String("ab"),
                                                URI: sdk.String("http://crowded-procurement.biz"),
                                            },
                                        },
                                        Path: sdk.String("doloremque"),
                                        Permissions: sdk.String("dolor"),
                                        State: shared.OSPolicyResourceFileResourceStateEnumContentsMatch.ToPointer(),
                                    },
                                    ID: sdk.String("3023b93e-3431-46cf-95b4-313553ccf1c2"),
                                    Pkg: &shared.OSPolicyResourcePackageResource{
                                        Apt: &shared.OSPolicyResourcePackageResourceAPT{
                                            Name: sdk.String("Eva Schowalter"),
                                        },
                                        Deb: &shared.OSPolicyResourcePackageResourceDeb{
                                            PullDeps: sdk.Bool(false),
                                            Source: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("illum"),
                                                    Generation: sdk.String("quod"),
                                                    Object: sdk.String("minus"),
                                                },
                                                LocalPath: sdk.String("sint"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("occaecati"),
                                                    URI: sdk.String("http://flashy-sickness.biz"),
                                                },
                                            },
                                        },
                                        DesiredState: shared.OSPolicyResourcePackageResourceDesiredStateEnumDesiredStateUnspecified.ToPointer(),
                                        Googet: &shared.OSPolicyResourcePackageResourceGooGet{
                                            Name: sdk.String("Jorge Ritchie"),
                                        },
                                        Msi: &shared.OSPolicyResourcePackageResourceMSI{
                                            Properties: []string{
                                                "praesentium",
                                                "optio",
                                            },
                                            Source: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("officiis"),
                                                    Generation: sdk.String("voluptatibus"),
                                                    Object: sdk.String("mollitia"),
                                                },
                                                LocalPath: sdk.String("quam"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("deleniti"),
                                                    URI: sdk.String("https://bite-sized-total.biz"),
                                                },
                                            },
                                        },
                                        Rpm: &shared.OSPolicyResourcePackageResourceRPM{
                                            PullDeps: sdk.Bool(false),
                                            Source: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("facere"),
                                                    Generation: sdk.String("nesciunt"),
                                                    Object: sdk.String("libero"),
                                                },
                                                LocalPath: sdk.String("error"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("perferendis"),
                                                    URI: sdk.String("http://unsightly-angina.name"),
                                                },
                                            },
                                        },
                                        Yum: &shared.OSPolicyResourcePackageResourceYUM{
                                            Name: sdk.String("Janice Reichel"),
                                        },
                                        Zypper: &shared.OSPolicyResourcePackageResourceZypper{
                                            Name: sdk.String("Brooke Pouros V"),
                                        },
                                    },
                                    Repository: &shared.OSPolicyResourceRepositoryResource{
                                        Apt: &shared.OSPolicyResourceRepositoryResourceAptRepository{
                                            ArchiveType: shared.OSPolicyResourceRepositoryResourceAptRepositoryArchiveTypeEnumDebSrc.ToPointer(),
                                            Components: []string{
                                                "ab",
                                                "neque",
                                            },
                                            Distribution: sdk.String("pariatur"),
                                            GpgKey: sdk.String("excepturi"),
                                            URI: sdk.String("http://poised-earth.com"),
                                        },
                                        Goo: &shared.OSPolicyResourceRepositoryResourceGooRepository{
                                            Name: sdk.String("Mr. Felicia Rutherford"),
                                            URL: sdk.String("in"),
                                        },
                                        Yum: &shared.OSPolicyResourceRepositoryResourceYumRepository{
                                            BaseURL: sdk.String("quia"),
                                            DisplayName: sdk.String("odio"),
                                            GpgKeys: []string{
                                                "eveniet",
                                            },
                                            ID: sdk.String("18ea9e45-118c-42cc-97fb-d60b1a78ed29"),
                                        },
                                        Zypper: &shared.OSPolicyResourceRepositoryResourceZypperRepository{
                                            BaseURL: sdk.String("est"),
                                            DisplayName: sdk.String("occaecati"),
                                            GpgKeys: []string{
                                                "quaerat",
                                                "itaque",
                                                "itaque",
                                                "animi",
                                            },
                                            ID: sdk.String("85658c2d-4f4c-488b-a4f2-78fd9667e46c"),
                                        },
                                    },
                                },
                            },
                        },
                    },
                },
            },
            Rollout: &shared.OSPolicyAssignmentRollout{
                DisruptionBudget: &shared.FixedOrPercent{
                    Fixed: sdk.Int(360352),
                    Percent: sdk.Int(120665),
                },
                MinWaitDuration: sdk.String("possimus"),
            },
        },
        AccessToken: sdk.String("dolores"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("repellat"),
        Fields: sdk.String("id"),
        Key: sdk.String("fuga"),
        Name: "Carole Smith",
        OauthToken: sdk.String("repellat"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("sed"),
        UpdateMask: sdk.String("ratione"),
        UploadType: sdk.String("quaerat"),
        UploadProtocol: sdk.String("minus"),
    }, operations.OsconfigProjectsLocationsOsPolicyAssignmentsPatchSecurity{
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
