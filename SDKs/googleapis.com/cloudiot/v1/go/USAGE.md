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
            Parent: "accusamus",
        },
        QueryParams: operations.CloudiotProjectsLocationsRegistriesBindDeviceToGatewayQueryParams{
            DollarXgafv: "1",
            AccessToken: "ea",
            Alt: "media",
            Callback: "et",
            Fields: "ullam",
            Key: "molestiae",
            OauthToken: "atque",
            PrettyPrint: false,
            QuotaUser: "dolorem",
            UploadType: "qui",
            UploadProtocol: "qui",
        },
        Request: &shared.BindDeviceToGatewayRequest{
            DeviceID: "nulla",
            GatewayID: "modi",
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