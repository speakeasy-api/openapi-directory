# Ontology

## Overview

Ontology Web Service

### Available Operations

* [GETOntDagsUsingGET](#getontdagsusingget) - Returns child and parent terms for Accession ID
* [GETTermUsingGET](#gettermusingget) - Returns term for Accession ID
* [IsDescendantOfUsingGET](#isdescendantofusingget) - Returns true or false for terms

## GETOntDagsUsingGET

Returns child and parent terms for Accession ID

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
    res, err := s.Ontology.GETOntDagsUsingGET(ctx, operations.GETOntDagsUsingGETRequest{
        AccID: "id",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETTermUsingGET

Returns term for Accession ID

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
    res, err := s.Ontology.GETTermUsingGET(ctx, operations.GETTermUsingGETRequest{
        AccID: "possimus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## IsDescendantOfUsingGET

Returns true or false for terms

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
    res, err := s.Ontology.IsDescendantOfUsingGET(ctx, operations.IsDescendantOfUsingGETRequest{
        AccId1: "aut",
        AccId2: "quasi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
