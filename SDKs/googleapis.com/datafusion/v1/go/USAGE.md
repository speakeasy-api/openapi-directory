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

    req := operations.DatafusionProjectsLocationsInstancesCreateRequest{
        DollarXgafv: "2",
        InstanceInput: &shared.InstanceInput{
            CryptoKeyConfig: &shared.CryptoKeyConfig{
                KeyReference: "provident",
            },
            DataprocServiceAccount: "distinctio",
            Description: "quibusdam",
            DisplayName: "unde",
            EnableRbac: false,
            EnableStackdriverLogging: false,
            EnableStackdriverMonitoring: false,
            EnableZoneSeparation: false,
            EventPublishConfig: &shared.EventPublishConfig{
                Enabled: false,
                Topic: "nulla",
            },
            Labels: map[string]string{
                "illum": "vel",
                "error": "deserunt",
                "suscipit": "iure",
            },
            NetworkConfig: &shared.NetworkConfig{
                IPAllocation: "magnam",
                Network: "debitis",
            },
            Options: map[string]string{
                "delectus": "tempora",
            },
            PrivateInstance: false,
            Type: "BASIC",
            Version: "molestiae",
            Zone: "minus",
        },
        AccessToken: "placeat",
        Alt: "media",
        Callback: "iusto",
        Fields: "excepturi",
        InstanceID: "nisi",
        Key: "recusandae",
        OauthToken: "temporibus",
        Parent: "ab",
        PrettyPrint: false,
        QuotaUser: "quis",
        UploadType: "veritatis",
        UploadProtocol: "deserunt",
    }

    ctx := context.Background()
    res, err := s.Projects.DatafusionProjectsLocationsInstancesCreate(ctx, req, operations.DatafusionProjectsLocationsInstancesCreateSecurity{
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