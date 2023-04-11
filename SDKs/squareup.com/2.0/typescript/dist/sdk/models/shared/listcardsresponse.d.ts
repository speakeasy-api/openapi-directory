import { SpeakeasyBase } from "../../../internal/utils";
import { Card } from "./card";
import { ErrorT } from "./error";
/**
 * Defines the fields that are included in the response body of
 *
 * @remarks
 * a request to the [ListCards](#endpoint-cards-listcards) endpoint.
 *
 * Note: if there are errors processing the request, the card field will not be
 * present.
 */
export declare class ListCardsResponse extends SpeakeasyBase {
    /**
     * The requested list of `Card`s.
     */
    cards?: Card[];
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
     * Information on errors encountered during the request.
     */
    errors?: ErrorT[];
}
