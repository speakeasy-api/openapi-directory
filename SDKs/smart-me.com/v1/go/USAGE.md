<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.AccessToken.AccessTokenPutForm(ctx, shared.AccessTokenToPut{
        CardID: sdk.Int64(548814),
        UserID: sdk.Int64(592845),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AccessTokenPutForm200ApplicationJSONString != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->