# NominalCode

### Available Operations

* [DeleteNominalCode](#deletenominalcode) - Deletes the nominal codes
* [GetNominalCodeFromEmployer](#getnominalcodefromemployer) - Gets the nominal code
* [GetNominalCodesFromEmployer](#getnominalcodesfromemployer) - Gets the nominal codes
* [PostNominalCode](#postnominalcode) - Insert nominal code
* [PutNominalCode](#putnominalcode) - Insert nominal code

## DeleteNominalCode

Deletes the nominal code

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
    res, err := s.NominalCode.DeleteNominalCode(ctx, operations.DeleteNominalCodeRequest{
        APIVersion: "est",
        Authorization: "quis",
        EmployerID: "sint",
        NominalCodeID: "accusamus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetNominalCodeFromEmployer

Gets the nominal code

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
    res, err := s.NominalCode.GetNominalCodeFromEmployer(ctx, operations.GetNominalCodeFromEmployerRequest{
        APIVersion: "impedit",
        Authorization: "hic",
        EmployerID: "necessitatibus",
        NominalCodeID: "asperiores",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.NominalCode != nil {
        // handle response
    }
}
```

## GetNominalCodesFromEmployer

Gets the nominal code links

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
    res, err := s.NominalCode.GetNominalCodesFromEmployer(ctx, operations.GetNominalCodesFromEmployerRequest{
        APIVersion: "ex",
        Authorization: "voluptas",
        EmployerID: "debitis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LinkCollection != nil {
        // handle response
    }
}
```

## PostNominalCode

Inserts a new nominal code

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
    res, err := s.NominalCode.PostNominalCode(ctx, operations.PostNominalCodeRequest{
        APIVersion: "delectus",
        Authorization: "quae",
        EmployerID: "minus",
        NominalCode: shared.NominalCode{
            NominalCode: &shared.NominalCodeNominalCode{
                Description: sdk.String("fuga"),
                Key: sdk.String("laborum"),
            },
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Link != nil {
        // handle response
    }
}
```

## PutNominalCode

Inserts a new nominal code at the specified resource location

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
    res, err := s.NominalCode.PutNominalCode(ctx, operations.PutNominalCodeRequest{
        APIVersion: "consectetur",
        Authorization: "velit",
        EmployerID: "atque",
        NominalCode: shared.NominalCode{
            NominalCode: &shared.NominalCodeNominalCode{
                Description: sdk.String("ipsum"),
                Key: sdk.String("impedit"),
            },
        },
        NominalCodeID: "magni",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.NominalCode != nil {
        // handle response
    }
}
```
