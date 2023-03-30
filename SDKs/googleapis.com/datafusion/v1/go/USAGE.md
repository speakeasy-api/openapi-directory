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
        Security: operations.DatafusionProjectsLocationsInstancesCreateSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.DatafusionProjectsLocationsInstancesCreatePathParams{
            Parent: "corrupti",
        },
        QueryParams: operations.DatafusionProjectsLocationsInstancesCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "distinctio",
            Alt: "proto",
            Callback: "unde",
            Fields: "nulla",
            InstanceID: "corrupti",
            Key: "illum",
            OauthToken: "vel",
            PrettyPrint: false,
            QuotaUser: "error",
            UploadType: "deserunt",
            UploadProtocol: "suscipit",
        },
        Request: &shared.InstanceInput{
            CryptoKeyConfig: &shared.CryptoKeyConfig{
                KeyReference: "iure",
            },
            DataprocServiceAccount: "magnam",
            Description: "debitis",
            DisplayName: "ipsa",
            EnableRbac: false,
            EnableStackdriverLogging: false,
            EnableStackdriverMonitoring: false,
            EnableZoneSeparation: false,
            EventPublishConfig: &shared.EventPublishConfig{
                Enabled: false,
                Topic: "delectus",
            },
            Labels: map[string]string{
                "suscipit": "molestiae",
                "minus": "placeat",
            },
            NetworkConfig: &shared.NetworkConfig{
                IPAllocation: "voluptatum",
                Network: "iusto",
            },
            Options: map[string]string{
                "nisi": "recusandae",
                "temporibus": "ab",
                "quis": "veritatis",
            },
            PrivateInstance: false,
            Type: "ENTERPRISE",
            Version: "perferendis",
            Zone: "ipsam",
        },
    }

    ctx := context.Background()
    res, err := s.Projects.DatafusionProjectsLocationsInstancesCreate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->