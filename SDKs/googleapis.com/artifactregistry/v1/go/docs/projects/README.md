# Projects

### Available Operations

* [ArtifactregistryProjectsLocationsList](#artifactregistryprojectslocationslist) - Lists information about the supported locations for this service.
* [ArtifactregistryProjectsLocationsRepositoriesAptArtifactsImport](#artifactregistryprojectslocationsrepositoriesaptartifactsimport) - Imports Apt artifacts. The returned Operation will complete once the resources are imported. Package, Version, and File resources are created based on the imported artifacts. Imported artifacts that conflict with existing resources are ignored.
* [ArtifactregistryProjectsLocationsRepositoriesAptArtifactsUpload](#artifactregistryprojectslocationsrepositoriesaptartifactsupload) - Directly uploads an Apt artifact. The returned Operation will complete once the resources are uploaded. Package, Version, and File resources are created based on the imported artifact. Imported artifacts that conflict with existing resources are ignored.
* [ArtifactregistryProjectsLocationsRepositoriesCreate](#artifactregistryprojectslocationsrepositoriescreate) - Creates a repository. The returned Operation will finish once the repository has been created. Its response will be the created Repository.
* [ArtifactregistryProjectsLocationsRepositoriesDockerImagesList](#artifactregistryprojectslocationsrepositoriesdockerimageslist) - Lists docker images.
* [ArtifactregistryProjectsLocationsRepositoriesFilesList](#artifactregistryprojectslocationsrepositoriesfileslist) - Lists files.
* [ArtifactregistryProjectsLocationsRepositoriesGetIamPolicy](#artifactregistryprojectslocationsrepositoriesgetiampolicy) - Gets the IAM policy for a given resource.
* [ArtifactregistryProjectsLocationsRepositoriesGoogetArtifactsImport](#artifactregistryprojectslocationsrepositoriesgoogetartifactsimport) - Imports GooGet artifacts. The returned Operation will complete once the resources are imported. Package, Version, and File resources are created based on the imported artifacts. Imported artifacts that conflict with existing resources are ignored.
* [ArtifactregistryProjectsLocationsRepositoriesGoogetArtifactsUpload](#artifactregistryprojectslocationsrepositoriesgoogetartifactsupload) - Directly uploads a GooGet artifact. The returned Operation will complete once the resources are uploaded. Package, Version, and File resources are created based on the imported artifact. Imported artifacts that conflict with existing resources are ignored.
* [ArtifactregistryProjectsLocationsRepositoriesKfpArtifactsUpload](#artifactregistryprojectslocationsrepositorieskfpartifactsupload) - Directly uploads a KFP artifact. The returned Operation will complete once the resource is uploaded. Package, Version, and File resources will be created based on the uploaded artifact. Uploaded artifacts that conflict with existing resources will be overwritten.
* [ArtifactregistryProjectsLocationsRepositoriesList](#artifactregistryprojectslocationsrepositorieslist) - Lists repositories.
* [ArtifactregistryProjectsLocationsRepositoriesMavenArtifactsList](#artifactregistryprojectslocationsrepositoriesmavenartifactslist) - Lists maven artifacts.
* [ArtifactregistryProjectsLocationsRepositoriesNpmPackagesList](#artifactregistryprojectslocationsrepositoriesnpmpackageslist) - Lists npm packages.
* [ArtifactregistryProjectsLocationsRepositoriesPackagesList](#artifactregistryprojectslocationsrepositoriespackageslist) - Lists packages.
* [ArtifactregistryProjectsLocationsRepositoriesPackagesTagsCreate](#artifactregistryprojectslocationsrepositoriespackagestagscreate) - Creates a tag.
* [ArtifactregistryProjectsLocationsRepositoriesPackagesTagsList](#artifactregistryprojectslocationsrepositoriespackagestagslist) - Lists tags.
* [ArtifactregistryProjectsLocationsRepositoriesPackagesTagsPatch](#artifactregistryprojectslocationsrepositoriespackagestagspatch) - Updates a tag.
* [ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsDelete](#artifactregistryprojectslocationsrepositoriespackagesversionsdelete) - Deletes a version and all of its content. The returned operation will complete once the version has been deleted.
* [ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsList](#artifactregistryprojectslocationsrepositoriespackagesversionslist) - Lists versions.
* [ArtifactregistryProjectsLocationsRepositoriesPythonPackagesGet](#artifactregistryprojectslocationsrepositoriespythonpackagesget) - Gets a python package.
* [ArtifactregistryProjectsLocationsRepositoriesPythonPackagesList](#artifactregistryprojectslocationsrepositoriespythonpackageslist) - Lists python packages.
* [ArtifactregistryProjectsLocationsRepositoriesSetIamPolicy](#artifactregistryprojectslocationsrepositoriessetiampolicy) - Updates the IAM policy for a given resource.
* [ArtifactregistryProjectsLocationsRepositoriesTestIamPermissions](#artifactregistryprojectslocationsrepositoriestestiampermissions) - Tests if the caller has a list of permissions on a resource.
* [ArtifactregistryProjectsLocationsRepositoriesYumArtifactsImport](#artifactregistryprojectslocationsrepositoriesyumartifactsimport) - Imports Yum (RPM) artifacts. The returned Operation will complete once the resources are imported. Package, Version, and File resources are created based on the imported artifacts. Imported artifacts that conflict with existing resources are ignored.
* [ArtifactregistryProjectsLocationsRepositoriesYumArtifactsUpload](#artifactregistryprojectslocationsrepositoriesyumartifactsupload) - Directly uploads a Yum artifact. The returned Operation will complete once the resources are uploaded. Package, Version, and File resources are created based on the imported artifact. Imported artifacts that conflict with existing resources are ignored.

## ArtifactregistryProjectsLocationsList

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
    res, err := s.Projects.ArtifactregistryProjectsLocationsList(ctx, operations.ArtifactregistryProjectsLocationsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("molestiae"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("placeat"),
        Fields: sdk.String("voluptatum"),
        Filter: sdk.String("iusto"),
        Key: sdk.String("excepturi"),
        Name: "Mrs. Sophie Smith MD",
        OauthToken: sdk.String("perferendis"),
        PageSize: sdk.Int64(368241),
        PageToken: sdk.String("repellendus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("sapiente"),
        UploadType: sdk.String("quo"),
        UploadProtocol: sdk.String("odit"),
    }, operations.ArtifactregistryProjectsLocationsListSecurity{
        Option1: &operations.ArtifactregistryProjectsLocationsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListLocationsResponse != nil {
        // handle response
    }
}
```

## ArtifactregistryProjectsLocationsRepositoriesAptArtifactsImport

Imports Apt artifacts. The returned Operation will complete once the resources are imported. Package, Version, and File resources are created based on the imported artifacts. Imported artifacts that conflict with existing resources are ignored.

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
    res, err := s.Projects.ArtifactregistryProjectsLocationsRepositoriesAptArtifactsImport(ctx, operations.ArtifactregistryProjectsLocationsRepositoriesAptArtifactsImportRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        ImportAptArtifactsRequest: &shared.ImportAptArtifactsRequest{
            GcsSource: &shared.ImportAptArtifactsGcsSource{
                Uris: []string{
                    "maiores",
                    "molestiae",
                    "quod",
                    "quod",
                },
                UseWildcards: sdk.Bool(false),
            },
        },
        AccessToken: sdk.String("esse"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("porro"),
        Fields: sdk.String("dolorum"),
        Key: sdk.String("dicta"),
        OauthToken: sdk.String("nam"),
        Parent: "officia",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("occaecati"),
        UploadType: sdk.String("fugit"),
        UploadProtocol: sdk.String("deleniti"),
    }, operations.ArtifactregistryProjectsLocationsRepositoriesAptArtifactsImportSecurity{
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

## ArtifactregistryProjectsLocationsRepositoriesAptArtifactsUpload

Directly uploads an Apt artifact. The returned Operation will complete once the resources are uploaded. Package, Version, and File resources are created based on the imported artifact. Imported artifacts that conflict with existing resources are ignored.

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
    res, err := s.Projects.ArtifactregistryProjectsLocationsRepositoriesAptArtifactsUpload(ctx, operations.ArtifactregistryProjectsLocationsRepositoriesAptArtifactsUploadRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        RequestBody: []byte("optio"),
        AccessToken: sdk.String("totam"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("commodi"),
        Fields: sdk.String("molestiae"),
        Key: sdk.String("modi"),
        OauthToken: sdk.String("qui"),
        Parent: "impedit",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("cum"),
        UploadType: sdk.String("esse"),
        UploadProtocol: sdk.String("ipsum"),
    }, operations.ArtifactregistryProjectsLocationsRepositoriesAptArtifactsUploadSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UploadAptArtifactMediaResponse != nil {
        // handle response
    }
}
```

## ArtifactregistryProjectsLocationsRepositoriesCreate

Creates a repository. The returned Operation will finish once the repository has been created. Its response will be the created Repository.

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
    res, err := s.Projects.ArtifactregistryProjectsLocationsRepositoriesCreate(ctx, operations.ArtifactregistryProjectsLocationsRepositoriesCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        RepositoryInput: &shared.RepositoryInput{
            Description: sdk.String("aspernatur"),
            DockerConfig: &shared.DockerRepositoryConfig{
                ImmutableTags: sdk.Bool(false),
            },
            Format: shared.RepositoryFormatEnumFormatUnspecified.ToPointer(),
            KmsKeyName: sdk.String("ad"),
            Labels: map[string]string{
                "sed": "iste",
                "dolor": "natus",
                "laboriosam": "hic",
            },
            MavenConfig: &shared.MavenRepositoryConfig{
                AllowSnapshotOverwrites: sdk.Bool(false),
                VersionPolicy: shared.MavenRepositoryConfigVersionPolicyEnumSnapshot.ToPointer(),
            },
            Mode: shared.RepositoryModeEnumVirtualRepository.ToPointer(),
            Name: sdk.String("Stacy Moore"),
            RemoteRepositoryConfig: &shared.RemoteRepositoryConfig{
                Description: sdk.String("quidem"),
                DockerRepository: &shared.DockerRepository{
                    PublicRepository: shared.DockerRepositoryPublicRepositoryEnumPublicRepositoryUnspecified.ToPointer(),
                },
                MavenRepository: &shared.MavenRepository{
                    PublicRepository: shared.MavenRepositoryPublicRepositoryEnumPublicRepositoryUnspecified.ToPointer(),
                },
                NpmRepository: &shared.NpmRepository{
                    PublicRepository: shared.NpmRepositoryPublicRepositoryEnumNpmjs.ToPointer(),
                },
                PythonRepository: &shared.PythonRepository{
                    PublicRepository: shared.PythonRepositoryPublicRepositoryEnumPypi.ToPointer(),
                },
            },
            VirtualRepositoryConfig: &shared.VirtualRepositoryConfig{
                UpstreamPolicies: []shared.UpstreamPolicy{
                    shared.UpstreamPolicy{
                        ID: sdk.String("a2352c59-5590-47af-b1a3-a2fa94677392"),
                        Priority: sdk.Int(338007),
                        Repository: sdk.String("vitae"),
                    },
                    shared.UpstreamPolicy{
                        ID: sdk.String("aa52c3f5-ad01-49da-9ffe-78f097b0074f"),
                        Priority: sdk.Int(120196),
                        Repository: sdk.String("corporis"),
                    },
                    shared.UpstreamPolicy{
                        ID: sdk.String("471b5e6e-13b9-49d4-88e1-e91e450ad2ab"),
                        Priority: sdk.Int(841386),
                        Repository: sdk.String("labore"),
                    },
                },
            },
        },
        AccessToken: sdk.String("modi"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("aliquid"),
        Fields: sdk.String("cupiditate"),
        Key: sdk.String("quos"),
        OauthToken: sdk.String("perferendis"),
        Parent: "magni",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("assumenda"),
        RepositoryID: sdk.String("ipsam"),
        UploadType: sdk.String("alias"),
        UploadProtocol: sdk.String("fugit"),
    }, operations.ArtifactregistryProjectsLocationsRepositoriesCreateSecurity{
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

## ArtifactregistryProjectsLocationsRepositoriesDockerImagesList

Lists docker images.

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
    res, err := s.Projects.ArtifactregistryProjectsLocationsRepositoriesDockerImagesList(ctx, operations.ArtifactregistryProjectsLocationsRepositoriesDockerImagesListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("excepturi"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("facilis"),
        Fields: sdk.String("tempore"),
        Key: sdk.String("labore"),
        OauthToken: sdk.String("delectus"),
        OrderBy: sdk.String("eum"),
        PageSize: sdk.Int64(248753),
        PageToken: sdk.String("eligendi"),
        Parent: "sint",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("aliquid"),
        UploadType: sdk.String("provident"),
        UploadProtocol: sdk.String("necessitatibus"),
    }, operations.ArtifactregistryProjectsLocationsRepositoriesDockerImagesListSecurity{
        Option1: &operations.ArtifactregistryProjectsLocationsRepositoriesDockerImagesListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListDockerImagesResponse != nil {
        // handle response
    }
}
```

## ArtifactregistryProjectsLocationsRepositoriesFilesList

Lists files.

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
    res, err := s.Projects.ArtifactregistryProjectsLocationsRepositoriesFilesList(ctx, operations.ArtifactregistryProjectsLocationsRepositoriesFilesListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("officia"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("debitis"),
        Fields: sdk.String("a"),
        Filter: sdk.String("dolorum"),
        Key: sdk.String("in"),
        OauthToken: sdk.String("in"),
        OrderBy: sdk.String("illum"),
        PageSize: sdk.Int64(978571),
        PageToken: sdk.String("rerum"),
        Parent: "dicta",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("magnam"),
        UploadType: sdk.String("cumque"),
        UploadProtocol: sdk.String("facere"),
    }, operations.ArtifactregistryProjectsLocationsRepositoriesFilesListSecurity{
        Option1: &operations.ArtifactregistryProjectsLocationsRepositoriesFilesListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListFilesResponse != nil {
        // handle response
    }
}
```

## ArtifactregistryProjectsLocationsRepositoriesGetIamPolicy

Gets the IAM policy for a given resource.

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
    res, err := s.Projects.ArtifactregistryProjectsLocationsRepositoriesGetIamPolicy(ctx, operations.ArtifactregistryProjectsLocationsRepositoriesGetIamPolicyRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("aliquid"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("accusamus"),
        Fields: sdk.String("non"),
        Key: sdk.String("occaecati"),
        OauthToken: sdk.String("enim"),
        OptionsRequestedPolicyVersion: sdk.Int64(881736),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("delectus"),
        Resource: "quidem",
        UploadType: sdk.String("provident"),
        UploadProtocol: sdk.String("nam"),
    }, operations.ArtifactregistryProjectsLocationsRepositoriesGetIamPolicySecurity{
        Option1: &operations.ArtifactregistryProjectsLocationsRepositoriesGetIamPolicySecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Policy != nil {
        // handle response
    }
}
```

## ArtifactregistryProjectsLocationsRepositoriesGoogetArtifactsImport

Imports GooGet artifacts. The returned Operation will complete once the resources are imported. Package, Version, and File resources are created based on the imported artifacts. Imported artifacts that conflict with existing resources are ignored.

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
    res, err := s.Projects.ArtifactregistryProjectsLocationsRepositoriesGoogetArtifactsImport(ctx, operations.ArtifactregistryProjectsLocationsRepositoriesGoogetArtifactsImportRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        ImportGoogetArtifactsRequest: &shared.ImportGoogetArtifactsRequest{
            GcsSource: &shared.ImportGoogetArtifactsGcsSource{
                Uris: []string{
                    "deleniti",
                    "sapiente",
                    "amet",
                },
                UseWildcards: sdk.Bool(false),
            },
        },
        AccessToken: sdk.String("deserunt"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("vel"),
        Fields: sdk.String("natus"),
        Key: sdk.String("omnis"),
        OauthToken: sdk.String("molestiae"),
        Parent: "perferendis",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("nihil"),
        UploadType: sdk.String("magnam"),
        UploadProtocol: sdk.String("distinctio"),
    }, operations.ArtifactregistryProjectsLocationsRepositoriesGoogetArtifactsImportSecurity{
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

## ArtifactregistryProjectsLocationsRepositoriesGoogetArtifactsUpload

Directly uploads a GooGet artifact. The returned Operation will complete once the resources are uploaded. Package, Version, and File resources are created based on the imported artifact. Imported artifacts that conflict with existing resources are ignored.

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
    res, err := s.Projects.ArtifactregistryProjectsLocationsRepositoriesGoogetArtifactsUpload(ctx, operations.ArtifactregistryProjectsLocationsRepositoriesGoogetArtifactsUploadRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        RequestBody: []byte("labore"),
        AccessToken: sdk.String("labore"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("natus"),
        Fields: sdk.String("nobis"),
        Key: sdk.String("eum"),
        OauthToken: sdk.String("vero"),
        Parent: "aspernatur",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("architecto"),
        UploadType: sdk.String("magnam"),
        UploadProtocol: sdk.String("et"),
    }, operations.ArtifactregistryProjectsLocationsRepositoriesGoogetArtifactsUploadSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UploadGoogetArtifactMediaResponse != nil {
        // handle response
    }
}
```

## ArtifactregistryProjectsLocationsRepositoriesKfpArtifactsUpload

Directly uploads a KFP artifact. The returned Operation will complete once the resource is uploaded. Package, Version, and File resources will be created based on the uploaded artifact. Uploaded artifacts that conflict with existing resources will be overwritten.

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
    res, err := s.Projects.ArtifactregistryProjectsLocationsRepositoriesKfpArtifactsUpload(ctx, operations.ArtifactregistryProjectsLocationsRepositoriesKfpArtifactsUploadRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        RequestBody: []byte("ullam"),
        AccessToken: sdk.String("provident"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("sint"),
        Fields: sdk.String("accusantium"),
        Key: sdk.String("mollitia"),
        OauthToken: sdk.String("reiciendis"),
        Parent: "mollitia",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ad"),
        UploadType: sdk.String("eum"),
        UploadProtocol: sdk.String("dolor"),
    }, operations.ArtifactregistryProjectsLocationsRepositoriesKfpArtifactsUploadSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UploadKfpArtifactMediaResponse != nil {
        // handle response
    }
}
```

## ArtifactregistryProjectsLocationsRepositoriesList

Lists repositories.

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
    res, err := s.Projects.ArtifactregistryProjectsLocationsRepositoriesList(ctx, operations.ArtifactregistryProjectsLocationsRepositoriesListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("odit"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("quasi"),
        Fields: sdk.String("iure"),
        Key: sdk.String("doloribus"),
        OauthToken: sdk.String("debitis"),
        PageSize: sdk.Int64(260341),
        PageToken: sdk.String("maxime"),
        Parent: "deleniti",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("facilis"),
        UploadType: sdk.String("in"),
        UploadProtocol: sdk.String("architecto"),
    }, operations.ArtifactregistryProjectsLocationsRepositoriesListSecurity{
        Option1: &operations.ArtifactregistryProjectsLocationsRepositoriesListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListRepositoriesResponse != nil {
        // handle response
    }
}
```

## ArtifactregistryProjectsLocationsRepositoriesMavenArtifactsList

Lists maven artifacts.

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
    res, err := s.Projects.ArtifactregistryProjectsLocationsRepositoriesMavenArtifactsList(ctx, operations.ArtifactregistryProjectsLocationsRepositoriesMavenArtifactsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("repudiandae"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("expedita"),
        Fields: sdk.String("nihil"),
        Key: sdk.String("repellat"),
        OauthToken: sdk.String("quibusdam"),
        PageSize: sdk.Int64(149448),
        PageToken: sdk.String("saepe"),
        Parent: "pariatur",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("accusantium"),
        UploadType: sdk.String("consequuntur"),
        UploadProtocol: sdk.String("praesentium"),
    }, operations.ArtifactregistryProjectsLocationsRepositoriesMavenArtifactsListSecurity{
        Option1: &operations.ArtifactregistryProjectsLocationsRepositoriesMavenArtifactsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListMavenArtifactsResponse != nil {
        // handle response
    }
}
```

## ArtifactregistryProjectsLocationsRepositoriesNpmPackagesList

Lists npm packages.

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
    res, err := s.Projects.ArtifactregistryProjectsLocationsRepositoriesNpmPackagesList(ctx, operations.ArtifactregistryProjectsLocationsRepositoriesNpmPackagesListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("magni"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("quo"),
        Fields: sdk.String("illum"),
        Key: sdk.String("pariatur"),
        OauthToken: sdk.String("maxime"),
        PageSize: sdk.Int64(411397),
        PageToken: sdk.String("excepturi"),
        Parent: "odit",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ea"),
        UploadType: sdk.String("accusantium"),
        UploadProtocol: sdk.String("ab"),
    }, operations.ArtifactregistryProjectsLocationsRepositoriesNpmPackagesListSecurity{
        Option1: &operations.ArtifactregistryProjectsLocationsRepositoriesNpmPackagesListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListNpmPackagesResponse != nil {
        // handle response
    }
}
```

## ArtifactregistryProjectsLocationsRepositoriesPackagesList

Lists packages.

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
    res, err := s.Projects.ArtifactregistryProjectsLocationsRepositoriesPackagesList(ctx, operations.ArtifactregistryProjectsLocationsRepositoriesPackagesListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("quidem"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("voluptate"),
        Fields: sdk.String("autem"),
        Key: sdk.String("nam"),
        OauthToken: sdk.String("eaque"),
        PageSize: sdk.Int64(866383),
        PageToken: sdk.String("nemo"),
        Parent: "voluptatibus",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("perferendis"),
        UploadType: sdk.String("fugiat"),
        UploadProtocol: sdk.String("amet"),
    }, operations.ArtifactregistryProjectsLocationsRepositoriesPackagesListSecurity{
        Option1: &operations.ArtifactregistryProjectsLocationsRepositoriesPackagesListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListPackagesResponse != nil {
        // handle response
    }
}
```

## ArtifactregistryProjectsLocationsRepositoriesPackagesTagsCreate

Creates a tag.

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
    res, err := s.Projects.ArtifactregistryProjectsLocationsRepositoriesPackagesTagsCreate(ctx, operations.ArtifactregistryProjectsLocationsRepositoriesPackagesTagsCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        Tag: &shared.Tag{
            Name: sdk.String("Lewis Welch"),
            Version: sdk.String("dolores"),
        },
        AccessToken: sdk.String("quis"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("dignissimos"),
        Fields: sdk.String("eaque"),
        Key: sdk.String("quis"),
        OauthToken: sdk.String("nesciunt"),
        Parent: "eos",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("perferendis"),
        TagID: sdk.String("dolores"),
        UploadType: sdk.String("minus"),
        UploadProtocol: sdk.String("quam"),
    }, operations.ArtifactregistryProjectsLocationsRepositoriesPackagesTagsCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Tag != nil {
        // handle response
    }
}
```

## ArtifactregistryProjectsLocationsRepositoriesPackagesTagsList

Lists tags.

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
    res, err := s.Projects.ArtifactregistryProjectsLocationsRepositoriesPackagesTagsList(ctx, operations.ArtifactregistryProjectsLocationsRepositoriesPackagesTagsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("vero"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("hic"),
        Fields: sdk.String("recusandae"),
        Filter: sdk.String("omnis"),
        Key: sdk.String("facilis"),
        OauthToken: sdk.String("perspiciatis"),
        PageSize: sdk.Int64(31838),
        PageToken: sdk.String("porro"),
        Parent: "consequuntur",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("blanditiis"),
        UploadType: sdk.String("error"),
        UploadProtocol: sdk.String("eaque"),
    }, operations.ArtifactregistryProjectsLocationsRepositoriesPackagesTagsListSecurity{
        Option1: &operations.ArtifactregistryProjectsLocationsRepositoriesPackagesTagsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTagsResponse != nil {
        // handle response
    }
}
```

## ArtifactregistryProjectsLocationsRepositoriesPackagesTagsPatch

Updates a tag.

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
    res, err := s.Projects.ArtifactregistryProjectsLocationsRepositoriesPackagesTagsPatch(ctx, operations.ArtifactregistryProjectsLocationsRepositoriesPackagesTagsPatchRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        Tag: &shared.Tag{
            Name: sdk.String("Travis Zemlak"),
            Version: sdk.String("iste"),
        },
        AccessToken: sdk.String("dolorum"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("pariatur"),
        Fields: sdk.String("provident"),
        Key: sdk.String("nobis"),
        Name: "Toby Hahn",
        OauthToken: sdk.String("dolorem"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dolorem"),
        UpdateMask: sdk.String("dolor"),
        UploadType: sdk.String("qui"),
        UploadProtocol: sdk.String("ipsum"),
    }, operations.ArtifactregistryProjectsLocationsRepositoriesPackagesTagsPatchSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Tag != nil {
        // handle response
    }
}
```

## ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsDelete

Deletes a version and all of its content. The returned operation will complete once the version has been deleted.

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
    res, err := s.Projects.ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsDelete(ctx, operations.ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsDeleteRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("excepturi"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("voluptate"),
        Fields: sdk.String("dignissimos"),
        Force: sdk.Bool(false),
        Key: sdk.String("reiciendis"),
        Name: "Mr. Lee Funk III",
        OauthToken: sdk.String("odio"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quaerat"),
        UploadType: sdk.String("accusamus"),
        UploadProtocol: sdk.String("quidem"),
    }, operations.ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsDeleteSecurity{
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

## ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsList

Lists versions.

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
    res, err := s.Projects.ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsList(ctx, operations.ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("voluptas"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("eos"),
        Fields: sdk.String("atque"),
        Key: sdk.String("sit"),
        OauthToken: sdk.String("fugiat"),
        OrderBy: sdk.String("ab"),
        PageSize: sdk.Int64(743835),
        PageToken: sdk.String("dolorum"),
        Parent: "iusto",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("voluptate"),
        UploadType: sdk.String("dolorum"),
        UploadProtocol: sdk.String("deleniti"),
        View: operations.ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsListViewEnumBasic.ToPointer(),
    }, operations.ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsListSecurity{
        Option1: &operations.ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListVersionsResponse != nil {
        // handle response
    }
}
```

## ArtifactregistryProjectsLocationsRepositoriesPythonPackagesGet

Gets a python package.

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
    res, err := s.Projects.ArtifactregistryProjectsLocationsRepositoriesPythonPackagesGet(ctx, operations.ArtifactregistryProjectsLocationsRepositoriesPythonPackagesGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("distinctio"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("nihil"),
        Fields: sdk.String("ipsum"),
        Key: sdk.String("voluptate"),
        Name: "Elbert Gislason I",
        OauthToken: sdk.String("optio"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("accusamus"),
        UploadType: sdk.String("ad"),
        UploadProtocol: sdk.String("saepe"),
        View: operations.ArtifactregistryProjectsLocationsRepositoriesPythonPackagesGetViewEnumBasic.ToPointer(),
    }, operations.ArtifactregistryProjectsLocationsRepositoriesPythonPackagesGetSecurity{
        Option1: &operations.ArtifactregistryProjectsLocationsRepositoriesPythonPackagesGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PythonPackage != nil {
        // handle response
    }
}
```

## ArtifactregistryProjectsLocationsRepositoriesPythonPackagesList

Lists python packages.

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
    res, err := s.Projects.ArtifactregistryProjectsLocationsRepositoriesPythonPackagesList(ctx, operations.ArtifactregistryProjectsLocationsRepositoriesPythonPackagesListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("provident"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("repellendus"),
        Fields: sdk.String("totam"),
        Key: sdk.String("similique"),
        OauthToken: sdk.String("alias"),
        PageSize: sdk.Int64(872651),
        PageToken: sdk.String("quaerat"),
        Parent: "tempora",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("vel"),
        UploadType: sdk.String("quod"),
        UploadProtocol: sdk.String("officiis"),
    }, operations.ArtifactregistryProjectsLocationsRepositoriesPythonPackagesListSecurity{
        Option1: &operations.ArtifactregistryProjectsLocationsRepositoriesPythonPackagesListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListPythonPackagesResponse != nil {
        // handle response
    }
}
```

## ArtifactregistryProjectsLocationsRepositoriesSetIamPolicy

Updates the IAM policy for a given resource.

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
    res, err := s.Projects.ArtifactregistryProjectsLocationsRepositoriesSetIamPolicy(ctx, operations.ArtifactregistryProjectsLocationsRepositoriesSetIamPolicyRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        SetIamPolicyRequest: &shared.SetIamPolicyRequest{
            Policy: &shared.Policy{
                Bindings: []shared.Binding{
                    shared.Binding{
                        Condition: &shared.Expr{
                            Description: sdk.String("a"),
                            Expression: sdk.String("esse"),
                            Location: sdk.String("harum"),
                            Title: sdk.String("Ms."),
                        },
                        Members: []string{
                            "quisquam",
                        },
                        Role: sdk.String("tenetur"),
                    },
                    shared.Binding{
                        Condition: &shared.Expr{
                            Description: sdk.String("amet"),
                            Expression: sdk.String("tempore"),
                            Location: sdk.String("accusamus"),
                            Title: sdk.String("Mrs."),
                        },
                        Members: []string{
                            "dolorem",
                            "sapiente",
                        },
                        Role: sdk.String("totam"),
                    },
                    shared.Binding{
                        Condition: &shared.Expr{
                            Description: sdk.String("nihil"),
                            Expression: sdk.String("sit"),
                            Location: sdk.String("expedita"),
                            Title: sdk.String("Mrs."),
                        },
                        Members: []string{
                            "vel",
                        },
                        Role: sdk.String("libero"),
                    },
                },
                Etag: sdk.String("voluptas"),
                Version: sdk.Int(646265),
            },
        },
        AccessToken: sdk.String("quam"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("incidunt"),
        Fields: sdk.String("qui"),
        Key: sdk.String("cupiditate"),
        OauthToken: sdk.String("maxime"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("pariatur"),
        Resource: "soluta",
        UploadType: sdk.String("dicta"),
        UploadProtocol: sdk.String("laborum"),
    }, operations.ArtifactregistryProjectsLocationsRepositoriesSetIamPolicySecurity{
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

## ArtifactregistryProjectsLocationsRepositoriesTestIamPermissions

Tests if the caller has a list of permissions on a resource.

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
    res, err := s.Projects.ArtifactregistryProjectsLocationsRepositoriesTestIamPermissions(ctx, operations.ArtifactregistryProjectsLocationsRepositoriesTestIamPermissionsRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        TestIamPermissionsRequest: &shared.TestIamPermissionsRequest{
            Permissions: []string{
                "aspernatur",
                "dolores",
            },
        },
        AccessToken: sdk.String("distinctio"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("aliquid"),
        Fields: sdk.String("quam"),
        Key: sdk.String("molestias"),
        OauthToken: sdk.String("temporibus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("qui"),
        Resource: "neque",
        UploadType: sdk.String("fugit"),
        UploadProtocol: sdk.String("magni"),
    }, operations.ArtifactregistryProjectsLocationsRepositoriesTestIamPermissionsSecurity{
        Option1: &operations.ArtifactregistryProjectsLocationsRepositoriesTestIamPermissionsSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TestIamPermissionsResponse != nil {
        // handle response
    }
}
```

## ArtifactregistryProjectsLocationsRepositoriesYumArtifactsImport

Imports Yum (RPM) artifacts. The returned Operation will complete once the resources are imported. Package, Version, and File resources are created based on the imported artifacts. Imported artifacts that conflict with existing resources are ignored.

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
    res, err := s.Projects.ArtifactregistryProjectsLocationsRepositoriesYumArtifactsImport(ctx, operations.ArtifactregistryProjectsLocationsRepositoriesYumArtifactsImportRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        ImportYumArtifactsRequest: &shared.ImportYumArtifactsRequest{
            GcsSource: &shared.ImportYumArtifactsGcsSource{
                Uris: []string{
                    "ullam",
                },
                UseWildcards: sdk.Bool(false),
            },
        },
        AccessToken: sdk.String("nam"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("voluptatem"),
        Fields: sdk.String("cumque"),
        Key: sdk.String("soluta"),
        OauthToken: sdk.String("nobis"),
        Parent: "et",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("saepe"),
        UploadType: sdk.String("ipsum"),
        UploadProtocol: sdk.String("veritatis"),
    }, operations.ArtifactregistryProjectsLocationsRepositoriesYumArtifactsImportSecurity{
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

## ArtifactregistryProjectsLocationsRepositoriesYumArtifactsUpload

Directly uploads a Yum artifact. The returned Operation will complete once the resources are uploaded. Package, Version, and File resources are created based on the imported artifact. Imported artifacts that conflict with existing resources are ignored.

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
    res, err := s.Projects.ArtifactregistryProjectsLocationsRepositoriesYumArtifactsUpload(ctx, operations.ArtifactregistryProjectsLocationsRepositoriesYumArtifactsUploadRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        RequestBody: []byte("quos"),
        AccessToken: sdk.String("tempore"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("aperiam"),
        Fields: sdk.String("delectus"),
        Key: sdk.String("dolorem"),
        OauthToken: sdk.String("dolore"),
        Parent: "labore",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("adipisci"),
        UploadType: sdk.String("dolorum"),
        UploadProtocol: sdk.String("architecto"),
    }, operations.ArtifactregistryProjectsLocationsRepositoriesYumArtifactsUploadSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UploadYumArtifactMediaResponse != nil {
        // handle response
    }
}
```
