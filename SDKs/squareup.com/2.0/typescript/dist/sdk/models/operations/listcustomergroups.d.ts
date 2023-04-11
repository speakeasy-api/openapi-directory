import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListCustomerGroupsSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class ListCustomerGroupsRequest extends SpeakeasyBase {
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
     * The limit is ignored if it is less than 1 or greater than 50. The default value is 50.
     *
     * For more information, see [Pagination](https://developer.squareup.com/docs/working-with-apis/pagination).
     */
    limit?: number;
}
export declare class ListCustomerGroupsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    listCustomerGroupsResponse?: shared.ListCustomerGroupsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
