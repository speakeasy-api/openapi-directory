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

    req := operations.VpcaccessProjectsLocationsConnectorsCreateRequest{
        Security: operations.VpcaccessProjectsLocationsConnectorsCreateSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.VpcaccessProjectsLocationsConnectorsCreatePathParams{
            Parent: "corrupti",
        },
        QueryParams: operations.VpcaccessProjectsLocationsConnectorsCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "distinctio",
            Alt: "proto",
            Callback: "unde",
            ConnectorID: "nulla",
            Fields: "corrupti",
            Key: "illum",
            OauthToken: "vel",
            PrettyPrint: false,
            QuotaUser: "error",
            UploadType: "deserunt",
            UploadProtocol: "suscipit",
        },
        Request: &shared.ConnectorInput{
            IPCidrRange: "iure",
            MachineType: "magnam",
            MaxInstances: 891773,
            MaxThroughput: 56713,
            MinInstances: 963663,
            MinThroughput: 272656,
            Name: "suscipit",
            Network: "molestiae",
            Subnet: &shared.Subnet{
                Name: "minus",
                ProjectID: "placeat",
            },
        },
    }

    ctx := context.Background()
    res, err := s.Projects.VpcaccessProjectsLocationsConnectorsCreate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->