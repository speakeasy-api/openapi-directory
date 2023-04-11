import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListDisputesSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class ListDisputesRequest extends SpeakeasyBase {
    /**
     * A pagination cursor returned by a previous call to this endpoint.
     *
     * @remarks
     * Provide this cursor to retrieve the next set of results for the original query.
     * For more information, see [Pagination](https://developer.squareup.com/docs/basics/api101/pagination).
     */
    cursor?: string;
    /**
     * The ID of the location for which to return a list of disputes. If not specified, the endpoint returns
     *
     * @remarks
     * all open disputes (the dispute status is not `INQUIRY_CLOSED`, `WON`, or `LOST`) associated with all locations.
     */
    locationId?: string;
    /**
     * The dispute states to filter the result.
     *
     * @remarks
     * If not specified, the endpoint returns all open disputes (the dispute status is not `INQUIRY_CLOSED`, `WON`,
     * or `LOST`).
     */
    states?: string;
}
export declare class ListDisputesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    listDisputesResponse?: shared.ListDisputesResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
