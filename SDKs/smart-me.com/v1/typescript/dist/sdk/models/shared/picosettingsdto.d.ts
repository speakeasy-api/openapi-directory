import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The authentication type
 */
export declare enum PicoSettingsDtoAuthenticationTypeEnum {
    None = "None",
    Backend = "Backend"
}
/**
 * DTO for the pico charging station settings
 */
export declare class PicoSettingsDto extends SpeakeasyBase {
    /**
     * The authentication type
     */
    authenticationType?: PicoSettingsDtoAuthenticationTypeEnum;
    /**
     * Flag if the car id detection is enabled
     */
    carIdDetection?: boolean;
    /**
     * The Brightness of the LCD Matrix display. 0 = minimum, 255 = maximum
     */
    displayBrightness?: string;
    /**
     * The DNS name of the pico's internal ip
     */
    dnsName?: string;
    /**
     * Enable the fix lock of the charging cable
     */
    fixCableLockEnable?: boolean;
    /**
     * The url of the idle image
     */
    idleImageUrl?: string;
    /**
     * The internal IP address
     */
    internalIp?: string;
    /**
     * The ID of the loadmanagement group
     */
    loadmanagementGroupId?: string;
    /**
     * The max current of this station (in A)
     */
    maxCurrent?: number;
    /**
     * The max current of this station (in A)
     */
    minCurrent?: number;
    /**
     * Flag if ModbusTcp is enabled
     */
    modbusTcp?: boolean;
    /**
     * The name of the station
     */
    name?: string;
    /**
     * The Serial number of the station
     */
    serialNumber?: string;
}
