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

    req := operations.AndroidpublisherApplicationsDeviceTierConfigsCreateRequest{
        DollarXgafv: "2",
        DeviceTierConfigInput: &shared.DeviceTierConfigInput{
            DeviceGroups: []shared.DeviceGroup{
                shared.DeviceGroup{
                    DeviceSelectors: []shared.DeviceSelector{
                        shared.DeviceSelector{
                            DeviceRAM: &shared.DeviceRAM{
                                MaxBytes: "quibusdam",
                                MinBytes: "unde",
                            },
                            ExcludedDeviceIds: []shared.DeviceID{
                                shared.DeviceID{
                                    BuildBrand: "corrupti",
                                    BuildDevice: "illum",
                                },
                                shared.DeviceID{
                                    BuildBrand: "vel",
                                    BuildDevice: "error",
                                },
                                shared.DeviceID{
                                    BuildBrand: "deserunt",
                                    BuildDevice: "suscipit",
                                },
                                shared.DeviceID{
                                    BuildBrand: "iure",
                                    BuildDevice: "magnam",
                                },
                            },
                            ForbiddenSystemFeatures: []shared.SystemFeature{
                                shared.SystemFeature{
                                    Name: "ipsa",
                                },
                                shared.SystemFeature{
                                    Name: "delectus",
                                },
                                shared.SystemFeature{
                                    Name: "tempora",
                                },
                                shared.SystemFeature{
                                    Name: "suscipit",
                                },
                            },
                            IncludedDeviceIds: []shared.DeviceID{
                                shared.DeviceID{
                                    BuildBrand: "minus",
                                    BuildDevice: "placeat",
                                },
                                shared.DeviceID{
                                    BuildBrand: "voluptatum",
                                    BuildDevice: "iusto",
                                },
                            },
                            RequiredSystemFeatures: []shared.SystemFeature{
                                shared.SystemFeature{
                                    Name: "nisi",
                                },
                                shared.SystemFeature{
                                    Name: "recusandae",
                                },
                                shared.SystemFeature{
                                    Name: "temporibus",
                                },
                            },
                        },
                        shared.DeviceSelector{
                            DeviceRAM: &shared.DeviceRAM{
                                MaxBytes: "ab",
                                MinBytes: "quis",
                            },
                            ExcludedDeviceIds: []shared.DeviceID{
                                shared.DeviceID{
                                    BuildBrand: "deserunt",
                                    BuildDevice: "perferendis",
                                },
                            },
                            ForbiddenSystemFeatures: []shared.SystemFeature{
                                shared.SystemFeature{
                                    Name: "repellendus",
                                },
                                shared.SystemFeature{
                                    Name: "sapiente",
                                },
                            },
                            IncludedDeviceIds: []shared.DeviceID{
                                shared.DeviceID{
                                    BuildBrand: "odit",
                                    BuildDevice: "at",
                                },
                                shared.DeviceID{
                                    BuildBrand: "at",
                                    BuildDevice: "maiores",
                                },
                                shared.DeviceID{
                                    BuildBrand: "molestiae",
                                    BuildDevice: "quod",
                                },
                                shared.DeviceID{
                                    BuildBrand: "quod",
                                    BuildDevice: "esse",
                                },
                            },
                            RequiredSystemFeatures: []shared.SystemFeature{
                                shared.SystemFeature{
                                    Name: "porro",
                                },
                                shared.SystemFeature{
                                    Name: "dolorum",
                                },
                                shared.SystemFeature{
                                    Name: "dicta",
                                },
                            },
                        },
                        shared.DeviceSelector{
                            DeviceRAM: &shared.DeviceRAM{
                                MaxBytes: "nam",
                                MinBytes: "officia",
                            },
                            ExcludedDeviceIds: []shared.DeviceID{
                                shared.DeviceID{
                                    BuildBrand: "fugit",
                                    BuildDevice: "deleniti",
                                },
                                shared.DeviceID{
                                    BuildBrand: "hic",
                                    BuildDevice: "optio",
                                },
                                shared.DeviceID{
                                    BuildBrand: "totam",
                                    BuildDevice: "beatae",
                                },
                            },
                            ForbiddenSystemFeatures: []shared.SystemFeature{
                                shared.SystemFeature{
                                    Name: "molestiae",
                                },
                                shared.SystemFeature{
                                    Name: "modi",
                                },
                            },
                            IncludedDeviceIds: []shared.DeviceID{
                                shared.DeviceID{
                                    BuildBrand: "impedit",
                                    BuildDevice: "cum",
                                },
                            },
                            RequiredSystemFeatures: []shared.SystemFeature{
                                shared.SystemFeature{
                                    Name: "ipsum",
                                },
                                shared.SystemFeature{
                                    Name: "excepturi",
                                },
                            },
                        },
                    },
                    Name: "aspernatur",
                },
                shared.DeviceGroup{
                    DeviceSelectors: []shared.DeviceSelector{
                        shared.DeviceSelector{
                            DeviceRAM: &shared.DeviceRAM{
                                MaxBytes: "ad",
                                MinBytes: "natus",
                            },
                            ExcludedDeviceIds: []shared.DeviceID{
                                shared.DeviceID{
                                    BuildBrand: "iste",
                                    BuildDevice: "dolor",
                                },
                            },
                            ForbiddenSystemFeatures: []shared.SystemFeature{
                                shared.SystemFeature{
                                    Name: "laboriosam",
                                },
                                shared.SystemFeature{
                                    Name: "hic",
                                },
                                shared.SystemFeature{
                                    Name: "saepe",
                                },
                            },
                            IncludedDeviceIds: []shared.DeviceID{
                                shared.DeviceID{
                                    BuildBrand: "in",
                                    BuildDevice: "corporis",
                                },
                                shared.DeviceID{
                                    BuildBrand: "iste",
                                    BuildDevice: "iure",
                                },
                                shared.DeviceID{
                                    BuildBrand: "saepe",
                                    BuildDevice: "quidem",
                                },
                            },
                            RequiredSystemFeatures: []shared.SystemFeature{
                                shared.SystemFeature{
                                    Name: "ipsa",
                                },
                            },
                        },
                    },
                    Name: "reiciendis",
                },
                shared.DeviceGroup{
                    DeviceSelectors: []shared.DeviceSelector{
                        shared.DeviceSelector{
                            DeviceRAM: &shared.DeviceRAM{
                                MaxBytes: "mollitia",
                                MinBytes: "laborum",
                            },
                            ExcludedDeviceIds: []shared.DeviceID{
                                shared.DeviceID{
                                    BuildBrand: "dolorem",
                                    BuildDevice: "corporis",
                                },
                            },
                            ForbiddenSystemFeatures: []shared.SystemFeature{
                                shared.SystemFeature{
                                    Name: "nobis",
                                },
                            },
                            IncludedDeviceIds: []shared.DeviceID{
                                shared.DeviceID{
                                    BuildBrand: "omnis",
                                    BuildDevice: "nemo",
                                },
                                shared.DeviceID{
                                    BuildBrand: "minima",
                                    BuildDevice: "excepturi",
                                },
                            },
                            RequiredSystemFeatures: []shared.SystemFeature{
                                shared.SystemFeature{
                                    Name: "iure",
                                },
                            },
                        },
                        shared.DeviceSelector{
                            DeviceRAM: &shared.DeviceRAM{
                                MaxBytes: "culpa",
                                MinBytes: "doloribus",
                            },
                            ExcludedDeviceIds: []shared.DeviceID{
                                shared.DeviceID{
                                    BuildBrand: "architecto",
                                    BuildDevice: "mollitia",
                                },
                                shared.DeviceID{
                                    BuildBrand: "dolorem",
                                    BuildDevice: "culpa",
                                },
                                shared.DeviceID{
                                    BuildBrand: "consequuntur",
                                    BuildDevice: "repellat",
                                },
                                shared.DeviceID{
                                    BuildBrand: "mollitia",
                                    BuildDevice: "occaecati",
                                },
                            },
                            ForbiddenSystemFeatures: []shared.SystemFeature{
                                shared.SystemFeature{
                                    Name: "commodi",
                                },
                                shared.SystemFeature{
                                    Name: "quam",
                                },
                            },
                            IncludedDeviceIds: []shared.DeviceID{
                                shared.DeviceID{
                                    BuildBrand: "velit",
                                    BuildDevice: "error",
                                },
                                shared.DeviceID{
                                    BuildBrand: "quia",
                                    BuildDevice: "quis",
                                },
                            },
                            RequiredSystemFeatures: []shared.SystemFeature{
                                shared.SystemFeature{
                                    Name: "laborum",
                                },
                            },
                        },
                        shared.DeviceSelector{
                            DeviceRAM: &shared.DeviceRAM{
                                MaxBytes: "animi",
                                MinBytes: "enim",
                            },
                            ExcludedDeviceIds: []shared.DeviceID{
                                shared.DeviceID{
                                    BuildBrand: "quo",
                                    BuildDevice: "sequi",
                                },
                            },
                            ForbiddenSystemFeatures: []shared.SystemFeature{
                                shared.SystemFeature{
                                    Name: "ipsam",
                                },
                                shared.SystemFeature{
                                    Name: "id",
                                },
                                shared.SystemFeature{
                                    Name: "possimus",
                                },
                                shared.SystemFeature{
                                    Name: "aut",
                                },
                            },
                            IncludedDeviceIds: []shared.DeviceID{
                                shared.DeviceID{
                                    BuildBrand: "error",
                                    BuildDevice: "temporibus",
                                },
                            },
                            RequiredSystemFeatures: []shared.SystemFeature{
                                shared.SystemFeature{
                                    Name: "quasi",
                                },
                                shared.SystemFeature{
                                    Name: "reiciendis",
                                },
                                shared.SystemFeature{
                                    Name: "voluptatibus",
                                },
                            },
                        },
                    },
                    Name: "vero",
                },
            },
            DeviceTierSet: &shared.DeviceTierSet{
                DeviceTiers: []shared.DeviceTier{
                    shared.DeviceTier{
                        DeviceGroupNames: []string{
                            "voluptatibus",
                            "ipsa",
                            "omnis",
                        },
                        Level: 451159,
                    },
                    shared.DeviceTier{
                        DeviceGroupNames: []string{
                            "perferendis",
                            "doloremque",
                            "reprehenderit",
                        },
                        Level: 282807,
                    },
                },
            },
            UserCountrySets: []shared.UserCountrySet{
                shared.UserCountrySet{
                    CountryCodes: []string{
                        "corporis",
                    },
                    Name: "dolore",
                },
                shared.UserCountrySet{
                    CountryCodes: []string{
                        "dicta",
                        "harum",
                    },
                    Name: "enim",
                },
                shared.UserCountrySet{
                    CountryCodes: []string{
                        "commodi",
                        "repudiandae",
                        "quae",
                        "ipsum",
                    },
                    Name: "quidem",
                },
                shared.UserCountrySet{
                    CountryCodes: []string{
                        "excepturi",
                        "pariatur",
                        "modi",
                    },
                    Name: "praesentium",
                },
            },
        },
        AccessToken: "rem",
        AllowUnknownDevices: false,
        Alt: "proto",
        Callback: "quasi",
        Fields: "repudiandae",
        Key: "sint",
        OauthToken: "veritatis",
        PackageName: "itaque",
        PrettyPrint: false,
        QuotaUser: "incidunt",
        UploadType: "enim",
        UploadProtocol: "consequatur",
    }

    ctx := context.Background()
    res, err := s.Applications.AndroidpublisherApplicationsDeviceTierConfigsCreate(ctx, req, operations.AndroidpublisherApplicationsDeviceTierConfigsCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeviceTierConfig != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->