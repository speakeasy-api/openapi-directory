import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorT } from "./error";
import { LoyaltyAccount } from "./loyaltyaccount";
/**
 * A response that includes the loyalty account.
 */
export declare class RetrieveLoyaltyAccountResponse extends SpeakeasyBase {
    /**
     * Any errors that occurred during the request.
     */
    errors?: ErrorT[];
    /**
     * Describes a loyalty account. For more information, see
     *
     * @remarks
     * [Manage Loyalty Accounts Using the Loyalty API](https://developer.squareup.com/docs/loyalty-api/overview).
     */
    loyaltyAccount?: LoyaltyAccount;
}
