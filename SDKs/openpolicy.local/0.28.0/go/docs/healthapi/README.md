# HealthAPI

## Overview

Executes a simple built-in policy query to verify that the server is operational

### Available Operations

* [GetHealth](#gethealth) - Health

## GetHealth

This API endpoint verifies that the server is operational.

The response from the server is either 200 or 500:
- **200** - OPA service is healthy. If `bundles` is true, then all configured bundles have been activated. If `plugins` is true, then all plugins are in an 'OK' state.
- **500** - OPA service is *not* healthy. If `bundles` is true, at least one of configured bundles has not yet been activated. If `plugins` is true, at least one plugins is in a 'not OK' state.

---
**Note**
This check is only for initial bundle activation. Subsequent downloads will not affect the health check.

Use the **status** endpoint (in the (management API)[management.html]) for more fine-grained bundle status monitoring.

---

Bundles
<https://www.openpolicyagent.org/docs/latest/management/#bundles>

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
    res, err := s.HealthAPI.GetHealth(ctx, operations.GetHealthRequest{
        Bundles: sdk.Bool(false),
        Plugins: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
