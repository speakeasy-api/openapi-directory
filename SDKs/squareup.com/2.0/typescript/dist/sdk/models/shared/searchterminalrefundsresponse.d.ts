import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorT } from "./error";
import { TerminalRefund } from "./terminalrefund";
/**
 * Success
 */
export declare class SearchTerminalRefundsResponse extends SpeakeasyBase {
    /**
     * The pagination cursor to be used in a subsequent request. If empty,
     *
     * @remarks
     * this is the final response.
     *
     * See [Pagination](https://developer.squareup.com/docs/basics/api101/pagination) for more information.
     */
    cursor?: string;
    /**
     * Information about errors encountered during the request.
     */
    errors?: ErrorT[];
    /**
     * The requested search result of `TerminalRefund` objects.
     */
    refunds?: TerminalRefund[];
}
