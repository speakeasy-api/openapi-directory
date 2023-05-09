# WebResource

### Available Operations

* [SiteVerificationWebResourceDelete](#siteverificationwebresourcedelete) - Relinquish ownership of a website or domain.
* [SiteVerificationWebResourceGet](#siteverificationwebresourceget) - Get the most current data for a website or domain.
* [SiteVerificationWebResourceGetToken](#siteverificationwebresourcegettoken) - Get a verification token for placing on a website or domain.
* [SiteVerificationWebResourceInsert](#siteverificationwebresourceinsert) - Attempt verification of a website or domain.
* [SiteVerificationWebResourceList](#siteverificationwebresourcelist) - Get the list of your verified websites and domains.
* [SiteVerificationWebResourcePatch](#siteverificationwebresourcepatch) - Modify the list of owners for your website or domain. This method supports patch semantics.
* [SiteVerificationWebResourceUpdate](#siteverificationwebresourceupdate) - Modify the list of owners for your website or domain.

## SiteVerificationWebResourceDelete

Relinquish ownership of a website or domain.

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
    res, err := s.WebResource.SiteVerificationWebResourceDelete(ctx, operations.SiteVerificationWebResourceDeleteRequest{
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("quo"),
        ID: "2ddf7cc7-8ca1-4ba9-a8fc-816742cb7392",
        Key: sdk.String("perferendis"),
        OauthToken: sdk.String("ad"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("natus"),
        UserIP: sdk.String("sed"),
    }, operations.SiteVerificationWebResourceDeleteSecurity{
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

## SiteVerificationWebResourceGet

Get the most current data for a website or domain.

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
    res, err := s.WebResource.SiteVerificationWebResourceGet(ctx, operations.SiteVerificationWebResourceGetRequest{
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("iste"),
        ID: "396fea75-96eb-410f-aaa2-352c5955907a",
        Key: sdk.String("doloribus"),
        OauthToken: sdk.String("sapiente"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("architecto"),
        UserIP: sdk.String("mollitia"),
    }, operations.SiteVerificationWebResourceGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SiteVerificationWebResourceResource != nil {
        // handle response
    }
}
```

## SiteVerificationWebResourceGetToken

Get a verification token for placing on a website or domain.

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
    res, err := s.WebResource.SiteVerificationWebResourceGetToken(ctx, operations.SiteVerificationWebResourceGetTokenRequest{
        SiteVerificationWebResourceGettokenRequest: &shared.SiteVerificationWebResourceGettokenRequest{
            Site: &shared.SiteVerificationWebResourceGettokenRequestSite{
                Identifier: sdk.String("dolorem"),
                Type: sdk.String("culpa"),
            },
            VerificationMethod: sdk.String("consequuntur"),
        },
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("repellat"),
        Key: sdk.String("mollitia"),
        OauthToken: sdk.String("occaecati"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("numquam"),
        UserIP: sdk.String("commodi"),
    }, operations.SiteVerificationWebResourceGetTokenSecurity{
        Option1: &operations.SiteVerificationWebResourceGetTokenSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SiteVerificationWebResourceGettokenResponse != nil {
        // handle response
    }
}
```

## SiteVerificationWebResourceInsert

Attempt verification of a website or domain.

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
    res, err := s.WebResource.SiteVerificationWebResourceInsert(ctx, operations.SiteVerificationWebResourceInsertRequest{
        SiteVerificationWebResourceResource: &shared.SiteVerificationWebResourceResource{
            ID: sdk.String("7739251a-a52c-43f5-ad01-9da1ffe78f09"),
            Owners: []string{
                "cum",
                "perferendis",
            },
            Site: &shared.SiteVerificationWebResourceResourceSite{
                Identifier: sdk.String("doloremque"),
                Type: sdk.String("reprehenderit"),
            },
        },
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("ut"),
        Key: sdk.String("maiores"),
        OauthToken: sdk.String("dicta"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("corporis"),
        UserIP: sdk.String("dolore"),
        VerificationMethod: "iusto",
    }, operations.SiteVerificationWebResourceInsertSecurity{
        Option1: &operations.SiteVerificationWebResourceInsertSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SiteVerificationWebResourceResource != nil {
        // handle response
    }
}
```

## SiteVerificationWebResourceList

Get the list of your verified websites and domains.

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
    res, err := s.WebResource.SiteVerificationWebResourceList(ctx, operations.SiteVerificationWebResourceListRequest{
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("dicta"),
        Key: sdk.String("harum"),
        OauthToken: sdk.String("enim"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("accusamus"),
        UserIP: sdk.String("commodi"),
    }, operations.SiteVerificationWebResourceListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SiteVerificationWebResourceListResponse != nil {
        // handle response
    }
}
```

## SiteVerificationWebResourcePatch

Modify the list of owners for your website or domain. This method supports patch semantics.

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
    res, err := s.WebResource.SiteVerificationWebResourcePatch(ctx, operations.SiteVerificationWebResourcePatchRequest{
        SiteVerificationWebResourceResource: &shared.SiteVerificationWebResourceResource{
            ID: sdk.String("e13b99d4-88e1-4e91-a450-ad2abd442698"),
            Owners: []string{
                "magni",
            },
            Site: &shared.SiteVerificationWebResourceResourceSite{
                Identifier: sdk.String("assumenda"),
                Type: sdk.String("ipsam"),
            },
        },
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("alias"),
        ID: "2a94bb4f-63c9-469e-9a3e-fa77dfb14cd6",
        Key: sdk.String("aliquid"),
        OauthToken: sdk.String("laborum"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("accusamus"),
        UserIP: sdk.String("non"),
    }, operations.SiteVerificationWebResourcePatchSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SiteVerificationWebResourceResource != nil {
        // handle response
    }
}
```

## SiteVerificationWebResourceUpdate

Modify the list of owners for your website or domain.

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
    res, err := s.WebResource.SiteVerificationWebResourceUpdate(ctx, operations.SiteVerificationWebResourceUpdateRequest{
        SiteVerificationWebResourceResource: &shared.SiteVerificationWebResourceResource{
            ID: sdk.String("95efb9ba-88f3-4a66-9970-74ba4469b6e2"),
            Owners: []string{
                "magnam",
            },
            Site: &shared.SiteVerificationWebResourceResourceSite{
                Identifier: sdk.String("et"),
                Type: sdk.String("excepturi"),
            },
        },
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("ullam"),
        ID: "9890afa5-63e2-4516-be4c-8b711e5b7fd2",
        Key: sdk.String("saepe"),
        OauthToken: sdk.String("pariatur"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("accusantium"),
        UserIP: sdk.String("consequuntur"),
    }, operations.SiteVerificationWebResourceUpdateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SiteVerificationWebResourceResource != nil {
        // handle response
    }
}
```
