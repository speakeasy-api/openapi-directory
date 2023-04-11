import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListCardsSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class ListCardsRequest extends SpeakeasyBase {
    /**
     * A pagination cursor returned by a previous call to this endpoint.
     *
     * @remarks
     * Provide this to retrieve the next set of results for your original query.
     *
     * See [Pagination](https://developer.squareup.com/docs/basics/api101/pagination) for more information.
     */
    cursor?: string;
    /**
     * Limit results to cards associated with the customer supplied.
     *
     * @remarks
     * By default, all cards owned by the merchant are returned.
     */
    customerId?: string;
    /**
     * Includes disabled cards.
     *
     * @remarks
     * By default, all enabled cards owned by the merchant are returned.
     */
    includeDisabled?: boolean;
    /**
     * Limit results to cards associated with the reference_id supplied.
     */
    referenceId?: string;
    /**
     * Sorts the returned list by when the card was created with the specified order.
     *
     * @remarks
     * This field defaults to ASC.
     */
    sortOrder?: string;
}
export declare class ListCardsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    listCardsResponse?: shared.ListCardsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
