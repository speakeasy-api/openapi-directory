# Associationsessions

### Available Operations

* [AdsensehostAssociationsessionsStart](#adsensehostassociationsessionsstart) - Create an association session for initiating an association with an AdSense user.
* [AdsensehostAssociationsessionsVerify](#adsensehostassociationsessionsverify) - Verify an association session after the association callback returns from AdSense signup.

## AdsensehostAssociationsessionsStart

Create an association session for initiating an association with an AdSense user.

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
    res, err := s.Associationsessions.AdsensehostAssociationsessionsStart(ctx, operations.AdsensehostAssociationsessionsStartRequest{
        Alt: shared.AltEnumCsv.ToPointer(),
        CallbackURL: sdk.String("accusantium"),
        Fields: sdk.String("ab"),
        Key: sdk.String("maiores"),
        OauthToken: sdk.String("quidem"),
        PrettyPrint: sdk.Bool(false),
        ProductCode: []AdsensehostAssociationsessionsStartProductCodeEnum{
            operations.AdsensehostAssociationsessionsStartProductCodeEnumAfmc,
            operations.AdsensehostAssociationsessionsStartProductCodeEnumAfmc,
        },
        QuotaUser: sdk.String("nam"),
        UserIP: sdk.String("eaque"),
        UserLocale: sdk.String("pariatur"),
        WebsiteLocale: sdk.String("nemo"),
        WebsiteURL: "voluptatibus",
    }, operations.AdsensehostAssociationsessionsStartSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociationSession != nil {
        // handle response
    }
}
```

## AdsensehostAssociationsessionsVerify

Verify an association session after the association callback returns from AdSense signup.

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
    res, err := s.Associationsessions.AdsensehostAssociationsessionsVerify(ctx, operations.AdsensehostAssociationsessionsVerifyRequest{
        Alt: shared.AltEnumCsv.ToPointer(),
        Fields: sdk.String("fugiat"),
        Key: sdk.String("amet"),
        OauthToken: sdk.String("aut"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("cumque"),
        Token: "corporis",
        UserIP: sdk.String("hic"),
    }, operations.AdsensehostAssociationsessionsVerifySecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociationSession != nil {
        // handle response
    }
}
```
