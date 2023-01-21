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
    
    req := operations.DeleteWebhooksV3AppIDSettingsClearRequest{
        Security: operations.DeleteWebhooksV3AppIDSettingsClearSecurity{
            DeveloperHapikey: shared.SchemeDeveloperHapikey{
                APIKey: "YOUR_API_KEY_HERE",
            },
        },
        PathParams: operations.DeleteWebhooksV3AppIDSettingsClearPathParams{
            AppID: 8717895732742165505,
        },
    }
    
    res, err := s.Settings.DeleteWebhooksV3AppIDSettingsClear(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
```
<!-- End SDK Example Usage -->