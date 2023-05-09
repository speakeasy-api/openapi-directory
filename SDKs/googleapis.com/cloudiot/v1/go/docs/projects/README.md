# Projects

### Available Operations

* [CloudiotProjectsLocationsRegistriesBindDeviceToGateway](#cloudiotprojectslocationsregistriesbinddevicetogateway) - Associates the device with the gateway.
* [CloudiotProjectsLocationsRegistriesCreate](#cloudiotprojectslocationsregistriescreate) - Creates a device registry that contains devices.
* [CloudiotProjectsLocationsRegistriesDevicesConfigVersionsList](#cloudiotprojectslocationsregistriesdevicesconfigversionslist) - Lists the last few versions of the device configuration in descending order (i.e.: newest first).
* [CloudiotProjectsLocationsRegistriesDevicesCreate](#cloudiotprojectslocationsregistriesdevicescreate) - Creates a device in a device registry.
* [CloudiotProjectsLocationsRegistriesDevicesDelete](#cloudiotprojectslocationsregistriesdevicesdelete) - Deletes a device.
* [CloudiotProjectsLocationsRegistriesDevicesGet](#cloudiotprojectslocationsregistriesdevicesget) - Gets details about a device.
* [CloudiotProjectsLocationsRegistriesDevicesModifyCloudToDeviceConfig](#cloudiotprojectslocationsregistriesdevicesmodifycloudtodeviceconfig) - Modifies the configuration for the device, which is eventually sent from the Cloud IoT Core servers. Returns the modified configuration version and its metadata.
* [CloudiotProjectsLocationsRegistriesDevicesPatch](#cloudiotprojectslocationsregistriesdevicespatch) - Updates a device.
* [CloudiotProjectsLocationsRegistriesDevicesSendCommandToDevice](#cloudiotprojectslocationsregistriesdevicessendcommandtodevice) - Sends a command to the specified device. In order for a device to be able to receive commands, it must: 1) be connected to Cloud IoT Core using the MQTT protocol, and 2) be subscribed to the group of MQTT topics specified by /devices/{device-id}/commands/#. This subscription will receive commands at the top-level topic /devices/{device-id}/commands as well as commands for subfolders, like /devices/{device-id}/commands/subfolder. Note that subscribing to specific subfolders is not supported. If the command could not be delivered to the device, this method will return an error; in particular, if the device is not subscribed, this method will return FAILED_PRECONDITION. Otherwise, this method will return OK. If the subscription is QoS 1, at least once delivery will be guaranteed; for QoS 0, no acknowledgment will be expected from the device.
* [CloudiotProjectsLocationsRegistriesDevicesStatesList](#cloudiotprojectslocationsregistriesdevicesstateslist) - Lists the last few versions of the device state in descending order (i.e.: newest first).
* [CloudiotProjectsLocationsRegistriesGroupsDevicesList](#cloudiotprojectslocationsregistriesgroupsdeviceslist) - List devices in a device registry.
* [CloudiotProjectsLocationsRegistriesGroupsGetIamPolicy](#cloudiotprojectslocationsregistriesgroupsgetiampolicy) - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* [CloudiotProjectsLocationsRegistriesGroupsSetIamPolicy](#cloudiotprojectslocationsregistriesgroupssetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy.
* [CloudiotProjectsLocationsRegistriesGroupsTestIamPermissions](#cloudiotprojectslocationsregistriesgroupstestiampermissions) - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.
* [CloudiotProjectsLocationsRegistriesList](#cloudiotprojectslocationsregistrieslist) - Lists device registries.
* [CloudiotProjectsLocationsRegistriesUnbindDeviceFromGateway](#cloudiotprojectslocationsregistriesunbinddevicefromgateway) - Deletes the association between the device and the gateway.

## CloudiotProjectsLocationsRegistriesBindDeviceToGateway

Associates the device with the gateway.

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
    res, err := s.Projects.CloudiotProjectsLocationsRegistriesBindDeviceToGateway(ctx, operations.CloudiotProjectsLocationsRegistriesBindDeviceToGatewayRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        BindDeviceToGatewayRequest: &shared.BindDeviceToGatewayRequest{
            DeviceID: sdk.String("debitis"),
            GatewayID: sdk.String("ipsa"),
        },
        AccessToken: sdk.String("delectus"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("suscipit"),
        Fields: sdk.String("molestiae"),
        Key: sdk.String("minus"),
        OauthToken: sdk.String("placeat"),
        Parent: "voluptatum",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("iusto"),
        UploadType: sdk.String("excepturi"),
        UploadProtocol: sdk.String("nisi"),
    }, operations.CloudiotProjectsLocationsRegistriesBindDeviceToGatewaySecurity{
        Option1: &operations.CloudiotProjectsLocationsRegistriesBindDeviceToGatewaySecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BindDeviceToGatewayResponse != nil {
        // handle response
    }
}
```

## CloudiotProjectsLocationsRegistriesCreate

Creates a device registry that contains devices.

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
    res, err := s.Projects.CloudiotProjectsLocationsRegistriesCreate(ctx, operations.CloudiotProjectsLocationsRegistriesCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        DeviceRegistry: &shared.DeviceRegistry{
            Credentials: []shared.RegistryCredential{
                shared.RegistryCredential{
                    PublicKeyCertificate: &shared.PublicKeyCertificate{
                        Certificate: sdk.String("ab"),
                        Format: shared.PublicKeyCertificateFormatEnumUnspecifiedPublicKeyCertificateFormat.ToPointer(),
                        X509Details: &shared.X509CertificateDetails{
                            ExpiryTime: sdk.String("veritatis"),
                            Issuer: sdk.String("deserunt"),
                            PublicKeyType: sdk.String("perferendis"),
                            SignatureAlgorithm: sdk.String("ipsam"),
                            StartTime: sdk.String("repellendus"),
                            Subject: sdk.String("sapiente"),
                        },
                    },
                },
                shared.RegistryCredential{
                    PublicKeyCertificate: &shared.PublicKeyCertificate{
                        Certificate: sdk.String("quo"),
                        Format: shared.PublicKeyCertificateFormatEnumUnspecifiedPublicKeyCertificateFormat.ToPointer(),
                        X509Details: &shared.X509CertificateDetails{
                            ExpiryTime: sdk.String("at"),
                            Issuer: sdk.String("at"),
                            PublicKeyType: sdk.String("maiores"),
                            SignatureAlgorithm: sdk.String("molestiae"),
                            StartTime: sdk.String("quod"),
                            Subject: sdk.String("quod"),
                        },
                    },
                },
                shared.RegistryCredential{
                    PublicKeyCertificate: &shared.PublicKeyCertificate{
                        Certificate: sdk.String("esse"),
                        Format: shared.PublicKeyCertificateFormatEnumX509CertificatePem.ToPointer(),
                        X509Details: &shared.X509CertificateDetails{
                            ExpiryTime: sdk.String("porro"),
                            Issuer: sdk.String("dolorum"),
                            PublicKeyType: sdk.String("dicta"),
                            SignatureAlgorithm: sdk.String("nam"),
                            StartTime: sdk.String("officia"),
                            Subject: sdk.String("occaecati"),
                        },
                    },
                },
                shared.RegistryCredential{
                    PublicKeyCertificate: &shared.PublicKeyCertificate{
                        Certificate: sdk.String("fugit"),
                        Format: shared.PublicKeyCertificateFormatEnumX509CertificatePem.ToPointer(),
                        X509Details: &shared.X509CertificateDetails{
                            ExpiryTime: sdk.String("hic"),
                            Issuer: sdk.String("optio"),
                            PublicKeyType: sdk.String("totam"),
                            SignatureAlgorithm: sdk.String("beatae"),
                            StartTime: sdk.String("commodi"),
                            Subject: sdk.String("molestiae"),
                        },
                    },
                },
            },
            EventNotificationConfigs: []shared.EventNotificationConfig{
                shared.EventNotificationConfig{
                    PubsubTopicName: sdk.String("qui"),
                    SubfolderMatches: sdk.String("impedit"),
                },
                shared.EventNotificationConfig{
                    PubsubTopicName: sdk.String("cum"),
                    SubfolderMatches: sdk.String("esse"),
                },
            },
            HTTPConfig: &shared.HTTPConfig{
                HTTPEnabledState: shared.HTTPConfigHTTPEnabledStateEnumHTTPStateUnspecified.ToPointer(),
            },
            ID: sdk.String("92059293-96fe-4a75-96eb-10faaa2352c5"),
            LogLevel: shared.DeviceRegistryLogLevelEnumInfo.ToPointer(),
            MqttConfig: &shared.MqttConfig{
                MqttEnabledState: shared.MqttConfigMqttEnabledStateEnumMqttEnabled.ToPointer(),
            },
            Name: sdk.String("Velma Batz"),
            StateNotificationConfig: &shared.StateNotificationConfig{
                PubsubTopicName: sdk.String("doloribus"),
            },
        },
        AccessToken: sdk.String("sapiente"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("mollitia"),
        Fields: sdk.String("dolorem"),
        Key: sdk.String("culpa"),
        OauthToken: sdk.String("consequuntur"),
        Parent: "repellat",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("mollitia"),
        UploadType: sdk.String("occaecati"),
        UploadProtocol: sdk.String("numquam"),
    }, operations.CloudiotProjectsLocationsRegistriesCreateSecurity{
        Option1: &operations.CloudiotProjectsLocationsRegistriesCreateSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeviceRegistry != nil {
        // handle response
    }
}
```

## CloudiotProjectsLocationsRegistriesDevicesConfigVersionsList

Lists the last few versions of the device configuration in descending order (i.e.: newest first).

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
    res, err := s.Projects.CloudiotProjectsLocationsRegistriesDevicesConfigVersionsList(ctx, operations.CloudiotProjectsLocationsRegistriesDevicesConfigVersionsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("quam"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("velit"),
        Fields: sdk.String("error"),
        Key: sdk.String("quia"),
        Name: "Gloria Padberg",
        NumVersions: sdk.Int64(138183),
        OauthToken: sdk.String("quo"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("sequi"),
        UploadType: sdk.String("tenetur"),
        UploadProtocol: sdk.String("ipsam"),
    }, operations.CloudiotProjectsLocationsRegistriesDevicesConfigVersionsListSecurity{
        Option1: &operations.CloudiotProjectsLocationsRegistriesDevicesConfigVersionsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListDeviceConfigVersionsResponse != nil {
        // handle response
    }
}
```

## CloudiotProjectsLocationsRegistriesDevicesCreate

Creates a device in a device registry.

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
    res, err := s.Projects.CloudiotProjectsLocationsRegistriesDevicesCreate(ctx, operations.CloudiotProjectsLocationsRegistriesDevicesCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        Device: &shared.Device{
            Blocked: sdk.Bool(false),
            Config: &shared.DeviceConfig{
                BinaryData: sdk.String("possimus"),
                CloudUpdateTime: sdk.String("aut"),
                DeviceAckTime: sdk.String("quasi"),
                Version: sdk.String("error"),
            },
            Credentials: []shared.DeviceCredential{
                shared.DeviceCredential{
                    ExpirationTime: sdk.String("laborum"),
                    PublicKey: &shared.PublicKeyCredential{
                        Format: shared.PublicKeyCredentialFormatEnumUnspecifiedPublicKeyFormat.ToPointer(),
                        Key: sdk.String("reiciendis"),
                    },
                },
                shared.DeviceCredential{
                    ExpirationTime: sdk.String("voluptatibus"),
                    PublicKey: &shared.PublicKeyCredential{
                        Format: shared.PublicKeyCredentialFormatEnumEs256X509Pem.ToPointer(),
                        Key: sdk.String("nihil"),
                    },
                },
                shared.DeviceCredential{
                    ExpirationTime: sdk.String("praesentium"),
                    PublicKey: &shared.PublicKeyCredential{
                        Format: shared.PublicKeyCredentialFormatEnumEs256X509Pem.ToPointer(),
                        Key: sdk.String("ipsa"),
                    },
                },
                shared.DeviceCredential{
                    ExpirationTime: sdk.String("omnis"),
                    PublicKey: &shared.PublicKeyCredential{
                        Format: shared.PublicKeyCredentialFormatEnumRsaX509Pem.ToPointer(),
                        Key: sdk.String("cum"),
                    },
                },
            },
            GatewayConfig: &shared.GatewayConfig{
                GatewayAuthMethod: shared.GatewayConfigGatewayAuthMethodEnumGatewayAuthMethodUnspecified.ToPointer(),
                GatewayType: shared.GatewayConfigGatewayTypeEnumGatewayTypeUnspecified.ToPointer(),
                LastAccessedGatewayID: sdk.String("reprehenderit"),
                LastAccessedGatewayTime: sdk.String("ut"),
            },
            ID: sdk.String("f15471b5-e6e1-43b9-9d48-8e1e91e450ad"),
            LastConfigAckTime: sdk.String("explicabo"),
            LastConfigSendTime: sdk.String("deserunt"),
            LastErrorStatus: &shared.Status{
                Code: sdk.Int(716327),
                Details: []map[string]interface{}{
                    map[string]interface{}{
                        "modi": "qui",
                        "aliquid": "cupiditate",
                    },
                    map[string]interface{}{
                        "perferendis": "magni",
                        "assumenda": "ipsam",
                        "alias": "fugit",
                    },
                    map[string]interface{}{
                        "excepturi": "tempora",
                        "facilis": "tempore",
                        "labore": "delectus",
                    },
                    map[string]interface{}{
                        "non": "eligendi",
                        "sint": "aliquid",
                    },
                },
                Message: sdk.String("provident"),
            },
            LastErrorTime: sdk.String("necessitatibus"),
            LastEventTime: sdk.String("sint"),
            LastHeartbeatTime: sdk.String("officia"),
            LastStateTime: sdk.String("dolor"),
            LogLevel: shared.DeviceLogLevelEnumDebug.ToPointer(),
            Metadata: map[string]string{
                "dolorum": "in",
                "in": "illum",
                "maiores": "rerum",
                "dicta": "magnam",
            },
            Name: sdk.String("Irving Jenkins"),
            NumID: sdk.String("accusamus"),
            State: &shared.DeviceState{
                BinaryData: sdk.String("non"),
                UpdateTime: sdk.String("occaecati"),
            },
        },
        AccessToken: sdk.String("enim"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("delectus"),
        Fields: sdk.String("quidem"),
        Key: sdk.String("provident"),
        OauthToken: sdk.String("nam"),
        Parent: "id",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("blanditiis"),
        UploadType: sdk.String("deleniti"),
        UploadProtocol: sdk.String("sapiente"),
    }, operations.CloudiotProjectsLocationsRegistriesDevicesCreateSecurity{
        Option1: &operations.CloudiotProjectsLocationsRegistriesDevicesCreateSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Device != nil {
        // handle response
    }
}
```

## CloudiotProjectsLocationsRegistriesDevicesDelete

Deletes a device.

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
    res, err := s.Projects.CloudiotProjectsLocationsRegistriesDevicesDelete(ctx, operations.CloudiotProjectsLocationsRegistriesDevicesDeleteRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("deserunt"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("vel"),
        Fields: sdk.String("natus"),
        Key: sdk.String("omnis"),
        Name: "Dorothy Kovacek",
        OauthToken: sdk.String("id"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("labore"),
        UploadType: sdk.String("labore"),
        UploadProtocol: sdk.String("suscipit"),
    }, operations.CloudiotProjectsLocationsRegistriesDevicesDeleteSecurity{
        Option1: &operations.CloudiotProjectsLocationsRegistriesDevicesDeleteSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
}
```

## CloudiotProjectsLocationsRegistriesDevicesGet

Gets details about a device.

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
    res, err := s.Projects.CloudiotProjectsLocationsRegistriesDevicesGet(ctx, operations.CloudiotProjectsLocationsRegistriesDevicesGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("nobis"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("vero"),
        FieldMask: sdk.String("aspernatur"),
        Fields: sdk.String("architecto"),
        Key: sdk.String("magnam"),
        Name: "Miriam Hermann",
        OauthToken: sdk.String("sint"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("accusantium"),
        UploadType: sdk.String("mollitia"),
        UploadProtocol: sdk.String("reiciendis"),
    }, operations.CloudiotProjectsLocationsRegistriesDevicesGetSecurity{
        Option1: &operations.CloudiotProjectsLocationsRegistriesDevicesGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Device != nil {
        // handle response
    }
}
```

## CloudiotProjectsLocationsRegistriesDevicesModifyCloudToDeviceConfig

Modifies the configuration for the device, which is eventually sent from the Cloud IoT Core servers. Returns the modified configuration version and its metadata.

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
    res, err := s.Projects.CloudiotProjectsLocationsRegistriesDevicesModifyCloudToDeviceConfig(ctx, operations.CloudiotProjectsLocationsRegistriesDevicesModifyCloudToDeviceConfigRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        ModifyCloudToDeviceConfigRequest: &shared.ModifyCloudToDeviceConfigRequest{
            BinaryData: sdk.String("ad"),
            VersionToUpdate: sdk.String("eum"),
        },
        AccessToken: sdk.String("dolor"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("odit"),
        Fields: sdk.String("nemo"),
        Key: sdk.String("quasi"),
        Name: "Melba Toy",
        OauthToken: sdk.String("deleniti"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("facilis"),
        UploadType: sdk.String("in"),
        UploadProtocol: sdk.String("architecto"),
    }, operations.CloudiotProjectsLocationsRegistriesDevicesModifyCloudToDeviceConfigSecurity{
        Option1: &operations.CloudiotProjectsLocationsRegistriesDevicesModifyCloudToDeviceConfigSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeviceConfig != nil {
        // handle response
    }
}
```

## CloudiotProjectsLocationsRegistriesDevicesPatch

Updates a device.

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
    res, err := s.Projects.CloudiotProjectsLocationsRegistriesDevicesPatch(ctx, operations.CloudiotProjectsLocationsRegistriesDevicesPatchRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        Device: &shared.Device{
            Blocked: sdk.Bool(false),
            Config: &shared.DeviceConfig{
                BinaryData: sdk.String("repudiandae"),
                CloudUpdateTime: sdk.String("ullam"),
                DeviceAckTime: sdk.String("expedita"),
                Version: sdk.String("nihil"),
            },
            Credentials: []shared.DeviceCredential{
                shared.DeviceCredential{
                    ExpirationTime: sdk.String("quibusdam"),
                    PublicKey: &shared.PublicKeyCredential{
                        Format: shared.PublicKeyCredentialFormatEnumUnspecifiedPublicKeyFormat.ToPointer(),
                        Key: sdk.String("saepe"),
                    },
                },
                shared.DeviceCredential{
                    ExpirationTime: sdk.String("pariatur"),
                    PublicKey: &shared.PublicKeyCredential{
                        Format: shared.PublicKeyCredentialFormatEnumUnspecifiedPublicKeyFormat.ToPointer(),
                        Key: sdk.String("consequuntur"),
                    },
                },
                shared.DeviceCredential{
                    ExpirationTime: sdk.String("praesentium"),
                    PublicKey: &shared.PublicKeyCredential{
                        Format: shared.PublicKeyCredentialFormatEnumEs256Pem.ToPointer(),
                        Key: sdk.String("magni"),
                    },
                },
                shared.DeviceCredential{
                    ExpirationTime: sdk.String("sunt"),
                    PublicKey: &shared.PublicKeyCredential{
                        Format: shared.PublicKeyCredentialFormatEnumEs256Pem.ToPointer(),
                        Key: sdk.String("illum"),
                    },
                },
            },
            GatewayConfig: &shared.GatewayConfig{
                GatewayAuthMethod: shared.GatewayConfigGatewayAuthMethodEnumAssociationAndDeviceAuthToken.ToPointer(),
                GatewayType: shared.GatewayConfigGatewayTypeEnumNonGateway.ToPointer(),
                LastAccessedGatewayID: sdk.String("ea"),
                LastAccessedGatewayTime: sdk.String("excepturi"),
            },
            ID: sdk.String("2601fb57-6b0d-45f0-930c-5fbb25870532"),
            LastConfigAckTime: sdk.String("perferendis"),
            LastConfigSendTime: sdk.String("dolores"),
            LastErrorStatus: &shared.Status{
                Code: sdk.Int(793698),
                Details: []map[string]interface{}{
                    map[string]interface{}{
                        "vero": "nostrum",
                    },
                    map[string]interface{}{
                        "recusandae": "omnis",
                        "facilis": "perspiciatis",
                        "voluptatem": "porro",
                        "consequuntur": "blanditiis",
                    },
                },
                Message: sdk.String("error"),
            },
            LastErrorTime: sdk.String("eaque"),
            LastEventTime: sdk.String("occaecati"),
            LastHeartbeatTime: sdk.String("rerum"),
            LastStateTime: sdk.String("adipisci"),
            LogLevel: shared.DeviceLogLevelEnumDebug.ToPointer(),
            Metadata: map[string]string{
                "modi": "iste",
                "dolorum": "deleniti",
                "pariatur": "provident",
                "nobis": "libero",
            },
            Name: sdk.String("Alex Luettgen"),
            NumID: sdk.String("dolorem"),
            State: &shared.DeviceState{
                BinaryData: sdk.String("dolor"),
                UpdateTime: sdk.String("qui"),
            },
        },
        AccessToken: sdk.String("ipsum"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("excepturi"),
        Fields: sdk.String("cum"),
        Key: sdk.String("voluptate"),
        Name: "Johanna Farrell",
        OauthToken: sdk.String("veritatis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ipsa"),
        UpdateMask: sdk.String("ipsa"),
        UploadType: sdk.String("iure"),
        UploadProtocol: sdk.String("odio"),
    }, operations.CloudiotProjectsLocationsRegistriesDevicesPatchSecurity{
        Option1: &operations.CloudiotProjectsLocationsRegistriesDevicesPatchSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Device != nil {
        // handle response
    }
}
```

## CloudiotProjectsLocationsRegistriesDevicesSendCommandToDevice

Sends a command to the specified device. In order for a device to be able to receive commands, it must: 1) be connected to Cloud IoT Core using the MQTT protocol, and 2) be subscribed to the group of MQTT topics specified by /devices/{device-id}/commands/#. This subscription will receive commands at the top-level topic /devices/{device-id}/commands as well as commands for subfolders, like /devices/{device-id}/commands/subfolder. Note that subscribing to specific subfolders is not supported. If the command could not be delivered to the device, this method will return an error; in particular, if the device is not subscribed, this method will return FAILED_PRECONDITION. Otherwise, this method will return OK. If the subscription is QoS 1, at least once delivery will be guaranteed; for QoS 0, no acknowledgment will be expected from the device.

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
    res, err := s.Projects.CloudiotProjectsLocationsRegistriesDevicesSendCommandToDevice(ctx, operations.CloudiotProjectsLocationsRegistriesDevicesSendCommandToDeviceRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        SendCommandToDeviceRequest: &shared.SendCommandToDeviceRequest{
            BinaryData: sdk.String("accusamus"),
            Subfolder: sdk.String("quidem"),
        },
        AccessToken: sdk.String("voluptatibus"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("natus"),
        Fields: sdk.String("eos"),
        Key: sdk.String("atque"),
        Name: "Ginger Bergstrom",
        OauthToken: sdk.String("iusto"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("voluptate"),
        UploadType: sdk.String("dolorum"),
        UploadProtocol: sdk.String("deleniti"),
    }, operations.CloudiotProjectsLocationsRegistriesDevicesSendCommandToDeviceSecurity{
        Option1: &operations.CloudiotProjectsLocationsRegistriesDevicesSendCommandToDeviceSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SendCommandToDeviceResponse != nil {
        // handle response
    }
}
```

## CloudiotProjectsLocationsRegistriesDevicesStatesList

Lists the last few versions of the device state in descending order (i.e.: newest first).

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
    res, err := s.Projects.CloudiotProjectsLocationsRegistriesDevicesStatesList(ctx, operations.CloudiotProjectsLocationsRegistriesDevicesStatesListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("necessitatibus"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("asperiores"),
        Fields: sdk.String("nihil"),
        Key: sdk.String("ipsum"),
        Name: "Alberta Ullrich",
        NumStates: sdk.Int64(20651),
        OauthToken: sdk.String("amet"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("optio"),
        UploadType: sdk.String("accusamus"),
        UploadProtocol: sdk.String("ad"),
    }, operations.CloudiotProjectsLocationsRegistriesDevicesStatesListSecurity{
        Option1: &operations.CloudiotProjectsLocationsRegistriesDevicesStatesListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListDeviceStatesResponse != nil {
        // handle response
    }
}
```

## CloudiotProjectsLocationsRegistriesGroupsDevicesList

List devices in a device registry.

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
    res, err := s.Projects.CloudiotProjectsLocationsRegistriesGroupsDevicesList(ctx, operations.CloudiotProjectsLocationsRegistriesGroupsDevicesListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("suscipit"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("provident"),
        DeviceIds: []string{
            "repellendus",
            "totam",
        },
        DeviceNumIds: []string{
            "alias",
            "at",
            "quaerat",
        },
        FieldMask: sdk.String("tempora"),
        Fields: sdk.String("vel"),
        GatewayListOptionsAssociationsDeviceID: sdk.String("quod"),
        GatewayListOptionsAssociationsGatewayID: sdk.String("officiis"),
        GatewayListOptionsGatewayType: operations.CloudiotProjectsLocationsRegistriesGroupsDevicesListGatewayListOptionsGatewayTypeEnumGatewayTypeUnspecified.ToPointer(),
        Key: sdk.String("dolorum"),
        OauthToken: sdk.String("a"),
        PageSize: sdk.Int64(456130),
        PageToken: sdk.String("harum"),
        Parent: "iusto",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ipsum"),
        UploadType: sdk.String("quisquam"),
        UploadProtocol: sdk.String("tenetur"),
    }, operations.CloudiotProjectsLocationsRegistriesGroupsDevicesListSecurity{
        Option1: &operations.CloudiotProjectsLocationsRegistriesGroupsDevicesListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListDevicesResponse != nil {
        // handle response
    }
}
```

## CloudiotProjectsLocationsRegistriesGroupsGetIamPolicy

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

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
    res, err := s.Projects.CloudiotProjectsLocationsRegistriesGroupsGetIamPolicy(ctx, operations.CloudiotProjectsLocationsRegistriesGroupsGetIamPolicyRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GetIamPolicyRequest: &shared.GetIamPolicyRequest{
            Options: &shared.GetPolicyOptions{
                RequestedPolicyVersion: sdk.Int(730856),
            },
        },
        AccessToken: sdk.String("accusamus"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("enim"),
        Fields: sdk.String("dolorem"),
        Key: sdk.String("sapiente"),
        OauthToken: sdk.String("totam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("nihil"),
        Resource: "sit",
        UploadType: sdk.String("expedita"),
        UploadProtocol: sdk.String("neque"),
    }, operations.CloudiotProjectsLocationsRegistriesGroupsGetIamPolicySecurity{
        Option1: &operations.CloudiotProjectsLocationsRegistriesGroupsGetIamPolicySecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Policy != nil {
        // handle response
    }
}
```

## CloudiotProjectsLocationsRegistriesGroupsSetIamPolicy

Sets the access control policy on the specified resource. Replaces any existing policy.

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
    res, err := s.Projects.CloudiotProjectsLocationsRegistriesGroupsSetIamPolicy(ctx, operations.CloudiotProjectsLocationsRegistriesGroupsSetIamPolicyRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        SetIamPolicyRequest: &shared.SetIamPolicyRequest{
            Policy: &shared.Policy{
                Bindings: []shared.Binding{
                    shared.Binding{
                        Condition: &shared.Expr{
                            Description: sdk.String("libero"),
                            Expression: sdk.String("voluptas"),
                            Location: sdk.String("deserunt"),
                            Title: sdk.String("Ms."),
                        },
                        Members: []string{
                            "incidunt",
                        },
                        Role: sdk.String("qui"),
                    },
                    shared.Binding{
                        Condition: &shared.Expr{
                            Description: sdk.String("cupiditate"),
                            Expression: sdk.String("maxime"),
                            Location: sdk.String("pariatur"),
                            Title: sdk.String("Miss"),
                        },
                        Members: []string{
                            "laborum",
                        },
                        Role: sdk.String("totam"),
                    },
                },
                Etag: sdk.String("incidunt"),
                Version: sdk.Int(132068),
            },
        },
        AccessToken: sdk.String("dolores"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("facilis"),
        Fields: sdk.String("aliquid"),
        Key: sdk.String("quam"),
        OauthToken: sdk.String("molestias"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("temporibus"),
        Resource: "qui",
        UploadType: sdk.String("neque"),
        UploadProtocol: sdk.String("fugit"),
    }, operations.CloudiotProjectsLocationsRegistriesGroupsSetIamPolicySecurity{
        Option1: &operations.CloudiotProjectsLocationsRegistriesGroupsSetIamPolicySecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Policy != nil {
        // handle response
    }
}
```

## CloudiotProjectsLocationsRegistriesGroupsTestIamPermissions

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.

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
    res, err := s.Projects.CloudiotProjectsLocationsRegistriesGroupsTestIamPermissions(ctx, operations.CloudiotProjectsLocationsRegistriesGroupsTestIamPermissionsRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        TestIamPermissionsRequest: &shared.TestIamPermissionsRequest{
            Permissions: []string{
                "sunt",
                "ullam",
            },
        },
        AccessToken: sdk.String("nam"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("voluptatem"),
        Fields: sdk.String("cumque"),
        Key: sdk.String("soluta"),
        OauthToken: sdk.String("nobis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("et"),
        Resource: "saepe",
        UploadType: sdk.String("ipsum"),
        UploadProtocol: sdk.String("veritatis"),
    }, operations.CloudiotProjectsLocationsRegistriesGroupsTestIamPermissionsSecurity{
        Option1: &operations.CloudiotProjectsLocationsRegistriesGroupsTestIamPermissionsSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TestIamPermissionsResponse != nil {
        // handle response
    }
}
```

## CloudiotProjectsLocationsRegistriesList

Lists device registries.

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
    res, err := s.Projects.CloudiotProjectsLocationsRegistriesList(ctx, operations.CloudiotProjectsLocationsRegistriesListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("quos"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("cupiditate"),
        Fields: sdk.String("aperiam"),
        Key: sdk.String("delectus"),
        OauthToken: sdk.String("dolorem"),
        PageSize: sdk.Int64(292147),
        PageToken: sdk.String("labore"),
        Parent: "adipisci",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dolorum"),
        UploadType: sdk.String("architecto"),
        UploadProtocol: sdk.String("quae"),
    }, operations.CloudiotProjectsLocationsRegistriesListSecurity{
        Option1: &operations.CloudiotProjectsLocationsRegistriesListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListDeviceRegistriesResponse != nil {
        // handle response
    }
}
```

## CloudiotProjectsLocationsRegistriesUnbindDeviceFromGateway

Deletes the association between the device and the gateway.

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
    res, err := s.Projects.CloudiotProjectsLocationsRegistriesUnbindDeviceFromGateway(ctx, operations.CloudiotProjectsLocationsRegistriesUnbindDeviceFromGatewayRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        UnbindDeviceFromGatewayRequest: &shared.UnbindDeviceFromGatewayRequest{
            DeviceID: sdk.String("quas"),
            GatewayID: sdk.String("itaque"),
        },
        AccessToken: sdk.String("consequatur"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("repellendus"),
        Fields: sdk.String("porro"),
        Key: sdk.String("doloribus"),
        OauthToken: sdk.String("ut"),
        Parent: "facilis",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("cupiditate"),
        UploadType: sdk.String("qui"),
        UploadProtocol: sdk.String("quae"),
    }, operations.CloudiotProjectsLocationsRegistriesUnbindDeviceFromGatewaySecurity{
        Option1: &operations.CloudiotProjectsLocationsRegistriesUnbindDeviceFromGatewaySecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UnbindDeviceFromGatewayResponse != nil {
        // handle response
    }
}
```
