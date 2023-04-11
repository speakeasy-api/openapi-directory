import { SpeakeasyBase } from "../../../internal/utils";
import { FreeBusyRequestItem } from "./freebusyrequestitem";
export declare class FreeBusyRequest extends SpeakeasyBase {
    /**
     * Maximal number of calendars for which FreeBusy information is to be provided. Optional. Maximum value is 50.
     */
    calendarExpansionMax?: number;
    /**
     * Maximal number of calendar identifiers to be provided for a single group. Optional. An error is returned for a group with more members than this value. Maximum value is 100.
     */
    groupExpansionMax?: number;
    /**
     * List of calendars and/or groups to query.
     */
    items?: FreeBusyRequestItem[];
    /**
     * The end of the interval for the query formatted as per RFC3339.
     */
    timeMax?: Date;
    /**
     * The start of the interval for the query formatted as per RFC3339.
     */
    timeMin?: Date;
    /**
     * Time zone used in the response. Optional. The default is UTC.
     */
    timeZone?: string;
}
