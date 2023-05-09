# Applications

### Available Operations

* [AndroidpublisherApplicationsDeviceTierConfigsCreate](#androidpublisherapplicationsdevicetierconfigscreate) - Creates a new device tier config for an app.
* [AndroidpublisherApplicationsDeviceTierConfigsGet](#androidpublisherapplicationsdevicetierconfigsget) - Returns a particular device tier config.
* [AndroidpublisherApplicationsDeviceTierConfigsList](#androidpublisherapplicationsdevicetierconfigslist) - Returns created device tier configs, ordered by descending creation time.

## AndroidpublisherApplicationsDeviceTierConfigsCreate

Creates a new device tier config for an app.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Applications.AndroidpublisherApplicationsDeviceTierConfigsCreate(ctx, operations.AndroidpublisherApplicationsDeviceTierConfigsCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        DeviceTierConfigInput: &shared.DeviceTierConfigInput{
            DeviceGroups: []shared.DeviceGroup{
                shared.DeviceGroup{
                    DeviceSelectors: []shared.DeviceSelector{
                        shared.DeviceSelector{
                            DeviceRAM: &shared.DeviceRAM{
                                MaxBytes: sdk.String("quod"),
                                MinBytes: sdk.String("officiis"),
                            },
                            ExcludedDeviceIds: []shared.DeviceID{
                                shared.DeviceID{
                                    BuildBrand: sdk.String("dolorum"),
                                    BuildDevice: sdk.String("a"),
                                },
                            },
                            ForbiddenSystemFeatures: []shared.SystemFeature{
                                shared.SystemFeature{
                                    Name: sdk.String("Tyrone Emard"),
                                },
                                shared.SystemFeature{
                                    Name: sdk.String("Kelli Thompson"),
                                },
                            },
                            IncludedDeviceIds: []shared.DeviceID{
                                shared.DeviceID{
                                    BuildBrand: sdk.String("sapiente"),
                                    BuildDevice: sdk.String("totam"),
                                },
                            },
                            RequiredSystemFeatures: []shared.SystemFeature{
                                shared.SystemFeature{
                                    Name: sdk.String("Mamie Durgan"),
                                },
                                shared.SystemFeature{
                                    Name: sdk.String("Glen Oberbrunner"),
                                },
                            },
                        },
                        shared.DeviceSelector{
                            DeviceRAM: &shared.DeviceRAM{
                                MaxBytes: sdk.String("incidunt"),
                                MinBytes: sdk.String("qui"),
                            },
                            ExcludedDeviceIds: []shared.DeviceID{
                                shared.DeviceID{
                                    BuildBrand: sdk.String("maxime"),
                                    BuildDevice: sdk.String("pariatur"),
                                },
                                shared.DeviceID{
                                    BuildBrand: sdk.String("soluta"),
                                    BuildDevice: sdk.String("dicta"),
                                },
                                shared.DeviceID{
                                    BuildBrand: sdk.String("laborum"),
                                    BuildDevice: sdk.String("totam"),
                                },
                            },
                            ForbiddenSystemFeatures: []shared.SystemFeature{
                                shared.SystemFeature{
                                    Name: sdk.String("Bonnie Raynor"),
                                },
                                shared.SystemFeature{
                                    Name: sdk.String("Felicia Spencer"),
                                },
                            },
                            IncludedDeviceIds: []shared.DeviceID{
                                shared.DeviceID{
                                    BuildBrand: sdk.String("magni"),
                                    BuildDevice: sdk.String("odio"),
                                },
                            },
                            RequiredSystemFeatures: []shared.SystemFeature{
                                shared.SystemFeature{
                                    Name: sdk.String("Miss Candice Weimann"),
                                },
                            },
                        },
                    },
                    Name: sdk.String("Carl Turner DDS"),
                },
                shared.DeviceGroup{
                    DeviceSelectors: []shared.DeviceSelector{
                        shared.DeviceSelector{
                            DeviceRAM: &shared.DeviceRAM{
                                MaxBytes: sdk.String("tempore"),
                                MinBytes: sdk.String("cupiditate"),
                            },
                            ExcludedDeviceIds: []shared.DeviceID{
                                shared.DeviceID{
                                    BuildBrand: sdk.String("delectus"),
                                    BuildDevice: sdk.String("dolorem"),
                                },
                            },
                            ForbiddenSystemFeatures: []shared.SystemFeature{
                                shared.SystemFeature{
                                    Name: sdk.String("Mr. Josephine Pagac V"),
                                },
                                shared.SystemFeature{
                                    Name: sdk.String("William Ortiz"),
                                },
                            },
                            IncludedDeviceIds: []shared.DeviceID{
                                shared.DeviceID{
                                    BuildBrand: sdk.String("ut"),
                                    BuildDevice: sdk.String("facilis"),
                                },
                                shared.DeviceID{
                                    BuildBrand: sdk.String("cupiditate"),
                                    BuildDevice: sdk.String("qui"),
                                },
                                shared.DeviceID{
                                    BuildBrand: sdk.String("quae"),
                                    BuildDevice: sdk.String("laudantium"),
                                },
                                shared.DeviceID{
                                    BuildBrand: sdk.String("odio"),
                                    BuildDevice: sdk.String("occaecati"),
                                },
                            },
                            RequiredSystemFeatures: []shared.SystemFeature{
                                shared.SystemFeature{
                                    Name: sdk.String("Ignacio Moen"),
                                },
                                shared.SystemFeature{
                                    Name: sdk.String("Karl Feeney"),
                                },
                                shared.SystemFeature{
                                    Name: sdk.String("Darla Rau"),
                                },
                                shared.SystemFeature{
                                    Name: sdk.String("Malcolm Swift"),
                                },
                            },
                        },
                        shared.DeviceSelector{
                            DeviceRAM: &shared.DeviceRAM{
                                MaxBytes: sdk.String("quibusdam"),
                                MinBytes: sdk.String("illum"),
                            },
                            ExcludedDeviceIds: []shared.DeviceID{
                                shared.DeviceID{
                                    BuildBrand: sdk.String("natus"),
                                    BuildDevice: sdk.String("impedit"),
                                },
                            },
                            ForbiddenSystemFeatures: []shared.SystemFeature{
                                shared.SystemFeature{
                                    Name: sdk.String("Greg Stoltenberg"),
                                },
                            },
                            IncludedDeviceIds: []shared.DeviceID{
                                shared.DeviceID{
                                    BuildBrand: sdk.String("doloribus"),
                                    BuildDevice: sdk.String("iusto"),
                                },
                                shared.DeviceID{
                                    BuildBrand: sdk.String("eligendi"),
                                    BuildDevice: sdk.String("ducimus"),
                                },
                                shared.DeviceID{
                                    BuildBrand: sdk.String("alias"),
                                    BuildDevice: sdk.String("officia"),
                                },
                                shared.DeviceID{
                                    BuildBrand: sdk.String("tempora"),
                                    BuildDevice: sdk.String("ipsam"),
                                },
                            },
                            RequiredSystemFeatures: []shared.SystemFeature{
                                shared.SystemFeature{
                                    Name: sdk.String("Jessie Schuster"),
                                },
                                shared.SystemFeature{
                                    Name: sdk.String("Mabel Cartwright"),
                                },
                            },
                        },
                        shared.DeviceSelector{
                            DeviceRAM: &shared.DeviceRAM{
                                MaxBytes: sdk.String("quasi"),
                                MinBytes: sdk.String("ex"),
                            },
                            ExcludedDeviceIds: []shared.DeviceID{
                                shared.DeviceID{
                                    BuildBrand: sdk.String("excepturi"),
                                    BuildDevice: sdk.String("voluptatibus"),
                                },
                                shared.DeviceID{
                                    BuildBrand: sdk.String("nostrum"),
                                    BuildDevice: sdk.String("sapiente"),
                                },
                                shared.DeviceID{
                                    BuildBrand: sdk.String("quisquam"),
                                    BuildDevice: sdk.String("saepe"),
                                },
                                shared.DeviceID{
                                    BuildBrand: sdk.String("ea"),
                                    BuildDevice: sdk.String("impedit"),
                                },
                            },
                            ForbiddenSystemFeatures: []shared.SystemFeature{
                                shared.SystemFeature{
                                    Name: sdk.String("Jeanne Bode"),
                                },
                                shared.SystemFeature{
                                    Name: sdk.String("Glenn Walter"),
                                },
                            },
                            IncludedDeviceIds: []shared.DeviceID{
                                shared.DeviceID{
                                    BuildBrand: sdk.String("a"),
                                    BuildDevice: sdk.String("libero"),
                                },
                            },
                            RequiredSystemFeatures: []shared.SystemFeature{
                                shared.SystemFeature{
                                    Name: sdk.String("Margie Russel"),
                                },
                            },
                        },
                    },
                    Name: sdk.String("Miss Dennis Friesen"),
                },
            },
            DeviceTierSet: &shared.DeviceTierSet{
                DeviceTiers: []shared.DeviceTier{
                    shared.DeviceTier{
                        DeviceGroupNames: []string{
                            "eum",
                        },
                        Level: sdk.Int(420539),
                    },
                    shared.DeviceTier{
                        DeviceGroupNames: []string{
                            "quas",
                            "assumenda",
                            "nulla",
                            "voluptas",
                        },
                        Level: sdk.Int(727044),
                    },
                    shared.DeviceTier{
                        DeviceGroupNames: []string{
                            "tempora",
                        },
                        Level: sdk.Int(256139),
                    },
                    shared.DeviceTier{
                        DeviceGroupNames: []string{
                            "provident",
                        },
                        Level: sdk.Int(55374),
                    },
                },
            },
            UserCountrySets: []shared.UserCountrySet{
                shared.UserCountrySet{
                    CountryCodes: []string{
                        "odio",
                        "eius",
                    },
                    Name: sdk.String("Tamara Leffler"),
                },
                shared.UserCountrySet{
                    CountryCodes: []string{
                        "fugiat",
                        "ut",
                        "eum",
                    },
                    Name: sdk.String("Angelina Davis"),
                },
            },
        },
        AccessToken: sdk.String("veritatis"),
        AllowUnknownDevices: sdk.Bool(false),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("id"),
        Fields: sdk.String("quidem"),
        Key: sdk.String("neque"),
        OauthToken: sdk.String("quo"),
        PackageName: "illum",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quo"),
        UploadType: sdk.String("fuga"),
        UploadProtocol: sdk.String("eius"),
    }, operations.AndroidpublisherApplicationsDeviceTierConfigsCreateSecurity{
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

## AndroidpublisherApplicationsDeviceTierConfigsGet

Returns a particular device tier config.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Applications.AndroidpublisherApplicationsDeviceTierConfigsGet(ctx, operations.AndroidpublisherApplicationsDeviceTierConfigsGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("voluptas"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("cupiditate"),
        DeviceTierConfigID: "consequatur",
        Fields: sdk.String("tempora"),
        Key: sdk.String("debitis"),
        OauthToken: sdk.String("ipsam"),
        PackageName: "aspernatur",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("sequi"),
        UploadType: sdk.String("quo"),
        UploadProtocol: sdk.String("esse"),
    }, operations.AndroidpublisherApplicationsDeviceTierConfigsGetSecurity{
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

## AndroidpublisherApplicationsDeviceTierConfigsList

Returns created device tier configs, ordered by descending creation time.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Applications.AndroidpublisherApplicationsDeviceTierConfigsList(ctx, operations.AndroidpublisherApplicationsDeviceTierConfigsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("aperiam"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("quod"),
        Fields: sdk.String("dignissimos"),
        Key: sdk.String("inventore"),
        OauthToken: sdk.String("nihil"),
        PackageName: "totam",
        PageSize: sdk.Int64(882710),
        PageToken: sdk.String("aliquam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("odio"),
        UploadType: sdk.String("occaecati"),
        UploadProtocol: sdk.String("commodi"),
    }, operations.AndroidpublisherApplicationsDeviceTierConfigsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListDeviceTierConfigsResponse != nil {
        // handle response
    }
}
```
