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
     * Settings related to 2.4Ghz band
     */
    twoFourGhzSettings?: UpdateNetworkWirelessRfProfileRequestBodyTwoFourGhzSettings;
}
export declare class UpdateNetworkWirelessRfProfileRequest extends SpeakeasyBase {
    requestBody?: UpdateNetworkWirelessRfProfileRequestBody;
    networkId: string;
    rfProfileId: string;
}
export declare class UpdateNetworkWirelessRfProfileResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    updateNetworkWirelessRfProfile200ApplicationJSONObject?: Record<string, any>;
}
