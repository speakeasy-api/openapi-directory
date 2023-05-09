# Projects

### Available Operations

* [OsconfigProjectsLocationsInstancesInventoriesList](#osconfigprojectslocationsinstancesinventorieslist) - List inventory data for all VM instances in the specified zone.
* [OsconfigProjectsLocationsInstancesOsPolicyAssignmentsReportsList](#osconfigprojectslocationsinstancesospolicyassignmentsreportslist) - List OS policy asssignment reports for all Compute Engine VM instances in the specified zone.
* [OsconfigProjectsLocationsInstancesVulnerabilityReportsList](#osconfigprojectslocationsinstancesvulnerabilityreportslist) - List vulnerability reports for all VM instances in the specified zone.
* [OsconfigProjectsLocationsOsPolicyAssignmentsCreate](#osconfigprojectslocationsospolicyassignmentscreate) - Create an OS policy assignment. This method also creates the first revision of the OS policy assignment. This method returns a long running operation (LRO) that contains the rollout details. The rollout can be cancelled by cancelling the LRO. For more information, see [Method: projects.locations.osPolicyAssignments.operations.cancel](https://cloud.google.com/compute/docs/osconfig/rest/v1/projects.locations.osPolicyAssignments.operations/cancel).
* [OsconfigProjectsLocationsOsPolicyAssignmentsList](#osconfigprojectslocationsospolicyassignmentslist) - List the OS policy assignments under the parent resource. For each OS policy assignment, the latest revision is returned.
* [OsconfigProjectsLocationsOsPolicyAssignmentsListRevisions](#osconfigprojectslocationsospolicyassignmentslistrevisions) - List the OS policy assignment revisions for a given OS policy assignment.
* [OsconfigProjectsPatchDeploymentsCreate](#osconfigprojectspatchdeploymentscreate) - Create an OS Config patch deployment.
* [OsconfigProjectsPatchDeploymentsDelete](#osconfigprojectspatchdeploymentsdelete) - Delete an OS Config patch deployment.
* [OsconfigProjectsPatchDeploymentsList](#osconfigprojectspatchdeploymentslist) - Get a page of OS Config patch deployments.
* [OsconfigProjectsPatchDeploymentsPatch](#osconfigprojectspatchdeploymentspatch) - Update an OS Config patch deployment.
* [OsconfigProjectsPatchDeploymentsPause](#osconfigprojectspatchdeploymentspause) - Change state of patch deployment to "PAUSED". Patch deployment in paused state doesn't generate patch jobs.
* [OsconfigProjectsPatchDeploymentsResume](#osconfigprojectspatchdeploymentsresume) - Change state of patch deployment back to "ACTIVE". Patch deployment in active state continues to generate patch jobs.
* [OsconfigProjectsPatchJobsCancel](#osconfigprojectspatchjobscancel) - Cancel a patch job. The patch job must be active. Canceled patch jobs cannot be restarted.
* [OsconfigProjectsPatchJobsExecute](#osconfigprojectspatchjobsexecute) - Patch VM instances by creating and running a patch job.
* [OsconfigProjectsPatchJobsGet](#osconfigprojectspatchjobsget) - Get the patch job. This can be used to track the progress of an ongoing patch job or review the details of completed jobs.
* [OsconfigProjectsPatchJobsInstanceDetailsList](#osconfigprojectspatchjobsinstancedetailslist) - Get a list of instance details for a given patch job.
* [OsconfigProjectsPatchJobsList](#osconfigprojectspatchjobslist) - Get a list of patch jobs.

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
        AccessToken: sdk.String("delectus"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("suscipit"),
        Fields: sdk.String("molestiae"),
        Filter: sdk.String("minus"),
        Key: sdk.String("placeat"),
        OauthToken: sdk.String("voluptatum"),
        PageSize: sdk.Int64(479977),
        PageToken: sdk.String("excepturi"),
        Parent: "nisi",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("recusandae"),
        UploadType: sdk.String("temporibus"),
        UploadProtocol: sdk.String("ab"),
        View: operations.OsconfigProjectsLocationsInstancesInventoriesListViewEnumBasic.ToPointer(),
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("deserunt"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("ipsam"),
        Fields: sdk.String("repellendus"),
        Filter: sdk.String("sapiente"),
        Key: sdk.String("quo"),
        OauthToken: sdk.String("odit"),
        PageSize: sdk.Int64(870013),
        PageToken: sdk.String("at"),
        Parent: "maiores",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("molestiae"),
        UploadType: sdk.String("quod"),
        UploadProtocol: sdk.String("quod"),
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
        AccessToken: sdk.String("totam"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("dolorum"),
        Fields: sdk.String("dicta"),
        Filter: sdk.String("nam"),
        Key: sdk.String("officia"),
        OauthToken: sdk.String("occaecati"),
        PageSize: sdk.Int64(143353),
        PageToken: sdk.String("deleniti"),
        Parent: "hic",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("optio"),
        UploadType: sdk.String("totam"),
        UploadProtocol: sdk.String("beatae"),
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

Create an OS policy assignment. This method also creates the first revision of the OS policy assignment. This method returns a long running operation (LRO) that contains the rollout details. The rollout can be cancelled by cancelling the LRO. For more information, see [Method: projects.locations.osPolicyAssignments.operations.cancel](https://cloud.google.com/compute/docs/osconfig/rest/v1/projects.locations.osPolicyAssignments.operations/cancel).

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
            Description: sdk.String("molestiae"),
            Etag: sdk.String("modi"),
            InstanceFilter: &shared.OSPolicyAssignmentInstanceFilter{
                All: sdk.Bool(false),
                ExclusionLabels: []shared.OSPolicyAssignmentLabelSet{
                    shared.OSPolicyAssignmentLabelSet{
                        Labels: map[string]string{
                            "cum": "esse",
                            "ipsum": "excepturi",
                            "aspernatur": "perferendis",
                            "ad": "natus",
                        },
                    },
                },
                InclusionLabels: []shared.OSPolicyAssignmentLabelSet{
                    shared.OSPolicyAssignmentLabelSet{
                        Labels: map[string]string{
                            "dolor": "natus",
                            "laboriosam": "hic",
                            "saepe": "fuga",
                        },
                    },
                },
                Inventories: []shared.OSPolicyAssignmentInstanceFilterInventory{
                    shared.OSPolicyAssignmentInstanceFilterInventory{
                        OsShortName: sdk.String("corporis"),
                        OsVersion: sdk.String("iste"),
                    },
                    shared.OSPolicyAssignmentInstanceFilterInventory{
                        OsShortName: sdk.String("iure"),
                        OsVersion: sdk.String("saepe"),
                    },
                },
            },
            Name: sdk.String("Roger Beier"),
            OsPolicies: []shared.OSPolicy{
                shared.OSPolicy{
                    AllowNoResourceGroupMatch: sdk.Bool(false),
                    Description: sdk.String("laborum"),
                    ID: sdk.String("2352c595-5907-4aff-9a3a-2fa946773925"),
                    Mode: shared.OSPolicyModeEnumModeUnspecified.ToPointer(),
                    ResourceGroups: []shared.OSPolicyResourceGroup{
                        shared.OSPolicyResourceGroup{
                            InventoryFilters: []shared.OSPolicyInventoryFilter{
                                shared.OSPolicyInventoryFilter{
                                    OsShortName: sdk.String("enim"),
                                    OsVersion: sdk.String("odit"),
                                },
                                shared.OSPolicyInventoryFilter{
                                    OsShortName: sdk.String("quo"),
                                    OsVersion: sdk.String("sequi"),
                                },
                                shared.OSPolicyInventoryFilter{
                                    OsShortName: sdk.String("tenetur"),
                                    OsVersion: sdk.String("ipsam"),
                                },
                            },
                            Resources: []shared.OSPolicyResource{
                                shared.OSPolicyResource{
                                    Exec: &shared.OSPolicyResourceExecResource{
                                        Enforce: &shared.OSPolicyResourceExecResourceExec{
                                            Args: []string{
                                                "aut",
                                                "quasi",
                                                "error",
                                                "temporibus",
                                            },
                                            File: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("laborum"),
                                                    Generation: sdk.String("quasi"),
                                                    Object: sdk.String("reiciendis"),
                                                },
                                                LocalPath: sdk.String("voluptatibus"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("vero"),
                                                    URI: sdk.String("http://lustrous-welcome.com"),
                                                },
                                            },
                                            Interpreter: shared.OSPolicyResourceExecResourceExecInterpreterEnumShell.ToPointer(),
                                            OutputFilePath: sdk.String("voluptate"),
                                            Script: sdk.String("cum"),
                                        },
                                        Validate: &shared.OSPolicyResourceExecResourceExec{
                                            Args: []string{
                                                "doloremque",
                                            },
                                            File: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("reprehenderit"),
                                                    Generation: sdk.String("ut"),
                                                    Object: sdk.String("maiores"),
                                                },
                                                LocalPath: sdk.String("dicta"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("corporis"),
                                                    URI: sdk.String("http://lazy-butterfly.net"),
                                                },
                                            },
                                            Interpreter: shared.OSPolicyResourceExecResourceExecInterpreterEnumNone.ToPointer(),
                                            OutputFilePath: sdk.String("accusamus"),
                                            Script: sdk.String("commodi"),
                                        },
                                    },
                                    File: &shared.OSPolicyResourceFileResource{
                                        Content: sdk.String("repudiandae"),
                                        File: &shared.OSPolicyResourceFile{
                                            AllowInsecure: sdk.Bool(false),
                                            Gcs: &shared.OSPolicyResourceFileGcs{
                                                Bucket: sdk.String("quae"),
                                                Generation: sdk.String("ipsum"),
                                                Object: sdk.String("quidem"),
                                            },
                                            LocalPath: sdk.String("molestias"),
                                            Remote: &shared.OSPolicyResourceFileRemote{
                                                Sha256Checksum: sdk.String("excepturi"),
                                                URI: sdk.String("https://famous-leptocephalus.name"),
                                            },
                                        },
                                        Path: sdk.String("voluptates"),
                                        Permissions: sdk.String("quasi"),
                                        State: shared.OSPolicyResourceFileResourceStateEnumContentsMatch.ToPointer(),
                                    },
                                    ID: sdk.String("91e450ad-2abd-4442-a980-2d502a94bb4f"),
                                    Pkg: &shared.OSPolicyResourcePackageResource{
                                        Apt: &shared.OSPolicyResourcePackageResourceAPT{
                                            Name: sdk.String("Ethel Roob"),
                                        },
                                        Deb: &shared.OSPolicyResourcePackageResourceDeb{
                                            PullDeps: sdk.Bool(false),
                                            Source: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("provident"),
                                                    Generation: sdk.String("necessitatibus"),
                                                    Object: sdk.String("sint"),
                                                },
                                                LocalPath: sdk.String("officia"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("dolor"),
                                                    URI: sdk.String("https://weepy-pork.info"),
                                                },
                                            },
                                        },
                                        DesiredState: shared.OSPolicyResourcePackageResourceDesiredStateEnumInstalled.ToPointer(),
                                        Googet: &shared.OSPolicyResourcePackageResourceGooGet{
                                            Name: sdk.String("Mrs. Emilio Price"),
                                        },
                                        Msi: &shared.OSPolicyResourcePackageResourceMSI{
                                            Properties: []string{
                                                "ea",
                                                "aliquid",
                                                "laborum",
                                                "accusamus",
                                            },
                                            Source: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("non"),
                                                    Generation: sdk.String("occaecati"),
                                                    Object: sdk.String("enim"),
                                                },
                                                LocalPath: sdk.String("accusamus"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("delectus"),
                                                    URI: sdk.String("https://old-reality.name"),
                                                },
                                            },
                                        },
                                        Rpm: &shared.OSPolicyResourcePackageResourceRPM{
                                            PullDeps: sdk.Bool(false),
                                            Source: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("blanditiis"),
                                                    Generation: sdk.String("deleniti"),
                                                    Object: sdk.String("sapiente"),
                                                },
                                                LocalPath: sdk.String("amet"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("deserunt"),
                                                    URI: sdk.String("http://impressive-outfit.name"),
                                                },
                                            },
                                        },
                                        Yum: &shared.OSPolicyResourcePackageResourceYUM{
                                            Name: sdk.String("Dorothy Kovacek"),
                                        },
                                        Zypper: &shared.OSPolicyResourcePackageResourceZypper{
                                            Name: sdk.String("Leroy Greenfelder"),
                                        },
                                    },
                                    Repository: &shared.OSPolicyResourceRepositoryResource{
                                        Apt: &shared.OSPolicyResourceRepositoryResourceAptRepository{
                                            ArchiveType: shared.OSPolicyResourceRepositoryResourceAptRepositoryArchiveTypeEnumDebSrc.ToPointer(),
                                            Components: []string{
                                                "vero",
                                                "aspernatur",
                                            },
                                            Distribution: sdk.String("architecto"),
                                            GpgKey: sdk.String("magnam"),
                                            URI: sdk.String("http://nippy-flour.name"),
                                        },
                                        Goo: &shared.OSPolicyResourceRepositoryResourceGooRepository{
                                            Name: sdk.String("Kirk Bartoletti"),
                                            URL: sdk.String("mollitia"),
                                        },
                                        Yum: &shared.OSPolicyResourceRepositoryResourceYumRepository{
                                            BaseURL: sdk.String("ad"),
                                            DisplayName: sdk.String("eum"),
                                            GpgKeys: []string{
                                                "necessitatibus",
                                            },
                                            ID: sdk.String("2516fe4c-8b71-41e5-b7fd-2ed028921cdd"),
                                        },
                                        Zypper: &shared.OSPolicyResourceRepositoryResourceZypperRepository{
                                            BaseURL: sdk.String("maxime"),
                                            DisplayName: sdk.String("ea"),
                                            GpgKeys: []string{
                                                "odit",
                                                "ea",
                                                "accusantium",
                                            },
                                            ID: sdk.String("1fb576b0-d5f0-4d30-85fb-b2587053202c"),
                                        },
                                    },
                                },
                                shared.OSPolicyResource{
                                    Exec: &shared.OSPolicyResourceExecResource{
                                        Enforce: &shared.OSPolicyResourceExecResourceExec{
                                            Args: []string{
                                                "dolor",
                                                "vero",
                                            },
                                            File: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("nostrum"),
                                                    Generation: sdk.String("hic"),
                                                    Object: sdk.String("recusandae"),
                                                },
                                                LocalPath: sdk.String("omnis"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("facilis"),
                                                    URI: sdk.String("https://amusing-sediment.com"),
                                                },
                                            },
                                            Interpreter: shared.OSPolicyResourceExecResourceExecInterpreterEnumShell.ToPointer(),
                                            OutputFilePath: sdk.String("error"),
                                            Script: sdk.String("eaque"),
                                        },
                                        Validate: &shared.OSPolicyResourceExecResourceExec{
                                            Args: []string{
                                                "rerum",
                                                "adipisci",
                                                "asperiores",
                                            },
                                            File: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("earum"),
                                                    Generation: sdk.String("modi"),
                                                    Object: sdk.String("iste"),
                                                },
                                                LocalPath: sdk.String("dolorum"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("deleniti"),
                                                    URI: sdk.String("https://only-rice.net"),
                                                },
                                            },
                                            Interpreter: shared.OSPolicyResourceExecResourceExecInterpreterEnumPowershell.ToPointer(),
                                            OutputFilePath: sdk.String("quaerat"),
                                            Script: sdk.String("quos"),
                                        },
                                    },
                                    File: &shared.OSPolicyResourceFileResource{
                                        Content: sdk.String("aliquid"),
                                        File: &shared.OSPolicyResourceFile{
                                            AllowInsecure: sdk.Bool(false),
                                            Gcs: &shared.OSPolicyResourceFileGcs{
                                                Bucket: sdk.String("dolorem"),
                                                Generation: sdk.String("dolorem"),
                                                Object: sdk.String("dolor"),
                                            },
                                            LocalPath: sdk.String("qui"),
                                            Remote: &shared.OSPolicyResourceFileRemote{
                                                Sha256Checksum: sdk.String("ipsum"),
                                                URI: sdk.String("https://nimble-reporter.info"),
                                            },
                                        },
                                        Path: sdk.String("dignissimos"),
                                        Permissions: sdk.String("reiciendis"),
                                        State: shared.OSPolicyResourceFileResourceStateEnumDesiredStateUnspecified.ToPointer(),
                                    },
                                    ID: sdk.String("a4100674-ebf6-4928-8d1b-a77a89ebf737"),
                                    Pkg: &shared.OSPolicyResourcePackageResource{
                                        Apt: &shared.OSPolicyResourcePackageResourceAPT{
                                            Name: sdk.String("Elbert Gislason I"),
                                        },
                                        Deb: &shared.OSPolicyResourcePackageResourceDeb{
                                            PullDeps: sdk.Bool(false),
                                            Source: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("optio"),
                                                    Generation: sdk.String("accusamus"),
                                                    Object: sdk.String("ad"),
                                                },
                                                LocalPath: sdk.String("saepe"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("suscipit"),
                                                    URI: sdk.String("https://old-expansionism.net"),
                                                },
                                            },
                                        },
                                        DesiredState: shared.OSPolicyResourcePackageResourceDesiredStateEnumInstalled.ToPointer(),
                                        Googet: &shared.OSPolicyResourcePackageResourceGooGet{
                                            Name: sdk.String("James Swaniawski"),
                                        },
                                        Msi: &shared.OSPolicyResourcePackageResourceMSI{
                                            Properties: []string{
                                                "quod",
                                                "officiis",
                                            },
                                            Source: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("qui"),
                                                    Generation: sdk.String("dolorum"),
                                                    Object: sdk.String("a"),
                                                },
                                                LocalPath: sdk.String("esse"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("harum"),
                                                    URI: sdk.String("http://dual-sequel.org"),
                                                },
                                            },
                                        },
                                        Rpm: &shared.OSPolicyResourcePackageResourceRPM{
                                            PullDeps: sdk.Bool(false),
                                            Source: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("amet"),
                                                    Generation: sdk.String("tempore"),
                                                    Object: sdk.String("accusamus"),
                                                },
                                                LocalPath: sdk.String("numquam"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("enim"),
                                                    URI: sdk.String("http://well-lit-literature.info"),
                                                },
                                            },
                                        },
                                        Yum: &shared.OSPolicyResourcePackageResourceYUM{
                                            Name: sdk.String("Mamie Durgan"),
                                        },
                                        Zypper: &shared.OSPolicyResourcePackageResourceZypper{
                                            Name: sdk.String("Glen Oberbrunner"),
                                        },
                                    },
                                    Repository: &shared.OSPolicyResourceRepositoryResource{
                                        Apt: &shared.OSPolicyResourceRepositoryResourceAptRepository{
                                            ArchiveType: shared.OSPolicyResourceRepositoryResourceAptRepositoryArchiveTypeEnumArchiveTypeUnspecified.ToPointer(),
                                            Components: []string{
                                                "cupiditate",
                                            },
                                            Distribution: sdk.String("maxime"),
                                            GpgKey: sdk.String("pariatur"),
                                            URI: sdk.String("https://circular-polarisation.name"),
                                        },
                                        Goo: &shared.OSPolicyResourceRepositoryResourceGooRepository{
                                            Name: sdk.String("Kelly Daniel"),
                                            URL: sdk.String("aliquid"),
                                        },
                                        Yum: &shared.OSPolicyResourceRepositoryResourceYumRepository{
                                            BaseURL: sdk.String("quam"),
                                            DisplayName: sdk.String("molestias"),
                                            GpgKeys: []string{
                                                "qui",
                                                "neque",
                                                "fugit",
                                                "magni",
                                            },
                                            ID: sdk.String("715bf0cb-b1e3-41b8-b90f-3443a1108e0a"),
                                        },
                                        Zypper: &shared.OSPolicyResourceRepositoryResourceZypperRepository{
                                            BaseURL: sdk.String("repellendus"),
                                            DisplayName: sdk.String("porro"),
                                            GpgKeys: []string{
                                                "ut",
                                                "facilis",
                                                "cupiditate",
                                                "qui",
                                            },
                                            ID: sdk.String("1879fce9-53f7-43ef-bfbc-7abd74dd39c0"),
                                        },
                                    },
                                },
                                shared.OSPolicyResource{
                                    Exec: &shared.OSPolicyResourceExecResource{
                                        Enforce: &shared.OSPolicyResourceExecResourceExec{
                                            Args: []string{
                                                "exercitationem",
                                                "nulla",
                                                "fugit",
                                                "porro",
                                            },
                                            File: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("maiores"),
                                                    Generation: sdk.String("doloribus"),
                                                    Object: sdk.String("iusto"),
                                                },
                                                LocalPath: sdk.String("eligendi"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("ducimus"),
                                                    URI: sdk.String("http://posh-disk.info"),
                                                },
                                            },
                                            Interpreter: shared.OSPolicyResourceExecResourceExecInterpreterEnumNone.ToPointer(),
                                            OutputFilePath: sdk.String("aspernatur"),
                                            Script: sdk.String("vel"),
                                        },
                                        Validate: &shared.OSPolicyResourceExecResourceExec{
                                            Args: []string{
                                                "magnam",
                                                "ratione",
                                                "ex",
                                                "laudantium",
                                            },
                                            File: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("dicta"),
                                                    Generation: sdk.String("dolor"),
                                                    Object: sdk.String("maiores"),
                                                },
                                                LocalPath: sdk.String("quasi"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("ex"),
                                                    URI: sdk.String("https://nimble-waterspout.info"),
                                                },
                                            },
                                            Interpreter: shared.OSPolicyResourceExecResourceExecInterpreterEnumPowershell.ToPointer(),
                                            OutputFilePath: sdk.String("quisquam"),
                                            Script: sdk.String("saepe"),
                                        },
                                    },
                                    File: &shared.OSPolicyResourceFileResource{
                                        Content: sdk.String("ea"),
                                        File: &shared.OSPolicyResourceFile{
                                            AllowInsecure: sdk.Bool(false),
                                            Gcs: &shared.OSPolicyResourceFileGcs{
                                                Bucket: sdk.String("impedit"),
                                                Generation: sdk.String("corporis"),
                                                Object: sdk.String("veniam"),
                                            },
                                            LocalPath: sdk.String("aliquid"),
                                            Remote: &shared.OSPolicyResourceFileRemote{
                                                Sha256Checksum: sdk.String("inventore"),
                                                URI: sdk.String("http://illegal-scholarship.biz"),
                                            },
                                        },
                                        Path: sdk.String("recusandae"),
                                        Permissions: sdk.String("aspernatur"),
                                        State: shared.OSPolicyResourceFileResourceStateEnumPresent.ToPointer(),
                                    },
                                    ID: sdk.String("0fb008c4-2e14-41aa-8366-c8dd6b144290"),
                                    Pkg: &shared.OSPolicyResourcePackageResource{
                                        Apt: &shared.OSPolicyResourcePackageResourceAPT{
                                            Name: sdk.String("Megan Kuhlman"),
                                        },
                                        Deb: &shared.OSPolicyResourcePackageResourceDeb{
                                            PullDeps: sdk.Bool(false),
                                            Source: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("esse"),
                                                    Generation: sdk.String("rem"),
                                                    Object: sdk.String("fuga"),
                                                },
                                                LocalPath: sdk.String("reprehenderit"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("quidem"),
                                                    URI: sdk.String("https://firm-honoree.info"),
                                                },
                                            },
                                        },
                                        DesiredState: shared.OSPolicyResourcePackageResourceDesiredStateEnumRemoved.ToPointer(),
                                        Googet: &shared.OSPolicyResourcePackageResourceGooGet{
                                            Name: sdk.String("Mr. Irma Schaefer"),
                                        },
                                        Msi: &shared.OSPolicyResourcePackageResourceMSI{
                                            Properties: []string{
                                                "neque",
                                                "quo",
                                                "illum",
                                            },
                                            Source: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("quo"),
                                                    Generation: sdk.String("fuga"),
                                                    Object: sdk.String("eius"),
                                                },
                                                LocalPath: sdk.String("eos"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("voluptas"),
                                                    URI: sdk.String("http://official-admin.biz"),
                                                },
                                            },
                                        },
                                        Rpm: &shared.OSPolicyResourcePackageResourceRPM{
                                            PullDeps: sdk.Bool(false),
                                            Source: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("debitis"),
                                                    Generation: sdk.String("ipsam"),
                                                    Object: sdk.String("aspernatur"),
                                                },
                                                LocalPath: sdk.String("sequi"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("quo"),
                                                    URI: sdk.String("http://vast-artist.net"),
                                                },
                                            },
                                        },
                                        Yum: &shared.OSPolicyResourcePackageResourceYUM{
                                            Name: sdk.String("Cody Blick"),
                                        },
                                        Zypper: &shared.OSPolicyResourcePackageResourceZypper{
                                            Name: sdk.String("Tom Kuhn"),
                                        },
                                    },
                                    Repository: &shared.OSPolicyResourceRepositoryResource{
                                        Apt: &shared.OSPolicyResourceRepositoryResourceAptRepository{
                                            ArchiveType: shared.OSPolicyResourceRepositoryResourceAptRepositoryArchiveTypeEnumDebSrc.ToPointer(),
                                            Components: []string{
                                                "deserunt",
                                            },
                                            Distribution: sdk.String("molestiae"),
                                            GpgKey: sdk.String("accusantium"),
                                            URI: sdk.String("https://indelible-messy.name"),
                                        },
                                        Goo: &shared.OSPolicyResourceRepositoryResourceGooRepository{
                                            Name: sdk.String("Cassandra Considine"),
                                            URL: sdk.String("incidunt"),
                                        },
                                        Yum: &shared.OSPolicyResourceRepositoryResourceYumRepository{
                                            BaseURL: sdk.String("atque"),
                                            DisplayName: sdk.String("explicabo"),
                                            GpgKeys: []string{
                                                "nisi",
                                                "fugit",
                                            },
                                            ID: sdk.String("f222e981-7ee1-47cb-a61e-6b7b95bc0ab3"),
                                        },
                                        Zypper: &shared.OSPolicyResourceRepositoryResourceZypperRepository{
                                            BaseURL: sdk.String("cumque"),
                                            DisplayName: sdk.String("consequuntur"),
                                            GpgKeys: []string{
                                                "minus",
                                            },
                                            ID: sdk.String("4f3789fd-871f-499d-92ef-d121aa6f1e67"),
                                        },
                                    },
                                },
                            },
                        },
                        shared.OSPolicyResourceGroup{
                            InventoryFilters: []shared.OSPolicyInventoryFilter{
                                shared.OSPolicyInventoryFilter{
                                    OsShortName: sdk.String("libero"),
                                    OsVersion: sdk.String("illum"),
                                },
                                shared.OSPolicyInventoryFilter{
                                    OsShortName: sdk.String("soluta"),
                                    OsVersion: sdk.String("accusantium"),
                                },
                            },
                            Resources: []shared.OSPolicyResource{
                                shared.OSPolicyResource{
                                    Exec: &shared.OSPolicyResourceExecResource{
                                        Enforce: &shared.OSPolicyResourceExecResourceExec{
                                            Args: []string{
                                                "dicta",
                                                "ullam",
                                                "reprehenderit",
                                                "ullam",
                                            },
                                            File: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("nisi"),
                                                    Generation: sdk.String("aut"),
                                                    Object: sdk.String("voluptatum"),
                                                },
                                                LocalPath: sdk.String("qui"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("quibusdam"),
                                                    URI: sdk.String("http://miserable-trip.net"),
                                                },
                                            },
                                            Interpreter: shared.OSPolicyResourceExecResourceExecInterpreterEnumInterpreterUnspecified.ToPointer(),
                                            OutputFilePath: sdk.String("omnis"),
                                            Script: sdk.String("tenetur"),
                                        },
                                        Validate: &shared.OSPolicyResourceExecResourceExec{
                                            Args: []string{
                                                "at",
                                            },
                                            File: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("et"),
                                                    Generation: sdk.String("voluptate"),
                                                    Object: sdk.String("ipsa"),
                                                },
                                                LocalPath: sdk.String("minima"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("veritatis"),
                                                    URI: sdk.String("http://enormous-orator.org"),
                                                },
                                            },
                                            Interpreter: shared.OSPolicyResourceExecResourceExecInterpreterEnumInterpreterUnspecified.ToPointer(),
                                            OutputFilePath: sdk.String("rem"),
                                            Script: sdk.String("aut"),
                                        },
                                    },
                                    File: &shared.OSPolicyResourceFileResource{
                                        Content: sdk.String("laudantium"),
                                        File: &shared.OSPolicyResourceFile{
                                            AllowInsecure: sdk.Bool(false),
                                            Gcs: &shared.OSPolicyResourceFileGcs{
                                                Bucket: sdk.String("eum"),
                                                Generation: sdk.String("mollitia"),
                                                Object: sdk.String("ab"),
                                            },
                                            LocalPath: sdk.String("corrupti"),
                                            Remote: &shared.OSPolicyResourceFileRemote{
                                                Sha256Checksum: sdk.String("non"),
                                                URI: sdk.String("http://easy-going-mountain.biz"),
                                            },
                                        },
                                        Path: sdk.String("impedit"),
                                        Permissions: sdk.String("explicabo"),
                                        State: shared.OSPolicyResourceFileResourceStateEnumPresent.ToPointer(),
                                    },
                                    ID: sdk.String("071f93f5-f064-42da-87af-515cc413aa63"),
                                    Pkg: &shared.OSPolicyResourcePackageResource{
                                        Apt: &shared.OSPolicyResourcePackageResourceAPT{
                                            Name: sdk.String("Rex Walter"),
                                        },
                                        Deb: &shared.OSPolicyResourcePackageResourceDeb{
                                            PullDeps: sdk.Bool(false),
                                            Source: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("vel"),
                                                    Generation: sdk.String("ducimus"),
                                                    Object: sdk.String("quos"),
                                                },
                                                LocalPath: sdk.String("vel"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("labore"),
                                                    URI: sdk.String("https://rowdy-repair.info"),
                                                },
                                            },
                                        },
                                        DesiredState: shared.OSPolicyResourcePackageResourceDesiredStateEnumInstalled.ToPointer(),
                                        Googet: &shared.OSPolicyResourcePackageResourceGooGet{
                                            Name: sdk.String("Lela Shields"),
                                        },
                                        Msi: &shared.OSPolicyResourcePackageResourceMSI{
                                            Properties: []string{
                                                "aperiam",
                                                "cum",
                                            },
                                            Source: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("consectetur"),
                                                    Generation: sdk.String("in"),
                                                    Object: sdk.String("exercitationem"),
                                                },
                                                LocalPath: sdk.String("earum"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("facere"),
                                                    URI: sdk.String("http://worst-genie.org"),
                                                },
                                            },
                                        },
                                        Rpm: &shared.OSPolicyResourcePackageResourceRPM{
                                            PullDeps: sdk.Bool(false),
                                            Source: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("quidem"),
                                                    Generation: sdk.String("saepe"),
                                                    Object: sdk.String("necessitatibus"),
                                                },
                                                LocalPath: sdk.String("dolore"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("sunt"),
                                                    URI: sdk.String("https://essential-dentist.biz"),
                                                },
                                            },
                                        },
                                        Yum: &shared.OSPolicyResourcePackageResourceYUM{
                                            Name: sdk.String("Courtney Wiegand"),
                                        },
                                        Zypper: &shared.OSPolicyResourcePackageResourceZypper{
                                            Name: sdk.String("Dr. Maryann Howe"),
                                        },
                                    },
                                    Repository: &shared.OSPolicyResourceRepositoryResource{
                                        Apt: &shared.OSPolicyResourceRepositoryResourceAptRepository{
                                            ArchiveType: shared.OSPolicyResourceRepositoryResourceAptRepositoryArchiveTypeEnumArchiveTypeUnspecified.ToPointer(),
                                            Components: []string{
                                                "similique",
                                                "tempora",
                                                "aspernatur",
                                                "voluptas",
                                            },
                                            Distribution: sdk.String("voluptas"),
                                            GpgKey: sdk.String("voluptas"),
                                            URI: sdk.String("http://showy-porpoise.biz"),
                                        },
                                        Goo: &shared.OSPolicyResourceRepositoryResourceGooRepository{
                                            Name: sdk.String("Ernest Labadie"),
                                            URL: sdk.String("aliquam"),
                                        },
                                        Yum: &shared.OSPolicyResourceRepositoryResourceYumRepository{
                                            BaseURL: sdk.String("officiis"),
                                            DisplayName: sdk.String("temporibus"),
                                            GpgKeys: []string{
                                                "adipisci",
                                                "cum",
                                            },
                                            ID: sdk.String("88f3a8d8-f5c0-4b2f-afb7-b194a276b269"),
                                        },
                                        Zypper: &shared.OSPolicyResourceRepositoryResourceZypperRepository{
                                            BaseURL: sdk.String("architecto"),
                                            DisplayName: sdk.String("suscipit"),
                                            GpgKeys: []string{
                                                "debitis",
                                                "illo",
                                                "reiciendis",
                                                "perferendis",
                                            },
                                            ID: sdk.String("8f4294e3-698f-4447-b603-e8b445e80ca5"),
                                        },
                                    },
                                },
                                shared.OSPolicyResource{
                                    Exec: &shared.OSPolicyResourceExecResource{
                                        Enforce: &shared.OSPolicyResourceExecResourceExec{
                                            Args: []string{
                                                "recusandae",
                                                "reiciendis",
                                            },
                                            File: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("nulla"),
                                                    Generation: sdk.String("magni"),
                                                    Object: sdk.String("aperiam"),
                                                },
                                                LocalPath: sdk.String("saepe"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("numquam"),
                                                    URI: sdk.String("http://international-tax.com"),
                                                },
                                            },
                                            Interpreter: shared.OSPolicyResourceExecResourceExecInterpreterEnumShell.ToPointer(),
                                            OutputFilePath: sdk.String("exercitationem"),
                                            Script: sdk.String("praesentium"),
                                        },
                                        Validate: &shared.OSPolicyResourceExecResourceExec{
                                            Args: []string{
                                                "laboriosam",
                                                "dolorum",
                                                "voluptatum",
                                            },
                                            File: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("error"),
                                                    Generation: sdk.String("hic"),
                                                    Object: sdk.String("expedita"),
                                                },
                                                LocalPath: sdk.String("debitis"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("neque"),
                                                    URI: sdk.String("https://good-natured-pate.net"),
                                                },
                                            },
                                            Interpreter: shared.OSPolicyResourceExecResourceExecInterpreterEnumShell.ToPointer(),
                                            OutputFilePath: sdk.String("accusamus"),
                                            Script: sdk.String("tempora"),
                                        },
                                    },
                                    File: &shared.OSPolicyResourceFileResource{
                                        Content: sdk.String("atque"),
                                        File: &shared.OSPolicyResourceFile{
                                            AllowInsecure: sdk.Bool(false),
                                            Gcs: &shared.OSPolicyResourceFileGcs{
                                                Bucket: sdk.String("fugit"),
                                                Generation: sdk.String("ut"),
                                                Object: sdk.String("fugiat"),
                                            },
                                            LocalPath: sdk.String("voluptatem"),
                                            Remote: &shared.OSPolicyResourceFileRemote{
                                                Sha256Checksum: sdk.String("culpa"),
                                                URI: sdk.String("https://forceful-activity.info"),
                                            },
                                        },
                                        Path: sdk.String("ipsam"),
                                        Permissions: sdk.String("sit"),
                                        State: shared.OSPolicyResourceFileResourceStateEnumAbsent.ToPointer(),
                                    },
                                    ID: sdk.String("8e518620-65e9-404f-bb11-94b8abf603a7"),
                                    Pkg: &shared.OSPolicyResourcePackageResource{
                                        Apt: &shared.OSPolicyResourcePackageResourceAPT{
                                            Name: sdk.String("Boyd McKenzie"),
                                        },
                                        Deb: &shared.OSPolicyResourcePackageResourceDeb{
                                            PullDeps: sdk.Bool(false),
                                            Source: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("voluptates"),
                                                    Generation: sdk.String("perferendis"),
                                                    Object: sdk.String("est"),
                                                },
                                                LocalPath: sdk.String("quidem"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("reprehenderit"),
                                                    URI: sdk.String("https://reasonable-lever.name"),
                                                },
                                            },
                                        },
                                        DesiredState: shared.OSPolicyResourcePackageResourceDesiredStateEnumInstalled.ToPointer(),
                                        Googet: &shared.OSPolicyResourcePackageResourceGooGet{
                                            Name: sdk.String("Ms. Alexandra VonRueden"),
                                        },
                                        Msi: &shared.OSPolicyResourcePackageResourceMSI{
                                            Properties: []string{
                                                "totam",
                                                "suscipit",
                                                "quidem",
                                                "maxime",
                                            },
                                            Source: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("et"),
                                                    Generation: sdk.String("esse"),
                                                    Object: sdk.String("amet"),
                                                },
                                                LocalPath: sdk.String("assumenda"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("ea"),
                                                    URI: sdk.String("https://physical-tap.org"),
                                                },
                                            },
                                        },
                                        Rpm: &shared.OSPolicyResourcePackageResourceRPM{
                                            PullDeps: sdk.Bool(false),
                                            Source: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("accusamus"),
                                                    Generation: sdk.String("natus"),
                                                    Object: sdk.String("minima"),
                                                },
                                                LocalPath: sdk.String("aspernatur"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("ex"),
                                                    URI: sdk.String("https://moral-supermarket.name"),
                                                },
                                            },
                                        },
                                        Yum: &shared.OSPolicyResourcePackageResourceYUM{
                                            Name: sdk.String("Shane Walker"),
                                        },
                                        Zypper: &shared.OSPolicyResourcePackageResourceZypper{
                                            Name: sdk.String("Delia Parisian"),
                                        },
                                    },
                                    Repository: &shared.OSPolicyResourceRepositoryResource{
                                        Apt: &shared.OSPolicyResourceRepositoryResourceAptRepository{
                                            ArchiveType: shared.OSPolicyResourceRepositoryResourceAptRepositoryArchiveTypeEnumDebSrc.ToPointer(),
                                            Components: []string{
                                                "repudiandae",
                                            },
                                            Distribution: sdk.String("dicta"),
                                            GpgKey: sdk.String("accusantium"),
                                            URI: sdk.String("http://decisive-estate.info"),
                                        },
                                        Goo: &shared.OSPolicyResourceRepositoryResourceGooRepository{
                                            Name: sdk.String("Elsa Maggio"),
                                            URL: sdk.String("consequuntur"),
                                        },
                                        Yum: &shared.OSPolicyResourceRepositoryResourceYumRepository{
                                            BaseURL: sdk.String("occaecati"),
                                            DisplayName: sdk.String("officiis"),
                                            GpgKeys: []string{
                                                "in",
                                                "adipisci",
                                                "eveniet",
                                            },
                                            ID: sdk.String("922a57a1-5be3-4e06-8807-e2b6e3ab8845"),
                                        },
                                        Zypper: &shared.OSPolicyResourceRepositoryResourceZypperRepository{
                                            BaseURL: sdk.String("repellat"),
                                            DisplayName: sdk.String("alias"),
                                            GpgKeys: []string{
                                                "perspiciatis",
                                                "nihil",
                                            },
                                            ID: sdk.String("a60ff2a5-4a31-4e94-b64a-3e865e7956f9"),
                                        },
                                    },
                                },
                            },
                        },
                        shared.OSPolicyResourceGroup{
                            InventoryFilters: []shared.OSPolicyInventoryFilter{
                                shared.OSPolicyInventoryFilter{
                                    OsShortName: sdk.String("ullam"),
                                    OsVersion: sdk.String("quasi"),
                                },
                            },
                            Resources: []shared.OSPolicyResource{
                                shared.OSPolicyResource{
                                    Exec: &shared.OSPolicyResourceExecResource{
                                        Enforce: &shared.OSPolicyResourceExecResourceExec{
                                            Args: []string{
                                                "mollitia",
                                                "provident",
                                            },
                                            File: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("possimus"),
                                                    Generation: sdk.String("animi"),
                                                    Object: sdk.String("ex"),
                                                },
                                                LocalPath: sdk.String("aliquid"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("accusantium"),
                                                    URI: sdk.String("https://worse-fledgling.info"),
                                                },
                                            },
                                            Interpreter: shared.OSPolicyResourceExecResourceExecInterpreterEnumShell.ToPointer(),
                                            OutputFilePath: sdk.String("earum"),
                                            Script: sdk.String("officia"),
                                        },
                                        Validate: &shared.OSPolicyResourceExecResourceExec{
                                            Args: []string{
                                                "placeat",
                                                "modi",
                                                "voluptatibus",
                                            },
                                            File: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("molestias"),
                                                    Generation: sdk.String("officiis"),
                                                    Object: sdk.String("sapiente"),
                                                },
                                                LocalPath: sdk.String("cumque"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("vitae"),
                                                    URI: sdk.String("https://fatal-fashion.com"),
                                                },
                                            },
                                            Interpreter: shared.OSPolicyResourceExecResourceExecInterpreterEnumInterpreterUnspecified.ToPointer(),
                                            OutputFilePath: sdk.String("cumque"),
                                            Script: sdk.String("quae"),
                                        },
                                    },
                                    File: &shared.OSPolicyResourceFileResource{
                                        Content: sdk.String("perferendis"),
                                        File: &shared.OSPolicyResourceFile{
                                            AllowInsecure: sdk.Bool(false),
                                            Gcs: &shared.OSPolicyResourceFileGcs{
                                                Bucket: sdk.String("velit"),
                                                Generation: sdk.String("aspernatur"),
                                                Object: sdk.String("eum"),
                                            },
                                            LocalPath: sdk.String("eius"),
                                            Remote: &shared.OSPolicyResourceFileRemote{
                                                Sha256Checksum: sdk.String("rem"),
                                                URI: sdk.String("https://sociable-collapse.org"),
                                            },
                                        },
                                        Path: sdk.String("eum"),
                                        Permissions: sdk.String("dicta"),
                                        State: shared.OSPolicyResourceFileResourceStateEnumPresent.ToPointer(),
                                    },
                                    ID: sdk.String("199ebfd0-e9fe-46c6-b2ca-3aed01179963"),
                                    Pkg: &shared.OSPolicyResourcePackageResource{
                                        Apt: &shared.OSPolicyResourcePackageResourceAPT{
                                            Name: sdk.String("Anne Wyman"),
                                        },
                                        Deb: &shared.OSPolicyResourcePackageResourceDeb{
                                            PullDeps: sdk.Bool(false),
                                            Source: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("ipsa"),
                                                    Generation: sdk.String("tempora"),
                                                    Object: sdk.String("nihil"),
                                                },
                                                LocalPath: sdk.String("molestiae"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("dicta"),
                                                    URI: sdk.String("http://joyful-lentil.org"),
                                                },
                                            },
                                        },
                                        DesiredState: shared.OSPolicyResourcePackageResourceDesiredStateEnumRemoved.ToPointer(),
                                        Googet: &shared.OSPolicyResourcePackageResourceGooGet{
                                            Name: sdk.String("Mr. Diane Stiedemann"),
                                        },
                                        Msi: &shared.OSPolicyResourcePackageResourceMSI{
                                            Properties: []string{
                                                "esse",
                                                "ex",
                                            },
                                            Source: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("consectetur"),
                                                    Generation: sdk.String("aliquid"),
                                                    Object: sdk.String("ipsa"),
                                                },
                                                LocalPath: sdk.String("laborum"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("sunt"),
                                                    URI: sdk.String("http://thunderous-quill.info"),
                                                },
                                            },
                                        },
                                        Rpm: &shared.OSPolicyResourcePackageResourceRPM{
                                            PullDeps: sdk.Bool(false),
                                            Source: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("officia"),
                                                    Generation: sdk.String("suscipit"),
                                                    Object: sdk.String("aliquid"),
                                                },
                                                LocalPath: sdk.String("perferendis"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("eum"),
                                                    URI: sdk.String("http://peaceful-pinafore.com"),
                                                },
                                            },
                                        },
                                        Yum: &shared.OSPolicyResourcePackageResourceYUM{
                                            Name: sdk.String("Woodrow Volkman"),
                                        },
                                        Zypper: &shared.OSPolicyResourcePackageResourceZypper{
                                            Name: sdk.String("Derek Leuschke PhD"),
                                        },
                                    },
                                    Repository: &shared.OSPolicyResourceRepositoryResource{
                                        Apt: &shared.OSPolicyResourceRepositoryResourceAptRepository{
                                            ArchiveType: shared.OSPolicyResourceRepositoryResourceAptRepositoryArchiveTypeEnumDeb.ToPointer(),
                                            Components: []string{
                                                "ex",
                                                "ut",
                                                "ad",
                                                "expedita",
                                            },
                                            Distribution: sdk.String("voluptatem"),
                                            GpgKey: sdk.String("molestias"),
                                            URI: sdk.String("https://icky-brow.name"),
                                        },
                                        Goo: &shared.OSPolicyResourceRepositoryResourceGooRepository{
                                            Name: sdk.String("Peter Prosacco"),
                                            URL: sdk.String("voluptatem"),
                                        },
                                        Yum: &shared.OSPolicyResourceRepositoryResourceYumRepository{
                                            BaseURL: sdk.String("sapiente"),
                                            DisplayName: sdk.String("officiis"),
                                            GpgKeys: []string{
                                                "fuga",
                                            },
                                            ID: sdk.String("de008e6f-8c5f-4350-98cd-b5a341814301"),
                                        },
                                        Zypper: &shared.OSPolicyResourceRepositoryResourceZypperRepository{
                                            BaseURL: sdk.String("sit"),
                                            DisplayName: sdk.String("modi"),
                                            GpgKeys: []string{
                                                "ab",
                                            },
                                            ID: sdk.String("813d5208-ece7-4e25-bb66-8451c6c6e205"),
                                        },
                                    },
                                },
                                shared.OSPolicyResource{
                                    Exec: &shared.OSPolicyResourceExecResource{
                                        Enforce: &shared.OSPolicyResourceExecResourceExec{
                                            Args: []string{
                                                "quasi",
                                                "nisi",
                                                "at",
                                                "vero",
                                            },
                                            File: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("est"),
                                                    Generation: sdk.String("harum"),
                                                    Object: sdk.String("sequi"),
                                                },
                                                LocalPath: sdk.String("doloribus"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("repudiandae"),
                                                    URI: sdk.String("https://obedient-fowl.info"),
                                                },
                                            },
                                            Interpreter: shared.OSPolicyResourceExecResourceExecInterpreterEnumShell.ToPointer(),
                                            OutputFilePath: sdk.String("officia"),
                                            Script: sdk.String("voluptas"),
                                        },
                                        Validate: &shared.OSPolicyResourceExecResourceExec{
                                            Args: []string{
                                                "nemo",
                                                "quos",
                                            },
                                            File: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("eius"),
                                                    Generation: sdk.String("aspernatur"),
                                                    Object: sdk.String("ducimus"),
                                                },
                                                LocalPath: sdk.String("nesciunt"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("fuga"),
                                                    URI: sdk.String("https://feline-boss.name"),
                                                },
                                            },
                                            Interpreter: shared.OSPolicyResourceExecResourceExecInterpreterEnumPowershell.ToPointer(),
                                            OutputFilePath: sdk.String("dicta"),
                                            Script: sdk.String("nisi"),
                                        },
                                    },
                                    File: &shared.OSPolicyResourceFileResource{
                                        Content: sdk.String("consequuntur"),
                                        File: &shared.OSPolicyResourceFile{
                                            AllowInsecure: sdk.Bool(false),
                                            Gcs: &shared.OSPolicyResourceFileGcs{
                                                Bucket: sdk.String("consectetur"),
                                                Generation: sdk.String("aperiam"),
                                                Object: sdk.String("cupiditate"),
                                            },
                                            LocalPath: sdk.String("reiciendis"),
                                            Remote: &shared.OSPolicyResourceFileRemote{
                                                Sha256Checksum: sdk.String("soluta"),
                                                URI: sdk.String("http://paltry-coke.name"),
                                            },
                                        },
                                        Path: sdk.String("iste"),
                                        Permissions: sdk.String("magni"),
                                        State: shared.OSPolicyResourceFileResourceStateEnumDesiredStateUnspecified.ToPointer(),
                                    },
                                    ID: sdk.String("aefb9f58-c4d8-46e6-8e4b-e056013f59da"),
                                    Pkg: &shared.OSPolicyResourcePackageResource{
                                        Apt: &shared.OSPolicyResourcePackageResourceAPT{
                                            Name: sdk.String("Ida Kilback"),
                                        },
                                        Deb: &shared.OSPolicyResourcePackageResourceDeb{
                                            PullDeps: sdk.Bool(false),
                                            Source: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("sint"),
                                                    Generation: sdk.String("accusamus"),
                                                    Object: sdk.String("impedit"),
                                                },
                                                LocalPath: sdk.String("hic"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("necessitatibus"),
                                                    URI: sdk.String("https://idiotic-garlic.org"),
                                                },
                                            },
                                        },
                                        DesiredState: shared.OSPolicyResourcePackageResourceDesiredStateEnumRemoved.ToPointer(),
                                        Googet: &shared.OSPolicyResourcePackageResourceGooGet{
                                            Name: sdk.String("Alexandra Pfannerstill"),
                                        },
                                        Msi: &shared.OSPolicyResourcePackageResourceMSI{
                                            Properties: []string{
                                                "atque",
                                            },
                                            Source: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("ipsum"),
                                                    Generation: sdk.String("impedit"),
                                                    Object: sdk.String("magni"),
                                                },
                                                LocalPath: sdk.String("soluta"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("repudiandae"),
                                                    URI: sdk.String("https://flowery-jug.info"),
                                                },
                                            },
                                        },
                                        Rpm: &shared.OSPolicyResourcePackageResourceRPM{
                                            PullDeps: sdk.Bool(false),
                                            Source: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("sequi"),
                                                    Generation: sdk.String("dignissimos"),
                                                    Object: sdk.String("neque"),
                                                },
                                                LocalPath: sdk.String("quo"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("deleniti"),
                                                    URI: sdk.String("https://insecure-catsup.org"),
                                                },
                                            },
                                        },
                                        Yum: &shared.OSPolicyResourcePackageResourceYUM{
                                            Name: sdk.String("Dr. Megan Spinka"),
                                        },
                                        Zypper: &shared.OSPolicyResourcePackageResourceZypper{
                                            Name: sdk.String("Camille Crist"),
                                        },
                                    },
                                    Repository: &shared.OSPolicyResourceRepositoryResource{
                                        Apt: &shared.OSPolicyResourceRepositoryResourceAptRepository{
                                            ArchiveType: shared.OSPolicyResourceRepositoryResourceAptRepositoryArchiveTypeEnumArchiveTypeUnspecified.ToPointer(),
                                            Components: []string{
                                                "accusantium",
                                            },
                                            Distribution: sdk.String("vel"),
                                            GpgKey: sdk.String("ea"),
                                            URI: sdk.String("http://twin-mist.info"),
                                        },
                                        Goo: &shared.OSPolicyResourceRepositoryResourceGooRepository{
                                            Name: sdk.String("Leslie Metz DDS"),
                                            URL: sdk.String("voluptatibus"),
                                        },
                                        Yum: &shared.OSPolicyResourceRepositoryResourceYumRepository{
                                            BaseURL: sdk.String("iste"),
                                            DisplayName: sdk.String("itaque"),
                                            GpgKeys: []string{
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
                                shared.OSPolicyResource{
                                    Exec: &shared.OSPolicyResourceExecResource{
                                        Enforce: &shared.OSPolicyResourceExecResourceExec{
                                            Args: []string{
                                                "id",
                                            },
                                            File: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("libero"),
                                                    Generation: sdk.String("fugiat"),
                                                    Object: sdk.String("officia"),
                                                },
                                                LocalPath: sdk.String("quos"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("placeat"),
                                                    URI: sdk.String("http://lavish-back.org"),
                                                },
                                            },
                                            Interpreter: shared.OSPolicyResourceExecResourceExecInterpreterEnumInterpreterUnspecified.ToPointer(),
                                            OutputFilePath: sdk.String("aperiam"),
                                            Script: sdk.String("totam"),
                                        },
                                        Validate: &shared.OSPolicyResourceExecResourceExec{
                                            Args: []string{
                                                "eligendi",
                                                "distinctio",
                                            },
                                            File: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("voluptatem"),
                                                    Generation: sdk.String("autem"),
                                                    Object: sdk.String("esse"),
                                                },
                                                LocalPath: sdk.String("dolores"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("assumenda"),
                                                    URI: sdk.String("http://queasy-smoking.name"),
                                                },
                                            },
                                            Interpreter: shared.OSPolicyResourceExecResourceExecInterpreterEnumNone.ToPointer(),
                                            OutputFilePath: sdk.String("provident"),
                                            Script: sdk.String("accusamus"),
                                        },
                                    },
                                    File: &shared.OSPolicyResourceFileResource{
                                        Content: sdk.String("necessitatibus"),
                                        File: &shared.OSPolicyResourceFile{
                                            AllowInsecure: sdk.Bool(false),
                                            Gcs: &shared.OSPolicyResourceFileGcs{
                                                Bucket: sdk.String("tempore"),
                                                Generation: sdk.String("sint"),
                                                Object: sdk.String("ea"),
                                            },
                                            LocalPath: sdk.String("autem"),
                                            Remote: &shared.OSPolicyResourceFileRemote{
                                                Sha256Checksum: sdk.String("ipsam"),
                                                URI: sdk.String("https://mammoth-following.org"),
                                            },
                                        },
                                        Path: sdk.String("voluptatibus"),
                                        Permissions: sdk.String("cum"),
                                        State: shared.OSPolicyResourceFileResourceStateEnumContentsMatch.ToPointer(),
                                    },
                                    ID: sdk.String("02bae0be-2d78-4225-9e3e-a4b5197f9244"),
                                    Pkg: &shared.OSPolicyResourcePackageResource{
                                        Apt: &shared.OSPolicyResourcePackageResourceAPT{
                                            Name: sdk.String("Cristina Nienow"),
                                        },
                                        Deb: &shared.OSPolicyResourcePackageResourceDeb{
                                            PullDeps: sdk.Bool(false),
                                            Source: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("necessitatibus"),
                                                    Generation: sdk.String("corporis"),
                                                    Object: sdk.String("qui"),
                                                },
                                                LocalPath: sdk.String("expedita"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("voluptatum"),
                                                    URI: sdk.String("https://generous-site.biz"),
                                                },
                                            },
                                        },
                                        DesiredState: shared.OSPolicyResourcePackageResourceDesiredStateEnumDesiredStateUnspecified.ToPointer(),
                                        Googet: &shared.OSPolicyResourcePackageResourceGooGet{
                                            Name: sdk.String("Sadie Kemmer"),
                                        },
                                        Msi: &shared.OSPolicyResourcePackageResourceMSI{
                                            Properties: []string{
                                                "voluptates",
                                                "maiores",
                                            },
                                            Source: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("tempore"),
                                                    Generation: sdk.String("aperiam"),
                                                    Object: sdk.String("libero"),
                                                },
                                                LocalPath: sdk.String("ratione"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("labore"),
                                                    URI: sdk.String("https://numb-gap.net"),
                                                },
                                            },
                                        },
                                        Rpm: &shared.OSPolicyResourcePackageResourceRPM{
                                            PullDeps: sdk.Bool(false),
                                            Source: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("velit"),
                                                    Generation: sdk.String("minus"),
                                                    Object: sdk.String("fuga"),
                                                },
                                                LocalPath: sdk.String("nostrum"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("est"),
                                                    URI: sdk.String("https://whirlwind-reliability.org"),
                                                },
                                            },
                                        },
                                        Yum: &shared.OSPolicyResourcePackageResourceYUM{
                                            Name: sdk.String("Winifred Streich"),
                                        },
                                        Zypper: &shared.OSPolicyResourcePackageResourceZypper{
                                            Name: sdk.String("Viola Hane"),
                                        },
                                    },
                                    Repository: &shared.OSPolicyResourceRepositoryResource{
                                        Apt: &shared.OSPolicyResourceRepositoryResourceAptRepository{
                                            ArchiveType: shared.OSPolicyResourceRepositoryResourceAptRepositoryArchiveTypeEnumDeb.ToPointer(),
                                            Components: []string{
                                                "error",
                                            },
                                            Distribution: sdk.String("veritatis"),
                                            GpgKey: sdk.String("ducimus"),
                                            URI: sdk.String("http://tragic-tuba.name"),
                                        },
                                        Goo: &shared.OSPolicyResourceRepositoryResourceGooRepository{
                                            Name: sdk.String("Marc Hahn"),
                                            URL: sdk.String("placeat"),
                                        },
                                        Yum: &shared.OSPolicyResourceRepositoryResourceYumRepository{
                                            BaseURL: sdk.String("quidem"),
                                            DisplayName: sdk.String("exercitationem"),
                                            GpgKeys: []string{
                                                "dolorem",
                                                "modi",
                                            },
                                            ID: sdk.String("09e3eb1e-5a2b-412e-b07f-116db99545fc"),
                                        },
                                        Zypper: &shared.OSPolicyResourceRepositoryResourceZypperRepository{
                                            BaseURL: sdk.String("sint"),
                                            DisplayName: sdk.String("enim"),
                                            GpgKeys: []string{
                                                "animi",
                                                "quas",
                                                "totam",
                                                "molestias",
                                            },
                                            ID: sdk.String("70e189db-b30f-4cb3-bea0-55b197cd44e2"),
                                        },
                                    },
                                },
                            },
                        },
                    },
                },
                shared.OSPolicy{
                    AllowNoResourceGroupMatch: sdk.Bool(false),
                    Description: sdk.String("asperiores"),
                    ID: sdk.String("52d82d35-13bb-46f4-8b65-6bcdb35ff2e4"),
                    Mode: shared.OSPolicyModeEnumEnforcement.ToPointer(),
                    ResourceGroups: []shared.OSPolicyResourceGroup{
                        shared.OSPolicyResourceGroup{
                            InventoryFilters: []shared.OSPolicyInventoryFilter{
                                shared.OSPolicyInventoryFilter{
                                    OsShortName: sdk.String("nostrum"),
                                    OsVersion: sdk.String("neque"),
                                },
                                shared.OSPolicyInventoryFilter{
                                    OsShortName: sdk.String("iusto"),
                                    OsVersion: sdk.String("est"),
                                },
                            },
                            Resources: []shared.OSPolicyResource{
                                shared.OSPolicyResource{
                                    Exec: &shared.OSPolicyResourceExecResource{
                                        Enforce: &shared.OSPolicyResourceExecResourceExec{
                                            Args: []string{
                                                "fugiat",
                                                "unde",
                                                "officiis",
                                                "ducimus",
                                            },
                                            File: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("dolor"),
                                                    Generation: sdk.String("dicta"),
                                                    Object: sdk.String("error"),
                                                },
                                                LocalPath: sdk.String("porro"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("vitae"),
                                                    URI: sdk.String("http://jubilant-stimulus.biz"),
                                                },
                                            },
                                            Interpreter: shared.OSPolicyResourceExecResourceExecInterpreterEnumInterpreterUnspecified.ToPointer(),
                                            OutputFilePath: sdk.String("enim"),
                                            Script: sdk.String("delectus"),
                                        },
                                        Validate: &shared.OSPolicyResourceExecResourceExec{
                                            Args: []string{
                                                "dignissimos",
                                                "libero",
                                            },
                                            File: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("illo"),
                                                    Generation: sdk.String("ab"),
                                                    Object: sdk.String("incidunt"),
                                                },
                                                LocalPath: sdk.String("accusamus"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("saepe"),
                                                    URI: sdk.String("https://gleaming-codepage.org"),
                                                },
                                            },
                                            Interpreter: shared.OSPolicyResourceExecResourceExecInterpreterEnumPowershell.ToPointer(),
                                            OutputFilePath: sdk.String("reprehenderit"),
                                            Script: sdk.String("praesentium"),
                                        },
                                    },
                                    File: &shared.OSPolicyResourceFileResource{
                                        Content: sdk.String("nemo"),
                                        File: &shared.OSPolicyResourceFile{
                                            AllowInsecure: sdk.Bool(false),
                                            Gcs: &shared.OSPolicyResourceFileGcs{
                                                Bucket: sdk.String("repellat"),
                                                Generation: sdk.String("quisquam"),
                                                Object: sdk.String("sequi"),
                                            },
                                            LocalPath: sdk.String("nihil"),
                                            Remote: &shared.OSPolicyResourceFileRemote{
                                                Sha256Checksum: sdk.String("deleniti"),
                                                URI: sdk.String("http://flawed-sourwood.biz"),
                                            },
                                        },
                                        Path: sdk.String("quisquam"),
                                        Permissions: sdk.String("provident"),
                                        State: shared.OSPolicyResourceFileResourceStateEnumAbsent.ToPointer(),
                                    },
                                    ID: sdk.String("e0c2bb89-eb75-4dad-a36c-600503d8bb31"),
                                    Pkg: &shared.OSPolicyResourcePackageResource{
                                        Apt: &shared.OSPolicyResourcePackageResourceAPT{
                                            Name: sdk.String("Myrtle Bauch"),
                                        },
                                        Deb: &shared.OSPolicyResourcePackageResourceDeb{
                                            PullDeps: sdk.Bool(false),
                                            Source: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("amet"),
                                                    Generation: sdk.String("provident"),
                                                    Object: sdk.String("dolorum"),
                                                },
                                                LocalPath: sdk.String("necessitatibus"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("provident"),
                                                    URI: sdk.String("https://active-freckle.info"),
                                                },
                                            },
                                        },
                                        DesiredState: shared.OSPolicyResourcePackageResourceDesiredStateEnumRemoved.ToPointer(),
                                        Googet: &shared.OSPolicyResourcePackageResourceGooGet{
                                            Name: sdk.String("Johnnie Baumbach"),
                                        },
                                        Msi: &shared.OSPolicyResourcePackageResourceMSI{
                                            Properties: []string{
                                                "totam",
                                            },
                                            Source: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("dicta"),
                                                    Generation: sdk.String("voluptatem"),
                                                    Object: sdk.String("velit"),
                                                },
                                                LocalPath: sdk.String("dolor"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("sunt"),
                                                    URI: sdk.String("https://edible-mukluk.name"),
                                                },
                                            },
                                        },
                                        Rpm: &shared.OSPolicyResourcePackageResourceRPM{
                                            PullDeps: sdk.Bool(false),
                                            Source: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("beatae"),
                                                    Generation: sdk.String("at"),
                                                    Object: sdk.String("labore"),
                                                },
                                                LocalPath: sdk.String("minus"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("esse"),
                                                    URI: sdk.String("http://agonizing-promise.info"),
                                                },
                                            },
                                        },
                                        Yum: &shared.OSPolicyResourcePackageResourceYUM{
                                            Name: sdk.String("Courtney Zulauf"),
                                        },
                                        Zypper: &shared.OSPolicyResourcePackageResourceZypper{
                                            Name: sdk.String("Vincent Romaguera"),
                                        },
                                    },
                                    Repository: &shared.OSPolicyResourceRepositoryResource{
                                        Apt: &shared.OSPolicyResourceRepositoryResourceAptRepository{
                                            ArchiveType: shared.OSPolicyResourceRepositoryResourceAptRepositoryArchiveTypeEnumDebSrc.ToPointer(),
                                            Components: []string{
                                                "temporibus",
                                                "officia",
                                                "amet",
                                            },
                                            Distribution: sdk.String("tenetur"),
                                            GpgKey: sdk.String("aspernatur"),
                                            URI: sdk.String("https://vigilant-station-wagon.net"),
                                        },
                                        Goo: &shared.OSPolicyResourceRepositoryResourceGooRepository{
                                            Name: sdk.String("Leigh Denesik"),
                                            URL: sdk.String("explicabo"),
                                        },
                                        Yum: &shared.OSPolicyResourceRepositoryResourceYumRepository{
                                            BaseURL: sdk.String("explicabo"),
                                            DisplayName: sdk.String("exercitationem"),
                                            GpgKeys: []string{
                                                "non",
                                                "ab",
                                            },
                                            ID: sdk.String("1faf4b75-44e4-472e-8028-57a5b40463a7"),
                                        },
                                        Zypper: &shared.OSPolicyResourceRepositoryResourceZypperRepository{
                                            BaseURL: sdk.String("fugiat"),
                                            DisplayName: sdk.String("nostrum"),
                                            GpgKeys: []string{
                                                "veniam",
                                                "reiciendis",
                                            },
                                            ID: sdk.String("1400e764-ad73-434e-81b7-81b36a08088d"),
                                        },
                                    },
                                },
                                shared.OSPolicyResource{
                                    Exec: &shared.OSPolicyResourceExecResource{
                                        Enforce: &shared.OSPolicyResourceExecResourceExec{
                                            Args: []string{
                                                "quae",
                                            },
                                            File: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("eaque"),
                                                    Generation: sdk.String("saepe"),
                                                    Object: sdk.String("delectus"),
                                                },
                                                LocalPath: sdk.String("mollitia"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("nulla"),
                                                    URI: sdk.String("https://creepy-anise.com"),
                                                },
                                            },
                                            Interpreter: shared.OSPolicyResourceExecResourceExecInterpreterEnumPowershell.ToPointer(),
                                            OutputFilePath: sdk.String("hic"),
                                            Script: sdk.String("voluptatem"),
                                        },
                                        Validate: &shared.OSPolicyResourceExecResourceExec{
                                            Args: []string{
                                                "qui",
                                                "qui",
                                            },
                                            File: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("necessitatibus"),
                                                    Generation: sdk.String("harum"),
                                                    Object: sdk.String("explicabo"),
                                                },
                                                LocalPath: sdk.String("beatae"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("aliquid"),
                                                    URI: sdk.String("http://skinny-webpage.name"),
                                                },
                                            },
                                            Interpreter: shared.OSPolicyResourceExecResourceExecInterpreterEnumShell.ToPointer(),
                                            OutputFilePath: sdk.String("libero"),
                                            Script: sdk.String("totam"),
                                        },
                                    },
                                    File: &shared.OSPolicyResourceFileResource{
                                        Content: sdk.String("sequi"),
                                        File: &shared.OSPolicyResourceFile{
                                            AllowInsecure: sdk.Bool(false),
                                            Gcs: &shared.OSPolicyResourceFileGcs{
                                                Bucket: sdk.String("aliquid"),
                                                Generation: sdk.String("ea"),
                                                Object: sdk.String("impedit"),
                                            },
                                            LocalPath: sdk.String("ducimus"),
                                            Remote: &shared.OSPolicyResourceFileRemote{
                                                Sha256Checksum: sdk.String("odit"),
                                                URI: sdk.String("http://wicked-zebrafish.org"),
                                            },
                                        },
                                        Path: sdk.String("laborum"),
                                        Permissions: sdk.String("natus"),
                                        State: shared.OSPolicyResourceFileResourceStateEnumContentsMatch.ToPointer(),
                                    },
                                    ID: sdk.String("06bee482-5c1f-4c0e-915c-80bff918544e"),
                                    Pkg: &shared.OSPolicyResourcePackageResource{
                                        Apt: &shared.OSPolicyResourcePackageResourceAPT{
                                            Name: sdk.String("Joel Cruickshank"),
                                        },
                                        Deb: &shared.OSPolicyResourcePackageResourceDeb{
                                            PullDeps: sdk.Bool(false),
                                            Source: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("doloribus"),
                                                    Generation: sdk.String("impedit"),
                                                    Object: sdk.String("porro"),
                                                },
                                                LocalPath: sdk.String("accusamus"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("totam"),
                                                    URI: sdk.String("https://beneficial-monitor.info"),
                                                },
                                            },
                                        },
                                        DesiredState: shared.OSPolicyResourcePackageResourceDesiredStateEnumInstalled.ToPointer(),
                                        Googet: &shared.OSPolicyResourcePackageResourceGooGet{
                                            Name: sdk.String("Lydia Douglas"),
                                        },
                                        Msi: &shared.OSPolicyResourcePackageResourceMSI{
                                            Properties: []string{
                                                "corporis",
                                            },
                                            Source: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("voluptas"),
                                                    Generation: sdk.String("consequuntur"),
                                                    Object: sdk.String("officia"),
                                                },
                                                LocalPath: sdk.String("reprehenderit"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("distinctio"),
                                                    URI: sdk.String("http://awesome-lode.org"),
                                                },
                                            },
                                        },
                                        Rpm: &shared.OSPolicyResourcePackageResourceRPM{
                                            PullDeps: sdk.Bool(false),
                                            Source: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("accusantium"),
                                                    Generation: sdk.String("veniam"),
                                                    Object: sdk.String("saepe"),
                                                },
                                                LocalPath: sdk.String("neque"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("facere"),
                                                    URI: sdk.String("http://mushy-winner.org"),
                                                },
                                            },
                                        },
                                        Yum: &shared.OSPolicyResourcePackageResourceYUM{
                                            Name: sdk.String("Mrs. Brendan Franecki"),
                                        },
                                        Zypper: &shared.OSPolicyResourcePackageResourceZypper{
                                            Name: sdk.String("Winifred Hettinger"),
                                        },
                                    },
                                    Repository: &shared.OSPolicyResourceRepositoryResource{
                                        Apt: &shared.OSPolicyResourceRepositoryResourceAptRepository{
                                            ArchiveType: shared.OSPolicyResourceRepositoryResourceAptRepositoryArchiveTypeEnumDeb.ToPointer(),
                                            Components: []string{
                                                "explicabo",
                                                "ipsam",
                                            },
                                            Distribution: sdk.String("cupiditate"),
                                            GpgKey: sdk.String("optio"),
                                            URI: sdk.String("http://repulsive-conspiracy.info"),
                                        },
                                        Goo: &shared.OSPolicyResourceRepositoryResourceGooRepository{
                                            Name: sdk.String("Bobby Harris"),
                                            URL: sdk.String("sint"),
                                        },
                                        Yum: &shared.OSPolicyResourceRepositoryResourceYumRepository{
                                            BaseURL: sdk.String("ut"),
                                            DisplayName: sdk.String("numquam"),
                                            GpgKeys: []string{
                                                "adipisci",
                                                "libero",
                                                "in",
                                                "minima",
                                            },
                                            ID: sdk.String("6c11f6c3-7a51-4262-8383-5bbc05a23a45"),
                                        },
                                        Zypper: &shared.OSPolicyResourceRepositoryResourceZypperRepository{
                                            BaseURL: sdk.String("quod"),
                                            DisplayName: sdk.String("itaque"),
                                            GpgKeys: []string{
                                                "quisquam",
                                                "enim",
                                                "doloribus",
                                                "assumenda",
                                            },
                                            ID: sdk.String("e10a0ce2-169e-4510-819c-6dc5e3476279"),
                                        },
                                    },
                                },
                                shared.OSPolicyResource{
                                    Exec: &shared.OSPolicyResourceExecResource{
                                        Enforce: &shared.OSPolicyResourceExecResourceExec{
                                            Args: []string{
                                                "cum",
                                                "doloribus",
                                                "facilis",
                                            },
                                            File: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("quidem"),
                                                    Generation: sdk.String("itaque"),
                                                    Object: sdk.String("laboriosam"),
                                                },
                                                LocalPath: sdk.String("unde"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("modi"),
                                                    URI: sdk.String("https://wasteful-reminder.com"),
                                                },
                                            },
                                            Interpreter: shared.OSPolicyResourceExecResourceExecInterpreterEnumShell.ToPointer(),
                                            OutputFilePath: sdk.String("nam"),
                                            Script: sdk.String("incidunt"),
                                        },
                                        Validate: &shared.OSPolicyResourceExecResourceExec{
                                            Args: []string{
                                                "quod",
                                                "id",
                                                "saepe",
                                                "autem",
                                            },
                                            File: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("quo"),
                                                    Generation: sdk.String("nesciunt"),
                                                    Object: sdk.String("illum"),
                                                },
                                                LocalPath: sdk.String("nemo"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("illum"),
                                                    URI: sdk.String("https://evil-perennial.net"),
                                                },
                                            },
                                            Interpreter: shared.OSPolicyResourceExecResourceExecInterpreterEnumPowershell.ToPointer(),
                                            OutputFilePath: sdk.String("distinctio"),
                                            Script: sdk.String("pariatur"),
                                        },
                                    },
                                    File: &shared.OSPolicyResourceFileResource{
                                        Content: sdk.String("ad"),
                                        File: &shared.OSPolicyResourceFile{
                                            AllowInsecure: sdk.Bool(false),
                                            Gcs: &shared.OSPolicyResourceFileGcs{
                                                Bucket: sdk.String("facere"),
                                                Generation: sdk.String("laborum"),
                                                Object: sdk.String("eveniet"),
                                            },
                                            LocalPath: sdk.String("laborum"),
                                            Remote: &shared.OSPolicyResourceFileRemote{
                                                Sha256Checksum: sdk.String("incidunt"),
                                                URI: sdk.String("https://happy-go-lucky-atm.info"),
                                            },
                                        },
                                        Path: sdk.String("deserunt"),
                                        Permissions: sdk.String("molestias"),
                                        State: shared.OSPolicyResourceFileResourceStateEnumAbsent.ToPointer(),
                                    },
                                    ID: sdk.String("a94c0264-4cf5-4e9d-9a45-78adc1ac600d"),
                                    Pkg: &shared.OSPolicyResourcePackageResource{
                                        Apt: &shared.OSPolicyResourcePackageResourceAPT{
                                            Name: sdk.String("Mr. Simon Altenwerth"),
                                        },
                                        Deb: &shared.OSPolicyResourcePackageResourceDeb{
                                            PullDeps: sdk.Bool(false),
                                            Source: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("porro"),
                                                    Generation: sdk.String("blanditiis"),
                                                    Object: sdk.String("quae"),
                                                },
                                                LocalPath: sdk.String("magni"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("officiis"),
                                                    URI: sdk.String("http://unpleasant-scarf.com"),
                                                },
                                            },
                                        },
                                        DesiredState: shared.OSPolicyResourcePackageResourceDesiredStateEnumInstalled.ToPointer(),
                                        Googet: &shared.OSPolicyResourcePackageResourceGooGet{
                                            Name: sdk.String("Cary Larkin DVM"),
                                        },
                                        Msi: &shared.OSPolicyResourcePackageResourceMSI{
                                            Properties: []string{
                                                "dicta",
                                                "suscipit",
                                                "earum",
                                            },
                                            Source: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("doloribus"),
                                                    Generation: sdk.String("velit"),
                                                    Object: sdk.String("eius"),
                                                },
                                                LocalPath: sdk.String("esse"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("in"),
                                                    URI: sdk.String("https://brown-controversy.org"),
                                                },
                                            },
                                        },
                                        Rpm: &shared.OSPolicyResourcePackageResourceRPM{
                                            PullDeps: sdk.Bool(false),
                                            Source: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("excepturi"),
                                                    Generation: sdk.String("accusantium"),
                                                    Object: sdk.String("qui"),
                                                },
                                                LocalPath: sdk.String("impedit"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("beatae"),
                                                    URI: sdk.String("http://chubby-catsup.info"),
                                                },
                                            },
                                        },
                                        Yum: &shared.OSPolicyResourcePackageResourceYUM{
                                            Name: sdk.String("Robert Muller MD"),
                                        },
                                        Zypper: &shared.OSPolicyResourcePackageResourceZypper{
                                            Name: sdk.String("Mrs. Vicki Luettgen V"),
                                        },
                                    },
                                    Repository: &shared.OSPolicyResourceRepositoryResource{
                                        Apt: &shared.OSPolicyResourceRepositoryResourceAptRepository{
                                            ArchiveType: shared.OSPolicyResourceRepositoryResourceAptRepositoryArchiveTypeEnumArchiveTypeUnspecified.ToPointer(),
                                            Components: []string{
                                                "magni",
                                                "deserunt",
                                            },
                                            Distribution: sdk.String("delectus"),
                                            GpgKey: sdk.String("omnis"),
                                            URI: sdk.String("http://disloyal-significance.info"),
                                        },
                                        Goo: &shared.OSPolicyResourceRepositoryResourceGooRepository{
                                            Name: sdk.String("Jay Marks"),
                                            URL: sdk.String("velit"),
                                        },
                                        Yum: &shared.OSPolicyResourceRepositoryResourceYumRepository{
                                            BaseURL: sdk.String("reiciendis"),
                                            DisplayName: sdk.String("amet"),
                                            GpgKeys: []string{
                                                "ipsa",
                                                "quisquam",
                                            },
                                            ID: sdk.String("f876ffb9-01c6-4ecb-b4e2-43cf789ffafe"),
                                        },
                                        Zypper: &shared.OSPolicyResourceRepositoryResourceZypperRepository{
                                            BaseURL: sdk.String("nulla"),
                                            DisplayName: sdk.String("deserunt"),
                                            GpgKeys: []string{
                                                "velit",
                                                "officiis",
                                            },
                                            ID: sdk.String("5ae6e0ac-184c-42b9-8247-c88373a40e19"),
                                        },
                                    },
                                },
                            },
                        },
                    },
                },
                shared.OSPolicy{
                    AllowNoResourceGroupMatch: sdk.Bool(false),
                    Description: sdk.String("dolore"),
                    ID: sdk.String("2f32e550-5575-46f5-956d-0bd0af2dfe13"),
                    Mode: shared.OSPolicyModeEnumEnforcement.ToPointer(),
                    ResourceGroups: []shared.OSPolicyResourceGroup{
                        shared.OSPolicyResourceGroup{
                            InventoryFilters: []shared.OSPolicyInventoryFilter{
                                shared.OSPolicyInventoryFilter{
                                    OsShortName: sdk.String("voluptatibus"),
                                    OsVersion: sdk.String("iure"),
                                },
                                shared.OSPolicyInventoryFilter{
                                    OsShortName: sdk.String("explicabo"),
                                    OsVersion: sdk.String("minus"),
                                },
                            },
                            Resources: []shared.OSPolicyResource{
                                shared.OSPolicyResource{
                                    Exec: &shared.OSPolicyResourceExecResource{
                                        Enforce: &shared.OSPolicyResourceExecResourceExec{
                                            Args: []string{
                                                "velit",
                                                "earum",
                                                "praesentium",
                                            },
                                            File: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("error"),
                                                    Generation: sdk.String("non"),
                                                    Object: sdk.String("quasi"),
                                                },
                                                LocalPath: sdk.String("mollitia"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("accusamus"),
                                                    URI: sdk.String("https://smug-army.net"),
                                                },
                                            },
                                            Interpreter: shared.OSPolicyResourceExecResourceExecInterpreterEnumShell.ToPointer(),
                                            OutputFilePath: sdk.String("eaque"),
                                            Script: sdk.String("deserunt"),
                                        },
                                        Validate: &shared.OSPolicyResourceExecResourceExec{
                                            Args: []string{
                                                "excepturi",
                                                "magni",
                                            },
                                            File: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("tempora"),
                                                    Generation: sdk.String("possimus"),
                                                    Object: sdk.String("dolor"),
                                                },
                                                LocalPath: sdk.String("rerum"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("sed"),
                                                    URI: sdk.String("https://skinny-walking.net"),
                                                },
                                            },
                                            Interpreter: shared.OSPolicyResourceExecResourceExecInterpreterEnumPowershell.ToPointer(),
                                            OutputFilePath: sdk.String("quos"),
                                            Script: sdk.String("asperiores"),
                                        },
                                    },
                                    File: &shared.OSPolicyResourceFileResource{
                                        Content: sdk.String("voluptatum"),
                                        File: &shared.OSPolicyResourceFile{
                                            AllowInsecure: sdk.Bool(false),
                                            Gcs: &shared.OSPolicyResourceFileGcs{
                                                Bucket: sdk.String("iste"),
                                                Generation: sdk.String("corporis"),
                                                Object: sdk.String("accusantium"),
                                            },
                                            LocalPath: sdk.String("illo"),
                                            Remote: &shared.OSPolicyResourceFileRemote{
                                                Sha256Checksum: sdk.String("aut"),
                                                URI: sdk.String("https://gorgeous-sunbonnet.net"),
                                            },
                                        },
                                        Path: sdk.String("neque"),
                                        Permissions: sdk.String("pariatur"),
                                        State: shared.OSPolicyResourceFileResourceStateEnumPresent.ToPointer(),
                                    },
                                    ID: sdk.String("fa1804e5-4c82-4f16-8a36-3c8873e48438"),
                                    Pkg: &shared.OSPolicyResourcePackageResource{
                                        Apt: &shared.OSPolicyResourcePackageResourceAPT{
                                            Name: sdk.String("Olivia Boehm"),
                                        },
                                        Deb: &shared.OSPolicyResourcePackageResourceDeb{
                                            PullDeps: sdk.Bool(false),
                                            Source: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("quidem"),
                                                    Generation: sdk.String("totam"),
                                                    Object: sdk.String("porro"),
                                                },
                                                LocalPath: sdk.String("deserunt"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("magni"),
                                                    URI: sdk.String("http://harsh-picturesque.info"),
                                                },
                                            },
                                        },
                                        DesiredState: shared.OSPolicyResourcePackageResourceDesiredStateEnumDesiredStateUnspecified.ToPointer(),
                                        Googet: &shared.OSPolicyResourcePackageResourceGooGet{
                                            Name: sdk.String("Charles Grimes"),
                                        },
                                        Msi: &shared.OSPolicyResourcePackageResourceMSI{
                                            Properties: []string{
                                                "ullam",
                                                "eligendi",
                                                "placeat",
                                            },
                                            Source: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("voluptas"),
                                                    Generation: sdk.String("occaecati"),
                                                    Object: sdk.String("unde"),
                                                },
                                                LocalPath: sdk.String("illo"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("nihil"),
                                                    URI: sdk.String("http://scornful-fun.com"),
                                                },
                                            },
                                        },
                                        Rpm: &shared.OSPolicyResourcePackageResourceRPM{
                                            PullDeps: sdk.Bool(false),
                                            Source: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("cumque"),
                                                    Generation: sdk.String("dicta"),
                                                    Object: sdk.String("harum"),
                                                },
                                                LocalPath: sdk.String("facere"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("facilis"),
                                                    URI: sdk.String("http://smoggy-wafer.biz"),
                                                },
                                            },
                                        },
                                        Yum: &shared.OSPolicyResourcePackageResourceYUM{
                                            Name: sdk.String("Byron Ledner"),
                                        },
                                        Zypper: &shared.OSPolicyResourcePackageResourceZypper{
                                            Name: sdk.String("Jody Will"),
                                        },
                                    },
                                    Repository: &shared.OSPolicyResourceRepositoryResource{
                                        Apt: &shared.OSPolicyResourceRepositoryResourceAptRepository{
                                            ArchiveType: shared.OSPolicyResourceRepositoryResourceAptRepositoryArchiveTypeEnumDebSrc.ToPointer(),
                                            Components: []string{
                                                "porro",
                                                "id",
                                                "excepturi",
                                                "occaecati",
                                            },
                                            Distribution: sdk.String("libero"),
                                            GpgKey: sdk.String("quo"),
                                            URI: sdk.String("http://wasteful-shred.com"),
                                        },
                                        Goo: &shared.OSPolicyResourceRepositoryResourceGooRepository{
                                            Name: sdk.String("Steve Streich"),
                                            URL: sdk.String("veritatis"),
                                        },
                                        Yum: &shared.OSPolicyResourceRepositoryResourceYumRepository{
                                            BaseURL: sdk.String("aut"),
                                            DisplayName: sdk.String("laudantium"),
                                            GpgKeys: []string{
                                                "dolor",
                                                "voluptates",
                                            },
                                            ID: sdk.String("42b006d6-7887-48ba-8581-a58208c54fef"),
                                        },
                                        Zypper: &shared.OSPolicyResourceRepositoryResourceZypperRepository{
                                            BaseURL: sdk.String("officia"),
                                            DisplayName: sdk.String("natus"),
                                            GpgKeys: []string{
                                                "natus",
                                                "quaerat",
                                                "doloribus",
                                                "quia",
                                            },
                                            ID: sdk.String("eac5565d-307c-4fee-8120-6e2813fa4a41"),
                                        },
                                    },
                                },
                                shared.OSPolicyResource{
                                    Exec: &shared.OSPolicyResourceExecResource{
                                        Enforce: &shared.OSPolicyResourceExecResourceExec{
                                            Args: []string{
                                                "eius",
                                                "voluptatum",
                                                "ipsa",
                                                "at",
                                            },
                                            File: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("dolorem"),
                                                    Generation: sdk.String("repellat"),
                                                    Object: sdk.String("aspernatur"),
                                                },
                                                LocalPath: sdk.String("inventore"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("sequi"),
                                                    URI: sdk.String("http://reasonable-university.com"),
                                                },
                                            },
                                            Interpreter: shared.OSPolicyResourceExecResourceExecInterpreterEnumInterpreterUnspecified.ToPointer(),
                                            OutputFilePath: sdk.String("architecto"),
                                            Script: sdk.String("aperiam"),
                                        },
                                        Validate: &shared.OSPolicyResourceExecResourceExec{
                                            Args: []string{
                                                "nulla",
                                            },
                                            File: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("enim"),
                                                    Generation: sdk.String("illo"),
                                                    Object: sdk.String("magnam"),
                                                },
                                                LocalPath: sdk.String("delectus"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("numquam"),
                                                    URI: sdk.String("https://shy-guidance.org"),
                                                },
                                            },
                                            Interpreter: shared.OSPolicyResourceExecResourceExecInterpreterEnumInterpreterUnspecified.ToPointer(),
                                            OutputFilePath: sdk.String("deleniti"),
                                            Script: sdk.String("expedita"),
                                        },
                                    },
                                    File: &shared.OSPolicyResourceFileResource{
                                        Content: sdk.String("hic"),
                                        File: &shared.OSPolicyResourceFile{
                                            AllowInsecure: sdk.Bool(false),
                                            Gcs: &shared.OSPolicyResourceFileGcs{
                                                Bucket: sdk.String("excepturi"),
                                                Generation: sdk.String("aliquid"),
                                                Object: sdk.String("sed"),
                                            },
                                            LocalPath: sdk.String("beatae"),
                                            Remote: &shared.OSPolicyResourceFileRemote{
                                                Sha256Checksum: sdk.String("similique"),
                                                URI: sdk.String("http://proud-edge.org"),
                                            },
                                        },
                                        Path: sdk.String("dignissimos"),
                                        Permissions: sdk.String("esse"),
                                        State: shared.OSPolicyResourceFileResourceStateEnumAbsent.ToPointer(),
                                    },
                                    ID: sdk.String("87ee3e4b-e752-4c65-b344-18e3bb91c8d9"),
                                    Pkg: &shared.OSPolicyResourcePackageResource{
                                        Apt: &shared.OSPolicyResourcePackageResourceAPT{
                                            Name: sdk.String("Dr. Veronica Thompson"),
                                        },
                                        Deb: &shared.OSPolicyResourcePackageResourceDeb{
                                            PullDeps: sdk.Bool(false),
                                            Source: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("tempora"),
                                                    Generation: sdk.String("quae"),
                                                    Object: sdk.String("omnis"),
                                                },
                                                LocalPath: sdk.String("illum"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("rem"),
                                                    URI: sdk.String("https://misguided-director.org"),
                                                },
                                            },
                                        },
                                        DesiredState: shared.OSPolicyResourcePackageResourceDesiredStateEnumDesiredStateUnspecified.ToPointer(),
                                        Googet: &shared.OSPolicyResourcePackageResourceGooGet{
                                            Name: sdk.String("Clara Wyman"),
                                        },
                                        Msi: &shared.OSPolicyResourcePackageResourceMSI{
                                            Properties: []string{
                                                "esse",
                                            },
                                            Source: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("debitis"),
                                                    Generation: sdk.String("facere"),
                                                    Object: sdk.String("quisquam"),
                                                },
                                                LocalPath: sdk.String("cumque"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("aliquam"),
                                                    URI: sdk.String("https://precious-evil.org"),
                                                },
                                            },
                                        },
                                        Rpm: &shared.OSPolicyResourcePackageResourceRPM{
                                            PullDeps: sdk.Bool(false),
                                            Source: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("sequi"),
                                                    Generation: sdk.String("porro"),
                                                    Object: sdk.String("laborum"),
                                                },
                                                LocalPath: sdk.String("nobis"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("quibusdam"),
                                                    URI: sdk.String("https://afraid-frown.name"),
                                                },
                                            },
                                        },
                                        Yum: &shared.OSPolicyResourcePackageResourceYUM{
                                            Name: sdk.String("Mitchell Crona II"),
                                        },
                                        Zypper: &shared.OSPolicyResourcePackageResourceZypper{
                                            Name: sdk.String("Nellie Cremin"),
                                        },
                                    },
                                    Repository: &shared.OSPolicyResourceRepositoryResource{
                                        Apt: &shared.OSPolicyResourceRepositoryResourceAptRepository{
                                            ArchiveType: shared.OSPolicyResourceRepositoryResourceAptRepositoryArchiveTypeEnumArchiveTypeUnspecified.ToPointer(),
                                            Components: []string{
                                                "expedita",
                                                "eos",
                                            },
                                            Distribution: sdk.String("repellendus"),
                                            GpgKey: sdk.String("nesciunt"),
                                            URI: sdk.String("http://noteworthy-e-mail.info"),
                                        },
                                        Goo: &shared.OSPolicyResourceRepositoryResourceGooRepository{
                                            Name: sdk.String("Beulah Will"),
                                            URL: sdk.String("aliquam"),
                                        },
                                        Yum: &shared.OSPolicyResourceRepositoryResourceYumRepository{
                                            BaseURL: sdk.String("delectus"),
                                            DisplayName: sdk.String("culpa"),
                                            GpgKeys: []string{
                                                "iusto",
                                                "quod",
                                                "voluptatibus",
                                            },
                                            ID: sdk.String("535a6fae-54eb-4f60-8321-f023b75d2367"),
                                        },
                                        Zypper: &shared.OSPolicyResourceRepositoryResourceZypperRepository{
                                            BaseURL: sdk.String("reiciendis"),
                                            DisplayName: sdk.String("itaque"),
                                            GpgKeys: []string{
                                                "est",
                                            },
                                            ID: sdk.String("0cc8df79-f0a3-496d-90c3-64b7c15dfbac"),
                                        },
                                    },
                                },
                                shared.OSPolicyResource{
                                    Exec: &shared.OSPolicyResourceExecResource{
                                        Enforce: &shared.OSPolicyResourceExecResourceExec{
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
                                        Validate: &shared.OSPolicyResourceExecResourceExec{
                                            Args: []string{
                                                "beatae",
                                                "veritatis",
                                            },
                                            File: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("maiores"),
                                                    Generation: sdk.String("itaque"),
                                                    Object: sdk.String("vero"),
                                                },
                                                LocalPath: sdk.String("quidem"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("illo"),
                                                    URI: sdk.String("https://linear-sewer.net"),
                                                },
                                            },
                                            Interpreter: shared.OSPolicyResourceExecResourceExecInterpreterEnumPowershell.ToPointer(),
                                            OutputFilePath: sdk.String("cum"),
                                            Script: sdk.String("suscipit"),
                                        },
                                    },
                                    File: &shared.OSPolicyResourceFileResource{
                                        Content: sdk.String("saepe"),
                                        File: &shared.OSPolicyResourceFile{
                                            AllowInsecure: sdk.Bool(false),
                                            Gcs: &shared.OSPolicyResourceFileGcs{
                                                Bucket: sdk.String("earum"),
                                                Generation: sdk.String("quod"),
                                                Object: sdk.String("nihil"),
                                            },
                                            LocalPath: sdk.String("quaerat"),
                                            Remote: &shared.OSPolicyResourceFileRemote{
                                                Sha256Checksum: sdk.String("ipsum"),
                                                URI: sdk.String("http://male-prostanoid.name"),
                                            },
                                        },
                                        Path: sdk.String("odit"),
                                        Permissions: sdk.String("ad"),
                                        State: shared.OSPolicyResourceFileResourceStateEnumDesiredStateUnspecified.ToPointer(),
                                    },
                                    ID: sdk.String("17747dc9-15ad-42ca-b5dd-6723dc0f5ae2"),
                                    Pkg: &shared.OSPolicyResourcePackageResource{
                                        Apt: &shared.OSPolicyResourcePackageResourceAPT{
                                            Name: sdk.String("Tony Nikolaus"),
                                        },
                                        Deb: &shared.OSPolicyResourcePackageResourceDeb{
                                            PullDeps: sdk.Bool(false),
                                            Source: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("ducimus"),
                                                    Generation: sdk.String("doloremque"),
                                                    Object: sdk.String("perferendis"),
                                                },
                                                LocalPath: sdk.String("laudantium"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("iusto"),
                                                    URI: sdk.String("https://lame-fen.info"),
                                                },
                                            },
                                        },
                                        DesiredState: shared.OSPolicyResourcePackageResourceDesiredStateEnumDesiredStateUnspecified.ToPointer(),
                                        Googet: &shared.OSPolicyResourcePackageResourceGooGet{
                                            Name: sdk.String("Wendy Will"),
                                        },
                                        Msi: &shared.OSPolicyResourcePackageResourceMSI{
                                            Properties: []string{
                                                "quisquam",
                                                "provident",
                                            },
                                            Source: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("laudantium"),
                                                    Generation: sdk.String("nam"),
                                                    Object: sdk.String("nemo"),
                                                },
                                                LocalPath: sdk.String("enim"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("ipsam"),
                                                    URI: sdk.String("http://favorable-ale.name"),
                                                },
                                            },
                                        },
                                        Rpm: &shared.OSPolicyResourcePackageResourceRPM{
                                            PullDeps: sdk.Bool(false),
                                            Source: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("doloremque"),
                                                    Generation: sdk.String("fugiat"),
                                                    Object: sdk.String("numquam"),
                                                },
                                                LocalPath: sdk.String("doloremque"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("cum"),
                                                    URI: sdk.String("https://playful-seed.net"),
                                                },
                                            },
                                        },
                                        Yum: &shared.OSPolicyResourcePackageResourceYUM{
                                            Name: sdk.String("Myra Roberts"),
                                        },
                                        Zypper: &shared.OSPolicyResourcePackageResourceZypper{
                                            Name: sdk.String("Ronnie Wuckert"),
                                        },
                                    },
                                    Repository: &shared.OSPolicyResourceRepositoryResource{
                                        Apt: &shared.OSPolicyResourceRepositoryResourceAptRepository{
                                            ArchiveType: shared.OSPolicyResourceRepositoryResourceAptRepositoryArchiveTypeEnumDebSrc.ToPointer(),
                                            Components: []string{
                                                "voluptatem",
                                                "provident",
                                                "adipisci",
                                            },
                                            Distribution: sdk.String("accusantium"),
                                            GpgKey: sdk.String("magnam"),
                                            URI: sdk.String("https://palatable-caribou.info"),
                                        },
                                        Goo: &shared.OSPolicyResourceRepositoryResourceGooRepository{
                                            Name: sdk.String("Orlando Schuster"),
                                            URL: sdk.String("nostrum"),
                                        },
                                        Yum: &shared.OSPolicyResourceRepositoryResourceYumRepository{
                                            BaseURL: sdk.String("sequi"),
                                            DisplayName: sdk.String("voluptatum"),
                                            GpgKeys: []string{
                                                "error",
                                            },
                                            ID: sdk.String("b474b0ed-20e5-4624-8fff-639a910abdca"),
                                        },
                                        Zypper: &shared.OSPolicyResourceRepositoryResourceZypperRepository{
                                            BaseURL: sdk.String("tempore"),
                                            DisplayName: sdk.String("commodi"),
                                            GpgKeys: []string{
                                                "suscipit",
                                            },
                                            ID: sdk.String("76696e1e-c002-421b-b35d-89acb3ecfda8"),
                                        },
                                    },
                                },
                            },
                        },
                        shared.OSPolicyResourceGroup{
                            InventoryFilters: []shared.OSPolicyInventoryFilter{
                                shared.OSPolicyInventoryFilter{
                                    OsShortName: sdk.String("sit"),
                                    OsVersion: sdk.String("quo"),
                                },
                                shared.OSPolicyInventoryFilter{
                                    OsShortName: sdk.String("veniam"),
                                    OsVersion: sdk.String("aliquam"),
                                },
                                shared.OSPolicyInventoryFilter{
                                    OsShortName: sdk.String("provident"),
                                    OsVersion: sdk.String("vero"),
                                },
                                shared.OSPolicyInventoryFilter{
                                    OsShortName: sdk.String("earum"),
                                    OsVersion: sdk.String("doloremque"),
                                },
                            },
                            Resources: []shared.OSPolicyResource{
                                shared.OSPolicyResource{
                                    Exec: &shared.OSPolicyResourceExecResource{
                                        Enforce: &shared.OSPolicyResourceExecResourceExec{
                                            Args: []string{
                                                "doloremque",
                                            },
                                            File: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("tempora"),
                                                    Generation: sdk.String("perspiciatis"),
                                                    Object: sdk.String("quam"),
                                                },
                                                LocalPath: sdk.String("atque"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("officia"),
                                                    URI: sdk.String("http://buttery-vermicelli.net"),
                                                },
                                            },
                                            Interpreter: shared.OSPolicyResourceExecResourceExecInterpreterEnumInterpreterUnspecified.ToPointer(),
                                            OutputFilePath: sdk.String("quod"),
                                            Script: sdk.String("a"),
                                        },
                                        Validate: &shared.OSPolicyResourceExecResourceExec{
                                            Args: []string{
                                                "accusantium",
                                            },
                                            File: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("commodi"),
                                                    Generation: sdk.String("atque"),
                                                    Object: sdk.String("totam"),
                                                },
                                                LocalPath: sdk.String("tenetur"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("voluptate"),
                                                    URI: sdk.String("http://starchy-browser.org"),
                                                },
                                            },
                                            Interpreter: shared.OSPolicyResourceExecResourceExecInterpreterEnumPowershell.ToPointer(),
                                            OutputFilePath: sdk.String("quod"),
                                            Script: sdk.String("voluptate"),
                                        },
                                    },
                                    File: &shared.OSPolicyResourceFileResource{
                                        Content: sdk.String("inventore"),
                                        File: &shared.OSPolicyResourceFile{
                                            AllowInsecure: sdk.Bool(false),
                                            Gcs: &shared.OSPolicyResourceFileGcs{
                                                Bucket: sdk.String("facere"),
                                                Generation: sdk.String("maxime"),
                                                Object: sdk.String("fuga"),
                                            },
                                            LocalPath: sdk.String("ab"),
                                            Remote: &shared.OSPolicyResourceFileRemote{
                                                Sha256Checksum: sdk.String("ex"),
                                                URI: sdk.String("http://worn-chem.name"),
                                            },
                                        },
                                        Path: sdk.String("sequi"),
                                        Permissions: sdk.String("eligendi"),
                                        State: shared.OSPolicyResourceFileResourceStateEnumAbsent.ToPointer(),
                                    },
                                    ID: sdk.String("0a97ff33-4cdd-4f85-ba9e-61876c6ab21d"),
                                    Pkg: &shared.OSPolicyResourcePackageResource{
                                        Apt: &shared.OSPolicyResourcePackageResourceAPT{
                                            Name: sdk.String("Ada Stark"),
                                        },
                                        Deb: &shared.OSPolicyResourcePackageResourceDeb{
                                            PullDeps: sdk.Bool(false),
                                            Source: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("unde"),
                                                    Generation: sdk.String("ut"),
                                                    Object: sdk.String("facere"),
                                                },
                                                LocalPath: sdk.String("voluptas"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("doloribus"),
                                                    URI: sdk.String("https://spicy-snake.info"),
                                                },
                                            },
                                        },
                                        DesiredState: shared.OSPolicyResourcePackageResourceDesiredStateEnumInstalled.ToPointer(),
                                        Googet: &shared.OSPolicyResourcePackageResourceGooGet{
                                            Name: sdk.String("Mr. Rodney Marvin"),
                                        },
                                        Msi: &shared.OSPolicyResourcePackageResourceMSI{
                                            Properties: []string{
                                                "laborum",
                                                "autem",
                                            },
                                            Source: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("assumenda"),
                                                    Generation: sdk.String("explicabo"),
                                                    Object: sdk.String("fugiat"),
                                                },
                                                LocalPath: sdk.String("doloremque"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("voluptatem"),
                                                    URI: sdk.String("http://euphoric-folk.info"),
                                                },
                                            },
                                        },
                                        Rpm: &shared.OSPolicyResourcePackageResourceRPM{
                                            PullDeps: sdk.Bool(false),
                                            Source: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("velit"),
                                                    Generation: sdk.String("ratione"),
                                                    Object: sdk.String("quas"),
                                                },
                                                LocalPath: sdk.String("maxime"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("recusandae"),
                                                    URI: sdk.String("https://anxious-lipoprotein.info"),
                                                },
                                            },
                                        },
                                        Yum: &shared.OSPolicyResourcePackageResourceYUM{
                                            Name: sdk.String("Dr. Carlton Considine"),
                                        },
                                        Zypper: &shared.OSPolicyResourcePackageResourceZypper{
                                            Name: sdk.String("Roberta Cruickshank"),
                                        },
                                    },
                                    Repository: &shared.OSPolicyResourceRepositoryResource{
                                        Apt: &shared.OSPolicyResourceRepositoryResourceAptRepository{
                                            ArchiveType: shared.OSPolicyResourceRepositoryResourceAptRepositoryArchiveTypeEnumArchiveTypeUnspecified.ToPointer(),
                                            Components: []string{
                                                "sunt",
                                            },
                                            Distribution: sdk.String("molestias"),
                                            GpgKey: sdk.String("beatae"),
                                            URI: sdk.String("http://lively-recliner.name"),
                                        },
                                        Goo: &shared.OSPolicyResourceRepositoryResourceGooRepository{
                                            Name: sdk.String("Manuel Russel"),
                                            URL: sdk.String("distinctio"),
                                        },
                                        Yum: &shared.OSPolicyResourceRepositoryResourceYumRepository{
                                            BaseURL: sdk.String("voluptatem"),
                                            DisplayName: sdk.String("non"),
                                            GpgKeys: []string{
                                                "consequatur",
                                                "laudantium",
                                            },
                                            ID: sdk.String("d6d364ff-d455-4906-9126-3d48e935c2c9"),
                                        },
                                        Zypper: &shared.OSPolicyResourceRepositoryResourceZypperRepository{
                                            BaseURL: sdk.String("recusandae"),
                                            DisplayName: sdk.String("quos"),
                                            GpgKeys: []string{
                                                "sapiente",
                                            },
                                            ID: sdk.String("30be3e43-202d-4721-a576-506641870d9d"),
                                        },
                                    },
                                },
                            },
                        },
                        shared.OSPolicyResourceGroup{
                            InventoryFilters: []shared.OSPolicyInventoryFilter{
                                shared.OSPolicyInventoryFilter{
                                    OsShortName: sdk.String("inventore"),
                                    OsVersion: sdk.String("voluptatibus"),
                                },
                            },
                            Resources: []shared.OSPolicyResource{
                                shared.OSPolicyResource{
                                    Exec: &shared.OSPolicyResourceExecResource{
                                        Enforce: &shared.OSPolicyResourceExecResourceExec{
                                            Args: []string{
                                                "repellendus",
                                                "consequatur",
                                                "adipisci",
                                            },
                                            File: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("doloremque"),
                                                    Generation: sdk.String("optio"),
                                                    Object: sdk.String("tempora"),
                                                },
                                                LocalPath: sdk.String("debitis"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("cumque"),
                                                    URI: sdk.String("https://brisk-brisket.name"),
                                                },
                                            },
                                            Interpreter: shared.OSPolicyResourceExecResourceExecInterpreterEnumInterpreterUnspecified.ToPointer(),
                                            OutputFilePath: sdk.String("quos"),
                                            Script: sdk.String("ratione"),
                                        },
                                        Validate: &shared.OSPolicyResourceExecResourceExec{
                                            Args: []string{
                                                "tempora",
                                                "eos",
                                            },
                                            File: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("natus"),
                                                    Generation: sdk.String("voluptatem"),
                                                    Object: sdk.String("suscipit"),
                                                },
                                                LocalPath: sdk.String("laudantium"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("facilis"),
                                                    URI: sdk.String("https://grimy-agenda.com"),
                                                },
                                            },
                                            Interpreter: shared.OSPolicyResourceExecResourceExecInterpreterEnumShell.ToPointer(),
                                            OutputFilePath: sdk.String("quaerat"),
                                            Script: sdk.String("corporis"),
                                        },
                                    },
                                    File: &shared.OSPolicyResourceFileResource{
                                        Content: sdk.String("accusamus"),
                                        File: &shared.OSPolicyResourceFile{
                                            AllowInsecure: sdk.Bool(false),
                                            Gcs: &shared.OSPolicyResourceFileGcs{
                                                Bucket: sdk.String("iusto"),
                                                Generation: sdk.String("sapiente"),
                                                Object: sdk.String("esse"),
                                            },
                                            LocalPath: sdk.String("neque"),
                                            Remote: &shared.OSPolicyResourceFileRemote{
                                                Sha256Checksum: sdk.String("quidem"),
                                                URI: sdk.String("https://loyal-divine.info"),
                                            },
                                        },
                                        Path: sdk.String("officiis"),
                                        Permissions: sdk.String("sequi"),
                                        State: shared.OSPolicyResourceFileResourceStateEnumDesiredStateUnspecified.ToPointer(),
                                    },
                                    ID: sdk.String("0a319f4b-adf9-447c-9a86-7bc424266658"),
                                    Pkg: &shared.OSPolicyResourcePackageResource{
                                        Apt: &shared.OSPolicyResourcePackageResourceAPT{
                                            Name: sdk.String("Laurie Sporer"),
                                        },
                                        Deb: &shared.OSPolicyResourcePackageResourceDeb{
                                            PullDeps: sdk.Bool(false),
                                            Source: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("culpa"),
                                                    Generation: sdk.String("atque"),
                                                    Object: sdk.String("voluptates"),
                                                },
                                                LocalPath: sdk.String("maiores"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("nemo"),
                                                    URI: sdk.String("http://worse-salsa.net"),
                                                },
                                            },
                                        },
                                        DesiredState: shared.OSPolicyResourcePackageResourceDesiredStateEnumDesiredStateUnspecified.ToPointer(),
                                        Googet: &shared.OSPolicyResourcePackageResourceGooGet{
                                            Name: sdk.String("Vernon Mayert"),
                                        },
                                        Msi: &shared.OSPolicyResourcePackageResourceMSI{
                                            Properties: []string{
                                                "quasi",
                                                "fugit",
                                                "quo",
                                                "temporibus",
                                            },
                                            Source: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("mollitia"),
                                                    Generation: sdk.String("id"),
                                                    Object: sdk.String("quibusdam"),
                                                },
                                                LocalPath: sdk.String("ipsa"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("accusamus"),
                                                    URI: sdk.String("https://keen-pan.org"),
                                                },
                                            },
                                        },
                                        Rpm: &shared.OSPolicyResourcePackageResourceRPM{
                                            PullDeps: sdk.Bool(false),
                                            Source: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("saepe"),
                                                    Generation: sdk.String("facere"),
                                                    Object: sdk.String("nobis"),
                                                },
                                                LocalPath: sdk.String("at"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("molestias"),
                                                    URI: sdk.String("http://tart-vampire.biz"),
                                                },
                                            },
                                        },
                                        Yum: &shared.OSPolicyResourcePackageResourceYUM{
                                            Name: sdk.String("Naomi Murray"),
                                        },
                                        Zypper: &shared.OSPolicyResourcePackageResourceZypper{
                                            Name: sdk.String("Jackie Fahey DDS"),
                                        },
                                    },
                                    Repository: &shared.OSPolicyResourceRepositoryResource{
                                        Apt: &shared.OSPolicyResourceRepositoryResourceAptRepository{
                                            ArchiveType: shared.OSPolicyResourceRepositoryResourceAptRepositoryArchiveTypeEnumArchiveTypeUnspecified.ToPointer(),
                                            Components: []string{
                                                "blanditiis",
                                                "quas",
                                                "voluptatem",
                                            },
                                            Distribution: sdk.String("provident"),
                                            GpgKey: sdk.String("quas"),
                                            URI: sdk.String("http://trustworthy-pouch.net"),
                                        },
                                        Goo: &shared.OSPolicyResourceRepositoryResourceGooRepository{
                                            Name: sdk.String("Evan Walter"),
                                            URL: sdk.String("sapiente"),
                                        },
                                        Yum: &shared.OSPolicyResourceRepositoryResourceYumRepository{
                                            BaseURL: sdk.String("voluptatibus"),
                                            DisplayName: sdk.String("assumenda"),
                                            GpgKeys: []string{
                                                "omnis",
                                                "delectus",
                                                "odio",
                                                "voluptatibus",
                                            },
                                            ID: sdk.String("079af4d3-5724-4cdb-8f4d-281187d56844"),
                                        },
                                        Zypper: &shared.OSPolicyResourceRepositoryResourceZypperRepository{
                                            BaseURL: sdk.String("accusamus"),
                                            DisplayName: sdk.String("nulla"),
                                            GpgKeys: []string{
                                                "quibusdam",
                                                "praesentium",
                                                "enim",
                                                "animi",
                                            },
                                            ID: sdk.String("9065e628-bdfc-4203-ab6c-879923b7e135"),
                                        },
                                    },
                                },
                                shared.OSPolicyResource{
                                    Exec: &shared.OSPolicyResourceExecResource{
                                        Enforce: &shared.OSPolicyResourceExecResourceExec{
                                            Args: []string{
                                                "ut",
                                                "asperiores",
                                                "reprehenderit",
                                            },
                                            File: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("deserunt"),
                                                    Generation: sdk.String("itaque"),
                                                    Object: sdk.String("et"),
                                                },
                                                LocalPath: sdk.String("eos"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("impedit"),
                                                    URI: sdk.String("http://luminous-oregano.com"),
                                                },
                                            },
                                            Interpreter: shared.OSPolicyResourceExecResourceExecInterpreterEnumPowershell.ToPointer(),
                                            OutputFilePath: sdk.String("laudantium"),
                                            Script: sdk.String("aspernatur"),
                                        },
                                        Validate: &shared.OSPolicyResourceExecResourceExec{
                                            Args: []string{
                                                "repudiandae",
                                                "dicta",
                                                "inventore",
                                                "ullam",
                                            },
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
                                            Interpreter: shared.OSPolicyResourceExecResourceExecInterpreterEnumNone.ToPointer(),
                                            OutputFilePath: sdk.String("pariatur"),
                                            Script: sdk.String("minus"),
                                        },
                                    },
                                    File: &shared.OSPolicyResourceFileResource{
                                        Content: sdk.String("a"),
                                        File: &shared.OSPolicyResourceFile{
                                            AllowInsecure: sdk.Bool(false),
                                            Gcs: &shared.OSPolicyResourceFileGcs{
                                                Bucket: sdk.String("fuga"),
                                                Generation: sdk.String("totam"),
                                                Object: sdk.String("cupiditate"),
                                            },
                                            LocalPath: sdk.String("at"),
                                            Remote: &shared.OSPolicyResourceFileRemote{
                                                Sha256Checksum: sdk.String("doloribus"),
                                                URI: sdk.String("https://juvenile-fishmonger.org"),
                                            },
                                        },
                                        Path: sdk.String("sequi"),
                                        Permissions: sdk.String("quis"),
                                        State: shared.OSPolicyResourceFileResourceStateEnumPresent.ToPointer(),
                                    },
                                    ID: sdk.String("686092e9-c3dd-4c5f-911d-ea1026d541a4"),
                                    Pkg: &shared.OSPolicyResourcePackageResource{
                                        Apt: &shared.OSPolicyResourcePackageResourceAPT{
                                            Name: sdk.String("Dr. Terry Mohr"),
                                        },
                                        Deb: &shared.OSPolicyResourcePackageResourceDeb{
                                            PullDeps: sdk.Bool(false),
                                            Source: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("expedita"),
                                                    Generation: sdk.String("quia"),
                                                    Object: sdk.String("vitae"),
                                                },
                                                LocalPath: sdk.String("odio"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("quas"),
                                                    URI: sdk.String("http://sarcastic-sky.net"),
                                                },
                                            },
                                        },
                                        DesiredState: shared.OSPolicyResourcePackageResourceDesiredStateEnumRemoved.ToPointer(),
                                        Googet: &shared.OSPolicyResourcePackageResourceGooGet{
                                            Name: sdk.String("Muriel Reichel"),
                                        },
                                        Msi: &shared.OSPolicyResourcePackageResourceMSI{
                                            Properties: []string{
                                                "soluta",
                                                "magnam",
                                                "laudantium",
                                                "tempora",
                                            },
                                            Source: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("esse"),
                                                    Generation: sdk.String("doloremque"),
                                                    Object: sdk.String("corrupti"),
                                                },
                                                LocalPath: sdk.String("reiciendis"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("facilis"),
                                                    URI: sdk.String("http://valuable-crumb.name"),
                                                },
                                            },
                                        },
                                        Rpm: &shared.OSPolicyResourcePackageResourceRPM{
                                            PullDeps: sdk.Bool(false),
                                            Source: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("ab"),
                                                    Generation: sdk.String("officiis"),
                                                    Object: sdk.String("eum"),
                                                },
                                                LocalPath: sdk.String("rerum"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("placeat"),
                                                    URI: sdk.String("http://full-latex.net"),
                                                },
                                            },
                                        },
                                        Yum: &shared.OSPolicyResourcePackageResourceYUM{
                                            Name: sdk.String("Pat Graham"),
                                        },
                                        Zypper: &shared.OSPolicyResourcePackageResourceZypper{
                                            Name: sdk.String("Veronica McDermott"),
                                        },
                                    },
                                    Repository: &shared.OSPolicyResourceRepositoryResource{
                                        Apt: &shared.OSPolicyResourceRepositoryResourceAptRepository{
                                            ArchiveType: shared.OSPolicyResourceRepositoryResourceAptRepositoryArchiveTypeEnumDebSrc.ToPointer(),
                                            Components: []string{
                                                "modi",
                                            },
                                            Distribution: sdk.String("aspernatur"),
                                            GpgKey: sdk.String("explicabo"),
                                            URI: sdk.String("http://babyish-toast.name"),
                                        },
                                        Goo: &shared.OSPolicyResourceRepositoryResourceGooRepository{
                                            Name: sdk.String("Miss Sean Bashirian"),
                                            URL: sdk.String("voluptate"),
                                        },
                                        Yum: &shared.OSPolicyResourceRepositoryResourceYumRepository{
                                            BaseURL: sdk.String("deleniti"),
                                            DisplayName: sdk.String("est"),
                                            GpgKeys: []string{
                                                "expedita",
                                            },
                                            ID: sdk.String("d8fb7a0a-116c-4e72-bd40-97fa30e9af72"),
                                        },
                                        Zypper: &shared.OSPolicyResourceRepositoryResourceZypperRepository{
                                            BaseURL: sdk.String("ipsam"),
                                            DisplayName: sdk.String("libero"),
                                            GpgKeys: []string{
                                                "omnis",
                                            },
                                            ID: sdk.String("122030d8-3f5a-4eb7-b99d-22e8c1f84938"),
                                        },
                                    },
                                },
                                shared.OSPolicyResource{
                                    Exec: &shared.OSPolicyResourceExecResource{
                                        Enforce: &shared.OSPolicyResourceExecResourceExec{
                                            Args: []string{
                                                "nemo",
                                            },
                                            File: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("delectus"),
                                                    Generation: sdk.String("illum"),
                                                    Object: sdk.String("porro"),
                                                },
                                                LocalPath: sdk.String("quaerat"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("magni"),
                                                    URI: sdk.String("https://musty-idiom.info"),
                                                },
                                            },
                                            Interpreter: shared.OSPolicyResourceExecResourceExecInterpreterEnumPowershell.ToPointer(),
                                            OutputFilePath: sdk.String("sed"),
                                            Script: sdk.String("minus"),
                                        },
                                        Validate: &shared.OSPolicyResourceExecResourceExec{
                                            Args: []string{
                                                "possimus",
                                            },
                                            File: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("delectus"),
                                                    Generation: sdk.String("harum"),
                                                    Object: sdk.String("aliquam"),
                                                },
                                                LocalPath: sdk.String("eligendi"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("hic"),
                                                    URI: sdk.String("https://blaring-ridge.info"),
                                                },
                                            },
                                            Interpreter: shared.OSPolicyResourceExecResourceExecInterpreterEnumNone.ToPointer(),
                                            OutputFilePath: sdk.String("explicabo"),
                                            Script: sdk.String("sequi"),
                                        },
                                    },
                                    File: &shared.OSPolicyResourceFileResource{
                                        Content: sdk.String("alias"),
                                        File: &shared.OSPolicyResourceFile{
                                            AllowInsecure: sdk.Bool(false),
                                            Gcs: &shared.OSPolicyResourceFileGcs{
                                                Bucket: sdk.String("reiciendis"),
                                                Generation: sdk.String("quos"),
                                                Object: sdk.String("numquam"),
                                            },
                                            LocalPath: sdk.String("vitae"),
                                            Remote: &shared.OSPolicyResourceFileRemote{
                                                Sha256Checksum: sdk.String("maiores"),
                                                URI: sdk.String("https://buttery-project.net"),
                                            },
                                        },
                                        Path: sdk.String("eos"),
                                        Permissions: sdk.String("dolorem"),
                                        State: shared.OSPolicyResourceFileResourceStateEnumContentsMatch.ToPointer(),
                                    },
                                    ID: sdk.String("db14db6b-e5a6-4859-98e2-2ae20da16fc2"),
                                    Pkg: &shared.OSPolicyResourcePackageResource{
                                        Apt: &shared.OSPolicyResourcePackageResourceAPT{
                                            Name: sdk.String("Miss Randy Kshlerin"),
                                        },
                                        Deb: &shared.OSPolicyResourcePackageResourceDeb{
                                            PullDeps: sdk.Bool(false),
                                            Source: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("blanditiis"),
                                                    Generation: sdk.String("sint"),
                                                    Object: sdk.String("placeat"),
                                                },
                                                LocalPath: sdk.String("ullam"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("molestiae"),
                                                    URI: sdk.String("https://meaty-freedom.biz"),
                                                },
                                            },
                                        },
                                        DesiredState: shared.OSPolicyResourcePackageResourceDesiredStateEnumRemoved.ToPointer(),
                                        Googet: &shared.OSPolicyResourcePackageResourceGooGet{
                                            Name: sdk.String("Jeffrey Gutmann"),
                                        },
                                        Msi: &shared.OSPolicyResourcePackageResourceMSI{
                                            Properties: []string{
                                                "magni",
                                                "consequuntur",
                                                "consequuntur",
                                                "eius",
                                            },
                                            Source: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("commodi"),
                                                    Generation: sdk.String("ipsam"),
                                                    Object: sdk.String("vel"),
                                                },
                                                LocalPath: sdk.String("cupiditate"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("modi"),
                                                    URI: sdk.String("http://compassionate-discussion.com"),
                                                },
                                            },
                                        },
                                        Rpm: &shared.OSPolicyResourcePackageResourceRPM{
                                            PullDeps: sdk.Bool(false),
                                            Source: &shared.OSPolicyResourceFile{
                                                AllowInsecure: sdk.Bool(false),
                                                Gcs: &shared.OSPolicyResourceFileGcs{
                                                    Bucket: sdk.String("odio"),
                                                    Generation: sdk.String("sit"),
                                                    Object: sdk.String("voluptatum"),
                                                },
                                                LocalPath: sdk.String("tempora"),
                                                Remote: &shared.OSPolicyResourceFileRemote{
                                                    Sha256Checksum: sdk.String("delectus"),
                                                    URI: sdk.String("http://radiant-rebel.biz"),
                                                },
                                            },
                                        },
                                        Yum: &shared.OSPolicyResourcePackageResourceYUM{
                                            Name: sdk.String("Kara Turner Sr."),
                                        },
                                        Zypper: &shared.OSPolicyResourcePackageResourceZypper{
                                            Name: sdk.String("Ms. Kathryn Hayes"),
                                        },
                                    },
                                    Repository: &shared.OSPolicyResourceRepositoryResource{
                                        Apt: &shared.OSPolicyResourceRepositoryResourceAptRepository{
                                            ArchiveType: shared.OSPolicyResourceRepositoryResourceAptRepositoryArchiveTypeEnumDebSrc.ToPointer(),
                                            Components: []string{
                                                "exercitationem",
                                                "veniam",
                                                "modi",
                                            },
                                            Distribution: sdk.String("quasi"),
                                            GpgKey: sdk.String("quae"),
                                            URI: sdk.String("https://sugary-scholar.info"),
                                        },
                                        Goo: &shared.OSPolicyResourceRepositoryResourceGooRepository{
                                            Name: sdk.String("Velma Orn"),
                                            URL: sdk.String("alias"),
                                        },
                                        Yum: &shared.OSPolicyResourceRepositoryResourceYumRepository{
                                            BaseURL: sdk.String("deserunt"),
                                            DisplayName: sdk.String("fugit"),
                                            GpgKeys: []string{
                                                "quo",
                                                "molestiae",
                                            },
                                            ID: sdk.String("cdc981f0-6898-41d6-bb33-cfaa348c31bf"),
                                        },
                                        Zypper: &shared.OSPolicyResourceRepositoryResourceZypperRepository{
                                            BaseURL: sdk.String("magnam"),
                                            DisplayName: sdk.String("aperiam"),
                                            GpgKeys: []string{
                                                "itaque",
                                                "necessitatibus",
                                            },
                                            ID: sdk.String("4fcf0c42-b78f-4156-a639-8a0dc766324c"),
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
                    Fixed: sdk.Int(803144),
                    Percent: sdk.Int(713371),
                },
                MinWaitDuration: sdk.String("accusantium"),
            },
        },
        AccessToken: sdk.String("ea"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("totam"),
        Fields: sdk.String("optio"),
        Key: sdk.String("est"),
        OauthToken: sdk.String("inventore"),
        OsPolicyAssignmentID: sdk.String("consequuntur"),
        Parent: "repellendus",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("sit"),
        UploadType: sdk.String("dolores"),
        UploadProtocol: sdk.String("enim"),
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("perspiciatis"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("odio"),
        Fields: sdk.String("alias"),
        Key: sdk.String("quidem"),
        OauthToken: sdk.String("deleniti"),
        PageSize: sdk.Int64(819690),
        PageToken: sdk.String("ipsam"),
        Parent: "odio",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("fugit"),
        UploadType: sdk.String("aspernatur"),
        UploadProtocol: sdk.String("at"),
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
        AccessToken: sdk.String("praesentium"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("exercitationem"),
        Fields: sdk.String("cum"),
        Key: sdk.String("voluptatum"),
        Name: "Guadalupe Wisoky",
        OauthToken: sdk.String("pariatur"),
        PageSize: sdk.Int64(705307),
        PageToken: sdk.String("cupiditate"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("nemo"),
        UploadType: sdk.String("natus"),
        UploadProtocol: sdk.String("nisi"),
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

## OsconfigProjectsPatchDeploymentsCreate

Create an OS Config patch deployment.

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
    res, err := s.Projects.OsconfigProjectsPatchDeploymentsCreate(ctx, operations.OsconfigProjectsPatchDeploymentsCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        PatchDeploymentInput: &shared.PatchDeploymentInput{
            Description: sdk.String("amet"),
            Duration: sdk.String("dolor"),
            InstanceFilter: &shared.PatchInstanceFilter{
                All: sdk.Bool(false),
                GroupLabels: []shared.PatchInstanceFilterGroupLabel{
                    shared.PatchInstanceFilterGroupLabel{
                        Labels: map[string]string{
                            "tenetur": "molestiae",
                        },
                    },
                    shared.PatchInstanceFilterGroupLabel{
                        Labels: map[string]string{
                            "ullam": "velit",
                            "adipisci": "cupiditate",
                        },
                    },
                },
                InstanceNamePrefixes: []string{
                    "numquam",
                    "fugiat",
                    "molestiae",
                },
                Instances: []string{
                    "repellendus",
                    "saepe",
                    "amet",
                },
                Zones: []string{
                    "vel",
                    "necessitatibus",
                    "iste",
                },
            },
            Name: sdk.String("Priscilla McGlynn"),
            OneTimeSchedule: &shared.OneTimeSchedule{
                ExecuteTime: sdk.String("dolorum"),
            },
            PatchConfig: &shared.PatchConfig{
                Apt: &shared.AptSettings{
                    Excludes: []string{
                        "cum",
                        "in",
                        "delectus",
                    },
                    ExclusivePackages: []string{
                        "commodi",
                        "fugit",
                    },
                    Type: shared.AptSettingsTypeEnumDist.ToPointer(),
                },
                Goo: map[string]interface{}{
                    "doloremque": "est",
                    "qui": "praesentium",
                },
                MigInstancesAllowed: sdk.Bool(false),
                PostStep: &shared.ExecStep{
                    LinuxExecStepConfig: &shared.ExecStepConfig{
                        AllowedSuccessCodes: []int{
                            519132,
                        },
                        GcsObject: &shared.GcsObject{
                            Bucket: sdk.String("qui"),
                            GenerationNumber: sdk.String("deserunt"),
                            Object: sdk.String("eligendi"),
                        },
                        Interpreter: shared.ExecStepConfigInterpreterEnumNone.ToPointer(),
                        LocalPath: sdk.String("deleniti"),
                    },
                    WindowsExecStepConfig: &shared.ExecStepConfig{
                        AllowedSuccessCodes: []int{
                            667634,
                        },
                        GcsObject: &shared.GcsObject{
                            Bucket: sdk.String("reiciendis"),
                            GenerationNumber: sdk.String("possimus"),
                            Object: sdk.String("odit"),
                        },
                        Interpreter: shared.ExecStepConfigInterpreterEnumInterpreterUnspecified.ToPointer(),
                        LocalPath: sdk.String("inventore"),
                    },
                },
                PreStep: &shared.ExecStep{
                    LinuxExecStepConfig: &shared.ExecStepConfig{
                        AllowedSuccessCodes: []int{
                            703651,
                            708360,
                        },
                        GcsObject: &shared.GcsObject{
                            Bucket: sdk.String("deserunt"),
                            GenerationNumber: sdk.String("nisi"),
                            Object: sdk.String("ipsam"),
                        },
                        Interpreter: shared.ExecStepConfigInterpreterEnumInterpreterUnspecified.ToPointer(),
                        LocalPath: sdk.String("illo"),
                    },
                    WindowsExecStepConfig: &shared.ExecStepConfig{
                        AllowedSuccessCodes: []int{
                            279530,
                            908274,
                        },
                        GcsObject: &shared.GcsObject{
                            Bucket: sdk.String("quae"),
                            GenerationNumber: sdk.String("ea"),
                            Object: sdk.String("asperiores"),
                        },
                        Interpreter: shared.ExecStepConfigInterpreterEnumNone.ToPointer(),
                        LocalPath: sdk.String("quidem"),
                    },
                },
                RebootConfig: shared.PatchConfigRebootConfigEnumNever.ToPointer(),
                WindowsUpdate: &shared.WindowsUpdateSettings{
                    Classifications: []shared.WindowsUpdateSettingsClassificationsEnum{
                        shared.WindowsUpdateSettingsClassificationsEnumServicePack,
                        shared.WindowsUpdateSettingsClassificationsEnumUpdate,
                    },
                    Excludes: []string{
                        "molestias",
                        "architecto",
                    },
                    ExclusivePatches: []string{
                        "quisquam",
                        "praesentium",
                        "facilis",
                    },
                },
                Yum: &shared.YumSettings{
                    Excludes: []string{
                        "repudiandae",
                        "maiores",
                        "ipsum",
                        "commodi",
                    },
                    ExclusivePackages: []string{
                        "fugit",
                    },
                    Minimal: sdk.Bool(false),
                    Security: sdk.Bool(false),
                },
                Zypper: &shared.ZypperSettings{
                    Categories: []string{
                        "ex",
                        "neque",
                        "quod",
                    },
                    Excludes: []string{
                        "alias",
                    },
                    ExclusivePatches: []string{
                        "a",
                        "facere",
                    },
                    Severities: []string{
                        "atque",
                        "quaerat",
                        "aperiam",
                    },
                    WithOptional: sdk.Bool(false),
                    WithUpdate: sdk.Bool(false),
                },
            },
            RecurringSchedule: &shared.RecurringScheduleInput{
                EndTime: sdk.String("dignissimos"),
                Frequency: shared.RecurringScheduleFrequencyEnumWeekly.ToPointer(),
                Monthly: &shared.MonthlySchedule{
                    MonthDay: sdk.Int(264073),
                    WeekDayOfMonth: &shared.WeekDayOfMonth{
                        DayOfWeek: shared.WeekDayOfMonthDayOfWeekEnumFriday.ToPointer(),
                        DayOffset: sdk.Int(435931),
                        WeekOrdinal: sdk.Int(538368),
                    },
                },
                StartTime: sdk.String("officia"),
                TimeOfDay: &shared.TimeOfDay{
                    Hours: sdk.Int(572450),
                    Minutes: sdk.Int(674077),
                    Nanos: sdk.Int(224777),
                    Seconds: sdk.Int(322773),
                },
                TimeZone: &shared.TimeZone{
                    ID: sdk.String("d086b6f6-6fef-4020-a9f4-43b4257b992c"),
                    Version: sdk.String("corrupti"),
                },
                Weekly: &shared.WeeklySchedule{
                    DayOfWeek: shared.WeeklyScheduleDayOfWeekEnumSaturday.ToPointer(),
                },
            },
            Rollout: &shared.PatchRollout{
                DisruptionBudget: &shared.FixedOrPercent{
                    Fixed: sdk.Int(738832),
                    Percent: sdk.Int(842935),
                },
                Mode: shared.PatchRolloutModeEnumConcurrentZones.ToPointer(),
            },
        },
        AccessToken: sdk.String("commodi"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("autem"),
        Fields: sdk.String("dicta"),
        Key: sdk.String("recusandae"),
        OauthToken: sdk.String("sapiente"),
        Parent: "id",
        PatchDeploymentID: sdk.String("odit"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("inventore"),
        UploadType: sdk.String("iste"),
        UploadProtocol: sdk.String("atque"),
    }, operations.OsconfigProjectsPatchDeploymentsCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PatchDeployment != nil {
        // handle response
    }
}
```

## OsconfigProjectsPatchDeploymentsDelete

Delete an OS Config patch deployment.

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
    res, err := s.Projects.OsconfigProjectsPatchDeploymentsDelete(ctx, operations.OsconfigProjectsPatchDeploymentsDeleteRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("ullam"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("doloribus"),
        Fields: sdk.String("pariatur"),
        Key: sdk.String("aut"),
        Name: "Joey Upton",
        OauthToken: sdk.String("labore"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("voluptate"),
        UploadType: sdk.String("voluptatibus"),
        UploadProtocol: sdk.String("quam"),
    }, operations.OsconfigProjectsPatchDeploymentsDeleteSecurity{
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

## OsconfigProjectsPatchDeploymentsList

Get a page of OS Config patch deployments.

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
    res, err := s.Projects.OsconfigProjectsPatchDeploymentsList(ctx, operations.OsconfigProjectsPatchDeploymentsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("dolorem"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("a"),
        Fields: sdk.String("perferendis"),
        Key: sdk.String("quaerat"),
        OauthToken: sdk.String("excepturi"),
        PageSize: sdk.Int64(399946),
        PageToken: sdk.String("dolore"),
        Parent: "voluptatem",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("illum"),
        UploadType: sdk.String("laboriosam"),
        UploadProtocol: sdk.String("culpa"),
    }, operations.OsconfigProjectsPatchDeploymentsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListPatchDeploymentsResponse != nil {
        // handle response
    }
}
```

## OsconfigProjectsPatchDeploymentsPatch

Update an OS Config patch deployment.

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
    res, err := s.Projects.OsconfigProjectsPatchDeploymentsPatch(ctx, operations.OsconfigProjectsPatchDeploymentsPatchRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        PatchDeploymentInput: &shared.PatchDeploymentInput{
            Description: sdk.String("atque"),
            Duration: sdk.String("ratione"),
            InstanceFilter: &shared.PatchInstanceFilter{
                All: sdk.Bool(false),
                GroupLabels: []shared.PatchInstanceFilterGroupLabel{
                    shared.PatchInstanceFilterGroupLabel{
                        Labels: map[string]string{
                            "atque": "nihil",
                            "culpa": "temporibus",
                            "a": "ad",
                            "cupiditate": "suscipit",
                        },
                    },
                },
                InstanceNamePrefixes: []string{
                    "repellendus",
                    "delectus",
                    "ab",
                    "mollitia",
                },
                Instances: []string{
                    "praesentium",
                    "neque",
                    "quam",
                    "animi",
                },
                Zones: []string{
                    "voluptatum",
                    "voluptatem",
                    "quisquam",
                    "vitae",
                },
            },
            Name: sdk.String("Juan Mayer"),
            OneTimeSchedule: &shared.OneTimeSchedule{
                ExecuteTime: sdk.String("quis"),
            },
            PatchConfig: &shared.PatchConfig{
                Apt: &shared.AptSettings{
                    Excludes: []string{
                        "officia",
                        "iste",
                        "unde",
                    },
                    ExclusivePackages: []string{
                        "laboriosam",
                        "ducimus",
                        "voluptatum",
                    },
                    Type: shared.AptSettingsTypeEnumUpgrade.ToPointer(),
                },
                Goo: map[string]interface{}{
                    "dolor": "hic",
                    "iure": "sint",
                    "autem": "iste",
                },
                MigInstancesAllowed: sdk.Bool(false),
                PostStep: &shared.ExecStep{
                    LinuxExecStepConfig: &shared.ExecStepConfig{
                        AllowedSuccessCodes: []int{
                            67855,
                            683783,
                            952216,
                        },
                        GcsObject: &shared.GcsObject{
                            Bucket: sdk.String("dolor"),
                            GenerationNumber: sdk.String("voluptatum"),
                            Object: sdk.String("molestias"),
                        },
                        Interpreter: shared.ExecStepConfigInterpreterEnumPowershell.ToPointer(),
                        LocalPath: sdk.String("repudiandae"),
                    },
                    WindowsExecStepConfig: &shared.ExecStepConfig{
                        AllowedSuccessCodes: []int{
                            234347,
                        },
                        GcsObject: &shared.GcsObject{
                            Bucket: sdk.String("autem"),
                            GenerationNumber: sdk.String("vitae"),
                            Object: sdk.String("numquam"),
                        },
                        Interpreter: shared.ExecStepConfigInterpreterEnumNone.ToPointer(),
                        LocalPath: sdk.String("modi"),
                    },
                },
                PreStep: &shared.ExecStep{
                    LinuxExecStepConfig: &shared.ExecStepConfig{
                        AllowedSuccessCodes: []int{
                            791454,
                            452481,
                            623867,
                        },
                        GcsObject: &shared.GcsObject{
                            Bucket: sdk.String("reprehenderit"),
                            GenerationNumber: sdk.String("reprehenderit"),
                            Object: sdk.String("animi"),
                        },
                        Interpreter: shared.ExecStepConfigInterpreterEnumInterpreterUnspecified.ToPointer(),
                        LocalPath: sdk.String("voluptates"),
                    },
                    WindowsExecStepConfig: &shared.ExecStepConfig{
                        AllowedSuccessCodes: []int{
                            185862,
                            962024,
                            348573,
                            217552,
                        },
                        GcsObject: &shared.GcsObject{
                            Bucket: sdk.String("laboriosam"),
                            GenerationNumber: sdk.String("doloremque"),
                            Object: sdk.String("sed"),
                        },
                        Interpreter: shared.ExecStepConfigInterpreterEnumShell.ToPointer(),
                        LocalPath: sdk.String("debitis"),
                    },
                },
                RebootConfig: shared.PatchConfigRebootConfigEnumNever.ToPointer(),
                WindowsUpdate: &shared.WindowsUpdateSettings{
                    Classifications: []shared.WindowsUpdateSettingsClassificationsEnum{
                        shared.WindowsUpdateSettingsClassificationsEnumUpdate,
                        shared.WindowsUpdateSettingsClassificationsEnumUpdate,
                        shared.WindowsUpdateSettingsClassificationsEnumFeaturePack,
                        shared.WindowsUpdateSettingsClassificationsEnumSecurity,
                    },
                    Excludes: []string{
                        "illo",
                        "veniam",
                    },
                    ExclusivePatches: []string{
                        "necessitatibus",
                    },
                },
                Yum: &shared.YumSettings{
                    Excludes: []string{
                        "dignissimos",
                        "itaque",
                        "explicabo",
                        "ullam",
                    },
                    ExclusivePackages: []string{
                        "delectus",
                    },
                    Minimal: sdk.Bool(false),
                    Security: sdk.Bool(false),
                },
                Zypper: &shared.ZypperSettings{
                    Categories: []string{
                        "quod",
                        "sunt",
                    },
                    Excludes: []string{
                        "quam",
                        "illum",
                    },
                    ExclusivePatches: []string{
                        "officia",
                        "est",
                        "in",
                        "illo",
                    },
                    Severities: []string{
                        "consequatur",
                        "delectus",
                    },
                    WithOptional: sdk.Bool(false),
                    WithUpdate: sdk.Bool(false),
                },
            },
            RecurringSchedule: &shared.RecurringScheduleInput{
                EndTime: sdk.String("incidunt"),
                Frequency: shared.RecurringScheduleFrequencyEnumWeekly.ToPointer(),
                Monthly: &shared.MonthlySchedule{
                    MonthDay: sdk.Int(362693),
                    WeekDayOfMonth: &shared.WeekDayOfMonth{
                        DayOfWeek: shared.WeekDayOfMonthDayOfWeekEnumFriday.ToPointer(),
                        DayOffset: sdk.Int(776750),
                        WeekOrdinal: sdk.Int(804210),
                    },
                },
                StartTime: sdk.String("delectus"),
                TimeOfDay: &shared.TimeOfDay{
                    Hours: sdk.Int(385383),
                    Minutes: sdk.Int(387567),
                    Nanos: sdk.Int(464290),
                    Seconds: sdk.Int(686690),
                },
                TimeZone: &shared.TimeZone{
                    ID: sdk.String("af9bbad1-85fe-4431-96bf-5c838fbb8c20"),
                    Version: sdk.String("impedit"),
                },
                Weekly: &shared.WeeklySchedule{
                    DayOfWeek: shared.WeeklyScheduleDayOfWeekEnumFriday.ToPointer(),
                },
            },
            Rollout: &shared.PatchRollout{
                DisruptionBudget: &shared.FixedOrPercent{
                    Fixed: sdk.Int(406272),
                    Percent: sdk.Int(483626),
                },
                Mode: shared.PatchRolloutModeEnumConcurrentZones.ToPointer(),
            },
        },
        AccessToken: sdk.String("minus"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("distinctio"),
        Fields: sdk.String("eius"),
        Key: sdk.String("eos"),
        Name: "Elvira Marquardt",
        OauthToken: sdk.String("laboriosam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("eos"),
        UpdateMask: sdk.String("amet"),
        UploadType: sdk.String("incidunt"),
        UploadProtocol: sdk.String("porro"),
    }, operations.OsconfigProjectsPatchDeploymentsPatchSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PatchDeployment != nil {
        // handle response
    }
}
```

## OsconfigProjectsPatchDeploymentsPause

Change state of patch deployment to "PAUSED". Patch deployment in paused state doesn't generate patch jobs.

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
    res, err := s.Projects.OsconfigProjectsPatchDeploymentsPause(ctx, operations.OsconfigProjectsPatchDeploymentsPauseRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        RequestBody: map[string]interface{}{
            "voluptate": "tempore",
            "in": "omnis",
            "possimus": "tenetur",
            "recusandae": "expedita",
        },
        AccessToken: sdk.String("iusto"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("harum"),
        Fields: sdk.String("ad"),
        Key: sdk.String("quod"),
        Name: "Christy Swift",
        OauthToken: sdk.String("officia"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("maiores"),
        UploadType: sdk.String("cupiditate"),
        UploadProtocol: sdk.String("illo"),
    }, operations.OsconfigProjectsPatchDeploymentsPauseSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PatchDeployment != nil {
        // handle response
    }
}
```

## OsconfigProjectsPatchDeploymentsResume

Change state of patch deployment back to "ACTIVE". Patch deployment in active state continues to generate patch jobs.

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
    res, err := s.Projects.OsconfigProjectsPatchDeploymentsResume(ctx, operations.OsconfigProjectsPatchDeploymentsResumeRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        RequestBody: map[string]interface{}{
            "eaque": "ex",
            "eveniet": "delectus",
        },
        AccessToken: sdk.String("deleniti"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("aut"),
        Fields: sdk.String("dolorum"),
        Key: sdk.String("nostrum"),
        Name: "Juana Gerhold",
        OauthToken: sdk.String("maiores"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("veritatis"),
        UploadType: sdk.String("autem"),
        UploadProtocol: sdk.String("earum"),
    }, operations.OsconfigProjectsPatchDeploymentsResumeSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PatchDeployment != nil {
        // handle response
    }
}
```

## OsconfigProjectsPatchJobsCancel

Cancel a patch job. The patch job must be active. Canceled patch jobs cannot be restarted.

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
    res, err := s.Projects.OsconfigProjectsPatchJobsCancel(ctx, operations.OsconfigProjectsPatchJobsCancelRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        RequestBody: map[string]interface{}{
            "possimus": "nesciunt",
            "corrupti": "nostrum",
        },
        AccessToken: sdk.String("fuga"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("maxime"),
        Fields: sdk.String("numquam"),
        Key: sdk.String("laborum"),
        Name: "Miss Ben Ferry",
        OauthToken: sdk.String("provident"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("necessitatibus"),
        UploadType: sdk.String("fugit"),
        UploadProtocol: sdk.String("autem"),
    }, operations.OsconfigProjectsPatchJobsCancelSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PatchJob != nil {
        // handle response
    }
}
```

## OsconfigProjectsPatchJobsExecute

Patch VM instances by creating and running a patch job.

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
    res, err := s.Projects.OsconfigProjectsPatchJobsExecute(ctx, operations.OsconfigProjectsPatchJobsExecuteRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        ExecutePatchJobRequest: &shared.ExecutePatchJobRequest{
            Description: sdk.String("eveniet"),
            DisplayName: sdk.String("fugiat"),
            DryRun: sdk.Bool(false),
            Duration: sdk.String("blanditiis"),
            InstanceFilter: &shared.PatchInstanceFilter{
                All: sdk.Bool(false),
                GroupLabels: []shared.PatchInstanceFilterGroupLabel{
                    shared.PatchInstanceFilterGroupLabel{
                        Labels: map[string]string{
                            "sapiente": "repellendus",
                            "facilis": "molestias",
                            "dolore": "et",
                        },
                    },
                    shared.PatchInstanceFilterGroupLabel{
                        Labels: map[string]string{
                            "maiores": "nisi",
                        },
                    },
                    shared.PatchInstanceFilterGroupLabel{
                        Labels: map[string]string{
                            "tempore": "expedita",
                        },
                    },
                    shared.PatchInstanceFilterGroupLabel{
                        Labels: map[string]string{
                            "blanditiis": "vitae",
                            "iusto": "atque",
                            "velit": "molestiae",
                            "nam": "aperiam",
                        },
                    },
                },
                InstanceNamePrefixes: []string{
                    "mollitia",
                },
                Instances: []string{
                    "at",
                    "quibusdam",
                    "quam",
                    "deleniti",
                },
                Zones: []string{
                    "vel",
                    "eos",
                    "labore",
                },
            },
            PatchConfig: &shared.PatchConfig{
                Apt: &shared.AptSettings{
                    Excludes: []string{
                        "blanditiis",
                    },
                    ExclusivePackages: []string{
                        "accusamus",
                        "distinctio",
                        "incidunt",
                    },
                    Type: shared.AptSettingsTypeEnumTypeUnspecified.ToPointer(),
                },
                Goo: map[string]interface{}{
                    "ducimus": "consectetur",
                    "sapiente": "quis",
                    "accusantium": "ratione",
                },
                MigInstancesAllowed: sdk.Bool(false),
                PostStep: &shared.ExecStep{
                    LinuxExecStepConfig: &shared.ExecStepConfig{
                        AllowedSuccessCodes: []int{
                            990540,
                        },
                        GcsObject: &shared.GcsObject{
                            Bucket: sdk.String("architecto"),
                            GenerationNumber: sdk.String("sint"),
                            Object: sdk.String("possimus"),
                        },
                        Interpreter: shared.ExecStepConfigInterpreterEnumShell.ToPointer(),
                        LocalPath: sdk.String("asperiores"),
                    },
                    WindowsExecStepConfig: &shared.ExecStepConfig{
                        AllowedSuccessCodes: []int{
                            159729,
                        },
                        GcsObject: &shared.GcsObject{
                            Bucket: sdk.String("nemo"),
                            GenerationNumber: sdk.String("nobis"),
                            Object: sdk.String("debitis"),
                        },
                        Interpreter: shared.ExecStepConfigInterpreterEnumNone.ToPointer(),
                        LocalPath: sdk.String("veritatis"),
                    },
                },
                PreStep: &shared.ExecStep{
                    LinuxExecStepConfig: &shared.ExecStepConfig{
                        AllowedSuccessCodes: []int{
                            165483,
                            929849,
                        },
                        GcsObject: &shared.GcsObject{
                            Bucket: sdk.String("error"),
                            GenerationNumber: sdk.String("expedita"),
                            Object: sdk.String("error"),
                        },
                        Interpreter: shared.ExecStepConfigInterpreterEnumPowershell.ToPointer(),
                        LocalPath: sdk.String("temporibus"),
                    },
                    WindowsExecStepConfig: &shared.ExecStepConfig{
                        AllowedSuccessCodes: []int{
                            935493,
                            327263,
                        },
                        GcsObject: &shared.GcsObject{
                            Bucket: sdk.String("odit"),
                            GenerationNumber: sdk.String("odit"),
                            Object: sdk.String("eius"),
                        },
                        Interpreter: shared.ExecStepConfigInterpreterEnumShell.ToPointer(),
                        LocalPath: sdk.String("vel"),
                    },
                },
                RebootConfig: shared.PatchConfigRebootConfigEnumAlways.ToPointer(),
                WindowsUpdate: &shared.WindowsUpdateSettings{
                    Classifications: []shared.WindowsUpdateSettingsClassificationsEnum{
                        shared.WindowsUpdateSettingsClassificationsEnumUpdate,
                    },
                    Excludes: []string{
                        "sunt",
                    },
                    ExclusivePatches: []string{
                        "cum",
                    },
                },
                Yum: &shared.YumSettings{
                    Excludes: []string{
                        "corrupti",
                        "non",
                    },
                    ExclusivePackages: []string{
                        "vero",
                        "eligendi",
                    },
                    Minimal: sdk.Bool(false),
                    Security: sdk.Bool(false),
                },
                Zypper: &shared.ZypperSettings{
                    Categories: []string{
                        "omnis",
                        "recusandae",
                    },
                    Excludes: []string{
                        "voluptatibus",
                    },
                    ExclusivePatches: []string{
                        "in",
                        "repellat",
                    },
                    Severities: []string{
                        "cumque",
                    },
                    WithOptional: sdk.Bool(false),
                    WithUpdate: sdk.Bool(false),
                },
            },
            Rollout: &shared.PatchRollout{
                DisruptionBudget: &shared.FixedOrPercent{
                    Fixed: sdk.Int(291666),
                    Percent: sdk.Int(762581),
                },
                Mode: shared.PatchRolloutModeEnumConcurrentZones.ToPointer(),
            },
        },
        AccessToken: sdk.String("repudiandae"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("libero"),
        Fields: sdk.String("suscipit"),
        Key: sdk.String("illum"),
        OauthToken: sdk.String("iusto"),
        Parent: "aliquid",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("sint"),
        UploadType: sdk.String("aliquid"),
        UploadProtocol: sdk.String("repellat"),
    }, operations.OsconfigProjectsPatchJobsExecuteSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PatchJob != nil {
        // handle response
    }
}
```

## OsconfigProjectsPatchJobsGet

Get the patch job. This can be used to track the progress of an ongoing patch job or review the details of completed jobs.

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
    res, err := s.Projects.OsconfigProjectsPatchJobsGet(ctx, operations.OsconfigProjectsPatchJobsGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("consectetur"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("ullam"),
        Fields: sdk.String("nihil"),
        Key: sdk.String("eius"),
        Name: "Mrs. Ana Armstrong",
        OauthToken: sdk.String("nihil"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("officiis"),
        UploadType: sdk.String("dolore"),
        UploadProtocol: sdk.String("magnam"),
        View: operations.OsconfigProjectsPatchJobsGetViewEnumFull.ToPointer(),
    }, operations.OsconfigProjectsPatchJobsGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PatchJob != nil {
        // handle response
    }
}
```

## OsconfigProjectsPatchJobsInstanceDetailsList

Get a list of instance details for a given patch job.

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
    res, err := s.Projects.OsconfigProjectsPatchJobsInstanceDetailsList(ctx, operations.OsconfigProjectsPatchJobsInstanceDetailsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("dicta"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("praesentium"),
        Fields: sdk.String("libero"),
        Filter: sdk.String("consequatur"),
        Key: sdk.String("totam"),
        OauthToken: sdk.String("tempora"),
        PageSize: sdk.Int64(777193),
        PageToken: sdk.String("dolor"),
        Parent: "sunt",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("omnis"),
        UploadType: sdk.String("quam"),
        UploadProtocol: sdk.String("officiis"),
    }, operations.OsconfigProjectsPatchJobsInstanceDetailsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListPatchJobInstanceDetailsResponse != nil {
        // handle response
    }
}
```

## OsconfigProjectsPatchJobsList

Get a list of patch jobs.

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
    res, err := s.Projects.OsconfigProjectsPatchJobsList(ctx, operations.OsconfigProjectsPatchJobsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("excepturi"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("deserunt"),
        Fields: sdk.String("odit"),
        Filter: sdk.String("incidunt"),
        Key: sdk.String("corporis"),
        OauthToken: sdk.String("quaerat"),
        PageSize: sdk.Int64(381639),
        PageToken: sdk.String("ducimus"),
        Parent: "tenetur",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("excepturi"),
        UploadType: sdk.String("modi"),
        UploadProtocol: sdk.String("corrupti"),
    }, operations.OsconfigProjectsPatchJobsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListPatchJobsResponse != nil {
        // handle response
    }
}
```
