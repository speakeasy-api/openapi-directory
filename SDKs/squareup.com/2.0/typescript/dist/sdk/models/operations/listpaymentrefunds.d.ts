import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListPaymentRefundsSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class ListPaymentRefundsRequest extends SpeakeasyBase {
    /**
     * The timestamp for the beginning of the requested reporting period, in RFC 3339 format.
     *
     * @remarks
     *
     * Default: The current time minus one year.
     */
    beginTime?: string;
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
     * The timestamp for the end of the requested reporting period, in RFC 3339 format.
     *
     * @remarks
     *
     * Default: The current time.
     */
    endTime?: string;
    /**
     * The maximum number of results to be returned in a single page.
     *
     * @remarks
     *
     * It is possible to receive fewer results than the specified limit on a given page.
     *
     * If the supplied value is greater than 100, no more than 100 results are returned.
     *
     * Default: 100
     */
    limit?: number;
    /**
     * Limit results to the location supplied. By default, results are returned
     *
     * @remarks
     * for all locations associated with the seller.
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
     * If provided, only refunds with the given source type are returned.
     *
     * @remarks
     * - `CARD` - List refunds only for payments where `CARD` was specified as the payment
     * source.
     *
     * Default: If omitted, refunds are returned regardless of the source type.
     */
    sourceType?: string;
    /**
     * If provided, only refunds with the given status are returned.
     *
     * @remarks
     * For a list of refund status values, see [PaymentRefund](https://developer.squareup.com/reference/square_2021-08-18/objects/PaymentRefund).
     *
     * Default: If omitted, refunds are returned regardless of their status.
     */
    status?: string;
}
export declare class ListPaymentRefundsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    listPaymentRefundsResponse?: shared.ListPaymentRefundsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
