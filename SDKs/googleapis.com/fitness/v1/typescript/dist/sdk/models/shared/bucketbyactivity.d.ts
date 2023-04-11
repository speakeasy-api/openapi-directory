import { SpeakeasyBase } from "../../../internal/utils";
export declare class BucketByActivity extends SpeakeasyBase {
    /**
     * The default activity stream will be used if a specific activityDataSourceId is not specified.
     */
    activityDataSourceId?: string;
    /**
     * Specifies that only activity segments of duration longer than minDurationMillis are considered and used as a container for aggregated data.
     */
    minDurationMillis?: string;
}
