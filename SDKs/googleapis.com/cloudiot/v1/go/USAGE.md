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

    req := operations.CloudiotProjectsLocationsRegistriesBindDeviceToGatewayRequest{
        Security: operations.CloudiotProjectsLocationsRegistriesBindDeviceToGatewaySecurity{
            Option1: &operations.CloudiotProjectsLocationsRegistriesBindDeviceToGatewaySecurityOption1{
                Oauth2: shared.SchemeOauth2{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                },
                Oauth2c: shared.SchemeOauth2c{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                },
            },
        },
        PathParams: operations.CloudiotProjectsLocationsRegistriesBindDeviceToGatewayPathParams{
            Parent: "corrupti",
        },
        QueryParams: operations.CloudiotProjectsLocationsRegistriesBindDeviceToGatewayQueryParams{
            DollarXgafv: "2",
            AccessToken: "distinctio",
            Alt: "proto",
            Callback: "unde",
            Fields: "nulla",
            Key: "corrupti",
            OauthToken: "illum",
            PrettyPrint: false,
            QuotaUser: "vel",
            UploadType: "error",
            UploadProtocol: "deserunt",
        },
        Request: &shared.BindDeviceToGatewayRequest{
            DeviceID: "suscipit",
            GatewayID: "iure",
        },
    }

    ctx := context.Background()
    res, err := s.Projects.CloudiotProjectsLocationsRegistriesBindDeviceToGateway(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.BindDeviceToGatewayResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->