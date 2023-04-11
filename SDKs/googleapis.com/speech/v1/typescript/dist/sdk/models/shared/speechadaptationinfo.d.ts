import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information on speech adaptation use in results
 */
export declare class SpeechAdaptationInfo extends SpeakeasyBase {
    /**
     * Whether there was a timeout when applying speech adaptation. If true, adaptation had no effect in the response transcript.
     */
    adaptationTimeout?: boolean;
    /**
     * If set, returns a message specifying which part of the speech adaptation request timed out.
     */
    timeoutMessage?: string;
}
