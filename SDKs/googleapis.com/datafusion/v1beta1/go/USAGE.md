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
                },
            },
            AvailableVersion: []shared.Version{
                shared.Version{
                    AvailableFeatures: []string{
                        "dolorem",
                        "et",
                        "voluptate",
                    },
                    DefaultVersion: true,
                    Type: "TYPE_UNSPECIFIED",
                    VersionNumber: "totam",
                },
            },
            CryptoKeyConfig: &shared.CryptoKeyConfig{
                KeyReference: "dolores",
            },
            DataprocServiceAccount: "illum",
            Description: "debitis",
            DisplayName: "vel",
            EnableRbac: false,
            EnableStackdriverLogging: true,
            EnableStackdriverMonitoring: false,
            EventPublishConfig: &shared.EventPublishConfig{
                Enabled: true,
                Topic: "accusantium",
            },
            Labels: map[string]string{
                "commodi": "quis",
                "est": "aut",
                "odit": "non",
            },
            NetworkConfig: &shared.NetworkConfig{
                IPAllocation: "voluptas",
                Network: "omnis",
            },
            Options: map[string]string{
                "illo": "sed",
            },
            PrivateInstance: false,
            Type: "DEVELOPER",
            Version: "consectetur",
            Zone: "nobis",
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