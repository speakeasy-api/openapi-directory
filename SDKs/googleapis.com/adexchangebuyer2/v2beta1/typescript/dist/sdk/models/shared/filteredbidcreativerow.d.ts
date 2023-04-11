import { SpeakeasyBase } from "../../../internal/utils";
import { MetricValue } from "./metricvalue";
import { RowDimensions } from "./rowdimensions";
/**
 * The number of filtered bids with the specified dimension values that have the specified creative.
 */
export declare class FilteredBidCreativeRow extends SpeakeasyBase {
    /**
     * A metric value, with an expected value and a variance; represents a count that may be either exact or estimated (for example, when sampled).
     */
    bidCount?: MetricValue;
    /**
     * The ID of the creative.
     */
    creativeId?: string;
    /**
     * A response may include multiple rows, breaking down along various dimensions. Encapsulates the values of all dimensions for a given row.
     */
    rowDimensions?: RowDimensions;
}
