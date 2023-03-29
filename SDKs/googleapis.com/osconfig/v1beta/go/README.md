# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/osconfig/v1beta/go
```
<!-- End SDK Installation -->

## SDK Example Usage
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
            Parent: "unde",
        },
        QueryParams: operations.OsconfigProjectsGuestPoliciesCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "porro",
            Alt: "proto",
            Callback: "id",
            Fields: "vero",
            GuestPolicyID: "perspiciatis",
            Key: "nulla",
            OauthToken: "nihil",
            PrettyPrint: false,
            QuotaUser: "fuga",
            UploadType: "facilis",
            UploadProtocol: "eum",
        },
        Request: &shared.GuestPolicyInput{
            Assignment: &shared.Assignment{
                GroupLabels: []shared.AssignmentGroupLabel{
                    shared.AssignmentGroupLabel{
                        Labels: map[string]string{
                            "saepe": "inventore",
                            "sapiente": "enim",
                        },
                    },
                    shared.AssignmentGroupLabel{
                        Labels: map[string]string{
                            "voluptatum": "autem",
                            "vel": "non",
                        },
                    },
                },
                InstanceNamePrefixes: []string{
                    "similique",
                    "reprehenderit",
                },
                Instances: []string{
                    "quo",
                    "quasi",
                    "laboriosam",
                    "dicta",
                },
                OsTypes: []shared.AssignmentOsType{
                    shared.AssignmentOsType{
                        OsArchitecture: "voluptatem",
                        OsShortName: "consequatur",
                        OsVersion: "fugiat",
                    },
                    shared.AssignmentOsType{
                        OsArchitecture: "a",
                        OsShortName: "omnis",
                        OsVersion: "eos",
                    },
                    shared.AssignmentOsType{
                        OsArchitecture: "accusamus",
                        OsShortName: "accusamus",
                        OsVersion: "reiciendis",
                    },
                },
                Zones: []string{
                    "quibusdam",
                    "et",
                },
            },
            Description: "praesentium",
            Etag: "occaecati",
            Name: "dolor",
            PackageRepositories: []shared.PackageRepository{
                shared.PackageRepository{
                    Apt: &shared.AptRepository{
                        ArchiveType: "ARCHIVE_TYPE_UNSPECIFIED",
                        Components: []string{
                            "rerum",
                            "culpa",
                            "qui",
                        },
                        Distribution: "sed",
                        GpgKey: "rerum",
                        URI: "https://jovany.com",
                    },
                    Goo: &shared.GooRepository{
                        Name: "esse",
                        URL: "rem",
                    },
                    Yum: &shared.YumRepository{
                        BaseURL: "voluptatem",
                        DisplayName: "amet",
                        GpgKeys: []string{
                            "id",
                            "blanditiis",
                            "numquam",
                            "similique",
                        },
                        ID: "dolores",
                    },
                    Zypper: &shared.ZypperRepository{
                        BaseURL: "sit",
                        DisplayName: "quia",
                        GpgKeys: []string{
                            "voluptatem",
                            "laborum",
                            "modi",
                        },
                        ID: "et",
                    },
                },
                shared.PackageRepository{
                    Apt: &shared.AptRepository{
                        ArchiveType: "DEB",
                        Components: []string{
                            "ut",
                            "soluta",
                            "qui",
                            "ea",
                        },
                        Distribution: "laborum",
                        GpgKey: "iusto",
                        URI: "https://max.com",
                    },
                    Goo: &shared.GooRepository{
                        Name: "inventore",
                        URL: "ut",
                    },
                    Yum: &shared.YumRepository{
                        BaseURL: "libero",
                        DisplayName: "et",
                        GpgKeys: []string{
                            "ipsum",
                            "non",
                            "ea",
                        },
                        ID: "magni",
                    },
                    Zypper: &shared.ZypperRepository{
                        BaseURL: "placeat",
                        DisplayName: "ipsam",
                        GpgKeys: []string{
                            "commodi",
                            "quia",
                            "similique",
                        },
                        ID: "eaque",
                    },
                },
                shared.PackageRepository{
                    Apt: &shared.AptRepository{
                        ArchiveType: "DEB",
                        Components: []string{
                            "doloribus",
                            "a",
                            "aut",
                        },
                        Distribution: "et",
                        GpgKey: "non",
                        URI: "https://carolyn.org",
                    },
                    Goo: &shared.GooRepository{
                        Name: "et",
                        URL: "culpa",
                    },
                    Yum: &shared.YumRepository{
                        BaseURL: "aliquam",
                        DisplayName: "esse",
                        GpgKeys: []string{
                            "voluptatum",
                            "et",
                        },
                        ID: "fuga",
                    },
                    Zypper: &shared.ZypperRepository{
                        BaseURL: "nesciunt",
                        DisplayName: "laboriosam",
                        GpgKeys: []string{
                            "cum",
                        },
                        ID: "expedita",
                    },
                },
            },
            Packages: []shared.Package{
                shared.Package{
                    DesiredState: "DESIRED_STATE_UNSPECIFIED",
                    Manager: "ZYPPER",
                    Name: "adipisci",
                },
                shared.Package{
                    DesiredState: "REMOVED",
                    Manager: "APT",
                    Name: "distinctio",
                },
            },
            Recipes: []shared.SoftwareRecipe{
                shared.SoftwareRecipe{
                    Artifacts: []shared.SoftwareRecipeArtifact{
                        shared.SoftwareRecipeArtifact{
                            AllowInsecure: false,
                            Gcs: &shared.SoftwareRecipeArtifactGcs{
                                Bucket: "aspernatur",
                                Generation: "fuga",
                                Object: "quo",
                            },
                            ID: "tempore",
                            Remote: &shared.SoftwareRecipeArtifactRemote{
                                Checksum: "explicabo",
                                URI: "https://weston.org",
                            },
                        },
                    },
                    DesiredState: "INSTALLED",
                    InstallSteps: []shared.SoftwareRecipeStep{
                        shared.SoftwareRecipeStep{
                            ArchiveExtraction: &shared.SoftwareRecipeStepExtractArchive{
                                ArtifactID: "reiciendis",
                                Destination: "illo",
                                Type: "TAR_LZMA",
                            },
                            DpkgInstallation: &shared.SoftwareRecipeStepInstallDpkg{
                                ArtifactID: "qui",
                            },
                            FileCopy: &shared.SoftwareRecipeStepCopyFile{
                                ArtifactID: "quod",
                                Destination: "sit",
                                Overwrite: false,
                                Permissions: "eaque",
                            },
                            FileExec: &shared.SoftwareRecipeStepExecFile{
                                AllowedExitCodes: []int{
                                    282807,
                                    979587,
                                },
                                Args: []string{
                                    "ea",
                                },
                                ArtifactID: "exercitationem",
                                LocalPath: "deleniti",
                            },
                            MsiInstallation: &shared.SoftwareRecipeStepInstallMsi{
                                AllowedExitCodes: []int{
                                    688661,
                                },
                                ArtifactID: "voluptatem",
                                Flags: []string{
                                    "esse",
                                    "sint",
                                    "veritatis",
                                    "numquam",
                                },
                            },
                            RpmInstallation: &shared.SoftwareRecipeStepInstallRpm{
                                ArtifactID: "eligendi",
                            },
                            ScriptRun: &shared.SoftwareRecipeStepRunScript{
                                AllowedExitCodes: []int{
                                    566602,
                                    865103,
                                    265389,
                                },
                                Interpreter: "SHELL",
                                Script: "cupiditate",
                            },
                        },
                        shared.SoftwareRecipeStep{
                            ArchiveExtraction: &shared.SoftwareRecipeStepExtractArchive{
                                ArtifactID: "sint",
                                Destination: "explicabo",
                                Type: "ZIP",
                            },
                            DpkgInstallation: &shared.SoftwareRecipeStepInstallDpkg{
                                ArtifactID: "in",
                            },
                            FileCopy: &shared.SoftwareRecipeStepCopyFile{
                                ArtifactID: "vitae",
                                Destination: "non",
                                Overwrite: false,
                                Permissions: "minima",
                            },
                            FileExec: &shared.SoftwareRecipeStepExecFile{
                                AllowedExitCodes: []int{
                                    9356,
                                    667411,
                                },
                                Args: []string{
                                    "magni",
                                    "est",
                                    "porro",
                                    "voluptas",
                                },
                                ArtifactID: "nostrum",
                                LocalPath: "voluptatem",
                            },
                            MsiInstallation: &shared.SoftwareRecipeStepInstallMsi{
                                AllowedExitCodes: []int{
                                    397821,
                                },
                                ArtifactID: "officia",
                                Flags: []string{
                                    "voluptatem",
                                    "dolorem",
                                    "eum",
                                },
                            },
                            RpmInstallation: &shared.SoftwareRecipeStepInstallRpm{
                                ArtifactID: "quis",
                            },
                            ScriptRun: &shared.SoftwareRecipeStepRunScript{
                                AllowedExitCodes: []int{
                                    146441,
                                },
                                Interpreter: "POWERSHELL",
                                Script: "similique",
                            },
                        },
                        shared.SoftwareRecipeStep{
                            ArchiveExtraction: &shared.SoftwareRecipeStepExtractArchive{
                                ArtifactID: "enim",
                                Destination: "nihil",
                                Type: "TAR_XZ",
                            },
                            DpkgInstallation: &shared.SoftwareRecipeStepInstallDpkg{
                                ArtifactID: "quis",
                            },
                            FileCopy: &shared.SoftwareRecipeStepCopyFile{
                                ArtifactID: "sapiente",
                                Destination: "et",
                                Overwrite: false,
                                Permissions: "dolore",
                            },
                            FileExec: &shared.SoftwareRecipeStepExecFile{
                                AllowedExitCodes: []int{
                                    576157,
                                    396098,
                                    592042,
                                    896039,
                                },
                                Args: []string{
                                    "rerum",
                                    "modi",
                                    "necessitatibus",
                                },
                                ArtifactID: "tenetur",
                                LocalPath: "soluta",
                            },
                            MsiInstallation: &shared.SoftwareRecipeStepInstallMsi{
                                AllowedExitCodes: []int{
                                    449198,
                                    846409,
                                },
                                ArtifactID: "reiciendis",
                                Flags: []string{
                                    "fugit",
                                    "ullam",
                                    "voluptas",
                                },
                            },
                            RpmInstallation: &shared.SoftwareRecipeStepInstallRpm{
                                ArtifactID: "vel",
                            },
                            ScriptRun: &shared.SoftwareRecipeStepRunScript{
                                AllowedExitCodes: []int{
                                    396506,
                                    675439,
                                },
                                Interpreter: "POWERSHELL",
                                Script: "magnam",
                            },
                        },
                    },
                    Name: "culpa",
                    UpdateSteps: []shared.SoftwareRecipeStep{
                        shared.SoftwareRecipeStep{
                            ArchiveExtraction: &shared.SoftwareRecipeStepExtractArchive{
                                ArtifactID: "aut",
                                Destination: "delectus",
                                Type: "TAR_LZMA",
                            },
                            DpkgInstallation: &shared.SoftwareRecipeStepInstallDpkg{
                                ArtifactID: "officia",
                            },
                            FileCopy: &shared.SoftwareRecipeStepCopyFile{
                                ArtifactID: "est",
                                Destination: "distinctio",
                                Overwrite: false,
                                Permissions: "et",
                            },
                            FileExec: &shared.SoftwareRecipeStepExecFile{
                                AllowedExitCodes: []int{
                                    956084,
                                    230533,
                                    643990,
                                },
                                Args: []string{
                                    "nihil",
                                    "dolorum",
                                },
                                ArtifactID: "id",
                                LocalPath: "voluptatum",
                            },
                            MsiInstallation: &shared.SoftwareRecipeStepInstallMsi{
                                AllowedExitCodes: []int{
                                    470132,
                                },
                                ArtifactID: "corporis",
                                Flags: []string{
                                    "distinctio",
                                    "quis",
                                    "nostrum",
                                },
                            },
                            RpmInstallation: &shared.SoftwareRecipeStepInstallRpm{
                                ArtifactID: "eum",
                            },
                            ScriptRun: &shared.SoftwareRecipeStepRunScript{
                                AllowedExitCodes: []int{
                                    749170,
                                    428769,
                                    878453,
                                },
                                Interpreter: "INTERPRETER_UNSPECIFIED",
                                Script: "aut",
                            },
                        },
                        shared.SoftwareRecipeStep{
                            ArchiveExtraction: &shared.SoftwareRecipeStepExtractArchive{
                                ArtifactID: "ullam",
                                Destination: "explicabo",
                                Type: "TAR_BZIP",
                            },
                            DpkgInstallation: &shared.SoftwareRecipeStepInstallDpkg{
                                ArtifactID: "ex",
                            },
                            FileCopy: &shared.SoftwareRecipeStepCopyFile{
                                ArtifactID: "deserunt",
                                Destination: "omnis",
                                Overwrite: false,
                                Permissions: "in",
                            },
                            FileExec: &shared.SoftwareRecipeStepExecFile{
                                AllowedExitCodes: []int{
                                    653201,
                                },
                                Args: []string{
                                    "et",
                                    "voluptatem",
                                    "et",
                                    "modi",
                                },
                                ArtifactID: "eveniet",
                                LocalPath: "qui",
                            },
                            MsiInstallation: &shared.SoftwareRecipeStepInstallMsi{
                                AllowedExitCodes: []int{
                                    97260,
                                    435865,
                                },
                                ArtifactID: "maiores",
                                Flags: []string{
                                    "quaerat",
                                    "aut",
                                    "sed",
                                    "nihil",
                                },
                            },
                            RpmInstallation: &shared.SoftwareRecipeStepInstallRpm{
                                ArtifactID: "ducimus",
                            },
                            ScriptRun: &shared.SoftwareRecipeStepRunScript{
                                AllowedExitCodes: []int{
                                    99569,
                                },
                                Interpreter: "POWERSHELL",
                                Script: "aliquid",
                            },
                        },
                    },
                    Version: "quo",
                },
                shared.SoftwareRecipe{
                    Artifacts: []shared.SoftwareRecipeArtifact{
                        shared.SoftwareRecipeArtifact{
                            AllowInsecure: false,
                            Gcs: &shared.SoftwareRecipeArtifactGcs{
                                Bucket: "repellat",
                                Generation: "voluptas",
                                Object: "voluptatem",
                            },
                            ID: "et",
                            Remote: &shared.SoftwareRecipeArtifactRemote{
                                Checksum: "accusamus",
                                URI: "http://carroll.name",
                            },
                        },
                        shared.SoftwareRecipeArtifact{
                            AllowInsecure: false,
                            Gcs: &shared.SoftwareRecipeArtifactGcs{
                                Bucket: "et",
                                Generation: "dolorem",
                                Object: "quia",
                            },
                            ID: "omnis",
                            Remote: &shared.SoftwareRecipeArtifactRemote{
                                Checksum: "pariatur",
                                URI: "https://raegan.info",
                            },
                        },
                    },
                    DesiredState: "UPDATED",
                    InstallSteps: []shared.SoftwareRecipeStep{
                        shared.SoftwareRecipeStep{
                            ArchiveExtraction: &shared.SoftwareRecipeStepExtractArchive{
                                ArtifactID: "voluptate",
                                Destination: "aperiam",
                                Type: "ARCHIVE_TYPE_UNSPECIFIED",
                            },
                            DpkgInstallation: &shared.SoftwareRecipeStepInstallDpkg{
                                ArtifactID: "voluptatibus",
                            },
                            FileCopy: &shared.SoftwareRecipeStepCopyFile{
                                ArtifactID: "optio",
                                Destination: "quis",
                                Overwrite: false,
                                Permissions: "qui",
                            },
                            FileExec: &shared.SoftwareRecipeStepExecFile{
                                AllowedExitCodes: []int{
                                    722056,
                                    50588,
                                },
                                Args: []string{
                                    "consequatur",
                                    "aut",
                                    "sit",
                                    "vero",
                                },
                                ArtifactID: "incidunt",
                                LocalPath: "aut",
                            },
                            MsiInstallation: &shared.SoftwareRecipeStepInstallMsi{
                                AllowedExitCodes: []int{
                                    359978,
                                    944124,
                                    729991,
                                    749999,
                                },
                                ArtifactID: "ipsum",
                                Flags: []string{
                                    "occaecati",
                                    "corrupti",
                                },
                            },
                            RpmInstallation: &shared.SoftwareRecipeStepInstallRpm{
                                ArtifactID: "illo",
                            },
                            ScriptRun: &shared.SoftwareRecipeStepRunScript{
                                AllowedExitCodes: []int{
                                    199996,
                                    179490,
                                },
                                Interpreter: "INTERPRETER_UNSPECIFIED",
                                Script: "ipsum",
                            },
                        },
                    },
                    Name: "autem",
                    UpdateSteps: []shared.SoftwareRecipeStep{
                        shared.SoftwareRecipeStep{
                            ArchiveExtraction: &shared.SoftwareRecipeStepExtractArchive{
                                ArtifactID: "modi",
                                Destination: "officiis",
                                Type: "TAR_GZIP",
                            },
                            DpkgInstallation: &shared.SoftwareRecipeStepInstallDpkg{
                                ArtifactID: "rerum",
                            },
                            FileCopy: &shared.SoftwareRecipeStepCopyFile{
                                ArtifactID: "non",
                                Destination: "est",
                                Overwrite: false,
                                Permissions: "nihil",
                            },
                            FileExec: &shared.SoftwareRecipeStepExecFile{
                                AllowedExitCodes: []int{
                                    31838,
                                    783645,
                                    164694,
                                },
                                Args: []string{
                                    "dolorum",
                                    "ab",
                                    "in",
                                },
                                ArtifactID: "cumque",
                                LocalPath: "labore",
                            },
                            MsiInstallation: &shared.SoftwareRecipeStepInstallMsi{
                                AllowedExitCodes: []int{
                                    934214,
                                    267262,
                                    613966,
                                    679091,
                                },
                                ArtifactID: "sed",
                                Flags: []string{
                                    "officia",
                                    "placeat",
                                    "qui",
                                    "delectus",
                                },
                            },
                            RpmInstallation: &shared.SoftwareRecipeStepInstallRpm{
                                ArtifactID: "enim",
                            },
                            ScriptRun: &shared.SoftwareRecipeStepRunScript{
                                AllowedExitCodes: []int{
                                    398221,
                                    212390,
                                    209843,
                                },
                                Interpreter: "INTERPRETER_UNSPECIFIED",
                                Script: "amet",
                            },
                        },
                        shared.SoftwareRecipeStep{
                            ArchiveExtraction: &shared.SoftwareRecipeStepExtractArchive{
                                ArtifactID: "eius",
                                Destination: "rerum",
                                Type: "TAR_BZIP",
                            },
                            DpkgInstallation: &shared.SoftwareRecipeStepInstallDpkg{
                                ArtifactID: "quod",
                            },
                            FileCopy: &shared.SoftwareRecipeStepCopyFile{
                                ArtifactID: "qui",
                                Destination: "quos",
                                Overwrite: false,
                                Permissions: "ut",
                            },
                            FileExec: &shared.SoftwareRecipeStepExecFile{
                                AllowedExitCodes: []int{
                                    680545,
                                },
                                Args: []string{
                                    "dicta",
                                    "inventore",
                                },
                                ArtifactID: "inventore",
                                LocalPath: "iusto",
                            },
                            MsiInstallation: &shared.SoftwareRecipeStepInstallMsi{
                                AllowedExitCodes: []int{
                                    311796,
                                    881005,
                                },
                                ArtifactID: "optio",
                                Flags: []string{
                                    "vel",
                                    "et",
                                    "dolor",
                                    "perspiciatis",
                                },
                            },
                            RpmInstallation: &shared.SoftwareRecipeStepInstallRpm{
                                ArtifactID: "accusantium",
                            },
                            ScriptRun: &shared.SoftwareRecipeStepRunScript{
                                AllowedExitCodes: []int{
                                    67249,
                                    743835,
                                    679393,
                                    478596,
                                },
                                Interpreter: "SHELL",
                                Script: "cum",
                            },
                        },
                    },
                    Version: "sed",
                },
                shared.SoftwareRecipe{
                    Artifacts: []shared.SoftwareRecipeArtifact{
                        shared.SoftwareRecipeArtifact{
                            AllowInsecure: false,
                            Gcs: &shared.SoftwareRecipeArtifactGcs{
                                Bucket: "eveniet",
                                Generation: "quo",
                                Object: "doloribus",
                            },
                            ID: "totam",
                            Remote: &shared.SoftwareRecipeArtifactRemote{
                                Checksum: "eius",
                                URI: "http://makenna.org",
                            },
                        },
                        shared.SoftwareRecipeArtifact{
                            AllowInsecure: false,
                            Gcs: &shared.SoftwareRecipeArtifactGcs{
                                Bucket: "voluptatem",
                                Generation: "eos",
                                Object: "voluptatem",
                            },
                            ID: "incidunt",
                            Remote: &shared.SoftwareRecipeArtifactRemote{
                                Checksum: "possimus",
                                URI: "https://emmet.org",
                            },
                        },
                        shared.SoftwareRecipeArtifact{
                            AllowInsecure: false,
                            Gcs: &shared.SoftwareRecipeArtifactGcs{
                                Bucket: "eum",
                                Generation: "facilis",
                                Object: "officia",
                            },
                            ID: "quia",
                            Remote: &shared.SoftwareRecipeArtifactRemote{
                                Checksum: "eum",
                                URI: "https://logan.com",
                            },
                        },
                    },
                    DesiredState: "REMOVED",
                    InstallSteps: []shared.SoftwareRecipeStep{
                        shared.SoftwareRecipeStep{
                            ArchiveExtraction: &shared.SoftwareRecipeStepExtractArchive{
                                ArtifactID: "ad",
                                Destination: "nihil",
                                Type: "TAR_XZ",
                            },
                            DpkgInstallation: &shared.SoftwareRecipeStepInstallDpkg{
                                ArtifactID: "rerum",
                            },
                            FileCopy: &shared.SoftwareRecipeStepCopyFile{
                                ArtifactID: "amet",
                                Destination: "soluta",
                                Overwrite: false,
                                Permissions: "tenetur",
                            },
                            FileExec: &shared.SoftwareRecipeStepExecFile{
                                AllowedExitCodes: []int{
                                    687488,
                                    483409,
                                },
                                Args: []string{
                                    "temporibus",
                                },
                                ArtifactID: "rerum",
                                LocalPath: "incidunt",
                            },
                            MsiInstallation: &shared.SoftwareRecipeStepInstallMsi{
                                AllowedExitCodes: []int{
                                    880298,
                                    253941,
                                    313692,
                                },
                                ArtifactID: "numquam",
                                Flags: []string{
                                    "occaecati",
                                    "rem",
                                    "accusantium",
                                    "quo",
                                },
                            },
                            RpmInstallation: &shared.SoftwareRecipeStepInstallRpm{
                                ArtifactID: "quia",
                            },
                            ScriptRun: &shared.SoftwareRecipeStepRunScript{
                                AllowedExitCodes: []int{
                                    424685,
                                },
                                Interpreter: "POWERSHELL",
                                Script: "autem",
                            },
                        },
                        shared.SoftwareRecipeStep{
                            ArchiveExtraction: &shared.SoftwareRecipeStepExtractArchive{
                                ArtifactID: "facilis",
                                Destination: "laudantium",
                                Type: "TAR",
                            },
                            DpkgInstallation: &shared.SoftwareRecipeStepInstallDpkg{
                                ArtifactID: "minima",
                            },
                            FileCopy: &shared.SoftwareRecipeStepCopyFile{
                                ArtifactID: "amet",
                                Destination: "officia",
                                Overwrite: false,
                                Permissions: "consequatur",
                            },
                            FileExec: &shared.SoftwareRecipeStepExecFile{
                                AllowedExitCodes: []int{
                                    747080,
                                    117531,
                                    674848,
                                    517379,
                                },
                                Args: []string{
                                    "magni",
                                    "quia",
                                },
                                ArtifactID: "porro",
                                LocalPath: "nihil",
                            },
                            MsiInstallation: &shared.SoftwareRecipeStepInstallMsi{
                                AllowedExitCodes: []int{
                                    463150,
                                    565421,
                                },
                                ArtifactID: "voluptas",
                                Flags: []string{
                                    "quia",
                                },
                            },
                            RpmInstallation: &shared.SoftwareRecipeStepInstallRpm{
                                ArtifactID: "ratione",
                            },
                            ScriptRun: &shared.SoftwareRecipeStepRunScript{
                                AllowedExitCodes: []int{
                                    488056,
                                },
                                Interpreter: "INTERPRETER_UNSPECIFIED",
                                Script: "ex",
                            },
                        },
                    },
                    Name: "quisquam",
                    UpdateSteps: []shared.SoftwareRecipeStep{
                        shared.SoftwareRecipeStep{
                            ArchiveExtraction: &shared.SoftwareRecipeStepExtractArchive{
                                ArtifactID: "doloremque",
                                Destination: "voluptas",
                                Type: "TAR_XZ",
                            },
                            DpkgInstallation: &shared.SoftwareRecipeStepInstallDpkg{
                                ArtifactID: "placeat",
                            },
                            FileCopy: &shared.SoftwareRecipeStepCopyFile{
                                ArtifactID: "explicabo",
                                Destination: "et",
                                Overwrite: false,
                                Permissions: "eius",
                            },
                            FileExec: &shared.SoftwareRecipeStepExecFile{
                                AllowedExitCodes: []int{
                                    749255,
                                },
                                Args: []string{
                                    "minus",
                                    "qui",
                                    "quae",
                                },
                                ArtifactID: "sapiente",
                                LocalPath: "non",
                            },
                            MsiInstallation: &shared.SoftwareRecipeStepInstallMsi{
                                AllowedExitCodes: []int{
                                    286915,
                                    240829,
                                },
                                ArtifactID: "cum",
                                Flags: []string{
                                    "veritatis",
                                },
                            },
                            RpmInstallation: &shared.SoftwareRecipeStepInstallRpm{
                                ArtifactID: "sit",
                            },
                            ScriptRun: &shared.SoftwareRecipeStepRunScript{
                                AllowedExitCodes: []int{
                                    929530,
                                    9240,
                                    669917,
                                },
                                Interpreter: "POWERSHELL",
                                Script: "repellendus",
                            },
                        },
                        shared.SoftwareRecipeStep{
                            ArchiveExtraction: &shared.SoftwareRecipeStepExtractArchive{
                                ArtifactID: "maiores",
                                Destination: "veniam",
                                Type: "TAR_LZMA",
                            },
                            DpkgInstallation: &shared.SoftwareRecipeStepInstallDpkg{
                                ArtifactID: "officia",
                            },
                            FileCopy: &shared.SoftwareRecipeStepCopyFile{
                                ArtifactID: "sit",
                                Destination: "veritatis",
                                Overwrite: false,
                                Permissions: "excepturi",
                            },
                            FileExec: &shared.SoftwareRecipeStepExecFile{
                                AllowedExitCodes: []int{
                                    580447,
                                    977496,
                                },
                                Args: []string{
                                    "debitis",
                                    "est",
                                    "laboriosam",
                                    "eius",
                                },
                                ArtifactID: "sapiente",
                                LocalPath: "blanditiis",
                            },
                            MsiInstallation: &shared.SoftwareRecipeStepInstallMsi{
                                AllowedExitCodes: []int{
                                    878870,
                                },
                                ArtifactID: "hic",
                                Flags: []string{
                                    "earum",
                                    "porro",
                                },
                            },
                            RpmInstallation: &shared.SoftwareRecipeStepInstallRpm{
                                ArtifactID: "et",
                            },
                            ScriptRun: &shared.SoftwareRecipeStepRunScript{
                                AllowedExitCodes: []int{
                                    630448,
                                    708548,
                                },
                                Interpreter: "POWERSHELL",
                                Script: "et",
                            },
                        },
                        shared.SoftwareRecipeStep{
                            ArchiveExtraction: &shared.SoftwareRecipeStepExtractArchive{
                                ArtifactID: "nostrum",
                                Destination: "nulla",
                                Type: "TAR_XZ",
                            },
                            DpkgInstallation: &shared.SoftwareRecipeStepInstallDpkg{
                                ArtifactID: "adipisci",
                            },
                            FileCopy: &shared.SoftwareRecipeStepCopyFile{
                                ArtifactID: "et",
                                Destination: "est",
                                Overwrite: false,
                                Permissions: "perferendis",
                            },
                            FileExec: &shared.SoftwareRecipeStepExecFile{
                                AllowedExitCodes: []int{
                                    347233,
                                    862310,
                                    148141,
                                    780427,
                                },
                                Args: []string{
                                    "maiores",
                                    "deleniti",
                                    "facere",
                                    "dolores",
                                },
                                ArtifactID: "consequatur",
                                LocalPath: "rerum",
                            },
                            MsiInstallation: &shared.SoftwareRecipeStepInstallMsi{
                                AllowedExitCodes: []int{
                                    368584,
                                    410492,
                                },
                                ArtifactID: "eos",
                                Flags: []string{
                                    "qui",
                                    "ullam",
                                },
                            },
                            RpmInstallation: &shared.SoftwareRecipeStepInstallRpm{
                                ArtifactID: "consectetur",
                            },
                            ScriptRun: &shared.SoftwareRecipeStepRunScript{
                                AllowedExitCodes: []int{
                                    511319,
                                    120657,
                                },
                                Interpreter: "INTERPRETER_UNSPECIFIED",
                                Script: "voluptatibus",
                            },
                        },
                        shared.SoftwareRecipeStep{
                            ArchiveExtraction: &shared.SoftwareRecipeStepExtractArchive{
                                ArtifactID: "aspernatur",
                                Destination: "voluptate",
                                Type: "ZIP",
                            },
                            DpkgInstallation: &shared.SoftwareRecipeStepInstallDpkg{
                                ArtifactID: "similique",
                            },
                            FileCopy: &shared.SoftwareRecipeStepCopyFile{
                                ArtifactID: "aut",
                                Destination: "nisi",
                                Overwrite: false,
                                Permissions: "sapiente",
                            },
                            FileExec: &shared.SoftwareRecipeStepExecFile{
                                AllowedExitCodes: []int{
                                    906556,
                                    411372,
                                    774048,
                                    359271,
                                },
                                Args: []string{
                                    "in",
                                    "vitae",
                                },
                                ArtifactID: "corporis",
                                LocalPath: "voluptate",
                            },
                            MsiInstallation: &shared.SoftwareRecipeStepInstallMsi{
                                AllowedExitCodes: []int{
                                    232234,
                                    926213,
                                    132487,
                                    325310,
                                },
                                ArtifactID: "illo",
                                Flags: []string{
                                    "est",
                                    "perferendis",
                                    "aut",
                                    "provident",
                                },
                            },
                            RpmInstallation: &shared.SoftwareRecipeStepInstallRpm{
                                ArtifactID: "assumenda",
                            },
                            ScriptRun: &shared.SoftwareRecipeStepRunScript{
                                AllowedExitCodes: []int{
                                    146946,
                                    882860,
                                },
                                Interpreter: "INTERPRETER_UNSPECIFIED",
                                Script: "magnam",
                            },
                        },
                    },
                    Version: "sunt",
                },
                shared.SoftwareRecipe{
                    Artifacts: []shared.SoftwareRecipeArtifact{
                        shared.SoftwareRecipeArtifact{
                            AllowInsecure: false,
                            Gcs: &shared.SoftwareRecipeArtifactGcs{
                                Bucket: "tempore",
                                Generation: "consequatur",
                                Object: "dolore",
                            },
                            ID: "et",
                            Remote: &shared.SoftwareRecipeArtifactRemote{
                                Checksum: "quam",
                                URI: "https://keagan.net",
                            },
                        },
                        shared.SoftwareRecipeArtifact{
                            AllowInsecure: false,
                            Gcs: &shared.SoftwareRecipeArtifactGcs{
                                Bucket: "eos",
                                Generation: "vel",
                                Object: "qui",
                            },
                            ID: "aspernatur",
                            Remote: &shared.SoftwareRecipeArtifactRemote{
                                Checksum: "enim",
                                URI: "http://brenden.name",
                            },
                        },
                        shared.SoftwareRecipeArtifact{
                            AllowInsecure: false,
                            Gcs: &shared.SoftwareRecipeArtifactGcs{
                                Bucket: "illo",
                                Generation: "voluptatum",
                                Object: "corporis",
                            },
                            ID: "corrupti",
                            Remote: &shared.SoftwareRecipeArtifactRemote{
                                Checksum: "voluptatem",
                                URI: "http://jackson.name",
                            },
                        },
                    },
                    DesiredState: "UPDATED",
                    InstallSteps: []shared.SoftwareRecipeStep{
                        shared.SoftwareRecipeStep{
                            ArchiveExtraction: &shared.SoftwareRecipeStepExtractArchive{
                                ArtifactID: "optio",
                                Destination: "at",
                                Type: "TAR",
                            },
                            DpkgInstallation: &shared.SoftwareRecipeStepInstallDpkg{
                                ArtifactID: "et",
                            },
                            FileCopy: &shared.SoftwareRecipeStepCopyFile{
                                ArtifactID: "vel",
                                Destination: "dolorem",
                                Overwrite: false,
                                Permissions: "sit",
                            },
                            FileExec: &shared.SoftwareRecipeStepExecFile{
                                AllowedExitCodes: []int{
                                    788546,
                                    86377,
                                    56848,
                                },
                                Args: []string{
                                    "optio",
                                    "quia",
                                    "omnis",
                                },
                                ArtifactID: "nulla",
                                LocalPath: "omnis",
                            },
                            MsiInstallation: &shared.SoftwareRecipeStepInstallMsi{
                                AllowedExitCodes: []int{
                                    259422,
                                    178367,
                                    373813,
                                },
                                ArtifactID: "quasi",
                                Flags: []string{
                                    "aut",
                                    "enim",
                                    "saepe",
                                },
                            },
                            RpmInstallation: &shared.SoftwareRecipeStepInstallRpm{
                                ArtifactID: "quis",
                            },
                            ScriptRun: &shared.SoftwareRecipeStepRunScript{
                                AllowedExitCodes: []int{
                                    197054,
                                },
                                Interpreter: "POWERSHELL",
                                Script: "praesentium",
                            },
                        },
                        shared.SoftwareRecipeStep{
                            ArchiveExtraction: &shared.SoftwareRecipeStepExtractArchive{
                                ArtifactID: "molestiae",
                                Destination: "quae",
                                Type: "TAR_XZ",
                            },
                            DpkgInstallation: &shared.SoftwareRecipeStepInstallDpkg{
                                ArtifactID: "et",
                            },
                            FileCopy: &shared.SoftwareRecipeStepCopyFile{
                                ArtifactID: "quos",
                                Destination: "beatae",
                                Overwrite: false,
                                Permissions: "totam",
                            },
                            FileExec: &shared.SoftwareRecipeStepExecFile{
                                AllowedExitCodes: []int{
                                    882710,
                                    306810,
                                    488410,
                                },
                                Args: []string{
                                    "esse",
                                    "a",
                                    "quia",
                                },
                                ArtifactID: "facilis",
                                LocalPath: "voluptatum",
                            },
                            MsiInstallation: &shared.SoftwareRecipeStepInstallMsi{
                                AllowedExitCodes: []int{
                                    783648,
                                },
                                ArtifactID: "et",
                                Flags: []string{
                                    "molestias",
                                    "nesciunt",
                                    "sed",
                                },
                            },
                            RpmInstallation: &shared.SoftwareRecipeStepInstallRpm{
                                ArtifactID: "qui",
                            },
                            ScriptRun: &shared.SoftwareRecipeStepRunScript{
                                AllowedExitCodes: []int{
                                    649463,
                                    277596,
                                    539224,
                                },
                                Interpreter: "INTERPRETER_UNSPECIFIED",
                                Script: "voluptas",
                            },
                        },
                    },
                    Name: "reprehenderit",
                    UpdateSteps: []shared.SoftwareRecipeStep{
                        shared.SoftwareRecipeStep{
                            ArchiveExtraction: &shared.SoftwareRecipeStepExtractArchive{
                                ArtifactID: "a",
                                Destination: "nesciunt",
                                Type: "TAR",
                            },
                            DpkgInstallation: &shared.SoftwareRecipeStepInstallDpkg{
                                ArtifactID: "magni",
                            },
                            FileCopy: &shared.SoftwareRecipeStepCopyFile{
                                ArtifactID: "et",
                                Destination: "culpa",
                                Overwrite: false,
                                Permissions: "perspiciatis",
                            },
                            FileExec: &shared.SoftwareRecipeStepExecFile{
                                AllowedExitCodes: []int{
                                    456911,
                                },
                                Args: []string{
                                    "aut",
                                    "vitae",
                                    "praesentium",
                                    "et",
                                },
                                ArtifactID: "est",
                                LocalPath: "debitis",
                            },
                            MsiInstallation: &shared.SoftwareRecipeStepInstallMsi{
                                AllowedExitCodes: []int{
                                    93459,
                                    904045,
                                },
                                ArtifactID: "molestiae",
                                Flags: []string{
                                    "rem",
                                    "cumque",
                                    "culpa",
                                },
                            },
                            RpmInstallation: &shared.SoftwareRecipeStepInstallRpm{
                                ArtifactID: "voluptas",
                            },
                            ScriptRun: &shared.SoftwareRecipeStepRunScript{
                                AllowedExitCodes: []int{
                                    756779,
                                    27069,
                                    636061,
                                },
                                Interpreter: "POWERSHELL",
                                Script: "labore",
                            },
                        },
                    },
                    Version: "voluptas",
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

<!-- Start SDK Available Operations -->
## SDK Available Operations


### Projects

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
