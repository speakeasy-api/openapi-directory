# projects

### Available Operations

* [cloudiotProjectsLocationsRegistriesBindDeviceToGateway](#cloudiotprojectslocationsregistriesbinddevicetogateway) - Associates the device with the gateway.
* [cloudiotProjectsLocationsRegistriesCreate](#cloudiotprojectslocationsregistriescreate) - Creates a device registry that contains devices.
* [cloudiotProjectsLocationsRegistriesDevicesConfigVersionsList](#cloudiotprojectslocationsregistriesdevicesconfigversionslist) - Lists the last few versions of the device configuration in descending order (i.e.: newest first).
* [cloudiotProjectsLocationsRegistriesDevicesCreate](#cloudiotprojectslocationsregistriesdevicescreate) - Creates a device in a device registry.
* [cloudiotProjectsLocationsRegistriesDevicesDelete](#cloudiotprojectslocationsregistriesdevicesdelete) - Deletes a device.
* [cloudiotProjectsLocationsRegistriesDevicesGet](#cloudiotprojectslocationsregistriesdevicesget) - Gets details about a device.
* [cloudiotProjectsLocationsRegistriesDevicesModifyCloudToDeviceConfig](#cloudiotprojectslocationsregistriesdevicesmodifycloudtodeviceconfig) - Modifies the configuration for the device, which is eventually sent from the Cloud IoT Core servers. Returns the modified configuration version and its metadata.
* [cloudiotProjectsLocationsRegistriesDevicesPatch](#cloudiotprojectslocationsregistriesdevicespatch) - Updates a device.
* [cloudiotProjectsLocationsRegistriesDevicesSendCommandToDevice](#cloudiotprojectslocationsregistriesdevicessendcommandtodevice) - Sends a command to the specified device. In order for a device to be able to receive commands, it must: 1) be connected to Cloud IoT Core using the MQTT protocol, and 2) be subscribed to the group of MQTT topics specified by /devices/{device-id}/commands/#. This subscription will receive commands at the top-level topic /devices/{device-id}/commands as well as commands for subfolders, like /devices/{device-id}/commands/subfolder. Note that subscribing to specific subfolders is not supported. If the command could not be delivered to the device, this method will return an error; in particular, if the device is not subscribed, this method will return FAILED_PRECONDITION. Otherwise, this method will return OK. If the subscription is QoS 1, at least once delivery will be guaranteed; for QoS 0, no acknowledgment will be expected from the device.
* [cloudiotProjectsLocationsRegistriesDevicesStatesList](#cloudiotprojectslocationsregistriesdevicesstateslist) - Lists the last few versions of the device state in descending order (i.e.: newest first).
* [cloudiotProjectsLocationsRegistriesGroupsDevicesList](#cloudiotprojectslocationsregistriesgroupsdeviceslist) - List devices in a device registry.
* [cloudiotProjectsLocationsRegistriesGroupsGetIamPolicy](#cloudiotprojectslocationsregistriesgroupsgetiampolicy) - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* [cloudiotProjectsLocationsRegistriesGroupsSetIamPolicy](#cloudiotprojectslocationsregistriesgroupssetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy.
* [cloudiotProjectsLocationsRegistriesGroupsTestIamPermissions](#cloudiotprojectslocationsregistriesgroupstestiampermissions) - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.
* [cloudiotProjectsLocationsRegistriesList](#cloudiotprojectslocationsregistrieslist) - Lists device registries.
* [cloudiotProjectsLocationsRegistriesUnbindDeviceFromGateway](#cloudiotprojectslocationsregistriesunbinddevicefromgateway) - Deletes the association between the device and the gateway.

## cloudiotProjectsLocationsRegistriesBindDeviceToGateway

Associates the device with the gateway.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudiotProjectsLocationsRegistriesBindDeviceToGatewayRequest;
import org.openapis.openapi.models.operations.CloudiotProjectsLocationsRegistriesBindDeviceToGatewayResponse;
import org.openapis.openapi.models.operations.CloudiotProjectsLocationsRegistriesBindDeviceToGatewaySecurity;
import org.openapis.openapi.models.operations.CloudiotProjectsLocationsRegistriesBindDeviceToGatewaySecurityOption1;
import org.openapis.openapi.models.operations.CloudiotProjectsLocationsRegistriesBindDeviceToGatewaySecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.BindDeviceToGatewayRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudiotProjectsLocationsRegistriesBindDeviceToGatewayRequest req = new CloudiotProjectsLocationsRegistriesBindDeviceToGatewayRequest("ipsa") {{
                dollarXgafv = XgafvEnum.TWO;
                bindDeviceToGatewayRequest = new BindDeviceToGatewayRequest() {{
                    deviceId = "tempora";
                    gatewayId = "suscipit";
                }};;
                accessToken = "molestiae";
                alt = AltEnum.PROTO;
                callback = "placeat";
                fields = "voluptatum";
                key = "iusto";
                oauthToken = "excepturi";
                prettyPrint = false;
                quotaUser = "nisi";
                uploadType = "recusandae";
                uploadProtocol = "temporibus";
            }};            

            CloudiotProjectsLocationsRegistriesBindDeviceToGatewayResponse res = sdk.projects.cloudiotProjectsLocationsRegistriesBindDeviceToGateway(req, new CloudiotProjectsLocationsRegistriesBindDeviceToGatewaySecurity() {{
                option1 = new CloudiotProjectsLocationsRegistriesBindDeviceToGatewaySecurityOption1("ab", "quis") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.bindDeviceToGatewayResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudiotProjectsLocationsRegistriesCreate

Creates a device registry that contains devices.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudiotProjectsLocationsRegistriesCreateRequest;
import org.openapis.openapi.models.operations.CloudiotProjectsLocationsRegistriesCreateResponse;
import org.openapis.openapi.models.operations.CloudiotProjectsLocationsRegistriesCreateSecurity;
import org.openapis.openapi.models.operations.CloudiotProjectsLocationsRegistriesCreateSecurityOption1;
import org.openapis.openapi.models.operations.CloudiotProjectsLocationsRegistriesCreateSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.DeviceRegistry;
import org.openapis.openapi.models.shared.DeviceRegistryLogLevelEnum;
import org.openapis.openapi.models.shared.EventNotificationConfig;
import org.openapis.openapi.models.shared.HttpConfig;
import org.openapis.openapi.models.shared.HttpConfigHttpEnabledStateEnum;
import org.openapis.openapi.models.shared.MqttConfig;
import org.openapis.openapi.models.shared.MqttConfigMqttEnabledStateEnum;
import org.openapis.openapi.models.shared.PublicKeyCertificate;
import org.openapis.openapi.models.shared.PublicKeyCertificateFormatEnum;
import org.openapis.openapi.models.shared.RegistryCredential;
import org.openapis.openapi.models.shared.StateNotificationConfig;
import org.openapis.openapi.models.shared.X509CertificateDetails;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudiotProjectsLocationsRegistriesCreateRequest req = new CloudiotProjectsLocationsRegistriesCreateRequest("veritatis") {{
                dollarXgafv = XgafvEnum.TWO;
                deviceRegistry = new DeviceRegistry() {{
                    credentials = new org.openapis.openapi.models.shared.RegistryCredential[]{{
                        add(new RegistryCredential() {{
                            publicKeyCertificate = new PublicKeyCertificate() {{
                                certificate = "ipsam";
                                format = PublicKeyCertificateFormatEnum.X509_CERTIFICATE_PEM;
                                x509Details = new X509CertificateDetails() {{
                                    expiryTime = "sapiente";
                                    issuer = "quo";
                                    publicKeyType = "odit";
                                    signatureAlgorithm = "at";
                                    startTime = "at";
                                    subject = "maiores";
                                }};
                            }};
                        }}),
                    }};
                    eventNotificationConfigs = new org.openapis.openapi.models.shared.EventNotificationConfig[]{{
                        add(new EventNotificationConfig() {{
                            pubsubTopicName = "quod";
                            subfolderMatches = "quod";
                        }}),
                        add(new EventNotificationConfig() {{
                            pubsubTopicName = "esse";
                            subfolderMatches = "totam";
                        }}),
                    }};
                    httpConfig = new HttpConfig() {{
                        httpEnabledState = HttpConfigHttpEnabledStateEnum.HTTP_DISABLED;
                    }};;
                    id = "a1ba928f-c816-4742-8b73-9205929396fe";
                    logLevel = DeviceRegistryLogLevelEnum.INFO;
                    mqttConfig = new MqttConfig() {{
                        mqttEnabledState = MqttConfigMqttEnabledStateEnum.MQTT_ENABLED;
                    }};;
                    name = "Sheryl Kertzmann";
                    stateNotificationConfig = new StateNotificationConfig() {{
                        pubsubTopicName = "architecto";
                    }};;
                }};;
                accessToken = "ipsa";
                alt = AltEnum.PROTO;
                callback = "est";
                fields = "mollitia";
                key = "laborum";
                oauthToken = "dolores";
                prettyPrint = false;
                quotaUser = "dolorem";
                uploadType = "corporis";
                uploadProtocol = "explicabo";
            }};            

            CloudiotProjectsLocationsRegistriesCreateResponse res = sdk.projects.cloudiotProjectsLocationsRegistriesCreate(req, new CloudiotProjectsLocationsRegistriesCreateSecurity() {{
                option1 = new CloudiotProjectsLocationsRegistriesCreateSecurityOption1("nobis", "enim") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.deviceRegistry != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudiotProjectsLocationsRegistriesDevicesConfigVersionsList

Lists the last few versions of the device configuration in descending order (i.e.: newest first).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudiotProjectsLocationsRegistriesDevicesConfigVersionsListRequest;
import org.openapis.openapi.models.operations.CloudiotProjectsLocationsRegistriesDevicesConfigVersionsListResponse;
import org.openapis.openapi.models.operations.CloudiotProjectsLocationsRegistriesDevicesConfigVersionsListSecurity;
import org.openapis.openapi.models.operations.CloudiotProjectsLocationsRegistriesDevicesConfigVersionsListSecurityOption1;
import org.openapis.openapi.models.operations.CloudiotProjectsLocationsRegistriesDevicesConfigVersionsListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudiotProjectsLocationsRegistriesDevicesConfigVersionsListRequest req = new CloudiotProjectsLocationsRegistriesDevicesConfigVersionsListRequest("omnis") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "minima";
                alt = AltEnum.MEDIA;
                callback = "accusantium";
                fields = "iure";
                key = "culpa";
                numVersions = 988374L;
                oauthToken = "sapiente";
                prettyPrint = false;
                quotaUser = "architecto";
                uploadType = "mollitia";
                uploadProtocol = "dolorem";
            }};            

            CloudiotProjectsLocationsRegistriesDevicesConfigVersionsListResponse res = sdk.projects.cloudiotProjectsLocationsRegistriesDevicesConfigVersionsList(req, new CloudiotProjectsLocationsRegistriesDevicesConfigVersionsListSecurity() {{
                option1 = new CloudiotProjectsLocationsRegistriesDevicesConfigVersionsListSecurityOption1("culpa", "consequuntur") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.listDeviceConfigVersionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudiotProjectsLocationsRegistriesDevicesCreate

Creates a device in a device registry.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudiotProjectsLocationsRegistriesDevicesCreateRequest;
import org.openapis.openapi.models.operations.CloudiotProjectsLocationsRegistriesDevicesCreateResponse;
import org.openapis.openapi.models.operations.CloudiotProjectsLocationsRegistriesDevicesCreateSecurity;
import org.openapis.openapi.models.operations.CloudiotProjectsLocationsRegistriesDevicesCreateSecurityOption1;
import org.openapis.openapi.models.operations.CloudiotProjectsLocationsRegistriesDevicesCreateSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Device;
import org.openapis.openapi.models.shared.DeviceConfig;
import org.openapis.openapi.models.shared.DeviceCredential;
import org.openapis.openapi.models.shared.DeviceLogLevelEnum;
import org.openapis.openapi.models.shared.DeviceState;
import org.openapis.openapi.models.shared.GatewayConfig;
import org.openapis.openapi.models.shared.GatewayConfigGatewayAuthMethodEnum;
import org.openapis.openapi.models.shared.GatewayConfigGatewayTypeEnum;
import org.openapis.openapi.models.shared.PublicKeyCredential;
import org.openapis.openapi.models.shared.PublicKeyCredentialFormatEnum;
import org.openapis.openapi.models.shared.Status;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudiotProjectsLocationsRegistriesDevicesCreateRequest req = new CloudiotProjectsLocationsRegistriesDevicesCreateRequest("repellat") {{
                dollarXgafv = XgafvEnum.TWO;
                device = new Device() {{
                    blocked = false;
                    config = new DeviceConfig() {{
                        binaryData = "occaecati";
                        cloudUpdateTime = "numquam";
                        deviceAckTime = "commodi";
                        version = "quam";
                    }};;
                    credentials = new org.openapis.openapi.models.shared.DeviceCredential[]{{
                        add(new DeviceCredential() {{
                            expirationTime = "velit";
                            publicKey = new PublicKeyCredential() {{
                                format = PublicKeyCredentialFormatEnum.ES256_PEM;
                                key = "quia";
                            }};
                        }}),
                        add(new DeviceCredential() {{
                            expirationTime = "quis";
                            publicKey = new PublicKeyCredential() {{
                                format = PublicKeyCredentialFormatEnum.UNSPECIFIED_PUBLIC_KEY_FORMAT;
                                key = "laborum";
                            }};
                        }}),
                    }};
                    gatewayConfig = new GatewayConfig() {{
                        gatewayAuthMethod = GatewayConfigGatewayAuthMethodEnum.DEVICE_AUTH_TOKEN_ONLY;
                        gatewayType = GatewayConfigGatewayTypeEnum.GATEWAY_TYPE_UNSPECIFIED;
                        lastAccessedGatewayId = "odit";
                        lastAccessedGatewayTime = "quo";
                    }};;
                    id = "3f5ad019-da1f-4fe7-8f09-7b0074f15471";
                    lastConfigAckTime = "harum";
                    lastConfigSendTime = "enim";
                    lastErrorStatus = new Status() {{
                        code = 880476;
                        details = new java.util.HashMap<String, Object>[]{{
                            add(new java.util.HashMap<String, Object>() {{
                                put("quae", "ipsum");
                                put("quidem", "molestias");
                                put("excepturi", "pariatur");
                                put("modi", "praesentium");
                            }}),
                            add(new java.util.HashMap<String, Object>() {{
                                put("voluptates", "quasi");
                                put("repudiandae", "sint");
                                put("veritatis", "itaque");
                            }}),
                        }};
                        message = "incidunt";
                    }};;
                    lastErrorTime = "enim";
                    lastEventTime = "consequatur";
                    lastHeartbeatTime = "est";
                    lastStateTime = "quibusdam";
                    logLevel = DeviceLogLevelEnum.LOG_LEVEL_UNSPECIFIED;
                    metadata = new java.util.HashMap<String, String>() {{
                        put("distinctio", "quibusdam");
                        put("labore", "modi");
                        put("qui", "aliquid");
                    }};
                    name = "Isaac Aufderhar";
                    numId = "ipsam";
                    state = new DeviceState() {{
                        binaryData = "alias";
                        updateTime = "fugit";
                    }};;
                }};;
                accessToken = "dolorum";
                alt = AltEnum.MEDIA;
                callback = "tempora";
                fields = "facilis";
                key = "tempore";
                oauthToken = "labore";
                prettyPrint = false;
                quotaUser = "delectus";
                uploadType = "eum";
                uploadProtocol = "non";
            }};            

            CloudiotProjectsLocationsRegistriesDevicesCreateResponse res = sdk.projects.cloudiotProjectsLocationsRegistriesDevicesCreate(req, new CloudiotProjectsLocationsRegistriesDevicesCreateSecurity() {{
                option1 = new CloudiotProjectsLocationsRegistriesDevicesCreateSecurityOption1("eligendi", "sint") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.device != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudiotProjectsLocationsRegistriesDevicesDelete

Deletes a device.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudiotProjectsLocationsRegistriesDevicesDeleteRequest;
import org.openapis.openapi.models.operations.CloudiotProjectsLocationsRegistriesDevicesDeleteResponse;
import org.openapis.openapi.models.operations.CloudiotProjectsLocationsRegistriesDevicesDeleteSecurity;
import org.openapis.openapi.models.operations.CloudiotProjectsLocationsRegistriesDevicesDeleteSecurityOption1;
import org.openapis.openapi.models.operations.CloudiotProjectsLocationsRegistriesDevicesDeleteSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudiotProjectsLocationsRegistriesDevicesDeleteRequest req = new CloudiotProjectsLocationsRegistriesDevicesDeleteRequest("aliquid") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "necessitatibus";
                alt = AltEnum.MEDIA;
                callback = "officia";
                fields = "dolor";
                key = "debitis";
                oauthToken = "a";
                prettyPrint = false;
                quotaUser = "dolorum";
                uploadType = "in";
                uploadProtocol = "in";
            }};            

            CloudiotProjectsLocationsRegistriesDevicesDeleteResponse res = sdk.projects.cloudiotProjectsLocationsRegistriesDevicesDelete(req, new CloudiotProjectsLocationsRegistriesDevicesDeleteSecurity() {{
                option1 = new CloudiotProjectsLocationsRegistriesDevicesDeleteSecurityOption1("illum", "maiores") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.empty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudiotProjectsLocationsRegistriesDevicesGet

Gets details about a device.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudiotProjectsLocationsRegistriesDevicesGetRequest;
import org.openapis.openapi.models.operations.CloudiotProjectsLocationsRegistriesDevicesGetResponse;
import org.openapis.openapi.models.operations.CloudiotProjectsLocationsRegistriesDevicesGetSecurity;
import org.openapis.openapi.models.operations.CloudiotProjectsLocationsRegistriesDevicesGetSecurityOption1;
import org.openapis.openapi.models.operations.CloudiotProjectsLocationsRegistriesDevicesGetSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudiotProjectsLocationsRegistriesDevicesGetRequest req = new CloudiotProjectsLocationsRegistriesDevicesGetRequest("rerum") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "magnam";
                alt = AltEnum.PROTO;
                callback = "facere";
                fieldMask = "ea";
                fields = "aliquid";
                key = "laborum";
                oauthToken = "accusamus";
                prettyPrint = false;
                quotaUser = "non";
                uploadType = "occaecati";
                uploadProtocol = "enim";
            }};            

            CloudiotProjectsLocationsRegistriesDevicesGetResponse res = sdk.projects.cloudiotProjectsLocationsRegistriesDevicesGet(req, new CloudiotProjectsLocationsRegistriesDevicesGetSecurity() {{
                option1 = new CloudiotProjectsLocationsRegistriesDevicesGetSecurityOption1("accusamus", "delectus") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.device != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudiotProjectsLocationsRegistriesDevicesModifyCloudToDeviceConfig

Modifies the configuration for the device, which is eventually sent from the Cloud IoT Core servers. Returns the modified configuration version and its metadata.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudiotProjectsLocationsRegistriesDevicesModifyCloudToDeviceConfigRequest;
import org.openapis.openapi.models.operations.CloudiotProjectsLocationsRegistriesDevicesModifyCloudToDeviceConfigResponse;
import org.openapis.openapi.models.operations.CloudiotProjectsLocationsRegistriesDevicesModifyCloudToDeviceConfigSecurity;
import org.openapis.openapi.models.operations.CloudiotProjectsLocationsRegistriesDevicesModifyCloudToDeviceConfigSecurityOption1;
import org.openapis.openapi.models.operations.CloudiotProjectsLocationsRegistriesDevicesModifyCloudToDeviceConfigSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ModifyCloudToDeviceConfigRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudiotProjectsLocationsRegistriesDevicesModifyCloudToDeviceConfigRequest req = new CloudiotProjectsLocationsRegistriesDevicesModifyCloudToDeviceConfigRequest("quidem") {{
                dollarXgafv = XgafvEnum.TWO;
                modifyCloudToDeviceConfigRequest = new ModifyCloudToDeviceConfigRequest() {{
                    binaryData = "nam";
                    versionToUpdate = "id";
                }};;
                accessToken = "blanditiis";
                alt = AltEnum.MEDIA;
                callback = "sapiente";
                fields = "amet";
                key = "deserunt";
                oauthToken = "nisi";
                prettyPrint = false;
                quotaUser = "vel";
                uploadType = "natus";
                uploadProtocol = "omnis";
            }};            

            CloudiotProjectsLocationsRegistriesDevicesModifyCloudToDeviceConfigResponse res = sdk.projects.cloudiotProjectsLocationsRegistriesDevicesModifyCloudToDeviceConfig(req, new CloudiotProjectsLocationsRegistriesDevicesModifyCloudToDeviceConfigSecurity() {{
                option1 = new CloudiotProjectsLocationsRegistriesDevicesModifyCloudToDeviceConfigSecurityOption1("molestiae", "perferendis") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.deviceConfig != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudiotProjectsLocationsRegistriesDevicesPatch

Updates a device.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudiotProjectsLocationsRegistriesDevicesPatchRequest;
import org.openapis.openapi.models.operations.CloudiotProjectsLocationsRegistriesDevicesPatchResponse;
import org.openapis.openapi.models.operations.CloudiotProjectsLocationsRegistriesDevicesPatchSecurity;
import org.openapis.openapi.models.operations.CloudiotProjectsLocationsRegistriesDevicesPatchSecurityOption1;
import org.openapis.openapi.models.operations.CloudiotProjectsLocationsRegistriesDevicesPatchSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Device;
import org.openapis.openapi.models.shared.DeviceConfig;
import org.openapis.openapi.models.shared.DeviceCredential;
import org.openapis.openapi.models.shared.DeviceLogLevelEnum;
import org.openapis.openapi.models.shared.DeviceState;
import org.openapis.openapi.models.shared.GatewayConfig;
import org.openapis.openapi.models.shared.GatewayConfigGatewayAuthMethodEnum;
import org.openapis.openapi.models.shared.GatewayConfigGatewayTypeEnum;
import org.openapis.openapi.models.shared.PublicKeyCredential;
import org.openapis.openapi.models.shared.PublicKeyCredentialFormatEnum;
import org.openapis.openapi.models.shared.Status;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudiotProjectsLocationsRegistriesDevicesPatchRequest req = new CloudiotProjectsLocationsRegistriesDevicesPatchRequest("nihil") {{
                dollarXgafv = XgafvEnum.ONE;
                device = new Device() {{
                    blocked = false;
                    config = new DeviceConfig() {{
                        binaryData = "distinctio";
                        cloudUpdateTime = "id";
                        deviceAckTime = "labore";
                        version = "labore";
                    }};;
                    credentials = new org.openapis.openapi.models.shared.DeviceCredential[]{{
                        add(new DeviceCredential() {{
                            expirationTime = "natus";
                            publicKey = new PublicKeyCredential() {{
                                format = PublicKeyCredentialFormatEnum.ES256_PEM;
                                key = "eum";
                            }};
                        }}),
                        add(new DeviceCredential() {{
                            expirationTime = "vero";
                            publicKey = new PublicKeyCredential() {{
                                format = PublicKeyCredentialFormatEnum.UNSPECIFIED_PUBLIC_KEY_FORMAT;
                                key = "architecto";
                            }};
                        }}),
                    }};
                    gatewayConfig = new GatewayConfig() {{
                        gatewayAuthMethod = GatewayConfigGatewayAuthMethodEnum.ASSOCIATION_ONLY;
                        gatewayType = GatewayConfigGatewayTypeEnum.GATEWAY_TYPE_UNSPECIFIED;
                        lastAccessedGatewayId = "excepturi";
                        lastAccessedGatewayTime = "ullam";
                    }};;
                    id = "9890afa5-63e2-4516-be4c-8b711e5b7fd2";
                    lastConfigAckTime = "saepe";
                    lastConfigSendTime = "pariatur";
                    lastErrorStatus = new Status() {{
                        code = 37559;
                        details = new java.util.HashMap<String, Object>[]{{
                            add(new java.util.HashMap<String, Object>() {{
                                put("natus", "magni");
                                put("sunt", "quo");
                                put("illum", "pariatur");
                            }}),
                        }};
                        message = "maxime";
                    }};;
                    lastErrorTime = "ea";
                    lastEventTime = "excepturi";
                    lastHeartbeatTime = "odit";
                    lastStateTime = "ea";
                    logLevel = DeviceLogLevelEnum.LOG_LEVEL_UNSPECIFIED;
                    metadata = new java.util.HashMap<String, String>() {{
                        put("maiores", "quidem");
                    }};
                    name = "Colleen Johnston PhD";
                    numId = "nemo";
                    state = new DeviceState() {{
                        binaryData = "voluptatibus";
                        updateTime = "perferendis";
                    }};;
                }};;
                accessToken = "fugiat";
                alt = AltEnum.JSON;
                callback = "aut";
                fields = "cumque";
                key = "corporis";
                oauthToken = "hic";
                prettyPrint = false;
                quotaUser = "libero";
                updateMask = "nobis";
                uploadType = "dolores";
                uploadProtocol = "quis";
            }};            

            CloudiotProjectsLocationsRegistriesDevicesPatchResponse res = sdk.projects.cloudiotProjectsLocationsRegistriesDevicesPatch(req, new CloudiotProjectsLocationsRegistriesDevicesPatchSecurity() {{
                option1 = new CloudiotProjectsLocationsRegistriesDevicesPatchSecurityOption1("totam", "dignissimos") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.device != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudiotProjectsLocationsRegistriesDevicesSendCommandToDevice

Sends a command to the specified device. In order for a device to be able to receive commands, it must: 1) be connected to Cloud IoT Core using the MQTT protocol, and 2) be subscribed to the group of MQTT topics specified by /devices/{device-id}/commands/#. This subscription will receive commands at the top-level topic /devices/{device-id}/commands as well as commands for subfolders, like /devices/{device-id}/commands/subfolder. Note that subscribing to specific subfolders is not supported. If the command could not be delivered to the device, this method will return an error; in particular, if the device is not subscribed, this method will return FAILED_PRECONDITION. Otherwise, this method will return OK. If the subscription is QoS 1, at least once delivery will be guaranteed; for QoS 0, no acknowledgment will be expected from the device.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudiotProjectsLocationsRegistriesDevicesSendCommandToDeviceRequest;
import org.openapis.openapi.models.operations.CloudiotProjectsLocationsRegistriesDevicesSendCommandToDeviceResponse;
import org.openapis.openapi.models.operations.CloudiotProjectsLocationsRegistriesDevicesSendCommandToDeviceSecurity;
import org.openapis.openapi.models.operations.CloudiotProjectsLocationsRegistriesDevicesSendCommandToDeviceSecurityOption1;
import org.openapis.openapi.models.operations.CloudiotProjectsLocationsRegistriesDevicesSendCommandToDeviceSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.SendCommandToDeviceRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudiotProjectsLocationsRegistriesDevicesSendCommandToDeviceRequest req = new CloudiotProjectsLocationsRegistriesDevicesSendCommandToDeviceRequest("eaque") {{
                dollarXgafv = XgafvEnum.ONE;
                sendCommandToDeviceRequest = new SendCommandToDeviceRequest() {{
                    binaryData = "nesciunt";
                    subfolder = "eos";
                }};;
                accessToken = "perferendis";
                alt = AltEnum.JSON;
                callback = "minus";
                fields = "quam";
                key = "dolor";
                oauthToken = "vero";
                prettyPrint = false;
                quotaUser = "nostrum";
                uploadType = "hic";
                uploadProtocol = "recusandae";
            }};            

            CloudiotProjectsLocationsRegistriesDevicesSendCommandToDeviceResponse res = sdk.projects.cloudiotProjectsLocationsRegistriesDevicesSendCommandToDevice(req, new CloudiotProjectsLocationsRegistriesDevicesSendCommandToDeviceSecurity() {{
                option1 = new CloudiotProjectsLocationsRegistriesDevicesSendCommandToDeviceSecurityOption1("omnis", "facilis") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.sendCommandToDeviceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudiotProjectsLocationsRegistriesDevicesStatesList

Lists the last few versions of the device state in descending order (i.e.: newest first).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudiotProjectsLocationsRegistriesDevicesStatesListRequest;
import org.openapis.openapi.models.operations.CloudiotProjectsLocationsRegistriesDevicesStatesListResponse;
import org.openapis.openapi.models.operations.CloudiotProjectsLocationsRegistriesDevicesStatesListSecurity;
import org.openapis.openapi.models.operations.CloudiotProjectsLocationsRegistriesDevicesStatesListSecurityOption1;
import org.openapis.openapi.models.operations.CloudiotProjectsLocationsRegistriesDevicesStatesListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudiotProjectsLocationsRegistriesDevicesStatesListRequest req = new CloudiotProjectsLocationsRegistriesDevicesStatesListRequest("perspiciatis") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "porro";
                alt = AltEnum.JSON;
                callback = "blanditiis";
                fields = "error";
                key = "eaque";
                numStates = 577229L;
                oauthToken = "rerum";
                prettyPrint = false;
                quotaUser = "adipisci";
                uploadType = "asperiores";
                uploadProtocol = "earum";
            }};            

            CloudiotProjectsLocationsRegistriesDevicesStatesListResponse res = sdk.projects.cloudiotProjectsLocationsRegistriesDevicesStatesList(req, new CloudiotProjectsLocationsRegistriesDevicesStatesListSecurity() {{
                option1 = new CloudiotProjectsLocationsRegistriesDevicesStatesListSecurityOption1("modi", "iste") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.listDeviceStatesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudiotProjectsLocationsRegistriesGroupsDevicesList

List devices in a device registry.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudiotProjectsLocationsRegistriesGroupsDevicesListGatewayListOptionsGatewayTypeEnum;
import org.openapis.openapi.models.operations.CloudiotProjectsLocationsRegistriesGroupsDevicesListRequest;
import org.openapis.openapi.models.operations.CloudiotProjectsLocationsRegistriesGroupsDevicesListResponse;
import org.openapis.openapi.models.operations.CloudiotProjectsLocationsRegistriesGroupsDevicesListSecurity;
import org.openapis.openapi.models.operations.CloudiotProjectsLocationsRegistriesGroupsDevicesListSecurityOption1;
import org.openapis.openapi.models.operations.CloudiotProjectsLocationsRegistriesGroupsDevicesListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudiotProjectsLocationsRegistriesGroupsDevicesListRequest req = new CloudiotProjectsLocationsRegistriesGroupsDevicesListRequest("dolorum") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "pariatur";
                alt = AltEnum.MEDIA;
                callback = "nobis";
                deviceIds = new String[]{{
                    add("delectus"),
                    add("quaerat"),
                    add("quos"),
                }};
                deviceNumIds = new String[]{{
                    add("dolorem"),
                    add("dolorem"),
                }};
                fieldMask = "dolor";
                fields = "qui";
                gatewayListOptionsAssociationsDeviceId = "ipsum";
                gatewayListOptionsAssociationsGatewayId = "hic";
                gatewayListOptionsGatewayType = CloudiotProjectsLocationsRegistriesGroupsDevicesListGatewayListOptionsGatewayTypeEnum.GATEWAY;
                key = "cum";
                oauthToken = "voluptate";
                pageSize = 490459L;
                pageToken = "reiciendis";
                prettyPrint = false;
                quotaUser = "amet";
                uploadType = "dolorum";
                uploadProtocol = "numquam";
            }};            

            CloudiotProjectsLocationsRegistriesGroupsDevicesListResponse res = sdk.projects.cloudiotProjectsLocationsRegistriesGroupsDevicesList(req, new CloudiotProjectsLocationsRegistriesGroupsDevicesListSecurity() {{
                option1 = new CloudiotProjectsLocationsRegistriesGroupsDevicesListSecurityOption1("veritatis", "ipsa") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.listDevicesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudiotProjectsLocationsRegistriesGroupsGetIamPolicy

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudiotProjectsLocationsRegistriesGroupsGetIamPolicyRequest;
import org.openapis.openapi.models.operations.CloudiotProjectsLocationsRegistriesGroupsGetIamPolicyResponse;
import org.openapis.openapi.models.operations.CloudiotProjectsLocationsRegistriesGroupsGetIamPolicySecurity;
import org.openapis.openapi.models.operations.CloudiotProjectsLocationsRegistriesGroupsGetIamPolicySecurityOption1;
import org.openapis.openapi.models.operations.CloudiotProjectsLocationsRegistriesGroupsGetIamPolicySecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GetIamPolicyRequest;
import org.openapis.openapi.models.shared.GetPolicyOptions;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudiotProjectsLocationsRegistriesGroupsGetIamPolicyRequest req = new CloudiotProjectsLocationsRegistriesGroupsGetIamPolicyRequest("ipsa") {{
                dollarXgafv = XgafvEnum.ONE;
                getIamPolicyRequest = new GetIamPolicyRequest() {{
                    options = new GetPolicyOptions() {{
                        requestedPolicyVersion = 487838;
                    }};;
                }};;
                accessToken = "quaerat";
                alt = AltEnum.PROTO;
                callback = "quidem";
                fields = "voluptatibus";
                key = "voluptas";
                oauthToken = "natus";
                prettyPrint = false;
                quotaUser = "eos";
                uploadType = "atque";
                uploadProtocol = "sit";
            }};            

            CloudiotProjectsLocationsRegistriesGroupsGetIamPolicyResponse res = sdk.projects.cloudiotProjectsLocationsRegistriesGroupsGetIamPolicy(req, new CloudiotProjectsLocationsRegistriesGroupsGetIamPolicySecurity() {{
                option1 = new CloudiotProjectsLocationsRegistriesGroupsGetIamPolicySecurityOption1("fugiat", "ab") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.policy != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudiotProjectsLocationsRegistriesGroupsSetIamPolicy

Sets the access control policy on the specified resource. Replaces any existing policy.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudiotProjectsLocationsRegistriesGroupsSetIamPolicyRequest;
import org.openapis.openapi.models.operations.CloudiotProjectsLocationsRegistriesGroupsSetIamPolicyResponse;
import org.openapis.openapi.models.operations.CloudiotProjectsLocationsRegistriesGroupsSetIamPolicySecurity;
import org.openapis.openapi.models.operations.CloudiotProjectsLocationsRegistriesGroupsSetIamPolicySecurityOption1;
import org.openapis.openapi.models.operations.CloudiotProjectsLocationsRegistriesGroupsSetIamPolicySecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Binding;
import org.openapis.openapi.models.shared.Expr;
import org.openapis.openapi.models.shared.Policy;
import org.openapis.openapi.models.shared.SetIamPolicyRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudiotProjectsLocationsRegistriesGroupsSetIamPolicyRequest req = new CloudiotProjectsLocationsRegistriesGroupsSetIamPolicyRequest("soluta") {{
                dollarXgafv = XgafvEnum.TWO;
                setIamPolicyRequest = new SetIamPolicyRequest() {{
                    policy = new Policy() {{
                        bindings = new org.openapis.openapi.models.shared.Binding[]{{
                            add(new Binding() {{
                                condition = new Expr() {{
                                    description = "voluptate";
                                    expression = "dolorum";
                                    location = "deleniti";
                                    title = "Miss";
                                }};
                                members = new String[]{{
                                    add("distinctio"),
                                    add("asperiores"),
                                    add("nihil"),
                                    add("ipsum"),
                                }};
                                role = "voluptate";
                            }}),
                            add(new Binding() {{
                                condition = new Expr() {{
                                    description = "id";
                                    expression = "saepe";
                                    location = "eius";
                                    title = "Mr.";
                                }};
                                members = new String[]{{
                                    add("amet"),
                                }};
                                role = "optio";
                            }}),
                        }};
                        etag = "accusamus";
                        version = 320017;
                    }};;
                }};;
                accessToken = "saepe";
                alt = AltEnum.MEDIA;
                callback = "deserunt";
                fields = "provident";
                key = "minima";
                oauthToken = "repellendus";
                prettyPrint = false;
                quotaUser = "totam";
                uploadType = "similique";
                uploadProtocol = "alias";
            }};            

            CloudiotProjectsLocationsRegistriesGroupsSetIamPolicyResponse res = sdk.projects.cloudiotProjectsLocationsRegistriesGroupsSetIamPolicy(req, new CloudiotProjectsLocationsRegistriesGroupsSetIamPolicySecurity() {{
                option1 = new CloudiotProjectsLocationsRegistriesGroupsSetIamPolicySecurityOption1("at", "quaerat") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.policy != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudiotProjectsLocationsRegistriesGroupsTestIamPermissions

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudiotProjectsLocationsRegistriesGroupsTestIamPermissionsRequest;
import org.openapis.openapi.models.operations.CloudiotProjectsLocationsRegistriesGroupsTestIamPermissionsResponse;
import org.openapis.openapi.models.operations.CloudiotProjectsLocationsRegistriesGroupsTestIamPermissionsSecurity;
import org.openapis.openapi.models.operations.CloudiotProjectsLocationsRegistriesGroupsTestIamPermissionsSecurityOption1;
import org.openapis.openapi.models.operations.CloudiotProjectsLocationsRegistriesGroupsTestIamPermissionsSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.TestIamPermissionsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudiotProjectsLocationsRegistriesGroupsTestIamPermissionsRequest req = new CloudiotProjectsLocationsRegistriesGroupsTestIamPermissionsRequest("tempora") {{
                dollarXgafv = XgafvEnum.ONE;
                testIamPermissionsRequest = new TestIamPermissionsRequest() {{
                    permissions = new String[]{{
                        add("officiis"),
                        add("qui"),
                        add("dolorum"),
                        add("a"),
                    }};
                }};;
                accessToken = "esse";
                alt = AltEnum.PROTO;
                callback = "iusto";
                fields = "ipsum";
                key = "quisquam";
                oauthToken = "tenetur";
                prettyPrint = false;
                quotaUser = "amet";
                uploadType = "tempore";
                uploadProtocol = "accusamus";
            }};            

            CloudiotProjectsLocationsRegistriesGroupsTestIamPermissionsResponse res = sdk.projects.cloudiotProjectsLocationsRegistriesGroupsTestIamPermissions(req, new CloudiotProjectsLocationsRegistriesGroupsTestIamPermissionsSecurity() {{
                option1 = new CloudiotProjectsLocationsRegistriesGroupsTestIamPermissionsSecurityOption1("numquam", "enim") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.testIamPermissionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudiotProjectsLocationsRegistriesList

Lists device registries.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudiotProjectsLocationsRegistriesListRequest;
import org.openapis.openapi.models.operations.CloudiotProjectsLocationsRegistriesListResponse;
import org.openapis.openapi.models.operations.CloudiotProjectsLocationsRegistriesListSecurity;
import org.openapis.openapi.models.operations.CloudiotProjectsLocationsRegistriesListSecurityOption1;
import org.openapis.openapi.models.operations.CloudiotProjectsLocationsRegistriesListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudiotProjectsLocationsRegistriesListRequest req = new CloudiotProjectsLocationsRegistriesListRequest("dolorem") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "totam";
                alt = AltEnum.MEDIA;
                callback = "sit";
                fields = "expedita";
                key = "neque";
                oauthToken = "sed";
                pageSize = 424685L;
                pageToken = "libero";
                prettyPrint = false;
                quotaUser = "voluptas";
                uploadType = "deserunt";
                uploadProtocol = "quam";
            }};            

            CloudiotProjectsLocationsRegistriesListResponse res = sdk.projects.cloudiotProjectsLocationsRegistriesList(req, new CloudiotProjectsLocationsRegistriesListSecurity() {{
                option1 = new CloudiotProjectsLocationsRegistriesListSecurityOption1("ipsum", "incidunt") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.listDeviceRegistriesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudiotProjectsLocationsRegistriesUnbindDeviceFromGateway

Deletes the association between the device and the gateway.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudiotProjectsLocationsRegistriesUnbindDeviceFromGatewayRequest;
import org.openapis.openapi.models.operations.CloudiotProjectsLocationsRegistriesUnbindDeviceFromGatewayResponse;
import org.openapis.openapi.models.operations.CloudiotProjectsLocationsRegistriesUnbindDeviceFromGatewaySecurity;
import org.openapis.openapi.models.operations.CloudiotProjectsLocationsRegistriesUnbindDeviceFromGatewaySecurityOption1;
import org.openapis.openapi.models.operations.CloudiotProjectsLocationsRegistriesUnbindDeviceFromGatewaySecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.UnbindDeviceFromGatewayRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudiotProjectsLocationsRegistriesUnbindDeviceFromGatewayRequest req = new CloudiotProjectsLocationsRegistriesUnbindDeviceFromGatewayRequest("qui") {{
                dollarXgafv = XgafvEnum.TWO;
                unbindDeviceFromGatewayRequest = new UnbindDeviceFromGatewayRequest() {{
                    deviceId = "maxime";
                    gatewayId = "pariatur";
                }};;
                accessToken = "soluta";
                alt = AltEnum.JSON;
                callback = "laborum";
                fields = "totam";
                key = "incidunt";
                oauthToken = "aspernatur";
                prettyPrint = false;
                quotaUser = "dolores";
                uploadType = "distinctio";
                uploadProtocol = "facilis";
            }};            

            CloudiotProjectsLocationsRegistriesUnbindDeviceFromGatewayResponse res = sdk.projects.cloudiotProjectsLocationsRegistriesUnbindDeviceFromGateway(req, new CloudiotProjectsLocationsRegistriesUnbindDeviceFromGatewaySecurity() {{
                option1 = new CloudiotProjectsLocationsRegistriesUnbindDeviceFromGatewaySecurityOption1("aliquid", "quam") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.unbindDeviceFromGatewayResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
