import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Limits the response to events tagged with one of the listed event types.  The possible values include: [CONSTRUCTION, INCIDENT, SPECIAL_EVENT, WEATHER_CONDITION].  Multiple values may be listed, and should be separated by a comma. The default is to return events of all types.
 */
export declare enum GetEventsEventTypeEnum {
    Construction = "CONSTRUCTION",
    SpecialEvent = "SPECIAL_EVENT",
    Incident = "INCIDENT",
    WeatherCondition = "WEATHER_CONDITION",
    RoadCondition = "ROAD_CONDITION"
}
/**
 * The format of the response
 */
export declare enum GetEventsFormatEnum {
    Json = "json",
    Xml = "xml"
}
/**
 * Limits the response to events having a given status.
 */
export declare enum GetEventsStatusEnum {
    All = "ALL",
    Active = "ACTIVE",
    Archived = "ARCHIVED"
}
export declare class GetEventsRequest extends SpeakeasyBase {
    /**
     * Limits the response to events within one of the specified areas.  An area must be specified as the ID of an item returned by the /areas resource. For example: an area_id of 'drivebc.ca/1' limits events to those within the Lower Mainland District.  The default is to return events in all areas.
     */
    areaId?: string;
    /**
     * Limits the response to events that fall within the specified geographical bounding box.  The bbox format must be '[min longitude],[min latitude],[max longitude],[max latitude]' with WGS84 coordinates.  For example: -123.45,48.99,-122.45,49.49.  The default is to return events in all geographical locations.
     */
    bbox?: string;
    /**
     * Limits the response to events based on the date and time that the event was created (first recorded). The date/time must be specified in ISO 8601 format, and may be prefixed by one of the following operators [<, <=, >, >=] to indicate 'before', 'before or equal to', 'after' or 'after or equal to' respectively.  For example, >2013-12-01T12:00:00Z requests all events create after Dec. 1, 2015 at 12pm (noon) Coordinated Universal Time.  The default is to return events with any creation time.
     */
    created?: string;
    /**
     * Limits the response to events tagged with one of the listed event types.  The possible values include: [CONSTRUCTION, INCIDENT, SPECIAL_EVENT, WEATHER_CONDITION].  Multiple values may be listed, and should be separated by a comma. The default is to return events of all types.
     */
    eventType?: GetEventsEventTypeEnum;
    /**
     * The format of the response
     */
    format?: GetEventsFormatEnum;
    /**
     * Limits the response to events reported by a given jurisdiction. The value given must be specified as the ID of a jurisdiction returned by the /jurisdiction resource. The default is to return events from all jurisdictions.
     */
    jurisdiction?: string;
    /**
     * Limits the response to events on a given road as specified by the road name.  An example of a valid road name is 'Highway 1'. The default is to return events on all roads.
     */
    roadName?: string;
    /**
     * Limits the response to events tagged with one of the listed severity values. The possible values are: [MINOR, MODERATE, MAJOR].  Multiple values may be listed, and should be separated by a comma. The default is to return events of any severity.
     */
    severity?: string;
    /**
     * Limits the response to events having a given status.
     */
    status?: GetEventsStatusEnum;
    /**
     * Limits the response to events based on the date and time that the event was last updated. The date/time must be specified in ISO 8601 format, and may be prefixed by one of the following operators [<, <=, >, >=] to indicate 'before', 'before or equal to', 'after' or 'after or equal to' respectively.  For example, >2013-12-01T12:00:00Z requests all events updated after Dec. 1, 2015 at 12pm (noon) Coordinated Universal Time. The default is to return events with any update time
     */
    updated?: string;
}
export declare class GetEventsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
