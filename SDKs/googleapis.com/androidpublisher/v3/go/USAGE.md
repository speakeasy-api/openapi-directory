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
            PackageName: "quasi",
        },
        QueryParams: operations.AndroidpublisherApplicationsDeviceTierConfigsCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "molestiae",
            AllowUnknownDevices: true,
            Alt: "media",
            Callback: "laborum",
            Fields: "modi",
            Key: "molestiae",
            OauthToken: "dolorem",
            PrettyPrint: true,
            QuotaUser: "ut",
            UploadType: "distinctio",
            UploadProtocol: "reprehenderit",
        },
        Request: &shared.DeviceTierConfigInput{
            DeviceGroups: []shared.DeviceGroup{
                shared.DeviceGroup{
                    DeviceSelectors: []shared.DeviceSelector{
                        shared.DeviceSelector{
                            DeviceRAM: &shared.DeviceRAM{
                                MaxBytes: "culpa",
                                MinBytes: "facilis",
                            },
                            ExcludedDeviceIds: []shared.DeviceID{
                                shared.DeviceID{
                                    BuildBrand: "est",
                                    BuildDevice: "praesentium",
                                },
                                shared.DeviceID{
                                    BuildBrand: "molestias",
                                    BuildDevice: "et",
                                },
                            },
                            ForbiddenSystemFeatures: []shared.SystemFeature{
                                shared.SystemFeature{
                                    Name: "repudiandae",
                                },
                                shared.SystemFeature{
                                    Name: "eius",
                                },
                                shared.SystemFeature{
                                    Name: "aut",
                                },
                            },
                            IncludedDeviceIds: []shared.DeviceID{
                                shared.DeviceID{
                                    BuildBrand: "perferendis",
                                    BuildDevice: "amet",
                                },
                            },
                            RequiredSystemFeatures: []shared.SystemFeature{
                                shared.SystemFeature{
                                    Name: "sit",
                                },
                                shared.SystemFeature{
                                    Name: "nostrum",
                                },
                                shared.SystemFeature{
                                    Name: "sit",
                                },
                            },
                        },
                    },
                    Name: "quae",
                },
                shared.DeviceGroup{
                    DeviceSelectors: []shared.DeviceSelector{
                        shared.DeviceSelector{
                            DeviceRAM: &shared.DeviceRAM{
                                MaxBytes: "nostrum",
                                MinBytes: "aut",
                            },
                            ExcludedDeviceIds: []shared.DeviceID{
                                shared.DeviceID{
                                    BuildBrand: "aut",
                                    BuildDevice: "rerum",
                                },
                            },
                            ForbiddenSystemFeatures: []shared.SystemFeature{
                                shared.SystemFeature{
                                    Name: "aliquam",
                                },
                                shared.SystemFeature{
                                    Name: "soluta",
                                },
                                shared.SystemFeature{
                                    Name: "accusantium",
                                },
                            },
                            IncludedDeviceIds: []shared.DeviceID{
                                shared.DeviceID{
                                    BuildBrand: "est",
                                    BuildDevice: "explicabo",
                                },
                                shared.DeviceID{
                                    BuildBrand: "non",
                                    BuildDevice: "molestias",
                                },
                                shared.DeviceID{
                                    BuildBrand: "mollitia",
                                    BuildDevice: "saepe",
                                },
                            },
                            RequiredSystemFeatures: []shared.SystemFeature{
                                shared.SystemFeature{
                                    Name: "et",
                                },
                            },
                        },
                        shared.DeviceSelector{
                            DeviceRAM: &shared.DeviceRAM{
                                MaxBytes: "omnis",
                                MinBytes: "minus",
                            },
                            ExcludedDeviceIds: []shared.DeviceID{
                                shared.DeviceID{
                                    BuildBrand: "distinctio",
                                    BuildDevice: "laboriosam",
                                },
                                shared.DeviceID{
                                    BuildBrand: "provident",
                                    BuildDevice: "cumque",
                                },
                                shared.DeviceID{
                                    BuildBrand: "quibusdam",
                                    BuildDevice: "distinctio",
                                },
                            },
                            ForbiddenSystemFeatures: []shared.SystemFeature{
                                shared.SystemFeature{
                                    Name: "qui",
                                },
                                shared.SystemFeature{
                                    Name: "dicta",
                                },
                                shared.SystemFeature{
                                    Name: "id",
                                },
                            },
                            IncludedDeviceIds: []shared.DeviceID{
                                shared.DeviceID{
                                    BuildBrand: "quos",
                                    BuildDevice: "iste",
                                },
                            },
                            RequiredSystemFeatures: []shared.SystemFeature{
                                shared.SystemFeature{
                                    Name: "vel",
                                },
                                shared.SystemFeature{
                                    Name: "tempora",
                                },
                            },
                        },
                        shared.DeviceSelector{
                            DeviceRAM: &shared.DeviceRAM{
                                MaxBytes: "iusto",
                                MinBytes: "exercitationem",
                            },
                            ExcludedDeviceIds: []shared.DeviceID{
                                shared.DeviceID{
                                    BuildBrand: "quia",
                                    BuildDevice: "iste",
                                },
                                shared.DeviceID{
                                    BuildBrand: "repellat",
                                    BuildDevice: "accusantium",
                                },
                            },
                            ForbiddenSystemFeatures: []shared.SystemFeature{
                                shared.SystemFeature{
                                    Name: "et",
                                },
                                shared.SystemFeature{
                                    Name: "enim",
                                },
                                shared.SystemFeature{
                                    Name: "quia",
                                },
                            },
                            IncludedDeviceIds: []shared.DeviceID{
                                shared.DeviceID{
                                    BuildBrand: "enim",
                                    BuildDevice: "possimus",
                                },
                                shared.DeviceID{
                                    BuildBrand: "consectetur",
                                    BuildDevice: "quidem",
                                },
                                shared.DeviceID{
                                    BuildBrand: "in",
                                    BuildDevice: "fugiat",
                                },
                            },
                            RequiredSystemFeatures: []shared.SystemFeature{
                                shared.SystemFeature{
                                    Name: "dolores",
                                },
                            },
                        },
                    },
                    Name: "asperiores",
                },
                shared.DeviceGroup{
                    DeviceSelectors: []shared.DeviceSelector{
                        shared.DeviceSelector{
                            DeviceRAM: &shared.DeviceRAM{
                                MaxBytes: "commodi",
                                MinBytes: "facilis",
                            },
                            ExcludedDeviceIds: []shared.DeviceID{
                                shared.DeviceID{
                                    BuildBrand: "fugiat",
                                    BuildDevice: "est",
                                },
                                shared.DeviceID{
                                    BuildBrand: "culpa",
                                    BuildDevice: "modi",
                                },
                                shared.DeviceID{
                                    BuildBrand: "sit",
                                    BuildDevice: "laudantium",
                                },
                            },
                            ForbiddenSystemFeatures: []shared.SystemFeature{
                                shared.SystemFeature{
                                    Name: "porro",
                                },
                                shared.SystemFeature{
                                    Name: "dolor",
                                },
                            },
                            IncludedDeviceIds: []shared.DeviceID{
                                shared.DeviceID{
                                    BuildBrand: "dicta",
                                    BuildDevice: "laudantium",
                                },
                                shared.DeviceID{
                                    BuildBrand: "aliquam",
                                    BuildDevice: "fugit",
                                },
                            },
                            RequiredSystemFeatures: []shared.SystemFeature{
                                shared.SystemFeature{
                                    Name: "esse",
                                },
                                shared.SystemFeature{
                                    Name: "quisquam",
                                },
                                shared.SystemFeature{
                                    Name: "exercitationem",
                                },
                            },
                        },
                    },
                    Name: "labore",
                },
            },
            DeviceTierSet: &shared.DeviceTierSet{
                DeviceTiers: []shared.DeviceTier{
                    shared.DeviceTier{
                        DeviceGroupNames: []string{
                            "tenetur",
                            "rem",
                            "ipsum",
                        },
                        Level: 2235017238539277004,
                    },
                    shared.DeviceTier{
                        DeviceGroupNames: []string{
                            "porro",
                        },
                        Level: 2478786586424327152,
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