import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Video asset information
 */
export declare class VideoSizeDetails extends SpeakeasyBase {
    /**
     * Display name of this video size
     */
    displayName?: string;
    /**
     * File size (in bytes) of this video size
     */
    fileSize?: number;
    /**
     * Format of this video size
     */
    format?: string;
    /**
     * Frames per second of this video size
     */
    fps?: number;
    /**
     * Height of this video size
     */
    height?: number;
    /**
     * Whether or not videos can be licensed in this video size
     */
    isLicensable?: boolean;
    /**
     * Width of this video size
     */
    width?: number;
}
