import { SpeakeasyBase } from "../../../internal/utils";
import { MetricValue } from "./metricvalue";
import { RowDimensions } from "./rowdimensions";
/**
 * The status specifying why the winning bids were not billed.
 */
export declare enum NonBillableWinningBidStatusRowStatusEnum {
    StatusUnspecified = "STATUS_UNSPECIFIED",
    AdNotRendered = "AD_NOT_RENDERED",
    InvalidImpression = "INVALID_IMPRESSION",
    FatalVastError = "FATAL_VAST_ERROR",
    LostInMediation = "LOST_IN_MEDIATION"
}
/**
 * The number of winning bids with the specified dimension values for which the buyer was not billed, as described by the specified status.
 */
export declare class NonBillableWinningBidStatusRow extends SpeakeasyBase {
    /**
     * A metric value, with an expected value and a variance; represents a count that may be either exact or estimated (for example, when sampled).
     */
    bidCount?: MetricValue;
    /**
     * A response may include multiple rows, breaking down along various dimensions. Encapsulates the values of all dimensions for a given row.
     */
    rowDimensions?: RowDimensions;
    /**
     * The status specifying why the winning bids were not billed.
     */
    status?: NonBillableWinningBidStatusRowStatusEnum;
}
