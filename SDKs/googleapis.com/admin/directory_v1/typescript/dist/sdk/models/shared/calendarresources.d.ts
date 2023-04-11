import { SpeakeasyBase } from "../../../internal/utils";
import { CalendarResource } from "./calendarresource";
/**
 * Public API: Resources.calendars
 */
export declare class CalendarResources extends SpeakeasyBase {
    /**
     * ETag of the resource.
     */
    etag?: string;
    /**
     * The CalendarResources in this page of results.
     */
    items?: CalendarResource[];
    /**
     * Identifies this as a collection of CalendarResources. This is always `admin#directory#resources#calendars#calendarResourcesList`.
     */
    kind?: string;
    /**
     * The continuation token, used to page through large result sets. Provide this value in a subsequent request to return the next page of results.
     */
    nextPageToken?: string;
}
