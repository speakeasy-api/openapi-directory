import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Type of the device.
 */
export declare enum GoogleAdsSearchads360V0CommonDeviceInfoTypeEnum {
    Unspecified = "UNSPECIFIED",
    Unknown = "UNKNOWN",
    Mobile = "MOBILE",
    Tablet = "TABLET",
    Desktop = "DESKTOP",
    ConnectedTv = "CONNECTED_TV",
    Other = "OTHER"
}
/**
 * A device criterion.
 */
export declare class GoogleAdsSearchads360V0CommonDeviceInfo extends SpeakeasyBase {
    /**
     * Type of the device.
     */
    type?: GoogleAdsSearchads360V0CommonDeviceInfoTypeEnum;
}
