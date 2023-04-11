import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorT } from "./error";
import { TerminalCheckout } from "./terminalcheckout";
/**
 * Success
 */
export declare class SearchTerminalCheckoutsResponse extends SpeakeasyBase {
    /**
     * The requested search result of `TerminalCheckout` objects.
     */
    checkouts?: TerminalCheckout[];
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
}
