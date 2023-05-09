# DefaultObjectAccessControls

### Available Operations

* [StorageDefaultObjectAccessControlsDelete](#storagedefaultobjectaccesscontrolsdelete) - Permanently deletes the default object ACL entry for the specified entity on the specified bucket.
* [StorageDefaultObjectAccessControlsGet](#storagedefaultobjectaccesscontrolsget) - Returns the default object ACL entry for the specified entity on the specified bucket.
* [StorageDefaultObjectAccessControlsInsert](#storagedefaultobjectaccesscontrolsinsert) - Creates a new default object ACL entry on the specified bucket.
* [StorageDefaultObjectAccessControlsList](#storagedefaultobjectaccesscontrolslist) - Retrieves default object ACL entries on the specified bucket.
* [StorageDefaultObjectAccessControlsPatch](#storagedefaultobjectaccesscontrolspatch) - Updates a default object ACL entry on the specified bucket. This method supports patch semantics.
* [StorageDefaultObjectAccessControlsUpdate](#storagedefaultobjectaccesscontrolsupdate) - Updates a default object ACL entry on the specified bucket.

## StorageDefaultObjectAccessControlsDelete

Permanently deletes the default object ACL entry for the specified entity on the specified bucket.

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
    res, err := s.DefaultObjectAccessControls.StorageDefaultObjectAccessControlsDelete(ctx, operations.StorageDefaultObjectAccessControlsDeleteRequest{
        Alt: shared.AltEnumJSON.ToPointer(),
        Bucket: "beatae",
        Entity: "dolores",
        Fields: sdk.String("enim"),
        Key: sdk.String("laboriosam"),
        OauthToken: sdk.String("velit"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("a"),
        UserIP: sdk.String("molestias"),
    }, operations.StorageDefaultObjectAccessControlsDeleteSecurity{
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

## StorageDefaultObjectAccessControlsGet

Returns the default object ACL entry for the specified entity on the specified bucket.

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
    res, err := s.DefaultObjectAccessControls.StorageDefaultObjectAccessControlsGet(ctx, operations.StorageDefaultObjectAccessControlsGetRequest{
        Alt: shared.AltEnumJSON.ToPointer(),
        Bucket: "magnam",
        Entity: "saepe",
        Fields: sdk.String("consequuntur"),
        Key: sdk.String("occaecati"),
        OauthToken: sdk.String("officiis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("perspiciatis"),
        UserIP: sdk.String("in"),
    }, operations.StorageDefaultObjectAccessControlsGetSecurity{
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

## StorageDefaultObjectAccessControlsInsert

Creates a new default object ACL entry on the specified bucket.

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
    res, err := s.DefaultObjectAccessControls.StorageDefaultObjectAccessControlsInsert(ctx, operations.StorageDefaultObjectAccessControlsInsertRequest{
        ObjectAccessControl: &shared.ObjectAccessControl{
            Bucket: sdk.String("adipisci"),
            Domain: sdk.String("eveniet"),
            Email: sdk.String("Carolanne.Considine@yahoo.com"),
            Entity: sdk.String("reprehenderit"),
            EntityID: sdk.String("error"),
            Etag: sdk.String("illo"),
            Generation: sdk.String("corporis"),
            ID: sdk.String("be3e0608-07e2-4b6e-bab8-845f0597a60f"),
            Kind: sdk.String("reiciendis"),
            Object: sdk.String("dolores"),
            Role: sdk.String("id"),
            SelfLink: sdk.String("minima"),
        },
        Alt: shared.AltEnumJSON.ToPointer(),
        Bucket: "dolore",
        Fields: sdk.String("dolorum"),
        Key: sdk.String("nesciunt"),
        OauthToken: sdk.String("quae"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("recusandae"),
        UserIP: sdk.String("omnis"),
    }, operations.StorageDefaultObjectAccessControlsInsertSecurity{
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

## StorageDefaultObjectAccessControlsList

Retrieves default object ACL entries on the specified bucket.

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
    res, err := s.DefaultObjectAccessControls.StorageDefaultObjectAccessControlsList(ctx, operations.StorageDefaultObjectAccessControlsListRequest{
        Alt: shared.AltEnumJSON.ToPointer(),
        Bucket: "quaerat",
        Fields: sdk.String("molestiae"),
        IfMetagenerationMatch: sdk.String("ex"),
        IfMetagenerationNotMatch: sdk.String("ut"),
        Key: sdk.String("culpa"),
        OauthToken: sdk.String("adipisci"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("debitis"),
        UserIP: sdk.String("laudantium"),
    }, operations.StorageDefaultObjectAccessControlsListSecurity{
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

## StorageDefaultObjectAccessControlsPatch

Updates a default object ACL entry on the specified bucket. This method supports patch semantics.

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
    res, err := s.DefaultObjectAccessControls.StorageDefaultObjectAccessControlsPatch(ctx, operations.StorageDefaultObjectAccessControlsPatchRequest{
        ObjectAccessControl: &shared.ObjectAccessControl{
            Bucket: sdk.String("eum"),
            Domain: sdk.String("nemo"),
            Email: sdk.String("Jaclyn.Medhurst@hotmail.com"),
            Entity: sdk.String("reiciendis"),
            EntityID: sdk.String("provident"),
            Etag: sdk.String("aspernatur"),
            Generation: sdk.String("ullam"),
            ID: sdk.String("1a5a9da6-60ff-457b-baad-4f9efc1b4512"),
            Kind: sdk.String("cumque"),
            Object: sdk.String("quae"),
            Role: sdk.String("perferendis"),
            SelfLink: sdk.String("velit"),
        },
        Alt: shared.AltEnumJSON.ToPointer(),
        Bucket: "aspernatur",
        Entity: "eum",
        Fields: sdk.String("eius"),
        Key: sdk.String("rem"),
        OauthToken: sdk.String("at"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("impedit"),
        UserIP: sdk.String("eos"),
    }, operations.StorageDefaultObjectAccessControlsPatchSecurity{
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

## StorageDefaultObjectAccessControlsUpdate

Updates a default object ACL entry on the specified bucket.

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
    res, err := s.DefaultObjectAccessControls.StorageDefaultObjectAccessControlsUpdate(ctx, operations.StorageDefaultObjectAccessControlsUpdateRequest{
        ObjectAccessControl: &shared.ObjectAccessControl{
            Bucket: sdk.String("sapiente"),
            Domain: sdk.String("eum"),
            Email: sdk.String("Era_Breitenberg@gmail.com"),
            Entity: sdk.String("earum"),
            EntityID: sdk.String("soluta"),
            Etag: sdk.String("hic"),
            Generation: sdk.String("illum"),
            ID: sdk.String("0e9fe6c6-32ca-43ae-9011-7996312fde04"),
            Kind: sdk.String("nihil"),
            Object: sdk.String("molestiae"),
            Role: sdk.String("dicta"),
            SelfLink: sdk.String("iusto"),
        },
        Alt: shared.AltEnumJSON.ToPointer(),
        Bucket: "esse",
        Entity: "praesentium",
        Fields: sdk.String("maiores"),
        Key: sdk.String("reiciendis"),
        OauthToken: sdk.String("vel"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("architecto"),
        UserIP: sdk.String("fugiat"),
    }, operations.StorageDefaultObjectAccessControlsUpdateSecurity{
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
