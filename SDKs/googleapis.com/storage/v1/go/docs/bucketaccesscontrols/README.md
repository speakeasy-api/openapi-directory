# BucketAccessControls

### Available Operations

* [StorageBucketAccessControlsDelete](#storagebucketaccesscontrolsdelete) - Permanently deletes the ACL entry for the specified entity on the specified bucket.
* [StorageBucketAccessControlsGet](#storagebucketaccesscontrolsget) - Returns the ACL entry for the specified entity on the specified bucket.
* [StorageBucketAccessControlsInsert](#storagebucketaccesscontrolsinsert) - Creates a new ACL entry on the specified bucket.
* [StorageBucketAccessControlsList](#storagebucketaccesscontrolslist) - Retrieves ACL entries on the specified bucket.
* [StorageBucketAccessControlsPatch](#storagebucketaccesscontrolspatch) - Patches an ACL entry on the specified bucket.
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
        Bucket: "error",
        Entity: "deserunt",
        Fields: sdk.String("suscipit"),
        Key: sdk.String("iure"),
        OauthToken: sdk.String("magnam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("debitis"),
        UploadType: sdk.String("ipsa"),
        UserIP: sdk.String("delectus"),
        UserProject: sdk.String("tempora"),
    }, operations.StorageBucketAccessControlsDeleteSecurity{
        Option1: &operations.StorageBucketAccessControlsDeleteSecurityOption1{
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
        Bucket: "suscipit",
        Entity: "molestiae",
        Fields: sdk.String("minus"),
        Key: sdk.String("placeat"),
        OauthToken: sdk.String("voluptatum"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("iusto"),
        UploadType: sdk.String("excepturi"),
        UserIP: sdk.String("nisi"),
        UserProject: sdk.String("recusandae"),
    }, operations.StorageBucketAccessControlsGetSecurity{
        Option1: &operations.StorageBucketAccessControlsGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
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
            Bucket: sdk.String("temporibus"),
            Domain: sdk.String("ab"),
            Email: sdk.String("Ashlee36@yahoo.com"),
            Entity: sdk.String("repellendus"),
            EntityID: sdk.String("sapiente"),
            Etag: sdk.String("quo"),
            ID: sdk.String("2ddf7cc7-8ca1-4ba9-a8fc-816742cb7392"),
            Kind: sdk.String("perferendis"),
            ProjectTeam: &shared.BucketAccessControlProjectTeam{
                ProjectNumber: sdk.String("ad"),
                Team: sdk.String("natus"),
            },
            Role: sdk.String("sed"),
            SelfLink: sdk.String("iste"),
        },
        Alt: shared.AltEnumJSON.ToPointer(),
        Bucket: "dolor",
        Fields: sdk.String("natus"),
        Key: sdk.String("laboriosam"),
        OauthToken: sdk.String("hic"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("saepe"),
        UploadType: sdk.String("fuga"),
        UserIP: sdk.String("in"),
        UserProject: sdk.String("corporis"),
    }, operations.StorageBucketAccessControlsInsertSecurity{
        Option1: &operations.StorageBucketAccessControlsInsertSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
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
        Fields: sdk.String("iure"),
        Key: sdk.String("saepe"),
        OauthToken: sdk.String("quidem"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("architecto"),
        UploadType: sdk.String("ipsa"),
        UserIP: sdk.String("reiciendis"),
        UserProject: sdk.String("est"),
    }, operations.StorageBucketAccessControlsListSecurity{
        Option1: &operations.StorageBucketAccessControlsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
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

Patches an ACL entry on the specified bucket.

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
            Bucket: sdk.String("mollitia"),
            Domain: sdk.String("laborum"),
            Email: sdk.String("Corrine75@gmail.com"),
            Entity: sdk.String("enim"),
            EntityID: sdk.String("omnis"),
            Etag: sdk.String("nemo"),
            ID: sdk.String("5907aff1-a3a2-4fa9-8677-39251aa52c3f"),
            Kind: sdk.String("ipsam"),
            ProjectTeam: &shared.BucketAccessControlProjectTeam{
                ProjectNumber: sdk.String("id"),
                Team: sdk.String("possimus"),
            },
            Role: sdk.String("aut"),
            SelfLink: sdk.String("quasi"),
        },
        Alt: shared.AltEnumJSON.ToPointer(),
        Bucket: "error",
        Entity: "temporibus",
        Fields: sdk.String("laborum"),
        Key: sdk.String("quasi"),
        OauthToken: sdk.String("reiciendis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("voluptatibus"),
        UploadType: sdk.String("vero"),
        UserIP: sdk.String("nihil"),
        UserProject: sdk.String("praesentium"),
    }, operations.StorageBucketAccessControlsPatchSecurity{
        Option1: &operations.StorageBucketAccessControlsPatchSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
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
            Bucket: sdk.String("voluptatibus"),
            Domain: sdk.String("ipsa"),
            Email: sdk.String("Ivah3@yahoo.com"),
            Entity: sdk.String("reprehenderit"),
            EntityID: sdk.String("ut"),
            Etag: sdk.String("maiores"),
            ID: sdk.String("15471b5e-6e13-4b99-9488-e1e91e450ad2"),
            Kind: sdk.String("deserunt"),
            ProjectTeam: &shared.BucketAccessControlProjectTeam{
                ProjectNumber: sdk.String("distinctio"),
                Team: sdk.String("quibusdam"),
            },
            Role: sdk.String("labore"),
            SelfLink: sdk.String("modi"),
        },
        Alt: shared.AltEnumJSON.ToPointer(),
        Bucket: "qui",
        Entity: "aliquid",
        Fields: sdk.String("cupiditate"),
        Key: sdk.String("quos"),
        OauthToken: sdk.String("perferendis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("magni"),
        UploadType: sdk.String("assumenda"),
        UserIP: sdk.String("ipsam"),
        UserProject: sdk.String("alias"),
    }, operations.StorageBucketAccessControlsUpdateSecurity{
        Option1: &operations.StorageBucketAccessControlsUpdateSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BucketAccessControl != nil {
        // handle response
    }
}
```
