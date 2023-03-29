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
        Security: operations.NetworksecurityProjectsLocationsAddressGroupsAddItemsSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.NetworksecurityProjectsLocationsAddressGroupsAddItemsPathParams{
            AddressGroup: "unde",
        },
        QueryParams: operations.NetworksecurityProjectsLocationsAddressGroupsAddItemsQueryParams{
            DollarXgafv: "2",
            AccessToken: "porro",
            Alt: "proto",
            Callback: "id",
            Fields: "vero",
            Key: "perspiciatis",
            OauthToken: "nulla",
            PrettyPrint: false,
            QuotaUser: "nihil",
            UploadType: "fuga",
            UploadProtocol: "facilis",
        },
        Request: &shared.AddAddressGroupItemsRequest{
            Items: []string{
                "iusto",
                "ullam",
            },
            RequestID: "saepe",
        },
    }

    ctx := context.Background()
    res, err := s.Projects.NetworksecurityProjectsLocationsAddressGroupsAddItems(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->