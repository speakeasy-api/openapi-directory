# Cards

## Overview

Fetch cards globally

### Available Operations

* [Cards](#cards) - fetch the list of cards
* [FindPetsByTags](#findpetsbytags) - Finds Card by Global ID
* [GetSetsSetCardLocalID](#getsetssetcardlocalid)

## Cards

desc

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Cards.Cards(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.CardResumes != nil {
        // handle response
    }
}
```

## FindPetsByTags

Find a defined card thatusing its global id

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
    res, err := s.Cards.FindPetsByTags(ctx, operations.FindPetsByTagsRequest{
        CardID: "corrupti",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Card != nil {
        // handle response
    }
}
```

## GetSetsSetCardLocalID

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
    res, err := s.Cards.GetSetsSetCardLocalID(ctx, operations.GetSetsSetCardLocalIDRequest{
        CardLocalID: "provident",
        Set: "distinctio",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Card != nil {
        // handle response
    }
}
```
