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
            Parent: "voluptate",
        },
        QueryParams: operations.DatafusionProjectsLocationsInstancesCreateQueryParams{
            DollarXgafv: "1",
            AccessToken: "earum",
            Alt: "media",
            Callback: "velit",
            Fields: "assumenda",
            InstanceID: "nemo",
            Key: "ipsam",
            OauthToken: "sed",
            PrettyPrint: false,
            QuotaUser: "pariatur",
            UploadType: "qui",
            UploadProtocol: "excepturi",
        },
        Request: &shared.InstanceInput{
            Accelerators: []shared.Accelerator{
                shared.Accelerator{
                    AcceleratorType: "ACCELERATOR_TYPE_UNSPECIFIED",
                },
            },
            AvailableVersion: []shared.Version{
                shared.Version{
                    AvailableFeatures: []string{
                        "quasi",
                        "minus",
                        "optio",
                    },
                    DefaultVersion: false,
                    Type: "TYPE_UNSPECIFIED",
                    VersionNumber: "et",
                },
            },
            CryptoKeyConfig: &shared.CryptoKeyConfig{
                KeyReference: "recusandae",
            },
            DataprocServiceAccount: "pariatur",
            Description: "pariatur",
            DisplayName: "earum",
            EnableRbac: true,
            EnableStackdriverLogging: true,
            EnableStackdriverMonitoring: false,
            EventPublishConfig: &shared.EventPublishConfig{
                Enabled: true,
                Topic: "architecto",
            },
            Labels: map[string]string{
                "similique": "et",
                "itaque": "voluptates",
            },
            NetworkConfig: &shared.NetworkConfig{
                IPAllocation: "minima",
                Network: "placeat",
            },
            Options: map[string]string{
                "illo": "odio",
                "officia": "tenetur",
            },
            PrivateInstance: false,
            Type: "BASIC",
            Version: "nostrum",
            Zone: "est",
        },
    }
    
    res, err := s.Projects.DatafusionProjectsLocationsInstancesCreate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->