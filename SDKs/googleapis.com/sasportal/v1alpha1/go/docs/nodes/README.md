# Nodes

### Available Operations

* [SasportalNodesDevicesSignDevice](#sasportalnodesdevicessigndevice) - Signs a device.
* [SasportalNodesDevicesUpdateSigned](#sasportalnodesdevicesupdatesigned) - Updates a signed device.
* [SasportalNodesNodesDelete](#sasportalnodesnodesdelete) - Deletes a node.
* [SasportalNodesNodesDeploymentsCreate](#sasportalnodesnodesdeploymentscreate) - Creates a new deployment.
* [SasportalNodesNodesDeploymentsList](#sasportalnodesnodesdeploymentslist) - Lists deployments.
* [SasportalNodesNodesDevicesCreate](#sasportalnodesnodesdevicescreate) - Creates a device under a node or customer.
* [SasportalNodesNodesDevicesCreateSigned](#sasportalnodesnodesdevicescreatesigned) - Creates a signed device under a node or customer.
* [SasportalNodesNodesDevicesList](#sasportalnodesnodesdeviceslist) - Lists devices under a node or customer.
* [SasportalNodesNodesGet](#sasportalnodesnodesget) - Returns a requested node.
* [SasportalNodesNodesMove](#sasportalnodesnodesmove) - Moves a node under another node or customer.
* [SasportalNodesNodesNodesCreate](#sasportalnodesnodesnodescreate) - Creates a new node.
* [SasportalNodesNodesNodesList](#sasportalnodesnodesnodeslist) - Lists nodes.
* [SasportalNodesNodesPatch](#sasportalnodesnodespatch) - Updates an existing node.

## SasportalNodesDevicesSignDevice

Signs a device.

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
    res, err := s.Nodes.SasportalNodesDevicesSignDevice(ctx, operations.SasportalNodesDevicesSignDeviceRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        SasPortalSignDeviceRequestInput: &shared.SasPortalSignDeviceRequestInput{
            Device: &shared.SasPortalDeviceInput{
                ActiveConfig: &shared.SasPortalDeviceConfig{
                    AirInterface: &shared.SasPortalDeviceAirInterface{
                        RadioTechnology: shared.SasPortalDeviceAirInterfaceRadioTechnologyEnumCw.ToPointer(),
                        SupportedSpec: sdk.String("esse"),
                    },
                    CallSign: sdk.String("ipsum"),
                    Category: shared.SasPortalDeviceConfigCategoryEnumDeviceCategoryA.ToPointer(),
                    InstallationParams: &shared.SasPortalInstallationParams{
                        AntennaAzimuth: sdk.Int(135218),
                        AntennaBeamwidth: sdk.Int(18789),
                        AntennaDowntilt: sdk.Int(324141),
                        AntennaGain: sdk.Int(617636),
                        AntennaGainNewField: sdk.Float64(1496.75),
                        AntennaModel: sdk.String("iste"),
                        CpeCbsdIndication: sdk.Bool(false),
                        EirpCapability: sdk.Int(222321),
                        EirpCapabilityNewField: sdk.Float64(6169.34),
                        Height: sdk.Float64(3864.89),
                        HeightType: shared.SasPortalInstallationParamsHeightTypeEnumHeightTypeAmsl.ToPointer(),
                        HorizontalAccuracy: sdk.Float64(9025.99),
                        IndoorDeployment: sdk.Bool(false),
                        Latitude: sdk.Float64(6818.2),
                        Longitude: sdk.Float64(4499.5),
                        VerticalAccuracy: sdk.Float64(3595.08),
                    },
                    IsSigned: sdk.Bool(false),
                    MeasurementCapabilities: []shared.SasPortalDeviceConfigMeasurementCapabilitiesEnum{
                        shared.SasPortalDeviceConfigMeasurementCapabilitiesEnumMeasurementCapabilityReceivedPowerWithGrant,
                        shared.SasPortalDeviceConfigMeasurementCapabilitiesEnumMeasurementCapabilityReceivedPowerWithoutGrant,
                        shared.SasPortalDeviceConfigMeasurementCapabilitiesEnumMeasurementCapabilityReceivedPowerWithoutGrant,
                    },
                    Model: &shared.SasPortalDeviceModel{
                        FirmwareVersion: sdk.String("architecto"),
                        HardwareVersion: sdk.String("ipsa"),
                        Name: sdk.String("Carlton O'Hara"),
                        SoftwareVersion: sdk.String("dolorem"),
                        Vendor: sdk.String("corporis"),
                    },
                    State: shared.SasPortalDeviceConfigStateEnumDeviceConfigStateUnspecified.ToPointer(),
                    UpdateTime: sdk.String("nobis"),
                    UserID: sdk.String("enim"),
                },
                DeviceMetadata: &shared.SasPortalDeviceMetadataInput{
                    AntennaModel: sdk.String("omnis"),
                    CommonChannelGroup: sdk.String("nemo"),
                    InterferenceCoordinationGroup: sdk.String("minima"),
                    NrqzValidation: &shared.SasPortalNrqzValidation{
                        CaseID: sdk.String("excepturi"),
                        CpiID: sdk.String("accusantium"),
                        Latitude: sdk.Float64(4386.01),
                        Longitude: sdk.Float64(6342.74),
                        State: shared.SasPortalNrqzValidationStateEnumFinal.ToPointer(),
                    },
                },
                DisplayName: sdk.String("sapiente"),
                FccID: sdk.String("architecto"),
                GrantRangeAllowlists: []shared.SasPortalFrequencyRange{
                    shared.SasPortalFrequencyRange{
                        HighFrequencyMhz: sdk.Float64(2088.76),
                        LowFrequencyMhz: sdk.Float64(6350.59),
                    },
                    shared.SasPortalFrequencyRange{
                        HighFrequencyMhz: sdk.Float64(1613.09),
                        LowFrequencyMhz: sdk.Float64(9953),
                    },
                    shared.SasPortalFrequencyRange{
                        HighFrequencyMhz: sdk.Float64(6531.08),
                        LowFrequencyMhz: sdk.Float64(5818.5),
                    },
                },
                Grants: []shared.SasPortalDeviceGrant{
                    shared.SasPortalDeviceGrant{
                        ChannelType: shared.SasPortalDeviceGrantChannelTypeEnumChannelTypeGaa.ToPointer(),
                        ExpireTime: sdk.String("quam"),
                        FrequencyRange: &shared.SasPortalFrequencyRange{
                            HighFrequencyMhz: sdk.Float64(4746.97),
                            LowFrequencyMhz: sdk.Float64(2444.25),
                        },
                        GrantID: sdk.String("error"),
                        LastHeartbeatTransmitExpireTime: sdk.String("quia"),
                        MaxEirp: sdk.Float64(3380.07),
                        MoveList: []shared.SasPortalDpaMoveList{
                            shared.SasPortalDpaMoveList{
                                DpaID: sdk.String("laborum"),
                                FrequencyRange: &shared.SasPortalFrequencyRange{
                                    HighFrequencyMhz: sdk.Float64(6563.3),
                                    LowFrequencyMhz: sdk.Float64(3172.02),
                                },
                            },
                        },
                        State: shared.SasPortalDeviceGrantStateEnumGrantStateUnspecified.ToPointer(),
                        SuspensionReason: []string{
                            "sequi",
                            "tenetur",
                            "ipsam",
                            "id",
                        },
                    },
                    shared.SasPortalDeviceGrant{
                        ChannelType: shared.SasPortalDeviceGrantChannelTypeEnumChannelTypePal.ToPointer(),
                        ExpireTime: sdk.String("aut"),
                        FrequencyRange: &shared.SasPortalFrequencyRange{
                            HighFrequencyMhz: sdk.Float64(971.01),
                            LowFrequencyMhz: sdk.Float64(6228.46),
                        },
                        GrantID: sdk.String("temporibus"),
                        LastHeartbeatTransmitExpireTime: sdk.String("laborum"),
                        MaxEirp: sdk.Float64(960.98),
                        MoveList: []shared.SasPortalDpaMoveList{
                            shared.SasPortalDpaMoveList{
                                DpaID: sdk.String("voluptatibus"),
                                FrequencyRange: &shared.SasPortalFrequencyRange{
                                    HighFrequencyMhz: sdk.Float64(8781.94),
                                    LowFrequencyMhz: sdk.Float64(4686.51),
                                },
                            },
                            shared.SasPortalDpaMoveList{
                                DpaID: sdk.String("praesentium"),
                                FrequencyRange: &shared.SasPortalFrequencyRange{
                                    HighFrequencyMhz: sdk.Float64(9767.62),
                                    LowFrequencyMhz: sdk.Float64(557.14),
                                },
                            },
                            shared.SasPortalDpaMoveList{
                                DpaID: sdk.String("omnis"),
                                FrequencyRange: &shared.SasPortalFrequencyRange{
                                    HighFrequencyMhz: sdk.Float64(4511.59),
                                    LowFrequencyMhz: sdk.Float64(7392.64),
                                },
                            },
                            shared.SasPortalDpaMoveList{
                                DpaID: sdk.String("perferendis"),
                                FrequencyRange: &shared.SasPortalFrequencyRange{
                                    HighFrequencyMhz: sdk.Float64(391.87),
                                    LowFrequencyMhz: sdk.Float64(4417.11),
                                },
                            },
                        },
                        State: shared.SasPortalDeviceGrantStateEnumGrantStateGranted.ToPointer(),
                        SuspensionReason: []string{
                            "dicta",
                            "corporis",
                            "dolore",
                            "iusto",
                        },
                    },
                },
                Name: sdk.String("Maryann Hamill"),
                PreloadedConfig: &shared.SasPortalDeviceConfig{
                    AirInterface: &shared.SasPortalDeviceAirInterface{
                        RadioTechnology: shared.SasPortalDeviceAirInterfaceRadioTechnologyEnumTaranaWireless.ToPointer(),
                        SupportedSpec: sdk.String("quae"),
                    },
                    CallSign: sdk.String("ipsum"),
                    Category: shared.SasPortalDeviceConfigCategoryEnumDeviceCategoryB.ToPointer(),
                    InstallationParams: &shared.SasPortalInstallationParams{
                        AntennaAzimuth: sdk.Int(565189),
                        AntennaBeamwidth: sdk.Int(566602),
                        AntennaDowntilt: sdk.Int(865103),
                        AntennaGain: sdk.Int(265389),
                        AntennaGainNewField: sdk.Float64(5089.69),
                        AntennaModel: sdk.String("rem"),
                        CpeCbsdIndication: sdk.Bool(false),
                        EirpCapability: sdk.Int(916723),
                        EirpCapabilityNewField: sdk.Float64(939.4),
                        Height: sdk.Float64(9211.58),
                        HeightType: shared.SasPortalInstallationParamsHeightTypeEnumHeightTypeAgl.ToPointer(),
                        HorizontalAccuracy: sdk.Float64(831.12),
                        IndoorDeployment: sdk.Bool(false),
                        Latitude: sdk.Float64(9292.97),
                        Longitude: sdk.Float64(2777.18),
                        VerticalAccuracy: sdk.Float64(3185.69),
                    },
                    IsSigned: sdk.Bool(false),
                    MeasurementCapabilities: []shared.SasPortalDeviceConfigMeasurementCapabilitiesEnum{
                        shared.SasPortalDeviceConfigMeasurementCapabilitiesEnumMeasurementCapabilityReceivedPowerWithoutGrant,
                    },
                    Model: &shared.SasPortalDeviceModel{
                        FirmwareVersion: sdk.String("quibusdam"),
                        HardwareVersion: sdk.String("explicabo"),
                        Name: sdk.String("Rudy Spencer"),
                        SoftwareVersion: sdk.String("qui"),
                        Vendor: sdk.String("aliquid"),
                    },
                    State: shared.SasPortalDeviceConfigStateEnumDraft.ToPointer(),
                    UpdateTime: sdk.String("quos"),
                    UserID: sdk.String("perferendis"),
                },
                SerialNumber: sdk.String("magni"),
                State: shared.SasPortalDeviceStateEnumDeregistered.ToPointer(),
            },
        },
        AccessToken: sdk.String("ipsam"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("fugit"),
        Fields: sdk.String("dolorum"),
        Key: sdk.String("excepturi"),
        Name: "Olivia Rice",
        OauthToken: sdk.String("eum"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("non"),
        UploadType: sdk.String("eligendi"),
        UploadProtocol: sdk.String("sint"),
    }, operations.SasportalNodesDevicesSignDeviceSecurity{
        Option1: &operations.SasportalNodesDevicesSignDeviceSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SasPortalEmpty != nil {
        // handle response
    }
}
```

## SasportalNodesDevicesUpdateSigned

Updates a signed device.

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
    res, err := s.Nodes.SasportalNodesDevicesUpdateSigned(ctx, operations.SasportalNodesDevicesUpdateSignedRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        SasPortalUpdateSignedDeviceRequest: &shared.SasPortalUpdateSignedDeviceRequest{
            EncodedDevice: sdk.String("provident"),
            InstallerID: sdk.String("necessitatibus"),
        },
        AccessToken: sdk.String("sint"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("dolor"),
        Fields: sdk.String("debitis"),
        Key: sdk.String("a"),
        Name: "Arnold Kirlin",
        OauthToken: sdk.String("rerum"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dicta"),
        UploadType: sdk.String("magnam"),
        UploadProtocol: sdk.String("cumque"),
    }, operations.SasportalNodesDevicesUpdateSignedSecurity{
        Option1: &operations.SasportalNodesDevicesUpdateSignedSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SasPortalDevice != nil {
        // handle response
    }
}
```

## SasportalNodesNodesDelete

Deletes a node.

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
    res, err := s.Nodes.SasportalNodesNodesDelete(ctx, operations.SasportalNodesNodesDeleteRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("ea"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("laborum"),
        Fields: sdk.String("accusamus"),
        Key: sdk.String("non"),
        Name: "Jon Tillman",
        OauthToken: sdk.String("provident"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("nam"),
        UploadType: sdk.String("id"),
        UploadProtocol: sdk.String("blanditiis"),
    }, operations.SasportalNodesNodesDeleteSecurity{
        Option1: &operations.SasportalNodesNodesDeleteSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SasPortalEmpty != nil {
        // handle response
    }
}
```

## SasportalNodesNodesDeploymentsCreate

Creates a new deployment.

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
    res, err := s.Nodes.SasportalNodesNodesDeploymentsCreate(ctx, operations.SasportalNodesNodesDeploymentsCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        SasPortalDeploymentInput: &shared.SasPortalDeploymentInput{
            DisplayName: sdk.String("sapiente"),
            SasUserIds: []string{
                "deserunt",
            },
        },
        AccessToken: sdk.String("nisi"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("natus"),
        Fields: sdk.String("omnis"),
        Key: sdk.String("molestiae"),
        OauthToken: sdk.String("perferendis"),
        Parent: "nihil",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("magnam"),
        UploadType: sdk.String("distinctio"),
        UploadProtocol: sdk.String("id"),
    }, operations.SasportalNodesNodesDeploymentsCreateSecurity{
        Option1: &operations.SasportalNodesNodesDeploymentsCreateSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SasPortalDeployment != nil {
        // handle response
    }
}
```

## SasportalNodesNodesDeploymentsList

Lists deployments.

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
    res, err := s.Nodes.SasportalNodesNodesDeploymentsList(ctx, operations.SasportalNodesNodesDeploymentsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("labore"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("natus"),
        Fields: sdk.String("nobis"),
        Filter: sdk.String("eum"),
        Key: sdk.String("vero"),
        OauthToken: sdk.String("aspernatur"),
        PageSize: sdk.Int64(102863),
        PageToken: sdk.String("magnam"),
        Parent: "et",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("excepturi"),
        UploadType: sdk.String("ullam"),
        UploadProtocol: sdk.String("provident"),
    }, operations.SasportalNodesNodesDeploymentsListSecurity{
        Option1: &operations.SasportalNodesNodesDeploymentsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SasPortalListDeploymentsResponse != nil {
        // handle response
    }
}
```

## SasportalNodesNodesDevicesCreate

Creates a device under a node or customer.

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
    res, err := s.Nodes.SasportalNodesNodesDevicesCreate(ctx, operations.SasportalNodesNodesDevicesCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        SasPortalDeviceInput: &shared.SasPortalDeviceInput{
            ActiveConfig: &shared.SasPortalDeviceConfig{
                AirInterface: &shared.SasPortalDeviceAirInterface{
                    RadioTechnology: shared.SasPortalDeviceAirInterfaceRadioTechnologyEnumDoodleCbrs.ToPointer(),
                    SupportedSpec: sdk.String("accusantium"),
                },
                CallSign: sdk.String("mollitia"),
                Category: shared.SasPortalDeviceConfigCategoryEnumDeviceCategoryB.ToPointer(),
                InstallationParams: &shared.SasPortalInstallationParams{
                    AntennaAzimuth: sdk.Int(652103),
                    AntennaBeamwidth: sdk.Int(320997),
                    AntennaDowntilt: sdk.Int(431418),
                    AntennaGain: sdk.Int(221262),
                    AntennaGainNewField: sdk.Float64(8965.47),
                    AntennaModel: sdk.String("odit"),
                    CpeCbsdIndication: sdk.Bool(false),
                    EirpCapability: sdk.Int(367562),
                    EirpCapabilityNewField: sdk.Float64(972.6),
                    Height: sdk.Float64(4358.65),
                    HeightType: shared.SasPortalInstallationParamsHeightTypeEnumHeightTypeAmsl.ToPointer(),
                    HorizontalAccuracy: sdk.Float64(8919.24),
                    IndoorDeployment: sdk.Bool(false),
                    Latitude: sdk.Float64(2603.41),
                    Longitude: sdk.Float64(8061.94),
                    VerticalAccuracy: sdk.Float64(5370.23),
                },
                IsSigned: sdk.Bool(false),
                MeasurementCapabilities: []shared.SasPortalDeviceConfigMeasurementCapabilitiesEnum{
                    shared.SasPortalDeviceConfigMeasurementCapabilitiesEnumMeasurementCapabilityReceivedPowerWithGrant,
                    shared.SasPortalDeviceConfigMeasurementCapabilitiesEnumMeasurementCapabilityUnspecified,
                    shared.SasPortalDeviceConfigMeasurementCapabilitiesEnumMeasurementCapabilityUnspecified,
                },
                Model: &shared.SasPortalDeviceModel{
                    FirmwareVersion: sdk.String("repudiandae"),
                    HardwareVersion: sdk.String("ullam"),
                    Name: sdk.String("Jessie Zulauf"),
                    SoftwareVersion: sdk.String("saepe"),
                    Vendor: sdk.String("pariatur"),
                },
                State: shared.SasPortalDeviceConfigStateEnumDeviceConfigStateUnspecified.ToPointer(),
                UpdateTime: sdk.String("consequuntur"),
                UserID: sdk.String("praesentium"),
            },
            DeviceMetadata: &shared.SasPortalDeviceMetadataInput{
                AntennaModel: sdk.String("natus"),
                CommonChannelGroup: sdk.String("magni"),
                InterferenceCoordinationGroup: sdk.String("sunt"),
                NrqzValidation: &shared.SasPortalNrqzValidation{
                    CaseID: sdk.String("quo"),
                    CpiID: sdk.String("illum"),
                    Latitude: sdk.Float64(8649.34),
                    Longitude: sdk.Float64(8073.19),
                    State: shared.SasPortalNrqzValidationStateEnumDraft.ToPointer(),
                },
            },
            DisplayName: sdk.String("excepturi"),
            FccID: sdk.String("odit"),
            GrantRangeAllowlists: []shared.SasPortalFrequencyRange{
                shared.SasPortalFrequencyRange{
                    HighFrequencyMhz: sdk.Float64(332.22),
                    LowFrequencyMhz: sdk.Float64(691.67),
                },
                shared.SasPortalFrequencyRange{
                    HighFrequencyMhz: sdk.Float64(9825.75),
                    LowFrequencyMhz: sdk.Float64(6974.29),
                },
            },
            Grants: []shared.SasPortalDeviceGrant{
                shared.SasPortalDeviceGrant{
                    ChannelType: shared.SasPortalDeviceGrantChannelTypeEnumChannelTypeGaa.ToPointer(),
                    ExpireTime: sdk.String("autem"),
                    FrequencyRange: &shared.SasPortalFrequencyRange{
                        HighFrequencyMhz: sdk.Float64(7220.56),
                        LowFrequencyMhz: sdk.Float64(505.88),
                    },
                    GrantID: sdk.String("pariatur"),
                    LastHeartbeatTransmitExpireTime: sdk.String("nemo"),
                    MaxEirp: sdk.Float64(9755.22),
                    MoveList: []shared.SasPortalDpaMoveList{
                        shared.SasPortalDpaMoveList{
                            DpaID: sdk.String("fugiat"),
                            FrequencyRange: &shared.SasPortalFrequencyRange{
                                HighFrequencyMhz: sdk.Float64(2307.42),
                                LowFrequencyMhz: sdk.Float64(117.14),
                            },
                        },
                    },
                    State: shared.SasPortalDeviceGrantStateEnumGrantStateAuthorized.ToPointer(),
                    SuspensionReason: []string{
                        "hic",
                        "libero",
                    },
                },
                shared.SasPortalDeviceGrant{
                    ChannelType: shared.SasPortalDeviceGrantChannelTypeEnumChannelTypePal.ToPointer(),
                    ExpireTime: sdk.String("dolores"),
                    FrequencyRange: &shared.SasPortalFrequencyRange{
                        HighFrequencyMhz: sdk.Float64(3394.04),
                        LowFrequencyMhz: sdk.Float64(5210.37),
                    },
                    GrantID: sdk.String("dignissimos"),
                    LastHeartbeatTransmitExpireTime: sdk.String("eaque"),
                    MaxEirp: sdk.Float64(3389.85),
                    MoveList: []shared.SasPortalDpaMoveList{
                        shared.SasPortalDpaMoveList{
                            DpaID: sdk.String("eos"),
                            FrequencyRange: &shared.SasPortalFrequencyRange{
                                HighFrequencyMhz: sdk.Float64(185.21),
                                LowFrequencyMhz: sdk.Float64(1709.86),
                            },
                        },
                    },
                    State: shared.SasPortalDeviceGrantStateEnumGrantStateAuthorized.ToPointer(),
                    SuspensionReason: []string{
                        "dolor",
                        "vero",
                    },
                },
            },
            Name: sdk.String("Mindy Walter"),
            PreloadedConfig: &shared.SasPortalDeviceConfig{
                AirInterface: &shared.SasPortalDeviceAirInterface{
                    RadioTechnology: shared.SasPortalDeviceAirInterfaceRadioTechnologyEnumDoodleCbrs.ToPointer(),
                    SupportedSpec: sdk.String("voluptatem"),
                },
                CallSign: sdk.String("porro"),
                Category: shared.SasPortalDeviceConfigCategoryEnumDeviceCategoryUnspecified.ToPointer(),
                InstallationParams: &shared.SasPortalInstallationParams{
                    AntennaAzimuth: sdk.Int(500026),
                    AntennaBeamwidth: sdk.Int(621479),
                    AntennaDowntilt: sdk.Int(50370),
                    AntennaGain: sdk.Int(577229),
                    AntennaGainNewField: sdk.Float64(6990.98),
                    AntennaModel: sdk.String("adipisci"),
                    CpeCbsdIndication: sdk.Bool(false),
                    EirpCapability: sdk.Int(992397),
                    EirpCapabilityNewField: sdk.Float64(9342.14),
                    Height: sdk.Float64(2672.62),
                    HeightType: shared.SasPortalInstallationParamsHeightTypeEnumHeightTypeAgl.ToPointer(),
                    HorizontalAccuracy: sdk.Float64(6790.91),
                    IndoorDeployment: sdk.Bool(false),
                    Latitude: sdk.Float64(5356.33),
                    Longitude: sdk.Float64(8642.82),
                    VerticalAccuracy: sdk.Float64(5899.1),
                },
                IsSigned: sdk.Bool(false),
                MeasurementCapabilities: []shared.SasPortalDeviceConfigMeasurementCapabilitiesEnum{
                    shared.SasPortalDeviceConfigMeasurementCapabilitiesEnumMeasurementCapabilityReceivedPowerWithoutGrant,
                    shared.SasPortalDeviceConfigMeasurementCapabilitiesEnumMeasurementCapabilityReceivedPowerWithoutGrant,
                    shared.SasPortalDeviceConfigMeasurementCapabilitiesEnumMeasurementCapabilityUnspecified,
                    shared.SasPortalDeviceConfigMeasurementCapabilitiesEnumMeasurementCapabilityReceivedPowerWithGrant,
                },
                Model: &shared.SasPortalDeviceModel{
                    FirmwareVersion: sdk.String("aliquid"),
                    HardwareVersion: sdk.String("dolorem"),
                    Name: sdk.String("Rosa Dibbert"),
                    SoftwareVersion: sdk.String("excepturi"),
                    Vendor: sdk.String("cum"),
                },
                State: shared.SasPortalDeviceConfigStateEnumDraft.ToPointer(),
                UpdateTime: sdk.String("dignissimos"),
                UserID: sdk.String("reiciendis"),
            },
            SerialNumber: sdk.String("amet"),
            State: shared.SasPortalDeviceStateEnumRegistered.ToPointer(),
        },
        AccessToken: sdk.String("numquam"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("ipsa"),
        Fields: sdk.String("ipsa"),
        Key: sdk.String("iure"),
        OauthToken: sdk.String("odio"),
        Parent: "quaerat",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("accusamus"),
        UploadType: sdk.String("quidem"),
        UploadProtocol: sdk.String("voluptatibus"),
    }, operations.SasportalNodesNodesDevicesCreateSecurity{
        Option1: &operations.SasportalNodesNodesDevicesCreateSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SasPortalDevice != nil {
        // handle response
    }
}
```

## SasportalNodesNodesDevicesCreateSigned

Creates a signed device under a node or customer.

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
    res, err := s.Nodes.SasportalNodesNodesDevicesCreateSigned(ctx, operations.SasportalNodesNodesDevicesCreateSignedRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        SasPortalCreateSignedDeviceRequest: &shared.SasPortalCreateSignedDeviceRequest{
            EncodedDevice: sdk.String("natus"),
            InstallerID: sdk.String("eos"),
        },
        AccessToken: sdk.String("atque"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("fugiat"),
        Fields: sdk.String("ab"),
        Key: sdk.String("soluta"),
        OauthToken: sdk.String("dolorum"),
        Parent: "iusto",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("voluptate"),
        UploadType: sdk.String("dolorum"),
        UploadProtocol: sdk.String("deleniti"),
    }, operations.SasportalNodesNodesDevicesCreateSignedSecurity{
        Option1: &operations.SasportalNodesNodesDevicesCreateSignedSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SasPortalDevice != nil {
        // handle response
    }
}
```

## SasportalNodesNodesDevicesList

Lists devices under a node or customer.

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
    res, err := s.Nodes.SasportalNodesNodesDevicesList(ctx, operations.SasportalNodesNodesDevicesListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("necessitatibus"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("asperiores"),
        Fields: sdk.String("nihil"),
        Filter: sdk.String("ipsum"),
        Key: sdk.String("voluptate"),
        OauthToken: sdk.String("id"),
        PageSize: sdk.Int64(906418),
        PageToken: sdk.String("eius"),
        Parent: "aspernatur",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("perferendis"),
        UploadType: sdk.String("amet"),
        UploadProtocol: sdk.String("optio"),
    }, operations.SasportalNodesNodesDevicesListSecurity{
        Option1: &operations.SasportalNodesNodesDevicesListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SasPortalListDevicesResponse != nil {
        // handle response
    }
}
```

## SasportalNodesNodesGet

Returns a requested node.

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
    res, err := s.Nodes.SasportalNodesNodesGet(ctx, operations.SasportalNodesNodesGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("ad"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("suscipit"),
        Fields: sdk.String("deserunt"),
        Key: sdk.String("provident"),
        Name: "Kari Leannon PhD",
        OauthToken: sdk.String("quaerat"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("tempora"),
        UploadType: sdk.String("vel"),
        UploadProtocol: sdk.String("quod"),
    }, operations.SasportalNodesNodesGetSecurity{
        Option1: &operations.SasportalNodesNodesGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SasPortalNode != nil {
        // handle response
    }
}
```

## SasportalNodesNodesMove

Moves a node under another node or customer.

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
    res, err := s.Nodes.SasportalNodesNodesMove(ctx, operations.SasportalNodesNodesMoveRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        SasPortalMoveNodeRequest: &shared.SasPortalMoveNodeRequest{
            Destination: sdk.String("qui"),
        },
        AccessToken: sdk.String("dolorum"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("esse"),
        Fields: sdk.String("harum"),
        Key: sdk.String("iusto"),
        Name: "Rosalie White",
        OauthToken: sdk.String("accusamus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("numquam"),
        UploadType: sdk.String("enim"),
        UploadProtocol: sdk.String("dolorem"),
    }, operations.SasportalNodesNodesMoveSecurity{
        Option1: &operations.SasportalNodesNodesMoveSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SasPortalOperation != nil {
        // handle response
    }
}
```

## SasportalNodesNodesNodesCreate

Creates a new node.

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
    res, err := s.Nodes.SasportalNodesNodesNodesCreate(ctx, operations.SasportalNodesNodesNodesCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        SasPortalNode: &shared.SasPortalNode{
            DisplayName: sdk.String("totam"),
            Name: sdk.String("Karen Rath"),
            SasUserIds: []string{
                "libero",
                "voluptas",
            },
        },
        AccessToken: sdk.String("deserunt"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("ipsum"),
        Fields: sdk.String("incidunt"),
        Key: sdk.String("qui"),
        OauthToken: sdk.String("cupiditate"),
        Parent: "maxime",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("pariatur"),
        UploadType: sdk.String("soluta"),
        UploadProtocol: sdk.String("dicta"),
    }, operations.SasportalNodesNodesNodesCreateSecurity{
        Option1: &operations.SasportalNodesNodesNodesCreateSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SasPortalNode != nil {
        // handle response
    }
}
```

## SasportalNodesNodesNodesList

Lists nodes.

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
    res, err := s.Nodes.SasportalNodesNodesNodesList(ctx, operations.SasportalNodesNodesNodesListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("totam"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("aspernatur"),
        Fields: sdk.String("dolores"),
        Filter: sdk.String("distinctio"),
        Key: sdk.String("facilis"),
        OauthToken: sdk.String("aliquid"),
        PageSize: sdk.Int64(463150),
        PageToken: sdk.String("molestias"),
        Parent: "temporibus",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("qui"),
        UploadType: sdk.String("neque"),
        UploadProtocol: sdk.String("fugit"),
    }, operations.SasportalNodesNodesNodesListSecurity{
        Option1: &operations.SasportalNodesNodesNodesListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SasPortalListNodesResponse != nil {
        // handle response
    }
}
```

## SasportalNodesNodesPatch

Updates an existing node.

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
    res, err := s.Nodes.SasportalNodesNodesPatch(ctx, operations.SasportalNodesNodesPatchRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        SasPortalNode: &shared.SasPortalNode{
            DisplayName: sdk.String("odio"),
            Name: sdk.String("Marion Reichert DDS"),
            SasUserIds: []string{
                "nobis",
                "et",
                "saepe",
            },
        },
        AccessToken: sdk.String("ipsum"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("nobis"),
        Fields: sdk.String("quos"),
        Key: sdk.String("tempore"),
        Name: "Kevin Willms",
        OauthToken: sdk.String("labore"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("adipisci"),
        UpdateMask: sdk.String("dolorum"),
        UploadType: sdk.String("architecto"),
        UploadProtocol: sdk.String("quae"),
    }, operations.SasportalNodesNodesPatchSecurity{
        Option1: &operations.SasportalNodesNodesPatchSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SasPortalNode != nil {
        // handle response
    }
}
```
