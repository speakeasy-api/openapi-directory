import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Specifies the type of reservation from which this instance can consume resources: ANY_RESERVATION (default), SPECIFIC_RESERVATION, or NO_RESERVATION. See Consuming reserved instances for examples.
 */
export declare enum ReservationAffinityConsumeReservationTypeEnum {
    AnyReservation = "ANY_RESERVATION",
    NoReservation = "NO_RESERVATION",
    SpecificReservation = "SPECIFIC_RESERVATION",
    SpecificThenAnyReservation = "SPECIFIC_THEN_ANY_RESERVATION",
    Unspecified = "UNSPECIFIED"
}
/**
 * Specifies the reservations that this instance can consume from.
 */
export declare class ReservationAffinity extends SpeakeasyBase {
    /**
     * Specifies the type of reservation from which this instance can consume resources: ANY_RESERVATION (default), SPECIFIC_RESERVATION, or NO_RESERVATION. See Consuming reserved instances for examples.
     */
    consumeReservationType?: ReservationAffinityConsumeReservationTypeEnum;
    /**
     * Corresponds to the label key of a reservation resource. To target a SPECIFIC_RESERVATION by name, specify googleapis.com/reservation-name as the key and specify the name of your reservation as its value.
     */
    key?: string;
    /**
     * Corresponds to the label values of a reservation resource. This can be either a name to a reservation in the same project or "projects/different-project/reservations/some-reservation-name" to target a shared reservation in the same zone but in a different project.
     */
    values?: string[];
}
