import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information of a display device.
 */
export declare class GoogleChromeManagementV1DisplayDevice extends SpeakeasyBase {
    /**
     * Output only. Display height in millimeters.
     */
    displayHeightMm?: number;
    /**
     * Output only. Display device name.
     */
    displayName?: string;
    /**
     * Output only. Display width in millimeters.
     */
    displayWidthMm?: number;
    /**
     * Output only. Is display internal or not.
     */
    internal?: boolean;
    /**
     * Output only. Year of manufacture.
     */
    manufactureYear?: number;
    /**
     * Output only. Three letter manufacturer ID.
     */
    manufacturerId?: string;
    /**
     * Output only. Manufacturer product code.
     */
    modelId?: number;
}
