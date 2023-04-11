import { SpeakeasyBase } from "../../../internal/utils";
import { ResponseAddress } from "./responseaddress";
/**
 * type of activity
 */
export declare enum ActivityTypeEnum {
    Start = "start",
    End = "end",
    Service = "service",
    PickupShipment = "pickupShipment",
    DeliverShipment = "deliverShipment",
    Pickup = "pickup",
    Delivery = "delivery",
    Break = "break"
}
export declare class Activity extends SpeakeasyBase {
    /**
     * Address of activity
     */
    address?: ResponseAddress;
    /**
     * Arrival date time with offset like this 1970-01-01T01:00+01:00. If you do not use time-dependent optimization, this is `null`.
     */
    arrDateTime?: Date;
    /**
     * Arrival time at this activity in seconds. If type is `start`, this is not available (since it makes no sense to have `arr_time` at start). However, `end_time` is available and actually means \"departure time\" at start location. It is important to note that `arr_time` does not necessarily mean \"start of underlying activity\", it solely means arrival time at activity location. If this activity has no time windows and if there are no further preparation times, `arr_time` is equal to activity start time.
     */
    arrTime?: number;
    /**
     * cumulated distance from start to this activity in m
     */
    distance?: number;
    /**
     * cumulated driving time from start to this driver activity in seconds
     */
    drivingTime?: number;
    /**
     * End date time with offset like this 1970-01-01T01:00+01:00. If you do not use time-dependent optimization, this is `null`.
     */
    endDateTime?: Date;
    /**
     * End time of and thus departure time at this activity. If type is `end`, this is not available (since it makes no sense to have an `end_time` at end) `end_time` at each activity is equal to the departure time at the activity location.
     */
    endTime?: number;
    /**
     * Id referring to the underlying service or shipment, i.e. the shipment or service this activity belongs to
     */
    id?: string;
    /**
     * Array with size/capacity dimensions after this activity
     */
    loadAfter?: number[];
    /**
     * Array with size/capacity dimensions before this activity
     */
    loadBefore?: number[];
    /**
     * Id that refers to address
     */
    locationId?: string;
    /**
     * preparation time at this activity in seconds
     */
    preparationTime?: number;
    /**
     * type of activity
     */
    type?: ActivityTypeEnum;
    /**
     * Waiting time at this activity in seconds. A waiting time can occur if the activity has at least one time window. If `arr_time` < `time_window.earliest` a waiting time of `time_window_earliest` - `arr_time` occurs.
     */
    waitingTime?: number;
}
