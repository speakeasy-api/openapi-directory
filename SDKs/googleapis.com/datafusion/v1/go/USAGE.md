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
            Parent: "unde",
        },
        QueryParams: operations.DatafusionProjectsLocationsInstancesCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "porro",
            Alt: "proto",
            Callback: "id",
            Fields: "vero",
            InstanceID: "perspiciatis",
            Key: "nulla",
            OauthToken: "nihil",
            PrettyPrint: false,
            QuotaUser: "fuga",
            UploadType: "facilis",
            UploadProtocol: "eum",
        },
        Request: &shared.InstanceInput{
            Accelerators: []shared.Accelerator{
                shared.Accelerator{
                    AcceleratorType: "CDC",
                    State: "UNKNOWN",
                },
                shared.Accelerator{
                    AcceleratorType: "ACCELERATOR_TYPE_UNSPECIFIED",
                    State: "UNKNOWN",
                },
            },
            AvailableVersion: []shared.Version{
                shared.Version{
                    AvailableFeatures: []string{
                        "voluptatum",
                        "autem",
                    },
                    DefaultVersion: false,
                    Type: "TYPE_GENERAL_AVAILABILITY",
                    VersionNumber: "non",
                },
                shared.Version{
                    AvailableFeatures: []string{
                        "similique",
                        "reprehenderit",
                    },
                    DefaultVersion: false,
                    Type: "TYPE_GENERAL_AVAILABILITY",
                    VersionNumber: "quo",
                },
            },
            CryptoKeyConfig: &shared.CryptoKeyConfig{
                KeyReference: "quasi",
            },
            DataprocServiceAccount: "laboriosam",
            Description: "dicta",
            DisplayName: "est",
            EnableRbac: false,
            EnableStackdriverLogging: false,
            EnableStackdriverMonitoring: false,
            EnableZoneSeparation: false,
            EventPublishConfig: &shared.EventPublishConfig{
                Enabled: false,
                Topic: "voluptatem",
            },
            Labels: map[string]string{
                "fugiat": "a",
                "omnis": "eos",
            },
            NetworkConfig: &shared.NetworkConfig{
                IPAllocation: "accusamus",
                Network: "accusamus",
            },
            Options: map[string]string{
                "rem": "quibusdam",
                "et": "praesentium",
                "occaecati": "dolor",
                "soluta": "sed",
            },
            PrivateInstance: false,
            Type: "ENTERPRISE",
            Version: "rerum",
            Zone: "culpa",
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