import { SpeakeasyBase } from "../../../internal/utils";
import { AggregationResult } from "./aggregationresult";
/**
 * A response to a request to aggregated assets values.
 */
export declare class AggregateAssetsValuesResponse extends SpeakeasyBase {
    /**
     * The aggregation results.
     */
    results?: AggregationResult[];
}
