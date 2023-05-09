# Projects

### Available Operations

* [ArtifactregistryProjectsLocationsList](#artifactregistryprojectslocationslist) - Lists information about the supported locations for this service.
* [ArtifactregistryProjectsLocationsRepositoriesAptArtifactsImport](#artifactregistryprojectslocationsrepositoriesaptartifactsimport) - Imports Apt artifacts. The returned Operation will complete once the resources are imported. Package, Version, and File resources are created based on the imported artifacts. Imported artifacts that conflict with existing resources are ignored.
* [ArtifactregistryProjectsLocationsRepositoriesAptArtifactsUpload](#artifactregistryprojectslocationsrepositoriesaptartifactsupload) - Directly uploads an Apt artifact. The returned Operation will complete once the resources are uploaded. Package, Version, and File resources are created based on the imported artifact. Imported artifacts that conflict with existing resources are ignored.
* [ArtifactregistryProjectsLocationsRepositoriesCreate](#artifactregistryprojectslocationsrepositoriescreate) - Creates a repository. The returned Operation will finish once the repository has been created. Its response will be the created Repository.
* [ArtifactregistryProjectsLocationsRepositoriesFilesList](#artifactregistryprojectslocationsrepositoriesfileslist) - Lists files.
* [ArtifactregistryProjectsLocationsRepositoriesGetIamPolicy](#artifactregistryprojectslocationsrepositoriesgetiampolicy) - Gets the IAM policy for a given resource.
* [ArtifactregistryProjectsLocationsRepositoriesList](#artifactregistryprojectslocationsrepositorieslist) - Lists repositories.
* [ArtifactregistryProjectsLocationsRepositoriesPackagesList](#artifactregistryprojectslocationsrepositoriespackageslist) - Lists packages.
* [ArtifactregistryProjectsLocationsRepositoriesPackagesTagsCreate](#artifactregistryprojectslocationsrepositoriespackagestagscreate) - Creates a tag.
* [ArtifactregistryProjectsLocationsRepositoriesPackagesTagsList](#artifactregistryprojectslocationsrepositoriespackagestagslist) - Lists tags.
* [ArtifactregistryProjectsLocationsRepositoriesPackagesTagsPatch](#artifactregistryprojectslocationsrepositoriespackagestagspatch) - Updates a tag.
* [ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsDelete](#artifactregistryprojectslocationsrepositoriespackagesversionsdelete) - Deletes a version and all of its content. The returned operation will complete once the version has been deleted.
* [ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsGet](#artifactregistryprojectslocationsrepositoriespackagesversionsget) - Gets a version
* [ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsList](#artifactregistryprojectslocationsrepositoriespackagesversionslist) - Lists versions.
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
            Name: sdk.String("Harvey Hessel"),
        },
        AccessToken: sdk.String("saepe"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("architecto"),
        Fields: sdk.String("ipsa"),
        Key: sdk.String("reiciendis"),
        OauthToken: sdk.String("est"),
        Parent: "mollitia",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("laborum"),
        RepositoryID: sdk.String("dolores"),
        UploadType: sdk.String("dolorem"),
        UploadProtocol: sdk.String("corporis"),
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("nobis"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("omnis"),
        Fields: sdk.String("nemo"),
        Filter: sdk.String("minima"),
        Key: sdk.String("excepturi"),
        OauthToken: sdk.String("accusantium"),
        PageSize: sdk.Int64(438601),
        PageToken: sdk.String("culpa"),
        Parent: "doloribus",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("sapiente"),
        UploadType: sdk.String("architecto"),
        UploadProtocol: sdk.String("mollitia"),
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
        AccessToken: sdk.String("culpa"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("repellat"),
        Fields: sdk.String("mollitia"),
        Key: sdk.String("occaecati"),
        OauthToken: sdk.String("numquam"),
        OptionsRequestedPolicyVersion: sdk.Int64(414369),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quam"),
        Resource: "molestiae",
        UploadType: sdk.String("velit"),
        UploadProtocol: sdk.String("error"),
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("quis"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("laborum"),
        Fields: sdk.String("animi"),
        Key: sdk.String("enim"),
        OauthToken: sdk.String("odit"),
        PageSize: sdk.Int64(778346),
        PageToken: sdk.String("sequi"),
        Parent: "tenetur",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ipsam"),
        UploadType: sdk.String("id"),
        UploadProtocol: sdk.String("possimus"),
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("quasi"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("temporibus"),
        Fields: sdk.String("laborum"),
        Key: sdk.String("quasi"),
        OauthToken: sdk.String("reiciendis"),
        PageSize: sdk.Int64(976460),
        PageToken: sdk.String("vero"),
        Parent: "nihil",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("praesentium"),
        UploadType: sdk.String("voluptatibus"),
        UploadProtocol: sdk.String("ipsa"),
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        Tag: &shared.Tag{
            Name: sdk.String("Ms. Karla Aufderhar"),
            Version: sdk.String("maiores"),
        },
        AccessToken: sdk.String("dicta"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("dolore"),
        Fields: sdk.String("iusto"),
        Key: sdk.String("dicta"),
        OauthToken: sdk.String("harum"),
        Parent: "enim",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("accusamus"),
        TagID: sdk.String("commodi"),
        UploadType: sdk.String("repudiandae"),
        UploadProtocol: sdk.String("quae"),
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
        AccessToken: sdk.String("quidem"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("excepturi"),
        Fields: sdk.String("pariatur"),
        Filter: sdk.String("modi"),
        Key: sdk.String("praesentium"),
        OauthToken: sdk.String("rem"),
        PageSize: sdk.Int64(916723),
        PageToken: sdk.String("quasi"),
        Parent: "repudiandae",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("sint"),
        UploadType: sdk.String("veritatis"),
        UploadProtocol: sdk.String("itaque"),
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        Tag: &shared.Tag{
            Name: sdk.String("Elizabeth Orn"),
            Version: sdk.String("deserunt"),
        },
        AccessToken: sdk.String("distinctio"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("labore"),
        Fields: sdk.String("modi"),
        Key: sdk.String("qui"),
        Name: "Mr. Shelly Lueilwitz",
        OauthToken: sdk.String("ipsam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("alias"),
        UpdateMask: sdk.String("fugit"),
        UploadType: sdk.String("dolorum"),
        UploadProtocol: sdk.String("excepturi"),
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("facilis"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("labore"),
        Fields: sdk.String("delectus"),
        Force: sdk.Bool(false),
        Key: sdk.String("eum"),
        Name: "Sheri Mayer",
        OauthToken: sdk.String("necessitatibus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("sint"),
        UploadType: sdk.String("officia"),
        UploadProtocol: sdk.String("dolor"),
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

## ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsGet

Gets a version

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
    res, err := s.Projects.ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsGet(ctx, operations.ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("a"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("in"),
        Fields: sdk.String("in"),
        Key: sdk.String("illum"),
        Name: "Jean Buckridge",
        OauthToken: sdk.String("facere"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ea"),
        UploadType: sdk.String("aliquid"),
        UploadProtocol: sdk.String("laborum"),
        View: operations.ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsGetViewEnumFull.ToPointer(),
    }, operations.ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsGetSecurity{
        Option1: &operations.ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Version != nil {
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("occaecati"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("accusamus"),
        Fields: sdk.String("delectus"),
        Key: sdk.String("quidem"),
        OauthToken: sdk.String("provident"),
        OrderBy: sdk.String("nam"),
        PageSize: sdk.Int64(659669),
        PageToken: sdk.String("blanditiis"),
        Parent: "deleniti",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("sapiente"),
        UploadType: sdk.String("amet"),
        UploadProtocol: sdk.String("deserunt"),
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
                            Description: sdk.String("omnis"),
                            Expression: sdk.String("molestiae"),
                            Location: sdk.String("perferendis"),
                            Title: sdk.String("Ms."),
                        },
                        Members: []string{
                            "distinctio",
                            "id",
                        },
                        Role: sdk.String("labore"),
                    },
                    shared.Binding{
                        Condition: &shared.Expr{
                            Description: sdk.String("labore"),
                            Expression: sdk.String("suscipit"),
                            Location: sdk.String("natus"),
                            Title: sdk.String("Miss"),
                        },
                        Members: []string{
                            "vero",
                            "aspernatur",
                        },
                        Role: sdk.String("architecto"),
                    },
                    shared.Binding{
                        Condition: &shared.Expr{
                            Description: sdk.String("magnam"),
                            Expression: sdk.String("et"),
                            Location: sdk.String("excepturi"),
                            Title: sdk.String("Mrs."),
                        },
                        Members: []string{
                            "quos",
                            "sint",
                            "accusantium",
                        },
                        Role: sdk.String("mollitia"),
                    },
                },
                Etag: sdk.String("reiciendis"),
                Version: sdk.Int(652103),
            },
        },
        AccessToken: sdk.String("ad"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("dolor"),
        Fields: sdk.String("necessitatibus"),
        Key: sdk.String("odit"),
        OauthToken: sdk.String("nemo"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quasi"),
        Resource: "iure",
        UploadType: sdk.String("doloribus"),
        UploadProtocol: sdk.String("debitis"),
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        TestIamPermissionsRequest: &shared.TestIamPermissionsRequest{
            Permissions: []string{
                "deleniti",
                "facilis",
                "in",
                "architecto",
            },
        },
        AccessToken: sdk.String("architecto"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("ullam"),
        Fields: sdk.String("expedita"),
        Key: sdk.String("nihil"),
        OauthToken: sdk.String("repellat"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quibusdam"),
        Resource: "sed",
        UploadType: sdk.String("saepe"),
        UploadProtocol: sdk.String("pariatur"),
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
                    "praesentium",
                },
                UseWildcards: sdk.Bool(false),
            },
        },
        AccessToken: sdk.String("natus"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("sunt"),
        Fields: sdk.String("quo"),
        Key: sdk.String("illum"),
        OauthToken: sdk.String("pariatur"),
        Parent: "maxime",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ea"),
        UploadType: sdk.String("excepturi"),
        UploadProtocol: sdk.String("odit"),
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        RequestBody: []byte("accusantium"),
        AccessToken: sdk.String("ab"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("quidem"),
        Fields: sdk.String("ipsam"),
        Key: sdk.String("voluptate"),
        OauthToken: sdk.String("autem"),
        Parent: "nam",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("eaque"),
        UploadType: sdk.String("pariatur"),
        UploadProtocol: sdk.String("nemo"),
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
