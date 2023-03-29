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
            PackageName: "unde",
        },
        QueryParams: operations.AndroidpublisherApplicationsDeviceTierConfigsCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "porro",
            AllowUnknownDevices: false,
            Alt: "proto",
            Callback: "id",
            Fields: "vero",
            Key: "perspiciatis",
            OauthToken: "nulla",
            PrettyPrint: false,
            QuotaUser: "nihil",
            UploadType: "fuga",
            UploadProtocol: "facilis",
        },
        Request: &shared.DeviceTierConfigInput{
            DeviceGroups: []shared.DeviceGroup{
                shared.DeviceGroup{
                    DeviceSelectors: []shared.DeviceSelector{
                        shared.DeviceSelector{
                            DeviceRAM: &shared.DeviceRAM{
                                MaxBytes: "ullam",
                                MinBytes: "saepe",
                            },
                            ExcludedDeviceIds: []shared.DeviceID{
                                shared.DeviceID{
                                    BuildBrand: "sapiente",
                                    BuildDevice: "enim",
                                },
                            },
                            ForbiddenSystemFeatures: []shared.SystemFeature{
                                shared.SystemFeature{
                                    Name: "voluptatum",
                                },
                                shared.SystemFeature{
                                    Name: "autem",
                                },
                            },
                            IncludedDeviceIds: []shared.DeviceID{
                                shared.DeviceID{
                                    BuildBrand: "non",
                                    BuildDevice: "deleniti",
                                },
                                shared.DeviceID{
                                    BuildBrand: "similique",
                                    BuildDevice: "reprehenderit",
                                },
                                shared.DeviceID{
                                    BuildBrand: "molestiae",
                                    BuildDevice: "quo",
                                },
                                shared.DeviceID{
                                    BuildBrand: "quasi",
                                    BuildDevice: "laboriosam",
                                },
                            },
                            RequiredSystemFeatures: []shared.SystemFeature{
                                shared.SystemFeature{
                                    Name: "est",
                                },
                            },
                        },
                        shared.DeviceSelector{
                            DeviceRAM: &shared.DeviceRAM{
                                MaxBytes: "voluptatem",
                                MinBytes: "consequatur",
                            },
                            ExcludedDeviceIds: []shared.DeviceID{
                                shared.DeviceID{
                                    BuildBrand: "a",
                                    BuildDevice: "omnis",
                                },
                                shared.DeviceID{
                                    BuildBrand: "eos",
                                    BuildDevice: "accusamus",
                                },
                                shared.DeviceID{
                                    BuildBrand: "accusamus",
                                    BuildDevice: "reiciendis",
                                },
                                shared.DeviceID{
                                    BuildBrand: "rem",
                                    BuildDevice: "quibusdam",
                                },
                            },
                            ForbiddenSystemFeatures: []shared.SystemFeature{
                                shared.SystemFeature{
                                    Name: "praesentium",
                                },
                                shared.SystemFeature{
                                    Name: "occaecati",
                                },
                                shared.SystemFeature{
                                    Name: "dolor",
                                },
                                shared.SystemFeature{
                                    Name: "soluta",
                                },
                            },
                            IncludedDeviceIds: []shared.DeviceID{
                                shared.DeviceID{
                                    BuildBrand: "quisquam",
                                    BuildDevice: "rerum",
                                },
                            },
                            RequiredSystemFeatures: []shared.SystemFeature{
                                shared.SystemFeature{
                                    Name: "qui",
                                },
                                shared.SystemFeature{
                                    Name: "sed",
                                },
                                shared.SystemFeature{
                                    Name: "rerum",
                                },
                            },
                        },
                    },
                    Name: "possimus",
                },
                shared.DeviceGroup{
                    DeviceSelectors: []shared.DeviceSelector{
                        shared.DeviceSelector{
                            DeviceRAM: &shared.DeviceRAM{
                                MaxBytes: "odit",
                                MinBytes: "esse",
                            },
                            ExcludedDeviceIds: []shared.DeviceID{
                                shared.DeviceID{
                                    BuildBrand: "voluptatem",
                                    BuildDevice: "amet",
                                },
                                shared.DeviceID{
                                    BuildBrand: "est",
                                    BuildDevice: "id",
                                },
                            },
                            ForbiddenSystemFeatures: []shared.SystemFeature{
                                shared.SystemFeature{
                                    Name: "numquam",
                                },
                                shared.SystemFeature{
                                    Name: "similique",
                                },
                            },
                            IncludedDeviceIds: []shared.DeviceID{
                                shared.DeviceID{
                                    BuildBrand: "sit",
                                    BuildDevice: "quia",
                                },
                            },
                            RequiredSystemFeatures: []shared.SystemFeature{
                                shared.SystemFeature{
                                    Name: "voluptatem",
                                },
                                shared.SystemFeature{
                                    Name: "laborum",
                                },
                                shared.SystemFeature{
                                    Name: "modi",
                                },
                            },
                        },
                        shared.DeviceSelector{
                            DeviceRAM: &shared.DeviceRAM{
                                MaxBytes: "et",
                                MinBytes: "iure",
                            },
                            ExcludedDeviceIds: []shared.DeviceID{
                                shared.DeviceID{
                                    BuildBrand: "ut",
                                    BuildDevice: "soluta",
                                },
                                shared.DeviceID{
                                    BuildBrand: "qui",
                                    BuildDevice: "ea",
                                },
                                shared.DeviceID{
                                    BuildBrand: "laborum",
                                    BuildDevice: "iusto",
                                },
                                shared.DeviceID{
                                    BuildBrand: "ut",
                                    BuildDevice: "optio",
                                },
                            },
                            ForbiddenSystemFeatures: []shared.SystemFeature{
                                shared.SystemFeature{
                                    Name: "inventore",
                                },
                            },
                            IncludedDeviceIds: []shared.DeviceID{
                                shared.DeviceID{
                                    BuildBrand: "libero",
                                    BuildDevice: "et",
                                },
                                shared.DeviceID{
                                    BuildBrand: "libero",
                                    BuildDevice: "ipsum",
                                },
                                shared.DeviceID{
                                    BuildBrand: "non",
                                    BuildDevice: "ea",
                                },
                                shared.DeviceID{
                                    BuildBrand: "magni",
                                    BuildDevice: "placeat",
                                },
                            },
                            RequiredSystemFeatures: []shared.SystemFeature{
                                shared.SystemFeature{
                                    Name: "est",
                                },
                                shared.SystemFeature{
                                    Name: "commodi",
                                },
                            },
                        },
                        shared.DeviceSelector{
                            DeviceRAM: &shared.DeviceRAM{
                                MaxBytes: "quia",
                                MinBytes: "similique",
                            },
                            ExcludedDeviceIds: []shared.DeviceID{
                                shared.DeviceID{
                                    BuildBrand: "odio",
                                    BuildDevice: "harum",
                                },
                            },
                            ForbiddenSystemFeatures: []shared.SystemFeature{
                                shared.SystemFeature{
                                    Name: "a",
                                },
                                shared.SystemFeature{
                                    Name: "aut",
                                },
                                shared.SystemFeature{
                                    Name: "et",
                                },
                                shared.SystemFeature{
                                    Name: "non",
                                },
                            },
                            IncludedDeviceIds: []shared.DeviceID{
                                shared.DeviceID{
                                    BuildBrand: "neque",
                                    BuildDevice: "asperiores",
                                },
                                shared.DeviceID{
                                    BuildBrand: "et",
                                    BuildDevice: "culpa",
                                },
                                shared.DeviceID{
                                    BuildBrand: "aliquam",
                                    BuildDevice: "esse",
                                },
                            },
                            RequiredSystemFeatures: []shared.SystemFeature{
                                shared.SystemFeature{
                                    Name: "voluptatum",
                                },
                                shared.SystemFeature{
                                    Name: "et",
                                },
                            },
                        },
                    },
                    Name: "fuga",
                },
            },
            DeviceTierSet: &shared.DeviceTierSet{
                DeviceTiers: []shared.DeviceTier{
                    shared.DeviceTier{
                        DeviceGroupNames: []string{
                            "aut",
                            "cum",
                        },
                        Level: 656330,
                    },
                },
            },
            UserCountrySets: []shared.UserCountrySet{
                shared.UserCountrySet{
                    CountryCodes: []string{
                        "omnis",
                    },
                    Name: "adipisci",
                },
                shared.UserCountrySet{
                    CountryCodes: []string{
                        "consequatur",
                        "distinctio",
                        "qui",
                        "perferendis",
                    },
                    Name: "aspernatur",
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