import { SpeakeasyBase } from "../../../internal/utils";
import { MetricValue } from "./metricvalue";
import { RowDimensions } from "./rowdimensions";
/**
 * The status specifying why the bid responses were considered to have no applicable bids.
 */
export declare enum BidResponseWithoutBidsStatusRowStatusEnum {
    StatusUnspecified = "STATUS_UNSPECIFIED",
    ResponsesWithoutBids = "RESPONSES_WITHOUT_BIDS",
    ResponsesWithoutBidsForAccount = "RESPONSES_WITHOUT_BIDS_FOR_ACCOUNT",
    ResponsesWithoutBidsForDeal = "RESPONSES_WITHOUT_BIDS_FOR_DEAL"
}
/**
 * The number of impressions with the specified dimension values that were considered to have no applicable bids, as described by the specified status.
 */
export declare class BidResponseWithoutBidsStatusRow extends SpeakeasyBase {
    /**
     * A metric value, with an expected value and a variance; represents a count that may be either exact or estimated (for example, when sampled).
     */
    impressionCount?: MetricValue;
    /**
     * A response may include multiple rows, breaking down along various dimensions. Encapsulates the values of all dimensions for a given row.
     */
    rowDimensions?: RowDimensions;
    /**
     * The status specifying why the bid responses were considered to have no applicable bids.
     */
    status?: BidResponseWithoutBidsStatusRowStatusEnum;
}
