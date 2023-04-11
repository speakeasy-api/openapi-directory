import { SpeakeasyBase } from "../../../internal/utils";
import { DistrictList } from "./districtlist";
import { Webcast } from "./webcast";
/**
 * Successful response
 */
export declare class Event extends SpeakeasyBase {
    /**
     * Address of the event's venue, if available.
     */
    address?: string;
    /**
     * City, town, village, etc. the event is located in.
     */
    city?: string;
    /**
     * Country the event is located in.
     */
    country?: string;
    district?: DistrictList;
    /**
     * An array of event keys for the divisions at this event.
     */
    divisionKeys?: string[];
    /**
     * Event end date in `yyyy-mm-dd` format.
     */
    endDate: Date;
    /**
     * Event short code, as provided by FIRST.
     */
    eventCode: string;
    /**
     * Event Type, as defined here: https://github.com/the-blue-alliance/the-blue-alliance/blob/master/consts/event_type.py#L2
     */
    eventType: number;
    /**
     * Event Type, eg Regional, District, or Offseason.
     */
    eventTypeString: string;
    /**
     * Public facing event code used by FIRST (on frc-events.firstinspires.org, for example)
     */
    firstEventCode?: string;
    /**
     * The FIRST internal Event ID, used to link to the event on the FRC webpage.
     */
    firstEventId?: string;
    /**
     * Google Maps Place ID for the event address.
     */
    gmapsPlaceId?: string;
    /**
     * Link to address location on Google Maps.
     */
    gmapsUrl?: string;
    /**
     * TBA event key with the format yyyy[EVENT_CODE], where yyyy is the year, and EVENT_CODE is the event code of the event.
     */
    key: string;
    /**
     * Latitude for the event address.
     */
    lat?: number;
    /**
     * Longitude for the event address.
     */
    lng?: number;
    /**
     * Name of the location at the address for the event, eg. Blue Alliance High School.
     */
    locationName?: string;
    /**
     * Official name of event on record either provided by FIRST or organizers of offseason event.
     */
    name: string;
    /**
     * The TBA Event key that represents the event's parent. Used to link back to the event from a division event. It is also the inverse relation of `divison_keys`.
     */
    parentEventKey?: string;
    /**
     * Playoff Type, as defined here: https://github.com/the-blue-alliance/the-blue-alliance/blob/master/consts/playoff_type.py#L4, or null.
     */
    playoffType?: number;
    /**
     * String representation of the `playoff_type`, or null.
     */
    playoffTypeString?: string;
    /**
     * Postal code from the event address.
     */
    postalCode?: string;
    /**
     * Same as `name` but doesn't include event specifiers, such as 'Regional' or 'District'. May be null.
     */
    shortName?: string;
    /**
     * Event start date in `yyyy-mm-dd` format.
     */
    startDate: Date;
    /**
     * State or Province the event is located in.
     */
    stateProv?: string;
    /**
     * Timezone name.
     */
    timezone?: string;
    webcasts?: Webcast[];
    /**
     * The event's website, if any.
     */
    website?: string;
    /**
     * Week of the event relative to the first official season event, zero-indexed. Only valid for Regionals, Districts, and District Championships. Null otherwise. (Eg. A season with a week 0 'preseason' event does not count, and week 1 events will show 0 here. Seasons with a week 0.5 regional event will show week 0 for those event(s) and week 1 for week 1 events and so on.)
     */
    week?: number;
    /**
     * Year the event data is for.
     */
    year: number;
}
