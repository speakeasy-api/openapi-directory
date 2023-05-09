# LocalTaxes

### Available Operations

* [AddLocalTax](#addlocaltax) - Add new local tax
* [DeleteLocalTaxByTaxCode](#deletelocaltaxbytaxcode) - Delete local tax by tax code
* [GetAllLocalTaxes](#getalllocaltaxes) - Get all local taxes
* [GetLocalTaxByTaxCode](#getlocaltaxbytaxcode) - Get local taxes by tax code

## AddLocalTax

Sends new employee local tax information directly to Web Pay.

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
    res, err := s.LocalTaxes.AddLocalTax(ctx, operations.AddLocalTaxRequest{
        CompanyID: "eum",
        EmployeeID: "eius",
        LocalTax: shared.LocalTax{
            Exemptions: sdk.Float64(5219.96),
            Exemptions2: sdk.Float64(8710.83),
            FilingStatus: sdk.String("impedit"),
            ResidentPSD: sdk.String("eos"),
            TaxCode: sdk.String("sapiente"),
            WorkPSD: sdk.String("eum"),
        },
    }, operations.AddLocalTaxSecurity{
        PaylocityAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteLocalTaxByTaxCode

Delete local tax by tax code

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
    res, err := s.LocalTaxes.DeleteLocalTaxByTaxCode(ctx, operations.DeleteLocalTaxByTaxCodeRequest{
        CompanyID: "dicta",
        EmployeeID: "minima",
        TaxCode: "beatae",
    }, operations.DeleteLocalTaxByTaxCodeSecurity{
        PaylocityAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetAllLocalTaxes

Returns all local taxes for the selected employee.

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
    res, err := s.LocalTaxes.GetAllLocalTaxes(ctx, operations.GetAllLocalTaxesRequest{
        CompanyID: "cupiditate",
        EmployeeID: "provident",
    }, operations.GetAllLocalTaxesSecurity{
        PaylocityAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LocalTaxes != nil {
        // handle response
    }
}
```

## GetLocalTaxByTaxCode

Returns all local taxes with the provided tax code for the selected employee.

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
    res, err := s.LocalTaxes.GetLocalTaxByTaxCode(ctx, operations.GetLocalTaxByTaxCodeRequest{
        CompanyID: "earum",
        EmployeeID: "soluta",
        TaxCode: "hic",
    }, operations.GetLocalTaxByTaxCodeSecurity{
        PaylocityAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LocalTaxes != nil {
        // handle response
    }
}
```
