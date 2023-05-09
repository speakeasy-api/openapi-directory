# Numbers

## Overview

Create, List, Updated and Delete Numbers (DDIs)

### Available Operations

* [GetNumbers](#getnumbers) - List available SureVoIP Ofcom number allocations for purchase

## GetNumbers

List available SureVoIP Ofcom number allocations for purchase

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.Numbers.GetNumbers(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
