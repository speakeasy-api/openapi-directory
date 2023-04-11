import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorT } from "./error";
import { V1Money } from "./v1money";
/**
 * V1PaymentTax
 */
export declare class V1PaymentTax extends SpeakeasyBase {
    appliedMoney?: V1Money;
    /**
     * Any errors that occurred during the request.
     */
    errors?: ErrorT[];
    /**
     * The ID of the tax, if available. Taxes applied in older versions of Square Register might not have an ID.
     */
    feeId?: string;
    /**
     * Whether the tax is an ADDITIVE tax or an INCLUSIVE tax.
     */
    inclusionType?: string;
    /**
     * The merchant-defined name of the tax.
     */
    name?: string;
    /**
     * The rate of the tax, as a string representation of a decimal number. A value of 0.07 corresponds to a rate of 7%.
     */
    rate?: string;
}
