import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListGiftCardActivitiesSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class ListGiftCardActivitiesRequest extends SpeakeasyBase {
    /**
     * The timestamp for the beginning of the reporting period, in RFC 3339 format.
     *
     * @remarks
     * Inclusive. Default: The current time minus one year.
     */
    beginTime?: string;
    /**
     * A pagination cursor returned by a previous call to this endpoint.
     *
     * @remarks
     * Provide this cursor to retrieve the next set of results for the original query.
     * If you do not provide the cursor, the call returns the first page of the results.
     */
    cursor?: string;
    /**
     * The timestamp for the end of the reporting period, in RFC 3339 format.
     *
     * @remarks
     * Inclusive. Default: The current time.
     */
    endTime?: string;
    /**
     * If you provide a gift card ID, the endpoint returns activities that belong
     *
     * @remarks
     * to the specified gift card. Otherwise, the endpoint returns all gift card activities for
     * the seller.
     */
    giftCardId?: string;
    /**
     * If you provide a limit value, the endpoint returns the specified number
     *
     * @remarks
     * of results (or less) per page. A maximum value is 100. The default value is 50.
     */
    limit?: number;
    /**
     * If you provide a location ID, the endpoint returns gift card activities for that location.
     *
     * @remarks
     * Otherwise, the endpoint returns gift card activities for all locations.
     */
    locationId?: string;
    /**
     * The order in which the endpoint returns the activities, based on `created_at`.
     *
     * @remarks
     * - `ASC` - Oldest to newest.
     * - `DESC` - Newest to oldest (default).
     */
    sortOrder?: string;
    /**
     * If you provide a type, the endpoint returns gift card activities of this type.
     *
     * @remarks
     * Otherwise, the endpoint returns all types of gift card activities.
     */
    type?: string;
}
export declare class ListGiftCardActivitiesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    listGiftCardActivitiesResponse?: shared.ListGiftCardActivitiesResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
