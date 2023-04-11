import { SpeakeasyBase } from "../../../internal/utils";
import { RatePlanRate } from "./rateplanrate";
/**
 * The minimum number of nights (inclusive) that the guest has to book which include the date to be eligible for this rate.
 */
export declare class RatesPerDateStaythrough extends SpeakeasyBase {
    /**
     * Expressed in minimum value.
     */
    min: number;
}
export declare class RatesPerDate extends SpeakeasyBase {
    /**
     * Determines whether the rate is available for a stay including this date.
     */
    closed: boolean;
    /**
     * Determines whether the rate is available if the arrival falls on this date.
     */
    closedToArrival?: boolean;
    /**
     * Determines whether the rate is available if the departure falls on this date.
     */
    closedToDeparture?: boolean;
    date: string;
    /**
     * Rate prices for each occupancy the room can accommodate.
     */
    rates: RatePlanRate[];
    /**
     * The minimum number of nights (inclusive) that the guest has to book which include the date to be eligible for this rate.
     */
    staythrough?: RatesPerDateStaythrough;
}
