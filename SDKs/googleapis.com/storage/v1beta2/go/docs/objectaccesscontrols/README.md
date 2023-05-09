# ObjectAccessControls

### Available Operations

* [StorageObjectAccessControlsDelete](#storageobjectaccesscontrolsdelete) - Permanently deletes the ACL entry for the specified entity on the specified object.
* [StorageObjectAccessControlsGet](#storageobjectaccesscontrolsget) - Returns the ACL entry for the specified entity on the specified object.
* [StorageObjectAccessControlsInsert](#storageobjectaccesscontrolsinsert) - Creates a new ACL entry on the specified object.
* [StorageObjectAccessControlsList](#storageobjectaccesscontrolslist) - Retrieves ACL entries on the specified object.
* [StorageObjectAccessControlsPatch](#storageobjectaccesscontrolspatch) - Updates an ACL entry on the specified object. This method supports patch semantics.
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
        Bucket: "doloremque",
        Entity: "dicta",
        Fields: sdk.String("odio"),
        Generation: sdk.String("tempora"),
        Key: sdk.String("esse"),
        OauthToken: sdk.String("ex"),
        Object: "consectetur",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("aliquid"),
        UserIP: sdk.String("ipsa"),
    }, operations.StorageObjectAccessControlsDeleteSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
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
        Bucket: "laborum",
        Entity: "sunt",
        Fields: sdk.String("nostrum"),
        Generation: sdk.String("fugiat"),
        Key: sdk.String("expedita"),
        OauthToken: sdk.String("aliquid"),
        Object: "officia",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("suscipit"),
        UserIP: sdk.String("aliquid"),
    }, operations.StorageObjectAccessControlsGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
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
            Bucket: sdk.String("perferendis"),
            Domain: sdk.String("eum"),
            Email: sdk.String("Leta62@yahoo.com"),
            Entity: sdk.String("possimus"),
            EntityID: sdk.String("voluptates"),
            Etag: sdk.String("mollitia"),
            Generation: sdk.String("laborum"),
            ID: sdk.String("b5851d6c-645b-408b-a189-1baa0fe1ade0"),
            Kind: sdk.String("alias"),
            Object: sdk.String("deleniti"),
            Role: sdk.String("earum"),
            SelfLink: sdk.String("ex"),
        },
        Alt: shared.AltEnumJSON.ToPointer(),
        Bucket: "sapiente",
        Fields: sdk.String("rem"),
        Generation: sdk.String("minus"),
        Key: sdk.String("nemo"),
        OauthToken: sdk.String("asperiores"),
        Object: "ratione",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ullam"),
        UserIP: sdk.String("perferendis"),
    }, operations.StorageObjectAccessControlsInsertSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
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
        Bucket: "illum",
        Fields: sdk.String("totam"),
        Generation: sdk.String("impedit"),
        Key: sdk.String("quibusdam"),
        OauthToken: sdk.String("nam"),
        Object: "ipsam",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("culpa"),
        UserIP: sdk.String("dolor"),
    }, operations.StorageObjectAccessControlsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
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

Updates an ACL entry on the specified object. This method supports patch semantics.

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
            Bucket: sdk.String("aliquam"),
            Domain: sdk.String("inventore"),
            Email: sdk.String("Arvid0@yahoo.com"),
            Entity: sdk.String("architecto"),
            EntityID: sdk.String("sit"),
            Etag: sdk.String("modi"),
            Generation: sdk.String("fugit"),
            ID: sdk.String("1813d520-8ece-47e2-93b6-68451c6c6e20"),
            Kind: sdk.String("exercitationem"),
            Object: sdk.String("necessitatibus"),
            Role: sdk.String("quasi"),
            SelfLink: sdk.String("nisi"),
        },
        Alt: shared.AltEnumJSON.ToPointer(),
        Bucket: "at",
        Entity: "vero",
        Fields: sdk.String("est"),
        Generation: sdk.String("harum"),
        Key: sdk.String("sequi"),
        OauthToken: sdk.String("doloribus"),
        Object: "repudiandae",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("optio"),
        UserIP: sdk.String("occaecati"),
    }, operations.StorageObjectAccessControlsPatchSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
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
            Bucket: sdk.String("nemo"),
            Domain: sdk.String("voluptate"),
            Email: sdk.String("Ludie36@yahoo.com"),
            Entity: sdk.String("quos"),
            EntityID: sdk.String("eius"),
            Etag: sdk.String("aspernatur"),
            Generation: sdk.String("ducimus"),
            ID: sdk.String("3a8418d1-6230-49fb-8929-921aefb9f58c"),
            Kind: sdk.String("magnam"),
            Object: sdk.String("temporibus"),
            Role: sdk.String("quos"),
            SelfLink: sdk.String("commodi"),
        },
        Alt: shared.AltEnumJSON.ToPointer(),
        Bucket: "itaque",
        Entity: "commodi",
        Fields: sdk.String("totam"),
        Generation: sdk.String("earum"),
        Key: sdk.String("modi"),
        OauthToken: sdk.String("nam"),
        Object: "vero",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("voluptatem"),
        UserIP: sdk.String("ipsam"),
    }, operations.StorageObjectAccessControlsUpdateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ObjectAccessControl != nil {
        // handle response
    }
}
```
