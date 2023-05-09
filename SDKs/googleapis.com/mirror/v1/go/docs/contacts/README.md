# Contacts

### Available Operations

* [MirrorContactsDelete](#mirrorcontactsdelete) - Deletes a contact.
* [MirrorContactsGet](#mirrorcontactsget) - Gets a single contact by ID.
* [MirrorContactsInsert](#mirrorcontactsinsert) - Inserts a new contact.
* [MirrorContactsList](#mirrorcontactslist) - Retrieves a list of contacts for the authenticated user.
* [MirrorContactsPatch](#mirrorcontactspatch) - Updates a contact in place. This method supports patch semantics.
* [MirrorContactsUpdate](#mirrorcontactsupdate) - Updates a contact in place.

## MirrorContactsDelete

Deletes a contact.

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
    res, err := s.Contacts.MirrorContactsDelete(ctx, operations.MirrorContactsDeleteRequest{
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("hic"),
        ID: "c816742c-b739-4205-9293-96fea7596eb1",
        Key: sdk.String("ipsa"),
        OauthToken: sdk.String("reiciendis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("est"),
        UserIP: sdk.String("mollitia"),
    }, operations.MirrorContactsDeleteSecurity{
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

## MirrorContactsGet

Gets a single contact by ID.

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
    res, err := s.Contacts.MirrorContactsGet(ctx, operations.MirrorContactsGetRequest{
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("laborum"),
        ID: "2352c595-5907-4aff-9a3a-2fa946773925",
        Key: sdk.String("vitae"),
        OauthToken: sdk.String("laborum"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("animi"),
        UserIP: sdk.String("enim"),
    }, operations.MirrorContactsGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## MirrorContactsInsert

Inserts a new contact.

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
    res, err := s.Contacts.MirrorContactsInsert(ctx, operations.MirrorContactsInsertRequest{
        Contact: &shared.Contact{
            AcceptCommands: []shared.Command{
                shared.Command{
                    Type: sdk.String("quo"),
                },
            },
            AcceptTypes: []string{
                "tenetur",
            },
            DisplayName: sdk.String("ipsam"),
            ID: sdk.String("ad019da1-ffe7-48f0-97b0-074f15471b5e"),
            ImageUrls: []string{
                "repudiandae",
                "quae",
            },
            Kind: sdk.String("ipsum"),
            PhoneNumber: sdk.String("quidem"),
            Priority: sdk.Int64(565189),
            SharingFeatures: []string{
                "pariatur",
                "modi",
                "praesentium",
            },
            Source: sdk.String("rem"),
            SpeakableName: sdk.String("voluptates"),
            Type: sdk.String("quasi"),
        },
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("repudiandae"),
        Key: sdk.String("sint"),
        OauthToken: sdk.String("veritatis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("itaque"),
        UserIP: sdk.String("incidunt"),
    }, operations.MirrorContactsInsertSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## MirrorContactsList

Retrieves a list of contacts for the authenticated user.

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
    res, err := s.Contacts.MirrorContactsList(ctx, operations.MirrorContactsListRequest{
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("enim"),
        Key: sdk.String("consequatur"),
        OauthToken: sdk.String("est"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quibusdam"),
        UserIP: sdk.String("explicabo"),
    }, operations.MirrorContactsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## MirrorContactsPatch

Updates a contact in place. This method supports patch semantics.

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
    res, err := s.Contacts.MirrorContactsPatch(ctx, operations.MirrorContactsPatchRequest{
        Contact: &shared.Contact{
            AcceptCommands: []shared.Command{
                shared.Command{
                    Type: sdk.String("distinctio"),
                },
                shared.Command{
                    Type: sdk.String("quibusdam"),
                },
                shared.Command{
                    Type: sdk.String("labore"),
                },
            },
            AcceptTypes: []string{
                "qui",
                "aliquid",
            },
            DisplayName: sdk.String("cupiditate"),
            ID: sdk.String("802d502a-94bb-44f6-bc96-9e9a3efa77df"),
            ImageUrls: []string{
                "dicta",
                "magnam",
                "cumque",
            },
            Kind: sdk.String("facere"),
            PhoneNumber: sdk.String("ea"),
            Priority: sdk.Int64(396506),
            SharingFeatures: []string{
                "accusamus",
                "non",
                "occaecati",
            },
            Source: sdk.String("enim"),
            SpeakableName: sdk.String("accusamus"),
            Type: sdk.String("delectus"),
        },
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("quidem"),
        ID: "9ba88f3a-6699-4707-8ba4-469b6e214195",
        Key: sdk.String("provident"),
        OauthToken: sdk.String("quos"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("sint"),
        UserIP: sdk.String("accusantium"),
    }, operations.MirrorContactsPatchSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## MirrorContactsUpdate

Updates a contact in place.

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
    res, err := s.Contacts.MirrorContactsUpdate(ctx, operations.MirrorContactsUpdateRequest{
        Contact: &shared.Contact{
            AcceptCommands: []shared.Command{
                shared.Command{
                    Type: sdk.String("reiciendis"),
                },
                shared.Command{
                    Type: sdk.String("mollitia"),
                },
                shared.Command{
                    Type: sdk.String("ad"),
                },
            },
            AcceptTypes: []string{
                "dolor",
                "necessitatibus",
            },
            DisplayName: sdk.String("odit"),
            ID: sdk.String("516fe4c8-b711-4e5b-bfd2-ed028921cddc"),
            ImageUrls: []string{
                "excepturi",
                "odit",
            },
            Kind: sdk.String("ea"),
            PhoneNumber: sdk.String("accusantium"),
            Priority: sdk.Int64(69167),
            SharingFeatures: []string{
                "quidem",
                "ipsam",
                "voluptate",
                "autem",
            },
            Source: sdk.String("nam"),
            SpeakableName: sdk.String("eaque"),
            Type: sdk.String("pariatur"),
        },
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("nemo"),
        ID: "f0d30c5f-bb25-4870-9320-2c73d5fe9b90",
        Key: sdk.String("porro"),
        OauthToken: sdk.String("consequuntur"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("blanditiis"),
        UserIP: sdk.String("error"),
    }, operations.MirrorContactsUpdateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
