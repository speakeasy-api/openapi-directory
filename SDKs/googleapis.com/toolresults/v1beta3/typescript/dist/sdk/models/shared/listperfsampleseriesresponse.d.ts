import { SpeakeasyBase } from "../../../internal/utils";
import { PerfSampleSeries } from "./perfsampleseries";
/**
 * Successful response
 */
export declare class ListPerfSampleSeriesResponse extends SpeakeasyBase {
    /**
     * The resulting PerfSampleSeries sorted by id
     */
    perfSampleSeries?: PerfSampleSeries[];
}
