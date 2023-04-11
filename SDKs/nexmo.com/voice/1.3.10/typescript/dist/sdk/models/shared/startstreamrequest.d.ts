import { SpeakeasyBase } from "../../../internal/utils";
/**
 * action to perform
 */
export declare class StartStreamRequest extends SpeakeasyBase {
    /**
     * Set the audio level of the stream in the range `-1 >= level <= 1` with a precision of 0.1. The default value is 0.
     */
    level?: string;
    /**
     * the number of times to play the file, 0 for infinite
     */
    loop?: number;
    streamUrl: string[];
}
