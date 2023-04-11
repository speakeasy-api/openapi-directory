import { SpeakeasyBase } from "../../../internal/utils";
import { Dataset } from "./dataset";
import { Session } from "./session";
/**
 * The type of a bucket signifies how the data aggregation is performed in the bucket.
 */
export declare enum AggregateBucketTypeEnum {
    Unknown = "unknown",
    Time = "time",
    Session = "session",
    ActivityType = "activityType",
    ActivitySegment = "activitySegment"
}
export declare class AggregateBucket extends SpeakeasyBase {
    /**
     * Available for Bucket.Type.ACTIVITY_TYPE, Bucket.Type.ACTIVITY_SEGMENT
     */
    activity?: number;
    /**
     * There will be one dataset per AggregateBy in the request.
     */
    dataset?: Dataset[];
    /**
     * The end time for the aggregated data, in milliseconds since epoch, inclusive.
     */
    endTimeMillis?: string;
    /**
     * Sessions contain metadata, such as a user-friendly name and time interval information.
     */
    session?: Session;
    /**
     * The start time for the aggregated data, in milliseconds since epoch, inclusive.
     */
    startTimeMillis?: string;
    /**
     * The type of a bucket signifies how the data aggregation is performed in the bucket.
     */
    type?: AggregateBucketTypeEnum;
}
