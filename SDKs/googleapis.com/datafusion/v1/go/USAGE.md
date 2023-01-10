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
            Parent: "qui",
        },
        QueryParams: operations.DatafusionProjectsLocationsInstancesCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "minima",
            Alt: "media",
            Callback: "cum",
            Fields: "unde",
            InstanceID: "iure",
            Key: "voluptatem",
            OauthToken: "quae",
            PrettyPrint: false,
            QuotaUser: "consectetur",
            UploadType: "delectus",
            UploadProtocol: "doloribus",
        },
        Request: &shared.InstanceInput{
            Accelerators: []shared.Accelerator{
                shared.Accelerator{
                    AcceleratorType: "ACCELERATOR_TYPE_UNSPECIFIED",
                    State: "DISABLED",
                },
                shared.Accelerator{
                    AcceleratorType: "ACCELERATOR_TYPE_UNSPECIFIED",
                    State: "STATE_UNSPECIFIED",
                },
                shared.Accelerator{
                    AcceleratorType: "CDC",
                    State: "DISABLED",
                },
            },
            AvailableVersion: []shared.Version{
                shared.Version{
                    AvailableFeatures: []string{
                        "porro",
                    },
                    DefaultVersion: true,
                    Type: "TYPE_GENERAL_AVAILABILITY",
                    VersionNumber: "aut",
                },
                shared.Version{
                    AvailableFeatures: []string{
                        "distinctio",
                        "sint",
                    },
                    DefaultVersion: true,
                    Type: "TYPE_GENERAL_AVAILABILITY",
                    VersionNumber: "atque",
                },
                shared.Version{
                    AvailableFeatures: []string{
                        "rerum",
                        "voluptatibus",
                    },
                    DefaultVersion: true,
                    Type: "TYPE_UNSPECIFIED",
                    VersionNumber: "eum",
                },
            },
            CryptoKeyConfig: &shared.CryptoKeyConfig{
                KeyReference: "sit",
            },
            DataprocServiceAccount: "aut",
            Description: "nisi",
            DisplayName: "velit",
            EnableRbac: false,
            EnableStackdriverLogging: false,
            EnableStackdriverMonitoring: true,
            EventPublishConfig: &shared.EventPublishConfig{
                Enabled: false,
                Topic: "repellat",
            },
            Labels: map[string]string{
                "consequatur": "eveniet",
                "sint": "iusto",
            },
            NetworkConfig: &shared.NetworkConfig{
                IPAllocation: "deleniti",
                Network: "aperiam",
            },
            Options: map[string]string{
                "eius": "debitis",
                "sit": "impedit",
            },
            PrivateInstance: false,
            Type: "TYPE_UNSPECIFIED",
            Version: "magni",
            Zone: "quibusdam",
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