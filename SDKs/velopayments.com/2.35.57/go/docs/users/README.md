# Users

### Available Operations

* [DeleteUserByIDV2](#deleteuserbyidv2) - Delete a User
* [DisableUserV2](#disableuserv2) - Disable a User
* [EnableUserV2](#enableuserv2) - Enable a User
* [GetSelf](#getself) - Get Self
* [GetUserByIDV2](#getuserbyidv2) - Get User
* [InviteUser](#inviteuser) - Invite a User
* [ListUsers](#listusers) - List Users
* [RegisterSms](#registersms) - Register SMS Number
* [ResendToken](#resendtoken) - Resend a token
* [RoleUpdate](#roleupdate) - Update User Role
* [UnlockUserV2](#unlockuserv2) - Unlock a User
* [UnregisterMFA](#unregistermfa) - Unregister MFA for the user
* [UnregisterMFAForSelf](#unregistermfaforself) - Unregister MFA for Self
* [UpdatePasswordSelf](#updatepasswordself) - Update Password for self
* [UserDetailsUpdate](#userdetailsupdate) - Update User Details
* [UserDetailsUpdateForSelf](#userdetailsupdateforself) - Update User Details for self
* [ValidatePasswordSelf](#validatepasswordself) - Validate the proposed password

## DeleteUserByIDV2

Delete User by Id.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Users.DeleteUserByIDV2(ctx, operations.DeleteUserByIDV2Request{
        UserID: "a53e5ae6-e0ac-4184-82b9-c247c88373a4",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DisableUserV2

<p>If a user is enabled this endpoint will disable them </p>
<p>The invoker must have the appropriate permission </p>
<p>A user cannot disable themself </p>
<p>When a user is disabled any active access tokens will be revoked and the user will not be able to log in</p>


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Users.DisableUserV2(ctx, operations.DisableUserV2Request{
        UserID: "0e1942f3-2e55-4055-b56f-5d56d0bd0af2",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## EnableUserV2

<p>If a user has been disabled this endpoints will enable them </p>
<p>The invoker must have the appropriate permission </p>
<p>A user cannot enable themself </p>
<p>If the user is a payor user and the payor is disabled this operation is not allowed</p>
<p>If enabling a payor user would breach the limit for master admin payor users the request will be rejected </p>


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Users.EnableUserV2(ctx, operations.EnableUserV2Request{
        UserID: "dfe13db4-f62c-4ba3-b894-1aebc0b80a69",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetSelf

Get the user's details


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Users.GetSelf(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.UserResponse != nil {
        // handle response
    }
}
```

## GetUserByIDV2

Get a Single User by Id.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Users.GetUserByIDV2(ctx, operations.GetUserByIDV2Request{
        UserID: "24d3b2ec-fcc8-4f89-9010-f5dd3d6fa180",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UserResponse != nil {
        // handle response
    }
}
```

## InviteUser

Create a User and invite them to the system


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Users.InviteUser(ctx, shared.InviteUserRequest{
        Email: "foo@example.com",
        EntityID: sdk.String("7fffa261-ac68-49e6-b605-d24a444d9206"),
        FirstName: sdk.String("John"),
        LastName: sdk.String("Doe"),
        MfaType: shared.InviteUserRequestMfaTypeEnumTotp,
        PrimaryContactNumber: "11235555555",
        Roles: []string{
            "voluptates",
            "ad",
        },
        SecondaryContactNumber: sdk.String("11235555550"),
        SmsNumber: "11235555555",
        UserType: shared.InviteUserRequestUserTypeEnumPayee.ToPointer(),
        VerificationCode: sdk.String("123456"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ListUsers

Get a paginated response listing the Users

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Users.ListUsers(ctx, operations.ListUsersRequest{
        EntityID: sdk.String("4c82f168-a363-4c88-b3e4-84380b1f6b8c"),
        Page: sdk.Int(646491),
        PageSize: sdk.Int(168926),
        PayeeType: shared.PayeeTypeEnumCompany.ToPointer(),
        Sort: sdk.String("nihil"),
        Status: shared.UserStatusEnumEnabled.ToPointer(),
        Type: shared.UserTypeEnumPayor.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PagedUserResponse != nil {
        // handle response
    }
}
```

## RegisterSms

<p>Register an Sms number and send an OTP to it </p>
<p>Used for manual verification of a user </p>
<p>The backoffice user initiates the request to send the OTP to the user's sms </p>
<p>The user then reads back the OTP which the backoffice user enters in the verifactionCode property for requests that require it</p>


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Users.RegisterSms(ctx, shared.RegisterSmsRequest{
        SmsNumber: "11235555555",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ResendToken

<p>Resend the specified token </p>
<p>The token to resend must already exist for the user </p>
<p>It will be revoked and a new one issued</p>


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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Users.ResendToken(ctx, operations.ResendTokenRequest{
        ResendTokenRequest: shared.ResendTokenRequest{
            TokenType: shared.ResendTokenRequestTokenTypeEnumInviteMfaUser,
            VerificationCode: sdk.String("123456"),
        },
        UserID: "5a60a04c-495c-4c69-9171-b51c1bdb1cf4",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## RoleUpdate

<p>Update the user's Role</p>


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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Users.RoleUpdate(ctx, operations.RoleUpdateRequest{
        RoleUpdateRequest: shared.RoleUpdateRequest{
            Roles: []string{
                "corrupti",
                "rem",
                "atque",
            },
            VerificationCode: sdk.String("123456"),
        },
        UserID: "ebdfc4cc-ca99-4bc7-bc0b-2dce10873e42",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UnlockUserV2

If a user is locked this endpoint will unlock them


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Users.UnlockUserV2(ctx, operations.UnlockUserV2Request{
        UserID: "b006d678-878b-4a85-81a5-8208c54fefa9",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UnregisterMFA

<p>Unregister the MFA device for the user </p>
<p>If the user does not require further verification then a register new MFA device token will be sent to them via their email address</p>


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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Users.UnregisterMFA(ctx, operations.UnregisterMFARequest{
        UnregisterMFARequest: shared.UnregisterMFARequest{
            MfaType: shared.UnregisterMFARequestMFATypeEnumTotp,
            VerificationCode: sdk.String("123456"),
        },
        UserID: "c95f2eac-5565-4d30-bcfe-e81206e2813f",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UnregisterMFAForSelf

<p>Unregister the MFA device for the user </p>
<p>If the user does not require further verification then a register new MFA device token will be sent to them via their email address</p>


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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Users.UnregisterMFAForSelf(ctx, operations.UnregisterMFAForSelfRequest{
        Authorization: sdk.String("laborum"),
        SelfMFATypeUnregisterRequest: shared.SelfMFATypeUnregisterRequest{
            MfaType: shared.SelfMFATypeUnregisterRequestMFATypeEnumTotp,
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

## UpdatePasswordSelf

Update password for self


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Users.UpdatePasswordSelf(ctx, shared.SelfUpdatePasswordRequest{
        NewPassword: "My_new_password",
        OldPassword: "My_current_password",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UserDetailsUpdate

<p>Update the profile details for the given user</p>
<p>When updating Payor users with the role of payor.master_admin a verificationCode is required</p>


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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Users.UserDetailsUpdate(ctx, operations.UserDetailsUpdateRequest{
        UserDetailsUpdateRequest: shared.UserDetailsUpdateRequest{
            Email: sdk.String("foo@example.com"),
            FirstName: sdk.String("John"),
            LastName: sdk.String("Doe"),
            MfaType: shared.MFATypeEnumTotp.ToPointer(),
            PrimaryContactNumber: sdk.String("11235555555"),
            SecondaryContactNumber: sdk.String("11235555550"),
            SmsNumber: sdk.String("11235555555"),
            VerificationCode: sdk.String("123456"),
        },
        UserID: "4a41c480-d3f2-4132-af03-102d514f4cc6",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UserDetailsUpdateForSelf

<p>Update the profile details for the given user</p>
<p>Only Payee user types are supported</p>


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Users.UserDetailsUpdateForSelf(ctx, shared.PayeeUserSelfUpdateRequest{
        Email: sdk.String("foo@example.com"),
        FirstName: sdk.String("John"),
        LastName: sdk.String("Doe"),
        PrimaryContactNumber: sdk.String("11235555555"),
        SecondaryContactNumber: sdk.String("11235555550"),
        SmsNumber: sdk.String("11235555555"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ValidatePasswordSelf

validate the password and return a score


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Users.ValidatePasswordSelf(ctx, shared.PasswordRequest{
        Password: "My_strong_password",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ValidatePasswordResponse != nil {
        // handle response
    }
}
```
