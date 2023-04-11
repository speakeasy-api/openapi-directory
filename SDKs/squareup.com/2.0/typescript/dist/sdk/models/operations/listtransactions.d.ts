import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListTransactionsSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class ListTransactionsRequest extends SpeakeasyBase {
    /**
     * The beginning of the requested reporting period, in RFC 3339 format.
     *
     * @remarks
     *
     * See [Date ranges](https://developer.squareup.com/docs/build-basics/working-with-dates) for details on date inclusivity/exclusivity.
     *
     * Default value: The current time minus one year.
     */
    beginTime?: string;
    /**
     * A pagination cursor returned by a previous call to this endpoint.
     *
     * @remarks
     * Provide this to retrieve the next set of results for your original query.
     *
     * See [Paginating results](https://developer.squareup.com/docs/working-with-apis/pagination) for more information.
     */
    cursor?: string;
    /**
     * The end of the requested reporting period, in RFC 3339 format.
     *
     * @remarks
     *
     * See [Date ranges](https://developer.squareup.com/docs/build-basics/working-with-dates) for details on date inclusivity/exclusivity.
     *
     * Default value: The current time.
     */
    endTime?: string;
    /**
     * The ID of the location to list transactions for.
     */
    locationId: string;
    /**
     * The order in which results are listed in the response (`ASC` for
     *
     * @remarks
     * oldest first, `DESC` for newest first).
     *
     * Default value: `DESC`
     */
    sortOrder?: string;
}
export declare class ListTransactionsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    listTransactionsResponse?: shared.ListTransactionsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
