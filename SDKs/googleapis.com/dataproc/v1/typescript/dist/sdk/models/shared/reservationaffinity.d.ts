import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Optional. Type of reservation to consume
 */
export declare enum ReservationAffinityConsumeReservationTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    NoReservation = "NO_RESERVATION",
    AnyReservation = "ANY_RESERVATION",
    SpecificReservation = "SPECIFIC_RESERVATION"
}
/**
 * Reservation Affinity for consuming Zonal reservation.
 */
export declare class ReservationAffinity extends SpeakeasyBase {
    /**
     * Optional. Type of reservation to consume
     */
    consumeReservationType?: ReservationAffinityConsumeReservationTypeEnum;
    /**
     * Optional. Corresponds to the label key of reservation resource.
     */
    key?: string;
    /**
     * Optional. Corresponds to the label values of reservation resource.
     */
    values?: string[];
}
