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
        Security: operations.AndroidpublisherApplicationsDeviceTierConfigsCreateSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.AndroidpublisherApplicationsDeviceTierConfigsCreatePathParams{
            PackageName: "corrupti",
        },
        QueryParams: operations.AndroidpublisherApplicationsDeviceTierConfigsCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "distinctio",
            AllowUnknownDevices: false,
            Alt: "proto",
            Callback: "unde",
            Fields: "nulla",
            Key: "corrupti",
            OauthToken: "illum",
            PrettyPrint: false,
            QuotaUser: "vel",
            UploadType: "error",
            UploadProtocol: "deserunt",
        },
        Request: &shared.DeviceTierConfigInput{
            DeviceGroups: []shared.DeviceGroup{
                shared.DeviceGroup{
                    DeviceSelectors: []shared.DeviceSelector{
                        shared.DeviceSelector{
                            DeviceRAM: &shared.DeviceRAM{
                                MaxBytes: "magnam",
                                MinBytes: "debitis",
                            },
                            ExcludedDeviceIds: []shared.DeviceID{
                                shared.DeviceID{
                                    BuildBrand: "delectus",
                                    BuildDevice: "tempora",
                                },
                            },
                            ForbiddenSystemFeatures: []shared.SystemFeature{
                                shared.SystemFeature{
                                    Name: "molestiae",
                                },
                                shared.SystemFeature{
                                    Name: "minus",
                                },
                            },
                            IncludedDeviceIds: []shared.DeviceID{
                                shared.DeviceID{
                                    BuildBrand: "voluptatum",
                                    BuildDevice: "iusto",
                                },
                                shared.DeviceID{
                                    BuildBrand: "excepturi",
                                    BuildDevice: "nisi",
                                },
                                shared.DeviceID{
                                    BuildBrand: "recusandae",
                                    BuildDevice: "temporibus",
                                },
                                shared.DeviceID{
                                    BuildBrand: "ab",
                                    BuildDevice: "quis",
                                },
                            },
                            RequiredSystemFeatures: []shared.SystemFeature{
                                shared.SystemFeature{
                                    Name: "deserunt",
                                },
                            },
                        },
                        shared.DeviceSelector{
                            DeviceRAM: &shared.DeviceRAM{
                                MaxBytes: "perferendis",
                                MinBytes: "ipsam",
                            },
                            ExcludedDeviceIds: []shared.DeviceID{
                                shared.DeviceID{
                                    BuildBrand: "sapiente",
                                    BuildDevice: "quo",
                                },
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
                            },
                            ForbiddenSystemFeatures: []shared.SystemFeature{
                                shared.SystemFeature{
                                    Name: "esse",
                                },
                                shared.SystemFeature{
                                    Name: "totam",
                                },
                                shared.SystemFeature{
                                    Name: "porro",
                                },
                                shared.SystemFeature{
                                    Name: "dolorum",
                                },
                            },
                            IncludedDeviceIds: []shared.DeviceID{
                                shared.DeviceID{
                                    BuildBrand: "nam",
                                    BuildDevice: "officia",
                                },
                            },
                            RequiredSystemFeatures: []shared.SystemFeature{
                                shared.SystemFeature{
                                    Name: "fugit",
                                },
                                shared.SystemFeature{
                                    Name: "deleniti",
                                },
                                shared.SystemFeature{
                                    Name: "hic",
                                },
                            },
                        },
                    },
                    Name: "optio",
                },
                shared.DeviceGroup{
                    DeviceSelectors: []shared.DeviceSelector{
                        shared.DeviceSelector{
                            DeviceRAM: &shared.DeviceRAM{
                                MaxBytes: "beatae",
                                MinBytes: "commodi",
                            },
                            ExcludedDeviceIds: []shared.DeviceID{
                                shared.DeviceID{
                                    BuildBrand: "modi",
                                    BuildDevice: "qui",
                                },
                                shared.DeviceID{
                                    BuildBrand: "impedit",
                                    BuildDevice: "cum",
                                },
                            },
                            ForbiddenSystemFeatures: []shared.SystemFeature{
                                shared.SystemFeature{
                                    Name: "ipsum",
                                },
                                shared.SystemFeature{
                                    Name: "excepturi",
                                },
                            },
                            IncludedDeviceIds: []shared.DeviceID{
                                shared.DeviceID{
                                    BuildBrand: "perferendis",
                                    BuildDevice: "ad",
                                },
                            },
                            RequiredSystemFeatures: []shared.SystemFeature{
                                shared.SystemFeature{
                                    Name: "sed",
                                },
                                shared.SystemFeature{
                                    Name: "iste",
                                },
                                shared.SystemFeature{
                                    Name: "dolor",
                                },
                            },
                        },
                        shared.DeviceSelector{
                            DeviceRAM: &shared.DeviceRAM{
                                MaxBytes: "natus",
                                MinBytes: "laboriosam",
                            },
                            ExcludedDeviceIds: []shared.DeviceID{
                                shared.DeviceID{
                                    BuildBrand: "saepe",
                                    BuildDevice: "fuga",
                                },
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
                            ForbiddenSystemFeatures: []shared.SystemFeature{
                                shared.SystemFeature{
                                    Name: "ipsa",
                                },
                            },
                            IncludedDeviceIds: []shared.DeviceID{
                                shared.DeviceID{
                                    BuildBrand: "est",
                                    BuildDevice: "mollitia",
                                },
                                shared.DeviceID{
                                    BuildBrand: "laborum",
                                    BuildDevice: "dolores",
                                },
                                shared.DeviceID{
                                    BuildBrand: "dolorem",
                                    BuildDevice: "corporis",
                                },
                                shared.DeviceID{
                                    BuildBrand: "explicabo",
                                    BuildDevice: "nobis",
                                },
                            },
                            RequiredSystemFeatures: []shared.SystemFeature{
                                shared.SystemFeature{
                                    Name: "omnis",
                                },
                                shared.SystemFeature{
                                    Name: "nemo",
                                },
                            },
                        },
                        shared.DeviceSelector{
                            DeviceRAM: &shared.DeviceRAM{
                                MaxBytes: "minima",
                                MinBytes: "excepturi",
                            },
                            ExcludedDeviceIds: []shared.DeviceID{
                                shared.DeviceID{
                                    BuildBrand: "iure",
                                    BuildDevice: "culpa",
                                },
                            },
                            ForbiddenSystemFeatures: []shared.SystemFeature{
                                shared.SystemFeature{
                                    Name: "sapiente",
                                },
                                shared.SystemFeature{
                                    Name: "architecto",
                                },
                                shared.SystemFeature{
                                    Name: "mollitia",
                                },
                                shared.SystemFeature{
                                    Name: "dolorem",
                                },
                            },
                            IncludedDeviceIds: []shared.DeviceID{
                                shared.DeviceID{
                                    BuildBrand: "consequuntur",
                                    BuildDevice: "repellat",
                                },
                                shared.DeviceID{
                                    BuildBrand: "mollitia",
                                    BuildDevice: "occaecati",
                                },
                                shared.DeviceID{
                                    BuildBrand: "numquam",
                                    BuildDevice: "commodi",
                                },
                            },
                            RequiredSystemFeatures: []shared.SystemFeature{
                                shared.SystemFeature{
                                    Name: "molestiae",
                                },
                                shared.SystemFeature{
                                    Name: "velit",
                                },
                            },
                        },
                    },
                    Name: "error",
                },
            },
            DeviceTierSet: &shared.DeviceTierSet{
                DeviceTiers: []shared.DeviceTier{
                    shared.DeviceTier{
                        DeviceGroupNames: []string{
                            "vitae",
                            "laborum",
                        },
                        Level: 656330,
                    },
                },
            },
            UserCountrySets: []shared.UserCountrySet{
                shared.UserCountrySet{
                    CountryCodes: []string{
                        "quo",
                    },
                    Name: "sequi",
                },
                shared.UserCountrySet{
                    CountryCodes: []string{
                        "ipsam",
                        "id",
                        "possimus",
                        "aut",
                    },
                    Name: "quasi",
                },
            },
        },
    }

    ctx := context.Background()
    res, err := s.Applications.AndroidpublisherApplicationsDeviceTierConfigsCreate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.DeviceTierConfig != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->