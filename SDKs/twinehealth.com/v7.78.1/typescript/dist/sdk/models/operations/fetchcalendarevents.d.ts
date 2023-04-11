import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Calendar event type
 */
export declare enum FetchCalendarEventsFilterTypeEnum {
    PlanCheckIn = "plan-check-in",
    Reminder = "reminder",
    TelephoneCall = "telephone-call",
    OfficeVisit = "office-visit",
    VideoCall = "video-call"
}
/**
 * List of related resources to include in the response
 */
export declare enum FetchCalendarEventsIncludeEnum {
    Owner = "owner"
}
export declare class FetchCalendarEventsRequest extends SpeakeasyBase {
    /**
     * Comma-separated list of coach or patient ids. Note that one of the following filters must be specified: `filter[patient]`, `filter[group]`, `filter[organization]`, or `filter[attendees]`.
     *
     * @remarks
     *
     */
    filterAttendees?: string;
    /**
     * If not specified, return all calendar events. If set to `true` return only events marked as completed, if set to `false`, return only events not marked as completed yet.
     */
    filterCompleted?: boolean;
    /**
     * The start (inclusive) and end (exclusive) dates are ISO date and time strings separated by `..`. Example for events completed in November 2017 (America/New_York): `filter[completed_at]=2017-11-01T00:00:00-04:00..2017-12-01T00:00:00-05:00`
     *
     * @remarks
     *
     */
    filterCompletedAt?: string;
    /**
     * The start (inclusive) and end (exclusive) dates are ISO date and time strings separated by `..`. Example for events created in November 2017 (America/New_York): `filter[created_at]=2017-11-01T00:00:00-04:00..2017-12-01T00:00:00-05:00`
     *
     * @remarks
     *
     */
    filterCreatedAt?: string;
    /**
     * The start (inclusive) and end (exclusive) dates are ISO date and time strings separated by `..`. Example for events ending in November 2017 (America/New_York): `filter[end_at]=2017-11-01T00:00:00-04:00..2017-12-01T00:00:00-05:00`
     *
     * @remarks
     *
     */
    filterEndAt?: string;
    /**
     * Comma-separated list of group ids. Note that one of the following filters must be specified: `filter[patient]`, `filter[group]`, `filter[organization]`, or `filter[attendees]`.
     *
     * @remarks
     *
     */
    filterGroups?: string;
    /**
     * Fitbit Plus organization id. Note that one of the following filters must be specified: `filter[patient]`, `filter[group]`, `filter[organization]`, or `filter[attendees]`.
     *
     * @remarks
     *
     */
    filterOrganization?: string;
    /**
     * Patient id to fetch calendar event. Note that one of the following filters must be specified: `filter[patient]`, `filter[group]`, `filter[organization]`, or `filter[attendees]`.
     *
     * @remarks
     *
     */
    filterPatient?: string;
    /**
     * The start (inclusive) and end (exclusive) dates are ISO date and time strings separated by `..`. Example for events starting in November 2017 (America/New_York): `filter[start_at]=2017-11-01T00:00:00-04:00..2017-12-01T00:00:00-05:00`
     *
     * @remarks
     *
     */
    filterStartAt?: string;
    /**
     * Calendar event type
     */
    filterType?: FetchCalendarEventsFilterTypeEnum;
    /**
     * The start (inclusive) and end (exclusive) dates are ISO date and time strings separated by `..`. Example for events updated in November 2017 (America/New_York): `filter[updated_at]=2017-11-01T00:00:00-04:00..2017-12-01T00:00:00-05:00`
     *
     * @remarks
     *
     */
    filterUpdatedAt?: string;
    /**
     * List of related resources to include in the response
     */
    include?: FetchCalendarEventsIncludeEnum;
    /**
     * Page cursor
     */
    pageCursor?: string;
    /**
     * Page limit
     */
    pageLimit?: number;
    /**
     * Page number
     */
    pageNumber?: number;
    /**
     * Page size
     */
    pageSize?: number;
}
export declare class FetchCalendarEventsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    fetchCalendarEventsResponse?: shared.FetchCalendarEventsResponse;
    /**
     * Unauthorized
     */
    fetchErrorResponse?: shared.FetchErrorResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
