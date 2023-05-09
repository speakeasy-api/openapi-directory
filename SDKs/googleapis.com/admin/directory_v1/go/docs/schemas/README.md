# Schemas

### Available Operations

* [DirectorySchemasDelete](#directoryschemasdelete) - Deletes a schema.
* [DirectorySchemasGet](#directoryschemasget) - Retrieves a schema.
* [DirectorySchemasInsert](#directoryschemasinsert) - Creates a schema.
* [DirectorySchemasList](#directoryschemaslist) - Retrieves all schemas for a customer.
* [DirectorySchemasPatch](#directoryschemaspatch) - Patches a schema.
* [DirectorySchemasUpdate](#directoryschemasupdate) - Updates a schema.

## DirectorySchemasDelete

Deletes a schema.

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
    res, err := s.Schemas.DirectorySchemasDelete(ctx, operations.DirectorySchemasDeleteRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("non"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("ad"),
        CustomerID: "aliquam",
        Fields: sdk.String("quisquam"),
        Key: sdk.String("quas"),
        OauthToken: sdk.String("consequuntur"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("maiores"),
        SchemaKey: "inventore",
        UploadType: sdk.String("aliquid"),
        UploadProtocol: sdk.String("laudantium"),
    }, operations.DirectorySchemasDeleteSecurity{
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

## DirectorySchemasGet

Retrieves a schema.

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
    res, err := s.Schemas.DirectorySchemasGet(ctx, operations.DirectorySchemasGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("dolor"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("consectetur"),
        CustomerID: "cumque",
        Fields: sdk.String("rem"),
        Key: sdk.String("voluptatum"),
        OauthToken: sdk.String("ducimus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("adipisci"),
        SchemaKey: "recusandae",
        UploadType: sdk.String("tempora"),
        UploadProtocol: sdk.String("blanditiis"),
    }, operations.DirectorySchemasGetSecurity{
        Option1: &operations.DirectorySchemasGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Schema != nil {
        // handle response
    }
}
```

## DirectorySchemasInsert

Creates a schema.

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
    res, err := s.Schemas.DirectorySchemasInsert(ctx, operations.DirectorySchemasInsertRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        Schema: &shared.Schema{
            DisplayName: sdk.String("sequi"),
            Etag: sdk.String("voluptatum"),
            Fields: []shared.SchemaFieldSpec{
                shared.SchemaFieldSpec{
                    DisplayName: sdk.String("rerum"),
                    Etag: sdk.String("veritatis"),
                    FieldID: sdk.String("tenetur"),
                    FieldName: sdk.String("autem"),
                    FieldType: sdk.String("quidem"),
                    Indexed: sdk.Bool(false),
                    Kind: sdk.String("totam"),
                    MultiValued: sdk.Bool(false),
                    NumericIndexingSpec: &shared.SchemaFieldSpecNumericIndexingSpec{
                        MaxValue: sdk.Float64(7811.93),
                        MinValue: sdk.Float64(6464.91),
                    },
                    ReadAccessType: sdk.String("magni"),
                },
            },
            Kind: sdk.String("nihil"),
            SchemaID: sdk.String("voluptas"),
            SchemaName: sdk.String("animi"),
        },
        AccessToken: sdk.String("commodi"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("fuga"),
        CustomerID: "aut",
        Fields: sdk.String("dolore"),
        Key: sdk.String("maxime"),
        OauthToken: sdk.String("aliquam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("iste"),
        UploadType: sdk.String("ullam"),
        UploadProtocol: sdk.String("eligendi"),
    }, operations.DirectorySchemasInsertSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Schema != nil {
        // handle response
    }
}
```

## DirectorySchemasList

Retrieves all schemas for a customer.

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
    res, err := s.Schemas.DirectorySchemasList(ctx, operations.DirectorySchemasListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("voluptas"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("unde"),
        CustomerID: "illo",
        Fields: sdk.String("nihil"),
        Key: sdk.String("inventore"),
        OauthToken: sdk.String("libero"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ipsam"),
        UploadType: sdk.String("quasi"),
        UploadProtocol: sdk.String("cumque"),
    }, operations.DirectorySchemasListSecurity{
        Option1: &operations.DirectorySchemasListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Schemas != nil {
        // handle response
    }
}
```

## DirectorySchemasPatch

Patches a schema.

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
    res, err := s.Schemas.DirectorySchemasPatch(ctx, operations.DirectorySchemasPatchRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        Schema: &shared.Schema{
            DisplayName: sdk.String("harum"),
            Etag: sdk.String("facere"),
            Fields: []shared.SchemaFieldSpec{
                shared.SchemaFieldSpec{
                    DisplayName: sdk.String("beatae"),
                    Etag: sdk.String("cumque"),
                    FieldID: sdk.String("delectus"),
                    FieldName: sdk.String("labore"),
                    FieldType: sdk.String("expedita"),
                    Indexed: sdk.Bool(false),
                    Kind: sdk.String("corrupti"),
                    MultiValued: sdk.Bool(false),
                    NumericIndexingSpec: &shared.SchemaFieldSpecNumericIndexingSpec{
                        MaxValue: sdk.Float64(5239.95),
                        MinValue: sdk.Float64(5433.53),
                    },
                    ReadAccessType: sdk.String("officiis"),
                },
                shared.SchemaFieldSpec{
                    DisplayName: sdk.String("cum"),
                    Etag: sdk.String("pariatur"),
                    FieldID: sdk.String("sapiente"),
                    FieldName: sdk.String("quo"),
                    FieldType: sdk.String("incidunt"),
                    Indexed: sdk.Bool(false),
                    Kind: sdk.String("quod"),
                    MultiValued: sdk.Bool(false),
                    NumericIndexingSpec: &shared.SchemaFieldSpecNumericIndexingSpec{
                        MaxValue: sdk.Float64(7932.82),
                        MinValue: sdk.Float64(7814.91),
                    },
                    ReadAccessType: sdk.String("id"),
                },
                shared.SchemaFieldSpec{
                    DisplayName: sdk.String("excepturi"),
                    Etag: sdk.String("occaecati"),
                    FieldID: sdk.String("libero"),
                    FieldName: sdk.String("quo"),
                    FieldType: sdk.String("esse"),
                    Indexed: sdk.Bool(false),
                    Kind: sdk.String("hic"),
                    MultiValued: sdk.Bool(false),
                    NumericIndexingSpec: &shared.SchemaFieldSpecNumericIndexingSpec{
                        MaxValue: sdk.Float64(8022.16),
                        MinValue: sdk.Float64(366.91),
                    },
                    ReadAccessType: sdk.String("soluta"),
                },
            },
            Kind: sdk.String("fugit"),
            SchemaID: sdk.String("pariatur"),
            SchemaName: sdk.String("eligendi"),
        },
        AccessToken: sdk.String("recusandae"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("aut"),
        CustomerID: "laudantium",
        Fields: sdk.String("iusto"),
        Key: sdk.String("dolor"),
        OauthToken: sdk.String("voluptates"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("tempora"),
        SchemaKey: "magni",
        UploadType: sdk.String("rerum"),
        UploadProtocol: sdk.String("doloremque"),
    }, operations.DirectorySchemasPatchSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Schema != nil {
        // handle response
    }
}
```

## DirectorySchemasUpdate

Updates a schema.

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
    res, err := s.Schemas.DirectorySchemasUpdate(ctx, operations.DirectorySchemasUpdateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        Schema: &shared.Schema{
            DisplayName: sdk.String("eum"),
            Etag: sdk.String("at"),
            Fields: []shared.SchemaFieldSpec{
                shared.SchemaFieldSpec{
                    DisplayName: sdk.String("reprehenderit"),
                    Etag: sdk.String("voluptatum"),
                    FieldID: sdk.String("blanditiis"),
                    FieldName: sdk.String("nihil"),
                    FieldType: sdk.String("atque"),
                    Indexed: sdk.Bool(false),
                    Kind: sdk.String("rerum"),
                    MultiValued: sdk.Bool(false),
                    NumericIndexingSpec: &shared.SchemaFieldSpecNumericIndexingSpec{
                        MaxValue: sdk.Float64(6455.44),
                        MinValue: sdk.Float64(5418.22),
                    },
                    ReadAccessType: sdk.String("nostrum"),
                },
                shared.SchemaFieldSpec{
                    DisplayName: sdk.String("atque"),
                    Etag: sdk.String("architecto"),
                    FieldID: sdk.String("est"),
                    FieldName: sdk.String("enim"),
                    FieldType: sdk.String("rem"),
                    Indexed: sdk.Bool(false),
                    Kind: sdk.String("magni"),
                    MultiValued: sdk.Bool(false),
                    NumericIndexingSpec: &shared.SchemaFieldSpecNumericIndexingSpec{
                        MaxValue: sdk.Float64(621.3),
                        MinValue: sdk.Float64(5561.33),
                    },
                    ReadAccessType: sdk.String("placeat"),
                },
            },
            Kind: sdk.String("enim"),
            SchemaID: sdk.String("labore"),
            SchemaName: sdk.String("sapiente"),
        },
        AccessToken: sdk.String("saepe"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("officia"),
        CustomerID: "natus",
        Fields: sdk.String("cumque"),
        Key: sdk.String("natus"),
        OauthToken: sdk.String("quaerat"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("doloribus"),
        SchemaKey: "quia",
        UploadType: sdk.String("officiis"),
        UploadProtocol: sdk.String("mollitia"),
    }, operations.DirectorySchemasUpdateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Schema != nil {
        // handle response
    }
}
```
