# Generate

## Overview

Operations to generate a token

### Available Operations

* [PostVisitorIdentificationV3TokensCreateGenerateToken](#postvisitoridentificationv3tokenscreategeneratetoken) - Generate a token

## PostVisitorIdentificationV3TokensCreateGenerateToken

Generates a new visitor identification token. This token will be unique every time this endpoint is called, even if called with the same email address. This token is temporary and will expire after 12 hours

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Generate.PostVisitorIdentificationV3TokensCreateGenerateToken(ctx, shared.IdentificationTokenGenerationRequest{
        Email: "Linda.Oberbrunner@yahoo.com",
        FirstName: sdk.String("Eli"),
        LastName: sdk.String("Toy"),
    }, operations.PostVisitorIdentificationV3TokensCreateGenerateTokenSecurity{
        Hapikey: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.IdentificationTokenResponse != nil {
        // handle response
    }
}
```
