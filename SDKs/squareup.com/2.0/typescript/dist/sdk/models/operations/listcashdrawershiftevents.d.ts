import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListCashDrawerShiftEventsSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class ListCashDrawerShiftEventsRequest extends SpeakeasyBase {
    /**
     * Opaque cursor for fetching the next page of results.
     */
    cursor?: string;
    /**
     * Number of resources to be returned in a page of results (200 by
     *
     * @remarks
     * default, 1000 max).
     */
    limit?: number;
    /**
     * The ID of the location to list cash drawer shifts for.
     */
    locationId: string;
    /**
     * The shift ID.
     */
    shiftId: string;
}
export declare class ListCashDrawerShiftEventsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    listCashDrawerShiftEventsResponse?: shared.ListCashDrawerShiftEventsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
