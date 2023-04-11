import { SpeakeasyBase } from "../../../internal/utils";
import { AllocationResourceStatus } from "./allocationresourcestatus";
import { AllocationSpecificSKUReservation } from "./allocationspecificskureservation";
import { ShareSettings } from "./sharesettings";
/**
 * [Output Only] The status of the reservation.
 */
export declare enum ReservationStatusEnum {
    Creating = "CREATING",
    Deleting = "DELETING",
    Invalid = "INVALID",
    Ready = "READY",
    Updating = "UPDATING"
}
/**
 * Represents a reservation resource. A reservation ensures that capacity is held in a specific zone even if the reserved VMs are not running. For more information, read Reserving zonal resources.
 */
export declare class Reservation extends SpeakeasyBase {
    /**
     * [Output Only] Full or partial URL to a parent commitment. This field displays for reservations that are tied to a commitment.
     */
    commitment?: string;
    /**
     * [Output Only] Creation timestamp in RFC3339 text format.
     */
    creationTimestamp?: string;
    /**
     * An optional description of this resource. Provide this property when you create the resource.
     */
    description?: string;
    /**
     * [Output Only] The unique identifier for the resource. This identifier is defined by the server.
     */
    id?: string;
    /**
     * [Output Only] Type of the resource. Always compute#reservations for reservations.
     */
    kind?: string;
    /**
     * The name of the resource, provided by the client when initially creating the resource. The resource name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression `[a-z]([-a-z0-9]*[a-z0-9])?` which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.
     */
    name?: string;
    /**
     * Resource policies to be added to this reservation. The key is defined by user, and the value is resource policy url. This is to define placement policy with reservation.
     */
    resourcePolicies?: Record<string, string>;
    /**
     * [Output Only] Contains output only fields.
     */
    resourceStatus?: AllocationResourceStatus;
    /**
     * [Output Only] Reserved for future use.
     */
    satisfiesPzs?: boolean;
    /**
     * [Output Only] Server-defined fully-qualified URL for this resource.
     */
    selfLink?: string;
    /**
     * The share setting for reservations and sole tenancy node groups.
     */
    shareSettings?: ShareSettings;
    /**
     * This reservation type allows to pre allocate specific instance configuration. Next ID: 6
     */
    specificReservation?: AllocationSpecificSKUReservation;
    /**
     * Indicates whether the reservation can be consumed by VMs with affinity for "any" reservation. If the field is set, then only VMs that target the reservation by name can consume from this reservation.
     */
    specificReservationRequired?: boolean;
    /**
     * [Output Only] The status of the reservation.
     */
    status?: ReservationStatusEnum;
    /**
     * Zone in which the reservation resides. A zone must be provided if the reservation is created within a commitment.
     */
    zone?: string;
}
