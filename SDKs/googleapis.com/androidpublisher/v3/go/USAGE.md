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
            PackageName: "quae",
        },
        QueryParams: operations.AndroidpublisherApplicationsDeviceTierConfigsCreateQueryParams{
            DollarXgafv: "1",
            AccessToken: "mollitia",
            AllowUnknownDevices: true,
            Alt: "json",
            Callback: "id",
            Fields: "eos",
            Key: "quia",
            OauthToken: "neque",
            PrettyPrint: true,
            QuotaUser: "non",
            UploadType: "officiis",
            UploadProtocol: "qui",
        },
        Request: &shared.DeviceTierConfigInput{
            DeviceGroups: []shared.DeviceGroup{
                shared.DeviceGroup{
                    DeviceSelectors: []shared.DeviceSelector{
                        shared.DeviceSelector{
                            DeviceRAM: &shared.DeviceRAM{
                                MaxBytes: "aut",
                                MinBytes: "ut",
                            },
                            ExcludedDeviceIds: []shared.DeviceID{
                                shared.DeviceID{
                                    BuildBrand: "cupiditate",
                                    BuildDevice: "molestias",
                                },
                            },
                            ForbiddenSystemFeatures: []shared.SystemFeature{
                                shared.SystemFeature{
                                    Name: "quo",
                                },
                            },
                            IncludedDeviceIds: []shared.DeviceID{
                                shared.DeviceID{
                                    BuildBrand: "consequatur",
                                    BuildDevice: "autem",
                                },
                            },
                            RequiredSystemFeatures: []shared.SystemFeature{
                                shared.SystemFeature{
                                    Name: "soluta",
                                },
                            },
                        },
                        shared.DeviceSelector{
                            DeviceRAM: &shared.DeviceRAM{
                                MaxBytes: "ut",
                                MinBytes: "ut",
                            },
                            ExcludedDeviceIds: []shared.DeviceID{
                                shared.DeviceID{
                                    BuildBrand: "voluptatibus",
                                    BuildDevice: "adipisci",
                                },
                                shared.DeviceID{
                                    BuildBrand: "maiores",
                                    BuildDevice: "numquam",
                                },
                                shared.DeviceID{
                                    BuildBrand: "omnis",
                                    BuildDevice: "et",
                                },
                            },
                            ForbiddenSystemFeatures: []shared.SystemFeature{
                                shared.SystemFeature{
                                    Name: "excepturi",
                                },
                            },
                            IncludedDeviceIds: []shared.DeviceID{
                                shared.DeviceID{
                                    BuildBrand: "voluptas",
                                    BuildDevice: "illo",
                                },
                                shared.DeviceID{
                                    BuildBrand: "voluptate",
                                    BuildDevice: "odit",
                                },
                            },
                            RequiredSystemFeatures: []shared.SystemFeature{
                                shared.SystemFeature{
                                    Name: "perferendis",
                                },
                                shared.SystemFeature{
                                    Name: "tempora",
                                },
                            },
                        },
                        shared.DeviceSelector{
                            DeviceRAM: &shared.DeviceRAM{
                                MaxBytes: "velit",
                                MinBytes: "qui",
                            },
                            ExcludedDeviceIds: []shared.DeviceID{
                                shared.DeviceID{
                                    BuildBrand: "et",
                                    BuildDevice: "maiores",
                                },
                                shared.DeviceID{
                                    BuildBrand: "sed",
                                    BuildDevice: "recusandae",
                                },
                                shared.DeviceID{
                                    BuildBrand: "omnis",
                                    BuildDevice: "cupiditate",
                                },
                            },
                            ForbiddenSystemFeatures: []shared.SystemFeature{
                                shared.SystemFeature{
                                    Name: "beatae",
                                },
                                shared.SystemFeature{
                                    Name: "ut",
                                },
                                shared.SystemFeature{
                                    Name: "corporis",
                                },
                            },
                            IncludedDeviceIds: []shared.DeviceID{
                                shared.DeviceID{
                                    BuildBrand: "sunt",
                                    BuildDevice: "eveniet",
                                },
                            },
                            RequiredSystemFeatures: []shared.SystemFeature{
                                shared.SystemFeature{
                                    Name: "expedita",
                                },
                            },
                        },
                    },
                    Name: "neque",
                },
                shared.DeviceGroup{
                    DeviceSelectors: []shared.DeviceSelector{
                        shared.DeviceSelector{
                            DeviceRAM: &shared.DeviceRAM{
                                MaxBytes: "ad",
                                MinBytes: "quibusdam",
                            },
                            ExcludedDeviceIds: []shared.DeviceID{
                                shared.DeviceID{
                                    BuildBrand: "ea",
                                    BuildDevice: "ducimus",
                                },
                                shared.DeviceID{
                                    BuildBrand: "quia",
                                    BuildDevice: "et",
                                },
                                shared.DeviceID{
                                    BuildBrand: "sit",
                                    BuildDevice: "voluptatem",
                                },
                            },
                            ForbiddenSystemFeatures: []shared.SystemFeature{
                                shared.SystemFeature{
                                    Name: "quo",
                                },
                                shared.SystemFeature{
                                    Name: "quisquam",
                                },
                                shared.SystemFeature{
                                    Name: "rerum",
                                },
                            },
                            IncludedDeviceIds: []shared.DeviceID{
                                shared.DeviceID{
                                    BuildBrand: "quia",
                                    BuildDevice: "voluptatibus",
                                },
                                shared.DeviceID{
                                    BuildBrand: "sint",
                                    BuildDevice: "ab",
                                },
                                shared.DeviceID{
                                    BuildBrand: "sed",
                                    BuildDevice: "facere",
                                },
                            },
                            RequiredSystemFeatures: []shared.SystemFeature{
                                shared.SystemFeature{
                                    Name: "nulla",
                                },
                            },
                        },
                        shared.DeviceSelector{
                            DeviceRAM: &shared.DeviceRAM{
                                MaxBytes: "optio",
                                MinBytes: "magnam",
                            },
                            ExcludedDeviceIds: []shared.DeviceID{
                                shared.DeviceID{
                                    BuildBrand: "vel",
                                    BuildDevice: "consequatur",
                                },
                                shared.DeviceID{
                                    BuildBrand: "aperiam",
                                    BuildDevice: "rerum",
                                },
                                shared.DeviceID{
                                    BuildBrand: "sed",
                                    BuildDevice: "consectetur",
                                },
                            },
                            ForbiddenSystemFeatures: []shared.SystemFeature{
                                shared.SystemFeature{
                                    Name: "commodi",
                                },
                            },
                            IncludedDeviceIds: []shared.DeviceID{
                                shared.DeviceID{
                                    BuildBrand: "est",
                                    BuildDevice: "possimus",
                                },
                            },
                            RequiredSystemFeatures: []shared.SystemFeature{
                                shared.SystemFeature{
                                    Name: "voluptas",
                                },
                                shared.SystemFeature{
                                    Name: "iusto",
                                },
                            },
                        },
                        shared.DeviceSelector{
                            DeviceRAM: &shared.DeviceRAM{
                                MaxBytes: "ullam",
                                MinBytes: "similique",
                            },
                            ExcludedDeviceIds: []shared.DeviceID{
                                shared.DeviceID{
                                    BuildBrand: "sit",
                                    BuildDevice: "dolorem",
                                },
                                shared.DeviceID{
                                    BuildBrand: "doloremque",
                                    BuildDevice: "aut",
                                },
                            },
                            ForbiddenSystemFeatures: []shared.SystemFeature{
                                shared.SystemFeature{
                                    Name: "a",
                                },
                            },
                            IncludedDeviceIds: []shared.DeviceID{
                                shared.DeviceID{
                                    BuildBrand: "illum",
                                    BuildDevice: "accusantium",
                                },
                            },
                            RequiredSystemFeatures: []shared.SystemFeature{
                                shared.SystemFeature{
                                    Name: "magni",
                                },
                                shared.SystemFeature{
                                    Name: "ut",
                                },
                                shared.SystemFeature{
                                    Name: "ratione",
                                },
                            },
                        },
                    },
                    Name: "velit",
                },
            },
            DeviceTierSet: &shared.DeviceTierSet{
                DeviceTiers: []shared.DeviceTier{
                    shared.DeviceTier{
                        DeviceGroupNames: []string{
                            "repellat",
                            "repudiandae",
                            "animi",
                        },
                        Level: 7602047595205132892,
                    },
                    shared.DeviceTier{
                        DeviceGroupNames: []string{
                            "sequi",
                        },
                        Level: 3974532915400052710,
                    },
                    shared.DeviceTier{
                        DeviceGroupNames: []string{
                            "nam",
                            "quibusdam",
                        },
                        Level: 980220281639114236,
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