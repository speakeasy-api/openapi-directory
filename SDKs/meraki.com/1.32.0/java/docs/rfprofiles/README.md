# rfProfiles

### Available Operations

* [createNetworkWirelessRfProfile](#createnetworkwirelessrfprofile) - Creates new RF profile for this network
* [deleteNetworkWirelessRfProfile](#deletenetworkwirelessrfprofile) - Delete a RF Profile
* [getNetworkWirelessRfProfile](#getnetworkwirelessrfprofile) - Return a RF profile
* [getNetworkWirelessRfProfiles](#getnetworkwirelessrfprofiles) - List the non-basic RF profiles for this network
* [updateNetworkWirelessRfProfile](#updatenetworkwirelessrfprofile) - Updates specified RF profile for this network

## createNetworkWirelessRfProfile

Creates new RF profile for this network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateNetworkWirelessRfProfileRequest;
import org.openapis.openapi.models.operations.CreateNetworkWirelessRfProfileRequestBody;
import org.openapis.openapi.models.operations.CreateNetworkWirelessRfProfileRequestBodyApBandSettings;
import org.openapis.openapi.models.operations.CreateNetworkWirelessRfProfileRequestBodyApBandSettingsBandOperationModeEnum;
import org.openapis.openapi.models.operations.CreateNetworkWirelessRfProfileRequestBodyBandSelectionTypeEnum;
import org.openapis.openapi.models.operations.CreateNetworkWirelessRfProfileRequestBodyFiveGhzSettings;
import org.openapis.openapi.models.operations.CreateNetworkWirelessRfProfileRequestBodyMinBitrateTypeEnum;
import org.openapis.openapi.models.operations.CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings0;
import org.openapis.openapi.models.operations.CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings0BandOperationModeEnum;
import org.openapis.openapi.models.operations.CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings10;
import org.openapis.openapi.models.operations.CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings10BandOperationModeEnum;
import org.openapis.openapi.models.operations.CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings11;
import org.openapis.openapi.models.operations.CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings11BandOperationModeEnum;
import org.openapis.openapi.models.operations.CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings12;
import org.openapis.openapi.models.operations.CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings12BandOperationModeEnum;
import org.openapis.openapi.models.operations.CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings13;
import org.openapis.openapi.models.operations.CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings13BandOperationModeEnum;
import org.openapis.openapi.models.operations.CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings14;
import org.openapis.openapi.models.operations.CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings14BandOperationModeEnum;
import org.openapis.openapi.models.operations.CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings1;
import org.openapis.openapi.models.operations.CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings1BandOperationModeEnum;
import org.openapis.openapi.models.operations.CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings2;
import org.openapis.openapi.models.operations.CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings2BandOperationModeEnum;
import org.openapis.openapi.models.operations.CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings3;
import org.openapis.openapi.models.operations.CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings3BandOperationModeEnum;
import org.openapis.openapi.models.operations.CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings4;
import org.openapis.openapi.models.operations.CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings4BandOperationModeEnum;
import org.openapis.openapi.models.operations.CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings5;
import org.openapis.openapi.models.operations.CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings5BandOperationModeEnum;
import org.openapis.openapi.models.operations.CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings6;
import org.openapis.openapi.models.operations.CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings6BandOperationModeEnum;
import org.openapis.openapi.models.operations.CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings7;
import org.openapis.openapi.models.operations.CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings7BandOperationModeEnum;
import org.openapis.openapi.models.operations.CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings8;
import org.openapis.openapi.models.operations.CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings8BandOperationModeEnum;
import org.openapis.openapi.models.operations.CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings9;
import org.openapis.openapi.models.operations.CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings9BandOperationModeEnum;
import org.openapis.openapi.models.operations.CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings;
import org.openapis.openapi.models.operations.CreateNetworkWirelessRfProfileRequestBodyTransmission;
import org.openapis.openapi.models.operations.CreateNetworkWirelessRfProfileRequestBodyTwoFourGhzSettings;
import org.openapis.openapi.models.operations.CreateNetworkWirelessRfProfileResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sapiente") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateNetworkWirelessRfProfileRequest req = new CreateNetworkWirelessRfProfileRequest(                new CreateNetworkWirelessRfProfileRequestBody(CreateNetworkWirelessRfProfileRequestBodyBandSelectionTypeEnum.AP, "voluptatum") {{
                                apBandSettings = new CreateNetworkWirelessRfProfileRequestBodyApBandSettings() {{
                                    bandOperationMode = CreateNetworkWirelessRfProfileRequestBodyApBandSettingsBandOperationModeEnum.FIVEGHZ;
                                    bandSteeringEnabled = false;
                                }};;
                                clientBalancingEnabled = false;
                                fiveGhzSettings = new CreateNetworkWirelessRfProfileRequestBodyFiveGhzSettings() {{
                                    channelWidth = "alias";
                                    maxPower = 476931L;
                                    minBitrate = 915155L;
                                    minPower = 808631L;
                                    rxsop = 959773L;
                                    validAutoChannels = new Long[]{{
                                        add(970881L),
                                        add(224854L),
                                    }};
                                }};;
                                minBitrateType = CreateNetworkWirelessRfProfileRequestBodyMinBitrateTypeEnum.BAND;
                                perSsidSettings = new CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings() {{
                                    zero = new CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings0() {{
                                        bandOperationMode = CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings0BandOperationModeEnum.DUAL;
                                        bandSteeringEnabled = false;
                                        minBitrate = 3208.35;
                                    }};;
                                    one = new CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings1() {{
                                        bandOperationMode = CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings1BandOperationModeEnum.DUAL;
                                        bandSteeringEnabled = false;
                                        minBitrate = 6661.11;
                                    }};;
                                    ten = new CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings10() {{
                                        bandOperationMode = CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings10BandOperationModeEnum.FIVEGHZ;
                                        bandSteeringEnabled = false;
                                        minBitrate = 3183.04;
                                    }};;
                                    eleven = new CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings11() {{
                                        bandOperationMode = CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings11BandOperationModeEnum.TWO4GHZ;
                                        bandSteeringEnabled = false;
                                        minBitrate = 5585.14;
                                    }};;
                                    twelve = new CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings12() {{
                                        bandOperationMode = CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings12BandOperationModeEnum.FIVEGHZ;
                                        bandSteeringEnabled = false;
                                        minBitrate = 1004.12;
                                    }};;
                                    thirteen = new CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings13() {{
                                        bandOperationMode = CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings13BandOperationModeEnum.DUAL;
                                        bandSteeringEnabled = false;
                                        minBitrate = 2842.36;
                                    }};;
                                    fourteen = new CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings14() {{
                                        bandOperationMode = CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings14BandOperationModeEnum.TWO4GHZ;
                                        bandSteeringEnabled = false;
                                        minBitrate = 9118.33;
                                    }};;
                                    two = new CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings2() {{
                                        bandOperationMode = CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings2BandOperationModeEnum.DUAL;
                                        bandSteeringEnabled = false;
                                        minBitrate = 205.61;
                                    }};;
                                    three = new CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings3() {{
                                        bandOperationMode = CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings3BandOperationModeEnum.FIVEGHZ;
                                        bandSteeringEnabled = false;
                                        minBitrate = 5035.43;
                                    }};;
                                    four = new CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings4() {{
                                        bandOperationMode = CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings4BandOperationModeEnum.FIVEGHZ;
                                        bandSteeringEnabled = false;
                                        minBitrate = 1781.15;
                                    }};;
                                    five = new CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings5() {{
                                        bandOperationMode = CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings5BandOperationModeEnum.TWO4GHZ;
                                        bandSteeringEnabled = false;
                                        minBitrate = 8500.85;
                                    }};;
                                    six = new CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings6() {{
                                        bandOperationMode = CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings6BandOperationModeEnum.TWO4GHZ;
                                        bandSteeringEnabled = false;
                                        minBitrate = 5241.84;
                                    }};;
                                    seven = new CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings7() {{
                                        bandOperationMode = CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings7BandOperationModeEnum.FIVEGHZ;
                                        bandSteeringEnabled = false;
                                        minBitrate = 9621.51;
                                    }};;
                                    eight = new CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings8() {{
                                        bandOperationMode = CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings8BandOperationModeEnum.FIVEGHZ;
                                        bandSteeringEnabled = false;
                                        minBitrate = 5187.47;
                                    }};;
                                    nine = new CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings9() {{
                                        bandOperationMode = CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings9BandOperationModeEnum.DUAL;
                                        bandSteeringEnabled = false;
                                        minBitrate = 2904.27;
                                    }};;
                                }};;
                                transmission = new CreateNetworkWirelessRfProfileRequestBodyTransmission() {{
                                    enabled = false;
                                }};;
                                twoFourGhzSettings = new CreateNetworkWirelessRfProfileRequestBodyTwoFourGhzSettings() {{
                                    axEnabled = false;
                                    maxPower = 948247L;
                                    minBitrate = 1258.26;
                                    minPower = 808480L;
                                    rxsop = 12369L;
                                    validAutoChannels = new Long[]{{
                                        add(472579L),
                                    }};
                                }};;
                            }};, "tempora");            

            CreateNetworkWirelessRfProfileResponse res = sdk.rfProfiles.createNetworkWirelessRfProfile(req);

            if (res.createNetworkWirelessRfProfile201ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteNetworkWirelessRfProfile

Delete a RF Profile

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteNetworkWirelessRfProfileRequest;
import org.openapis.openapi.models.operations.DeleteNetworkWirelessRfProfileResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("cupiditate") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteNetworkWirelessRfProfileRequest req = new DeleteNetworkWirelessRfProfileRequest("voluptatibus", "consequuntur");            

            DeleteNetworkWirelessRfProfileResponse res = sdk.rfProfiles.deleteNetworkWirelessRfProfile(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkWirelessRfProfile

Return a RF profile

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkWirelessRfProfileRequest;
import org.openapis.openapi.models.operations.GetNetworkWirelessRfProfileResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("optio") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkWirelessRfProfileRequest req = new GetNetworkWirelessRfProfileRequest("quis", "tempora");            

            GetNetworkWirelessRfProfileResponse res = sdk.rfProfiles.getNetworkWirelessRfProfile(req);

            if (res.getNetworkWirelessRfProfile200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkWirelessRfProfiles

List the non-basic RF profiles for this network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkWirelessRfProfilesRequest;
import org.openapis.openapi.models.operations.GetNetworkWirelessRfProfilesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("suscipit") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkWirelessRfProfilesRequest req = new GetNetworkWirelessRfProfilesRequest("veniam") {{
                includeTemplateProfiles = false;
            }};            

            GetNetworkWirelessRfProfilesResponse res = sdk.rfProfiles.getNetworkWirelessRfProfiles(req);

            if (res.getNetworkWirelessRfProfiles200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkWirelessRfProfile

Updates specified RF profile for this network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessRfProfileRequest;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessRfProfileRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessRfProfileRequestBodyApBandSettings;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessRfProfileRequestBodyApBandSettingsBandOperationModeEnum;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessRfProfileRequestBodyBandSelectionTypeEnum;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessRfProfileRequestBodyFiveGhzSettings;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessRfProfileRequestBodyMinBitrateTypeEnum;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings0;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings0BandOperationModeEnum;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings10;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings10BandOperationModeEnum;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings11;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings11BandOperationModeEnum;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings12;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings12BandOperationModeEnum;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings13;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings13BandOperationModeEnum;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings14;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings14BandOperationModeEnum;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings1;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings1BandOperationModeEnum;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings2;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings2BandOperationModeEnum;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings3;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings3BandOperationModeEnum;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings4;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings4BandOperationModeEnum;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings5;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings5BandOperationModeEnum;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings6;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings6BandOperationModeEnum;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings7;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings7BandOperationModeEnum;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings8;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings8BandOperationModeEnum;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings9;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings9BandOperationModeEnum;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessRfProfileRequestBodyTransmission;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessRfProfileRequestBodyTwoFourGhzSettings;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessRfProfileResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ullam") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkWirelessRfProfileRequest req = new UpdateNetworkWirelessRfProfileRequest("labore", "perspiciatis") {{
                requestBody = new UpdateNetworkWirelessRfProfileRequestBody() {{
                    apBandSettings = new UpdateNetworkWirelessRfProfileRequestBodyApBandSettings() {{
                        bandOperationMode = UpdateNetworkWirelessRfProfileRequestBodyApBandSettingsBandOperationModeEnum.DUAL;
                        bandSteeringEnabled = false;
                    }};;
                    bandSelectionType = UpdateNetworkWirelessRfProfileRequestBodyBandSelectionTypeEnum.SSID;
                    clientBalancingEnabled = false;
                    fiveGhzSettings = new UpdateNetworkWirelessRfProfileRequestBodyFiveGhzSettings() {{
                        channelWidth = "non";
                        maxPower = 501098L;
                        minBitrate = 958483L;
                        minPower = 267685L;
                        rxsop = 213244L;
                        validAutoChannels = new Long[]{{
                            add(217721L),
                            add(977961L),
                            add(249326L),
                            add(767567L),
                        }};
                    }};;
                    minBitrateType = UpdateNetworkWirelessRfProfileRequestBodyMinBitrateTypeEnum.SSID;
                    name = "Miss Hilda Wolff Jr.";
                    perSsidSettings = new UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings() {{
                        zero = new UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings0() {{
                            bandOperationMode = UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings0BandOperationModeEnum.TWO4GHZ;
                            bandSteeringEnabled = false;
                            minBitrate = 9690.68;
                        }};;
                        one = new UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings1() {{
                            bandOperationMode = UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings1BandOperationModeEnum.FIVEGHZ;
                            bandSteeringEnabled = false;
                            minBitrate = 6174.26;
                        }};;
                        ten = new UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings10() {{
                            bandOperationMode = UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings10BandOperationModeEnum.FIVEGHZ;
                            bandSteeringEnabled = false;
                            minBitrate = 249.03;
                        }};;
                        eleven = new UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings11() {{
                            bandOperationMode = UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings11BandOperationModeEnum.DUAL;
                            bandSteeringEnabled = false;
                            minBitrate = 2245.36;
                        }};;
                        twelve = new UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings12() {{
                            bandOperationMode = UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings12BandOperationModeEnum.TWO4GHZ;
                            bandSteeringEnabled = false;
                            minBitrate = 5192.82;
                        }};;
                        thirteen = new UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings13() {{
                            bandOperationMode = UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings13BandOperationModeEnum.TWO4GHZ;
                            bandSteeringEnabled = false;
                            minBitrate = 9436.01;
                        }};;
                        fourteen = new UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings14() {{
                            bandOperationMode = UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings14BandOperationModeEnum.DUAL;
                            bandSteeringEnabled = false;
                            minBitrate = 505.88;
                        }};;
                        two = new UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings2() {{
                            bandOperationMode = UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings2BandOperationModeEnum.DUAL;
                            bandSteeringEnabled = false;
                            minBitrate = 4528.29;
                        }};;
                        three = new UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings3() {{
                            bandOperationMode = UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings3BandOperationModeEnum.TWO4GHZ;
                            bandSteeringEnabled = false;
                            minBitrate = 905.34;
                        }};;
                        four = new UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings4() {{
                            bandOperationMode = UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings4BandOperationModeEnum.DUAL;
                            bandSteeringEnabled = false;
                            minBitrate = 4137.65;
                        }};;
                        five = new UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings5() {{
                            bandOperationMode = UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings5BandOperationModeEnum.TWO4GHZ;
                            bandSteeringEnabled = false;
                            minBitrate = 1363.65;
                        }};;
                        six = new UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings6() {{
                            bandOperationMode = UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings6BandOperationModeEnum.TWO4GHZ;
                            bandSteeringEnabled = false;
                            minBitrate = 8277;
                        }};;
                        seven = new UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings7() {{
                            bandOperationMode = UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings7BandOperationModeEnum.DUAL;
                            bandSteeringEnabled = false;
                            minBitrate = 3091.93;
                        }};;
                        eight = new UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings8() {{
                            bandOperationMode = UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings8BandOperationModeEnum.FIVEGHZ;
                            bandSteeringEnabled = false;
                            minBitrate = 7663.23;
                        }};;
                        nine = new UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings9() {{
                            bandOperationMode = UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings9BandOperationModeEnum.DUAL;
                            bandSteeringEnabled = false;
                            minBitrate = 1132.63;
                        }};;
                    }};;
                    transmission = new UpdateNetworkWirelessRfProfileRequestBodyTransmission() {{
                        enabled = false;
                    }};;
                    twoFourGhzSettings = new UpdateNetworkWirelessRfProfileRequestBodyTwoFourGhzSettings() {{
                        axEnabled = false;
                        maxPower = 669754L;
                        minBitrate = 9608.99;
                        minPower = 351932L;
                        rxsop = 560823L;
                        validAutoChannels = new Long[]{{
                            add(236987L),
                            add(600342L),
                            add(802165L),
                        }};
                    }};;
                }};;
            }};            

            UpdateNetworkWirelessRfProfileResponse res = sdk.rfProfiles.updateNetworkWirelessRfProfile(req);

            if (res.updateNetworkWirelessRfProfile200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
