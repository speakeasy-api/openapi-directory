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
    
    req := operations.DeleteCrmV3ExtensionsCardsAppIDCardIDArchiveRequest{
        Security: operations.DeleteCrmV3ExtensionsCardsAppIDCardIDArchiveSecurity{
            DeveloperHapikey: shared.SchemeDeveloperHapikey{
                APIKey: "YOUR_API_KEY_HERE",
            },
        },
        PathParams: operations.DeleteCrmV3ExtensionsCardsAppIDCardIDArchivePathParams{
            AppID: 2300325445861974853,
            CardID: "ut",
        },
    }
    
    res, err := s.Cards.DeleteCrmV3ExtensionsCardsAppIDCardIDArchive(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
```
<!-- End SDK Example Usage -->