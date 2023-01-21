<!-- Start SDK Example Usage -->
```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()
    
    req := operations.ClearUserSessionsRequest{
        PathParams: operations.ClearUserSessionsPathParams{
            UserID: "sit",
        },
        Request: []byte("voluptas"),
    }
    
    res, err := s.ClearUserSessions(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
```
<!-- End SDK Example Usage -->