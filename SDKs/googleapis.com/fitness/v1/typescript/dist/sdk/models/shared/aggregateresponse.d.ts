import { SpeakeasyBase } from "../../../internal/utils";
import { AggregateBucket } from "./aggregatebucket";
/**
 * Successful response
 */
export declare class AggregateResponse extends SpeakeasyBase {
    /**
     * A list of buckets containing the aggregated data.
     */
    bucket?: AggregateBucket[];
}
