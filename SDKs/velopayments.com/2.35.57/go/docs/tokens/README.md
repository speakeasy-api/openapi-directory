# Tokens

## Overview

<p>Verification tokens allow users to complete authenitcation flows such as user invite, MFA registration and password reset</p>
<p>Tokens have an expiry and are one-time use only</p>


### Available Operations

* [ResendToken](#resendtoken) - Resend a token

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
    res, err := s.Tokens.ResendToken(ctx, operations.ResendTokenRequest{
        ResendTokenRequest: shared.ResendTokenRequest{
            TokenType: shared.ResendTokenRequestTokenTypeEnumInviteMfaUser,
            VerificationCode: sdk.String("123456"),
        },
        UserID: "876ffb90-1c6e-4cbb-8e24-3cf789ffafed",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
