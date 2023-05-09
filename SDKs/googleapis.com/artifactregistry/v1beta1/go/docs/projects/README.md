# Projects

### Available Operations

* [ArtifactregistryProjectsLocationsList](#artifactregistryprojectslocationslist) - Lists information about the supported locations for this service.
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
            Description: sdk.String("at"),
            Format: shared.RepositoryFormatEnumPython.ToPointer(),
            KmsKeyName: sdk.String("molestiae"),
            Labels: map[string]string{
                "quod": "esse",
                "totam": "porro",
                "dolorum": "dicta",
                "nam": "officia",
            },
            Name: sdk.String("Wayne Lind"),
        },
        AccessToken: sdk.String("totam"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("commodi"),
        Fields: sdk.String("molestiae"),
        Key: sdk.String("modi"),
        OauthToken: sdk.String("qui"),
        Parent: "impedit",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("cum"),
        RepositoryID: sdk.String("esse"),
        UploadType: sdk.String("ipsum"),
        UploadProtocol: sdk.String("excepturi"),
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
        AccessToken: sdk.String("perferendis"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("natus"),
        Fields: sdk.String("sed"),
        Filter: sdk.String("iste"),
        Key: sdk.String("dolor"),
        OauthToken: sdk.String("natus"),
        PageSize: sdk.Int64(386489),
        PageToken: sdk.String("hic"),
        Parent: "saepe",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("fuga"),
        UploadType: sdk.String("in"),
        UploadProtocol: sdk.String("corporis"),
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("iure"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("quidem"),
        Fields: sdk.String("architecto"),
        Key: sdk.String("ipsa"),
        OauthToken: sdk.String("reiciendis"),
        OptionsRequestedPolicyVersion: sdk.Int64(666767),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("mollitia"),
        Resource: "laborum",
        UploadType: sdk.String("dolores"),
        UploadProtocol: sdk.String("dolorem"),
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
        AccessToken: sdk.String("explicabo"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("enim"),
        Fields: sdk.String("omnis"),
        Key: sdk.String("nemo"),
        OauthToken: sdk.String("minima"),
        PageSize: sdk.Int64(570197),
        PageToken: sdk.String("accusantium"),
        Parent: "iure",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("culpa"),
        UploadType: sdk.String("doloribus"),
        UploadProtocol: sdk.String("sapiente"),
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
        AccessToken: sdk.String("mollitia"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("culpa"),
        Fields: sdk.String("consequuntur"),
        Key: sdk.String("repellat"),
        OauthToken: sdk.String("mollitia"),
        PageSize: sdk.Int64(581850),
        PageToken: sdk.String("numquam"),
        Parent: "commodi",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quam"),
        UploadType: sdk.String("molestiae"),
        UploadProtocol: sdk.String("velit"),
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
            Name: sdk.String("Beatrice Brown"),
            Version: sdk.String("enim"),
        },
        AccessToken: sdk.String("odit"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("sequi"),
        Fields: sdk.String("tenetur"),
        Key: sdk.String("ipsam"),
        OauthToken: sdk.String("id"),
        Parent: "possimus",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("aut"),
        TagID: sdk.String("quasi"),
        UploadType: sdk.String("error"),
        UploadProtocol: sdk.String("temporibus"),
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("quasi"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("voluptatibus"),
        Fields: sdk.String("vero"),
        Filter: sdk.String("nihil"),
        Key: sdk.String("praesentium"),
        OauthToken: sdk.String("voluptatibus"),
        PageSize: sdk.Int64(55714),
        PageToken: sdk.String("omnis"),
        Parent: "voluptate",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("cum"),
        UploadType: sdk.String("perferendis"),
        UploadProtocol: sdk.String("doloremque"),
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
            Name: sdk.String("Shawna Carter"),
            Version: sdk.String("iusto"),
        },
        AccessToken: sdk.String("dicta"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("enim"),
        Fields: sdk.String("accusamus"),
        Key: sdk.String("commodi"),
        Name: "Eric Emmerich",
        OauthToken: sdk.String("excepturi"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("pariatur"),
        UpdateMask: sdk.String("modi"),
        UploadType: sdk.String("praesentium"),
        UploadProtocol: sdk.String("rem"),
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
        AccessToken: sdk.String("quasi"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("sint"),
        Fields: sdk.String("veritatis"),
        Force: sdk.Bool(false),
        Key: sdk.String("itaque"),
        Name: "Erin Altenwerth",
        OauthToken: sdk.String("explicabo"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("deserunt"),
        UploadType: sdk.String("distinctio"),
        UploadProtocol: sdk.String("quibusdam"),
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("modi"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("aliquid"),
        Fields: sdk.String("cupiditate"),
        Key: sdk.String("quos"),
        Name: "Louise Simonis Sr.",
        OauthToken: sdk.String("dolorum"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("excepturi"),
        UploadType: sdk.String("tempora"),
        UploadProtocol: sdk.String("facilis"),
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
        AccessToken: sdk.String("delectus"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("non"),
        Fields: sdk.String("eligendi"),
        Key: sdk.String("sint"),
        OauthToken: sdk.String("aliquid"),
        OrderBy: sdk.String("provident"),
        PageSize: sdk.Int64(896039),
        PageToken: sdk.String("sint"),
        Parent: "officia",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dolor"),
        UploadType: sdk.String("debitis"),
        UploadProtocol: sdk.String("a"),
        View: operations.ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsListViewEnumFull.ToPointer(),
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
                            Description: sdk.String("illum"),
                            Expression: sdk.String("maiores"),
                            Location: sdk.String("rerum"),
                            Title: sdk.String("Mr."),
                        },
                        Members: []string{
                            "cumque",
                            "facere",
                        },
                        Role: sdk.String("ea"),
                    },
                    shared.Binding{
                        Condition: &shared.Expr{
                            Description: sdk.String("aliquid"),
                            Expression: sdk.String("laborum"),
                            Location: sdk.String("accusamus"),
                            Title: sdk.String("Mrs."),
                        },
                        Members: []string{
                            "enim",
                            "accusamus",
                            "delectus",
                        },
                        Role: sdk.String("quidem"),
                    },
                },
                Etag: sdk.String("provident"),
                Version: sdk.Int(725255),
            },
        },
        AccessToken: sdk.String("id"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("deleniti"),
        Fields: sdk.String("sapiente"),
        Key: sdk.String("amet"),
        OauthToken: sdk.String("deserunt"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("nisi"),
        Resource: "vel",
        UploadType: sdk.String("natus"),
        UploadProtocol: sdk.String("omnis"),
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
                "nihil",
            },
        },
        AccessToken: sdk.String("magnam"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("id"),
        Fields: sdk.String("labore"),
        Key: sdk.String("labore"),
        OauthToken: sdk.String("suscipit"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("natus"),
        Resource: "nobis",
        UploadType: sdk.String("eum"),
        UploadProtocol: sdk.String("vero"),
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
