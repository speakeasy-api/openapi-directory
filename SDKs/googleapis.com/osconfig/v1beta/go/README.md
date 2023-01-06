# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get openapi
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import (
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
            Parent: "quo",
        },
        QueryParams: operations.OsconfigProjectsGuestPoliciesCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "perspiciatis",
            Alt: "media",
            Callback: "omnis",
            Fields: "sit",
            GuestPolicyID: "et",
            Key: "totam",
            OauthToken: "magnam",
            PrettyPrint: true,
            QuotaUser: "commodi",
            UploadType: "alias",
            UploadProtocol: "et",
        },
        Request: &shared.GuestPolicyInput{
            Assignment: &shared.Assignment{
                GroupLabels: []shared.AssignmentGroupLabel{
                    shared.AssignmentGroupLabel{
                        Labels: map[string]string{
                            "non": "corrupti",
                            "rerum": "assumenda",
                        },
                    },
                },
                InstanceNamePrefixes: []string{
                    "nesciunt",
                    "recusandae",
                },
                Instances: []string{
                    "odit",
                    "voluptatum",
                },
                OsTypes: []shared.AssignmentOsType{
                    shared.AssignmentOsType{
                        OsArchitecture: "temporibus",
                        OsShortName: "eos",
                        OsVersion: "harum",
                    },
                },
                Zones: []string{
                    "fugit",
                    "a",
                },
            },
            Description: "amet",
            Etag: "quibusdam",
            Name: "tenetur",
            PackageRepositories: []shared.PackageRepository{
                shared.PackageRepository{
                    Apt: &shared.AptRepository{
                        ArchiveType: "DEB_SRC",
                        Components: []string{
                            "id",
                            "enim",
                        },
                        Distribution: "illum",
                        GpgKey: "ut",
                        URI: "optio",
                    },
                    Goo: &shared.GooRepository{
                        Name: "quisquam",
                        URL: "mollitia",
                    },
                    Yum: &shared.YumRepository{
                        BaseURL: "et",
                        DisplayName: "hic",
                        GpgKeys: []string{
                            "quas",
                            "tenetur",
                            "neque",
                        },
                        ID: "repellat",
                    },
                    Zypper: &shared.ZypperRepository{
                        BaseURL: "facere",
                        DisplayName: "recusandae",
                        GpgKeys: []string{
                            "aut",
                        },
                        ID: "nobis",
                    },
                },
            },
            Packages: []shared.Package{
                shared.Package{
                    DesiredState: "DESIRED_STATE_UNSPECIFIED",
                    Manager: "ANY",
                    Name: "doloremque",
                },
                shared.Package{
                    DesiredState: "UPDATED",
                    Manager: "YUM",
                    Name: "voluptatem",
                },
                shared.Package{
                    DesiredState: "REMOVED",
                    Manager: "GOO",
                    Name: "accusamus",
                },
            },
            Recipes: []shared.SoftwareRecipe{
                shared.SoftwareRecipe{
                    Artifacts: []shared.SoftwareRecipeArtifact{
                        shared.SoftwareRecipeArtifact{
                            AllowInsecure: true,
                            Gcs: &shared.SoftwareRecipeArtifactGcs{
                                Bucket: "optio",
                                Generation: "in",
                                Object: "et",
                            },
                            ID: "voluptatum",
                            Remote: &shared.SoftwareRecipeArtifactRemote{
                                Checksum: "ducimus",
                                URI: "voluptas",
                            },
                        },
                        shared.SoftwareRecipeArtifact{
                            AllowInsecure: true,
                            Gcs: &shared.SoftwareRecipeArtifactGcs{
                                Bucket: "magnam",
                                Generation: "quidem",
                                Object: "quis",
                            },
                            ID: "impedit",
                            Remote: &shared.SoftwareRecipeArtifactRemote{
                                Checksum: "quis",
                                URI: "pariatur",
                            },
                        },
                        shared.SoftwareRecipeArtifact{
                            AllowInsecure: true,
                            Gcs: &shared.SoftwareRecipeArtifactGcs{
                                Bucket: "repudiandae",
                                Generation: "consequatur",
                                Object: "incidunt",
                            },
                            ID: "autem",
                            Remote: &shared.SoftwareRecipeArtifactRemote{
                                Checksum: "voluptatem",
                                URI: "qui",
                            },
                        },
                    },
                    DesiredState: "REMOVED",
                    InstallSteps: []shared.SoftwareRecipeStep{
                        shared.SoftwareRecipeStep{
                            ArchiveExtraction: &shared.SoftwareRecipeStepExtractArchive{
                                ArtifactID: "molestiae",
                                Destination: "ipsum",
                                Type: "TAR_LZMA",
                            },
                            DpkgInstallation: &shared.SoftwareRecipeStepInstallDpkg{
                                ArtifactID: "dignissimos",
                            },
                            FileCopy: &shared.SoftwareRecipeStepCopyFile{
                                ArtifactID: "omnis",
                                Destination: "maiores",
                                Overwrite: false,
                                Permissions: "iste",
                            },
                            FileExec: &shared.SoftwareRecipeStepExecFile{
                                AllowedExitCodes: []int32{
                                    2321652858545718495,
                                },
                                Args: []string{
                                    "nesciunt",
                                    "libero",
                                    "sint",
                                },
                                ArtifactID: "architecto",
                                LocalPath: "facere",
                            },
                            MsiInstallation: &shared.SoftwareRecipeStepInstallMsi{
                                AllowedExitCodes: []int32{
                                    2600104984111499421,
                                    801919713860541343,
                                    8091713230454783072,
                                },
                                ArtifactID: "tenetur",
                                Flags: []string{
                                    "nobis",
                                    "animi",
                                },
                            },
                            RpmInstallation: &shared.SoftwareRecipeStepInstallRpm{
                                ArtifactID: "laboriosam",
                            },
                            ScriptRun: &shared.SoftwareRecipeStepRunScript{
                                AllowedExitCodes: []int32{
                                    9092355897977314672,
                                },
                                Interpreter: "SHELL",
                                Script: "ipsa",
                            },
                        },
                        shared.SoftwareRecipeStep{
                            ArchiveExtraction: &shared.SoftwareRecipeStepExtractArchive{
                                ArtifactID: "sit",
                                Destination: "voluptatibus",
                                Type: "TAR",
                            },
                            DpkgInstallation: &shared.SoftwareRecipeStepInstallDpkg{
                                ArtifactID: "aspernatur",
                            },
                            FileCopy: &shared.SoftwareRecipeStepCopyFile{
                                ArtifactID: "eum",
                                Destination: "vel",
                                Overwrite: false,
                                Permissions: "omnis",
                            },
                            FileExec: &shared.SoftwareRecipeStepExecFile{
                                AllowedExitCodes: []int32{
                                    1138555545343431620,
                                    3648632884966860357,
                                },
                                Args: []string{
                                    "expedita",
                                    "eius",
                                    "vero",
                                },
                                ArtifactID: "perferendis",
                                LocalPath: "labore",
                            },
                            MsiInstallation: &shared.SoftwareRecipeStepInstallMsi{
                                AllowedExitCodes: []int32{
                                    1740399200513402290,
                                },
                                ArtifactID: "voluptatem",
                                Flags: []string{
                                    "itaque",
                                },
                            },
                            RpmInstallation: &shared.SoftwareRecipeStepInstallRpm{
                                ArtifactID: "corporis",
                            },
                            ScriptRun: &shared.SoftwareRecipeStepRunScript{
                                AllowedExitCodes: []int32{
                                    3909571325232464917,
                                },
                                Interpreter: "POWERSHELL",
                                Script: "ea",
                            },
                        },
                    },
                    Name: "porro",
                    UpdateSteps: []shared.SoftwareRecipeStep{
                        shared.SoftwareRecipeStep{
                            ArchiveExtraction: &shared.SoftwareRecipeStepExtractArchive{
                                ArtifactID: "quidem",
                                Destination: "aut",
                                Type: "TAR_GZIP",
                            },
                            DpkgInstallation: &shared.SoftwareRecipeStepInstallDpkg{
                                ArtifactID: "quam",
                            },
                            FileCopy: &shared.SoftwareRecipeStepCopyFile{
                                ArtifactID: "harum",
                                Destination: "nam",
                                Overwrite: false,
                                Permissions: "deserunt",
                            },
                            FileExec: &shared.SoftwareRecipeStepExecFile{
                                AllowedExitCodes: []int32{
                                    5406168200080687935,
                                },
                                Args: []string{
                                    "maxime",
                                    "vel",
                                    "iusto",
                                },
                                ArtifactID: "numquam",
                                LocalPath: "tempore",
                            },
                            MsiInstallation: &shared.SoftwareRecipeStepInstallMsi{
                                AllowedExitCodes: []int32{
                                    7497738140442995187,
                                },
                                ArtifactID: "cum",
                                Flags: []string{
                                    "sequi",
                                },
                            },
                            RpmInstallation: &shared.SoftwareRecipeStepInstallRpm{
                                ArtifactID: "omnis",
                            },
                            ScriptRun: &shared.SoftwareRecipeStepRunScript{
                                AllowedExitCodes: []int32{
                                    3310938803414307472,
                                    1257723659178083677,
                                    6424616684946641422,
                                },
                                Interpreter: "INTERPRETER_UNSPECIFIED",
                                Script: "qui",
                            },
                        },
                        shared.SoftwareRecipeStep{
                            ArchiveExtraction: &shared.SoftwareRecipeStepExtractArchive{
                                ArtifactID: "quis",
                                Destination: "aut",
                                Type: "TAR_GZIP",
                            },
                            DpkgInstallation: &shared.SoftwareRecipeStepInstallDpkg{
                                ArtifactID: "culpa",
                            },
                            FileCopy: &shared.SoftwareRecipeStepCopyFile{
                                ArtifactID: "vel",
                                Destination: "non",
                                Overwrite: true,
                                Permissions: "est",
                            },
                            FileExec: &shared.SoftwareRecipeStepExecFile{
                                AllowedExitCodes: []int32{
                                    5340947795557067830,
                                    3865998802449302642,
                                    2002784040749981055,
                                },
                                Args: []string{
                                    "quis",
                                    "nulla",
                                },
                                ArtifactID: "corrupti",
                                LocalPath: "ut",
                            },
                            MsiInstallation: &shared.SoftwareRecipeStepInstallMsi{
                                AllowedExitCodes: []int32{
                                    8461969961211307587,
                                    6537277290524699113,
                                    3706120604258394001,
                                },
                                ArtifactID: "eum",
                                Flags: []string{
                                    "non",
                                },
                            },
                            RpmInstallation: &shared.SoftwareRecipeStepInstallRpm{
                                ArtifactID: "non",
                            },
                            ScriptRun: &shared.SoftwareRecipeStepRunScript{
                                AllowedExitCodes: []int32{
                                    8620937073649976645,
                                    4760963621477527542,
                                    1665542080604327158,
                                },
                                Interpreter: "POWERSHELL",
                                Script: "maiores",
                            },
                        },
                    },
                    Version: "eum",
                },
                shared.SoftwareRecipe{
                    Artifacts: []shared.SoftwareRecipeArtifact{
                        shared.SoftwareRecipeArtifact{
                            AllowInsecure: false,
                            Gcs: &shared.SoftwareRecipeArtifactGcs{
                                Bucket: "iste",
                                Generation: "reprehenderit",
                                Object: "repellat",
                            },
                            ID: "aut",
                            Remote: &shared.SoftwareRecipeArtifactRemote{
                                Checksum: "ut",
                                URI: "voluptatibus",
                            },
                        },
                        shared.SoftwareRecipeArtifact{
                            AllowInsecure: false,
                            Gcs: &shared.SoftwareRecipeArtifactGcs{
                                Bucket: "repellendus",
                                Generation: "totam",
                                Object: "facilis",
                            },
                            ID: "quae",
                            Remote: &shared.SoftwareRecipeArtifactRemote{
                                Checksum: "ut",
                                URI: "dicta",
                            },
                        },
                        shared.SoftwareRecipeArtifact{
                            AllowInsecure: false,
                            Gcs: &shared.SoftwareRecipeArtifactGcs{
                                Bucket: "aut",
                                Generation: "quo",
                                Object: "dignissimos",
                            },
                            ID: "quo",
                            Remote: &shared.SoftwareRecipeArtifactRemote{
                                Checksum: "commodi",
                                URI: "rerum",
                            },
                        },
                    },
                    DesiredState: "REMOVED",
                    InstallSteps: []shared.SoftwareRecipeStep{
                        shared.SoftwareRecipeStep{
                            ArchiveExtraction: &shared.SoftwareRecipeStepExtractArchive{
                                ArtifactID: "quia",
                                Destination: "vel",
                                Type: "TAR_XZ",
                            },
                            DpkgInstallation: &shared.SoftwareRecipeStepInstallDpkg{
                                ArtifactID: "et",
                            },
                            FileCopy: &shared.SoftwareRecipeStepCopyFile{
                                ArtifactID: "sed",
                                Destination: "aut",
                                Overwrite: true,
                                Permissions: "modi",
                            },
                            FileExec: &shared.SoftwareRecipeStepExecFile{
                                AllowedExitCodes: []int32{
                                    8554483107017482103,
                                },
                                Args: []string{
                                    "aut",
                                    "qui",
                                    "voluptates",
                                },
                                ArtifactID: "odio",
                                LocalPath: "pariatur",
                            },
                            MsiInstallation: &shared.SoftwareRecipeStepInstallMsi{
                                AllowedExitCodes: []int32{
                                    1061238324564434350,
                                    5548841646479524062,
                                },
                                ArtifactID: "veritatis",
                                Flags: []string{
                                    "vero",
                                },
                            },
                            RpmInstallation: &shared.SoftwareRecipeStepInstallRpm{
                                ArtifactID: "autem",
                            },
                            ScriptRun: &shared.SoftwareRecipeStepRunScript{
                                AllowedExitCodes: []int32{
                                    899845756277798671,
                                    404125353896821593,
                                },
                                Interpreter: "SHELL",
                                Script: "esse",
                            },
                        },
                        shared.SoftwareRecipeStep{
                            ArchiveExtraction: &shared.SoftwareRecipeStepExtractArchive{
                                ArtifactID: "minus",
                                Destination: "harum",
                                Type: "TAR_XZ",
                            },
                            DpkgInstallation: &shared.SoftwareRecipeStepInstallDpkg{
                                ArtifactID: "perspiciatis",
                            },
                            FileCopy: &shared.SoftwareRecipeStepCopyFile{
                                ArtifactID: "iure",
                                Destination: "beatae",
                                Overwrite: false,
                                Permissions: "non",
                            },
                            FileExec: &shared.SoftwareRecipeStepExecFile{
                                AllowedExitCodes: []int32{
                                    3870156042731119877,
                                    8346381042517631720,
                                },
                                Args: []string{
                                    "est",
                                    "doloremque",
                                    "libero",
                                },
                                ArtifactID: "dolor",
                                LocalPath: "nulla",
                            },
                            MsiInstallation: &shared.SoftwareRecipeStepInstallMsi{
                                AllowedExitCodes: []int32{
                                    3182393284648836137,
                                    1659637740585707350,
                                },
                                ArtifactID: "sint",
                                Flags: []string{
                                    "quia",
                                    "pariatur",
                                    "perspiciatis",
                                },
                            },
                            RpmInstallation: &shared.SoftwareRecipeStepInstallRpm{
                                ArtifactID: "laboriosam",
                            },
                            ScriptRun: &shared.SoftwareRecipeStepRunScript{
                                AllowedExitCodes: []int32{
                                    8735615298781067252,
                                },
                                Interpreter: "SHELL",
                                Script: "dignissimos",
                            },
                        },
                    },
                    Name: "sit",
                    UpdateSteps: []shared.SoftwareRecipeStep{
                        shared.SoftwareRecipeStep{
                            ArchiveExtraction: &shared.SoftwareRecipeStepExtractArchive{
                                ArtifactID: "omnis",
                                Destination: "sint",
                                Type: "ZIP",
                            },
                            DpkgInstallation: &shared.SoftwareRecipeStepInstallDpkg{
                                ArtifactID: "nemo",
                            },
                            FileCopy: &shared.SoftwareRecipeStepCopyFile{
                                ArtifactID: "provident",
                                Destination: "illo",
                                Overwrite: true,
                                Permissions: "quia",
                            },
                            FileExec: &shared.SoftwareRecipeStepExecFile{
                                AllowedExitCodes: []int32{
                                    8322370022356032251,
                                    1534262714647058148,
                                },
                                Args: []string{
                                    "quos",
                                },
                                ArtifactID: "atque",
                                LocalPath: "corrupti",
                            },
                            MsiInstallation: &shared.SoftwareRecipeStepInstallMsi{
                                AllowedExitCodes: []int32{
                                    7730561243286952435,
                                    3149485240230655415,
                                },
                                ArtifactID: "repellat",
                                Flags: []string{
                                    "laboriosam",
                                },
                            },
                            RpmInstallation: &shared.SoftwareRecipeStepInstallRpm{
                                ArtifactID: "soluta",
                            },
                            ScriptRun: &shared.SoftwareRecipeStepRunScript{
                                AllowedExitCodes: []int32{
                                    8980840374397286997,
                                },
                                Interpreter: "POWERSHELL",
                                Script: "sequi",
                            },
                        },
                        shared.SoftwareRecipeStep{
                            ArchiveExtraction: &shared.SoftwareRecipeStepExtractArchive{
                                ArtifactID: "velit",
                                Destination: "illo",
                                Type: "TAR_XZ",
                            },
                            DpkgInstallation: &shared.SoftwareRecipeStepInstallDpkg{
                                ArtifactID: "iusto",
                            },
                            FileCopy: &shared.SoftwareRecipeStepCopyFile{
                                ArtifactID: "dolorem",
                                Destination: "quaerat",
                                Overwrite: false,
                                Permissions: "nihil",
                            },
                            FileExec: &shared.SoftwareRecipeStepExecFile{
                                AllowedExitCodes: []int32{
                                    6983500922031649356,
                                },
                                Args: []string{
                                    "laudantium",
                                },
                                ArtifactID: "cumque",
                                LocalPath: "eos",
                            },
                            MsiInstallation: &shared.SoftwareRecipeStepInstallMsi{
                                AllowedExitCodes: []int32{
                                    368367004006732208,
                                    2779445853509790904,
                                },
                                ArtifactID: "ut",
                                Flags: []string{
                                    "maiores",
                                },
                            },
                            RpmInstallation: &shared.SoftwareRecipeStepInstallRpm{
                                ArtifactID: "accusamus",
                            },
                            ScriptRun: &shared.SoftwareRecipeStepRunScript{
                                AllowedExitCodes: []int32{
                                    9158175489434425846,
                                },
                                Interpreter: "POWERSHELL",
                                Script: "sunt",
                            },
                        },
                        shared.SoftwareRecipeStep{
                            ArchiveExtraction: &shared.SoftwareRecipeStepExtractArchive{
                                ArtifactID: "fugiat",
                                Destination: "repellat",
                                Type: "TAR",
                            },
                            DpkgInstallation: &shared.SoftwareRecipeStepInstallDpkg{
                                ArtifactID: "alias",
                            },
                            FileCopy: &shared.SoftwareRecipeStepCopyFile{
                                ArtifactID: "est",
                                Destination: "iure",
                                Overwrite: false,
                                Permissions: "quis",
                            },
                            FileExec: &shared.SoftwareRecipeStepExecFile{
                                AllowedExitCodes: []int32{
                                    8048456707693668888,
                                    8482804986149830933,
                                    8169199727241313816,
                                },
                                Args: []string{
                                    "ipsa",
                                    "est",
                                    "natus",
                                },
                                ArtifactID: "quas",
                                LocalPath: "dolor",
                            },
                            MsiInstallation: &shared.SoftwareRecipeStepInstallMsi{
                                AllowedExitCodes: []int32{
                                    4201548361809464114,
                                },
                                ArtifactID: "eum",
                                Flags: []string{
                                    "voluptatem",
                                    "dicta",
                                    "sed",
                                },
                            },
                            RpmInstallation: &shared.SoftwareRecipeStepInstallRpm{
                                ArtifactID: "quibusdam",
                            },
                            ScriptRun: &shared.SoftwareRecipeStepRunScript{
                                AllowedExitCodes: []int32{
                                    2860742136279775158,
                                },
                                Interpreter: "SHELL",
                                Script: "facilis",
                            },
                        },
                    },
                    Version: "consequatur",
                },
                shared.SoftwareRecipe{
                    Artifacts: []shared.SoftwareRecipeArtifact{
                        shared.SoftwareRecipeArtifact{
                            AllowInsecure: true,
                            Gcs: &shared.SoftwareRecipeArtifactGcs{
                                Bucket: "cupiditate",
                                Generation: "ea",
                                Object: "ad",
                            },
                            ID: "est",
                            Remote: &shared.SoftwareRecipeArtifactRemote{
                                Checksum: "aut",
                                URI: "sit",
                            },
                        },
                        shared.SoftwareRecipeArtifact{
                            AllowInsecure: false,
                            Gcs: &shared.SoftwareRecipeArtifactGcs{
                                Bucket: "quos",
                                Generation: "est",
                                Object: "aut",
                            },
                            ID: "reiciendis",
                            Remote: &shared.SoftwareRecipeArtifactRemote{
                                Checksum: "ad",
                                URI: "beatae",
                            },
                        },
                    },
                    DesiredState: "INSTALLED",
                    InstallSteps: []shared.SoftwareRecipeStep{
                        shared.SoftwareRecipeStep{
                            ArchiveExtraction: &shared.SoftwareRecipeStepExtractArchive{
                                ArtifactID: "ut",
                                Destination: "aspernatur",
                                Type: "TAR_LZMA",
                            },
                            DpkgInstallation: &shared.SoftwareRecipeStepInstallDpkg{
                                ArtifactID: "omnis",
                            },
                            FileCopy: &shared.SoftwareRecipeStepCopyFile{
                                ArtifactID: "explicabo",
                                Destination: "ut",
                                Overwrite: false,
                                Permissions: "voluptatibus",
                            },
                            FileExec: &shared.SoftwareRecipeStepExecFile{
                                AllowedExitCodes: []int32{
                                    8821612559708424094,
                                    7367365699305899169,
                                },
                                Args: []string{
                                    "at",
                                    "qui",
                                    "quo",
                                },
                                ArtifactID: "nihil",
                                LocalPath: "adipisci",
                            },
                            MsiInstallation: &shared.SoftwareRecipeStepInstallMsi{
                                AllowedExitCodes: []int32{
                                    3121275403531694500,
                                    4685244290181475938,
                                    2931544158483105982,
                                },
                                ArtifactID: "odio",
                                Flags: []string{
                                    "exercitationem",
                                    "non",
                                },
                            },
                            RpmInstallation: &shared.SoftwareRecipeStepInstallRpm{
                                ArtifactID: "rerum",
                            },
                            ScriptRun: &shared.SoftwareRecipeStepRunScript{
                                AllowedExitCodes: []int32{
                                    458963275543265880,
                                    2975189056811284908,
                                },
                                Interpreter: "SHELL",
                                Script: "qui",
                            },
                        },
                    },
                    Name: "sed",
                    UpdateSteps: []shared.SoftwareRecipeStep{
                        shared.SoftwareRecipeStep{
                            ArchiveExtraction: &shared.SoftwareRecipeStepExtractArchive{
                                ArtifactID: "ex",
                                Destination: "placeat",
                                Type: "TAR_LZMA",
                            },
                            DpkgInstallation: &shared.SoftwareRecipeStepInstallDpkg{
                                ArtifactID: "ipsum",
                            },
                            FileCopy: &shared.SoftwareRecipeStepCopyFile{
                                ArtifactID: "ipsam",
                                Destination: "consequuntur",
                                Overwrite: true,
                                Permissions: "sed",
                            },
                            FileExec: &shared.SoftwareRecipeStepExecFile{
                                AllowedExitCodes: []int32{
                                    2965901311183202146,
                                    4200455192467119335,
                                },
                                Args: []string{
                                    "enim",
                                    "voluptatem",
                                },
                                ArtifactID: "qui",
                                LocalPath: "aliquam",
                            },
                            MsiInstallation: &shared.SoftwareRecipeStepInstallMsi{
                                AllowedExitCodes: []int32{
                                    2167523793923098445,
                                    2323300099458444151,
                                },
                                ArtifactID: "eius",
                                Flags: []string{
                                    "tempore",
                                    "nulla",
                                    "qui",
                                },
                            },
                            RpmInstallation: &shared.SoftwareRecipeStepInstallRpm{
                                ArtifactID: "nam",
                            },
                            ScriptRun: &shared.SoftwareRecipeStepRunScript{
                                AllowedExitCodes: []int32{
                                    6375114522580675724,
                                    2538183736422389712,
                                    3911673990289496854,
                                },
                                Interpreter: "SHELL",
                                Script: "quam",
                            },
                        },
                    },
                    Version: "rerum",
                },
            },
        },
    }
    
    res, err := s.Projects.OsconfigProjectsGuestPoliciesCreate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GuestPolicy != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### projects

* `OsconfigProjectsGuestPoliciesCreate` - Create an OS Config guest policy.
* `OsconfigProjectsGuestPoliciesList` - Get a page of OS Config guest policies.
* `OsconfigProjectsPatchDeploymentsCreate` - Create an OS Config patch deployment.
* `OsconfigProjectsPatchDeploymentsDelete` - Delete an OS Config patch deployment.
* `OsconfigProjectsPatchDeploymentsList` - Get a page of OS Config patch deployments.
* `OsconfigProjectsPatchDeploymentsPatch` - Update an OS Config patch deployment.
* `OsconfigProjectsPatchDeploymentsPause` - Change state of patch deployment to "PAUSED". Patch deployment in paused state doesn't generate patch jobs.
* `OsconfigProjectsPatchDeploymentsResume` - Change state of patch deployment back to "ACTIVE". Patch deployment in active state continues to generate patch jobs.
* `OsconfigProjectsPatchJobsCancel` - Cancel a patch job. The patch job must be active. Canceled patch jobs cannot be restarted.
* `OsconfigProjectsPatchJobsExecute` - Patch VM instances by creating and running a patch job.
* `OsconfigProjectsPatchJobsGet` - Get the patch job. This can be used to track the progress of an ongoing patch job or review the details of completed jobs.
* `OsconfigProjectsPatchJobsInstanceDetailsList` - Get a list of instance details for a given patch job.
* `OsconfigProjectsPatchJobsList` - Get a list of patch jobs.
* `OsconfigProjectsZonesInstancesLookupEffectiveGuestPolicy` - Lookup the effective guest policy that applies to a VM instance. This lookup merges all policies that are assigned to the instance ancestry.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
