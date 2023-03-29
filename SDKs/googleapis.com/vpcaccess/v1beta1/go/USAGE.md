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
            Parent: "unde",
        },
        QueryParams: operations.VpcaccessProjectsLocationsConnectorsCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "porro",
            Alt: "proto",
            Callback: "id",
            ConnectorID: "vero",
            Fields: "perspiciatis",
            Key: "nulla",
            OauthToken: "nihil",
            PrettyPrint: false,
            QuotaUser: "fuga",
            UploadType: "facilis",
            UploadProtocol: "eum",
        },
        Request: &shared.ConnectorInput{
            IPCidrRange: "iusto",
            MachineType: "ullam",
            MaxInstances: 891773,
            MaxThroughput: 56713,
            MinInstances: 963663,
            MinThroughput: 272656,
            Name: "eum",
            Network: "voluptatum",
            Subnet: &shared.Subnet{
                Name: "autem",
                ProjectID: "vel",
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