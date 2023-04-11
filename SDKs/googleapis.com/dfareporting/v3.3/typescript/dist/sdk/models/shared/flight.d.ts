import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Flight
 */
export declare class Flight extends SpeakeasyBase {
    endDate?: Date;
    /**
     * Rate or cost of this flight.
     */
    rateOrCost?: string;
    startDate?: Date;
    /**
     * Units of this flight.
     */
    units?: string;
}
