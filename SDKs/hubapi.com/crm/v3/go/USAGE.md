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

    req := operations.DeleteCrmV3ExtensionsCardsAppIDCardIDArchiveRequest{
        AppID: 548814,
        CardID: "provident",
    }

    ctx := context.Background()
    res, err := s.Cards.DeleteCrmV3ExtensionsCardsAppIDCardIDArchive(ctx, req, operations.DeleteCrmV3ExtensionsCardsAppIDCardIDArchiveSecurity{
        DeveloperHapikey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->