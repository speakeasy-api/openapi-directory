import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListCashDrawerShiftsSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class ListCashDrawerShiftsRequest extends SpeakeasyBase {
    /**
     * The inclusive start time of the query on opened_at, in ISO 8601 format.
     */
    beginTime?: string;
    /**
     * Opaque cursor for fetching the next page of results.
     */
    cursor?: string;
    /**
     * The exclusive end date of the query on opened_at, in ISO 8601 format.
     */
    endTime?: string;
    /**
     * Number of cash drawer shift events in a page of results (200 by
     *
     * @remarks
     * default, 1000 max).
     */
    limit?: number;
    /**
     * The ID of the location to query for a list of cash drawer shifts.
     */
    locationId: string;
    /**
     * The order in which cash drawer shifts are listed in the response,
     *
     * @remarks
     * based on their opened_at field. Default value: ASC
     */
    sortOrder?: string;
}
export declare class ListCashDrawerShiftsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    listCashDrawerShiftsResponse?: shared.ListCashDrawerShiftsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
