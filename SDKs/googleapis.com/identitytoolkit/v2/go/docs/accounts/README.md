# Accounts

### Available Operations

* [IdentitytoolkitAccountsMfaEnrollmentFinalize](#identitytoolkitaccountsmfaenrollmentfinalize) - Finishes enrolling a second factor for the user.
* [IdentitytoolkitAccountsMfaEnrollmentStart](#identitytoolkitaccountsmfaenrollmentstart) - Step one of the MFA enrollment process. In SMS case, this sends an SMS verification code to the user.
* [IdentitytoolkitAccountsMfaEnrollmentWithdraw](#identitytoolkitaccountsmfaenrollmentwithdraw) - Revokes one second factor from the enrolled second factors for an account.
* [IdentitytoolkitAccountsMfaSignInFinalize](#identitytoolkitaccountsmfasigninfinalize) - Verifies the MFA challenge and performs sign-in
* [IdentitytoolkitAccountsMfaSignInStart](#identitytoolkitaccountsmfasigninstart) - Sends the MFA challenge
* [IdentitytoolkitAccountsPasskeyEnrollmentFinalize](#identitytoolkitaccountspasskeyenrollmentfinalize) - Finishes enrolling a passkey credential for the user.
* [IdentitytoolkitAccountsPasskeyEnrollmentStart](#identitytoolkitaccountspasskeyenrollmentstart) - Step one of the passkey enrollment process. Returns a challenge and parameters for creation of the passkey credential.
* [IdentitytoolkitAccountsPasskeySignInFinalize](#identitytoolkitaccountspasskeysigninfinalize) - Verifies the passkey assertion and signs the user in.
* [IdentitytoolkitAccountsPasskeySignInStart](#identitytoolkitaccountspasskeysigninstart) - Creates and returns the passkey challenge
* [IdentitytoolkitAccountsRevokeToken](#identitytoolkitaccountsrevoketoken) - Revokes a user's token from an Identity Provider (IdP). This is done by manually providing an IdP credential, and the token types for revocation. An [API key](https://cloud.google.com/docs/authentication/api-keys) is required in the request in order to identify the Google Cloud project.

## IdentitytoolkitAccountsMfaEnrollmentFinalize

Finishes enrolling a second factor for the user.

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
    res, err := s.Accounts.IdentitytoolkitAccountsMfaEnrollmentFinalize(ctx, operations.IdentitytoolkitAccountsMfaEnrollmentFinalizeRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleCloudIdentitytoolkitV2FinalizeMfaEnrollmentRequest: &shared.GoogleCloudIdentitytoolkitV2FinalizeMfaEnrollmentRequest{
            DisplayName: sdk.String("minus"),
            IDToken: sdk.String("placeat"),
            PhoneVerificationInfo: &shared.GoogleCloudIdentitytoolkitV2FinalizeMfaPhoneRequestInfo{
                AndroidVerificationProof: sdk.String("voluptatum"),
                Code: sdk.String("iusto"),
                PhoneNumber: sdk.String("excepturi"),
                SessionInfo: sdk.String("nisi"),
            },
            TenantID: sdk.String("recusandae"),
            TotpVerificationInfo: &shared.GoogleCloudIdentitytoolkitV2FinalizeMfaTotpEnrollmentRequestInfo{
                SessionInfo: sdk.String("temporibus"),
                VerificationCode: sdk.String("ab"),
            },
        },
        AccessToken: sdk.String("quis"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("deserunt"),
        Fields: sdk.String("perferendis"),
        Key: sdk.String("ipsam"),
        OauthToken: sdk.String("repellendus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("sapiente"),
        UploadType: sdk.String("quo"),
        UploadProtocol: sdk.String("odit"),
    }, operations.IdentitytoolkitAccountsMfaEnrollmentFinalizeSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudIdentitytoolkitV2FinalizeMfaEnrollmentResponse != nil {
        // handle response
    }
}
```

## IdentitytoolkitAccountsMfaEnrollmentStart

Step one of the MFA enrollment process. In SMS case, this sends an SMS verification code to the user.

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
    res, err := s.Accounts.IdentitytoolkitAccountsMfaEnrollmentStart(ctx, operations.IdentitytoolkitAccountsMfaEnrollmentStartRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleCloudIdentitytoolkitV2StartMfaEnrollmentRequest: &shared.GoogleCloudIdentitytoolkitV2StartMfaEnrollmentRequest{
            IDToken: sdk.String("at"),
            PhoneEnrollmentInfo: &shared.GoogleCloudIdentitytoolkitV2StartMfaPhoneRequestInfo{
                AutoRetrievalInfo: &shared.GoogleCloudIdentitytoolkitV2AutoRetrievalInfo{
                    AppSignatureHash: sdk.String("maiores"),
                },
                IosReceipt: sdk.String("molestiae"),
                IosSecret: sdk.String("quod"),
                PhoneNumber: sdk.String("quod"),
                PlayIntegrityToken: sdk.String("esse"),
                RecaptchaToken: sdk.String("totam"),
                SafetyNetToken: sdk.String("porro"),
            },
            TenantID: sdk.String("dolorum"),
            TotpEnrollmentInfo: map[string]interface{}{
                "nam": "officia",
            },
        },
        AccessToken: sdk.String("occaecati"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("deleniti"),
        Fields: sdk.String("hic"),
        Key: sdk.String("optio"),
        OauthToken: sdk.String("totam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("beatae"),
        UploadType: sdk.String("commodi"),
        UploadProtocol: sdk.String("molestiae"),
    }, operations.IdentitytoolkitAccountsMfaEnrollmentStartSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudIdentitytoolkitV2StartMfaEnrollmentResponse != nil {
        // handle response
    }
}
```

## IdentitytoolkitAccountsMfaEnrollmentWithdraw

Revokes one second factor from the enrolled second factors for an account.

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
    res, err := s.Accounts.IdentitytoolkitAccountsMfaEnrollmentWithdraw(ctx, operations.IdentitytoolkitAccountsMfaEnrollmentWithdrawRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleCloudIdentitytoolkitV2WithdrawMfaRequest: &shared.GoogleCloudIdentitytoolkitV2WithdrawMfaRequest{
            IDToken: sdk.String("qui"),
            MfaEnrollmentID: sdk.String("impedit"),
            TenantID: sdk.String("cum"),
        },
        AccessToken: sdk.String("esse"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("excepturi"),
        Fields: sdk.String("aspernatur"),
        Key: sdk.String("perferendis"),
        OauthToken: sdk.String("ad"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("natus"),
        UploadType: sdk.String("sed"),
        UploadProtocol: sdk.String("iste"),
    }, operations.IdentitytoolkitAccountsMfaEnrollmentWithdrawSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudIdentitytoolkitV2WithdrawMfaResponse != nil {
        // handle response
    }
}
```

## IdentitytoolkitAccountsMfaSignInFinalize

Verifies the MFA challenge and performs sign-in

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
    res, err := s.Accounts.IdentitytoolkitAccountsMfaSignInFinalize(ctx, operations.IdentitytoolkitAccountsMfaSignInFinalizeRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleCloudIdentitytoolkitV2FinalizeMfaSignInRequest: &shared.GoogleCloudIdentitytoolkitV2FinalizeMfaSignInRequest{
            MfaEnrollmentID: sdk.String("natus"),
            MfaPendingCredential: sdk.String("laboriosam"),
            PhoneVerificationInfo: &shared.GoogleCloudIdentitytoolkitV2FinalizeMfaPhoneRequestInfo{
                AndroidVerificationProof: sdk.String("hic"),
                Code: sdk.String("saepe"),
                PhoneNumber: sdk.String("fuga"),
                SessionInfo: sdk.String("in"),
            },
            TenantID: sdk.String("corporis"),
            TotpVerificationInfo: &shared.GoogleCloudIdentitytoolkitV2MfaTotpSignInRequestInfo{
                VerificationCode: sdk.String("iste"),
            },
        },
        AccessToken: sdk.String("iure"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("quidem"),
        Fields: sdk.String("architecto"),
        Key: sdk.String("ipsa"),
        OauthToken: sdk.String("reiciendis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("est"),
        UploadType: sdk.String("mollitia"),
        UploadProtocol: sdk.String("laborum"),
    }, operations.IdentitytoolkitAccountsMfaSignInFinalizeSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudIdentitytoolkitV2FinalizeMfaSignInResponse != nil {
        // handle response
    }
}
```

## IdentitytoolkitAccountsMfaSignInStart

Sends the MFA challenge

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
    res, err := s.Accounts.IdentitytoolkitAccountsMfaSignInStart(ctx, operations.IdentitytoolkitAccountsMfaSignInStartRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleCloudIdentitytoolkitV2StartMfaSignInRequest: &shared.GoogleCloudIdentitytoolkitV2StartMfaSignInRequest{
            MfaEnrollmentID: sdk.String("dolorem"),
            MfaPendingCredential: sdk.String("corporis"),
            PhoneSignInInfo: &shared.GoogleCloudIdentitytoolkitV2StartMfaPhoneRequestInfo{
                AutoRetrievalInfo: &shared.GoogleCloudIdentitytoolkitV2AutoRetrievalInfo{
                    AppSignatureHash: sdk.String("explicabo"),
                },
                IosReceipt: sdk.String("nobis"),
                IosSecret: sdk.String("enim"),
                PhoneNumber: sdk.String("omnis"),
                PlayIntegrityToken: sdk.String("nemo"),
                RecaptchaToken: sdk.String("minima"),
                SafetyNetToken: sdk.String("excepturi"),
            },
            TenantID: sdk.String("accusantium"),
        },
        AccessToken: sdk.String("iure"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("doloribus"),
        Fields: sdk.String("sapiente"),
        Key: sdk.String("architecto"),
        OauthToken: sdk.String("mollitia"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dolorem"),
        UploadType: sdk.String("culpa"),
        UploadProtocol: sdk.String("consequuntur"),
    }, operations.IdentitytoolkitAccountsMfaSignInStartSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudIdentitytoolkitV2StartMfaSignInResponse != nil {
        // handle response
    }
}
```

## IdentitytoolkitAccountsPasskeyEnrollmentFinalize

Finishes enrolling a passkey credential for the user.

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
    res, err := s.Accounts.IdentitytoolkitAccountsPasskeyEnrollmentFinalize(ctx, operations.IdentitytoolkitAccountsPasskeyEnrollmentFinalizeRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleCloudIdentitytoolkitV2FinalizePasskeyEnrollmentRequest: &shared.GoogleCloudIdentitytoolkitV2FinalizePasskeyEnrollmentRequest{
            AuthenticatorRegistrationResponse: &shared.GoogleCloudIdentitytoolkitV2AuthenticatorRegistrationResponse{
                AuthenticatorAttestationResponse: &shared.GoogleCloudIdentitytoolkitV2AuthenticatorAttestationResponse{
                    AttestationObject: sdk.String("mollitia"),
                    ClientDataJSON: sdk.String("occaecati"),
                    Transports: []string{
                        "commodi",
                        "quam",
                    },
                },
                CredentialID: sdk.String("molestiae"),
                CredentialType: sdk.String("velit"),
            },
            IDToken: sdk.String("error"),
            TenantID: sdk.String("quia"),
        },
        AccessToken: sdk.String("quis"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("laborum"),
        Fields: sdk.String("animi"),
        Key: sdk.String("enim"),
        OauthToken: sdk.String("odit"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quo"),
        UploadType: sdk.String("sequi"),
        UploadProtocol: sdk.String("tenetur"),
    }, operations.IdentitytoolkitAccountsPasskeyEnrollmentFinalizeSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudIdentitytoolkitV2FinalizePasskeyEnrollmentResponse != nil {
        // handle response
    }
}
```

## IdentitytoolkitAccountsPasskeyEnrollmentStart

Step one of the passkey enrollment process. Returns a challenge and parameters for creation of the passkey credential.

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
    res, err := s.Accounts.IdentitytoolkitAccountsPasskeyEnrollmentStart(ctx, operations.IdentitytoolkitAccountsPasskeyEnrollmentStartRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleCloudIdentitytoolkitV2StartPasskeyEnrollmentRequest: &shared.GoogleCloudIdentitytoolkitV2StartPasskeyEnrollmentRequest{
            IDToken: sdk.String("id"),
            TenantID: sdk.String("possimus"),
        },
        AccessToken: sdk.String("aut"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("error"),
        Fields: sdk.String("temporibus"),
        Key: sdk.String("laborum"),
        OauthToken: sdk.String("quasi"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("reiciendis"),
        UploadType: sdk.String("voluptatibus"),
        UploadProtocol: sdk.String("vero"),
    }, operations.IdentitytoolkitAccountsPasskeyEnrollmentStartSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudIdentitytoolkitV2StartPasskeyEnrollmentResponse != nil {
        // handle response
    }
}
```

## IdentitytoolkitAccountsPasskeySignInFinalize

Verifies the passkey assertion and signs the user in.

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
    res, err := s.Accounts.IdentitytoolkitAccountsPasskeySignInFinalize(ctx, operations.IdentitytoolkitAccountsPasskeySignInFinalizeRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleCloudIdentitytoolkitV2FinalizePasskeySignInRequest: &shared.GoogleCloudIdentitytoolkitV2FinalizePasskeySignInRequest{
            AuthenticatorAuthenticationResponse: &shared.GoogleCloudIdentitytoolkitV2AuthenticatorAuthenticationResponse{
                AuthenticatorAssertionResponse: &shared.GoogleCloudIdentitytoolkitV2AuthenticatorAssertionResponse{
                    AuthenticatorData: sdk.String("praesentium"),
                    ClientDataJSON: sdk.String("voluptatibus"),
                    Signature: sdk.String("ipsa"),
                    UserHandle: sdk.String("omnis"),
                },
                CredentialID: sdk.String("voluptate"),
                CredentialType: sdk.String("cum"),
            },
            SessionID: sdk.String("perferendis"),
            TenantID: sdk.String("doloremque"),
        },
        AccessToken: sdk.String("reprehenderit"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("maiores"),
        Fields: sdk.String("dicta"),
        Key: sdk.String("corporis"),
        OauthToken: sdk.String("dolore"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("iusto"),
        UploadType: sdk.String("dicta"),
        UploadProtocol: sdk.String("harum"),
    }, operations.IdentitytoolkitAccountsPasskeySignInFinalizeSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudIdentitytoolkitV2FinalizePasskeySignInResponse != nil {
        // handle response
    }
}
```

## IdentitytoolkitAccountsPasskeySignInStart

Creates and returns the passkey challenge

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
    res, err := s.Accounts.IdentitytoolkitAccountsPasskeySignInStart(ctx, operations.IdentitytoolkitAccountsPasskeySignInStartRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleCloudIdentitytoolkitV2StartPasskeySignInRequest: &shared.GoogleCloudIdentitytoolkitV2StartPasskeySignInRequest{
            SessionID: sdk.String("accusamus"),
            TenantID: sdk.String("commodi"),
        },
        AccessToken: sdk.String("repudiandae"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("ipsum"),
        Fields: sdk.String("quidem"),
        Key: sdk.String("molestias"),
        OauthToken: sdk.String("excepturi"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("pariatur"),
        UploadType: sdk.String("modi"),
        UploadProtocol: sdk.String("praesentium"),
    }, operations.IdentitytoolkitAccountsPasskeySignInStartSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudIdentitytoolkitV2StartPasskeySignInResponse != nil {
        // handle response
    }
}
```

## IdentitytoolkitAccountsRevokeToken

Revokes a user's token from an Identity Provider (IdP). This is done by manually providing an IdP credential, and the token types for revocation. An [API key](https://cloud.google.com/docs/authentication/api-keys) is required in the request in order to identify the Google Cloud project.

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
    res, err := s.Accounts.IdentitytoolkitAccountsRevokeToken(ctx, operations.IdentitytoolkitAccountsRevokeTokenRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleCloudIdentitytoolkitV2RevokeTokenRequest: &shared.GoogleCloudIdentitytoolkitV2RevokeTokenRequest{
            IDToken: sdk.String("voluptates"),
            ProviderID: sdk.String("quasi"),
            RedirectURI: sdk.String("repudiandae"),
            TenantID: sdk.String("sint"),
            Token: sdk.String("veritatis"),
            TokenType: shared.GoogleCloudIdentitytoolkitV2RevokeTokenRequestTokenTypeEnumCode.ToPointer(),
        },
        AccessToken: sdk.String("incidunt"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("consequatur"),
        Fields: sdk.String("est"),
        Key: sdk.String("quibusdam"),
        OauthToken: sdk.String("explicabo"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("deserunt"),
        UploadType: sdk.String("distinctio"),
        UploadProtocol: sdk.String("quibusdam"),
    }, operations.IdentitytoolkitAccountsRevokeTokenSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudIdentitytoolkitV2RevokeTokenResponse != nil {
        // handle response
    }
}
```
