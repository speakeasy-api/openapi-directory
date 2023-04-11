import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information of a graphics adapter (GPU).
 */
export declare class GoogleChromeManagementV1GraphicsAdapterInfo extends SpeakeasyBase {
    /**
     * Output only. Adapter name. Example: Mesa DRI Intel(R) UHD Graphics 620 (Kabylake GT2).
     */
    adapter?: string;
    /**
     * Output only. Represents the graphics card device id.
     */
    deviceId?: string;
    /**
     * Output only. Version of the GPU driver.
     */
    driverVersion?: string;
}
