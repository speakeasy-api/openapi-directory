# Properties

### Available Operations

* [DrivePropertiesDelete](#drivepropertiesdelete) - Deletes a property.
* [DrivePropertiesGet](#drivepropertiesget) - Gets a property by its key.
* [DrivePropertiesInsert](#drivepropertiesinsert) - Adds a property to a file, or updates it if it already exists.
* [DrivePropertiesList](#drivepropertieslist) - Lists a file's properties.
* [DrivePropertiesPatch](#drivepropertiespatch) - Updates a property.
* [DrivePropertiesUpdate](#drivepropertiesupdate) - Updates a property.

## DrivePropertiesDelete

Deletes a property.

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
    res, err := s.Properties.DrivePropertiesDelete(ctx, operations.DrivePropertiesDeleteRequest{
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("sapiente"),
        FileID: "esse",
        Key: sdk.String("neque"),
        OauthToken: sdk.String("quidem"),
        PrettyPrint: sdk.Bool(false),
        PropertyKey: "quisquam",
        QuotaUser: sdk.String("praesentium"),
        UserIP: sdk.String("tempora"),
        Visibility: sdk.String("ipsam"),
    }, operations.DrivePropertiesDeleteSecurity{
        Option1: &operations.DrivePropertiesDeleteSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DrivePropertiesGet

Gets a property by its key.

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
    res, err := s.Properties.DrivePropertiesGet(ctx, operations.DrivePropertiesGetRequest{
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("officiis"),
        FileID: "sequi",
        Key: sdk.String("magni"),
        OauthToken: sdk.String("voluptatem"),
        PrettyPrint: sdk.Bool(false),
        PropertyKey: "est",
        QuotaUser: sdk.String("amet"),
        UserIP: sdk.String("veritatis"),
        Visibility: sdk.String("error"),
    }, operations.DrivePropertiesGetSecurity{
        Option1: &operations.DrivePropertiesGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Property != nil {
        // handle response
    }
}
```

## DrivePropertiesInsert

Adds a property to a file, or updates it if it already exists.

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
    res, err := s.Properties.DrivePropertiesInsert(ctx, operations.DrivePropertiesInsertRequest{
        Property: &shared.Property{
            Etag: sdk.String("voluptatibus"),
            Key: sdk.String("numquam"),
            Kind: sdk.String("rerum"),
            SelfLink: sdk.String("dolorum"),
            Value: sdk.String("quibusdam"),
            Visibility: sdk.String("earum"),
        },
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("excepturi"),
        FileID: "numquam",
        Key: sdk.String("molestiae"),
        OauthToken: sdk.String("impedit"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("error"),
        UserIP: sdk.String("animi"),
    }, operations.DrivePropertiesInsertSecurity{
        Option1: &operations.DrivePropertiesInsertSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Property != nil {
        // handle response
    }
}
```

## DrivePropertiesList

Lists a file's properties.

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
    res, err := s.Properties.DrivePropertiesList(ctx, operations.DrivePropertiesListRequest{
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("voluptatum"),
        FileID: "aliquid",
        Key: sdk.String("nihil"),
        OauthToken: sdk.String("facilis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("optio"),
        UserIP: sdk.String("incidunt"),
    }, operations.DrivePropertiesListSecurity{
        Option1: &operations.DrivePropertiesListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PropertyList != nil {
        // handle response
    }
}
```

## DrivePropertiesPatch

Updates a property.

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
    res, err := s.Properties.DrivePropertiesPatch(ctx, operations.DrivePropertiesPatchRequest{
        Property: &shared.Property{
            Etag: sdk.String("eos"),
            Key: sdk.String("magnam"),
            Kind: sdk.String("dolores"),
            SelfLink: sdk.String("aliquid"),
            Value: sdk.String("eum"),
            Visibility: sdk.String("vel"),
        },
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("ad"),
        FileID: "quos",
        Key: sdk.String("illo"),
        OauthToken: sdk.String("suscipit"),
        PrettyPrint: sdk.Bool(false),
        PropertyKey: "quibusdam",
        QuotaUser: sdk.String("fugiat"),
        UserIP: sdk.String("impedit"),
        Visibility: sdk.String("culpa"),
    }, operations.DrivePropertiesPatchSecurity{
        Option1: &operations.DrivePropertiesPatchSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Property != nil {
        // handle response
    }
}
```

## DrivePropertiesUpdate

Updates a property.

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
    res, err := s.Properties.DrivePropertiesUpdate(ctx, operations.DrivePropertiesUpdateRequest{
        Property: &shared.Property{
            Etag: sdk.String("atque"),
            Key: sdk.String("voluptates"),
            Kind: sdk.String("maiores"),
            SelfLink: sdk.String("nemo"),
            Value: sdk.String("illo"),
            Visibility: sdk.String("doloribus"),
        },
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("cumque"),
        FileID: "expedita",
        Key: sdk.String("modi"),
        OauthToken: sdk.String("cumque"),
        PrettyPrint: sdk.Bool(false),
        PropertyKey: "ipsam",
        QuotaUser: sdk.String("occaecati"),
        UserIP: sdk.String("ipsum"),
        Visibility: sdk.String("accusamus"),
    }, operations.DrivePropertiesUpdateSecurity{
        Option1: &operations.DrivePropertiesUpdateSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Property != nil {
        // handle response
    }
}
```
