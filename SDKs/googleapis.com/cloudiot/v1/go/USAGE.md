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
            Parent: "sed",
        },
        QueryParams: operations.CloudiotProjectsLocationsRegistriesBindDeviceToGatewayQueryParams{
            DollarXgafv: "1",
            AccessToken: "et",
            Alt: "proto",
            Callback: "quasi",
            Fields: "pariatur",
            Key: "eius",
            OauthToken: "soluta",
            PrettyPrint: true,
            QuotaUser: "ex",
            UploadType: "eos",
            UploadProtocol: "ratione",
        },
        Request: &shared.BindDeviceToGatewayRequest{
            DeviceID: "amet",
            GatewayID: "ipsam",
        },
    }
    
    res, err := s.Projects.CloudiotProjectsLocationsRegistriesBindDeviceToGateway(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.BindDeviceToGatewayResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->