import { SpeakeasyBase } from "../../../internal/utils";
import { Size } from "./size";
/**
 * File type of the video format.
 */
export declare enum VideoFormatFileTypeEnum {
    Flv = "FLV",
    Threegpp = "THREEGPP",
    Mp4 = "MP4",
    Webm = "WEBM",
    M3U8 = "M3U8"
}
/**
 * Contains information about supported video formats.
 */
export declare class VideoFormat extends SpeakeasyBase {
    /**
     * File type of the video format.
     */
    fileType?: VideoFormatFileTypeEnum;
    /**
     * ID of the video format.
     */
    id?: number;
    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#videoFormat".
     */
    kind?: string;
    /**
     * Represents the dimensions of ads, placements, creatives, or creative assets.
     */
    resolution?: Size;
    /**
     * The target bit rate of this video format.
     */
    targetBitRate?: number;
}
