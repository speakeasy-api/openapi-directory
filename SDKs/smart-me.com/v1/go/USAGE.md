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
    s := sdk.New()

    req := shared.AccessTokenToPut{
        CardID: 548814,
        UserID: 592845,
    }

    ctx := context.Background()
    res, err := s.AccessToken.AccessTokenPutForm(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AccessTokenPutForm200ApplicationJSONString != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->