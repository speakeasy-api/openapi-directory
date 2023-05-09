# Devices

### Available Operations

* [AndroidenterpriseDevicesForceReportUpload](#androidenterprisedevicesforcereportupload) - Uploads a report containing any changes in app states on the device since the last report was generated. You can call this method up to 3 times every 24 hours for a given device. If you exceed the quota, then the Google Play EMM API returns HTTP 429 Too Many Requests.
* [AndroidenterpriseDevicesGet](#androidenterprisedevicesget) - Retrieves the details of a device.
* [AndroidenterpriseDevicesGetState](#androidenterprisedevicesgetstate) - Retrieves whether a device's access to Google services is enabled or disabled. The device state takes effect only if enforcing EMM policies on Android devices is enabled in the Google Admin Console. Otherwise, the device state is ignored and all devices are allowed access to Google services. This is only supported for Google-managed users.
* [AndroidenterpriseDevicesList](#androidenterprisedeviceslist) - Retrieves the IDs of all of a user's devices.
* [AndroidenterpriseDevicesSetState](#androidenterprisedevicessetstate) - Sets whether a device's access to Google services is enabled or disabled. The device state takes effect only if enforcing EMM policies on Android devices is enabled in the Google Admin Console. Otherwise, the device state is ignored and all devices are allowed access to Google services. This is only supported for Google-managed users.
* [AndroidenterpriseDevicesUpdate](#androidenterprisedevicesupdate) - Updates the device policy. To ensure the policy is properly enforced, you need to prevent unmanaged accounts from accessing Google Play by setting the allowed_accounts in the managed configuration for the Google Play package. See restrict accounts in Google Play. When provisioning a new device, you should set the device policy using this method before adding the managed Google Play Account to the device, otherwise the policy will not be applied for a short period of time after adding the account to the device.

## AndroidenterpriseDevicesForceReportUpload

Uploads a report containing any changes in app states on the device since the last report was generated. You can call this method up to 3 times every 24 hours for a given device. If you exceed the quota, then the Google Play EMM API returns HTTP 429 Too Many Requests.

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
    res, err := s.Devices.AndroidenterpriseDevicesForceReportUpload(ctx, operations.AndroidenterpriseDevicesForceReportUploadRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("debitis"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("delectus"),
        DeviceID: "tempora",
        EnterpriseID: "suscipit",
        Fields: sdk.String("molestiae"),
        Key: sdk.String("minus"),
        OauthToken: sdk.String("placeat"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("voluptatum"),
        UploadType: sdk.String("iusto"),
        UploadProtocol: sdk.String("excepturi"),
        UserID: "nisi",
    }, operations.AndroidenterpriseDevicesForceReportUploadSecurity{
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

## AndroidenterpriseDevicesGet

Retrieves the details of a device.

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
    res, err := s.Devices.AndroidenterpriseDevicesGet(ctx, operations.AndroidenterpriseDevicesGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("temporibus"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("quis"),
        DeviceID: "veritatis",
        EnterpriseID: "deserunt",
        Fields: sdk.String("perferendis"),
        Key: sdk.String("ipsam"),
        OauthToken: sdk.String("repellendus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("sapiente"),
        UploadType: sdk.String("quo"),
        UploadProtocol: sdk.String("odit"),
        UserID: "at",
    }, operations.AndroidenterpriseDevicesGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Device != nil {
        // handle response
    }
}
```

## AndroidenterpriseDevicesGetState

Retrieves whether a device's access to Google services is enabled or disabled. The device state takes effect only if enforcing EMM policies on Android devices is enabled in the Google Admin Console. Otherwise, the device state is ignored and all devices are allowed access to Google services. This is only supported for Google-managed users.

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
    res, err := s.Devices.AndroidenterpriseDevicesGetState(ctx, operations.AndroidenterpriseDevicesGetStateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("maiores"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("quod"),
        DeviceID: "quod",
        EnterpriseID: "esse",
        Fields: sdk.String("totam"),
        Key: sdk.String("porro"),
        OauthToken: sdk.String("dolorum"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dicta"),
        UploadType: sdk.String("nam"),
        UploadProtocol: sdk.String("officia"),
        UserID: "occaecati",
    }, operations.AndroidenterpriseDevicesGetStateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeviceState != nil {
        // handle response
    }
}
```

## AndroidenterpriseDevicesList

Retrieves the IDs of all of a user's devices.

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
    res, err := s.Devices.AndroidenterpriseDevicesList(ctx, operations.AndroidenterpriseDevicesListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("deleniti"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("optio"),
        EnterpriseID: "totam",
        Fields: sdk.String("beatae"),
        Key: sdk.String("commodi"),
        OauthToken: sdk.String("molestiae"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("modi"),
        UploadType: sdk.String("qui"),
        UploadProtocol: sdk.String("impedit"),
        UserID: "cum",
    }, operations.AndroidenterpriseDevicesListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DevicesListResponse != nil {
        // handle response
    }
}
```

## AndroidenterpriseDevicesSetState

Sets whether a device's access to Google services is enabled or disabled. The device state takes effect only if enforcing EMM policies on Android devices is enabled in the Google Admin Console. Otherwise, the device state is ignored and all devices are allowed access to Google services. This is only supported for Google-managed users.

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
    res, err := s.Devices.AndroidenterpriseDevicesSetState(ctx, operations.AndroidenterpriseDevicesSetStateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        DeviceState: &shared.DeviceState{
            AccountState: shared.DeviceStateAccountStateEnumEnabled.ToPointer(),
        },
        AccessToken: sdk.String("excepturi"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("perferendis"),
        DeviceID: "ad",
        EnterpriseID: "natus",
        Fields: sdk.String("sed"),
        Key: sdk.String("iste"),
        OauthToken: sdk.String("dolor"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("natus"),
        UploadType: sdk.String("laboriosam"),
        UploadProtocol: sdk.String("hic"),
        UserID: "saepe",
    }, operations.AndroidenterpriseDevicesSetStateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeviceState != nil {
        // handle response
    }
}
```

## AndroidenterpriseDevicesUpdate

Updates the device policy. To ensure the policy is properly enforced, you need to prevent unmanaged accounts from accessing Google Play by setting the allowed_accounts in the managed configuration for the Google Play package. See restrict accounts in Google Play. When provisioning a new device, you should set the device policy using this method before adding the managed Google Play Account to the device, otherwise the policy will not be applied for a short period of time after adding the account to the device.

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
    res, err := s.Devices.AndroidenterpriseDevicesUpdate(ctx, operations.AndroidenterpriseDevicesUpdateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        Device: &shared.Device{
            AndroidID: sdk.String("in"),
            Device: sdk.String("corporis"),
            LatestBuildFingerprint: sdk.String("iste"),
            Maker: sdk.String("iure"),
            ManagementType: shared.DeviceManagementTypeEnumUnmanagedProfile.ToPointer(),
            Model: sdk.String("quidem"),
            Policy: &shared.Policy{
                AutoUpdatePolicy: shared.PolicyAutoUpdatePolicyEnumAutoUpdatePolicyUnspecified.ToPointer(),
                DeviceReportPolicy: shared.PolicyDeviceReportPolicyEnumDeviceReportPolicyUnspecified.ToPointer(),
                MaintenanceWindow: &shared.MaintenanceWindow{
                    DurationMs: sdk.String("reiciendis"),
                    StartTimeAfterMidnightMs: sdk.String("est"),
                },
                ProductAvailabilityPolicy: shared.PolicyProductAvailabilityPolicyEnumWhitelist.ToPointer(),
                ProductPolicy: []shared.ProductPolicy{
                    shared.ProductPolicy{
                        AutoInstallPolicy: &shared.AutoInstallPolicy{
                            AutoInstallConstraint: []shared.AutoInstallConstraint{
                                shared.AutoInstallConstraint{
                                    ChargingStateConstraint: shared.AutoInstallConstraintChargingStateConstraintEnumChargingStateConstraintUnspecified.ToPointer(),
                                    DeviceIdleStateConstraint: shared.AutoInstallConstraintDeviceIdleStateConstraintEnumDeviceIdleNotRequired.ToPointer(),
                                    NetworkTypeConstraint: shared.AutoInstallConstraintNetworkTypeConstraintEnumNetworkTypeConstraintUnspecified.ToPointer(),
                                },
                            },
                            AutoInstallMode: shared.AutoInstallPolicyAutoInstallModeEnumForceAutoInstall.ToPointer(),
                            AutoInstallPriority: sdk.Int(315428),
                            MinimumVersionCode: sdk.Int(607831),
                        },
                        AutoUpdateMode: shared.ProductPolicyAutoUpdateModeEnumAutoUpdateDefault.ToPointer(),
                        EnterpriseAuthenticationAppLinkConfigs: []shared.EnterpriseAuthenticationAppLinkConfig{
                            shared.EnterpriseAuthenticationAppLinkConfig{
                                URI: sdk.String("https://antique-housework.name"),
                            },
                            shared.EnterpriseAuthenticationAppLinkConfig{
                                URI: sdk.String("https://well-off-brace.name"),
                            },
                        },
                        ManagedConfiguration: &shared.ManagedConfiguration{
                            ConfigurationVariables: &shared.ConfigurationVariables{
                                McmID: sdk.String("dolorem"),
                                VariableSet: []shared.VariableSet{
                                    shared.VariableSet{
                                        Placeholder: sdk.String("consequuntur"),
                                        UserValue: sdk.String("repellat"),
                                    },
                                    shared.VariableSet{
                                        Placeholder: sdk.String("mollitia"),
                                        UserValue: sdk.String("occaecati"),
                                    },
                                    shared.VariableSet{
                                        Placeholder: sdk.String("numquam"),
                                        UserValue: sdk.String("commodi"),
                                    },
                                },
                            },
                            Kind: sdk.String("quam"),
                            ManagedProperty: []shared.ManagedProperty{
                                shared.ManagedProperty{
                                    Key: sdk.String("velit"),
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
                                                shared.ManagedProperty{},
                                            },
                                        },
                                    },
                                    ValueInteger: sdk.Int(110375),
                                    ValueString: sdk.String("laborum"),
                                    ValueStringArray: []string{
                                        "enim",
                                        "odit",
                                        "quo",
                                    },
                                },
                                shared.ManagedProperty{
                                    Key: sdk.String("sequi"),
                                    ValueBool: sdk.Bool(false),
                                    ValueBundle: &shared.ManagedPropertyBundle{
                                        ManagedProperty: []shared.ManagedProperty{
                                            shared.ManagedProperty{},
                                            shared.ManagedProperty{},
                                            shared.ManagedProperty{},
                                            shared.ManagedProperty{},
                                        },
                                    },
                                    ValueBundleArray: []shared.ManagedPropertyBundle{
                                        shared.ManagedPropertyBundle{
                                            ManagedProperty: []shared.ManagedProperty{
                                                shared.ManagedProperty{},
                                                shared.ManagedProperty{},
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
                                    ValueInteger: sdk.Int(13571),
                                    ValueString: sdk.String("quasi"),
                                    ValueStringArray: []string{
                                        "temporibus",
                                        "laborum",
                                        "quasi",
                                    },
                                },
                            },
                            ProductID: sdk.String("reiciendis"),
                        },
                        ProductID: sdk.String("voluptatibus"),
                        TrackIds: []string{
                            "nihil",
                            "praesentium",
                            "voluptatibus",
                            "ipsa",
                        },
                        Tracks: []shared.ProductPolicyTracksEnum{
                            shared.ProductPolicyTracksEnumProduction,
                            shared.ProductPolicyTracksEnumBeta,
                            shared.ProductPolicyTracksEnumAppTrackUnspecified,
                        },
                    },
                    shared.ProductPolicy{
                        AutoInstallPolicy: &shared.AutoInstallPolicy{
                            AutoInstallConstraint: []shared.AutoInstallConstraint{
                                shared.AutoInstallConstraint{
                                    ChargingStateConstraint: shared.AutoInstallConstraintChargingStateConstraintEnumChargingNotRequired.ToPointer(),
                                    DeviceIdleStateConstraint: shared.AutoInstallConstraintDeviceIdleStateConstraintEnumDeviceIdleStateConstraintUnspecified.ToPointer(),
                                    NetworkTypeConstraint: shared.AutoInstallConstraintNetworkTypeConstraintEnumUnmeteredNetwork.ToPointer(),
                                },
                            },
                            AutoInstallMode: shared.AutoInstallPolicyAutoInstallModeEnumAutoInstallModeUnspecified.ToPointer(),
                            AutoInstallPriority: sdk.Int(359444),
                            MinimumVersionCode: sdk.Int(296140),
                        },
                        AutoUpdateMode: shared.ProductPolicyAutoUpdateModeEnumAutoUpdateDefault.ToPointer(),
                        EnterpriseAuthenticationAppLinkConfigs: []shared.EnterpriseAuthenticationAppLinkConfig{
                            shared.EnterpriseAuthenticationAppLinkConfig{
                                URI: sdk.String("https://frugal-sympathy.info"),
                            },
                        },
                        ManagedConfiguration: &shared.ManagedConfiguration{
                            ConfigurationVariables: &shared.ConfigurationVariables{
                                McmID: sdk.String("repudiandae"),
                                VariableSet: []shared.VariableSet{
                                    shared.VariableSet{
                                        Placeholder: sdk.String("ipsum"),
                                        UserValue: sdk.String("quidem"),
                                    },
                                },
                            },
                            Kind: sdk.String("molestias"),
                            ManagedProperty: []shared.ManagedProperty{
                                shared.ManagedProperty{
                                    Key: sdk.String("pariatur"),
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
                                        shared.ManagedPropertyBundle{
                                            ManagedProperty: []shared.ManagedProperty{
                                                shared.ManagedProperty{},
                                            },
                                        },
                                    },
                                    ValueInteger: sdk.Int(921158),
                                    ValueString: sdk.String("sint"),
                                    ValueStringArray: []string{
                                        "itaque",
                                    },
                                },
                                shared.ManagedProperty{
                                    Key: sdk.String("incidunt"),
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
                                                shared.ManagedProperty{},
                                            },
                                        },
                                    },
                                    ValueInteger: sdk.Int(842342),
                                    ValueString: sdk.String("explicabo"),
                                    ValueStringArray: []string{
                                        "distinctio",
                                        "quibusdam",
                                        "labore",
                                    },
                                },
                                shared.ManagedProperty{
                                    Key: sdk.String("modi"),
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
                                    ValueInteger: sdk.Int(20107),
                                    ValueString: sdk.String("magni"),
                                    ValueStringArray: []string{
                                        "ipsam",
                                        "alias",
                                        "fugit",
                                        "dolorum",
                                    },
                                },
                            },
                            ProductID: sdk.String("excepturi"),
                        },
                        ProductID: sdk.String("tempora"),
                        TrackIds: []string{
                            "tempore",
                            "labore",
                            "delectus",
                        },
                        Tracks: []shared.ProductPolicyTracksEnum{
                            shared.ProductPolicyTracksEnumAppTrackUnspecified,
                            shared.ProductPolicyTracksEnumAlpha,
                        },
                    },
                    shared.ProductPolicy{
                        AutoInstallPolicy: &shared.AutoInstallPolicy{
                            AutoInstallConstraint: []shared.AutoInstallConstraint{
                                shared.AutoInstallConstraint{
                                    ChargingStateConstraint: shared.AutoInstallConstraintChargingStateConstraintEnumChargingNotRequired.ToPointer(),
                                    DeviceIdleStateConstraint: shared.AutoInstallConstraintDeviceIdleStateConstraintEnumDeviceIdleNotRequired.ToPointer(),
                                    NetworkTypeConstraint: shared.AutoInstallConstraintNetworkTypeConstraintEnumUnmeteredNetwork.ToPointer(),
                                },
                                shared.AutoInstallConstraint{
                                    ChargingStateConstraint: shared.AutoInstallConstraintChargingStateConstraintEnumChargingNotRequired.ToPointer(),
                                    DeviceIdleStateConstraint: shared.AutoInstallConstraintDeviceIdleStateConstraintEnumDeviceIdleNotRequired.ToPointer(),
                                    NetworkTypeConstraint: shared.AutoInstallConstraintNetworkTypeConstraintEnumNetworkTypeConstraintUnspecified.ToPointer(),
                                },
                                shared.AutoInstallConstraint{
                                    ChargingStateConstraint: shared.AutoInstallConstraintChargingStateConstraintEnumChargingRequired.ToPointer(),
                                    DeviceIdleStateConstraint: shared.AutoInstallConstraintDeviceIdleStateConstraintEnumDeviceIdleRequired.ToPointer(),
                                    NetworkTypeConstraint: shared.AutoInstallConstraintNetworkTypeConstraintEnumUnmeteredNetwork.ToPointer(),
                                },
                            },
                            AutoInstallMode: shared.AutoInstallPolicyAutoInstallModeEnumDoNotAutoInstall.ToPointer(),
                            AutoInstallPriority: sdk.Int(449198),
                            MinimumVersionCode: sdk.Int(846409),
                        },
                        AutoUpdateMode: shared.ProductPolicyAutoUpdateModeEnumAutoUpdateHighPriority.ToPointer(),
                        EnterpriseAuthenticationAppLinkConfigs: []shared.EnterpriseAuthenticationAppLinkConfig{
                            shared.EnterpriseAuthenticationAppLinkConfig{
                                URI: sdk.String("http://fond-salute.net"),
                            },
                            shared.EnterpriseAuthenticationAppLinkConfig{
                                URI: sdk.String("http://humming-police.org"),
                            },
                            shared.EnterpriseAuthenticationAppLinkConfig{
                                URI: sdk.String("http://oblong-epoxy.org"),
                            },
                        },
                        ManagedConfiguration: &shared.ManagedConfiguration{
                            ConfigurationVariables: &shared.ConfigurationVariables{
                                McmID: sdk.String("delectus"),
                                VariableSet: []shared.VariableSet{
                                    shared.VariableSet{
                                        Placeholder: sdk.String("provident"),
                                        UserValue: sdk.String("nam"),
                                    },
                                    shared.VariableSet{
                                        Placeholder: sdk.String("id"),
                                        UserValue: sdk.String("blanditiis"),
                                    },
                                    shared.VariableSet{
                                        Placeholder: sdk.String("deleniti"),
                                        UserValue: sdk.String("sapiente"),
                                    },
                                },
                            },
                            Kind: sdk.String("amet"),
                            ManagedProperty: []shared.ManagedProperty{
                                shared.ManagedProperty{
                                    Key: sdk.String("nisi"),
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
                                                shared.ManagedProperty{},
                                            },
                                        },
                                        shared.ManagedPropertyBundle{
                                            ManagedProperty: []shared.ManagedProperty{
                                                shared.ManagedProperty{},
                                                shared.ManagedProperty{},
                                            },
                                        },
                                        shared.ManagedPropertyBundle{
                                            ManagedProperty: []shared.ManagedProperty{
                                                shared.ManagedProperty{},
                                            },
                                        },
                                    },
                                    ValueInteger: sdk.Int(470132),
                                    ValueString: sdk.String("magnam"),
                                    ValueStringArray: []string{
                                        "id",
                                        "labore",
                                        "labore",
                                    },
                                },
                                shared.ManagedProperty{
                                    Key: sdk.String("suscipit"),
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
                                        shared.ManagedPropertyBundle{
                                            ManagedProperty: []shared.ManagedProperty{
                                                shared.ManagedProperty{},
                                            },
                                        },
                                    },
                                    ValueInteger: sdk.Int(102863),
                                    ValueString: sdk.String("magnam"),
                                    ValueStringArray: []string{
                                        "excepturi",
                                    },
                                },
                                shared.ManagedProperty{
                                    Key: sdk.String("ullam"),
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
                                                shared.ManagedProperty{},
                                                shared.ManagedProperty{},
                                            },
                                        },
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
                                            },
                                        },
                                    },
                                    ValueInteger: sdk.Int(968962),
                                    ValueString: sdk.String("mollitia"),
                                    ValueStringArray: []string{
                                        "eum",
                                        "dolor",
                                    },
                                },
                            },
                            ProductID: sdk.String("necessitatibus"),
                        },
                        ProductID: sdk.String("odit"),
                        TrackIds: []string{
                            "quasi",
                            "iure",
                        },
                        Tracks: []shared.ProductPolicyTracksEnum{
                            shared.ProductPolicyTracksEnumAlpha,
                            shared.ProductPolicyTracksEnumProduction,
                            shared.ProductPolicyTracksEnumAlpha,
                            shared.ProductPolicyTracksEnumBeta,
                        },
                    },
                },
            },
            Product: sdk.String("facilis"),
            Report: &shared.DeviceReport{
                AppState: []shared.AppState{
                    shared.AppState{
                        KeyedAppState: []shared.KeyedAppState{
                            shared.KeyedAppState{
                                Data: sdk.String("architecto"),
                                Key: sdk.String("repudiandae"),
                                Message: sdk.String("ullam"),
                                Severity: shared.KeyedAppStateSeverityEnumSeverityError.ToPointer(),
                                StateTimestampMillis: sdk.String("nihil"),
                            },
                        },
                        PackageName: sdk.String("repellat"),
                    },
                    shared.AppState{
                        KeyedAppState: []shared.KeyedAppState{
                            shared.KeyedAppState{
                                Data: sdk.String("sed"),
                                Key: sdk.String("saepe"),
                                Message: sdk.String("pariatur"),
                                Severity: shared.KeyedAppStateSeverityEnumSeverityUnknown.ToPointer(),
                                StateTimestampMillis: sdk.String("consequuntur"),
                            },
                            shared.KeyedAppState{
                                Data: sdk.String("praesentium"),
                                Key: sdk.String("natus"),
                                Message: sdk.String("magni"),
                                Severity: shared.KeyedAppStateSeverityEnumSeverityUnknown.ToPointer(),
                                StateTimestampMillis: sdk.String("quo"),
                            },
                            shared.KeyedAppState{
                                Data: sdk.String("illum"),
                                Key: sdk.String("pariatur"),
                                Message: sdk.String("maxime"),
                                Severity: shared.KeyedAppStateSeverityEnumSeverityInfo.ToPointer(),
                                StateTimestampMillis: sdk.String("excepturi"),
                            },
                            shared.KeyedAppState{
                                Data: sdk.String("odit"),
                                Key: sdk.String("ea"),
                                Message: sdk.String("accusantium"),
                                Severity: shared.KeyedAppStateSeverityEnumSeverityUnknown.ToPointer(),
                                StateTimestampMillis: sdk.String("maiores"),
                            },
                        },
                        PackageName: sdk.String("quidem"),
                    },
                },
                LastUpdatedTimestampMillis: sdk.String("ipsam"),
            },
            RetailBrand: sdk.String("voluptate"),
            SDKVersion: sdk.Int(420075),
        },
        AccessToken: sdk.String("nam"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("pariatur"),
        DeviceID: "nemo",
        EnterpriseID: "voluptatibus",
        Fields: sdk.String("perferendis"),
        Key: sdk.String("fugiat"),
        OauthToken: sdk.String("amet"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("aut"),
        UpdateMask: sdk.String("cumque"),
        UploadType: sdk.String("corporis"),
        UploadProtocol: sdk.String("hic"),
        UserID: "libero",
    }, operations.AndroidenterpriseDevicesUpdateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Device != nil {
        // handle response
    }
}
```
