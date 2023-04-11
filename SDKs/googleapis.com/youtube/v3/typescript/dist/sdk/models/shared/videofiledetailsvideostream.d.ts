import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The amount that YouTube needs to rotate the original source content to properly display the video.
 */
export declare enum VideoFileDetailsVideoStreamRotationEnum {
    None = "none",
    Clockwise = "clockwise",
    UpsideDown = "upsideDown",
    CounterClockwise = "counterClockwise",
    Other = "other"
}
/**
 * Information about a video stream.
 */
export declare class VideoFileDetailsVideoStream extends SpeakeasyBase {
    /**
     * The video content's display aspect ratio, which specifies the aspect ratio in which the video should be displayed.
     */
    aspectRatio?: number;
    /**
     * The video stream's bitrate, in bits per second.
     */
    bitrateBps?: string;
    /**
     * The video codec that the stream uses.
     */
    codec?: string;
    /**
     * The video stream's frame rate, in frames per second.
     */
    frameRateFps?: number;
    /**
     * The encoded video content's height in pixels.
     */
    heightPixels?: number;
    /**
     * The amount that YouTube needs to rotate the original source content to properly display the video.
     */
    rotation?: VideoFileDetailsVideoStreamRotationEnum;
    /**
     * A value that uniquely identifies a video vendor. Typically, the value is a four-letter vendor code.
     */
    vendor?: string;
    /**
     * The encoded video content's width in pixels. You can calculate the video's encoding aspect ratio as width_pixels / height_pixels.
     */
    widthPixels?: number;
}
