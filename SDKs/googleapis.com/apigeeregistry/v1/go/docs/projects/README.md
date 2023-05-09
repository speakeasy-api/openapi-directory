# Projects

### Available Operations

* [ApigeeregistryProjectsLocationsApisCreate](#apigeeregistryprojectslocationsapiscreate) - Creates a specified API.
* [ApigeeregistryProjectsLocationsApisDeploymentsCreate](#apigeeregistryprojectslocationsapisdeploymentscreate) - Creates a specified deployment.
* [ApigeeregistryProjectsLocationsApisDeploymentsList](#apigeeregistryprojectslocationsapisdeploymentslist) - Returns matching deployments.
* [ApigeeregistryProjectsLocationsApisList](#apigeeregistryprojectslocationsapislist) - Returns matching APIs.
* [ApigeeregistryProjectsLocationsApisVersionsCreate](#apigeeregistryprojectslocationsapisversionscreate) - Creates a specified version.
* [ApigeeregistryProjectsLocationsApisVersionsList](#apigeeregistryprojectslocationsapisversionslist) - Returns matching versions.
* [ApigeeregistryProjectsLocationsApisVersionsSpecsCreate](#apigeeregistryprojectslocationsapisversionsspecscreate) - Creates a specified spec.
* [ApigeeregistryProjectsLocationsApisVersionsSpecsDeleteRevision](#apigeeregistryprojectslocationsapisversionsspecsdeleterevision) - Deletes a revision of a spec.
* [ApigeeregistryProjectsLocationsApisVersionsSpecsList](#apigeeregistryprojectslocationsapisversionsspecslist) - Returns matching specs.
* [ApigeeregistryProjectsLocationsApisVersionsSpecsListRevisions](#apigeeregistryprojectslocationsapisversionsspecslistrevisions) - Lists all revisions of a spec. Revisions are returned in descending order of revision creation time.
* [ApigeeregistryProjectsLocationsApisVersionsSpecsPatch](#apigeeregistryprojectslocationsapisversionsspecspatch) - Used to modify a specified spec.
* [ApigeeregistryProjectsLocationsApisVersionsSpecsRollback](#apigeeregistryprojectslocationsapisversionsspecsrollback) - Sets the current revision to a specified prior revision. Note that this creates a new revision with a new revision ID.
* [ApigeeregistryProjectsLocationsApisVersionsSpecsTagRevision](#apigeeregistryprojectslocationsapisversionsspecstagrevision) - Adds a tag to a specified revision of a spec.
* [ApigeeregistryProjectsLocationsArtifactsCreate](#apigeeregistryprojectslocationsartifactscreate) - Creates a specified artifact.
* [ApigeeregistryProjectsLocationsArtifactsGetContents](#apigeeregistryprojectslocationsartifactsgetcontents) - Returns the contents of a specified artifact. If artifacts are stored with GZip compression, the default behavior is to return the artifact uncompressed (the mime_type response field indicates the exact format returned).
* [ApigeeregistryProjectsLocationsArtifactsList](#apigeeregistryprojectslocationsartifactslist) - Returns matching artifacts.
* [ApigeeregistryProjectsLocationsArtifactsReplaceArtifact](#apigeeregistryprojectslocationsartifactsreplaceartifact) - Used to replace a specified artifact.
* [ApigeeregistryProjectsLocationsInstancesCreate](#apigeeregistryprojectslocationsinstancescreate) - Provisions instance resources for the Registry.
* [ApigeeregistryProjectsLocationsList](#apigeeregistryprojectslocationslist) - Lists information about the supported locations for this service.
* [ApigeeregistryProjectsLocationsOperationsCancel](#apigeeregistryprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [ApigeeregistryProjectsLocationsOperationsDelete](#apigeeregistryprojectslocationsoperationsdelete) - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* [ApigeeregistryProjectsLocationsOperationsGet](#apigeeregistryprojectslocationsoperationsget) - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* [ApigeeregistryProjectsLocationsOperationsList](#apigeeregistryprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
* [ApigeeregistryProjectsLocationsRuntimeGetIamPolicy](#apigeeregistryprojectslocationsruntimegetiampolicy) - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* [ApigeeregistryProjectsLocationsRuntimeSetIamPolicy](#apigeeregistryprojectslocationsruntimesetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* [ApigeeregistryProjectsLocationsRuntimeTestIamPermissions](#apigeeregistryprojectslocationsruntimetestiampermissions) - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

## ApigeeregistryProjectsLocationsApisCreate

Creates a specified API.

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
    res, err := s.Projects.ApigeeregistryProjectsLocationsApisCreate(ctx, operations.ApigeeregistryProjectsLocationsApisCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        APIInput: &shared.APIInput{
            Annotations: map[string]string{
                "quo": "odit",
                "at": "at",
                "maiores": "molestiae",
                "quod": "quod",
            },
            Availability: sdk.String("esse"),
            Description: sdk.String("totam"),
            DisplayName: sdk.String("porro"),
            Labels: map[string]string{
                "dicta": "nam",
                "officia": "occaecati",
                "fugit": "deleniti",
            },
            Name: sdk.String("Ms. Earnest Lebsack"),
            RecommendedDeployment: sdk.String("modi"),
            RecommendedVersion: sdk.String("qui"),
        },
        AccessToken: sdk.String("impedit"),
        Alt: shared.AltEnumProto.ToPointer(),
        APIID: sdk.String("esse"),
        Callback: sdk.String("ipsum"),
        Fields: sdk.String("excepturi"),
        Key: sdk.String("aspernatur"),
        OauthToken: sdk.String("perferendis"),
        Parent: "ad",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("natus"),
        UploadType: sdk.String("sed"),
        UploadProtocol: sdk.String("iste"),
    }, operations.ApigeeregistryProjectsLocationsApisCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.API != nil {
        // handle response
    }
}
```

## ApigeeregistryProjectsLocationsApisDeploymentsCreate

Creates a specified deployment.

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
    res, err := s.Projects.ApigeeregistryProjectsLocationsApisDeploymentsCreate(ctx, operations.ApigeeregistryProjectsLocationsApisDeploymentsCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        APIDeploymentInput: &shared.APIDeploymentInput{
            AccessGuidance: sdk.String("natus"),
            Annotations: map[string]string{
                "hic": "saepe",
                "fuga": "in",
            },
            APISpecRevision: sdk.String("corporis"),
            Description: sdk.String("iste"),
            DisplayName: sdk.String("iure"),
            EndpointURI: sdk.String("saepe"),
            ExternalChannelURI: sdk.String("quidem"),
            IntendedAudience: sdk.String("architecto"),
            Labels: map[string]string{
                "reiciendis": "est",
            },
            Name: sdk.String("Cameron Dach"),
        },
        AccessToken: sdk.String("explicabo"),
        Alt: shared.AltEnumProto.ToPointer(),
        APIDeploymentID: sdk.String("enim"),
        Callback: sdk.String("omnis"),
        Fields: sdk.String("nemo"),
        Key: sdk.String("minima"),
        OauthToken: sdk.String("excepturi"),
        Parent: "accusantium",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("iure"),
        UploadType: sdk.String("culpa"),
        UploadProtocol: sdk.String("doloribus"),
    }, operations.ApigeeregistryProjectsLocationsApisDeploymentsCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APIDeployment != nil {
        // handle response
    }
}
```

## ApigeeregistryProjectsLocationsApisDeploymentsList

Returns matching deployments.

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
    res, err := s.Projects.ApigeeregistryProjectsLocationsApisDeploymentsList(ctx, operations.ApigeeregistryProjectsLocationsApisDeploymentsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("architecto"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("dolorem"),
        Fields: sdk.String("culpa"),
        Filter: sdk.String("consequuntur"),
        Key: sdk.String("repellat"),
        OauthToken: sdk.String("mollitia"),
        OrderBy: sdk.String("occaecati"),
        PageSize: sdk.Int64(253291),
        PageToken: sdk.String("commodi"),
        Parent: "quam",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("molestiae"),
        UploadType: sdk.String("velit"),
        UploadProtocol: sdk.String("error"),
    }, operations.ApigeeregistryProjectsLocationsApisDeploymentsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListAPIDeploymentsResponse != nil {
        // handle response
    }
}
```

## ApigeeregistryProjectsLocationsApisList

Returns matching APIs.

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
    res, err := s.Projects.ApigeeregistryProjectsLocationsApisList(ctx, operations.ApigeeregistryProjectsLocationsApisListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("quis"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("laborum"),
        Fields: sdk.String("animi"),
        Filter: sdk.String("enim"),
        Key: sdk.String("odit"),
        OauthToken: sdk.String("quo"),
        OrderBy: sdk.String("sequi"),
        PageSize: sdk.Int64(949572),
        PageToken: sdk.String("ipsam"),
        Parent: "id",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("possimus"),
        UploadType: sdk.String("aut"),
        UploadProtocol: sdk.String("quasi"),
    }, operations.ApigeeregistryProjectsLocationsApisListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListApisResponse != nil {
        // handle response
    }
}
```

## ApigeeregistryProjectsLocationsApisVersionsCreate

Creates a specified version.

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
    res, err := s.Projects.ApigeeregistryProjectsLocationsApisVersionsCreate(ctx, operations.ApigeeregistryProjectsLocationsApisVersionsCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        APIVersionInput: &shared.APIVersionInput{
            Annotations: map[string]string{
                "laborum": "quasi",
                "reiciendis": "voluptatibus",
                "vero": "nihil",
                "praesentium": "voluptatibus",
            },
            Description: sdk.String("ipsa"),
            DisplayName: sdk.String("omnis"),
            Labels: map[string]string{
                "cum": "perferendis",
                "doloremque": "reprehenderit",
            },
            Name: sdk.String("Shawna Carter"),
            PrimarySpec: sdk.String("iusto"),
            State: sdk.String("dicta"),
        },
        AccessToken: sdk.String("harum"),
        Alt: shared.AltEnumJSON.ToPointer(),
        APIVersionID: sdk.String("accusamus"),
        Callback: sdk.String("commodi"),
        Fields: sdk.String("repudiandae"),
        Key: sdk.String("quae"),
        OauthToken: sdk.String("ipsum"),
        Parent: "quidem",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("molestias"),
        UploadType: sdk.String("excepturi"),
        UploadProtocol: sdk.String("pariatur"),
    }, operations.ApigeeregistryProjectsLocationsApisVersionsCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APIVersion != nil {
        // handle response
    }
}
```

## ApigeeregistryProjectsLocationsApisVersionsList

Returns matching versions.

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
    res, err := s.Projects.ApigeeregistryProjectsLocationsApisVersionsList(ctx, operations.ApigeeregistryProjectsLocationsApisVersionsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("praesentium"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("voluptates"),
        Fields: sdk.String("quasi"),
        Filter: sdk.String("repudiandae"),
        Key: sdk.String("sint"),
        OauthToken: sdk.String("veritatis"),
        OrderBy: sdk.String("itaque"),
        PageSize: sdk.Int64(277718),
        PageToken: sdk.String("enim"),
        Parent: "consequatur",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("est"),
        UploadType: sdk.String("quibusdam"),
        UploadProtocol: sdk.String("explicabo"),
    }, operations.ApigeeregistryProjectsLocationsApisVersionsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListAPIVersionsResponse != nil {
        // handle response
    }
}
```

## ApigeeregistryProjectsLocationsApisVersionsSpecsCreate

Creates a specified spec.

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
    res, err := s.Projects.ApigeeregistryProjectsLocationsApisVersionsSpecsCreate(ctx, operations.ApigeeregistryProjectsLocationsApisVersionsSpecsCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        APISpecInput: &shared.APISpecInput{
            Annotations: map[string]string{
                "quibusdam": "labore",
                "modi": "qui",
                "aliquid": "cupiditate",
            },
            Contents: sdk.String("quos"),
            Description: sdk.String("perferendis"),
            Filename: sdk.String("magni"),
            Labels: map[string]string{
                "ipsam": "alias",
                "fugit": "dolorum",
                "excepturi": "tempora",
                "facilis": "tempore",
            },
            MimeType: sdk.String("labore"),
            Name: sdk.String("Andre Franey"),
            SourceURI: sdk.String("aliquid"),
        },
        AccessToken: sdk.String("provident"),
        Alt: shared.AltEnumProto.ToPointer(),
        APISpecID: sdk.String("sint"),
        Callback: sdk.String("officia"),
        Fields: sdk.String("dolor"),
        Key: sdk.String("debitis"),
        OauthToken: sdk.String("a"),
        Parent: "dolorum",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("in"),
        UploadType: sdk.String("in"),
        UploadProtocol: sdk.String("illum"),
    }, operations.ApigeeregistryProjectsLocationsApisVersionsSpecsCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APISpec != nil {
        // handle response
    }
}
```

## ApigeeregistryProjectsLocationsApisVersionsSpecsDeleteRevision

Deletes a revision of a spec.

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
    res, err := s.Projects.ApigeeregistryProjectsLocationsApisVersionsSpecsDeleteRevision(ctx, operations.ApigeeregistryProjectsLocationsApisVersionsSpecsDeleteRevisionRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("rerum"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("magnam"),
        Fields: sdk.String("cumque"),
        Key: sdk.String("facere"),
        Name: "Beth Padberg",
        OauthToken: sdk.String("occaecati"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("enim"),
        UploadType: sdk.String("accusamus"),
        UploadProtocol: sdk.String("delectus"),
    }, operations.ApigeeregistryProjectsLocationsApisVersionsSpecsDeleteRevisionSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APISpec != nil {
        // handle response
    }
}
```

## ApigeeregistryProjectsLocationsApisVersionsSpecsList

Returns matching specs.

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
    res, err := s.Projects.ApigeeregistryProjectsLocationsApisVersionsSpecsList(ctx, operations.ApigeeregistryProjectsLocationsApisVersionsSpecsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("provident"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("id"),
        Fields: sdk.String("blanditiis"),
        Filter: sdk.String("deleniti"),
        Key: sdk.String("sapiente"),
        OauthToken: sdk.String("amet"),
        OrderBy: sdk.String("deserunt"),
        PageSize: sdk.Int64(394869),
        PageToken: sdk.String("vel"),
        Parent: "natus",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("omnis"),
        UploadType: sdk.String("molestiae"),
        UploadProtocol: sdk.String("perferendis"),
    }, operations.ApigeeregistryProjectsLocationsApisVersionsSpecsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListAPISpecsResponse != nil {
        // handle response
    }
}
```

## ApigeeregistryProjectsLocationsApisVersionsSpecsListRevisions

Lists all revisions of a spec. Revisions are returned in descending order of revision creation time.

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
    res, err := s.Projects.ApigeeregistryProjectsLocationsApisVersionsSpecsListRevisions(ctx, operations.ApigeeregistryProjectsLocationsApisVersionsSpecsListRevisionsRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("magnam"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("id"),
        Fields: sdk.String("labore"),
        Filter: sdk.String("labore"),
        Key: sdk.String("suscipit"),
        Name: "Robin Keebler",
        OauthToken: sdk.String("architecto"),
        PageSize: sdk.Int64(298282),
        PageToken: sdk.String("et"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("excepturi"),
        UploadType: sdk.String("ullam"),
        UploadProtocol: sdk.String("provident"),
    }, operations.ApigeeregistryProjectsLocationsApisVersionsSpecsListRevisionsSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListAPISpecRevisionsResponse != nil {
        // handle response
    }
}
```

## ApigeeregistryProjectsLocationsApisVersionsSpecsPatch

Used to modify a specified spec.

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
    res, err := s.Projects.ApigeeregistryProjectsLocationsApisVersionsSpecsPatch(ctx, operations.ApigeeregistryProjectsLocationsApisVersionsSpecsPatchRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        APISpecInput: &shared.APISpecInput{
            Annotations: map[string]string{
                "accusantium": "mollitia",
                "reiciendis": "mollitia",
                "ad": "eum",
            },
            Contents: sdk.String("dolor"),
            Description: sdk.String("necessitatibus"),
            Filename: sdk.String("odit"),
            Labels: map[string]string{
                "quasi": "iure",
                "doloribus": "debitis",
            },
            MimeType: sdk.String("eius"),
            Name: sdk.String("Alfredo Prosacco Sr."),
            SourceURI: sdk.String("repudiandae"),
        },
        AccessToken: sdk.String("ullam"),
        AllowMissing: sdk.Bool(false),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("nihil"),
        Fields: sdk.String("repellat"),
        Key: sdk.String("quibusdam"),
        Name: "Mr. Jenna Stroman",
        OauthToken: sdk.String("natus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("magni"),
        UpdateMask: sdk.String("sunt"),
        UploadType: sdk.String("quo"),
        UploadProtocol: sdk.String("illum"),
    }, operations.ApigeeregistryProjectsLocationsApisVersionsSpecsPatchSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APISpec != nil {
        // handle response
    }
}
```

## ApigeeregistryProjectsLocationsApisVersionsSpecsRollback

Sets the current revision to a specified prior revision. Note that this creates a new revision with a new revision ID.

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
    res, err := s.Projects.ApigeeregistryProjectsLocationsApisVersionsSpecsRollback(ctx, operations.ApigeeregistryProjectsLocationsApisVersionsSpecsRollbackRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        RollbackAPISpecRequest: &shared.RollbackAPISpecRequest{
            RevisionID: sdk.String("maxime"),
        },
        AccessToken: sdk.String("ea"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("odit"),
        Fields: sdk.String("ea"),
        Key: sdk.String("accusantium"),
        Name: "Ebony Predovic",
        OauthToken: sdk.String("autem"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("nam"),
        UploadType: sdk.String("eaque"),
        UploadProtocol: sdk.String("pariatur"),
    }, operations.ApigeeregistryProjectsLocationsApisVersionsSpecsRollbackSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APISpec != nil {
        // handle response
    }
}
```

## ApigeeregistryProjectsLocationsApisVersionsSpecsTagRevision

Adds a tag to a specified revision of a spec.

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
    res, err := s.Projects.ApigeeregistryProjectsLocationsApisVersionsSpecsTagRevision(ctx, operations.ApigeeregistryProjectsLocationsApisVersionsSpecsTagRevisionRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        TagAPISpecRevisionRequest: &shared.TagAPISpecRevisionRequest{
            Tag: sdk.String("voluptatibus"),
        },
        AccessToken: sdk.String("perferendis"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("amet"),
        Fields: sdk.String("aut"),
        Key: sdk.String("cumque"),
        Name: "Mindy Renner",
        OauthToken: sdk.String("quis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("totam"),
        UploadType: sdk.String("dignissimos"),
        UploadProtocol: sdk.String("eaque"),
    }, operations.ApigeeregistryProjectsLocationsApisVersionsSpecsTagRevisionSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APISpec != nil {
        // handle response
    }
}
```

## ApigeeregistryProjectsLocationsArtifactsCreate

Creates a specified artifact.

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
    res, err := s.Projects.ApigeeregistryProjectsLocationsArtifactsCreate(ctx, operations.ApigeeregistryProjectsLocationsArtifactsCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        ArtifactInput: &shared.ArtifactInput{
            Annotations: map[string]string{
                "eos": "perferendis",
            },
            Contents: sdk.String("dolores"),
            Labels: map[string]string{
                "quam": "dolor",
                "vero": "nostrum",
                "hic": "recusandae",
                "omnis": "facilis",
            },
            MimeType: sdk.String("perspiciatis"),
            Name: sdk.String("Robyn Cruickshank"),
        },
        AccessToken: sdk.String("eaque"),
        Alt: shared.AltEnumMedia.ToPointer(),
        ArtifactID: sdk.String("rerum"),
        Callback: sdk.String("adipisci"),
        Fields: sdk.String("asperiores"),
        Key: sdk.String("earum"),
        OauthToken: sdk.String("modi"),
        Parent: "iste",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dolorum"),
        UploadType: sdk.String("deleniti"),
        UploadProtocol: sdk.String("pariatur"),
    }, operations.ApigeeregistryProjectsLocationsArtifactsCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Artifact != nil {
        // handle response
    }
}
```

## ApigeeregistryProjectsLocationsArtifactsGetContents

Returns the contents of a specified artifact. If artifacts are stored with GZip compression, the default behavior is to return the artifact uncompressed (the mime_type response field indicates the exact format returned).

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
    res, err := s.Projects.ApigeeregistryProjectsLocationsArtifactsGetContents(ctx, operations.ApigeeregistryProjectsLocationsArtifactsGetContentsRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("nobis"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("delectus"),
        Fields: sdk.String("quaerat"),
        Key: sdk.String("quos"),
        Name: "Florence Ebert",
        OauthToken: sdk.String("ipsum"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("hic"),
        UploadType: sdk.String("excepturi"),
        UploadProtocol: sdk.String("cum"),
    }, operations.ApigeeregistryProjectsLocationsArtifactsGetContentsSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.HTTPBody != nil {
        // handle response
    }
}
```

## ApigeeregistryProjectsLocationsArtifactsList

Returns matching artifacts.

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
    res, err := s.Projects.ApigeeregistryProjectsLocationsArtifactsList(ctx, operations.ApigeeregistryProjectsLocationsArtifactsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("dignissimos"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("amet"),
        Fields: sdk.String("dolorum"),
        Filter: sdk.String("numquam"),
        Key: sdk.String("veritatis"),
        OauthToken: sdk.String("ipsa"),
        OrderBy: sdk.String("ipsa"),
        PageSize: sdk.Int64(434417),
        PageToken: sdk.String("odio"),
        Parent: "quaerat",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("accusamus"),
        UploadType: sdk.String("quidem"),
        UploadProtocol: sdk.String("voluptatibus"),
    }, operations.ApigeeregistryProjectsLocationsArtifactsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListArtifactsResponse != nil {
        // handle response
    }
}
```

## ApigeeregistryProjectsLocationsArtifactsReplaceArtifact

Used to replace a specified artifact.

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
    res, err := s.Projects.ApigeeregistryProjectsLocationsArtifactsReplaceArtifact(ctx, operations.ApigeeregistryProjectsLocationsArtifactsReplaceArtifactRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        ArtifactInput: &shared.ArtifactInput{
            Annotations: map[string]string{
                "eos": "atque",
                "sit": "fugiat",
                "ab": "soluta",
            },
            Contents: sdk.String("dolorum"),
            Labels: map[string]string{
                "voluptate": "dolorum",
                "deleniti": "omnis",
            },
            MimeType: sdk.String("necessitatibus"),
            Name: sdk.String("Emmett Kovacek"),
        },
        AccessToken: sdk.String("id"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("eius"),
        Fields: sdk.String("aspernatur"),
        Key: sdk.String("perferendis"),
        Name: "Marianne Thompson",
        OauthToken: sdk.String("suscipit"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("deserunt"),
        UploadType: sdk.String("provident"),
        UploadProtocol: sdk.String("minima"),
    }, operations.ApigeeregistryProjectsLocationsArtifactsReplaceArtifactSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Artifact != nil {
        // handle response
    }
}
```

## ApigeeregistryProjectsLocationsInstancesCreate

Provisions instance resources for the Registry.

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
    res, err := s.Projects.ApigeeregistryProjectsLocationsInstancesCreate(ctx, operations.ApigeeregistryProjectsLocationsInstancesCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        InstanceInput: &shared.InstanceInput{
            Config: &shared.ConfigInput{
                CmekKeyName: sdk.String("totam"),
            },
            Name: sdk.String("James Swaniawski"),
        },
        AccessToken: sdk.String("vel"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("officiis"),
        Fields: sdk.String("qui"),
        InstanceID: sdk.String("dolorum"),
        Key: sdk.String("a"),
        OauthToken: sdk.String("esse"),
        Parent: "harum",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("iusto"),
        UploadType: sdk.String("ipsum"),
        UploadProtocol: sdk.String("quisquam"),
    }, operations.ApigeeregistryProjectsLocationsInstancesCreateSecurity{
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

## ApigeeregistryProjectsLocationsList

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
    res, err := s.Projects.ApigeeregistryProjectsLocationsList(ctx, operations.ApigeeregistryProjectsLocationsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("amet"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("accusamus"),
        Fields: sdk.String("numquam"),
        Filter: sdk.String("enim"),
        Key: sdk.String("dolorem"),
        Name: "Miss Jimmie Kozey",
        OauthToken: sdk.String("sed"),
        PageSize: sdk.Int64(424685),
        PageToken: sdk.String("libero"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("voluptas"),
        UploadType: sdk.String("deserunt"),
        UploadProtocol: sdk.String("quam"),
    }, operations.ApigeeregistryProjectsLocationsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListLocationsResponse != nil {
        // handle response
    }
}
```

## ApigeeregistryProjectsLocationsOperationsCancel

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.

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
    res, err := s.Projects.ApigeeregistryProjectsLocationsOperationsCancel(ctx, operations.ApigeeregistryProjectsLocationsOperationsCancelRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        RequestBody: map[string]interface{}{
            "qui": "cupiditate",
            "maxime": "pariatur",
        },
        AccessToken: sdk.String("soluta"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("laborum"),
        Fields: sdk.String("totam"),
        Key: sdk.String("incidunt"),
        Name: "Bonnie Raynor",
        OauthToken: sdk.String("quam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("molestias"),
        UploadType: sdk.String("temporibus"),
        UploadProtocol: sdk.String("qui"),
    }, operations.ApigeeregistryProjectsLocationsOperationsCancelSecurity{
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

## ApigeeregistryProjectsLocationsOperationsDelete

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.

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
    res, err := s.Projects.ApigeeregistryProjectsLocationsOperationsDelete(ctx, operations.ApigeeregistryProjectsLocationsOperationsDeleteRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("fugit"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("odio"),
        Fields: sdk.String("sunt"),
        Force: sdk.Bool(false),
        Key: sdk.String("ullam"),
        Name: "Terrell Bartell",
        OauthToken: sdk.String("nobis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("et"),
        UploadType: sdk.String("saepe"),
        UploadProtocol: sdk.String("ipsum"),
    }, operations.ApigeeregistryProjectsLocationsOperationsDeleteSecurity{
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

## ApigeeregistryProjectsLocationsOperationsGet

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

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
    res, err := s.Projects.ApigeeregistryProjectsLocationsOperationsGet(ctx, operations.ApigeeregistryProjectsLocationsOperationsGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("nobis"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("tempore"),
        Fields: sdk.String("cupiditate"),
        Key: sdk.String("aperiam"),
        Name: "Mike Greenholt",
        OauthToken: sdk.String("dolorum"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("architecto"),
        UploadType: sdk.String("quae"),
        UploadProtocol: sdk.String("aut"),
    }, operations.ApigeeregistryProjectsLocationsOperationsGetSecurity{
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

## ApigeeregistryProjectsLocationsOperationsList

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.

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
    res, err := s.Projects.ApigeeregistryProjectsLocationsOperationsList(ctx, operations.ApigeeregistryProjectsLocationsOperationsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("itaque"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("est"),
        Fields: sdk.String("repellendus"),
        Filter: sdk.String("porro"),
        Key: sdk.String("doloribus"),
        Name: "Olivia McGlynn IV",
        OauthToken: sdk.String("odio"),
        PageSize: sdk.Int64(580447),
        PageToken: sdk.String("voluptatibus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quisquam"),
        UploadType: sdk.String("vero"),
        UploadProtocol: sdk.String("omnis"),
    }, operations.ApigeeregistryProjectsLocationsOperationsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListOperationsResponse != nil {
        // handle response
    }
}
```

## ApigeeregistryProjectsLocationsRuntimeGetIamPolicy

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

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
    res, err := s.Projects.ApigeeregistryProjectsLocationsRuntimeGetIamPolicy(ctx, operations.ApigeeregistryProjectsLocationsRuntimeGetIamPolicyRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("ipsum"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("voluptate"),
        Fields: sdk.String("consectetur"),
        Key: sdk.String("vero"),
        OauthToken: sdk.String("tenetur"),
        OptionsRequestedPolicyVersion: sdk.Int64(492268),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("hic"),
        Resource: "distinctio",
        UploadType: sdk.String("quod"),
        UploadProtocol: sdk.String("odio"),
    }, operations.ApigeeregistryProjectsLocationsRuntimeGetIamPolicySecurity{
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

## ApigeeregistryProjectsLocationsRuntimeSetIamPolicy

Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.

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
    res, err := s.Projects.ApigeeregistryProjectsLocationsRuntimeSetIamPolicy(ctx, operations.ApigeeregistryProjectsLocationsRuntimeSetIamPolicyRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        SetIamPolicyRequest: &shared.SetIamPolicyRequest{
            Policy: &shared.Policy{
                Bindings: []shared.Binding{
                    shared.Binding{
                        Condition: &shared.Expr{
                            Description: sdk.String("vero"),
                            Expression: sdk.String("ducimus"),
                            Location: sdk.String("dolore"),
                            Title: sdk.String("Dr."),
                        },
                        Members: []string{
                            "sequi",
                            "natus",
                            "impedit",
                            "aut",
                        },
                        Role: sdk.String("voluptatibus"),
                    },
                    shared.Binding{
                        Condition: &shared.Expr{
                            Description: sdk.String("exercitationem"),
                            Expression: sdk.String("nulla"),
                            Location: sdk.String("fugit"),
                            Title: sdk.String("Miss"),
                        },
                        Members: []string{
                            "doloribus",
                            "iusto",
                            "eligendi",
                            "ducimus",
                        },
                        Role: sdk.String("alias"),
                    },
                    shared.Binding{
                        Condition: &shared.Expr{
                            Description: sdk.String("officia"),
                            Expression: sdk.String("tempora"),
                            Location: sdk.String("ipsam"),
                            Title: sdk.String("Ms."),
                        },
                        Members: []string{
                            "vel",
                        },
                        Role: sdk.String("possimus"),
                    },
                },
                Etag: sdk.String("magnam"),
                Version: sdk.Int(189848),
            },
        },
        AccessToken: sdk.String("ex"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("dicta"),
        Fields: sdk.String("dolor"),
        Key: sdk.String("maiores"),
        OauthToken: sdk.String("quasi"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ex"),
        Resource: "nulla",
        UploadType: sdk.String("excepturi"),
        UploadProtocol: sdk.String("voluptatibus"),
    }, operations.ApigeeregistryProjectsLocationsRuntimeSetIamPolicySecurity{
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

## ApigeeregistryProjectsLocationsRuntimeTestIamPermissions

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

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
    res, err := s.Projects.ApigeeregistryProjectsLocationsRuntimeTestIamPermissions(ctx, operations.ApigeeregistryProjectsLocationsRuntimeTestIamPermissionsRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        TestIamPermissionsRequest: &shared.TestIamPermissionsRequest{
            Permissions: []string{
                "quisquam",
                "saepe",
                "ea",
                "impedit",
            },
        },
        AccessToken: sdk.String("corporis"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("aliquid"),
        Fields: sdk.String("inventore"),
        Key: sdk.String("magnam"),
        OauthToken: sdk.String("ea"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quo"),
        Resource: "consectetur",
        UploadType: sdk.String("recusandae"),
        UploadProtocol: sdk.String("aspernatur"),
    }, operations.ApigeeregistryProjectsLocationsRuntimeTestIamPermissionsSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TestIamPermissionsResponse != nil {
        // handle response
    }
}
```
