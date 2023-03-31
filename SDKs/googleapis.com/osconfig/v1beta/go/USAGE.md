<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.OsconfigProjectsGuestPoliciesCreateRequest{
        DollarXgafv: "2",
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
                        OsArchitecture: "deserunt",
                        OsShortName: "perferendis",
                        OsVersion: "ipsam",
                    },
                },
                Zones: []string{
                    "sapiente",
                    "quo",
                    "odit",
                    "at",
                },
            },
            Description: "at",
            Etag: "maiores",
            Name: "molestiae",
            PackageRepositories: []shared.PackageRepository{
                shared.PackageRepository{
                    Apt: &shared.AptRepository{
                        ArchiveType: "DEB_SRC",
                        Components: []string{
                            "totam",
                            "porro",
                        },
                        Distribution: "dolorum",
                        GpgKey: "dicta",
                        URI: "https://posh-muffin.com",
                    },
                    Goo: &shared.GooRepository{
                        Name: "deleniti",
                        URL: "hic",
                    },
                    Yum: &shared.YumRepository{
                        BaseURL: "optio",
                        DisplayName: "totam",
                        GpgKeys: []string{
                            "commodi",
                        },
                        ID: "molestiae",
                    },
                    Zypper: &shared.ZypperRepository{
                        BaseURL: "modi",
                        DisplayName: "qui",
                        GpgKeys: []string{
                            "cum",
                            "esse",
                            "ipsum",
                            "excepturi",
                        },
                        ID: "aspernatur",
                    },
                },
                shared.PackageRepository{
                    Apt: &shared.AptRepository{
                        ArchiveType: "ARCHIVE_TYPE_UNSPECIFIED",
                        Components: []string{
                            "natus",
                            "sed",
                        },
                        Distribution: "iste",
                        GpgKey: "dolor",
                        URI: "https://hoarse-upper.org",
                    },
                    Goo: &shared.GooRepository{
                        Name: "fuga",
                        URL: "in",
                    },
                    Yum: &shared.YumRepository{
                        BaseURL: "corporis",
                        DisplayName: "iste",
                        GpgKeys: []string{
                            "saepe",
                            "quidem",
                        },
                        ID: "architecto",
                    },
                    Zypper: &shared.ZypperRepository{
                        BaseURL: "ipsa",
                        DisplayName: "reiciendis",
                        GpgKeys: []string{
                            "mollitia",
                            "laborum",
                            "dolores",
                        },
                        ID: "dolorem",
                    },
                },
                shared.PackageRepository{
                    Apt: &shared.AptRepository{
                        ArchiveType: "DEB",
                        Components: []string{
                            "nobis",
                        },
                        Distribution: "enim",
                        GpgKey: "omnis",
                        URI: "http://general-mobster.com",
                    },
                    Goo: &shared.GooRepository{
                        Name: "iure",
                        URL: "culpa",
                    },
                    Yum: &shared.YumRepository{
                        BaseURL: "doloribus",
                        DisplayName: "sapiente",
                        GpgKeys: []string{
                            "mollitia",
                        },
                        ID: "dolorem",
                    },
                    Zypper: &shared.ZypperRepository{
                        BaseURL: "culpa",
                        DisplayName: "consequuntur",
                        GpgKeys: []string{
                            "mollitia",
                            "occaecati",
                            "numquam",
                            "commodi",
                        },
                        ID: "quam",
                    },
                },
                shared.PackageRepository{
                    Apt: &shared.AptRepository{
                        ArchiveType: "DEB",
                        Components: []string{
                            "error",
                        },
                        Distribution: "quia",
                        GpgKey: "quis",
                        URI: "http://quixotic-physics.biz",
                    },
                    Goo: &shared.GooRepository{
                        Name: "odit",
                        URL: "quo",
                    },
                    Yum: &shared.YumRepository{
                        BaseURL: "sequi",
                        DisplayName: "tenetur",
                        GpgKeys: []string{
                            "id",
                            "possimus",
                        },
                        ID: "aut",
                    },
                    Zypper: &shared.ZypperRepository{
                        BaseURL: "quasi",
                        DisplayName: "error",
                        GpgKeys: []string{
                            "laborum",
                            "quasi",
                            "reiciendis",
                            "voluptatibus",
                        },
                        ID: "vero",
                    },
                },
            },
            Packages: []shared.Package{
                shared.Package{
                    DesiredState: "UPDATED",
                    Manager: "GOO",
                    Name: "ipsa",
                },
                shared.Package{
                    DesiredState: "UPDATED",
                    Manager: "APT",
                    Name: "cum",
                },
            },
            Recipes: []shared.SoftwareRecipe{
                shared.SoftwareRecipe{
                    Artifacts: []shared.SoftwareRecipeArtifact{
                        shared.SoftwareRecipeArtifact{
                            AllowInsecure: false,
                            Gcs: &shared.SoftwareRecipeArtifactGcs{
                                Bucket: "reprehenderit",
                                Generation: "ut",
                                Object: "maiores",
                            },
                            ID: "dicta",
                            Remote: &shared.SoftwareRecipeArtifactRemote{
                                Checksum: "corporis",
                                URI: "http://lazy-butterfly.net",
                            },
                        },
                    },
                    DesiredState: "INSTALLED",
                    InstallSteps: []shared.SoftwareRecipeStep{
                        shared.SoftwareRecipeStep{
                            ArchiveExtraction: &shared.SoftwareRecipeStepExtractArchive{
                                ArtifactID: "commodi",
                                Destination: "repudiandae",
                                Type: "ARCHIVE_TYPE_UNSPECIFIED",
                            },
                            DpkgInstallation: &shared.SoftwareRecipeStepInstallDpkg{
                                ArtifactID: "ipsum",
                            },
                            FileCopy: &shared.SoftwareRecipeStepCopyFile{
                                ArtifactID: "quidem",
                                Destination: "molestias",
                                Overwrite: false,
                                Permissions: "excepturi",
                            },
                            FileExec: &shared.SoftwareRecipeStepExecFile{
                                AllowedExitCodes: []int{
                                    265389,
                                    508969,
                                    523248,
                                    916723,
                                },
                                Args: []string{
                                    "repudiandae",
                                },
                                ArtifactID: "sint",
                                LocalPath: "veritatis",
                            },
                            MsiInstallation: &shared.SoftwareRecipeStepInstallMsi{
                                AllowedExitCodes: []int{
                                    277718,
                                    318569,
                                    9356,
                                    667411,
                                },
                                ArtifactID: "quibusdam",
                                Flags: []string{
                                    "deserunt",
                                },
                            },
                            RpmInstallation: &shared.SoftwareRecipeStepInstallRpm{
                                ArtifactID: "distinctio",
                            },
                            ScriptRun: &shared.SoftwareRecipeStepRunScript{
                                AllowedExitCodes: []int{
                                    289406,
                                    264730,
                                    183191,
                                    397821,
                                },
                                Interpreter: "SHELL",
                                Script: "quos",
                            },
                        },
                        shared.SoftwareRecipeStep{
                            ArchiveExtraction: &shared.SoftwareRecipeStepExtractArchive{
                                ArtifactID: "perferendis",
                                Destination: "magni",
                                Type: "TAR_XZ",
                            },
                            DpkgInstallation: &shared.SoftwareRecipeStepInstallDpkg{
                                ArtifactID: "ipsam",
                            },
                            FileCopy: &shared.SoftwareRecipeStepCopyFile{
                                ArtifactID: "alias",
                                Destination: "fugit",
                                Overwrite: false,
                                Permissions: "dolorum",
                            },
                            FileExec: &shared.SoftwareRecipeStepExecFile{
                                AllowedExitCodes: []int{
                                    270008,
                                    703737,
                                    735194,
                                },
                                Args: []string{
                                    "delectus",
                                    "eum",
                                },
                                ArtifactID: "non",
                                LocalPath: "eligendi",
                            },
                            MsiInstallation: &shared.SoftwareRecipeStepInstallMsi{
                                AllowedExitCodes: []int{
                                    396098,
                                    592042,
                                    896039,
                                },
                                ArtifactID: "sint",
                                Flags: []string{
                                    "dolor",
                                    "debitis",
                                    "a",
                                },
                            },
                            RpmInstallation: &shared.SoftwareRecipeStepInstallRpm{
                                ArtifactID: "dolorum",
                            },
                            ScriptRun: &shared.SoftwareRecipeStepRunScript{
                                AllowedExitCodes: []int{
                                    449198,
                                    846409,
                                },
                                Interpreter: "POWERSHELL",
                                Script: "rerum",
                            },
                        },
                        shared.SoftwareRecipeStep{
                            ArchiveExtraction: &shared.SoftwareRecipeStepExtractArchive{
                                ArtifactID: "dicta",
                                Destination: "magnam",
                                Type: "TAR_XZ",
                            },
                            DpkgInstallation: &shared.SoftwareRecipeStepInstallDpkg{
                                ArtifactID: "facere",
                            },
                            FileCopy: &shared.SoftwareRecipeStepCopyFile{
                                ArtifactID: "ea",
                                Destination: "aliquid",
                                Overwrite: false,
                                Permissions: "laborum",
                            },
                            FileExec: &shared.SoftwareRecipeStepExecFile{
                                AllowedExitCodes: []int{
                                    249796,
                                    581273,
                                    313218,
                                    881736,
                                },
                                Args: []string{
                                    "quidem",
                                    "provident",
                                    "nam",
                                    "id",
                                },
                                ArtifactID: "blanditiis",
                                LocalPath: "deleniti",
                            },
                            MsiInstallation: &shared.SoftwareRecipeStepInstallMsi{
                                AllowedExitCodes: []int{
                                    230533,
                                    643990,
                                    394869,
                                    423855,
                                },
                                ArtifactID: "natus",
                                Flags: []string{
                                    "molestiae",
                                    "perferendis",
                                    "nihil",
                                },
                            },
                            RpmInstallation: &shared.SoftwareRecipeStepInstallRpm{
                                ArtifactID: "magnam",
                            },
                            ScriptRun: &shared.SoftwareRecipeStepRunScript{
                                AllowedExitCodes: []int{
                                    660174,
                                    287991,
                                    290077,
                                },
                                Interpreter: "SHELL",
                                Script: "natus",
                            },
                        },
                        shared.SoftwareRecipeStep{
                            ArchiveExtraction: &shared.SoftwareRecipeStepExtractArchive{
                                ArtifactID: "nobis",
                                Destination: "eum",
                                Type: "ZIP",
                            },
                            DpkgInstallation: &shared.SoftwareRecipeStepInstallDpkg{
                                ArtifactID: "aspernatur",
                            },
                            FileCopy: &shared.SoftwareRecipeStepCopyFile{
                                ArtifactID: "architecto",
                                Destination: "magnam",
                                Overwrite: false,
                                Permissions: "et",
                            },
                            FileExec: &shared.SoftwareRecipeStepExecFile{
                                AllowedExitCodes: []int{
                                    354047,
                                    590873,
                                    551816,
                                },
                                Args: []string{
                                    "accusantium",
                                    "mollitia",
                                    "reiciendis",
                                },
                                ArtifactID: "mollitia",
                                LocalPath: "ad",
                            },
                            MsiInstallation: &shared.SoftwareRecipeStepInstallMsi{
                                AllowedExitCodes: []int{
                                    221262,
                                    896547,
                                },
                                ArtifactID: "odit",
                                Flags: []string{
                                    "quasi",
                                    "iure",
                                },
                            },
                            RpmInstallation: &shared.SoftwareRecipeStepInstallRpm{
                                ArtifactID: "doloribus",
                            },
                            ScriptRun: &shared.SoftwareRecipeStepRunScript{
                                AllowedExitCodes: []int{
                                    260341,
                                    806194,
                                    537023,
                                    703889,
                                },
                                Interpreter: "SHELL",
                                Script: "architecto",
                            },
                        },
                    },
                    Name: "architecto",
                    UpdateSteps: []shared.SoftwareRecipeStep{
                        shared.SoftwareRecipeStep{
                            ArchiveExtraction: &shared.SoftwareRecipeStepExtractArchive{
                                ArtifactID: "ullam",
                                Destination: "expedita",
                                Type: "TAR_BZIP",
                            },
                            DpkgInstallation: &shared.SoftwareRecipeStepInstallDpkg{
                                ArtifactID: "repellat",
                            },
                            FileCopy: &shared.SoftwareRecipeStepCopyFile{
                                ArtifactID: "quibusdam",
                                Destination: "sed",
                                Overwrite: false,
                                Permissions: "saepe",
                            },
                            FileExec: &shared.SoftwareRecipeStepExecFile{
                                AllowedExitCodes: []int{
                                    37559,
                                    162493,
                                    508315,
                                    615560,
                                },
                                Args: []string{
                                    "sunt",
                                },
                                ArtifactID: "quo",
                                LocalPath: "illum",
                            },
                            MsiInstallation: &shared.SoftwareRecipeStepInstallMsi{
                                AllowedExitCodes: []int{
                                    807319,
                                    411397,
                                    569101,
                                    139972,
                                },
                                ArtifactID: "ea",
                                Flags: []string{
                                    "ab",
                                },
                            },
                            RpmInstallation: &shared.SoftwareRecipeStepInstallRpm{
                                ArtifactID: "maiores",
                            },
                            ScriptRun: &shared.SoftwareRecipeStepRunScript{
                                AllowedExitCodes: []int{
                                    373291,
                                    453543,
                                    420075,
                                },
                                Interpreter: "POWERSHELL",
                                Script: "eaque",
                            },
                        },
                        shared.SoftwareRecipeStep{
                            ArchiveExtraction: &shared.SoftwareRecipeStepExtractArchive{
                                ArtifactID: "pariatur",
                                Destination: "nemo",
                                Type: "ZIP",
                            },
                            DpkgInstallation: &shared.SoftwareRecipeStepInstallDpkg{
                                ArtifactID: "perferendis",
                            },
                            FileCopy: &shared.SoftwareRecipeStepCopyFile{
                                ArtifactID: "fugiat",
                                Destination: "amet",
                                Overwrite: false,
                                Permissions: "aut",
                            },
                            FileExec: &shared.SoftwareRecipeStepExecFile{
                                AllowedExitCodes: []int{
                                    359978,
                                    944124,
                                    729991,
                                    749999,
                                },
                                Args: []string{
                                    "quis",
                                },
                                ArtifactID: "totam",
                                LocalPath: "dignissimos",
                            },
                            MsiInstallation: &shared.SoftwareRecipeStepInstallMsi{
                                AllowedExitCodes: []int{
                                    338985,
                                },
                                ArtifactID: "nesciunt",
                                Flags: []string{
                                    "perferendis",
                                },
                            },
                            RpmInstallation: &shared.SoftwareRecipeStepInstallRpm{
                                ArtifactID: "dolores",
                            },
                            ScriptRun: &shared.SoftwareRecipeStepRunScript{
                                AllowedExitCodes: []int{
                                    463451,
                                    223924,
                                    874573,
                                    345352,
                                },
                                Interpreter: "POWERSHELL",
                                Script: "recusandae",
                            },
                        },
                        shared.SoftwareRecipeStep{
                            ArchiveExtraction: &shared.SoftwareRecipeStepExtractArchive{
                                ArtifactID: "omnis",
                                Destination: "facilis",
                                Type: "TAR_LZMA",
                            },
                            DpkgInstallation: &shared.SoftwareRecipeStepInstallDpkg{
                                ArtifactID: "voluptatem",
                            },
                            FileCopy: &shared.SoftwareRecipeStepCopyFile{
                                ArtifactID: "porro",
                                Destination: "consequuntur",
                                Overwrite: false,
                                Permissions: "blanditiis",
                            },
                            FileExec: &shared.SoftwareRecipeStepExecFile{
                                AllowedExitCodes: []int{
                                    50370,
                                    577229,
                                    699098,
                                },
                                Args: []string{
                                    "asperiores",
                                },
                                ArtifactID: "earum",
                                LocalPath: "modi",
                            },
                            MsiInstallation: &shared.SoftwareRecipeStepInstallMsi{
                                AllowedExitCodes: []int{
                                    679091,
                                    535633,
                                    864282,
                                },
                                ArtifactID: "provident",
                                Flags: []string{
                                    "libero",
                                    "delectus",
                                    "quaerat",
                                    "quos",
                                },
                            },
                            RpmInstallation: &shared.SoftwareRecipeStepInstallRpm{
                                ArtifactID: "aliquid",
                            },
                            ScriptRun: &shared.SoftwareRecipeStepRunScript{
                                AllowedExitCodes: []int{
                                    209843,
                                },
                                Interpreter: "INTERPRETER_UNSPECIFIED",
                                Script: "qui",
                            },
                        },
                        shared.SoftwareRecipeStep{
                            ArchiveExtraction: &shared.SoftwareRecipeStepExtractArchive{
                                ArtifactID: "ipsum",
                                Destination: "hic",
                                Type: "TAR_BZIP",
                            },
                            DpkgInstallation: &shared.SoftwareRecipeStepInstallDpkg{
                                ArtifactID: "cum",
                            },
                            FileCopy: &shared.SoftwareRecipeStepCopyFile{
                                ArtifactID: "voluptate",
                                Destination: "dignissimos",
                                Overwrite: false,
                                Permissions: "reiciendis",
                            },
                            FileExec: &shared.SoftwareRecipeStepExecFile{
                                AllowedExitCodes: []int{
                                    680545,
                                },
                                Args: []string{
                                    "veritatis",
                                    "ipsa",
                                },
                                ArtifactID: "ipsa",
                                LocalPath: "iure",
                            },
                            MsiInstallation: &shared.SoftwareRecipeStepInstallMsi{
                                AllowedExitCodes: []int{
                                    311796,
                                    881005,
                                },
                                ArtifactID: "quidem",
                                Flags: []string{
                                    "voluptas",
                                    "natus",
                                    "eos",
                                    "atque",
                                },
                            },
                            RpmInstallation: &shared.SoftwareRecipeStepInstallRpm{
                                ArtifactID: "sit",
                            },
                            ScriptRun: &shared.SoftwareRecipeStepRunScript{
                                AllowedExitCodes: []int{
                                    67249,
                                    743835,
                                    679393,
                                    478596,
                                },
                                Interpreter: "SHELL",
                                Script: "dolorum",
                            },
                        },
                    },
                    Version: "deleniti",
                },
            },
        },
        AccessToken: "omnis",
        Alt: "proto",
        Callback: "distinctio",
        Fields: "asperiores",
        GuestPolicyID: "nihil",
        Key: "ipsum",
        OauthToken: "voluptate",
        Parent: "id",
        PrettyPrint: false,
        QuotaUser: "saepe",
        UploadType: "eius",
        UploadProtocol: "aspernatur",
    }

    ctx := context.Background()
    res, err := s.Projects.OsconfigProjectsGuestPoliciesCreate(ctx, req, operations.OsconfigProjectsGuestPoliciesCreateSecurity{
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