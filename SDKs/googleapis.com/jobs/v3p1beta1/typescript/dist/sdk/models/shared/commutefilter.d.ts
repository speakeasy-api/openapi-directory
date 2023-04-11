import { SpeakeasyBase } from "../../../internal/utils";
import { LatLng } from "./latlng";
import { TimeOfDay } from "./timeofday";
/**
 * Required. The method of transportation for which to calculate the commute time.
 */
export declare enum CommuteFilterCommuteMethodEnum {
    CommuteMethodUnspecified = "COMMUTE_METHOD_UNSPECIFIED",
    Driving = "DRIVING",
    Transit = "TRANSIT",
    Walking = "WALKING",
    Cycling = "CYCLING"
}
/**
 * Optional. Specifies the traffic density to use when calculating commute time.
 */
export declare enum CommuteFilterRoadTrafficEnum {
    RoadTrafficUnspecified = "ROAD_TRAFFIC_UNSPECIFIED",
    TrafficFree = "TRAFFIC_FREE",
    BusyHour = "BUSY_HOUR"
}
/**
 * Input only. Parameters needed for commute search.
 */
export declare class CommuteFilter extends SpeakeasyBase {
    /**
     * Optional. If true, jobs without "precise" addresses (street level addresses or GPS coordinates) might also be returned. For city and coarser level addresses, text matching is used. If this field is set to false or is not specified, only jobs that include precise addresses are returned by Commute Search. Note: If `allow_imprecise_addresses` is set to true, Commute Search is not able to calculate accurate commute times to jobs with city level and coarser address information. Jobs with imprecise addresses will return a `travel_duration` time of 0 regardless of distance from the job seeker.
     */
    allowImpreciseAddresses?: boolean;
    /**
     * Required. The method of transportation for which to calculate the commute time.
     */
    commuteMethod?: CommuteFilterCommuteMethodEnum;
    /**
     * Represents a time of day. The date and time zone are either not significant or are specified elsewhere. An API may choose to allow leap seconds. Related types are google.type.Date and `google.protobuf.Timestamp`.
     */
    departureTime?: TimeOfDay;
    /**
     * Optional. Specifies the traffic density to use when calculating commute time.
     */
    roadTraffic?: CommuteFilterRoadTrafficEnum;
    /**
     * An object that represents a latitude/longitude pair. This is expressed as a pair of doubles to represent degrees latitude and degrees longitude. Unless specified otherwise, this object must conform to the WGS84 standard. Values must be within normalized ranges.
     */
    startCoordinates?: LatLng;
    /**
     * Required. The maximum travel time in seconds. The maximum allowed value is `3600s` (one hour). Format is `123s`.
     */
    travelDuration?: string;
}
