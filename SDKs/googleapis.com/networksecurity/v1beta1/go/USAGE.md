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

    req := operations.NetworksecurityProjectsLocationsAddressGroupsAddItemsRequest{
        DollarXgafv: "2",
        AddAddressGroupItemsRequest: &shared.AddAddressGroupItemsRequest{
            Items: []string{
                "distinctio",
                "quibusdam",
                "unde",
            },
            RequestID: "nulla",
        },
        AccessToken: "corrupti",
        AddressGroup: "illum",
        Alt: "media",
        Callback: "error",
        Fields: "deserunt",
        Key: "suscipit",
        OauthToken: "iure",
        PrettyPrint: false,
        QuotaUser: "magnam",
        UploadType: "debitis",
        UploadProtocol: "ipsa",
    }

    ctx := context.Background()
    res, err := s.Projects.NetworksecurityProjectsLocationsAddressGroupsAddItems(ctx, req, operations.NetworksecurityProjectsLocationsAddressGroupsAddItemsSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->