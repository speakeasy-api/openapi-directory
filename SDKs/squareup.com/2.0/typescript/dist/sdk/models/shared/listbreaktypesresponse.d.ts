import { SpeakeasyBase } from "../../../internal/utils";
import { BreakType } from "./breaktype";
import { ErrorT } from "./error";
/**
 * The response to a request for a set of `BreakType` objects. The response contains
 *
 * @remarks
 * the requested `BreakType` objects and might contain a set of `Error` objects if
 * the request resulted in errors.
 */
export declare class ListBreakTypesResponse extends SpeakeasyBase {
    /**
     *  A page of `BreakType` results.
     */
    breakTypes?: BreakType[];
    /**
     * The value supplied in the subsequent request to fetch the next page
     *
     * @remarks
     * of `BreakType` results.
     */
    cursor?: string;
    /**
     * Any errors that occurred during the request.
     */
    errors?: ErrorT[];
}
