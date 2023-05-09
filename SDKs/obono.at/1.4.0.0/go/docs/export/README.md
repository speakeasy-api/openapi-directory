# Export

### Available Operations

* [GetExportCsvRegistrierkassenRegistrierkasseUUIDBelege](#getexportcsvregistrierkassenregistrierkasseuuidbelege)
* [GetExportDep131RegistrierkassenRegistrierkasseUUIDBelege](#getexportdep131registrierkassenregistrierkasseuuidbelege)
* [GetExportDep7RegistrierkassenRegistrierkasseUUIDBelege](#getexportdep7registrierkassenregistrierkasseuuidbelege)
* [GetExportGobdRegistrierkassenRegistrierkasseUUID](#getexportgobdregistrierkassenregistrierkasseuuid)
* [GetExportHTMLBelegeBelegUUID](#getexporthtmlbelegebeleguuid)
* [GetExportPdfBelegeBelegUUID](#getexportpdfbelegebeleguuid)
* [GetExportQrBelegeBelegUUID](#getexportqrbelegebeleguuid)
* [GetExportThermalPrintBelegeBelegUUID](#getexportthermalprintbelegebeleguuid)
* [GetExportXlsRegistrierkassenRegistrierkasseUUIDBelege](#getexportxlsregistrierkassenregistrierkasseuuidbelege)

## GetExportCsvRegistrierkassenRegistrierkasseUUIDBelege

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Jwt: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Export.GetExportCsvRegistrierkassenRegistrierkasseUUIDBelege(ctx, operations.GetExportCsvRegistrierkassenRegistrierkasseUUIDBelegeRequest{
        After: sdk.String("minima"),
        Before: sdk.String("excepturi"),
        Posten: sdk.Bool(false),
        RegistrierkasseUUID: "accusantium",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetExportDep131RegistrierkassenRegistrierkasseUUIDBelege

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Jwt: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Export.GetExportDep131RegistrierkassenRegistrierkasseUUIDBelege(ctx, operations.GetExportDep131RegistrierkassenRegistrierkasseUUIDBelegeRequest{
        After: sdk.String("iure"),
        Before: sdk.String("culpa"),
        RegistrierkasseUUID: "doloribus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetExportDep7RegistrierkassenRegistrierkasseUUIDBelege

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Jwt: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Export.GetExportDep7RegistrierkassenRegistrierkasseUUIDBelege(ctx, operations.GetExportDep7RegistrierkassenRegistrierkasseUUIDBelegeRequest{
        After: sdk.String("sapiente"),
        Before: sdk.String("architecto"),
        RegistrierkasseUUID: "mollitia",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetExportGobdRegistrierkassenRegistrierkasseUUID

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Jwt: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Export.GetExportGobdRegistrierkassenRegistrierkasseUUID(ctx, operations.GetExportGobdRegistrierkassenRegistrierkasseUUIDRequest{
        After: sdk.String("dolorem"),
        Before: sdk.String("culpa"),
        RegistrierkasseUUID: "consequuntur",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetExportHTMLBelegeBelegUUID

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Jwt: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Export.GetExportHTMLBelegeBelegUUID(ctx, operations.GetExportHTMLBelegeBelegUUIDRequest{
        BelegUUID: "repellat",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetExportPdfBelegeBelegUUID

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Jwt: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Export.GetExportPdfBelegeBelegUUID(ctx, operations.GetExportPdfBelegeBelegUUIDRequest{
        BelegUUID: "mollitia",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetExportQrBelegeBelegUUID

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Jwt: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Export.GetExportQrBelegeBelegUUID(ctx, operations.GetExportQrBelegeBelegUUIDRequest{
        BelegUUID: "occaecati",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetExportThermalPrintBelegeBelegUUID

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Jwt: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Export.GetExportThermalPrintBelegeBelegUUID(ctx, operations.GetExportThermalPrintBelegeBelegUUIDRequest{
        BelegUUID: "numquam",
        Dialect: operations.GetExportThermalPrintBelegeBelegUUIDDialectEnumEscposlite.ToPointer(),
        Encoding: operations.GetExportThermalPrintBelegeBelegUUIDEncodingEnumRaw.ToPointer(),
        Qr: sdk.Bool(false),
        Width: sdk.Int64(474697),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetExportXlsRegistrierkassenRegistrierkasseUUIDBelege

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Jwt: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Export.GetExportXlsRegistrierkassenRegistrierkasseUUIDBelege(ctx, operations.GetExportXlsRegistrierkassenRegistrierkasseUUIDBelegeRequest{
        After: sdk.String("velit"),
        Before: sdk.String("error"),
        RegistrierkasseUUID: "quia",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
