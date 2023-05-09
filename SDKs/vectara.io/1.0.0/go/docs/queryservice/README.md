# QueryService

## Overview

Query operations, such as performing a standard search

### Available Operations

* [Query](#query) - Query
* [StreamQuery](#streamquery) - Stream Query

## Query

Query

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
    res, err := s.QueryService.Query(ctx, operations.QueryRequest{
        CustomerID: 313218,
        ServingBatchQueryRequest: shared.ServingBatchQueryRequest{
            Query: []shared.ServingQueryRequest{
                shared.ServingQueryRequest{
                    CorpusKey: []shared.ServingCorpusKey{
                        shared.ServingCorpusKey{
                            CorpusID: sdk.Int64(692532),
                            CustomerID: sdk.Int64(588465),
                            Dim: []shared.VectaraservingCustomDimension{
                                shared.VectaraservingCustomDimension{
                                    Name: sdk.String("Nelson Lesch"),
                                    Weight: sdk.Float64(6439.9),
                                },
                                shared.VectaraservingCustomDimension{
                                    Name: sdk.String("Wilma Mosciski"),
                                    Weight: sdk.Float64(191.93),
                                },
                                shared.VectaraservingCustomDimension{
                                    Name: sdk.String("Megan Rau"),
                                    Weight: sdk.Float64(2900.77),
                                },
                            },
                            MetadataFilter: sdk.String("suscipit"),
                            Semantics: shared.CorpusKeySemanticsEnumQuery.ToPointer(),
                        },
                        shared.ServingCorpusKey{
                            CorpusID: sdk.Int64(749170),
                            CustomerID: sdk.Int64(428769),
                            Dim: []shared.VectaraservingCustomDimension{
                                shared.VectaraservingCustomDimension{
                                    Name: sdk.String("Ms. Julie Gusikowski"),
                                    Weight: sdk.Float64(5908.73),
                                },
                                shared.VectaraservingCustomDimension{
                                    Name: sdk.String("Kirk Bartoletti"),
                                    Weight: sdk.Float64(6521.03),
                                },
                                shared.VectaraservingCustomDimension{
                                    Name: sdk.String("Natalie Ernser"),
                                    Weight: sdk.Float64(3675.62),
                                },
                                shared.VectaraservingCustomDimension{
                                    Name: sdk.String("Vera Wyman"),
                                    Weight: sdk.Float64(8061.94),
                                },
                            },
                            MetadataFilter: sdk.String("deleniti"),
                            Semantics: shared.CorpusKeySemanticsEnumResponse.ToPointer(),
                        },
                        shared.ServingCorpusKey{
                            CorpusID: sdk.Int64(447926),
                            CustomerID: sdk.Int64(100226),
                            Dim: []shared.VectaraservingCustomDimension{
                                shared.VectaraservingCustomDimension{
                                    Name: sdk.String("Pedro Ratke"),
                                    Weight: sdk.Float64(8411.4),
                                },
                            },
                            MetadataFilter: sdk.String("sed"),
                            Semantics: shared.CorpusKeySemanticsEnumResponse.ToPointer(),
                        },
                        shared.ServingCorpusKey{
                            CorpusID: sdk.Int64(868126),
                            CustomerID: sdk.Int64(37559),
                            Dim: []shared.VectaraservingCustomDimension{
                                shared.VectaraservingCustomDimension{
                                    Name: sdk.String("Miss Nick Cummerata"),
                                    Weight: sdk.Float64(8649.34),
                                },
                            },
                            MetadataFilter: sdk.String("maxime"),
                            Semantics: shared.CorpusKeySemanticsEnumQuery.ToPointer(),
                        },
                    },
                    NumResults: sdk.Int64(569101),
                    Query: sdk.String("odit"),
                    RerankingConfig: &shared.QueryRequestRerankingConfig{
                        RerankerID: sdk.Int64(407183),
                    },
                    Start: sdk.Int64(33222),
                },
                shared.ServingQueryRequest{
                    CorpusKey: []shared.ServingCorpusKey{
                        shared.ServingCorpusKey{
                            CorpusID: sdk.Int64(982575),
                            CustomerID: sdk.Int64(697429),
                            Dim: []shared.VectaraservingCustomDimension{
                                shared.VectaraservingCustomDimension{
                                    Name: sdk.String("Dr. Stacey Reichert"),
                                    Weight: sdk.Float64(9755.22),
                                },
                                shared.VectaraservingCustomDimension{
                                    Name: sdk.String("Miss Ginger Feeney"),
                                    Weight: sdk.Float64(9441.24),
                                },
                            },
                            MetadataFilter: sdk.String("libero"),
                            Semantics: shared.CorpusKeySemanticsEnumResponse.ToPointer(),
                        },
                    },
                    NumResults: sdk.Int64(171629),
                    Query: sdk.String("quis"),
                    RerankingConfig: &shared.QueryRequestRerankingConfig{
                        RerankerID: sdk.Int64(521037),
                    },
                    Start: sdk.Int64(489549),
                },
                shared.ServingQueryRequest{
                    CorpusKey: []shared.ServingCorpusKey{
                        shared.ServingCorpusKey{
                            CorpusID: sdk.Int64(338985),
                            CustomerID: sdk.Int64(199996),
                            Dim: []shared.VectaraservingCustomDimension{
                                shared.VectaraservingCustomDimension{
                                    Name: sdk.String("Jacqueline Schimmel"),
                                    Weight: sdk.Float64(8745.73),
                                },
                            },
                            MetadataFilter: sdk.String("nostrum"),
                            Semantics: shared.CorpusKeySemanticsEnumResponse.ToPointer(),
                        },
                    },
                    NumResults: sdk.Int64(928082),
                    Query: sdk.String("omnis"),
                    RerankingConfig: &shared.QueryRequestRerankingConfig{
                        RerankerID: sdk.Int64(704415),
                    },
                    Start: sdk.Int64(596656),
                },
                shared.ServingQueryRequest{
                    CorpusKey: []shared.ServingCorpusKey{
                        shared.ServingCorpusKey{
                            CorpusID: sdk.Int64(783645),
                            CustomerID: sdk.Int64(164694),
                            Dim: []shared.VectaraservingCustomDimension{
                                shared.VectaraservingCustomDimension{
                                    Name: sdk.String("Gary Mayert"),
                                    Weight: sdk.Float64(9923.97),
                                },
                                shared.VectaraservingCustomDimension{
                                    Name: sdk.String("Edwin Morar"),
                                    Weight: sdk.Float64(8642.82),
                                },
                                shared.VectaraservingCustomDimension{
                                    Name: sdk.String("Loren Renner"),
                                    Weight: sdk.Float64(5542.42),
                                },
                            },
                            MetadataFilter: sdk.String("aliquid"),
                            Semantics: shared.CorpusKeySemanticsEnumDefault.ToPointer(),
                        },
                    },
                    NumResults: sdk.Int64(209843),
                    Query: sdk.String("dolor"),
                    RerankingConfig: &shared.QueryRequestRerankingConfig{
                        RerankerID: sdk.Int64(186193),
                    },
                    Start: sdk.Int64(218749),
                },
            },
        },
    }, operations.QuerySecurity{
        APIKeyAuth: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ServingBatchQueryResponse != nil {
        // handle response
    }
}
```

## StreamQuery

Stream Query

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
    res, err := s.QueryService.StreamQuery(ctx, operations.StreamQueryRequest{
        CustomerID: 944373,
        ServingBatchQueryRequest: shared.ServingBatchQueryRequest{
            Query: []shared.ServingQueryRequest{
                shared.ServingQueryRequest{
                    CorpusKey: []shared.ServingCorpusKey{
                        shared.ServingCorpusKey{
                            CorpusID: sdk.Int64(452109),
                            CustomerID: sdk.Int64(490459),
                            Dim: []shared.VectaraservingCustomDimension{
                                shared.VectaraservingCustomDimension{
                                    Name: sdk.String("Mr. Lee Funk III"),
                                    Weight: sdk.Float64(4878.38),
                                },
                                shared.VectaraservingCustomDimension{
                                    Name: sdk.String("Sophia Predovic"),
                                    Weight: sdk.Float64(6176.58),
                                },
                                shared.VectaraservingCustomDimension{
                                    Name: sdk.String("Kay Bailey DDS"),
                                    Weight: sdk.Float64(6793.93),
                                },
                                shared.VectaraservingCustomDimension{
                                    Name: sdk.String("Colleen Pagac"),
                                    Weight: sdk.Float64(8966.72),
                                },
                            },
                            MetadataFilter: sdk.String("distinctio"),
                            Semantics: shared.CorpusKeySemanticsEnumResponse.ToPointer(),
                        },
                        shared.ServingCorpusKey{
                            CorpusID: sdk.Int64(469497),
                            CustomerID: sdk.Int64(216897),
                            Dim: []shared.VectaraservingCustomDimension{
                                shared.VectaraservingCustomDimension{
                                    Name: sdk.String("Elbert Gislason I"),
                                    Weight: sdk.Float64(7583.79),
                                },
                                shared.VectaraservingCustomDimension{
                                    Name: sdk.String("Tommy Turner"),
                                    Weight: sdk.Float64(5883.17),
                                },
                            },
                            MetadataFilter: sdk.String("minima"),
                            Semantics: shared.CorpusKeySemanticsEnumResponse.ToPointer(),
                        },
                        shared.ServingCorpusKey{
                            CorpusID: sdk.Int64(519711),
                            CustomerID: sdk.Int64(628982),
                            Dim: []shared.VectaraservingCustomDimension{
                                shared.VectaraservingCustomDimension{
                                    Name: sdk.String("Alex Goodwin"),
                                    Weight: sdk.Float64(8853.38),
                                },
                            },
                            MetadataFilter: sdk.String("qui"),
                            Semantics: shared.CorpusKeySemanticsEnumResponse.ToPointer(),
                        },
                    },
                    NumResults: sdk.Int64(952792),
                    Query: sdk.String("esse"),
                    RerankingConfig: &shared.QueryRequestRerankingConfig{
                        RerankerID: sdk.Int64(687488),
                    },
                    Start: sdk.Int64(483409),
                },
                shared.ServingQueryRequest{
                    CorpusKey: []shared.ServingCorpusKey{
                        shared.ServingCorpusKey{
                            CorpusID: sdk.Int64(788740),
                            CustomerID: sdk.Int64(947371),
                            Dim: []shared.VectaraservingCustomDimension{
                                shared.VectaraservingCustomDimension{
                                    Name: sdk.String("Tomas Funk"),
                                    Weight: sdk.Float64(9574.51),
                                },
                            },
                            MetadataFilter: sdk.String("totam"),
                            Semantics: shared.CorpusKeySemanticsEnumQuery.ToPointer(),
                        },
                    },
                    NumResults: sdk.Int64(25662),
                    Query: sdk.String("expedita"),
                    RerankingConfig: &shared.QueryRequestRerankingConfig{
                        RerankerID: sdk.Int64(207470),
                    },
                    Start: sdk.Int64(153694),
                },
                shared.ServingQueryRequest{
                    CorpusKey: []shared.ServingCorpusKey{
                        shared.ServingCorpusKey{
                            CorpusID: sdk.Int64(730442),
                            CustomerID: sdk.Int64(374170),
                            Dim: []shared.VectaraservingCustomDimension{
                                shared.VectaraservingCustomDimension{
                                    Name: sdk.String("Tracy Gottlieb"),
                                    Weight: sdk.Float64(8075.81),
                                },
                                shared.VectaraservingCustomDimension{
                                    Name: sdk.String("Dominic Carroll"),
                                    Weight: sdk.Float64(2768.94),
                                },
                                shared.VectaraservingCustomDimension{
                                    Name: sdk.String("Bonnie Raynor"),
                                    Weight: sdk.Float64(4631.5),
                                },
                            },
                            MetadataFilter: sdk.String("molestias"),
                            Semantics: shared.CorpusKeySemanticsEnumResponse.ToPointer(),
                        },
                        shared.ServingCorpusKey{
                            CorpusID: sdk.Int64(183280),
                            CustomerID: sdk.Int64(204865),
                            Dim: []shared.VectaraservingCustomDimension{
                                shared.VectaraservingCustomDimension{
                                    Name: sdk.String("Courtney Cassin"),
                                    Weight: sdk.Float64(9404.32),
                                },
                            },
                            MetadataFilter: sdk.String("voluptatem"),
                            Semantics: shared.CorpusKeySemanticsEnumResponse.ToPointer(),
                        },
                    },
                    NumResults: sdk.Int64(746994),
                    Query: sdk.String("nobis"),
                    RerankingConfig: &shared.QueryRequestRerankingConfig{
                        RerankerID: sdk.Int64(92596),
                    },
                    Start: sdk.Int64(903720),
                },
            },
        },
    }, operations.StreamQuerySecurity{
        APIKeyAuth: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StreamResultOfServingResponseSet != nil {
        // handle response
    }
}
```
