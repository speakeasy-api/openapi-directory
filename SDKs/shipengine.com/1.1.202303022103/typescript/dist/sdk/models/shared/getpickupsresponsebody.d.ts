import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorT } from "./error";
import { Link } from "./link";
import { OptionalLink } from "./optionallink";
import { PickupOutput } from "./pickup";
/**
 * Helpful links to other pages of results
 */
export declare class GetPickupsResponseBodyPaginationLink extends SpeakeasyBase {
    /**
     * The link to the first page of results.  This object will _always_ have an `href` field. If there are no results, then the first page will contain an empty array of items.
     *
     * @remarks
     *
     */
    first: Link;
    /**
     * The link to the final page of results.  This object will _always_ have an `href` field. If there are no results, then the final page will contain an empty array of items.
     *
     * @remarks
     *
     */
    last: Link;
    /**
     * The link to the next page of results.  The `href` field will only be set when the `page` is less than `pages`.
     *
     * @remarks
     *
     */
    next: OptionalLink;
    /**
     * The link to the previous page of results.  The `href` field will only be set when the `page` is 2 or greater.
     *
     * @remarks
     *
     */
    prev: OptionalLink;
}
/**
 * An error response body
 */
export declare class GetPickupsResponseBody extends SpeakeasyBase {
    /**
     * The errors associated with the failed API call
     */
    errors: ErrorT[];
    /**
     * Helpful links to other pages of results
     */
    links: GetPickupsResponseBodyPaginationLink;
    /**
     * Current page of the list pickups results
     */
    page: number;
    /**
     * Total number of pages for list pickups results
     */
    pages: number;
    /**
     * An array of pickups associated with the user's account.
     */
    pickups: PickupOutput[];
    /**
     * A UUID that uniquely identifies the request id.
     *
     * @remarks
     * This can be given to the support team to help debug non-trivial issues that may occur
     *
     */
    requestId: string;
    /**
     * The total number of pickups returned
     */
    total: number;
}
