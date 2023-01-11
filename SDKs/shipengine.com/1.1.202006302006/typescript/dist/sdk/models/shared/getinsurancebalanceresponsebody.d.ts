import { SpeakeasyBase } from "../../../internal/utils";
import { CurrencyEnum } from "./currencyenum";
/**
 * A monetary value, such as the price of a shipping label, the insured value of a package, or an account balance.
 *
**/
export declare class GetInsuranceBalanceResponseBody extends SpeakeasyBase {
    amount: number;
    currency: CurrencyEnum;
}
