import { SpeakeasyBase } from "../../../internal/utils";
import { CreditEstimate } from "./creditestimate";
import { Money } from "./money";
/**
 * An estimated cost.
 */
export declare class CostEstimate extends SpeakeasyBase {
    /**
     * The estimated credits applied.
     */
    creditEstimates?: CreditEstimate[];
    /**
     * Represents an amount of money with its currency type.
     */
    netCostEstimate?: Money;
    /**
     * Represents an amount of money with its currency type.
     */
    preCreditCostEstimate?: Money;
}
