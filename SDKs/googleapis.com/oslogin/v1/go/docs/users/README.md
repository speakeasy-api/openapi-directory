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
        AccessToken: sdk.String("suscipit"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("minus"),
        Fields: sdk.String("placeat"),
        Key: sdk.String("voluptatum"),
        Name: "Miriam Huel",
        OauthToken: sdk.String("ab"),
        PrettyPrint: sdk.Bool(false),
        ProjectID: sdk.String("quis"),
        QuotaUser: sdk.String("veritatis"),
        SystemID: sdk.String("deserunt"),
        UploadType: sdk.String("perferendis"),
        UploadProtocol: sdk.String("ipsam"),
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        SSHPublicKeyInput: &shared.SSHPublicKeyInput{
            ExpirationTimeUsec: sdk.String("sapiente"),
            Key: sdk.String("quo"),
        },
        AccessToken: sdk.String("odit"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("at"),
        Fields: sdk.String("maiores"),
        Key: sdk.String("molestiae"),
        OauthToken: sdk.String("quod"),
        Parent: "quod",
        PrettyPrint: sdk.Bool(false),
        ProjectID: sdk.String("esse"),
        QuotaUser: sdk.String("totam"),
        UploadType: sdk.String("porro"),
        UploadProtocol: sdk.String("dolorum"),
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
            ExpirationTimeUsec: sdk.String("nam"),
            Key: sdk.String("officia"),
        },
        AccessToken: sdk.String("occaecati"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("deleniti"),
        Fields: sdk.String("hic"),
        Key: sdk.String("optio"),
        OauthToken: sdk.String("totam"),
        Parent: "beatae",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("commodi"),
        UploadType: sdk.String("molestiae"),
        UploadProtocol: sdk.String("modi"),
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
        AccessToken: sdk.String("impedit"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("esse"),
        Fields: sdk.String("ipsum"),
        Key: sdk.String("excepturi"),
        Name: "Dorothy Hane",
        OauthToken: sdk.String("iste"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dolor"),
        UploadType: sdk.String("natus"),
        UploadProtocol: sdk.String("laboriosam"),
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("saepe"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("in"),
        Fields: sdk.String("corporis"),
        Key: sdk.String("iste"),
        Name: "Mr. Kerry Predovic",
        OauthToken: sdk.String("est"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("mollitia"),
        UploadType: sdk.String("laborum"),
        UploadProtocol: sdk.String("dolores"),
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        SSHPublicKeyInput: &shared.SSHPublicKeyInput{
            ExpirationTimeUsec: sdk.String("corporis"),
            Key: sdk.String("explicabo"),
        },
        AccessToken: sdk.String("nobis"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("omnis"),
        Fields: sdk.String("nemo"),
        Key: sdk.String("minima"),
        Name: "Brian Kessler",
        OauthToken: sdk.String("sapiente"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("architecto"),
        UpdateMask: sdk.String("mollitia"),
        UploadType: sdk.String("dolorem"),
        UploadProtocol: sdk.String("culpa"),
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
