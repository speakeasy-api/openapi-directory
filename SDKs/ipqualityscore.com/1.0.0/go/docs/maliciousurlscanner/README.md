# MaliciousURLScanner

### Available Operations

* [MaliciousURLScanner](#maliciousurlscanner) - Malicious URL Scanner

## MaliciousURLScanner

Malicious URL Scanner

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
    res, err := s.MaliciousURLScanner.MaliciousURLScanner(ctx, operations.MaliciousURLScannerRequest{
        URLHere: "https%3A%2F%2Fgoogle.com",
        YourAPIKeyHere: "asd24#sdfs322#",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MaliciousURLScanner200ApplicationJSONObject != nil {
        // handle response
    }
}
```
