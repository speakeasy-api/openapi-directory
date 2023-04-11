import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Image size information
 */
export declare class ImageSizeDetails extends SpeakeasyBase {
    /**
     * Display name of this image size
     */
    displayName?: string;
    dpi?: number;
    /**
     * File size (in bytes) of this image size
     */
    fileSize?: number;
    /**
     * Format of this image size
     */
    format?: string;
    /**
     * Height of this image size
     */
    height?: number;
    /**
     * Whether or not this image can be licensed in this image size
     */
    isLicensable?: boolean;
    /**
     * Width of this image size
     */
    width?: number;
}
