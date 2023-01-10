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
            Parent: "nesciunt",
        },
        QueryParams: operations.OsconfigProjectsGuestPoliciesCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "doloremque",
            Alt: "json",
            Callback: "dolor",
            Fields: "accusantium",
            GuestPolicyID: "repellat",
            Key: "dolores",
            OauthToken: "sed",
            PrettyPrint: false,
            QuotaUser: "modi",
            UploadType: "voluptas",
            UploadProtocol: "rerum",
        },
        Request: &shared.GuestPolicyInput{
            Assignment: &shared.Assignment{
                GroupLabels: []shared.AssignmentGroupLabel{
                    shared.AssignmentGroupLabel{
                        Labels: map[string]string{
                            "quos": "voluptas",
                            "eos": "deserunt",
                        },
                    },
                    shared.AssignmentGroupLabel{
                        Labels: map[string]string{
                            "laboriosam": "adipisci",
                            "porro": "enim",
                        },
                    },
                },
                InstanceNamePrefixes: []string{
                    "consectetur",
                    "veniam",
                    "et",
                },
                Instances: []string{
                    "consequatur",
                    "sed",
                    "unde",
                },
                OsTypes: []shared.AssignmentOsType{
                    shared.AssignmentOsType{
                        OsArchitecture: "aut",
                        OsShortName: "eveniet",
                        OsVersion: "eaque",
                    },
                },
                Zones: []string{
                    "id",
                },
            },
            Description: "officiis",
            Etag: "cum",
            Name: "fugit",
            PackageRepositories: []shared.PackageRepository{
                shared.PackageRepository{
                    Apt: &shared.AptRepository{
                        ArchiveType: "ARCHIVE_TYPE_UNSPECIFIED",
                        Components: []string{
                            "esse",
                        },
                        Distribution: "ea",
                        GpgKey: "et",
                        URI: "est",
                    },
                    Goo: &shared.GooRepository{
                        Name: "doloremque",
                        URL: "culpa",
                    },
                    Yum: &shared.YumRepository{
                        BaseURL: "omnis",
                        DisplayName: "rerum",
                        GpgKeys: []string{
                            "quidem",
                        },
                        ID: "distinctio",
                    },
                    Zypper: &shared.ZypperRepository{
                        BaseURL: "quia",
                        DisplayName: "et",
                        GpgKeys: []string{
                            "omnis",
                        },
                        ID: "at",
                    },
                },
                shared.PackageRepository{
                    Apt: &shared.AptRepository{
                        ArchiveType: "DEB_SRC",
                        Components: []string{
                            "nobis",
                            "cum",
                            "at",
                        },
                        Distribution: "fugit",
                        GpgKey: "saepe",
                        URI: "nesciunt",
                    },
                    Goo: &shared.GooRepository{
                        Name: "sit",
                        URL: "sequi",
                    },
                    Yum: &shared.YumRepository{
                        BaseURL: "ut",
                        DisplayName: "ea",
                        GpgKeys: []string{
                            "dolorem",
                            "occaecati",
                            "enim",
                        },
                        ID: "expedita",
                    },
                    Zypper: &shared.ZypperRepository{
                        BaseURL: "nihil",
                        DisplayName: "ut",
                        GpgKeys: []string{
                            "ducimus",
                            "quas",
                        },
                        ID: "error",
                    },
                },
                shared.PackageRepository{
                    Apt: &shared.AptRepository{
                        ArchiveType: "DEB_SRC",
                        Components: []string{
                            "nisi",
                            "perspiciatis",
                            "reiciendis",
                        },
                        Distribution: "eveniet",
                        GpgKey: "ipsa",
                        URI: "at",
                    },
                    Goo: &shared.GooRepository{
                        Name: "in",
                        URL: "exercitationem",
                    },
                    Yum: &shared.YumRepository{
                        BaseURL: "autem",
                        DisplayName: "quasi",
                        GpgKeys: []string{
                            "quis",
                        },
                        ID: "assumenda",
                    },
                    Zypper: &shared.ZypperRepository{
                        BaseURL: "praesentium",
                        DisplayName: "consequatur",
                        GpgKeys: []string{
                            "culpa",
                            "non",
                        },
                        ID: "laborum",
                    },
                },
            },
            Packages: []shared.Package{
                shared.Package{
                    DesiredState: "INSTALLED",
                    Manager: "ANY",
                    Name: "exercitationem",
                },
            },
            Recipes: []shared.SoftwareRecipe{
                shared.SoftwareRecipe{
                    Artifacts: []shared.SoftwareRecipeArtifact{
                        shared.SoftwareRecipeArtifact{
                            AllowInsecure: false,
                            Gcs: &shared.SoftwareRecipeArtifactGcs{
                                Bucket: "corporis",
                                Generation: "repudiandae",
                                Object: "quia",
                            },
                            ID: "dolorem",
                            Remote: &shared.SoftwareRecipeArtifactRemote{
                                Checksum: "omnis",
                                URI: "cumque",
                            },
                        },
                    },
                    DesiredState: "REMOVED",
                    InstallSteps: []shared.SoftwareRecipeStep{
                        shared.SoftwareRecipeStep{
                            ArchiveExtraction: &shared.SoftwareRecipeStepExtractArchive{
                                ArtifactID: "ipsam",
                                Destination: "quia",
                                Type: "TAR_BZIP",
                            },
                            DpkgInstallation: &shared.SoftwareRecipeStepInstallDpkg{
                                ArtifactID: "placeat",
                            },
                            FileCopy: &shared.SoftwareRecipeStepCopyFile{
                                ArtifactID: "dolores",
                                Destination: "sed",
                                Overwrite: true,
                                Permissions: "vel",
                            },
                            FileExec: &shared.SoftwareRecipeStepExecFile{
                                AllowedExitCodes: []int32{
                                    9134721168044289150,
                                    8287065599722341482,
                                },
                                Args: []string{
                                    "itaque",
                                },
                                ArtifactID: "dicta",
                                LocalPath: "eveniet",
                            },
                            MsiInstallation: &shared.SoftwareRecipeStepInstallMsi{
                                AllowedExitCodes: []int32{
                                    690112705371468465,
                                    4867558918095733630,
                                },
                                ArtifactID: "sint",
                                Flags: []string{
                                    "magnam",
                                },
                            },
                            RpmInstallation: &shared.SoftwareRecipeStepInstallRpm{
                                ArtifactID: "totam",
                            },
                            ScriptRun: &shared.SoftwareRecipeStepRunScript{
                                AllowedExitCodes: []int32{
                                    754219091083576970,
                                },
                                Interpreter: "INTERPRETER_UNSPECIFIED",
                                Script: "id",
                            },
                        },
                        shared.SoftwareRecipeStep{
                            ArchiveExtraction: &shared.SoftwareRecipeStepExtractArchive{
                                ArtifactID: "dolorem",
                                Destination: "optio",
                                Type: "TAR_LZMA",
                            },
                            DpkgInstallation: &shared.SoftwareRecipeStepInstallDpkg{
                                ArtifactID: "deserunt",
                            },
                            FileCopy: &shared.SoftwareRecipeStepCopyFile{
                                ArtifactID: "qui",
                                Destination: "tempore",
                                Overwrite: false,
                                Permissions: "nam",
                            },
                            FileExec: &shared.SoftwareRecipeStepExecFile{
                                AllowedExitCodes: []int32{
                                    8793209053376710740,
                                },
                                Args: []string{
                                    "culpa",
                                },
                                ArtifactID: "et",
                                LocalPath: "ipsam",
                            },
                            MsiInstallation: &shared.SoftwareRecipeStepInstallMsi{
                                AllowedExitCodes: []int32{
                                    5307257071466976304,
                                    7731894160449095532,
                                },
                                ArtifactID: "non",
                                Flags: []string{
                                    "illo",
                                },
                            },
                            RpmInstallation: &shared.SoftwareRecipeStepInstallRpm{
                                ArtifactID: "est",
                            },
                            ScriptRun: &shared.SoftwareRecipeStepRunScript{
                                AllowedExitCodes: []int32{
                                    7311567196592526190,
                                    7065331002350441844,
                                },
                                Interpreter: "POWERSHELL",
                                Script: "ut",
                            },
                        },
                        shared.SoftwareRecipeStep{
                            ArchiveExtraction: &shared.SoftwareRecipeStepExtractArchive{
                                ArtifactID: "soluta",
                                Destination: "officiis",
                                Type: "TAR_GZIP",
                            },
                            DpkgInstallation: &shared.SoftwareRecipeStepInstallDpkg{
                                ArtifactID: "quia",
                            },
                            FileCopy: &shared.SoftwareRecipeStepCopyFile{
                                ArtifactID: "aut",
                                Destination: "soluta",
                                Overwrite: false,
                                Permissions: "a",
                            },
                            FileExec: &shared.SoftwareRecipeStepExecFile{
                                AllowedExitCodes: []int32{
                                    7548634123433902254,
                                    9163379974432239274,
                                    4567328112829630430,
                                },
                                Args: []string{
                                    "molestiae",
                                    "eos",
                                    "sit",
                                },
                                ArtifactID: "nisi",
                                LocalPath: "necessitatibus",
                            },
                            MsiInstallation: &shared.SoftwareRecipeStepInstallMsi{
                                AllowedExitCodes: []int32{
                                    6868700370850489401,
                                    1909886773700121370,
                                    7494288104748988191,
                                },
                                ArtifactID: "veniam",
                                Flags: []string{
                                    "fuga",
                                    "quis",
                                    "fugiat",
                                },
                            },
                            RpmInstallation: &shared.SoftwareRecipeStepInstallRpm{
                                ArtifactID: "aliquam",
                            },
                            ScriptRun: &shared.SoftwareRecipeStepRunScript{
                                AllowedExitCodes: []int32{
                                    8905429026475596149,
                                },
                                Interpreter: "POWERSHELL",
                                Script: "doloribus",
                            },
                        },
                    },
                    Name: "hic",
                    UpdateSteps: []shared.SoftwareRecipeStep{
                        shared.SoftwareRecipeStep{
                            ArchiveExtraction: &shared.SoftwareRecipeStepExtractArchive{
                                ArtifactID: "vel",
                                Destination: "quidem",
                                Type: "TAR_XZ",
                            },
                            DpkgInstallation: &shared.SoftwareRecipeStepInstallDpkg{
                                ArtifactID: "rerum",
                            },
                            FileCopy: &shared.SoftwareRecipeStepCopyFile{
                                ArtifactID: "ut",
                                Destination: "ab",
                                Overwrite: true,
                                Permissions: "corporis",
                            },
                            FileExec: &shared.SoftwareRecipeStepExecFile{
                                AllowedExitCodes: []int32{
                                    317333352940701154,
                                    7718237478852746607,
                                },
                                Args: []string{
                                    "porro",
                                    "est",
                                },
                                ArtifactID: "animi",
                                LocalPath: "adipisci",
                            },
                            MsiInstallation: &shared.SoftwareRecipeStepInstallMsi{
                                AllowedExitCodes: []int32{
                                    1093372993589537983,
                                    835673949948974773,
                                },
                                ArtifactID: "itaque",
                                Flags: []string{
                                    "blanditiis",
                                },
                            },
                            RpmInstallation: &shared.SoftwareRecipeStepInstallRpm{
                                ArtifactID: "vitae",
                            },
                            ScriptRun: &shared.SoftwareRecipeStepRunScript{
                                AllowedExitCodes: []int32{
                                    3745253425102893423,
                                    5749266165684136517,
                                },
                                Interpreter: "INTERPRETER_UNSPECIFIED",
                                Script: "amet",
                            },
                        },
                        shared.SoftwareRecipeStep{
                            ArchiveExtraction: &shared.SoftwareRecipeStepExtractArchive{
                                ArtifactID: "qui",
                                Destination: "nam",
                                Type: "TAR_GZIP",
                            },
                            DpkgInstallation: &shared.SoftwareRecipeStepInstallDpkg{
                                ArtifactID: "nihil",
                            },
                            FileCopy: &shared.SoftwareRecipeStepCopyFile{
                                ArtifactID: "tenetur",
                                Destination: "non",
                                Overwrite: true,
                                Permissions: "quisquam",
                            },
                            FileExec: &shared.SoftwareRecipeStepExecFile{
                                AllowedExitCodes: []int32{
                                    1535830095347270033,
                                    1861628215480870937,
                                    7333236625738123594,
                                },
                                Args: []string{
                                    "molestiae",
                                },
                                ArtifactID: "praesentium",
                                LocalPath: "esse",
                            },
                            MsiInstallation: &shared.SoftwareRecipeStepInstallMsi{
                                AllowedExitCodes: []int32{
                                    8413237545438082841,
                                },
                                ArtifactID: "excepturi",
                                Flags: []string{
                                    "perspiciatis",
                                    "dolor",
                                    "qui",
                                },
                            },
                            RpmInstallation: &shared.SoftwareRecipeStepInstallRpm{
                                ArtifactID: "non",
                            },
                            ScriptRun: &shared.SoftwareRecipeStepRunScript{
                                AllowedExitCodes: []int32{
                                    1633645323203759788,
                                    3986226800661513180,
                                },
                                Interpreter: "POWERSHELL",
                                Script: "dolorum",
                            },
                        },
                        shared.SoftwareRecipeStep{
                            ArchiveExtraction: &shared.SoftwareRecipeStepExtractArchive{
                                ArtifactID: "consequatur",
                                Destination: "debitis",
                                Type: "ARCHIVE_TYPE_UNSPECIFIED",
                            },
                            DpkgInstallation: &shared.SoftwareRecipeStepInstallDpkg{
                                ArtifactID: "maiores",
                            },
                            FileCopy: &shared.SoftwareRecipeStepCopyFile{
                                ArtifactID: "cupiditate",
                                Destination: "placeat",
                                Overwrite: false,
                                Permissions: "optio",
                            },
                            FileExec: &shared.SoftwareRecipeStepExecFile{
                                AllowedExitCodes: []int32{
                                    5269999584461583918,
                                },
                                Args: []string{
                                    "consequatur",
                                    "delectus",
                                },
                                ArtifactID: "qui",
                                LocalPath: "placeat",
                            },
                            MsiInstallation: &shared.SoftwareRecipeStepInstallMsi{
                                AllowedExitCodes: []int32{
                                    2295364640798743177,
                                    3519472727047299483,
                                    7145868117933600204,
                                },
                                ArtifactID: "veniam",
                                Flags: []string{
                                    "dolorem",
                                },
                            },
                            RpmInstallation: &shared.SoftwareRecipeStepInstallRpm{
                                ArtifactID: "ab",
                            },
                            ScriptRun: &shared.SoftwareRecipeStepRunScript{
                                AllowedExitCodes: []int32{
                                    1870534018162441106,
                                    2647384656287055547,
                                },
                                Interpreter: "INTERPRETER_UNSPECIFIED",
                                Script: "iste",
                            },
                        },
                    },
                    Version: "ut",
                },
                shared.SoftwareRecipe{
                    Artifacts: []shared.SoftwareRecipeArtifact{
                        shared.SoftwareRecipeArtifact{
                            AllowInsecure: false,
                            Gcs: &shared.SoftwareRecipeArtifactGcs{
                                Bucket: "nisi",
                                Generation: "fugit",
                                Object: "corrupti",
                            },
                            ID: "labore",
                            Remote: &shared.SoftwareRecipeArtifactRemote{
                                Checksum: "voluptatibus",
                                URI: "et",
                            },
                        },
                        shared.SoftwareRecipeArtifact{
                            AllowInsecure: false,
                            Gcs: &shared.SoftwareRecipeArtifactGcs{
                                Bucket: "dolorum",
                                Generation: "maiores",
                                Object: "quam",
                            },
                            ID: "autem",
                            Remote: &shared.SoftwareRecipeArtifactRemote{
                                Checksum: "fuga",
                                URI: "adipisci",
                            },
                        },
                        shared.SoftwareRecipeArtifact{
                            AllowInsecure: true,
                            Gcs: &shared.SoftwareRecipeArtifactGcs{
                                Bucket: "impedit",
                                Generation: "numquam",
                                Object: "dolores",
                            },
                            ID: "amet",
                            Remote: &shared.SoftwareRecipeArtifactRemote{
                                Checksum: "quia",
                                URI: "maiores",
                            },
                        },
                    },
                    DesiredState: "INSTALLED",
                    InstallSteps: []shared.SoftwareRecipeStep{
                        shared.SoftwareRecipeStep{
                            ArchiveExtraction: &shared.SoftwareRecipeStepExtractArchive{
                                ArtifactID: "non",
                                Destination: "ipsum",
                                Type: "TAR_LZMA",
                            },
                            DpkgInstallation: &shared.SoftwareRecipeStepInstallDpkg{
                                ArtifactID: "est",
                            },
                            FileCopy: &shared.SoftwareRecipeStepCopyFile{
                                ArtifactID: "ut",
                                Destination: "fugit",
                                Overwrite: true,
                                Permissions: "et",
                            },
                            FileExec: &shared.SoftwareRecipeStepExecFile{
                                AllowedExitCodes: []int32{
                                    2046821017381962614,
                                },
                                Args: []string{
                                    "nostrum",
                                    "nihil",
                                },
                                ArtifactID: "vel",
                                LocalPath: "provident",
                            },
                            MsiInstallation: &shared.SoftwareRecipeStepInstallMsi{
                                AllowedExitCodes: []int32{
                                    5115579402291521256,
                                    8362444646066491279,
                                },
                                ArtifactID: "itaque",
                                Flags: []string{
                                    "nesciunt",
                                    "eaque",
                                },
                            },
                            RpmInstallation: &shared.SoftwareRecipeStepInstallRpm{
                                ArtifactID: "adipisci",
                            },
                            ScriptRun: &shared.SoftwareRecipeStepRunScript{
                                AllowedExitCodes: []int32{
                                    4301373599773600027,
                                    6569871436799027729,
                                    556482886722781407,
                                },
                                Interpreter: "SHELL",
                                Script: "consequuntur",
                            },
                        },
                        shared.SoftwareRecipeStep{
                            ArchiveExtraction: &shared.SoftwareRecipeStepExtractArchive{
                                ArtifactID: "dolore",
                                Destination: "tempora",
                                Type: "ZIP",
                            },
                            DpkgInstallation: &shared.SoftwareRecipeStepInstallDpkg{
                                ArtifactID: "laborum",
                            },
                            FileCopy: &shared.SoftwareRecipeStepCopyFile{
                                ArtifactID: "fugit",
                                Destination: "rerum",
                                Overwrite: true,
                                Permissions: "ut",
                            },
                            FileExec: &shared.SoftwareRecipeStepExecFile{
                                AllowedExitCodes: []int32{
                                    243424504991073673,
                                },
                                Args: []string{
                                    "eligendi",
                                    "minima",
                                },
                                ArtifactID: "optio",
                                LocalPath: "rerum",
                            },
                            MsiInstallation: &shared.SoftwareRecipeStepInstallMsi{
                                AllowedExitCodes: []int32{
                                    1785559331512169032,
                                },
                                ArtifactID: "nesciunt",
                                Flags: []string{
                                    "inventore",
                                    "labore",
                                    "temporibus",
                                },
                            },
                            RpmInstallation: &shared.SoftwareRecipeStepInstallRpm{
                                ArtifactID: "explicabo",
                            },
                            ScriptRun: &shared.SoftwareRecipeStepRunScript{
                                AllowedExitCodes: []int32{
                                    8910019275254905426,
                                    5122229621349885895,
                                    9120435409453809129,
                                },
                                Interpreter: "POWERSHELL",
                                Script: "placeat",
                            },
                        },
                    },
                    Name: "magni",
                    UpdateSteps: []shared.SoftwareRecipeStep{
                        shared.SoftwareRecipeStep{
                            ArchiveExtraction: &shared.SoftwareRecipeStepExtractArchive{
                                ArtifactID: "exercitationem",
                                Destination: "et",
                                Type: "TAR",
                            },
                            DpkgInstallation: &shared.SoftwareRecipeStepInstallDpkg{
                                ArtifactID: "rem",
                            },
                            FileCopy: &shared.SoftwareRecipeStepCopyFile{
                                ArtifactID: "quam",
                                Destination: "facilis",
                                Overwrite: false,
                                Permissions: "illum",
                            },
                            FileExec: &shared.SoftwareRecipeStepExecFile{
                                AllowedExitCodes: []int32{
                                    1836968562645587117,
                                    6479001440367543136,
                                    4825787330679690160,
                                },
                                Args: []string{
                                    "quae",
                                    "consectetur",
                                    "quia",
                                },
                                ArtifactID: "aut",
                                LocalPath: "praesentium",
                            },
                            MsiInstallation: &shared.SoftwareRecipeStepInstallMsi{
                                AllowedExitCodes: []int32{
                                    795014595159360525,
                                    2003049065110562287,
                                    6450800268264121731,
                                },
                                ArtifactID: "molestias",
                                Flags: []string{
                                    "dolores",
                                },
                            },
                            RpmInstallation: &shared.SoftwareRecipeStepInstallRpm{
                                ArtifactID: "ut",
                            },
                            ScriptRun: &shared.SoftwareRecipeStepRunScript{
                                AllowedExitCodes: []int32{
                                    3356807277038008064,
                                    3480416170086794467,
                                    4364032926460360182,
                                },
                                Interpreter: "INTERPRETER_UNSPECIFIED",
                                Script: "qui",
                            },
                        },
                    },
                    Version: "necessitatibus",
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