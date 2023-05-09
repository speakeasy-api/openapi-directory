# ECommerce

### Available Operations

* [BINListDownload](#binlistdownload) - BIN List Download
* [BINLookup](#binlookup) - BIN Lookup
* [Convert](#convert) - Convert

## BINListDownload

Download our entire BIN database for direct use on your own systems

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
            APIKey: "YOUR_API_KEY_HERE",
            UserID: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.ECommerce.BINListDownload(ctx, operations.BINListDownloadRequest{
        Include8digit: sdk.Bool(false),
        IncludeIso3: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BINListDownload200ApplicationJSONBinaryString != nil {
        // handle response
    }
}
```

## BINLookup

Perform a BIN (Bank Identification Number) or IIN (Issuer Identification Number) lookup

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
            APIKey: "YOUR_API_KEY_HERE",
            UserID: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.ECommerce.BINLookup(ctx, operations.BINLookupRequest{
        BinNumber: "placeat",
        CustomerIP: sdk.String("voluptatum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BINLookupResponse != nil {
        // handle response
    }
}
```

## Convert

A currency and unit conversion tool

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
            APIKey: "YOUR_API_KEY_HERE",
            UserID: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.ECommerce.Convert(ctx, operations.ConvertRequest{
        FromType: "iusto",
        FromValue: "excepturi",
        ToType: "nisi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ConvertResponse != nil {
        // handle response
    }
}
```
