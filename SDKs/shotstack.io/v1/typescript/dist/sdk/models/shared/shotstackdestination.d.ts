import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Send rendered assets to the Shotstack hosting and CDN service. This destination is enabled by default.
 */
export declare class ShotstackDestination extends SpeakeasyBase {
    /**
     * Set to `true` to opt-out from the Shotstack hosting and CDN service. All files must be downloaded within 24 hours of rendering.
     */
    exclude?: boolean;
    /**
     * The destination to send rendered assets to - set to `shotstack` for Shotstack hosting and CDN.
     */
    provider: string;
}
