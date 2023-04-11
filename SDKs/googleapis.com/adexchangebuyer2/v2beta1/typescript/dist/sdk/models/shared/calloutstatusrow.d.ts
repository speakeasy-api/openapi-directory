import { SpeakeasyBase } from "../../../internal/utils";
import { MetricValue } from "./metricvalue";
import { RowDimensions } from "./rowdimensions";
/**
 * The number of impressions with the specified dimension values where the corresponding bid request or bid response was not successful, as described by the specified callout status.
 */
export declare class CalloutStatusRow extends SpeakeasyBase {
    /**
     * The ID of the callout status. See [callout-status-codes](https://developers.google.com/authorized-buyers/rtb/downloads/callout-status-codes).
     */
    calloutStatusId?: number;
    /**
     * A metric value, with an expected value and a variance; represents a count that may be either exact or estimated (for example, when sampled).
     */
    impressionCount?: MetricValue;
    /**
     * A response may include multiple rows, breaking down along various dimensions. Encapsulates the values of all dimensions for a given row.
     */
    rowDimensions?: RowDimensions;
}
