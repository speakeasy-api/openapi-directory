import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListSubscriptionEventsSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class ListSubscriptionEventsRequest extends SpeakeasyBase {
    /**
     * A pagination cursor returned by a previous call to this endpoint.
     *
     * @remarks
     * Provide this to retrieve the next set of results for the original query.
     *
     * For more information, see [Pagination](https://developer.squareup.com/docs/working-with-apis/pagination).
     */
    cursor?: string;
    /**
     * The upper limit on the number of subscription events to return
     *
     * @remarks
     * in the response.
     *
     * Default: `200`
     */
    limit?: number;
    /**
     * The ID of the subscription to retrieve the events for.
     */
    subscriptionId: string;
}
export declare class ListSubscriptionEventsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    listSubscriptionEventsResponse?: shared.ListSubscriptionEventsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
