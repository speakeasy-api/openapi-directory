import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A monetary value, such as the price of a shipping label, the insured value of a package, or an account balance.
 *
 * @remarks
 *
 */
export declare class GetInsuranceBalanceResponseBody extends SpeakeasyBase {
    /**
     * The monetary amount, in the specified currency.
     */
    amount: number;
    currency: string;
}
