import { SpeakeasyBase } from "../../../internal/utils";
import { V1Money } from "./v1money";
/**
 * V1PaymentModifier
 */
export declare class V1PaymentModifier extends SpeakeasyBase {
    appliedMoney?: V1Money;
    /**
     * The ID of the applied modifier option, if available. Modifier options applied in older versions of Square Register might not have an ID.
     */
    modifierOptionId?: string;
    /**
     * The modifier option's name.
     */
    name?: string;
}
