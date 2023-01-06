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
            Parent: "ducimus",
        },
        QueryParams: operations.DatafusionProjectsLocationsInstancesCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "expedita",
            Alt: "media",
            Callback: "enim",
            Fields: "explicabo",
            InstanceID: "cupiditate",
            Key: "deleniti",
            OauthToken: "consequatur",
            PrettyPrint: false,
            QuotaUser: "animi",
            UploadType: "ducimus",
            UploadProtocol: "sapiente",
        },
        Request: &shared.InstanceInput{
            Accelerators: []shared.Accelerator{
                shared.Accelerator{
                    AcceleratorType: "HEALTHCARE",
                    State: "UNKNOWN",
                },
            },
            AvailableVersion: []shared.Version{
                shared.Version{
                    AvailableFeatures: []string{
                        "ipsam",
                    },
                    DefaultVersion: false,
                    Type: "TYPE_GENERAL_AVAILABILITY",
                    VersionNumber: "velit",
                },
                shared.Version{
                    AvailableFeatures: []string{
                        "ullam",
                    },
                    DefaultVersion: true,
                    Type: "TYPE_PREVIEW",
                    VersionNumber: "est",
                },
                shared.Version{
                    AvailableFeatures: []string{
                        "asperiores",
                    },
                    DefaultVersion: false,
                    Type: "TYPE_PREVIEW",
                    VersionNumber: "et",
                },
            },
            CryptoKeyConfig: &shared.CryptoKeyConfig{
                KeyReference: "perspiciatis",
            },
            DataprocServiceAccount: "voluptate",
            Description: "non",
            DisplayName: "voluptas",
            EnableRbac: false,
            EnableStackdriverLogging: false,
            EnableStackdriverMonitoring: false,
            EventPublishConfig: &shared.EventPublishConfig{
                Enabled: false,
                Topic: "doloribus",
            },
            Labels: map[string]string{
                "qui": "soluta",
            },
            NetworkConfig: &shared.NetworkConfig{
                IPAllocation: "similique",
                Network: "omnis",
            },
            Options: map[string]string{
                "quisquam": "enim",
                "incidunt": "consequatur",
            },
            PrivateInstance: true,
            Type: "ENTERPRISE",
            Version: "suscipit",
            Zone: "rerum",
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