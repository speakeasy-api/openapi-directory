# Projects

### Available Operations

* [OsconfigProjectsGuestPoliciesCreate](#osconfigprojectsguestpoliciescreate) - Create an OS Config guest policy.
* [OsconfigProjectsGuestPoliciesList](#osconfigprojectsguestpolicieslist) - Get a page of OS Config guest policies.
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
* [OsconfigProjectsZonesInstancesLookupEffectiveGuestPolicy](#osconfigprojectszonesinstanceslookupeffectiveguestpolicy) - Lookup the effective guest policy that applies to a VM instance. This lookup merges all policies that are assigned to the instance ancestry.

## OsconfigProjectsGuestPoliciesCreate

Create an OS Config guest policy.

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
    res, err := s.Projects.OsconfigProjectsGuestPoliciesCreate(ctx, operations.OsconfigProjectsGuestPoliciesCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GuestPolicyInput: &shared.GuestPolicyInput{
            Assignment: &shared.Assignment{
                GroupLabels: []shared.AssignmentGroupLabel{
                    shared.AssignmentGroupLabel{
                        Labels: map[string]string{
                            "consectetur": "vero",
                            "tenetur": "dignissimos",
                        },
                    },
                    shared.AssignmentGroupLabel{
                        Labels: map[string]string{
                            "distinctio": "quod",
                            "odio": "similique",
                            "facilis": "vero",
                            "ducimus": "dolore",
                        },
                    },
                    shared.AssignmentGroupLabel{
                        Labels: map[string]string{
                            "illum": "sequi",
                            "natus": "impedit",
                            "aut": "voluptatibus",
                            "exercitationem": "nulla",
                        },
                    },
                    shared.AssignmentGroupLabel{
                        Labels: map[string]string{
                            "porro": "maiores",
                        },
                    },
                },
                InstanceNamePrefixes: []string{
                    "iusto",
                    "eligendi",
                    "ducimus",
                    "alias",
                },
                Instances: []string{
                    "tempora",
                    "ipsam",
                    "ea",
                },
                OsTypes: []shared.AssignmentOsType{
                    shared.AssignmentOsType{
                        OsArchitecture: sdk.String("vel"),
                        OsShortName: sdk.String("possimus"),
                        OsVersion: sdk.String("magnam"),
                    },
                },
                Zones: []string{
                    "ex",
                },
            },
            Description: sdk.String("laudantium"),
            Etag: sdk.String("dicta"),
            Name: sdk.String("Elisa Boyle"),
            PackageRepositories: []shared.PackageRepository{
                shared.PackageRepository{
                    Apt: &shared.AptRepository{
                        ArchiveType: shared.AptRepositoryArchiveTypeEnumDebSrc.ToPointer(),
                        Components: []string{
                            "sapiente",
                            "quisquam",
                        },
                        Distribution: sdk.String("saepe"),
                        GpgKey: sdk.String("ea"),
                        URI: sdk.String("https://grown-fame.info"),
                    },
                    Goo: &shared.GooRepository{
                        Name: sdk.String("Megan Jaskolski"),
                        URL: sdk.String("recusandae"),
                    },
                    Yum: &shared.YumRepository{
                        BaseURL: sdk.String("aspernatur"),
                        DisplayName: sdk.String("minima"),
                        GpgKeys: []string{
                            "a",
                        },
                        ID: sdk.String("b008c42e-141a-4ac3-a6c8-dd6b14429074"),
                    },
                    Zypper: &shared.ZypperRepository{
                        BaseURL: sdk.String("odio"),
                        DisplayName: sdk.String("eius"),
                        GpgKeys: []string{
                            "esse",
                            "rem",
                        },
                        ID: sdk.String("a7bd466d-28c1-40ab-bcdc-a4251904e523"),
                    },
                },
                shared.PackageRepository{
                    Apt: &shared.AptRepository{
                        ArchiveType: shared.AptRepositoryArchiveTypeEnumDebSrc.ToPointer(),
                        Components: []string{
                            "recusandae",
                            "aperiam",
                        },
                        Distribution: sdk.String("distinctio"),
                        GpgKey: sdk.String("quod"),
                        URI: sdk.String("http://blind-intercourse.name"),
                    },
                    Goo: &shared.GooRepository{
                        Name: sdk.String("Tom Kuhn"),
                        URL: sdk.String("sapiente"),
                    },
                    Yum: &shared.YumRepository{
                        BaseURL: sdk.String("dolores"),
                        DisplayName: sdk.String("deserunt"),
                        GpgKeys: []string{
                            "accusantium",
                            "porro",
                        },
                        ID: sdk.String("688282aa-4825-462f-a22e-9817ee17cbe6"),
                    },
                    Zypper: &shared.ZypperRepository{
                        BaseURL: sdk.String("quasi"),
                        DisplayName: sdk.String("saepe"),
                        GpgKeys: []string{
                            "harum",
                            "molestiae",
                        },
                        ID: sdk.String("b95bc0ab-3c20-4c4f-b789-fd871f99dd2e"),
                    },
                },
                shared.PackageRepository{
                    Apt: &shared.AptRepository{
                        ArchiveType: shared.AptRepositoryArchiveTypeEnumDebSrc.ToPointer(),
                        Components: []string{
                            "veritatis",
                            "consequuntur",
                            "quasi",
                            "similique",
                        },
                        Distribution: sdk.String("culpa"),
                        GpgKey: sdk.String("aliquid"),
                        URI: sdk.String("https://barren-tuxedo.info"),
                    },
                    Goo: &shared.GooRepository{
                        Name: sdk.String("Charlotte Rempel"),
                        URL: sdk.String("accusantium"),
                    },
                    Yum: &shared.YumRepository{
                        BaseURL: sdk.String("aliquam"),
                        DisplayName: sdk.String("sapiente"),
                        GpgKeys: []string{
                            "ullam",
                        },
                        ID: sdk.String("756082d6-8ea1-49f1-9170-51339d08086a"),
                    },
                    Zypper: &shared.ZypperRepository{
                        BaseURL: sdk.String("ab"),
                        DisplayName: sdk.String("corrupti"),
                        GpgKeys: []string{
                            "voluptatem",
                            "dolor",
                        },
                        ID: sdk.String("94c26071-f93f-45f0-a42d-ac7af515cc41"),
                    },
                },
            },
            Packages: []shared.Package{
                shared.Package{
                    DesiredState: shared.PackageDesiredStateEnumUpdated.ToPointer(),
                    Manager: shared.PackageManagerEnumYum.ToPointer(),
                    Name: sdk.String("Sheila Nader"),
                },
            },
            Recipes: []shared.SoftwareRecipe{
                shared.SoftwareRecipe{
                    Artifacts: []shared.SoftwareRecipeArtifact{
                        shared.SoftwareRecipeArtifact{
                            AllowInsecure: sdk.Bool(false),
                            Gcs: &shared.SoftwareRecipeArtifactGcs{
                                Bucket: sdk.String("vel"),
                                Generation: sdk.String("ducimus"),
                                Object: sdk.String("quos"),
                            },
                            ID: sdk.String("64dbb675-fd5e-460b-b75e-d4f6fbee41f3"),
                            Remote: &shared.SoftwareRecipeArtifactRemote{
                                Checksum: sdk.String("non"),
                                URI: sdk.String("http://canine-kilometer.org"),
                            },
                        },
                        shared.SoftwareRecipeArtifact{
                            AllowInsecure: sdk.Bool(false),
                            Gcs: &shared.SoftwareRecipeArtifactGcs{
                                Bucket: sdk.String("debitis"),
                                Generation: sdk.String("consectetur"),
                                Object: sdk.String("corporis"),
                            },
                            ID: sdk.String("b60eb1ea-4265-455b-a3c2-8744ed53b88f"),
                            Remote: &shared.SoftwareRecipeArtifactRemote{
                                Checksum: sdk.String("nesciunt"),
                                URI: sdk.String("https://muddy-suede.name"),
                            },
                        },
                        shared.SoftwareRecipeArtifact{
                            AllowInsecure: sdk.Bool(false),
                            Gcs: &shared.SoftwareRecipeArtifactGcs{
                                Bucket: sdk.String("hic"),
                                Generation: sdk.String("exercitationem"),
                                Object: sdk.String("nobis"),
                            },
                            ID: sdk.String("0b2f2fb7-b194-4a27-ab26-916fe1f08f42"),
                            Remote: &shared.SoftwareRecipeArtifactRemote{
                                Checksum: sdk.String("provident"),
                                URI: sdk.String("http://unlucky-cousin.info"),
                            },
                        },
                        shared.SoftwareRecipeArtifact{
                            AllowInsecure: sdk.Bool(false),
                            Gcs: &shared.SoftwareRecipeArtifactGcs{
                                Bucket: sdk.String("occaecati"),
                                Generation: sdk.String("quos"),
                                Object: sdk.String("voluptatibus"),
                            },
                            ID: sdk.String("447f603e-8b44-45e8-8ca5-5efd20e457e1"),
                            Remote: &shared.SoftwareRecipeArtifactRemote{
                                Checksum: sdk.String("laudantium"),
                                URI: sdk.String("http://luxurious-representative.info"),
                            },
                        },
                    },
                    DesiredState: shared.SoftwareRecipeDesiredStateEnumUpdated.ToPointer(),
                    InstallSteps: []shared.SoftwareRecipeStep{
                        shared.SoftwareRecipeStep{
                            ArchiveExtraction: &shared.SoftwareRecipeStepExtractArchive{
                                ArtifactID: sdk.String("error"),
                                Destination: sdk.String("hic"),
                                Type: shared.SoftwareRecipeStepExtractArchiveTypeEnumTarLzma.ToPointer(),
                            },
                            DpkgInstallation: &shared.SoftwareRecipeStepInstallDpkg{
                                ArtifactID: sdk.String("debitis"),
                            },
                            FileCopy: &shared.SoftwareRecipeStepCopyFile{
                                ArtifactID: sdk.String("neque"),
                                Destination: sdk.String("dolorum"),
                                Overwrite: sdk.Bool(false),
                                Permissions: sdk.String("nostrum"),
                            },
                            FileExec: &shared.SoftwareRecipeStepExecFile{
                                AllowedExitCodes: []int{
                                    676243,
                                    548361,
                                    879235,
                                },
                                Args: []string{
                                    "atque",
                                    "fugit",
                                },
                                ArtifactID: sdk.String("ut"),
                                LocalPath: sdk.String("fugiat"),
                            },
                            MsiInstallation: &shared.SoftwareRecipeStepInstallMsi{
                                AllowedExitCodes: []int{
                                    635057,
                                },
                                ArtifactID: sdk.String("expedita"),
                                Flags: []string{
                                    "consequatur",
                                    "esse",
                                },
                            },
                            RpmInstallation: &shared.SoftwareRecipeStepInstallRpm{
                                ArtifactID: sdk.String("ipsam"),
                            },
                            ScriptRun: &shared.SoftwareRecipeStepRunScript{
                                AllowedExitCodes: []int{
                                    530537,
                                },
                                Interpreter: shared.SoftwareRecipeStepRunScriptInterpreterEnumShell.ToPointer(),
                                Script: sdk.String("repudiandae"),
                            },
                        },
                        shared.SoftwareRecipeStep{
                            ArchiveExtraction: &shared.SoftwareRecipeStepExtractArchive{
                                ArtifactID: sdk.String("corporis"),
                                Destination: sdk.String("et"),
                                Type: shared.SoftwareRecipeStepExtractArchiveTypeEnumTarBzip.ToPointer(),
                            },
                            DpkgInstallation: &shared.SoftwareRecipeStepInstallDpkg{
                                ArtifactID: sdk.String("ex"),
                            },
                            FileCopy: &shared.SoftwareRecipeStepCopyFile{
                                ArtifactID: sdk.String("sed"),
                                Destination: sdk.String("sit"),
                                Overwrite: sdk.Bool(false),
                                Permissions: sdk.String("vel"),
                            },
                            FileExec: &shared.SoftwareRecipeStepExecFile{
                                AllowedExitCodes: []int{
                                    906172,
                                    622231,
                                },
                                Args: []string{
                                    "incidunt",
                                },
                                ArtifactID: sdk.String("reiciendis"),
                                LocalPath: sdk.String("dolorem"),
                            },
                            MsiInstallation: &shared.SoftwareRecipeStepInstallMsi{
                                AllowedExitCodes: []int{
                                    115703,
                                    99416,
                                    577140,
                                },
                                ArtifactID: sdk.String("labore"),
                                Flags: []string{
                                    "atque",
                                    "laborum",
                                    "nam",
                                },
                            },
                            RpmInstallation: &shared.SoftwareRecipeStepInstallRpm{
                                ArtifactID: sdk.String("tenetur"),
                            },
                            ScriptRun: &shared.SoftwareRecipeStepRunScript{
                                AllowedExitCodes: []int{
                                    2703,
                                    227084,
                                },
                                Interpreter: shared.SoftwareRecipeStepRunScriptInterpreterEnumShell.ToPointer(),
                                Script: sdk.String("voluptate"),
                            },
                        },
                        shared.SoftwareRecipeStep{
                            ArchiveExtraction: &shared.SoftwareRecipeStepExtractArchive{
                                ArtifactID: sdk.String("unde"),
                                Destination: sdk.String("reiciendis"),
                                Type: shared.SoftwareRecipeStepExtractArchiveTypeEnumTarLzma.ToPointer(),
                            },
                            DpkgInstallation: &shared.SoftwareRecipeStepInstallDpkg{
                                ArtifactID: sdk.String("repellendus"),
                            },
                            FileCopy: &shared.SoftwareRecipeStepCopyFile{
                                ArtifactID: sdk.String("delectus"),
                                Destination: sdk.String("voluptates"),
                                Overwrite: sdk.Bool(false),
                                Permissions: sdk.String("perferendis"),
                            },
                            FileExec: &shared.SoftwareRecipeStepExecFile{
                                AllowedExitCodes: []int{
                                    696483,
                                    440666,
                                    813679,
                                },
                                Args: []string{
                                    "praesentium",
                                    "mollitia",
                                    "veniam",
                                },
                                ArtifactID: sdk.String("voluptatem"),
                                LocalPath: sdk.String("quisquam"),
                            },
                            MsiInstallation: &shared.SoftwareRecipeStepInstallMsi{
                                AllowedExitCodes: []int{
                                    97243,
                                    542457,
                                    442036,
                                    991142,
                                },
                                ArtifactID: sdk.String("totam"),
                                Flags: []string{
                                    "quidem",
                                    "maxime",
                                },
                            },
                            RpmInstallation: &shared.SoftwareRecipeStepInstallRpm{
                                ArtifactID: sdk.String("et"),
                            },
                            ScriptRun: &shared.SoftwareRecipeStepRunScript{
                                AllowedExitCodes: []int{
                                    227759,
                                    826825,
                                },
                                Interpreter: shared.SoftwareRecipeStepRunScriptInterpreterEnumShell.ToPointer(),
                                Script: sdk.String("atque"),
                            },
                        },
                    },
                    Name: sdk.String("Frankie Torphy"),
                    UpdateSteps: []shared.SoftwareRecipeStep{
                        shared.SoftwareRecipeStep{
                            ArchiveExtraction: &shared.SoftwareRecipeStepExtractArchive{
                                ArtifactID: sdk.String("aspernatur"),
                                Destination: sdk.String("ex"),
                                Type: shared.SoftwareRecipeStepExtractArchiveTypeEnumZip.ToPointer(),
                            },
                            DpkgInstallation: &shared.SoftwareRecipeStepInstallDpkg{
                                ArtifactID: sdk.String("corrupti"),
                            },
                            FileCopy: &shared.SoftwareRecipeStepCopyFile{
                                ArtifactID: sdk.String("at"),
                                Destination: sdk.String("error"),
                                Overwrite: sdk.Bool(false),
                                Permissions: sdk.String("blanditiis"),
                            },
                            FileExec: &shared.SoftwareRecipeStepExecFile{
                                AllowedExitCodes: []int{
                                    922348,
                                    542129,
                                },
                                Args: []string{
                                    "sunt",
                                    "recusandae",
                                    "dolorum",
                                },
                                ArtifactID: sdk.String("repellendus"),
                                LocalPath: sdk.String("labore"),
                            },
                            MsiInstallation: &shared.SoftwareRecipeStepInstallMsi{
                                AllowedExitCodes: []int{
                                    42976,
                                    919783,
                                    116098,
                                    36033,
                                },
                                ArtifactID: sdk.String("beatae"),
                                Flags: []string{
                                    "enim",
                                },
                            },
                            RpmInstallation: &shared.SoftwareRecipeStepInstallRpm{
                                ArtifactID: sdk.String("laboriosam"),
                            },
                            ScriptRun: &shared.SoftwareRecipeStepRunScript{
                                AllowedExitCodes: []int{
                                    952143,
                                },
                                Interpreter: shared.SoftwareRecipeStepRunScriptInterpreterEnumShell.ToPointer(),
                                Script: sdk.String("magnam"),
                            },
                        },
                        shared.SoftwareRecipeStep{
                            ArchiveExtraction: &shared.SoftwareRecipeStepExtractArchive{
                                ArtifactID: sdk.String("saepe"),
                                Destination: sdk.String("consequuntur"),
                                Type: shared.SoftwareRecipeStepExtractArchiveTypeEnumTarLzma.ToPointer(),
                            },
                            DpkgInstallation: &shared.SoftwareRecipeStepInstallDpkg{
                                ArtifactID: sdk.String("officiis"),
                            },
                            FileCopy: &shared.SoftwareRecipeStepCopyFile{
                                ArtifactID: sdk.String("perspiciatis"),
                                Destination: sdk.String("in"),
                                Overwrite: sdk.Bool(false),
                                Permissions: sdk.String("adipisci"),
                            },
                            FileExec: &shared.SoftwareRecipeStepExecFile{
                                AllowedExitCodes: []int{
                                    580887,
                                    160230,
                                    145870,
                                    661118,
                                },
                                Args: []string{
                                    "reprehenderit",
                                    "error",
                                },
                                ArtifactID: sdk.String("illo"),
                                LocalPath: sdk.String("corporis"),
                            },
                            MsiInstallation: &shared.SoftwareRecipeStepInstallMsi{
                                AllowedExitCodes: []int{
                                    910994,
                                    247399,
                                    878493,
                                },
                                ArtifactID: sdk.String("doloremque"),
                                Flags: []string{
                                    "ipsa",
                                    "totam",
                                },
                            },
                            RpmInstallation: &shared.SoftwareRecipeStepInstallRpm{
                                ArtifactID: sdk.String("quae"),
                            },
                            ScriptRun: &shared.SoftwareRecipeStepRunScript{
                                AllowedExitCodes: []int{
                                    907733,
                                    184362,
                                },
                                Interpreter: shared.SoftwareRecipeStepRunScriptInterpreterEnumPowershell.ToPointer(),
                                Script: sdk.String("iure"),
                            },
                        },
                    },
                    Version: sdk.String("necessitatibus"),
                },
                shared.SoftwareRecipe{
                    Artifacts: []shared.SoftwareRecipeArtifact{
                        shared.SoftwareRecipeArtifact{
                            AllowInsecure: sdk.Bool(false),
                            Gcs: &shared.SoftwareRecipeArtifactGcs{
                                Bucket: sdk.String("laborum"),
                                Generation: sdk.String("distinctio"),
                                Object: sdk.String("voluptatum"),
                            },
                            ID: sdk.String("845f0597-a60f-4f2a-94a3-1e94764a3e86"),
                            Remote: &shared.SoftwareRecipeArtifactRemote{
                                Checksum: sdk.String("nemo"),
                                URI: sdk.String("https://jovial-networking.info"),
                            },
                        },
                    },
                    DesiredState: shared.SoftwareRecipeDesiredStateEnumInstalled.ToPointer(),
                    InstallSteps: []shared.SoftwareRecipeStep{
                        shared.SoftwareRecipeStep{
                            ArchiveExtraction: &shared.SoftwareRecipeStepExtractArchive{
                                ArtifactID: sdk.String("provident"),
                                Destination: sdk.String("aspernatur"),
                                Type: shared.SoftwareRecipeStepExtractArchiveTypeEnumTarGzip.ToPointer(),
                            },
                            DpkgInstallation: &shared.SoftwareRecipeStepInstallDpkg{
                                ArtifactID: sdk.String("quasi"),
                            },
                            FileCopy: &shared.SoftwareRecipeStepCopyFile{
                                ArtifactID: sdk.String("animi"),
                                Destination: sdk.String("nostrum"),
                                Overwrite: sdk.Bool(false),
                                Permissions: sdk.String("mollitia"),
                            },
                            FileExec: &shared.SoftwareRecipeStepExecFile{
                                AllowedExitCodes: []int{
                                    821719,
                                    659177,
                                    402767,
                                },
                                Args: []string{
                                    "accusantium",
                                    "repellat",
                                },
                                ArtifactID: sdk.String("doloribus"),
                                LocalPath: sdk.String("ullam"),
                            },
                            MsiInstallation: &shared.SoftwareRecipeStepInstallMsi{
                                AllowedExitCodes: []int{
                                    721407,
                                    937636,
                                },
                                ArtifactID: sdk.String("officia"),
                                Flags: []string{
                                    "placeat",
                                    "modi",
                                    "voluptatibus",
                                },
                            },
                            RpmInstallation: &shared.SoftwareRecipeStepInstallRpm{
                                ArtifactID: sdk.String("molestias"),
                            },
                            ScriptRun: &shared.SoftwareRecipeStepRunScript{
                                AllowedExitCodes: []int{
                                    956933,
                                    764562,
                                    113486,
                                    698249,
                                },
                                Interpreter: shared.SoftwareRecipeStepRunScriptInterpreterEnumInterpreterUnspecified.ToPointer(),
                                Script: sdk.String("quis"),
                            },
                        },
                        shared.SoftwareRecipeStep{
                            ArchiveExtraction: &shared.SoftwareRecipeStepExtractArchive{
                                ArtifactID: sdk.String("inventore"),
                                Destination: sdk.String("fugit"),
                                Type: shared.SoftwareRecipeStepExtractArchiveTypeEnumTarXz.ToPointer(),
                            },
                            DpkgInstallation: &shared.SoftwareRecipeStepInstallDpkg{
                                ArtifactID: sdk.String("quae"),
                            },
                            FileCopy: &shared.SoftwareRecipeStepCopyFile{
                                ArtifactID: sdk.String("perferendis"),
                                Destination: sdk.String("velit"),
                                Overwrite: sdk.Bool(false),
                                Permissions: sdk.String("aspernatur"),
                            },
                            FileExec: &shared.SoftwareRecipeStepExecFile{
                                AllowedExitCodes: []int{
                                    260628,
                                    521996,
                                },
                                Args: []string{
                                    "impedit",
                                    "eos",
                                    "sapiente",
                                    "eum",
                                },
                                ArtifactID: sdk.String("dicta"),
                                LocalPath: sdk.String("minima"),
                            },
                            MsiInstallation: &shared.SoftwareRecipeStepInstallMsi{
                                AllowedExitCodes: []int{
                                    583404,
                                },
                                ArtifactID: sdk.String("provident"),
                                Flags: []string{
                                    "soluta",
                                    "hic",
                                    "illum",
                                    "eaque",
                                },
                            },
                            RpmInstallation: &shared.SoftwareRecipeStepInstallRpm{
                                ArtifactID: sdk.String("earum"),
                            },
                            ScriptRun: &shared.SoftwareRecipeStepRunScript{
                                AllowedExitCodes: []int{
                                    983427,
                                    891801,
                                    399802,
                                },
                                Interpreter: shared.SoftwareRecipeStepRunScriptInterpreterEnumPowershell.ToPointer(),
                                Script: sdk.String("suscipit"),
                            },
                        },
                        shared.SoftwareRecipeStep{
                            ArchiveExtraction: &shared.SoftwareRecipeStepExtractArchive{
                                ArtifactID: sdk.String("dolorem"),
                                Destination: sdk.String("fugit"),
                                Type: shared.SoftwareRecipeStepExtractArchiveTypeEnumTarXz.ToPointer(),
                            },
                            DpkgInstallation: &shared.SoftwareRecipeStepInstallDpkg{
                                ArtifactID: sdk.String("fuga"),
                            },
                            FileCopy: &shared.SoftwareRecipeStepCopyFile{
                                ArtifactID: sdk.String("ratione"),
                                Destination: sdk.String("animi"),
                                Overwrite: sdk.Bool(false),
                                Permissions: sdk.String("necessitatibus"),
                            },
                            FileExec: &shared.SoftwareRecipeStepExecFile{
                                AllowedExitCodes: []int{
                                    8931,
                                    97258,
                                    90233,
                                    497777,
                                },
                                Args: []string{
                                    "occaecati",
                                    "suscipit",
                                    "adipisci",
                                },
                                ArtifactID: sdk.String("quasi"),
                                LocalPath: sdk.String("magni"),
                            },
                            MsiInstallation: &shared.SoftwareRecipeStepInstallMsi{
                                AllowedExitCodes: []int{
                                    859581,
                                    896582,
                                    58534,
                                    271113,
                                },
                                ArtifactID: sdk.String("nihil"),
                                Flags: []string{
                                    "dicta",
                                    "iusto",
                                },
                            },
                            RpmInstallation: &shared.SoftwareRecipeStepInstallRpm{
                                ArtifactID: sdk.String("esse"),
                            },
                            ScriptRun: &shared.SoftwareRecipeStepRunScript{
                                AllowedExitCodes: []int{
                                    979963,
                                    967260,
                                    423706,
                                },
                                Interpreter: shared.SoftwareRecipeStepRunScriptInterpreterEnumInterpreterUnspecified.ToPointer(),
                                Script: sdk.String("fugiat"),
                            },
                        },
                        shared.SoftwareRecipeStep{
                            ArchiveExtraction: &shared.SoftwareRecipeStepExtractArchive{
                                ArtifactID: sdk.String("doloremque"),
                                Destination: sdk.String("dicta"),
                                Type: shared.SoftwareRecipeStepExtractArchiveTypeEnumTarBzip.ToPointer(),
                            },
                            DpkgInstallation: &shared.SoftwareRecipeStepInstallDpkg{
                                ArtifactID: sdk.String("tempora"),
                            },
                            FileCopy: &shared.SoftwareRecipeStepCopyFile{
                                ArtifactID: sdk.String("esse"),
                                Destination: sdk.String("ex"),
                                Overwrite: sdk.Bool(false),
                                Permissions: sdk.String("consectetur"),
                            },
                            FileExec: &shared.SoftwareRecipeStepExecFile{
                                AllowedExitCodes: []int{
                                    58870,
                                    671384,
                                },
                                Args: []string{
                                    "nostrum",
                                },
                                ArtifactID: sdk.String("fugiat"),
                                LocalPath: sdk.String("expedita"),
                            },
                            MsiInstallation: &shared.SoftwareRecipeStepInstallMsi{
                                AllowedExitCodes: []int{
                                    639187,
                                    381397,
                                },
                                ArtifactID: sdk.String("aliquid"),
                                Flags: []string{
                                    "eum",
                                },
                            },
                            RpmInstallation: &shared.SoftwareRecipeStepInstallRpm{
                                ArtifactID: sdk.String("voluptas"),
                            },
                            ScriptRun: &shared.SoftwareRecipeStepRunScript{
                                AllowedExitCodes: []int{
                                    661607,
                                    70042,
                                    625358,
                                },
                                Interpreter: shared.SoftwareRecipeStepRunScriptInterpreterEnumPowershell.ToPointer(),
                                Script: sdk.String("voluptates"),
                            },
                        },
                    },
                    Name: sdk.String("Cameron Reinger"),
                    UpdateSteps: []shared.SoftwareRecipeStep{
                        shared.SoftwareRecipeStep{
                            ArchiveExtraction: &shared.SoftwareRecipeStepExtractArchive{
                                ArtifactID: sdk.String("vitae"),
                                Destination: sdk.String("repellendus"),
                                Type: shared.SoftwareRecipeStepExtractArchiveTypeEnumTarGzip.ToPointer(),
                            },
                            DpkgInstallation: &shared.SoftwareRecipeStepInstallDpkg{
                                ArtifactID: sdk.String("quo"),
                            },
                            FileCopy: &shared.SoftwareRecipeStepCopyFile{
                                ArtifactID: sdk.String("ex"),
                                Destination: sdk.String("ut"),
                                Overwrite: sdk.Bool(false),
                                Permissions: sdk.String("ad"),
                            },
                            FileExec: &shared.SoftwareRecipeStepExecFile{
                                AllowedExitCodes: []int{
                                    29950,
                                    561577,
                                    737254,
                                },
                                Args: []string{
                                    "beatae",
                                    "voluptatum",
                                },
                                ArtifactID: sdk.String("omnis"),
                                LocalPath: sdk.String("veritatis"),
                            },
                            MsiInstallation: &shared.SoftwareRecipeStepInstallMsi{
                                AllowedExitCodes: []int{
                                    665678,
                                    634786,
                                    29634,
                                },
                                ArtifactID: sdk.String("sapiente"),
                                Flags: []string{
                                    "architecto",
                                    "fuga",
                                    "pariatur",
                                    "debitis",
                                },
                            },
                            RpmInstallation: &shared.SoftwareRecipeStepInstallRpm{
                                ArtifactID: sdk.String("voluptatem"),
                            },
                            ScriptRun: &shared.SoftwareRecipeStepRunScript{
                                AllowedExitCodes: []int{
                                    534917,
                                },
                                Interpreter: shared.SoftwareRecipeStepRunScriptInterpreterEnumPowershell.ToPointer(),
                                Script: sdk.String("ex"),
                            },
                        },
                        shared.SoftwareRecipeStep{
                            ArchiveExtraction: &shared.SoftwareRecipeStepExtractArchive{
                                ArtifactID: sdk.String("sapiente"),
                                Destination: sdk.String("rem"),
                                Type: shared.SoftwareRecipeStepExtractArchiveTypeEnumTarXz.ToPointer(),
                            },
                            DpkgInstallation: &shared.SoftwareRecipeStepInstallDpkg{
                                ArtifactID: sdk.String("nemo"),
                            },
                            FileCopy: &shared.SoftwareRecipeStepCopyFile{
                                ArtifactID: sdk.String("asperiores"),
                                Destination: sdk.String("ratione"),
                                Overwrite: sdk.Bool(false),
                                Permissions: sdk.String("ullam"),
                            },
                            FileExec: &shared.SoftwareRecipeStepExecFile{
                                AllowedExitCodes: []int{
                                    848341,
                                },
                                Args: []string{
                                    "impedit",
                                    "quibusdam",
                                    "nam",
                                },
                                ArtifactID: sdk.String("ipsam"),
                                LocalPath: sdk.String("culpa"),
                            },
                            MsiInstallation: &shared.SoftwareRecipeStepInstallMsi{
                                AllowedExitCodes: []int{
                                    307376,
                                },
                                ArtifactID: sdk.String("inventore"),
                                Flags: []string{
                                    "veritatis",
                                    "tempora",
                                    "dolor",
                                },
                            },
                            RpmInstallation: &shared.SoftwareRecipeStepInstallRpm{
                                ArtifactID: sdk.String("consequatur"),
                            },
                            ScriptRun: &shared.SoftwareRecipeStepRunScript{
                                AllowedExitCodes: []int{
                                    24944,
                                },
                                Interpreter: shared.SoftwareRecipeStepRunScriptInterpreterEnumInterpreterUnspecified.ToPointer(),
                                Script: sdk.String("fugit"),
                            },
                        },
                    },
                    Version: sdk.String("ab"),
                },
                shared.SoftwareRecipe{
                    Artifacts: []shared.SoftwareRecipeArtifact{
                        shared.SoftwareRecipeArtifact{
                            AllowInsecure: sdk.Bool(false),
                            Gcs: &shared.SoftwareRecipeArtifactGcs{
                                Bucket: sdk.String("quae"),
                                Generation: sdk.String("dolor"),
                                Object: sdk.String("fugiat"),
                            },
                            ID: sdk.String("5208ece7-e253-4b66-8451-c6c6e205e16d"),
                            Remote: &shared.SoftwareRecipeArtifactRemote{
                                Checksum: sdk.String("vero"),
                                URI: sdk.String("https://remarkable-concern.org"),
                            },
                        },
                        shared.SoftwareRecipeArtifact{
                            AllowInsecure: sdk.Bool(false),
                            Gcs: &shared.SoftwareRecipeArtifactGcs{
                                Bucket: sdk.String("repudiandae"),
                                Generation: sdk.String("optio"),
                                Object: sdk.String("occaecati"),
                            },
                            ID: sdk.String("578a6458-4273-4a84-98d1-62309fb09299"),
                            Remote: &shared.SoftwareRecipeArtifactRemote{
                                Checksum: sdk.String("magni"),
                                URI: sdk.String("http://reflecting-t-shirt.org"),
                            },
                        },
                        shared.SoftwareRecipeArtifact{
                            AllowInsecure: sdk.Bool(false),
                            Gcs: &shared.SoftwareRecipeArtifactGcs{
                                Bucket: sdk.String("distinctio"),
                                Generation: sdk.String("omnis"),
                                Object: sdk.String("delectus"),
                            },
                            ID: sdk.String("58c4d86e-68e4-4be0-9601-3f59da757a59"),
                            Remote: &shared.SoftwareRecipeArtifactRemote{
                                Checksum: sdk.String("accusamus"),
                                URI: sdk.String("https://watchful-theft.org"),
                            },
                        },
                    },
                    DesiredState: shared.SoftwareRecipeDesiredStateEnumInstalled.ToPointer(),
                    InstallSteps: []shared.SoftwareRecipeStep{
                        shared.SoftwareRecipeStep{
                            ArchiveExtraction: &shared.SoftwareRecipeStepExtractArchive{
                                ArtifactID: sdk.String("debitis"),
                                Destination: sdk.String("delectus"),
                                Type: shared.SoftwareRecipeStepExtractArchiveTypeEnumArchiveTypeUnspecified.ToPointer(),
                            },
                            DpkgInstallation: &shared.SoftwareRecipeStepInstallDpkg{
                                ArtifactID: sdk.String("minus"),
                            },
                            FileCopy: &shared.SoftwareRecipeStepCopyFile{
                                ArtifactID: sdk.String("fuga"),
                                Destination: sdk.String("laborum"),
                                Overwrite: sdk.Bool(false),
                                Permissions: sdk.String("consectetur"),
                            },
                            FileExec: &shared.SoftwareRecipeStepExecFile{
                                AllowedExitCodes: []int{
                                    538869,
                                },
                                Args: []string{
                                    "impedit",
                                },
                                ArtifactID: sdk.String("magni"),
                                LocalPath: sdk.String("soluta"),
                            },
                            MsiInstallation: &shared.SoftwareRecipeStepInstallMsi{
                                AllowedExitCodes: []int{
                                    721430,
                                    294076,
                                    482892,
                                    453094,
                                },
                                ArtifactID: sdk.String("sequi"),
                                Flags: []string{
                                    "neque",
                                    "quo",
                                },
                            },
                            RpmInstallation: &shared.SoftwareRecipeStepInstallRpm{
                                ArtifactID: sdk.String("deleniti"),
                            },
                            ScriptRun: &shared.SoftwareRecipeStepRunScript{
                                AllowedExitCodes: []int{
                                    437814,
                                    139072,
                                    974990,
                                    426904,
                                },
                                Interpreter: shared.SoftwareRecipeStepRunScriptInterpreterEnumInterpreterUnspecified.ToPointer(),
                                Script: sdk.String("quibusdam"),
                            },
                        },
                        shared.SoftwareRecipeStep{
                            ArchiveExtraction: &shared.SoftwareRecipeStepExtractArchive{
                                ArtifactID: sdk.String("inventore"),
                                Destination: sdk.String("facere"),
                                Type: shared.SoftwareRecipeStepExtractArchiveTypeEnumTarXz.ToPointer(),
                            },
                            DpkgInstallation: &shared.SoftwareRecipeStepInstallDpkg{
                                ArtifactID: sdk.String("architecto"),
                            },
                            FileCopy: &shared.SoftwareRecipeStepCopyFile{
                                ArtifactID: sdk.String("voluptatibus"),
                                Destination: sdk.String("quia"),
                                Overwrite: sdk.Bool(false),
                                Permissions: sdk.String("porro"),
                            },
                            FileExec: &shared.SoftwareRecipeStepExecFile{
                                AllowedExitCodes: []int{
                                    247045,
                                    75359,
                                },
                                Args: []string{
                                    "vel",
                                },
                                ArtifactID: sdk.String("ea"),
                                LocalPath: sdk.String("beatae"),
                            },
                            MsiInstallation: &shared.SoftwareRecipeStepInstallMsi{
                                AllowedExitCodes: []int{
                                    568218,
                                    431994,
                                    246557,
                                    284086,
                                },
                                ArtifactID: sdk.String("perspiciatis"),
                                Flags: []string{
                                    "dicta",
                                    "impedit",
                                    "voluptatibus",
                                    "iste",
                                },
                            },
                            RpmInstallation: &shared.SoftwareRecipeStepInstallRpm{
                                ArtifactID: sdk.String("itaque"),
                            },
                            ScriptRun: &shared.SoftwareRecipeStepRunScript{
                                AllowedExitCodes: []int{
                                    391797,
                                },
                                Interpreter: shared.SoftwareRecipeStepRunScriptInterpreterEnumPowershell.ToPointer(),
                                Script: sdk.String("velit"),
                            },
                        },
                    },
                    Name: sdk.String("Kyle Fahey Jr."),
                    UpdateSteps: []shared.SoftwareRecipeStep{
                        shared.SoftwareRecipeStep{
                            ArchiveExtraction: &shared.SoftwareRecipeStepExtractArchive{
                                ArtifactID: sdk.String("officia"),
                                Destination: sdk.String("recusandae"),
                                Type: shared.SoftwareRecipeStepExtractArchiveTypeEnumTarGzip.ToPointer(),
                            },
                            DpkgInstallation: &shared.SoftwareRecipeStepInstallDpkg{
                                ArtifactID: sdk.String("quidem"),
                            },
                            FileCopy: &shared.SoftwareRecipeStepCopyFile{
                                ArtifactID: sdk.String("voluptas"),
                                Destination: sdk.String("facilis"),
                                Overwrite: sdk.Bool(false),
                                Permissions: sdk.String("placeat"),
                            },
                            FileExec: &shared.SoftwareRecipeStepExecFile{
                                AllowedExitCodes: []int{
                                    709036,
                                    537236,
                                    954334,
                                },
                                Args: []string{
                                    "ullam",
                                    "unde",
                                },
                                ArtifactID: sdk.String("necessitatibus"),
                                LocalPath: sdk.String("animi"),
                            },
                            MsiInstallation: &shared.SoftwareRecipeStepInstallMsi{
                                AllowedExitCodes: []int{
                                    373040,
                                    357425,
                                    668234,
                                    621666,
                                },
                                ArtifactID: sdk.String("esse"),
                                Flags: []string{
                                    "veritatis",
                                    "vero",
                                },
                            },
                            RpmInstallation: &shared.SoftwareRecipeStepInstallRpm{
                                ArtifactID: sdk.String("consectetur"),
                            },
                            ScriptRun: &shared.SoftwareRecipeStepRunScript{
                                AllowedExitCodes: []int{
                                    81371,
                                },
                                Interpreter: shared.SoftwareRecipeStepRunScriptInterpreterEnumInterpreterUnspecified.ToPointer(),
                                Script: sdk.String("ad"),
                            },
                        },
                    },
                    Version: sdk.String("qui"),
                },
            },
        },
        AccessToken: sdk.String("iste"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("nemo"),
        Fields: sdk.String("soluta"),
        GuestPolicyID: sdk.String("libero"),
        Key: sdk.String("rem"),
        OauthToken: sdk.String("dolorum"),
        Parent: "odio",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("fugit"),
        UploadType: sdk.String("alias"),
        UploadProtocol: sdk.String("magni"),
    }, operations.OsconfigProjectsGuestPoliciesCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GuestPolicy != nil {
        // handle response
    }
}
```

## OsconfigProjectsGuestPoliciesList

Get a page of OS Config guest policies.

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
    res, err := s.Projects.OsconfigProjectsGuestPoliciesList(ctx, operations.OsconfigProjectsGuestPoliciesListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("quae"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("modi"),
        Fields: sdk.String("neque"),
        Key: sdk.String("exercitationem"),
        OauthToken: sdk.String("itaque"),
        PageSize: sdk.Int64(88248),
        PageToken: sdk.String("ipsum"),
        Parent: "unde",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("nulla"),
        UploadType: sdk.String("distinctio"),
        UploadProtocol: sdk.String("maxime"),
    }, operations.OsconfigProjectsGuestPoliciesListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListGuestPoliciesResponse != nil {
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        PatchDeploymentInput: &shared.PatchDeploymentInput{
            Description: sdk.String("quia"),
            Duration: sdk.String("nostrum"),
            InstanceFilter: &shared.PatchInstanceFilter{
                All: sdk.Bool(false),
                GroupLabels: []shared.PatchInstanceFilterGroupLabel{
                    shared.PatchInstanceFilterGroupLabel{
                        Labels: map[string]string{
                            "dicta": "id",
                            "libero": "fugiat",
                            "officia": "quos",
                        },
                    },
                    shared.PatchInstanceFilterGroupLabel{
                        Labels: map[string]string{
                            "sit": "iusto",
                            "ipsa": "voluptates",
                            "inventore": "aperiam",
                            "totam": "dolore",
                        },
                    },
                    shared.PatchInstanceFilterGroupLabel{
                        Labels: map[string]string{
                            "distinctio": "voluptatem",
                            "autem": "esse",
                            "dolores": "assumenda",
                            "beatae": "est",
                        },
                    },
                },
                InstanceNamePrefixes: []string{
                    "corrupti",
                    "molestiae",
                    "provident",
                    "accusamus",
                },
                Instances: []string{
                    "tempore",
                    "sint",
                    "ea",
                    "autem",
                },
                Zones: []string{
                    "rerum",
                    "laudantium",
                },
            },
            Name: sdk.String("Cecelia Wiza"),
            OneTimeSchedule: &shared.OneTimeSchedule{
                ExecuteTime: sdk.String("alias"),
            },
            PatchConfig: &shared.PatchConfig{
                Apt: &shared.AptSettings{
                    Excludes: []string{
                        "quidem",
                    },
                    ExclusivePackages: []string{
                        "repudiandae",
                        "accusantium",
                        "expedita",
                    },
                    Type: shared.AptSettingsTypeEnumUpgrade.ToPointer(),
                },
                Goo: map[string]interface{}{
                    "quibusdam": "odio",
                },
                MigInstancesAllowed: sdk.Bool(false),
                PostStep: &shared.ExecStep{
                    LinuxExecStepConfig: &shared.ExecStepConfig{
                        AllowedSuccessCodes: []int{
                            140316,
                            127688,
                            358995,
                        },
                        GcsObject: &shared.GcsObject{
                            Bucket: sdk.String("error"),
                            GenerationNumber: sdk.String("earum"),
                            Object: sdk.String("adipisci"),
                        },
                        Interpreter: shared.ExecStepConfigInterpreterEnumPowershell.ToPointer(),
                        LocalPath: sdk.String("similique"),
                    },
                    WindowsExecStepConfig: &shared.ExecStepConfig{
                        AllowedSuccessCodes: []int{
                            693746,
                            339631,
                        },
                        GcsObject: &shared.GcsObject{
                            Bucket: sdk.String("beatae"),
                            GenerationNumber: sdk.String("unde"),
                            Object: sdk.String("molestiae"),
                        },
                        Interpreter: shared.ExecStepConfigInterpreterEnumPowershell.ToPointer(),
                        LocalPath: sdk.String("cupiditate"),
                    },
                },
                PreStep: &shared.ExecStep{
                    LinuxExecStepConfig: &shared.ExecStepConfig{
                        AllowedSuccessCodes: []int{
                            253625,
                        },
                        GcsObject: &shared.GcsObject{
                            Bucket: sdk.String("numquam"),
                            GenerationNumber: sdk.String("nesciunt"),
                            Object: sdk.String("at"),
                        },
                        Interpreter: shared.ExecStepConfigInterpreterEnumShell.ToPointer(),
                        LocalPath: sdk.String("dignissimos"),
                    },
                    WindowsExecStepConfig: &shared.ExecStepConfig{
                        AllowedSuccessCodes: []int{
                            898961,
                            359111,
                            185518,
                            708898,
                        },
                        GcsObject: &shared.GcsObject{
                            Bucket: sdk.String("voluptatum"),
                            GenerationNumber: sdk.String("cupiditate"),
                            Object: sdk.String("minima"),
                        },
                        Interpreter: shared.ExecStepConfigInterpreterEnumPowershell.ToPointer(),
                        LocalPath: sdk.String("enim"),
                    },
                },
                RebootConfig: shared.PatchConfigRebootConfigEnumRebootConfigUnspecified.ToPointer(),
                WindowsUpdate: &shared.WindowsUpdateSettings{
                    Classifications: []shared.WindowsUpdateSettingsClassificationsEnum{
                        shared.WindowsUpdateSettingsClassificationsEnumTool,
                        shared.WindowsUpdateSettingsClassificationsEnumDriver,
                    },
                    Excludes: []string{
                        "corporis",
                        "magnam",
                    },
                    ExclusivePatches: []string{
                        "maiores",
                        "tempore",
                        "aperiam",
                        "libero",
                    },
                },
                Yum: &shared.YumSettings{
                    Excludes: []string{
                        "labore",
                    },
                    ExclusivePackages: []string{
                        "occaecati",
                        "voluptas",
                        "quo",
                    },
                    Minimal: sdk.Bool(false),
                    Security: sdk.Bool(false),
                },
                Zypper: &shared.ZypperSettings{
                    Categories: []string{
                        "minus",
                    },
                    Excludes: []string{
                        "nostrum",
                        "est",
                        "impedit",
                    },
                    ExclusivePatches: []string{
                        "tempore",
                        "vero",
                        "odit",
                        "repellat",
                    },
                    Severities: []string{
                        "nemo",
                        "reprehenderit",
                        "aperiam",
                        "odio",
                    },
                    WithOptional: sdk.Bool(false),
                    WithUpdate: sdk.Bool(false),
                },
            },
            RecurringSchedule: &shared.RecurringScheduleInput{
                EndTime: sdk.String("minima"),
                Frequency: shared.RecurringScheduleFrequencyEnumWeekly.ToPointer(),
                Monthly: &shared.MonthlySchedule{
                    MonthDay: sdk.Int(496915),
                    WeekDayOfMonth: &shared.WeekDayOfMonth{
                        DayOfWeek: shared.WeekDayOfMonthDayOfWeekEnumThursday.ToPointer(),
                        DayOffset: sdk.Int(172195),
                        WeekOrdinal: sdk.Int(621169),
                    },
                },
                StartTime: sdk.String("veritatis"),
                TimeOfDay: &shared.TimeOfDay{
                    Hours: sdk.Int(498180),
                    Minutes: sdk.Int(452729),
                    Nanos: sdk.Int(866789),
                    Seconds: sdk.Int(932666),
                },
                TimeZone: &shared.TimeZone{
                    ID: sdk.String("ac646ecb-5734-409e-beb1-e5a2b12eb07f"),
                    Version: sdk.String("veritatis"),
                },
                Weekly: &shared.WeeklySchedule{
                    DayOfWeek: shared.WeeklyScheduleDayOfWeekEnumDayOfWeekUnspecified.ToPointer(),
                },
            },
            Rollout: &shared.PatchRollout{
                DisruptionBudget: &shared.FixedOrPercent{
                    Fixed: sdk.Int(386447),
                    Percent: sdk.Int(863471),
                },
                Mode: shared.PatchRolloutModeEnumConcurrentZones.ToPointer(),
            },
        },
        AccessToken: sdk.String("excepturi"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("nemo"),
        Fields: sdk.String("aliquam"),
        Key: sdk.String("nostrum"),
        OauthToken: sdk.String("doloribus"),
        Parent: "eligendi",
        PatchDeploymentID: sdk.String("sint"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("enim"),
        UploadType: sdk.String("hic"),
        UploadProtocol: sdk.String("animi"),
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("totam"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("odio"),
        Fields: sdk.String("eaque"),
        Key: sdk.String("saepe"),
        Name: "Billie Morar",
        OauthToken: sdk.String("libero"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("velit"),
        UploadType: sdk.String("doloremque"),
        UploadProtocol: sdk.String("delectus"),
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
        AccessToken: sdk.String("cum"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("adipisci"),
        Fields: sdk.String("saepe"),
        Key: sdk.String("deserunt"),
        OauthToken: sdk.String("doloremque"),
        PageSize: sdk.Int64(339756),
        PageToken: sdk.String("veniam"),
        Parent: "libero",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("architecto"),
        UploadType: sdk.String("cupiditate"),
        UploadProtocol: sdk.String("molestiae"),
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        PatchDeploymentInput: &shared.PatchDeploymentInput{
            Description: sdk.String("possimus"),
            Duration: sdk.String("non"),
            InstanceFilter: &shared.PatchInstanceFilter{
                All: sdk.Bool(false),
                GroupLabels: []shared.PatchInstanceFilterGroupLabel{
                    shared.PatchInstanceFilterGroupLabel{
                        Labels: map[string]string{
                            "sed": "asperiores",
                            "veniam": "consequuntur",
                            "facere": "laudantium",
                            "odit": "pariatur",
                        },
                    },
                    shared.PatchInstanceFilterGroupLabel{
                        Labels: map[string]string{
                            "exercitationem": "ab",
                        },
                    },
                },
                InstanceNamePrefixes: []string{
                    "facilis",
                },
                Instances: []string{
                    "nisi",
                    "voluptatibus",
                    "quaerat",
                },
                Zones: []string{
                    "distinctio",
                    "nisi",
                    "quis",
                },
            },
            Name: sdk.String("Jeannette Schimmel"),
            OneTimeSchedule: &shared.OneTimeSchedule{
                ExecuteTime: sdk.String("ipsum"),
            },
            PatchConfig: &shared.PatchConfig{
                Apt: &shared.AptSettings{
                    Excludes: []string{
                        "voluptatibus",
                        "voluptatibus",
                    },
                    ExclusivePackages: []string{
                        "debitis",
                    },
                    Type: shared.AptSettingsTypeEnumTypeUnspecified.ToPointer(),
                },
                Goo: map[string]interface{}{
                    "eos": "reprehenderit",
                    "nostrum": "neque",
                    "iusto": "est",
                },
                MigInstancesAllowed: sdk.Bool(false),
                PostStep: &shared.ExecStep{
                    LinuxExecStepConfig: &shared.ExecStepConfig{
                        AllowedSuccessCodes: []int{
                            753890,
                            853606,
                            604078,
                        },
                        GcsObject: &shared.GcsObject{
                            Bucket: sdk.String("officiis"),
                            GenerationNumber: sdk.String("ducimus"),
                            Object: sdk.String("dolor"),
                        },
                        Interpreter: shared.ExecStepConfigInterpreterEnumInterpreterUnspecified.ToPointer(),
                        LocalPath: sdk.String("error"),
                    },
                    WindowsExecStepConfig: &shared.ExecStepConfig{
                        AllowedSuccessCodes: []int{
                            111496,
                            491591,
                            458970,
                            854115,
                        },
                        GcsObject: &shared.GcsObject{
                            Bucket: sdk.String("ad"),
                            GenerationNumber: sdk.String("aspernatur"),
                            Object: sdk.String("enim"),
                        },
                        Interpreter: shared.ExecStepConfigInterpreterEnumPowershell.ToPointer(),
                        LocalPath: sdk.String("iusto"),
                    },
                },
                PreStep: &shared.ExecStep{
                    LinuxExecStepConfig: &shared.ExecStepConfig{
                        AllowedSuccessCodes: []int{
                            729828,
                            72350,
                        },
                        GcsObject: &shared.GcsObject{
                            Bucket: sdk.String("ab"),
                            GenerationNumber: sdk.String("incidunt"),
                            Object: sdk.String("accusamus"),
                        },
                        Interpreter: shared.ExecStepConfigInterpreterEnumPowershell.ToPointer(),
                        LocalPath: sdk.String("tempore"),
                    },
                    WindowsExecStepConfig: &shared.ExecStepConfig{
                        AllowedSuccessCodes: []int{
                            176499,
                            970079,
                        },
                        GcsObject: &shared.GcsObject{
                            Bucket: sdk.String("earum"),
                            GenerationNumber: sdk.String("reprehenderit"),
                            Object: sdk.String("praesentium"),
                        },
                        Interpreter: shared.ExecStepConfigInterpreterEnumNone.ToPointer(),
                        LocalPath: sdk.String("repellat"),
                    },
                },
                RebootConfig: shared.PatchConfigRebootConfigEnumNever.ToPointer(),
                WindowsUpdate: &shared.WindowsUpdateSettings{
                    Classifications: []shared.WindowsUpdateSettingsClassificationsEnum{
                        shared.WindowsUpdateSettingsClassificationsEnumDriver,
                    },
                    Excludes: []string{
                        "illo",
                        "labore",
                        "assumenda",
                    },
                    ExclusivePatches: []string{
                        "quisquam",
                        "provident",
                    },
                },
                Yum: &shared.YumSettings{
                    Excludes: []string{
                        "repudiandae",
                        "consequatur",
                        "maxime",
                    },
                    ExclusivePackages: []string{
                        "nam",
                    },
                    Minimal: sdk.Bool(false),
                    Security: sdk.Bool(false),
                },
                Zypper: &shared.ZypperSettings{
                    Categories: []string{
                        "quas",
                        "provident",
                        "repudiandae",
                    },
                    Excludes: []string{
                        "dignissimos",
                        "corporis",
                        "vero",
                    },
                    ExclusivePatches: []string{
                        "repellendus",
                        "iure",
                        "dolorem",
                    },
                    Severities: []string{
                        "impedit",
                        "commodi",
                    },
                    WithOptional: sdk.Bool(false),
                    WithUpdate: sdk.Bool(false),
                },
            },
            RecurringSchedule: &shared.RecurringScheduleInput{
                EndTime: sdk.String("aut"),
                Frequency: shared.RecurringScheduleFrequencyEnumFrequencyUnspecified.ToPointer(),
                Monthly: &shared.MonthlySchedule{
                    MonthDay: sdk.Int(322829),
                    WeekDayOfMonth: &shared.WeekDayOfMonth{
                        DayOfWeek: shared.WeekDayOfMonthDayOfWeekEnumDayOfWeekUnspecified.ToPointer(),
                        DayOffset: sdk.Int(229567),
                        WeekOrdinal: sdk.Int(849320),
                    },
                },
                StartTime: sdk.String("praesentium"),
                TimeOfDay: &shared.TimeOfDay{
                    Hours: sdk.Int(695526),
                    Minutes: sdk.Int(736853),
                    Nanos: sdk.Int(230411),
                    Seconds: sdk.Int(97676),
                },
                TimeZone: &shared.TimeZone{
                    ID: sdk.String("180f739a-e9e0-457e-b809-e2810331f398"),
                    Version: sdk.String("beatae"),
                },
                Weekly: &shared.WeeklySchedule{
                    DayOfWeek: shared.WeeklyScheduleDayOfWeekEnumSaturday.ToPointer(),
                },
            },
            Rollout: &shared.PatchRollout{
                DisruptionBudget: &shared.FixedOrPercent{
                    Fixed: sdk.Int(287544),
                    Percent: sdk.Int(794988),
                },
                Mode: shared.PatchRolloutModeEnumZoneByZone.ToPointer(),
            },
        },
        AccessToken: sdk.String("voluptatem"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("rerum"),
        Fields: sdk.String("ea"),
        Key: sdk.String("aperiam"),
        Name: "Kristie Frami",
        OauthToken: sdk.String("consectetur"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("eligendi"),
        UpdateMask: sdk.String("dignissimos"),
        UploadType: sdk.String("consectetur"),
        UploadProtocol: sdk.String("soluta"),
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
            "officia": "amet",
            "tenetur": "aspernatur",
            "quo": "itaque",
            "illum": "laborum",
        },
        AccessToken: sdk.String("dignissimos"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("qui"),
        Fields: sdk.String("consectetur"),
        Key: sdk.String("repellat"),
        Name: "Rose Heller",
        OauthToken: sdk.String("ab"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("illo"),
        UploadType: sdk.String("hic"),
        UploadProtocol: sdk.String("deserunt"),
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
            "distinctio": "in",
            "exercitationem": "labore",
        },
        AccessToken: sdk.String("numquam"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("modi"),
        Fields: sdk.String("in"),
        Key: sdk.String("explicabo"),
        Name: "Ian Baumbach",
        OauthToken: sdk.String("enim"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("voluptate"),
        UploadType: sdk.String("similique"),
        UploadProtocol: sdk.String("minima"),
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        RequestBody: map[string]interface{}{
            "sit": "modi",
            "eum": "nesciunt",
        },
        AccessToken: sdk.String("mollitia"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("fugiat"),
        Fields: sdk.String("nostrum"),
        Key: sdk.String("molestiae"),
        Name: "Lela Bergstrom Jr.",
        OauthToken: sdk.String("eveniet"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("odio"),
        UploadType: sdk.String("commodi"),
        UploadProtocol: sdk.String("numquam"),
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
            Description: sdk.String("possimus"),
            DisplayName: sdk.String("voluptate"),
            DryRun: sdk.Bool(false),
            Duration: sdk.String("consectetur"),
            InstanceFilter: &shared.PatchInstanceFilter{
                All: sdk.Bool(false),
                GroupLabels: []shared.PatchInstanceFilterGroupLabel{
                    shared.PatchInstanceFilterGroupLabel{
                        Labels: map[string]string{
                            "itaque": "minus",
                            "sunt": "distinctio",
                        },
                    },
                },
                InstanceNamePrefixes: []string{
                    "quas",
                    "et",
                },
                Instances: []string{
                    "amet",
                    "autem",
                    "fuga",
                },
                Zones: []string{
                    "rem",
                },
            },
            PatchConfig: &shared.PatchConfig{
                Apt: &shared.AptSettings{
                    Excludes: []string{
                        "quos",
                    },
                    ExclusivePackages: []string{
                        "repellendus",
                        "veritatis",
                        "quae",
                    },
                    Type: shared.AptSettingsTypeEnumTypeUnspecified.ToPointer(),
                },
                Goo: map[string]interface{}{
                    "delectus": "mollitia",
                    "nulla": "officia",
                    "sed": "voluptatem",
                    "alias": "eveniet",
                },
                MigInstancesAllowed: sdk.Bool(false),
                PostStep: &shared.ExecStep{
                    LinuxExecStepConfig: &shared.ExecStepConfig{
                        AllowedSuccessCodes: []int{
                            27982,
                            278325,
                            185448,
                            185897,
                        },
                        GcsObject: &shared.GcsObject{
                            Bucket: sdk.String("necessitatibus"),
                            GenerationNumber: sdk.String("harum"),
                            Object: sdk.String("explicabo"),
                        },
                        Interpreter: shared.ExecStepConfigInterpreterEnumInterpreterUnspecified.ToPointer(),
                        LocalPath: sdk.String("aliquid"),
                    },
                    WindowsExecStepConfig: &shared.ExecStepConfig{
                        AllowedSuccessCodes: []int{
                            760049,
                            975095,
                        },
                        GcsObject: &shared.GcsObject{
                            Bucket: sdk.String("molestias"),
                            GenerationNumber: sdk.String("officia"),
                            Object: sdk.String("libero"),
                        },
                        Interpreter: shared.ExecStepConfigInterpreterEnumShell.ToPointer(),
                        LocalPath: sdk.String("sequi"),
                    },
                },
                PreStep: &shared.ExecStep{
                    LinuxExecStepConfig: &shared.ExecStepConfig{
                        AllowedSuccessCodes: []int{
                            412052,
                            774501,
                        },
                        GcsObject: &shared.GcsObject{
                            Bucket: sdk.String("ducimus"),
                            GenerationNumber: sdk.String("odit"),
                            Object: sdk.String("velit"),
                        },
                        Interpreter: shared.ExecStepConfigInterpreterEnumPowershell.ToPointer(),
                        LocalPath: sdk.String("repellat"),
                    },
                    WindowsExecStepConfig: &shared.ExecStepConfig{
                        AllowedSuccessCodes: []int{
                            671116,
                            617657,
                            883780,
                            42906,
                        },
                        GcsObject: &shared.GcsObject{
                            Bucket: sdk.String("nisi"),
                            GenerationNumber: sdk.String("rerum"),
                            Object: sdk.String("recusandae"),
                        },
                        Interpreter: shared.ExecStepConfigInterpreterEnumPowershell.ToPointer(),
                        LocalPath: sdk.String("non"),
                    },
                },
                RebootConfig: shared.PatchConfigRebootConfigEnumAlways.ToPointer(),
                WindowsUpdate: &shared.WindowsUpdateSettings{
                    Classifications: []shared.WindowsUpdateSettingsClassificationsEnum{
                        shared.WindowsUpdateSettingsClassificationsEnumDefinition,
                    },
                    Excludes: []string{
                        "dicta",
                        "voluptatibus",
                        "eligendi",
                        "quae",
                    },
                    ExclusivePatches: []string{
                        "architecto",
                        "architecto",
                        "enim",
                        "optio",
                    },
                },
                Yum: &shared.YumSettings{
                    Excludes: []string{
                        "perferendis",
                        "facilis",
                        "reiciendis",
                    },
                    ExclusivePackages: []string{
                        "iste",
                        "dicta",
                        "quos",
                        "ullam",
                    },
                    Minimal: sdk.Bool(false),
                    Security: sdk.Bool(false),
                },
                Zypper: &shared.ZypperSettings{
                    Categories: []string{
                        "modi",
                        "itaque",
                    },
                    Excludes: []string{
                        "modi",
                        "consequuntur",
                        "assumenda",
                        "vero",
                    },
                    ExclusivePatches: []string{
                        "impedit",
                        "porro",
                        "accusamus",
                        "totam",
                    },
                    Severities: []string{
                        "ab",
                        "sint",
                        "nihil",
                        "esse",
                    },
                    WithOptional: sdk.Bool(false),
                    WithUpdate: sdk.Bool(false),
                },
            },
            Rollout: &shared.PatchRollout{
                DisruptionBudget: &shared.FixedOrPercent{
                    Fixed: sdk.Int(438256),
                    Percent: sdk.Int(485031),
                },
                Mode: shared.PatchRolloutModeEnumModeUnspecified.ToPointer(),
            },
        },
        AccessToken: sdk.String("debitis"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("neque"),
        Fields: sdk.String("corporis"),
        Key: sdk.String("voluptas"),
        OauthToken: sdk.String("consequuntur"),
        Parent: "officia",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("reprehenderit"),
        UploadType: sdk.String("distinctio"),
        UploadProtocol: sdk.String("eius"),
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("rem"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("accusantium"),
        Fields: sdk.String("veniam"),
        Key: sdk.String("saepe"),
        Name: "Ernestine Hackett",
        OauthToken: sdk.String("fugiat"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("est"),
        UploadType: sdk.String("delectus"),
        UploadProtocol: sdk.String("velit"),
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
        AccessToken: sdk.String("nesciunt"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("illo"),
        Fields: sdk.String("repellat"),
        Filter: sdk.String("nemo"),
        Key: sdk.String("doloribus"),
        OauthToken: sdk.String("possimus"),
        PageSize: sdk.Int64(603323),
        PageToken: sdk.String("incidunt"),
        Parent: "explicabo",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ipsam"),
        UploadType: sdk.String("cupiditate"),
        UploadProtocol: sdk.String("optio"),
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
        AccessToken: sdk.String("quidem"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("commodi"),
        Fields: sdk.String("sapiente"),
        Filter: sdk.String("consequuntur"),
        Key: sdk.String("veniam"),
        OauthToken: sdk.String("debitis"),
        PageSize: sdk.Int64(638390),
        PageToken: sdk.String("sint"),
        Parent: "ut",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("numquam"),
        UploadType: sdk.String("tenetur"),
        UploadProtocol: sdk.String("adipisci"),
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

## OsconfigProjectsZonesInstancesLookupEffectiveGuestPolicy

Lookup the effective guest policy that applies to a VM instance. This lookup merges all policies that are assigned to the instance ancestry.

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
    res, err := s.Projects.OsconfigProjectsZonesInstancesLookupEffectiveGuestPolicy(ctx, operations.OsconfigProjectsZonesInstancesLookupEffectiveGuestPolicyRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        LookupEffectiveGuestPolicyRequest: &shared.LookupEffectiveGuestPolicyRequest{
            OsArchitecture: sdk.String("in"),
            OsShortName: sdk.String("minima"),
            OsVersion: sdk.String("ex"),
        },
        AccessToken: sdk.String("minus"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("beatae"),
        Fields: sdk.String("hic"),
        Instance: "nisi",
        Key: sdk.String("quisquam"),
        OauthToken: sdk.String("dolor"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ducimus"),
        UploadType: sdk.String("fuga"),
        UploadProtocol: sdk.String("minima"),
    }, operations.OsconfigProjectsZonesInstancesLookupEffectiveGuestPolicySecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EffectiveGuestPolicy != nil {
        // handle response
    }
}
```
