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
        AccessToken: sdk.String("minus"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("voluptatum"),
        Fields: sdk.String("iusto"),
        Key: sdk.String("excepturi"),
        Name: "Mrs. Sophie Smith MD",
        OauthToken: sdk.String("perferendis"),
        OperatingSystemType: operations.OsloginUsersGetLoginProfileOperatingSystemTypeEnumLinux.ToPointer(),
        PrettyPrint: sdk.Bool(false),
        ProjectID: sdk.String("repellendus"),
        QuotaUser: sdk.String("sapiente"),
        SystemID: sdk.String("quo"),
        UploadType: sdk.String("odit"),
        UploadProtocol: sdk.String("at"),
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        SSHPublicKeyInput: &shared.SSHPublicKeyInput{
            ExpirationTimeUsec: sdk.String("molestiae"),
            Key: sdk.String("quod"),
        },
        AccessToken: sdk.String("quod"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("totam"),
        Fields: sdk.String("porro"),
        Key: sdk.String("dolorum"),
        OauthToken: sdk.String("dicta"),
        Parent: "nam",
        PrettyPrint: sdk.Bool(false),
        ProjectID: sdk.String("officia"),
        QuotaUser: sdk.String("occaecati"),
        UploadType: sdk.String("fugit"),
        UploadProtocol: sdk.String("deleniti"),
        View: operations.OsloginUsersImportSSHPublicKeyViewEnumSecurityKey.ToPointer(),
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        SSHPublicKeyInput: &shared.SSHPublicKeyInput{
            ExpirationTimeUsec: sdk.String("totam"),
            Key: sdk.String("beatae"),
        },
        AccessToken: sdk.String("commodi"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("modi"),
        Fields: sdk.String("qui"),
        Key: sdk.String("impedit"),
        OauthToken: sdk.String("cum"),
        Parent: "esse",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ipsum"),
        UploadType: sdk.String("excepturi"),
        UploadProtocol: sdk.String("aspernatur"),
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
        AccessToken: sdk.String("ad"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("sed"),
        Fields: sdk.String("iste"),
        Key: sdk.String("dolor"),
        Name: "Lester Welch",
        OauthToken: sdk.String("in"),
        OperatingSystemType: operations.OsloginUsersSSHPublicKeysDeleteOperatingSystemTypeEnumLinux.ToPointer(),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("iste"),
        UploadType: sdk.String("iure"),
        UploadProtocol: sdk.String("saepe"),
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
        AccessToken: sdk.String("architecto"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("reiciendis"),
        Fields: sdk.String("est"),
        Key: sdk.String("mollitia"),
        Name: "Ernest Ebert",
        OauthToken: sdk.String("nobis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("enim"),
        UploadType: sdk.String("omnis"),
        UploadProtocol: sdk.String("nemo"),
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
            ExpirationTimeUsec: sdk.String("excepturi"),
            Key: sdk.String("accusantium"),
        },
        AccessToken: sdk.String("iure"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("doloribus"),
        Fields: sdk.String("sapiente"),
        Key: sdk.String("architecto"),
        Name: "Mike Nicolas",
        OauthToken: sdk.String("mollitia"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("occaecati"),
        UpdateMask: sdk.String("numquam"),
        UploadType: sdk.String("commodi"),
        UploadProtocol: sdk.String("quam"),
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
