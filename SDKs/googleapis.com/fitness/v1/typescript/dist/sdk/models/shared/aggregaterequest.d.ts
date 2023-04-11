import { SpeakeasyBase } from "../../../internal/utils";
import { AggregateBy } from "./aggregateby";
import { BucketByActivity } from "./bucketbyactivity";
import { BucketBySession } from "./bucketbysession";
import { BucketByTime } from "./bucketbytime";
export declare enum AggregateRequestFilteredDataQualityStandardEnum {
    DataQualityUnknown = "dataQualityUnknown",
    DataQualityBloodPressureEsh2002 = "dataQualityBloodPressureEsh2002",
    DataQualityBloodPressureEsh2010 = "dataQualityBloodPressureEsh2010",
    DataQualityBloodPressureAami = "dataQualityBloodPressureAami",
    DataQualityBloodPressureBhsAA = "dataQualityBloodPressureBhsAA",
    DataQualityBloodPressureBhsAB = "dataQualityBloodPressureBhsAB",
    DataQualityBloodPressureBhsBA = "dataQualityBloodPressureBhsBA",
    DataQualityBloodPressureBhsBB = "dataQualityBloodPressureBhsBB",
    DataQualityBloodGlucoseIso151972003 = "dataQualityBloodGlucoseIso151972003",
    DataQualityBloodGlucoseIso151972013 = "dataQualityBloodGlucoseIso151972013"
}
/**
 * Next id: 10
 */
export declare class AggregateRequest extends SpeakeasyBase {
    /**
     * The specification of data to be aggregated. At least one aggregateBy spec must be provided. All data that is specified will be aggregated using the same bucketing criteria. There will be one dataset in the response for every aggregateBy spec.
     */
    aggregateBy?: AggregateBy[];
    bucketByActivitySegment?: BucketByActivity;
    bucketByActivityType?: BucketByActivity;
    bucketBySession?: BucketBySession;
    bucketByTime?: BucketByTime;
    /**
     * The end of a window of time. Data that intersects with this time window will be aggregated. The time is in milliseconds since epoch, inclusive. The maximum allowed difference between start_time_millis // and end_time_millis is 7776000000 (roughly 90 days).
     */
    endTimeMillis?: string;
    /**
     * DO NOT POPULATE THIS FIELD. It is ignored.
     */
    filteredDataQualityStandard?: AggregateRequestFilteredDataQualityStandardEnum[];
    /**
     * The start of a window of time. Data that intersects with this time window will be aggregated. The time is in milliseconds since epoch, inclusive.
     */
    startTimeMillis?: string;
}
