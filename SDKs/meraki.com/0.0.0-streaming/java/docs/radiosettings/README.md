# radioSettings

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
import org.openapis.openapi.models.operations.CreateNetworkWirelessRfProfileRequestBodyTwoFourGhzSettings;
import org.openapis.openapi.models.operations.CreateNetworkWirelessRfProfileResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quo") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateNetworkWirelessRfProfileRequest req = new CreateNetworkWirelessRfProfileRequest(                new CreateNetworkWirelessRfProfileRequestBody(CreateNetworkWirelessRfProfileRequestBodyBandSelectionTypeEnum.AP, "minus") {{
                                apBandSettings = new CreateNetworkWirelessRfProfileRequestBodyApBandSettings() {{
                                    bandOperationMode = CreateNetworkWirelessRfProfileRequestBodyApBandSettingsBandOperationModeEnum.DUAL;
                                    bandSteeringEnabled = false;
                                }};;
                                clientBalancingEnabled = false;
                                fiveGhzSettings = new CreateNetworkWirelessRfProfileRequestBodyFiveGhzSettings() {{
                                    channelWidth = "nostrum";
                                    maxPower = 669237L;
                                    minBitrate = 770873L;
                                    minPower = 963741L;
                                    rxsop = 735894L;
                                    validAutoChannels = new Long[]{{
                                        add(141506L),
                                        add(997437L),
                                        add(865946L),
                                        add(362888L),
                                    }};
                                }};;
                                minBitrateType = CreateNetworkWirelessRfProfileRequestBodyMinBitrateTypeEnum.BAND;
                                twoFourGhzSettings = new CreateNetworkWirelessRfProfileRequestBodyTwoFourGhzSettings() {{
                                    axEnabled = false;
                                    maxPower = 45234L;
                                    minBitrate = 4864.1;
                                    minPower = 325297L;
                                    rxsop = 448369L;
                                    validAutoChannels = new Long[]{{
                                        add(567846L),
                                        add(172195L),
                                    }};
                                }};;
                            }};, "error");            

            CreateNetworkWirelessRfProfileResponse res = sdk.radioSettings.createNetworkWirelessRfProfile(req);

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
                .setSecurity(new Security("veritatis") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteNetworkWirelessRfProfileRequest req = new DeleteNetworkWirelessRfProfileRequest("ducimus", "voluptate");            

            DeleteNetworkWirelessRfProfileResponse res = sdk.radioSettings.deleteNetworkWirelessRfProfile(req);

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
                .setSecurity(new Security("pariatur") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkWirelessRfProfileRequest req = new GetNetworkWirelessRfProfileRequest("itaque", "similique");            

            GetNetworkWirelessRfProfileResponse res = sdk.radioSettings.getNetworkWirelessRfProfile(req);

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
                .setSecurity(new Security("optio") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkWirelessRfProfilesRequest req = new GetNetworkWirelessRfProfilesRequest("ex") {{
                includeTemplateProfiles = false;
            }};            

            GetNetworkWirelessRfProfilesResponse res = sdk.radioSettings.getNetworkWirelessRfProfiles(req);

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
import org.openapis.openapi.models.operations.UpdateNetworkWirelessRfProfileRequestBodyTwoFourGhzSettings;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessRfProfileResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quaerat") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkWirelessRfProfileRequest req = new UpdateNetworkWirelessRfProfileRequest("commodi", "officiis") {{
                requestBody = new UpdateNetworkWirelessRfProfileRequestBody() {{
                    apBandSettings = new UpdateNetworkWirelessRfProfileRequestBodyApBandSettings() {{
                        bandOperationMode = UpdateNetworkWirelessRfProfileRequestBodyApBandSettingsBandOperationModeEnum.DUAL;
                        bandSteeringEnabled = false;
                    }};;
                    bandSelectionType = UpdateNetworkWirelessRfProfileRequestBodyBandSelectionTypeEnum.SSID;
                    clientBalancingEnabled = false;
                    fiveGhzSettings = new UpdateNetworkWirelessRfProfileRequestBodyFiveGhzSettings() {{
                        channelWidth = "exercitationem";
                        maxPower = 463344L;
                        minBitrate = 211455L;
                        minPower = 264619L;
                        rxsop = 59383L;
                        validAutoChannels = new Long[]{{
                            add(876027L),
                            add(194901L),
                            add(918547L),
                        }};
                    }};;
                    minBitrateType = UpdateNetworkWirelessRfProfileRequestBodyMinBitrateTypeEnum.SSID;
                    name = "Lila Harvey";
                    twoFourGhzSettings = new UpdateNetworkWirelessRfProfileRequestBodyTwoFourGhzSettings() {{
                        axEnabled = false;
                        maxPower = 724994L;
                        minBitrate = 1158.98;
                        minPower = 164488L;
                        rxsop = 899867L;
                        validAutoChannels = new Long[]{{
                            add(56877L),
                            add(497357L),
                            add(980486L),
                        }};
                    }};;
                }};;
            }};            

            UpdateNetworkWirelessRfProfileResponse res = sdk.radioSettings.updateNetworkWirelessRfProfile(req);

            if (res.updateNetworkWirelessRfProfile200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
