# AdminService

## Overview

Administrative services, such as creating or deleting corpora

### Available Operations

* [CreateCorpus](#createcorpus) - Create Corpus
* [DeleteCorpus](#deletecorpus) - Delete Corpus
* [ListCorpora](#listcorpora) - List Corpora
* [ResetCorpus](#resetcorpus) - Reset Corpus

## CreateCorpus

Create Corpus

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            OAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.AdminService.CreateCorpus(ctx, operations.CreateCorpusRequest{
        AdminCreateCorpusRequest: shared.AdminCreateCorpusRequest{
            Corpus: &shared.AdminCorpus{
                CustomDimensions: []shared.AdminDimension{
                    shared.AdminDimension{
                        Description: sdk.String("optio"),
                        IndexingDefault: sdk.Float64(5218.48),
                        Name: sdk.String("Lucy Krajcik"),
                        ServingDefault: sdk.Float64(7742.34),
                    },
                    shared.AdminDimension{
                        Description: sdk.String("cum"),
                        IndexingDefault: sdk.Float64(4561.5),
                        Name: sdk.String("Mrs. Miriam Collier"),
                        ServingDefault: sdk.Float64(1496.75),
                    },
                    shared.AdminDimension{
                        Description: sdk.String("iste"),
                        IndexingDefault: sdk.Float64(2223.21),
                        Name: sdk.String("Lester Welch"),
                        ServingDefault: sdk.Float64(4499.5),
                    },
                    shared.AdminDimension{
                        Description: sdk.String("corporis"),
                        IndexingDefault: sdk.Float64(6130.64),
                        Name: sdk.String("Mr. Kerry Predovic"),
                        ServingDefault: sdk.Float64(6667.67),
                    },
                },
                Description: sdk.String("mollitia"),
                DtProvision: sdk.String("laborum"),
                Enabled: sdk.Bool(false),
                EncoderID: sdk.String("dolores"),
                Encrypted: sdk.Bool(false),
                FilterAttributes: []shared.AdminFilterAttribute{
                    shared.AdminFilterAttribute{
                        Description: sdk.String("corporis"),
                        Indexed: sdk.Bool(false),
                        Level: shared.AdminFilterAttributeLevelEnumFilterAttributeLevelUndefined.ToPointer(),
                        Name: sdk.String("Ronnie Mohr"),
                        Type: shared.AdminFilterAttributeTypeEnumFilterAttributeTypeReal.ToPointer(),
                    },
                },
                ID: sdk.Int64(38425),
                MetadataMaxBytes: sdk.Int64(438601),
                Name: sdk.String("Miss Aubrey Williamson"),
                SwapIenc: sdk.Bool(false),
                SwapQenc: sdk.Bool(false),
                Textless: sdk.Bool(false),
            },
        },
        CustomerID: 635059,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AdminCreateCorpusResponse != nil {
        // handle response
    }
}
```

## DeleteCorpus

Delete Corpus

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            OAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.AdminService.DeleteCorpus(ctx, operations.DeleteCorpusRequest{
        AdminDeleteCorpusRequest: shared.AdminDeleteCorpusRequest{
            CorpusID: sdk.Int64(161309),
            CustomerID: sdk.Int64(995300),
        },
        CustomerID: 653108,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AdminDeleteCorpusResponse != nil {
        // handle response
    }
}
```

## ListCorpora

List Corpora

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            OAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.AdminService.ListCorpora(ctx, operations.ListCorporaRequest{
        AdminListCorporaRequest: shared.AdminListCorporaRequest{
            Filter: sdk.String("occaecati"),
            NumResults: sdk.Int64(253291),
            PageKey: sdk.String("commodi"),
        },
        CustomerID: 466311,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AdminListCorporaResponse != nil {
        // handle response
    }
}
```

## ResetCorpus

Reset Corpus

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            OAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.AdminService.ResetCorpus(ctx, operations.ResetCorpusRequest{
        AdminResetCorpusRequest: shared.AdminResetCorpusRequest{
            CorpusID: sdk.Int64(474697),
            CustomerID: sdk.Int64(244425),
        },
        CustomerID: 623510,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AdminResetCorpusResponse != nil {
        // handle response
    }
}
```
