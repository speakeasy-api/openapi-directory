import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information for a display.
 */
export declare class GoogleChromeManagementV1DisplayInfo extends SpeakeasyBase {
    /**
     * Output only. Represents the graphics card device id.
     */
    deviceId?: string;
    /**
     * Output only. Display device name.
     */
    displayName?: string;
    /**
     * Output only. Indicates if display is internal or not.
     */
    isInternal?: boolean;
    /**
     * Output only. Refresh rate in Hz.
     */
    refreshRate?: number;
    /**
     * Output only. Resolution height in pixels.
     */
    resolutionHeight?: number;
    /**
     * Output only. Resolution width in pixels.
     */
    resolutionWidth?: number;
}
