import { SpeakeasyBase } from "../../../internal/utils";
import { CalendarListEntry } from "./calendarlistentry";
/**
 * Successful response
 */
export declare class CalendarList extends SpeakeasyBase {
    /**
     * ETag of the collection.
     */
    etag?: string;
    /**
     * Calendars that are present on the user's calendar list.
     */
    items?: CalendarListEntry[];
    /**
     * Type of the collection ("calendar#calendarList").
     */
    kind?: string;
    /**
     * Token used to access the next page of this result. Omitted if no further results are available, in which case nextSyncToken is provided.
     */
    nextPageToken?: string;
    /**
     * Token used at a later point in time to retrieve only the entries that have changed since this result was returned. Omitted if further results are available, in which case nextPageToken is provided.
     */
    nextSyncToken?: string;
}
