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
        Security: operations.OsconfigProjectsGuestPoliciesCreateSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.OsconfigProjectsGuestPoliciesCreatePathParams{
            Parent: "corrupti",
        },
        QueryParams: operations.OsconfigProjectsGuestPoliciesCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "distinctio",
            Alt: "proto",
            Callback: "unde",
            Fields: "nulla",
            GuestPolicyID: "corrupti",
            Key: "illum",
            OauthToken: "vel",
            PrettyPrint: false,
            QuotaUser: "error",
            UploadType: "deserunt",
            UploadProtocol: "suscipit",
        },
        Request: &shared.GuestPolicyInput{
            Assignment: &shared.Assignment{
                GroupLabels: []shared.AssignmentGroupLabel{
                    shared.AssignmentGroupLabel{
                        Labels: map[string]string{
                            "debitis": "ipsa",
                            "delectus": "tempora",
                        },
                    },
                    shared.AssignmentGroupLabel{
                        Labels: map[string]string{
                            "molestiae": "minus",
                            "placeat": "voluptatum",
                        },
                    },
                },
                InstanceNamePrefixes: []string{
                    "excepturi",
                    "nisi",
                },
                Instances: []string{
                    "temporibus",
                    "ab",
                    "quis",
                    "veritatis",
                },
                OsTypes: []shared.AssignmentOsType{
                    shared.AssignmentOsType{
                        OsArchitecture: "perferendis",
                        OsShortName: "ipsam",
                        OsVersion: "repellendus",
                    },
                    shared.AssignmentOsType{
                        OsArchitecture: "sapiente",
                        OsShortName: "quo",
                        OsVersion: "odit",
                    },
                    shared.AssignmentOsType{
                        OsArchitecture: "at",
                        OsShortName: "at",
                        OsVersion: "maiores",
                    },
                },
                Zones: []string{
                    "quod",
                    "quod",
                },
            },
            Description: "esse",
            Etag: "totam",
            Name: "porro",
            PackageRepositories: []shared.PackageRepository{
                shared.PackageRepository{
                    Apt: &shared.AptRepository{
                        ArchiveType: "ARCHIVE_TYPE_UNSPECIFIED",
                        Components: []string{
                            "officia",
                            "occaecati",
                            "fugit",
                        },
                        Distribution: "deleniti",
                        GpgKey: "hic",
                        URI: "https://mean-brick.info",
                    },
                    Goo: &shared.GooRepository{
                        Name: "molestiae",
                        URL: "modi",
                    },
                    Yum: &shared.YumRepository{
                        BaseURL: "qui",
                        DisplayName: "impedit",
                        GpgKeys: []string{
                            "esse",
                            "ipsum",
                            "excepturi",
                        },
                        ID: "aspernatur",
                    },
                    Zypper: &shared.ZypperRepository{
                        BaseURL: "perferendis",
                        DisplayName: "ad",
                        GpgKeys: []string{
                            "sed",
                            "iste",
                            "dolor",
                        },
                        ID: "natus",
                    },
                },
                shared.PackageRepository{
                    Apt: &shared.AptRepository{
                        ArchiveType: "DEB",
                        Components: []string{
                            "saepe",
                            "fuga",
                            "in",
                            "corporis",
                        },
                        Distribution: "iste",
                        GpgKey: "iure",
                        URI: "https://rich-bouquet.com",
                    },
                    Goo: &shared.GooRepository{
                        Name: "reiciendis",
                        URL: "est",
                    },
                    Yum: &shared.YumRepository{
                        BaseURL: "mollitia",
                        DisplayName: "laborum",
                        GpgKeys: []string{
                            "dolorem",
                        },
                        ID: "corporis",
                    },
                    Zypper: &shared.ZypperRepository{
                        BaseURL: "explicabo",
                        DisplayName: "nobis",
                        GpgKeys: []string{
                            "omnis",
                            "nemo",
                        },
                        ID: "minima",
                    },
                },
                shared.PackageRepository{
                    Apt: &shared.AptRepository{
                        ArchiveType: "DEB",
                        Components: []string{
                            "iure",
                        },
                        Distribution: "culpa",
                        GpgKey: "doloribus",
                        URI: "https://buttery-petitioner.biz",
                    },
                    Goo: &shared.GooRepository{
                        Name: "culpa",
                        URL: "consequuntur",
                    },
                    Yum: &shared.YumRepository{
                        BaseURL: "repellat",
                        DisplayName: "mollitia",
                        GpgKeys: []string{
                            "numquam",
                            "commodi",
                            "quam",
                        },
                        ID: "molestiae",
                    },
                    Zypper: &shared.ZypperRepository{
                        BaseURL: "velit",
                        DisplayName: "error",
                        GpgKeys: []string{
                            "quis",
                        },
                        ID: "vitae",
                    },
                },
            },
            Packages: []shared.Package{
                shared.Package{
                    DesiredState: "UPDATED",
                    Manager: "ANY",
                    Name: "odit",
                },
                shared.Package{
                    DesiredState: "REMOVED",
                    Manager: "ANY",
                    Name: "tenetur",
                },
                shared.Package{
                    DesiredState: "INSTALLED",
                    Manager: "YUM",
                    Name: "possimus",
                },
            },
            Recipes: []shared.SoftwareRecipe{
                shared.SoftwareRecipe{
                    Artifacts: []shared.SoftwareRecipeArtifact{
                        shared.SoftwareRecipeArtifact{
                            AllowInsecure: false,
                            Gcs: &shared.SoftwareRecipeArtifactGcs{
                                Bucket: "error",
                                Generation: "temporibus",
                                Object: "laborum",
                            },
                            ID: "quasi",
                            Remote: &shared.SoftwareRecipeArtifactRemote{
                                Checksum: "reiciendis",
                                URI: "https://twin-intent.name",
                            },
                        },
                    },
                    DesiredState: "REMOVED",
                    InstallSteps: []shared.SoftwareRecipeStep{
                        shared.SoftwareRecipeStep{
                            ArchiveExtraction: &shared.SoftwareRecipeStepExtractArchive{
                                ArtifactID: "omnis",
                                Destination: "voluptate",
                                Type: "TAR_XZ",
                            },
                            DpkgInstallation: &shared.SoftwareRecipeStepInstallDpkg{
                                ArtifactID: "perferendis",
                            },
                            FileCopy: &shared.SoftwareRecipeStepCopyFile{
                                ArtifactID: "doloremque",
                                Destination: "reprehenderit",
                                Overwrite: false,
                                Permissions: "ut",
                            },
                            FileExec: &shared.SoftwareRecipeStepExecFile{
                                AllowedExitCodes: []int{
                                    120196,
                                    359444,
                                    296140,
                                    480894,
                                },
                                Args: []string{
                                    "harum",
                                },
                                ArtifactID: "enim",
                                LocalPath: "accusamus",
                            },
                            MsiInstallation: &shared.SoftwareRecipeStepInstallMsi{
                                AllowedExitCodes: []int{
                                    918236,
                                    64147,
                                },
                                ArtifactID: "ipsum",
                                Flags: []string{
                                    "molestias",
                                    "excepturi",
                                    "pariatur",
                                },
                            },
                            RpmInstallation: &shared.SoftwareRecipeStepInstallRpm{
                                ArtifactID: "modi",
                            },
                            ScriptRun: &shared.SoftwareRecipeStepRunScript{
                                AllowedExitCodes: []int{
                                    523248,
                                    916723,
                                    93940,
                                },
                                Interpreter: "POWERSHELL",
                                Script: "sint",
                            },
                        },
                    },
                    Name: "veritatis",
                    UpdateSteps: []shared.SoftwareRecipeStep{
                        shared.SoftwareRecipeStep{
                            ArchiveExtraction: &shared.SoftwareRecipeStepExtractArchive{
                                ArtifactID: "incidunt",
                                Destination: "enim",
                                Type: "ARCHIVE_TYPE_UNSPECIFIED",
                            },
                            DpkgInstallation: &shared.SoftwareRecipeStepInstallDpkg{
                                ArtifactID: "est",
                            },
                            FileCopy: &shared.SoftwareRecipeStepCopyFile{
                                ArtifactID: "quibusdam",
                                Destination: "explicabo",
                                Overwrite: false,
                                Permissions: "deserunt",
                            },
                            FileExec: &shared.SoftwareRecipeStepExecFile{
                                AllowedExitCodes: []int{
                                    841386,
                                    289406,
                                    264730,
                                },
                                Args: []string{
                                    "aliquid",
                                },
                                ArtifactID: "cupiditate",
                                LocalPath: "quos",
                            },
                            MsiInstallation: &shared.SoftwareRecipeStepInstallMsi{
                                AllowedExitCodes: []int{
                                    164940,
                                },
                                ArtifactID: "assumenda",
                                Flags: []string{
                                    "alias",
                                    "fugit",
                                },
                            },
                            RpmInstallation: &shared.SoftwareRecipeStepInstallRpm{
                                ArtifactID: "dolorum",
                            },
                            ScriptRun: &shared.SoftwareRecipeStepRunScript{
                                AllowedExitCodes: []int{
                                    270008,
                                    703737,
                                    735194,
                                },
                                Interpreter: "INTERPRETER_UNSPECIFIED",
                                Script: "delectus",
                            },
                        },
                        shared.SoftwareRecipeStep{
                            ArchiveExtraction: &shared.SoftwareRecipeStepExtractArchive{
                                ArtifactID: "eum",
                                Destination: "non",
                                Type: "TAR_XZ",
                            },
                            DpkgInstallation: &shared.SoftwareRecipeStepInstallDpkg{
                                ArtifactID: "sint",
                            },
                            FileCopy: &shared.SoftwareRecipeStepCopyFile{
                                ArtifactID: "aliquid",
                                Destination: "provident",
                                Overwrite: false,
                                Permissions: "necessitatibus",
                            },
                            FileExec: &shared.SoftwareRecipeStepExecFile{
                                AllowedExitCodes: []int{
                                    638921,
                                    223081,
                                    891555,
                                },
                                Args: []string{
                                    "dolorum",
                                    "in",
                                    "in",
                                    "illum",
                                },
                                ArtifactID: "maiores",
                                LocalPath: "rerum",
                            },
                            MsiInstallation: &shared.SoftwareRecipeStepInstallMsi{
                                AllowedExitCodes: []int{
                                    297437,
                                },
                                ArtifactID: "cumque",
                                Flags: []string{
                                    "ea",
                                    "aliquid",
                                    "laborum",
                                    "accusamus",
                                },
                            },
                            RpmInstallation: &shared.SoftwareRecipeStepInstallRpm{
                                ArtifactID: "non",
                            },
                            ScriptRun: &shared.SoftwareRecipeStepRunScript{
                                AllowedExitCodes: []int{
                                    313218,
                                    881736,
                                    965417,
                                },
                                Interpreter: "POWERSHELL",
                                Script: "provident",
                            },
                        },
                        shared.SoftwareRecipeStep{
                            ArchiveExtraction: &shared.SoftwareRecipeStepExtractArchive{
                                ArtifactID: "nam",
                                Destination: "id",
                                Type: "TAR_BZIP",
                            },
                            DpkgInstallation: &shared.SoftwareRecipeStepInstallDpkg{
                                ArtifactID: "deleniti",
                            },
                            FileCopy: &shared.SoftwareRecipeStepCopyFile{
                                ArtifactID: "sapiente",
                                Destination: "amet",
                                Overwrite: false,
                                Permissions: "deserunt",
                            },
                            FileExec: &shared.SoftwareRecipeStepExecFile{
                                AllowedExitCodes: []int{
                                    423855,
                                    618809,
                                },
                                Args: []string{
                                    "molestiae",
                                    "perferendis",
                                    "nihil",
                                },
                                ArtifactID: "magnam",
                                LocalPath: "distinctio",
                            },
                            MsiInstallation: &shared.SoftwareRecipeStepInstallMsi{
                                AllowedExitCodes: []int{
                                    287991,
                                    290077,
                                    383462,
                                },
                                ArtifactID: "natus",
                                Flags: []string{
                                    "eum",
                                    "vero",
                                    "aspernatur",
                                },
                            },
                            RpmInstallation: &shared.SoftwareRecipeStepInstallRpm{
                                ArtifactID: "architecto",
                            },
                            ScriptRun: &shared.SoftwareRecipeStepRunScript{
                                AllowedExitCodes: []int{
                                    92373,
                                    569965,
                                },
                                Interpreter: "SHELL",
                                Script: "provident",
                            },
                        },
                        shared.SoftwareRecipeStep{
                            ArchiveExtraction: &shared.SoftwareRecipeStepExtractArchive{
                                ArtifactID: "quos",
                                Destination: "sint",
                                Type: "ARCHIVE_TYPE_UNSPECIFIED",
                            },
                            DpkgInstallation: &shared.SoftwareRecipeStepInstallDpkg{
                                ArtifactID: "mollitia",
                            },
                            FileCopy: &shared.SoftwareRecipeStepCopyFile{
                                ArtifactID: "reiciendis",
                                Destination: "mollitia",
                                Overwrite: false,
                                Permissions: "ad",
                            },
                            FileExec: &shared.SoftwareRecipeStepExecFile{
                                AllowedExitCodes: []int{
                                    221262,
                                    896547,
                                },
                                Args: []string{
                                    "nemo",
                                },
                                ArtifactID: "quasi",
                                LocalPath: "iure",
                            },
                            MsiInstallation: &shared.SoftwareRecipeStepInstallMsi{
                                AllowedExitCodes: []int{
                                    891924,
                                    260341,
                                    806194,
                                    537023,
                                },
                                ArtifactID: "facilis",
                                Flags: []string{
                                    "architecto",
                                    "architecto",
                                },
                            },
                            RpmInstallation: &shared.SoftwareRecipeStepInstallRpm{
                                ArtifactID: "repudiandae",
                            },
                            ScriptRun: &shared.SoftwareRecipeStepRunScript{
                                AllowedExitCodes: []int{
                                    714242,
                                    469249,
                                },
                                Interpreter: "POWERSHELL",
                                Script: "quibusdam",
                            },
                        },
                    },
                    Version: "sed",
                },
            },
        },
    }

    ctx := context.Background()
    res, err := s.Projects.OsconfigProjectsGuestPoliciesCreate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GuestPolicy != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->