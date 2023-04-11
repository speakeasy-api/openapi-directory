import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Target scaling by network usage. Only applicable in the App Engine flexible environment.
 */
export declare class NetworkUtilization extends SpeakeasyBase {
    /**
     * Target bytes received per second.
     */
    targetReceivedBytesPerSecond?: number;
    /**
     * Target packets received per second.
     */
    targetReceivedPacketsPerSecond?: number;
    /**
     * Target bytes sent per second.
     */
    targetSentBytesPerSecond?: number;
    /**
     * Target packets sent per second.
     */
    targetSentPacketsPerSecond?: number;
}
