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
            Parent: "hic",
        },
        QueryParams: operations.DatafusionProjectsLocationsInstancesCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "numquam",
            Alt: "proto",
            Callback: "necessitatibus",
            Fields: "culpa",
            InstanceID: "cum",
            Key: "fugiat",
            OauthToken: "ut",
            PrettyPrint: true,
            QuotaUser: "sit",
            UploadType: "sint",
            UploadProtocol: "deleniti",
        },
        Request: &shared.InstanceInput{
            Accelerators: []shared.Accelerator{
                shared.Accelerator{
                    AcceleratorType: "ACCELERATOR_TYPE_UNSPECIFIED",
                },
                shared.Accelerator{
                    AcceleratorType: "ACCELERATOR_TYPE_UNSPECIFIED",
                },
            },
            AvailableVersion: []shared.Version{
                shared.Version{
                    AvailableFeatures: []string{
                        "similique",
                    },
                    DefaultVersion: false,
                    Type: "TYPE_UNSPECIFIED",
                    VersionNumber: "rerum",
                },
                shared.Version{
                    AvailableFeatures: []string{
                        "nobis",
                        "molestias",
                        "omnis",
                    },
                    DefaultVersion: false,
                    Type: "TYPE_PREVIEW",
                    VersionNumber: "nesciunt",
                },
            },
            CryptoKeyConfig: &shared.CryptoKeyConfig{
                KeyReference: "omnis",
            },
            DataprocServiceAccount: "pariatur",
            Description: "odio",
            DisplayName: "occaecati",
            EnableRbac: false,
            EnableStackdriverLogging: true,
            EnableStackdriverMonitoring: false,
            EventPublishConfig: &shared.EventPublishConfig{
                Enabled: false,
                Topic: "quaerat",
            },
            Labels: map[string]string{
                "recusandae": "incidunt",
            },
            NetworkConfig: &shared.NetworkConfig{
                IPAllocation: "eum",
                Network: "esse",
            },
            Options: map[string]string{
                "pariatur": "omnis",
                "perspiciatis": "et",
                "impedit": "rem",
            },
            PrivateInstance: false,
            Type: "ENTERPRISE",
            Version: "ut",
            Zone: "et",
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