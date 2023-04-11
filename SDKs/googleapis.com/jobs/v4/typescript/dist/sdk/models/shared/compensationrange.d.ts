import { SpeakeasyBase } from "../../../internal/utils";
import { Money } from "./money";
/**
 * Compensation range.
 */
export declare class CompensationRange extends SpeakeasyBase {
    /**
     * Represents an amount of money with its currency type.
     */
    maxCompensation?: Money;
    /**
     * Represents an amount of money with its currency type.
     */
    minCompensation?: Money;
}
