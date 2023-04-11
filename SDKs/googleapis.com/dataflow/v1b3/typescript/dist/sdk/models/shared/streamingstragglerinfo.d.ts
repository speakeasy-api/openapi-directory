import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information useful for streaming straggler identification and debugging.
 */
export declare class StreamingStragglerInfo extends SpeakeasyBase {
    /**
     * The event-time watermark lag at the time of the straggler detection.
     */
    dataWatermarkLag?: string;
    /**
     * End time of this straggler.
     */
    endTime?: string;
    /**
     * Start time of this straggler.
     */
    startTime?: string;
    /**
     * The system watermark lag at the time of the straggler detection.
     */
    systemWatermarkLag?: string;
    /**
     * Name of the worker where the straggler was detected.
     */
    workerName?: string;
}
