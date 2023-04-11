import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetV2PaymentsSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class GetV2PaymentsRequest extends SpeakeasyBase {
    /**
     * The timestamp for the beginning of the reporting period, in RFC 3339 format.
     *
     * @remarks
     * Inclusive. Default: The current time minus one year.
     */
    beginTime?: string;
    /**
     * The brand of the payment card (for example, VISA).
     */
    cardBrand?: string;
    /**
     * A pagination cursor returned by a previous call to this endpoint.
     *
     * @remarks
     * Provide this cursor to retrieve the next set of results for the original query.
     *
     * For more information, see [Pagination](https://developer.squareup.com/docs/basics/api101/pagination).
     */
    cursor?: string;
    /**
     * The timestamp for the end of the reporting period, in RFC 3339 format.
     *
     * @remarks
     *
     * Default: The current time.
     */
    endTime?: string;
    /**
     * The last four digits of a payment card.
     */
    last4?: string;
    /**
     * The maximum number of results to be returned in a single page.
     *
     * @remarks
     * It is possible to receive fewer results than the specified limit on a given page.
     *
     * The default value of 100 is also the maximum allowed value. If the provided value is
     * greater than 100, it is ignored and the default value is used instead.
     *
     * Default: `100`
     */
    limit?: number;
    /**
     * Limit results to the location supplied. By default, results are returned
     *
     * @remarks
     * for the default (main) location associated with the seller.
     */
    locationId?: string;
    /**
     * The order in which results are listed:
     *
     * @remarks
     * - `ASC` - Oldest to newest.
     * - `DESC` - Newest to oldest (default).
     */
    sortOrder?: string;
    /**
     * The exact amount in the `total_money` for a payment.
     */
    total?: number;
}
export declare class GetV2PaymentsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    listPaymentsResponse?: shared.ListPaymentsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
