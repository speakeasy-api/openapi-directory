# BucketAccessControls

### Available Operations

* [StorageBucketAccessControlsDelete](#storagebucketaccesscontrolsdelete) - Permanently deletes the ACL entry for the specified entity on the specified bucket.
* [StorageBucketAccessControlsGet](#storagebucketaccesscontrolsget) - Returns the ACL entry for the specified entity on the specified bucket.
* [StorageBucketAccessControlsInsert](#storagebucketaccesscontrolsinsert) - Creates a new ACL entry on the specified bucket.
* [StorageBucketAccessControlsList](#storagebucketaccesscontrolslist) - Retrieves ACL entries on the specified bucket.
* [StorageBucketAccessControlsPatch](#storagebucketaccesscontrolspatch) - Updates an ACL entry on the specified bucket. This method supports patch semantics.
* [StorageBucketAccessControlsUpdate](#storagebucketaccesscontrolsupdate) - Updates an ACL entry on the specified bucket.

## StorageBucketAccessControlsDelete

Permanently deletes the ACL entry for the specified entity on the specified bucket.

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
    res, err := s.BucketAccessControls.StorageBucketAccessControlsDelete(ctx, operations.StorageBucketAccessControlsDeleteRequest{
        Alt: shared.AltEnumJSON.ToPointer(),
        Bucket: "illum",
        Entity: "vel",
        Fields: sdk.String("error"),
        Key: sdk.String("deserunt"),
        OauthToken: sdk.String("suscipit"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("iure"),
        UserIP: sdk.String("magnam"),
    }, operations.StorageBucketAccessControlsDeleteSecurity{
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

## StorageBucketAccessControlsGet

Returns the ACL entry for the specified entity on the specified bucket.

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
    res, err := s.BucketAccessControls.StorageBucketAccessControlsGet(ctx, operations.StorageBucketAccessControlsGetRequest{
        Alt: shared.AltEnumJSON.ToPointer(),
        Bucket: "debitis",
        Entity: "ipsa",
        Fields: sdk.String("delectus"),
        Key: sdk.String("tempora"),
        OauthToken: sdk.String("suscipit"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("molestiae"),
        UserIP: sdk.String("minus"),
    }, operations.StorageBucketAccessControlsGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BucketAccessControl != nil {
        // handle response
    }
}
```

## StorageBucketAccessControlsInsert

Creates a new ACL entry on the specified bucket.

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
    res, err := s.BucketAccessControls.StorageBucketAccessControlsInsert(ctx, operations.StorageBucketAccessControlsInsertRequest{
        BucketAccessControl: &shared.BucketAccessControl{
            Bucket: sdk.String("placeat"),
            Domain: sdk.String("voluptatum"),
            Email: sdk.String("Kenyon_Huel7@yahoo.com"),
            Entity: sdk.String("quis"),
            EntityID: sdk.String("veritatis"),
            Etag: sdk.String("deserunt"),
            ID: sdk.String("05dfc2dd-f7cc-478c-a1ba-928fc816742c"),
            Kind: sdk.String("cum"),
            Role: sdk.String("esse"),
            SelfLink: sdk.String("ipsum"),
        },
        Alt: shared.AltEnumJSON.ToPointer(),
        Bucket: "excepturi",
        Fields: sdk.String("aspernatur"),
        Key: sdk.String("perferendis"),
        OauthToken: sdk.String("ad"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("natus"),
        UserIP: sdk.String("sed"),
    }, operations.StorageBucketAccessControlsInsertSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BucketAccessControl != nil {
        // handle response
    }
}
```

## StorageBucketAccessControlsList

Retrieves ACL entries on the specified bucket.

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
    res, err := s.BucketAccessControls.StorageBucketAccessControlsList(ctx, operations.StorageBucketAccessControlsListRequest{
        Alt: shared.AltEnumJSON.ToPointer(),
        Bucket: "iste",
        Fields: sdk.String("dolor"),
        Key: sdk.String("natus"),
        OauthToken: sdk.String("laboriosam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("hic"),
        UserIP: sdk.String("saepe"),
    }, operations.StorageBucketAccessControlsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BucketAccessControls != nil {
        // handle response
    }
}
```

## StorageBucketAccessControlsPatch

Updates an ACL entry on the specified bucket. This method supports patch semantics.

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
    res, err := s.BucketAccessControls.StorageBucketAccessControlsPatch(ctx, operations.StorageBucketAccessControlsPatchRequest{
        BucketAccessControl: &shared.BucketAccessControl{
            Bucket: sdk.String("fuga"),
            Domain: sdk.String("in"),
            Email: sdk.String("Leslie_Kertzmann9@yahoo.com"),
            Entity: sdk.String("ipsa"),
            EntityID: sdk.String("reiciendis"),
            Etag: sdk.String("est"),
            ID: sdk.String("aa2352c5-9559-407a-bf1a-3a2fa9467739"),
            Kind: sdk.String("quia"),
            Role: sdk.String("quis"),
            SelfLink: sdk.String("vitae"),
        },
        Alt: shared.AltEnumJSON.ToPointer(),
        Bucket: "laborum",
        Entity: "animi",
        Fields: sdk.String("enim"),
        Key: sdk.String("odit"),
        OauthToken: sdk.String("quo"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("sequi"),
        UserIP: sdk.String("tenetur"),
    }, operations.StorageBucketAccessControlsPatchSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BucketAccessControl != nil {
        // handle response
    }
}
```

## StorageBucketAccessControlsUpdate

Updates an ACL entry on the specified bucket.

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
    res, err := s.BucketAccessControls.StorageBucketAccessControlsUpdate(ctx, operations.StorageBucketAccessControlsUpdateRequest{
        BucketAccessControl: &shared.BucketAccessControl{
            Bucket: sdk.String("ipsam"),
            Domain: sdk.String("id"),
            Email: sdk.String("Adrain_Boyer@hotmail.com"),
            Entity: sdk.String("laborum"),
            EntityID: sdk.String("quasi"),
            Etag: sdk.String("reiciendis"),
            ID: sdk.String("fe78f097-b007-44f1-9471-b5e6e13b99d4"),
            Kind: sdk.String("praesentium"),
            Role: sdk.String("rem"),
            SelfLink: sdk.String("voluptates"),
        },
        Alt: shared.AltEnumJSON.ToPointer(),
        Bucket: "quasi",
        Entity: "repudiandae",
        Fields: sdk.String("sint"),
        Key: sdk.String("veritatis"),
        OauthToken: sdk.String("itaque"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("incidunt"),
        UserIP: sdk.String("enim"),
    }, operations.StorageBucketAccessControlsUpdateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BucketAccessControl != nil {
        // handle response
    }
}
```
