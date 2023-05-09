# ObjectAccessControls

### Available Operations

* [StorageObjectAccessControlsDelete](#storageobjectaccesscontrolsdelete) - Permanently deletes the ACL entry for the specified entity on the specified object.
* [StorageObjectAccessControlsGet](#storageobjectaccesscontrolsget) - Returns the ACL entry for the specified entity on the specified object.
* [StorageObjectAccessControlsInsert](#storageobjectaccesscontrolsinsert) - Creates a new ACL entry on the specified object.
* [StorageObjectAccessControlsList](#storageobjectaccesscontrolslist) - Retrieves ACL entries on the specified object.
* [StorageObjectAccessControlsPatch](#storageobjectaccesscontrolspatch) - Patches an ACL entry on the specified object.
* [StorageObjectAccessControlsUpdate](#storageobjectaccesscontrolsupdate) - Updates an ACL entry on the specified object.

## StorageObjectAccessControlsDelete

Permanently deletes the ACL entry for the specified entity on the specified object.

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
    res, err := s.ObjectAccessControls.StorageObjectAccessControlsDelete(ctx, operations.StorageObjectAccessControlsDeleteRequest{
        Alt: shared.AltEnumJSON.ToPointer(),
        Bucket: "eos",
        Entity: "reiciendis",
        Fields: sdk.String("earum"),
        Generation: sdk.String("reprehenderit"),
        Key: sdk.String("praesentium"),
        OauthToken: sdk.String("nemo"),
        Object: "repellat",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quisquam"),
        UploadType: sdk.String("sequi"),
        UserIP: sdk.String("nihil"),
        UserProject: sdk.String("deleniti"),
    }, operations.StorageObjectAccessControlsDeleteSecurity{
        Option1: &operations.StorageObjectAccessControlsDeleteSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## StorageObjectAccessControlsGet

Returns the ACL entry for the specified entity on the specified object.

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
    res, err := s.ObjectAccessControls.StorageObjectAccessControlsGet(ctx, operations.StorageObjectAccessControlsGetRequest{
        Alt: shared.AltEnumJSON.ToPointer(),
        Bucket: "illo",
        Entity: "labore",
        Fields: sdk.String("assumenda"),
        Generation: sdk.String("aliquam"),
        Key: sdk.String("quisquam"),
        OauthToken: sdk.String("provident"),
        Object: "laudantium",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("repudiandae"),
        UploadType: sdk.String("consequatur"),
        UserIP: sdk.String("maxime"),
        UserProject: sdk.String("aspernatur"),
    }, operations.StorageObjectAccessControlsGetSecurity{
        Option1: &operations.StorageObjectAccessControlsGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ObjectAccessControl != nil {
        // handle response
    }
}
```

## StorageObjectAccessControlsInsert

Creates a new ACL entry on the specified object.

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
    res, err := s.ObjectAccessControls.StorageObjectAccessControlsInsert(ctx, operations.StorageObjectAccessControlsInsertRequest{
        ObjectAccessControl: &shared.ObjectAccessControl{
            Bucket: sdk.String("nam"),
            Domain: sdk.String("expedita"),
            Email: sdk.String("Landen.Walker36@yahoo.com"),
            Entity: sdk.String("vero"),
            EntityID: sdk.String("similique"),
            Etag: sdk.String("repellendus"),
            Generation: sdk.String("iure"),
            ID: sdk.String("36c60050-3d8b-4b31-980f-739ae9e057eb"),
            Kind: sdk.String("corrupti"),
            Object: sdk.String("aperiam"),
            ProjectTeam: &shared.ObjectAccessControlProjectTeam{
                ProjectNumber: sdk.String("sint"),
                Team: sdk.String("accusamus"),
            },
            Role: sdk.String("eos"),
            SelfLink: sdk.String("totam"),
        },
        Alt: shared.AltEnumJSON.ToPointer(),
        Bucket: "dicta",
        Fields: sdk.String("voluptatem"),
        Generation: sdk.String("velit"),
        Key: sdk.String("dolor"),
        OauthToken: sdk.String("sunt"),
        Object: "a",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dolor"),
        UploadType: sdk.String("occaecati"),
        UserIP: sdk.String("atque"),
        UserProject: sdk.String("beatae"),
    }, operations.StorageObjectAccessControlsInsertSecurity{
        Option1: &operations.StorageObjectAccessControlsInsertSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ObjectAccessControl != nil {
        // handle response
    }
}
```

## StorageObjectAccessControlsList

Retrieves ACL entries on the specified object.

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
    res, err := s.ObjectAccessControls.StorageObjectAccessControlsList(ctx, operations.StorageObjectAccessControlsListRequest{
        Alt: shared.AltEnumJSON.ToPointer(),
        Bucket: "at",
        Fields: sdk.String("labore"),
        Generation: sdk.String("minus"),
        Key: sdk.String("esse"),
        OauthToken: sdk.String("voluptatem"),
        Object: "perferendis",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("rerum"),
        UploadType: sdk.String("ea"),
        UserIP: sdk.String("aperiam"),
        UserProject: sdk.String("dignissimos"),
    }, operations.StorageObjectAccessControlsListSecurity{
        Option1: &operations.StorageObjectAccessControlsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ObjectAccessControls != nil {
        // handle response
    }
}
```

## StorageObjectAccessControlsPatch

Patches an ACL entry on the specified object.

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
    res, err := s.ObjectAccessControls.StorageObjectAccessControlsPatch(ctx, operations.StorageObjectAccessControlsPatchRequest{
        ObjectAccessControl: &shared.ObjectAccessControl{
            Bucket: sdk.String("repellat"),
            Domain: sdk.String("velit"),
            Email: sdk.String("Lafayette.Feeney23@hotmail.com"),
            Entity: sdk.String("soluta"),
            EntityID: sdk.String("natus"),
            Etag: sdk.String("temporibus"),
            Generation: sdk.String("officia"),
            ID: sdk.String("3f2ceda7-e23f-4225-b411-faf4b7544e47"),
            Kind: sdk.String("explicabo"),
            Object: sdk.String("accusamus"),
            ProjectTeam: &shared.ObjectAccessControlProjectTeam{
                ProjectNumber: sdk.String("rem"),
                Team: sdk.String("aperiam"),
            },
            Role: sdk.String("odit"),
            SelfLink: sdk.String("deleniti"),
        },
        Alt: shared.AltEnumJSON.ToPointer(),
        Bucket: "enim",
        Entity: "voluptate",
        Fields: sdk.String("similique"),
        Generation: sdk.String("minima"),
        Key: sdk.String("libero"),
        OauthToken: sdk.String("magnam"),
        Object: "sit",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("modi"),
        UploadType: sdk.String("eum"),
        UserIP: sdk.String("nesciunt"),
        UserProject: sdk.String("mollitia"),
    }, operations.StorageObjectAccessControlsPatchSecurity{
        Option1: &operations.StorageObjectAccessControlsPatchSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ObjectAccessControl != nil {
        // handle response
    }
}
```

## StorageObjectAccessControlsUpdate

Updates an ACL entry on the specified object.

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
    res, err := s.ObjectAccessControls.StorageObjectAccessControlsUpdate(ctx, operations.StorageObjectAccessControlsUpdateRequest{
        ObjectAccessControl: &shared.ObjectAccessControl{
            Bucket: sdk.String("dignissimos"),
            Domain: sdk.String("fugiat"),
            Email: sdk.String("Jarret.Harris26@yahoo.com"),
            Entity: sdk.String("aut"),
            EntityID: sdk.String("aut"),
            Etag: sdk.String("eveniet"),
            Generation: sdk.String("odio"),
            ID: sdk.String("64ad7334-ec1b-4781-b36a-08088d100efa"),
            Kind: sdk.String("nulla"),
            Object: sdk.String("officia"),
            ProjectTeam: &shared.ObjectAccessControlProjectTeam{
                ProjectNumber: sdk.String("sed"),
                Team: sdk.String("voluptatem"),
            },
            Role: sdk.String("alias"),
            SelfLink: sdk.String("eveniet"),
        },
        Alt: shared.AltEnumJSON.ToPointer(),
        Bucket: "hic",
        Entity: "voluptatem",
        Fields: sdk.String("incidunt"),
        Generation: sdk.String("qui"),
        Key: sdk.String("qui"),
        OauthToken: sdk.String("necessitatibus"),
        Object: "harum",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("explicabo"),
        UploadType: sdk.String("beatae"),
        UserIP: sdk.String("aliquid"),
        UserProject: sdk.String("modi"),
    }, operations.StorageObjectAccessControlsUpdateSecurity{
        Option1: &operations.StorageObjectAccessControlsUpdateSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ObjectAccessControl != nil {
        // handle response
    }
}
```
