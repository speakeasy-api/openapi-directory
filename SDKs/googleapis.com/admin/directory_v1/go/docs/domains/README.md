# Domains

### Available Operations

* [DirectoryDomainsDelete](#directorydomainsdelete) - Deletes a domain of the customer.
* [DirectoryDomainsGet](#directorydomainsget) - Retrieves a domain of the customer.
* [DirectoryDomainsInsert](#directorydomainsinsert) - Inserts a domain of the customer.
* [DirectoryDomainsList](#directorydomainslist) - Lists the domains of the customer.

## DirectoryDomainsDelete

Deletes a domain of the customer.

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
    res, err := s.Domains.DirectoryDomainsDelete(ctx, operations.DirectoryDomainsDeleteRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("expedita"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("molestias"),
        Customer: "cum",
        DomainName: "aliquid",
        Fields: sdk.String("beatae"),
        Key: sdk.String("voluptatum"),
        OauthToken: sdk.String("omnis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("veritatis"),
        UploadType: sdk.String("rerum"),
        UploadProtocol: sdk.String("est"),
    }, operations.DirectoryDomainsDeleteSecurity{
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

## DirectoryDomainsGet

Retrieves a domain of the customer.

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
    res, err := s.Domains.DirectoryDomainsGet(ctx, operations.DirectoryDomainsGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("voluptatem"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("officiis"),
        Customer: "architecto",
        DomainName: "fuga",
        Fields: sdk.String("pariatur"),
        Key: sdk.String("debitis"),
        OauthToken: sdk.String("voluptatem"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("alias"),
        UploadType: sdk.String("deleniti"),
        UploadProtocol: sdk.String("earum"),
    }, operations.DirectoryDomainsGetSecurity{
        Option1: &operations.DirectoryDomainsGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Domains != nil {
        // handle response
    }
}
```

## DirectoryDomainsInsert

Inserts a domain of the customer.

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
    res, err := s.Domains.DirectoryDomainsInsert(ctx, operations.DirectoryDomainsInsertRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        Domains: &shared.Domains{
            CreationTime: sdk.String("sapiente"),
            DomainAliases: []shared.DomainAlias{
                shared.DomainAlias{
                    CreationTime: sdk.String("minus"),
                    DomainAliasName: sdk.String("nemo"),
                    Etag: sdk.String("asperiores"),
                    Kind: sdk.String("ratione"),
                    ParentDomainName: sdk.String("ullam"),
                    Verified: sdk.Bool(false),
                },
                shared.DomainAlias{
                    CreationTime: sdk.String("perferendis"),
                    DomainAliasName: sdk.String("illum"),
                    Etag: sdk.String("totam"),
                    Kind: sdk.String("impedit"),
                    ParentDomainName: sdk.String("quibusdam"),
                    Verified: sdk.Bool(false),
                },
                shared.DomainAlias{
                    CreationTime: sdk.String("nam"),
                    DomainAliasName: sdk.String("ipsam"),
                    Etag: sdk.String("culpa"),
                    Kind: sdk.String("dolor"),
                    ParentDomainName: sdk.String("aliquam"),
                    Verified: sdk.Bool(false),
                },
            },
            DomainName: sdk.String("inventore"),
            Etag: sdk.String("deleniti"),
            IsPrimary: sdk.Bool(false),
            Kind: sdk.String("veritatis"),
            Verified: sdk.Bool(false),
        },
        AccessToken: sdk.String("tempora"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("consequatur"),
        Customer: "architecto",
        Fields: sdk.String("sit"),
        Key: sdk.String("modi"),
        OauthToken: sdk.String("fugit"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ab"),
        UploadType: sdk.String("laudantium"),
        UploadProtocol: sdk.String("quae"),
    }, operations.DirectoryDomainsInsertSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Domains != nil {
        // handle response
    }
}
```

## DirectoryDomainsList

Lists the domains of the customer.

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
    res, err := s.Domains.DirectoryDomainsList(ctx, operations.DirectoryDomainsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("fugiat"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("consequuntur"),
        Customer: "ipsa",
        Fields: sdk.String("quas"),
        Key: sdk.String("eveniet"),
        OauthToken: sdk.String("impedit"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("officiis"),
        UploadType: sdk.String("esse"),
        UploadProtocol: sdk.String("necessitatibus"),
    }, operations.DirectoryDomainsListSecurity{
        Option1: &operations.DirectoryDomainsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Domains2 != nil {
        // handle response
    }
}
```
