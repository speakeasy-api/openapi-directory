# GeneralServices

## Overview

General services

### Available Operations

* [HealthCheck](#healthcheck) - /health/check

## HealthCheck

Health check
Use this service to determine whether the Viator API is presently online and that your API key is valid. You should receive a response identical to the example shown. If you have not yet received an API key, please request one from your business development partner. If you have not yet signed up as a Viator merchant partner and would like to, please visit our [distribution partner website](https://www.viator.com/distribution-partners?mcid=58463#api-solutions)."


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
            APIKey: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.GeneralServices.HealthCheck(ctx, operations.HealthCheckRequest{
        AcceptLanguage: "en-US",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.HealthCheck200ApplicationJSONObject != nil {
        // handle response
    }
}
```
