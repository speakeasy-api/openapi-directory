# wireless

### Available Operations

* [createNetworkWirelessRfProfile](#createnetworkwirelessrfprofile) - Creates new RF profile for this network
* [createNetworkWirelessSsidIdentityPsk](#createnetworkwirelessssididentitypsk) - Create an Identity PSK
* [deleteNetworkWirelessRfProfile](#deletenetworkwirelessrfprofile) - Delete a RF Profile
* [deleteNetworkWirelessSsidIdentityPsk](#deletenetworkwirelessssididentitypsk) - Delete an Identity PSK
* [getDeviceWirelessBluetoothSettings](#getdevicewirelessbluetoothsettings) - Return the bluetooth settings for a wireless device
* [getDeviceWirelessConnectionStats](#getdevicewirelessconnectionstats) - Aggregated connectivity info for a given AP on this network
* [getDeviceWirelessLatencyStats](#getdevicewirelesslatencystats) - Aggregated latency info for a given AP on this network
* [getDeviceWirelessRadioSettings](#getdevicewirelessradiosettings) - Return the radio settings of a device
* [getDeviceWirelessStatus](#getdevicewirelessstatus) - Return the SSID statuses of an access point
* [getNetworkWirelessAirMarshal](#getnetworkwirelessairmarshal) - List Air Marshal scan results from a network
* [getNetworkWirelessAlternateManagementInterface](#getnetworkwirelessalternatemanagementinterface) - Return alternate management interface and devices with IP assigned
* [getNetworkWirelessBilling](#getnetworkwirelessbilling) - Return the billing settings of this network
* [getNetworkWirelessBluetoothSettings](#getnetworkwirelessbluetoothsettings) - Return the Bluetooth settings for a network. <a href="https://documentation.meraki.com/MR/Bluetooth/Bluetooth_Low_Energy_(BLE)">Bluetooth settings</a> must be enabled on the network.
* [getNetworkWirelessChannelUtilizationHistory](#getnetworkwirelesschannelutilizationhistory) - Return AP channel utilization over time for a device or network client
* [getNetworkWirelessClientConnectionStats](#getnetworkwirelessclientconnectionstats) - Aggregated connectivity info for a given client on this network
* [getNetworkWirelessClientConnectivityEvents](#getnetworkwirelessclientconnectivityevents) - List the wireless connectivity events for a client within a network in the timespan.
* [getNetworkWirelessClientCountHistory](#getnetworkwirelessclientcounthistory) - Return wireless client counts over time for a network, device, or network client
* [getNetworkWirelessClientLatencyHistory](#getnetworkwirelessclientlatencyhistory) - Return the latency history for a client
* [getNetworkWirelessClientLatencyStats](#getnetworkwirelessclientlatencystats) - Aggregated latency info for a given client on this network
* [getNetworkWirelessClientsConnectionStats](#getnetworkwirelessclientsconnectionstats) - Aggregated connectivity info for this network, grouped by clients
* [getNetworkWirelessClientsLatencyStats](#getnetworkwirelessclientslatencystats) - Aggregated latency info for this network, grouped by clients
* [getNetworkWirelessConnectionStats](#getnetworkwirelessconnectionstats) - Aggregated connectivity info for this network
* [getNetworkWirelessDataRateHistory](#getnetworkwirelessdataratehistory) - Return PHY data rates over time for a network, device, or network client
* [getNetworkWirelessDevicesConnectionStats](#getnetworkwirelessdevicesconnectionstats) - Aggregated connectivity info for this network, grouped by node
* [getNetworkWirelessDevicesLatencyStats](#getnetworkwirelessdeviceslatencystats) - Aggregated latency info for this network, grouped by node
* [getNetworkWirelessFailedConnections](#getnetworkwirelessfailedconnections) - List of all failed client connection events on this network in a given time range
* [getNetworkWirelessLatencyHistory](#getnetworkwirelesslatencyhistory) - Return average wireless latency over time for a network, device, or network client
* [getNetworkWirelessLatencyStats](#getnetworkwirelesslatencystats) - Aggregated latency info for this network
* [getNetworkWirelessMeshStatuses](#getnetworkwirelessmeshstatuses) - List wireless mesh statuses for repeaters
* [getNetworkWirelessRfProfile](#getnetworkwirelessrfprofile) - Return a RF profile
* [getNetworkWirelessRfProfiles](#getnetworkwirelessrfprofiles) - List the non-basic RF profiles for this network
* [getNetworkWirelessSettings](#getnetworkwirelesssettings) - Return the wireless settings for a network
* [getNetworkWirelessSignalQualityHistory](#getnetworkwirelesssignalqualityhistory) - Return signal quality (SNR/RSSI) over time for a device or network client
* [getNetworkWirelessSsid](#getnetworkwirelessssid) - Return a single MR SSID
* [getNetworkWirelessSsidBonjourForwarding](#getnetworkwirelessssidbonjourforwarding) - List the Bonjour forwarding setting and rules for the SSID
* [getNetworkWirelessSsidDeviceTypeGroupPolicies](#getnetworkwirelessssiddevicetypegrouppolicies) - List the device type group policies for the SSID
* [getNetworkWirelessSsidEapOverride](#getnetworkwirelessssideapoverride) - Return the EAP overridden parameters for an SSID
* [getNetworkWirelessSsidFirewallL3FirewallRules](#getnetworkwirelessssidfirewalll3firewallrules) - Return the L3 firewall rules for an SSID on an MR network
* [getNetworkWirelessSsidFirewallL7FirewallRules](#getnetworkwirelessssidfirewalll7firewallrules) - Return the L7 firewall rules for an SSID on an MR network
* [getNetworkWirelessSsidHotspot20](#getnetworkwirelessssidhotspot20) - Return the Hotspot 2.0 settings for an SSID
* [getNetworkWirelessSsidIdentityPsk](#getnetworkwirelessssididentitypsk) - Return an Identity PSK
* [getNetworkWirelessSsidIdentityPsks](#getnetworkwirelessssididentitypsks) - List all Identity PSKs in a wireless network
* [getNetworkWirelessSsidSchedules](#getnetworkwirelessssidschedules) - List the outage schedule for the SSID
* [getNetworkWirelessSsidSplashSettings](#getnetworkwirelessssidsplashsettings) - Display the splash page settings for the given SSID
* [getNetworkWirelessSsidTrafficShapingRules](#getnetworkwirelessssidtrafficshapingrules) - Display the traffic shaping settings for a SSID on an MR network
* [getNetworkWirelessSsidVpn](#getnetworkwirelessssidvpn) - List the VPN settings for the SSID.
* [getNetworkWirelessSsids](#getnetworkwirelessssids) - List the MR SSIDs in a network
* [getNetworkWirelessUsageHistory](#getnetworkwirelessusagehistory) - Return AP usage over time for a device or network client
* [getOrganizationWirelessDevicesEthernetStatuses](#getorganizationwirelessdevicesethernetstatuses) - Endpoint to see power status for wireless devices
* [updateDeviceWirelessBluetoothSettings](#updatedevicewirelessbluetoothsettings) - Update the bluetooth settings for a wireless device
* [updateDeviceWirelessRadioSettings](#updatedevicewirelessradiosettings) - Update the radio settings of a device
* [updateNetworkWirelessAlternateManagementInterface](#updatenetworkwirelessalternatemanagementinterface) - Update alternate management interface and device static IP
* [updateNetworkWirelessBilling](#updatenetworkwirelessbilling) - Update the billing settings
* [updateNetworkWirelessBluetoothSettings](#updatenetworkwirelessbluetoothsettings) - Update the Bluetooth settings for a network
* [updateNetworkWirelessRfProfile](#updatenetworkwirelessrfprofile) - Updates specified RF profile for this network
* [updateNetworkWirelessSettings](#updatenetworkwirelesssettings) - Update the wireless settings for a network
* [updateNetworkWirelessSsid](#updatenetworkwirelessssid) - Update the attributes of an MR SSID
* [updateNetworkWirelessSsidBonjourForwarding](#updatenetworkwirelessssidbonjourforwarding) - Update the bonjour forwarding setting and rules for the SSID
* [updateNetworkWirelessSsidDeviceTypeGroupPolicies](#updatenetworkwirelessssiddevicetypegrouppolicies) - Update the device type group policies for the SSID
* [updateNetworkWirelessSsidEapOverride](#updatenetworkwirelessssideapoverride) - Update the EAP overridden parameters for an SSID.
* [updateNetworkWirelessSsidFirewallL3FirewallRules](#updatenetworkwirelessssidfirewalll3firewallrules) - Update the L3 firewall rules of an SSID on an MR network
* [updateNetworkWirelessSsidFirewallL7FirewallRules](#updatenetworkwirelessssidfirewalll7firewallrules) - Update the L7 firewall rules of an SSID on an MR network
* [updateNetworkWirelessSsidHotspot20](#updatenetworkwirelessssidhotspot20) - Update the Hotspot 2.0 settings of an SSID
* [updateNetworkWirelessSsidIdentityPsk](#updatenetworkwirelessssididentitypsk) - Update an Identity PSK
* [updateNetworkWirelessSsidSchedules](#updatenetworkwirelessssidschedules) - Update the outage schedule for the SSID
* [updateNetworkWirelessSsidSplashSettings](#updatenetworkwirelessssidsplashsettings) - Modify the splash page settings for the given SSID
* [updateNetworkWirelessSsidTrafficShapingRules](#updatenetworkwirelessssidtrafficshapingrules) - Update the traffic shaping settings for an SSID on an MR network
* [updateNetworkWirelessSsidVpn](#updatenetworkwirelessssidvpn) - Update the VPN settings for the SSID

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
                .setSecurity(new Security("ullam") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateNetworkWirelessRfProfileRequest req = new CreateNetworkWirelessRfProfileRequest(                new CreateNetworkWirelessRfProfileRequestBody(CreateNetworkWirelessRfProfileRequestBodyBandSelectionTypeEnum.SSID, "natus") {{
                                apBandSettings = new CreateNetworkWirelessRfProfileRequestBodyApBandSettings() {{
                                    bandOperationMode = CreateNetworkWirelessRfProfileRequestBodyApBandSettingsBandOperationModeEnum.DUAL;
                                    bandSteeringEnabled = false;
                                }};;
                                clientBalancingEnabled = false;
                                fiveGhzSettings = new CreateNetworkWirelessRfProfileRequestBodyFiveGhzSettings() {{
                                    channelWidth = "cum";
                                    maxPower = 43466L;
                                    minBitrate = 940276L;
                                    minPower = 438457L;
                                    rxsop = 765916L;
                                    validAutoChannels = new Long[]{{
                                        add(528622L),
                                    }};
                                }};;
                                minBitrateType = CreateNetworkWirelessRfProfileRequestBodyMinBitrateTypeEnum.BAND;
                                perSsidSettings = new CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings() {{
                                    zero = new CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings0() {{
                                        bandOperationMode = CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings0BandOperationModeEnum.FIVEGHZ;
                                        bandSteeringEnabled = false;
                                        minBitrate = 3646.97;
                                    }};;
                                    one = new CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings1() {{
                                        bandOperationMode = CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings1BandOperationModeEnum.DUAL;
                                        bandSteeringEnabled = false;
                                        minBitrate = 8251.71;
                                    }};;
                                    ten = new CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings10() {{
                                        bandOperationMode = CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings10BandOperationModeEnum.DUAL;
                                        bandSteeringEnabled = false;
                                        minBitrate = 5343.78;
                                    }};;
                                    eleven = new CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings11() {{
                                        bandOperationMode = CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings11BandOperationModeEnum.TWO4GHZ;
                                        bandSteeringEnabled = false;
                                        minBitrate = 9049.12;
                                    }};;
                                    twelve = new CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings12() {{
                                        bandOperationMode = CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings12BandOperationModeEnum.TWO4GHZ;
                                        bandSteeringEnabled = false;
                                        minBitrate = 1716.63;
                                    }};;
                                    thirteen = new CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings13() {{
                                        bandOperationMode = CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings13BandOperationModeEnum.TWO4GHZ;
                                        bandSteeringEnabled = false;
                                        minBitrate = 8845.68;
                                    }};;
                                    fourteen = new CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings14() {{
                                        bandOperationMode = CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings14BandOperationModeEnum.FIVEGHZ;
                                        bandSteeringEnabled = false;
                                        minBitrate = 3778.42;
                                    }};;
                                    two = new CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings2() {{
                                        bandOperationMode = CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings2BandOperationModeEnum.DUAL;
                                        bandSteeringEnabled = false;
                                        minBitrate = 8862.82;
                                    }};;
                                    three = new CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings3() {{
                                        bandOperationMode = CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings3BandOperationModeEnum.FIVEGHZ;
                                        bandSteeringEnabled = false;
                                        minBitrate = 4817.41;
                                    }};;
                                    four = new CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings4() {{
                                        bandOperationMode = CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings4BandOperationModeEnum.DUAL;
                                        bandSteeringEnabled = false;
                                        minBitrate = 8399.9;
                                    }};;
                                    five = new CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings5() {{
                                        bandOperationMode = CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings5BandOperationModeEnum.DUAL;
                                        bandSteeringEnabled = false;
                                        minBitrate = 3887.29;
                                    }};;
                                    six = new CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings6() {{
                                        bandOperationMode = CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings6BandOperationModeEnum.TWO4GHZ;
                                        bandSteeringEnabled = false;
                                        minBitrate = 1974.86;
                                    }};;
                                    seven = new CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings7() {{
                                        bandOperationMode = CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings7BandOperationModeEnum.FIVEGHZ;
                                        bandSteeringEnabled = false;
                                        minBitrate = 7565.61;
                                    }};;
                                    eight = new CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings8() {{
                                        bandOperationMode = CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings8BandOperationModeEnum.TWO4GHZ;
                                        bandSteeringEnabled = false;
                                        minBitrate = 7937.8;
                                    }};;
                                    nine = new CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings9() {{
                                        bandOperationMode = CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings9BandOperationModeEnum.TWO4GHZ;
                                        bandSteeringEnabled = false;
                                        minBitrate = 2431;
                                    }};;
                                }};;
                                transmission = new CreateNetworkWirelessRfProfileRequestBodyTransmission() {{
                                    enabled = false;
                                }};;
                                twoFourGhzSettings = new CreateNetworkWirelessRfProfileRequestBodyTwoFourGhzSettings() {{
                                    axEnabled = false;
                                    maxPower = 529958L;
                                    minBitrate = 4563.51;
                                    minPower = 319488L;
                                    rxsop = 341744L;
                                    validAutoChannels = new Long[]{{
                                        add(579842L),
                                        add(937366L),
                                        add(788484L),
                                    }};
                                }};;
                            }};, "officiis");            

            CreateNetworkWirelessRfProfileResponse res = sdk.wireless.createNetworkWirelessRfProfile(req);

            if (res.createNetworkWirelessRfProfile201ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createNetworkWirelessSsidIdentityPsk

Create an Identity PSK

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateNetworkWirelessSsidIdentityPskRequest;
import org.openapis.openapi.models.operations.CreateNetworkWirelessSsidIdentityPskRequestBody;
import org.openapis.openapi.models.operations.CreateNetworkWirelessSsidIdentityPskResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("enim") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateNetworkWirelessSsidIdentityPskRequest req = new CreateNetworkWirelessSsidIdentityPskRequest(                new CreateNetworkWirelessSsidIdentityPskRequestBody("placeat", "voluptas") {{
                                passphrase = "quasi";
                            }};, "quisquam", "quasi");            

            CreateNetworkWirelessSsidIdentityPskResponse res = sdk.wireless.createNetworkWirelessSsidIdentityPsk(req);

            if (res.createNetworkWirelessSsidIdentityPsk201ApplicationJSONObject != null) {
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
                .setSecurity(new Security("aut") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteNetworkWirelessRfProfileRequest req = new DeleteNetworkWirelessRfProfileRequest("laudantium", "officia");            

            DeleteNetworkWirelessRfProfileResponse res = sdk.wireless.deleteNetworkWirelessRfProfile(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteNetworkWirelessSsidIdentityPsk

Delete an Identity PSK

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteNetworkWirelessSsidIdentityPskRequest;
import org.openapis.openapi.models.operations.DeleteNetworkWirelessSsidIdentityPskResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ea") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteNetworkWirelessSsidIdentityPskRequest req = new DeleteNetworkWirelessSsidIdentityPskRequest("expedita", "facere", "sed");            

            DeleteNetworkWirelessSsidIdentityPskResponse res = sdk.wireless.deleteNetworkWirelessSsidIdentityPsk(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDeviceWirelessBluetoothSettings

Return the bluetooth settings for a wireless device

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDeviceWirelessBluetoothSettingsRequest;
import org.openapis.openapi.models.operations.GetDeviceWirelessBluetoothSettingsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quos") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDeviceWirelessBluetoothSettingsRequest req = new GetDeviceWirelessBluetoothSettingsRequest("autem");            

            GetDeviceWirelessBluetoothSettingsResponse res = sdk.wireless.getDeviceWirelessBluetoothSettings(req);

            if (res.getDeviceWirelessBluetoothSettings200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDeviceWirelessConnectionStats

Aggregated connectivity info for a given AP on this network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDeviceWirelessConnectionStatsBandEnum;
import org.openapis.openapi.models.operations.GetDeviceWirelessConnectionStatsRequest;
import org.openapis.openapi.models.operations.GetDeviceWirelessConnectionStatsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("minus") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDeviceWirelessConnectionStatsRequest req = new GetDeviceWirelessConnectionStatsRequest("porro") {{
                apTag = "blanditiis";
                band = GetDeviceWirelessConnectionStatsBandEnum.TWO4;
                ssid = 17155L;
                t0 = "aperiam";
                t1 = "voluptates";
                timespan = 1173.68;
                vlan = 642013L;
            }};            

            GetDeviceWirelessConnectionStatsResponse res = sdk.wireless.getDeviceWirelessConnectionStats(req);

            if (res.getDeviceWirelessConnectionStats200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDeviceWirelessLatencyStats

Aggregated latency info for a given AP on this network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDeviceWirelessLatencyStatsBandEnum;
import org.openapis.openapi.models.operations.GetDeviceWirelessLatencyStatsRequest;
import org.openapis.openapi.models.operations.GetDeviceWirelessLatencyStatsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("tempora") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDeviceWirelessLatencyStatsRequest req = new GetDeviceWirelessLatencyStatsRequest("ea") {{
                apTag = "illum";
                band = GetDeviceWirelessLatencyStatsBandEnum.FIVE;
                fields = "sit";
                ssid = 870546L;
                t0 = "sequi";
                t1 = "earum";
                timespan = 4017.63;
                vlan = 587505L;
            }};            

            GetDeviceWirelessLatencyStatsResponse res = sdk.wireless.getDeviceWirelessLatencyStats(req);

            if (res.getDeviceWirelessLatencyStats200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDeviceWirelessRadioSettings

Return the radio settings of a device

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDeviceWirelessRadioSettingsRequest;
import org.openapis.openapi.models.operations.GetDeviceWirelessRadioSettingsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("labore") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDeviceWirelessRadioSettingsRequest req = new GetDeviceWirelessRadioSettingsRequest("nihil");            

            GetDeviceWirelessRadioSettingsResponse res = sdk.wireless.getDeviceWirelessRadioSettings(req);

            if (res.getDeviceWirelessRadioSettings200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDeviceWirelessStatus

Return the SSID statuses of an access point

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDeviceWirelessStatusRequest;
import org.openapis.openapi.models.operations.GetDeviceWirelessStatusResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nihil") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDeviceWirelessStatusRequest req = new GetDeviceWirelessStatusRequest("necessitatibus");            

            GetDeviceWirelessStatusResponse res = sdk.wireless.getDeviceWirelessStatus(req);

            if (res.getDeviceWirelessStatus200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkWirelessAirMarshal

List Air Marshal scan results from a network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkWirelessAirMarshalRequest;
import org.openapis.openapi.models.operations.GetNetworkWirelessAirMarshalResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("repellat") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkWirelessAirMarshalRequest req = new GetNetworkWirelessAirMarshalRequest("neque") {{
                t0 = "rem";
                timespan = 8733.45;
            }};            

            GetNetworkWirelessAirMarshalResponse res = sdk.wireless.getNetworkWirelessAirMarshal(req);

            if (res.getNetworkWirelessAirMarshal200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkWirelessAlternateManagementInterface

Return alternate management interface and devices with IP assigned

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkWirelessAlternateManagementInterfaceRequest;
import org.openapis.openapi.models.operations.GetNetworkWirelessAlternateManagementInterfaceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("amet") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkWirelessAlternateManagementInterfaceRequest req = new GetNetworkWirelessAlternateManagementInterfaceRequest("numquam");            

            GetNetworkWirelessAlternateManagementInterfaceResponse res = sdk.wireless.getNetworkWirelessAlternateManagementInterface(req);

            if (res.getNetworkWirelessAlternateManagementInterface200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkWirelessBilling

Return the billing settings of this network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkWirelessBillingRequest;
import org.openapis.openapi.models.operations.GetNetworkWirelessBillingResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("recusandae") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkWirelessBillingRequest req = new GetNetworkWirelessBillingRequest("sunt");            

            GetNetworkWirelessBillingResponse res = sdk.wireless.getNetworkWirelessBilling(req);

            if (res.getNetworkWirelessBilling200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkWirelessBluetoothSettings

Return the Bluetooth settings for a network. <a href="https://documentation.meraki.com/MR/Bluetooth/Bluetooth_Low_Energy_(BLE)">Bluetooth settings</a> must be enabled on the network.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkWirelessBluetoothSettingsRequest;
import org.openapis.openapi.models.operations.GetNetworkWirelessBluetoothSettingsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("enim") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkWirelessBluetoothSettingsRequest req = new GetNetworkWirelessBluetoothSettingsRequest("suscipit");            

            GetNetworkWirelessBluetoothSettingsResponse res = sdk.wireless.getNetworkWirelessBluetoothSettings(req);

            if (res.getNetworkWirelessBluetoothSettings200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkWirelessChannelUtilizationHistory

Return AP channel utilization over time for a device or network client

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkWirelessChannelUtilizationHistoryBandEnum;
import org.openapis.openapi.models.operations.GetNetworkWirelessChannelUtilizationHistoryRequest;
import org.openapis.openapi.models.operations.GetNetworkWirelessChannelUtilizationHistoryResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("libero") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkWirelessChannelUtilizationHistoryRequest req = new GetNetworkWirelessChannelUtilizationHistoryRequest("iste") {{
                apTag = "est";
                autoResolution = false;
                band = GetNetworkWirelessChannelUtilizationHistoryBandEnum.SIX;
                clientId = "perspiciatis";
                deviceSerial = "distinctio";
                resolution = 683382L;
                t0 = "eum";
                t1 = "consequatur";
                timespan = 4793.45;
            }};            

            GetNetworkWirelessChannelUtilizationHistoryResponse res = sdk.wireless.getNetworkWirelessChannelUtilizationHistory(req);

            if (res.getNetworkWirelessChannelUtilizationHistory200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkWirelessClientConnectionStats

Aggregated connectivity info for a given client on this network. Clients are identified by their MAC.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkWirelessClientConnectionStatsBandEnum;
import org.openapis.openapi.models.operations.GetNetworkWirelessClientConnectionStatsRequest;
import org.openapis.openapi.models.operations.GetNetworkWirelessClientConnectionStatsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("rem") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkWirelessClientConnectionStatsRequest req = new GetNetworkWirelessClientConnectionStatsRequest("temporibus", "neque") {{
                apTag = "quam";
                band = GetNetworkWirelessClientConnectionStatsBandEnum.TWO4;
                ssid = 503059L;
                t0 = "explicabo";
                t1 = "error";
                timespan = 2017.35;
                vlan = 953442L;
            }};            

            GetNetworkWirelessClientConnectionStatsResponse res = sdk.wireless.getNetworkWirelessClientConnectionStats(req);

            if (res.getNetworkWirelessClientConnectionStats200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkWirelessClientConnectivityEvents

List the wireless connectivity events for a client within a network in the timespan.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkWirelessClientConnectivityEventsBandEnum;
import org.openapis.openapi.models.operations.GetNetworkWirelessClientConnectivityEventsIncludedSeveritiesEnum;
import org.openapis.openapi.models.operations.GetNetworkWirelessClientConnectivityEventsRequest;
import org.openapis.openapi.models.operations.GetNetworkWirelessClientConnectivityEventsResponse;
import org.openapis.openapi.models.operations.GetNetworkWirelessClientConnectivityEventsSsidNumberEnum;
import org.openapis.openapi.models.operations.GetNetworkWirelessClientConnectivityEventsTypesEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ad") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkWirelessClientConnectivityEventsRequest req = new GetNetworkWirelessClientConnectivityEventsRequest("fuga", "qui") {{
                band = GetNetworkWirelessClientConnectivityEventsBandEnum.SIX;
                deviceSerial = "omnis";
                endingBefore = "provident";
                includedSeverities = new org.openapis.openapi.models.operations.GetNetworkWirelessClientConnectivityEventsIncludedSeveritiesEnum[]{{
                    add(GetNetworkWirelessClientConnectivityEventsIncludedSeveritiesEnum.WARN),
                }};
                perPage = 533436L;
                ssidNumber = GetNetworkWirelessClientConnectivityEventsSsidNumberEnum.TWO;
                startingAfter = "odio";
                t0 = "illo";
                t1 = "culpa";
                timespan = 1621.43;
                types = new org.openapis.openapi.models.operations.GetNetworkWirelessClientConnectivityEventsTypesEnum[]{{
                    add(GetNetworkWirelessClientConnectivityEventsTypesEnum.DEAUTH),
                    add(GetNetworkWirelessClientConnectivityEventsTypesEnum.ROAM),
                }};
            }};            

            GetNetworkWirelessClientConnectivityEventsResponse res = sdk.wireless.getNetworkWirelessClientConnectivityEvents(req);

            if (res.getNetworkWirelessClientConnectivityEvents200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkWirelessClientCountHistory

Return wireless client counts over time for a network, device, or network client

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkWirelessClientCountHistoryBandEnum;
import org.openapis.openapi.models.operations.GetNetworkWirelessClientCountHistoryRequest;
import org.openapis.openapi.models.operations.GetNetworkWirelessClientCountHistoryResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("consequuntur") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkWirelessClientCountHistoryRequest req = new GetNetworkWirelessClientCountHistoryRequest("accusantium") {{
                apTag = "neque";
                autoResolution = false;
                band = GetNetworkWirelessClientCountHistoryBandEnum.SIX;
                clientId = "eaque";
                deviceSerial = "debitis";
                resolution = 319980L;
                ssid = 421111L;
                t0 = "aperiam";
                t1 = "iure";
                timespan = 9268.69;
            }};            

            GetNetworkWirelessClientCountHistoryResponse res = sdk.wireless.getNetworkWirelessClientCountHistory(req);

            if (res.getNetworkWirelessClientCountHistory200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkWirelessClientLatencyHistory

Return the latency history for a client. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP. The latency data is from a sample of 2% of packets and is grouped into 4 traffic categories: background, best effort, video, voice. Within these categories the sampled packet counters are bucketed by latency in milliseconds.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkWirelessClientLatencyHistoryRequest;
import org.openapis.openapi.models.operations.GetNetworkWirelessClientLatencyHistoryResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolorem") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkWirelessClientLatencyHistoryRequest req = new GetNetworkWirelessClientLatencyHistoryRequest("at", "harum") {{
                resolution = 506289L;
                t0 = "temporibus";
                t1 = "mollitia";
                timespan = 1923.19;
            }};            

            GetNetworkWirelessClientLatencyHistoryResponse res = sdk.wireless.getNetworkWirelessClientLatencyHistory(req);

            if (res.getNetworkWirelessClientLatencyHistory200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkWirelessClientLatencyStats

Aggregated latency info for a given client on this network. Clients are identified by their MAC.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkWirelessClientLatencyStatsBandEnum;
import org.openapis.openapi.models.operations.GetNetworkWirelessClientLatencyStatsRequest;
import org.openapis.openapi.models.operations.GetNetworkWirelessClientLatencyStatsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("at") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkWirelessClientLatencyStatsRequest req = new GetNetworkWirelessClientLatencyStatsRequest("reiciendis", "cupiditate") {{
                apTag = "sit";
                band = GetNetworkWirelessClientLatencyStatsBandEnum.TWO4;
                fields = "aliquam";
                ssid = 936290L;
                t0 = "fuga";
                t1 = "ratione";
                timespan = 9477.52;
                vlan = 834629L;
            }};            

            GetNetworkWirelessClientLatencyStatsResponse res = sdk.wireless.getNetworkWirelessClientLatencyStats(req);

            if (res.getNetworkWirelessClientLatencyStats200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkWirelessClientsConnectionStats

Aggregated connectivity info for this network, grouped by clients

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkWirelessClientsConnectionStatsBandEnum;
import org.openapis.openapi.models.operations.GetNetworkWirelessClientsConnectionStatsRequest;
import org.openapis.openapi.models.operations.GetNetworkWirelessClientsConnectionStatsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("veniam") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkWirelessClientsConnectionStatsRequest req = new GetNetworkWirelessClientsConnectionStatsRequest("quas") {{
                apTag = "recusandae";
                band = GetNetworkWirelessClientsConnectionStatsBandEnum.SIX;
                ssid = 839261L;
                t0 = "labore";
                t1 = "voluptates";
                timespan = 8947.85;
                vlan = 205836L;
            }};            

            GetNetworkWirelessClientsConnectionStatsResponse res = sdk.wireless.getNetworkWirelessClientsConnectionStats(req);

            if (res.getNetworkWirelessClientsConnectionStats200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkWirelessClientsLatencyStats

Aggregated latency info for this network, grouped by clients

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkWirelessClientsLatencyStatsBandEnum;
import org.openapis.openapi.models.operations.GetNetworkWirelessClientsLatencyStatsRequest;
import org.openapis.openapi.models.operations.GetNetworkWirelessClientsLatencyStatsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("beatae") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkWirelessClientsLatencyStatsRequest req = new GetNetworkWirelessClientsLatencyStatsRequest("nobis") {{
                apTag = "minus";
                band = GetNetworkWirelessClientsLatencyStatsBandEnum.TWO4;
                fields = "quidem";
                ssid = 406841L;
                t0 = "cum";
                t1 = "perspiciatis";
                timespan = 2428.89;
                vlan = 90283L;
            }};            

            GetNetworkWirelessClientsLatencyStatsResponse res = sdk.wireless.getNetworkWirelessClientsLatencyStats(req);

            if (res.getNetworkWirelessClientsLatencyStats200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkWirelessConnectionStats

Aggregated connectivity info for this network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkWirelessConnectionStatsBandEnum;
import org.openapis.openapi.models.operations.GetNetworkWirelessConnectionStatsRequest;
import org.openapis.openapi.models.operations.GetNetworkWirelessConnectionStatsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("mollitia") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkWirelessConnectionStatsRequest req = new GetNetworkWirelessConnectionStatsRequest("hic") {{
                apTag = "officiis";
                band = GetNetworkWirelessConnectionStatsBandEnum.TWO4;
                ssid = 105457L;
                t0 = "eaque";
                t1 = "et";
                timespan = 1383.2;
                vlan = 855086L;
            }};            

            GetNetworkWirelessConnectionStatsResponse res = sdk.wireless.getNetworkWirelessConnectionStats(req);

            if (res.getNetworkWirelessConnectionStats200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkWirelessDataRateHistory

Return PHY data rates over time for a network, device, or network client

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkWirelessDataRateHistoryBandEnum;
import org.openapis.openapi.models.operations.GetNetworkWirelessDataRateHistoryRequest;
import org.openapis.openapi.models.operations.GetNetworkWirelessDataRateHistoryResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("soluta") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkWirelessDataRateHistoryRequest req = new GetNetworkWirelessDataRateHistoryRequest("minus") {{
                apTag = "aliquid";
                autoResolution = false;
                band = GetNetworkWirelessDataRateHistoryBandEnum.FIVE;
                clientId = "quos";
                deviceSerial = "aut";
                resolution = 590678L;
                ssid = 407397L;
                t0 = "rerum";
                t1 = "beatae";
                timespan = 8229.74;
            }};            

            GetNetworkWirelessDataRateHistoryResponse res = sdk.wireless.getNetworkWirelessDataRateHistory(req);

            if (res.getNetworkWirelessDataRateHistory200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkWirelessDevicesConnectionStats

Aggregated connectivity info for this network, grouped by node

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkWirelessDevicesConnectionStatsBandEnum;
import org.openapis.openapi.models.operations.GetNetworkWirelessDevicesConnectionStatsRequest;
import org.openapis.openapi.models.operations.GetNetworkWirelessDevicesConnectionStatsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("accusamus") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkWirelessDevicesConnectionStatsRequest req = new GetNetworkWirelessDevicesConnectionStatsRequest("dolor") {{
                apTag = "necessitatibus";
                band = GetNetworkWirelessDevicesConnectionStatsBandEnum.FIVE;
                ssid = 822948L;
                t0 = "molestiae";
                t1 = "ad";
                timespan = 3134.18;
                vlan = 547066L;
            }};            

            GetNetworkWirelessDevicesConnectionStatsResponse res = sdk.wireless.getNetworkWirelessDevicesConnectionStats(req);

            if (res.getNetworkWirelessDevicesConnectionStats200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkWirelessDevicesLatencyStats

Aggregated latency info for this network, grouped by node

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkWirelessDevicesLatencyStatsBandEnum;
import org.openapis.openapi.models.operations.GetNetworkWirelessDevicesLatencyStatsRequest;
import org.openapis.openapi.models.operations.GetNetworkWirelessDevicesLatencyStatsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("natus") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkWirelessDevicesLatencyStatsRequest req = new GetNetworkWirelessDevicesLatencyStatsRequest("incidunt") {{
                apTag = "odio";
                band = GetNetworkWirelessDevicesLatencyStatsBandEnum.TWO4;
                fields = "provident";
                ssid = 134833L;
                t0 = "quam";
                t1 = "eveniet";
                timespan = 5073.51;
                vlan = 606041L;
            }};            

            GetNetworkWirelessDevicesLatencyStatsResponse res = sdk.wireless.getNetworkWirelessDevicesLatencyStats(req);

            if (res.getNetworkWirelessDevicesLatencyStats200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkWirelessFailedConnections

List of all failed client connection events on this network in a given time range

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkWirelessFailedConnectionsBandEnum;
import org.openapis.openapi.models.operations.GetNetworkWirelessFailedConnectionsRequest;
import org.openapis.openapi.models.operations.GetNetworkWirelessFailedConnectionsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dicta") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkWirelessFailedConnectionsRequest req = new GetNetworkWirelessFailedConnectionsRequest("explicabo") {{
                apTag = "quibusdam";
                band = GetNetworkWirelessFailedConnectionsBandEnum.TWO4;
                clientId = "quae";
                serial = "explicabo";
                ssid = 597522L;
                t0 = "voluptates";
                t1 = "aliquid";
                timespan = 2955.73;
                vlan = 198440L;
            }};            

            GetNetworkWirelessFailedConnectionsResponse res = sdk.wireless.getNetworkWirelessFailedConnections(req);

            if (res.getNetworkWirelessFailedConnections200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkWirelessLatencyHistory

Return average wireless latency over time for a network, device, or network client

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkWirelessLatencyHistoryAccessCategoryEnum;
import org.openapis.openapi.models.operations.GetNetworkWirelessLatencyHistoryBandEnum;
import org.openapis.openapi.models.operations.GetNetworkWirelessLatencyHistoryRequest;
import org.openapis.openapi.models.operations.GetNetworkWirelessLatencyHistoryResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ut") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkWirelessLatencyHistoryRequest req = new GetNetworkWirelessLatencyHistoryRequest("reprehenderit") {{
                accessCategory = GetNetworkWirelessLatencyHistoryAccessCategoryEnum.BEST_EFFORT_TRAFFIC;
                apTag = "eum";
                autoResolution = false;
                band = GetNetworkWirelessLatencyHistoryBandEnum.FIVE;
                clientId = "molestias";
                deviceSerial = "maiores";
                resolution = 224635L;
                ssid = 230269L;
                t0 = "facilis";
                t1 = "dolor";
                timespan = 8413.95;
            }};            

            GetNetworkWirelessLatencyHistoryResponse res = sdk.wireless.getNetworkWirelessLatencyHistory(req);

            if (res.getNetworkWirelessLatencyHistory200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkWirelessLatencyStats

Aggregated latency info for this network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkWirelessLatencyStatsBandEnum;
import org.openapis.openapi.models.operations.GetNetworkWirelessLatencyStatsRequest;
import org.openapis.openapi.models.operations.GetNetworkWirelessLatencyStatsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("recusandae") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkWirelessLatencyStatsRequest req = new GetNetworkWirelessLatencyStatsRequest("quidem") {{
                apTag = "eius";
                band = GetNetworkWirelessLatencyStatsBandEnum.SIX;
                fields = "ducimus";
                ssid = 498862L;
                t0 = "ducimus";
                t1 = "alias";
                timespan = 9646.28;
                vlan = 592815L;
            }};            

            GetNetworkWirelessLatencyStatsResponse res = sdk.wireless.getNetworkWirelessLatencyStats(req);

            if (res.getNetworkWirelessLatencyStats200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkWirelessMeshStatuses

List wireless mesh statuses for repeaters

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkWirelessMeshStatusesRequest;
import org.openapis.openapi.models.operations.GetNetworkWirelessMeshStatusesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsa") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkWirelessMeshStatusesRequest req = new GetNetworkWirelessMeshStatusesRequest("doloribus") {{
                endingBefore = "eos";
                perPage = 319765L;
                startingAfter = "ad";
            }};            

            GetNetworkWirelessMeshStatusesResponse res = sdk.wireless.getNetworkWirelessMeshStatuses(req);

            if (res.getNetworkWirelessMeshStatuses200ApplicationJSONObject != null) {
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
                .setSecurity(new Security("repellat") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkWirelessRfProfileRequest req = new GetNetworkWirelessRfProfileRequest("quasi", "quia");            

            GetNetworkWirelessRfProfileResponse res = sdk.wireless.getNetworkWirelessRfProfile(req);

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
                .setSecurity(new Security("aspernatur") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkWirelessRfProfilesRequest req = new GetNetworkWirelessRfProfilesRequest("eaque") {{
                includeTemplateProfiles = false;
            }};            

            GetNetworkWirelessRfProfilesResponse res = sdk.wireless.getNetworkWirelessRfProfiles(req);

            if (res.getNetworkWirelessRfProfiles200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkWirelessSettings

Return the wireless settings for a network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkWirelessSettingsRequest;
import org.openapis.openapi.models.operations.GetNetworkWirelessSettingsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quidem") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkWirelessSettingsRequest req = new GetNetworkWirelessSettingsRequest("veniam");            

            GetNetworkWirelessSettingsResponse res = sdk.wireless.getNetworkWirelessSettings(req);

            if (res.getNetworkWirelessSettings200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkWirelessSignalQualityHistory

Return signal quality (SNR/RSSI) over time for a device or network client

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkWirelessSignalQualityHistoryBandEnum;
import org.openapis.openapi.models.operations.GetNetworkWirelessSignalQualityHistoryRequest;
import org.openapis.openapi.models.operations.GetNetworkWirelessSignalQualityHistoryResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("asperiores") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkWirelessSignalQualityHistoryRequest req = new GetNetworkWirelessSignalQualityHistoryRequest("voluptas") {{
                apTag = "cupiditate";
                autoResolution = false;
                band = GetNetworkWirelessSignalQualityHistoryBandEnum.FIVE;
                clientId = "neque";
                deviceSerial = "deleniti";
                resolution = 431928L;
                ssid = 361936L;
                t0 = "aliquid";
                t1 = "repellendus";
                timespan = 6438.34;
            }};            

            GetNetworkWirelessSignalQualityHistoryResponse res = sdk.wireless.getNetworkWirelessSignalQualityHistory(req);

            if (res.getNetworkWirelessSignalQualityHistory200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkWirelessSsid

Return a single MR SSID

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkWirelessSsidRequest;
import org.openapis.openapi.models.operations.GetNetworkWirelessSsidResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("non") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkWirelessSsidRequest req = new GetNetworkWirelessSsidRequest("explicabo", "provident");            

            GetNetworkWirelessSsidResponse res = sdk.wireless.getNetworkWirelessSsid(req);

            if (res.getNetworkWirelessSsid200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkWirelessSsidBonjourForwarding

List the Bonjour forwarding setting and rules for the SSID

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkWirelessSsidBonjourForwardingRequest;
import org.openapis.openapi.models.operations.GetNetworkWirelessSsidBonjourForwardingResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aut") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkWirelessSsidBonjourForwardingRequest req = new GetNetworkWirelessSsidBonjourForwardingRequest("est", "quibusdam");            

            GetNetworkWirelessSsidBonjourForwardingResponse res = sdk.wireless.getNetworkWirelessSsidBonjourForwarding(req);

            if (res.getNetworkWirelessSsidBonjourForwarding200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkWirelessSsidDeviceTypeGroupPolicies

List the device type group policies for the SSID

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkWirelessSsidDeviceTypeGroupPoliciesRequest;
import org.openapis.openapi.models.operations.GetNetworkWirelessSsidDeviceTypeGroupPoliciesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsam") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkWirelessSsidDeviceTypeGroupPoliciesRequest req = new GetNetworkWirelessSsidDeviceTypeGroupPoliciesRequest("sunt", "neque");            

            GetNetworkWirelessSsidDeviceTypeGroupPoliciesResponse res = sdk.wireless.getNetworkWirelessSsidDeviceTypeGroupPolicies(req);

            if (res.getNetworkWirelessSsidDeviceTypeGroupPolicies200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkWirelessSsidEapOverride

Return the EAP overridden parameters for an SSID

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkWirelessSsidEapOverrideRequest;
import org.openapis.openapi.models.operations.GetNetworkWirelessSsidEapOverrideResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsa") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkWirelessSsidEapOverrideRequest req = new GetNetworkWirelessSsidEapOverrideRequest("quod", "quam");            

            GetNetworkWirelessSsidEapOverrideResponse res = sdk.wireless.getNetworkWirelessSsidEapOverride(req);

            if (res.getNetworkWirelessSsidEapOverride200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkWirelessSsidFirewallL3FirewallRules

Return the L3 firewall rules for an SSID on an MR network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkWirelessSsidFirewallL3FirewallRulesRequest;
import org.openapis.openapi.models.operations.GetNetworkWirelessSsidFirewallL3FirewallRulesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ullam") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkWirelessSsidFirewallL3FirewallRulesRequest req = new GetNetworkWirelessSsidFirewallL3FirewallRulesRequest("odio", "numquam");            

            GetNetworkWirelessSsidFirewallL3FirewallRulesResponse res = sdk.wireless.getNetworkWirelessSsidFirewallL3FirewallRules(req);

            if (res.getNetworkWirelessSsidFirewallL3FirewallRules200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkWirelessSsidFirewallL7FirewallRules

Return the L7 firewall rules for an SSID on an MR network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkWirelessSsidFirewallL7FirewallRulesRequest;
import org.openapis.openapi.models.operations.GetNetworkWirelessSsidFirewallL7FirewallRulesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("maxime") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkWirelessSsidFirewallL7FirewallRulesRequest req = new GetNetworkWirelessSsidFirewallL7FirewallRulesRequest("optio", "cupiditate");            

            GetNetworkWirelessSsidFirewallL7FirewallRulesResponse res = sdk.wireless.getNetworkWirelessSsidFirewallL7FirewallRules(req);

            if (res.getNetworkWirelessSsidFirewallL7FirewallRules200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkWirelessSsidHotspot20

Return the Hotspot 2.0 settings for an SSID

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkWirelessSsidHotspot20Request;
import org.openapis.openapi.models.operations.GetNetworkWirelessSsidHotspot20Response;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eum") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkWirelessSsidHotspot20Request req = new GetNetworkWirelessSsidHotspot20Request("quia", "cumque");            

            GetNetworkWirelessSsidHotspot20Response res = sdk.wireless.getNetworkWirelessSsidHotspot20(req);

            if (res.getNetworkWirelessSsidHotspot20200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkWirelessSsidIdentityPsk

Return an Identity PSK

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkWirelessSsidIdentityPskRequest;
import org.openapis.openapi.models.operations.GetNetworkWirelessSsidIdentityPskResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("tempore") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkWirelessSsidIdentityPskRequest req = new GetNetworkWirelessSsidIdentityPskRequest("cum", "impedit", "perferendis");            

            GetNetworkWirelessSsidIdentityPskResponse res = sdk.wireless.getNetworkWirelessSsidIdentityPsk(req);

            if (res.getNetworkWirelessSsidIdentityPsk200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkWirelessSsidIdentityPsks

List all Identity PSKs in a wireless network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkWirelessSsidIdentityPsksRequest;
import org.openapis.openapi.models.operations.GetNetworkWirelessSsidIdentityPsksResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quod") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkWirelessSsidIdentityPsksRequest req = new GetNetworkWirelessSsidIdentityPsksRequest("libero", "officia");            

            GetNetworkWirelessSsidIdentityPsksResponse res = sdk.wireless.getNetworkWirelessSsidIdentityPsks(req);

            if (res.getNetworkWirelessSsidIdentityPsks200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkWirelessSsidSchedules

List the outage schedule for the SSID

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkWirelessSsidSchedulesRequest;
import org.openapis.openapi.models.operations.GetNetworkWirelessSsidSchedulesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("neque") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkWirelessSsidSchedulesRequest req = new GetNetworkWirelessSsidSchedulesRequest("animi", "mollitia");            

            GetNetworkWirelessSsidSchedulesResponse res = sdk.wireless.getNetworkWirelessSsidSchedules(req);

            if (res.getNetworkWirelessSsidSchedules200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkWirelessSsidSplashSettings

Display the splash page settings for the given SSID

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkWirelessSsidSplashSettingsRequest;
import org.openapis.openapi.models.operations.GetNetworkWirelessSsidSplashSettingsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iusto") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkWirelessSsidSplashSettingsRequest req = new GetNetworkWirelessSsidSplashSettingsRequest("ad", "nemo");            

            GetNetworkWirelessSsidSplashSettingsResponse res = sdk.wireless.getNetworkWirelessSsidSplashSettings(req);

            if (res.getNetworkWirelessSsidSplashSettings200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkWirelessSsidTrafficShapingRules

Display the traffic shaping settings for a SSID on an MR network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkWirelessSsidTrafficShapingRulesRequest;
import org.openapis.openapi.models.operations.GetNetworkWirelessSsidTrafficShapingRulesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptatum") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkWirelessSsidTrafficShapingRulesRequest req = new GetNetworkWirelessSsidTrafficShapingRulesRequest("repudiandae", "corrupti");            

            GetNetworkWirelessSsidTrafficShapingRulesResponse res = sdk.wireless.getNetworkWirelessSsidTrafficShapingRules(req);

            if (res.getNetworkWirelessSsidTrafficShapingRules200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkWirelessSsidVpn

List the VPN settings for the SSID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkWirelessSsidVpnRequest;
import org.openapis.openapi.models.operations.GetNetworkWirelessSsidVpnResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("vitae") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkWirelessSsidVpnRequest req = new GetNetworkWirelessSsidVpnRequest("quibusdam", "laborum");            

            GetNetworkWirelessSsidVpnResponse res = sdk.wireless.getNetworkWirelessSsidVpn(req);

            if (res.getNetworkWirelessSsidVpn200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkWirelessSsids

List the MR SSIDs in a network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkWirelessSsidsRequest;
import org.openapis.openapi.models.operations.GetNetworkWirelessSsidsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("reprehenderit") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkWirelessSsidsRequest req = new GetNetworkWirelessSsidsRequest("ipsam");            

            GetNetworkWirelessSsidsResponse res = sdk.wireless.getNetworkWirelessSsids(req);

            if (res.getNetworkWirelessSsids200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkWirelessUsageHistory

Return AP usage over time for a device or network client

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkWirelessUsageHistoryBandEnum;
import org.openapis.openapi.models.operations.GetNetworkWirelessUsageHistoryRequest;
import org.openapis.openapi.models.operations.GetNetworkWirelessUsageHistoryResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("consequatur") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkWirelessUsageHistoryRequest req = new GetNetworkWirelessUsageHistoryRequest("illo") {{
                apTag = "soluta";
                autoResolution = false;
                band = GetNetworkWirelessUsageHistoryBandEnum.FIVE;
                clientId = "provident";
                deviceSerial = "veritatis";
                resolution = 781265L;
                ssid = 862694L;
                t0 = "suscipit";
                t1 = "magni";
                timespan = 8543.1;
            }};            

            GetNetworkWirelessUsageHistoryResponse res = sdk.wireless.getNetworkWirelessUsageHistory(req);

            if (res.getNetworkWirelessUsageHistory200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOrganizationWirelessDevicesEthernetStatuses

Endpoint to see power status for wireless devices

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganizationWirelessDevicesEthernetStatusesRequest;
import org.openapis.openapi.models.operations.GetOrganizationWirelessDevicesEthernetStatusesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quae") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationWirelessDevicesEthernetStatusesRequest req = new GetOrganizationWirelessDevicesEthernetStatusesRequest("reiciendis") {{
                endingBefore = "laborum";
                networkIds = new String[]{{
                    add("excepturi"),
                }};
                perPage = 941833L;
                startingAfter = "dolorum";
            }};            

            GetOrganizationWirelessDevicesEthernetStatusesResponse res = sdk.wireless.getOrganizationWirelessDevicesEthernetStatuses(req);

            if (res.getOrganizationWirelessDevicesEthernetStatuses200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateDeviceWirelessBluetoothSettings

Update the bluetooth settings for a wireless device

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateDeviceWirelessBluetoothSettingsRequest;
import org.openapis.openapi.models.operations.UpdateDeviceWirelessBluetoothSettingsRequestBody;
import org.openapis.openapi.models.operations.UpdateDeviceWirelessBluetoothSettingsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptate") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateDeviceWirelessBluetoothSettingsRequest req = new UpdateDeviceWirelessBluetoothSettingsRequest("autem") {{
                requestBody = new UpdateDeviceWirelessBluetoothSettingsRequestBody() {{
                    major = 761045L;
                    minor = 175593L;
                    uuid = "0ecf4fba-28c9-4307-80da-f1ab1657b38a";
                }};;
            }};            

            UpdateDeviceWirelessBluetoothSettingsResponse res = sdk.wireless.updateDeviceWirelessBluetoothSettings(req);

            if (res.updateDeviceWirelessBluetoothSettings200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateDeviceWirelessRadioSettings

Update the radio settings of a device

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateDeviceWirelessRadioSettingsRequest;
import org.openapis.openapi.models.operations.UpdateDeviceWirelessRadioSettingsRequestBody;
import org.openapis.openapi.models.operations.UpdateDeviceWirelessRadioSettingsRequestBodyFiveGhzSettings;
import org.openapis.openapi.models.operations.UpdateDeviceWirelessRadioSettingsRequestBodyFiveGhzSettingsChannelEnum;
import org.openapis.openapi.models.operations.UpdateDeviceWirelessRadioSettingsRequestBodyFiveGhzSettingsChannelWidthEnum;
import org.openapis.openapi.models.operations.UpdateDeviceWirelessRadioSettingsRequestBodyTwoFourGhzSettings;
import org.openapis.openapi.models.operations.UpdateDeviceWirelessRadioSettingsRequestBodyTwoFourGhzSettingsChannelEnum;
import org.openapis.openapi.models.operations.UpdateDeviceWirelessRadioSettingsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("assumenda") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateDeviceWirelessRadioSettingsRequest req = new UpdateDeviceWirelessRadioSettingsRequest("illo") {{
                requestBody = new UpdateDeviceWirelessRadioSettingsRequestBody() {{
                    fiveGhzSettings = new UpdateDeviceWirelessRadioSettingsRequestBodyFiveGhzSettings() {{
                        channel = UpdateDeviceWirelessRadioSettingsRequestBodyFiveGhzSettingsChannelEnum.ONE_HUNDRED_AND_FIFTY_THREE;
                        channelWidth = UpdateDeviceWirelessRadioSettingsRequestBodyFiveGhzSettingsChannelWidthEnum.ONE_HUNDRED_AND_SIXTY;
                        targetPower = 825555L;
                    }};;
                    rfProfileId = "occaecati";
                    twoFourGhzSettings = new UpdateDeviceWirelessRadioSettingsRequestBodyTwoFourGhzSettings() {{
                        channel = UpdateDeviceWirelessRadioSettingsRequestBodyTwoFourGhzSettingsChannelEnum.ONE;
                        targetPower = 162907L;
                    }};;
                }};;
            }};            

            UpdateDeviceWirelessRadioSettingsResponse res = sdk.wireless.updateDeviceWirelessRadioSettings(req);

            if (res.updateDeviceWirelessRadioSettings200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkWirelessAlternateManagementInterface

Update alternate management interface and device static IP

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessAlternateManagementInterfaceRequest;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessAlternateManagementInterfaceRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessAlternateManagementInterfaceRequestBodyAccessPoints;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessAlternateManagementInterfaceRequestBodyProtocolsEnum;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessAlternateManagementInterfaceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("vero") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkWirelessAlternateManagementInterfaceRequest req = new UpdateNetworkWirelessAlternateManagementInterfaceRequest("culpa") {{
                requestBody = new UpdateNetworkWirelessAlternateManagementInterfaceRequestBody() {{
                    accessPoints = new org.openapis.openapi.models.operations.UpdateNetworkWirelessAlternateManagementInterfaceRequestBodyAccessPoints[]{{
                        add(new UpdateNetworkWirelessAlternateManagementInterfaceRequestBodyAccessPoints("ipsa", "hic") {{
                            alternateManagementIp = "odio";
                            dns1 = "omnis";
                            dns2 = "cum";
                            gateway = "odio";
                            serial = "iste";
                            subnetMask = "esse";
                        }}),
                        add(new UpdateNetworkWirelessAlternateManagementInterfaceRequestBodyAccessPoints("alias", "dolore") {{
                            alternateManagementIp = "accusamus";
                            dns1 = "et";
                            dns2 = "sapiente";
                            gateway = "officiis";
                            serial = "expedita";
                            subnetMask = "facilis";
                        }}),
                        add(new UpdateNetworkWirelessAlternateManagementInterfaceRequestBodyAccessPoints("quidem", "sapiente") {{
                            alternateManagementIp = "laboriosam";
                            dns1 = "reiciendis";
                            dns2 = "expedita";
                            gateway = "necessitatibus";
                            serial = "earum";
                            subnetMask = "alias";
                        }}),
                    }};
                    enabled = false;
                    protocols = new org.openapis.openapi.models.operations.UpdateNetworkWirelessAlternateManagementInterfaceRequestBodyProtocolsEnum[]{{
                        add(UpdateNetworkWirelessAlternateManagementInterfaceRequestBodyProtocolsEnum.RADIUS),
                        add(UpdateNetworkWirelessAlternateManagementInterfaceRequestBodyProtocolsEnum.RADIUS),
                    }};
                    vlanId = 219354L;
                }};;
            }};            

            UpdateNetworkWirelessAlternateManagementInterfaceResponse res = sdk.wireless.updateNetworkWirelessAlternateManagementInterface(req);

            if (res.updateNetworkWirelessAlternateManagementInterface200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkWirelessBilling

Update the billing settings

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessBillingRequest;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessBillingRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessBillingRequestBodyPlans;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessBillingRequestBodyPlansBandwidthLimits;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessBillingRequestBodyPlansTimeLimitEnum;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessBillingResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aperiam") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkWirelessBillingRequest req = new UpdateNetworkWirelessBillingRequest("in") {{
                requestBody = new UpdateNetworkWirelessBillingRequestBody() {{
                    currency = "deserunt";
                    plans = new org.openapis.openapi.models.operations.UpdateNetworkWirelessBillingRequestBodyPlans[]{{
                        add(new UpdateNetworkWirelessBillingRequestBodyPlans(                new UpdateNetworkWirelessBillingRequestBodyPlansBandwidthLimits() {{
                                            limitDown = 195181L;
                                            limitUp = 454214L;
                                        }};, 3750.06, UpdateNetworkWirelessBillingRequestBodyPlansTimeLimitEnum.ONE_HOUR) {{
                            bandwidthLimits = new UpdateNetworkWirelessBillingRequestBodyPlansBandwidthLimits() {{
                                limitDown = 373637L;
                                limitUp = 725651L;
                            }};
                            id = "a7fd555c-2715-452d-bec6-8d1f9caf60a1";
                            price = 9190.31;
                            timeLimit = UpdateNetworkWirelessBillingRequestBodyPlansTimeLimitEnum.ONE_WEEK;
                        }}),
                        add(new UpdateNetworkWirelessBillingRequestBodyPlans(                new UpdateNetworkWirelessBillingRequestBodyPlansBandwidthLimits() {{
                                            limitDown = 373266L;
                                            limitUp = 257693L;
                                        }};, 6047.2, UpdateNetworkWirelessBillingRequestBodyPlansTimeLimitEnum.ONE_WEEK) {{
                            bandwidthLimits = new UpdateNetworkWirelessBillingRequestBodyPlansBandwidthLimits() {{
                                limitDown = 81637L;
                                limitUp = 501107L;
                            }};
                            id = "dfc88fd0-ee15-47c4-9997-16192cae9c15";
                            price = 5887.22;
                            timeLimit = UpdateNetworkWirelessBillingRequestBodyPlansTimeLimitEnum.ONE_HOUR;
                        }}),
                    }};
                }};;
            }};            

            UpdateNetworkWirelessBillingResponse res = sdk.wireless.updateNetworkWirelessBilling(req);

            if (res.updateNetworkWirelessBilling200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkWirelessBluetoothSettings

Update the Bluetooth settings for a network. See the docs page for <a href="https://documentation.meraki.com/MR/Bluetooth/Bluetooth_Low_Energy_(BLE)">Bluetooth settings</a>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessBluetoothSettingsRequest;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessBluetoothSettingsRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessBluetoothSettingsRequestBodyMajorMinorAssignmentModeEnum;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessBluetoothSettingsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("cum") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkWirelessBluetoothSettingsRequest req = new UpdateNetworkWirelessBluetoothSettingsRequest("possimus") {{
                requestBody = new UpdateNetworkWirelessBluetoothSettingsRequestBody() {{
                    advertisingEnabled = false;
                    major = 839011L;
                    majorMinorAssignmentMode = UpdateNetworkWirelessBluetoothSettingsRequestBodyMajorMinorAssignmentModeEnum.UNIQUE;
                    minor = 304623L;
                    scanningEnabled = false;
                    uuid = "b7e62ff9-d13c-41bf-8532-b2e6a1c4acf3";
                }};;
            }};            

            UpdateNetworkWirelessBluetoothSettingsResponse res = sdk.wireless.updateNetworkWirelessBluetoothSettings(req);

            if (res.updateNetworkWirelessBluetoothSettings200ApplicationJSONObject != null) {
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
                .setSecurity(new Security("dolores") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkWirelessRfProfileRequest req = new UpdateNetworkWirelessRfProfileRequest("at", "tempora") {{
                requestBody = new UpdateNetworkWirelessRfProfileRequestBody() {{
                    apBandSettings = new UpdateNetworkWirelessRfProfileRequestBodyApBandSettings() {{
                        bandOperationMode = UpdateNetworkWirelessRfProfileRequestBodyApBandSettingsBandOperationModeEnum.FIVEGHZ;
                        bandSteeringEnabled = false;
                    }};;
                    bandSelectionType = UpdateNetworkWirelessRfProfileRequestBodyBandSelectionTypeEnum.AP;
                    clientBalancingEnabled = false;
                    fiveGhzSettings = new UpdateNetworkWirelessRfProfileRequestBodyFiveGhzSettings() {{
                        channelWidth = "cumque";
                        maxPower = 989295L;
                        minBitrate = 968220L;
                        minPower = 880871L;
                        rxsop = 919273L;
                        validAutoChannels = new Long[]{{
                            add(83995L),
                            add(411992L),
                            add(108704L),
                        }};
                    }};;
                    minBitrateType = UpdateNetworkWirelessRfProfileRequestBodyMinBitrateTypeEnum.BAND;
                    name = "Kenny Emmerich";
                    perSsidSettings = new UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings() {{
                        zero = new UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings0() {{
                            bandOperationMode = UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings0BandOperationModeEnum.DUAL;
                            bandSteeringEnabled = false;
                            minBitrate = 3840.04;
                        }};;
                        one = new UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings1() {{
                            bandOperationMode = UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings1BandOperationModeEnum.FIVEGHZ;
                            bandSteeringEnabled = false;
                            minBitrate = 7792.5;
                        }};;
                        ten = new UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings10() {{
                            bandOperationMode = UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings10BandOperationModeEnum.FIVEGHZ;
                            bandSteeringEnabled = false;
                            minBitrate = 2714.09;
                        }};;
                        eleven = new UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings11() {{
                            bandOperationMode = UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings11BandOperationModeEnum.TWO4GHZ;
                            bandSteeringEnabled = false;
                            minBitrate = 9826.9;
                        }};;
                        twelve = new UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings12() {{
                            bandOperationMode = UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings12BandOperationModeEnum.DUAL;
                            bandSteeringEnabled = false;
                            minBitrate = 625.06;
                        }};;
                        thirteen = new UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings13() {{
                            bandOperationMode = UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings13BandOperationModeEnum.TWO4GHZ;
                            bandSteeringEnabled = false;
                            minBitrate = 926.08;
                        }};;
                        fourteen = new UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings14() {{
                            bandOperationMode = UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings14BandOperationModeEnum.TWO4GHZ;
                            bandSteeringEnabled = false;
                            minBitrate = 3904.83;
                        }};;
                        two = new UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings2() {{
                            bandOperationMode = UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings2BandOperationModeEnum.FIVEGHZ;
                            bandSteeringEnabled = false;
                            minBitrate = 796.92;
                        }};;
                        three = new UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings3() {{
                            bandOperationMode = UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings3BandOperationModeEnum.FIVEGHZ;
                            bandSteeringEnabled = false;
                            minBitrate = 1088.14;
                        }};;
                        four = new UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings4() {{
                            bandOperationMode = UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings4BandOperationModeEnum.DUAL;
                            bandSteeringEnabled = false;
                            minBitrate = 7713.71;
                        }};;
                        five = new UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings5() {{
                            bandOperationMode = UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings5BandOperationModeEnum.TWO4GHZ;
                            bandSteeringEnabled = false;
                            minBitrate = 5221.83;
                        }};;
                        six = new UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings6() {{
                            bandOperationMode = UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings6BandOperationModeEnum.TWO4GHZ;
                            bandSteeringEnabled = false;
                            minBitrate = 3868.72;
                        }};;
                        seven = new UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings7() {{
                            bandOperationMode = UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings7BandOperationModeEnum.FIVEGHZ;
                            bandSteeringEnabled = false;
                            minBitrate = 6633.58;
                        }};;
                        eight = new UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings8() {{
                            bandOperationMode = UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings8BandOperationModeEnum.TWO4GHZ;
                            bandSteeringEnabled = false;
                            minBitrate = 8088.21;
                        }};;
                        nine = new UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings9() {{
                            bandOperationMode = UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings9BandOperationModeEnum.TWO4GHZ;
                            bandSteeringEnabled = false;
                            minBitrate = 758.73;
                        }};;
                    }};;
                    transmission = new UpdateNetworkWirelessRfProfileRequestBodyTransmission() {{
                        enabled = false;
                    }};;
                    twoFourGhzSettings = new UpdateNetworkWirelessRfProfileRequestBodyTwoFourGhzSettings() {{
                        axEnabled = false;
                        maxPower = 896056L;
                        minBitrate = 7742.84;
                        minPower = 655581L;
                        rxsop = 670843L;
                        validAutoChannels = new Long[]{{
                            add(599115L),
                            add(947421L),
                            add(67773L),
                            add(2071L),
                        }};
                    }};;
                }};;
            }};            

            UpdateNetworkWirelessRfProfileResponse res = sdk.wireless.updateNetworkWirelessRfProfile(req);

            if (res.updateNetworkWirelessRfProfile200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkWirelessSettings

Update the wireless settings for a network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSettingsRequest;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSettingsRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSettingsRequestBodyUpgradeStrategyEnum;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSettingsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("repellat") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkWirelessSettingsRequest req = new UpdateNetworkWirelessSettingsRequest("dolorem") {{
                requestBody = new UpdateNetworkWirelessSettingsRequestBody() {{
                    ipv6BridgeEnabled = false;
                    ledLightsOn = false;
                    locationAnalyticsEnabled = false;
                    meshingEnabled = false;
                    upgradeStrategy = UpdateNetworkWirelessSettingsRequestBodyUpgradeStrategyEnum.MINIMIZE_CLIENT_DOWNTIME;
                }};;
            }};            

            UpdateNetworkWirelessSettingsResponse res = sdk.wireless.updateNetworkWirelessSettings(req);

            if (res.updateNetworkWirelessSettings200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkWirelessSsid

Update the attributes of an MR SSID

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidRequest;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidRequestBodyActiveDirectory;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidRequestBodyActiveDirectoryCredentials;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidRequestBodyActiveDirectoryServers;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidRequestBodyApTagsAndVlanIds;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidRequestBodyAuthModeEnum;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidRequestBodyDnsRewrite;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidRequestBodyDot11r;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidRequestBodyDot11w;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidRequestBodyEncryptionModeEnum;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidRequestBodyEnterpriseAdminAccessEnum;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidRequestBodyGre;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidRequestBodyGreConcentrator;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidRequestBodyLdap;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidRequestBodyLdapCredentials;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidRequestBodyLdapServerCaCertificate;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidRequestBodyLdapServers;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidRequestBodyLocalRadius;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidRequestBodyLocalRadiusCertificateAuthentication;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidRequestBodyLocalRadiusCertificateAuthenticationClientRootCaCertificate;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidRequestBodyLocalRadiusPasswordAuthentication;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidRequestBodyOauth;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidRequestBodyRadiusAccountingServers;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidRequestBodyRadiusAttributeForGroupPoliciesEnum;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidRequestBodyRadiusFailoverPolicyEnum;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidRequestBodyRadiusLoadBalancingPolicyEnum;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidRequestBodyRadiusServers;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidRequestBodySpeedBurst;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidRequestBodySplashPageEnum;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidRequestBodyWpaEncryptionModeEnum;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("repudiandae") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkWirelessSsidRequest req = new UpdateNetworkWirelessSsidRequest("unde", "aliquid") {{
                requestBody = new UpdateNetworkWirelessSsidRequestBody() {{
                    activeDirectory = new UpdateNetworkWirelessSsidRequestBodyActiveDirectory() {{
                        credentials = new UpdateNetworkWirelessSsidRequestBodyActiveDirectoryCredentials() {{
                            logonName = "in";
                            password = "hic";
                        }};;
                        servers = new org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidRequestBodyActiveDirectoryServers[]{{
                            add(new UpdateNetworkWirelessSsidRequestBodyActiveDirectoryServers("est") {{
                                host = "fuga";
                                port = 21546L;
                            }}),
                        }};
                    }};;
                    adultContentFilteringEnabled = false;
                    apTagsAndVlanIds = new org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidRequestBodyApTagsAndVlanIds[]{{
                        add(new UpdateNetworkWirelessSsidRequestBodyApTagsAndVlanIds() {{
                            tags = new String[]{{
                                add("maxime"),
                                add("ea"),
                            }};
                            vlanId = 710770L;
                        }}),
                        add(new UpdateNetworkWirelessSsidRequestBodyApTagsAndVlanIds() {{
                            tags = new String[]{{
                                add("accusantium"),
                                add("impedit"),
                                add("totam"),
                            }};
                            vlanId = 139435L;
                        }}),
                    }};
                    authMode = UpdateNetworkWirelessSsidRequestBodyAuthModeEnum.OPEN;
                    availabilityTags = new String[]{{
                        add("adipisci"),
                        add("nam"),
                        add("atque"),
                        add("pariatur"),
                    }};
                    availableOnAllAps = false;
                    bandSelection = "officiis";
                    concentratorNetworkId = "aliquid";
                    defaultVlanId = 712410L;
                    disassociateClientsOnVpnFailover = false;
                    dnsRewrite = new UpdateNetworkWirelessSsidRequestBodyDnsRewrite() {{
                        dnsCustomNameservers = new String[]{{
                            add("asperiores"),
                        }};
                        enabled = false;
                    }};;
                    dot11r = new UpdateNetworkWirelessSsidRequestBodyDot11r() {{
                        adaptive = false;
                        enabled = false;
                    }};;
                    dot11w = new UpdateNetworkWirelessSsidRequestBodyDot11w() {{
                        enabled = false;
                        required = false;
                    }};;
                    enabled = false;
                    encryptionMode = UpdateNetworkWirelessSsidRequestBodyEncryptionModeEnum.WEP;
                    enterpriseAdminAccess = UpdateNetworkWirelessSsidRequestBodyEnterpriseAdminAccessEnum.ACCESS_DISABLED;
                    gre = new UpdateNetworkWirelessSsidRequestBodyGre() {{
                        concentrator = new UpdateNetworkWirelessSsidRequestBodyGreConcentrator("explicabo");;
                        key = 304951L;
                    }};;
                    ipAssignmentMode = "blanditiis";
                    lanIsolationEnabled = false;
                    ldap = new UpdateNetworkWirelessSsidRequestBodyLdap() {{
                        baseDistinguishedName = "ipsa";
                        credentials = new UpdateNetworkWirelessSsidRequestBodyLdapCredentials() {{
                            distinguishedName = "eaque";
                            password = "voluptatem";
                        }};;
                        serverCaCertificate = new UpdateNetworkWirelessSsidRequestBodyLdapServerCaCertificate() {{
                            contents = "impedit";
                        }};;
                        servers = new org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidRequestBodyLdapServers[]{{
                            add(new UpdateNetworkWirelessSsidRequestBodyLdapServers("dolorem", 690857L) {{
                                host = "corporis";
                                port = 87450L;
                            }}),
                        }};
                    }};;
                    localRadius = new UpdateNetworkWirelessSsidRequestBodyLocalRadius() {{
                        cacheTimeout = 741235L;
                        certificateAuthentication = new UpdateNetworkWirelessSsidRequestBodyLocalRadiusCertificateAuthentication() {{
                            clientRootCaCertificate = new UpdateNetworkWirelessSsidRequestBodyLocalRadiusCertificateAuthenticationClientRootCaCertificate() {{
                                contents = "suscipit";
                            }};;
                            enabled = false;
                            ocspResponderUrl = "sit";
                            useLdap = false;
                            useOcsp = false;
                        }};;
                        passwordAuthentication = new UpdateNetworkWirelessSsidRequestBodyLocalRadiusPasswordAuthentication() {{
                            enabled = false;
                        }};;
                    }};;
                    mandatoryDhcpEnabled = false;
                    minBitrate = 618.13;
                    name = "Mr. Kerry Lueilwitz";
                    oauth = new UpdateNetworkWirelessSsidRequestBodyOauth() {{
                        allowedDomains = new String[]{{
                            add("doloribus"),
                            add("delectus"),
                            add("illum"),
                        }};
                    }};;
                    perClientBandwidthLimitDown = 386844L;
                    perClientBandwidthLimitUp = 638790L;
                    perSsidBandwidthLimitDown = 702977L;
                    perSsidBandwidthLimitUp = 78974L;
                    psk = "ad";
                    radiusAccountingEnabled = false;
                    radiusAccountingInterimInterval = 570444L;
                    radiusAccountingServers = new org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidRequestBodyRadiusAccountingServers[]{{
                        add(new UpdateNetworkWirelessSsidRequestBodyRadiusAccountingServers("nisi") {{
                            caCertificate = "occaecati";
                            host = "doloribus";
                            port = 956377L;
                            radsecEnabled = false;
                            secret = "quod";
                        }}),
                        add(new UpdateNetworkWirelessSsidRequestBodyRadiusAccountingServers("officiis") {{
                            caCertificate = "omnis";
                            host = "expedita";
                            port = 986630L;
                            radsecEnabled = false;
                            secret = "nostrum";
                        }}),
                        add(new UpdateNetworkWirelessSsidRequestBodyRadiusAccountingServers("minus") {{
                            caCertificate = "consequuntur";
                            host = "facere";
                            port = 745737L;
                            radsecEnabled = false;
                            secret = "libero";
                        }}),
                        add(new UpdateNetworkWirelessSsidRequestBodyRadiusAccountingServers("aperiam") {{
                            caCertificate = "quae";
                            host = "cupiditate";
                            port = 926803L;
                            radsecEnabled = false;
                            secret = "ut";
                        }}),
                    }};
                    radiusAttributeForGroupPolicies = UpdateNetworkWirelessSsidRequestBodyRadiusAttributeForGroupPoliciesEnum.AIRESPACE_ACL_NAME;
                    radiusAuthenticationNasId = "repudiandae";
                    radiusCalledStationId = "voluptate";
                    radiusCoaEnabled = false;
                    radiusFailoverPolicy = UpdateNetworkWirelessSsidRequestBodyRadiusFailoverPolicyEnum.ALLOW_ACCESS;
                    radiusFallbackEnabled = false;
                    radiusGuestVlanEnabled = false;
                    radiusGuestVlanId = 744219L;
                    radiusLoadBalancingPolicy = UpdateNetworkWirelessSsidRequestBodyRadiusLoadBalancingPolicyEnum.STRICT_PRIORITY_ORDER;
                    radiusOverride = false;
                    radiusProxyEnabled = false;
                    radiusServerAttemptsLimit = 493202L;
                    radiusServerTimeout = 61665L;
                    radiusServers = new org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidRequestBodyRadiusServers[]{{
                        add(new UpdateNetworkWirelessSsidRequestBodyRadiusServers("aliquam") {{
                            caCertificate = "in";
                            host = "a";
                            openRoamingCertificateId = 875141L;
                            port = 655666L;
                            radsecEnabled = false;
                            secret = "corporis";
                        }}),
                        add(new UpdateNetworkWirelessSsidRequestBodyRadiusServers("maxime") {{
                            caCertificate = "hic";
                            host = "minus";
                            openRoamingCertificateId = 28288L;
                            port = 104099L;
                            radsecEnabled = false;
                            secret = "ipsam";
                        }}),
                    }};
                    radiusTestingEnabled = false;
                    secondaryConcentratorNetworkId = "voluptatem";
                    speedBurst = new UpdateNetworkWirelessSsidRequestBodySpeedBurst() {{
                        enabled = false;
                    }};;
                    splashGuestSponsorDomains = new String[]{{
                        add("facilis"),
                        add("error"),
                        add("aliquid"),
                        add("ullam"),
                    }};
                    splashPage = UpdateNetworkWirelessSsidRequestBodySplashPageEnum.CISCO_ISE;
                    useVlanTagging = false;
                    visible = false;
                    vlanId = 709684L;
                    walledGardenEnabled = false;
                    walledGardenRanges = new String[]{{
                        add("iste"),
                        add("provident"),
                    }};
                    wpaEncryptionMode = UpdateNetworkWirelessSsidRequestBodyWpaEncryptionModeEnum.WPA3_ONLY;
                }};;
            }};            

            UpdateNetworkWirelessSsidResponse res = sdk.wireless.updateNetworkWirelessSsid(req);

            if (res.updateNetworkWirelessSsid200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkWirelessSsidBonjourForwarding

Update the bonjour forwarding setting and rules for the SSID

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidBonjourForwardingRequest;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidBonjourForwardingRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidBonjourForwardingRequestBodyRules;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidBonjourForwardingRequestBodyRulesServicesEnum;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidBonjourForwardingResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("maxime") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkWirelessSsidBonjourForwardingRequest req = new UpdateNetworkWirelessSsidBonjourForwardingRequest("unde", "exercitationem") {{
                requestBody = new UpdateNetworkWirelessSsidBonjourForwardingRequestBody() {{
                    enabled = false;
                    rules = new org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidBonjourForwardingRequestBodyRules[]{{
                        add(new UpdateNetworkWirelessSsidBonjourForwardingRequestBodyRules(                new org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidBonjourForwardingRequestBodyRulesServicesEnum[]{{
                                            add(UpdateNetworkWirelessSsidBonjourForwardingRequestBodyRulesServicesEnum.AFP),
                                            add(UpdateNetworkWirelessSsidBonjourForwardingRequestBodyRulesServicesEnum.ALL_SERVICES),
                                            add(UpdateNetworkWirelessSsidBonjourForwardingRequestBodyRulesServicesEnum.I_CHAT),
                                        }}, "doloribus") {{
                            description = "possimus";
                            services = new org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidBonjourForwardingRequestBodyRulesServicesEnum[]{{
                                add(UpdateNetworkWirelessSsidBonjourForwardingRequestBodyRulesServicesEnum.SCANNERS),
                                add(UpdateNetworkWirelessSsidBonjourForwardingRequestBodyRulesServicesEnum.FTP),
                                add(UpdateNetworkWirelessSsidBonjourForwardingRequestBodyRulesServicesEnum.I_CHAT),
                            }};
                            vlanId = "corrupti";
                        }}),
                    }};
                }};;
            }};            

            UpdateNetworkWirelessSsidBonjourForwardingResponse res = sdk.wireless.updateNetworkWirelessSsidBonjourForwarding(req);

            if (res.updateNetworkWirelessSsidBonjourForwarding200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkWirelessSsidDeviceTypeGroupPolicies

Update the device type group policies for the SSID

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequest;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequestBodyDeviceTypePolicies;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequestBodyDeviceTypePoliciesDevicePolicyEnum;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequestBodyDeviceTypePoliciesDeviceTypeEnum;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ab") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequest req = new UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequest("tenetur", "voluptatum") {{
                requestBody = new UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequestBody() {{
                    deviceTypePolicies = new org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequestBodyDeviceTypePolicies[]{{
                        add(new UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequestBodyDeviceTypePolicies(UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequestBodyDeviceTypePoliciesDevicePolicyEnum.ALLOWED, UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequestBodyDeviceTypePoliciesDeviceTypeEnum.I_PAD) {{
                            devicePolicy = UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequestBodyDeviceTypePoliciesDevicePolicyEnum.GROUP_POLICY;
                            deviceType = UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequestBodyDeviceTypePoliciesDeviceTypeEnum.OTHER_OS;
                            groupPolicyId = 281244L;
                        }}),
                    }};
                    enabled = false;
                }};;
            }};            

            UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesResponse res = sdk.wireless.updateNetworkWirelessSsidDeviceTypeGroupPolicies(req);

            if (res.updateNetworkWirelessSsidDeviceTypeGroupPolicies200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkWirelessSsidEapOverride

Update the EAP overridden parameters for an SSID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidEapOverrideRequest;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidEapOverrideRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidEapOverrideRequestBodyEapolKey;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidEapOverrideRequestBodyIdentity;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidEapOverrideResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("rerum") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkWirelessSsidEapOverrideRequest req = new UpdateNetworkWirelessSsidEapOverrideRequest("dignissimos", "est") {{
                requestBody = new UpdateNetworkWirelessSsidEapOverrideRequestBody() {{
                    eapolKey = new UpdateNetworkWirelessSsidEapOverrideRequestBodyEapolKey() {{
                        retries = 581145L;
                        timeoutInMs = 17020L;
                    }};;
                    identity = new UpdateNetworkWirelessSsidEapOverrideRequestBodyIdentity() {{
                        retries = 484011L;
                        timeout = 837040L;
                    }};;
                    maxRetries = 546538L;
                    timeout = 199350L;
                }};;
            }};            

            UpdateNetworkWirelessSsidEapOverrideResponse res = sdk.wireless.updateNetworkWirelessSsidEapOverride(req);

            if (res.updateNetworkWirelessSsidEapOverride200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkWirelessSsidFirewallL3FirewallRules

Update the L3 firewall rules of an SSID on an MR network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequest;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRules;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRulesPolicyEnum;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRulesProtocolEnum;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidFirewallL3FirewallRulesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("officia") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequest req = new UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequest("ipsa", "ad") {{
                requestBody = new UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBody() {{
                    allowLanAccess = false;
                    rules = new org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRules[]{{
                        add(new UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRules("eveniet", UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRulesPolicyEnum.ALLOW, UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRulesProtocolEnum.ICMP) {{
                            comment = "incidunt";
                            destCidr = "repellendus";
                            destPort = "omnis";
                            policy = UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRulesPolicyEnum.ALLOW;
                            protocol = UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRulesProtocolEnum.ANY;
                        }}),
                    }};
                }};;
            }};            

            UpdateNetworkWirelessSsidFirewallL3FirewallRulesResponse res = sdk.wireless.updateNetworkWirelessSsidFirewallL3FirewallRules(req);

            if (res.updateNetworkWirelessSsidFirewallL3FirewallRules200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkWirelessSsidFirewallL7FirewallRules

Update the L7 firewall rules of an SSID on an MR network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequest;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBodyRules;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBodyRulesPolicyEnum;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBodyRulesTypeEnum;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidFirewallL7FirewallRulesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsa") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequest req = new UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequest("iste", "hic") {{
                requestBody = new UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBody() {{
                    rules = new org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBodyRules[]{{
                        add(new UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBodyRules() {{
                            policy = UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBodyRulesPolicyEnum.DENY;
                            type = UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBodyRulesTypeEnum.IP_RANGE;
                            value = "reiciendis";
                        }}),
                        add(new UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBodyRules() {{
                            policy = UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBodyRulesPolicyEnum.DENY;
                            type = UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBodyRulesTypeEnum.PORT;
                            value = "temporibus";
                        }}),
                        add(new UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBodyRules() {{
                            policy = UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBodyRulesPolicyEnum.DENY;
                            type = UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBodyRulesTypeEnum.PORT;
                            value = "temporibus";
                        }}),
                    }};
                }};;
            }};            

            UpdateNetworkWirelessSsidFirewallL7FirewallRulesResponse res = sdk.wireless.updateNetworkWirelessSsidFirewallL7FirewallRules(req);

            if (res.updateNetworkWirelessSsidFirewallL7FirewallRules200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkWirelessSsidHotspot20

Update the Hotspot 2.0 settings of an SSID

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidHotspot20Request;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidHotspot20RequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidHotspot20RequestBodyMccMncs;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidHotspot20RequestBodyNaiRealms;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidHotspot20RequestBodyNaiRealmsFormatEnum;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidHotspot20RequestBodyNaiRealmsMethods;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidHotspot20RequestBodyNetworkAccessTypeEnum;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidHotspot20RequestBodyOperator;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidHotspot20RequestBodyVenue;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnum;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidHotspot20Response;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptate") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkWirelessSsidHotspot20Request req = new UpdateNetworkWirelessSsidHotspot20Request("ratione", "sequi") {{
                requestBody = new UpdateNetworkWirelessSsidHotspot20RequestBody() {{
                    domains = new String[]{{
                        add("provident"),
                    }};
                    enabled = false;
                    mccMncs = new org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidHotspot20RequestBodyMccMncs[]{{
                        add(new UpdateNetworkWirelessSsidHotspot20RequestBodyMccMncs() {{
                            mcc = "praesentium";
                            mnc = "totam";
                        }}),
                        add(new UpdateNetworkWirelessSsidHotspot20RequestBodyMccMncs() {{
                            mcc = "sint";
                            mnc = "magnam";
                        }}),
                    }};
                    naiRealms = new org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidHotspot20RequestBodyNaiRealms[]{{
                        add(new UpdateNetworkWirelessSsidHotspot20RequestBodyNaiRealms() {{
                            format = UpdateNetworkWirelessSsidHotspot20RequestBodyNaiRealmsFormatEnum.ONE;
                            methods = new org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidHotspot20RequestBodyNaiRealmsMethods[]{{
                                add(new UpdateNetworkWirelessSsidHotspot20RequestBodyNaiRealmsMethods() {{
                                    authenticationTypes = new java.util.HashMap<String, Object>() {{
                                        put("enim", "laboriosam");
                                        put("possimus", "unde");
                                        put("sapiente", "ex");
                                    }};
                                    id = "e4f48360-334b-49fc-9d5c-eeb182660cc4";
                                }}),
                                add(new UpdateNetworkWirelessSsidHotspot20RequestBodyNaiRealmsMethods() {{
                                    authenticationTypes = new java.util.HashMap<String, Object>() {{
                                        put("qui", "molestias");
                                        put("unde", "laborum");
                                        put("minima", "vitae");
                                        put("nostrum", "commodi");
                                    }};
                                    id = "17c21a0e-c87d-48ac-bb78-bd0053a6bc3e";
                                }}),
                            }};
                            realm = "sequi";
                        }}),
                        add(new UpdateNetworkWirelessSsidHotspot20RequestBodyNaiRealms() {{
                            format = UpdateNetworkWirelessSsidHotspot20RequestBodyNaiRealmsFormatEnum.ONE;
                            methods = new org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidHotspot20RequestBodyNaiRealmsMethods[]{{
                                add(new UpdateNetworkWirelessSsidHotspot20RequestBodyNaiRealmsMethods() {{
                                    authenticationTypes = new java.util.HashMap<String, Object>() {{
                                        put("perspiciatis", "optio");
                                        put("ex", "consequatur");
                                    }};
                                    id = "1e7cb247-d92d-4201-bd94-eb473c5861e6";
                                }}),
                                add(new UpdateNetworkWirelessSsidHotspot20RequestBodyNaiRealmsMethods() {{
                                    authenticationTypes = new java.util.HashMap<String, Object>() {{
                                        put("iure", "inventore");
                                        put("magnam", "natus");
                                    }};
                                    id = "8f1457ed-fa76-4687-9857-2b4b2142a83a";
                                }}),
                                add(new UpdateNetworkWirelessSsidHotspot20RequestBodyNaiRealmsMethods() {{
                                    authenticationTypes = new java.util.HashMap<String, Object>() {{
                                        put("corporis", "accusantium");
                                    }};
                                    id = "e51ca023-d081-4839-bbef-2b7437c5ea96";
                                }}),
                                add(new UpdateNetworkWirelessSsidHotspot20RequestBodyNaiRealmsMethods() {{
                                    authenticationTypes = new java.util.HashMap<String, Object>() {{
                                        put("doloremque", "odio");
                                        put("recusandae", "sint");
                                        put("ex", "ad");
                                        put("hic", "dolorem");
                                    }};
                                    id = "bfe9d9a9-1ed2-4b8f-8281-d8157feb27c3";
                                }}),
                            }};
                            realm = "ea";
                        }}),
                        add(new UpdateNetworkWirelessSsidHotspot20RequestBodyNaiRealms() {{
                            format = UpdateNetworkWirelessSsidHotspot20RequestBodyNaiRealmsFormatEnum.ZERO;
                            methods = new org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidHotspot20RequestBodyNaiRealmsMethods[]{{
                                add(new UpdateNetworkWirelessSsidHotspot20RequestBodyNaiRealmsMethods() {{
                                    authenticationTypes = new java.util.HashMap<String, Object>() {{
                                        put("esse", "consequatur");
                                        put("eaque", "numquam");
                                    }};
                                    id = "03a676a4-7142-44be-b350-20462c33a761";
                                }}),
                                add(new UpdateNetworkWirelessSsidHotspot20RequestBodyNaiRealmsMethods() {{
                                    authenticationTypes = new java.util.HashMap<String, Object>() {{
                                        put("consectetur", "occaecati");
                                        put("deleniti", "necessitatibus");
                                    }};
                                    id = "50b91a46-fe82-4602-9860-d3f01ad9c6c4";
                                }}),
                                add(new UpdateNetworkWirelessSsidHotspot20RequestBodyNaiRealmsMethods() {{
                                    authenticationTypes = new java.util.HashMap<String, Object>() {{
                                        put("nobis", "omnis");
                                        put("molestias", "non");
                                    }};
                                    id = "602bd224-0079-44d8-9668-d9c93a4baf3b";
                                }}),
                            }};
                            realm = "nostrum";
                        }}),
                    }};
                    networkAccessType = UpdateNetworkWirelessSsidHotspot20RequestBodyNetworkAccessTypeEnum.WILDCARD;
                    operator = new UpdateNetworkWirelessSsidHotspot20RequestBodyOperator() {{
                        name = "Felipe Morissette I";
                    }};;
                    roamConsortOis = new String[]{{
                        add("eos"),
                        add("nesciunt"),
                    }};
                    venue = new UpdateNetworkWirelessSsidHotspot20RequestBodyVenue() {{
                        name = "Johnnie Schaefer";
                        type = UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnum.MUSEUM;
                    }};;
                }};;
            }};            

            UpdateNetworkWirelessSsidHotspot20Response res = sdk.wireless.updateNetworkWirelessSsidHotspot20(req);

            if (res.updateNetworkWirelessSsidHotspot20200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkWirelessSsidIdentityPsk

Update an Identity PSK

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidIdentityPskRequest;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidIdentityPskRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidIdentityPskResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sit") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkWirelessSsidIdentityPskRequest req = new UpdateNetworkWirelessSsidIdentityPskRequest("repellendus", "quas", "dolorum") {{
                requestBody = new UpdateNetworkWirelessSsidIdentityPskRequestBody() {{
                    groupPolicyId = "ipsum";
                    name = "Desiree Volkman";
                    passphrase = "adipisci";
                }};;
            }};            

            UpdateNetworkWirelessSsidIdentityPskResponse res = sdk.wireless.updateNetworkWirelessSsidIdentityPsk(req);

            if (res.updateNetworkWirelessSsidIdentityPsk200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkWirelessSsidSchedules

Update the outage schedule for the SSID

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidSchedulesRequest;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidSchedulesRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidSchedulesRequestBodyRanges;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidSchedulesRequestBodyRangesInSeconds;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidSchedulesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("tenetur") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkWirelessSsidSchedulesRequest req = new UpdateNetworkWirelessSsidSchedulesRequest("labore", "vero") {{
                requestBody = new UpdateNetworkWirelessSsidSchedulesRequestBody() {{
                    enabled = false;
                    ranges = new org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidSchedulesRequestBodyRanges[]{{
                        add(new UpdateNetworkWirelessSsidSchedulesRequestBodyRanges("sequi", "tempore", "at", "suscipit") {{
                            endDay = "cum";
                            endTime = "deserunt";
                            startDay = "voluptates";
                            startTime = "corporis";
                        }}),
                    }};
                    rangesInSeconds = new org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidSchedulesRequestBodyRangesInSeconds[]{{
                        add(new UpdateNetworkWirelessSsidSchedulesRequestBodyRangesInSeconds(972674L, 493250L) {{
                            end = 566464L;
                            start = 145327L;
                        }}),
                        add(new UpdateNetworkWirelessSsidSchedulesRequestBodyRangesInSeconds(911908L, 906347L) {{
                            end = 777638L;
                            start = 38819L;
                        }}),
                        add(new UpdateNetworkWirelessSsidSchedulesRequestBodyRangesInSeconds(601814L, 266979L) {{
                            end = 257025L;
                            start = 258623L;
                        }}),
                    }};
                }};;
            }};            

            UpdateNetworkWirelessSsidSchedulesResponse res = sdk.wireless.updateNetworkWirelessSsidSchedules(req);

            if (res.updateNetworkWirelessSsidSchedules200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkWirelessSsidSplashSettings

Modify the splash page settings for the given SSID

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidSplashSettingsRequest;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidSplashSettingsRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidSplashSettingsRequestBodyBilling;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidSplashSettingsRequestBodyBillingFreeAccess;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidSplashSettingsRequestBodyControllerDisconnectionBehaviorEnum;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidSplashSettingsRequestBodyGuestSponsorship;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidSplashSettingsRequestBodySentryEnrollment;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidSplashSettingsRequestBodySentryEnrollmentStrengthEnum;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidSplashSettingsRequestBodySentryEnrollmentSystemsManagerNetwork;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashImage;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashImageImage;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashImageImageFormatEnum;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashLogo;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashLogoImage;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashLogoImageFormatEnum;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashPrepaidFront;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashPrepaidFrontImage;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashPrepaidFrontImageFormatEnum;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidSplashSettingsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("unde") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkWirelessSsidSplashSettingsRequest req = new UpdateNetworkWirelessSsidSplashSettingsRequest("reprehenderit", "quaerat") {{
                requestBody = new UpdateNetworkWirelessSsidSplashSettingsRequestBody() {{
                    allowSimultaneousLogins = false;
                    billing = new UpdateNetworkWirelessSsidSplashSettingsRequestBodyBilling() {{
                        freeAccess = new UpdateNetworkWirelessSsidSplashSettingsRequestBodyBillingFreeAccess() {{
                            durationInMinutes = 189150L;
                            enabled = false;
                        }};;
                        prepaidAccessFastLoginEnabled = false;
                        replyToEmailAddress = "expedita";
                    }};;
                    blockAllTrafficBeforeSignOn = false;
                    controllerDisconnectionBehavior = UpdateNetworkWirelessSsidSplashSettingsRequestBodyControllerDisconnectionBehaviorEnum.RESTRICTED;
                    guestSponsorship = new UpdateNetworkWirelessSsidSplashSettingsRequestBodyGuestSponsorship() {{
                        durationInMinutes = 910757L;
                        guestCanRequestTimeframe = false;
                    }};;
                    redirectUrl = "harum";
                    sentryEnrollment = new UpdateNetworkWirelessSsidSplashSettingsRequestBodySentryEnrollment() {{
                        enforcedSystems = new String[]{{
                            add("dolorum"),
                            add("adipisci"),
                        }};
                        strength = UpdateNetworkWirelessSsidSplashSettingsRequestBodySentryEnrollmentStrengthEnum.STRICT;
                        systemsManagerNetwork = new UpdateNetworkWirelessSsidSplashSettingsRequestBodySentryEnrollmentSystemsManagerNetwork("explicabo");;
                    }};;
                    splashImage = new UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashImage() {{
                        extension = "aspernatur";
                        image = new UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashImageImage() {{
                            contents = "quis";
                            format = UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashImageImageFormatEnum.GIF;
                        }};;
                        md5 = "eius";
                    }};;
                    splashLogo = new UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashLogo() {{
                        extension = "est";
                        image = new UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashLogoImage() {{
                            contents = "quae";
                            format = UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashLogoImageFormatEnum.PNG;
                        }};;
                        md5 = "temporibus";
                    }};;
                    splashPrepaidFront = new UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashPrepaidFront() {{
                        extension = "repellendus";
                        image = new UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashPrepaidFrontImage() {{
                            contents = "ratione";
                            format = UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashPrepaidFrontImageFormatEnum.PNG;
                        }};;
                        md5 = "iure";
                    }};;
                    splashTimeout = 41559L;
                    splashUrl = "iure";
                    useRedirectUrl = false;
                    useSplashUrl = false;
                    welcomeMessage = "error";
                }};;
            }};            

            UpdateNetworkWirelessSsidSplashSettingsResponse res = sdk.wireless.updateNetworkWirelessSsidSplashSettings(req);

            if (res.updateNetworkWirelessSsidSplashSettings200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkWirelessSsidTrafficShapingRules

Update the traffic shaping settings for an SSID on an MR network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidTrafficShapingRulesRequest;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidTrafficShapingRulesRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRules;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitions;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnum;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesPerClientBandwidthLimits;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesPerClientBandwidthLimitsBandwidthLimits;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidTrafficShapingRulesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("assumenda") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkWirelessSsidTrafficShapingRulesRequest req = new UpdateNetworkWirelessSsidTrafficShapingRulesRequest("porro", "repellendus") {{
                requestBody = new UpdateNetworkWirelessSsidTrafficShapingRulesRequestBody() {{
                    defaultRulesEnabled = false;
                    rules = new org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRules[]{{
                        add(new UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRules(                new org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitions[]{{
                                            add(new UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitions(UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnum.LOCAL_NET, "repudiandae") {{
                                                type = UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnum.IP_RANGE;
                                                value = "inventore";
                                            }}),
                                            add(new UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitions(UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnum.HOST, "omnis") {{
                                                type = UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnum.LOCAL_NET;
                                                value = "rem";
                                            }}),
                                            add(new UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitions(UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnum.HOST, "ducimus") {{
                                                type = UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnum.PORT;
                                                value = "molestias";
                                            }}),
                                        }}) {{
                            definitions = new org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitions[]{{
                                add(new UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitions(UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnum.APPLICATION_CATEGORY, "occaecati") {{
                                    type = UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnum.PORT;
                                    value = "soluta";
                                }}),
                                add(new UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitions(UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnum.IP_RANGE, "nisi") {{
                                    type = UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnum.APPLICATION_CATEGORY;
                                    value = "mollitia";
                                }}),
                                add(new UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitions(UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnum.HOST, "accusantium") {{
                                    type = UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnum.HOST;
                                    value = "laborum";
                                }}),
                            }};
                            dscpTagValue = 965268L;
                            pcpTagValue = 930462L;
                            perClientBandwidthLimits = new UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesPerClientBandwidthLimits() {{
                                bandwidthLimits = new UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesPerClientBandwidthLimitsBandwidthLimits() {{
                                    limitDown = 214720L;
                                    limitUp = 855215L;
                                }};
                                settings = "illum";
                            }};
                        }}),
                        add(new UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRules(                new org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitions[]{{
                                            add(new UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitions(UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnum.IP_RANGE, "corporis") {{
                                                type = UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnum.PORT;
                                                value = "dolorem";
                                            }}),
                                            add(new UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitions(UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnum.LOCAL_NET, "distinctio") {{
                                                type = UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnum.APPLICATION;
                                                value = "labore";
                                            }}),
                                            add(new UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitions(UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnum.LOCAL_NET, "repellendus") {{
                                                type = UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnum.LOCAL_NET;
                                                value = "consectetur";
                                            }}),
                                            add(new UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitions(UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnum.PORT, "commodi") {{
                                                type = UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnum.HOST;
                                                value = "sapiente";
                                            }}),
                                        }}) {{
                            definitions = new org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitions[]{{
                                add(new UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitions(UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnum.IP_RANGE, "iusto") {{
                                    type = UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnum.APPLICATION_CATEGORY;
                                    value = "saepe";
                                }}),
                                add(new UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitions(UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnum.LOCAL_NET, "voluptatum") {{
                                    type = UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnum.APPLICATION_CATEGORY;
                                    value = "recusandae";
                                }}),
                            }};
                            dscpTagValue = 327290L;
                            pcpTagValue = 226529L;
                            perClientBandwidthLimits = new UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesPerClientBandwidthLimits() {{
                                bandwidthLimits = new UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesPerClientBandwidthLimitsBandwidthLimits() {{
                                    limitDown = 963978L;
                                    limitUp = 343904L;
                                }};
                                settings = "iste";
                            }};
                        }}),
                        add(new UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRules(                new org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitions[]{{
                                            add(new UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitions(UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnum.APPLICATION_CATEGORY, "veniam") {{
                                                type = UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnum.APPLICATION_CATEGORY;
                                                value = "iure";
                                            }}),
                                        }}) {{
                            definitions = new org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitions[]{{
                                add(new UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitions(UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnum.LOCAL_NET, "laborum") {{
                                    type = UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnum.HOST;
                                    value = "hic";
                                }}),
                                add(new UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitions(UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnum.APPLICATION, "vitae") {{
                                    type = UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnum.HOST;
                                    value = "atque";
                                }}),
                            }};
                            dscpTagValue = 543698L;
                            pcpTagValue = 582956L;
                            perClientBandwidthLimits = new UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesPerClientBandwidthLimits() {{
                                bandwidthLimits = new UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesPerClientBandwidthLimitsBandwidthLimits() {{
                                    limitDown = 522196L;
                                    limitUp = 870629L;
                                }};
                                settings = "autem";
                            }};
                        }}),
                        add(new UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRules(                new org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitions[]{{
                                            add(new UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitions(UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnum.PORT, "consectetur") {{
                                                type = UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnum.IP_RANGE;
                                                value = "dolores";
                                            }}),
                                            add(new UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitions(UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnum.PORT, "porro") {{
                                                type = UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnum.APPLICATION;
                                                value = "ipsum";
                                            }}),
                                            add(new UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitions(UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnum.APPLICATION_CATEGORY, "fugiat") {{
                                                type = UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnum.PORT;
                                                value = "autem";
                                            }}),
                                            add(new UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitions(UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnum.HOST, "beatae") {{
                                                type = UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnum.APPLICATION;
                                                value = "animi";
                                            }}),
                                        }}) {{
                            definitions = new org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitions[]{{
                                add(new UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitions(UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnum.PORT, "explicabo") {{
                                    type = UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnum.APPLICATION;
                                    value = "quia";
                                }}),
                                add(new UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitions(UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnum.APPLICATION_CATEGORY, "nemo") {{
                                    type = UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnum.APPLICATION;
                                    value = "dignissimos";
                                }}),
                                add(new UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitions(UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnum.PORT, "nisi") {{
                                    type = UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnum.IP_RANGE;
                                    value = "porro";
                                }}),
                            }};
                            dscpTagValue = 690838L;
                            pcpTagValue = 908136L;
                            perClientBandwidthLimits = new UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesPerClientBandwidthLimits() {{
                                bandwidthLimits = new UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesPerClientBandwidthLimitsBandwidthLimits() {{
                                    limitDown = 836417L;
                                    limitUp = 154527L;
                                }};
                                settings = "sunt";
                            }};
                        }}),
                    }};
                    trafficShapingEnabled = false;
                }};;
            }};            

            UpdateNetworkWirelessSsidTrafficShapingRulesResponse res = sdk.wireless.updateNetworkWirelessSsidTrafficShapingRules(req);

            if (res.updateNetworkWirelessSsidTrafficShapingRules200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkWirelessSsidVpn

Update the VPN settings for the SSID

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidVpnRequest;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidVpnRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidVpnRequestBodyConcentrator;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidVpnRequestBodyFailover;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidVpnRequestBodySplitTunnel;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidVpnRequestBodySplitTunnelRules;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidVpnRequestBodySplitTunnelRulesProtocolEnum;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidVpnResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("et") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkWirelessSsidVpnRequest req = new UpdateNetworkWirelessSsidVpnRequest("sit", "nesciunt") {{
                requestBody = new UpdateNetworkWirelessSsidVpnRequestBody() {{
                    concentrator = new UpdateNetworkWirelessSsidVpnRequestBodyConcentrator() {{
                        networkId = "provident";
                        vlanId = 410558L;
                    }};;
                    failover = new UpdateNetworkWirelessSsidVpnRequestBodyFailover() {{
                        heartbeatInterval = 894107L;
                        idleTimeout = 939000L;
                        requestIp = "dolor";
                    }};;
                    splitTunnel = new UpdateNetworkWirelessSsidVpnRequestBodySplitTunnel() {{
                        enabled = false;
                        rules = new org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidVpnRequestBodySplitTunnelRules[]{{
                            add(new UpdateNetworkWirelessSsidVpnRequestBodySplitTunnelRules("ipsam", "quod") {{
                                comment = "in";
                                destCidr = "voluptate";
                                destPort = "aperiam";
                                policy = "molestias";
                                protocol = UpdateNetworkWirelessSsidVpnRequestBodySplitTunnelRulesProtocolEnum.TCP;
                            }}),
                        }};
                    }};;
                }};;
            }};            

            UpdateNetworkWirelessSsidVpnResponse res = sdk.wireless.updateNetworkWirelessSsidVpn(req);

            if (res.updateNetworkWirelessSsidVpn200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
