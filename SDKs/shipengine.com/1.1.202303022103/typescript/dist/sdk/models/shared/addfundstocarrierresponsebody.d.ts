import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A monetary value, such as the price of a shipping label, the insured value of a package, or an account balance.
 *
 * @remarks
 *
 */
export declare class AddFundsToCarrierResponseBodyMonetaryValue extends SpeakeasyBase {
    /**
     * The monetary amount, in the specified currency.
     */
    amount: number;
    currency: string;
}
/**
 * The current balance of the requested carrier account
 */
export declare class AddFundsToCarrierResponseBody extends SpeakeasyBase {
    /**
     * The current balance of the account
     */
    balance: AddFundsToCarrierResponseBodyMonetaryValue;
}
