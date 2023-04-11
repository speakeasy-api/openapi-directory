import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Media type of the license
 */
export declare enum LicenseFormatMediaTypeEnum {
    Image = "image",
    Video = "video",
    Audio = "audio",
    Editorial = "editorial"
}
/**
 * Description of a license
 */
export declare class LicenseFormat extends SpeakeasyBase {
    /**
     * Description of the license
     */
    description?: string;
    /**
     * Format or extension of the media, such as mpeg for videos or jpeg for images
     */
    format?: string;
    /**
     * Media type of the license
     */
    mediaType?: LicenseFormatMediaTypeEnum;
    /**
     * Width of the media, in pixels, allowed by this license
     */
    minResolution?: number;
    /**
     * Keyword that details the size of the media, such as hd or sd for video, huge or vector for images
     */
    size?: string;
}
