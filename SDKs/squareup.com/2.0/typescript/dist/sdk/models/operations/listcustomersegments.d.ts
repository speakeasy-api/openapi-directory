import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListCustomerSegmentsSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class ListCustomerSegmentsRequest extends SpeakeasyBase {
    /**
     * A pagination cursor returned by previous calls to `ListCustomerSegments`.
     *
     * @remarks
     * This cursor is used to retrieve the next set of query results.
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
export declare class ListCustomerSegmentsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    listCustomerSegmentsResponse?: shared.ListCustomerSegmentsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
