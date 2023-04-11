import { SpeakeasyBase } from "../../../internal/utils";
import { TerminalRefundQuery } from "./terminalrefundquery";
/**
 * An object containing the fields to POST for the request.
 *
 * @remarks
 *
 * See the corresponding object definition for field details.
 */
export declare class SearchTerminalRefundsRequest extends SpeakeasyBase {
    /**
     * A pagination cursor returned by a previous call to this endpoint.
     *
     * @remarks
     * Provide this cursor to retrieve the next set of results for the original query.
     */
    cursor?: string;
    /**
     * Limits the number of results returned for a single request.
     */
    limit?: number;
    query?: TerminalRefundQuery;
}
