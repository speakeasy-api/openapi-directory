import { SpeakeasyBase } from "../../../internal/utils";
import { VideoProperties } from "./videoproperties";
/**
 * The video source.
 */
export declare enum VideoSourceEnum {
    SourceUnspecified = "SOURCE_UNSPECIFIED",
    Youtube = "YOUTUBE",
    Drive = "DRIVE"
}
/**
 * A PageElement kind representing a video.
 */
export declare class Video extends SpeakeasyBase {
    /**
     * The video source's unique identifier for this video.
     */
    id?: string;
    /**
     * The video source.
     */
    source?: VideoSourceEnum;
    /**
     * An URL to a video. The URL is valid as long as the source video exists and sharing settings do not change.
     */
    url?: string;
    /**
     * The properties of the Video.
     */
    videoProperties?: VideoProperties;
}
