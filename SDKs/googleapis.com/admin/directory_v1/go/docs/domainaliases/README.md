# DomainAliases

### Available Operations

* [DirectoryDomainAliasesDelete](#directorydomainaliasesdelete) - Deletes a domain Alias of the customer.
* [DirectoryDomainAliasesGet](#directorydomainaliasesget) - Retrieves a domain alias of the customer.
* [DirectoryDomainAliasesInsert](#directorydomainaliasesinsert) - Inserts a domain alias of the customer.
* [DirectoryDomainAliasesList](#directorydomainaliaseslist) - Lists the domain aliases of the customer.

## DirectoryDomainAliasesDelete

Deletes a domain Alias of the customer.

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
    res, err := s.DomainAliases.DirectoryDomainAliasesDelete(ctx, operations.DirectoryDomainAliasesDeleteRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("tempora"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("molestiae"),
        Customer: "dicta",
        DomainAliasName: "iusto",
        Fields: sdk.String("esse"),
        Key: sdk.String("praesentium"),
        OauthToken: sdk.String("maiores"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("reiciendis"),
        UploadType: sdk.String("vel"),
        UploadProtocol: sdk.String("architecto"),
    }, operations.DirectoryDomainAliasesDeleteSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DirectoryDomainAliasesGet

Retrieves a domain alias of the customer.

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
    res, err := s.DomainAliases.DirectoryDomainAliasesGet(ctx, operations.DirectoryDomainAliasesGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("doloremque"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("odio"),
        Customer: "tempora",
        DomainAliasName: "esse",
        Fields: sdk.String("ex"),
        Key: sdk.String("consectetur"),
        OauthToken: sdk.String("aliquid"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ipsa"),
        UploadType: sdk.String("laborum"),
        UploadProtocol: sdk.String("sunt"),
    }, operations.DirectoryDomainAliasesGetSecurity{
        Option1: &operations.DirectoryDomainAliasesGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DomainAlias != nil {
        // handle response
    }
}
```

## DirectoryDomainAliasesInsert

Inserts a domain alias of the customer.

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
    res, err := s.DomainAliases.DirectoryDomainAliasesInsert(ctx, operations.DirectoryDomainAliasesInsertRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        DomainAlias: &shared.DomainAlias{
            CreationTime: sdk.String("fugiat"),
            DomainAliasName: sdk.String("expedita"),
            Etag: sdk.String("aliquid"),
            Kind: sdk.String("officia"),
            ParentDomainName: sdk.String("suscipit"),
            Verified: sdk.Bool(false),
        },
        AccessToken: sdk.String("aliquid"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("eum"),
        Customer: "voluptas",
        Fields: sdk.String("iste"),
        Key: sdk.String("id"),
        OauthToken: sdk.String("ab"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("error"),
        UploadType: sdk.String("possimus"),
        UploadProtocol: sdk.String("voluptates"),
    }, operations.DirectoryDomainAliasesInsertSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DomainAlias != nil {
        // handle response
    }
}
```

## DirectoryDomainAliasesList

Lists the domain aliases of the customer.

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
    res, err := s.DomainAliases.DirectoryDomainAliasesList(ctx, operations.DirectoryDomainAliasesListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("laborum"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("ad"),
        Customer: "deleniti",
        Fields: sdk.String("enim"),
        Key: sdk.String("vitae"),
        OauthToken: sdk.String("repellendus"),
        ParentDomainName: sdk.String("ex"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quo"),
        UploadType: sdk.String("ex"),
        UploadProtocol: sdk.String("ut"),
    }, operations.DirectoryDomainAliasesListSecurity{
        Option1: &operations.DirectoryDomainAliasesListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DomainAliases != nil {
        // handle response
    }
}
```
