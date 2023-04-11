import { SpeakeasyBase } from "../../../internal/utils";
import { TimeInterval } from "./timeinterval";
/**
 * A response may include multiple rows, breaking down along various dimensions. Encapsulates the values of all dimensions for a given row.
 */
export declare class RowDimensions extends SpeakeasyBase {
    /**
     * The publisher identifier for this row, if a breakdown by [BreakdownDimension.PUBLISHER_IDENTIFIER](https://developers.google.com/authorized-buyers/apis/reference/rest/v2beta1/bidders.accounts.filterSets#FilterSet.BreakdownDimension) was requested.
     */
    publisherIdentifier?: string;
    /**
     * An interval of time, with an absolute start and end.
     */
    timeInterval?: TimeInterval;
}
