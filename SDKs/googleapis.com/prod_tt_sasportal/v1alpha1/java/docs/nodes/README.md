# nodes

### Available Operations

* [prodTtSasportalNodesDevicesSignDevice](#prodttsasportalnodesdevicessigndevice) - Signs a device.
* [prodTtSasportalNodesDevicesUpdateSigned](#prodttsasportalnodesdevicesupdatesigned) - Updates a signed device.
* [prodTtSasportalNodesNodesDelete](#prodttsasportalnodesnodesdelete) - Deletes a node.
* [prodTtSasportalNodesNodesDeploymentsCreate](#prodttsasportalnodesnodesdeploymentscreate) - Creates a new deployment.
* [prodTtSasportalNodesNodesDeploymentsList](#prodttsasportalnodesnodesdeploymentslist) - Lists deployments.
* [prodTtSasportalNodesNodesDevicesCreate](#prodttsasportalnodesnodesdevicescreate) - Creates a device under a node or customer.
* [prodTtSasportalNodesNodesDevicesCreateSigned](#prodttsasportalnodesnodesdevicescreatesigned) - Creates a signed device under a node or customer.
* [prodTtSasportalNodesNodesDevicesList](#prodttsasportalnodesnodesdeviceslist) - Lists devices under a node or customer.
* [prodTtSasportalNodesNodesGet](#prodttsasportalnodesnodesget) - Returns a requested node.
* [prodTtSasportalNodesNodesMove](#prodttsasportalnodesnodesmove) - Moves a node under another node or customer.
* [prodTtSasportalNodesNodesNodesCreate](#prodttsasportalnodesnodesnodescreate) - Creates a new node.
* [prodTtSasportalNodesNodesNodesList](#prodttsasportalnodesnodesnodeslist) - Lists nodes.
* [prodTtSasportalNodesNodesPatch](#prodttsasportalnodesnodespatch) - Updates an existing node.

## prodTtSasportalNodesDevicesSignDevice

Signs a device.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProdTtSasportalNodesDevicesSignDeviceRequest;
import org.openapis.openapi.models.operations.ProdTtSasportalNodesDevicesSignDeviceResponse;
import org.openapis.openapi.models.operations.ProdTtSasportalNodesDevicesSignDeviceSecurity;
import org.openapis.openapi.models.operations.ProdTtSasportalNodesDevicesSignDeviceSecurityOption1;
import org.openapis.openapi.models.operations.ProdTtSasportalNodesDevicesSignDeviceSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.SasPortalDeviceAirInterface;
import org.openapis.openapi.models.shared.SasPortalDeviceAirInterfaceRadioTechnologyEnum;
import org.openapis.openapi.models.shared.SasPortalDeviceConfig;
import org.openapis.openapi.models.shared.SasPortalDeviceConfigCategoryEnum;
import org.openapis.openapi.models.shared.SasPortalDeviceConfigMeasurementCapabilitiesEnum;
import org.openapis.openapi.models.shared.SasPortalDeviceConfigStateEnum;
import org.openapis.openapi.models.shared.SasPortalDeviceGrant;
import org.openapis.openapi.models.shared.SasPortalDeviceGrantChannelTypeEnum;
import org.openapis.openapi.models.shared.SasPortalDeviceGrantStateEnum;
import org.openapis.openapi.models.shared.SasPortalDeviceInput;
import org.openapis.openapi.models.shared.SasPortalDeviceMetadataInput;
import org.openapis.openapi.models.shared.SasPortalDeviceModel;
import org.openapis.openapi.models.shared.SasPortalDeviceStateEnum;
import org.openapis.openapi.models.shared.SasPortalDpaMoveList;
import org.openapis.openapi.models.shared.SasPortalFrequencyRange;
import org.openapis.openapi.models.shared.SasPortalInstallationParams;
import org.openapis.openapi.models.shared.SasPortalInstallationParamsHeightTypeEnum;
import org.openapis.openapi.models.shared.SasPortalNrqzValidation;
import org.openapis.openapi.models.shared.SasPortalNrqzValidationStateEnum;
import org.openapis.openapi.models.shared.SasPortalSignDeviceRequestInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ProdTtSasportalNodesDevicesSignDeviceRequest req = new ProdTtSasportalNodesDevicesSignDeviceRequest("fuga") {{
                dollarXgafv = XgafvEnum.ONE;
                sasPortalSignDeviceRequestInput = new SasPortalSignDeviceRequestInput() {{
                    device = new SasPortalDeviceInput() {{
                        activeConfig = new SasPortalDeviceConfig() {{
                            airInterface = new SasPortalDeviceAirInterface() {{
                                radioTechnology = SasPortalDeviceAirInterfaceRadioTechnologyEnum.FOUR_G_BBW_SAA1;
                                supportedSpec = "iste";
                            }};;
                            callSign = "iure";
                            category = SasPortalDeviceConfigCategoryEnum.DEVICE_CATEGORY_B;
                            installationParams = new SasPortalInstallationParams() {{
                                antennaAzimuth = 697631;
                                antennaBeamwidth = 99280;
                                antennaDowntilt = 60225;
                                antennaGain = 969810;
                                antennaGainNewField = 6667.67;
                                antennaModel = "mollitia";
                                cpeCbsdIndication = false;
                                eirpCapability = 670638;
                                eirpCapabilityNewField = 1709.09;
                                height = 2103.82;
                                heightType = SasPortalInstallationParamsHeightTypeEnum.HEIGHT_TYPE_AGL;
                                horizontalAccuracy = 1289.26;
                                indoorDeployment = false;
                                latitude = 7506.86;
                                longitude = 3154.28;
                                verticalAccuracy = 6078.31;
                            }};;
                            isSigned = false;
                            measurementCapabilities = new org.openapis.openapi.models.shared.SasPortalDeviceConfigMeasurementCapabilitiesEnum[]{{
                                add(SasPortalDeviceConfigMeasurementCapabilitiesEnum.MEASUREMENT_CAPABILITY_UNSPECIFIED),
                                add(SasPortalDeviceConfigMeasurementCapabilitiesEnum.MEASUREMENT_CAPABILITY_RECEIVED_POWER_WITH_GRANT),
                            }};
                            model = new SasPortalDeviceModel() {{
                                firmwareVersion = "accusantium";
                                hardwareVersion = "iure";
                                name = "Miss Aubrey Williamson";
                                softwareVersion = "culpa";
                                vendor = "consequuntur";
                            }};;
                            state = SasPortalDeviceConfigStateEnum.FINAL_;
                            updateTime = "mollitia";
                            userId = "occaecati";
                        }};;
                        deviceMetadata = new SasPortalDeviceMetadataInput() {{
                            antennaModel = "numquam";
                            commonChannelGroup = "commodi";
                            interferenceCoordinationGroup = "quam";
                            nrqzValidation = new SasPortalNrqzValidation() {{
                                caseId = "molestiae";
                                cpiId = "velit";
                                latitude = 6235.1;
                                longitude = 1589.69;
                                state = SasPortalNrqzValidationStateEnum.DRAFT;
                            }};;
                        }};;
                        displayName = "vitae";
                        fccId = "laborum";
                        grantRangeAllowlists = new org.openapis.openapi.models.shared.SasPortalFrequencyRange[]{{
                            add(new SasPortalFrequencyRange() {{
                                highFrequencyMhz = 3172.02;
                                lowFrequencyMhz = 1381.83;
                            }}),
                            add(new SasPortalFrequencyRange() {{
                                highFrequencyMhz = 7783.46;
                                lowFrequencyMhz = 1965.82;
                            }}),
                            add(new SasPortalFrequencyRange() {{
                                highFrequencyMhz = 9495.72;
                                lowFrequencyMhz = 3687.25;
                            }}),
                        }};
                        grants = new org.openapis.openapi.models.shared.SasPortalDeviceGrant[]{{
                            add(new SasPortalDeviceGrant() {{
                                channelType = SasPortalDeviceGrantChannelTypeEnum.CHANNEL_TYPE_PAL;
                                expireTime = "aut";
                                frequencyRange = new SasPortalFrequencyRange() {{
                                    highFrequencyMhz = 971.01;
                                    lowFrequencyMhz = 6228.46;
                                }};
                                grantId = "temporibus";
                                lastHeartbeatTransmitExpireTime = "laborum";
                                maxEirp = 960.98;
                                moveList = new org.openapis.openapi.models.shared.SasPortalDpaMoveList[]{{
                                    add(new SasPortalDpaMoveList() {{
                                        dpaId = "voluptatibus";
                                        frequencyRange = new SasPortalFrequencyRange() {{
                                            highFrequencyMhz = 8781.94;
                                            lowFrequencyMhz = 4686.51;
                                        }};
                                    }}),
                                    add(new SasPortalDpaMoveList() {{
                                        dpaId = "praesentium";
                                        frequencyRange = new SasPortalFrequencyRange() {{
                                            highFrequencyMhz = 9767.62;
                                            lowFrequencyMhz = 557.14;
                                        }};
                                    }}),
                                    add(new SasPortalDpaMoveList() {{
                                        dpaId = "omnis";
                                        frequencyRange = new SasPortalFrequencyRange() {{
                                            highFrequencyMhz = 4511.59;
                                            lowFrequencyMhz = 7392.64;
                                        }};
                                    }}),
                                    add(new SasPortalDpaMoveList() {{
                                        dpaId = "perferendis";
                                        frequencyRange = new SasPortalFrequencyRange() {{
                                            highFrequencyMhz = 391.87;
                                            lowFrequencyMhz = 4417.11;
                                        }};
                                    }}),
                                }};
                                state = SasPortalDeviceGrantStateEnum.GRANT_STATE_GRANTED;
                                suspensionReason = new String[]{{
                                    add("dicta"),
                                    add("corporis"),
                                    add("dolore"),
                                    add("iusto"),
                                }};
                            }}),
                            add(new SasPortalDeviceGrant() {{
                                channelType = SasPortalDeviceGrantChannelTypeEnum.CHANNEL_TYPE_UNSPECIFIED;
                                expireTime = "harum";
                                frequencyRange = new SasPortalFrequencyRange() {{
                                    highFrequencyMhz = 3179.83;
                                    lowFrequencyMhz = 8804.76;
                                }};
                                grantId = "commodi";
                                lastHeartbeatTransmitExpireTime = "repudiandae";
                                maxEirp = 641.47;
                                moveList = new org.openapis.openapi.models.shared.SasPortalDpaMoveList[]{{
                                    add(new SasPortalDpaMoveList() {{
                                        dpaId = "quidem";
                                        frequencyRange = new SasPortalFrequencyRange() {{
                                            highFrequencyMhz = 5651.89;
                                            lowFrequencyMhz = 5666.02;
                                        }};
                                    }}),
                                }};
                                state = SasPortalDeviceGrantStateEnum.GRANT_STATE_EXPIRED;
                                suspensionReason = new String[]{{
                                    add("praesentium"),
                                    add("rem"),
                                }};
                            }}),
                            add(new SasPortalDeviceGrant() {{
                                channelType = SasPortalDeviceGrantChannelTypeEnum.CHANNEL_TYPE_PAL;
                                expireTime = "quasi";
                                frequencyRange = new SasPortalFrequencyRange() {{
                                    highFrequencyMhz = 9211.58;
                                    lowFrequencyMhz = 5759.47;
                                }};
                                grantId = "veritatis";
                                lastHeartbeatTransmitExpireTime = "itaque";
                                maxEirp = 2777.18;
                                moveList = new org.openapis.openapi.models.shared.SasPortalDpaMoveList[]{{
                                    add(new SasPortalDpaMoveList() {{
                                        dpaId = "consequatur";
                                        frequencyRange = new SasPortalFrequencyRange() {{
                                            highFrequencyMhz = 6674.11;
                                            lowFrequencyMhz = 8423.42;
                                        }};
                                    }}),
                                    add(new SasPortalDpaMoveList() {{
                                        dpaId = "explicabo";
                                        frequencyRange = new SasPortalFrequencyRange() {{
                                            highFrequencyMhz = 6471.74;
                                            lowFrequencyMhz = 7163.27;
                                        }};
                                    }}),
                                }};
                                state = SasPortalDeviceGrantStateEnum.GRANT_STATE_EXPIRED;
                                suspensionReason = new String[]{{
                                    add("modi"),
                                    add("qui"),
                                }};
                            }}),
                        }};
                        name = "Mr. Shelly Lueilwitz";
                        preloadedConfig = new SasPortalDeviceConfig() {{
                            airInterface = new SasPortalDeviceAirInterface() {{
                                radioTechnology = SasPortalDeviceAirInterfaceRadioTechnologyEnum.FOUR_G_BBW_SAA1;
                                supportedSpec = "alias";
                            }};;
                            callSign = "fugit";
                            category = SasPortalDeviceConfigCategoryEnum.DEVICE_CATEGORY_B;
                            installationParams = new SasPortalInstallationParams() {{
                                antennaAzimuth = 569618;
                                antennaBeamwidth = 270008;
                                antennaDowntilt = 703737;
                                antennaGain = 735194;
                                antennaGainNewField = 2884.76;
                                antennaModel = "delectus";
                                cpeCbsdIndication = false;
                                eirpCapability = 433288;
                                eirpCapabilityNewField = 2487.53;
                                height = 7561.07;
                                heightType = SasPortalInstallationParamsHeightTypeEnum.HEIGHT_TYPE_AGL;
                                horizontalAccuracy = 3960.98;
                                indoorDeployment = false;
                                latitude = 5920.42;
                                longitude = 8960.39;
                                verticalAccuracy = 5722.52;
                            }};;
                            isSigned = false;
                            measurementCapabilities = new org.openapis.openapi.models.shared.SasPortalDeviceConfigMeasurementCapabilitiesEnum[]{{
                                add(SasPortalDeviceConfigMeasurementCapabilitiesEnum.MEASUREMENT_CAPABILITY_UNSPECIFIED),
                                add(SasPortalDeviceConfigMeasurementCapabilitiesEnum.MEASUREMENT_CAPABILITY_RECEIVED_POWER_WITHOUT_GRANT),
                                add(SasPortalDeviceConfigMeasurementCapabilitiesEnum.MEASUREMENT_CAPABILITY_RECEIVED_POWER_WITHOUT_GRANT),
                            }};
                            model = new SasPortalDeviceModel() {{
                                firmwareVersion = "dolorum";
                                hardwareVersion = "in";
                                name = "Angel Wolff II";
                                softwareVersion = "cumque";
                                vendor = "facere";
                            }};;
                            state = SasPortalDeviceConfigStateEnum.DRAFT;
                            updateTime = "aliquid";
                            userId = "laborum";
                        }};;
                        serialNumber = "accusamus";
                        state = SasPortalDeviceStateEnum.DEVICE_STATE_UNSPECIFIED;
                    }};;
                }};;
                accessToken = "occaecati";
                alt = AltEnum.JSON;
                callback = "accusamus";
                fields = "delectus";
                key = "quidem";
                oauthToken = "provident";
                prettyPrint = false;
                quotaUser = "nam";
                uploadType = "id";
                uploadProtocol = "blanditiis";
            }};            

            ProdTtSasportalNodesDevicesSignDeviceResponse res = sdk.nodes.prodTtSasportalNodesDevicesSignDevice(req, new ProdTtSasportalNodesDevicesSignDeviceSecurity() {{
                option1 = new ProdTtSasportalNodesDevicesSignDeviceSecurityOption1("deleniti", "sapiente") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.sasPortalEmpty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## prodTtSasportalNodesDevicesUpdateSigned

Updates a signed device.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProdTtSasportalNodesDevicesUpdateSignedRequest;
import org.openapis.openapi.models.operations.ProdTtSasportalNodesDevicesUpdateSignedResponse;
import org.openapis.openapi.models.operations.ProdTtSasportalNodesDevicesUpdateSignedSecurity;
import org.openapis.openapi.models.operations.ProdTtSasportalNodesDevicesUpdateSignedSecurityOption1;
import org.openapis.openapi.models.operations.ProdTtSasportalNodesDevicesUpdateSignedSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.SasPortalUpdateSignedDeviceRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ProdTtSasportalNodesDevicesUpdateSignedRequest req = new ProdTtSasportalNodesDevicesUpdateSignedRequest("amet") {{
                dollarXgafv = XgafvEnum.TWO;
                sasPortalUpdateSignedDeviceRequest = new SasPortalUpdateSignedDeviceRequest() {{
                    encodedDevice = "nisi";
                    installerId = "vel";
                }};;
                accessToken = "natus";
                alt = AltEnum.MEDIA;
                callback = "molestiae";
                fields = "perferendis";
                key = "nihil";
                oauthToken = "magnam";
                prettyPrint = false;
                quotaUser = "distinctio";
                uploadType = "id";
                uploadProtocol = "labore";
            }};            

            ProdTtSasportalNodesDevicesUpdateSignedResponse res = sdk.nodes.prodTtSasportalNodesDevicesUpdateSigned(req, new ProdTtSasportalNodesDevicesUpdateSignedSecurity() {{
                option1 = new ProdTtSasportalNodesDevicesUpdateSignedSecurityOption1("labore", "suscipit") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.sasPortalDevice != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## prodTtSasportalNodesNodesDelete

Deletes a node.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProdTtSasportalNodesNodesDeleteRequest;
import org.openapis.openapi.models.operations.ProdTtSasportalNodesNodesDeleteResponse;
import org.openapis.openapi.models.operations.ProdTtSasportalNodesNodesDeleteSecurity;
import org.openapis.openapi.models.operations.ProdTtSasportalNodesNodesDeleteSecurityOption1;
import org.openapis.openapi.models.operations.ProdTtSasportalNodesNodesDeleteSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ProdTtSasportalNodesNodesDeleteRequest req = new ProdTtSasportalNodesNodesDeleteRequest("natus") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "eum";
                alt = AltEnum.PROTO;
                callback = "aspernatur";
                fields = "architecto";
                key = "magnam";
                oauthToken = "et";
                prettyPrint = false;
                quotaUser = "excepturi";
                uploadType = "ullam";
                uploadProtocol = "provident";
            }};            

            ProdTtSasportalNodesNodesDeleteResponse res = sdk.nodes.prodTtSasportalNodesNodesDelete(req, new ProdTtSasportalNodesNodesDeleteSecurity() {{
                option1 = new ProdTtSasportalNodesNodesDeleteSecurityOption1("quos", "sint") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.sasPortalEmpty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## prodTtSasportalNodesNodesDeploymentsCreate

Creates a new deployment.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProdTtSasportalNodesNodesDeploymentsCreateRequest;
import org.openapis.openapi.models.operations.ProdTtSasportalNodesNodesDeploymentsCreateResponse;
import org.openapis.openapi.models.operations.ProdTtSasportalNodesNodesDeploymentsCreateSecurity;
import org.openapis.openapi.models.operations.ProdTtSasportalNodesNodesDeploymentsCreateSecurityOption1;
import org.openapis.openapi.models.operations.ProdTtSasportalNodesNodesDeploymentsCreateSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.SasPortalDeploymentInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ProdTtSasportalNodesNodesDeploymentsCreateRequest req = new ProdTtSasportalNodesNodesDeploymentsCreateRequest("accusantium") {{
                dollarXgafv = XgafvEnum.TWO;
                sasPortalDeploymentInput = new SasPortalDeploymentInput() {{
                    displayName = "reiciendis";
                    sasUserIds = new String[]{{
                        add("ad"),
                        add("eum"),
                        add("dolor"),
                    }};
                }};;
                accessToken = "necessitatibus";
                alt = AltEnum.JSON;
                callback = "nemo";
                fields = "quasi";
                key = "iure";
                oauthToken = "doloribus";
                prettyPrint = false;
                quotaUser = "debitis";
                uploadType = "eius";
                uploadProtocol = "maxime";
            }};            

            ProdTtSasportalNodesNodesDeploymentsCreateResponse res = sdk.nodes.prodTtSasportalNodesNodesDeploymentsCreate(req, new ProdTtSasportalNodesNodesDeploymentsCreateSecurity() {{
                option1 = new ProdTtSasportalNodesNodesDeploymentsCreateSecurityOption1("deleniti", "facilis") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.sasPortalDeployment != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## prodTtSasportalNodesNodesDeploymentsList

Lists deployments.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProdTtSasportalNodesNodesDeploymentsListRequest;
import org.openapis.openapi.models.operations.ProdTtSasportalNodesNodesDeploymentsListResponse;
import org.openapis.openapi.models.operations.ProdTtSasportalNodesNodesDeploymentsListSecurity;
import org.openapis.openapi.models.operations.ProdTtSasportalNodesNodesDeploymentsListSecurityOption1;
import org.openapis.openapi.models.operations.ProdTtSasportalNodesNodesDeploymentsListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ProdTtSasportalNodesNodesDeploymentsListRequest req = new ProdTtSasportalNodesNodesDeploymentsListRequest("in") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "architecto";
                alt = AltEnum.PROTO;
                callback = "ullam";
                fields = "expedita";
                filter = "nihil";
                key = "repellat";
                oauthToken = "quibusdam";
                pageSize = 149448L;
                pageToken = "saepe";
                prettyPrint = false;
                quotaUser = "pariatur";
                uploadType = "accusantium";
                uploadProtocol = "consequuntur";
            }};            

            ProdTtSasportalNodesNodesDeploymentsListResponse res = sdk.nodes.prodTtSasportalNodesNodesDeploymentsList(req, new ProdTtSasportalNodesNodesDeploymentsListSecurity() {{
                option1 = new ProdTtSasportalNodesNodesDeploymentsListSecurityOption1("praesentium", "natus") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.sasPortalListDeploymentsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## prodTtSasportalNodesNodesDevicesCreate

Creates a device under a node or customer.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProdTtSasportalNodesNodesDevicesCreateRequest;
import org.openapis.openapi.models.operations.ProdTtSasportalNodesNodesDevicesCreateResponse;
import org.openapis.openapi.models.operations.ProdTtSasportalNodesNodesDevicesCreateSecurity;
import org.openapis.openapi.models.operations.ProdTtSasportalNodesNodesDevicesCreateSecurityOption1;
import org.openapis.openapi.models.operations.ProdTtSasportalNodesNodesDevicesCreateSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.SasPortalDeviceAirInterface;
import org.openapis.openapi.models.shared.SasPortalDeviceAirInterfaceRadioTechnologyEnum;
import org.openapis.openapi.models.shared.SasPortalDeviceConfig;
import org.openapis.openapi.models.shared.SasPortalDeviceConfigCategoryEnum;
import org.openapis.openapi.models.shared.SasPortalDeviceConfigMeasurementCapabilitiesEnum;
import org.openapis.openapi.models.shared.SasPortalDeviceConfigStateEnum;
import org.openapis.openapi.models.shared.SasPortalDeviceGrant;
import org.openapis.openapi.models.shared.SasPortalDeviceGrantChannelTypeEnum;
import org.openapis.openapi.models.shared.SasPortalDeviceGrantStateEnum;
import org.openapis.openapi.models.shared.SasPortalDeviceInput;
import org.openapis.openapi.models.shared.SasPortalDeviceMetadataInput;
import org.openapis.openapi.models.shared.SasPortalDeviceModel;
import org.openapis.openapi.models.shared.SasPortalDeviceStateEnum;
import org.openapis.openapi.models.shared.SasPortalDpaMoveList;
import org.openapis.openapi.models.shared.SasPortalFrequencyRange;
import org.openapis.openapi.models.shared.SasPortalInstallationParams;
import org.openapis.openapi.models.shared.SasPortalInstallationParamsHeightTypeEnum;
import org.openapis.openapi.models.shared.SasPortalNrqzValidation;
import org.openapis.openapi.models.shared.SasPortalNrqzValidationStateEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ProdTtSasportalNodesNodesDevicesCreateRequest req = new ProdTtSasportalNodesNodesDevicesCreateRequest("magni") {{
                dollarXgafv = XgafvEnum.ONE;
                sasPortalDeviceInput = new SasPortalDeviceInput() {{
                    activeConfig = new SasPortalDeviceConfig() {{
                        airInterface = new SasPortalDeviceAirInterface() {{
                            radioTechnology = SasPortalDeviceAirInterfaceRadioTechnologyEnum.REDLINE;
                            supportedSpec = "illum";
                        }};;
                        callSign = "pariatur";
                        category = SasPortalDeviceConfigCategoryEnum.DEVICE_CATEGORY_B;
                        installationParams = new SasPortalInstallationParams() {{
                            antennaAzimuth = 411397;
                            antennaBeamwidth = 569101;
                            antennaDowntilt = 139972;
                            antennaGain = 407183;
                            antennaGainNewField = 332.22;
                            antennaModel = "ab";
                            cpeCbsdIndication = false;
                            eirpCapability = 982575;
                            eirpCapabilityNewField = 6974.29;
                            height = 3732.91;
                            heightType = SasPortalInstallationParamsHeightTypeEnum.HEIGHT_TYPE_AGL;
                            horizontalAccuracy = 4200.75;
                            indoorDeployment = false;
                            latitude = 7220.56;
                            longitude = 505.88;
                            verticalAccuracy = 8663.83;
                        }};;
                        isSigned = false;
                        measurementCapabilities = new org.openapis.openapi.models.shared.SasPortalDeviceConfigMeasurementCapabilitiesEnum[]{{
                            add(SasPortalDeviceConfigMeasurementCapabilitiesEnum.MEASUREMENT_CAPABILITY_RECEIVED_POWER_WITHOUT_GRANT),
                            add(SasPortalDeviceConfigMeasurementCapabilitiesEnum.MEASUREMENT_CAPABILITY_UNSPECIFIED),
                        }};
                        model = new SasPortalDeviceModel() {{
                            firmwareVersion = "fugiat";
                            hardwareVersion = "amet";
                            name = "Erma Hessel";
                            softwareVersion = "nobis";
                            vendor = "dolores";
                        }};;
                        state = SasPortalDeviceConfigStateEnum.DRAFT;
                        updateTime = "totam";
                        userId = "dignissimos";
                    }};;
                    deviceMetadata = new SasPortalDeviceMetadataInput() {{
                        antennaModel = "eaque";
                        commonChannelGroup = "quis";
                        interferenceCoordinationGroup = "nesciunt";
                        nrqzValidation = new SasPortalNrqzValidation() {{
                            caseId = "eos";
                            cpiId = "perferendis";
                            latitude = 1709.86;
                            longitude = 7936.98;
                            state = SasPortalNrqzValidationStateEnum.DRAFT;
                        }};;
                    }};;
                    displayName = "dolor";
                    fccId = "vero";
                    grantRangeAllowlists = new org.openapis.openapi.models.shared.SasPortalFrequencyRange[]{{
                        add(new SasPortalFrequencyRange() {{
                            highFrequencyMhz = 9441.2;
                            lowFrequencyMhz = 9280.82;
                        }}),
                        add(new SasPortalFrequencyRange() {{
                            highFrequencyMhz = 6082.53;
                            lowFrequencyMhz = 7044.15;
                        }}),
                    }};
                    grants = new org.openapis.openapi.models.shared.SasPortalDeviceGrant[]{{
                        add(new SasPortalDeviceGrant() {{
                            channelType = SasPortalDeviceGrantChannelTypeEnum.CHANNEL_TYPE_UNSPECIFIED;
                            expireTime = "porro";
                            frequencyRange = new SasPortalFrequencyRange() {{
                                highFrequencyMhz = 1646.94;
                                lowFrequencyMhz = 5000.26;
                            }};
                            grantId = "error";
                            lastHeartbeatTransmitExpireTime = "eaque";
                            maxEirp = 5772.29;
                            moveList = new org.openapis.openapi.models.shared.SasPortalDpaMoveList[]{{
                                add(new SasPortalDpaMoveList() {{
                                    dpaId = "adipisci";
                                    frequencyRange = new SasPortalFrequencyRange() {{
                                        highFrequencyMhz = 9923.97;
                                        lowFrequencyMhz = 9342.14;
                                    }};
                                }}),
                                add(new SasPortalDpaMoveList() {{
                                    dpaId = "modi";
                                    frequencyRange = new SasPortalFrequencyRange() {{
                                        highFrequencyMhz = 6139.66;
                                        lowFrequencyMhz = 6790.91;
                                    }};
                                }}),
                                add(new SasPortalDpaMoveList() {{
                                    dpaId = "deleniti";
                                    frequencyRange = new SasPortalFrequencyRange() {{
                                        highFrequencyMhz = 8642.82;
                                        lowFrequencyMhz = 5899.1;
                                    }};
                                }}),
                            }};
                            state = SasPortalDeviceGrantStateEnum.GRANT_STATE_AUTHORIZED;
                            suspensionReason = new String[]{{
                                add("delectus"),
                                add("quaerat"),
                                add("quos"),
                            }};
                        }}),
                        add(new SasPortalDeviceGrant() {{
                            channelType = SasPortalDeviceGrantChannelTypeEnum.CHANNEL_TYPE_GAA;
                            expireTime = "dolorem";
                            frequencyRange = new SasPortalFrequencyRange() {{
                                highFrequencyMhz = 2098.43;
                                lowFrequencyMhz = 2224.43;
                            }};
                            grantId = "qui";
                            lastHeartbeatTransmitExpireTime = "ipsum";
                            maxEirp = 9443.73;
                            moveList = new org.openapis.openapi.models.shared.SasPortalDpaMoveList[]{{
                                add(new SasPortalDpaMoveList() {{
                                    dpaId = "cum";
                                    frequencyRange = new SasPortalFrequencyRange() {{
                                        highFrequencyMhz = 4521.09;
                                        lowFrequencyMhz = 4904.59;
                                    }};
                                }}),
                                add(new SasPortalDpaMoveList() {{
                                    dpaId = "reiciendis";
                                    frequencyRange = new SasPortalFrequencyRange() {{
                                        highFrequencyMhz = 2274.14;
                                        lowFrequencyMhz = 6805.45;
                                    }};
                                }}),
                                add(new SasPortalDpaMoveList() {{
                                    dpaId = "numquam";
                                    frequencyRange = new SasPortalFrequencyRange() {{
                                        highFrequencyMhz = 852.95;
                                        lowFrequencyMhz = 580.29;
                                    }};
                                }}),
                            }};
                            state = SasPortalDeviceGrantStateEnum.GRANT_STATE_UNSPECIFIED;
                            suspensionReason = new String[]{{
                                add("odio"),
                                add("quaerat"),
                            }};
                        }}),
                        add(new SasPortalDeviceGrant() {{
                            channelType = SasPortalDeviceGrantChannelTypeEnum.CHANNEL_TYPE_PAL;
                            expireTime = "quidem";
                            frequencyRange = new SasPortalFrequencyRange() {{
                                highFrequencyMhz = 9764.05;
                                lowFrequencyMhz = 3777.52;
                            }};
                            grantId = "natus";
                            lastHeartbeatTransmitExpireTime = "eos";
                            maxEirp = 5424.99;
                            moveList = new org.openapis.openapi.models.shared.SasPortalDpaMoveList[]{{
                                add(new SasPortalDpaMoveList() {{
                                    dpaId = "fugiat";
                                    frequencyRange = new SasPortalFrequencyRange() {{
                                        highFrequencyMhz = 672.49;
                                        lowFrequencyMhz = 7438.35;
                                    }};
                                }}),
                            }};
                            state = SasPortalDeviceGrantStateEnum.GRANT_STATE_AUTHORIZED;
                            suspensionReason = new String[]{{
                                add("voluptate"),
                                add("dolorum"),
                            }};
                        }}),
                    }};
                    name = "Arturo Treutel";
                    preloadedConfig = new SasPortalDeviceConfig() {{
                        airInterface = new SasPortalDeviceAirInterface() {{
                            radioTechnology = SasPortalDeviceAirInterfaceRadioTechnologyEnum.NR;
                            supportedSpec = "ipsum";
                        }};;
                        callSign = "voluptate";
                        category = SasPortalDeviceConfigCategoryEnum.DEVICE_CATEGORY_A;
                        installationParams = new SasPortalInstallationParams() {{
                            antennaAzimuth = 906418;
                            antennaBeamwidth = 263322;
                            antennaDowntilt = 137220;
                            antennaGain = 20651;
                            antennaGainNewField = 2292.19;
                            antennaModel = "optio";
                            cpeCbsdIndication = false;
                            eirpCapability = 881586;
                            eirpCapabilityNewField = 3200.17;
                            height = 9044.25;
                            heightType = SasPortalInstallationParamsHeightTypeEnum.HEIGHT_TYPE_AGL;
                            horizontalAccuracy = 6457.85;
                            indoorDeployment = false;
                            latitude = 5883.17;
                            longitude = 3246.83;
                            verticalAccuracy = 8310.49;
                        }};;
                        isSigned = false;
                        measurementCapabilities = new org.openapis.openapi.models.shared.SasPortalDeviceConfigMeasurementCapabilitiesEnum[]{{
                            add(SasPortalDeviceConfigMeasurementCapabilitiesEnum.MEASUREMENT_CAPABILITY_RECEIVED_POWER_WITH_GRANT),
                            add(SasPortalDeviceConfigMeasurementCapabilitiesEnum.MEASUREMENT_CAPABILITY_UNSPECIFIED),
                            add(SasPortalDeviceConfigMeasurementCapabilitiesEnum.MEASUREMENT_CAPABILITY_RECEIVED_POWER_WITHOUT_GRANT),
                        }};
                        model = new SasPortalDeviceModel() {{
                            firmwareVersion = "quaerat";
                            hardwareVersion = "tempora";
                            name = "Bernadette Torp";
                            softwareVersion = "a";
                            vendor = "esse";
                        }};;
                        state = SasPortalDeviceConfigStateEnum.FINAL_;
                        updateTime = "iusto";
                        userId = "ipsum";
                    }};;
                    serialNumber = "quisquam";
                    state = SasPortalDeviceStateEnum.DEREGISTERED;
                }};;
                accessToken = "amet";
                alt = AltEnum.PROTO;
                callback = "accusamus";
                fields = "numquam";
                key = "enim";
                oauthToken = "dolorem";
                prettyPrint = false;
                quotaUser = "sapiente";
                uploadType = "totam";
                uploadProtocol = "nihil";
            }};            

            ProdTtSasportalNodesNodesDevicesCreateResponse res = sdk.nodes.prodTtSasportalNodesNodesDevicesCreate(req, new ProdTtSasportalNodesNodesDevicesCreateSecurity() {{
                option1 = new ProdTtSasportalNodesNodesDevicesCreateSecurityOption1("sit", "expedita") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.sasPortalDevice != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## prodTtSasportalNodesNodesDevicesCreateSigned

Creates a signed device under a node or customer.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProdTtSasportalNodesNodesDevicesCreateSignedRequest;
import org.openapis.openapi.models.operations.ProdTtSasportalNodesNodesDevicesCreateSignedResponse;
import org.openapis.openapi.models.operations.ProdTtSasportalNodesNodesDevicesCreateSignedSecurity;
import org.openapis.openapi.models.operations.ProdTtSasportalNodesNodesDevicesCreateSignedSecurityOption1;
import org.openapis.openapi.models.operations.ProdTtSasportalNodesNodesDevicesCreateSignedSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.SasPortalCreateSignedDeviceRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ProdTtSasportalNodesNodesDevicesCreateSignedRequest req = new ProdTtSasportalNodesNodesDevicesCreateSignedRequest("neque") {{
                dollarXgafv = XgafvEnum.ONE;
                sasPortalCreateSignedDeviceRequest = new SasPortalCreateSignedDeviceRequest() {{
                    encodedDevice = "vel";
                    installerId = "libero";
                }};;
                accessToken = "voluptas";
                alt = AltEnum.MEDIA;
                callback = "quam";
                fields = "ipsum";
                key = "incidunt";
                oauthToken = "qui";
                prettyPrint = false;
                quotaUser = "cupiditate";
                uploadType = "maxime";
                uploadProtocol = "pariatur";
            }};            

            ProdTtSasportalNodesNodesDevicesCreateSignedResponse res = sdk.nodes.prodTtSasportalNodesNodesDevicesCreateSigned(req, new ProdTtSasportalNodesNodesDevicesCreateSignedSecurity() {{
                option1 = new ProdTtSasportalNodesNodesDevicesCreateSignedSecurityOption1("soluta", "dicta") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.sasPortalDevice != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## prodTtSasportalNodesNodesDevicesList

Lists devices under a node or customer.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProdTtSasportalNodesNodesDevicesListRequest;
import org.openapis.openapi.models.operations.ProdTtSasportalNodesNodesDevicesListResponse;
import org.openapis.openapi.models.operations.ProdTtSasportalNodesNodesDevicesListSecurity;
import org.openapis.openapi.models.operations.ProdTtSasportalNodesNodesDevicesListSecurityOption1;
import org.openapis.openapi.models.operations.ProdTtSasportalNodesNodesDevicesListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ProdTtSasportalNodesNodesDevicesListRequest req = new ProdTtSasportalNodesNodesDevicesListRequest("laborum") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "incidunt";
                alt = AltEnum.JSON;
                callback = "dolores";
                fields = "distinctio";
                filter = "facilis";
                key = "aliquid";
                oauthToken = "quam";
                pageSize = 565421L;
                pageToken = "temporibus";
                prettyPrint = false;
                quotaUser = "qui";
                uploadType = "neque";
                uploadProtocol = "fugit";
            }};            

            ProdTtSasportalNodesNodesDevicesListResponse res = sdk.nodes.prodTtSasportalNodesNodesDevicesList(req, new ProdTtSasportalNodesNodesDevicesListSecurity() {{
                option1 = new ProdTtSasportalNodesNodesDevicesListSecurityOption1("magni", "odio") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.sasPortalListDevicesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## prodTtSasportalNodesNodesGet

Returns a requested node.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProdTtSasportalNodesNodesGetRequest;
import org.openapis.openapi.models.operations.ProdTtSasportalNodesNodesGetResponse;
import org.openapis.openapi.models.operations.ProdTtSasportalNodesNodesGetSecurity;
import org.openapis.openapi.models.operations.ProdTtSasportalNodesNodesGetSecurityOption1;
import org.openapis.openapi.models.operations.ProdTtSasportalNodesNodesGetSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ProdTtSasportalNodesNodesGetRequest req = new ProdTtSasportalNodesNodesGetRequest("sunt") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "nam";
                alt = AltEnum.PROTO;
                callback = "voluptatem";
                fields = "cumque";
                key = "soluta";
                oauthToken = "nobis";
                prettyPrint = false;
                quotaUser = "et";
                uploadType = "saepe";
                uploadProtocol = "ipsum";
            }};            

            ProdTtSasportalNodesNodesGetResponse res = sdk.nodes.prodTtSasportalNodesNodesGet(req, new ProdTtSasportalNodesNodesGetSecurity() {{
                option1 = new ProdTtSasportalNodesNodesGetSecurityOption1("veritatis", "nobis") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.sasPortalNode != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## prodTtSasportalNodesNodesMove

Moves a node under another node or customer.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProdTtSasportalNodesNodesMoveRequest;
import org.openapis.openapi.models.operations.ProdTtSasportalNodesNodesMoveResponse;
import org.openapis.openapi.models.operations.ProdTtSasportalNodesNodesMoveSecurity;
import org.openapis.openapi.models.operations.ProdTtSasportalNodesNodesMoveSecurityOption1;
import org.openapis.openapi.models.operations.ProdTtSasportalNodesNodesMoveSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.SasPortalMoveNodeRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ProdTtSasportalNodesNodesMoveRequest req = new ProdTtSasportalNodesNodesMoveRequest("quos") {{
                dollarXgafv = XgafvEnum.TWO;
                sasPortalMoveNodeRequest = new SasPortalMoveNodeRequest() {{
                    destination = "cupiditate";
                }};;
                accessToken = "aperiam";
                alt = AltEnum.PROTO;
                callback = "dolorem";
                fields = "dolore";
                key = "labore";
                oauthToken = "adipisci";
                prettyPrint = false;
                quotaUser = "dolorum";
                uploadType = "architecto";
                uploadProtocol = "quae";
            }};            

            ProdTtSasportalNodesNodesMoveResponse res = sdk.nodes.prodTtSasportalNodesNodesMove(req, new ProdTtSasportalNodesNodesMoveSecurity() {{
                option1 = new ProdTtSasportalNodesNodesMoveSecurityOption1("aut", "quas") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.sasPortalOperation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## prodTtSasportalNodesNodesNodesCreate

Creates a new node.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProdTtSasportalNodesNodesNodesCreateRequest;
import org.openapis.openapi.models.operations.ProdTtSasportalNodesNodesNodesCreateResponse;
import org.openapis.openapi.models.operations.ProdTtSasportalNodesNodesNodesCreateSecurity;
import org.openapis.openapi.models.operations.ProdTtSasportalNodesNodesNodesCreateSecurityOption1;
import org.openapis.openapi.models.operations.ProdTtSasportalNodesNodesNodesCreateSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.SasPortalNode;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ProdTtSasportalNodesNodesNodesCreateRequest req = new ProdTtSasportalNodesNodesNodesCreateRequest("itaque") {{
                dollarXgafv = XgafvEnum.ONE;
                sasPortalNode = new SasPortalNode() {{
                    displayName = "est";
                    name = "Sherman Wyman";
                    sasUserIds = new String[]{{
                        add("qui"),
                        add("quae"),
                        add("laudantium"),
                    }};
                }};;
                accessToken = "odio";
                alt = AltEnum.MEDIA;
                callback = "voluptatibus";
                fields = "quisquam";
                key = "vero";
                oauthToken = "omnis";
                prettyPrint = false;
                quotaUser = "quis";
                uploadType = "ipsum";
                uploadProtocol = "delectus";
            }};            

            ProdTtSasportalNodesNodesNodesCreateResponse res = sdk.nodes.prodTtSasportalNodesNodesNodesCreate(req, new ProdTtSasportalNodesNodesNodesCreateSecurity() {{
                option1 = new ProdTtSasportalNodesNodesNodesCreateSecurityOption1("voluptate", "consectetur") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.sasPortalNode != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## prodTtSasportalNodesNodesNodesList

Lists nodes.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProdTtSasportalNodesNodesNodesListRequest;
import org.openapis.openapi.models.operations.ProdTtSasportalNodesNodesNodesListResponse;
import org.openapis.openapi.models.operations.ProdTtSasportalNodesNodesNodesListSecurity;
import org.openapis.openapi.models.operations.ProdTtSasportalNodesNodesNodesListSecurityOption1;
import org.openapis.openapi.models.operations.ProdTtSasportalNodesNodesNodesListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ProdTtSasportalNodesNodesNodesListRequest req = new ProdTtSasportalNodesNodesNodesListRequest("vero") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "dignissimos";
                alt = AltEnum.PROTO;
                callback = "distinctio";
                fields = "quod";
                filter = "odio";
                key = "similique";
                oauthToken = "facilis";
                pageSize = 874288L;
                pageToken = "ducimus";
                prettyPrint = false;
                quotaUser = "dolore";
                uploadType = "quibusdam";
                uploadProtocol = "illum";
            }};            

            ProdTtSasportalNodesNodesNodesListResponse res = sdk.nodes.prodTtSasportalNodesNodesNodesList(req, new ProdTtSasportalNodesNodesNodesListSecurity() {{
                option1 = new ProdTtSasportalNodesNodesNodesListSecurityOption1("sequi", "natus") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.sasPortalListNodesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## prodTtSasportalNodesNodesPatch

Updates an existing node.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProdTtSasportalNodesNodesPatchRequest;
import org.openapis.openapi.models.operations.ProdTtSasportalNodesNodesPatchResponse;
import org.openapis.openapi.models.operations.ProdTtSasportalNodesNodesPatchSecurity;
import org.openapis.openapi.models.operations.ProdTtSasportalNodesNodesPatchSecurityOption1;
import org.openapis.openapi.models.operations.ProdTtSasportalNodesNodesPatchSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.SasPortalNode;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ProdTtSasportalNodesNodesPatchRequest req = new ProdTtSasportalNodesNodesPatchRequest("impedit") {{
                dollarXgafv = XgafvEnum.ONE;
                sasPortalNode = new SasPortalNode() {{
                    displayName = "voluptatibus";
                    name = "Freda Cormier";
                    sasUserIds = new String[]{{
                        add("iusto"),
                        add("eligendi"),
                        add("ducimus"),
                        add("alias"),
                    }};
                }};;
                accessToken = "officia";
                alt = AltEnum.JSON;
                callback = "ipsam";
                fields = "ea";
                key = "aspernatur";
                oauthToken = "vel";
                prettyPrint = false;
                quotaUser = "possimus";
                updateMask = "magnam";
                uploadType = "ratione";
                uploadProtocol = "ex";
            }};            

            ProdTtSasportalNodesNodesPatchResponse res = sdk.nodes.prodTtSasportalNodesNodesPatch(req, new ProdTtSasportalNodesNodesPatchSecurity() {{
                option1 = new ProdTtSasportalNodesNodesPatchSecurityOption1("laudantium", "dicta") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.sasPortalNode != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
