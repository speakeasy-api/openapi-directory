import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeviceMetadata extends SpeakeasyBase {
    /**
     * Device CPU make e.g. "Qualcomm"
     */
    cpuMake?: string;
    /**
     * Device CPU model e.g. "MSM8974"
     */
    cpuModel?: string;
    /**
     * Device class (e.g. tablet)
     */
    deviceClass?: string;
    /**
     * OpenGL version
     */
    glEsVersion?: number;
    /**
     * Device manufacturer (e.g. Motorola)
     */
    manufacturer?: string;
    /**
     * Comma separated list of native platforms (e.g. "arm", "arm7")
     */
    nativePlatform?: string;
    /**
     * Device model name (e.g. Droid)
     */
    productName?: string;
    /**
     * Device RAM in Megabytes e.g. "2048"
     */
    ramMb?: number;
    /**
     * Screen density in DPI
     */
    screenDensityDpi?: number;
    /**
     * Screen height in pixels
     */
    screenHeightPx?: number;
    /**
     * Screen width in pixels
     */
    screenWidthPx?: number;
}
