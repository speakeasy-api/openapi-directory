import { SpeakeasyBase } from "../../../internal/utils";
import { FutureReservationSpecificSKUProperties } from "./futurereservationspecificskuproperties";
import { FutureReservationStatus } from "./futurereservationstatus";
import { FutureReservationTimeWindow } from "./futurereservationtimewindow";
import { ShareSettings } from "./sharesettings";
/**
 * Planning state before being submitted for evaluation
 */
export declare enum FutureReservationPlanningStatusEnum {
    Draft = "DRAFT",
    PlanningStatusUnspecified = "PLANNING_STATUS_UNSPECIFIED",
    Submitted = "SUBMITTED"
}
/**
 * Successful response
 */
export declare class FutureReservation extends SpeakeasyBase {
    /**
     * [Output Only] The creation timestamp for this future reservation in RFC3339 text format.
     */
    creationTimestamp?: string;
    /**
     * An optional description of this resource. Provide this property when you create the future reservation.
     */
    description?: string;
    /**
     * [Output Only] A unique identifier for this future reservation. The server defines this identifier.
     */
    id?: string;
    /**
     * [Output Only] Type of the resource. Always compute#futureReservation for future reservations.
     */
    kind?: string;
    /**
     * The name of the resource, provided by the client when initially creating the resource. The resource name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression `[a-z]([-a-z0-9]*[a-z0-9])?` which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.
     */
    name?: string;
    /**
     * Name prefix for the reservations to be created at the time of delivery. The name prefix must comply with RFC1035. Maximum allowed length for name prefix is 20. Automatically created reservations name format will be -date-####.
     */
    namePrefix?: string;
    /**
     * Planning state before being submitted for evaluation
     */
    planningStatus?: FutureReservationPlanningStatusEnum;
    /**
     * [Output Only] Server-defined fully-qualified URL for this resource.
     */
    selfLink?: string;
    /**
     * [Output Only] Server-defined URL for this resource with the resource id.
     */
    selfLinkWithId?: string;
    /**
     * The share setting for reservations and sole tenancy node groups.
     */
    shareSettings?: ShareSettings;
    specificSkuProperties?: FutureReservationSpecificSKUProperties;
    /**
     * [Output only] Represents status related to the future reservation.
     */
    status?: FutureReservationStatus;
    timeWindow?: FutureReservationTimeWindow;
    /**
     * [Output Only] URL of the Zone where this future reservation resides.
     */
    zone?: string;
}
