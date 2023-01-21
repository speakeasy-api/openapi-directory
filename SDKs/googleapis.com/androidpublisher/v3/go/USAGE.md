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
    
    req := operations.AndroidpublisherApplicationsDeviceTierConfigsCreateRequest{
        Security: operations.AndroidpublisherApplicationsDeviceTierConfigsCreateSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.AndroidpublisherApplicationsDeviceTierConfigsCreatePathParams{
            PackageName: "sit",
        },
        QueryParams: operations.AndroidpublisherApplicationsDeviceTierConfigsCreateQueryParams{
            DollarXgafv: "1",
            AccessToken: "culpa",
            AllowUnknownDevices: false,
            Alt: "proto",
            Callback: "dolor",
            Fields: "expedita",
            Key: "voluptas",
            OauthToken: "fugit",
            PrettyPrint: false,
            QuotaUser: "nihil",
            UploadType: "rerum",
            UploadProtocol: "dicta",
        },
        Request: &shared.DeviceTierConfigInput{
            DeviceGroups: []shared.DeviceGroup{
                shared.DeviceGroup{
                    DeviceSelectors: []shared.DeviceSelector{
                        shared.DeviceSelector{
                            DeviceRAM: &shared.DeviceRAM{
                                MaxBytes: "et",
                                MinBytes: "ut",
                            },
                            ExcludedDeviceIds: []shared.DeviceID{
                                shared.DeviceID{
                                    BuildBrand: "et",
                                    BuildDevice: "voluptate",
                                },
                                shared.DeviceID{
                                    BuildBrand: "iste",
                                    BuildDevice: "vitae",
                                },
                                shared.DeviceID{
                                    BuildBrand: "totam",
                                    BuildDevice: "dolores",
                                },
                            },
                            ForbiddenSystemFeatures: []shared.SystemFeature{
                                shared.SystemFeature{
                                    Name: "debitis",
                                },
                                shared.SystemFeature{
                                    Name: "vel",
                                },
                                shared.SystemFeature{
                                    Name: "odio",
                                },
                            },
                            IncludedDeviceIds: []shared.DeviceID{
                                shared.DeviceID{
                                    BuildBrand: "id",
                                    BuildDevice: "aspernatur",
                                },
                                shared.DeviceID{
                                    BuildBrand: "accusantium",
                                    BuildDevice: "totam",
                                },
                            },
                            RequiredSystemFeatures: []shared.SystemFeature{
                                shared.SystemFeature{
                                    Name: "quis",
                                },
                                shared.SystemFeature{
                                    Name: "est",
                                },
                            },
                        },
                    },
                    Name: "aut",
                },
            },
            DeviceTierSet: &shared.DeviceTierSet{
                DeviceTiers: []shared.DeviceTier{
                    shared.DeviceTier{
                        DeviceGroupNames: []string{
                            "voluptas",
                            "omnis",
                            "aut",
                        },
                        Level: 6972732843819909978,
                    },
                    shared.DeviceTier{
                        DeviceGroupNames: []string{
                            "officiis",
                            "autem",
                            "consectetur",
                        },
                        Level: 8683452355129068124,
                    },
                },
            },
        },
    }
    
    res, err := s.Applications.AndroidpublisherApplicationsDeviceTierConfigsCreate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.DeviceTierConfig != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->