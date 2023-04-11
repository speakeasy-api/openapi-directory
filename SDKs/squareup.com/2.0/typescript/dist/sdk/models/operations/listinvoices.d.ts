import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListInvoicesSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class ListInvoicesRequest extends SpeakeasyBase {
    /**
     * A pagination cursor returned by a previous call to this endpoint.
     *
     * @remarks
     * Provide this cursor to retrieve the next set of results for your original query.
     *
     * For more information, see [Pagination](https://developer.squareup.com/docs/working-with-apis/pagination).
     */
    cursor?: string;
    /**
     * The maximum number of invoices to return (200 is the maximum `limit`).
     *
     * @remarks
     * If not provided, the server uses a default limit of 100 invoices.
     */
    limit?: number;
    /**
     * The ID of the location for which to list invoices.
     */
    locationId: string;
}
export declare class ListInvoicesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    listInvoicesResponse?: shared.ListInvoicesResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
