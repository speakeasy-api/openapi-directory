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
        DollarXgafv: "2",
        ConnectorInput: &shared.ConnectorInput{
            IPCidrRange: "provident",
            MachineType: "distinctio",
            MaxInstances: 844266,
            MaxThroughput: 602763,
            MinInstances: 857946,
            MinThroughput: 544883,
            Name: "illum",
            Network: "vel",
            Subnet: &shared.Subnet{
                Name: "error",
                ProjectID: "deserunt",
            },
        },
        AccessToken: "suscipit",
        Alt: "media",
        Callback: "magnam",
        ConnectorID: "debitis",
        Fields: "ipsa",
        Key: "delectus",
        OauthToken: "tempora",
        Parent: "suscipit",
        PrettyPrint: false,
        QuotaUser: "molestiae",
        UploadType: "minus",
        UploadProtocol: "placeat",
    }

    ctx := context.Background()
    res, err := s.Projects.VpcaccessProjectsLocationsConnectorsCreate(ctx, req, operations.VpcaccessProjectsLocationsConnectorsCreateSecurity{
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