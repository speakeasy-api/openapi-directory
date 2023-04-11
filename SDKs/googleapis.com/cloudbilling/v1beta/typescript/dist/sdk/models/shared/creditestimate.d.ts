import { SpeakeasyBase } from "../../../internal/utils";
import { Money } from "./money";
/**
 * An estimated credit applied to the costs on a SKU.
 */
export declare class CreditEstimate extends SpeakeasyBase {
    /**
     * Represents an amount of money with its currency type.
     */
    creditAmount?: Money;
    /**
     * The credit description.
     */
    creditDescription?: string;
    /**
     * The credit type.
     */
    creditType?: string;
}
