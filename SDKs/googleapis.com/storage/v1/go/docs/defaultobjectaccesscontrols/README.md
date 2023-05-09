# DefaultObjectAccessControls

### Available Operations

* [StorageDefaultObjectAccessControlsDelete](#storagedefaultobjectaccesscontrolsdelete) - Permanently deletes the default object ACL entry for the specified entity on the specified bucket.
* [StorageDefaultObjectAccessControlsGet](#storagedefaultobjectaccesscontrolsget) - Returns the default object ACL entry for the specified entity on the specified bucket.
* [StorageDefaultObjectAccessControlsInsert](#storagedefaultobjectaccesscontrolsinsert) - Creates a new default object ACL entry on the specified bucket.
* [StorageDefaultObjectAccessControlsList](#storagedefaultobjectaccesscontrolslist) - Retrieves default object ACL entries on the specified bucket.
* [StorageDefaultObjectAccessControlsPatch](#storagedefaultobjectaccesscontrolspatch) - Patches a default object ACL entry on the specified bucket.
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
        Bucket: "fugiat",
        Entity: "officia",
        Fields: sdk.String("quos"),
        Key: sdk.String("placeat"),
        OauthToken: sdk.String("sit"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("iusto"),
        UploadType: sdk.String("ipsa"),
        UserIP: sdk.String("voluptates"),
        UserProject: sdk.String("inventore"),
    }, operations.StorageDefaultObjectAccessControlsDeleteSecurity{
        Option1: &operations.StorageDefaultObjectAccessControlsDeleteSecurityOption1{
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
        Bucket: "aperiam",
        Entity: "totam",
        Fields: sdk.String("dolore"),
        Key: sdk.String("eligendi"),
        OauthToken: sdk.String("distinctio"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("voluptatem"),
        UploadType: sdk.String("autem"),
        UserIP: sdk.String("esse"),
        UserProject: sdk.String("dolores"),
    }, operations.StorageDefaultObjectAccessControlsGetSecurity{
        Option1: &operations.StorageDefaultObjectAccessControlsGetSecurityOption1{
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
            Bucket: sdk.String("assumenda"),
            Domain: sdk.String("beatae"),
            Email: sdk.String("Reba_Lockman@hotmail.com"),
            Entity: sdk.String("accusamus"),
            EntityID: sdk.String("necessitatibus"),
            Etag: sdk.String("tempore"),
            Generation: sdk.String("sint"),
            ID: sdk.String("665b85ef-bd02-4bae-8be2-d782259e3ea4"),
            Kind: sdk.String("quidem"),
            Object: sdk.String("quis"),
            ProjectTeam: &shared.ObjectAccessControlProjectTeam{
                ProjectNumber: sdk.String("beatae"),
                Team: sdk.String("unde"),
            },
            Role: sdk.String("molestiae"),
            SelfLink: sdk.String("delectus"),
        },
        Alt: shared.AltEnumJSON.ToPointer(),
        Bucket: "cupiditate",
        Fields: sdk.String("fugit"),
        Key: sdk.String("numquam"),
        OauthToken: sdk.String("numquam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("nesciunt"),
        UploadType: sdk.String("at"),
        UserIP: sdk.String("officia"),
        UserProject: sdk.String("dignissimos"),
    }, operations.StorageDefaultObjectAccessControlsInsertSecurity{
        Option1: &operations.StorageDefaultObjectAccessControlsInsertSecurityOption1{
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
        Bucket: "optio",
        Fields: sdk.String("necessitatibus"),
        IfMetagenerationMatch: sdk.String("corporis"),
        IfMetagenerationNotMatch: sdk.String("qui"),
        Key: sdk.String("expedita"),
        OauthToken: sdk.String("voluptatum"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("cupiditate"),
        UploadType: sdk.String("minima"),
        UserIP: sdk.String("placeat"),
        UserProject: sdk.String("enim"),
    }, operations.StorageDefaultObjectAccessControlsListSecurity{
        Option1: &operations.StorageDefaultObjectAccessControlsListSecurityOption1{
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

## StorageDefaultObjectAccessControlsPatch

Patches a default object ACL entry on the specified bucket.

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
            Bucket: sdk.String("neque"),
            Domain: sdk.String("in"),
            Email: sdk.String("Horace.Gleichner@hotmail.com"),
            Entity: sdk.String("voluptates"),
            EntityID: sdk.String("maiores"),
            Etag: sdk.String("tempore"),
            Generation: sdk.String("aperiam"),
            ID: sdk.String("b34896c3-ca5a-4cfb-a2fd-570757792917"),
            Kind: sdk.String("voluptate"),
            Object: sdk.String("pariatur"),
            ProjectTeam: &shared.ObjectAccessControlProjectTeam{
                ProjectNumber: sdk.String("itaque"),
                Team: sdk.String("similique"),
            },
            Role: sdk.String("optio"),
            SelfLink: sdk.String("ex"),
        },
        Alt: shared.AltEnumJSON.ToPointer(),
        Bucket: "quaerat",
        Entity: "commodi",
        Fields: sdk.String("officiis"),
        Key: sdk.String("placeat"),
        OauthToken: sdk.String("quidem"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("exercitationem"),
        UploadType: sdk.String("quam"),
        UserIP: sdk.String("dolorem"),
        UserProject: sdk.String("modi"),
    }, operations.StorageDefaultObjectAccessControlsPatchSecurity{
        Option1: &operations.StorageDefaultObjectAccessControlsPatchSecurityOption1{
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
            Bucket: sdk.String("ipsa"),
            Domain: sdk.String("sint"),
            Email: sdk.String("Cleo.VonRueden93@hotmail.com"),
            Entity: sdk.String("veniam"),
            EntityID: sdk.String("animi"),
            Etag: sdk.String("dolores"),
            Generation: sdk.String("nam"),
            ID: sdk.String("12eb07f1-16db-4995-85fc-95fa88970e18"),
            Kind: sdk.String("iste"),
            Object: sdk.String("assumenda"),
            ProjectTeam: &shared.ObjectAccessControlProjectTeam{
                ProjectNumber: sdk.String("tempore"),
                Team: sdk.String("libero"),
            },
            Role: sdk.String("velit"),
            SelfLink: sdk.String("doloremque"),
        },
        Alt: shared.AltEnumJSON.ToPointer(),
        Bucket: "delectus",
        Entity: "impedit",
        Fields: sdk.String("cum"),
        Key: sdk.String("ipsum"),
        OauthToken: sdk.String("adipisci"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("saepe"),
        UploadType: sdk.String("deserunt"),
        UserIP: sdk.String("doloremque"),
        UserProject: sdk.String("quis"),
    }, operations.StorageDefaultObjectAccessControlsUpdateSecurity{
        Option1: &operations.StorageDefaultObjectAccessControlsUpdateSecurityOption1{
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
