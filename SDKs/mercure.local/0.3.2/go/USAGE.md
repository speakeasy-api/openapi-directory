<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Bearer: &shared.SchemeBearer{
                Authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
            },
        }),
    )

    req := operations.GetWellKnownMercureRequest{
        QueryParams: operations.GetWellKnownMercureQueryParams{
            LastEventID: "corrupti",
            Topic: []string{
                "distinctio",
                "quibusdam",
                "unde",
            },
        },
        Headers: operations.GetWellKnownMercureHeaders{
            LastEventID: "nulla",
        },
    }

    ctx := context.Background()
    res, err := s.GetWellKnownMercure(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->