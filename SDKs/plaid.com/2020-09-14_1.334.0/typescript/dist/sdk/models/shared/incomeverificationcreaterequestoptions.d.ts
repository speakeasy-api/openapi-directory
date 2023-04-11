import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Optional arguments for `/income/verification/create`
 */
export declare class IncomeVerificationCreateRequestOptions extends SpeakeasyBase {
    /**
     * An array of access tokens corresponding to the Items that will be cross-referenced with the product data. Plaid will attempt to correlate transaction history from these Items with data from the user's paystub, such as date and amount. The `verification` status of the paystub as returned by `/income/verification/paystubs/get` will indicate if the verification status was successful, or, if not, why it failed. If the `transactions` product was not initialized for the Items during Link, it will be initialized after this Link session.
     */
    accessTokens?: string[];
}
