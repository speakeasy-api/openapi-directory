# Managedconfigurationsfordevice

### Available Operations

* [AndroidenterpriseManagedconfigurationsfordeviceDelete](#androidenterprisemanagedconfigurationsfordevicedelete) - Removes a per-device managed configuration for an app for the specified device.
* [AndroidenterpriseManagedconfigurationsfordeviceGet](#androidenterprisemanagedconfigurationsfordeviceget) - Retrieves details of a per-device managed configuration.
* [AndroidenterpriseManagedconfigurationsfordeviceList](#androidenterprisemanagedconfigurationsfordevicelist) - Lists all the per-device managed configurations for the specified device. Only the ID is set.
* [AndroidenterpriseManagedconfigurationsfordeviceUpdate](#androidenterprisemanagedconfigurationsfordeviceupdate) - Adds or updates a per-device managed configuration for an app for the specified device.

## AndroidenterpriseManagedconfigurationsfordeviceDelete

Removes a per-device managed configuration for an app for the specified device.

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
    res, err := s.Managedconfigurationsfordevice.AndroidenterpriseManagedconfigurationsfordeviceDelete(ctx, operations.AndroidenterpriseManagedconfigurationsfordeviceDeleteRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("mollitia"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("atque"),
        DeviceID: "explicabo",
        EnterpriseID: "minima",
        Fields: sdk.String("nisi"),
        Key: sdk.String("fugit"),
        ManagedConfigurationForDeviceID: "sapiente",
        OauthToken: sdk.String("consequuntur"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ratione"),
        UploadType: sdk.String("explicabo"),
        UploadProtocol: sdk.String("saepe"),
        UserID: "occaecati",
    }, operations.AndroidenterpriseManagedconfigurationsfordeviceDeleteSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## AndroidenterpriseManagedconfigurationsfordeviceGet

Retrieves details of a per-device managed configuration.

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
    res, err := s.Managedconfigurationsfordevice.AndroidenterpriseManagedconfigurationsfordeviceGet(ctx, operations.AndroidenterpriseManagedconfigurationsfordeviceGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("et"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("eveniet"),
        DeviceID: "accusamus",
        EnterpriseID: "veritatis",
        Fields: sdk.String("esse"),
        Key: sdk.String("quod"),
        ManagedConfigurationForDeviceID: "nam",
        OauthToken: sdk.String("vero"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("aliquid"),
        UploadType: sdk.String("quasi"),
        UploadProtocol: sdk.String("saepe"),
        UserID: "vel",
    }, operations.AndroidenterpriseManagedconfigurationsfordeviceGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ManagedConfiguration != nil {
        // handle response
    }
}
```

## AndroidenterpriseManagedconfigurationsfordeviceList

Lists all the per-device managed configurations for the specified device. Only the ID is set.

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
    res, err := s.Managedconfigurationsfordevice.AndroidenterpriseManagedconfigurationsfordeviceList(ctx, operations.AndroidenterpriseManagedconfigurationsfordeviceListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("molestiae"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("occaecati"),
        DeviceID: "minima",
        EnterpriseID: "distinctio",
        Fields: sdk.String("eligendi"),
        Key: sdk.String("sit"),
        OauthToken: sdk.String("culpa"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("tempore"),
        UploadType: sdk.String("adipisci"),
        UploadProtocol: sdk.String("cumque"),
        UserID: "consequuntur",
    }, operations.AndroidenterpriseManagedconfigurationsfordeviceListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ManagedConfigurationsForDeviceListResponse != nil {
        // handle response
    }
}
```

## AndroidenterpriseManagedconfigurationsfordeviceUpdate

Adds or updates a per-device managed configuration for an app for the specified device.

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
    res, err := s.Managedconfigurationsfordevice.AndroidenterpriseManagedconfigurationsfordeviceUpdate(ctx, operations.AndroidenterpriseManagedconfigurationsfordeviceUpdateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        ManagedConfiguration: &shared.ManagedConfiguration{
            ConfigurationVariables: &shared.ConfigurationVariables{
                McmID: sdk.String("minus"),
                VariableSet: []shared.VariableSet{
                    shared.VariableSet{
                        Placeholder: sdk.String("sapiente"),
                        UserValue: sdk.String("consectetur"),
                    },
                    shared.VariableSet{
                        Placeholder: sdk.String("esse"),
                        UserValue: sdk.String("blanditiis"),
                    },
                },
            },
            Kind: sdk.String("provident"),
            ManagedProperty: []shared.ManagedProperty{
                shared.ManagedProperty{
                    Key: sdk.String("nulla"),
                    ValueBool: sdk.Bool(false),
                    ValueBundle: &shared.ManagedPropertyBundle{
                        ManagedProperty: []shared.ManagedProperty{
                            shared.ManagedProperty{},
                            shared.ManagedProperty{},
                            shared.ManagedProperty{},
                        },
                    },
                    ValueBundleArray: []shared.ManagedPropertyBundle{
                        shared.ManagedPropertyBundle{
                            ManagedProperty: []shared.ManagedProperty{
                                shared.ManagedProperty{},
                            },
                        },
                        shared.ManagedPropertyBundle{
                            ManagedProperty: []shared.ManagedProperty{
                                shared.ManagedProperty{},
                                shared.ManagedProperty{},
                                shared.ManagedProperty{},
                                shared.ManagedProperty{},
                            },
                        },
                    },
                    ValueInteger: sdk.Int(621679),
                    ValueString: sdk.String("sint"),
                    ValueStringArray: []string{
                        "possimus",
                        "quia",
                        "eveniet",
                        "asperiores",
                    },
                },
                shared.ManagedProperty{
                    Key: sdk.String("facere"),
                    ValueBool: sdk.Bool(false),
                    ValueBundle: &shared.ManagedPropertyBundle{
                        ManagedProperty: []shared.ManagedProperty{
                            shared.ManagedProperty{},
                        },
                    },
                    ValueBundleArray: []shared.ManagedPropertyBundle{
                        shared.ManagedPropertyBundle{
                            ManagedProperty: []shared.ManagedProperty{
                                shared.ManagedProperty{},
                            },
                        },
                    },
                    ValueInteger: sdk.Int(628899),
                    ValueString: sdk.String("culpa"),
                    ValueStringArray: []string{
                        "tenetur",
                        "quae",
                    },
                },
                shared.ManagedProperty{
                    Key: sdk.String("earum"),
                    ValueBool: sdk.Bool(false),
                    ValueBundle: &shared.ManagedPropertyBundle{
                        ManagedProperty: []shared.ManagedProperty{
                            shared.ManagedProperty{},
                            shared.ManagedProperty{},
                        },
                    },
                    ValueBundleArray: []shared.ManagedPropertyBundle{
                        shared.ManagedPropertyBundle{
                            ManagedProperty: []shared.ManagedProperty{
                                shared.ManagedProperty{},
                                shared.ManagedProperty{},
                            },
                        },
                        shared.ManagedPropertyBundle{
                            ManagedProperty: []shared.ManagedProperty{
                                shared.ManagedProperty{},
                                shared.ManagedProperty{},
                                shared.ManagedProperty{},
                            },
                        },
                    },
                    ValueInteger: sdk.Int(849039),
                    ValueString: sdk.String("soluta"),
                    ValueStringArray: []string{
                        "aliquam",
                    },
                },
                shared.ManagedProperty{
                    Key: sdk.String("sapiente"),
                    ValueBool: sdk.Bool(false),
                    ValueBundle: &shared.ManagedPropertyBundle{
                        ManagedProperty: []shared.ManagedProperty{
                            shared.ManagedProperty{},
                        },
                    },
                    ValueBundleArray: []shared.ManagedPropertyBundle{
                        shared.ManagedPropertyBundle{
                            ManagedProperty: []shared.ManagedProperty{
                                shared.ManagedProperty{},
                                shared.ManagedProperty{},
                            },
                        },
                        shared.ManagedPropertyBundle{
                            ManagedProperty: []shared.ManagedProperty{
                                shared.ManagedProperty{},
                                shared.ManagedProperty{},
                            },
                        },
                    },
                    ValueInteger: sdk.Int(391774),
                    ValueString: sdk.String("aut"),
                    ValueStringArray: []string{
                        "qui",
                        "quibusdam",
                        "ex",
                    },
                },
            },
            ProductID: sdk.String("deleniti"),
        },
        AccessToken: sdk.String("itaque"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("architecto"),
        DeviceID: "omnis",
        EnterpriseID: "tenetur",
        Fields: sdk.String("quasi"),
        Key: sdk.String("at"),
        ManagedConfigurationForDeviceID: "et",
        OauthToken: sdk.String("voluptate"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ipsa"),
        UploadType: sdk.String("minima"),
        UploadProtocol: sdk.String("veritatis"),
        UserID: "consectetur",
    }, operations.AndroidenterpriseManagedconfigurationsfordeviceUpdateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ManagedConfiguration != nil {
        // handle response
    }
}
```
