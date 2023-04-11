import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information of an internal touch screen device.
 */
export declare class GoogleChromeManagementV1TouchScreenDevice extends SpeakeasyBase {
    /**
     * Output only. Touch screen device display name.
     */
    displayName?: string;
    /**
     * Output only. Touch screen device is stylus capable or not.
     */
    stylusCapable?: boolean;
    /**
     * Output only. Number of touch points supported on the device.
     */
    touchPointCount?: number;
}
