import { SpeakeasyBase } from "../../../internal/utils";
import { CurrencyEnum } from "./currencyenum";
/**
 * A monetary value, such as the price of a shipping label, the insured value of a package, or an account balance.
 *
**/
export declare class AddFundsToCarrierResponseBodyMonetaryValue extends SpeakeasyBase {
    amount: number;
    currency: CurrencyEnum;
}
/**
 * The current balance of the requested carrier account
**/
export declare class AddFundsToCarrierResponseBody extends SpeakeasyBase {
    balance: AddFundsToCarrierResponseBodyMonetaryValue;
}
