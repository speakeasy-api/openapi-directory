<!-- Start SDK Example Usage -->
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GuestPolicyInput: &shared.GuestPolicyInput{
            Assignment: &shared.Assignment{
                GroupLabels: []shared.AssignmentGroupLabel{
                    shared.AssignmentGroupLabel{
                        Labels: map[string]string{
                            "quibusdam": "unde",
                            "nulla": "corrupti",
                            "illum": "vel",
                        },
                    },
                    shared.AssignmentGroupLabel{
                        Labels: map[string]string{
                            "deserunt": "suscipit",
                            "iure": "magnam",
                            "debitis": "ipsa",
                        },
                    },
                    shared.AssignmentGroupLabel{
                        Labels: map[string]string{
                            "tempora": "suscipit",
                            "molestiae": "minus",
                            "placeat": "voluptatum",
                            "iusto": "excepturi",
                        },
                    },
                },
                InstanceNamePrefixes: []string{
                    "recusandae",
                    "temporibus",
                },
                Instances: []string{
                    "quis",
                },
                OsTypes: []shared.AssignmentOsType{
                    shared.AssignmentOsType{
                        OsArchitecture: sdk.String("deserunt"),
                        OsShortName: sdk.String("perferendis"),
                        OsVersion: sdk.String("ipsam"),
                    },
                },
                Zones: []string{
                    "sapiente",
                    "quo",
                    "odit",
                    "at",
                },
            },
            Description: sdk.String("at"),
            Etag: sdk.String("maiores"),
            Name: sdk.String("Bernadette Schmidt"),
            PackageRepositories: []shared.PackageRepository{
                shared.PackageRepository{
                    Apt: &shared.AptRepository{
                        ArchiveType: shared.AptRepositoryArchiveTypeEnumDebSrc.ToPointer(),
                        Components: []string{
                            "nam",
                        },
                        Distribution: sdk.String("officia"),
                        GpgKey: sdk.String("occaecati"),
                        URI: sdk.String("http://miserly-usage.net"),
                    },
                    Goo: &shared.GooRepository{
                        Name: sdk.String("Jack Johns"),
                        URL: sdk.String("qui"),
                    },
                    Yum: &shared.YumRepository{
                        BaseURL: sdk.String("impedit"),
                        DisplayName: sdk.String("cum"),
                        GpgKeys: []string{
                            "ipsum",
                            "excepturi",
                        },
                        ID: sdk.String("20592939-6fea-4759-aeb1-0faaa2352c59"),
                    },
                    Zypper: &shared.ZypperRepository{
                        BaseURL: sdk.String("nemo"),
                        DisplayName: sdk.String("minima"),
                        GpgKeys: []string{
                            "accusantium",
                            "iure",
                            "culpa",
                        },
                        ID: sdk.String("ff1a3a2f-a946-4773-9251-aa52c3f5ad01"),
                    },
                },
                shared.PackageRepository{
                    Apt: &shared.AptRepository{
                        ArchiveType: shared.AptRepositoryArchiveTypeEnumDeb.ToPointer(),
                        Components: []string{
                            "laborum",
                            "quasi",
                            "reiciendis",
                            "voluptatibus",
                        },
                        Distribution: sdk.String("vero"),
                        GpgKey: sdk.String("nihil"),
                        URI: sdk.String("https://witty-avocado.name"),
                    },
                    Goo: &shared.GooRepository{
                        Name: sdk.String("Ms. Karla Aufderhar"),
                        URL: sdk.String("maiores"),
                    },
                    Yum: &shared.YumRepository{
                        BaseURL: sdk.String("dicta"),
                        DisplayName: sdk.String("corporis"),
                        GpgKeys: []string{
                            "iusto",
                            "dicta",
                        },
                        ID: sdk.String("b5e6e13b-99d4-488e-9e91-e450ad2abd44"),
                    },
                    Zypper: &shared.ZypperRepository{
                        BaseURL: sdk.String("qui"),
                        DisplayName: sdk.String("aliquid"),
                        GpgKeys: []string{
                            "quos",
                            "perferendis",
                            "magni",
                        },
                        ID: sdk.String("d502a94b-b4f6-43c9-a9e9-a3efa77dfb14"),
                    },
                },
                shared.PackageRepository{
                    Apt: &shared.AptRepository{
                        ArchiveType: shared.AptRepositoryArchiveTypeEnumDebSrc.ToPointer(),
                        Components: []string{
                            "ea",
                            "aliquid",
                            "laborum",
                            "accusamus",
                        },
                        Distribution: sdk.String("non"),
                        GpgKey: sdk.String("occaecati"),
                        URI: sdk.String("http://uncomfortable-wait.net"),
                    },
                    Goo: &shared.GooRepository{
                        Name: sdk.String("Marco Olson"),
                        URL: sdk.String("sapiente"),
                    },
                    Yum: &shared.YumRepository{
                        BaseURL: sdk.String("amet"),
                        DisplayName: sdk.String("deserunt"),
                        GpgKeys: []string{
                            "vel",
                            "natus",
                        },
                        ID: sdk.String("97074ba4-469b-46e2-9419-59890afa563e"),
                    },
                    Zypper: &shared.ZypperRepository{
                        BaseURL: sdk.String("odit"),
                        DisplayName: sdk.String("nemo"),
                        GpgKeys: []string{
                            "iure",
                        },
                        ID: sdk.String("fe4c8b71-1e5b-47fd-aed0-28921cddc692"),
                    },
                },
                shared.PackageRepository{
                    Apt: &shared.AptRepository{
                        ArchiveType: shared.AptRepositoryArchiveTypeEnumDeb.ToPointer(),
                        Components: []string{
                            "ab",
                        },
                        Distribution: sdk.String("maiores"),
                        GpgKey: sdk.String("quidem"),
                        URI: sdk.String("http://jealous-hearing.net"),
                    },
                    Goo: &shared.GooRepository{
                        Name: sdk.String("Meredith Hickle PhD"),
                        URL: sdk.String("amet"),
                    },
                    Yum: &shared.YumRepository{
                        BaseURL: sdk.String("aut"),
                        DisplayName: sdk.String("cumque"),
                        GpgKeys: []string{
                            "hic",
                            "libero",
                        },
                        ID: sdk.String("b2587053-202c-473d-9fe9-b90c28909b3f"),
                    },
                    Zypper: &shared.ZypperRepository{
                        BaseURL: sdk.String("earum"),
                        DisplayName: sdk.String("modi"),
                        GpgKeys: []string{
                            "dolorum",
                            "deleniti",
                            "pariatur",
                        },
                        ID: sdk.String("9cbf4863-3323-4f9b-b7f3-a4100674ebf6"),
                    },
                },
            },
            Packages: []shared.Package{
                shared.Package{
                    DesiredState: shared.PackageDesiredStateEnumDesiredStateUnspecified.ToPointer(),
                    Manager: shared.PackageManagerEnumYum.ToPointer(),
                    Name: sdk.String("Ginger Bergstrom"),
                },
                shared.Package{
                    DesiredState: shared.PackageDesiredStateEnumInstalled.ToPointer(),
                    Manager: shared.PackageManagerEnumApt.ToPointer(),
                    Name: sdk.String("Alfredo Mohr"),
                },
                shared.Package{
                    DesiredState: shared.PackageDesiredStateEnumRemoved.ToPointer(),
                    Manager: shared.PackageManagerEnumApt.ToPointer(),
                    Name: sdk.String("Tamara Ondricka"),
                },
            },
            Recipes: []shared.SoftwareRecipe{
                shared.SoftwareRecipe{
                    Artifacts: []shared.SoftwareRecipeArtifact{
                        shared.SoftwareRecipeArtifact{
                            AllowInsecure: sdk.Bool(false),
                            Gcs: &shared.SoftwareRecipeArtifactGcs{
                                Bucket: sdk.String("amet"),
                                Generation: sdk.String("optio"),
                                Object: sdk.String("accusamus"),
                            },
                            ID: sdk.String("5e6a95d8-a0d4-446c-a2af-7a73cf3be453"),
                            Remote: &shared.SoftwareRecipeArtifactRemote{
                                Checksum: sdk.String("sapiente"),
                                URI: sdk.String("https://knowing-amenity.net"),
                            },
                        },
                    },
                    DesiredState: shared.SoftwareRecipeDesiredStateEnumDesiredStateUnspecified.ToPointer(),
                    InstallSteps: []shared.SoftwareRecipeStep{
                        shared.SoftwareRecipeStep{
                            ArchiveExtraction: &shared.SoftwareRecipeStepExtractArchive{
                                ArtifactID: sdk.String("vel"),
                                Destination: sdk.String("libero"),
                                Type: shared.SoftwareRecipeStepExtractArchiveTypeEnumTarGzip.ToPointer(),
                            },
                            DpkgInstallation: &shared.SoftwareRecipeStepInstallDpkg{
                                ArtifactID: sdk.String("deserunt"),
                            },
                            FileCopy: &shared.SoftwareRecipeStepCopyFile{
                                ArtifactID: sdk.String("quam"),
                                Destination: sdk.String("ipsum"),
                                Overwrite: sdk.Bool(false),
                                Permissions: sdk.String("incidunt"),
                            },
                            FileExec: &shared.SoftwareRecipeStepExecFile{
                                AllowedExitCodes: []int{
                                    586784,
                                },
                                Args: []string{
                                    "pariatur",
                                    "soluta",
                                    "dicta",
                                    "laborum",
                                },
                                ArtifactID: sdk.String("totam"),
                                LocalPath: sdk.String("incidunt"),
                            },
                            MsiInstallation: &shared.SoftwareRecipeStepInstallMsi{
                                AllowedExitCodes: []int{
                                    174909,
                                },
                                ArtifactID: sdk.String("distinctio"),
                                Flags: []string{
                                    "aliquid",
                                    "quam",
                                    "molestias",
                                },
                            },
                            RpmInstallation: &shared.SoftwareRecipeStepInstallRpm{
                                ArtifactID: sdk.String("temporibus"),
                            },
                            ScriptRun: &shared.SoftwareRecipeStepRunScript{
                                AllowedExitCodes: []int{
                                    204865,
                                },
                                Interpreter: shared.SoftwareRecipeStepRunScriptInterpreterEnumInterpreterUnspecified.ToPointer(),
                                Script: sdk.String("magni"),
                            },
                        },
                    },
                    Name: sdk.String("Ashley Hermiston"),
                    UpdateSteps: []shared.SoftwareRecipeStep{
                        shared.SoftwareRecipeStep{
                            ArchiveExtraction: &shared.SoftwareRecipeStepExtractArchive{
                                ArtifactID: sdk.String("cumque"),
                                Destination: sdk.String("soluta"),
                                Type: shared.SoftwareRecipeStepExtractArchiveTypeEnumTarXz.ToPointer(),
                            },
                            DpkgInstallation: &shared.SoftwareRecipeStepInstallDpkg{
                                ArtifactID: sdk.String("et"),
                            },
                            FileCopy: &shared.SoftwareRecipeStepCopyFile{
                                ArtifactID: sdk.String("saepe"),
                                Destination: sdk.String("ipsum"),
                                Overwrite: sdk.Bool(false),
                                Permissions: sdk.String("veritatis"),
                            },
                            FileExec: &shared.SoftwareRecipeStepExecFile{
                                AllowedExitCodes: []int{
                                    552193,
                                    731694,
                                    584476,
                                },
                                Args: []string{
                                    "delectus",
                                },
                                ArtifactID: sdk.String("dolorem"),
                                LocalPath: sdk.String("dolore"),
                            },
                            MsiInstallation: &shared.SoftwareRecipeStepInstallMsi{
                                AllowedExitCodes: []int{
                                    240829,
                                    677263,
                                },
                                ArtifactID: sdk.String("architecto"),
                                Flags: []string{
                                    "aut",
                                },
                            },
                            RpmInstallation: &shared.SoftwareRecipeStepInstallRpm{
                                ArtifactID: sdk.String("quas"),
                            },
                            ScriptRun: &shared.SoftwareRecipeStepRunScript{
                                AllowedExitCodes: []int{
                                    9240,
                                    669917,
                                    833038,
                                    785153,
                                },
                                Interpreter: shared.SoftwareRecipeStepRunScriptInterpreterEnumPowershell.ToPointer(),
                                Script: sdk.String("ut"),
                            },
                        },
                    },
                    Version: sdk.String("facilis"),
                },
            },
        },
        AccessToken: sdk.String("cupiditate"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("quae"),
        Fields: sdk.String("laudantium"),
        GuestPolicyID: sdk.String("odio"),
        Key: sdk.String("occaecati"),
        OauthToken: sdk.String("voluptatibus"),
        Parent: "quisquam",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("vero"),
        UploadType: sdk.String("omnis"),
        UploadProtocol: sdk.String("quis"),
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
<!-- End SDK Example Usage -->