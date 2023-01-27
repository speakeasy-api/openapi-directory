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
            Parent: "sit",
        },
        QueryParams: operations.DatafusionProjectsLocationsInstancesCreateQueryParams{
            DollarXgafv: "1",
            AccessToken: "culpa",
            Alt: "media",
            Callback: "consequuntur",
            Fields: "dolor",
            InstanceID: "expedita",
            Key: "voluptas",
            OauthToken: "fugit",
            PrettyPrint: false,
            QuotaUser: "nihil",
            UploadType: "rerum",
            UploadProtocol: "dicta",
        },
        Request: &shared.InstanceInput{
            Accelerators: []shared.Accelerator{
                shared.Accelerator{
                    AcceleratorType: "ACCELERATOR_TYPE_UNSPECIFIED",
                    State: "DISABLED",
                },
            },
            AvailableVersion: []shared.Version{
                shared.Version{
                    AvailableFeatures: []string{
                        "et",
                        "voluptate",
                        "iste",
                    },
                    DefaultVersion: true,
                    Type: "TYPE_GENERAL_AVAILABILITY",
                    VersionNumber: "dolores",
                },
                shared.Version{
                    AvailableFeatures: []string{
                        "debitis",
                        "vel",
                        "odio",
                    },
                    DefaultVersion: true,
                    Type: "TYPE_PREVIEW",
                    VersionNumber: "aspernatur",
                },
                shared.Version{
                    AvailableFeatures: []string{
                        "totam",
                        "commodi",
                        "quis",
                    },
                    DefaultVersion: false,
                    Type: "TYPE_GENERAL_AVAILABILITY",
                    VersionNumber: "odit",
                },
            },
            CryptoKeyConfig: &shared.CryptoKeyConfig{
                KeyReference: "non",
            },
            DataprocServiceAccount: "voluptas",
            Description: "omnis",
            DisplayName: "aut",
            EnableRbac: true,
            EnableStackdriverLogging: false,
            EnableStackdriverMonitoring: false,
            EnableZoneSeparation: true,
            EventPublishConfig: &shared.EventPublishConfig{
                Enabled: true,
                Topic: "nobis",
            },
            Labels: map[string]string{
                "qui": "recusandae",
            },
            NetworkConfig: &shared.NetworkConfig{
                IPAllocation: "at",
                Network: "ipsum",
            },
            Options: map[string]string{
                "modi": "sint",
                "inventore": "ut",
            },
            PrivateInstance: false,
            Type: "TYPE_UNSPECIFIED",
            Version: "reprehenderit",
            Zone: "tempore",
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