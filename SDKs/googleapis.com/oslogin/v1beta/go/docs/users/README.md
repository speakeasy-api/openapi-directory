# Users

### Available Operations

* [OsloginUsersGetLoginProfile](#osloginusersgetloginprofile) - Retrieves the profile information used for logging in to a virtual machine on Google Compute Engine.
* [OsloginUsersImportSSHPublicKey](#osloginusersimportsshpublickey) - Adds an SSH public key and returns the profile information. Default POSIX account information is set when no username and UID exist as part of the login profile.
* [OsloginUsersSSHPublicKeysCreate](#osloginuserssshpublickeyscreate) - Create an SSH public key
* [OsloginUsersSSHPublicKeysDelete](#osloginuserssshpublickeysdelete) - Deletes an SSH public key.
* [OsloginUsersSSHPublicKeysGet](#osloginuserssshpublickeysget) - Retrieves an SSH public key.
* [OsloginUsersSSHPublicKeysPatch](#osloginuserssshpublickeyspatch) - Updates an SSH public key and returns the profile information. This method supports patch semantics.

## OsloginUsersGetLoginProfile

Retrieves the profile information used for logging in to a virtual machine on Google Compute Engine.

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
    res, err := s.Users.OsloginUsersGetLoginProfile(ctx, operations.OsloginUsersGetLoginProfileRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("molestiae"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("placeat"),
        Fields: sdk.String("voluptatum"),
        Key: sdk.String("iusto"),
        Name: "Charlie Walsh II",
        OauthToken: sdk.String("veritatis"),
        PrettyPrint: sdk.Bool(false),
        ProjectID: sdk.String("deserunt"),
        QuotaUser: sdk.String("perferendis"),
        SystemID: sdk.String("ipsam"),
        UploadType: sdk.String("repellendus"),
        UploadProtocol: sdk.String("sapiente"),
        View: operations.OsloginUsersGetLoginProfileViewEnumSecurityKey.ToPointer(),
    }, operations.OsloginUsersGetLoginProfileSecurity{
        Option1: &operations.OsloginUsersGetLoginProfileSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LoginProfile != nil {
        // handle response
    }
}
```

## OsloginUsersImportSSHPublicKey

Adds an SSH public key and returns the profile information. Default POSIX account information is set when no username and UID exist as part of the login profile.

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
    res, err := s.Users.OsloginUsersImportSSHPublicKey(ctx, operations.OsloginUsersImportSSHPublicKeyRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        SSHPublicKeyInput: &shared.SSHPublicKeyInput{
            ExpirationTimeUsec: sdk.String("at"),
            Key: sdk.String("at"),
        },
        AccessToken: sdk.String("maiores"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("quod"),
        Fields: sdk.String("quod"),
        Key: sdk.String("esse"),
        OauthToken: sdk.String("totam"),
        Parent: "porro",
        PrettyPrint: sdk.Bool(false),
        ProjectID: sdk.String("dolorum"),
        QuotaUser: sdk.String("dicta"),
        UploadType: sdk.String("nam"),
        UploadProtocol: sdk.String("officia"),
        View: operations.OsloginUsersImportSSHPublicKeyViewEnumBasic.ToPointer(),
    }, operations.OsloginUsersImportSSHPublicKeySecurity{
        Option1: &operations.OsloginUsersImportSSHPublicKeySecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ImportSSHPublicKeyResponse != nil {
        // handle response
    }
}
```

## OsloginUsersSSHPublicKeysCreate

Create an SSH public key

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
    res, err := s.Users.OsloginUsersSSHPublicKeysCreate(ctx, operations.OsloginUsersSSHPublicKeysCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        SSHPublicKeyInput: &shared.SSHPublicKeyInput{
            ExpirationTimeUsec: sdk.String("deleniti"),
            Key: sdk.String("hic"),
        },
        AccessToken: sdk.String("optio"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("beatae"),
        Fields: sdk.String("commodi"),
        Key: sdk.String("molestiae"),
        OauthToken: sdk.String("modi"),
        Parent: "qui",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("impedit"),
        UploadType: sdk.String("cum"),
        UploadProtocol: sdk.String("esse"),
    }, operations.OsloginUsersSSHPublicKeysCreateSecurity{
        Option1: &operations.OsloginUsersSSHPublicKeysCreateSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SSHPublicKey != nil {
        // handle response
    }
}
```

## OsloginUsersSSHPublicKeysDelete

Deletes an SSH public key.

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
    res, err := s.Users.OsloginUsersSSHPublicKeysDelete(ctx, operations.OsloginUsersSSHPublicKeysDeleteRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("excepturi"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("perferendis"),
        Fields: sdk.String("ad"),
        Key: sdk.String("natus"),
        Name: "Sheryl Fadel",
        OauthToken: sdk.String("hic"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("saepe"),
        UploadType: sdk.String("fuga"),
        UploadProtocol: sdk.String("in"),
    }, operations.OsloginUsersSSHPublicKeysDeleteSecurity{
        Option1: &operations.OsloginUsersSSHPublicKeysDeleteSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
}
```

## OsloginUsersSSHPublicKeysGet

Retrieves an SSH public key.

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
    res, err := s.Users.OsloginUsersSSHPublicKeysGet(ctx, operations.OsloginUsersSSHPublicKeysGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("iste"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("saepe"),
        Fields: sdk.String("quidem"),
        Key: sdk.String("architecto"),
        Name: "Lela Orn",
        OauthToken: sdk.String("dolores"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dolorem"),
        UploadType: sdk.String("corporis"),
        UploadProtocol: sdk.String("explicabo"),
    }, operations.OsloginUsersSSHPublicKeysGetSecurity{
        Option1: &operations.OsloginUsersSSHPublicKeysGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SSHPublicKey != nil {
        // handle response
    }
}
```

## OsloginUsersSSHPublicKeysPatch

Updates an SSH public key and returns the profile information. This method supports patch semantics.

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
    res, err := s.Users.OsloginUsersSSHPublicKeysPatch(ctx, operations.OsloginUsersSSHPublicKeysPatchRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        SSHPublicKeyInput: &shared.SSHPublicKeyInput{
            ExpirationTimeUsec: sdk.String("enim"),
            Key: sdk.String("omnis"),
        },
        AccessToken: sdk.String("nemo"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("excepturi"),
        Fields: sdk.String("accusantium"),
        Key: sdk.String("iure"),
        Name: "Miss Aubrey Williamson",
        OauthToken: sdk.String("culpa"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("consequuntur"),
        UpdateMask: sdk.String("repellat"),
        UploadType: sdk.String("mollitia"),
        UploadProtocol: sdk.String("occaecati"),
    }, operations.OsloginUsersSSHPublicKeysPatchSecurity{
        Option1: &operations.OsloginUsersSSHPublicKeysPatchSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SSHPublicKey != nil {
        // handle response
    }
}
```
