# Relyingparty

### Available Operations

* [IdentitytoolkitRelyingpartyCreateAuthURI](#identitytoolkitrelyingpartycreateauthuri) - Creates the URI used by the IdP to authenticate the user.
* [IdentitytoolkitRelyingpartyDeleteAccount](#identitytoolkitrelyingpartydeleteaccount) - Delete user account.
* [IdentitytoolkitRelyingpartyDownloadAccount](#identitytoolkitrelyingpartydownloadaccount) - Batch download user accounts.
* [IdentitytoolkitRelyingpartyEmailLinkSignin](#identitytoolkitrelyingpartyemaillinksignin) - Reset password for a user.
* [IdentitytoolkitRelyingpartyGetAccountInfo](#identitytoolkitrelyingpartygetaccountinfo) - Returns the account info.
* [IdentitytoolkitRelyingpartyGetOobConfirmationCode](#identitytoolkitrelyingpartygetoobconfirmationcode) - Get a code for user action confirmation.
* [IdentitytoolkitRelyingpartyGetProjectConfig](#identitytoolkitrelyingpartygetprojectconfig) - Get project configuration.
* [IdentitytoolkitRelyingpartyGetPublicKeys](#identitytoolkitrelyingpartygetpublickeys) - Get token signing public key.
* [IdentitytoolkitRelyingpartyGetRecaptchaParam](#identitytoolkitrelyingpartygetrecaptchaparam) - Get recaptcha secure param.
* [IdentitytoolkitRelyingpartyResetPassword](#identitytoolkitrelyingpartyresetpassword) - Reset password for a user.
* [IdentitytoolkitRelyingpartySendVerificationCode](#identitytoolkitrelyingpartysendverificationcode) - Send SMS verification code.
* [IdentitytoolkitRelyingpartySetAccountInfo](#identitytoolkitrelyingpartysetaccountinfo) - Set account info for a user.
* [IdentitytoolkitRelyingpartySetProjectConfig](#identitytoolkitrelyingpartysetprojectconfig) - Set project configuration.
* [IdentitytoolkitRelyingpartySignOutUser](#identitytoolkitrelyingpartysignoutuser) - Sign out user.
* [IdentitytoolkitRelyingpartySignupNewUser](#identitytoolkitrelyingpartysignupnewuser) - Signup new user.
* [IdentitytoolkitRelyingpartyUploadAccount](#identitytoolkitrelyingpartyuploadaccount) - Batch upload existing user accounts.
* [IdentitytoolkitRelyingpartyVerifyAssertion](#identitytoolkitrelyingpartyverifyassertion) - Verifies the assertion returned by the IdP.
* [IdentitytoolkitRelyingpartyVerifyCustomToken](#identitytoolkitrelyingpartyverifycustomtoken) - Verifies the developer asserted ID token.
* [IdentitytoolkitRelyingpartyVerifyPassword](#identitytoolkitrelyingpartyverifypassword) - Verifies the user entered password.
* [IdentitytoolkitRelyingpartyVerifyPhoneNumber](#identitytoolkitrelyingpartyverifyphonenumber) - Verifies ownership of a phone number and creates/updates the user account accordingly.

## IdentitytoolkitRelyingpartyCreateAuthURI

Creates the URI used by the IdP to authenticate the user.

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
    res, err := s.Relyingparty.IdentitytoolkitRelyingpartyCreateAuthURI(ctx, operations.IdentitytoolkitRelyingpartyCreateAuthURIRequest{
        IdentitytoolkitRelyingpartyCreateAuthURIRequest: &shared.IdentitytoolkitRelyingpartyCreateAuthURIRequest{
            AppID: sdk.String("quis"),
            AuthFlowType: sdk.String("veritatis"),
            ClientID: sdk.String("deserunt"),
            Context: sdk.String("perferendis"),
            ContinueURI: sdk.String("ipsam"),
            CustomParameter: map[string]string{
                "sapiente": "quo",
                "odit": "at",
                "at": "maiores",
                "molestiae": "quod",
            },
            HostedDomain: sdk.String("quod"),
            Identifier: sdk.String("esse"),
            OauthConsumerKey: sdk.String("totam"),
            OauthScope: sdk.String("porro"),
            OpenidRealm: sdk.String("dolorum"),
            OtaApp: sdk.String("dicta"),
            ProviderID: sdk.String("nam"),
            SessionID: sdk.String("officia"),
            TenantID: sdk.String("occaecati"),
            TenantProjectNumber: sdk.String("fugit"),
        },
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("deleniti"),
        Key: sdk.String("hic"),
        OauthToken: sdk.String("optio"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("totam"),
        UserIP: sdk.String("beatae"),
    }, operations.IdentitytoolkitRelyingpartyCreateAuthURISecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateAuthURIResponse != nil {
        // handle response
    }
}
```

## IdentitytoolkitRelyingpartyDeleteAccount

Delete user account.

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
    res, err := s.Relyingparty.IdentitytoolkitRelyingpartyDeleteAccount(ctx, operations.IdentitytoolkitRelyingpartyDeleteAccountRequest{
        IdentitytoolkitRelyingpartyDeleteAccountRequest: &shared.IdentitytoolkitRelyingpartyDeleteAccountRequest{
            DelegatedProjectNumber: sdk.String("commodi"),
            IDToken: sdk.String("molestiae"),
            LocalID: sdk.String("modi"),
        },
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("qui"),
        Key: sdk.String("impedit"),
        OauthToken: sdk.String("cum"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("esse"),
        UserIP: sdk.String("ipsum"),
    }, operations.IdentitytoolkitRelyingpartyDeleteAccountSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteAccountResponse != nil {
        // handle response
    }
}
```

## IdentitytoolkitRelyingpartyDownloadAccount

Batch download user accounts.

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
    res, err := s.Relyingparty.IdentitytoolkitRelyingpartyDownloadAccount(ctx, operations.IdentitytoolkitRelyingpartyDownloadAccountRequest{
        IdentitytoolkitRelyingpartyDownloadAccountRequest: &shared.IdentitytoolkitRelyingpartyDownloadAccountRequest{
            DelegatedProjectNumber: sdk.String("excepturi"),
            MaxResults: sdk.Int64(135218),
            NextPageToken: sdk.String("perferendis"),
            TargetProjectID: sdk.String("ad"),
        },
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("natus"),
        Key: sdk.String("sed"),
        OauthToken: sdk.String("iste"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dolor"),
        UserIP: sdk.String("natus"),
    }, operations.IdentitytoolkitRelyingpartyDownloadAccountSecurity{
        Option1: &operations.IdentitytoolkitRelyingpartyDownloadAccountSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DownloadAccountResponse != nil {
        // handle response
    }
}
```

## IdentitytoolkitRelyingpartyEmailLinkSignin

Reset password for a user.

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
    res, err := s.Relyingparty.IdentitytoolkitRelyingpartyEmailLinkSignin(ctx, operations.IdentitytoolkitRelyingpartyEmailLinkSigninRequest{
        IdentitytoolkitRelyingpartyEmailLinkSigninRequest: &shared.IdentitytoolkitRelyingpartyEmailLinkSigninRequest{
            Email: sdk.String("Tyra.Turcotte35@yahoo.com"),
            IDToken: sdk.String("iste"),
            OobCode: sdk.String("iure"),
        },
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("saepe"),
        Key: sdk.String("quidem"),
        OauthToken: sdk.String("architecto"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ipsa"),
        UserIP: sdk.String("reiciendis"),
    }, operations.IdentitytoolkitRelyingpartyEmailLinkSigninSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EmailLinkSigninResponse != nil {
        // handle response
    }
}
```

## IdentitytoolkitRelyingpartyGetAccountInfo

Returns the account info.

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
    res, err := s.Relyingparty.IdentitytoolkitRelyingpartyGetAccountInfo(ctx, operations.IdentitytoolkitRelyingpartyGetAccountInfoRequest{
        IdentitytoolkitRelyingpartyGetAccountInfoRequest: &shared.IdentitytoolkitRelyingpartyGetAccountInfoRequest{
            DelegatedProjectNumber: sdk.String("est"),
            Email: []string{
                "laborum",
                "dolores",
                "dolorem",
            },
            IDToken: sdk.String("corporis"),
            LocalID: []string{
                "nobis",
            },
            PhoneNumber: []string{
                "omnis",
                "nemo",
            },
        },
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("minima"),
        Key: sdk.String("excepturi"),
        OauthToken: sdk.String("accusantium"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("iure"),
        UserIP: sdk.String("culpa"),
    }, operations.IdentitytoolkitRelyingpartyGetAccountInfoSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetAccountInfoResponse != nil {
        // handle response
    }
}
```

## IdentitytoolkitRelyingpartyGetOobConfirmationCode

Get a code for user action confirmation.

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
    res, err := s.Relyingparty.IdentitytoolkitRelyingpartyGetOobConfirmationCode(ctx, operations.IdentitytoolkitRelyingpartyGetOobConfirmationCodeRequest{
        Relyingparty: &shared.Relyingparty{
            AndroidInstallApp: sdk.Bool(false),
            AndroidMinimumVersion: sdk.String("doloribus"),
            AndroidPackageName: sdk.String("sapiente"),
            CanHandleCodeInApp: sdk.Bool(false),
            CaptchaResp: sdk.String("architecto"),
            Challenge: sdk.String("mollitia"),
            ContinueURL: sdk.String("dolorem"),
            Email: sdk.String("Caroline_Ziemann@yahoo.com"),
            IOSAppStoreID: sdk.String("numquam"),
            IOSBundleID: sdk.String("commodi"),
            IDToken: sdk.String("quam"),
            Kind: sdk.String("molestiae"),
            NewEmail: sdk.String("velit"),
            RequestType: sdk.String("error"),
            UserIP: sdk.String("quia"),
        },
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("quis"),
        Key: sdk.String("vitae"),
        OauthToken: sdk.String("laborum"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("animi"),
        UserIP: sdk.String("enim"),
    }, operations.IdentitytoolkitRelyingpartyGetOobConfirmationCodeSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOobConfirmationCodeResponse != nil {
        // handle response
    }
}
```

## IdentitytoolkitRelyingpartyGetProjectConfig

Get project configuration.

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
    res, err := s.Relyingparty.IdentitytoolkitRelyingpartyGetProjectConfig(ctx, operations.IdentitytoolkitRelyingpartyGetProjectConfigRequest{
        Alt: shared.AltEnumJSON.ToPointer(),
        DelegatedProjectNumber: sdk.String("odit"),
        Fields: sdk.String("quo"),
        Key: sdk.String("sequi"),
        OauthToken: sdk.String("tenetur"),
        PrettyPrint: sdk.Bool(false),
        ProjectNumber: sdk.String("ipsam"),
        QuotaUser: sdk.String("id"),
        UserIP: sdk.String("possimus"),
    }, operations.IdentitytoolkitRelyingpartyGetProjectConfigSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.IdentitytoolkitRelyingpartyGetProjectConfigResponse != nil {
        // handle response
    }
}
```

## IdentitytoolkitRelyingpartyGetPublicKeys

Get token signing public key.

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
    res, err := s.Relyingparty.IdentitytoolkitRelyingpartyGetPublicKeys(ctx, operations.IdentitytoolkitRelyingpartyGetPublicKeysRequest{
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("aut"),
        Key: sdk.String("quasi"),
        OauthToken: sdk.String("error"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("temporibus"),
        UserIP: sdk.String("laborum"),
    }, operations.IdentitytoolkitRelyingpartyGetPublicKeysSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.IdentitytoolkitRelyingpartyGetPublicKeysResponse != nil {
        // handle response
    }
}
```

## IdentitytoolkitRelyingpartyGetRecaptchaParam

Get recaptcha secure param.

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
    res, err := s.Relyingparty.IdentitytoolkitRelyingpartyGetRecaptchaParam(ctx, operations.IdentitytoolkitRelyingpartyGetRecaptchaParamRequest{
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("quasi"),
        Key: sdk.String("reiciendis"),
        OauthToken: sdk.String("voluptatibus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("vero"),
        UserIP: sdk.String("nihil"),
    }, operations.IdentitytoolkitRelyingpartyGetRecaptchaParamSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetRecaptchaParamResponse != nil {
        // handle response
    }
}
```

## IdentitytoolkitRelyingpartyResetPassword

Reset password for a user.

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
    res, err := s.Relyingparty.IdentitytoolkitRelyingpartyResetPassword(ctx, operations.IdentitytoolkitRelyingpartyResetPasswordRequest{
        IdentitytoolkitRelyingpartyResetPasswordRequest: &shared.IdentitytoolkitRelyingpartyResetPasswordRequest{
            Email: sdk.String("Whitney.Bednar@yahoo.com"),
            NewPassword: sdk.String("cum"),
            OldPassword: sdk.String("perferendis"),
            OobCode: sdk.String("doloremque"),
        },
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("reprehenderit"),
        Key: sdk.String("ut"),
        OauthToken: sdk.String("maiores"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dicta"),
        UserIP: sdk.String("corporis"),
    }, operations.IdentitytoolkitRelyingpartyResetPasswordSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ResetPasswordResponse != nil {
        // handle response
    }
}
```

## IdentitytoolkitRelyingpartySendVerificationCode

Send SMS verification code.

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
    res, err := s.Relyingparty.IdentitytoolkitRelyingpartySendVerificationCode(ctx, operations.IdentitytoolkitRelyingpartySendVerificationCodeRequest{
        IdentitytoolkitRelyingpartySendVerificationCodeRequest: &shared.IdentitytoolkitRelyingpartySendVerificationCodeRequest{
            IosReceipt: sdk.String("dolore"),
            IosSecret: sdk.String("iusto"),
            PhoneNumber: sdk.String("dicta"),
            RecaptchaToken: sdk.String("harum"),
        },
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("enim"),
        Key: sdk.String("accusamus"),
        OauthToken: sdk.String("commodi"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("repudiandae"),
        UserIP: sdk.String("quae"),
    }, operations.IdentitytoolkitRelyingpartySendVerificationCodeSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.IdentitytoolkitRelyingpartySendVerificationCodeResponse != nil {
        // handle response
    }
}
```

## IdentitytoolkitRelyingpartySetAccountInfo

Set account info for a user.

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
    res, err := s.Relyingparty.IdentitytoolkitRelyingpartySetAccountInfo(ctx, operations.IdentitytoolkitRelyingpartySetAccountInfoRequest{
        IdentitytoolkitRelyingpartySetAccountInfoRequest: &shared.IdentitytoolkitRelyingpartySetAccountInfoRequest{
            CaptchaChallenge: sdk.String("ipsum"),
            CaptchaResponse: sdk.String("quidem"),
            CreatedAt: sdk.String("molestias"),
            CustomAttributes: sdk.String("excepturi"),
            DelegatedProjectNumber: sdk.String("pariatur"),
            DeleteAttribute: []string{
                "praesentium",
                "rem",
            },
            DeleteProvider: []string{
                "quasi",
                "repudiandae",
                "sint",
                "veritatis",
            },
            DisableUser: sdk.Bool(false),
            DisplayName: sdk.String("itaque"),
            Email: sdk.String("Emily_Altenwerth13@gmail.com"),
            EmailVerified: sdk.Bool(false),
            IDToken: sdk.String("deserunt"),
            InstanceID: sdk.String("distinctio"),
            LastLoginAt: sdk.String("quibusdam"),
            LocalID: sdk.String("labore"),
            OobCode: sdk.String("modi"),
            Password: sdk.String("qui"),
            PhoneNumber: sdk.String("aliquid"),
            PhotoURL: sdk.String("cupiditate"),
            Provider: []string{
                "perferendis",
                "magni",
                "assumenda",
            },
            ReturnSecureToken: sdk.Bool(false),
            UpgradeToFederatedLogin: sdk.Bool(false),
            ValidSince: sdk.String("ipsam"),
        },
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("alias"),
        Key: sdk.String("fugit"),
        OauthToken: sdk.String("dolorum"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("excepturi"),
        UserIP: sdk.String("tempora"),
    }, operations.IdentitytoolkitRelyingpartySetAccountInfoSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SetAccountInfoResponse != nil {
        // handle response
    }
}
```

## IdentitytoolkitRelyingpartySetProjectConfig

Set project configuration.

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
    res, err := s.Relyingparty.IdentitytoolkitRelyingpartySetProjectConfig(ctx, operations.IdentitytoolkitRelyingpartySetProjectConfigRequest{
        IdentitytoolkitRelyingpartySetProjectConfigRequest: &shared.IdentitytoolkitRelyingpartySetProjectConfigRequest{
            AllowPasswordUser: sdk.Bool(false),
            APIKey: sdk.String("facilis"),
            AuthorizedDomains: []string{
                "labore",
                "delectus",
                "eum",
            },
            ChangeEmailTemplate: &shared.EmailTemplate{
                Body: sdk.String("non"),
                Format: sdk.String("eligendi"),
                From: sdk.String("sint"),
                FromDisplayName: sdk.String("aliquid"),
                ReplyTo: sdk.String("provident"),
                Subject: sdk.String("necessitatibus"),
            },
            DelegatedProjectNumber: sdk.String("sint"),
            EnableAnonymousUser: sdk.Bool(false),
            IdpConfig: []shared.IdpConfig{
                shared.IdpConfig{
                    ClientID: sdk.String("dolor"),
                    Enabled: sdk.Bool(false),
                    ExperimentPercent: sdk.Int(891555),
                    Provider: sdk.String("a"),
                    Secret: sdk.String("dolorum"),
                    WhitelistedAudiences: []string{
                        "in",
                        "illum",
                    },
                },
                shared.IdpConfig{
                    ClientID: sdk.String("maiores"),
                    Enabled: sdk.Bool(false),
                    ExperimentPercent: sdk.Int(699479),
                    Provider: sdk.String("dicta"),
                    Secret: sdk.String("magnam"),
                    WhitelistedAudiences: []string{
                        "facere",
                        "ea",
                        "aliquid",
                        "laborum",
                    },
                },
                shared.IdpConfig{
                    ClientID: sdk.String("accusamus"),
                    Enabled: sdk.Bool(false),
                    ExperimentPercent: sdk.Int(249796),
                    Provider: sdk.String("occaecati"),
                    Secret: sdk.String("enim"),
                    WhitelistedAudiences: []string{
                        "delectus",
                        "quidem",
                        "provident",
                        "nam",
                    },
                },
            },
            LegacyResetPasswordTemplate: &shared.EmailTemplate{
                Body: sdk.String("id"),
                Format: sdk.String("blanditiis"),
                From: sdk.String("deleniti"),
                FromDisplayName: sdk.String("sapiente"),
                ReplyTo: sdk.String("amet"),
                Subject: sdk.String("deserunt"),
            },
            ResetPasswordTemplate: &shared.EmailTemplate{
                Body: sdk.String("nisi"),
                Format: sdk.String("vel"),
                From: sdk.String("natus"),
                FromDisplayName: sdk.String("omnis"),
                ReplyTo: sdk.String("molestiae"),
                Subject: sdk.String("perferendis"),
            },
            UseEmailSending: sdk.Bool(false),
            VerifyEmailTemplate: &shared.EmailTemplate{
                Body: sdk.String("nihil"),
                Format: sdk.String("magnam"),
                From: sdk.String("distinctio"),
                FromDisplayName: sdk.String("id"),
                ReplyTo: sdk.String("labore"),
                Subject: sdk.String("labore"),
            },
        },
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("suscipit"),
        Key: sdk.String("natus"),
        OauthToken: sdk.String("nobis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("eum"),
        UserIP: sdk.String("vero"),
    }, operations.IdentitytoolkitRelyingpartySetProjectConfigSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.IdentitytoolkitRelyingpartySetProjectConfigResponse != nil {
        // handle response
    }
}
```

## IdentitytoolkitRelyingpartySignOutUser

Sign out user.

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
    res, err := s.Relyingparty.IdentitytoolkitRelyingpartySignOutUser(ctx, operations.IdentitytoolkitRelyingpartySignOutUserRequest{
        IdentitytoolkitRelyingpartySignOutUserRequest: &shared.IdentitytoolkitRelyingpartySignOutUserRequest{
            InstanceID: sdk.String("aspernatur"),
            LocalID: sdk.String("architecto"),
        },
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("magnam"),
        Key: sdk.String("et"),
        OauthToken: sdk.String("excepturi"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ullam"),
        UserIP: sdk.String("provident"),
    }, operations.IdentitytoolkitRelyingpartySignOutUserSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.IdentitytoolkitRelyingpartySignOutUserResponse != nil {
        // handle response
    }
}
```

## IdentitytoolkitRelyingpartySignupNewUser

Signup new user.

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
    res, err := s.Relyingparty.IdentitytoolkitRelyingpartySignupNewUser(ctx, operations.IdentitytoolkitRelyingpartySignupNewUserRequest{
        IdentitytoolkitRelyingpartySignupNewUserRequest: &shared.IdentitytoolkitRelyingpartySignupNewUserRequest{
            CaptchaChallenge: sdk.String("quos"),
            CaptchaResponse: sdk.String("sint"),
            Disabled: sdk.Bool(false),
            DisplayName: sdk.String("accusantium"),
            Email: sdk.String("Vivienne43@yahoo.com"),
            EmailVerified: sdk.Bool(false),
            IDToken: sdk.String("dolor"),
            InstanceID: sdk.String("necessitatibus"),
            LocalID: sdk.String("odit"),
            Password: sdk.String("nemo"),
            PhoneNumber: sdk.String("quasi"),
            PhotoURL: sdk.String("iure"),
            TenantID: sdk.String("doloribus"),
            TenantProjectNumber: sdk.String("debitis"),
        },
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("eius"),
        Key: sdk.String("maxime"),
        OauthToken: sdk.String("deleniti"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("facilis"),
        UserIP: sdk.String("in"),
    }, operations.IdentitytoolkitRelyingpartySignupNewUserSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SignupNewUserResponse != nil {
        // handle response
    }
}
```

## IdentitytoolkitRelyingpartyUploadAccount

Batch upload existing user accounts.

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
    res, err := s.Relyingparty.IdentitytoolkitRelyingpartyUploadAccount(ctx, operations.IdentitytoolkitRelyingpartyUploadAccountRequest{
        IdentitytoolkitRelyingpartyUploadAccountRequest: &shared.IdentitytoolkitRelyingpartyUploadAccountRequest{
            AllowOverwrite: sdk.Bool(false),
            BlockSize: sdk.Int(100226),
            CPUMemCost: sdk.Int(99569),
            DelegatedProjectNumber: sdk.String("repudiandae"),
            DkLen: sdk.Int(352312),
            HashAlgorithm: sdk.String("expedita"),
            MemoryCost: sdk.Int(469249),
            Parallelization: sdk.Int(998848),
            Rounds: sdk.Int(841140),
            SaltSeparator: sdk.String("sed"),
            SanityCheck: sdk.Bool(false),
            SignerKey: sdk.String("saepe"),
            TargetProjectID: sdk.String("pariatur"),
            Users: []shared.UserInfo{
                shared.UserInfo{
                    CreatedAt: sdk.String("consequuntur"),
                    CustomAttributes: sdk.String("praesentium"),
                    CustomAuth: sdk.Bool(false),
                    Disabled: sdk.Bool(false),
                    DisplayName: sdk.String("natus"),
                    Email: sdk.String("Bradford_Satterfield80@gmail.com"),
                    EmailVerified: sdk.Bool(false),
                    LastLoginAt: sdk.String("ea"),
                    LocalID: sdk.String("excepturi"),
                    PasswordHash: sdk.String("odit"),
                    PasswordUpdatedAt: sdk.Float64(4071.83),
                    PhoneNumber: sdk.String("accusantium"),
                    PhotoURL: sdk.String("ab"),
                    ProviderUserInfo: []shared.UserInfoProviderUserInfo{
                        shared.UserInfoProviderUserInfo{
                            DisplayName: sdk.String("quidem"),
                            Email: sdk.String("Jacey.Johnston86@yahoo.com"),
                            FederatedID: sdk.String("nemo"),
                            PhoneNumber: sdk.String("voluptatibus"),
                            PhotoURL: sdk.String("perferendis"),
                            ProviderID: sdk.String("fugiat"),
                            RawID: sdk.String("amet"),
                            ScreenName: sdk.String("aut"),
                        },
                        shared.UserInfoProviderUserInfo{
                            DisplayName: sdk.String("cumque"),
                            Email: sdk.String("Tyreek.Renner33@yahoo.com"),
                            FederatedID: sdk.String("totam"),
                            PhoneNumber: sdk.String("dignissimos"),
                            PhotoURL: sdk.String("eaque"),
                            ProviderID: sdk.String("quis"),
                            RawID: sdk.String("nesciunt"),
                            ScreenName: sdk.String("eos"),
                        },
                        shared.UserInfoProviderUserInfo{
                            DisplayName: sdk.String("perferendis"),
                            Email: sdk.String("Peggie87@gmail.com"),
                            FederatedID: sdk.String("nostrum"),
                            PhoneNumber: sdk.String("hic"),
                            PhotoURL: sdk.String("recusandae"),
                            ProviderID: sdk.String("omnis"),
                            RawID: sdk.String("facilis"),
                            ScreenName: sdk.String("perspiciatis"),
                        },
                        shared.UserInfoProviderUserInfo{
                            DisplayName: sdk.String("voluptatem"),
                            Email: sdk.String("Casimer.Kutch@hotmail.com"),
                            FederatedID: sdk.String("occaecati"),
                            PhoneNumber: sdk.String("rerum"),
                            PhotoURL: sdk.String("adipisci"),
                            ProviderID: sdk.String("asperiores"),
                            RawID: sdk.String("earum"),
                            ScreenName: sdk.String("modi"),
                        },
                    },
                    RawPassword: sdk.String("iste"),
                    Salt: sdk.String("dolorum"),
                    ScreenName: sdk.String("deleniti"),
                    ValidSince: sdk.String("pariatur"),
                    Version: sdk.Int(589910),
                },
            },
        },
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("nobis"),
        Key: sdk.String("libero"),
        OauthToken: sdk.String("delectus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quaerat"),
        UserIP: sdk.String("quos"),
    }, operations.IdentitytoolkitRelyingpartyUploadAccountSecurity{
        Option1: &operations.IdentitytoolkitRelyingpartyUploadAccountSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UploadAccountResponse != nil {
        // handle response
    }
}
```

## IdentitytoolkitRelyingpartyVerifyAssertion

Verifies the assertion returned by the IdP.

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
    res, err := s.Relyingparty.IdentitytoolkitRelyingpartyVerifyAssertion(ctx, operations.IdentitytoolkitRelyingpartyVerifyAssertionRequest{
        IdentitytoolkitRelyingpartyVerifyAssertionRequest: &shared.IdentitytoolkitRelyingpartyVerifyAssertionRequest{
            AutoCreate: sdk.Bool(false),
            DelegatedProjectNumber: sdk.String("aliquid"),
            IDToken: sdk.String("dolorem"),
            InstanceID: sdk.String("dolorem"),
            PendingIDToken: sdk.String("dolor"),
            PostBody: sdk.String("qui"),
            RequestURI: sdk.String("ipsum"),
            ReturnIdpCredential: sdk.Bool(false),
            ReturnRefreshToken: sdk.Bool(false),
            ReturnSecureToken: sdk.Bool(false),
            SessionID: sdk.String("hic"),
            TenantID: sdk.String("excepturi"),
            TenantProjectNumber: sdk.String("cum"),
        },
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("voluptate"),
        Key: sdk.String("dignissimos"),
        OauthToken: sdk.String("reiciendis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("amet"),
        UserIP: sdk.String("dolorum"),
    }, operations.IdentitytoolkitRelyingpartyVerifyAssertionSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.VerifyAssertionResponse != nil {
        // handle response
    }
}
```

## IdentitytoolkitRelyingpartyVerifyCustomToken

Verifies the developer asserted ID token.

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
    res, err := s.Relyingparty.IdentitytoolkitRelyingpartyVerifyCustomToken(ctx, operations.IdentitytoolkitRelyingpartyVerifyCustomTokenRequest{
        IdentitytoolkitRelyingpartyVerifyCustomTokenRequest: &shared.IdentitytoolkitRelyingpartyVerifyCustomTokenRequest{
            DelegatedProjectNumber: sdk.String("numquam"),
            InstanceID: sdk.String("veritatis"),
            ReturnSecureToken: sdk.Bool(false),
            Token: sdk.String("ipsa"),
        },
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("ipsa"),
        Key: sdk.String("iure"),
        OauthToken: sdk.String("odio"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quaerat"),
        UserIP: sdk.String("accusamus"),
    }, operations.IdentitytoolkitRelyingpartyVerifyCustomTokenSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.VerifyCustomTokenResponse != nil {
        // handle response
    }
}
```

## IdentitytoolkitRelyingpartyVerifyPassword

Verifies the user entered password.

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
    res, err := s.Relyingparty.IdentitytoolkitRelyingpartyVerifyPassword(ctx, operations.IdentitytoolkitRelyingpartyVerifyPasswordRequest{
        IdentitytoolkitRelyingpartyVerifyPasswordRequest: &shared.IdentitytoolkitRelyingpartyVerifyPasswordRequest{
            CaptchaChallenge: sdk.String("quidem"),
            CaptchaResponse: sdk.String("voluptatibus"),
            DelegatedProjectNumber: sdk.String("voluptas"),
            Email: sdk.String("Chelsea85@yahoo.com"),
            IDToken: sdk.String("ab"),
            InstanceID: sdk.String("soluta"),
            Password: sdk.String("dolorum"),
            PendingIDToken: sdk.String("iusto"),
            ReturnSecureToken: sdk.Bool(false),
            TenantID: sdk.String("voluptate"),
            TenantProjectNumber: sdk.String("dolorum"),
        },
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("deleniti"),
        Key: sdk.String("omnis"),
        OauthToken: sdk.String("necessitatibus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("distinctio"),
        UserIP: sdk.String("asperiores"),
    }, operations.IdentitytoolkitRelyingpartyVerifyPasswordSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.VerifyPasswordResponse != nil {
        // handle response
    }
}
```

## IdentitytoolkitRelyingpartyVerifyPhoneNumber

Verifies ownership of a phone number and creates/updates the user account accordingly.

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
    res, err := s.Relyingparty.IdentitytoolkitRelyingpartyVerifyPhoneNumber(ctx, operations.IdentitytoolkitRelyingpartyVerifyPhoneNumberRequest{
        IdentitytoolkitRelyingpartyVerifyPhoneNumberRequest: &shared.IdentitytoolkitRelyingpartyVerifyPhoneNumberRequest{
            Code: sdk.String("nihil"),
            IDToken: sdk.String("ipsum"),
            Operation: sdk.String("voluptate"),
            PhoneNumber: sdk.String("id"),
            SessionInfo: sdk.String("saepe"),
            TemporaryProof: sdk.String("eius"),
            VerificationProof: sdk.String("aspernatur"),
        },
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("perferendis"),
        Key: sdk.String("amet"),
        OauthToken: sdk.String("optio"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("accusamus"),
        UserIP: sdk.String("ad"),
    }, operations.IdentitytoolkitRelyingpartyVerifyPhoneNumberSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.IdentitytoolkitRelyingpartyVerifyPhoneNumberResponse != nil {
        // handle response
    }
}
```
