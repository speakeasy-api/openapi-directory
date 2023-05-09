# General

### Available Operations

* [NameType](#nametype) - Infer the likely type of a proper noun (personal name, brand name, place name etc.)
* [NameTypeBatch](#nametypebatch) - Infer the likely common type of up to 100 proper nouns (personal name, brand name, place name etc.)
* [NameTypeGeo](#nametypegeo) - Infer the likely type of a proper noun (personal name, brand name, place name etc.)
* [NameTypeGeoBatch](#nametypegeobatch) - Infer the likely common type of up to 100 proper nouns (personal name, brand name, place name etc.)

## NameType

Infer the likely type of a proper noun (personal name, brand name, place name etc.)

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
    res, err := s.General.NameType(ctx, operations.NameTypeRequest{
        ProperNoun: "at",
    }, operations.NameTypeSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProperNounCategorizedOut != nil {
        // handle response
    }
}
```

## NameTypeBatch

Infer the likely common type of up to 100 proper nouns (personal name, brand name, place name etc.)

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.General.NameTypeBatch(ctx, shared.BatchNameIn{
        Facts: []shared.FactIn{
            shared.FactIn{
                ID: sdk.String("2f615199-ebfd-40e9-be6c-632ca3aed011"),
                Name: sdk.String("Ada McClure"),
            },
            shared.FactIn{
                ID: sdk.String("12fde047-7177-48ff-a1d0-17476360a15d"),
                Name: sdk.String("Gene Nikolaus"),
            },
            shared.FactIn{
                ID: sdk.String("0659a1ad-eaab-4585-9d6c-645b08b61891"),
                Name: sdk.String("Dr. Rex Nicolas"),
            },
            shared.FactIn{
                ID: sdk.String("1ade008e-6f8c-45f3-90d8-cdb5a3418143"),
                Name: sdk.String("Alice Bailey"),
            },
        },
        ProperNouns: []shared.NameIn{
            shared.NameIn{
                ID: sdk.String("813d5208-ece7-4e25-bb66-8451c6c6e205"),
                Name: sdk.String("Arthur Huel"),
            },
        },
    }, operations.NameTypeBatchSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchProperNounCategorizedOut != nil {
        // handle response
    }
}
```

## NameTypeGeo

Infer the likely type of a proper noun (personal name, brand name, place name etc.)

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
    res, err := s.General.NameTypeGeo(ctx, operations.NameTypeGeoRequest{
        CountryIso2: "est",
        ProperNoun: "harum",
    }, operations.NameTypeGeoSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProperNounCategorizedOut != nil {
        // handle response
    }
}
```

## NameTypeGeoBatch

Infer the likely common type of up to 100 proper nouns (personal name, brand name, place name etc.)

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.General.NameTypeGeoBatch(ctx, shared.BatchNameGeoIn{
        Facts: []shared.FactIn{
            shared.FactIn{
                ID: sdk.String("fec9578a-6458-4427-ba84-18d162309fb0"),
                Name: sdk.String("Craig Mayert"),
            },
        },
        ProperNouns: []shared.NameGeoIn{
            shared.NameGeoIn{
                CountryIso2: sdk.String("fuga"),
                ID: sdk.String("efb9f58c-4d86-4e68-a4be-056013f59da7"),
                Name: sdk.String("Melinda Orn"),
            },
        },
    }, operations.NameTypeGeoBatchSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchProperNounCategorizedOut != nil {
        // handle response
    }
}
```
