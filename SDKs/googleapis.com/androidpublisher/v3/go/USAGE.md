<!-- Start SDK Example Usage -->
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        DeviceTierConfigInput: &shared.DeviceTierConfigInput{
            DeviceGroups: []shared.DeviceGroup{
                shared.DeviceGroup{
                    DeviceSelectors: []shared.DeviceSelector{
                        shared.DeviceSelector{
                            DeviceRAM: &shared.DeviceRAM{
                                MaxBytes: sdk.String("quibusdam"),
                                MinBytes: sdk.String("unde"),
                            },
                            ExcludedDeviceIds: []shared.DeviceID{
                                shared.DeviceID{
                                    BuildBrand: sdk.String("corrupti"),
                                    BuildDevice: sdk.String("illum"),
                                },
                                shared.DeviceID{
                                    BuildBrand: sdk.String("vel"),
                                    BuildDevice: sdk.String("error"),
                                },
                                shared.DeviceID{
                                    BuildBrand: sdk.String("deserunt"),
                                    BuildDevice: sdk.String("suscipit"),
                                },
                                shared.DeviceID{
                                    BuildBrand: sdk.String("iure"),
                                    BuildDevice: sdk.String("magnam"),
                                },
                            },
                            ForbiddenSystemFeatures: []shared.SystemFeature{
                                shared.SystemFeature{
                                    Name: sdk.String("Lucia Goldner"),
                                },
                                shared.SystemFeature{
                                    Name: sdk.String("Irving Lehner"),
                                },
                                shared.SystemFeature{
                                    Name: sdk.String("Mrs. Sophie Smith MD"),
                                },
                                shared.SystemFeature{
                                    Name: sdk.String("Roberta Sipes"),
                                },
                            },
                            IncludedDeviceIds: []shared.DeviceID{
                                shared.DeviceID{
                                    BuildBrand: sdk.String("at"),
                                    BuildDevice: sdk.String("at"),
                                },
                            },
                            RequiredSystemFeatures: []shared.SystemFeature{
                                shared.SystemFeature{
                                    Name: sdk.String("Bernadette Schmidt"),
                                },
                                shared.SystemFeature{
                                    Name: sdk.String("Omar Carroll"),
                                },
                                shared.SystemFeature{
                                    Name: sdk.String("Wayne Lind"),
                                },
                                shared.SystemFeature{
                                    Name: sdk.String("Jack Johns"),
                                },
                            },
                        },
                        shared.DeviceSelector{
                            DeviceRAM: &shared.DeviceRAM{
                                MaxBytes: sdk.String("qui"),
                                MinBytes: sdk.String("impedit"),
                            },
                            ExcludedDeviceIds: []shared.DeviceID{
                                shared.DeviceID{
                                    BuildBrand: sdk.String("esse"),
                                    BuildDevice: sdk.String("ipsum"),
                                },
                                shared.DeviceID{
                                    BuildBrand: sdk.String("excepturi"),
                                    BuildDevice: sdk.String("aspernatur"),
                                },
                                shared.DeviceID{
                                    BuildBrand: sdk.String("perferendis"),
                                    BuildDevice: sdk.String("ad"),
                                },
                            },
                            ForbiddenSystemFeatures: []shared.SystemFeature{
                                shared.SystemFeature{
                                    Name: sdk.String("Sheryl Fadel"),
                                },
                                shared.SystemFeature{
                                    Name: sdk.String("Elias Parker"),
                                },
                                shared.SystemFeature{
                                    Name: sdk.String("Brad Turcotte Jr."),
                                },
                            },
                            IncludedDeviceIds: []shared.DeviceID{
                                shared.DeviceID{
                                    BuildBrand: sdk.String("est"),
                                    BuildDevice: sdk.String("mollitia"),
                                },
                                shared.DeviceID{
                                    BuildBrand: sdk.String("laborum"),
                                    BuildDevice: sdk.String("dolores"),
                                },
                                shared.DeviceID{
                                    BuildBrand: sdk.String("dolorem"),
                                    BuildDevice: sdk.String("corporis"),
                                },
                                shared.DeviceID{
                                    BuildBrand: sdk.String("explicabo"),
                                    BuildDevice: sdk.String("nobis"),
                                },
                            },
                            RequiredSystemFeatures: []shared.SystemFeature{
                                shared.SystemFeature{
                                    Name: sdk.String("Corey Hane III"),
                                },
                                shared.SystemFeature{
                                    Name: sdk.String("Miss Aubrey Williamson"),
                                },
                            },
                        },
                        shared.DeviceSelector{
                            DeviceRAM: &shared.DeviceRAM{
                                MaxBytes: sdk.String("culpa"),
                                MinBytes: sdk.String("consequuntur"),
                            },
                            ExcludedDeviceIds: []shared.DeviceID{
                                shared.DeviceID{
                                    BuildBrand: sdk.String("mollitia"),
                                    BuildDevice: sdk.String("occaecati"),
                                },
                                shared.DeviceID{
                                    BuildBrand: sdk.String("numquam"),
                                    BuildDevice: sdk.String("commodi"),
                                },
                                shared.DeviceID{
                                    BuildBrand: sdk.String("quam"),
                                    BuildDevice: sdk.String("molestiae"),
                                },
                                shared.DeviceID{
                                    BuildBrand: sdk.String("velit"),
                                    BuildDevice: sdk.String("error"),
                                },
                            },
                            ForbiddenSystemFeatures: []shared.SystemFeature{
                                shared.SystemFeature{
                                    Name: sdk.String("Gloria Padberg"),
                                },
                            },
                            IncludedDeviceIds: []shared.DeviceID{
                                shared.DeviceID{
                                    BuildBrand: sdk.String("quo"),
                                    BuildDevice: sdk.String("sequi"),
                                },
                            },
                            RequiredSystemFeatures: []shared.SystemFeature{
                                shared.SystemFeature{
                                    Name: sdk.String("Mr. Alberta Schuster"),
                                },
                                shared.SystemFeature{
                                    Name: sdk.String("Neal Boyer"),
                                },
                                shared.SystemFeature{
                                    Name: sdk.String("Jessie Langosh V"),
                                },
                                shared.SystemFeature{
                                    Name: sdk.String("Ms. Karla Aufderhar"),
                                },
                            },
                        },
                    },
                    Name: sdk.String("Willie Hessel"),
                },
                shared.DeviceGroup{
                    DeviceSelectors: []shared.DeviceSelector{
                        shared.DeviceSelector{
                            DeviceRAM: &shared.DeviceRAM{
                                MaxBytes: sdk.String("harum"),
                                MinBytes: sdk.String("enim"),
                            },
                            ExcludedDeviceIds: []shared.DeviceID{
                                shared.DeviceID{
                                    BuildBrand: sdk.String("commodi"),
                                    BuildDevice: sdk.String("repudiandae"),
                                },
                                shared.DeviceID{
                                    BuildBrand: sdk.String("quae"),
                                    BuildDevice: sdk.String("ipsum"),
                                },
                                shared.DeviceID{
                                    BuildBrand: sdk.String("quidem"),
                                    BuildDevice: sdk.String("molestias"),
                                },
                                shared.DeviceID{
                                    BuildBrand: sdk.String("excepturi"),
                                    BuildDevice: sdk.String("pariatur"),
                                },
                            },
                            ForbiddenSystemFeatures: []shared.SystemFeature{
                                shared.SystemFeature{
                                    Name: sdk.String("Dr. Jordan Von"),
                                },
                                shared.SystemFeature{
                                    Name: sdk.String("Patti Gottlieb MD"),
                                },
                            },
                            IncludedDeviceIds: []shared.DeviceID{
                                shared.DeviceID{
                                    BuildBrand: sdk.String("explicabo"),
                                    BuildDevice: sdk.String("deserunt"),
                                },
                                shared.DeviceID{
                                    BuildBrand: sdk.String("distinctio"),
                                    BuildDevice: sdk.String("quibusdam"),
                                },
                                shared.DeviceID{
                                    BuildBrand: sdk.String("labore"),
                                    BuildDevice: sdk.String("modi"),
                                },
                                shared.DeviceID{
                                    BuildBrand: sdk.String("qui"),
                                    BuildDevice: sdk.String("aliquid"),
                                },
                            },
                            RequiredSystemFeatures: []shared.SystemFeature{
                                shared.SystemFeature{
                                    Name: sdk.String("Christopher Cummerata"),
                                },
                                shared.SystemFeature{
                                    Name: sdk.String("Denise Pagac"),
                                },
                                shared.SystemFeature{
                                    Name: sdk.String("Geoffrey Green"),
                                },
                            },
                        },
                    },
                    Name: sdk.String("Sheri Mayer"),
                },
                shared.DeviceGroup{
                    DeviceSelectors: []shared.DeviceSelector{
                        shared.DeviceSelector{
                            DeviceRAM: &shared.DeviceRAM{
                                MaxBytes: sdk.String("sint"),
                                MinBytes: sdk.String("officia"),
                            },
                            ExcludedDeviceIds: []shared.DeviceID{
                                shared.DeviceID{
                                    BuildBrand: sdk.String("debitis"),
                                    BuildDevice: sdk.String("a"),
                                },
                            },
                            ForbiddenSystemFeatures: []shared.SystemFeature{
                                shared.SystemFeature{
                                    Name: sdk.String("Arlene Stamm"),
                                },
                                shared.SystemFeature{
                                    Name: sdk.String("Valerie Runolfsson"),
                                },
                                shared.SystemFeature{
                                    Name: sdk.String("Kayla Thompson"),
                                },
                            },
                            IncludedDeviceIds: []shared.DeviceID{
                                shared.DeviceID{
                                    BuildBrand: sdk.String("accusamus"),
                                    BuildDevice: sdk.String("delectus"),
                                },
                                shared.DeviceID{
                                    BuildBrand: sdk.String("quidem"),
                                    BuildDevice: sdk.String("provident"),
                                },
                            },
                            RequiredSystemFeatures: []shared.SystemFeature{
                                shared.SystemFeature{
                                    Name: sdk.String("Nelson Lesch"),
                                },
                                shared.SystemFeature{
                                    Name: sdk.String("Tyler Kassulke"),
                                },
                                shared.SystemFeature{
                                    Name: sdk.String("Dorothy Kovacek"),
                                },
                            },
                        },
                        shared.DeviceSelector{
                            DeviceRAM: &shared.DeviceRAM{
                                MaxBytes: sdk.String("id"),
                                MinBytes: sdk.String("labore"),
                            },
                            ExcludedDeviceIds: []shared.DeviceID{
                                shared.DeviceID{
                                    BuildBrand: sdk.String("suscipit"),
                                    BuildDevice: sdk.String("natus"),
                                },
                                shared.DeviceID{
                                    BuildBrand: sdk.String("nobis"),
                                    BuildDevice: sdk.String("eum"),
                                },
                            },
                            ForbiddenSystemFeatures: []shared.SystemFeature{
                                shared.SystemFeature{
                                    Name: sdk.String("Ms. Julie Gusikowski"),
                                },
                                shared.SystemFeature{
                                    Name: sdk.String("Miss Julian Marvin"),
                                },
                                shared.SystemFeature{
                                    Name: sdk.String("Tommy Kemmer"),
                                },
                                shared.SystemFeature{
                                    Name: sdk.String("Vivian Boyle"),
                                },
                            },
                            IncludedDeviceIds: []shared.DeviceID{
                                shared.DeviceID{
                                    BuildBrand: sdk.String("eius"),
                                    BuildDevice: sdk.String("maxime"),
                                },
                                shared.DeviceID{
                                    BuildBrand: sdk.String("deleniti"),
                                    BuildDevice: sdk.String("facilis"),
                                },
                                shared.DeviceID{
                                    BuildBrand: sdk.String("in"),
                                    BuildDevice: sdk.String("architecto"),
                                },
                                shared.DeviceID{
                                    BuildBrand: sdk.String("architecto"),
                                    BuildDevice: sdk.String("repudiandae"),
                                },
                            },
                            RequiredSystemFeatures: []shared.SystemFeature{
                                shared.SystemFeature{
                                    Name: sdk.String("Jessie Zulauf"),
                                },
                                shared.SystemFeature{
                                    Name: sdk.String("Al Bashirian"),
                                },
                            },
                        },
                        shared.DeviceSelector{
                            DeviceRAM: &shared.DeviceRAM{
                                MaxBytes: sdk.String("natus"),
                                MinBytes: sdk.String("magni"),
                            },
                            ExcludedDeviceIds: []shared.DeviceID{
                                shared.DeviceID{
                                    BuildBrand: sdk.String("quo"),
                                    BuildDevice: sdk.String("illum"),
                                },
                            },
                            ForbiddenSystemFeatures: []shared.SystemFeature{
                                shared.SystemFeature{
                                    Name: sdk.String("Nathaniel Marks"),
                                },
                                shared.SystemFeature{
                                    Name: sdk.String("Virginia Wunsch"),
                                },
                                shared.SystemFeature{
                                    Name: sdk.String("Dr. Stacey Reichert"),
                                },
                                shared.SystemFeature{
                                    Name: sdk.String("Joseph Steuber DDS"),
                                },
                            },
                            IncludedDeviceIds: []shared.DeviceID{
                                shared.DeviceID{
                                    BuildBrand: sdk.String("hic"),
                                    BuildDevice: sdk.String("libero"),
                                },
                                shared.DeviceID{
                                    BuildBrand: sdk.String("nobis"),
                                    BuildDevice: sdk.String("dolores"),
                                },
                            },
                            RequiredSystemFeatures: []shared.SystemFeature{
                                shared.SystemFeature{
                                    Name: sdk.String("Lance Becker"),
                                },
                                shared.SystemFeature{
                                    Name: sdk.String("Dorothy Dach"),
                                },
                            },
                        },
                        shared.DeviceSelector{
                            DeviceRAM: &shared.DeviceRAM{
                                MaxBytes: sdk.String("dolor"),
                                MinBytes: sdk.String("vero"),
                            },
                            ExcludedDeviceIds: []shared.DeviceID{
                                shared.DeviceID{
                                    BuildBrand: sdk.String("hic"),
                                    BuildDevice: sdk.String("recusandae"),
                                },
                                shared.DeviceID{
                                    BuildBrand: sdk.String("omnis"),
                                    BuildDevice: sdk.String("facilis"),
                                },
                            },
                            ForbiddenSystemFeatures: []shared.SystemFeature{
                                shared.SystemFeature{
                                    Name: sdk.String("Robyn Cruickshank"),
                                },
                                shared.SystemFeature{
                                    Name: sdk.String("Violet Price"),
                                },
                                shared.SystemFeature{
                                    Name: sdk.String("Edwin Morar"),
                                },
                            },
                            IncludedDeviceIds: []shared.DeviceID{
                                shared.DeviceID{
                                    BuildBrand: sdk.String("provident"),
                                    BuildDevice: sdk.String("nobis"),
                                },
                                shared.DeviceID{
                                    BuildBrand: sdk.String("libero"),
                                    BuildDevice: sdk.String("delectus"),
                                },
                                shared.DeviceID{
                                    BuildBrand: sdk.String("quaerat"),
                                    BuildDevice: sdk.String("quos"),
                                },
                                shared.DeviceID{
                                    BuildBrand: sdk.String("aliquid"),
                                    BuildDevice: sdk.String("dolorem"),
                                },
                            },
                            RequiredSystemFeatures: []shared.SystemFeature{
                                shared.SystemFeature{
                                    Name: sdk.String("Norma Erdman"),
                                },
                            },
                        },
                    },
                    Name: sdk.String("Adrian Kuhn"),
                },
            },
            DeviceTierSet: &shared.DeviceTierSet{
                DeviceTiers: []shared.DeviceTier{
                    shared.DeviceTier{
                        DeviceGroupNames: []string{
                            "veritatis",
                            "ipsa",
                        },
                        Level: sdk.Int(56418),
                    },
                    shared.DeviceTier{
                        DeviceGroupNames: []string{
                            "odio",
                            "quaerat",
                        },
                        Level: sdk.Int(881005),
                    },
                    shared.DeviceTier{
                        DeviceGroupNames: []string{
                            "voluptatibus",
                            "voluptas",
                            "natus",
                        },
                        Level: sdk.Int(179603),
                    },
                },
            },
            UserCountrySets: []shared.UserCountrySet{
                shared.UserCountrySet{
                    CountryCodes: []string{
                        "fugiat",
                    },
                    Name: sdk.String("Latoya Parisian"),
                },
                shared.UserCountrySet{
                    CountryCodes: []string{
                        "deleniti",
                        "omnis",
                        "necessitatibus",
                    },
                    Name: sdk.String("Emmett Kovacek"),
                },
                shared.UserCountrySet{
                    CountryCodes: []string{
                        "saepe",
                        "eius",
                        "aspernatur",
                    },
                    Name: sdk.String("Wendy Rosenbaum"),
                },
            },
        },
        AccessToken: sdk.String("saepe"),
        AllowUnknownDevices: sdk.Bool(false),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("deserunt"),
        Fields: sdk.String("provident"),
        Key: sdk.String("minima"),
        OauthToken: sdk.String("repellendus"),
        PackageName: "totam",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("similique"),
        UploadType: sdk.String("alias"),
        UploadProtocol: sdk.String("at"),
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
<!-- End SDK Example Usage -->