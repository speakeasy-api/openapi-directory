import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information about an audio stream.
 */
export declare class VideoFileDetailsAudioStream extends SpeakeasyBase {
    /**
     * The audio stream's bitrate, in bits per second.
     */
    bitrateBps?: string;
    /**
     * The number of audio channels that the stream contains.
     */
    channelCount?: number;
    /**
     * The audio codec that the stream uses.
     */
    codec?: string;
    /**
     * A value that uniquely identifies a video vendor. Typically, the value is a four-letter vendor code.
     */
    vendor?: string;
}
