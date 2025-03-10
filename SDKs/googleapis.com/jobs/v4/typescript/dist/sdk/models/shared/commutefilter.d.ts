import { SpeakeasyBase } from "../../../internal/utils";
import { LatLng } from "./latlng";
import { TimeOfDay } from "./timeofday";
/**
 * Required. The method of transportation to calculate the commute time for.
 */
export declare enum CommuteFilterCommuteMethodEnum {
    CommuteMethodUnspecified = "COMMUTE_METHOD_UNSPECIFIED",
    Driving = "DRIVING",
    Transit = "TRANSIT",
    Walking = "WALKING",
    Cycling = "CYCLING",
    TransitAccessible = "TRANSIT_ACCESSIBLE"
}
/**
 * Specifies the traffic density to use when calculating commute time.
 */
export declare enum CommuteFilterRoadTrafficEnum {
    RoadTrafficUnspecified = "ROAD_TRAFFIC_UNSPECIFIED",
    TrafficFree = "TRAFFIC_FREE",
    BusyHour = "BUSY_HOUR"
}
/**
 * Parameters needed for commute search.
 */
export declare class CommuteFilter extends SpeakeasyBase {
    /**
     * If `true`, jobs without street level addresses may also be returned. For city level addresses, the city center is used. For state and coarser level addresses, text matching is used. If this field is set to `false` or isn't specified, only jobs that include street level addresses will be returned by commute search.
     */
    allowImpreciseAddresses?: boolean;
    /**
     * Required. The method of transportation to calculate the commute time for.
     */
    commuteMethod?: CommuteFilterCommuteMethodEnum;
    /**
     * Represents a time of day. The date and time zone are either not significant or are specified elsewhere. An API may choose to allow leap seconds. Related types are google.type.Date and `google.protobuf.Timestamp`.
     */
    departureTime?: TimeOfDay;
    /**
     * Specifies the traffic density to use when calculating commute time.
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
