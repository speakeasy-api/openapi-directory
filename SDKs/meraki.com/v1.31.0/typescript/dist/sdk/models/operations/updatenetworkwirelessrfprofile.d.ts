import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Choice between 'dual', '2.4ghz' or '5ghz'.
 */
export declare enum UpdateNetworkWirelessRfProfileRequestBodyApBandSettingsBandOperationModeEnum {
    Two4ghz = "2.4ghz",
    Fiveghz = "5ghz",
    Dual = "dual"
}
/**
 * Settings that will be enabled if selectionType is set to 'ap'.
 */
export declare class UpdateNetworkWirelessRfProfileRequestBodyApBandSettings extends SpeakeasyBase {
    /**
     * Choice between 'dual', '2.4ghz' or '5ghz'.
     */
    bandOperationMode?: UpdateNetworkWirelessRfProfileRequestBodyApBandSettingsBandOperationModeEnum;
    /**
     * Steers client to most open band. Can be either true or false.
     */
    bandSteeringEnabled?: boolean;
}
/**
 * Band selection can be set to either 'ssid' or 'ap'.
 */
export declare enum UpdateNetworkWirelessRfProfileRequestBodyBandSelectionTypeEnum {
    Ap = "ap",
    Ssid = "ssid"
}
/**
 * Settings related to 5Ghz band
 */
export declare class UpdateNetworkWirelessRfProfileRequestBodyFiveGhzSettings extends SpeakeasyBase {
    /**
     * Sets channel width (MHz) for 5Ghz band. Can be one of 'auto', '20', '40' or '80'.
     */
    channelWidth?: string;
    /**
     * Sets max power (dBm) of 5Ghz band. Can be integer between 2 and 30.
     */
    maxPower?: number;
    /**
     * Sets min bitrate (Mbps) of 5Ghz band. Can be one of '6', '9', '12', '18', '24', '36', '48' or '54'.
     */
    minBitrate?: number;
    /**
     * Sets min power (dBm) of 5Ghz band. Can be integer between 2 and 30.
     */
    minPower?: number;
    /**
     * The RX-SOP level controls the sensitivity of the radio. It is strongly recommended to use RX-SOP only after consulting a wireless expert. RX-SOP can be configured in the range of -65 to -95 (dBm). A value of null will reset this to the default.
     */
    rxsop?: number;
    /**
     * Sets valid auto channels for 5Ghz band. Can be one of '36', '40', '44', '48', '52', '56', '60', '64', '100', '104', '108', '112', '116', '120', '124', '128', '132', '136', '140', '144', '149', '153', '157', '161' or '165'.
     */
    validAutoChannels?: number[];
}
/**
 * Minimum bitrate can be set to either 'band' or 'ssid'.
 */
export declare enum UpdateNetworkWirelessRfProfileRequestBodyMinBitrateTypeEnum {
    Band = "band",
    Ssid = "ssid"
}
/**
 * Choice between 'dual', '2.4ghz' or '5ghz'.
 */
export declare enum UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings0BandOperationModeEnum {
    Two4ghz = "2.4ghz",
    Fiveghz = "5ghz",
    Dual = "dual"
}
/**
 * Settings for SSID 0
 */
export declare class UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings0 extends SpeakeasyBase {
    /**
     * Choice between 'dual', '2.4ghz' or '5ghz'.
     */
    bandOperationMode?: UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings0BandOperationModeEnum;
    /**
     * Steers client to most open band between 2.4 GHz and 5 GHz. Can be either true or false.
     */
    bandSteeringEnabled?: boolean;
    /**
     * Sets min bitrate (Mbps) of this SSID. Can be one of '1', '2', '5.5', '6', '9', '11', '12', '18', '24', '36', '48' or '54'.
     */
    minBitrate?: number;
}
/**
 * Choice between 'dual', '2.4ghz' or '5ghz'.
 */
export declare enum UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings1BandOperationModeEnum {
    Two4ghz = "2.4ghz",
    Fiveghz = "5ghz",
    Dual = "dual"
}
/**
 * Settings for SSID 1
 */
export declare class UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings1 extends SpeakeasyBase {
    /**
     * Choice between 'dual', '2.4ghz' or '5ghz'.
     */
    bandOperationMode?: UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings1BandOperationModeEnum;
    /**
     * Steers client to most open band between 2.4 GHz and 5 GHz. Can be either true or false.
     */
    bandSteeringEnabled?: boolean;
    /**
     * Sets min bitrate (Mbps) of this SSID. Can be one of '1', '2', '5.5', '6', '9', '11', '12', '18', '24', '36', '48' or '54'.
     */
    minBitrate?: number;
}
/**
 * Choice between 'dual', '2.4ghz' or '5ghz'.
 */
export declare enum UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings10BandOperationModeEnum {
    Two4ghz = "2.4ghz",
    Fiveghz = "5ghz",
    Dual = "dual"
}
/**
 * Settings for SSID 10
 */
export declare class UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings10 extends SpeakeasyBase {
    /**
     * Choice between 'dual', '2.4ghz' or '5ghz'.
     */
    bandOperationMode?: UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings10BandOperationModeEnum;
    /**
     * Steers client to most open band between 2.4 GHz and 5 GHz. Can be either true or false.
     */
    bandSteeringEnabled?: boolean;
    /**
     * Sets min bitrate (Mbps) of this SSID. Can be one of '1', '2', '5.5', '6', '9', '11', '12', '18', '24', '36', '48' or '54'.
     */
    minBitrate?: number;
}
/**
 * Choice between 'dual', '2.4ghz' or '5ghz'.
 */
export declare enum UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings11BandOperationModeEnum {
    Two4ghz = "2.4ghz",
    Fiveghz = "5ghz",
    Dual = "dual"
}
/**
 * Settings for SSID 11
 */
export declare class UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings11 extends SpeakeasyBase {
    /**
     * Choice between 'dual', '2.4ghz' or '5ghz'.
     */
    bandOperationMode?: UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings11BandOperationModeEnum;
    /**
     * Steers client to most open band between 2.4 GHz and 5 GHz. Can be either true or false.
     */
    bandSteeringEnabled?: boolean;
    /**
     * Sets min bitrate (Mbps) of this SSID. Can be one of '1', '2', '5.5', '6', '9', '11', '12', '18', '24', '36', '48' or '54'.
     */
    minBitrate?: number;
}
/**
 * Choice between 'dual', '2.4ghz' or '5ghz'.
 */
export declare enum UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings12BandOperationModeEnum {
    Two4ghz = "2.4ghz",
    Fiveghz = "5ghz",
    Dual = "dual"
}
/**
 * Settings for SSID 12
 */
export declare class UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings12 extends SpeakeasyBase {
    /**
     * Choice between 'dual', '2.4ghz' or '5ghz'.
     */
    bandOperationMode?: UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings12BandOperationModeEnum;
    /**
     * Steers client to most open band between 2.4 GHz and 5 GHz. Can be either true or false.
     */
    bandSteeringEnabled?: boolean;
    /**
     * Sets min bitrate (Mbps) of this SSID. Can be one of '1', '2', '5.5', '6', '9', '11', '12', '18', '24', '36', '48' or '54'.
     */
    minBitrate?: number;
}
/**
 * Choice between 'dual', '2.4ghz' or '5ghz'.
 */
export declare enum UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings13BandOperationModeEnum {
    Two4ghz = "2.4ghz",
    Fiveghz = "5ghz",
    Dual = "dual"
}
/**
 * Settings for SSID 13
 */
export declare class UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings13 extends SpeakeasyBase {
    /**
     * Choice between 'dual', '2.4ghz' or '5ghz'.
     */
    bandOperationMode?: UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings13BandOperationModeEnum;
    /**
     * Steers client to most open band between 2.4 GHz and 5 GHz. Can be either true or false.
     */
    bandSteeringEnabled?: boolean;
    /**
     * Sets min bitrate (Mbps) of this SSID. Can be one of '1', '2', '5.5', '6', '9', '11', '12', '18', '24', '36', '48' or '54'.
     */
    minBitrate?: number;
}
/**
 * Choice between 'dual', '2.4ghz' or '5ghz'.
 */
export declare enum UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings14BandOperationModeEnum {
    Two4ghz = "2.4ghz",
    Fiveghz = "5ghz",
    Dual = "dual"
}
/**
 * Settings for SSID 14
 */
export declare class UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings14 extends SpeakeasyBase {
    /**
     * Choice between 'dual', '2.4ghz' or '5ghz'.
     */
    bandOperationMode?: UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings14BandOperationModeEnum;
    /**
     * Steers client to most open band between 2.4 GHz and 5 GHz. Can be either true or false.
     */
    bandSteeringEnabled?: boolean;
    /**
     * Sets min bitrate (Mbps) of this SSID. Can be one of '1', '2', '5.5', '6', '9', '11', '12', '18', '24', '36', '48' or '54'.
     */
    minBitrate?: number;
}
/**
 * Choice between 'dual', '2.4ghz' or '5ghz'.
 */
export declare enum UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings2BandOperationModeEnum {
    Two4ghz = "2.4ghz",
    Fiveghz = "5ghz",
    Dual = "dual"
}
/**
 * Settings for SSID 2
 */
export declare class UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings2 extends SpeakeasyBase {
    /**
     * Choice between 'dual', '2.4ghz' or '5ghz'.
     */
    bandOperationMode?: UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings2BandOperationModeEnum;
    /**
     * Steers client to most open band between 2.4 GHz and 5 GHz. Can be either true or false.
     */
    bandSteeringEnabled?: boolean;
    /**
     * Sets min bitrate (Mbps) of this SSID. Can be one of '1', '2', '5.5', '6', '9', '11', '12', '18', '24', '36', '48' or '54'.
     */
    minBitrate?: number;
}
/**
 * Choice between 'dual', '2.4ghz' or '5ghz'.
 */
export declare enum UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings3BandOperationModeEnum {
    Two4ghz = "2.4ghz",
    Fiveghz = "5ghz",
    Dual = "dual"
}
/**
 * Settings for SSID 3
 */
export declare class UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings3 extends SpeakeasyBase {
    /**
     * Choice between 'dual', '2.4ghz' or '5ghz'.
     */
    bandOperationMode?: UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings3BandOperationModeEnum;
    /**
     * Steers client to most open band between 2.4 GHz and 5 GHz. Can be either true or false.
     */
    bandSteeringEnabled?: boolean;
    /**
     * Sets min bitrate (Mbps) of this SSID. Can be one of '1', '2', '5.5', '6', '9', '11', '12', '18', '24', '36', '48' or '54'.
     */
    minBitrate?: number;
}
/**
 * Choice between 'dual', '2.4ghz' or '5ghz'.
 */
export declare enum UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings4BandOperationModeEnum {
    Two4ghz = "2.4ghz",
    Fiveghz = "5ghz",
    Dual = "dual"
}
/**
 * Settings for SSID 4
 */
export declare class UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings4 extends SpeakeasyBase {
    /**
     * Choice between 'dual', '2.4ghz' or '5ghz'.
     */
    bandOperationMode?: UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings4BandOperationModeEnum;
    /**
     * Steers client to most open band between 2.4 GHz and 5 GHz. Can be either true or false.
     */
    bandSteeringEnabled?: boolean;
    /**
     * Sets min bitrate (Mbps) of this SSID. Can be one of '1', '2', '5.5', '6', '9', '11', '12', '18', '24', '36', '48' or '54'.
     */
    minBitrate?: number;
}
/**
 * Choice between 'dual', '2.4ghz' or '5ghz'.
 */
export declare enum UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings5BandOperationModeEnum {
    Two4ghz = "2.4ghz",
    Fiveghz = "5ghz",
    Dual = "dual"
}
/**
 * Settings for SSID 5
 */
export declare class UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings5 extends SpeakeasyBase {
    /**
     * Choice between 'dual', '2.4ghz' or '5ghz'.
     */
    bandOperationMode?: UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings5BandOperationModeEnum;
    /**
     * Steers client to most open band between 2.4 GHz and 5 GHz. Can be either true or false.
     */
    bandSteeringEnabled?: boolean;
    /**
     * Sets min bitrate (Mbps) of this SSID. Can be one of '1', '2', '5.5', '6', '9', '11', '12', '18', '24', '36', '48' or '54'.
     */
    minBitrate?: number;
}
/**
 * Choice between 'dual', '2.4ghz' or '5ghz'.
 */
export declare enum UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings6BandOperationModeEnum {
    Two4ghz = "2.4ghz",
    Fiveghz = "5ghz",
    Dual = "dual"
}
/**
 * Settings for SSID 6
 */
export declare class UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings6 extends SpeakeasyBase {
    /**
     * Choice between 'dual', '2.4ghz' or '5ghz'.
     */
    bandOperationMode?: UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings6BandOperationModeEnum;
    /**
     * Steers client to most open band between 2.4 GHz and 5 GHz. Can be either true or false.
     */
    bandSteeringEnabled?: boolean;
    /**
     * Sets min bitrate (Mbps) of this SSID. Can be one of '1', '2', '5.5', '6', '9', '11', '12', '18', '24', '36', '48' or '54'.
     */
    minBitrate?: number;
}
/**
 * Choice between 'dual', '2.4ghz' or '5ghz'.
 */
export declare enum UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings7BandOperationModeEnum {
    Two4ghz = "2.4ghz",
    Fiveghz = "5ghz",
    Dual = "dual"
}
/**
 * Settings for SSID 7
 */
export declare class UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings7 extends SpeakeasyBase {
    /**
     * Choice between 'dual', '2.4ghz' or '5ghz'.
     */
    bandOperationMode?: UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings7BandOperationModeEnum;
    /**
     * Steers client to most open band between 2.4 GHz and 5 GHz. Can be either true or false.
     */
    bandSteeringEnabled?: boolean;
    /**
     * Sets min bitrate (Mbps) of this SSID. Can be one of '1', '2', '5.5', '6', '9', '11', '12', '18', '24', '36', '48' or '54'.
     */
    minBitrate?: number;
}
/**
 * Choice between 'dual', '2.4ghz' or '5ghz'.
 */
export declare enum UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings8BandOperationModeEnum {
    Two4ghz = "2.4ghz",
    Fiveghz = "5ghz",
    Dual = "dual"
}
/**
 * Settings for SSID 8
 */
export declare class UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings8 extends SpeakeasyBase {
    /**
     * Choice between 'dual', '2.4ghz' or '5ghz'.
     */
    bandOperationMode?: UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings8BandOperationModeEnum;
    /**
     * Steers client to most open band between 2.4 GHz and 5 GHz. Can be either true or false.
     */
    bandSteeringEnabled?: boolean;
    /**
     * Sets min bitrate (Mbps) of this SSID. Can be one of '1', '2', '5.5', '6', '9', '11', '12', '18', '24', '36', '48' or '54'.
     */
    minBitrate?: number;
}
/**
 * Choice between 'dual', '2.4ghz' or '5ghz'.
 */
export declare enum UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings9BandOperationModeEnum {
    Two4ghz = "2.4ghz",
    Fiveghz = "5ghz",
    Dual = "dual"
}
/**
 * Settings for SSID 9
 */
export declare class UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings9 extends SpeakeasyBase {
    /**
     * Choice between 'dual', '2.4ghz' or '5ghz'.
     */
    bandOperationMode?: UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings9BandOperationModeEnum;
    /**
     * Steers client to most open band between 2.4 GHz and 5 GHz. Can be either true or false.
     */
    bandSteeringEnabled?: boolean;
    /**
     * Sets min bitrate (Mbps) of this SSID. Can be one of '1', '2', '5.5', '6', '9', '11', '12', '18', '24', '36', '48' or '54'.
     */
    minBitrate?: number;
}
/**
 * Per-SSID radio settings by number.
 */
export declare class UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings extends SpeakeasyBase {
    /**
     * Settings for SSID 0
     */
    zero?: UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings0;
    /**
     * Settings for SSID 1
     */
    one?: UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings1;
    /**
     * Settings for SSID 10
     */
    ten?: UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings10;
    /**
     * Settings for SSID 11
     */
    eleven?: UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings11;
    /**
     * Settings for SSID 12
     */
    twelve?: UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings12;
    /**
     * Settings for SSID 13
     */
    thirteen?: UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings13;
    /**
     * Settings for SSID 14
     */
    fourteen?: UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings14;
    /**
     * Settings for SSID 2
     */
    two?: UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings2;
    /**
     * Settings for SSID 3
     */
    three?: UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings3;
    /**
     * Settings for SSID 4
     */
    four?: UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings4;
    /**
     * Settings for SSID 5
     */
    five?: UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings5;
    /**
     * Settings for SSID 6
     */
    six?: UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings6;
    /**
     * Settings for SSID 7
     */
    seven?: UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings7;
    /**
     * Settings for SSID 8
     */
    eight?: UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings8;
    /**
     * Settings for SSID 9
     */
    nine?: UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings9;
}
/**
 * Settings related to radio transmission.
 */
export declare class UpdateNetworkWirelessRfProfileRequestBodyTransmission extends SpeakeasyBase {
    /**
     * Toggle for radio transmission. When false, radios will not transmit at all.
     */
    enabled?: boolean;
}
/**
 * Settings related to 2.4Ghz band
 */
export declare class UpdateNetworkWirelessRfProfileRequestBodyTwoFourGhzSettings extends SpeakeasyBase {
    /**
     * Determines whether ax radio on 2.4Ghz band is on or off. Can be either true or false. If false, we highly recommend disabling band steering.
     */
    axEnabled?: boolean;
    /**
     * Sets max power (dBm) of 2.4Ghz band. Can be integer between 2 and 30.
     */
    maxPower?: number;
    /**
     * Sets min bitrate (Mbps) of 2.4Ghz band. Can be one of '1', '2', '5.5', '6', '9', '11', '12', '18', '24', '36', '48' or '54'.
     */
    minBitrate?: number;
    /**
     * Sets min power (dBm) of 2.4Ghz band. Can be integer between 2 and 30.
     */
    minPower?: number;
    /**
     * The RX-SOP level controls the sensitivity of the radio. It is strongly recommended to use RX-SOP only after consulting a wireless expert. RX-SOP can be configured in the range of -65 to -95 (dBm). A value of null will reset this to the default.
     */
    rxsop?: number;
    /**
     * Sets valid auto channels for 2.4Ghz band. Can be one of '1', '6' or '11'.
     */
    validAutoChannels?: number[];
}
export declare class UpdateNetworkWirelessRfProfileRequestBody extends SpeakeasyBase {
    /**
     * Settings that will be enabled if selectionType is set to 'ap'.
     */
    apBandSettings?: UpdateNetworkWirelessRfProfileRequestBodyApBandSettings;
    /**
     * Band selection can be set to either 'ssid' or 'ap'.
     */
    bandSelectionType?: UpdateNetworkWirelessRfProfileRequestBodyBandSelectionTypeEnum;
    /**
     * Steers client to best available access point. Can be either true or false.
     */
    clientBalancingEnabled?: boolean;
    /**
     * Settings related to 5Ghz band
     */
    fiveGhzSettings?: UpdateNetworkWirelessRfProfileRequestBodyFiveGhzSettings;
    /**
     * Minimum bitrate can be set to either 'band' or 'ssid'.
     */
    minBitrateType?: UpdateNetworkWirelessRfProfileRequestBodyMinBitrateTypeEnum;
    /**
     * The name of the new profile. Must be unique.
     */
    name?: string;
    /**
     * Per-SSID radio settings by number.
     */
    perSsidSettings?: UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings;
    /**
     * Settings related to radio transmission.
     */
    transmission?: UpdateNetworkWirelessRfProfileRequestBodyTransmission;
    /**
     * Settings related to 2.4Ghz band
     */
    twoFourGhzSettings?: UpdateNetworkWirelessRfProfileRequestBodyTwoFourGhzSettings;
}
export declare class UpdateNetworkWirelessRfProfileRequest extends SpeakeasyBase {
    requestBody?: UpdateNetworkWirelessRfProfileRequestBody;
    networkId: string;
    rfProfileId: string;
}
/**
 * Settings that will be enabled if selectionType is set to 'ap'.
 */
export declare class UpdateNetworkWirelessRfProfile200ApplicationJSONApBandSettings extends SpeakeasyBase {
    /**
     * Choice between 'dual', '2.4ghz' or '5ghz'. Defaults to dual.
     */
    bandOperationMode?: string;
    /**
     * Steers client to most open band. Can be either true or false. Defaults to true.
     */
    bandSteeringEnabled?: boolean;
}
/**
 * Settings related to 5Ghz band
 */
export declare class UpdateNetworkWirelessRfProfile200ApplicationJSONFiveGhzSettings extends SpeakeasyBase {
    /**
     * Sets channel width (MHz) for 5Ghz band. Can be one of 'auto', '20', '40' or '80'. Defaults to auto.
     */
    channelWidth?: string;
    /**
     * Sets max power (dBm) of 5Ghz band. Can be integer between 2 and 30. Defaults to 30.
     */
    maxPower?: number;
    /**
     * Sets min bitrate (Mbps) of 5Ghz band. Can be one of '6', '9', '12', '18', '24', '36', '48' or '54'. Defaults to 12.
     */
    minBitrate?: number;
    /**
     * Sets min power (dBm) of 5Ghz band. Can be integer between 2 and 30. Defaults to 8.
     */
    minPower?: number;
    /**
     * The RX-SOP level controls the sensitivity of the radio. It is strongly recommended to use RX-SOP only after consulting a wireless expert. RX-SOP can be configured in the range of -65 to -95 (dBm). A value of null will reset this to the default.
     */
    rxsop?: number;
    /**
     * Sets valid auto channels for 5Ghz band. Can be one of '36', '40', '44', '48', '52', '56', '60', '64', '100', '104', '108', '112', '116', '120', '124', '128', '132', '136', '140', '144', '149', '153', '157', '161' or '165'.Defaults to [36, 40, 44, 48, 52, 56, 60, 64, 100, 104, 108, 112, 116, 120, 124, 128, 132, 136, 140, 144, 149, 153, 157, 161, 165].
     */
    validAutoChannels?: number[];
}
/**
 * Choice between 'dual', '2.4ghz' or '5ghz'.
 */
export declare enum UpdateNetworkWirelessRfProfile200ApplicationJSONPerSsidSettings0BandOperationModeEnum {
    Two4ghz = "2.4ghz",
    Fiveghz = "5ghz",
    Dual = "dual"
}
/**
 * Settings for SSID 0
 */
export declare class UpdateNetworkWirelessRfProfile200ApplicationJSONPerSsidSettings0 extends SpeakeasyBase {
    /**
     * Choice between 'dual', '2.4ghz' or '5ghz'.
     */
    bandOperationMode?: UpdateNetworkWirelessRfProfile200ApplicationJSONPerSsidSettings0BandOperationModeEnum;
    /**
     * Steers client to most open band between 2.4 GHz and 5 GHz. Can be either true or false.
     */
    bandSteeringEnabled?: boolean;
    /**
     * Sets min bitrate (Mbps) of this SSID. Can be one of '1', '2', '5.5', '6', '9', '11', '12', '18', '24', '36', '48' or '54'.
     */
    minBitrate?: number;
    /**
     * Name of SSID
     */
    name?: string;
}
/**
 * Choice between 'dual', '2.4ghz' or '5ghz'.
 */
export declare enum UpdateNetworkWirelessRfProfile200ApplicationJSONPerSsidSettings1BandOperationModeEnum {
    Two4ghz = "2.4ghz",
    Fiveghz = "5ghz",
    Dual = "dual"
}
/**
 * Settings for SSID 1
 */
export declare class UpdateNetworkWirelessRfProfile200ApplicationJSONPerSsidSettings1 extends SpeakeasyBase {
    /**
     * Choice between 'dual', '2.4ghz' or '5ghz'.
     */
    bandOperationMode?: UpdateNetworkWirelessRfProfile200ApplicationJSONPerSsidSettings1BandOperationModeEnum;
    /**
     * Steers client to most open band between 2.4 GHz and 5 GHz. Can be either true or false.
     */
    bandSteeringEnabled?: boolean;
    /**
     * Sets min bitrate (Mbps) of this SSID. Can be one of '1', '2', '5.5', '6', '9', '11', '12', '18', '24', '36', '48' or '54'.
     */
    minBitrate?: number;
    /**
     * Name of SSID
     */
    name?: string;
}
/**
 * Choice between 'dual', '2.4ghz' or '5ghz'.
 */
export declare enum UpdateNetworkWirelessRfProfile200ApplicationJSONPerSsidSettings10BandOperationModeEnum {
    Two4ghz = "2.4ghz",
    Fiveghz = "5ghz",
    Dual = "dual"
}
/**
 * Settings for SSID 10
 */
export declare class UpdateNetworkWirelessRfProfile200ApplicationJSONPerSsidSettings10 extends SpeakeasyBase {
    /**
     * Choice between 'dual', '2.4ghz' or '5ghz'.
     */
    bandOperationMode?: UpdateNetworkWirelessRfProfile200ApplicationJSONPerSsidSettings10BandOperationModeEnum;
    /**
     * Steers client to most open band between 2.4 GHz and 5 GHz. Can be either true or false.
     */
    bandSteeringEnabled?: boolean;
    /**
     * Sets min bitrate (Mbps) of this SSID. Can be one of '1', '2', '5.5', '6', '9', '11', '12', '18', '24', '36', '48' or '54'.
     */
    minBitrate?: number;
    /**
     * Name of SSID
     */
    name?: string;
}
/**
 * Choice between 'dual', '2.4ghz' or '5ghz'.
 */
export declare enum UpdateNetworkWirelessRfProfile200ApplicationJSONPerSsidSettings11BandOperationModeEnum {
    Two4ghz = "2.4ghz",
    Fiveghz = "5ghz",
    Dual = "dual"
}
/**
 * Settings for SSID 11
 */
export declare class UpdateNetworkWirelessRfProfile200ApplicationJSONPerSsidSettings11 extends SpeakeasyBase {
    /**
     * Choice between 'dual', '2.4ghz' or '5ghz'.
     */
    bandOperationMode?: UpdateNetworkWirelessRfProfile200ApplicationJSONPerSsidSettings11BandOperationModeEnum;
    /**
     * Steers client to most open band between 2.4 GHz and 5 GHz. Can be either true or false.
     */
    bandSteeringEnabled?: boolean;
    /**
     * Sets min bitrate (Mbps) of this SSID. Can be one of '1', '2', '5.5', '6', '9', '11', '12', '18', '24', '36', '48' or '54'.
     */
    minBitrate?: number;
    /**
     * Name of SSID
     */
    name?: string;
}
/**
 * Choice between 'dual', '2.4ghz' or '5ghz'.
 */
export declare enum UpdateNetworkWirelessRfProfile200ApplicationJSONPerSsidSettings12BandOperationModeEnum {
    Two4ghz = "2.4ghz",
    Fiveghz = "5ghz",
    Dual = "dual"
}
/**
 * Settings for SSID 12
 */
export declare class UpdateNetworkWirelessRfProfile200ApplicationJSONPerSsidSettings12 extends SpeakeasyBase {
    /**
     * Choice between 'dual', '2.4ghz' or '5ghz'.
     */
    bandOperationMode?: UpdateNetworkWirelessRfProfile200ApplicationJSONPerSsidSettings12BandOperationModeEnum;
    /**
     * Steers client to most open band between 2.4 GHz and 5 GHz. Can be either true or false.
     */
    bandSteeringEnabled?: boolean;
    /**
     * Sets min bitrate (Mbps) of this SSID. Can be one of '1', '2', '5.5', '6', '9', '11', '12', '18', '24', '36', '48' or '54'.
     */
    minBitrate?: number;
    /**
     * Name of SSID
     */
    name?: string;
}
/**
 * Choice between 'dual', '2.4ghz' or '5ghz'.
 */
export declare enum UpdateNetworkWirelessRfProfile200ApplicationJSONPerSsidSettings13BandOperationModeEnum {
    Two4ghz = "2.4ghz",
    Fiveghz = "5ghz",
    Dual = "dual"
}
/**
 * Settings for SSID 13
 */
export declare class UpdateNetworkWirelessRfProfile200ApplicationJSONPerSsidSettings13 extends SpeakeasyBase {
    /**
     * Choice between 'dual', '2.4ghz' or '5ghz'.
     */
    bandOperationMode?: UpdateNetworkWirelessRfProfile200ApplicationJSONPerSsidSettings13BandOperationModeEnum;
    /**
     * Steers client to most open band between 2.4 GHz and 5 GHz. Can be either true or false.
     */
    bandSteeringEnabled?: boolean;
    /**
     * Sets min bitrate (Mbps) of this SSID. Can be one of '1', '2', '5.5', '6', '9', '11', '12', '18', '24', '36', '48' or '54'.
     */
    minBitrate?: number;
    /**
     * Name of SSID
     */
    name?: string;
}
/**
 * Choice between 'dual', '2.4ghz' or '5ghz'.
 */
export declare enum UpdateNetworkWirelessRfProfile200ApplicationJSONPerSsidSettings14BandOperationModeEnum {
    Two4ghz = "2.4ghz",
    Fiveghz = "5ghz",
    Dual = "dual"
}
/**
 * Settings for SSID 14
 */
export declare class UpdateNetworkWirelessRfProfile200ApplicationJSONPerSsidSettings14 extends SpeakeasyBase {
    /**
     * Choice between 'dual', '2.4ghz' or '5ghz'.
     */
    bandOperationMode?: UpdateNetworkWirelessRfProfile200ApplicationJSONPerSsidSettings14BandOperationModeEnum;
    /**
     * Steers client to most open band between 2.4 GHz and 5 GHz. Can be either true or false.
     */
    bandSteeringEnabled?: boolean;
    /**
     * Sets min bitrate (Mbps) of this SSID. Can be one of '1', '2', '5.5', '6', '9', '11', '12', '18', '24', '36', '48' or '54'.
     */
    minBitrate?: number;
    /**
     * Name of SSID
     */
    name?: string;
}
/**
 * Choice between 'dual', '2.4ghz' or '5ghz'.
 */
export declare enum UpdateNetworkWirelessRfProfile200ApplicationJSONPerSsidSettings2BandOperationModeEnum {
    Two4ghz = "2.4ghz",
    Fiveghz = "5ghz",
    Dual = "dual"
}
/**
 * Settings for SSID 2
 */
export declare class UpdateNetworkWirelessRfProfile200ApplicationJSONPerSsidSettings2 extends SpeakeasyBase {
    /**
     * Choice between 'dual', '2.4ghz' or '5ghz'.
     */
    bandOperationMode?: UpdateNetworkWirelessRfProfile200ApplicationJSONPerSsidSettings2BandOperationModeEnum;
    /**
     * Steers client to most open band between 2.4 GHz and 5 GHz. Can be either true or false.
     */
    bandSteeringEnabled?: boolean;
    /**
     * Sets min bitrate (Mbps) of this SSID. Can be one of '1', '2', '5.5', '6', '9', '11', '12', '18', '24', '36', '48' or '54'.
     */
    minBitrate?: number;
    /**
     * Name of SSID
     */
    name?: string;
}
/**
 * Choice between 'dual', '2.4ghz' or '5ghz'.
 */
export declare enum UpdateNetworkWirelessRfProfile200ApplicationJSONPerSsidSettings3BandOperationModeEnum {
    Two4ghz = "2.4ghz",
    Fiveghz = "5ghz",
    Dual = "dual"
}
/**
 * Settings for SSID 3
 */
export declare class UpdateNetworkWirelessRfProfile200ApplicationJSONPerSsidSettings3 extends SpeakeasyBase {
    /**
     * Choice between 'dual', '2.4ghz' or '5ghz'.
     */
    bandOperationMode?: UpdateNetworkWirelessRfProfile200ApplicationJSONPerSsidSettings3BandOperationModeEnum;
    /**
     * Steers client to most open band between 2.4 GHz and 5 GHz. Can be either true or false.
     */
    bandSteeringEnabled?: boolean;
    /**
     * Sets min bitrate (Mbps) of this SSID. Can be one of '1', '2', '5.5', '6', '9', '11', '12', '18', '24', '36', '48' or '54'.
     */
    minBitrate?: number;
    /**
     * Name of SSID
     */
    name?: string;
}
/**
 * Choice between 'dual', '2.4ghz' or '5ghz'.
 */
export declare enum UpdateNetworkWirelessRfProfile200ApplicationJSONPerSsidSettings4BandOperationModeEnum {
    Two4ghz = "2.4ghz",
    Fiveghz = "5ghz",
    Dual = "dual"
}
/**
 * Settings for SSID 4
 */
export declare class UpdateNetworkWirelessRfProfile200ApplicationJSONPerSsidSettings4 extends SpeakeasyBase {
    /**
     * Choice between 'dual', '2.4ghz' or '5ghz'.
     */
    bandOperationMode?: UpdateNetworkWirelessRfProfile200ApplicationJSONPerSsidSettings4BandOperationModeEnum;
    /**
     * Steers client to most open band between 2.4 GHz and 5 GHz. Can be either true or false.
     */
    bandSteeringEnabled?: boolean;
    /**
     * Sets min bitrate (Mbps) of this SSID. Can be one of '1', '2', '5.5', '6', '9', '11', '12', '18', '24', '36', '48' or '54'.
     */
    minBitrate?: number;
    /**
     * Name of SSID
     */
    name?: string;
}
/**
 * Choice between 'dual', '2.4ghz' or '5ghz'.
 */
export declare enum UpdateNetworkWirelessRfProfile200ApplicationJSONPerSsidSettings5BandOperationModeEnum {
    Two4ghz = "2.4ghz",
    Fiveghz = "5ghz",
    Dual = "dual"
}
/**
 * Settings for SSID 5
 */
export declare class UpdateNetworkWirelessRfProfile200ApplicationJSONPerSsidSettings5 extends SpeakeasyBase {
    /**
     * Choice between 'dual', '2.4ghz' or '5ghz'.
     */
    bandOperationMode?: UpdateNetworkWirelessRfProfile200ApplicationJSONPerSsidSettings5BandOperationModeEnum;
    /**
     * Steers client to most open band between 2.4 GHz and 5 GHz. Can be either true or false.
     */
    bandSteeringEnabled?: boolean;
    /**
     * Sets min bitrate (Mbps) of this SSID. Can be one of '1', '2', '5.5', '6', '9', '11', '12', '18', '24', '36', '48' or '54'.
     */
    minBitrate?: number;
    /**
     * Name of SSID
     */
    name?: string;
}
/**
 * Choice between 'dual', '2.4ghz' or '5ghz'.
 */
export declare enum UpdateNetworkWirelessRfProfile200ApplicationJSONPerSsidSettings6BandOperationModeEnum {
    Two4ghz = "2.4ghz",
    Fiveghz = "5ghz",
    Dual = "dual"
}
/**
 * Settings for SSID 6
 */
export declare class UpdateNetworkWirelessRfProfile200ApplicationJSONPerSsidSettings6 extends SpeakeasyBase {
    /**
     * Choice between 'dual', '2.4ghz' or '5ghz'.
     */
    bandOperationMode?: UpdateNetworkWirelessRfProfile200ApplicationJSONPerSsidSettings6BandOperationModeEnum;
    /**
     * Steers client to most open band between 2.4 GHz and 5 GHz. Can be either true or false.
     */
    bandSteeringEnabled?: boolean;
    /**
     * Sets min bitrate (Mbps) of this SSID. Can be one of '1', '2', '5.5', '6', '9', '11', '12', '18', '24', '36', '48' or '54'.
     */
    minBitrate?: number;
    /**
     * Name of SSID
     */
    name?: string;
}
/**
 * Choice between 'dual', '2.4ghz' or '5ghz'.
 */
export declare enum UpdateNetworkWirelessRfProfile200ApplicationJSONPerSsidSettings7BandOperationModeEnum {
    Two4ghz = "2.4ghz",
    Fiveghz = "5ghz",
    Dual = "dual"
}
/**
 * Settings for SSID 7
 */
export declare class UpdateNetworkWirelessRfProfile200ApplicationJSONPerSsidSettings7 extends SpeakeasyBase {
    /**
     * Choice between 'dual', '2.4ghz' or '5ghz'.
     */
    bandOperationMode?: UpdateNetworkWirelessRfProfile200ApplicationJSONPerSsidSettings7BandOperationModeEnum;
    /**
     * Steers client to most open band between 2.4 GHz and 5 GHz. Can be either true or false.
     */
    bandSteeringEnabled?: boolean;
    /**
     * Sets min bitrate (Mbps) of this SSID. Can be one of '1', '2', '5.5', '6', '9', '11', '12', '18', '24', '36', '48' or '54'.
     */
    minBitrate?: number;
    /**
     * Name of SSID
     */
    name?: string;
}
/**
 * Choice between 'dual', '2.4ghz' or '5ghz'.
 */
export declare enum UpdateNetworkWirelessRfProfile200ApplicationJSONPerSsidSettings8BandOperationModeEnum {
    Two4ghz = "2.4ghz",
    Fiveghz = "5ghz",
    Dual = "dual"
}
/**
 * Settings for SSID 8
 */
export declare class UpdateNetworkWirelessRfProfile200ApplicationJSONPerSsidSettings8 extends SpeakeasyBase {
    /**
     * Choice between 'dual', '2.4ghz' or '5ghz'.
     */
    bandOperationMode?: UpdateNetworkWirelessRfProfile200ApplicationJSONPerSsidSettings8BandOperationModeEnum;
    /**
     * Steers client to most open band between 2.4 GHz and 5 GHz. Can be either true or false.
     */
    bandSteeringEnabled?: boolean;
    /**
     * Sets min bitrate (Mbps) of this SSID. Can be one of '1', '2', '5.5', '6', '9', '11', '12', '18', '24', '36', '48' or '54'.
     */
    minBitrate?: number;
    /**
     * Name of SSID
     */
    name?: string;
}
/**
 * Choice between 'dual', '2.4ghz' or '5ghz'.
 */
export declare enum UpdateNetworkWirelessRfProfile200ApplicationJSONPerSsidSettings9BandOperationModeEnum {
    Two4ghz = "2.4ghz",
    Fiveghz = "5ghz",
    Dual = "dual"
}
/**
 * Settings for SSID 9
 */
export declare class UpdateNetworkWirelessRfProfile200ApplicationJSONPerSsidSettings9 extends SpeakeasyBase {
    /**
     * Choice between 'dual', '2.4ghz' or '5ghz'.
     */
    bandOperationMode?: UpdateNetworkWirelessRfProfile200ApplicationJSONPerSsidSettings9BandOperationModeEnum;
    /**
     * Steers client to most open band between 2.4 GHz and 5 GHz. Can be either true or false.
     */
    bandSteeringEnabled?: boolean;
    /**
     * Sets min bitrate (Mbps) of this SSID. Can be one of '1', '2', '5.5', '6', '9', '11', '12', '18', '24', '36', '48' or '54'.
     */
    minBitrate?: number;
    /**
     * Name of SSID
     */
    name?: string;
}
/**
 * Per-SSID radio settings by number.
 */
export declare class UpdateNetworkWirelessRfProfile200ApplicationJSONPerSsidSettings extends SpeakeasyBase {
    /**
     * Settings for SSID 0
     */
    zero?: UpdateNetworkWirelessRfProfile200ApplicationJSONPerSsidSettings0;
    /**
     * Settings for SSID 1
     */
    one?: UpdateNetworkWirelessRfProfile200ApplicationJSONPerSsidSettings1;
    /**
     * Settings for SSID 10
     */
    ten?: UpdateNetworkWirelessRfProfile200ApplicationJSONPerSsidSettings10;
    /**
     * Settings for SSID 11
     */
    eleven?: UpdateNetworkWirelessRfProfile200ApplicationJSONPerSsidSettings11;
    /**
     * Settings for SSID 12
     */
    twelve?: UpdateNetworkWirelessRfProfile200ApplicationJSONPerSsidSettings12;
    /**
     * Settings for SSID 13
     */
    thirteen?: UpdateNetworkWirelessRfProfile200ApplicationJSONPerSsidSettings13;
    /**
     * Settings for SSID 14
     */
    fourteen?: UpdateNetworkWirelessRfProfile200ApplicationJSONPerSsidSettings14;
    /**
     * Settings for SSID 2
     */
    two?: UpdateNetworkWirelessRfProfile200ApplicationJSONPerSsidSettings2;
    /**
     * Settings for SSID 3
     */
    three?: UpdateNetworkWirelessRfProfile200ApplicationJSONPerSsidSettings3;
    /**
     * Settings for SSID 4
     */
    four?: UpdateNetworkWirelessRfProfile200ApplicationJSONPerSsidSettings4;
    /**
     * Settings for SSID 5
     */
    five?: UpdateNetworkWirelessRfProfile200ApplicationJSONPerSsidSettings5;
    /**
     * Settings for SSID 6
     */
    six?: UpdateNetworkWirelessRfProfile200ApplicationJSONPerSsidSettings6;
    /**
     * Settings for SSID 7
     */
    seven?: UpdateNetworkWirelessRfProfile200ApplicationJSONPerSsidSettings7;
    /**
     * Settings for SSID 8
     */
    eight?: UpdateNetworkWirelessRfProfile200ApplicationJSONPerSsidSettings8;
    /**
     * Settings for SSID 9
     */
    nine?: UpdateNetworkWirelessRfProfile200ApplicationJSONPerSsidSettings9;
}
/**
 * Settings related to radio transmission.
 */
export declare class UpdateNetworkWirelessRfProfile200ApplicationJSONTransmission extends SpeakeasyBase {
    /**
     * Toggle for radio transmission. When false, radios will not transmit at all.
     */
    enabled?: boolean;
}
/**
 * Settings related to 2.4Ghz band
 */
export declare class UpdateNetworkWirelessRfProfile200ApplicationJSONTwoFourGhzSettings extends SpeakeasyBase {
    /**
     * Determines whether ax radio on 2.4Ghz band is on or off. Can be either true or false. If false, we highly recommend disabling band steering. Defaults to true.
     */
    axEnabled?: boolean;
    /**
     * Sets max power (dBm) of 2.4Ghz band. Can be integer between 2 and 30. Defaults to 30.
     */
    maxPower?: number;
    /**
     * Sets min bitrate (Mbps) of 2.4Ghz band. Can be one of '1', '2', '5.5', '6', '9', '11', '12', '18', '24', '36', '48' or '54'. Defaults to 11.
     */
    minBitrate?: number;
    /**
     * Sets min power (dBm) of 2.4Ghz band. Can be integer between 2 and 30. Defaults to 5.
     */
    minPower?: number;
    /**
     * The RX-SOP level controls the sensitivity of the radio. It is strongly recommended to use RX-SOP only after consulting a wireless expert. RX-SOP can be configured in the range of -65 to -95 (dBm). A value of null will reset this to the default.
     */
    rxsop?: number;
    /**
     * Sets valid auto channels for 2.4Ghz band. Can be one of '1', '6' or '11'. Defaults to [1, 6, 11].
     */
    validAutoChannels?: number[];
}
/**
 * Successful operation
 */
export declare class UpdateNetworkWirelessRfProfile200ApplicationJSON extends SpeakeasyBase {
    /**
     * Settings that will be enabled if selectionType is set to 'ap'.
     */
    apBandSettings?: UpdateNetworkWirelessRfProfile200ApplicationJSONApBandSettings;
    /**
     * Band selection can be set to either 'ssid' or 'ap'. This param is required on creation.
     */
    bandSelectionType?: string;
    /**
     * Steers client to best available access point. Can be either true or false. Defaults to true.
     */
    clientBalancingEnabled?: boolean;
    /**
     * Settings related to 5Ghz band
     */
    fiveGhzSettings?: UpdateNetworkWirelessRfProfile200ApplicationJSONFiveGhzSettings;
    /**
     * The name of the new profile. Must be unique.
     */
    id?: string;
    /**
     * Minimum bitrate can be set to either 'band' or 'ssid'. Defaults to band.
     */
    minBitrateType?: string;
    /**
     * The name of the new profile. Must be unique. This param is required on creation.
     */
    name?: string;
    /**
     * The network ID of the RF Profile
     */
    networkId?: string;
    /**
     * Per-SSID radio settings by number.
     */
    perSsidSettings?: UpdateNetworkWirelessRfProfile200ApplicationJSONPerSsidSettings;
    /**
     * Settings related to radio transmission.
     */
    transmission?: UpdateNetworkWirelessRfProfile200ApplicationJSONTransmission;
    /**
     * Settings related to 2.4Ghz band
     */
    twoFourGhzSettings?: UpdateNetworkWirelessRfProfile200ApplicationJSONTwoFourGhzSettings;
}
export declare class UpdateNetworkWirelessRfProfileResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    updateNetworkWirelessRfProfile200ApplicationJSONObject?: UpdateNetworkWirelessRfProfile200ApplicationJSON;
}
