# Token

## Overview

Token operations

Token Services
<https://netlicensing.io/wiki/token-services>
### Available Operations

* [CreateToken](#createtoken) - Create token
* [DeleteToken](#deletetoken) - Delete token
* [GetToken](#gettoken) - Get token
* [ListTokens](#listtokens) - List Tokens

## CreateToken

Create token by 'tokenType' and additional token parameters

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Token.CreateToken(ctx, operations.CreateTokenRequestBody{
        Action: operations.CreateTokenRequestBodyActionEnumLicenseeLogin.ToPointer(),
        APIKeyRole: operations.CreateTokenRequestBodyAPIKeyRoleEnumRoleApikeyAdmin.ToPointer(),
        CancelURL: sdk.String("sint"),
        CancelURLTitle: sdk.String("veritatis"),
        LicenseTemplateNumber: sdk.String("itaque"),
        LicenseeNumber: sdk.String("incidunt"),
        PredefinedShoppingItem: sdk.String("enim"),
        PrivateKey: sdk.String("consequatur"),
        ProductNumber: sdk.String("est"),
        SuccessURL: sdk.String("quibusdam"),
        SuccessURLTitle: sdk.String("explicabo"),
        TokenType: operations.CreateTokenRequestBodyTokenTypeEnumShop,
        Type: operations.CreateTokenRequestBodyTypeEnumAction.ToPointer(),
    }, operations.CreateTokenSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Netlicensing != nil {
        // handle response
    }
}
```

## DeleteToken

Delete a token by 'number'

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Token.DeleteToken(ctx, operations.DeleteTokenRequest{
        TokenNumber: "distinctio",
    }, operations.DeleteTokenSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Netlicensing != nil {
        // handle response
    }
}
```

## GetToken

Return a token by 'tokenNumber'

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Token.GetToken(ctx, operations.GetTokenRequest{
        TokenNumber: "quibusdam",
    }, operations.GetTokenSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Netlicensing != nil {
        // handle response
    }
}
```

## ListTokens

Return a list of all tokens for the current Vendor

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Token.ListTokens(ctx, operations.ListTokensSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Netlicensings != nil {
        // handle response
    }
}
```
