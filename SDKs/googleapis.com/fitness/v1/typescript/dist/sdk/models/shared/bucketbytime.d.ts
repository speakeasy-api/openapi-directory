import { SpeakeasyBase } from "../../../internal/utils";
import { BucketByTimePeriod } from "./bucketbytimeperiod";
export declare class BucketByTime extends SpeakeasyBase {
    /**
     * Specifies that result buckets aggregate data by exactly durationMillis time frames. Time frames that contain no data will be included in the response with an empty dataset.
     */
    durationMillis?: string;
    period?: BucketByTimePeriod;
}
