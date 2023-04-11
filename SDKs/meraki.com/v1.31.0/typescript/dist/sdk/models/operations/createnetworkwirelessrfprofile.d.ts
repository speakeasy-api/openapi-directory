import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Choice between 'dual', '2.4ghz' or '5ghz'. Defaults to dual.
 */
export declare enum CreateNetworkWirelessRfProfileRequestBodyApBandSettingsBandOperationModeEnum {
    Two4ghz = "2.4ghz",
    Fiveghz = "5ghz",
    Dual = "dual"
}
/**
 * Settings that will be enabled if selectionType is set to 'ap'.
 */
export declare class CreateNetworkWirelessRfProfileRequestBodyApBandSettings extends SpeakeasyBase {
    /**
     * Choice between 'dual', '2.4ghz' or '5ghz'. Defaults to dual.
     */
    bandOperationMode?: CreateNetworkWirelessRfProfileRequestBodyApBandSettingsBandOperationModeEnum;
    /**
     * Steers client to most open band. Can be either true or false. Defaults to true.
     */
    bandSteeringEnabled?: boolean;
}
/**
 * Band selection can be set to either 'ssid' or 'ap'. This param is required on creation.
 */
export declare enum CreateNetworkWirelessRfProfileRequestBodyBandSelectionTypeEnum {
    Ap = "ap",
    Ssid = "ssid"
}
/**
 * Settings related to 5Ghz band
 */
export declare class CreateNetworkWirelessRfProfileRequestBodyFiveGhzSettings extends SpeakeasyBase {
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
 * Minimum bitrate can be set to either 'band' or 'ssid'. Defaults to band.
 */
export declare enum CreateNetworkWirelessRfProfileRequestBodyMinBitrateTypeEnum {
    Band = "band",
    Ssid = "ssid"
}
/**
 * Choice between 'dual', '2.4ghz' or '5ghz'.
 */
export declare enum CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings0BandOperationModeEnum {
    Two4ghz = "2.4ghz",
    Fiveghz = "5ghz",
    Dual = "dual"
}
/**
 * Settings for SSID 0
 */
export declare class CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings0 extends SpeakeasyBase {
    /**
     * Choice between 'dual', '2.4ghz' or '5ghz'.
     */
    bandOperationMode?: CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings0BandOperationModeEnum;
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
export declare enum CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings1BandOperationModeEnum {
    Two4ghz = "2.4ghz",
    Fiveghz = "5ghz",
    Dual = "dual"
}
/**
 * Settings for SSID 1
 */
export declare class CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings1 extends SpeakeasyBase {
    /**
     * Choice between 'dual', '2.4ghz' or '5ghz'.
     */
    bandOperationMode?: CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings1BandOperationModeEnum;
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
export declare enum CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings10BandOperationModeEnum {
    Two4ghz = "2.4ghz",
    Fiveghz = "5ghz",
    Dual = "dual"
}
/**
 * Settings for SSID 10
 */
export declare class CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings10 extends SpeakeasyBase {
    /**
     * Choice between 'dual', '2.4ghz' or '5ghz'.
     */
    bandOperationMode?: CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings10BandOperationModeEnum;
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
export declare enum CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings11BandOperationModeEnum {
    Two4ghz = "2.4ghz",
    Fiveghz = "5ghz",
    Dual = "dual"
}
/**
 * Settings for SSID 11
 */
export declare class CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings11 extends SpeakeasyBase {
    /**
     * Choice between 'dual', '2.4ghz' or '5ghz'.
     */
    bandOperationMode?: CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings11BandOperationModeEnum;
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
export declare enum CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings12BandOperationModeEnum {
    Two4ghz = "2.4ghz",
    Fiveghz = "5ghz",
    Dual = "dual"
}
/**
 * Settings for SSID 12
 */
export declare class CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings12 extends SpeakeasyBase {
    /**
     * Choice between 'dual', '2.4ghz' or '5ghz'.
     */
    bandOperationMode?: CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings12BandOperationModeEnum;
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
export declare enum CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings13BandOperationModeEnum {
    Two4ghz = "2.4ghz",
    Fiveghz = "5ghz",
    Dual = "dual"
}
/**
 * Settings for SSID 13
 */
export declare class CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings13 extends SpeakeasyBase {
    /**
     * Choice between 'dual', '2.4ghz' or '5ghz'.
     */
    bandOperationMode?: CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings13BandOperationModeEnum;
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
export declare enum CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings14BandOperationModeEnum {
    Two4ghz = "2.4ghz",
    Fiveghz = "5ghz",
    Dual = "dual"
}
/**
 * Settings for SSID 14
 */
export declare class CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings14 extends SpeakeasyBase {
    /**
     * Choice between 'dual', '2.4ghz' or '5ghz'.
     */
    bandOperationMode?: CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings14BandOperationModeEnum;
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
export declare enum CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings2BandOperationModeEnum {
    Two4ghz = "2.4ghz",
    Fiveghz = "5ghz",
    Dual = "dual"
}
/**
 * Settings for SSID 2
 */
export declare class CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings2 extends SpeakeasyBase {
    /**
     * Choice between 'dual', '2.4ghz' or '5ghz'.
     */
    bandOperationMode?: CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings2BandOperationModeEnum;
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
export declare enum CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings3BandOperationModeEnum {
    Two4ghz = "2.4ghz",
    Fiveghz = "5ghz",
    Dual = "dual"
}
/**
 * Settings for SSID 3
 */
export declare class CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings3 extends SpeakeasyBase {
    /**
     * Choice between 'dual', '2.4ghz' or '5ghz'.
     */
    bandOperationMode?: CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings3BandOperationModeEnum;
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
export declare enum CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings4BandOperationModeEnum {
    Two4ghz = "2.4ghz",
    Fiveghz = "5ghz",
    Dual = "dual"
}
/**
 * Settings for SSID 4
 */
export declare class CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings4 extends SpeakeasyBase {
    /**
     * Choice between 'dual', '2.4ghz' or '5ghz'.
     */
    bandOperationMode?: CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings4BandOperationModeEnum;
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
export declare enum CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings5BandOperationModeEnum {
    Two4ghz = "2.4ghz",
    Fiveghz = "5ghz",
    Dual = "dual"
}
/**
 * Settings for SSID 5
 */
export declare class CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings5 extends SpeakeasyBase {
    /**
     * Choice between 'dual', '2.4ghz' or '5ghz'.
     */
    bandOperationMode?: CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings5BandOperationModeEnum;
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
export declare enum CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings6BandOperationModeEnum {
    Two4ghz = "2.4ghz",
    Fiveghz = "5ghz",
    Dual = "dual"
}
/**
 * Settings for SSID 6
 */
export declare class CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings6 extends SpeakeasyBase {
    /**
     * Choice between 'dual', '2.4ghz' or '5ghz'.
     */
    bandOperationMode?: CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings6BandOperationModeEnum;
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
export declare enum CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings7BandOperationModeEnum {
    Two4ghz = "2.4ghz",
    Fiveghz = "5ghz",
    Dual = "dual"
}
/**
 * Settings for SSID 7
 */
export declare class CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings7 extends SpeakeasyBase {
    /**
     * Choice between 'dual', '2.4ghz' or '5ghz'.
     */
    bandOperationMode?: CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings7BandOperationModeEnum;
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
export declare enum CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings8BandOperationModeEnum {
    Two4ghz = "2.4ghz",
    Fiveghz = "5ghz",
    Dual = "dual"
}
/**
 * Settings for SSID 8
 */
export declare class CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings8 extends SpeakeasyBase {
    /**
     * Choice between 'dual', '2.4ghz' or '5ghz'.
     */
    bandOperationMode?: CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings8BandOperationModeEnum;
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
export declare enum CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings9BandOperationModeEnum {
    Two4ghz = "2.4ghz",
    Fiveghz = "5ghz",
    Dual = "dual"
}
/**
 * Settings for SSID 9
 */
export declare class CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings9 extends SpeakeasyBase {
    /**
     * Choice between 'dual', '2.4ghz' or '5ghz'.
     */
    bandOperationMode?: CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings9BandOperationModeEnum;
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
export declare class CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings extends SpeakeasyBase {
    /**
     * Settings for SSID 0
     */
    zero?: CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings0;
    /**
     * Settings for SSID 1
     */
    one?: CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings1;
    /**
     * Settings for SSID 10
     */
    ten?: CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings10;
    /**
     * Settings for SSID 11
     */
    eleven?: CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings11;
    /**
     * Settings for SSID 12
     */
    twelve?: CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings12;
    /**
     * Settings for SSID 13
     */
    thirteen?: CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings13;
    /**
     * Settings for SSID 14
     */
    fourteen?: CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings14;
    /**
     * Settings for SSID 2
     */
    two?: CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings2;
    /**
     * Settings for SSID 3
     */
    three?: CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings3;
    /**
     * Settings for SSID 4
     */
    four?: CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings4;
    /**
     * Settings for SSID 5
     */
    five?: CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings5;
    /**
     * Settings for SSID 6
     */
    six?: CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings6;
    /**
     * Settings for SSID 7
     */
    seven?: CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings7;
    /**
     * Settings for SSID 8
     */
    eight?: CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings8;
    /**
     * Settings for SSID 9
     */
    nine?: CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings9;
}
/**
 * Settings related to radio transmission.
 */
export declare class CreateNetworkWirelessRfProfileRequestBodyTransmission extends SpeakeasyBase {
    /**
     * Toggle for radio transmission. When false, radios will not transmit at all.
     */
    enabled?: boolean;
}
/**
 * Settings related to 2.4Ghz band
 */
export declare class CreateNetworkWirelessRfProfileRequestBodyTwoFourGhzSettings extends SpeakeasyBase {
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
export declare class CreateNetworkWirelessRfProfileRequestBody extends SpeakeasyBase {
    /**
     * Settings that will be enabled if selectionType is set to 'ap'.
     */
    apBandSettings?: CreateNetworkWirelessRfProfileRequestBodyApBandSettings;
    /**
     * Band selection can be set to either 'ssid' or 'ap'. This param is required on creation.
     */
    bandSelectionType: CreateNetworkWirelessRfProfileRequestBodyBandSelectionTypeEnum;
    /**
     * Steers client to best available access point. Can be either true or false. Defaults to true.
     */
    clientBalancingEnabled?: boolean;
    /**
     * Settings related to 5Ghz band
     */
    fiveGhzSettings?: CreateNetworkWirelessRfProfileRequestBodyFiveGhzSettings;
    /**
     * Minimum bitrate can be set to either 'band' or 'ssid'. Defaults to band.
     */
    minBitrateType?: CreateNetworkWirelessRfProfileRequestBodyMinBitrateTypeEnum;
    /**
     * The name of the new profile. Must be unique. This param is required on creation.
     */
    name: string;
    /**
     * Per-SSID radio settings by number.
     */
    perSsidSettings?: CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings;
    /**
     * Settings related to radio transmission.
     */
    transmission?: CreateNetworkWirelessRfProfileRequestBodyTransmission;
    /**
     * Settings related to 2.4Ghz band
     */
    twoFourGhzSettings?: CreateNetworkWirelessRfProfileRequestBodyTwoFourGhzSettings;
}
export declare class CreateNetworkWirelessRfProfileRequest extends SpeakeasyBase {
    requestBody: CreateNetworkWirelessRfProfileRequestBody;
    networkId: string;
}
/**
 * Settings that will be enabled if selectionType is set to 'ap'.
 */
export declare class CreateNetworkWirelessRfProfile201ApplicationJSONApBandSettings extends SpeakeasyBase {
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
export declare class CreateNetworkWirelessRfProfile201ApplicationJSONFiveGhzSettings extends SpeakeasyBase {
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
export declare enum CreateNetworkWirelessRfProfile201ApplicationJSONPerSsidSettings0BandOperationModeEnum {
    Two4ghz = "2.4ghz",
    Fiveghz = "5ghz",
    Dual = "dual"
}
/**
 * Settings for SSID 0
 */
export declare class CreateNetworkWirelessRfProfile201ApplicationJSONPerSsidSettings0 extends SpeakeasyBase {
    /**
     * Choice between 'dual', '2.4ghz' or '5ghz'.
     */
    bandOperationMode?: CreateNetworkWirelessRfProfile201ApplicationJSONPerSsidSettings0BandOperationModeEnum;
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
export declare enum CreateNetworkWirelessRfProfile201ApplicationJSONPerSsidSettings1BandOperationModeEnum {
    Two4ghz = "2.4ghz",
    Fiveghz = "5ghz",
    Dual = "dual"
}
/**
 * Settings for SSID 1
 */
export declare class CreateNetworkWirelessRfProfile201ApplicationJSONPerSsidSettings1 extends SpeakeasyBase {
    /**
     * Choice between 'dual', '2.4ghz' or '5ghz'.
     */
    bandOperationMode?: CreateNetworkWirelessRfProfile201ApplicationJSONPerSsidSettings1BandOperationModeEnum;
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
export declare enum CreateNetworkWirelessRfProfile201ApplicationJSONPerSsidSettings10BandOperationModeEnum {
    Two4ghz = "2.4ghz",
    Fiveghz = "5ghz",
    Dual = "dual"
}
/**
 * Settings for SSID 10
 */
export declare class CreateNetworkWirelessRfProfile201ApplicationJSONPerSsidSettings10 extends SpeakeasyBase {
    /**
     * Choice between 'dual', '2.4ghz' or '5ghz'.
     */
    bandOperationMode?: CreateNetworkWirelessRfProfile201ApplicationJSONPerSsidSettings10BandOperationModeEnum;
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
export declare enum CreateNetworkWirelessRfProfile201ApplicationJSONPerSsidSettings11BandOperationModeEnum {
    Two4ghz = "2.4ghz",
    Fiveghz = "5ghz",
    Dual = "dual"
}
/**
 * Settings for SSID 11
 */
export declare class CreateNetworkWirelessRfProfile201ApplicationJSONPerSsidSettings11 extends SpeakeasyBase {
    /**
     * Choice between 'dual', '2.4ghz' or '5ghz'.
     */
    bandOperationMode?: CreateNetworkWirelessRfProfile201ApplicationJSONPerSsidSettings11BandOperationModeEnum;
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
export declare enum CreateNetworkWirelessRfProfile201ApplicationJSONPerSsidSettings12BandOperationModeEnum {
    Two4ghz = "2.4ghz",
    Fiveghz = "5ghz",
    Dual = "dual"
}
/**
 * Settings for SSID 12
 */
export declare class CreateNetworkWirelessRfProfile201ApplicationJSONPerSsidSettings12 extends SpeakeasyBase {
    /**
     * Choice between 'dual', '2.4ghz' or '5ghz'.
     */
    bandOperationMode?: CreateNetworkWirelessRfProfile201ApplicationJSONPerSsidSettings12BandOperationModeEnum;
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
export declare enum CreateNetworkWirelessRfProfile201ApplicationJSONPerSsidSettings13BandOperationModeEnum {
    Two4ghz = "2.4ghz",
    Fiveghz = "5ghz",
    Dual = "dual"
}
/**
 * Settings for SSID 13
 */
export declare class CreateNetworkWirelessRfProfile201ApplicationJSONPerSsidSettings13 extends SpeakeasyBase {
    /**
     * Choice between 'dual', '2.4ghz' or '5ghz'.
     */
    bandOperationMode?: CreateNetworkWirelessRfProfile201ApplicationJSONPerSsidSettings13BandOperationModeEnum;
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
export declare enum CreateNetworkWirelessRfProfile201ApplicationJSONPerSsidSettings14BandOperationModeEnum {
    Two4ghz = "2.4ghz",
    Fiveghz = "5ghz",
    Dual = "dual"
}
/**
 * Settings for SSID 14
 */
export declare class CreateNetworkWirelessRfProfile201ApplicationJSONPerSsidSettings14 extends SpeakeasyBase {
    /**
     * Choice between 'dual', '2.4ghz' or '5ghz'.
     */
    bandOperationMode?: CreateNetworkWirelessRfProfile201ApplicationJSONPerSsidSettings14BandOperationModeEnum;
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
export declare enum CreateNetworkWirelessRfProfile201ApplicationJSONPerSsidSettings2BandOperationModeEnum {
    Two4ghz = "2.4ghz",
    Fiveghz = "5ghz",
    Dual = "dual"
}
/**
 * Settings for SSID 2
 */
export declare class CreateNetworkWirelessRfProfile201ApplicationJSONPerSsidSettings2 extends SpeakeasyBase {
    /**
     * Choice between 'dual', '2.4ghz' or '5ghz'.
     */
    bandOperationMode?: CreateNetworkWirelessRfProfile201ApplicationJSONPerSsidSettings2BandOperationModeEnum;
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
export declare enum CreateNetworkWirelessRfProfile201ApplicationJSONPerSsidSettings3BandOperationModeEnum {
    Two4ghz = "2.4ghz",
    Fiveghz = "5ghz",
    Dual = "dual"
}
/**
 * Settings for SSID 3
 */
export declare class CreateNetworkWirelessRfProfile201ApplicationJSONPerSsidSettings3 extends SpeakeasyBase {
    /**
     * Choice between 'dual', '2.4ghz' or '5ghz'.
     */
    bandOperationMode?: CreateNetworkWirelessRfProfile201ApplicationJSONPerSsidSettings3BandOperationModeEnum;
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
export declare enum CreateNetworkWirelessRfProfile201ApplicationJSONPerSsidSettings4BandOperationModeEnum {
    Two4ghz = "2.4ghz",
    Fiveghz = "5ghz",
    Dual = "dual"
}
/**
 * Settings for SSID 4
 */
export declare class CreateNetworkWirelessRfProfile201ApplicationJSONPerSsidSettings4 extends SpeakeasyBase {
    /**
     * Choice between 'dual', '2.4ghz' or '5ghz'.
     */
    bandOperationMode?: CreateNetworkWirelessRfProfile201ApplicationJSONPerSsidSettings4BandOperationModeEnum;
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
export declare enum CreateNetworkWirelessRfProfile201ApplicationJSONPerSsidSettings5BandOperationModeEnum {
    Two4ghz = "2.4ghz",
    Fiveghz = "5ghz",
    Dual = "dual"
}
/**
 * Settings for SSID 5
 */
export declare class CreateNetworkWirelessRfProfile201ApplicationJSONPerSsidSettings5 extends SpeakeasyBase {
    /**
     * Choice between 'dual', '2.4ghz' or '5ghz'.
     */
    bandOperationMode?: CreateNetworkWirelessRfProfile201ApplicationJSONPerSsidSettings5BandOperationModeEnum;
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
export declare enum CreateNetworkWirelessRfProfile201ApplicationJSONPerSsidSettings6BandOperationModeEnum {
    Two4ghz = "2.4ghz",
    Fiveghz = "5ghz",
    Dual = "dual"
}
/**
 * Settings for SSID 6
 */
export declare class CreateNetworkWirelessRfProfile201ApplicationJSONPerSsidSettings6 extends SpeakeasyBase {
    /**
     * Choice between 'dual', '2.4ghz' or '5ghz'.
     */
    bandOperationMode?: CreateNetworkWirelessRfProfile201ApplicationJSONPerSsidSettings6BandOperationModeEnum;
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
export declare enum CreateNetworkWirelessRfProfile201ApplicationJSONPerSsidSettings7BandOperationModeEnum {
    Two4ghz = "2.4ghz",
    Fiveghz = "5ghz",
    Dual = "dual"
}
/**
 * Settings for SSID 7
 */
export declare class CreateNetworkWirelessRfProfile201ApplicationJSONPerSsidSettings7 extends SpeakeasyBase {
    /**
     * Choice between 'dual', '2.4ghz' or '5ghz'.
     */
    bandOperationMode?: CreateNetworkWirelessRfProfile201ApplicationJSONPerSsidSettings7BandOperationModeEnum;
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
export declare enum CreateNetworkWirelessRfProfile201ApplicationJSONPerSsidSettings8BandOperationModeEnum {
    Two4ghz = "2.4ghz",
    Fiveghz = "5ghz",
    Dual = "dual"
}
/**
 * Settings for SSID 8
 */
export declare class CreateNetworkWirelessRfProfile201ApplicationJSONPerSsidSettings8 extends SpeakeasyBase {
    /**
     * Choice between 'dual', '2.4ghz' or '5ghz'.
     */
    bandOperationMode?: CreateNetworkWirelessRfProfile201ApplicationJSONPerSsidSettings8BandOperationModeEnum;
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
export declare enum CreateNetworkWirelessRfProfile201ApplicationJSONPerSsidSettings9BandOperationModeEnum {
    Two4ghz = "2.4ghz",
    Fiveghz = "5ghz",
    Dual = "dual"
}
/**
 * Settings for SSID 9
 */
export declare class CreateNetworkWirelessRfProfile201ApplicationJSONPerSsidSettings9 extends SpeakeasyBase {
    /**
     * Choice between 'dual', '2.4ghz' or '5ghz'.
     */
    bandOperationMode?: CreateNetworkWirelessRfProfile201ApplicationJSONPerSsidSettings9BandOperationModeEnum;
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
export declare class CreateNetworkWirelessRfProfile201ApplicationJSONPerSsidSettings extends SpeakeasyBase {
    /**
     * Settings for SSID 0
     */
    zero?: CreateNetworkWirelessRfProfile201ApplicationJSONPerSsidSettings0;
    /**
     * Settings for SSID 1
     */
    one?: CreateNetworkWirelessRfProfile201ApplicationJSONPerSsidSettings1;
    /**
     * Settings for SSID 10
     */
    ten?: CreateNetworkWirelessRfProfile201ApplicationJSONPerSsidSettings10;
    /**
     * Settings for SSID 11
     */
    eleven?: CreateNetworkWirelessRfProfile201ApplicationJSONPerSsidSettings11;
    /**
     * Settings for SSID 12
     */
    twelve?: CreateNetworkWirelessRfProfile201ApplicationJSONPerSsidSettings12;
    /**
     * Settings for SSID 13
     */
    thirteen?: CreateNetworkWirelessRfProfile201ApplicationJSONPerSsidSettings13;
    /**
     * Settings for SSID 14
     */
    fourteen?: CreateNetworkWirelessRfProfile201ApplicationJSONPerSsidSettings14;
    /**
     * Settings for SSID 2
     */
    two?: CreateNetworkWirelessRfProfile201ApplicationJSONPerSsidSettings2;
    /**
     * Settings for SSID 3
     */
    three?: CreateNetworkWirelessRfProfile201ApplicationJSONPerSsidSettings3;
    /**
     * Settings for SSID 4
     */
    four?: CreateNetworkWirelessRfProfile201ApplicationJSONPerSsidSettings4;
    /**
     * Settings for SSID 5
     */
    five?: CreateNetworkWirelessRfProfile201ApplicationJSONPerSsidSettings5;
    /**
     * Settings for SSID 6
     */
    six?: CreateNetworkWirelessRfProfile201ApplicationJSONPerSsidSettings6;
    /**
     * Settings for SSID 7
     */
    seven?: CreateNetworkWirelessRfProfile201ApplicationJSONPerSsidSettings7;
    /**
     * Settings for SSID 8
     */
    eight?: CreateNetworkWirelessRfProfile201ApplicationJSONPerSsidSettings8;
    /**
     * Settings for SSID 9
     */
    nine?: CreateNetworkWirelessRfProfile201ApplicationJSONPerSsidSettings9;
}
/**
 * Settings related to radio transmission.
 */
export declare class CreateNetworkWirelessRfProfile201ApplicationJSONTransmission extends SpeakeasyBase {
    /**
     * Toggle for radio transmission. When false, radios will not transmit at all.
     */
    enabled?: boolean;
}
/**
 * Settings related to 2.4Ghz band
 */
export declare class CreateNetworkWirelessRfProfile201ApplicationJSONTwoFourGhzSettings extends SpeakeasyBase {
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
export declare class CreateNetworkWirelessRfProfile201ApplicationJSON extends SpeakeasyBase {
    /**
     * Settings that will be enabled if selectionType is set to 'ap'.
     */
    apBandSettings?: CreateNetworkWirelessRfProfile201ApplicationJSONApBandSettings;
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
    fiveGhzSettings?: CreateNetworkWirelessRfProfile201ApplicationJSONFiveGhzSettings;
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
    perSsidSettings?: CreateNetworkWirelessRfProfile201ApplicationJSONPerSsidSettings;
    /**
     * Settings related to radio transmission.
     */
    transmission?: CreateNetworkWirelessRfProfile201ApplicationJSONTransmission;
    /**
     * Settings related to 2.4Ghz band
     */
    twoFourGhzSettings?: CreateNetworkWirelessRfProfile201ApplicationJSONTwoFourGhzSettings;
}
export declare class CreateNetworkWirelessRfProfileResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    createNetworkWirelessRfProfile201ApplicationJSONObject?: CreateNetworkWirelessRfProfile201ApplicationJSON;
}
