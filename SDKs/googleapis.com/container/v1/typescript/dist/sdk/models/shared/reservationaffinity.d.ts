import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Corresponds to the type of reservation consumption.
 */
export declare enum ReservationAffinityConsumeReservationTypeEnum {
    Unspecified = "UNSPECIFIED",
    NoReservation = "NO_RESERVATION",
    AnyReservation = "ANY_RESERVATION",
    SpecificReservation = "SPECIFIC_RESERVATION"
}
/**
 * [ReservationAffinity](https://cloud.google.com/compute/docs/instances/reserving-zonal-resources) is the configuration of desired reservation which instances could take capacity from.
 */
export declare class ReservationAffinity extends SpeakeasyBase {
    /**
     * Corresponds to the type of reservation consumption.
     */
    consumeReservationType?: ReservationAffinityConsumeReservationTypeEnum;
    /**
     * Corresponds to the label key of a reservation resource. To target a SPECIFIC_RESERVATION by name, specify "compute.googleapis.com/reservation-name" as the key and specify the name of your reservation as its value.
     */
    key?: string;
    /**
     * Corresponds to the label value(s) of reservation resource(s).
     */
    values?: string[];
}
