import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListGiftCardsSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class ListGiftCardsRequest extends SpeakeasyBase {
    /**
     * A pagination cursor returned by a previous call to this endpoint.
     *
     * @remarks
     * Provide this cursor to retrieve the next set of results for the original query.
     * If a cursor is not provided, it returns the first page of the results.
     * For more information, see [Pagination](https://developer.squareup.com/docs/docs/working-with-apis/pagination).
     */
    cursor?: string;
    /**
     * If a value is provided, returns only the gift cards linked to the specified customer
     */
    customerId?: string;
    /**
     * If a value is provided, it returns only that number of results per page.
     *
     * @remarks
     * The maximum number of results allowed per page is 50. The default value is 30.
     */
    limit?: number;
    /**
     * If the state is provided, it returns the gift cards in the specified state
     *
     * @remarks
     * (see [GiftCardStatus](https://developer.squareup.com/reference/square_2021-08-18/enums/GiftCardStatus)).
     * Otherwise, it returns the gift cards of all states.
     */
    state?: string;
    /**
     * If a type is provided, gift cards of this type are returned
     *
     * @remarks
     * (see [GiftCardType](https://developer.squareup.com/reference/square_2021-08-18/enums/GiftCardType)).
     * If no type is provided, it returns gift cards of all types.
     */
    type?: string;
}
export declare class ListGiftCardsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    listGiftCardsResponse?: shared.ListGiftCardsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
