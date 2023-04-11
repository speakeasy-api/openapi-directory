import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListCustomersSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class ListCustomersRequest extends SpeakeasyBase {
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
     * The maximum number of results to return in a single page. This limit is advisory. The response might contain more or fewer results.
     *
     * @remarks
     * The limit is ignored if it is less than 1 or greater than 100. The default value is 100.
     *
     * For more information, see [Pagination](https://developer.squareup.com/docs/working-with-apis/pagination).
     */
    limit?: number;
    /**
     * Indicates how customers should be sorted.
     *
     * @remarks
     *
     * The default value is `DEFAULT`.
     */
    sortField?: string;
    /**
     * Indicates whether customers should be sorted in ascending (`ASC`) or
     *
     * @remarks
     * descending (`DESC`) order.
     *
     * The default value is `ASC`.
     */
    sortOrder?: string;
}
export declare class ListCustomersResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    listCustomersResponse?: shared.ListCustomersResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
