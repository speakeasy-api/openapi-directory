import { SpeakeasyBase } from "../../../internal/utils";
import { V1Money } from "./v1money";
/**
 * V1PaymentDiscount
 */
export declare class V1PaymentDiscount extends SpeakeasyBase {
    appliedMoney?: V1Money;
    /**
     * The ID of the applied discount, if available. Discounts applied in older versions of Square Register might not have an ID.
     */
    discountId?: string;
    /**
     * The discount's name.
     */
    name?: string;
}
