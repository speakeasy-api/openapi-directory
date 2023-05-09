# Projects

### Available Operations

* [StorageProjectsHmacKeysCreate](#storageprojectshmackeyscreate) - Creates a new HMAC key for the specified service account.
* [StorageProjectsHmacKeysDelete](#storageprojectshmackeysdelete) - Deletes an HMAC key.
* [StorageProjectsHmacKeysGet](#storageprojectshmackeysget) - Retrieves an HMAC key's metadata
* [StorageProjectsHmacKeysList](#storageprojectshmackeyslist) - Retrieves a list of HMAC keys matching the criteria.
* [StorageProjectsHmacKeysUpdate](#storageprojectshmackeysupdate) - Updates the state of an HMAC key. See the HMAC Key resource descriptor for valid states.
* [StorageProjectsServiceAccountGet](#storageprojectsserviceaccountget) - Get the email address of this project's Google Cloud Storage service account.

## StorageProjectsHmacKeysCreate

Creates a new HMAC key for the specified service account.

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
    res, err := s.Projects.StorageProjectsHmacKeysCreate(ctx, operations.StorageProjectsHmacKeysCreateRequest{
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("consequatur"),
        Key: sdk.String("soluta"),
        OauthToken: sdk.String("necessitatibus"),
        PrettyPrint: sdk.Bool(false),
        ProjectID: "sequi",
        QuotaUser: sdk.String("recusandae"),
        ServiceAccountEmail: "labore",
        UploadType: sdk.String("adipisci"),
        UserIP: sdk.String("magni"),
        UserProject: sdk.String("aperiam"),
    }, operations.StorageProjectsHmacKeysCreateSecurity{
        Option1: &operations.StorageProjectsHmacKeysCreateSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.HmacKey != nil {
        // handle response
    }
}
```

## StorageProjectsHmacKeysDelete

Deletes an HMAC key.

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
    res, err := s.Projects.StorageProjectsHmacKeysDelete(ctx, operations.StorageProjectsHmacKeysDeleteRequest{
        AccessID: "dolores",
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("illum"),
        Key: sdk.String("iusto"),
        OauthToken: sdk.String("magni"),
        PrettyPrint: sdk.Bool(false),
        ProjectID: "beatae",
        QuotaUser: sdk.String("aliquid"),
        UploadType: sdk.String("ad"),
        UserIP: sdk.String("voluptate"),
        UserProject: sdk.String("vel"),
    }, operations.StorageProjectsHmacKeysDeleteSecurity{
        Option1: &operations.StorageProjectsHmacKeysDeleteSecurityOption1{
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

## StorageProjectsHmacKeysGet

Retrieves an HMAC key's metadata

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
    res, err := s.Projects.StorageProjectsHmacKeysGet(ctx, operations.StorageProjectsHmacKeysGetRequest{
        AccessID: "minima",
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("sit"),
        Key: sdk.String("vel"),
        OauthToken: sdk.String("laboriosam"),
        PrettyPrint: sdk.Bool(false),
        ProjectID: "quaerat",
        QuotaUser: sdk.String("quasi"),
        UploadType: sdk.String("rem"),
        UserIP: sdk.String("dignissimos"),
        UserProject: sdk.String("doloremque"),
    }, operations.StorageProjectsHmacKeysGetSecurity{
        Option1: &operations.StorageProjectsHmacKeysGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.HmacKeyMetadata != nil {
        // handle response
    }
}
```

## StorageProjectsHmacKeysList

Retrieves a list of HMAC keys matching the criteria.

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
    res, err := s.Projects.StorageProjectsHmacKeysList(ctx, operations.StorageProjectsHmacKeysListRequest{
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("assumenda"),
        Key: sdk.String("provident"),
        MaxResults: sdk.Int64(818422),
        OauthToken: sdk.String("sed"),
        PageToken: sdk.String("inventore"),
        PrettyPrint: sdk.Bool(false),
        ProjectID: "voluptatibus",
        QuotaUser: sdk.String("unde"),
        ServiceAccountEmail: sdk.String("deserunt"),
        ShowDeletedKeys: sdk.Bool(false),
        UploadType: sdk.String("repellendus"),
        UserIP: sdk.String("consequatur"),
        UserProject: sdk.String("adipisci"),
    }, operations.StorageProjectsHmacKeysListSecurity{
        Option1: &operations.StorageProjectsHmacKeysListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.HmacKeysMetadata != nil {
        // handle response
    }
}
```

## StorageProjectsHmacKeysUpdate

Updates the state of an HMAC key. See the HMAC Key resource descriptor for valid states.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.StorageProjectsHmacKeysUpdate(ctx, operations.StorageProjectsHmacKeysUpdateRequest{
        HmacKeyMetadata: &shared.HmacKeyMetadata{
            AccessID: sdk.String("doloremque"),
            Etag: sdk.String("optio"),
            ID: sdk.String("4ecc11a0-8364-4290-a8b8-502a55e7f73b"),
            Kind: sdk.String("quisquam"),
            ProjectID: sdk.String("praesentium"),
            SelfLink: sdk.String("tempora"),
            ServiceAccountEmail: sdk.String("ipsam"),
            State: sdk.String("officiis"),
            TimeCreated: types.MustTimeFromString("2022-11-01T13:49:12.515Z"),
            Updated: types.MustTimeFromString("2022-05-02T22:11:27.664Z"),
        },
        AccessID: "amet",
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("veritatis"),
        Key: sdk.String("error"),
        OauthToken: sdk.String("voluptatibus"),
        PrettyPrint: sdk.Bool(false),
        ProjectID: "numquam",
        QuotaUser: sdk.String("rerum"),
        UploadType: sdk.String("dolorum"),
        UserIP: sdk.String("quibusdam"),
        UserProject: sdk.String("earum"),
    }, operations.StorageProjectsHmacKeysUpdateSecurity{
        Option1: &operations.StorageProjectsHmacKeysUpdateSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.HmacKeyMetadata != nil {
        // handle response
    }
}
```

## StorageProjectsServiceAccountGet

Get the email address of this project's Google Cloud Storage service account.

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
    res, err := s.Projects.StorageProjectsServiceAccountGet(ctx, operations.StorageProjectsServiceAccountGetRequest{
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("excepturi"),
        Key: sdk.String("numquam"),
        OauthToken: sdk.String("molestiae"),
        PrettyPrint: sdk.Bool(false),
        ProjectID: "impedit",
        QuotaUser: sdk.String("error"),
        UploadType: sdk.String("animi"),
        UserIP: sdk.String("voluptatum"),
        UserProject: sdk.String("aliquid"),
    }, operations.StorageProjectsServiceAccountGetSecurity{
        Option1: &operations.StorageProjectsServiceAccountGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ServiceAccount != nil {
        // handle response
    }
}
```
