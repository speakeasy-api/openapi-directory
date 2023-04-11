import { SpeakeasyBase } from "../../../internal/utils";
import { ConferenceProperties } from "./conferenceproperties";
/**
 * Successful response
 */
export declare class Calendar extends SpeakeasyBase {
    conferenceProperties?: ConferenceProperties;
    /**
     * Description of the calendar. Optional.
     */
    description?: string;
    /**
     * ETag of the resource.
     */
    etag?: string;
    /**
     * Identifier of the calendar. To retrieve IDs call the calendarList.list() method.
     */
    id?: string;
    /**
     * Type of the resource ("calendar#calendar").
     */
    kind?: string;
    /**
     * Geographic location of the calendar as free-form text. Optional.
     */
    location?: string;
    /**
     * Title of the calendar.
     */
    summary?: string;
    /**
     * The time zone of the calendar. (Formatted as an IANA Time Zone Database name, e.g. "Europe/Zurich".) Optional.
     */
    timeZone?: string;
}
