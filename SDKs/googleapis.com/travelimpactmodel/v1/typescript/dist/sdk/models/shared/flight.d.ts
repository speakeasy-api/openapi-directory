import { SpeakeasyBase } from "../../../internal/utils";
import { Date } from "./date";
/**
 * All details related to a single request item for a direct flight emission estimates.
 */
export declare class Flight extends SpeakeasyBase {
    /**
     * Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp
     */
    departureDate?: Date;
    /**
     * Required. IATA airport code for flight destination, e.g. "JFK".
     */
    destination?: string;
    /**
     * Required. Flight number, e.g. 324.
     */
    flightNumber?: number;
    /**
     * Required. IATA carrier code, e.g. "AA".
     */
    operatingCarrierCode?: string;
    /**
     * Required. IATA airport code for flight origin, e.g. "LHR".
     */
    origin?: string;
}
