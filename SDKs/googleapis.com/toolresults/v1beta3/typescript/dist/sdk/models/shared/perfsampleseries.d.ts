import { SpeakeasyBase } from "../../../internal/utils";
import { BasicPerfSampleSeries } from "./basicperfsampleseries";
/**
 * Resource representing a collection of performance samples (or data points)
 */
export declare class PerfSampleSeries extends SpeakeasyBase {
    /**
     * Encapsulates the metadata for basic sample series represented by a line chart
     */
    basicPerfSampleSeries?: BasicPerfSampleSeries;
    /**
     * A tool results execution ID. @OutputOnly
     */
    executionId?: string;
    /**
     * A tool results history ID. @OutputOnly
     */
    historyId?: string;
    /**
     * The cloud project @OutputOnly
     */
    projectId?: string;
    /**
     * A sample series id @OutputOnly
     */
    sampleSeriesId?: string;
    /**
     * A tool results step ID. @OutputOnly
     */
    stepId?: string;
}
