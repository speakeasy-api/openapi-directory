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
     * Settings related to 2.4Ghz band
     */
    twoFourGhzSettings?: CreateNetworkWirelessRfProfileRequestBodyTwoFourGhzSettings;
}
export declare class CreateNetworkWirelessRfProfileRequest extends SpeakeasyBase {
    requestBody: CreateNetworkWirelessRfProfileRequestBody;
    networkId: string;
}
export declare class CreateNetworkWirelessRfProfileResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    createNetworkWirelessRfProfile201ApplicationJSONObject?: Record<string, any>;
}
