import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Calendar Events
 */
export declare class CalendarEvents {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * List calendar events
     *
     * @remarks
     * Returns all calendar events, paginated and filtered by the date.
     */
    getV2CalendarEvents(req: operations.GetV2CalendarEventsRequest, config?: AxiosRequestConfig): Promise<operations.GetV2CalendarEventsResponse>;
    /**
     * Upsert a calendar event
     *
     * @remarks
     *   Upserts a calendar event object.
     *   Upsert key is a combination of `id` and `i_cal_uid` scoped to the given `calendar_id`.
     *   Bulk operations:
     *   This endpoint is used for bulk operations, see https://developers.salesloft.com/bulk.html for integration instructions.
     *   Use `calendar/events/upsert` as an event type, and this spec as a data spec.
     *   This endpoint should be used directly for the time sensitive calendar event updates.
     *
     */
    postV2CalendarEventsUpsert(req: operations.PostV2CalendarEventsUpsertRequestBody, config?: AxiosRequestConfig): Promise<operations.PostV2CalendarEventsUpsertResponse>;
}
