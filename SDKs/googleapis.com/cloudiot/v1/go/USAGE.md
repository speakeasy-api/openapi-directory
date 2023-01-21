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
            Parent: "sit",
        },
        QueryParams: operations.CloudiotProjectsLocationsRegistriesBindDeviceToGatewayQueryParams{
            DollarXgafv: "1",
            AccessToken: "culpa",
            Alt: "media",
            Callback: "consequuntur",
            Fields: "dolor",
            Key: "expedita",
            OauthToken: "voluptas",
            PrettyPrint: true,
            QuotaUser: "et",
            UploadType: "nihil",
            UploadProtocol: "rerum",
        },
        Request: &shared.BindDeviceToGatewayRequest{
            DeviceID: "dicta",
            GatewayID: "debitis",
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