import { SpeakeasyBase } from "../../../internal/utils";
import { Dimensions } from "./dimensions";
/**
 * Represents information about the transcoded audio or video file.
 */
export declare class Transcode extends SpeakeasyBase {
    /**
     * The bit rate for the audio stream of the transcoded video, or the bit rate for the transcoded audio, in kilobits per second.
     */
    audioBitRateKbps?: string;
    /**
     * The sample rate for the audio stream of the transcoded video, or the sample rate for the transcoded audio, in hertz.
     */
    audioSampleRateHz?: string;
    /**
     * The transcoding bit rate of the transcoded video, in kilobits per second.
     */
    bitRateKbps?: string;
    /**
     * Dimensions.
     */
    dimensions?: Dimensions;
    /**
     * The size of the transcoded file, in bytes.
     */
    fileSizeBytes?: string;
    /**
     * The frame rate of the transcoded video, in frames per second.
     */
    frameRate?: number;
    /**
     * The MIME type of the transcoded file.
     */
    mimeType?: string;
    /**
     * The name of the transcoded file.
     */
    name?: string;
    /**
     * Indicates if the transcoding was successful.
     */
    transcoded?: boolean;
}
