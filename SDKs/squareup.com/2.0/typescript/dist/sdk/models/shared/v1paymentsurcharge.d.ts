import { SpeakeasyBase } from "../../../internal/utils";
import { V1Money } from "./v1money";
import { V1PaymentTax } from "./v1paymenttax";
/**
 * V1PaymentSurcharge
 */
export declare class V1PaymentSurcharge extends SpeakeasyBase {
    amountMoney?: V1Money;
    appliedMoney?: V1Money;
    /**
     * The name of the surcharge.
     */
    name?: string;
    /**
     * The amount of the surcharge as a percentage. The percentage is provided as a string representing the decimal equivalent of the percentage. For example, "0.7" corresponds to a 7% surcharge. Exactly one of rate or amount_money should be set.
     */
    rate?: string;
    /**
     * A Square-issued unique identifier associated with the surcharge.
     */
    surchargeId?: string;
    /**
     * Indicates whether the surcharge is taxable.
     */
    taxable?: boolean;
    /**
     * The list of taxes that should be applied to the surcharge.
     */
    taxes?: V1PaymentTax[];
    /**
     * Indicates the source of the surcharge. For example, if it was applied as an automatic gratuity for a large group.
     */
    type?: string;
}
