import { SpeakeasyBase } from "../../../internal/utils";
import { AudioStream } from "./audiostream";
import { TextStream } from "./textstream";
import { VideoStream } from "./videostream";
/**
 * Encoding of an input file such as an audio, video, or text track. Elementary streams must be packaged before mapping and sharing between different output formats.
 */
export declare class ElementaryStream extends SpeakeasyBase {
    /**
     * Audio stream resource.
     */
    audioStream?: AudioStream;
    /**
     * A unique key for this elementary stream.
     */
    key?: string;
    /**
     * Encoding of a text stream. For example, closed captions or subtitles.
     */
    textStream?: TextStream;
    /**
     * Video stream resource.
     */
    videoStream?: VideoStream;
}
