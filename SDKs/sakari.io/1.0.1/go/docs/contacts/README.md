# Contacts

## Overview

Create, modify or delete contacts

### Available Operations

* [ContactsCreateJSON](#contactscreatejson) - Create contact
* [ContactsCreateString](#contactscreatestring) - Create contact
* [ContactsFetch](#contactsfetch) - Fetch contact by ID
* [ContactsFetchAll](#contactsfetchall) - Fetch contacts
* [ContactsRemove](#contactsremove) - Deletes a contact
* [ContactsUpdate](#contactsupdate) - Updates a contact

## ContactsCreateJSON

Create contact

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
    res, err := s.Contacts.ContactsCreateJSON(ctx, operations.ContactsCreateJSONRequest{
        ContactRequest: &shared.ContactRequest{
            Attributes: map[string]interface{}{
                "quis": "veritatis",
            },
            Email: sdk.String("chris@sakari.io"),
            FirstName: sdk.String("Chris"),
            ID: sdk.String("a05dfc2d-df7c-4c78-8a1b-a928fc816742"),
            LastName: sdk.String("Bloggs"),
            Mobile: &shared.ContactRequestMobile{
                Country: sdk.String("Samoa"),
                Number: sdk.String("123-456-7890"),
            },
            Tags: []shared.Tag{
                shared.Tag{
                    Tag: sdk.String("esse"),
                    Visible: sdk.Bool(false),
                },
                shared.Tag{
                    Tag: sdk.String("ipsum"),
                    Visible: sdk.Bool(false),
                },
                shared.Tag{
                    Tag: sdk.String("excepturi"),
                    Visible: sdk.Bool(false),
                },
            },
        },
        AccountID: "aspernatur",
        MergeStrategy: operations.ContactsCreateJSONMergeStrategyEnumAppend.ToPointer(),
    }, operations.ContactsCreateJSONSecurity{
        SakariAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ContactsCreateJSON201ApplicationJSONOneOf != nil {
        // handle response
    }
}
```

## ContactsCreateString

Create contact

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
    res, err := s.Contacts.ContactsCreateString(ctx, operations.ContactsCreateStringRequest{
        RequestBody: sdk.String("country,firstName,lastName,email,mobile,jobTitle,Address,City,State,ZipCode US,Joe,Bloggs,joebloggs@sakari.co,123-456-7890,mover,123 Text Street,San Francisco,CA,12345
    "),
        AccountID: "ad",
        MergeStrategy: operations.ContactsCreateStringMergeStrategyEnumCore.ToPointer(),
    }, operations.ContactsCreateStringSecurity{
        SakariAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ContactsCreateString201ApplicationJSONOneOf != nil {
        // handle response
    }
}
```

## ContactsFetch

Fetch contact by ID

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
    res, err := s.Contacts.ContactsFetch(ctx, operations.ContactsFetchRequest{
        AccountID: "sed",
        ContactID: "iste",
    }, operations.ContactsFetchSecurity{
        SakariAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ContactResponse != nil {
        // handle response
    }
}
```

## ContactsFetchAll

Fetch contacts

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
    res, err := s.Contacts.ContactsFetchAll(ctx, operations.ContactsFetchAllRequest{
        AccountID: "dolor",
        Email: sdk.String("Gertrude_Welch44@yahoo.com"),
        FirstName: sdk.String("Floy"),
        LastName: sdk.String("Moore"),
        Limit: sdk.Int64(437032),
        Mobile: sdk.String("1-700-966-6123 x17363"),
        Offset: sdk.Int64(325047),
        Tags: sdk.String("excepturi"),
    }, operations.ContactsFetchAllSecurity{
        SakariAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ContactsResponse != nil {
        // handle response
    }
}
```

## ContactsRemove

Deletes a contact

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
    res, err := s.Contacts.ContactsRemove(ctx, operations.ContactsRemoveRequest{
        AccountID: "accusantium",
        ContactID: "iure",
    }, operations.ContactsRemoveSecurity{
        SakariAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ContactsRemove200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ContactsUpdate

Updates a contact

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
    res, err := s.Contacts.ContactsUpdate(ctx, operations.ContactsUpdateRequest{
        AccountID: "culpa",
        ContactID: "doloribus",
    }, operations.ContactsUpdateSecurity{
        SakariAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ContactResponse != nil {
        // handle response
    }
}
```
