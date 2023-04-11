import { SpeakeasyBase } from "../../../internal/utils";
import { Aggregation } from "./aggregation";
/**
 * A request to aggregate one or more values.
 */
export declare class AggregateAssetsValuesRequest extends SpeakeasyBase {
    /**
     * Array of aggregations to perform. Up to 25 aggregations can be defined.
     */
    aggregations?: Aggregation[];
    /**
     * The aggregation will be performed on assets that match the provided filter.
     */
    filter?: string;
}
